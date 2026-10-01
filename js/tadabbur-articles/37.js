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
