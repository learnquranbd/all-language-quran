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
  "37:41": {
    "sections": [
      {
        "h": {
          "en": "After the Exception, a Portion",
          "bn": "ব্যতিক্রমের পরে প্রাপ্য"
        },
        "p": [
          {
            "en": "The passage has just turned on a single word. In 37:38 and 37:39 those who mocked the call to tawhid are told they will taste the painful punishment and be repaid only for what they used to do. Then 37:40 opens a door with illa: except the sincere servants of Allah. This verse answers the question that exception raises. If they are spared the punishment, what do they receive instead? The first thing said of them is four words: ula'ika lahum rizqun ma'lum, those will have a known provision.",
            "bn": "অনুচ্ছেদটা এইমাত্র একটি শব্দে মোড় নিয়েছে। ৩৭:৩৮ ও ৩৭:৩৯ আয়াতে তাওহীদের দাওয়াত নিয়ে যারা ঠাট্টা করত, তাদের শোনানো হয়েছে যে তারা মর্মান্তিক শাস্তির স্বাদ নেবে, আর প্রতিফল পাবে কেবল নিজেদের আমলেরই। তারপর ৩৭:৪০ আয়াত ইল্লা শব্দে একটা দরজা খুলে দেয়: তবে আল্লাহর একনিষ্ঠ বান্দারা নয়। এই ব্যতিক্রম স্বাভাবিকভাবেই একটা প্রশ্ন জাগায়। শাস্তি থেকে তাঁরা যদি রেহাই পান, তবে বদলে কী পাবেন? এ আয়াত সেই প্রশ্নের জবাব। তাঁদের সম্পর্কে প্রথম কথাটা মাত্র ৪ শব্দের: উলাইকা লাহুম রিযকুম মা'লূম, তাঁদের জন্য আছে নির্ধারিত রিযক।"
          },
          {
            "en": "Ma'arif al-Qur'an marks the shift: after describing the condition of the people of Jahannam, the verses now describe the people of Jannah, first in ten verses on the comforts they are given, then in a story of one of them. Ibn Kathir, commenting on 37:38 to 37:47 as one group, compares the exception to others like it, such as 103:1 to 103:3 and 95:4 to 95:6. He says of these servants that they will not taste the painful torment nor be brought to account; their evil deeds, if they have any, will be overlooked.",
            "bn": "মাআরিফুল কুরআন মোড়টা চিনিয়ে দেয়। জাহান্নামবাসীদের অবস্থা বলার পর আয়াতগুলো এবার জান্নাতবাসীদের কথা বলছে। প্রথম ১০টি আয়াতে আছে তাঁদের দেওয়া আরাম-আয়েশের বর্ণনা, তারপর তাঁদেরই একজনের একটা ঘটনা। ইবন কাসীর ৩৭:৩৮ থেকে ৩৭:৪৭ পর্যন্ত আয়াতগুলোর তাফসীর একসঙ্গে করেছেন। এই ব্যতিক্রমকে তিনি মিলিয়েছেন একই ধরনের অন্য আয়াতের সঙ্গে, যেমন ১০৩:১ থেকে ১০৩:৩ এবং ৯৫:৪ থেকে ৯৫:৬। এই বান্দাদের সম্পর্কে তিনি বলেন, তাঁরা মর্মান্তিক শাস্তির স্বাদ নেবেন না, তাঁদের হিসাবও নেওয়া হবে না। তাঁদের কোনো মন্দ কাজ থাকলে তা ক্ষমা করে দেওয়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Words Before the Details",
          "bn": "বিস্তারিতের আগে চার শব্দ"
        },
        "p": [
          {
            "en": "Ula'ika, those, points back to the servants just named; the reward is fastened to the people the exception described, and to no one else by default. Lahum, for them, says the provision belongs to them. Then the two nouns, rizq and ma'lum, both without the definite article. Rizq is the ordinary word for provision, the same word a person uses for daily bread and wages in this world. The verse takes that familiar word and attaches to it a single quality: known. Everything the commentators say about this verse is an attempt to say what that one quality means.",
            "bn": "উলাইকা, অর্থাৎ ওরাই, ইশারা করছে এইমাত্র বলা বান্দাদের দিকে। পুরস্কারটা বাঁধা আছে সেই মানুষদের সঙ্গে, যাদের কথা ব্যতিক্রমে বলা হয়েছে। আপনা-আপনি আর কারও জন্য নয়। লাহুম, তাঁদের জন্য, অর্থাৎ রিযকটা তাঁদেরই। তারপর দুটি বিশেষ্য, রিযক আর মা'লূম, দুটিই আলিফ-লাম ছাড়া। রিযক খুব চেনা শব্দ। দুনিয়ার রুটি-রুজি, বেতন-মজুরি বোঝাতে মানুষ এই শব্দই বলে। আয়াতটি সেই চেনা শব্দটা নিয়ে তার সঙ্গে জুড়ে দেয় একটিমাত্র গুণ: মা'লূম, জানা বা নির্ধারিত। এ আয়াত নিয়ে তাফসীরকারেরা যা বলেছেন, সবই আসলে এই একটি গুণের অর্থ খোঁজার চেষ্টা।"
          },
          {
            "en": "Notice what the verse withholds. It names no garden, no fruit, no couch and no cup. Those come in the verses that follow, beginning with 37:42, and they deserve their own reading. Here the reward opens with an assurance rather than an inventory. The listener who has just heard the punishment spelled out is first told that the other side has a portion fixed and settled, and only then shown what it contains. The order itself teaches something: the promise comes before the description, and it does not depend on it.",
            "bn": "আয়াতটি কী বলছে না, সেটাও লক্ষ করার মতো। কোনো বাগানের নাম নেই, ফলের কথা নেই, আসন বা পানপাত্রেরও উল্লেখ নেই। সেসব আসবে পরের আয়াতগুলোতে, ৩৭:৪২ থেকে শুরু করে, আর সেগুলো আলাদাভাবে পড়ার দাবি রাখে। এখানে পুরস্কারের শুরু একটা নিশ্চয়তা দিয়ে, জিনিসপত্রের তালিকা দিয়ে নয়। যে শ্রোতা এইমাত্র শাস্তির খুঁটিনাটি শুনল, তাকে প্রথমে জানানো হচ্ছে যে অন্য পক্ষের প্রাপ্য ঠিক করা, পাকা। ভেতরে কী আছে, তা দেখানো হবে তার পরে। এই ক্রমটাই একটা শিক্ষা। ওয়াদা আসে বর্ণনার আগে, আর বর্ণনার উপর নির্ভর করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Garden or Its Fruit",
          "bn": "জান্নাত, নাকি তার ফল"
        },
        "p": [
          {
            "en": "At-Tabari begins by restating the verse: these, the sincere servants of Allah, have a known provision. Then he names it in his own voice: that known provision is the fruits which Allah created for them in Paradise. He supports the setting with two reports. Qatada, through Sa'id, said of the verse: in Paradise. As-Suddi, through Asbat, said the same: in Paradise. At-Tabari's identification looks ahead to the very next word of the Qur'an, fawakih, fruits, which opens 37:42. On his reading, the next verse is the explanation of this one.",
            "bn": "তাবারী শুরু করেন আয়াতটি নিজের ভাষায় আবার বলে: এঁরা, আল্লাহর একনিষ্ঠ বান্দারা, তাঁদের জন্য আছে নির্ধারিত রিযক। তারপর নিজের কথায় সেটার পরিচয় দেন: সেই নির্ধারিত রিযক হলো সেই ফলমূল, যা আল্লাহ জান্নাতে তাঁদের জন্য সৃষ্টি করেছেন। রিযকটা কোথায়, তার পক্ষে তিনি দুটি বর্ণনা আনেন। সাঈদের সূত্রে কাতাদা আয়াতটি সম্পর্কে বলেছেন: জান্নাতে। আসবাতের সূত্রে সুদ্দীও একই কথা বলেছেন: জান্নাতে। তাবারীর এই ব্যাখ্যা তাকিয়ে আছে কুরআনের ঠিক পরের শব্দটির দিকে, ফাওয়াকিহ, অর্থাৎ ফলমূল, যা দিয়ে ৩৭:৪২ শুরু। তাঁর পাঠে পরের আয়াতটাই এ আয়াতের ব্যাখ্যা।"
          },
          {
            "en": "Ibn Kathir reports the same two early authorities a little differently. In his Arabic tafsir, Qatada and as-Suddi say the known provision means Paradise itself. His English abridgement keeps that wording and then adds that the next verse explains it further: fruits, of different kinds. So the early report survives in two forms, in Paradise and Paradise, and the difference is small but real. One reading places the provision in the Garden; the other lets the Garden itself be the provision.",
            "bn": "একই দুই প্রাচীন বর্ণনাকারীর কথা ইবন কাসীর আনেন একটু ভিন্নভাবে। তাঁর আরবি তাফসীরে কাতাদা ও সুদ্দীর কথা হলো, নির্ধারিত রিযক মানে স্বয়ং জান্নাত। তাঁর ইংরেজি সংক্ষিপ্ত সংস্করণও এই কথাই রাখে, তারপর যোগ করে যে পরের আয়াত বিষয়টা আরও খুলে বলে: নানা রকম ফলমূল। ফলে প্রাচীন বর্ণনাটা দুই রূপে টিকে আছে। একটিতে রিযক জান্নাতের ভেতরে, অন্যটিতে জান্নাতই রিযক। পার্থক্যটা ছোট, কিন্তু আছে। প্রথম পাঠ রিযককে বাগানের ভেতরে রাখে, দ্বিতীয় পাঠ বাগানটাকেই রিযক বানিয়ে দেয়।"
          },
          {
            "en": "Al-Qurtubi gathers the same strand in brief. He cites Qatada as saying it means Paradise, someone else as saying it means the provision of Paradise, and an unnamed view that it is the fruits that are mentioned. All three agree on where this provision is found. They differ only on how tightly to draw the word: the whole Garden, what the Garden supplies, or the particular fruit that the next verse names first. Because the commentators agree on the place, the disagreement costs the reader nothing. Whichever width is meant, the provision is the provision of Paradise, and the verse that follows begins to fill it in.",
            "bn": "কুরতুবী সংক্ষেপে এই ধারাটাই একত্র করেন। তিনি কাতাদার উক্তি আনেন যে এর মানে জান্নাত। অন্য একজনের উক্তি আনেন যে এর মানে জান্নাতের রিযক। আর নামহীন একটি মত আনেন, এটা সেই ফলমূল যার কথা উল্লেখ হয়েছে। রিযকটা কোথায় মিলবে, এ নিয়ে তিনটি মতই একমত। তফাত শুধু শব্দটার সীমা কতটা টানা হবে তা নিয়ে। পুরো বাগান, বাগান যা জোগায় তা, নাকি পরের আয়াত প্রথমেই যে ফলের নাম নেয় সেটা। জায়গা নিয়ে যেহেতু সবাই একমত, এই মতভেদে পাঠকের কিছু হারানোর নেই। সীমা যত চওড়া বা সরুই হোক, রিযকটা জান্নাতেরই। আর পরের আয়াত থেকেই তার ভেতরের কথা খুলতে শুরু করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gift That Does Not Stop",
          "bn": "যে দান কখনো থামে না"
        },
        "p": [
          {
            "en": "Before listing those views, al-Qurtubi gives his own gloss of the verse: the sincere ones will have 'atiyya ma'luma la tanqati', a known gift that does not cease. Here known is not mainly a matter of being familiar or recognisable. It describes a provision that is settled in advance and does not run out. The Muyassar says almost the same in a single line: those sincere ones will have in Paradise a known provision that does not cease. Both put the weight of ma'lum on its permanence.",
            "bn": "ওই মতগুলো আনার আগে কুরতুবী আয়াতটির নিজস্ব ব্যাখ্যা দেন: একনিষ্ঠদের জন্য থাকবে আতিয়্যা মা'লূমা লা তানকাতি', এমন নির্ধারিত দান যা কখনো বন্ধ হবে না। এখানে মা'লূম মানে মূলত চেনা-জানা নয়। এর মানে এমন রিযক, যা আগে থেকেই ঠিক করা, আর যা কখনো ফুরায় না। মুয়াসসারও এক লাইনে প্রায় একই কথা বলে: ওই একনিষ্ঠদের জন্য জান্নাতে আছে নির্ধারিত রিযক, যা কখনো বন্ধ হবে না। দুজনেই মা'লূম শব্দের ভারটা রাখেন স্থায়িত্বের উপর।"
          },
          {
            "en": "Ma'arif al-Qur'an develops this as the third of its readings, citing al-Qurtubi and others: the provision will be certain and everlasting. It sets that against the world we know, where nobody can say with any certainty what or how much provision will come, or how long it will stay. Every human heart, it says, lives under the fear that its blessings may be gone tomorrow, and Jannah will be free of that danger. On this reading, known means the end of that fear.",
            "bn": "মাআরিফুল কুরআন কুরতুবী ও অন্যদের বরাতে এটাকে তার তৃতীয় ব্যাখ্যা হিসেবে খুলে বলে: এই রিযক হবে নিশ্চিত ও চিরস্থায়ী। তারপর এটাকে মেলায় আমাদের চেনা দুনিয়ার সঙ্গে। এখানে কেউ নিশ্চিত করে বলতে পারে না কী রিযক আসবে, কতটা আসবে, কতদিন থাকবে। মাআরিফের ভাষায়, প্রতিটি মানুষের মন সারাক্ষণ এই ভয়ে থাকে যে হাতের নিয়ামত হয়তো কালই আর থাকবে না। জান্নাত এই আশঙ্কা থেকে মুক্ত। এই পাঠে মা'লূম মানে সেই ভয়ের অবসান।"
          }
        ]
      },
      {
        "h": {
          "en": "Timed by Desire, Timed by Day",
          "bn": "চাওয়ার সময়ে, সকাল-সন্ধ্যায়"
        },
        "p": [
          {
            "en": "Al-Qurtubi then records two views that tie known to time. Muqatil said: hina yashtahunahu, when they desire it. The provision is known in the sense that it is there at the moment it is wanted. Nothing has to be waited for, earned again, or hoped for in doubt. The desire and the giving meet. Al-Qurtubi gives Muqatil's view in those few words and adds nothing to them, and it is best to leave it that brief.",
            "bn": "কুরতুবী এরপর এমন দুটি মত আনেন, যা মা'লূমকে সময়ের সঙ্গে বাঁধে। মুকাতিল বলেছেন: হীনা ইয়াশতাহূনাহু, যখন তাঁরা তা চাইবেন। অর্থাৎ রিযকটা এই অর্থে নির্ধারিত যে মন চাওয়ার মুহূর্তেই তা হাজির। অপেক্ষা করতে হবে না, নতুন করে উপার্জন করতে হবে না, সন্দেহ নিয়ে আশা করেও থাকতে হবে না। চাওয়া আর পাওয়া একই সময়ে মিলে যায়। কুরতুবী মুকাতিলের মতটা ওই কয়েকটি শব্দেই দেন, কিছু যোগ করেন না। আমাদেরও সেটুকুতেই থামা ভালো।"
          },
          {
            "en": "The second view is Ibn al-Sa'ib's: the provision comes in the measure of morning and evening. Al-Qurtubi supports it with a verse, wa lahum rizquhum fiha bukratan wa 'ashiyya, and they will have their provision therein morning and evening. The wording matches 19:62 in the Qur'an text, and al-Baghawi names Maryam 62 when he gives the same reading as his only comment on this verse: known means morning and evening.",
            "bn": "দ্বিতীয় মতটি ইবনুস সাইবের: রিযক আসবে সকাল আর সন্ধ্যার মাপে। কুরতুবী এর সমর্থনে একটি আয়াত আনেন: ওয়া লাহুম রিযকুহুম ফীহা বুকরাতাও ওয়া আশিয়্যা, আর সেখানে সকাল-সন্ধ্যা তাঁদের জন্য থাকবে তাঁদের রিযক। কুরআনের পাঠে এই শব্দগুলো ১৯:৬২ আয়াতের সঙ্গে মিলে যায়। বাগাভীও এ আয়াতে এই একটি কথাই বলেন, নির্ধারিত মানে সকাল ও সন্ধ্যা, আর সূত্র হিসেবে তিনি মারইয়াম ৬২-এর নাম উল্লেখ করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an lists this as its second reading: the timings of the provision are determined and known, bestowed punctually every morning and evening, citing the same verse of Maryam. Set side by side, Muqatil and Ibn al-Sa'ib describe the same reliability from two directions. One says it answers the desire whenever it comes; the other says it keeps a rhythm, the steady turn of morning and evening that marks a settled day. Al-Qurtubi records both without choosing, and this article does the same.",
            "bn": "মাআরিফুল কুরআন এটাকে তার দ্বিতীয় ব্যাখ্যা হিসেবে রাখে: রিযকের সময় নির্ধারিত ও জানা, প্রতিদিন সকালে আর সন্ধ্যায় ঠিক সময়ে তা দেওয়া হবে। সূত্র হিসেবে আনে সূরা মারইয়ামের সেই আয়াতই। মুকাতিল আর ইবনুস সাইবের কথা পাশাপাশি রাখলে দেখা যায়, দুজনেই একই নির্ভরযোগ্যতার কথা বলছেন দুই দিক থেকে। একজন বলেন, মন যখনই চায় তখনই রিযক হাজির। অন্যজন বলেন, তা চলে একটা নিয়মিত ছন্দে, সকাল আর সন্ধ্যার সেই পালাবদলের মতো, যা দিয়ে একটা স্থির দিন চেনা যায়। কুরতুবী কোনোটাকে বেছে না নিয়ে দুটোই রাখেন। এই লেখাও তা-ই করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Known, Yet Beyond Reach",
          "bn": "জানা, তবু নাগালের বাইরে"
        },
        "p": [
          {
            "en": "As-Sa'di reads the word from the other side. Ma'lum, he says, means ghayr majhul, not unknown. It is a great and majestic provision, la yujhalu amruhu wa la yublaghu kunhuh: its matter is not unknown, and its true depth cannot be reached. That is a striking pairing. The provision is known in that nobody can mistake it or call it obscure; it is announced, named and certain. Yet the same provision is beyond knowing in its full reality, because no description reaches the bottom of it.",
            "bn": "সা'দী শব্দটা পড়েন অন্য দিক থেকে। তাঁর মতে মা'লূম মানে গাইরু মাজহূল, অজানা নয়। এ এক মহান, মর্যাদাপূর্ণ রিযক: লা ইউজহালু আমরুহু ওয়া লা ইউবলাগু কুনহুহ, এর বিষয়টা অজানা নয়, আবার এর গভীরতার তলও কেউ ছুঁতে পারে না। জুটিটা চমকে দেওয়ার মতো। রিযকটা জানা, কারণ একে ভুল বোঝার বা অস্পষ্ট বলার উপায় নেই। এর ঘোষণা হয়েছে, নাম বলা হয়েছে, আর তা নিশ্চিত। অথচ সেই রিযকই তার পুরো বাস্তবতায় জানার বাইরে, কারণ কোনো বর্ণনাই তার তলায় পৌঁছায় না।"
          },
          {
            "en": "Ma'arif al-Qur'an's first reading moves in a related direction. Some say known refers to the detailed descriptions of Paradise's provisions given across different surahs of the Qur'an: the provision is known because Allah has already made it known. It reports that Maulana Ashraf Thanavi chose this explanation. On this view, the reader who has met those descriptions elsewhere is meant to recognise the reward when this verse names it, even before 37:42 begins to describe it again.",
            "bn": "মাআরিফুল কুরআনের প্রথম ব্যাখ্যাও কাছাকাছি দিকে যায়। কেউ কেউ বলেন, মা'লূম বলতে বোঝানো হয়েছে কুরআনের বিভিন্ন সূরায় জান্নাতের রিযকের যে বিস্তারিত বর্ণনা এসেছে, তা। অর্থাৎ রিযকটা জানা, কারণ আল্লাহ আগেই তা জানিয়ে দিয়েছেন। মাআরিফ জানায়, মাওলানা আশরাফ থানভী এই ব্যাখ্যাটাই গ্রহণ করেছেন। এই মতে, যে পাঠক অন্য জায়গায় ওই বর্ণনাগুলো পড়ে এসেছেন, এ আয়াত পুরস্কারের নাম নিতেই তিনি তা চিনে ফেলবেন, ৩৭:৪২ আবার বর্ণনা শুরু করার আগেই।"
          },
          {
            "en": "As-Sa'di's two halves hold a lesson for anyone who tries to imagine Paradise. What has been revealed is enough to be certain of and to long for. It is not enough to exhaust it. The descriptions are true, and still they point past themselves. Known, in his reading, means the reward is clear enough to act on and great enough that nobody finishes understanding it.",
            "bn": "জান্নাতের ছবি যে মনে আঁকতে চায়, সা'দীর কথার দুই অংশে তার জন্য একটা শিক্ষা আছে। যা জানানো হয়েছে, তা নিশ্চিত হওয়ার জন্য আর আকুল হওয়ার জন্য যথেষ্ট। কিন্তু তাতে পুরোটা ফুরিয়ে যায় না। বর্ণনাগুলো সত্য, তবু সেগুলো নিজেদের ছাড়িয়ে আরও দূরে ইশারা করে। তাঁর পাঠে মা'লূম মানে, পুরস্কারটা এতটা স্পষ্ট যে তার জন্য আমল করা যায়, আবার এতটা বিশাল যে কেউ তাকে বুঝে শেষ করতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Meanings of One Word",
          "bn": "এক শব্দের পাঁচ অর্থ"
        },
        "p": [
          {
            "en": "Laid out together, the readings answer the question known in what way. Known in its content: Paradise, its provision, or its fruits, as Qatada, as-Suddi and at-Tabari say. Known as settled and unceasing, in al-Qurtubi's own gloss and the Muyassar. Known as present whenever desired, with Muqatil. Known as coming morning and evening, with Ibn al-Sa'ib and al-Baghawi, by 19:62. Known as not obscure though beyond full grasp, with as-Sa'di. None of the commentators fetched here argues against another, and nothing in the verse forces a choice between them.",
            "bn": "মতগুলো একসঙ্গে সাজালে প্রশ্নটার জবাব মেলে: কোন অর্থে জানা? বিষয়বস্তুর দিক থেকে জানা: জান্নাত, জান্নাতের রিযক, অথবা তার ফলমূল। এ কথা কাতাদা, সুদ্দী ও তাবারীর। স্থির ও অফুরান অর্থে জানা, কুরতুবীর নিজস্ব ব্যাখ্যায় আর মুয়াসসারে। মন চাইলেই হাজির, এই অর্থে জানা, মুকাতিলের মতে। সকাল-সন্ধ্যায় আসে, এই অর্থে জানা, ইবনুস সাইব ও বাগাভীর মতে, ১৯:৬২ আয়াতের ভিত্তিতে। অস্পষ্ট নয়, অথচ পুরোপুরি বোঝার বাইরে, এই অর্থে জানা, সা'দীর মতে। এখানে উদ্ধৃত তাফসীরকারদের কেউ অন্যের বিরুদ্ধে যুক্তি দেননি, আর আয়াতও এগুলোর মধ্যে বাছাই করতে বাধ্য করে না।"
          },
          {
            "en": "The article therefore leaves them standing side by side, as al-Qurtubi and Ma'arif al-Qur'an do. A single adjective that the commentators could read in five ways is not a weakness in the text. It is room, and each reading adds a different reassurance: what the provision is, that it lasts, that it answers desire, that it keeps its hours, that it is greater than its description. As for narrations, none of the tafsirs fetched for this verse attaches a hadith to it, so none is quoted here.",
            "bn": "তাই এই লেখাও মতগুলোকে পাশাপাশি দাঁড় করিয়ে রাখছে, যেমন রেখেছেন কুরতুবী আর মাআরিফুল কুরআন। একটি বিশেষণ, যাকে তাফসীরকারেরা পাঁচভাবে পড়তে পেরেছেন, তা পাঠের দুর্বলতা নয়। বরং তা প্রশস্ততা। প্রতিটি পাঠ যোগ করে আলাদা এক ভরসা: রিযকটা কী, তা টিকে থাকে, চাওয়ামাত্র আসে, নিজের সময় মেনে আসে, আর নিজের বর্ণনার চেয়েও বড়। আর হাদীসের কথা: এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই আয়াতটির সঙ্গে কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো হাদীস উদ্ধৃত করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hope, Not a Title",
          "bn": "দাবি নয়, আশা"
        },
        "p": [
          {
            "en": "It is easy to read a verse like this as if it were addressed to oneself. But ula'ika points to a described group, the sincere servants of Allah, and the verse does not tell any reader that he or she belongs to it. Ibn Kathir's note on the group is humbling: their evil deeds, if any, are overlooked. Even the sincere enter by pardon as well as by deed. The right response to a known provision is to ask to be among those it is promised to, not to assume a place already held.",
            "bn": "এমন আয়াত পড়লে মনে হতে পারে কথাটা যেন নিজেকেই বলা হচ্ছে। কিন্তু উলাইকা ইশারা করছে একটা চিহ্নিত দলের দিকে, আল্লাহর একনিষ্ঠ বান্দাদের দিকে। কোনো পাঠক যে সেই দলে আছেন, আয়াত তা বলে না। ইবন কাসীর ওই দল সম্পর্কে যা বলেন, তা মনকে নত করে দেয়: তাঁদের মন্দ কাজ থাকলে তা ক্ষমা করে দেওয়া হবে। অর্থাৎ একনিষ্ঠরাও ঢোকেন শুধু আমলের জোরে নয়, ক্ষমার ভরসাতেও। নির্ধারিত রিযকের কথা শুনে তাই সঠিক জবাব হলো, যাদের জন্য এই ওয়াদা, তাঁদের দলে থাকার জন্য দোয়া করা। জায়গাটা আগেই পাকা ধরে নেওয়া নয়।"
          },
          {
            "en": "There is also a mirror here for life now. Ma'arif al-Qur'an's contrast lands close to home: in this world no one knows what provision will come or how long it will stay, and the heart carries that fear daily. The verse does not mock that fear. It answers it with a promise of a different kind of provision, one without the question mark. A person who believes that promise can hold this world's portion more lightly, work for it honestly, and still keep the heart's deeper hope for what is known.",
            "bn": "এখানে এখনকার জীবনের জন্যও একটা আয়না আছে। মাআরিফুল কুরআনের তুলনাটা আমাদের খুব কাছের। দুনিয়ায় কেউ জানে না কী রিযক আসবে, কতদিন থাকবে, আর মন প্রতিদিন সেই ভয় বয়ে বেড়ায়। আয়াত এই ভয়কে তুচ্ছ করে না। বরং এর জবাব দেয় ভিন্ন ধরনের এক রিযকের ওয়াদা দিয়ে, যার গায়ে কোনো প্রশ্নচিহ্ন নেই। যে এই ওয়াদায় বিশ্বাস রাখে, সে দুনিয়ার ভাগটা একটু হালকা হাতে ধরতে পারে, সৎভাবে তার জন্য খাটতে পারে, আর মনের গভীরতর আশাটা জমিয়ে রাখতে পারে সেই নির্ধারিত রিযকের জন্য।"
          }
        ]
      }
    ]
  },
  "37:45": {
    "sections": [
      {
        "h": {
          "en": "A Verb Before the Word",
          "bn": "শব্দের আগে একটি ক্রিয়া"
        },
        "p": [
          {
            "en": "Yutafu 'alayhim bika'sin min ma'in: it is circulated among them, a cup from a flowing spring. The verse opens with a passive verb, yutafu, it is made to go round, before it ever names what is going round. At-Tabari reads the action plainly: the attendants circle among them with a cup of flowing wine, visible to their eyes, not sunken out of sight. The motion comes first in the sentence because the motion is the point. Nothing here is handed over once and finished; something keeps happening, over and over, to people who are simply sitting and facing one another.",
            "bn": "ইউতাফু আলাইহিম বিকাসিন মিন মা’ইন: তাদের কাছে চক্রাকারে পরিবেশন করা হবে একটি পাত্র, বহমান এক ঝর্ণা থেকে। আয়াতটি শুরু হয় একটি নিষ্ক্রিয় ক্রিয়া দিয়ে, ইউতাফু, অর্থাৎ ঘোরানো হচ্ছে। কী ঘোরানো হচ্ছে, তার নাম আসে তারও পরে। তাবারী এই কাজটাকে সহজভাবেই পড়েন। সেবকেরা তাদের মাঝে ঘুরে বেড়ায় এক বহমান সুরাপাত্র নিয়ে, যা তাদের চোখের সামনেই থাকে, কোথাও তলিয়ে যায় না। বাক্যের শুরুতেই এই চলাচল আসে, কারণ চলাচলটাই মূল কথা। এখানে কিছু একবার দিয়েই শেষ হয় না। কিছু একটা বারবার ঘটতে থাকে, এমন মানুষদের জন্য, যারা শুধু বসে আছে আর একে অপরের মুখোমুখি।"
          },
          {
            "en": "Yutafu shares its triliteral root, t-w-f, with tawaf, the circling walk. That is a plain fact about the word's family, not a claim any commentator here makes about its meaning, but it sets the mood before the noun ka's even arrives: this is a scene built around going round, not around a single transaction. As-Sa'di names who is doing the circling: the youths made ready for their service move back and forth with delicious drinks, in cups beautiful to look at. The grammar withholds the subject; the commentary supplies it. Either way, someone is always walking, and the cup never stays still long enough to be set down and forgotten.",
            "bn": "ইউতাফু শব্দটির মূল তিন অক্ষর ত-ও-ফ, তাওয়াফের সঙ্গেও একই মূল। এটা শব্দ-পরিবারের একটা সাদামাটা সত্য, এর অর্থ নিয়ে কোনো তাফসীরকার এখানে কিছু বলেননি। কিন্তু বিশেষ্য ‘কাস’ শব্দটা আসার আগেই এটা একটা আবহ তৈরি করে দেয়, এ দৃশ্য গড়ে উঠেছে অবিরাম ঘোরাকে ঘিরে, একবারের কোনো লেনদেনকে ঘিরে নয়। কে ঘোরাচ্ছে, তা সা’দী নাম ধরে বলেন। তাদের সেবার জন্য প্রস্তুত কিশোরেরা সুস্বাদু পানীয় নিয়ে আসা-যাওয়া করে, দেখতে সুন্দর পাত্রে। ব্যাকরণ কর্তা গোপন রাখে, তাফসীর তা তুলে ধরে। যেভাবেই হোক, কেউ না কেউ সবসময় হাঁটছে। পাত্রটা কখনো এতটা স্থির থাকে না যে তাকে নামিয়ে রেখে ভুলে যাওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Named for What Fills It",
          "bn": "ভেতরে যা থাকে, নামও তা-ই"
        },
        "p": [
          {
            "en": "Ka's looks like an ordinary noun for a cup, but three commentators fetched for this verse refuse to let it mean an empty one. At-Tabari records it from ad-Dahhak ibn Muzahim and as-Suddi: every ka's in the Qur'an is wine. He then states the rule itself: among the Arabs, a ka's is any vessel with a drink in it; without a drink, it is not a ka's, only a vessel. Al-Baghawi gives the identical rule in almost the same words: it is a vessel with a drink in it, and it is not a ka's until a drink is in it, otherwise it is a vessel.",
            "bn": "‘কাস’ দেখতে একটা সাধারণ পাত্রবাচক শব্দ মনে হতে পারে, কিন্তু এই আয়াতের জন্য আনা তিনজন তাফসীরকার একে খালি পাত্র বোঝাতে দিতে রাজি নন। তাবারী আদ-দাহহাক ইবনে মুযাহিম ও সুদ্দীর বরাতে লেখেন, কুরআনে যেখানেই ‘কাস’ শব্দ এসেছে, তার মানে সুরা। এরপর তিনি নিয়মটাই বলে দেন। আরবদের কাছে ‘কাস’ মানে এমন কোনো পাত্র, যাতে পানীয় ভরা আছে। পানীয় না থাকলে তা ‘কাস’ নয়, নিছক একটা পাত্র। বাগাভীও প্রায় একই ভাষায় একই নিয়ম দেন। এটা এমন পাত্র, যার ভেতরে পানীয় আছে, আর যতক্ষণ না পানীয় থাকে, ততক্ষণ তাকে ‘কাস’ বলা যায় না, তখন সেটা স্রেফ একটা পাত্র।"
          },
          {
            "en": "Al-Qurtubi confirms the same two names, ka's and ina' (vessel), and adds the plain scope of the word among linguists: a name covering every vessel together with its drink; if it is empty, it is not a ka's. As-Sa'di, describing the scene itself rather than defining the term, still lands on the identical word: the youths circle with cups beautiful to look at, brimming with drink, and he calls them, in his own phrase, the cups of wine. Four independent readings, the same conclusion: this word was never free to mean an empty cup.",
            "bn": "কুরতুবীও একই দুটি নাম নিশ্চিত করেন, ‘কাস’ আর ‘ইনা’ (পাত্র), আর ভাষাবিদদের কাছে শব্দটার পরিধিও বলে দেন। এটা এমন এক নাম, যা পাত্র আর তার পানীয়, দুটোকেই একসঙ্গে ধরে। খালি হলে সেটা ‘কাস’ নয়। সা’দী শব্দের সংজ্ঞা না দিয়ে দৃশ্যটাই বর্ণনা করেন, তবু একই শব্দে গিয়ে থামেন। কিশোরেরা ঘুরে বেড়ায় দেখতে সুন্দর পাত্র নিয়ে, পানীয়তে টইটম্বুর, আর তিনি নিজের ভাষায় এগুলোকে বলেন সুরার পাত্র। চারজন আলাদা আলাদাভাবে একই জায়গায় পৌঁছান। এই শব্দের কখনো খালি পাত্র বোঝানোর সুযোগ ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Arabic Parallels",
          "bn": "আরবি তিনটি উপমা"
        },
        "p": [
          {
            "en": "Al-Qurtubi does not leave the point at ka's alone; he reaches for the rest of the family. The qadah, the plain goblet, becomes a ka's the moment wine fills it, he reports from trusted linguists, and stays a mere qadah while it is empty. The same habit governs the dining spread: a khiwan, a bare table, is called a ma'ida only once food is laid on it; take the food away and the word ma'ida no longer applies, it is only a khiwan again. Arabic, on this showing, is a language that will sometimes name a thing for its occupant rather than its shape.",
            "bn": "কুরতুবী কথাটা শুধু ‘কাস’-এ থেমে রাখেন না, পুরো পরিবারটাই টেনে আনেন। নির্ভরযোগ্য ভাষাবিদদের বরাতে তিনি লেখেন, একটা সাধারণ গ্লাস ‘কাদাহ’ তখনই ‘কাস’ হয়ে যায়, যখন তাতে সুরা ঢালা হয়। খালি থাকলে সেটা নিছক ‘কাদাহ’ থেকে যায়। খাবারের বিছানার বেলাতেও একই নিয়ম। খালি টেবিল ‘খিওয়ান’কে ‘মায়িদা’ বলা হয় তখনই, যখন তাতে খাবার সাজানো থাকে। খাবার সরিয়ে নিলে ‘মায়িদা’ শব্দটা আর খাটে না, আবার সেটা স্রেফ ‘খিওয়ান’। এই দৃষ্টান্ত থেকে বোঝা যায়, আরবি ভাষা মাঝে মাঝে কোনো কিছুর নাম রাখে তার আকৃতি দিয়ে নয়, তার ভেতরে যে থাকে তার হিসেবে।"
          },
          {
            "en": "He then cites Abu al-Hasan ibn Kaysan for a third example, further from drink and food but built on the identical logic: a za'ina, a woman's litter, is called that only when a woman rides inside it; an empty frame on a camel's back carries a different name. Qurtubi's point in stacking these three together is not decoration. It tells the listener exactly how much weight to put on min ma'in a moment later: this is not a cup that merely happens to hold something flowing. By its very name, a ka's cannot be read any other way.",
            "bn": "এরপর তিনি আবুল হাসান ইবনে কাইসানের বরাতে আরেকটা উদাহরণ টানেন, খাবার-পানীয় থেকে অনেক দূরের, কিন্তু একই যুক্তিতে গাঁথা। উটের পিঠে বসানো ‘যাইনা’, নারীদের হাওদা, তখনই এই নামে ডাকা হয়, যখন তার ভেতরে কোনো নারী বসে থাকেন। খালি কাঠামোটার নাম তখন আলাদা। কুরতুবী এই তিনটি উদাহরণ একসঙ্গে সাজিয়ে শুধু সৌন্দর্য বাড়াতে চাননি। এর মধ্য দিয়ে তিনি পাঠককে বুঝিয়ে দেন, একটু পরে আসা ‘মিন মা’ইন’ কথাটার ওজন কতটা। এটা এমন কোনো পাত্র নয়, যার ভেতরে কাকতালীয়ভাবে কিছু বহমান জিনিস ভরা পড়েছে। নিজের নামের গুণেই ‘কাস’-কে আর কোনোভাবে পড়ার সুযোগ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Flowing in Plain Sight",
          "bn": "খোলা চোখে বহমান"
        },
        "p": [
          {
            "en": "Min ma'in closes the verse, and at-Tabari glosses it in one tight clause: a cup of flowing wine, jariya, visible to their eyes, zahira li-a'yunihim, not sunken out of view, ghayr gha'ira. Al-Baghawi reaches the same word for the same reason: wine flowing in rivers, apparent, that the eyes themselves see. Neither commentator is describing color or taste here; that is a question the verse has not asked yet. They are describing where the wine sits in relation to the one looking at it, in the open, never underground, never behind anything.",
            "bn": "আয়াতের শেষে আসে ‘মিন মা’ইন’, আর তাবারী তাকে এক টানা বাক্যে বুঝিয়ে দেন। বহমান সুরার পাত্র, চোখের সামনেই দৃশ্যমান, কোথাও তলিয়ে যায় না। বাগাভীও একই কারণে একই শব্দে পৌঁছান। নদীর মতো বহমান সুরা, প্রকাশ্য, যা চোখ নিজেই দেখতে পায়। এখানে কোনো তাফসীরকারই রং বা স্বাদের কথা বলছেন না, সে প্রশ্ন এখনো আয়াতে ওঠেইনি। তাঁরা বলছেন, যে দেখছে তার সাপেক্ষে সুরাটা কোথায় থাকে। খোলা জায়গায়, মাটির নিচে নয়, কোনো কিছুর আড়ালেও নয়।"
          },
          {
            "en": "Al-Qurtubi traces the same word to az-Zajjaj, who explains min ma'in as wine flowing the way springs flow across the face of the earth, and defines ma'in itself as al-ma' al-jari az-zahir, flowing water that is apparent. A worldly spring can do the opposite of all this: it can run underground for a season, sink below a dropping water table, or dry to nothing in a hard year. The word chosen here rules every one of those out before the thought can even form. Whatever this is, it is not something the drinker has to search for or wait on.",
            "bn": "কুরতুবী একই শব্দ খুঁজে পান যাজ্জাজের ব্যাখ্যায়। তিনি ‘মিন মা’ইন’-এর অর্থ দেন, এমন সুরা, যা বয়ে চলে ঠিক যেমন পৃথিবীর বুকে ঝর্ণা বয়ে চলে। আর ‘মা’ইন’ শব্দটারই অর্থ দেন, বহমান প্রকাশ্য পানি। দুনিয়ার একটা ঝর্ণা এর ঠিক উল্টোটাও করতে পারে। কোনো এক মৌসুমে মাটির নিচে লুকিয়ে যেতে পারে, পানির স্তর নেমে গেলে তলিয়ে যেতে পারে, কঠিন বছরে একদম শুকিয়েও যেতে পারে। এখানে বাছাই করা শব্দটাই এসব সম্ভাবনা মনে আসার আগেই বাদ দিয়ে দেয়। যা-ই হোক না কেন, পানকারীকে একে খুঁজতে হয় না, এর জন্য অপেক্ষাও করতে হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Spring That Never Fails",
          "bn": "যে ঝর্ণা কখনো থামে না"
        },
        "p": [
          {
            "en": "Ibn Kathir reads min ma'in and lands on a second property besides visibility: wine from flowing rivers, he writes, they do not fear its being cut off nor its running out. Al-Muyassar states the same thing about the same phrase in its own shorter way: circulated among them in their gatherings, cups of wine, from flowing rivers, they do not fear its being cut off. Two commentators, reading the same three words, both reach past the fact of flowing to the promise behind it, a supply with no occasion on which it could stop.",
            "bn": "‘মিন মা’ইন’ পড়ে ইবনে কাসীর প্রকাশ্য হওয়ার পাশাপাশি আরেকটা গুণের কথা বলেন। তিনি লেখেন, বহমান নদীর সুরা, যার বন্ধ হয়ে যাওয়া বা ফুরিয়ে যাওয়ার কোনো ভয় তাদের নেই। মুয়াসসারও একই তিনটি শব্দ নিয়ে নিজের মতো সংক্ষেপে একই কথা বলে। তাদের মজলিসে ঘুরতে থাকা সুরার পাত্র, বহমান নদী থেকে, যার বন্ধ হওয়ার ভয় নেই। দুজন তাফসীরকার একই তিনটি শব্দ পড়ে দুজনেই বহমান হওয়ার সত্য পেরিয়ে তার পেছনের প্রতিশ্রুতি পর্যন্ত পৌঁছান। এমন এক জোগান, যা থেমে যাওয়ার কোনো উপলক্ষই নেই।"
          },
          {
            "en": "This sits two verses after the already-shipped promise that the same people have rizqun ma'lum, a provision determined, and it reads like that promise made visible. A known provision could still, in this life, be imagined as a fixed amount waiting to run low. A spring that no one fears will ever be cut off removes even that shadow of a worry. The scene answers a question the listener might not have known to ask: not only is the provision certain, its source cannot be exhausted by being used.",
            "bn": "এর দুই আয়াত আগেই আগে থেকে পরিবেশিত এক প্রতিশ্রুতি আছে, একই মানুষদের জন্য আছে নির্ধারিত রিযক। এই দৃশ্যটা যেন সেই প্রতিশ্রুতিকেই চোখের সামনে এনে দেয়। নির্ধারিত রিযক বলতেও দুনিয়ার ধাঁচে একটা নির্দিষ্ট পরিমাণ কল্পনা করা যেত, যা ব্যবহার করতে করতে কমে আসতে পারে। কিন্তু যে ঝর্ণা বন্ধ হওয়ার ভয় কারও নেই, তা এই সংশয়ের ছায়াটুকুও মুছে দেয়। শ্রোতা হয়তো প্রশ্নটাই তুলতেন না, তবু দৃশ্যটা তার জবাব দিয়ে রাখে। রিযক শুধু নিশ্চিত নয়, তার উৎসও ব্যবহারে ফুরিয়ে যাওয়ার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hands That Never Stop Circling",
          "bn": "অবিরাম ঘোরা হাত"
        },
        "p": [
          {
            "en": "As-Sa'di puts a face on the passive verb the verse opened with: the youths made ready for their service go back and forth with delicious drinks, in cups beautiful to look at. Where the bare words of the ayah give only an action with no actor named, he supplies attendants whose entire task this is. It is worth being honest about the shape of that sentence: the verse itself names neither youths nor their readiness for service; that detail is as-Sa'di's own description of the scene, not a word the ayah's two phrases contain.",
            "bn": "আয়াত যে নিষ্ক্রিয় ক্রিয়া দিয়ে শুরু হয়েছিল, সা’দী তাতে একটা মুখ বসিয়ে দেন। তাদের সেবার জন্য প্রস্তুত কিশোরেরা আসা-যাওয়া করে সুস্বাদু পানীয় নিয়ে, দেখতে সুন্দর পাত্রে। আয়াতের খালি শব্দগুলো শুধু একটা কাজের কথা বলে, কে করছে তার নাম বলে না। সা’দী সেখানে এমন সেবকদের বসান, যাদের পুরো কাজটাই এই। এই বাক্যের আকৃতি নিয়ে সৎ থাকা দরকার। আয়াতটি নিজে কিশোর বা তাদের সেবার প্রস্তুতির কোনো নাম নেয় না। এই বিবরণ সা’দীর নিজের দৃশ্য-বর্ণনা, আয়াতের দুই অংশের শব্দ নয়।"
          },
          {
            "en": "What the verse's own words do carry, once more, in as-Sa'di's phrasing too, is the same conclusion reached from three other directions already: these, he writes, are the cups of wine. A fourth commentator, describing the scene rather than defining the term, still cannot picture the circling cup as holding anything else. The repetition across four readings is itself a kind of evidence: whatever leeway a bare noun might seem to leave, no one fetched for this verse left room in it for an empty hand.",
            "bn": "আয়াতের নিজের শব্দ যা বহন করে, তা সা’দীর ভাষাতেও আরেকবার একই জায়গায় পৌঁছায়, যা আরও তিনটি দিক থেকে আগেই পাওয়া গিয়েছিল। তিনি লেখেন, এগুলোই সুরার পাত্র। চতুর্থ এক তাফসীরকার, শব্দের সংজ্ঞা না দিয়ে দৃশ্যটা বর্ণনা করেও, ঘোরা পাত্রে সুরা ছাড়া অন্য কিছু কল্পনা করতে পারেন না। চারজনের বর্ণনায় একই কথার পুনরাবৃত্তি নিজেই এক ধরনের প্রমাণ। একটা খালি বিশেষ্য যতই ফাঁক রাখার সুযোগ দিক, এই আয়াতের জন্য আসা কেউই সেখানে খালি হাতের জায়গা রাখেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Words, Not Yet the Rest",
          "bn": "দুটি শব্দ, বাকিটা এখনো নয়"
        },
        "p": [
          {
            "en": "This verse carries exactly two pieces of information: the cup is circulated, and it comes from a flowing, inexhaustible spring. It says nothing yet about color, taste, or what the drink does or does not do to the one drinking it; those three questions wait for the next two ayat. Ibn Kathir's English abridgement notices that this same bare picture, a circulating cup from a flowing spring, recurs almost word for word in surah al-Waqi'ah, where immortal youths go around with cups and jugs and a cup from a flowing spring. The Qur'an returns to this exact scene more than once, and each time, the scene itself stays this restrained.",
            "bn": "এই আয়াতটি ঠিক দুটি তথ্য বহন করে। পাত্রটা ঘুরছে, আর তা আসছে এক বহমান, অফুরন্ত ঝর্ণা থেকে। রং, স্বাদ, বা যে পান করছে তার উপর এই পানীয় কী করে বা করে না, এসব নিয়ে এখনো কিছু বলা হয়নি। এই তিনটি প্রশ্ন অপেক্ষা করছে পরের দুই আয়াতের জন্য। ইবনে কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ লক্ষ করে, এই একই খালি দৃশ্য, বহমান ঝর্ণা থেকে আসা ঘোরা পাত্র, প্রায় একই শব্দে সূরা ওয়াকি’আহতেও ফিরে আসে, যেখানে চিরতরুণ কিশোরেরা ঘুরে বেড়ায় পেয়ালা, জগ আর বহমান ঝর্ণার পাত্র নিয়ে। কুরআন এই একই দৃশ্যে একাধিকবার ফিরে আসে, আর প্রতিবারই দৃশ্যটা এতটাই সংযত থেকে যায়।"
          },
          {
            "en": "That restraint is worth sitting with rather than rushing past. A reader who already knows what 37:46 and 37:47 say can be tempted to read them backward into this verse, as if yutafu 'alayhim bika'sin min ma'in already meant white, delicious, harmless, and never intoxicating. It does not say any of that yet. What it says, on its own, is narrower and in some ways sturdier: the cup moves, the source never stops, and both of those things are true before a single other quality is added.",
            "bn": "এই সংযমটুকু তাড়াহুড়ো করে পেরিয়ে না গিয়ে একটু থেমে বোঝার মতো। যে পাঠক আগে থেকেই জানেন ৩৭:৪৬ আর ৩৭:৪৭ আয়াতে কী আছে, তার মনে হতে পারে সেসব কথা বুঝি এই আয়াতেও আগে থেকেই বলা হয়ে গেছে, যেন এই পাত্র ইতিমধ্যে নির্মল, সুপেয়, নিরাপদ, আর নেশা না ধরানো বলে ঘোষিত। এখনো তা বলা হয়নি। এই আয়াত একাই যা বলে, তা সংকীর্ণ হলেও কোনো কোনো দিক থেকে বেশি মজবুত। পাত্রটা ঘুরছে, উৎসটা কখনো থামে না, আর অন্য কোনো গুণ যোগ হওয়ার আগেই এই দুটো কথা সত্য।"
          }
        ]
      },
      {
        "h": {
          "en": "A Scene, Not a License",
          "bn": "দৃশ্য, অনুমতি নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly, because the subject is wine. Every commentator fetched for this verse reads ka's as wine, and every one of them is describing a reward inside Paradise, promised to people already named a page earlier as Allah's sincere, chosen servants. Nothing here is a comment on wine in this life, which the Qur'an forbids outright elsewhere, and nothing here loosens that ruling by so much as a word. A scene of reward in the next life is not a permission slip for this one; the two belong to different arguments, and the verse never confuses them.",
            "bn": "কথাটা সোজাসুজি বলে রাখা দরকার, কারণ বিষয়টা সুরা। এই আয়াতের জন্য আনা প্রতিটি তাফসীরকার ‘কাস’-কে সুরা বলেই পড়েছেন, আর তাঁরা প্রত্যেকেই বর্ণনা করছেন জান্নাতের ভেতরের একটা প্রতিদান, যা প্রতিশ্রুত হয়েছে এমন মানুষদের জন্য, যাঁদের এক পাতা আগেই আল্লাহর একনিষ্ঠ, মনোনীত বান্দা বলে নাম দেওয়া হয়েছে। এখানে দুনিয়ার সুরা নিয়ে কোনো মন্তব্য নেই, যা কুরআন অন্যত্র সরাসরি হারাম ঘোষণা করেছে। এই আয়াত সেই বিধানকে একচুলও শিথিল করে না। পরকালের প্রতিদানের দৃশ্য এই দুনিয়ার জন্য কোনো অনুমতিপত্র নয়। দুটি আলাদা বিষয়, আর আয়াতটি কখনো এ দুটিকে গুলিয়ে ফেলে না।"
          },
          {
            "en": "Hold the two halves of this together, then: a word that cannot mean an empty vessel, and a spring that cannot run dry, describing a reward that has not yet, in this verse, been given any color or taste or named as harmless. What stands confirmed is narrower than the fuller picture two verses away, and for that reason it stands on firmer ground: a cup kept moving, from a source that never stops, for people already called sincere.",
            "bn": "তাহলে এই আয়াতের দুই দিক একসঙ্গে ধরে রাখা যাক। এমন এক শব্দ, যা খালি পাত্র বোঝাতে পারে না, আর এমন এক ঝর্ণা, যা শুকায় না। এই আয়াতে প্রতিদানকে এখনো কোনো রং, স্বাদ বা নিরাপদ বলে ঘোষণা করা হয়নি। যা নিশ্চিত হয়ে আছে, তা দুই আয়াত পরের পূর্ণ ছবির চেয়ে সংকীর্ণ, আর সে কারণেই তা দাঁড়িয়ে আছে বেশি মজবুত ভিত্তিতে। একটা পাত্র, যা ঘুরতেই থাকে, এমন এক উৎস থেকে, যা কখনো থামে না, এমন মানুষদের জন্য, যাঁদের আগেই একনিষ্ঠ বলা হয়েছে।"
          }
        ]
      }
    ]
  },
  "37:53": {
    "sections": [
      {
        "h": {
          "en": "The Question Inside a Memory",
          "bn": "স্মৃতির ভেতরের প্রশ্ন"
        },
        "p": [
          {
            "en": "The people of Paradise, 37:50 says, turn to one another and begin asking questions, as old friends do when reunited. One of them speaks up: I had a companion, he says in 37:51, naming no name. Ibn Kathir reports, from Ibn 'Abbas by way of al-'Awfi, that this companion was an idolater who had kept a believer as his friend in the world. Nothing else about him is given, not his tribe nor his trade, only the one relationship that will matter on this day. Whatever this speaker recalls next, the verse is about to make clear, is not something he merely reports.",
            "bn": "৩৭:৫০ আয়াত বলছে, জান্নাতবাসীরা একে অপরের দিকে ফিরে প্রশ্ন করতে শুরু করে, পুরনো বন্ধুরা মিলিত হলে যেমন করে। তাদের একজন বলে ওঠে, ৩৭:৫১ আয়াতে, আমার একজন সাথী ছিল, কোনো নাম না বলেই। ইবন কাসীর আল-আওফীর সূত্রে ইবন আব্বাস থেকে জানান, এই সাথী ছিল একজন মুশরিক, যার দুনিয়াতে একজন মুমিন বন্ধু ছিল। তার গোত্র বা পেশা নিয়ে কিছুই বলা হয়নি, শুধু সেই একটি সম্পর্কের কথাই এসেছে, যা এই দিনে সত্যিকারের গুরুত্ব পাবে। বক্তা এরপর যা স্মরণ করছেন, আয়াতটি এখনই স্পষ্ট করে দেবে, তা নিছক বর্ণনা নয়।"
          },
          {
            "en": "Qur'anic quotation nests one speech inside another here. The believer in Paradise does not merely say that his friend used to doubt the Hereafter; he reproduces the very sentence that used to needle him, double question and all. 37:52 opens it, asking whether the listener is really one of those who believe; 37:53 supplies the specific disbelief behind that taunt. What look, at first glance, like two separate doubts are in fact one mocking question continuing across a verse break, and its second half was always the real target of the first.",
            "bn": "কুরআন এখানে একটি বক্তব্যের ভেতর আরেকটি বক্তব্য গেঁথে দিয়েছে। জান্নাতের মুমিন শুধু এটুকু বলছেন না যে তার বন্ধু আখিরাত নিয়ে সন্দেহ করত; তিনি হুবহু সেই বাক্যটাই তুলে আনছেন, যা দিয়ে বন্ধুটি তাকে খোঁচাত, তার দ্বৈত প্রশ্নসহ। ৩৭:৫২ আয়াত শুরু করে জিজ্ঞেস করে, তুমি কি সত্যিই বিশ্বাসীদের একজন; ৩৭:৫৩ আয়াত সেই খোঁচার আসল বিষয়বস্তু জুড়ে দেয়। প্রথম দেখায় মনে হয় দুটি আলাদা সন্দেহ, কিন্তু আসলে এক আয়াতের গণ্ডি পেরিয়ে চলতে থাকা একটাই বিদ্রূপাত্মক প্রশ্ন, যার দ্বিতীয় অংশই সবসময় আসল লক্ষ্য ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Doubled Denial",
          "bn": "দুইবার অস্বীকার"
        },
        "p": [
          {
            "en": "Read the Arabic silently and a shape repeats: a hamza of question, then idha, then a hamza of question again, then inna. A-idha mitna... a-inna lamadinun — two interrogatives in one sentence, not one. Al-Baghawi names the figure directly: hadha istifham inkar, this is an interrogation of denial. A denial dressed up as asking twice does not want two answers; it wants none. The companion is not weighing some possibility he finds uncertain. He has already decided, and the second question only shows how absurd he has decided the first one is.",
            "bn": "আরবি বাক্যটা চুপচাপ পড়লেই একটা ছাঁচ বারবার ধরা পড়ে: একটা প্রশ্নবোধক হামযা, তারপর ইযা, তারপর আবার একটা প্রশ্নবোধক হামযা, তারপর ইন্না। আ-ইযা মিতনা... আ-ইন্না লামাদীনূন — একই বাক্যে দুটি প্রশ্ন, একটা নয়। বাগাভী সরাসরি এর নাম বলে দেন: হাযা ইসতিফহাম ইনকার, এটা অস্বীকারের প্রশ্ন। দুইবার প্রশ্ন করে সাজানো অস্বীকার আসলে দুটি উত্তর চায় না, কোনো উত্তরই চায় না। সাথীটি কোনো অনিশ্চিত সম্ভাবনা মাপছে না। সে আগেই সিদ্ধান্ত নিয়ে ফেলেছে, আর দ্বিতীয় প্রশ্নটা শুধু দেখিয়ে দেয় প্রথমটাকে সে কতটা অবাস্তব মনে করে।"
          },
          {
            "en": "At-Tabari pauses on the wording itself. He calls it al-qira'a as-sahiha 'indana, the correct reading as we hold it, one whose contradiction is not permitted because the authoritative reciters are unanimous upon it. He is ruling out a rival recitation, not inviting one. Whatever private argument the companion built around this sentence, he built it on an uncontested text. The disagreement in this story was never about the wording; two men agreed exactly on what was asked and disagreed completely about what the right answer was.",
            "bn": "তাবারী শব্দচয়নের উপরই থেমে যান। তিনি একে বলেন আল-কিরাআহ আস-সহীহাহ ইনদানা, আমাদের মতে সঠিক পাঠ, যার বিরুদ্ধে যাওয়া চলে না কারণ নির্ভরযোগ্য ক্বারীগণ এ বিষয়ে একমত। তিনি কোনো প্রতিদ্বন্দ্বী পাঠকে প্রশ্রয় দিচ্ছেন না, এমন একটা পাঠ ডেকে আনছেন না। সাথীটি এই বাক্য নিয়ে যত যুক্তিই সাজিয়ে থাকুক, তা বানিয়েছে এমন একটা পাঠের উপর যা নিয়ে কোনো বিতর্ক নেই। এ কাহিনিতে মতভেদ কখনো শব্দ নিয়ে ছিল না। দুই ব্যক্তি প্রশ্নটা নিয়ে পুরোপুরি একমত ছিল, কেবল সঠিক উত্তর নিয়ে সম্পূর্ণ দ্বিমত ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Endings for One Image",
          "bn": "এক ছবির দুই পরিণতি"
        },
        "p": [
          {
            "en": "The same four words open this sentence that opened another, earlier in this surah. In 37:16 the people of Mecca say a-idha mitna wa kunna turaban wa 'izaman, when we have died and become dust and bones, before finishing with a-inna lamab'uthun, will we indeed be resurrected? 37:53 keeps that opening word for word and changes only the ending: a-inna lamadinun, will we indeed be recompensed? The doubt has not moved an inch in its first half. It has only pushed further in its second.",
            "bn": "এই সূরারই আরেকটি আয়াতে একই চারটি শব্দ দিয়ে বাক্য শুরু হয়েছে আগে। ৩৭:১৬ আয়াতে মক্কার মানুষেরা বলে, আ-ইযা মিতনা ওয়া কুন্না তুরাবান ওয়া ইযামান, আমরা মরে মাটি আর হাড্ডি হয়ে গেলে, আর শেষ করে আ-ইন্না লামাবউসূন বলে, আমাদের কি সত্যিই আবার উঠানো হবে? ৩৭:৫৩ আয়াত একই শুরু রেখে শুধু শেষটা পাল্টায়: আ-ইন্না লামাদীনূন, আমাদের কি সত্যিই প্রতিদান দেওয়া হবে? সন্দেহটা প্রথমার্ধে এক চুলও নড়েনি। শুধু দ্বিতীয়ার্ধে আরেক ধাপ এগিয়ে গেছে।"
          },
          {
            "en": "Grant the resurrection, for the sake of argument, and the companion's real objection still stands untouched: so what if we are raised, will anyone actually be held to account for it? The image of crumbled dust and brittle bone is doing the same work twice in this surah, dismantling the same claim it dismantled in 37:16, but 37:53 shows what that image was always really protecting. Doubting that broken bones can live again was only ever the opening move. The target was the reckoning that a restored life would then have to face.",
            "bn": "তর্কের খাতিরে ধরে নিন পুনরুত্থান সত্যি, তবু সাথীটির আসল আপত্তি অক্ষতই থেকে যায়: ধরলামই যে আবার উঠানো হলো, তাতে কি সত্যিই কারও কাছে হিসাব চাওয়া হবে? ভেঙে যাওয়া মাটি আর ভঙ্গুর হাড্ডির ছবিটা এই সূরায় দুবার একই কাজ করছে, ৩৭:১৬ আয়াতে যে দাবি ভেঙেছিল সেটাই আবার ভাঙছে, কিন্তু ৩৭:৫৩ আয়াত দেখিয়ে দেয় সেই ছবিটা আসলে কী আড়াল করছিল। ভাঙা হাড্ডি আবার জীবন পেতে পারে, এই সন্দেহটা ছিল শুধু প্রথম চাল। আসল লক্ষ্য ছিল সেই হিসাব, যা পুনরুদ্ধার পাওয়া জীবনকে দিতে হতো।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Words for One Reckoning",
          "bn": "এক হিসাবের দুই শব্দ"
        },
        "p": [
          {
            "en": "Lamadinun comes from the same root that gives Arabic its words for a debt and for recompense. Asked what the word itself means, the early commentators split cleanly into two camps. Mujahid and as-Suddi, Ibn Kathir reports, read it as muhasabun, held to account: a reckoning, nothing more specified. Ibn 'Abbas and Muhammad bin Ka'b al-Qurazi read it as mujaziyyun bi-a'malina, repaid for our deeds: a reckoning that ends in reward or punishment, not just a ledger being opened.",
            "bn": "লামাদীনূন শব্দটা এসেছে সেই মূল থেকে, যা থেকে আরবিতে ঋণ আর প্রতিদান দুটো শব্দই আসে। শব্দটার অর্থ জিজ্ঞেস করা হলে প্রথম যুগের তাফসীরকারেরা স্পষ্ট দুই দলে ভাগ হয়ে যান। মুজাহিদ ও সুদ্দী, ইবন কাসীর জানান, একে পড়েন মুহাসাবূন, হিসাব নেওয়া হবে, নিছক হিসাব, আর কিছু নির্দিষ্ট না করে। ইবন আব্বাস ও মুহাম্মদ বিন কা'ব আল-কুরাযী পড়েন মুজাযিইয়ূন বিআ'মালিনা, আমাদের আমলের প্রতিদান দেওয়া হবে, এমন এক হিসাব যা পুরস্কার বা শাস্তিতে গিয়ে শেষ হয়, শুধু খাতা খোলা নয়।"
          },
          {
            "en": "Most of the commentators who weighed in after them declined to choose. Al-Qurtubi and al-Baghawi both gloss the word with both terms side by side, mujazuna muhasabun, and at-Tabari's own paraphrase does the same before he even cites a name. Ibn Kathir states outright what the others only imply by pairing the words: both views are correct. A reckoning that only tallied, with no payment at the end, would not be the reckoning this companion was mocking. The accounting and the payment are one claim here, not two competing ones.",
            "bn": "পরের অধিকাংশ তাফসীরকার এই দুইয়ের মধ্যে বেছে নিতে রাজি হননি। কুরতুবী ও বাগাভী দুজনেই শব্দটার অর্থ দুই পরিভাষা পাশাপাশি বসিয়ে দেন, মুজাযূনা মুহাসাবূন, আর তাবারীও নাম উল্লেখ করার আগেই নিজের ব্যাখ্যায় একই কাজ করেন। ইবন কাসীর যা অন্যরা শুধু ইঙ্গিতে বলেন তা সরাসরি বলে দেন: দুটো মতই সঠিক। শুধু হিসাব মেলানো, শেষে কোনো প্রতিদান ছাড়াই, এই সাথী যে হিসাব নিয়ে বিদ্রূপ করছিল তা হতো না। হিসাব নেওয়া আর প্রতিদান দেওয়া এখানে একটাই দাবি, দুটো আলাদা মত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Proverb of Repayment",
          "bn": "প্রতিদানের প্রবাদ"
        },
        "p": [
          {
            "en": "At-Tabari preserves a second sentence attached to Ibn 'Abbas's reading, one easy to miss: kama tadinu tudan, as you repay, so you are repaid. It is a known Arabic proverb, not a phrase Ibn 'Abbas coined for this verse; he reaches for it because it says in six words what the companion refused to believe in seven. Every act you hand out returns to you in kind. The claim is not exotic. It is the oldest ledger there is, the one that says nothing done simply disappears.",
            "bn": "তাবারী ইবন আব্বাসের পড়ার সঙ্গে আরেকটা বাক্য জুড়ে রাখেন, যা সহজেই চোখ এড়িয়ে যায়: কামা তাদীনু তুদান, যেমন তুমি দেবে, তেমনই পাবে। এটা একটা পরিচিত আরবি প্রবাদ, ইবন আব্বাস এই আয়াতের জন্য বানাননি; তিনি এটা টেনে আনেন কারণ এটা ছয়টি শব্দে সেই কথাই বলে, যা সাথীটি সাতটি শব্দে অস্বীকার করছিল। আপনি যা কিছু অন্যের সঙ্গে করেন, তা একই রূপে আপনার কাছে ফিরে আসে। দাবিটা অদ্ভুত কিছু নয়। এটাই সবচেয়ে পুরনো হিসাবের খাতা, যা বলে কোনো কাজই এমনি হারিয়ে যায় না।"
          },
          {
            "en": "That is exactly the ledger the companion in this story wanted to close early. His mockery was never really about whether bones can be reassembled; commentators on earlier verses of this surah had already heard that complaint and answered it. His real complaint, voiced here, was that the return he was due for his own choices might actually come. A proverb about repayment answers a denial of repayment better than a lecture could. Ibn 'Abbas is not adding a new argument. He is naming the one thing everybody, mocker included, already knows is fair.",
            "bn": "এই কাহিনির সাথীটি ঠিক এই হিসাবের খাতাটাই আগেভাগে বন্ধ করে দিতে চেয়েছিল। তার বিদ্রূপ আসলে হাড্ডি জোড়া লাগার সম্ভাবনা নিয়ে ছিল না; এই সূরার আগের আয়াতগুলোতে এই আপত্তি শোনা আর জবাব দেওয়া দুটোই হয়ে গেছে। তার আসল আপত্তি, এই আয়াতে যা শোনা যাচ্ছে, তা হলো নিজের পছন্দের জন্য যে প্রতিদান তার প্রাপ্য, সেটা সত্যিই আসতে পারে। প্রতিদান অস্বীকারের জবাবে একটা প্রবাদ বক্তৃতার চেয়ে ভালো কাজ করে। ইবন আব্বাস নতুন কোনো যুক্তি জোড়েননি। বিদ্রূপকারীসহ সবাই যা ন্যায্য বলে আগে থেকেই জানে, তিনি শুধু সেই একটা জিনিসেরই নাম বলে দিচ্ছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Witness Among Friends",
          "bn": "বন্ধুদের মাঝে এক সাক্ষ্য"
        },
        "p": [
          {
            "en": "As-Sa'di reads the whole exchange, from 37:51 through this verse, as one piece of testimony rather than small talk. The man in Paradise is not idly reminiscing when he turns to the others around him. Hatha qissati wa hatha khabari, ana wa qarini, this is my story and this is my report, myself and my companion, as-Sa'di has him say: I remained a believer, confirming the truth, while he remained one who denied and rejected the resurrection, until we died, and then were raised.",
            "bn": "৩৭:৫১ থেকে এই আয়াত পর্যন্ত গোটা কথোপকথনকে সাদী একটি সাক্ষ্য হিসেবে পড়েন, নিছক খোশগল্প নয়। জান্নাতের মানুষটি চারপাশের মানুষদের দিকে ফিরে স্রেফ স্মৃতিচারণ করছেন না। হাযা কিসসাতী ওয়া হাযা খাবারী, আনা ওয়া কারীনী, এটা আমার কাহিনি, আমার খবর, আমি আর আমার সাথী, সাদী তাকে বলান: আমি মুমিন থেকে গেছি, সত্যকে মেনে, আর সে পুনরুত্থান অস্বীকার করেই থেকে গেছে, যতক্ষণ না আমরা মরলাম, আর তারপর উঠানো হলাম।"
          },
          {
            "en": "As-Sa'di finishes the sentence for him: I arrived at the bliss the messengers had told us about, and he, without any doubt, arrived at the punishment. Two men, as-Sa'di is pointing out, heard the identical news from the identical messengers. One held onto it until death separated what could no longer be undone. The speaker is not boasting among friends who already agree with him; he is giving them the one witness statement that settles every argument his old companion ever made: I was there, I believed, and this is where believing led.",
            "bn": "সাদী তার বাক্যটা শেষ করে দেন: আমি পৌঁছেছি সেই সুখে, যার খবর রাসূলগণ আমাদের দিয়েছিলেন, আর সে, কোনো সন্দেহ ছাড়াই, পৌঁছেছে শাস্তিতে। দুই ব্যক্তি, সাদী এখানে যা দেখাচ্ছেন, একই রাসূলদের কাছ থেকে একই খবর শুনেছিল। একজন তা ধরে রেখেছিল, যতক্ষণ না মৃত্যু এমন এক ফল আলাদা করে দিল যা আর বদলানো যায় না। বক্তা এখানে এমন বন্ধুদের সামনে গর্ব করছেন না যারা আগে থেকেই তার সঙ্গে একমত; তিনি দিচ্ছেন সেই একটিমাত্র সাক্ষ্য, যা তার পুরনো সাথীর প্রতিটা যুক্তির নিষ্পত্তি করে দেয়: আমি ছিলাম, আমি বিশ্বাস করেছিলাম, আর বিশ্বাস আমাকে এখানে এনেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Story Commentators Tell",
          "bn": "তাফসীরকারদের বলা কাহিনি"
        },
        "p": [
          {
            "en": "Commentators could not resist asking who this companion was, though the Qur'an itself gives no name. Ma'arif al-Qur'an says so plainly: the man's identity is not given in the text, and nothing can be said about it with certainty. It then reports, by way of Tafsir Mazhari, that some have guessed at the names Yahudah and Matrus, and linked the pair to the two men of Surah al-Kahf's parable. None of this is offered as settled fact. It is offered the way these reports usually are, as what later generations guessed once the story had already been told.",
            "bn": "তাফসীরকারেরা এই সাথী কে ছিল তা না জিজ্ঞেস করে থাকতে পারেননি, যদিও কুরআন নিজে কোনো নাম বলে না। মাআরিফুল কুরআন স্পষ্ট করেই বলে: লোকটির পরিচয় কুরআনে দেওয়া নেই, আর এ নিয়ে নিশ্চিত করে কিছু বলা যায় না। এরপর তাফসীরে মাজহারীর সূত্রে জানায়, কেউ কেউ ইয়াহুদা ও মাতরুস নাম অনুমান করেছেন, আর এই জুটিকে সূরা কাহফের দৃষ্টান্তের দুই ব্যক্তির সঙ্গে জুড়ে দিয়েছেন। এর কোনোটাই চূড়ান্ত সত্য হিসেবে পেশ করা হয়নি। এটা সেভাবেই এসেছে যেভাবে এমন বর্ণনা সাধারণত আসে, কাহিনি বলা হয়ে যাওয়ার পর পরবর্তী প্রজন্মের অনুমান হিসেবে।"
          },
          {
            "en": "Ibn Kathir records a fuller version, traced through Ibn Jarir to Furat bin Tha'labah, about two business partners who divided 8000 dinars. One spent his share on a house, a marriage, and two gardens, announcing each purchase to the other; the other quietly asked Allah for the same in Paradise and gave an equal sum in charity each time. Asked for help later in life, the first partner's reply was the mockery this verse records almost word for word, that dust and bones would somehow be held to account, before he refused outright. He died owning two gardens. He woke up owning nothing.",
            "bn": "ইবন কাসীর ইবন জারীরের সূত্রে ফুরাত বিন সা'লাবার বরাতে আরেকটা বিস্তারিত বর্ণনা তুলে আনেন, দুই ব্যবসায়ী অংশীদারের কাহিনি, যারা ৮০০০ দিনার ভাগ করে নিয়েছিল। একজন নিজের ভাগ খরচ করল বাড়ি, বিয়ে আর দুটি বাগানে, প্রতিটা কেনাকাটার কথা অন্যজনকে জানিয়ে; অন্যজন চুপচাপ আল্লাহর কাছে জান্নাতে তেমনই কিছু চাইল, আর প্রতিবার সমান পরিমাণ দান করল। পরে জীবনে সাহায্য চাইতে গেলে প্রথম অংশীদারের জবাবই ছিল এই আয়াতের বিদ্রূপ, প্রায় হুবহু, মাটি আর হাড্ডি হয়ে গেলে নাকি হিসাব নেওয়া হবে, তারপর সরাসরি প্রত্যাখ্যান। সে মারা গেল দুটি বাগানের মালিক হয়ে। সে জেগে উঠল কিছুই না নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Translators Struggle With",
          "bn": "অনুবাদকদের কাছে কঠিন একটি শব্দ"
        },
        "p": [
          {
            "en": "English translations of this verse scatter across the same word. The Ibn Kathir translation used here renders lamadinun as 'indebted', keeping Madinun printed alongside it in brackets because no single English word was thought to carry it alone. Other renderings reach for 'recompensed' or 'brought to account', each one leaning toward one of the two readings the earliest commentators gave. None of them is wrong; the word was built to hold both ideas at once, and every translation has to pick a lane the Arabic never had to.",
            "bn": "এই আয়াতের ইংরেজি অনুবাদগুলো একই শব্দ নিয়ে ছড়িয়ে পড়ে ভিন্ন ভিন্ন দিকে। এখানে ব্যবহৃত ইবন কাসীরের অনুবাদে লামাদীনূনকে বলা হয়েছে 'indebted', ঋণগ্রস্ত, আর পাশে বন্ধনীতে মূল শব্দ 'Madinun' রাখা হয়েছে, কারণ এককভাবে কোনো ইংরেজি শব্দ পুরো অর্থ বহন করতে পারবে বলে মনে হয়নি। অন্য অনুবাদকেরা বেছে নেন 'recompensed' বা 'brought to account', প্রতিটিই প্রথম যুগের তাফসীরকারদের দেওয়া দুটি পাঠের একটির দিকে ঝুঁকে। এর কোনোটিই ভুল নয়; শব্দটা এমনভাবে তৈরি, যা দুটো ভাবই একসঙ্গে ধরে রাখে, আর প্রতিটি অনুবাদকেই একটা দিক বেছে নিতে হয়, যা মূল আরবিকে কখনো বেছে নিতে হয়নি।"
          },
          {
            "en": "This is not a defect in translation; it is a signal about the word itself. Lamadinun was never meant to separate the ledger from the payment, only to name the single moment both happen together. The companion in this story was mocking that very fusion, the idea that a reckoning could ever be more than paperwork. The commentators who glossed it with both English-sized meanings at once were not hedging. They were refusing to let the word shrink to fit a mocker's expectations.",
            "bn": "এটা অনুবাদের কোনো ত্রুটি নয়; এটা শব্দটা সম্পর্কে একটা ইঙ্গিত। লামাদীনূন কখনো হিসাবের খাতাকে প্রতিদান থেকে আলাদা করার জন্য বানানো হয়নি, বরং এই দুটোই একসঙ্গে ঘটার সেই একটামাত্র মুহূর্তের নাম দেওয়ার জন্য। এই কাহিনির সাথীটি ঠিক এই মিলনটাকেই নিয়ে বিদ্রূপ করছিল, এই ধারণাটাকে যে হিসাব কখনো নিছক কাগজপত্রের চেয়ে বেশি কিছু হতে পারে। যে তাফসীরকারেরা একসঙ্গে দুটো অর্থ দিয়ে শব্দটার ব্যাখ্যা দিয়েছেন, তারা কোনো দ্বিধা করছিলেন না। তারা শব্দটাকে কোনো বিদ্রূপকারীর প্রত্যাশামতো ছোট হতে দিতে অস্বীকার করছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Company We Keep",
          "bn": "আমরা যাদের সঙ্গে থাকি"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws its lesson from the story rather than from the names in it: whoever this person was does not matter, it says, because the Qur'an is alerting its reader to a rule that operates in every human relationship. Take a careful survey of your own circle, it advises, and ask honestly whether anyone in it is quietly pulling you toward the ending this companion reached. The full damage bad company does, it notes, is only ever seen clearly in the next life, which is exactly why the time to act on it is here.",
            "bn": "মাআরিফুল কুরআন কাহিনির নাম থেকে নয়, কাহিনির শিক্ষা থেকে উপদেশ টানে: লোকটি কে ছিল তাতে কিছু যায় আসে না, বইটি বলে, কারণ কুরআন পাঠককে এমন এক নিয়মের দিকে ইঙ্গিত করছে যা প্রতিটি মানবিক সম্পর্কেই কাজ করে। নিজের বন্ধু-মহলের দিকে মনোযোগ দিয়ে তাকান, এটা পরামর্শ দেয়, আর সৎভাবে জিজ্ঞেস করুন তাদের মধ্যে কেউ নিঃশব্দে আপনাকে এই সাথীর পরিণতির দিকে টেনে নিচ্ছে কিনা। খারাপ সঙ্গের পুরো ক্ষতি, বইটি উল্লেখ করে, পুরোপুরি দেখা যায় কেবল পরজীবনে, আর ঠিক এই কারণেই এখনই পদক্ষেপ নেওয়ার সময়।"
          },
          {
            "en": "This verse describes one companion's mockery and the ending it earned him; it names no community and condemns no group of people living today, and it gives nobody standing to brand a friend, a neighbour or any group as destined for the Fire. What it does license is self-examination. Ma'arif al-Qur'an's warning is that influence works quietly: a person can absorb another's doubts about the Hereafter without ever noticing the change happening. The companion in Paradise noticed his friend's drift for years and could not stop it. The caution this verse leaves is to notice earlier, in ourselves first.",
            "bn": "এই আয়াত একজন সাথীর বিদ্রূপ আর তার অর্জিত পরিণতি বর্ণনা করে; এটা কোনো সম্প্রদায়ের নাম বলে না, আজকের কোনো গোষ্ঠীকে দোষী সাব্যস্ত করে না, আর কাউকে কোনো বন্ধু, প্রতিবেশী বা গোষ্ঠীকে জাহান্নামের জন্য নির্ধারিত বলে দাগিয়ে দেওয়ার অধিকার দেয় না। এটা যা অনুমতি দেয় তা হলো নিজেকে যাচাই করা। মাআরিফুল কুরআনের সতর্কতা হলো, প্রভাব নিঃশব্দে কাজ করে: কেউ টেরই পায় না কখন অন্যের আখিরাত নিয়ে সংশয় নিজের ভেতর ঢুকে পড়েছে। জান্নাতের সাথীটি বছরের পর বছর তার বন্ধুর এই পথে হেলে পড়া লক্ষ করেছিলেন, থামাতে পারেননি। এ আয়াত যে সতর্কতা রেখে যায় তা হলো, আগেভাগে খেয়াল করা, নিজের মধ্যে সবার আগে।"
          }
        ]
      }
    ]
  },
  "37:55": {
    "sections": [
      {
        "h": {
          "en": "The Elided Yes",
          "bn": "বাদ পড়া সেই হ্যাঁ"
        },
        "p": [
          {
            "en": "'Would you care to look?' the believer asks his friends in Paradise at the end of 37:54. Then 37:55 opens: so he looked, and saw him in the midst of the Fire. Between the question and the looking, no one in the text answers. At-Tabari names the gap outright: wa fi al-kalam matruk, in the speech there is an elided clause, one the speech's own indication makes unnecessary to state. The missing words, he specifies, were qalu: na'am, they said: yes. The Qur'an trusts its reader to supply an answer too obvious to need writing down. The economy is typical of Qur'anic narrative at its most dramatic moments.",
            "bn": "'তোমরা কি উঁকি দিয়ে দেখতে চাও?' ৩৭:৫৪ আয়াতের শেষে জান্নাতের মুমিন তার বন্ধুদের জিজ্ঞেস করেন। এরপর ৩৭:৫৫ আয়াত শুরু হয়: সে উঁকি দিল, আর তাকে জাহান্নামের মাঝখানে দেখল। প্রশ্ন আর উঁকি দেওয়ার মাঝে আয়াতে কেউ জবাব দেয় না। তাবারী এই ফাঁকটা সরাসরি চিহ্নিত করেন: কথার ভেতরে একটা অংশ বাদ পড়েছে, যা বাক্যের ইঙ্গিত থেকেই বোঝা যায় বলে আলাদাভাবে বলার দরকার পড়েনি। সেই বাদ পড়া কথাটা, তিনি বলেন, ছিল: তারা বলল, হ্যাঁ। কুরআন পাঠকের উপর ভরসা রাখে, এত স্পষ্ট একটা জবাব লিখে দেখানোর দরকার নেই বলে। কুরআনের বর্ণনায় সবচেয়ে নাটকীয় মুহূর্তগুলোতে এই সংক্ষিপ্ততা নতুন কিছু নয়।"
          },
          {
            "en": "The missing word belongs to the people of Paradise the believer is addressing, not to him. Before he can describe what he saw, the text assumes their eagerness answered for them, a 'yes' too quick to need recording. What At-Tabari protects by naming the ellipsis is the logic of the scene: a question was asked, consent was given, and only then did the looking happen. Nothing about this encounter with the Fire is accidental or unauthorised. Every step, down to a 'yes' the Qur'an does not even bother to write, is accounted for before the sight itself is granted.",
            "bn": "এই বাদ পড়া কথাটা তার নিজের নয়, বরং যাদের তিনি সম্বোধন করছেন সেই জান্নাতবাসীদের। তিনি কী দেখেছেন তা বলার আগেই ধরে নেওয়া হয়, তাদের আগ্রহ এমন দ্রুত জবাব দিয়ে দিয়েছে যে তা লেখার দরকার পড়েনি। তাবারী এই উহ্য অংশটার নাম দিয়ে আসলে দৃশ্যের যুক্তিটাই রক্ষা করেন: প্রশ্ন করা হলো, সম্মতি দেওয়া হলো, তারপরই উঁকি দেওয়া হলো। আগুনের সঙ্গে এই সাক্ষাতের কোনো অংশই আকস্মিক বা অননুমোদিত নয়। প্রতিটা ধাপ, এমনকি কুরআন যে 'হ্যাঁ' কথাটা লেখার প্রয়োজনই মনে করেনি, তা-ও হিসাবের মধ্যে আছে, দৃশ্যটা দেখানোর আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Permission to Look",
          "bn": "দেখার অনুমতি চাওয়া"
        },
        "p": [
          {
            "en": "Before any of this, Qatada is reported by At-Tabari to have read something more specific into 37:54's question. Qala: sa'ala rabbahu an yuttali'ahu, he said: he asked his Lord to let him look. On this reading, the believer's words to his friends were not idle musing about what might be visible; he had already petitioned Allah directly for the sight, and the question he puts to his companions only announces that the request has been granted. Even inside Paradise, looking into the Fire is not a standing privilege. It is something asked for, and given. This detail is not repeated elsewhere, but it fits the question's plain sense.",
            "bn": "এর আগে, তাবারীর বরাতে কাতাদা ৩৭:৫৪ আয়াতের প্রশ্নের মধ্যে আরও নির্দিষ্ট কিছু পড়েছেন বলে জানা যায়। তিনি বলেন: সে তার রবের কাছে উঁকি দেওয়ার অনুমতি চেয়েছিল। এই ব্যাখ্যা অনুযায়ী, বন্ধুদের কাছে বলা তার কথাগুলো নিছক কী দেখা যেতে পারে তা নিয়ে ভাবনা ছিল না; তিনি ইতিমধ্যে সরাসরি আল্লাহর কাছে সেই দৃশ্য দেখার আবেদন করে ফেলেছিলেন, আর বন্ধুদের কাছে করা প্রশ্নটা শুধু জানিয়ে দেয় যে অনুমতি মিলে গেছে। জান্নাতে থেকেও আগুনের দিকে তাকানো কোনো সহজাত অধিকার নয়। এটা চাওয়া হয়েছে, আর দেওয়া হয়েছে। এই বিস্তারিত তথ্যটা অন্য কোথাও মেলে না, তবে প্রশ্নটার সরল অর্থের সঙ্গে পুরোপুরি মানানসই।"
          },
          {
            "en": "The companion he is asking to see is the same one introduced two verses earlier: in 37:53, this very speaker recalled the mocking question that companion used to repeat on earth. Nothing about that history has been forgotten by the time he reaches this verse; if anything, it explains the request. He is not satisfying idle curiosity about a stranger's fate. He wants to see, with permission, where the doubt he once sat across from actually ended, now that the two of them have been placed on opposite sides of a single, unbridgeable line.",
            "bn": "তিনি যে সাথীকে দেখতে চাইছেন, সে সেই একই ব্যক্তি, যার কথা দুই আয়াত আগে এসেছে: ৩৭:৫৩ আয়াতে এই একই বক্তা সেই বিদ্রূপাত্মক প্রশ্নটা স্মরণ করেছিলেন, যা তার সাথী দুনিয়ায় বারবার বলত। এই আয়াতে পৌঁছানো পর্যন্ত সেই ইতিহাসের কিছুই ভোলেননি তিনি; বরং এটাই তার আবেদনের কারণ ব্যাখ্যা করে। অচেনা কারও পরিণতি নিয়ে নিছক কৌতূহল মেটাতে চাননি তিনি। তিনি অনুমতি নিয়ে দেখতে চেয়েছেন, একসময় যে সন্দেহের মুখোমুখি বসতেন, তা শেষ পর্যন্ত কোথায় গিয়ে ঠেকল, এখন যে দুজন এমন এক অলঙ্ঘনীয় রেখার দুই পাশে দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Word, No Dispute",
          "bn": "একটি শব্দ, কোনো দ্বিমত নেই"
        },
        "p": [
          {
            "en": "On the meaning of fi sawa'i al-jahim, in the midst of the Hellfire, the commentators barely disagree at all. Ibn Kathir names Ibn 'Abbas, Sa'id ibn Jubayr, Khulayd al-'Usari, Qatada, as-Suddi and 'Ata' al-Khurasani together, each reading sawa' as wasat al-jahim, the middle of Hellfire, plainly and without qualification. As-Sa'di's gloss points the same way: the middle of the punishment and its floods, with the punishment having already closed in around him from every side. One word, repeated by this many independent readers, settles into one plain sense, and no second position is recorded in any of the tafsirs consulted for this verse.",
            "bn": "ফি সওয়াইল জাহিম, অর্থাৎ জাহান্নামের মাঝখানে, এই কথার অর্থ নিয়ে তাফসীরকারদের মধ্যে প্রায় কোনো মতভেদই নেই। ইবন কাসীর একসঙ্গে নাম নেন ইবন আব্বাস, সাঈদ ইবনে জুবায়ের, খুলায়েদ আল-উসারী, কাতাদা, সুদ্দী আর আতা আল-খুরাসানীর, প্রত্যেকেই সওয়াকে পড়েন ওয়াসাতুল জাহিম অর্থাৎ জাহান্নামের মাঝখানে, স্পষ্টভাবে, কোনো শর্ত ছাড়াই। সাদীর ব্যাখ্যাও একই দিকে ইঙ্গিত করে: শাস্তির মাঝখানে, তার ঢেউয়ের মধ্যে, শাস্তি তাকে চারদিক থেকে ইতিমধ্যে ঘিরে ফেলেছে। একটি শব্দ, এতজন স্বতন্ত্র পাঠকের মুখে বারবার এসে, একটাই সরল অর্থে স্থির হয়ে যায়, আর এই আয়াতের জন্য দেখা কোনো তাফসীরেই দ্বিতীয় কোনো অবস্থান পাওয়া যায় না।"
          },
          {
            "en": "Why sawa' means middle at all is explained in two complementary ways. Al-Baghawi gives the grammar: wasat ash-shay' yusamma sawa'an li-stiwa' al-jawanib minhu, the middle of a thing is called sawa' because its sides are equal there, measured the same distance from every edge. Al-Qurtubi confirms the sense is ordinary Arabic usage, not a word invented for this verse, quoting a line about exhaustion, ta'ibtu hatta inqata'a sawa'i, I grew tired until my sawa' gave out, and a grammarian's complaint about writing until his sawa', his back, finally gave way. It is simply how Arabic uses the word, inside the Qur'an and outside it.",
            "bn": "সওয়া শব্দের অর্থ কেন মাঝখান, তা দুইভাবে মিলেমিশে ব্যাখ্যা করা হয়েছে। বাগাভী ব্যাকরণগত কারণ দেন: কোনো কিছুর মাঝখানকে সওয়া বলা হয় কারণ সেখানে তার দিকগুলো সমান, প্রতিটা প্রান্ত থেকে একই দূরত্বে মাপা। কুরতুবী নিশ্চিত করেন যে এই ব্যবহার সাধারণ আরবি ভাষারই অংশ, এই আয়াতের জন্য বানানো কোনো শব্দ নয়, আর এক্ষেত্রে ক্লান্তির একটা বাক্য উদ্ধৃত করেন, আমি এত লিখেছি যে আমার 'সওয়া' ফুরিয়ে গেছে, আর এক ব্যাকরণবিদের অভিযোগ, লিখতে লিখতে তার 'সওয়া', অর্থাৎ পিঠ, শেষ পর্যন্ত ভেঙে পড়েছিল। এটা স্রেফ আরবি ভাষায় শব্দটা যেভাবে ব্যবহৃত হয়, কুরআনের ভেতরে আর বাইরে, উভয় জায়গাতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Thorns Around the Middle",
          "bn": "আগুনের মাঝে কাঁটাগাছ"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a specific picture to go with the plain word. Fi wasat an-nar wal-hasaku hawalayhi, qalahu Ibn Mas'ud: in the middle of the Fire, with the thorny plants around it, said by Ibn Mas'ud. Al-hasak are the hard, spiked burrs that catch on skin and clothing in the desert, a plant painful even to brush against in this world. Ibn Mas'ud is not adding geography so much as texture: the middle of the Hellfire is not simply a location at the centre of a space, ringed instead by something that wounds on approach, from every direction at once. Al-Qurtubi reports it without extra comment, as a plain gloss.",
            "bn": "কুরতুবী এই সাদামাটা শব্দের সঙ্গে একটা নির্দিষ্ট ছবি জুড়ে দেন। অর্থ দাঁড়ায়: আগুনের মাঝখানে, চারপাশে কাঁটাগাছ, এ কথা বলেছেন ইবন মাসউদ। হাসাক বলতে বোঝায় মরুভূমির সেই শক্ত, কাঁটাওয়ালা ফলগুলো, যা চামড়া আর কাপড়ে আটকে যায়, দুনিয়াতেও যার গায়ে লাগা বেদনাদায়ক। ইবন মাসউদ এখানে কোনো ভূগোল যোগ করছেন না, যোগ করছেন একটা অনুভূতি: জাহান্নামের মাঝখানটা স্রেফ কোনো জায়গার কেন্দ্র নয়, বরং চারদিক থেকেই এমন কিছু দিয়ে ঘেরা, যা কাছে গেলেই আঘাত করে। কুরতুবী এটা অতিরিক্ত কোনো মন্তব্য ছাড়াই একটা সাদামাটা ব্যাখ্যা হিসেবে তুলে ধরেন।"
          },
          {
            "en": "None of the other commentators consulted here repeat this detail; it belongs to al-Qurtubi's report from Ibn Mas'ud alone, not to a chain of names converging on the same image the way sawa' itself was. That is worth noting plainly rather than stretching it into more than it is: a single attribution, not a second consensus. It still earns its place. A reader could nod along at 'the middle of the Fire' as an abstraction and move on. Thorns around that middle refuse to stay abstract; they insist that whatever is being described here is a place, not only a verdict.",
            "bn": "এখানে উল্লেখ করা অন্য কোনো তাফসীরকার এই বিস্তারিত বিবরণ দেননি; এটা কুরতুবীর বরাতে ইবন মাসউদের একক বর্ণনা, কোনো একাধিক সূত্র মিলে একই ছবিতে পৌঁছানো নয়, যেমনটা সওয়া শব্দের অর্থে হয়েছিল। এটা স্পষ্ট করে বলাই ভালো, অতিরিক্ত কিছু বানিয়ে না তুলে: এটা একটি একক সূত্র, দ্বিতীয় কোনো ঐকমত্য নয়। তবু এর গুরুত্ব আছে। 'আগুনের মাঝখানে' কথাটা নিছক একটা ধারণা হিসেবে শুনে পাঠক এগিয়ে যেতে পারতেন। কিন্তু সেই মাঝখানে কাঁটাগাছ থাকার কথা ধারণাতেই থামতে দেয় না; এটা জোর দিয়ে বলে, এখানে যা বর্ণনা করা হচ্ছে তা স্রেফ একটা রায় নয়, একটা জায়গাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Recognised Only Through Allah's Doing",
          "bn": "আল্লাহই তাকে চিনিয়ে দিলেন"
        },
        "p": [
          {
            "en": "At-Tabari preserves a report from Khulayd al-'Usari, by way of Qatada, about the moment of recognition itself: lawla anna Allaha 'arrafahu iyyahu ma 'arafahu, laqad taghayyara hibruhu wa sibruhu ba'dah, had Allah not made him known to him, he would not have recognised him; his colour and his bearing had changed after that. A second chain, from Mutarrif ibn 'Abdillah, says nearly the same words with the Fire as the subject rather than time: the Fire itself had changed his colour and his bearing. Whichever report is read, the point stands: nothing about the disbeliever's appearance in the Fire still matched the man once known in the world.",
            "bn": "তাবারী কাতাদার সূত্রে খুলায়েদ আল-উসারী থেকে একটা বর্ণনা রক্ষা করেন, ঠিক চেনার মুহূর্তটা নিয়ে: আল্লাহ যদি তাকে চিনিয়ে না দিতেন, তবে তিনি তাকে চিনতেই পারতেন না; তার গায়ের রং আর ভাবভঙ্গি ততদিনে বদলে গিয়েছিল। আরেকটা সূত্র, মুতাররিফ ইবনে আবদুল্লাহর বরাতে, প্রায় একই কথা বলে, তবে কর্তা হিসেবে সময়ের বদলে আগুনকেই রাখে: আগুনই তার রং আর ভাবভঙ্গি বদলে দিয়েছিল। যে বর্ণনাই পড়া হোক, মূল কথাটা একই থাকে: দুনিয়ায় চেনা সেই মানুষটার সঙ্গে আগুনের মধ্যে থাকা অবয়বের আর কোনো মিল ছিল না।"
          },
          {
            "en": "Al-Qurtubi records the same report through a slightly different chain: wa 'an Qatada qala, qala ba'd al-'ulama, and from Qatada, he said, some of the scholars said, the same words about Allah's making him known following after. Two routes through Qatada, one naming Khulayd al-'Usari and Mutarrif directly, the other content to say some of the scholars, converge on a single claim: the believer did not simply glance down and recognise an old face. Recognition itself was a mercy, granted the way the permission to look was granted, not a power that came standing with the sight.",
            "bn": "কুরতুবী সামান্য ভিন্ন একটা সনদে একই বর্ণনা তুলে আনেন: কাতাদার সূত্রে, তিনি বলেন, কিছু আলেম বলেছেন, আল্লাহর চিনিয়ে দেওয়ার একই কথা এরপর আসে। কাতাদার সূত্রে দুই পথ, একটায় সরাসরি খুলায়েদ আল-উসারী আর মুতাররিফের নাম আসে, অন্যটায় শুধু কিছু আলেম বলা হয়, কিন্তু দুটোই একটাই দাবিতে মিলে যায়: মুমিন নিছক নিচে তাকিয়ে একটা পুরনো মুখ চিনে ফেলেননি। চেনাটাই ছিল একটা রহমত, ঠিক যেভাবে উঁকি দেওয়ার অনুমতিটাও রহমত হিসেবে এসেছিল, দৃশ্যের সঙ্গে এমনি এমনি আসা কোনো ক্ষমতা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Burning Star, Boiling Skulls",
          "bn": "জ্বলন্ত তারা, টগবগে খুলি"
        },
        "p": [
          {
            "en": "Al-Hasan al-Basri adds an image the other commentators do not repeat: fi wasat al-jahim ka'annahu shihabun yattaqid, in the middle of Hellfire, as if he were a burning star. The simile reaches outside the Fire for its comparison, borrowing the sky's most violent light, a meteor tearing across darkness, to describe what a human being looks like once consumed by it. It is not offered as a second location to compete with wasat al-jahim; it describes the same middle, lit from within until the body itself becomes the brightest thing in the scene. No other commentator gathered here reaches for a comparison outside the Fire to make the same point.",
            "bn": "হাসান আল-বাসরী এমন একটা ছবি যোগ করেন যা আর কোনো তাফসীরকার দেননি: জাহান্নামের মাঝখানে, যেন সে এক জ্বলন্ত তারা। এই উপমা আগুনের বাইরে থেকে তুলনাটা টেনে আনে, আকাশের সবচেয়ে তীব্র আলো ধার করে, অন্ধকার চিরে যাওয়া এক উল্কা, বোঝানোর জন্য যে আগুনে গ্রাস হওয়া একজন মানুষকে আসলে কেমন দেখায়। এটা জাহান্নামের মাঝখানের প্রতিদ্বন্দ্বী কোনো দ্বিতীয় অবস্থান হিসেবে পেশ করা হয়নি; এটা একই মাঝখানের কথাই বলছে, ভেতর থেকে জ্বলতে থাকা, যতক্ষণ না দেহটাই দৃশ্যের সবচেয়ে উজ্জ্বল জিনিস হয়ে ওঠে। এখানে সংগৃহীত আর কোনো তাফসীরকার একই কথা বলতে আগুনের বাইরে থেকে এমন তুলনা টেনে আনেননি।"
          },
          {
            "en": "Qatada passes on a second detail about the sight itself: dhukira lana annahu ittala'a fara'a jamajima al-qawmi taghli, it was mentioned to us that he looked and saw the skulls of the people boiling. The plural, 'the people', widens the frame for a moment beyond the one companion being sought; whatever scene the believer looked into held more than a single figure. What he actually says once he finds the one face he was looking for belongs to the next verse. What this verse establishes is only that the looking was real, and that what met his eyes was not abstract.",
            "bn": "কাতাদা দৃশ্যটা নিয়ে আরেকটা বিবরণ জানান: আমাদের কাছে বর্ণিত হয়েছে, তিনি উঁকি দিয়ে দেখেছিলেন সেই দলের মাথার খুলিগুলো টগবগ করে ফুটছে। 'সেই দল' কথাটা মুহূর্তের জন্য দৃশ্যটাকে একজন সাথীর বাইরেও বিস্তৃত করে দেয়; মুমিন যে দৃশ্যে উঁকি দিয়েছিলেন তাতে একজনের বেশি মানুষ ছিল। যে মুখটা তিনি খুঁজছিলেন তা পেয়ে তিনি ঠিক কী বলেছিলেন, তা পরের আয়াতের বিষয়। এই আয়াত শুধু এটুকু প্রতিষ্ঠা করে যে উঁকি দেওয়াটা সত্যিকারের ছিল, আর তার চোখের সামনে যা পড়েছিল তা নিছক ধারণা ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Windows Toward the Fire",
          "bn": "আগুনের দিকে খোলা জানালা"
        },
        "p": [
          {
            "en": "Al-Baghawi reports, from Ibn 'Abbas, a detail about how such sights are even possible: inna fi al-jannati kuwan yanzuru ahluha minha ila an-nar, there are in Paradise openings through which its people look at the Fire. On this account, the believer's look into the midst of the Hellfire is not a miracle unique to him; it uses a feature already built into Paradise for its people generally. Ibn Kathir's own tafsir adds a second name to a similar report, Ka'b al-Ahbar, who described the same openings and the effect of using them: whoever looks through them at an enemy in the Fire finds his own gratitude increasing.",
            "bn": "বাগাভী ইবন আব্বাসের সূত্রে এমন দৃশ্য আদৌ কীভাবে সম্ভব তার একটা বিবরণ দেন: জান্নাতে এমন কিছু জানালা আছে, যেখান দিয়ে তার অধিবাসীরা আগুনের দিকে তাকাতে পারে। এই বর্ণনা অনুযায়ী, মুমিনের জাহান্নামের মাঝখানে তাকানো তার জন্য আলাদা কোনো মু'জিজা নয়; এটা জান্নাতের মানুষদের জন্য আগে থেকেই রাখা একটা ব্যবস্থা ব্যবহার করছে মাত্র। ইবন কাসীরের নিজের তাফসীরে একই ধরনের একটা বর্ণনায় আরেকটা নাম যুক্ত হয়, কা'ব আল-আহবার, যিনি একই জানালার কথা বলেন, আর সেগুলো ব্যবহারের ফল: যে কেউ এর মধ্য দিয়ে তার শত্রুকে আগুনে দেখে, তার নিজের কৃতজ্ঞতাই বেড়ে যায়।"
          },
          {
            "en": "Neither report is a hadith from the Prophet ﷺ. Ibn 'Abbas describes a feature of Paradise as his own understanding; Ka'b al-Ahbar, a scholar of earlier scripture who accepted Islam, adds detail of the kind usually weighed carefully rather than relied upon as binding. None of the tafsirs consulted for this verse attaches a Prophetic hadith to it at all, sound or otherwise, and that absence is worth stating plainly rather than papering over with a narration that does not actually belong here. What the verse itself asserts needs no hadith to carry it; the looking, the permission, and the sight are already in the text.",
            "bn": "কোনোটাই নবী ﷺ থেকে বর্ণিত হাদিস নয়। ইবন আব্বাস জান্নাতের একটা বৈশিষ্ট্য নিজের বোঝাপড়া হিসেবে বর্ণনা করেন; কা'ব আল-আহবার, আগের কিতাবের একজন আলেম যিনি ইসলাম গ্রহণ করেছিলেন, এমন একটা বিবরণ যোগ করেন যা সাধারণত সতর্কতার সঙ্গে বিবেচনা করা হয়, বাধ্যতামূলক কিছু হিসেবে ধরা হয় না। এই আয়াতের জন্য দেখা তাফসীরগুলোর কোনোটিই এর সঙ্গে নবীর কোনো হাদিস জুড়ে দেয়নি, সহীহ হোক বা অন্য কিছু, আর এই অনুপস্থিতির কথা সরাসরি বলে দেওয়াই ভালো, এখানে আসলে প্রযোজ্য নয় এমন কোনো বর্ণনা দিয়ে তা ঢেকে না দিয়ে। আয়াতটি নিজে যা বলছে তার জন্য কোনো হাদিসের দরকার নেই; উঁকি দেওয়া, অনুমতি, আর দৃশ্য, এসব এমনিতেই আয়াতের মধ্যে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Companion Seen At Last",
          "bn": "অবশেষে দেখা সেই সাথী"
        },
        "p": [
          {
            "en": "Put together, the look in this verse completes a scene that began two verses earlier. In 37:53, a voice in Paradise quoted the very words his companion once used to mock the idea of being raised and repaid. In 37:55, that same voice asks to see him, is shown him in the middle of the Fire, unrecognisable except that Allah has made him known, surrounded by what the Fire has made of him. What began as an argument between two people about a question of wording ends as a sight neither of them could have argued their way out of.",
            "bn": "সব মিলিয়ে দেখলে, এই আয়াতের উঁকি দেওয়াটা এমন একটা দৃশ্য সম্পূর্ণ করে যা দুই আয়াত আগে শুরু হয়েছিল। ৩৭:৫৩ আয়াতে জান্নাতের এক কণ্ঠ সেই কথাগুলোই উদ্ধৃত করেছিল, যা দিয়ে তার সাথী একসময় পুনরুত্থান আর প্রতিদানের ধারণাকে উপহাস করত। ৩৭:৫৫ আয়াতে সেই একই কণ্ঠ তাকে দেখতে চায়, আর তাকে দেখানো হয় আগুনের মাঝখানে, চেনার অযোগ্য, শুধু আল্লাহ চিনিয়ে দিয়েছেন বলেই চেনা গেল, আগুন তাকে যা বানিয়েছে তা দিয়েই ঘেরা। দুজন মানুষের মধ্যে একটা শব্দ নিয়ে শুরু হওয়া তর্ক শেষ হলো এমন এক দৃশ্যে, যা নিয়ে তর্ক করে বের হওয়ার আর কোনো উপায় কারও ছিল না।"
          },
          {
            "en": "What he says next, once recognition settles in, opens 37:56: by Allah, you almost ruined me. That reaction belongs to the next verse and is not rebuilt here. What belongs here is a plain limit on what this scene licenses. It describes one disbeliever's end inside one story, named by no community and no person living today; it gives nobody standing to look at a neighbour, a rival or any group and claim to know their fate. The sight was granted to a believer by his Lord, after he asked, for his own reckoning, not handed to any reader as a verdict on someone else's.",
            "bn": "চেনার পর তিনি যা বলেন তা দিয়েই ৩৭:৫৬ আয়াত শুরু হয়: আল্লাহর কসম, তুমি তো আমাকে প্রায় ধ্বংসই করে দিয়েছিলে। সেই প্রতিক্রিয়া পরের আয়াতের বিষয়, এখানে তা নতুন করে বানানো হচ্ছে না। এখানে যা বলার দরকার তা হলো এই দৃশ্য আসলে কতটুকুর অনুমতি দেয়, তার একটা স্পষ্ট সীমা। এটা একটা কাহিনির ভেতরে একজন অস্বীকারকারীর পরিণতির বর্ণনা দেয়, আজকের কোনো সম্প্রদায় বা কোনো জীবিত মানুষের নাম এতে নেই; এটা কাউকে কোনো প্রতিবেশী, প্রতিদ্বন্দ্বী বা কোনো গোষ্ঠীর দিকে তাকিয়ে তাদের পরিণতি জানার দাবি করার অধিকার দেয় না। এই দৃশ্য মুমিনকে তার রবের পক্ষ থেকে দেওয়া হয়েছিল, তিনি চাওয়ার পর, তার নিজের হিসাবের জন্য, কোনো পাঠকের হাতে অন্যের বিচারের রায় হিসেবে তুলে দেওয়ার জন্য নয়।"
          }
        ]
      }
    ]
  },
  "37:63": {
    "sections": [
      {
        "h": {
          "en": "A Pronoun That Points Back",
          "bn": "যে শব্দটি পেছনে ফেরে"
        },
        "p": [
          {
            "en": "Innā jaʿalnāhā fitnatan lil-ẓālimīn: four words, and the first content word after innā is a pronoun with no antecedent of its own — hā, it. At-Tabari supplies the antecedent before anything else: these are the mushrikīn who said what they said about the claim just before, meaning the tree named in 37:62, the tree of zaqqūm set opposite Paradise as the losing accommodation. Al-Qurtubi agrees, glossing lil-ẓālimīn as al-mushrikīn, the very same people. Jaʿalnā, We made, is not a passive discovery. The Qur'an states that Allah deliberately built a function into this tree beyond growing and feeding people in the Fire — a function this verse names.",
            "bn": "ইন্না জাআলনাহা ফিতনাতান লিয্‌যোয়ালিমীন: চারটি শব্দ, আর ইন্নার পরের প্রথম শব্দটিই একটি সর্বনাম, যার নিজের কোনো পূর্বপদ নেই — হা, অর্থাৎ তা। তাবারী প্রথমেই এই সর্বনামের পূর্বপদ বুঝিয়ে দেন: এরা সেই মুশরিক যারা আগের আয়াতের দাবি নিয়ে যা বলার বলেছিল, অর্থাৎ ৩৭:৬২-এ উল্লেখিত সেই গাছ, জাক্কুম গাছ, যা জান্নাতের বিপরীতে রাখা হয়েছে হারা-আপ্যায়ন হিসেবে। কুরতুবীও একমত, লিয্‌যোয়ালিমীন বলতে তিনিও মুশরিকদেরই বোঝান। জাআলনা, অর্থাৎ আমি বানিয়েছি, এখানে নিষ্ক্রিয়ভাবে কিছু আবিষ্কার করা নয়। কুরআন স্পষ্ট বলছে, জাহান্নামের অধিবাসীদের খাওয়ানো-বড় করার বাইরেও আল্লাহ ইচ্ছা করেই এই গাছের মধ্যে আরেকটি কাজ বসিয়ে দিয়েছেন, যে কাজের নামই এই আয়াতে এসেছে।"
          },
          {
            "en": "Four words carry the entire verdict: innā, We — truly; jaʿalnāhā, made it; fitnatan, a trial; lil-ẓālimīn, for the wrongdoers. Nothing here describes the tree itself — its root in the Fire's depths, its fruit like devils' heads, its bitter taste, all wait a few verses further on, and this article leaves them there. This verse answers a different question first: why mention anything this strange at all? Because, the sentence insists, the strangeness itself was built to do something specific. The rest of what the commentators say is an attempt to name that something, and they do not all name it the same way.",
            "bn": "চারটি শব্দই পুরো রায়টা বহন করছে: ইন্না, অর্থাৎ নিশ্চয়ই আমি; জাআলনাহা, একে বানিয়েছি; ফিতনাতান, একটা পরীক্ষা হিসেবে; লিয্‌যোয়ালিমীন, যালিমদের জন্য। গাছটা নিজে কেমন, জাহান্নামের তলদেশ থেকে তার শিকড়, শয়তানের মাথার মতো তার ফল, তার তেতো স্বাদ, এসব এখনো আসেনি, আসবে পরের কয়েক আয়াতে, আর এই লেখা সেগুলো সেখানেই রেখে দিচ্ছে। এই আয়াত আগে অন্য একটা প্রশ্নের জবাব দেয়: এত অদ্ভুত একটা জিনিসের কথা তোলা হলো কেন? কারণ আয়াতটি বলছে, অদ্ভুততাটাই নির্দিষ্ট একটা কাজ করার জন্য বানানো হয়েছে। এর পরের আলোচনা তাফসীরকারদের সেই কাজটা চেনানোর চেষ্টা, আর সবাই একইভাবে তা চেনান না।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Own Objection",
          "bn": "তাদের নিজেদের আপত্তি"
        },
        "p": [
          {
            "en": "Three tafsirs recover the actual sentence the Makkans used to dismiss this tree, in close to the same wording. Al-Qurtubi: kayfa takūnu fī an-nāri shajaratun wa hiya taḥriqu ash-shajar — how can there be a tree in the Fire, when fire burns up trees? Al-Baghawi and al-Muyassar record the same objection. It is not a philosophical argument; it is an appeal to everyday experience. Everyone has watched fire consume wood, so a tree inside the ultimate fire struck them as self-evidently impossible — a claim their own senses seemed to refute before they had weighed anything else about who was making it.",
            "bn": "মক্কাবাসীরা এই গাছকে উড়িয়ে দিতে ঠিক যে বাক্যটা ব্যবহার করেছিল, তা তিনটি তাফসীরেই প্রায় একই ভাষায় পাওয়া যায়। কুরতুবী লেখেন তাদের কথা: আগুনের ভেতরে গাছ হয় কী করে, যেখানে আগুন তো গাছ পুড়িয়েই ফেলে? বাগাভী আর মুয়াসসারেও একই আপত্তি লেখা আছে। এটা কোনো দার্শনিক যুক্তি নয়, বরং রোজকার অভিজ্ঞতার দোহাই। সবাই দেখেছে আগুন কাঠ পুড়িয়ে দেয়, তাই চরম আগুনের ভেতরে একটা গাছ তাদের কাছে স্পষ্টতই অসম্ভব মনে হলো। কে এই কথা বলছেন, তা বিবেচনা করার আগেই তাদের নিজেদের অভিজ্ঞতা যেন দাবিটা খারিজ করে দিল।"
          },
          {
            "en": "Allah's reply comes the very next verse, 37:64: innahā shajaratun takhruju fī aṣli al-jaḥīm, it is a tree that issues from the bottom of Hellfire itself. Ibn Kathir explains the sense: the tree is nourished by the Fire and created from it, not planted in it the way an ordinary tree is planted in ordinary soil and then must survive what burns around it. The Makkans' objection assumed a tree of the ordinary kind, grown the way trees are grown on earth. The answer describes a different kind of tree altogether, left for its own verses at 37:64 and 37:65.",
            "bn": "আল্লাহর জবাব আসে একদম পরের আয়াতেই, ৩৭:৬৪-এ: নিশ্চয়ই এটা এমন এক গাছ যা জাহান্নামের তলদেশ থেকে বের হয়। ইবনে কাসীর বুঝিয়ে দেন, গাছটা আগুন থেকেই পুষ্টি পায়, আগুন থেকেই তৈরি, সাধারণ গাছের মতো মাটিতে পোঁতা নয় যাকে পরে চারপাশের আগুনের সঙ্গে টিকে থাকতে হয়। মক্কাবাসীদের আপত্তিটা ধরে নিয়েছিল একরকম গাছ, যেমনটা দুনিয়ায় মাটিতে জন্মায়। জবাবে বর্ণনা করা হলো সম্পূর্ণ ভিন্ন ধরনের এক গাছ, যার বিস্তারিত এই লেখা ৩৭:৬৪ ও ৩৭:৬৫ আয়াতের নিজস্ব আলোচনার জন্য রেখে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dates, Butter, and a Mocking Meal",
          "bn": "খেজুর, মাখন আর একটি ঠাট্টার খাবার"
        },
        "p": [
          {
            "en": "Mujāhid, as Ibn Kathir records him, ties the verse to a specific scene. Abū Jahl heard that zaqqūm would be a tree in the Fire and announced, innamā az-zaqqūmu at-tamru wa'z-zubd, atazaqqamuhu — zaqqūm is only dates and butter, I eat it all the time. Al-Baghawi names who handed him the line: Ibn al-Zibaʿrā told the chiefs of Quraysh that zaqqūm was a Berber word for dates creamed with butter. Abū Jahl called for his serving-girl and said, yā jāriyah, zaqqimīnā — bring us zaqqūm — and when she brought dates and butter he told his circle, tazaqqamū, this is what Muḥammad threatens you with.",
            "bn": "ইবনে কাসীরের বরাতে মুজাহিদ এই আয়াতকে একটা নির্দিষ্ট ঘটনার সঙ্গে জুড়ে দেন। আবু জাহল শুনেছিল জাক্কুম নাকি জাহান্নামের একটা গাছ, তখন সে বলে উঠল, জাক্কুম তো শুধু খেজুর আর মাখন, এটা আমি রোজই খাই। বাগাভী বলে দেন কে তাকে এই কথা শিখিয়েছিল: ইবনে যিবাআরা কুরাইশের সর্দারদের বলেছিল, বারবার ভাষায় জাক্কুম মানে মাখন মাখানো খেজুর। তখন আবু জাহল তার দাসীকে ডেকে বলল, আমাদের জন্য জাক্কুম নিয়ে এসো। সে খেজুর আর মাখন এনে দিলে আবু জাহল তার লোকদের বলল, খাও, এটাই সেই জিনিস যা দিয়ে মুহাম্মদ তোমাদের ভয় দেখাচ্ছে।"
          },
          {
            "en": "Ma'arif al-Qur'an records the same episode through a different chain, crediting it to ad-Durr al-Manthur. The joke only worked because it refused to engage with what had actually been said. No one had claimed zaqqūm was an edible plant growing on ordinary earth; the claim was a tree native to the Fire, described two verses later as bitter and repellent to the eye. Turning the claim into a pun about a familiar snack was easier than testing whether the report itself could be true.",
            "bn": "মাআরিফুল কুরআনেও একই ঘটনা আরেকটি সূত্রে পাওয়া যায়, যার কৃতিত্ব দেওয়া হয়েছে দুররুল মানসূরকে। ঠাট্টাটা তখনই খাটে, যখন আসল কথাটা নিয়ে ভাবা হয় না। কেউ তো বলেনি জাক্কুম দুনিয়ার মাটিতে জন্মানো কোনো খাওয়ার জিনিস। দাবিটা ছিল, এটা জাহান্নামেরই একটা গাছ, যার বর্ণনা দুই আয়াত পরে আসে তেতো আর দেখতে কুৎসিত হিসেবে। পরিচিত একটা খাবার নিয়ে রসিকতা করা সহজ ছিল, খবরটা সত্যি কিনা তা যাচাই করার চেয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Trial, in One Sense",
          "bn": "এক অর্থে এটি একটি পরীক্ষা"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives fitnah two meanings here and keeps both open rather than choosing between them. The first is al-ikhtibār, a test. Qatādah, as Ibn Kathir cites him, frames the verse exactly this way: the tree was mentioned as a trial for the misguided, who said their companion — meaning the Prophet ﷺ — claims a tree grows in the Fire when fire eats trees. On this reading, the test is not whether the hearer can picture the tree in full. It is whether the hearer will credit a report delivered by Allah's messenger that sounds hard to credit, or reach for ridicule instead of weighing it.",
            "bn": "কুরতুবী এখানে ফিতনাহ শব্দের দুটি অর্থ দেন, আর দুটিকেই খোলা রাখেন, কোনোটাকে বেছে নেন না। প্রথম অর্থ হলো আল-ইখতিবার, অর্থাৎ পরীক্ষা। ইবনে কাসীরের বরাতে কাতাদাহ আয়াতটা ঠিক এভাবেই বোঝান: বিপথগামীদের জন্য একটা পরীক্ষা হিসেবেই এই গাছের কথা বলা হয়েছিল, যারা বলেছিল তাদের সঙ্গী, অর্থাৎ নবী ﷺ, দাবি করছেন জাহান্নামে একটা গাছ জন্মায় অথচ আগুন তো গাছ খেয়ে ফেলে। এই পাঠ অনুযায়ী পরীক্ষাটা এই নয় যে শ্রোতা গাছটা পুরোপুরি কল্পনা করতে পারে কিনা। পরীক্ষাটা হলো, আল্লাহর রাসূলের দেওয়া একটা কঠিন-শোনা খবরকে সে বিশ্বাস করবে, নাকি যাচাই না করেই তা নিয়ে ঠাট্টা করবে।"
          },
          {
            "en": "Qurtubi draws the same word from a nearby surah: wa mā jaʿalnā ʿiddatahum illā fitnatan lilladhīna kafarū, We made not their number but a trial for the disbelievers, 74:31, speaking of the nineteen guardians of the Fire. Ibn Kathir adds a third instance: wa mā jaʿalnā ar-ruʾyā allatī araynāka illā fitnatan lin-nās, the vision shown to the Prophet ﷺ was likewise made a trial for people, 17:60. The pattern repeats across these three verses: an unseen report is offered, and people are sorted by how they receive it, not by how well they could have predicted it in advance.",
            "bn": "কুরতুবী একই শব্দ কাছাকাছি আরেকটা সূরা থেকেও টেনে আনেন: আমি তাদের সংখ্যাকে কাফিরদের জন্য একটা পরীক্ষা ছাড়া আর কিছু বানাইনি, ৭৪:৩১, যেখানে কথা হচ্ছে জাহান্নামের উনিশজন প্রহরী নিয়ে। ইবনে কাসীর তৃতীয় একটা দৃষ্টান্ত যোগ করেন: আমি নবীকে ﷺ যে স্বপ্ন দেখিয়েছিলাম তাকেও মানুষের জন্য একটা পরীক্ষা ছাড়া কিছু বানাইনি, ১৭:৬০। এই তিনটি আয়াতেই একই ছক দেখা যায়: অদেখা একটা খবর দেওয়া হয়, আর মানুষ ভাগ হয়ে যায় সেটা কীভাবে গ্রহণ করল তা দিয়ে, আগে থেকে সেটা কতটা অনুমান করতে পারত তা দিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Or a Penalty, in Another",
          "bn": "অথবা অন্য অর্থে একটি শাস্তি"
        },
        "p": [
          {
            "en": "Al-Qurtubi's second sense is al-ʿuqūbah, punishment: wa qīla innahā fitnatun ay ʿuqūbatun lil-ẓālimīn, kamā qāla dhūqū fitnatakum — as in 51:14, taste your trial, addressed to people already burning, where fitnah plainly names the penalty itself rather than a test still in progress. As-Sa'di and al-Muyassar lean this way without using the word ʿuqūbah: both gloss lil-ẓālimīn as those who wronged themselves, anfusahum, through disbelief and sins. On their reading the tree is less a riddle placed before the wrongdoers and more a consequence already attached to the choice they had made before they ever heard of it.",
            "bn": "কুরতুবীর দ্বিতীয় অর্থ হলো আল-উকুবাহ, অর্থাৎ শাস্তি: বলা হয়েছে এটা একটা ফিতনাহ, অর্থাৎ যালিমদের জন্য একটা শাস্তি, যেমন ৫১:১৪-এ বলা হয়েছে, তোমাদের ফিতনাহ আস্বাদন করো, যা বলা হচ্ছে তাদের যারা ইতিমধ্যে জ্বলছে, যেখানে ফিতনাহ মানেই স্পষ্ট শাস্তি, এখনো চলমান কোনো পরীক্ষা নয়। আস-সাদী আর মুয়াসসারও এই দিকেই ঝোঁকেন, যদিও তারা উকুবাহ শব্দটা ব্যবহার করেন না। দুজনেই লিয্‌যোয়ালিমীন বলতে বোঝান যারা কুফর আর গুনাহ দিয়ে নিজেদেরই ক্ষতি করেছে। তাদের পাঠে গাছটা যালিমদের সামনে রাখা কোনো ধাঁধা নয়, বরং এমন একটা পরিণতি যা তারা গাছের কথা শোনার অনেক আগেই নিজেদের পছন্দ দিয়ে ডেকে এনেছিল।"
          },
          {
            "en": "Neither sense cancels the other, and al-Qurtubi offers both without ranking one above it. A report can test the living by how they receive it and still describe a punishment waiting for those who fail that test; the trial and the penalty are two faces of the same tree, read from two sides of death. Read together, the two meanings say something a single meaning could not: mockery in this life and suffering in the next are not two separate events, only two moments of the one fitnah.",
            "bn": "কোনো একটা অর্থ অন্যটাকে বাতিল করে না, আর কুরতুবী দুটিকেই পেশ করেন, একটাকে অন্যটার উপরে না রেখে। একটা খবর জীবিতদের পরীক্ষা করতে পারে, সেই পরীক্ষায় তারা কীভাবে সাড়া দিল তা দিয়ে, আবার সেই একই খবর বর্ণনা করতে পারে এক শাস্তি, যা অপেক্ষা করছে পরীক্ষায় ব্যর্থ হওয়াদের জন্য। পরীক্ষা আর শাস্তি একই গাছের দুটি দিক, মৃত্যুর দুই পাশ থেকে দেখা। দুটি অর্থ একসঙ্গে পড়লে এমন একটা কথা বেরিয়ে আসে, যা একটামাত্র অর্থে বলা যেত না: এই দুনিয়ার ঠাট্টা আর পরকালের শাস্তি দুটি আলাদা ঘটনা নয়, একই ফিতনাহ-র দুটি মুহূর্ত মাত্র।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Old Ignorance",
          "bn": "সেই একই পুরনো অজ্ঞতা"
        },
        "p": [
          {
            "en": "Al-Qurtubi names the Makkans' objection jahl, ignorance, and points to its twin elsewhere in the Qur'an. He recalls their scoffing at 74:30's ʿalayhā tisʿata ʿashar, over it are nineteen — the number of Hellfire's guardians, which some of them mocked as though nineteen men could easily be overpowered, the same istikhfāf, the same light-minded dismissal, aimed at a different number. Both objections share one error: treating a detail reason cannot picture in advance as a detail reason has thereby disproven. It is not, Qurtubi insists, impossible lil-ʿaql, for the intellect, that Allah create within the Fire a kind of tree that fire does not consume.",
            "bn": "কুরতুবী মক্কাবাসীদের এই আপত্তিকে জাহল, অর্থাৎ অজ্ঞতা বলে চিহ্নিত করেন, আর কুরআনের অন্য জায়গায় এর যমজ একটা ঘটনার কথা মনে করিয়ে দেন। ৭৪:৩০-এ বলা উনিশজন প্রহরীর সংখ্যা নিয়ে তাদের ঠাট্টার কথা তিনি স্মরণ করান, যেখানে কেউ কেউ বলেছিল উনিশজনকে তো সহজেই কাবু করা যায়; একই হালকা মনোভাব, শুধু ভিন্ন একটা সংখ্যার দিকে তাক করা। দুটি আপত্তিই একই ভুল করে: আগে থেকে যা কল্পনা করা যায় না, তাকেই ভেবে নেয় যা প্রমাণিত মিথ্যা। কুরতুবী জোর দিয়ে বলেন, বুদ্ধির বিচারে এটা অসম্ভব নয় যে আল্লাহ আগুনের ভেতরে এমন এক গাছ বানাবেন, যাকে আগুন গ্রাস করে না।"
          },
          {
            "en": "Qurtubi names the proof already sitting inside the same Fire: just as Allah creates there the chains, the shackles, the snakes and the scorpions that guard it, He can create a kind of tree that grows from fire rather than being destroyed by it. Fire consuming ordinary wood on earth tells a person nothing about what an extraordinary Maker can sustain inside an extraordinary fire of His own making. The mistake, on this reading, was never a failure of logic. It was mistaking the edge of their own imagination for the edge of Allah's power, then dressing that mistake up as common sense.",
            "bn": "কুরতুবী সেই আগুনের ভেতরেই থাকা প্রমাণের কথা বলেন: যেমন আল্লাহ সেখানে শিকল, বেড়ি, সাপ আর বিচ্ছু বানিয়েছেন প্রহরা দেওয়ার জন্য, তেমনি তিনি এমন এক গাছও বানাতে পারেন যা আগুন থেকেই জন্মায়, আগুনে ধ্বংস হয় না। দুনিয়ার সাধারণ কাঠ আগুনে পুড়ে যায় দেখে কারো বোঝার কথা নয় যে এক অসাধারণ স্রষ্টা তাঁর নিজের বানানো অসাধারণ আগুনের ভেতরে কী টিকিয়ে রাখতে পারেন। এই পাঠ অনুযায়ী ভুলটা কখনো যুক্তির ঘাটতি ছিল না। ভুলটা ছিল নিজেদের কল্পনার সীমাকেই আল্লাহর ক্ষমতার সীমা বানিয়ে ফেলা, তারপর সেই ভুলকেই সাধারণ জ্ঞান বলে সাজিয়ে পেশ করা।"
          }
        ]
      },
      {
        "h": {
          "en": "An Argument Still Being Made",
          "bn": "যে তর্ক আজও চলছে"
        },
        "p": [
          {
            "en": "Al-Qurtubi adds a further observation, without naming anyone in particular: the same istibʿād, the same deeming-improbable that overtook the earlier disbelievers, has recurred in people who reinterpret Paradise, the Fire, the Scale, the Bridge and the Pen into meanings they invent for themselves, rather than what Muslims have always understood from revelation. His point is not about any one group or century. It is about a recurring habit — treating an unseen report as negotiable the moment it sounds strange, instead of weighing the report on the strength and honesty of the one who delivered it.",
            "bn": "কুরতুবী আরও একটা পর্যবেক্ষণ যোগ করেন, কাউকে নির্দিষ্ট করে না বলেই: আগের দিনের অস্বীকারকারীদের যে একই অসম্ভব-ভাবার প্রবণতা ছিল, তা ফিরে আসে এমন মানুষদের মধ্যেও যারা জান্নাত, জাহান্নাম, মিযান, পুল-সিরাত আর কলমকে নিজেদের বানানো অর্থে বদলে ফেলে, অথচ মুসলিমরা চিরকাল যা বুঝে এসেছে তা থেকে সরে যায়। কথাটা কোনো নির্দিষ্ট দল বা সময়ের নয়। এটা একটা পুরনো অভ্যাসের কথা, যেখানে অদেখা একটা খবর অদ্ভুত শোনামাত্রই তা নিয়ে দর-কষাকষি শুরু হয়ে যায়, অথচ খবরটা কে দিয়েছেন তার সততা আর শক্তি বিবেচনা করা হয় না।"
          },
          {
            "en": "A true report, Qurtubi argues, is owed belief even where reason finds it hard to picture, unless the Muslims are agreed that a given wording cannot be read at face value — and here there is no such agreement. The tree of zaqqūm was never offered to its first hearers, or to anyone since, as a riddle to be solved by imagination alone before it could be believed. It was offered as news from the One who made the Fire in the first place, about what He had made to grow inside it.",
            "bn": "কুরতুবী বলেন, একটা সত্য খবরকে বিশ্বাস করা কর্তব্য, যদিও বুদ্ধি দিয়ে তা কল্পনা করা কঠিন হয়, যতক্ষণ না মুসলিমরা একমত হন যে নির্দিষ্ট কোনো শব্দকে আক্ষরিক অর্থে নেওয়া যায় না। আর এখানে এমন কোনো ঐকমত্য নেই। জাক্কুম গাছকে কখনোই এভাবে পেশ করা হয়নি যে বিশ্বাস করার আগে একে শুধু কল্পনা দিয়ে বুঝে নিতে হবে, তা প্রথম শ্রোতাদের কাছেও নয়, আজও নয়। এটা পেশ করা হয়েছিল এমন এক খবর হিসেবে, যা এসেছে স্বয়ং তাঁর কাছ থেকে যিনি আগুনটাই বানিয়েছেন, আর তার ভেতরে কী গজাবেন তাও তিনিই ঠিক করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Word Names",
          "bn": "শব্দটি কাদের বোঝায়"
        },
        "p": [
          {
            "en": "Lil-ẓālimīn, for the wrongdoers: at-Tabari glosses it as li-hāʾulāʾi al-mushrikīn, these very polytheists who said what they said; al-Baghawi has al-kāfirīn, the disbelievers. The reference is specific, not a general category left open for later use. It names the Makkans who heard of zaqqūm and turned it into Abū Jahl's joke about dates and butter — people, a place, a moment of mockery the tafsirs can point to directly. As-Sa'di's anfusahum, themselves, sharpens this further: the wrong this verse describes was done first to the wrongdoers' own standing before Allah, by their own disbelief and sin, before it touched anyone else.",
            "bn": "লিয্‌যোয়ালিমীন, অর্থাৎ যালিমদের জন্য: তাবারী এর ব্যাখ্যা দেন এই মুশরিকদের বলে, যারা যা বলার বলেছিল; বাগাভী বলেন কাফির। এটা কোনো সাধারণ শ্রেণি নয়, যা পরে ব্যবহারের জন্য খোলা রাখা হয়েছে। এটা নির্দিষ্টভাবে সেই মক্কাবাসীদের বোঝায় যারা জাক্কুমের কথা শুনে একে আবু জাহলের খেজুর-মাখনের ঠাট্টায় পরিণত করেছিল, যাদের নাম, যাদের মুহূর্ত তাফসীরকারেরা সরাসরি দেখিয়ে দিতে পারেন। আস-সাদীর অনফুসাহুম, অর্থাৎ নিজেদেরই, কথাটা আরও স্পষ্ট করে দেয়: এই আয়াতে বর্ণিত অন্যায়টা প্রথমে আঘাত করেছে যালিমদের নিজেদের আল্লাহর কাছে অবস্থানকেই, তাদের নিজেদের কুফর আর গুনাহ দিয়ে, অন্য কারো উপর পড়ার আগেই।"
          },
          {
            "en": "Nothing in this verse licenses suspicion of any community or any person living now. It describes what a particular group of people said and did about one report, at one moment, and names what that choice cost them. Reading it as a charge against anyone else — a people, a faith, a neighbour — repeats exactly the error the verse itself records: taking a specific report and stretching it past what it actually said.",
            "bn": "এই আয়াত এখন জীবিত কোনো সম্প্রদায় বা মানুষের প্রতি সন্দেহের কোনো অনুমতি দেয় না। এটা বর্ণনা করে একটা নির্দিষ্ট দল একটা নির্দিষ্ট খবর নিয়ে কী বলেছিল, কী করেছিল, এক বিশেষ মুহূর্তে, আর সেই সিদ্ধান্তের মূল্য কী হয়েছিল। একে অন্য কারো বিরুদ্ধে, কোনো সম্প্রদায়, কোনো ধর্ম বা কোনো প্রতিবেশীর বিরুদ্ধে অভিযোগ হিসেবে পড়া আসলে সেই একই ভুলের পুনরাবৃত্তি, যা এই আয়াতেই লেখা আছে: একটা নির্দিষ্ট খবরকে তার আসল কথার চেয়ে অনেক দূর টেনে নেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Trial Continues",
          "bn": "পরীক্ষাটা এখনও চলছে"
        },
        "p": [
          {
            "en": "No hadith collection attaches a sound narration specifically to this verse. The scene with Abū Jahl comes from the tafsirs' own historical reports, carried through Mujāhid and al-Baghawi rather than through a hadith with its own chain, and this article has kept the two apart rather than lending one collection's authority to the other's material. What the verse rests on is plain enough without a hadith behind it: a report was given, a reaction followed, and this verse names what that reaction revealed. Fitnah did its work in Makkah before anyone there had died to meet the tree in person.",
            "bn": "এই আয়াতের সঙ্গে নির্দিষ্টভাবে কোনো সহীহ হাদীস জোড়া নেই। আবু জাহলের ঘটনাটি এসেছে তাফসীরকারদের নিজস্ব ঐতিহাসিক বর্ণনা থেকে, মুজাহিদ আর বাগাভীর সূত্রে, নিজস্ব সনদওয়ালা কোনো হাদীস থেকে নয়। তাই এই লেখা দুটিকে আলাদাই রেখেছে, একটার নির্ভরযোগ্যতা অন্যটার উপর চাপায়নি। হাদীস ছাড়াই আয়াতটা যথেষ্ট স্পষ্ট: একটা খবর দেওয়া হলো, একটা প্রতিক্রিয়া এলো, আর এই আয়াত সেই প্রতিক্রিয়ার আসল রূপটা নাম দিয়ে দিল। মক্কায় কেউ মরে গাছটার সঙ্গে স্বচক্ষে দেখা করার আগেই ফিতনাহ তার কাজ সেরে ফেলেছিল।"
          },
          {
            "en": "The same four words still describe a pattern very much alive. A report from revelation arrives, carrying some detail reason cannot fully picture, and two responses sit open long before that detail can be verified either way: investigate what sounds strange, weighing who delivered it, or dismiss it with a joke and call the joke an answer. Abū Jahl chose the second, and the tafsirs preserved his choice as a warning, never as a model worth repeating. The tree of zaqqūm asked him which kind of listener he would be. The same four words still ask everyone who hears them now.",
            "bn": "চারটি শব্দ আজও একটা জীবন্ত ছক বর্ণনা করছে। ওহী থেকে একটা খবর আসে, তাতে এমন কিছু খুঁটিনাটি থাকে যা বুদ্ধি দিয়ে পুরোপুরি কল্পনা করা যায় না, আর সেই খুঁটিনাটি যাচাই হওয়ার আগেই দুটি পথ খোলা থাকে: অদ্ভুত শোনা জিনিসটা যাচাই করা, কে দিয়েছেন তা বিবেচনা করে, নাকি তা নিয়ে ঠাট্টা করে সেই ঠাট্টাকেই জবাব বানিয়ে ফেলা। আবু জাহল দ্বিতীয় পথটা বেছে নিয়েছিল, আর তাফসীরকারেরা তার এই সিদ্ধান্ত সংরক্ষণ করেছেন সতর্কতা হিসেবে, অনুসরণযোগ্য কোনো আদর্শ হিসেবে নয়। জাক্কুম গাছ তাকে প্রশ্ন করেছিল, সে কোন ধরনের শ্রোতা হবে। চারটি শব্দ আজও একই প্রশ্ন করে যে এটা শোনে তাকেই।"
          }
        ]
      }
    ]
  },
  "37:68": {
    "sections": [
      {
        "h": {
          "en": "A Return Named Three Ways",
          "bn": "ফেরাকে তিন নামে ডাকা"
        },
        "p": [
          {
            "en": "Thumma inna marji'ahum la-ila al-jahim: then indeed, their return will be to the Hellfire. Marji' comes from raja'a, to go back, and as-Sa'di does not gloss the word with one synonym but three: ma'aluhum, their outcome; muqarruhum, their settled place; and ma'wahum, their shelter. Three words for the single noun the verse uses, each pressing the same direction from a different angle — not a visit, not a stop along a road, but where they are finally set down. Classical lexicons note that raja'a itself implies a prior departure, so marji' names not a destination reached for the first time but a place one is driven back to.",
            "bn": "ছুম্মা ইন্না মারজিয়াহুম লা-ইলাল জাহিম: অতঃপর তাদের প্রত্যাবর্তন জাহান্নামের দিকেই। মারজি' শব্দটি এসেছে রাজা'আ থেকে, অর্থ ফিরে যাওয়া। আস-সাদী এই একটি শব্দের অর্থ করতে একটিমাত্র প্রতিশব্দে থামেননি, দিয়েছেন তিন প্রতিশব্দ: মাআলুহুম, তাদের পরিণতি; মুকাররুহুম, তাদের স্থির ঠিকানা; আর মাওয়াহুম, তাদের আশ্রয়। একটি শব্দের জন্য তিনটি শব্দ, প্রতিটিই একই দিক ভিন্ন কোণ থেকে চেপে ধরে। এ কোনো সফর নয়, পথের মাঝের কোনো থামাও নয়; এটাই সেই জায়গা, যেখানে তাদের চূড়ান্তভাবে রেখে দেওয়া হবে। ক্লাসিক্যাল অভিধানগুলো বলে, রাজা'আ শব্দটার মধ্যেই আগে কোথাও থেকে সরে যাওয়ার ভাবটা লুকানো থাকে। তাই মারজি' মানে প্রথমবার পৌঁছানো কোনো গন্তব্য নয়, বরং যেখান থেকে একবার সরে গিয়েছিল সেখানেই আবার ফিরিয়ে আনা।"
          },
          {
            "en": "As-Sa'di then supplies the purpose the bare sentence leaves unsaid: they are sent back li-yadhuqu min 'adhabihi ash-shadid, wa harrihi al-'azim, to taste its severe punishment and its tremendous heat, a wretchedness with no increase left to add. The scene had already named Jahim once, in 37:64, as the ground the zaqqum tree grows from. Here the same word closes the circle. Between those two mentions sit the tree eaten in 37:66 and the scalding mixture drunk in 37:67; whatever changed across those three intervening verses, the destination named at the start is the destination named at the end.",
            "bn": "এরপর আস-সাদী জুড়ে দেন সেই উদ্দেশ্যটুকু, যা খালি বাক্যে বলা হয়নি: তাদের ফিরিয়ে দেওয়া হয় লি-ইয়াযূকূ মিন আযাবিহিশ শাদীদ, ওয়া হাররিহিল আযীম, যেন তারা তার কঠোর শাস্তি আর ভয়াবহ উত্তাপের স্বাদ পায়, এমন দুর্দশা যার ওপর আর কিছু যোগ করার বাকি নেই। এই দৃশ্যে জাহিম নামটা আগেও এসেছে, ৩৭:৬৪ আয়াতে, জাক্কুম গাছের শিকড় যেখান থেকে বেরোয় সেই মাটি হিসেবে। এখানে একই শব্দ এসে বৃত্তটা বন্ধ করে দেয়। এই দুই উল্লেখের মাঝে আছে ৩৭:৬৬ আয়াতে খাওয়া গাছ, আর ৩৭:৬৭ আয়াতে পান করা ফুটন্ত মিশ্রণ; মাঝের এই তিনটি আয়াতে যা-ই বদলে থাকুক, শুরুতে বলা গন্তব্য আর শেষে বলা গন্তব্য একই।"
          }
        ]
      },
      {
        "h": {
          "en": "Does Then Mean Then",
          "bn": "অতঃপর কি সত্যিই পরে"
        },
        "p": [
          {
            "en": "After the scalding mixture named in 37:67, the next sentence opens with thumma, then. Does that word mark a fresh stage, as though first the tree, then the drink, and only after that the return to the Fire — or does it simply add one more description to a scene already finished? Al-Qurtubi records a grammarian's answer to exactly this question. Abu 'Ubaydah said that thumma here may simply carry the sense of wa, rather than a strict marker of succession. How thumma is read here shapes every later question about sequence and location raised about this verse.",
            "bn": "৩৭:৬৭ আয়াতে বলা ফুটন্ত মিশ্রণের পর, পরের বাক্যটা শুরু হয় ছুম্মা শব্দ দিয়ে, অর্থাৎ অতঃপর। এই শব্দ কি নতুন একটা ধাপ বোঝায়, যেন প্রথমে গাছ, তারপর পানীয়, আর সবশেষে আগুনে ফেরা, নাকি এটা আগে থেকেই শেষ হওয়া দৃশ্যের সঙ্গে কেবল আরেকটা বর্ণনা জুড়ে দেয়? কুরতুবী ঠিক এই প্রশ্নের একটা ব্যাকরণগত জবাব তুলে ধরেন। আবু উবাইদা বলেন, এখানে ছুম্মা শব্দটা নিছক ওয়া অর্থেও ব্যবহৃত হতে পারে, ধারাবাহিকতার কঠোর নির্দেশক না হয়েও। ছুম্মা শব্দটাকে এখানে কীভাবে পড়া হচ্ছে, তার ওপরেই নির্ভর করে এই আয়াত নিয়ে পরে ওঠা ক্রম আর অবস্থানের প্রতিটা প্রশ্ন।"
          },
          {
            "en": "The difference is not decorative. Read as strict sequence, the verse describes an order of events: tree, then drink, then a return that implies a prior remove from the Fire. Read as plain wa, it adds the Fire itself to the list of torments already named, without claiming the eating and drinking happened anywhere but inside it. Al-Qurtubi records the grammatical possibility and moves straight to the next question it opens, without forcing a choice between the two readings himself. Either reading keeps the wrongdoers inside the Fire's larger story; what changes is only whether one more leg of the journey is being added to it.",
            "bn": "এই পার্থক্যটা কেবল শব্দের খেলা নয়। কঠোর ধারাবাহিকতা ধরলে আয়াতটা একটা ক্রম বর্ণনা করে: গাছ, তারপর পানীয়, তারপর এমন একটা প্রত্যাবর্তন যা বোঝায় আগে তারা আগুন থেকে সরে ছিল। ওয়া অর্থে ধরলে, এটা আগেই বলা শাস্তিগুলোর তালিকায় আগুনকেও যোগ করে, না বলেই যে খাওয়া-পান করাটা আগুনের বাইরে কোথাও ঘটেছিল। কুরতুবী এই ব্যাকরণগত সম্ভাবনাটা তুলে ধরেই পরের প্রশ্নে চলে যান, নিজে এই দুই পাঠের মধ্যে কোনো একটা পক্ষ না নিয়ে। যে পাঠই নেওয়া হোক, যালিমরা আগুনের বড় কাহিনির ভেতরেই থেকে যায়; পার্থক্য কেবল এটুকু, সেই যাত্রায় আরেকটা ধাপ যোগ হচ্ছে কিনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Outside the Fire, or Its Edge",
          "bn": "আগুনের বাইরে, নাকি তার কিনারায়"
        },
        "p": [
          {
            "en": "Al-Qurtubi raises the question the wording invites: qila, it is said, that this indicates they were, at the time they ate the zaqqum, in a torment other than the Fire, and are only now returned to it. If their return is to the Hellfire, the reasoning runs, then whatever came just before — the tree, the scalding mixture — must have happened somewhere else first. Al-Qurtubi introduces the point without naming who first said it, simply marking it qila, a phrase he reserves for a circulating view rather than one voice he can credit.",
            "bn": "কুরতুবী এই শব্দচয়নের ভেতরে লুকানো প্রশ্নটা তুলে আনেন: কীলা, অর্থাৎ 'বলা হয়', যে এটা বোঝায়, জাক্কুম খাওয়ার সময় তারা আগুন ছাড়া অন্য কোনো শাস্তির মধ্যে ছিল, আর এখন কেবল তাদের আগুনে ফিরিয়ে দেওয়া হচ্ছে। তাদের প্রত্যাবর্তন যদি জাহান্নামের দিকেই হয়, তাহলে যুক্তিটা এমন যে, ঠিক তার আগে যা ঘটেছে, অর্থাৎ গাছ আর ফুটন্ত মিশ্রণ, তা নিশ্চয়ই প্রথমে অন্য কোথাও ঘটেছিল। কুরতুবী এই বক্তব্যটা কারও নাম না জুড়েই তুলে ধরেন, শুধু কীলা বলে চিহ্নিত করেন। এই শব্দ তিনি রাখেন এমন মতের জন্য, যা ছড়িয়ে আছে, কিন্তু কোনো একজনের নামে নির্দিষ্ট করে দেওয়া যায় না।"
          },
          {
            "en": "Maqatil is named for the specific version of that reasoning. He said the scalding water, al-hamim, is outside Jahannam itself: the people of the Fire are brought out to it to drink, then sent back in. Al-Qurtubi ties the claim to two verses of Surat ar-Rahman read together — 55:43, this is Hellfire, which the criminals used to deny, and 55:44, they will circulate between it and scalding water, heated to the utmost — read as a literal shuttle between two separate places. That picture turns the hamim into a stop on a route, not a part of the Fire itself.",
            "bn": "এই যুক্তির একটা নির্দিষ্ট রূপের জন্য নাম আসে মুকাতিলের। তিনি বলেন, ফুটন্ত পানি তথা হামীম জাহান্নামের বাইরে থাকে। আগুনের অধিবাসীদের বাইরে এনে তা পান করানো হয়, তারপর আবার ভেতরে ফিরিয়ে দেওয়া হয়। কুরতুবী এই দাবিটা সূরা আর-রাহমানের দুটি আয়াতের সঙ্গে জুড়ে দেন: ৫৫:৪৩, এটাই সেই জাহান্নাম যাকে অপরাধীরা মিথ্যা বলত, আর ৫৫:৪৪, তারা ঘুরবে আগুন আর ফুটন্ত পানির মাঝখানে, যা চরম মাত্রায় উত্তপ্ত। দুটি আয়াত একসঙ্গে পড়ে তিনি একে দুই জায়গার মধ্যে আক্ষরিক আসা-যাওয়া হিসেবে বোঝেন। এই ছবিতে হামীম হয়ে ওঠে যাত্রাপথের একটা থামার জায়গা, আগুনের কোনো অংশ নয়।"
          },
          {
            "en": "Al-Qushayri, recorded right after Maqatil in the same page, offers a different picture of the same phrase: wa la'alla al-hamim fi mawdi'in min jahannama 'ala tarafin minha, and perhaps the scalding water is simply in a location within Jahannam, at one of its edges. On this reading there is no excursion outside the Fire at all, only a transfer from one part of it to another. Al-Qurtubi records both positions and settles neither — the disagreement is real, and it stays open. His wording keeps the scalding water inside Jahannam's boundary while still naming it apart from the deepest fire.",
            "bn": "কুশাইরী, কুরতুবীর লেখায় মুকাতিলের ঠিক পরেই, একই পঙ্‌ক্তির আরেকটা ছবি আঁকেন: ওয়া লাআল্লাল হামীমু ফী মাওদিয়িম মিন জাহান্নামা আলা তারাফিম মিনহা, অর্থাৎ হয়তো ফুটন্ত পানিটা জাহান্নামেরই একটা জায়গায় আছে, তার একেবারে এক কিনারায়। এই পাঠে আগুনের বাইরে কোনো ভ্রমণই নেই, আছে কেবল ভেতরের এক অংশ থেকে আরেক অংশে সরে যাওয়া। কুরতুবী দুটি মতই তুলে ধরেন, কোনোটাকেই বাতিল করেন না; মতভেদটা সত্যিকারের, আর তা খোলাই থেকে যায়। তাঁর ভাষায় ফুটন্ত পানিটা জাহান্নামের সীমানার ভেতরেই থাকে, তবু তা সবচেয়ে গভীর আগুন থেকে আলাদা করেই নামকরণ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Qatada Set Beside It",
          "bn": "কাতাদা যে আয়াত পাশে রাখলেন"
        },
        "p": [
          {
            "en": "A third thread runs alongside the first two. Both at-Tabari and Ibn Kathir record that Qatada, reciting this verse, recited 55:44 straight after it: ya tufuna baynaha wa bayna hamim an, they will circulate between it and scalding water, heated to the utmost. Ibn Kathir calls the pairing a good, strong interpretation — his own words of praise for a reading he did not originate. Ibn Kathir places the citation immediately after his discussion of the scalding mixture in the previous verse, treating Qatada's recitation as the natural next word on the subject rather than a stray cross-reference.",
            "bn": "এই দুটি সূত্রের পাশাপাশি তৃতীয় একটা সূত্র চলে। তাবারী আর ইবন কাসীর দুজনেই লেখেন, কাতাদা এই আয়াত তিলাওয়াতের পরপরই ৫৫:৪৪ আয়াতটা তিলাওয়াত করতেন: ইয়াতূফূনা বাইনাহা ওয়া বাইনা হামীমিন আ-ন, অর্থাৎ তারা ঘুরবে আগুন আর ফুটন্ত পানির মাঝখানে, যা চরম মাত্রায় উত্তপ্ত। ইবন কাসীর এই সংযোগকে বলেন একটা সুন্দর, শক্তিশালী ব্যাখ্যা; প্রশংসাটা তাঁর নিজের, যদিও পাঠটি তাঁর উদ্ভাবন নয়। ইবন কাসীর আগের আয়াতের ফুটন্ত মিশ্রণ আলোচনার ঠিক পরপরই এই উদ্ধৃতিটা বসান, যেন কাতাদার এই তিলাওয়াত কোনো আলগা সংযোগ নয়, বরং একই বিষয়ের স্বাভাবিক পরের কথা।"
          },
          {
            "en": "Qatada's citation makes a narrower claim than Maqatil's. It does not say where the scalding water sits, inside the Fire or outside it; it only says the Fire's people keep moving between the two torments, fire and scalding drink, over and over. That claim fits comfortably inside either al-Qushayri's picture of an internal edge or Maqatil's picture of a trip outside — which is likely why two different tafsirs preserve it without choosing a side themselves. Neither tafsir treats the cross-reference as settling the Maqatil-Qushayri disagreement; it simply confirms that the Fire's people face several torments, in whatever arrangement those torments actually sit.",
            "bn": "মুকাতিলের দাবির চেয়ে কাতাদার উদ্ধৃতিটা সংকীর্ণ দাবি করে। এটা বলে না ফুটন্ত পানিটা ঠিক কোথায় থাকে, আগুনের ভেতরে না বাইরে; এটা কেবল বলে, আগুনের অধিবাসীরা বারবার দুই শাস্তির মাঝে ঘোরে, আগুন আর ফুটন্ত পানীয়ের মাঝে। এই দাবিটা কুশাইরীর ভেতরের কিনারার ছবি কিংবা মুকাতিলের বাইরের ভ্রমণের ছবি, দুটোরই সঙ্গে মানিয়ে যায়; সম্ভবত এ কারণেই দুটি ভিন্ন তাফসীর কোনো পক্ষ না নিয়েই একে ধরে রাখে। দুই তাফসীরের কেউই এই সংযোগটাকে মুকাতিল-কুশাইরী মতভেদের নিষ্পত্তি হিসেবে দেখান না। এটা শুধু এটুকু নিশ্চিত করে যে, আগুনের অধিবাসীদের সামনে একাধিক শাস্তি আছে, সেই শাস্তিগুলো যেভাবেই সাজানো থাকুক না কেন।"
          }
        ]
      },
      {
        "h": {
          "en": "One Reading, Two Transmitted Words",
          "bn": "একই কিরাত, দুই শব্দে বর্ণিত"
        },
        "p": [
          {
            "en": "The verse itself carries one more disagreement, this time about its wording rather than its meaning. Both at-Tabari and al-Qurtubi record that Ibn Mas'ud (RA) read the phrase differently: thumma inna munqalabahum la-ila al-jahim, then indeed their turning-place will be to the Hellfire — munqalab in place of marji', a different noun from the same root sense of coming back. Grammatically the two nouns are close cousins: marji' and munqalab both describe a point one turns back to, built on different roots for the same returning motion, so the substitution changes the word without changing what kind of place is meant.",
            "bn": "আয়াতটির মধ্যেই আরেকটা মতভেদ লুকানো আছে, এবার অর্থ নিয়ে নয়, শব্দচয়ন নিয়ে। তাবারী আর কুরতুবী দুজনেই লেখেন, ইবনে মাসউদ (রাঃ) এই অংশটা ভিন্নভাবে পড়তেন: ছুম্মা ইন্না মুনকালাবাহুম লা-ইলাল জাহিম, অর্থাৎ অতঃপর তাদের মোড়-ফেরা জাহান্নামের দিকেই। মারজি'-এর বদলে মুনকালাব শব্দ, একই মূল-ভাবধারার আরেকটা বিশেষ্য, যার অর্থও ফিরে আসা। ব্যাকরণগতভাবে এই দুটি বিশেষ্য প্রায় একই গোত্রের: মারজি' আর মুনকালাব দুটোই এমন একটা জায়গা বোঝায় যেখানে ফিরে আসা হয়, যদিও মূল শব্দ আলাদা। তাই এই বদলে শব্দ পাল্টায়, কিন্তু কোন ধরনের জায়গার কথা বলা হচ্ছে তা পাল্টায় না।"
          },
          {
            "en": "Ibn Kathir and al-Baghawi report the same companion's reading with a different word again: thumma inna muqaylahum la-ila al-jahim, then indeed their midday-rest will be to the Hellfire. Muqayl comes from qa'ilah, the rest taken at midday, not from raja'a at all. Two pairs of commentators, quoting what they present as the same companion's recitation, hand down two different nouns — both still pointing, in sense, to where the people of the Fire end up. Neither at-Tabari nor al-Qurtubi treats munqalab as a different claim about the afterlife; both record it simply as a variant word for the same return already named in the standard text.",
            "bn": "ইবন কাসীর আর বাগাভী একই সাহাবীর পাঠটা ধরেন আরেকটা শব্দে: ছুম্মা ইন্না মুকাইলাহুম লা-ইলাল জাহিম, অর্থাৎ অতঃপর তাদের দুপুরের বিশ্রাম জাহান্নামের দিকেই। মুকাইল শব্দটা এসেছে কাইলাহ থেকে, দুপুরের বিশ্রাম, রাজা'আ থেকে একদমই নয়। দুই জোড়া তাফসীরকার, একই সাহাবীর তিলাওয়াত বলে যা উদ্ধৃত করেন, তাঁরা নামিয়ে আনেন দুটি আলাদা বিশেষ্য, তবু অর্থের দিক থেকে দুজনেই একই জায়গায় পৌঁছান, যেখানে আগুনের অধিবাসীদের শেষ ঠিকানা। তাবারী কিংবা কুরতুবী, কারও কাছেই মুনকালাব শব্দটা আখিরাত নিয়ে আলাদা কোনো দাবি নয়; দুজনেই একে চিহ্নিত করেন প্রচলিত পাঠে বলা একই প্রত্যাবর্তনের একটা বিকল্প শব্দ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Oath About Midday",
          "bn": "দুপুরের বিরতি নিয়ে এক শপথ"
        },
        "p": [
          {
            "en": "The second of those two words is not an isolated oddity. At-Tabari and Ibn Kathir both report that Ibn Mas'ud (RA) used to swear: wa alladhi nafsi bi-yadihi, la yantasifu an-naharu yawma al-qiyamati hatta yaqila ahlu al-jannati fi al-jannati, wa ahlu an-nari fi an-nari — by the One in whose hand is my soul, midday on the Resurrection Day will not arrive until the people of Paradise are resting at midday in Paradise and the people of the Fire in the Fire. The oath ties the muqaylahum reading to a larger picture: rest itself, not only punishment, is already assigned before midday arrives.",
            "bn": "এই দুটি শব্দের দ্বিতীয়টি বিচ্ছিন্ন কোনো অদ্ভুত ব্যতিক্রম নয়। তাবারী আর ইবন কাসীর দুজনেই লেখেন, ইবনে মাসউদ (রাঃ) শপথ করে বলতেন: ওয়াল্লাযী নাফসী বিয়াদিহি, লা ইয়ানতাসিফুন নাহারু ইয়াওমাল কিয়ামাতি হাত্তা ইয়াকীলা আহলুল জান্নাতি ফিল জান্নাতি, ওয়া আহলুন নারি ফিন নার, অর্থাৎ যাঁর হাতে আমার প্রাণ তাঁর কসম, কিয়ামতের দিন দুপুর গড়াবে না যতক্ষণ না জান্নাতিরা জান্নাতে দুপুরের বিশ্রাম নিয়ে ফেলে, আর জাহান্নামিরা জাহান্নামে। এই শপথ মুকাইলাহুম পাঠটাকে একটা বড় ছবির সঙ্গে জুড়ে দেয়: বিশ্রামও, শুধু শাস্তি নয়, দুপুরের আগেই নির্ধারিত।"
          },
          {
            "en": "He then recited 25:24, the companions of Paradise, that Day, are in a better settlement and better resting place — maqilan, again from the same root as muqaylahum. The two tafsirs that carry this oath are the same two that carry the muqaylahum reading, which is likely why the two details travel together: a variant word, and the oath explaining what that word was meant to evoke. Read together, the variant word and the oath suggest the same underlying claim from two directions: that the Hereafter's timetable is already fixed, down to where each side is resting before the sun reaches its height.",
            "bn": "এরপর তিনি তিলাওয়াত করতেন ২৫:২৪ আয়াত, সেদিন জান্নাতবাসীরা থাকবে উত্তম বসতি আর উত্তম বিশ্রামস্থলে; মাকীলান শব্দটাও এসেছে মুকাইলাহুমেরই মূল থেকে। এই শপথটা যে দুটি তাফসীরে পাওয়া যায়, মুকাইলাহুম পাঠটাও ঠিক সেই দুটি তাফসীরেই আছে; সম্ভবত এ কারণেই এই দুটি তথ্য একসঙ্গে চলে, একটা ভিন্ন শব্দ, আর সেই শব্দ কী বোঝাতে চেয়েছিল তার একটা ব্যাখ্যা। এই পাঠভেদ আর শপথ একসঙ্গে পড়লে দুই দিক থেকেই একই দাবি বেরিয়ে আসে: আখিরাতের সময়সূচি আগে থেকেই ঠিক করা, এমনকি সূর্য মধ্যগগনে ওঠার আগেই কে কোথায় বিশ্রাম নেবে তা পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Minority Voice: Their Death",
          "bn": "সংখ্যালঘু এক মত: তাদের মৃত্যু"
        },
        "p": [
          {
            "en": "At-Tabari preserves a third view of the phrase, narrower than either of the others. Through the chain Yunus, from Ibn Wahb, from Ibn Zayd, he records that Ibn Zayd read marji'uhum here as simply mawtuhum, their death — a one-word gloss, with no explanation attached, standing apart from as-Sa'di's three-part destination and from the two readings just discussed. None of the other commentators fetched for this verse repeat Ibn Zayd's gloss, which is itself a sign of how little traction the reading found among later readers of at-Tabari's own collection.",
            "bn": "তাবারী এই পঙক্তির তৃতীয় আরেকটা ব্যাখ্যা রক্ষা করেন, যা আগের দুটির চেয়ে সংকীর্ণ। ইউনুস থেকে, ইবনে ওয়াহাবের মাধ্যমে, ইবনে যায়েদ পর্যন্ত যাওয়া সনদে তিনি লেখেন, ইবনে যায়েদ এখানে মারজিয়াহুমকে পড়েছেন নিছক মাওতুহুম বলে, অর্থাৎ তাদের মৃত্যু। একটামাত্র শব্দের ব্যাখ্যা, কোনো কারণ ছাড়াই, যা আস-সাদীর তিনটি অংশের গন্তব্য থেকে আর মাত্র আলোচিত দুটি পাঠ থেকেও আলাদা দাঁড়িয়ে থাকে। এই আয়াতের জন্য সংগ্রহ করা অন্য কোনো তাফসীরকারই ইবনে যায়েদের এই ব্যাখ্যা দ্বিতীয়বার তোলেননি, যা থেকেই বোঝা যায় তাবারীর নিজের সংকলনের পরের পাঠকদের মধ্যেও এই পাঠ কতটা কম গ্রহণযোগ্যতা পেয়েছিল।"
          },
          {
            "en": "The printed edition carries its own note of caution on this gloss. An editorial footnote beside Ibn Zayd's word suggests it may be a copyist's substitution for muqarruhum or ma'aluhum, their settled place or their outcome, rather than a claim about death as such. The honest position is to name it as at-Tabari transmits it, a minority reading, and to flag that even the editors who preserved it were not fully sure of the word. Even so, the gloss is worth keeping on record rather than dropping it silently; an honestly preserved minority reading differs from one smoothed away to look tidier than the sources are.",
            "bn": "এই মুদ্রিত সংস্করণটাই এই ব্যাখ্যা নিয়ে নিজস্ব একটা সতর্কতা জুড়ে দেয়। ইবনে যায়েদের শব্দের পাশে সম্পাদকীয় একটা টীকা বলছে, এটা হয়তো মুকাররুহুম বা মাআলুহুমের জায়গায় কোনো নকলকারীর ভুল প্রতিস্থাপন, অর্থাৎ তাদের স্থির ঠিকানা বা পরিণতি, মৃত্যুর দাবির বদলে। সৎ অবস্থান হলো, তাবারী যেভাবে বর্ণনা করেছেন সেভাবেই একে সংখ্যালঘু পাঠ বলে উল্লেখ করা, আর এটাও বলে দেওয়া যে যাঁরা এটা সংরক্ষণ করেছেন তাঁরা নিজেরাও শব্দটা নিয়ে পুরোপুরি নিশ্চিত ছিলেন না। তারপরও এই ব্যাখ্যাটা চুপচাপ বাদ না দিয়ে লিপিবদ্ধ রাখাই ভালো; সততার সঙ্গে রাখা সংখ্যালঘু পাঠ আর উৎসের চেয়ে পরিপাটি দেখাতে মুছে ফেলা পাঠ, এক জিনিস নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "No License Against the Living",
          "bn": "জীবিত কারও বিরুদ্ধে অনুমতি নয়"
        },
        "p": [
          {
            "en": "One thing needs to be said plainly, apart from any of these disagreements. The wrongdoers this verse and its neighbours describe are named once, in 37:63, as those a specific trial was set for; the fate described here is Allah's judgment on them in the Hereafter, not a verdict handed to any reader to pass on a living person or community today. Whatever word a scholar prefers for marji' — return, turning-place, or midday-rest — the sentence is not a label to hang on somebody else. This holds regardless of which scholarly position on the hamim or the variant readings a reader finds most convincing.",
            "bn": "এই সব মতভেদের বাইরে একটা কথা সরাসরি বলা দরকার। এই আয়াত আর এর আশপাশের আয়াতগুলো যে যালিমদের কথা বলে, তাদের নাম একবারই এসেছে, ৩৭:৬৩ আয়াতে, যাদের জন্য একটা নির্দিষ্ট পরীক্ষা রাখা হয়েছিল। এখানে যা বর্ণিত, তা আখিরাতে আল্লাহর রায়, কোনো পাঠকের হাতে তুলে দেওয়া রায় নয় যা দিয়ে আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর ভাগ্য নির্ধারণ করা যায়। মারজি'-এর জন্য কোনো আলেম যে শব্দই বেছে নিন না কেন, প্রত্যাবর্তন, মোড়-ফেরা, কিংবা দুপুরের বিশ্রাম, এই বাক্যটা অন্য কারও গায়ে সাঁটার মতো কোনো লেবেল নয়। হামীম বা পাঠভেদ নিয়ে পাঠক যে মতটাকেই বেশি গ্রহণযোগ্য মনে করুন না কেন, এই নীতি সবসময় প্রযোজ্য।"
          },
          {
            "en": "That the hamim's exact location, or the strict meaning of thumma, divided serious scholars is itself instructive. Matters of the unseen stay matters of careful inference even among people equipped to make it. What every source agrees on, without exception, is the audience the verse actually names: those it describes, nothing more — and nobody is handed a license by this verse to despair of anyone's standing with Allah, or to claim knowledge that belongs to Him alone. A disagreement among scholars over a detail of the Unseen is not an invitation for anyone outside that scholarship to invent a harsher certainty than the sources themselves were willing to state.",
            "bn": "হামীম ঠিক কোথায় বসে, কিংবা ছুম্মা শব্দের কঠোর অর্থ কী, এই নিয়ে গুরুত্বপূর্ণ আলেমদের মতভেদ হওয়াটাই একটা শিক্ষা। অদৃশ্যের বিষয়গুলো যোগ্য মানুষদের কাছেও সতর্ক অনুমানেরই বিষয় থেকে যায়। প্রতিটি সূত্র ব্যতিক্রমহীনভাবে যে বিষয়ে একমত, তা হলো আয়াতটা আসলে কাদের উদ্দেশে বলা, কেবল তাদেরই, আর কাউকে এই আয়াত অন্য কারও আল্লাহর কাছে অবস্থান নিয়ে হতাশ হওয়ার বা এমন জ্ঞানের দাবি করার কোনো অনুমতি দেয় না, যা কেবল তাঁরই জানা। অদৃশ্যের কোনো খুঁটিনাটি নিয়ে আলেমদের মতভেদ কখনোই এই আহ্বান নয় যে, সেই জ্ঞানের বাইরের কেউ সূত্রগুলোর চেয়েও কঠোর কোনো নিশ্চয়তা বানিয়ে নেবে।"
          }
        ]
      }
    ]
  },
  "37:75": {
    "sections": [
      {
        "h": {
          "en": "One Verse, Two Movements",
          "bn": "এক আয়াত, দুই পর্ব"
        },
        "p": [
          {
            "en": "Wa-laqad nadana Nuhun fa-la-ni'ma al-mujibun: and Noah had certainly called Us, and how excellent a responder We were. The sentence has exactly two movements and nothing else. A call goes out, then a response comes back, and the whole of it is compressed into five Arabic words. What is missing is just as telling. There is no rescue here yet, no mention of the family saved, no descendants carried forward, no greeting sent across the worlds. Those all wait for the verses just after this one. This verse is only the call and the answer, the hinge the rest of the story turns on.",
            "bn": "ওয়ালাকাদ নাদানা নূহুন ফালানি'মাল মুজিবূন: নূহ আমাকে ডেকেছিলেন, আর আমি কতই না উত্তম সাড়াদাতা ছিলাম। এই আয়াতে ঠিক দুটি পর্ব আছে, এর বেশি কিছু নয়। একটা ডাক যায়, তারপর একটা জবাব আসে, আর গোটা ঘটনা মাত্র পাঁচটি আরবি শব্দে বাঁধা। যা নেই, সেটাও লক্ষণীয়। এখানে এখনো উদ্ধারের কথা নেই, পরিবার রক্ষার কথা নেই, বংশধর টিকিয়ে রাখার কথা নেই, বিশ্বজগতে পাঠানো সালামের কথাও নেই। এসবের জন্য অপেক্ষা করতে হবে পরের আয়াতগুলো পর্যন্ত। এই আয়াতটি শুধু ডাক আর জবাবের, পুরো কাহিনির সেই কব্জা যার উপর বাকি সব ঘুরবে।"
          },
          {
            "en": "The four verses just before this explain why the case of Nuh needed telling at all. 37:69 and 37:70 describe people who found their fathers astray and hurried after their footsteps anyway; 37:71 widens the lens to most of the earlier peoples; 37:72 insists warners had been sent among them regardless; 37:73 then asks the reader to look at what became of those who were warned and refused. This verse answers with the first full example: a warner who stayed among his people, on Ibn Kathir's count nearly a thousand years, and a Lord who, once finally asked to end it, answered at once.",
            "bn": "এই আয়াতের ঠিক আগের চারটি আয়াতই বলে দেয় কেন নূহের কাহিনি বলা দরকার হলো। ৩৭:৬৯ ও ৩৭:৭০ বলে, যারা তাদের পিতৃপুরুষদের বিপথগামী পেয়েছিল তারা তবু তাদেরই পদাংক অনুসরণ করে ছুটেছিল; ৩৭:৭১ আরও বিস্তৃত করে বলে, আগের অধিকাংশ জাতিই পথভ্রষ্ট হয়েছিল; ৩৭:৭২ জোর দিয়ে বলে, তাদের মাঝেও সতর্ককারী পাঠানো হয়েছিল; ৩৭:৭৩ পাঠককে বলে দেখতে, সতর্ক করা সত্ত্বেও তাদের পরিণতি কী হয়েছিল। এই আয়াত তখন প্রথম পূর্ণাঙ্গ দৃষ্টান্ত হাজির করে: এমন এক সতর্ককারী যিনি ইবন কাসীরের হিসাবে প্রায় হাজার বছর তাঁর সম্প্রদায়ের মাঝে ছিলেন, আর এমন এক রব যিনি শেষে অনুরোধ পাওয়ামাত্র সাড়া দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word for This Calling",
          "bn": "এই ডাকের শব্দটি"
        },
        "p": [
          {
            "en": "Nada, the verb used here, comes from the same root as nida', a call or cry raised so it carries. Al-Qurtubi is explicit about which kind of call this is: he glosses nida' in this verse as al-istighatha, calling out for rescue, not an ordinary summons or a polite address. The distinction matters, because plenty of speech in the Qur'an is called nida' without any desperation in it: Allah calls believers to listen, a herald calls a crowd to attention. Al-Qurtubi's reading places this particular cry somewhere else, with a man who has run out of other options and is finally crying out because nothing less will do.",
            "bn": "নাদা ক্রিয়াটি এসেছে নিদা ধাতু থেকেই, যার অর্থ এমন ডাক যা দূর পর্যন্ত পৌঁছায়। কুরতুবী স্পষ্ট করে বলেন এখানে কোন ধরনের ডাকের কথা হচ্ছে। তিনি এই আয়াতের নিদাকে ব্যাখ্যা করেন ইসতিগাসা হিসেবে, অর্থাৎ উদ্ধারের জন্য আর্তনাদ, কোনো সাধারণ সম্বোধন বা ভদ্র আহ্বান নয়। এই পার্থক্যটা গুরুত্বপূর্ণ। কুরআনে বহু জায়গায় নিদা শব্দ ব্যবহৃত হয়েছে, যেখানে কোনো হতাশা বা আর্তি নেই: আল্লাহ মুমিনদের ডাকেন শোনার জন্য, কোনো ঘোষক ভিড়কে ডাকে মনোযোগের জন্য। কুরতুবীর ব্যাখ্যা এই নির্দিষ্ট আর্তনাদকে রাখে একেবারে অন্য জায়গায়, এমন একজন মানুষের মুখে যার আর কোনো উপায় বাকি নেই, যে শেষে আর্তনাদ করছে কারণ এর কমে আর কিছু চলবে না।"
          },
          {
            "en": "That rescue-cry, on al-Qurtubi's reading, was a specific request: 'My Lord, do not leave upon the earth from among the disbelievers an inhabitant' (71:26), the closing line of the long prayer recorded in Surah Nuh. An ordinary request for help rarely reaches for an ending that final. Istighatha is the word Arabic keeps for exactly this register: not a conversation, not a complaint, but the cry of someone who has tried everything else and is now asking to be freed from the situation itself, not merely assisted inside it.",
            "bn": "কুরতুবীর ব্যাখ্যা অনুযায়ী সেই আর্তনাদ ছিল সুনির্দিষ্ট একটি আবেদন: 'হে আমার রব্ব, ভূপৃষ্ঠে বসবাসকারী কাফিরদের একজনকেও তুমি রেহাই দিও না' (৭১:২৬), সূরা নূহে লিপিবদ্ধ দীর্ঘ দোয়ার শেষ বাক্য। সাধারণ সাহায্য চাওয়ার দোয়া সচরাচর এত চূড়ান্ত সমাপ্তি চায় না। ইসতিগাসা শব্দটি আরবি ভাষায় ঠিক এই স্বরের জন্যই রাখা, কোনো আলাপ নয়, কোনো অভিযোগ নয়, বরং এমন একজনের আর্তনাদ যে সব কিছু চেষ্টা করে দেখেছে, আর এখন চাইছে পরিস্থিতি থেকেই মুক্তি, শুধু তার ভেতরে সাহায্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The First of the Messengers",
          "bn": "রাসূলদের মধ্যে প্রথমজন"
        },
        "p": [
          {
            "en": "As-Sa'di introduces this verse by naming exactly who is being described: His servant and His messenger Nuh, peace be upon him, the first of the messengers. The title is not decoration. Nuh is the first prophet the Qur'an records being sent against outright disbelief, so whatever pattern his story sets becomes the template every later prophet's story is measured against: warn, be rejected, endure, and only then call on Allah to end it. As-Sa'di places the emphasis on endurance before the emphasis on the ending, because without the first the second would not carry the weight it does.",
            "bn": "আস-সাদী এই আয়াতের ব্যাখ্যা শুরু করেন একদম স্পষ্ট পরিচয় দিয়ে: তাঁর বান্দা ও রাসূল নূহ, আলাইহিস সালাম, রাসূলদের মধ্যে প্রথমজন। এই উপাধিটা নিছক সাজসজ্জা নয়। নূহই প্রথম নবী যাঁকে কুরআন সরাসরি অবাধ্যতার বিরুদ্ধে পাঠানো হিসেবে লিপিবদ্ধ করে, তাই তাঁর কাহিনির যে ছাঁচ তৈরি হয়, পরের প্রতিটি নবীর কাহিনিই সেই ছাঁচ দিয়ে মাপা হয়: সতর্ক করা, প্রত্যাখ্যাত হওয়া, সহ্য করা, আর তারপরই আল্লাহর কাছে এর অবসান চাওয়া। আস-সাদী এখানে জোর দেন সহ্য করার দিকটায় আগে, অবসানের দিকটায় পরে, কারণ প্রথমটা না থাকলে দ্বিতীয়টার এত ওজন থাকত না।"
          },
          {
            "en": "As-Sa'di then explains what made the cry necessary. Nuh had called his people across that long period, and his calling increased them in nothing but flight (71:6), not indifference, not a slow drift, but people actively running further away each time he spoke. That is the condition as-Sa'di has in view when he reaches the word nada: a prophet who had already given everything an ordinary call could give, and for whom calling on Allah was the only call left. Grammatically nada is simple past tense, a single completed action; the preceding years of calling sit outside the word itself, carried only by the context as-Sa'di supplies.",
            "bn": "আস-সাদী এরপর ব্যাখ্যা করেন কেন এই আর্তনাদ অপরিহার্য হয়ে উঠল। নূহ তাঁর সম্প্রদায়কে ডেকেছিলেন সেই দীর্ঘ সময় ধরে, আর তাঁর ডাক তাদের মধ্যে পলায়নী মনোবৃত্তি ছাড়া আর কিছুই বাড়ায়নি (৭১:৬); উদাসীনতা নয়, ধীর দূরত্ব নয়, বরং প্রতিবার কথা বলার সময় মানুষগুলো সত্যিকার অর্থেই আরও দূরে ছুটে যাচ্ছিল। এটাই সেই অবস্থা, যা মাথায় রেখে আস-সাদী নাদা শব্দে পৌঁছান: এমন এক নবী, যিনি সাধারণ ডাকে যা দেওয়া সম্ভব তার সব দিয়ে ফেলেছেন, আর যাঁর জন্য আল্লাহকে ডাকাই ছিল শেষ অবশিষ্ট ডাক। ব্যাকরণগতভাবে নাদা অতীতকালের ক্রিয়া, একটিমাত্র সম্পন্ন কাজ; তার আগের বছরের পর বছর ডাকাডাকি শব্দটির ভেতরে নেই, তা বহন করে শুধু আস-সাদীর দেওয়া প্রসঙ্গ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prayer Behind the Call",
          "bn": "ডাকের পেছনের দোয়া"
        },
        "p": [
          {
            "en": "At-Tabari identifies the call of this verse with a specific recorded prayer, quoting it in full: My Lord, I invited my people night and day, but my invitation increased them not except in flight (71:5 and 71:6). He reads 'Noah called Us' as shorthand for this entire episode, the request, in at-Tabari's words, that his people be destroyed. The prayer is not a single outburst; it names an exhausted method, night and day, covering every hour a caller has to offer, and a single result, flight, repeated until it could no longer be answered with more calling.",
            "bn": "তাবারী এই আয়াতের ডাককে নির্দিষ্ট একটি লিপিবদ্ধ দোয়ার সঙ্গে মিলিয়ে দেন, পুরো দোয়াটি উদ্ধৃত করে: হে আমার প্রতিপালক, আমি আমার জাতিকে রাত-দিন ডেকেছি, কিন্তু আমার ডাক কেবল তাদের পলায়নী মনোবৃত্তিকেই বাড়িয়ে দিয়েছে (৭১:৫ ও ৭১:৬)। তিনি 'নূহ আমাকে ডেকেছিল' কথাটিকে পড়েন এই গোটা ঘটনারই সংক্ষিপ্তসার হিসেবে, তাবারীর ভাষায় যে অনুরোধ ছিল তাঁর সম্প্রদায়ের ধ্বংস চাওয়ার। এই দোয়া কোনো আকস্মিক আক্ষেপ নয়; এতে আছে একটি নিঃশেষিত পদ্ধতির নাম, রাত-দিন, একজন ডাকদাতার হাতে থাকা প্রতিটি মুহূর্ত, আর একটিই ফলাফল, পলায়ন, যা বারবার ঘটেছে যতক্ষণ না তা আর কেবল ডাক দিয়ে সামাল দেওয়া সম্ভব ছিল না।"
          },
          {
            "en": "As-Sa'di cites the same two verses for the same reason, so on this point the two commentators agree rather than differ: the call named in 37:75 is the prayer recorded in Surah Nuh, running from the report of a lifetime of invitation (71:5 and 71:6) to its final request (71:26). Read together, the three verses form one motion: centuries of calling, a confession that the calling has failed, and then a single request addressed to Allah instead of to the people. Both commentators read 'Noah called Us' as a verb of result, not just of utterance: the call succeeded, in their account, precisely because it was long overdue.",
            "bn": "আস-সাদীও একই দুটি আয়াত উল্লেখ করেন একই কারণে, তাই এই জায়গায় দুই মুফাসসির দ্বিমত নন, বরং একমত: ৩৭:৭৫ আয়াতে যে ডাকের কথা বলা হয়েছে, তা সূরা নূহে লিপিবদ্ধ সেই দোয়া, যা শুরু হয় সারা জীবনের আহ্বানের বর্ণনা দিয়ে (৭১:৫ ও ৭১:৬) আর শেষ হয় চূড়ান্ত আবেদনে (৭১:২৬)। একসঙ্গে পড়লে তিনটি আয়াত একটিই গতিপথ তৈরি করে: বহু শতাব্দীর ডাকাডাকি, তারপর স্বীকৃতি যে ডাকাডাকি ব্যর্থ হয়েছে, আর তারপর মানুষের বদলে সরাসরি আল্লাহর কাছে একটিমাত্র আবেদন। দুই মুফাসসিরই 'নূহ আমাকে ডেকেছিল' কথাটিকে পড়েন ফলাফলসূচক ক্রিয়া হিসেবে, শুধু উচ্চারণ হিসেবে নয়: তাঁদের বিবরণ অনুযায়ী এই ডাক সফল হয়েছিল ঠিক এই কারণে যে তা বহুদিন বিলম্বিত হয়ে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Surahs, One Verdict",
          "bn": "দুই সূরা, একই রায়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an sums up the division plainly: most commentators take Noah's call in this verse to mean one of two prayers, and they do not agree on which. One group points to Surah Nuh, the plea just covered; a second points to a shorter line from Surah al-Qamar. The difference is not a detail; it decides which surah the call of 37:75 is actually quoting, and the sources themselves split over the answer. Ma'arif al-Qur'an adds the circumstance behind either prayer: by that point Nuh's people had crossed every limit of hostility toward him, going as far as conspiring to kill him.",
            "bn": "মাআরিফুল কুরআন এই বিভাজনটা স্পষ্ট করেই বলে দেয়: অধিকাংশ মুফাসসির এই আয়াতের ডাককে দুটি দোয়ার একটি বলে ধরেন, আর কোনটি তা নিয়ে তাঁরা একমত নন। একদল নির্দেশ করেন সূরা নূহের দিকে, আগেই যে আবেদনের কথা হয়েছে; অন্যদল নির্দেশ করেন সূরা আল-কামারের একটি সংক্ষিপ্ত বাক্যের দিকে। এই পার্থক্যটা কোনো সামান্য বিষয় নয়, এটাই ঠিক করে দেয় ৩৭:৭৫ আয়াতের ডাক আসলে কোন সূরাকে উদ্ধৃত করছে, আর উৎসগুলো নিজেরাই এর জবাবে দ্বিধাবিভক্ত। মাআরিফুল কুরআন উভয় দোয়ার পেছনের পরিস্থিতিও যোগ করে: ততদিনে নূহের সম্প্রদায় তাঁর প্রতি শত্রুতার সব সীমা ছাড়িয়ে গিয়েছিল, এমনকি তাঁকে হত্যার ষড়যন্ত্র পর্যন্ত করেছিল।"
          },
          {
            "en": "Ibn Kathir and al-Baghawi take the second path. Both read the call as the one-line prayer from Surah al-Qamar: I have been overcome, so help (54:10). Al-Baghawi states it directly: Noah prayed against his people with this line, and the response was that Allah answered his prayer and destroyed his people. Ibn Kathir adds the reason behind the anger in the prayer itself, a point worth its own section, but both commentators agree that this short line, not the longer one in Surah Nuh, is the call being named here.",
            "bn": "ইবন কাসীর ও বাগাভী দ্বিতীয় পথ বেছে নেন। দুজনেই এই ডাককে সূরা আল-কামারের একলাইনের দোয়া বলে পড়েন: আমি পরাস্ত হয়েছি, কাজেই তুমি এর প্রতিবিধান কর (৫৪:১০)। বাগাভী সরাসরি বলেন, নূহ তাঁর সম্প্রদায়ের বিরুদ্ধে এই বাক্য দিয়েই বদদোয়া করেছিলেন, আর জবাবে আল্লাহ তাঁর দোয়া কবুল করে তাঁর সম্প্রদায়কে ধ্বংস করেন। ইবন কাসীর এই দোয়ার পেছনের রাগের কারণটাও যোগ করেন, যা নিজেই আলাদা একটি আলোচনার দাবি রাখে, তবে দুজন মুফাসসিরই একমত যে ছোট এই বাক্যটিই, সূরা নূহের লম্বা বাক্যটি নয়, এখানে উল্লিখিত ডাক।"
          },
          {
            "en": "Both readings rest on the same small set of facts: Noah prayed against his people after centuries of rejection, and Allah answered by ending them. What the commentators dispute is only which recorded line this verse is summarizing. Nothing in 37:75 itself decides the question, and nothing here needs to. Holding two named readings open, rather than picking a winner, is itself the accurate report of what the sources say. A reader who only knew one of the two prayers would still understand the verse correctly; knowing both simply shows how widely the same single sentence has been read across the tafsir tradition.",
            "bn": "দুটি পাঠই একই ছোট্ট কিছু তথ্যের উপর দাঁড়িয়ে: দীর্ঘ শতাব্দীর প্রত্যাখ্যানের পর নূহ তাঁর সম্প্রদায়ের বিরুদ্ধে দোয়া করেছিলেন, আর আল্লাহ সেই দোয়ার জবাবে তাদের শেষ করে দিয়েছিলেন। মুফাসসিরদের মতভেদ শুধু এইটুকুতেই, এই আয়াত আসলে কোন লিপিবদ্ধ বাক্যটির সারসংক্ষেপ। ৩৭:৭৫ আয়াত নিজে এই প্রশ্নের মীমাংসা করে না, আর তার দরকারও নেই। দুটি নামাঙ্কিত পাঠকেই খোলা রাখা, একটিকে জিতিয়ে না দিয়ে, এটাই সূত্রগুলো আসলে যা বলে তার সঠিক প্রতিবেদন। যে পাঠক এই দুটি দোয়ার মধ্যে মাত্র একটি জানেন, তিনিও আয়াতটি ঠিকভাবেই বুঝবেন; দুটোই জানা থাকলে শুধু এটুকু বোঝা যায়, একই বাক্য তাফসীরের ঐতিহ্যে কতটা ভিন্নভাবে পড়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Anger Answered by Anger",
          "bn": "রাগের জবাবে রাগ"
        },
        "p": [
          {
            "en": "Ibn Kathir supplies the mechanism behind the answer: after everything Nuh had endured, Allah became angry because Nuh was angry with them. The anger named here is not a flaw to excuse. Nuh had warned his people for a lifetime, watched them meet every invitation with more rejection, and only then asked for an end; anger of that kind is the far side of exhausted mercy, not a loss of it. Ibn Kathir does not describe a prophet who snapped; he describes a prayer that finally matched, in its intensity, the scale of what had been tried and refused.",
            "bn": "ইবন কাসীর জবাবের পেছনের কার্যকারণ তুলে ধরেন: এত কিছু সহ্য করার পর, নূহ যাদের উপর রাগান্বিত হয়েছিলেন, আল্লাহও তাদের উপর রাগান্বিত হলেন। এখানে যে রাগের কথা বলা হচ্ছে, তা কোনো দোষ নয় যাকে ক্ষমা করে দিতে হবে। নূহ সারা জীবন ধরে তাঁর সম্প্রদায়কে সতর্ক করেছেন, প্রতিটি আহ্বানের জবাবে আরও বেশি প্রত্যাখ্যান দেখেছেন, আর তারপরই একটি সমাপ্তি চেয়েছেন। এই ধরনের রাগ দয়ার বিপরীত নয়, বরং নিঃশেষিত দয়ারই অন্য প্রান্ত। ইবন কাসীর এমন কোনো নবীর ছবি আঁকেন না যিনি ভেঙে পড়েছেন; তিনি আঁকেন এমন এক দোয়ার ছবি যা শেষপর্যন্ত তার তীব্রতায় মিলে গিয়েছিল তার মাত্রার সঙ্গে, যা চেষ্টা করা হয়েছিল আর প্রত্যাখ্যাত হয়েছিল।"
          },
          {
            "en": "What follows this prayer, two verses later in the surah's telling, is the destruction of a people who had rejected a direct warning for centuries. That is what this part of the story states, and it licenses nothing against any community or person living today. Nuh's people are described for what the text says they did, in their own place and time; no later reader gets to borrow that verdict and aim it at a neighbour, a nation, or anyone else who has not stood where that story's judgment actually fell.",
            "bn": "এই দোয়ার পরে যা ঘটে, সূরার বর্ণনায় এর দুই আয়াত পরেই, তা হলো এমন এক সম্প্রদায়ের ধ্বংস যারা শতাব্দীর পর শতাব্দী ধরে সরাসরি সতর্কবার্তা প্রত্যাখ্যান করেছিল। কাহিনির এই অংশ যা বলছে, ঠিক ততটুকুই বলছে, আর আজকের কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো অনুমতি দেয় না। নূহের সম্প্রদায়কে বর্ণনা করা হয়েছে তাদের নিজস্ব সময় ও স্থানে তারা যা করেছিল সেই অনুযায়ী। পরবর্তী কোনো পাঠক এই রায় ধার করে প্রতিবেশী, কোনো জাতি, বা এমন কাউকে লক্ষ্য করে ছুঁড়তে পারে না যে এই কাহিনির বিচারের জায়গায় কখনো দাঁড়ায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "How Excellent a Responder",
          "bn": "কতই না উত্তম সাড়াদাতা"
        },
        "p": [
          {
            "en": "Al-Qurtubi closes his note on this verse with a grammarian's gloss. Al-Kisa'i explains fa-la-ni'ma al-mujibun as fa-la-ni'ma al-mujibuna lahu kunna: how excellent were the responders We were to him. Mujibun is grammatically plural, the regular form for 'those who respond,' yet the one responding is Allah alone. Arabic keeps this plural for exactly this use, a majestic, royal plural that speaks of a single speaker in the grammar of the many, the same pattern behind 'We created' and 'We sent' throughout the Qur'an.",
            "bn": "কুরতুবী এই আয়াতের ব্যাখ্যা শেষ করেন এক ব্যাকরণবিদের মন্তব্য দিয়ে। আল-কিসাঈ ফালানি'মাল মুজিবূন কথাটির ব্যাখ্যায় বলেন, এর মানে ফালানি'মাল মুজিবুনা লাহু কুন্না: তাঁর জন্য আমি কতই না উত্তম সাড়াদাতা ছিলাম। মুজিবূন শব্দটি ব্যাকরণগতভাবে বহুবচন, 'যারা সাড়া দেয়' তার স্বাভাবিক রূপ, অথচ সাড়াদাতা একমাত্র আল্লাহই। আরবি ভাষা ঠিক এই ব্যবহারের জন্যই এই বহুবচন রাখে, একটি রাজকীয় বহুবচন যা একজন মাত্র বক্তার কথা বলে বহুবচনের ব্যাকরণে, কুরআন জুড়ে 'আমি সৃষ্টি করেছি' আর 'আমি পাঠিয়েছি'-এর পেছনেও একই রীতি।"
          },
          {
            "en": "The grammar carries a small theological point along with it. The verse does not simply say Allah answered; it says Allah was, and is, the best of those who answer, a quality claim, not only an event report. Whatever the exact prayer behind Noah's call, the half-line that closes the verse is doing separate work: naming the kind of response this was, superlative and singular, before the story moves on to what that response actually delivered. Mujib itself comes from the root j-w-b, to answer in a way that meets a request, not merely acknowledge it; the surah's claim is that this request was met exactly.",
            "bn": "এই ব্যাকরণ একটি ছোট আকিদাগত বিষয়ও বহন করে। আয়াতটি শুধু এটা বলে না যে আল্লাহ জবাব দিয়েছিলেন; বরং বলে, আল্লাহ ছিলেন, এবং আছেন, সর্বোত্তম সাড়াদাতা, এটি একটি গুণগত দাবি, শুধু একটি ঘটনার বিবরণ নয়। নূহের ডাকের পেছনে প্রকৃত দোয়া যা-ই হোক, আয়াতের শেষ অর্ধবাক্যটি আলাদা একটি কাজ করছে: এই সাড়ার ধরনটিকে নাম দেওয়া, যা সর্বোচ্চ ও একক, এরপর কাহিনি এগিয়ে যাবে সেই সাড়া আসলে কী এনে দিল তার দিকে। মুজিব শব্দটি এসেছে জ-ও-ব ধাতু থেকে, যার অর্থ কোনো অনুরোধ মিটিয়ে দেওয়ার মতো জবাব দেওয়া, শুধু স্বীকৃতি দেওয়া নয়; সূরাটির দাবি হলো, এই অনুরোধ হুবহু মিটিয়ে দেওয়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Yet the Rescue",
          "bn": "এখনও যা বলা হয়নি"
        },
        "p": [
          {
            "en": "Everything the response actually produces belongs to the verses that follow, not to this verse. 37:76 names the rescue, Nuh and his family saved from the great affliction; 37:77 to 37:78 name what outlasted the flood, his descendants and his memory among later generations; 37:79 records the greeting sent across the worlds, peace upon Noah; 37:80 states the principle behind the whole reward, and 37:81 places Nuh among Allah's believing servants. None of that is claimed here. This verse only earns the right to tell it.",
            "bn": "এই সাড়া আসলে কী এনে দিয়েছিল, তার সবটাই পরের আয়াতগুলোর বিষয়, এই আয়াতের নয়। ৩৭:৭৬ উদ্ধারের কথা বলে, নূহ ও তাঁর পরিবার মহাবিপদ থেকে রক্ষা পেলেন; ৩৭:৭৭ থেকে ৩৭:৭৮ বলে কী টিকে রইল বন্যার পরেও, তাঁর বংশধর আর পরবর্তীদের মাঝে তাঁর স্মৃতি; ৩৭:৭৯ লিপিবদ্ধ করে বিশ্বজগতে পাঠানো সেই সালাম, নূহের প্রতি শান্তি; ৩৭:৮০ গোটা প্রতিদানের মূলনীতি জানায়, আর ৩৭:৮১ নূহকে রাখে আল্লাহর মুমিন বান্দাদের কাতারে। এর কোনোটাই এই আয়াতে এখনো বলা হয়নি। এই আয়াত শুধু পরের কথাগুলো বলার অধিকার অর্জন করে দেয়।"
          },
          {
            "en": "No hadith in the texts gathered for this verse attaches a dated report to it, and none is needed to make the point stand: the call that took the longest to make was answered the fastest once it reached the one request Noah had not yet tried. Istighatha, not small talk; centuries, not an instant; and then, in the space of five words, the best of responders answered. That order, calling first and asking last, is the same order every later prophet's story in this surah will repeat.",
            "bn": "এই আয়াতের জন্য সংগৃহীত কোনো তাফসীরেই কোনো নির্দিষ্ট হাদিস এর সঙ্গে জোড়া নেই, আর পয়েন্টটা দাঁড়াতে তার দরকারও নেই। যে ডাক দিতে সবচেয়ে বেশি সময় লেগেছিল, সেটাই সবচেয়ে দ্রুত জবাব পেল, যখন তা পৌঁছাল নূহ এর আগে না করা একটিমাত্র অনুরোধে। ইসতিগাসা, হালকা কথা নয়; শতাব্দীর পর শতাব্দী, এক মুহূর্ত নয়; আর তারপর, মাত্র পাঁচটি শব্দের মধ্যে, সর্বোত্তম সাড়াদাতা জবাব দিলেন। ডাকা আগে, চাওয়া শেষে, এই যে ক্রম, এই সূরার পরবর্তী প্রতিটি নবীর কাহিনিতেও একই ক্রম ফিরে আসবে।"
          }
        ]
      }
    ]
  },
  "37:79": {
    "sections": [
      {
        "h": {
          "en": "A Sentence That Stands Alone",
          "bn": "একাই এক পূর্ণ বাক্য"
        },
        "p": [
          {
            "en": "Salamun 'ala Nuhin fi al-'alamin: peace upon Noah among the worlds. At-Tabari records that most reciters read salamun in the nominative, so the sentence stands alone, a fresh declaration rather than a continuation of the verse before it. Some grammarians from Kufa, he reports, read it differently: what was left for Noah in the previous verse was this very word, peace, so the whole runs as one sentence built on the verb We left. Tabari adds that had the wording instead read We left for him a peace, that too would have been correct Arabic; he is naming a hypothetical, not a transmitted reading.",
            "bn": "সালামুন আলা নূহিন ফিল আলামীন: বিশ্বজগতের মাঝে নূহের প্রতি শান্তি। তাবারীর বর্ণনা অনুযায়ী অধিকাংশ কারী 'সালামুন' শব্দটি কর্তৃকারকে পড়েন, ফলে এটি আগের আয়াত থেকে আলাদা, নিজে থেকেই একটি পূর্ণ ঘোষণা হয়ে দাঁড়ায়। তাঁর বর্ণনায় কুফার কিছু নাহুবিদ অবশ্য একে ভিন্নভাবে পড়তেন। তাঁদের মতে আগের আয়াতে নূহের জন্য যা রেখে দেওয়া হয়েছিল, তা এই শান্তি শব্দটিই। ফলে পুরো বাক্যটি 'আমি রেখে দিয়েছি' ক্রিয়ার উপর গড়ে ওঠে, একটিমাত্র বাক্য হিসেবে। তাবারী আরও বলেন, যদি লেখা হতো 'তাকে একটি শান্তি রেখে দিয়েছি', তাও শুদ্ধ আরবি হতো — এটা তিনি একটি সম্ভাবনা হিসেবে বলেছেন, কোনো প্রচলিত কিরাআত হিসেবে নয়।"
          },
          {
            "en": "Al-Qurtubi records the reading itself: in the recitation attributed to Ibn Mas'ud, reported on al-Kisa'i's authority, the word appears as salaman, in the accusative, governed by the verb We left. On that reading the verse opens no new sentence; it completes the one before it, so the meaning becomes We left for him among later generations good praise, a peace. The reading familiar to most takes salamun as its own sentence, a direct address in Allah's voice. Ibn Mas'ud's variant folds it into Noah's inheritance instead. Both agree on what is granted; they differ only on where one sentence ends and the next begins.",
            "bn": "কুরতুবী শুধু ব্যাকরণের তত্ত্ব নয়, আসল কিরাআতও তুলে ধরেন। ইবন মাসউদের পঠনে, যা তিনি কিসায়ীর সূত্রে উদ্ধৃত করেন, শব্দটি সালামান রূপে আসে, কর্মকারকে, 'রেখে দিয়েছি' ক্রিয়ার অধীনে। এই পাঠে আয়াতটি নতুন কোনো বাক্য শুরু করে না, বরং আগের বাক্যটিকেই সম্পূর্ণ করে। অর্থ দাঁড়ায়: পরবর্তীদের মাঝে তার জন্য আমি রেখে দিয়েছি উত্তম প্রশংসা, একটি শান্তি। বেশিরভাগ পাঠকের পরিচিত পাঠে সালামুন নিজেই একটি বাক্য, আল্লাহর নিজের মুখে সরাসরি ঘোষণা। ইবন মাসউদের পাঠে তা নূহের উত্তরাধিকারের মধ্যেই জুড়ে যায়। দুটো পাঠই একই জিনিস দান করার কথা বলে। পার্থক্য শুধু এখানে, এক বাক্য কোথায় শেষ হয় আর পরেরটা কোথায় শুরু।"
          }
        ]
      },
      {
        "h": {
          "en": "Spared From Evil Mention",
          "bn": "মন্দভাবে স্মরণ থেকে মুক্তি"
        },
        "p": [
          {
            "en": "Across the three Arabic commentaries consulted here, the sense of that peace converges. At-Tabari glosses it as amanah, a security from Allah for Noah among the worlds, that no one would ever mention him with evil. Al-Muyassar renders it as aman and salamah, safety for him from being spoken of badly among later generations; instead, later generations would praise him. Al-Qurtubi's own gloss matches almost word for word: safety for him from being mentioned with evil among later generations. Three short commentaries, written independently, reach the same core idea: Noah is given protection that outlasts his life, immunity from slander for as long as he is ever spoken of again.",
            "bn": "এখানে ব্যবহৃত তিনটি আরবি তাফসীরেই শান্তি শব্দের অর্থ একই দিকে মেলে। তাবারী একে আমানাহ বলেন, বিশ্বজগতের মাঝে নূহের জন্য আল্লাহর পক্ষ থেকে এক নিশ্চয়তা, যাতে কেউ কখনো তাকে মন্দভাবে স্মরণ না করে। মুয়াসসার একে আমান ও সালামাহ বলে, পরবর্তীদের মাঝে মন্দভাবে আলোচিত হওয়া থেকে তার নিরাপত্তা। বরং, তা বলে, পরবর্তীরা তার প্রশংসাই করবে। কুরতুবীর ভাষ্য প্রায় একই রকম, পরবর্তীদের মাঝে মন্দভাবে স্মরিত হওয়া থেকে তার নিরাপত্তা। তিনটি সংক্ষিপ্ত তাফসীর, আলাদাভাবে লেখা হলেও, একই মূল কথায় পৌঁছায়। নূহকে এখানে যা দেওয়া হয়েছে, তা তার জীবনের চেয়েও দীর্ঘ এক সুরক্ষা, যতদিন তার নাম উচ্চারিত হবে ততদিনের জন্য নিন্দা থেকে মুক্তি।"
          },
          {
            "en": "This reward does not erase what preceded it. Noah endured rejection for most of a very long life, grieved over it, and finally called on his Lord when he could carry no more, the calling already named two verses earlier. He was rescued from the flood with his household; the rest were drowned. What is settled here, permanently, is not that trial but his standing afterward: a people free to say anything about him, after everything, left with nothing but a good word. The peace promised is not peace from hardship. It is peace in how the story is told once the hardship is over.",
            "bn": "এই পুরস্কার আগের ঘটনাগুলো মুছে দেয় না। নূহ দীর্ঘ জীবনের বেশিরভাগ সময় প্রত্যাখ্যান সহ্য করেছেন, তাতে কষ্ট পেয়েছেন, শেষে আর সইতে না পেরে রবের কাছে ডেকেছেন। এই ডাকার কথা দুই আয়াত আগেই বলা হয়েছে। তাকে আর তার পরিবারকে প্লাবন থেকে উদ্ধার করা হয়, বাকিরা ডুবে যায়। এখানে স্থায়ীভাবে যা নির্ধারিত হলো, তা সেই পরীক্ষা নয়, বরং তারপরের তার অবস্থান। সব কিছুর পরেও মানুষ তার সম্পর্কে যা খুশি বলতে স্বাধীন থেকেও, শেষ পর্যন্ত কেবল ভালো কথাই অবশিষ্ট রইল বলার মতো। প্রতিশ্রুত শান্তি কষ্ট থেকে মুক্তি নয়। কষ্ট শেষ হওয়ার পর তার কাহিনি যেভাবে বলা হবে, সেখানেই এই শান্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Greeted by Every Nation",
          "bn": "প্রতিটি জাতির সালাম"
        },
        "p": [
          {
            "en": "Ibn Kathir's Arabic tafsir ties this verse directly back to the one before it: what was left for Noah among later generations, he explains, was a beautiful remembrance and a good praise, and because of that, he is saluted with peace among every group and nation. The abridged English rendering of his commentary agrees almost line for line: this verse, it says, explains the extent of that honourable mention, for he is greeted with peace by every group and nation that exists. Among the worlds is not a flourish; it states the actual breadth, not one community continuing his memory, but all of them, for as long as any remain.",
            "bn": "ইবন কাসীরের আরবি তাফসীর এই আয়াতকে সরাসরি আগের আয়াতের সঙ্গে জুড়ে দেন। পরবর্তীদের মাঝে নূহের জন্য যা রেখে দেওয়া হয়েছিল, তিনি ব্যাখ্যা করেন, তা ছিল এক সুন্দর স্মরণ ও উত্তম প্রশংসা, আর সে কারণেই প্রতিটি দল ও জাতির মাঝে তার প্রতি সালাম পাঠ করা হয়। তাঁর ইংরেজি সংক্ষিপ্ত তাফসীরও প্রায় একই ভাষায় বলে, এই আয়াত সেই সম্মানজনক স্মরণের ব্যাপ্তি স্পষ্ট করে, কেননা বিদ্যমান প্রতিটি দল ও জাতি তাকে শান্তি জানায়। বিশ্বজগতের মাঝে কথাটা তাই নিছক অলংকার নয়। এটি প্রকৃত ব্যাপ্তিই বলে দেয়, একটিমাত্র জাতি নয়, বরং যতদিন কোনো জাতি অবশিষ্ট থাকবে, ততদিন সবাই তার স্মৃতি বহন করবে।"
          },
          {
            "en": "On the phrase it continues from, the English abridgment of Ibn Kathir's tafsir preserves several short answers to what exactly was left for Noah. Ibn Abbas said only that he is remembered well. Qatada and As-Suddi said Allah causes him to be praised by others without pause. Ad-Dahhak summed it up in two words: peace and praise. None of these contradicts what this verse then states outright. The earlier verse names the gift in general terms; this verse delivers its content as a direct address, in Allah's own voice, to the fact of it.",
            "bn": "আগের আয়াতের যে কথা থেকে এটি এগিয়ে যায়, সে বিষয়ে ইবন কাসীরের ইংরেজি সংক্ষিপ্ত তাফসীরে কয়েকটি ছোট জবাব সংরক্ষিত আছে, নূহের জন্য ঠিক কী রেখে দেওয়া হয়েছিল। ইবন আব্বাস শুধু বলেন, তাকে ভালোভাবে স্মরণ করা হয়। কাতাদা ও সুদ্দী বলেন, আল্লাহ তাকে অবিরাম অন্যদের মুখে প্রশংসিত রাখেন। দাহহাক দুই শব্দে সারমর্ম দেন, শান্তি ও প্রশংসা। এর কোনোটিই এই আয়াতের সরাসরি ঘোষণার বিপরীত নয়। আগের আয়াত উপহারটির নাম সাধারণভাবে বলে। এই আয়াত তার বিষয়বস্তু সরাসরি আল্লাহর নিজের কণ্ঠে ঘোষণা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of Later Generations",
          "bn": "পরবর্তীদের দুই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "On who exactly counts among those later generations, al-Qurtubi records two readings without choosing between them. One holds that the phrase means specifically the community of Muhammad, peace be upon him: it is this ummah, on this view, whose remembrance of Noah is meant. The other holds that it means every prophet who came after him, because no messenger was sent after Noah without being commanded to follow the way he was given. Al-Qurtubi names both and settles neither; the text, as he reports it, carries both readings honestly, and nothing fetched for this verse decides between them.",
            "bn": "পরবর্তীরা বলতে ঠিক কাদের বোঝানো হয়েছে, এ নিয়ে কুরতুবী দুটি পাঠ তুলে ধরেন, কোনোটিকে প্রাধান্য না দিয়ে। একটি মত বলে, এখানে নির্দিষ্টভাবে মুহাম্মাদ সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের উম্মতকেই বোঝানো হয়েছে, এই উম্মতই নূহকে স্মরণ করবে, এই মতে। অন্যমত বলে, এখানে বোঝানো হয়েছে তার পরে আগত প্রতিটি নবীকে, কারণ নূহের পরে এমন কোনো রাসূল পাঠানো হয়নি যাকে তাঁর পথ অনুসরণের নির্দেশ দেওয়া হয়নি। কুরতুবী দুটি মতই নাম ধরে তুলে ধরেন, কোনোটিকেই চূড়ান্ত বলেননি। এই আয়াতের জন্য সংগৃহীত কোনো উৎসই এ দুয়ের মধ্যে ফয়সালা দেয় না।"
          },
          {
            "en": "A separate source lands near that second reading from its own direction. Mujahid, quoted in the abridged English rendering of Ibn Kathir's tafsir on the phrase just before this verse, glosses it as an honourable mention by all the prophets specifically, not people in general. Two commentators, working from two different texts, arrive at close to the same claim: that Noah's good name is kept alive, in part, by the line of prophets who followed him. Qatada and As-Suddi's gloss, that he is praised by others without pause, fits either reading; it does not require choosing one over the other.",
            "bn": "একটি সম্পূর্ণ ভিন্ন উৎস নিজের পথে দ্বিতীয় মতের কাছাকাছি পৌঁছায়। মুজাহিদ, ইবন কাসীরের ইংরেজি সংক্ষিপ্ত তাফসীরে উদ্ধৃত হয়ে, এই আয়াতের ঠিক আগের বাক্যাংশটির ব্যাখ্যায় বলেন, তা মানুষ সাধারণভাবে নয় বরং নির্দিষ্টভাবে সকল নবীর মুখে সম্মানজনক স্মরণ বোঝায়। দুজন ভাষ্যকার, দুটো আলাদা গ্রন্থ থেকে, প্রায় একই সিদ্ধান্তে পৌঁছান। নূহের সুনাম টিকে থাকে, আংশিকভাবে হলেও, তার পরে আসা নবীদের ধারাবাহিকতার মাধ্যমে। কাতাদা ও সুদ্দীর সেই মন্তব্য, যে তাকে অবিরাম প্রশংসিত রাখা হয়, দুই পাঠের যেকোনো একটির সঙ্গেই মানানসই। এটি কোনো একটি বেছে নেওয়ার দাবি রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Was Enjoined on Noah",
          "bn": "নূহের উপর যা অবধারিত ছিল"
        },
        "p": [
          {
            "en": "The second reading points outward, to a verse confirmed directly in the mushaf and its English rendering: He has ordained for you of religion what He enjoined upon Noah, and that which We have revealed to you, and what We enjoined upon Abraham, Moses and Jesus, to establish the religion and not be divided in it. Noah's name stands first in that list, before Abraham, Moses and Jesus, and before the address to Muhammad, peace be upon him. Al-Qurtubi's second reading rests on this verse's own logic: one shared religion, running through Noah to the Messenger, with every prophet between commanded to walk the way he was first given.",
            "bn": "দ্বিতীয় পাঠটি একটি আয়াতের দিকে ইঙ্গিত করে, যা মুসহাফ ও তার অনুবাদে সরাসরি যাচাই করা যায়। তিনি তোমাদের জন্য দ্বীনের যে পথ বিধিবদ্ধ করেছেন, তা-ই তিনি নির্দেশ দিয়েছিলেন নূহকে, আর যা আমাকে মুহাম্মাদের প্রতি ওহী করা হয়েছে, আর যা নির্দেশ দিয়েছিলাম ইবরাহীম, মূসা ও ঈসাকে, যেন তোমরা দ্বীন প্রতিষ্ঠা কর আর তাতে বিভক্ত না হও। এই তালিকায় নূহের নাম সবার আগে, ইবরাহীম, মূসা, ঈসার আগে, এমনকি মুহাম্মাদ সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের প্রতি শেষ সম্বোধনের আগেও। কুরতুবীর দ্বিতীয় পাঠের দাবিটা আসলে এই আয়াতেরই যুক্তি। একই দ্বীন, নূহ থেকে শুরু করে রাসূল পর্যন্ত বয়ে চলা, মাঝে প্রতিটি নবী একই পথে চলার নির্দেশপ্রাপ্ত।"
          },
          {
            "en": "Read this way, the prophets honouring Noah is not sentiment; it is structure. Each one was enjoined the same core religion Noah received, so each one inherits reason to speak well of where it started. This does not settle whether later generations in the earlier verse means this ummah or the whole prophetic line, both readings remain, named and left open, but it explains why the second reading was ever proposed at all. A religion that traces its own basic charge back to Noah has an obvious reason to keep his name clean of anything but praise.",
            "bn": "এভাবে দেখলে, নবীদের নূহকে সম্মান করাটা নিছক আবেগ নয়, এটা কাঠামোগত। প্রত্যেকে নূহের পাওয়া একই মূল দ্বীনের নির্দেশ পেয়েছেন, তাই শুরুর বিন্দুটির প্রশংসা করার কারণ প্রত্যেকের মধ্যেই আছে। এতে অবশ্য এই প্রশ্নের ফয়সালা হয় না যে আগের আয়াতে পরবর্তীরা বলতে এই উম্মত বোঝানো হয়েছে, নাকি গোটা নবুওতের ধারা। দুটো পাঠই নাম ধরে খোলা রইল, কিন্তু এটা বুঝিয়ে দেয় কেন দ্বিতীয় পাঠটি আদৌ প্রস্তাব করা হয়েছিল। যে দ্বীন তার মূল নির্দেশের শিকড় নূহ পর্যন্ত টেনে নিয়ে যায়, তার কাছে তার নাম প্রশংসা ছাড়া আর কিছু দিয়ে কলুষিত না করার স্পষ্ট কারণ থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Phrase Wider Than the Rest",
          "bn": "সবচেয়ে প্রশস্ত এক বাক্যাংশ"
        },
        "p": [
          {
            "en": "The same four words recur through this surah like a refrain. Peace upon Abraham, nine verses later. Peace upon Moses and Harun, a little further on. Peace upon Ilyasin, further still. And peace upon the messengers, in general, near the surah's end. Each prophet's account closes on the same formula, the same word placed over a different name. Set beside each other, the pattern is plain in the mushaf itself: this surah does not merely narrate what each prophet endured; it ends every account with the same declared peace, as if the stories exist partly to arrive at that word.",
            "bn": "একই ৪টি শব্দ এই সূরা জুড়ে একটি ধুয়ার মতো ফিরে আসে। ৯ আয়াত পরে, ইবরাহীমের প্রতি শান্তি। তার কিছু পরে, মূসা ও হারুনের প্রতি শান্তি। আরেকটু এগিয়ে, ইলিয়াসীনের প্রতি শান্তি। আর সূরার শেষের দিকে, সাধারণভাবে সকল রাসূলের প্রতি শান্তি। প্রতিটি নবীর কাহিনি একই সূত্রে শেষ হয়, শুধু নামটা বদলে যায়। মুসহাফেই পাশাপাশি রাখলে প্যাটার্নটা স্পষ্ট হয়ে ওঠে। এই সূরা শুধু প্রতিটি নবীর দুর্ভোগের বর্ণনা দেয় না, প্রতিটি কাহিনি একই ঘোষিত শান্তিতেই শেষ করে, যেন কাহিনিগুলো আংশিকভাবে এই শব্দটিতে পৌঁছানোর জন্যই রয়েছে।"
          },
          {
            "en": "Only one of those five instances carries the extra phrase among the worlds. Abraham, Moses and Harun, and Ilyasin are each given peace without it; the messengers in general are given peace without it. Noah's alone reaches as wide as the text ever reaches in this refrain. Nothing fetched for this verse explains why his case alone takes the widest wording; that is left unconfirmed, and nothing here claims to know the reason. What can be stated is the plain fact of the text: of every prophet named with this formula in this surah, only Noah's peace is said to extend among the worlds.",
            "bn": "এই পাঁচটি জায়গার মধ্যে শুধু একটিতেই বিশ্বজগতের মাঝে কথাটা বাড়তি যোগ হয়েছে। ইবরাহীম, মূসা-হারুন, ইলিয়াসীন প্রত্যেককে শান্তি দেওয়া হয়েছে এই বাড়তি কথা ছাড়াই, রাসূলদের সাধারণভাবেও তাই। একমাত্র নূহের বেলাতেই এই ধুয়া যতটা প্রশস্ত হতে পারে ততটাই প্রশস্ত হয়েছে। এই আয়াতের জন্য সংগৃহীত কোনো উৎসই বলে না কেন শুধু তার বেলাতেই সবচেয়ে প্রশস্ত শব্দটি এল, এটা অনিশ্চিতই থেকে গেল, আর এখানে কোনো কারণ জানার দাবিও করা হচ্ছে না। যা নিশ্চিতভাবে বলা যায়, তা শুধু মুসহাফের সরল তথ্য। এই সূরায় এই সূত্রে নাম নেওয়া প্রতিটি নবীর মধ্যে, কেবল নূহের শান্তিই বিশ্বজগৎ পর্যন্ত বিস্তৃত বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Allah's Rule With the Excellent",
          "bn": "সৎকর্মশীলদের সাথে আল্লাহর নিয়ম"
        },
        "p": [
          {
            "en": "As-Sa'di reads the whole stretch from Noah's call to this declaration as one unit, and names the rule running underneath it. Noah asked his Lord for help against a corrupting people; Allah answered him, rescued him and his household from the great affliction, drowned the rest, and kept his descendants going, so that everyone living today descends from him. Then came the good praise that continues to later generations, and now this: peace upon him among the worlds. As-Sa'di does not treat these as separate gifts. He treats them as one outcome, arriving in stages, of the same original answered prayer.",
            "bn": "সা'দী নূহের ডাক থেকে শুরু করে এই ঘোষণা পর্যন্ত গোটা অংশটিকে একটি একক ইউনিট হিসেবে পড়েন, আর তার নিচে চলা নিয়মটা নাম ধরে বলেন। নূহ তার রবের কাছে এক বিপর্যয় সৃষ্টিকারী জাতির বিরুদ্ধে সাহায্য চেয়েছিলেন। আল্লাহ তার ডাকে সাড়া দেন, তাকে আর তার পরিবারকে মহাবিপদ থেকে উদ্ধার করেন, বাকিদের ডুবিয়ে দেন, আর তার বংশধারা অব্যাহত রাখেন, এমনভাবে যে আজ বেঁচে থাকা সবাই তারই বংশধর। এরপর এল সেই উত্তম প্রশংসা যা পরবর্তীদের মাঝে অব্যাহত থাকে, আর এখন এটি, বিশ্বজগতের মাঝে তার প্রতি শান্তি। সা'দী এগুলোকে আলাদা আলাদা উপহার হিসেবে দেখেন না। তিনি এগুলোকে একই মূল দোয়া কবুল হওয়ার ধাপে ধাপে ফলাফল হিসেবে দেখেন।"
          },
          {
            "en": "The reason he gives is the reason that matters: Noah was excellent in worshipping his Creator, and excellent in how he dealt with people, and this, writes As-Sa'di, is Allah's established way with the doers of good; He spreads praise for them in the same measure as their excellence. That is also exactly where the surah goes next: Indeed, We thus reward the doers of good. Noah's peace, on this reading, is not a reward reserved for one prophet's unusual case. It is offered as a standing rule, stated once and then named outright in the very next line.",
            "bn": "তিনি যে কারণ দেন, সেটাই আসল কথা। নূহ তার স্রষ্টার ইবাদতে উত্তম ছিলেন, আর মানুষের সঙ্গে আচরণেও উত্তম ছিলেন, আর সা'দী লেখেন, এটাই সৎকর্মশীলদের সঙ্গে আল্লাহর প্রতিষ্ঠিত নিয়ম, তিনি তাদের জন্য তাদের উৎকর্ষের পরিমাণেই প্রশংসা ছড়িয়ে দেন। সূরাও ঠিক সেই দিকেই এগোয়, নিশ্চয়ই আমি এভাবেই সৎকর্মশীলদের প্রতিদান দিয়ে থাকি। এই পাঠে নূহের শান্তি কোনো একজন নবীর ব্যতিক্রমী ঘটনার জন্য সংরক্ষিত পুরস্কার নয়। এটা একটা স্থায়ী নিয়ম হিসেবে উপস্থাপিত, একবার বলা হয়েছে আর ঠিক পরের লাইনেই তা সরাসরি নাম ধরে বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name Worth Leaving Behind",
          "bn": "রেখে যাওয়ার মতো একটি নাম"
        },
        "p": [
          {
            "en": "Strip away the names and the grammar, and one claim remains, open to anyone reading this centuries later. A good name, kept clean of evil mention for as long as it is spoken, is not bought by survival or birthright; it is earned the way As-Sa'di names it, excellence toward the One being worshipped and excellence toward the people being dealt with day to day. Noah is not praised here for having endured a flood. He is praised for what he was before the flood ever came, and the praise is what outlasts the water.",
            "bn": "নাম আর ব্যাকরণ সরিয়ে রাখলে, একটাই দাবি থেকে যায়, যা শতাব্দী পরে এটা পড়া যে কারও জন্যই প্রযোজ্য। মন্দভাবে স্মরিত না হওয়ার মতো একটা সুনাম, যতদিন তা উচ্চারিত হয় ততদিনের জন্য নির্মল থাকা একটা সুনাম, বেঁচে থাকা বা বংশপরিচয় দিয়ে কেনা যায় না। তা অর্জিত হয় ঠিক যেভাবে সা'দী বলেন, যাকে ইবাদত করা হচ্ছে তার প্রতি উৎকর্ষ, আর প্রতিদিন যাদের সঙ্গে আচরণ করা হচ্ছে তাদের প্রতিও উৎকর্ষ। নূহকে এখানে প্লাবন সহ্য করার জন্য প্রশংসা করা হচ্ছে না। তাকে প্রশংসা করা হচ্ছে প্লাবনের আগে তিনি কেমন ছিলেন তার জন্য, আর সেই প্রশংসাই পানির চেয়েও দীর্ঘজীবী।"
          },
          {
            "en": "That leaves a plainer question than any grammar point raised here. Not whether later generations means one community or all the prophets, both readings stand, honestly unresolved, but what is actually being left behind, starting now, in how one worships and how one treats the people met each day. Noah did not write his own epitaph. It was granted, verse by verse, by the One he had called on. The same ledger stays open for anyone who calls on Him the way Noah did, and means it in both directions, in worship and in dealing with others.",
            "bn": "এখানে যা রেখে যাওয়া হয়েছে তার চেয়েও সরল একটা প্রশ্ন থেকে যায়। পরবর্তীরা বলতে একটা উম্মত বোঝানো হয়েছে নাকি সব নবী, দুটো পাঠই সততার সঙ্গে খোলা থাকুক, বরং আসল প্রশ্ন হলো আজ থেকে, ইবাদতে আর প্রতিদিনের মানুষের সঙ্গে আচরণে, আসলে কী রেখে যাওয়া হচ্ছে। নূহ নিজের জন্য নিজে কোনো প্রশংসাবাক্য লেখেননি। যাকে তিনি ডেকেছিলেন, তিনিই আয়াতে আয়াতে তা দান করেছেন। একই হিসাব খোলা থাকে তার জন্যও, যে নূহের মতোই ডাকে, আর তা দুই দিকেই, ইবাদতে আর আচরণে, সত্যি অর্থে বুঝেশুনে করে।"
          }
        ]
      }
    ]
  },
  "37:88": {
    "sections": [
      {
        "h": {
          "en": "A Festival, and an Alibi",
          "bn": "উৎসব, আর একটা অজুহাত"
        },
        "p": [
          {
            "en": "Ibrahim (AS)'s people kept a yearly festival, and when the day came they invited him along. Ma'arif al-Qur'an records their reasoning: if he came and enjoyed the day, he might warm to their company and ease off his call to leave the idols. Ibrahim (AS) had a different use for the empty town their outing would leave behind. Ibn Kathir's tafsir puts his plan in one clause: he wished to be left alone with their gods, so he could break them. The festival was never the real question; the privacy it would open up was.",
            "bn": "ইবরাহীম (আঃ)-এর সম্প্রদায়ে বছরে একটা উৎসব হতো, আর সেই দিন এলে তারা তাঁকেও সঙ্গে নিতে চাইল। মাআরিফুল কুরআন এর পেছনের কারণ লিখে রাখে: তিনি সঙ্গে গেলে আর আনন্দ করলে হয়তো তাদের সাথে মিশে যাবেন, মূর্তি ছাড়ার দাওয়াত আর দেবেন না। ইবরাহীম (আঃ)-এর মনে অন্য এক পরিকল্পনা ছিল, উৎসবে গেলে যে ফাঁকা জনপদ পড়ে থাকবে তা নিয়ে। ইবন কাসীরের তাফসীরে তাঁর এই পরিকল্পনা এক বাক্যে বাঁধা: তিনি চেয়েছিলেন একা মূর্তিগুলোর কাছে থেকে সেগুলো ভেঙে ফেলতে। আসল প্রশ্ন ছিল না তিনি উৎসবে যাবেন কি না, আসল প্রশ্ন ছিল সেই একা থাকার সুযোগটা তিনি পাবেন কি না।"
          },
          {
            "en": "Refusing outright meant reopening an argument he had already had, about the very idols his people were walking out to honor. Al-Muyassar describes his glance at the stars as following his people's own custom, while he weighed an excuse for staying behind. What happens once they leave — the idols broken, the question he puts to his people — belongs to the verses just after this one; this verse holds only the look and the sentence that followed. It describes one people's idol-worship in that moment, and licenses no verdict on any community alive today.",
            "bn": "সরাসরি 'না' বললে সেই পুরোনো তর্কই আবার শুরু হতো, যে মূর্তিগুলোর সম্মানে তাঁর সম্প্রদায় উৎসবে বের হচ্ছিল, সেগুলো নিয়েই। আল-মুয়াসসার লেখে, তিনি তাদেরই প্রচলিত রীতি মেনে তারার দিকে তাকালেন, আর মনে মনে ভাবছিলেন থেকে যাওয়ার একটা অজুহাত। তারা চলে যাওয়ার পর কী ঘটল, মূর্তি ভাঙা আর নিজের সম্প্রদায়ের কাছে তাঁর প্রশ্ন ছোঁড়া, সে সব আসে এই আয়াতের ঠিক পরের আয়াতগুলোতেই; এই আয়াত শুধু তাকানো আর তার পরের বাক্যটা নিয়ে। এটা একটা নির্দিষ্ট সময়ে একটা সম্প্রদায়ের মূর্তিপূজার বর্ণনা দেয় মাত্র, আজকের কোনো জনগোষ্ঠীর বিরুদ্ধে এ থেকে কোনো রায় বেরোয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Look, Not a Glance",
          "bn": "তাকানো, উড়ো দৃষ্টি নয়"
        },
        "p": [
          {
            "en": "Fa-nazara nazratan fi-n-nujum: he cast a look into the stars. Ma'arif al-Qur'an notices the preposition the verse chooses. Arabic ordinarily says nazara ila something, looked at it; here the text says nazara fi-n-nujum, looked into the stars, phrasing used for a sustained, searching look rather than a passing one. Some commentators suggested the glance was pure accident, a man staring at the sky simply because he was preoccupied. Ma'arif argues against that on the verse's own grounds: the Qur'an narrates only what matters, and an involuntary glance would break that habit.",
            "bn": "ফানাযারা নাযরাতান ফিন নুজুম: তিনি তারকারাজির দিকে এক দৃষ্টি দিলেন। মাআরিফুল কুরআন এখানে ব্যবহৃত অব্যয়টার দিকে ইঙ্গিত করে। সাধারণত আরবীতে বলা হয় নাযারা ইলা, অর্থাৎ কোনো কিছুর দিকে তাকানো। কিন্তু এখানে বলা হয়েছে নাযারা ফিন নুজুম, তারকারাজির ভেতরে তাকানো, এমন এক প্রয়োগ যা উড়ো দৃষ্টি নয়, বরং স্থির মনোযোগ দিয়ে দেখাকে বোঝায়। কিছু মুফাসসির বলেছিলেন এই তাকানো নিছক দুর্ঘটনাবশত, মানুষ অন্যমনস্ক থাকলে এমনিতেই আকাশের দিকে চোখ চলে যায়। মাআরিফুল কুরআন কুরআনেরই রীতি দেখিয়ে এই পাঠের বিরুদ্ধে যুক্তি দেয়: কুরআন কেবল জরুরি বিষয়ই বর্ণনা করে, আর একটা অনিচ্ছাকৃত চাহনি এই রীতি ভাঙত।"
          },
          {
            "en": "Read this way, the look was not idle. Ibn Kathir's tafsir states the point plainly: Ibrahim (AS) told his people something true in itself, and they understood from it, going by what they themselves believed, that he was ill. That single sentence carries the whole argument in miniature — a true statement, aimed at a particular audience, doing a particular job. Al-Muyassar names the same move directly, calling it ta'rid, indirect speech. What that speech rested on, and how differently it has been read, is where the next sections turn.",
            "bn": "এভাবে পড়লে, এই তাকানো নিষ্ক্রিয় কিছু ছিল না। ইবন কাসীরের তাফসীর স্পষ্ট করে বলে: ইবরাহীম (আঃ) তাঁর সম্প্রদায়কে এমন কিছু বলেছিলেন যা নিজে সত্য ছিল, আর তারা নিজেদের বিশ্বাস অনুযায়ী তা থেকে বুঝে নিল যে তিনি অসুস্থ। এই একটিমাত্র বাক্যেই পুরো যুক্তিটা ছোট আকারে ধরা পড়ে, একটা সত্য কথা, নির্দিষ্ট শ্রোতার উদ্দেশে বলা, একটা নির্দিষ্ট কাজের জন্য। আল-মুয়াসসার একে সরাসরি নাম দেয় তা'রীদ বলে, অর্থাৎ ইঙ্গিতপূর্ণ কথা। এই কথা আসলে কীসের ওপর দাঁড়িয়ে ছিল, আর কতভাবে তা ব্যাখ্যা করা হয়েছে, সেটাই পরের অংশগুলোর বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Their Own Sky",
          "bn": "তাদেরই আকাশ পড়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi supplies the background the single word 'stars' assumes. He describes Ibrahim (AS)'s people as ahl ri'aya wa falaha, herders and farmers, trades that genuinely depend on watching the stars for the turn of the seasons. Reading the sky was already their own trusted science. Al-Qurtubi's own phrase for what Ibrahim (AS) did is precise: he let them understand it from that angle, and showed them, out of their own belief, an excuse for himself. Nothing he said claimed expertise in astrology; the people supplied that meaning themselves.",
            "bn": "কুরতুবী একটা পটভূমি তুলে ধরেন, যা একা 'তারকারাজি' শব্দটায় ধরা পড়ে না। তিনি ইবরাহীম (আঃ)-এর সম্প্রদায়কে বর্ণনা করেন রাখাল আর কৃষিজীবী হিসেবে, এমন দুটি পেশা যেখানে ঋতু বোঝার জন্য সত্যিই তারা দেখা লাগে। আকাশ পড়াটা তাদের নিজস্ব বিশ্বস্ত এক বিদ্যা ছিল আগে থেকেই। কুরতুবীর নিজের ভাষায় ইবরাহীম (আঃ) যা করলেন তা স্পষ্ট: তিনি তাদের সেই একই দিক থেকে বুঝতে দিলেন, আর নিজেদেরই বিশ্বাস থেকে নিজের জন্য একটা অজুহাত দেখালেন। তিনি নিজে জ্যোতিষবিদ্যার কোনো দাবি করেননি, অর্থটা সম্প্রদায় নিজেই বসিয়ে নিল।"
          },
          {
            "en": "Al-Qurtubi and at-Tabari both carry a fuller scene from Ibn Zayd. Their king sent word that the festival was the next day and Ibrahim (AS) should come. He looked at a star just then rising and said, this one never rises except with sickness upon me. The line gives the general report of 'a look at the stars' a specific shape: one star, one claim, offered to a messenger sent to fetch him. Whatever the full truth behind it, the sentence was built to be checked against the only science his people possessed.",
            "bn": "কুরতুবী আর তাবারী দুজনেই ইবনে যায়েদের থেকে আরেকটা পূর্ণাঙ্গ দৃশ্য তুলে ধরেন। তাদের রাজা খবর পাঠান যে পরদিন উৎসব, ইবরাহীম (আঃ) যেন আসেন। ঠিক তখনই উদিত হওয়া একটা তারার দিকে তাকিয়ে তিনি বললেন, এই তারাটা যখনই ওঠে তখনই আমার সঙ্গে থাকে আমার অসুখ। এই বাক্যটা 'তারার দিকে এক তাকানো' কথাটাকে একটা নির্দিষ্ট আকার দেয়: একটা তারা, তার সঙ্গে জুড়ে দেওয়া একটা দাবি, যা তাঁকে ডাকতে আসা দূতের কাছে বলা হলো। এর পেছনের পুরো সত্যিটা যা-ই হোক, বাক্যটা এমনভাবে সাজানো ছিল যেন তাঁর সম্প্রদায়ের হাতে থাকা একমাত্র বিদ্যা দিয়েই তা যাচাই করা যায়।"
          },
          {
            "en": "Al-Qurtubi records a further position from Ibn 'Abbas (RA): that knowledge of the stars had itself been prophetic knowledge, until Allah held the sun back for Yusha' bin Nun, after which it was nullified for everyone else. On this account, Ibrahim (AS)'s look was not divination borrowed from his people's error; it was insight proper to a prophet, later closed off entirely. Al-Qurtubi records the view without adopting it as the only word on the question, alongside the plainer picture of a man speaking his people's own language back to them.",
            "bn": "কুরতুবী ইবনে আব্বাস (রাঃ)-এর থেকে আরেকটা অবস্থান তুলে ধরেন: তারার জ্ঞান নিজেই এক সময় নবুওতের জ্ঞানের অংশ ছিল, যতক্ষণ না আল্লাহ ইউশা ইবনে নূনের জন্য সূর্যকে থামিয়ে রাখেন, তারপর থেকে এই জ্ঞান বাকি সবার জন্য বাতিল হয়ে যায়। এই বিবেচনায় ইবরাহীম (আঃ)-এর তাকানো তাঁর সম্প্রদায়ের ভুল বিশ্বাস থেকে ধার করা কোনো গণনা ছিল না, ছিল একজন নবীর উপযুক্ত অন্তর্দৃষ্টি, যা পরে পুরোপুরি বন্ধ হয়ে যায়। কুরতুবী এই মতটা তুলে ধরেন প্রশ্নের একমাত্র জবাব হিসেবে না নিয়েই, সেই সহজ ছবিটার পাশাপাশি, যেখানে তিনি নিছক নিজের সম্প্রদায়ের ভাষাতেই তাদের কথা ফিরিয়ে দিচ্ছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "To Ponder Is to Look",
          "bn": "ভাবাই এখানে তাকানো"
        },
        "p": [
          {
            "en": "A different line of commentary treats the phrase as an idiom rather than a report of stargazing at all. Ibn Kathir's tafsir quotes Qatada's own note on Arabic usage: al-'arabu taqulu li-man tafakkara, nazara fi-n-nujum, the Arabs say of someone deep in thought that he is looking at the stars. On this reading Ibrahim (AS) was turning over, in the only language available to describe hard thinking, how to answer a people who would not take a plain refusal.",
            "bn": "আরেকটা ধারার তাফসীর এই বাক্যটাকে তারা দেখার বর্ণনা না ধরে একটা ভাষারীতি হিসেবে পড়ে। ইবন কাসীরের তাফসীরে কাতাদার একটা ভাষাগত মন্তব্য উদ্ধৃত হয়: আরবরা গভীর চিন্তায় ডুবে থাকা মানুষ সম্পর্কে বলে, সে তারকারাজির দিকে তাকিয়ে আছে। এই পাঠ অনুযায়ী ইবরাহীম (আঃ) তখন মনে মনে ভাবছিলেন, কঠিন চিন্তার বর্ণনার জন্য প্রচলিত একমাত্র ভাষাতেই, এমন এক সম্প্রদায়কে কীভাবে জবাব দেবেন যারা সরাসরি প্রত্যাখ্যান মেনে নিত না।"
          },
          {
            "en": "Al-Qurtubi carries the same idiom from al-Hasan al-Basri, read through a grammarian's note: the grammarians al-Khalil and al-Mubarrid record that Arabs say of a man weighing a matter over and deliberating it, he looked at the stars. On al-Hasan's account Ibrahim (AS), pressed to go out, pondered what to do and arrived at a plain fact: every living thing falls ill sooner or later. I am ill, on this reading, states something true of any creature, not a claim invented for the moment.",
            "bn": "কুরতুবী একই ভাষারীতি তুলে ধরেন হাসান আল-বাসরী (রহ.)-এর থেকে, এক ব্যাকরণবিদের নোট দিয়ে: খলীল আর মুবাররিদ লেখেন, আরবরা এমন মানুষ সম্পর্কে বলে যে কোনো বিষয় নিয়ে ভাবছে আর চিন্তা করছে, সে তারকারাজির দিকে তাকিয়ে আছে। হাসান (রহ.)-এর বর্ণনায় ইবরাহীম (আঃ) যখন বের হতে চাপের মুখে পড়লেন, তখন তিনি ভাবলেন কী করবেন, আর পৌঁছালেন একটা সাধারণ সত্যে: প্রত্যেক জীবিত সত্তাই একদিন না একদিন অসুস্থ হয়। এই পাঠে আমি অসুস্থ কথাটা যেকোনো সৃষ্টির জন্যই সত্য, মুহূর্তের জন্য বানানো কোনো দাবি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Fleeing the Plague-Stricken",
          "bn": "যাকে প্লেগ-আক্রান্ত ভেবে এড়ানো"
        },
        "p": [
          {
            "en": "A third reading takes 'ill' in its most literal, physical sense. Ibn Kathir's tafsir records Sufyan's gloss on the word: saqim here means ta'un, plague-stricken, and his people were in the habit of fleeing anyone so afflicted. On this account Ibrahim (AS)'s claim was not really about the stars at all; it supplied him, through a single word, with exactly the kind of sickness that guaranteed he would be left alone, not merely excused from one outing.",
            "bn": "তৃতীয় একটা পাঠ অসুস্থ শব্দটাকে একদম আক্ষরিক, শারীরিক অর্থেই নেয়। ইবন কাসীরের তাফসীরে সুফিয়ানের একটা ব্যাখ্যা উদ্ধৃত হয়: এখানে সাকীম মানে তা'ঊন, অর্থাৎ প্লেগ-আক্রান্ত, আর তাঁর সম্প্রদায়ের অভ্যাস ছিল এমন কাউকে দেখলে পালিয়ে যাওয়া। এই বিবেচনায় ইবরাহীম (আঃ)-এর দাবিটা আসলে তারার সঙ্গে জড়িত ছিলই না, একটামাত্র শব্দ দিয়েই তিনি এমন এক অসুখের কথা বলেছিলেন যা নিশ্চিত করত তাঁকে একা রেখে যাওয়া হবে, শুধু একটা উৎসব থেকে বাদ দেওয়া নয়।"
          },
          {
            "en": "Ibn Kathir's tafsir attributes a fuller version of the same idea to Ibn 'Abbas (RA), through al-'Awfi's transmission. In this telling Ibrahim (AS) had already gone into the house of their gods when they told him to come out; he answered, I am plague-stricken, and they left him there out of fear of catching it. Read this way, the stars supplied the opening for a claim that did its real work through a different word, sickness of the kind people already knew to run from.",
            "bn": "ইবন কাসীরের তাফসীর একই ভাবনার আরেকটা পূর্ণাঙ্গ রূপ জুড়ে দেয় ইবনে আব্বাস (রাঃ)-এর থেকে, আওফীর সূত্রে। এই বর্ণনায় ইবরাহীম (আঃ) ততক্ষণে তাদের দেবতাদের ঘরে ঢুকে পড়েছিলেন, তখন তাঁকে বের হতে বলা হলো; তিনি জবাব দিলেন, আমি প্লেগ-আক্রান্ত, আর তারা সংক্রমণের ভয়ে তাঁকে সেখানেই রেখে চলে গেল। এভাবে পড়লে তারা তাঁকে কেবল একটা সূচনা দিয়েছিল, যার আসল কাজটা করেছিল অন্য একটা শব্দ, এমন অসুখ যা থেকে মানুষ আগে থেকেই পালাতে জানত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Star Rising, a Cost Borne",
          "bn": "তারা উদয়, এক মূল্য বহন"
        },
        "p": [
          {
            "en": "Ibn Kathir's tafsir records a second report through Qatada, traced to Sa'id ibn al-Musayyab: Ibrahim (AS) saw a star rise and said, I am ill; the Prophet of Allah bore a hardship for his religion. At-Tabari carries the same report in nearly the same words: a star rose, and he said it. Unlike Ibn Zayd's version, this report does not preserve the exact sentence tying the star to his sickness; it simply marks the star's rising as the moment the words were spoken, and names what the moment cost him.",
            "bn": "ইবন কাসীরের তাফসীরে দ্বিতীয় আরেকটা বর্ণনা আসে কাতাদার সূত্রে, যা সাঈদ ইবনে মুসাইয়িব পর্যন্ত পৌঁছায়: ইবরাহীম (আঃ) একটা তারা উদিত হতে দেখে বললেন, আমি অসুস্থ; আল্লাহর নবী নিজের দ্বীনের জন্য একটা কষ্ট বহন করেছিলেন। তাবারীও প্রায় একই কথায় এই বর্ণনা বহন করেন: একটা তারা উদিত হলো, আর তিনি কথাটা বললেন। ইবনে যায়েদের বর্ণনার মতো এখানে তারার সঙ্গে অসুখ জুড়ে দেওয়া নির্দিষ্ট বাক্যটা নেই; এটা শুধু তারা ওঠার মুহূর্তকেই কথাটা বলার সময় হিসেবে চিহ্নিত করে, আর বলে দেয় সেই মুহূর্তের মূল্য তাঁকে কী দিতে হয়েছিল।"
          },
          {
            "en": "A related report pushes the same word toward the future. Ibn Kathir's tafsir records that others took I am ill to mean what was still to come, the sickness that precedes death for every person. Ma'arif al-Qur'an supports this grammatically, comparing it to 39:30, where innaka mayyitun, you will die, uses the same kind of noun for a future certainty rather than a present state. On this reading too, the sentence stays true in the plainest sense: everyone now living will, in time, fall ill and die.",
            "bn": "একটা সম্পর্কিত বর্ণনা একই শব্দকে বর্তমানের বদলে ভবিষ্যতের দিকে নিয়ে যায়। ইবন কাসীরের তাফসীরে লেখা আছে, কেউ কেউ আমি অসুস্থ কথাটাকে ধরেছেন আসন্ন কিছু বলে, যে অসুখ মৃত্যুর আগে প্রতিটি মানুষের উপরই আসে। মাআরিফুল কুরআন ব্যাকরণগতভাবে এই অর্থকে সমর্থন করে, ৩৯:৩০ আয়াতের সঙ্গে তুলনা করে, যেখানে ইন্নাকা মাইয়িতুন, অর্থাৎ তুমি মরবে, একই ধরনের বিশেষ্য ব্যবহার করে বর্তমান অবস্থার বদলে ভবিষ্যতের অনিবার্যতা বোঝাতে। এই পাঠেও বাক্যটা সবচেয়ে সাদামাটা অর্থে সত্যই থেকে যায়: এখন জীবিত প্রত্যেকেই একদিন অসুস্থ হবে, তারপর মারা যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sick at the Sight of Idols",
          "bn": "মূর্তিপূজা দেখে অন্তরে পীড়া"
        },
        "p": [
          {
            "en": "A further reading moves the sickness from body to heart. Ibn Kathir's tafsir records that some understood I am ill to mean, I am sick at heart over your worship of idols besides Allah. On this account the sentence names a real condition, revulsion at what he was watching his people walk out to honor, dressed in a word his audience would take for ordinary illness. Nothing here is invented for the occasion; one word carries two different kinds of true pain at once.",
            "bn": "আরেকটা পাঠ অসুখটাকে পুরোপুরি শরীর থেকে সরিয়ে অন্তরে নিয়ে যায়। ইবন কাসীরের তাফসীরে লেখা আছে, কেউ কেউ আমি অসুস্থ কথাটার অর্থ ধরেছেন, আমার অন্তর পীড়িত তোমাদের আল্লাহ ছাড়া মূর্তিপূজা দেখে। এই বিবেচনায় বাক্যটা একটা বাস্তব অবস্থারই বর্ণনা দেয়, যে কাজের সম্মানে তাঁর সম্প্রদায় উৎসবে বের হচ্ছিল তা দেখে তাঁর ভেতরের ঘৃণা, এমন একটা শব্দে মোড়ানো যা শ্রোতারা সাধারণ অসুখ বলেই ধরে নেবে। এখানে কিছুই মুহূর্তের জন্য বানানো নয়; একটামাত্র শব্দ দিয়ে দুই রকম সত্যিকারের কষ্টকেই একসঙ্গে বহন করা হচ্ছে।"
          },
          {
            "en": "Al-Hasan al-Basri is also credited with a version of the whole scene that drops the stars altogether. Ibn Kathir's tafsir records it: when his people pressed him to join their festival, Ibrahim (AS) lay down on his back and said, I am ill, facing up toward the sky. Once they had gone, he went to their gods and broke them. Ibn Kathir attributes this to Ibn Abi Hatim. Here the look is simply where he lay facing, not a reading of the stars at all.",
            "bn": "হাসান আল-বাসরী (রহ.)-এর নামেও এই পুরো দৃশ্যের আরেকটা বর্ণনা আছে, যেখানে তারা একেবারেই নেই। ইবন কাসীরের তাফসীরে তা লেখা: সম্প্রদায় যখন উৎসবে যেতে তাঁকে চাপ দিল, ইবরাহীম (আঃ) পিঠ দিয়ে শুয়ে পড়লেন আর বললেন, আমি অসুস্থ, মুখ তুলে রাখলেন আকাশের দিকে। তারা চলে যাওয়ার পর তিনি উঠে গেলেন তাদের দেবতাদের কাছে, আর সেগুলো ভেঙে ফেললেন। ইবন কাসীর এই বর্ণনার সূত্র বলেন ইবন আবী হাতিমকে। এখানে আকাশের দিকে তাকানো মানে শুধু তিনি যেদিকে মুখ করে শুয়েছিলেন, তারকা-গণনা একদমই নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Words Called Lies",
          "bn": "মিথ্যা বলা তিনটি কথা"
        },
        "p": [
          {
            "en": "A hadith reported from Abu Hurayrah (RA) stands behind this discussion, quoted here in one collection's own wording. Sahih Muslim, hadith 2371, has the Messenger of Allah ﷺ say: Ibrahim (AS) never told a lie except three times, two for the sake of Allah — his words, I am ill, and his words, rather, the biggest of them did it [the idols, 21:63] — and the third over his wife Sarah, she is my sister. Sahih al-Bukhari, hadith 3357, carries the same report but shorter, naming only three occasions without detail.",
            "bn": "আবু হুরায়রা (রাঃ)-এর সূত্রে বর্ণিত একটা হাদিস এই পুরো আলোচনার পেছনে দাঁড়িয়ে আছে, যা এখানে তুলে ধরা হলো একটামাত্র সংকলনের নিজস্ব শব্দে। সহীহ মুসলিম, হাদিস ২৩৭১, বর্ণনা করে, রাসূলুল্লাহ ﷺ বলেছেন: ইবরাহীম (আঃ) কখনো মিথ্যা বলেননি কেবল তিনবার ছাড়া, এর দুটি ছিল আল্লাহর জন্য, তাঁর কথা আমি অসুস্থ, আর তাঁর কথা বরং এদের মধ্যে সবচেয়ে বড়টাই এ কাজ করেছে [মূর্তি নিয়ে, ২১:৬৩], আর তৃতীয়টা ছিল তাঁর স্ত্রী সারাহকে নিয়ে, সে আমার বোন। সহীহ বুখারী, হাদিস ৩৩৫৭, একই বর্ণনা আনে, তবে ছোট আকারে, শুধু তিনটি ঘটনার কথা বলে, বিস্তারিত না দিয়েই।"
          },
          {
            "en": "Ibn Kathir's tafsir adds that this report has traveled widely, carried in the Sahihs and the Sunan through multiple chains, a remark about its spread, not a grading of its own. The sentence this verse records, I am ill, is named in the hadith as the first of the three. The second, about the idols, belongs to 21:63; the third was never spoken on this occasion, a separate statement made later about Sarah. The hadith gathers three incidents from three moments of his life under one description; this verse supplies only one.",
            "bn": "ইবন কাসীরের তাফসীর বলে, এই বর্ণনা ব্যাপকভাবে ছড়িয়েছে, সহীহাইন আর সুনান গ্রন্থগুলোতে একাধিক সনদে বাহিত হয়ে, এ কথাটা তার বিস্তৃতি নিয়ে, কোনো গ্রেডিং নয়। এই আয়াতে বলা বাক্য, আমি অসুস্থ, হাদিসে তিনটির প্রথমটা হিসেবে উল্লেখ আছে। দ্বিতীয়টা, মূর্তি নিয়ে, সেটা ২১:৬৩ আয়াতের বিষয়; তৃতীয়টা এই উপলক্ষে একদমই বলা হয়নি, এটা ছিল তাঁর জীবনের আরেকটা মুহূর্তে বলা আলাদা একটা কথা, সারাহকে নিয়ে। হাদিসটা তাঁর জীবনের তিনটি আলাদা মুহূর্তের তিনটি ঘটনা এক বর্ণনার নিচে জড়ো করে; এই আয়াত তার মধ্যে একটিই তুলে ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Speech That Defends, Not Deceives",
          "bn": "যে কথা রক্ষা করে, প্রতারণা নয়"
        },
        "p": [
          {
            "en": "Ibn Kathir's tafsir does not leave the hadith's wording to stand alone; he adds his own reconciliation at once. He states plainly that this is not real, blameworthy lying at all — far from it — and that the word 'lying' is applied to it only loosely. What happened, in his own words, belongs to ma'aridh al-kalam, indirect speech that stays true while aiming the listener's understanding elsewhere, used for a legitimate religious purpose. He supports this with a separate saying: indeed in indirect speech there is latitude enough to avoid lying outright.",
            "bn": "ইবন কাসীরের তাফসীর হাদিসের শব্দকে একা ছেড়ে দেয় না; পরের বাক্যেই তিনি নিজের ব্যাখ্যা জুড়ে দেন। তিনি স্পষ্ট বলেন, এটা প্রকৃত, নিন্দনীয় মিথ্যার শ্রেণিতেই পড়ে না, একদমই না, আর 'মিথ্যা' শব্দটা এখানে কেবল শিথিলভাবে ব্যবহৃত হয়েছে। তাঁর নিজের ভাষায়, যা আসলে ঘটেছিল তা মাআরীদুল কালাম, অর্থাৎ ইঙ্গিতপূর্ণ কথা, যা সত্যই থাকে অথচ শ্রোতার বোঝাকে অন্যদিকে নিয়ে যায়, আর এখানে তা ব্যবহৃত হয়েছে একটা বৈধ ধর্মীয় উদ্দেশ্যে। তিনি এর সমর্থনে আরেকটা উক্তি আনেন: ইঙ্গিতপূর্ণ কথার মধ্যেই মিথ্যা এড়ানোর যথেষ্ট অবকাশ আছে।"
          },
          {
            "en": "Ibn Kathir's tafsir records a second report on the same subject, through Ibn Abi Hatim, reaching Abu Sa'id al-Khudri (RA) by a chain running through 'Ali ibn Zayd ibn Jud'an, weaker than the narrators behind the Abu Hurayrah (RA) report above. In it, the Prophet ﷺ is reported to have said of Ibrahim (AS)'s three sayings: none of them was anything but a defense mounted for Allah's religion. The wording points the same direction as Ibn Kathir's own reconciliation, though its chain cannot carry the same weight; both describe speech aimed at protecting a mission, not misleading.",
            "bn": "ইবন কাসীরের তাফসীরে এই একই বিষয়ে দ্বিতীয় আরেকটা বর্ণনা আসে, ইবন আবী হাতিমের সূত্রে, আবু সাঈদ আল-খুদরী (রাঃ) পর্যন্ত পৌঁছায় এমন একটা সনদে যা যায় আলী ইবনে যায়েদ ইবনে জুদআনের মধ্য দিয়ে, যিনি একটু আগে আলোচিত আবু হুরায়রা (রাঃ)-এর বর্ণনার পেছনের রাবীদের চেয়ে দুর্বল। এতে নবী ﷺ-কে উদ্ধৃত করা হয় ইবরাহীম (আঃ)-এর তিনটি কথা নিয়ে বলতে: এর কোনোটাই আল্লাহর দ্বীনের পক্ষে একটা প্রতিরক্ষা ছাড়া আর কিছু ছিল না। এই বক্তব্যটাও ইবন কাসীরের নিজের ব্যাখ্যার দিকেই ইঙ্গিত করে, যদিও এর সনদ একই ওজন বহন করতে পারে না; দুটোই এমন কথার বর্ণনা দেয় যা একটা লক্ষ্য রক্ষার জন্য বলা, প্রতারণার জন্য নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an reaches the same conclusion by a different route, naming the device tauriyah: saying something whose apparent sense differs from a further sense the speaker actually intends, the inner sense being the true one. It distinguishes this from outright falsehood and notes the ruling scholars draw from the story: tauriyah is permitted on a genuine occasion of need. Read across Ibn Kathir, al-Muyassar and Ma'arif, three tafsirs reach for three different words, ma'aridh, ta'rid, tauriyah, to describe the same thing: a true sentence, heard one way by people never owed the whole of it.",
            "bn": "মাআরিফুল কুরআন ভিন্ন পথে একই সিদ্ধান্তে পৌঁছায়, এই কৌশলটাকে নাম দেয় তাওরিয়া: এমন কিছু বলা যার বাহ্যিক অর্থ বক্তার আসল উদ্দেশ্য থেকে আলাদা দেখায়, অথচ ভেতরের অর্থটাই আসল আর সত্য। এটা একে খাঁটি মিথ্যা থেকে আলাদা করে, আর বলে দেয় এই কাহিনি থেকে আলেমরা যে বিধান টানেন তা হলো, প্রকৃত প্রয়োজনের মুহূর্তে তাওরিয়া বৈধ। ইবন কাসীর, আল-মুয়াসসার আর মাআরিফুল কুরআন, তিনটি আলাদা তাফসীর তিনটি আলাদা শব্দ বেছে নেয়, মাআরীদ, তা'রীদ, তাওরিয়া, অথচ সবগুলোই একই জিনিস বোঝায়: এমন একটা সত্য বাক্য, যা এমনভাবে সাজানো যেন তা এমন মানুষেরা একভাবে শুনুক, যাদের পুরো সত্যটা পাওয়ার অধিকারই কখনো ছিল না।"
          }
        ]
      }
    ]
  },
  "37:97": {
    "sections": [
      {
        "h": {
          "en": "From Argument to Force",
          "bn": "যুক্তি থেকে শক্তির দিকে"
        },
        "p": [
          {
            "en": "A sentence earlier, Ibrahim (AS) had asked his people a question they could not answer: do you worship what you yourselves carve, while Allah created you and all that you make (37:95 and 37:96)? At-Tabari places this verse right after that question, naming it the people's reply once his words had defeated them. Al-Qurtubi describes the same moment: they consulted among themselves about what to do with him, because he had overcome them with the argument. No one in the crowd answers the question itself. Instead, a different kind of answer is proposed, not a sentence, but a structure.",
            "bn": "এর ঠিক আগের আয়াতে ইবরাহীম (আঃ) তাঁর সম্প্রদায়কে এক প্রশ্ন করেছিলেন, যার জবাব তাদের কাছে ছিল না: তোমরা যা নিজ হাতে খোদাই কর, তারই কি উপাসনা কর, অথচ আল্লাহই সৃষ্টি করেছেন তোমাদেরকে আর তোমরা যা বানাও তাও (৩৭:৯৫ ও ৩৭:৯৬)? তাবারী এই আয়াতটিকে ঠিক সেই প্রশ্নের পরেই রাখেন, একে বলেন তাঁর কথায় হেরে যাওয়ার পর সম্প্রদায়ের জবাব। কুরতুবীও একই দৃশ্যের বর্ণনা দেন: তারা নিজেদের মধ্যে পরামর্শ করল তাঁর ব্যাপারে, কারণ যুক্তিতে তিনি তাদের হারিয়ে দিয়েছিলেন। জনতার কেউই আসল প্রশ্নের জবাব দেয় না। বরং একেবারে অন্য রকম এক জবাব প্রস্তাব করা হয়, বাক্য নয়, একটা কাঠামো।"
          },
          {
            "en": "Al-Muyassar sums up the turn in one line: when the proof stood firm against them, they resorted to force. The sequence matters here. Nothing in the record has them answering the question he had put to them; they simply abandon the ground of argument and pick up a different kind of ground instead. Their decision was not a rebuttal. It was a substitute for one, agreed upon the moment reasoning no longer served their purpose.",
            "bn": "মুয়াসসার এই মোড়টা এক বাক্যে বলে দেয়: যখন তাদের বিরুদ্ধে দলিল দাঁড়িয়ে গেল, তখন তারা শক্তির আশ্রয় নিল। ক্রমটা এখানে গুরুত্বপূর্ণ। কোনো বিবরণেই দেখা যায় না যে তারা তাঁর তোলা প্রশ্নের জবাব দিয়েছে; তারা স্রেফ যুক্তির মাঠ ছেড়ে অন্য রকম এক মাঠে নেমে পড়ে। তাদের এই সিদ্ধান্ত কোনো পাল্টা জবাব ছিল না। এটা ছিল জবাবের একটা বিকল্প, যা তারা মেনে নিয়েছিল যুক্তি যখন তাদের আর কোনো কাজে আসছিল না।"
          },
          {
            "en": "The verb used for their decision, qalu, they said, is the very same simple verb this surah has already used for Ibrahim's own words earlier in the passage, qala, he said. Where his said carried an argument no one in the crowd could refute, theirs carries only an instruction. The surah lets that contrast stand on its own, without comment, before moving straight to what the instruction demanded.",
            "bn": "তাদের সিদ্ধান্তের জন্য ব্যবহৃত ক্রিয়া, কালু, তারা বলল, একই সহজ ক্রিয়া যা এই সূরা আগেই ব্যবহার করেছে ইবরাহীম (আঃ)-এর নিজের কথার জন্য, কালা, সে বলল। তাঁর বলা কথায় ছিল এমন এক যুক্তি যার জবাব জনতার কেউ দিতে পারেনি; তাদের বলা কথায় আছে কেবল একটা নির্দেশ। সূরা এই বৈপরীত্যটাকে নিজের মতোই দাঁড়িয়ে থাকতে দেয়, কোনো মন্তব্য ছাড়াই, তারপর সরাসরি চলে যায় সেই নির্দেশ কী দাবি করেছিল তার দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Structure Shaped Like a Kiln",
          "bn": "তন্দুরের মতো এক কাঠামো"
        },
        "p": [
          {
            "en": "At-Tabari records what the structure itself looked like: they built Ibrahim (AS) something shaped like a tannur, an oven, then carried firewood to it and set it burning. The comparison is deliberate. An oven is built to concentrate heat inward rather than let it escape outward, and this is reportedly the shape his people chose for him. The command in this verse, construct for him a structure, was carried out as something closer to a furnace than an open bonfire in a field.",
            "bn": "তাবারী লেখেন, কাঠামোটা আসলে কেমন দেখতে ছিল। তারা ইবরাহীম (আঃ)-এর জন্য এমন কিছু বানাল যা দেখতে তন্দুরের মতো, অর্থাৎ রুটি সেঁকার চুলার মতো, তারপর তাতে কাঠ জোগান দিয়ে আগুন জ্বালাল। এই তুলনাটা নিছক নয়। তন্দুর এমনভাবে বানানো হয় যাতে তাপ বাইরে না গিয়ে ভেতরেই জমে থাকে, আর তাঁর সম্প্রদায় এই আকারটাই বেছে নিয়েছিল বলে জানা যায়। আয়াতের নির্দেশ, তার জন্য একটা কাঠামো তৈরি কর, বাস্তবে রূপ নিয়েছিল খোলা মাঠের আগুনের চেয়ে এক চুলা বা ভাটির মতো কিছুতে।"
          },
          {
            "en": "Al-Qurtubi preserves a report from Ibn Abbas (RA) that gives it a measurement: they built a stone wall thirty cubits high toward the sky, filled it with fire, and threw him into it. Al-Baghawi passes down a close version from Muqatil, with one more figure added: a stone wall thirty cubits high and twenty cubits wide, filled with firewood, set alight, and he was cast into it. The two reports do not contradict each other; they describe the same towering wall from two separate chains.",
            "bn": "কুরতুবী ইবনে আব্বাস (রাঃ)-এর একটি বর্ণনা রাখেন, যেখানে মাপ দেওয়া আছে: তারা পাথরের একটা দেয়াল বানাল, উচ্চতায় আকাশের দিকে ৩০ হাত, তাতে আগুন ভরে দিল, আর তাকে সেখানে ছুঁড়ে ফেলল। বাগাভী মুকাতিলের সূত্রে কাছাকাছি একটা বর্ণনা আনেন, যেখানে আরেকটা সংখ্যা যুক্ত হয়: উচ্চতায় ৩০ হাত আর প্রস্থে ২০ হাত পাথরের দেয়াল, কাঠে ভরা, আগুন জ্বালানো, আর তাকে সেখানে ফেলে দেওয়া। দুটো বর্ণনাই একে অপরের বিরোধী নয়; আলাদা দুই সনদে একই উঁচু দেয়ালের ছবি দুজনেই আঁকেন।"
          },
          {
            "en": "Al-Qurtubi also lays out the sequence in order, three steps rather than one: fill the structure with firewood, set it ablaze, then throw him into it. Read this way, the command in this verse is not one single action but a short procedure already agreed among them, each step committed to before the first spark was struck. By the time Ibrahim (AS) reached the structure, every decision about it had already been made.",
            "bn": "কুরতুবী ক্রমটাও সাজিয়ে দেন, একটা নয় বরং তিনটি ধাপে: কাঠামোটা কাঠে ভরে দাও, আগুন জ্বালিয়ে দাও, তারপর তাকে সেখানে ফেলে দাও। এভাবে দেখলে, এই আয়াতের নির্দেশ একটামাত্র কাজ নয়, বরং আগে থেকেই ঠিক করা একটা ছোট প্রক্রিয়া, যার প্রতিটা ধাপ প্রথম আগুনের ফুলকি জ্বলার আগেই স্থির হয়ে গিয়েছিল। ইবরাহীম (আঃ) যখন কাঠামোর কাছে পৌঁছান, তখন এর প্রতিটা বিষয় নিয়ে সিদ্ধান্ত আগেই নেওয়া হয়ে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Chosen for This Fire",
          "bn": "এই আগুনের জন্য বাছাই করা শব্দ"
        },
        "p": [
          {
            "en": "At-Tabari glosses the very last word of the command. Al-jahim, he writes, is what the Arabs called burning coals piled one upon another, fire stacked on fire. The Qur'an did not simply say throw him into an-nar, the fire; it chose a noun that already carries intensity inside its meaning. Whatever the structure looked like from outside, the word promises a blaze built up in layers, not a single flame that a man might hope to step past.",
            "bn": "তাবারী আয়াতের শেষ শব্দটা নিয়ে ব্যাখ্যা দেন। জাহীম মানে, তিনি লেখেন, আরবরা যাকে বলত একের পর এক জমে থাকা জ্বলন্ত কয়লা, আগুনের উপর আগুন। কুরআন এখানে সাদামাটা 'আন-নার', অর্থাৎ আগুন, শব্দটা বলেনি; এমন একটা শব্দ বেছেছে যার ভেতরেই তীব্রতা জমা আছে। কাঠামোটা বাইরে থেকে যেমনই দেখাক, শব্দটা স্তরে স্তরে গড়ে ওঠা এক লেলিহান আগুনের প্রতিশ্রুতি দেয়, এমন কোনো একটা শিখা নয় যা পাশ কাটিয়ে পার হওয়ার আশা করা যায়।"
          },
          {
            "en": "Al-Baghawi defines the same word more briefly: al-jahim is the greatest part of the fire. As-Sa'di's tafsir adds why the structure had to stand so high: they built it raised up and kindled the fire inside it, so that the flame would gather its full force before he was ever thrown in. Three commentators, reading the one word and the one command, arrive at the same picture: nothing casual, nothing makeshift, a fire deliberately built to its highest pitch.",
            "bn": "বাগাভী একই শব্দের সংজ্ঞা দেন আরও ছোট করে: জাহীম মানে আগুনের সবচেয়ে বড় অংশ। সা'দীর তাফসীর যুক্ত করে কেন কাঠামোটা এত উঁচু হতে হয়েছিল: তারা তা উঁচু করে বানাল আর ভেতরে আগুন জ্বালাল, যাতে তাঁকে ফেলার আগেই আগুন তার পূর্ণ তেজ পেয়ে যায়। একটা শব্দ আর একটা নির্দেশ নিয়ে তিনজন তাফসীরকার পড়েন, আর সবাই একই ছবিতে পৌঁছান: এখানে কোনো সাদামাটা বা আলগা ব্যবস্থা নয়, বরং এমন আগুন যা ইচ্ছাকৃতভাবে তার চূড়ান্ত তীব্রতায় নিয়ে যাওয়া হয়েছে।"
          },
          {
            "en": "The accumulation is worth noticing as a whole. A structure shaped like an oven, raised high, filled with firewood, and named with a word for fire stacked on fire: every detail these commentators record points toward excess rather than plain execution. A people who had lost an argument chose not just to silence the man who had beaten them, but to do it in the most forceful way their imagination could build.",
            "bn": "এই সব বিবরণ একসঙ্গে দেখাটাও গুরুত্বপূর্ণ। চুলার মতো আকারের একটা কাঠামো, উঁচু করে বানানো, কাঠে ভরা, আর এমন এক শব্দে নামাঙ্কিত যার অর্থ আগুনের উপর আগুন স্তর করে রাখা, এই তাফসীরকারদের লেখা প্রতিটা খুঁটিনাটিই নিছক কার্যকর করার চেয়ে বাড়াবাড়ির দিকে ইঙ্গিত করে। যে সম্প্রদায় তর্কে হেরে গিয়েছিল, তারা বেছে নিল এমন এক পথ, যেখানে কেবল তাদের হারানো মানুষটাকে থামানো নয়, বরং তাদের কল্পনায় যতটা সম্ভব সবচেয়ে কঠোরভাবে তা করাটাই লক্ষ্য হয়ে উঠল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Fire Pointing Back to Itself",
          "bn": "নিজের দিকে ফিরে তাকানো আগুন"
        },
        "p": [
          {
            "en": "Al-Qurtubi makes one more observation about the same word, this time about its grammar rather than its root. The alif and lam that open al-jahim, the definite article, work here as what he calls kinaya, a pointing-back reference. The meaning, he says, is into its jahim, that is, into the fierce fire of that particular structure. The definite article does not announce some brand-new thing called jahim; it reaches back to the very blaze the previous clause has just finished describing.",
            "bn": "কুরতুবী একই শব্দ নিয়ে আরেকটা পর্যবেক্ষণ দেন, এবার মূল অর্থ নিয়ে নয়, ব্যাকরণ নিয়ে। জাহীম শব্দের শুরুর 'আল', অর্থাৎ নির্দিষ্টতা বোঝানো অব্যয়টা, এখানে কাজ করে তিনি যাকে বলেন কিনায়া, মানে পেছনের দিকে ইঙ্গিত করা এক প্রয়োগ হিসেবে। অর্থ দাঁড়ায়, তার জাহীমে, অর্থাৎ ওই নির্দিষ্ট কাঠামোর তীব্র আগুনের মধ্যে। এই নির্দিষ্টতা বোঝানো অব্যয়টা কোনো নতুন কিছুর ঘোষণা দেয় না; এটা পেছনে ফিরে ইঙ্গিত করে সেই আগুনের দিকেই, যার বর্ণনা ঠিক আগের বাক্যেই শেষ হয়েছে।"
          },
          {
            "en": "The distinction matters beyond grammar. This same surah uses al-jahim again for the Hellfire of the Hereafter: in 37:55, a believer in Paradise looks and sees a former companion in the midst of it. Al-Qurtubi's kinaya reading keeps this verse, 37:97, from being read as a claim that the furnace his people built in this world was that very Hellfire itself. It names a fire fierce enough to deserve the same word, built by a particular people against a particular man, not a merger of this world with the next.",
            "bn": "এই পার্থক্যটা শুধু ব্যাকরণের বিষয় নয়। এই সূরাই আবার জাহীম শব্দটা ব্যবহার করে আখিরাতের জাহান্নাম বোঝাতে: ৩৭:৫৫ আয়াতে, জান্নাতের একজন মুমিন তাকিয়ে দেখেন তাঁর পুরনো এক সঙ্গীকে, জাহান্নামের মাঝখানে। কুরতুবীর এই কিনায়া-ব্যাখ্যা এই আয়াতটিকে, ৩৭:৯৭-কে, এমনভাবে পড়তে দেয় না যেন এটা বলছে, তাঁর সম্প্রদায় দুনিয়ায় যে চুলা বানিয়েছিল তা সেই আখিরাতের জাহান্নামই। এটা এমন এক আগুনের কথা বলে যা এই নাম পাওয়ার যোগ্য ছিল তীব্রতায়, একটা নির্দিষ্ট সম্প্রদায় একটা নির্দিষ্ট মানুষের বিরুদ্ধে বানিয়েছিল, দুনিয়া আর আখিরাতের মিলন নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Seven Words Inside the Flames",
          "bn": "আগুনের ভেতরে বলা কথা"
        },
        "p": [
          {
            "en": "What was said at the exact moment the command in this verse was carried out is preserved in Sahih al-Bukhari 4563, narrated from Ibn Abbas (RA): Hasbuna Allahu wa ni'ma al-wakil, Allah is sufficient for us and He is the best Disposer of affairs, was said by Ibrahim when he was thrown into the fire. The hadith gives no surrounding detail beyond that one fact: the sentence, and the moment it was spoken.",
            "bn": "এই আয়াতের নির্দেশ যে মুহূর্তে কার্যকর হলো, তখন কী বলা হয়েছিল তা সংরক্ষিত আছে সহীহ বুখারীর ৪৫৬৩ নম্বর হাদীসে, ইবনে আব্বাস (রাঃ)-এর সূত্রে: হাসবুনাল্লাহু ওয়া নি'মাল ওয়াকীল, অর্থাৎ আল্লাহই আমাদের জন্য যথেষ্ট, আর তিনিই উত্তম কর্মবিধায়ক, এই কথাটা ইবরাহীম (আঃ) বলেছিলেন যখন তাঁকে আগুনে ফেলা হয়েছিল। হাদীসে এই একটা ঘটনার বাইরে আর কোনো বিস্তারিত বিবরণ নেই, শুধু বাক্যটা আর তা বলার মুহূর্তটা।"
          },
          {
            "en": "The same hadith records a second moment for the same sentence. When Muhammad ﷺ was told that a great army had gathered against the believers, the news only increased their faith, and they answered with the identical words: Hasbuna Allahu wa ni'ma al-wakil, Allah is sufficient for us and He is the best Disposer of affairs. The hadith itself points to where that second moment is recorded, 3:173, joining a prophet facing a furnace to a community facing an army with one shared sentence.",
            "bn": "একই হাদীসে এই একই বাক্যের আরেকটা মুহূর্তও এসেছে। মুহাম্মাদ ﷺ-কে যখন বলা হলো, এক বিশাল সেনাবাহিনী জড়ো হয়েছে তোমাদের বিরুদ্ধে, তখন এই খবর বরং তাদের ঈমান বাড়িয়ে দিল, আর তারা জবাব দিল একই শব্দে: হাসবুনাল্লাহু ওয়া নি'মাল ওয়াকীল, আল্লাহই আমাদের জন্য যথেষ্ট, আর তিনিই উত্তম কর্মবিধায়ক। হাদীসটি নিজেই ইঙ্গিত করে, এই দ্বিতীয় মুহূর্তটা কোথায় লেখা আছে, ৩:১৭৩ আয়াতে, একদিকে চুলার সামনে দাঁড়ানো এক নবী, অন্যদিকে সেনাবাহিনীর সামনে দাঁড়ানো এক জামাত, দুজনকেই এক বাক্য জুড়ে দেয়।"
          },
          {
            "en": "Al-Qurtubi's own tafsir preserves a brief mention of this same moment, through a different narrator, Abdullah ibn Amr ibn al-As. Rather than blend that shorter mention with the hadith quoted above, this article keeps to one collection's wording throughout: Sahih al-Bukhari's version, as narrated from Ibn Abbas (RA), reported here whole and unmixed with any other chain or phrasing.",
            "bn": "কুরতুবীর নিজের তাফসীরেও এই একই মুহূর্তের একটা সংক্ষিপ্ত উল্লেখ আছে, তবে ভিন্ন এক বর্ণনাকারীর সূত্রে, আবদুল্লাহ ইবনে আমর ইবনুল আস। সেই ছোট উল্লেখটাকে উপরের হাদীসের সঙ্গে মিশিয়ে না দিয়ে, এই লেখা পুরোটা জুড়েই একটামাত্র সংকলনের ভাষা ধরে রাখে: সহীহ বুখারীর বর্ণনা, ইবনে আব্বাস (রাঃ)-এর সূত্রে, সম্পূর্ণ আর অবিমিশ্রভাবে, অন্য কোনো সনদ বা ভাষার সঙ্গে না মিলিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Punishment They Thought They Had Earned",
          "bn": "যা তারা শাস্তি বলে ভেবেছিল"
        },
        "p": [
          {
            "en": "As-Sa'di's tafsir names the reasoning behind the sentence itself. In his reading, the fire was jaza, a repayment, for what Ibrahim (AS) had done in breaking their idols to pieces. That is their own logic, not a verdict the verse hands down about him. The text simply records what one specific people decided their broken statues were worth: a man's life, burned inside a structure raised for exactly that purpose.",
            "bn": "সা'দীর তাফসীর এই সিদ্ধান্তের পেছনের যুক্তিটা নাম ধরে বলে দেয়। তাঁর ব্যাখ্যায়, আগুনটা ছিল জাযা, অর্থাৎ প্রতিফল, ইবরাহীম (আঃ) তাদের মূর্তি ভেঙে টুকরো টুকরো করার বদলে। এটা তাদেরই যুক্তি, তাঁর বিরুদ্ধে আয়াতের কোনো রায় নয়। আয়াতটি স্রেফ এটুকু লিপিবদ্ধ করে, একটা নির্দিষ্ট সম্প্রদায় তাদের ভাঙা মূর্তিগুলোর দাম কী ঠিক করেছিল: একজন মানুষের জীবন, এমন এক কাঠামোর ভেতরে পুড়িয়ে, যা বানানোই হয়েছিল ঠিক এই কাজের জন্য।"
          },
          {
            "en": "This needs saying plainly, as every such scene in this story does. The people who built this structure and gave this command were one specific, ancient people, long gone from the earth, answerable to Allah alone for what they did. Nothing in this verse licenses hostility toward any living person or community today, however sharply a reader may feel the injustice done to Ibrahim (AS). The verse describes what the text describes, no more and no less, and stops exactly there.",
            "bn": "এটা স্পষ্ট করে বলা দরকার, এই কাহিনির প্রতিটা এমন দৃশ্যের বেলাতেই যেমন বলা হয়। যারা এই কাঠামো বানিয়েছিল আর এই নির্দেশ দিয়েছিল, তারা ছিল একটা নির্দিষ্ট, বহু আগের এক সম্প্রদায়, যারা পৃথিবী থেকে বহুকাল আগেই বিদায় নিয়েছে, আর তাদের কাজের হিসাব একমাত্র আল্লাহর কাছেই। ইবরাহীম (আঃ)-এর উপর হওয়া অন্যায়ে পাঠকের মন যত ক্ষুব্ধই হোক, এই আয়াত আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে শত্রুতার কোনো অনুমতি দেয় না। আয়াতটি যা বর্ণনা করে তা-ই বর্ণনা করে, এর বেশিও নয়, কমও নয়, আর ঠিক সেখানেই থেমে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Comes After, Not Here",
          "bn": "পরের অংশ, এখানে নয়"
        },
        "p": [
          {
            "en": "A detail many readers already know belongs to a different verse entirely. The fire's failure to burn him, and the words cool and safe granted to it, are not part of this verse's wording; they belong to Surat Al-Anbiya, 21:69, a separate command in a separate surah. Nothing fetched for this verse states that the fire's nature changed here. What this verse itself states is only the command and its execution: build, and throw him in.",
            "bn": "অনেক পাঠকের আগে থেকেই জানা একটা বিবরণ আসলে সম্পূর্ণ আলাদা এক আয়াতের বিষয়। আগুনটা তাঁকে পোড়াতে পারল না, আর তাকে ঠান্ডা ও নিরাপদ হয়ে যাওয়ার নির্দেশ দেওয়া হলো, এই কথাগুলো এই আয়াতের ভাষায় নেই; তা আছে সূরা আল-আম্বিয়ার ২১:৬৯ আয়াতে, আলাদা সূরার আলাদা এক নির্দেশে। এই আয়াতের জন্য সংগ্রহ করা কোনো তাফসীরেই বলা হয়নি যে আগুনের স্বভাব এখানেই বদলে গিয়েছিল। এই আয়াত যা বলে তা হলো শুধু নির্দেশ আর তার কার্যকর হওয়া: কাঠামো বানানো, আর তাতে তাকে ফেলে দেওয়া।"
          },
          {
            "en": "Ibn Kathir's own tafsir on this verse gestures toward that fuller account without repeating it, noting only that what happened next had already been explained under Surat Al-Anbiya. That gesture is itself instructive. A commentator who had both accounts in front of him still kept each verse's content where the Qur'an placed it, rather than merging two surahs into one single scene. This article follows the same discipline.",
            "bn": "ইবন কাসীরের নিজের তাফসীরও এই আয়াতে সেই পূর্ণ বিবরণের দিকে ইঙ্গিত করে, তা পুনরাবৃত্তি না করেই; তিনি শুধু বলেন, এরপর যা ঘটেছিল তা সূরা আল-আম্বিয়ার আলোচনায় আগেই ব্যাখ্যা করা হয়েছে। এই ইঙ্গিতটাই শিক্ষণীয়। যে তাফসীরকারের সামনে দুটো বিবরণই ছিল, তিনিও প্রতিটা আয়াতের বিষয়বস্তু কুরআন যেখানে রেখেছে সেখানেই রাখলেন, দুই সূরাকে মিলিয়ে একটামাত্র দৃশ্য বানিয়ে ফেললেন না। এই লেখাও সেই একই নিয়ম মেনে চলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verdict Still to Come",
          "bn": "রায় তখনও আসেনি"
        },
        "p": [
          {
            "en": "This verse ends with a command carried out, not with its outcome. The very next verse states only this much: they intended a plan against him, but We made them the most debased (37:98). What that debasement looked like, and how the fire itself was dealt with, belongs to the verses that follow, not to this one, and this article leaves it there rather than borrowing the fuller account the Qur'an gives elsewhere, in Surat Al-Anbiya.",
            "bn": "এই আয়াত শেষ হয় একটা নির্দেশ কার্যকর হওয়ার মধ্য দিয়ে, তার পরিণতি দিয়ে নয়। ঠিক পরের আয়াত এতটুকুই বলে: তারা তাঁর বিরুদ্ধে একটা ষড়যন্ত্র করতে চেয়েছিল, কিন্তু আমি তাদেরকে বানিয়ে দিলাম সবচেয়ে হীন (৩৭:৯৮)। সেই হীনতা দেখতে কেমন ছিল, আর আগুনের সঙ্গে আসলে কী ঘটল, তা পরের আয়াতগুলোর বিষয়, এই আয়াতের নয়। এই লেখা সেখানেই থেমে যায়, সূরা আল-আম্বিয়ায় কুরআন অন্যত্র যে পূর্ণ বিবরণ দিয়েছে তা এখানে টেনে না এনে।"
          },
          {
            "en": "What this verse leaves fixed is the shape of the choice itself. A people who could not answer a question chose instead to answer with a wall, with firewood, and with a fire named for its own intensity. Whether that choice worked is a question the Qur'an answers one verse later, and the answer given there belongs to that verse, read on its own terms, in its own place.",
            "bn": "এই আয়াত যা স্থির করে রাখে তা হলো সিদ্ধান্তটার ধরন। যে সম্প্রদায় একটা প্রশ্নের জবাব দিতে পারেনি, তারা বেছে নিল দেয়াল, কাঠ আর নিজের তীব্রতার জন্যই নামাঙ্কিত এক আগুন দিয়ে জবাব দেওয়ার পথ। সেই সিদ্ধান্ত আসলে কাজ করেছিল কি না, তার জবাব কুরআন দেয় ঠিক পরের আয়াতেই, আর সেই জবাব সেই আয়াতেরই বিষয়, তার নিজের জায়গায়, তার নিজের ভাষাতেই পড়তে হবে।"
          },
          {
            "en": "Read against the two verses it sits between, this one draws a single, sharp line. On one side stood an argument that had already been won; on the other stood a wall, firewood, and a fire picked out for its own intensity. The next verse records only which side was proved right in the end, and it is worth noticing that the proving itself belonged to Allah, not to either party's own strength.",
            "bn": "এই আয়াত যে দুটি আয়াতের মাঝখানে বসে আছে, তাদের সঙ্গে মিলিয়ে পড়লে একটা স্পষ্ট রেখা বোঝা যায়। এক পক্ষে ছিল এমন এক যুক্তি, যা আগেই জিতে গিয়েছিল; অন্য পক্ষে ছিল দেয়াল, কাঠ, আর নিজের তীব্রতার জন্যই বাছাই করা এক আগুন। পরের আয়াত শুধু এটুকু লিপিবদ্ধ করে, শেষে কোন পক্ষ সঠিক প্রমাণিত হলো, আর এটা খেয়াল করার মতো বিষয় যে, এই প্রমাণ করাটা আল্লাহর কাজ ছিল, কোনো পক্ষের নিজের শক্তির ফল নয়।"
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
  },
  "37:105": {
    "sections": [
      {
        "h": {
          "en": "A Call That Finishes a Sentence",
          "bn": "যে ডাক বাক্যটি শেষ করে"
        },
        "p": [
          {
            "en": "The previous verse ends mid-call: We called to him, O Ibrahim (37:104), and the sentence does not complete until this one picks it up. Al-Muyassar places the whole scene in what it calls a critical situation, and has the voice tell Ibrahim (AS): you have done what you were commanded, and you have fulfilled your vision. As-Sa'di describes the same instant as a distressing state and an astonishing matter, the moment the knife was already near the boy's throat. Neither commentator treats the call as an interruption of something unfinished; both treat it as the completion of something that had, in every way that mattered, already happened.",
            "bn": "আগের আয়াতটি শেষ হয় অর্ধেক ডাকে: আমি তাকে ডাক দিলাম, হে ইবরাহীম (৩৭:১০৪), আর বাক্যটি সম্পূর্ণ হয় এই আয়াতে এসে। মুয়াসসার পুরো দৃশ্যটিকে রাখে এক কঠিন পরিস্থিতির মধ্যে, আর সেই আওয়াজ ইবরাহীম (আঃ)-কে বলে: তুমি যা আদেশ করা হয়েছিল তা করে ফেলেছ, আর তোমার স্বপ্ন সত্যে পরিণত করেছ। সাদী একই মুহূর্তকে বলেন এক উদ্বেগজনক অবস্থা আর বিস্ময়কর ব্যাপার, যখন ছুরি আগেই ছেলের গলার কাছে পৌঁছে গিয়েছিল। দুই তাফসীরকারের কেউই ডাকটিকে কোনো অসম্পূর্ণ কাজের মাঝে থামিয়ে দেওয়া বলে দেখান না; দুজনেই দেখান এমন কিছুর সমাপ্তি, যা গুরুত্বপূর্ণ সব দিক থেকে আগেই ঘটে গিয়েছিল।"
          },
          {
            "en": "At-Tabari glosses the vision itself, so the word does not float free: what We showed you in your sleep, by commanding you to slaughter your son (37:102). Sadaqta, then, is not praise for keeping a promise spoken in words; it is praise for treating a command seen asleep with the same weight as a command received awake, and moving to carry it out. The dream's content was never in doubt between Ibrahim (AS) and his Lord. What was being tested was whether he would act on it exactly as he would act on any other revelation.",
            "bn": "তাবারী 'স্বপ্ন' শব্দটিকেও আলাদা করে ব্যাখ্যা করেন, যাতে এটি শূন্যে ভাসমান না থাকে: যা তোমাকে ঘুমের মধ্যে দেখিয়েছিলাম, তোমার ছেলেকে যবেহ করার নির্দেশ দিয়ে (৩৭:১০২)। তাহলে 'সাদাকতা' মুখে দেওয়া কোনো প্রতিশ্রুতি রাখার প্রশংসা নয়; এটি এমন প্রশংসা, যা ঘুমে দেখা নির্দেশকে জাগ্রত অবস্থায় পাওয়া নির্দেশের মতোই গুরুত্ব দিয়ে তা পালনে এগিয়ে যাওয়ার জন্য দেওয়া। স্বপ্নের বিষয়বস্তু নিয়ে ইবরাহীম (আঃ) আর তাঁর প্রতিপালকের মধ্যে কোনো সন্দেহ ছিল না। পরীক্ষা ছিল তিনি তা অন্য যে কোনো ওহীর মতোই পালন করবেন কি না।"
          }
        ]
      },
      {
        "h": {
          "en": "What 'Fulfilled' Actually Praises",
          "bn": "'সম্পন্ন করা' আসলে যার প্রশংসা"
        },
        "p": [
          {
            "en": "As-Sa'di reads sadaqta in separate clauses rather than one bare word. You have done what you were commanded, he says, for you steeled your resolve upon it, and you carried out every preparatory step. Each clause names an action Ibrahim (AS) had actually finished by that point: the decision taken, the will settled, every physical step short of the last one performed in full and in order.",
            "bn": "সাদী 'সাদাকতা' শব্দটিকে একটিমাত্র শব্দ ধরে নয়, আলাদা আলাদা অংশে ব্যাখ্যা করেন। তিনি বলেন, তুমি যা আদেশ করা হয়েছিল তা করেছ, কারণ তুমি নিজের মনকে তার ওপর দৃঢ় করেছ, আর প্রতিটি প্রস্তুতিমূলক কাজ সম্পন্ন করেছ। প্রতিটি অংশই এমন এক কাজের নাম, যা ইবরাহীম (আঃ) সেই মুহূর্তের আগেই বাস্তবে শেষ করে ফেলেছিলেন: সিদ্ধান্ত নেওয়া, মন স্থির করা, শেষ কাজটি ছাড়া বাকি প্রতিটি পদক্ষেপ ক্রমানুসারে সম্পূর্ণরূপে সম্পন্ন করা।"
          },
          {
            "en": "Then as-Sa'di adds the clause that answers the obvious question. Nothing remained, he writes, except passing the knife across his throat. The command is called fulfilled one clause before the single act that never happened. That placement is the whole point: the test was never going to be graded on whether a blade crossed skin. It was graded on everything that led up to that instant, and Ibrahim (AS) had already supplied all of it when the call came.",
            "bn": "তারপর সাদী ঠিক সেই প্রশ্নের জবাব দেওয়ার মতো আরেকটি অংশ জুড়ে দেন। তিনি লেখেন, কিছুই বাকি ছিল না, শুধু ছুরিটা তাঁর গলার ওপর দিয়ে টেনে নেওয়া বাকি ছিল। যে কাজটি কখনো ঘটেইনি, তার ঠিক একটি অংশ আগেই নির্দেশটিকে সম্পন্ন বলা হয়। এই জায়গাটাই আসল কথা বলে দেয়: পরীক্ষাটি কখনোই এই শর্তে মাপা হতো না যে ছুরি চামড়া স্পর্শ করল কি না। এটি মাপা হয়েছিল সেই মুহূর্ত পর্যন্ত যা যা ঘটেছিল তার ওপর, আর ডাক আসার সময় ইবরাহীম (আঃ) তার সবটুকুই আগে থেকে দিয়ে রেখেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ram Appears, by One Report",
          "bn": "এক বর্ণনায় দুম্বার আগমন"
        },
        "p": [
          {
            "en": "Ibn Kathir preserves a longer account, reported from Ibn Abbas (RA), of the instant just before the call. The son, wearing a white shirt, is said to have asked his father to remove it first so it could serve as his shroud; as Ibrahim (AS) began to take it off, the voice came from behind him: O Ibrahim, you have fulfilled the vision. Ibrahim turned, the report says, and saw a horned, white ram. The surah does not name the son in this verse; that question belongs to a separate tiding later in the surah, at 37:112, and nothing here settles it.",
            "bn": "ইবনে কাসির ইবনে আব্বাস (রাঃ)-এর সূত্রে ডাকের ঠিক আগের মুহূর্তের একটি দীর্ঘ বর্ণনা রাখেন। বলা হয়, ছেলেটি তখন সাদা জামা পরে ছিল, আর সে তার পিতাকে বলেছিল জামাটা আগেই খুলে নিতে, যাতে তা তার কাফন হতে পারে; ইবরাহীম (আঃ) যখন তা খুলতে শুরু করেন, তখন পেছন থেকে আওয়াজ আসে: হে ইবরাহীম, তুমি স্বপ্ন সত্যে পরিণত করে ফেলেছ। বর্ণনায় বলা হয়, ইবরাহীম ঘুরে তাকান আর শিং ওয়ালা এক সাদা দুম্বা দেখতে পান। এই আয়াতে সূরাটি ছেলের নাম বলে না; তার পরিচয়ের প্রশ্ন সূরার পরের এক সুসংবাদে, ৩৭:১১২ আয়াতে আলাদাভাবে আসে, আর এখানে তার মীমাংসা হয় না।"
          },
          {
            "en": "A second report, from as-Suddi, places the stopping point differently: he said Ibrahim (AS) had already drawn the knife across his son's neck and that it did not cut at all, because a sheet of copper had been set between the blade and the skin. Ibn Kathir records both versions without choosing between them. They disagree on exactly what the father saw or felt in that last second; they agree on the timing. The call came at the furthest point reached, not a moment before it.",
            "bn": "সুদ্দির সূত্রে দ্বিতীয় একটি বর্ণনা থামার মুহূর্তটিকে আলাদাভাবে বলে: তিনি বলেন, ইবরাহীম (আঃ) তখন ছুরি ছেলের গলার ওপর দিয়ে টেনে দিয়েছিলেন, কিন্তু তা একটুও কাটেনি, কারণ ফলা আর চামড়ার মাঝে একটি তামার পাতলা পাত বসানো ছিল। ইবনে কাসির দুটো বর্ণনাই রাখেন, কোনোটিকে বেছে না নিয়ে। শেষ মুহূর্তে পিতা ঠিক কী দেখেছিলেন বা অনুভব করেছিলেন, তা নিয়ে দুই বর্ণনায় মিল নেই; সময়ের ব্যাপারে দুটোই এক জায়গায় মেলে। ডাক এসেছিল যতদূর যাওয়া সম্ভব ঠিক তার শেষ বিন্দুতে, তার আগে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where al-Baghawi Draws a Line",
          "bn": "বাগাভী যেখানে দাগ টানেন"
        },
        "p": [
          {
            "en": "Al-Baghawi marks a break most readings smooth over: the speech ends here, he writes, right after you have fulfilled the vision. What follows, indeed, We thus reward the doers of good, he treats as a new sentence rather than a continuation of the same thought. The distinction matters, because it turns the verse's last clause from a description of what had just happened to Ibrahim (AS) into a general rule stated on its own terms, one that will outlive this single story.",
            "bn": "বাগাভী এমন একটা দাগ টানেন, যা অনেক পাঠেই চোখ এড়িয়ে যায়: তিনি লেখেন, কথাটা এখানেই শেষ, অর্থাৎ 'তুমি স্বপ্ন সত্যে পরিণত করেছ' বলার পরেই। এরপর যা আসে, 'নিশ্চয়ই আমি এভাবেই সৎকর্মশীলদের প্রতিদান দিই', তাকে তিনি একই চিন্তার ধারাবাহিকতা নয়, বরং নতুন একটি বাক্য বলে ধরেন। এই পার্থক্যটা গুরুত্বপূর্ণ, কারণ এর ফলে আয়াতের শেষ অংশ ইবরাহীম (আঃ)-এর সাথে ঘটা একটি ঘটনার বর্ণনা থেকে বদলে যায় এক সাধারণ নিয়মে, যা স্বতন্ত্রভাবে বলা, আর যা এই একটিমাত্র কাহিনির চেয়ে অনেক বেশিদিন টিকে থাকবে।"
          },
          {
            "en": "Al-Baghawi then gives the new sentence its meaning: just as We pardoned Ibrahim (AS) from slaughtering his son, We reward whoever does good in obeying Us. He cites Muqatil for the same point in slightly different words: Allah rewarded him, for his good deed in obedience, with pardon from slaughtering his son. On this reading the pardon itself is the reward. The relief Ibrahim (AS) received at that exact moment becomes the pattern the Qur'an says it will repeat for every doer of good, not a one-time exception made for a prophet.",
            "bn": "তারপর বাগাভী নতুন বাক্যটির অর্থ বলে দেন: যেমন আমি ইবরাহীম (আঃ)-কে তাঁর ছেলেকে যবেহ করা থেকে মাফ করে দিয়েছি, তেমনি যে আমার আনুগত্যে সৎকাজ করে তাকে আমি প্রতিদান দিই। তিনি মুকাতিলের সূত্রেও একই কথা একটু অন্যভাবে উদ্ধৃত করেন: আল্লাহ তাঁকে তাঁর আনুগত্যের সৎকাজের প্রতিদান দিয়েছেন ছেলেকে যবেহ করা থেকে মাফ করে দিয়ে। এই পাঠে মাফ করে দেওয়াটাই আসল প্রতিদান। ইবরাহীম (আঃ) যে মুহূর্তে এই স্বস্তি পেয়েছিলেন, তা কুরআনের ভাষায় সেই নিয়মই হয়ে যায় যা প্রতিটি সৎকর্মশীলের জন্য বারবার ঘটবে, কোনো নবীর জন্য একবারের ব্যতিক্রম নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reward Already Named Elsewhere",
          "bn": "যে প্রতিদানের নাম আগেই দেওয়া আছে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the closing clause as a named mechanism rather than a vague blessing: thus We turn hardships and calamities away from whoever obeys Us, and We make for them, in their affair, relief and a way out. He draws the comparison himself, to 65:2 and 65:3: whoever fears Allah, He will make for him a way out, and will provide for him from where he does not expect. The ram that replaced the knife was not an isolated miracle on this reading; it is the same promise the Qur'an repeats elsewhere, arriving exactly when Ibrahim's (AS) obedience had nothing left to spend.",
            "bn": "ইবনে কাসির আয়াতের শেষ অংশকে একটি নির্দিষ্ট ব্যবস্থা বলে পড়েন, কোনো অস্পষ্ট দোয়া নয়: যারা আমার আনুগত্য করে, তাদের থেকে আমি এভাবেই কষ্ট ও বিপদ সরিয়ে দিই, আর তাদের বিষয়ে স্বস্তি ও উদ্ধারের পথ তৈরি করে দিই। তিনি নিজেই এর তুলনা টানেন ৬৫:২ ও ৬৫:৩ আয়াতের সাথে: যে আল্লাহকে ভয় করে, তার জন্য তিনি উদ্ধারের পথ তৈরি করে দেন, আর এমন জায়গা থেকে তাকে রিযিক দেন যা তার ধারণাতেও ছিল না। এই পাঠে ছুরির বদলে আসা দুম্বাটা কোনো বিচ্ছিন্ন মু'জিযা নয়; এটি সেই একই প্রতিশ্রুতি, যা কুরআন অন্যত্রও বলে, আর যা ঠিক তখনই এসে পৌঁছায় যখন ইবরাহীম (আঃ)-এর আনুগত্যের আর কিছুই খরচ করার বাকি ছিল না।"
          },
          {
            "en": "Ma'arif al-Qur'an states the same mechanism from the servant's side: when a servant of Allah bows before His command and is ready to give up every personal thought and feeling, Allah takes care of him, so that he remains safe from whatever could have afflicted him in this world, and the Hereafter's reward for it is written in his book of deeds. Read together, the two tafsirs make the ram almost incidental. The real exchange in this verse is between a resolve Allah tests completely and a safety Allah supplies completely; the animal is simply how that safety took visible shape on that particular day.",
            "bn": "মাআরিফুল কুরআন একই ব্যবস্থাকে বান্দার দিক থেকে বলে: আল্লাহর কোনো বান্দা যখন তাঁর নির্দেশের সামনে মাথা নত করে আর নিজের সব ভাবনা ও অনুভূতি ছেড়ে দিতে রাজি থাকে, তখন আল্লাহ তার দেখাশোনা নিজেই নেন, যাতে এই দুনিয়ায় যা তাকে বিপদে ফেলতে পারত তা থেকে সে নিরাপদ থাকে, আর আখিরাতের প্রতিদান তার আমলনামায় লিখে রাখা হয়। দুই তাফসীর একসাথে পড়লে দুম্বাটা প্রায় গৌণ হয়ে যায়। এই আয়াতের আসল বিনিময়টা হলো আল্লাহর পুরোপুরি পরীক্ষা করা দৃঢ়তা আর আল্লাহর পুরোপুরি জোগান দেওয়া নিরাপত্তার মধ্যে; পশুটা তো সেদিন সেই নিরাপত্তা যেভাবে চোখে দেখা গিয়েছিল, তারই একটা রূপ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question the Jurists Later Asked",
          "bn": "ফকীহরা পরে যে প্রশ্ন তোলেন"
        },
        "p": [
          {
            "en": "Ibn Kathir reports that a group of scholars of usul, the discipline studying how rulings are derived, cited this exact verse and story as evidence for a specific principle: that a ruling can be validly abrogated before anyone has had the chance to act on it. He states that a faction of the Mu'tazila held the opposite position. He does not settle the wider dispute between them here; he simply names it, and points to this story as the clearest case either side could point to.",
            "bn": "ইবনে কাসির জানান, উসুল শাস্ত্রের একদল আলেম, যে শাস্ত্র আলোচনা করে বিধান কীভাবে নির্ণীত হয়, এই আয়াত আর এই কাহিনিকে একটি নির্দিষ্ট নীতির প্রমাণ হিসেবে উপস্থাপন করেছেন: কোনো বিধান বাস্তবায়নের সুযোগ পাওয়ার আগেই বৈধভাবে রদ করা যায়। তিনি বলেন, মুতাযিলাদের একটি দল এর বিপরীত মত পোষণ করত। তিনি এখানে তাদের মধ্যকার বিস্তৃত মতভেদের কোনো মীমাংসা করেন না; শুধু বিষয়টি উল্লেখ করেন, আর দেখান এই কাহিনিই উভয় পক্ষের কাছে সবচেয়ে স্পষ্ট দৃষ্টান্ত হতে পারে।"
          },
          {
            "en": "His reasoning is that Allah legislated, for Ibrahim (AS), the slaughter of his son, then abrogated that ruling and turned him instead toward the ransom, before the act was ever completed. On this reading, what Allah commanded and what Allah intended were two different things from the start: the command itself was legislated only to reward Ibrahim's (AS) patience in being willing to carry it out, and his resolve to do so. The abrogation does not correct a mistake in the first command; it reveals what the first command was always for.",
            "bn": "তাঁর যুক্তি হলো, আল্লাহ ইবরাহীম (আঃ)-এর জন্য তাঁর ছেলেকে যবেহ করার বিধান দিয়েছিলেন, তারপর কাজটি সম্পন্ন হওয়ার আগেই সেই বিধান রদ করে তাকে মুক্তিপণের দিকে ফিরিয়ে দিয়েছিলেন। এই পাঠে, আল্লাহ যা আদেশ করেছিলেন আর যা উদ্দেশ্য রেখেছিলেন, শুরু থেকেই তা দুটি আলাদা বিষয় ছিল: নির্দেশটি দেওয়াই হয়েছিল শুধু ইবরাহীম (আঃ)-এর সেই ধৈর্য আর দৃঢ় সংকল্পের প্রতিদান দিতে, যা দিয়ে তিনি কাজটি করতে রাজি হয়েছিলেন। বিধান রদ করাটা প্রথম নির্দেশের কোনো ভুল সংশোধন করে না; এটি বরং দেখিয়ে দেয় প্রথম নির্দেশটি আসলে কী জন্য দেওয়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reward Widens to All",
          "bn": "প্রতিদান সবার জন্য বিস্তৃত হয়"
        },
        "p": [
          {
            "en": "At-Tabari reads the closing words as an explicit widening of the address: just as We rewarded you, O Ibrahim, for your obedience to Us, so We reward those who did good, obeyed Our command, and acted within Our pleasure. The sentence starts by speaking to one man and ends by speaking about a class of people, the doers of good, that no single story could ever exhaust. What happened at the edge of that blade becomes, in the same breath, a description of how Allah treats obedience in general.",
            "bn": "তাবারী আয়াতের শেষ কথাটিকে সম্বোধনের একটি স্পষ্ট বিস্তার বলে পড়েন: যেমন আমি তোমার আনুগত্যের প্রতিদান দিলাম, হে ইবরাহীম, তেমনি যারা সৎকাজ করে, আমার নির্দেশ মেনে নেয় আর আমার সন্তুষ্টির মধ্যে কাজ করে, তাদেরও আমি প্রতিদান দিই। বাক্যটি শুরু হয় একজনকে সম্বোধন করে, আর শেষ হয় এমন একদল মানুষের কথায়, সৎকর্মশীল, যাদের কোনো একটিমাত্র কাহিনি দিয়ে পুরো বোঝানো সম্ভব নয়। ছুরির একদম কিনারে যা ঘটেছিল, তা একই নিঃশ্বাসে পরিণত হয় আল্লাহ সাধারণভাবে আনুগত্যের সাথে কেমন আচরণ করেন তার বর্ণনায়।"
          },
          {
            "en": "Al-Qurtubi gives the reward a shape: deliverance from hardships in this world and the next. Al-Muyassar reaches the identical description from the earlier verse, saying the call itself promised Ibrahim (AS) deliverance from hardship here and in the Hereafter exactly as every doer of good is delivered. Three commentators, reading three different clauses of the same short verse, land on one picture: the reward is not a prize added afterward but a release already built into the obedience itself.",
            "bn": "কুরতুবী প্রতিদানটিকে একটা স্পষ্ট রূপ দেন: দুনিয়া আর আখিরাত দুটোতেই কষ্ট থেকে উদ্ধার। মুয়াসসার আগের আয়াত থেকে একই বর্ণনায় পৌঁছায়, বলে যে ডাকটি নিজেই ইবরাহীম (আঃ)-কে এই দুনিয়া আর আখিরাতে কষ্ট থেকে উদ্ধারের প্রতিশ্রুতি দিয়েছিল, ঠিক যেভাবে প্রতিটি সৎকর্মশীল উদ্ধার পায়। একই ছোট আয়াতের তিনটি আলাদা অংশ পড়ে তিন তাফসীরকার একটি ছবিতেই পৌঁছান: প্রতিদানটি পরে যুক্ত করা কোনো পুরস্কার নয়, বরং আনুগত্যের মধ্যেই আগে থেকে বোনা একটি মুক্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "What Being a Muhsin Costs",
          "bn": "মুহসিন হওয়ার মূল্য"
        },
        "p": [
          {
            "en": "As-Sa'di's definition of the doers of good fits what Ibrahim (AS) showed: those who, in worship, put Our pleasure ahead of their own desires. Sahih Bukhari names, from Abu Huraira, seven whom Allah will shade on the Day no shade remains but His: a just ruler; a youth raised in worship; a man whose heart is tied to the mosques; two who love each other for Allah's sake; a man who refuses a beautiful, highborn woman, saying only, I fear Allah; one who gives charity so secretly his left hand does not know what his right has given; and one who remembers Allah alone until his eyes fill with tears.",
            "bn": "সাদীর সৎকর্মশীলদের সংজ্ঞা ঠিক তাই বলে, যা ইবরাহীম (আঃ) দেখিয়েছিলেন: যারা ইবাদতে নিজেদের ইচ্ছার চেয়ে আল্লাহর সন্তুষ্টিকে আগে রাখে। সহীহ বুখারীতে আবু হুরাইরা (রাঃ)-এর সূত্রে ৭ জনের কথা আছে, যাদের আল্লাহ সেদিন নিজের ছায়ায় রাখবেন, যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না: একজন ন্যায়পরায়ণ শাসক; আল্লাহর ইবাদতে বেড়ে ওঠা একজন যুবক; যার হৃদয় মসজিদের সঙ্গে জুড়ে থাকে এমন একজন ব্যক্তি; দুজন যারা একে অপরকে কেবল আল্লাহর জন্য ভালোবাসে; রূপ আর মর্যাদাসম্পন্ন কোনো নারীর ডাকে সাড়া না দিয়ে যে বলে, আমি আল্লাহকে ভয় করি; এমন গোপনে দান করা একজন, যার ডান হাত কী দিয়েছে তা বাম হাতও জানে না; আর একা থেকে আল্লাহকে স্মরণ করা একজন, যার চোখ অশ্রুতে ভরে যায়।"
          },
          {
            "en": "Every figure on that list chooses Allah's pleasure over an appetite that was fully available to take: status, company, desire, even the quiet pull of feeling unseen and uncounted. Ibrahim's (AS) test only made the same choice larger and starker, a father's love for his own son set against a command he had been given. The hadith does not mention Ibrahim (AS) and is not drawn from this story; it is cited here as a general narration because it answers the question as-Sa'di's gloss leaves open, what putting Allah's pleasure first actually looks like across an ordinary life.",
            "bn": "তালিকার প্রতিটি মানুষ এমন এক ইচ্ছার বদলে আল্লাহর সন্তুষ্টি বেছে নেন, যা হাতের নাগালেই ছিল: মর্যাদা, সঙ্গ, কামনা, এমনকি নিজেকে অদেখা আর অগণিত মনে হওয়ার নিভৃত আকর্ষণও। ইবরাহীম (আঃ)-এর পরীক্ষা কেবল একই পছন্দকে আরও বড় আর আরও কঠিন করে দিয়েছিল, নিজের ছেলের প্রতি পিতার ভালোবাসাকে এক নির্দেশের বিপরীতে রেখে। এই হাদীসে ইবরাহীম (আঃ)-এর নাম নেই, আর এটি এই কাহিনি থেকেও আসেনি; এখানে এটি একটি সাধারণ বর্ণনা হিসেবেই আনা হলো, কারণ সাদীর ব্যাখ্যায় যে প্রশ্ন খোলা থেকে যায়, এটি তার জবাব দেয়: আল্লাহর সন্তুষ্টিকে আগে রাখা একটা সাধারণ জীবনে আসলে কেমন দেখায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Verse Does Not Settle",
          "bn": "এই আয়াত যার মীমাংসা করে না"
        },
        "p": [
          {
            "en": "One thing deserves to be said plainly here. This verse gives no one living a licence to treat a dream, or any private sense of being commanded, as grounds for harming a child or anyone else. Ibrahim's (AS) command came by revelation to a prophet, about a test, and Allah Himself stopped it before it reached completion. Whatever this story teaches, it was never a template for private decisions about other people's safety; it is the furthest, most unrepeatable edge of what obedience to revealed command can ask of a prophet, and it ends with Allah supplying the way out.",
            "bn": "এখানে একটা কথা খোলাসা করে বলা দরকার। এই আয়াত জীবিত কাউকে এই অনুমতি দেয় না যে, কোনো স্বপ্ন বা নিজের ভেতরের কোনো 'নির্দেশ অনুভব করা'-কে কোনো শিশু বা অন্য কাউকে ক্ষতি করার কারণ বানানো যাবে। ইবরাহীম (আঃ)-এর কাছে নির্দেশ এসেছিল ওহী দিয়ে, একজন নবীর ওপর, একটি পরীক্ষা হিসেবে, আর আল্লাহ নিজেই তা সম্পন্ন হওয়ার আগে থামিয়ে দিয়েছিলেন। এই কাহিনি যা-ই শিক্ষা দিক, তা কখনো অন্য কারও নিরাপত্তা সম্পর্কে ব্যক্তিগত সিদ্ধান্তের কোনো নমুনা ছিল না; এটি একজন নবীর কাছ থেকে প্রকাশিত নির্দেশের আনুগত্য যতদূর চাইতে পারে তার সবচেয়ে দূরের, অপুনরাবৃত্তিযোগ্য প্রান্ত, আর তা শেষ হয় আল্লাহর নিজ হাতে উদ্ধারের পথ দেওয়ার মধ্য দিয়ে।"
          },
          {
            "en": "What the verse does ask of its reader is smaller and still demanding: to notice how often obedience gets judged by the size of the cost actually paid, rather than by how far a person was willing to walk toward paying it. Ibrahim (AS) is praised one clause before the knife would have moved. The measure the Qur'an applies here is resolve carried to its limit, not suffering completed to its end, and that measure stays available to anyone who is ever asked to give up something they love.",
            "bn": "এই আয়াত পাঠকের কাছে যা চায়, তা ছোট, কিন্তু কম দাবিদার নয়: এটা খেয়াল করা যে, আনুগত্যকে কত বার মাপা হয় আসলে কতটা মূল্য দিতে হলো তার আকারে, অথচ মাপা উচিত ছিল সেই মূল্য দিতে একজন কতদূর হাঁটতে রাজি ছিল তার ভিত্তিতে। ছুরিটা নড়ার ঠিক একটা অংশ আগেই ইবরাহীম (আঃ)-এর প্রশংসা করা হয়। এখানে কুরআনের মাপকাঠি হলো দৃঢ়তা তার শেষ সীমা পর্যন্ত বহন করা, কষ্টকে তার শেষ বিন্দু পর্যন্ত সম্পন্ন করা নয়, আর এই মাপকাঠি সবার জন্যই খোলা থাকে, যাকেও কখনো প্রিয় কিছু ছেড়ে দিতে বলা হয়।"
          }
        ]
      }
    ]
  },
  "37:112": {
    "sections": [
      {
        "h": {
          "en": "A Second Tiding, Named",
          "bn": "নাম ধরে দ্বিতীয় সুসংবাদ"
        },
        "p": [
          {
            "en": "The passage has already closed one arc before this verse opens. The trial is called clear in 37:106, the son is ransomed with a great sacrifice in 37:107, peace is pronounced on Ibrahim (AS) by name in 37:109, and the reward for every doer of good is stated as a standing rule in 37:110. Only after all four of those lines does 37:112 turn to a second announcement: We gave him good tidings of Ishaq, a prophet from among the righteous. The sentence does not simply add a name to the story. It adds a person, a vocation, and a character together, tied into one tiding.",
            "bn": "এই আয়াতের আগেই কাহিনির একটা পর্ব শেষ হয়ে গেছে। ৩৭:১০৬ আয়াতে পরীক্ষাটিকে সুস্পষ্ট বলা হয়েছে, ৩৭:১০৭ আয়াতে পুত্রকে মহান কুরবানীর বিনিময়ে ছাড়িয়ে নেওয়া হয়েছে, ৩৭:১০৯ আয়াতে ইবরাহীম (আঃ)-এর নাম ধরে শান্তি বর্ষিত হয়েছে, আর ৩৭:১১০ আয়াতে সৎকর্মশীলদের জন্য প্রতিদানের নিয়মটি স্থায়ীভাবে বলে দেওয়া হয়েছে। এই চারটি আয়াতের পরই ৩৭:১১২ আয়াতে আসে দ্বিতীয় এক ঘোষণা: তাকে সুসংবাদ দেওয়া হলো ইসহাকের, যে ছিল সৎকর্মশীলদের অন্তর্ভুক্ত একজন নবী। বাক্যটি কাহিনিতে শুধু একটা নাম যুক্ত করে না। এটি একসাথে একজন মানুষ, একটি পরিচয় আর একটি চরিত্র তুলে ধরে, সবই একই সুসংবাদের ভেতরে।"
          },
          {
            "en": "Ibn Kathir reads the grammar closely here. He calls nabiyyan, 'a prophet,' a hal muqaddarah, a circumstantial description pointing ahead: Ishaq was not yet a prophet at the moment of the tiding, but was going to become one. The verse names a future, not only a birth. That distinction, between what Ishaq already was and what he would become, turns out to matter for everything the commentators say next, because it is exactly the point where they part ways over what this tiding is actually announcing, and about which of Ibrahim's sons.",
            "bn": "ইবন কাসীর এখানে ব্যাকরণের দিকটা খুঁটিয়ে দেখেন। 'নবীয়্যান' (একজন নবী) শব্দটিকে তিনি বলেন হাল মুকাদ্দারা, অর্থাৎ ভবিষ্যতের দিকে ইঙ্গিতবাহী এক বর্ণনা: সুসংবাদের সময় ইসহাক তখনও নবী হননি, হবেন পরে। আয়াতটি একটি ভবিষ্যতের কথা বলছে, শুধু জন্মের কথা নয়। ইসহাক তখন যা ছিলেন আর পরে যা হবেন, এই দুটোর মাঝের ফারাকটাই পরে তাফসীরকারদের মাঝে গুরুত্বপূর্ণ হয়ে ওঠে। ঠিক এখানেই তাঁরা ভিন্ন পথে যান, এই সুসংবাদ আসলে কী ঘোষণা করছে এবং ইবরাহীমের কোন পুত্রের কথা বলছে, তা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Brother Named Next",
          "bn": "নাম পাওয়া পরের ভাই"
        },
        "p": [
          {
            "en": "Ibn Kathir states his own position plainly before citing anyone else. Since the tiding of the one to be sacrificed had already come earlier in this very passage, he writes, and that son was Isma'il (AS) in his view, Allah follows it with the tiding of his brother Ishaq, as is also mentioned in Surahs Hud and al-Hijr. On this reading, the two sons are distinct from the start: one already named and sacrificed for, the other announced only now, after the ordeal is finished.",
            "bn": "ইবন কাসীর অন্য কারও মত টানার আগেই নিজের অবস্থান স্পষ্ট করে দেন। তিনি লেখেন, যবেহ করার জন্য নির্ধারিত সন্তানের সুসংবাদ এই অংশেই আগে এসে গেছে, আর তাঁর মতে সে সন্তান ছিলেন ইসমাঈল (আঃ)। তাই আল্লাহ তার পরপরই তাঁর ভাই ইসহাকের সুসংবাদ উল্লেখ করেন, যেমনটি হুদ ও হিজর সূরাতেও এসেছে। এই পাঠ অনুযায়ী দুই ভাই শুরু থেকেই আলাদা: একজনের নাম আগেই এসেছে আর তাঁকে নিয়েই কুরবানীর ঘটনা, অন্যজনের কথা আসে পরীক্ষা শেষ হওয়ার পরে, এখন।"
          },
          {
            "en": "That logic extends naturally to what follows in the passage. If Ishaq is a second, later son, then his personal history can only begin after his brother's great sacrifice closes, and his prophethood, mentioned here for the first time, becomes something still ahead of him rather than something already underway. Nothing in Ibn Kathir's reading needs a ransomed Ishaq; his sacrifice narrative already has its son, and this verse simply opens the next chapter of the same family.",
            "bn": "এই যুক্তিটাই আয়াতের পরের অংশের সঙ্গে স্বাভাবিকভাবে মিলে যায়। ইসহাক যদি পরের, পৃথক এক সন্তান হন, তবে তাঁর নিজের কাহিনি শুরু হয় তাঁর ভাইয়ের মহান কুরবানীর অধ্যায় শেষ হওয়ার পরেই, আর এখানে প্রথমবার উল্লেখ করা তাঁর নবুওয়তও তখনও সামনে অপেক্ষায়, চলমান কিছু নয়। ইবন কাসীরের এই পাঠে কুরবানীর সন্তান হিসেবে ইসহাককে লাগেই না; তাঁর কুরবানীর কাহিনিতে আগে থেকেই একজন সন্তান আছে, আর এই আয়াত স্রেফ একই পরিবারের পরের অধ্যায় খুলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ibn Abbas Names the Other",
          "bn": "ইবন আব্বাসের ভিন্ন নাম"
        },
        "p": [
          {
            "en": "At-Tabari opens his own entry on this verse in the same neutral key, calling the tiding Allah's reward to Ibrahim (AS) for his good deeds and his obedience, without yet naming a son. But the chains he strings together after that opening raise the very question Ibn Kathir had just settled in his own voice. One chain, through Ya'qub, Ibn Ulayyah, and Dawud, from Ikrimah, from Ibn Abbas, states the matter bluntly: al-dhabihu Ishaq, the one to be sacrificed is Ishaq. The same statement, through a parallel chain, sits inside Ibn Kathir's own entry on this verse, a few lines after he has told the reader the opposite.",
            "bn": "তাবারী এই আয়াতের আলোচনা শুরু করেন একইরকম নিরপেক্ষ সুরে, সুসংবাদটিকে বলেন ইবরাহীম (আঃ)-এর সৎকর্ম ও আনুগত্যের প্রতিদান, তখনও কোনো সন্তানের নাম না বলেই। কিন্তু এর পরেই তিনি যে সনদগুলো একের পর এক তুলে ধরেন, তাতে উঠে আসে ঠিক সেই প্রশ্ন, যা ইবন কাসীর নিজের ভাষায় একটু আগেই মিটিয়ে দিয়েছিলেন। একটি সনদ, যা ইয়াকুব, ইবন উলাইয়া ও দাউদের মধ্য দিয়ে ইকরিমা থেকে ইবন আব্বাস পর্যন্ত পৌঁছায়, স্পষ্ট ভাষায় বলে: আদ-দাবীহু ইসহাক, যবেহ করার জন্য নির্ধারিত সন্তান ইসহাক। একই বক্তব্য, আরেকটি সমান্তরাল সনদে, ইবন কাসীরের নিজের এই আয়াতের আলোচনার ভেতরেই বসে আছে, ঠিক তার বিপরীত কথা বলার কয়েক লাইন পরেই।"
          },
          {
            "en": "The same chain carries a further detail. Ibn Abbas, as reported here, is said to have explained the tiding as being of rank rather than of existence: bushshira bi-nubuwwatihi, he was given tidings of his prophethood specifically. He is reported to have supported that with a parallel from Surah Maryam, where Harun is called a gift to Musa as a prophet in 19:53 even though Harun was the elder brother; the gift there, Ibn Abbas reportedly said, was the rank of prophethood, not a new existence. Applied back to this verse, the same logic would mean Ishaq already existed, and the tiding only added the office.",
            "bn": "এই সনদেই আরেকটি বিবরণ পাওয়া যায়। এই বর্ণনা অনুযায়ী ইবন আব্বাস সুসংবাদটিকে অস্তিত্বের নয়, বরং মর্যাদার সুসংবাদ বলে ব্যাখ্যা করেন: বুশশিরা বিনুবুওয়াতিহি, অর্থাৎ তাঁকে বিশেষভাবে নবুওয়তের সুসংবাদ দেওয়া হয়েছিল। এই ব্যাখ্যার সমর্থনে তিনি সূরা মারইয়ামের একটি উপমা টানেন বলে বর্ণিত হয়েছে: ১৯:৫৩ আয়াতে হারূনকে মূসার জন্য নবী হিসেবে দান বলা হয়েছে, যদিও হারূন ছিলেন বড় ভাই। সেখানে যা দান করা হয়েছিল তা ছিল নবুওয়তের মর্যাদা, নতুন কোনো অস্তিত্ব নয়, এমনটাই ইবন আব্বাসের বরাতে বলা হয়। এই যুক্তি এ আয়াতে প্রয়োগ করলে বোঝায়, ইসহাক তখন থেকেই ছিলেন, আর এই সুসংবাদ যা নতুন করে দিয়েছে তা হলো কেবল পদমর্যাদা।"
          }
        ]
      },
      {
        "h": {
          "en": "One Narrator, Two Signals",
          "bn": "এক বর্ণনাকারী, দুই সংকেত"
        },
        "p": [
          {
            "en": "Not every report that reaches back to Ibn Abbas through Ikrimah agrees with itself. Ibn Kathir transmits one chain, through Ibn Abd al-Ala and al-Mutamir ibn Sulayman, from Dawud, from Ikrimah, from Ibn Abbas, that reads: he was given tidings of him as a prophet only when Allah ransomed him from the slaughter; the tiding of prophethood was not at the time of his birth. Taken at face value, that wording ties the prophethood-tiding directly to the ransom in 37:107, which would mean Ishaq himself was the one ransomed.",
            "bn": "ইকরিমার মাধ্যমে ইবন আব্বাস পর্যন্ত পৌঁছানো প্রতিটি বর্ণনা একে অপরের সঙ্গে মেলে না। ইবন কাসীর একটি সনদ উদ্ধৃত করেন, যা ইবন আবদুল আ'লা ও মুতামির ইবন সুলাইমানের মধ্য দিয়ে দাউদ, তারপর ইকরিমা হয়ে ইবন আব্বাস পর্যন্ত যায়; তাতে বলা হয়েছে, তাঁকে নবী হিসেবে সুসংবাদ দেওয়া হয়েছিল তখনই, যখন আল্লাহ তাঁকে কুরবানী থেকে মুক্তি দিয়েছিলেন। নবুওয়তের সুসংবাদ তাঁর জন্মের সময় ছিল না। কথাগুলো যেমন আছে তেমন ধরলে, এর অর্থ দাঁড়ায় নবুওয়তের সুসংবাদ সরাসরি ৩৭:১০৭ আয়াতের মুক্তিপণের সঙ্গে জড়ানো, যার মানে ইসহাকই ছিলেন সেই মুক্তিপণ পাওয়া সন্তান।"
          },
          {
            "en": "A third transmitter on the very same route tells it differently. Through Sufyan al-Thawri, from Dawud, from Ikrimah, from Ibn Abbas, Ibn Kathir also records: he was given tidings of him when he was born, and again when he was made a prophet. Al-Baghawi repeats this version too, loosely attached to the same two names. Here the prophethood-tiding is not tied to any ransom at all; it is simply the second of two separate announcements spread across Ishaq's life, with no claim about which son stood at the altar.",
            "bn": "একই পথের তৃতীয় একজন বর্ণনাকারী বিষয়টি ভিন্নভাবে বলেন। সুফিয়ান আস-সাওরী থেকে, দাউদ, ইকরিমা হয়ে ইবন আব্বাস পর্যন্ত যাওয়া এই সনদে ইবন কাসীর আরও লেখেন: তাঁকে সুসংবাদ দেওয়া হয়েছিল জন্মের সময়, আর আবার দেওয়া হয়েছিল নবী হওয়ার সময়। বাগাভীও এই বর্ণনাটি তুলে ধরেন, একই দুই নামের সূত্রে, কিছুটা শিথিলভাবে জুড়ে দিয়ে। এখানে নবুওয়তের সুসংবাদ কোনো মুক্তিপণের সঙ্গে জড়ানো নয়; এটা স্রেফ ইসহাকের জীবনে ছড়ানো দুটি আলাদা ঘোষণার দ্বিতীয়টি, কোন সন্তান কুরবানীর বেদিতে দাঁড়িয়েছিলেন তা নিয়ে কোনো দাবি ছাড়াই।"
          },
          {
            "en": "The article does not referee between these transmitters. What matters for a reader is simpler: even reports that share the same narrator chain, back to the same companion, do not agree on what that companion actually said happened, or when. A reader who wants Ibn Abbas's verdict in a single sentence will not find one here, because the sources themselves do not offer one. That is not a weakness to smooth over; it is simply what the chain of transmission preserves, gaps included, and reporting the gap plainly costs the reader less than papering over it would.",
            "bn": "এই লেখা এই বর্ণনাকারীদের মধ্যে বিচারক হয়ে বসে না। পাঠকের জন্য আসল কথা সহজ: একই সনদসূত্র, একই সাহাবীর কাছে পৌঁছেও, সেই সাহাবী আসলে কী বলেছিলেন এবং কখন বলেছিলেন তা নিয়ে একমত হয় না। যে পাঠক ইবন আব্বাসের রায় এক বাক্যে চান, তিনি তা এখানে পাবেন না, কারণ উৎসগুলো নিজেরাই তা দেয় না। এটা ঢেকে রাখার মতো কোনো দুর্বলতা নয়; বর্ণনার শৃঙ্খল যা সংরক্ষণ করেছে, ফাঁকসহই তা তেমন আছে, আর সেই ফাঁকটা সরলভাবে জানিয়ে দেওয়াই পাঠকের জন্য তা ঢেকে রাখার চেয়ে ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Baghawi's Two Camps",
          "bn": "বাগাভীর দুই পক্ষ"
        },
        "p": [
          {
            "en": "Al-Baghawi lays the two readings next to each other without picking one. Whoever holds that the one to be sacrificed was Isma'il, he writes, reads this verse as: after that story, He gave him tidings of Ishaq as a prophet, a reward for his obedience, meaning a second and separate son entirely. Whoever holds that the one to be sacrificed was Ishaq reads the identical Arabic sentence as: He gave Ibrahim tidings of Ishaq's prophethood, meaning the son he already had was now told that he would rise to that rank.",
            "bn": "বাগাভী দুই রকম পাঠকেই পাশাপাশি রাখেন, কোনোটাকে বেছে না নিয়ে। তিনি লেখেন, যে মনে করে যবেহের সন্তান ইসমাঈল ছিলেন, সে এই আয়াতকে পড়ে এভাবে: সেই কাহিনির পর, তাঁকে সুসংবাদ দেওয়া হলো ইসহাকের, একজন নবী, তাঁর আনুগত্যের প্রতিদানে; অর্থাৎ সম্পূর্ণ আলাদা, দ্বিতীয় এক সন্তান। আর যে মনে করে যবেহের সন্তান ইসহাক ছিলেন, সে একই আরবি বাক্যকে পড়ে এভাবে: ইবরাহীমকে সুসংবাদ দেওয়া হলো ইসহাকের নবুওয়তের, অর্থাৎ যে সন্তান তাঁর কাছে আগে থেকেই ছিলেন, তাঁকে এখন জানানো হলো তিনি এই মর্যাদায় উন্নীত হবেন।"
          },
          {
            "en": "He then attaches the report that the tiding came twice, at birth and at prophethood, the same detail Ibn Kathir records through a different chain, without assigning it to either camp. The effect is worth noticing on its own: two readers can hold the identical sentence in front of them and describe two different sons, because the disagreement sits one layer beneath the Arabic, in who each reader already believes Ishaq to be before reaching this verse.",
            "bn": "তারপর তিনি সেই বর্ণনাটিও জুড়ে দেন যেখানে বলা হয়েছে সুসংবাদ দুইবার এসেছিল, একবার জন্মে আর একবার নবুওয়তে, যা ইবন কাসীরও অন্য একটি সনদে লিপিবদ্ধ করেছেন; কিন্তু তিনি এটাকে কোনো পক্ষের সঙ্গেই জুড়ে দেন না। এই জায়গাটা খেয়াল করার মতো: দুই পাঠক একই বাক্যের সামনে বসে দুই আলাদা সন্তানের কথা বলতে পারেন, কারণ মতভেদটা আরবি বাক্যের নিচেই বসে আছে, প্রত্যেক পাঠক আয়াতে পৌঁছানোর আগেই ইসহাককে কে বলে বিশ্বাস করেন তার মধ্যে।"
          }
        ]
      },
      {
        "h": {
          "en": "Qurtubi's Inference, Qatada's Clock",
          "bn": "কুরতুবীর সিদ্ধান্ত, কাতাদার সময়"
        },
        "p": [
          {
            "en": "Al-Qurtubi reports the same statement from Ibn Abbas, that he was given tidings of his prophethood, and that the tiding came twice, and then draws out an inference of his own: so on this view, he writes, the one to be sacrificed is Ishaq, given tidings of his prophethood as a reward for his patience, his contentment with his Lord's command, and his submission to it. Notice the vocabulary: patience, contentment, submission to a command are exactly the words the sacrifice story itself uses, and Qurtubi is the one who draws them back into this verse, not Ibn Abbas's report by itself.",
            "bn": "কুরতুবীও ইবন আব্বাস থেকে একই বক্তব্য তুলে ধরেন, যে তাঁকে নবুওয়তের সুসংবাদ দেওয়া হয়েছিল, এবং সুসংবাদ দুইবার এসেছিল; তারপর তিনি নিজের একটা সিদ্ধান্ত টানেন: তিনি লেখেন, এই মত অনুযায়ী যবেহের সন্তান ইসহাক, যাঁকে তাঁর ধৈর্য, তাঁর রবের আদেশে সন্তুষ্টি, আর তাঁর আনুগত্যের প্রতিদানে নবুওয়তের সুসংবাদ দেওয়া হয়েছিল। শব্দচয়নটা খেয়াল করার মতো: ধৈর্য, সন্তুষ্টি, আদেশের কাছে আনুগত্য, এই শব্দগুলোই কুরবানীর কাহিনিতে ব্যবহৃত হয়, আর কুরতুবীই এই শব্দগুলো টেনে এই আয়াতে এনে বসান, নিজে থেকেই ইবন আব্বাসের বর্ণনা তা করে না।"
          },
          {
            "en": "Qatada's report, which both at-Tabari and Ibn Kathir transmit in almost identical wording, adds only a marker of time: the tiding of Ishaq's prophethood came after what had happened regarding Ibrahim's own affair, when he gave of himself generously to Allah. That phrase points at the ordeal of the sacrifice without naming which son it concerned. It fits comfortably inside either camp: a chronology note, not a verdict. It can anchor the two-sons timeline stated earlier just as easily as Qurtubi's single-son inference given just before it; the wording itself commits to neither.",
            "bn": "কাতাদার বর্ণনা, যা তাবারী ও ইবন কাসীর দুজনেই প্রায় একই শব্দে উদ্ধৃত করেছেন, কেবল একটা সময়ের চিহ্ন যুক্ত করে: ইসহাকের নবুওয়তের সুসংবাদ এসেছিল ইবরাহীমের নিজের বিষয়ে যা ঘটেছিল তার পরে, যখন তিনি নিজেকে আল্লাহর জন্য উদারভাবে উৎসর্গ করেছিলেন। এই কথাটা কুরবানীর পরীক্ষার দিকেই ইঙ্গিত করে, কোন সন্তানকে নিয়ে তা হয়েছিল তা না বলে। এটা দুই পক্ষের কোনোটার সঙ্গেই বিরোধ করে না: এটা সময়ের একটা টীকা, কোনো রায় নয়। আগে বলা দুই-সন্তানের সময়ক্রম আর কুরতুবীর একক-সন্তানের সিদ্ধান্ত, দুটোরই ভিত্তি হতে পারে এই কথাটা; বাক্যটি নিজে কোনো পক্ষেই প্রতিশ্রুতিবদ্ধ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di: Tidings Folded Together",
          "bn": "সাদী: একসাথে জড়ানো সুসংবাদ"
        },
        "p": [
          {
            "en": "As-Sa'di does not enter the dispute over which son was bound at all. He calls this the second tiding regarding Ishaq, and reads the single sentence as compressing several gifts into one: news of his existence and his lasting presence, news of descendants still to come through him, and news of his standing as a prophet among the righteous. Multiple tidings, he writes, folded into what looks like one simple line. Where Ibn Kathir reads the verse forward, toward Ishaq's future rank, as-Sa'di reads it as already carrying his whole future compressed into the present tense of a single tiding.",
            "bn": "সাদী যবেহের সন্তান কে ছিলেন, এই বিতর্কে একদমই ঢোকেন না। তিনি এটাকে বলেন ইসহাক বিষয়ে দ্বিতীয় সুসংবাদ, আর একটিমাত্র বাক্যের মধ্যে কয়েকটি নিয়ামতকে গোটানো দেখেন: তাঁর অস্তিত্ব আর টিকে থাকার সংবাদ, তাঁর মাধ্যমে আসতে থাকা বংশধরদের সংবাদ, আর সৎকর্মশীলদের অন্তর্ভুক্ত একজন নবী হিসেবে তাঁর মর্যাদার সংবাদ। একাধিক সুসংবাদ, তিনি লেখেন, একটিমাত্র সরল পঙক্তির মধ্যে গোটানো। ইবন কাসীর যেখানে আয়াতটিকে সামনের দিকে পড়েন, ইসহাকের ভবিষ্যৎ মর্যাদার দিকে, সাদী সেটিকে পড়েন যেন তাঁর পুরো ভবিষ্যৎ একটিমাত্র সুসংবাদের বর্তমান কালেই গোটানো আছে।"
          },
          {
            "en": "Al-Muyassar's brief gloss agrees with the reward-logic underneath that bundle without joining either side of the dispute: the tiding, it says, came as repayment for Ibrahim's patience, his contentment with his Lord's command, and his obedience to Him. That is the same trio of virtues Qurtubi used to argue for Ishaq, and here it sits attached to neither name, simply describing what the gift was for. Read together, as-Sa'di and al-Muyassar agree on what the tiding rewards even while staying silent on whom, exactly, it was a ransom for.",
            "bn": "আল-মুয়াসসারের সংক্ষিপ্ত ব্যাখ্যাও এই পুরো সংকলনের পেছনের প্রতিদানের যুক্তিটা মেনে নেয়, কিন্তু বিতর্কের কোনো পক্ষেই যোগ দেয় না: এটি বলে, সুসংবাদ এসেছিল ইবরাহীমের ধৈর্য, তাঁর রবের আদেশে সন্তুষ্টি আর তাঁর আনুগত্যের প্রতিদান হিসেবে। এই একই তিনটি গুণ কুরতুবী ব্যবহার করেছিলেন ইসহাকের পক্ষে যুক্তি দিতে, আর এখানে তা কোনো নামের সঙ্গে জোড়া নয়, স্রেফ এই নিয়ামত কেন দেওয়া হলো তা বলছে। দুজনকে একসাথে পড়লে দেখা যায়, সাদী আর আল-মুয়াসসার একমত এই সুসংবাদ কী প্রতিদান দিচ্ছে তা নিয়ে, যদিও এটা ঠিক কার মুক্তিপণ ছিল তা নিয়ে তাঁরা নীরব থাকেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What Stays Open, What Does Not",
          "bn": "যা খোলা থাকে, যা থাকে না"
        },
        "p": [
          {
            "en": "Readers who know the Bible's account of Isaac's binding may recognize this question from outside the Qur'an's own tradition. Inside that tradition, though, it is not a dispute between scriptures; it is a dispute among the earliest Muslim narrators themselves. Ibn Abbas is credited with both answers in different reports. Qatada and Ikrimah each appear inside chains that different later commentators read toward opposite conclusions. Even at-Tabari and Ibn Kathir, writing centuries later, weigh the same narrations and land in different places.",
            "bn": "যে পাঠকেরা বাইবেলে ইসহাককে বাঁধার বিবরণ জানেন, তাঁরা কুরআনের নিজস্ব ঐতিহ্যের বাইরে থেকেও এই প্রশ্নটা চিনতে পারবেন। কিন্তু এই ঐতিহ্যের ভেতরে এটা দুই ধর্মগ্রন্থের মধ্যে কোনো বিতর্ক নয়; এটা মুসলিম উম্মাহর প্রথম যুগের বর্ণনাকারীদের নিজেদের মধ্যকার এক মতভেদ। ইবন আব্বাসের নামে দুই রকম জবাবই বর্ণিত হয়েছে, ভিন্ন ভিন্ন বর্ণনায়। কাতাদা আর ইকরিমা দুজনেই এমন সনদের ভেতরে আছেন, যা পরের মুফাসসিরগণ ভিন্ন ভিন্ন দিকে পড়েছেন। এমনকি তাবারী আর ইবন কাসীরও, শত শত বছর পরে লিখেও, একই বর্ণনাগুলো ওজন করে ভিন্ন জায়গায় পৌঁছান।"
          },
          {
            "en": "What stays firmly closed, whichever camp a reader finds persuasive, are two things this piece will not do. No hadith was found attached to this verse by any tafsir consulted here, so none is reported. And nothing in this disagreement licenses treating either of Ibrahim's sons, or any people who trace their line through either one, as lesser for having been named inside a dispute they never chose to have. That guard holds whether a reader leans toward Ibn Kathir's account or toward the reports carried from Ibn Abbas; the obligation does not change with the conclusion.",
            "bn": "যে পক্ষই পাঠকের কাছে বেশি গ্রহণযোগ্য মনে হোক, দুটো জিনিস এখানে করা হবে না। এই আয়াতের সঙ্গে যতগুলো তাফসীর দেখা হয়েছে তার কোনোটিতেই কোনো হাদীস জোড়া পাওয়া যায়নি, তাই কোনো হাদীস এখানে উল্লেখ করা হলো না। আর এই মতভেদ কাউকে অনুমতি দেয় না ইবরাহীমের দুই পুত্রের যে কাউকে, বা তাঁদের যে কোনো একজনের বংশধারার কোনো জাতিকে, নিচু করে দেখার জন্য, এমন এক বিতর্কে নাম জড়ানোর কারণে, যা তারা নিজেরা বেছে নেয়নি। এই সতর্কতা প্রযোজ্য, পাঠক ইবন কাসীরের বিবরণের দিকে ঝুঁকুন বা ইবন আব্বাস থেকে আসা বর্ণনার দিকে; সিদ্ধান্ত যা-ই হোক, এই দায়িত্ব বদলায় না।"
          },
          {
            "en": "What every chain, every camp, and every commentator transmits without changing a word is the sentence itself. A trial was endured, and what answered it was not relief in the abstract but a son named, a vocation given, and a character attached to both: nabiyyan mina-s-salihin, a prophet from among the righteous. On that much, Ibn Kathir and Ibn Abbas's own narrators, however they read the rest, do not disagree. Whatever a reader eventually concludes about the identity of the one bound, that sentence is the ground this article actually stands on.",
            "bn": "প্রতিটি সনদ, প্রতিটি পক্ষ, আর প্রতিটি মুফাসসির যা অবিকল বহন করে আনেন, তা হলো বাক্যটি নিজেই। একটা পরীক্ষা সহ্য করা হয়েছিল, আর তার জবাব এসেছিল অস্পষ্ট কোনো স্বস্তি হিসেবে নয়, বরং নাম-ধরা এক সন্তান, একটা পরিচয়, আর দুটোর সঙ্গেই জোড়া এক চরিত্র হিসেবে: নাবিয়্যান মিনাস-সালিহীন, সৎকর্মশীলদের অন্তর্ভুক্ত একজন নবী। এই পরিমাণ বিষয়ে ইবন কাসীর আর ইবন আব্বাসের বরাতে আসা বর্ণনাকারীরা, বাকি বিষয়ে যেভাবেই পড়ুন না কেন, দ্বিমত করেন না। যবেহ হওয়ার জন্য নির্ধারিত সন্তানের পরিচয় নিয়ে পাঠক শেষ পর্যন্ত যে সিদ্ধান্তেই পৌঁছান, এই বাক্যটিই এই লেখার আসল ভিত্তি।"
          }
        ]
      }
    ]
  },
  "37:116": {
    "sections": [
      {
        "h": {
          "en": "The Favor Reaches Its Turn",
          "bn": "অনুগ্রহ এগোয় নিজের পালায়"
        },
        "p": [
          {
            "en": "Two verses earlier the passage already named Allah's favor on Musa and Harun (AS); the next line narrowed that favor to a single rescue, that He saved them and their people from the great affliction. Only after that rescue is spoken does 37:116 turn to something further: and We supported them, so it was they who overcame. The order is not accidental. The passage moves from favor, to survival, to victory, each gift received before the next is even mentioned, as though triumph itself had to wait its turn behind the hardship it answers.",
            "bn": "এর দুই আয়াত আগেই কুরআন বলেছে, আল্লাহ মূসা আর হারূন (আঃ)-এর প্রতি অনুগ্রহ করেছিলেন। পরের আয়াতে সেই অনুগ্রহ নির্দিষ্ট হয়ে ওঠে: তিনি তাঁদের আর তাঁদের জাতিকে মহা বিপদ থেকে রক্ষা করেছিলেন। সেই উদ্ধারের কথা বলার পরই ৩৭:১১৬ আয়াত আরও এক ধাপ এগোয়: আর আমি তাদেরকে সাহায্য করেছিলাম, যার ফলে তারাই হয়েছিল বিজয়ী। এই ক্রমটা এলোমেলো নয়। প্রথমে অনুগ্রহ, তারপর মুক্তি, সবশেষে বিজয়; প্রতিটি নিয়ামত আগের নিয়ামতের পরেই আসে, যেন বিজয়কে অপেক্ষা করতে হয়েছিল সেই কষ্টের পরে, যার জবাব সে দিচ্ছে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads this whole stretch as recalling one event already told elsewhere in fuller detail; here it functions only as a reminder, a marker pointing back at what the reader already knows. It groups Allah's gifts to Musa and Harun (AS) into two kinds: favors that simply give a benefit, like the honor named in 37:114, and favors that save a person from loss or harm, which 37:115 and 37:116 then spell out. On that reading, this verse is not a new battle report. It is the rescue from 37:115 reaching its necessary conclusion.",
            "bn": "মাআরিফুল কুরআন এই পুরো অংশকে আগে থেকেই বিস্তারিত বলা একটা ঘটনার স্মারক বলে পড়ে; এখানে এটা শুধু পাঠককে আগের জানা কথাটা মনে করিয়ে দেয়। এটি মূসা ও হারূন (আঃ)-এর প্রতি আল্লাহর নিয়ামতকে দুই ভাগে ভাগ করে: এক ভাগ শুধু কল্যাণ দেয়, যেমন ৩৭:১১৪ আয়াতে বলা সম্মান; আর আরেক ভাগ কোনো ক্ষতি বা লোকসান থেকে রক্ষা করে, যা ৩৭:১১৫ ও ৩৭:১১৬ আয়াতে বিস্তারিত হয়েছে। এই পাঠ অনুযায়ী এ আয়াত কোনো নতুন যুদ্ধের বিবরণ নয়। এটা ৩৭:১১৫ আয়াতের উদ্ধারকেই তার প্রয়োজনীয় সমাপ্তিতে পৌঁছে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Support Delivered",
          "bn": "সাহায্য যা এনে দিল"
        },
        "p": [
          {
            "en": "At-Tabari glosses the verb plainly: We supported them, meaning Musa, Harun (AS), and their people, against Pharaoh and his court, by drowning them, so it was they who overcame, over Pharaoh's side. Nasr here is not a close contest decided by a narrow margin. It is one side ending in the water and the other side walking free. Al-Muyassar states the same outcome in three words gathered together: they were given might, victory, and complete dominance over Pharaoh and his household. Neither commentator leaves room for a partial reading of what support meant.",
            "bn": "তাবারী ক্রিয়াটির অর্থ সহজভাবে বলেন: আমি তাদেরকে সাহায্য করেছিলাম, অর্থাৎ মূসা, হারূন (আঃ) আর তাঁদের জাতিকে, ফেরাউন আর তার দরবারের বিরুদ্ধে, তাদের ডুবিয়ে দিয়ে; ফলে তারাই হলো বিজয়ী, ফেরাউনের পক্ষের উপর। নাসর এখানে কোনো সরু ব্যবধানে জেতা প্রতিযোগিতা নয়। একপক্ষ পানিতে শেষ হয়ে যায়, আর অন্যপক্ষ মুক্ত হয়ে হাঁটে। আল-মুয়াসসার একই পরিণতি তিনটি শব্দে একসাথে বলে দেয়: তাদের দেওয়া হলো ক্ষমতা, বিজয়, আর ফেরাউন ও তার পরিবারের উপর সম্পূর্ণ আধিপত্য। কোনো তাফসীরকারই সাহায্যের অর্থে আংশিকতার জায়গা রাখেননি।"
          },
          {
            "en": "Al-Baghawi's note is equally direct: the support reached Musa, Harun (AS), and their people, and it was they who overcame Pharaoh's own people. Ibn Kathir's Arabic commentary widens the lens for a moment, recalling what the support undid: years in which Pharaoh's men killed the sons born to the Israelites, kept their women for forced labor, and used the whole community for the lowest tasks a people can be made to do. Against that record, nasr did not mean a truce or a stand-off. It meant an ending, delivered all at once, in the sea.",
            "bn": "বাগাভীর কথাটাও একইরকম সরাসরি: সাহায্য পৌঁছেছিল মূসা, হারূন (আঃ) আর তাঁদের জাতির কাছে, আর তারাই হলো ফেরাউনের নিজের জাতির উপর বিজয়ী। ইবন কাসীরের আরবি তাফসীর কিছুক্ষণের জন্য দৃষ্টিটা বড় করে দেখায়, এই সাহায্য আসলে কী মিটিয়েছিল তা স্মরণ করিয়ে: বহু বছর ধরে ফেরাউনের লোকেরা বনী ইসরাঈলের ছেলেদের হত্যা করত, মেয়েদের জোরপূর্বক শ্রমে বাঁধত, আর পুরো জাতিকে এমন সবচেয়ে নিচু কাজে লাগাত যা কোনো জাতিকে করতে বাধ্য করা যায়। এই রেকর্ডের সামনে নাসর মানে কোনো যুদ্ধবিরতি বা সমতা ছিল না। এর অর্থ ছিল একটা সমাপ্তি, যা সমুদ্রের ভেতর একসাথেই এসে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Grammarian's Objection, Settled",
          "bn": "ব্যাকরণবিদের প্রশ্নের জবাব"
        },
        "p": [
          {
            "en": "The word nasarnahum raises a small grammatical puzzle. Musa and Harun (AS) are two people, and the Qur'an elsewhere marks them with the dual, as in We gave them both the Scripture and We guided them both to the straight path only two verses later. So why does 37:116 use hum, the plural them, instead of the expected dual huma? At-Tabari reports that some grammarians explained it by a known habit of Arabic: a leader's name can stand for his whole following, so a plural pronoun can point at one person understood together with his people.",
            "bn": "নাসারনাহুম শব্দটি একটা ছোট ব্যাকরণগত প্রশ্ন তোলে। মূসা আর হারূন (আঃ) দুজন মানুষ, আর কুরআন অন্যত্র তাঁদের জন্য দ্বিবচন ব্যবহার করে, যেমন এর দুই আয়াত পরেই বলা হয়েছে আমি উভয়কে কিতাব দিয়েছিলাম আর উভয়কে সরল পথে পরিচালিত করেছিলাম। তাহলে ৩৭:১১৬ আয়াতে কেন বহুবচন হুম ব্যবহার হলো, দ্বিবচন হুমা নয়? তাবারী জানান, কিছু ব্যাকরণবিদ এটা আরবি ভাষার একটা পরিচিত রীতি দিয়ে ব্যাখ্যা করেছেন: একজন নেতার নাম তাঁর পুরো অনুসারী দলকে বোঝাতে পারে, তাই বহুবচন সর্বনাম একজনকেই তাঁর জাতির সাথে মিলিয়ে বোঝাতে পারে।"
          },
          {
            "en": "At-Tabari calls that explanation acceptable but unnecessary. He points out that the Qur'an has already supplied a simpler reason one verse earlier: 37:115 says We saved them both and their people from the great affliction. Since Pharaoh and his court were enemies of all the Israelites, not of two men alone, the plural in 37:116 simply continues what 37:115 already named. No special grammatical device is required; the people were there in the sentence just before, so they stay there in this one.",
            "bn": "তাবারী এই ব্যাখ্যাটিকে অগ্রহণযোগ্য বলেননি, কিন্তু বলেন এটার প্রয়োজনই নেই। তিনি দেখান, কুরআন নিজেই একটি আয়াত আগেই সহজ কারণটা দিয়ে দিয়েছে: ৩৭:১১৫ আয়াতে বলা হয়েছে, আমি তাঁদের দুজনকে আর তাঁদের জাতিকে মহা বিপদ থেকে রক্ষা করেছিলাম। ফেরাউন আর তার দরবার তো দুই ব্যক্তির শত্রু ছিল না, ছিল পুরো বনী ইসরাঈলের শত্রু; তাই ৩৭:১১৬ আয়াতের বহুবচনটা স্রেফ ৩৭:১১৫ আয়াতে যা বলা হয়েছিল তা-ই এগিয়ে নিয়ে যায়। কোনো বিশেষ ব্যাকরণগত কৌশলের প্রয়োজন নেই; জাতিটা আগের বাক্যেই ছিল, তাই এই বাক্যেও তারা থেকে যায়।"
          },
          {
            "en": "Al-Qurtubi records a related discussion. Al-Farra, he says, took the pronoun to mean Musa and Harun (AS) alone, treating their dual as grammatically expressed by a plural, and pointed to the plain duals in the following verses as support. But Qurtubi judges the other view correct: that the pronoun covers Musa, Harun (AS), and their people together, precisely because the line just before had already said them both and their people. Two different routes, two different grammarians, arriving at the same wider reading.",
            "bn": "কুরতুবী একটা সম্পর্কিত আলোচনা তুলে ধরেন। তাঁর বরাতে, ফারআ মনে করতেন সর্বনামটি কেবল মূসা আর হারূন (আঃ)-কেই বোঝায়; তাঁদের দ্বিবচনকে তিনি বহুবচন রূপে প্রকাশিত ধরে নেন, আর এর সমর্থনে পরের আয়াতগুলোর স্পষ্ট দ্বিবচন রূপগুলো দেখান। কিন্তু কুরতুবী অন্য মতটাকেই সঠিক বলে রায় দেন: যে সর্বনামটি মূসা, হারূন (আঃ) আর তাঁদের জাতি সবাইকে একসাথে বোঝায়, কারণ ঠিক আগের বাক্যেই বলা হয়েছিল তাঁদের দুজনকে আর তাঁদের জাতিকে। দুটি আলাদা পথ, দুজন আলাদা ব্যাকরণবিদ, গিয়ে পৌঁছান একই বিস্তৃত অর্থে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Victory Undid",
          "bn": "বিজয় যা মুছে দিল"
        },
        "p": [
          {
            "en": "Before telling us about the support itself, Ibn Kathir's commentary pauses on what it was answering. Pharaoh's men, he recalls, used to kill the sons born to the Israelites, keep their daughters and wives alive only to use them, and set the whole community to the lowest work a ruling power can force on anyone. That is the condition 37:115 already called the great affliction. The victory named one verse later did not arrive into a neutral situation; it arrived into exactly that record, and answered it in full.",
            "bn": "সাহায্যের কথা বলার আগে ইবন কাসীরের তাফসীর থামে এটা কী জবাব দিচ্ছিল তার উপর। তিনি স্মরণ করিয়ে দেন, ফেরাউনের লোকেরা বনী ইসরাঈলের ছেলেদের হত্যা করত, মেয়ে ও স্ত্রীদের জীবিত রাখত শুধু কাজে লাগানোর জন্য, আর পুরো জাতিকে এমন সবচেয়ে নিচু কাজে বাধ্য করত যা একটা শাসকশক্তি কারও উপর চাপাতে পারে। এটাই সেই অবস্থা, যাকে ৩৭:১১৫ আয়াত আগেই মহা বিপদ বলেছে। এক আয়াত পরে আসা বিজয় কোনো শূন্য পরিস্থিতিতে আসেনি; এসেছিল একদম এই রেকর্ডের মধ্যে, আর এর পূর্ণ জবাব দিয়েছিল।"
          },
          {
            "en": "At-Tabari's own entry lists the same three practices almost word for word: the slaughter of sons, the sparing of women for service, and the humiliation of the whole people, before stating that Allah supported Musa, Harun (AS), and their people against exactly those who had done it. Two independent commentaries, drawing on the same inherited material, describe the same wrong before describing the same deliverance. Neither treats the victory as a bare military fact. Both tie it to what it was undoing.",
            "bn": "তাবারীর নিজের আলোচনাতেও প্রায় একই তিনটি বিষয় উঠে আসে: ছেলেদের হত্যা, মেয়েদের কাজে লাগানোর জন্য জীবিত রাখা, আর পুরো জাতির অপমান; তারপর তিনি বলেন, আল্লাহ মূসা, হারূন (আঃ) আর তাঁদের জাতিকে ঠিক তাদেরই বিরুদ্ধে সাহায্য করেছিলেন যারা এই কাজ করেছিল। দুটো আলাদা তাফসীর, একই পুরনো বর্ণনা থেকে নেওয়া, একই অন্যায়ের কথা বলে, একই উদ্ধারের কথা বলার আগে। দুজনের কেউই বিজয়টাকে শুধু একটা সামরিক ঘটনা হিসেবে দেখেন না। দুজনেই এটাকে জুড়ে দেন তা কী মিটিয়েছিল তার সাথে।"
          }
        ]
      },
      {
        "h": {
          "en": "Land, Wealth, a Lifetime's Work",
          "bn": "জমি, সম্পদ, এক জীবনের শ্রম"
        },
        "p": [
          {
            "en": "Then, Ibn Kathir writes, after all of that, Allah supported them against their oppressors and settled their eyes against them, an Arabic phrase for the relief of watching a wrong finally answered. So it was they who overcame: they took Pharaoh's land, Pharaoh's wealth, and everything his household had spent a lifetime gathering. The people who had been property, worked for someone else's benefit, ended the story holding what their owners had worked a lifetime to build. That is the shape nasr takes in this verse.",
            "bn": "ইবন কাসীর লেখেন, এই সব কিছুর পর আল্লাহ তাঁদের অত্যাচারীদের বিরুদ্ধে সাহায্য করলেন আর তাঁদের চোখ জুড়িয়ে দিলেন তাদের বিরুদ্ধে, অর্থাৎ অন্যায়ের শেষ জবাব দেখার সেই স্বস্তি। যার ফলে তারাই হলো বিজয়ী: তারা ফেরাউনের জমি, ফেরাউনের সম্পদ, আর তার পরিবার সারাজীবন ধরে যা জমিয়েছিল সবকিছু নিয়ে নিল। যে মানুষগুলো একদিন সম্পত্তির মতো ব্যবহৃত হতো, অন্যের স্বার্থে খাটত, কাহিনির শেষে তারাই পেল তা, যা তাদের মালিকেরা সারাজীবন খেটে গড়েছিল। নাসর শব্দটা এই আয়াতে এই রূপ নিয়েই দাঁড়ায়।"
          },
          {
            "en": "Al-Muyassar's gloss names the same completeness from a different angle: they were given might, victory, and total dominance over Pharaoh and his household, three words placed together so that no partial outcome could be read into the verse. Read beside Ibn Kathir's account of seized land and wealth, the two sources describe one single reversal from two directions, the inward reality of the victory and its outward, visible proof. Neither leaves space for a result that was merely good enough.",
            "bn": "আল-মুয়াসসারের ব্যাখ্যা এই পূর্ণতাকেই আরেক কোণ থেকে নাম দেয়: তাদের দেওয়া হলো ক্ষমতা, বিজয়, আর ফেরাউন ও তার পরিবারের উপর সম্পূর্ণ আধিপত্য, তিনটি শব্দ একসাথে রেখে, যাতে আয়াতে কোনো আধা-আধি ফলাফলের জায়গা না থাকে। ইবন কাসীরের বর্ণনা করা দখল হওয়া জমি আর সম্পদের পাশে রাখলে দেখা যায়, দুটি উৎস একই একক পরিণতির কথা বলছে দুই দিক থেকে, বিজয়ের ভেতরের বাস্তবতা আর তার বাইরের, দৃশ্যমান প্রমাণ। কোনোটাই এমন কোনো ফলাফলের জায়গা রাখে না যা স্রেফ মোটামুটি ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "Watching Him Go Under",
          "bn": "ডুবে যাওয়া দেখেছিলেন তাঁরা"
        },
        "p": [
          {
            "en": "As-Sa'di frames the whole passage as one act of favor upon Allah's two servants and messengers, Musa and Harun (AS): prophethood, a mission of calling people to Allah, the rescue of their people from Pharaoh's enmity, and then nasr, his support, described in words the other commentators consulted here do not use. As-Sa'di writes that Allah gave them victory over him until He drowned him while they were watching. Support, on this telling, was not only an outcome delivered to Musa and Harun (AS); it was a scene they were allowed to see happen in front of them.",
            "bn": "সাদী পুরো অংশটাকে আল্লাহর দুই বান্দা ও রাসূল, মূসা ও হারূন (আঃ)-এর প্রতি একটিমাত্র অনুগ্রহের বিবরণ বলে পড়েন: নবুওয়ত, মানুষকে আল্লাহর দিকে ডাকার দায়িত্ব, ফেরাউনের শত্রুতা থেকে তাঁদের জাতির উদ্ধার, আর তারপর নাসর, যা তিনি এমন শব্দে বলেন যা এখানে পড়া অন্য তাফসীরকারেরা ব্যবহার করেননি। সাদী লেখেন, আল্লাহ তাঁদের বিজয় দিলেন তার উপর, যতক্ষণ না তিনি তাকে ডুবিয়ে দিলেন আর তাঁরা তা দেখছিলেন। এই বর্ণনায় সাহায্য কেবল মূসা ও হারূন (আঃ)-এর হাতে আসা একটা পরিণতি ছিল না; এটা এমন এক দৃশ্য ছিল যা তাঁদের চোখের সামনেই ঘটতে দেওয়া হয়েছিল।"
          },
          {
            "en": "That detail matters for how nasr should be read here. It was not reported to Musa and Harun (AS) after the fact, as news from somewhere else; it happened within their sight, closing the very fear named in 37:115 with an ending they did not have to take on anyone's word. As-Sa'di's phrase fits the framing already drawn from Ma'arif al-Qur'an earlier in this piece: not a single clash won on a field, but a whole deliverance completed in view of the people who had suffered it.",
            "bn": "এই বিবরণটা গুরুত্বপূর্ণ, কারণ তা বলে দেয় নাসরকে এখানে কীভাবে বুঝতে হবে। মূসা ও হারূন (আঃ)-কে পরে অন্য কোথাও থেকে এই খবর জানানো হয়নি; এটা ঘটেছিল তাঁদের চোখের সামনেই, আর এভাবেই ৩৭:১১৫ আয়াতে বলা সেই ভয়ের অধ্যায় এমন এক পরিণতিতে বন্ধ হলো যা তাঁদের কারও মুখের কথায় বিশ্বাস করতে হয়নি। সাদীর এই বর্ণনা আগে বলা মাআরিফুল কুরআনের কাঠামোর সঙ্গেই মিলে যায়: এটা কোনো একটা রণক্ষেত্রে জেতা একক লড়াই নয়, বরং এমন এক সম্পূর্ণ মুক্তি, যা তাঁরা নিজেরাই, যারা এই কষ্ট সহ্য করেছিলেন, নিজ চোখে দেখেছিলেন ঘটতে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Arc, Told Here in Brief",
          "bn": "দীর্ঘ কাহিনির সংক্ষিপ্ত রেখা"
        },
        "p": [
          {
            "en": "None of the eight tafsirs consulted for this verse attach a hadith to it specifically; each argues the meaning from the Arabic itself and from the surrounding verses, not from a prophetic report. That absence is itself worth stating plainly rather than filling with something borrowed from a different context. Ma'arif al-Qur'an calls the larger passage an indicator, a brief pointer toward an episode told in full detail elsewhere in the Qur'an, placed here only to make a single point: that Allah rewards His sincere and obedient servants, and does so generously.",
            "bn": "এই আয়াতের জন্য দেখা আটটি তাফসীরের একটিতেও এর সঙ্গে কোনো হাদীস জোড়া পাওয়া যায়নি; প্রতিটি অর্থ বের করেছে আরবি শব্দ আর আশপাশের আয়াত থেকে, কোনো হাদীস থেকে নয়। এই অনুপস্থিতিটা স্পষ্টভাবে বলে দেওয়াই ভালো, অন্য কোনো প্রসঙ্গ থেকে ধার করা কিছু দিয়ে ফাঁক ভরার চেয়ে। মাআরিফুল কুরআন পুরো অংশটাকে বলে একটা ইঙ্গিত, অন্যত্র পূর্ণ বিস্তারে বলা একটা ঘটনার দিকে সংক্ষিপ্ত নির্দেশ, যা এখানে বসানো হয়েছে স্রেফ একটা কথা বোঝানোর জন্য: আল্লাহ তাঁর একনিষ্ঠ ও অনুগত বান্দাদের প্রতিদান দেন, আর তা দেন প্রাচুর্যের সাথে।"
          },
          {
            "en": "The passage does not stop at victory. The next few verses move forward without pause: Allah gives Musa and Harun (AS) the explicit Scripture, guides them on the straight path, and leaves their names honored among later generations, closing with the words peace upon Moses and Aaron. None of that is this verse's subject; 37:116 marks only the turn from affliction to victory. What comes after is a different gift, resting on this one, and belongs to its own reading.",
            "bn": "এই অংশ বিজয়েই থেমে থাকে না। পরের কয়েকটি আয়াত থেমে না গিয়ে এগিয়ে যায়: আল্লাহ মূসা ও হারূন (আঃ)-কে দেন সুস্পষ্ট কিতাব, তাঁদের পরিচালিত করেন সরল পথে, আর তাঁদের নাম পরবর্তী প্রজন্মের কাছে সম্মানিত রেখে যান, শেষ হয় এই কথায়: মূসা ও হারূনের প্রতি শান্তি বর্ষিত হোক। এর কোনোটাই এই আয়াতের বিষয় নয়; ৩৭:১১৬ আয়াত কেবল বিপদ থেকে বিজয়ে ফেরার মোড়টা চিহ্নিত করে। পরে যা আসে তা আলাদা একটি নিয়ামত, এটার উপর দাঁড়িয়ে থাকা, আর তার নিজস্ব আলোচনার বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verdict, Not a Weapon",
          "bn": "অতীতের রায়, আজকের অস্ত্র নয়"
        },
        "p": [
          {
            "en": "This needs to be said plainly. The verse describes what happened to one ruler and the people who carried out his policy of killing sons and enslaving daughters, in a specific history that ended in a specific place. It licenses no hostility toward any living person, nation, or community today, and no reader may borrow its drowning to justify treating anyone now alive as the heirs of Pharaoh's court. The subject of 37:116 is what Allah did then, not a verdict available for reuse now.",
            "bn": "এটা স্পষ্টভাবে বলা দরকার। আয়াতটি বর্ণনা করে একজন শাসক আর তার নীতি কার্যকর করা মানুষদের কথা, যারা ছেলেদের হত্যা করত আর মেয়েদের দাসত্বে রাখত, একটা নির্দিষ্ট ইতিহাসে, যা একটা নির্দিষ্ট জায়গায় শেষ হয়েছিল। এটা আজকের কোনো জীবিত মানুষ, জাতি, বা সম্প্রদায়ের বিরুদ্ধে কোনো শত্রুতার অনুমতি দেয় না, আর কোনো পাঠক এই ডুবে যাওয়ার কাহিনি টেনে এনে আজ জীবিত কাউকে ফেরাউনের দরবারের উত্তরাধিকারী বলে চিহ্নিত করতে পারেন না। ৩৭:১১৬ আয়াতের বিষয় হলো আল্লাহ তখন কী করেছিলেন, আজকের জন্য পুনর্ব্যবহারযোগ্য কোনো রায় নয়।"
          },
          {
            "en": "Al-Baghawi names the defeated side as the people who had ruled over the Israelites in Egypt at that time; his point is historical identification, not a label for anyone living now. Reading it any other way turns a report about a long-closed chapter into a weapon against people who had no part in it. What this verse asks of a reader is the opposite of that: to see what unchecked cruelty earned its own practitioners, and to leave the matter exactly where the verse leaves it.",
            "bn": "বাগাভী পরাজিত পক্ষকে চিহ্নিত করেন সেই সময়ে মিশরে বনী ইসরাঈলের উপর শাসন করা মানুষ বলে; তাঁর কথাটা একটা ঐতিহাসিক পরিচয়, আজ জীবিত কারও জন্য কোনো লেবেল নয়। এটাকে অন্যভাবে পড়লে একটা বহু আগে বন্ধ হয়ে যাওয়া অধ্যায়ের বিবরণ এমন মানুষদের বিরুদ্ধে অস্ত্র হয়ে দাঁড়ায়, যাদের তাতে কোনো ভূমিকাই ছিল না। এই আয়াত পাঠকের কাছ থেকে চায় ঠিক তার বিপরীতটা: বিনা বাধায় চলা নিষ্ঠুরতা তার নিজের কর্মীদের জন্য কী অর্জন করেছিল তা দেখা, আর বিষয়টা ঠিক যেখানে আয়াত ছেড়ে দিয়েছে সেখানেই ছেড়ে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Support That Arrives Whole",
          "bn": "সাহায্য আসে পরিপূর্ণভাবে"
        },
        "p": [
          {
            "en": "Put the pieces together and the verse states something larger than one historical episode. Favor was named, affliction was ended, and only then did support arrive, and when it arrived it did not stop at safety. It handed over land, wealth, and the sight of the enemy's own end to people who had owned nothing and feared everything only verses earlier. Nothing in the record describes a result still in question, still partly theirs and partly their oppressor's. The word used is ghalibin, overcomers, without qualification.",
            "bn": "সব অংশ একসাথে রাখলে আয়াতটি একটি ঘটনার চেয়ে বড় কিছু বলে। প্রথমে অনুগ্রহের নাম এলো, তারপর বিপদ শেষ হলো, আর তারপরই সাহায্য এলো; আর যখন এলো, তা নিরাপত্তাতেই থেমে থাকেনি। যে মানুষগুলোর কিছুই ছিল না আর কিছু আয়াত আগেও সব কিছুতে ভয় পেত, তাদের হাতে এসে গেল জমি, সম্পদ, আর শত্রুর নিজের শেষ দেখার দৃশ্য। এমন কোনো ফলাফলের কথা এখানে নেই যা এখনো প্রশ্নবিদ্ধ, আংশিক তাদের আর আংশিক তাদের অত্যাচারীর। শব্দটা ব্যবহৃত হয়েছে গালিবীন, বিজয়ী, কোনো শর্ত ছাড়াই।"
          },
          {
            "en": "That is the pattern worth carrying out of this verse. Whoever waits on Allah for relief from a real wrong is not waiting on a tied outcome or a quiet compromise with whoever caused the harm. Musa and Harun (AS) endured the affliction in full before the support came, and the support, once it came, did not arrive by half. The lesson is not that relief is always visible this clearly in a single lifetime; it is that when Allah's support does arrive, it is never the lesser side of a draw.",
            "bn": "এই আয়াত থেকে নিয়ে যাওয়ার মতো শিক্ষা এটাই। যে কেউ কোনো সত্যিকারের অন্যায় থেকে মুক্তির জন্য আল্লাহর উপর ভরসা করে, সে কোনো অমীমাংসিত ফলাফল বা অত্যাচারীর সঙ্গে নিরব এক আপসের অপেক্ষায় নেই। মূসা ও হারূন (আঃ) বিপদটা পূর্ণমাত্রায় সহ্য করেছিলেন সাহায্য আসার আগে, আর সাহায্য যখন এলো তা আধাআধি আসেনি। শিক্ষাটা এই নয় যে মুক্তি সবসময় এক জীবনেই এতটা স্পষ্টভাবে দেখা যাবে; শিক্ষাটা এই যে আল্লাহর সাহায্য যখন আসে, তা কখনো কোনো সমানে-সমানে থামা লড়াইয়ের দুর্বল পক্ষ হয়ে আসে না।"
          }
        ]
      }
    ]
  },
  "37:125": {
    "sections": [
      {
        "h": {
          "en": "One People, One Address",
          "bn": "একই জাতি, একই ডাক"
        },
        "p": [
          {
            "en": "Ilyas is named a messenger in 37:123, and the very next verse, 37:124, already has him speaking: will you not fear Allah? This verse narrows that general call into one pointed question with two halves held together by a single breath. The first half names what the people were doing: calling upon Ba'l. The second half names what that calling cost them: leaving the best of creators. Arabic puts the two verbs side by side, tad'una and tadharuna, call and leave, so the trade sits inside the grammar itself before any commentator explains a single word of it.",
            "bn": "ইলিয়াসকে ৩৭:১২৩ আয়াতে রাসূল বলা হয়েছে, আর তার ঠিক পরের আয়াত, ৩৭:১২৪, এ তিনি ইতিমধ্যে বলছেন: তোমরা কি (আল্লাহকে) ভয় করবে না? এই আয়াত সেই সাধারণ আহ্বানকে একটামাত্র তীক্ষ্ণ প্রশ্নে নামিয়ে আনে, যার দুটি অংশ একই শ্বাসে জোড়া। প্রথম অংশ বলে জাতি কী করছিল: বা‘লকে ডাকছিল। দ্বিতীয় অংশ বলে এই ডাকের দাম কী হলো: সর্বোত্তম সৃষ্টিকারীকে ছেড়ে দেওয়া। আরবীতে দুটি ক্রিয়া পাশাপাশি বসানো, তাদ‘ঊনা আর তাযারূনা, ডাকা আর ছাড়া। ফলে এই লেনদেনটা ব্যাকরণের ভেতরেই ধরা পড়ে, কোনো তাফসীরকার একটা শব্দও ব্যাখ্যা করার আগে।"
          },
          {
            "en": "The sentence does not even finish there. 37:126 supplies the subject that this verse's question demands an answer about: Allah, your Lord and the Lord of your first forefathers. Ilyas is not simply naming his God against theirs; he is reminding them that the same God already owned their ancestors, before whatever they now called upon ever had a name. Other prophets in the Qur'an face their own peoples over their own objects of worship, each confrontation shaped by its own place and history. This one belongs to Ilyas alone, and the word his people are asked about is Ba'l.",
            "bn": "বাক্যটি এখানেই শেষ হয় না। ৩৭:১২৬ আয়াতে আসে সেই বিষয়, যার জবাব এই প্রশ্ন দাবি করছিল: আল্লাহ, তোমাদের প্রতিপালক আর তোমাদের পূর্ববর্তী পিতৃপুরুষদেরও প্রতিপালক। ইলিয়াস এখানে শুধু তাঁর আল্লাহকে তাদের বিপরীতে নাম ধরছেন না; তিনি স্মরণ করিয়ে দিচ্ছেন, একই আল্লাহ তাদের পূর্বপুরুষদেরও মালিক ছিলেন, এমনকি তারা এখন যাকে ডাকছে তার কোনো নামই তখন ছিল না। কুরআনে অন্য নবীরাও তাঁদের নিজ নিজ জাতির সামনে নিজ নিজ পূজিত বস্তু নিয়ে দাঁড়িয়েছেন, প্রতিটি সংঘাত নিজের জায়গা আর ইতিহাস অনুযায়ী গড়া। এটি কেবল ইলিয়াসের নিজের ঘটনা, আর যে শব্দ নিয়ে তাঁর জাতিকে প্রশ্ন করা হচ্ছে তা বা‘ল।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Names for One Word",
          "bn": "একই শব্দের চার পরিচয়"
        },
        "p": [
          {
            "en": "The tafsirs gathered here do not settle on one meaning for Ba'l, and several name the disagreement outright. Ibn Kathir, at-Tabari and al-Baghawi all report that Ibn Abbas, Mujahid, Ikrimah, Qatada and as-Suddi read Ba'l as simply rabb, a lord, in what Ikrimah and Qatada both call the dialect of the people of Yemen. At-Tabari even has Ibn Abbas illustrating the usage from daily speech, asking who is the ba'l, meaning the owner, of an animal. On this reading, Ilyas's people were not necessarily naming one fixed idol; they were calling something, anything, a lord beside Allah.",
            "bn": "এখানে জমা করা তাফসীরগুলো 'বা‘ল' শব্দের একটিমাত্র অর্থে একমত নয়, আর কয়েকটি তাফসীর এই মতভেদ সরাসরি জানিয়ে দেয়। ইবন কাসীর, তাবারী আর বাগাভী তিনজনই জানান, ইবন আব্বাস, মুজাহিদ, ইকরিমা, কাতাদা আর সুদ্দি 'বা‘ল'-কে পড়েছেন রাব্ব অর্থে, অর্থাৎ প্রভু। ইকরিমা আর কাতাদা দুজনেই এটাকে বলেন ইয়ামানের লোকদের ভাষার শব্দ। তাবারী এমনকি ইবন আব্বাসের একটা উদাহরণও তুলে আনেন দৈনন্দিন কথা থেকে, কারো পশুর বা‘ল অর্থাৎ মালিক কে, এমন প্রশ্ন। এই পাঠ অনুযায়ী ইলিয়াসের জাতি হয়তো একটামাত্র নির্দিষ্ট মূর্তির নাম ধরে ডাকছিল না; তারা আল্লাহর পাশে যা-ই হোক কাউকে প্রভু বলে ডাকছিল।"
          },
          {
            "en": "A second group names an object instead of a word. 'Abd ar-Rahman ibn Zayd ibn Aslam, from his father, ad-Dahhak and Ibn Zayd all told at-Tabari and Ibn Kathir that Ba'l was a specific idol, the one that gave its name to the city of Ba'albakk west of Damascus. A third report is smaller still: Ibn Ishaq relates from unnamed people of knowledge that Ba'l was a woman they worshipped instead of Allah, repeated by at-Tabari and Ibn Kathir only as something said, not as judgment. Al-Qurtubi adds a fourth voice from Tha'lab: three camps circulated in his day, idol, lord and king, with idol the most widely held.",
            "bn": "দ্বিতীয় একটি দল শব্দের বদলে একটি সুনির্দিষ্ট মূর্তির নাম বলে। আবদুর রহমান বিন যায়দ বিন আসলাম, তাঁর পিতার বরাতে, আর যাহহাক আর ইবন যায়দ, সবাই তাবারী আর ইবন কাসীরকে জানিয়েছেন, বা‘ল ছিল একটি নির্দিষ্ট মূর্তি, যার নামেই দামেস্কের পশ্চিমে বা‘লাবাক্ক শহরের নাম হয়েছিল। তৃতীয় একটি বর্ণনা আরও ছোট: ইবন ইসহাক কিছু অজ্ঞাতনামা আলেমের বরাতে বলেন, বা‘ল ছিল এক নারী যাকে তারা আল্লাহর পরিবর্তে পূজা করত। তাবারী আর ইবন কাসীর দুজনেই এই বর্ণনা শুধু বলা হয়েছে এভাবে উল্লেখ করেন, নিজেদের মত হিসেবে নয়। কুরতুবী থা‘লাবের বরাতে চতুর্থ একটা কণ্ঠ জোড়েন, যিনি তাঁর সময়ে প্রচলিত তিনটি পক্ষের কথা বলেন, মূর্তি, প্রভু আর রাজা, আর বলেন তিনটির মধ্যে মূর্তির পাঠই সবচেয়ে বেশি প্রচলিত ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Ibn Abbas Said Both",
          "bn": "ইবন আব্বাসের দুই বর্ণনা"
        },
        "p": [
          {
            "en": "Al-Qurtubi preserves two separate chains from Ibn Abbas himself, and they do not agree. Through al-Hakam ibn Aban from Ikrimah, Ibn Abbas is reported saying Ba'l was an idol. Through Ata' ibn as-Sa'ib, also from Ikrimah, Ibn Abbas is reported saying Ba'l was a lord. Read side by side, the two reports look like a plain contradiction inside one man's own testimony, which is exactly how a careless reader would use them: to discard Ibn Abbas on this verse altogether rather than ask whether both reports could be telling the truth about the same thing from two directions.",
            "bn": "কুরতুবী ইবন আব্বাস থেকে আসা দুটি আলাদা সনদ সংরক্ষণ করেছেন, আর সেগুলো একমত নয়। হাকাম বিন আবান, ইকরিমার মাধ্যমে, জানান ইবন আব্বাস বলেছিলেন বা‘ল একটি মূর্তি। আতা বিন সাইব, সেও ইকরিমার মাধ্যমে, জানান ইবন আব্বাস বলেছিলেন বা‘ল একজন প্রভু। পাশাপাশি রাখলে এই দুই বর্ণনা একই মানুষের নিজের সাক্ষ্যের ভেতরে একটা সরাসরি বৈপরীত্য মনে হয়, আর ঠিক এভাবেই একজন অসতর্ক পাঠক এদুটোকে ব্যবহার করবেন: এই আয়াতে ইবন আব্বাসকে পুরোপুরি বাদ দিতে, এই প্রশ্ন না করে যে দুটো বর্ণনাই একই বিষয়ের দুই দিক থেকে সত্যি হতে পারে কি না।"
          },
          {
            "en": "Al-Qurtubi settles it by citing an-Nahhas, who finds both reports correct at once: an idol that they had taken as a lord. On that reading, Ibn Abbas was never contradicting himself; he was naming the object in one chain and naming what the object had become to its worshippers in the other. A carved thing and a worshipped lord are not two different candidates competing for the same word. They are one act of worship described from two ends, and an-Nahhas's line lets both of Ibn Abbas's own reports stand as true together rather than forcing a reader to prefer one over the other.",
            "bn": "কুরতুবী আন-নাহহাসের উদ্ধৃতি দিয়ে বিষয়টার সমাধান করেন, যিনি দুটো বর্ণনাকেই একসাথে সঠিক বলেন: এমন একটি মূর্তি, যাকে তারা প্রভু বানিয়ে নিয়েছিল। এই পাঠ অনুযায়ী ইবন আব্বাস কখনো নিজের সঙ্গে বিরোধ করেননি; তিনি এক সনদে বস্তুটার নাম বলেছেন, আরেক সনদে বলেছেন পূজারীদের কাছে সেই বস্তু আসলে কী হয়ে উঠেছিল। খোদাই করা একটা বস্তু আর পূজিত এক প্রভু একই শব্দের জন্য প্রতিদ্বন্দ্বী দুই প্রার্থী নয়। এটা এক পূজার দুই প্রান্ত থেকে দেওয়া বিবরণ, আর আন-নাহহাসের এই যুক্তি ইবন আব্বাসের দুটো বর্ণনাকেই একসাথে সত্য থাকতে দেয়, একটাকে অন্যটার উপর বেছে নেওয়ার দরকার পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Golden Idol, By One Report",
          "bn": "এক বর্ণনার সোনার মূর্তি"
        },
        "p": [
          {
            "en": "Al-Qurtubi also passes on a far more detailed picture, attributed to Muqatil, of what the idol itself was supposed to have looked like: made of gold, twenty cubits tall, with four faces, and served by 400 attendants whom the people treated as its own prophets. The same report adds that Satan was said to speak from inside it, with the attendants preserving and teaching whatever came out. None of the other tafsirs gathered for this verse repeat any of these details, so the picture rests on Muqatil's report alone, carried here only because al-Qurtubi carried it, not because it is confirmed elsewhere.",
            "bn": "কুরতুবী আরও একটি বিস্তারিত ছবি তুলে আনেন, মুকাতিলের বরাতে, মূর্তিটা আসলে কেমন দেখতে ছিল তার: সোনার তৈরি, ২০ হাত উঁচু, চারটি মুখবিশিষ্ট, আর ৪০০ জন সেবক দ্বারা সেবিত, যাদের লোকেরা নিজেদের নবী বলেই মানত। একই বর্ণনায় আরও বলা হয়, শয়তান নাকি তার ভেতর থেকে কথা বলত, আর সেবকেরা সেই কথা সংরক্ষণ করে মানুষকে শিখাত। এই আয়াতের জন্য জমা করা অন্য কোনো তাফসীরে এই বিবরণগুলোর একটাও পুনরাবৃত্তি হয় না, তাই এই ছবিটা একমাত্র মুকাতিলের বর্ণনার উপরেই দাঁড়িয়ে আছে, এখানে আনা হয়েছে কেবল এই কারণে যে কুরতুবী তা বহন করেছেন, অন্য কোথাও তা প্রমাণিত হয়েছে এই কারণে নয়।"
          },
          {
            "en": "That caution matters more than the description itself. A single narrator's picture of an idol's size, metal, and staff is the kind of detail that is easy to remember and easy to repeat until it starts sounding settled, when nothing beyond one report actually supports it. What stands on firmer ground, confirmed across several tafsirs, is simply that the thing Ilyas's people served was lifeless metal, stone, or carved wood, however tall, however many faces it was given.",
            "bn": "এই সতর্কতা বিবরণের চেয়েও বেশি গুরুত্বপূর্ণ। একজন মাত্র বর্ণনাকারীর দেওয়া মূর্তির আকার, ধাতু আর সেবকদলের ছবি এমন একধরনের বিস্তারিত তথ্য, যা মনে রাখা সহজ, আর বারবার বলতে বলতে এমনভাবে শোনায় যেন বিষয়টা মীমাংসিত, যদিও একটিমাত্র বর্ণনার বাইরে এর পক্ষে আর কিছুই নেই। যা অনেক বেশি দৃঢ় ভিত্তির উপর দাঁড়িয়ে আছে, আর যা একাধিক তাফসীরে নিশ্চিত হয়েছে, তা হলো সহজ এই কথা: ইলিয়াসের জাতি যার পূজা করত তা প্রাণহীন ধাতু, পাথর বা খোদাই করা কাঠ, তার উচ্চতা বা মুখের সংখ্যা যা-ই হোক না কেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Three-Year Drought, As Told",
          "bn": "যেমন বর্ণিত, তিন বছরের খরা"
        },
        "p": [
          {
            "en": "At-Tabari carries a longer narrative, reported through Ibn Ishaq from Wahb ibn Munabbih, that gives this confrontation a setting. Ilyas is placed alongside a king of the Israelites named Ahab, whose people had taken an idol called Ba'l while that king himself still listened to Ilyas. When the surrounding kings would not give up their idols either, pointing to their own apparent comfort as proof, Ilyas is said to have prayed that rain be withheld from his people, and a three-year famine followed, killing livestock and crops until the hardship grew severe.",
            "bn": "তাবারী এই সংঘাতের একটা পটভূমি বর্ণনা করেন, ইবন ইসহাকের মাধ্যমে ওয়াহব বিন মুনাব্বিহের বরাতে আসা একটা দীর্ঘ বর্ণনায়। সেখানে ইলিয়াসকে বনী ইসরাইলের এক রাজা আহাবের সঙ্গে দেখানো হয়, যার জাতি বা‘ল নামের একটা মূর্তি গ্রহণ করেছিল, যদিও রাজা নিজে তখনও ইলিয়াসের কথা শুনতেন। আশেপাশের রাজারা যখন তাদের নিজ নিজ আপাত স্বাচ্ছন্দ্যকে প্রমাণ দেখিয়ে মূর্তি ছাড়তে রাজি হননি, তখন বর্ণনায় বলা হয় ইলিয়াস দোয়া করেছিলেন যেন তাঁর জাতির উপর বৃষ্টি বন্ধ হয়ে যায়, আর তারপর ৩ বছরের এক দুর্ভিক্ষ নেমে আসে, যাতে পশু আর ফসল ধ্বংস হয়ে যায়, এমনকি কষ্টও তীব্র হয়ে ওঠে।"
          },
          {
            "en": "The same report describes a kind of test. Ilyas told his people to bring out the idols they trusted and ask them for relief; if those failed, they would know the truth. The idols gave no answer, and the people had to admit their helplessness. Ilyas then asked Allah on their behalf, and rain came. Yet the narrative itself adds that the people did not repent even after relief reached them, continuing in what they had been doing before. This whole account is reported narration, carried through one chain, not a claim this article treats as settled history.",
            "bn": "একই বর্ণনায় একরকম পরীক্ষার কথাও আসে। ইলিয়াস তাঁর জাতিকে বলেন, তারা যে মূর্তিগুলোর উপর ভরসা করে তা বের করে আনুক আর তাদের কাছে মুক্তি চেয়ে দেখুক; তা ব্যর্থ হলে সত্যটা তারা নিজেরাই বুঝে যাবে। মূর্তিগুলো কোনো জবাব দিল না, আর জাতিকে নিজেদের অক্ষমতা মেনে নিতে হলো। তারপর ইলিয়াস তাদের পক্ষে আল্লাহর কাছে দোয়া করলেন, আর বৃষ্টি এল। তবু বর্ণনাটি নিজেই যুক্ত করে, মুক্তি পাওয়ার পরও জাতি তওবা করেনি, আগে যা করছিল তাই চালিয়ে গেছে। এই পুরো বিবরণ একটি সনদের মাধ্যমে বর্ণিত একটি বর্ণনামাত্র, এই লেখা যাকে প্রতিষ্ঠিত ইতিহাস বলে ধরে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What 'Creator' Cannot Share",
          "bn": "যে নাম কেউ ভাগ পায় না"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an pauses on the phrase ahsan al-khaliqin, the best of creators, because the superlative could sound as if Allah were simply the finest among several real creators. It explains that khalq, to create, means bringing something from non-existence into existence by one's own power, an ability that belongs to Allah alone. What people call making is something else: taking materials that already exist and rearranging them. Ma'arif al-Qur'an adds that calling a writer's article or a painter's picture a creation, in the sense this word carries here, is not accurate language, however common the habit has become.",
            "bn": "মাআরিফুল কুরআন আহসানাল খালিকীন, সর্বোত্তম সৃষ্টিকারী, শব্দবন্ধে একটু থামে, কারণ এই উৎকর্ষবোধক শব্দটা শুনলে মনে হতে পারে যেন আল্লাহ একাধিক সত্যিকারের সৃষ্টিকারীর মধ্যে সবচেয়ে ভালোজন। এটি ব্যাখ্যা করে, খালক বা সৃষ্টি করা মানে কোনো কিছুকে না-থাকা অবস্থা থেকে নিজের ক্ষমতায় থাকা অবস্থায় আনা, এমন এক ক্ষমতা যা শুধু আল্লাহরই আছে। মানুষ যাকে বানানো বলে তা ভিন্ন জিনিস, আগে থেকে থাকা উপকরণ নিয়ে তা সাজানো মাত্র। মাআরিফুল কুরআন আরও বলে, একজন লেখকের লেখা বা একজন চিত্রকরের ছবিকে এই অর্থে সৃষ্টি বলা ভাষাগতভাবে সঠিক নয়, অভ্যাসটা যতই প্রচলিত হোক।"
          },
          {
            "en": "Al-Qurtubi reaches the same point from a different direction, noting that some read khaliqin here as meaning craftsmen rather than creators proper, since people fashion things without ever creating them from nothing. Read either way, the sentence does not compare Allah to rivals who also create, a little less skillfully. It removes rivals from the category altogether. Whatever Ilyas's people called Ba'l, lord, idol, or anything else, it belonged to the side of things fashioned, never to the side of the One who brings anything at all into being.",
            "bn": "কুরতুবী একই বিষয়ে পৌঁছান ভিন্ন পথ ধরে। তিনি বলেন, কেউ কেউ এখানে 'খালিকীন' শব্দটা পড়েন কারিগর অর্থে, সৃষ্টিকারী অর্থে নয়, কারণ মানুষ জিনিস বানায় ঠিকই, কিন্তু কখনো শূন্য থেকে সৃষ্টি করে না। যেভাবেই পড়া হোক, বাক্যটা আল্লাহকে এমন কিছু প্রতিদ্বন্দ্বীর সঙ্গে তুলনা করছে না যারা একটু কম দক্ষতায় সৃষ্টি করে। এটি প্রতিদ্বন্দ্বীদেরকেই এই শ্রেণি থেকে পুরোপুরি বাদ দিয়ে দেয়। ইলিয়াসের জাতি বা‘লকে যা-ই বলুক, প্রভু, মূর্তি বা অন্য কিছু, তা পড়ে থাকবে বানানো বস্তুর দলে, কখনো সেই একজনের দলে নয় যিনি আসলে কোনো কিছুকে অস্তিত্বে আনেন।"
          }
        ]
      },
      {
        "h": {
          "en": "An Idol That Cannot Answer",
          "bn": "যে মূর্তি জবাব দিতে পারে না"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as praise for Ilyas before it is a rebuke of his people. He is praised for prophethood, for calling to Allah, for commanding taqwa, and for forbidding worship of the thing his people called Ba'l. Against that is placed a plain list of what the idol could not do: it could not harm, could not benefit, could not create, could not provide, could not even eat or speak. As-Sa'di stacks these one after another on purpose, so that the uselessness is not a single claim but a pile of them, each one obvious once stated.",
            "bn": "আস-সাদী এই আয়াতকে জাতির সমালোচনার আগে ইলিয়াসের প্রশংসা হিসেবে পড়েন। তাঁকে প্রশংসা করা হয় নবুওয়ত আর রিসালাতের জন্য, আল্লাহর দিকে আহ্বানের জন্য, তাকওয়ার নির্দেশের জন্য, আর তাঁর জাতি যাকে বা‘ল বলত তার পূজা নিষেধ করার জন্য। তার বিপরীতে রাখা হয় মূর্তিটা কী করতে পারে না তার একটা সোজা তালিকা: তা ক্ষতি করতে পারে না, উপকার করতে পারে না, সৃষ্টি করতে পারে না, রিযিক দিতে পারে না, এমনকি খেতেও পারে না, কথাও বলতে পারে না। আস-সাদী এই কথাগুলো একের পর এক সাজান ইচ্ছাকৃতভাবে, যাতে অক্ষমতাটা একটামাত্র দাবি না থেকে একগুচ্ছ দাবি হয়ে ওঠে, প্রতিটাই একবার বলার পরই স্পষ্ট।"
          },
          {
            "en": "Set against that list is Allah, described in the same short passage as the One who created people, shaped them well, raised them with good upbringing, and kept sending favors their way, some visible and some hidden from them entirely. As-Sa'di closes the point with a question rather than an argument: is leaving worship of someone like that, for worship of something that cannot even eat, anything other than the furthest reach of misguidance, foolishness, and error? He leaves the question to answer itself.",
            "bn": "এই তালিকার বিপরীতে রাখা হয় আল্লাহকে, একই ছোট অনুচ্ছেদে যাঁকে বর্ণনা করা হয় মানুষকে সৃষ্টিকারী, তাদের সুন্দরভাবে গঠনকারী, উত্তম প্রতিপালনে বড় করা, আর তাদের দিকে নিয়ামত পাঠিয়ে যাওয়া সত্তা হিসেবে, যার কিছু দৃশ্যমান আর কিছু তাদের কাছে একেবারে অদৃশ্য। আস-সাদী এই আলোচনা শেষ করেন যুক্তি দিয়ে নয়, একটা প্রশ্ন দিয়ে: এমন একজনের ইবাদত ছেড়ে এমন কিছুর ইবাদত ধরা, যা খেতেও পারে না, এটা পথভ্রষ্টতা, মূর্খতা আর বিভ্রান্তির চূড়ান্ত রূপ ছাড়া আর কী? তিনি প্রশ্নটা নিজেই তার জবাব হয়ে উঠতে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Leaves Open",
          "bn": "আয়াতটি যা খোলা রাখে"
        },
        "p": [
          {
            "en": "None of the tafsirs gathered for this verse attach a hadith to it, so none is used here. What they do attach, repeatedly, is the same two-part shape: a people who named their devotion to something and a prophet who asked them to look at what that name could actually do. The identity of Ba'l stays exactly where the sources leave it, a lord by dialect, an idol by name, a woman or a king by much smaller reports, reconciled in one place but not in every place. This article keeps that disagreement open rather than picking a side for the sources.",
            "bn": "এই আয়াতের জন্য জমা করা কোনো তাফসীরেই কোনো হাদীস জোড়া পাওয়া যায়নি, তাই এখানে কোনো হাদীস ব্যবহার করা হয়নি। তারা বরং বারবার জোড়ে দেয় একই দুই অংশের কাঠামো: এমন এক জাতি, যারা নিজেদের নিষ্ঠাকে একটা নাম দিয়েছিল, আর এমন এক নবী, যিনি তাদের বলেছিলেন দেখো সেই নামটা আসলে কী করতে পারে। বা‘লের পরিচয় ঠিক সেখানেই থেমে থাকে যেখানে সূত্রগুলো তা থামিয়ে দিয়েছে, উপভাষায় প্রভু, নামে মূর্তি, আর অনেক ছোট বর্ণনায় একজন নারী বা রাজা, কোথাও মিলিয়ে দেওয়া হলেও সব জায়গায় নয়। এই লেখা সূত্রগুলোর জন্য একপক্ষ বেছে না নিয়ে এই মতভেদটা খোলাই রাখল।"
          },
          {
            "en": "One thing is not in doubt. 37:130 will later say peace upon Ilyas, the same word spoken over Musa and Harun in 37:120, and the chapter keeps that pattern for every messenger it names. The verse describes a confrontation between one prophet and the people he was sent to, nothing more, and it licenses nothing against any community living today, whatever name its own old mistakes once carried. What it leaves every reader with is the same plain question Ilyas asked first: whatever stands in that seat beside you, can it actually create, provide, or answer you back?",
            "bn": "একটা বিষয়ে সন্দেহ নেই। ৩৭:১৩০ আয়াতে পরে বলা হবে ইলিয়াসের উপর শান্তি বর্ষিত হোক, ৩৭:১২০ আয়াতে মূসা আর হারূনের উপর বলা একই শব্দ, আর এই সূরা প্রতিটি নাম-করা রাসূলের জন্য এই একই ধারা ধরে রাখে। আয়াতটি একজন নবী আর যে জাতির কাছে তিনি প্রেরিত হয়েছিলেন তাদের মধ্যকার একটা সংঘাতের বর্ণনা দেয়, এর বেশি কিছু না, আর আজকের কোনো জীবিত জাতির বিরুদ্ধে এটি কোনো অনুমতি দেয় না, তাদের পুরনো ভুল যে নামেই পরিচিত হোক। পাঠকের জন্য যা থেকে যায় তা হলো ইলিয়াসের প্রথম প্রশ্নটাই: আপনার পাশে যা-ই সেই আসনে বসে থাকুক, সে কি সত্যিই সৃষ্টি করতে, দিতে, বা জবাব দিতে পারে?"
          }
        ]
      }
    ]
  },
  "37:131": {
    "sections": [
      {
        "h": {
          "en": "The Refrain Comes Round Again",
          "bn": "ফিরে আসা একটি ধ্রুবপদ"
        },
        "p": [
          {
            "en": "Innā kadhālika najzī al-muḥsinīn: indeed, We thus reward the doers of good. The sentence is not new to this surah. It closes the account of Nuh (AS) earlier in as-Saffat, it closes a turn of Ibrahim's (AS) episode at 37:105, it closes the rescue of Musa and Harun (AS) at 37:116, and now it closes Ilyas's (AS) story. Each time the wording returns almost unchanged, like a chorus the surah keeps bringing the listener back to after every prophet's account. A reader moving through the surah meets the same four words often enough that they stop sounding like commentary and start sounding like a refrain.",
            "bn": "ইন্না কাযা-লিকা নাজ্বী আল-মুহসিনীন: নিশ্চয়ই আমি এভাবেই সৎকর্মশীলদের প্রতিদান দিয়ে থাকি। এই বাক্যটি এ সূরায় নতুন নয়। সূরা সাফফাতের শুরুর দিকে নূহ (আঃ)-এর বর্ণনার শেষেও এটি আসে, ইবরাহীম (আঃ)-এর কাহিনির একটি পর্বের শেষে ৩৭:১০৫ আয়াতেও আসে, মূসা ও হারুন (আঃ)-কে উদ্ধারের বর্ণনার শেষে ৩৭:১১৬ আয়াতেও আসে, আর এখন ইলিয়াস (আঃ)-এর কাহিনির শেষেও এলো। প্রতিবারই শব্দগুলো প্রায় অবিকল ফিরে আসে, যেন প্রতিটি নবীর কাহিনির পর সূরাটি শ্রোতাকে একই ধ্রুবপদে টেনে আনে। সূরাটি ক্রমানুসারে পড়তে গেলে এই একই চারটি শব্দ এত ঘন ঘন কানে আসে যে তা আর টীকার মতো শোনায় না, বরং শোনায় একটি ধ্রুবপদের মতো।"
          },
          {
            "en": "This repetition is part of how as-Saffat is built, not an accident of translation. Five prophets' stories run through the middle of the surah — Nuh, Ibrahim, Musa and Harun, Ilyas, and Lut right after at 37:133 — strung together by matching turns of phrase. The reward-refrain is one of those threads. This article does not retell what the Ibrahim-context already covers about the refrain at 37:105; that discussion stands. What belongs here instead is what being a muhsin meant in Ilyas's (AS) own story, told in the five verses just before this one.",
            "bn": "এই পুনরাবৃত্তি অনুবাদের কোনো কাকতালীয় ঘটনা নয়; এটি সূরা সাফফাতের গঠনেরই অংশ। সূরাটির মাঝের অংশে পাঁচজন নবীর কাহিনি চলে আসে— নূহ, ইবরাহীম, মূসা ও হারুন, ইলিয়াস, আর ঠিক পরেই ৩৭:১৩৩ আয়াতে লূত (আঃ)। এই কাহিনিগুলো একই ধরনের বাক্যভঙ্গি দিয়ে একসুরে বাঁধা। প্রতিদানের এই ধ্রুবপদটি সেই সুতোগুলোর একটি। ৩৭:১০৫ আয়াতের আলোচনায় ইবরাহীম (আঃ)-এর প্রসঙ্গে এই ধ্রুবপদ নিয়ে যা বলা হয়েছে, তা এখানে আর নতুন করে বলা হচ্ছে না; সে আলোচনা দাঁড়িয়েই আছে। এখানে বরং বলা দরকার, ইলিয়াস (আঃ)-এর নিজের কাহিনিতে সৎকর্মশীল হওয়ার অর্থ কী ছিল, যা এর ঠিক আগের পাঁচ আয়াতে বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Ihsan Meant for Ilyas",
          "bn": "ইলিয়াসের জন্য ইহসানের অর্থ"
        },
        "p": [
          {
            "en": "Trace the five verses that lead here. At 37:124 Ilyas (AS) says to his people, will you not fear Allah? At 37:125, in the verse shipped just before this one, he names what they had chosen instead: Ba'l, a lord worshipped in place of the Best of creators. At 37:127 his people answer by denying him outright, fa-kadhdhabūhu, and the text adds that they will be brought forth for punishment. That is the whole visible record of his mission: one man's appeal, and a town's flat refusal. Even the exception the text allows, except the chosen servants of Allah at 37:128, concedes the town did not listen.",
            "bn": "এর আগের পাঁচ আয়াতের পথ ধরে আসা যাক। ৩৭:১২৪ আয়াতে ইলিয়াস (আঃ) তাঁর সম্প্রদায়কে বলেন, তোমরা কি আল্লাহকে ভয় করবে না? ৩৭:১২৫ আয়াতে, যা এর ঠিক আগেই প্রকাশিত হয়েছে, তিনি বলে দেন তারা কাকে বেছে নিয়েছিল তাঁর বদলে: বা‘য়াল, সর্বোত্তম সৃষ্টিকারীর জায়গায় পূজিত এক প্রভু। ৩৭:১২৭ আয়াতে তাঁর সম্প্রদায়ের জবাব আসে স্পষ্ট প্রত্যাখ্যানে, ফাকাযযাবূহু, আর টেক্সটে যুক্त হয় যে তাদের শাস্তির জন্য হাজির করা হবে। এটিই তাঁর মিশনের সম্পূর্ণ দৃশ্যমান ফল: একজন মানুষের আহ্বান, আর একটি জনপদের পূর্ণ অস্বীকৃতি। টেক্সট যে ব্যতিক্রম রাখে, ৩৭:১২৮ আয়াতে আল্লাহর একনিষ্ঠ বান্দাহদের বাদ দিয়ে, তাও স্বীকার করে যে জনপদ শোনেনি।"
          },
          {
            "en": "Then, at 37:129, the account turns: wa-taraknā 'alayhi fī al-ākhirīn, and We left for him favorable mention among later generations. At 37:130 comes the greeting itself, salāmun 'alā Il Yāsīn, peace upon Elias. Nothing in the town changed. What changed is what was kept of him after the town's answer stopped mattering. Ihsan here was not persuading anyone; it was speaking the truth to a people who denied it, and leaving the outcome to Allah. The sequence matters: the mention and the greeting both arrive after the denial already stands recorded, not before it, so neither is a correction of what happened on the ground.",
            "bn": "তারপর ৩৭:১২৯ আয়াতে বিবরণ ঘুরে যায়: ওয়া তারাকনা 'আলায়হি ফিল আখিরীন, আমি তাকে পরবর্তীদের মাঝে স্মরণীয় করে রাখলাম। ৩৭:১৩০ আয়াতে আসে সরাসরি সালাম, সালামুন 'আলা ইল-য়াসীন, ইলিয়াসের প্রতি শান্তি বর্ষিত হোক। জনপদে কিছুই বদলায়নি। যা বদলেছে তা হলো, জনপদের জবাব গুরুত্বহীন হয়ে যাওয়ার পরও তাঁর সম্পর্কে কী রেখে দেওয়া হলো। এখানে ইহসান মানে কাউকে রাজি করানো ছিল না; বরং যে সম্প্রদায় প্রত্যাখ্যান করেছিল তাদের সামনে সত্য বলা ছিল, আর ফলাফল আল্লাহর হাতে ছেড়ে দেওয়া ছিল। ক্রমটা গুরুত্বপূর্ণ: স্মরণ আর সালাম দুটোই আসে প্রত্যাখ্যানের ঘটনা রেকর্ড হওয়ার পরে, আগে নয়। তাই এ দুটির কোনোটাই মাটিতে আসলে কী ঘটেছিল তার কোনো সংশোধন নয়।"
          },
          {
            "en": "That is the arc this verse closes. Innā kadhālika najzī al-muḥsinīn is not a generic coda dropped onto any prophet's story; here it answers the specific shape of Ilyas's (AS) test — denial met with remembrance, rejection met with peace. The capstone names what the preceding verses had already shown without naming it: that standing alone against an entire town's idolatry, and being disbelieved for it, is itself the good that gets repaid. Read this way, the verse is less a summary tacked onto the end than a verdict delivered on a case already heard in full, the five verses just before it standing as its evidence.",
            "bn": "এই ধারাই এই আয়াত দিয়ে সম্পূর্ণ হয়। ইন্না কাযা-লিকা নাজ্বী আল-মুহসিনীন কোনো নবীর কাহিনির শেষে বসানো একটা সাধারণ সমাপ্তি-বাক্য নয়; এখানে এটি ইলিয়াস (আঃ)-এর পরীক্ষার নির্দিষ্ট রূপের জবাব দেয়, প্রত্যাখ্যানের বদলে স্মরণ, প্রত্যাখ্যানের বদলে শান্তি। আগের আয়াতগুলো যা দেখিয়েছিল কিন্তু নাম দেয়নি, এই চূড়ান্ত আয়াত তার নাম দিয়ে দেয়: একটি সম্পূর্ণ জনপদের মূর্তিপূজার বিরুদ্ধে একা দাঁড়ানো, আর তার জন্য অবিশ্বাসী বলে গণ্য হওয়া, এটাই সেই সৎকর্ম যার প্রতিদান দেওয়া হয়। এভাবে দেখলে, এ আয়াত নিছক একটা সংযুক্ত সারাংশ নয়, বরং এক রায়, যা আগে থেকেই পূর্ণ শুনানি হওয়া একটি মামলার উপর দেওয়া হলো, আর তার প্রমাণ হলো এর ঠিক আগের পাঁচটি আয়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "One Word Carrying the Reward",
          "bn": "প্রতিদান বহনকারী একটি শব্দ"
        },
        "p": [
          {
            "en": "At-Tabari glosses kadhālika, thus, by unpacking what it stands in for: innā hākadhā najzī ahla ṭā'atinā wa-al-muḥsinīn a'mālan — indeed, this is how We reward the people of Our obedience and those who do good in their deeds. The gloss ties the reward to two things at once, obedience and the quality of the deeds done, which matches the story just told: Ilyas's (AS) obedience was precisely his insistence on calling his people to Allah alone, against every pressure to stop. Read against the five verses before it, that insistence is the only thing left standing once the denial is recorded, obedience that outlived the argument it lost.",
            "bn": "তাবারী কাযা-লিকা (এভাবে) শব্দটির ব্যাখ্যায় বলেন: ইন্না হাকাযা নাজ্বী আহলা তা'আতিনা ওয়াল মুহসিনীনা আ'মালান— নিশ্চয়ই এভাবেই আমি আমার আনুগত্যশীল বান্দাদের আর যারা কাজে সৎকর্মশীল তাদের প্রতিদান দিই। এই ব্যাখ্যা প্রতিদানকে একসাথে দুটি বিষয়ের সাথে বাঁধে, আনুগত্য আর কাজের গুণগত মান, যা মাত্র বলা কাহিনির সাথেই মেলে: ইলিয়াস (আঃ)-এর আনুগত্য ছিল ঠিক এটাই, তাঁর সম্প্রদায়কে একমাত্র আল্লাহর দিকে ডাকতে থাকা, সমস্ত চাপ উপেক্ষা করেও। এর আগের পাঁচ আয়াতের আলোকে দেখলে, প্রত্যাখ্যান রেকর্ড হয়ে যাওয়ার পর এই অনড় আনুগত্যই একমাত্র জিনিস যা টিকে থাকে, এমন আনুগত্য যা তার হারিয়ে যাওয়া তর্কের চেয়েও বেশি দিন বেঁচে রইল।"
          },
          {
            "en": "Al-Muyassar reads the same word as a direct callback within this single passage, not merely to the general formula: wa-kamā jazaynā Ilyāsa al-jazā' al-ḥasan 'alā ṭā'atihi, najzī al-muḥsinīn min 'ibādinā al-mu'minīn — and just as We rewarded Ilyas with the good reward for his obedience, We reward the doers of good among Our believing servants. Here kadhālika points backward to Ilyas's own case first, and only through him outward to every muhsin after him. That order of reading, Ilyas named before the general rule that follows him, is exactly the capstone relationship the earlier sections of this article describe.",
            "bn": "মুয়াসসার এই শব্দকেই এই অনুচ্ছেদের ভেতরে একটি সরাসরি প্রতিধ্বনি হিসেবে পড়ে, শুধু সাধারণ নিয়ম হিসেবে নয়: ওয়া কামা জাযাইনা ইলয়াসা আল-জাযা'আল-হাসান 'আলা তা'আতিহি, নাজ্বী আল-মুহসিনীন মিন 'ইবাদিনা আল-মু'মিনীন— আর যেভাবে আমি ইলিয়াসকে তার আনুগত্যের বিনিময়ে উত্তম প্রতিদান দিয়েছি, তেমনিভাবে আমি আমার মু'মিন বান্দাদের মধ্যে সৎকর্মশীলদের প্রতিদান দিই। এখানে কাযা-লিকা প্রথমে ইলিয়াসের নিজের ঘটনার দিকেই ফিরে তাকায়, আর তাঁর মধ্য দিয়েই পরে প্রতিটি সৎকর্মশীলের দিকে প্রসারিত হয়। আগে ইলিয়াসের নাম, পরে সাধারণ নিয়ম, এই ক্রমটাই এ লেখার আগের অংশে বলা চূড়ান্ত-সমাপ্তির সম্পর্কটাকেই দেখায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Qurtubi's Two Readings of the Reward",
          "bn": "কুরতুবীর দুই রকম ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Al-Qurtubi offers this verse two readings within his own commentary, not as a dispute with another scholar but as two ways the single sentence can be taken. The first ties the reward to what was just said: annā nabqī 'alayhim al-thanā' al-ḥasan, that We preserve for them good praise, the very thing 37:129 just described. On this reading kadhālika points at the preceding verse directly, and the 'reward' named in 37:131 is the lasting good name Ilyas (AS) was given. Nothing here pits al-Qurtubi against the other mufassirun already read; his two glosses sit beside, not against, at-Tabari's and al-Muyassar's own wording of the same reward.",
            "bn": "আল-কুরতুবী নিজের তাফসীরের ভেতরেই এই আয়াতের দুটি ব্যাখ্যা দেন, কোনো অন্য আলেমের সাথে মতবিরোধ হিসেবে নয়, বরং একই বাক্যকে দুই দিক থেকে দেখার উপায় হিসেবে। প্রথম ব্যাখ্যায় তিনি প্রতিদানকে ঠিক আগের বক্তব্যের সাথে বাঁধেন: আন্না নাবকী 'আলায়হিম আল-ছানা' আল-হাসান, যে আমি তাদের জন্য উত্তম প্রশংসা অক্ষুণ্ণ রাখি, যা ৩৭:১২৯ আয়াতেই বলা হয়েছিল। এই ব্যাখ্যায় কাযা-লিকা সরাসরি আগের আয়াতের দিকে ইঙ্গিত করে, আর ৩৭:১৩১ আয়াতে বলা 'প্রতিদান' হলো ইলিয়াস (আঃ)-কে দেওয়া সেই স্থায়ী সুনাম। এখানে কুরতুবীকে আগে পড়া অন্য তাফসীরকারদের বিরুদ্ধে দাঁড় করানোর কিছু নেই; তাঁর দুই ব্যাখ্যা তাবারী ও মুয়াসসারের নিজ নিজ বক্তব্যের পাশাপাশিই বসে, বিরুদ্ধে নয়।"
          },
          {
            "en": "His second reading widens the frame: aw najzīhim bi-al-khalāṣ min al-shadā'id fī al-dunyā wa-al-ākhira, or We reward them with deliverance from hardships in this world and the next. On this second reading the reward is not only the good name but the relief itself, matching every other prophet the refrain has closed a story for. Both readings are al-Qurtubi's own, kept side by side rather than chosen between, and both fit what Ilyas's (AS) five verses have already shown: a hard station, and a lasting answer to it. Either way, the reward is named outright, not left for the reader to guess at.",
            "bn": "তাঁর দ্বিতীয় ব্যাখ্যা দৃষ্টিভঙ্গিটা আরও বিস্তৃত করে: আও নাজ্বীহিম বিল খালাস মিনাশ শাদা-ইদ ফিদ দুনয়া ওয়াল আখিরাহ, অথবা আমি তাদের দুনিয়া ও আখিরাতের কষ্ট থেকে মুক্তি দিয়ে প্রতিদান দিই। এই দ্বিতীয় ব্যাখ্যায় প্রতিদান শুধু সুনাম নয়, বরং মুক্তি নিজেই, যা এই ধ্রুবপদ যে প্রতিটি নবীর কাহিনির শেষে বসেছে তার সবগুলোর সাথেই মেলে। দুটি ব্যাখ্যাই কুরতুবীর নিজের, একটিকে বাদ দিয়ে অন্যটি বেছে না নিয়ে তিনি দুটিকেই পাশাপাশি রেখেছেন, আর দুটিই ইলিয়াস (আঃ)-এর সেই পাঁচ আয়াতে যা দেখানো হয়েছে তার সাথে মেলে: একটি কঠিন অবস্থান, আর তার একটি স্থায়ী জবাব। যেভাবেই দেখা হোক, প্রতিদানটা সরাসরি নাম ধরে বলে দেওয়া হয়, পাঠককে অনুমান করতে ছেড়ে দেওয়া হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Praised Like His Brothers",
          "bn": "ভাইদের মতোই প্রশংসিত"
        },
        "p": [
          {
            "en": "As-Sa'di states the point most directly: fa-athnā Allāhu 'alayhi kamā athnā 'alā ikhwānihi ṣalawātu Allāhi wa-salāmuhu 'alayhim ajma'īn — so Allah praised him just as He praised his brothers, Allah's prayers and peace be upon them all. The word ikhwānihi, his brothers, names exactly what this article's first section traced through the surah's structure: Ilyas (AS) stands here among a line of prophets each closed out with the same praise, not singled out for a different one. As-Sa'di does not need to list which brothers he means; the surah has already supplied their names, one story at a time, long before this verse arrives.",
            "bn": "আস-সা'দী সবচেয়ে সরাসরি কথাটা বলেন: ফা আছনা আল্লাহু 'আলায়হি কামা আছনা 'আলা ইখওয়ানিহি সালাওয়াতু আল্লাহি ওয়া সালামুহু 'আলায়হিম আজমা'ঈন— তাই আল্লাহ তাঁর প্রশংসা করলেন ঠিক যেমন তাঁর ভাইদের প্রশংসা করেছিলেন, আল্লাহর রহমত ও শান্তি বর্ষিত হোক তাদের সবার উপর। ইখওয়ানিহি, তাঁর ভাইয়েরা শব্দটি ঠিক তা-ই বলে দেয় যা এই লেখার প্রথম অংশে সূরার গঠন ধরে দেখানো হয়েছে: ইলিয়াস (আঃ) এখানে একই প্রশংসায় সমাপ্ত হওয়া একসারি নবীর মধ্যে দাঁড়িয়ে আছেন, আলাদা কোনো প্রশংসার জন্য বেছে নেওয়া হননি। কোন ভাইদের কথা বলছেন, আস-সা'দীর তা আলাদা করে বলার প্রয়োজনই নেই; এই আয়াতের আগেই সূরা এক এক কাহিনিতে তাঁদের নাম বলে দিয়েছে।"
          },
          {
            "en": "Al-Baghawi's note on this verse is a single bare line, the Arabic text quoted and nothing added. That brevity is itself informative: where a mufassir has a genuine dispute to record, he records it; where the sentence is plain and the pattern already settled by the surah's earlier prophets, he lets it stand without comment. Nothing here suggests a scholar held back a reading that disagreed with another's. Measured against how much the same commentators write when a verse actually divides them, the silence here reads as confirmation rather than oversight: five sources, one short sentence, nothing left to argue about.",
            "bn": "আল-বাগাভীর এই আয়াতের উপর টীকা একটিমাত্র খালি লাইন, আরবি লেখাটিই উদ্ধৃত, আর কিছু যুক্ত করা হয়নি। এই সংক্ষিপ্ততাই তথ্যবহুল। কোনো তাফসীরকারের কাছে সত্যিকারের কোনো মতবিরোধ লেখার থাকলে তিনি তা লেখেন; বাক্যটি সরল আর সূরার আগের নবীদের কাহিনিতে ধারাটি আগেই স্থিরীকৃত হয়ে গেলে তিনি কোনো মন্তব্য ছাড়াই তা ছেড়ে দেন। এখানে এমন কোনো আভাস নেই যে কোনো আলেম অন্য কারও সাথে ভিন্নমত পোষণ করেও তা চেপে গেছেন। একই তাফসীরকারেরা যখন কোনো আয়াতে সত্যিই দ্বিমত পোষণ করেন, তখন কতটা লেখেন তার সাথে তুলনা করলে বোঝা যায়, এই নীরবতা উপেক্ষা নয়, বরং একমত হওয়ার প্রমাণ: পাঁচটি সূত্র, একটিমাত্র সংক্ষিপ্ত বাক্য, তর্ক করার মতো কিছুই অবশিষ্ট নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Settled Line, Not a Dispute",
          "bn": "নিষ্পত্তিকৃত বিষয়, মতবিরোধ নয়"
        },
        "p": [
          {
            "en": "Ibn Kathir's Arabic commentary on this verse is one short sentence: qad taqaddama tafsīruhu wa-Allāhu a'lam, its interpretation has already preceded, and Allah knows best. He is pointing the reader back to his own earlier comments on the same refrain after Nuh and Ibrahim (AS), rather than writing the explanation again. His abridged English commentary does the same across the whole block running from 37:123 to 37:132, noting plainly that the meaning of this sentence has already been discussed above. A reader who wants the fuller explanation has to go back to those earlier verses themselves; Ibn Kathir is not hiding anything, only refusing to repeat it.",
            "bn": "ইবন কাসীরের আরবি তাফসীরে এই আয়াতের উপর মন্তব্য একটিমাত্র ছোট বাক্য: কাদ তাকাদ্দামা তাফসীরুহু ওয়াল্লাহু আ'লাম, এর ব্যাখ্যা আগেই চলে এসেছে, আর আল্লাহ সর্বজ্ঞ। তিনি পাঠককে নূহ ও ইবরাহীম (আঃ)-এর পর এই একই ধ্রুবপদের উপর নিজের আগের মন্তব্যের দিকে ফিরিয়ে দিচ্ছেন, নতুন করে ব্যাখ্যা না লিখে। তাঁর সংক্ষিপ্ত ইংরেজি তাফসীরও ৩৭:১২৩ ও ৩৭:১৩২ এর মাঝের পুরো অংশ জুড়ে একই কাজ করে, স্পষ্ট করে বলে যে এই বাক্যের অর্থ আগেই আলোচনা করা হয়েছে। পুরো ব্যাখ্যা চাইলে পাঠককে সেই আগের আয়াতগুলোতেই ফিরে যেতে হবে; ইবন কাসীর কিছু গোপন করছেন না, শুধু পুনরাবৃত্তি করতে চাইছেন না।"
          },
          {
            "en": "Across five mufassirun fetched for this single verse, that is the whole picture: no name contradicts another, and nothing resembling a real exegetical dispute is on offer. What they add instead is confirmation, from different angles, that this is the standing promise of the surah applied once more, now specifically to Ilyas (AS). Manufacturing a disagreement where the sources show none would misrepresent them; the honest report is that the commentators agree. That agreement is worth stating plainly rather than papering over with invented tension, because a reader who expects every tafsir section to turn up a quarrel will otherwise assume one was missed here rather than that none exists.",
            "bn": "এই একটি মাত্র আয়াতের জন্য সংগ্রহ করা পাঁচজন তাফসীরকারের মধ্যে এটাই পুরো ছবি: কারও বক্তব্য কারও বক্তব্যের বিরোধী নয়, আর সত্যিকারের কোনো তাফসীরগত মতবিরোধ এখানে নেই। তাঁরা বরং ভিন্ন ভিন্ন দিক থেকে একই কথার সমর্থন জোগান: এটি সূরার সেই স্থায়ী প্রতিশ্রুতি, যা আরেকবার এসেছে, এবার নির্দিষ্টভাবে ইলিয়াস (আঃ)-এর প্রসঙ্গে। যেখানে উৎসে কোনো মতবিরোধ নেই, সেখানে একটা বানিয়ে তোলা উৎসগুলোর প্রতি অবিচার হতো; সৎ প্রতিবেদন হলো, তাফসীরকারেরা একমত। এই একমত হওয়ার কথা স্পষ্ট করে বলাই ভালো, মিথ্যা টানাপোড়েন তৈরি করে ঢেকে না রেখে। নইলে প্রতিটি তাফসীর অংশেই কোনো না কোনো মতবিরোধ আশা করা পাঠক ধরে নিতে পারেন যে এখানে একটা বাদ পড়ে গেছে, যদিও বাস্তবে তা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hadith Checked and Set Aside",
          "bn": "যাচাই করে বাদ দেওয়া হাদিস"
        },
        "p": [
          {
            "en": "The standing check for this module is Bukhari 660: the Prophet (SAW) said that Allah will shade seven under His shade on the Day when there is no shade but His — a just ruler, a youth raised in worship, a man whose heart clings to the mosques, two who love each other for Allah's sake, a man who refuses a seductress out of fear of Allah, a man who gives charity so secretly his left hand does not know what his right gave, and one who remembers Allah alone until his eyes fill with tears, as Bukhari records it, without alteration.",
            "bn": "এই মডিউলের নিয়মিত যাচাইয়ের অংশ হিসেবে বুখারী ৬৬০ নম্বর হাদিসটি দেখা হলো: নবী (সাঃ) বলেছেন, যেদিন আল্লাহর ছায়া ছাড়া আর কোনো ছায়া থাকবে না, সেদিন আল্লাহ সাতটি শ্রেণির মানুষকে তাঁর ছায়ায় ছায়া দেবেন, একজন ন্যায়পরায়ণ শাসক, যে যুবক ইবাদতে বেড়ে উঠেছে, যে ব্যক্তির অন্তর মসজিদের সাথে লেগে থাকে, দুজন যারা একে অপরকে আল্লাহর জন্যই ভালোবাসে, যে ব্যক্তি রূপবতী নারীর আহ্বান প্রত্যাখ্যান করে বলে আমি আল্লাহকে ভয় করি, যে এমন গোপনে দান করে যে তার ডান হাত কী দিল তা বাম হাত জানে না, আর যে একাকী আল্লাহকে স্মরণ করতে করতে চোখ ভিজে যায়, বুখারীর বর্ণনা অনুযায়ী অবিকল।"
          },
          {
            "en": "None of the tafsir fetched for 37:131 cites this hadith, and nothing in it names Ilyas (AS), idolatry, or the specific shape of his ordeal. It is a real and sound hadith about categories of the righteous, but it is a general narration, not one the sources attach to this verse. The honest report is to say so and set it aside rather than force a link that is not there. This is a small instance of a standing rule: a hadith's soundness is not the question when nothing ties it to the verse at hand, so the plainer course is reporting the absence rather than a false connection.",
            "bn": "৩৭:১৩১ আয়াতের জন্য সংগ্রহ করা তাফসীরগুলোর কোনোটিই এই হাদিস উদ্ধৃত করে না, আর এতে ইলিয়াস (আঃ), মূর্তিপূজা, বা তাঁর নির্দিষ্ট পরীক্ষার কোনো নাম নেই। এটি সৎকর্মশীলদের একটি শ্রেণি নিয়ে একটি সত্যিকারের ও সহিহ হাদিস, কিন্তু এটি একটি সাধারণ বর্ণনা, যা উৎসগুলো এই আয়াতের সাথে জোড়ে না। সৎ প্রতিবেদন হলো তা স্পষ্ট বলে দেওয়া আর জোর করে কোনো সংযোগ না বানানো যা আসলে নেই। এটি একটি স্থায়ী নিয়মেরই ছোট দৃষ্টান্ত: হাদিসটি সহিহ কি না তা প্রশ্ন নয়, যখন কোনো কিছুই তাকে এই আয়াতের সাথে জোড়ে না। তখন সহজ পথ হলো অনুপস্থিতিটা জানিয়ে দেওয়া, মিথ্যা সংযোগ না বানানো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Law Wider Than One Prophet",
          "bn": "এক নবীর চেয়েও বড় নিয়ম"
        },
        "p": [
          {
            "en": "The grammar itself points past Ilyas (AS) alone: al-muḥsinīn is a plural with no restriction to prophets, and every mufassir read above takes it that way. What is being named is a standing law: good done for Allah's sake is kept and repaid, of which Nuh, Ibrahim, Musa and Harun, and now Ilyas (AS) are supreme examples, not the only beneficiaries. The same law reaches whoever answers to the description after them, which is why a verse about one prophet's lonely stand still has something to say to a reader who is nobody's prophet at all.",
            "bn": "ব্যাকরণই ইলিয়াস (আঃ) একজনের সীমানা ছাড়িয়ে ইঙ্গিত করে: আল-মুহসিনীন একটি বহুবচন শব্দ, নবীদের মধ্যে সীমাবদ্ধ নয়, আর উপরে পড়া প্রতিটি তাফসীরকারই এটাকে সেভাবেই পড়েছেন। এখানে যা বলা হচ্ছে তা একটি স্থায়ী নিয়ম: আল্লাহর জন্য করা ভালো কাজ রক্ষিত হয় আর প্রতিদান পায়। এর সর্বোচ্চ দৃষ্টান্ত নূহ, ইবরাহীম, মূসা ও হারুন, আর এখন ইলিয়াস (আঃ), কিন্তু একমাত্র সুবিধাভোগী নন তারাই। একই নিয়ম তাদের পরে এই বর্ণনার সাথে মিলে যাওয়া প্রত্যেকের কাছেও পৌঁছায়। তাই একজন নবীর একাকী দাঁড়ানো নিয়ে এই আয়াত এমন একজন পাঠকের কাছেও কিছু বলার আছে, যিনি কোনো নবী নন।"
          },
          {
            "en": "This is where Ilyas's (AS) arc differs from the two reward-refrains shipped nearby. 37:116 closes Musa and Harun's (AS) story through the arc of support and victory over an oppressor; 37:105 closes a turn in Ibrahim's (AS) episode, where the refrain itself is discussed at length. Here the reward answers a quieter trial: no rescue, no visible victory, just a lone call made and refused, and a name kept regardless. The surah leaves Ilyas (AS) with one more line, at 37:132, that he was of Our believing servants — the ground his story stands on, not this article's to open.",
            "bn": "এখানেই ইলিয়াস (আঃ)-এর ধারা পাশের দুটি প্রতিদান-ধ্রুবপদ থেকে আলাদা হয়ে যায়, যা ইতিমধ্যে প্রকাশিত হয়েছে। ৩৭:১১৬ আয়াত মূসা ও হারুন (আঃ)-এর কাহিনি সম্পূর্ণ করে সাহায্য ও একজন অত্যাচারীর উপর বিজয়ের ধারায়; ৩৭:১০৫ আয়াত ইবরাহীম (আঃ)-এর কাহিনির একটি পর্ব সম্পূর্ণ করে, যেখানে এই ধ্রুবপদ নিয়ে বিস্তারিত আলোচনা আগেই হয়ে গেছে। এখানে প্রতিদান একটি নিভৃত পরীক্ষার জবাব দেয়: কোনো উদ্ধার নেই, কোনো দৃশ্যমান বিজয় নেই, কেবল একা দেওয়া এক আহ্বান আর তার প্রত্যাখ্যান, আর তবুও রক্ষিত একটি নাম। সূরা ইলিয়াস (আঃ)-কে আরও একটি বাক্য দিয়ে রেখে দেয়, ৩৭:১৩২ আয়াতে, যে তিনি ছিলেন আমার মু'মিন বান্দাদের অন্তর্ভুক্ত— যে ভিত্তির উপর তাঁর কাহিনি দাঁড়িয়ে আছে, যা খোলার কাজ এই লেখার নয়।"
          }
        ]
      }
    ]
  },
  "37:134": {
    "sections": [
      {
        "h": {
          "en": "Rescued, Root and Branch",
          "bn": "উদ্ধার সম্পূর্ণ পরিবারকে"
        },
        "p": [
          {
            "en": "Idh najjaynahu wa-ahlahu ajma'in: [so mention] when We saved him and his family, all. The verb najjaynahu carries the root n-j-w, to rescue from danger, and Allah speaks it in the first person, We saved, naming Himself as the one who acted. Ahlahu is simply his household, those who shared his roof and his message. Ajma'in then seals the sentence: all of them, every single one, with nothing left outside the count. Four words in Arabic, and together they report a complete deliverance, not a partial one.",
            "bn": "ইজ নাজ্জাইনাহু ওয়া আহলাহু আজমাঈন: স্মরণ করুন, যখন আমি তাকে আর তার পরিবারের সবাইকে উদ্ধার করেছিলাম। নাজ্জাইনাহু শব্দটি এসেছে নজা ধাতু থেকে, যার অর্থ বিপদ থেকে টেনে আনা। আল্লাহ এখানে নিজের কথা প্রথম পুরুষে বলছেন, 'আমি উদ্ধার করেছি', যিনি নিজেই এ কাজ করেছেন তিনি নিজেই তা জানাচ্ছেন। আহলাহু মানে তাঁর পরিবার, যারা তাঁর ছাদ আর তাঁর দাওয়াত ভাগ করে নিয়েছিল। আজমাঈন কথাটা পুরো বাক্যকে বন্ধ করে দেয়: সবাই, একজনও বাদ নয়, হিসাবের বাইরে কিছু রাখা হয়নি। আরবিতে চারটি মাত্র শব্দ, তবু তা একটি সম্পূর্ণ উদ্ধারের খবর দেয়, আংশিক কিছু নয়।"
          },
          {
            "en": "The pronoun order matters too: him first, then his family, as if the rescue reached Lut (AS) before it reached anyone who stood with him, and only then swept outward to include them. This is the same Lut just named two verses earlier as one of the messengers, so the household being saved here is the household of a prophet under threat, not an ordinary family fleeing an ordinary danger that could have struck anyone. The totality word ajma'in forecloses any reading in which some unnamed believer inside that house was quietly left to the punishment that fell on the rest of the town.",
            "bn": "শব্দক্রমটাও লক্ষ্য করার মতো: আগে তাঁকে, পরে তাঁর পরিবারকে বলা হয়েছে, যেন উদ্ধার প্রথমে লূত (আঃ)-এর কাছে পৌঁছাল, তারপর তা ছড়িয়ে গেল তাঁর সঙ্গে থাকা সবার দিকে। এই লূতকেই দুই আয়াত আগে রসূলদের একজন বলে পরিচয় দেওয়া হয়েছে, তাই এখানে যে পরিবার উদ্ধার পেল তা একজন বিপন্ন নবীর পরিবার, সাধারণ কোনো বিপদে পড়া সাধারণ পরিবার নয়। আজমাঈন শব্দটি এমন কোনো ব্যাখ্যার দরজা একেবারে বন্ধ করে দেয়, যেখানে সে বাড়ির কোনো অজানা মু'মিন নীরবে বাকি জনপদের শাস্তির ভাগী হয়ে যেত।"
          },
          {
            "en": "Every tafsir fetched for this verse agrees on this plain sense, with no real dispute among at-Tabari, Ibn Kathir, as-Sa'di, al-Baghawi or al-Muyassar about what the words say. That agreement itself is worth noting: a verse this short, reporting an event already told at length elsewhere in the Qur'an, leaves little room for the mufassirun to differ, and none of them tries to manufacture a disagreement where the text does not actually have one.",
            "bn": "এই আয়াতের জন্য আনা প্রতিটি তাফসীরই একই সরল অর্থে একমত, তাবারী, ইবন কাসীর, সা'দী, বাগাভী বা মুয়াসসারের মধ্যে এ নিয়ে বাস্তবিক কোনো মতভেদ নেই। এই একমত হওয়াটাই লক্ষ্য করার মতো: এত ছোট একটি আয়াত, যা কুরআনের অন্য জায়গায় ইতিমধ্যে বিস্তারিত বলা হয়েছে, সেখানে মুফাসসিরদের জন্য দ্বিমত করার জায়গা কমই থাকে। তাঁদের কেউই এমন কোনো মতভেদ বানিয়ে তোলেননি যা মূল পাঠে আসলে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Confirmed Across the Mufassirun",
          "bn": "মুফাসসিরদের অভিন্ন সাক্ষ্য"
        },
        "p": [
          {
            "en": "At-Tabari glosses the verse directly: idh najjaynahu wa-ahlahu ajma'in, meaning, he says, that We saved Lut and his family, all of them, from the punishment We sent down on his people, destroying his people by that same punishment. The structure he draws out is simple but exact: one act of Allah, two outcomes for two groups sharing the same town. The household inside the house of a messenger receives deliverance; the town outside it receives the punishment. Nothing in at-Tabari's own wording here leaves open who belongs to which outcome.",
            "bn": "তাবারী সরাসরি এ আয়াতের অর্থ বলে দেন: এর মানে, তিনি বলেন, আমি লূত আর তাঁর পরিবারের সবাইকে সেই শাস্তি থেকে উদ্ধার করেছিলাম যা তাঁর সম্প্রদায়ের উপর নাযিল করেছিলাম, আর সেই একই শাস্তিতে তাদের ধ্বংস করেছিলাম। তিনি যে কাঠামোটা তুলে ধরেন তা সহজ কিন্তু স্পষ্ট: আল্লাহর একটিমাত্র কাজ, একই জনপদের দুই ভাগের জন্য দুই রকম পরিণতি। একজন রসূলের ঘরের ভেতরের পরিবার মুক্তি পায়, আর ঘরের বাইরের জনপদ শাস্তি পায়। তাবারীর নিজের ভাষায় কোথাও এই প্রশ্ন খোলা থাকে না যে কে কোন পরিণতির ভাগী।"
          },
          {
            "en": "Ibn Kathir's own gloss is shorter still: fa-kadhdhabuhu fa-najjahu Allahu min bayna azhurihim huwa wa ahluhu, they denied him, so Allah saved him from among them, he and his family. As-Sa'di adds the detail of how: when the town did not stop at its denial, Allah saved him and his family, all of them; fa-saru laylan fa-najaw, they traveled by night and were saved. The night journey is as-Sa'di's own word for the mechanism behind the rescue, not a detail invented elsewhere in the sources read for this verse.",
            "bn": "ইবন কাসীরের ব্যাখ্যা আরও সংক্ষিপ্ত: ফাকাযযাবুহু ফানাজ্জাহুল্লাহু মিন বাইনি আজহুরিহিম হুওয়া ওয়া আহলুহু, অর্থাৎ তারা তাঁকে অস্বীকার করল, তাই আল্লাহ তাঁকে আর তাঁর পরিবারকে তাদের মাঝ থেকে উদ্ধার করলেন। সা'দী এর সঙ্গে জুড়ে দেন কীভাবে তা ঘটল: জনপদ যখন অস্বীকার করা থেকে থামল না, আল্লাহ তাঁকে আর তাঁর পরিবারের সবাইকে উদ্ধার করলেন; ফাসারু লাইলান ফানাজাও, তারা রাতে যাত্রা করল আর বেঁচে গেল। এই রাতের যাত্রার কথাটা সা'দীর নিজের সংযোজন, উদ্ধারের পদ্ধতি বোঝাতে, অন্য কোনো সূত্র থেকে নেওয়া নয়।"
          },
          {
            "en": "Al-Baghawi's note on this verse is the shortest of all: he simply repeats the Qur'an's own wording, idh najjaynahu wa-ahlahu ajma'in, without adding a syllable of his own commentary. Read beside at-Tabari and as-Sa'di, that silence is itself a kind of agreement; there was nothing in the sentence that needed defending, qualifying or explained further. Four independent commentators, working across centuries and very different methods, land on exactly the same plain reading of exactly the same four words.",
            "bn": "বাগাভীর টীকা সবচেয়ে সংক্ষিপ্ত: তিনি স্রেফ কুরআনের নিজের ভাষাটাই পুনরাবৃত্তি করেন, ইজ নাজ্জাইনাহু ওয়া আহলাহু আজমাঈন, নিজের থেকে একটি শব্দও যোগ না করে। তাবারী আর সা'দীর পাশে রাখলে এই নীরবতাও একরকম সম্মতি: বাক্যে এমন কিছু ছিল না যা নিয়ে আর কিছু বলার, যুক্তি দেখানোর বা ব্যাখ্যা করার দরকার পড়ে। চারজন ভিন্ন মুফাসসির, ভিন্ন শতক আর ভিন্ন পদ্ধতিতে কাজ করেও, একই চারটি শব্দের একই সরল অর্থে এসে মিলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Completeness Meets Its Exception",
          "bn": "সম্পূর্ণতা ও তার ব্যতিক্রম"
        },
        "p": [
          {
            "en": "Read on one more verse and the completeness this verse states meets what looks like a contradiction: except an old woman among those who remained [37:135]. If all means all, how can anyone be excepted at all? The classical answer is not a grammatical trick but a statement about who the rescue was actually for. Ajma'in in 37:134 affirms that every believer in Lut's household, every person who actually belonged to it in the sense that mattered, was brought out whole; none of the saved were left behind by accident, oversight, or any failure in the rescue itself.",
            "bn": "আরেকটি আয়াত এগিয়ে পড়লে এই সম্পূর্ণতার দাবি একটা ধাঁধার মুখে পড়ে বলে মনে হয়: এক বৃদ্ধা ছাড়া, যিনি ছিলেন পিছে-পড়াদের একজন [৩৭:১৩৫]। সবাই যদি সবাইকেই বোঝায়, তবে কাউকে বাদ দেওয়া যায় কী করে? প্রচলিত উত্তরটা কোনো ব্যাকরণের কৌশল নয়, বরং এ কথা বলে যে উদ্ধার আসলে কাদের জন্য ছিল। ৩৭:১৩৪-এর আজমাঈন শব্দটি জানিয়ে দেয়, লূতের পরিবারে যে প্রকৃত মু'মিন ছিল, যে আসলেই সেই পরিবারের অন্তর্গত ছিল, সে সবাই অক্ষত অবস্থায় বেরিয়ে এসেছিল। উদ্ধারপ্রাপ্তদের কাউকেই ভুলবশত বা অবহেলায় রেখে দেওয়া হয়নি।"
          },
          {
            "en": "The exception in the next verse then does a separate job: it names the one person who, despite sharing Lut's house and his bed for years, was never truly part of that saved group to begin with. At-Tabari's own gloss on this verse already points this way, since he ties the saving to those who received it, not to every person who merely happened to live under Lut's roof. The two verses are not in tension; the second simply tells you who the word all was never describing in the first place.",
            "bn": "পরের আয়াতের ব্যতিক্রমটি তাহলে আলাদা একটা কাজ করে: তা সেই একজনের নাম বলে দেয়, যিনি লূতের ঘর আর তাঁর বিছানা বছরের পর বছর ভাগ করেও, শুরু থেকেই সেই উদ্ধারপ্রাপ্ত দলের ভেতরে ছিলেন না। তাবারীর নিজের ব্যাখ্যাই এই দিকে ইঙ্গিত করে, কারণ তিনি উদ্ধারকে বেঁধে দেন যারা তা পেয়েছিল তাদের সঙ্গে, লূতের ছাদের নিচে থাকা প্রতিটি মানুষের সঙ্গে নয়। দুটি আয়াত পরস্পরবিরোধী নয়; দ্বিতীয়টি শুধু বলে দেয় সবাই শব্দটা আদতে কাদের বোঝাত না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Portion of the Night",
          "bn": "রাতের এক ভাগে যাত্রা"
        },
        "p": [
          {
            "en": "Al-Qurtubi fills in how the household left. He writes that Lut (AS) traveled with his family by night, exactly as Allah describes it elsewhere: bi-qit'in min al-layl, during a portion of the night [11:81]. That earlier verse records the instruction behind this one's bare report: the messengers told Lut to set out with his family while some of the night remained, and warned that none of them should look back, except his wife, who alone would be struck by what struck the rest of the town.",
            "bn": "কুরতুবী বলে দেন পরিবারটি কীভাবে বের হয়েছিল। তিনি লেখেন, লূত (আঃ) রাতে তাঁর পরিবারকে নিয়ে বের হয়েছিলেন, ঠিক যেভাবে আল্লাহ অন্যত্র বলেছেন: রাতের একটি অংশ বাকি থাকতে [১১:৮১]। সেই আগের আয়াতেই এই আয়াতের সংক্ষিপ্ত খবরের পেছনের নির্দেশটা লেখা আছে: ফেরেশতারা লূতকে বলেছিলেন রাত কিছুটা বাকি থাকতেই পরিবার নিয়ে বের হতে, আর সতর্ক করেছিলেন কেউ পেছনে না তাকাতে, তাঁর স্ত্রী ছাড়া, যিনি একাই সেই আঘাত পাবেন যা বাকিদের উপর পড়বে।"
          },
          {
            "en": "Al-Qurtubi then describes what followed on Allah's command: the angel Jibril (AS), sent to lift the cities themselves before the punishment fell on the people who stayed in them. The detail belongs to al-Qurtubi's own report and is not found in the shorter glosses read above; it fills a narrative gap the terse Qur'anic sentence leaves open, without changing anything the earlier mufassirun already confirmed about who exactly was saved and who was not.",
            "bn": "কুরতুবী তারপর বলেন আল্লাহর নির্দেশে কী ঘটেছিল: ফেরেশতা জিবরীল (আঃ)-কে পাঠানো হয়েছিল শহরগুলো তুলে নিতে, শাস্তি নামার আগে। এই বিবরণ কুরতুবীর নিজের বর্ণনা, উপরে পড়া সংক্ষিপ্ত টীকাগুলোতে এর কোনো চিহ্ন নেই। এটা কুরআনের সংক্ষিপ্ত বাক্যের একটা শূন্যস্থান পূরণ করে, কিন্তু আগে পড়া মুফাসসিরদের নিশ্চিত করা কথাটা বদলায় না, কে উদ্ধার পেয়েছিল আর কে পায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Stone That Found Her",
          "bn": "যে পাথর তাকে পেল"
        },
        "p": [
          {
            "en": "Continuing the same report, al-Qurtubi describes Jibril (AS) putting his wing beneath the cities, uprooting them, and turning them upside down, after which stones rained down on those who remained inside them. In the middle of this, he adds one specific detail: a stone caught up with Lut's wife, wa-kanat ma'ahu, and she was with him, and killed her. That phrase, she was with him, is al-Qurtubi's own, and it matters because it locates her physically beside her husband even as the rescue failed to cover her.",
            "bn": "একই বর্ণনা চালিয়ে কুরতুবী বলেন, জিবরীল (আঃ) তাঁর ডানার নিচে শহরগুলো তুলে নিয়ে উপুড় করে ফেলে দিলেন, তারপর যারা থেকে গিয়েছিল তাদের উপর পাথর ঝরে পড়ল। এর মধ্যেই তিনি একটা বিশেষ তথ্য জুড়ে দেন: একটা পাথর লূতের স্ত্রীকেও ধরে ফেলল, তিনি তখন তাঁর সঙ্গেই ছিলেন, আর তা তাঁকে মেরে ফেলল। তিনি তখন সঙ্গেই ছিলেন, কথাটা কুরতুবীর নিজের সংযোজন, আর এটা গুরুত্বপূর্ণ কারণ এতে তাঁকে স্বামীর ঠিক পাশে দেখানো হয়েছে, এমন সময়েও যখন উদ্ধার তাঁকে ছুঁতে পারল না।"
          },
          {
            "en": "None of this licenses any conclusion about the people of any town today. The verse and the reports that fill it out describe a specific people, in a specific place, judged for what they did; they say nothing about, and license nothing against, any living person or community now or in the past. The destruction belongs to the story being told, not to anyone standing outside it in the present.",
            "bn": "এ থেকে আজকের কোনো জনপদ সম্পর্কে কোনো সিদ্ধান্তে পৌঁছানোর অনুমতি নেই। আয়াতটি আর এর ব্যাখ্যাকারী বর্ণনাগুলো একটি নির্দিষ্ট সম্প্রদায়ের কথা বলে, একটি নির্দিষ্ট স্থানে, তাদের নিজ কাজের জন্য বিচারপ্রাপ্ত। এসব বর্ণনা আজকের বা অতীতের কোনো জীবিত মানুষ বা জনগোষ্ঠী সম্পর্কে কিছু বলে না, আর তাদের বিরুদ্ধে কোনো অনুমতিও দেয় না। এই ধ্বংস কাহিনির অংশ, কাহিনির বাইরে দাঁড়িয়ে থাকা কারো সম্পর্কে নয়।"
          },
          {
            "en": "What the narrative detail does not settle, though, is a question the next verse's single word, old woman, leaves open: why she, despite going out of the house with the rest and despite sharing her husband's bed for years, still did not count among those the word ajma'in in this verse describes as saved. The next section reads two mufassirun's answers to exactly that question side by side.",
            "bn": "তবে এই বর্ণনার খুঁটিনাটি একটা প্রশ্নের জবাব দেয় না, যা পরের আয়াতের একটিমাত্র শব্দ, বৃদ্ধা, খোলা রেখে দেয়: ঘর থেকে বেরিয়েও, বছরের পর বছর স্বামীর বিছানা ভাগ করেও, কেন তিনি এই আয়াতের আজমাঈন শব্দে বর্ণিত উদ্ধারপ্রাপ্তদের মধ্যে ধরা পড়লেন না। পরের অংশে দুইজন মুফাসসিরের জবাব পাশাপাশি রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Tellings, One Scripture",
          "bn": "দুই বর্ণনা, এক কুরআন"
        },
        "p": [
          {
            "en": "Al-Muyassar's gloss on this verse gives a different emphasis than al-Qurtubi's narrative. It states plainly that the old woman of 37:135 was Lut's wife, and that she perished with those of her people who perished, li-kufriha, because of her disbelief. Where al-Qurtubi pictures a stone finding her in the open, physically present beside her husband, al-Muyassar names the reason in terms of belief rather than geography: she belonged, in the end, with the people who were destroyed, not with the household that was carried to safety.",
            "bn": "মুয়াসসারের টীকা কুরতুবীর বর্ণনা থেকে আলাদা জোর দেয়। এটি সরাসরি বলে, ৩৭:১৩৫-এর বৃদ্ধা ছিলেন লূতের স্ত্রী, আর তিনি তাঁর সম্প্রদায়ের ধ্বংসপ্রাপ্তদের সঙ্গেই ধ্বংস হয়েছিলেন, লিকুফরিহা, তাঁর কুফরের কারণে। কুরতুবী যেখানে তাঁকে খোলা জায়গায় পাথরের আঘাতে, স্বামীর ঠিক পাশে দেখান, মুয়াসসার কারণটা বলেন বিশ্বাসের ভাষায়, স্থানের ভাষায় নয়: শেষ পর্যন্ত তিনি ছিলেন সেই ধ্বংসপ্রাপ্ত সম্প্রদায়ের সঙ্গে, নিরাপদে নিয়ে যাওয়া পরিবারের সঙ্গে নয়।"
          },
          {
            "en": "These need not be read against each other. The Qur'an's own words at 11:81 hold both together: Lut's household was told to leave, none of them to look back, except your wife, indeed what befalls them will befall her. Her disbelief is why the exception was made for her at all; the stone, if al-Qurtubi's report is accepted, is simply how that exception was carried out in the end. One account gives the cause, the other the means, and 11:81 is the verse that lets both stand together.",
            "bn": "এই দুই বর্ণনাকে একে অপরের বিরুদ্ধে দাঁড় করানোর দরকার নেই। ১১:৮১-এ কুরআনের নিজের কথাই দুটোকে একসঙ্গে ধরে রাখে: লূতের পরিবারকে বের হতে বলা হয়েছিল, কেউ পেছনে তাকাবে না, তাঁর স্ত্রী ছাড়া, কারণ বাকিদের উপর যা ঘটবে তাঁর উপরও তাই ঘটবে। তাঁর কুফরই এই ব্যতিক্রমের কারণ; আর পাথরটা, কুরতুবীর বর্ণনা মানলে, সেই ব্যতিক্রম কার্যকর হওয়ার উপায় মাত্র। একটি বর্ণনা কারণ বলে, অন্যটি উপায় বলে, আর ১১:৮১ আয়াতটিই দুটোকে একসঙ্গে দাঁড়াতে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Her Name Returns at At-Tahrim",
          "bn": "তাহরীম সূরায় ফিরে আসা নাম"
        },
        "p": [
          {
            "en": "The Qur'an names her again, without naming her, at 66:10: Allah presents an example of those who disbelieved, the wife of Noah and the wife of Lot. They were under two of Our righteous servants but betrayed them, so the two prophets could not avail them anything against Allah at all. The word used there, ghadarat, is usually rendered betrayed or unfaithful, not to the marriage as such, but to the religion her husband carried.",
            "bn": "কুরআন তাঁকে আবার নাম না নিয়েই স্মরণ করে, ৬৬:১০-এ: আল্লাহ তাদের জন্য দৃষ্টান্ত দেন যারা কুফরী করেছে, নূহ (আঃ)-এর স্ত্রী আর লূতের স্ত্রী। তাঁরা ছিলেন আমার দুই নেককার বান্দার অধীনে, কিন্তু তাঁদের সঙ্গে বিশ্বাসঘাতকতা করেছিলেন, ফলে এই দুই নবী আল্লাহর শাস্তি থেকে তাঁদের কিছুই বাঁচাতে পারেননি। সেখানে ব্যবহৃত শব্দ গাদারাত্‌-কে সাধারণত বিশ্বাসঘাতকতা বা অবিশ্বস্ততা বলে অনুবাদ করা হয়, বিয়ের প্রতি নয়, বরং স্বামীর বহন করা ধর্মের প্রতি।"
          },
          {
            "en": "Paired with Noah's (AS) wife, she becomes the Qur'an's own example of a case closer kinship does not decide: two prophets, two households, and in each one a wife who did not share the belief that would have placed her among the saved. Read beside 37:134's ajma'in, 66:10 explains in Allah's own words, not a narrator's, why the all of that rescue was never going to include her in the end.",
            "bn": "নূহ (আঃ)-এর স্ত্রীর সঙ্গে জুড়ে তিনি হয়ে ওঠেন কুরআনের নিজের একটা উদাহরণ, যেখানে রক্তের নিকটতা কিছু ঠিক করে দেয় না: দুই নবী, দুই পরিবার, আর প্রত্যেক পরিবারে এমন এক স্ত্রী যিনি সেই বিশ্বাস রাখেননি যা তাঁকে উদ্ধারপ্রাপ্তদের মধ্যে রাখতে পারত। ৩৭:১৩৪-এর আজমাঈন শব্দের পাশে রাখলে, ৬৬:১০ আল্লাহর নিজের ভাষায় বলে দেয়, কেন সেই উদ্ধারের সবাই শব্দে তাঁর জায়গা কখনোই ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Ruin Does Not License",
          "bn": "ধ্বংস যা অনুমতি দেয় না"
        },
        "p": [
          {
            "en": "The stock hadith checked for this verse, Bukhari 660 on the seven whom Allah will shade on the Day when there is no shade but His, names no connection to Lut (AS), his household, or any rescue at all. None of the tafsir fetched for 37:134 attaches a hadith to it either. The honest report is that this verse carries no sound hadith of its own, and the general narration above is dropped here rather than forced into a link the sources do not make.",
            "bn": "এই আয়াতের জন্য যাচাই করা প্রচলিত হাদিসটি, বুখারী ৬৬০, বলে সেই সাতটি শ্রেণীর কথা যাদের আল্লাহ সেদিন ছায়া দেবেন যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না। এতে লূত (আঃ), তাঁর পরিবার বা কোনো উদ্ধারের সঙ্গে কোনো যোগসূত্র নেই। ৩৭:১৩৪-এর জন্য আনা কোনো তাফসীরেই কোনো হাদিস জোড়া নেই। সঠিক কথা এটাই যে এই আয়াতের নিজের কোনো সহীহ হাদিস নেই, আর উপরের সাধারণ বর্ণনাটি এখানে বাদ দেওয়া হলো, জোর করে কোনো সংযোগ তৈরি না করে।"
          },
          {
            "en": "The wider point stands again: this is an account of one household's rescue and one people's punishment, fixed in a particular history, and it licenses nothing against any community living now, whatever town or people it is read alongside. What it does offer, repeated across every mufassir read here, is a single plain fact: the rescue was complete for everyone who actually belonged to the believing household, and incomplete for the one person who, despite the roof she shared, did not.",
            "bn": "বড় কথাটা আবারও দাঁড়ায়: এটা একটা নির্দিষ্ট ইতিহাসে বাঁধা এক পরিবারের উদ্ধার আর এক সম্প্রদায়ের শাস্তির বিবরণ, আর এখন বেঁচে থাকা কোনো জনগোষ্ঠীর বিরুদ্ধে এর কোনো অনুমতি নেই, যে জনপদ বা জাতির সঙ্গেই তা মিলিয়ে পড়া হোক। এখানে পড়া প্রতিটি মুফাসসিরের বর্ণনায় একটাই সরল সত্য ফিরে আসে: যে প্রকৃতই মু'মিন পরিবারের অন্তর্গত ছিল তার জন্য উদ্ধার ছিল সম্পূর্ণ, আর যে ছাদ ভাগ করেও সেই পরিবারের অন্তর্গত ছিলেন না, তাঁর জন্য তা ছিল অসম্পূর্ণ।"
          },
          {
            "en": "Surah as-Saffat moves on from here to describe the destruction itself and the ruins later travelers would pass morning and evening, before turning to the story of Yunus (AS) a few verses later. This verse's own claim is smaller and sturdier than either of those: when Allah saves, the word all means exactly what it says, for exactly the people it was ever going to include and no one else.",
            "bn": "সূরা আস-সাফফাত এখান থেকে এগিয়ে গিয়ে বর্ণনা করে সেই ধ্বংসের কথা আর সেই ধ্বংসস্তূপের কথা, যার পাশ দিয়ে পরে পথচারীরা সকাল-সন্ধ্যায় চলাচল করবে, আর কয়েক আয়াত পরেই শুরু হয় ইউনুস (আঃ)-এর কাহিনি। এই আয়াতের নিজের দাবিটা এই দুটোর চেয়েও ছোট, কিন্তু তার চেয়েও মজবুত: আল্লাহ যখন উদ্ধার করেন, সবাই শব্দটা ঠিক তা-ই বোঝায় যা বলে, একদম সেই মানুষদের জন্য যাদের জন্য তা কখনোই বলা হয়েছিল, আর অন্য কোনো একজনের জন্য না।"
          }
        ]
      }
    ]
  },
  "37:142": {
    "sections": [
      {
        "h": {
          "en": "The Fish Closes Over Him",
          "bn": "মাছ তাকে গিলে ফেলল"
        },
        "p": [
          {
            "en": "Faltaqamahu al-hut: then the fish swallowed him. At-Tabari glosses the verb plainly as fa-ibtala'ahu al-hut, the fish gulped him down, and notes its form, built from the root l-q-m, a morsel taken in a single mouthful. Al-Baghawi reads the same verb the same way, ibtala'ahu, swallowed, and al-Muyassar keeps to that one bare word as well. The Arabic does not picture a slow devouring but one closing motion of the jaws, a mouth shutting over a man at a stroke. Yunus (AS) is inside before the sentence has even finished.",
            "bn": "ফালতাকামাহুল হূত: অতঃপর মাছটি তাঁকে গিলে ফেলল। তাবারী ক্রিয়াটির সোজা অর্থ দেন ফা-ইবতালাআহুল হূত, মাছ তাঁকে এক ঢোকে গিলে নিল। তিনি এর গঠনও ধরিয়ে দেন, ল-ক-ম মূল থেকে গড়া, যার মানে এক গ্রাসে তুলে নেওয়া একটি লোকমা। বাগাভী একই ক্রিয়াকে একইভাবে পড়েন, ইবতালাআহু, গিলে ফেলল, আর মুয়াসসারও সেই একটিমাত্র সাদামাটা শব্দেই থামে। আরবি এখানে ধীরে ধীরে খেয়ে ফেলার ছবি আঁকে না, আঁকে চোয়াল বন্ধ হওয়ার একটিমাত্র নড়াচড়া, যেন এক পলকে একজন মানুষের উপর মুখ বন্ধ হয়ে গেল। বাক্য শেষ হওয়ার আগেই ইউনুস (আঃ) ভেতরে।"
          },
          {
            "en": "The fish itself is no chance predator. Ibn Kathir reports that Allah commanded a great fish from the Green Sea to cleave the waters, reach Yunus (AS) and take him in without tearing his flesh or breaking a single bone. The creature that looks like the end of him is under orders, sent to carry rather than to kill. The very swallow that seems to close the story is, from the first instant, an errand of control. Nothing in the scene runs loose; the whole sea bends to a single word of command.",
            "bn": "মাছটি কোনো আকস্মিক শিকারি নয়। ইবন কাসীর জানান, আল্লাহ সবুজ সমুদ্রের এক বিশাল মাছকে আদেশ দিলেন পানি চিরে ইউনুস (আঃ)-এর কাছে পৌঁছাতে এবং তাঁকে এমনভাবে গিলে নিতে যাতে তাঁর মাংস ছিঁড়ে না যায়, একটিও হাড় ভেঙে না যায়। যে প্রাণীকে তাঁর শেষ বলে মনে হচ্ছে, সে আসলে হুকুমের অধীন, পাঠানো হয়েছে মারতে নয়, বহন করতে। যে গিলে ফেলা কাহিনিটা বন্ধ করে দিচ্ছে বলে মনে হয়, তা প্রথম মুহূর্ত থেকেই নিয়ন্ত্রণের এক কাজ। দৃশ্যে কিছুই ছাড়া পেয়ে ঘটছে না, গোটা সমুদ্র একটি আদেশের কথায় নুয়ে পড়ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Unharmed Inside the Belly",
          "bn": "পেটের ভেতরে অক্ষত"
        },
        "p": [
          {
            "en": "Ibn Kathir carries a vivid report of what followed. When Yunus (AS) had settled inside the fish, he supposed at first that he had died. Then he moved his head, then his legs, then the rest of his limbs, and found that he was still alive. Realising this, he did not thrash about or curse his fate. He stood, there in the belly of the fish, and prayed. The first thing the living man does in the dark is not to plan an escape but to place himself before his Lord again, body and soul.",
            "bn": "ইবন কাসীর এরপরের ঘটনার এক জীবন্ত বিবরণ আনেন। ইউনুস (আঃ) মাছের ভেতরে থিতু হওয়ার পর প্রথমে ভাবলেন তিনি বুঝি মারা গেছেন। তারপর নাড়লেন মাথা, তারপর পা, তারপর বাকি অঙ্গপ্রত্যঙ্গ, আর দেখলেন তিনি তখনো বেঁচে আছেন। এটা বুঝে তিনি ছটফট করলেন না, নিজের ভাগ্যকে গালও দিলেন না। মাছের পেটের ভেতরেই তিনি দাঁড়ালেন আর নামাজ পড়লেন। অন্ধকারে জীবিত মানুষটির প্রথম কাজ পালানোর ছক কষা নয়, বরং দেহ ও প্রাণ নিয়ে আবার নিজের রবের সামনে দাঁড়ানো।"
          },
          {
            "en": "Among the words of that prayer, the same report preserves a startling line: O Lord, I have taken for You a place of worship in a spot no human being has ever reached. He does not ask first to be let out. He marks the belly of the fish as a mosque, the one spot of earth, or of sea, where this particular servant can still turn a face toward heaven. The place that ought to be a grave he names a station of worship, and that very naming is already the turning. The dark has not undone him; it has gathered him.",
            "bn": "সেই দোয়ার কথাগুলোর মধ্যে একই বিবরণ একটি চমকে দেওয়া বাক্য রেখে দেয়: হে রব, আমি আপনার জন্য এমন এক জায়গায় ইবাদতের ঘর বানিয়েছি, যেখানে কোনো মানুষ কখনো পৌঁছায়নি। তিনি আগে বেরোনোর কথা বলেন না। তিনি মাছের পেটকেই মসজিদ বানিয়ে নেন, মাটি কিংবা সমুদ্রের সেই একটিমাত্র বিন্দু, যেখানে এই বান্দা এখনো আসমানের দিকে মুখ ফেরাতে পারেন। যে জায়গার কবর হওয়ার কথা, তাকেই তিনি ইবাদতের মোকাম বলে ডাকেন, আর এই ডাকটাই আসলে ফেরা শুরু হয়ে যাওয়া। অন্ধকার তাঁকে ভেঙে দেয়নি, বরং গুছিয়ে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight of Muleem",
          "bn": "মুলীম শব্দটির ভার"
        },
        "p": [
          {
            "en": "The verse's last word is a single, loaded term: wa huwa muleem. At-Tabari reads it as wa huwa muktasib al-lawm, and he was one who had earned blame. He draws a careful grammatical line. The Arabs say alama ar-rajul of a man who has done something that deserves blame, whether or not anyone actually blames him, the way they say a man has turned foolish or thirsty when the foolishness or the thirst is simply in him. Blameworthy, on this reading, names a state a man has brought upon himself, not a scolding laid upon him.",
            "bn": "আয়াতের শেষ শব্দটি একটিমাত্র ভারী শব্দ: ওয়া হুয়া মুলীম। তাবারী একে পড়েন ওয়া হুয়া মুকতাসিবুল লাওম, অর্থাৎ তিনি ছিলেন এমন একজন যিনি ধিক্কার অর্জন করেছিলেন। তিনি একটি সূক্ষ্ম ব্যাকরণগত রেখা টানেন। আরবরা কোনো লোকের বেলায় বলে আলামার রাজুল তখন, যখন সে ধিক্কারযোগ্য কিছু করেছে, কেউ তাকে সত্যিই ধিক্কার দিক বা না দিক। যেমন তারা বলে কারও মধ্যে বোকামি বা পিপাসা আছে, যখন বোকামি বা পিপাসাটা নিছক তার ভেতরেই থাকে। এই পড়ায় ধিক্কারযোগ্য মানে লোকটি নিজের উপর যে অবস্থা টেনে এনেছে, বাইরে থেকে চাপানো কোনো তিরস্কার নয়।"
          },
          {
            "en": "At-Tabari then sets muleem against a near neighbour, al-maloom. The maloom is the one actually reproached, blamed aloud with the tongue; the muleem is the one in whom the grounds for blame already sit, whether spoken of or not. He cites a line of the poet Labid to fix the usage. The distinction matters for how we hear the verse. Scripture is not reporting that someone stood over Yunus (AS) scolding him. It is naming a condition he was in before his Lord, quietly, with no human audience looking on at all.",
            "bn": "এরপর তাবারী মুলীমকে এর কাছাকাছি একটি শব্দ আল-মালূমের মুখোমুখি রাখেন। মালূম সে-ই, যাকে সত্যিই তিরস্কার করা হয়, জিভ দিয়ে উচ্চারণ করে ধিক্কার দেওয়া হয়। আর মুলীম সে-ই, যার ভেতরে ধিক্কারের কারণ আগে থেকেই বসে আছে, তা মুখে আনা হোক বা না হোক। তিনি এই ব্যবহার পাকা করতে কবি লাবীদের একটি পঙ্‌ক্তি তুলে ধরেন। এই পার্থক্যটা আয়াত শোনার জন্য জরুরি। আয়াত এ কথা জানাচ্ছে না যে কেউ ইউনুস (আঃ)-এর মাথার উপর দাঁড়িয়ে তাঁকে বকছিল। বরং তা নাম দিচ্ছে তাঁর রবের সামনে থাকা একটি অবস্থার, নীরবে, যেখানে দেখার মতো কোনো মানুষই ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Readers Gloss It",
          "bn": "তাফসীরকারেরা কী বোঝেন"
        },
        "p": [
          {
            "en": "On what exactly the blame rests, the early readers give close but distinct glosses, and at-Tabari lines them up. Mujahid reads muleem as mudhnib, one who had done wrong. Ibn Zayd gives the very same word, mudhnib, adding that muleem and mudhnib carry one meaning here. Qatada ties it to the deed itself, reading it as blame in what he did, fi sun'ihi. None of these is the article speaking. Each is a commentator telling us which shade the Arabic word is carrying, and all of them keep it to the narrow sense of the term.",
            "bn": "ধিক্কারটা ঠিক কীসের উপর বসে, তা নিয়ে আদি তাফসীরকারেরা কাছাকাছি অথচ আলাদা ব্যাখ্যা দেন, আর তাবারী সেগুলো সাজিয়ে দেন। মুজাহিদ মুলীমকে পড়েন মুযনিব হিসেবে, একজন যে ভুল করেছে। ইবন যায়দ ঠিক সেই একই শব্দ দেন, মুযনিব, আর যোগ করেন যে মুলীম ও মুযনিব এখানে একই অর্থ বহন করে। কাতাদা একে জুড়ে দেন কাজটির সঙ্গেই, পড়েন সে যা করেছে তার মধ্যে ধিক্কার, ফী সুনইহি। এর কোনোটিই নিবন্ধের নিজের কথা নয়। প্রতিটি হলো একজন তাফসীরকারের বলা, আরবি শব্দটি কোন ছায়া বহন করছে, আর তাঁরা সবাই একে শব্দের সংকীর্ণ অর্থের মধ্যেই রাখেন।"
          },
          {
            "en": "Al-Qurtubi gathers two readings of the word. First, muleem means one who has come with something for which he is blamed, ata bima yulamu alayh. Second, some read al-muleem as al-mu'ib, the one who has made himself faulty: you say lama ar-rajul when a man does a thing and so becomes defective by that very act. Al-Qurtubi too marks the maloom apart, as the one actually blamed whether he deserved it or not. These are two angles on one word, both of them about a fault that is owned, not a reproach that is received.",
            "bn": "কুরতুবী শব্দটির দুটি পড়া একসঙ্গে জড়ো করেন। প্রথমত, মুলীম মানে এমন একজন যে এমন কিছু নিয়ে এসেছে যার জন্য তাকে ধিক্কার দেওয়া হয়, আতা বিমা ইউলামু আলাইহ। দ্বিতীয়ত, কেউ কেউ আল-মুলীমকে পড়েন আল-মুইব হিসেবে, যে নিজেকে দোষযুক্ত করে ফেলেছে। বলা হয় লামার রাজুল তখন, যখন কোনো লোক এমন কাজ করে যে সেই কাজেই সে ত্রুটিযুক্ত হয়ে যায়। কুরতুবীও মালূমকে আলাদা করে চেনান, সে-ই যাকে সত্যিই ধিক্কার দেওয়া হয়, সে তার যোগ্য হোক বা না হোক। এ হলো একটি শব্দের উপর দুটি দৃষ্টিকোণ, দুটিই নিজের কাঁধে নেওয়া এক দোষ নিয়ে, বাইরে থেকে পাওয়া তিরস্কার নিয়ে নয়।"
          },
          {
            "en": "as-Sa'di is the one commentator here who names what the blame was for. He glosses muleem as fa'il ma yulamu alayh, one doing what deserves blame, and then says plainly what that was: wa huwa mughadabatuhu li-rabbih, his having gone off in anger from his Lord, leaving his people without being given leave to go. This is as-Sa'di's reading of the word, not a verdict pronounced here; and it lines up exactly with how the Qur'an itself tells the same moment elsewhere, which is where the next section turns.",
            "bn": "এখানে সাদী সেই একজন তাফসীরকার, যিনি ধিক্কারটা কীসের জন্য তা নাম ধরে বলেন। তিনি মুলীমের ব্যাখ্যা দেন ফাইল মা ইউলামু আলাইহ, অর্থাৎ যে এমন কিছু করছে যা ধিক্কারযোগ্য, আর তারপর সোজা বলেন সেটা কী ছিল: ওয়া হুয়া মুগাদাবাতুহু লি-রাব্বিহ, তাঁর রবের কাছ থেকে রাগ করে সরে যাওয়া, অনুমতি না নিয়ে নিজের জাতিকে ছেড়ে যাওয়া। এ হলো সাদীর শব্দ-ব্যাখ্যা, এখানে ঘোষিত কোনো রায় নয়। আর এটি হুবহু মিলে যায় কুরআন নিজে যেভাবে একই মুহূর্ত অন্যত্র বলেছে তার সঙ্গে, আর পরের অংশ সেদিকেই মোড় নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Qur'an Tells It Again",
          "bn": "কুরআন আবার বলে"
        },
        "p": [
          {
            "en": "The Qur'an does not leave this moment to Surah as-Saffat alone. In 21:87 it calls Yunus (AS) dhun-nun, the man of the fish, when he departed in anger and thought We would not press hard upon him. Then it records his own cry from within the layered dark: there is no god but You, glory be to You, I was indeed among the wrongdoers. The departure in anger is the Qur'an's own naming of the lapse, and az-zalimin, among the wrongdoers, is the word Yunus (AS) reaches for about himself. He does not wait to be accused.",
            "bn": "কুরআন এই মুহূর্তটা কেবল সূরা সাফফাতের হাতে ছেড়ে দেয় না। ২১:৮৭ আয়াতে ইউনুস (আঃ)-কে ডাকা হয় যুন-নূন, মাছের মানুষ, যখন তিনি রাগ করে সরে গিয়েছিলেন আর ভেবেছিলেন আমি তাঁকে চেপে ধরব না। তারপর তা তুলে রাখে স্তরে স্তরে জমা অন্ধকারের ভেতর থেকে তাঁর নিজের ডাক: আপনি ছাড়া কোনো ইলাহ নেই, আপনি পবিত্র, নিশ্চয়ই আমি ছিলাম সীমালঙ্ঘনকারীদের একজন। রাগ করে সরে যাওয়াই কুরআনের নিজের মুখে ভুলটির নাম, আর আয-যালিমীন, সীমালঙ্ঘনকারীদের দলে, এই শব্দটিই ইউনুস (আঃ) নিজের সম্পর্কে বেছে নেন। তিনি অভিযোগের অপেক্ষা করেন না।"
          },
          {
            "en": "A second retelling comes in 68:48 to 68:50. There the Prophet (ﷺ) is told: be patient for your Lord's decree, and be not like the companion of the fish, when he called out while choked with grief. Yet the same passage ends by saying that his Lord chose him and placed him among the righteous. The Qur'an holds two truths in one breath. It can say do not do as he did and, in the very next line, record that God selected him and made him upright. The blame and the honour sit together on a single page.",
            "bn": "দ্বিতীয় বর্ণনাটি আসে ৬৮:৪৮ থেকে ৬৮:৫০ আয়াতে। সেখানে নবী ﷺ-কে বলা হয়: আপনার রবের ফয়সালার জন্য ধৈর্য ধরুন, আর মাছের সঙ্গীর মতো হবেন না, যখন সে দুঃখে দম বন্ধ হয়ে ডেকে উঠেছিল। তবু সেই একই অনুচ্ছেদ শেষ হয় এই বলে যে তাঁর রব তাঁকে বেছে নিলেন এবং সৎকর্মশীলদের দলে রাখলেন। কুরআন দুটি সত্য একসঙ্গে এক নিঃশ্বাসে ধরে রাখে। সে বলতে পারে, সে যা করেছে তা কোরো না, আবার ঠিক পরের লাইনেই লিখে রাখে যে আল্লাহ তাঁকে বেছে নিয়ে ঠিক পথে এনেছেন। ধিক্কার আর সম্মান একটিমাত্র পৃষ্ঠায় পাশাপাশি বসে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prophet Not Ranked Below",
          "bn": "নবীকে ছোট করা নয়"
        },
        "p": [
          {
            "en": "There is a hadith that guards exactly against misreading this verse. Al-Bukhari records, from Ibn Abbas, that the Prophet (ﷺ) said: One should not say that I am better than Yunus bin Matta. The report sits in al-Bukhari's own Sahih, his standard of soundness, and in it the Prophet attaches Yunus (AS) to his father's name as he speaks. The verse that marks the man as blameworthy and this word that forbids a single servant to rank himself above him are not in tension. Together they fix the measure: a real lapse recorded, the prophet's honour kept whole.",
            "bn": "একটি হাদীস আছে যা ঠিক এই আয়াতের ভুল পড়ার বিরুদ্ধে পাহারা দেয়। বুখারী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: একজন বান্দারও বলা উচিত নয় যে আমি ইউনুস ইবন মাত্তার চেয়ে উত্তম। বর্ণনাটি আছে বুখারীর নিজের সহীহতে, তাঁর সহীহ হওয়ার মাপকাঠিতে, আর তাতে নবী ﷺ বলার সময় ইউনুস (আঃ)-কে তাঁর বাবার নামের সঙ্গে জুড়ে দেন। যে আয়াত লোকটিকে ধিক্কারযোগ্য বলে চিহ্নিত করে আর যে কথা একজন বান্দাকেও তাঁর উপরে নিজেকে বসাতে নিষেধ করে, দুয়ের মধ্যে কোনো টানাপড়েন নেই। দুটোয় মিলে মাপটা ঠিক করে দেয়: সত্যিকারের একটি ভুল লেখা হলো, আর নবীর সম্মান অটুট রইল।"
          },
          {
            "en": "This needs saying plainly, in the spirit of that hadith. The verse names a lapse and does not hide it, but it hands no one a licence to belittle Yunus (AS), to doubt his prophethood, or to treat a servant's lowest moment as the whole measure of him. If scripture itself refuses to let the honour of this prophet be touched even while recording his fault, then no reader has any warrant to do worse. What the verse opens up is not a case to be built against Yunus (AS); it is a mirror held up to the one who is reading it.",
            "bn": "এ কথা সোজাসুজি বলা দরকার, সেই হাদীসের চেতনায়। আয়াত একটি ভুলের নাম দেয় এবং তা লুকায় না, কিন্তু কাউকে এ অনুমতি দেয় না যে সে ইউনুস (আঃ)-কে ছোট করবে, তাঁর নবুয়তে সন্দেহ আনবে, কিংবা একজন বান্দার সবচেয়ে নিচু মুহূর্তটাকে তার গোটা পরিচয় বানিয়ে ফেলবে। আয়াত নিজেই যখন এই নবীর সম্মানে হাত দিতে দেয় না, এমনকি তাঁর দোষ লেখার সময়েও, তখন কোনো পাঠকের এর চেয়ে বাজে কিছু করার অধিকার নেই। আয়াত যা খুলে দেয় তা ইউনুস (আঃ)-এর বিরুদ্ধে গড়ে তোলার কোনো মামলা নয়, তা পাঠকের নিজের সামনে ধরা একটি আয়না।"
          }
        ]
      },
      {
        "h": {
          "en": "How Long in Darkness",
          "bn": "অন্ধকারে কতদিন"
        },
        "p": [
          {
            "en": "How long Yunus (AS) stayed in that darkness, the sources do not settle, and Ibn Kathir reports the range without choosing between its ends. Qatada said three days. Ja'far as-Sadiq said a week, seven days. Abu Malik said forty days. Ash-Sha'bi, by way of Mujahid, said the fish swallowed him in the forenoon and cast him out that same evening, a single day. Ibn Kathir closes the list with the only honest seal, wa Allahu a'lam, and Allah knows best how long it truly was. The number is not the lesson; the turning inside it is.",
            "bn": "ইউনুস (আঃ) সেই অন্ধকারে কতদিন ছিলেন, সূত্রগুলো তা স্থির করে না, আর ইবন কাসীর দুই প্রান্তের কোনোটি বেছে না নিয়েই পুরো পরিসরটা জানান। কাতাদা বলেছেন ৩ দিন। জাফর আস-সাদিক বলেছেন এক সপ্তাহ, ৭ দিন। আবু মালিক বলেছেন চল্লিশ দিন। শাবী, মুজাহিদের সূত্রে, বলেছেন মাছ তাঁকে গিলেছিল পূর্বাহ্নে আর সেই সন্ধ্যাতেই বের করে দিয়েছিল, মোটে একটি দিন। ইবন কাসীর তালিকাটি শেষ করেন একমাত্র সৎ সিলমোহরে, ওয়াল্লাহু আলাম, আর আল্লাহই ভালো জানেন আসলে কতদিন ছিল। সংখ্যাটা শিক্ষা নয়, শিক্ষা হলো তার ভেতরের ফেরা।"
          },
          {
            "en": "That the count is left open is itself instructive. Had one figure been fixed, a reader might fasten onto the arithmetic of the ordeal and miss its heart. The sources keep the duration loose and the response sharp: however many days it ran, the man spent them glorifying his Lord, as the verse right after this one will say. What rescues a person in the dark is never the clock on the wall. It is what the heart does while the clock runs, and here the heart had turned back the very moment the mouth closed.",
            "bn": "গণনাটা খোলা রেখে দেওয়াই নিজে থেকে একটা শিক্ষা। একটি সংখ্যা পাকা করে দিলে পাঠক হয়তো পরীক্ষার হিসাব-নিকাশে আটকে গিয়ে এর মূল কথাটা হারিয়ে ফেলত। সূত্রগুলো সময়টা আলগা রাখে, আর সাড়াটা রাখে ধারালো: যত দিনই হোক, মানুষটি সেগুলো কাটিয়েছেন নিজের রবের তাসবীহে, ঠিক পরের আয়াত যেমন বলবে। অন্ধকারে কাউকে বাঁচায় কখনো দেয়ালের ঘড়ি নয়। বাঁচায় ঘড়ি চলার সময়টায় হৃদয় যা করে, আর এখানে মুখ বন্ধ হওয়ার ঠিক মুহূর্তেই হৃদয় ফিরে এসেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Dark Is For",
          "bn": "অন্ধকার কীসের জন্য"
        },
        "p": [
          {
            "en": "Put the pieces together and the verse stops being a tale about a fish. A man carrying a message walks off in anger; the word muleem settles on him; the sea swallows him at a command; and the first thing he does in the belly is turn his face back to God. The whole motion, from the lapse to the dark to the prayer, happens across the span of three short verses. The Qur'an is showing, rather than telling, just how fast a servant can come back once he finally stops running.",
            "bn": "টুকরোগুলো একসঙ্গে রাখুন, আর আয়াতটি আর মাছ নিয়ে গল্প থাকে না। বার্তা বহনকারী একজন মানুষ রাগ করে সরে যান, তাঁর উপর মুলীম শব্দটি বসে, হুকুমে সমুদ্র তাঁকে গিলে নেয়, আর পেটের ভেতরে তাঁর প্রথম কাজ আল্লাহর দিকে মুখ ফিরিয়ে নেওয়া। গোটা গতিপথ, ভুল থেকে অন্ধকার, অন্ধকার থেকে দোয়া, ঘটে তিনটি ছোট আয়াতের পরিসরে। কুরআন বলে বোঝাচ্ছে না, দেখিয়ে দিচ্ছে, একজন বান্দা দৌড় থামালে কত দ্রুত ফিরে আসতে পারে।"
          },
          {
            "en": "So the question the verse leaves behind is a personal one. When my own fault finally closes over me and the light goes out, is the dark a tomb or a prayer room? Yunus (AS) could not change where he was; he could only change which way he faced, and he faced his Lord. The lowest, most shut-in moment of a life is not proof that the door has been bolted. For this prophet it was the exact place the way back swung open. By the mercy that reached him, it can be that for me too.",
            "bn": "তাই আয়াত যে প্রশ্নটা রেখে যায় তা একান্ত নিজের একটি প্রশ্ন। আমার নিজের দোষ যখন শেষমেশ আমার উপর বন্ধ হয়ে যায় আর আলো নিভে যায়, তখন অন্ধকারটা কি কবর, নাকি নামাজের ঘর? ইউনুস (আঃ) কোথায় আছেন তা বদলাতে পারেননি, কেবল কোন দিকে মুখ, সেটুকু বদলাতে পেরেছিলেন, আর তিনি মুখ ফিরিয়েছিলেন রবের দিকে। জীবনের সবচেয়ে নিচু, সবচেয়ে বন্ধ মুহূর্তটা এই প্রমাণ নয় যে দরজায় খিল পড়ে গেছে। এই নবীর জন্য ঠিক সেখানেই ফেরার পথ খুলে গিয়েছিল। যে রহমত তাঁর কাছে পৌঁছেছিল, তাতে আমার জন্যও সেটা হতে পারে।"
          }
        ]
      }
    ]
  },
  "37:150": {
    "sections": [
      {
        "h": {
          "en": "Were They There to See?",
          "bn": "তারা কি তখন সেখানে ছিল?"
        },
        "p": [
          {
            "en": "Am khalaqna al-mala'ikata inathan wa hum shahidun: or did We create the angels as females while they were witnesses? Six Arabic words, and all of them one question. The verse follows straight on from 37:149, where the Prophet ﷺ is told to ask the polytheists whether his Lord has daughters while they have sons. Al-Baghawi gives the sense of the opening particle by recasting the line as a direct question: a-khalaqna al-mala'ikata inathan, did We create the angels female? The question is put, and the claimants are left to answer it.",
            "bn": "আম খালাকনাল মালাইকাতা ইনাসান ওয়া হুম শাহিদূন: নাকি আমি ফেরেশতাদের নারী হিসেবে সৃষ্টি করেছিলাম, আর তারা তখন সাক্ষী ছিল? আরবিতে মাত্র ছয়টি শব্দ, পুরোটাই একটি প্রশ্ন। আয়াতটি এসেছে ঠিক ৩৭:১৪৯-এর পরে। সেখানে নবী ﷺ-কে বলা হয়েছে মুশরিকদের জিজ্ঞেস করতে, তাঁর রবের জন্য কি কন্যারা, আর তাদের জন্য পুত্ররা? বাগাভী শুরুর অব্যয়টির অর্থ বোঝান লাইনটিকে সরাসরি প্রশ্নে বদলে দিয়ে: আখালাকনাল মালাইকাতা ইনাসা, আমি কি ফেরেশতাদের নারী করে সৃষ্টি করেছি? প্রশ্নটা রাখা হলো, উত্তর দেওয়ার দায় দাবিদারদের।"
          },
          {
            "en": "The Muyassar, the plainest of the commentaries fetched for this verse, renders the whole line as an instruction followed by a question: and ask them, did We create the angels female while they were present? That gloss keeps the frame of 37:149 in view. The verse is still part of the questioning that began there; the Prophet ﷺ puts it to them, and Allah supplies the words in His own voice. Nothing in the line asserts a fact of its own. It asks the claimants for their evidence, and waits for an answer they cannot give.",
            "bn": "এ আয়াতের জন্য সংগৃহীত তাফসীরগুলোর মধ্যে সবচেয়ে সাদামাটা মুয়াসসার। সেখানে পুরো লাইনটি পড়া হয়েছে একটা নির্দেশ আর তার পরের একটা প্রশ্ন হিসেবে: তাদের জিজ্ঞেস করো, আমি কি ফেরেশতাদের নারী করে সৃষ্টি করেছি, আর তারা তখন হাজির ছিল? এ ব্যাখ্যায় ৩৭:১৪৯-এর কাঠামোটা চোখের সামনে থাকে। জিজ্ঞাসাবাদ যেখানে শুরু হয়েছিল, আয়াতটি তারই অংশ। নবী ﷺ প্রশ্নটা তাদের সামনে রাখছেন, আর শব্দগুলো আল্লাহর নিজের, তাঁর নিজের জবানে। লাইনটি নিজে থেকে কোনো তথ্য ঘোষণা করে না। দাবিদারদের কাছে প্রমাণ চায়, তারপর অপেক্ষা করে এমন এক উত্তরের, যা তারা কখনো দিতে পারবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Present at the Making",
          "bn": "সৃষ্টির মুহূর্তে হাজির"
        },
        "p": [
          {
            "en": "Everything turns on the last two words, wa hum shahidun. Three of the commentators give the same one-word gloss. Al-Qurtubi: hadiruna li-khalqina iyyahum inathan, present at Our creating them as females. Al-Baghawi: hadiruna khalqana iyyahum, present at Our creating them. The Muyassar: wa hum hadirun, while they were present. In all three, shahid here carries its first and plainest sense: someone who was there when a thing happened and saw it for himself, not someone who later repeats what he was told.",
            "bn": "পুরো কথাটা ঘুরছে শেষ দুটি শব্দকে ঘিরে: ওয়া হুম শাহিদূন। তিনজন মুফাসসির একই এক শব্দের ব্যাখ্যা দেন। কুরতুবী বলেন: হাদিরূনা লি-খালকিনা ইয়্যাহুম ইনাসা, অর্থাৎ আমি যখন তাদের নারী করে সৃষ্টি করছিলাম, তখন তারা হাজির ছিল। বাগাভী বলেন: হাদিরূনা খালকানা ইয়্যাহুম, তাদের সৃষ্টির সময় উপস্থিত। মুয়াসসারে আছে: ওয়া হুম হাদিরূন, আর তারা হাজির ছিল। তিনটিতেই শাহিদ শব্দটি তার প্রথম ও সরল অর্থে এসেছে। শাহিদ সেই লোক, যে ঘটনার সময় সেখানে ছিল আর নিজের চোখে দেখেছে। পরে শোনা কথা যে আওড়ায়, সে নয়।"
          },
          {
            "en": "At-Tabari draws out a second sense of the same root. He paraphrases the verse in full: did these speakers among the polytheists, who say the angels are the daughters of Allah, witness My creating of the angels, Me creating them female, so that they bore this testimony and described the angels as female? In his reading the claim itself is a shahada, a testimony. A testimony is supposed to stand on a witnessing behind it. The polytheists gave the testimony while the witnessing was missing, and the verse asks them to produce it.",
            "bn": "তাবারী একই ধাতুর আরেকটি অর্থ সামনে আনেন। পুরো আয়াতের ব্যাখ্যা তিনি দেন এভাবে: মুশরিকদের মধ্যে যারা বলে ফেরেশতারা আল্লাহর কন্যা, তারা কি আমার ফেরেশতা সৃষ্টি দেখেছে, যখন আমি তাদের নারী করে সৃষ্টি করছিলাম, যাতে তারা এই সাক্ষ্য দিতে পারে আর ফেরেশতাদের নারী বলে বর্ণনা করতে পারে? তাবারীর পাঠে তাদের দাবিটাই একটা শাহাদাহ, অর্থাৎ সাক্ষ্য। আর সাক্ষ্যের পেছনে চাই নিজের চোখে দেখা। মুশরিকরা সাক্ষ্য দিয়ে বসেছে, অথচ দেখাটাই নেই। আয়াত তাদের কাছে সেই দেখার প্রমাণ চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verdict Without Knowledge",
          "bn": "না জেনেই রায়"
        },
        "p": [
          {
            "en": "As-Sa'di introduces the verse as Allah's own exposure of their lie, fi bayan kadhibihim, and then answers the question for the reader: laysa al-amr kadhalik, it is not so. They did not witness the angels' creation. From that he draws his conclusion: it shows that they said this bila 'ilm, without knowledge, bal iftira'an 'ala Allah, rather, as a fabrication against Allah. The question is rhetorical, and its answer is a plain no.",
            "bn": "সা'দী আয়াতটির পরিচয় দেন এভাবে: আল্লাহ এখানে তাদের মিথ্যা উন্মোচন করছেন, ফী বায়ানি কাযিবিহিম। তারপর পাঠকের হয়ে প্রশ্নের উত্তরও দিয়ে দেন: লাইসাল আমরু কাযালিক, ব্যাপারটা মোটেই তেমন নয়। ফেরেশতাদের সৃষ্টি তারা দেখেনি। এখান থেকে তিনি সিদ্ধান্ত টানেন: এতে বোঝা যায়, কথাটা তারা বলেছে বিলা ইলম, জ্ঞান ছাড়াই, বরং ইফতিরাআন আলাল্লাহ, আল্লাহর নামে বানানো কথা হিসেবে। প্রশ্নটা আসলে উত্তর জানা প্রশ্ন, আর উত্তর একটাই: না।"
          },
          {
            "en": "Ibn Kathir frames it as a matter of judgement: kayfa hakamu 'ala al-mala'ikati annahum inath, how did they rule that the angels are female, wa ma shahadu khalqahum, when they did not witness their creation? The verb is hakama, to pass a verdict. A ruling about the very nature of a whole order of creation had been issued by people with no access to the facts. The next two verses, 37:151 and 37:152, name what that amounts to: ifk, an invented falsehood, and a lie told about Allah Himself.",
            "bn": "ইবন কাসীর বিষয়টিকে দেখেন রায় দেওয়ার প্রশ্ন হিসেবে: কাইফা হাকামূ আলাল মালাইকাতি আন্নাহুম ইনাস, ওয়া মা শাহাদূ খালকাহুম। তারা কীভাবে রায় দিল যে ফেরেশতারা নারী, অথচ তাদের সৃষ্টি তারা দেখেনি? ক্রিয়াটি হাকামা, অর্থাৎ ফয়সালা দেওয়া। গোটা এক সৃষ্টিজগতের মূল পরিচয় নিয়ে ফয়সালা দিয়ে দিল এমন লোকেরা, যাদের হাতে কোনো তথ্যই ছিল না। পরের দুই আয়াত, ৩৭:১৫১ ও ৩৭:১৫২, এর নাম বলে দেয়: ইফক, মনগড়া মিথ্যা, আর খোদ আল্লাহর নামে বলা মিথ্যা।"
          },
          {
            "en": "Six Arabic commentaries were fetched for this verse: at-Tabari, al-Qurtubi, as-Sa'di, Ibn Kathir, al-Baghawi and the Muyassar. They do not disagree. Each takes shahidun as presence at the angels' creation, and each reads the question as a denial that the claimants had any such presence. There is no second opinion to set beside the first, and none should be manufactured. What varies is only how much each says, from the Muyassar's single line to at-Tabari's fuller paraphrase.",
            "bn": "এ আয়াতের জন্য ছয়টি আরবি তাফসীর সংগ্রহ করা হয়েছে: তাবারী, কুরতুবী, সা'দী, ইবন কাসীর, বাগাভী আর মুয়াসসার। তাদের মধ্যে কোনো মতভেদ নেই। প্রত্যেকেই শাহিদূন বলতে বোঝেন ফেরেশতাদের সৃষ্টির সময় হাজির থাকা। আর প্রত্যেকেই প্রশ্নটিকে পড়েন অস্বীকার হিসেবে: দাবিদাররা সেখানে কখনো হাজির ছিল না। পাশাপাশি রাখার মতো দ্বিতীয় কোনো মত এখানে নেই, বানিয়ে নেওয়াও ঠিক হবে না। পার্থক্য শুধু কে কতটা বলেছেন তাতে। মুয়াসসারের এক লাইন থেকে তাবারীর বিস্তারিত ব্যাখ্যা পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Question at Az-Zukhruf",
          "bn": "সূরা যুখরুফে একই প্রশ্ন"
        },
        "p": [
          {
            "en": "The Qur'an asks this question twice. At 43:19 it says: wa ja'alu al-mala'ikata alladhina hum 'ibadu ar-Rahmani inathan, a-shahidu khalqahum, sa-tuktabu shahadatuhum wa yus'alun. And they made the angels, who are servants of the Most Merciful, female. Did they witness their creation? Their testimony will be recorded, and they will be questioned. Ibn Kathir, al-Qurtubi and al-Baghawi all cite this verse on 37:150, and al-Baghawi calls it the nazir, the counterpart, of this verse.",
            "bn": "কুরআন এ প্রশ্ন দুবার করেছে। ৪৩:১৯ আয়াতে আছে: ওয়া জাআলুল মালাইকাতাল্লাযীনা হুম ইবাদুর রাহমানি ইনাসা, আশাহিদূ খালকাহুম, সাতুকতাবু শাহাদাতুহুম ওয়া ইউসআলূন। তারা ফেরেশতাদের নারী সাব্যস্ত করেছে, অথচ ফেরেশতারা দয়াময়ের বান্দা। তারা কি তাদের সৃষ্টি দেখেছিল? তাদের এ সাক্ষ্য লিখে রাখা হবে, আর তাদের জিজ্ঞাসাবাদ করা হবে। ইবন কাসীর, কুরতুবী আর বাগাভী তিনজনই ৩৭:১৫০-এর ব্যাখ্যায় এ আয়াত উদ্ধৃত করেছেন। বাগাভী একে বলেছেন এ আয়াতের নাযীর, অর্থাৎ জোড়া আয়াত।"
          },
          {
            "en": "Read together, the two verses complete each other. Here the question is put; at 43:19 the same question arrives with its consequence attached. Ibn Kathir explains wa yus'alun: they will be asked about that on the Day of Resurrection. The word shahada returns there as the thing that will be written down. So the claim the polytheists made in passing has a record and a reckoning. A testimony given without a witnessing is not forgotten simply because the one who gave it has moved on.",
            "bn": "দুটি আয়াত পাশাপাশি পড়লে একটি অন্যটিকে পূর্ণ করে। এখানে প্রশ্নটা শুধু রাখা হয়েছে। ৪৩:১৯-এ সেই একই প্রশ্নের সঙ্গে পরিণামটাও জুড়ে দেওয়া আছে। ইবন কাসীর ওয়া ইউসআলূন-এর ব্যাখ্যায় বলেন, কিয়ামতের দিন এ বিষয়ে তাদের জিজ্ঞেস করা হবে। শাহাদাহ শব্দটিও সেখানে ফিরে আসে, যা লিখে রাখা হবে। মুশরিকরা কথার ফাঁকে যে দাবি করে বসেছিল, তার হিসাবও আছে, জবাবদিহিও আছে। না দেখে দেওয়া সাক্ষ্য মুছে যায় না, সাক্ষ্যদাতা ভুলে গেলেও না।"
          },
          {
            "en": "43:19 also supplies something 37:150 leaves unsaid. It gives the angels a description of their own: 'ibad ar-Rahman, servants of the Most Merciful. That is the Qur'an's word for what they are, and it stands in the same verse as the claim it rejects. The polytheists made them daughters, as though they were kin to Allah; the Qur'an calls them servants. The description concerns their standing before Allah. It is not a statement about gender at all.",
            "bn": "৩৭:১৫০ যা বলেনি, ৪৩:১৯ তার একটা দিক পূরণ করে। সেখানে ফেরেশতাদের নিজস্ব পরিচয় দেওয়া আছে: ইবাদুর রাহমান, দয়াময়ের বান্দা। তারা কী, এ হলো তার কুরআনী জবাব, আর তা এসেছে সেই আয়াতেই, যেখানে মুশরিকদের দাবি নাকচ করা হয়েছে। মুশরিকরা তাদের বানিয়েছিল কন্যা, যেন তারা আল্লাহর আত্মীয়। কুরআন তাদের বলে বান্দা। এ পরিচয় আল্লাহর সামনে তাদের অবস্থান নিয়ে। নারী না পুরুষ, সে প্রশ্নের সঙ্গে এর কোনো সম্পর্ক নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Sight, Report, Reason, Book",
          "bn": "চোখ, খবর, যুক্তি, কিতাব"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, commenting on the whole passage from 37:149 to 37:157, finds an argument laid out in order. A claim, it says, can be proved in three ways: by observation, by a report from someone whose truthfulness is established, or by reason. This verse takes the first. You have not seen Allah creating angels, Ma'arif paraphrases, in a way that could have given you knowledge of their gender, so you have no proof from observation. That, it says, is what 37:150 means.",
            "bn": "মাআরিফুল কুরআন ৩৭:১৪৯ থেকে ৩৭:১৫৭ পর্যন্ত পুরো অংশটির আলোচনায় একটা সাজানো যুক্তি খুঁজে পায়। তার মতে, কোনো দাবি প্রমাণের তিনটি পথ: নিজের চোখে দেখা, সত্যবাদিতা প্রতিষ্ঠিত এমন কারও দেওয়া খবর, আর যুক্তি। এ আয়াত প্রথমটির পরীক্ষা নেয়। মাআরিফের ভাষ্যে কথাটা এমন: ফেরেশতাদের সৃষ্টি করতে তোমরা আল্লাহকে দেখোনি, দেখলে না হয় তাদের লিঙ্গ জানতে পারতে। কাজেই দেখার ভিত্তিতে তোমাদের হাতে কোনো প্রমাণ নেই। মাআরিফ বলে, ৩৭:১৫০-এর অর্থ এটাই।"
          },
          {
            "en": "The rest of the passage, in Ma'arif's reading, closes the other doors in turn. For a report, the speakers of 37:151 and 37:152 are liars, and a liar's word binds nobody. For reason, 37:153 asks why Allah would choose for Himself what they themselves rank lower. Last, 37:156 and 37:157 ask whether they hold a clear authority, a revealed book, and challenge them to bring it. With every route closed, nothing is left standing beneath the claim.",
            "bn": "মাআরিফের পাঠে অংশটির বাকি আয়াতগুলো একে একে অন্য দরজাগুলোও বন্ধ করে দেয়। খবরের কথা ধরলে, ৩৭:১৫১ ও ৩৭:১৫২ জানিয়ে দেয় এ দাবির বক্তারা মিথ্যাবাদী, আর মিথ্যাবাদীর কথা কারও উপর দলীল হয় না। যুক্তির কথা ধরলে, ৩৭:১৫৩ জিজ্ঞেস করে, যাকে তারা নিজেরাই নিচু মনে করে, আল্লাহ কেন তা নিজের জন্য বেছে নেবেন? সবশেষে ৩৭:১৫৬ ও ৩৭:১৫৭ জানতে চায়, তাদের কাছে কি কোনো স্পষ্ট সনদ, কোনো নাজিল হওয়া কিতাব আছে? থাকলে নিয়ে আসুক। সব পথ বন্ধ হলে দাবির নিচে আর কিছুই থাকে না।"
          },
          {
            "en": "The scheme gives this verse its place: it is the first test and the simplest. Before any argument about what befits Allah comes the plain matter of evidence, and nobody was there. Ibn Kathir's abridged English commentary on the same passage lists what they said about the angels: that Allah had offspring, that these offspring were female, His daughters, and that they then worshipped them instead of Allah. Any one of these, he says, would on its own be enough to condemn them.",
            "bn": "এ বিন্যাসে আয়াতটির জায়গা স্পষ্ট: এটা প্রথম পরীক্ষা, আর সবচেয়ে সহজটাও। আল্লাহর জন্য কী মানানসই, সে তর্কের আগেই আসে প্রমাণের সাদামাটা প্রশ্ন। আর সেখানে কেউই হাজির ছিল না। একই অংশের ব্যাখ্যায় ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ফেরেশতাদের নিয়ে তাদের কথাগুলোর তালিকা দেয়। তারা বলেছিল আল্লাহর সন্তান আছে, সে সন্তানেরা নারী, আল্লাহর কন্যা। তারপর তারা আল্লাহকে ছেড়ে তাদেরই ইবাদত করেছে। ইবন কাসীর বলেন, এর যেকোনো একটিই তাদের দোষী সাব্যস্ত করার জন্য যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Own Measure, Turned Back",
          "bn": "তাদের মাপকাঠিতেই জবাব"
        },
        "p": [
          {
            "en": "Why daughters in particular? Ibn Kathir's abridged commentary on the passage connects it to 16:58, where a man given news of a daughter's birth goes dark in the face and is filled with grief. They chose sons for themselves, he says, and assigned to Allah a share they would never choose for themselves. He sets beside it 53:21 and 53:22, which calls that a most unfair division, and 17:40, which asks whether their Lord has favoured them with sons and taken daughters from among the angels.",
            "bn": "কন্যাই কেন? ইবন কাসীরের সংক্ষিপ্ত তাফসীর অংশটিকে জুড়ে দেয় ১৬:৫৮-এর সঙ্গে। সেখানে কন্যা জন্মের খবর পেলে লোকটির মুখ কালো হয়ে যায়, ভেতরে ভেতরে সে দুঃখে গুমরে মরে। ইবন কাসীর বলেন, নিজেদের জন্য তারা পুত্র বেছে নিত, আর যে ভাগ নিজেরা কখনো নিত না, সেটাই আল্লাহর নামে চাপিয়ে দিত। এর পাশে তিনি রাখেন ৫৩:২১ ও ৫৩:২২, যেখানে একে বলা হয়েছে চরম অন্যায় বণ্টন। আর রাখেন ১৭:৪০, যা জিজ্ঞেস করে, তোমাদের রব কি তোমাদের পুত্র দিয়ে ধন্য করলেন, আর নিজে ফেরেশতাদের মধ্য থেকে কন্যা নিলেন?"
          },
          {
            "en": "Ma'arif names the method: an ilzami answer, one that meets an obstinate opponent on the ground of his own assumptions. You yourselves count daughters a source of shame, it paraphrases, so how can what shames you be fitting for Allah? Then it adds the necessary caution. Using their view does not mean conceding it. It does not mean daughters are a disgrace in Allah's sight, and it does not mean the claim would have been correct had they called the angels sons.",
            "bn": "মাআরিফ পদ্ধতিটির নাম বলে দেয়: ইলযামী জবাব। অর্থাৎ জেদি প্রতিপক্ষকে তার নিজের ধারণার জমিনে দাঁড়িয়েই জবাব দেওয়া। মাআরিফের ভাষ্যে: তোমরা নিজেরাই কন্যাকে লজ্জার বিষয় মনে করো, তাহলে যা তোমাদের লজ্জা, তা আল্লাহর জন্য মানানসই হয় কী করে? এরপর মাআরিফ জরুরি একটা সতর্কতাও যোগ করে। তাদের ধারণা ব্যবহার করা মানে সেটা মেনে নেওয়া নয়। এর মানে এই নয় যে আল্লাহর কাছে কন্যা অসম্মানের। আবার এ-ও নয় যে তারা ফেরেশতাদের পুত্র বললে দাবিটা ঠিক হয়ে যেত।"
          },
          {
            "en": "The real answer, Ma'arif concludes, is the one the Qur'an gives elsewhere: Allah is independent and free of need, He needs no children, and children do not befit His exalted being. Ma'arif also records, citing al-Wahidi by way of Tafsir Kabir, that the belief was not confined to Quraysh but was held as well among Juhaynah, Banu Salamah, Banu Khuza'ah and Banu Malih. In its own voice it adds that these Arabs made the daughters of the jinn's chieftains the angels' mothers.",
            "bn": "মাআরিফের উপসংহার: আসল জবাব সেটাই, যা কুরআন অন্যত্র দিয়েছে। আল্লাহ অমুখাপেক্ষী, কারও প্রয়োজন তাঁর নেই, সন্তানের প্রয়োজনও নেই। সন্তান তাঁর মহান সত্তার সঙ্গে মানায়ও না। মাআরিফ তাফসীরে কাবীরের সূত্রে ওয়াহিদীর একটি কথাও উল্লেখ করে। এ বিশ্বাস শুধু কুরাইশের মধ্যে সীমাবদ্ধ ছিল না। জুহাইনা, বনু সালামা, বনু খুযাআ আর বনু মালীহ গোত্রেও তা চালু ছিল। মাআরিফ আরও জানায়, এই আরবরা জিন সর্দারদের কন্যাদের ফেরেশতাদের মা বলে মনে করত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Denial, Not a Counter-Claim",
          "bn": "অস্বীকার, পাল্টা দাবি নয়"
        },
        "p": [
          {
            "en": "It would be easy to misread the verse as settling the angels' nature the other way. It does not. The question denies that the claimants knew what they asserted; it puts no assertion about the angels' gender in its place. None of the six Arabic commentaries fetched for this verse says the angels are male, and Ma'arif expressly rules out the idea that calling them sons would have been right. What the Qur'an does say of them, at 43:19, is that they are servants of the Most Merciful.",
            "bn": "আয়াতটিকে উল্টো দিক থেকে ফেরেশতাদের প্রকৃতির মীমাংসা বলে ভুল পড়া সহজ। কিন্তু আয়াত তা করে না। প্রশ্নটি শুধু অস্বীকার করে যে দাবিদাররা নিজেদের কথা জানত। ফেরেশতাদের লিঙ্গ নিয়ে এর বদলে কোনো দাবি সে বসায় না। এ আয়াতের জন্য সংগৃহীত ছয়টি আরবি তাফসীরের কোনোটিই বলেনি যে ফেরেশতারা পুরুষ। মাআরিফ তো স্পষ্ট করেই নাকচ করেছে যে তাদের পুত্র বললে কথাটা ঠিক হতো। ফেরেশতাদের সম্পর্কে কুরআন যা বলে, তা ৪৩:১৯-এ: তারা দয়াময়ের বান্দা।"
          },
          {
            "en": "The same restraint applies to the people in the verse. It answers one specific invented claim about Allah and His angels, made by particular people in Arabia and reported so that it could be refuted. The verse describes what the text describes and licenses nothing against any living person or community. Nor does it say anything against women or daughters. The argument borrows the speakers' low regard for daughters only to turn it against them, and Ma'arif is clear that it endorses nothing of that regard.",
            "bn": "আয়াতের মানুষগুলোর বেলায়ও একই সংযম দরকার। আয়াতটি আল্লাহ ও তাঁর ফেরেশতাদের নিয়ে বানানো একটি নির্দিষ্ট দাবির জবাব দেয়। দাবিটা করেছিল আরবের কিছু নির্দিষ্ট লোক, আর কুরআন তা উদ্ধৃত করেছে খণ্ডন করার জন্যই। আয়াত শুধু তা-ই বর্ণনা করে যা পাঠে আছে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। নারী বা কন্যাদের বিরুদ্ধেও এতে কোনো কথা নেই। কন্যাদের প্রতি বক্তাদের তুচ্ছতাচ্ছিল্য যুক্তিতে ধার করা হয়েছে শুধু তাদেরই বিরুদ্ধে ফেরাতে। মাআরিফ স্পষ্ট বলেছে, এতে সে মনোভাবের কোনো সমর্থন নেই।"
          },
          {
            "en": "One more absence should be recorded. None of the commentaries fetched for this verse attaches a hadith to it, and none gives an occasion of revelation; Ma'arif's note on the tribes says who held the belief, not what event lay behind the verse. So no narration is quoted here, and none should be borrowed from elsewhere to fill the space. The verse's context is its place in the questioning that opens at 37:149 and runs to 37:157.",
            "bn": "আরও একটি অনুপস্থিতির কথা লিখে রাখা দরকার। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি, কোনো শানে নুযূলও উল্লেখ করেনি। গোত্রগুলো নিয়ে মাআরিফের কথা জানায়, বিশ্বাসটা কারা পোষণ করত। আয়াতটি কোন ঘটনার প্রেক্ষিতে নাজিল হয়েছে, তা জানায় না। তাই এখানে কোনো বর্ণনা উদ্ধৃত হয়নি, অন্য জায়গা থেকে ধার করে ফাঁক ভরানোও ঠিক হবে না। আয়াতের প্রেক্ষাপট হলো জিজ্ঞাসাবাদের সেই ধারা, যা ৩৭:১৪৯-এ শুরু হয়ে ৩৭:১৫৭-এ গিয়ে থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "Speaking Past What We Saw",
          "bn": "না দেখে বলা কথা"
        },
        "p": [
          {
            "en": "The question still reaches past its first audience. Wa hum shahidun asks of every confident statement where it came from. Most of what people say about the unseen, about Allah, the angels, the soul and the life to come, they did not witness and could not. For such matters the passage itself points to the one remaining route, at 37:157: bring your book. Where revelation speaks, a believer follows it. Where it is silent, the honest course is to be silent too, and to say: I do not know.",
            "bn": "প্রশ্নটা প্রথম শ্রোতাদের ছাড়িয়ে আরও দূরে পৌঁছায়। ওয়া হুম শাহিদূন প্রতিটি আত্মবিশ্বাসী কথাকে জিজ্ঞেস করে, তুমি এলে কোথা থেকে? গায়েব নিয়ে মানুষ যা বলে, আল্লাহ, ফেরেশতা, রূহ আর আখিরাত নিয়ে, তার বেশিরভাগই তারা নিজের চোখে দেখেনি, দেখা সম্ভবও নয়। এমন বিষয়ের জন্য এ অংশটি নিজেই বাকি থাকা একমাত্র পথটা দেখিয়ে দেয়, ৩৭:১৫৭-এ: তোমাদের কিতাব নিয়ে এসো। ওহী যেখানে কথা বলে, মুমিন সেখানে তা মেনে চলে। ওহী যেখানে চুপ, সেখানে সৎ পথ হলো নিজেও চুপ থাকা, আর বলা: আমি জানি না।"
          },
          {
            "en": "The same habit works on a smaller scale every day. People assign motives they never saw, describe hearts they never read, and pass verdicts, hukm in the sense of Ibn Kathir's gloss, on matters they never examined. As-Sa'di's two words fit those moments as well: bila 'ilm, without knowledge. The verse does not ask anyone to stop believing what Allah has told them. It asks that whatever is said be backed by having seen, or by having been told by the One who knows.",
            "bn": "একই অভ্যাস প্রতিদিন ছোট পরিসরেও কাজ করে। মানুষ এমন উদ্দেশ্য আরোপ করে যা কখনো দেখেনি, এমন মনের বর্ণনা দেয় যা কখনো পড়েনি। যা কখনো যাচাই করেনি, তার উপরও রায় দিয়ে বসে, ইবন কাসীরের ব্যাখ্যার সেই হুকম। সা'দীর দুটি শব্দ এসব মুহূর্তেও খাটে: বিলা ইলম, জ্ঞান ছাড়াই। আল্লাহ যা জানিয়েছেন, তা বিশ্বাস করা থেকে আয়াত কাউকে থামাতে চায় না। চায় শুধু এটুকু: যা-ই বলা হোক, তার পেছনে থাকুক নিজের চোখে দেখা, নয়তো যিনি জানেন তাঁর কাছ থেকে জানা।"
          }
        ]
      }
    ]
  },
  "37:153": {
    "sections": [
      {
        "h": {
          "en": "Four Words, One Question",
          "bn": "চার শব্দে একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "A-stafa al-banati 'ala al-banin: has He chosen daughters over sons? Four Arabic words, and they come straight after 37:151 and 37:152, where the polytheists say that Allah has begotten and the Qur'an calls them liars. The claim of offspring has already been answered. This line takes up the particular shape they gave it. The verb is istafa, to choose or select. As-Sa'di glosses it with a single word, ikhtara, he chose. The preposition 'ala adds the sense of preference: daughters chosen over sons, picked in place of them.",
            "bn": "আসতাফাল বানাতি আলাল বানীন: তিনি কি পুত্রদের চেয়ে কন্যাদের বেছে নিয়েছেন? আরবিতে মাত্র চারটি শব্দ। ঠিক আগে ৩৭:১৫১ ও ৩৭:১৫২ আয়াতে মুশরিকরা বলেছে, আল্লাহ সন্তান জন্ম দিয়েছেন, আর কুরআন তাদের মিথ্যাবাদী বলেছে। সন্তানের দাবির জবাব তাই আগেই হয়ে গেছে। এই আয়াত ধরে সেই দাবির বিশেষ চেহারাটা, যা তারা দিয়েছিল। ক্রিয়াটি ইসতাফা, মানে বাছাই করা। সা'দী এক শব্দে এর অর্থ বলেন: ইখতারা, তিনি বেছে নিলেন। আর আলা অব্যয়টি যোগ করে অগ্রাধিকারের ভাব। পুত্রদের জায়গায় কন্যাদের বেছে নেওয়া, তাদের উপরে তুলে ধরা।"
          },
          {
            "en": "The Muyassar restates the whole verse as a question about motive: li-ayyi shay'in yakhtaru Allahu al-banati duna al-banin, for what reason would Allah choose daughters rather than sons? Ibn Kathir frames it the same way: ayyu shay'in yahmiluhu, what would move Him to choose daughters and not sons? Both readings turn the question towards a reason, and both expect that none can be produced. The claim had a conclusion but nothing beneath it, and the verse asks the people who made it to supply the missing ground.",
            "bn": "মুয়াসসার পুরো আয়াতটিকে উদ্দেশ্যের প্রশ্ন হিসেবে আবার বলে: লি আইয়ি শাইয়িন ইয়াখতারুল্লাহুল বানাতি দূনাল বানীন, কোন কারণে আল্লাহ পুত্রদের বাদ দিয়ে কন্যাদের বেছে নেবেন? ইবন কাসীরও একই ভঙ্গিতে বলেন: আইয়ু শাইয়িন ইয়াহমিলুহু, কোন জিনিস তাঁকে পুত্রদের বাদ দিয়ে কন্যাদের বেছে নিতে প্ররোচিত করবে? দুজনেই প্রশ্নটাকে কারণের দিকে ঘুরিয়ে দেন। দুজনেরই ধারণা, এমন কোনো কারণ দেখানো সম্ভব নয়। দাবিটার একটা উপসংহার ছিল, কিন্তু নিচে কোনো ভিত ছিল না। আয়াতটি দাবিদারদের কাছেই সেই হারানো ভিত চেয়ে বসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reproach in the Form of Asking",
          "bn": "জিজ্ঞাসার ছলে ভর্ৎসনা"
        },
        "p": [
          {
            "en": "At-Tabari names the tone at once. Allah says this muwabbikhan, in rebuke, addressing those among the polytheists of Quraysh who said that Allah has daughters: has Allah, O people, chosen daughters over sons? Ibn Kathir introduces the verse with munkiran 'alayhim, denouncing them. Al-Qurtubi reads it 'ala ma'na at-taqri' wa at-tawbikh, in the sense of reproach and rebuke, and supplies an exclamation to carry the tone: wayhakum, woe to you, has He chosen daughters? He then glosses the verb: ikhtara al-banat wa taraka al-banin, He chose the daughters and left the sons.",
            "bn": "সুরটা তাবারী শুরুতেই চিনিয়ে দেন। আল্লাহ এ কথা বলছেন মুওয়াব্বিখান, ভর্ৎসনা করে। লক্ষ্য কুরাইশের সেই মুশরিকরা, যারা বলত আল্লাহর কন্যা আছে: হে লোকেরা, আল্লাহ কি পুত্রদের চেয়ে কন্যাদের বেছে নিয়েছেন? ইবন কাসীর আয়াতটি শুরু করেন মুনকিরান আলাইহিম বলে, অর্থাৎ তাদের কথা প্রত্যাখ্যান করে। কুরতুবী একে পড়েন তাকরী আর তাওবীখের অর্থে, মানে তিরস্কার ও ভর্ৎসনা। সুরটা ধরতে তিনি একটা আক্ষেপসূচক শব্দ জুড়ে দেন: ওয়াইহাকুম, ধিক তোমাদের, তিনি কি কন্যাদের বেছে নিয়েছেন? তারপর ক্রিয়াটির ব্যাখ্যা দেন: তিনি কন্যাদের নিলেন আর পুত্রদের ছেড়ে দিলেন।"
          },
          {
            "en": "So the question asks for no information. It is a question turned to rebuke, and nobody is expected to answer it with a yes. The six Arabic commentaries fetched for this verse agree on this, and none treats the line as a genuine enquiry. Nor does the verse make any statement about the angels themselves. It holds up a claim that the polytheists made about Allah and exposes it. Coming right after the word liars in 37:152, it presses the same charge from a new direction, through the content of the lie.",
            "bn": "প্রশ্নটা তাই কোনো তথ্য জানতে চায় না। এ প্রশ্ন ভর্ৎসনার দিকে ঘোরানো, কেউ হ্যাঁ বলে এর উত্তর দেবে, এমন আশা এখানে নেই। এ আয়াতের জন্য যে ছয়টি আরবি তাফসীর আনা হয়েছে, সবগুলো এ ব্যাপারে একমত। কোনোটিই একে সত্যিকারের জিজ্ঞাসা ধরে না। ফেরেশতাদের নিজেদের সম্পর্কেও আয়াতটি কিছু বলে না। মুশরিকরা আল্লাহকে নিয়ে যে দাবি করেছিল, আয়াতটি সেটাকে সামনে তুলে ধরে তার আসল চেহারা দেখিয়ে দেয়। ৩৭:১৫২ আয়াতে তাদের মিথ্যাবাদী বলার ঠিক পরেই আসে এই প্রশ্ন। অভিযোগ সেই একই, এবার চাপ আসে মিথ্যাটার বিষয়বস্তুর দিক থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited With and Without the Hamza",
          "bn": "হামযাসহ আর হামযা ছাড়া পাঠ"
        },
        "p": [
          {
            "en": "The line is recited in two ways, and the commentators name both. The reading of the majority, qira'at al-'amma in the words of al-Qurtubi and al-Baghawi, is a-stafa, with the hamza pronounced. Both explain the mechanics alike: a question hamza has come in front of the connecting hamza of istafa. The connecting one falls away, and the question hamza remains, opened and pronounced in full. That pronounced hamza is what makes the line a question, and it is the reading the translation above follows.",
            "bn": "আয়াতটি দুইভাবে পড়া হয়, আর তাফসীরকারেরা দুটিরই নাম বলেন। কুরতুবী ও বাগাভীর ভাষায় কিরাআতুল আম্মা, অর্থাৎ অধিকাংশের পাঠ হলো আসতাফা, হামযা উচ্চারণ করে। দুজনেই কারিগরিটা একইভাবে বোঝান। ইসতাফা ক্রিয়ার শুরুতে থাকে সংযোগের হামযা, তার আগে এসে বসেছে প্রশ্নের হামযা। সংযোগের হামযাটি ঝরে যায়, প্রশ্নের হামযাটি থেকে যায় যবরসহ, পুরোপুরি উচ্চারিত। উচ্চারিত এই হামযাই বাক্যটাকে প্রশ্ন বানায়। উপরের অনুবাদও এই পাঠ অনুসরণ করেই করা।"
          },
          {
            "en": "The second reading joins the word to the one before it, without a question: la-kadhibuna-stafa, read as a statement. Al-Baghawi attributes it to Abu Ja'far, and says that one who pauses and then begins again starts with a kasra, istafa. Al-Qurtubi's list is longer: Abu Ja'far, Shayba, Nafi' and Hamza. At-Tabari names no reciter. He says it was reported from some of the people of Medina, and that the readers of Kufa and Basra read it as a question. He chooses that reading because of the consensus of the authoritative readers.",
            "bn": "দ্বিতীয় পাঠে শব্দটি আগের শব্দের সঙ্গে জুড়ে যায়, প্রশ্ন ছাড়া: লাকাযিবূনাসতাফা, একটি বিবৃতি হিসেবে। বাগাভী এ পাঠ আবু জা'ফরের বলে উল্লেখ করেন। তিনি বলেন, কেউ থেমে নতুন করে শুরু করলে যের দিয়ে শুরু করবে: ইসতাফা। কুরতুবীর তালিকা আরেকটু লম্বা: আবু জা'ফর, শাইবা, নাফি' ও হামযা। তাবারী কোনো কারীর নাম নেন না। তিনি বলেন, মদীনার কিছু লোক থেকে এমন পাঠ বর্ণিত আছে। আর কূফা ও বসরার কারীরা পড়েন প্রশ্নসহ। কারীদের নির্ভরযোগ্য সমষ্টির ঐকমত্যের কারণে তাবারী এই পাঠটিই গ্রহণ করেন।"
          },
          {
            "en": "At-Tabari also explains why the difference matters so little. When the Arabs turn a question towards rebuke, he says, they sometimes keep the question alif and sometimes drop it. He gives the example of adhhabtum tayyibatikum, you exhausted your good things, the phrase at 46:20, which is put both with the question and without it. Then he settles the point: wa al-ma'na fi al-halayni wahid, the meaning in both cases is one. These are two named, attributed ways of reciting the same rebuke, and neither carries a separate doctrine.",
            "bn": "পার্থক্যটা কেন তেমন বড় নয়, তাবারী সেটাও বুঝিয়ে দেন। আরবরা যখন প্রশ্নকে ভর্ৎসনার দিকে ঘোরায়, তখন কখনো প্রশ্নের আলিফ রাখে, কখনো ফেলে দেয়। উদাহরণ হিসেবে তিনি আনেন আযহাবতুম তাইয়িবাতিকুম, তোমরা তোমাদের ভালো জিনিসগুলো শেষ করে ফেলেছ। ৪৬:২০ আয়াতের এই বাক্যটি প্রশ্নসহ ও প্রশ্ন ছাড়া দুভাবেই বলা হয়। তারপর তিনি মীমাংসা করে দেন: দুই অবস্থাতেই অর্থ এক। দুটোই নাম ধরে বর্ণিত পাঠ, একই ভর্ৎসনার দুই রকম তিলাওয়াত। কোনোটির সঙ্গে আলাদা কোনো আকীদা জড়িয়ে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Joined Reading Holds",
          "bn": "যুক্ত পাঠের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Al-Qurtubi records an objection to the joined reading. Abu Hatim claimed la wajha laha, that it had no valid basis, because the words that follow are themselves a rebuke. Al-Qurtubi answers that the rebuke still stands, from either of two sides. The line may be an explanation of the lie they told, laying out what that lie contained, with the next verse beginning afresh. Or, as grammarians including al-Farra' have related, a rebuke can come with a question or without one, and he cites the same phrase from 46:20.",
            "bn": "যুক্ত পাঠের বিরুদ্ধে একটি আপত্তির কথা কুরতুবী উল্লেখ করেন। আবু হাতিমের দাবি ছিল, লা ওয়াজহা লাহা, এ পাঠের কোনো সঠিক ভিত্তি নেই, কারণ পরের কথাগুলো নিজেই ভর্ৎসনা। কুরতুবী জবাব দেন, ভর্ৎসনা তবুও টিকে থাকে, দুই দিকের যেকোনো একটি থেকে। হতে পারে বাক্যটি তাদের বলা মিথ্যার ব্যাখ্যা, সেই মিথ্যার ভেতরে কী ছিল তা খুলে দেখানো। সে ক্ষেত্রে পরের আয়াত নতুন করে শুরু হয়। আবার ফাররাসহ ব্যাকরণবিদেরা বর্ণনা করেছেন, ভর্ৎসনা প্রশ্নসহও হয়, প্রশ্ন ছাড়াও হয়। এর সমর্থনে তিনিও ৪৬:২০ আয়াতের সেই বাক্যটি আনেন।"
          },
          {
            "en": "He then adds two more possibilities under the words wa qila, and it has been said. One supplies an unspoken verb: wa yaquluna, and they say, he chose daughters. The other makes istafa stand in place of walada Allah in 37:152, because to beget daughters and take them is to choose them; on that view the reciter does not pause after la-kadhibun. Each route keeps the same sense. Read as a question, the line challenges; read as a statement, it quotes the claim back so that its absurdity shows. The rebuke survives in both.",
            "bn": "এরপর ওয়া কীলা, অর্থাৎ আরও বলা হয়েছে, এই কথার অধীনে তিনি আরও দুটি সম্ভাবনা যোগ করেন। একটিতে একটা না-বলা ক্রিয়া ধরে নেওয়া হয়: ওয়া ইয়াকূলূন, আর তারা বলে, তিনি কন্যাদের বেছে নিয়েছেন। অন্যটিতে ইসতাফা শব্দটি ৩৭:১৫২ আয়াতের ওয়ালাদাল্লাহর জায়গায় বসে। কারণ কন্যা জন্ম দেওয়া আর তাদের গ্রহণ করা মানেই তাদের বেছে নেওয়া। এ মতে কারী লাকাযিবূন শব্দের পরে থামেন না। প্রতিটি পথে অর্থ একই থাকে। প্রশ্ন হিসেবে পড়লে বাক্যটি চ্যালেঞ্জ ছোড়ে। বিবৃতি হিসেবে পড়লে দাবিটাকেই হুবহু ফিরিয়ে শোনায়, যাতে তার অসারতা নিজেই ধরা পড়ে। দুই পাঠেই ভর্ৎসনা অটুট।"
          }
        ]
      },
      {
        "h": {
          "en": "One Root, Two Angles at Al-Isra",
          "bn": "এক ধাতু, সূরা ইসরার দুই দিক"
        },
        "p": [
          {
            "en": "Ibn Kathir sets beside this verse the Qur'an's own parallel at 17:40: a-fa-asfakum rabbukum bil-banina wa-ttakhadha mina al-mala'ikati inathan? The verb there is asfa, and here it is istafa: two forms of the same root, sad-fa-waw, both about choosing. The two verses look at one claim from opposite sides. In 17:40 the question is about what the polytheists kept: has your Lord singled you out for sons? In 37:153 it is about what they assigned: has He chosen daughters over sons for Himself?",
            "bn": "এ আয়াতের পাশে ইবন কাসীর রাখেন কুরআনেরই একটি সমান্তরাল আয়াত, ১৭:৪০: আফা আসফাকুম রাব্বুকুম বিল বানীনা ওয়াত্তাখাযা মিনাল মালাইকাতি ইনাসা? সেখানে ক্রিয়াটি আসফা, এখানে ইসতাফা। দুটোই একই ধাতু সোয়াদ-ফা-ওয়াও থেকে, দুটোরই বিষয় বাছাই। একই দাবিকে আয়াত দুটি দেখে বিপরীত দুই দিক থেকে। ১৭:৪০ আয়াতের প্রশ্ন মুশরিকরা নিজেদের জন্য যা রেখেছিল তা নিয়ে: তোমাদের রব কি তোমাদেরই পুত্র দিয়ে বিশেষ করে নিয়েছেন? আর ৩৭:১৫৩ আয়াতের প্রশ্ন তারা আল্লাহর ভাগে যা দিয়েছিল তা নিয়ে: তিনি কি নিজের জন্য পুত্রদের চেয়ে কন্যাদের বেছে নিয়েছেন?"
          },
          {
            "en": "17:40 closes with a verdict in so many words: innakum la-taquluna qawlan 'aziman, you are saying a grave thing. Here no verdict follows the question, because one has just been given at the end of 37:152: wa innahum la-kadhibun, and they are liars. The Qur'an returns to this claim more than once, at 16:58, 43:19, 53:21 and 53:22 among other places. What sets this verse apart is its narrow focus. It isolates a single word, the act of choosing, and asks who exactly did the choosing that the polytheists had put in Allah's name.",
            "bn": "১৭:৪০ আয়াত শেষ হয় সরাসরি একটা রায় দিয়ে: ইন্নাকুম লাতাকূলূনা কাওলান আযীমা, তোমরা বড় ভয়ংকর কথা বলছ। এখানে প্রশ্নের পরে কোনো রায় আসে না। কারণ রায়টা এক আয়াত আগেই দেওয়া হয়ে গেছে, ৩৭:১৫২ আয়াতের শেষে: ওয়া ইন্নাহুম লাকাযিবূন, আর তারা অবশ্যই মিথ্যাবাদী। এই দাবির কথা কুরআনে বারবার ফিরে এসেছে, অন্যান্য জায়গার মধ্যে ১৬:৫৮, ৪৩:১৯, ৫৩:২১ ও ৫৩:২২ আয়াতে। এ আয়াতের বিশেষত্ব তার সরু নিশানায়। একটি মাত্র শব্দ সে আলাদা করে ধরে, বাছাইয়ের কাজটা। তারপর জিজ্ঞেস করে, মুশরিকরা যে বাছাই আল্লাহর নামে চালিয়ে দিয়েছিল, সেটা আসলে কে করেছিল?"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Qur'an Says He Chooses",
          "bn": "আল্লাহ কাদের বেছে নেন"
        },
        "p": [
          {
            "en": "Outside this rebuke, this root appears in 11 other verses, as verb or participle, and in each of them it is Allah who chooses. The text says whom. At 3:33: Allah chose Adam (AS), Nuh (AS), the family of Ibrahim (AS) and the family of 'Imran over the worlds. At 27:59: praise be to Allah, and peace upon His servants whom He has chosen. At 22:75: Allah chooses messengers from among the angels and from among people. What follows is a reading of the Qur'an's own wording, not a claim drawn from the commentaries fetched for this verse.",
            "bn": "এই ভর্ৎসনার বাইরে ইসতাফা ধাতুটি ক্রিয়া বা কৃদন্ত রূপে কুরআনের আরও ১১টি আয়াতে এসেছে, আর প্রতিটিতে বাছাই করেন আল্লাহ। কাদের বেছে নেন, কুরআন নিজেই তা বলে দেয়। ৩:৩৩ আয়াতে: আল্লাহ আদম (আঃ), নূহ (আঃ), ইবরাহীম (আঃ)-এর বংশধর আর ইমরানের বংশধরকে জগদ্বাসীর উপর বেছে নিয়েছেন। ২৭:৫৯ আয়াতে: সব প্রশংসা আল্লাহর, আর সালাম তাঁর সেই বান্দাদের প্রতি, যাদের তিনি বেছে নিয়েছেন। ২২:৭৫ আয়াতে: আল্লাহ ফেরেশতাদের মধ্য থেকে রাসূল বেছে নেন, মানুষের মধ্য থেকেও। এখান থেকে যা বলা হচ্ছে, তা কুরআনের নিজের শব্দ পড়ে বলা। এ আয়াতের জন্য আনা তাফসীরগুলো থেকে নেওয়া কোনো দাবি নয়।"
          },
          {
            "en": "Set beside 37:153, 22:75 is striking. When Allah chooses from among the angels, the Qur'an says He chooses messengers. The polytheists placed the angels inside a choice too, but a choice of kinship, as daughters picked for Allah. The Qur'an's own sentence places them inside a choice of mission, as envoys picked to carry His word. The same verb, with the same Chooser, names two very different relations. One is invented and makes the angels relatives; the other is revealed and makes them servants entrusted with a task.",
            "bn": "৩৭:১৫৩ আয়াতের পাশে রাখলে ২২:৭৫ আয়াত চোখে পড়ার মতো। আল্লাহ যখন ফেরেশতাদের মধ্য থেকে বাছাই করেন, কুরআন বলছে, তিনি বেছে নেন রাসূল। মুশরিকরাও ফেরেশতাদের একটা বাছাইয়ের ভেতরে বসিয়েছিল, তবে তা আত্মীয়তার বাছাই। আল্লাহর জন্য বেছে নেওয়া কন্যা হিসেবে। কুরআনের নিজের বাক্য তাদের বসায় দায়িত্বের বাছাইয়ে, তাঁর বাণী বহনের জন্য বেছে নেওয়া দূত হিসেবে। ক্রিয়া একই, বাছাইকারীও একই, কিন্তু সম্পর্ক দুটি একেবারে আলাদা। একটি বানানো, তাতে ফেরেশতারা হয়ে যায় আত্মীয়। অন্যটি নাজিল করা, তাতে তারা দায়িত্বপ্রাপ্ত বান্দা।"
          },
          {
            "en": "One more use is worth placing here. At 3:42 the angels say to Maryam: inna Allaha-stafaki wa tahharaki wa-stafaki 'ala nisa'i al-'alamin, Allah has chosen you and purified you and chosen you over the women of the worlds. It is the same verb with the same 'ala of preference, and its object is a woman, chosen above all others. In the Qur'an's own voice, then, Allah's choosing follows His wisdom and a person's standing with Him. It does not follow the ranking of sons over daughters that 37:153 throws back at its speakers.",
            "bn": "আরেকটি ব্যবহার এখানে রাখা দরকার। ৩:৪২ আয়াতে ফেরেশতারা মারইয়ামকে বলেন: ইন্নাল্লাহাসতাফাকি ওয়া তাহহারাকি ওয়াসতাফাকি আলা নিসাইল আলামীন। আল্লাহ তোমাকে বেছে নিয়েছেন, পবিত্র করেছেন, আর জগতের সব নারীর উপর তোমাকে বেছে নিয়েছেন। ক্রিয়া সেই একই, অগ্রাধিকারের আলাও সেই একই। আর যাকে বেছে নেওয়া হলো তিনি একজন নারী, সবার উপরে তাঁর স্থান। কুরআনের নিজের ভাষায় তাই আল্লাহর বাছাই চলে তাঁর হিকমত অনুযায়ী, আর তাঁর কাছে মানুষটির মর্যাদা অনুযায়ী। পুত্রকে কন্যার উপরে রাখার যে মাপকাঠি ৩৭:১৫৩ আয়াত বক্তাদের দিকে ফিরিয়ে দেয়, সে মাপকাঠিতে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Claim About Allah, Not Daughters",
          "bn": "দাবিটা আল্লাহকে নিয়ে, কন্যাদের নিয়ে নয়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, reading the passage from 37:149 to 37:157 as one argument, gives this verse the place of reason. By your own reckoning daughters stand lower than sons, it paraphrases, so how could the Being of the highest rank prefer for Himself what you rank lower? It names the method an ilzami answer, built on the opponent's premise without granting it. And it states the real answer plainly: Allah is free of need and has no use for children. The argument uses their premise, and Ma'arif is clear that it never adopts it.",
            "bn": "মাআরিফুল কুরআন ৩৭:১৪৯ থেকে ৩৭:১৫৭ পর্যন্ত অংশটিকে একটানা যুক্তি হিসেবে পড়ে, আর এ আয়াতকে দেয় বুদ্ধির যুক্তির জায়গা। তার ভাষ্যের সারকথা: তোমাদের নিজেদের হিসাবেই কন্যার স্থান পুত্রের নিচে। তাহলে সর্বোচ্চ মর্যাদার সত্তা নিজের জন্য সেটা কেন পছন্দ করবেন, যাকে তোমরা নিচে রাখো? এই পদ্ধতির নাম সে দেয় ইলযামী জবাব, প্রতিপক্ষের ধারণার উপর দাঁড়িয়ে জবাব, সে ধারণা মেনে না নিয়েই। আসল জবাবটাও সে সোজাসুজি বলে: আল্লাহ অমুখাপেক্ষী, সন্তানের কোনো প্রয়োজন তাঁর নেই। যুক্তিটা তাদের ধারণা কাজে লাগায়, তবে মাআরিফ পরিষ্কার করে দেয়, সে ধারণা কখনো গ্রহণ করে না।"
          },
          {
            "en": "The target, then, is exact. At-Tabari identifies the speakers as those of the polytheists of Quraysh who said that Allah has daughters. The verse answers one invented theological claim about Allah: that He has offspring, and female offspring at that. It is not a verse about women or about daughters, and nothing in it lowers their worth; that low regard belonged to the speakers and is quoted only to be refuted. The verse describes what the text describes and licenses nothing against any living person or community.",
            "bn": "নিশানা তাই একেবারে নির্দিষ্ট। তাবারী বক্তাদের চিনিয়ে দেন: কুরাইশের সেই মুশরিকরা, যারা বলত আল্লাহর কন্যা আছে। আয়াতটি আল্লাহকে নিয়ে বানানো একটিমাত্র আকীদাগত দাবির জবাব দেয়। দাবিটা হলো, তাঁর সন্তান আছে, আর সে সন্তান আবার কন্যা। এটি নারী বা কন্যাদের নিয়ে কোনো আয়াত নয়। এতে তাদের মর্যাদা কমানোর মতো কিছুই নেই। ছোট করে দেখার মনোভাবটা ছিল বক্তাদের নিজেদের, আর কুরআন তা উল্লেখ করেছে কেবল খণ্ডন করার জন্য। আয়াতটি সেটুকুই বর্ণনা করে, যা তার শব্দে আছে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি এ আয়াত দেয় না।"
          },
          {
            "en": "Two absences should also be recorded. None of the eight commentaries fetched for this verse attaches a hadith to it, so no narration is quoted here, and none is borrowed from elsewhere to fill the space. None of them gives an occasion of revelation either. The verse's setting is its place in the sequence: it follows the lie named in 37:151 and 37:152, and the questioning carries on in the verses after it, which take up their own ground and are left to their own reading.",
            "bn": "আরও দুটি অনুপস্থিতির কথা লিখে রাখা দরকার। এ আয়াতের জন্য যে আটটি তাফসীর আনা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস জোড়েনি। তাই এখানে কোনো বর্ণনা উদ্ধৃত হয়নি, অন্য জায়গা থেকে ধার করে ফাঁক ভরাটও করা হয়নি। কোনো তাফসীর এর শানে নুযূলও বলেনি। আয়াতটির প্রেক্ষাপট তাই তার অবস্থান। ৩৭:১৫১ ও ৩৭:১৫২ আয়াতে যে মিথ্যার কথা বলা হয়েছে, এটি আসে তার পরে। আর জিজ্ঞাসাবাদ চলতে থাকে পরের আয়াতগুলোতে, যাদের নিজস্ব বিষয় আছে, আর সেগুলো তাদের নিজের আলোচনার জন্য তোলা থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Did the Choosing?",
          "bn": "বাছাইটা আসলে কার?"
        },
        "p": [
          {
            "en": "The verse's question is finally about who chooses. The polytheists did the choosing themselves, kept the share they wanted, and then wrote the result under Allah's name. That pattern outlives its first setting. People still describe Allah to suit themselves, credit Him with a will that happens to match their own, and call a custom of theirs His command. The verse's question fits every such case: has He chosen this, or have you? What Allah chooses is known from what He has said, as 3:33 and 22:75 say it, and from nowhere else.",
            "bn": "আয়াতের প্রশ্নটা শেষ পর্যন্ত এই: বাছাই করে কে? মুশরিকরা বাছাইটা নিজেরাই করেছিল। যে ভাগ তাদের পছন্দ, সেটা নিজেদের কাছে রেখেছিল, তারপর ফলাফলটা আল্লাহর নামে লিখে দিয়েছিল। এই ধাঁচ তার প্রথম প্রেক্ষাপট ছাড়িয়েও টিকে আছে। মানুষ আজও নিজের সুবিধামতো আল্লাহর বর্ণনা দেয়। তাঁর উপর এমন ইচ্ছা আরোপ করে, যা কাকতালীয়ভাবে নিজের ইচ্ছার সঙ্গে মিলে যায়। নিজেদের কোনো প্রথাকে বলে তাঁর হুকুম। এমন প্রতিটি ক্ষেত্রে আয়াতের প্রশ্নটা খাটে: এটা কি তিনি বেছেছেন, নাকি আপনি? আল্লাহ কী বেছে নেন, তা জানা যায় কেবল তাঁর নিজের কথা থেকে, যেমন ৩:৩৩ ও ২২:৭৫ আয়াতে তিনি বলেছেন।"
          },
          {
            "en": "A quieter lesson sits in the division itself. They took the better share and handed Allah the share they disliked. Believers can do something like it on a smaller scale: the tired end of the day for the Qur'an, the hurried prayer, the thing least missed for charity. At 2:267 the Qur'an forbids giving in charity what the giver would not take himself except with eyes half shut, and closes with innallaha ghaniyyun hamid, Allah is free of need and praiseworthy. At 3:92 it ties righteousness to spending from what you love.",
            "bn": "ভাগাভাগির ভেতরেই আরেকটা নীরব শিক্ষা আছে। তারা ভালো ভাগটা নিজেরা নিয়েছিল, আর যেটা তাদের অপছন্দ, সেটা দিয়েছিল আল্লাহকে। মুমিনও ছোট পরিসরে এমন কিছু করে বসতে পারে। দিনের ক্লান্ত শেষ ভাগটা কুরআনের জন্য, তাড়াহুড়োর নামাজ, দানের জন্য এমন জিনিস যার অভাব টেরই পাওয়া যায় না। ২:২৬৭ আয়াতে কুরআন নিষেধ করেছে এমন জিনিস দান করতে, যা দাতা নিজে চোখ বুজে ছাড়া নিত না। আয়াতটি শেষ হয় এই কথায়: ইন্নাল্লাহা গানিয়্যুন হামীদ, আল্লাহ অমুখাপেক্ষী, প্রশংসিত। আর ৩:৯২ আয়াত সৎকর্মের পূর্ণতাকে বেঁধে দিয়েছে প্রিয় জিনিস থেকে খরচ করার সঙ্গে।"
          }
        ]
      }
    ]
  },
  "37:158": {
    "sections": [
      {
        "h": {
          "en": "A Family Tree for Allah",
          "bn": "আল্লাহর জন্য বানানো বংশতালিকা"
        },
        "p": [
          {
            "en": "Wa ja'alu baynahu wa bayna al-jinnati nasaban: and they made, between Him and al-jinna, a lineage. The verse belongs to the run that began at 37:149, where the Prophet ﷺ is told to ask the idolaters whether daughters are for his Lord and sons for them. That run has already asked whether they witnessed the creation of the angels, at 37:150, and whether He chose daughters over sons, at 37:153, and it has demanded their scripture at 37:157. Here one more claim joins the charge, and it is answered by what the claimed relatives themselves know.",
            "bn": "ওয়া জাআলু বাইনাহু ওয়া বাইনাল জিন্নাতি নাসাবা: আর তারা তাঁর ও আল-জিন্নার মাঝে একটা বংশ-সম্পর্ক বানিয়ে নিয়েছে। আয়াতটি সেই ধারার অংশ, যা শুরু হয়েছে ৩৭:১৪৯ আয়াতে। সেখানে নবী ﷺ-কে বলা হয়েছে মুশরিকদের জিজ্ঞেস করতে, কন্যারা কি তাঁর রবের জন্য আর পুত্ররা তাদের জন্য? এরপর ৩৭:১৫০ আয়াতে প্রশ্ন এসেছে, ফেরেশতাদের সৃষ্টির সময় তারা কি উপস্থিত ছিল। ৩৭:১৫৩ আয়াতে প্রশ্ন, তিনি কি পুত্রের বদলে কন্যা বেছে নিয়েছেন। ৩৭:১৫৭ আয়াতে দাবি, তোমাদের কিতাব নিয়ে এসো। এখানে অভিযোগের তালিকায় আরেকটি দাবি যুক্ত হলো। আর তার জবাব আসছে খোদ সেই কথিত আত্মীয়দের জানা সত্য থেকে।"
          },
          {
            "en": "At-Tabari begins with the plain subject: these idolaters made, between Allah and al-jinna, a nasab. As-Sa'di fills it in a single line: they claimed that the angels are Allah's daughters and that their mothers are sarawat al-jinn, the noblewomen of the jinn, while al-jinna know that they will be brought before Allah. The Muyassar renders nasab as qaraba wa nasab, closeness of kin and lineage. The verse itself does not say who first voiced the claim or what shape the kinship took. The commentators answer both differently, and the sections below keep their answers apart.",
            "bn": "তাবারী শুরু করেন সাদামাটা কর্তা দিয়ে: এই মুশরিকরা আল্লাহ ও আল-জিন্নার মাঝে একটা নাসাব বানিয়েছে। সা'দী এক লাইনে ফাঁকটা ভরে দেন। তারা দাবি করেছিল, ফেরেশতারা আল্লাহর কন্যা, আর তাদের মায়েরা সারাওয়াতুল জিন্ন, অর্থাৎ জিনদের অভিজাত নারীরা। অথচ আল-জিন্না জানে যে তাদের আল্লাহর সামনে হাজির করা হবে। মুয়াসসার নাসাবের অর্থ করেছে কারাবা ওয়া নাসাব, অর্থাৎ আত্মীয়তার নৈকট্য আর বংশ। কে প্রথম এ দাবি তুলেছিল, আর আত্মীয়তাটা কোন ধরনের, আয়াত নিজে তা বলে না। এ দুই প্রশ্নের উত্তর তাফসীরকারেরা দেন ভিন্ন ভিন্নভাবে। নিচের অংশগুলোতে তাঁদের উত্তর আলাদা আলাদা রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hidden Ones Named Here",
          "bn": "এখানে আল-জিন্না কারা"
        },
        "p": [
          {
            "en": "Who are al-jinna in this verse? Al-Qurtubi reports that most of the people of tafsir take them here to be the angels, and he gives three accounts of the name. The people of derivation say they were called jinna because they are not seen. Mujahid says they are a clan among the clans of the angels who are called al-jinna, and al-Qurtubi notes that this is also narrated from Ibn Abbas (RA). Abu Malik, through as-Suddi, says they were called jinna because they are keepers over the gardens, al-jinan, and that the angels, all of them, are jinna.",
            "bn": "এ আয়াতে আল-জিন্না কারা? কুরতুবী জানান, অধিকাংশ তাফসীরকার এখানে আল-জিন্না বলতে ফেরেশতাদের বোঝেন। নামটির পক্ষে তিনি তিনটি ব্যাখ্যা আনেন। শব্দের উৎপত্তি নিয়ে যাঁরা কাজ করেন, তাঁরা বলেন, তাদের জিন্না বলা হয় কারণ তাদের দেখা যায় না। মুজাহিদ বলেন, এরা ফেরেশতাদের নানা গোত্রের একটি গোত্র, যাদের নাম আল-জিন্না। কুরতুবী উল্লেখ করেন, ইবনে আব্বাস (রাঃ) থেকেও এ কথা বর্ণিত। সুদ্দীর সূত্রে আবু মালিক বলেন, তাদের জিন্না বলা হয় কারণ তারা জান্নাতগুলোর (আল-জিনান) রক্ষী, আর ফেরেশতারা সবাই-ই জিন্না।"
          },
          {
            "en": "Al-Baghawi reports from Mujahid and Qatada that al-jinna means the angels, named so for being concealed from sight. He then gives Ibn Abbas (RA) in a different form: a tribe of the angels called al-jinn, and Iblis was among them. At-Tabari carries as-Suddi plainly, al-jinna are the angels, and Mujahid's one-word gloss, the angels. The Muyassar also writes the angels where the verse has al-jinna. Four of the fetched commentaries therefore read the word as the angels, or as a group within them.",
            "bn": "বাগাভী মুজাহিদ ও কাতাদা থেকে বর্ণনা করেন, আল-জিন্না মানে ফেরেশতা, চোখের আড়ালে থাকে বলে এ নাম। এরপর তিনি ইবনে আব্বাস (রাঃ)-এর কথা আনেন একটু ভিন্ন রূপে: ফেরেশতাদের একটি গোত্র, যাদের বলা হয় আল-জিন্ন, আর ইবলীস ছিল তাদেরই একজন। তাবারী সুদ্দীর কথা সোজাসুজি এনেছেন: আল-জিন্না হলো ফেরেশতা। মুজাহিদের এক শব্দের ব্যাখ্যাও তিনি রেখেছেন: ফেরেশতা। মুয়াসসারও আয়াতের আল-জিন্নার জায়গায় ফেরেশতা লিখেছে। ফলে সংগৃহীত তাফসীরগুলোর চারটি শব্দটিকে ফেরেশতা অথবা তাদের ভেতরের একটি দল হিসেবে পড়ে।"
          },
          {
            "en": "Two fetched works read it differently. As-Sa'di keeps the word, and his line runs the kinship through the jinn as mothers: the angels are the claimed daughters, and the sarawat al-jinn are their claimed mothers. Ma'arif al-Qur'an renders it as Jinns, and its comment on the second half speaks of Mushriks who took Jinns and Shaitans as equals of God. Neither reading changes how the verse argues. Whoever al-jinna are, they are creatures, and the second half of the verse says they know they will be brought.",
            "bn": "সংগৃহীত দুটি তাফসীর শব্দটিকে ভিন্নভাবে পড়ে। সা'দী শব্দটি যেমন আছে তেমনই রাখেন, আর তাঁর ব্যাখ্যায় আত্মীয়তাটা গড়ায় জিনদের মা হওয়ার পথ ধরে। ফেরেশতারা হলো সেই কথিত কন্যা, আর সারাওয়াতুল জিন্ন তাদের কথিত মা। মাআরিফুল কুরআন শব্দটির অনুবাদ করেছে জিন। আয়াতের দ্বিতীয় অংশের আলোচনায় সে এমন মুশরিকদের কথা বলে, যারা জিন ও শয়তানকে আল্লাহর সমকক্ষ বানিয়েছিল। কোনো পাঠেই আয়াতের যুক্তির ধরন বদলায় না। আল-জিন্না যে-ই হোক, তারা সৃষ্টি। আর আয়াতের দ্বিতীয় অংশ বলছে, তারা জানে যে তাদের হাজির করা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Daughters Given Jinn Mothers",
          "bn": "কন্যাদের জন্য জিন-মা কল্পনা"
        },
        "p": [
          {
            "en": "The first reading of nasab comes through Mujahid. In at-Tabari, by way of Ibn Abi Najih, Mujahid says: the disbelievers of Quraysh said the angels are the daughters of Allah. Abu Bakr (RA) asked, then who are their mothers? They said: the daughters of sarawat al-jinn, the nobles of the jinn. At-Tabari's wording adds that they reckoned they had been created from what Iblis was created from. Ibn Kathir carries the same exchange from Mujahid, with the speakers as the idolaters, and adds that Qatada and Ibn Zayd said the same.",
            "bn": "নাসাবের প্রথম ব্যাখ্যা এসেছে মুজাহিদের সূত্রে। তাবারীতে ইবনে আবী নাজীহের মাধ্যমে মুজাহিদ বলেন, কুরাইশের কাফিররা বলেছিল, ফেরেশতারা আল্লাহর কন্যা। আবু বকর (রাঃ) জিজ্ঞেস করলেন, তাহলে তাদের মা কারা? তারা বলল, সারাওয়াতুল জিন্ন, অর্থাৎ জিনদের সর্দারদের কন্যারা। তাবারীর বর্ণনায় আরও আছে, তারা মনে করত, ইবলীস যা থেকে সৃষ্ট, তারাও তা থেকেই সৃষ্ট। ইবন কাসীর মুজাহিদ থেকে একই কথোপকথন এনেছেন, সেখানে বক্তা মুশরিকরা। তিনি যোগ করেন, কাতাদা ও ইবনে যায়দও একই কথা বলেছেন।"
          },
          {
            "en": "Al-Qurtubi gives the same report from Mujahid through Ibn Abi Najih, with one difference in the answer: their mothers are mukhaddarat al-jinn, the secluded women of the jinn. Al-Baghawi has some of Quraysh claiming the angels as daughters, and the answer as sarawat al-jinn. At-Tabari also carries as-Suddi: al-jinna are the angels, they said these are the daughters of Allah. Ibn Zayd, in at-Tabari, keeps it shortest: between Allah and al-jinna they fabricated a nasab. Ma'arif al-Qur'an lists this as the first of two explanations and refers it to Ibn Kathir.",
            "bn": "কুরতুবীও ইবনে আবী নাজীহের সূত্রে মুজাহিদ থেকে একই বর্ণনা এনেছেন, তবে উত্তরে একটু পার্থক্য আছে। সেখানে তাদের মা হলো মুখাদ্দারাতুল জিন্ন, অর্থাৎ জিনদের পর্দানশীন নারীরা। বাগাভীর বর্ণনায় কুরাইশের কিছু লোক ফেরেশতাদের আল্লাহর কন্যা দাবি করত, আর উত্তর ছিল সারাওয়াতুল জিন্ন। তাবারী সুদ্দীর কথাও রেখেছেন: আল-জিন্না হলো ফেরেশতা, তারা বলেছিল, এরা আল্লাহর কন্যা। তাবারীতে ইবনে যায়দের কথা সবচেয়ে ছোট: আল্লাহ ও আল-জিন্নার মাঝে তারা একটা নাসাব বানিয়ে নিয়েছিল। মাআরিফুল কুরআন এটিকে দুই ব্যাখ্যার প্রথমটি হিসেবে রেখেছে এবং সূত্র দিয়েছে ইবন কাসীরের।"
          },
          {
            "en": "On this reading, the verse takes the claim already answered at 37:150 and 37:153 one step further. Those verses asked whether they witnessed the angels being made female, and whether Allah chose daughters over sons. Here the invented daughters are given an invented maternal line as well. The Abu Bakr (RA) question is a report carried through Mujahid inside these tafsirs. None of the fetched commentaries presents it as a hadith of the Prophet ﷺ, and this article does not treat it as one.",
            "bn": "এ ব্যাখ্যায় ৩৭:১৫০ ও ৩৭:১৫৩ আয়াতে যে দাবির জবাব আগেই এসেছে, আয়াতটি তাকে আরেক ধাপ এগিয়ে নেয়। সেই আয়াতগুলো জানতে চেয়েছিল, ফেরেশতাদের নারী হিসেবে সৃষ্টি হতে তারা কি দেখেছিল, আর আল্লাহ কি পুত্রের বদলে কন্যা বেছে নিয়েছেন। এখানে বানানো কন্যাদের জন্য বানানো মাতৃকুলও জুড়ে দেওয়া হলো। আবু বকর (রাঃ)-এর প্রশ্নটি এসব তাফসীরে মুজাহিদের সূত্রে আসা একটি বর্ণনা। সংগৃহীত কোনো তাফসীর একে নবী ﷺ-এর হাদীস হিসেবে পেশ করেনি, এ লেখাও তা করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Iblis Called His Brother",
          "bn": "ইবলীসকে বলা হলো তাঁর ভাই"
        },
        "p": [
          {
            "en": "At-Tabari states that the people of interpretation differed over what this nasab was. The first view he lists is from Ibn Abbas (RA), through a chain from Muhammad ibn Sa'd: the enemies of Allah claimed that He, blessed and exalted, and Iblis are brothers. Ibn Kathir carries the same words through al-'Awfi from Ibn Abbas (RA) and notes that Ibn Jarir related it. Al-Qurtubi adds that Ibn Abbas (RA), ad-Dahhak and al-Hasan said it: their saying that Allah and Iblis are brothers, Allah being exalted high above what they say.",
            "bn": "তাবারী খোলাখুলি বলেন, এ নাসাব কী ছিল, তা নিয়ে তাফসীরবিদদের মধ্যে মতভেদ আছে। তাঁর তালিকার প্রথম মতটি ইবনে আব্বাস (রাঃ)-এর, মুহাম্মাদ ইবনে সা'দের সূত্রে: আল্লাহর দুশমনরা দাবি করেছিল, তিনি, বরকতময় ও মহান, আর ইবলীস দুই ভাই। ইবন কাসীর আওফীর সূত্রে ইবনে আব্বাস (রাঃ) থেকে একই কথা এনেছেন, আর উল্লেখ করেছেন যে ইবনে জারীর এটি বর্ণনা করেছেন। কুরতুবী যোগ করেন, ইবনে আব্বাস (রাঃ), দাহহাক ও হাসানও এ কথা বলেছেন: তাদের দাবি ছিল আল্লাহ আর ইবলীস দুই ভাই। তারা যা বলে, আল্লাহ তার বহু ঊর্ধ্বে।"
          },
          {
            "en": "Ma'arif al-Qur'an judges this the weightier of its two explanations, and gives its reason. The verse speaks of kinship, nasab, between Allah and the jinn, while the bond of husband and wife is not one of kinship, so the mothers reading leaves a difficulty unresolved. On the brother reading, it says, some people of Arabia held that Allah was the creator of good and Iblis the creator of evil. Ma'arif refers the reader to Ibn Kathir, al-Qurtubi and the Tafsir Kabir. The weighing is its own; no other fetched commentary states that preference.",
            "bn": "মাআরিফুল কুরআন তার দুই ব্যাখ্যার মধ্যে এটিকেই বেশি ভারী মনে করে, আর কারণও জানায়। আয়াত বলছে আল্লাহ ও জিনের মাঝে নাসাব, অর্থাৎ রক্তের আত্মীয়তার কথা। কিন্তু স্বামী-স্ত্রীর বন্ধন রক্তের আত্মীয়তা নয়। তাই মায়ের ব্যাখ্যায় একটা সমস্যা থেকে যায়, যার সমাধান হয় না। ইবলীসকে ভাই বলার ব্যাখ্যা প্রসঙ্গে মাআরিফ বলে, আরবের কিছু লোক বিশ্বাস করত আল্লাহ কল্যাণের স্রষ্টা আর ইবলীস অকল্যাণের স্রষ্টা। এ বিষয়ে মাআরিফ পাঠককে ইবন কাসীর, কুরতুবী ও তাফসীরে কাবীর দেখতে বলে। এ মূল্যায়ন মাআরিফের নিজের। সংগৃহীত অন্য কোনো তাফসীর এই অগ্রাধিকারের কথা বলেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Ties by Marriage, Two Speakers",
          "bn": "বৈবাহিক আত্মীয়তা, দুই দল বক্তা"
        },
        "p": [
          {
            "en": "Al-Qurtubi glosses nasaban as musahara: a tie by marriage. He then reports two answers to the question of who said it. Qatada, al-Kalbi and Muqatil said: the Jews said that Allah formed a marriage tie with the jinn, and the angels came from between them. Mujahid, as-Suddi and Muqatil, again, said: those who said it were Kinana and Khuza'a; they said Allah sought marriage from the masters of the jinn, who gave Him the noblest of their daughters, so the angels are His daughters by them.",
            "bn": "কুরতুবী নাসাবান শব্দের অর্থ করেন মুসাহারা, অর্থাৎ বিয়ের সূত্রে আত্মীয়তা। এরপর কথাটা কারা বলেছিল, সে প্রশ্নে তিনি দুটি উত্তর আনেন। কাতাদা, কালবী ও মুকাতিল বলেন, ইহুদিরা বলেছিল যে আল্লাহ জিনদের সঙ্গে বৈবাহিক আত্মীয়তা গড়েছেন, আর তাদের মাঝ থেকে ফেরেশতারা এসেছে। মুজাহিদ, সুদ্দী এবং আবারও মুকাতিল বলেন, এ কথা বলেছিল কিনানা ও খুযাআ গোত্র। তাদের দাবি, আল্লাহ জিনদের সর্দারদের কাছে বিয়ের প্রস্তাব দিয়েছিলেন, তারা তাদের সবচেয়ে অভিজাত কন্যাদের তাঁর সঙ্গে বিয়ে দেয়, তাই ফেরেশতারা তাদের গর্ভে আল্লাহর কন্যা।"
          },
          {
            "en": "At-Tabari carries the first of these as a report from Qatada naming the Jews, ending with the words that He glorified Himself. In at-Tabari, Mujahid names the disbelievers of Quraysh for the daughters claim. Al-Baghawi gives al-Kalbi's report of a marriage with the jinn without naming a group in that sentence, and then mentions some of Quraysh. Ma'arif al-Qur'an speaks of the Mushriks of Arabia. The fetched texts thus name different speakers, and Muqatil's name stands on both of al-Qurtubi's lists. The sources do not settle it, and this article does not either.",
            "bn": "এর প্রথমটি তাবারী কাতাদার বর্ণনা হিসেবে এনেছেন, যেখানে ইহুদিদের নাম আছে। বর্ণনাটি শেষ হয়েছে এ কথায় যে তিনি নিজেই নিজের পবিত্রতা ঘোষণা করেছেন। তাবারীতে মুজাহিদ কন্যার দাবির জন্য কুরাইশের কাফিরদের নাম বলেন। বাগাভী কালবীর বর্ণনায় জিনদের সঙ্গে বিয়ের দাবি আনেন, সে বাক্যে কোনো দলের নাম নেই। এরপর তিনি কুরাইশের কিছু লোকের কথা বলেন। মাআরিফুল কুরআন বলে আরবের মুশরিকদের কথা। সংগৃহীত লেখাগুলো এভাবে ভিন্ন ভিন্ন বক্তার নাম দেয়, আর কুরতুবীর দুই তালিকাতেই মুকাতিলের নাম আছে। সূত্রগুলো বিষয়টির মীমাংসা করেনি, এ লেখাও করছে না।"
          },
          {
            "en": "Read these names with care. Each is a report of what some people said centuries ago, carried by named transmitters who disagree over who the speakers were. That the Jews said it is al-Qurtubi's and at-Tabari's transmission from Qatada and the others named, one report among several, not a settled fact. The same holds for Kinana and Khuza'a, historical tribes. The verse condemns a claim about Allah. It describes what the text describes, and licenses nothing against any living person or community.",
            "bn": "এই নামগুলো সাবধানে পড়া দরকার। প্রতিটি নাম বহু শতাব্দী আগে কিছু লোক কী বলেছিল, তার একটা বর্ণনা মাত্র। বর্ণনাকারীরা নির্দিষ্ট মানুষ, আর বক্তা কারা ছিল তা নিয়ে তাঁরা নিজেরাই একমত নন। ইহুদিরা কথাটা বলেছিল, এটি কাতাদা ও অন্যদের থেকে কুরতুবী ও তাবারীর বর্ণনা, কয়েকটি বর্ণনার একটি, প্রতিষ্ঠিত সত্য নয়। ঐতিহাসিক গোত্র কিনানা ও খুযাআর বেলাতেও একই কথা। আয়াতটি আল্লাহ সম্পর্কে একটি দাবির নিন্দা করে। পাঠে যা আছে, আয়াত কেবল তারই বর্ণনা দেয়। আজকের কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি এ আয়াত দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Kinship Made in Worship",
          "bn": "ইবাদতে গড়া আত্মীয়তা"
        },
        "p": [
          {
            "en": "The last reading moves the nasab out of family altogether. Al-Qurtubi reports al-Hasan: they made Shaytan a partner in the worship of Allah, and that is the nasab they made. Then al-Qurtubi speaks in his own voice: I say, al-Hasan's view on this is the best. His proof is 26:98, when we equated you with the Lord of the worlds, which he glosses as equating in worship. Al-Baghawi carries al-Hasan too: the meaning of nasab is that they made the shayatin partners in Allah's worship.",
            "bn": "শেষ ব্যাখ্যাটি নাসাবকে পরিবারের গণ্ডি থেকেই বের করে আনে। কুরতুবী হাসানের কথা আনেন: তারা আল্লাহর ইবাদতে শয়তানকে শরিক করেছিল, এটাই সেই নাসাব যা তারা বানিয়েছিল। এরপর কুরতুবী নিজের কথা বলেন: আমি বলি, এ বিষয়ে হাসানের মতটিই সবচেয়ে ভালো। তাঁর দলিল ২৬:৯৮ আয়াত: যখন আমরা তোমাদের জগতসমূহের রবের সমান গণ্য করতাম। কুরতুবী এর ব্যাখ্যা করেন: ইবাদতে সমান করা। বাগাভীও হাসানের কথা রেখেছেন: নাসাবের অর্থ হলো, তারা আল্লাহর ইবাদতে শয়তানদের শরিক করেছিল।"
          },
          {
            "en": "The fetched commentators weigh the readings differently. Al-Qurtubi prefers al-Hasan's. Ma'arif al-Qur'an prefers Ibn Abbas's brother reading. At-Tabari lays out the views on nasab without ranking them. Ibn Kathir and as-Sa'di lead with the angels as daughters, and the Muyassar names a kinship with the angels without giving its form. This article takes none of these positions. What the readings share is plain: in every form, the claim puts a creature on a footing with Allah, as kin, in-law, brother or partner, and the verse answers every form the same way.",
            "bn": "সংগৃহীত তাফসীরকারেরা ব্যাখ্যাগুলোকে ভিন্ন ভিন্ন ওজন দেন। কুরতুবী হাসানের মত পছন্দ করেন। ইবলীসকে ভাই বলার যে ব্যাখ্যা ইবনে আব্বাস (রাঃ) থেকে এসেছে, মাআরিফুল কুরআন সেটি পছন্দ করে। তাবারী নাসাব নিয়ে মতগুলো সাজিয়ে দেন, কোনোটিকে এগিয়ে রাখেন না। ইবন কাসীর ও সা'দী শুরু করেন ফেরেশতাদের কন্যা বলার দাবি দিয়ে। মুয়াসসার ফেরেশতাদের সঙ্গে আত্মীয়তার কথা বলে, তবে তার ধরন জানায় না। এ লেখা এর কোনো পক্ষ নিচ্ছে না। তবে সব ব্যাখ্যার মিলটা পরিষ্কার। যে রূপেই হোক, দাবিটা কোনো সৃষ্টিকে আল্লাহর সমপর্যায়ে বসায়, আত্মীয়, শ্বশুরকুল, ভাই বা শরিক হিসেবে। আর আয়াত প্রতিটি রূপের জবাব দেয় একইভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Summoned, but Who and Why?",
          "bn": "হাজিরা কার, আর কেন?"
        },
        "p": [
          {
            "en": "Wa la-qad 'alimati al-jinnatu innahum la-muhdarun: and al-jinna have certainly known that they will be brought. Ibn Kathir reads al-jinna as those to whom the claim was attributed, and the brought as those who made it: they will be brought into the punishment on the Day of Reckoning for their lies and for speaking falsehood without knowledge. The Muyassar says the angels know that the idolaters will be brought to punishment on the Day of Resurrection. Al-Baghawi likewise names those who said it, brought into the Fire.",
            "bn": "ওয়া লাকাদ আলিমাতিল জিন্নাতু ইন্নাহুম লামুহদারূন: আর আল-জিন্না নিশ্চিতভাবেই জানে যে তাদের হাজির করা হবে। ইবন কাসীরের মতে আল-জিন্না হলো তারা, যাদের দিকে এ দাবি জোড়া হয়েছিল। আর হাজির করা হবে দাবিদারদের। হিসাবের দিনে তাদের শাস্তিতে হাজির করা হবে, তাদের মিথ্যা আর না জেনে বাতিল কথা বলার জন্য। মুয়াসসার বলে, ফেরেশতারা জানে যে মুশরিকদের কিয়ামতের দিন শাস্তির জন্য হাজির করা হবে। বাগাভীও একইভাবে দাবিদারদের কথা বলেন, যাদের জাহান্নামে হাজির করা হবে।"
          },
          {
            "en": "At-Tabari again records a disagreement. Mujahid: al-jinna know that they themselves will be brought to the reckoning. As-Suddi: those who said this will be brought, meaning punished. At-Tabari judges the punishment reading more correct, because every other verse in this surah that mentions being brought means being brought into punishment. Al-Qurtubi gives the same pair, Qatada for the claimants in the Fire and Mujahid for the reckoning, and cites ath-Tha'labi preferring the first for the same reason. The surah's own uses bear the pattern out, at 37:57 and 37:127.",
            "bn": "তাবারী এখানেও মতভেদ লিপিবদ্ধ করেন। মুজাহিদের মতে, আল-জিন্না জানে যে তাদের নিজেদেরই হিসাবের জন্য হাজির করা হবে। সুদ্দীর মতে, যারা এ কথা বলেছে তাদের হাজির করা হবে, মানে তারা শাস্তি পাবে। তাবারী শাস্তির ব্যাখ্যাকে বেশি সঠিক মনে করেন। কারণ, এ সূরার অন্য যেসব আয়াতে হাজির করার কথা আছে, সবখানে উদ্দেশ্য শাস্তিতে হাজির করা। কুরতুবীও একই জোড়া মত আনেন: কাতাদার মতে দাবিদাররা জাহান্নামে, মুজাহিদের মতে হিসাবের জন্য। তিনি সা'লাবীর কথা উদ্ধৃত করেন, একই কারণে প্রথম মতটিই উত্তম। সূরার নিজের ব্যবহারও এ ধারা সমর্থন করে, ৩৭:৫৭ ও ৩৭:১২৭ আয়াতে।"
          },
          {
            "en": "Ma'arif al-Qur'an holds both open: the pronoun could refer to the Mushriks, or to the jinn themselves. On the second, it says, Iblis is perfectly aware of his evil end, and whoever knows he must taste punishment can hardly be the equal of God. As-Sa'di reasons along a similar line: they are brought before Allah to be requited as humbled servants, and had there been kinship between them and Him, they would not be so. On either reading, the beings claimed as kin cannot be what the claim made them.",
            "bn": "মাআরিফুল কুরআন দুই সম্ভাবনাই খোলা রাখে। সর্বনামটি মুশরিকদের দিকে ফিরতে পারে, আবার খোদ জিনদের দিকেও। দ্বিতীয় অর্থে মাআরিফ বলে, ইবলীস তার মন্দ পরিণতির কথা ভালো করেই জানে। যে জানে তাকে শাস্তির স্বাদ নিতেই হবে, সে আল্লাহর সমকক্ষ হয় কী করে? সা'দীর যুক্তিও কাছাকাছি। তাদের আল্লাহর সামনে হাজির করা হবে, যাতে তিনি তাদের প্রতিদান দেন লাঞ্ছিত বান্দা হিসেবে। তাঁর সঙ্গে তাদের আত্মীয়তা থাকলে তারা এমন হতো না। যে পাঠই নেওয়া হোক, যাদের আত্মীয় বলা হয়েছিল, দাবিটা তাদের যা বানিয়েছিল, তারা তা হতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Nearness Is Not Inherited",
          "bn": "নৈকট্য উত্তরাধিকারে মেলে না"
        },
        "p": [
          {
            "en": "On hadith: none of the fetched commentaries attaches a hadith of the Prophet ﷺ to this verse, so none is given here. The verse's own method is the lesson. It does not argue with the family tree branch by branch. It points to the beings placed on that tree and says they know a summons awaits them. A relative of Allah would not be brought before Him; a servant would. The rebuke begun at 37:149 closes this charge with the plainest answer, and the verses after it turn to Allah's exaltation, which is ground for their own articles.",
            "bn": "হাদীস প্রসঙ্গে: সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে নবী ﷺ-এর কোনো হাদীস জোড়েনি, তাই এখানেও কোনো হাদীস দেওয়া হলো না। শিক্ষাটা আয়াতের নিজের পদ্ধতিতেই। বংশতালিকার প্রতিটি শাখা ধরে ধরে আয়াত তর্ক করে না। যাদের সেই তালিকায় বসানো হয়েছিল, আয়াত তাদের দিকে আঙুল তুলে বলে, তারা জানে তাদের ডাক আসবে। আল্লাহর আত্মীয় হলে তাঁর সামনে তাকে হাজির করা হতো না। হাজির করা হয় বান্দাকে। ৩৭:১৪৯ আয়াতে শুরু হওয়া তিরস্কার এভাবে এ অভিযোগের সবচেয়ে সোজা জবাব দিয়ে শেষ হয়। পরের আয়াতগুলো আল্লাহর পবিত্রতার দিকে মোড় নেয়, সেগুলো যার যার নিজের আলোচনার বিষয়।"
          },
          {
            "en": "The claim may sound far from us, but its shape is near. People still expect a family name, a lineage or a borrowed holiness to stand between them and their own account, and still picture Allah through human households and rivalries. The verse answers both habits at once. No creature is His kin, and no kinship with any creature will be brought forward on that day in place of a person's own deeds. What reaches Him is the servant, and the servant's record.",
            "bn": "দাবিটা আমাদের থেকে দূরের মনে হতে পারে, কিন্তু তার ধাঁচটা কাছের। মানুষ আজও আশা করে, বংশের নাম, পারিবারিক পরিচয় বা ধার করা পবিত্রতা তার আর তার নিজের হিসাবের মাঝে দেয়াল হয়ে দাঁড়াবে। আজও মানুষ আল্লাহকে কল্পনা করে মানুষের ঘর-সংসার আর রেষারেষির ছাঁচে। আয়াতটি দুটো অভ্যাসেরই জবাব দেয় একসঙ্গে। কোনো সৃষ্টি তাঁর আত্মীয় নয়। আর সেদিন কোনো সৃষ্টির সঙ্গে আত্মীয়তা কারও নিজের আমলের জায়গা নেবে না। তাঁর কাছে পৌঁছায় বান্দা, আর বান্দার আমলনামা।"
          }
        ]
      }
    ]
  },
  "37:166": {
    "sections": [
      {
        "h": {
          "en": "The Third Word of the Angels",
          "bn": "ফেরেশতাদের তৃতীয় কথা"
        },
        "p": [
          {
            "en": "Wa inna la-nahnu al-musabbihun: and indeed, we, we are the ones who glorify. These three Arabic words close a short speech that began at 37:164: there is none of us but has a known station. Then 37:165: and indeed, we are the ones who line up. The last two sentences are built the same way, wa inna la-nahnu followed by a word with the definite article, and only the last word changes, from as-saffun to al-musabbihun. Ibn Kathir reads the two together: we line up, and then we glorify the Lord.",
            "bn": "ওয়া ইন্না লানাহনুল মুসাব্বিহূন: আর নিশ্চয়ই আমরা, আমরাই তাসবীহ পাঠকারী। আরবিতে মাত্র তিনটি শব্দ। এগুলো দিয়ে শেষ হচ্ছে ছোট্ট এক বক্তব্য, যার শুরু ৩৭:১৬৪ আয়াতে: আমাদের প্রত্যেকেরই একটা নির্দিষ্ট স্থান আছে। এরপর ৩৭:১৬৫: আর আমরাই সারিবদ্ধ হয়ে দাঁড়াই। শেষ দুই বাক্যের গড়ন হুবহু এক। শুরুতে ওয়া ইন্না লানাহনু, তারপর আলিফ-লামযুক্ত একটি শব্দ। বদলায় কেবল শেষ শব্দটা: আস-সাফফূন থেকে আল-মুসাব্বিহূন। ইবন কাসীর দুটোকে একসঙ্গে পড়েন: আমরা সারি বাঁধি, তারপর রবের তাসবীহ পড়ি।"
          },
          {
            "en": "Al-musabbihun comes from the root s-b-h, the root of subhan Allah. Only a few verses earlier, at 37:159, the same root has already sounded: subhana Allahi 'amma yasifun, exalted is Allah above what they describe. That line answers the claims made in 37:150, 37:153 and 37:158 about the angels and the jinn. So the passage sets the angels' own tasbih close behind a tasbih spoken over the idolaters' claims. The verse itself is brief. It reports what the angels say of themselves, and the commentators supply what the word glorify means here.",
            "bn": "আল-মুসাব্বিহূন শব্দের ধাতু স-ব-হ, সুবহানাল্লাহ-এর ধাতুও এটাই। কয়েক আয়াত আগে ৩৭:১৫৯ আয়াতে এই ধাতু একবার এসে গেছে: সুবহানাল্লাহি আম্মা ইয়াসিফূন, তারা যা বর্ণনা করে আল্লাহ তা থেকে পবিত্র। ফেরেশতা আর জিনদের নিয়ে ৩৭:১৫০, ৩৭:১৫৩ ও ৩৭:১৫৮ আয়াতে যেসব দাবির কথা এসেছে, ওই বাক্য তারই জবাব। মুশরিকদের দাবির ওপর উচ্চারিত সেই তাসবীহর ঠিক পরেই তাই এসেছে ফেরেশতাদের নিজেদের তাসবীহ। আয়াতটি ছোট। ফেরেশতারা নিজেদের সম্পর্কে কী বলে, শুধু সেটুকু জানায়। তাসবীহ শব্দটি এখানে কী বোঝায়, তা খুলে বলেন তাফসীরকারেরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Voice Speaks Here",
          "bn": "এখানে কথা বলছে কারা"
        },
        "p": [
          {
            "en": "The verse has no say at its start, so the first question is who we are. Ibn Kathir cites Ibn 'Abbas (RA) and Mujahid: each of the three sentences is the angels, and on this one, the angels glorify Allah, Mighty and Majestic. At-Tabari's chain to Ibn 'Abbas (RA) gives it in other words: the angels, lined up, glorifying Allah. Qatada, in the report at-Tabari carries, calls it the speech of the angels about their place in worship. The Muyassar opens its gloss on 37:164 to 37:166 with qalat al-mala'ika: the angels said.",
            "bn": "আয়াতের শুরুতে বলো কথাটি নেই। তাই প্রথম প্রশ্ন: এই আমরা কারা? ইবন কাসীর ইবন আব্বাস (রাঃ) ও মুজাহিদের কথা আনেন। তাঁদের মতে তিনটি বাক্যই ফেরেশতাদের, আর এ বাক্যের অর্থ ফেরেশতারা মহান আল্লাহর তাসবীহ পাঠ করে। তাবারী ইবন আব্বাস (রাঃ) পর্যন্ত নিজের সনদে একই কথা আনেন অন্য শব্দে: ফেরেশতারা সারিবদ্ধ, আল্লাহর তাসবীহরত। তাবারীর আনা বর্ণনায় কাতাদা বলেন, এটি ফেরেশতাদের কথা, ইবাদতে তাদের অবস্থান নিয়ে। মুয়াসসার ৩৭:১৬৪ থেকে ৩৭:১৬৬ আয়াতের ব্যাখ্যা শুরুই করে কালাতিল মালাইকা দিয়ে: ফেরেশতারা বলল।"
          },
          {
            "en": "Al-Baghawi frames the voice a little differently. In his reading it is Jibril (AS) who tells the Prophet ﷺ that the angels worship Allah by prayer and by tasbih, and that they are not objects of worship, as the disbelievers claimed. After that, he notes, the speech turns back to the idolaters. The framings agree on who the we are: angels, whether heard directly or through Jibril (AS). Either way, the angels' testimony about themselves stands inside the Qur'an's answer to those who had made them objects of worship.",
            "bn": "বাগাভী কণ্ঠটাকে একটু অন্যভাবে দেখেন। তাঁর ব্যাখ্যায় জিবরীল (আঃ) নবী ﷺ-কে জানাচ্ছেন যে ফেরেশতারা নামাজ ও তাসবীহর মাধ্যমে আল্লাহর ইবাদত করে। কাফিররা যেমন দাবি করত, তারা তেমন উপাস্য নয়। বাগাভী বলেন, এরপর কথা আবার মুশরিকদের প্রসঙ্গে ফিরে যায়। আমরা বলতে কারা, এ নিয়ে দুই ব্যাখ্যায় কোনো অমিল নেই: তারা ফেরেশতা, সরাসরি শোনা হোক বা জিবরীল (আঃ)-এর মুখে। যেভাবেই হোক, নিজেদের সম্পর্কে ফেরেশতাদের এই সাক্ষ্য এসেছে কুরআনের সেই জবাবের ভেতরে, যা দেওয়া হয়েছে তাদের উপাস্য বানানো লোকদের।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer, or Declaring Him Free",
          "bn": "নামাজ, নাকি পবিত্রতা ঘোষণা"
        },
        "p": [
          {
            "en": "At-Tabari's own gloss is short: al-musabbihun lahu, meaning al-musallun lahu, those who pray to Him. He adds that a report from the Messenger ﷺ came to this effect and that the people of interpretation held it. In the report from Qatada that he carries, as-saffun are rows in the heaven and al-musabbihun are al-musallun, those who pray. Al-Qurtubi opens his entry the same way: al-musallun, said Qatada. On this reading, the word in the verse names the prayer itself, and the angels are describing themselves as a people at prayer.",
            "bn": "তাবারীর নিজের ব্যাখ্যা ছোট: আল-মুসাব্বিহূনা লাহু মানে আল-মুসাল্লূনা লাহু, যারা তাঁর উদ্দেশে নামাজ পড়ে। তিনি যোগ করেন, এ মর্মে রাসূল ﷺ থেকে বর্ণনা এসেছে, আর ব্যাখ্যাকারেরাও এ কথাই বলেছেন। কাতাদা থেকে তিনি যে বর্ণনা আনেন, তাতে আস-সাফফূন হলো আসমানের সারি, আর আল-মুসাব্বিহূন মানে আল-মুসাল্লূন, নামাজি। কুরতুবীও শুরু করেন একইভাবে: আল-মুসাল্লূন, কাতাদা এ কথা বলেছেন। এই পাঠে আয়াতের শব্দটি খোদ নামাজকেই বোঝায়। ফেরেশতারা নিজেদের পরিচয় দিচ্ছে নামাজে দাঁড়ানো এক দল হিসেবে।"
          },
          {
            "en": "Al-Qurtubi then records a second reading under wa-qila, it was said: al-munazzihun, those who declare Allah free of what the idolaters ascribed to Him. As-Sa'di takes this line, glossing the word as those who glorify Allah above what does not befit Him. The Muyassar says the same: those who declare Allah free of all that does not befit Him. Here tasbih keeps its root sense, declaring Him above any flaw, and the verse becomes a direct contradiction of what had just been said about the angels and their Lord.",
            "bn": "এরপর কুরতুবী ওয়া কীলা, অর্থাৎ বলা হয়েছে, এই শব্দে আরেকটি পাঠ উল্লেখ করেন: আল-মুনাযযিহূন। মুশরিকরা আল্লাহর প্রতি যা আরোপ করেছে, তা থেকে যারা তাঁকে পবিত্র ঘোষণা করে। সা'দী এই পথ ধরেন। তাঁর ব্যাখ্যায় এরা আল্লাহর জন্য অশোভন সবকিছু থেকে তাঁর পবিত্রতা ঘোষণা করে। মুয়াসসারও একই কথা বলে: আল্লাহর সঙ্গে মানায় না এমন সবকিছু থেকে যারা তাঁকে মুক্ত ঘোষণা করে। এখানে তাসবীহ তার মূল অর্থেই থাকে, সব ত্রুটির ঊর্ধ্বে তাঁকে ঘোষণা করা। তখন আয়াতটি হয়ে দাঁড়ায় ফেরেশতা ও তাদের রব নিয়ে একটু আগে বলা কথার সরাসরি খণ্ডন।"
          },
          {
            "en": "The sources do not keep the readings wholly apart. Al-Baghawi joins them in one phrase: al-musallun al-munazzihun Allah 'an as-su', those who pray and who declare Allah free of evil. Al-Qurtubi, after giving both, states the intent: the angels report that they worship Allah by tasbih and by prayer. The commentators differ on which sense the word carries first, prayer or declaring Him free. This article leaves the difference as they left it, and notes only that several of them hold the two side by side.",
            "bn": "সূত্রগুলো দুই পাঠকে পুরোপুরি আলাদা রাখে না। বাগাভী একটি বাক্যেই দুটো জুড়ে দেন: আল-মুসাল্লূনাল মুনাযযিহূনাল্লাহা আনিস সূ', যারা নামাজ পড়ে এবং আল্লাহকে সব মন্দ থেকে পবিত্র ঘোষণা করে। কুরতুবী দুটো পাঠ দেওয়ার পর মূল উদ্দেশ্য বলে দেন: ফেরেশতারা জানাচ্ছে যে তারা তাসবীহ ও নামাজের মাধ্যমে আল্লাহর ইবাদত করে। শব্দটির প্রথম অর্থ নামাজ, নাকি পবিত্রতা ঘোষণা, এ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। এ লেখা সেই মতভেদ যেমন আছে তেমনই রাখছে। শুধু এটুকু বলছে যে তাঁদের কয়েকজন দুটো অর্থ পাশাপাশি ধরেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Servants Answering the Kinship Claim",
          "bn": "আত্মীয়তার দাবির জবাবে বান্দারা"
        },
        "p": [
          {
            "en": "The verse sits at the end of a rebuke that runs through the passage. At 37:150 the idea that the angels were made female met a question: were they there to witness it? At 37:153 came the question whether He had chosen daughters over sons, and at 37:158 the claim of a lineage between Him and the hidden beings. Now, in 37:166, the beings at the centre of the claim speak for themselves. Al-Qurtubi names the point: they report that they worship Allah, that they are not worshipped, and that they are not daughters of Allah.",
            "bn": "আয়াতটি এসেছে গোটা অংশজুড়ে চলা এক তিরস্কারের শেষে। ৩৭:১৫০ আয়াতে ফেরেশতাদের নারী বানানোর ধারণার জবাব এসেছিল প্রশ্নের আকারে: তারা কি তখন উপস্থিত ছিল? ৩৭:১৫৩ আয়াতে প্রশ্ন ছিল, তিনি কি পুত্রের বদলে কন্যা বেছে নিয়েছেন? আর ৩৭:১৫৮ আয়াতে ছিল তাঁর ও অদৃশ্য সত্তাদের মধ্যে বংশসম্পর্কের দাবি। এবার ৩৭:১৬৬ আয়াতে যাদের ঘিরে দাবিটা, তারাই নিজেদের কথা বলছে। কুরতুবী আসল কথাটা স্পষ্ট করেন: তারা জানাচ্ছে যে তারা আল্লাহর ইবাদত করে, তাদের ইবাদত করা হয় না, আর তারা আল্লাহর কন্যাও নয়।"
          },
          {
            "en": "As-Sa'di draws the conclusion as an exclamation: with this being their state, how could they be fit to be partners of Allah? Exalted is Allah. The argument needs no outside proof, since it comes from the very beings in dispute, and one who glorifies stands below the One glorified. In the verse's own wording the answer is a description of what they do, not a bare denial. This passage describes a claim made by people of that time and the reply to it; it licenses nothing against any living person or community.",
            "bn": "সা'দী উপসংহার টানেন বিস্ময়ের সুরে: এই যখন তাদের অবস্থা, তখন তারা আল্লাহর শরীক হওয়ার যোগ্য হয় কী করে? আল্লাহ এর বহু ঊর্ধ্বে। এ যুক্তির জন্য বাইরের কোনো প্রমাণ লাগে না। যাদের নিয়ে বিতর্ক, কথাটা আসছে তাদেরই মুখ থেকে। আর যে তাসবীহ পড়ে, সে যাঁর তাসবীহ পড়ে তাঁর নিচেই দাঁড়ায়। আয়াতের নিজের শব্দে জবাবটা শুধু অস্বীকার নয়, তারা কী করে তার বিবরণ। এই অংশ সে যুগের কিছু মানুষের একটি দাবি আর তার জবাবের কথা বলে। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ থেকে কিছুরই অনুমতি মেলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Needy, Humble, Never Worshipped",
          "bn": "মুখাপেক্ষী, বিনীত, উপাস্য নয়"
        },
        "p": [
          {
            "en": "Ibn Kathir gives the fullest gloss. The angels are saying: we line up and glorify the Lord, we extol Him, sanctify Him and declare Him free of every deficiency; we are servants to Him, in need of Him, humbled before Him. The English abridgement of his work renders the last part as servants of Him and in need of Him, humbling ourselves before Him. Three words in his Arabic carry the reply to the kinship claim: 'abid, servants; fuqara', in need; khadi'un, humbled. Each word places them below their Lord, not beside Him.",
            "bn": "সবচেয়ে বিস্তারিত ব্যাখ্যা দেন ইবন কাসীর। ফেরেশতারা যেন বলছে: আমরা সারি বাঁধি আর রবের তাসবীহ পড়ি, তাঁর মহিমা গাই, তাঁর পবিত্রতা বর্ণনা করি, সব অপূর্ণতা থেকে তাঁকে মুক্ত ঘোষণা করি। আমরা তাঁর বান্দা, তাঁর মুখাপেক্ষী, তাঁর সামনে নত। তাঁর তাফসীরের ইংরেজি সংক্ষেপেও শেষ অংশটা এসেছে এভাবে: তাঁর বান্দা, তাঁর মুখাপেক্ষী, তাঁর সামনে বিনীত। তাঁর আরবি ভাষ্যের তিনটি শব্দেই আত্মীয়তার দাবির জবাব: আবীদ, বান্দা; ফুকারা, মুখাপেক্ষী; খাদিঊন, নত। প্রতিটি শব্দ তাদের রাখে রবের নিচে, তাঁর পাশে নয়।"
          },
          {
            "en": "After Qatada's line, Ibn Kathir sets a parallel from Surah al-Anbiya, 21:26 to 21:29. They said the Merciful has taken a child; subhanahu, exalted is He; rather, they are honoured servants. They do not speak before Him, and they act by His command. He knows what is before them and behind them; they intercede only for one He approves, and they are fearful in awe of Him. And whoever of them should say, I am a god besides Him, We would recompense him with Hell. There too the reply opens with subhanahu, from the root of al-musabbihun.",
            "bn": "কাতাদার কথার পর ইবন কাসীর সূরা আল-আম্বিয়া থেকে একটি সমান্তরাল অংশ আনেন, ২১:২৬ থেকে ২১:২৯ আয়াত। তারা বলে, দয়াময় সন্তান গ্রহণ করেছেন। সুবহানাহু, তিনি পবিত্র। বরং তারা সম্মানিত বান্দা। তারা তাঁর আগে কথা বলে না, তাঁর আদেশেই কাজ করে। তাদের সামনে ও পেছনে যা আছে, তিনি সব জানেন। তিনি যার প্রতি সন্তুষ্ট, তারা কেবল তার জন্যই সুপারিশ করে, আর তাঁর ভয়ে তারা সন্ত্রস্ত। তাদের কেউ যদি বলে, তাঁকে ছাড়া আমিই ইলাহ, তাকে আমি জাহান্নাম দিয়ে প্রতিফল দেব। সেখানেও জবাব শুরু হয় সুবহানাহু দিয়ে, আল-মুসাব্বিহূনের ধাতু থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Foot's Space Empty",
          "bn": "এক পা রাখার জায়গাও খালি নেই"
        },
        "p": [
          {
            "en": "At-Tabari carries a narration about the crowded heavens and ties it to these verses. His chain runs from Muhammad ibn 'Ali ibn al-Hasan ibn Shaqiq al-Marwazi, through Abu Mu'adh al-Fadl ibn Khalid and 'Ubayd ibn Sulayman, to ad-Dahhak ibn Muzahim, who said that Masruq used to narrate from 'A'ishah (RA) that the Prophet ﷺ said: there is no place of a foot in the lowest heaven but an angel is on it, prostrating or standing. The report then says: that is Allah's word, and recites 37:164 to 37:166.",
            "bn": "আসমানের ভিড় নিয়ে একটি বর্ণনা তাবারী আনেন এবং এ আয়াতগুলোর সঙ্গে জুড়ে দেন। তাঁর সনদ: মুহাম্মাদ ইবন আলী ইবনুল হাসান ইবন শাকীক আল-মারওয়াযী, তারপর আবূ মুআয আল-ফাদল ইবন খালিদ ও উবাইদ ইবন সুলাইমান হয়ে দাহহাক ইবন মুযাহিম। দাহহাক বলেন, মাসরূক আয়েশা (রাঃ) থেকে বর্ণনা করতেন যে নবী ﷺ বলেছেন: দুনিয়ার আসমানে এক পা রাখার মতো এমন কোনো জায়গা নেই, যেখানে কোনো ফেরেশতা সিজদারত বা দাঁড়িয়ে নেই। বর্ণনাটি এরপর বলে, এটাই আল্লাহর বাণী, এবং ৩৭:১৬৪ থেকে ৩৭:১৬৬ আয়াত পাঠ করে।"
          },
          {
            "en": "At-Tabari gives no grading for this narration, and it could not be confirmed in one of the six collections for this article. It is offered only as his transmission, with its chain as he gives it, ungraded. Ad-Dahhak says Masruq used to narrate it; he does not say he heard it from him. Beside it at-Tabari brings a saying of Ibn Mas'ud (RA), through Masruq: among the heavens is one with not a hand-span's space but an angel's forehead or feet are on it; then he recited 37:165 and 37:166. That is a Companion's statement.",
            "bn": "তাবারী এই বর্ণনার কোনো মান উল্লেখ করেননি। এ লেখার জন্য ছয়টি হাদীসগ্রন্থের কোনোটিতে বর্ণনাটি নিশ্চিত করা যায়নি। তাই একে কেবল তাবারীর বর্ণনা হিসেবেই রাখা হলো, তাঁর দেওয়া সনদসহ, কোনো মান ছাড়া। দাহহাক বলেছেন মাসরূক এটা বর্ণনা করতেন, নিজে তাঁর কাছ থেকে শুনেছেন এমন কথা বলেননি। এর পাশে তাবারী মাসরূকের মাধ্যমে ইবন মাসঊদ (রাঃ)-এর একটি উক্তি আনেন: আসমানগুলোর মধ্যে এমন এক আসমান আছে, যেখানে এক বিঘত জায়গাও নেই, যার ওপর কোনো ফেরেশতার কপাল বা পা নেই। তারপর তিনি ৩৭:১৬৫ ও ৩৭:১৬৬ আয়াত পাঠ করেন। এটি একজন সাহাবীর নিজের উক্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Rows Below Like Rows Above",
          "bn": "উপরের সারির মতো নিচের সারি"
        },
        "p": [
          {
            "en": "This verse's word is tasbih, but its partner 37:165 speaks of rows, and the sources draw a line from the heavens to the prayer on earth. Ibn Kathir, in the English abridgement, attaches a hadith from Sahih Muslim to the lining up. In Muslim's wording (522), Hudhayfah (RA) reported that the Messenger of Allah ﷺ said: We have been made to excel (other) people in three (things): our rows have been made like the rows of the angels and the whole earth has been made a mosque for us, and its dust has been made a purifier for us in case water is not available.",
            "bn": "এ আয়াতের শব্দ তাসবীহ, তবে এর সঙ্গী ৩৭:১৬৫ আয়াত সারির কথা বলে। আর সূত্রগুলো আসমান থেকে দুনিয়ার নামাজ পর্যন্ত একটা রেখা টানে। ইবন কাসীরের তাফসীরের ইংরেজি সংক্ষেপে এই সারি বাঁধার প্রসঙ্গে সহীহ মুসলিমের একটি হাদীস জুড়ে দেওয়া হয়েছে। মুসলিমের ভাষ্যে (৫২২) হুযাইফা (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: তিনটি বিষয়ে আমাদের অন্য মানুষের ওপর শ্রেষ্ঠত্ব দেওয়া হয়েছে। আমাদের সারিগুলো করা হয়েছে ফেরেশতাদের সারির মতো, গোটা পৃথিবীকে আমাদের জন্য মসজিদ বানানো হয়েছে, আর পানি না পেলে এর মাটিকে আমাদের জন্য পবিত্রকারী করা হয়েছে।"
          },
          {
            "en": "The narration ends: and he mentioned another characteristic too. Muslim placed it in his Sahih. It belongs to the lining up of 37:165 rather than to the word al-musabbihun, and it stands here only to show that the angels' ranks are the pattern held up for the rows of believers. At-Tabari records, from Abu Nadrah, that when the iqamah was called, 'Umar (RA) would face the people and say: straighten your rows, for Allah wants for you the way of the angels; then he recited 37:165 and 37:166.",
            "bn": "বর্ণনাটি শেষ হয় এ কথায়: তিনি আরও একটি বৈশিষ্ট্যের কথা উল্লেখ করেছিলেন। ইমাম মুসলিম হাদীসটি তাঁর সহীহ গ্রন্থে এনেছেন। এর সম্পর্ক ৩৭:১৬৫ আয়াতের সারি বাঁধার সঙ্গে, আল-মুসাব্বিহূন শব্দের সঙ্গে নয়। এখানে আনা হয়েছে শুধু এটুকু দেখাতে যে মুমিনদের কাতারের সামনে আদর্শ হিসেবে রাখা হয়েছে ফেরেশতাদের সারি। তাবারী আবূ নাদরা থেকে বর্ণনা করেন, ইকামত হলে উমর (রাঃ) লোকদের দিকে মুখ ফিরিয়ে বলতেন: তোমাদের কাতার সোজা করো, আল্লাহ তোমাদের কাছে ফেরেশতাদের পথ চান। তারপর তিনি ৩৭:১৬৫ ও ৩৭:১৬৬ আয়াত পাঠ করতেন।"
          },
          {
            "en": "In at-Tabari's report 'Umar (RA) then told one man to step forward and another to step back, and only when the rows were straight did he go forward and say the takbir. Ibn Kathir notes that Ibn Abi Hatim and Ibn Jarir recorded it; neither text fetched for this verse gives it a grading, so none is given here. Taken together, the reports place the believer's row and the angels' ranks side by side, and the verse adds what the angels do once they are lined up: they glorify.",
            "bn": "তাবারীর বর্ণনায় এরপর উমর (রাঃ) একজনকে সামনে এগোতে, আরেকজনকে পিছিয়ে যেতে বলতেন। কাতার পুরোপুরি সোজা হলে তবেই সামনে গিয়ে তাকবীর দিতেন। ইবন কাসীর জানান, ইবন আবী হাতিম ও ইবন জারীর এটি বর্ণনা করেছেন। এ আয়াতের জন্য সংগ্রহ করা কোনো পাঠে এর মান দেওয়া নেই, তাই এখানেও কোনো মান দেওয়া হলো না। সব বর্ণনা মিলিয়ে দেখলে মুমিনের কাতার আর ফেরেশতাদের সারি পাশাপাশি এসে দাঁড়ায়। আর আয়াতটি যোগ করে, সারি বাঁধার পর ফেরেশতারা কী করে: তারা তাসবীহ পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Joining Those Who Glorify",
          "bn": "তাসবীহকারীদের কাতারে শামিল হওয়া"
        },
        "p": [
          {
            "en": "The verse closes a dispute about rank with a statement of work. The beings whom the claim had raised to kinship with Allah describe themselves by what they do before Him, and what they do is glorify Him. On how the angels worship, the sources say no more than the reports above: prayer, tasbih, standing, prostrating, rows, a known station. This article stops where they stop. What the reader can take is the order the verse lays down: whoever is near to Allah is near as a servant, and the service named here is to declare Him free of every flaw.",
            "bn": "মর্যাদা নিয়ে এক বিতর্ক আয়াতটি শেষ করে কাজের বিবরণ দিয়ে। দাবিদাররা যাদের আল্লাহর আত্মীয় বানিয়েছিল, তারা নিজেদের পরিচয় দেয় তাঁর সামনে তারা কী করে তা দিয়ে। আর তারা যা করে তা হলো তাঁর তাসবীহ। ফেরেশতারা কীভাবে ইবাদত করে, সে বিষয়ে সূত্রগুলো ওপরের বর্ণনাগুলোর বেশি কিছু বলে না: নামাজ, তাসবীহ, দাঁড়ানো, সিজদা, সারি, নির্দিষ্ট স্থান। এ লেখাও সেখানেই থামছে। পাঠকের জন্য শিক্ষা হলো আয়াতের দেখানো ক্রম: আল্লাহর কাছে যে-ই থাকুক, সে আছে বান্দা হিসেবে। আর এখানে যে খেদমতের নাম এসেছে, তা হলো সব ত্রুটি থেকে তাঁকে পবিত্র ঘোষণা করা।"
          },
          {
            "en": "The words of that service are already on a Muslim's tongue. Subhan Allah, repeated in prayer and in remembrance, comes from the same root and does the same work. One who says it with attention joins, in a small way, the work the angels name as theirs. And when a believer stands in a row and hears the call to straighten it, the reminder 'Umar (RA) gave applies: Allah wants for His worshippers the way of the angels. The verse offers no rank and no lineage, only a known place, a straight row and a tongue that exalts Him.",
            "bn": "সেই খেদমতের শব্দ মুসলিমের মুখে আগে থেকেই আছে। সুবহানাল্লাহ, যা নামাজে আর জিকিরে বারবার উচ্চারিত হয়, একই ধাতু থেকে এসেছে এবং একই কাজ করে। মন দিয়ে যে এটা বলে, সে ছোট পরিসরে হলেও সেই কাজে শামিল হয়, যাকে ফেরেশতারা নিজেদের কাজ বলে পরিচয় দিয়েছে। কাতারে দাঁড়িয়ে কাতার সোজা করার ডাক শুনলে উমর (রাঃ)-এর মনে করিয়ে দেওয়া কথাটা খাটে: আল্লাহ তাঁর ইবাদতকারীদের কাছে ফেরেশতাদের পথ চান। আয়াতটি কোনো পদমর্যাদা বা বংশ দেয় না। দেয় শুধু একটা নির্দিষ্ট জায়গা, একটা সোজা কাতার, আর এমন জিহ্বা যা তাঁর মহিমা ঘোষণা করে।"
          }
        ]
      }
    ]
  }
});
