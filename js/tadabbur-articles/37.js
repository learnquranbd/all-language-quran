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
