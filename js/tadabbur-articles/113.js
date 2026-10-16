/**
 * Tadabbur long-form articles — surah 113.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "113:1": {
    "sections": [
      {
        "h": {
          "en": "An Order to Speak First",
          "bn": "আগে মুখে বলার আদেশ"
        },
        "p": [
          {
            "en": "Qul a'udhu bi-rabbi al-falaq: say, I seek refuge in the Lord of the daybreak. In Arabic the verse is four words, and the first is an order to speak. The Muyassar opens its gloss by naming the addressee: say, O Messenger. At-Tabari spells the sentence out as Allah's instruction to His Prophet ﷺ: say, O Muhammad, I seek protection with the Lord of al-falaq from the evil of what He created. That evil is named in the verse that follows, 113:2; this article stays with the first four words.",
            "bn": "কুল আঊযু বিরাব্বিল ফালাক: বলো, আমি আশ্রয় চাই ভোরের রবের কাছে। আরবিতে আয়াতটি চার শব্দের, আর প্রথম শব্দটাই কথা বলার আদেশ। মুয়াসসার ব্যাখ্যার শুরুতেই বলে দেয় কাকে বলা হচ্ছে: হে রাসূল, বলুন। তাবারী পুরো বাক্যটা খুলে বলেন তাঁর নবী ﷺ-এর প্রতি আল্লাহর নির্দেশ হিসেবে: হে মুহাম্মাদ, বলুন, তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে আমি ফালাকের রবের কাছে সুরক্ষা চাই। সে অনিষ্টের কথা আসে পরের আয়াত ১১৩:২-এ। এ লেখা থাকবে প্রথম চারটি শব্দের সঙ্গেই।"
          },
          {
            "en": "Ibn Kathir opens the surah with Ubayy ibn Ka'b's answer about it, and notes that al-Bukhari records it through Qutayba. In the quranx English of Sahih al-Bukhari 4976: Narrated Zirr bin Hubaish: I asked Ubai bin Ka`b regarding the two Muwwidhat (Surats of taking refuge with Allah). He said, \"I asked the Prophet (ﷺ) about them, He said, 'These two Surats have been recited to me and I have recited them (and are present in the Qur'an).' So, we say as Allah's Messenger (ﷺ) said (i.e., they are part of the Qur'an.\"",
            "bn": "ইবন কাসীর সূরাটির আলোচনা শুরু করেন এ বিষয়ে উবাই ইবন কা'ব (রাঃ)-এর জবাব দিয়ে, আর জানান যে বুখারী তা বর্ণনা করেছেন কুতাইবার সূত্রে। সহীহ বুখারী ৪৯৭৬-এর কুরানএক্স ইংরেজির অনুবাদ: যির ইবন হুবাইশ বর্ণনা করেন, আমি উবাই ইবন কা'বকে দুই মুআওয়িযা (আল্লাহর আশ্রয় চাওয়ার দুটি সূরা) সম্পর্কে জিজ্ঞেস করলাম। তিনি বললেন, \"আমি নবী ﷺ-কে এ দুটি সম্পর্কে জিজ্ঞেস করেছিলাম। তিনি বললেন, 'এ দুটি সূরা আমাকে পড়ে শোনানো হয়েছে, আর আমি তা পড়েছি (এবং এ দুটি কুরআনে আছে)।' তাই আল্লাহর রাসূল ﷺ যেমন বলেছেন, আমরাও তেমনই বলি (অর্থাৎ এ দুটি কুরআনের অংশ)।\""
          },
          {
            "en": "The page's Arabic is plainer than its English: qila li, fa-qultu, it was said to me, so I said. The English above gives it as recited to me and I have recited them. Either way, the Prophet's ﷺ answer in this report is given as something said to him and then said by him. The article reads nothing further into the difference between the two renderings.",
            "bn": "পাতার আরবি পাঠ ইংরেজির চেয়ে সাদামাটা: কীলা লী, ফাকুলতু, আমাকে বলা হয়েছে, তাই আমি বলেছি। ওপরের ইংরেজিতে আছে, আমার কাছে তিলাওয়াত করা হয়েছে আর আমি তিলাওয়াত করেছি। যেভাবেই পড়ি, এ বর্ণনায় নবী ﷺ-এর জবাবটা একই রকম: কথাটা আগে তাঁকে বলা হয়েছে, তারপর তিনি নিজে বলেছেন। দুই অনুবাদের পার্থক্য থেকে এ লেখা আর কিছু টেনে আনে না।"
          }
        ]
      },
      {
        "h": {
          "en": "I Take Shelter, I Hold Fast",
          "bn": "আশ্রয় নিই, আঁকড়ে ধরি"
        },
        "p": [
          {
            "en": "A'udhu is the speaker's own verb, and the commentators gloss it with near-synonyms rather than a single word. The Muyassar pairs it with a'tasimu, I hold fast. As-Sa'di reads qul as say it while seeking refuge, then glosses a'udhu with three verbs: alja'u, aludhu, a'tasimu, I take shelter, I turn for cover, I hold fast. At-Tabari's paraphrase uses astajiru, I seek protection.",
            "bn": "আঊযু বক্তার নিজের ক্রিয়া। তাফসীরকারেরা একে একটিমাত্র প্রতিশব্দে বাঁধেন না, কাছাকাছি কয়েকটি শব্দ পাশাপাশি রাখেন। মুয়াসসার এর সঙ্গে জোড়ে আ'তাসিমু, আমি আঁকড়ে ধরি। সা'দী 'কুল'-এর অর্থ করেন আশ্রয় চেয়ে বলো। তারপর আঊযুর ব্যাখ্যায় আনেন তিনটি ক্রিয়া: আলজাউ, আলূযু, আ'তাসিমু। অর্থাৎ আশ্রয় নিই, আড়াল খুঁজি, আঁকড়ে ধরি। তাবারীর ভাষ্যে শব্দটি আস্তাজীরু, আমি সুরক্ষা চাই।"
          },
          {
            "en": "Ma'arif al-Qur'an sets the verb inside what it calls a settled doctrine of every believer: Allah is the intrinsic cause of every gain and loss, in this world and the next. So, it says, the only fortification against physical and spiritual harm is for a person to place himself under Allah's protection, and by his actions try to make himself fit to enter that shelter. It adds that this surah teaches refuge from worldly calamities, and the companion surah refuge from those of the Hereafter.",
            "bn": "মাআরিফুল কুরআন এ ক্রিয়াটিকে দেখে এমন এক আকীদার আলোয়, যাকে সে বলে প্রত্যেক মুমিনের সুপ্রতিষ্ঠিত বিশ্বাস: দুনিয়া ও আখিরাতের সব লাভ-ক্ষতির আসল কারণ আল্লাহ। তাই তার মতে শারীরিক ও আত্মিক সব ক্ষতি থেকে বাঁচার একমাত্র দুর্গ হলো নিজেকে আল্লাহর হেফাজতে সঁপে দেওয়া, আর নিজের আমল দিয়ে সেই আশ্রয়ে ঢোকার যোগ্য হওয়ার চেষ্টা করা। সে আরও বলে, এ সূরা শেখায় দুনিয়ার বিপদ থেকে আশ্রয় চাইতে, আর এর সঙ্গী সূরাটি শেখায় আখিরাতের বিপদ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Clearer Than the Morning",
          "bn": "ভোরের আলোর চেয়েও স্পষ্ট"
        },
        "p": [
          {
            "en": "Most of the named authorities read al-falaq as the daybreak. At-Tabari gives it from Ibn Abbas, by the chain Ibn Kathir and al-Baghawi call al-Awfi's, and from al-Hasan, Sa'id ibn Jubayr, Jabir ibn Abdullah and Mujahid; Qatada says the falaq of the day, or of the morning. Al-Baghawi calls it the view of most commentators, and the Muyassar gives the gloss in a short clause: wa-huwa al-subh, and it is the morning.",
            "bn": "নাম ধরে যাঁদের মত পাওয়া যায়, তাঁদের বেশির ভাগ আল-ফালাক বুঝেছেন ভোর হিসেবে। তাবারী এ মত আনেন ইবন আব্বাস (রাঃ) থেকে, যে সূত্রকে ইবন কাসীর ও বাগাভী বলেন আওফীর বর্ণনা। আরও আনেন হাসান, সাঈদ ইবন জুবাইর, জাবির ইবন আবদুল্লাহ (রাঃ) ও মুজাহিদ থেকে। কাতাদার ভাষায়, দিনের ফালাক, বা ভোরের ফালাক। বাগাভী বলেন, এটাই অধিকাংশ তাফসীরকারের মত। আর মুয়াসসার ছোট্ট এক বাক্যে বলে দেয়: ওয়া হুয়াস সুবহ, আর তা হলো ভোর।"
          },
          {
            "en": "Two kinds of support are offered. At-Tabari says falaq in Arab speech is the cleaving of morning, and quotes the saying: clearer than the falaq of morning. When Ibn Zayd was asked whether it meant the falaq of morning, he said yes and recited faliqu al-isbah, Cleaver of the daybreak, who made the night for rest, from 6:96. Ibn Kathir reports al-Qurazi, Ibn Zayd and Ibn Jarir (at-Tabari) saying our verse is like that one; al-Baghawi offers it as proof, and Ma'arif al-Qur'an sets the same verse beside ours.",
            "bn": "এ মতের পক্ষে দুই ধরনের সমর্থন আসে। তাবারী বলেন, আরবদের কথায় ফালাক মানে ভোরের ফাটল, আর তিনি প্রবাদটি উদ্ধৃত করেন: ভোরের ফালাকের চেয়েও স্পষ্ট। ইবন যায়দকে যখন জিজ্ঞেস করা হলো, এর মানে কি ভোরের ফালাক, তিনি বললেন হ্যাঁ, তারপর পড়লেন ৬:৯৬ আয়াতের ফালিকুল ইসবাহ: তিনি প্রভাত চিরে আনেন, আর রাতকে বানিয়েছেন বিশ্রামের সময়। ইবন কাসীর জানান, কুরাযী, ইবন যায়দ ও ইবন জারীর (তাবারী) বলেছেন, আমাদের আয়াত ওই আয়াতেরই মতো। বাগাভী একে প্রমাণ হিসেবে পেশ করেন, আর মাআরিফুল কুরআনও একই আয়াত আমাদের আয়াতের পাশে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Place Inside the Fire",
          "bn": "আগুনের ভেতরের এক স্থান"
        },
        "p": [
          {
            "en": "Another group reads al-falaq as a place in Hell, named differently. At-Tabari gives a prison in Hell from Ibn Abbas, by two chains that each pass through an unnamed narrator; al-Qurtubi assigns the prison to Ibn Abbas, and al-Baghawi reports it with the words it is narrated. A pit in Hell is as-Suddi's word in at-Tabari and Sa'id ibn Jubayr's in al-Qurtubi, and Ibn Kathir has it from Zayd ibn Ali through his forefathers: a covered pit at the bottom of Hell. Al-Kalbi, in al-Baghawi and al-Qurtubi, says a valley in Hell.",
            "bn": "আরেক দল আল-ফালাক বুঝেছেন জাহান্নামের এক স্থান হিসেবে, যদিও নাম দেন ভিন্ন ভিন্ন। তাবারী ইবন আব্বাস (রাঃ) থেকে আনেন জাহান্নামের এক কারাগারের কথা, দুটি সূত্রে, যার প্রতিটিতে একজন বর্ণনাকারীর নাম নেই। কুরতুবী কারাগারের মতটি ইবন আব্বাসের বলে উল্লেখ করেন, আর বাগাভী আনেন 'বর্ণিত আছে' বলে। জাহান্নামের এক কূপ, এ কথা তাবারীর বর্ণনায় সুদ্দীর, কুরতুবীর বর্ণনায় সাঈদ ইবন জুবাইরের। ইবন কাসীর এটা আনেন যায়দ ইবন আলী থেকে, তাঁর পূর্বপুরুষদের সূত্রে: জাহান্নামের তলদেশে ঢাকনা দেওয়া এক কূপ। বাগাভী ও কুরতুবীর বর্ণনায় কালবী বলেন, জাহান্নামের এক উপত্যকা।"
          },
          {
            "en": "A house in Hell whose opening makes the people of the Fire cry out: at-Tabari has it from an unnamed Companion and from Ka'b, whom Ibn Kathir names Ka'b al-Ahbar; al-Qurtubi gives it to Ubayy ibn Ka'b. Abu Abd al-Rahman al-Hubuli calls al-falaq one of the names of Hell; Abdullah ibn Umar, in al-Qurtubi, says a tree in the Fire. At-Tabari also carries a saying attributed to the Prophet ﷺ, through Abu Hurayra, that al-falaq is a covered pit in Hell. Ibn Kathir calls it munkar, its chain gharib, its attribution to the Prophet ﷺ not sound.",
            "bn": "জাহান্নামের এমন এক ঘর, যা খোলা হলে আগুনের অধিবাসীরা চিৎকার করে ওঠে। তাবারী এটা আনেন নাম-না-জানা এক সাহাবী থেকে, আর কা'ব থেকে, যাঁকে ইবন কাসীর বলেন কা'ব আল-আহবার। কুরতুবী অবশ্য কথাটা উবাই ইবন কা'ব (রাঃ)-এর বলে উল্লেখ করেন। আবু আবদির রহমান আল-হুবুলী বলেন, আল-ফালাক জাহান্নামের নামগুলোর একটি। কুরতুবীর বর্ণনায় আবদুল্লাহ ইবন উমর (রাঃ) বলেন, আগুনের ভেতরের এক গাছ। তাবারী আবু হুরাইরা (রাঃ)-এর সূত্রে নবী ﷺ-এর নামে একটি কথাও আনেন: আল-ফালাক জাহান্নামের ঢাকা এক কূপ। ইবন কাসীর একে মুনকার বলেন, এর সনদকে গরীব বলেন, আর নবী ﷺ-এর কথা হিসেবে একে সহীহ মানেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whatever Breaks Open",
          "bn": "যা কিছু ফেটে বেরোয়"
        },
        "p": [
          {
            "en": "A third reading widens the word to everything. Ali ibn Abi Talha reports from Ibn Abbas that al-falaq is al-khalq, creation, so that the verse means: I seek refuge in the Lord of creation. At-Tabari gives it, Ibn Kathir too, and al-Baghawi calls it al-Walibi's report from Ibn Abbas. Ibn Kathir gives ad-Dahhak's version: Allah commanded His Prophet to seek refuge from all of creation.",
            "bn": "তৃতীয় পাঠ শব্দটিকে ছড়িয়ে দেয় সবকিছুর উপর। আলী ইবন আবী তালহা ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, আল-ফালাক মানে আল-খালক, সৃষ্টি। তাহলে আয়াতের অর্থ দাঁড়ায়: আমি সৃষ্টির রবের কাছে আশ্রয় চাই। তাবারী এ বর্ণনা আনেন, ইবন কাসীরও আনেন, আর বাগাভী একে বলেন ইবন আব্বাস থেকে ওয়ালিবীর বর্ণনা। ইবন কাসীর দাহহাকের ভাষ্য দেন এভাবে: আল্লাহ তাঁর নবীকে গোটা সৃষ্টি থেকে আশ্রয় চাইতে আদেশ করেছেন।"
          },
          {
            "en": "Others name what splits. Al-Qurazi, in at-Tabari, reads the verse as Cleaver of the grain and the date-stone, Cleaver of the daybreak, and as-Sa'di's entire gloss is those two phrases. Al-Qurtubi lists more: mountains and rocks that split open with water; the womb that splits open with living things; and everything that splits open from all He created, animals, morning, grain, date-stones and plants, which he gives from al-Hasan and others. Then, in his own voice: this view is supported by the word's derivation, for falaq is splitting.",
            "bn": "অন্যেরা নাম ধরে বলেন কী কী ফেটে বের হয়। তাবারীর বর্ণনায় কুরাযী আয়াতটি পড়েন এভাবে: শস্যদানা ও খেজুরের আঁটি চিরে অঙ্কুর বের করেন যিনি, প্রভাত চিরে আনেন যিনি। সা'দীর পুরো ব্যাখ্যাই এই দুটি কথা। কুরতুবী তালিকা আরও লম্বা করেন: পাহাড় ও পাথর, যা ফেটে পানি বের হয়; মাতৃগর্ভ, যা ফেটে প্রাণী বের হয়; আর সৃষ্টির যা কিছু ফেটে বের হয় তার সবই, যেমন প্রাণী, ভোর, শস্যদানা, আঁটি আর উদ্ভিদ। এ মত তিনি আনেন হাসান ও অন্যদের থেকে। তারপর নিজের কথায় বলেন, শব্দের মূল এ মতের পক্ষে সাক্ষ্য দেয়, কারণ ফালাক মানেই চিরে ফেলা।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Each Weighing Lands",
          "bn": "কে কোন মতে থামেন"
        },
        "p": [
          {
            "en": "Those who weigh the readings do not settle in one place. Al-Baghawi says the first, the morning, is the well-known view. Ibn Kathir quotes Ibn Jarir (at-Tabari) as holding the first view correct, that it is the falaq of morning, and adds: this is what is correct, and it is the choice of al-Bukhari in his Sahih. Al-Qurtubi, as seen, finds the derivation on the side of all that splits.",
            "bn": "যাঁরা মতগুলো ওজন করেছেন, তাঁরা সবাই একই জায়গায় থামেননি। বাগাভী বলেন, প্রথম মতটি, অর্থাৎ ভোর, এটাই প্রসিদ্ধ। ইবন কাসীর ইবন জারীর (তাবারী)-এর বরাতে বলেন, প্রথম মতটিই সঠিক, অর্থাৎ ভোরের ফালাক। তারপর যোগ করেন: এটাই সঠিক, আর বুখারী তাঁর সহীহ গ্রন্থে এটাই বেছে নিয়েছেন। আর কুরতুবী, আগেই যেমন দেখা গেছে, শব্দমূলকে পান সেই মতের পক্ষে, যেখানে ফালাক মানে ফেটে বের হওয়া সবকিছু।"
          },
          {
            "en": "The closing paragraph of the at-Tabari text consulted for this verse deserves to be heard in full. He says that falaq in Arab speech is the cleaving of morning, and that it is possible Hell holds a prison named falaq. Since Allah set no sign that He meant one thing called falaq rather than another, and He is Lord of everything He created, the verse must mean everything that bears the name, for He is Lord of all of it.",
            "bn": "এ আয়াতের জন্য সংগ্রহ করা তাবারীর পাঠের শেষ অনুচ্ছেদটি পুরোটা শোনার মতো। তিনি বলেন, আরবদের কথায় ফালাক মানে ভোরের ফাটল। আবার জাহান্নামে ফালাক নামে কোনো কারাগার থাকাও অসম্ভব নয়। ফালাক নামের জিনিসগুলোর মধ্যে আল্লাহ বিশেষ একটিকেই বুঝিয়েছেন, অন্যগুলোকে নয়, এমন কোনো আলামত তিনি রাখেননি। আর তিনি তো নিজের সৃষ্ট সবকিছুর রব। তাই আয়াতে ফালাক নামের সবকিছুই বোঝানো হয়েছে, কারণ সবকিছুরই রব তিনি।"
          },
          {
            "en": "Why is Allah named here as Lord of al-falaq? At-Tabari's answer is the one just given: He is Lord of everything the word names. Ma'arif al-Qur'an, citing Mazhari, offers a reason it marks with presumably: the darkness of night often brings evils and difficulties, and daylight removes them, so the attribute points to the fact that whoever seeks protection in Allah, He will remove afflictions from him. Neither answer is set above the other here; each stands as its author gives it.",
            "bn": "এখানে আল্লাহকে কেন ফালাকের রব বলে ডাকা হলো? তাবারীর জবাব এইমাত্র দেখা গেল: শব্দটি যা কিছু বোঝায়, তিনি সে সবকিছুর রব। মাআরিফুল কুরআন মাযহারীর বরাতে একটি কারণ দেয়, তবে 'সম্ভবত' বলে: রাতের অন্ধকার প্রায়ই অনিষ্ট আর বিপদ ডেকে আনে, দিনের আলো সেগুলো সরিয়ে দেয়। তাই এ গুণটি ইঙ্গিত করে, যে আল্লাহর কাছে আশ্রয় চায়, তিনি তার বিপদ দূর করে দেন। এ লেখা কোনো জবাবকে অন্যটির ওপরে রাখে না। প্রত্যেকটি রইল তার লেখক যেভাবে দিয়েছেন, সেভাবেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report Tied to the Surah",
          "bn": "সূরার সঙ্গে জোড়া এক বর্ণনা"
        },
        "p": [
          {
            "en": "Al-Qurtubi, al-Baghawi and Ma'arif al-Qur'an tie this surah and the companion surah to a report that the Prophet ﷺ was affected by magic worked by a man named Labid ibn al-A'sam; Ibn Kathir's abridged English also discusses it. Al-Qurtubi says it is established in the two Sahihs, from A'isha, that it reached the point where it seemed to him he was doing a thing he was not doing. Then he told her Allah had answered him: two angels named the man, the comb, the hair and the well, and he went and took it out.",
            "bn": "কুরতুবী, বাগাভী ও মাআরিফুল কুরআন এ সূরা আর তার সঙ্গী সূরাটিকে জুড়ে দেন একটি বর্ণনার সঙ্গে: লাবীদ ইবনুল আ'সাম নামের এক ব্যক্তি নবী ﷺ-এর উপর জাদু করেছিল, আর তার প্রভাব তাঁর উপর পড়েছিল। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও এ প্রসঙ্গ আলোচনা করে। কুরতুবী বলেন, আয়েশা (রাঃ)-এর বর্ণনায় দুই সহীহ গ্রন্থে প্রমাণিত যে প্রভাবটা এমন পর্যায়ে পৌঁছেছিল যে তাঁর মনে হতো তিনি কোনো কাজ করছেন, অথচ তা করছিলেন না। পরে তিনি আয়েশাকে জানান, আল্লাহ তাঁর প্রশ্নের জবাব দিয়েছেন। দুজন ফেরেশতা লোকটির নাম, চিরুনি, চুল আর কূপের কথা বলে দেন। তিনি গিয়ে জিনিসটা বের করে আনেন।"
          },
          {
            "en": "Al-Qurtubi marks where the Sahih wording ends. What follows he gives from Ibn Abbas: the well was drained, a string was found tied in eleven knots pierced with needles, and Allah revealed these two surahs, eleven verses for the eleven knots; as each verse was recited a knot came loose. Al-Baghawi reports from Ibn Abbas and A'isha that the two surahs were revealed about this, and gives the eleven knots from Muqatil and al-Kalbi. Ma'arif al-Qur'an gives the knots in a further narration and says these narratives are adapted from Ibn Kathir.",
            "bn": "সহীহের পাঠ কোথায় শেষ, কুরতুবী তা চিহ্নিত করে দেন। এরপরের অংশ তিনি আনেন ইবন আব্বাস (রাঃ) থেকে: কূপের পানি সেঁচে ফেলা হলো, পাওয়া গেল সুতায় বাঁধা ১১টি গিঁট, প্রতিটিতে সুঁই গাঁথা। তখন আল্লাহ এ দুটি সূরা নাজিল করলেন, যার আয়াত-সংখ্যা ১১, গিঁটের সংখ্যার সমান। এক একটি আয়াত পড়া হতো, আর একটি করে গিঁট খুলে যেত। বাগাভী ইবন আব্বাস ও আয়েশা (রাঃ) থেকে বর্ণনা করেন যে সূরা দুটি এ ঘটনা উপলক্ষে নাজিল হয়েছিল, আর ১১টি গিঁটের কথা আনেন মুকাতিল ও কালবী থেকে। মাআরিফুল কুরআন গিঁটের কথা আনে আরেকটি বর্ণনায়, আর জানায় এসব বর্ণনা ইবন কাসীর থেকে নেওয়া।"
          },
          {
            "en": "On where it came down, al-Qurtubi says it is Makkan in the view of al-Hasan, Ikrima, Ata and Jabir ibn Zayd, and Madinan in one of Ibn Abbas's two views and in Qatada's; al-Baghawi and the Arabic Ibn Kathir call it Madinan. Inside the report, when A'isha asked why he had not brought the thing out, in al-Baghawi, or the Companions asked to kill the man, in al-Qurtubi, the Prophet ﷺ answered that Allah had cured him and that he disliked stirring up evil among people.",
            "bn": "সূরাটি কোথায় নাজিল, তা নিয়ে মতভেদ আছে। কুরতুবী বলেন, হাসান, ইকরিমা, আতা ও জাবির ইবন যায়দের মতে এটি মাক্কী। আর ইবন আব্বাস (রাঃ)-এর দুটি মতের একটি অনুযায়ী এবং কাতাদার মতে এটি মাদানী। বাগাভী ও আরবি ইবন কাসীর একে মাদানী বলেন। বর্ণনার ভেতরে আরেকটি কথা আছে। বাগাভীর বর্ণনায় আয়েশা (রাঃ) জানতে চান, জিনিসটা তিনি বের করলেন না কেন। কুরতুবীর বর্ণনায় সাহাবীরা লোকটিকে হত্যার অনুমতি চান। দুই জায়গাতেই নবী ﷺ-এর জবাব: আল্লাহ তাঁকে আরোগ্য দিয়েছেন, আর মানুষের মধ্যে অনিষ্ট উসকে দেওয়া তিনি অপছন্দ করেন।"
          },
          {
            "en": "On what magic is, al-Qurtubi refers the reader to his discussion under al-Baqara and declines to repeat it. Ma'arif al-Qur'an treats the episode as an illness acting through physical causes, from which it says no prophet was immune, and also refers to its al-Baqara volume. This article adds no view of its own on either question. The report names one man of the past, and this verse licenses nothing against any living person or community; the refuge it teaches is sought from evil, not from a people.",
            "bn": "জাদু আসলে কী, এ প্রশ্নে কুরতুবী পাঠককে পাঠিয়ে দেন সূরা বাকারায় তাঁর আলোচনায়, এখানে আর তা পুনরাবৃত্তি করেন না। মাআরিফুল কুরআনের চোখে ঘটনাটি এক অসুস্থতা, যা কাজ করেছে শারীরিক কারণের পথ ধরে। তার মতে এমন অসুখ থেকে কোনো নবীই মুক্ত ছিলেন না। সেও বিস্তারিত জানতে বাকারার খণ্ড দেখতে বলে। এ দুই প্রশ্নের কোনোটিতেই এ লেখা নিজের কোনো মত যোগ করে না। বর্ণনাটি অতীতের একজন মানুষের নাম নেয়। জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। এ আয়াত যে আশ্রয় শেখায়, তা অনিষ্ট থেকে, কোনো জনগোষ্ঠী থেকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited at Night and After Prayer",
          "bn": "রাতে ও নামাজের পরে পাঠ"
        },
        "p": [
          {
            "en": "Among the reports Ibn Kathir gathers on the surah's standing is Uqba ibn Amir's, which, he notes, Muslim records by more than one chain. In the quranx English of Sahih Muslim 814b: 'Uqba b. 'Amir reported: The Messenger of Allah (ﷺ) said to me: There have been sent down to me verses the like of which had never been seen before. They are the Mu'awwadhatain.",
            "bn": "সূরাটির মর্যাদা নিয়ে ইবন কাসীর যেসব বর্ণনা একত্র করেন, তার একটি উকবা ইবন আমির (রাঃ)-এর। ইবন কাসীর জানান, মুসলিম এটি একটির বেশি সূত্রে এনেছেন। সহীহ মুসলিম ৮১৪খ-এর কুরানএক্স ইংরেজির অনুবাদ: উকবা ইবন আমির (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ আমাকে বললেন: আমার উপর এমন কিছু আয়াত নাজিল হয়েছে, যার মতো আয়াত আগে কখনো দেখা যায়নি। সেগুলো হলো মুআওয়িযাতাইন।"
          },
          {
            "en": "Ibn Kathir also points back to A'isha's report of the Prophet's ﷺ practice at night, which the reflection on 2:102 in this module already gives. In the quranx English of Sahih al-Bukhari 5017: Narrated 'Aisha: Whenever the Prophet (ﷺ) went to bed every night, he used to cup his hands together and blow over it after reciting Surat Al-Ikhlas, Surat Al-Falaq and Surat An-Nas, and then rub his hands over whatever parts of his body he was able to rub, starting with his head, face and front of his body. He used to do that three times.",
            "bn": "রাতে নবী ﷺ কী করতেন, আয়েশা (রাঃ)-এর সে বর্ণনার দিকেও ইবন কাসীর ইঙ্গিত করেন। এ মডিউলে ২:১০২ আয়াতের আলোচনায় বর্ণনাটি আগেই এসেছে। সহীহ বুখারী ৫০১৭-এর কুরানএক্স ইংরেজির অনুবাদ: আয়েশা (রাঃ) বর্ণনা করেন, প্রতি রাতে নবী ﷺ যখন বিছানায় যেতেন, দুই হাতের তালু একত্র করতেন এবং সূরা ইখলাস, সূরা ফালাক ও সূরা নাস পড়ে তাতে ফুঁ দিতেন। তারপর শরীরের যতটুকু পারতেন, দুই হাত বুলিয়ে নিতেন, শুরু করতেন মাথা, মুখমণ্ডল আর শরীরের সামনের দিক থেকে। এমনটি তিনি করতেন তিনবার।"
          },
          {
            "en": "On recitation after prayer, Ibn Kathir cites Uqba's report through Ali ibn Rabah, which at-Tirmidhi also records. In the quranx English of Jami' at-Tirmidhi 2903: Narrated 'Uqbah bin 'Amir: \"The Messenger of Allah (ﷺ) ordered me to recite Al-Mu'awwidhatain at the end of every Salat.\" The page gives at-Tirmidhi's verdict as hasan gharib; Ibn Kathir reports him calling it gharib. The verse itself ends at the Lord of al-falaq. What refuge is sought from begins in 113:2, and the companion surah opens with the same two words.",
            "bn": "নামাজের পরে পড়া নিয়ে ইবন কাসীর আনেন আলী ইবন রাবাহের সূত্রে উকবা (রাঃ)-এর বর্ণনা, যা তিরমিযীও বর্ণনা করেছেন। জামি তিরমিযী ২৯০৩-এর কুরানএক্স ইংরেজির অনুবাদ: উকবা ইবন আমির (রাঃ) বর্ণনা করেন, \"আল্লাহর রাসূল ﷺ আমাকে প্রত্যেক নামাজের শেষে আল-মুআওয়িযাতাইন পড়ার আদেশ দিয়েছেন।\" পাতাটিতে তিরমিযীর রায় হাসান গরীব। ইবন কাসীর জানান, তিরমিযী একে গরীব বলেছেন। আয়াতটি নিজে থামে ফালাকের রবে এসে। কিসের অনিষ্ট থেকে আশ্রয়, সে কথা শুরু হয় ১১৩:২-এ। আর সঙ্গী সূরাটিও শুরু হয় একই দুটি শব্দে।"
          }
        ]
      }
    ]
  }
});
