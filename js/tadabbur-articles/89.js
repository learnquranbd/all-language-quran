/**
 * Tadabbur long-form articles — surah 89.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "89:1": {
    "sections": [
      {
        "h": {
          "en": "Daybreak Opens the Surah",
          "bn": "ভোর দিয়ে সূরার শুরু"
        },
        "p": [
          {
            "en": "Wal-fajr: and by the dawn. The surah's first verse is one Arabic word, and it begins a chain. Al-Qurtubi counts five oaths in the opening verses: the dawn, ten nights, the even, the odd, and the night as it moves on. The Muyassar folds them into one sentence: Allah swore by the time of dawn, the first ten nights of Dhul-Hijjah, every even and single thing, and the night travelling with its darkness, then asked whether these oaths are not enough for a person of sense.",
            "bn": "ওয়াল ফাজর: ঊষার শপথ। সূরার প্রথম আয়াত মাত্র একটি আরবি শব্দ, আর এখান থেকেই শুরু হয় শপথের এক মালা। কুরতুবী শুরুর আয়াতগুলোতে পাঁচটি শপথ গোনেন: ঊষা, দশটি রাত, জোড়, বেজোড়, আর চলে যেতে থাকা রাত। মুয়াসসার সবগুলোকে এক বাক্যে বেঁধে দেয়। আল্লাহ শপথ করেছেন ফজরের সময়ের, জিলহজের প্রথম দশ রাতের, প্রতিটি জোড় ও বেজোড়ের, আর আঁধার নিয়ে বয়ে চলা রাতের। তারপর প্রশ্ন রেখেছেন, বোধসম্পন্ন মানুষের জন্য এই শপথগুলো কি যথেষ্ট নয়?"
          },
          {
            "en": "As-Sa'di explains why the dawn heads the list. It ends the night and opens the day, and in the night turning away and the day coming on are signs of the completeness of Allah's power, and that He alone arranges every affair and alone deserves worship. Ibn Kathir opens the surah with a report relayed from an-Nasa'i, on the length of a congregational prayer, that names this surah. I could not confirm it on a collection page, so it is only mentioned.",
            "bn": "তালিকার মাথায় ঊষা কেন, সা'দী তা বুঝিয়ে দেন। ঊষা রাতের শেষ প্রান্ত আর দিনের সামনের ভাগ। রাত পিঠ ফিরিয়ে চলে যায়, দিন এগিয়ে আসে, আর এই পালাবদলে আছে এমন নিদর্শন, যা আল্লাহর পূর্ণ ক্ষমতার দিকে ইশারা করে। ইশারা করে এদিকেও যে সব কাজের ব্যবস্থাপক তিনি একাই, আর ইবাদত কেবল তাঁরই প্রাপ্য। ইবন কাসীর সূরাটির শুরুতে নাসাঈ থেকে একটি বর্ণনা আনেন। বিষয় জামাতের নামাজে ইমাম কতটা লম্বা করবেন, আর সেখানে এ সূরার নাম এসেছে। কোনো হাদিসগ্রন্থের পাতায় আমি এটি মিলিয়ে দেখতে পারিনি, তাই এখানে শুধু উল্লেখ রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Morning, or One",
          "bn": "প্রতিটি সকাল, নাকি একটি"
        },
        "p": [
          {
            "en": "The commentators agree on the word and differ on its reach. Ibn Kathir calls the dawn well known: it is the morning, as 'Ali, Ibn 'Abbas, Mujahid, 'Ikrimah and as-Suddi said. Al-Qurtubi describes it as the darkness bursting open onto the day, every day, naming 'Ali, Ibn az-Zubayr and Ibn 'Abbas (RA), and Ma'arif al-Qur'an likewise calls the word general: any dawn, the daily change that turns a person towards Allah's power.",
            "bn": "শব্দটির অর্থে তাফসীরকারেরা একমত, তবে তার পরিধি নিয়ে মত ভিন্ন। ইবন কাসীর বলেন, ফজর তো জানা কথা, অর্থ সকাল। এ মতের জন্য তিনি নাম নেন আলী (রাঃ), ইবন আব্বাস (রাঃ), মুজাহিদ, ইকরিমা ও সুদ্দীর। কুরতুবীর ব্যাখ্যায় ফজর হলো রোজকার সেই মুহূর্ত, যখন আঁধার ফেটে দিন বেরিয়ে আসে। এখানে তিনি আলী, ইবনুয যুবাইর ও ইবন আব্বাসের নাম নেন। মাআরিফুল কুরআনও শব্দটিকে সাধারণ বলে, যেকোনো ভোরই এর অর্থ। প্রতিদিনের এই বড় পরিবর্তন মানুষের মনকে আল্লাহর ক্ষমতার দিকে ফেরায়।"
          },
          {
            "en": "Other early readers fixed it to one day. Ibn Kathir reports from Masruq, Mujahid and Muhammad ibn Ka'b that the dawn of the Day of Sacrifice is meant in particular, as the close of the ten nights. Al-Qurtubi reports from Qatadah the dawn of the first day of Muharram, the dawn from which the year bursts open, and al-Baghawi reports the same from Qatadah. Ad-Dahhak, in both al-Qurtubi and al-Baghawi, said the dawn of Dhul-Hijjah, because the ten nights are joined to it.",
            "bn": "প্রথম যুগের আরও কয়েকজন একে একটি নির্দিষ্ট দিনে বেঁধেছেন। ইবন কাসীর মাসরুক, মুজাহিদ ও মুহাম্মাদ ইবন কা'ব থেকে বর্ণনা করেন, বিশেষভাবে কুরবানির দিনের ভোর বোঝানো হয়েছে, যা দশটি রাতের সমাপ্তি। কুরতুবী কাতাদা থেকে আনেন মুহাররমের প্রথম দিনের ভোর, যে ভোর থেকে বছর ফুটে বের হয়। বাগাভীও কাতাদা থেকে একই কথা বর্ণনা করেন। কুরতুবী ও বাগাভী দুজনের বর্ণনাতেই দাহহাক বলেছেন জিলহজের ভোর। কারণ দশ রাত এর সঙ্গে জোড়া লাগানো।"
          },
          {
            "en": "A third group read it as worship. At-Tabari reports, through a chain to Ibn 'Abbas, that it means the Fajr prayer; al-Baghawi reports the same from Ibn 'Abbas through 'Atiyyah, and Ibn Kathir names 'Ikrimah for the prayer offered at that hour. A fourth reading widens it: at-Tabari has Ibn 'Abbas saying the dawn is the daytime, and al-Qurtubi explains that the whole day is named after its first part. At-Tabari lists these views and, in the text fetched for this verse, gives no preference among them.",
            "bn": "তৃতীয় একদল ফজরকে দেখেছেন ইবাদত হিসেবে। তাবারী এক সনদে ইবন আব্বাস থেকে বর্ণনা করেন, এর অর্থ ফজরের নামাজ। বাগাভীও আতিয়্যার সূত্রে ইবন আব্বাস থেকে একই কথা আনেন, আর ইবন কাসীর ওই সময়ে আদায় করা নামাজের মতের জন্য ইকরিমার নাম নেন। চতুর্থ একটি মত অর্থটা আরও ছড়িয়ে দেয়। তাবারীর বর্ণনায় ইবন আব্বাস বলেছেন, ফজর মানে দিন। কুরতুবী ব্যাখ্যা করেন, গোটা দিনকে তার শুরুর অংশের নামে ডাকা হয়েছে। এই আয়াতের যে পাঠ আমার সামনে আছে, তাতে তাবারী মতগুলো সাজিয়ে দেন, কোনোটিকে প্রাধান্য দেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Day With No Eve",
          "bn": "যে দিনের আগে রাত নেই"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives the reasoning behind the Day of Sacrifice reading, in a report from Ibn Jurayj through 'Ata' from Ibn 'Abbas. Allah gave every day a night before it except the Day of Sacrifice, which has no night of its own before it or after it, because the Day of 'Arafah has two nights: the one before it and the one after it. Whoever reaches the standing place in the night after 'Arafah has caught the Hajj, until the dawn of the Day of Sacrifice rises. Al-Qurtubi adds that this is Mujahid's view.",
            "bn": "কুরবানির দিনের ভোরের মতটির পেছনের যুক্তি কুরতুবী দেন ইবন জুরাইজের একটি বর্ণনায়, যা আতা হয়ে ইবন আব্বাস পর্যন্ত গেছে। আল্লাহ প্রতিটি দিনের আগে একটি রাত রেখেছেন, শুধু কুরবানির দিন ছাড়া। ওই দিনের আগে বা পরে তার নিজের কোনো রাত নেই। কারণ আরাফার দিনের রাত দুটি, একটি আগে, একটি পরে। আরাফার পরের রাতে যে অবস্থানস্থলে পৌঁছে যায়, সে হজ পেয়ে যায়, আর এ সুযোগ থাকে কুরবানির দিনের ভোর ফোটা পর্যন্ত। কুরতুবী যোগ করেন, এটাই মুজাহিদের মত।"
          },
          {
            "en": "Ma'arif al-Qur'an carries the same argument, naming al-Qurtubi, and draws the conclusion that the dawn of that day holds a special place among all the days of the year. As-Sa'di stays with the daily dawn and adds a second reason for swearing by it: a prayer of great merit falls at that time, one held in high honour, and it is fitting that Allah should swear by it.",
            "bn": "মাআরিফুল কুরআন কুরতুবীর নাম নিয়ে একই যুক্তি তুলে ধরে, আর সিদ্ধান্ত টানে যে বছরের সব দিনের মধ্যে ওই দিনের ভোরের আলাদা মর্যাদা আছে। সা'দী থাকেন রোজকার ভোরের সঙ্গেই, আর এর শপথের পেছনে দ্বিতীয় একটি কারণ যোগ করেন। ওই সময়ে আদায় হয় এক মহা ফজিলতের নামাজ, যাকে বড় সম্মানের চোখে দেখা হয়। এমন জিনিসের শপথ আল্লাহ করবেন, সেটাই মানানসই।"
          }
        ]
      },
      {
        "h": {
          "en": "Ten Nights Without a Name",
          "bn": "নামহীন দশ রাত"
        },
        "p": [
          {
            "en": "The second oath, wa-layalin 'ashr, and by ten nights, does not say which ten. At-Tabari reports the first ten of Dhul-Hijjah from Ibn 'Abbas through several chains, from Ibn az-Zubayr (from the start of the month to the Day of Sacrifice), and from Masruq, 'Ikrimah, Mujahid, Qatadah and ad-Dahhak. He then gives his verdict: the correct view is the ten of al-Adha, because the authorities among the interpreters agree on it. Ibn Kathir calls this first view correct, and the Muyassar adopts it without comment.",
            "bn": "দ্বিতীয় শপথ, ওয়া লায়ালিন আশর, দশটি রাতের শপথ। কোন দশটি, তা আয়াত বলে না। তাবারী জিলহজের প্রথম দশের মতটি আনেন ইবন আব্বাস থেকে কয়েকটি সনদে, ইবনুয যুবাইর থেকে (মাসের শুরু থেকে কুরবানির দিন পর্যন্ত), আর মাসরুক, ইকরিমা, মুজাহিদ, কাতাদা ও দাহহাক থেকে। তারপর রায় দেন: সঠিক মত হলো কুরবানির দশ, কারণ তাফসীরের নির্ভরযোগ্য আলেমরা এতে একমত। ইবন কাসীরও এই প্রথম মতকেই সঠিক বলেন, আর মুয়াসসার কোনো মন্তব্য ছাড়াই এটা গ্রহণ করে।"
          },
          {
            "en": "Other readings are on record. Al-Baghawi reports through Abu Zabyan from Ibn 'Abbas that the first ten of Ramadan are meant; al-Baghawi also reports from ad-Dahhak, through Abu Rawq, the last ten of Ramadan, which al-Qurtubi attributes to Ibn 'Abbas and ad-Dahhak. At-Tabari has Ibn Zayd naming the first of Dhul-Hijjah and also the opening ten of Muharram, and al-Baghawi gives the Muharram view to Yaman ibn Rabab, with 'Ashura as its tenth. As-Sa'di holds that the ten are either those of Ramadan or those of Dhul-Hijjah.",
            "bn": "আরও কয়েকটি মত বর্ণিত আছে। বাগাভী আবু যাবইয়ানের সূত্রে ইবন আব্বাস থেকে বর্ণনা করেন, এখানে রমজানের প্রথম দশটি রাত বোঝানো হয়েছে। বাগাভী আবু রাওকের সূত্রে দাহহাক থেকে রমজানের শেষ দশের কথাও আনেন, আর কুরতুবী এই মত ইবন আব্বাস ও দাহহাকের নামে দেন। তাবারীর বর্ণনায় ইবন যায়দ জিলহজের প্রথম দশের কথা বলেন, আবার মুহাররমের শুরুর দশের কথাও বলেন। বাগাভী মুহাররমের মতটি দেন ইয়ামান ইবন রাবাবের নামে, যার দশম দিন আশুরা। সা'দীর মতে দশ রাত হয় রমজানের, নয়তো জিলহজের।"
          },
          {
            "en": "As-Sa'di gives a reason for each: the ten nights of Ramadan hold Laylat al-Qadr, better than a thousand months, and the days of Dhul-Hijjah hold the standing at 'Arafah and much of the Hajj. Masruq, in at-Tabari and al-Qurtubi, links the ten to the ten nights by which Musa's (AS) appointment was completed in 7:142. Al-Qurtubi also notes the grammar: the ten are left indefinite, without the article, to mark their distinction, because the definite form would not carry the sense of excellence that the indefinite gives.",
            "bn": "প্রতিটি মতের পক্ষে সা'দী একটি করে কারণ দেখান। রমজানের দশটি রাতের ভেতর আছে লাইলাতুল কদর, যা হাজার মাসের চেয়ে উত্তম। আর জিলহজের দিনগুলোতে আছে আরাফায় অবস্থান আর হজের অনেক আমল। তাবারী ও কুরতুবী দুজনের বর্ণনাতেই মাসরুক এই দশকে মিলিয়েছেন সেই দশ রাতের সঙ্গে, যা দিয়ে ৭:১৪২ আয়াতে মূসা (আঃ)-এর নির্ধারিত সময় পূর্ণ করা হয়েছিল। কুরতুবী ব্যাকরণের দিকেও দৃষ্টি দেন। দশ রাতকে আলিফ-লাম ছাড়া অনির্দিষ্ট রাখা হয়েছে তাদের বিশেষ মর্যাদা বোঝাতে। নির্দিষ্ট রূপে বললে অনির্দিষ্ট রূপের ভেতরের সেই শ্রেষ্ঠত্বের ভাব আসত না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Narrations Can Carry",
          "bn": "বর্ণনা কতটা বইতে পারে"
        },
        "p": [
          {
            "en": "Under the ten nights Ibn Kathir cites a narration of Ibn 'Abbas, attributing it to al-Bukhari. The wording here is at-Tirmidhi's (no. 757): the Messenger of Allah ﷺ said, \"There are no days in which righteous deeds are more beloved to Allah than these ten days.\" They said, \"O Messenger of Allah, not even jihad in the way of Allah?\" He said, \"Not even jihad in the way of Allah, except a man who goes out with his self and his wealth and does not return with any of it.\" At-Tirmidhi grades it hasan sahih gharib.",
            "bn": "দশটি রাতের আলোচনায় ইবন কাসীর ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা আনেন এবং সেটিকে বুখারীর বলে উল্লেখ করেন। এখানে শব্দগুলো তিরমিযীর (নং ৭৫৭)। রাসূলুল্লাহ ﷺ বলেছেন, \"এমন কোনো দিন নেই, যেদিনের নেক আমল আল্লাহর কাছে এই দশ দিনের আমলের চেয়ে বেশি প্রিয়।\" সাহাবিরা বললেন, \"হে আল্লাহর রাসূল, আল্লাহর পথে জিহাদও নয়?\" তিনি বললেন, \"আল্লাহর পথে জিহাদও নয়, তবে সেই ব্যক্তি ছাড়া, যে নিজের জান ও মাল নিয়ে বের হলো, আর তার কিছুই নিয়ে ফিরে এলো না।\" তিরমিযী একে হাসান সহীহ গরীব বলেছেন।"
          },
          {
            "en": "Two cautions belong beside it. The narration speaks of \"these ten days\" and never mentions this verse; it is a general narration on the merit of the days, and it is Ibn Kathir who reads it as Dhul-Hijjah's ten and sets it beside the oath. He also relays, from Ahmad and an-Nasa'i, a report through Jabir (RA), raised to the Prophet ﷺ, that matches the ten, the even and the odd to particular days. He finds its narrators acceptable but its being raised to the Prophet ﷺ objectionable. It is mentioned here, not used.",
            "bn": "এর পাশে দুটি সতর্কতা রাখা দরকার। বর্ণনাটি \"এই দশ দিন\"-এর কথা বলে, এই আয়াতের নাম নেয় না। এটি দিনগুলোর ফজিলত নিয়ে একটি সাধারণ বর্ণনা। একে জিলহজের দশটি দিন হিসেবে পড়ে শপথের পাশে বসিয়েছেন ইবন কাসীর নিজে। ইবন কাসীর আহমাদ ও নাসাঈ থেকে জাবির (রাঃ)-এর সূত্রে নবী ﷺ পর্যন্ত পৌঁছানো আরেকটি বর্ণনাও আনেন। তাতে দশ, জোড় ও বেজোড়কে নির্দিষ্ট কয়েকটি দিনের সঙ্গে মেলানো হয়েছে। তিনি বলেন, এর বর্ণনাকারীরা চলনসই, তবে তাঁর বিবেচনায় একে নবী ﷺ-এর কথা বলে চালানোয় আপত্তি আছে। তাই এখানে শুধু উল্লেখ রইল, ব্যবহার নয়।"
          },
          {
            "en": "The same holds for a report through 'Imran ibn Husayn (RA), raised to the Prophet ﷺ, on the even and the odd, which Ibn Kathir relays from Ahmad and at-Tirmidhi; he judges it more likely to be 'Imran's own words. So no narration confirmed in a collection explains these oaths. What explains them is the record of the Companions and their students, set out below with their names attached.",
            "bn": "একই কথা খাটে ইমরান ইবন হুসাইন (রাঃ)-এর সূত্রে নবী ﷺ পর্যন্ত পৌঁছানো আরেকটি বর্ণনার বেলায়, যার বিষয় জোড় ও বেজোড়। ইবন কাসীর এটি আহমাদ ও তিরমিযী থেকে আনেন। ইবন কাসীরের বিচারে এটি ইমরানের নিজের কথা হওয়াই বেশি সম্ভব। তাই এখানে শুধু উল্লেখ, কোনো ব্যবহার নয়। সোজা কথায়, হাদিসগ্রন্থে মিলিয়ে দেখা কোনো বর্ণনা এই শপথগুলোর একটিরও ব্যাখ্যা দেয় না। ব্যাখ্যা দেয় সাহাবি ও তাঁদের শিষ্যদের রেখে যাওয়া মতামত, যা পরের অংশগুলোতে নামসহ সাজানো আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Pair and Every Single",
          "bn": "প্রতিটি জোড়, প্রতিটি একক"
        },
        "p": [
          {
            "en": "Wash-shaf'i wal-watr: and by the even and the odd; al-Qurtubi defines shaf' as two and watr as single. At-Tabari reports from Ibn 'Abbas, through several chains, and from 'Ikrimah that the odd is the Day of 'Arafah and the even the Day of Sacrifice; al-Qurtubi explains that these are the ninth and the tenth. 'Ata', in a report Ibn Kathir relays, made the even the Day of 'Arafah and the odd the night of al-Adha. Ibn az-Zubayr read the pair through 2:203: leaving after two days is the even, staying on is the odd.",
            "bn": "ওয়াশ শাফয়ি ওয়াল ওয়াতর: জোড় ও বেজোড়ের শপথ। কুরতুবী বলেন, শাফ মানে দুই, আর ওয়াতর মানে একক। তাবারী কয়েকটি সনদে ইবন আব্বাস থেকে এবং ইকরিমা থেকে বর্ণনা করেন: বেজোড় আরাফার দিন, জোড় কুরবানির দিন। কারণটা দেন কুরতুবী। দশের মধ্যে আরাফা নবম দিন, আর কুরবানির দিন দশম। ইবন কাসীর আতার যে বর্ণনা আনেন, তাতে উল্টো কথা: জোড় আরাফার দিন, বেজোড় কুরবানির রাত। ইবনুয যুবাইর জোড়-বেজোড়কে পড়েছেন ২:২০৩ আয়াতের আলোয়। দুই দিনে তাড়াতাড়ি ফিরে যাওয়া জোড়, আর থেকে যাওয়া বেজোড়।"
          },
          {
            "en": "Others widened the oath to all creation. Mujahid, in Ibn Kathir's report, said everything Allah created is a pair: sky and earth, land and sea, jinn and humans, sun and moon. Ibn Kathir ties this to 51:49, so that people learn the Creator of the pairs is One; in another report from Mujahid, Allah is the odd and His creation the even. Al-Hasan said it is number itself, part even and part odd. Abu al-'Aliyah and ar-Rabi' ibn Anas said it is the prayer: some prayers even, Maghrib odd.",
            "bn": "কেউ কেউ শপথটিকে গোটা সৃষ্টিজগৎ পর্যন্ত ছড়িয়ে দিয়েছেন। ইবন কাসীরের বর্ণনায় মুজাহিদ বলেছেন, আল্লাহর সৃষ্টি সবকিছুই জোড়া জোড়া: আসমান ও জমিন, স্থল ও সাগর, জিন ও মানুষ, সূর্য ও চাঁদ। ইবন কাসীর একে মেলান ৫১:৪৯ আয়াতের সঙ্গে, যাতে মানুষ বোঝে, জোড়াগুলোর স্রষ্টা একজনই। মুজাহিদের আরেক বর্ণনায় আল্লাহ বেজোড়, আর তাঁর সৃষ্টি জোড়। হাসান বসরীর মতে এর অর্থ সংখ্যা নিজেই, যার কিছু জোড়, কিছু বেজোড়। আবুল আলিয়া ও রাবী ইবন আনাস বলেছেন, এর অর্থ নামাজ। কিছু নামাজ জোড়, আর মাগরিব বেজোড়।"
          },
          {
            "en": "At-Tabari closes the question with a ruling of method. Allah swore by the even and the odd and did not single out one kind of either, by any report or by reason, so every even and every odd falls within His oath. Near this verse both Ibn Kathir and al-Qurtubi cite a general narration that does not mention it. Al-Bukhari's wording (no. 6410), from Abu Hurayrah (RA): \"Allah has ninety-nine names, one hundred less one; no one preserves them but he enters Paradise; and He is witr and loves the witr.\"",
            "bn": "তাবারী প্রশ্নটির ইতি টানেন একটি পদ্ধতিগত রায় দিয়ে। আল্লাহ জোড় ও বেজোড়ের শপথ করেছেন, কিন্তু কোনো বর্ণনা বা যুক্তি দিয়ে এর কোনো একটি প্রকারকে আলাদা করেননি। তাই প্রতিটি জোড় আর প্রতিটি বেজোড়ই তাঁর শপথের ভেতরে পড়ে। এই আয়াতের কাছাকাছি ইবন কাসীর ও কুরতুবী দুজনেই একটি সাধারণ বর্ণনা আনেন, যা এই আয়াতের নাম নেয় না। আবু হুরায়রা (রাঃ) থেকে বুখারীর শব্দ (নং ৬৪১০): \"আল্লাহর নিরানব্বইটি নাম আছে, এক কম একশ। যে-ই এগুলো সংরক্ষণ করবে, সে জান্নাতে যাবে। আর তিনি বেজোড়, বেজোড়কে ভালোবাসেন।\""
          }
        ]
      },
      {
        "h": {
          "en": "The Night on Its Journey",
          "bn": "পথ চলা রাত"
        },
        "p": [
          {
            "en": "Wal-layli idha yasr: and by the night when it travels. At-Tabari explains the verb from sara, to journey by night: the night when it moves on and goes. He reports this from Ibn 'Abbas (when it goes), from Ibn az-Zubayr (until one part of it takes away another), and from Mujahid, Abu al-'Aliyah, Qatadah and Ibn Zayd (when it moves along). Al-Qurtubi, though, reports from Qatadah and Abu al-'Aliyah that it means the night when it comes and approaches, and al-Baghawi has the same from Qatadah. The direction of the journey is itself in dispute.",
            "bn": "ওয়াল লাইলি ইযা ইয়াসর: আর রাতের শপথ, যখন তা চলতে থাকে। তাবারী ক্রিয়াটি ব্যাখ্যা করেন সারা ধাতু থেকে, যার অর্থ রাতে পথ চলা। অর্থাৎ রাত যখন এগিয়ে চলে বিদায় নেয়। এ মত তিনি আনেন ইবন আব্বাস থেকে (যখন চলে যায়), ইবনুয যুবাইর থেকে (যখন তার এক অংশ আরেক অংশকে সরিয়ে নিয়ে যায়), আর মুজাহিদ, আবুল আলিয়া, কাতাদা ও ইবন যায়দ থেকে (যখন চলতে থাকে)। কিন্তু কুরতুবী কাতাদা ও আবুল আলিয়া থেকে বর্ণনা করেন, অর্থ হলো রাত যখন আসে, এগিয়ে আসে। বাগাভীও কাতাদা থেকে একই কথা আনেন। রাতের এই যাত্রা কোন দিকে, সেটাই তাই মতভেদের বিষয়।"
          },
          {
            "en": "Ibn Kathir weighs the two. The verb can mean that the night goes, as Ibn 'Abbas said; it can also mean that it comes on, and that may suit the passage better, because the dawn is the day arriving and the night leaving, so this would be an oath by the night arriving and the day leaving, as in 81:17 and 81:18. 'Ikrimah, in at-Tabari and Ibn Kathir, took it as the night of Jam', the night at Muzdalifah. Al-Qurtubi holds that night in general is meant and calls that the most apparent reading.",
            "bn": "ইবন কাসীর দুই অর্থ পাশাপাশি রেখে বিচার করেন। ক্রিয়াটির অর্থ হতে পারে রাত চলে যাওয়া, যেমন ইবন আব্বাস বলেছেন। আবার হতে পারে রাত এগিয়ে আসা, আর এটা হয়তো প্রসঙ্গের সঙ্গে বেশি মানায়। কারণ ফজর মানে দিনের আগমন আর রাতের প্রস্থান। তাহলে এটি হবে রাতের আগমন আর দিনের প্রস্থানের শপথ, যেমন ৮১:১৭ ও ৮১:১৮ আয়াতে। তাবারী ও ইবন কাসীরের বর্ণনায় ইকরিমা একে ধরেছেন জাম'-এর রাত, অর্থাৎ মুযদালিফার রাত। কুরতুবীর মতে এখানে সাধারণভাবে যেকোনো রাত বোঝানো হয়েছে, আর এটাকেই তিনি সবচেয়ে স্পষ্ট অর্থ বলেন।"
          },
          {
            "en": "As-Sa'di reads the verse as a mercy. It is the time when the night flows and lets its darkness down over Allah's servants, so that they become still, rest and settle, a mercy from Him and a wisdom. At-Tabari prefers to recite the word without its final ya, as it is written, to keep the verse endings matched on ra.",
            "bn": "সা'দী আয়াতটিকে পড়েন রহমত হিসেবে। এ সেই সময়, যখন রাত বয়ে চলে আর বান্দাদের উপর আঁধারের পর্দা নামিয়ে দেয়। তারা তখন স্থির হয়, বিশ্রাম নেয়, শান্তি পায়। এ তাঁর পক্ষ থেকে রহমত, আর তাঁর হিকমত। তাবারী শব্দটি শেষের ইয়া ছাড়া পড়াই বেশি পছন্দ করেন, যেমনটা লেখা আছে, যাতে আয়াতগুলোর শেষ রা অক্ষরে মিলে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Enough for One Who Holds Back",
          "bn": "সংযমী বুদ্ধির জন্য যথেষ্ট"
        },
        "p": [
          {
            "en": "Hal fi dhalika qasamun li-dhi hijr: is there in that an oath for a person of hijr? Ibn Kathir, al-Baghawi and al-Qurtubi explain hijr as intellect, from a root meaning to prevent, because it holds a person back from what does not befit him. At-Tabari reads the question as saying these oaths suffice for whoever understands his Lord, and as-Sa'di answers it: yes, part of it is enough for anyone with a heart. Ibn Kathir adds that the oaths are by times of worship and by worship itself.",
            "bn": "হাল ফী যালিকা কাসামুল লিযী হিজর: এতে কি হিজরওয়ালার জন্য শপথ নেই? ইবন কাসীর, বাগাভী ও কুরতুবী বলেন, হিজর মানে বুদ্ধি। শব্দের মূল অর্থ বাধা দেওয়া, কারণ বুদ্ধি মানুষকে বেমানান কাজ থেকে আটকে রাখে। তাবারীর মতে প্রশ্নটি আসলে জানিয়ে দেয়, যে নিজের রবকে বোঝে, তার জন্য এই শপথগুলোই যথেষ্ট। সা'দী প্রশ্নের জবাবও দেন: হ্যাঁ, যার অন্তর আছে, তার জন্য এর কিছু অংশই যথেষ্ট। ইবন কাসীর যোগ করেন, এই শপথগুলো ইবাদতের সময়ের, আর খোদ ইবাদতের।"
          },
          {
            "en": "What the oaths swear to is itself disputed. Al-Qurtubi says the answer is left unstated, in the sense of \"He will surely punish\", indicated by 89:6 to 89:13, and he relays Ibn al-Anbari's view that it is 89:14, that your Lord is ever watchful; al-Baghawi names 89:14 outright. As-Sa'di holds that what is sworn by is itself the matter sworn to. The verses that follow recall 'Ad, Thamud and Pharaoh; they describe what the text describes, and license nothing against any living person or community.",
            "bn": "শপথগুলো কোন কথার উপর, তা নিয়েও মতভেদ আছে। কুরতুবী বলেন, জবাবটি উহ্য রাখা হয়েছে। তার ভাব হলো, \"তিনি অবশ্যই শাস্তি দেবেন\", আর এর ইঙ্গিত দেয় ৮৯:৬ থেকে ৮৯:১৩ আয়াত। পাশাপাশি তিনি ইবনুল আনবারীর মত জানান যে জবাব হলো ৮৯:১৪, তোমার রব অবশ্যই সতর্ক দৃষ্টি রাখেন। বাগাভী সরাসরি ৮৯:১৪-কেই জবাব বলেন। সা'দীর মতে যার শপথ করা হয়েছে, সেটাই শপথের বিষয়। পরের আয়াতগুলো আদ, সামূদ ও ফিরআউনের কথা স্মরণ করায়। আয়াতগুলো কেবল ততটুকুই বর্ণনা করে, যতটুকু পাঠে আছে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এগুলো দেয় না।"
          }
        ]
      }
    ]
  },
  "89:6-7": {
    "sections": [
      {
        "h": {
          "en": "Seeing With the Heart's Eye",
          "bn": "অন্তরের চোখে দেখা"
        },
        "p": [
          {
            "en": "Alam tara kayfa fa'ala rabbuka bi-'Ad, Irama dhati al-'imad: have you not seen how your Lord dealt with 'Ad, Iram of the pillars? The two verses hold nine Arabic words, six and then three. They come straight after the oaths and the question of 89:5. Ibn Kathir explains the turn: having mentioned people of worship and obedience, Allah now mentions 'Ad, who were rebellious, insolent and tyrannical, outside His obedience, deniers of His messengers and rejecters of His books.",
            "bn": "আলাম তারা কাইফা ফা‘আলা রাব্বুকা বি‘আদ, ইরামা যাতিল ‘ইমাদ: তুমি কি দেখোনি, তোমার রব ‘আদের সঙ্গে কী করেছিলেন, স্তম্ভওয়ালা ইরামের সঙ্গে? দুই আয়াতে মোট নয়টি আরবি শব্দ, প্রথমটিতে ছয়টি, পরেরটিতে তিনটি। শপথগুলো আর ৮৯:৫ আয়াতের প্রশ্নের ঠিক পরেই এদের স্থান। এই মোড় ঘোরার কারণ ইবন কাসীর ব্যাখ্যা করেন। ইবাদত আর আনুগত্যের মানুষদের কথা বলার পর আল্লাহ এবার ‘আদের কথা আনেন। তারা ছিল বিদ্রোহী, উদ্ধত আর জালিম। তারা চলত তাঁর আনুগত্যের বাইরে, তাঁর রাসূলদের মিথ্যাবাদী বলত, তাঁর কিতাবগুলো অস্বীকার করত।"
          },
          {
            "en": "Who is asked to see, and with what? At-Tabari reads it as said to the Prophet ﷺ: have you not looked, Muhammad, with the eye of your heart? As-Sa'di says the same, with your heart and your insight. Al-Qurtubi calls it seeing of the heart, addressed to the Prophet ﷺ with a general intent, and notes that the story of 'Ad was well known to the first hearers, since 'Ad had lived in the lands of the Arabs. Al-Baghawi gives al-Farra': have you not been told? and az-Zajjaj: have you not known? The sense, he says, is wonder.",
            "bn": "কাকে দেখতে বলা হচ্ছে, আর কী দিয়ে? তাবারীর পাঠে কথাটা নবী ﷺ-কে বলা: হে মুহাম্মাদ, তুমি কি অন্তরের চোখে তাকিয়ে দেখোনি? সাদীও একই কথা বলেন, অন্তর আর অন্তর্দৃষ্টি দিয়ে দেখা। কুরতুবী একে অন্তরের দেখা বলেন। সম্বোধন নবী ﷺ-কে, কিন্তু উদ্দেশ্য সবাই। তিনি আরও বলেন, ‘আদের ঘটনা প্রথম শ্রোতাদের কাছে সুপরিচিত ছিল, কারণ ‘আদ আরবদের দেশেই বাস করত। বাগাভী ফাররার মত আনেন: তোমাকে কি জানানো হয়নি? আর যাজ্জাজের মত: তুমি কি জানো না? তাঁর মতে এখানে ভাবটা বিস্ময়ের।"
          }
        ]
      },
      {
        "h": {
          "en": "The Earlier of Two 'Ads",
          "bn": "দুই ‘আদের আগের দল"
        },
        "p": [
          {
            "en": "Ibn Kathir identifies them as the first 'Ad, descendants of 'Ad son of Iram son of 'Aws son of Sam son of Nuh, as Ibn Ishaq said. They are the people to whom Allah sent His messenger Hud (AS). They denied and opposed him, so Allah saved him and those who believed with him, and destroyed the rest with a furious wind. Ibn Kathir quotes 69:7 and 69:8 for it, and adds that Allah told their story in several places so that believers would take a lesson from their fall.",
            "bn": "ইবন কাসীর বলেন, এরা প্রথম ‘আদ। ইবন ইসহাকের বর্ণনায় এদের বংশ: ‘আদ, ইরামের পুত্র, ইরাম আওসের পুত্র, আওস সামের পুত্র, সাম নূহের পুত্র। এরাই সেই জাতি, যাদের কাছে আল্লাহ তাঁর রাসূল হূদ (আঃ)-কে পাঠিয়েছিলেন। তারা তাঁকে মিথ্যাবাদী বলল, তাঁর বিরোধিতা করল। আল্লাহ তাঁকে আর তাঁর সঙ্গে ঈমান আনা লোকদের বাঁচালেন, বাকিদের ধ্বংস করলেন প্রচণ্ড ঝড়ো বাতাসে। এর প্রমাণে ইবন কাসীর ৬৯:৭ আর ৬৯:৮ আয়াত উদ্ধৃত করেন। তিনি আরও বলেন, কুরআনে আল্লাহ একাধিক জায়গায় তাদের কাহিনি বলেছেন, যাতে মুমিনেরা তাদের পতন থেকে শিক্ষা নেয়।"
          },
          {
            "en": "Why add Iram at all? Ma'arif al-Qur'an says Iram marks out which of two 'Ads is meant: the earlier, called 'Ad al-Ula, the first 'Ad, in 53:50. Al-Qurtubi gives the same picture as one view: there were two 'Ads, the first of them Iram, named after their ancestor, and those after them called the later 'Ad. On this account, the name ties the people to a known line.",
            "bn": "ইরাম নামটা যোগ হলো কেন? মাআরিফুল কুরআন বলে, দুই ‘আদের মধ্যে কোনটির কথা হচ্ছে, ইরাম তা আলাদা করে দেয়। এরা আগের দল, ৫৩:৫০ আয়াতে যাদের বলা হয়েছে ‘আদ আল-উলা, প্রথম ‘আদ। কুরতুবীও একটি মত হিসেবে একই ছবি দেন। ‘আদ ছিল দুটি, প্রথমটি ইরাম, তাদের পূর্বপুরুষের নামে ডাকা। পরে যারা এল, তাদের বলা হলো পরবর্তী ‘আদ। এ ব্যাখ্যায় ইরাম নামটি জাতিটিকে এক চেনা বংশধারার সঙ্গে বেঁধে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ancestor, Tribe, or Town",
          "bn": "পূর্বপুরুষ, গোত্র, নাকি শহর"
        },
        "p": [
          {
            "en": "What was Iram? Some made it a person. Ibn Ishaq, in Ibn Kathir and at-Tabari, gives the line 'Ad son of Iram, which makes Iram 'Ad's father. Al-Qurtubi reports the same from Ibn Abbas through 'Ata', and also reports from Ibn Ishaq that Iram was Sam son of Nuh. Al-Baghawi has Ibn Ishaq calling Iram 'Ad's grandfather. Al-Kalbi, in al-Baghawi, makes Iram the man in whom the lines of 'Ad and Thamud meet: people used to say 'Ad Iram and Thamud Iram. The order differs by source.",
            "bn": "ইরাম কী ছিল? কেউ একে মানুষের নাম ধরেছেন। ইবন কাসীর ও তাবারীতে ইবন ইসহাকের দেওয়া বংশধারা: ‘আদ ইবন ইরাম, অর্থাৎ ইরাম ‘আদের পিতা। কুরতুবী আতার সূত্রে ইবন আব্বাস থেকেও একই কথা আনেন, আবার ইবন ইসহাক থেকে এ-ও আনেন যে ইরাম হলেন নূহের পুত্র সাম। বাগাভীর বর্ণনায় ইবন ইসহাক ইরামকে ‘আদের দাদা বলেছেন। বাগাভীতে কালবীর মত, ইরামের কাছে এসে ‘আদ আর সামূদের বংশধারা মিলেছে। লোকে বলত, ‘আদ ইরাম, সামূদ ইরাম। বংশতালিকার ক্রম একেক সূত্রে একেক রকম।"
          },
          {
            "en": "Others made it a people. Qatadah, in at-Tabari: we used to be told that Iram was a tribe of 'Ad, the royal house of 'Ad. Ibn Kathir quotes Qatadah and as-Suddi for the royal house and calls it a good, strong view. At-Tabari judges a tribe of 'Ad the likeliest meaning, as Qatadah said, and Allah knows best. Al-Muyassar reads the tribe of Iram, and as-Sa'di the well-known tribe in Yemen. Mujahid called Iram a nation, and in another report, the ancient one; al-Qurtubi adds a third report from him, the strong.",
            "bn": "অন্যরা একে একটি জাতি ধরেছেন। তাবারীতে কাতাদার কথা: আমাদের বলা হতো, ইরাম ‘আদের একটি গোত্র, ‘আদের রাজবংশ। ইবন কাসীর রাজবংশের কথাটা কাতাদা ও সুদ্দী থেকে এনে একে ভালো ও মজবুত মত বলেন। তাবারীর বিচারে সবচেয়ে সম্ভাব্য অর্থ ‘আদের একটি গোত্র, যেমন কাতাদা বলেছেন, আর আল্লাহই ভালো জানেন। মুয়াসসার পড়ে ইরাম গোত্র, সাদী বলেন ইয়েমেনের সুপরিচিত গোত্র। মুজাহিদ ইরামকে বলেছেন একটি উম্মত, আরেক বর্ণনায় প্রাচীন জাতি। কুরতুবী তাঁর থেকে তৃতীয় একটি বর্ণনা আনেন: শক্তিশালী।"
          },
          {
            "en": "A third group made Iram a city. Al-Maqburi, in at-Tabari, said Damascus, as did Sa'id ibn al-Musayyib and 'Ikrimah in al-Baghawi; al-Qurtubi adds Khalid ar-Rab'i and a report through Ibn Wahb and Ashhab from Malik. Ibn al-'Arabi, quoted by al-Qurtubi, chose Damascus. Muhammad ibn Ka'b al-Qurazi said Alexandria, in all three. A last view reads Iram as a word, not a name: Ibn Abbas and ad-Dahhak, in reports at-Tabari carries, take it as the destroyed, as one says arama banu fulan, such a clan perished.",
            "bn": "তৃতীয় একদল ইরামকে শহর বলেছেন। তাবারীতে মাকবুরীর মত, দামেস্ক। বাগাভীতে সাঈদ ইবনুল মুসাইয়িব ও ইকরিমারও একই মত। কুরতুবী এর সঙ্গে যোগ করেন খালিদ আর-রাব‘ঈ আর ইবন ওয়াহব ও আশহাবের সূত্রে মালিক থেকে একটি বর্ণনা। কুরতুবীর উদ্ধৃতিতে ইবনুল আরাবীও দামেস্ককেই বেছে নেন। মুহাম্মাদ ইবন কা‘ব কুরাযী বলেছেন আলেকজান্দ্রিয়া, তিনটি তাফসীরেই তা আছে। শেষ একটি মতে ইরাম কোনো নাম নয়, একটি শব্দ। তাবারীর আনা বর্ণনায় ইবন আব্বাস ও দাহহাক এর অর্থ করেন ধ্বংসপ্রাপ্ত। যেমন বলা হয়, আরামা বানু ফুলান, অমুক গোত্র ধ্বংস হয়ে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Left Without Tanwin",
          "bn": "তানবীন ছাড়া একটি নাম"
        },
        "p": [
          {
            "en": "Grammar carries part of the argument. Al-Qurtubi gives the reading of the generality as bi-'Adin, with tanwin on 'Ad, followed by Irama, left undeclined. On that reading Iram is the tribe's name and 'Ad their father's, and Iram stands as badal or 'atf bayan for 'Ad. Al-Hasan and Abu al-'Aliyah read bi-'Adi Irama, in construct; then Iram is their mother's name or their town's, meaning 'Ad, the people of Iram. Ibn Kathir calls Iram 'atf bayan, a further identification, and Ma'arif al-Qur'an allows either 'atf bayan or badal.",
            "bn": "যুক্তির একটা অংশ বহন করে ব্যাকরণ। কুরতুবী বলেন, অধিকাংশের পাঠ বি‘আদিন, ‘আদ শব্দে তানবীনসহ, তারপর ইরামা, যা পূর্ণ বিভক্তি নেয় না। এ পাঠে ইরাম গোত্রের নাম, ‘আদ তাদের পিতার নাম, আর ইরাম ‘আদের বদল কিংবা আতফে বায়ান। হাসান ও আবুল আলিয়া পড়েছেন বি‘আদি ইরামা, সম্বন্ধপদ করে। তখন ইরাম তাদের মায়ের নাম, কিংবা তাদের শহরের নাম। অর্থ দাঁড়ায়, ইরামবাসী ‘আদ। ইবন কাসীর ইরামকে বলেন আতফে বায়ান, পরিচয়টা আরও স্পষ্ট করার জন্য। মাআরিফুল কুরআন আতফে বায়ান বা বদল, দুটিই সম্ভব বলে।"
          },
          {
            "en": "At-Tabari uses the missing tanwin to decide. Had Iram meant the ancient, as reported from Mujahid, it would carry tanwin, so he calls that view meaningless. Had Iram been a town or 'Ad's ancestor, he says, the reading would put 'Ad in construct with it, as Arabs say 'Amr of Zubayd or A'sha of Hamdan. The readers, in his account, agreed on neither construct nor tanwin, and that points to a tribe. Al-Qurtubi, though, records al-Hasan and Abu al-'Aliyah reading the construct. Two accounts of the readings stand here side by side.",
            "bn": "তাবারী তানবীন না থাকাকেই মীমাংসার ভিত্তি করেন। মুজাহিদ থেকে বর্ণিত অর্থ, প্রাচীন, যদি উদ্দেশ্য হতো, তবে শব্দটিতে তানবীন থাকত। তাই এ মতকে তিনি অর্থহীন বলেন। তাঁর মতে ইরাম যদি শহর বা ‘আদের পূর্বপুরুষ হতো, তবে পাঠে ‘আদকে তার সঙ্গে সম্বন্ধপদ করা হতো, যেমন আরবরা বলে যুবাইদের আমর বা হামদানের আ‘শা। তাঁর বর্ণনায় কারীগণ সম্বন্ধপদ না করা আর তানবীন না দেওয়ায় একমত, আর এটাই গোত্রের দিকে ইঙ্গিত করে। অথচ কুরতুবী হাসান ও আবুল আলিয়ার সম্বন্ধপদের পাঠ উল্লেখ করেছেন। পাঠ নিয়ে দুজনের দুই বিবরণ এখানে পাশাপাশি রইল।"
          },
          {
            "en": "Al-Qurtubi lists further readings: Arama with two fathas, again from al-Hasan; Irm with a still ra; Iram in construct with dhat al-'imad; and Aram with a fatha on the hamza, from Mujahid, ad-Dahhak and Qatadah, Mujahid likening them to the aram, the landmarks. Ibn Kathir, for his part, says the city view does not hold together if Iram is badal or 'atf bayan, since the point is the destruction of the tribe called 'Ad, not news of a city or region.",
            "bn": "কুরতুবী আরও কয়েকটি পাঠের তালিকা দেন। হাসান থেকেই আরামা, দুই যবরসহ। রা-তে সাকিন দিয়ে ইরম। যাতিল ‘ইমাদের সঙ্গে ইরামের সম্বন্ধপদ। আর হামযায় যবর দিয়ে আরাম, মুজাহিদ, দাহহাক ও কাতাদা থেকে। মুজাহিদ এ পাঠে তাদের তুলনা করেছেন আরাম, অর্থাৎ পথচিহ্নের সঙ্গে। ইবন কাসীর অন্যদিকে বলেন, ইরাম যদি বদল বা আতফে বায়ান হয়, তবে শহরের মত খাপ খায় না। কারণ বক্তব্য হলো ‘আদ নামের গোত্রের ধ্বংস, কোনো শহর বা অঞ্চলের খবর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Poles, Stature, or Columns",
          "bn": "খুঁটি, দেহ, নাকি স্তম্ভ"
        },
        "p": [
          {
            "en": "Dhat al-'imad, of the pillars, drew as many readings. Mujahid, in at-Tabari: people of poles who did not stay put. Qatadah: we were told they were people of poles, not settling, always moving. Ibn Kathir says they lived in tents of hair raised on strong poles. Al-Qurtubi gives Qatadah at more length: people of tents and poles who moved their dwellings in search of the rains and the grazing, then returned to their homes.",
            "bn": "যাতিল ‘ইমাদ, স্তম্ভওয়ালা, এ শব্দেও ব্যাখ্যা অনেক। তাবারীতে মুজাহিদ বলেন, তারা ছিল খুঁটির মানুষ, এক জায়গায় থিতু হতো না। কাতাদা বলেন, আমাদের জানানো হয়েছে, তারা খুঁটির মানুষ ছিল, স্থায়ী বসতি গড়ত না, ঘুরে বেড়াত। ইবন কাসীর বলেন, তারা থাকত পশমের তাঁবুতে, যা মজবুত খুঁটির উপর দাঁড় করানো হতো। কুরতুবী কাতাদার কথা আরও বিস্তারে দেন। তারা তাঁবু আর খুঁটির মানুষ, বৃষ্টি আর চারণভূমির খোঁজে ঘরবাড়ি নিয়ে সরে যেত, পরে আবার নিজেদের বসতিতে ফিরত।"
          },
          {
            "en": "Others read height. Ibn Abbas, in at-Tabari: their tallness was like pillars. Mujahid, in another report there, says they had bodies up in the sky. Abu 'Ubaydah, in al-Qurtubi, notes that Arabs call a tall man mu'ammad. Ma'arif al-Qur'an takes this reading: they were very tall in stature. Others read buildings. Ibn Zayd, in at-Tabari, says 'Ad, the people of Hud (AS), built it while they were in al-Ahqaf, which he places in Hadramawt. Al-Muyassar speaks of buildings raised on columns. Ad-Dahhak read strength and hardness, and as-Sa'di intense strength, insolence and tyranny.",
            "bn": "অন্যরা অর্থ করেছেন উচ্চতা। তাবারীতে ইবন আব্বাস বলেন, তাদের দৈর্ঘ্য ছিল স্তম্ভের মতো। সেখানেই আরেক বর্ণনায় মুজাহিদ বলেন, তাদের দেহ উঠে গিয়েছিল আকাশের দিকে। কুরতুবীতে আবু উবায়দা জানান, আরবরা লম্বা মানুষকে বলে মু‘আম্মাদ। মাআরিফুল কুরআন এ অর্থই নেয়: তারা ছিল খুব দীর্ঘদেহী। কেউ আবার অর্থ করেছেন দালান। তাবারীতে ইবন যায়দ বলেন, হূদ (আঃ)-এর জাতি ‘আদ তা নির্মাণ করেছিল আহকাফে থাকার সময়। আহকাফকে তিনি হাদরামাওতে বলে উল্লেখ করেন। মুয়াসসার বলে স্তম্ভের উপর দাঁড় করানো উঁচু দালানের কথা। দাহহাক অর্থ করেছেন শক্তি ও কাঠিন্য, আর সাদী প্রচণ্ড শক্তি, ঔদ্ধত্য আর স্বেচ্ছাচার।"
          },
          {
            "en": "At-Tabari chooses the tent-poles. In Arabic speech, he says, 'imad is known as the wood of tents and the posts that bear a building, and no building of theirs on columns is known by a sound report. Ibn Kathir notes that Ibn Jarir chose the first and rejected the height reading, and says he was right. Ma'arif and al-Muyassar read otherwise. Ibn Kathir closes on a point that holds either way: buildings, nomads' tent-poles, weapons or height, 'Ad were a tribe and a nation.",
            "bn": "তাবারী বেছে নেন তাঁবুর খুঁটির অর্থ। তাঁর কথা, আরবদের ভাষায় ‘ইমাদ বলতে বোঝায় তাঁবুর কাঠ আর দালান যে খুঁটির উপর দাঁড়ায়। তাদের কোনো স্তম্ভওয়ালা দালানের কথা কোনো সহীহ খবরে জানা যায় না। ইবন কাসীর জানান, ইবন জারীর প্রথম অর্থটি নিয়েছেন, উচ্চতার অর্থ নাকচ করেছেন, আর তিনি ঠিকই করেছেন। মাআরিফ ও মুয়াসসার অবশ্য ভিন্ন অর্থ নেয়। ইবন কাসীর শেষ করেন এমন এক কথায়, যা সব অর্থেই খাটে। স্তম্ভ মানে দালান হোক, যাযাবরের তাঁবুর খুঁটি হোক, অস্ত্র হোক বা উচ্চতা, ‘আদ ছিল একটি গোত্র, একটি উম্মত।"
          }
        ]
      },
      {
        "h": {
          "en": "Tall Tales, Weighed and Set Aside",
          "bn": "অতিরঞ্জিত কাহিনি: যাচাই করে বাদ"
        },
        "p": [
          {
            "en": "Al-Qurtubi carries reports of their height that climb fast: hundreds of cubits under Ibn Abbas's name through 'Ata', seventy in another report from him, and twelve from Qatadah, which al-Qurtubi introduces with the word claimed. The text gives no chain for any of them. Ibn al-'Arabi, quoted by al-Qurtubi, calls the seventy-cubit report false, because it is in the Sahih that Allah created Adam sixty cubits tall and that creation has kept decreasing since. The report is in Sahih al-Bukhari (3326), a general narration not attached to this verse. The page gives it in English as follows.",
            "bn": "কুরতুবী তাদের উচ্চতা নিয়ে এমন সব বর্ণনা আনেন, যা দ্রুত বাড়তে থাকে। আতার সূত্রে ইবন আব্বাসের নামে কয়েকশো হাত, তাঁর থেকে আরেক বর্ণনায় সত্তর হাত, আর কাতাদা থেকে ১২ হাত, যা কুরতুবী শুরু করেন ‘দাবি করেছেন’ শব্দে। এগুলোর কোনোটির সনদ লেখায় নেই। কুরতুবীর উদ্ধৃতিতে ইবনুল আরাবী সত্তর হাতের বর্ণনাকে বাতিল বলেন। কারণ সহীহতে আছে, আল্লাহ আদমকে ষাট হাত লম্বা করে সৃষ্টি করেছেন, আর তারপর থেকে সৃষ্টি ছোট হয়েই চলেছে। বর্ণনাটি সহীহ বুখারীতে আছে (৩৩২৬)। এটি একটি সাধারণ হাদিস, এ আয়াতের সঙ্গে যুক্ত নয়। পাতাটির ইংরেজি পাঠের বাংলা রূপ নিচে।"
          },
          {
            "en": "Narrated Abu Huraira: The Prophet (ﷺ) said, \"Allah created Adam, making him 60 cubits tall. When He created him, He said to him, \"Go and greet that group of angels, and listen to their reply, for it will be your greeting (salutation) and the greeting (salutations of your offspring.\" So, Adam said (to the angels), As-Salamu Alaikum (i.e. Peace be upon you). The angels said, \"As-salamu Alaika wa Rahmatu-l-lahi\" (i.e. Peace and Allah's Mercy be upon you). Thus the angels added to Adam's salutation the expression, 'Wa Rahmatu-l-lahi,' Any person who will enter Paradise will resemble Adam (in appearance and figure). People have been decreasing in stature since Adam's creation.",
            "bn": "আবু হুরায়রা (রাঃ) থেকে বর্ণিত: নবী ﷺ বলেছেন, “আল্লাহ আদমকে সৃষ্টি করলেন, তাঁর উচ্চতা ছিল ৬০ হাত। সৃষ্টি করে তাঁকে বললেন, যাও, ফেরেশতাদের ওই দলটিকে সালাম দাও, আর শোনো তারা কী জবাব দেয়। সেটাই হবে তোমার অভিবাদন, আর তোমার বংশধরদের অভিবাদন। আদম (ফেরেশতাদের) বললেন, আসসালামু আলাইকুম (অর্থাৎ আপনাদের উপর শান্তি)। ফেরেশতারা বললেন, আসসালামু আলাইকা ওয়া রাহমাতুল্লাহ (অর্থাৎ আপনার উপর শান্তি ও আল্লাহর রহমত)। এভাবে ফেরেশতারা আদমের সালামে ‘ওয়া রাহমাতুল্লাহ’ কথাটি যোগ করলেন। যে-ই জান্নাতে প্রবেশ করবে, সে আকৃতি ও গড়নে আদমের মতো হবে। আদমের সৃষ্টির পর থেকে মানুষের উচ্চতা কমেই চলেছে।”"
          },
          {
            "en": "Ma'arif al-Qur'an says the Qur'an left out their measurement as unnecessary, that Israelite traditions tell incredible things about their stature, and that the figure reported from Ibn Abbas and Muqatil also seems drawn from them. Ma'arif reports that some made Iram a paradise built by Shaddad son of 'Ad, and al-Qurtubi carries such accounts with no chain. Ibn Kathir warns against them explicitly, so that nobody is taken in: a city of gold and silver is a fable of the Israelites, and the tale of a Bedouin who came upon it has no sound chain.",
            "bn": "মাআরিফুল কুরআন বলে, তাদের মাপজোখ কুরআন বাদ রেখেছে, কারণ তার প্রয়োজন ছিল না। ইসরাঈলী বর্ণনাগুলো তাদের দৈহিক গড়ন নিয়ে অবিশ্বাস্য সব কথা বলে। ইবন আব্বাস ও মুকাতিল থেকে বর্ণিত মাপটিও সেখান থেকেই নেওয়া বলে মনে হয়। মাআরিফ জানায়, কেউ কেউ ইরামকে বলেছেন ‘আদের পুত্র শাদ্দাদের গড়া এক বেহেশত। কুরতুবী এমন বিবরণ আনেন কোনো সনদ ছাড়াই। কেউ যেন ধোঁকা না খায়, তাই ইবন কাসীর স্পষ্ট করে এসব থেকে সাবধান করেন। সোনা-রুপার শহরের বর্ণনা ইসরাঈলীদের কল্পকাহিনি, আর এক বেদুঈনের সেই শহরে গিয়ে পড়ার গল্পের সনদ সহীহ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Favour Turned Into Boast",
          "bn": "নিয়ামত যখন অহংকার"
        },
        "p": [
          {
            "en": "Ibn Kathir says they were the strongest people of their time in build and the mightiest in force. That, he says, is why Hud (AS) reminded them of the favour and directed them to spend it in obedience to the Lord who created them, and he cites 7:69: remember when He made you successors after the people of Nuh and increased you in stature. He sets beside it 41:15: as for 'Ad, they were arrogant in the land without right and said, who is mightier than us in strength?",
            "bn": "ইবন কাসীর বলেন, নিজেদের যুগে গড়নে তারা ছিল সবচেয়ে মজবুত, শক্তিতে সবচেয়ে প্রবল। এ কারণেই হূদ (আঃ) তাদের এই নিয়ামতের কথা মনে করিয়ে দেন, আর বলেন, যে রব তাদের সৃষ্টি করেছেন, তাঁর আনুগত্যে এ শক্তি খরচ করতে। প্রমাণে তিনি ৭:৬৯ আয়াত আনেন: স্মরণ করো, তিনি তোমাদের নূহের জাতির পর উত্তরসূরি বানিয়েছেন, আর দৈহিক গড়নে তোমাদের বাড়িয়ে দিয়েছেন। তার পাশে রাখেন ৪১:১৫ আয়াত: ‘আদ পৃথিবীতে অন্যায়ভাবে অহংকার করেছিল, বলেছিল, শক্তিতে আমাদের চেয়ে প্রবল কে?"
          },
          {
            "en": "Al-Qurtubi cites the same line of 41:15 for ad-Dahhak's reading of the pillars as strength. Al-Baghawi names the purpose: the verse makes the people of Makkah fear, for it tells how He destroyed those who lived longer and were stronger than they. The module's article on 7:69 reads the favour as an argument Hud (AS) made; these two verses show where the refusal ended. The gift was real, and so was the reminder. What turned it into ruin was the boast that nothing could match them.",
            "bn": "স্তম্ভকে শক্তি অর্থে নেওয়ার পক্ষে দাহহাকের দলিল হিসেবে কুরতুবী ৪১:১৫ আয়াতের এই অংশটিই আনেন। বাগাভী উদ্দেশ্যটা খুলে বলেন। আয়াতটি মক্কাবাসীকে ভয় দেখায়, কারণ এতে আছে, যারা তাদের চেয়ে বেশি দিন বাঁচত আর বেশি শক্তিশালী ছিল, তাদের তিনি কীভাবে ধ্বংস করেছিলেন। এই মডিউলে ৭:৬৯ আয়াতের প্রবন্ধ নিয়ামতকে দেখে হূদ (আঃ)-এর যুক্তি হিসেবে। এ দুই আয়াত দেখায়, প্রত্যাখ্যানের শেষ কোথায় গিয়ে ঠেকল। দানটা সত্যি ছিল, মনে করিয়ে দেওয়াও সত্যি। সর্বনাশ ডেকে আনল এই অহংকার যে, তাদের সমকক্ষ কেউ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "No Heirs Named Today",
          "bn": "আজকের কাউকে উত্তরসূরি বলা চলে না"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verses speak only of what they name: a people of the past named 'Ad, called by the name Iram, and what their Lord did with them. They license nothing against any living person or community. They give nobody standing to name a tribe, a nation or a town of today as Iram or as the heirs of 'Ad or to treat any place as cursed. Where Iram stood is among the questions the commentators answered differently, and this article leaves it with them.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত দুটি শুধু সেটুকুই বলে, যা কুরআনে আছে: অতীতের এক জাতি, যার নাম ‘আদ, যাদের ইরাম নামে ডাকা হয়েছে, আর তাদের রব তাদের সঙ্গে কী করেছিলেন। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো গোত্র, জাতি বা শহরকে ইরাম কিংবা ‘আদের উত্তরসূরি বলে দাগানোর অধিকার কাউকে দেয় না। কোনো জায়গাকে অভিশপ্ত ভাবারও না। ইরাম কোথায় ছিল, তার উত্তর তাফসীরকারেরা ভিন্ন ভিন্ন দিয়েছেন। এ প্রবন্ধ প্রশ্নটা তাঁদের কাছেই রেখে দেয়।"
          },
          {
            "en": "What the verses leave the reader is the question itself: have you not seen? A reader who has the health, the skill or the walls that his own age admires can ask it of himself. Do I treat what I have been given as proof that nothing can reach me? Have I been reminded of a favour and answered with a boast? Those who ask that honestly have seen what the verses asked them to see.",
            "bn": "আয়াত দুটি পাঠকের হাতে রেখে যায় প্রশ্নটাই: তুমি কি দেখোনি? যাঁর আছে স্বাস্থ্য, দক্ষতা কিংবা এমন দেয়াল, যা নিজের যুগের লোকেরা তারিফ করে, তিনি প্রশ্নটা নিজেকেই করতে পারেন। আমাকে যা দেওয়া হয়েছে, তা দেখে কি আমি ভাবি, কিছুই আমাকে ছুঁতে পারবে না? নিয়ামতের কথা মনে করিয়ে দেওয়া হলে আমি কি অহংকার দিয়ে জবাব দিয়েছি? যিনি সৎভাবে এ প্রশ্ন করেন, আয়াত দুটি যা দেখতে বলেছে, তিনি তা দেখেছেন।"
          }
        ]
      }
    ]
  },
  "89:9": {
    "sections": [
      {
        "h": {
          "en": "Two Names After 'Ad",
          "bn": "‘আদের পরে আরও দুই নাম"
        },
        "p": [
          {
            "en": "Wa-thamuda lladhina jabu s-sakhra bil-wad: and Thamud, who cut through the rock in the valley. The verse is five Arabic words, and it leans on the question of 89:6: have you not seen how your Lord dealt with 'Ad? Al-Muyassar repeats the whole question to make it plain: and how did He deal with Thamud, the people of Salih (AS), who cut the rock in the valley and took houses from it?",
            "bn": "ওয়া সামূদাল্লাযীনা জাবুস সাখরা বিলওয়াদ: আর সামূদ, যারা উপত্যকায় পাথর কেটে ভেদ করেছিল। আয়াতটি আরবিতে পাঁচ শব্দের। এটি দাঁড়িয়ে আছে ৮৯:৬ আয়াতের প্রশ্নের উপর: তুমি কি দেখোনি তোমার রব ‘আদের সঙ্গে কী করেছেন? মুয়াসসার পুরো প্রশ্নটাই আবার তোলেন, যাতে কথাটা পরিষ্কার হয়: আর তিনি কী করেছিলেন সালেহ (আঃ)-এর কওম সামূদের সঙ্গে, যারা উপত্যকায় পাথর কেটে তা থেকে ঘর বানিয়েছিল?"
          },
          {
            "en": "The next verse, three words long, completes the line: wa-fir'awna dhi l-awtad, and Pharaoh, owner of the stakes. At-Tabari carries the same question onto it: have you not seen what your Lord also did with Pharaoh, master of the stakes? This article takes both verses. The article on 89:6 and 89:7 has already dealt with 'Ad and Iram, and what follows in 89:11 to 89:14, the transgression, the scourge and the Lord who watches, is left to its own article.",
            "bn": "পরের আয়াতটি তিনটি শব্দের, আর তাতেই তালিকা পূর্ণ হয়: ওয়া ফিরআওনা যিল আওতাদ, আর কীলকওয়ালা ফেরাউন। তাবারী একই প্রশ্ন এ আয়াতেও টেনে আনেন: তুমি কি দেখোনি, তোমার রব কীলকের মালিক ফেরাউনের সঙ্গেও কী করেছেন? এ লেখা দুটি আয়াতই আলোচনা করে। ‘আদ ও ইরামের কথা ৮৯:৬ ও ৮৯:৭ আয়াতের লেখায় আগেই এসেছে। আর ৮৯:১১ থেকে ৮৯:১৪ আয়াতে সীমালঙ্ঘন, শাস্তির চাবুক আর সদা সজাগ রবের যে কথা আছে, তা তার নিজের লেখার জন্য রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verb for Crossing and Cutting",
          "bn": "পাড়ি দেওয়া ও কাটার এক ক্রিয়া"
        },
        "p": [
          {
            "en": "At-Tabari glosses jabu as kharaqu: they pierced the rock, went into it, and took it as houses. He grounds the verb in ordinary Arab speech. Of a man who goes into open desert and crosses it, the Arabs say jaba l-falata, and at-Tabari cites a line of an-Nabigha about a rider cutting through the dark of night, jawwab al-falat, a crosser of the wastes. Yajubu, he explains, means to enter and to cut across. One verb names both a journey through empty land and a passage cut into stone.",
            "bn": "তাবারী জাবু শব্দের ব্যাখ্যা দেন খারাকু দিয়ে: তারা পাথর ফুঁড়ে ভেতরে ঢুকেছিল আর সেটাকেই ঘর বানিয়েছিল। ক্রিয়াটির ভিত্তি তিনি দেখান আরবদের রোজকার ভাষায়। কেউ খোলা মরুভূমিতে ঢুকে তা পার হয়ে গেলে আরবরা বলে, জাবাল ফালাতা। তাবারী নাবিগার একটি পঙক্তি উদ্ধৃত করেন, যেখানে রাতের আঁধার চিরে এক সওয়ার এগিয়ে আসে: জাওয়াবুল ফালাত, বিরান প্রান্তর পাড়ি দেওয়ার অভ্যস্ত। তাঁর ব্যাখ্যায় ইয়াজুবু মানে ঢোকা এবং এপার থেকে ওপারে কেটে যাওয়া। ফলে একই ক্রিয়া বোঝায় জনশূন্য প্রান্তর পার হওয়ার সফর, আবার পাথরের বুকে কেটে তৈরি করা পথও।"
          },
          {
            "en": "Ibn Kathir's gloss is that they cut the rock in the valley, and he gathers relatives of the word. People who cut through leopard skins are called mujtabi n-nimar; one says ijtaba th-thawb of opening a garment; and the jayb, a garment's opening, comes from the same root. Al-Qurtubi agrees that jabu means qata'u, they cut, and that a jayb is so called because it is cut. He adds a poet who thanked Ibn az-Zubayr for sixty wasqs: no she-camel before his had carried sixty wasqs, or jabat, crossed a land with them.",
            "bn": "ইবন কাসীরের ব্যাখ্যা: তারা উপত্যকায় পাথর কাটত। এরপর তিনি শব্দটির আত্মীয়দের এক জায়গায় আনেন। চিতাবাঘের চামড়া কেটে ফুঁড়ে নেওয়া লোকদের বলা হয় মুজতাবিন নিমার। কাপড় খোলা অর্থে বলা হয় ইজতাবাস সাওব। জামার গলার ফাঁক, অর্থাৎ জায়বও এসেছে একই মূল থেকে। কুরতুবীও বলেন, জাবু মানে কাতাউ, তারা কেটেছিল, আর জামার জায়বকে জায়ব বলা হয় কারণ তা কাটা হয়। তিনি এক কবির কথা আনেন, যিনি ইবনুয যুবায়রের দেওয়া ষাট ওয়াসকের জন্য কৃতজ্ঞতা জানিয়েছিলেন। কবি বলেন, এর আগে কোনো উটনী ষাট ওয়াসক বয়ে নেয়নি, তা নিয়ে কোনো দেশ জাবাত, অর্থাৎ পাড়িও দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Dwellings Bored Into Mountains",
          "bn": "পাহাড় ফুঁড়ে বানানো ঘর"
        },
        "p": [
          {
            "en": "At-Tabari gives the early voices with their chains. Ibn Abbas, in one route: they pierced it. In another: Thamud, the people of Salih (AS), used to carve houses out of the mountains. Mujahid: they cut through the mountains and made them houses. Qatadah: they cut through it and carved it into houses, and in Ma'mar's route from him, they bored through the rock. Ad-Dahhak: they split the stones. Ibn Zayd: they struck houses and dwellings into the rock of the mountains until they had homes there.",
            "bn": "তাবারী প্রথম যুগের বক্তব্যগুলো সনদসহ আনেন। ইবন আব্বাস (রাঃ) একটি সূত্রে বলেন: তারা পাথর ফুঁড়েছিল। আরেক সূত্রে: সামূদ ছিল সালেহ (আঃ)-এর কওম, তারা পাহাড় কেটে ঘর বানাত। মুজাহিদ বলেন: তারা পাহাড় কেটে ঘর বানিয়েছিল। কাতাদা বলেন: তারা পাথর কেটে খোদাই করে ঘর বানিয়েছিল। মা‘মারের সূত্রে তাঁর কথা: তারা পাথরে সুড়ঙ্গ করেছিল। দাহহাক বলেন: তারা পাথর চিরেছিল। ইবন যায়দ বলেন: তারা পাহাড়ের পাথরে ঘর আর বসতি কেটে বসিয়েছিল, শেষে সেখানে তাদের আবাস গড়ে উঠেছিল।"
          },
          {
            "en": "Ibn Kathir names the same five, Ibn Abbas, Mujahid, Qatadah, ad-Dahhak and Ibn Zayd, for the sense that they carved and pierced the rock. Three of them then set a companion verse beside this one. At-Tabari and al-Qurtubi quote 15:82, they used to carve houses out of the mountains, feeling secure; Ibn Kathir quotes 26:149, and you carve houses out of the mountains with skill. As-Sa'di and al-Qurtubi both name what made it possible: they carved the rocks by their own strength and took them as dwellings.",
            "bn": "ইবন কাসীর ওই পাঁচজনেরই নাম নেন, ইবন আব্বাস (রাঃ), মুজাহিদ, কাতাদা, দাহহাক ও ইবন যায়দ। তাঁদের সবার কথা একই: তারা পাথর খোদাই করে ফুঁড়েছিল। এরপর তিনজন মুফাসসির এর পাশে আরেকটি আয়াত রাখেন। তাবারী ও কুরতুবী আনেন ১৫:৮২: তারা নিশ্চিন্তে পাহাড় কেটে ঘর বানাত। ইবন কাসীর আনেন ২৬:১৪৯: তোমরা দক্ষতার সঙ্গে পাহাড় কেটে ঘর বানাও। কাজটা কীভাবে সম্ভব হলো, সা'দী ও কুরতুবী দুজনেই তা বলে দেন: তারা নিজেদের শক্তির জোরে পাথর খোদাই করে তাকে বসতঘর বানিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Valley, and Who Named It",
          "bn": "কোন উপত্যকা, কার বরাতে"
        },
        "p": [
          {
            "en": "Bil-wad: in the valley. Which valley? Ibn Kathir and al-Qurtubi both report from Muhammad ibn Ishaq that it was Wadi al-Qura, and Ibn Kathir gives Ibn Ishaq's fuller line: they were Arabs, and their home was in Wadi al-Qura. As-Sa'di and al-Baghawi gloss the word as Wadi al-Qura without naming who said it. So in these texts the identification goes back to Ibn Ishaq by name, and the later commentators carry it forward, some without the name.",
            "bn": "বিলওয়াদ: উপত্যকায়। কোন উপত্যকা? ইবন কাসীর ও কুরতুবী দুজনেই মুহাম্মাদ ইবন ইসহাকের বরাতে বলেন, সেটি ওয়াদিল কুরা। ইবন কাসীর ইবন ইসহাকের পুরো কথাটা আনেন: তারা ছিল আরব, আর তাদের বসতি ছিল ওয়াদিল কুরায়। সা'দী ও বাগাভীও শব্দটির ব্যাখ্যা দেন ওয়াদিল কুরা বলে, তবে কার কথা তা উল্লেখ করেন না। অর্থাৎ এসব গ্রন্থে জায়গাটির পরিচয় নাম ধরে গিয়ে ঠেকে ইবন ইসহাকে। পরের মুফাসসিরেরা সেই কথাই বহন করে এনেছেন, কেউ কেউ তাঁর নাম ছাড়াই।"
          },
          {
            "en": "Al-Qurtubi keeps a second view beside it, introduced with it is said: the valley is the low ground between mountains, in which they bored houses, dwellings and cisterns. He then defines the word itself. Any opening between mountains or hills that serves as a path and outlet for floodwater is a wadi. Under this reading the verse points to the shape of the land they worked, more than to a name on a map.",
            "bn": "কুরতুবী এর পাশে আরেকটি মত রাখেন, 'বলা হয়' কথাটি দিয়ে: উপত্যকা মানে পাহাড়ের মাঝখানের নিচু জমি, যেখানে তারা ঘর, বসতি আর পানির হাউজ কেটে বানিয়েছিল। তারপর তিনি শব্দটির সংজ্ঞা দেন। পাহাড় বা টিলার মাঝের যে ফাঁক দিয়ে বন্যার পানি চলাচলের পথ ও নির্গমন হয়, তাকেই ওয়াদি বলে। এ ব্যাখ্যায় আয়াত কোনো নির্দিষ্ট নামের চেয়ে বেশি দেখায় তাদের কাজের জমির গড়ন।"
          },
          {
            "en": "Al-Baghawi notes a point of recitation in the same word. Ibn Kathir and Ya'qub, in his list of readers, keep the final ya of al-wadi whether the reciter joins or pauses. Warsh keeps it only when joining. The rest drop it in both, in step with the verse endings. The reader Ibn Kathir named here is a different man from the commentator quoted elsewhere in this article. The written form is bil-wad, and in his account every reader but those two pronounces it so at the pause.",
            "bn": "বাগাভী একই শব্দে তিলাওয়াতের একটি বিষয় জানান। তাঁর কারীদের তালিকায় ইবন কাসীর ও ইয়াকূব আলওয়াদি শব্দের শেষের ইয়া মিলিয়ে পড়ার সময়ও রাখেন, থামার সময়ও রাখেন। ওয়ারশ রাখেন কেবল মিলিয়ে পড়ার সময়। বাকিরা দুই অবস্থাতেই তা বাদ দেন, যাতে আয়াতের শেষগুলোর সঙ্গে মিল থাকে। এখানে যে কারী ইবন কাসীরের নাম এসেছে, তিনি এ লেখায় উদ্ধৃত তাফসীরকার ইবন কাসীর নন, ভিন্ন মানুষ। লিখিত রূপ বিলওয়াদ। তাঁর বর্ণনায় ওই দুজন ছাড়া সব কারী থামার সময় এভাবেই পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Troops, Stakes, or Canopies",
          "bn": "সৈন্য, খুঁটি, নাকি চাঁদোয়া"
        },
        "p": [
          {
            "en": "Dhi l-awtad: owner of the awtad. Ma'arif al-Qur'an explains that awtad is the plural of watad, a peg, stake or nail. What the name refers to is a real disagreement, and at-Tabari opens it in those terms: the people of interpretation differed. The first reading makes the stakes his armies. Ibn Abbas, in at-Tabari and in Ibn Kathir, who names the route through al-Awfi, says they were the troops who made his command firm. Al-Qurtubi gives this first, from Ibn Abbas: the troops, camps and armies that strengthened his kingdom.",
            "bn": "যিল আওতাদ: আওতাদের মালিক। মাআরিফুল কুরআন বুঝিয়ে দেয়, আওতাদ হলো ওয়াতাদের বহুবচন, যার মানে গোঁজ, খুঁটি বা পেরেক। নামটি দিয়ে কী বোঝানো হয়েছে, তা নিয়ে সত্যিকারের মতভেদ আছে। তাবারী আলোচনা শুরুই করেন এ কথায়: তাফসীরকারেরা এতে ভিন্নমত পোষণ করেছেন। প্রথম মতে কীলক মানে তার সৈন্যবাহিনী। তাবারী ও ইবন কাসীরে ইবন আব্বাস (রাঃ) বলেন (ইবন কাসীর সূত্রটিকে আওফীর বলে উল্লেখ করেন), এরা সেই সৈন্য, যারা তার হুকুম মজবুত করত। কুরতুবীও ইবন আব্বাস (রাঃ)-এর বরাতে এ মতই প্রথমে আনেন: সৈন্য, ছাউনি আর বাহিনী, যারা তার রাজত্বকে শক্ত করেছিল।"
          },
          {
            "en": "As-Sa'di takes the same reading and explains the image: the troops who fixed his kingdom in place, as stakes fix whatever is meant to be held down. Al-Muyassar agrees: Pharaoh, king of Egypt, owner of the troops who made his rule firm and strengthened his command. The second reading makes the stakes literal, driven into people. Mujahid says he used to stake people down. Sa'id ibn Jubayr, in at-Tabari, describes a man pinned by each hand and foot. Ibn Kathir adds al-Hasan and as-Suddi to this group, and al-Baghawi gives it as the reason for the name.",
            "bn": "সা'দীও এ মত নেন এবং উপমাটা খুলে বলেন: যে সৈন্যরা তার রাজত্বকে জায়গামতো গেঁথে রেখেছিল, ঠিক যেমন খুঁটি গেঁথে রাখে যা আটকে রাখার দরকার। মুয়াসসারও একমত: মিসরের রাজা ফেরাউন, যার সৈন্যরা তার রাজত্ব মজবুত করেছিল আর তার হুকুমকে শক্তি দিয়েছিল। দ্বিতীয় মতে খুঁটিগুলো আক্ষরিক, মানুষের দেহে গাঁথা। মুজাহিদ বলেন, সে মানুষকে খুঁটিতে গেঁথে রাখত। তাবারীতে সাঈদ ইবন জুবায়র এমন এক মানুষের বিবরণ দেন, যার প্রতিটি হাত আর পা খুঁটিতে আটকানো। ইবন কাসীর এ দলে হাসান ও সুদ্দীকেও যোগ করেন। আর বাগাভী নামটির কারণ হিসেবে এ মতই দেন।"
          },
          {
            "en": "The same chain from Ibn Abbas that gives the armies also carries an it is said: Pharaoh drove iron stakes into people's hands and feet and hung them from them. Ma'arif al-Qur'an says the majority of commentators hold the torture reading. A third reading is Qatadah's, which he introduces with it was mentioned to us: canopies and play-grounds of stakes and ropes, under which games were played for him. In Ma'mar's route Qatadah calls it a building. At-Tabari also has, from Sa'id ibn Jubayr through an unnamed man, towers on which he tortured people.",
            "bn": "যে সূত্রে ইবন আব্বাস (রাঃ) থেকে সৈন্যবাহিনীর মত এসেছে, তাতেই 'বলা হয়' দিয়ে আরেকটি কথা আছে: ফেরাউন মানুষের হাতে-পায়ে লোহার খুঁটি গেঁথে তাদের ঝুলিয়ে রাখত। মাআরিফুল কুরআন বলে, অধিকাংশ তাফসীরকার নির্যাতনের মতটিই গ্রহণ করেছেন। তৃতীয় মতটি কাতাদার, যা তিনি শুরু করেন 'আমাদের কাছে উল্লেখ করা হয়েছে' বলে। তাঁর মতে খুঁটি আর রশি দিয়ে বানানো চাঁদোয়া ও খেলার জায়গা, যার নিচে ফেরাউনের জন্য খেলা দেখানো হতো। মা‘মারের সূত্রে কাতাদা একে বলেছেন দালান। তাবারী এক অনামা ব্যক্তির মাধ্যমে সাঈদ ইবন জুবায়র থেকে আরও আনেন: তার কিছু মিনার ছিল, যার উপর সে মানুষকে শাস্তি দিত।"
          }
        ]
      },
      {
        "h": {
          "en": "At-Tabari Weighs the Word",
          "bn": "শব্দটি মাপেন তাবারী"
        },
        "p": [
          {
            "en": "At-Tabari then states his own preference. The nearest to correct, he says, is that the verse means stakes that are driven in, whether of wood or of iron, because that is the known sense of awtad. Pharaoh is described by them for one of two reasons: either he tortured people with them, as Abu Rafi' and Sa'id ibn Jubayr said, or games were played for him with them. He settles the word but does not choose between torture and amusement.",
            "bn": "এরপর তাবারী নিজের পছন্দ জানান। তাঁর মতে সঠিকের সবচেয়ে কাছের কথা হলো, এখানে বোঝানো হয়েছে মাটিতে গাঁথা খুঁটি, কাঠের হোক বা লোহার। কারণ আওতাদ শব্দের পরিচিত অর্থ এটাই। ফেরাউনকে এ বিশেষণ দেওয়ার কারণ দুটির একটি। হয় সে এগুলো দিয়ে মানুষকে শাস্তি দিত, যেমন আবু রাফি' ও সাঈদ ইবন জুবায়র বলেছেন। নয়তো এগুলো দিয়ে তার জন্য খেলা দেখানো হতো। শব্দের অর্থ তিনি স্থির করেন, কিন্তু নির্যাতন আর বিনোদনের মধ্যে কোনোটাকে বেছে নেন না।"
          },
          {
            "en": "So the commentators part ways. As-Sa'di and al-Muyassar hear a figure for power: men who held a kingdom down the way pegs hold a tent. At-Tabari keeps the literal word, and many early voices hear iron in flesh. This article keeps that disagreement as it stands. It does notice that every reading names Pharaoh by what held others in place, whether soldiers or stakes. Thamud are named for the rock they opened, Pharaoh for the things he fastened down.",
            "bn": "এভাবে মুফাসসিরদের পথ আলাদা হয়ে যায়। সা'দী ও মুয়াসসার এখানে ক্ষমতার উপমা শোনেন: এমন লোকজন, যারা রাজত্বকে চেপে ধরে রেখেছিল, যেমন খুঁটি তাঁবু ধরে রাখে। তাবারী শব্দটির আক্ষরিক অর্থ ধরে রাখেন। আর প্রথম যুগের অনেকে শোনেন মানুষের শরীরে গাঁথা লোহার কথা। এ লেখা মতভেদটা যেমন আছে তেমনই রেখে দিল। তবে একটা বিষয় চোখে পড়ে। প্রতিটি মতেই ফেরাউনের পরিচয় এসেছে এমন কিছু দিয়ে, যা অন্যকে আটকে রাখত, তা সৈন্য হোক বা খুঁটি। সামূদের পরিচয় তাদের খোলা পাথরে, ফেরাউনের পরিচয় তার আটকে রাখা জিনিসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Kept at Their Weight",
          "bn": "বর্ণনা, যার যতটুকু ওজন"
        },
        "p": [
          {
            "en": "Several narratives gather around the stakes. Abu Rafi', through Thabit al-Bunani, in at-Tabari and Ibn Kathir: Pharaoh drove four stakes for his wife, then laid a great millstone on her back until she died. As-Suddi, in Ibn Kathir, and Abd ar-Rahman ibn Zayd, in al-Qurtubi, describe a man bound to stakes by each limb and a huge rock let fall on him; Ibn Zayd adds that the rock was raised with pulleys. These come from early figures. None is words of the Prophet ﷺ, and none of the fetched texts grades them.",
            "bn": "খুঁটিগুলোকে ঘিরে কয়েকটি কাহিনি জমেছে। তাবারী ও ইবন কাসীরে সাবিত আল-বুনানীর মাধ্যমে আবু রাফি' বলেন: ফেরাউন তার স্ত্রীর জন্য চারটি খুঁটি পুঁতেছিল, তারপর তাঁর পিঠে বিশাল এক জাঁতা চাপিয়ে দেয়, শেষে তিনি মারা যান। ইবন কাসীরে সুদ্দী আর কুরতুবীতে আবদুর রহমান ইবন যায়দ এক মানুষের বিবরণ দেন, যার প্রতিটি হাত-পা খুঁটিতে বাঁধা, আর তার উপর ফেলে দেওয়া হয় বিরাট পাথর। ইবন যায়দ যোগ করেন, পাথরটা কপিকল দিয়ে উপরে তোলা হতো। এসব প্রথম যুগের ব্যক্তিদের কথা। এর কোনোটিই নবী ﷺ-এর বাণী নয়, আর যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিতে এগুলোর মান নির্ণয় করা হয়নি।"
          },
          {
            "en": "Al-Qurtubi says Pharaoh did this to his wife Asiya and to the woman who combed his daughter's hair, and refers back to his discussion at the end of at-Tahrim. Al-Baghawi relays a long narrative, through his own chain to Ibn Abbas, of that hairdresser and then of Asiya, each stretched between four stakes. Ma'arif al-Qur'an mentions a lengthy story about his wife, citing al-Mazhari. Al-Baghawi gives no grading, and the narrative is not raised to the Prophet ﷺ. This article does not retell its details and builds nothing on them.",
            "bn": "কুরতুবী বলেন, ফেরাউন এ কাজ করেছিল তার স্ত্রী আসিয়ার সঙ্গে, আর তার মেয়ের চুল আঁচড়ে দেওয়া মহিলার সঙ্গে। এ বিষয়ে তিনি সূরা তাহরীমের শেষের আলোচনার দিকে ইশারা করেন। বাগাভী নিজের সনদে ইবন আব্বাস (রাঃ) পর্যন্ত একটি দীর্ঘ কাহিনি আনেন। তাতে প্রথমে সেই কেশবিন্যাসকারিণী, পরে আসিয়া, দুজনকেই চারটি খুঁটির মাঝে টান করে বাঁধা হয়। মাআরিফুল কুরআন মাযহারীর বরাতে তার স্ত্রীকে নিয়ে এক দীর্ঘ কাহিনির কথা বলে। বাগাভী কোনো মান উল্লেখ করেন না, আর কাহিনিটি নবী ﷺ পর্যন্ত পৌঁছানো নয়। এ লেখা এর খুঁটিনাটি আবার বলল না, এর উপর কিছু দাঁড়ও করাল না।"
          },
          {
            "en": "Firmer ground lies in the Qur'an itself. Al-Baghawi closes the narrative with a prayer that the Qur'an gives, at 66:11, to the wife of Pharaoh: my Lord, build for me a house near You in Paradise, and save me from Pharaoh and his deeds, and save me from the wrongdoing people. That verse is the part of the story no one needs a chain for. Whatever the stakes were, a believing woman inside his own house asked to be saved from his deeds.",
            "bn": "কুরআনের ভেতরেই আছে আরও শক্ত জমি। বাগাভী কাহিনিটি শেষ করেন একটি দোয়া দিয়ে, যা কুরআন ৬৬:১১ আয়াতে ফেরাউনের স্ত্রীর মুখে দিয়েছে: হে আমার রব, আপনার কাছে জান্নাতে আমার জন্য একটি ঘর বানিয়ে দিন, আমাকে ফেরাউন ও তার কাজকর্ম থেকে মুক্তি দিন, আর জালিম কওম থেকে আমাকে রক্ষা করুন। কাহিনির এ অংশের জন্য কারও সনদ লাগে না। খুঁটি যা-ই হোক, তার নিজের ঘরের এক ঈমানদার নারী তার কাজকর্ম থেকে মুক্তি চেয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking Past Punished Places",
          "bn": "শাস্তির জায়গা পেরোনোর আদব"
        },
        "p": [
          {
            "en": "No fetched tafsir attaches a sound hadith to either verse. Al-Qurtubi relays a report through Abu al-Ashhab from Abu Nadra about the Prophet ﷺ at the valley of Thamud during the Tabuk campaign. The chain as he gives it stops at Abu Nadra, and he gives it no grading, so it is mentioned here and not quoted. The Prophet's passage through those dwellings on the march to Tabuk is told, from al-Bukhari and Muslim, in the articles on 7:74 and 26:142.",
            "bn": "যেসব তাফসীর আনা হয়েছে, তার কোনোটিই এ দুই আয়াতের সঙ্গে কোনো সহীহ হাদীস জুড়ে দেয়নি। কুরতুবী আবুল আশহাবের মাধ্যমে আবু নাদরা থেকে একটি বর্ণনা আনেন, যা তাবুক অভিযানে সামূদের উপত্যকায় নবী ﷺ-এর উপস্থিতি নিয়ে। তিনি যেভাবে দিয়েছেন, সনদ থেমে গেছে আবু নাদরায়, আর তিনি এর কোনো মান উল্লেখ করেননি। তাই এখানে কেবল উল্লেখ রইল, উদ্ধৃতি নয়। তাবুকের পথে ওই বসতিগুলো পেরোনোর ঘটনা বুখারী ও মুসলিমের বরাতে বলা হয়েছে ৭:৭৪ ও ২৬:১৪২ আয়াতের লেখায়।"
          },
          {
            "en": "One general narration, not attached to this verse, states the rule in a line. Al-Bukhari records in his Sahih, number 433, from Abdullah ibn Umar, that the Messenger of Allah ﷺ said: do not enter upon these people who were punished unless you are weeping; if you are not weeping, do not enter upon them, so that what befell them does not befall you. This wording does not name the place. It sets the manner of passing such ruins: with tears, and not as sightseers.",
            "bn": "একটি সাধারণ বর্ণনা, যা এ আয়াতের সঙ্গে যুক্ত নয়, নিয়মটা এক লাইনে বলে দেয়। বুখারী তাঁর সহীহ গ্রন্থে ৪৩৩ নম্বরে আবদুল্লাহ ইবন উমার (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: শাস্তিপ্রাপ্ত এই লোকদের কাছে কাঁদতে কাঁদতে ছাড়া প্রবেশ কোরো না। যদি কাঁদতে না পারো, তবে তাদের কাছে প্রবেশ কোরো না, যাতে তাদের উপর যা এসেছিল তা তোমাদের উপর না আসে। এ শব্দগুলোতে জায়গার নাম নেই। এতে কেবল ঠিক হয়ে যায় এমন ধ্বংসাবশেষ পেরোনোর আদব: চোখে পানি নিয়ে, দর্শনার্থীর কৌতূহল নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Carved Rock, No Living Heirs",
          "bn": "খোদাই করা পাথর, জীবিত উত্তরসূরি নেই"
        },
        "p": [
          {
            "en": "This needs saying plainly. These two verses describe what the text describes: a people of the past named Thamud, a ruler of the past called Pharaoh, and what their Lord did with them. They license nothing against any living person or community. They give nobody standing to name a state, a nation, a tribe or a town of today as Thamud or as Pharaoh's heirs, or to treat its people as condemned.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। এ দুই আয়াত কেবল সেটুকুই বলে, যা আয়াতে আছে: অতীতের এক জাতি সামূদ, অতীতের এক শাসক ফেরাউন, আর তাদের রব তাদের সঙ্গে যা করেছেন। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। আজকের কোনো রাষ্ট্র, জাতি, গোত্র বা শহরকে সামূদ বা ফেরাউনের উত্তরসূরি বলার, কিংবা সেখানকার মানুষকে অভিশপ্ত গণ্য করার অধিকার এ আয়াত কাউকে দেয় না।"
          },
          {
            "en": "The question that governs both verses is still the one in 89:6: have you not seen? Thamud had the skill to open mountains, and Pharaoh had the means to hold whole peoples in place. In these verses neither is mentioned for a single good use of what it had. What I make with my hands, and the people or rules I use to keep things in place, will they stand after me as a gift, or as stakes?",
            "bn": "দুই আয়াতের উপর যে প্রশ্ন, তা এখনো ৮৯:৬ আয়াতেরটাই: তুমি কি দেখোনি? সামূদের ছিল পাহাড় খুলে ফেলার দক্ষতা, ফেরাউনের ছিল গোটা জনগোষ্ঠীকে চেপে ধরে রাখার উপায়। এ দুই আয়াতে হাতে থাকা জিনিসের একটিও ভালো ব্যবহারের জন্য কারও উল্লেখ নেই। পাঠক তাই নিজেকে জিজ্ঞেস করতে পারেন। নিজের হাতে যা গড়ছি, আর যে মানুষ বা নিয়ম দিয়ে সব কিছু জায়গামতো ধরে রাখছি, আমার পরে তা কি উপহার হয়ে দাঁড়াবে, নাকি কীলক হয়ে?"
          }
        ]
      }
    ]
  },
  "89:12": {
    "sections": [
      {
        "h": {
          "en": "The Last Line of a Roll-Call",
          "bn": "নামের তালিকার শেষ বাক্য"
        },
        "p": [
          {
            "en": "Fa-aktharu fiha al-fasad: and they increased corruption in it. Three Arabic words complete a sentence that began in 89:11, where those who transgressed in the lands are gathered under one description. Before that, from 89:6, the surah has named three peoples: 'Ad of Iram with its pillars, Thamud who cut the rock in the valley, and Pharaoh of the stakes. After it, 89:13 gives their outcome and 89:14 a sentence of warning, and from 89:15 the surah turns to the human being who reads honour and disgrace off his own provision.",
            "bn": "ফাআকসারূ ফীহাল ফাসাদ: আর তারা সেখানে বিপর্যয় বাড়িয়ে তুলেছিল। আরবিতে মাত্র তিনটি শব্দ, আর এ তিন শব্দেই শেষ হয় ৮৯:১১ আয়াতে শুরু হওয়া বাক্যটি। সেখানে দেশে দেশে সীমালঙ্ঘনকারীদের একটি বর্ণনার নিচে জড়ো করা হয়েছে। তার আগে ৮৯:৬ থেকে সূরাটি তিনটি জাতির নাম নিয়েছে: স্তম্ভের অধিকারী ইরামের ‘আদ, উপত্যকায় পাথর কাটা সামূদ, আর কীলকের অধিপতি ফেরাউন। পরে ৮৯:১৩ জানায় তাদের পরিণাম, ৮৯:১৪ শোনায় এক সতর্কবাণী। আর ৮৯:১৫ থেকে সূরা ফিরে তাকায় সেই মানুষের দিকে, যে নিজের রিযক দেখে সম্মান আর অপমানের হিসাব কষে।"
          },
          {
            "en": "Who are the people described? At-Tabari names them: 'Ad, Thamud, and Pharaoh with his soldiers; as-Sa'di adds those who followed them. Al-Qurtubi weighs the grammar of alladhina, the relative word that opens 89:11. The best reading in his view takes it as accusative of censure, naming people in order to blame them. It may also stand as the predicate of an implied they are, or as a description joined to the three names before it. None of the sources fetched for this passage reports an occasion of revelation for it.",
            "bn": "বর্ণনাটা কাদের? তাবারী নাম ধরে বলেন: ‘আদ, সামূদ, আর ফেরাউন ও তার সৈন্যদল। সা'দী যোগ করেন, যারা তাদের অনুসরণ করেছিল তারাও। ৮৯:১১ আয়াত শুরু হয়েছে আল্লাযীনা শব্দে, কুরতুবী এর ব্যাকরণ যাচাই করেন। তাঁর মতে সবচেয়ে ভালো পাঠ হলো, শব্দটি নিন্দাসূচক কর্মকারকে আছে, অর্থাৎ দোষ ধরার জন্যই নাম নেওয়া। আবার উহ্য 'তারাই' শব্দের বিধেয় হিসেবেও পড়া যায়, কিংবা আগের তিনটি নামের বিশেষণ হিসেবেও। এ অংশের জন্য যে উৎসগুলো দেখা হয়েছে, তার কোনোটিতে নাযিলের কোনো উপলক্ষ বর্ণিত হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Overstepping, Then Piling Up",
          "bn": "আগে সীমা পেরোনো, তারপর স্তূপ"
        },
        "p": [
          {
            "en": "The verse is joined to the verse before it by fa, and so. At-Tabari explains tagha in 89:11 as going beyond what their Lord had made lawful for them, and defying Him towards the disbelief He had forbidden. Al-Qurtubi has them rebel, grow insolent and pass all measure in injustice and aggression. As-Sa'di ties the two verses together: they transgressed in the lands of Allah and harmed His servants in their religion and their worldly life, and that, he says, is why the verse goes on to their corruption.",
            "bn": "আয়াতটি আগের আয়াতের সঙ্গে জোড়া লেগেছে ফা দিয়ে, যার অর্থ: আর তাই। ৮৯:১১ আয়াতের তাগা শব্দের ব্যাখ্যায় তাবারী বলেন, রব যা তাদের জন্য বৈধ করেছিলেন তারা তার সীমা ছাড়িয়েছিল, আর তাঁর অবাধ্য হয়ে এগিয়েছিল সেই কুফরির দিকে যা তিনি নিষেধ করেছিলেন। কুরতুবীর ভাষায় তারা বিদ্রোহী হয়েছিল, ঔদ্ধত্য দেখিয়েছিল, যুলুম আর আগ্রাসনে মাত্রা ছাড়িয়েছিল। সা'দী দুই আয়াতকে এক সুতোয় গাঁথেন। তারা আল্লাহর দেশে সীমালঙ্ঘন করেছিল, তাঁর বান্দাদের দ্বীন ও দুনিয়া দুটোতেই কষ্ট দিয়েছিল। তাঁর কথায়, এ কারণেই আয়াত এরপর তাদের বিপর্যয়ের কথা বলে।"
          },
          {
            "en": "Aktharu means they made much of it, they multiplied it. Fiha, in it, points back to al-bilad, the lands of 89:11, and at-Tabari spells it out as in the lands. The sequence the verses lay out is plain to read: an overstepping of limits, then its spread, then in 89:13 a verb that opens with the same fa, fa-sabba, so He poured. Al-Muyassar draws the thread in a single line: those who were despotic and did wrong in Allah's lands increased corruption in them by their wrongdoing.",
            "bn": "আকসারূ মানে তারা সেটাকে অনেক করে তুলেছিল, বাড়িয়েই চলেছিল। ফীহা, অর্থাৎ সেখানে, শব্দটি ফিরে যায় ৮৯:১১ আয়াতের আল-বিলাদ বা দেশগুলোর দিকে। তাবারী খুলেই বলেন: দেশগুলোতে। আয়াতগুলোর ধারা পড়লেই বোঝা যায়। প্রথমে সীমা পেরোনো, তারপর তা ছড়িয়ে পড়া, তারপর ৮৯:১৩ আয়াতে এমন এক ক্রিয়া যা শুরু হয় সেই একই ফা দিয়ে: ফাসাব্বা, অতঃপর তিনি ঢেলে দিলেন। মুয়াসসার পুরো সুতোটা এক বাক্যে টেনে আনে: যারা আল্লাহর দেশে স্বেচ্ছাচারী হয়েছিল আর যুলুম করেছিল, তারা নিজেদের যুলুম দিয়ে সেখানে বিপর্যয় বাড়িয়ে তুলেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Sins, Injury, or Both",
          "bn": "গুনাহ, জুলুম, নাকি দুটোই"
        },
        "p": [
          {
            "en": "What was the corruption? The commentators answer from different sides. At-Tabari reads it as disobedience: they multiplied sins in the lands and took up what Allah had forbidden them. Ibn Kathir looks at those on the receiving end: they ran amok in the land with corruption and with harm to people. Al-Qurtubi names it in two words, al-jawr wa-l-adha, injustice and hurt. Al-Baghawi, on 89:11, puts both sides into his gloss of the transgression: they worked sins in the land and acted as tyrants.",
            "bn": "বিপর্যয়টা আসলে কী ছিল? তাফসীরকারেরা উত্তর দেন ভিন্ন ভিন্ন দিক থেকে। তাবারী একে দেখেন নাফরমানি হিসেবে: তারা দেশে দেশে গুনাহ বাড়িয়েছিল, আল্লাহ যা হারাম করেছিলেন তাতে জড়িয়েছিল। ইবন কাসীরের চোখ যায় যাদের উপর আঘাত পড়েছিল তাদের দিকে: তারা বিপর্যয় ছড়িয়ে আর মানুষকে কষ্ট দিয়ে দেশে তাণ্ডব চালিয়েছিল। কুরতুবী দুই শব্দে নাম দেন: আল-জাওর ওয়াল-আযা, অবিচার আর পীড়ন। ৮৯:১১ আয়াতের সীমালঙ্ঘনের ব্যাখ্যায় বাগাভী দুটো দিকই রাখেন: তারা দেশে গুনাহর কাজ করেছিল আর স্বৈরাচারী হয়ে উঠেছিল।"
          },
          {
            "en": "As-Sa'di gives the widest reading. Corruption, he says, is acting on disbelief and its branches, every kind of sin; and beyond that they strove to fight the messengers and to turn people away from the path of Allah. These are differences of emphasis, not a dispute. One commentator looks at the offence against Allah, another at the damage done to His servants, and as-Sa'di holds both together. The verse itself lists no particular deeds: the commentators supply the kinds, and the verses before it supply the names.",
            "bn": "সবচেয়ে বিস্তৃত পাঠ সা'দীর। তাঁর মতে বিপর্যয় হলো কুফর আর তার শাখা-প্রশাখা অনুযায়ী চলা, সব রকমের গুনাহ। তার উপর তারা রাসূলদের বিরুদ্ধে লড়াই করেছিল, মানুষকে আল্লাহর পথ থেকে ফিরিয়ে রাখার চেষ্টা করেছিল। এগুলো জোর দেওয়ার পার্থক্য, বিরোধ নয়। একজন তাকান আল্লাহর হকের দিকে, আরেকজন তাঁর বান্দাদের যে ক্ষতি হয়েছে তার দিকে। সা'দী দুটোকে একসঙ্গে ধরে রাখেন। আয়াত নিজে কোনো নির্দিষ্ট কাজের তালিকা দেয় না। কাজের ধরনগুলো জোগান তাফসীরকারেরা, আর নামগুলো জোগায় আগের আয়াতগুলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Why a Whip Was Named",
          "bn": "চাবুকের নাম কেন এল"
        },
        "p": [
          {
            "en": "The next verse answers: fa-sabba 'alayhim rabbuka sawta 'adhab, so your Lord poured upon them a whip of punishment. Al-Qurtubi glosses sabba as emptied out and cast down upon them. Why a whip, when no whip fell? At-Tabari answers directly. Their punishments came as afflictions: a wind that destroyed them, a quake that crushed them, a drowning that ended them, without any blow from whip or stick. But flogging was among the most painful punishments known to the people this Qur'an first addressed, and the phrase became a proverb for any severe punishment.",
            "bn": "পরের আয়াত জবাব দেয়: ফাসাব্বা আলাইহিম রাব্বুকা সাওতা আযাব, অতঃপর তোমার রব তাদের উপর শাস্তির চাবুক ঢেলে দিলেন। কুরতুবী সাব্বা শব্দের অর্থ করেন: খালি করে ঢেলে দেওয়া, উপরে ছুড়ে ফেলা। কোনো চাবুক তো পড়েনি, তবু চাবুক কেন? তাবারী সরাসরি উত্তর দেন। তাদের শাস্তি এসেছিল নানা বিপদ হয়ে। কখনো ধ্বংস করে দেওয়া বাতাস, কখনো চূর্ণ করে দেওয়া ভূকম্পন, কখনো ডুবিয়ে শেষ করে দেওয়া পানি। চাবুক বা লাঠির একটি আঘাতও ছিল না। তবে কুরআন প্রথম যাদের সম্বোধন করেছিল, তাদের কাছে বেত্রাঘাত ছিল সবচেয়ে কষ্টের শাস্তিগুলোর একটি। তাই কথাটা হয়ে দাঁড়াল যেকোনো কঠিন শাস্তির প্রবাদ।"
          },
          {
            "en": "Al-Qurtubi gathers several glosses. A whip of punishment is a portion of punishment. Or it is its intensity, because for the Arabs the whip was the utmost of what one could be punished with; al-Farra' calls it a word they used for every kind of punishment. Or it comes from sata, to mix, a punishment that mingles with flesh and blood. Qatada, in al-Qurtubi, says that everything Allah punished with is a whip of punishment; in al-Baghawi he calls it a kind of punishment poured upon them.",
            "bn": "কুরতুবী কয়েকটি ব্যাখ্যা একসঙ্গে আনেন। শাস্তির চাবুক মানে শাস্তির একটি ভাগ। অথবা তার তীব্রতা, কারণ আরবদের কাছে চাবুকই ছিল শাস্তির চূড়ান্ত রূপ। ফাররা বলেন, শাস্তির যেকোনো ধরনের বেলায় আরবরা কথাটা বলত। আবার শব্দটি আসতে পারে সাতা থেকে, যার অর্থ মিশিয়ে ফেলা। তখন অর্থ দাঁড়ায় এমন শাস্তি, যা রক্ত-মাংসের সঙ্গে মিশে যায়। কুরতুবীর বর্ণনায় কাতাদা বলেন, আল্লাহ যা দিয়েই শাস্তি দিয়েছেন, সবই শাস্তির চাবুক। বাগাভীর বর্ণনায় তিনি একে বলেন শাস্তির এক ধরন, যা তাদের উপর ঢেলে দেওয়া হয়েছিল।"
          },
          {
            "en": "Ma'arif al-Qur'an adds a picture: as lashes fall across different parts of a body, these nations suffered different kinds of punishment. Al-Qurtubi relays that al-Hasan, on reaching this verse, would say that Allah has many whips and seized them with one of them. Mujahid, in at-Tabari, keeps it plain: it is what they were punished with. The image comes from the hearers' own world; what stands behind it is the end that each of these peoples met.",
            "bn": "মাআরিফুল কুরআন একটি ছবি যোগ করে। চাবুকের ঘা যেমন শরীরের নানা জায়গায় পড়ে, তেমনি এ জাতিগুলোর উপর নেমেছিল নানা রকমের শাস্তি। কুরতুবী বর্ণনা করেন, হাসান এ আয়াতে পৌঁছে বলতেন, আল্লাহর কাছে অনেক চাবুক আছে, তার একটি দিয়ে তিনি তাদের পাকড়াও করেছেন। তাবারীর বর্ণনায় মুজাহিদ সোজা কথায় বলেন: যা দিয়ে তাদের শাস্তি দেওয়া হয়েছিল, সেটাই। ছবিটা নেওয়া শ্রোতাদের নিজেদের জগৎ থেকে। তার পেছনে আছে সেই পরিণতি, যা এ জাতিগুলোর প্রত্যেকে ভোগ করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "At the Lookout on the Road",
          "bn": "পথের ধারে পাহারার ঘাঁটি"
        },
        "p": [
          {
            "en": "Then a sentence that stands apart from the story: inna rabbaka la-bil-mirsad, indeed your Lord is at the lookout. Ma'arif al-Qur'an traces mirsad to rasada, to lie in wait or keep watch: a place of observation, used especially for a pass where travellers must go by someone waiting for them. Ibn 'Abbas, in at-Tabari, Ibn Kathir, al-Baghawi and al-Qurtubi, gives a short gloss: He hears and sees. Al-Hasan and 'Ikrima, in al-Qurtubi and al-Baghawi, say He watches each person's deeds in order to repay them. Ibn Kathir adds that He repays each by his striving, in this world and the next, and is free of all injustice.",
            "bn": "তারপর এমন এক বাক্য, যা কাহিনি থেকে আলাদা হয়ে দাঁড়ায়: ইন্না রাব্বাকা লাবিল মিরসাদ, নিশ্চয়ই তোমার রব ঘাঁটিতে নজর রাখছেন। মাআরিফুল কুরআন মিরসাদ শব্দকে নিয়ে যায় রাসাদা ধাতুতে, যার অর্থ ওত পেতে থাকা বা পাহারা দেওয়া। মিরসাদ তাই পর্যবেক্ষণের জায়গা। বিশেষ করে বলা হয় এমন গিরিপথকে, যেখান দিয়ে পথিককে যেতেই হয় আর সেখানে কেউ তার অপেক্ষায় থাকে। তাবারী, ইবন কাসীর, বাগাভী ও কুরতুবী সবাই ইবন আব্বাস (রাঃ)-এর ছোট্ট ব্যাখ্যা আনেন: তিনি শোনেন ও দেখেন। কুরতুবী ও বাগাভীর বর্ণনায় হাসান ও ইকরিমা বলেন, তিনি প্রত্যেকের আমলের উপর নজর রাখেন, যাতে তার প্রতিদান দিতে পারেন। ইবন কাসীর যোগ করেন, দুনিয়া ও আখিরাতে তিনি প্রত্যেককে তার চেষ্টা অনুযায়ী প্রতিদান দেন, আর তিনি সব রকমের যুলুম থেকে পবিত্র।"
          },
          {
            "en": "A second reading takes mirsad as the road itself. Al-Qurtubi gives it as it is said: He is on the path of His servants and no one gets past Him, and notes that mirsad and marsad mean the path. Al-Baghawi names holders: al-Kalbi, that the servants' path runs by Him and no one escapes Him; Muqatil, that people's passage is by Him. As-Suddi read it as Allah setting the Fire in wait on their road. Al-Baghawi then joins the readings: nothing of the servants' deeds escapes Him, just as nothing escapes anyone who keeps watch.",
            "bn": "দ্বিতীয় পাঠে মিরসাদ মানে পথটাই। কুরতুবী একে 'বলা হয়' দিয়ে আনেন: তিনি বান্দাদের পথের উপর আছেন, কেউ তাঁকে এড়িয়ে যেতে পারে না। তিনি এ-ও জানান যে মিরসাদ আর মারসাদ দুটোরই অর্থ পথ। বাগাভী মত অনুযায়ী নাম বলেন। কালবীর মতে বান্দাদের পথ তাঁর পাশ দিয়েই গেছে, কেউ তাঁকে ফাঁকি দিতে পারে না। মুকাতিলের মতে মানুষের যাতায়াত তাঁরই সামনে দিয়ে। সুদ্দী বুঝেছেন, আল্লাহ তাদের পথে আগুনকে ওত পেতে রেখেছেন। তারপর বাগাভী দুই পাঠকে মিলিয়ে দেন: বান্দাদের কোনো আমলই তাঁকে এড়ায় না, যেমন পাহারায় বসা কাউকে কিছুই এড়াতে পারে না।"
          },
          {
            "en": "Is this sentence also the answer to the oaths that open the surah? Here the commentators differ. Al-Qurtubi, on 89:5, reports Muqatil's view that the word hal there stands in place of inna, so that 89:5 itself carries the answer. Others take 89:5 as a question that confirms; on that reading, he says, the answer is inna rabbaka la-bil-mirsad, or else an answer left unstated. Ma'arif al-Qur'an mentions that some commentators make 89:14 the subject of the oaths, while its own note on 89:5 treats the subject as implied: that everyone will give account of his deeds.",
            "bn": "এ বাক্যই কি সূরার শুরুর শপথগুলোর জবাব? এখানে তাফসীরকারেরা একমত নন। কুরতুবী ৮৯:৫ আয়াতের আলোচনায় মুকাতিলের মত জানান। সেখানে হাল শব্দটি ইন্না অর্থাৎ 'নিশ্চয়ই'-এর জায়গায় বসেছে, ফলে ৮৯:৫ নিজেই শপথের জবাব। অন্যরা ৮৯:৫-কে দেখেন সমর্থন আদায়ের প্রশ্ন হিসেবে। কুরতুবী বলেন, সে পাঠে জবাব হলো ইন্না রাব্বাকা লাবিল মিরসাদ, নয়তো এমন এক জবাব যা উহ্য রাখা হয়েছে। মাআরিফুল কুরআন উল্লেখ করে, কোনো কোনো তাফসীরকার ৮৯:১৪-কে শপথের বিষয় ধরেন। তবে ৮৯:৫ আয়াতে তার নিজের ব্যাখ্যায় বিষয়টি উহ্য: প্রত্যেককে নিজের আমলের হিসাব দিতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Respite Before the Seizure",
          "bn": "পাকড়াওয়ের আগে অবকাশ"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this passage attaches a sound hadith to 89:12, or to the two verses after it. On 89:14 Ibn Kathir relays from Ibn Abi Hatim a report attributed to the Prophet ﷺ through Mu'adh, and himself calls it very gharib, with doubt about its chain and its soundness; it is mentioned here only, and nothing is built on it. At-Tabari, al-Qurtubi and Ibn Kathir also relay reports from Companions and later figures about bridges over Hell, and those stay with the commentators.",
            "bn": "এ অংশের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই ৮৯:১২ বা পরের দুই আয়াতের সঙ্গে কোনো সহীহ হাদীস জুড়ে দেয়নি। ৮৯:১৪ আয়াতে ইবন কাসীর ইবন আবী হাতিম থেকে মুআয (রাঃ)-এর সূত্রে নবী ﷺ-এর নামে বর্ণিত একটি রেওয়ায়েত আনেন। তিনি নিজেই একে খুবই গরীব বলেন, এর সনদ ও বিশুদ্ধতা দুটো নিয়েই সংশয় প্রকাশ করেন। তাই এখানে শুধু উল্লেখ করা হলো, এর উপর কিছুই দাঁড় করানো হয়নি। তাবারী, কুরতুবী ও ইবন কাসীর সাহাবি ও পরবর্তীদের থেকে জাহান্নামের উপরের সেতু নিয়ে কিছু বর্ণনাও আনেন। সেগুলো তাফসীরকারদের কাছেই থাকুক।"
          },
          {
            "en": "As-Sa'di and al-Muyassar read 89:14 as a warning to whoever disobeys: Allah gives him a little respite, then seizes him with the seizure of the Mighty, the Able. A general narration, which none of these commentators attaches to this verse, makes the same point. Al-Bukhari records from Abu Musa that the Messenger of Allah ﷺ said: Allah gives respite to the oppressor, but when He takes him over, He never releases him. Then he recited 11:102. It stands in al-Bukhari's Sahih, number 4686.",
            "bn": "সা'দী ও মুয়াসসার ৮৯:১৪ আয়াতকে পড়েন অবাধ্যদের প্রতি সতর্কবাণী হিসেবে। আল্লাহ তাকে অল্প কিছু অবকাশ দেন, তারপর মহাপরাক্রমশালী, সর্বশক্তিমানের পাকড়াওয়ে ধরেন। একই কথা বলে একটি সাধারণ হাদীস, যদিও এ তাফসীরকারদের কেউ সেটিকে এ আয়াতের সঙ্গে জোড়েননি। বুখারী আবু মূসা (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: আল্লাহ যালিমকে অবকাশ দেন, কিন্তু যখন তাকে পাকড়াও করেন, তখন আর ছাড়েন না। তারপর তিনি ১১:১০২ আয়াত তিলাওয়াত করেন। হাদীসটি সহীহ বুখারীতে আছে, নম্বর ৪৬৮৬।"
          }
        ]
      },
      {
        "h": {
          "en": "Exaltation and Corruption, Paired Again",
          "bn": "ঔদ্ধত্য আর বিপর্যয়, আবারও জোড়ায়"
        },
        "p": [
          {
            "en": "Several verses keep company with this one. 28:4 says of Pharaoh that he exalted himself in the land and that he was one of the corrupters, the same two steps as 89:11 and 89:12, told of one man. 28:83 promises the home of the Hereafter to those who seek neither exaltation in the earth nor corruption, so the pair becomes a description of the saved. 29:40 tells how each was seized for his sin, by a storm of stones, a blast, the swallowing earth and drowning, close to how at-Tabari unpacks the whip.",
            "bn": "কয়েকটি আয়াত এ আয়াতের পাশে এসে দাঁড়ায়। ২৮:৪ আয়াত ফেরাউন সম্পর্কে বলে, সে দেশে উদ্ধত হয়ে উঠেছিল এবং সে ছিল ফাসাদ সৃষ্টিকারীদের একজন। ৮৯:১১ ও ৮৯:১২ আয়াতের সেই দুই ধাপই, এবার একজন মানুষের গল্পে। ২৮:৮৩ আয়াত আখিরাতের ঘরের প্রতিশ্রুতি দেয় তাদের, যারা পৃথিবীতে ঔদ্ধত্যও চায় না, বিপর্যয়ও না। জোড়াটি সেখানে হয়ে যায় মুক্তিপ্রাপ্তদের পরিচয়। ২৯:৪০ আয়াত জানায়, প্রত্যেককে তার গুনাহর কারণে পাকড়াও করা হয়েছিল: পাথরের ঝড়ে, বিকট আওয়াজে, ভূগর্ভে ধসিয়ে আর ডুবিয়ে। তাবারী চাবুকের ব্যাখ্যা যেভাবে খুলেছেন, তার সঙ্গে এর মিল আছে।"
          },
          {
            "en": "54:42, said of the people of Pharaoh, speaks of them being seized with the seizure of the Mighty, the Able, the very phrase al-Muyassar and as-Sa'di use on 89:14. And 30:41 widens the frame: corruption has appeared on land and sea because of what people's hands have earned, so that they may taste some of what they did and perhaps return. That last clause is the door these verses leave open for the reader, who is still alive and still able to turn back.",
            "bn": "৫৪:৪২ আয়াত ফেরাউনের লোকদের প্রসঙ্গে বলে, তাদের পাকড়াও করা হয়েছিল মহাপরাক্রমশালী, সর্বশক্তিমানের পাকড়াওয়ে। ৮৯:১৪ আয়াতের ব্যাখ্যায় মুয়াসসার ও সা'দী ঠিক এই কথাটিই ব্যবহার করেন। আর ৩০:৪১ আয়াত চোখের সামনে আরও বড় ছবি মেলে ধরে: মানুষের হাতের কামাইয়ের কারণে জলে-স্থলে বিপর্যয় ছড়িয়ে পড়েছে, যাতে তারা নিজেদের কিছু কাজের স্বাদ পায় আর হয়তো ফিরে আসে। শেষ কথাটাই সেই দরজা, যা এ আয়াতগুলো পাঠকের জন্য খোলা রাখে। পাঠক এখনো বেঁচে আছেন, এখনো ফিরতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Story, Not Our Verdict",
          "bn": "তাদের কাহিনি, আমাদের রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verses describe what the text describes: 'Ad, Thamud and Pharaoh, peoples the Qur'an names, their overstepping and their end. They license nothing against any living person or community. They give no one standing to name a state, a nation or a group of today as the heirs of Pharaoh or as the corrupters of this verse, or to read a disaster that strikes any people as Allah's whip upon them. That verdict was Allah's, over peoples whose record He Himself recited.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতগুলো শুধু সেটুকুই বলে, যা কুরআনে আছে: ‘আদ, সামূদ আর ফেরাউন, যাদের নাম কুরআন নিজে নিয়েছে, তাদের সীমালঙ্ঘন আর তাদের পরিণতি। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো রাষ্ট্র, জাতি বা দলকে ফেরাউনের উত্তরসূরি কিংবা এ আয়াতের ফাসাদকারী বলে দাগানোর অধিকার কাউকে দেয় না। কোনো জনপদে বিপদ এলে সেটাকে তাদের উপর আল্লাহর চাবুক বলে রায় দেওয়ার অধিকারও না। সে রায় ছিল আল্লাহর, সেই জাতিগুলোর উপর, যাদের ইতিহাস তিনি নিজেই শুনিয়েছেন।"
          },
          {
            "en": "So the verse turns back on the reader. Aktharu describes harm that was made much of, added to. In an ordinary week that can be a small dishonesty in an account, a harsh word repeated at home until it is the tone of the house, a rumour forwarded because it was easy. The answer the verse suggests runs the other way: name the limit, stop adding to the harm, and repair what has already spread, before a respite is mistaken for permission.",
            "bn": "তাই আয়াতের মুখ ঘুরে যায় পাঠকের দিকে। আকসারূ শব্দে আছে এমন ক্ষতি, যাকে বাড়িয়ে তোলা হয়েছে, একটার উপর আরেকটা চাপানো হয়েছে। সাধারণ একটা সপ্তাহে তা হতে পারে হিসাবের খাতায় ছোট্ট একটা অসততা। হতে পারে ঘরে বারবার বলা কড়া কথা, যা একসময় পুরো সংসারের সুর হয়ে যায়। হতে পারে সহজ ছিল বলে কোনো গুজব আরেকজনকে পাঠিয়ে দেওয়া। আয়াত যে পথ দেখায় তা উল্টো দিকে। সীমাটার নাম দিন, ক্ষতিতে আর কিছু যোগ করবেন না, আর যা ছড়িয়ে গেছে তা মেরামত করুন। অবকাশকে অনুমতি ভেবে ভুল করার আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer to Stop Adding",
          "bn": "আর না বাড়ানোর দোয়া"
        },
        "p": [
          {
            "en": "The Qur'an records a prayer in this very vocabulary. Lut (AS), facing his people, said in 29:30: rabbi-nsurni 'ala al-qawmi al-mufsidin, my Lord, support me against the people who spread corruption. Beside it, a supplication in the verse's own words, composed here and not taken from the Sunnah: O Allah, do not let me be among those who overstep and add to corruption; let me not mistake Your respite for Your neglect; and make me among those who put right what they have spoiled.",
            "bn": "কুরআন ঠিক এই শব্দভাণ্ডারেই একটি দোয়া সংরক্ষণ করেছে। লূত (আঃ) নিজের জাতির মুখোমুখি দাঁড়িয়ে ২৯:৩০ আয়াতে বলেছিলেন: রব্বিনসুরনী আলাল কাওমিল মুফসিদীন, হে আমার রব, ফাসাদ সৃষ্টিকারী জাতির বিরুদ্ধে আমাকে সাহায্য করুন। তার পাশে আয়াতের নিজের শব্দ দিয়ে একটি দোয়া, যা এখানে রচিত, সুন্নাহ থেকে নেওয়া নয়: হে আল্লাহ, যারা সীমা ছাড়ায় আর বিপর্যয় বাড়ায়, আমাকে তাদের দলে রাখবেন না। আপনার অবকাশকে আপনার উদাসীনতা ভাবার ভুল থেকে আমাকে বাঁচান। আর যা নষ্ট করেছি, তা মেরামত করে যারা, আমাকে তাদের একজন করুন।"
          },
          {
            "en": "Questions to carry from these three words. Which limit have I crossed so often that I no longer feel it? Whose life carries the cost of a habit I have stopped calling a fault? When the wrong I hear about is far away, do I look as hard at the harm within my own reach? And if my Lord is truly at the lookout on every road, which road would I walk differently tomorrow, and what would I go back to put right?",
            "bn": "এই তিনটি শব্দ থেকে সঙ্গে নেওয়ার মতো কিছু প্রশ্ন। কোন সীমা এতবার পেরিয়েছি যে এখন আর টেরই পাই না? আমার কোন অভ্যাসকে আর দোষ বলি না, অথচ তার দাম চুকাচ্ছে অন্য কারও জীবন? দূরের অন্যায়ের খবর শুনলে যতটা মন দিই, নিজের নাগালের ক্ষতির দিকে কি ততটাই তাকাই? আর আমার রব যদি সত্যিই প্রতিটি পথে পাহারায় থাকেন, তবে কাল কোন পথে অন্যভাবে হাঁটব? কোন জিনিস মেরামত করতে আবার ফিরে যাব?"
          }
        ]
      }
    ]
  },
  "89:18": {
    "sections": [
      {
        "h": {
          "en": "Five Words After a Refusal",
          "bn": "এক প্রত্যাখ্যানের পরে পাঁচ শব্দ"
        },
        "p": [
          {
            "en": "Wa la tahaddun 'ala ta'am al-miskin: and you do not urge each other to feed the poor. The verse has 5 Arabic words. Wa-la is and not. Tahaddun is a present-tense verb of the sixth form, addressed to a group of men, from the root h-d-d; the commentators gloss it as urging. 'Ala marks what the urging should be towards. Ta'am comes from the root t-'-m, and al-miskin from the root s-k-n, the poor or needy person. The last two words are joined, so that the phrase reads the ta'am of the poor.",
            "bn": "ওয়া লা তাহাদ্দূনা আলা তাআমিল মিসকীন: আর তোমরা অভাবীকে খাওয়ানোর জন্য পরস্পরকে উৎসাহ দাও না। আয়াতে আরবি শব্দ ৫টি। ওয়া লা মানে আর না। তাহাদ্দূন বর্তমান কালের ক্রিয়া, ষষ্ঠ রূপের, একদল পুরুষকে সামনাসামনি বলা। এর ধাতু হ-দ-দ (ح ض ض), আর তাফসীরকারেরা এর অর্থ করেন উৎসাহ দেওয়া, তাগিদ দেওয়া। আলা বোঝায় তাগিদটা কীসের দিকে। তাআম এসেছে ত-আ-ম (ط ع م) ধাতু থেকে, আর আল-মিসকীন স-ক-ন (س ك ن) ধাতু থেকে, মানে গরিব বা অভাবী মানুষ। শেষ দুটি শব্দ জোড়া লাগানো, তাই পুরো কথাটা দাঁড়ায় মিসকীনের তাআম।"
          },
          {
            "en": "The verse does not stand alone. 89:15 and 89:16 give a man's two readings of his own fortune: when his Lord tests him with honour and favour, he says my Lord has honoured me; when He tests him by measuring out his provision, he says my Lord has humiliated me. 89:17 answers with kalla, no, and then bal, rather: you do not honour the orphan. This verse follows on a single wa, and. It is the second item in that answer, and the list runs on into 89:19 and 89:20, which have entries of their own.",
            "bn": "আয়াতটি একা দাঁড়িয়ে নেই। ৮৯:১৫ ও ৮৯:১৬ আয়াতে এক মানুষ নিজের ভাগ্যকে দুইভাবে পড়ে। রব যখন তাকে সম্মান আর নিয়ামত দিয়ে পরীক্ষা করেন, সে বলে, আমার রব আমাকে সম্মানিত করেছেন। আর যখন রিযক মেপে দিয়ে পরীক্ষা করেন, সে বলে, আমার রব আমাকে লাঞ্ছিত করেছেন। ৮৯:১৭ জবাব দেয় কাল্লা দিয়ে, মানে কক্ষনো না, তারপর বাল, বরং: তোমরা ইয়াতীমকে সম্মান কর না। এ আয়াত আসে শুধু একটি ওয়া, আর, দিয়ে জুড়ে। এটি সেই জবাবের দ্বিতীয় দফা। তালিকাটা এগিয়ে যায় ৮৯:১৯ ও ৮৯:২০ আয়াতে, যাদের আলাদা আলোচনা এখানে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the No Corrects",
          "bn": "কাল্লা যে ভুল ভাঙায়"
        },
        "p": [
          {
            "en": "The commentators read this verse through the no that comes before it. The Muyassar, which treats 89:18 together with 89:19 and 89:20, begins there: the matter is not as this man supposes; rather, honour is by obedience to Allah and disgrace by disobeying Him. Then it lists the charges; for this verse, some of you do not urge others to feed the poor. Ibn Kathir, in the abridged English, makes the same correction from the other side: Allah gives wealth to those He loves and to those He does not love, and withholds it from both.",
            "bn": "তাফসীরকারেরা আয়াতটি পড়েন আগের কাল্লার আলোয়। মুয়াসসার ৮৯:১৮ আয়াতকে ৮৯:১৯ ও ৮৯:২০ আয়াতের সঙ্গে একসঙ্গে ব্যাখ্যা করে, আর শুরু করে সেখান থেকেই। ব্যাপারটা এই মানুষ যেমন ভাবছে তেমন নয়। সম্মান আসে আল্লাহর আনুগত্যে, লাঞ্ছনা আসে তাঁর নাফরমানিতে। এরপর মুয়াসসার অভিযোগগুলো গুনে যায়, এ আয়াতের বেলায়: তোমাদের কেউ অন্যকে মিসকীনকে খাওয়াতে উৎসাহ দেয় না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একই ভুল ভাঙায় অন্য দিক থেকে। আল্লাহ যাদের ভালোবাসেন তাদেরও সম্পদ দেন, যাদের ভালোবাসেন না তাদেরও দেন। আবার দুই দলের কাছ থেকেই তা আটকেও রাখেন।"
          },
          {
            "en": "The point, in Ibn Kathir's words, is that Allah should be obeyed in either circumstance: the wealthy should thank Allah, and the poor should be patient. Ma'arif al-Qur'an, commenting on 89:17 and this verse together, says the passage is apparently a rebuff to those who think wealth is an honour and poverty a dishonour. The verse does not tell anyone how rich they are. It points at what was done, or left unsaid, with what they had, which for the Muyassar is where honour and disgrace are actually decided.",
            "bn": "ইবন কাসীরের ভাষায় আসল কথা হলো, দুই অবস্থাতেই আল্লাহর আনুগত্য করতে হবে। ধনী হলে শুকরিয়া আদায় করবে, গরিব হলে সবর করবে। মাআরিফুল কুরআন ৮৯:১৭ আর এ আয়াত একসঙ্গে আলোচনা করে বলে, যারা ভাবে সম্পদ মানেই সম্মান আর দারিদ্র্য মানেই অপমান, এ অংশ বাহ্যত তাদের প্রতি এক ধমক। কে কত ধনী, আয়াত সে হিসাব দেয় না। আয়াতের আঙুল সেদিকে, যা হাতে ছিল তা দিয়ে কী করা হয়েছে, বা কোন কথাটা বলা হয়নি। মুয়াসসারের মতে সম্মান আর লাঞ্ছনার আসল ফয়সালা হয় সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Urging That Passes Between People",
          "bn": "মানুষে মানুষে চলা তাগিদ"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives two glosses. The first is plain: they do not command their households to feed a poor man who comes to them. The second explains the form. The Kufans, he says, read tahaddun with fatha on the ta and the ha, and with the alif: that is, some of them urge others. Its root form is tatahaddun, and one of the two ta sounds was dropped because the speech points to it. He adds that this reading was the choice of Abu 'Ubayd, and he defines al-hadd, the urging, as al-hathth, prompting.",
            "bn": "কুরতুবী দুটি ব্যাখ্যা দেন। প্রথমটা সাদামাটা: তারা নিজেদের পরিবারের লোকদের হুকুম করে না, যে মিসকীন তাদের কাছে আসে তাকে খাওয়াতে। দ্বিতীয়টা শব্দের গড়ন নিয়ে। তিনি বলেন, কুফার কারীরা তাহাদ্দূন পড়েছেন তা আর হা-তে যবর দিয়ে, মাঝে আলিফ রেখে, যার মানে তাদের একজন আরেকজনকে তাগিদ দেয়। শব্দটার আদি রূপ তাতাহাদ্দূন। দুটি তা-এর একটি বাদ পড়েছে, কারণ কথার ধারাই সেটা বুঝিয়ে দেয়। তিনি যোগ করেন, এই কিরাআত আবু উবাইদের পছন্দ। আর আল-হাদ্দ, অর্থাৎ তাগিদ, তাঁর সংজ্ঞায় আল-হাছছ, মানে উসকে দেওয়া।"
          },
          {
            "en": "The others divide between two verbs. Al-Baghawi first glosses the verse as you do not command his feeding, then notes the reading tahaddun, which he attributes to Abu Ja'far and the people of Kufa, meaning that some of you do not urge others to it. As-Sa'di keeps only the mutual sense: some of you do not urge others. Ibn Kathir's Arabic joins both: they do not command doing good to the poor and the needy, and do not urge each other to it. Urging and commanding sit side by side in the sources.",
            "bn": "বাকিরা দুটি ক্রিয়ার মাঝে ভাগ হয়ে যান। বাগাভী প্রথমে ব্যাখ্যা করেন: তোমরা তাকে খাওয়ানোর হুকুম কর না। তারপর তাহাদ্দূন কিরাআতের উল্লেখ করেন, যা তিনি আবু জা'ফর ও কুফাবাসীদের দিকে সম্বন্ধ করেন, যার অর্থ তোমাদের কেউ অন্যকে এর তাগিদ দেয় না। সা'দী শুধু পারস্পরিক অর্থটাই রাখেন: তোমাদের কেউ অন্যকে উৎসাহ দেয় না। ইবন কাসীরের আরবি পাঠে দুটোই একসঙ্গে আছে। তারা গরিব-মিসকীনের প্রতি সদাচরণের হুকুম করে না, আর এ ব্যাপারে একে অপরকে তাগিদও দেয় না। সূত্রগুলোতে তাগিদ আর হুকুম পাশাপাশি বসে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Readers of the Cities",
          "bn": "নগরে নগরে কারীদের পাঠ"
        },
        "p": [
          {
            "en": "At-Tabari begins by saying that the readers differed over this word, and he sets out where. Abu Ja'far among the people of Medina, and most of the readers of Kufa, read tahaddun, with the ta opened by fatha and the alif kept, in the sense that some of you do not urge others to feed the poor. Some readers of Mecca and most of the readers of Medina read tahuddun, with the ta opened and the alif dropped, in the sense that you do not command the feeding of the poor.",
            "bn": "তাবারী শুরুতেই বলেন, এ শব্দের পাঠ নিয়ে কারীদের মধ্যে মতভেদ আছে, তারপর খুলে দেখান কোথায়। মদীনাবাসীদের মধ্যে আবু জা'ফর আর কুফার অধিকাংশ কারী পড়েছেন তাহাদ্দূন। তা-তে যবর, মাঝে আলিফ বহাল। অর্থ: তোমাদের কেউ অন্যকে মিসকীনকে খাওয়াতে তাগিদ দেয় না। মক্কার কিছু কারী আর মদীনার অধিকাংশ কারী পড়েছেন তাহুদ্দূন। তা-তে যবর, আলিফ বাদ। অর্থ: তোমরা মিসকীনকে খাওয়ানোর হুকুম কর না।"
          },
          {
            "en": "Most of the readers of Basra read yahuddun, with ya and without the alif. That turns the address into a report: it is the men who said my Lord has honoured me and my Lord has humiliated me who do not honour the orphan and do not urge the feeding of the poor. Last, he records that it has been mentioned of some that they read tuhaddun, with the ta given damma and the alif kept, in the sense of wa la tuhafizun, roughly you do not keep guard.",
            "bn": "বসরার অধিকাংশ কারী পড়েছেন ইয়াহুদ্দূন, ইয়া দিয়ে, আলিফ ছাড়া। তাতে সম্বোধনটা বদলে হয়ে যায় অন্যের সম্পর্কে খবর। যারা বলেছিল আমার রব আমাকে সম্মানিত করেছেন, আমার রব আমাকে লাঞ্ছিত করেছেন, তারাই ইয়াতীমকে সম্মান করে না, মিসকীনকে খাওয়ানোর তাগিদ দেয় না। সবশেষে তিনি উল্লেখ করেন, কারও কারও সম্পর্কে বলা হয়েছে যে তাঁরা পড়েছেন তুহাদ্দূন। তা-তে পেশ, আলিফ বহাল, আর অর্থ ওয়া লা তুহাফিযূন, মোটামুটি: তোমরা পাহারা দাও না।"
          },
          {
            "en": "Al-Qurtubi also reports a reading tuhaddun, with damma on the ta, and gives it a chain of names: Ibrahim, ash-Shayzari from al-Kisa'i, and as-Sulami. At-Tabari then states his own verdict. These are known readings among the readers of the cities, he says; the three readings are sound in meaning, and whichever of them the reader recites, he is correct. So al-Qurtubi records that Abu 'Ubayd chose the Kufan reading, while at-Tabari declines to prefer any of the three. Neither is chosen here.",
            "bn": "কুরতুবীও তুহাদ্দূন পাঠের উল্লেখ করেন, তা-তে পেশ দিয়ে, আর এর সঙ্গে কয়েকটি নাম জুড়ে দেন: ইবরাহীম, কিসাঈ থেকে শাইযারী, আর সুলামী। এরপর তাবারী নিজের রায় দেন। তাঁর ভাষায়, এগুলো বিভিন্ন নগরের কারীদের কাছে পরিচিত কিরাআত। তিনটি কিরাআতের অর্থই সঠিক, পাঠক যেটাই পড়ুন, ঠিক পড়েছেন। তাহলে দাঁড়াল এই: কুরতুবী জানান, আবু উবাইদ কুফার পাঠটি বেছে নিয়েছিলেন, আর তাবারী তিনটির কোনোটিকেই অন্যটির উপর প্রাধান্য দেন না। এখানে কোনোটিকেই বেছে নেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "From Food to Feeding",
          "bn": "খাবার থেকে খাওয়ানো"
        },
        "p": [
          {
            "en": "The verse's noun is ta'am, and five of the Arabic commentaries consulted for it put it'am, feeding, in its place: at-Tabari in explaining tahuddun, al-Qurtubi, al-Baghawi, as-Sa'di and the Muyassar. Ma'arif al-Qur'an's English has to feed the needy. In these glosses the phrase names an act done for a poor person, the feeding, rather than the food itself. As-Sa'di also widens the people meant: al-mahawij min al-masakin wal-fuqara, those in need among the poor and the destitute.",
            "bn": "আয়াতের বিশেষ্যটি তাআম। অথচ এ আয়াতের জন্য আনা আরবি তাফসীরগুলোর ৫টি তার জায়গায় বসায় ইতআম, মানে খাওয়ানো: তাহুদ্দূন পাঠ ব্যাখ্যায় তাবারী, তারপর কুরতুবী, বাগাভী, সা'দী আর মুয়াসসার। মাআরিফুল কুরআনের ইংরেজিতেও আছে অভাবীকে খাওয়ানোর কথা। এসব ব্যাখ্যায় কথাটা খাবারের নাম নয়, অভাবী মানুষের জন্য করা একটা কাজের নাম: খাওয়ানো। সা'দী কাদের কথা, সেটাও বিস্তৃত করেন: আল-মাহাউইজ মিনাল মাসাকীন ওয়াল ফুকারা, মানে মিসকীন আর ফকীরদের মধ্যে যারা অভাবগ্রস্ত।"
          },
          {
            "en": "Al-Qurtubi's first gloss draws the circle small and close. Those at fault do not command ahlihim, their own households, to feed a miskin who comes to them. The poor man is at the door, and the instruction that was never given would have been given at home. Ibn Kathir's Arabic draws it wider: they do not command al-ihsan, doing good, to the poor and the needy. His abridged English says the same, that they do not command that the poor and the needy be treated with kindness.",
            "bn": "কুরতুবীর প্রথম ব্যাখ্যা বৃত্তটা ছোট আর কাছের করে আঁকে। দোষীরা নিজেদের আহল, মানে ঘরের লোকদের হুকুম করে না, যে মিসকীন তাদের কাছে আসে তাকে খাওয়াতে। গরিব মানুষটি দাঁড়িয়ে আছে দরজায়, আর যে নির্দেশটা কখনো দেওয়া হয়নি, তা দেওয়ার কথা ছিল ঘরের ভেতরেই। ইবন কাসীরের আরবি পাঠ বৃত্তটা বড় করে: তারা গরিব আর মিসকীনদের প্রতি ইহসান, মানে সদাচরণের হুকুম করে না। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণেও একই কথা: গরিব-মিসকীনের সঙ্গে সদয় আচরণ করতে তারা হুকুম করে না।"
          },
          {
            "en": "These are differences of reach rather than contradictions, and they are worth keeping apart. Al-Qurtubi pictures a householder and a caller at the door. As-Sa'di pictures people who fail to prompt each other. Ibn Kathir widens the object from food to kindness. Each reading is set out here under its author's name. The commentators do not rank them against each other, and neither does this article.",
            "bn": "এগুলো পরস্পরবিরোধী কথা নয়, পরিধির পার্থক্য। তবু আলাদা করে রাখা দরকার। কুরতুবীর ছবিতে আছেন এক গৃহকর্তা আর দরজায় আসা এক অভাবী। সা'দীর ছবিতে এমন মানুষজন, যারা একে অপরকে তাগিদ দেয় না। ইবন কাসীর বিষয়টা খাবার থেকে সদাচরণ পর্যন্ত বাড়িয়ে নেন। প্রতিটি ব্যাখ্যা এখানে তার লেখকের নামেই রাখা হলো। তাফসীরকারেরা এগুলোর মধ্যে কোনটা আগে কোনটা পরে, সে ক্রম ঠিক করেন না, এই লেখাও করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Urging Dries Up",
          "bn": "তাগিদ কেন শুকিয়ে যায়"
        },
        "p": [
          {
            "en": "As-Sa'di is the only commentator here who names a cause. Some of you do not urge others to feed the needy, he says, and that is because of shuhh, tight-fistedness, over this world, and the love of it, intense and settled firmly in the hearts. Offered as this article's reading of his gloss: the silence is not mere forgetfulness. A person who holds tightly to what he has finds it hard to tell another to loosen his grip. The love of wealth has a verse of its own at 89:20, and is left to it.",
            "bn": "এখানে কারণের কথা বলেন কেবল সা'দী। তাঁর ভাষায়, তোমাদের কেউ অন্যকে অভাবীকে খাওয়াতে তাগিদ দেয় না, কারণ দুনিয়ার ব্যাপারে আছে শুহ্হ, মানে কৃপণতা, আর দুনিয়ার প্রতি এমন তীব্র ভালোবাসা, যা অন্তরে শক্ত করে গেড়ে বসেছে। এই লেখার নিজের পাঠ হিসেবে বলা যায়: চুপ থাকাটা নিছক ভুলে যাওয়া নয়। যে নিজের জিনিস শক্ত মুঠিতে ধরে রাখে, অন্যকে মুঠি আলগা করতে বলা তার পক্ষে কঠিন। সম্পদের প্রতি ভালোবাসার জন্য আলাদা আয়াত আছে, ৮৯:২০। সে আলোচনা সেখানেই থাকুক।"
          },
          {
            "en": "Ma'arif al-Qur'an calls this the second evil trait of the unbelievers in the passage, and draws a rule from the way the verse condemns it: the style, it says, indicates that it is an obligation of the affluent to spend on the poor and indigent from their own wealth. Then it turns to those without means. Obviously, it says, the poor are unable to spend owing to lack of means, but they should at least encourage others to feed the needy. On this reading the verb of the verse leaves nobody outside it.",
            "bn": "মাআরিফুল কুরআন একে এ অংশে বর্ণিত অবিশ্বাসীদের দ্বিতীয় মন্দ স্বভাব বলে। আর আয়াত যে ভঙ্গিতে এর নিন্দা করে, তা থেকে একটা বিধান টানে। তার মতে এই ভঙ্গি বলে দেয়, নিজের সম্পদ থেকে গরিব-অভাবীদের জন্য খরচ করা সচ্ছলদের উপর দায়িত্ব। এরপর সে ফেরে যাদের সামর্থ্য নেই তাদের দিকে। স্পষ্টতই গরিবেরা অর্থের অভাবে খরচ করতে পারে না, সে বলে, কিন্তু অন্তত অন্যদের অভাবীকে খাওয়াতে উৎসাহ দেওয়া তাদের উচিত। এই পাঠে আয়াতের ক্রিয়াটি কাউকে বাইরে রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Beside a Line in al-Ma'un",
          "bn": "সূরা মাউনের এক লাইনের পাশে"
        },
        "p": [
          {
            "en": "Ibn Kathir, commenting on 107:3, sets this verse beside it. There the surah describes the man who denies the Recompense, and 107:3 reads wa la yahuddu 'ala ta'am al-miskin, and he does not urge the feeding of the poor. Ibn Kathir cites 89:17 and 89:18 as its parallel and then defines the miskin there: the poor man who has nothing to sustain him and suffice his needs. The module's entry on 107:1 takes up that surah.",
            "bn": "ইবন কাসীর ১০৭:৩ আয়াতের ব্যাখ্যায় এ আয়াতটিকে তার পাশে রাখেন। সেখানে সূরাটি বলছে প্রতিদান দিবস অস্বীকারকারী লোকের কথা। ১০৭:৩ আয়াতে আছে ওয়া লা ইয়াহুদ্দু আলা তাআমিল মিসকীন: আর সে মিসকীনকে খাওয়াতে তাগিদ দেয় না। ইবন কাসীর এর সমান্তরাল হিসেবে ৮৯:১৭ ও ৮৯:১৮ উদ্ধৃত করেন, তারপর সেখানে মিসকীনের সংজ্ঞা দেন: সেই গরিব, যার নিজেকে টিকিয়ে রাখার মতো, প্রয়োজন মেটানোর মতো কিছুই নেই। সূরাটি নিয়ে আলোচনা আছে এই মডিউলের ১০৭:১ অংশে।"
          },
          {
            "en": "Both verses have 5 Arabic words, and four of them are the same. The difference is the verb. In 107:3 it is yahuddu, the simple first form, singular and in the third person, said about one man. Here it is tahaddun, the sixth form, plural and addressed directly. Read side by side, as this article's own observation, the first describes a man who does not urge; the second describes a group in which nobody urges anybody. The failure in 89:18 belongs to the circle, and not only to each person in it.",
            "bn": "দুই আয়াতেই আরবি শব্দ ৫টি, তার চারটিই হুবহু এক। পার্থক্য শুধু ক্রিয়ায়। ১০৭:৩ আয়াতে তা ইয়াহুদ্দু, প্রথম রূপের সরল ক্রিয়া, একবচন, একজন মানুষের সম্পর্কে বলা। এখানে তাহাদ্দূন, ষষ্ঠ রূপ, বহুবচন, সরাসরি সম্বোধন। পাশাপাশি রেখে পড়লে, এই লেখার নিজের পর্যবেক্ষণে, প্রথমটি এমন এক লোকের ছবি, যে তাগিদ দেয় না। দ্বিতীয়টি এমন এক দলের ছবি, যেখানে কেউ কাউকে তাগিদ দেয় না। ৮৯:১৮ আয়াতের ব্যর্থতা তাই গোটা বৃত্তের, শুধু তার প্রত্যেক সদস্যের আলাদা আলাদা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Charge Stops",
          "bn": "অভিযোগের সীমানা"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse charges the people the passage addresses, those who read their fortune as their worth; Ma'arif al-Qur'an names them as the unbelievers, and the Muyassar speaks to them directly as you. It speaks only of what it names, and it licenses nothing against any living person or community. It names no group a reader may point at today, and it gives nobody a way of judging whether a neighbour's giving is enough or whether a family's wealth is clean.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতের অভিযোগ সেই লোকদের বিরুদ্ধে, যাদের এ অংশ সম্বোধন করছে, যারা নিজের ভাগ্যকেই নিজের মর্যাদা ভেবেছিল। মাআরিফুল কুরআন তাদের অবিশ্বাসী বলে চিহ্নিত করে, আর মুয়াসসার তাদের সরাসরি তোমরা বলে সম্বোধন করে। আয়াতটি ততটুকুই বর্ণনা করে, যতটুকু পাঠে আছে। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। আজকের কোনো দলকে আঙুল তুলে দেখানোর মতো নামও এতে নেই। প্রতিবেশীর দান যথেষ্ট কি না, কোনো পরিবারের সম্পদ হালাল কি না, সে রায় দেওয়ার উপায়ও কাউকে দেয় না।"
          },
          {
            "en": "No tafsir consulted for this verse attaches a hadith to it. The single narration in Ibn Kathir's grouped passage, on the guardian of the orphan, belongs to 89:17, so this article quotes none. The commentators' own correction also cuts against using the verse as a verdict on others: wealth, on Ibn Kathir's account, is given to those Allah loves and to those He does not, so it proves nothing about anyone's standing. The only person this article turns the verse towards is its reader.",
            "bn": "এ আয়াতের জন্য আনা কোনো তাফসীর এর সঙ্গে কোনো হাদিস যুক্ত করেনি। ইবন কাসীরের একসঙ্গে ব্যাখ্যা করা অংশে একটিমাত্র বর্ণনা আছে, ইয়াতীমের অভিভাবক নিয়ে, তবে সেটি ৮৯:১৭ আয়াতের। তাই এই লেখা কোনো হাদিস উদ্ধৃত করছে না। অন্যের উপর রায় দিতে আয়াতটি ব্যবহারের বিরুদ্ধে তাফসীরকারদের নিজেদের সংশোধনীও দাঁড়ায়। ইবন কাসীরের বর্ণনায়, আল্লাহ যাদের ভালোবাসেন তাদেরও সম্পদ দেন, যাদের ভালোবাসেন না তাদেরও। তাই সম্পদ কারও মর্যাদার প্রমাণ নয়। এই লেখা আয়াতটিকে ফেরায় কেবল পাঠকের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Invitation, Plainly Labelled",
          "bn": "এক আহ্বান, নিজের পাঠ বলে চিহ্নিত"
        },
        "p": [
          {
            "en": "What follows is this article's own reading, not a ruling the commentators give. The verse faults a silence. Al-Qurtubi's householder fails to give an instruction at home; as-Sa'di's people fail to prompt each other; and Ma'arif al-Qur'an asks even the poor, who cannot spend, to encourage others. In each, the weight falls on what was not said. That makes the verse a question every reader can put to himself without accusing anybody else: in my house and among my friends, is feeding the hungry ever spoken of, and by whom?",
            "bn": "এরপর যা বলা হচ্ছে, তা এই লেখার নিজের পাঠ, তাফসীরকারদের দেওয়া কোনো বিধান নয়। আয়াতটি এক নীরবতাকে দোষ দেয়। কুরতুবীর গৃহকর্তা ঘরে নির্দেশটা দেন না। সা'দীর মানুষজন একে অপরকে তাগিদ দেয় না। আর মাআরিফুল কুরআন এমনকি খরচ করতে অক্ষম গরিবকেও বলে অন্যদের উৎসাহ দিতে। সবখানেই ভার পড়ছে না-বলা কথার উপর। ফলে আয়াতটি এমন এক প্রশ্ন হয়ে ওঠে, যা যেকোনো পাঠক অন্য কাউকে দোষ না দিয়ে নিজেকেই করতে পারেন: আমার ঘরে, বন্ধুদের মাঝে ক্ষুধার্তকে খাওয়ানোর কথা কি কখনো ওঠে? উঠলে কে তোলে?"
          },
          {
            "en": "The urging is open to every reader. Some readers can give, and can ask others to give with them. Some cannot give much, and can still name the need to someone who can, which is what Ma'arif al-Qur'an asks of them. The passage moves on from here to inheritance and the love of wealth in 89:19 and 89:20. This verse's own share is smaller and nearer: the sentence that nobody in the room said.",
            "bn": "তাগিদ দেওয়ার সুযোগ প্রত্যেক পাঠকের আছে। কেউ নিজে দিতে পারেন, অন্যদেরও সঙ্গে নিয়ে দিতে বলতে পারেন। কেউ বেশি দিতে পারেন না, তবু যার সামর্থ্য আছে, তাকে প্রয়োজনের কথাটা জানাতে পারেন। মাআরিফুল কুরআন তাদের কাছে ঠিক এটুকুই চায়। এখান থেকে অংশটি এগিয়ে যায় উত্তরাধিকার আর সম্পদপ্রীতির দিকে, ৮৯:১৯ ও ৮৯:২০ আয়াতে। এ আয়াতের নিজের ভাগ ছোট, আর কাছের: ঘরের কেউ যে কথাটা মুখে আনেনি।"
          }
        ]
      }
    ]
  },
  "89:20": {
    "sections": [
      {
        "h": {
          "en": "The Last Charge Is a Love",
          "bn": "শেষ অভিযোগটি এক ভালোবাসা"
        },
        "p": [
          {
            "en": "Wa tuhibbuna al-mala hubban jamma: and you love wealth with a love that is jamm. The verse is four words in the Arabic, and its verb and the noun after the object come from one root, you love and a love. It closes a short run of charges. Just before it, 89:15 and 89:16 report the claim of man: when his Lord is generous to him he says, my Lord has honoured me, and when his provision is restricted he says, my Lord has humiliated me. Then 89:17 opens with kalla, no, and the charges begin.",
            "bn": "ওয়া তুহিব্বূনাল মালা হুব্বান জাম্মা: আর তোমরা সম্পদকে ভালোবাস 'জাম্ম' ভালোবাসায়। আরবিতে আয়াতটি মাত্র চারটি শব্দ। ক্রিয়াপদ আর কর্মের পরের বিশেষ্যটি একই ধাতু থেকে এসেছে: ভালোবাস, ভালোবাসায়। ছোট্ট এক অভিযোগের ধারা এ আয়াতে এসে থামে। ঠিক আগে ৮৯:১৫ ও ৮৯:১৬ আয়াত মানুষের দাবিটা তুলে ধরে। রব তাকে দান করলে সে বলে, আমার রব আমাকে সম্মান দিয়েছেন। রিযক সংকুচিত হলে বলে, আমার রব আমাকে অপমান করেছেন। তারপর ৮৯:১৭ আয়াত শুরু হয় 'কাল্লা' দিয়ে, অর্থাৎ না, আর অভিযোগগুলো আসতে থাকে।"
          },
          {
            "en": "The charges run through three verses: you do not honour the orphan, you do not urge one another to feed the poor, and you devour inheritance with a greedy devouring. Those verses, 89:17 to 89:19, have their own treatment and are named here only as the setting. The Muyassar reads 89:18 to 89:20 as one passage and first answers the man's assumption: honour lies in obedience to Allah, and humiliation in disobedience to Him. Where the earlier charges name things done or left undone, this last one names a love.",
            "bn": "অভিযোগগুলো ছড়িয়ে আছে তিনটি আয়াতে: তোমরা ইয়াতীমকে সম্মান কর না, মিসকিনকে খাওয়াতে পরস্পরকে উৎসাহ দাও না, আর মিরাসের সম্পদ লোভে গোগ্রাসে খাও। ৮৯:১৭ থেকে ৮৯:১৯ পর্যন্ত এই আয়াতগুলোর আলোচনা আলাদা, এখানে শুধু প্রেক্ষাপট হিসেবে নাম আসছে। মুয়াসসার ৮৯:১৮ থেকে ৮৯:২০ পর্যন্ত একটি অংশ হিসেবে পড়ে, আর শুরুতেই মানুষের ধারণার জবাব দেয়: সম্মান আল্লাহর আনুগত্যে, অপমান তাঁর নাফরমানিতে। আগের অভিযোগগুলো বলে কী করা হয়েছে আর কী করা হয়নি। শেষেরটি বলে এক ভালোবাসার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Water Gathering in a Basin",
          "bn": "হাউজে জমে ওঠা পানি"
        },
        "p": [
          {
            "en": "At-Tabari glosses the verse: you love the gathering of wealth and its acquisition, O people, with a love that is much and intense. He takes jamm from a phrase of the Arabs, qad jamma al-ma'u fi al-hawd, said of water when it has collected in a basin. As a witness he quotes a line of Zuhayr ibn Abi Sulma about a company that comes down to water whose jimam, its gathered pools, are blue. A footnote in the printed text explains jimam as what has gathered and grown much, and the blue as clarity, because no one had come to that water before them to stir it.",
            "bn": "তাবারী নিজের ভাষায় আয়াতটির ব্যাখ্যা দেন: হে মানুষ, তোমরা সম্পদ জমানো আর তা নিজের করে রাখাকে ভালোবাস, অনেক বেশি ও তীব্র ভালোবাসায়। 'জাম্ম' শব্দটি তিনি নেন আরবদের এক কথা থেকে: কাদ জাম্মাল মাউ ফিল হাওদ, অর্থাৎ হাউজে পানি জমে উঠেছে। সাক্ষী হিসেবে তিনি যুহাইর ইবন আবী সুলমার একটি পঙক্তি আনেন। সেখানে একদল লোক এমন পানির ধারে নামে, যার জমে থাকা জলাশয়গুলো নীল। ছাপা সংস্করণের এক টীকা বলে, 'জিমাম' মানে যা জমে জমে বেড়ে উঠেছে। আর নীল রং পানির স্বচ্ছতার কারণে, কেননা তাদের আগে কেউ সে পানিতে নামেনি, কেউ তা ঘোলা করেনি।"
          },
          {
            "en": "Al-Qurtubi gives the same picture in more detail. Jamm is much; one says jamma al-shay'u yajimmu jumuman, and of water, that it jamma in the basin when it collected and grew much. A related noun names the place where water gathers. Al-jamum is a well with plenty of water, and jumum, read with the vowel u, is said of water that grows much and collects in a well after what was in it has been drawn out. Al-Baghawi keeps to the short form: one says jamma al-ma'u fi al-hawd when the water grew much and collected.",
            "bn": "কুরতুবী একই ছবি আরও খুঁটিয়ে আঁকেন। জাম্ম মানে অনেক। বলা হয় জাম্মাশ শাইউ ইয়াজিম্মু জুমূমান, আর পানির বেলায় বলা হয়, হাউজে পানি 'জাম্মা' করেছে, যখন তা জমে বেড়ে ওঠে। এই ধাতুর আরেকটি শব্দ বোঝায় সেই জায়গা, যেখানে পানি এসে জমে। 'জামূম' হলো প্রচুর পানির কূপ। আর পেশ দিয়ে পড়া 'জুমূম' বলা হয় তখন, যখন কূপ থেকে পানি তুলে নেওয়ার পর আবার তাতে পানি বেড়ে জমে ওঠে। বাগাভী ছোট করে বলেন: হাউজে পানি বেড়ে জমে উঠলে বলা হয় জাম্মাল মাউ ফিল হাওদ।"
          },
          {
            "en": "Al-Qurtubi also quotes a line of poetry, ascribed in his editor's brackets to Abu Khirash al-Hudhali: in taghfir allahumma taghfir jamma, wa ayyu 'abdin laka la alamma. If You forgive, O Allah, You forgive abundantly, and what servant of Yours has not fallen into some slight fault? There the same word praises the abundance of Allah's forgiveness. This article draws one observation from that: the word jamm carries no blame of itself. Any blame in the verse comes from what the abundance attaches to, a point Ma'arif al-Qur'an makes outright, as a later section shows.",
            "bn": "কুরতুবী একটি কবিতার পঙক্তিও উদ্ধৃত করেন। সম্পাদকের বন্ধনীতে তা আবু খিরাশ হুযালীর বলে উল্লেখ আছে: ইন তাগফির আল্লাহুম্মা তাগফির জাম্মা, ওয়া আইয়ু আবদিন লাকা লা আলাম্মা। হে আল্লাহ, আপনি ক্ষমা করলে অঢেল ক্ষমা করেন, আর আপনার এমন কোন বান্দা আছে, যে ছোটখাটো ভুলে জড়ায়নি? সেখানে এই একই শব্দ আল্লাহর ক্ষমার প্রাচুর্যের প্রশংসা করছে। এ লেখা সেখান থেকে একটি কথা টানে: 'জাম্ম' শব্দে নিজে থেকে কোনো নিন্দা নেই। আয়াতে যে নিন্দা, তা আসে প্রাচুর্যটা কিসের সঙ্গে জুড়েছে তা থেকে। মাআরিফুল কুরআন কথাটা সরাসরি বলে, পরের এক অংশে তা আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Much, or Intense?",
          "bn": "অনেক, নাকি তীব্র?"
        },
        "p": [
          {
            "en": "At-Tabari then lists the early glosses with their chains, and they fall along two lines. One line is intensity. Ibn 'Abbas, in one chain, says shadid, intense; Qatada says a love that is intense; Ibn Zayd says al-jamm is al-shadid. The other line is quantity. Mujahid says al-jamm is al-kathir, much, while Ibn 'Abbas in a second chain, and ad-Dahhak, both say that they love the abundance of wealth, which moves the muchness from the love onto the wealth. At-Tabari's own gloss holds both together, kathiran shadidan, and he says the people of interpretation spoke likewise.",
            "bn": "এরপর তাবারী সনদসহ প্রথম যুগের ব্যাখ্যাগুলো তুলে ধরেন। সেগুলো দুটি ধারায় ভাগ হয়ে যায়। একটি ধারা তীব্রতার। একটি সনদে ইবন আব্বাস (রাঃ) বলেন, শাদীদ, অর্থাৎ তীব্র। কাতাদা বলেন, তীব্র ভালোবাসা। ইবন যাইদ বলেন, আল-জাম্ম মানে আশ-শাদীদ। অন্য ধারাটি পরিমাণের। মুজাহিদ বলেন, আল-জাম্ম মানে আল-কাসীর, অনেক। আর আরেক সনদে ইবন আব্বাস (রাঃ) এবং দাহহাক দুজনেই বলেন, তারা সম্পদের প্রাচুর্য ভালোবাসে। এতে 'অনেক' কথাটা ভালোবাসা থেকে সরে গিয়ে বসে সম্পদের গায়ে। তাবারীর নিজের ব্যাখ্যা দুটোকে একসঙ্গে ধরে রাখে: কাসীরান শাদীদান। তিনি বলেন, তাফসীরবিদেরাও এমনই বলেছেন।"
          },
          {
            "en": "The later commentators carry the same pair. Al-Qurtubi and al-Baghawi both say kathir, much, and as-Sa'di says kathiran shadidan, much and intense, as at-Tabari did. Ibn Kathir's Arabic, as consulted, says kathir and then records that some added fahish, gross or immoderate. The abridged English edition renders that clause differently: This increases some of them in their wickedness. The Muyassar says mufrit, excessive, and Ma'arif al-Qur'an says the word jamm means excessive. This article sets the glosses side by side and does not choose among them.",
            "bn": "পরের যুগের তাফসীরকারেরাও এই জোড়াটাই বহন করেন। কুরতুবী ও বাগাভী দুজনেই বলেন কাসীর, অনেক। সা'দী তাবারীর মতোই বলেন কাসীরান শাদীদান, অনেক ও তীব্র। ইবন কাসীরের আরবি পাঠে আছে কাসীর, তারপর লেখা: কেউ কেউ যোগ করেছেন 'ফাহিশ', অর্থাৎ বেহিসাব, মাত্রাছাড়া। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে বাক্যটি এসেছে অন্যভাবে: এটি তাদের কারও কারও দুষ্কর্ম বাড়িয়ে দেয়। মুয়াসসার বলে মুফরিত, সীমাছাড়া। মাআরিফুল কুরআন বলে, জাম্ম মানে অতিরিক্ত। এ লেখা ব্যাখ্যাগুলো পাশাপাশি রাখে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Love Fastens On",
          "bn": "ভালোবাসা আঁকড়ে ধরে কী"
        },
        "p": [
          {
            "en": "The commentators also differ slightly on what exactly is loved. The verse says al-mal, wealth. At-Tabari reads it as the gathering of wealth and its acquisition. Al-Baghawi says the same and adds a second verb: you love gathering wealth and are infatuated with it, tula'una bihi. Ibn 'Abbas in one report, and ad-Dahhak, speak of loving the abundance of wealth. So the object is read three ways in the sources: wealth itself, the act of amassing it, and the sheer amount of it. Here too the readings stand together, and none is set above the others.",
            "bn": "ভালোবাসার বিষয়টা ঠিক কী, তা নিয়েও তাফসীরকারদের কথায় সামান্য তফাত আছে। আয়াতে আছে 'আল-মাল', সম্পদ। তাবারী একে পড়েন সম্পদ জমানো আর নিজের করে রাখা হিসেবে। বাগাভীও তাই বলেন, সঙ্গে জোড়েন আরেকটি ক্রিয়া: তোমরা সম্পদ জমানো ভালোবাস আর তাতে মোহগ্রস্ত হয়ে থাক, তূলাঊনা বিহী। একটি বর্ণনায় ইবন আব্বাস (রাঃ), আর দাহহাকও, সম্পদের প্রাচুর্য ভালোবাসার কথা বলেন। ফলে উৎসগুলোতে বিষয়টা তিনটি দিক থেকে পড়া হয়েছে: সম্পদ নিজে, তা জমানোর কাজ, আর তার নিছক পরিমাণ। এখানেও পাঠগুলো পাশাপাশি থাকে, কোনোটিকে অন্যটির উপরে তোলা হয় না।"
          },
          {
            "en": "Al-Qurtubi adds a short phrase that widens the circle: kathiran, halalahu wa haramahu, much, its lawful and its unlawful. In his gloss the love takes in both kinds of wealth. The neighbouring verse, 89:19, speaks of devouring inheritance, and the abridged English Ibn Kathir says on that verse, however they can get it, whether lawful or forbidden. That clause belongs to 89:19 and is mentioned only to show the setting. On this verse, the lawful-and-unlawful phrase is al-Qurtubi's, and none of the other commentaries consulted for it repeats the point.",
            "bn": "কুরতুবী ছোট্ট একটি কথা যোগ করে পরিধিটা বাড়িয়ে দেন: কাসীরান, হালালাহু ওয়া হারামাহু, অর্থাৎ অনেক, তার হালালও, তার হারামও। তাঁর ব্যাখ্যায় ভালোবাসাটা দুই ধরনের সম্পদকেই জড়িয়ে নেয়। পাশের আয়াত ৮৯:১৯ মিরাস গিলে খাওয়ার কথা বলে। সেই আয়াতের আলোচনায় ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ বলে: যেভাবে পারে সেভাবেই, হালাল হোক বা হারাম। কথাটা ৮৯:১৯ আয়াতের, এখানে শুধু প্রেক্ষাপট দেখাতে আনা হলো। এই আয়াতের বেলায় হালাল-হারামের কথাটি কুরতুবীর। এ আয়াতের জন্য সংগৃহীত অন্য কোনো তাফসীরে তা আর আসেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Rebuke Faces",
          "bn": "তিরস্কার কাদের মুখোমুখি"
        },
        "p": [
          {
            "en": "The verse speaks to a you in the plural, and the commentators give that you different breadth. At-Tabari's gloss addresses it to ayyuha al-nas, O people, which reads the charge as spoken to people at large. Ma'arif al-Qur'an calls the verse the fourth evil trait of the unbelievers and says they have an insatiable love for wealth. The abridged English Ibn Kathir heads the passage that begins at 89:17 From the Evil that the Servant does regarding Wealth, and the Muyassar simply carries its you on from the man of the preceding verses. The difference is kept here as a difference.",
            "bn": "আয়াতের সম্বোধন বহুবচনে, 'তোমরা'। এই 'তোমরা' কতটা বিস্তৃত, তাফসীরকারেরা তা ভিন্নভাবে দেখেন। তাবারীর ব্যাখ্যায় সম্বোধন 'আইয়ুহান নাস', হে মানুষ। তাতে অভিযোগটা সাধারণভাবে মানুষের প্রতি। মাআরিফুল কুরআন আয়াতটিকে বলে কাফিরদের চতুর্থ মন্দ স্বভাব, আর বলে, সম্পদের প্রতি তাদের ভালোবাসা কখনো মেটে না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৮৯:১৭ থেকে শুরু হওয়া অংশের শিরোনাম দেয়: সম্পদ নিয়ে বান্দা যে মন্দ কাজ করে। মুয়াসসার আগের আয়াতগুলোর মানুষটির কথা থেকে সোজা 'তোমরা'-তে চলে যায়। মতভেদটা এখানে মতভেদ হিসেবেই রইল।"
          },
          {
            "en": "The shape of the passage itself is plain from the text. In 89:15 and 89:16 the subject is al-insan, man, spoken of in the third person: he says, my Lord has honoured me. From 89:17 the verbs turn to the second person plural, you do not honour, and this verse keeps that address. The commentaries consulted here do not explain the turn, and this article does not supply a reason of its own. It notes only that a rebuke which was about someone becomes, in these verses, a rebuke spoken to someone's face.",
            "bn": "অংশটির গড়ন পাঠ থেকেই স্পষ্ট। ৮৯:১৫ ও ৮৯:১৬ আয়াতে কথা হচ্ছে মানুষকে নিয়ে, তার সম্পর্কে: সে বলে, আমার রব আমাকে সম্মান দিয়েছেন। ৮৯:১৭ থেকে ক্রিয়াগুলো সরাসরি সামনের লোকদের দিকে ঘুরে যায়: তোমরা সম্মান কর না। এ আয়াতও সেই সম্বোধন ধরে রাখে। সংগৃহীত তাফসীরগুলো এই মোড় ঘোরার কারণ ব্যাখ্যা করেনি, এ লেখাও নিজে থেকে কোনো কারণ বসায় না। শুধু এটুকু লক্ষ করে যে, যে তিরস্কার ছিল কারও সম্পর্কে, এই আয়াতগুলোতে তা উচ্চারিত হয় কারও মুখের ওপর।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fault Lies in Measure",
          "bn": "দোষ মাপে, বস্তুতে নয়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws the line most clearly. The word excessive, it says, indicates that love of wealth in itself, in a sober sense, is a natural instinct of man, and that has not been condemned here; what is denounced is the excessive or insatiable love of wealth. The Muyassar's mufrit points the same way, since it names a love that has passed its bound. Ibn Kathir, in the abridged English passage he groups with this verse, says that Allah gives wealth to those He loves and to those He does not love, and withholds it from both alike.",
            "bn": "রেখাটা সবচেয়ে স্পষ্ট করে টানে মাআরিফুল কুরআন। তার কথায়, 'অতিরিক্ত' শব্দটিই বুঝিয়ে দেয় যে সংযত অর্থে সম্পদের প্রতি ভালোবাসা মানুষের স্বভাবজাত, এখানে তার নিন্দা করা হয়নি। নিন্দা হয়েছে সম্পদের প্রতি মাত্রাছাড়া, কখনো না মেটা ভালোবাসার। মুয়াসসারের 'মুফরিত' শব্দও একই দিকে ইশারা করে, কারণ তা এমন ভালোবাসার নাম, যা সীমা পেরিয়ে গেছে। ইবন কাসীর এ আয়াতের সঙ্গে জুড়ে রাখা সংক্ষিপ্ত ইংরেজি অংশে বলেন, আল্লাহ যাদের ভালোবাসেন তাদেরও সম্পদ দেন, যাদের ভালোবাসেন না তাদেরও দেন। আবার দুই দলের কাছ থেকেই তা আটকেও রাখেন।"
          },
          {
            "en": "This verse speaks only of what it names: a love of wealth that the commentators call much, intense or excessive, set in a passage about people who left the orphan and the poor without their due. It licenses nothing against any living person or community, and it passes no sentence on wealth or on the people who have it. Nothing here names a group alive today, and no reader is entitled to fit the verse onto a neighbour, a class or a nation. Ibn Kathir's own conclusion keeps the matter personal: the wealthy should thank Allah, and the poor should be patient.",
            "bn": "আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: সম্পদের এমন ভালোবাসা, যাকে তাফসীরকারেরা বলেছেন অনেক, তীব্র বা মাত্রাছাড়া। আর তা এসেছে এমন এক অংশে, যেখানে কিছু মানুষ ইয়াতীম ও মিসকিনকে তাদের প্রাপ্য দেয়নি। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে আয়াতটি কোনো কিছুর অনুমতি দেয় না। সম্পদ বা সম্পদশালীদের বিরুদ্ধেও কোনো রায় দেয় না। আজকের কোনো দলের নাম এখানে নেই, আর প্রতিবেশী, কোনো শ্রেণি বা কোনো জাতির গায়ে আয়াতটি সেঁটে দেওয়ার অধিকার কোনো পাঠকের নেই। ইবন কাসীরের নিজের সিদ্ধান্তও কথাটাকে ব্যক্তির ভেতরেই রাখে: ধনী আল্লাহর শোকর করবে, গরিব সবর করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di's Companion Verses",
          "bn": "সা'দীর জোড়া আয়াত"
        },
        "p": [
          {
            "en": "As-Sa'di glosses jamm as much and intense and then adds that this is like His words: rather you prefer the life of this world, while the Hereafter is better and more lasting, at 87:16 and 87:17; and no, rather you love the immediate and leave the Hereafter, at 75:20 and 75:21. The second pair uses the same verb, tuhibbuna, you love, with a different object, al-'ajilah, the immediate. Both pairs have their own articles in this module, on 87:14 to 87:17 and on 75:20, and they are not retold here.",
            "bn": "সা'দী 'জাম্ম'-এর অর্থ করেন অনেক ও তীব্র, তারপর বলেন, এটি আল্লাহর এই বাণীর মতো: বরং তোমরা দুনিয়ার জীবনকে বেছে নাও, অথচ আখিরাত উত্তম ও স্থায়ী (৮৭:১৬ ও ৮৭:১৭)। আরও: কক্ষনো না, বরং তোমরা নগদকে ভালোবাস আর আখিরাতকে ছেড়ে দাও (৭৫:২০ ও ৭৫:২১)। দ্বিতীয় জোড়ায় একই ক্রিয়া, তুহিব্বূনা, তোমরা ভালোবাস। শুধু ভালোবাসার বিষয়টা আলাদা: আল-আজিলা, যা নগদ, হাতের কাছে। দুটি জোড়া নিয়েই এ বিভাগে আলাদা লেখা আছে, ৮৭:১৪ থেকে ৮৭:১৭ এবং ৭৫:২০ আয়াতের ওপর। সেগুলো এখানে আবার বলা হলো না।"
          },
          {
            "en": "No commentary consulted here on this verse attaches a hadith to it. Ibn Kathir's grouped passage does bring a narration from Abu Dawud, but it concerns the guardian of the orphan in 89:17, so it is left to that verse. What comes after is also left for later. Verse 89:21 opens with kalla once more, and Ma'arif al-Qur'an says that after describing these evil traits the passage returns to the main theme of the surah, the punishment of the Hereafter, beginning with the end of the world. The scenes that follow belong to their own verses.",
            "bn": "এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদিস যুক্ত করেনি। ইবন কাসীরের একসঙ্গে রাখা অংশে আবু দাউদের একটি বর্ণনা আছে বটে, তবে তা ৮৯:১৭ আয়াতের ইয়াতীমের অভিভাবক নিয়ে, তাই সেটি সেই আয়াতের জন্য রইল। পরে যা আসছে, তাও পরের জন্য রাখা হলো। ৮৯:২১ আয়াত আবার শুরু হয় 'কাল্লা' দিয়ে। মাআরিফুল কুরআন বলে, এই মন্দ স্বভাবগুলোর বর্ণনার পর অংশটি ফিরে যায় সূরার মূল বিষয়ে, আখিরাতের শাস্তিতে, আর শুরু করে দুনিয়ার সমাপ্তি দিয়ে। পরের দৃশ্যগুলো যার যার আয়াতের।"
          }
        ]
      },
      {
        "h": {
          "en": "This Article's Own Reading",
          "bn": "এ লেখার নিজের পাঠ"
        },
        "p": [
          {
            "en": "What follows is this article's own reading, not a claim of any commentator. The image the commentators give for jamm is water collecting in a basin, and a well that fills again soon after it has been drawn. Read against that image, the verse can be held up as a mirror. Is there something in me that gathers and has no outlet, so that whatever comes in mostly stays? And when some of it goes out in giving, does the wish to have it rise again at once to fill the space, the way a full well recovers its level?",
            "bn": "এখান থেকে যা আসছে, তা এ লেখার নিজের পাঠ, কোনো তাফসীরকারের দাবি নয়। 'জাম্ম'-এর জন্য তাফসীরকারেরা যে ছবি দেন, তা হাউজে জমে ওঠা পানির, আর এমন কূপের, যা সেঁচে নেওয়ার পর অল্পক্ষণেই আবার ভরে যায়। সেই ছবির পাশে রাখলে আয়াতটি আয়নার মতো সামনে ধরা যায়। আমার ভেতরে কি এমন কিছু আছে, যা শুধু জমায়, বেরোনোর কোনো পথ নেই, ফলে যা আসে তার প্রায় সবই থেকে যায়? আর দানের পথে কিছু বেরিয়ে গেলে কি তা আবার পাওয়ার ইচ্ছা সঙ্গে সঙ্গে উঠে এসে খালি জায়গাটা ভরে দেয়, যেমন ভরা কূপের পানি আবার আগের উচ্চতায় উঠে আসে?"
          },
          {
            "en": "The same reading turns back to 89:15 and 89:16, where a man measured his honour by what he was given. Taking the Muyassar's line that honour lies in obedience to Allah, the question for the reader is not how much sits in the basin, but what the love of it has kept from reaching the orphan, the poor and the heir nearby. Ma'arif al-Qur'an leaves room for an ordinary, sober love of wealth, and condemns only its excess. The reader can ask, honestly and in private, on which side of that line the heart stands today.",
            "bn": "এই পাঠ আবার ফিরে যায় ৮৯:১৫ ও ৮৯:১৬ আয়াতে, যেখানে এক মানুষ নিজের সম্মান মেপেছিল কী পেয়েছে তা দিয়ে। মুয়াসসারের কথা ধরলে সম্মান আল্লাহর আনুগত্যে। তাহলে পাঠকের প্রশ্ন এই নয় যে হাউজে কতটা জমেছে। প্রশ্ন হলো, সেই ভালোবাসা কাছের ইয়াতীম, মিসকিন আর উত্তরাধিকারীর কাছে কী পৌঁছাতে দেয়নি। মাআরিফুল কুরআন সম্পদের প্রতি সাধারণ, সংযত ভালোবাসার জায়গা রেখেছে, নিন্দা করেছে শুধু তার বাড়াবাড়ির। আপনি নিজেকে সৎভাবে, নিভৃতে জিজ্ঞেস করতে পারেন, আজ আপনার মন সেই রেখার কোন পাশে দাঁড়িয়ে।"
          }
        ]
      }
    ]
  },
  "89:23": {
    "sections": [
      {
        "h": {
          "en": "Hell, Brought Into View",
          "bn": "চোখের সামনে আনা জাহান্নাম"
        },
        "p": [
          {
            "en": "Wa-ji'a yawma'idhin bi-jahannam: and Hell is brought, that Day. The verse is the third line of a scene that opens in 89:21, where the earth is pounded flat, pounding upon pounding, and continues in 89:22 with the coming of your Lord and the angels rank upon rank. With kalla, which Ibn Kathir's English abridgement glosses as truly, the surah turns from the man who misread wealth and want to the Day on which such readings are answered. This verse stands at the centre of that turn.",
            "bn": "ওয়া জী'আ ইয়াওমাইযিন বিজাহান্নাম: আর সেদিন জাহান্নামকে আনা হবে। একটি দৃশ্যের তৃতীয় লাইন এই আয়াত। দৃশ্যের শুরু ৮৯:২১ আয়াতে, যেখানে পৃথিবীকে চূর্ণ করে সমান করে দেওয়া হয়, আঘাতের পর আঘাতে। তারপর ৮৯:২২ আয়াতে আসে তোমার রবের আগমন, আর ফেরেশতারা দাঁড়ায় সারির পর সারি। ৮৯:২১-এর শুরুতে কাল্লা শব্দটি আছে, ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ যার অর্থ করে নিশ্চয়ই। এখান থেকে সম্পদ আর অভাবের ভুল ব্যাখ্যা করা মানুষটির কথা ছেড়ে সূরা এবার সেই দিনের দিকে ফেরে, যেদিন এসব ব্যাখ্যার জবাব মিলবে। এই মোড়ের ঠিক মাঝখানে দাঁড়িয়ে আছে আয়াতটি।"
          },
          {
            "en": "The verb ji'a is passive: Hell is brought, and the verse does not name who brings it. At-Tabari supplies the agent in his paraphrase: Allah brought Hell that Day. The word yawma'idhin, that Day, then comes twice in the verse's nine Arabic words, once for Hell's arrival and once for man's remembering. Al-Baghawi ties the second to the first in a short gloss: that Day means the day Hell is brought. The remembering is set beside the sight of the Fire, not before it.",
            "bn": "জী'আ ক্রিয়াটি কর্মবাচ্য। জাহান্নামকে আনা হবে, কিন্তু কে আনবেন আয়াত তা বলে না। তাবারী নিজের ব্যাখ্যায় কর্তাটি জুড়ে দেন: সেদিন আল্লাহ জাহান্নামকে আনবেন। আয়াতের নয়টি আরবি শব্দের মধ্যে ইয়াওমাইযিন, অর্থাৎ সেদিন, এসেছে দুবার। একবার জাহান্নাম আসার কথায়, আরেকবার মানুষের মনে পড়ার কথায়। বাগাভী ছোট্ট এক ব্যাখ্যায় দ্বিতীয়টিকে প্রথমটির সঙ্গে বেঁধে দেন: সেদিন মানে যেদিন জাহান্নামকে আনা হবে। মানুষের মনে পড়াটা তাই আগুন দেখার আগে নয়, দেখার পাশাপাশি।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Lord Comes: Four Readings",
          "bn": "রবের আগমন: চার রকম পাঠ"
        },
        "p": [
          {
            "en": "The verse before speaks of a coming: wa-ja'a rabbuka wa-l-malaku saffan saffan, and your Lord comes, and the angels, rank upon rank. The commentators fetched for this page read that clause in more than one way, and this article reports them rather than choosing. At-Tabari restates it plainly: when your Lord comes, O Muhammad, and His angels, rank after rank. As-Sa'di writes that Allah comes to judge between His servants in shadows of cloud, and that the angels of each heaven come as one rank, surrounding the creatures beneath them, ranks of humility before the Compelling King.",
            "bn": "আগের আয়াতে এক আগমনের কথা: ওয়া জা'আ রাব্বুকা ওয়াল মালাকু সাফ্ফান সাফ্ফা, আর তোমার রব আসবেন, আর ফেরেশতারা সারির পর সারি। এ পাতার জন্য যে তাফসীরগুলো আনা হয়েছে, সেগুলো এই বাক্যটি একাধিকভাবে পড়ে। এই লেখা কোনো একটিকে বেছে নেয় না, সবগুলোই তুলে ধরে। তাবারী সোজাসুজি আবার বলেন: হে মুহাম্মাদ, যখন তোমার রব আসবেন আর তাঁর ফেরেশতারা আসবে সারির পর সারি। সা'দী লেখেন, আল্লাহ মেঘের ছায়ায় আসবেন বান্দাদের মধ্যে ফয়সালা করতে। প্রতিটি আসমানের ফেরেশতারা আসবে এক এক সারি হয়ে, নিচের সৃষ্টিকে ঘিরে রাখবে। মহাপরাক্রমশালী বাদশাহর সামনে এগুলো বিনয় আর নত হওয়ার সারি।"
          },
          {
            "en": "Ibn Kathir's Arabic sets the coming after the first and greatest intercession, which he says he explained under Surat al-Isra', and then writes: the Lord comes for the judgement between His creatures as He wills, and the angels come before Him in ranks. Al-Qurtubi and al-Baghawi relay a different reading from al-Hasan: His command and His decree came. Al-Qurtubi calls this a case of an omitted first term in the phrase. Al-Baghawi sets beside it a single word from al-Kalbi: He descends.",
            "bn": "ইবন কাসীর তাঁর আরবি তাফসীরে এই আগমনকে রাখেন প্রথম ও সবচেয়ে বড় শাফাআতের পরে। সেই শাফাআতের ব্যাখ্যা তিনি সূরা ইসরায় দিয়েছেন বলে উল্লেখ করেন। তারপর লেখেন: রব সৃষ্টির মধ্যে ফয়সালা করতে আসবেন যেভাবে তিনি চান, আর ফেরেশতারা তাঁর সামনে আসবে সারি বেঁধে। কুরতুবী ও বাগাভী হাসান থেকে ভিন্ন এক পাঠ বর্ণনা করেন: তাঁর আদেশ ও তাঁর ফয়সালা এসেছে। কুরতুবীর মতে এখানে বাক্যের প্রথম অংশটি উহ্য রাখা হয়েছে। বাগাভী এর পাশে কালবীর একটিমাত্র কথা রাখেন: তিনি নেমে আসবেন।"
          },
          {
            "en": "Al-Qurtubi lists more. Some said the Lord came to them with tremendous signs, the coming of the signs counted as His coming to magnify their weight; others, that doubts vanish that Day and knowledge becomes compelled. He ends with a group he calls the people of allusion, who say His power appeared and prevailed, and the passage goes on that Allah is not described as moving from place to place. These are the positions the fetched texts hold. The article sets them side by side and settles nothing between them; the verse's own weight falls on what follows.",
            "bn": "কুরতুবী আরও কয়েকটি মত আনেন। কেউ বলেছেন, রব তাদের কাছে বিরাট সব নিদর্শন নিয়ে আসবেন। নিদর্শনগুলোর গুরুত্ব বোঝাতে সেগুলোর আগমনকেই তাঁর আগমন বলা হয়েছে। আবার কেউ বলেছেন, সেদিন সব সংশয় দূর হয়ে যাবে, জ্ঞান হয়ে যাবে অনিবার্য। শেষে তিনি আনেন একদলের কথা, যাদের তিনি বলেন আহলুল ইশারা। তাদের মতে, তাঁর কুদরত প্রকাশ পাবে আর সব কিছু ছেয়ে ফেলবে। বর্ণনাটি আরও বলে, আল্লাহকে এক জায়গা থেকে আরেক জায়গায় সরে যাওয়ার গুণে বর্ণনা করা হয় না। আনা তাফসীরগুলোতে এই মতগুলোই আছে। এ লেখা সেগুলো পাশাপাশি রাখে, কোনোটির পক্ষে রায় দেয় না। আয়াতের নিজের জোর পড়েছে পরের কথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Seventy Thousand Bridles",
          "bn": "সত্তর হাজার লাগাম"
        },
        "p": [
          {
            "en": "How is Hell brought? Ibn Kathir in both his Arabic and the English abridgement, and al-Qurtubi, cite a report that Muslim placed in his Sahih. In Muslim's wording, 'Abdullah ibn Mas'ud reported the Messenger of Allah ﷺ as saying: \"Hell would be brought on that day (the Day of Judgment) with seventy thousand bridles, and seventy thousand angels dragging each bridle\" (Sahih Muslim 2842). The narration answers the passive verb of the verse: it names the angels as the ones who drag it, bridle by bridle.",
            "bn": "জাহান্নামকে আনা হবে কীভাবে? ইবন কাসীর তাঁর আরবি তাফসীরে ও সংক্ষিপ্ত ইংরেজি সংস্করণে, আর কুরতুবী, তিনজনই এমন একটি বর্ণনা আনেন যা মুসলিম তাঁর সহীহ গ্রন্থে রেখেছেন। মুসলিমের ভাষায়, আবদুল্লাহ ইবন মাসঊদ (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: \"সেদিন জাহান্নামকে আনা হবে, তার থাকবে সত্তর হাজার লাগাম, আর প্রতিটি লাগামের সঙ্গে থাকবে সত্তর হাজার ফেরেশতা, তারা তাকে টেনে আনবে।\" (সহীহ মুসলিম ২৮৪২)। আয়াতের কর্মবাচ্য ক্রিয়ার একটা উত্তর মেলে এখানে। বর্ণনাটি জানিয়ে দেয়, লাগামে লাগামে তাকে টেনে আনবে ফেরেশতারা।"
          },
          {
            "en": "Ibn Kathir adds a note on how it travelled. At-Tirmidhi recorded it through the same chain, and also through Sufyan ath-Thawri as Ibn Mas'ud's own saying, without raising it to the Prophet ﷺ; Ibn Jarir, he says, has it that way too. At-Tabari's tafsir bears this out. He gives it from Ibn Mas'ud as Ibn Mas'ud's words: it is brought, led by seventy thousand reins, with seventy thousand angels at each rein. He gives it again from Abu Wa'il in nearly the same words. Muslim's chain raises it, and his wording is the one quoted here.",
            "bn": "বর্ণনাটি কীভাবে পৌঁছেছে, সে বিষয়ে ইবন কাসীর একটি কথা যোগ করেন। তিরমিযী এটি একই সনদে বর্ণনা করেছেন। আবার সুফিয়ান সাওরীর সূত্রে এটিকে ইবন মাসঊদ (রাঃ)-এর নিজের কথা হিসেবেও এনেছেন, নবী ﷺ পর্যন্ত পৌঁছাননি। ইবন কাসীর বলেন, ইবন জারীরও এভাবেই এনেছেন। তাবারীর তাফসীর তা মিলিয়ে দেয়। তিনি এটি ইবন মাসঊদ (রাঃ)-এর নিজের কথা হিসেবে আনেন: সত্তর হাজার লাগামে টেনে তাকে আনা হবে, প্রতিটি লাগামে সত্তর হাজার ফেরেশতা। আবু ওয়াইল থেকেও প্রায় একই কথা তিনি আবার আনেন। মুসলিমের সনদ এটিকে নবী ﷺ পর্যন্ত পৌঁছায়। এখানে তাঁর ভাষাটিই উদ্ধৃত হয়েছে।"
          },
          {
            "en": "The other commentators add detail, none of it raised to the Prophet ﷺ. Qatadah, in at-Tabari, says it is brought bridled. As-Sa'di says the angels lead it with chains. Al-Qurtubi and al-Baghawi give, from Ibn Mas'ud and Muqatil, that it comes raging and roaring until it is set up to the left of the Throne. Al-Qurtubi also relays, without a chain or a grading, a longer account from Abu Sa'id al-Khudri and 'Ali about how the Prophet ﷺ received this verse. It is mentioned here and nothing is built on it.",
            "bn": "বাকি তাফসীরকারেরা আরও কিছু খুঁটিনাটি যোগ করেন, তবে তার কোনোটিই নবী ﷺ পর্যন্ত পৌঁছানো কথা নয়। তাবারীর বর্ণনায় কাতাদা বলেন, তাকে লাগাম পরিয়ে আনা হবে। সা'দী বলেন, ফেরেশতারা তাকে শিকল দিয়ে টেনে আনবে। কুরতুবী ও বাগাভী ইবন মাসঊদ (রাঃ) ও মুকাতিল থেকে আনেন, সে আসবে ক্রোধে ফুঁসতে ফুঁসতে, গর্জন করতে করতে, শেষে তাকে আরশের বাঁ দিকে স্থাপন করা হবে। কুরতুবী আবু সাঈদ খুদরী (রাঃ) ও আলী (রাঃ) থেকে আরেকটি দীর্ঘ বর্ণনাও আনেন, নবী ﷺ এই আয়াত কীভাবে গ্রহণ করেছিলেন সে বিষয়ে। কিন্তু তিনি এর সনদ বা মান কিছুই দেননি। তাই এখানে শুধু উল্লেখ করা হলো, এর উপর কিছু দাঁড় করানো হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Remembers Then",
          "bn": "কী মনে পড়ে তখন"
        },
        "p": [
          {
            "en": "Yawma'idhin yatadhakkaru al-insan: that Day man remembers. The commentators differ on what he remembers. Ibn Kathir says his deeds, what he sent ahead in the early part of his life and the late. At-Tabari says his neglect, in the world, of obeying Allah and of the good deeds that would have brought him near to Him. As-Sa'di says what he sent ahead of good and of evil. Ma'arif al-Qur'an takes tadhakkur here to mean realising: the truth he had set aside now dawns on him.",
            "bn": "ইয়াওমাইযিন ইয়াতাযাক্কারুল ইনসান: সেদিন মানুষের মনে পড়বে। কী মনে পড়বে, তা নিয়ে তাফসীরকারদের কথায় ভিন্নতা আছে। ইবন কাসীর বলেন, তার আমল, জীবনের শুরুতে আর শেষে সে যা আগে পাঠিয়েছে। তাবারী বলেন, দুনিয়ায় আল্লাহর আনুগত্যে তার অবহেলা, আর যে নেক আমল তাকে আল্লাহর কাছে নিয়ে যেত, তাতে তার ঢিলেমি। সা'দী বলেন, ভালো-মন্দ যা কিছু সে আগে পাঠিয়েছে। মাআরিফুল কুরআন এখানে তাযাক্কুর শব্দের অর্থ ধরে উপলব্ধি করা। যে সত্যকে সে এতদিন সরিয়ে রেখেছিল, এখন তা তার কাছে স্পষ্ট হয়ে ওঠে।"
          },
          {
            "en": "A second line of comment reads the verb as more than memory. Al-Muyassar, al-Qurtubi and al-Baghawi all gloss it with two verbs: he takes the warning, and he repents. Who is meant? Al-Muyassar and al-Baghawi name the disbeliever. Al-Qurtubi gives two possibilities: the disbeliever, or the person whose chief concern was this world. Ma'arif speaks of the unbelievers coming to see the errors of their ways. In the verse itself the word stays general, al-insan, man; the narrowing is the commentators' reading, and it is reported here as theirs.",
            "bn": "তাফসীরের আরেকটি ধারা এই ক্রিয়াকে শুধু স্মৃতি হিসেবে পড়ে না। মুয়াসসার, কুরতুবী ও বাগাভী তিনজনই এর ব্যাখ্যা দেন দুটি ক্রিয়া দিয়ে: সে উপদেশ গ্রহণ করবে আর তওবা করবে। কার কথা বলা হচ্ছে? মুয়াসসার ও বাগাভী বলেন, কাফির। কুরতুবী দুটি সম্ভাবনা রাখেন: কাফির, অথবা দুনিয়াই ছিল যার প্রধান চিন্তা। মাআরিফুল কুরআন বলে, কাফিররা তখন নিজেদের পথের ভুল দেখতে পাবে। আয়াতে কিন্তু শব্দটি সাধারণ, আল ইনসান, মানুষ। অর্থকে এভাবে সীমিত করা তাফসীরকারদের পাঠ, আর এখানে তা তাঁদের কথা হিসেবেই বলা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "From Where, Then, the Benefit?",
          "bn": "তখন লাভ আসবে কোথা থেকে"
        },
        "p": [
          {
            "en": "Then wa-anna lahu adh-dhikra, three Arabic words that end in a question: and how, for him, the remembrance? Ibn Kathir gives the sense: how will remembering benefit him then? At-Tabari: from what quarter is the reminding his? He cites Ibn 'Abbas glossing it simply as and how for him. As-Sa'di answers the question in his gloss: its time has passed and its season is gone. Al-Muyassar gives the reason in a clause: he neglected taking warning and repenting in the world, and their time has slipped away.",
            "bn": "তারপর ওয়া আন্না লাহুয যিকরা, তিনটি আরবি শব্দ, শেষ হয় এক প্রশ্নে: তখন মনে পড়া তার কী কাজে আসবে? ইবন কাসীর অর্থটা বলে দেন: তখন মনে পড়া তার কী উপকারে আসবে? তাবারী বলেন: উপদেশ তার কাছে আসবে কোন পথে? তিনি ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা আনেন সংক্ষেপে: আর তার জন্য কীভাবে? সা'দী নিজের ব্যাখ্যাতেই প্রশ্নের জবাব দেন: এর সময় পেরিয়ে গেছে, এর মৌসুম চলে গেছে। মুয়াসসার এক বাক্যে কারণটা বলেন: দুনিয়ায় সে উপদেশ নেওয়া আর তওবা করায় অবহেলা করেছে, আর এখন সে দুটির সময় হাতছাড়া হয়ে গেছে।"
          },
          {
            "en": "Al-Qurtubi notices a tension in the wording. The verse says he remembers, then asks how the remembrance can be his. He relays az-Zamakhshari's answer: a word must be understood as dropped, the benefit of the remembrance, or the two clauses would contradict each other. So al-Qurtubi gives two glosses: from where would taking warning and repenting be his, when he neglected them in the world; and from where the benefit of remembering. Al-Baghawi relays az-Zajjaj in a sharper line: he shows repentance, and from where would repentance be his?",
            "bn": "কুরতুবী আয়াতের শব্দে একটা টান লক্ষ করেন। আয়াত বলছে তার মনে পড়বে, আবার প্রশ্ন করছে মনে পড়া তার কীভাবে হবে। এর জবাবে তিনি যামাখশারীর কথা আনেন: এখানে একটি শব্দ উহ্য ধরতে হবে, মনে পড়ার উপকার। নইলে দুই অংশ পরস্পরবিরোধী হয়ে যায়। তাই কুরতুবী দুটি ব্যাখ্যা দেন। দুনিয়ায় যে উপদেশ আর তওবায় অবহেলা করেছে, এখন তা তার জুটবে কোথা থেকে? অথবা, মনে পড়ার উপকার সে পাবে কোথা থেকে? বাগাভী যাজ্জাজের আরও ধারালো এক বাক্য আনেন: সে তওবার কথা মুখে আনবে, কিন্তু তওবা তার জুটবে কোথা থেকে?"
          },
          {
            "en": "Ma'arif al-Qur'an draws the line the others share. It is in this present world that faith and good deeds benefit people; the Hereafter is the place only for reckoning and recompense. The remembering of 89:23, then, is real and it is complete. What it lacks is a place to act. That is the verse's quiet pressure on whoever reads it now: the same remembering, done today, still has somewhere to go, a deed to mend, a debt to pay.",
            "bn": "অন্যরা যে সীমারেখা মেনে চলেন, মাআরিফুল কুরআন তা স্পষ্ট করে টানে। ঈমান আর নেক আমল মানুষের উপকারে আসে এই দুনিয়াতেই। আখিরাত কেবল হিসাব আর প্রতিদানের জায়গা। তাহলে ৮৯:২৩ আয়াতের সেই মনে পড়া সত্যি, আর পুরোপুরিই। শুধু কাজে লাগানোর জায়গাটা আর নেই। যে আজ আয়াতটি পড়ছে, তার উপর এখানেই আয়াতের নীরব চাপ। আজ যদি ঠিক এভাবেই মনে পড়ে, তার যাওয়ার জায়গা এখনো আছে। শোধরানোর মতো কোনো আমল, শোধ করার মতো কোনো ঋণ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Wish for the Lasting Life",
          "bn": "চিরস্থায়ী জীবনের জন্য আফসোস"
        },
        "p": [
          {
            "en": "The next verse gives the remembering a voice: yaqulu ya laytani qaddamtu li-hayati, he will say, would that I had sent ahead for my life. At-Tabari reads it as the anguish of the son of Adam on the Day of Resurrection at his neglect of good deeds in the world: would that I had sent ahead, for this life of mine after which there is no death, what would save me from Allah's anger. Mujahid, in at-Tabari, glosses my life in a single word: the Hereafter. Qatadah says that there is the long life.",
            "bn": "পরের আয়াতে এই মনে পড়া মুখের ভাষা পায়: ইয়াকূলু ইয়া লাইতানী কাদ্দামতু লিহায়াতী, সে বলবে, হায়, আমার জীবনের জন্য যদি কিছু আগে পাঠাতাম! তাবারী একে পড়েন কিয়ামতের দিন আদম সন্তানের হাহাকার হিসেবে। দুনিয়ায় নেক আমলে সে অবহেলা করেছিল। এখন বলছে, আমার এই জীবনের জন্য, যার পরে আর মৃত্যু নেই, এমন কিছু যদি আগে পাঠাতাম, যা আমাকে আল্লাহর গজব থেকে বাঁচাত! তাবারীর বর্ণনায় মুজাহিদ আমার জীবন কথাটির ব্যাখ্যা দেন এক শব্দে: আখিরাত। কাতাদা বলেন, আসল দীর্ঘ জীবন তো সেখানেই।"
          },
          {
            "en": "Al-Qurtubi offers other readings of the small word li. One takes it as in: in my life. Another keeps it as for: for a life with no death in it. A third notes that the life of the people of the Fire is no pleasant life at all, so the wish means: would that I had sent ahead good for my rescue from the Fire. As-Sa'di draws a lesson from the verse: the life worth striving for, in its root and its completion, is the life in the abode of permanence.",
            "bn": "লি, ছোট্ট এই অব্যয়টির আরও কয়েকটি পাঠ দেন কুরতুবী। এক মতে এর অর্থ মধ্যে: আমার জীবনের মধ্যে। আরেক মতে এর অর্থ জন্য: এমন জীবনের জন্য, যাতে মৃত্যু নেই। তৃতীয় মতটি বলে, জাহান্নামিদের জীবন আসলে কোনো সুখের জীবনই নয়। তাই আফসোসের অর্থ দাঁড়ায়: জাহান্নাম থেকে বাঁচার জন্য যদি কিছু ভালো কাজ আগে পাঠাতাম! সা'দী আয়াত থেকে একটি শিক্ষা বের করেন। যে জীবনের জন্য চেষ্টা করা উচিত, তার মূলে এবং তার পূর্ণতায়, তা হলো চিরস্থায়ী আবাসের জীবন।"
          }
        ]
      },
      {
        "h": {
          "en": "Active or Passive at 89:25",
          "bn": "৮৯:২৫-এ দুই কিরাআত"
        },
        "p": [
          {
            "en": "Then 89:25 and 89:26: fa-yawma'idhin la yu'adhdhibu 'adhabahu ahad, wa la yuthiqu wathaqahu ahad. Here the readings differ, and the meaning moves with them. At-Tabari reports that the readers of the cities read both verbs with a kasrah, yu'adhdhibu and yuthiqu, in the active voice, while al-Kisa'i read them with a fathah, yu'adhdhabu and yuthaqu, in the passive. Al-Baghawi names al-Kisa'i and Ya'qub for the fathah. Both are canonical readings of the Qur'an, and each yields its own sense.",
            "bn": "এরপর ৮৯:২৫ ও ৮৯:২৬: ফাইয়াওমাইযিল লা ইউআযযিবু আযাবাহু আহাদ, ওয়া লা ইউসিকু ওয়াসাকাহু আহাদ। এখানে কিরাআত ভিন্ন, আর কিরাআতের সঙ্গে অর্থও বদলায়। তাবারী জানান, বিভিন্ন শহরের কারীরা দুটি ক্রিয়াই পড়েছেন যের দিয়ে, ইউআযযিবু আর ইউসিকু, কর্তৃবাচ্যে। আর কিসাঈ পড়েছেন যবর দিয়ে, ইউআযযাবু আর ইউসাকু, কর্মবাচ্যে। বাগাভী যবরের পাঠে কিসাঈর সঙ্গে ইয়াকুবের নামও বলেন। দুটিই কুরআনের স্বীকৃত কিরাআত, আর প্রতিটি থেকে আসে নিজস্ব অর্থ।"
          },
          {
            "en": "On the active reading, the pronoun in his punishment returns to Allah. Al-Qurtubi gives this as the view of Ibn 'Abbas and al-Hasan: none punishes as Allah punishes, and none binds as He binds. Al-Hasan, in at-Tabari, says why the comparison is made: Allah knew there is punishment and binding in this world, so He said that no one in the world punishes as He will punish. Ibn Kathir's Arabic: none is more severe in punishing than Allah in punishing whoever disobeyed Him. As-Sa'di adds that they are yoked together in chains of fire.",
            "bn": "কর্তৃবাচ্যের পাঠে আযাবাহু, তাঁর শাস্তি, এই সর্বনাম ফেরে আল্লাহর দিকে। কুরতুবী একে ইবন আব্বাস (রাঃ) ও হাসানের মত বলে উল্লেখ করেন: আল্লাহ যেমন শাস্তি দেন, তেমন শাস্তি কেউ দিতে পারে না। তিনি যেমন বাঁধেন, তেমন বাঁধতেও কেউ পারে না। তুলনাটা কেন, তাবারীর বর্ণনায় হাসান তা বলেন। আল্লাহ জানতেন, দুনিয়াতেও শাস্তি আছে, বাঁধন আছে। তাই তিনি বললেন, দুনিয়ার কেউ তাঁর মতো শাস্তি দিতে পারে না। ইবন কাসীরের আরবি তাফসীরে আছে, যে আল্লাহর নাফরমানি করেছে, তাকে আল্লাহ যে শাস্তি দেবেন, তার চেয়ে কঠিন শাস্তি কারও নেই। সা'দী যোগ করেন, তাদের আগুনের শিকলে একসঙ্গে বেঁধে রাখা হবে।"
          },
          {
            "en": "On the passive reading the sense turns to the one punished: no one is punished as he is punished that Day, no one bound as he is bound. Al-Qurtubi notes that Abu 'Ubayd and Abu Hatim chose this reading, the pronoun then referring to the disbeliever. At-Tabari, for his part, preferred the reading of the city readers. Al-Qurtubi also relays Abu 'Ali's remark that even on the majority reading the pronoun may be the disbeliever's, with ahad meaning the angels who carry out the punishment. Read either way, the two verses say this punishment has no equal.",
            "bn": "কর্মবাচ্যের পাঠে অর্থ ঘুরে যায় শাস্তিপ্রাপ্ত লোকটির দিকে: সেদিন তাকে যেমন শাস্তি দেওয়া হবে, তেমন শাস্তি আর কাউকে দেওয়া হবে না। তাকে যেমন বাঁধা হবে, তেমন বাঁধা হবে না আর কাউকে। কুরতুবী জানান, আবু উবাইদ ও আবু হাতিম এই পাঠটি বেছে নিয়েছিলেন। তখন সর্বনামটি ফেরে কাফিরের দিকে। তাবারী অবশ্য শহরের কারীদের পাঠটিকেই অগ্রাধিকার দিয়েছেন। কুরতুবী আবু আলীর একটি মন্তব্যও আনেন। তাঁর মতে অধিকাংশের পাঠেও সর্বনামটি কাফিরের দিকে ফিরতে পারে, তখন আহাদ মানে শাস্তি দেওয়ার দায়িত্বে থাকা ফেরেশতারা। যেভাবেই পড়া হোক, আয়াত দুটি বলে, এই শাস্তির কোনো তুলনা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Remembering While It Still Counts",
          "bn": "যখন মনে পড়ার দাম আছে"
        },
        "p": [
          {
            "en": "None of the commentators fetched for this page gives an established occasion of revelation for these verses, so they are read in their place: the close of a warning that began with the man who took wealth for honour and want for disgrace. Muslim's report of the seventy thousand bridles is the one sound narration the tafsirs attach here, and it describes Hell's arrival, not the remembering. Everything else about the remembering comes from the verse itself and from the commentators named above.",
            "bn": "এ পাতার জন্য আনা তাফসীরগুলোর কোনোটিই এই আয়াতগুলোর প্রতিষ্ঠিত কোনো শানে নুযূল দেয় না। তাই আয়াতগুলো পড়তে হয় তাদের নিজের জায়গায় রেখে। এগুলো এক সতর্কবাণীর সমাপ্তি, যার শুরু সেই মানুষটিকে দিয়ে, যে সম্পদকে সম্মান আর অভাবকে অপমান ভেবেছিল। সত্তর হাজার লাগামের বর্ণনাটি, যা মুসলিম এনেছেন, এখানে তাফসীরগুলোর আনা একমাত্র সহীহ বর্ণনা। আর সেটি জাহান্নামের আগমনের কথা বলে, মনে পড়ার কথা নয়। মনে পড়া নিয়ে বাকি সব কথা এসেছে আয়াত থেকে, আর উপরে যাঁদের নাম এসেছে সেই তাফসীরকারদের কাছ থেকে।"
          },
          {
            "en": "The verses describe what the text describes. Some commentators name the disbeliever, or a person whose concern was this world; that reading licenses nothing against any living person or community, and places no reader in the Fire. Its pressure points inward. The man of 89:23 remembers everything at the moment remembering can do nothing. The reader of 89:23 still stands where remembering can become repentance, a good deed sent ahead, a wrong put right. That is the whole distance between him and us, and it is measured in time.",
            "bn": "আয়াতগুলো যা বলে, শুধু তা-ই বলে। কোনো কোনো তাফসীরকার এখানে কাফিরের কথা বলেন, অথবা দুনিয়াই ছিল যার প্রধান চিন্তা তার কথা। এই পাঠ আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি দেয় না, আর কোনো পাঠককে জাহান্নামে বসিয়েও দেয় না। এর চাপ ভেতরের দিকে। ৮৯:২৩ আয়াতের মানুষটির সব কিছু মনে পড়ে ঠিক তখন, যখন মনে পড়ায় আর কিছু হয় না। আর যে আজ আয়াতটি পড়ছে, সে এখনো এমন জায়গায় দাঁড়িয়ে, যেখানে মনে পড়া হয়ে উঠতে পারে তওবা, আগে পাঠানো কোনো নেক আমল, শুধরে নেওয়া কোনো অন্যায়। তার আর আমাদের মাঝে পুরো দূরত্ব এটুকুই, আর তা মাপা হয় সময়ে।"
          }
        ]
      }
    ]
  },
  "89:27-30": {
    "sections": [
      {
        "h": {
          "en": "After the Man Who Wished",
          "bn": "আফসোসকারীর পরেই এই ডাক"
        },
        "p": [
          {
            "en": "Ya ayyatuha an-nafsu al-mutma'innah, irji'i ila rabbiki radiyatan mardiyyah, fa-dkhuli fi 'ibadi, wa-dkhuli jannati: O soul at rest, return to your Lord, well-pleased and well-pleasing; enter among My servants, and enter My Garden. The four verses close al-Fajr straight after 89:23 to 89:26, where Hell is brought near, man remembers too late and wishes he had sent ahead for his life, and none punishes or binds as Allah does. Ibn Kathir's English abridgement says that part concerns the criminals and wrongdoers.",
            "bn": "ইয়া আইয়্যাতুহান নাফসুল মুতমাইন্নাহ, ইরজিঈ ইলা রাব্বিকি রাদিয়াতাম মারদিয়্যাহ, ফাদখুলী ফী ইবাদী, ওয়াদখুলী জান্নাতী: হে প্রশান্ত আত্মা, তোমার রবের দিকে ফিরে এসো সন্তুষ্ট হয়ে, সন্তোষভাজন হয়ে; আমার বান্দাদের মধ্যে শামিল হও, আর আমার জান্নাতে প্রবেশ করো। চারটি আয়াতে সূরা ফজর শেষ হয়। ঠিক আগে ৮৯:২৩ থেকে ৮৯:২৬ আয়াতের দৃশ্য: জাহান্নামকে কাছে আনা হয়েছে, মানুষ বড় দেরিতে উপলব্ধি করছে, আফসোস করছে, হায়, নিজের জীবনের জন্য যদি কিছু আগে পাঠাতাম! আর সেদিন আল্লাহর মতো শাস্তি কেউ দেবে না, তাঁর মতো বাঁধবেও না। ইবন কাসীরের ইংরেজি সংক্ষেপ বলে, এ অংশ অপরাধী ও জালিমদের নিয়ে।"
          },
          {
            "en": "Al-Qurtubi names the turn: having described the one whose concern was this world, who suspected Allah both in enriching him and in making him poor, the surah now describes the one whose soul rests in Allah, submits to His command and relies on Him. As-Sa'di frames it alike. Verses 89:23 to 89:26 describe what the text describes and license nothing against any living person or community. The surah's lines on 'Ad (89:6 and 89:7), on urging the poor's feeding (89:18) and on loving wealth (89:20) have pages of their own.",
            "bn": "মোড়টা কুরতুবী চিনিয়ে দেন। দুনিয়াই যার একমাত্র চিন্তা, যে আল্লাহ সচ্ছলতা দিলেও তাঁকে সন্দেহ করে, অভাব দিলেও, তার কথা বলার পর সূরা এবার বলছে সেই মানুষের কথা, যার মন আল্লাহতে স্থির হয়েছে, যে তাঁর হুকুম মেনে নিয়েছে, তাঁর উপর ভরসা রেখেছে। সা'দীও কথাটা এভাবেই সাজান। ৮৯:২৩ থেকে ৮৯:২৬ আয়াত কেবল সেটুকুই বর্ণনা করে যা পাঠে আছে। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এ আয়াতগুলো দেয় না। আদ জাতি (৮৯:৬ ও ৮৯:৭), গরিবকে খাওয়াতে উৎসাহ দেওয়া (৮৯:১৮) আর সম্পদের প্রতি ভালোবাসা (৮৯:২০) নিয়ে এ সূরার আয়াতগুলোর আলাদা পাতা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Settled on a Promise",
          "bn": "প্রতিশ্রুতিতে স্থির মন"
        },
        "p": [
          {
            "en": "At-Tabari opens by saying the verse reports what the angels say to Allah's friends on the Day of Resurrection. He defines al-mutma'innah as the soul that came to rest in Allah's promise of honour in the Hereafter, given to the people of faith in this world, and so believed it. Those he lists near that reading: Ibn 'Abbas, the believing soul; Qatadah, the believer whose soul rested in what Allah promised; Qatadah with al-Hasan, at rest in what Allah said and believing it.",
            "bn": "তাবারী শুরুতেই বলেন, আয়াতটি কিয়ামতের দিন আল্লাহর বন্ধুদের প্রতি ফেরেশতাদের কথার খবর দিচ্ছে। তাঁর ব্যাখ্যায় মুতমাইন্নাহ সেই আত্মা, যে আল্লাহর প্রতিশ্রুতিতে নিশ্চিন্ত হয়েছে। দুনিয়াতেই আল্লাহ ঈমানদারদের কথা দিয়েছিলেন আখিরাতে সম্মানের, আর এই আত্মা সে কথা সত্য বলে মেনেছে। এর কাছাকাছি যাঁরা বলেছেন, তাবারী তাঁদের নাম দেন। ইবন আব্বাস (রাঃ): বিশ্বাসী আত্মা। কাতাদা: সেই মুমিন, আল্লাহর ওয়াদায় যার মন স্থির হয়েছে। কাতাদা ও হাসান একসঙ্গে: আল্লাহ যা বলেছেন তাতে নিশ্চিন্ত, আর তা সত্য বলে মেনে নেওয়া আত্মা।"
          },
          {
            "en": "Others, at-Tabari says, took it as the soul certain that Allah is its Lord and yielding to whatever He does with it. Mujahid, through a string of chains, says it became certain that Allah is its Lord and steadied its heart for His command and obedience; one chain adds the turning, humbled soul. Ibn Kathir's Arabic gives three words: still, firm, and turning along with the truth. As-Sa'di: at rest in the remembrance of Allah, settled in His love, its eye cooled by Allah.",
            "bn": "তাবারী জানান, অন্যরা বুঝেছেন অন্যভাবে: যে আত্মা নিশ্চিত জানে আল্লাহই তার রব, আর তিনি তার সঙ্গে যা-ই করুন, মেনে নেয়। একাধিক সূত্রে মুজাহিদের কথা আসে: সে নিশ্চিত হয়েছে যে আল্লাহই তার রব, আর তাঁর হুকুম ও আনুগত্যের জন্য নিজের মনকে শক্ত করে বেঁধেছে। একটি সূত্রে যোগ হয়েছে: আল্লাহমুখী, বিনয়ে নত আত্মা। ইবন কাসীর আরবিতে তিনটি শব্দে বলেন: শান্ত, অটল, আর হকের সঙ্গে সঙ্গে ঘোরে এমন। সা'দীর কথায়: আল্লাহর জিকিরে নিশ্চিন্ত, তাঁর ভালোবাসায় থিতু, আল্লাহকে পেয়ে যার চোখ জুড়িয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Secure, Content, Sincere",
          "bn": "নিরাপদ, রাজি, একনিষ্ঠ"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi widen the list. Al-Qurtubi gives Ibn 'Abbas twice, at rest in Allah's reward and the believing soul; both give al-Hasan, believing and certain. Pleased with Allah's decree is Mujahid's in al-Qurtubi, who adds that it knew what missed it would never have struck it, and 'Atiyyah's in al-Baghawi. Secure from Allah's punishment is Muqatil's in al-Qurtubi and al-Kalbi's in al-Baghawi; at-Tabari and al-Qurtubi report Ubayy ibn Ka'b's reading, the secure, settled soul.",
            "bn": "কুরতুবী ও বাগাভী তালিকাটা আরও বড় করেন। কুরতুবী ইবন আব্বাস (রাঃ) থেকে দুটি কথা আনেন: আল্লাহর প্রতিদানে নিশ্চিন্ত আত্মা, আর মুমিন আত্মা। হাসানের কথা দুজনেই দেন: ঈমানদার, দৃঢ় বিশ্বাসী। আল্লাহর ফয়সালায় রাজি আত্মা, এ ব্যাখ্যা কুরতুবীতে মুজাহিদের, বাগাভীতে আতিয়্যার। কুরতুবীর মুজাহিদ আরও বলেন, সে জানত যা তাকে এড়িয়ে গেছে তা তাকে পাওয়ার ছিল না। আল্লাহর আজাব থেকে নিরাপদ আত্মা, এ কথা কুরতুবীতে মুকাতিলের, বাগাভীতে কালবীর। তাবারী ও কুরতুবী দুজনেই উবাই ইবন কা'ব (রাঃ)-এর কিরাআত উল্লেখ করেন: নিরাপদ, প্রশান্ত আত্মা।"
          },
          {
            "en": "Some, in both al-Qurtubi and al-Baghawi, read it as at rest in the remembrance of Allah and cite 13:28, which has its own deep page. Al-Muyassar joins remembrance and faith; Ma'arif al-Qur'an speaks of a soul made calm by remembrance and obedience, restless when it leaves them. Al-Qurtubi adds Ibn Kaysan: the sincere soul. He then reports from Buraydah that Hamzah's soul is meant, and answers that the sound view is that the verse is general, for every sincere, obedient believer.",
            "bn": "কুরতুবী ও বাগাভী দুজনের কাছেই আরেকটি মত আছে: আল্লাহর জিকিরে নিশ্চিন্ত আত্মা। প্রমাণ হিসেবে তাঁরা ১৩:২৮ আয়াত আনেন, যার আলাদা বিস্তারিত পাতা আছে। মুয়াসসার জিকির আর ঈমানকে একসঙ্গে ধরে। মাআরিফুল কুরআনের ভাষায়, জিকির ও আনুগত্যে এ আত্মা শান্ত হয়, আর তা ছেড়ে দিলে অস্থির হয়ে পড়ে। কুরতুবী ইবন কাইসানের মতও আনেন: একনিষ্ঠ আত্মা। এরপর তিনি বুরাইদা (রাঃ) থেকে বর্ণনা দেন যে এখানে হামজা (রাঃ)-এর আত্মার কথা বলা হয়েছে। জবাবে নিজেই বলেন, সঠিক কথা হলো আয়াতটি সাধারণ, প্রত্যেক একনিষ্ঠ, অনুগত মুমিনের আত্মার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Moments for One Address",
          "bn": "এক ডাক, তিন মুহূর্ত"
        },
        "p": [
          {
            "en": "When is this said? The commentators genuinely differ, and the sources keep the difference. One view puts it at death. At-Tabari reports, as something said, that these are the angel's words to the servant as his soul leaves, bringing news of his Lord's pleasure. Abu Salih divides the verses: return to your Lord is at death, enter among My servants is on the Day of Resurrection. At-Tabari and al-Baghawi carry both halves of his words; al-Qurtubi carries the first.",
            "bn": "কথাগুলো বলা হবে কখন? এ নিয়ে তাফসীরকারদের মধ্যে সত্যিকারের মতভেদ আছে, আর সূত্রগুলো সেই মতভেদ ধরে রেখেছে। একটি মতে, মৃত্যুর সময়। তাবারী 'বলা হয়েছে' বলে উল্লেখ করেন যে এগুলো ফেরেশতার কথা, বান্দার প্রাণ বের হওয়ার মুহূর্তে, রবের সন্তুষ্টির সুসংবাদ দিয়ে। আবু সালিহ আয়াতগুলো ভাগ করে দেন। 'তোমার রবের দিকে ফিরে এসো' মৃত্যুর সময়, আর 'আমার বান্দাদের মধ্যে শামিল হও' কিয়ামতের দিন। তাবারী ও বাগাভী তাঁর কথার দুই অংশই আনেন, কুরতুবী আনেন প্রথম অংশ।"
          },
          {
            "en": "A second view puts it at the Resurrection, when souls are returned to bodies. At-Tabari gives it from Ibn 'Abbas, ad-Dahhak and 'Ikrimah, and judges it the sounder of the two views because of the words that follow, enter among My servants and enter My Garden. A Kufan grammarian he cites places it when the believers receive their records in their right hands. Ma'arif al-Qur'an reports some who place it after the reckoning is over, arguing from the context.",
            "bn": "দ্বিতীয় মতে, পুনরুত্থানের দিন, যখন রুহগুলো দেহে ফিরিয়ে দেওয়া হবে। তাবারী এ মত আনেন ইবন আব্বাস (রাঃ), দাহহাক ও ইকরিমা থেকে। দুই মতের মধ্যে তিনি এটিকেই বেশি সঠিক বলেন, কারণ পরের কথাগুলো: আমার বান্দাদের মধ্যে শামিল হও, আমার জান্নাতে প্রবেশ করো। তিনি কুফার এক ব্যাকরণবিদের কথাও আনেন, যাঁর মতে মুমিনদের আমলনামা ডান হাতে দেওয়ার সময় এ কথা বলা হবে। মাআরিফুল কুরআন জানায়, কেউ কেউ বলেন হিসাব শেষ হওয়ার পর, আর তাঁরা যুক্তি দেন আয়াতের প্রসঙ্গ থেকে।"
          },
          {
            "en": "A third view keeps more than one moment. At-Tabari reports Usamah ibn Zayd from his father that the soul is given the good news of Paradise at death, on the Day of Gathering and at the raising; al-Qurtubi gives the same three from Ibn Zayd. Ibn Kathir says it is said at death and on the Day of Resurrection, as angels bring the believer good news at both; as-Sa'di agrees. Ma'arif calls the time unclear. This article picks none of these views.",
            "bn": "তৃতীয় মত একাধিক মুহূর্তকে একসঙ্গে রাখে। তাবারী উসামা ইবন যায়দ থেকে তাঁর বাবার কথা আনেন: এ আত্মাকে জান্নাতের সুসংবাদ দেওয়া হয় মৃত্যুর সময়, সমবেত হওয়ার দিনে, আর পুনরুত্থানের সময়। কুরতুবী একই তিনটি মুহূর্তের কথা আনেন ইবন যায়দ থেকে। ইবন কাসীর বলেন, কথাটা বলা হয় মৃত্যুর সময়, আবার কিয়ামতের দিনেও, যেমন দুই সময়েই ফেরেশতারা মুমিনকে সুসংবাদ দেন। সা'দীও একই কথা বলেন। মাআরিফুল কুরআন বলে, সময়টা স্পষ্ট নয়। এ লেখা এর কোনো মতকেই বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "To the Lord, or the Body",
          "bn": "রবের কাছে, না দেহে"
        },
        "p": [
          {
            "en": "The dispute shapes irji'i ila rabbiki too. Those who place the address at the raising read rabbiki as your companion, the body: al-Qurtubi gives it from Ibn 'Abbas, 'Ikrimah and 'Ata' and says at-Tabari chose it; al-Baghawi adds ad-Dahhak. Allah then commands the spirits back into the bodies. Ibn Kathir calls this strange and prefers the apparent sense, back to Allah's judgement and standing before Him, citing 6:62, they are returned to Allah, their true Master, and 40:43, our return is to Allah.",
            "bn": "ইরজিঈ ইলা রাব্বিকি, এ কথার অর্থও সেই মতভেদে বাঁধা। যাঁরা ডাকটাকে পুনরুত্থানের সময় ধরেন, তাঁরা রাব্বিকি পড়েন 'তোমার সঙ্গী', অর্থাৎ দেহ। কুরতুবী এ ব্যাখ্যা আনেন ইবন আব্বাস (রাঃ), ইকরিমা ও আতা থেকে, আর বলেন তাবারী এটিই গ্রহণ করেছেন। বাগাভী দাহহাকের নামও যোগ করেন। এ ব্যাখ্যায় আল্লাহ রুহগুলোকে দেহে ফিরে যেতে হুকুম দেন। ইবন কাসীর একে অপরিচিত মত বলেন। তাঁর মতে বাহ্যিক অর্থই ঠিক: আল্লাহর ফয়সালা আর তাঁর সামনে দাঁড়ানোর দিকে ফেরা। দলিল হিসেবে আনেন ৬:৬২, তারপর তাদের ফিরিয়ে দেওয়া হয় আল্লাহর কাছে, তাদের প্রকৃত মালিকের কাছে; আর ৪০:৪৩, আমাদের ফেরা আল্লাহরই কাছে।"
          },
          {
            "en": "Abu Salih, in al-Qurtubi: return to Allah, and this is at death. Al-Hasan, in al-Qurtubi and al-Baghawi: return to your Lord's reward and honour. Ibn Kathir's Arabic: to His nearness, His reward and what He prepared for His servants in His Garden. As-Sa'di dwells on the word Lord, the One who raised you with His blessing until you became one of His friends. Ma'arif al-Qur'an reads return as showing that the soul's first place was with its Lord, in 'Illiyyin.",
            "bn": "কুরতুবীতে আবু সালিহের কথা: আল্লাহর দিকে ফিরে এসো, আর এটা মৃত্যুর সময়। কুরতুবী ও বাগাভীতে হাসানের কথা: তোমার রবের প্রতিদান ও সম্মানের দিকে ফিরে এসো। ইবন কাসীর আরবিতে বলেন: তাঁর সান্নিধ্যে, তাঁর প্রতিদানের দিকে, আর জান্নাতে বান্দাদের জন্য তিনি যা প্রস্তুত রেখেছেন তার দিকে। সা'দী থামেন 'রব' শব্দে। তিনি সেই রব, যিনি নিজের নিয়ামত দিয়ে তোমাকে লালন করেছেন, এত অনুগ্রহ করেছেন যে তুমি তাঁর বন্ধুদের একজন হয়ে গেছ। মাআরিফুল কুরআন 'ফিরে এসো' কথাটি থেকে বোঝে, আত্মার প্রথম ঠিকানা ছিল তার রবের কাছে, ইল্লিয়্যীনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pleased, and Pleasing to Him",
          "bn": "রাজি, আর তাঁরও প্রিয়"
        },
        "p": [
          {
            "en": "Radiyatan mardiyyah sets two forms of one root side by side. Ibn Kathir: pleased within itself, and pleasing, meaning it is pleased with Allah, He is pleased with it, and He has made it content. As-Sa'di: pleased with Allah and with the reward He honoured it with, while Allah is pleased with it. Al-Baghawi: pleased with the reward, and approved. Al-Muyassar says much the same. Ma'arif al-Qur'an moves it into this life: pleasure with Allah's decrees and commands is a sign that He is pleased.",
            "bn": "রাদিয়াতাম মারদিয়্যাহ: একই ধাতুর দুটি রূপ পাশাপাশি। ইবন কাসীর বলেন, রাদিয়াহ মানে নিজের ভেতরে সন্তুষ্ট, আর মারদিয়্যাহ মানে সে আল্লাহর উপর রাজি, আল্লাহ তার উপর রাজি, আর তিনি তাকে খুশি করে দিয়েছেন। সা'দীর কথায়, সে আল্লাহর উপর রাজি, তিনি যে প্রতিদান দিয়ে তাকে সম্মানিত করেছেন তাতেও রাজি, আর আল্লাহও তার উপর রাজি। বাগাভী বলেন, প্রতিদানে খুশি, আর তাঁর কাছে পছন্দনীয়। মুয়াসসারও প্রায় একই কথা বলে। মাআরিফুল কুরআন কথাটাকে এই জীবনে টেনে আনে: আল্লাহর ফয়সালা ও বিধানে বান্দার রাজি থাকা এই নিদর্শন যে আল্লাহ তার উপর রাজি।"
          },
          {
            "en": "Al-Baghawi reports al-Hasan: when Allah wills to take the soul, it rests in Allah, pleased with Him, and He with it. He then reports from 'Abd Allah ibn 'Amr, where al-Qurtubi names 'Amr ibn al-'As, that two angels come to the dying believer with a gift from Paradise and say: come out, O soul at rest, to rest and fragrance, and your Lord is pleased with you. Both give it as a Companion's words, not the Prophet's ﷺ. Al-Qurtubi's wording puts the verse's two adjectives into the angels' mouths.",
            "bn": "বাগাভী হাসানের কথা আনেন: আল্লাহ যখন এ আত্মাকে তুলে নিতে চান, সে আল্লাহতে নিশ্চিন্ত হয়, তাঁর উপর রাজি হয়, আর তিনিও তার উপর রাজি। এরপর তিনি আবদুল্লাহ ইবন আমর (রাঃ) থেকে বর্ণনা দেন, যেখানে কুরতুবী নাম বলেন আমর ইবনুল আস (রাঃ)। মুমিনের মৃত্যুর সময় দুজন ফেরেশতা জান্নাতের এক উপহার নিয়ে আসেন আর বলেন: হে প্রশান্ত আত্মা, বেরিয়ে এসো আরাম আর সুগন্ধির দিকে, তোমার রব তোমার উপর রাজি। দুই কিতাবেই এটি একজন সাহাবির কথা, নবী ﷺ-এর নয়। কুরতুবীর বর্ণনায় আয়াতের ওই দুটি বিশেষণই ফেরেশতাদের মুখে উঠে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Among Many, or Into One",
          "bn": "বহুজনের দলে, না এক দেহে"
        },
        "p": [
          {
            "en": "Fa-dkhuli fi 'ibadi. Qatadah, in at-Tabari, says among My righteous servants, and at-Tabari adopts that. Ibn Kathir: into their ranks. Al-Muyassar: into the number of Allah's righteous servants, and with them into My Garden. Al-Qurtubi cites 29:9, We will surely admit them among the righteous; al-Baghawi cites Sulayman's (AS) prayer in 27:19, admit me by Your mercy among Your righteous servants. Lighter glosses: into My obedience (Muhammad ibn Muzahim, in at-Tabari), and into My party (al-Akhfash, in al-Qurtubi).",
            "bn": "ফাদখুলী ফী ইবাদী। তাবারীতে কাতাদা বলেন: আমার নেক বান্দাদের মধ্যে। তাবারী নিজেও এ অর্থ নেন। ইবন কাসীর বলেন: তাদের দলভুক্ত হয়ে। মুয়াসসারের কথায়: আল্লাহর নেক বান্দাদের সারিতে, আর তাদের সঙ্গে আমার জান্নাতে। কুরতুবী আনেন ২৯:৯, আমি অবশ্যই তাদের নেককারদের মধ্যে দাখিল করব। বাগাভী আনেন ২৭:১৯ আয়াতে সুলাইমান (আঃ)-এর দোয়া: তোমার রহমতে আমাকে তোমার নেক বান্দাদের মধ্যে দাখিল করো। হালকা আরও দুটি ব্যাখ্যা আছে। তাবারীতে মুহাম্মাদ ইবন মুযাহিম বলেন, আমার আনুগত্যে। কুরতুবীতে আখফাশ বলেন, আমার দলে।"
          },
          {
            "en": "There is a genuine difference of reading. At-Tabari reports that some early readers had fi 'abdi, singular, into My servant: Ibn 'Abbas, and a report through Abu ash-Shaykh al-Huna'i. Al-Kalbi takes it as the spirit returning into the body. Al-Qurtubi adds that Ibn Mas'ud read fi jasadi 'abdi, into My servant's body, and glosses the verse as into the bodies of My servants. At-Tabari rules that the right reading is fi 'ibadi, because the authoritative reciters agree on it. This article adds no ruling of its own.",
            "bn": "এখানে কিরাআতের সত্যিকারের একটি পার্থক্য আছে। তাবারী জানান, পূর্বসূরিদের কেউ কেউ পড়তেন ফী আবদী, একবচনে, অর্থাৎ আমার বান্দার মধ্যে। এ পাঠ এসেছে ইবন আব্বাস (রাঃ) থেকে, আর আবুশ শাইখ আল-হুনাঈর সূত্রে এক বর্ণনায়। কালবী এর অর্থ নেন: রুহ দেহে ফিরে যাচ্ছে। কুরতুবী যোগ করেন, ইবন মাসউদ (রাঃ) পড়তেন ফী জাসাদি আবদী, আমার বান্দার দেহে। সে ভিত্তিতে কুরতুবী আয়াতের ব্যাখ্যা দেন: আমার বান্দাদের দেহে। তাবারীর রায়, সঠিক কিরাআত ফী ইবাদী, কারণ প্রামাণ্য কারীগণ এতে একমত। এ লেখা নিজের কোনো রায় যোগ করছে না।"
          },
          {
            "en": "Wa-dkhuli jannati: and enter My Garden. Al-Qurtubi adds one word, with them; Muhammad ibn Muzahim glosses it as My mercy. Ma'arif al-Qur'an dwells on the possessive: Allah calls the Garden His own, a great honour, marking it as the place of His pleasure and not of comfort alone. Ma'arif reads the order as company before place, the fold of the righteous and then the Garden with them, and cites Yusuf's (AS) prayer in 12:101, join me to the righteous.",
            "bn": "ওয়াদখুলী জান্নাতী: আর আমার জান্নাতে প্রবেশ করো। কুরতুবী শুধু একটি শব্দ যোগ করেন: তাদের সঙ্গে। মুহাম্মাদ ইবন মুযাহিম এর ব্যাখ্যা দেন: আমার রহমতে। মাআরিফুল কুরআন থামে 'আমার' শব্দটিতে। আল্লাহ জান্নাতকে নিজের বলে উল্লেখ করেছেন, এ এক বিরাট সম্মান। এতে বোঝা যায়, জান্নাত শুধু চিরস্থায়ী আরামের জায়গা নয়, আল্লাহর সন্তুষ্টির জায়গা। মাআরিফ হুকুম দুটির ক্রম থেকে বোঝে, আগে সঙ্গ, পরে ঠিকানা: আগে নেককারদের দলে, তারপর তাদের সঙ্গে জান্নাতে। সঙ্গে আনে ১২:১০১ আয়াতে ইউসুফ (আঃ)-এর দোয়া: আমাকে নেককারদের সঙ্গে মিলিয়ে দাও।"
          }
        ]
      },
      {
        "h": {
          "en": "White Silk at the Deathbed",
          "bn": "মৃত্যুশয্যায় সাদা রেশম"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, for the view that the address comes at death, points to a long narration of Abu Hurairah in Ahmad's Musnad, an-Nasa'i and Ibn Majah. An-Nasa'i's wording, number 1833 in his Sunan, reads in the English on quranx.com: \"When the believer is dying, the angels of mercy come to him with white silk and [say]: 'Come out content and with the pleasure of Allah upon you to the mercy of Allah, fragrance and a Lord Who is not angry'; So it comes out like the best fragrance of musk.",
            "bn": "মৃত্যুর সময় এ ডাক আসে, এ মতের পক্ষে মাআরিফুল কুরআন আবু হুরায়রা (রাঃ)-এর একটি দীর্ঘ বর্ণনার কথা বলে, যা আছে আহমাদের মুসনাদ, নাসাঈ ও ইবন মাজাহয়। নাসাঈর সুনানে ১৮৩৩ নম্বরে এর ভাষা এই: \"মুমিনের মৃত্যু ঘনিয়ে এলে রহমতের ফেরেশতারা সাদা রেশমি কাপড় নিয়ে তার কাছে আসে আর বলে: 'বেরিয়ে এসো, সন্তুষ্ট হয়ে, তোমার উপর সন্তুষ্টি নিয়ে, আল্লাহর রহমত আর সুগন্ধির দিকে, এমন রবের দিকে যিনি রাগান্বিত নন।' তখন সে বেরিয়ে আসে মিশকের সবচেয়ে উৎকৃষ্ট সুগন্ধির মতো।"
          },
          {
            "en": "They pass him from one to another until they bring him to the gate of heaven, where they say: 'How good is this fragrance that has come to you from the Earth!' Then the souls of the believers come to him and they rejoice more over him than any one of you rejoices when his absent loved one comes to him. They ask him: 'What happened to so-and-so, what happened to so-and-so?' They say: 'Let him be, for he was in the hardship of the world.' When he says, 'Did he not come here?' They say: 'He was taken to the pit (of Hell).'",
            "bn": "ফেরেশতারা একে অন্যের হাতে তাকে তুলে দেয়, শেষে আসমানের দরজায় নিয়ে আসে। সেখানে বলা হয়: 'জমিন থেকে তোমাদের কাছে আসা এ সুগন্ধ কত মনোরম!' তারপর তাকে মুমিনদের রুহগুলোর কাছে আনা হয়। তোমাদের কোনো একজন দূরে থাকা প্রিয়জন ফিরে এলে যতটা খুশি হয়, তারা তাকে পেয়ে তার চেয়েও বেশি খুশি হয়। তারা জানতে চায়: 'অমুকের কী হলো? অমুকের কী হলো?' অন্যরা বলে: 'ওকে একটু থাকতে দাও, সে দুনিয়ার দুঃখের মধ্যে ছিল।' সে যখন বলে, 'সে কি তোমাদের কাছে আসেনি?' তারা বলে: 'তাকে নিয়ে যাওয়া হয়েছে তার ঠিকানা হাবিয়ায় (জাহান্নামে)।'"
          },
          {
            "en": "[And when the disbeliever is dying, the angels of punishment come to him with sackcloth and say:] 'Come out discontent, subject of Divine wrath, to the punishment of Allah, the Mighty and Sublime'; So it comes out like the foulest stench of a corpse. They bring him to the gates of the Earth, where they say: 'How foul is this stench!' Then they bring him to the souls of the disbelievers.\" The bracketed clause is in the Arabic but missing from the English page. An-Nasa'i records it with no grading of his own. Its Arabic command, ukhruji radiyatan mardiyyan 'anki, echoes 89:28.",
            "bn": "[আর কাফিরের মৃত্যু ঘনিয়ে এলে আজাবের ফেরেশতারা চটের কাপড় নিয়ে তার কাছে আসে আর বলে:] 'বেরিয়ে এসো, অসন্তুষ্ট হয়ে, তোমার উপর অসন্তোষ নিয়ে, মহান পরাক্রমশালী আল্লাহর আজাবের দিকে।' তখন সে বেরিয়ে আসে পচা লাশের সবচেয়ে বিকট দুর্গন্ধের মতো। তারা তাকে জমিনের দরজায় নিয়ে যায়, সেখানে বলা হয়: 'এ দুর্গন্ধ কত বিকট!' শেষে তাকে কাফিরদের রুহগুলোর কাছে নিয়ে যাওয়া হয়।\" বন্ধনীর অংশটি আরবিতে আছে, কুরানএক্সের ইংরেজি পাতায় বাদ পড়েছে। নাসাঈ বর্ণনাটির কোনো মান নিজে উল্লেখ করেননি। এর আরবি হুকুম, উখরুজী রাদিয়াতান মারদিয়্যান আনকি, ৮৯:২৮ আয়াতেরই প্রতিধ্বনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Named Souls, an Open Door",
          "bn": "নাম-জানা আত্মা, খোলা দরজা"
        },
        "p": [
          {
            "en": "The tafsirs also name whom the verses concern, and they disagree. Ibn Kathir gives ad-Dahhak from Ibn 'Abbas: 'Uthman ibn 'Affan, which al-Qurtubi ties to his endowing the well of Rumah; and Buraydah: Hamzah. Al-Qurtubi adds, as something said, Khubayb ibn 'Adi. In Ibn Kathir, Sa'id ibn Jubayr recited the verse before the Prophet ﷺ; Abu Bakr said how fine it is, and was told the angel will say it to him at death. Ibn Kathir calls this mursal hasan; at-Tabari has it too, al-Qurtubi through Sa'id ibn Zayd. This article picks none of these reports.",
            "bn": "আয়াতগুলো কাকে নিয়ে, সে বিষয়ে তাফসীরগুলোতে কয়েকটি নাম আসে, আর সেগুলো এক নয়। ইবন কাসীর দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে আনেন: উসমান ইবন আফফান (রাঃ)। কুরতুবী একে জুড়ে দেন রুমা কূপ ওয়াকফ করার ঘটনার সঙ্গে। বুরাইদা (রাঃ) থেকে আসে হামজা (রাঃ)-এর নাম। কুরতুবী 'বলা হয়' বলে যোগ করেন খুবাইব ইবন আদী (রাঃ)-কে। ইবন কাসীরে সাঈদ ইবন জুবাইর নবী ﷺ-এর সামনে আয়াতটি পড়েন। আবু বকর (রাঃ) বলেন, কী সুন্দর! তাঁকে বলা হয়, মৃত্যুর সময় ফেরেশতা তোমাকে এ কথা বলবে। ইবন কাসীর একে মুরসাল হাসান বলেন। তাবারীতেও এটি আছে, কুরতুবীতে সাঈদ ইবন যায়দের সূত্রে। এ লেখা এর কোনো বর্ণনাকেই বেছে নিচ্ছে না।"
          },
          {
            "en": "This article's own reading: set beside 89:24, the passage has two voices. One man says, would that I had sent ahead for my life; the other soul is told, return. The glosses gathered here describe that second soul by what it had done in this world: believed the promise, grew certain of its Lord, accepted His decree, kept His remembrance. Whatever the moment of the address, every reading the commentators give has the soul formed before it is called. That much a living reader can work on.",
            "bn": "এবার এ লেখার নিজের পাঠ। ৮৯:২৪ আয়াতের পাশে রাখলে পুরো অংশে দুটি কণ্ঠ শোনা যায়। একজন বলে, হায়, নিজের জীবনের জন্য যদি কিছু আগে পাঠাতাম! আরেক আত্মাকে বলা হয়, ফিরে এসো। এখানে জড়ো করা ব্যাখ্যাগুলো এই দ্বিতীয় আত্মার পরিচয় দেয় দুনিয়ায় সে যা করেছে তা দিয়ে: প্রতিশ্রুতিকে সত্য মেনেছে, রবের ব্যাপারে নিশ্চিত হয়েছে, তাঁর ফয়সালায় রাজি থেকেছে, তাঁর জিকির ধরে রেখেছে। ডাকটা যে মুহূর্তেই আসুক, তাফসীরকারদের প্রতিটি পাঠে আত্মাটি গড়ে ওঠে ডাক আসার আগেই। জীবিত পাঠকের হাতে কাজ করার জিনিস এটুকুই।"
          }
        ]
      }
    ]
  }
});
