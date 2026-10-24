/**
 * Tadabbur long-form articles — surah 8.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "8:2-4": {
    "sections": [
      {
        "h": {
          "en": "Five Marks After a Quarrel",
          "bn": "বিবাদের পরে পাঁচটি চিহ্ন"
        },
        "p": [
          {
            "en": "Surah al-Anfal opens with a question: they ask you about the spoils. Al-Muyassar, on 8:1, names them as the spoils of the day of Badr and has the Companions asking how they would be divided; the answer tells them to leave the quarrelling, set right what is between them, and obey Allah and His Messenger if they are believers. The very next verse begins innama al-mu'minuna, the believers are only, and says who they are.",
            "bn": "সূরা আনফাল শুরু হয় একটি প্রশ্ন দিয়ে: তারা তোমাকে গনিমত সম্পর্কে জিজ্ঞেস করে। মুয়াসসার ৮:১ আয়াতের ব্যাখ্যায় বলেন, এ ছিল বদরের দিনের গনিমত, আর সাহাবিরা জানতে চাইছিলেন তা কীভাবে ভাগ হবে। জবাবে বলা হলো ঝগড়া ছেড়ে দিতে, নিজেদের সম্পর্ক ঠিক করে নিতে, আর মুমিন হলে আল্লাহ ও তাঁর রাসূলের আনুগত্য করতে। ঠিক পরের আয়াত শুরু হয় ইন্নামাল মু'মিনূন দিয়ে, মুমিন তো কেবল তারাই, আর বলে দেয় তারা কারা।"
          },
          {
            "en": "Al-Qurtubi reports, in the name of the scholars, that this verse urges holding fast to obedience to the Messenger ﷺ in what he commanded about dividing that booty. At-Tabari and al-Baghawi open their comments in the same direction: the believer is not the one who opposes Allah and His Messenger. As-Sa'di begins by saying that any shortfall in obeying Allah and His Messenger comes from a shortfall in faith, and that the verse describes complete faith, the kind that earns praise.",
            "bn": "কুরতুবী আলেমদের বরাতে বলেন, গনিমত বণ্টনে রাসূল ﷺ যা আদেশ করেছিলেন, তাতে তাঁর আনুগত্য আঁকড়ে থাকার তাগিদ এ আয়াত। তাবারী ও বাগাভীও ব্যাখ্যা শুরু করেন একই দিক থেকে: যে আল্লাহ ও তাঁর রাসূলের বিরুদ্ধে যায়, সে মুমিন নয়। সা'দী শুরু করেন এ কথায়: আল্লাহ ও রাসূলের আনুগত্যে যার ঘাটতি, তার ঘাটতি আসলে ঈমানে। আর আয়াতটি বলছে পূর্ণ ঈমানের কথা, যে ঈমান প্রশংসা পায়।"
          },
          {
            "en": "Ibn Kathir and at-Tabari both carry a reading from Ibn Abbas that sets the verse against its opposite. The hypocrites, he says, take nothing of the remembrance of Allah into their hearts when they carry out what He has made obligatory; they believe in none of His verses, do not rely on Him, do not pray when they are out of sight, and do not pay the zakah on their wealth. Allah declared that they are not believers, and then described the believers.",
            "bn": "ইবন কাসীর ও তাবারী দুজনেই ইবন আব্বাস (রাঃ)-এর একটি ব্যাখ্যা আনেন, যা আয়াতটিকে তার বিপরীতের পাশে দাঁড় করায়। তিনি বলেন, মুনাফিকরা আল্লাহর ফরজ আদায়ের সময় তাঁর জিকিরের কিছুই অন্তরে নেয় না। তাঁর কোনো আয়াতে তারা ঈমান আনে না, তাঁর ওপর ভরসা করে না, লোকচক্ষুর আড়ালে গেলে নামাজ পড়ে না, সম্পদের জাকাতও দেয় না। আল্লাহ জানিয়ে দিলেন, তারা মুমিন নয়। তারপর তিনি মুমিনদের পরিচয় দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Wajal",
          "bn": "ওয়াজাল শব্দটি"
        },
        "p": [
          {
            "en": "Idha dhukira Allahu wajilat qulubuhum: when Allah is mentioned, their hearts wajilat. Mujahid, in several chains at-Tabari gives, says fariqat, they took fright; Ibn Kathir adds fazi'at and khafat, they were alarmed and afraid, and says as-Suddi and others said the same. Qatadah stacks three words: out of dread of Allah, wajal of Allah, fear of Allah. Al-Muyassar uses fazi'at, and al-Qurtubi defines al-wajal simply as al-khawf, fear.",
            "bn": "ইযা যুকিরাল্লাহু ওয়াজিলাত কুলূবুহুম: আল্লাহর কথা উঠলে তাদের অন্তর ওয়াজিলাত হয়। তাবারী কয়েকটি সূত্রে মুজাহিদের কথা আনেন: ফারিকাত, ভয়ে আঁতকে উঠল। ইবন কাসীর যোগ করেন ফাযিআত ও খাফাত, অর্থাৎ শঙ্কিত হলো, ভয় পেল। তিনি বলেন, সুদ্দী ও আরও অনেকে একই কথা বলেছেন। কাতাদা তিনটি শব্দ পাশাপাশি রাখেন: আল্লাহর ভয়ে আঁতকে ওঠা, আল্লাহর ওয়াজাল, আল্লাহর খাওফ। মুয়াসসার লেখেন ফাযিআত। আর কুরতুবী সোজা বলেন, ওয়াজাল মানে খাওফ, ভয়।"
          },
          {
            "en": "Ma'arif al-Qur'an draws a finer line. Wajal, it says, is not fear in the absolute sense, the fear felt before a beast or an enemy, which unsettles the heart. It is awe, a respectful fear that rises in the heart from the majesty of the Most High. As-Sa'di, glossing it as khafat wa-rahibat, gives its test: the fear of Allah obliges a person to hold back from what is forbidden, and the greatest sign of that fear is that it bars its owner from sins.",
            "bn": "মাআরিফুল কুরআন এখানে আরেকটু সূক্ষ্ম পার্থক্য টানে। তার মতে ওয়াজাল সাধারণ ভয় নয়। হিংস্র পশু বা শত্রুর সামনে মানুষ যে ভয় পায়, তা মনের শান্তি নষ্ট করে। ওয়াজাল হলো সমীহ, মহান আল্লাহর মহিমা থেকে অন্তরে জেগে ওঠা শ্রদ্ধামেশানো ভয়। সা'দী এর অর্থ করেন খাফাত ওয়া রাহিবাত, ভয় পেল ও শঙ্কিত হলো। তারপর এর পরীক্ষাটা বলে দেন: আল্লাহর ভয় মানুষকে হারাম থেকে বিরত থাকতে বাধ্য করে। এই ভয়ের সবচেয়ে বড় আলামত হলো, তা মানুষকে গুনাহ থেকে আটকে রাখে।"
          },
          {
            "en": "As-Suddi gives the scene in which the verse comes alive, in a report that at-Tabari, Ibn Kathir and al-Qurtubi all carry from Sufyan ath-Thawri. It is the man who wants to commit a wrong, or intends a sin, and someone says to him: fear Allah. His heart trembles, and in at-Tabari's wording he pulls back from it. Ibn Kathir draws the same conclusion in general terms: the one whose heart fears Allah at His mention does what He commands and leaves what He forbids.",
            "bn": "আয়াতটি কোন মুহূর্তে জীবন্ত হয়ে ওঠে, সুদ্দী তার একটা ছবি দেন। তাবারী, ইবন কাসীর ও কুরতুবী তিনজনেই সুফিয়ান সাওরীর সূত্রে কথাটি আনেন। একজন মানুষ কারও ওপর জুলুম করতে চাইছে, কিংবা কোনো গুনাহের ইচ্ছা করেছে। কেউ তাকে বলল: আল্লাহকে ভয় করো। অমনি তার অন্তর কেঁপে উঠল। তাবারীর বর্ণনায়, সে কাজটি থেকে সরে আসে। ইবন কাসীরও সাধারণভাবে একই কথা বলেন: আল্লাহর কথা উঠলে যার অন্তর তাঁকে ভয় করে, সে তাঁর আদেশ মানে আর নিষেধ ছেড়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear Beside Rest",
          "bn": "ভয়ের পাশেই প্রশান্তি"
        },
        "p": [
          {
            "en": "A reader may object that 13:28 says hearts find rest in the remembrance of Allah. Al-Qurtubi meets this directly and finds no contradiction. The rest, he says, comes from completeness of knowledge and the heart's confidence; the wajal is alarm at Allah's punishment. He then points to 39:23, where the two meet together: the skins of those who fear their Lord shiver at the Book, then their skins and hearts soften to the remembrance of Allah. Their souls settle in certainty, he explains, even while they fear Him.",
            "bn": "কেউ প্রশ্ন তুলতে পারেন: ১৩:২৮ আয়াতে তো বলা হয়েছে, আল্লাহর জিকিরে অন্তর প্রশান্তি পায়। কুরতুবী সরাসরি এ প্রশ্নের জবাব দেন। তাঁর মতে এখানে কোনো বৈপরীত্য নেই। প্রশান্তি আসে পূর্ণ মারিফাত আর অন্তরের আস্থা থেকে। আর ওয়াজাল হলো আল্লাহর শাস্তির ভয়। তারপর তিনি দেখান ৩৯:২৩ আয়াত, যেখানে দুটি একসঙ্গে এসেছে। রবকে যারা ভয় করে, কিতাব শুনে তাদের গা শিউরে ওঠে, তারপর তাদের দেহ ও মন আল্লাহর জিকিরের দিকে নরম হয়ে আসে। তিনি বলেন, ভয় থাকা সত্ত্বেও ইয়াকিনের কারণে তাদের মন স্থির থাকে।"
          },
          {
            "en": "Ibn Kathir and at-Tabari add a report about the bodily sign, though they name its speaker differently: at-Tabari gives it from Abu ad-Darda', while Ibn Kathir's text gives it from Umm ad-Darda'. Wajal in the heart, the report says, is like the burning of a dry palm frond; do you not feel a shiver from it? The listener says he does. Then when you feel it, make du'a, for du'a takes it away.",
            "bn": "শরীরের আলামত নিয়ে ইবন কাসীর ও তাবারী একটি বর্ণনা আনেন, তবে বক্তার নাম দুজন দুইভাবে বলেন। তাবারী তা আনেন আবুদ দারদা (রাঃ) থেকে, আর ইবন কাসীরের পাঠে তা উম্মুদ দারদা থেকে। বর্ণনাটি বলে, অন্তরের ওয়াজাল যেন শুকনো খেজুরপাতা পোড়ার মতো। তুমি কি তাতে শিহরণ টের পাও না? শ্রোতা বলেন, হ্যাঁ পাই। তাহলে যখন টের পাবে, দোয়া করবে, কারণ দোয়া তা দূর করে দেয়।"
          },
          {
            "en": "Al-Qurtubi is blunt about what wajal is not. He rejects the shrieking and braying that some put on in gatherings and call ecstasy and humility, and says those who do it have not reached the state of the Messenger ﷺ and his Companions, whose state at an admonition was understanding from Allah and weeping out of fear of Him. His proof is a hadith that at-Tirmidhi records (Hadith 2676) and grades hasan sahih, in which the narrator says the hearts trembled with the verse's own verb, and, as al-Qurtubi notes, did not say that they shrieked or danced.",
            "bn": "ওয়াজাল কী নয়, কুরতুবী তা খোলাখুলি বলেন। কেউ কেউ মজলিসে চিৎকার আর গর্জন করে, তাকে বলে ভাবাবেশ আর খুশু। তিনি তা প্রত্যাখ্যান করেন। তাঁর কথা, যারা এমন করে, তারা রাসূল ﷺ ও সাহাবিদের অবস্থায় পৌঁছায়নি। ওয়াজের সময় তাঁদের অবস্থা ছিল আল্লাহর কথা বোঝা আর তাঁর ভয়ে কাঁদা। প্রমাণ হিসেবে তিনি আনেন একটি হাদিস, যা তিরমিযী বর্ণনা করেছেন (হাদিস 2676) এবং হাসান সহিহ বলেছেন। সেখানে বর্ণনাকারী অন্তর কেঁপে ওঠার কথা বলেছেন আয়াতের ক্রিয়াটি দিয়েই। কুরতুবী খেয়াল করিয়ে দেন, তিনি বলেননি যে তাঁরা চিৎকার করেছিলেন বা নেচেছিলেন।"
          },
          {
            "en": "Al-Irbad ibn Sariyah said: \"The Messenger of Allah ﷺ admonished us one day after the dawn prayer with a moving admonition from which eyes wept and hearts trembled. A man said: This is a farewell admonition, so what do you charge us with, Messenger of Allah? He said: I counsel you to fear Allah, and to hear and obey, even to an Abyssinian slave. Whoever of you lives will see much disagreement. Beware of newly invented matters, for they are misguidance. Whoever of you reaches that, let him hold to my Sunnah and the Sunnah of the rightly guided caliphs; bite on it with your molars.\"",
            "bn": "ইরবায ইবন সারিয়া (রাঃ) বলেন: “একদিন ফজরের নামাজের পর রাসূলুল্লাহ ﷺ আমাদের এমন মর্মস্পর্শী ওয়াজ করলেন যে চোখ থেকে অশ্রু ঝরল আর অন্তর ভয়ে কেঁপে উঠল। একজন বললেন: এ তো বিদায়ী ব্যক্তির ওয়াজ। হে আল্লাহর রাসূল, তাহলে আপনি আমাদের কী নির্দেশ দেন? তিনি বললেন: আমি তোমাদের আল্লাহকে ভয় করার এবং শোনা ও মানার নির্দেশ দিচ্ছি, যদিও সে হাবশি দাস হয়। তোমাদের মধ্যে যে বেঁচে থাকবে, সে অনেক মতভেদ দেখবে। নতুন উদ্ভাবিত বিষয় থেকে সাবধান থেকো, কারণ তা গোমরাহি। তোমাদের কেউ সে সময় পেলে সে যেন আমার সুন্নাত এবং হেদায়েতপ্রাপ্ত খুলাফায়ে রাশেদিনের সুন্নাত আঁকড়ে ধরে, মাড়ির দাঁত দিয়ে কামড়ে ধরে।”"
          }
        ]
      },
      {
        "h": {
          "en": "Recitation That Adds",
          "bn": "তিলাওয়াত যা বাড়িয়ে দেয়"
        },
        "p": [
          {
            "en": "Wa-idha tuliyat alayhim ayatuhu zadathum imanan: and when His verses are recited to them, they increase them in faith. Ibn Abbas glosses the increase as tasdiq, affirmation. At-Tabari: hearing the verses, the believer affirms them and is certain they are from Allah, and that affirmation is added to what he had affirmed before. Al-Qurtubi: the faith of this hour is an increase on the faith of yesterday. He adds, with it is said, that the increase is a widening of the chest through many signs. Al-Baghawi says affirmation and certainty; ar-Rabi', in at-Tabari, says khashyah, reverent fear.",
            "bn": "ওয়া ইযা তুলিয়াত আলাইহিম আয়াতুহু যাদাতহুম ঈমানা: আর যখন তাদের কাছে তাঁর আয়াত তিলাওয়াত করা হয়, তা তাদের ঈমান বাড়িয়ে দেয়। ইবন আব্বাস (রাঃ) এই বৃদ্ধিকে বলেন তাসদীক, সত্য বলে মেনে নেওয়া। কীভাবে, তাবারী তা বুঝিয়ে দেন। আয়াত শুনে মুমিন তা সত্য বলে মানে, নিশ্চিত হয় যে তা আল্লাহর কাছ থেকে এসেছে। আগে যা মেনেছিল, তার সঙ্গে এই মেনে নেওয়াটা যোগ হয়। কুরতুবী কথাটা বলেন সময়ের ভাষায়: এই মুহূর্তের ঈমান গতকালের ঈমানের ওপর বাড়তি। 'বলা হয়' কথাটি জুড়ে তিনি আরেকটি মত আনেন: অনেক আয়াত ও প্রমাণে বুক প্রশস্ত হওয়াই এই বৃদ্ধি। বাগাভী বলেন তাসদীক ও ইয়াকিন। তাবারীর বর্ণনায় রাবী বলেন খাশইয়াত, সমীহমেশানো ভয়।"
          },
          {
            "en": "As-Sa'di explains the mechanism. They lend the recitation their hearing and bring their hearts to reflect on it, and reflection is itself a deed of the heart. It must then show them a meaning they did not know, remind them of what they had forgotten, stir a longing for good and for their Lord's honour, or bring fear of punishment and a check on sin, and each of these increases faith. Al-Muyassar names the same cause in a phrase: their faith grows through their tadabbur of its meanings.",
            "bn": "এটা কীভাবে ঘটে, সা'দী তা খুলে বলেন। তারা তিলাওয়াতে কান পেতে দেয়, অন্তরকে হাজির করে তা নিয়ে ভাবতে। আর এই ভাবনাই অন্তরের একটি আমল। তখন কিছু না কিছু ঘটবেই। হয়তো অজানা কোনো অর্থ তাদের সামনে খুলে যায়, হয়তো ভুলে যাওয়া কথা মনে পড়ে। হয়তো কল্যাণের প্রতি আগ্রহ আর রবের সম্মানের জন্য ব্যাকুলতা জাগে, কিংবা শাস্তির ভয় এসে গুনাহ থেকে থামিয়ে দেয়। এর প্রতিটিই ঈমান বাড়ায়। মুয়াসসার একই কারণ বলেন এক কথায়: অর্থ নিয়ে তাদাব্বুরের ফলে তাদের ঈমান বাড়ে।"
          },
          {
            "en": "Ibn Kathir pairs it with 9:124 and says al-Bukhari and other imams took this verse and those like it as proof that faith increases and differs in hearts. That, he says, is the position of the majority of the Ummah, and several imams, among them ash-Shafi'i, Ahmad ibn Hanbal and Abu Ubayd, reported consensus on it. Al-Baghawi quotes Umayr ibn Habib, a Companion: when we remember Allah and praise Him, that is its increase; when we are heedless and forget, that is its decrease. As-Sa'di says plainly that faith rises with obedience and falls with its opposite.",
            "bn": "ইবন কাসীর এর সঙ্গে মিলিয়ে দেখান ৯:১২৪ আয়াত। তিনি বলেন, বুখারী ও অন্য ইমামরা এ আয়াত ও এর মতো আয়াতগুলোকে প্রমাণ হিসেবে নিয়েছেন যে ঈমান বাড়ে এবং অন্তরে অন্তরে তার তারতম্য হয়। তাঁর ভাষায়, এটাই উম্মাহর অধিকাংশের মত। শাফেয়ী, আহমদ ইবন হাম্বল ও আবু উবাইদসহ কয়েকজন ইমাম এ বিষয়ে ইজমার কথাও বলেছেন। বাগাভী উমাইর ইবন হাবীব (রাঃ)-এর কথা আনেন, যিনি সাহাবি ছিলেন: আমরা যখন আল্লাহকে স্মরণ করি ও তাঁর প্রশংসা করি, তখন ঈমান বাড়ে। যখন উদাসীন হই, ভুলে যাই, তখন কমে। সা'দী সোজাসুজি বলেন, আনুগত্যে ঈমান বাড়ে, আর তার উল্টো কাজে কমে।"
          }
        ]
      },
      {
        "h": {
          "en": "Upon Their Lord Alone",
          "bn": "কেবল নিজের রবের ওপর"
        },
        "p": [
          {
            "en": "Wa-ala rabbihim yatawakkalun: and upon their Lord they rely. The commentators read it as reliance on Him alone. At-Tabari: they are certain His decree is carried out in them, so they hope in none but Him and dread none besides Him. Ibn Kathir: they ask their needs of Him alone; and he quotes Sa'id ibn Jubayr: reliance on Allah is the gathering-point of faith. As-Sa'di calls it what carries every deed. Reliance as a theme of its own belongs to 3:160.",
            "bn": "ওয়া আলা রাব্বিহিম ইয়াতাওয়াক্কালূন: আর তারা তাদের রবের ওপরই ভরসা করে। তাফসীরকারেরা এর অর্থ করেন কেবল তাঁরই ওপর ভরসা। তাবারী বলেন, তারা নিশ্চিত যে তাদের ব্যাপারে তাঁর ফয়সালাই কার্যকর হবে, তাই তাঁকে ছাড়া কারও কাছে আশা রাখে না, তাঁকে ছাড়া কাউকে ভয় করে না। ইবন কাসীর বলেন, তারা প্রয়োজন চায় কেবল তাঁরই কাছে। তিনি সাঈদ ইবন জুবাইরের কথা আনেন: আল্লাহর ওপর তাওয়াক্কুলই ঈমানের মূল সমষ্টি। সা'দীর ভাষায়, তাওয়াক্কুলই সব আমলের বাহক। তাওয়াক্কুলের নিজস্ব আলোচনা ৩:১৬০ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer Upright, Wealth Passed On",
          "bn": "সোজা নামাজ, হাতবদলের সম্পদ"
        },
        "p": [
          {
            "en": "Then 8:3 turns outward: those who establish the prayer and spend from what We have provided them. Ibn Kathir: after their belief come their deeds, and the prayer is the right of Allah; Qatadah defines establishing it as guarding its times, its ablution, its bowing and its prostration. As-Sa'di includes its inner work, presence of heart, which he calls its soul. On spending, at-Tabari lists zakah, jihad, hajj, umrah and keeping dependants. Qatadah, in Ibn Kathir, says: this wealth is a loan and a trust with you, son of Adam, and soon you will part from it.",
            "bn": "এরপর ৮:৩ আয়াত বাইরের আমলের দিকে ফেরে: যারা নামাজ কায়েম করে, আর আমি যা দিয়েছি তা থেকে খরচ করে। ইবন কাসীর বলেন, বিশ্বাসের পরে এবার আমলের কথা, আর নামাজ আল্লাহর হক। কাতাদার সংজ্ঞায় নামাজ কায়েম মানে এর সময়, অজু, রুকু ও সিজদার হেফাজত। সা'দী এর ভেতরের আমলটাও ধরেন: অন্তরের উপস্থিতি, যাকে তিনি বলেন নামাজের প্রাণ। খরচের খাত হিসেবে তাবারী গোনেন জাকাত, জিহাদ, হজ, উমরা আর পরিবারের ভরণপোষণ। ইবন কাসীরের বর্ণনায় কাতাদা বলেন: হে আদমসন্তান, এই সম্পদ তোমার কাছে ধার আর আমানত। শিগগিরই তুমি তা ছেড়ে যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Haqqan Adds",
          "bn": "হাক্কান শব্দের ভার"
        },
        "p": [
          {
            "en": "Ula'ika humu al-mu'minuna haqqan: those are the believers, truly. Ibn Abbas, in at-Tabari and al-Baghawi, says they are free of disbelief, and at-Tabari's report sets it beside 4:151, those are the disbelievers, truly. Qatadah says they earned faith by right and Allah made it true for them. Al-Baghawi glosses haqqan as certainly; Muqatil, as no doubt in their faith. Al-Qurtubi and al-Muyassar say their outward and inward are alike in faith. As-Sa'di says they joined inner and outer deeds, knowledge and action, and the rights of Allah and of His servants.",
            "bn": "উলাইকা হুমুল মু'মিনূনা হাক্কা: তারাই সত্যিকারের মুমিন। তাবারী ও বাগাভীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, তারা কুফর থেকে মুক্ত। তাবারীর বর্ণনায় এর পাশে আসে ৪:১৫১ আয়াত: তারাই সত্যিকারের কাফির। কাতাদা বলেন, তারা ন্যায্যভাবে ঈমানের যোগ্য হয়েছে, আর আল্লাহ তা তাদের জন্য সত্য করে দিয়েছেন। বাগাভী হাক্কান-এর অর্থ করেন নিশ্চিতভাবে, মুকাতিল করেন: তাদের ঈমানে কোনো সন্দেহ নেই। কুরতুবী ও মুয়াসসারের মতে ঈমানে তাদের বাহির আর ভেতর এক। সা'দী বলেন, তারা ভেতরের ও বাইরের আমল, জ্ঞান ও কাজ, আল্লাহর হক ও বান্দার হক সব একসঙ্গে ধরেছে।"
          },
          {
            "en": "Can a person then call himself a true believer? Al-Baghawi infers from the verse that not everyone may, since it describes particular people with particular qualities, and not everyone can be shown to have them. He, al-Qurtubi and Ma'arif report al-Hasan's answer to a man who asked whether he was a believer: if you mean faith in Allah, His angels, Books, messengers and the reckoning, then yes; if you mean the believers of this passage, by Allah I do not know whether I am one of them.",
            "bn": "তাহলে কেউ কি নিজেকে সত্যিকারের মুমিন বলতে পারে? বাগাভী আয়াত থেকে এই সিদ্ধান্ত টানেন যে সবাই তা পারে না। কারণ আয়াতটি নির্দিষ্ট গুণের নির্দিষ্ট কিছু মানুষের বর্ণনা দেয়, আর সবার মধ্যে সে গুণগুলো আছে বলে নিশ্চিত হওয়া যায় না। বাগাভী, কুরতুবী ও মাআরিফুল কুরআন হাসান বসরীর একটি জবাব আনেন। একজন তাঁকে জিজ্ঞেস করেছিল, আপনি কি মুমিন? তিনি বললেন: যদি আল্লাহ, ফেরেশতা, কিতাব, রাসূল আর হিসাবের ওপর ঈমানের কথা জানতে চাও, তবে হ্যাঁ। আর যদি এই আয়াতগুলোর মুমিনদের কথা জানতে চাও, আল্লাহর কসম, আমি জানি না আমি তাদের একজন কি না।"
          },
          {
            "en": "Ibn Kathir records two further lines. Amr ibn Murrah reads haqqan as ordinary Arabic: one says so-and-so is truly a chief, though there are other chiefs among the people. And Ibn Kathir quotes at-Tabarani's report that al-Harith ibn Malik al-Ansari told the Prophet ﷺ he had become truly a believer, was asked what the reality of his faith was, since everything has a reality, described a soul turned from the world, wakeful nights and thirsty days, and was told three times: you have known, so hold to it. Al-Qurtubi alludes to the same report. Neither text grades it.",
            "bn": "ইবন কাসীর আরও দুটি কথা আনেন। আমর ইবন মুররা হাক্কান-কে পড়েন সাধারণ আরবি বাকরীতির মতো: বলা হয়, অমুক সত্যিকারের সরদার, যদিও গোত্রে আরও সরদার আছে। আর ইবন কাসীর তাবারানীর একটি বর্ণনা উদ্ধৃত করেন। হারিস ইবন মালিক আনসারী (রাঃ) নবী ﷺ-কে বলেছিলেন, আমি সত্যিকারের মুমিন হয়ে সকাল করেছি। তাঁকে জিজ্ঞেস করা হলো, প্রত্যেক জিনিসের একটা হাকিকত আছে, তোমার ঈমানের হাকিকত কী? তিনি বললেন, দুনিয়া থেকে মন উঠে গেছে, রাত জেগে কাটাই, দিন কাটাই তৃষ্ণার্ত থেকে। তাঁকে তিনবার বলা হলো: তুমি চিনেছ, এখন এটা আঁকড়ে থাকো। কুরতুবীও এ বর্ণনার দিকে ইঙ্গিত করেন। দুজনের কেউই এর মান উল্লেখ করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Ranks, Pardon, Noble Provision",
          "bn": "মর্যাদা, ক্ষমা, সম্মানের রিজিক"
        },
        "p": [
          {
            "en": "Lahum darajatun inda rabbihim wa-maghfiratun wa-rizqun karim: for them are ranks with their Lord, forgiveness and a noble provision. At-Tabari records a difference over the ranks. Mujahid says they are lofty deeds sent ahead in their lifetime; others say they are stations in Paradise, and Ibn Muhayriz counts seventy, each a race horse's run of seventy years, which al-Baghawi gives from ar-Rabi' ibn Anas. Ad-Dahhak, in Ibn Kathir, says those above see their excess, while those below do not feel that anyone has been preferred over them.",
            "bn": "লাহুম দারাজাতুন ইনদা রাব্বিহিম ওয়া মাগফিরাতুন ওয়া রিযকুন কারীম: তাদের জন্য রবের কাছে আছে নানা মর্যাদা, ক্ষমা আর সম্মানের রিজিক। দারাজাত নিয়ে তাবারী একটি মতভেদ উল্লেখ করেন। মুজাহিদের মতে এ হলো উঁচু আমল, যা তারা জীবদ্দশায় আগে পাঠিয়েছে। অন্যদের মতে জান্নাতের স্তর। ইবন মুহাইরিয বলেন, স্তর সত্তরটি, প্রতিটির ব্যবধান দ্রুতগামী ঘোড়ার সত্তর বছরের দৌড়। বাগাভী একই কথা আনেন রাবী ইবন আনাসের সূত্রে। ইবন কাসীরের বর্ণনায় দাহহাক বলেন, যে ওপরে, সে নিচের জনের ওপর নিজের শ্রেষ্ঠত্ব দেখে। আর যে নিচে, সে মনে করে না যে কাউকে তার ওপর প্রাধান্য দেওয়া হয়েছে।"
          },
          {
            "en": "Maghfirah, at-Tabari says, is pardon for their sins and a covering over them. Rizq karim, it was said, is Paradise; his own view is that it is what Allah has prepared for them there of food, drink and ease. Ma'arif al-Qur'an, from al-Bahr al-Muhit, pairs the three rewards with three kinds of marks: ranks for the heart's qualities, forgiveness for bodily worship such as prayer, and the noble provision for spending. Then 8:5 opens with kama, just as your Lord brought you out of your home in truth, which al-Muyassar reads as the march out of Medina toward the Quraysh caravan.",
            "bn": "তাবারী বলেন, মাগফিরাত মানে তাদের গুনাহ মাফ করা, তার ওপর পর্দা টেনে দেওয়া। রিযকুন কারীম সম্পর্কে বলা হয়েছে, তা জান্নাত। তবে তাবারীর নিজের মত, জান্নাতে আল্লাহ তাদের জন্য যে খাদ্য, পানীয় আর সুখের জীবন প্রস্তুত রেখেছেন, সেটাই এর অর্থ। মাআরিফুল কুরআন আল-বাহরুল মুহীতের বরাতে তিনটি পুরস্কারকে তিন ধরনের গুণের সঙ্গে মেলায়। অন্তরের গুণের বিপরীতে মর্যাদা, নামাজের মতো শারীরিক ইবাদতের বিপরীতে ক্ষমা, আর খরচের বিপরীতে সম্মানের রিজিক। এরপর ৮:৫ আয়াত শুরু হয় কামা দিয়ে: যেমন তোমার রব তোমাকে ন্যায়সঙ্গতভাবে তোমার ঘর থেকে বের করেছিলেন। মুয়াসসারের ব্যাখ্যায় এ হলো কুরাইশের কাফেলার দিকে মদিনা থেকে বেরিয়ে পড়ার কথা।"
          }
        ]
      }
    ]
  },
  "8:11": {
    "sections": [
      {
        "h": {
          "en": "Between the Angels and the Order",
          "bn": "ফেরেশতা আর হুকুমের মাঝখানে"
        },
        "p": [
          {
            "en": "Surah al-Anfal is Madinan and came down about the battle at Badr, in Ramadan of the second year after the Hijra. The surah opens on a dispute about the spoils, 8:1, and then defines the believers in 8:2-4 before settling who gets what. From 8:5 it turns back to the march out. So the recital that 8:11 belongs to is addressed to people who had just been quarrelling over what they had gained.",
            "bn": "সূরা আল-আনফাল মাদানী, আর নেমেছে বদরের যুদ্ধ নিয়ে, হিজরতের দ্বিতীয় বছরের রমজানে। সূরা শুরু হয় যুদ্ধলব্ধ সম্পদ নিয়ে মতবিরোধ দিয়ে, ৮:১ আয়াতে; এরপর কে কী পাবে সে হিসাব করার আগে ৮:২-৪ আয়াত মু'মিন কারা তা ঠিক করে দেয়। ৮:৫ থেকে আবার ফেরে বেরিয়ে পড়ার ঘটনায়। তাই ৮:১১ যে বর্ণনার অংশ, তা এমন লোকদের উদ্দেশ্যে বলা, যারা সদ্য নিজেদের প্রাপ্তি নিয়ে ঝগড়া করছিল।"
          },
          {
            "en": "The immediate neighbours matter. 8:9 recalls them calling on their Lord for help and the answer that a thousand angels would be sent, one following another. 8:10 says the reinforcement was only good tidings and a means of settling their hearts, and that victory comes from nowhere but Allah. 8:11 continues the same chain of idh clauses, remember when, with a help of a completely different kind. Then 8:12 returns to the angels and the command given to them.",
            "bn": "পাশের আয়াতগুলো গুরুত্বপূর্ণ। ৮:৯ স্মরণ করায় যে তারা প্রতিপালকের কাছে সাহায্য চাইছিল, আর জবাব এল এক হাজার ফেরেশতা পাঠানোর, যারা পর পর আসবে। ৮:১০ বলে, এ সাহায্য ছিল কেবল সুসংবাদ আর দিল শান্ত করার উপায়, আর জয় আল্লাহ ছাড়া কোথাও থেকে আসে না। ৮:১১ একই ইয 'স্মরণ কর' ধারায় চলতে থাকে, তবে একেবারে অন্য ধরনের সাহায্য নিয়ে। এরপর ৮:১২ আবার ফেরেশতাদের কথায় ফেরে আর তাঁদের দেওয়া হুকুম শোনায়।"
          },
          {
            "en": "The occasion is established rather than guessed. The tafsir and the sirah agree that the verse describes the night before the fighting. al-Qurtubi transmits from az-Zajjaj that the rain fell on the night of Badr, named there as the seventeenth of Ramadan, until the valleys ran; and he reports the further view that these events happened before the Muslims reached Badr itself, calling that more correct and crediting it to what Ibn Ishaq recorded in his Sirah.",
            "bn": "শানে নুযূল এখানে অনুমান নয়, প্রমাণিত। তাফসীর আর সীরাত একমত যে আয়াতটি যুদ্ধের আগের রাতের বর্ণনা। কুরতুবী যাজ্জাজ থেকে আনেন যে বৃষ্টি নেমেছিল বদরের রাতে, সেখানে সে রাতকে রমজানের সতেরো তারিখ বলা হয়েছে, আর বৃষ্টি এমন হয়েছিল যে উপত্যকা দিয়ে পানি বয়ে গিয়েছিল। তিনি আরেকটি মতও জানান, এ ঘটনাগুলো ঘটেছিল মুসলিমরা বদরে পৌঁছার আগেই; এ মতকেই তিনি বেশি সঠিক বলেন আর ইবনু ইসহাকের সীরাতের বর্ণনার সাথে মেলান।"
          }
        ]
      },
      {
        "h": {
          "en": "Nu'as, Amanah, Rijz",
          "bn": "নু'আস, আমানাহ, রিজয"
        },
        "p": [
          {
            "en": "The word for the sleep is nu'as, the first heaviness that comes over the eyes, not nawm, full sleep. It is described as amanatan minhu, a security from Him. at-Tabari glosses the phrase as a safety from Allah for you, that your enemy should not overcome you, and adds a general remark: drowsiness in war is a security from Allah. al-Qurtubi puts it from the other side, saying that nu'as is the condition of one who is safe and not afraid.",
            "bn": "ঘুমের জন্য ব্যবহৃত শব্দ নু'আস, অর্থাৎ চোখে নেমে আসা প্রথম ভার, পুরো ঘুম বোঝানো নাওম নয়। এটাকে বলা হয়েছে আমানাতাম মিনহু, তাঁর কাছ থেকে আসা নিরাপত্তা। তাবারীর ব্যাখ্যা, এ হল আল্লাহর কাছ থেকে তোমাদের জন্য নিরাপত্তা, যাতে শত্রু তোমাদের উপর জয়ী না হয়; আর তিনি একটা সাধারণ কথাও যোগ করেন, যুদ্ধের মধ্যে তন্দ্রা আল্লাহর কাছ থেকে আসা নিরাপত্তা। কুরতুবী কথাটা অন্য দিক থেকে বলেন, নু'আস হল সেই লোকের অবস্থা যে নিরাপদ আর ভয় পাচ্ছে না।"
          },
          {
            "en": "The verb has recognised variant readings, and both commentators reason about them the same way. The Madinans read yughshikum, the Kufans yughashshikum with the doubled shin, and some readers of Makkah and Basra read yaghshakum an-nu'asu, with the drowsiness as the subject. at-Tabari prefers the Kufan form because every reader agrees that and He sent down upon you water is Allah's own act, so the verb coupled to it should be Allah's act too and the sentence run evenly.",
            "bn": "ক্রিয়াপদটির স্বীকৃত কিরাআতভেদ আছে, আর দুই মুফাসসিরই সেগুলো নিয়ে একই ধরনের যুক্তি দেন। মাদীনাবাসীরা পড়েন ইউগশীকুম, কূফাবাসীরা শীন অক্ষরে তাশদীদ দিয়ে ইউগাশশীকুম, আর মাক্কা ও বাসরার কিছু কারী পড়েন ইয়াগশাকুমুন নু'আসু, যেখানে তন্দ্রাই কর্তা। তাবারী কূফী পাঠটি বেছে নেন, কারণ 'আর তিনি তোমাদের উপর পানি নামালেন' অংশটি আল্লাহরই কাজ, এ নিয়ে সব কারী একমত; তাই তার সাথে জোড়া ক্রিয়াপদটিও আল্লাহর কাজ হওয়াই উচিত, যাতে বাক্য একই তালে চলে।"
          },
          {
            "en": "al-Qurtubi calls the Madinan reading a good one on exactly that ground, that the act should be attributed to Allah because what follows is and He sends down upon you, and he cites Makki as choosing the doubled form for the same reason. The disagreement is about vocalisation; the reasoning on both sides is identical, and it puts the sleep firmly in the hand of the One who sent the rain.",
            "bn": "কুরতুবী মাদীনী পাঠটিকে উত্তম বলেন ঠিক এই কারণেই, যে কাজটি আল্লাহর দিকেই সম্বন্ধ করা উচিত, কারণ পরেই আসছে 'আর তিনি তোমাদের উপর নামান'; আর তিনি জানান, মাক্কী একই কারণে তাশদীদযুক্ত রূপটি বেছেছেন। মতভেদটা কেবল হরকত নিয়ে; দুই পক্ষের যুক্তি অবিকল একই, আর সে যুক্তি ঘুমটাকেও সেই সত্তার হাতেই তুলে দেয়, যিনি বৃষ্টি পাঠিয়েছেন।"
          },
          {
            "en": "Then rijz ash-shaytan. The word rijz carries filth, punishment and agitation together, and the two app translations reach for different halves of it, the English for the evil suggestions of Satan and the Bengali for satanic defilement. Both senses are in the tafsir, because the rain both washed them and silenced a whisper. After that comes liyarbita ala qulubikum, from rabt, to tie something fast; as-Sa'di says it means He steadies the hearts, since the firmness of the heart is the root of the firmness of the body.",
            "bn": "এরপর আসে রিজযুশ শায়তান। রিজয শব্দটি একসাথে বহন করে নাপাকি, শাস্তি আর অস্থিরতা; আর অ্যাপের দুই অনুবাদ এর দুই দিক ধরেছে, ইংরেজিটি শয়তানের কুমন্ত্রণা আর বাংলাটি শয়তানী পংকিলতা। দুটো অর্থই তাফসীরে আছে, কারণ বৃষ্টি তাদের ধুয়েও দিয়েছে আর একটা কুমন্ত্রণাও থামিয়ে দিয়েছে। তারপর আসে লিইয়ারবিতা আলা কুলূবিকুম, রাবত মূল থেকে, যার অর্থ শক্ত করে বেঁধে দেওয়া; সা'দী বলেন এর মানে তিনি দিলগুলো মজবুত করে দেন, কারণ দিলের দৃঢ়তাই শরীরের দৃঢ়তার গোড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Came First, Sleep or Rain",
          "bn": "আগে তন্দ্রা নাকি বৃষ্টি"
        },
        "p": [
          {
            "en": "al-Qurtubi records a genuine disagreement about the order of the two gifts and does not force it shut. The apparent sense of the Quran, he says, indicates that the drowsiness came before the rain, since the verse mentions it first. But Ibn Abi Najih held that the rain came before the drowsiness. Nothing in the verse settles it, and al-Qurtubi leaves both on the page, which is how a careful commentator handles a detail that the wording does not decide.",
            "bn": "দুই দানের ক্রম নিয়ে কুরতুবী সত্যিকারের একটা মতভেদ লিখে রাখেন, আর জোর করে তা মিটিয়ে দেন না। তিনি বলেন, কুরআনের বাহ্যিক ভাষা বলছে তন্দ্রা এসেছিল বৃষ্টির আগে, কারণ আয়াত আগে তারই উল্লেখ করে। কিন্তু ইবনু আবী নাজীহের মত ছিল, বৃষ্টি এসেছিল তন্দ্রার আগে। আয়াতের ভাষায় বিষয়টা মীমাংসা হয় না, আর কুরতুবী দুটো মতই রেখে দেন। শব্দে যা মীমাংসা হয় না, সতর্ক মুফাসসির তা এভাবেই সামলান।"
          },
          {
            "en": "al-Qurtubi also quotes al-Mawardi on why sleep was a favour that night, and he gives two aspects of it. The first is that rest strengthened them for the fighting the next day. The second is that it made them safe by taking dread out of their hearts, for as the saying goes, safety puts a man to sleep and fear keeps him awake. A third view that al-Qurtubi mentions is that the drowsiness came over them at the moment the two lines met, as at Uhud.",
            "bn": "সেই রাতে ঘুম কেন অনুগ্রহ ছিল, তা নিয়ে কুরতুবী মাওয়ারদীর কথাও তুলে আনেন, আর দুটি দিক দেখান। প্রথম দিক, বিশ্রাম তাদের পরদিনের লড়াইয়ের জন্য শক্তি জুগিয়েছে। দ্বিতীয় দিক, ঘুম তাদের দিল থেকে আতঙ্ক সরিয়ে নিরাপদ করেছে; কথায় আছে, নিরাপত্তা ঘুম আনে আর ভয় জাগিয়ে রাখে। কুরতুবী তৃতীয় একটা মতও উল্লেখ করেন, তন্দ্রা তাদের উপর নেমেছিল দুই সারি মুখোমুখি হওয়ার মুহূর্তে, যেমন উহুদের দিন হয়েছিল।"
          },
          {
            "en": "at-Tabari explains the water with the same care. It was rain Allah sent down that the believers might purify themselves for their prayer, because they had risen that morning in a state of major impurity with no water. Satan had whispered to them about exactly that and left them grieving, and Allah took it away from their hearts with the rain. That, at-Tabari says, is His binding of their hearts; and the feet held because the sand they had met the enemy on was soft, and the rain packed it so that feet no longer sank.",
            "bn": "পানির ব্যাখ্যায় তাবারী একই সতর্কতা রাখেন। এ ছিল আল্লাহর নামানো বৃষ্টি, যাতে মু'মিনরা নামাজের জন্য পাক হতে পারে; কারণ সেদিন সকালে তারা জেগেছিল বড় নাপাকির অবস্থায়, আর পানি ছিল না। শয়তান ঠিক এ কথাটাই তাদের কানে দিয়েছিল আর তাদের মন ভারী করে রেখেছিল, আর আল্লাহ বৃষ্টি দিয়ে তা তাদের দিল থেকে সরিয়ে দিলেন। তাবারীর ভাষায় এটাই তাদের দিল বেঁধে দেওয়া; আর পা টিকে গিয়েছিল কারণ শত্রুর মুখোমুখি হওয়া জায়গাটার বালু ছিল নরম, আর বৃষ্টি তা চেপে দিয়েছিল, ফলে পা আর দেবে যায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night Under the Trees",
          "bn": "গাছের নিচে সেই রাত"
        },
        "p": [
          {
            "en": "at-Tabari transmits the scene from Ali (RA), through Abu Ishaq from Harithah. A light rain fell on us in the night, he said, meaning the night whose morning was Badr, so we went under the trees and the shields to shelter from it. And the Messenger of Allah ﷺ spent the night calling on his Lord: O Allah, if You destroy this band, You will not be worshipped on the earth. When the dawn rose he called out, the prayer, servants of Allah, and the people came out from under the trees and the shields, and he ﷺ prayed with us and urged them to the fighting.",
            "bn": "তাবারী দৃশ্যটি এনেছেন আলী (রাঃ) থেকে, আবূ ইসহাক হারিসা থেকে যেভাবে বর্ণনা করেছেন। তিনি বলেন, রাতে আমাদের উপর হালকা বৃষ্টি পড়ল, অর্থাৎ যে রাতের সকালেই ছিল বদর; তাই আমরা বৃষ্টি থেকে বাঁচতে গাছ আর ঢালের নিচে গিয়ে বসলাম। আর আল্লাহর রাসূল ﷺ সারা রাত তাঁর প্রতিপালককে ডেকে কাটালেন: হে আল্লাহ, আপনি যদি এ দলটিকে ধ্বংস করে দেন, তবে যমীনে আপনার ইবাদাত করা হবে না। ভোর হতেই তিনি ডাক দিলেন, নামাজ, হে আল্লাহর বান্দারা; লোকেরা গাছ আর ঢালের নিচ থেকে বেরিয়ে এল, আর তিনি ﷺ আমাদের নিয়ে নামাজ পড়লেন আর যুদ্ধে উৎসাহ দিলেন।"
          },
          {
            "en": "A du'a of that day is in the Sahih with its own wording, which should not be mixed with the wording above. Sahih al-Bukhari 3953, from Ibn Abbas (RA): on the day of Badr the Prophet ﷺ said, O Allah, I appeal to You by Your covenant and Your promise; O Allah, if You will, You will not be worshipped. Abu Bakr (RA) took him by the hand and said, this is enough for you. Then he ﷺ came out saying the words of 54:45, their assembly will be defeated and they will turn their backs.",
            "bn": "সেদিনের একটি দোয়া সহীহ গ্রন্থে নিজের আলাদা শব্দে আছে, আর তা উপরের বর্ণনার শব্দের সাথে মিশিয়ে ফেলা চলবে না। সহীহ বুখারী ৩৯৫৩, ইবনু আব্বাস (রাঃ) থেকে: বদরের দিন নবী ﷺ বললেন, হে আল্লাহ, আপনার অঙ্গীকার আর আপনার ওয়াদার দোহাই দিয়ে চাইছি; হে আল্লাহ, আপনি চাইলে আপনার ইবাদাত করা হবে না। আবূ বাকর (রাঃ) তাঁর হাত ধরে বললেন, আপনার জন্য এতটুকুই যথেষ্ট। এরপর তিনি ﷺ বেরিয়ে এলেন এবং ৫৪:৪৫ আয়াতের কথা বলতে বলতে এলেন, এ দল পরাজিত হবে আর তারা পিঠ ফিরিয়ে পালাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Feet Planted in Other Battles",
          "bn": "অন্য যুদ্ধেও পা শক্ত"
        },
        "p": [
          {
            "en": "3:154 uses the very same pair of words about Uhud: then after distress He sent down upon you security in the form of drowsiness. That verse adds something 8:11 does not, that the gift reached one faction while another lay awake worrying about themselves, so the same mercy was not distributed evenly. at-Tabari records Ibn Zayd reading the drowsiness of this verse against that one, and it is worth hearing the two together.",
            "bn": "৩:১৫৪ আয়াত উহুদ নিয়ে ঠিক একই শব্দজোড়া ব্যবহার করে: এরপর দুশ্চিন্তার পর তিনি তোমাদের উপর প্রশান্তি হিসেবে তন্দ্রা নামিয়ে দিলেন। সেখানে এমন একটা কথাও আছে যা ৮:১১ আয়াতে নেই, দানটা এক দলের কাছে পৌঁছেছিল, আর অন্য দল জেগে থেকে নিজেদের নিয়ে দুশ্চিন্তায় কাটাচ্ছিল; একই রহমত সবার ভাগে সমানভাবে পড়েনি। তাবারী জানাচ্ছেন, ইবনু যায়দ এ আয়াতের তন্দ্রাকে সেই আয়াতের পাশে রেখেই পড়েছেন, আর দুটো একসাথে শোনাই ভালো।"
          },
          {
            "en": "2:250 is the prayer of Talut's soldiers as they went out: our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people. The planting of feet is asked for there and granted here, by rain. al-Qurtubi notices the link from the other end, citing a report of al-Bara ibn Azib (RA) in which the Companions at Badr were compared in number to Talut's men who crossed the river with him.",
            "bn": "২:২৫০ হল তালুতের সৈনিকদের দোয়া, বেরোনোর সময় তারা বলেছিল: হে আমাদের প্রতিপালক, আমাদের উপর ধৈর্য ঢেলে দিন, আমাদের পা মজবুত করুন আর কাফির সম্প্রদায়ের উপর আমাদের জয় দিন। পা মজবুত করার আবেদন সেখানে, আর এখানে সেটাই দেওয়া হচ্ছে, বৃষ্টি দিয়ে। কুরতুবী সম্পর্কটা অন্য প্রান্ত থেকে ধরেন, বারা ইবনু আযিব (রাঃ)-এর বর্ণনা এনে, যেখানে বদরের সাহাবীদের সংখ্যাকে তালুতের সেই লোকদের সংখ্যার সাথে মেলানো হয়েছে যারা তাঁর সাথে নদী পার হয়েছিল।"
          },
          {
            "en": "The same gift appears elsewhere under another name. 9:40 and 48:4 both speak of sakinah, tranquility sent down into the heart, once into the heart of the Prophet ﷺ in the cave and once into the hearts of the believers so that their faith would increase. 33:9 recalls a wind and unseen armies at a later siege. And 3:126 repeats 8:10 almost word for word, that the reinforcement was good tidings and a settling of hearts, and that victory is from Allah alone.",
            "bn": "একই দান অন্য নামেও অন্যত্র আসে। ৯:৪০ আর ৪৮:৪ দুটোতেই সাকীনার কথা, দিলের ভেতরে নামানো প্রশান্তি; একবার গুহায় নবী ﷺ-এর দিলে, আরেকবার মু'মিনদের দিলে, যাতে তাদের ঈমান বাড়ে। ৩৩:৯ পরের এক অবরোধে বাতাস আর অদৃশ্য বাহিনীর কথা স্মরণ করায়। আর ৩:১২৬ প্রায় হুবহু ৮:১০ আয়াতের কথাই বলে, এ সাহায্য ছিল সুসংবাদ আর দিল শান্ত করার জন্য, আর জয় কেবল আল্লাহর কাছ থেকেই আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Small Mercies in a Hard Season",
          "bn": "কঠিন সময়ের ছোট রহমত"
        },
        "p": [
          {
            "en": "Notice how unimpressive the help in this verse is. A nap and a shower of rain. No wall came down and no enemy was struck; that comes a verse later. What the believers were given on the worst night of their lives so far was rest and water, and the Quran preserves both in the record of the battle as though they were the decisive thing. Much of what actually holds a person up looks like this.",
            "bn": "খেয়াল করুন, এ আয়াতের সাহায্যটা দেখতে কত সাধারণ। একটুখানি ঘুম আর এক পশলা বৃষ্টি। কোনো দেয়াল ভাঙেনি, কোনো শত্রুও আঘাত পায়নি; সে কথা আসে পরের আয়াতে। জীবনের সবচেয়ে কঠিন রাতে তাদেরকে দেওয়া হল বিশ্রাম আর পানি, আর কুরআন যুদ্ধের বিবরণে দুটোকেই এমনভাবে রেখে দিল যেন এগুলোই আসল নির্ণায়ক। মানুষকে সত্যিই যা দাঁড় করিয়ে রাখে, তার অনেকটাই এমন চেহারার।"
          },
          {
            "en": "The rain did several jobs at once, and the verse names them in order: it washed them, it took the evil of Satan from them, it bound their hearts, and it steadied their feet. One small mercy can be carrying four loads. That is worth turning into a habit at the end of a hard day: not a general thanks, but a list of what actually held you up, named one by one the way the verse names its four purposes.",
            "bn": "বৃষ্টি একসাথে কয়েকটা কাজ করেছে, আর আয়াত সেগুলো ক্রমে নাম ধরে বলে: তাদের ধুয়ে দিল, শয়তানের কুপ্রভাব সরিয়ে দিল, দিল বেঁধে দিল আর পা মজবুত করল। ছোট একটা রহমত চারটে বোঝা একসাথে বইতে পারে। কঠিন কোনো দিনের শেষে এটাকে অভ্যাসে বদলে নেওয়া যায়: ঢালাও শুকরিয়া নয়, বরং আজ সত্যিই কী আপনাকে ধরে রেখেছিল তার তালিকা, আয়াত যেভাবে চারটি উদ্দেশ্য নাম ধরে বলে সেভাবে একটা একটা করে।"
          },
          {
            "en": "The clause about the whisper is the most practical of the four. Some of what presses on a believer in a hard season is not a fact at all but a suggestion, and at Badr the suggestion attacked their standing with Allah: you claim to be His allies and here you are, praying in this state. The answer was not a debate. It was water, a wash, and a prayer at dawn. When a whisper goes for your standing, purify yourself and pray, and do not argue with it.",
            "bn": "চারটির মধ্যে কুমন্ত্রণার কথাটাই সবচেয়ে কাজের। কঠিন সময়ে মু'মিনের উপর যা চাপ দেয়, তার কিছু আসলে কোনো ঘটনাই নয়, নিছক প্ররোচনা; আর বদরে সেই প্ররোচনা হামলা করেছিল আল্লাহর সাথে তাদের সম্পর্কের উপর: দাবি কর তাঁর বন্ধু, অথচ এই অবস্থায় নামাজ পড়ছ। জবাবটা কোনো তর্ক ছিল না। জবাব ছিল পানি, গোসল আর ভোরের নামাজ। কুমন্ত্রণা যখন আপনার সম্পর্কের উপর হাত দেয়, পাক হয়ে নামাজে দাঁড়ান, তার সাথে তর্কে নামবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for Steady Feet",
          "bn": "পা মজবুত রাখার দোয়া"
        },
        "p": [
          {
            "en": "The Quran has already put this verse's content into a supplication, so the shortest route is to borrow it. 2:250: our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people. 8:11 is that request answered from an unexpected direction, and saying the words of 2:250 on a night you cannot sleep puts you in the same posture as the men who said them first.",
            "bn": "এ আয়াতের বিষয়বস্তু কুরআন আগেই একটা দোয়ায় বসিয়ে দিয়েছে, তাই সবচেয়ে সহজ পথ সেটাই ধার করা। ২:২৫০: হে আমাদের প্রতিপালক, আমাদের উপর ধৈর্য ঢেলে দিন, আমাদের পা মজবুত করুন আর কাফির সম্প্রদায়ের উপর আমাদের জয় দিন। ৮:১১ হল সেই আবেদনের জবাব, আসছে অপ্রত্যাশিত দিক থেকে। যে রাতে ঘুম আসে না, সে রাতে ২:২৫০ আয়াতের কথাগুলো বলা আপনাকে ঠিক তাঁদের অবস্থানেই দাঁড় করিয়ে দেয়, যাঁরা প্রথমে এ কথা বলেছিলেন।"
          },
          {
            "en": "Or ask for the verse's own four things in their own order, clearly as words of your own and not as a narration: O Allah, purify me, take the enemy's whisper away from me, bind my heart firm, and plant my feet. Then give me from Yourself a security that lets me sleep tonight. Four requests, and the verse has already shown that He answers them with things a person might otherwise walk past without noticing.",
            "bn": "কিংবা আয়াতের নিজের চারটি বিষয়ই নিজের ক্রমে চেয়ে নিন, আর পরিষ্কারভাবেই নিজের কথা হিসেবে, কোনো বর্ণনা হিসেবে নয়: হে আল্লাহ, আমাকে পাক করুন, শত্রুর কুমন্ত্রণা আমার থেকে সরিয়ে দিন, আমার দিল মজবুত করে বেঁধে দিন আর আমার পা শক্ত করুন। এরপর আপনার কাছ থেকে এমন নিরাপত্তা দিন, যা আজ রাতে আমাকে ঘুমাতে দেয়। চারটি আবেদন; আর আয়াত আগেই দেখিয়ে দিয়েছে যে তিনি এগুলোর জবাব দেন এমন জিনিস দিয়ে, যা মানুষ খেয়ালই না করে পাশ কাটিয়ে চলে যেতে পারত।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for a Sleepless Night",
          "bn": "নিদ্রাহীন রাতের কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "What did you get through last month on, if you list it honestly? How much of that list would you have called help at the time? And on the night before something you were dreading, did you let yourself sleep, or did you treat being awake as a form of loyalty that the Quran does not seem to ask for?",
            "bn": "গত মাসটা আপনি কী দিয়ে পার করলেন, সৎভাবে তালিকা করলে কী দাঁড়ায়? সেই তালিকার কতটুকুকে আপনি সেই সময় সাহায্য বলে ডেকেছিলেন? আর যে জিনিসটা নিয়ে আপনার ভয় ছিল, তার আগের রাতে কি নিজেকে ঘুমাতে দিয়েছিলেন, নাকি জেগে থাকাটাকেই এক ধরনের বিশ্বস্ততা ধরে নিয়েছিলেন, যা কুরআন চাইছে বলে মনে হয় না?"
          },
          {
            "en": "Which of the worries you are carrying right now would collapse if you asked whether it is a fact or a whisper? And when a whisper reaches for your standing with Allah, what do you usually do first, argue or wash and pray? The believers at Badr were handed water. What has He handed you that you have been using without calling it by its name?",
            "bn": "এখন যে দুশ্চিন্তাগুলো বয়ে বেড়াচ্ছেন, তার কোনটা ভেঙে পড়বে যদি জিজ্ঞেস করেন, এটা আসল ঘটনা নাকি কুমন্ত্রণা? আর কুমন্ত্রণা যখন আল্লাহর সাথে আপনার সম্পর্কের দিকে হাত বাড়ায়, আপনি সাধারণত আগে কী করেন, তর্ক করেন নাকি পাক হয়ে নামাজে দাঁড়ান? বদরের মু'মিনদের হাতে পানি তুলে দেওয়া হয়েছিল। তিনি আপনার হাতে কী তুলে দিয়েছেন, যা আপনি ব্যবহার করে যাচ্ছেন কিন্তু নাম ধরে ডাকেননি?"
          }
        ]
      }
    ]
  },
  "8:15": {
    "sections": [
      {
        "h": {
          "en": "After the Angels Were Sent",
          "bn": "ফেরেশতা পাঠানোর পরের হুকুম"
        },
        "p": [
          {
            "en": "Al-Anfal is Madinan and came down about Badr. The verses just before this one are pure narration: 8:12 records what the Lord inspired to the angels, 8:13 gives the reason for it, and 8:14 closes that passage. Then 8:15 changes register entirely. It stops recounting and starts commanding, opening with the address to those who have believed, and 8:16 follows at once with the exception and the consequence before 8:17 returns to the account of the day.",
            "bn": "সূরা আল-আনফাল মাদানী, আর নেমেছে বদর নিয়ে। এর ঠিক আগের আয়াতগুলো নিখাদ বর্ণনা: ৮:১২ জানায় প্রতিপালক ফেরেশতাদের কী ওয়াহী করলেন, ৮:১৩ তার কারণ বলে, আর ৮:১৪ সেই অংশ শেষ করে। এরপর ৮:১৫ একেবারে সুর বদলে ফেলে। বর্ণনা থামিয়ে হুকুম শুরু হয়, আর শুরুটা হয় ঈমানদারদের সম্বোধন দিয়ে। তারপরই ৮:১৬ আসে ব্যতিক্রম আর পরিণাম নিয়ে, আর ৮:১৭ আবার সেদিনের বিবরণে ফিরে যায়।"
          },
          {
            "en": "al-Qurtubi makes a point of when the verse arrived, and it turns out to matter for the law. The majority of scholars, he reports, argued that the verse came down after the fighting, after the war had ended and the day itself had passed. That timing is part of their case that the ruling is not tied to Badr alone, and it is one of the places where a question about chronology decides a question about obligation.",
            "bn": "আয়াতটি কখন নেমেছে, কুরতুবী সে কথায় জোর দেন, আর দেখা যায় বিষয়টা ফিকহের জন্যও গুরুত্বপূর্ণ। তিনি জানান, অধিকাংশ আলিম বলেছেন আয়াতটি নেমেছে যুদ্ধ শেষ হওয়ার পর, লড়াই মিটে যাওয়ার এবং সেই দিনটা পার হয়ে যাওয়ার পর। এ সময়টাই তাঁদের যুক্তির অংশ যে হুকুমটি কেবল বদরের সাথে বাঁধা নয়। কখন নেমেছে সেই প্রশ্নই এখানে দায়িত্বের প্রশ্নটার মীমাংসা করে দেয়।"
          },
          {
            "en": "Later in the same surah the positive form of the same instruction arrives. 8:45 says that when you encounter a company, stand firm and remember Allah much, and 8:46 adds obedience and the warning that disputing will cost you your courage and your strength will depart. The existing reflection on 8:46 reads it exactly that way, tying internal quarrels to lost nerve. 8:15 states the prohibition; 8:45-46 name the means by which it is kept.",
            "bn": "একই সূরার পরের দিকে এসে একই নির্দেশের সদর্থক রূপটিও আসে। ৮:৪৫ বলে, কোনো দলের মুখোমুখি হলে অবিচল থাক আর আল্লাহকে বেশি বেশি স্মরণ কর; আর ৮:৪৬ তার সাথে যোগ করে আনুগত্য এবং এই সতর্কবাণী যে বাদানুবাদ করলে সাহস ফুরিয়ে যাবে আর শক্তি চলে যাবে। ৮:৪৬ আয়াতের উপর যে ভাবনাটি আগেই আছে, সেটিও ঠিক এভাবেই পড়ে, ঘরের ঝগড়াকে মনোবল হারানোর সাথে বেঁধে দেয়। ৮:১৫ নিষেধটা বলে; ৮:৪৫-৪৬ বলে সে নিষেধ রক্ষার উপায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Zahf: Closing the Distance",
          "bn": "যাহফ: দূরত্ব কমে আসা"
        },
        "p": [
          {
            "en": "The word that fixes the situation is zahfan. al-Qurtubi traces it: az-zahf is drawing near little by little, and its original sense is dragging oneself along on the ground, after which anyone walking in war toward another came to be called zahif. At-tazahuf is two sides approaching each other. at-Tabari glosses the word the same way, as some of you advancing toward others, and defines at-tazahuf as drawing close and coming near.",
            "bn": "পরিস্থিতিটা যে শব্দ নির্দিষ্ট করে দেয়, তা হলো যাহফান। কুরতুবী শব্দটির শিকড় দেখান: যাহফ মানে অল্প অল্প করে এগিয়ে আসা, আর মূল অর্থ মাটিতে নিজেকে টেনে টেনে চলা; পরে যুদ্ধে প্রতিপক্ষের দিকে যে-ই হেঁটে এগোয়, তাকেই যাহিফ বলা হতে থাকে। তাযাহুফ মানে দুই পক্ষের পরস্পরের দিকে এগোনো। তাবারীও শব্দটির একই ব্যাখ্যা দেন, তোমাদের কেউ কারও দিকে এগিয়ে আসা, আর তাযাহুফের অর্থ বলেন কাছে আসা ও নিকটবর্তী হওয়া।"
          },
          {
            "en": "So the word narrows the verse to a moment. This is not any meeting with people who disbelieve; it is the point at which two lines are closing on one another. al-Qurtubi's own paraphrase makes it plain: when you have drawn near and come within sight of each other, do not flee from them and do not give them your backs. Take the word away and the prohibition would float free of the situation it was given for.",
            "bn": "শব্দটি তাই আয়াতটিকে এক মুহূর্তে সীমিত করে দেয়। এটা কাফিরদের সাথে যেকোনো সাক্ষাৎ নয়; এটা সেই বিন্দু, যেখানে দুই সারি পরস্পরের দিকে এগিয়ে আসছে। কুরতুবীর নিজের ব্যাখ্যাই কথাটা পরিষ্কার করে: যখন কাছাকাছি এসে গেছ আর একে অন্যকে দেখতে পাচ্ছ, তখন তাদের থেকে পালাবে না আর তাদের দিকে পিঠ দেখাবে না। শব্দটা সরিয়ে দিলে নিষেধটা তার নির্দিষ্ট অবস্থা থেকে ছুটে গিয়ে ভেসে বেড়াবে।"
          },
          {
            "en": "The object of the prohibition is chosen as carefully. al-Qurtubi quotes Ibn Atiyyah, who notes that al-adbar is the plural of dubur and that naming the back in this verse is eloquently placed, because the word is ugly for the one who flees and carries blame against him. The Quran does not merely say do not flee. It names the part of a man that would be presented, which is why the phrase still stings when it is read aloud.",
            "bn": "নিষেধে কোন শব্দ বসবে, তাও সমান যত্নে বাছা। কুরতুবী ইবনু আতিয়্যার কথা তুলে আনেন। তিনি বলেন, আল-আদবার হলো দুবুর শব্দের বহুবচন, আর এ আয়াতে পিঠের নাম নেওয়াটা ভাষার দিক থেকে একেবারে মোক্ষম জায়গায় বসেছে; কারণ শব্দটা পলাতকের জন্য লজ্জার, আর তাতে তার প্রতি তিরস্কার মিশে আছে। কুরআন শুধু 'পালিও না' বলে থেমে যায় না। পালানোর সময় মানুষ শরীরের যে অংশটা শত্রুর দিকে ফিরিয়ে দেয়, সেটারই নাম নেয়। তাই জোরে পড়লে কথাটা আজও গায়ে বিঁধে।"
          }
        ]
      },
      {
        "h": {
          "en": "Badr Only, or Every Battle",
          "bn": "শুধু বদর, নাকি সব যুদ্ধ"
        },
        "p": [
          {
            "en": "al-Qurtubi lays out a real disagreement here and names both sides. It is reported from Abu Sa'id al-Khudri (RA) that the prohibition was specific to the day of Badr, and Nafi', al-Hasan, Qatadah, Yazid ibn Abi Habib and ad-Dahhak said the same, and Abu Hanifah held it. Their reasoning is historical: the people of Badr had no company to withdraw to, there were no other Muslims on the earth that day, and the Muslims had no band except the Prophet ﷺ himself.",
            "bn": "কুরতুবী এখানে সত্যিকারের এক মতভেদ সাজিয়ে দেন আর দুই পক্ষের নামই বলেন। আবূ সাঈদ খুদরী (রাঃ) থেকে বর্ণিত যে নিষেধটি ছিল কেবল বদরের দিনের জন্য; নাফি', হাসান, কাতাদা, ইয়াযীদ ইবনু আবী হাবীব ও দাহহাকও একই কথা বলেছেন, আর আবূ হানীফা এ মতই নিয়েছেন। তাঁদের যুক্তিটা ঐতিহাসিক: বদরের লোকদের ফিরে যাওয়ার মতো কোনো দল ছিল না, সেদিন যমীনে আর কোনো মুসলিম ছিল না, আর মুসলিমদের কোনো বাহিনীই ছিল না, ছিলেন কেবল নবী ﷺ নিজে।"
          },
          {
            "en": "Their textual argument is the word yawma'idhin, on such a day, in 8:16, which they read as pointing at Badr, and they hold that the ruling was afterwards lightened by the verse of weakness. al-Qurtubi records an objection from al-Kiya to the historical premise: there were many of the Ansar still in Madinah whom the Prophet ﷺ had not ordered out, since the people did not think there would be a battle and believed it was the caravan.",
            "bn": "তাঁদের শাব্দিক যুক্তি ৮:১৬ আয়াতের ইয়াওমায়িযিন শব্দ, অর্থাৎ 'এমন দিনে', যাকে তাঁরা বদরের দিকে ইশারা হিসেবে পড়েন; আর তাঁদের মত, পরে দুর্বলতার আয়াত এসে হুকুমটি হালকা করে দিয়েছে। কুরতুবী এ ঐতিহাসিক ভিত্তির বিরুদ্ধে কিয়ার আপত্তিটিও লিখে রাখেন: মাদীনায় আনসারদের অনেকেই তখনো রয়ে গিয়েছিলেন, যাঁদের নবী ﷺ বেরোনোর আদেশ দেননি; কারণ লোকেরা ভাবেনি যুদ্ধ হবে, তারা ধরে নিয়েছিল ব্যাপারটা বাণিজ্য কাফেলার।"
          },
          {
            "en": "The other position is reported from Ibn Abbas (RA) and, al-Qurtubi says, from the rest of the scholars: the verse stands until the Day of Resurrection, subject to the condition of numbers that Allah set out in another verse, and there is no abrogation in it at all. Their proof is the one about timing, that the verse came down after the war was over. Malik, ash-Shafi'i and most of the scholars held this, and al-Qurtubi treats the hadith of the seven destructive sins as decisive for it.",
            "bn": "অন্য মতটি বর্ণিত ইবনু আব্বাস (রাঃ) থেকে, আর কুরতুবীর ভাষায় বাকি আলিমদের থেকেও: আয়াতের হুকুম ক্বিয়ামাত পর্যন্ত বহাল, তবে সংখ্যার সেই শর্ত মেনে যা আল্লাহ অন্য আয়াতে বলে দিয়েছেন; আর এতে কোনো নাসখ নেই। তাঁদের দলিল সেই সময়ের কথাটাই, আয়াতটি নেমেছে যুদ্ধ শেষ হওয়ার পর। মালিক, শাফিঈ ও অধিকাংশ আলিম এ মতেই ছিলেন, আর কুরতুবী সাত ধ্বংসকারী গুনাহের হাদিসটিকে এ পক্ষে চূড়ান্ত দলিল ধরেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Sixth in a List of Seven",
          "bn": "সাত গুনাহের ষষ্ঠটি"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari 2766, from Abu Hurayrah (RA): the Prophet ﷺ said, avoid the seven great destructive sins. The people asked, Messenger of Allah, what are they? He said: associating others with Allah, sorcery, killing the soul Allah has forbidden except by right, consuming interest, consuming an orphan's wealth, fleeing on the day of battle, and slandering chaste believing women. Fleeing is the sixth of the seven. al-Qurtubi cites the same hadith from Sahih Muslim, also through Abu Hurayrah (RA), and calls it decisive.",
            "bn": "সহীহ বুখারী ২৭৬৬, আবূ হুরাইরা (রাঃ) থেকে: নবী ﷺ বললেন, সাতটি ধ্বংসকারী গুনাহ থেকে বেঁচে থাক। লোকেরা জিজ্ঞেস করল, হে আল্লাহর রাসূল, সেগুলো কী? তিনি বললেন: আল্লাহর সাথে শরীক করা, জাদু, আল্লাহ যে প্রাণ হত্যা হারাম করেছেন তাকে অন্যায়ভাবে হত্যা করা, সুদ খাওয়া, এতীমের মাল খাওয়া, যুদ্ধের দিনে পিঠ ফিরিয়ে পালানো, আর সচ্চরিত্রা মু'মিন নারীদের প্রতি অপবাদ দেওয়া। সাতটির মধ্যে পালানোটা ষষ্ঠ। কুরতুবী একই হাদিস সহীহ মুসলিম থেকে আনেন, আবূ হুরাইরা (রাঃ)-এর সূত্রেই, আর তাকে চূড়ান্ত দলিল বলেন।"
          },
          {
            "en": "Notice what the hadith settles and what it leaves alone. It places the act among the gravest of sins, and al-Qurtubi reports that fleeing is a destructive major sin by the apparent sense of the Quran and the agreement of most of the imams. What the hadith does not do is define the situation. 8:15 does that with one word, 8:16 supplies the two exceptions, and 8:66 sets the numbers. A ruling this heavy is the one a reader is least entitled to handle loosely.",
            "bn": "খেয়াল করুন হাদিসটি কী মীমাংসা করে আর কী ছেড়ে দেয়। হাদিসটি কাজটিকে সবচেয়ে বড় গুনাহের কাতারে বসায়, আর কুরতুবী জানান, কুরআনের বাহ্যিক অর্থ আর অধিকাংশ ইমামের একমত অনুসারে যুদ্ধ থেকে পালানো ধ্বংসকারী কবীরা গুনাহ। কিন্তু হাদিসটি অবস্থার সীমা বেঁধে দেয় না। সেটা ৮:১৫ করে একটি শব্দ দিয়ে, ৮:১৬ দুটো ব্যতিক্রম জোগায়, আর ৮:৬৬ সংখ্যা ঠিক করে দেয়। এত ভারী হুকুম নিয়েই পাঠকের ঢিলেঢালা কথা বলার অধিকার সবচেয়ে কম।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse That Lightened It",
          "bn": "যে আয়াত ভার হালকা করল"
        },
        "p": [
          {
            "en": "Fifty verses on, in the same surah, the numbers are set. 8:65 gives the first standard: twenty steadfast among you will overcome two hundred, and a hundred will overcome a thousand of those who disbelieve, because they are a people who do not understand. That is a ratio of ten to one, and it is stated as an instruction to urge the believers rather than as a description of what any group happens to feel capable of.",
            "bn": "একই সূরায় আরও পঞ্চাশ আয়াত পরে সংখ্যাগুলো ঠিক করে দেওয়া হয়। ৮:৬৫ প্রথম মাপটা দেয়: তোমাদের মধ্যে কুড়িজন অবিচল থাকলে তারা দুইশ জনের উপর জয়ী হবে, আর একশ জন জয়ী হবে কাফিরদের এক হাজারের উপর, কারণ তারা এমন সম্প্রদায় যারা বোঝে না। অর্থাৎ একজনের বিপরীতে দশজন। আর কথাটা এসেছে মু'মিনদের উৎসাহ দেওয়ার নির্দেশ হিসেবে, কোনো দল নিজেকে কতটা সক্ষম মনে করে তার বর্ণনা হিসেবে নয়।"
          },
          {
            "en": "8:66 then lowers it. Now Allah has lightened it for you, and He knows that among you is weakness; so a hundred steadfast will overcome two hundred, and a thousand will overcome two thousand by the permission of Allah, and Allah is with the steadfast. al-Qurtubi calls this the verse of weakness, and it is the condition he attaches to 8:15. The prohibition on turning back is read against a stated ratio, not against any odds whatever.",
            "bn": "এরপর ৮:৬৬ সেটা নামিয়ে আনে। এখন আল্লাহ তোমাদের ভার হালকা করেছেন, আর তিনি জানেন তোমাদের মধ্যে দুর্বলতা আছে; তাই একশ জন অবিচল থাকলে তারা দুইশ জনের উপর জয়ী হবে, আর এক হাজার আল্লাহর অনুমতিতে দুই হাজারের উপর জয়ী হবে; আর আল্লাহ অবিচলদের সাথেই আছেন। কুরতুবী এ আয়াতকে দুর্বলতার আয়াত বলেন, আর এটাই সেই শর্ত যা তিনি ৮:১৫ আয়াতের সাথে জুড়ে দেন। তাই পিঠ না ফেরানোর নিষেধটা একটা বলে দেওয়া অনুপাতের সাথে বাঁধা; শত্রু যত বেশিই হোক তবু দাঁড়িয়ে থাকতে হবে, এমন নয়।"
          },
          {
            "en": "From that al-Qurtubi derives the working rule. Whoever flees from two is a fleer from the zahf; whoever flees from three is not, and the threat does not fall on him. On the view of the majority it is not lawful for a hundred to flee except from more than two hundred, and wherever more than two stand against one Muslim, withdrawal is permitted, though patience is better. He also records a minority, among them Ibn al-Majishun in al-Wadihah, who weigh equipment and strength rather than headcount alone.",
            "bn": "এ থেকেই কুরতুবী কাজের নিয়মটা বের করেন। যে দুইজনের সামনে থেকে পালায় সে যাহফ থেকে পলাতক; যে তিনজনের সামনে থেকে পালায় সে নয়, আর তার উপর ধমকিটা পড়ে না। অধিকাংশের মতে একশ জনের পালানো বৈধ নয়, কেবল দুইশর বেশি সংখ্যার সামনে থেকে ছাড়া; আর একজন মুসলিমের বিপরীতে দুইয়ের বেশি দাঁড়ালে সরে আসা জায়েয, যদিও ধৈর্যই উত্তম। তিনি অল্প কয়েকজনের একটি মতও লিখে রাখেন; তাঁদের একজন ইবনুল মাজিশূন, আল-ওয়াদিহা গ্রন্থে। তাঁরা কেবল মাথা না গুনে সরঞ্জাম আর শক্তিও হিসাবে ধরেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding a Post You Took",
          "bn": "নেওয়া দায়িত্বে টিকে থাকা"
        },
        "p": [
          {
            "en": "The first thing this verse asks of a reader who is not standing in a battle line is restraint. It is a ruling of war with a defined moment, two named exceptions and a numerical condition set in another verse, and the people entitled to apply it are the people in that situation with knowledge of the law. Learning it as law, in the shape the commentators give it, and not lifting it out as a slogan, is itself part of obeying it.",
            "bn": "যুদ্ধের সারিতে দাঁড়িয়ে নেই এমন পাঠকের কাছে এ আয়াত প্রথমে যা চায় তা হল সংযম। এ হুকুম যুদ্ধের হুকুম, যার নির্দিষ্ট এক মুহূর্ত আছে, দুটি বলে দেওয়া ব্যতিক্রম আছে, আর অন্য আয়াতে বসানো সংখ্যার শর্ত আছে; আর তা প্রয়োগ করার অধিকার সেই লোকদের, যাঁরা সেই অবস্থায় আছেন আর শরীয়তের জ্ঞান রাখেন। মুফাসসিরগণ যে আকারে দিয়েছেন সেভাবেই একে হুকুম হিসেবে শেখা, আর স্লোগান বানিয়ে তুলে না নেওয়া, এ আয়াত মানারই একটা অংশ।"
          },
          {
            "en": "What does carry across is the thing the verse protects: the trust of a man who is standing where he agreed to stand, and who knows that others are counting on his standing there. as-Sa'di reads the prohibition as a command to a courage that comes from faith, and to seeking out the means that strengthen hearts and bodies, since standing firm is help given to the religion of Allah. 8:46 in this same surah shows the mechanism from the other end, quarrelling first and courage leaving afterwards, so unity and patience and discipline arrive as one package rather than three separate virtues.",
            "bn": "সাধারণ পাঠকের জীবনেও যা খাটে, তা হলো সেই জিনিস যাকে এ আয়াত পাহারা দেয়: আমানত। একজন মানুষ যেখানে দাঁড়াবে বলে কথা দিয়েছিল, সেখানেই দাঁড়িয়ে আছে, আর জানে অন্যরা তার সেখানে থাকার উপর ভরসা করে আছে। সা'দী এ নিষেধকে পড়েন ঈমান থেকে আসা সাহসের হুকুম হিসেবে, আর দিল ও শরীর মজবুত করে এমন উপায় খুঁজে নেওয়ার হুকুম হিসেবে; কারণ অবিচল থাকাটাই আল্লাহর দীনের সাহায্য। একই সূরার ৮:৪৬ আয়াত ব্যাপারটা অন্য প্রান্ত থেকে দেখায়: আগে ঝগড়া, তারপর সাহস চলে যাওয়া। ফলে ঐক্য, ধৈর্য আর শৃঙ্খলা তিনটি আলাদা গুণ হিসেবে আসে না, একসাথেই আসে।"
          },
          {
            "en": "And notice that the two exceptions in 8:16 are not escapes. Swerving as a manoeuvre for the fighting, and moving to join another company: both of them leave a man facing the same fight, and both of them are about getting back into it. Where stepping back is allowed at all, it is a step toward the work and not away from it. A pause to regroup and a departure are two different acts, whatever a man tells himself.",
            "bn": "আর খেয়াল করুন, ৮:১৬ আয়াতের দুটি ব্যতিক্রম পালানোর পথ নয়। লড়াইয়ের কৌশল হিসেবে সরে যাওয়া, আর নিজের দলের সাথে গিয়ে মেশা; দুটোতেই মানুষের মুখ একই লড়াইয়ের দিকেই থাকে, আর দুটোই সেই লড়াইয়ে ফিরে আসার জন্য। পিছিয়ে আসা যেখানে আদৌ জায়েয, সেখানেও পা পড়ে কাজের দিকেই, কাজ থেকে দূরে নয়। গুছিয়ে নেওয়ার জন্য থামা আর ছেড়ে চলে যাওয়া দুটো আলাদা কাজ, মানুষ নিজেকে যা-ই বোঝাক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a Against Turning Back",
          "bn": "পিঠ না ফেরানোর দোয়া"
        },
        "p": [
          {
            "en": "The Quran has already supplied the prayer for the moment this verse legislates. 2:250 is what Talut's soldiers said as they went out: our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people. And 8:45 gives the practice to go with it, inside the encounter itself: stand firm, and remember Allah much, that you may be successful. Patience asked for, and remembrance as the thing that carries it.",
            "bn": "এ আয়াত যে মুহূর্তের হুকুম দিচ্ছে, সে মুহূর্তের দোয়াও কুরআন আগেই জোগাড় করে দিয়েছে। ২:২৫০ হল তালুতের সৈনিকদের বেরোনোর সময়ের কথা: হে আমাদের প্রতিপালক, আমাদের উপর ধৈর্য ঢেলে দিন, আমাদের পা মজবুত করুন আর কাফির সম্প্রদায়ের উপর আমাদের জয় দিন। আর ৮:৪৫ তার সাথে মুখোমুখি হওয়ার ভেতরের আমলটা দেয়: অবিচল থাক আর আল্লাহকে বেশি বেশি স্মরণ কর, যাতে তোমরা সফল হও। ধৈর্য চাওয়া হল, আর জিকিরই সে ধৈর্য বহন করে।"
          },
          {
            "en": "A supplication in this verse's own vocabulary, offered as words of your own and not as a narration, would run: O Allah, do not let me show my back to what You have put in front of me, and do not let me leave a place You stood me in. Make me firm where I am, and if I must move, let it be toward the work and not away from it. Allah is with the steadfast, as 8:66 ends.",
            "bn": "এ আয়াতের শব্দ দিয়েই একটা দোয়া করা যায়। বলবেন নিজের কথা হিসেবে, কোনো বর্ণিত দোয়া হিসেবে নয়: হে আল্লাহ, আপনি আমার সামনে যা রেখেছেন, তার দিকে আমাকে পিঠ দেখাতে দেবেন না; আর আপনি যেখানে আমাকে দাঁড় করিয়েছেন, সে জায়গা ছাড়তে দেবেন না। যেখানে আছি সেখানেই আমাকে মজবুত রাখুন; আর সরতে হলে যেন কাজের দিকেই সরি, কাজ ছেড়ে নয়। ৮:৬৬ আয়াত যেমন শেষ হয়: আল্লাহ অবিচলদের সাথেই আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Own Ground",
          "bn": "নিজের জায়গা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Where did you agree to stand, and are you still there? Think of the places nobody is watching: a responsibility you took on quietly, a person who depends on you, a duty that has stopped being interesting. And when you last stepped back from one of them, which of the two exceptions did you tell yourself you were using?",
            "bn": "কোথায় দাঁড়াবেন বলে কথা দিয়েছিলেন, আর এখনো সেখানে আছেন কি? সেই জায়গাগুলোর কথা ভাবুন যেগুলোর দিকে কেউ তাকিয়ে নেই: চুপচাপ কাঁধে তুলে নেওয়া কোনো দায়িত্ব, আপনার উপর নির্ভর করে থাকা কোনো মানুষ, কিংবা এমন কোনো কাজ যা আর আকর্ষণীয় লাগে না। আর শেষবার যখন এর কোনোটা থেকে পিছিয়ে এসেছিলেন, নিজেকে বলেছিলেন দুটো ব্যতিক্রমের কোনটা ব্যবহার করছেন?"
          },
          {
            "en": "This verse comes with named exceptions rather than none at all. What does that tell you about how commands are given to people whom Allah knows to be weak, and does 8:66 change how you hear the demand in 8:15? And when you next read a ruling of the Quran that you are not in a position to be asked to carry out, what will you do with it?",
            "bn": "এ আয়াতে ব্যতিক্রম একেবারে নেই, তা নয়; দুটো ব্যতিক্রম নাম ধরে বলে দেওয়া আছে। আল্লাহ যাদের দুর্বলতা জানেন, তাদের তিনি কীভাবে হুকুম দেন, এ থেকে আপনি কী বোঝেন? ৮:৬৬ আয়াত পড়ার পর ৮:১৫ আয়াতের দাবিটা কি আপনার কানে অন্যভাবে বাজে? আর এরপর কুরআনের এমন কোনো হুকুম পড়লে, যা পালন করার অবস্থাতেই আপনি নেই, তা নিয়ে কী করবেন?"
          }
        ]
      }
    ]
  },
  "8:19": {
    "sections": [
      {
        "h": {
          "en": "The Last Word to the Beaten",
          "bn": "পরাজিতদের উদ্দেশে শেষ কথা"
        },
        "p": [
          {
            "en": "Al-Anfal is Madinan, and this stretch of it is the debriefing of Badr. Two verses earlier the believers are told that they did not kill the enemy, Allah did, and that the throw was not the Prophet's own throw; 8:18 adds that Allah weakens the plot of those who disbelieve. Then the surah turns its face and speaks to the defeated side directly. This is the last thing said to them before 8:20 turns back to the believers with a command to obey.",
            "bn": "সূরা আনফাল মাদানী, আর এর এই অংশটা বদরের পর্যালোচনা। দুই আয়াত আগে মু'মিনদের বলা হয়েছে, তারা শত্রুকে হত্যা করেনি, আল্লাহই করেছেন, আর নিক্ষেপটাও নবীর ﷺ নিজের নিক্ষেপ ছিল না। ৮:১৮ আয়াত যোগ করে, আল্লাহ কাফিরদের ষড়যন্ত্র অকেজো করে দেন। এরপর সূরা মুখ ফিরিয়ে সরাসরি পরাজিত পক্ষের সঙ্গে কথা বলে। ৮:২০ আয়াতে আবার মু'মিনদের দিকে ফিরে আনুগত্যের হুকুম আসার আগে এটাই তাদের উদ্দেশে শেষ কথা।"
          },
          {
            "en": "The occasion is established and it is unusual, because the verse answers a prayer that the losing side had made. Ibn Kathir traces it through az-Zuhri from Abdullah ibn Tha'laba ibn Su'ayr: on the day of Badr Abu Jahl said, O Allah, whichever of us severed the ties of the womb and brought what is not known, destroy him this day. As-Suddi adds an earlier scene. Before leaving Makkah the idolaters held the coverings of the Ka'ba and asked Allah to give victory to the mightier of the two armies.",
            "bn": "এ আয়াতের শানে নুযূল প্রমাণিত, আর ব্যাপারটা একটু অন্যরকম: আয়াতটি জবাব দিচ্ছে পরাজিত পক্ষেরই করা এক দোয়ার। ইবনু কাসীর এর সূত্র টানেন যুহরী থেকে, আবদুল্লাহ ইবনু সা'লাবা ইবনু সুআইর থেকে: বদরের দিন আবূ জাহল বলেছিল, হে আল্লাহ, আমাদের মধ্যে যে আত্মীয়তার বন্ধন ছিঁড়েছে আর অচেনা জিনিস নিয়ে এসেছে, আজ তাকেই ধ্বংস করুন। সুদ্দী এর আগের আরেকটি দৃশ্য যোগ করেন। মক্কা ছাড়ার আগে মুশরিকরা কা'বার গিলাফ ধরে আল্লাহর কাছে চেয়েছিল, দুই বাহিনীর মধ্যে যেটি বেশি শক্তিশালী, তাকেই জয় দিন।"
          },
          {
            "en": "Al-Qurtubi records both accounts and declines to choose between them, writing that there is no contradiction, since they may have done both. That is the state of the evidence and this article leaves it there. What matters for reading the verse is the shape of what they asked for. It was not a request for their own side to win. It was a request for judgment, staked on the confidence that the other man was the wrongdoer and that heaven would say so.",
            "bn": "কুরতুবী দুটি বর্ণনাই রাখেন, আর কোনোটি বাছাই করতে যান না। তিনি লেখেন, এতে বিরোধ নেই, কারণ তারা দুটোই করে থাকতে পারে। দলিলের অবস্থা এটাই, আর এ লেখাও সেখানেই রেখে দিচ্ছে। আয়াত বুঝতে আসল কথা হলো তারা কী চেয়েছিল তার ধরনটা। এটা নিজের পক্ষের জয় চাওয়া ছিল না। এটা ছিল রায় চাওয়া, আর সেই চাওয়ার ভরসা ছিল এই বিশ্বাসে যে অন্যায়টা অন্য লোকটার, আর আসমান সেটাই বলে দেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Root, Two Outcomes",
          "bn": "এক ধাতু, দুই পরিণতি"
        },
        "p": [
          {
            "en": "The verb and the noun are cut from one root. Istaftahu and al-fath both come from f-t-h, to open, and in this vocabulary the opening runs two ways at once: a verdict handed down and a victory handed over. English cannot hold both in one word, so the translation says decision twice and lets the brackets carry the difference between the decision they wanted and the decision that came. Ad-Dahhak and Ikrimah gloss the clause by swapping in another root altogether: if you sought a judgment, the judgment has come to you.",
            "bn": "ক্রিয়া আর বিশেষ্য দুটোই এক ধাতু থেকে কাটা। ইসতাফতিহূ আর আল-ফাত্হ, দুটোরই মূল ফ-ত-হ, অর্থ খোলা। এ শব্দভাণ্ডারে সেই খোলা একসঙ্গে দুদিকে যায়: এক দিকে নেমে আসা রায়, অন্য দিকে হাতে তুলে দেওয়া জয়। ইংরেজি এক শব্দে দুটো ধরে রাখতে পারে না, তাই সেখানে দুবার মীমাংসা শব্দটি আসে, আর তারা যে মীমাংসা চেয়েছিল আর যে মীমাংসা এসেছে, এ দুইয়ের ফারাক বোঝাতে বন্ধনী লাগে। দাহহাক আর ইকরিমা এ অংশটির ব্যাখ্যায় একেবারে অন্য ধাতু বসিয়ে দেন: তোমরা ফয়সালা চেয়েছিলে, ফয়সালা তোমাদের কাছে এসে গেছে।"
          },
          {
            "en": "Then fi'atukum, your company. A fi'ah is a band, a body of men who stand together, and the word itself says nothing about size; the verse has to add wa law kathurat, even if it should grow numerous, to cover the thing they had been relying on. The clause does not claim their numbers were small, and it does not deny that numbers matter in a fight. It says the numbers will not make them independent of Allah, which is what the verb tughni carries.",
            "bn": "এরপর ফিআতুকুম, তোমাদের দল। ফিআ মানে একদল লোক যারা একসঙ্গে দাঁড়ায়, আর শব্দটি নিজে সংখ্যার কথা কিছুই বলে না। তাই আয়াতকে যোগ করতে হয় ওয়া লাও কাসুরাত, সংখ্যায় বেড়ে গেলেও, যাতে তারা যার উপর ভরসা করছিল সেটাও ধরা পড়ে। এ অংশ বলছে না যে তাদের সংখ্যা কম ছিল, আর যুদ্ধে সংখ্যার কোনো দাম নেই তাও অস্বীকার করছে না। এটা বলছে, সংখ্যা তাদের আল্লাহর মুখাপেক্ষিতা থেকে মুক্ত করবে না। তুগনী ক্রিয়াটি এ কথাই বহন করে।"
          },
          {
            "en": "The condition and its answer are built to mirror each other. In ta'udu na'ud, if you return We return, the same verb twice, the second in the form that answers a condition, and neither one is given an object. Whatever they come back to, He comes back to. Al-Qurtubi also notes the two readings of the closing clause: with a fatha it reads as a reason and hangs on what 8:18 says about the plot being weakened, and with a kasra it begins a fresh sentence.",
            "bn": "শর্ত আর তার জবাব একে অন্যের আয়নার মতো গড়া। ইন তাঊদূ নাউদ, তোমরা ফিরে এলে আমিও ফিরে আসব। একই ক্রিয়া দুবার, দ্বিতীয়টি শর্তের জবাবের রূপে, আর কোনোটির সঙ্গেই কোনো কর্ম বসানো হয়নি। তারা যার দিকে ফিরবে, তিনিও তার দিকেই ফিরবেন। কুরতুবী শেষ অংশটির দুটি কিরাআতও তুলে ধরেন: যবরসহ পড়লে এটা কারণ বোঝায় আর ৮:১৮ আয়াতের ষড়যন্ত্র অকেজো করার কথার সঙ্গে ঝুলে থাকে, আর যেরসহ পড়লে এটা নতুন বাক্য শুরু করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Being Addressed",
          "bn": "কথাটা কাকে বলা হচ্ছে"
        },
        "p": [
          {
            "en": "At-Tabari reads the address as spoken to the idolaters who fought at Badr, and he unpacks the request they had made: if you seek Allah's ruling against whichever of the two parties is more severing of kinship and more unjust, then Allah's ruling has come, His giving victory to the wronged over the wronger and to the truthful over the false. He transmits the same reading from ad-Dahhak, Ikrimah, Mujahid and Qatadah, and Qatadah's sentence is the shortest of them: Badr was a verdict, and a lesson for whoever takes lessons.",
            "bn": "তাবারী এ সম্বোধনকে পড়েন বদরে যুদ্ধ করা মুশরিকদের উদ্দেশে বলা কথা হিসেবে, আর তারা কী চেয়েছিল সেটা তিনি খুলে দেন: দুই দলের মধ্যে যে বেশি আত্মীয়তা ছিন্নকারী আর বেশি জালিম, তার বিরুদ্ধে যদি তোমরা আল্লাহর রায় চাও, তবে আল্লাহর রায় এসে গেছে, মজলুমকে জালিমের উপর আর সত্যপন্থীকে মিথ্যাপন্থীর উপর তাঁর জয় দেওয়া। এই একই পাঠ তিনি দাহহাক, ইকরিমা, মুজাহিদ ও কাতাদা থেকে বর্ণনা করেন, আর কাতাদার কথাটাই সবচেয়ে ছোট: বদর ছিল এক ফয়সালা, আর যে শিক্ষা নেয় তার জন্য শিক্ষা।"
          },
          {
            "en": "From Ibn Abbas (RA) at-Tabari carries two glosses, one taking the clause as a request for a verdict and the other as a request for reinforcement, and he records that when Ibn Abbas (RA) was asked whether the address was to the idolaters he answered that he knew it only as that. As-Sa'di works in the same direction and states the irony plainly: they asked Allah to bring His might and His punishment down on the transgressing wrongdoers, and it came down on them.",
            "bn": "ইবনু আব্বাস (রাঃ) থেকে তাবারী দুটি ব্যাখ্যা আনেন। একটিতে এ অংশ রায় চাওয়া, অন্যটিতে সাহায্য চাওয়া। তিনি এটাও লিখে রাখেন, ইবনু আব্বাসকে (রাঃ) যখন জিজ্ঞেস করা হলো সম্বোধনটা মুশরিকদের কি না, তিনি বলেছিলেন, এ ছাড়া অন্য কিছু আমার জানা নেই। সা'দী একই দিকে এগোন, আর ব্যাপারটার মোচড় সোজা কথায় বলে দেন: তারা আল্লাহর কাছে চেয়েছিল সীমালঙ্ঘনকারী জালিমদের উপর তাঁর শক্তি আর শাস্তি নেমে আসুক, আর সেটা নেমে এসেছিল তাদেরই উপর।"
          },
          {
            "en": "Al-Qurtubi is the one who lays out a real disagreement, and he gives three positions. That the address is to the disbelievers, which he attributes to al-Hasan, Mujahid and others. That it is to the believers, so that desisting means desisting from what some of them did in taking spoils and captives before permission, and We will return means We will return to rebuking you. And that the opening clause speaks to the believers while the rest speaks to the disbelievers. He then quotes al-Qushayri: the correct view is that it addresses the disbelievers.",
            "bn": "আসল মতভেদটা সাজিয়ে দেন কুরতুবী, আর তিনি তিনটি মত দেন। এক, সম্বোধন কাফিরদের; এ মত তিনি হাসান, মুজাহিদ ও অন্যদের দিকে নিসবত করেন। দুই, সম্বোধন মু'মিনদের, তাহলে বিরত হওয়া মানে অনুমতির আগে গনীমত আর বন্দী নেওয়ার যে কাজ তাদের কেউ করেছিল তা থেকে বিরত হওয়া, আর আমিও ফিরে আসব মানে তোমাদের ধমক দেওয়ায় ফিরে আসব। তিন, শুরুর অংশ মু'মিনদের উদ্দেশে আর বাকিটা কাফিরদের উদ্দেশে। এরপর তিনি কুশাইরীর কথা তুলে দেন: সহীহ মত হলো, এটা কাফিরদের উদ্দেশেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Report Actually Is",
          "bn": "বর্ণনাটি আসলে কী"
        },
        "p": [
          {
            "en": "The four tafsirs consulted for this verse attach no saying of the Prophet ﷺ to it, and that is worth stating rather than filling with something borrowed. What they do attach is a report about a man's speech. Ibn Kathir names the chain, Ibn Ishaq and others through az-Zuhri from Abdullah ibn Tha'laba ibn Su'ayr, and then says where it is collected: Imam Ahmad recorded it in his Musnad, an-Nasa'i in the tafsir section of his Sunan, and al-Hakim brought it in the Mustadrak.",
            "bn": "এ আয়াতের জন্য যে চারটি তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে নবীর ﷺ কোনো বাণী জুড়ে দেয়নি। বাইরে থেকে কিছু ধার করে ফাঁক ভরানোর চেয়ে কথাটা খোলাখুলি বলে দেওয়াই ভালো। তাঁরা যা জুড়ে দেন, তা একজন মানুষের কথার বর্ণনা। ইবনু কাসীর সনদটি বলে দেন: ইবনু ইসহাক ও অন্যরা যুহরী থেকে, আবদুল্লাহ ইবনু সা'লাবা ইবনু সুআইর থেকে। তারপর জানান কোথায় এটি সংকলিত: ইমাম আহমাদ তাঁর মুসনাদে, নাসাঈ তাঁর সুনানের তাফসীর অংশে, আর হাকিম তাঁর মুসতাদরাকে।"
          },
          {
            "en": "Al-Hakim's verdict is worth quoting as his own and not as anyone else's: sahih by the criteria of the two Shaykhs, though the two of them did not record it. That second half is the part a reader should keep, because it says exactly where the report stands. It is in neither Sahih, it is graded by a later collector, and what it preserves is not a ruling or a promise but the sentence a man shouted in a battle line. The weight of the verse does not rest on it.",
            "bn": "হাকিমের রায়টি তাঁরই রায় হিসেবে তুলে ধরাই ঠিক, অন্য কারও হিসেবে নয়: দুই শাইখের শর্ত অনুযায়ী সহীহ, যদিও তাঁরা দুজন এটি সংকলন করেননি। শেষ অর্ধেকটাই পাঠকের মনে রাখার মতো, কারণ ওটাই বলে দেয় বর্ণনাটির অবস্থান ঠিক কোথায়। এটি কোনো সহীহ গ্রন্থে নেই, এর মান দিয়েছেন পরের যুগের এক সংকলক, আর এতে যা রক্ষা পেয়েছে তা কোনো বিধান বা ওয়াদা নয়, যুদ্ধের কাতারে দাঁড়িয়ে এক লোকের চিৎকার করে বলা একটি বাক্য। আয়াতের ভার এর উপর দাঁড়িয়ে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Answer Back",
          "bn": "যে আয়াতগুলো জবাব দেয়"
        },
        "p": [
          {
            "en": "8:32 belongs beside this verse and the commentators put it there. It records another of their prayers: O Allah, if this should be the truth from You, then rain down upon us stones from the sky. Set next to our verse it turns an incident into a habit, a settled readiness to dare Allah to close the matter. 8:36 shows the same confidence spent in another currency, wealth poured out to turn people from the way of Allah, and ending in regret.",
            "bn": "৮:৩২ আয়াতের জায়গা এ আয়াতের পাশেই, আর মুফাসসিরগণ সেখানেই রেখেছেন। সেখানে তাদের আরেকটি দোয়ার কথা আছে: হে আল্লাহ, এটা যদি আপনার কাছ থেকে আসা সত্য হয়, তবে আমাদের উপর আসমান থেকে পাথর বর্ষণ করুন। আমাদের আয়াতের পাশে রাখলে বোঝা যায়, এটা একবারের ঘটনা ছিল না, ছিল তাদের স্বভাব: আল্লাহকে চ্যালেঞ্জ করে বিষয়টা মিটিয়ে ফেলতে বলার পাকা অভ্যাস। ৮:৩৬ আয়াত দেখায়, সেই একই আত্মবিশ্বাস তারা অন্যভাবেও খরচ করেছে: আল্লাহর পথ থেকে মানুষ ফেরাতে সম্পদ ঢেলেছে, আর শেষে পেয়েছে আফসোস।"
          },
          {
            "en": "17:8 carries the same clause almost word for word, spoken about the Children of Israel: but if you return, We will return. That makes the sentence a standing rule rather than a threat aimed at Quraysh alone. 9:25 is the sharpest of the sisters, because it turns the warning toward the believers themselves: on the day of Hunayn your great numbers pleased you, and they did not avail you at all. The verb about availing is the one our verse uses.",
            "bn": "১৭:৮ আয়াতে প্রায় হুবহু একই কথা আছে, তবে বলা হয়েছে বানী ইসরাঈল সম্পর্কে: তোমরা যদি আবার কর, আমিও আবার করব। ফলে বাক্যটি শুধু কুরাইশকে লক্ষ্য করে দেওয়া হুমকি থাকে না, হয়ে যায় একটা স্থায়ী নিয়ম। এ ধরনের আয়াতগুলোর মধ্যে সবচেয়ে ধারালো ৯:২৫, কারণ সেখানে হুঁশিয়ারিটা মু'মিনদের নিজেদের দিকেই ঘুরে যায়: হুনায়নের দিন তোমাদের সংখ্যাধিক্য তোমাদের মুগ্ধ করেছিল, অথচ তা তোমাদের কোনো কাজেই আসেনি। 'কাজে আসা' বোঝাতে সেখানে যে ক্রিয়া, আমাদের আয়াতেও সেটাই।"
          },
          {
            "en": "8:12 supplies the closing clause from the other side, where Allah tells the angels I am with you, so strengthen those who have believed; al-Qurtubi's reading with a fatha ties our clause into that neighbourhood. 3:13 stands a little further off and looks back at the same field, calling the two armies a sign for those with eyes, one fighting in the cause of Allah and the other of disbelievers, with the count looking one way and the outcome going the other.",
            "bn": "৮:১২ আয়াত শেষ অংশটাকে অন্য দিক থেকে পূর্ণ করে। সেখানে আল্লাহ ফেরেশতাদের বলেন, আমি তোমাদের সঙ্গে আছি, সুতরাং মু'মিনদের দৃঢ় রাখ। কুরতুবীর যবরসহ পাঠ আমাদের অংশটিকে আশপাশের ওই আয়াতগুলোর সঙ্গেই বেঁধে দেয়। ৩:১৩ আয়াত একটু দূরে দাঁড়িয়ে একই রণক্ষেত্রের দিকে ফিরে তাকায়। সেখানে দুই বাহিনীকে বলা হয়েছে চোখওয়ালাদের জন্য নিদর্শন: এক দল লড়ছে আল্লাহর পথে, অন্য দল কাফির। সংখ্যা দেখে মনে হয় এক রকম, আর ফল হয় উল্টো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Door in the Middle",
          "bn": "মাঝখানের দরজা"
        },
        "p": [
          {
            "en": "The first thing to take from the verse is a caution about the prayer itself. Asking for a matter to be settled sounds pious and can be the least examined thing a person does all year. They asked for the more kin-severing of the two parties to be destroyed, and the request was granted precisely, which is the risk built into that kind of asking. Before praying for a settlement, it is worth saying out loud which side of the settlement you expect to be standing on.",
            "bn": "এ আয়াত থেকে প্রথম যা নেওয়ার, তা এই দোয়া নিয়েই একটা সতর্কতা। কোনো বিষয়ের ফয়সালা চাওয়া শুনতে দীনদারির মতো লাগে, অথচ সারা বছরে মানুষ যা যা করে তার মধ্যে এটাই হতে পারে সবচেয়ে কম যাচাই করা কাজ। তারা চেয়েছিল দুই দলের মধ্যে যে বেশি আত্মীয়তা ছিন্নকারী সে ধ্বংস হোক, আর চাওয়াটা অক্ষরে অক্ষরে কবুল হয়েছিল। এ ধরনের চাওয়ার ভেতরেই ঝুঁকিটা গাঁথা। ফয়সালা চাওয়ার আগে মুখে বলে নেওয়া ভালো, সেই ফয়সালায় আপনি কোন পাশে থাকার আশা করছেন।"
          },
          {
            "en": "The second is the door standing in the middle of the verse. And if you desist, it is best for you, spoken to men who had just been beaten in the field, and worded as their benefit rather than as terms handed to a loser. The Quran does not close the account here. It names an exit and recommends it in the same breath as the warning. Anyone carrying a grievance against people who tried to harm them has a model in that clause.",
            "bn": "দ্বিতীয়টি আয়াতের মাঝখানে দাঁড়িয়ে থাকা দরজা। আর যদি তোমরা বিরত হও, তবে তা তোমাদের জন্যই ভালো। কথাটা বলা হচ্ছে সদ্য মাঠে মার খাওয়া লোকদের, আর বলা হচ্ছে তাদের লাভ হিসেবে, পরাজিতের হাতে ধরিয়ে দেওয়া শর্ত হিসেবে নয়। কুরআন এখানে হিসাব বন্ধ করে দেয় না। হুঁশিয়ারির সঙ্গে একই শ্বাসে সে বেরিয়ে আসার পথ দেখায় আর সেটারই পরামর্শ দেয়। যারা ক্ষতি করতে চেয়েছিল, তাদের বিরুদ্ধে মনে ক্ষোভ পুষে রাখা যে কারও জন্য এ অংশে একটা নমুনা আছে।"
          },
          {
            "en": "The third comes from as-Sa'di and it changes how the last clause is heard. Whoever has Allah with him is the one given victory, he writes, even if he is weak and few in number; then he adds that this accompaniment is according to the deeds of faith the believers actually carry out. So when an enemy prevails over them at some times, that is from their own shortcoming and not a failure in the promise. Read that way the clause is a standard to be met rather than a guarantee to be held.",
            "bn": "তৃতীয়টি আসে সা'দীর কাছ থেকে, আর তা শেষ অংশটা শোনার ধরনই বদলে দেয়। তিনি লেখেন, আল্লাহ যার সঙ্গে আছেন সে-ই জয়ী, সে দুর্বল হোক আর সংখ্যায় কম হোক। এরপর তিনি যোগ করেন, এই সঙ্গে থাকাটা মু'মিনরা ঈমানের যেসব আমল সত্যিই আদায় করে তার মাপেই হয়। তাই কোনো সময় শত্রু তাদের উপর প্রবল হলে সেটা তাদের নিজেদের ঘাটতি থেকেই, ওয়াদার কোনো ত্রুটি থেকে নয়। এভাবে পড়লে এ অংশ হাতে ধরে রাখার নিশ্চয়তা নয়, পূরণ করার মতো এক মান।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Without Daring",
          "bn": "চাওয়া, তবে চ্যালেঞ্জ নয়"
        },
        "p": [
          {
            "en": "This verse is not a supplication and will not become one; it is a warning with an opening left inside it. The Quran supplies the prayer that belongs on the other side of this scene at 3:147, where the people who held their ground are quoted as saying only this: our Lord, forgive us our sins and the excess committed in our affairs, and plant our feet firmly, and give us victory over the disbelieving people. The order of the three requests is the lesson.",
            "bn": "এ আয়াত দোয়া নয়, দোয়া হয়েও উঠবে না। এটা হুঁশিয়ারি, তবে তার ভেতরে একটা পথ খোলা রাখা আছে। এ দৃশ্যের উল্টো দিকে যে দোয়া মানায়, কুরআন তা দিয়েছে ৩:১৪৭ আয়াতে। যারা নিজেদের জায়গায় অটল ছিল, কুরআন তাদের মুখে কেবল এই কথাটুকুই তুলে ধরেছে: হে আমাদের রব, আমাদের গুনাহ আর আমাদের কাজে আমাদের বাড়াবাড়ি মাফ করে দিন, আমাদের পা মজবুত রাখুন, আর কাফির সম্প্রদায়ের বিরুদ্ধে আমাদের সাহায্য করুন। তিনটি চাওয়া কোন ক্রমে এসেছে, সেটাই এখানে শিক্ষা।"
          },
          {
            "en": "If you want this verse's caution in a sentence of your own, it can be said in the verse's own vocabulary and offered as nothing more than that: O Allah, do not let me ask You for a verdict I have not first weighed against myself, and if a verdict falls against me, make me one who desists rather than one who returns. That is a supplication put together from the words of the verse. It is not a Sunnah du'a and must not be passed on as one.",
            "bn": "এ আয়াতের সতর্কবার্তা যদি নিজের একটি বাক্যে বলতে চান, তবে আয়াতের শব্দ দিয়েই বলা যায়, এর বেশি কিছু দাবি না করে: হে আল্লাহ, যে ফয়সালা আগে নিজের ওপর মেপে দেখিনি, তা আপনার কাছে চাইতে দেবেন না। আর ফয়সালা যদি আমার বিপক্ষে যায়, আমাকে তাদের দলে রাখুন যারা থেমে যায়, তাদের দলে নয় যারা আবার ফিরে আসে। এটা আয়াতের শব্দ জুড়ে বানানো দোয়া মাত্র। এটা সুন্নাহর দোয়া নয়, সুন্নাহর দোয়া বলে চালানোও যাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Own Asking",
          "bn": "নিজের চাওয়া নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "When did I last ask for a matter to be settled without first asking myself which side of the settlement I would be standing on? If something I pushed hard for turned out badly, did I read that outcome as an answer, or file it away as bad luck and keep pushing? And is there anything in my life right now that I have been calling a defeat, when this verse would call it an opening and tell me to take it?",
            "bn": "শেষ কবে আমি কোনো বিষয়ের ফয়সালা চেয়েছি, অথচ আগে নিজেকে জিজ্ঞেস করিনি সেই ফয়সালায় আমি কোন পাশে দাঁড়িয়ে থাকব? যে কাজের পেছনে জোর দিয়ে লেগে ছিলাম সেটা খারাপ হলে আমি কি সেই পরিণামকে জবাব হিসেবে পড়েছি, নাকি কপাল বলে সরিয়ে রেখে আবার একই জোর দিয়েছি? আর আমার জীবনে এখন এমন কিছু আছে কি, যাকে আমি হার বলে ডাকছি, অথচ এ আয়াত তাকে বলত খোলা পথ আর বলত সেটা ধরে নাও?"
          },
          {
            "en": "Two more, closer to the bone. What is the company I am actually leaning on, the backing or the group or the numbers whose size quietly settles my nerves, and what would be left standing if it were taken away tomorrow? And if Allah's being with the believers is measured by what they actually do, then what in this week of mine would be counted on that side of it?",
            "bn": "আরও দুটি, একটু বেশি গায়ে লাগার মতো। আমি আসলে কোন দলের উপর হেলান দিয়ে আছি? সেই সমর্থন, সেই জমায়েত, সেই সংখ্যা, যার আকার চুপচাপ আমার স্নায়ু ঠান্ডা রাখে। কাল যদি ওটা সরে যায়, দাঁড়িয়ে থাকবে কী? আর মু'মিনদের সঙ্গে আল্লাহর থাকার মাপ যদি তাদের আমলই হয়, তবে আমার এই সপ্তাহের কোন কাজটা ওই পাশে গোনা হবে?"
          }
        ]
      }
    ]
  },
  "8:24": {
    "sections": [
      {
        "h": {
          "en": "A Call to the Living",
          "bn": "জীবিতদের প্রতি এক আহ্বান"
        },
        "p": [
          {
            "en": "Surah al-Anfal came down around the battle of Badr, when the young community in Madinah was learning what it costs to answer Allah's commands in real time. This verse addresses them directly: O you who believe, respond to Allah and to the Messenger when he calls you to that which gives you life. The verb istajibu is an emphatic form of answering — not merely hearing a call but rising to meet it.",
            "bn": "সূরা আল-আনফাল নাজিল হয় বদর যুদ্ধকে ঘিরে। মদীনার নতুন মুসলিম সমাজ তখন হাতে-কলমে শিখছিল, আল্লাহর হুকুমে সঙ্গে সঙ্গে সাড়া দিতে কী মূল্য দিতে হয়। এই আয়াত তাদের সরাসরি ডেকে বলছে: হে মুমিনগণ, আল্লাহ ও রাসূলের ডাকে সাড়া দাও, যখন তিনি তোমাদের এমন কিছুর দিকে ডাকেন যা তোমাদের জীবন দেয়। 'ইস্তাজীবূ' ক্রিয়াটি সাড়া দেওয়ার জোরালো রূপ: শুধু ডাক শোনা নয়, উঠে গিয়ে সেই ডাকের জবাব দেওয়া।"
          },
          {
            "en": "What is the thing that gives life? The commentators answer broadly because the wording is broad. Ibn Kathir relates from the early authorities that it is faith, and that it is the Quran, and that it is the truth; as-Sa'di sums it up as everything the religion calls to, since all of it carries life for the heart. The verse assumes something startling — that a person can be walking, working and breathing, and still need to be brought to life.",
            "bn": "জীবন দেয় যে জিনিস, সেটা কী? আয়াতের শব্দ ব্যাপক, তাই মুফাসসিরদের উত্তরও ব্যাপক। ইবনে কাসীর পূর্বসূরি আলিমদের থেকে বর্ণনা করেন: এটা ঈমান, এটা কুরআন, এটা হক। আস-সাদী সংক্ষেপে বলেন: দ্বীন যেসবের দিকে ডাকে, তার সবই; কারণ এর প্রতিটিতেই অন্তরের জীবন আছে। আয়াতটি চমকে দেওয়ার মতো একটা কথা ধরে নিচ্ছে: মানুষ হাঁটছে, কাজ করছে, শ্বাস নিচ্ছে, তবু তাকে জীবিত করে তোলা বাকি থাকতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Life Beyond the Pulse",
          "bn": "হৃৎস্পন্দনের বাইরের জীবন"
        },
        "p": [
          {
            "en": "The Quran uses death and life for the states of the heart without apology. In 6:122 it asks whether one who was dead, then We gave him life and made for him a light by which to walk among people, can be like one stuck in layers of darkness. Guidance is not an ornament added to an already complete existence; it is the difference between a heart that responds and one that has stopped responding, whatever the body is doing.",
            "bn": "অন্তরের অবস্থা বোঝাতে কুরআন কোনো সংকোচ ছাড়াই মৃত্যু আর জীবন শব্দ ব্যবহার করে। ৬:১২২ আয়াতে কুরআন জিজ্ঞেস করে: যে ছিল মৃত, তারপর আমি তাকে জীবন দিলাম এবং তাকে এমন আলো দিলাম যা নিয়ে সে মানুষের মাঝে চলাফেরা করে, সে কি তার মতো হতে পারে, যে অন্ধকারের স্তরে স্তরে আটকে আছে? হিদায়াত আগে থেকেই পূর্ণ কোনো জীবনের গায়ে লাগানো অলংকার নয়। দেহ যা-ই করুক, তফাতটা গড়ে হিদায়াতই: এক অন্তর সাড়া দেয়, আরেক অন্তর সাড়া দেওয়া থামিয়ে দিয়েছে।"
          },
          {
            "en": "Measured this way, the call of revelation is not one demand among many competing for your attention. It is the only call whose acceptance makes the difference between a living heart and a dead one. That is why the verse frames responding not as a favour you do for religion but as the way you receive your own life. Refusing it is not neutrality; it is choosing to remain, in the Quran's vocabulary, among the dead.",
            "bn": "এভাবে মাপলে ওহির ডাক আপনার মনোযোগ কাড়তে চাওয়া অসংখ্য দাবির একটি নয়। এ-ই একমাত্র ডাক, যা মেনে নেওয়া না-নেওয়ার ওপর নির্ভর করে অন্তর জীবিত থাকবে, না মরে যাবে। তাই আয়াতটি সাড়া দেওয়াকে দ্বীনের প্রতি আপনার কোনো দয়া হিসেবে দেখায় না; দেখায় নিজের জীবনটা হাতে পাওয়ার পথ হিসেবে। এ ডাক ফিরিয়ে দেওয়া মানে নিরপেক্ষ থাকা নয়। কুরআনের ভাষায়, এ হলো মৃতদের মধ্যেই থেকে যাওয়ার সিদ্ধান্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Between a Person and His Heart",
          "bn": "মানুষ ও তার হৃদয়ের মাঝে"
        },
        "p": [
          {
            "en": "Then comes the clause that gives the verse its urgency: know that Allah comes between a person and his heart. The commentators, as Ibn Kathir gathers, read it along two lines that reinforce each other. One: He is nearer to you than your own heart, so nothing in you is hidden from Him. Two: hearts are in His hand — He turns them, and no one comes to belief or turns from it except by His decree.",
            "bn": "এরপর আসে সেই অংশ, যা আয়াতটিকে জরুরি করে তোলে: জেনে রাখো, আল্লাহ মানুষ ও তার হৃদয়ের মাঝে অন্তরায় হন। ইবনে কাসীর মুফাসসিরদের যে বক্তব্যগুলো জড়ো করেছেন, তাতে এর দুটি ব্যাখ্যা পাওয়া যায়, আর দুটিই একে অপরকে মজবুত করে। এক: তিনি আপনার নিজের হৃদয়ের চেয়েও আপনার কাছে, তাই আপনার ভেতরের কিছুই তাঁর কাছে লুকানো নয়। দুই: হৃদয়গুলো তাঁরই হাতে। তিনিই সেগুলো ঘোরান, আর তাঁর ফয়সালা ছাড়া কেউ ঈমান আনে না, ঈমান থেকে ফিরেও যায় না।"
          },
          {
            "en": "Both readings press toward the same conclusion: respond now. The inclination you feel toward good this morning is not a possession you can store for later use. The heart you plan to repent with next year is not guaranteed to still want repentance then, because it is not in your hand. Delay treats the heart as private property on a shelf; the verse announces that it never was.",
            "bn": "দুটি ব্যাখ্যাই একই কথায় গিয়ে ঠেকে: এখনই সাড়া দিন। আজ সকালে ভালো কাজের দিকে মনের যে টান টের পাচ্ছেন, তা পরে কাজে লাগানোর জন্য তুলে রাখার মতো জিনিস নয়। যে হৃদয় নিয়ে আগামী বছর তওবা করবেন বলে ভাবছেন, সেই হৃদয় তখনো তওবা চাইবে কি না, তার কোনো নিশ্চয়তা নেই; কারণ হৃদয় আপনার হাতে নেই। দেরি করা মানে হৃদয়কে নিজের সম্পত্তি ভেবে তাকে তুলে রাখা। আয়াতটি জানিয়ে দেয়, হৃদয় কখনোই আপনার সম্পত্তি ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Turner of Hearts",
          "bn": "হৃদয়ের পরিবর্তনকারী"
        },
        "p": [
          {
            "en": "The Prophet ﷺ lived under this clause. At-Tirmidhi relates from Anas (RA) that he would often say: O Turner of hearts, make my heart firm upon Your religion. If the one whose sins were forgiven kept asking for firmness, then confidence that our own hearts will stay soft on their own is misplaced. The same warning sounds in 57:16, where believers are asked whether the time has not come for their hearts to humble, before length of time hardens them.",
            "bn": "নবী ﷺ নিজেও এই কথার ছায়ায় জীবন কাটিয়েছেন। তিরমিযী আনাস (রাঃ) থেকে বর্ণনা করেন, তিনি প্রায়ই বলতেন: হে হৃদয়সমূহের পরিবর্তনকারী, আমার হৃদয়কে আপনার দ্বীনের ওপর অটল রাখুন। যাঁর গুনাহ মাফ করে দেওয়া হয়েছিল, তিনিই যদি বারবার অটল থাকার দোয়া করেন, তবে আমাদের হৃদয় আপনা-আপনি নরম থাকবে, এমন ভরসা করা ভুল। একই সতর্কবাণী এসেছে ৫৭:১৬ আয়াতে। সেখানে আল্লাহ মুমিনদের জিজ্ঞেস করছেন: তাদের হৃদয় বিনম্র হওয়ার সময় কি এখনো আসেনি, দীর্ঘ সময় পেরিয়ে তা কঠিন হয়ে যাওয়ার আগে?"
          }
        ]
      },
      {
        "h": {
          "en": "A Companion Corrected Gently",
          "bn": "এক সাহাবীকে আলতো করে শোধরানো"
        },
        "p": [
          {
            "en": "Al-Bukhari narrates from Abu Sa'id ibn al-Mu'alla (RA) that the Prophet ﷺ called him while he was praying. He finished his prayer first and then came, and the Prophet ﷺ asked what had kept him, saying: has Allah not said, respond to Allah and to the Messenger when he calls you? Then, before Abu Sa'id left the mosque, he taught him that al-Fatihah is the greatest surah in the Quran.",
            "bn": "বুখারী আবু সাঈদ ইবনুল মুআল্লা (রাঃ) থেকে বর্ণনা করেন: তিনি নামাজে ছিলেন, এমন সময় নবী ﷺ তাঁকে ডাকলেন। তিনি আগে নামাজ শেষ করলেন, তারপর এলেন। নবী ﷺ জিজ্ঞেস করলেন, কিসে তোমাকে আটকে রেখেছিল? আল্লাহ কি বলেননি, আল্লাহ ও রাসূলের ডাকে সাড়া দাও যখন তিনি তোমাদের ডাকেন? এরপর আবু সাঈদ মসজিদ থেকে বের হওয়ার আগেই তিনি তাঁকে শিখিয়ে দিলেন, আল-ফাতিহা কুরআনের সর্বশ্রেষ্ঠ সূরা।"
          },
          {
            "en": "The scholars draw two things from this scene. First, answering the Messenger ﷺ held a claim so strong that even prayer did not excuse delaying it — a ruling specific to his call, and a measure of what responding meant. Second, the correction arrived wrapped in a gift: the man reminded of this verse walked out carrying knowledge of the greatest surah. Responding to the call is not a tax; it is how the treasure changes hands.",
            "bn": "এই ঘটনা থেকে আলিমরা দুটি শিক্ষা বের করেন। এক, রাসূল ﷺ-এর ডাকে সাড়া দেওয়ার দাবি ছিল এত জোরালো যে নামাজের অজুহাতেও দেরি করা চলত না। এ হুকুম কেবল তাঁর ডাকের জন্যই নির্দিষ্ট, আর এ থেকেই বোঝা যায় সাড়া দেওয়ার মানে কী ছিল। দুই, সংশোধনটা এসেছিল উপহারের মোড়কে। যাঁকে এই আয়াত মনে করিয়ে দেওয়া হলো, তিনি বেরিয়ে গেলেন সর্বশ্রেষ্ঠ সূরার জ্ঞান নিয়ে। ডাকে সাড়া দেওয়া কোনো খাজনা নয়; এভাবেই ধনভান্ডার এক হাত থেকে আরেক হাতে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Gathered to Him",
          "bn": "তাঁরই কাছে সমবেত"
        },
        "p": [
          {
            "en": "The verse ends: and know that to Him you will be gathered. The sequence is complete — a call that carries life, a heart that is not in your hand, and a gathering at which the response you gave will be the record you stand on. Placed together, the three clauses close every escape route of postponement: the call is now, the capacity to answer is not guaranteed tomorrow, and the accounting is certain.",
            "bn": "আয়াতটি শেষ হয় এ কথায়: আর জেনে রাখো, তাঁরই কাছে তোমাদের একত্র করা হবে। এতে ধারাটি পূর্ণ হলো। প্রথমে এমন ডাক, যাতে জীবন আছে; তারপর এমন হৃদয়, যা আপনার হাতে নেই; শেষে এমন সমাবেশ, যেখানে আপনার দেওয়া সাড়াটাই হবে সেই আমলনামা, যা নিয়ে আপনি দাঁড়াবেন। তিনটি অংশ পাশাপাশি রাখলে ‘পরে করব’ বলে পালানোর সব পথ বন্ধ হয়ে যায়: ডাক এখনই, কাল জবাব দেওয়ার সামর্থ্য থাকবে এমন নিশ্চয়তা নেই, আর হিসাব নিশ্চিত।"
          },
          {
            "en": "Living this verse means shrinking the gap between hearing and doing. When the adhan sounds, when a verse strikes you, when a wrong you should abandon is named in your hearing — treat that moment as the call arriving, and answer inside it. The habit is built in small, immediate obediences. Each one keeps the heart in practice, and a heart in practice is what this verse calls alive.",
            "bn": "এই আয়াত মেনে চলা মানে শোনা আর করার মাঝের দূরত্বটা কমিয়ে আনা। আজান হলে, কোনো আয়াত মনে নাড়া দিলে, কিংবা যে অন্যায় ছেড়ে দেওয়া উচিত তার কথা কানে এলে, সেই মুহূর্তটাকেই ডাক এসে পৌঁছানো ধরে নিন, আর তখনই সাড়া দিন। এ অভ্যাস গড়ে ওঠে ছোট ছোট, সঙ্গে সঙ্গে করা আনুগত্যে। প্রতিটি আনুগত্য হৃদয়কে চর্চায় রাখে, আর চর্চায় থাকা হৃদয়কেই এই আয়াত জীবিত বলে।"
          }
        ]
      }
    ]
  },
  "8:29": {
    "sections": [
      {
        "h": {
          "en": "Where the Promise Sits",
          "bn": "ওয়াদাটির অবস্থান"
        },
        "p": [
          {
            "en": "Al-Anfal is Madinan and this passage is still the debriefing of Badr, but it has turned inward. 8:27 forbids the believers to betray Allah and the Messenger or to betray their trusts; 8:28 warns that their wealth and their children are a trial. Then comes this offer. At-Tabari reads the taqwa of our verse as including exactly what was just forbidden: obeying Him, discharging His obligations, avoiding His disobedience, and leaving off betraying Him, His Messenger and your trusts. The verse is the other side of the warning, not a general exhortation dropped into the surah.",
            "bn": "সূরা আনফাল মাদানী। এ অংশেও চলছে বদরের পর্যালোচনা, তবে এবার নজর ভেতরের দিকে। ৮:২৭ আয়াত মু'মিনদের নিষেধ করে আল্লাহ ও রাসূলের ﷺ সঙ্গে খিয়ানত করতে, নিজেদের আমানতে খিয়ানত করতে; ৮:২৮ আয়াত সতর্ক করে, তাদের সম্পদ আর সন্তান পরীক্ষা। এরপরই আসে এই প্রস্তাব। তাবারীর মতে এ আয়াতের তাকওয়ার ভেতরে ঠিক সেগুলোই আছে, যা এইমাত্র নিষেধ করা হলো: তাঁর আনুগত্য করা, তাঁর ফরজগুলো আদায় করা, তাঁর নাফরমানি থেকে দূরে থাকা, আর তাঁর সঙ্গে, তাঁর রাসূলের ﷺ সঙ্গে ও নিজেদের আমানতে খিয়ানত ছেড়ে দেওয়া। কাজেই আয়াতটি সূরার মাঝে হঠাৎ বসিয়ে দেওয়া সাধারণ কোনো নসীহত নয়; এ হলো ওই হুঁশিয়ারিরই অপর পিঠ।"
          },
          {
            "en": "No occasion of revelation is established for the verse, so its placement is what tells you how to read it: a warning about betrayal, a warning about wealth and children, and then wages named for the opposite conduct. 8:30 turns away again to the plot that was laid against the Prophet ﷺ in Makkah. Al-Qurtubi adds a note about the grammar that is easy to miss. Allah knew whether they would fear Him or not, and He put it as a condition because He addresses His servants in the way they address one another.",
            "bn": "এ আয়াতের কোনো প্রমাণিত শানে নুযূল নেই। তাই একে কীভাবে পড়তে হবে, তা বলে দেয় এর অবস্থান: আগে খিয়ানত নিয়ে হুঁশিয়ারি, তারপর সম্পদ আর সন্তান নিয়ে হুঁশিয়ারি, তারপর উল্টো আচরণের জন্য ঘোষিত প্রতিদান। ৮:৩০ আয়াতে আলোচনা আবার মোড় নেয় মক্কায় নবীর ﷺ বিরুদ্ধে পাতা ষড়যন্ত্রের দিকে। কুরতুবী ব্যাকরণের একটা সূক্ষ্ম দিক ধরিয়ে দেন, যা সহজেই চোখ এড়িয়ে যায়। তারা তাঁকে ভয় করবে কি না, আল্লাহ তা আগে থেকেই জানতেন; তবু কথাটা শর্তের আকারে বলেছেন, কারণ বান্দাদের সঙ্গে তিনি সেভাবেই কথা বলেন, যেভাবে তারা একে অন্যের সঙ্গে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Furqan and Its Range",
          "bn": "ফুরকান আর তার পরিসর"
        },
        "p": [
          {
            "en": "Furqan comes from f-r-q, to separate, and the form carries both the act of separating and the thing that does it. The apodosis holds three verbs, not one: yaj'al, He makes; yukaffir, He effaces; yaghfir, He forgives. At-Tabari keeps the last two apart rather than treating them as a pair of synonyms. Yukaffir, he says, means He wipes away what has already passed of your sins between you and Him; yaghfir means He covers them over and veils them, so that He does not take you to task for them.",
            "bn": "ফুরকান শব্দটি এসেছে ফ-র-ক ধাতু থেকে, যার অর্থ আলাদা করা। শব্দটির এই রূপে দুটো অর্থই আছে: আলাদা করার কাজ, আর যা দিয়ে আলাদা করা হয় সেটা। শর্তের জবাবে ক্রিয়া একটি নয়, তিনটি: ইয়াজআল, তিনি করে দেন; ইউকাফফির, তিনি মুছে দেন; ইয়াগফির, তিনি মাফ করেন। তাবারী শেষ দুটিকে সমার্থক জোড়া না ধরে আলাদা রাখেন। তাঁর মতে ইউকাফফির মানে, তোমাদের ও তাঁর মাঝে আগে যে গুনাহ হয়ে গেছে, তা তিনি মুছে দেন। ইয়াগফির মানে, তিনি সেগুলো ঢেকে দেন, পর্দা টেনে দেন, যাতে সেগুলোর জন্য তোমাদের পাকড়াও না করেন।"
          },
          {
            "en": "The same surah uses the word again twelve verses later. 8:41 dates the ruling on spoils to the day of the furqan, the day when the two armies met, which the app renders as the day of criterion and the day of decisive decision. So inside one surah the word names both what taqwa earns and the day the whole matter was settled in a field. The Book itself carries the name at 25:1, and 2:185 calls what came down in Ramadan a guidance and a furqan.",
            "bn": "বারো আয়াত পরে এই সূরাতেই শব্দটি আবার এসেছে। ৮:৪১ আয়াত গনীমতের বিধানকে বেঁধে দেয় ফুরকানের দিনের সঙ্গে, যেদিন দুই বাহিনী মুখোমুখি হয়েছিল; অ্যাপ সেটাকে বলে মানদণ্ডের দিন আর চূড়ান্ত ফয়সালার দিন। অর্থাৎ এক সূরার ভেতরেই শব্দটি দুটো জিনিসের নাম: তাকওয়া দিয়ে যা অর্জিত হয়, আর সেই দিন, যেদিন এক ময়দানে গোটা বিষয়টার ফয়সালা হয়ে গেল। কিতাবের নিজেরও এ নাম আছে, ২৫:১ আয়াতে; আর ২:১৮৫ আয়াত রমজানে যা নাজিল হয়েছে, তাকে বলে হিদায়াত ও ফুরকান।"
          },
          {
            "en": "The two renderings a reader of this app will meet are both inside the commentators' range rather than at odds with it. The English gives criterion and leaves the sense open. The Bengali gives the power to tell good from evil, which is the reading the same app uses for the word at 25:1 and 2:185. Which point in that range each commentator settled on is the subject of the next section, and the range is wider than either rendering can show on its own.",
            "bn": "এ অ্যাপে পাঠক যে দুটি অনুবাদ পাবেন, দুটিই মুফাসসিরদের মতের পরিসরের ভেতরে পড়ে, তার বিপরীতে নয়। ইংরেজি অনুবাদ বলে মানদণ্ড, অর্থটা খোলা রাখে। বাংলা অনুবাদ বলে ভালো ও মন্দের মধ্যে পার্থক্য করার শক্তি, আর ২৫:১ ও ২:১৮৫ আয়াতেও এই অ্যাপ শব্দটির এই অর্থই নেয়। সেই পরিসরের কোন জায়গায় কোন মুফাসসির থেমেছেন, তা পরের অংশের বিষয়। আর পরিসরটা এত চওড়া যে কোনো একটি অনুবাদ একা তা পুরোপুরি দেখাতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Way Out, or a Verdict",
          "bn": "বেরিয়ে আসার পথ, নাকি রায়"
        },
        "p": [
          {
            "en": "At-Tabari reports that the exegetes differed in how they expressed the meaning. Some said makhraj, a way out; some said najah, deliverance; some said fasl, a separation. He then says the thing that keeps the disagreement in proportion: all of these are close in meaning, though the wordings differ. Mujahid is the name carried most often for makhraj, and through Ibn Abi Najih he adds two words that widen it, a way out in this world and in the hereafter. Ibn Abbas (RA) and ad-Dahhak are given the same; Ikrimah is given both makhraj and najah.",
            "bn": "তাবারী জানান, মুফাসসিরগণ অর্থটা ভিন্ন ভিন্ন শব্দে প্রকাশ করেছেন। কেউ বলেছেন মাখরাজ, বেরিয়ে আসার পথ; কেউ বলেছেন নাজাত, মুক্তি; কেউ বলেছেন ফাসল, আলাদা করা। এরপর তিনি এমন একটি কথা বলেন, যাতে মতভেদটা তার সঠিক মাপে থাকে: শব্দ আলাদা হলেও এগুলোর অর্থ কাছাকাছি। মাখরাজ অর্থের সঙ্গে সবচেয়ে বেশি জড়িয়ে আছে মুজাহিদের নাম। ইবনু আবী নাজীহর সূত্রে তিনি আরও দুটি শব্দ যোগ করে অর্থটা চওড়া করে দেন: দুনিয়াতেও, আখিরাতেও বেরিয়ে আসার পথ। ইবনু আব্বাস (রাঃ) ও দাহহাক থেকেও একই কথা বর্ণিত; ইকরিমা থেকে মাখরাজ ও নাজাত দুটোই।"
          },
          {
            "en": "At-Tabari's own gloss is the most concrete of them and it keeps the battlefield in view: He will make for you a separation and a distinction between your right and the falsehood of those enemies who seek your harm, by granting you victory over them. Al-Farra reads the word as an opening and a victory, which sits in the same place. Ibn Ishaq reads it as a separation between truth and falsehood, and Ibn Kathir judges that reading the most general of them, one wide enough to include all the others.",
            "bn": "তাবারীর নিজের ব্যাখ্যাই এদের মধ্যে সবচেয়ে বাস্তব, আর তাতে যুদ্ধের ময়দান চোখের সামনেই থাকে: তোমাদের হক আর তোমাদের ক্ষতি চাওয়া শত্রুদের বাতিলের মাঝে তিনি আলাদা করে দেবেন, পার্থক্য স্পষ্ট করে দেবেন, তাদের বিরুদ্ধে তোমাদের বিজয় দিয়ে। ফাররা শব্দটির অর্থ করেন পথ খুলে দেওয়া আর বিজয়, এ-ও একই কথা। ইবনু ইসহাক অর্থ করেন হক আর বাতিলের মধ্যে পার্থক্য। ইবনু কাসীরের বিচারে এ অর্থটিই সবচেয়ে ব্যাপক, এত ব্যাপক যে বাকি সব অর্থ এর ভেতরে এসে যায়।"
          },
          {
            "en": "Al-Qurtubi preserves the most useful single report on the word. Ibn Wahb said: I asked Malik about if you fear Allah He will make for you a furqan, and he said, a way out; then he recited the clause that closes 65:2, and whoever fears Allah, He will make for him a way out. Ibn al-Qasim and Ashhab related the same from Malik, and al-Qurtubi notes that Mujahid had said it before him. He also carries deliverance from Ibn Zayd and as-Suddi, and a view that refers the whole promise to the hereafter.",
            "bn": "শব্দটি নিয়ে সবচেয়ে কাজের বর্ণনাটি পাওয়া যায় কুরতুবীর কাছে। ইবনু ওয়াহব বলেন: আমি মালিককে জিজ্ঞেস করলাম, তোমরা যদি আল্লাহকে ভয় কর তবে তিনি তোমাদের জন্য ফুরকান করে দেবেন, এর অর্থ কী? তিনি বললেন, বেরিয়ে আসার পথ। তারপর তিনি ৬৫:২ আয়াতের শেষ অংশটি তিলাওয়াত করলেন: আর যে আল্লাহকে ভয় করে, তিনি তার জন্য বেরিয়ে আসার পথ করে দেন। ইবনুল কাসিম ও আশহাবও মালিক থেকে একই কথা বর্ণনা করেছেন, আর কুরতুবী উল্লেখ করেন, মালিকের আগেই মুজাহিদ এ কথা বলেছিলেন। ইবনু যায়দ ও সুদ্দী থেকে তিনি মুক্তি অর্থটিও এনেছেন, সঙ্গে এমন একটি মতও, যা গোটা ওয়াদাটিকে আখিরাতের সঙ্গে যুক্ত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di Counts Four",
          "bn": "সা'দীর হিসাবে চারটি"
        },
        "p": [
          {
            "en": "As-Sa'di opens by calling compliance with the taqwa of one's Lord the title of happiness and the mark of success, then counts what the God-fearing man receives here, and his count is four while the verbs are three. The furqan is the first. The effacing of misdeeds is the second and the forgiving of sins the third. The fourth he takes from the closing clause: the great reward and the abundant recompense for whoever fears Him and prefers His pleasure over his own desire. So the fourth gift is not a fourth verb but the bounty the verse ends on.",
            "bn": "সা'দী শুরু করেন এ কথা দিয়ে: নিজের রবের তাকওয়া মেনে চলাই সৌভাগ্যের শিরোনাম আর সফলতার নিশানা। তারপর তিনি গুনে দেখান, আল্লাহভীরু মানুষ এখানে কী কী পায়। তাঁর হিসাবে দান চারটি, অথচ ক্রিয়া তিনটি। প্রথমটি ফুরকান। দ্বিতীয়টি মন্দ কাজ মুছে দেওয়া, তৃতীয়টি গুনাহ মাফ করা। চতুর্থটি তিনি নেন আয়াতের শেষ বাক্য থেকে: যে তাঁকে ভয় করে আর নিজের খেয়ালখুশির চেয়ে তাঁর সন্তুষ্টিকে আগে রাখে, তার জন্য মহা প্রতিদান আর ভরপুর সওয়াব। অর্থাৎ চতুর্থ দানটি কোনো চতুর্থ ক্রিয়া নয়; আয়াত যে অনুগ্রহের কথা বলে শেষ হয়েছে, সেটাই।"
          },
          {
            "en": "His definition of the first is the fullest any of them gives: the furqan is the knowledge and the guidance by which its possessor separates guidance from misguidance, truth from falsehood, the lawful from the forbidden, and the people of happiness from the people of wretchedness. On the two middle gifts he makes a distinction worth keeping. Either one includes the other when it is mentioned alone; when they are named together, as they are here, the effacing is explained of the smaller sins and the forgiving of the great ones.",
            "bn": "প্রথমটির সংজ্ঞা সবচেয়ে পূর্ণভাবে দেন তিনিই: ফুরকান হলো সেই ইলম ও হিদায়াত, যা দিয়ে এর অধিকারী আলাদা করে চেনে হিদায়াত ও গুমরাহি, হক ও বাতিল, হালাল ও হারাম, সৌভাগ্যবান ও দুর্ভাগাদের। মাঝের দুটি দান নিয়ে তিনি একটি পার্থক্য দেখান, যা মনে রাখার মতো। দুটির যেকোনো একটি আলাদাভাবে এলে অন্যটিও তার মধ্যে ধরা থাকে। কিন্তু দুটি যখন একসঙ্গে আসে, যেমন এখানে এসেছে, তখন মুছে দেওয়ার অর্থ ধরা হয় ছোট গুনাহ, আর মাফ করার অর্থ বড় গুনাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "What No Tafsir Attaches",
          "bn": "যা কোনো তাফসীর জুড়ে দেয়নি"
        },
        "p": [
          {
            "en": "None of the four tafsirs read for this verse attaches a saying of the Prophet ﷺ to it. What Ibn Kathir reaches for instead is another verse: 57:28, where the same condition, taqwa of Allah and belief in His Messenger, is answered with a double portion of mercy, a light to walk by, and forgiveness. Putting a verse next to a verse is the move the commentators make here, and it is worth reporting that rather than filling the slot with a narration nobody attached.",
            "bn": "এ আয়াতের জন্য যে চারটি তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে নবীর ﷺ কোনো হাদিস জুড়ে দেয়নি। ইবনু কাসীর বরং টেনে আনেন আরেকটি আয়াত: ৫৭:২৮। সেখানে শর্ত একই, আল্লাহর তাকওয়া আর তাঁর রাসূলের ﷺ প্রতি ঈমান; আর তার প্রতিদান দ্বিগুণ রহমত, পথ চলার আলো আর মাগফিরাত। আয়াতের পাশে আয়াত রাখা, মুফাসসিররা এখানে এটাই করেছেন। কেউ জুড়ে দেননি এমন কোনো বর্ণনা দিয়ে ফাঁক ভরানোর চেয়ে এ কথাটা জানিয়ে দেওয়াই ভালো।"
          },
          {
            "en": "One sound narration belongs near the idea even though no commentator ties it to this verse, and it is offered on that footing. Jami' at-Tirmidhi 2516 carries from Ibn Abbas (RA) the counsel the Prophet ﷺ gave him as a boy: be mindful of Allah and He will protect you, and know that if the whole creation gathered to benefit you, you would gain nothing but what Allah had written for you. At-Tirmidhi's own grading of it is hasan sahih. It states the principle the verse turns into a promise.",
            "bn": "একটি নির্ভরযোগ্য বর্ণনা এ ভাবনার সঙ্গে মেলে, যদিও কোনো মুফাসসির সেটিকে এ আয়াতের সঙ্গে যুক্ত করেননি; এখানে সেটি সেই হিসেবেই আনা হলো। জামি' আত-তিরমিযীর ২৫১৬ নম্বর হাদিসে ইবনু আব্বাস (রাঃ) থেকে আছে সেই নসীহত, যা নবী ﷺ তাঁকে ছোটবেলায় দিয়েছিলেন: আল্লাহর হক খেয়াল রেখো, তিনি তোমাকে হেফাজত করবেন; আর জেনে রেখো, গোটা সৃষ্টিজগৎ যদি তোমার উপকার করতে একজোট হয়, আল্লাহ তোমার জন্য যা লিখে রেখেছেন তার বাইরে কিছুই তুমি পাবে না। তিরমিযী নিজে এর মান বলেছেন হাসান সহীহ। আয়াত যে নীতিকে ওয়াদায় রূপ দেয়, এ হাদিস সেই নীতিটাই বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Pay Alike",
          "bn": "একই রকম প্রতিদানের আয়াত"
        },
        "p": [
          {
            "en": "65:2 is the verse Malik recited when he was asked about this one, and the clause that closes it is the reason: whoever fears Allah, He will make for him a way out. 65:3 continues the payment into places the man was not watching, and will provide for him from where he does not expect. Read together with our verse they make taqwa the condition of three different kinds of relief: a way out, a provision, and the sight to tell one road from another.",
            "bn": "এ আয়াত সম্পর্কে জিজ্ঞেস করা হলে মালিক তিলাওয়াত করেছিলেন ৬৫:২, আর কারণটা এর শেষ বাক্য: যে আল্লাহকে ভয় করে, তিনি তার জন্য বেরিয়ে আসার পথ করে দেন। ৬৫:৩ আয়াত এই প্রতিদানকে নিয়ে যায় এমন জায়গায়, যেদিকে মানুষটির নজরই ছিল না: আর তাকে রিযক দেবেন এমন উৎস থেকে, যা সে কল্পনাও করে না। আমাদের আয়াতের সঙ্গে মিলিয়ে পড়লে দেখা যায়, তাকওয়াই তিন রকম স্বস্তির শর্ত: বেরিয়ে আসার পথ, রিযক, আর এক পথ থেকে আরেক পথ আলাদা করে চেনার দৃষ্টি।"
          },
          {
            "en": "57:28 is the closest sister of all, because it answers the same condition with a light to walk by, which is what a furqan does in the dark. 8:41 is the in-surah echo, naming the day of Badr itself by this word. 25:1 gives the name to the revelation, and 2:185 puts guidance and furqan side by side in describing what came down in Ramadan. The word travels between the Book, the day, and the believer's own eyes.",
            "bn": "সবচেয়ে কাছের আয়াত ৫৭:২৮, কারণ সেখানে একই শর্তের প্রতিদান পথ চলার আলো, আর অন্ধকারে ফুরকান তো ঠিক এ কাজটাই করে। ৮:৪১ আয়াত এই সূরার ভেতরেই এর প্রতিধ্বনি; সেখানে এই শব্দ দিয়েই বদরের দিনটির নাম রাখা হয়েছে। ২৫:১ আয়াত এ নাম দেয় ওহিকে, আর ২:১৮৫ আয়াত রমজানে যা নাজিল হয়েছে তার বর্ণনায় হিদায়াত আর ফুরকান পাশাপাশি রাখে। শব্দটি এভাবে ঘুরে ফেরে কিতাব, সেই দিন আর মু'মিনের নিজের চোখের মাঝে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Taqwa Buys Today",
          "bn": "আজ তাকওয়ার প্রতিদান"
        },
        "p": [
          {
            "en": "Al-Qurtubi does not leave taqwa as a word. He lists it out: following what Allah commanded and avoiding what He forbade, leaving the doubtful thing alone for fear of falling into the forbidden, filling the heart with sincere intention and the limbs with righteous deeds, guarding against shirk both hidden and open, and holding back from leaning on the world. Then, he says, Allah makes for such a man a furqan between truth and falsehood, and gives him the ability to do the good he intends.",
            "bn": "কুরতুবী তাকওয়াকে শুধু একটা শব্দ হিসেবে ফেলে রাখেন না। তিনি খুলে খুলে বলেন: আল্লাহ যা আদেশ করেছেন তা মানা আর যা নিষেধ করেছেন তা থেকে দূরে থাকা; হারামে পড়ে যাওয়ার ভয়ে সন্দেহের জিনিসটাও ছেড়ে দেওয়া; অন্তরকে খাঁটি নিয়তে আর অঙ্গপ্রত্যঙ্গকে নেক আমলে ভরে রাখা; গোপন ও প্রকাশ্য দুই রকম শিরক থেকেই নিজেকে বাঁচিয়ে রাখা; আর দুনিয়ার ওপর ভরসা করা থেকে হাত গুটিয়ে রাখা। তিনি বলেন, তখন আল্লাহ এমন মানুষকে হক আর বাতিলের মধ্যে ফুরকান দান করেন, আর সে যে ভালো কাজের ইচ্ছা করে, তা করার সামর্থ্যও দেন।"
          },
          {
            "en": "That inverts how most of us handle confusion. We treat a muddle as an information problem and answer it with more reading, more asking, more weighing. This verse treats one kind of clarity as wages, paid for conduct. It does not make study useless, and nothing here says a God-fearing man never misjudges a situation. It says that if a matter will not come clear, the honest place to look first is the week just gone, not the next opinion.",
            "bn": "আমরা বেশির ভাগ মানুষ বিভ্রান্তি যেভাবে সামলাই, এ কথা তার ঠিক উল্টো। জট পাকালে আমরা ধরে নিই তথ্যের অভাব, তাই সমাধান খুঁজি আরও পড়ে, আরও জিজ্ঞেস করে, আরও ভেবেচিন্তে। এ আয়াত কিন্তু এক ধরনের স্বচ্ছ দৃষ্টিকে দেখে আমলের প্রতিদান হিসেবে। এতে পড়াশোনা অকেজো হয়ে যায় না, আর আল্লাহভীরু মানুষ কখনো কোনো পরিস্থিতি ভুল বোঝেন না, এমন কথাও এখানে নেই। কথাটা হলো: কোনো বিষয় যদি কিছুতেই পরিষ্কার না হয়, তবে সৎভাবে প্রথমে তাকাতে হবে সদ্য কেটে যাওয়া সপ্তাহটার দিকে, পরের কারও মতামতের দিকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Furqan",
          "bn": "ফুরকান চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "This verse is a promise rather than a supplication, but the Book supplies a prayer that sits exactly on it. 20:114 has the Prophet ﷺ himself taught to say, my Lord, increase me in knowledge. As-Sa'di defines the furqan as knowledge and guidance, which makes that short sentence the most direct request a reader can make for what this verse offers, and it has the advantage of being Quranic wording that anyone can memorise in a single sitting.",
            "bn": "এ আয়াত দোয়া নয়, ওয়াদা। তবু কিতাবেই এমন একটি দোয়া আছে, যা ঠিক এর সঙ্গে মেলে। ২০:১১৪ আয়াতে স্বয়ং নবীকে ﷺ শেখানো হয়েছে এ কথা বলতে: হে আমার রব, আমার জ্ঞান বাড়িয়ে দিন। সা'দী ফুরকানের সংজ্ঞা দেন ইলম ও হিদায়াত বলে। তাহলে এ আয়াত যা দেয়, তা চাওয়ার সবচেয়ে সরাসরি উপায় এই ছোট্ট বাক্যটিই। বাড়তি সুবিধা হলো, এটা কুরআনেরই শব্দ, আর যে কেউ এক বসায় মুখস্থ করে নিতে পারে।"
          },
          {
            "en": "If a longer sentence is wanted it can be built from this verse's own vocabulary and offered as nothing more than that: O Allah, give me taqwa of You, and from it give me a furqan I can see this matter by, and efface and cover what I have already done. That is a supplication assembled from the words of the verse, not a Sunnah du'a, and it should not be passed to anyone as one.",
            "bn": "আরেকটু লম্বা দোয়া চাইলে এ আয়াতের শব্দ দিয়েই তা গড়া যায়, এর বেশি কিছু দাবি না করে: হে আল্লাহ, আমাকে আপনার তাকওয়া দিন, আর সেই তাকওয়া থেকে এমন ফুরকান দিন, যা দিয়ে এ বিষয়টা আমি পরিষ্কার দেখতে পাই; আর আমি যা করে ফেলেছি, তা মুছে দিন, ঢেকে দিন। এটা আয়াতের শব্দ জুড়ে বানানো দোয়া, সুন্নাহর দোয়া নয়; কাউকে সুন্নাহর দোয়া বলে শেখানোও যাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Own Clarity",
          "bn": "নিজের দৃষ্টির স্বচ্ছতা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "What decision am I stuck on, and have I been treating it as a thinking problem when this verse treats clarity as something taqwa earns? The last time something genuinely came clear to me, what had I been doing in the weeks before it did? And the verse puts fearing Allah before discernment: which of the two have I been trying to get hold of first?",
            "bn": "কোন সিদ্ধান্তে আমি আটকে আছি, আর আমি কি সেটাকে ভাবনার সমস্যা ধরে নিয়েছি, অথচ এ আয়াত পরিষ্কার দেখাকে তাকওয়ার কামাই বলে গোনে? শেষ যেবার সত্যিকার অর্থে কোনো বিষয় আমার কাছে পরিষ্কার হয়ে গেল, তার আগের সপ্তাহগুলোতে আমি কী করছিলাম? আর আয়াত আল্লাহভীতিকে রাখে বোঝার আগে, তাহলে এ দুটোর মধ্যে আমি কোনটা আগে ধরতে চাইছি?"
          },
          {
            "en": "Two that cost more to answer. If my misdeeds were really effaced and then covered, whose opinion of me would I stop working so hard to manage? And if I acted for one week as though clear sight follows obedience rather than more information, what would I actually do differently on the days nothing feels resolved?",
            "bn": "আরও দুটি প্রশ্ন, যেগুলোর জবাব দেওয়া আরও কঠিন। আমার দোষগুলো যদি সত্যিই মুছে দেওয়া হয়ে থাকে, তারপর ঢেকেও দেওয়া হয়ে থাকে, তবে কার চোখে নিজের ভাবমূর্তি সামলাতে আমি আর এত খাটব না? আর এক সপ্তাহ যদি এই বিশ্বাস নিয়ে চলি যে স্বচ্ছ দৃষ্টি আসে আনুগত্যের পেছনে পেছনে, আরও তথ্যের পেছনে নয়, তবে যেসব দিনে কিছুরই মীমাংসা হচ্ছে বলে মনে হয় না, সেসব দিনে আমি আসলে কী অন্যভাবে করব?"
          }
        ]
      }
    ]
  },
  "8:36": {
    "sections": [
      {
        "h": {
          "en": "Where the Money Came From",
          "bn": "টাকাটা এসেছিল কোথা থেকে"
        },
        "p": [
          {
            "en": "Al-Anfal is Madinan, and the verses just before this one are about Makkah rather than about money. 8:30 recalls the plot to restrain or kill or expel the Prophet ﷺ, 8:31 their line that the revelation is legends of the ancients, 8:32 their prayer for stones from the sky, and 8:34 their claim to be guardians of the Sacred Mosque. Then the subject turns to their treasury. 8:37 will give the purpose behind what this verse describes, and 8:38 will repeat the offer that 8:19 already made: if they cease, what is past is forgiven.",
            "bn": "সূরা আনফাল মাদানী, তবে এ আয়াতের ঠিক আগের আয়াতগুলোর বিষয় টাকা নয়, মক্কা। ৮:৩০ আয়াত মনে করিয়ে দেয় নবীকে ﷺ বন্দী করা, হত্যা করা বা দেশছাড়া করার ষড়যন্ত্রের কথা; ৮:৩১ আয়াত তাদের সেই বুলি, ওহি নাকি আগের লোকদের কিসসা; ৮:৩২ আয়াত আসমান থেকে পাথর বর্ষণের জন্য তাদের দোয়া; আর ৮:৩৪ আয়াত মাসজিদুল হারামের মুতাওয়াল্লী হওয়ার দাবি। এরপর আলোচনা ঘুরে যায় তাদের কোষাগারের দিকে। এ আয়াত যা বর্ণনা করছে, তার পেছনের উদ্দেশ্য বলবে ৮:৩৭ আয়াত; আর ৮:৩৮ আয়াত আবার সেই প্রস্তাবই দেবে, যা ৮:১৯ আয়াত আগেই দিয়েছে: তারা বিরত হলে আগে যা হয়ে গেছে, তা মাফ করে দেওয়া হবে।"
          },
          {
            "en": "Three different occasions are reported for the verse and they are worth keeping apart. Ibn Kathir carries Ibn Ishaq's account through az-Zuhri and others: after Badr, Quraysh who had lost fathers, sons and brothers, among them Abdullah ibn Abi Rabi'ah, Ikrimah ibn Abi Jahl and Safwan ibn Umayyah, went to Abu Sufyan and to those whose wealth was in the caravan and asked them to fund a fight, and they agreed. Ibn Ishaq says the verse came down about them, and reports that from Ibn Abbas (RA).",
            "bn": "এ আয়াতের শানে নুযূল হিসেবে তিনটি আলাদা ঘটনা বর্ণিত হয়েছে, আর সেগুলো আলাদা রাখাই ঠিক। ইবনু কাসীর যুহরী ও অন্যদের সূত্রে ইবনু ইসহাকের বর্ণনা আনেন: বদরের পর কুরাইশের যেসব লোক বাবা, ছেলে বা ভাই হারিয়েছিল, যেমন আবদুল্লাহ ইবনু আবী রাবীআ, ইকরিমা ইবনু আবী জাহল ও সাফওয়ান ইবনু উমাইয়া, তারা আবূ সুফিয়ান এবং কাফেলায় যাদের মাল ছিল তাদের কাছে গিয়ে যুদ্ধের খরচ জোগাতে বলল, আর তারা রাজি হলো। ইবনু ইসহাক বলেন, আয়াতটি তাদের সম্পর্কেই নাজিল হয়েছে, আর এ কথা তিনি ইবনু আব্বাস (রাঃ) থেকে বর্ণনা করেন।"
          },
          {
            "en": "The second names Uhud. Mujahid, Sa'id ibn Jubayr, al-Hakam, Qatadah, as-Suddi and Ibn Abza all read the verse of Abu Sufyan's spending there; at-Tabari carries from Sa'id ibn Jubayr and Ibn Abza that he hired two thousand of the Ahabish of Banu Kinanah, and from al-Hakam that he spent forty uqiyah, with at-Tabari adding that an uqiyah in those days was forty-two mithqal. The third is ad-Dahhak's, that it came down about the idolaters of Badr. Ibn Kathir then settles the matter in one line: in any case the verse is general, even though a specific incident accompanied its revelation.",
            "bn": "দ্বিতীয় বর্ণনায় আছে উহুদের কথা। মুজাহিদ, সাঈদ ইবনু জুবাইর, হাকাম, কাতাদা, সুদ্দী ও ইবনু আবযা সবাই আয়াতটিকে উহুদে আবূ সুফিয়ানের খরচের সঙ্গে যুক্ত করেন। তাবারী সাঈদ ইবনু জুবাইর ও ইবনু আবযা থেকে বর্ণনা করেন, সে বানূ কিনানার আহাবীশদের দুই হাজার লোক ভাড়া করেছিল; আর হাকাম থেকে বর্ণনা করেন, সে চল্লিশ উকিয়া খরচ করেছিল। তাবারী যোগ করেন, তখনকার এক উকিয়া ছিল বিয়াল্লিশ মিসকাল। তৃতীয় বর্ণনাটি দাহহাকের: আয়াতটি নাজিল হয়েছে বদরের মুশরিকদের সম্পর্কে। এরপর ইবনু কাসীর এক কথায় বিষয়টার মীমাংসা করে দেন: যা-ই হোক, আয়াতটি ব্যাপক, যদিও এর নাজিলের সঙ্গে একটি নির্দিষ্ট ঘটনা জড়িয়ে ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Wealth, and What It Buys",
          "bn": "সম্পদ, আর তার বিনিময়ে যা মেলে"
        },
        "p": [
          {
            "en": "The first verb is in the present tense, yunfiqun, the form that reports a habit rather than an episode: spending is what they do. The purpose is marked by a lam, li-yasuddu, so that they may turn people away. At-Tabari fills in the mechanics: they hand it to their own kind among the idolaters so that those men may be strengthened by it against the Messenger ﷺ and the believers. Money is not described here as an idol but as a supply line.",
            "bn": "প্রথম ক্রিয়াটি বর্তমান কালে, ইউনফিকূন, যে গঠন কোনো এক ঘটনা নয়, স্বভাব জানায়: খরচ করাটাই তাদের কাজ। উদ্দেশ্য বোঝাতে বসেছে লাম, লিয়াসুদ্দূ, যাতে তারা মানুষকে ফিরিয়ে রাখতে পারে। তাবারী কাজের ধরনটা ধরিয়ে দেন: তারা সেটা তুলে দেয় মুশরিকদের মধ্যে নিজেদেরই মতো লোকদের হাতে, যাতে ওরা তা দিয়ে রাসূলের ﷺ আর মু'মিনদের বিরুদ্ধে শক্তি পায়। টাকাকে এখানে মূর্তি বলা হচ্ছে না, বলা হচ্ছে রসদের সরবরাহপথ।"
          },
          {
            "en": "Then the sequence, and it runs in three steps joined by thumma, then. They will certainly spend it, the emphatic future doing that work. Then it becomes a hasrah upon them, from a root for the kind of regret that strips a person bare. Then they are overcome. The last two steps are passive, and no agent is named in either: they are not told who will overcome them or who will gather them. The verse ends on the second passive, to Hell they will be gathered.",
            "bn": "এরপর আসে পরম্পরা: তিনটি ধাপ, প্রতিটি জোড়া লেগেছে ছুম্মা, অর্থাৎ তারপর দিয়ে। তারা অবশ্যই খরচ করবে; জোর দেওয়া ভবিষ্যৎ কালের ক্রিয়াটাই এই নিশ্চয়তা বোঝায়। তারপর সেটা তাদের জন্য হাসরাত হয়ে দাঁড়াবে; এ শব্দের ধাতু এমন আফসোস বোঝায়, যা মানুষকে একেবারে নিঃস্ব করে ফেলে। তারপর তারা পরাজিত হবে। শেষ দুই ধাপ কর্মবাচ্যে, কোনোটিতেই কর্তার নাম নেই: কে তাদের পরাজিত করবে, কে তাদের একত্র করবে, তা বলা হয়নি। আয়াতের শেষও এই দ্বিতীয় কর্মবাচ্যে: জাহান্নামের দিকে তাদের একত্র করা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Regret as the Return",
          "bn": "লাভের জায়গায় আফসোস"
        },
        "p": [
          {
            "en": "At-Tabari explains why the spending turns: their wealth goes and they do not get what they were hoping and reaching for, the putting out of Allah's light and the raising of the word of unbelief above the word of Allah, because it is Allah who raises His own word and makes the word of unbelief lowest. Then the believers overcome them. The loss is double on his reading, the money and the object both, and the second loss is the one the buyer had not priced.",
            "bn": "খরচটা কেন উল্টো দিকে ঘুরে যায়, তাবারী তা খুলে বলেন: তাদের সম্পদ চলে যায়, আর যা তারা আশা করছিল আর যার দিকে হাত বাড়িয়েছিল তা তারা পায় না, অর্থাৎ আল্লাহর নূর নিভিয়ে দেওয়া আর কুফরের কথাকে আল্লাহর কথার উপরে তোলা। কারণ আল্লাহই নিজের কথাকে উপরে তোলেন আর কুফরের কথাকে রাখেন সবচেয়ে নিচে। তারপর মু'মিনরা তাদের উপর জয়ী হয়। তাঁর পাঠে ক্ষতি দুটো, টাকা আর উদ্দেশ্য দুটোই যায়, আর দ্বিতীয় ক্ষতিটার দাম ক্রেতা হিসাবেই ধরেনি।"
          },
          {
            "en": "At-Tabari then draws up the account in two columns. For the man who lived, his wealth was raided out of his hands and went for nothing with no benefit reached, and he came home overcome, subdued, stripped. For the man who died, he was killed and stripped and hurried on to the Fire. It is the plainest statement in the tafsir of what the verse means by regret, and it is worth noticing that the living man and the dead man arrive at the same word.",
            "bn": "এরপর তাবারী হিসাবটা দুই কলামে সাজান। যে লোক বেঁচে রইল, তার সম্পদ হাত থেকে লুট হয়ে গেল, কোনো লাভ হাতে না এসে বৃথা গেল, আর সে ফিরে এল পরাজিত, দমে যাওয়া, সর্বস্বহারা হয়ে। যে লোক মরে গেল, সে নিহত হলো, তার সব খোয়া গেল, আর তাকে তাড়িয়ে নেওয়া হলো আগুনের দিকে। আয়াত আফসোস বলতে কী বোঝায়, তাফসীরে এর চেয়ে সোজা কথা আর নেই। আর খেয়াল করার মতো ব্যাপার হলো, বেঁচে থাকা লোক আর মরে যাওয়া লোক, দুজনেই গিয়ে ঠেকে একই শব্দে।"
          },
          {
            "en": "As-Sa'di adds the part that happens inside the spender. The money will go out easily, he says, and it will feel light to them, because of how firmly they hold to what is false and how deeply they hate the truth. That is the observation a reader should take personally. A wrong expense is not usually signed with a heavy hand; conviction makes it feel cheap. The regret he names afterwards is not only financial: he calls it remorse and disgrace and humiliation, and then they are overcome.",
            "bn": "সা'দী যোগ করেন খরচকারীর ভেতরে যা ঘটে, সেটুকু। তিনি বলেন, টাকা বেরিয়ে যাবে সহজেই, তাদের কাছে ভারই লাগবে না; কারণ তারা বাতিলকে আঁকড়ে আছে শক্ত করে, আর হককে ঘৃণা করে গভীরভাবে। পাঠকের উচিত এ কথাটা নিজের গায়ে মেখে দেখা। ভুল খাতে খরচ করার সময় সাধারণত হাত কাঁপে না; মনের দৃঢ় বিশ্বাসই খরচটাকে সস্তা মনে করায়। এরপর তিনি যে আফসোসের কথা বলেন, তা শুধু টাকার আফসোস নয়: তিনি বলেন অনুতাপ, অপমান আর লাঞ্ছনা, আর তারপর তারা পরাজিত হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Last Clause Narrows",
          "bn": "শেষ বাক্যের পরিসর ছোট কেন"
        },
        "p": [
          {
            "en": "Al-Baghawi carries a fourth report of the occasion, from al-Kalbi and Muqatil: that it came down about the men who fed the army at Badr, twelve of Quraysh, each one feeding ten camels a day. The list he gives includes men who did not die on that side. Al-Abbas ibn Abd al-Muttalib (RA) is in it, and so is Hakim ibn Hizam (RA), and both of them became Muslim. A reader who knows that will want to know what the verse does with them.",
            "bn": "শানে নুযূলের চতুর্থ একটি বর্ণনা আনেন বাগভী, কালবী ও মুকাতিল থেকে: আয়াত নেমেছে বদরে সৈন্যদের খাওয়ানো লোকদের সম্পর্কে, কুরাইশের বারোজন, যাদের প্রত্যেকে দিনে দশটি উট খাওয়াত। তিনি যে তালিকা দেন তাতে এমন লোকও আছেন যাঁরা ওই পক্ষে মরেননি। আব্বাস ইবনু আবদুল মুত্তালিব (রাঃ) সে তালিকায় আছেন, হাকীম ইবনু হিযামও (রাঃ) আছেন, আর দুজনেই পরে মুসলিম হয়েছেন। যে পাঠক এটা জানেন, তিনি জানতে চাইবেন আয়াত তাঁদের নিয়ে কী করে।"
          },
          {
            "en": "Al-Baghawi answers it in his closing line, and it is the sharpest thing in his entry. The verse's first clause is about those who disbelieve and spend; its last clause says that those who disbelieve will be gathered to Hell. He notes that the disbelievers are specified in that last clause because among them were men who accepted Islam. The wording narrows on purpose. A verse can describe what a man is funding today without closing the file on where he ends, and this one leaves that door where 8:38 will open it.",
            "bn": "বাগভী এর জবাব দেন তাঁর আলোচনার শেষ বাক্যে, আর সেটাই তাঁর আলোচনার সবচেয়ে ধারালো কথা। আয়াতের প্রথম বাক্য তাদের নিয়ে, যারা কুফরী করে আর খরচ করে; শেষ বাক্য বলে, যারা কুফরী করে, তাদের জাহান্নামের দিকে একত্র করা হবে। তিনি ধরিয়ে দেন, শেষ বাক্যে কাফিরদের আলাদা করে উল্লেখ করা হয়েছে, কারণ খরচকারীদের মধ্যে এমন লোকও ছিল, যারা ইসলাম গ্রহণ করেছে। শব্দ বাছাই করেই পরিসরটা ছোট করা হয়েছে। একজন মানুষ আজ কিসে টাকা ঢালছে, আয়াত তা বলে দিতে পারে, অথচ শেষে সে কোথায় গিয়ে দাঁড়াবে, সে খাতা বন্ধ করে দেয় না। এ আয়াত সেই দরজাটা রেখে যায় ঠিক সেখানে, যেখানে ৮:৩৮ আয়াত তা খুলে দেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Sunnah Says About Motive",
          "bn": "নিয়ত নিয়ে সুন্নাহ যা বলে"
        },
        "p": [
          {
            "en": "None of the tafsirs consulted attaches a saying of the Prophet ﷺ to this verse. What they attach is sirah: the meeting after Badr, the hire of the Ahabish, the feeding of the army, the weight of an uqiyah. Those are reports about an occasion, transmitted by exegetes from their teachers, and they are useful for seeing the scene rather than for settling a ruling. The verse needs no narration to be understood, and none is borrowed here to fill the slot.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে নবীর ﷺ কোনো হাদিস জুড়ে দেয়নি। তারা জুড়েছে সীরাত: বদরের পরের সেই বৈঠক, আহাবীশদের ভাড়া করা, সৈন্যদের খাওয়ানো, এক উকিয়ার ওজন। এগুলো শানে নুযূল সম্পর্কিত বর্ণনা, মুফাসসিরগণ নিজেদের উস্তাদদের কাছ থেকে পেয়েছেন। এগুলো দৃশ্যটা চোখের সামনে আনতে কাজে লাগে, কোনো বিধান ঠিক করতে নয়। আয়াতটি বুঝতে কোনো বর্ণনার দরকার নেই, আর ফাঁক ভরাতে এখানে অন্য কোথাও থেকে হাদিস ধার করেও আনা হচ্ছে না।"
          },
          {
            "en": "One sound narration stands beside the idea without being tied to the verse, and it is offered on that footing. Sahih al-Bukhari 2887 has from Abu Hurayrah (RA) that the Prophet ﷺ said, perish the slave of the dinar and the dirham, pleased if he is given and displeased if he is not. It sits in Bukhari's chapter on fighting, which is where this verse lives too, and it names the thing the verse is describing from the inside: a man whose money has become his master.",
            "bn": "একটি সহীহ বর্ণনা এ ভাবনার সঙ্গে মেলে, যদিও আয়াতের সঙ্গে তা যুক্ত নয়; এখানে সেটি সেই হিসেবেই আনা হলো। সহীহ বুখারীর ২৮৮৭ নম্বর হাদিসে আবূ হুরাইরা (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: ধ্বংস হোক দীনার আর দিরহামের গোলাম; তাকে দেওয়া হলে সে খুশি, না দেওয়া হলে নারাজ। হাদিসটি আছে বুখারীর জিহাদ অধ্যায়ে, আর এ আয়াতের প্রসঙ্গও সেটাই। আয়াত যে অবস্থার কথা বলছে, এ হাদিস ভেতর থেকে তার নাম দেয়: এমন মানুষ, টাকাই যার মনিব হয়ে বসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on the Same Spending",
          "bn": "একই খরচ নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "3:117 gives the picture this verse states as a forecast: what they spend in this worldly life is like a wind carrying frost that strikes a harvest and destroys it. The crop was real and the labour was real; the wind decided what the season was worth. 3:10 says plainly that neither wealth nor children will avail such men anything against Allah, which is the same conclusion our verse reaches by following the money rather than by declaring it.",
            "bn": "এ আয়াত যা ভবিষ্যদ্বাণী হিসেবে বলে, ৩:১১৭ আয়াত তার ছবি এঁকে দেয়: দুনিয়ার এ জীবনে তারা যা খরচ করে, তার উপমা হিমেল হাওয়া, যা কোনো শস্যক্ষেতে আঘাত হেনে তা ধ্বংস করে দেয়। ফসল সত্যি ছিল, খাটুনিও সত্যি ছিল; কিন্তু মৌসুমের দাম কত, তা ঠিক করে দিল বাতাস। ৩:১০ আয়াত সোজাসুজি বলে দেয়, আল্লাহর বিরুদ্ধে এমন লোকদের সম্পদ আর সন্তান কোনো কাজেই আসবে না। আমাদের আয়াতও একই সিদ্ধান্তে পৌঁছায়, তবে ঘোষণা দিয়ে নয়, টাকার পেছনে পেছনে হেঁটে।"
          },
          {
            "en": "47:32 is the closest in wording, joining those who disbelieved and turned people from the path of Allah with the verdict that they will never harm Allah at all and that He will render their deeds worthless. 9:34 turns the same lens on a different crowd, those who take people's wealth wrongly and turn them from the way of Allah. And 8:38, two verses on from ours, says what the money could still buy: if they cease, what has already passed is forgiven them.",
            "bn": "শব্দের দিক থেকে সবচেয়ে কাছের আয়াত ৪৭:৩২। যারা কুফরী করেছে আর মানুষকে আল্লাহর পথ থেকে ফিরিয়ে রেখেছে, তাদের ব্যাপারে সেখানে রায়: তারা আল্লাহর কোনো ক্ষতিই করতে পারবে না, আর তিনি তাদের আমল নিষ্ফল করে দেবেন। ৯:৩৪ আয়াত একই দৃষ্টিতে তাকায় আরেক দলের দিকে, যারা অন্যায়ভাবে মানুষের সম্পদ খায় আর তাদের আল্লাহর পথ থেকে ফিরিয়ে রাখে। আর আমাদের আয়াতের দুই আয়াত পরে ৮:৩৮ বলে দেয়, এই টাকা দিয়ে তখনো কী কেনা যেত: তারা বিরত হলে আগে যা হয়ে গেছে, তা তাদের মাফ করে দেওয়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Money With a Direction",
          "bn": "টাকারও গন্তব্য আছে"
        },
        "p": [
          {
            "en": "The practical force of the verse is that it treats an expense as having a life, not a moment. At the moment of payment their money worked: hires were made, an army was fed, a campaign was mounted. The verse does not dispute any of that. It follows the payment forward, past the campaign, past the defeat, to where the payer stands holding nothing. Anyone can do the same arithmetic on a subscription, a habit, a business, or a quarrel being funded month after month.",
            "bn": "আয়াতের বাস্তব শিক্ষাটা হলো, খরচকে এটি একটা মুহূর্ত হিসেবে দেখে না; দেখে এমন কিছু হিসেবে, যার একটা গোটা জীবন আছে। টাকা দেওয়ার মুহূর্তে তাদের টাকা কাজ করেছিল: লোক ভাড়া হয়েছে, সৈন্যরা খেয়েছে, অভিযান শুরু হয়েছে। আয়াত এর কোনোটাই অস্বীকার করে না। আয়াত সেই খরচের পিছু নিয়ে এগিয়ে যায়: অভিযান পেরিয়ে, পরাজয় পেরিয়ে, সেই জায়গা পর্যন্ত, যেখানে দাতা দাঁড়িয়ে আছে শূন্য হাতে। যে কেউ নিজের কোনো সাবস্ক্রিপশন, অভ্যাস, ব্যবসা, কিংবা মাসের পর মাস টাকা ঢেলে চালিয়ে যাওয়া কোনো ঝগড়ার বেলায় একই হিসাব কষে দেখতে পারেন।"
          },
          {
            "en": "The other half of it is as-Sa'di's note about lightness. If an expense feels easy to approve, that ease is not evidence that it is right; conviction about the cause is exactly what makes the signature light. The useful test the verse suggests is not how the payment feels now but where it arrives. A believer has the same choice in the opposite direction, because the verse's own logic works for good spending too: the money goes, and the account stays open.",
            "bn": "বাকি অর্ধেকটা সা'দীর সেই কথা: খরচটা হালকা লাগে। কোনো খরচে সায় দেওয়া সহজ মনে হলেই প্রমাণ হয় না যে কাজটা ঠিক; বরং উদ্দেশ্যের প্রতি দৃঢ় বিশ্বাসই সই করাটাকে হালকা করে দেয়। আয়াত যে পরীক্ষাটা শেখায়, তা হলো খরচটা এখন কেমন লাগছে তা নয়, বরং শেষে গিয়ে সেটা কোথায় পৌঁছায়। মু'মিনের সামনেও একই বাছাই আছে, উল্টো দিকে; কারণ আয়াতের যুক্তি ভালো খরচের বেলায়ও খাটে: টাকা চলে যায়, কিন্তু হিসাবের খাতা খোলাই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Over What You Give",
          "bn": "যা দেন, তার জন্য দোয়া"
        },
        "p": [
          {
            "en": "This verse carries no supplication, and the honest thing is to say so and then point to where the Book keeps the prayer that answers it. 2:127 has Ibrahim (AS) and Isma'il (AS) raising the foundations of the House and saying only, our Lord, accept from us; indeed You are the Hearing, the Knowing. Set beside our verse the fit is exact. There, men spent on building His House and asked for the spending to be accepted. Here, men spent against it and the spending came back as regret.",
            "bn": "এ আয়াতে কোনো দোয়া নেই। সততার দাবি হলো সে কথা স্বীকার করা, তারপর দেখিয়ে দেওয়া কিতাবের কোথায় এর জবাবের দোয়াটি আছে। ২:১২৭ আয়াতে ইবরাহীম (আঃ) ও ইসমাঈল (আঃ) কা'বাঘরের ভিত তুলছেন, আর কেবল এটুকুই বলছেন: হে আমাদের রব, আমাদের পক্ষ থেকে কবুল করুন; নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ। আমাদের আয়াতের পাশে রাখলে মিলটা একেবারে নিখুঁত। সেখানে মানুষ খরচ করছে তাঁর ঘর বানাতে, আর চাইছে খরচটা কবুল হোক। এখানে মানুষ খরচ করল সেই ঘরের বিরুদ্ধে, আর খরচটা ফিরে এল আফসোস হয়ে।"
          },
          {
            "en": "If a sentence in this verse's own vocabulary is wanted, it can be said and claimed as nothing more: O Allah, do not let my wealth go out for anything that turns people from Your way, and do not let what I give become a regret on my hands; accept from me instead. That is a supplication assembled from the words of the verse and of 2:127, and it is not a Sunnah du'a.",
            "bn": "এ আয়াতের নিজের শব্দে একটি বাক্য চাইলে তা বলা যায়, এর বেশি কিছু দাবি না করে: হে আল্লাহ, আমার সম্পদ এমন কিছুতে যেতে দেবেন না, যা মানুষকে আপনার পথ থেকে ফিরিয়ে রাখে; আর আমি যা দিই, তা যেন আমার জন্য আফসোস হয়ে না দাঁড়ায়; বরং আমার পক্ষ থেকে কবুল করুন। এটা এ আয়াত আর ২:১২৭ আয়াতের শব্দ জুড়ে বানানো দোয়া, সুন্নাহর দোয়া নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Own Spending",
          "bn": "নিজের খরচ নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Is there money leaving my hands every month toward something I would not want to be holding at the end of its life? The verse calls their spending a regret before they had felt it as one, so what am I funding now that my older self will read that way? And their giving felt light to them: what is it that makes a wrong expense easy to sign off?",
            "bn": "প্রতি মাসে কি আমার হাত থেকে এমন কিছুতে টাকা যাচ্ছে, যার শেষ পরিণতি আমি নিজের হাতে দেখতে চাইব না? তারা আফসোস টের পাওয়ার আগেই আয়াত তাদের খরচকে আফসোস বলে দিয়েছে; তাহলে এখন আমি কিসে টাকা ঢালছি, যাকে বয়স বাড়লে আমিও এভাবেই দেখব? আর তাদের কাছে দেওয়াটা হালকা লেগেছিল: কোন জিনিসটা ভুল খরচে সই করাকে সহজ করে দেয়?"
          },
          {
            "en": "Two that are harder. If somebody followed my spending to the end of its life, the way this verse follows theirs, where would it arrive and what would be standing there? And what is the one thing I could fund this month that I would still be glad about on the day the verse ends on, when people are gathered?",
            "bn": "আরও দুটি, একটু কঠিন। এ আয়াত যেভাবে তাদের খরচের পিছু নিয়েছে, সেভাবে কেউ যদি আমার খরচের পিছু নিয়ে তার শেষ পর্যন্ত যায়, তবে সেটা কোথায় গিয়ে পৌঁছাবে, আর সেখানে কী দাঁড়িয়ে থাকবে? আর এ মাসে এমন কোন একটি কাজে আমি টাকা দিতে পারি, যা নিয়ে সেই দিনও খুশি থাকব, যে দিনের কথায় আয়াতটি শেষ হয়েছে, যেদিন মানুষকে একত্র করা হবে?"
          }
        ]
      }
    ]
  },
  "8:46": {
    "sections": [
      {
        "h": {
          "en": "A Surah That Began With a Quarrel",
          "bn": "যে সূরার শুরু এক বিবাদ দিয়ে"
        },
        "p": [
          {
            "en": "Surah al-Anfal belongs to the aftermath of Badr, and it opens on a disagreement among the victors. 8:1 records that they were asking about the spoils, and the answer refuses the frame of the question: the spoils belong to Allah and the Messenger, so fear Allah, amend what is between you, and obey Allah and His Messenger if you are believers. A surah that begins by repairing relations between the winners comes back to the subject in 8:46 itself.",
            "bn": "সূরা আল-আনফাল বদরের পরের সময়ের সূরা, আর এর শুরুই বিজয়ীদের নিজেদের মধ্যকার এক মতভেদ দিয়ে। ৮:১ আয়াত জানায়, তারা গনীমত সম্পর্কে জিজ্ঞেস করছিল; আর জবাবটা প্রশ্নের ধাঁচটাকেই মেনে নেয় না: গনীমত আল্লাহ ও রাসূলের, কাজেই আল্লাহকে ভয় করো, নিজেদের মধ্যকার সম্পর্ক ঠিক করে নাও, আর তোমরা মুমিন হলে আল্লাহ ও তাঁর রাসূলের আনুগত্য করো। যে সূরা বিজয়ীদের সম্পর্ক জোড়া লাগিয়ে শুরু হয়, ৮:৪৬ আয়াতে সে আবার একই বিষয়ে ফিরে আসে।"
          },
          {
            "en": "The immediate setting is a battlefield. 8:45 addresses the believers directly: when you meet a company, stand firm and remember Allah much, that you may succeed. 8:46 continues in the same breath, with obedience, then the prohibition on disputing, then patience; and 8:47 warns them not to be like those who marched out of their homes in arrogance and to be seen by people. Steadiness, unity and sincerity are issued as one set of orders rather than three.",
            "bn": "আয়াতের সরাসরি প্রেক্ষাপট যুদ্ধের ময়দান। ৮:৪৫ আয়াত মুমিনদের সরাসরি বলছে: যখন কোনো বাহিনীর মুখোমুখি হবে, অবিচল থাকো আর আল্লাহকে বেশি বেশি স্মরণ করো, যাতে তোমরা সফল হও। ৮:৪৬ আয়াত একই নিঃশ্বাসে বলে চলে: আনুগত্য, তারপর বিবাদের নিষেধ, তারপর সবর। আর ৮:৪৭ আয়াত সতর্ক করে, তোমরা তাদের মতো হয়ো না, যারা অহংকার নিয়ে আর লোক দেখাতে ঘর থেকে বেরিয়েছিল। অবিচলতা, ঐক্য আর ইখলাস এখানে তিনটি আলাদা হুকুম নয়; একসঙ্গে দেওয়া একটিই হুকুমের তিন অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Pulling in Different Directions",
          "bn": "ভিন্ন ভিন্ন দিকে টানাটানি"
        },
        "p": [
          {
            "en": "La tanaza'u is a form VI verb from a root whose plain sense is to pull something out or away. The reciprocal form makes the picture concrete: not one person objecting, but several hands tugging the same object in different directions, each convinced that he is holding on rather than tearing. The Quran does not forbid disagreement itself. 4:59 assumes it will happen and supplies the procedure: if you dispute over anything, refer it back to Allah and the Messenger.",
            "bn": "'লা তানাযাঊ' আরবি ষষ্ঠ বাবের ক্রিয়া। এর মূল ধাতুর সাধারণ অর্থ কোনো কিছু টেনে বের করা বা ছিনিয়ে নেওয়া। পারস্পরিক অর্থের এই বাব ছবিটাকে চোখের সামনে এনে দেয়: একজনের আপত্তি নয়, বরং কয়েকটা হাত একই জিনিস ভিন্ন ভিন্ন দিকে টানছে, আর প্রত্যেকেই নিশ্চিত, সে ছিঁড়ছে না, আঁকড়ে ধরে আছে। মতভেদ জিনিসটাকে কুরআন নিষেধ করে না। ৪:৫৯ আয়াত ধরেই নেয় যে মতভেদ হবে, আর তার সমাধানের পথও বলে দেয়: কোনো বিষয়ে তোমাদের মধ্যে বিবাদ হলে তা আল্লাহ ও রাসূলের দিকে ফিরিয়ে দাও।"
          },
          {
            "en": "Which is why the command to obey Allah and His Messenger stands immediately before the prohibition here rather than after it. The remedy is stated before the disease. A body of people holds together because it is following the same authority, not because its members happen to like one another. Remove the shared authority and there is nothing left for a disagreement to be settled against, so it can only be settled by whoever pulls hardest.",
            "bn": "এ কারণেই এখানে আল্লাহ ও তাঁর রাসূলের আনুগত্যের হুকুম এসেছে নিষেধের ঠিক আগে, পরে নয়। রোগের কথা বলার আগেই ওষুধের কথা বলা হয়েছে। একদল মানুষ একসঙ্গে টিকে থাকে, কারণ তারা একই কর্তৃত্ব মেনে চলে; এ জন্য নয় যে ঘটনাচক্রে তারা একে অপরকে পছন্দ করে। সেই অভিন্ন কর্তৃত্ব সরিয়ে দিন, তখন মতভেদ মেটানোর কোনো মানদণ্ডই আর থাকে না। তখন মীমাংসা হয় একভাবেই: যে সবচেয়ে জোরে টানে, তার পক্ষে।"
          }
        ]
      },
      {
        "h": {
          "en": "Then You Lose Heart",
          "bn": "তারপর সাহস ভেঙে যায়"
        },
        "p": [
          {
            "en": "Fatafshalu is attached to the prohibition by a fa that makes it a consequence: dispute, and you will lose heart. Fashal is failure of nerve, the going slack of resolve, and the app's translation gives it as losing courage. Notice where the verse locates the first damage. A quarrel does not begin by costing a group its numbers, its resources or its position; it costs each person inside it the private certainty that the thing is worth doing.",
            "bn": "'ফাতাফশালূ' নিষেধের সঙ্গে জুড়েছে একটি 'ফা' দিয়ে, যা একে নিষেধ ভাঙার পরিণতি বানিয়ে দেয়: বিবাদ করো, তাহলে সাহস হারাবে। 'ফাশাল' মানে মনোবল ভেঙে পড়া, সংকল্প ঢিলে হয়ে যাওয়া; অ্যাপের অনুবাদে এর অর্থ সাহস হারানো। খেয়াল করুন, আয়াত প্রথম ক্ষতিটা কোথায় দেখাচ্ছে। ঝগড়া প্রথমেই কোনো দলের লোকবল, সম্পদ বা অবস্থান কেড়ে নেয় না; কেড়ে নেয় দলের প্রত্যেক মানুষের মনের ভেতরের সেই নিশ্চিত বিশ্বাস যে কাজটা করার মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Rih Departs",
          "bn": "তোমাদের 'রীহ' চলে যায়"
        },
        "p": [
          {
            "en": "Then wa tadhhaba rihukum, and your rih would depart. Rih is the ordinary Arabic word for wind, but the mufassirun do not read it literally here. Ibn Kathir explains it as your strength, the momentum a body of people carries while it holds together. The app's English gives your strength would depart, and the Bengali likewise speaks of strength and power vanishing. The image stays useful even so: wind moves a thing and is never owned by it. And the verse does not say an enemy takes the rih away. It leaves on its own account, from the inside, as soon as the tugging starts.",
            "bn": "এরপর আসে ওয়া তাযহাবা রীহুকুম: তোমাদের 'রীহ' চলে যাবে। আরবিতে 'রীহ' বাতাসের সাধারণ শব্দ, তবে মুফাসসিরগণ এখানে একে আক্ষরিক অর্থে নেন না। ইবনে কাসীর এর ব্যাখ্যা করেন তোমাদের শক্তি হিসেবে, অর্থাৎ একদল মানুষ যতক্ষণ একজোট থাকে, ততক্ষণ তাদের যে গতি থাকে। অ্যাপের ইংরেজি অনুবাদে আছে তোমাদের শক্তি চলে যাবে, আর বাংলাতেও শক্তি ও ক্ষমতা হারিয়ে যাওয়ার কথা। তবু বাতাসের ছবিটা কাজের: বাতাস জিনিসকে চালায়, কিন্তু সেই জিনিস কখনো বাতাসের মালিক হয় না। আর আয়াত এ কথা বলে না যে কোনো শত্রু এই 'রীহ' কেড়ে নেয়। টানাটানি শুরু হওয়ামাত্র তা নিজে থেকেই, ভেতর থেকেই চলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Has Already Happened",
          "bn": "যেখানে এমনটা আগেই ঘটেছে"
        },
        "p": [
          {
            "en": "The Quran records the warning being ignored. 3:152 describes Uhud: Allah had fulfilled His promise to you when you were killing them by His permission, until you lost courage and fell to disputing about the order and disobeyed after He had shown you what you love. The two verbs there are the two verbs of this verse, fashal and tanazu', in the reverse order: 8:46 warns that disputing brings the loss of nerve, and 3:152 reports the nerve going first and the dispute after it. One passage states the rule; the other reports the day it was demonstrated.",
            "bn": "সতর্কবার্তা অমান্য করার ঘটনাও কুরআন লিখে রেখেছে। ৩:১৫২ আয়াতে উহুদের বর্ণনা: আল্লাহ তোমাদের দেওয়া ওয়াদা পূরণ করেছিলেন, যখন তোমরা তাঁর অনুমতিতে তাদের হত্যা করছিলে; শেষে তোমরা সাহস হারালে, নির্দেশ নিয়ে বিবাদে জড়ালে, আর তোমাদের প্রিয় জিনিসটি তিনি দেখানোর পর অবাধ্য হলে। সেখানকার দুটি ক্রিয়া, ফাশাল আর তানাযু', এই আয়াতেরও দুটি ক্রিয়া, তবে উল্টো ক্রমে। ৮:৪৬ সতর্ক করে, বিবাদ থেকে সাহস ভাঙে; আর ৩:১৫২ জানায়, আগে সাহস ভেঙেছিল, তারপর বিবাদ। এক জায়গায় নিয়মটা বলা হয়েছে; অন্য জায়গায় সেই দিনের কথা, যেদিন নিয়মটা চোখের সামনে প্রমাণ হলো।"
          },
          {
            "en": "The reverse case is described too. 59:14 says of a hostile group that you would think them united while their hearts are divided, a body that looks like one thing from outside and is not. Together the two verses fix what unity in the Quran actually means. It is not a photograph of people standing in the same place. It is an agreement about what is being obeyed, and 8:46 names the moment that agreement is lost.",
            "bn": "উল্টো অবস্থার বর্ণনাও আছে। ৫৯:১৪ আয়াত এক শত্রু দল সম্পর্কে বলে: তুমি তাদের ঐক্যবদ্ধ মনে করবে, অথচ তাদের অন্তর বিচ্ছিন্ন। বাইরে থেকে তারা এক দেহ, ভেতরে নয়। দুটি আয়াত মিলে স্পষ্ট করে দেয়, কুরআনে ঐক্য বলতে আসলে কী বোঝায়। ঐক্য মানে একই জায়গায় দাঁড়ানো কিছু মানুষের ছবি নয়। ঐক্য মানে কার আনুগত্য করা হচ্ছে, সে বিষয়ে একমত থাকা; আর ৮:৪৬ বলে দেয়, ঠিক কোন মুহূর্তে সেই ঐকমত্য হারিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Obedience Before, Patience After",
          "bn": "আগে আনুগত্য, পরে ধৈর্য"
        },
        "p": [
          {
            "en": "The frame of the verse is the part most often lost when the middle is quoted. It opens with obedience and closes with wasbiru, and be patient; indeed Allah is with the patient. Unity is set between a source and a discipline. A group stays together afterwards only because somebody is prepared to absorb what he would much rather answer, and the promise attached to that absorption is the same one 2:153 attaches to patience and prayer.",
            "bn": "আয়াতের মাঝের অংশটুকু উদ্ধৃত করার সময় সবচেয়ে বেশি হারিয়ে যায় এর কাঠামো। আয়াত শুরু হয় আনুগত্য দিয়ে, আর শেষ হয় ওয়াসবিরূ দিয়ে: আর ধৈর্য ধরো, নিশ্চয় আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। ঐক্যকে রাখা হয়েছে একটি উৎস আর একটি অনুশীলনের মাঝখানে। এরপর কোনো দল একসঙ্গে টিকে থাকে কেবল এ জন্য যে কেউ একজন এমন কথা হজম করতে রাজি থাকে, যার জবাব দিতেই তার মন বেশি চাইত। আর এই হজম করার সঙ্গে যে ওয়াদা জুড়ে আছে, তা সেই একই ওয়াদা, যা ২:১৫৩ আয়াত ধৈর্য ও নামাজের সঙ্গে জুড়ে দেয়।"
          },
          {
            "en": "Most of us will never stand in a battle line, but almost everyone is permanently on some team: a household, a mosque committee, a shared project. The diagnosis transfers whole. The argument comes first, then the quiet loss of appetite for the work, and only then the visible decline that everybody blames on something external. The verse also names where to intervene, which is at the first stage and not the third.",
            "bn": "আমাদের বেশির ভাগই কখনো যুদ্ধের সারিতে দাঁড়াব না, কিন্তু প্রায় সবাই সবসময় কোনো না কোনো দলের অংশ: পরিবার, মসজিদ কমিটি, কোনো যৌথ কাজ। আয়াতের দেখানো রোগটা সেখানেও হুবহু খাটে। আগে আসে তর্ক, তারপর চুপচাপ কাজের প্রতি আগ্রহ হারানো, আর সবার শেষে চোখে পড়ার মতো পতন, যার দায় সবাই বাইরের কিছুর ঘাড়ে চাপায়। কোথায় হাত দিতে হবে, আয়াত তাও বলে দেয়: প্রথম ধাপে, তৃতীয় ধাপে নয়।"
          }
        ]
      }
    ]
  },
  "8:47": {
    "sections": [
      {
        "h": {
          "en": "An Order About Motive",
          "bn": "নিয়ত নিয়ে একটি হুকুম"
        },
        "p": [
          {
            "en": "Ibn Kathir sets the verse in its sequence in one sentence: after Allah commanded the believers to fight in His cause sincerely and to be mindful of Him, He commanded them not to imitate the idolaters. The orders in 8:45 and 8:46 are about what a man does under pressure. This one is about the question asked before any of that, which is why he left the house. 8:48 will then show the same men being flattered by Satan on the way, so the passage runs from motive to self-image to collapse.",
            "bn": "ইবনু কাসীর এক বাক্যেই আয়াতটিকে তার পরম্পরায় বসিয়ে দেন: আল্লাহ মু'মিনদের হুকুম দিলেন খাঁটি নিয়তে তাঁর পথে লড়তে আর তাঁকে সবসময় মনে রাখতে; এরপর হুকুম দিলেন মুশরিকদের অনুকরণ না করতে। ৮:৪৫ আর ৮:৪৬ আয়াতের হুকুমগুলো চাপের মুখে মানুষ কী করে, তা নিয়ে। এ আয়াত তারও আগের প্রশ্ন নিয়ে: সে ঘর থেকে বেরিয়েছিল কেন। এরপর ৮:৪৮ আয়াত দেখাবে, পথে শয়তান ওই একই লোকদের কীভাবে তোষামোদ করছে। ফলে পুরো অংশটা এগোয় নিয়ত থেকে নিজের সম্পর্কে গড়া ছবির দিকে, আর সেখান থেকে ধসের দিকে।"
          },
          {
            "en": "The occasion is reported with names and a place. At-Tabari carries from Hisham ibn Urwah, from Urwah, that riders sent by Abu Sufyan reached Quraysh at al-Juhfah telling them the caravan was safe and they should turn back. They refused, and their words are preserved: by Allah, we will not return until we camp at Badr and stay three nights, so that whoever of the people of the Hijaz passes by us sees us, for no Arab will see us and the force we have gathered and then fight us. At-Tabari says these are the ones Allah meant.",
            "bn": "শানে নুযূল বর্ণিত হয়েছে নাম আর জায়গাসহ। তাবারী হিশাম ইবনু উরওয়ার সূত্রে উরওয়া থেকে বর্ণনা করেন: আবূ সুফিয়ানের পাঠানো আরোহীরা জুহফায় কুরাইশের কাছে পৌঁছে জানাল, কাফেলা নিরাপদ, তারা এবার ফিরে যেতে পারে। কুরাইশ রাজি হলো না, আর তাদের কথাটা সংরক্ষিত আছে: আল্লাহর কসম, আমরা ফিরব না, যতক্ষণ না বদরে গিয়ে তাঁবু ফেলি আর সেখানে তিন রাত কাটাই, যাতে হিজাযের যে-ই আমাদের পাশ দিয়ে যায়, সে আমাদের দেখে যায়; কারণ আমাদের আর আমাদের জড়ো করা বাহিনী দেখার পর আরবের কেউ আর আমাদের সঙ্গে লড়তে আসবে না। তাবারী বলেন, আল্লাহ এদের কথাই বলেছেন।"
          },
          {
            "en": "Ibn Kathir preserves Abu Jahl's version of the same refusal: no, by Allah, we will not go back until we proceed to the well of Badr, slaughter camels, drink wine and have the singing girls sing to us, so that the Arabs will always talk about our stance and what we did that day. Muhammad ibn Ka'b adds that they took singers and drums with them out of Makkah. Ibn Abbas (RA), Mujahid, Qatadah, ad-Dahhak and as-Suddi are all reported saying the same short thing about who the verse describes: the idolaters who fought the Messenger of Allah ﷺ at Badr.",
            "bn": "একই প্রত্যাখ্যানে আবূ জাহল কী বলেছিল, ইবনু কাসীর তা-ও সংরক্ষণ করেছেন: না, আল্লাহর কসম, আমরা ফিরব না, যতক্ষণ না বদরের কুয়ার কাছে গিয়ে উট জবাই করি, মদ খাই আর গায়িকারা আমাদের গান শোনায়; যাতে আরবরা চিরকাল আমাদের সেদিনের অবস্থান আর কাজকর্ম নিয়ে কথা বলে। মুহাম্মাদ ইবনু কা'ব যোগ করেন, তারা মক্কা থেকে গায়িকা আর ঢোল সঙ্গে নিয়ে বেরিয়েছিল। আয়াতটি কাদের কথা বলছে, এ নিয়ে ইবনু আব্বাস (রাঃ), মুজাহিদ, কাতাদা, দাহহাক ও সুদ্দী সবার থেকে একই ছোট্ট কথা বর্ণিত: বদরে রাসূলুল্লাহর ﷺ বিরুদ্ধে যারা লড়েছিল, সেই মুশরিকরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Batar, and Being Seen",
          "bn": "বাতার, আর লোক দেখানো"
        },
        "p": [
          {
            "en": "Two motives are named with two different words and they are not the same disease. Batar is the insolence that comes of ease and plenty, a swagger that faces inward and needs no audience to exist. Ri'a' an-nas faces outward and is nothing without one: the root gives ru'yah, seeing, and this is the word from which riya' comes, the showing off that later writers treat as a sickness of worship. A man can have either without the other, and Quraysh on that march had both.",
            "bn": "দুটি উদ্দেশ্যের জন্য দুটি আলাদা শব্দ এসেছে, আর রোগ দুটিও এক নয়। বাতার হলো সুখ-স্বাচ্ছন্দ্য আর প্রাচুর্য থেকে জন্মানো ঔদ্ধত্য; এ দেমাগের মুখ ভেতরের দিকে, টিকে থাকতে তার কোনো দর্শক লাগে না। রিআউন নাসের মুখ বাইরের দিকে, দর্শক না থাকলে সে কিছুই না। এর ধাতু থেকে আসে রুইয়া, মানে দেখা, আর এ শব্দ থেকেই এসেছে রিয়া, অর্থাৎ লোক দেখানো, যাকে পরের যুগের লেখকরা ইবাদতের রোগ হিসেবে আলোচনা করেন। একজনের মধ্যে একটা থাকতে পারে অন্যটা ছাড়াই, আর সেই যাত্রায় কুরাইশের মধ্যে ছিল দুটোই।"
          },
          {
            "en": "The third motive is put in a different tense from the first, and the shift carries weight. They came out, kharaju, in the perfect: one act, finished. But they go on averting people from the way of Allah, yasuddun, in the imperfect, the form for what continues. The march ended; the blocking did not. And the verse closes on one word about Allah, muhit, encompassing what they do, which says more than watching. As-Sa'di draws the practical point from it: He told you their aims, and warned you against resembling them.",
            "bn": "তৃতীয় উদ্দেশ্যটির কাল প্রথমটির থেকে আলাদা, আর এই বদলের ওজন আছে। তারা বেরিয়েছিল, খারাজূ, অতীত কালে: একবারের কাজ, শেষ হয়ে গেছে। কিন্তু মানুষকে আল্লাহর পথ থেকে তারা আটকেই চলেছে, ইয়াসুদ্দূন, বর্তমান কালে, যে রূপ চলতে থাকা কাজ বোঝায়। যাত্রা শেষ হয়েছিল, আটকানো শেষ হয়নি। আয়াত শেষ হয় আল্লাহর সম্পর্কে একটি শব্দে, মুহীত: তারা যা করে, তিনি তা ঘিরে আছেন। এ কথা শুধু দেখার চেয়ে অনেক বেশি। সা'দী এখান থেকে আমলের কথাটা বের করে আনেন: তিনি তোমাদের তাদের উদ্দেশ্য জানিয়ে দিলেন, আর তাদের মতো হওয়া থেকে সাবধান করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Cups They Were Given",
          "bn": "তাদের হাতে যে পেয়ালা এল"
        },
        "p": [
          {
            "en": "At-Tabari's own summary of the verse is the sharpest statement of it anywhere in the tafsir: this is an instruction given in advance by Allah to those who believe in Him and His Messenger, that they do no deed except for Allah alone, seeking what is with Him, not to be seen by people, as the idolaters did on their march to Badr. He treats the verse as a rule about every deed, and the battle as the case that illustrates it rather than the limit of it.",
            "bn": "গোটা তাফসীরে আয়াতটির সবচেয়ে ধারালো সারকথা তাবারীর নিজের লেখা: এটি আল্লাহর পক্ষ থেকে আগাম নির্দেশ, যারা তাঁর ও তাঁর রাসূলের ﷺ প্রতি ঈমান এনেছে তাদের জন্য। তারা যা-ই করুক, কেবল আল্লাহর জন্য করবে, তাঁর কাছে যা আছে তা পাওয়ার আশায়; লোক দেখানোর জন্য নয়, যেমনটা মুশরিকরা করেছিল বদরের পথে। তাবারীর চোখে আয়াতটি প্রতিটি আমলের নিয়ম, আর যুদ্ধটা সে নিয়ম বোঝানোর একটি উদাহরণ, আয়াতের সীমা নয়।"
          },
          {
            "en": "Then he writes the line that stays with a reader. They had said they would come to Badr and drink wine there and have the singing girls play for them and have the Arabs talk about them; and instead of wine, at-Tabari says, they were given the cups of death to drink. It is his sentence and not a narration, and the contrast is the one the occasion supplies by itself: an itinerary of three nights' entertainment, kept to the letter as far as the place, and nothing of it delivered.",
            "bn": "এরপর তিনি এমন একটি বাক্য লেখেন, যা পাঠকের মনে গেঁথে যায়। তারা বলেছিল, বদরে গিয়ে মদ খাবে, গায়িকারা গান শোনাবে, আর আরবরা তাদের নিয়ে কথা বলবে। তাবারী বলেন, মদের বদলে তাদের পান করানো হলো মৃত্যুর পেয়ালা। এটি তাঁর নিজের বাক্য, কোনো বর্ণনা নয়, আর এ বৈপরীত্য ঘটনাটাই নিজে থেকে সামনে এনে দেয়: তিন রাতের ফুর্তির এক পরিকল্পনা, জায়গা পর্যন্ত সব মিলে গেল অক্ষরে অক্ষরে, অথচ ফুর্তির কিছুই হাতে এল না।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di Turns It Around",
          "bn": "সা'দী কথাটা ঘুরিয়ে দেন"
        },
        "p": [
          {
            "en": "As-Sa'di reads the three motives as one aim with three faces: this is what brought them out of their homes, to seek wantonness and insolence in the land, and so that people might see them and they might boast before them; and the greatest aim of all, he says, was that they came out to turn back from the path of Allah anyone who wanted to walk it. He then gives the reason the verse was addressed to believers at all: He informed you of their aims and warned you against resembling them, for He will punish them for it most severely.",
            "bn": "সা'দীর চোখে তিনটি উদ্দেশ্য আসলে একই লক্ষ্যের তিন চেহারা: এ জিনিসই তাদের ঘর থেকে বের করে এনেছিল, জমিনে দেমাগ আর ঔদ্ধত্যের খোঁজ, আর মানুষ যেন তাদের দেখে আর তারা মানুষের সামনে বড়াই করতে পারে। তিনি বলেন, সবচেয়ে বড় লক্ষ্য ছিল এই যে, আল্লাহর পথে কেউ চলতে চাইলে তাকে সে পথ থেকে ফিরিয়ে দেওয়া। এরপর তিনি বলেন, আয়াতটি মু'মিনদের কেন শোনানো হলো: তিনি তোমাদের তাদের উদ্দেশ্য জানিয়ে দিলেন আর তাদের মতো হওয়া থেকে সাবধান করলেন, কারণ এর জন্য তিনি তাদের কঠিনতম শাস্তি দেবেন।"
          },
          {
            "en": "What he does next is the best thing in his entry, because he does not stop at the prohibition. Let your aim in going out, he writes, be the Face of Allah and the raising of Allah's religion, and the turning of people away from the roads that lead to Allah's anger and His punishment, and the drawing of people to the straight path of Allah that leads to the gardens of bliss. The verb they used for blocking he hands back to the believers pointed the other way: they blocked the road to Allah, you block the road to His wrath.",
            "bn": "এরপর তিনি যা করেন, তাঁর পুরো আলোচনায় সেটাই সবচেয়ে সুন্দর, কারণ তিনি নিষেধে এসে থেমে যান না। তিনি লেখেন, তোমরা যখন বের হবে, তোমাদের লক্ষ্য হোক আল্লাহর সন্তুষ্টি আর তাঁর দীনকে উঁচু করা; মানুষকে সেসব রাস্তা থেকে ফেরানো, যা আল্লাহর গজব আর শাস্তির দিকে নিয়ে যায়; আর মানুষকে আল্লাহর সরল পথে ডেকে আনা, যা নিয়ে যায় নিয়ামতে ভরা জান্নাতে। আটকানোর জন্য তারা যে ক্রিয়াটি কাজে লাগিয়েছিল, সেটাই তিনি উল্টো দিকে ঘুরিয়ে মু'মিনদের হাতে তুলে দেন: তারা আটকেছিল আল্লাহর দিকের রাস্তা, তোমরা আটকাও তাঁর গজবের দিকের রাস্তা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wage He Asked For",
          "bn": "সে যে মজুরি চেয়েছিল"
        },
        "p": [
          {
            "en": "No tafsir consulted for this verse attaches a saying of the Prophet ﷺ to it; what the commentators attach is the account of the march. One sound narration states the verse's principle at the sharpest possible point, and it is offered on that footing rather than as a comment on the verse. Sahih Muslim 1905 preserves, in the report of Sulayman ibn Yasar, the judgement of a man who had fought and been killed, and the sentence spoken to him: you fought that you might be called a brave warrior, and you were called so.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে নবীর ﷺ কোনো বাণী জোড়ে না; মুফাসসিরগণ জোড়েন সেই যাত্রার বিবরণ। তবে একটি সহীহ বর্ণনা আয়াতের নীতিটিকে সবচেয়ে ধারালোভাবে তুলে ধরে, আর সেটি এখানে আনা হচ্ছে সেই হিসেবেই, আয়াতের ব্যাখ্যা হিসেবে নয়। সহীহ মুসলিমের ১৯০৫ নম্বরে সুলাইমান ইবনু ইয়াসারের বর্ণনায় আছে এমন এক লোকের বিচারের কথা, যে লড়াই করে নিহত হয়েছিল, আর তাকে শোনানো কথাটি: তুমি লড়েছিলে যাতে লোকে তোমাকে বীর বলে, আর লোকে তা বলেছেও।"
          },
          {
            "en": "The force of it is that the wage was paid. He wanted to be called brave and he was called brave, and the account closed there. Set beside our verse it explains what the three named motives actually purchase. Quraysh wanted the Arabs to talk about them, and the Arabs did talk about them; the talk was the whole of the return. A motive is not only a moral matter in this reading, it is a decision about which currency you are being paid in.",
            "bn": "কথাটার জোর এখানেই: মজুরি দিয়ে দেওয়া হয়েছে। সে চেয়েছিল লোকে তাকে বীর বলুক, লোকে বীর বলেছেও, আর হিসাব ওখানেই চুকে গেছে। আমাদের আয়াতের পাশে রাখলে বোঝা যায়, ওই তিন উদ্দেশ্য দিয়ে আসলে কী কেনা হয়। কুরাইশ চেয়েছিল আরবরা তাদের নিয়ে কথা বলুক, আরবরা বলেছেও; ওই কথাটুকুই ছিল তাদের পুরো প্রাপ্তি। এভাবে দেখলে নিয়ত কেবল নৈতিকতার ব্যাপার নয়; নিয়ত দিয়েই আপনি ঠিক করেন, কোন মুদ্রায় আপনার মজুরি পাবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses About the Audience",
          "bn": "দর্শক নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "2:264 uses this verse's own phrase of a different act entirely: do not invalidate your charities by reminders and injury, as one does who spends his wealth to be seen by the people. 4:38 names the same spender among those the passage is warning about, and adds that Satan is his companion. Between them they move the disease off the battlefield and into an ordinary donation, which is where most readers will actually meet it.",
            "bn": "২:২৬৪ আয়াত এ আয়াতের কথাটাই ব্যবহার করে সম্পূর্ণ আরেকটি কাজের বেলায়: খোঁটা দিয়ে আর কষ্ট দিয়ে নিজেদের দান নষ্ট করো না, সেই লোকের মতো, যে মানুষকে দেখানোর জন্য সম্পদ খরচ করে। ৪:৩৮ আয়াতেও এমন খরচকারীর কথা আছে, ওই অংশটি যাদের ব্যাপারে সাবধান করছে তাদের দলে; আর আয়াতটি যোগ করে, শয়তান তার সঙ্গী। এ দুই আয়াত মিলে রোগটাকে যুদ্ধের মাঠ থেকে তুলে এনে বসিয়ে দেয় সাধারণ দান-সদকার ভেতরে, আর বেশিরভাগ পাঠক আসলে সেখানেই এর মুখোমুখি হবেন।"
          },
          {
            "en": "107:6 is the shortest of them, three words in the Arabic about those who make a show of their deeds, and it is said of people who pray. 18:110 gives the standard in the positive form: whoever hopes for the meeting with his Lord, let him do righteous work and associate no one in the worship of his Lord. And 8:48, the next verse, shows the other half of the mechanism, Satan making their deeds look good to them until the two armies came in sight and he turned on his heels.",
            "bn": "এদের মধ্যে সবচেয়ে ছোট ১০৭:৬ আয়াত, আরবিতে মাত্র তিনটি শব্দ, তাদের নিয়ে যারা লোক দেখিয়ে আমল করে; আর কথাটা বলা হয়েছে নামাজ পড়া লোকদের সম্পর্কে। ১৮:১১০ আয়াত মাপকাঠিটা দেয় ইতিবাচক রূপে: যে তার রবের সাক্ষাৎ পাওয়ার আশা রাখে, সে যেন নেক আমল করে আর তার রবের ইবাদতে কাউকে শরীক না করে। আর পরের আয়াত ৮:৪৮ দেখায় ব্যাপারটার বাকি অর্ধেক: শয়তান তাদের কাজ তাদের চোখে সুন্দর করে দেখিয়েছিল, কিন্তু দুই বাহিনী যখন মুখোমুখি হলো, সে পিঠ ফিরিয়ে পালাল।"
          }
        ]
      },
      {
        "h": {
          "en": "Checking Why You Set Out",
          "bn": "কেন বেরিয়েছেন তা যাচাই"
        },
        "p": [
          {
            "en": "The verse is unusually practical because it examines a decision that has already been made well. Quraysh marched in good order, funded, provisioned, and brave enough to refuse a safe way home. Nothing in their conduct on the road was the problem. The problem was answered before they left the house, in a conversation about what people would say. Any work a reader is currently busy with can be tested the same way, by asking what would survive if the audience for it were removed.",
            "bn": "আয়াতটি খুবই কাজের, কারণ এটি এমন এক সিদ্ধান্ত যাচাই করে, যা নেওয়া হয়েছিল ভালোভাবেই। কুরাইশ বেরিয়েছিল গোছানো দল নিয়ে, টাকা-পয়সা আর রসদ নিয়ে, আর এত সাহস নিয়ে যে নিরাপদে ঘরে ফেরার সুযোগও তারা ফিরিয়ে দিয়েছিল। পথে তাদের আচরণে কোনো সমস্যা ছিল না। সমস্যার ফয়সালা হয়ে গিয়েছিল ঘর থেকে বেরোনোর আগেই, লোকে কী বলবে সেই আলোচনায়। পাঠক এখন যে কাজে ব্যস্ত, সেটাও একইভাবে যাচাই করা যায়: দর্শক সরিয়ে নিলে কাজটার কতটুকু টিকে থাকবে?"
          },
          {
            "en": "As-Sa'di's inversion gives the second test, and it is the harder one. He asks the believer to go out in order to keep people off the roads that end in Allah's anger and to draw them onto the one that does not. That turns a private question about sincerity into a public one about effect. A man may set out with a clean intention and still stand, by what he says and funds and repeats, squarely in somebody's way. The verse names that blocking as a motive; it can also be an outcome nobody chose.",
            "bn": "দ্বিতীয় যাচাইটা আসে সা'দীর ওই উল্টে দেওয়া থেকে, আর সেটা আরও কঠিন। তিনি মু'মিনকে বলেন বের হতে, যাতে মানুষকে আল্লাহর গজবে গিয়ে শেষ হওয়া রাস্তাগুলো থেকে আটকানো যায়, আর টেনে আনা যায় সেই রাস্তায়, যার শেষ সেখানে নয়। এতে ইখলাস নিয়ে ব্যক্তিগত প্রশ্নটা বদলে যায় ফলাফল নিয়ে প্রকাশ্য প্রশ্নে। কেউ পরিষ্কার নিয়তে বের হয়েও, যা বলে, যাতে টাকা দেয়, যা বারবার বলে বেড়ায়, তা দিয়ে ঠিক কারও পথের মাঝখানে দাঁড়িয়ে থাকতে পারে। আয়াত এই আটকানোকে উদ্দেশ্য হিসেবে উল্লেখ করে; কিন্তু এটা এমন পরিণামও হতে পারে, যা কেউ বেছে নেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for a Sound Heart",
          "bn": "বিশুদ্ধ অন্তরের জন্য দোয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication, and the prayer that belongs opposite it is Ibrahim's (AS) in 26:87-89: do not disgrace me on the Day they are resurrected, the Day when neither wealth nor children will benefit anyone, but only one who comes to Allah with a sound heart. It is the exact counterweight. Quraysh went out for what people would say on a day that ended in a well; the prayer asks about standing on a day when nothing carried and nothing spent will count, except the state of the heart that brought it.",
            "bn": "আয়াতে কোনো দোয়া নেই। এর জবাবে যে দোয়াটি মানায়, তা ইবরাহীমের (আঃ), ২৬:৮৭-৮৯ আয়াতে: যেদিন সবাইকে আবার জীবিত করা হবে, সেদিন আমাকে লাঞ্ছিত করবেন না; যেদিন সম্পদ আর সন্তান কারও কোনো কাজে আসবে না, কেবল সে ছাড়া, যে আল্লাহর কাছে আসবে বিশুদ্ধ অন্তর নিয়ে। ঠিক এটাই আয়াতের পাল্টা ওজন। কুরাইশ বেরিয়েছিল লোকে কী বলবে তার জন্য, আর সেদিনটা শেষ হয়েছিল একটা কুয়ায়। আর এ দোয়া সেই দিনে দাঁড়ানোর কথা বলে, যেদিন বয়ে আনা বা খরচ করা কোনো কিছুই গোনা হবে না; গোনা হবে কেবল যে অন্তর তা নিয়ে এসেছে, তার অবস্থা।"
          },
          {
            "en": "A sentence in this verse's own words can be added and claimed as nothing more: O Allah, do not let me go out for anything except Your Face, and do not let me stand in the way of anyone walking toward You; You encompass what I do. That is assembled from the verse and from 26:89, and it is not a Sunnah du'a. The Quranic wording above is the safer thing to memorise and the shorter one to say.",
            "bn": "এ আয়াতের শব্দ দিয়ে একটা বাক্য যোগ করা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, আপনার সন্তুষ্টি ছাড়া আর কিছুর জন্য আমাকে বেরোতে দেবেন না, আর আপনার দিকে হেঁটে আসা কারও পথে আমাকে দাঁড়াতে দেবেন না; আমি যা করি তা আপনি ঘিরে আছেন। এটি আয়াত আর ২৬:৮৯ আয়াতের শব্দ জুড়ে বানানো, সুন্নাহর দোয়া নয়। উপরের কুরআনী শব্দগুলোই মুখস্থ করার জন্য বেশি নিরাপদ আর বলার জন্য ছোট।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Own Reasons",
          "bn": "নিজের কারণ নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Why did I actually take on the thing I am busiest with right now, and would I keep it if nobody ever heard that it was mine? The verse names swagger and being seen as two separate diseases: which of them is mine, and which one do I keep mistaking for the other? And is there a place where I am standing in somebody's way toward something good, without having admitted to myself that this is what I am doing?",
            "bn": "এখন যে কাজটা নিয়ে সবচেয়ে ব্যস্ত, সেটা আমি আসলে কেন ধরেছিলাম, আর কেউ কোনোদিন জানবে না যে কাজটা আমার, তাহলেও কি সেটা রাখতাম? আয়াত দেমাগ আর লোক দেখানোকে দুটি আলাদা রোগের নাম দেয়: এ দুটোর কোনটা আমার, আর কোনটাকে আমি বারবার অন্যটা ভেবে ভুল করি? আর এমন কোনো জায়গা আছে কি যেখানে আমি কারও ভালো কিছুর পথে দাঁড়িয়ে আছি, অথচ নিজের কাছেই স্বীকার করিনি যে কাজটা আমি এটাই করছি?"
          },
          {
            "en": "Two more, and they are the ones worth writing down. If my motive is encompassed rather than merely seen from outside, which of today's tasks would I do differently before the day is out? And what good work have I quietly dropped because doing it without credit meant that it would never be counted to my name by anybody at all except Allah?",
            "bn": "আরও দুটি, আর লিখে রাখার মতো এ দুটিই। আমার নিয়ত যদি কেবল বাইরে থেকে দেখা না হয়, বরং আল্লাহ তা ঘিরে রাখেন, তবে আজকের কোন কাজটা দিন শেষ হওয়ার আগেই আমি অন্যভাবে করতাম? আর কোন ভালো কাজ আমি চুপচাপ ছেড়ে দিয়েছি শুধু এ কারণে যে নাম ছাড়া করলে আল্লাহ ছাড়া আর কেউ সেটা আমার নামে গুনবে না?"
          }
        ]
      }
    ]
  },
  "8:55": {
    "sections": [
      {
        "h": {
          "en": "The Same Opening, Twice",
          "bn": "একই শুরু, দুবার"
        },
        "p": [
          {
            "en": "Al-Anfal is Madinan, and the verses before this one are about how nations lose what they were given. 8:52 and 8:54 both invoke the pattern of Pharaoh's people and of those before them, and between them 8:53 states the principle: Allah does not change a favour He has bestowed upon a people until they change what is within themselves. Our verse then gives a ranking, 8:56 identifies who is meant by their conduct, and 8:57 turns to a ruling of war that belongs to its own verse rather than to this one.",
            "bn": "সূরা আনফাল মাদানী। এ আয়াতের আগের আয়াতগুলোর বিষয়, জাতিরা কীভাবে নিজেদের পাওয়া জিনিস হারায়। ৮:৫২ আর ৮:৫৪ দুটো আয়াতই ফেরাউনের লোকদের আর তাদের আগের লোকদের দৃষ্টান্ত টেনে আনে, আর মাঝখানে ৮:৫৩ আয়াত নীতিটা বলে দেয়: আল্লাহ কোনো জাতিকে যে অনুগ্রহ দেন, তা বদলান না, যতক্ষণ না তারা নিজেদের ভেতরের অবস্থা বদলায়। এরপর আমাদের আয়াত জানায়, আল্লাহর কাছে সবচেয়ে নিচে কারা; ৮:৫৬ আয়াত আচরণ দিয়ে চিনিয়ে দেয় কাদের কথা হচ্ছে; আর ৮:৫৭ আয়াত যায় যুদ্ধের এক বিধানের দিকে, যা ওই আয়াতেরই আলোচ্য, এটার নয়।"
          },
          {
            "en": "Something unusual has happened inside one surah. At 8:22 the same sentence opens and ends differently: indeed the worst of moving creatures in the sight of Allah are the deaf, the dumb, who do not reason. The Arabic opening of the two verses is word for word the same as far as in the sight of Allah, and then one names faculties that have stopped working while the other names a state and its continuation. Al-Qurtubi makes the link himself when he comes to our verse, writing that its counterpart is the deaf, the dumb, who do not reason.",
            "bn": "একই সূরার ভেতরে একটা অসাধারণ ব্যাপার ঘটেছে। ৮:২২ আয়াত একই বাক্য দিয়ে শুরু হয়, কিন্তু শেষ হয় অন্যভাবে: নিশ্চয়ই আল্লাহর কাছে চলাচলকারী সৃষ্টির মধ্যে নিকৃষ্টতম তারা, যারা বধির, বোবা, যারা বোঝে না। দুই আয়াতের আরবি শুরুটা আল্লাহর কাছে কথাটা পর্যন্ত হুবহু এক। তারপর একটি আয়াত বলে কোন কোন শক্তি অচল হয়ে গেছে, আর অন্যটি বলে একটি অবস্থার কথা আর সে অবস্থা চলতেই থাকার কথা। কুরতুবী আমাদের আয়াতে এসে নিজেই যোগসূত্রটা টেনে দেন; তিনি লেখেন, এর জোড়া হলো সেই বধির, বোবা, যারা বোঝে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word for What Moves",
          "bn": "যা চলে তার শব্দ"
        },
        "p": [
          {
            "en": "Dawabb is the plural of dabbah, from d-b-b, and it does not mean animal in the narrow sense. At-Tabari glosses the phrase as the worst of what crawls upon the earth, and al-Qurtubi as those who crawl upon the face of the earth. The category the verse reaches for is everything that moves, which is why the ranking can be made at all: these men are being placed inside the widest class they belong to rather than being compared with their own kind.",
            "bn": "দাওয়াব্ব হলো দাব্বার বহুবচন, ধাতু দ-ব-ব; এর মানে কেবল সংকীর্ণ অর্থে পশু নয়। তাবারী কথাটির ব্যাখ্যা করেন, জমিনের উপর যা কিছু চলে, তার মধ্যে নিকৃষ্টতম; আর কুরতুবী বলেন, যারা জমিনের বুকে চলাফেরা করে। আয়াত হাত বাড়ায় সবচেয়ে বড় শ্রেণিটার দিকে, যা কিছু চলে তার সবকিছুর দিকে; এ কারণেই এমন অবস্থান নির্ধারণ সম্ভব হয়। এ লোকদের নিজেদের জাতের সঙ্গে তুলনা করা হচ্ছে না; তাদের বসানো হচ্ছে তারা যে সবচেয়ে বড় শ্রেণিতে পড়ে, তার ভেতরে।"
          },
          {
            "en": "Two more words carry weight. In the sight of Allah, inda Allah, makes the ranking a report of His judgement rather than an appraisal anyone else is invited to make; al-Qurtubi glosses it as being in Allah's knowledge and His ruling. And the closing clause is imperfect in the Arabic, the form that holds a present state together with its continuing, which is why the app renders it as a future while at-Tabari glosses it in the present: they do not believe the messengers of Allah, nor acknowledge His revelation.",
            "bn": "আরও দুটি শব্দের ওজন আছে। ইনদাল্লাহ, অর্থাৎ আল্লাহর কাছে: এ কথায় অবস্থান নির্ধারণটা হয়ে যায় তাঁর রায়ের খবর; এটা এমন কোনো মূল্যায়ন নয়, যা অন্য কাউকে করতে ডাকা হচ্ছে। কুরতুবী এর ব্যাখ্যা করেন, আল্লাহর ইলম আর তাঁর হুকুমে। আর শেষ অংশটি আরবিতে মুদারি রূপে, যে রূপ বর্তমান অবস্থা আর তার চলতে থাকাকে একসঙ্গে ধরে। এ কারণেই অ্যাপ এর অনুবাদ করে ভবিষ্যৎ কালে, আর তাবারী ব্যাখ্যা করেন বর্তমান কালে: তারা আল্লাহর রাসূলদের বিশ্বাস করে না, তাঁর ওহিও স্বীকার করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Identified by a Habit",
          "bn": "অভ্যাস দিয়ে চেনানো"
        },
        "p": [
          {
            "en": "The verse does not stand alone, and the commentators do not read it alone. 8:56 continues the sentence: the ones with whom you made a treaty, then they break their pledge every time, and they do not fear Allah. So the identification is by conduct that repeats, not by lineage, not by a name, and not by a label a reader could pick up and apply. Ibn Kathir reads the two verses as one description and then moves on to the ruling in 8:57, which is a matter for that verse.",
            "bn": "আয়াতটি একা দাঁড়িয়ে নেই, মুফাসসিরগণও এটিকে আলাদা করে পড়েন না। ৮:৫৬ আয়াত বাক্যটিকে টেনে নিয়ে যায়: যাদের সঙ্গে তুমি চুক্তি করেছ, তারপর তারা প্রতিবারই নিজেদের চুক্তি ভাঙে, আর তারা আল্লাহকে ভয় করে না। অর্থাৎ চেনানো হচ্ছে বারবার ঘটা আচরণ দিয়ে; বংশ দিয়ে নয়, নাম দিয়ে নয়, এমন কোনো তকমা দিয়েও নয়, যা পাঠক তুলে নিয়ে কারও গায়ে লাগিয়ে দিতে পারেন। ইবনু কাসীর দুই আয়াতকে একটাই বর্ণনা হিসেবে পড়েন, তারপর এগিয়ে যান ৮:৫৭ আয়াতের বিধানের দিকে; সেটা ওই আয়াতেরই আলোচ্য।"
          },
          {
            "en": "That is worth stating plainly because the verse is the kind that gets borrowed. Read with its neighbour it describes a specific conduct in a specific hostility, in a surah reviewing a battle that had already been fought; and the ranking in it is expressly said to be in the sight of Allah. It does not hand any reader a category to place a living community in, and nothing in the commentators consulted here does that either. What it does hand over is a mirror for the habit it names.",
            "bn": "কথাটা খোলাখুলি বলা দরকার, কারণ এ ধরনের আয়াত প্রায়ই নিজের জায়গা থেকে তুলে অন্যখানে লাগানো হয়। পাশের আয়াতের সঙ্গে পড়লে বোঝা যায়, এটি এক নির্দিষ্ট শত্রুতার ভেতরে এক নির্দিষ্ট আচরণের কথা বলছে, আর সূরাটি তখন এমন এক যুদ্ধের পর্যালোচনা করছে যা আগেই হয়ে গেছে। তা ছাড়া আয়াত নিজেই স্পষ্ট বলে দিয়েছে, এ অবস্থান আল্লাহর কাছে। কোনো জীবিত জনগোষ্ঠীকে বসিয়ে দেওয়ার মতো কোনো খোপ এটি পাঠকের হাতে তুলে দেয় না, আর এখানে যেসব মুফাসসিরের লেখা দেখা হয়েছে, তাঁদের কেউও তা করেননি। এটি পাঠকের হাতে যা দেয়, তা হলো একটা আয়না, আয়াত যে অভ্যাসের কথা বলে তার সামনে ধরার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di's Three Traits",
          "bn": "সা'দীর সেই তিন স্বভাব"
        },
        "p": [
          {
            "en": "As-Sa'di reads our verse and the next as one portrait and counts the traits in it: three, he says, gathered in the same people. Disbelief. The absence of faith. And treachery, in the sense that they hold to no covenant they have made and no word they have said. It is worth noticing that only the third of the three is about other human beings, and that it is the one the next verse spends its whole length on.",
            "bn": "সা'দী আমাদের আয়াত আর পরের আয়াতকে একটাই ছবি হিসেবে পড়েন, আর সে ছবিতে স্বভাবগুলো গুনে দেখান। তিনি বলেন, তিনটি স্বভাব একই লোকদের মধ্যে জড়ো হয়েছে। কুফর। ঈমান না থাকা। আর খিয়ানত, অর্থাৎ নিজেদের করা কোনো চুক্তি বা নিজেদের দেওয়া কোনো কথায় তারা টিকে থাকে না। লক্ষ করার মতো ব্যাপার: তিনটির মধ্যে কেবল তৃতীয়টিই অন্য মানুষের সঙ্গে জড়িত, আর পরের আয়াতটি পুরোটাই সেটা নিয়ে।"
          },
          {
            "en": "Then he supplies the comparison the verse leaves implicit. They are worse than donkeys and dogs and the rest, he writes, and he gives his reason rather than leaving the insult bare: because good is absent from them and evil is expected of them. The verse itself names no animal. As-Sa'di's addition is a gloss on the category, and the logic of it is about what can be hoped for from a creature, which is why an animal that does its own work comes out ahead of a man who does not.",
            "bn": "আয়াত যে তুলনাটা মুখে না বলে রেখে দেয়, এরপর তিনি সেটা বলে দেন। তিনি লেখেন, তারা গাধা, কুকুর আর বাকি সব প্রাণীর চেয়েও খারাপ; আর কথাটা নিছক গালি হিসেবে ফেলে না রেখে তিনি কারণও দেন: কারণ তাদের মধ্যে ভালো কিছু নেই, আর তাদের কাছ থেকে মন্দই আশা করা যায়। আয়াত নিজে কোনো পশুর নাম নেয় না। সা'দীর এ সংযোজন শ্রেণিটির একটা ব্যাখ্যা, আর তার যুক্তি হলো, কোনো সৃষ্টির কাছ থেকে কী আশা করা যায়। সে কারণেই যে পশু নিজের কাজটা করে যায়, সে এগিয়ে থাকে সেই মানুষের চেয়ে, যে নিজের কাজ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sunnah on a Broken Pledge",
          "bn": "কথা ভাঙা নিয়ে সুন্নাহ"
        },
        "p": [
          {
            "en": "No tafsir consulted for this verse attaches a saying of the Prophet ﷺ to it; the entries are short and stay with the wording. One sound narration names the same cluster of conduct and is brought on that footing alone. Sahih al-Bukhari 33 has from Abu Hurayrah (RA) that the signs are three: when he speaks he lies, when he promises he breaks it, and when he is trusted he betrays the trust. The third and the second are exactly what 8:56 describes as happening every time a treaty is made.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে নবীর ﷺ কোনো বাণী জোড়ে না; আলোচনাগুলো ছোট, শব্দের কাছাকাছিই থাকে। একটি সহীহ বর্ণনা ঠিক এই আচরণগুলোরই নাম নেয়, আর সেটি এখানে আনা হচ্ছে কেবল সেই হিসেবেই। সহীহ বুখারীর ৩৩ নম্বরে আবূ হুরাইরা (রাঃ) থেকে আছে, আলামত তিনটি: কথা বললে মিথ্যা বলে, ওয়াদা করলে ভাঙে, আর আমানত রাখা হলে খিয়ানত করে। এর তৃতীয় আর দ্বিতীয়টিই ঠিক সেই জিনিস, যা ৮:৫৬ আয়াত বলছে প্রতিবার চুক্তি করার পর ঘটে।"
          },
          {
            "en": "The narration is quoted here for the conduct it lists and not as a verdict to be pronounced on anybody, which is how the commentators handle the verse too. A reader who finds one of those three habits in himself has been given something to repair. A reader who finds it in a neighbour has been given nothing at all, because the ranking this verse makes is stated to be in the sight of Allah, and the knowledge that would be needed to apply it is not on offer.",
            "bn": "বর্ণনাটি এখানে আনা হয়েছে এতে যে আচরণগুলোর কথা আছে সেগুলোর জন্য, কারও উপর রায় ঘোষণা করার জন্য নয়; মুফাসসিরগণও আয়াতটিকে এভাবেই দেখেন। যে পাঠক এ তিন অভ্যাসের একটি নিজের মধ্যে পান, তিনি শোধরানোর মতো কিছু পেলেন। আর যে পাঠক সেটা প্রতিবেশীর মধ্যে খুঁজে পান, তিনি কিছুই পেলেন না। কারণ আয়াত নিজেই বলে দিয়েছে, এ অবস্থান আল্লাহর কাছে; আর তা কারও উপর খাটাতে যে ইলম লাগে, তা আমাদের হাতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Rank Creatures",
          "bn": "সৃষ্টির অবস্থান নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "98:6 makes a ranking of the same shape with a different word: those are the worst of created beings, sharr al-bariyyah, not sharr ad-dawabb. The two words are not interchangeable even though the app renders both with worst, and the reason 98:6 matters here is 98:7, which completes the pair: those who believed and did righteous deeds, those are the best of created beings. Our verse gives only the lower half of a comparison whose upper half is written elsewhere.",
            "bn": "৯৮:৬ আয়াতও একই ধাঁচে অবস্থান নির্ধারণ করে, তবে অন্য শব্দে: তারাই সৃষ্টির মধ্যে নিকৃষ্ট, শাররুল বারিয়্যাহ; শাররুদ দাওয়াব্ব নয়। অ্যাপ দুটোরই অনুবাদ করে নিকৃষ্ট দিয়ে, তবু শব্দ দুটি এক নয়। আর এখানে ৯৮:৬ আয়াতের গুরুত্ব আসলে ৯৮:৭ আয়াতের কারণে, যা জোড়াটা পূর্ণ করে: যারা ঈমান এনেছে আর নেক আমল করেছে, তারাই সৃষ্টির মধ্যে উত্তম। আমাদের আয়াত একটি তুলনার কেবল নিচের অর্ধেকটা দেয়; উপরের অর্ধেকটা লেখা আছে অন্য জায়গায়।"
          },
          {
            "en": "7:179 is the fullest statement of the theme: hearts that do not understand, eyes that do not see, ears that do not hear, and then the comparison, those are like livestock, rather they are more astray. 25:44 puts it as a question, whether most of them hear or reason, and answers it the same way. 2:171 gives the image behind 8:22, one who shouts at what hears nothing but a call. Read together they show that the Quran's comparison is never about worth of creation but about faculties left unused.",
            "bn": "এ বিষয়ের সবচেয়ে পূর্ণ বক্তব্য ৭:১৭৯ আয়াতে: তাদের অন্তর আছে, কিন্তু বোঝে না; চোখ আছে, কিন্তু দেখে না; কান আছে, কিন্তু শোনে না। তারপর আসে তুলনাটা: তারা পশুর মতো, বরং তার চেয়েও বেশি পথহারা। ২৫:৪৪ আয়াত কথাটা প্রশ্নের আকারে রাখে, তাদের বেশিরভাগ কি শোনে বা বোঝে, আর জবাবও দেয় একইভাবে। ২:১৭১ আয়াতে আছে ৮:২২ আয়াতের পেছনের ছবিটা: এমন লোক, যে এমন কিছুকে হাঁক দেয় যা ডাকের আওয়াজ ছাড়া আর কিছুই শোনে না। একসঙ্গে পড়লে বোঝা যায়, কুরআনের এ তুলনা কখনো সৃষ্টি হিসেবে কার মর্যাদা কত তা নিয়ে নয়; তা কাজে না লাগানো শক্তিগুলো নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Change Begins",
          "bn": "বদলটা শুরু হয় যেখানে"
        },
        "p": [
          {
            "en": "The practical use of a verse like this is not to find someone who fits it. It is the hinge two verses earlier: Allah does not change a favour He gave a people until they change what is within themselves. That makes the direction of travel the thing to watch, and this verse describes the far end of a road rather than an accident. The habit 8:56 names, breaking a pledge every time one is made, is not exotic. It is the ordinary shape of a man who means it each time and keeps not doing it.",
            "bn": "এমন আয়াত কাজে লাগানোর মানে এই নয় যে এর সঙ্গে মিলে যায় এমন কাউকে খুঁজে বের করা। আসল কাজের কথাটা দুই আয়াত আগে, যার উপর পুরো অংশটা ঘোরে: আল্লাহ কোনো জাতিকে দেওয়া অনুগ্রহ বদলান না, যতক্ষণ না তারা নিজেদের ভেতরের অবস্থা বদলায়। কাজেই দেখার বিষয় হলো, চলার মুখটা কোন দিকে। এ আয়াত বর্ণনা করে একটা রাস্তার শেষ মাথা, হঠাৎ ঘটে যাওয়া কোনো দুর্ঘটনা নয়। ৮:৫৬ আয়াত যে অভ্যাসের কথা বলে, প্রতিবার চুক্তি করে প্রতিবার ভাঙা, তা বিরল কিছু নয়। এ হলো এমন মানুষের সাধারণ চেহারা, যে প্রতিবার মন থেকেই কথা দেয়, আর প্রতিবারই রাখে না।"
          },
          {
            "en": "There is also a test in the wording that costs something to apply. The verse says they will not believe, a refusal rather than an incapacity, which means the door is being described as shut from the inside. Everyone has some matter they have quietly decided to go on refusing, and the honest work of this verse is to name that one thing rather than to survey the neighbourhood. 8:53 says the change begins within; that is the only place a reader has any authority at all.",
            "bn": "শব্দের ভেতরে আরেকটি যাচাইও আছে, যা কাজে লাগাতে গেলে কিছু খরচ হয়। আয়াত বলে তারা ঈমান আনবে না, অর্থাৎ অস্বীকার, অক্ষমতা নয়। মানে দরজাটা বন্ধ বলা হচ্ছে ভেতর থেকেই। প্রত্যেকের এমন কিছু বিষয় থাকে যা সে চুপচাপ ঠিক করে রেখেছে অস্বীকার করেই যাবে, আর এ আয়াতের সৎ কাজটা হলো ওই একটা জিনিসের নাম নেওয়া, পাড়া জরিপ করা নয়। ৮:৫৩ আয়াত বলে, বদলটা শুরু হয় ভেতরে; আর পাঠকের কোনো অধিকার যদি কোথাও থাকে, তা কেবল ওই এক জায়গাতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Not to Be Counted There",
          "bn": "ওই দলে না পড়ার দোয়া"
        },
        "p": [
          {
            "en": "The verse carries no supplication; it is a verdict being reported. The prayer that belongs opposite it is in 66:8, where a call to sincere repentance closes with the words of those whose light goes before them: our Lord, perfect for us our light and forgive us. Against a verse about faculties that have stopped and a door shut from inside, asking for light to be completed rather than merely granted is the request that fits.",
            "bn": "আয়াতে কোনো দোয়া নেই; এটি একটি রায়ের খবর। এর জবাবে যে দোয়াটি মানায়, তা ৬৬:৮ আয়াতে। সেখানে খাঁটি তওবার ডাক শেষ হয় তাদের কথায়, যাদের নূর তাদের সামনে সামনে চলে: হে আমাদের রব, আমাদের নূর পূর্ণ করে দিন আর আমাদের মাফ করুন। আয়াতটি বলে অচল হয়ে যাওয়া শক্তির কথা, ভেতর থেকে বন্ধ করা দরজার কথা। তার সামনে এ চাওয়াটাই মানায়: নূর কেবল দেওয়া হোক তা নয়, পূর্ণ করা হোক।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, do not let me be of those who will not believe, keep my hearing and my sight and my heart at work, and make me one who keeps a pledge he has given. It is assembled from this verse, from 8:56 and from 7:179, and it is not a Sunnah du'a. The Quranic wording above is the safer of the two to carry.",
            "bn": "এ আয়াতের নিজের শব্দে একটা বাক্য যোগ করা যায়, তার বেশি কিছু দাবি না করে: হে আল্লাহ, আমাকে তাদের দলে রাখবেন না যারা ঈমান আনবে না; আমার কান, চোখ আর অন্তরকে সচল রাখুন; আর আমাকে এমন বানান, যে দেওয়া কথা রাখে। এটি এ আয়াত, ৮:৫৬ আর ৭:১৭৯ আয়াতের শব্দ জুড়ে বানানো, সুন্নাহর দোয়া নয়। দুটোর মধ্যে উপরের কুরআনী শব্দগুলোই সঙ্গে রাখার জন্য বেশি নিরাপদ।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Own Refusals",
          "bn": "নিজের অস্বীকার নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "The measure in this verse is stated to be His and not mine, so where have I been handing out its verdict on people it was never given to me to weigh? The next verse identifies by a habit rather than a label, so what habit of mine would identify me if somebody used that same method on me? And is there a promise I have now broken more than once with the same person, telling myself each time that this time the circumstances were different?",
            "bn": "এ আয়াতে মাপকাঠি বলা হয়েছে তাঁর, আমার নয়; তাহলে এ আয়াতের রায়টা আমি কোথায় কোথায় এমন লোকদের উপর চালিয়ে দিয়েছি, যাদের ওজন করার ভার আমাকে কখনো দেওয়াই হয়নি? পরের আয়াত চেনায় তকমা দিয়ে নয়, অভ্যাস দিয়ে; তাহলে কেউ যদি আমার উপর ওই একই পদ্ধতি চালায়, আমার কোন অভ্যাসটা আমাকে চিনিয়ে দিত? আর একই মানুষের কাছে দেওয়া কথা কি আমি এখন একবারের বেশি ভেঙেছি, আর প্রতিবারই নিজেকে বলেছি এবারের পরিস্থিতিটা আলাদা?"
          },
          {
            "en": "Two that are heavier. The verse describes people who will not believe rather than people who cannot, so what is the one matter I have privately decided to go on refusing, whatever comes? And if a favour is only withdrawn after people change what is within themselves, what is changing inside me at the moment that I would rather not say out loud?",
            "bn": "আরও দুটি, একটু ভারী। আয়াত বর্ণনা করে এমন লোকদের যারা ঈমান আনবে না, এমন লোকদের নয় যারা পারে না; তাহলে এমন কোন একটি বিষয় আছে যা আমি মনে মনে ঠিক করে রেখেছি, যা-ই আসুক, অস্বীকার করেই যাব? আর অনুগ্রহ যদি কেবল তখনই সরে যায় যখন মানুষ নিজের ভেতরের জিনিস বদলে ফেলে, তবে এ মুহূর্তে আমার ভেতরে কী বদলাচ্ছে, যেটা মুখে বলতে আমি চাই না?"
          }
        ]
      }
    ]
  },
  "8:58": {
    "sections": [
      {
        "h": {
          "en": "A Rule for the Next Time",
          "bn": "পরের বারের জন্য নিয়ম"
        },
        "p": [
          {
            "en": "Al-Anfal is Madinan, and by this point the surah has moved from reviewing a battle to legislating. 8:56 described people who break their pledge every time one is made, 8:57 gave a ruling for war, and our verse turns to a case that has not happened yet: a pact still standing, and a fear that it is about to be broken. 8:59 and 8:60 continue forward, with the warning that no one escapes and the command to prepare, so the verse sits inside a stretch of instructions rather than a story.",
            "bn": "সূরা আনফাল মাদানী, আর এ জায়গায় এসে সূরাটি যুদ্ধের পর্যালোচনা থেকে সরে গিয়ে বিধান দেওয়ায় ঢুকে পড়েছে। ৮:৫৬ আয়াত বর্ণনা করেছে সেই লোকদের যারা প্রতিবার চুক্তি করে প্রতিবারই ভাঙে, ৮:৫৭ আয়াত দিয়েছে যুদ্ধের একটি বিধান, আর আমাদের আয়াত ফেরে এমন এক অবস্থার দিকে যা এখনো ঘটেনি: চুক্তি এখনো টিকে আছে, আর আশঙ্কা এই যে সেটা ভাঙতে যাচ্ছে। ৮:৫৯ আর ৮:৬০ আয়াত সামনে এগোয়, কেউ পালাতে পারবে না সেই হুঁশিয়ারি আর প্রস্তুতি নেওয়ার হুকুম নিয়ে। অর্থাৎ আয়াতটি বসে আছে নির্দেশের এক ধারার ভেতরে, কোনো কাহিনির ভেতরে নয়।"
          },
          {
            "en": "There is a genuine disagreement about whether the verse looks back or forward. Al-Qurtubi reports that it came down about Banu Qurayza and Banu an-Nadir, and notes that at-Tabari relates that from Mujahid. Ibn Atiyyah reads the wording against that: what appears from the words of the Quran is that the matter of Banu Qurayza ended at 8:57, and that Allah then began, in this verse, His command about what to do in future with one whose treachery is feared. His reason is exact: Qurayza were not in the category of those whose treachery is feared, because their treachery was open and well known.",
            "bn": "আয়াতটি পিছনে তাকায় নাকি সামনে, তা নিয়ে আসল মতভেদ আছে। কুরতুবী জানান, এটি নেমেছে বানূ কুরাইযা আর বানূ নাযীর সম্পর্কে, আর লিখে রাখেন যে তাবারী এ কথা মুজাহিদ থেকে বর্ণনা করেন। ইবনু আতিয়্যা শব্দ ধরে এর বিপরীত পড়েন: কুরআনের শব্দ থেকে যা বোঝা যায় তা হলো বানূ কুরাইযার বিষয়টি ৮:৫৭ আয়াতেই শেষ হয়েছে, আর এরপর আল্লাহ এ আয়াতে শুরু করেছেন তাঁর সেই হুকুম, ভবিষ্যতে যার কাছ থেকে খিয়ানতের আশঙ্কা হয় তার সঙ্গে কী করতে হবে। তাঁর কারণটা নিখুঁত: কুরাইযা তাদের দলে পড়ত না যাদের খিয়ানতের আশঙ্কা করা হয়, কারণ তাদের খিয়ানত ছিল খোলা আর সবার জানা।"
          }
        ]
      },
      {
        "h": {
          "en": "To Throw It Back",
          "bn": "ছুঁড়ে ফিরিয়ে দেওয়া"
        },
        "p": [
          {
            "en": "Nabdh, al-Qurtubi says, is throwing and rejecting: not a negotiation and not a lapse, but an act. What is thrown is the pact itself, and as-Sa'di supplies the sentence that goes with the act, that you inform them there is no covenant between you and them. The verb is addressed to one person, and at-Tabari treats the addressee as the one who holds the authority to make war at all, saying the duty falls on the imam of the Muslims when the signs appear.",
            "bn": "কুরতুবী বলেন, নাবয মানে ছুঁড়ে ফেলা আর প্রত্যাখ্যান করা। এটা দরকষাকষি নয়, আপনা-আপনি ফুরিয়ে যাওয়াও নয়; এটা একটা কাজ। যা ছুঁড়ে ফেলা হয়, তা চুক্তিটাই; আর এ কাজের সঙ্গে যে কথাটা বলতে হয়, তা দেন সা'দী: তাদের জানিয়ে দেবে যে তোমার আর তাদের মধ্যে আর কোনো চুক্তি নেই। ক্রিয়াটি একজনকে বলা, আর তাবারী ধরে নেন, সেই একজন হলেন তিনি, যাঁর হাতে যুদ্ধের সিদ্ধান্ত নেওয়ার অধিকার আছে। তিনি বলেন, আলামত দেখা দিলে এ দায়িত্ব বর্তায় মুসলিমদের ইমামের উপর।"
          },
          {
            "en": "The two words that decide the verse are ala sawa. At-Tabari glosses them: until your knowledge and their knowledge are equal that each party is at war with the other and not at peace. He adds the practical consequence, that they may take up their weapons, and you are clear of treachery. Al-Azhari puts it as a prohibition first: do not fall upon them ahead of the breach, until you cast to them that you have broken the agreement, so that they are equal in knowing it; then act. An-Nahhas calls the verse's brevity beside the abundance of its meanings one of the miraculous things in the Quran.",
            "bn": "পুরো আয়াতের ফয়সালা করে দুটি শব্দ: আলা সাওয়া। তাবারী এর ব্যাখ্যা দেন: যতক্ষণ না এ ব্যাপারে তোমার জানা আর তাদের জানা সমান হয় যে দুই পক্ষ এখন পরস্পরের সঙ্গে যুদ্ধে আছে, শান্তিতে নেই। এর বাস্তব ফলটাও তিনি যোগ করেন: তারা যেন নিজেদের অস্ত্র তুলে নিতে পারে, আর তুমি খিয়ানতের দায় থেকে মুক্ত থাক। আযহারী কথাটা প্রথমে নিষেধ হিসেবে বলেন: চুক্তি ভাঙার আগেই তাদের উপর ঝাঁপিয়ে পড়ো না; আগে তাদের দিকে ছুঁড়ে দাও যে তুমি চুক্তি ভেঙে দিয়েছ, যাতে এ খবর জানায় দুই পক্ষ সমান হয়; তারপর যা করার কর। নাহহাস বলেন, এত সংক্ষিপ্ত একটি আয়াতে এত অর্থের প্রাচুর্য কুরআনের মুজিযাগুলোর একটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear That Is Not a Guess",
          "bn": "যে আশঙ্কা নিছক অনুমান নয়"
        },
        "p": [
          {
            "en": "Both at-Tabari and al-Qurtubi raise the same objection before a reader can: how can a covenant be undone on fear, when fear is supposition and not certainty? At-Tabari answers that the verse does not mean a suspicion at all. Its sense is that when the signs of treachery have appeared from your enemy and you fear they will fall upon you, then you throw back the keys of peace and announce war. The trigger is evidence that has surfaced, not a feeling that has been entertained.",
            "bn": "পাঠক প্রশ্নটা তোলার আগেই তাবারী আর কুরতুবী দুজনেই একই আপত্তি তোলেন: শুধু আশঙ্কার ভিত্তিতে চুক্তি ভেঙে দেওয়া যায় কীভাবে, আশঙ্কা তো অনুমান, নিশ্চিত জ্ঞান নয়? তাবারী জবাব দেন, আয়াত মোটেই সন্দেহের কথা বলছে না। এর অর্থ হলো: শত্রুর দিক থেকে খিয়ানতের আলামত যখন দেখা দিয়েছে, আর তুমি ভয় পাচ্ছ তারা তোমার উপর ঝাঁপিয়ে পড়বে, তখন তুমি শান্তির চাবি ফিরিয়ে দাও আর যুদ্ধের ঘোষণা দাও। পদক্ষেপের ভিত্তি হলো সামনে চলে আসা প্রমাণ, মনে পুষে রাখা কোনো অনুভূতি নয়।"
          },
          {
            "en": "Al-Qurtubi hands the same question to Ibn al-Arabi, who gives two answers. The first is linguistic: fear sometimes carries the sense of certainty, as hoping sometimes carries the sense of knowing, and he cites 71:13 for it, where the app renders the clause by its sense rather than by the verb. The second is legal: once the effects of treachery appear and its evidence is established, throwing the pact back becomes obligatory, lest holding on to it lead to ruin. He then notes the other end of the scale, that where treachery is already certain there is no need to throw the pact back at all.",
            "bn": "কুরতুবী একই প্রশ্ন তুলে দেন ইবনুল আরাবীর হাতে, আর তিনি দুটি জবাব দেন। প্রথমটি ভাষার: আশঙ্কা কখনো নিশ্চিত জ্ঞানের অর্থ বহন করে, যেমন আশা করা কখনো জানার অর্থ বহন করে; আর এর জন্য তিনি ৭১:১৩ আয়াত দেখান, যেখানে অ্যাপ অংশটি আনে ক্রিয়াটি ধরে নয়, অর্থ ধরে। দ্বিতীয়টি বিধানের: খিয়ানতের ছাপ দেখা দিয়ে তার দলিল প্রতিষ্ঠিত হয়ে গেলে চুক্তি ফিরিয়ে দেওয়া ওয়াজিব হয়ে যায়, যাতে সেটা ধরে বসে থাকা ধ্বংসে না নিয়ে যায়। এরপর তিনি অন্য প্রান্তটাও বলেন, যেখানে খিয়ানত ইতিমধ্যেই নিশ্চিত, সেখানে চুক্তি ফিরিয়ে দেওয়ার কোনো দরকারই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Do Not Tighten the Knot",
          "bn": "গিঁট শক্ত করা চলবে না"
        },
        "p": [
          {
            "en": "Here the commentators do attach a narration, and Ibn Kathir brings it with its scene. Mu'awiyah was leading an army in Roman territory while a treaty was still in force, and he wanted to move closer so that he could invade the moment it expired. An old man riding alongside called out, Allahu akbar, Allahu akbar, keep faith and do not betray. He then reported the words of the Messenger of Allah ﷺ: whoever has a pact with a people, let him not loosen a knot of it nor tie it tighter until its term has run out, or throw it back to them on equal terms.",
            "bn": "এখানে মুফাসসিরগণ সত্যিই একটি বর্ণনা জুড়ে দেন, আর ইবনু কাসীর সেটি আনেন ঘটনাসহ। মুআবিয়া রোমান এলাকায় এক বাহিনীর নেতৃত্বে ছিলেন, আর তখনো চুক্তি বহাল; তিনি চাইলেন আরও কাছে গিয়ে অবস্থান নিতে, যাতে চুক্তির সময় শেষ হওয়ার মুহূর্তেই আক্রমণ করতে পারেন। পাশে বাহনে চড়া এক বৃদ্ধ ডেকে উঠলেন, আল্লাহু আকবার, আল্লাহু আকবার, চুক্তি রক্ষা কর, খিয়ানত করো না। তারপর তিনি শোনালেন রাসূলুল্লাহর ﷺ কথা: যার সঙ্গে কোনো জাতির চুক্তি আছে, সে যেন সেটার কোনো গিঁট আলগাও না করে, আঁটোও না করে, যতক্ষণ না সেটার সময় শেষ হয়, অথবা সমান সমান অবস্থায় সেটা তাদের দিকে ছুঁড়ে দেয়।"
          },
          {
            "en": "Ibn Kathir names the speaker as the Companion Amr ibn Abasah (RA) and reports that Mu'awiyah withdrew when he heard it. Jami at-Tirmidhi 1580 preserves the same hadith through Sulaym ibn Amir, and at-Tirmidhi's own grading of it is hasan sahih. The phrase Ibn Kathir draws out of it before quoting is worth keeping: this even includes treachery against the disbelievers. The prohibition is not a courtesy extended to allies; it is owed to whoever holds a pact.",
            "bn": "ইবনু কাসীর জানান, যিনি কথাটা বলেছিলেন তিনি সাহাবী আমর ইবনু আবাসা (রাঃ), আর তা শুনে মুআবিয়া ফিরে গিয়েছিলেন। জামি আত-তিরমিযীর ১৫৮০ নম্বরে একই হাদিস আছে সুলাইম ইবনু আমিরের সূত্রে, আর তিরমিযী নিজে এর মান বলেছেন হাসান সহীহ। উদ্ধৃতির আগে ইবনু কাসীর এ থেকে যে কথাটা বের করে আনেন, তা মনে রাখার মতো: কাফিরদের সঙ্গে খিয়ানতও এর মধ্যে পড়ে। নিষেধটা কেবল মিত্রদের প্রতি সৌজন্য নয়; যার সঙ্গেই চুক্তি আছে, তার প্রতিই এটা পাওনা।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di Reads Both Ends",
          "bn": "সা'দী দুই প্রান্তই পড়েন"
        },
        "p": [
          {
            "en": "As-Sa'di states the prohibition inside the permission, and it is the sharpest line on the verse: it is not lawful for you to betray them, nor to strive in anything the covenant forbade, until you inform them of that. So the window between deciding and announcing is closed. A man who has resolved to end a pact is still bound by every clause of it until the other side has been told, which is the only way the words on equal terms can mean anything.",
            "bn": "সা'দী অনুমতির ভেতরেই নিষেধটা বসিয়ে দেন, আর এ আয়াত নিয়ে ওটাই সবচেয়ে ধারালো কথা: তাদের সঙ্গে খিয়ানত করা তোমার জন্য হালাল নয়, চুক্তিতে যা নিষেধ ছিল তার কোনো কিছুতে হাত দেওয়াও হালাল নয়, যতক্ষণ না তুমি তাদের সেটা জানিয়ে দাও। অর্থাৎ সিদ্ধান্ত নেওয়া আর ঘোষণা দেওয়ার মাঝখানে কোনো ফাঁক রাখা হয়নি। কেউ চুক্তি শেষ করার সিদ্ধান্ত নিয়ে ফেললেও, অন্য পক্ষকে জানানোর আগ পর্যন্ত চুক্তির প্রতিটি শর্তে সে বাঁধা। কেবল তাহলেই সমান সমান কথাটার কোনো মানে থাকে।"
          },
          {
            "en": "He then reads the verse from both ends. Where treachery is not merely feared but verified, he says, there is no need to throw the pact back, because the man did not fear it, he knew it, and because on equal terms has nothing left to accomplish when the breach is known to everyone. And the converse: where no treachery is feared, because nothing has appeared to indicate it, throwing the pact back is not permitted at all, and fulfilling it to the end of its term is obligatory. The verse turns out to protect the pact more often than it dissolves it.",
            "bn": "এরপর তিনি আয়াতটি দুই প্রান্ত থেকেই পড়েন। যেখানে খিয়ানত কেবল আশঙ্কা নয়, প্রমাণিত, সেখানে চুক্তি ফিরিয়ে দেওয়ার দরকার নেই, তিনি বলেন, কারণ লোকটি সেটা আশঙ্কা করেনি, জেনে গেছে; আর ভাঙাটা যখন সবারই জানা, তখন সমান সমান কথাটার আর কিছু করার থাকে না। আর উল্টো দিকটা: যেখানে খিয়ানতের কোনো আশঙ্কা নেই, কারণ তা বোঝানোর মতো কিছুই দেখা যায়নি, সেখানে চুক্তি ফিরিয়ে দেওয়া একেবারেই জায়েজ নয়, আর সময় শেষ হওয়া পর্যন্ত সেটা পূর্ণ করা ওয়াজিব। দেখা যাচ্ছে, আয়াতটি চুক্তি ভাঙার চেয়ে চুক্তি রক্ষা করে বেশিবার।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses About Keeping a Pact",
          "bn": "চুক্তি রক্ষা নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "5:1 opens its surah with the shortest form of the command, fulfil the contracts. 17:34 adds the reason a believer cannot treat one as private business: fulfil every commitment, for the commitment is ever that about which one will be questioned. 16:91 closes the gap this verse is worried about, telling those who have taken a covenant of Allah not to break oaths after confirming them, while they have made Allah a witness over themselves.",
            "bn": "৫:১ আয়াত নিজের সূরার শুরুতেই হুকুমটির সবচেয়ে ছোট রূপ রাখে, চুক্তিগুলো পূর্ণ কর। ১৭:৩৪ আয়াত যোগ করে সেই কারণ, যার জন্য মু'মিন চুক্তিকে নিজের একলার ব্যাপার ভাবতে পারে না: প্রতিটি ওয়াদা পূর্ণ কর, কারণ ওয়াদা নিয়ে অবশ্যই জিজ্ঞেস করা হবে। ১৬:৯১ আয়াত বন্ধ করে দেয় সেই ফাঁকটা, যা নিয়ে আমাদের আয়াত চিন্তিত; সেখানে আল্লাহর অঙ্গীকার নেওয়া লোকদের বলা হচ্ছে, পাকা করার পর কসম ভেঙে ফেলো না, যখন তোমরা আল্লাহকেই নিজেদের উপর সাক্ষী রেখেছ।"
          },
          {
            "en": "9:4 is the closest of them in subject, because it handles the same situation from the other side: those of the polytheists who had not been deficient toward you in anything nor supported anyone against you, complete for them their treaty to its term. Read with our verse the pair covers both cases a state can be in. Where nothing has appeared, the pact runs to its end; where signs have appeared, it is ended openly and on the record. Neither case leaves room for a quiet advantage.",
            "bn": "বিষয়ের দিক থেকে এদের মধ্যে সবচেয়ে কাছের ৯:৪ আয়াত, কারণ ওটি একই অবস্থাকে সামলায় অন্য দিক থেকে: মুশরিকদের মধ্যে যারা তোমাদের প্রতি কোনো ত্রুটি করেনি আর তোমাদের বিরুদ্ধে কাউকে সাহায্যও করেনি, তাদের চুক্তি তাদের জন্য সময় শেষ হওয়া পর্যন্ত পূর্ণ কর। আমাদের আয়াতের সঙ্গে পড়লে এ জোড়াটি দুটো অবস্থাই ঢেকে দেয়। যেখানে কিছুই দেখা যায়নি, সেখানে চুক্তি চলে শেষ পর্যন্ত; যেখানে আলামত দেখা গেছে, সেখানে সেটা শেষ হয় খোলাখুলি আর জানিয়ে। কোনো অবস্থাতেই চুপচাপ সুবিধা নেওয়ার জায়গা থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Ruling This Is",
          "bn": "এ বিধান কার"
        },
        "p": [
          {
            "en": "One boundary has to be drawn before the verse is taken home. At-Tabari reads it as an instruction to the one who has authority to make war, and says in so many words that the duty falls upon the imam of the Muslims when such signs appear from a people who have a truce. That is a matter of state, decided by those who carry that responsibility, and this article makes no application of it to any present situation or to anyone's private judgement about a community.",
            "bn": "আয়াতটি নিজের জীবনে টেনে নেওয়ার আগে একটা সীমারেখা টানা দরকার। তাবারী এটিকে পড়েন যুদ্ধের সিদ্ধান্ত নেওয়ার অধিকার যাঁর হাতে, তাঁর প্রতি নির্দেশ হিসেবে; আর স্পষ্ট ভাষায় বলেন, সন্ধিতে থাকা কোনো জাতির কাছ থেকে এমন আলামত দেখা দিলে এ দায়িত্ব বর্তায় মুসলিমদের ইমামের উপর। এটা রাষ্ট্রের বিষয়; যাঁদের কাঁধে সে দায়িত্ব, তাঁরাই এর ফয়সালা করেন। এ লেখা এটিকে বর্তমানের কোনো পরিস্থিতিতে প্রয়োগ করছে না, কোনো জনগোষ্ঠী নিয়ে কারও ব্যক্তিগত বিচারের ভিত্তিও বানাচ্ছে না।"
          },
          {
            "en": "What does transfer is the ethic the ruling is built on, and it transfers exactly because the ruling is so demanding at the level where lives are at stake. If a state may not gain a single step of advantage from a pact it has decided to end, a man may not either. The ordinary version of this verse is the agreement someone has stopped honouring inwardly while the other party still plans around it: a partner, an employer, a landlord, a spouse. The verse does not forbid ending it. It forbids ending it in private.",
            "bn": "তবে বিধানটি যে নীতির উপর দাঁড়িয়ে আছে, সেটা ঠিকই আমাদের জীবনে আসে; আর আসে ঠিক এ কারণেই যে, যেখানে জীবন-মরণের প্রশ্ন, সেখানেও বিধানটা এত কড়া। কোনো রাষ্ট্র যদি শেষ করার সিদ্ধান্ত নেওয়া চুক্তি থেকে এক কদমও বাড়তি সুবিধা নিতে না পারে, তবে কোনো ব্যক্তিও পারে না। এ আয়াতের রোজকার চেহারা হলো এমন চুক্তি, যা কেউ মনে মনে আর মানছে না, অথচ অন্য পক্ষ এখনো সেটার ভরসায় পরিকল্পনা করছে: ব্যবসার অংশীদার, মালিক, বাড়িওয়ালা, কিংবা জীবনসঙ্গী। আয়াত সেটা শেষ করতে নিষেধ করে না। নিষেধ করে গোপনে শেষ করতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Kept Honest",
          "bn": "সৎ থাকার তাওফীক চাওয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication; it gives a reason, that Allah does not love the treacherous, and as-Sa'di sharpens it into a rule of practice: there must be a clear act that clears you of treachery. The standard the Quran sets next to it is 17:34, that a commitment is a thing one will be questioned about, which turns every arrangement into something with a witness. A believer who wants a prayer for this is asking to be kept on the side the verse says Allah loves.",
            "bn": "আয়াতে কোনো দোয়া নেই; আছে একটি কারণ: আল্লাহ খিয়ানতকারীদের পছন্দ করেন না। সা'দী সেটাকে আরও শাণিত করে আমলের নিয়ম বানান: এমন একটি স্পষ্ট কাজ থাকতেই হবে, যা তোমাকে খিয়ানতের দায় থেকে মুক্ত করে। এর পাশে কুরআন যে মাপকাঠি রাখে তা ১৭:৩৪ আয়াত: ওয়াদা এমন জিনিস, যা নিয়ে জিজ্ঞেস করা হবে। ফলে প্রতিটি লেনদেন আর বোঝাপড়ার একজন সাক্ষী থাকে। এ নিয়ে যে মু'মিন দোয়া করতে চান, তিনি আসলে চাইছেন, আয়াত যে দিকটাকে আল্লাহর প্রিয় বলে, তাঁকে যেন সেই দিকেই রাখা হয়।"
          },
          {
            "en": "A sentence in the verse's own vocabulary can be said and claimed as no more than that: O Allah, do not make me one of the treacherous, and if I must end something, let me end it out in the open where the other side can see it as clearly as I do. That is assembled from this verse and from as-Sa'di's gloss on it. It is not a Sunnah du'a, and the hadith quoted above is a command rather than a prayer, so it should be carried as a rule and not recited as one.",
            "bn": "আয়াতের নিজের শব্দে একটা বাক্য বলা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, আমাকে খিয়ানতকারীদের একজন বানাবেন না; আর কিছু যদি শেষ করতেই হয়, তবে সেটা খোলা জায়গায় শেষ করার তাওফীক দিন, যেখানে অন্য পক্ষ সেটা আমার মতোই পরিষ্কার দেখতে পায়। এটি এ আয়াত আর এর উপর সা'দীর ব্যাখ্যা জুড়ে বানানো। এটি সুন্নাহর দোয়া নয়, আর উপরে তোলা হাদিসটি দোয়া নয়, হুকুম; কাজেই সেটাকে নিয়ম হিসেবে বহন করতে হবে, দোয়া হিসেবে পড়তে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Agreements",
          "bn": "নিজের চুক্তি নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Is there an agreement I have privately stopped honouring without telling the other side that I have stopped? The verse levels knowledge before anything is done, so where am I acting on information the other party does not know I have? And when I decide to end something, do I announce it, or do I let it lapse in silence and call the silence kindness?",
            "bn": "এমন কোনো চুক্তি কি আছে, যা আমি মনে মনে আর মানছি না, অথচ অন্য পক্ষকে জানাইনি? আয়াত কিছু করার আগেই দুই পক্ষের জানাকে সমান করে দেয়; তাহলে কোথায় আমি এমন খবরের ভিত্তিতে চলছি, যা আমার কাছে আছে বলে অন্য পক্ষ জানেই না? আর কিছু শেষ করার সিদ্ধান্ত নিলে আমি কি তা জানিয়ে দিই, নাকি নীরবে ফুরিয়ে যেতে দিই আর সেই নীরবতাকে ভদ্রতা বলে চালাই?"
          },
          {
            "en": "Two that cost more. The reason the verse gives is that Allah does not love the treacherous: which of my current arrangements would look treacherous if the other side could see all of it at once? And if I suspect somebody is about to betray me, is my first move to protect myself quietly, or to say plainly what I fear and where the two of us now stand?",
            "bn": "আরও দুটি, যেগুলোর দাম আরও বেশি। আয়াত কারণ হিসেবে বলে, আল্লাহ খিয়ানতকারীদের পছন্দ করেন না: অন্য পক্ষ যদি একসঙ্গে পুরোটা দেখতে পেত, আমার এখনকার কোন বন্দোবস্তটা খিয়ানতের মতো দেখাত? আর কেউ আমার সঙ্গে বিশ্বাসঘাতকতা করতে যাচ্ছে বলে সন্দেহ হলে আমার প্রথম পদক্ষেপ কী হয়: চুপচাপ নিজেকে বাঁচানো, নাকি সোজাসুজি বলে দেওয়া, আমি কী আশঙ্কা করছি আর আমরা দুজন এখন কোথায় দাঁড়িয়ে?"
          }
        ]
      }
    ]
  },
  "8:67": {
    "sections": [
      {
        "h": {
          "en": "Where the Reproach Falls",
          "bn": "ভর্ৎসনাটা পড়ে কোথায়"
        },
        "p": [
          {
            "en": "Al-Anfal is Madinan and this is the end of its review of Badr. 8:65 sets a ratio for steadfast men against many, 8:66 lowers it because Allah knows there is weakness among them, and then our verse turns to what was done with the men who had been taken alive. 8:68 says a decree from Allah had already gone ahead of them, 8:69 declares what they took lawful and good, and 8:70 has the Prophet ﷺ address the captives themselves with an offer. The passage moves from reproach to permission to an open door.",
            "bn": "সূরা আনফাল মাদানী, আর বদরের পর্যালোচনা এখানেই শেষ হচ্ছে। ৮:৬৫ আয়াত বহু শত্রুর বিপরীতে অবিচল যোদ্ধাদের জন্য একটা অনুপাত ঠিক করে দেয়, ৮:৬৬ আয়াত সেটা কমিয়ে আনে, কারণ আল্লাহ জানেন তাদের মধ্যে দুর্বলতা আছে। এরপর আমাদের আয়াত আসে জীবিত বন্দী করা লোকদের প্রসঙ্গে: তাদের নিয়ে কী করা হলো। ৮:৬৮ আয়াত বলে, আল্লাহর একটি পূর্বনির্ধারিত সিদ্ধান্ত আগেই হয়ে ছিল; ৮:৬৯ আয়াত তারা যা নিয়েছে তা হালাল ও পবিত্র ঘোষণা করে; আর ৮:৭০ আয়াতে নবী ﷺ সরাসরি বন্দীদের উদ্দেশে একটি প্রস্তাব দেন। অংশটি ভর্ৎসনা থেকে যায় অনুমতিতে, আর সেখান থেকে খোলা দরজায়।"
          },
          {
            "en": "As-Sa'di states plainly whose verse it is: this is a reproach from Allah to His Messenger ﷺ and to the believers on the day of Badr, when they took the idolaters captive and kept them alive for the sake of the ransom. That is how the commentators read it and it is how this article reads it, with the adab the subject requires. The people being corrected here are the Prophet ﷺ and the Companions who had just fought beside him, and the correction was published in the Book they were carrying.",
            "bn": "আয়াতটি কার, সা'দী তা সোজাসুজি বলে দেন: এটি আল্লাহর পক্ষ থেকে তাঁর রাসূলের ﷺ প্রতি আর বদরের দিনে মু'মিনদের প্রতি এক ভর্ৎসনা, যখন তাঁরা মুশরিকদের বন্দী করলেন আর মুক্তিপণের জন্য তাদের জীবিত রাখলেন। মুফাসসিরগণ এভাবেই পড়েন, আর এ লেখাও এভাবেই পড়ে, বিষয়টি যে আদব দাবি করে তা নিয়েই। এখানে যাঁদের শুধরে দেওয়া হচ্ছে তাঁরা নবী ﷺ আর সেই সাহাবীগণ যাঁরা সদ্য তাঁর পাশে লড়েছেন, আর শুধরে দেওয়ার কথাটা প্রকাশ করা হলো সেই কিতাবেই, যা তাঁরা বহন করছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Asra, and to Subdue",
          "bn": "আসরা, আর পুরোপুরি পরাভূত করা"
        },
        "p": [
          {
            "en": "At-Tabari begins with the plain sense of the noun: al-asr in the speech of the Arabs is confinement, and a man held is ma'sur, a prisoner. He renders the opening clause as meaning that it is not for a prophet to hold back an idolater he has overpowered, for ransom or for pardon. The verb in the clause that follows is yuthkhin, from a root for thickness and weight, and at-Tabari glosses it as going to the utmost in the matter until they are subdued by force.",
            "bn": "তাবারী শুরু করেন শব্দটির সোজা অর্থ দিয়ে: আরবদের ভাষায় আসর মানে আটকে রাখা, আর আটক লোককে বলা হয় মাসূর, বন্দী। শুরুর অংশটির অর্থ তিনি করেন এভাবে: কোনো নবীর জন্য এটা সংগত নয় যে তিনি কাবু করা কোনো মুশরিককে আটকে রাখবেন, মুক্তিপণের জন্য হোক বা ক্ষমা করার জন্য। এর পরের অংশে যে ক্রিয়া, ইউসখিন, তার ধাতুর মূল অর্থ ঘনত্ব আর ভার; তাবারী এর ব্যাখ্যা করেন, ব্যাপারটিতে শেষ সীমা পর্যন্ত যাওয়া, যতক্ষণ না তারা শক্তির জোরে পুরোপুরি দমন হয়।"
          },
          {
            "en": "The word for what they wanted is the sharpest thing in the verse. Arad ad-dunya, which at-Tabari glosses as whatever of it presents itself to a man of wealth and goods. The root is about something turning up rather than being sought, so the noun names a gain that happens to be lying there. Set against it is al-akhirah, named without qualification. The verse does not contrast a small profit with a big one. It contrasts a thing that appears and passes with the thing that remains.",
            "bn": "তারা যা চেয়েছিল, তার জন্য আসা শব্দটিই আয়াতের সবচেয়ে ধারালো জিনিস: আরাদুদ দুনিয়া। তাবারী এর ব্যাখ্যা করেন, দুনিয়ার যে ধনসম্পদ আর সামগ্রী মানুষের সামনে এসে হাজির হয়। ধাতুটির মূল অর্থ খুঁজে পাওয়া নয়, সামনে এসে পড়া; কাজেই শব্দটি এমন লাভের নাম, যা এমনিই পথে পড়ে ছিল। এর বিপরীতে রাখা হয়েছে আল-আখিরা, কোনো বিশেষণ ছাড়াই। আয়াত ছোট লাভের সঙ্গে বড় লাভের তুলনা করছে না। তুলনাটা দুই রকম জিনিসের: যা এসে চলে যায়, আর যা থেকে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day They Were Consulted",
          "bn": "যেদিন পরামর্শ চাওয়া হলো"
        },
        "p": [
          {
            "en": "The narration behind the verse is in Sahih Muslim 1763, which preserves it from Umar ibn al-Khattab (RA) himself. The Prophet ﷺ consulted them about the captives. Abu Bakr (RA) said: they are our kith and kin; I think you should release them after getting from them a ransom. Umar (RA) said: I am of the opinion that you should hand them over to us so that we may cut off their heads. The ransom was taken, and afterwards the Prophet ﷺ was found weeping, saying, I weep for what has happened to your companions for taking ransom.",
            "bn": "আয়াতের পেছনের বর্ণনাটি আছে সহীহ মুসলিমের ১৭৬৩ নম্বরে, আর সেটি এসেছে খোদ উমার ইবনুল খাত্তাব (রাঃ) থেকে। নবী ﷺ বন্দীদের ব্যাপারে তাঁদের পরামর্শ চাইলেন। আবূ বাকর (রাঃ) বললেন: এরা তো আমাদের আত্মীয়স্বজন; আমার মত, আপনি তাদের কাছ থেকে মুক্তিপণ নিয়ে তাদের ছেড়ে দিন। উমার (রাঃ) বললেন: আমার মত, আপনি তাদের আমাদের হাতে তুলে দিন, আমরা তাদের গর্দান উড়িয়ে দিই। মুক্তিপণ নেওয়া হলো। পরে দেখা গেল নবী ﷺ কাঁদছেন; তিনি বলছিলেন, মুক্তিপণ নেওয়ার কারণে তোমার সঙ্গীদের উপর যা এসেছে, তার জন্য আমি কাঁদছি।"
          },
          {
            "en": "Ibn Kathir carries a second telling through Imam Ahmad from Anas (RA), and its wording is different, so the two are kept apart here rather than merged. In that one the Prophet ﷺ puts the question to the people twice, saying that Allah has made them prevail, and adding, only yesterday they were your brothers. Both counsels were given when counsel had been asked for, by two men whose sincerity is not in question, and it was the Book that settled the matter afterwards. That is the whole shape of the episode and it should not be told as a quarrel.",
            "bn": "ইবনু কাসীর দ্বিতীয় একটি বর্ণনা আনেন ইমাম আহমাদের সূত্রে আনাস (রাঃ) থেকে, আর তার শব্দ আলাদা; কাজেই এখানে দুটিকে মিলিয়ে না দিয়ে আলাদাই রাখা হচ্ছে। ওই বর্ণনায় নবী ﷺ প্রশ্নটি লোকদের সামনে দুবার রাখেন, বলেন, আল্লাহ তোমাদের তাদের উপর ক্ষমতা দিয়েছেন, আর যোগ করেন, গতকালই তো তারা তোমাদের ভাই ছিল। দুটি পরামর্শই দেওয়া হয়েছিল তখন, যখন পরামর্শ চাওয়া হয়েছিল, আর দিয়েছিলেন এমন দুজন যাঁদের নিষ্ঠা নিয়ে প্রশ্নই ওঠে না; আর বিষয়টার ফয়সালা পরে করে দিয়েছে কিতাবই। ঘটনাটির গোটা চেহারা এটাই, আর এটাকে কোনো ঝগড়ার গল্প হিসেবে বলা চলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Actually Blamed",
          "bn": "দোষ আসলে কোথায়"
        },
        "p": [
          {
            "en": "At-Tabari states the correction without softening it: Allah was informing His prophet ﷺ that killing the idolaters he had taken at Badr would have been closer to what was correct than taking the ransom and releasing them. As-Sa'di explains why in terms of the situation rather than of cruelty: as long as such an enemy still has power and force, the fitting thing is that they not be taken captive at all; once they have been subdued and their power has collapsed, there is no harm in captives being taken and kept alive.",
            "bn": "তাবারী সংশোধনটা নরম না করেই বলেন: আল্লাহ তাঁর নবীকে ﷺ জানাচ্ছিলেন, বদরে যে মুশরিকদের তিনি বন্দী করেছিলেন, মুক্তিপণ নিয়ে তাদের ছেড়ে দেওয়ার চেয়ে হত্যা করাই সঠিকের বেশি কাছাকাছি ছিল। সা'দী কারণটা বোঝান নিষ্ঠুরতা দিয়ে নয়, পরিস্থিতি দিয়ে: এমন শত্রুর হাতে যতদিন শক্তি আর দাপট আছে, ততদিন তাদের বন্দী না করাই সংগত; আর তারা একবার দমন হয়ে গেলে, তাদের শক্তি ভেঙে পড়লে, বন্দী করে জীবিত রাখায় কোনো দোষ নেই।"
          },
          {
            "en": "So the blame is about timing and about what was being weighed, not about mercy as such. The verse then shifts person: you want, in the plural, which at-Tabari says is addressed to the believers among the Companions of the Messenger ﷺ. And as-Sa'di reads the object of their wanting exactly: not a benefit returning to your religion. Nothing in either commentator makes the ransom a sin of greed; what they make it is a price accepted while the work it belonged to was still unfinished.",
            "bn": "অর্থাৎ দোষটা সময় নিয়ে, আর কী কী ওজন করা হচ্ছিল তা নিয়ে; দয়া নিয়ে নয়। এরপর আয়াতের সম্বোধন বদলে যায়: তোমরা চাও, বহুবচনে। তাবারী বলেন, এ কথা বলা হচ্ছে রাসূলের ﷺ সাহাবীদের মধ্যে মু'মিনদের উদ্দেশে। আর তাঁদের চাওয়ার বিষয়টা সা'দী নিখুঁতভাবে ধরেন: এমন লাভ নয়, যা তোমাদের দীনের কাজে ফিরে আসে। দুই মুফাসসিরের কেউই মুক্তিপণকে লোভের গুনাহ বলেন না। তাঁদের চোখে এটা এমন এক দাম, যা নেওয়া হয়েছিল যে কাজের জন্য, সে কাজ শেষ হওয়ার আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Wants in One Verse",
          "bn": "এক আয়াতে দুই চাওয়া"
        },
        "p": [
          {
            "en": "As-Sa'di reads the second half as a statement about what Allah wants for them, which is a different thing from what He wants from them. He wants the Hereafter for you, he writes, by honouring His religion and helping His friends and making their word high above others, so He commands you with what leads to that. The reproach is therefore not a withdrawal of favour. It is a correction issued by the One who wanted the larger thing on their behalf while they were settling for the smaller.",
            "bn": "সা'দীর পড়ায় দ্বিতীয় অর্ধেকটা বলে আল্লাহ তাঁদের জন্য কী চান; আর তাঁদের কাছে তিনি কী চান, সেটা আলাদা কথা। তিনি লেখেন, তিনি তোমাদের জন্য আখিরাত চান: তাঁর দীনকে মর্যাদা দিয়ে, তাঁর বন্ধুদের সাহায্য করে, আর তাঁদের কথাকে সবার উপরে তুলে ধরে; তাই তিনি তোমাদের সেই কাজেরই আদেশ দেন, যা ওই দিকে নিয়ে যায়। কাজেই এ ভর্ৎসনা অনুগ্রহ তুলে নেওয়া নয়। এ সংশোধন এসেছে তাঁর কাছ থেকে, যিনি তাঁদের জন্য বড় জিনিসটাই চাইছিলেন, যখন তাঁরা ছোটটা নিয়েই রাজি হয়ে যাচ্ছিলেন।"
          },
          {
            "en": "The closing names carry as-Sa'di's last point. Allah is Aziz, perfect in might, and had He wished to take victory from the disbelievers without any fighting at all He would have done it; but He is Hakim, and He tests some of you by means of others. At-Tabari reads the same name as an assurance to them: if you want the Hereafter, no enemy will overcome you, because Allah is not subdued nor overcome. The verse closes, that is, by removing the fear that acting on the correction would cost them anything.",
            "bn": "শেষের নামগুলো বহন করে সা'দীর শেষ কথাটা। আল্লাহ আযীয, ক্ষমতায় পরিপূর্ণ, আর তিনি চাইলে কোনো যুদ্ধ ছাড়াই কাফিরদের থেকে জয় নিয়ে নিতে পারতেন; কিন্তু তিনি হাকীম, আর তিনি তোমাদের কাউকে কারও দ্বারা পরীক্ষা করেন। তাবারী একই নামটি পড়েন তাঁদের জন্য এক আশ্বাস হিসেবে: তোমরা যদি আখিরাত চাও, কোনো শত্রু তোমাদের উপর জয়ী হবে না, কারণ আল্লাহ পরাভূত হন না, পরাজিতও হন না। অর্থাৎ আয়াত শেষ হয় সেই ভয়টা সরিয়ে দিয়ে, যে সংশোধনটা মেনে চললে তাঁদের কিছু খোয়াতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Came After This",
          "bn": "এরপর যা এল"
        },
        "p": [
          {
            "en": "The verse did not stay the last word on captives, and at-Tabari preserves the report that says so. From Ibn Abbas (RA), through Ali and Mu'awiyah: that was on the day of Badr, when the Muslims were few; and when they became many and their authority grew strong, Allah sent down afterwards, concerning captives, either a favour afterwards or ransom, which is 47:4. So the choice the verse withheld at Badr was given later, and the restriction belonged to a condition rather than to all time.",
            "bn": "বন্দীদের ব্যাপারে এ আয়াতই শেষ কথা হয়ে থাকেনি, আর তাবারী সেই বর্ণনাটি রক্ষা করেন যা এ কথাই বলে। ইবনু আব্বাস (রাঃ) থেকে, আলী আর মুআবিয়ার সূত্রে: ওটা ছিল বদরের দিন, যখন মুসলিমরা সংখ্যায় কম ছিলেন; আর যখন তাঁরা সংখ্যায় বাড়লেন আর তাঁদের ক্ষমতা মজবুত হলো, তখন আল্লাহ বন্দীদের ব্যাপারে পরে নামালেন, হয় অনুগ্রহ, নয় মুক্তিপণ, আর সেটি ৪৭:৪ আয়াত। অর্থাৎ বদরে যে বাছাই আটকে রাখা হয়েছিল, পরে সেটি দিয়ে দেওয়া হলো, আর নিষেধটা ছিল একটি অবস্থার সঙ্গে জড়িত, সব কালের জন্য নয়।"
          },
          {
            "en": "Two verses later the same passage settles what had already been taken. 8:68 says that but for a decree from Allah that had gone before, a great punishment would have touched them for what they took; Ibn Kathir reports from Ibn Abbas (RA) that the decree was that spoils and captives would be made lawful for them, and he lists Abu Hurayrah (RA), Ibn Mas'ud (RA), Sa'id ibn Jubayr, Ata', al-Hasan al-Basri, Qatadah and al-A'mash as saying the like. Then 8:69 makes it lawful and good, and 8:70 turns to the captives with an offer of something better than what was taken from them.",
            "bn": "দুই আয়াত পরে একই অংশ ফয়সালা করে দেয়, যা নেওয়া হয়ে গিয়েছিল তার ব্যাপারে। ৮:৬৮ আয়াত বলে, আল্লাহর পূর্বনির্ধারিত সিদ্ধান্ত না থাকলে, তারা যা নিয়েছে তার জন্য তাদের উপর মহাশাস্তি নেমে আসত। ইবনু কাসীর ইবনু আব্বাস (রাঃ) থেকে জানান, সেই সিদ্ধান্ত ছিল এই যে গনীমত আর বন্দী তাদের জন্য হালাল করা হবে; আর একই কথা যাঁরা বলেছেন তাঁদের নামও তিনি দেন: আবূ হুরাইরা (রাঃ), ইবনু মাসঊদ (রাঃ), সাঈদ ইবনু জুবাইর, আতা, হাসান বাসরী, কাতাদা ও আমাশ। এরপর ৮:৬৯ আয়াত সেটিকে হালাল ও পবিত্র ঘোষণা করে, আর ৮:৭০ আয়াত বন্দীদের দিকে ফিরে এমন কিছুর প্রস্তাব দেয়, যা তাদের কাছ থেকে নেওয়া জিনিসের চেয়ে ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Decision This Was",
          "bn": "সিদ্ধান্তটা কার ছিল"
        },
        "p": [
          {
            "en": "A boundary belongs here, as it does with every ruling of war in this surah. What is being discussed is a decision taken in a battle by the Prophet ﷺ after consulting those with him, corrected by revelation, and then settled for the future in 47:4, which names the two courses of favour and ransom and ties them to the war laying down its burdens. It is a matter for those who carry that responsibility, and this article makes no application of it to any present situation.",
            "bn": "যুদ্ধ নিয়ে এ সূরার প্রতিটি বিধানের মতো এখানেও একটা সীমা টানা দরকার। আলোচনা হচ্ছে এক যুদ্ধে নেওয়া একটি সিদ্ধান্ত নিয়ে: নবী ﷺ সঙ্গীদের সঙ্গে পরামর্শ করে সিদ্ধান্তটি নিয়েছিলেন, ওহি এসে তা শুধরে দেয়, আর ভবিষ্যতের জন্য এর ফয়সালা হয় ৪৭:৪ আয়াতে। সেখানে অনুগ্রহ আর মুক্তিপণ, এ দুই পথের কথা বলা হয়েছে, আর তা বাঁধা হয়েছে যুদ্ধ তার বোঝা নামিয়ে রাখার সঙ্গে। এটি তাঁদেরই বিষয়, যাঁদের কাঁধে সেই দায়িত্ব; এ লেখা এটিকে বর্তমানের কোনো পরিস্থিতিতে প্রয়োগ করছে না।"
          },
          {
            "en": "What a reader can take is the part the verse itself makes general, and the verse is unusually generous about that, because the two middle clauses say nothing about war at all. You want the passing gain and Allah wants the Hereafter for you. 3:152 uses the same measure about a different day, where some who fought at Uhud are described as desiring this world and others the Hereafter, with the loss of the field between them. The pattern in both places is the same: a good thing taken early, before the matter it belonged to was finished.",
            "bn": "পাঠক যা নিতে পারেন, তা হলো আয়াতের সেই অংশ, যা আয়াত নিজেই সবার জন্য খোলা রাখে; আর এ ব্যাপারে আয়াতটি বেশ উদার, কারণ মাঝের দুটি অংশে যুদ্ধের কোনো কথাই নেই। তোমরা চাও ক্ষণিকের লাভ, আর আল্লাহ তোমাদের জন্য চান আখিরাত। ৩:১৫২ আয়াত একই মাপকাঠি ব্যবহার করে আরেক দিনের ব্যাপারে: উহুদে যাঁরা লড়েছিলেন, তাঁদের কেউ কেউ চাইছিলেন দুনিয়া আর কেউ কেউ আখিরাত, আর এর মাঝখানে যুদ্ধের মাঠটাই হাতছাড়া হয়ে গেল। দুই জায়গায় ধরনটা একই: ভালো একটা জিনিস আগেভাগে নিয়ে ফেলা, যে কাজের অংশ সেটা, সে কাজ শেষ হওয়ার আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for Both Halves",
          "bn": "দুই অর্ধেকই চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication, and it would be a misreading to take from it that this world must not be asked for at all. The prayer the Quran praises at 2:201 asks for both: our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire. The world is asked for, but the Hereafter stands beside it and the request ends on safety from the Fire. A wish that stops at the world is what our verse corrects when it sets what you wanted beside what He wanted for you.",
            "bn": "আয়াতে কোনো দোয়া নেই। তবে এ থেকে ধরে নেওয়া ভুল হবে যে দুনিয়ার কিছু চাওয়াই যাবে না। কুরআন ২:২০১ আয়াতে যে দোয়ার প্রশংসা করেছে, তাতে দুটোই চাওয়া আছে: হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দিন, আখিরাতেও কল্যাণ দিন, আর জাহান্নামের আযাব থেকে আমাদের রক্ষা করুন। দুনিয়া চাওয়া আছে, কিন্তু তার পাশেই আছে আখিরাত, আর চাওয়া শেষ হয় জাহান্নাম থেকে রক্ষার আরজিতে। যে চাওয়া দুনিয়াতেই থেমে যায়, আমাদের আয়াত সেটাই শুধরে দেয়, যখন পাশাপাশি বলে তোমরা কী চেয়েছিলে আর তিনি তোমাদের জন্য কী চেয়েছিলেন।"
          },
          {
            "en": "A sentence in this verse's own words can be added and claimed as no more than that: O Allah, make me want what You want for me, and do not let me take the first thing that presents itself in place of what You were preparing. That is assembled from the verse's own two clauses and from as-Sa'di's gloss on them. It is not a Sunnah du'a. The wording of 2:201 is the safer thing to memorise, and it is short enough to say at the end of every prayer.",
            "bn": "চাইলে এ আয়াতের নিজের শব্দ দিয়ে একটা বাক্য বলা যায়, তবে এর বেশি কিছু বলে দাবি করা যাবে না: হে আল্লাহ, আপনি আমার জন্য যা চান, আমার মনে সেটারই চাওয়া দিন; আর আপনি যা প্রস্তুত করে রাখছিলেন, তার বদলে হাতের কাছে প্রথম যা আসে তা তুলে নিতে আমাকে দেবেন না। আয়াতের নিজের দুটি অংশ আর তার উপর সা'দীর ব্যাখ্যা মিলিয়ে বাক্যটি বানানো। এটি সুন্নাহর দোয়া নয়। মুখস্থ করার জন্য ২:২০১ আয়াতের শব্দগুলোই বেশি নিরাপদ, আর দোয়াটি এত ছোট যে প্রতি নামাজের শেষে পড়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Early Profit",
          "bn": "আগেভাগে লাভ নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Where have I begun counting the benefit of something before the thing itself was finished? The word the verse uses means a gain that merely turns up, so what have I taken lately only because it happened to be lying there? And the people corrected here were not doing anything that looked wrong: which decision of mine looks entirely reasonable and is simply premature?",
            "bn": "কোথায় আমি কোনো কাজের লাভ গুনতে শুরু করেছি, অথচ কাজটাই তখনো শেষ হয়নি? আয়াতের শব্দটির মানে এমন লাভ, যা এমনি এমনি সামনে এসে পড়ে। তাহলে ইদানীং কী এমন নিয়েছি, যা কেবল হাতের কাছে পড়ে ছিল বলেই নিয়েছি? আর এখানে যাঁদের শুধরে দেওয়া হচ্ছে, তাঁরা দেখতে ভুল এমন কিছু করছিলেন না। আমার কোন সিদ্ধান্তটা দেখতে পুরোপুরি যুক্তিসঙ্গত, অথচ আসলে সময়ের আগে নেওয়া?"
          },
          {
            "en": "Two more. Allah is described here as wanting the Hereafter for them, not merely from them: if somebody read a week of my life, what would they say I want for myself? And when a matter of mine is half settled, do I finish it, or do I start collecting from it while the rest is still standing open?",
            "bn": "আরও দুটি। আয়াত বলছে, আল্লাহ তাঁদের জন্য আখিরাত চান, কেবল তাঁদের কাছ থেকে চান না। কেউ যদি আমার জীবনের একটা সপ্তাহ খুঁটিয়ে দেখে, সে কী বলবে, আমি নিজের জন্য কী চাই? আর আমার কোনো ব্যাপার যখন আধাআধি মিটেছে, আমি কি সেটা শেষ করি, নাকি বাকিটা ঝুলে থাকতেই তা থেকে ফল তুলতে শুরু করি?"
          }
        ]
      }
    ]
  },
  "8:72": {
    "sections": [
      {
        "h": {
          "en": "A Contract Allah Made",
          "bn": "আল্লাহর করা এক চুক্তি"
        },
        "p": [
          {
            "en": "Al-Anfal is Madinan, and its closing verses turn from the battlefield to the community that fought there. Our verse names two groups and binds them; 8:73 says that those who disbelieve are allies of one another too, and that failing in this will leave fitnah and great corruption on the earth; 8:74 calls the same two groups the believers in truth; and 8:75 adds those who believed and emigrated later, then gives blood relatives their precedence in the decree of Allah.",
            "bn": "সূরা আনফাল মাদানী। এর শেষ আয়াতগুলো যুদ্ধের মাঠ থেকে মুখ ফিরিয়ে তাকায় সেই সমাজের দিকে, যারা ওখানে লড়েছে। আমাদের আয়াত দুটি দলের নাম নিয়ে তাদের এক বাঁধনে বেঁধে দেয়। ৮:৭৩ আয়াত বলে, যারা কুফরী করে তারাও একে অন্যের বন্ধু, আর এ কাজে ত্রুটি হলে জমিনে ফিতনা আর বড় বিপর্যয় দেখা দেবে। ৮:৭৪ আয়াত এই দুই দলকেই বলে প্রকৃত মু'মিন। আর ৮:৭৫ আয়াত তাদেরও এ দলে যোগ করে, যারা পরে ঈমান এনে হিজরত করেছে; তারপর জানিয়ে দেয়, আল্লাহর বিধানে রক্তের আত্মীয়রা অগ্রাধিকার পায়।"
          },
          {
            "en": "As-Sa'di reads the verse as an instrument rather than a description: this is a contract of alliance and love, which Allah contracted between the Muhajirun who believed and emigrated in His path and left their homelands for Him, and the Ansar who sheltered the Messenger of Allah ﷺ and his companions and aided them with their homes and their wealth and themselves. His reason for the bond is worth keeping: for the completeness of their faith and the completeness of the connection between them.",
            "bn": "সা'দীর চোখে আয়াতটি শুধু বর্ণনা নয়, একটি দলিল। তিনি বলেন: এটি বন্ধুত্ব আর ভালোবাসার এক চুক্তি, যা আল্লাহ নিজে সম্পন্ন করেছেন দুই দলের মধ্যে। একদিকে মুহাজিররা, যাঁরা ঈমান এনেছেন, তাঁর পথে হিজরত করেছেন আর তাঁর জন্য নিজেদের দেশ ছেড়েছেন। অন্যদিকে আনসাররা, যাঁরা রাসূলুল্লাহ ﷺ আর তাঁর সঙ্গীদের আশ্রয় দিয়েছেন, আর নিজেদের ঘরবাড়ি, ধনসম্পদ ও জান দিয়ে তাঁদের সাহায্য করেছেন। এই বন্ধনের কারণ হিসেবে তিনি যা বলেন, তা মনে রাখার মতো: যাতে তাঁদের ঈমান পূর্ণ হয়, আর তাঁদের পরস্পরের সম্পর্কও পূর্ণ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Verbs, Then Two",
          "bn": "তিনটি ক্রিয়া, তারপর দুটি"
        },
        "p": [
          {
            "en": "The first group is given three verbs: they believed, they emigrated, and they fought with their wealth and their lives in the path of Allah. At-Tabari unpacks the second and third. Hajaru means they left their people and their kin and their houses, and that their people and kin left them; jahadu means they went to the utmost in wearing out their own selves in war against the enemies of Allah; and in the path of Allah he glosses as in the religion of Allah, which He made a road to His mercy and to safety from His punishment.",
            "bn": "প্রথম দলের জন্য আছে তিনটি ক্রিয়া: তারা ঈমান এনেছে, হিজরত করেছে, আর নিজেদের সম্পদ ও জান দিয়ে আল্লাহর পথে লড়েছে। দ্বিতীয় আর তৃতীয়টি তাবারী খুলে বলেন। হাজারূ মানে তারা নিজেদের লোকজন, আত্মীয়স্বজন আর ঘরবাড়ি ছেড়েছে, আর তাদের লোকজন ও আত্মীয়রাও তাদের ছেড়ে দিয়েছে। জাহাদূ মানে আল্লাহর শত্রুদের বিরুদ্ধে যুদ্ধে তারা নিজেদের শেষ সীমা পর্যন্ত খাটিয়ে নিঃশেষ করেছে। আর আল্লাহর পথে কথাটির ব্যাখ্যায় তিনি বলেন: আল্লাহর দীনে, যাকে তিনি বানিয়েছেন তাঁর রহমতে পৌঁছার আর তাঁর শাস্তি থেকে বাঁচার রাস্তা।"
          },
          {
            "en": "The second group is given two verbs and no more: they sheltered and they helped. At-Tabari explains the first with the noun inside it, that they made for them a ma'wa, a place to come home to, settling them and turning rooms of their own houses into dwellings for them when their people had driven them out of their houses. The economy of it is the point. One group is described by everything it gave up, the other by two things it did, and the verse then says of both that some of them are the allies of others.",
            "bn": "দ্বিতীয় দলের জন্য মাত্র দুটি ক্রিয়া, এর বেশি নয়: তারা আশ্রয় দিয়েছে আর সাহায্য করেছে। প্রথমটির ব্যাখ্যায় তাবারী শব্দের ভেতরের বিশেষ্যটি টেনে আনেন: তারা মুহাজিরদের জন্য মাওয়া বানিয়েছিল, ফিরে আসার মতো একটা ঠিকানা। নিজেদের লোকেরা যখন তাঁদের ঘর থেকে বের করে দিয়েছিল, তখন তারা তাঁদের থাকার ব্যবস্থা করেছিল, নিজেদের ঘরের কামরা ছেড়ে দিয়েছিল তাঁদের বসবাসের জন্য। এত অল্প কথায় বলাটাই আসল লক্ষ করার বিষয়। এক দলের পরিচয় তারা যা কিছু ছেড়েছে তা দিয়ে, অন্য দলের পরিচয় তাদের করা দুটি কাজ দিয়ে। তারপর আয়াত দুই দল সম্পর্কেই বলে: তারা একে অন্যের বন্ধু।"
          }
        ]
      },
      {
        "h": {
          "en": "Allies, or Also Heirs",
          "bn": "বন্ধু, নাকি ওয়ারিশও"
        },
        "p": [
          {
            "en": "At-Tabari gives his own reading first: the two parties, the Muhajirun and the Ansar, are each other's helpers and supporters against everyone else among the idolaters, their hands as one against whoever disbelieves in Allah, and brothers to one another rather than to their disbelieving relatives. That is alliance in the plain sense, and it is the reading the following verses support when they call the same people the believers in truth.",
            "bn": "তাবারী আগে নিজের ব্যাখ্যাটি দেন। মুহাজির আর আনসার, এই দুই দল মুশরিকদের বাকি সবার বিরুদ্ধে একে অন্যের সাহায্যকারী ও সহায়। আল্লাহর সঙ্গে যে-ই কুফরী করুক, তার বিরুদ্ধে তাঁদের হাত এক। তাঁরা পরস্পরের ভাই, নিজেদের কাফির আত্মীয়দের ভাই নন। এটাই সাধারণ অর্থে বন্ধুত্ব। পরের আয়াতগুলো যখন এই লোকদেরই প্রকৃত মু'মিন বলে, তখন সেগুলো এ ব্যাখ্যাকেই সমর্থন করে।"
          },
          {
            "en": "He then records a second reading, that what was meant is that some of them were closer to inheriting from others, and that Allah made them inherit from one another by emigration and by support rather than by kinship, and that He abrogated that afterwards with His words that those of blood relationship are closer to one another in the decree of Allah, which is 8:75 and again 33:6. He carries that from Ibn Abbas (RA), through Ali and Mu'awiyah. Ibn Kathir reports the same history and attributes the record of the brotherhood the Prophet ﷺ forged between the two groups to al-Bukhari, from Ibn Abbas (RA).",
            "bn": "এরপর তিনি আরেকটি ব্যাখ্যা উল্লেখ করেন। সে মতে উদ্দেশ্য হলো, তাঁদের কেউ কেউ অন্যদের ওয়ারিশ হওয়ার বেশি হকদার ছিলেন। আল্লাহ তাঁদের একে অন্যের ওয়ারিশ করেছিলেন হিজরত আর সাহায্যের ভিত্তিতে, আত্মীয়তার ভিত্তিতে নয়। পরে তিনি তা রহিত করেন তাঁর এই বাণী দিয়ে: আল্লাহর বিধানে রক্তের আত্মীয়রা একে অন্যের বেশি নিকটবর্তী। এটিই ৮:৭৫ আয়াত, আবার ৩৩:৬ আয়াতেও আছে। এ বর্ণনা তিনি আনেন ইবনু আব্বাস (রাঃ) থেকে, আলী আর মুআবিয়ার সূত্রে। ইবনু কাসীরও একই ইতিহাস জানান। আর নবী ﷺ দুই দলের মধ্যে যে ভ্রাতৃত্ব গড়ে দিয়েছিলেন, তার বর্ণনা তিনি বুখারীর বলে উল্লেখ করেন, ইবনু আব্বাস (রাঃ) থেকে।"
          },
          {
            "en": "Ibn Kathir attaches a narration to the phrase about alliance, reporting from Imam Ahmad, from Jarir ibn Abdullah al-Bajali (RA), that the Messenger of Allah ﷺ said that the Muhajirun and the Ansar are allies of one another, and that the freed ones of Quraysh and the freed ones of Thaqif are allies of one another until the Day of Resurrection. What the hadith adds to the verse is time: the verse states the bond, and the hadith extends the same word to groups who entered later and carries it to the end.",
            "bn": "বন্ধুত্বের কথাটির সঙ্গে ইবনু কাসীর একটি বর্ণনা জুড়ে দেন। ইমাম আহমাদের সূত্রে জারীর ইবনু আবদুল্লাহ আল-বাজালী (রাঃ) থেকে বর্ণিত, রাসূলুল্লাহ ﷺ বলেছেন: মুহাজির আর আনসার একে অন্যের বন্ধু, আর কুরাইশের মুক্তিপ্রাপ্তরা ও সাকীফের মুক্তিপ্রাপ্তরা কিয়ামতের দিন পর্যন্ত একে অন্যের বন্ধু। আয়াতের সঙ্গে হাদিসটি যোগ করে সময়। আয়াত বন্ধনটির কথা জানায়; হাদিস সেই একই শব্দ পরে আসা দলগুলো পর্যন্ত ছড়িয়ে দেয়, আর তা টেনে নিয়ে যায় একেবারে শেষ পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Stayed Behind",
          "bn": "যারা রয়ে গেল"
        },
        "p": [
          {
            "en": "The second half of the verse is harder than the first. Those who believed and did not emigrate: you have no walayah of theirs at all until they emigrate. As-Sa'di puts the reason in one sentence, that they cut off your alliance by separating themselves from you at the very time of severe need for men, so since they did not emigrate they had no share of the believers' walayah. The verse is not doubting their faith. It is declining to extend a specific bond to people who had not shared what built it.",
            "bn": "আয়াতের দ্বিতীয় অর্ধেকটা প্রথমটার চেয়ে কঠিন। যারা ঈমান এনেছে কিন্তু হিজরত করেনি: তারা হিজরত না করা পর্যন্ত তাদের ওয়ালায়াতের কোনো কিছুই তোমাদের উপর নেই। সা'দী এক বাক্যে কারণটা বলে দেন: যখন লোকবলের প্রচণ্ড দরকার ছিল, ঠিক তখনই তারা তোমাদের থেকে আলাদা থেকে তোমাদের সঙ্গে বন্ধুত্বের বাঁধন নিজেরাই কেটে দিয়েছে; তাই হিজরত না করায় মু'মিনদের ওয়ালায়াতে তাদের কোনো অংশ রইল না। আয়াত তাদের ঈমান নিয়ে সন্দেহ করছে না। শুধু একটি নির্দিষ্ট বন্ধন তাদের পর্যন্ত বাড়াচ্ছে না, কারণ যা দিয়ে সেই বন্ধন গড়ে উঠেছে, তাতে তারা শরিক হয়নি।"
          },
          {
            "en": "And then, immediately, the duty that survives the withheld alliance. If they seek your help in the religion, the help is upon you. As-Sa'di narrows it exactly: that is, for the sake of fighting whoever fought them because of their religion; but as for those who fought them for other aims, their help is not upon you. So a claim was denied in the same breath as an obligation was confirmed, and the obligation is triggered by the reason for the attack rather than by the closeness of the tie.",
            "bn": "আর ঠিক তার পরেই আসে এমন এক দায়িত্ব, যা বন্ধুত্ব আটকে রাখার পরও বহাল থাকে: তারা দীনের ব্যাপারে তোমাদের সাহায্য চাইলে সাহায্য করা তোমাদের দায়িত্ব। সা'দী এর সীমাটা নিখুঁতভাবে বেঁধে দেন: অর্থাৎ যারা তাদের দীনের কারণে তাদের সঙ্গে লড়েছে, তাদের বিরুদ্ধে লড়াইয়ের জন্য; কিন্তু যারা অন্য কোনো উদ্দেশ্যে তাদের সঙ্গে লড়েছে, তাদের বেলায় সাহায্য করা তোমাদের দায়িত্ব নয়। তাহলে একই নিঃশ্বাসে একটি দাবি নাকচ হলো, আবার একটি দায়িত্ব পাকা হলো। আর দায়িত্বটা জাগে আক্রমণের কারণ দেখে, সম্পর্ক কতটা ঘনিষ্ঠ তা দেখে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Exception That Holds",
          "bn": "যে ব্যতিক্রম টিকে থাকে"
        },
        "p": [
          {
            "en": "Then the clause that decides the character of the whole verse: except against a people between yourselves and whom there is a treaty. As-Sa'di reads mithaq here as a covenant to leave off fighting, and states the consequence without softening it. If those believers who did not emigrate want to fight such a people, do not aid them against them, because of the covenant between you and them. A call for help that the verse has just called a duty is stopped by a pledge already given.",
            "bn": "এরপর আসে সেই অংশ, যা গোটা আয়াতের চরিত্র ঠিক করে দেয়: তবে এমন কোনো জাতির বিরুদ্ধে নয়, যাদের সঙ্গে তোমাদের চুক্তি আছে। সা'দী এখানে মীসাক বলতে বোঝেন যুদ্ধ না করার অঙ্গীকার, আর এর ফল তিনি কোনো রাখঢাক ছাড়াই বলে দেন: হিজরত না করা ওই মু'মিনরা যদি এমন জাতির সঙ্গে লড়তে চায়, তবে ওই জাতির বিরুদ্ধে তাদের সাহায্য করো না, কারণ ওদের সঙ্গে তোমাদের অঙ্গীকার আছে। যে সাহায্যের ডাককে আয়াত এইমাত্র দায়িত্ব বলেছে, আগে থেকে দেওয়া একটি কথা সেটাকেও থামিয়ে দেয়।"
          },
          {
            "en": "Read beside 8:58, which forbids acting on a pact you have decided to end until the other side has been told, the surah is consistent to an unusual degree. There a suspicion of treachery did not license a quiet advantage; here the appeal of fellow believers does not license a broken pledge. The verse then closes with Allah is Seeing of what you do, which as-Sa'di takes as the reason the rulings are shaped as they are: He knows the states you are in, and legislates for you what suits them.",
            "bn": "৮:৫৮ আয়াত বলে, কোনো চুক্তি শেষ করার সিদ্ধান্ত নিলে অপর পক্ষকে না জানিয়ে সে অনুযায়ী কাজ করা যাবে না। সে আয়াতের পাশে রেখে পড়লে দেখা যায়, সূরাটি অসাধারণ রকম সামঞ্জস্যপূর্ণ। ওখানে খিয়ানতের সন্দেহও চুপিসারে সুবিধা নেওয়ার অনুমতি দেয়নি; এখানে মু'মিন ভাইদের ডাকও কথা ভাঙার অনুমতি দেয় না। আয়াত শেষ হয় এই কথায়: আর তোমরা যা করো, আল্লাহ তা দেখেন। সা'দী একেই বিধানগুলোর এমন রূপের কারণ মনে করেন: তোমরা কোন অবস্থায় আছ তিনি জানেন, আর সেই অবস্থার উপযোগী বিধানই তোমাদের জন্য দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on Mutual Loyalty",
          "bn": "পরস্পরের বন্ধুত্ব নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "9:71 states the bond in its widest form, the believing men and the believing women are allies of one another, and then lists what the alliance consists of: enjoining right, forbidding wrong, prayer, zakah, obedience. 59:9 shows the Ansar's half of our verse from the inside, loving those who emigrated to them, finding no want in their breasts for what the others were given, and preferring them over themselves even in their own need.",
            "bn": "৯:৭১ আয়াত বন্ধনটির কথা বলে সবচেয়ে প্রশস্ত রূপে: মু'মিন পুরুষ আর মু'মিন নারী একে অন্যের বন্ধু। তারপর জানিয়ে দেয়, এ বন্ধুত্ব কী কী নিয়ে: সৎকাজের আদেশ, অসৎকাজে নিষেধ, নামাজ, যাকাত, আনুগত্য। ৫৯:৯ আয়াত আমাদের আয়াতের আনসার-অংশটি দেখায় ভেতর থেকে: যারা হিজরত করে তাদের কাছে এসেছে, আনসাররা তাদের ভালোবাসে; ওদের যা দেওয়া হয়েছে তা নিয়ে নিজেদের মনে কোনো আকাঙ্ক্ষা রাখে না; আর নিজেরা অভাবে থাকলেও ওদেরকেই নিজেদের উপর প্রাধান্য দেয়।"
          },
          {
            "en": "33:6 is the verse at-Tabari and Ibn Kathir both name for the change: the Prophet ﷺ is more worthy of the believers than themselves, and those of blood relationship are more entitled in the decree of Allah. 8:74 and 8:75 finish our verse's own work, the first calling these two groups the believers in truth with forgiveness and noble provision, the second admitting the later emigrants into the same company.",
            "bn": "এই পরিবর্তনের প্রসঙ্গে তাবারী আর ইবনু কাসীর দুজনেই ৩৩:৬ আয়াতের কথা বলেন: নবী ﷺ মু'মিনদের কাছে তাদের নিজেদের চেয়েও ঘনিষ্ঠ, আর আল্লাহর বিধানে রক্তের আত্মীয়রাই বেশি হকদার। ৮:৭৪ আর ৮:৭৫ আয়াত আমাদের আয়াতের কাজটা পূর্ণ করে। প্রথমটি এ দুই দলকে বলে প্রকৃত মু'মিন, যাদের জন্য আছে মাগফিরাত আর সম্মানজনক রিযক; দ্বিতীয়টি পরে হিজরতকারীদেরও একই দলে শামিল করে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Loyalty You Have Paid For",
          "bn": "যে বন্ধুত্বের দাম দিয়েছেন"
        },
        "p": [
          {
            "en": "The verse builds alliance out of what people did together, which is an uncomfortable measure. One group had left everything and the other had opened its houses, and the bond is declared between those two and withheld, for that purpose, from believers who had done neither. Nobody's faith is questioned and nobody is excluded from the religion. What is refused is a claim of closeness that no shared cost stands behind, and most of us have a few of those.",
            "bn": "আয়াত বন্ধুত্ব মাপে মানুষ একসঙ্গে কী করেছে তা দিয়ে, আর মাপকাঠিটা অস্বস্তিকর। এক দল সব ছেড়ে এসেছিল, আরেক দল নিজেদের ঘর খুলে দিয়েছিল। বন্ধনের ঘোষণা এল এ দুই দলের মধ্যে, আর এই বিশেষ উদ্দেশ্যে তা আটকে রাখা হলো সেই মু'মিনদের থেকে, যারা এর কোনোটাই করেনি। কারও ঈমান নিয়ে প্রশ্ন তোলা হচ্ছে না, কাউকে দীন থেকেও বাদ দেওয়া হচ্ছে না। নাকচ হচ্ছে ঘনিষ্ঠতার এমন দাবি, যার পেছনে একসঙ্গে বহন করা কোনো ত্যাগ নেই। আর আমাদের বেশিরভাগেরই এমন দু-চারটা দাবি আছে।"
          },
          {
            "en": "The exception is the harder half to live. A pledge you have given outranks an appeal from your own side, which means the test arrives exactly when refusing looks disloyal. The verse has already agreed that helping is a duty and still stops it at the treaty line. Anyone who has been asked by a friend to break a commitment in the friend's favour has met the small version of this, and the verse's answer is not to weigh the friendship but to look at what was already promised.",
            "bn": "দুই অংশের মধ্যে জীবনে মেনে চলা বেশি কঠিন এই ব্যতিক্রমটাই। নিজের দেওয়া কথা নিজের পক্ষের আবেদনের চেয়েও বেশি গুরুত্ব পায়। ফলে পরীক্ষাটা আসে ঠিক তখন, যখন না বলাটা বিশ্বাসঘাতকতার মতো দেখায়। আয়াত আগেই মেনে নিয়েছে যে সাহায্য করা দায়িত্ব, তবু চুক্তির সীমায় এসে সেটা থামিয়ে দেয়। কোনো বন্ধু যদি কখনো নিজের সুবিধার জন্য আপনাকে কোনো কথা ভাঙতে বলে থাকে, তাহলে আপনি এরই ছোট একটা রূপ দেখেছেন। আয়াতের জবাব হলো, বন্ধুত্ব কতটা ভারী তা মাপা নয়; বরং আগে কী কথা দেওয়া হয়েছে, সেদিকে তাকানো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for Your Own Side",
          "bn": "নিজের লোকদের জন্য দোয়া"
        },
        "p": [
          {
            "en": "The verse carries no supplication, and the prayer the Quran puts closest to it is in 59:10, on the lips of those who came after the two groups this verse names: our Lord, forgive us and our brothers who preceded us in faith, and put not in our hearts any resentment toward those who have believed. It is the natural prayer of anyone reading a verse that ranks people by what they gave, because the first thing such a verse can stir is resentment.",
            "bn": "আয়াতে কোনো দোয়া নেই। এর সবচেয়ে কাছের দোয়াটি কুরআন রেখেছে ৫৯:১০ আয়াতে, এ আয়াতের দুই দলের পরে যাঁরা এসেছেন তাঁদের মুখে: হে আমাদের রব, আমাদের মাফ করুন, আর আমাদের সেই ভাইদেরও, যাঁরা ঈমানে আমাদের আগে গেছেন; আর যারা ঈমান এনেছে, তাদের প্রতি আমাদের অন্তরে কোনো বিদ্বেষ রাখবেন না। যে আয়াত মানুষকে মাপে তারা কী দিয়েছে তা দিয়ে, সেটা পড়ে মনে প্রথম যা জাগতে পারে তা হলো বিদ্বেষ। তাই এমন আয়াত পড়লে এ দোয়াটাই স্বাভাবিকভাবে মুখে আসে।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, make me one who shelters and helps rather than one who watches, and do not let me be asked to break a pledge by anyone I love. That is assembled from the verse's two verbs for the Ansar and from its closing exception, and it is not a Sunnah du'a. The wording of 59:10 is the safer of the two to carry and the shorter to say.",
            "bn": "চাইলে এ আয়াতের নিজের শব্দ দিয়ে একটা বাক্য বলা যায়, তবে এর বেশি কিছু বলে দাবি করা যাবে না: হে আল্লাহ, আমাকে তাদের একজন বানান যারা আশ্রয় দেয় আর সাহায্য করে, শুধু চেয়ে চেয়ে দেখে না; আর আমার ভালোবাসার কাউকে দিয়ে আমার কাছে কথা ভাঙার আবদার আসতে দেবেন না। আনসারদের জন্য আয়াতের দুটি ক্রিয়া আর শেষের ব্যতিক্রমটি মিলিয়ে বাক্যটি বানানো, আর এটি সুন্নাহর দোয়া নয়। দুটোর মধ্যে ৫৯:১০ আয়াতের শব্দগুলোই সঙ্গে রাখার জন্য বেশি নিরাপদ, বলতেও ছোট।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Own Ties",
          "bn": "নিজের সম্পর্ক নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "The bond here is mutual and not a debt one side owes: which of my relationships have I quietly filed as somebody owing me something? The verse ties alliance to what people did together, so what have I actually done alongside the people I call my closest? And those who stayed behind were believers still, and still outside this particular bond: where am I claiming a closeness whose cost I never shared?",
            "bn": "এখানে বন্ধনটা দুই দিকের; এক পক্ষ আরেক পক্ষের কাছে ঋণী, এমন নয়। আমার কোন কোন সম্পর্ককে আমি মনে মনে এমন খাতায় তুলে রেখেছি, যেন ওরা আমার কাছে ঋণী? আয়াত বন্ধুত্বকে বাঁধে মানুষ একসঙ্গে কী করেছে তার সঙ্গে। তাহলে যাদের আমি সবচেয়ে কাছের বলি, তাদের পাশে থেকে আমি আসলে কী করেছি? আর যারা রয়ে গিয়েছিল, তারা তখনো মু'মিন, তবু এ বিশেষ বন্ধনের বাইরে। কোথায় আমি এমন ঘনিষ্ঠতার দাবি করছি, যার মূল্য চুকাতে আমি কখনো ভাগ নিইনি?"
          },
          {
            "en": "Two that cost more. A treaty outranks a call for help from my own side, so which of my commitments would I break first if somebody I love asked me to, and what does that order say about me? And the help was owed for the religion and not for every quarrel: when I am asked to take a side, is the reason the one this verse names, or is it only that the person asking is mine?",
            "bn": "আরও দুটি, এগুলোর দাম আরও বেশি। নিজের পক্ষের সাহায্যের ডাকের চেয়েও চুক্তি আগে। তাহলে আমার ভালোবাসার কেউ বললে আমি কোন প্রতিশ্রুতিটা সবার আগে ভাঙব, আর সেই ক্রম আমার সম্পর্কে কী বলে? আর সাহায্য পাওনা ছিল দীনের জন্য, প্রতিটি ঝগড়ার জন্য নয়। আমাকে যখন কারও পক্ষ নিতে বলা হয়, তখন কারণটা কি এ আয়াতের বলা কারণটাই, নাকি শুধু এই যে, যে বলছে সে আমার নিজের লোক?"
          }
        ]
      }
    ]
  }
});
