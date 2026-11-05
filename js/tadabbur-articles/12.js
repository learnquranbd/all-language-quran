/**
 * Tadabbur long-form articles — surah 12.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "12:2": {
    "sections": [
      {
        "h": {
          "en": "At the Door of the Surah",
          "bn": "সূরার দোরগোড়ায়"
        },
        "p": [
          {
            "en": "Surat Yusuf opens with three separate letters, Alif, Lam, Ra, and then a claim about what follows: these are the verses of the clear Book (12:1). Our verse is six words in Arabic: inna anzalnahu qur'anan 'arabiyyan la'allakum ta'qilun, indeed We have sent it down as an Arabic Qur'an, that you might understand. Then 12:3 announces the best of stories, and from 12:4 Yusuf (AS) is telling his father about a dream. The verse stands at the door of the surah, between the description of the Book and the story itself.",
            "bn": "সূরা ইউসুফ শুরু হয় তিনটি আলাদা হরফ দিয়ে: আলিফ, লাম, রা। তারপর সামনে যা আসছে তার পরিচয়: এগুলো সুস্পষ্ট কিতাবের আয়াত (১২:১)। আমাদের আয়াতটি আরবীতে ছয়টি শব্দ: ইন্না আনযালনাহু কুরআনান আরাবিয়্যান লাআল্লাকুম তা'কিলূন। নিশ্চয়ই আমি একে আরবী কুরআন হিসেবে নাযিল করেছি, যাতে তোমরা বুঝতে পার। এরপর ১২:৩ ঘোষণা দেয় সর্বোত্তম কাহিনির, আর ১২:৪ থেকে ইউসুফ (আঃ) বাবাকে নিজের স্বপ্নের কথা বলছেন। কিতাবের পরিচয় আর কাহিনির মাঝখানে, সূরার একেবারে দোরগোড়ায় দাঁড়িয়ে আছে এ আয়াত।"
          },
          {
            "en": "Ibn Kathir, in the abridged English, reads the opening verses as one movement. The clear Book is the Qur'an that is plain and apparent, which explains, clarifies and makes known what is unclear; it was sent down in Arabic; and so, he writes, Allah went on to say that He relates the best of stories. At-Tabari keeps the same link in his gloss: We sent down this clear Book as an Arabic Qur'an. A Book described as making things plain is followed at once by the language it was sent down in.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীরে শুরুর আয়াতগুলো একটানা এক বক্তব্য। সুস্পষ্ট কিতাব মানে সেই কুরআন, যা নিজে স্পষ্ট, প্রকাশ্য, আর যা অস্পষ্ট বিষয়কে ব্যাখ্যা করে, খুলে বলে, জানিয়ে দেয়। সেটি নাযিল হয়েছে আরবীতে। তাই, তিনি লেখেন, আল্লাহ এরপর বললেন যে তিনি সর্বোত্তম কাহিনি বর্ণনা করছেন। তাবারীর ব্যাখ্যাতেও একই যোগসূত্র: আমি এই সুস্পষ্ট কিতাবকে আরবী কুরআন হিসেবে নাযিল করেছি। যে কিতাবের পরিচয় দেওয়া হলো স্পষ্টকারী বলে, তার ঠিক পরেই আসছে সে কোন ভাষায় নাযিল হলো সেই কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "When They Asked for Stories",
          "bn": "গল্প শোনার আবদার"
        },
        "p": [
          {
            "en": "At-Tabari, under 12:3, records a report about why these opening verses came. Sa'd ibn Abi Waqqas said that the Qur'an was sent down to the Prophet ﷺ and he recited it to them for a time, and they said: Messenger of Allah, if only you would tell us stories. Then Allah sent down Alif Lam Ra, these are the verses of the clear Book, up to la'allakum ta'qilun, the end of our verse. He recited to them for another time, they asked him to speak to them, and 39:23 came: Allah has sent down the best of speech.",
            "bn": "তাবারী ১২:৩ আয়াতের আলোচনায় একটি বর্ণনা আনেন, শুরুর এ আয়াতগুলো কেন এল সে বিষয়ে। সা'দ ইবন আবী ওয়াক্কাস (রাঃ) বলেন, নবী ﷺ-এর উপর কুরআন নাযিল হলো, তিনি কিছুকাল তাঁদের তা পড়ে শোনালেন। তাঁরা বললেন, হে আল্লাহর রাসূল, আপনি যদি আমাদের কিছু কাহিনি শোনাতেন! তখন আল্লাহ নাযিল করলেন আলিফ লাম রা, এগুলো সুস্পষ্ট কিতাবের আয়াত, লাআল্লাকুম তা'কিলূন পর্যন্ত, অর্থাৎ আমাদের আয়াতের শেষ অবধি। আরও কিছুকাল পর তাঁরা বললেন, আমাদের কিছু কথা শোনান। তখন এল ৩৯:২৩: আল্লাহ নাযিল করেছেন সর্বোত্তম বাণী।"
          },
          {
            "en": "No collector's own grading of this report was confirmed on a fetched page, so this article gives it none. A version from Ibn 'Abbas ties the request to 12:3 alone. A third version, from 'Awn ibn 'Abdillah, is mursal, with a missing link in its chain. Ibn Kathir's abridged English carries the Ibn 'Abbas wording under 12:3. The fuller story of the request belongs with that verse, and it is left there.",
            "bn": "এই বর্ণনার কোনো সংকলকের নিজস্ব মান-নির্ণয় সংগৃহীত কোনো পৃষ্ঠায় নিশ্চিত করা যায়নি, তাই এ লেখা তার কোনো মান উল্লেখ করে না। ইবন আব্বাস (রাঃ)-এর সূত্রে আরেক বর্ণনায় আবদারটি শুধু ১২:৩ আয়াতের সঙ্গে যুক্ত। আউন ইবন আবদুল্লাহর সূত্রে তৃতীয় বর্ণনাটি মুরসাল, সনদের একটি কড়ি সেখানে নেই। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১২:৩ আয়াতের অধীনে ইবন আব্বাসের ভাষ্যটি আনে। আবদারের পূর্ণ কাহিনি সেই আয়াতেরই বিষয়, তাই সেখানেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Book, or Yusuf's Story",
          "bn": "কিতাব, নাকি ইউসুফের কাহিনি"
        },
        "p": [
          {
            "en": "What is the it in anzalnahu, We sent it down? Al-Baghawi answers in a word: the Book. At-Tabari reads it the same way, this clear Book. Al-Qurtubi records a second view, that the phrase means We sent down the account of Yusuf, and quotes an-Nahhas: this is closer to the meaning, because it is narrated that the Jews said, ask him why the family of Ya'qub moved from Sham to Egypt, and about Yusuf. So Allah sent this down in Makkah, agreeing with what is in the Torah, with additions they did not have.",
            "bn": "আনযালনাহু, আমি একে নাযিল করেছি: এখানে 'একে' বলতে কী? বাগাভী এক শব্দে উত্তর দেন: কিতাব। তাবারীও তাই পড়েন: এই সুস্পষ্ট কিতাব। কুরতুবী আরেকটি মত উল্লেখ করেন। সে মতে কথাটির অর্থ, আমি ইউসুফের ঘটনা নাযিল করেছি। এর পক্ষে তিনি নাহহাসের কথা আনেন: অর্থের দিক থেকে এটাই বেশি মানানসই। কারণ বর্ণিত আছে, ইহুদিরা বলেছিল, তাঁকে জিজ্ঞেস করো, ইয়াকূবের পরিবার শাম ছেড়ে মিসরে গেল কেন, আর ইউসুফের ঘটনাই বা কী। তখন আল্লাহ মক্কায় এটি নাযিল করলেন, তাওরাতে যা আছে তার সঙ্গে মিলিয়ে, আর সঙ্গে এমন কিছু বাড়তি কথা, যা তাদের কাছে ছিল না।"
          },
          {
            "en": "Al-Qurtubi gives no chain for that narration and opens it with it is narrated. Ma'arif al-Qur'an likewise says those who had asked about Yusuf (AS) were the Jews of Arabia, and that the story came in their language so they would ponder it and affirm the Prophet's truthfulness. Al-Qurtubi draws out the point: the Prophet ﷺ told them this though he had never read a book and did not live where books were, so it stood for him as raising the dead stood for 'Isa (AS). The Sa'd report and this narration name different askers; only the first comes with a grading in these sources.",
            "bn": "কুরতুবী ঐ বর্ণনার কোনো সনদ দেননি, শুরু করেছেন 'বর্ণিত আছে' বলে। মাআরিফুল কুরআনও বলে, যারা ইউসুফ (আঃ)-এর ঘটনা জানতে চেয়েছিল তারা ছিল আরবের ইহুদি। কাহিনিটি এসেছে তাদের ভাষায়, যাতে তারা ভেবে দেখে এবং নবী ﷺ-এর সত্যতা মেনে নেয়। কুরতুবী এখান থেকে মূল কথাটা বের করে আনেন। নবী ﷺ জীবনে কখনো কোনো বই পড়েননি, এমন জায়গাতেও থাকতেন না যেখানে বইপত্র ছিল। তবু তিনি এ ঘটনা শোনালেন। তাই তাঁর জন্য এটি ছিল ঈসা (আঃ)-এর মৃতকে জীবিত করার মতো এক নিদর্শন। সা'দের বর্ণনা আর এ বর্ণনা ভিন্ন ভিন্ন প্রশ্নকারীর কথা বলে। এ উৎসগুলোতে মান নির্ণয় এসেছে কেবল প্রথমটির।"
          }
        ]
      },
      {
        "h": {
          "en": "Noblest, Six Times Over",
          "bn": "ছয় দিক থেকে শ্রেষ্ঠ"
        },
        "p": [
          {
            "en": "Why Arabic? Ibn Kathir's Arabic gives the reason in four terms. The language of the Arabs is the most eloquent of languages, the clearest, the widest, and the best at conveying the meanings that stand in the soul. The abridged English renders the four as most eloquent, plain, deep and expressive, so where the Arabic has widest, awsa', the English has deep. The claim is about range and precision: a tongue able to carry exactly what a person means.",
            "bn": "আরবী কেন? ইবন কাসীরের আরবী তাফসীর কারণটা দেন চারটি গুণে। আরবদের ভাষা সব ভাষার মধ্যে সবচেয়ে বিশুদ্ধ ও অলংকারপূর্ণ, সবচেয়ে স্পষ্ট, সবচেয়ে প্রশস্ত। আর মনের ভেতরে যে অর্থ জাগে, তা প্রকাশে এ ভাষাই সবচেয়ে সক্ষম। সংক্ষিপ্ত ইংরেজি তাফসীরে এ চারটি গুণ এসেছে এভাবে: সবচেয়ে বাগ্মী, সরল, গভীর ও প্রকাশক্ষম। অর্থাৎ আরবীতে যেখানে আওসা', সবচেয়ে প্রশস্ত, ইংরেজিতে সেখানে গভীর। দাবিটা ভাষার পরিসর আর নিখুঁততা নিয়ে: এমন ভাষা, যা মানুষের মনের কথা ঠিক ঠিক বহন করতে পারে।"
          },
          {
            "en": "Then comes his chain of six. So the noblest of Books was sent down in the noblest of languages, to the noblest of messengers, through the noblest of angels, in the noblest place on earth, and its sending down began in the noblest month of the year, Ramadan. So it was complete in every respect, he concludes. Ramadan is the month that 2:185 names as the one in which the Qur'an was sent down, and Ibn Kathir places the choice of language inside that single pattern of honour.",
            "bn": "এরপর ছয়টি কড়িতে গাঁথা তাঁর শিকল। তাই সর্বশ্রেষ্ঠ কিতাব নাযিল হলো সর্বশ্রেষ্ঠ ভাষায়, সর্বশ্রেষ্ঠ রাসূলের উপর, সর্বশ্রেষ্ঠ ফেরেশতার মাধ্যমে, পৃথিবীর সর্বশ্রেষ্ঠ ভূখণ্ডে। আর এর নাযিল শুরু হলো বছরের সর্বশ্রেষ্ঠ মাসে, রমযানে। ফলে সব দিক থেকেই তা পূর্ণাঙ্গ হলো, এই তাঁর উপসংহার। রমযানকে ২:১৮৫ আয়াত সেই মাস বলে উল্লেখ করেছে, যে মাসে কুরআন নাযিল হয়েছে। ভাষার নির্বাচনকে ইবন কাসীর এই একই মর্যাদার নকশার ভেতরে রাখেন।"
          },
          {
            "en": "As-Sa'di counts the Arabic tongue as part of the Book's clarity: He sent it down in the Arabic tongue, the noblest of tongues and the clearest, which makes plain every useful truth that people need. At-Tabari gives a plainer reason, and it matters for what follows. He sent it as an Arabic Qur'an to the Arabs, because their tongue and their speech were Arabic, so He sent this Book in their tongue that they might understand it and grasp it. The Muyassar says only: in the language of the Arabs.",
            "bn": "সা'দী আরবী ভাষাকে কিতাবের স্পষ্টতারই অংশ গণ্য করেন। তিনি একে নাযিল করেছেন আরবী ভাষায়, যা সব ভাষার মধ্যে সবচেয়ে মর্যাদাপূর্ণ আর সবচেয়ে স্পষ্ট, যা মানুষের প্রয়োজনীয় প্রতিটি উপকারী সত্যকে পরিষ্কার করে দেয়। তাবারী দেন আরও সাদামাটা কারণ, আর সামনের আলোচনার জন্য সেটা গুরুত্বপূর্ণ। আরবদের কাছে তিনি পাঠিয়েছেন আরবী কুরআন, কারণ তাদের ভাষা ও কথাবার্তা আরবী। তাই এ কিতাব তিনি তাদের ভাষায় পাঠালেন, যাতে তারা বোঝে আর এর থেকে জ্ঞান লাভ করে। মুয়াসসার শুধু বলে: আরবদের ভাষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What La'alla Is Doing Here",
          "bn": "লাআল্লা শব্দের কাজ"
        },
        "p": [
          {
            "en": "La'allakum ta'qilun: al-Baghawi and al-Qurtubi gloss it in the same words, so that you may know its meanings and grasp what is in it. La'alla usually voices a hope, and al-Qurtubi pauses on the word. Some Arabs, he notes, bring an after la'alla, treating it like 'asa; the lam at its start, he says, is extra, for emphasis, and he cites a line of verse, ya abata 'allaka aw 'asaka. He then records a reading: so that you may be in hope of reflecting on it. The note of uncertainty, he says, then belongs to them, not to the Book and not to Allah.",
            "bn": "লাআল্লাকুম তা'কিলূন: বাগাভী আর কুরতুবী হুবহু একই কথায় এর ব্যাখ্যা দেন, যাতে তোমরা এর অর্থ জানতে পার এবং এতে যা আছে তা বুঝতে পার। লাআল্লা সাধারণত আশা প্রকাশ করে, আর কুরতুবী শব্দটির কাছে একটু থামেন। তিনি জানান, কোনো কোনো আরব লাআল্লার পরে আন ব্যবহার করে, একে আসা শব্দের মতো ধরে। তাঁর মতে শুরুর লামটি অতিরিক্ত, জোর দেওয়ার জন্য। সাক্ষী হিসেবে তিনি একটি কবিতার চরণ আনেন: ইয়া আবাতা আল্লাকা আও আসাকা। এরপর তিনি একটি মত উল্লেখ করেন: যাতে তোমরা এ নিয়ে ভাবনার আশায় থাকো। তখন অনিশ্চয়তার ভাবটা ফেরে শ্রোতাদের দিকে, কিতাবের দিকে নয়, আল্লাহর দিকেও নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an reads la'alla here in the sense of so that, and ties the choice of the word to its listeners: their frame of mind was already known, that with very clear verses before them they would still doubt and delay accepting the truth. The Muyassar carries the purpose past the mind: that you, O Arabs, may understand its meanings and grasp them, and act by its guidance. Understanding, on that gloss, is the first step of a walk, not the end of it.",
            "bn": "মাআরিফুল কুরআন এখানে লাআল্লাকে 'যাতে' অর্থে পড়ে, আর শব্দটির নির্বাচনকে মেলায় শ্রোতাদের মনের অবস্থার সঙ্গে। তাদের মানসিকতা আগেই জানা ছিল: একদম স্পষ্ট আয়াত সামনে থাকলেও তারা সন্দেহ করবে, সত্য মেনে নিতে গড়িমসি করবে। মুয়াসসার উদ্দেশ্যটাকে বুদ্ধির গণ্ডি পেরিয়ে নিয়ে যায়: হে আরবরা, যাতে তোমরা এর অর্থ বোঝো, অনুধাবন করো, আর এর হেদায়েত অনুযায়ী আমল করো। এ ব্যাখ্যায় বোঝা হলো পথচলার প্রথম ধাপ, পথের শেষ নয়।"
          },
          {
            "en": "As-Sa'di gives the clause two layers. First, that you may understand its limits, its roots and branches, its commands and prohibitions; and when you have understood that with certainty and your hearts are marked by knowing it, it bears fruit in the action of the limbs and in submitting to it. Second, that your minds may grow, as the noble and lofty meanings come round to them again and again, so that you move from one state to states higher and more complete.",
            "bn": "সা'দী বাক্যটির দুটি স্তর দেখান। প্রথমত, যাতে তোমরা এর সীমারেখা, মূলনীতি ও শাখা-প্রশাখা, এর আদেশ ও নিষেধ বুঝতে পার। দৃঢ় বিশ্বাসের সঙ্গে তা বুঝলে, আর অন্তর সে জ্ঞানে রঙিন হলে, তার ফল ফলে অঙ্গপ্রত্যঙ্গের আমলে, আনুগত্যে। দ্বিতীয়ত, যাতে তোমাদের বুদ্ধি বাড়তে থাকে। মহৎ ও উঁচু অর্থগুলো বারবার মনের উপর ফিরে আসে, আর তোমরা একটি অবস্থা থেকে উঠে যাও আরও উঁচু, আরও পূর্ণ অবস্থায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Addressed First to the Arabs",
          "bn": "প্রথম সম্বোধন আরবদের প্রতি"
        },
        "p": [
          {
            "en": "Who is the you of la'allakum? The commentaries fetched for 12:2 answer: the Arabs. At-Tabari has an Arabic Qur'an to the Arabs; the Muyassar inserts O Arabs into the address; al-Qurtubi has recited in your language, O company of Arabs. That is a statement about the first audience, the people in whose speech the words came down. None of them says that anyone else is shut out from understanding it, and two notes they give on parallel verses show how they treat the wider audience.",
            "bn": "লাআল্লাকুম-এর 'তোমরা' কারা? ১২:২ আয়াতের যেসব তাফসীর আনা হয়েছে, সবার উত্তর: আরবরা। তাবারী বলেন, আরবদের প্রতি আরবী কুরআন। মুয়াসসার সম্বোধনের ভেতরেই জুড়ে দেয়, হে আরবরা। কুরতুবী বলেন, তোমাদের ভাষায় পড়া হয়, হে আরব সম্প্রদায়। এ কথা প্রথম শ্রোতাদের নিয়ে, যাদের ভাষায় শব্দগুলো নেমে এসেছিল। তাঁদের কেউই বলেন না যে আর কেউ এটি বোঝার সুযোগ থেকে বাদ। আর সমার্থক আয়াতে তাঁদের দুটি টীকা দেখায়, বৃহত্তর শ্রোতাদের তাঁরা কীভাবে দেখেন।"
          },
          {
            "en": "The same clause, word for word, closes 43:3, and there al-Qurtubi records a difference. Ibn 'Isa takes ta'qilun as understanding its rulings and meanings, and on that reading, al-Qurtubi says, the address is particular to the Arabs and not the non-Arabs. Ibn Zayd takes it as so that you reflect, and on that reading the address is general, to Arabs and non-Arabs alike. Al-Qurtubi sets the two side by side without choosing. Both readings concern whom the sentence addresses; neither says a non-Arab cannot come to understand it.",
            "bn": "হুবহু এ বাক্যটি দিয়েই শেষ হয়েছে ৪৩:৩ আয়াত, আর সেখানে কুরতুবী একটি মতভেদ উল্লেখ করেন। ইবন ঈসা তা'কিলূন অর্থ নেন এর বিধান ও অর্থ বোঝা। কুরতুবী বলেন, এ মতে সম্বোধনটি আরবদের জন্য নির্দিষ্ট, অনারবদের জন্য নয়। ইবন যায়দ অর্থ নেন, যাতে তোমরা চিন্তা কর। এ মতে সম্বোধনটি সাধারণ, আরব-অনারব সবার প্রতি। কুরতুবী দুটি মত পাশাপাশি রেখেছেন, কোনোটিকে বেছে নেননি। দুই মতই সম্বোধন কাদের প্রতি সে প্রশ্নে। কোনো মতই বলে না যে একজন অনারব তা বুঝতে পারবে না।"
          },
          {
            "en": "On 14:4, every messenger sent in the tongue of his people to make things clear to them, al-Qurtubi meets the objection head on. The verse gives no argument to non-Arabs or anyone else, he writes, because whoever has what the Prophet ﷺ brought translated for him, in a translation he understands, is bound by its proof. He cites 34:28: We have not sent you except to all people, as a bringer of good news and a warner. Ibn Kathir, on the same verse, says each prophet was sent to his own nation and Muhammad ﷺ was singled out with a message to all people, citing 7:158.",
            "bn": "১৪:৪ আয়াত বলে, প্রত্যেক রাসূলকে পাঠানো হয়েছে তাঁর জাতির ভাষায়, যাতে তিনি তাদের কাছে স্পষ্ট করে বলেন। এখানে কুরতুবী আপত্তিটির সরাসরি জবাব দেন। তিনি লেখেন, এ আয়াতে অনারব বা অন্য কারও পক্ষে কোনো যুক্তি নেই। কারণ নবী ﷺ যা এনেছেন, তা কারও জন্য এমন অনুবাদে তুলে ধরা হলে যা সে বোঝে, তার উপর দলিল প্রতিষ্ঠিত হয়ে যায়। তিনি ৩৪:২৮ আয়াত উদ্ধৃত করেন: আমি তোমাকে সমগ্র মানবজাতির জন্যই সুসংবাদদাতা ও সতর্ককারী করে পাঠিয়েছি। ইবন কাসীর একই আয়াতে বলেন, প্রত্যেক নবী প্রেরিত হতেন নিজের জাতির কাছে, আর মুহাম্মাদ ﷺ-কে বিশেষভাবে দেওয়া হয়েছে সব মানুষের কাছে রিসালাত। প্রমাণ হিসেবে তিনি আনেন ৭:১৫৮।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Things, the Last for Everyone",
          "bn": "পাঁচটি দান, শেষটি সবার জন্য"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for 12:2 attaches a sound hadith to it. Ibn Kathir, on 14:4, brings one from the two Sahihs to make the point above. It is a general narration, not attached to this verse. In al-Bukhari's wording (Sahih al-Bukhari 335, Dar-us-Salam numbering), quoted whole: Narrated Jabir bin `Abdullah: The Prophet (ﷺ) said, \"I have been given five things which were not given to any one else before me. -1. Allah made me victorious by terror, (by His frightening my enemies) for a distance of one month's journey.",
            "bn": "১২:২ আয়াতের যেসব তাফসীর আনা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি। ইবন কাসীর ১৪:৪ আয়াতে ওপরের কথাটি বোঝাতে দুই সহীহ গ্রন্থ থেকে একটি হাদীস আনেন। এটি সাধারণ বর্ণনা, এ আয়াতের সঙ্গে যুক্ত নয়। বুখারীর ভাষ্যে (সহীহ বুখারী ৩৩৫, দারুস সালাম ক্রম), পুরোটা: জাবির ইবন আবদুল্লাহ (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: আমাকে পাঁচটি জিনিস দেওয়া হয়েছে, যা আমার আগে আর কাউকে দেওয়া হয়নি। ১. শত্রুর মনে ভীতি সঞ্চারের মাধ্যমে আমাকে সাহায্য করা হয়েছে, একটা মাসের পথের দূরত্ব পর্যন্ত।"
          },
          {
            "en": "\"-2. The earth has been made for me (and for my followers) a place for praying and a thing to perform Tayammum, therefore anyone of my followers can pray wherever the time of a prayer is due. -3. The booty has been made Halal (lawful) for me yet it was not lawful for anyone else before me. -4. I have been given the right of intercession (on the Day of Resurrection). -5. Every Prophet used to be sent to his nation only but I have been sent to all mankind.\" The fifth is what bears on our verse.",
            "bn": "২. গোটা পৃথিবীকে আমার (ও আমার উম্মতের) জন্য নামাজের জায়গা আর তায়াম্মুমের উপকরণ করে দেওয়া হয়েছে। তাই আমার উম্মতের যে কেউ, যেখানেই নামাজের সময় হোক, সেখানেই নামাজ পড়তে পারে। ৩. গনীমতের মাল আমার জন্য হালাল করা হয়েছে, অথচ আমার আগে কারও জন্য তা হালাল ছিল না। ৪. আমাকে (কিয়ামতের দিন) শাফাআতের অধিকার দেওয়া হয়েছে। ৫. প্রত্যেক নবী প্রেরিত হতেন শুধু নিজের জাতির কাছে, আর আমি প্রেরিত হয়েছি সমগ্র মানবজাতির কাছে। এর মধ্যে পঞ্চমটিই আমাদের আয়াতের সঙ্গে সম্পর্কিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Understood, and Still Refused",
          "bn": "বুঝেও ফিরিয়ে দেওয়া"
        },
        "p": [
          {
            "en": "At-Tabari, on 26:195, explains why the Qur'an says it came in a clear Arabic tongue: to tell the idolaters of Quraysh it was sent that way, so they could not say it came in another tongue and they turned from it for not understanding. Their turning away, he says, was not because the meanings escaped them; they understood them, and turned away in denial and arrogance. That describes those first deniers as at-Tabari reads them, and licenses no verdict on anyone alive today. Its edge is meant for the reader.",
            "bn": "তাবারী ২৬:১৯৫ আয়াতের আলোচনায় ব্যাখ্যা করেন, কুরআন কেন বলে যে তা এসেছে সুস্পষ্ট আরবী ভাষায়। উদ্দেশ্য কুরাইশের মুশরিকদের জানিয়ে দেওয়া, এভাবেই তা পাঠানো হয়েছে, যাতে তারা বলতে না পারে যে এটি অন্য ভাষায় এসেছে, না বুঝেই তারা মুখ ফিরিয়েছে। তিনি বলেন, অর্থ তাদের অজানা ছিল বলে তারা মুখ ফেরায়নি। তারা ঠিকই বুঝেছিল, তবু মিথ্যা মনে করে আর অহংকারে মুখ ফিরিয়ে নিয়েছিল। এ বর্ণনা তাবারীর পাঠে সেই প্রথম অস্বীকারকারীদের নিয়ে। আজকের কোনো জীবিত মানুষের ব্যাপারে রায় দেওয়ার কোনো অনুমতি এতে নেই। এর ধার পাঠকের নিজের দিকে।"
          },
          {
            "en": "On 43:3 at-Tabari voices the excuse that was taken away: had it come in a foreign tongue, you would say, we are Arabs, and this is foreign speech whose meanings we do not grasp. The Qur'an makes the same point in 41:44. So the verse removes one excuse and leaves a question. Understanding was the purpose, and as-Sa'di's fruit of it is action and growth. For a reader without Arabic, al-Qurtubi counts a translation one understands as carrying the proof. What remains is whether what I understand reaches what I do.",
            "bn": "৪৩:৩ আয়াতে তাবারী সেই অজুহাতটা তুলে ধরেন, যা কেড়ে নেওয়া হয়েছে: অনারব ভাষায় এলে তোমরা বলতে, আমরা আরব, আর এ তো বিদেশি ভাষা, এর অর্থ আমরা বুঝি না। ৪১:৪৪ আয়াতে কুরআন নিজেও একই কথা বলে। তাই আয়াতটি একটা অজুহাত সরিয়ে দিয়ে রেখে যায় একটা প্রশ্ন। বোঝাই ছিল উদ্দেশ্য, আর সা'দীর ভাষায় তার ফল আমল ও উন্নতি। যিনি আরবী জানেন না, তাঁর জন্য কুরতুবীর কথা: যে অনুবাদ মানুষ বোঝে, তা দিয়েও দলিল প্রতিষ্ঠিত হয়। বাকি থাকে শুধু এটুকু: যা বুঝি, তা কি আমার কাজে পৌঁছায়?"
          }
        ]
      }
    ]
  },
  "12:5-6": {
    "sections": [
      {
        "h": {
          "en": "A Dream Told at Home",
          "bn": "ঘরের ভেতরে বলা স্বপ্ন"
        },
        "p": [
          {
            "en": "Surah Yusuf is Makkan and tells a single story. 12:3 calls it the best of stories, and 12:4 opens it inside a house: a boy tells his father he has seen eleven stars and the sun and the moon prostrating to him. The father's answer fills the next two verses. 12:5 is a caution, keep this from your brothers; 12:6 is a reading, this is what your Lord will do with you. Then 12:7 says that in Yusuf and his brothers are signs for those who ask.",
            "bn": "সূরা ইউসুফ মাক্কী, আর এতে একটাই কাহিনি। ১২:৩ আয়াত একে বলেছে সর্বোত্তম কাহিনি, আর ১২:৪ আয়াতে কাহিনি শুরু হয় এক ঘরের ভেতরে। এক বালক বাবাকে জানায়, সে দেখেছে ১১টি তারা আর সূর্য ও চাঁদ তাকে সাজদা করছে। বাবার জবাব ছড়িয়ে আছে পরের দুই আয়াতে। ১২:৫ আয়াত সাবধানবাণী: এ কথা ভাইদের কাছ থেকে আড়ালে রাখো। ১২:৬ আয়াত স্বপ্নের পাঠ: তোমার রব তোমাকে নিয়ে এই করবেন। তারপর ১২:৭ আয়াত বলে, ইউসুফ আর তার ভাইদের ঘটনায় প্রশ্নকারীদের জন্য নিদর্শন আছে।"
          },
          {
            "en": "12:8 shows why the caution was needed: the brothers complain that Yusuf and his brother are dearer to their father than they are. At-Tabari says Ya'qub (AS) spoke because envy had already shown itself in them, citing as-Suddi. The tafsir pages consulted record no occasion of revelation for either verse. As-Sa'di warns at the head of this passage that the story is complete as Allah told it, and padding it with Isra'iliyyat presumes to finish what He left whole.",
            "bn": "সাবধানবাণী কেন দরকার ছিল, তা বোঝা যায় ১২:৮ আয়াতে। ভাইয়েরা অভিযোগ করে, ইউসুফ আর তার ভাই বাবার কাছে তাদের চেয়ে বেশি প্রিয়। তাবারী সুদ্দীর বর্ণনা এনে বলেন, ইয়াকুব (আঃ) এ কথা বলেছিলেন কারণ ভাইদের মধ্যে হিংসা আগেই প্রকাশ পেয়ে গিয়েছিল। যেসব তাফসীর পাতা দেখা হয়েছে, তাতে এ দুই আয়াতের কোনো শানে নুযুল নেই। সাদী এই অংশের শুরুতেই সতর্ক করেন: আল্লাহ যেভাবে বলেছেন, কাহিনিটা সেভাবেই পূর্ণ। ইসরাঈলী বর্ণনা দিয়ে তা ভরাট করা মানে তিনি যা পূর্ণ রেখেছেন তা পূর্ণ করার স্পর্ধা।"
          }
        ]
      },
      {
        "h": {
          "en": "Little Son, and a Plot",
          "bn": "আদরের ডাক, চক্রান্তের শব্দ"
        },
        "p": [
          {
            "en": "Ya bunayya: the father does not use a plain word for son but bunayy, the diminutive of ibn, a form Arabic uses for tenderness. Luqman addresses his son the same way in 31:13. La taqsus, do not relate, comes from the root q-s-s, the root of al-qasas in 12:3, where Allah calls this the best of stories. A surah that is itself a telling opens with a father asking that a particular account not yet be told. The caution runs to 15 Arabic words; the reading after it, to 25.",
            "bn": "ইয়া বুনাইয়া। বাবা ছেলেকে সাদামাটা শব্দে ডাকেননি, ডেকেছেন বুনাইয়্য বলে, যা ইবন বা পুত্র শব্দের ছোট রূপ। আরবিতে এ রূপ আসে আদর বোঝাতে। ৩১:১৩ আয়াতে লুকমানও ছেলেকে এভাবেই ডাকেন। লা তাকসুস, বর্ণনা কোরো না, এসেছে ক-স-স ধাতু থেকে। ১২:৩ আয়াতে আল্লাহ যখন একে সর্বোত্তম কাহিনি বলেন, সেখানে আল-কাসাস শব্দও এই ধাতুরই। যে সূরা নিজেই এক বর্ণনা, তার শুরুতে এক বাবা চাইছেন একটা কথা আপাতত বর্ণনা না হোক। আরবিতে সাবধানবাণীটি ১৫ শব্দের, আর পরের স্বপ্ন-পাঠ ২৫ শব্দের।"
          },
          {
            "en": "Fa-yakidu laka kaydan pairs the verb with its own noun, and at-Tabari notes that kaydan is there for emphasis. The small word laka, against you, is read differently: al-Baghawi calls its lam a connective, al-Qurtubi calls it emphasis. On kayd itself they agree. At-Tabari glosses it as seeking out calamities for him and standing in open enmity, and Ibn Kathir as a stratagem to bring about his ruin.",
            "bn": "ফা-ইয়াকীদূ লাকা কাইদা। ক্রিয়ার পাশেই বসেছে একই ধাতুর বিশেষ্য, আর তাবারী বলেন, কাইদা শব্দটি এসেছে জোর দেওয়ার জন্য। লাকা মানে তোমার বিরুদ্ধে। এই ছোট্ট শব্দের লাম নিয়ে দুই রকম ব্যাখ্যা আছে: বাগাভী একে বলেন সংযোগের লাম, কুরতুবী বলেন জোর দেওয়ার লাম। তবে কাইদ মানে কী, তাতে তাঁরা একমত। তাবারীর ব্যাখ্যায়, তার জন্য বিপদ খুঁজে বেড়ানো আর খোলাখুলি শত্রুতায় নামা। ইবনে কাসীরের ব্যাখ্যায়, তাকে ধ্বংস করার ফন্দি।"
          },
          {
            "en": "In 12:6 the verbs turn to Allah. Yajtabika, He will choose you: al-Qurtubi defines ijtiba' as choosing the loftiest of matters for the chosen, and cites an-Nahhas for its root in jabaytu, I gathered in, as water is gathered into a basin. Ta'wil, al-Baghawi explains, is what the end of a matter comes to; dream interpretation bears the name because events come round to what was seen. Wa-kadhalika, and thus, ties the reading to the dream: as your Lord showed you this, at-Tabari and Ibn Kathir gloss it, so will He choose you.",
            "bn": "১২:৬ আয়াতে এসে ক্রিয়াগুলোর কর্তা আল্লাহ। ইয়াজতাবীকা, তিনি তোমাকে বেছে নেবেন। কুরতুবীর সংজ্ঞায়, ইজতিবা মানে যাকে বাছা হলো তার জন্য সবচেয়ে উঁচু বিষয়গুলো বেছে দেওয়া। শব্দটির মূল নিয়ে তিনি নাহহাসের কথা আনেন: এর উৎস জাবাইতু, আমি জড়ো করলাম, যেভাবে হাউজে পানি জমানো হয়। বাগাভী বোঝান, তাবীল মানে কোনো বিষয় শেষমেশ যেখানে গিয়ে দাঁড়ায়। স্বপ্নের ব্যাখ্যাকে তাবীল বলা হয়, কারণ ঘটনা ঘুরে এসে মেলে স্বপ্নে দেখা ছবির সঙ্গে। ওয়া কাযালিকা, আর এভাবেই, শব্দ দুটি স্বপ্নের সঙ্গে এই পাঠকে গেঁথে দেয়। তাবারী আর ইবনে কাসীরের ব্যাখ্যা: তোমার রব যেমন তোমাকে এ স্বপ্ন দেখিয়েছেন, তেমনি তোমাকে বেছেও নেবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Enemy the Verse Names",
          "bn": "আয়াত যে শত্রুর নাম নেয়"
        },
        "p": [
          {
            "en": "The verse could have ended on the brothers. It ends on Satan instead: inna ash-shaytana lil-insani 'aduwwun mubin. At-Tabari reads it as the point of the warning: beware of Satan stirring your brothers against you through envy. Al-Baghawi says Satan makes the plot look fair to them, out of his ancient enmity. As-Sa'di, in the text consulted for 12:6, says Satan never slackens, so staying away from whatever gives him a hold is the better course.",
            "bn": "আয়াতটি ভাইদের কথা বলে শেষ হতে পারত। শেষ হয়েছে শয়তানের কথায়: ইন্নাশ শাইতানা লিল ইনসানি আদুওয়ুম মুবীন। তাবারীর কাছে এটাই সাবধানবাণীর মূল কথা: সাবধান থাকো, শয়তান যেন হিংসা জাগিয়ে তোমার ভাইদের তোমার বিরুদ্ধে উসকে না দেয়। বাগাভী বলেন, শয়তানের শত্রুতা বহু পুরোনো, আর সেই শত্রুতা থেকেই সে চক্রান্তটাকে তাদের চোখে সুন্দর করে দেখায়। ১২:৬ আয়াতের যে পাঠ দেখা হয়েছে, তাতে সাদী বলেন, শয়তান কখনো ঢিলে দেয় না। তাই যেসব পথে সে চেপে বসার সুযোগ পায়, সেগুলো থেকে দূরে থাকাই উত্তম।"
          },
          {
            "en": "That matters, because the surah does not leave the brothers as villains. In 12:92 Yusuf (AS) tells them there is no blame on them today. In 12:97 and 12:98 they admit they were sinners and ask their father to seek forgiveness for them, and he promises he will. In 12:100 Yusuf (AS) names the cause of the rupture in this verse's terms: after Satan had sown estrangement between me and my brothers. The father's first word and the son's last agree about the enemy.",
            "bn": "এ কথার গুরুত্ব আছে, কারণ সূরাটি ভাইদের খলনায়ক বানিয়ে ছেড়ে দেয়নি। ১২:৯২ আয়াতে ইউসুফ (আঃ) তাদের বলেন, আজ তোমাদের বিরুদ্ধে কোনো অভিযোগ নেই। ১২:৯৭ ও ১২:৯৮ আয়াতে তারা নিজেদের অপরাধ স্বীকার করে বাবাকে বলে তাদের জন্য মাগফিরাত চাইতে, আর তিনি কথা দেন চাইবেন। ১২:১০০ আয়াতে ইউসুফ (আঃ) পুরো বিচ্ছেদের কারণ বলেন এই আয়াতেরই ভাষায়: শয়তান আমার আর আমার ভাইদের মাঝে বিভেদ ঢুকিয়ে দেওয়ার পর। শত্রু কে ছিল, সে প্রশ্নে বাবার প্রথম কথা আর ছেলের শেষ কথা মিলে যায়।"
          },
          {
            "en": "Two further questions divide the commentators. Did Yusuf (AS) keep the dream to himself? As-Sa'di says he obeyed and hid it; al-Baghawi, on 12:6, says that when the dream reached the brothers they envied him. And were the brothers prophets? Al-Qurtubi argues from their conduct that they were not prophets at that time, rejecting a statement from Ibn Zayd in at-Tabari's book that they were. Al-Baghawi, on 12:6, says Ya'qub's children were all prophets. Both questions stay where the commentators left them.",
            "bn": "আরও দুটি প্রশ্নে মুফাসসিরদের মত আলাদা। ইউসুফ (আঃ) কি স্বপ্নের কথা গোপন রেখেছিলেন? সাদী বলেন, তিনি বাবার কথা মেনে তা লুকিয়ে রেখেছিলেন। আর বাগাভী ১২:৬ আয়াতের আলোচনায় বলেন, স্বপ্নের খবর ভাইদের কানে পৌঁছলে তারা তাঁকে হিংসা করতে লাগল। দ্বিতীয় প্রশ্ন, ভাইয়েরা কি নবী ছিলেন? কুরতুবী তাদের আচরণ দেখে যুক্তি দেন, তখন তারা নবী ছিলেন না। তাবারীর কিতাবে ইবনে যায়দের একটি বক্তব্য আছে যে তারা নবী ছিলেন; কুরতুবী সেটি নাকচ করেন। অন্যদিকে বাগাভী ১২:৬ আয়াতের আলোচনায় বলেন, ইয়াকুবের সন্তানেরা সবাই নবী ছিলেন। মুফাসসিররা প্রশ্ন দুটি যেখানে রেখে গেছেন, এ লেখাও সেখানেই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing, Teaching, Completing",
          "bn": "বেছে নেওয়া, শেখানো, পূর্ণ করা"
        },
        "p": [
          {
            "en": "What is ta'wil al-ahadith? At-Tabari explains it as knowledge of what people's accounts of their dreams come to, citing Mujahid: the reading of dreams. Ibn Kathir cites Mujahid and others to the same effect. At-Tabari also records Ibn Zayd, who called it knowledge and speech and recited 12:22 with it. Al-Qurtubi reports agreement that it means dream interpretation, then adds another reading: the accounts of nations and scriptures and the proofs of tawhid, which points to prophethood. As-Sa'di holds both: dreams, and what true accounts such as the revealed books come to.",
            "bn": "তাবীলুল আহাদিস বলতে কী বোঝায়? তাবারী বলেন, মানুষ যে স্বপ্নের কথা বলে, তা শেষে কোথায় গিয়ে দাঁড়ায়, সেই জ্ঞান। সঙ্গে আনেন মুজাহিদের কথা: স্বপ্নের ব্যাখ্যা। ইবনে কাসীরও মুজাহিদসহ আরও কয়েকজনের বরাতে একই কথা বলেন। তাবারী ইবনে যায়দের মতও লিখে রাখেন। তিনি একে বলেছেন জ্ঞান আর কথা, আর এর সঙ্গে ১২:২২ আয়াত তিলাওয়াত করেছেন। কুরতুবী জানান, এর অর্থ যে স্বপ্নের ব্যাখ্যা, এ ব্যাপারে সবাই একমত। তারপর তিনি আরেকটি অর্থ যোগ করেন: জাতিসমূহের ঘটনা, আসমানি কিতাব আর তাওহিদের দলিল, যা নবুওয়াতের দিকে ইঙ্গিত করে। সাদী দুটিকেই ধরেন: স্বপ্নের ব্যাখ্যা, আর আসমানি কিতাবের মতো সত্য বাণী কোথায় গিয়ে দাঁড়ায় তার ব্যাখ্যা।"
          },
          {
            "en": "What completes the favour? Ibn Kathir says his being sent as a messenger and receiving revelation; the Muyassar, prophethood and messengership. Al-Qurtubi gives prophethood first, then bringing his brothers to him, or rescue from every harm. As-Sa'di widens it to good in this world and the next. At-Tabari reads the family of Ya'qub as the people of Ya'qub's religion, from his offspring and others, while al-Qurtubi reports a group of commentators who took it as a promise of prophethood to all Ya'qub's sons.",
            "bn": "নিয়ামত পূর্ণ হওয়া বলতে কী? ইবনে কাসীর বলেন, তাঁকে রাসূল করে পাঠানো আর তাঁর কাছে ওহি পাঠানো। মুয়াসসার বলে, নবুওয়াত ও রিসালাত। কুরতুবী প্রথমে বলেন নবুওয়াত, তারপর আনেন আরও দুটি মত: ভাইদের তাঁর কাছে এনে দেওয়া, কিংবা সব রকম বিপদ থেকে রক্ষা। সাদী একে টেনে নেন দুনিয়া আর আখিরাত দুই জায়গার কল্যাণ পর্যন্ত। ইয়াকুবের পরিবার বলতে তাবারী বোঝেন ইয়াকুবের দ্বীনের অনুসারীদের, তাঁর বংশের হোক বা বাইরের। কুরতুবী আবার একদল মুফাসসিরের মত জানান, যারা একে ইয়াকুবের সব ছেলের নবুওয়াতের প্রতিশ্রুতি হিসেবে পড়েছেন।"
          },
          {
            "en": "Al-Qurtubi says the favour on Ibrahim was his being taken as a close friend and saved from the fire, and the favour on Ishaq his prophethood. The verse closes on two names, 'Alim and Hakim. At-Tabari explains: He knows where favour belongs and who is fit to be chosen, and is wise in ordering His creation. Ibn Kathir recalls words found in 6:124: Allah knows best where He places His message.",
            "bn": "কুরতুবী বলেন, ইবরাহীমের উপর নিয়ামত ছিল তাঁকে অন্তরঙ্গ বন্ধু হিসেবে গ্রহণ করা আর আগুন থেকে বাঁচানো, আর ইসহাকের উপর নিয়ামত তাঁর নবুওয়াত। আয়াত শেষ হয় দুই নামে, আলীম ও হাকীম। তাবারীর ব্যাখ্যা: অনুগ্রহ কোথায় মানায় আর কে বাছাইয়ের উপযুক্ত, তিনি তা জানেন; সৃষ্টির ব্যবস্থাপনায় তিনি প্রজ্ঞাময়। ইবনে কাসীর মনে করিয়ে দেন ৬:১২৪ আয়াতের কথা: আল্লাহই ভালো জানেন তাঁর রিসালাত কোথায় রাখবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Only to One Who Loves",
          "bn": "শুধু যে ভালোবাসে তাকে"
        },
        "p": [
          {
            "en": "Al-Qurtubi attaches a narration to this verse and cites al-Bukhari for it; al-Baghawi brings it under 12:5 with his own chain. In Bukhari 7044, Abu Qatada (RA) reports the Prophet ﷺ saying: A good dream is from Allah, so if anyone of you saw a dream which he liked, he should not tell it to anybody except to the one whom he loves, and if he saw a dream which he disliked, then he should seek refuge with Allah from its evil and from the evil of Satan, and spit three times (on his left) and should not tell it to anybody, for it will not harm him.",
            "bn": "কুরতুবী এই আয়াতের সঙ্গে একটি হাদিস জুড়ে দেন এবং এর উৎস হিসেবে বুখারীর নাম নেন। বাগাভীও ১২:৫ আয়াতের নিচে নিজের সনদে হাদিসটি আনেন। বুখারী ৭০৪৪ নম্বরে আবু কাতাদা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: ভালো স্বপ্ন আল্লাহর পক্ষ থেকে। তোমাদের কেউ পছন্দের কিছু দেখলে সে যেন তা এমন একজন ছাড়া কাউকে না বলে, যাকে সে ভালোবাসে। আর অপছন্দের কিছু দেখলে সে যেন তার অনিষ্ট আর শয়তানের অনিষ্ট থেকে আল্লাহর কাছে আশ্রয় চায়, তিনবার থুথু ফেলে, আর কাউকে তা না বলে। তাহলে তা তার কোনো ক্ষতি করবে না।"
          },
          {
            "en": "Al-Qurtubi also draws rulings from the verse. It is a basis, he says, for telling a dream only to someone caring and sincere; for a Muslim warning his brother about someone he fears for him, which is not backbiting; and for leaving a blessing undisplayed before someone whose envy and harm are feared. Ma'arif al-Qur'an adds, citing al-Qurtubi, that keeping a disturbing dream to oneself is advice born of care rather than a legal prohibition, since the Prophet ﷺ told his Companions a dream of his own at the time of Uhud.",
            "bn": "কুরতুবী আয়াতটি থেকে কয়েকটি বিধানও বের করেন। তাঁর মতে, দরদি আর কল্যাণকামী মানুষ ছাড়া কাউকে স্বপ্নের কথা না বলার মূল দলিল এই আয়াত। এ থেকে আরও জানা যায়, কোনো মুসলিম তার ভাইকে এমন লোকের ব্যাপারে সাবধান করতে পারে যার দিক থেকে সে ক্ষতির আশঙ্কা করে, আর তা গীবত নয়। আর যার হিংসা ও ক্ষতির ভয় আছে, তার সামনে নিজের নিয়ামত প্রকাশ না করারও অনুমতি আছে। মাআরিফুল কুরআন কুরতুবীর বরাতে যোগ করে: অস্বস্তিকর স্বপ্ন নিজের কাছে রাখার কথাটি দরদ থেকে দেওয়া পরামর্শ, শরীয়তের নিষেধাজ্ঞা নয়। কারণ উহুদের সময় নবী ﷺ নিজের দেখা একটি স্বপ্ন সাহাবীদের শুনিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Echoes Across the Surah",
          "bn": "সূরাজুড়ে প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "The promise of 12:6 is kept inside the surah in its own words. In 12:21 Allah says He established Yusuf (AS) in the land to teach him min ta'wil al-ahadith, the same phrase. In 12:101 Yusuf (AS) says it back to his Lord: You have taught me of the interpretation of events. In 12:100 he calls his family's prostration the ta'wil of his dream. How long it took is reported differently: al-Baghawi gives forty years from Ibn Abbas (RA), and eighty from al-Hasan al-Basri.",
            "bn": "১২:৬ আয়াতের প্রতিশ্রুতি সূরার ভেতরেই পূরণ হয়, তাও একই শব্দে। ১২:২১ আয়াতে আল্লাহ বলেন, তিনি ইউসুফ (আঃ)-কে দেশে প্রতিষ্ঠিত করলেন মিন তাবীলিল আহাদিস শেখানোর জন্য, হুবহু সেই শব্দগুচ্ছ। ১২:১০১ আয়াতে ইউসুফ (আঃ) নিজেই কথাটা তাঁর রবকে ফিরিয়ে বলেন: আপনি আমাকে তাবীল শিখিয়েছেন। আর ১২:১০০ আয়াতে পরিবারের সাজদাকে তিনি বলেন তাঁর স্বপ্নের তাবীল। এতে কত সময় লেগেছিল, তা নিয়ে বর্ণনা ভিন্ন। বাগাভী ইবনে আব্বাস (রাঃ) থেকে আনেন ৪০ বছর, আর হাসান বসরী থেকে ৮০ বছর।"
          },
          {
            "en": "The closing clause of 12:5 has a near twin in 17:53: tell My servants to say what is best, for Satan sows discord among them, and Satan is ever to man a clear enemy. There the remedy is the choice of words; here it is the choice of listeners. 35:6 draws out the instruction: Satan is an enemy to you, so take him as an enemy. And 113:5 gives words of refuge against the very danger 12:5 foresaw: from the evil of an envier when he envies.",
            "bn": "১২:৫ আয়াতের শেষ বাক্যের প্রায় যমজ আছে ১৭:৫৩ আয়াতে: আমার বান্দাদের বলো সবচেয়ে উত্তম কথা বলতে, কারণ শয়তান তাদের মাঝে বিভেদ ছড়ায়, আর শয়তান মানুষের প্রকাশ্য দুশমন। সেখানে প্রতিকার হলো কথা বেছে বলা, এখানে শ্রোতা বেছে নেওয়া। ৩৫:৬ আয়াত নির্দেশটা স্পষ্ট করে দেয়: শয়তান তোমাদের শত্রু, তাই তাকে শত্রু হিসেবেই গ্রহণ করো। আর ১১৩:৫ আয়াত আশ্রয় চাওয়ার ভাষা দেয় ঠিক সেই বিপদ থেকে, যা ১২:৫ আয়াত আগেই দেখেছিল: হিংসুকের অনিষ্ট থেকে, যখন সে হিংসা করে।"
          },
          {
            "en": "The completed favour has sisters too. 48:2 promises the Prophet ﷺ that Allah will complete His favour upon him, and 5:3 tells this ummah that today He has completed it upon them, the verb Ya'qub (AS) used of Ibrahim and Ishaq. And 93:11 tells the Prophet ﷺ to proclaim the favour of his Lord. Set beside 12:5, it marks the limit of the caution: al-Qurtubi's ruling concerns keeping a blessing from someone whose harm is feared, not hiding every blessing from everyone.",
            "bn": "পূর্ণ নিয়ামতের কথা আরও কয়েকটি আয়াতে আছে। ৪৮:২ আয়াতে আল্লাহ নবী ﷺ-কে কথা দেন, তিনি তাঁর উপর নিজের নিয়ামত পূর্ণ করবেন। ৫:৩ আয়াতে তিনি এই উম্মাহকে জানান, আজ তিনি তাদের উপর তা পূর্ণ করলেন। ইবরাহীম ও ইসহাকের বেলায় ইয়াকুব (আঃ) এই ক্রিয়াটিই ব্যবহার করেছিলেন। আর ৯৩:১১ আয়াত নবী ﷺ-কে বলে তাঁর রবের নিয়ামতের কথা প্রকাশ করতে। ১২:৫ আয়াতের পাশে রাখলে এ আয়াত সাবধানতার সীমা টেনে দেয়। কুরতুবীর বিধান হলো, যার দিক থেকে ক্ষতির ভয় আছে তার কাছ থেকে নিয়ামত আড়ালে রাখা। সবার কাছ থেকে সব নিয়ামত লুকিয়ে রাখা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarding a Gift Quietly",
          "bn": "নিয়ামত আগলে রাখা, নিঃশব্দে"
        },
        "p": [
          {
            "en": "Lived, the verse is a lesson in choosing listeners. Good news comes as a new opening, a child's success, an answered prayer. The narration allows a good dream to be told to those who love you, and the verse shows the father judging who is safe to hear. Before posting or announcing, ask who will hear it and what it may stir in them. Tell the people who will rejoice, and let the rest learn of it once it has happened.",
            "bn": "জীবনে এ আয়াতের পাঠ হলো শ্রোতা বেছে নেওয়া। সুখবর আসে নতুন সুযোগ, সন্তানের সাফল্য কিংবা কবুল হওয়া দুআর চেহারায়। হাদিসটি ভালো স্বপ্ন বলার অনুমতি দেয় তাদের কাছে, যারা আপনাকে ভালোবাসে। আর আয়াতে দেখা যায়, কে শুনলে নিরাপদ, সে বিচার করছেন বাবা। কোথাও পোস্ট দেওয়ার বা ঘোষণা করার আগে ভাবুন, কে শুনবে আর তার মনে এটা কী জাগাতে পারে। বলুন তাদের, যারা খুশি হবে। বাকিরা জানুক ব্যাপারটা ঘটে যাওয়ার পর।"
          },
          {
            "en": "The harder part is guarding without suspicion. Ya'qub (AS) does not denounce his sons, and nothing in the verse tells the boy to hate them. He names the danger and the enemy behind it, then turns at once to what Allah will give. That is the shape to copy in a family: protect the vulnerable, speak plainly about a risk, and keep the door open for the very people who might become that risk. A warning is not a campaign.",
            "bn": "কঠিন কাজটা হলো সন্দেহ না করে আগলে রাখা। ইয়াকুব (আঃ) ছেলেদের নিন্দা করেননি, আর আয়াতের কোথাও বালককে ভাইদের ঘৃণা করতে বলা হয়নি। তিনি বিপদের নাম নেন, তার পেছনের শত্রুর নাম নেন, তারপর সঙ্গে সঙ্গে ফিরে যান আল্লাহ কী দেবেন সেই কথায়। পরিবারে এই ছাঁচটাই অনুসরণের মতো: দুর্বলকে রক্ষা করুন, ঝুঁকির কথা খোলাখুলি বলুন, আর যারা সেই ঝুঁকি হয়ে উঠতে পারে তাদের জন্যও দরজা খোলা রাখুন। সতর্ক করা আর কারও বিরুদ্ধে প্রচার চালানো এক জিনিস নয়।"
          },
          {
            "en": "For a parent, the verse is a model of counsel: the father met his son's dream with tenderness, a caution and a blessing, in that order. Al-Qurtubi notes that Ya'qub (AS) understood Yusuf (AS) would rise above the family and did not mind it for himself, because a man wishes his son to be better than he is, while a brother does not wish that for his brother. Gratitude belongs here as well: the favour promised to the boy is tied to Ibrahim and Ishaq, a gift carried down a line.",
            "bn": "বাবা-মায়ের জন্য আয়াতটি উপদেশ দেওয়ার এক আদর্শ। ছেলের স্বপ্ন বাবা গ্রহণ করলেন আদর দিয়ে, তারপর সাবধান করলেন, তারপর দুআ দিলেন, ঠিক এই ক্রমে। কুরতুবী লক্ষ করেন, ইয়াকুব (আঃ) বুঝেছিলেন ইউসুফ (আঃ) পরিবারের সবার উপরে উঠবেন, আর নিজের জন্য তাতে কিছু মনে করেননি। কারণ মানুষ চায় তার ছেলে তার চেয়ে ভালো হোক, কিন্তু ভাই ভাইয়ের জন্য তা চায় না। শুকরিয়ার কথাও এখানেই আসে। বালককে যে নিয়ামতের প্রতিশ্রুতি দেওয়া হলো, তা জুড়ে আছে ইবরাহীম ও ইসহাকের সঙ্গে, প্রজন্ম ধরে বয়ে আসা এক উপহার।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked in Its Own Words",
          "bn": "আয়াতের ভাষায় দুআ ও প্রশ্ন"
        },
        "p": [
          {
            "en": "The tafsir consulted here attaches no Sunnah supplication to these verses; the narration gives only the practice of seeking refuge after a disturbing dream. Here instead is a short prayer in the verses' own vocabulary, offered as such and not as a narration: O Allah, choose us, teach us the true meaning of what befalls us, and complete Your favour upon us and our families as You completed it upon Ibrahim and Ishaq before. Guard us from the plotting of Satan; You are the Knowing, the Wise.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তাতে এ দুই আয়াতের সঙ্গে সুন্নাহর কোনো দুআ জোড়া নেই। হাদিসটি শুধু এটুকু দেয়: অস্বস্তিকর স্বপ্ন দেখার পর আল্লাহর কাছে আশ্রয় চাওয়া। তার বদলে এখানে আয়াত দুটির শব্দে গাঁথা ছোট একটি দুআ, হাদিস হিসেবে নয়, নিজেদের দুআ হিসেবেই: হে আল্লাহ, আমাদের বেছে নিন, আমাদের উপর যা আসে তার আসল মর্ম বুঝতে শেখান। আমাদের উপর আর আমাদের পরিবারের উপর আপনার নিয়ামত পূর্ণ করুন, যেমন আগে পূর্ণ করেছিলেন ইবরাহীম ও ইসহাকের উপর। শয়তানের চক্রান্ত থেকে আমাদের রক্ষা করুন। আপনিই সর্বজ্ঞ, প্রজ্ঞাময়।"
          },
          {
            "en": "Questions to carry: who hears my good news first, and why them? When I fear someone's envy, can I protect what I have without deciding they are my enemy? Which favour on my parents and grandparents have I inherited without ever thanking Allah for it? When my children bring me their hopes, what do they take away? And whom have I written off whom Allah may yet bring back, as He brought back the brothers who asked for forgiveness at the end and were forgiven?",
            "bn": "দুই আয়াত থেকে সঙ্গে নেওয়ার মতো কিছু প্রশ্ন। আমার সুখবর প্রথমে কে শোনে, আর কেন সে-ই? কারও হিংসার ভয় পেলে আমি কি তাকে শত্রু না ভেবেও নিজের জিনিস আগলে রাখতে পারি? বাবা-মা আর দাদা-দাদির উপর আল্লাহর কোন নিয়ামত আমি উত্তরাধিকারে পেয়েছি, অথচ কখনো তার শুকরিয়া আদায় করিনি? সন্তানেরা যখন তাদের আশার কথা নিয়ে আমার কাছে আসে, তারা কী নিয়ে ফেরে? আর কাকে আমি বাতিল করে দিয়েছি, যাকে আল্লাহ হয়তো এখনো ফিরিয়ে আনবেন, যেমন ফিরিয়ে এনেছিলেন সেই ভাইদের, যারা শেষে ক্ষমা চেয়েছিল আর ক্ষমা পেয়েছিল?"
          }
        ]
      }
    ]
  },
  "12:10": {
    "sections": [
      {
        "h": {
          "en": "A Brake on the Plot",
          "bn": "ষড়যন্ত্রে এক লাগাম"
        },
        "p": [
          {
            "en": "The verse opens in the middle of a meeting. In 12:8 the brothers complain that Yusuf (AS) and his brother are dearer to their father than they are, though they are a whole band. In 12:9 the plan is spoken: kill Yusuf or cast him out to some land, so that your father's face is left for you alone, and afterwards you can be a righteous people. Then 12:10 begins qala qa'ilun minhum: a speaker among them said. The Qur'an gives him no name.",
            "bn": "আয়াতটি শুরু হয় এক বৈঠকের মাঝখান থেকে। ১২:৮ আয়াতে ভাইদের নালিশ: আমরা পুরো একটা দল, অথচ ইউসুফ (আঃ) আর তার ভাই আমাদের চেয়ে বাবার কাছে বেশি প্রিয়। ১২:৯ আয়াতে পরিকল্পনাটা মুখে আসে: ইউসুফকে মেরে ফেলো, নয়তো কোনো দূর দেশে ফেলে এসো, তাহলে বাবার দৃষ্টি শুধু তোমাদের দিকেই থাকবে, পরে না হয় ভালো মানুষ হয়ে যাবে। এরপর ১২:১০ আয়াতের শুরু: কালা কা-ইলুম মিনহুম, তাদের একজন বলল। কুরআন তার নাম বলে না।"
          },
          {
            "en": "Al-Muyassar gives the verse in one plain line: a speaker among Yusuf's brothers said, do not kill Yusuf, throw him into the depth of the well, and some passing travellers will pick him up, so that you are rid of him with no need to kill him, if you are resolved to do what you say. As-Sa'di places the speaker inside the group: he was one of the brothers who wanted Yusuf killed or sent far away. The objection comes from within the plot, not from outside it.",
            "bn": "মুয়াসসার আয়াতটিকে এক সরল বাক্যে বলে দেয়। ইউসুফের ভাইদের একজন বলল, ইউসুফকে মেরো না, তাকে কূপের গভীরে ফেলে দাও। পথচলতি কোনো যাত্রীদল তাকে তুলে নেবে, তাতে মারার দরকার ছাড়াই তোমরা তার হাত থেকে রেহাই পাবে, যদি যা বলছ তা করার পণ করেই থাকো। সা'দী বক্তাকে দলের ভেতরেই রাখেন। যে ভাইয়েরা ইউসুফকে মেরে ফেলতে বা দূরে সরিয়ে দিতে চেয়েছিল, সে তাদেরই একজন। আপত্তিটা তাই বাইরে থেকে আসেনি, এসেছে ষড়যন্ত্রের ভেতর থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Names, No Verdict",
          "bn": "তিনটি নাম, কোনো রায় নেই"
        },
        "p": [
          {
            "en": "Ibn Kathir gives the names together. Qatada and Muhammad ibn Ishaq said he was the eldest of them and his name was Rubil; as-Suddi said it was Yahudha; Mujahid said it was Sham'un. At-Tabari carries the reports with their chains. From Qatada: we were told it was Rubil, the eldest of them and the son of Yusuf's maternal aunt, and he forbade them to kill him. From Ibn Ishaq: it was mentioned to me, and Allah knows best, that it was Rubil, the most moderate of them in his view of Yusuf.",
            "bn": "ইবন কাসীর নামগুলো একসঙ্গে দেন। কাতাদা ও মুহাম্মাদ ইবন ইসহাক বলেছেন, সে ছিল তাদের সবার বড়, নাম রূবীল। সুদ্দী বলেছেন, কথাটা বলেছিল ইয়াহূযা। মুজাহিদ বলেছেন, সে শাম'ঊন। তাবারী বর্ণনাগুলো সনদসহ আনেন। কাতাদার সূত্রে: আমাদের জানানো হয়েছে, সে রূবীল, ভাইদের মধ্যে সবচেয়ে বড়, ইউসুফের খালাতো ভাই, আর সে-ই তাদের হত্যা করতে নিষেধ করেছিল। ইবন ইসহাকের সূত্রে: আমাকে বলা হয়েছে, আর আল্লাহই ভালো জানেন, সে রূবীল, ইউসুফের ব্যাপারে তাদের মধ্যে যার মত ছিল সবচেয়ে সংযত।"
          },
          {
            "en": "At-Tabari also has Ibn Abbas, through Ibn Jurayj, saying only that it was their eldest, who stayed behind. Al-Qurtubi opens with Yahudha, whom he calls the eldest son of Ya'qub, on the authority of Ibn Abbas; then Rubil, whom he makes the brother who later says I will not leave the land, in 12:80; then Sham'un. Al-Baghawi names Yahudha, cites Qatada for Rubil, and calls the first view more correct. So the sources differ even on who the eldest was. None settles it, and neither does this article.",
            "bn": "তাবারী ইবন জুরাইজের সূত্রে ইবন আব্বাস (রাঃ)-এর কথাও আনেন, সেখানে নাম নেই, শুধু এটুকু: কথাটা বলেছিল তাদের বড় ভাই, যে পেছনে থেকে গিয়েছিল। কুরতুবী শুরু করেন ইয়াহূযা দিয়ে, ইবন আব্বাস (রাঃ)-এর বরাতে, আর তাকে বলেন ইয়া'কূবের বড় ছেলে। তারপর রূবীল, যাকে তিনি সেই ভাই বলে চিনিয়ে দেন, যে ১২:৮০ আয়াতে বলবে, আমি এ দেশ ছেড়ে যাব না। তারপর শাম'ঊন। বাগাভী ইয়াহূযার নাম নেন, কাতাদার বরাতে রূবীলের কথা আনেন, আর প্রথম মতটিকে বেশি সঠিক বলেন। বড় ভাই কে, তা নিয়েও তাই সূত্রগুলো একমত নয়। কোনোটিই বিষয়টা মীমাংসা করে না, এ লেখাও করবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Less Evil, Still Evil",
          "bn": "কম মন্দ, তবু মন্দ"
        },
        "p": [
          {
            "en": "As-Sa'di reads the objection as a weighing of harms. Do not kill Yusuf, because killing him is the greater sin and the uglier, and the aim can be reached by putting him far from his father without killing him. He then says of this speaker that he was the best of them in his view of Yusuf, and the most dutiful and God-fearing of them in this affair, for some evil is lighter than some, and a light harm is used to push away a heavy harm.",
            "bn": "সা'দী আপত্তিটাকে দেখেন দুই ক্ষতির মধ্যে মাপজোখ হিসেবে। ইউসুফকে মেরো না, কারণ তাকে হত্যা করা বড় গুনাহ, বেশি জঘন্যও। আর তোমরা যা চাও, তা তো হত্যা ছাড়াই বাবার কাছ থেকে তাকে দূরে সরিয়ে দিলেই হাসিল হয়। এরপর তিনি এই বক্তা সম্পর্কে বলেন, ইউসুফের ব্যাপারে তার মতই ছিল সবার চেয়ে ভালো, আর এ ঘটনায় সে-ই ছিল তাদের মধ্যে সবচেয়ে কর্তব্যপরায়ণ ও আল্লাহভীরু। কারণ কিছু মন্দ অন্য কিছু মন্দের চেয়ে হালকা, আর হালকা ক্ষতি দিয়ে ভারী ক্ষতি ঠেকানো যায়।"
          },
          {
            "en": "Al-Baghawi gives the reason in the speaker's own reported words: killing is a great major sin. Ibn Kathir glosses la taqtulu as do not let your enmity and hatred of him go as far as killing him. Then comes the closing clause, in kuntum fa'ilin. At-Tabari takes it to mean if you are going to do what I tell you; Ibn Kathir, al-Muyassar and al-Baghawi as if you are resolved on what you are saying. Either way, the speaker does not call his plan good. He offers it only to men already set on acting.",
            "bn": "বাগাভী কারণটা আনেন বক্তার নিজের মুখের কথা হিসেবে: হত্যা এক মহা কবীরা গুনাহ। ইবন কাসীর লা তাকতুলূর ব্যাখ্যা দেন এভাবে: তার প্রতি তোমাদের শত্রুতা আর বিদ্বেষ যেন হত্যা পর্যন্ত না গড়ায়। তারপর শেষ অংশ, ইন কুনতুম ফা-ইলীন। তাবারীর ব্যাখ্যায় এর অর্থ, আমি যা বলছি তা যদি তোমরা করতেই যাও। ইবন কাসীর, মুয়াসসার ও বাগাভীর ব্যাখ্যায়, যা বলছ তা করার যদি পণ করেই থাকো। যে অর্থেই নেওয়া হোক, বক্তা নিজের প্রস্তাবকে ভালো বলে না। সে এটা রাখে কেবল তাদের সামনে, যারা কিছু একটা করবেই বলে ঠিক করে ফেলেছে।"
          },
          {
            "en": "Here the verse becomes a mirror. The speaker did not turn the group back. The well was still a wrong, and 12:15 shows them agreeing to put him in it. But his sentence moved the line from a death to a life that could still be found. The lesson is not that a lesser wrong becomes right because a worse one was on the table. It is that one voice, raised inside a room that has already decided, can still change what happens to the person outside it.",
            "bn": "এখানে এসে আয়াতটি আয়না হয়ে ওঠে। বক্তা দলটিকে ফেরাতে পারেনি। কূপে ফেলাও ছিল অন্যায়, আর ১২:১৫ আয়াতে দেখা যায় তারা তাকে সেখানে ফেলতেই একমত হলো। তবু তার এক বাক্যে সীমারেখা সরে গেল মৃত্যু থেকে এমন এক জীবনের দিকে, যাকে তখনো খুঁজে পাওয়া সম্ভব। শিক্ষাটা এই নয় যে বড় অন্যায়ের প্রস্তাব সামনে ছিল বলে ছোট অন্যায় ন্যায় হয়ে যায়। শিক্ষা হলো, যে ঘরে সিদ্ধান্ত হয়ে গেছে, সেখানে উঠে আসা একটি কণ্ঠও বাইরের মানুষটির ভাগ্য বদলে দিতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where His News Would Vanish",
          "bn": "যেখানে খবর হারিয়ে যায়"
        },
        "p": [
          {
            "en": "Ghayabat al-jubb. At-Tabari explains it as the bottom of the well, where news of him would vanish; a ghayaba is anything that hides a thing, and the jubb is a well not lined with stone. Al-Baghawi adds that it was so called because it was cut into the earth and left unlined. Al-Qurtubi quotes al-Harawi: the ghayaba is like a ledge or niche in the well, a little above the water, that hides a thing from the eye. The two words are joined, he says, because they meant a dark place in the well where no onlooker's gaze would reach him.",
            "bn": "গায়াবাতিল জুব্ব। তাবারী এর ব্যাখ্যা দেন কূপের তলদেশ হিসেবে, যেখানে তার খবর হারিয়ে যাবে। যা কিছু কোনো জিনিসকে আড়াল করে, তা-ই গায়াবা, আর জুব্ব হলো এমন কূপ যার দেয়াল পাথরে বাঁধানো নয়। বাগাভী যোগ করেন, মাটি কেটে খুঁড়ে বাঁধাই না করে রেখে দেওয়া হয় বলেই এর এ নাম। কুরতুবী হারাবীর কথা আনেন: গায়াবা হলো কূপের ভেতরে পানির একটু উপরে তাকের মতো একটা খাঁজ, যা জিনিসকে চোখের আড়াল করে। তিনি বলেন, শব্দ দুটি একসঙ্গে এসেছে, কারণ তারা চেয়েছিল কূপের এমন অন্ধকার জায়গায় তাকে রাখতে, যেখানে কারও দৃষ্টি পৌঁছাবে না।"
          },
          {
            "en": "Where the well lay, the sources give only reports. Qatada, in at-Tabari and in Ibn Kathir, says it was a well in Bayt al-Maqdis. At-Tabari also records Ibn Abbas, through Ibn Jurayj, calling it a well in al-Sham. Al-Qurtubi gives the Bayt al-Maqdis report under it is said, then Wahb ibn Munabbih placing it in al-Urdunn, and Muqatil putting it three farsakhs from Ya'qub's home. These are narrations, not a fixed site, and they do not agree. The verse itself names only a well, and the darkness at its bottom.",
            "bn": "কূপটি কোথায় ছিল, এ নিয়ে সূত্রগুলোতে আছে কেবল কিছু বর্ণনা। তাবারী ও ইবন কাসীরে কাতাদা বলেন, সেটি বাইতুল মাকদিসের একটি কূপ। তাবারী ইবন জুরাইজের সূত্রে ইবন আব্বাস (রাঃ)-এর কথাও আনেন: শামের একটি কূপ। কুরতুবী বাইতুল মাকদিসের কথাটি আনেন 'বলা হয়' দিয়ে, তারপর ওয়াহব ইবন মুনাব্বিহের মত, কূপটি উরদুনে, আর মুকাতিলের মত, ইয়া'কূব (আঃ)-এর বাড়ি থেকে ৩ ফারসাখ দূরে। এগুলো বর্ণনা মাত্র, নির্দিষ্ট কোনো জায়গা নয়, আর এগুলো পরস্পর মেলেও না। আয়াত নিজে শুধু একটি কূপের কথা বলে, আর তার তলার অন্ধকারের।"
          }
        ]
      },
      {
        "h": {
          "en": "Found Without Being Sought",
          "bn": "না খুঁজেই যা মেলে"
        },
        "p": [
          {
            "en": "Yaltaqithu: some of the travellers will pick him up. Al-Baghawi defines iltiqat as taking a thing from where the finder did not reckon on it, and al-Qurtubi quotes Ibn Arafa: finding a thing without seeking it. At-Tabari explains the sayyara as passers-by on the road, and records Ibn Abbas, through Ibn Jurayj, saying that some Bedouin picked him up. Al-Qurtubi sees calculation in the proposal: a traveller would carry the boy far away, so the brothers need not travel themselves, since their father might refuse them leave, or discover what they meant.",
            "bn": "ইয়ালতাকিতহু: কোনো যাত্রীদল তাকে তুলে নেবে। বাগাভীর সংজ্ঞায় ইলতিকাত মানে এমন জায়গা থেকে কিছু তুলে নেওয়া, যেখানে তা পাওয়ার কথা ভাবাই হয়নি। কুরতুবী ইবন আরাফার কথা আনেন: না খুঁজেই কোনো কিছু পেয়ে যাওয়া। তাবারী সাইয়ারার ব্যাখ্যা দেন পথচলতি মুসাফির হিসেবে, আর ইবন জুরাইজের সূত্রে ইবন আব্বাস (রাঃ)-এর কথা আনেন: কিছু বেদুইন তাকে তুলে নিয়েছিল। কুরতুবী প্রস্তাবটিতে হিসাব দেখতে পান। যাত্রীরাই ছেলেটিকে দূরে নিয়ে যাবে, ভাইদের নিজেদের সফর করতে হবে না। কারণ বাবা হয়তো অনুমতি দেবেন না, কিংবা তাদের মতলব টের পেয়ে যাবেন।"
          },
          {
            "en": "The word also told the commentators something about his age. Al-Qurtubi reports Malik, through Ibn Wahb and Ibn al-Qasim, saying that Yusuf (AS) was a boy when he was thrown into the well. The proof offered there is that only the small are picked up this way, and that the wolf Ya'qub (AS) fears in 12:13 threatens the young. Ma'arif al-Qur'an adds that, as reported by Ibn Jarir, Ibn al-Mundhir and Ibn Abi Shaybah, he was seven years old then. That figure is Ma'arif's report alone; it is not in the Arabic commentaries read for this verse.",
            "bn": "শব্দটি থেকে তাফসীরকারেরা তাঁর বয়স সম্পর্কেও কিছু বুঝেছেন। কুরতুবী ইবন ওয়াহব ও ইবনুল কাসিমের সূত্রে মালিকের কথা আনেন: কূপে ফেলার সময় ইউসুফ (আঃ) ছিলেন বালক। প্রমাণ হিসেবে সেখানে বলা হয়েছে, এভাবে কুড়িয়ে নেওয়া হয় কেবল ছোটদেরই, আর ১২:১৩ আয়াতে ইয়া'কূব (আঃ) যে নেকড়ের ভয় করেন, সে ভয় ছোটদের বেলাতেই খাটে। মাআরিফুল কুরআন যোগ করে, ইবন জারীর, ইবনুল মুনযির ও ইবন আবী শাইবার বর্ণনা অনুযায়ী তখন তাঁর বয়স ছিল ৭ বছর। এই সংখ্যাটি কেবল মাআরিফের বর্ণনা, এ আয়াতের জন্য পড়া আরবি তাফসীরগুলোতে তা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Foundling Is Presumed Free",
          "bn": "কুড়িয়ে পাওয়া শিশু স্বাধীন"
        },
        "p": [
          {
            "en": "From this one verb al-Qurtubi opens a long passage of law, since iltiqat gives both the laqit, the foundling, and the luqata, the found object. On the foundling he reports that the principle is freedom, because the free outnumber the enslaved. He records that al-Hasan ibn Ali (RA) judged a foundling free and recited and they sold him for a paltry price, a few dirhams, from 12:20; that this was the view of Umar ibn al-Khattab (RA), and is reported from Ali (RA); and that Malik, in the Muwatta, says the foundling is free.",
            "bn": "এই একটি ক্রিয়া থেকে কুরতুবী ফিকহের দীর্ঘ আলোচনা শুরু করেন। কারণ ইলতিকাত থেকেই এসেছে লাকীত, অর্থাৎ কুড়িয়ে পাওয়া শিশু, আর লুকাতা, অর্থাৎ কুড়িয়ে পাওয়া জিনিস। শিশুর ব্যাপারে তিনি জানান, মূল নীতি হলো সে স্বাধীন, কারণ মানুষের মধ্যে স্বাধীনরাই বেশি। তিনি উল্লেখ করেন, হাসান ইবন আলী (রাঃ) এক কুড়িয়ে পাওয়া শিশুকে স্বাধীন বলে রায় দেন এবং ১২:২০ আয়াত তিলাওয়াত করেন: আর তারা তাকে বেচে দিল সামান্য দামে, গোনা কয়েকটি দিরহামে। উমার ইবনুল খাত্তাব (রাঃ)-এর মতও এটাই, আলী (রাঃ) থেকেও এমন বর্ণনা আছে। আর মালিক মুওয়াত্তায় বলেন, কুড়িয়ে পাওয়া শিশু স্বাধীন।"
          },
          {
            "en": "On found property al-Qurtubi cites the hadith of Zayd ibn Khalid al-Juhani (RA), and the wording he gives matches a version al-Bukhari records in his Sahih, number 2372. It is a general narration about lost things, and al-Qurtubi brings it only because the verse uses the verb of finding. No tafsir read for this verse attaches this or any other hadith to the verse itself. The narration follows, translated here from al-Bukhari's Arabic.",
            "bn": "কুড়িয়ে পাওয়া জিনিসের ব্যাপারে কুরতুবী যায়দ ইবন খালিদ জুহানী (রাঃ)-এর হাদীস আনেন। তিনি যে শব্দে তা উদ্ধৃত করেন, বুখারী তাঁর সহীহ গ্রন্থে ২৩৭২ নম্বরে সেই শব্দেরই একটি বর্ণনা এনেছেন। হারানো জিনিস নিয়ে এটি একটি সাধারণ হাদীস, কুরতুবী এনেছেন শুধু এ কারণে যে আয়াতে কুড়িয়ে পাওয়ার ক্রিয়াটি এসেছে। এ আয়াতের জন্য পড়া কোনো তাফসীর এটিকে বা অন্য কোনো হাদীসকে আয়াতটির সঙ্গে যুক্ত করেনি। বুখারীর আরবি থেকে অনুবাদ করে হাদীসটি নিচে দেওয়া হলো।"
          },
          {
            "en": "Zayd ibn Khalid (RA) said: A man came to the Messenger of Allah ﷺ and asked him about a found thing. He said: Know its container and its tie, then make it known for a year; if its owner comes, [return it], and if not, it is yours to deal with. He asked: And a stray sheep? He said: It is for you, or for your brother, or for the wolf. He asked: And a stray camel? He said: What have you to do with it? It has its water-skin and its feet; it comes down to water and eats from the trees until its owner meets it.",
            "bn": "যায়দ ইবন খালিদ (রাঃ) বলেন: এক ব্যক্তি আল্লাহর রাসূল ﷺ-এর কাছে এসে কুড়িয়ে পাওয়া জিনিস সম্পর্কে জিজ্ঞেস করল। তিনি বললেন: এর থলে আর বাঁধনের রশি চিনে রাখো, তারপর এক বছর ধরে ঘোষণা দিতে থাকো। মালিক এলে [তাকে ফিরিয়ে দাও], না এলে তা দিয়ে তুমি যা ইচ্ছা করো। সে জিজ্ঞেস করল: আর হারানো ছাগল? তিনি বললেন: সেটা তোমার, নয়তো তোমার ভাইয়ের, নয়তো নেকড়ের। সে জিজ্ঞেস করল: আর হারানো উট? তিনি বললেন: ওটার সঙ্গে তোমার কী? ওর সঙ্গে আছে পানির মশক আর পায়ের খুর। সে পানির ঘাটে যায়, গাছের পাতা খায়, যতক্ষণ না মালিক তাকে খুঁজে পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Prophets, or Not Yet?",
          "bn": "নবী, নাকি তখনো নন?"
        },
        "p": [
          {
            "en": "Al-Qurtubi asks the question this verse forces. He first says it shows that Yusuf's brothers were not prophets, neither at first nor later, since prophets do not plan the killing of a Muslim; they were Muslims who committed a sin and then repented. He reports a second view, that they were prophets and a prophet's lapse is not rationally impossible, and rejects it because prophets are protected from major sins. A third view is that they were not prophets at that time and Allah made them prophets afterwards, and of this he says: it is more likely, and Allah knows best.",
            "bn": "এ আয়াত যে প্রশ্ন সামনে আনে, কুরতুবী তা তোলেন। প্রথমে তিনি বলেন, এ থেকে বোঝা যায় ইউসুফের ভাইয়েরা নবী ছিলেন না, আগেও না, পরেও না। কারণ নবীরা কোনো মুসলিমকে হত্যার পরিকল্পনা করেন না। তারা ছিল মুসলিম, গুনাহ করেছিল, পরে তওবা করেছিল। দ্বিতীয় একটি মত তিনি উল্লেখ করেন: তারা নবী ছিলেন, আর নবীর পদস্খলন যুক্তির বিচারে অসম্ভব নয়। এ মত তিনি নাকচ করেন, কারণ নবীরা কবীরা গুনাহ থেকে সুরক্ষিত। তৃতীয় মত: তখন তারা নবী ছিল না, পরে আল্লাহ তাদের নবুওয়াত দেন। এ সম্পর্কে তিনি বলেন: এটিই বেশি সম্ভাব্য, আর আল্লাহই ভালো জানেন।"
          },
          {
            "en": "Al-Baghawi takes the third line: they were adults then, and not yet prophets. Some said they were not yet adults, and he rejects it, since they spoke of being a righteous people afterwards, in 12:9, and later asked forgiveness for their sins, in 12:97, and a small child has no sin. He reports Abu Amr ibn al-Ala, asked how they could talk of going out to play while being prophets, answering that it was before Allah made them prophets. This article takes no side on their rank. It judges the act the verse describes, and leaves the men to Allah.",
            "bn": "বাগাভী তৃতীয় পথ ধরেন: তারা তখন প্রাপ্তবয়স্ক ছিল, তবে তখনো নবী হয়নি। কেউ কেউ বলেছেন তারা তখনো প্রাপ্তবয়স্ক হয়নি, বাগাভী তা মানেন না। কারণ ১২:৯ আয়াতে তারা পরে সৎ লোক হয়ে যাওয়ার কথা বলেছিল, আর ১২:৯৭ আয়াতে গুনাহের জন্য ক্ষমা চেয়েছিল, অথচ ছোট শিশুর কোনো গুনাহ নেই। তিনি আবু আমর ইবনুল আলার কথা আনেন। তাঁকে জিজ্ঞেস করা হয়েছিল, নবী হয়ে তারা খেলতে যাওয়ার কথা বলল কীভাবে? তিনি বলেন, সেটা আল্লাহ তাদের নবুওয়াত দেওয়ার আগের কথা। তাদের মর্যাদা নিয়ে এ লেখা কোনো পক্ষ নেয় না। আয়াত যে কাজের বর্ণনা দেয়, বিচার শুধু সেই কাজের, মানুষগুলোর বিষয় আল্লাহর হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgiven So None Despair",
          "bn": "যাতে কেউ নিরাশ না হয়"
        },
        "p": [
          {
            "en": "Muhammad ibn Ishaq, in a report Ibn Kathir traces to Ibn Abi Hatim, names what the brothers had agreed on: cutting the ties of kinship, undutifulness to a father, and little tenderness for a small boy who had done no wrong, or for an aged father with his right, his honour and his standing with Allah. They meant to part an old man of weakening bones from the son he loved, and a small boy from the father he needed. Then he adds: may Allah forgive them, and He is the Most Merciful of the merciful.",
            "bn": "ইবন কাসীর ইবন আবী হাতিমের সূত্রে মুহাম্মাদ ইবন ইসহাকের একটি কথা আনেন। ভাইয়েরা কীসের উপর একমত হয়েছিল, তিনি তা গুনে দেখান: আত্মীয়তার বন্ধন ছিন্ন করা, পিতার অবাধ্য হওয়া, নিরপরাধ এক ছোট ছেলের প্রতি দয়ার অভাব। আর এক বৃদ্ধ পিতার প্রতিও, যাঁর হক আছে, সম্মান আছে, আল্লাহর কাছে মর্যাদা আছে। তারা চেয়েছিল দুর্বল হাড়ের এক বৃদ্ধকে তাঁর প্রিয় ছেলে থেকে আলাদা করতে, আর এক ছোট ছেলেকে সেই পিতা থেকে, যাঁকে তার দরকার ছিল। তারপর তিনি বলেন: আল্লাহ তাদের ক্ষমা করুন, তিনিই সবচেয়ে বড় দয়ালু।"
          },
          {
            "en": "Al-Baghawi's version of that list adds betraying a trust, breaking a pledge and lying to their father, and closes: Allah pardoned them all of it, so that no one should despair of His mercy. He also reports some scholars saying they had resolved to kill him and Allah held them back out of mercy to them; had they done it, they would all have perished. Ibn Kathir sees the same hand: they had no way to kill him, because Allah willed for Yusuf (AS) revelation and rule in Egypt, and turned them aside through what he calls Rubil's words.",
            "bn": "বাগাভীর বর্ণনায় ওই তালিকায় আরও আছে আমানতের খেয়ানত, অঙ্গীকার ভঙ্গ আর পিতার সঙ্গে মিথ্যা বলা। শেষ কথাটি হলো, আল্লাহ এর সবই তাদের মাফ করে দিয়েছেন, যাতে কেউ তাঁর রহমত থেকে নিরাশ না হয়। তিনি কিছু আলেমের কথাও আনেন: তারা তাকে হত্যার সিদ্ধান্ত নিয়েছিল, আল্লাহ দয়া করে তাদের বিরত রাখেন, করে ফেললে সবাই ধ্বংস হয়ে যেত। ইবন কাসীরও একই হাত দেখেন। তাকে হত্যা করার কোনো পথ তাদের ছিল না, কারণ আল্লাহ ইউসুফ (আঃ)-এর জন্য ওয়াহী আর মিসরের শাসন স্থির করে রেখেছিলেন। তিনি তাদের ফিরিয়ে দেন সেই কথা দিয়ে, যাকে ইবন কাসীর রূবীলের কথা বলেন।"
          },
          {
            "en": "This needs saying plainly. The verse describes what these brothers planned in one family's story, and the surah later gives their own confession. It licenses nothing against any living person or community, including any people who trace their descent to Ya'qub (AS). What the verse holds out to the listener is the one voice that slowed them. In a room where harm has been agreed, say at least: do not kill him. Then do not rest at the lesser harm, when the better word was no harm at all.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি পরিবারের কাহিনিতে এই ভাইদের পরিকল্পনার বর্ণনা দেয়, আর সূরাটি পরে তাদের নিজেদের মুখেই স্বীকারোক্তি এনেছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না, যারা নিজেদের ইয়া'কূব (আঃ)-এর বংশধর বলে, তাদের বিরুদ্ধেও না। শ্রোতার সামনে আয়াতটি তুলে ধরে সেই একটি কণ্ঠ, যা তাদের ধীর করে দিয়েছিল। যে ঘরে ক্ষতির সিদ্ধান্ত হয়ে গেছে, সেখানে অন্তত বলুন: তাকে মেরো না। তারপর ছোট ক্ষতিতে থেমে যাবেন না, কারণ আরও ভালো কথা ছিল, কোনো ক্ষতিই নয়।"
          }
        ]
      }
    ]
  },
  "12:13": {
    "sections": [
      {
        "h": {
          "en": "Asked to Send Him Tomorrow",
          "bn": "কাল ওকে পাঠিয়ে দিন"
        },
        "p": [
          {
            "en": "Surah Yusuf sets the scene in a few verses. In 12:8 and 12:9 the brothers resent that Yusuf and his brother are dearer to their father than they are, and talk of killing him or casting him out to some land; in 12:10 one of them proposes the well instead. Then they go to Ya'qub (AS). In 12:11 they ask why he does not trust them with Yusuf when they wish him well, and in 12:12 they ask outright: send him with us tomorrow, let him enjoy himself and play, and we will guard him.",
            "bn": "সূরা ইউসুফ কয়েকটি আয়াতেই পটভূমি সাজিয়ে দেয়। ১২:৮ ও ১২:৯ আয়াতে ভাইদের ক্ষোভ, ইউসুফ আর তার ভাই বাবার কাছে তাদের চেয়ে বেশি প্রিয়। তারা তাকে মেরে ফেলার বা দূরে কোথাও ফেলে আসার কথা বলাবলি করে। ১২:১০ আয়াতে তাদেরই একজন বদলে কূপের প্রস্তাব দেয়। এরপর তারা ইয়াকুব (আঃ)-এর কাছে যায়। ১২:১১ আয়াতে জানতে চায়, আমরা তো ওর ভালোই চাই, তবু আপনি ইউসুফের ব্যাপারে আমাদের বিশ্বাস করেন না কেন? আর ১২:১২ আয়াতে সরাসরি আবদার: কাল ওকে আমাদের সঙ্গে পাঠিয়ে দিন, ও মজা করবে, খেলবে, আমরা ওকে আগলে রাখব।"
          },
          {
            "en": "12:13 is the father's answer, thirteen Arabic words. Ibn Kathir frames it exactly so: Ya'qub said to his sons, in reply to what they had asked of him, sending Yusuf with them to graze in the open country. The answer is short and it has two halves, a grief and a fear. In 12:14 the brothers reply, and in 12:15 they take him. What happened at the well, and how they came home, belongs to the verses after; this one stays inside the house, on the eve of the journey.",
            "bn": "১২:১৩ আয়াত বাবার জবাব, আরবিতে মোট ১৩টি শব্দ। ইবন কাসীর ঠিক এভাবেই প্রসঙ্গটা ধরেন: ছেলেরা ইউসুফকে সঙ্গে নিয়ে মাঠে পশু চরাতে যাওয়ার অনুমতি চেয়েছিল, তার জবাবে ইয়াকুব (আঃ) এ কথা বলেন। জবাবটা ছোট, আর তার দুটি ভাগ। একটা দুঃখ, একটা ভয়। ১২:১৪ আয়াতে ভাইয়েরা উত্তর দেয়, আর ১২:১৫ আয়াতে তাকে নিয়ে যায়। কূপের কাছে কী ঘটল, তারা কীভাবে ঘরে ফিরল, সেসব পরের আয়াতের কথা। এ আয়াত ঘরের ভেতরেই থাকে, যাত্রার আগের দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Obstacles in One Sentence",
          "bn": "এক বাক্যে দুই বাধা"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as a father laying two separate obstacles in the way of the request. The first: the mere fact of your going with him grieves me and weighs on me, because I cannot bear to be parted from him even for a short while; this, he writes, is one obstacle to sending him. Then, at the wa, and, comes a second obstacle: I fear the wolf will eat him while you are heedless of him, because he is young and cannot hold off a wolf.",
            "bn": "সা'দী আয়াতটিকে এভাবে পড়েন: বাবা ছেলেদের আবদারের সামনে আলাদা দুটি বাধা রাখছেন। প্রথমটা হলো, তোমরা ওকে নিয়ে যাবে, শুধু এটুকুই আমাকে কষ্ট দেয়, ভারী লাগে। কারণ অল্প সময়ের জন্যও ওর বিচ্ছেদ আমি সইতে পারি না। সা'দী বলেন, ওকে পাঠানোর পথে এটা একটা বাধা। তারপর 'ওয়া', অর্থাৎ 'আর', থেকে শুরু দ্বিতীয় বাধা: আমার ভয় হয়, তোমরা যখন ওর দিকে খেয়াল রাখবে না, নেকড়ে ওকে খেয়ে ফেলবে। কারণ ও ছোট, নেকড়ের হাত থেকে নিজেকে বাঁচাতে পারবে না।"
          },
          {
            "en": "At-Tabari joins the halves instead of separating them. His paraphrase: Ya'qub said to them, it grieves me that you take him with you to the open country, out of fear for him from the wolf, that it eat him while you are heedless and do not perceive. In his wording the fear is the reason for the grief, one feeling with its cause, where as-Sa'di counts two. The Arabic carries both readings, and neither commentator argues against the other; the difference lies in how each lays out the sentence.",
            "bn": "তাবারী দুই ভাগকে আলাদা না করে জুড়ে দেন। তাঁর ভাষ্য: ইয়াকুব তাদের বললেন, তোমরা ওকে সঙ্গে করে মাঠে নিয়ে যাবে, এতে আমার দুঃখ হয়। দুঃখটা ওর জন্য নেকড়ের ভয়ে, পাছে তোমরা বেখেয়াল থাকো, টেরও না পাও, আর নেকড়ে ওকে খেয়ে ফেলে। তাবারীর বাক্যে ভয়টাই দুঃখের কারণ, অর্থাৎ অনুভূতি একটাই, সঙ্গে তার কারণ। সা'দী সেখানে দুটো গোনেন। আরবি বাক্যে দুই পাঠেরই জায়গা আছে, আর কোনো মুফাসসির অন্যজনের বিরুদ্ধে যুক্তি দেন না। তফাতটা শুধু বাক্যটা সাজানোর ধরনে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ache Before Parting",
          "bn": "বিদায়ের আগেই ব্যথা"
        },
        "p": [
          {
            "en": "Al-Baghawi defines the word itself: huzn here is the pain of the heart at parting from one who is loved. The Muyassar says the same in its own words: his separation from me, when you take him to the pastures, pains my soul. Al-Qurtubi notes the grammar. An tadhhabu bihi stands in the position of the subject, meaning your going with him, so that it is the going itself that grieves. He is, al-Qurtubi says, telling them of his grief at Yusuf's absence.",
            "bn": "বাগাভী শব্দটার সংজ্ঞাই দিয়ে দেন: এখানে 'হুযন' মানে প্রিয়জনের বিচ্ছেদে হৃদয়ের ব্যথা। মুয়াসসার নিজের ভাষায় একই কথা বলে: তোমরা ওকে চারণভূমিতে নিয়ে গেলে ওর বিচ্ছেদ আমার মনকে ব্যথা দেয়। কুরতুবী ব্যাকরণের দিকটা দেখান। 'আন তাযহাবূ বিহী' বাক্যে কর্তার জায়গায় বসেছে, মানে তোমাদের ওকে নিয়ে যাওয়া। অর্থাৎ দুঃখ দিচ্ছে যাওয়াটাই। কুরতুবীর ভাষায়, ইউসুফ চোখের আড়াল হলে তাঁর যে দুঃখ হবে, তিনি ছেলেদের সেটাই জানাচ্ছেন।"
          },
          {
            "en": "Ibn Kathir explains where the grief comes from. It is hard on me, he has Ya'qub (AS) say, to be parted from him for as long as you are away with him, until he returns. He gives the reason: the excess of his love for the boy, because of the great good he discerned in him, the marks of prophethood, and completeness in character and in form. In this reading the grief is not weakness; it is a father who sees what his son is. Notice too the tense: yahzununi, it grieves me, is present. The parting has not happened yet, and the grief already has.",
            "bn": "দুঃখটা কোথা থেকে আসে, ইবন কাসীর তা খুলে বলেন। তাঁর ভাষ্যে ইয়াকুব (আঃ) বলছেন: তোমরা ওকে নিয়ে যতক্ষণ বাইরে থাকবে, ও ফিরে না আসা পর্যন্ত ওর থেকে আলাদা থাকা আমার জন্য কঠিন। কারণটাও তিনি বলে দেন: ছেলের প্রতি বাবার গভীর ভালোবাসা। তিনি ওর মধ্যে বড় কল্যাণের আভাস দেখতেন, নবুওয়াতের লক্ষণ, স্বভাবে আর চেহারায় পূর্ণতা। এ পাঠে দুঃখটা দুর্বলতা নয়। এ এমন এক বাবার দুঃখ, যিনি জানেন তাঁর ছেলে কে। আরবি ক্রিয়াটাও খেয়াল করার মতো। 'ইয়াহযুনুনী', আমাকে দুঃখ দেয়, বর্তমান কালের ক্রিয়া। বিচ্ছেদ এখনো ঘটেনি, অথচ দুঃখ শুরু হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Beast From Every Side",
          "bn": "যে আসে সব দিক থেকে"
        },
        "p": [
          {
            "en": "Al-Qurtubi pauses on the word for wolf. Adh-dhi'b, he reports from Ahmad ibn Yahya, is taken from tadha'abat ar-rih, said of the wind when it comes from every direction; the word carries a hamza, Ahmad ibn Yahya says, because the wolf comes from every side. Al-Qurtubi then notes a reading. Warsh, from Nafi', reads adh-dhib without the hamza, because the hamza there is silent and follows a kasra, so it was lightened and became a ya.",
            "bn": "কুরতুবী নেকড়ে শব্দটার কাছে একটু থামেন। আহমাদ ইবন ইয়াহইয়ার বরাতে তিনি জানান, 'আয-যি'ব' এসেছে 'তাযাআবাতির রীহ' থেকে। বাতাস যখন চারদিক থেকে বইতে থাকে, তখন এ কথা বলা হয়। আহমাদ ইবন ইয়াহইয়া বলেন, শব্দটায় হামযা আছে, কারণ নেকড়ে আসে সব দিক থেকে। তারপর কুরতুবী একটি কিরাআতের কথা বলেন। ওয়ারশ নাফি' থেকে হামযা ছাড়াই 'আয-যীব' পড়েন। সেখানে হামযা সাকিন, তার আগে কাসরা, তাই উচ্চারণ হালকা করতে গিয়ে হামযা 'ইয়া' হয়ে গেছে।"
          },
          {
            "en": "The second half of the fear is wa-antum 'anhu ghafilun, while you are heedless of him. Every gloss of ghafilun in these commentaries describes distraction. Al-Qurtubi: occupied with the grazing. The Muyassar: heedless and busy. Ibn Kathir fills in the scene: I fear you will be taken up with your shooting and your herding, and a wolf will come and eat him while you do not notice. At-Tabari glosses the word as la tash'urun, you do not perceive, and as-Sa'di reads the clause as a state: at the time of your heedlessness.",
            "bn": "ভয়ের দ্বিতীয় অংশ 'ওয়া আনতুম আনহু গাফিলূন', আর তোমরা থাকবে ওর ব্যাপারে বেখেয়াল। এ তাফসীরগুলোতে 'গাফিলূন' শব্দের যত ব্যাখ্যা এসেছে, সবই অন্যমনস্কতার কথা বলে। কুরতুবী: পশু চরানোয় ব্যস্ত। মুয়াসসার: বেখেয়াল, অন্য কাজে মগ্ন। ইবন কাসীর পুরো দৃশ্যটা এঁকে দেন: আমার ভয় হয়, তোমরা তীর ছোড়া আর পশু চরানো নিয়ে মেতে থাকবে, এর মধ্যে নেকড়ে এসে ওকে খেয়ে ফেলবে, আর তোমরা টেরও পাবে না। তাবারী শব্দটার অর্থ করেন 'লা তাশউরূন', তোমরা টের পাবে না। আর সা'দী অংশটাকে অবস্থার বর্ণনা হিসেবে পড়েন: তোমাদের বেখেয়াল থাকার মুহূর্তে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Dream Behind the Fear",
          "bn": "ভয়ের পেছনে এক স্বপ্ন"
        },
        "p": [
          {
            "en": "Why a wolf, of all dangers? Two commentators answer with a dream, and they report it with different degrees of confidence. Al-Qurtubi gives it as the account of al-Kalbi: Ya'qub (AS) saw in his sleep that the wolf attacked Yusuf, and that is why he feared it for him. Al-Baghawi states the same dream without naming anyone, as the reason behind the words: Ya'qub had seen in a dream that a wolf sprang on Yusuf, he feared it, and so he said this. Neither gives a chain of narration for it in the text.",
            "bn": "এত বিপদ থাকতে নেকড়ে কেন? দুজন মুফাসসির এর উত্তরে একটি স্বপ্নের কথা আনেন, তবে দুজনের ভাষায় নিশ্চয়তার মাত্রা আলাদা। কুরতুবী একে কালবীর বর্ণনা হিসেবে দেন: ইয়াকুব (আঃ) ঘুমের মধ্যে দেখেছিলেন, নেকড়ে ইউসুফের উপর ঝাঁপিয়ে পড়ছে। সে কারণেই তিনি ওর জন্য নেকড়েকে ভয় করতেন। বাগাভী কারও নাম না নিয়ে একই স্বপ্নকে এ কথার কারণ হিসেবে বলেন: ইয়াকুব স্বপ্নে দেখেছিলেন একটি নেকড়ে ইউসুফের উপর হামলা করছে, তাই তাঁর ভয় ছিল, আর সেজন্যই এ কথা বলেন। দুজনের কেউই পাঠে এর বর্ণনাসূত্র দেন না।"
          },
          {
            "en": "Al-Qurtubi then brings a fuller version under the words it is said. Ya'qub saw himself on the top of a mountain, with Yusuf in the bed of the valley; ten wolves had surrounded the boy, wanting to eat him, and one of them held the rest off; then the earth split and Yusuf hid in it for three days. The report explains itself: the ten were his brothers, when they joined in plotting to kill him; the one who defended him was the eldest, Yahudha; and the hiding in the earth was his three days in the pit. Ma'arif al-Qur'an retells it, citing al-Qurtubi. The verse itself mentions no dream.",
            "bn": "এরপর কুরতুবী 'বলা হয়' কথাটি জুড়ে দিয়ে আরও বিস্তারিত একটি রূপ আনেন। ইয়াকুব দেখলেন, তিনি পাহাড়ের চূড়ায়, আর ইউসুফ নিচে উপত্যকার মাঝখানে। দশটি নেকড়ে ছেলেটাকে ঘিরে ধরেছে, খেয়ে ফেলতে চায়। তাদের একটি বাকিদের ঠেকিয়ে রাখল। তারপর মাটি ফেটে গেল, আর ইউসুফ তাতে তিন দিন লুকিয়ে রইলেন। বর্ণনাটি নিজেই নিজের ব্যাখ্যা দেয়। দশ নেকড়ে তাঁর ভাইয়েরা, যখন তারা তাঁকে হত্যার চক্রান্তে একজোট হলো। যে তাঁকে রক্ষা করল, সে বড় ভাই ইয়াহুদা। আর মাটিতে লুকানো মানে কূপে কাটানো তাঁর তিনটি দিন। মাআরিফুল কুরআন কুরতুবীর বরাত দিয়ে কাহিনিটা আবার বলে। আয়াতে নিজে কোনো স্বপ্নের উল্লেখ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Wolf, or the Brothers Themselves?",
          "bn": "নেকড়ে, নাকি ভাইয়েরাই?"
        },
        "p": [
          {
            "en": "A sharper question follows, and al-Qurtubi keeps both answers. The first, under it is said: he spoke out of fear of them, not of any animal, and his fear was that they would kill the boy. He meant them by the wolf, and named the wolf to keep his meaning veiled from them, musataratan lahum. Al-Qurtubi adds: Ibn 'Abbas said, so he called them wolves. The fetched text gives no chain for that line. Ma'arif al-Qur'an, citing al-Qurtubi, gives it as a narration from Ibn 'Abbas: because of the dream Ya'qub (AS) sensed danger at their hands, but out of wisdom he did not lay the truth bare.",
            "bn": "এখান থেকে আরও তীক্ষ্ণ একটি প্রশ্ন ওঠে, আর কুরতুবী দুটো উত্তরই রেখে দেন। প্রথমটা 'বলা হয়' দিয়ে: তিনি কোনো পশুর ভয়ে নয়, ছেলেদের ভয়েই এ কথা বলেছিলেন। ভয় ছিল, তারাই ওকে মেরে ফেলবে। নেকড়ে বলে তিনি তাদেরই বুঝিয়েছেন, আর আসল কথাটা তাদের কাছে ঢেকে রাখতে নেকড়ের নাম নিয়েছেন। কুরতুবী যোগ করেন, ইবন আব্বাস (রাঃ) বলেছেন: এভাবে তিনি তাদের নেকড়ে নাম দিলেন। হাতে থাকা পাঠে এ কথার কোনো সূত্র নেই। মাআরিফুল কুরআন কুরতুবীর বরাতে একে ইবন আব্বাস (রাঃ)-এর বর্ণনা হিসেবে আনে: স্বপ্নের কারণে ইয়াকুব (আঃ) ভাইদের হাতে বিপদের আশঙ্কা করেছিলেন, কিন্তু প্রজ্ঞার কারণে সত্যটা খুলে বলেননি।"
          },
          {
            "en": "The second answer follows in al-Qurtubi, also under it is said: he did not fear them for Yusuf, and had he feared them he would not have sent him with them. He feared the wolf, because it is the commonest thing feared in open country. Ma'arif al-Qur'an names a cause of the same plain kind, the abundance of wolves in Canaan, as one of two possibilities beside the dream. Al-Qurtubi does not choose between the readings, and the verse does not settle it; both are left standing here.",
            "bn": "দ্বিতীয় উত্তরটাও কুরতুবী আনেন 'বলা হয়' দিয়ে: ইউসুফকে নিয়ে তিনি ছেলেদের ভয় করেননি। ভয় করলে তাদের সঙ্গে ওকে পাঠাতেনই না। তিনি ভয় করেছিলেন নেকড়েকেই, কারণ খোলা প্রান্তরে মানুষ সবচেয়ে বেশি ভয় পায় এটাকেই। মাআরিফুল কুরআনও একই রকম সাদামাটা একটা কারণ বলে: কেনান অঞ্চলে নেকড়ের আধিক্য। স্বপ্নের পাশাপাশি এটাকে সে দুই সম্ভাবনার একটি হিসেবে রাখে। কুরতুবী কোনো পাঠকে বেছে নেন না, আয়াতও প্রশ্নটার মীমাংসা করে না। তাই দুটোই এখানে পাশাপাশি থাকল।"
          },
          {
            "en": "What can be said is what the words themselves do. On either reading, Ya'qub (AS) named a wolf and their inattention, not their envy or their intentions. Ma'arif al-Qur'an, on the next verse, explains why a father might speak so: saying it plainly would have been painful for all of them, and might have deepened the brothers' enmity, so that even if they dropped their plan now they could return to it later under some other excuse. That is Ma'arif's reading of his restraint; the verse records only his words.",
            "bn": "নিশ্চিত করে বলা যায় শুধু এটুকু, শব্দগুলো নিজে কী করে। যে পাঠই ধরা হোক, ইয়াকুব (আঃ) নাম নিয়েছেন একটি নেকড়ের আর ছেলেদের অমনোযোগের, তাদের হিংসা বা মতলবের নয়। মাআরিফুল কুরআন পরের আয়াতের আলোচনায় এর একটা কারণ দেখায়। খোলাখুলি বললে সবার জন্যই কথাটা হতো কষ্টের, আর ভাইদের শত্রুতা হয়তো আরও বাড়ত। তখন এবার পরিকল্পনা ছেড়ে দিলেও পরে অন্য কোনো অজুহাতে তারা আবার সেদিকে ফিরতে পারত। বাবার এই সংযম নিয়ে এটা মাআরিফের ব্যাখ্যা। আয়াত শুধু তাঁর কথাগুলোই তুলে ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Worry Made Into Cover",
          "bn": "দুশ্চিন্তা যখন আড়াল হলো"
        },
        "p": [
          {
            "en": "Ibn Kathir closes his comment on the verse with one sentence: fa-akhadhu min fihi hadhihi l-kalimah, wa-ja'aluha 'udhrahum fima fa'aluh. They took this word from his mouth and made it their excuse for what they did. His English abridgement says the same: they heard these words from his mouth and used them in their response afterwards. The wolf a father feared became the wolf his sons would name. The fault Ibn Kathir describes lies in the taking. How the excuse was delivered, and how the father received it, belongs to 12:17 and 12:18.",
            "bn": "ইবন কাসীর এ আয়াতের ব্যাখ্যা শেষ করেন একটি বাক্যে: 'ফাআখাযূ মিন ফীহি হাযিহিল কালিমাহ, ওয়া জাআলূহা উযরাহুম ফীমা ফাআলূহ।' তারা তাঁর মুখ থেকে কথাটা তুলে নিল, আর সেটাকেই নিজেদের কাজের অজুহাত বানাল। তাঁর ইংরেজি সংক্ষেপেও একই কথা: তারা তাঁর মুখে এ কথা শুনেছিল, পরে নিজেদের জবাবে সেটাই কাজে লাগায়। বাবা যে নেকড়ের ভয় করেছিলেন, ছেলেরা পরে সেই নেকড়ের নামই নেবে। ইবন কাসীর যে দোষের কথা বলেন, তা কথাটা তুলে নেওয়ায়। অজুহাতটা কীভাবে পেশ হলো আর বাবা কীভাবে তা নিলেন, সেটা ১২:১৭ ও ১২:১৮ আয়াতের বিষয়।"
          },
          {
            "en": "Their reply in 12:14 came, as Ibn Kathir puts it, there and then: if the wolf should set on him and eat him from among us, while we are a band, we would then be ruined and helpless. Al-Qurtubi: a band who would see the wolf and not drive it off? Then we are losers in keeping our flocks, for if we cannot defend our brother from a wolf, we are still less able to defend our sheep. He also records two other glosses of khasirun, ignorant of his right, and helpless. They answer the wolf. To the father's grief, the first half of 12:13, no reply comes.",
            "bn": "১২:১৪ আয়াতে তাদের জবাব, ইবন কাসীরের ভাষায়, এল সঙ্গে সঙ্গেই: আমরা একটা দল থাকতে নেকড়ে যদি আমাদের মাঝখান থেকে ওর উপর হামলা করে খেয়ে ফেলে, তাহলে তো আমরা ধ্বংস, অক্ষম। কুরতুবীর ব্যাখ্যা: আমরা এমন দল যে নেকড়ে দেখেও তাড়াতে পারব না? তাহলে তো পাল পাহারাতেও আমরা ব্যর্থ। ভাইকে নেকড়ের হাত থেকে বাঁচাতে না পারলে ছাগল-ভেড়াকে বাঁচাতে আরও কম পারব। 'খাসিরূন' শব্দের আরও দুটি অর্থ তিনি উল্লেখ করেন: ওর হক সম্পর্কে অজ্ঞ, আর অক্ষম। তারা জবাব দেয় নেকড়ের কথার। বাবার দুঃখের কথা, অর্থাৎ ১২:১৩ আয়াতের প্রথম অংশ, জবাব পায় না।"
          },
          {
            "en": "As-Sa'di closes the exchange. Once they had smoothed the way for their father, setting out the reasons for sending the boy and removing the obstacles, he allowed him to go with them, li-ajli unsihi, for the sake of his enjoyment. None of the commentaries fetched for this verse faults that consent. The brothers' own word for themselves in 12:12, la-hafizun, guardians, comes back in 12:63 over a younger brother, and the father's reply there, in 12:64, is treated in its own place.",
            "bn": "সা'দী কথোপকথনটা শেষ করেন এভাবে। ছেলেরা যখন বাবার সামনে পথ পরিষ্কার করে দিল, পাঠানোর কারণগুলো তুলে ধরল আর বাধাগুলো সরিয়ে দিল, তখন তিনি ওকে তাদের সঙ্গে যেতে দিলেন, 'লিআজলি উনসিহী', ওর আনন্দের জন্য। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর তাঁর এই সম্মতিতে দোষ ধরে না। ১২:১২ আয়াতে ভাইয়েরা নিজেদের বলেছিল 'লাহাফিযূন', রক্ষক। শব্দটা ১২:৬৩ আয়াতে আবার ফেরে ছোট আরেক ভাইকে নিয়ে, আর সেখানে বাবার জবাব, ১২:৬৪ আয়াত, আলাদা জায়গায় আলোচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear Spoken Without Blame",
          "bn": "অভিযোগ ছাড়া ভয়ের কথা"
        },
        "p": [
          {
            "en": "The verse gives a reader something rare: a prophet naming his own feelings aloud. Ya'qub (AS) does not hide his grief, as if love for one child were something to be embarrassed about, and he does not dress his fear up as an accusation. He says what he feels and what he fears, in the plainest words, to the very people he is anxious about. Many conversations in a family go wrong in the opposite way, with worry spoken as anger, or love left unsaid until it is too late to say.",
            "bn": "আয়াতটি পাঠকের সামনে বিরল একটা জিনিস রাখে: একজন নবী মুখ ফুটে নিজের অনুভূতির কথা বলছেন। ইয়াকুব (আঃ) দুঃখ লুকান না, যেন এক সন্তানের প্রতি ভালোবাসা লজ্জার কিছু। আবার ভয়কে অভিযোগের পোশাকও পরান না। যাদের নিয়ে তাঁর উদ্বেগ, তাদেরকেই তিনি সবচেয়ে সহজ ভাষায় জানান, কী অনুভব করছেন আর কিসের ভয় পাচ্ছেন। পরিবারের অনেক কথাবার্তা ভেঙে যায় ঠিক উল্টো পথে। দুশ্চিন্তা বেরোয় রাগ হয়ে, আর ভালোবাসার কথা না-বলাই থেকে যায়, যতক্ষণ না বলার সময় পেরিয়ে যায়।"
          },
          {
            "en": "The verse speaks as well to whoever is entrusted. The brothers had said, we will guard him; the father's fear was the hour when guardians are busy with something else. Parents, teachers, anyone handed the care of a child or of someone weaker can ask where that hour falls in their own day. And Ibn Kathir's sentence is a warning to listeners. Another person's honest worry, heard and stored away, can become someone's script. The wrong in that belongs to whoever takes the words, never to the person who spoke them.",
            "bn": "যার হাতে কারও দায়িত্ব, আয়াতটি তাকেও কিছু বলে। ভাইয়েরা বলেছিল, আমরা ওকে আগলে রাখব। বাবার ভয় ছিল সেই মুহূর্তটা নিয়ে, যখন পাহারাদার অন্য কাজে ব্যস্ত। বাবা-মা, শিক্ষক, যার হাতেই কোনো শিশু বা দুর্বল মানুষের দেখভাল, তিনি ভেবে দেখতে পারেন, নিজের দিনে সেই মুহূর্তটা কোথায় আসে। আর ইবন কাসীরের বাক্যটি শ্রোতার জন্য সতর্কবার্তা। অন্যের সরল দুশ্চিন্তা শুনে মনে রেখে দিলে তা কারও সাজানো গল্পের উপকরণ হয়ে যেতে পারে। সে অন্যায়ের দায় কথাটা যে তুলে নেয় তার, যিনি বলেছেন তাঁর কখনো নয়।"
          },
          {
            "en": "Two cautions belong here. The verse describes what these brothers planned and said, inside one family's story; it licenses nothing against any living person or community, and no reader may cast a sibling, a step-relative or a rival family as Yusuf's brothers on its strength. And none of the commentaries fetched for this verse attaches a prophetic hadith to it; the dreams and the wolves-as-brothers reading come as reports, labelled as such above. What stays is the father: a man who loved openly, feared honestly, and said both without wounding anyone.",
            "bn": "দুটি সতর্কতা এখানে জরুরি। এ আয়াত একটি পরিবারের কাহিনির ভেতরে এই ভাইদের পরিকল্পনা আর কথার বর্ণনা দেয়। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। এর জোরে কোনো পাঠক নিজের ভাই, সৎ আত্মীয় বা প্রতিপক্ষ পরিবারকে ইউসুফের ভাইদের জায়গায় বসাতে পারেন না। আর এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে নবী ﷺ-এর কোনো হাদীস যুক্ত করে না। স্বপ্নগুলো আর নেকড়ে মানে ভাইয়েরা, এই পাঠ এসেছে বর্ণনা হিসেবে, উপরে সেভাবেই চিহ্নিত। থেকে যান বাবা নিজে, যিনি খোলাখুলি ভালোবেসেছেন, সৎভাবে ভয় পেয়েছেন, আর কাউকে আঘাত না করে দুটোই বলেছেন।"
          }
        ]
      }
    ]
  },
  "12:16": {
    "sections": [
      {
        "h": {
          "en": "Home After the Pit",
          "bn": "কূপের পর ঘরে ফেরা"
        },
        "p": [
          {
            "en": "Surah Yusuf is Makkan, and 12:16 falls on the evening of the day the story turns. In 12:8 and 12:9 the brothers resent their father's love for Yusuf (AS) and his brother, and weigh killing him or casting him away; in 12:10 one of them proposes the well instead. In 12:11 to 12:14 they talk their father round, answering his fear of a wolf with a boast that they are a strong band. In 12:15 they agree to put him in the depths of the well.",
            "bn": "সূরা ইউসুফ মাক্কী। যেদিন কাহিনির মোড় ঘুরে যায়, ১২:১৬ আয়াত পড়ে সেই দিনের সন্ধ্যায়। ১২:৮ ও ১২:৯ আয়াতে ভাইয়েরা ক্ষুব্ধ, কারণ বাবা ইউসুফ (আঃ) আর তাঁর ভাইকে বেশি ভালোবাসেন। তারা ভাবে, তাঁকে মেরে ফেলবে, নাকি দূরে কোথাও ফেলে আসবে। ১২:১০ আয়াতে তাদেরই একজন প্রস্তাব দেয়, বরং কূপে ফেলে দাও। ১২:১১ থেকে ১২:১৪ আয়াতে তারা বাবাকে রাজি করায়। বাবা নেকড়ের ভয় করছিলেন, জবাবে তারা বড়াই করে, আমরা এত শক্তিশালী দল থাকতে তা হবে কেন। ১২:১৫ আয়াতে তারা তাঁকে কূপের গভীরে ফেলার ব্যাপারে একমত হয়।"
          },
          {
            "en": "In that same verse Allah reveals to the boy in the pit that he will yet tell them of this deed of theirs while they do not perceive. So when our verse opens, the reader knows more than anyone in the house. After its four words, 12:17 gives the story the brothers told and 12:18 the shirt they brought, which has its own article in this module; this article stays with the arrival. No commentary consulted for the verse records an occasion of revelation.",
            "bn": "ওই আয়াতেই আল্লাহ কূপের ভেতরের বালককে ওহি পাঠান: একদিন তুমি তাদের এই কাজের কথা তাদের জানাবে, আর তারা টেরও পাবে না। কাজেই আমাদের আয়াত যখন শুরু হয়, ঘরের যে কারো চেয়ে পাঠক বেশি জানেন। এর ৪টি শব্দের পরে ১২:১৭ আয়াতে আসে ভাইদের বানানো গল্প, আর ১২:১৮ আয়াতে তাদের নিয়ে আসা জামা। ১২:১৮ আয়াতের আলাদা প্রবন্ধ এই মডিউলেই আছে, এই লেখা থাকবে শুধু ফিরে আসার মুহূর্তটুকু নিয়ে। এ আয়াতের জন্য দেখা কোনো তাফসীরে শানে নুযূল নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Words at Nightfall",
          "bn": "রাত নামার মুখে চারটি শব্দ"
        },
        "p": [
          {
            "en": "The verse is four Arabic words, counted in the surah's text: wa-ja'u abahum 'isha'an yabkun, and they came to their father at nightfall, weeping. It has no speech in it and no comment. It reports what a father would have seen from his door: his sons coming home, late, in tears. The object is abahum, their father, rather than his name. The word that binds them to him stands in the very sentence in which they come to deceive him, and the verse lets that sit without remark.",
            "bn": "আয়াতে আরবি শব্দ ৪টি, সূরার মূল পাঠে গুনে দেখা: ওয়া জাউ আবাহুম ইশাআন ইয়াবকূন, আর তারা রাতের শুরুতে কাঁদতে কাঁদতে তাদের পিতার কাছে এল। এতে কারো কোনো কথা নেই, কোনো মন্তব্যও নেই। দরজায় দাঁড়ানো একজন বাবা যা দেখতেন, আয়াত শুধু সেটুকু জানায়: ছেলেরা ঘরে ফিরছে, দেরিতে, চোখে পানি নিয়ে। কার কাছে এল? আবাহুম, তাদের পিতার কাছে। নাম নেই, আছে সম্পর্কটা। যে বাক্যে তারা তাঁকে ধোঁকা দিতে আসে, সেই বাক্যেই দাঁড়িয়ে আছে এই বন্ধনের শব্দ। আয়াত এ নিয়ে কিছু বলে না, শুধু রেখে দেয়।"
          },
          {
            "en": "'Isha'an is a word of time. Al-Qurtubi glosses it as laylan, by night, and says it is an adverb of time standing in the place of a circumstantial phrase: the hour is part of how they came. Al-Muyassar puts it at the time of 'isha, at the start of the night, and Ibn Kathir in the darkness of the night. Yabkun, in the imperfect, gives the state in which they arrived: weeping as they came. Nothing in the four words says whether the weeping was felt or produced.",
            "bn": "ইশাআন সময়ের শব্দ। কুরতুবী এর অর্থ করেন লাইলান, রাতে। তিনি বলেন, শব্দটি সময় বোঝায়, তবে বসেছে অবস্থা বোঝানোর জায়গায়। অর্থাৎ কখন এল, সেটাই তাদের আসার ধরনের অংশ। মুয়াসসার বলে, ইশার সময়ে, রাতের শুরুতে। ইবনে কাসীর বলেন, রাতের অন্ধকারে। ইয়াবকূন ক্রিয়াটি চলমান কাজ বোঝায়, তারা কোন অবস্থায় এসেছিল সেটাই এর বিষয়: আসতে আসতে কাঁদছিল। কান্নাটা মনের ভেতর থেকে এসেছিল নাকি বানানো ছিল, এই ৪টি শব্দের কোথাও তা বলা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Why They Waited for Dark",
          "bn": "অন্ধকারের অপেক্ষা কেন"
        },
        "p": [
          {
            "en": "Why nightfall? Al-Qurtubi answers directly: they came at 'isha so as to be better able to make their excuse in the darkness. He adds a saying he introduces only as something said: do not ask for what you need by night, for modesty is in the eyes, and do not excuse yourself for a wrong by day, or you will stammer in the excuse. Al-Baghawi reports the people of meanings, ahl al-ma'ani, to the same effect: they came in the darkness of 'isha to be bolder in excusing themselves with a lie.",
            "bn": "রাতের শুরুতেই কেন? কুরতুবী সরাসরি জবাব দেন: অন্ধকারে অজুহাত দেখানো সহজ হবে, তাই তারা ইশার সময় এসেছিল। সঙ্গে তিনি একটি কথা আনেন, শুধু এটুকু বলে যে এমনটা বলা হয়। রাতে কারো কাছে প্রয়োজনের কথা তুলতে নেই, কারণ লজ্জা থাকে চোখে। আর দিনের আলোয় অপরাধের কৈফিয়ত দিতে নেই, তাতে কৈফিয়ত দিতে গিয়ে কথা জড়িয়ে যায়। বাগাভী আহলুল মাআনী, অর্থ বিশ্লেষণকারী আলেমদের বরাতে একই কথা বলেন: মিথ্যা অজুহাত দিতে আরও সাহসী হওয়ার জন্য তারা ইশার অন্ধকারে এসেছিল।"
          },
          {
            "en": "As-Sa'di reads the timing differently. They came at nightfall, he says, so that their return would be later than their habit, and so that their weeping would be evidence for them and a sign that they were truthful. The difference is worth keeping. Al-Qurtubi and al-Baghawi look at what the dark does for the one who lies: it hides a face that might give him away. As-Sa'di looks at what lateness and tears do for the story: they fit the account of a disaster. Both see the hour as chosen.",
            "bn": "সাদী সময়টা পড়েন অন্যভাবে। তাঁর মতে, তারা রাতের শুরুতে এসেছিল যেন ফেরাটা তাদের অভ্যাসের চেয়ে দেরিতে হয়, আর কান্নাটা হয় তাদের পক্ষে প্রমাণ, তারা যে সত্য বলছে তার আলামত। পার্থক্যটা রেখে দেওয়ার মতো। কুরতুবী আর বাগাভী দেখেন, মিথ্যাবাদীর জন্য অন্ধকার কী করে: যে চেহারা তাকে ধরিয়ে দিতে পারত, তা ঢেকে দেয়। সাদী দেখেন, দেরি আর কান্না গল্পের জন্য কী করে: দুটোই একটা দুর্ঘটনার বিবরণের সঙ্গে খাপ খেয়ে যায়। তবে সময়টা যে ভেবেচিন্তে বেছে নেওয়া, দুই পক্ষই তা মানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Asked at the Door",
          "bn": "দরজায় বাবার প্রশ্ন"
        },
        "p": [
          {
            "en": "At-Tabari brings a report from as-Suddi: they came to their father at 'isha, weeping, and when he heard their voices he was alarmed and said, what is the matter with you, my sons? Has something befallen you in your flock? They said no. He said, then what has become of Yusuf? Al-Baghawi relates much the same exchange, introduced as something narrated: Ya'qub (AS) heard their cries and wailing, came out, and asked after the flock and then after Yusuf. Ma'arif al-Qur'an gives it in English: was the flock attacked by someone, and where is Yusuf?",
            "bn": "তাবারী সুদ্দীর একটি বর্ণনা আনেন: তারা ইশার সময় কাঁদতে কাঁদতে বাবার কাছে এল। তাদের গলার আওয়াজ শুনে তিনি ঘাবড়ে গেলেন, বললেন, কী হয়েছে তোমাদের, বাছারা? তোমাদের পশুর পালে কিছু ঘটেছে? তারা বলল, না। তিনি বললেন, তাহলে ইউসুফের কী হলো? বাগাভীও প্রায় একই কথোপকথন আনেন, বর্ণিত আছে বলে: ইয়াকুব (আঃ) তাদের চিৎকার আর বিলাপ শুনে বেরিয়ে এলেন, প্রথমে পালের খোঁজ নিলেন, তারপর ইউসুফের। মাআরিফুল কুরআন ইংরেজিতে তা এভাবে দেয়: কেউ কি পালের উপর হামলা করেছে? আর ইউসুফ কোথায়?"
          },
          {
            "en": "Ibn Kathir's wording for the arrival is a string of display: they came in the darkness of the night, weeping, showing sorrow and distress over Yusuf (AS) and putting on grief before their father, then excusing themselves fima za'amu, in what they claimed. The account is marked as a claim before it is given. Al-Qurtubi goes further, relaying longer narrations from as-Suddi, Ibn Hibban and Wahb that name individual brothers and describe the father fainting until the cool before dawn. Those details come from reports, not from the Quran, and are left aside here.",
            "bn": "ইবনে কাসীরের ভাষায় এই ফিরে আসা যেন প্রদর্শনীর সারি: তারা রাতের অন্ধকারে কাঁদতে কাঁদতে এল, ইউসুফ (আঃ)-এর জন্য আফসোস আর অস্থিরতা দেখাতে লাগল, বাবার সামনে দুঃখের ভাব ধরল। তারপর কৈফিয়ত দিতে লাগল, ফীমা যাআমূ, তাদের দাবিমতো। বিবরণ আসার আগেই তা দাবি বলে চিহ্নিত। কুরতুবী আরও এগিয়ে সুদ্দী, ইবনে হিব্বান আর ওয়াহবের বরাতে লম্বা বর্ণনা আনেন। সেগুলোতে ভাইদের আলাদা আলাদা নাম আছে, আর আছে বাবার বেহুঁশ হয়ে ভোরের ঠান্ডা নামা পর্যন্ত পড়ে থাকার কাহিনি। এসব বিবরণের উৎস বর্ণনা, কুরআন নয়, তাই এখানে সেগুলো বাদ রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Tears Are Not Testimony",
          "bn": "কান্না সাক্ষ্য নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi draws a principle from the verse in the name of 'our scholars': this verse is evidence that a person's weeping does not show that what he says is true, because it may be put on; some people can do that and some cannot. Then, introduced only as something said: manufactured tears do not stay hidden. He quotes a line of poetry for it: when tears mingle on the cheeks, it becomes clear who wept, baka, and who made a show of weeping, tabaka. One root gives both words, and he leaves the two remarks side by side.",
            "bn": "এ আয়াত থেকে কুরতুবী একটি নীতি বের করেন, 'আমাদের আলেমগণ' বলে: এই আয়াত প্রমাণ করে, কারো কান্না তার কথার সত্যতার দলিল নয়, কারণ কান্না বানানোও হতে পারে। কিছু মানুষ তা পারে, কিছু মানুষ পারে না। তারপর কেবল 'বলা হয়েছে' বলে আনেন আরেকটি কথা: বানানো কান্না লুকানো থাকে না। এর পক্ষে তিনি একটি কবিতার চরণ আনেন: গালে গালে অশ্রু মিশে গেলে বোঝা যায় কে কেঁদেছে, বাকা, আর কে কান্নার ভান করেছে, তাবাকা। দুটো শব্দই একই মূল থেকে। আর দুটি কথা তিনি পাশাপাশি রেখে দেন, মিলিয়ে দেওয়ার চেষ্টা করেন না।"
          },
          {
            "en": "Read carefully, the principle is narrow. It says tears are not proof of truth. It does not say they are proof of a lie, and nothing in the verse makes weeping suspect in itself. The brothers' tears are exposed by what the rest of the surah reveals about that day, not by the fact that they wept. Nor did they move the father to accept the story, as 12:18 shows; his reply belongs to that verse and its article.",
            "bn": "মনোযোগ দিয়ে পড়লে বোঝা যায়, নীতিটা খুব সীমিত। এটুকুই বলে: কান্না সত্যের প্রমাণ নয়। কান্না মিথ্যার প্রমাণ, এমন কথা এতে নেই। কাঁদাটাই সন্দেহজনক, আয়াতে এমন কোনো ইঙ্গিতও নেই। ভাইদের কান্নার আসল রূপ ধরা পড়ে, কারণ বাকি সূরা সেদিনের ঘটনা খুলে বলে দেয়; তারা কেঁদেছিল বলে নয়। আর এই কান্না দেখে বাবা তাদের গল্প মেনেও নেননি, ১২:১৮ আয়াতেই তা স্পষ্ট। তাঁর জবাব ওই আয়াত আর তার প্রবন্ধের বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "One Lie Asks for Another",
          "bn": "এক মিথ্যা আরেক মিথ্যাকে ডাকে"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a prophetic hadith to it. One sound narration speaks to what the verse shows, and it is brought here as a general principle, not as attached to the verse. Sahih al-Bukhari 6094, from Abdullah (RA), in al-Bukhari's wording: The Prophet ﷺ said, Truthfulness leads to righteousness, and righteousness leads to Paradise. And a man keeps on telling the truth until he becomes a truthful person. Falsehood leads to Al-Fajur (i.e. wickedness, evil-doing), and Al-Fajur (wickedness) leads to the (Hell) Fire, and a man may keep on telling lies till he is written before Allah, a liar.",
            "bn": "এ আয়াতের জন্য দেখা কোনো তাফসীর এর সঙ্গে কোনো হাদিস জুড়ে দেয়নি। তবে একটি সহীহ বর্ণনা আয়াতের দেখানো বিষয়টির কথাই বলে। এখানে তা আনা হলো সাধারণ নীতি হিসেবে, আয়াতের সঙ্গে যুক্ত বর্ণনা হিসেবে নয়। সহীহ বুখারী ৬০৯৪, আবদুল্লাহ (রাঃ) থেকে, বুখারীর ভাষায়: নবী ﷺ বলেছেন, সত্য নেকির পথ দেখায়, আর নেকি পথ দেখায় জান্নাতের। মানুষ সত্য বলতে থাকে, শেষে সে সিদ্দীক, পরম সত্যবাদী হয়ে যায়। আর মিথ্যা পথ দেখায় ফুজূরের, অর্থাৎ পাপাচার আর অন্যায়ের, আর ফুজূর পথ দেখায় জাহান্নামের। মানুষ মিথ্যা বলতেই থাকে, শেষে আল্লাহর কাছে তাকে মিথ্যাবাদী বলে লিখে দেওয়া হয়।"
          },
          {
            "en": "Set beside the story, the narration's second half takes a visible shape. The deed at the well needed the dark, the dark needed tears, the tears needed the story of 12:17, and the story needed the stained shirt of 12:18, a verse that opens with the same wa-ja'u, and they came. Each step protected the one before. Nor did the concealment end that night; it lasted until 12:89, when a ruler in Egypt asked them whether they knew what they had done to Yusuf and his brother. The hadith says a man keeps on; the surah shows the cost.",
            "bn": "কাহিনির পাশে রাখলে হাদিসের দ্বিতীয় অর্ধেক চোখের সামনে রূপ নেয়। কূপের কাজটা ঢাকতে দরকার হলো অন্ধকার, অন্ধকারের সঙ্গে কান্না, কান্নার জন্য ১২:১৭ আয়াতের গল্প, আর গল্পের জন্য ১২:১৮ আয়াতের রক্তমাখা জামা। ওই আয়াতও শুরু হয় একই ওয়া জাউ দিয়ে, আর তারা এল। প্রতিটি ধাপ আগের ধাপটিকে বাঁচাতে। লুকোচুরি সেই রাতেই শেষ হয়নি। তা চলেছে ১২:৮৯ আয়াত পর্যন্ত, যেদিন মিসরের এক শাসক তাদের জিজ্ঞেস করলেন, ইউসুফ আর তার ভাইয়ের সঙ্গে তোমরা কী করেছিলে, জানো? হাদিস বলে, মানুষ মিথ্যা বলতেই থাকে। সূরা দেখায় তার দাম।"
          },
          {
            "en": "The narration's first half is in the surah too, and it belongs to the same men. In 12:97 they come to their father once more, and the words that opened their lie in 12:17, ya abana, O our father, now open a confession: ask forgiveness for us of our sins; indeed, we have been sinners. In 12:98 he promises to ask his Lord to forgive them. The verse at nightfall is not the last word on the brothers.",
            "bn": "হাদিসের প্রথম অর্ধেকও এই সূরায় আছে, আর তাও এই মানুষগুলোরই। ১২:৯৭ আয়াতে তারা আরেকবার বাবার কাছে আসে। ১২:১৭ আয়াতে যে ডাক দিয়ে তাদের মিথ্যা শুরু হয়েছিল, ইয়া আবানা, হে আমাদের আব্বা, সেই ডাকেই এবার শুরু হয় স্বীকারোক্তি: আমাদের গুনাহের জন্য মাগফিরাত চান, আমরা সত্যিই অপরাধী ছিলাম। ১২:৯৮ আয়াতে তিনি কথা দেন, তাদের জন্য তিনি তাঁর রবের কাছে মাগফিরাত চাইবেন। রাতের শুরুর এই আয়াত ভাইদের নিয়ে শেষ কথা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Tears the Quran Vouches For",
          "bn": "যে কান্নার সাক্ষী কুরআন নিজে"
        },
        "p": [
          {
            "en": "Elsewhere the Quran speaks of weeping it vouches for. 5:83 describes people whose eyes overflow when they hear what was revealed to the Messenger, because of the truth they have recognised. 9:92 speaks of men who asked the Prophet ﷺ for mounts for the expedition and turned back in tears, grieved that they had nothing to spend. 17:109 shows those given knowledge falling on their faces weeping, growing in humility. And 53:43 lays the ground beneath it all: it is He who makes people laugh and weep.",
            "bn": "কুরআনের অন্য জায়গায় এমন কান্নার কথা আছে, যার সাক্ষ্য কুরআন নিজেই দেয়। ৫:৮৩ আয়াতে এমন মানুষের কথা, রাসূলের উপর নাজিল হওয়া বাণী শুনলে যাদের চোখ অশ্রুতে ভরে যায়, কারণ তারা সত্যকে চিনে ফেলেছে। ৯:৯২ আয়াতে সেই মানুষগুলো, যারা অভিযানে যাওয়ার বাহন চাইতে নবী ﷺ-এর কাছে এসেছিল। বাহন না পেয়ে তারা ফিরে গেল অশ্রুভরা চোখে, খরচ করার মতো কিছু নেই বলে দুঃখে। ১৭:১০৯ আয়াতে জ্ঞান পাওয়া মানুষেরা কাঁদতে কাঁদতে সিজদায় লুটিয়ে পড়ে, তাদের বিনয় বাড়ে। আর ৫৩:৪৩ আয়াত গোড়ার কথাটা বলে দেয়: তিনিই হাসান, তিনিই কাঁদান।"
          },
          {
            "en": "In each of those places Allah Himself testifies to what the tears meant, and tears are His gift, which is why their use at 12:16 lands as it does. 4:108 describes those who hide from people but cannot hide from Allah, who is with them when they spend the night plotting words He does not accept. The dark hid faces from an old man at a door, and nothing from Him. And 12:58 brings the verb back: the brothers of Yusuf came and entered upon him, and he knew them while they did not know him.",
            "bn": "ওই প্রতিটি জায়গায় কান্নার মানে কী ছিল, আল্লাহ নিজেই তার সাক্ষী। কান্না তাঁরই দান। তাই ১২:১৬ আয়াতে কান্নার এমন ব্যবহার পাঠকের মনে এত জোরে বাজে। ৪:১০৮ আয়াত বলে এমন লোকদের কথা, যারা মানুষের কাছ থেকে লুকায়, কিন্তু আল্লাহর কাছ থেকে লুকাতে পারে না। রাতে যখন তারা তাঁর অপছন্দের কথা নিয়ে শলাপরামর্শ করে, তখনও তিনি তাদের সঙ্গেই থাকেন। দরজায় দাঁড়ানো এক বৃদ্ধের চোখ থেকে অন্ধকার তাদের চেহারা আড়াল করেছিল, কিন্তু আল্লাহর কাছ থেকে কিছুই আড়াল করতে পারেনি। আর ১২:৫৮ আয়াতে একই ক্রিয়া ফিরে আসে: ইউসুফের ভাইয়েরা এল, তাঁর সামনে হাজির হলো। তিনি তাদের চিনলেন, তারা তাঁকে চিনল না।"
          }
        ]
      },
      {
        "h": {
          "en": "An Apology in Daylight",
          "bn": "দিনের আলোয় ক্ষমা চাওয়া"
        },
        "p": [
          {
            "en": "The verse is about other people's tears only in the second place. First it is a mirror. Most people who have done wrong have felt the pull to arrange the setting: to explain by message rather than face to face, late rather than early, with a catch in the voice doing work the facts cannot. If a wrong is hard to admit by day, that difficulty is modesty doing its work. The honest course is to admit it anyway, in the light, looking at the person.",
            "bn": "এ আয়াত অন্যের কান্না নিয়ে, তবে সেটা পরের কথা। আগে এটা একটা আয়না। অন্যায় করার পর প্রায় সবারই মন চায় পরিবেশটা নিজের মতো সাজিয়ে নিতে: সামনাসামনি না বলে মেসেজে জানানো, সময়মতো না বলে দেরিতে বলা, গলায় এমন কাঁপুনি আনা, যা দিয়ে সেই কাজ হাসিল হয় যা আসল ঘটনা দিয়ে হতো না। দিনের আলোয় অন্যায় স্বীকার করতে কষ্ট হলে বুঝবেন, লজ্জা তার কাজ করছে। সৎ পথ হলো তবুও স্বীকার করা, আলোয় দাঁড়িয়ে, মানুষটার চোখে চোখ রেখে।"
          },
          {
            "en": "The chain in the narration can be broken at any link, and the earlier the cheaper. A small untruth told to cover a mistake at work, a missed payment or a promise broken to a child soon asks for a second to hold it up. The moment you notice that second request is the moment to stop. Say what happened, accept what follows, and ask Allah's forgiveness. The brothers' concealment ran for years before the confession of 12:97; nobody reading the surah has to wait as long.",
            "bn": "হাদিসে যে শিকলের কথা, তার যেকোনো কড়ায় তা ভাঙা যায়, আর যত আগে ভাঙা যায় তত কম দাম দিতে হয়। অফিসের একটা ভুল, সময়মতো না দেওয়া কোনো পাওনা, সন্তানকে দেওয়া কথা রাখতে না পারা, এসব ঢাকতে বলা ছোট্ট একটা অসত্য খুব শিগগির তাকে টিকিয়ে রাখার জন্য আরেকটা অসত্য চাইবে। দ্বিতীয় সেই চাহিদা যখন টের পাবেন, থামার সময় তখনই। যা ঘটেছে বলে দিন, তার ফল মেনে নিন, আল্লাহর কাছে মাফ চান। ১২:৯৭ আয়াতের স্বীকারোক্তির আগে ভাইদের লুকোচুরি চলেছিল বহু বছর। সূরার পাঠকের এত দিন অপেক্ষা করার দরকার নেই।"
          },
          {
            "en": "One misuse must be ruled out. This verse is no licence to doubt the grief of a widow, a child in trouble or a colleague who breaks down. The Quran told us what these particular tears were covering, and nothing about anyone else's. Where a claim must be decided, by a judge, an arbiter or a parent between two children, decide on what can be shown, as al-Qurtubi's principle requires, and let tears move you to gentleness, not to a verdict. Everywhere else, meet weeping with mercy.",
            "bn": "একটা অপব্যবহার শুরুতেই নাকচ করতে হবে। কোনো বিধবার শোক, বিপদে পড়া কোনো শিশুর কান্না কিংবা ভেঙে পড়া কোনো সহকর্মীর চোখের পানিকে সন্দেহ করার অনুমতি এ আয়াত দেয় না। এই নির্দিষ্ট কান্না কী ঢেকে রাখছিল, কুরআন তা জানিয়েছে, অন্য কারো কান্না নিয়ে কিছুই জানায়নি। যেখানে কোনো দাবির ফয়সালা করতেই হয়, বিচারক, সালিশ বা দুই সন্তানের মাঝে দাঁড়ানো বাবা-মা হিসেবে, সেখানে কুরতুবীর নীতি অনুযায়ী যা দেখানো যায় তার ভিত্তিতে ফয়সালা করুন। কান্না আপনাকে নরম করুক, রায় যেন না বদলায়। বাকি সব জায়গায় কান্নার সামনে মমতা নিয়ে দাঁড়ান।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for Truthful Tears",
          "bn": "সত্যিকারের অশ্রুর আরজি"
        },
        "p": [
          {
            "en": "No commentary consulted ties a supplication to this verse. What follows is composed from its themes and offered only as that. O Allah, make my tears before You sincere and my words before people true. Do not let me hide a wrong in the dark, or dress it in a grief I do not feel. When I do wrong, give me the courage to say so plainly and soon, and make me gentle with the grief of others.",
            "bn": "দেখা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো দোয়া যুক্ত করেনি। নিচের দোয়াটি আয়াতের বিষয় থেকে সাজানো, শুধু সেভাবেই পেশ করা হলো। হে আল্লাহ, আপনার সামনে আমার চোখের পানি খাঁটি করে দিন, মানুষের সামনে আমার কথা সত্য করে দিন। কোনো অন্যায় অন্ধকারে লুকাতে দেবেন না, যে শোক মনে নেই তার পোশাক পরিয়ে ঢাকতে দেবেন না। অন্যায় করে ফেললে সোজাসুজি আর দেরি না করে তা বলার সাহস দিন, আর অন্যের শোকের প্রতি আমাকে কোমল করুন।"
          },
          {
            "en": "Questions to carry from the four words. When I last owed someone an explanation, did I choose the hour and the setting so that I would be harder to read? Have my tears ever argued a case my words could not honestly make? Which wrong of mine has already needed a second concealment? When someone weeps in front of me, is my first movement mercy or suspicion? And is there a confession I could make tomorrow, in daylight, to the person I wronged?",
            "bn": "এই ৪টি শব্দ থেকে সঙ্গে নেওয়ার মতো কিছু প্রশ্ন। শেষবার যখন কাউকে কৈফিয়ত দিতে হয়েছিল, সময় আর পরিবেশটা কি এমনভাবে বেছেছিলাম যাতে আমার চেহারা পড়া কঠিন হয়? আমার চোখের পানি কি কখনো এমন দাবি প্রমাণ করতে নেমেছে, যা আমার কথা সৎভাবে পারত না? আমার কোন অন্যায় ঢাকতে এর মধ্যেই দ্বিতীয় আরেকটা লুকোচুরি লেগেছে? কেউ সামনে কাঁদলে আমার মনে প্রথমে জাগে মমতা, নাকি সন্দেহ? আর যার প্রতি অন্যায় করেছি, তার কাছে কাল দিনের আলোয় গিয়ে স্বীকার করার মতো কোনো কথা কি আমার আছে?"
          }
        ]
      }
    ]
  },
  "12:18": {
    "sections": [
      {
        "h": {
          "en": "Evidence Carried Home",
          "bn": "ঘরে বয়ে আনা প্রমাণ"
        },
        "p": [
          {
            "en": "The verse completes the brothers' report. In 12:16 they reach their father at nightfall, weeping, and in 12:17 they give their account: they went racing, left Yusuf (AS) with their belongings, a wolf ate him, and their father would not believe them even if they were truthful. Then wa-ja'u 'ala qamisihi bi-damin kadhib: and they brought false blood upon his shirt. As-Sa'di reads the blood as another thing they used to confirm their claim, and the abridged Ibn Kathir in English says the same: the shirt was brought to help prove the plot they had all agreed on.",
            "bn": "ভাইদের বিবরণ এই আয়াতে এসে শেষ হয়। ১২:১৬ আয়াতে তারা সন্ধ্যার আঁধারে কাঁদতে কাঁদতে পিতার কাছে পৌঁছায়। ১২:১৭ আয়াতে তাদের গল্প: তারা দৌড়ের পাল্লা দিতে গিয়েছিল, ইউসুফ (আঃ)-কে রেখে গিয়েছিল মালপত্রের কাছে, নেকড়ে তাকে খেয়ে ফেলেছে, আর তারা সত্যি বললেও পিতা তাদের বিশ্বাস করবেন না। তারপর ওয়া জাউ আলা কামীসিহী বিদামিন কাযিব: তারা তার জামায় মিথ্যা রক্ত লাগিয়ে নিয়ে এল। সা'দীর মতে এই রক্তও ছিল নিজেদের দাবি পাকা করার আরেক উপায়। ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণও তা-ই বলে: সবাই মিলে যে চক্রান্তে তারা একমত হয়েছিল, সেটা প্রমাণ করতেই জামাটা আনা।"
          },
          {
            "en": "The Muyassar puts the turn of events in a single line. They came with his shirt smeared with blood that was not Yusuf's, so that it would testify to their truthfulness, and it became the proof of their lie, because the shirt had not been torn. The object meant to settle the question is what reopens it. The rest of the verse is the reply of Ya'qub (AS) in three short clauses: a refusal of their account, a resolve about himself, and a turning to Allah for help.",
            "bn": "মুয়াসসার পুরো মোড়টা এক বাক্যে ধরে। তারা জামাটা এনেছিল ইউসুফের নয় এমন রক্তে মাখিয়ে, যাতে সেটা তাদের সত্যবাদিতার সাক্ষী হয়। অথচ সেটাই হয়ে গেল তাদের মিথ্যার প্রমাণ, কারণ জামাটা ছেঁড়া ছিল না। যে জিনিস দিয়ে প্রশ্নটা চাপা দেওয়ার কথা, সেটাই প্রশ্নটা আবার খুলে দিল। আয়াতের বাকি অংশ ইয়াকুব (আঃ)-এর জবাব, তিনটি ছোট বাক্যে। প্রথমটায় তাদের বিবরণ নাকচ, দ্বিতীয়টায় নিজের ব্যাপারে এক দৃঢ় সংকল্প, তৃতীয়টায় আল্লাহর কাছে সাহায্য চাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "A Lie Laid on the Blood",
          "bn": "রক্তের গায়ে মিথ্যার নাম"
        },
        "p": [
          {
            "en": "Kadhib is a verbal noun, lying, placed where a describing word would be expected. At-Tabari asks how blood that was certainly blood can be called a lie, and answers with two views. The first, which he gives from a Basran grammarian, is that it is called a lie because a lie was told about it, just as 2:16 says their trade did not profit when it was the traders who failed. The other, from a Kufan grammarian whom the editor's note identifies as al-Farra', makes the verbal noun stand for the passive participle: blood lied about, makdhub.",
            "bn": "কাযিব শব্দটি ক্রিয়াবাচক বিশেষ্য, যার মানে মিথ্যা বলা। বসেছে এমন জায়গায়, যেখানে সাধারণত বিশেষণ থাকার কথা। তাবারী প্রশ্ন তোলেন, যে রক্ত নিঃসন্দেহে রক্তই ছিল, তাকে মিথ্যা বলা হলো কীভাবে? উত্তরে তিনি দুটি মত দেন। প্রথমটি বসরার এক ব্যাকরণবিদের: রক্তটিকে নিয়ে মিথ্যা বলা হয়েছিল বলেই একে মিথ্যা বলা হয়েছে। যেমন ২:১৬ আয়াত বলে, তাদের ব্যবসা লাভ করেনি, অথচ লাভ করেনি আসলে ব্যবসায়ীরা। দ্বিতীয়টি কুফার এক ব্যাকরণবিদের, সম্পাদকের টীকা যাঁকে ফাররা বলে চিহ্নিত করে। তাঁর মতে এখানে ক্রিয়াবাচক বিশেষ্যটি কর্মবাচ্যের অর্থ দিচ্ছে: মাকযূব, অর্থাৎ যে রক্ত নিয়ে মিথ্যা বলা হয়েছে।"
          },
          {
            "en": "Al-Baghawi gives both senses briefly: blood that is a lie because it was not Yusuf's, and, as it is also said, blood lied about. Al-Qurtubi supplies the missing word, blood of a lie. Whose blood it was is reported, not stated in the verse. Mujahid, in several chains at-Tabari gives, and Ibn 'Abbas through 'Ikrimah say a sakhlah, a young one of the flock; as-Suddi says they slaughtered a kid; al-Qurtubi gives Qatadah as saying a gazelle. Al-Qurtubi also records a reading from al-Hasan and 'A'ishah (RA), kadib with an undotted dal, meaning fresh blood.",
            "bn": "বাগাভী দুটি অর্থই সংক্ষেপে বলেন। এক, রক্তটা নিজেই মিথ্যা, কারণ তা ইউসুফের রক্ত ছিল না। দুই, যেমনটা বলা হয়, এমন রক্ত যা নিয়ে মিথ্যা বলা হয়েছে। কুরতুবী উহ্য শব্দটি পূরণ করে পড়েন: মিথ্যার রক্ত। রক্তটা কার, আয়াত তা বলে না, বলে বর্ণনাগুলো। তাবারীর দেওয়া কয়েকটি সূত্রে মুজাহিদ, আর ইকরিমার সূত্রে ইবন আব্বাস বলেন, পালের একটি বাচ্চা, যাকে সাখলা বলে। সুদ্দী বলেন, তারা একটি ছাগলছানা জবাই করেছিল। কুরতুবীর বর্ণনায় কাতাদা বলেন, একটি হরিণী। কুরতুবী আরও উল্লেখ করেন, হাসান ও আয়েশা (রাঃ) পড়েছেন কাদিব, নুকতাবিহীন দাল দিয়ে, যার অর্থ তাজা রক্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Wolf That Spared the Cloth",
          "bn": "জামাকে রেহাই দেওয়া নেকড়ে"
        },
        "p": [
          {
            "en": "What exposed the blood, the early authorities in at-Tabari agree, was one detail. Ibn 'Abbas, through Sa'id ibn Jubayr: had the beast eaten him, it would have torn the shirt. Al-Hasan: the shirt was brought to Ya'qub (AS), he looked at it, saw the trace of blood and saw no tear, and said, my sons, I never knew the wolf to be so forbearing. Ash-Sha'bi has him say the wolf was forbearing indeed, sparing the shirt and not sparing his son. Qatadah has him say: I see no mark of a beast, no piercing and no tear.",
            "bn": "রক্তের মিথ্যা ধরা পড়েছিল একটিমাত্র খুঁটিনাটিতে। তাবারীর আনা পূর্বসূরিরা এ ব্যাপারে একমত। সাঈদ ইবন জুবাইরের সূত্রে ইবন আব্বাস বলেন, হিংস্র জন্তু তাকে খেয়ে থাকলে জামাটা ছিঁড়ে যেত। হাসান বলেন, জামাটা ইয়াকুব (আঃ)-এর কাছে আনা হলো। তিনি তাকিয়ে দেখলেন রক্তের দাগ আছে, কিন্তু কোথাও ছেঁড়া নেই। বললেন, বাছারা, নেকড়েকে তো এত সহনশীল বলে কখনো জানতাম না! শা'বীর বর্ণনায় তিনি বলেন, নেকড়েটা সত্যিই বড় সহনশীল, জামাটার উপর দয়া করল, অথচ আমার ছেলের উপর করল না। কাতাদার বর্ণনায় তিনি বলেন, আমি কোনো জন্তুর চিহ্ন দেখছি না, কিছু বিঁধে যাওয়ার দাগ নেই, ছেঁড়াও নেই।"
          },
          {
            "en": "Why the shirt was whole is explained in two ways. Ibn Kathir says simply that they forgot to tear it. Al-Qurtubi gives a reading from 'our scholars': when they meant the blood as a sign of their truth, Allah paired it with a sign that contradicted it, the shirt left unharmed; Ma'arif al-Qur'an says Allah made them neglect the tearing. As-Sa'di names no tear: Ya'qub (AS) saw indications, and recalled Yusuf's dream, that showed him what he said. Longer story material in al-Baghawi and al-Qurtubi, a captured wolf made to speak among it, comes only as 'in the story' and 'it is narrated'; nothing here rests on it.",
            "bn": "জামা অক্ষত থাকার ব্যাখ্যা দুইভাবে আসে। ইবন কাসীর সোজাসুজি বলেন, তারা জামাটা ছিঁড়তে ভুলে গিয়েছিল। কুরতুবী 'আমাদের আলেমদের' একটি মত আনেন: রক্তকে তারা নিজেদের সত্যের আলামত বানাতে চেয়েছিল, আর আল্লাহ তার পাশে জুড়ে দিলেন উল্টো সাক্ষ্য দেওয়া আরেক আলামত, অক্ষত জামা। মাআরিফুল কুরআন বলে, আল্লাহ তাদের ছিঁড়ে ফেলার কথাটা ভুলিয়ে দিয়েছিলেন। সা'দী ছেঁড়ার প্রসঙ্গই তোলেন না। তাঁর মতে ইয়াকুব (আঃ) নানা আলামত দেখেছিলেন, ইউসুফের বলা স্বপ্নটাও তাঁর মনে ছিল। সেগুলোই তাঁকে এ কথায় পৌঁছে দেয়। বাগাভী ও কুরতুবীতে আরও লম্বা কাহিনি আছে, ধরে আনা এক নেকড়ের কথা বলে ওঠাও তার অংশ। তবে তা এসেছে শুধু 'কাহিনিতে আছে' আর 'বর্ণিত আছে' বলে। এখানকার কোনো কথা তার উপর দাঁড়িয়ে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Signs Weighed, Shirts Counted",
          "bn": "আলামতের ওজন, জামার হিসাব"
        },
        "p": [
          {
            "en": "Al-Qurtubi draws a ruling from the scene. Jurists, he says, cite this verse for acting on circumstantial signs, amarat, in questions such as qasamah, and they agree that Ya'qub (AS) inferred the brothers' lie from the soundness of the shirt. When signs conflict, the one weighing them should rule by the side that outweighs, and he reports from Ibn al-'Arabi that there is no disagreement over judging by it. Ma'arif al-Qur'an, citing al-Qurtubi, says a judge should keep an eye on circumstantial evidence alongside the claims and arguments of the parties.",
            "bn": "দৃশ্যটি থেকে কুরতুবী একটি বিধান বের করেন। তিনি বলেন, কাসামা প্রভৃতি ফিকহি মাসআলায় আলামত বা পারিপার্শ্বিক চিহ্ন কাজে লাগানোর পক্ষে ফকীহরা এ আয়াত দিয়ে দলিল দেন। তাঁরা একমত যে জামা অক্ষত দেখেই ইয়াকুব (আঃ) ছেলেদের মিথ্যা ধরে ফেলেছিলেন। আলামতে আলামতে বিরোধ বাধলে বিচারকারী দেখবেন কোন দিকটা ভারী, রায় দেবেন সেদিকেই। ইবনুল আরাবী থেকে তিনি জানান, এর ভিত্তিতে রায় দেওয়ায় কোনো মতভেদ নেই। মাআরিফুল কুরআন কুরতুবীর বরাতে বলে: পক্ষগুলোর দাবি ও যুক্তির পাশাপাশি পারিপার্শ্বিক প্রমাণের দিকেও কাজীর নজর রাখা উচিত।"
          },
          {
            "en": "The shirt also prompted a count, and here the sources differ. 'Amir, in three reports at-Tabari gives through Simak, says Yusuf's shirt held three signs: the false blood, the tear from behind that 12:28 describes, and its being cast over his father's face so that he could see again, in 12:96. Al-Qurtubi reports the same count from al-Mawardi and rejects it, because the shirt with the blood, the shirt that was torn and the shirt the bearer of good news brought are different shirts. Ma'arif al-Qur'an keeps al-Mawardi's three events. Both views are recorded here and neither is chosen.",
            "bn": "জামা নিয়ে একটা গণনাও এসেছে, আর এখানে সূত্রগুলো একমত নয়। সিমাকের সূত্রে তাবারীর আনা তিনটি বর্ণনায় আমির বলেন, ইউসুফের জামায় ছিল তিনটি নিদর্শন। এক, মিথ্যা রক্ত। দুই, পেছন থেকে ছেঁড়া, যার কথা ১২:২৮ আয়াতে। তিন, পিতার মুখে রাখতেই তাঁর দৃষ্টি ফিরে আসা, ১২:৯৬ আয়াতে। কুরতুবী একই গণনা মাওয়ারদী থেকে উল্লেখ করে তা প্রত্যাখ্যান করেন। তাঁর যুক্তি: রক্তমাখা জামা, ছেঁড়া জামা আর সুসংবাদদাতার আনা জামা আলাদা আলাদা জামা। মাআরিফুল কুরআন মাওয়ারদীর তিন ঘটনাই রেখে দেয়। দুটি মতই এখানে রইল, কোনোটিকে বেছে নেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Way You Tell It",
          "bn": "ঘটনা তোমাদের কথামতো নয়"
        },
        "p": [
          {
            "en": "The reply of Ya'qub (AS) opens with bal, rather. At-Tabari spells out what the particle sets aside: the matter is not as you say. The Muyassar uses the same words. Then comes sawwalat lakum anfusukum amra. Qatadah, in at-Tabari, glosses sawwalat as zayyanat, made attractive, and al-Baghawi gives the same short gloss. At-Tabari expands it: your souls made a matter concerning Yusuf look fine and good to you, so you did it. Ibn Kathir describes the reply as Ya'qub turning away from their words to what had settled in his mind about their collusion against Yusuf.",
            "bn": "ইয়াকুব (আঃ)-এর জবাব শুরু হয় বাল দিয়ে, অর্থাৎ বরং। শব্দটি কী নাকচ করছে, তাবারী তা খুলে বলেন: ব্যাপারটা তোমরা যেমন বলছ তেমন নয়। মুয়াসসারও ঠিক এই কথা বলে। তারপর আসে সাওওয়ালাত লাকুম আনফুসুকুম আমরা। তাবারীর বর্ণনায় কাতাদা সাওওয়ালাতের অর্থ করেন যাইয়ানাত, অর্থাৎ আকর্ষণীয় করে দেখিয়েছে। বাগাভীও সংক্ষেপে একই অর্থ দেন। তাবারী আরেকটু বিস্তারে বলেন: ইউসুফকে নিয়ে একটা কাজ তোমাদের মন তোমাদের চোখে সুন্দর ও ভালো করে তুলেছে, আর তোমরা তা করে ফেলেছ। ইবন কাসীরের ভাষায়, ইয়াকুব তাদের কথা থেকে মুখ ফিরিয়ে নিলেন সেই দিকে, যা ইউসুফের বিরুদ্ধে তাদের যোগসাজশ নিয়ে তাঁর মনে বসে গিয়েছিল।"
          },
          {
            "en": "The commentators fill in amra, a matter, in different words. The Muyassar: your souls, which command evil, dressed up an ugly deed against Yusuf until you saw it as good and did it. As-Sa'di: an ugly matter, the separating of me from him. Al-Qurtubi: a matter other than the one you describe and relate. The verse itself leaves the word open. Ya'qub (AS) names where the deed began, in the souls of those who did it, and says nothing here about where Yusuf is or what was done to him.",
            "bn": "আমরা, অর্থাৎ একটা কাজ। শব্দটি তাফসীরকারেরা পূরণ করেন ভিন্ন ভিন্ন ভাষায়। মুয়াসসার বলে, তোমাদের মন, যা মন্দের হুকুম দেয়, ইউসুফকে নিয়ে একটা জঘন্য কাজ সাজিয়ে দেখিয়েছে। শেষে তোমরা সেটাকে ভালো ভেবে করেই ফেলেছ। সা'দী বলেন, একটা জঘন্য কাজ, আমার কাছ থেকে তাকে আলাদা করে দেওয়া। কুরতুবী বলেন, তোমরা যা বর্ণনা করছ আর বলে বেড়াচ্ছ, তা ছাড়া অন্য কিছু। আয়াত নিজে শব্দটিকে খোলা রেখেছে। কাজটার শুরু কোথায়, ইয়াকুব (আঃ) সেটুকু বলেন: যারা করেছে, তাদের মনের ভেতরে। ইউসুফ কোথায় বা তার সঙ্গে কী করা হয়েছে, এখানে সে বিষয়ে তিনি কিছুই বলেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Makes Patience Beautiful",
          "bn": "সবর সুন্দর হয় কিসে"
        },
        "p": [
          {
            "en": "Fa-sabrun jamil is two words and no verb, and the commentators supply what is left unsaid in several ways. At-Tabari: my patience over what you did to me in the matter of Yusuf is beautiful patience. Al-Qurtubi gives az-Zajjaj, my course and what I hold to is beautiful patience; Qutrub, my patience is beautiful patience; and a third view, beautiful patience is more fitting for me, with the predicate left out. Al-Baghawi adds: beautiful patience is what I choose. Ibn Kathir turns it into a resolve: I will be patient with beautiful patience, until Allah relieves it by His help and kindness.",
            "bn": "ফাসাবরুন জামীল মাত্র দুটি শব্দ, কোনো ক্রিয়া নেই। যা না বলে রাখা হয়েছে, তাফসীরকারেরা তা নানাভাবে পূরণ করেন। তাবারী বলেন: ইউসুফের ব্যাপারে তোমরা আমার সঙ্গে যা করেছ, তাতে আমার সবর হবে সুন্দর সবর। কুরতুবী তিনটি মত আনেন। যাজ্জাজের মতে: আমার পথ, যা আমি আঁকড়ে থাকব, তা সুন্দর সবর। কুতরুবের মতে: আমার সবর সুন্দর সবর। আরেক মতে: সুন্দর সবরই আমার জন্য বেশি মানানসই, এখানে বিধেয়টা উহ্য। বাগাভী যোগ করেন: সুন্দর সবরকেই আমি বেছে নিই। ইবন কাসীর একে একটা সংকল্পের রূপ দেন: আমি সুন্দরভাবে সবর করব, যতক্ষণ না আল্লাহ তাঁর সাহায্য ও অনুগ্রহে এ বিপদ দূর করেন।"
          },
          {
            "en": "Al-Qurtubi also reports an accusative reading, fa-sabran jamilan, through Abu Hatim from 'Isa ibn 'Umar, with al-Mubarrad's judgement that the nominative is better: it means with me is beautiful patience, where the accusative would mean I will surely be patient. As for what makes patience beautiful, the definitions run close. Mujahid, in many chains in at-Tabari and in Ibn Kathir: patience with no jaza', no frantic grief. Al-Baghawi and al-Qurtubi: with no complaint and no jaza'. The Muyassar: no complaint with it to anyone of the creation.",
            "bn": "কুরতুবী আবু হাতিমের সূত্রে ঈসা ইবন উমরের একটি পাঠও উল্লেখ করেন, যাবরসহ: ফাসাবরান জামীলান। সঙ্গে মুবাররাদের মত, পেশযুক্ত পাঠটিই উত্তম। কারণ পেশে অর্থ দাঁড়ায়, আমার কাছে আছে সুন্দর সবর। আর যাবরে অর্থ হতো, আমি অবশ্যই সবর করব। এবার আসল প্রশ্ন, সবরকে সুন্দর করে কোন জিনিস? সংজ্ঞাগুলো প্রায় কাছাকাছি। তাবারীর বহু সূত্রে এবং ইবন কাসীরে মুজাহিদ বলেন: যে সবরে জাযা নেই, অর্থাৎ অস্থির হাহাকার নেই। বাগাভী ও কুরতুবী বলেন: যাতে কোনো অভিযোগও নেই, জাযাও নেই। মুয়াসসার বলে: সৃষ্টির কারও কাছে কোনো নালিশ নেই।"
          },
          {
            "en": "As-Sa'di is the most exact. Beautiful patience is free of resentment and of complaining to creatures, and Ya'qub (AS) sought Allah's help for it rather than relying on his own strength and power. When he later says, in 12:86, that he complains of his grief only to Allah, as-Sa'di answers that complaint to the Creator does not contradict beautiful patience. Al-Qurtubi adds a reading introduced with 'it is said': I will not live among you with a gloomy face and a frowning brow, but as I was with you. This, he says, shows that he let go of taking them to account.",
            "bn": "সীমারেখাটা সবচেয়ে নিখুঁতভাবে টানেন সা'দী। সুন্দর সবর হলো অসন্তোষ থেকে মুক্ত, সৃষ্টির কাছে নালিশ থেকেও মুক্ত। আর এ সবরের জন্য ইয়াকুব (আঃ) সাহায্য চেয়েছিলেন আল্লাহর কাছে, নিজের শক্তি-সামর্থ্যের উপর ভরসা করেননি। পরে ১২:৮৬ আয়াতে তিনি বলবেন, আমার দুঃখের নালিশ আমি কেবল আল্লাহর কাছেই করি। সা'দীর জবাব, স্রষ্টার কাছে নালিশ সুন্দর সবরের পরিপন্থী নয়। কুরতুবী 'বলা হয়' দিয়ে আরেকটি ব্যাখ্যা আনেন: আমি তোমাদের সঙ্গে মুখ ভার করে, কপাল কুঁচকে থাকব না, থাকব আগের মতোই। কুরতুবী বলেন, এ থেকে বোঝা যায় তিনি তাদের পাকড়াও করার পথে যাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report Missing a Link",
          "bn": "সূত্রে ফাঁক থাকা বর্ণনা"
        },
        "p": [
          {
            "en": "One report defines the phrase outright, and its standing has to travel with it. At-Tabari gives it in two chains through Hushaym, from 'Abd ar-Rahman ibn Yahya, from Hibban ibn Abi Jabalah: the Messenger of Allah ﷺ was asked about fa-sabrun jamil and said, patience with no complaint in it. The first chain adds: whoever voices it abroad has not been patient. Ibn Kathir cites the report and calls it mursal; Hibban names no Companion between himself and the Prophet ﷺ. The editor's note in at-Tabari says he could not identify 'Abd ar-Rahman ibn Yahya. Al-Qurtubi brings it only as 'it is narrated'.",
            "bn": "একটি বর্ণনা কথাটির সংজ্ঞা সরাসরি দেয়, তাই তার মানও সঙ্গে সঙ্গে বলে রাখা দরকার। তাবারী এটি এনেছেন দুটি সূত্রে: হুশাইম থেকে, তিনি আবদুর রহমান ইবন ইয়াহইয়া থেকে, তিনি হিব্বান ইবন আবী জাবালা থেকে। রাসূলুল্লাহ ﷺ-কে ফাসাবরুন জামীল সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেন: এমন সবর, যাতে কোনো নালিশ নেই। প্রথম সূত্রে আরও আছে: যে তা লোকের কাছে ছড়িয়ে দিল, সে সবর করল না। ইবন কাসীর বর্ণনাটি এনে একে মুরসাল বলেন। হিব্বান নিজের ও নবী ﷺ-এর মাঝে কোনো সাহাবীর নাম বলেননি। তাবারীর সম্পাদক টীকায় জানান, আবদুর রহমান ইবন ইয়াহইয়াকে তিনি শনাক্ত করতে পারেননি। কুরতুবী এটি আনেন শুধু 'বর্ণিত আছে' বলে।"
          },
          {
            "en": "No tafsir fetched for this verse attaches a sound hadith that explains the phrase. Ibn Kathir does point to a sound narration that uses it: al-Bukhari cites here 'A'ishah's account of the slander. In al-Bukhari's wording (4690), the Prophet ﷺ said: \"If you are innocent, then Allah will declare your innocence: but if you have committed a sin, then ask for Allah's Forgiveness and repent to him.\" 'A'ishah said, \"By Allah, I find no example for my case except that of Joseph's father (when he said), 'So (for me) patience is most fitting.'\" Then Allah revealed the ten verses from 24:11. Al-Bukhari placed it in his Sahih.",
            "bn": "এ আয়াতের জন্য আনা কোনো তাফসীর কথাটির ব্যাখ্যায় কোনো সহীহ হাদীস জুড়ে দেয় না। তবে ইবন কাসীর এমন এক সহীহ বর্ণনার দিকে ইঙ্গিত করেন, যেখানে কথাটি ব্যবহৃত হয়েছে: বুখারী এখানে অপবাদের ঘটনা নিয়ে আয়েশা (রাঃ)-এর বিবরণ এনেছেন। বুখারীর ভাষ্যে (৪৬৯০) নবী ﷺ বলেন: \"তুমি যদি নির্দোষ হও, তবে আল্লাহ তোমার নির্দোষিতা ঘোষণা করবেন। আর যদি কোনো গুনাহ করে থাকো, তবে আল্লাহর কাছে মাগফিরাত চাও এবং তাঁর কাছে তওবা করো।\" আয়েশা বলেন, \"আল্লাহর কসম, আমার অবস্থার জন্য ইউসুফের পিতার দৃষ্টান্ত ছাড়া আর কোনো দৃষ্টান্ত খুঁজে পাই না, যখন তিনি বলেছিলেন: 'সুতরাং (আমার জন্য) সুন্দর সবরই শ্রেয়।'\" তারপর আল্লাহ ২৪:১১ থেকে দশটি আয়াত নাযিল করেন। বুখারী এটি তাঁর সহীহ গ্রন্থে স্থান দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Help Against What They Describe",
          "bn": "বানানো কথার বিপরীতে সাহায্য"
        },
        "p": [
          {
            "en": "The last clause is wallahu al-musta'anu 'ala ma tasifun, which al-Qurtubi parses as subject and predicate: Allah is He whose help is sought. The glosses agree on the object. At-Tabari: I seek Allah's help to spare me the harm of the lies you describe; Qatadah, in at-Tabari: against what you lie. Ibn Kathir: against the lies and absurdities you relate. Al-Baghawi: I seek Allah's help for patience, against what you falsely claim. The Muyassar: help to bear the lies you describe, not by my own strength. The same closing words end 21:112, spoken by the Prophet ﷺ.",
            "bn": "শেষ বাক্য ওয়াল্লাহুল মুসতাআনু আলা মা তাসিফূন। কুরতুবী একে উদ্দেশ্য ও বিধেয় হিসেবে পড়েন: আল্লাহই সেই সত্তা, যাঁর কাছে সাহায্য চাওয়া হয়। কিসের বিপরীতে সাহায্য, সে ব্যাপারে ব্যাখ্যাগুলো একমত। তাবারী: তোমরা যে মিথ্যা বানিয়ে বলছ, তার অনিষ্ট থেকে বাঁচতে আমি আল্লাহর সাহায্য চাই। তাবারীর বর্ণনায় কাতাদা: তোমরা যে মিথ্যা বলছ, তার বিপরীতে। ইবন কাসীর: তোমাদের মিথ্যা আর অসম্ভব গল্পের বিপরীতে। বাগাভী: তোমাদের মিথ্যা দাবির মুখে সবরের জন্য আমি আল্লাহর সাহায্য চাই। মুয়াসসার: তোমাদের বানানো মিথ্যা সহ্য করার শক্তি চাই আল্লাহর কাছে, নিজের শক্তিতে নয়। হুবহু এই শব্দগুলো দিয়েই শেষ হয় ২১:১১২, যা নবী ﷺ-এর মুখের কথা।"
          },
          {
            "en": "The text describes the brothers' deed and no more: blood brought on a shirt and called a lie, and a matter their souls made attractive to them. The verse describes what these brothers did within a family's story; it licenses nothing against any living person or community. Whether they later became prophets is disputed. Al-Baghawi, on 12:6, says all of Ya'qub's children were prophets. Al-Qurtubi, on 12:5, says their deed shows they were not prophets at that time, and rejects the report in at-Tabari's book from Ibn Zayd that they were; Ma'arif al-Qur'an there follows him. The article takes no side.",
            "bn": "ভাইদের কাজের যতটুকু বিবরণ আয়াত দেয়, ততটুকুই এখানে: জামায় আনা রক্ত, যাকে মিথ্যা বলা হয়েছে, আর এমন এক কাজ, যা তাদের মন তাদের চোখে আকর্ষণীয় করে তুলেছিল। আয়াতটি এক পরিবারের কাহিনিতে এই ভাইদের কাজের কথা বলে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। পরে তাঁরা নবী হয়েছিলেন কি না, তা নিয়ে মতভেদ আছে। বাগাভী ১২:৬ আয়াতে বলেন, ইয়াকুবের সব সন্তানই নবী ছিলেন। কুরতুবী ১২:৫ আয়াতে বলেন, তাঁদের এ কাজ দেখায় যে সে সময় তাঁরা নবী ছিলেন না। তাবারীর গ্রন্থে ইবন যায়দের সূত্রে তাঁরা নবী ছিলেন বলে যা আছে, কুরতুবী তা প্রত্যাখ্যান করেন। মাআরিফুল কুরআন সেখানে তাঁকেই অনুসরণ করে। এই লেখা কোনো পক্ষ নেয় না।"
          },
          {
            "en": "The story then leaves the house for the well. In 12:19 a caravan's water-drawer lets down his bucket and finds the boy, and in 12:20 he is sold for a few dirhams. In 12:83, after another son is kept back in Egypt, Ya'qub (AS) says the same words again, rather, your souls have enticed you to something, so patience is most fitting, and closes that time on hope. In 12:86 and 12:87 he says he complains of his grief only to Allah and tells his sons not to despair of Allah's relief; those verses have their own article.",
            "bn": "এরপর কাহিনি ঘর ছেড়ে কূপের দিকে যায়। ১২:১৯ আয়াতে এক কাফেলার পানি সংগ্রহকারী বালতি নামিয়ে বালকটিকে পায়, আর ১২:২০ আয়াতে সে বিক্রি হয়ে যায় অল্প কয়েকটি দিরহামে। ১২:৮৩ আয়াতে আরেক ছেলে মিসরে আটকে পড়ার পর ইয়াকুব (আঃ) আবার হুবহু একই কথা বলেন: বরং তোমাদের মন তোমাদের জন্য একটা কাজ সাজিয়ে দিয়েছে, তাই সুন্দর সবরই শ্রেয়। তবে সেবার তিনি কথা শেষ করেন আশার কথায়। ১২:৮৬ ও ১২:৮৭ আয়াতে তিনি বলেন, দুঃখের নালিশ তিনি কেবল আল্লাহর কাছেই করেন, আর ছেলেদের বলেন আল্লাহর রহমত থেকে নিরাশ না হতে। সে আয়াতগুলোর আলোচনা আলাদা লেখায়।"
          }
        ]
      }
    ]
  },
  "12:21": {
    "sections": [
      {
        "h": {
          "en": "From the Well to a House",
          "bn": "কূপ থেকে এক ঘরে"
        },
        "p": [
          {
            "en": "The verse opens in Egypt. The two before it left Yusuf (AS) drawn up from the well by a travelling company and sold for a few counted dirhams. Ma'arif al-Qur'an notes that the Qur'an skips the whole journey and the sale in Egypt, because those parts can be understood without being told. What it keeps is a sentence spoken in a house: wa-qala alladhi shtarahu min Misra li-mra'atihi, and the one from Egypt who bought him said to his wife.",
            "bn": "আয়াতটি শুরু হয় মিসরে। আগের দুই আয়াতে আমরা দেখেছি, এক যাত্রীদল ইউসুফ (আঃ)-কে কূপ থেকে তুলে আনে, তারপর গোনা কয়েকটা দিরহামে তাঁকে বিক্রি করে দেওয়া হয়। মাআরিফুল কুরআন লক্ষ করে, মিসর পর্যন্ত পুরো পথ আর সেখানকার বিক্রির ঘটনা কুরআন বাদ দিয়ে গেছে। কারণ ওই অংশগুলো না বললেও বোঝা যায়। কুরআন রেখেছে শুধু এক ঘরের ভেতরে বলা একটি বাক্য: ওয়া কালাল্লাযিশ তারাহু মিম মিসরা লিমরাআতিহি, মিসরের যে লোক তাঁকে কিনেছিল, সে তার স্ত্রীকে বলল।"
          },
          {
            "en": "Then the verse turns from the buyer's words to Allah's: thus We established Yusuf in the land, that We might teach him something of the interpretation of events, and Allah prevails over His affair, but most of the people do not know. The man speaks of what the boy might become for his household. Allah speaks of what He is making of him. The verse lives in the distance between those two sentences: a man making a modest plan, and his Lord using it for a far larger one.",
            "bn": "এরপর আয়াত ক্রেতার কথা থেকে চলে যায় আল্লাহর কথায়: এভাবেই আমি ইউসুফকে সে দেশে প্রতিষ্ঠিত করলাম, যাতে তাঁকে কথার ব্যাখ্যার কিছু জ্ঞান শেখাই। আল্লাহ তাঁর কাজে জয়ী, কিন্তু বেশিরভাগ মানুষ জানে না। লোকটি ভাবছে, ছেলেটা তার সংসারের জন্য কী হয়ে উঠতে পারে। আল্লাহ বলছেন, তিনি তাঁকে কী বানাচ্ছেন। এ দুই বাক্যের মাঝখানের দূরত্বেই আয়াতের প্রাণ। একজন মানুষ ছোট্ট এক পরিকল্পনা করছে, আর তার রব সেটাকে কাজে লাগাচ্ছেন অনেক বড় এক উদ্দেশ্যে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Buyer the Verse Leaves Unnamed",
          "bn": "নামহীন এক ক্রেতা"
        },
        "p": [
          {
            "en": "The Qur'an names the buyer only by his act: he who bought him. The commentators fill in the rest, and they do it as reports. At-Tabari says it is mentioned that his name was Qitfir, with a chain to Ibn 'Abbas. He adds that it is also said his name was Itfir ibn Ruhayb, that he was al-'Aziz and over the treasuries of Egypt, and that the king then was al-Rayyan ibn al-Walid, an Amalekite; this he takes from Ibn Ishaq. Ibn Kathir carries the same two names.",
            "bn": "কুরআন ক্রেতার পরিচয় দেয় শুধু তার কাজ দিয়ে: যে তাঁকে কিনেছিল। বাকিটা তাফসীরকারেরা পূরণ করেন, আর করেন বর্ণনা হিসেবে। তাবারী বলেন, উল্লেখ আছে যে তার নাম ছিল কিতফীর, আর এর সনদ তিনি ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছান। তিনি আরও আনেন, এ কথাও বলা হয় যে তার নাম ইতফীর ইবন রুহাইব। তিনিই ছিলেন আযীয, মিসরের ধনভাণ্ডারের দায়িত্বে। আর তখনকার রাজা ছিলেন আমালেকা গোত্রের রাইয়ান ইবন ওয়ালীদ। এ বর্ণনা তিনি নেন ইবন ইসহাক থেকে। ইবন কাসীরও এই দুই নামই উল্লেখ করেন।"
          },
          {
            "en": "His wife is named by Ibn Ishaq, in at-Tabari's report, as Ra'il bint Ra'a'il. Ibn Kathir adds that others called her Zulaykha, and al-Baghawi gives Ra'il and then Zulaykha with it is said. Whether the buyer was a minister or the king is not settled either. Ibn Kathir and the Muyassar make him the minister, as does Ibn 'Abbas in al-Qurtubi; at-Tabari carries from as-Suddi al-'Aziz, king of Egypt, and al-Qurtubi gives ad-Dahhak's view that he was its king. None of this is in the verse.",
            "bn": "তাবারীর বর্ণনায় ইবন ইসহাক তার স্ত্রীর নাম বলেন রাঈল বিনতে রাআঈল। ইবন কাসীর যোগ করেন, অন্যরা তাকে যুলাইখা বলেছেন। বাগাভী আগে রাঈল নামটি দেন, তারপর 'বলা হয়' জুড়ে যুলাইখা। ক্রেতা মন্ত্রী ছিলেন নাকি স্বয়ং রাজা, সেটাও মীমাংসিত নয়। ইবন কাসীর আর মুয়াসসার তাকে মন্ত্রী বলেন, কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ)-ও তা-ই বলেন। অন্যদিকে তাবারী সুদ্দী থেকে আনেন: আযীয, মিসরের রাজা। কুরতুবী দাহহাকের মত দেন যে তিনি ছিলেন মিসরের রাজা। এর কোনোটিই আয়াতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Honour the Place He Stays",
          "bn": "ওর থাকার জায়গাটা সম্মানের করো"
        },
        "p": [
          {
            "en": "Akrimi mathwahu. Mathwa comes from thawa, to stay in a place, and at-Tabari explains the command as: honour the place of his residence, where he stays and lives. Qatada and Ibn Jurayj, in his chains, gloss it as his standing. Al-Baghawi gives his dwelling and his place of residence, and, as another view, honour him in food, clothing and lodging. Al-Qurtubi's gloss runs close to that: his dwelling and his stay, with good food and fine clothing.",
            "bn": "আকরিমী মাসওয়াহু। মাসওয়া এসেছে সাওয়া থেকে, যার অর্থ কোনো জায়গায় থাকা। তাবারী আদেশটির ব্যাখ্যা দেন এভাবে: সে যেখানে থাকে, যেখানে বাস করে, সেই জায়গাটাকে সম্মানিত করো। তাঁর সনদে কাতাদা আর ইবন জুরাইজ এর অর্থ বলেন: তার মর্যাদা। বাগাভী বলেন তার বাসস্থান ও অবস্থানের জায়গা। আরেকটি মত হিসেবে আনেন: খাবার, পোশাক আর থাকার ব্যবস্থায় তাকে সম্মান দাও। কুরতুবীর ব্যাখ্যাও কাছাকাছি: তার বাসস্থান ও অবস্থান, ভালো খাবার আর সুন্দর পোশাক দিয়ে।"
          },
          {
            "en": "The Muyassar says: treat him well and make his place among us an honourable one. Ma'arif al-Qur'an reads it as an order not to treat him like common slaves. Al-Qurtubi raises a quieter point about the verb itself. Some say ishtara here means taking one thing in exchange for another, since it was no real contract, as in those who bought error for guidance; others say the people took it outwardly for a purchase, and the word follows what they supposed. On the first view, the word names an exchange that took place, not a sale that held.",
            "bn": "মুয়াসসার বলে: তার সঙ্গে ভালো ব্যবহার করো, আমাদের কাছে তার থাকাটা সম্মানের করো। মাআরিফুল কুরআনের পাঠে এ হলো সাধারণ দাসের মতো আচরণ না করার নির্দেশ। কুরতুবী ক্রিয়াটি নিয়ে আরেকটি সূক্ষ্ম কথা তোলেন। কেউ বলেন, এখানে ইশতারা মানে এক জিনিসের বদলে আরেক জিনিস নেওয়া, কারণ এটা আসলে কোনো বৈধ চুক্তি ছিল না। যেমন বলা হয়েছে, তারা হিদায়াতের বদলে গোমরাহি কিনে নিয়েছে। আবার কেউ বলেন, বাইরে থেকে লোকেরা একে কেনা-বেচাই ভেবেছিল, শব্দটা তাদের সেই ধারণা অনুযায়ী এসেছে। প্রথম মত অনুযায়ী শব্দটা বোঝায় একটা বদলাবদলি ঘটেছিল, এমন কোনো বিক্রি নয় যা টিকে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Of Use, or a Son",
          "bn": "কাজের লোক, নাকি ছেলে"
        },
        "p": [
          {
            "en": "'Asa an yanfa'ana aw nattakhidhahu waladan: perhaps he will benefit us, or we will take him as a son. At-Tabari reads the benefit as the boy in time sparing them some of the affairs they carry, once he understands the tasks he is given. Al-Baghawi offers two: that they could sell him at a profit if they chose to, or that when grown he could take some of their affairs off their hands. As-Sa'di sets the pair side by side: the benefit servants give through every kind of service, or the joy people take in their own children.",
            "bn": "আসা আঁই ইয়ানফাআনা আও নাত্তাখিযাহু ওয়ালাদা: হয়তো সে আমাদের উপকারে আসবে, কিংবা আমরা তাকে ছেলে করে নেব। তাবারীর পাঠে উপকার মানে, যে কাজ তাকে দেওয়া হবে তা বুঝে নেওয়ার পর একদিন সে তাদের কিছু দায়িত্ব নিজের কাঁধে নেবে। বাগাভী দুটি অর্থ দেন। চাইলে তাকে লাভে বিক্রি করা যাবে, অথবা বড় হলে সে তাদের কিছু কাজ সামলে দেবে। সা'দী জোড়াটাকে পাশাপাশি রাখেন: হয় খাদেমরা নানা রকম সেবা দিয়ে যে উপকার করে সেই উপকার, নয়তো নিজের সন্তানকে নিয়ে মানুষ যে আনন্দ পায় সেই আনন্দ।"
          },
          {
            "en": "Why speak of a son at all? At-Tabari says it is mentioned that the man said this because he had no child, and brings Ibn Ishaq's report that Itfir did not approach women. Al-Qurtubi gives Ibn 'Abbas's view that he could not have children, and Ibn Ishaq's to the same effect. As-Sa'di is more careful still: perhaps, he says, the two of them had no child. These are reports about the household; the verse itself says only that a son was hoped for.",
            "bn": "ছেলের কথা উঠল কেন? তাবারী বলেন, উল্লেখ আছে যে লোকটির কোনো সন্তান ছিল না, তাই সে এ কথা বলেছিল। সঙ্গে আনেন ইবন ইসহাকের বর্ণনা যে ইতফীর স্ত্রীসঙ্গ করতেন না। কুরতুবী ইবন আব্বাস (রাঃ)-এর মত দেন যে তার সন্তান হওয়ার সামর্থ্য ছিল না, ইবন ইসহাকও একই কথা বলেন। সা'দী আরও সাবধানী। তিনি বলেন, সম্ভবত তাদের দুজনের কোনো সন্তান ছিল না। এগুলো ঘরটির ব্যাপারে বর্ণনামাত্র। আয়াত নিজে শুধু এটুকু বলে যে একটি ছেলের আশা করা হয়েছিল।"
          },
          {
            "en": "Al-Qurtubi answers an objection: how could a man speak of taking as a son someone he owns, when sonship and servitude contradict each other? He would free him first and then adopt him, al-Qurtubi replies, since adoption was known among the nations and in early Islam, and he leaves its ruling to his commentary on al-Ahzab. The buyer's hope, then, was not a small one. Out of what had looked like a cheap purchase he pictured an heir.",
            "bn": "কুরতুবী একটি আপত্তির জবাব দেন। যাকে মানুষ মালিক হিসেবে অধিকারে রেখেছে, তাকে সে ছেলে বানানোর কথা বলে কী করে? ছেলে হওয়া আর দাস হওয়া তো পরস্পরবিরোধী। কুরতুবীর জবাব: আগে তাকে মুক্ত করবে, তারপর পালক ছেলে হিসেবে নেবে। পালক নেওয়ার প্রথা জাতিগুলোর মধ্যে পরিচিত ছিল, ইসলামের শুরুতেও ছিল। এর বিধানের আলোচনা তিনি রেখে দেন সূরা আহযাবের তাফসীরের জন্য। তাহলে ক্রেতার আশাটা ছোট ছিল না। যে কেনাকে সস্তা সওদা মনে হয়েছিল, তার ভেতরেই সে একজন উত্তরাধিকারীর ছবি দেখছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Who Read People Rightly",
          "bn": "মানুষ চেনায় তিন পারদর্শী"
        },
        "p": [
          {
            "en": "At-Tabari, Ibn Kathir, al-Baghawi and al-Qurtubi all carry a saying of 'Abdullah ibn Mas'ud (RA): the most discerning of people were three. The 'Aziz, when he read Yusuf rightly and said to his wife, honour his lodging. The woman who said to her father about Musa (AS), O my father, hire him, the best you can hire is the strong and trustworthy (28:26); al-Baghawi and al-Qurtubi call her the daughter of Shu'ayb. And Abu Bakr (RA), when he read 'Umar (RA) rightly and appointed him his successor.",
            "bn": "তাবারী, ইবন কাসীর, বাগাভী আর কুরতুবী সবাই আবদুল্লাহ ইবন মাসউদ (রাঃ)-এর একটি উক্তি আনেন: মানুষের মধ্যে সবচেয়ে বিচক্ষণ ছিলেন তিনজন। একজন আযীয, যিনি ইউসুফকে ঠিকঠাক চিনে স্ত্রীকে বলেছিলেন, ওর থাকার জায়গাটা সম্মানের করো। আরেকজন সেই নারী, যিনি মূসা (আঃ)-এর ব্যাপারে বাবাকে বলেছিলেন, আব্বা, তাঁকে কাজে রাখুন, আপনি যাকে কাজে রাখবেন তার মধ্যে সেরা সে-ই যে শক্তিশালী ও বিশ্বস্ত (২৮:২৬)। বাগাভী ও কুরতুবী তাঁকে শুআইব (আঃ)-এর কন্যা বলেন। তৃতীয়জন আবু বকর (রাঃ), যিনি উমর (রাঃ)-কে চিনে নিজের পরে খলীফা মনোনীত করেছিলেন।"
          },
          {
            "en": "No tafsir fetched for this verse attaches a sound hadith of the Prophet ﷺ to it. The Ibn Mas'ud report is a Companion's saying, carried with chains in at-Tabari, and none of these commentators grades it. Al-Qurtubi also brings Ibn al-'Arabi's reservation. He wondered that the commentators agreed on citing it, since discernment, firasa, is a rare kind of knowledge, and Abu Bakr chose 'Umar from long experience of his work and company, while the daughter had a clear sign before her. Only the 'Aziz's case, he allows, can count as discernment, since he had no visible sign.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই নবী ﷺ-এর কোনো সহীহ হাদীস এর সঙ্গে যুক্ত করেনি। ইবন মাসউদ (রাঃ)-এর বর্ণনাটি একজন সাহাবীর উক্তি। তাবারী সনদসহ এটি আনেন, তবে এই তাফসীরকারদের কেউ এর মান নির্ণয় করেননি। কুরতুবী ইবনুল আরাবীর একটি আপত্তিও আনেন। তাফসীরকারেরা সবাই এ বর্ণনা টেনে আনায় তিনি বিস্মিত হন, কারণ ফিরাসা বা অন্তর্দৃষ্টি এক বিরল ধরনের জ্ঞান। আবু বকর (রাঃ) উমর (রাঃ)-কে বেছেছিলেন তাঁর কাজ আর দীর্ঘ সাহচর্যের অভিজ্ঞতা থেকে। আর কন্যাটির সামনে ছিল স্পষ্ট আলামত। তাঁর মতে শুধু আযীযের ঘটনাকেই ফিরাসা বলা যায়, কারণ তার সামনে কোনো দৃশ্যমান আলামত ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Settled Through a Stranger's Purchase",
          "bn": "অচেনা লোকের কেনায় প্রতিষ্ঠা"
        },
        "p": [
          {
            "en": "Wa-kadhalika makkanna li-Yusufa fi l-ard: and thus We established Yusuf in the land. At-Tabari unpacks the thus: just as We rescued Yusuf from brothers who had meant to kill him, brought him out of the well after he was thrown in, and carried him to honour and high standing with the 'Aziz, so We established him in the land and placed him over its treasuries. Al-Qurtubi says Allah turned the heart of the king who bought him towards him, until he could command and forbid in that land.",
            "bn": "ওয়া কাযালিকা মাক্কান্না লি-ইউসুফা ফিল আরদ: আর এভাবেই আমি ইউসুফকে সে দেশে প্রতিষ্ঠিত করলাম। 'এভাবেই' কথাটি তাবারী খুলে বলেন। ভাইয়েরা তাঁকে মেরে ফেলতে চেয়েছিল, আমি তাঁকে তাদের হাত থেকে বাঁচালাম। কূপে ফেলে দেওয়ার পর সেখান থেকে বের করে আনলাম। আযীযের কাছে তাঁকে সম্মান আর উঁচু মর্যাদায় পৌঁছে দিলাম। ঠিক তেমনি দেশে তাঁকে প্রতিষ্ঠা দিলাম, তার ধনভাণ্ডারের দায়িত্ব তাঁর হাতে দিলাম। কুরতুবী বলেন, যে রাজা তাঁকে কিনেছিল, আল্লাহ তার মন তাঁর দিকে ফিরিয়ে দিলেন। শেষে সে দেশে আদেশ-নিষেধের ক্ষমতা তাঁর হাতে এল।"
          },
          {
            "en": "As-Sa'di sees the house as the first step: just as We made it easy for the 'Aziz to buy him and honour him like this, We made it a prelude to establishing him in the land by this road. Ma'arif al-Qur'an calls the sentence good news of what was coming, since the boy who entered as a slave would in time hold the highest rank in the country. The verse already calls it establishment while he is still a servant in someone else's house.",
            "bn": "সা'দী ঘরটাকে দেখেন প্রথম ধাপ হিসেবে। আযীযের জন্য তাঁকে কেনা আর এভাবে সম্মান করা আমি সহজ করে দিলাম, আর এটাকেই এই পথ ধরে দেশে তাঁর প্রতিষ্ঠার সূচনা বানালাম। মাআরিফুল কুরআন বাক্যটিকে বলে সামনে যা ঘটবে তার সুসংবাদ। যে বালক এ ঘরে ঢুকেছে দাস হয়ে, একদিন সে-ই হবে দেশের সবচেয়ে উঁচু পদের মানুষ। অথচ তিনি যখন অন্যের ঘরে এক খাদেম মাত্র, তখনই আয়াত একে প্রতিষ্ঠা বলে ফেলেছে।"
          },
          {
            "en": "Wa-li-nu'allimahu min ta'wili l-ahadith. Mujahid and as-Suddi, in at-Tabari and Ibn Kathir, take it as interpreting dreams, and the Muyassar adds that through it he would know what was to happen. Others widen it. Al-Qurtubi links the clause to Ya'qub's words in 12:6 and gives as one view that Allah would reveal speech to him and teach him its meaning, along with dreams. As-Sa'di says a life free of other cares let him learn much: rulings, the reading of dreams and more. Ma'arif al-Qur'an includes understanding revelation and acting on it.",
            "bn": "ওয়া লিনুআল্লিমাহু মিন তা'বীলিল আহাদীস। তাবারী ও ইবন কাসীরের বর্ণনায় মুজাহিদ আর সুদ্দী এর অর্থ বলেন স্বপ্নের ব্যাখ্যা। মুয়াসসার যোগ করে, এর মাধ্যমে তিনি জানতে পারবেন সামনে কী ঘটবে। অন্যরা অর্থটা আরও প্রশস্ত করেন। কুরতুবী বাক্যটিকে জুড়ে দেন ১২:৬ আয়াতে ইয়াকূব (আঃ)-এর কথার সঙ্গে। একটি মত হিসেবে তিনি আনেন, আল্লাহ তাঁর কাছে নিজের বাণী পাঠাবেন আর তার অর্থ শেখাবেন, সঙ্গে স্বপ্নের ব্যাখ্যাও। সা'দী বলেন, অন্য কোনো ব্যস্ততা আর দুশ্চিন্তা না থাকায় তিনি অনেক জ্ঞান অর্জন করেন: বিধিবিধান, স্বপ্নের ব্যাখ্যা, আরও অনেক কিছু। মাআরিফুল কুরআন এর মধ্যে ধরে ওহী বোঝা আর সে অনুযায়ী আমল করাকেও।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Affair Prevails?",
          "bn": "কার কাজের উপর জয়ী?"
        },
        "p": [
          {
            "en": "Wa-llahu ghalibun 'ala amrihi. The final pronoun, his, can point two ways, and the commentators divide. At-Tabari takes it firmly as Yusuf: Allah has charge of Yusuf's affair, governing it, directing it and guarding it, and he states that the ha' returns to Yusuf. Ibn Kathir, as-Sa'di and the Muyassar read it as Allah's own affair: when He wills a thing it is not turned back, His command goes through and no one undoes it. Ibn Kathir adds Sa'id ibn Jubayr: He does whatever He wills.",
            "bn": "ওয়াল্লাহু গালিবুন আলা আমরিহি। শেষের সর্বনাম 'তার' দুই দিকে ইঙ্গিত করতে পারে, আর তাফসীরকারেরা এখানে দুই ভাগ। তাবারী দৃঢ়ভাবে একে ইউসুফের দিকে ফেরান: আল্লাহ ইউসুফের ব্যাপারের কর্তৃত্ব নিজের হাতে রেখেছেন, তা পরিচালনা করেন, গুছিয়ে দেন, আগলে রাখেন। তিনি স্পষ্ট বলেন, সর্বনামটি ফিরেছে ইউসুফের দিকে। ইবন কাসীর, সা'দী আর মুয়াসসারের পাঠে এটা আল্লাহর নিজের কাজ। তিনি কিছু চাইলে তা ফেরানো যায় না, তাঁর আদেশ কার্যকর হয়, কেউ তা বাতিল করতে পারে না। ইবন কাসীর সাঈদ ইবন জুবাইরের কথা যোগ করেন: তিনি যা চান তা-ই করেন।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi keep both readings. Al-Qurtubi gives Allah first: nothing overcomes Him, and He prevails over His own affair in whatever He wills, saying to it be, and it is. Then, it is said, the pronoun is Yusuf's: Allah prevails over Yusuf's affair, directing and guarding it and leaving it to no one else, so that no schemer's plot reaches him. Al-Baghawi gives the same two in the same order. Both readings stand in the sources, and neither is set aside here.",
            "bn": "কুরতুবী আর বাগাভী দুটি পাঠই রাখেন। কুরতুবী আগে আনেন আল্লাহর দিকটি: কোনো কিছু আল্লাহকে পরাজিত করতে পারে না, তিনি যা চান সে ব্যাপারে নিজের কাজে তিনিই জয়ী, বলেন 'হও', আর তা হয়ে যায়। তারপর 'বলা হয়' জুড়ে আনেন ইউসুফের দিকটি। আল্লাহ ইউসুফের ব্যাপারে জয়ী, তা পরিচালনা করেন, আগলে রাখেন, অন্য কারও হাতে ছেড়ে দেন না, যাতে কোনো চক্রান্তকারীর চক্রান্ত তাঁর কাছে না পৌঁছায়। বাগাভীও একই ক্রমে এই দুই মত দেন। উৎসগুলোতে দুটি পাঠই আছে, এখানে কোনোটিকেই বাদ দেওয়া হচ্ছে না।"
          },
          {
            "en": "Either way, the lesson rests on one fact: Allah's purpose works through other people's plans. Al-Qurtubi records the sages tracing it through the surah. The brothers wanted him dead, and he became a ruler before whom they bowed. They wanted their father's face to themselves, and his love and longing for Yusuf only grew. They tried to deceive him with tears and a shirt, and he was not deceived, saying your souls have enticed you to something. Each time the plan was theirs, and the outcome was His.",
            "bn": "যে পাঠই ধরা হোক, শিক্ষাটা একই সত্যের উপর দাঁড়িয়ে: আল্লাহর উদ্দেশ্য অন্যদের পরিকল্পনার ভেতর দিয়েই এগোয়। কুরতুবী জ্ঞানীদের কথা আনেন, যারা গোটা সূরা জুড়ে এর ছাপ দেখিয়েছেন। ভাইয়েরা তাঁর মৃত্যু চেয়েছিল, অথচ তিনি হলেন শাসক, আর তারা তাঁর সামনে সিজদায় লুটাল। তারা বাবার মনোযোগ নিজেদের জন্য চেয়েছিল, অথচ ইউসুফের প্রতি বাবার ভালোবাসা আর ব্যাকুলতা কেবল বাড়লই। কান্না আর জামা দিয়ে বাবাকে ধোঁকা দিতে চেয়েছিল, কিন্তু তিনি ধোঁকা খাননি। বললেন, বরং তোমাদের মন তোমাদের জন্য একটা কাহিনি সাজিয়ে দিয়েছে। প্রতিবার পরিকল্পনা ছিল তাদের, পরিণতি ছিল আল্লাহর।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeing Past the Hands",
          "bn": "হাতের পেছনের হাত"
        },
        "p": [
          {
            "en": "Wa-lakinna akthara n-nasi la ya'lamun: but most of the people do not know. At-Tabari names them. Those who thought little of Yusuf and sold him at a mean price, and the people of Egypt among whom he was sold, did not know what Allah would do with him or where his affair would end. Ibn Kathir says they do not know His wisdom in His creation and His gentleness in bringing about what He wills; the Muyassar, that they do not know the whole affair is in Allah's hand.",
            "bn": "ওয়া লাকিন্না আকসারান নাসি লা ইয়া'লামূন: কিন্তু বেশিরভাগ মানুষ জানে না। তাবারী তাদের চিনিয়ে দেন। যারা ইউসুফকে তুচ্ছ ভেবে খুব কম দামে বেচে দিয়েছিল, আর মিসরের যে লোকদের মাঝে তিনি বিক্রি হলেন, তারা জানত না আল্লাহ তাঁকে নিয়ে কী করবেন, তাঁর ব্যাপারটা কোথায় গিয়ে থামবে। ইবন কাসীর বলেন, তারা সৃষ্টির মধ্যে আল্লাহর হিকমত জানে না, জানে না তিনি যা চান তা কত সূক্ষ্মভাবে ঘটিয়ে দেন। মুয়াসসার বলে, তারা জানে না যে সব কিছু আল্লাহরই হাতে।"
          },
          {
            "en": "As-Sa'di draws the consequence: because they do not know, they act as if they could contest what Allah has decreed, though they are far too weak for it. Ma'arif al-Qur'an says most people keep their eyes on the visible causes, take them to be everything, and rarely think of Him who causes the causes. In the story, the brothers, the travellers and the buyer each saw only the next step in front of them. None of them saw the road.",
            "bn": "সা'দী এর পরিণামটা দেখান। তারা জানে না বলেই এমনভাবে চলে, যেন আল্লাহর নির্ধারিত ফয়সালার সঙ্গে পাল্লা দিতে পারবে, অথচ তারা এর জন্য একেবারেই দুর্বল। মাআরিফুল কুরআন বলে, বেশিরভাগ মানুষ চোখের সামনের উপায়-উপকরণের দিকেই তাকিয়ে থাকে, ওগুলোকেই সব মনে করে। যিনি সব উপকরণের স্রষ্টা, তাঁর কথা কদাচিৎ ভাবে। এ কাহিনিতে ভাইয়েরা, যাত্রীদল আর ক্রেতা, প্রত্যেকে দেখেছিল শুধু সামনের এক ধাপ। পুরো পথটা কেউ দেখেনি।"
          },
          {
            "en": "The verse describes what these particular people did and knew, the brothers who sold a brother and the strangers who bought him, and it licenses nothing against any living person or community. Its demand falls on the reader. When we are moved by choices we did not make, it asks us to honour whoever is placed in our care, as this man honoured a boy he had bought, to learn wherever we are set down, and to remember that the plans around us are never the last word.",
            "bn": "আয়াতটি বর্ণনা করে নির্দিষ্ট কিছু মানুষ কী করেছিল আর কী জানত: যে ভাইয়েরা নিজেদের ভাইকে বেচে দিল, আর যে অচেনা লোকেরা তাঁকে কিনল। আজকের কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। এর দাবি পাঠকের কাছে। নিজের বাছাই করা নয় এমন সিদ্ধান্ত যখন আমাদের জীবনকে সরিয়ে নেয়, আয়াত আমাদের বলে: যাকে আমাদের দায়িত্বে দেওয়া হয় তাকে সম্মান করুন, যেমন এই লোকটি কেনা এক বালককে সম্মান দিয়েছিল। যেখানে রাখা হয় সেখানেই শিখুন। আর মনে রাখুন, চারপাশের পরিকল্পনাগুলো কখনোই শেষ কথা নয়।"
          }
        ]
      }
    ]
  },
  "12:25": {
    "sections": [
      {
        "h": {
          "en": "One Door After Many",
          "bn": "অনেক দরজার পর একটি দরজা"
        },
        "p": [
          {
            "en": "Surah Yusuf is Makkan, and by 12:25 the boy of the dream is a grown man in an Egyptian household. In 12:21 the man who bought him tells his wife to make his stay honourable, and 12:22 says that when he reached maturity Allah gave him judgement and knowledge. In 12:23 the woman of the house seeks to seduce him and shuts the doors, al-abwab, in the plural. Two verses later the plural has narrowed to one: al-bab, the door, named twice in this verse.",
            "bn": "সূরা ইউসুফ মাক্কী। ১২:২৫ আয়াতে পৌঁছে স্বপ্ন দেখা সেই বালক এখন মিসরের এক ঘরে বেড়ে ওঠা পূর্ণ যুবক। ১২:২১ আয়াতে যে লোক তাকে কিনেছিল, সে স্ত্রীকে বলে তার থাকার ব্যবস্থা সম্মানের সঙ্গে করতে। ১২:২২ আয়াত জানায়, পূর্ণ বয়সে পৌঁছলে আল্লাহ তাঁকে প্রজ্ঞা ও জ্ঞান দিলেন। ১২:২৩ আয়াতে ঘরের কর্ত্রী তাঁকে ফুসলাতে চায় আর দরজাগুলো বন্ধ করে দেয়। সেখানে শব্দটা আল-আবওয়াব, বহুবচন। দুই আয়াত পরে সেই বহুবচন নেমে এসেছে একবচনে: আল-বাব, একটিমাত্র দরজা, আর এ আয়াতে তার নাম এসেছে দুবার।"
          },
          {
            "en": "12:24 stands between them, and its question is not this verse's; it is enough that it closes with Allah turning evil and indecency away from him, for he was of His chosen servants. In 12:26 Yusuf (AS) answers and a witness from her own family speaks about the shirt, 12:27 and 12:28 settle the matter, and 12:29 tells the woman to seek forgiveness. None of the eight commentaries consulted for this article gives an occasion of revelation for the verse; its setting is the story itself.",
            "bn": "মাঝখানে আছে ১২:২৪ আয়াত। তার প্রশ্নটা এ আয়াতের আলোচ্য নয়। এটুকু বলাই যথেষ্ট যে সেই আয়াত শেষ হয়েছে এ কথায়: আল্লাহ তাঁর কাছ থেকে মন্দ ও অশ্লীলতা সরিয়ে দিলেন, কারণ তিনি ছিলেন আল্লাহর বাছাই করা বান্দাদের একজন। ১২:২৬ আয়াতে ইউসুফ (আঃ) জবাব দেন, আর মহিলার নিজের পরিবারের একজন সাক্ষী জামা নিয়ে কথা বলে। ১২:২৭ ও ১২:২৮ আয়াতে বিষয়টার মীমাংসা হয়, আর ১২:২৯ আয়াতে মহিলাকে বলা হয় ক্ষমা চাইতে। এ লেখার জন্য যে ৮টি তাফসীর দেখা হয়েছে, তার কোনোটিতেই এ আয়াতের শানে নুযুল নেই। আয়াতের প্রেক্ষাপট কাহিনিটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Racing for Opposite Reasons",
          "bn": "একই দৌড়, দুই উদ্দেশ্য"
        },
        "p": [
          {
            "en": "Wa-stabaqa al-baba: and the two of them raced to the door. The verb is dual, from the root s-b-q, to get ahead; al-Qurtubi defines istibaq as seeking to be first to something. He calls the phrase an instance of the Qur'an's miraculous concision, in which meanings gather: when Yusuf (AS) saw the proof of his Lord he fled from her, and they ran against each other, she to bring him back to herself and he to escape her, and she caught him before he got out.",
            "bn": "ওয়াসতাবাকাল বাবা: আর তারা দুজন দরজার দিকে দৌড়াল। ক্রিয়াটি দ্বিবচন, এসেছে স-ব-ক ধাতু থেকে, যার অর্থ আগে পৌঁছানো। কুরতুবী ইসতিবাকের সংজ্ঞা দেন এভাবে: কোনো কিছুর দিকে প্রথম পৌঁছানোর চেষ্টা। তাঁর মতে এটি কুরআনের সেই অলৌকিক সংক্ষেপের নমুনা, যেখানে অল্প কথায় অনেক অর্থ জমা হয়। ইউসুফ (আঃ) রবের প্রমাণ দেখে তার কাছ থেকে পালালেন। দুজনে পাল্লা দিয়ে দৌড়াল। মহিলা চাইছিল তাঁকে ফিরিয়ে আনতে, আর তিনি চাইছিলেন তার হাত থেকে বাঁচতে। বের হওয়ার আগেই মহিলা তাঁকে ধরে ফেলল।"
          },
          {
            "en": "At-Tabari spells out the two motives inside the one verb. Yusuf (AS) ran in flight from committing indecency, once the proof of his Lord had restrained him; the woman ran after him, to get from him what she had tried to seduce him into. Then wa-qaddat qamisahu min duburin: and she tore his shirt from behind. At-Tabari explains min dubur as from behind and not from the front, and gives the reason in a clause: because Yusuf was the one fleeing and she was the one pursuing.",
            "bn": "একটি ক্রিয়ার ভেতরে দুটি উদ্দেশ্য লুকিয়ে আছে, তাবারী তা খুলে বলেন। রবের প্রমাণ ইউসুফ (আঃ)-কে থামিয়ে দিয়েছিল, তাই তিনি দৌড়েছিলেন অশ্লীল কাজ থেকে পালাতে। মহিলা দৌড়েছিল তাঁর পেছনে, যে কাজের জন্য তাঁকে ফুসলিয়েছিল তা আদায় করতে। তারপর ওয়া কাদ্দাত কামীসাহু মিন দুবুর: আর সে পেছন থেকে তাঁর জামা ছিঁড়ে ফেলল। তাবারী বলেন, মিন দুবুর মানে পেছন থেকে, সামনে থেকে নয়। কারণটাও তিনি এক বাক্যে দেন: ইউসুফ ছিলেন পলাতক, আর মহিলা ছিল তাঁর পিছু ধাওয়াকারী।"
          },
          {
            "en": "The commentators picture the moment differently. Al-Qurtubi has her seize the top of the shirt, so that it split at the collar and the tear ran down. Al-Baghawi has the woman follow to hold the door shut; he reaches it first, and she clings to his shirt from behind and pulls him towards her. Ibn Kathir adds, under the words it is said, that the shirt fell away and he kept running. The Muyassar keeps to the plain line: she pulled his shirt from behind to stop him leaving.",
            "bn": "মুহূর্তটার ছবি তাফসীরকারেরা আঁকেন ভিন্ন ভিন্নভাবে। কুরতুবীর বর্ণনায় মহিলা জামার উপরের অংশ খামচে ধরে, ফলে কলারের কাছে চিরে গিয়ে ছেঁড়াটা নিচের দিকে নেমে যায়। বাগাভীর বর্ণনায় মহিলা পেছনে আসে দরজা চেপে ধরতে। তিনি আগে পৌঁছে যান, আর মহিলা পেছন থেকে তাঁর জামা আঁকড়ে নিজের দিকে টানে। ইবন কাসীর 'বলা হয়' কথাটি জুড়ে দিয়ে আনেন যে জামাটা খুলে পড়ে গিয়েছিল আর তিনি দৌড়াতেই থাকেন। মুয়াসসার সাদামাটা কথায় থামে: বেরোনো ঠেকাতে সে পেছন থেকে তাঁর জামা টেনে ধরেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Her Husband at the Door",
          "bn": "দরজায় দাঁড়িয়ে তার স্বামী"
        },
        "p": [
          {
            "en": "Wa-alfaya sayyidaha lada al-bab: and they found her master at the door. At-Tabari glosses alfaya as came upon, sadafa, and al-Qurtubi lists it with several verbs of the same meaning: an encounter neither of them had sought. Lada al-bab, both explain, is simply at the door. The man is not named in the verse. Al-Baghawi, and a report from Ibn Ishaq in at-Tabari, give him a name; the verse leaves him as her sayyid, and so does this article.",
            "bn": "ওয়া আলফাইয়া সাইয়িদাহা লাদাল বাব: আর তারা দরজার কাছে তার মনিবকে পেল। তাবারী আলফাইয়ার অর্থ করেন সাদাফা, হঠাৎ সামনে পড়া। কুরতুবী একই অর্থের আরও কয়েকটি ক্রিয়ার সঙ্গে শব্দটিকে রাখেন। মানে এমন এক সাক্ষাৎ, যা দুজনের কেউই চায়নি। লাদাল বাব, দুজনেই বলেন, সোজা কথায় দরজার কাছে। আয়াতে লোকটির নাম নেই। বাগাভী এবং তাবারীতে ইবন ইসহাকের এক বর্ণনা তার একটা নাম দেয়। আয়াত তাকে রেখেছে শুধু মহিলার সাইয়িদ হিসেবে, এ লেখাও তাকে সেভাবেই রাখছে।"
          },
          {
            "en": "Sayyid is the ordinary word for a master or chief, and here it means husband. At-Tabari reports this from Mujahid, sayyiduha: her husband, and from Zayd ibn Thabit (RA): as-sayyid is the husband. Al-Qurtubi adds that the Copts called a husband sayyid. It is also a word of rank. Whatever she says next, she says to the man whose judgement in that house is final.",
            "bn": "সাইয়িদ সাধারণত মনিব বা নেতা বোঝায়, এখানে বোঝাচ্ছে স্বামী। তাবারী মুজাহিদ থেকে এনেছেন: সাইয়িদুহা মানে তার স্বামী। যায়দ ইবন সাবিত (রাঃ) থেকেও এনেছেন: সাইয়িদ মানে স্বামী। কুরতুবী যোগ করেন, কিবতীরা স্বামীকে সাইয়িদ বলত। শব্দটায় পদমর্যাদার ইঙ্গিতও আছে। এরপর মহিলা যা বলবে, বলবে এমন মানুষকে, যার রায় ওই ঘরে শেষ কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Speaking Before Being Asked",
          "bn": "প্রশ্নের আগেই অভিযোগ"
        },
        "p": [
          {
            "en": "Then she speaks, and the order matters. Al-Baghawi says she spoke sabiqatan bil-qawl, getting in first with her words to her husband, the same root as the race to the door: Yusuf (AS) had reached the door first, and she reached the husband's ear first. At-Tabari says she feared her husband would suspect her of indecency, and records from Ibn Ishaq that she smeared Yusuf with the evil in her own place, out of fear of being accused.",
            "bn": "এরপর মহিলা কথা বলে, আর কে আগে বলল, সেটাই এখানে আসল। বাগাভী বলেন, সে কথা বলেছিল সাবিকাতান বিল-কাওল, অর্থাৎ কথায় স্বামীর কাছে সবার আগে পৌঁছে গিয়ে। শব্দটা সেই একই ধাতুর, যা দরজার দিকে দৌড়ের বেলায় এসেছে। দরজায় আগে পৌঁছেছিলেন ইউসুফ (আঃ), আর স্বামীর কানে আগে পৌঁছাল মহিলা। তাবারী বলেন, তার ভয় ছিল স্বামী তাকেই অশ্লীলতার দায়ে সন্দেহ করবে। ইবন ইসহাক থেকে তিনি এনেছেন, নিজে অভিযুক্ত হওয়ার ভয়ে সে নিজের জায়গার কালিমা ইউসুফের গায়ে মাখিয়ে দিল।"
          },
          {
            "en": "Ibn Kathir names what she did in two words: mutanassila, disowning the deed, and qadhifa Yusuf bi-da'iha, throwing at Yusuf her own affliction. As-Sa'di calls it plainly a rush to the lie, and notices a detail in the wording: she said man arada, whoever intended, not man fa'ala, whoever did. In that choice, he says, she cleared herself and cleared him as well of the act; the quarrel was only over intent and seduction.",
            "bn": "মহিলা কী করল, ইবন কাসীর তা দুই শব্দে বলেছেন। মুতানাসসিলা, অর্থাৎ কাজটার দায় ঝেড়ে ফেলা। আর কাযিফাতান ইউসুফা বিদাইহা, অর্থাৎ নিজের রোগ ইউসুফের গায়ে ছুড়ে দেওয়া। সাদী সোজাসুজি বলেন, সে মিথ্যার দিকে ছুটে গেল। তবে শব্দচয়নের একটা খুঁটিনাটিও তাঁর চোখে পড়েছে। সে বলেছে মান আরাদা, যে ইচ্ছা করেছে। বলেনি মান ফাআলা, যে করে ফেলেছে। সাদীর মতে এই শব্দ বেছে নিয়ে সে নিজেকেও কাজটা থেকে মুক্ত রাখল, ইউসুফকেও। বিবাদ রইল শুধু ইচ্ছা আর ফুসলানো নিয়ে।"
          },
          {
            "en": "Her proposed sentence is read two ways. Illa an yusjana aw 'adhabun alim: except that he be imprisoned, or a painful punishment. Ibn Kathir and al-Baghawi take the painful punishment to be a beating, al-Baghawi specifying the whip. Then al-Baghawi adds what the others do not: having named the crime, she feared for him that her husband would kill him, and so she said, prison. Ibn Kathir reads the whole speech as her scheme and nothing more. Al-Baghawi leaves room for a flicker of protection inside the accusation itself.",
            "bn": "মহিলার প্রস্তাবিত সাজা দুইভাবে পড়া হয়েছে। ইল্লা আন ইউসজানা আও আযাবুন আলীম: তাকে জেলে দেওয়া হোক, অথবা কঠিন শাস্তি। ইবন কাসীর আর বাগাভী কঠিন শাস্তি বলতে বুঝেছেন প্রহার, বাগাভী আরও নির্দিষ্ট করে বলেছেন চাবুক। এরপর বাগাভী এমন একটা কথা যোগ করেন যা অন্যরা বলেননি। অপরাধের কথা তোলার পর মহিলার ভয় হল, স্বামী হয়তো তাঁকে মেরেই ফেলবে। তাই সে বলল, জেল। ইবন কাসীরের পাঠে পুরো কথাটাই কেবল তার চক্রান্ত। বাগাভী অভিযোগের ভেতরেও রক্ষা করার এক ঝলক ইচ্ছার জায়গা রেখে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Narration Brought Alongside",
          "bn": "পাশে রাখা একটি হাদিস"
        },
        "p": [
          {
            "en": "None of the eight commentaries consulted for 12:25 attaches a prophetic hadith to it; what they carry are reports from Companions and their students on the meaning of words. A sound narration speaks to the scene all the same, and it is brought here as a general principle, not as something the commentators tied to this verse. Al-Bukhari relates it from Abu Hurayrah (RA), and at number 660 in his Sahih the Prophet ﷺ names seven whom Allah will shade.",
            "bn": "১২:২৫ আয়াতের জন্য যে ৮টি তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে নবীজির কোনো হাদিস জুড়ে দেয়নি। সেগুলোতে আছে শব্দের অর্থ নিয়ে সাহাবী ও তাবিঈদের বর্ণনা। তবু একটি সহীহ হাদিস এই দৃশ্যের সঙ্গে মিলে যায়। হাদিসটি এখানে আনা হলো সাধারণ মূলনীতি হিসেবে, তাফসীরকারেরা একে এ আয়াতের সঙ্গে জুড়েছেন বলে নয়। বুখারী তা আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন। তাঁর সহীহ গ্রন্থের ৬৬০ নম্বর হাদিসে নবী ﷺ ৭ ধরনের মানুষের কথা বলেছেন, যাদের আল্লাহ ছায়া দেবেন।"
          },
          {
            "en": "In al-Bukhari's wording, the Prophet ﷺ said: \"Allah will give shade, to seven, on the Day when there will be no shade but His. (These seven persons are) a just ruler, a youth who has been brought up in the worship of Allah (i.e. worships Allah sincerely from childhood), a man whose heart is attached to the mosques (i.e. to pray the compulsory prayers in the mosque in congregation), two persons who love each other only for Allah's sake and they meet and part in Allah's cause only,",
            "bn": "বুখারীর ভাষ্যে নবী ﷺ বলেছেন: \"যেদিন আল্লাহর ছায়া ছাড়া আর কোনো ছায়া থাকবে না, সেদিন আল্লাহ ৭ জনকে ছায়া দেবেন। (এই ৭ জন হলেন) ন্যায়পরায়ণ শাসক; সেই যুবক, যে আল্লাহর ইবাদতের মধ্যে বেড়ে উঠেছে (অর্থাৎ শৈশব থেকেই খাঁটি মনে আল্লাহর ইবাদত করে); সেই ব্যক্তি, যার অন্তর মসজিদের সঙ্গে ঝুলে থাকে (অর্থাৎ ফরজ নামাজ মসজিদে জামাআতের সঙ্গে আদায় করে); এমন দুজন, যারা শুধু আল্লাহর জন্যই পরস্পরকে ভালোবাসে, আর আল্লাহর পথেই একত্র হয় ও আল্লাহর পথেই আলাদা হয়;"
          },
          {
            "en": "a man who refuses the call of a charming woman of noble birth for illicit intercourse with her and says: I am afraid of Allah, a man who gives charitable gifts so secretly that his left hand does not know what his right hand has given (i.e. nobody knows how much he has given in charity), and a person who remembers Allah in seclusion and his eyes are then flooded with tears.\" The narration praises the refusal. This verse shows what a refusal can cost: a torn shirt, and a false charge within the same minute.",
            "bn": "সেই ব্যক্তি, যাকে অভিজাত বংশের এক সুন্দরী নারী অবৈধ মিলনের জন্য ডাকে, আর সে তা ফিরিয়ে দিয়ে বলে: আমি আল্লাহকে ভয় করি; সেই ব্যক্তি, যে এত গোপনে দান করে যে তার ডান হাত কী দিল বাম হাত তা জানে না (অর্থাৎ সে কত দান করল কেউ জানে না); আর সেই ব্যক্তি, যে নির্জনে আল্লাহকে স্মরণ করে আর তার দুচোখ অশ্রুতে ভেসে যায়।\" হাদিসটি প্রশংসা করছে ফিরিয়ে দেওয়ার। আর এ আয়াত দেখায়, ফিরিয়ে দেওয়ার দাম কত চড়া হতে পারে: ছেঁড়া জামা, আর সেই মুহূর্তেই মিথ্যা অভিযোগ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Accuser Takes It Back",
          "bn": "অভিযোগকারীর মুখেই ফেরত"
        },
        "p": [
          {
            "en": "The surah answers this verse's accusation more than once, and in the accuser's own voice. In 12:32, before the women of the city, she says that she did seek to seduce him and he held himself back, and she repeats the threat of prison. Then in 12:51, after his time in prison, before the king: now the truth has come out; it was I who sought to seduce him, and he is of the truthful. The first word she spoke at the door is the one she finally takes back.",
            "bn": "এ আয়াতের অভিযোগের জবাব সূরাটি দিয়েছে একাধিকবার, আর তা অভিযোগকারীর নিজের মুখে। ১২:৩২ আয়াতে নগরের মহিলাদের সামনে সে স্বীকার করে, হ্যাঁ, আমিই তাকে ফুসলাতে চেয়েছিলাম, কিন্তু সে নিজেকে সামলে রেখেছে। সঙ্গে জেলের হুমকিটাও সে আবার দেয়। তারপর ১২:৫১ আয়াতে, জেলখানার দিনগুলো পেরিয়ে, রাজার সামনে সে বলে: এখন সত্য প্রকাশ হয়ে গেছে, আমিই তাকে ফুসলাতে চেয়েছিলাম, আর সে সত্যবাদীদের একজন। দরজায় দাঁড়িয়ে বলা প্রথম কথাটা শেষ পর্যন্ত সে নিজেই ফিরিয়ে নেয়।"
          },
          {
            "en": "Two verses beyond the surah name what the speech at the door did and what whoever hears such speech owes. 4:112 says that whoever earns an offence or a sin and then throws it on an innocent person has taken on a slander and a manifest sin. 24:12 asks those who heard a slander why they did not think well of their own people and call it a plain lie. Between them, they forbid shifting blame, and they forbid passing a charge on unexamined.",
            "bn": "সূরার বাইরের দুটি আয়াত বলে দেয়, দরজায় বলা ওই কথা আসলে কী ছিল, আর এমন কথা যে শোনে তার দায়িত্ব কী। ৪:১১২ আয়াত বলছে, যে নিজে কোনো দোষ বা গুনাহ করে তা কোনো নির্দোষের উপর চাপিয়ে দেয়, সে নিজের কাঁধে তুলে নেয় অপবাদ আর প্রকাশ্য গুনাহ। ২৪:১২ আয়াত অপবাদ শুনেছে এমন লোকদের জিজ্ঞেস করে, কেন তারা নিজেদের লোকদের সম্পর্কে ভালো ধারণা রাখল না, কেন বলল না যে এ তো খোলাখুলি মিথ্যা। দুটি আয়াত মিলে দোষ চাপানো নিষেধ করে, আর যাচাই না করে অভিযোগ ছড়ানোও নিষেধ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Verse Does Not License",
          "bn": "এ আয়াত যার অনুমতি দেয় না"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse narrates one false accusation, made by one person, in one story, and the Qur'an itself clears the accused, in 12:26 to 12:28 and again in 12:51 from the accuser's own mouth. It gives no licence to disbelieve or dismiss anyone who reports being wronged, harassed or assaulted, and no licence to suspect women as a class. Whoever reaches for Yusuf (AS) to wave away a complaint has taken a story about a false charge and turned it into a false charge of their own.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি কাহিনির ভেতরে একজন মানুষের করা একটিমাত্র মিথ্যা অভিযোগের বর্ণনা দেয়। আর অভিযুক্তকে কুরআন নিজেই নির্দোষ ঘোষণা করেছে, ১২:২৬ থেকে ১২:২৮ আয়াতে, আবার ১২:৫১ আয়াতে অভিযোগকারীর নিজের মুখে। যে বলে তার উপর অন্যায় হয়েছে, তাকে হয়রানি বা নির্যাতন করা হয়েছে, তাকে অবিশ্বাস করার বা উড়িয়ে দেওয়ার কোনো অনুমতি এ আয়াত দেয় না। নারীদের গোটা জাতকে সন্দেহ করারও কোনো অনুমতি দেয় না। কেউ যদি কারও অভিযোগ উড়িয়ে দিতে ইউসুফ (আঃ)-এর কাহিনি টেনে আনে, তবে মিথ্যা অভিযোগের এক কাহিনিকে সে নিজেই বানিয়ে ফেলল আরেকটা মিথ্যা অভিযোগ।"
          },
          {
            "en": "Notice too whose words are whose. The sentence about women's plotting in 12:28 is spoken by the husband, and the Qur'an reports it as his speech. Al-Qurtubi finds in the torn shirt a basis for reasoning from what ordinarily happens, since a shirt pulled from behind tears at the back. Ma'arif al-Qur'an, on the next verse, says such signs are weighed in judging a dispute, though signs alone do not count as sufficient proof. The listener's lesson is care with every account.",
            "bn": "কোন কথা কার, সেটাও খেয়াল রাখা দরকার। ১২:২৮ আয়াতে নারীদের চক্রান্ত নিয়ে যে বাক্য, তা স্বামীর মুখের কথা, আর কুরআন সেটা তার কথা হিসেবেই উদ্ধৃত করেছে। ছেঁড়া জামা থেকে কুরতুবী একটা ভিত্তি পান: সাধারণত যা ঘটে, তা দিয়ে যুক্তি দাঁড় করানো যায়। পেছন থেকে টানলে জামা তো পেছনেই ছেঁড়ে। মাআরিফুল কুরআন পরের আয়াতের আলোচনায় বলে, বিবাদের মীমাংসায় এমন আলামত বিবেচনায় আসে, তবে শুধু আলামতকে যথেষ্ট প্রমাণ ধরা হয় না। তাই শ্রোতার শিক্ষা হলো, প্রতিটি বিবরণ সাবধানে যাচাই করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Running Toward the Way Out",
          "bn": "বেরোনোর পথের দিকে দৌড়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws its first ruling from wa-stabaqa al-baba: a place where there is a danger of being drawn into sin must be left outright, as Yusuf (AS) showed by running from it. Lived, that is concrete. Leave the conversation that is turning, close the screen, walk out of the room, change the route that passes the old temptation. Ma'arif adds a second ruling: keep striving in obedience even when no result seems to come, because results rest with Allah.",
            "bn": "মাআরিফুল কুরআন ওয়াসতাবাকাল বাবা থেকে প্রথম যে মাসআলা বের করে তা এই: যেখানে গুনাহে জড়িয়ে পড়ার আশঙ্কা আছে, সে জায়গা সরাসরি ছেড়ে দিতে হবে। ইউসুফ (আঃ) দৌড়ে সরে গিয়ে সেটাই দেখিয়েছেন। বাস্তবে এর চেহারা খুব স্পষ্ট। যে আলাপ বাঁক নিচ্ছে তা থেকে উঠে যান, স্ক্রিন বন্ধ করুন, ঘর থেকে বেরিয়ে যান, পুরোনো প্রলোভনের পাশ দিয়ে যাওয়া পথটা বদলে ফেলুন। মাআরিফ দ্বিতীয় আরেকটি মাসআলাও যোগ করে: ফল চোখে না পড়লেও আনুগত্যের চেষ্টা থামাবেন না, কারণ ফল আল্লাহর হাতে।"
          },
          {
            "en": "The other half of the verse concerns the moment of being caught. The woman's reflex is a common one: speak first, frame the story, name a culprit, propose a punishment for someone else. When you are found at fault, say what you did before anyone else is made to carry it; if you have let another person's name take your blame, go back and clear it. And if a false charge falls on you, Ma'arif notes on the next verse that speaking up in your own defence is the way of the prophets.",
            "bn": "আয়াতের বাকি অর্ধেক ধরা পড়ার মুহূর্ত নিয়ে। মহিলার প্রতিক্রিয়া খুবই চেনা: আগে মুখ খোলা, কাহিনিটা নিজের মতো সাজানো, একজনকে দোষী বানানো, আর অন্যের জন্য সাজা চাওয়া। ভুলে ধরা পড়লে অন্য কাউকে দায় বইতে হওয়ার আগেই নিজে বলুন আপনি কী করেছেন। আপনার দোষের ভার যদি কখনো অন্যের নামে গিয়ে পড়ে থাকে, ফিরে গিয়ে তা পরিষ্কার করুন। আর আপনার উপর মিথ্যা অভিযোগ এলে, মাআরিফ পরের আয়াতের আলোচনায় বলে, নিজের পক্ষে মুখ খোলাই নবীদের পথ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer by the Door",
          "bn": "দরজার কাছে একটি দুআ"
        },
        "p": [
          {
            "en": "The tafsir consulted here attaches no Sunnah supplication to this verse, so here is a short prayer in the passage's own vocabulary, offered as such and not as a narration: O Allah, when wrong closes its doors around me, show me Your proof and let me run for the way out. Turn evil and indecency away from me as You turned them from Your chosen servant. And when I am caught in a fault, let my first words be the truth about myself.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে সুন্নাহর কোনো দুআ জুড়ে দেয়নি। তাই এই অংশের শব্দ দিয়েই একটি ছোট দুআ দেওয়া হলো। এটি নিজেদের রচনা, কোনো বর্ণনা নয়: হে আল্লাহ, অন্যায় যখন আমার চারপাশের দরজা বন্ধ করে দেয়, তখন আমাকে আপনার প্রমাণ দেখান, আর বেরোনোর পথের দিকে আমাকে ছুটে যেতে দিন। আপনার বাছাই করা বান্দার কাছ থেকে যেভাবে মন্দ ও অশ্লীলতা সরিয়ে দিয়েছিলেন, আমার কাছ থেকেও সেভাবে সরিয়ে দিন। আর কোনো ভুলে ধরা পড়লে আমার মুখের প্রথম কথা যেন হয় নিজের সম্পর্কে সত্য কথা।"
          },
          {
            "en": "Questions to carry: which door do I need to run for this week? The last time I was caught out, were my first words an admission or an accusation? Have I ever spoken first so that my version would arrive before the truth? When someone tells me they were wronged, do I listen and look for the truth, or reach for a story to wave them away? And whose name has paid, even a little, for a mistake that was mine?",
            "bn": "সঙ্গে রাখার মতো কিছু প্রশ্ন। এ সপ্তাহে কোন দরজার দিকে আমার দৌড়ানো দরকার? শেষবার ধরা পড়ার পর আমার প্রথম কথা কি স্বীকারোক্তি ছিল, নাকি অভিযোগ? সত্য পৌঁছানোর আগে নিজের ভাষ্য পৌঁছে দিতে আমি কি কখনো আগ বাড়িয়ে কথা বলেছি? কেউ যখন বলে তার উপর অন্যায় হয়েছে, আমি কি শুনি আর সত্য খুঁজি, নাকি কোনো কাহিনি টেনে এনে তাকে উড়িয়ে দিই? আর আমার করা ভুলের দাম, অল্প হলেও, কার সুনাম দিয়ে শোধ হয়েছে?"
          }
        ]
      }
    ]
  },
  "12:30": {
    "sections": [
      {
        "h": {
          "en": "A Secret Leaves the House",
          "bn": "ঘরের কথা নগরে"
        },
        "p": [
          {
            "en": "Surah Yusuf is Makkan, and 12:30 opens a public scene straight after a private one. In 12:23 the woman of the house sought to seduce Yusuf (AS) behind closed doors; in 12:25 to 12:28 a shirt torn from behind settles who pursued whom. In 12:29 the husband gives his ruling: Yusuf, turn away from this, and you, ask forgiveness for your sin. Ma'arif al-Qur'an, commenting on 12:29 and 12:30 together, takes turn away from this to mean do not speak of it before others, so that no disgrace follows.",
            "bn": "সূরা ইউসুফ মাক্কী। ঘরের ভেতরের একটি দৃশ্য শেষ হতেই ১২:৩০ আয়াত আমাদের নিয়ে যায় লোকালয়ে। ১২:২৩ আয়াতে ঘরের কর্ত্রী দরজা বন্ধ করে ইউসুফ (আঃ)-কে ফুসলাতে চেয়েছিল। ১২:২৫ থেকে ১২:২৮ আয়াতে পেছন দিক থেকে ছেঁড়া জামাই বলে দেয়, কে কার পেছনে ছুটেছিল। ১২:২৯ আয়াতে স্বামী রায় দেয়: ইউসুফ, এ ব্যাপারটা ছেড়ে দাও, আর তুমি নিজের গুনাহের জন্য ক্ষমা চাও। মাআরিফুল কুরআন ১২:২৯ ও ১২:৩০ আয়াত একসঙ্গে ব্যাখ্যা করতে গিয়ে বলে, 'ছেড়ে দাও' মানে অন্যদের সামনে এ নিয়ে কিছু বোলো না, যাতে বদনাম না ছড়ায়।"
          },
          {
            "en": "Then comes this verse, eighteen words long, and the matter is out anyway. Ibn Kathir says the news spread in the city until people talked of it, and that the city is Misr; al-Baghawi says the same and records another view, that it was the city of 'Ayn Shams. The next verse, 12:31, answers the talk with a banquet, and that scene belongs to its own reflection. None of the eight commentaries consulted for this verse records an occasion of revelation; its setting is the story itself.",
            "bn": "এরপর আসে এই আয়াত, মাত্র ১৮টি শব্দের। কিন্তু ততক্ষণে কথা বেরিয়ে গেছে। ইবনে কাসীর বলেন, খবরটা নগরে এমনভাবে ছড়াল যে লোকে এ নিয়েই আলোচনা করতে লাগল, আর সেই নগর হলো মিসর। বাগাবীও তা-ই বলেন, সঙ্গে আরেকটি মত উল্লেখ করেন যে নগরটি ছিল আইন শামস। পরের আয়াত, ১২:৩১, এই কানাকানির জবাব দেয় একটি ভোজসভা দিয়ে। সে দৃশ্য তার নিজের আলোচনার জন্য তোলা থাক। এ আয়াতের জন্য যে আটটি তাফসীর আনা হয়েছে, তার কোনোটিতে শানে নুযূল নেই। আয়াতের প্রেক্ষাপট কাহিনিটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Some Women, a Wife, a Servant",
          "bn": "কয়েকজন নারী, এক গৃহিণী, এক খাদেম"
        },
        "p": [
          {
            "en": "Wa-qala niswatun fi l-madinah: and women in the city said. Al-Qurtubi pauses on the grammar. The verb is masculine though the speakers are women, and he says both qala and qalat are allowed with such a plural, just as the Arabs say both qalat al-a'rab and qala al-a'rab. He sets niswa beside nisa', which he calls the plural used for a large number. And he gives the reason for the scene in a single clause: the story had spread among the people of Egypt, so the women talked.",
            "bn": "ওয়া কালা নিসওয়াতুন ফিল মাদীনাহ: নগরের কিছু নারী বলল। কুরতুবী এখানে ব্যাকরণের একটা কথায় একটু থামেন। বক্তারা নারী, অথচ ক্রিয়াটি পুংলিঙ্গে। তিনি বলেন, এমন বহুবচনের সঙ্গে 'কালা' ও 'কালাত' দুটোই চলে, যেমন আরবরা 'কালাতিল আ'রাব' আর 'কালাল আ'রাব' দুভাবেই বলে। নিসওয়া শব্দটিকে তিনি মিলিয়ে দেখান নিসা'-র সঙ্গে, আর নিসা'-কে বলেন বড় সংখ্যার বহুবচন। আর পুরো দৃশ্যের কারণ তিনি এক বাক্যে বলে দেন: ঘটনাটা মিসরবাসীর মধ্যে ছড়িয়ে পড়েছিল, তাই নারীরা আলোচনা শুরু করল।"
          },
          {
            "en": "Who were they? The verse does not say, and it gives no number. Al-Baghawi reports from Muqatil that they were five, wives of officials, among them the king's chamberlain, the baker and the cupbearer, and adds another view, that they were women from the nobility of Egypt. Al-Qurtubi gives a similar list under qila, it is said. Ibn Kathir speaks of women such as the wives of princes and great men. This article leaves them as the verse leaves them: some women, in a city, talking.",
            "bn": "তারা কারা ছিল? আয়াত তা বলে না, সংখ্যাও বলে না। বাগাবী মুকাতিলের সূত্রে বলেন, তারা ছিল পাঁচজন, রাজদরবারের কর্মকর্তাদের স্ত্রী। তাদের মধ্যে ছিল রাজার দারোয়ান-প্রধান, রুটিওয়ালা ও পানীয় পরিবেশকের স্ত্রী। সঙ্গে আরেকটি মতও দেন যে তারা ছিল মিসরের অভিজাত ঘরের নারী। কুরতুবীও 'বলা হয়' বলে প্রায় একই রকম একটি তালিকা দেন। ইবনে কাসীরের কথায়, তারা ছিল আমীর-উমারা ও বড় বড় লোকের স্ত্রীদের মতো নারী। এই লেখা তাদের সেভাবেই রাখছে, যেভাবে আয়াত রেখেছে: এক নগরে কয়েকজন নারী, যারা কথা বলছিল।"
          },
          {
            "en": "Their sentence names her by her husband's rank: imra'at al-'Aziz, the wife of al-'Aziz. At-Tabari says al-'aziz in the speech of the Arabs means the king, from 'izza, might; Ibn Kathir calls this man the wazir. The young man they call fataha, her fata. Al-Qurtubi says fata in Arabic is a young man, as fatat is a young woman; at-Tabari, with a report from Ibn Ishaq, glosses it as her slave; al-Qurtubi records from Qatada that he was her husband's fata, since Yusuf (AS) lived among them with the standing of one owned.",
            "bn": "তাদের কথায় মহিলাটির পরিচয় আসে স্বামীর পদ দিয়ে: ইমরাআতুল আযীয, আযীযের স্ত্রী। তাবারী বলেন, আরবদের ভাষায় 'আযীয' মানে রাজা, শব্দটি এসেছে 'ইযযাহ' বা ক্ষমতা থেকে। ইবনে কাসীর এই লোকটিকে বলেন উযীর। যুবককে তারা বলে 'ফাতাহা', তার ফাতা। কুরতুবী বলেন, আরবিতে ফাতা মানে যুবক, যেমন ফাতাত মানে তরুণী। তাবারী ইবনে ইসহাকের একটি বর্ণনা এনে এর অর্থ করেন তার গোলাম। কুরতুবী কাতাদার সূত্রে বলেন, তিনি আসলে ছিলেন স্বামীর ফাতা, কারণ ইউসুফ (আঃ) ওই ঘরে থাকতেন ক্রীতদাসের মর্যাদায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Beneath the Heart's Lining",
          "bn": "হৃদয়ের পর্দার নিচে"
        },
        "p": [
          {
            "en": "Qad shaghafaha hubban: love has reached her shaghaf. At-Tabari explains that love of Yusuf (AS) reached the shaghaf of her heart and went in beneath it, until it overcame her heart. The shaghaf, he says, is the heart's veil and its casing, the covering it sits inside, and he adds that the people of interpretation said the same. On this reading the women describe no passing fancy, but a love already settled beneath the covering.",
            "bn": "কাদ শাগাফাহা হুব্বান: ভালোবাসা তার শাগাফ পর্যন্ত পৌঁছে গেছে। তাবারী ব্যাখ্যা করেন, ইউসুফ (আঃ)-এর প্রতি ভালোবাসা মহিলাটির হৃদয়ের শাগাফে পৌঁছে তার নিচে ঢুকে পড়েছিল, শেষে হৃদয়টাকেই দখল করে নিয়েছিল। তাঁর কথায় শাগাফ হলো হৃদয়ের পর্দা, তার আবরণ, যার ভেতরে হৃদয় থাকে। তিনি আরও বলেন, তাফসীরকারগণও এ কথাই বলেছেন। এই ব্যাখ্যা অনুযায়ী নারীরা ক্ষণিকের মোহের কথা বলছে না। বলছে এমন ভালোবাসার কথা, যা আবরণের নিচে গিয়ে বসে গেছে।"
          },
          {
            "en": "At-Tabari then gathers the early glosses, and they differ in image more than in meaning. From Ibn 'Abbas (RA) come two: 'allaqaha, it fastened itself to her, and ghalabaha, it overpowered her. Mujahid says his love entered her shaghaf. Al-Hasan says batanaha, it got inside her. As-Suddi says the shaghaf is a skin over the heart, and the love passed through the skin until it touched the heart itself.",
            "bn": "এরপর তাবারী পূর্বসূরিদের ব্যাখ্যাগুলো একত্র করেন। দেখা যায়, তাদের মধ্যে পার্থক্য অর্থে যতটা, তার চেয়ে বেশি ছবিতে। ইবনে আব্বাস (রাঃ) থেকে দুটি কথা আসে: 'আল্লাকাহা', ভালোবাসা তার সঙ্গে আটকে গেছে, আর 'গালাবাহা', তাকে পরাস্ত করেছে। মুজাহিদ বলেন, তার ভালোবাসা মহিলাটির শাগাফে ঢুকে গেছে। হাসান বলেন 'বাতানাহা', তার ভেতরে ঢুকে পড়েছে। সুদ্দী বলেন, শাগাফ হলো হৃদয়ের ওপরের একটি চামড়া, ভালোবাসা সেই চামড়া ভেদ করে হৃদয় পর্যন্ত পৌঁছে গিয়েছিল।"
          },
          {
            "en": "As-Sa'di takes the shaghaf to be the heart's inner part and its core, and calls this the greatest degree that love can reach. Al-Qurtubi, after listing the views, says their meanings are close: his love reached her shaghaf and took hold of her heart. He also records a distinction from al-Hasan: the shaghaf is the heart's veil and the sha'af its dark core, and had love reached the sha'af she would have died. On any of these readings the women are describing something past the surface, past the reach of manners.",
            "bn": "সা'দী শাগাফ বলতে বোঝেন হৃদয়ের একেবারে ভেতরের অংশ, তার কেন্দ্রবিন্দু। তিনি বলেন, ভালোবাসা এর চেয়ে গভীরে যেতে পারে না। কুরতুবী মতগুলো সাজিয়ে বলেন, এদের অর্থ কাছাকাছি: যুবকের ভালোবাসা মহিলাটির শাগাফে পৌঁছে তার হৃদয় দখল করে নিয়েছিল। তিনি হাসানের একটি সূক্ষ্ম পার্থক্যও উল্লেখ করেন: শাগাফ হলো হৃদয়ের পর্দা, আর শা'আফ তার কালো কেন্দ্র। ভালোবাসা যদি শা'আফ পর্যন্ত পৌঁছাত, তবে সে মারাই যেত। যে ব্যাখ্যাই নিই, নারীরা যা বর্ণনা করছে তা ওপরের স্তরের ব্যাপার নয়। তা আদব-কায়দার নাগালের বাইরে চলে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Letter, Two Readings",
          "bn": "এক হরফের দুই কিরাআত"
        },
        "p": [
          {
            "en": "At-Tabari records that the general body of readers in the great cities read shaghafaha, with the letter ghayn, while Abu Raja' read sha'afaha, with 'ayn, and he gives chains for the same reading from 'Awf and from al-A'raj. Al-Qurtubi names Abu Ja'far ibn Muhammad, Ibn Muhaysin and al-Hasan for it; al-Baghawi names ash-Sha'bi and al-A'raj. Those who read it with 'ayn, at-Tabari says, took the sense that love had spread through the whole of her. A Kufan authority on Arabic linked it to sha'af al-jibal, the mountain peaks, as though love had carried her off in every direction.",
            "bn": "তাবারী জানান, বড় বড় নগরের সাধারণ কারীগণ পড়েছেন 'শাগাফাহা', গাইন হরফ দিয়ে। আবু রাজা পড়েছেন 'শা'আফাহা', আইন দিয়ে। একই কিরাআত আওফ ও আ'রাজ থেকেও তিনি সনদসহ এনেছেন। কুরতুবী এ কিরাআতের কারী হিসেবে আবু জা'ফর ইবনে মুহাম্মাদ, ইবনে মুহাইসিন ও হাসানের নাম উল্লেখ করেন। বাগাবী উল্লেখ করেন শা'বী ও আ'রাজের নাম। তাবারী বলেন, যারা আইন দিয়ে পড়েছেন, তারা অর্থ নিয়েছেন: ভালোবাসা তার সারা সত্তায় ছেয়ে গেছে। কুফার এক ভাষাবিদ একে যুক্ত করেছেন 'শা'আফুল জিবাল', অর্থাৎ পাহাড়ের চূড়ার সঙ্গে। যেন ভালোবাসা তাকে সব দিকে টেনে নিয়ে গেছে।"
          },
          {
            "en": "The distinctions they record are sharp. Ash-Sha'bi, in at-Tabari, says the mashghuf is the lover and the mash'uf the person driven mad; Ibn al-A'rabi, in al-Qurtubi, says it means love burned her heart. Ibn Zayd claimed that sha'af belongs to hatred, and at-Tabari rejects that as meaningless, since sha'af for love that fills a person is too well known. His verdict on the reading is plain: shaghafaha, with ghayn, is correct, because the authoritative readers agree on it. It is the reading in the text shown here.",
            "bn": "তারা যে পার্থক্যগুলো টেনেছেন, সেগুলো বেশ সূক্ষ্ম। তাবারীর বর্ণনায় শা'বী বলেন, 'মাশগূফ' হলো প্রেমিক, আর 'মাশ'ঊফ' হলো পাগল। কুরতুবীর বর্ণনায় ইবনুল আ'রাবী বলেন, এর মানে ভালোবাসা তার হৃদয় পুড়িয়ে দিয়েছে। ইবনে যায়দ দাবি করেছিলেন, শা'আফ ঘৃণার বেলায় বলা হয়। তাবারী একে অর্থহীন বলে নাকচ করেন, কারণ সর্বগ্রাসী ভালোবাসা বোঝাতে শা'আফ শব্দটি সুপরিচিত। কিরাআত নিয়ে তাঁর রায় পরিষ্কার: গাইন দিয়ে 'শাগাফাহা'-ই সঠিক, কারণ নির্ভরযোগ্য কারীগণ এতে একমত। এখানে দেখানো পাঠেও এটিই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verdict Hiding a Wish",
          "bn": "রায়ের আড়ালে বাসনা"
        },
        "p": [
          {
            "en": "Their last sentence is a verdict: inna la-naraha fi dalalin mubin, we see her in clear error. At-Tabari explains it as an error in the act and a swerving from the straight way, clear to anyone who considers it. Al-Baghawi gives plain error, and another view: that she had abandoned the chastity expected of her. As-Sa'di hears a complaint about rank as well: she is a woman of great standing, married to a man of great standing, and the error they see is a state that lowers her and sets her down before people.",
            "bn": "তাদের শেষ বাক্যটি একটি রায়: ইন্না লানারাহা ফী দালালিম মুবীন, আমরা তো তাকে স্পষ্ট ভুলের মধ্যে দেখছি। তাবারী এর ব্যাখ্যা করেন কাজের ভুল হিসেবে, সোজা পথ থেকে সরে যাওয়া হিসেবে, যা একটু ভাবলেই যে কারো কাছে স্পষ্ট। বাগাবী বলেন, প্রকাশ্য ভুল। আরেক মতে, তার কাছে যে পবিত্রতা প্রত্যাশিত ছিল, সে তা ছেড়ে দিয়েছে। সা'দী এ কথার ভেতরে মর্যাদার একটা অভিযোগও শুনতে পান। মহিলাটি উঁচু মর্যাদার, তার স্বামীও উঁচু মর্যাদার। নারীরা যে ভুল দেখছে, তা এমন এক অবস্থা, যা মানুষের চোখে তাকে ছোট করে দেয়, নিচে নামিয়ে আনে।"
          },
          {
            "en": "At-Tabari's last sentence on the verse turns it around. Their saying what they said, and their talk about her and Yusuf (AS), was makr on their part, as has been reported, so that she would show them Yusuf. Ibn Kathir, in a passage running on to 12:34, gives it through Ibn Ishaq: they had heard of Yusuf's beauty and wanted to see him, so they said these words to get a look at him. In the very next verse the Qur'an itself calls their talk makr. The verdict was true; underneath it lay a wish.",
            "bn": "আয়াতের ওপর তাবারীর শেষ বাক্যটি পুরো ছবিটাই উল্টে দেয়। তিনি বলেন, বর্ণনা অনুযায়ী তাদের এসব কথা, মহিলাটি ও ইউসুফ (আঃ)-কে নিয়ে এই আলাপ, ছিল তাদের 'মাকর', অর্থাৎ কৌশল। উদ্দেশ্য ছিল, মহিলাটি যেন তাদের ইউসুফকে দেখায়। ইবনে কাসীর ১২:৩৪ পর্যন্ত বিস্তৃত এক আলোচনায় ইবনে ইসহাকের সূত্রে একই কথা বলেন: তারা ইউসুফের সৌন্দর্যের কথা শুনেছিল, তাঁকে দেখতে চেয়েছিল, তাই এক নজর দেখার জন্যই এ কথাগুলো বলেছিল। ঠিক পরের আয়াতে কুরআন নিজেই তাদের এই আলাপকে বলেছে মাকর। রায়টা সত্য ছিল, কিন্তু তার নিচে লুকিয়ে ছিল একটা বাসনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Particular People, No Class",
          "bn": "নির্দিষ্ট মানুষ, কোনো শ্রেণি নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse reports what some particular women in one city said about one particular woman. It is not a statement about women, and it gives no licence for contempt toward women or toward any group of people. Whoever reads it as a lesson about what women are like has done exactly what the verse describes: carried talk about people further than the facts allow, and enjoyed doing it. The surah's own sentence about the plotting of women, in 12:28, is the husband's speech, reported as his.",
            "bn": "কথাটা পরিষ্কার করে বলা দরকার। আয়াতটি জানাচ্ছে, এক নগরের নির্দিষ্ট কয়েকজন নারী নির্দিষ্ট একজন নারী সম্পর্কে কী বলেছিল। এটা নারীজাতি সম্পর্কে কোনো ঘোষণা নয়। নারীদের প্রতি বা কোনো গোষ্ঠীর প্রতি অবজ্ঞা দেখানোর কোনো অনুমতি এতে নেই। কেউ যদি একে পড়ে 'মেয়েরা এমনই হয়' ধরনের শিক্ষা হিসেবে, তবে সে ঠিক সেই কাজটাই করল, যা আয়াত বর্ণনা করছে। তথ্য যতদূর যায়, মানুষকে নিয়ে কথা তার চেয়ে দূরে টেনে নিল, আর তাতে মজাও পেল। নারীদের ছলনা নিয়ে সূরার যে বাক্য ১২:২৮ আয়াতে আছে, তা স্বামীর কথা, কুরআন তা তার কথা হিসেবেই উদ্ধৃত করেছে।"
          },
          {
            "en": "Nor is the wife of al-'Aziz the reader's to despise. 12:29 has already told her to seek forgiveness, and the surah does not end her story here. The article's own voice says nothing against Yusuf (AS) either: the city's talk was about her pursuit of him, and the question some raise about 12:24 belongs to that verse, not to this verse. What this verse holds up for examination is the speech of onlookers.",
            "bn": "আযীযের স্ত্রীকে ঘৃণা করাও পাঠকের কাজ নয়। ১২:২৯ আয়াতে তাকে আগেই ক্ষমা চাইতে বলা হয়েছে, আর সূরায় তার গল্প এখানেই শেষ হয়ে যায়নি। ইউসুফ (আঃ)-এর বিরুদ্ধেও এই লেখা নিজে থেকে কিছু বলছে না। নগরে কথা হচ্ছিল মহিলাটি যে তাঁর পেছনে ছুটেছিল, তা নিয়ে। ১২:২৪ আয়াত নিয়ে কেউ কেউ যে প্রশ্ন তোলেন, তার জায়গা সেই আয়াত, এটি নয়। এই আয়াত যা খুঁটিয়ে দেখতে বলে, তা হলো দর্শকদের কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Dropped Lightly",
          "bn": "অবহেলায় বলা একটি কথা"
        },
        "p": [
          {
            "en": "None of the eight commentaries consulted for 12:30 attaches a prophetic hadith to it. Ibn Kathir's English passage, which runs on to 12:34, carries two sound narrations, but they belong to the verses that follow. Since this verse turns on the tongue, a narration about the tongue is brought here as a general principle, and not as something the commentators tied to the verse. Al-Bukhari relates it from Abu Hurayrah (RA), at number 6478 in his Sahih.",
            "bn": "এ আয়াতের জন্য যে আটটি তাফসীর দেখা হয়েছে, তার কোনোটিই ১২:৩০ আয়াতের সঙ্গে নবী ﷺ-এর কোনো হাদিস জুড়ে দেয়নি। ইবনে কাসীরের ইংরেজি আলোচনা ১২:৩৪ পর্যন্ত গেছে। তাতে দুটি সহীহ বর্ণনা আছে, তবে সেগুলো পরের আয়াতগুলোর। এ আয়াতের কেন্দ্রে যেহেতু জিহ্বা, তাই জিহ্বা নিয়ে একটি হাদিস এখানে আনা হলো সাধারণ মূলনীতি হিসেবে। তাফসীরকারগণ একে এই আয়াতের সঙ্গে জুড়ে দেননি। ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে এটি বর্ণনা করেছেন, তাঁর সহীহ গ্রন্থের ৬৪৭৮ নম্বরে।"
          },
          {
            "en": "In al-Bukhari's wording, the Prophet ﷺ said: \"A slave (of Allah) may utter a word which pleases Allah without giving it much importance, and because of that Allah will raise him to degrees (of reward): a slave (of Allah) may utter a word (carelessly) which displeases Allah without thinking of its gravity and because of that he will be thrown into the Hell-Fire.\" The women of the city would hardly have called their talk grave. The narration says that is how the heaviest words are spoken.",
            "bn": "বুখারীর ভাষায় নবী ﷺ বলেছেন: \"বান্দা আল্লাহর সন্তুষ্টির এমন কথা বলে, যাকে সে তেমন গুরুত্বই দেয় না, অথচ তার কারণে আল্লাহ তার মর্যাদা বহু ধাপ উঁচু করে দেন। আর বান্দা আল্লাহর অসন্তুষ্টির এমন কথা বলে, যাকে সে তেমন গুরুত্বই দেয় না, অথচ তার কারণে সে জাহান্নামে গড়িয়ে পড়ে।\" নগরের সেই নারীরা নিজেদের আলাপকে গুরুতর কিছু বলে মনে করেনি, এমনটাই স্বাভাবিক। হাদিসটি বলছে, সবচেয়ে ভারী কথাগুলো ঠিক এভাবেই মুখ থেকে বেরোয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Sisters That Weigh Speech",
          "bn": "কথার ওজন মাপে যে আয়াতগুলো"
        },
        "p": [
          {
            "en": "24:15 describes a slander passed from mouth to mouth: you received it with your tongues, said with your mouths what you had no knowledge of, and thought it insignificant, while with Allah it was tremendous. 24:19 reaches beneath the words to the wish behind them: those who like indecency to spread among the believers face a painful punishment. Both verses place the wrong in the talkers themselves, not only in the deed they talk about.",
            "bn": "২৪:১৫ আয়াতে আছে মুখে মুখে ছড়ানো এক অপবাদের ছবি: তোমরা তা জিহ্বায় জিহ্বায় লুফে নিলে, যে বিষয়ে তোমাদের জ্ঞান ছিল না তা মুখে বললে, আর একে তুচ্ছ ভাবলে, অথচ আল্লাহর কাছে তা ছিল গুরুতর। ২৪:১৯ আয়াত কথার নিচের বাসনাটাকে ধরে: যারা চায় মুমিনদের মধ্যে অশ্লীলতা ছড়িয়ে পড়ুক, তাদের জন্য কষ্টদায়ক শাস্তি। দুটি আয়াতই দোষ খুঁজে পায় আলাপকারীদের মধ্যেও, শুধু যে কাজ নিয়ে আলাপ, তার মধ্যে নয়।"
          },
          {
            "en": "49:12 names the neighbouring habits: much suspicion, spying, and backbiting, pictured as eating a dead brother's flesh, and it closes on Allah as Accepting of repentance and Merciful. 104:1 pronounces woe on every scorner and mocker. And 50:18 reminds every speaker that no word leaves him without an observer ready beside him. Read together with 12:30, these verses turn a scene from ancient Egypt into a question about your own next conversation.",
            "bn": "৪৯:১২ আয়াত কাছাকাছি আরও কিছু অভ্যাসের নাম বলে দেয়: বেশি বেশি ধারণা করা, দোষ খোঁজা আর গীবত। গীবতকে সেখানে তুলনা করা হয়েছে মৃত ভাইয়ের গোশত খাওয়ার সঙ্গে। আয়াতটি শেষ হয় আল্লাহর দুটি গুণে: তিনি তওবা কবুলকারী, পরম দয়ালু। ১০৪:১ আয়াত দুর্ভোগের ঘোষণা দেয় সামনে-পেছনে নিন্দাকারী প্রত্যেকের জন্য। আর ৫০:১৮ আয়াত প্রত্যেক বক্তাকে মনে করিয়ে দেয়, সে যে কথাই উচ্চারণ করে, তার পাশে একজন প্রহরী প্রস্তুত থাকে। ১২:৩০ আয়াতের সঙ্গে এগুলো মিলিয়ে পড়লে প্রাচীন মিসরের একটি দৃশ্য আর পুরনো গল্প থাকে না। তা হয়ে যায় আপনার পরের আলাপ নিয়ে একটি প্রশ্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "Before You Pass It On",
          "bn": "কথাটা ছড়ানোর আগে"
        },
        "p": [
          {
            "en": "Lived, the verse asks for a pause before repeating anyone's fault. Is this mine to tell? Would I say it in these words with the person present? And what do I get from telling it: a warning that protects someone, or a small pleasure and a seat among those not in error? Where a warning is truly needed, give it plainly to the one who needs it, and stop. Where it is not, let the story end with you, and cover what Allah has not asked you to expose.",
            "bn": "জীবনে আয়াতটির দাবি হলো, কারো দোষের কথা বলার আগে একটু থামা। এটা কি আমার বলার বিষয়? মানুষটি সামনে থাকলে কি এই ভাষাতেই বলতাম? আর বলে আমি কী পাই: কাউকে রক্ষা করার মতো সতর্কবার্তা, নাকি একটু মজা আর 'ভুলটা তো আমরা করিনি' দলে একটা আসন? সত্যিই সতর্ক করা দরকার হলে যার দরকার শুধু তাকেই সোজাসুজি বলুন, তারপর থামুন। দরকার না হলে গল্পটা আপনার কাছেই শেষ হোক। আল্লাহ যা প্রকাশ করতে বলেননি, তা ঢেকে রাখুন।"
          },
          {
            "en": "The tafsir consulted here attaches no Sunnah supplication to this verse, so here is a short prayer in the passage's own vocabulary, offered as such and not as a narration: O Allah, let no love take hold of my heart where You have not allowed it, and keep my tongue from what it enjoys and You dislike. Do not let me see others in clear error while I am blind to my own. Cover my faults, and make me one who covers the faults of others.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, সেগুলো এই আয়াতের সঙ্গে সুন্নাহর কোনো দোয়া যুক্ত করেনি। তাই এখানে আয়াতের নিজের শব্দ দিয়ে একটি ছোট দোয়া দেওয়া হলো। এটি নিজেদের রচনা, কোনো বর্ণনা নয়: হে আল্লাহ, যেখানে আপনি অনুমতি দেননি, সেখানে কোনো ভালোবাসা যেন আমার হৃদয় দখল না করে। যে কথায় আমার জিহ্বা মজা পায় অথচ আপনি অপছন্দ করেন, তা থেকে আমার জিহ্বাকে হেফাজত করুন। নিজের ভুলের ব্যাপারে অন্ধ থেকে অন্যদের যেন স্পষ্ট ভুলে না দেখি। আমার দোষ ঢেকে রাখুন, আর আমাকে অন্যের দোষ ঢেকে রাখার মানুষ বানিয়ে দিন।"
          },
          {
            "en": "Questions to carry: whose fault did I last describe, and would I have said it with them in the room? When I disapprove of someone out loud, is part of me hoping to hear more? Which story about another person do I keep telling because it flatters me? When talk turns to someone absent, what do I usually do? And what have I been told in confidence that I owe it to Allah to leave untold?",
            "bn": "সঙ্গে নিয়ে যাওয়ার মতো কিছু প্রশ্ন: শেষবার কার দোষের কথা বলেছি, সে ঘরে থাকলেও কি বলতাম? কাউকে জোরে জোরে নিন্দা করার সময় মনের একটা অংশ কি আরও শোনার আশায় থাকে? অন্যের কোন গল্পটা আমি বারবার বলি শুধু এই কারণে যে তাতে আমাকে ভালো দেখায়? অনুপস্থিত কাউকে নিয়ে কথা উঠলে আমি সাধারণত কী করি? আর আমানত হিসেবে শোনা কোন কথাটা আল্লাহর ওয়াস্তে না বলে রেখে দেওয়া আমার দায়িত্ব?"
          }
        ]
      }
    ]
  },
  "12:32": {
    "sections": [
      {
        "h": {
          "en": "After the Guests Had Seen",
          "bn": "অতিথিরা দেখে ফেলার পর"
        },
        "p": [
          {
            "en": "This verse is spoken in a room full of guests. In 12:30 women of the city talked about the wife of al-'Aziz and her servant. In 12:31 she sent for them, gave each of them a knife, and called Yusuf (AS) out before them. When they saw him they were overwhelmed, cut their hands, and said that this was no human being but a noble angel. 12:32 is what she says next: nineteen words in Arabic, in three clauses, a pointing, an admission and a threat.",
            "bn": "এ আয়াতের কথাগুলো বলা হচ্ছে অতিথিতে ভরা এক ঘরে। ১২:৩০ আয়াতে নগরের কিছু নারী আযীযের স্ত্রী আর তার ভৃত্যকে নিয়ে কানাকানি করেছিল। ১২:৩১ আয়াতে সে তাদের ডেকে পাঠায়, প্রত্যেকের হাতে একটা করে ছুরি দেয়, তারপর ইউসুফ (আঃ)-কে তাদের সামনে বেরিয়ে আসতে বলে। তাঁকে দেখে তারা অভিভূত হয়ে যায়, নিজেদের হাত কেটে ফেলে, আর বলে ওঠে, এ মানুষ নয়, এ তো এক সম্মানিত ফেরেশতা। এরপর সে যা বলে, সেটাই ১২:৩২। আরবিতে উনিশটি শব্দ, তিনটি অংশ: আঙুল তুলে দেখানো, স্বীকারোক্তি, আর হুমকি।"
          },
          {
            "en": "The verse does not name her. Al-Baghawi calls her Ra'il and Ma'arif al-Qur'an calls her Zulaikha; this article keeps to the Qur'an's own way of referring to her, the wife of al-'Aziz. His answer comes in 12:33, where Yusuf (AS) tells his Lord that prison is dearer to him than what they invite him to. None of the eight commentaries consulted here gives an occasion of revelation for 12:32.",
            "bn": "আয়াতে তার নাম নেই। বাগাভী তাকে রাঈল বলেছেন, মাআরিফুল কুরআন বলেছে যুলায়খা। এই লেখা কুরআনের নিজের ডাকটাই রাখছে: আযীযের স্ত্রী। ইউসুফ (আঃ)-এর জবাব আসে ১২:৩৩ আয়াতে। সেখানে তিনি রবের দিকে ফিরে বলেন, তারা আমাকে যেদিকে ডাকছে, তার চেয়ে জেলখানা আমার কাছে বেশি প্রিয়। এখানে যে ৮টি তাফসীর দেখা হয়েছে, তার কোনোটিই ১২:৩২ আয়াতের কোনো শানে নুযূল দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Pointing at the One Blamed",
          "bn": "যাকে নিয়ে এত নিন্দা"
        },
        "p": [
          {
            "en": "Fa-dhalikunna alladhi lumtunnani fihi: so that is the man about whom you blamed me. At-Tabari spells the sentence out. What came over you when you saw him, at a glance, the loss of reason and understanding until you cut your hands: he is the man you blamed me for loving, when you said that love of her servant had reached her heart and that she was in clear error. Her pointing word answers their gossip of 12:30 with their own reaction.",
            "bn": "ফাযালিকুন্নাল্লাযী লুমতুন্নানী ফীহ: এই সে, যার ব্যাপারে তোমরা আমাকে দোষ দিয়েছিলে। তাবারী বাক্যটির ভেতরের কথা খুলে বলেন। এক নজর দেখেই তোমাদের বুদ্ধি আর বোধ এমনভাবে লোপ পেল যে নিজেদের হাতই কেটে ফেললে, এই সে-ই। একে ভালোবাসার জন্যই তোমরা আমাকে দোষ দিয়েছিলে। বলেছিলে, ভৃত্যের প্রেম তার হৃদয়ে ঢুকে গেছে, আমরা তাকে স্পষ্ট ভ্রান্তিতে দেখছি। ১২:৩০ আয়াতের কানাকানির জবাব সে দিল তাদের নিজেদের অবস্থা দিয়েই।"
          },
          {
            "en": "Al-Qurtubi records two ways of reading the grammar. On one, dhalika, normally that, here means hadha, this, and he says this is at-Tabari's choice. On the other, the pronoun in fihi refers to love, and dhalika keeps its usual sense: that love you blamed me for is this love. Al-Qurtubi and al-Baghawi both gloss fihi as about loving him. Al-Qurtubi defines lawm, blame, as describing someone with what is ugly. Ibn Kathir says she spoke to excuse herself, holding that a man of such beauty and perfection deserved to be loved.",
            "bn": "কুরতুবী এখানে ব্যাকরণের দুটি পাঠ উল্লেখ করেন। একটি মতে যালিকা শব্দের স্বাভাবিক অর্থ 'ওই', কিন্তু এখানে তা হাযা, অর্থাৎ 'এই'। তিনি বলেন, এটাই তাবারীর পছন্দ। অন্য মতে ফীহি শব্দের সর্বনাম ফিরছে ভালোবাসার দিকে, আর যালিকা তার নিজের অর্থেই আছে: যে ভালোবাসার জন্য দোষ দিয়েছিলে, সেটা এই ভালোবাসা। কুরতুবী ও বাগাভী দুজনেই ফীহির অর্থ করেন 'তাকে ভালোবাসার ব্যাপারে'। কুরতুবীর সংজ্ঞায় লাওম, অর্থাৎ নিন্দা, মানে কাউকে মন্দ গুণে বর্ণনা করা। ইবন কাসীর বলেন, নিজের পক্ষে অজুহাত দাঁড় করাতেই সে এ কথা বলেছিল। তার ধারণা ছিল, এমন রূপ আর পূর্ণতার মানুষকে ভালোবাসাই স্বাভাবিক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb of Holding Back",
          "bn": "নিজেকে সামলে রাখার ক্রিয়া"
        },
        "p": [
          {
            "en": "Then the admission: wa-laqad rawadtuhu 'an nafsihi fa-sta'sama, I did seek to seduce him, and he held himself firm. At-Tabari says she now admitted to them that she had sought to seduce him, and that what they had been saying about her in his matter was true. He records the early glosses of the verb. From Ibn 'Abbas (RA): fa-mtana'a, he refused. From Qatada: fa-sta'sa, he resisted. Ibn Kathir, al-Baghawi and al-Qurtubi give the first, he refused, and the Muyassar gives it with a second verb: he refused and would not.",
            "bn": "এরপর স্বীকারোক্তি: ওয়া লাকাদ রাওয়াদতুহু আন নাফসিহী ফাসতা'সামা, আমি তাকে ফুসলাতে চেয়েছিলাম, কিন্তু সে নিজেকে রক্ষা করেছে। তাবারী বলেন, এবার সে তাদের কাছে মেনে নিল যে সে-ই তাঁকে ফুসলাতে চেয়েছিল, আর তাঁকে নিয়ে তারা যা বলাবলি করছিল তা সত্য। ক্রিয়াটির প্রাচীন ব্যাখ্যাগুলো তিনি একত্র করেছেন। ইবন আব্বাস (রাঃ) বলেছেন: ফামতানাআ, তিনি বিরত থাকলেন। কাতাদা বলেছেন: ফাসতা'সা, তিনি অনড় রইলেন। ইবন কাসীর, বাগাভী ও কুরতুবী প্রথম অর্থটিই নেন: তিনি বিরত রইলেন। মুয়াসসার তার সঙ্গে আরেকটি ক্রিয়া জোড়ে: তিনি বিরত রইলেন, রাজি হলেন না।"
          },
          {
            "en": "Al-Qurtubi ties the word to its root. 'Isma, he says, is called by that name because it holds a person back from committing a sin, and he reports the gloss ista'sa as well, saying the meaning is one. The verb used of Yusuf (AS) is a word of holding back, and the testimony to it comes from the one person with most reason to keep quiet. The Muyassar gives the setting in her own voice: I pursued him and tried to tempt him so that he would answer me, and he refused.",
            "bn": "কুরতুবী শব্দটিকে তার মূলের সঙ্গে মিলিয়ে দেখান। তিনি বলেন, ইসমাকে ইসমা বলা হয়, কারণ তা মানুষকে গুনাহ করা থেকে আটকে রাখে। ইসতা'সা অর্থটিও তিনি উল্লেখ করেন এবং বলেন, অর্থ একই। ইউসুফ (আঃ)-এর বেলায় যে ক্রিয়া এসেছে, তা নিজেকে আটকে রাখার ক্রিয়া। আর এর সাক্ষ্য আসছে ঠিক সেই মানুষের মুখ থেকে, চুপ থাকার সবচেয়ে বেশি কারণ যার ছিল। মুয়াসসার পুরো পরিস্থিতিটা তার জবানিতেই বলে: আমি তার পিছু নিয়েছি, তাকে প্রলুব্ধ করতে চেয়েছি যেন সে সাড়া দেয়, কিন্তু সে বিরত থেকেছে।"
          },
          {
            "en": "Ibn Kathir records a reading from some scholars, and as-Sa'di gives a similar one. Having seen his outward beauty, the women now heard from her about a quality hidden from them: chastity joined to that beauty. As-Sa'di calls it his inner beauty, complete chastity, which she wanted them to see once his outward beauty was settled in their minds and they had found much excuse for her. In her mouth the sentence was praise of the one she wanted. In the Qur'an it stands as his acquittal.",
            "bn": "ইবন কাসীর কিছু আলেমের একটি ব্যাখ্যা উল্লেখ করেছেন, সা'দীও প্রায় একই কথা বলেন। নারীরা তাঁর বাইরের রূপ তো দেখেই ফেলেছিল। এবার তারা তার মুখে শুনল এমন এক গুণের কথা, যা তাদের চোখের আড়ালে ছিল: সেই রূপের সঙ্গে পবিত্রতা। সা'দী একে বলেন তাঁর ভেতরের সৌন্দর্য, পরিপূর্ণ পবিত্রতা। বাইরের রূপ তাদের মনে বসে যাওয়ার পর, আর তারা তার পক্ষে অনেক অজুহাত খুঁজে পাওয়ার পর, সে তাদের এটাও দেখাতে চেয়েছিল। তার মুখে বাক্যটি ছিল যাকে সে চায় তার প্রশংসা। কুরআনে সেই বাক্যই হয়ে আছে তাঁর নির্দোষ হওয়ার প্রমাণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Say It Before Them?",
          "bn": "সবার সামনে কেন বলা?"
        },
        "p": [
          {
            "en": "Why would she say this in front of them? Al-Baghawi says she declared it openly because she knew no blame would come to her from them, since what had struck her on seeing him had struck them too. As-Sa'di says much the same: the women's blame had ended, so she spoke openly and without concern, making plain how strongly she loved him. Ma'arif al-Qur'an says she realised her secret already lay exposed before these women, and so she began threatening him in front of them.",
            "bn": "এ কথা সে তাদের সামনে কেন বলল? বাগাভী বলেন, সে খোলাখুলি বলেছিল, কারণ সে জানত এরা আর তাকে দোষ দেবে না। তাঁকে দেখে তার যা হয়েছিল, এদেরও তা-ই হয়েছে। সা'দীর কথাও প্রায় এক: নারীদের নিন্দা থেমে গিয়েছিল, তাই সে নির্ভয়ে খোলাখুলি বলল, আর বুঝিয়ে দিল তাঁকে সে কত তীব্রভাবে ভালোবাসে। মাআরিফুল কুরআন বলে, সে বুঝে ফেলেছিল তার গোপন কথা এই নারীদের কাছে এমনিতেই ফাঁস হয়ে গেছে। তাই তাদের সামনেই সে তাঁকে হুমকি দিতে শুরু করল।"
          },
          {
            "en": "Al-Qurtubi draws the contrast with the beginning. She renewed her pursuit of him in their presence, he says, tore away the covering of modesty, and promised him prison if he would not comply. She did this only when she no longer feared blame or talk, unlike the first stage of the affair, when it had been between him and her alone. As-Sa'di adds that she was persisting in her pursuit, and that the passing of time had only increased her agitation and longing.",
            "bn": "কুরতুবী শুরুর অবস্থার সঙ্গে তুলনা টানেন। তিনি বলেন, তাদের উপস্থিতিতেই সে নতুন করে তাঁর পিছু নিল, লজ্জার আবরণ ছিঁড়ে ফেলল, আর রাজি না হলে জেলের হুমকি দিল। এটা সে করল তখনই, যখন নিন্দা বা লোকের কথার ভয় আর রইল না। শুরুতে ব্যাপারটা ছিল শুধু তাঁর আর তার মধ্যে, তখন এমন ছিল না। সা'দী যোগ করেন, সে তখনো তাঁর পিছু ছাড়েনি। সময় যত গড়িয়েছে, তার অস্থিরতা আর আকাঙ্ক্ষা ততই বেড়েছে।"
          },
          {
            "en": "The next verse speaks of what they, in the plural, invite him to, and two commentaries record a detail that fits. Al-Baghawi says the women told him: obey your mistress. Ma'arif al-Qur'an, citing some commentators, says they all began telling him that she was their benefactor and he should not oppose her. Pressure that had come from one person behind closed doors now came from a whole room.",
            "bn": "পরের আয়াতে ইউসুফ (আঃ) বলেন, 'তারা' আমাকে যেদিকে ডাকছে, অর্থাৎ বহুবচনে। দুটি তাফসীরে এমন একটি তথ্য আছে, যা এর সঙ্গে মেলে। বাগাভী বলেন, নারীরা তাঁকে বলেছিল: তোমার মনিবপত্নীর কথা মেনে নাও। মাআরিফুল কুরআন কিছু তাফসীরকারের বরাতে বলে, তারা সবাই তাঁকে বোঝাতে লাগল যে এই নারী তাদের উপকারী, তাই তার বিরোধিতা করা ঠিক নয়। বন্ধ দরজার আড়ালে যে চাপ আসত একজনের কাছ থেকে, এখন তা আসছে গোটা ঘর থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Kinds of Emphatic Nun",
          "bn": "তাকিদের দুই রকম নূন"
        },
        "p": [
          {
            "en": "Then the threat: wa-la'in lam yaf'al ma amuruhu la-yusjananna wa-la-yakunan min as-saghirin. At-Tabari paraphrases: if he will not comply with what I call him to, he will be confined, and he will be among the people of smallness and abasement through confinement and prison, and I will humiliate him. The Muyassar reads ma amuruhu as what I order him from now on, and la-yusjananna as he will be punished by entering prison. As-saghirin, say the Muyassar, al-Baghawi and al-Qurtubi, are the abased.",
            "bn": "এবার হুমকি: ওয়া লাইন লাম ইয়াফআল মা আমুরুহু লাইউসজানান্না ওয়া লাইয়াকূনাম মিনাস সাগিরীন। তাবারী এর অর্থ করেন এভাবে: আমি তাকে যেদিকে ডাকছি, তাতে যদি সে সায় না দেয়, তবে তাকে আটকে রাখা হবে। বন্দিত্ব আর কারাগারের মধ্য দিয়ে সে হবে হীন ও লাঞ্ছিতদের একজন, আর আমি তাকে অপমান করে ছাড়ব। মুয়াসসার মা আমুরুহুর অর্থ করে, এখন থেকে আমি তাকে যা বলব। আর লাইউসজানান্নার অর্থ, জেলে ঢুকিয়ে তাকে শাস্তি দেওয়া হবে। মুয়াসসার, বাগাভী ও কুরতুবী তিনজনেই বলেন, আস-সাগিরীন মানে লাঞ্ছিতরা।"
          },
          {
            "en": "The two verbs carry the nun of emphasis in its two forms. Al-Qurtubi and al-Baghawi say this nun can be heavy or light. La-yusjananna takes the heavy, doubled nun, and the pause on it is with the nun. Wa-la-yakunan takes the light form; the mushaf writes it with an alif, and al-Qurtubi says it is read with a lightened nun for emphasis. The pause on it is with the alif, because the light nun resembles the nunation of nouns: ra'aytu rajulan, stopped on, is said with an alif.",
            "bn": "দুটি ক্রিয়ায় তাকিদের নূন এসেছে দুই রূপে। কুরতুবী ও বাগাভী বলেন, এই নূন ভারীও হয়, হালকাও হয়। লাইউসজানান্নায় এসেছে ভারী, তাশদীদওয়ালা নূন। এখানে থামলে নূন দিয়েই থামতে হয়। ওয়া লাইয়াকূনায় এসেছে হালকা নূন। মুসহাফে তা লেখা হয়েছে আলিফ দিয়ে, আর কুরতুবী বলেন, তাকিদের জন্য একে হালকা নূনে পড়া হয়। এখানে থামলে থামতে হয় আলিফ দিয়ে। কারণ হালকা নূন দেখতে নামবাচক শব্দের তানবীনের মতো। রাআইতু রাজুলান বলে থামলে শেষে আলিফের উচ্চারণ থাকে।"
          },
          {
            "en": "At-Tabari, al-Qurtubi and al-Baghawi each point to the same parallel, la-nasfa'an bin-nasiyah in 96:15 and 96:16, where the pause likewise falls on an alif, and at-Tabari and al-Qurtubi cite a line of the poet al-A'sha in which fa-'buda stands for fa-'budan. The commentators consulted give no reason why one verb has the heavy nun and the other the light. What the note records is that both halves of the threat are emphasised, each verb with its own nun.",
            "bn": "তাবারী, কুরতুবী ও বাগাভী তিনজনেই একই দৃষ্টান্ত দেখান: ৯৬:১৫ ও ৯৬:১৬ আয়াতের লানাসফাআম বিন নাসিয়াহ। সেখানেও থামতে হয় আলিফ দিয়ে। তাবারী ও কুরতুবী কবি আল-আ'শার একটি পঙক্তিও উদ্ধৃত করেন, যেখানে ফা'বুদা আসলে ফা'বুদান। একটি ক্রিয়ায় কেন ভারী নূন আর অন্যটিতে হালকা, এখানে দেখা তাফসীরগুলো তার কোনো কারণ বলেনি। ব্যাকরণের এ আলোচনা শুধু এটুকু জানায় যে হুমকির দুই অংশেই জোর আছে, প্রতিটি ক্রিয়ায় তার নিজের নূন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Deed Under Judgement",
          "bn": "বিচার কাজের, মানুষের নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse reports what one woman said in one room, in one story, and the Qur'an weighs her deed: pursuing a man who refused, then using her power over him to threaten prison and humiliation. It says nothing about women as such, and it licenses nothing against any living person or community. Nor does it hand the reader a person to despise. In 12:29 her husband had already told her to seek forgiveness for her sin, and in 12:51, before the king, she says that the truth has come out: it was I who sought to seduce him, and he is of the truthful.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি কাহিনির ভেতরে এক ঘরে একজন নারীর বলা কথা জানাচ্ছে। কুরআন এখানে ওজন করছে তার কাজকে: যে মানুষটি রাজি হননি, তাঁর পিছু নেওয়া, তারপর তাঁর উপর নিজের ক্ষমতা খাটিয়ে জেল আর অপমানের হুমকি দেওয়া। নারীজাতি সম্পর্কে আয়াতটি কিছুই বলে না। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধেও এটি কোনো অনুমতি দেয় না। পাঠকের হাতে ঘৃণা করার মতো কোনো মানুষও তুলে দেয় না। ১২:২৯ আয়াতে তার স্বামী আগেই তাকে নিজের গুনাহের জন্য ক্ষমা চাইতে বলেছিল। আর ১২:৫১ আয়াতে রাজার সামনে সে বলে, এখন সত্য প্রকাশ হয়ে গেছে, আমিই তাকে ফুসলাতে চেয়েছিলাম, আর সে নিশ্চয়ই সত্যবাদী।"
          },
          {
            "en": "The article's own voice says nothing against Yusuf (AS) either. The question some raise about 12:24 belongs to that verse, and this verse adds a witness on his side: the woman who pursued him says, before others, that he held firm. Ibn Kathir, in a passage that runs on to 12:34, says that Yusuf was protected from error by Allah's will, that Allah saved him from accepting her advances, and that he preferred prison to her unlawful call because he feared Allah and hoped for His reward.",
            "bn": "ইউসুফ (আঃ)-এর বিরুদ্ধেও এই লেখা নিজে থেকে কিছু বলছে না। ১২:২৪ আয়াত নিয়ে কেউ কেউ যে প্রশ্ন তোলেন, তার জায়গা সেই আয়াত। বরং এ আয়াত তাঁর পক্ষে আরেকজন সাক্ষী যোগ করে: যে তাঁর পিছু নিয়েছিল, সে নিজেই অন্যদের সামনে বলছে, তিনি অটল ছিলেন। ১২:৩৪ পর্যন্ত বিস্তৃত এক আলোচনায় ইবন কাসীর বলেন, আল্লাহর ইচ্ছায় ইউসুফ ভুল থেকে সুরক্ষিত ছিলেন। আল্লাহ তাঁকে ওই নারীর আহ্বানে সাড়া দেওয়া থেকে বাঁচিয়েছেন। আল্লাহকে ভয় করতেন আর তাঁর প্রতিদান আশা করতেন বলেই তিনি অবৈধ আহ্বানের চেয়ে জেলকে বেছে নিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Shade for the One Who Refuses",
          "bn": "যে ফিরিয়ে দেয়, তার জন্য ছায়া"
        },
        "p": [
          {
            "en": "None of the eight commentaries consulted attaches a prophetic hadith to 12:32 itself. Ibn Kathir's English passage on 12:30 to 12:34 brings one from the Two Sahihs after 12:33, where Yusuf (AS) chooses prison; it is a general narration, not a report about this verse. Al-Bukhari relates it from Abu Hurayrah (RA) at number 660 of his Sahih, and its place in that collection is the collector's own judgement of it as sound. In al-Bukhari's wording, the Prophet ﷺ said:",
            "bn": "এখানে দেখা ৮টি তাফসীরের কোনোটিই খোদ ১২:৩২ আয়াতের সঙ্গে নবীজির কোনো হাদিস জুড়ে দেয়নি। ১২:৩০ থেকে ১২:৩৪ পর্যন্ত ইবন কাসীরের ইংরেজি আলোচনায় দুই সহীহ গ্রন্থ থেকে একটি হাদিস আছে। ১২:৩৩ আয়াতে ইউসুফ (আঃ)-এর জেল বেছে নেওয়ার পর তিনি এটি আনেন। হাদিসটি সাধারণ, এ আয়াত সম্পর্কে কোনো বর্ণনা নয়। বুখারী তা আবু হুরায়রা (রাঃ) থেকে তাঁর সহীহ গ্রন্থের ৬৬০ নম্বরে বর্ণনা করেছেন। সেই গ্রন্থে স্থান দেওয়াটাই হাদিসটি সম্পর্কে সংকলকের নিজের রায় যে এটি সহীহ। বুখারীর ভাষ্যে নবী ﷺ বলেছেন:"
          },
          {
            "en": "\"Allah will give shade, to seven, on the Day when there will be no shade but His. (These seven persons are) a just ruler, a youth who has been brought up in the worship of Allah (i.e. worships Allah sincerely from childhood), a man whose heart is attached to the mosques (i.e. to pray the compulsory prayers in the mosque in congregation), two persons who love each other only for Allah's sake and they meet and part in Allah's cause only,",
            "bn": "\"যেদিন আল্লাহর ছায়া ছাড়া আর কোনো ছায়া থাকবে না, সেদিন আল্লাহ ৭ জনকে ছায়া দেবেন। (এই ৭ জন হলেন) ন্যায়পরায়ণ শাসক; সেই যুবক, যে আল্লাহর ইবাদতের মধ্যে বেড়ে উঠেছে (অর্থাৎ শৈশব থেকেই খাঁটি মনে আল্লাহর ইবাদত করে); সেই ব্যক্তি, যার অন্তর মসজিদের সঙ্গে ঝুলে থাকে (অর্থাৎ ফরজ নামাজ মসজিদে জামাআতের সঙ্গে আদায় করে); এমন দুজন, যারা শুধু আল্লাহর জন্যই পরস্পরকে ভালোবাসে, আর আল্লাহর পথেই একত্র হয় ও আল্লাহর পথেই আলাদা হয়;"
          },
          {
            "en": "a man who refuses the call of a charming woman of noble birth for illicit intercourse with her and says: I am afraid of Allah, a man who gives charitable gifts so secretly that his left hand does not know what his right hand has given (i.e. nobody knows how much he has given in charity), and a person who remembers Allah in seclusion and his eyes are then flooded with tears.\" Ibn Kathir lists what made the refusal in this story hard: Yusuf was young and beautiful, and she was the wife of the 'Aziz of Egypt, wealthy and of great rank.",
            "bn": "সেই ব্যক্তি, যাকে অভিজাত বংশের এক সুন্দরী নারী অবৈধ মিলনের জন্য ডাকে, আর সে তা ফিরিয়ে দিয়ে বলে: আমি আল্লাহকে ভয় করি; সেই ব্যক্তি, যে এত গোপনে দান করে যে তার ডান হাত কী দিল বাম হাত তা জানে না (অর্থাৎ সে কত দান করল কেউ জানে না); আর সেই ব্যক্তি, যে নির্জনে আল্লাহকে স্মরণ করে আর তার দুচোখ অশ্রুতে ভেসে যায়।\" এ কাহিনিতে ফিরিয়ে দেওয়া কেন কঠিন ছিল, ইবন কাসীর তা গুনে দেখান: ইউসুফ ছিলেন তরুণ ও সুদর্শন, আর ওই নারী ছিল মিসরের আযীযের স্ত্রী, ধনী এবং উঁচু মর্যাদার অধিকারী।"
          }
        ]
      },
      {
        "h": {
          "en": "When Saying No Has a Price",
          "bn": "'না' বলার যখন দাম লাগে"
        },
        "p": [
          {
            "en": "Lived, the verse is about the moment a refusal acquires a price. His no now has a sentence attached, prison and humiliation, announced before witnesses who join the pressure. Many meet a smaller form of it: a manager who expects a dishonest favour, a circle that mocks someone for keeping a limit. The verse names the pressure for what it is, an order backed by a threat, and the next verse shows that the threat did not change his answer.",
            "bn": "জীবনের ভাষায় আয়াতটি সেই মুহূর্তের কথা, যখন 'না' বলার একটা দাম তৈরি হয়ে যায়। তাঁর 'না'-এর সঙ্গে এখন জুড়ে গেছে সাজা, জেল আর অপমান। আর সেই ঘোষণা হয়েছে এমন সাক্ষীদের সামনে, যারা নিজেরাও চাপ দিতে শুরু করেছে। অনেকেই এর ছোট রূপের মুখোমুখি হন। কোনো কর্মকর্তা অসৎ সুবিধা আশা করেন, কিংবা কোনো মহল সীমা মেনে চলা মানুষটিকে নিয়ে ঠাট্টা করে। আয়াতটি এই চাপকে তার আসল নামে ডাকে: হুমকির জোরে দেওয়া হুকুম। আর পরের আয়াত দেখায়, হুমকিতে তাঁর জবাব বদলায়নি।"
          },
          {
            "en": "It also speaks to whoever holds the power. Al-Qurtubi's description of her conduct is that she tore away the covering of modesty once she no longer feared blame. Fear of people's blame is a weak guard, and when it falls away, what remains is the fear of Allah or nothing. Anyone with authority over another can ask whether they ever lean on that authority to push someone toward wrong, or make someone pay for refusing.",
            "bn": "যার হাতে ক্ষমতা, আয়াতটি তাকেও কিছু বলে। কুরতুবী তার আচরণের বর্ণনা দেন এভাবে: লোকের নিন্দার ভয় যখন আর রইল না, সে লজ্জার আবরণ ছিঁড়ে ফেলল। মানুষের নিন্দার ভয় খুব দুর্বল পাহারাদার। সেই ভয় সরে গেলে থাকে হয় আল্লাহর ভয়, নয়তো কিছুই না। অন্যের উপর যার কর্তৃত্ব আছে, তিনি নিজেকে জিজ্ঞেস করতে পারেন: সেই কর্তৃত্বের জোরে কাউকে কি কখনো অন্যায়ের দিকে ঠেলেছি? 'না' বলার জন্য কাউকে কি দাম দিতে বাধ্য করেছি?"
          },
          {
            "en": "The tafsir consulted here attaches no Sunnah supplication to this verse, so here is a short prayer in the passage's own vocabulary, offered as such and not as a narration: O Allah, make me of those who hold firm when they are called to what You have forbidden, whatever the call costs. Turn from me the plotting of those who press me, and never let me use my power over anyone to press them toward wrong.",
            "bn": "এখানে দেখা তাফসীর এ আয়াতের সঙ্গে সুন্নাহর কোনো দোয়া জুড়ে দেয়নি। তাই আয়াতের নিজের শব্দ থেকে একটি ছোট দোয়া দেওয়া হলো। এটি দোয়া হিসেবেই দেওয়া, কোনো বর্ণনা হিসেবে নয়: হে আল্লাহ, আপনার নিষিদ্ধ কাজের দিকে ডাক এলে আমাকে অটল থাকা বান্দাদের একজন করুন, সেই ডাকের দাম যত চড়াই হোক। যারা আমাকে চাপ দেয়, তাদের চক্রান্ত আমার থেকে সরিয়ে দিন। আর আমার ক্ষমতা দিয়ে কাউকে অন্যায়ের দিকে চাপ দিতে কখনো দেবেন না।"
          }
        ]
      }
    ]
  },
  "12:36": {
    "sections": [
      {
        "h": {
          "en": "Two More Enter the Cell",
          "bn": "কারাগারে আরও দুজন"
        },
        "p": [
          {
            "en": "Wa-dakhala ma'ahu as-sijna fatayan: and two young men entered the prison with him. The verse does not say that Yusuf (AS) was imprisoned; it simply finds him there. At-Tabari notes that the words leave something out. The previous verse ended with the decision to jail him for a time, and the sentence that would follow, so they jailed him and put him in prison, is dropped, because two men entering with him already tells the reader where he is.",
            "bn": "ওয়া দাখালা মাআহুস সিজনা ফাতায়ান: আর তাঁর সঙ্গে কারাগারে ঢুকল দুই যুবক। ইউসুফ (আঃ)-কে যে জেলে ভরা হলো, আয়াতটি সে কথা বলেই না, সরাসরি তাঁকে সেখানে দেখায়। তাবারী লক্ষ করেন, এখানে একটা কথা উহ্য আছে। আগের আয়াত শেষ হয়েছিল কিছুদিনের জন্য তাঁকে বন্দি করার সিদ্ধান্তে। এরপর স্বাভাবিকভাবে আসত, তারা তাঁকে বন্দি করল আর কারাগারে ঢোকাল। বাক্যটা বাদ পড়েছে, কারণ দুজন তাঁর সঙ্গে ঢুকল বললেই পাঠক বুঝে যায় তিনি কোথায়।"
          },
          {
            "en": "Fatayan is the dual of fata, a young man. Al-Qurtubi records, from al-Mawardi, that they are called this because both were slaves, and a slave is called fata whether young or old; al-Qushayri suggests fata may have been their usual word for a slave, which is why 12:30 called Yusuf her fata. Al-Qurtubi adds that it may also mean a servant who is not owned, and that the two may have been jailed with him, after him or before him, only entering the room where he was.",
            "bn": "ফাতায়ান হলো ফাতা শব্দের দ্বিবচন, যার অর্থ যুবক। কুরতুবী মাওয়ার্দীর বরাতে লেখেন, দুজনকে এ নামে ডাকা হয়েছে কারণ তারা ছিল ক্রীতদাস, আর ক্রীতদাস ছোট হোক বা বড়, তাকে ফাতা বলা হয়। কুশাইরীর ধারণা, তাদের প্রচলিত ভাষায় ফাতা হয়তো দাসেরই নাম ছিল। এ কারণেই ১২:৩০ আয়াতে ইউসুফ (আঃ)-কে বলা হয়েছে মহিলার ফাতা। কুরতুবী যোগ করেন, শব্দটি এমন খাদেমকেও বোঝাতে পারে যে কারও মালিকানায় নেই। আর এমনও হতে পারে যে দুজন বন্দি হয়েছিল তাঁর সঙ্গে, তাঁর পরে, কিংবা তাঁর আগেই। তারা শুধু সেই ঘরে এসে ঢুকেছিল, যেখানে তিনি ছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Cupbearer and a Baker",
          "bn": "সাকি আর রুটিওয়ালা"
        },
        "p": [
          {
            "en": "The Qur'an does not say who the two were. The commentators carry reports. At-Tabari and Ibn Kathir both cite Qatadah: one was the king's baker, in charge of his food, and the other his cupbearer, in charge of his drink. At-Tabari gives, from Ibn Ishaq, that they belonged to the great king of Egypt, whom that report calls al-Rayyan ibn al-Walid, and that they were jailed over some displeasure of his; it even names them, Mujlith and Nabu, with Nabu over the drink.",
            "bn": "দুজন কারা ছিল, কুরআন তা বলে না। তাফসীরকারেরা কিছু বর্ণনা এনেছেন। তাবারী ও ইবন কাসীর দুজনেই কাতাদার কথা উদ্ধৃত করেন: একজন ছিল রাজার রুটিওয়ালা, তার খাবারের দায়িত্বে; অন্যজন তার সাকি, পানীয়ের দায়িত্বে। তাবারী ইবন ইসহাকের বরাতে আনেন, তারা ছিল মিসরের বড় রাজার লোক। সে বর্ণনায় রাজার নাম রাইয়ান ইবনুল ওয়ালীদ। রাজার কোনো অসন্তোষের কারণে তাদের জেলে পাঠানো হয়। বর্ণনাটি তাদের নামও দেয়: মুজলিস আর নাবু, আর নাবু ছিল পানীয়ের দায়িত্বে।"
          },
          {
            "en": "Why they were jailed is also a report. At-Tabari cites as-Suddi: the king grew angry with his baker when word reached him that the man meant to poison him, and jailed his cupbearer too, suspecting collusion. Al-Baghawi and al-Qurtubi, the latter under the words it has been said, tell a fuller story of bribes, a poisoned dish and an animal that died after eating it. These are narrations about two men in a story. They are not the verse's words, and they settle nothing about anyone held in a prison today.",
            "bn": "তাদের জেলে যাওয়ার কারণও বর্ণনানির্ভর। তাবারী সুদ্দীর কথা আনেন: রাজা খবর পেলেন তার রুটিওয়ালা তাকে বিষ খাওয়াতে চায়। রেগে গিয়ে তিনি তাকে বন্দি করলেন, আর সাকিকেও, কারণ তার সন্দেহ ছিল দুজনে যোগসাজশ করেছে। বাগাভী আরও বিস্তারিত একটি কাহিনি আনেন, কুরতুবীও আনেন 'বলা হয়' বলে: ঘুষ, বিষ মেশানো খাবার, আর সেই খাবার খেয়ে একটি প্রাণীর মরে যাওয়া। এগুলো একটি কাহিনির দুই মানুষকে নিয়ে বর্ণনা, আয়াতের নিজের কথা নয়। আজ যারা কারাগারে আছে, তাদের কারও ব্যাপারে এগুলো কিছুই প্রমাণ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Grapes Called by Their End",
          "bn": "পরিণামের নামে আঙুর"
        },
        "p": [
          {
            "en": "Inni arani a'siru khamra: I see myself pressing wine. Wine is not pressed; grapes are. At-Tabari explains the words as I see in my sleep that I am pressing grapes, and records that Ibn Mas'ud's reading, reported through Muhammad ibn al-Hanafiyyah, has a'siru 'inaba, pressing grapes. Ibn Kathir reports the same reading from Ibn Mas'ud through Ibn Abi Hatim's chain, and at-Tabari cites Ibn 'Abbas explaining khamr here simply as grapes. The Muyassar paraphrases: I am pressing grapes so that they become wine.",
            "bn": "ইন্নী আরানী আসিরু খামরা: আমি দেখছি, আমি মদ নিংড়াচ্ছি। মদ তো নিংড়ানো যায় না, নিংড়াতে হয় আঙুর। তাবারী কথাটার ব্যাখ্যা দেন এভাবে: ঘুমের মধ্যে দেখছি আমি আঙুর নিংড়াচ্ছি। তিনি জানান, মুহাম্মাদ ইবনুল হানাফিয়্যার সূত্রে বর্ণিত ইবন মাসঊদ (রাঃ)-এর কিরাআতে আছে আসিরু ইনাবা, অর্থাৎ আঙুর নিংড়াচ্ছি। ইবন কাসীরও ইবন আবী হাতিমের সনদে ইবন মাসঊদ (রাঃ)-এর এই কিরাআত আনেন। আর তাবারী ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা উদ্ধৃত করেন: এখানে খামর মানে আঙুর। মুয়াসসার সহজ করে বলে: আঙুর নিংড়াচ্ছি, যাতে তা মদ হয়।"
          },
          {
            "en": "Why call grapes khamr? The commentators offer more than one answer. At-Tabari, Ibn Kathir and al-Qurtubi all cite ad-Dahhak: it is the usage of the people of Oman, who call grapes khamr. Al-Qurtubi adds al-Asma'i's story of a bedouin carrying grapes who, asked what he had, answered: khamr. Al-Baghawi gives a different reason first: the grapes are named after what they become, as one says a man is baking bricks when he is baking clay for bricks. Al-Qurtubi also allows an elided word, grapes of wine.",
            "bn": "আঙুরকে খামর বলা হলো কেন? তাফসীরকারেরা একাধিক উত্তর দেন। তাবারী, ইবন কাসীর ও কুরতুবী তিনজনই দাহহাকের কথা আনেন: এটা ওমানবাসীর ভাষা, তারা আঙুরকে খামর বলে। কুরতুবী আসমাঈর একটা ঘটনাও আনেন। এক বেদুইনের হাতে আঙুর দেখে জিজ্ঞেস করা হলো, সঙ্গে কী? সে বলল: খামর। বাগাভী প্রথমে অন্য কারণ দেন। আঙুরের নাম রাখা হয়েছে তা শেষে যা হবে সেই নামে, যেমন কাঁচা মাটি পোড়ানোর সময় বলা হয় লোকটা ইট পোড়াচ্ছে। কুরতুবী আরেকটি সম্ভাবনাও রাখেন: এখানে একটা শব্দ উহ্য, অর্থাৎ মদের আঙুর।"
          },
          {
            "en": "The second man says: I see myself carrying bread above my head, and the birds eat from it. At-Tabari notes that fawqa, above, stands here for 'ala, on. Some commentators give the dreams in more detail. Ikrimah, in at-Tabari and Ibn Kathir, has the cupbearer plant a vine, press its clusters and give the king to drink; al-Baghawi and al-Qurtubi describe three baskets of bread on the baker's head. Then both ask: nabbi'na bi-ta'wilihi, tell us its interpretation. At-Tabari explains ta'wil as what the thing they saw would come to.",
            "bn": "দ্বিতীয়জন বলে: আমি দেখছি, মাথার উপর রুটি বয়ে নিচ্ছি আর পাখিরা তা থেকে খাচ্ছে। তাবারী বলেন, এখানে ফাওকা (উপরে) শব্দটি আলা (উপর রেখে) অর্থে এসেছে। কোনো কোনো তাফসীরকার স্বপ্ন দুটোর আরও খুঁটিনাটি দেন। তাবারী ও ইবন কাসীরে ইকরিমার বর্ণনায় সাকি দেখে সে আঙুরের চারা লাগিয়েছে, থোকাগুলো নিংড়ে রাজাকে পান করিয়েছে। বাগাভী ও কুরতুবী বলেন, রুটিওয়ালার মাথায় ছিল রুটিভরা তিনটি ঝুড়ি। এরপর দুজনেই বলে: নাব্বি'না বিতা'বীলিহী, এর ব্যাখ্যা আমাদের জানান। তাবারী বলেন, তা'বীল মানে তারা যা দেখেছে তা শেষে কোথায় গিয়ে দাঁড়াবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dreamt, or Made Up?",
          "bn": "সত্যি দেখা, না বানানো?"
        },
        "p": [
          {
            "en": "Here the commentators genuinely differ. One view is that there were no dreams at all. At-Tabari reports from Ibn Mas'ud: the two companions of Yusuf saw nothing; they only pretended to have dreamt, to test his knowledge. Ibn Kathir carries the same report through at-Tabari. As-Suddi, in at-Tabari, gives the setting: Yusuf (AS) had told the prisoners he interpreted dreams, and one young man said to the other, come, let us test this Hebrew slave. Al-Qurtubi names Ibn Mas'ud and as-Suddi for this view.",
            "bn": "এখানে তাফসীরকারদের মধ্যে সত্যিকারের মতভেদ আছে। এক মত হলো, কোনো স্বপ্নই ছিল না। তাবারী ইবন মাসঊদ (রাঃ)-এর কথা আনেন: ইউসুফের দুই সঙ্গী কিছুই দেখেনি, তাঁর জ্ঞান যাচাই করতে তারা শুধু স্বপ্ন দেখার ভান করেছিল। ইবন কাসীর তাবারীর সূত্রে একই বর্ণনা আনেন। তাবারীতে সুদ্দী পটভূমিটা বলেন। ইউসুফ (আঃ) বন্দিদের বলেছিলেন যে তিনি স্বপ্নের ব্যাখ্যা করেন। তখন এক যুবক অন্যজনকে বলল, চলো, এই হিব্রু দাসকে পরীক্ষা করে দেখি। কুরতুবী এই মতের পক্ষে ইবন মাসঊদ (রাঃ) ও সুদ্দীর নাম উল্লেখ করেন।"
          },
          {
            "en": "The other view is that the dreams were real. Al-Qurtubi names Ibn 'Abbas and Mujahid: it was a true dream they saw and asked about, and that is why its interpretation came true. He also cites a report from Ibn 'Abbas that the two woke distressed, Yusuf (AS) asked why, and they said they had seen something they disliked; al-Qurtubi says this indicates a dream of sleep. At-Tabari records that some held the dreams were real and that the two believed in his knowledge. Ibn Kathir says the well-known view among most is that they did dream.",
            "bn": "অন্য মত হলো, স্বপ্নগুলো সত্যিই দেখা। কুরতুবী ইবন আব্বাস (রাঃ) ও মুজাহিদের নাম উল্লেখ করেন: এটা ছিল সত্য স্বপ্ন, তারা দেখেছিল আর সে বিষয়েই জানতে চেয়েছিল, তাই এর ব্যাখ্যাও সত্য হয়েছে। তিনি ইবন আব্বাস (রাঃ)-এর আরেকটি বর্ণনা আনেন। দুজন সকালে উঠল বিষণ্ণ মনে। ইউসুফ (আঃ) কারণ জিজ্ঞেস করলে তারা বলল, আমরা অপছন্দনীয় কিছু দেখেছি। কুরতুবীর মতে এতে বোঝা যায়, এটা ঘুমের স্বপ্নই ছিল। তাবারী লেখেন, একদল বলেছেন স্বপ্ন ছিল সত্যি, আর তারা তাঁর জ্ঞানে আস্থা রেখেই জিজ্ঞেস করেছিল। ইবন কাসীর বলেন, অধিকাংশের কাছে প্রসিদ্ধ মত হলো তারা সত্যিই স্বপ্ন দেখেছিল।"
          },
          {
            "en": "Al-Qurtubi records a third position from Abu Mijlaz: the one who was later crucified was lying, and the other was truthful. Ma'arif al-Qur'an sets the two main views side by side, Ibn 'Abbas and others on one side and Ibn Mas'ud on the other, and moves on. That is the right place to stop. The verse reports only what the two men said, and it neither confirms nor denies that they had seen anything. Both positions have Companions behind them, and this article takes neither.",
            "bn": "কুরতুবী আবু মিজলাযের একটি তৃতীয় মতও লেখেন: পরে যাকে শূলে চড়ানো হয়েছিল সে মিথ্যা বলছিল, অন্যজন সত্য বলছিল। মাআরিফুল কুরআন প্রধান দুটি মত পাশাপাশি রাখে, একদিকে ইবন আব্বাস (রাঃ) ও অন্যরা, অন্যদিকে ইবন মাসঊদ (রাঃ), তারপর সামনে এগিয়ে যায়। থামার জায়গাও সেটাই। আয়াত শুধু জানায় দুজন কী বলেছিল। তারা আসলে কিছু দেখেছিল কি না, আয়াত তা নিশ্চিতও করে না, অস্বীকারও করে না। দুই মতের পেছনেই সাহাবী আছেন, আর এ লেখা কোনোটির পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning About Invented Dreams",
          "bn": "বানানো স্বপ্নের ব্যাপারে সতর্কবাণী"
        },
        "p": [
          {
            "en": "No commentary consulted for this verse attaches a prophetic hadith to the verse itself. Al-Qurtubi, while discussing the view that the dreams were invented, brings a general narration on claiming a dream one did not see, citing at-Tirmidhi. It concerns anyone who invents a dream, not these two men. The wording given here is al-Bukhari's, from his Sahih, number 7042, narrated by Ibn 'Abbas (RA), and it is quoted whole, since the Prophet ﷺ joined three warnings in one saying.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই আয়াতের সঙ্গে সরাসরি নবীজির কোনো হাদিস জুড়ে দেয়নি। স্বপ্নগুলো বানানো ছিল, এই মত আলোচনার সময় কুরতুবী একটি সাধারণ হাদিস আনেন: না দেখা স্বপ্ন দেখেছি বলে দাবি করা নিয়ে। তিনি তিরমিযীর বরাত দেন। হাদিসটি যে-কোনো স্বপ্ন বানানো মানুষের ব্যাপারে, এই দুজনের ব্যাপারে নয়। এখানে হাদিসটির শব্দ নেওয়া হয়েছে বুখারীর সহীহ গ্রন্থ থেকে, ৭০৪২ নম্বর, ইবন আব্বাস (রাঃ)-এর বর্ণনা। পুরোটাই উদ্ধৃত হলো, কারণ নবী ﷺ এক কথায় তিনটি সতর্কবাণী একসঙ্গে দিয়েছেন।"
          },
          {
            "en": "The Prophet ﷺ said: \"Whoever claims to have seen a dream which he did not see, will be ordered to make a knot between two barley grains which he will not be able to do; and if somebody listens to the talk of some people who do not like him (to listen) or they run away from him, then molten lead will be poured into his ears on the Day of Resurrection; and whoever makes a picture, will be punished on the Day of Resurrection and will be ordered to put a soul in that picture, which he will not be able to do.\"",
            "bn": "নবী ﷺ বলেছেন: \"যে এমন স্বপ্ন দেখেছে বলে দাবি করে যা সে দেখেনি, তাকে দুটি যবের দানার মধ্যে গিঁট দিতে বলা হবে, আর সে তা কখনো পারবে না। আর যে কোনো দলের কথা কান পেতে শোনে অথচ তারা তা অপছন্দ করে বা তার কাছ থেকে সরে যায়, কিয়ামতের দিন তার কানে গলানো সীসা ঢালা হবে। আর যে কোনো ছবি বানায়, কিয়ামতের দিন তাকে শাস্তি দেওয়া হবে এবং তাতে প্রাণ ফুঁকে দিতে বলা হবে, অথচ সে তা পারবে না।\""
          }
        ]
      },
      {
        "h": {
          "en": "What Did His Ihsan Look Like?",
          "bn": "তাঁর ইহসান কেমন ছিল?"
        },
        "p": [
          {
            "en": "Inna naraka min al-muhsinin: we see you to be among those who do good. At-Tabari says the people of interpretation differed on what ihsan the two men meant. Ad-Dahhak was asked this very question in Balkh, and at-Tabari gives his answer by several chains: when someone in the prison fell ill he took care of him, when someone was in need he gathered something for him, and when someone was cramped he made room for him. In one chain it is simply: he made room for a man in his sitting place, and looked after the sick.",
            "bn": "ইন্না নারাকা মিনাল মুহসিনীন: আমরা দেখছি আপনি সৎকর্মশীলদের একজন। তাবারী বলেন, দুই যুবক কোন ইহসানের কথা বলেছিল, তা নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। বালখে দাহহাককে ঠিক এই প্রশ্নই করা হয়েছিল। তাবারী একাধিক সনদে তাঁর উত্তর আনেন: কারাগারে কেউ অসুস্থ হলে তিনি তার দেখাশোনা করতেন, কারও অভাব হলে তার জন্য কিছু জোগাড় করে দিতেন, আর কারও জায়গা কম পড়লে তাকে জায়গা করে দিতেন। একটি সনদে কথাটা আরও ছোট: তিনি নিজের বসার জায়গায় অন্যকে জায়গা দিতেন, আর অসুস্থদের খোঁজ রাখতেন।"
          },
          {
            "en": "Qatadah, in at-Tabari, says: it reached us that his ihsan was that he treated their sick, consoled their grieving and strove hard for his Lord. A second view, from Ibn Ishaq, reads the phrase forward: we will count you among those who do good if you interpret it for us. At-Tabari prefers the view of ad-Dahhak and Qatadah, and answers the obvious objection. One would expect we see you are learned; the sense is, interpret our dream as a kindness to us, just as we see you do good in everything else you do.",
            "bn": "তাবারীতে কাতাদা বলেন: আমাদের কাছে পৌঁছেছে, তাঁর ইহসান ছিল এই যে তিনি তাদের অসুস্থদের চিকিৎসা করতেন, শোকার্তদের সান্ত্বনা দিতেন, আর রবের জন্য প্রাণপণ চেষ্টা করতেন। দ্বিতীয় মত ইবন ইসহাকের, তিনি বাক্যটা পড়েন সামনের দিকে তাকিয়ে: আপনি যদি ব্যাখ্যাটা বলে দেন, আমরা আপনাকে উপকারী বলেই জানব। তাবারী দাহহাক ও কাতাদার মতকেই বেশি সঠিক মনে করেন, আর একটা স্বাভাবিক আপত্তির জবাবও দেন। এখানে তো বলার কথা ছিল, আমরা দেখছি আপনি জ্ঞানী। তাঁর উত্তর: অর্থ হলো, আমাদের প্রতি দয়া করে স্বপ্নের ব্যাখ্যা বলুন, যেমন আমরা দেখি আপনি আর সব কাজেও ভালো করেন।"
          },
          {
            "en": "Others read the word toward knowledge. Al-Baghawi explains al-muhsinin as those who know the interpretation of dreams, ihsan here meaning knowledge, and al-Qurtubi gives this from al-Farra': those who have mastered knowledge. As-Sa'di joins both senses: people who do good to others, so do good to us in interpreting our dream as you have done good to others; they sought his help through his ihsan. The Muyassar says: good in their worship of Allah and in their dealings with His creation.",
            "bn": "কেউ কেউ শব্দটিকে জ্ঞানের দিকে নিয়ে যান। বাগাভী মুহসিনীনের ব্যাখ্যা করেন স্বপ্নের ব্যাখ্যা জানা লোক হিসেবে, এখানে ইহসান মানে জ্ঞান। কুরতুবী একই কথা ফাররার বরাতে আনেন: যারা জ্ঞানকে ভালোভাবে আয়ত্ত করেছে। সা'দী উভয় অর্থ মিলিয়ে দেন। মুহসিনীন মানে যারা মানুষের উপকার করে। তাই কথাটা দাঁড়ায়: আপনি যেমন অন্যদের উপকার করেছেন, আমাদের স্বপ্নের ব্যাখ্যা দিয়ে আমাদেরও উপকার করুন। অর্থাৎ তাঁর ইহসানকেই তারা অনুরোধের ওসিলা বানিয়েছিল। মুয়াসসার বলে: যারা আল্লাহর ইবাদতে এবং তাঁর সৃষ্টির সঙ্গে আচরণে উত্তম।"
          }
        ]
      },
      {
        "h": {
          "en": "Known Inside the Walls",
          "bn": "চার দেয়ালের ভেতরে পরিচিত"
        },
        "p": [
          {
            "en": "The reports fill in what the two men had watched. Qatadah, in at-Tabari, says Yusuf (AS) found people whose hope had been cut off and whose grief had grown long, and he told them: be glad and be patient, you will be rewarded. They answered, may Allah bless you, young man, how fine your face and your character, we have been blessed in being near you. The keeper of the prison told him that if he could he would let him go, and gave him the run of the prison instead.",
            "bn": "দুই যুবক কী দেখেছিল, বর্ণনাগুলো তা খুলে বলে। তাবারীতে কাতাদা বলেন, ইউসুফ (আঃ) সেখানে এমন মানুষ পেলেন যাদের আশা ফুরিয়ে গেছে, দুঃখ দীর্ঘ হয়ে গেছে। তিনি তাদের বলতেন: সুসংবাদ নাও, সবর করো, এর প্রতিদান পাবে। তারা বলত, হে যুবক, আল্লাহ তোমাকে বরকত দিন, কত সুন্দর তোমার চেহারা আর আচরণ, তোমার পাশে থেকে আমরা বরকত পেয়েছি। কারারক্ষী তাঁকে বলল, সাধ্য থাকলে তোমাকে ছেড়ে দিতাম। তা না পেরে সে তাঁকে কারাগারের ভেতরে যেখানে খুশি চলাফেরার স্বাধীনতা দিল।"
          },
          {
            "en": "Ibn Kathir gathers it into a list: in the prison he became known for generosity, trustworthiness, truthful speech, good bearing, much worship, knowledge of interpretation, kindness to the prisoners, visiting their sick and seeing to their rights. Ma'arif al-Qur'an draws several lessons from this, among them that those who would reform others should treat even wrongdoers with compassion rather than distaste, and that one should seek the interpretation of a dream from someone trusted as righteous. What he said before interpreting comes in 12:37 to 12:40, and the interpretation in 12:41.",
            "bn": "ইবন কাসীর সব একটা তালিকায় গুছিয়ে দেন। কারাগারে তিনি পরিচিত হয়ে উঠেছিলেন দানশীলতা, আমানতদারি, সত্য কথা, সুন্দর চালচলন, বেশি বেশি ইবাদত, স্বপ্নের ব্যাখ্যার জ্ঞান, বন্দিদের প্রতি সদাচরণ, তাদের অসুস্থদের দেখতে যাওয়া আর তাদের হক আদায়ের জন্য। মাআরিফুল কুরআন এখান থেকে বেশ কিছু শিক্ষা নেয়, তার মধ্যে এ কথাগুলোও আছে। যারা মানুষকে শোধরাতে চায়, তারা অপরাধীদের সঙ্গেও ঘৃণা নয়, মমতা নিয়ে মিশবে। আর স্বপ্নের ব্যাখ্যা চাইতে হবে এমন কারও কাছে, যাকে নেককার বলে ভরসা করা যায়। ব্যাখ্যার আগে তিনি কী বলেছিলেন, তা আসছে ১২:৩৭ থেকে ১২:৪০ আয়াতে, আর ব্যাখ্যাটি ১২:৪১ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The One People Come To",
          "bn": "যার কাছে মানুষ আসে"
        },
        "p": [
          {
            "en": "Set the reports aside and the verse still makes its point. Yusuf (AS) was in prison for refusing a wrong, with nothing left that people usually admire: no freedom, no position, no means. Yet two frightened men picked him out of a room of prisoners, and the only reason they gave was what they had seen him do. His character did not wait for better conditions before it showed. It was visible in a cell, among people who had every reason to think only of themselves.",
            "bn": "বর্ণনাগুলো একপাশে রাখলেও আয়াতের কথাটা স্পষ্ট। ইউসুফ (আঃ) কারাগারে ছিলেন একটা অন্যায় কাজ ফিরিয়ে দেওয়ার কারণে। মানুষ সাধারণত যা দেখে মুগ্ধ হয়, তাঁর তার কিছুই ছিল না: না স্বাধীনতা, না পদ, না সামর্থ্য। তবু ভয় পাওয়া দুজন মানুষ বন্দিভরা ঘর থেকে বেছে নিল তাঁকেই। কারণ হিসেবে তারা বলল শুধু তাঁকে যা করতে দেখেছে সেটুকু। তাঁর চরিত্র ভালো দিনের অপেক্ষায় বসে ছিল না। তা ফুটে উঠেছিল এক বন্দিকক্ষে, এমন মানুষদের মাঝে যাদের নিজেদের কথা ছাড়া আর কিছু ভাবার কথাই না।"
          },
          {
            "en": "Most readers will never see a prison, but everyone has a narrow place: an illness, a debt, a thankless job, a house where things are hard. The question the verse leaves is not whether we can interpret dreams. It is whether, in that narrow place, we are the person others bring their fears to. That trust is not claimed by announcing it. It is earned slowly, through visiting the sick, making room, finding something for the one in need, and speaking a word of patience to the grieving.",
            "bn": "বেশির ভাগ পাঠক কোনোদিন কারাগার দেখবেন না। কিন্তু প্রত্যেকেরই একটা সংকীর্ণ জায়গা আছে: অসুখ, ঋণ, এমন চাকরি যেখানে কেউ কদর করে না, কিংবা এমন সংসার যেখানে দিন কাটে কষ্টে। আয়াত যে প্রশ্ন রেখে যায়, তা এ নয় যে আমরা স্বপ্নের ব্যাখ্যা করতে পারি কি না। প্রশ্ন হলো, সেই সংকীর্ণ জায়গায় আমরা কি এমন মানুষ, যার কাছে অন্যরা নিজেদের ভয় নিয়ে আসে? এ ভরসা ঘোষণা দিয়ে পাওয়া যায় না। তা অর্জিত হয় ধীরে ধীরে: অসুস্থকে দেখতে যাওয়া, অন্যকে জায়গা করে দেওয়া, অভাবীর জন্য কিছু জোগাড় করা, আর শোকার্তকে সবরের একটা কথা শোনানো।"
          }
        ]
      }
    ]
  },
  "12:43": {
    "sections": [
      {
        "h": {
          "en": "A King Wakes Up Troubled",
          "bn": "অস্থির ঘুম ভাঙল রাজার"
        },
        "p": [
          {
            "en": "The previous verse closed a door. Yusuf (AS) had asked the man he expected to go free to mention him before his master, Satan made the man forget, and Yusuf remained in prison bid'a sinin, several years. Verse 12:43 opens without any transition: wa-qala al-malik, and the king said. The scene leaves the cell for a palace, and a new speaker takes the stage, a man with more power than anyone the story has shown so far. What he brings is not a decree but a dream he cannot read.",
            "bn": "আগের আয়াত একটা দরজা বন্ধ করে দিয়েছিল। যে লোকটি মুক্তি পাবে বলে ইউসুফ (আঃ) ধারণা করেছিলেন, তাকে তিনি বলেছিলেন মনিবের কাছে তাঁর কথা তুলতে। শয়তান তাকে ভুলিয়ে দিল, আর ইউসুফ (আঃ) কারাগারে রয়ে গেলেন বিদআ সিনীন, কয়েক বছর। ১২:৪৩ আয়াত শুরু হয় কোনো ভূমিকা ছাড়াই: ওয়া কালাল মালিক, আর রাজা বললেন। দৃশ্য কারাগার ছেড়ে চলে যায় রাজপ্রাসাদে। মঞ্চে আসেন নতুন একজন বক্তা, এ পর্যন্ত কাহিনিতে যত মানুষ এসেছে, তাদের সবার চেয়ে বেশি ক্ষমতা তাঁর হাতে। অথচ তিনি নিয়ে এসেছেন কোনো ফরমান নয়, এমন এক স্বপ্ন যার অর্থ তিনি নিজে বোঝেন না।"
          },
          {
            "en": "The verse gives him a title, al-malik, the king, and no name. The commentators fill in only a little. At-Tabari glosses him as malik Misr, the king of Egypt, Ibn Kathir uses the same phrase, and al-Baghawi calls him the greatest king of Egypt. At-Tabari also carries a report from Ibn Ishaq that names him ar-Rayyan ibn al-Walid, and al-Qurtubi gives the same name. This article goes no further than that: the Qur'an's word is al-malik, and the rest is what these commentators report.",
            "bn": "আয়াতে তাঁর একটা উপাধি আছে, আল-মালিক, রাজা। কোনো নাম নেই। তাফসীরকারেরা এর সঙ্গে সামান্যই যোগ করেন। তাবারী ব্যাখ্যায় বলেন মালিকু মিসর, মিসরের রাজা। ইবন কাসীরও তাঁকে মিসরের রাজা বলেন, আর বাগাভী বলেন মিসরের সবচেয়ে বড় রাজা। তাবারী ইবন ইসহাকের একটি বর্ণনাও আনেন, যেখানে তাঁর নাম রাইয়ান ইবনুল ওয়ালীদ। কুরতুবীও একই নাম দেন। এ লেখা এর বাইরে যাবে না। কুরআনের শব্দ আল-মালিক, বাকিটুকু এই তাফসীরকারদের বর্ণনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeing Without Saying Asleep",
          "bn": "ঘুমের কথা না বলেই দেখা"
        },
        "p": [
          {
            "en": "Inni ara: I see. The king does not say I saw in my sleep, and at-Tabari pauses on this. He explains that the Arabs knew among themselves that when a speaker said I see that I am doing such and such, he was reporting what he had seen in his sleep, even without mentioning sleep. Allah, he says, framed the report the way Arabic usage ran. So he reads the verse as the king saying: I see in my sleep seven fat cows. The Muyassar makes the same step explicit, in my sleep.",
            "bn": "ইন্নী আরা: আমি দেখছি। রাজা বলেননি যে আমি ঘুমের মধ্যে দেখেছি। তাবারী এখানে থামেন। তিনি বলেন, আরবরা নিজেদের মধ্যে জানত, কেউ যদি বলে 'আমি দেখছি যে আমি অমুক কাজ করছি', তবে সে আসলে ঘুমে যা দেখেছে তারই খবর দিচ্ছে, ঘুমের কথা মুখে না আনলেও। তাঁর মতে আল্লাহ খবরটা দিয়েছেন আরবদের প্রচলিত বাকরীতি অনুযায়ী। তাই তাবারী আয়াতটি পড়েন এভাবে: আমি ঘুমের মধ্যে দেখছি সাতটি মোটা গাভী। মুয়াসসারও একই কথা খুলে বলে, 'আমার ঘুমের মধ্যে'।"
          },
          {
            "en": "The verse ends on a verb that al-Qurtubi traces to a picture. Ta'burun, you interpret, shares its root with crossing a river: to cross a river is to reach its other bank. So the interpreter of a dream, he says, crosses over to what the dream's matter comes to in the end. He also notes, citing az-Zajjaj, that the lam in li-r-ru'ya is for clarification: the sentence first says if you interpret, then specifies what, dreams. At-Tabari gives the same verb in plain terms: interpret it, if you are interpreters of dreams.",
            "bn": "আয়াত শেষ হয় এমন একটা ক্রিয়া দিয়ে, যার পেছনে কুরতুবী একটা ছবি খুঁজে পান। তা'বুরূন, তোমরা ব্যাখ্যা করো। শব্দটির মূল নদী পার হওয়ার সঙ্গে জড়িত। নদী পার হওয়া মানে তার অপর তীরে পৌঁছানো। তাই তাঁর কথায় স্বপ্নের ব্যাখ্যাকার স্বপ্নকে পার করে নিয়ে যান সেখানে, যেখানে গিয়ে তার বিষয়টি শেষ পর্যন্ত দাঁড়ায়। যাজ্জাজের উদ্ধৃতি দিয়ে তিনি আরও বলেন, লির-রু'ইয়া শব্দের লাম এসেছে স্পষ্ট করার জন্য। বাক্যটি আগে বলে 'যদি তোমরা ব্যাখ্যা করো', তারপর জানায় কিসের ব্যাখ্যা: স্বপ্নের। তাবারী একই ক্রিয়াকে সহজ কথায় বলেন: এর ব্যাখ্যা দাও, যদি তোমরা স্বপ্নের ব্যাখ্যাকার হয়ে থাকো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weak Eating the Strong",
          "bn": "দুর্বল যখন সবলকে খায়"
        },
        "p": [
          {
            "en": "The dream has two panels. In the first, seven cows that are siman, fat, are eaten by seven that are 'ijaf, lean. In the second, seven green ears of grain stand beside others that are dry. As-Sa'di names what made the first panel alarming: it is a wonder that seven lean, emaciated cows whose strength had failed should eat seven fat ones that were at the height of strength. The ordinary order is reversed. The hungry and the weak swallow the well-fed, and the king cannot see what such a reversal could mean.",
            "bn": "স্বপ্নটির দুটি অংশ। প্রথম অংশে সাতটি সিমান, মোটাতাজা গাভীকে খেয়ে ফেলছে সাতটি ইজাফ, রোগা গাভী। দ্বিতীয় অংশে সাতটি সবুজ শীষের পাশে রয়েছে আরও কিছু শুকনো শীষ। প্রথম অংশটা কেন ভয় জাগায়, সা'দী তা বলে দেন। এটা বিস্ময়ের ব্যাপার যে সাতটি রোগা, হাড় জিরজিরে গাভী, যাদের শক্তি ফুরিয়ে গেছে, তারা খেয়ে ফেলছে এমন সাতটি গাভীকে, যারা শক্তির চূড়ায়। স্বাভাবিক নিয়ম উল্টে গেছে। ক্ষুধার্ত আর দুর্বল গিলে ফেলছে পরিতৃপ্ত আর সবলকে। এমন উল্টো ছবির মানে কী, রাজা তা ধরতে পারেন না।"
          },
          {
            "en": "Al-Baghawi and al-Qurtubi add narrative detail that the verse itself does not state. In al-Baghawi's account the fat cows came up out of al-bahr, the water, the lean followed and swallowed them, and nothing of the fat ones could be seen on the lean afterwards. Al-Qurtubi has the cows come out of a dry river, the lean seize the fat by the ears and eat them all but the horns, and remain as lean as before.",
            "bn": "বাগাভী আর কুরতুবী এমন কিছু খুঁটিনাটি যোগ করেন, যা আয়াতে নেই। বাগাভীর বর্ণনায় মোটা গাভীগুলো আল-বাহর, অর্থাৎ পানি থেকে উঠে আসে, রোগাগুলো তাদের পিছু পিছু এসে তাদের গিলে ফেলে। এরপর রোগা গাভীগুলোর গায়ে মোটাগুলোর কোনো চিহ্নই দেখা যায় না। কুরতুবীর বর্ণনায় গাভীগুলো বেরিয়ে আসে এক শুকনো নদী থেকে। রোগাগুলো মোটাগুলোর কান ধরে তাদের খেয়ে ফেলে, শুধু শিংগুলো বাকি থাকে, আর খাওয়ার পরও তারা আগের মতোই রোগা থেকে যায়।"
          },
          {
            "en": "The second panel has a small gap in its wording. The verse says seven green ears wa-ukhar yabisat, and others, dry, without repeating the number. At-Tabari, al-Baghawi and the Muyassar all supply it: seven others. The commentators also differ on whether the dry ears did anything. As-Sa'di reads the dry ears as eating the green ones, al-Baghawi has the dry twist around the green until they overpower them, and al-Qurtubi has them consume the green entirely. The Muyassar and at-Tabari keep to the verse's plain line: green ears, and dry ones.",
            "bn": "দ্বিতীয় অংশের শব্দে একটা ছোট ফাঁক আছে। আয়াত বলে সাতটি সবুজ শীষ, ওয়া উখারা ইয়াবিসাত, আর অন্যগুলো শুকনো। সংখ্যাটি আর বলা হয়নি। তাবারী, বাগাভী আর মুয়াসসার তিনজনই সংখ্যাটি জুড়ে দেন: আরও সাতটি। শুকনো শীষগুলো কিছু করেছিল কি না, তা নিয়েও তাফসীরকারদের কথা এক নয়। সা'দীর ব্যাখ্যায় শুকনো শীষগুলো সবুজগুলোকে খেয়ে ফেলছিল। বাগাভীর বর্ণনায় শুকনোগুলো সবুজগুলোকে পেঁচিয়ে ধরে, শেষে তাদের উপর জয়ী হয়। কুরতুবীর বর্ণনায় সেগুলো সবুজ শীষ পুরোপুরি খেয়ে শেষ করে। মুয়াসসার আর তাবারী আয়াতের সাদামাটা কথাতেই থাকেন: সবুজ শীষ, আর শুকনো শীষ।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Stood in the Council",
          "bn": "সভায় কারা দাঁড়িয়ে ছিল"
        },
        "p": [
          {
            "en": "Ya ayyuha al-mala': O chiefs. The word al-mala' names the prominent people around a ruler, and the commentators describe the gathering in different ways. At-Tabari glosses it as the nobles among my men and companions; the Muyassar as the masters and the great ones. As-Sa'di says he gathered the learned men of his people and those of sound opinion. Ibn Kathir has him assemble the priests, the leading men of his state and his princes; this is in his Arabic on 12:43, and the abridged English, which groups 12:43 to 12:49, repeats it.",
            "bn": "ইয়া আইয়ুহাল মালা': ওহে সভাসদগণ। আল-মালা' বলতে বোঝায় শাসকের চারপাশের গণ্যমান্য লোকদের। সেই সভার ছবি তাফসীরকারেরা আঁকেন ভিন্ন ভিন্নভাবে। তাবারী বলেন, আমার লোকজন আর সঙ্গীদের মধ্যে যারা অভিজাত। মুয়াসসার বলে, নেতৃস্থানীয় ও বড় বড় ব্যক্তিরা। সা'দীর মতে রাজা ডেকেছিলেন তাঁর জাতির আলেমদের আর বিচক্ষণ লোকদের। ইবন কাসীরের বর্ণনায় তিনি জড়ো করেন পুরোহিতদের, রাজ্যের নেতৃস্থানীয় ব্যক্তিদের আর আমীরদের। কথাটি আছে ১২:৪৩ আয়াতে তাঁর আরবি তাফসীরে, আর তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণেও, যেখানে ১২:৪৩ থেকে ১২:৪৯ পর্যন্ত আয়াত একসঙ্গে আলোচিত।"
          },
          {
            "en": "Others widen the circle. At-Tabari cites as-Suddi: Allah showed the king a dream that terrified him, and he gathered the sorcerers, the soothsayers, the huzat and the qafa, and told it to them. The editor's note glosses the huzat as guessers by conjecture and the qafa as trackers. Al-Baghawi and al-Qurtubi list sorcerers and soothsayers among those called, al-Qurtubi adding astrologers and diviners. The king, in these accounts, summoned every kind of claimed knowledge his court possessed.",
            "bn": "অন্যরা বৃত্তটা আরও বড় করেন। তাবারী সুদ্দীর বর্ণনা আনেন: আল্লাহ রাজাকে এমন এক স্বপ্ন দেখালেন যা তাঁকে আতঙ্কিত করল। তিনি জাদুকর, গণক, হুযাত আর কাফাদের জড়ো করে তাদের স্বপ্নটি শোনালেন। সম্পাদকের টীকায় হুযাত মানে আন্দাজে অনুমানকারী, আর কাফা মানে পদচিহ্ন দেখে খোঁজ বের করার লোক। বাগাভী আর কুরতুবীর তালিকাতেও জাদুকর ও গণক আছে, কুরতুবী যোগ করেন জ্যোতিষী আর ভবিষ্যদ্বক্তাদের। এসব বর্ণনায় রাজা তাঁর দরবারে জ্ঞানের দাবিদার যত রকম লোক ছিল, সবাইকে ডেকে পাঠালেন।"
          },
          {
            "en": "Then the condition: in kuntum li-r-ru'ya ta'burun, if you interpret visions. The king does not assume they can. As-Sa'di reports what followed in two words: fa-tahayyaru, they were bewildered, and they found no way into its meaning. Their actual reply, that these are mixed-up dreams and they are not learned in interpreting them, belongs to 12:44 and to its own study. For this verse it is enough that the most powerful man in the land put a question to the most knowledgeable men he had, and it stayed unanswered.",
            "bn": "তারপর শর্তটা: ইন কুনতুম লির-রু'ইয়া তা'বুরূন, যদি তোমরা স্বপ্নের ব্যাখ্যা করতে পারো। রাজা ধরে নেননি যে তারা পারবে। এরপর কী হলো, সা'দী তা বলেন দুই শব্দে: ফাতাহাইয়ারূ, তারা দিশাহারা হয়ে গেল, এর অর্থে ঢোকার কোনো পথ খুঁজে পেল না। তাদের আসল জবাব, এগুলো এলোমেলো স্বপ্ন আর আমরা এর ব্যাখ্যায় পারদর্শী নই, সেটা ১২:৪৪ আয়াতের কথা, তার আলোচনা আলাদা। এ আয়াতের জন্য এটুকুই যথেষ্ট যে দেশের সবচেয়ে ক্ষমতাবান মানুষটি তাঁর সবচেয়ে জ্ঞানী লোকদের সামনে একটা প্রশ্ন রাখলেন, আর প্রশ্নটার কোনো উত্তর মিলল না।"
          }
        ]
      },
      {
        "h": {
          "en": "After the Several Years",
          "bn": "কয়েক বছর পেরিয়ে"
        },
        "p": [
          {
            "en": "The wa, and, at the start of 12:43 hangs it on the verse before. Ma'arif al-Qur'an, which treats 12:42 and 12:43 together, dwells on the delay: the freed man forgot the message, so Yusuf's (AS) release was put off and he stayed in prison a few more years. It explains bid'a sinin as a number between three and nine, and adds that some commentators said seven more years. Al-Baghawi opens 12:43 in the same place: when seven years had passed and Yusuf's relief drew near, the king saw his dream.",
            "bn": "১২:৪৩ আয়াতের শুরুর ওয়া, অর্থাৎ 'আর', একে আগের আয়াতের সঙ্গে বেঁধে রাখে। মাআরিফুল কুরআন ১২:৪২ ও ১২:৪৩ আয়াত একসঙ্গে আলোচনা করে, আর জোর দেয় বিলম্বের উপর। মুক্তি পাওয়া লোকটি বার্তাটি ভুলে গেল, ফলে ইউসুফ (আঃ)-এর মুক্তি পিছিয়ে গেল, আরও কয়েক বছর তাঁকে কারাগারে থাকতে হলো। মাআরিফের ব্যাখ্যায় বিদআ সিনীন মানে ৩ থেকে ৯-এর মধ্যে কোনো সংখ্যা। কিছু তাফসীরকার বলেছেন, আরও ৭ বছর। বাগাভীও ১২:৪৩ আয়াত শুরু করেন সেখান থেকেই: ৭ বছর পেরিয়ে গেল, ইউসুফ (আঃ)-এর মুক্তি কাছে এল, তখন রাজা তাঁর স্বপ্ন দেখলেন।"
          },
          {
            "en": "Al-Baghawi then quotes al-Kalbi that these seven were in addition to the five years that had come before. Al-Qurtubi begins his comment with the same turn: lamma dana faraju Yusuf, when Yusuf's relief drew near, the king saw his dream. The sources do not agree on a total, and this article does not add one; it keeps al-Kalbi's figure as al-Baghawi's report and Ma'arif's range as Ma'arif's. A long wait had run its course, and the next thing the Qur'an narrates is a king's sleep.",
            "bn": "এরপর বাগাভী কালবীর কথা উদ্ধৃত করেন: এই ৭ বছর আগের পাঁচ বছরের বাইরে। কুরতুবীও তাঁর আলোচনা শুরু করেন একই মোড় থেকে: লাম্মা দানা ফারাজু ইউসুফ, যখন ইউসুফ (আঃ)-এর মুক্তি কাছে এল, রাজা তাঁর স্বপ্ন দেখলেন। মোট কত বছর, সে বিষয়ে সূত্রগুলো একমত নয়, আর এ লেখাও কোনো হিসাব জুড়ে দিচ্ছে না। কালবীর সংখ্যা থাকছে বাগাভীর বর্ণনা হিসেবে, আর মাআরিফের সীমা মাআরিফের কথা হিসেবে। দীর্ঘ অপেক্ষার পালা ফুরিয়ে এসেছিল, আর কুরআন এরপর যা বলে, তা এক রাজার ঘুমের কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "One Man's Dream, Another's Release",
          "bn": "একজনের স্বপ্ন, আরেকজনের মুক্তি"
        },
        "p": [
          {
            "en": "The commentators agree that the dream was not really about the king. Ibn Kathir opens his Arabic comment by saying this dream of the king of Egypt was among the things Allah decreed to be the cause of Yusuf's (AS) leaving prison mu'azzazan mukarraman, honoured and dignified. The abridged English, in its grouped passage, says the same: a dream that Allah made a reason for his release, with his honour and reputation preserved.",
            "bn": "তাফসীরকারেরা একমত যে স্বপ্নটি আসলে রাজার নিজের জন্য ছিল না। ইবন কাসীর তাঁর আরবি তাফসীর শুরু করেন এই বলে: মিসরের রাজার এই স্বপ্ন সেসব বিষয়ের একটি, যা আল্লাহ নির্ধারণ করেছিলেন ইউসুফ (আঃ)-এর কারাগার থেকে বেরোনোর উপলক্ষ হিসেবে, মুআযযাযান মুকাররামান, সম্মান ও মর্যাদার সঙ্গে। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণের সম্মিলিত অংশও একই কথা বলে: আল্লাহ এই স্বপ্নকে তাঁর মুক্তির কারণ বানালেন, তাঁর সম্মান ও সুনাম অক্ষুণ্ণ রেখে।"
          },
          {
            "en": "As-Sa'di draws the lines of the plan more fully. When Allah willed to bring Yusuf out of prison, He showed the king this wondrous dream, whose interpretation concerned the whole nation, so that it would be interpreted at Yusuf's hand, his merit would appear, and his knowledge would show in a way that raised him in both worlds. He adds that it was fitting that the king himself saw it, since the affairs of his subjects return to him and their welfare is bound up with him.",
            "bn": "সা'দী আল্লাহর এই পরিকল্পনার ছবিটা আরও পূর্ণ করে দেখান। আল্লাহ যখন ইউসুফ (আঃ)-কে কারাগার থেকে বের করতে চাইলেন, তখন রাজাকে এই আশ্চর্য স্বপ্ন দেখালেন। এর ব্যাখ্যা গোটা জাতির সঙ্গে জড়িত। উদ্দেশ্য ছিল ব্যাখ্যাটি হবে ইউসুফ (আঃ)-এর হাতে, তাঁর মর্যাদা প্রকাশ পাবে, আর তাঁর জ্ঞান এমনভাবে সামনে আসবে যা দুনিয়া ও আখেরাতে তাঁকে উঁচু করবে। সা'দী আরও বলেন, স্বপ্নটি রাজা নিজে দেখবেন, এটাই মানানসই ছিল। কারণ প্রজাদের সব বিষয় তাঁর কাছেই ফিরে আসে, তাদের কল্যাণ তাঁর সঙ্গেই বাঁধা।"
          },
          {
            "en": "Al-Qurtubi carries a fuller report, with no source named in the passage: that Jibril came to Yusuf in prison, greeted him, and gave him the good news that Allah would bring him out and establish him in the land, and that the cause would be a dream the king would see. He then draws a line under the whole episode: Allah made a dream at first a trial and hardship for Yusuf, and at the last glad tidings and mercy. The story that began with a boy's dream in 12:4 turns here on a king's.",
            "bn": "কুরতুবী একটা বিস্তারিত বর্ণনা আনেন, তবে সেখানে কোনো সূত্রের নাম নেই। তাতে আছে, জিবরীল (আঃ) কারাগারে ইউসুফ (আঃ)-এর কাছে এসে সালাম দিলেন আর সুসংবাদ দিলেন যে আল্লাহ তাঁকে কারাগার থেকে বের করবেন, দেশে প্রতিষ্ঠিত করবেন, আর এর উপলক্ষ হবে রাজার দেখা এক স্বপ্ন। এরপর কুরতুবী গোটা ঘটনার উপর একটা মন্তব্য করেন: আল্লাহ স্বপ্নকে ইউসুফ (আঃ)-এর জন্য শুরুতে বানিয়েছিলেন পরীক্ষা ও কষ্ট, আর শেষে বানালেন সুসংবাদ ও রহমত। যে কাহিনি ১২:৪ আয়াতে এক বালকের স্বপ্ন দিয়ে শুরু হয়েছিল, এখানে এসে তা মোড় নেয় এক রাজার স্বপ্নে।"
          }
        ]
      },
      {
        "h": {
          "en": "Held Back for Later Verses",
          "bn": "পরের আয়াতের জন্য তোলা"
        },
        "p": [
          {
            "en": "What the cows and the ears stand for is not told here; it comes in 12:47 to 12:49, in Yusuf's (AS) own words. Ibn Kathir's abridged English runs straight on into that interpretation because it treats 12:43 to 12:49 as one passage, so only what it says of the dream itself is used here. Al-Qurtubi's general lore on what cows signify in dreams, attributed to 'Ali ibn Abi Talib, is not tied to this verse's wording and is left aside. None of the commentaries consulted for this verse attaches a sound hadith to it or gives an occasion of revelation.",
            "bn": "গাভী আর শীষগুলো কিসের প্রতীক, এ আয়াত তা বলে না। সেটা আসে ১২:৪৭ থেকে ১২:৪৯ আয়াতে, ইউসুফ (আঃ)-এর নিজের মুখে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১২:৪৩ থেকে ১২:৪৯ আয়াতকে একটি অংশ ধরে সরাসরি সেই ব্যাখ্যায় ঢুকে পড়ে, তাই এখানে সেখান থেকে শুধু স্বপ্নটি নিয়ে বলা কথাটুকু নেওয়া হয়েছে। স্বপ্নে গাভী দেখার অর্থ নিয়ে কুরতুবী আলী ইবন আবী তালিব (রাঃ)-এর নামে কিছু সাধারণ কথা আনেন। সেগুলো এ আয়াতের শব্দের সঙ্গে বাঁধা নয়, তাই বাদ রাখা হলো। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো সহীহ হাদিস যুক্ত করেনি, কোনো শানে নুযূলও দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Door Nobody Knocked On",
          "bn": "যে দরজায় কেউ কড়া নাড়েনি"
        },
        "p": [
          {
            "en": "Set the two verses side by side. In 12:42 there is a plan that a person can follow: a request, a man going free, a master who might hear. It stalls, and the years pass. In 12:43 there is nothing anyone could have arranged: a king's sleep, an image he did not choose, and a fear, in as-Sa'di's and Ibn Kathir's word, that he could not put down. The relief came through a door Yusuf (AS) had not knocked on and could not have reached from a cell.",
            "bn": "দুটি আয়াত পাশাপাশি রাখুন। ১২:৪২ আয়াতে এমন একটা পরিকল্পনা আছে, যা মানুষ অনুসরণ করতে পারে: একটা অনুরোধ, একজন মানুষের মুক্তি, এমন এক মনিব যিনি হয়তো কথাটা শুনবেন। পরিকল্পনাটা থেমে যায়, বছর গড়িয়ে যায়। ১২:৪৩ আয়াতে এমন কিছু নেই যা কেউ সাজিয়ে দিতে পারত। আছে এক রাজার ঘুম, এমন এক ছবি যা তিনি নিজে বেছে নেননি, আর সা'দী ও ইবন কাসীরের ভাষায় এমন এক ভয় যা তিনি ঝেড়ে ফেলতে পারছিলেন না। মুক্তি এল এমন এক দরজা দিয়ে, যেখানে ইউসুফ (আঃ) কড়া নাড়েননি, কারাগারে বসে যেখানে পৌঁছানোও তাঁর পক্ষে সম্ভব ছিল না।"
          },
          {
            "en": "This is not a lesson against asking people for help; Yusuf (AS) asked, and the story does not fault the asking in these verses. It is a lesson about where a heart rests while it waits. You may have one door you have been watching for years, a person who might speak for you, an answer that might come. The verse does not tell you to stop knocking. It shows that Allah has doors you cannot see, and that a delay on your side can be the time in which something is being prepared on His.",
            "bn": "মানুষের কাছে সাহায্য চাওয়ার বিরুদ্ধে এটা কোনো শিক্ষা নয়। ইউসুফ (আঃ) চেয়েছিলেন, আর এই আয়াতগুলোতে কাহিনি সেই চাওয়ার কোনো দোষ ধরে না। শিক্ষাটা হলো অপেক্ষার সময় হৃদয় কোথায় ভর দিয়ে থাকে। হয়তো এমন একটা দরজার দিকে আপনি বছরের পর বছর তাকিয়ে আছেন: এমন কেউ যে আপনার হয়ে কথা বলতে পারে, এমন কোনো উত্তর যা আসতে পারে। আয়াত আপনাকে কড়া নাড়া থামাতে বলে না। দেখায় যে আল্লাহর এমন দরজা আছে যা আপনি দেখতে পান না। আপনার দিকে যে দেরি, তাঁর দিকে হয়তো সেই সময়েই কিছু একটা প্রস্তুত হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Power That Admits Its Limits",
          "bn": "সীমা মেনে নেওয়া ক্ষমতা"
        },
        "p": [
          {
            "en": "The other figure in the verse is easy to pass over. A king, afraid of something he saw at night, does not hide it or pretend to understand it. He tells his council exactly what he saw, and asks: aftuni, give me a ruling on my dream, if you can. The request is plain, and it is made in public. In the next verses the answer will come from the one place a court would least expect to look, a prisoner who had been forgotten, and the king will send for him.",
            "bn": "আয়াতের অন্য চরিত্রটিকে সহজেই এড়িয়ে যাওয়া যায়। রাতে দেখা কিছু একটা নিয়ে ভয় পেয়েছেন এক রাজা। তিনি তা লুকিয়ে রাখেননি, বুঝেছেন বলে ভানও করেননি। যা দেখেছেন, হুবহু সভাসদদের বললেন, তারপর জিজ্ঞেস করলেন: আফতূনী, আমার স্বপ্ন নিয়ে আমাকে একটা ফায়সালা দাও, যদি পারো। অনুরোধটা সোজাসাপ্টা, আর করা হয়েছে সবার সামনে। পরের আয়াতগুলোতে উত্তর আসবে এমন জায়গা থেকে, যেদিকে কোনো দরবার তাকানোর কথা সবচেয়ে কম ভাবত: ভুলে যাওয়া এক বন্দি। আর রাজা তাঁকে ডেকে পাঠাবেন।"
          },
          {
            "en": "Whatever authority you hold, over a family, a class, a team or a mosque committee, the verse leaves a quiet question. When you do not know, do you say so, or do you let the position answer for you? The king's honesty about his limits is part of how the story's relief arrives. A leader who can say I need someone who knows has left room for the knowledge that Allah has placed in someone else, even in the last person the room would think to ask.",
            "bn": "পরিবার, শ্রেণিকক্ষ, কোনো দল বা মসজিদ কমিটি, যেখানেই আপনার হাতে কোনো দায়িত্ব থাকুক, আয়াতটি একটা নীরব প্রশ্ন রেখে যায়। যখন জানেন না, তখন কি সেটা বলেন, নাকি পদটাকেই আপনার হয়ে উত্তর দিতে দেন? রাজা নিজের সীমা লুকাননি, আর কাহিনিতে মুক্তি আসার পেছনে তাঁর এই সততারও ভূমিকা আছে। যে নেতা বলতে পারেন 'আমার এমন কাউকে দরকার যে জানে', তিনি জায়গা খালি রাখেন সেই জ্ঞানের জন্য, যা আল্লাহ অন্য কারও মধ্যে রেখেছেন। হয়তো এমন কারও মধ্যে, যাকে জিজ্ঞেস করার কথা সভার কেউ ভাবতেই পারত না।"
          }
        ]
      }
    ]
  },
  "12:45": {
    "sections": [
      {
        "h": {
          "en": "A Voice After the Silence",
          "bn": "নীরবতা ভাঙা এক কণ্ঠ"
        },
        "p": [
          {
            "en": "The court has just given up. In 12:44 the king's chiefs called his dream a jumble and said they had no learning in reading dreams. Then, in 12:45, someone else speaks: wa-qala alladhi naja minhuma, and the one of the two who had been saved said. The two are the young men who shared Yusuf's (AS) cell in 12:36. One had been told he would pour wine for his master again, the other that he would be crucified. The one who lived is now in the room.",
            "bn": "দরবার এইমাত্র হাল ছেড়ে দিয়েছে। ১২:৪৪ আয়াতে রাজার সভাসদেরা স্বপ্নটাকে এলোমেলো খোয়াব বলে উড়িয়ে দিয়েছে, আর জানিয়েছে, স্বপ্নের ব্যাখ্যা তাদের জানা নেই। এরপর ১২:৪৫ আয়াতে কথা বলে অন্য একজন: ওয়া কালাল্লাযী নাজা মিনহুমা, দুজনের মধ্যে যে বেঁচে গিয়েছিল সে বলল। এই দুজন সেই দুই যুবক, ১২:৩৬ আয়াতে যারা ইউসুফ (আঃ)-এর সঙ্গে একই কারাগারে ছিল। একজনকে বলা হয়েছিল, সে আবার মনিবকে মদ পরিবেশন করবে। অন্যজনকে বলা হয়েছিল, তাকে শূলে চড়ানো হবে। যে বেঁচে গেছে, সে এখন এই দরবারেই উপস্থিত।"
          },
          {
            "en": "The commentators name him with one voice. Al-Qurtubi calls him the king's cupbearer, and al-Baghawi the cupbearer who was saved from being killed. As-Sa'di identifies him as the one who had dreamt he was pressing wine, and the very one Yusuf (AS) had asked to mention him before his master. The Muyassar says he was saved from execution. So the speaker is not a stranger to the story. He is the man who carried a request out of prison and, as the next clause of this verse shows, had not delivered it.",
            "bn": "লোকটি কে, তা নিয়ে তাফসীরকারদের মধ্যে কোনো দ্বিমত নেই। কুরতুবী তাকে বলেন রাজার পানপাত্রবাহক, আর বাগাভী বলেন সেই সাকী, যে নিহত হওয়া থেকে বেঁচে গিয়েছিল। সা'দীর বর্ণনায় সে-ই স্বপ্নে নিজেকে আঙুর নিংড়ে মদ বানাতে দেখেছিল। আর ইউসুফ (আঃ) তাকেই বলেছিলেন মনিবের কাছে তাঁর কথা তুলতে। মুয়াসসার বলে, সে মৃত্যুদণ্ড থেকে রেহাই পেয়েছিল। তাই এ কাহিনিতে বক্তা অচেনা কেউ নয়। জেল থেকে সে একটা অনুরোধ বয়ে এনেছিল, আর এ আয়াতেরই পরের অংশ দেখায়, সেই অনুরোধ সে পৌঁছে দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verb, Rebuilt by Sound",
          "bn": "ধ্বনিতে গড়া এক ক্রিয়া"
        },
        "p": [
          {
            "en": "Wa-ddakara: and he remembered. Al-Qurtubi quotes an-Nahhas on how the word took its shape. Its base is idhtakara, from the root dh-k-r. The dh is close in articulation to the t, but cannot merge into it, because the dh is voiced and the t voiceless, and merging would lose the voicing. So the t was replaced by a voiced letter, d, rather than by t's emphatic partner. That gave idhdakara, and the dh was then absorbed into the soft d, leaving iddakara with a doubled d.",
            "bn": "ওয়াদ্দাকারা: আর তার মনে পড়ল। শব্দটা কীভাবে এই চেহারা পেল, কুরতুবী সে বিষয়ে নাহহাসের ব্যাখ্যা তুলে ধরেন। মূল রূপ ইযতাকারা, ধাতু য-ক-র। 'যাল' আর 'তা'-র উচ্চারণের জায়গা কাছাকাছি, তবু একটা আরেকটার সঙ্গে মিশতে পারে না। কারণ যাল উচ্চারিত হয় কণ্ঠের কম্পনসহ, তা হয় কম্পন ছাড়া। মিশিয়ে দিলে সেই কম্পনটুকু হারিয়ে যেত। তাই তা-এর জায়গায় বসানো হলো কম্পনসহ আরেক অক্ষর, দাল। ত্বা বসানো হয়নি, কারণ ত্বা ভারী উচ্চারণের অক্ষর। এতে রূপ দাঁড়াল ইযদাকারা। এরপর নরম দালের মধ্যে যাল মিশে গেল, আর রইল দ্বিত্ব দাল নিয়ে ইদ্দাকারা।"
          },
          {
            "en": "What did he remember? At-Tabari answers that he recalled what he had forgotten of Yusuf's (AS) affair, and the request Yusuf had asked him, while reading his dream, to raise with the king: mention me before your master. Al-Qurtubi says he remembered Yusuf's need. As-Sa'di widens it: he remembered Yusuf, what had passed in his reading of the two men's dreams, and what he had charged him with, and he knew that Yusuf was equal to reading this dream too. The memory, in other words, came back whole.",
            "bn": "তার মনে পড়ল কী? তাবারী বলেন, ইউসুফ (আঃ)-এর ব্যাপারে যা সে ভুলে গিয়েছিল, তা-ই তার মনে পড়ল। মনে পড়ল সেই অনুরোধও, যা স্বপ্নের ব্যাখ্যা দেওয়ার সময় ইউসুফ (আঃ) তাকে রাজার কাছে তুলতে বলেছিলেন: তোমার মনিবের কাছে আমার কথা বলো। কুরতুবী বলেন, তার মনে পড়ল ইউসুফ (আঃ)-এর প্রয়োজনের কথা। সা'দী পরিসরটা আরও বড় করেন। তার মনে পড়ল ইউসুফ (আঃ)-কে, দুজনের স্বপ্নের ব্যাখ্যায় যা ঘটেছিল তা, আর তাকে যে দায়িত্ব দেওয়া হয়েছিল সেটাও। সে বুঝল, এই স্বপ্নের ব্যাখ্যাও ইউসুফ (আঃ) দিতে পারবেন। অর্থাৎ স্মৃতিটা ফিরে এল পুরোপুরি।"
          }
        ]
      },
      {
        "h": {
          "en": "Ba'da Ummatin: After a While",
          "bn": "বা'দা উম্মাহ: কিছুকাল পরে"
        },
        "p": [
          {
            "en": "Ba'da ummatin: after an umma. The word usually means a people or a community, but here the commentators read it as time. At-Tabari glosses it as ba'da hin, after a while, and brings it through many chains: from Ibn Abbas (RA) by way of Abu Razin and by two further chains, from al-Hasan, Mujahid and as-Suddi, and from Abu Bakr ibn 'Ayyash. 'Ikrima, in his report, says after a long stretch of time. Ibn Jurayj adds that Ibn Abbas said: after years.",
            "bn": "বা'দা উম্মাহ: এক উম্মাহর পরে। শব্দটার সাধারণ অর্থ জাতি বা জনগোষ্ঠী, কিন্তু এখানে তাফসীরকারেরা একে সময় অর্থে পড়েন। তাবারী এর ব্যাখ্যা দেন বা'দা হীন, কিছুকাল পরে। আর এ ব্যাখ্যা আনেন অনেকগুলো সূত্রে: ইবন আব্বাস (রাঃ) থেকে আবু রাযীনের মাধ্যমে এবং আরও দুটি সূত্রে, তারপর হাসান, মুজাহিদ ও সুদ্দী থেকে, আর আবু বকর ইবন আইয়াশ থেকে। ইকরিমার বর্ণনায় অর্থটা আরও লম্বা: যুগের এক দীর্ঘ পর্ব পেরিয়ে। ইবন জুরাইজ যোগ করেন, ইবন আব্বাস (রাঃ) বলেছেন: কয়েক বছর পরে।"
          },
          {
            "en": "At-Tabari then states that this meaning rests on the reading ummatin, with the alif given damma and the mim doubled, and that this is the reading of the Qur'an's readers in the cities of Islam. The others agree on the sense. Ibn Kathir says mudda, a span of time; the Muyassar, after a period; al-Baghawi, after a while, which was seven years. As-Sa'di puts it as after a period of years. None of them pauses to doubt that the gap was long.",
            "bn": "তাবারী এরপর পরিষ্কার করেন, এ অর্থ দাঁড়িয়ে আছে উম্মাতিন পাঠের উপর, যেখানে আলিফে পেশ আর মীমে তাশদীদ। আর মুসলিম জনপদগুলোর কারীরা এভাবেই পড়েন। বাকিরাও অর্থে একমত। ইবন কাসীর বলেন মুদ্দাহ, একটা সময়কাল। মুয়াসসার বলে, কিছুকাল পরে। বাগাভীর ভাষায়, কিছুকাল পরে, আর সেটা ছিল ৭ বছর। সা'দী বলেন, কয়েক বছরের এক সময়কাল পরে। ব্যবধানটা যে দীর্ঘ ছিল, এ নিয়ে তাঁদের কারও সংশয় নেই।"
          },
          {
            "en": "How can a word for a people mean a length of time? Al-Qurtubi records two lines. He first links it to 11:8, ila ummatin ma'duda, to a counted term, and says the root sense is a whole portion of time. He then quotes Ibn Durustawayh, who holds that umma can mean time only through an omitted first term: after the time of an umma. An umma, Ibn Durustawayh says, is a large body of people, and al-Akhfash notes that it is singular in form and plural in sense. On that view, the phrase reads: after the time of a whole people.",
            "bn": "যে শব্দের অর্থ জনগোষ্ঠী, তা সময় বোঝায় কীভাবে? কুরতুবী দুটি ব্যাখ্যা লিপিবদ্ধ করেন। প্রথমে তিনি একে মিলিয়ে দেখান ১১:৮ আয়াতের ইলা উম্মাতিম মা'দূদাহ, এক নির্দিষ্ট গোনা সময় পর্যন্ত, কথাটির সঙ্গে। তাঁর মতে শব্দের মূল ভাব সময়ের একটা গোটা অংশ। তারপর তিনি উদ্ধৃত করেন ইবন দুরুস্তাওয়াইহকে। তাঁর মত, উম্মাহ সময় বোঝাতে পারে কেবল তখনই, যখন আগের একটা শব্দ উহ্য থাকে: এক উম্মাহর সময় পরে। ইবন দুরুস্তাওয়াইহ বলেন, উম্মাহ মানে মানুষের বড় এক দল। আর আখফাশ বলেন, শব্দটা রূপে একবচন, অর্থে বহুবচন। এ ব্যাখ্যায় কথাটার মানে দাঁড়ায়: গোটা এক জনগোষ্ঠীর সময় পেরিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "After Forgetting, or After Favour",
          "bn": "ভুলে যাওয়ার পর, নাকি নিয়ামতের পর"
        },
        "p": [
          {
            "en": "At-Tabari then reports that a group of the early generations read the phrase ba'da amahin, with the alif and the mim both given fatha and the mim not doubled, meaning after forgetting. Some say, he adds, that the Arabs use amiha, ya'mahu, amahan for a man who forgets. He gives it from Ibn Abbas through Qatada and 'Ikrima, who said he read amahin and explained it as after forgetting, and from 'Ikrima, Qatada and ad-Dahhak in their own reports, and he records that Mujahid read it so.",
            "bn": "তাবারী এরপর জানান, পূর্ববর্তীদের একটি দল কথাটা পড়তেন বা'দা আমাহিন। আলিফ ও মীম দুটোতেই যবর, মীমে তাশদীদ নেই, আর অর্থ ভুলে যাওয়ার পরে। তিনি যোগ করেন, কেউ কেউ বলেন আরবরা ভুলে যাওয়া মানুষের বেলায় বলে আমিহা, ইয়া'মাহু, আমাহান। এ পাঠ তিনি আনেন ইবন আব্বাস (রাঃ) থেকে, কাতাদা ও ইকরিমার মাধ্যমে। সেখানে বলা হয়েছে, তিনি আমাহিন পড়তেন আর এর অর্থ বলতেন ভুলে যাওয়ার পরে। ইকরিমা, কাতাদা ও দাহহাকের নিজস্ব বর্ণনাতেও তা আছে। আর তিনি লিপিবদ্ধ করেন, মুজাহিদও এভাবে পড়তেন।"
          },
          {
            "en": "Notice that Ibn Abbas (RA) stands on both sides: by the chain through Abu Razin he explains ummatin as a while, and by the chain through 'Ikrima he reads amahin. At-Tabari keeps both chains and does not reconcile them. He also records a third form from Mujahid, amhin, with the mim unvowelled, and says its sense is the same as amahin. Al-Qurtubi, citing an-Nahhas, calls amahin the known reading of Ibn Abbas, 'Ikrima and ad-Dahhak, and gives amhin from Shubayl ibn 'Azra ad-Dub'i, calling the two dialect forms of one word.",
            "bn": "লক্ষ করুন, ইবন আব্বাস (রাঃ) আছেন দুই দিকেই। আবু রাযীনের সূত্রে তিনি উম্মাতিনের অর্থ বলেন কিছুকাল, আর ইকরিমার সূত্রে তিনি পড়েন আমাহিন। তাবারী দুটি সূত্রই রেখে দেন, মেলানোর চেষ্টা করেন না। মুজাহিদ থেকে তিনি তৃতীয় একটি রূপও লিপিবদ্ধ করেন, আমহিন, যেখানে মীম সাকিন। তাঁর মতে এর অর্থ আমাহিনের মতোই। কুরতুবী নাহহাসের বরাতে বলেন, আমাহিন হলো ইবন আব্বাস (রাঃ), ইকরিমা ও দাহহাকের পরিচিত পাঠ। আর আমহিন তিনি আনেন শুবাইল ইবন আযরা আদ-দুবাঈ থেকে, এবং বলেন দুটোই একই শব্দের দুই আঞ্চলিক রূপ।"
          },
          {
            "en": "Al-Qurtubi adds one more. Al-Ashhab al-'Uqayli read ba'da immatin, after a favour: after Allah had favoured him with rescue. So the clause holds three senses side by side. The man remembered after a long time, after forgetting, or after being spared. The text read in the cities, at-Tabari says, is ummatin, and the other forms are reported readings. Yet each names something true of the man: years had passed, he had forgotten, and he owed his life to a mercy.",
            "bn": "কুরতুবী আরও একটি পাঠ যোগ করেন। আশহাব আল-উকাইলী পড়তেন বা'দা ইম্মাতিন, অর্থ নিয়ামতের পরে, অর্থাৎ আল্লাহ তাকে বাঁচিয়ে দেওয়ার নিয়ামত দেওয়ার পরে। ফলে বাক্যটিতে পাশাপাশি তিনটি অর্থ পাওয়া যায়। লোকটির মনে পড়েছিল দীর্ঘ সময় পরে, কিংবা ভুলে যাওয়ার পরে, কিংবা প্রাণে বেঁচে যাওয়ার পরে। তাবারী বলেন, মুসলিম জনপদগুলোতে পঠিত পাঠ উম্মাতিন, বাকিগুলো বর্ণিত পাঠ। তবু প্রতিটিই লোকটির জীবনের একটা সত্য তুলে ধরে: বছর পেরিয়েছে, সে ভুলে গিয়েছিল, আর তার প্রাণটাই ছিল এক রহমতের দান।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Memory Had Lapsed?",
          "bn": "কে ভুলে গিয়েছিল?"
        },
        "p": [
          {
            "en": "This verse settles part of an argument that belongs to 12:42, where Satan made him forget dhikr rabbihi, the mention to his master, or the remembrance of his Lord. Whose forgetting was that? Ibn Kathir says the correct view is that the pronoun returns to the freed man, as Mujahid, Muhammad ibn Ishaq and others said, and as-Sa'di reads it the same way. Ibn Kathir notes that at-Tabari narrated the other view, that it returns to Yusuf (AS), from Ibn Abbas, Mujahid in another report, and 'Ikrima.",
            "bn": "১২:৪২ আয়াতের একটা আলোচনার অংশবিশেষ এ আয়াতে এসে মীমাংসার দিকে যায়। সেখানে বলা হয়েছে, শয়তান তাকে যিকরা রাব্বিহী ভুলিয়ে দিল। মানে হতে পারে মনিবের কাছে উল্লেখ করা, আবার রবের স্মরণও। ভুলটা কার ছিল? ইবন কাসীর বলেন, সঠিক মত হলো সর্বনামটি মুক্তি পাওয়া লোকটির দিকে ফেরে। মুজাহিদ, মুহাম্মাদ ইবন ইসহাক ও আরও অনেকে এ কথা বলেছেন, আর সা'দীও এভাবেই পড়েন। ইবন কাসীর এটাও জানান, তাবারী অন্য মতটি বর্ণনা করেছেন যে সর্বনাম ইউসুফ (আঃ)-এর দিকে ফেরে। সে মত এসেছে ইবন আব্বাস (রাঃ), অন্য এক বর্ণনায় মুজাহিদ এবং ইকরিমা থেকে।"
          },
          {
            "en": "At-Tabari himself, on 12:42, takes that second view, and al-Baghawi says Ibn Abbas and most scholars held it: that in that moment Yusuf (AS) did not turn to his Lord for relief. Al-Qurtubi sets out both, and reports how those who held the forgetting to be the freed man's answered the others. They pointed to this very verse: wa-ddakara ba'da ummatin shows that the one who forgot was the cupbearer, not Yusuf. At-Tabari's own gloss on 12:45 speaks the same way: the freed man recalled what he had forgotten of Yusuf's affair.",
            "bn": "তাবারী নিজে ১২:৪২ আয়াতে দ্বিতীয় মতটি গ্রহণ করেন। বাগাভী বলেন, ইবন আব্বাস (রাঃ) ও অধিকাংশ আলেম এ মতের: সেই মুহূর্তে ইউসুফ (আঃ) মুক্তির জন্য রবের দিকে ফেরেননি। কুরতুবী দুটো মতই তুলে ধরেন। যাঁরা মনে করতেন ভুলটা মুক্তি পাওয়া লোকটির, তাঁরা অন্য পক্ষকে কী জবাব দিতেন, সেটাও তিনি জানান। তাঁরা দলিল দিতেন ঠিক এই আয়াত দিয়ে। ওয়াদ্দাকারা বা'দা উম্মাহ কথাটাই দেখিয়ে দেয়, ভুলে গিয়েছিল সাকী, ইউসুফ (আঃ) নন। ১২:৪৫ আয়াতে তাবারীর নিজের ব্যাখ্যাও একই সুরে কথা বলে: মুক্তি পাওয়া লোকটির মনে পড়ল ইউসুফ (আঃ)-এর ব্যাপারে যা সে ভুলে গিয়েছিল।"
          },
          {
            "en": "This article keeps the disagreement as it stands, with the names on each side, and takes no position on 12:42. It says nothing in its own voice against a prophet of Allah. A narration that ties the length of the imprisonment to Yusuf's request is reported under 12:42, but Ibn Kathir grades it very weak for two narrators in its chain and refuses its mursal forms from al-Hasan and Qatada, so it is not used. None of the commentaries consulted attaches a sound hadith to 12:45.",
            "bn": "এ লেখা মতভেদটা যেমন আছে তেমনই রাখছে, দুই পক্ষের নামসহ, আর ১২:৪২ নিয়ে কোনো পক্ষ নিচ্ছে না। আল্লাহর একজন নবীর বিরুদ্ধে নিজের পক্ষ থেকে কোনো কথাও বলছে না। ১২:৪২ আয়াতের আলোচনায় একটি বর্ণনা আসে, যা কারাবাস দীর্ঘ হওয়াকে ইউসুফ (আঃ)-এর অনুরোধের সঙ্গে জুড়ে দেয়। কিন্তু ইবন কাসীর সনদের দুজন বর্ণনাকারীর কারণে একে খুবই দুর্বল বলেছেন। হাসান ও কাতাদা থেকে আসা এর মুরসাল রূপগুলোও তিনি গ্রহণ করেননি। তাই এখানে তা নেওয়া হয়নি। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই ১২:৪৫ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgot, or Kept His Peace?",
          "bn": "ভুলে গেল, নাকি চুপ রইল?"
        },
        "p": [
          {
            "en": "Did the cupbearer truly forget? Al-Qurtubi, on this verse, gives two answers. One says the young man forgot Yusuf (AS) by Allah's decree that Yusuf should remain in prison for a time. The other says he did not forget at all: he was afraid to remind the king of the offence for which he and the baker had been jailed. On that reading, wa-ddakara means not that he remembered but that he mentioned and told. Al-Qurtubi records both and does not choose.",
            "bn": "সাকী কি সত্যিই ভুলে গিয়েছিল? কুরতুবী এ আয়াতে দুটি উত্তর দেন। একটি মত বলে, যুবকটি ইউসুফ (আঃ)-কে ভুলে গিয়েছিল আল্লাহর ফায়সালায়, যাতে ইউসুফ (আঃ) কিছুকাল কারাগারে থাকেন। অন্য মত বলে, সে আদৌ ভোলেনি। আসলে যে অপরাধে তাকে আর রুটিওয়ালাকে জেলে পোরা হয়েছিল, রাজাকে সেটা মনে করিয়ে দিতে তার ভয় হচ্ছিল। এ ব্যাখ্যায় ওয়াদ্দাকারা মানে তার মনে পড়ল না, বরং সে উল্লেখ করল, খবর দিল। কুরতুবী দুটোই লিপিবদ্ধ করেন, কোনোটি বেছে নেন না।"
          },
          {
            "en": "As-Sa'di, on 12:42, sees a purpose above the lapse. Satan made the man forget, among other things, Yusuf (AS), who deserved to be repaid with the fullest kindness, and this was so that Allah might complete His command and decree. How long the delay lasted the sources do not agree. Ibn Kathir reports bid' as three to nine from Mujahid and Qatada, seven years from Wahb ibn Munabbih, twelve from Ibn Abbas (RA) through ad-Dahhak, and fourteen from ad-Dahhak himself. The figures given under 12:43 belong to that verse's study.",
            "bn": "সা'দী ১২:৪২ আয়াতে এই ভুলের উপরে একটা উদ্দেশ্য দেখেন। শয়তান লোকটিকে আরও অনেক কিছুর সঙ্গে ইউসুফ (আঃ)-কেও ভুলিয়ে দিয়েছিল, অথচ ইউসুফ (আঃ) ছিলেন সবচেয়ে পূর্ণ প্রতিদানের হকদার। আর এটা ঘটেছিল যাতে আল্লাহ তাঁর হুকুম ও ফায়সালা পূর্ণ করেন। দেরিটা কতদিনের ছিল, সে বিষয়ে সূত্রগুলো একমত নয়। ইবন কাসীর জানান, মুজাহিদ ও কাতাদার মতে বিদ' মানে ৩ থেকে ৯, ওয়াহব ইবন মুনাব্বিহের মতে ৭ বছর। দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে ১২ বছর, আর দাহহাকের নিজের মতে ১৪ বছর। ১২:৪৩ আয়াতের আলোচনায় যে হিসাবগুলো এসেছে, সেগুলো সে আয়াতেরই বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Fa-Arsiluni: Just Send Me",
          "bn": "ফাআরসিলূন: শুধু আমাকে পাঠান"
        },
        "p": [
          {
            "en": "Ana unabbi'ukum bi-ta'wilihi: I will inform you of its interpretation. Al-Qurtubi reports that al-Hasan read ana atikum, I will bring you, and asked how a man like this could be the one to inform them. An-Nahhas replies that unabbi'ukum is sound and good: I will tell you, once I have asked. At-Tabari makes the same point through the last word: fa-arsiluni, release me, so that I may go and bring you its interpretation from the one who knows it.",
            "bn": "আনা উনাব্বিউকুম বিতা'বীলিহী: আমি তোমাদের এর ব্যাখ্যা জানিয়ে দেব। কুরতুবী জানান, হাসান পড়তেন আনা আতীকুম, আমি তোমাদের কাছে নিয়ে আসব। আর তিনি প্রশ্ন তুলতেন, এমন একজন লোক কীভাবে তাদের খবর দেবে? নাহহাস জবাব দেন, উনাব্বিউকুম অর্থের দিক থেকে সঠিক ও সুন্দর: জিজ্ঞেস করে এসে আমি তোমাদের জানাব। তাবারী একই কথা বলেন শেষ শব্দটির মধ্য দিয়ে। ফাআরসিলূন মানে আমাকে ছেড়ে দিন, যাতে আমি গিয়ে যিনি এর ব্যাখ্যা জানেন তাঁর কাছ থেকে তা নিয়ে আসতে পারি।"
          },
          {
            "en": "The plural is addressed to a king. Al-Qurtubi says the man spoke to the king in the plural of respect, or to the king and his council together. Al-Baghawi pictures the scene: the young man knelt before the king and said, there is a man in the prison who interprets dreams. He adds from Ibn Abbas (RA) that the prison was not in the city. Al-Baghawi spells out the ellipsis: send me to him, O king. And the king sent him, and he came to the prison.",
            "bn": "বহুবচনের সম্বোধনটা একজন রাজাকে লক্ষ করে। কুরতুবী বলেন, লোকটি সম্মান দেখিয়ে রাজাকে বহুবচনে সম্বোধন করেছিল, অথবা রাজা ও তাঁর সভাসদ সবাইকে একসঙ্গে। বাগাভী দৃশ্যটা আঁকেন এভাবে: যুবকটি রাজার সামনে হাঁটু গেড়ে বসে বলল, কারাগারে একজন মানুষ আছেন, যিনি স্বপ্নের ব্যাখ্যা দেন। তিনি ইবন আব্বাস (রাঃ) থেকে যোগ করেন, কারাগারটি শহরের ভেতরে ছিল না। বাগাভী উহ্য কথাটাও খুলে বলেন: হে রাজা, আমাকে তাঁর কাছে পাঠান। রাজা তাকে পাঠালেন, আর সে কারাগারে এসে পৌঁছাল।"
          },
          {
            "en": "Ma'arif al-Qur'an observes that the Qur'an covers this whole episode in a single word, fa-arsiluni. The introduction of Yusuf (AS), the king's permission and the arrival at the prison are left for the reader to understand from the context. Ibn Kathir's Arabic sums it up in two words: they sent him, and he came. In the English abridgement, which treats 12:43 to 12:49 together, Ibn Kathir adds that Yusuf then gave the meaning without reproaching the man for forgetting his request, and without making his release a condition.",
            "bn": "মাআরিফুল কুরআন লক্ষ করে, পুরো ঘটনাটা কুরআন সেরে দিয়েছে একটিমাত্র শব্দে, ফাআরসিলূন। ইউসুফ (আঃ)-এর পরিচয় দেওয়া, রাজার অনুমতি পাওয়া, কারাগারে গিয়ে পৌঁছানো, সবই প্রসঙ্গ থেকে বুঝে নেওয়ার জন্য রেখে দেওয়া হয়েছে। ইবন কাসীরের আরবি তাফসীর পুরোটা গুটিয়ে আনে দুটি শব্দে: তারা তাকে পাঠাল, আর সে এল। ইংরেজি সংক্ষিপ্ত সংস্করণে, যেখানে ১২:৪৩ থেকে ১২:৪৯ একসঙ্গে আলোচিত, ইবন কাসীর যোগ করেন যে ইউসুফ (আঃ) এরপর ব্যাখ্যা দিয়েছিলেন। অনুরোধ ভুলে যাওয়ার জন্য লোকটিকে তিনি তিরস্কার করেননি, আর মুক্তিকে শর্তও বানাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Remembered at the Right Hour",
          "bn": "ঠিক সময়ে মনে পড়া"
        },
        "p": [
          {
            "en": "Picture what an early reminder would have looked like. A servant speaks for a prisoner, and a king, busy with his own affairs, may or may not listen. Now picture the memory as it actually came: a whole court has failed, the king is uneasy, and the one man who knows sits in a cell. As-Sa'di and Ibn Kathir both read the dream as the means Allah decreed for Yusuf's (AS) release with honour. The lateness of the remembering is part of that design.",
            "bn": "ভাবুন, সময়মতো মনে করিয়ে দিলে ব্যাপারটা কেমন হতো। একজন খাদেম এক বন্দির হয়ে সুপারিশ করছে, আর নিজের কাজে ব্যস্ত রাজা শুনতেও পারেন, না-ও শুনতে পারেন। এবার ভাবুন, স্মৃতিটা আসলে কখন ফিরল। গোটা দরবার ব্যর্থ, রাজা অস্থির, আর যিনি জানেন তিনি বসে আছেন কারাগারের এক কুঠুরিতে। সা'দী ও ইবন কাসীর দুজনেই স্বপ্নটিকে দেখেন সেই উপায় হিসেবে, যা আল্লাহ ঠিক করে রেখেছিলেন ইউসুফ (আঃ)-কে সম্মানের সঙ্গে মুক্ত করার জন্য। মনে পড়তে দেরি হওয়াটাও সেই পরিকল্পনারই অংশ।"
          },
          {
            "en": "Two lessons sit close to the surface. The first is for anyone who owes a kindness. The man left prison owing his life's good news to a fellow prisoner, and the years slipped by. The verse does not shame him, and neither, in Ibn Kathir's account, did Yusuf (AS). The second is for anyone still waiting. Relief that seems forgotten may only be held back until the hour when it will open the widest door. A late memory, in Allah's timing, may still arrive exactly on time.",
            "bn": "আয়াতের উপরিভাগেই দুটি শিক্ষা চোখে পড়ে। প্রথমটি তাদের জন্য, যাদের কাঁধে কারও উপকারের ঋণ আছে। লোকটি জেল থেকে বেরিয়েছিল এক সহবন্দির কাছ থেকে জীবনের সুসংবাদ নিয়ে, তারপর বছরের পর বছর গড়িয়ে গেল। আয়াতটি তাকে লজ্জা দেয় না। ইবন কাসীরের বর্ণনায় ইউসুফ (আঃ)-ও দেননি। দ্বিতীয় শিক্ষাটি তাদের জন্য, যারা এখনো অপেক্ষায় আছেন। যে মুক্তিকে মনে হয় সবাই ভুলে গেছে, তা হয়তো কেবল আটকে রাখা হয়েছে সেই সময়ের জন্য, যখন তা সবচেয়ে বড় দরজাটা খুলবে। আল্লাহর হিসাবে দেরিতে আসা স্মৃতিও ঠিক সময়মতোই পৌঁছাতে পারে।"
          }
        ]
      }
    ]
  },
  "12:50": {
    "sections": [
      {
        "h": {
          "en": "The Summons He Did Not Answer",
          "bn": "যে ডাকে তিনি সাড়া দিলেন না"
        },
        "p": [
          {
            "en": "Wa-qala al-maliku i'tuni bihi: and the king said, bring him to me. The cupbearer had returned from the prison with the meaning of the dream, and al-Baghawi says the king knew that what Yusuf (AS) had said would come to pass. Ibn Kathir adds that the interpretation pleased and delighted the king, so that he recognised Yusuf's merit, his knowledge and his good conduct among the people of the land. Al-Muyassar gives the order in plain words: take the man who interpreted the dream out of prison and bring him to me.",
            "bn": "ওয়া কালাল মালিকু ই'তূনী বিহী: রাজা বললেন, তাকে আমার কাছে নিয়ে এসো। পানপাত্রবাহক কারাগার থেকে স্বপ্নের ব্যাখ্যা নিয়ে ফিরে এসেছে। বাগাভী বলেন, রাজা বুঝে গেলেন ইউসুফ (আঃ) যা বলেছেন তা ঘটবেই। ইবন কাসীর যোগ করেন, ব্যাখ্যাটা রাজার খুব পছন্দ হয়েছিল, মন ভরে গিয়েছিল। তাতে তিনি ইউসুফের মর্যাদা, তাঁর জ্ঞান আর দেশের মানুষের সঙ্গে তাঁর সুন্দর আচরণ চিনতে পারলেন। মুয়াসসার হুকুমটা সহজ ভাষায় বলে: স্বপ্নের ব্যাখ্যা যে দিয়েছে, তাকে কারাগার থেকে বের করে আমার সামনে হাজির করো।"
          },
          {
            "en": "Then the turn the reader does not expect. Fa-lamma ja'ahu al-rasul: when the messenger came to him, carrying the call to go before the king, Yusuf (AS) did not rise and follow. Al-Baghawi says he refused to go out with the messenger until his innocence was made plain. At-Tabari says he refused both to go out with him and to answer the king until his case was known to be sound. The whole verse turns on that refusal, and on the question he sent back instead.",
            "bn": "এরপর এমন এক মোড়, যা পাঠক আশা করেন না। ফালাম্মা জাআহুর রাসূল: দূত যখন রাজার দরবারে যাওয়ার ডাক নিয়ে তাঁর কাছে এল, ইউসুফ (আঃ) উঠে তার পিছু নিলেন না। বাগাভী বলেন, নির্দোষিতা স্পষ্ট না হওয়া পর্যন্ত তিনি দূতের সঙ্গে বের হতে অস্বীকার করলেন। তাবারী বলেন, তাঁর ব্যাপারটা যে সঠিক, লোকেরা সেটা না জানা পর্যন্ত তিনি দূতের সঙ্গে বের হতেও রাজি হননি, রাজার ডাকে সাড়াও দেননি। পুরো আয়াতটা এই অস্বীকারের উপর দাঁড়িয়ে, আর তার বদলে তিনি যে প্রশ্নটা ফেরত পাঠালেন তার উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Cleared Before Walking Free",
          "bn": "মুক্তির আগে নির্দোষিতা"
        },
        "p": [
          {
            "en": "Why stay behind a door that had finally opened? Ibn Kathir answers that he refused to leave until the king and his subjects had established that his record was clean and his honour untouched by what had been laid on him from the side of the Aziz's wife, and that the prison had not been earned by any deed but was injustice and aggression. Al-Qurtubi puts it more briefly: he refused to go out unless his innocence was proven before the king, and that he had been jailed without a crime.",
            "bn": "যে দরজা এতদিন পরে খুলল, তার ভেতরে কেন থেকে গেলেন? ইবন কাসীরের জবাব: আযীযের স্ত্রীর দিক থেকে তাঁর উপর যে দোষ চাপানো হয়েছিল, তা থেকে তাঁর আমলনামা পরিষ্কার আর সম্মান অক্ষত, রাজা ও প্রজারা এটা নিশ্চিত না করা পর্যন্ত তিনি বের হতে রাজি হননি। তিনি এটাও জানাতে চেয়েছিলেন যে কোনো কাজের কারণে তাঁর কারাবাস প্রাপ্য ছিল না, সেটা ছিল জুলুম আর বাড়াবাড়ি। কুরতুবী আরও সংক্ষেপে বলেন: রাজার সামনে তাঁর নির্দোষিতা প্রমাণ না হওয়া পর্যন্ত, আর বিনা অপরাধে তাঁকে আটকে রাখা হয়েছিল তা প্রমাণ না হওয়া পর্যন্ত, তিনি বের হতে অস্বীকার করলেন।"
          },
          {
            "en": "The early authorities in at-Tabari say the same in fewer words. Qatada: the Prophet of Allah wanted not to go out until he had his vindication, al-'udhr. Ibn Jurayj: Yusuf wanted his vindication before leaving the prison. At-Tabari also reports, through as-Suddi, a remark of Ibn Abbas (RA): had Yusuf come out that day before the king knew his case, the Aziz would never have lost a lingering doubt about him, saying to himself, this is the one who tried to seduce his wife.",
            "bn": "তাবারী যে পূর্বসূরিদের কথা এনেছেন, তাঁরাও কম কথায় একই কথা বলেন। কাতাদা বলেন, আল্লাহর নবী চেয়েছিলেন নিজের নির্দোষিতার প্রমাণ, আল-উযর, হাতে না আসা পর্যন্ত বের হবেন না। ইবন জুরাইজ বলেন, কারাগার থেকে বের হওয়ার আগেই ইউসুফ নির্দোষিতার প্রমাণ চেয়েছিলেন। সুদ্দীর সূত্রে তাবারী ইবন আব্বাস (রাঃ)-এর একটি মন্তব্যও আনেন। রাজা তাঁর ব্যাপারটা জানার আগেই ইউসুফ যদি সেদিন বেরিয়ে আসতেন, তবে আযীযের মনে তাঁকে নিয়ে একটা খচখচানি থেকেই যেত। সে মনে মনে বলত, এ-ই তো সেই লোক, যে আমার স্ত্রীকে ফুসলাতে চেয়েছিল।"
          },
          {
            "en": "As-Sa'di draws the lesson from the character behind the choice. He says Yusuf (AS) held back from hurrying out until his innocence was complete, and calls this part of his patience, his good sense and his sound judgement. Al-Muyassar gives the purpose from Yusuf's side: so that the truth would appear to everyone and his innocence become clear. Five commentators, then, and one reading of the refusal: not reluctance to be free, but an insistence that freedom should come with the truth attached.",
            "bn": "সা'দী এই সিদ্ধান্তের পেছনের চরিত্রটা থেকে শিক্ষা টানেন। তিনি বলেন, পূর্ণ নির্দোষিতা প্রকাশ না হওয়া পর্যন্ত ইউসুফ (আঃ) তাড়াহুড়ো করে বের হওয়া থেকে বিরত থাকলেন। সা'দীর মতে এটা তাঁর সবর, বুদ্ধি আর পরিপূর্ণ বিবেচনার অংশ। মুয়াসসার উদ্দেশ্যটা ইউসুফের দিক থেকে বলে: যাতে সবার সামনে সত্য প্রকাশ পায় আর তাঁর নির্দোষিতা স্পষ্ট হয়। পাঁচজন তাফসীরকার, আর এই অস্বীকারের ব্যাখ্যা সবার কাছে একটাই: মুক্তির প্রতি অনীহা নয়, বরং এই জেদ যে মুক্তি আসবে সত্যকে সঙ্গে নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Let Off or Proven Innocent",
          "bn": "রেহাই আর নির্দোষ সাব্যস্ত হওয়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi quotes Ibn Atiyya, who calls the act deliberation, patience and a search for a clean record. According to what is narrated, Ibn Atiyya says, Yusuf (AS) feared he would come out, gain rank with the king, and have the old charge passed over in silence as something pardoned. Then people would look at him that way for ever and say: this is the man who tried to seduce his master's wife. So he wanted his innocence shown and his standing in chastity and goodness confirmed, and only then to come out to favour and position.",
            "bn": "কুরতুবী ইবন আতিয়্যার কথা উদ্ধৃত করেন। তাঁর মতে কাজটা ছিল ধীরতা, সবর আর নিজেকে নিষ্কলঙ্ক প্রমাণের চেষ্টা। ইবন আতিয়্যা বলেন, বর্ণনা অনুযায়ী ইউসুফ (আঃ) ভয় করেছিলেন যে তিনি বের হবেন, রাজার কাছে মর্যাদা পাবেন, আর পুরনো অভিযোগটা ক্ষমার চাদরে চুপচাপ ঢাকা পড়ে যাবে। তখন মানুষ চিরকাল তাঁকে সেই চোখেই দেখবে আর বলবে, এ-ই সেই লোক, যে নিজের মনিবের স্ত্রীকে ফুসলাতে চেয়েছিল। তাই তিনি চেয়েছিলেন আগে নির্দোষিতা প্রকাশ পাক, পবিত্রতা ও সততায় তাঁর অবস্থান প্রতিষ্ঠিত হোক। তারপরই তিনি বের হবেন সম্মান আর পদের দিকে।"
          },
          {
            "en": "Al-Baghawi reaches the same point from the king's side. Yusuf (AS) raised the women's case after so long, he says, so that the king would not look at him with the eye of suspicion, and so that he would come to the king after all doubt about him had gone. Ma'arif al-Qur'an frames the question he sent back as a test of the present: whether he was still held in doubt over what had happened, and whether he was still thought to be at some fault in that matter.",
            "bn": "বাগাভী একই জায়গায় পৌঁছান রাজার দিক থেকে। তিনি বলেন, এত দীর্ঘ সময় পরে ইউসুফ (আঃ) মহিলাদের প্রসঙ্গ তুললেন, যাতে রাজা তাঁর দিকে সন্দেহের চোখে না তাকান। আর যাতে তাঁর ব্যাপারে সব সন্দেহ দূর হওয়ার পরই তিনি রাজার কাছে যান। মাআরিফুল কুরআন তাঁর ফেরত পাঠানো প্রশ্নটাকে দেখে বর্তমানের এক যাচাই হিসেবে। সেদিন যা ঘটেছিল, তা নিয়ে এখনো তাঁকে সন্দেহ করা হয় কি না, আর সে ব্যাপারে এখনো তাঁকে কোনোভাবে দোষী ভাবা হয় কি না, প্রশ্নটা সেটাই জানতে চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Master and My Lord",
          "bn": "তোমার মনিব, আমার রব"
        },
        "p": [
          {
            "en": "Irji' ila rabbika: go back to your rabb. The same word returns at the end of the verse, inna rabbi bi-kaydihinna 'alim, and the commentators do not give it the same referent both times. For the first, as-Sa'di says he meant the king by it; al-Baghawi and at-Tabari both gloss it as your master, and al-Baghawi adds the king. Al-Muyassar has go back to your master the king. On all four readings, rabbuka in the first clause is the man the messenger served and answered to.",
            "bn": "ইরজি' ইলা রাব্বিকা: তোমার রবের কাছে ফিরে যাও। একই শব্দ আয়াতের শেষে আবার আসে: ইন্না রাব্বী বিকাইদিহিন্না 'আলীম। তাফসীরকারেরা দুই জায়গায় শব্দটাকে একই জনের দিকে ফেরান না। প্রথমটার ব্যাপারে সা'দী বলেন, এ দিয়ে তিনি রাজাকে বুঝিয়েছেন। বাগাভী ও তাবারী দুজনেই অর্থ করেন তোমার মনিব, আর বাগাভী সঙ্গে যোগ করেন, রাজা। মুয়াসসারের ভাষায়: তোমার মনিব রাজার কাছে ফিরে যাও। চারটি ব্যাখ্যাতেই প্রথম বাক্যের রাব্বুকা হলেন সেই মানুষ, দূত যার কাজ করত আর যার কাছে তাকে জবাব দিতে হত।"
          },
          {
            "en": "For the second, al-Baghawi writes that Allah knows what they did, and at-Tabari that Allah has knowledge of what they did to him and do to others, none of it hidden from Him, and He stands behind their requital. The English abridgement of Ibn Kathir, which treats 12:50 to 12:53 as one passage, glosses my Lord as Allah. At-Tabari then records a second view under it is said: that the words mean my master Itfir, the Aziz, the husband of the woman, knows I am innocent of what she accused me of. He gives his own reading first and places this one after it.",
            "bn": "দ্বিতীয়টার ব্যাপারে বাগাভী লেখেন, তারা যা করেছে আল্লাহ তা জানেন। তাবারী বলেন, তারা তাঁর সঙ্গে যা করেছে আর অন্যদের সঙ্গে যা করে, সবই আল্লাহ জানেন, কিছুই তাঁর কাছে গোপন নয়, আর এর প্রতিফল দেওয়ার জন্য তিনিই আছেন। ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ ১২:৫০ থেকে ১২:৫৩ পর্যন্ত এক সঙ্গে আলোচনা করে, সেখানেও আমার রব মানে আল্লাহ। এরপর তাবারী 'বলা হয়েছে' বলে একটি দ্বিতীয় মতও উল্লেখ করেন। সে মতে কথাটার অর্থ: আমার মনিব ইতফীর, অর্থাৎ আযীয, সেই মহিলার স্বামী, জানেন যে মহিলা আমাকে যে দোষ দিয়েছে তা থেকে আমি নির্দোষ। নিজের ব্যাখ্যা তিনি আগে দেন, এই মতটা রাখেন তার পরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name He Left Unspoken",
          "bn": "যে নাম তিনি মুখে আনেননি"
        },
        "p": [
          {
            "en": "The question names the women who cut their hands, not the woman at the centre of the affair. Al-Baghawi says he did not mention the Aziz's wife explicitly, out of courtesy and respect. Al-Qurtubi says he mentioned the women as a group so that she would be included by way of the general term, by hint and not by name, and calls this good companionship and good manners. In the passage from Ibn Atiyya he quotes, Yusuf (AS) turned away from naming her out of good companionship and regard for the Aziz's claim on him.",
            "bn": "প্রশ্নে নাম এসেছে হাত কাটা মহিলাদের, ঘটনার কেন্দ্রে যে মহিলা ছিল তার নয়। বাগাভী বলেন, আদব আর সম্মানের খাতিরে তিনি আযীযের স্ত্রীর কথা স্পষ্ট করে বলেননি। কুরতুবী বলেন, তিনি মহিলাদের কথা একসঙ্গে বললেন, যাতে সাধারণ শব্দের ভেতরে ইশারায় সেও ঢুকে যায়, অথচ তার নাম সরাসরি না আসে। কুরতুবী একে বলেন ভালো সাহচর্য আর আদব। তিনি ইবন আতিয়্যার যে অংশ উদ্ধৃত করেন, সেখানেও আছে: ভালো সাহচর্য আর নিজের উপর আযীযের হকের খেয়াল রেখে ইউসুফ (আঃ) তার নাম নেওয়া থেকে সরে থাকলেন।"
          },
          {
            "en": "Ma'arif al-Qur'an, citing al-Qurtubi, sees in this regard for the house in which he had lived and been raised, and adds a practical side: the women's word was enough to clear him, and would shame them far less than an inquiry aimed at the wife. The accusation and the women's talk were treated at 12:25 and 12:30. Here it is enough to say that their plot describes particular people in one story, and licenses no suspicion of women as a class or of any living person or community.",
            "bn": "মাআরিফুল কুরআন কুরতুবীর বরাতে এতে দেখে সেই ঘরের প্রতি খেয়াল, যেখানে তিনি থেকেছেন আর বড় হয়েছেন। সঙ্গে একটা বাস্তব দিকও যোগ করে: তাঁকে নির্দোষ প্রমাণ করতে মহিলাদের সাক্ষ্যই যথেষ্ট ছিল, আর তাতে তাদের লজ্জা হত অনেক কম। তদন্তের তীর আযীযের স্ত্রীর দিকে গেলে অপমানটা হত অনেক বেশি। অভিযোগ আর মহিলাদের কানাকানির কথা ১২:২৫ ও ১২:৩০ আয়াতের আলোচনায় এসেছে। এখানে এটুকু বলাই যথেষ্ট: তাদের চক্রান্তের কথা একটি কাহিনির নির্দিষ্ট কিছু মানুষের বর্ণনা। এতে নারী জাতিকে সন্দেহ করার, কিংবা কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু বলার অনুমতি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Had I Stayed That Long",
          "bn": "আমি যদি অতদিন থাকতাম"
        },
        "p": [
          {
            "en": "Several of the commentators bring a saying of the Prophet ﷺ to this clause. Al-Bukhari records it in his Sahih, number 4694, from Abu Hurayrah (RA): \"May Allah bestow His Mercy on (Prophet) Lot. (When his nation troubled him) he wished if he could betake himself to some powerful support; and if I were to remain in prison for the period Joseph had remained, I would surely respond to the call; and we shall have more right (to be in doubt) than Abraham: When Allah said to him, 'Don't you believe?' Abraham said, 'Yes, (I do believe) but to be stronger in faith.'\"",
            "bn": "কয়েকজন তাফসীরকার এই অংশে নবী ﷺ-এর একটি বাণী নিয়ে আসেন। বুখারী তাঁর সহীহ গ্রন্থে, ৪৬৯৪ নম্বরে, আবূ হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন: \"আল্লাহ লূত (আঃ)-এর উপর রহম করুন। (যখন তাঁর কওম তাঁকে কষ্ট দিল) তিনি কোনো মজবুত আশ্রয়ের কাছে ঠাঁই নিতে চেয়েছিলেন। আর ইউসুফ যত দিন কারাগারে ছিলেন, আমি যদি তত দিন কারাগারে থাকতাম, তবে অবশ্যই ডাকে সাড়া দিতাম। আর আমরা ইবরাহীমের চেয়ে (সন্দেহের) বেশি উপযুক্ত, যখন আল্লাহ তাঁকে বললেন, 'তুমি কি ঈমান আনোনি?' ইবরাহীম বললেন, 'অবশ্যই এনেছি, তবে আমার অন্তর যাতে প্রশান্ত হয়।'\""
          },
          {
            "en": "This is the chain through Abd al-Rahman ibn al-Qasim, and al-Qurtubi notes that it sits in the book of tafsir of al-Bukhari's Sahih. Al-Bukhari also has the saying at 3372, with the clause about Ibrahim first. How is it attached here? Ibn Kathir introduces it by saying that the Sunnah praised Yusuf (AS) for this very act, and drew attention to his merit, his rank and his patience. Al-Baghawi places it directly after the question about the women. Al-Qurtubi and at-Tabari set it under the verse among several chains. Its clauses on Lut and Ibrahim (AS) belong to 11:80 and 2:260, and are not taken up here.",
            "bn": "বর্ণনাটি এসেছে আবদুর রহমান ইবনুল কাসিমের সূত্রে। কুরতুবী জানান, এটি বুখারীর সহীহ গ্রন্থের তাফসীর অধ্যায়ে আছে। বুখারী ৩৩৭২ নম্বরেও বাণীটি এনেছেন, সেখানে ইবরাহীম (আঃ)-এর অংশটি আগে। এখানে বাণীটি কীভাবে যুক্ত হলো? ইবন কাসীর ভূমিকায় বলেন, সুন্নাহ ইউসুফ (আঃ)-এর ঠিক এই কাজটিরই প্রশংসা করেছে, আর তাঁর মর্যাদা, উঁচু অবস্থান ও সবরের দিকে দৃষ্টি ফিরিয়েছে। বাগাভী বাণীটি রেখেছেন মহিলাদের নিয়ে প্রশ্নটির ঠিক পরেই। কুরতুবী ও তাবারী আয়াতের অধীনে আরও কয়েকটি সূত্রের সঙ্গে এটি এনেছেন। লূত ও ইবরাহীম (আঃ)-এর অংশ দুটি ১১:৮০ ও ২:২৬০ আয়াতের বিষয়, এখানে সেগুলো নিয়ে আলোচনা হবে না।"
          },
          {
            "en": "The lines about Lut and Ibrahim (AS) belong to 11:80 and 2:260, and none of the commentaries consulted for this verse explains them here, so this article leaves them there. The same commentators carry further reports on this verse. Ibn Kathir himself labels one of them, from Ikrima, mursal, lacking the Companion in its chain, and the notes to the printed at-Tabari mark another chain as weak for an unnamed narrator. This article rests on al-Bukhari's wording alone, which is found in his Sahih.",
            "bn": "লূত (আঃ) ও ইবরাহীম (আঃ)-এর অংশগুলো ১১:৮০ ও ২:২৬০ আয়াতের বিষয়। এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এখানে সেগুলোর ব্যাখ্যা দেয়নি। তাই এই লেখাও সেগুলো সেখানেই রেখে দিচ্ছে। একই তাফসীরকারেরা এ আয়াতের অধীনে আরও কিছু বর্ণনা আনেন। ইকরিমা থেকে আসা একটিকে ইবন কাসীর নিজেই মুরসাল বলেছেন, অর্থাৎ সূত্রে সাহাবীর নাম নেই। ছাপা তাবারীর টীকায় আরেকটি সূত্রকে দুর্বল বলা হয়েছে, কারণ তাতে একজন বর্ণনাকারীর নাম অজানা। এই লেখা নির্ভর করছে শুধু বুখারীর বর্ণনার উপর, যা তাঁর সহীহ গ্রন্থে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience Beside Prudence",
          "bn": "সবরের পাশে দূরদর্শিতা"
        },
        "p": [
          {
            "en": "The saying sets the Prophet ﷺ beside Yusuf (AS), and the commentators take up the question this raises. Al-Qurtubi, in a passage that opens with Ibn Atiyya, asks how the Prophet ﷺ could praise Yusuf (AS) for patience and for not rushing out, and then place himself elsewhere. His answer is that the Prophet ﷺ took for himself another line of judgement, which also has its own excellence: had it been him, he would have gone out at once and shown his innocence afterwards, since these stories are held up for people to follow until the Day of Resurrection.",
            "bn": "বাণীটি নবী ﷺ-কে ইউসুফ (আঃ)-এর পাশে দাঁড় করায়। এতে যে প্রশ্ন ওঠে, তাফসীরকারেরা সেটা নিয়ে কথা বলেছেন। কুরতুবী, যাঁর এই আলোচনা শুরু হয় ইবন আতিয়্যার উদ্ধৃতি দিয়ে, প্রশ্ন তোলেন: নবী ﷺ ইউসুফ (আঃ)-এর সবর আর তাড়াহুড়ো না করার প্রশংসা করলেন, তারপর নিজেকে রাখলেন অন্য অবস্থানে, এটা কেমন? তাঁর জবাব: নবী ﷺ নিজের জন্য বেছে নিয়েছেন বিবেচনার আরেকটি পথ, যার নিজস্ব উৎকর্ষও আছে। তিনি থাকলে সঙ্গে সঙ্গে বেরিয়ে আসতেন, আর নির্দোষিতা প্রমাণ করতেন পরে। কারণ এসব কাহিনি কিয়ামত পর্যন্ত মানুষের অনুসরণের জন্য সামনে রাখা।"
          },
          {
            "en": "So, al-Qurtubi says, he wanted to lead people to the more prudent course. Whoever lets such a chance of release pass may stay in prison, and the man who would free him may turn away. Yusuf (AS) was safe from that through what he knew from Allah; others are not. The course the Prophet ﷺ named for himself is prudence, and what Yusuf did was great patience and endurance. Ma'arif al-Qur'an reads the hadith as praise of Yusuf's patience, forbearance and noble character, and repeats al-Qurtubi's answer.",
            "bn": "কুরতুবী বলেন, তাই তিনি মানুষকে বেশি দূরদর্শী পথের দিকে নিতে চেয়েছেন। এমন অবস্থায় মুক্তির সুযোগ যে হাতছাড়া করে, সে হয়তো কারাগারেই থেকে যায়, আর যে তাকে বের করতে চেয়েছিল তার মনও ঘুরে যেতে পারে। আল্লাহর কাছ থেকে পাওয়া জ্ঞানের কারণে ইউসুফ (আঃ) এ থেকে নিরাপদ ছিলেন, অন্যরা নিরাপদ নয়। নবী ﷺ নিজের জন্য যে পথের কথা বলেছেন তা দূরদর্শিতা, আর ইউসুফ যা করেছেন তা মহান সবর ও দৃঢ়তা। মাআরিফুল কুরআন হাদিসটিকে পড়ে ইউসুফের সবর, সহনশীলতা আর মহৎ চরিত্রের প্রশংসা হিসেবে, আর কুরতুবীর জবাবটাই আবার উল্লেখ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Waiting for Justice, Not Relief",
          "bn": "মুক্তি নয়, ইনসাফের অপেক্ষা"
        },
        "p": [
          {
            "en": "The answer to his question comes in the next verses: the women's testimony and the confession in 12:51, and the words of 12:52 and 12:53, whose speaker the commentators discuss. That ground belongs to those verses. What 12:50 leaves the reader with is a man who had every reason to take the open door, and who chose instead to have the truth spoken first. He did not raise his voice or name the one who wronged him. He asked a question and left the knowing of the plot to his Lord.",
            "bn": "তাঁর প্রশ্নের জবাব আসে পরের আয়াতগুলোতে: ১২:৫১ আয়াতে মহিলাদের সাক্ষ্য আর স্বীকারোক্তি, তারপর ১২:৫২ ও ১২:৫৩ আয়াতের কথা, যার বক্তা কে তা নিয়ে তাফসীরকারেরা আলোচনা করেছেন। সে আলোচনা ওই আয়াতগুলোর জায়গা। ১২:৫০ পাঠকের হাতে যা রেখে যায়, তা হল এমন এক মানুষ, খোলা দরজা দিয়ে বেরিয়ে যাওয়ার সব কারণ যাঁর ছিল। তবু তিনি বেছে নিলেন, আগে সত্যটা উচ্চারিত হোক। তিনি গলা চড়াননি। যে তাঁর উপর অন্যায় করেছে, তার নামও নেননি। একটা প্রশ্ন করেছেন, আর চক্রান্তের খবর রেখে দিয়েছেন তাঁর রবের জ্ঞানের উপর।"
          },
          {
            "en": "Most of us guard our names by haste: the quick denial, the louder version, the rush to be seen as fine before anyone looks closely. This verse points to another way, clearing a name by truth, patiently, without spending anyone else's honour. It also names the difference between relief and justice. Relief ends the discomfort; justice sets the record right. Where the choice is ours to make, we can ask which we are really waiting for, and whether our Lord's knowledge of what was done is enough to let us wait well.",
            "bn": "আমরা অনেকেই নিজের নাম বাঁচাই তাড়াহুড়ো করে। ঝটপট অস্বীকার, আরও জোরালো গলায় নিজের ভাষ্য, কেউ ভালো করে দেখার আগেই নিজেকে ঠিকঠাক দেখানোর দৌড়। এ আয়াত আরেকটা পথ দেখায়: ধৈর্য ধরে, অন্যের সম্মান খরচ না করে, সত্য দিয়ে নাম পরিষ্কার করা। মুক্তি আর ইনসাফের তফাতটাও এখানে ধরা পড়ে। মুক্তি অস্বস্তির ইতি টানে, ইনসাফ হিসাবটা ঠিক করে দেয়। যেখানে বেছে নেওয়ার সুযোগ আমাদের হাতে, সেখানে নিজেকে জিজ্ঞেস করা যায়, আমি আসলে কীসের অপেক্ষায়? আর যা ঘটেছে তা আমার রব জানেন, এই কথাটুকু কি আমাকে সুন্দরভাবে অপেক্ষা করতে দেয়?"
          }
        ]
      }
    ]
  },
  "12:53": {
    "sections": [
      {
        "h": {
          "en": "Spoken Once the Case Closed",
          "bn": "মামলা মিটে যাওয়ার পরের কথা"
        },
        "p": [
          {
            "en": "Yusuf (AS) would not leave prison until his name was cleared. The king questioned the women, and in 12:51 they answered that they knew no evil of him. Then the wife of al-'Aziz spoke: now the truth has come out; it was I who tried to seduce him, and he is of the truthful. Verse 12:52 follows with a speaker who says the aim was that he would know I did not betray him in secret, and that Allah does not guide the plotting of betrayers.",
            "bn": "নাম পরিষ্কার না হওয়া পর্যন্ত ইউসুফ (আঃ) কারাগার ছাড়তে রাজি হননি। রাজা নারীদের জেরা করলেন। ১২:৫১ আয়াতে তারা জবাব দিল, তাঁর মধ্যে তারা কোনো মন্দ দেখেনি। তারপর আযীযের স্ত্রী মুখ খুলল: এখন সত্য প্রকাশ হয়ে গেছে, আমিই তাঁকে ফুসলাতে চেয়েছিলাম, আর তিনি সত্যবাদীদের একজন। ১২:৫২ আয়াতে একজন বক্তা বলছেন, উদ্দেশ্য ছিল সে যেন জানে আমি গোপনে তার সঙ্গে খেয়ানত করিনি, আর আল্লাহ খেয়ানতকারীদের চক্রান্ত সফল হতে দেন না।"
          },
          {
            "en": "Then comes this verse, fifteen words in the Arabic: wa ma ubarri'u nafsi, and I do not acquit myself. Inna n-nafsa la-ammaratun bi-s-su', the soul is indeed ever urging evil, illa ma rahima rabbi, except whom my Lord has mercy on. Inna rabbi ghafurun rahim, my Lord is Forgiving, Merciful. It names no speaker, and who is speaking is the first question every commentator consulted here has to settle.",
            "bn": "তারপর আসে এই আয়াত, আরবিতে পনেরোটি শব্দ: ওয়া মা উবাররিউ নাফসী, আর আমি নিজেকে দোষমুক্ত বলি না। ইন্নান নাফসা লাআম্মারাতুন বিস সূ, নফস তো মন্দের দিকে বারবার হুকুম করে, ইল্লা মা রাহিমা রাব্বী, আমার রব যার উপর রহম করেন সে ছাড়া। ইন্না রাব্বী গাফূরুর রাহীম, আমার রব ক্ষমাশীল, দয়াময়। আয়াতটি কোনো বক্তার নাম বলে না। কে বলছেন, এ আয়াতের জন্য দেখা প্রত্যেক তাফসীরকারকে আগে এই প্রশ্নেরই মীমাংসা করতে হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Her Confession, Continued",
          "bn": "স্বীকারোক্তির বাকি অংশ"
        },
        "p": [
          {
            "en": "Ibn Kathir, in his Arabic tafsir, reads the verse as the woman speaking: she says, I do not acquit myself, for the soul talks and wishes, and that is why I tried to seduce him, because it is ever urging evil; except whom my Lord has mercy on means except whom Allah protects. He calls this the best known view and the most fitting to the flow of the story and the meaning of the words, and reports that al-Mawardi recorded it in his tafsir.",
            "bn": "ইবনে কাসীর তাঁর আরবি তাফসীরে আয়াতটিকে মহিলার কথা হিসেবে পড়েন। মহিলা বলছে: আমি নিজেকে দোষমুক্ত বলি না, কারণ নফস মনে মনে কথা বলে, আকাঙ্ক্ষা করে। এ কারণেই আমি তাঁকে ফুসলাতে চেয়েছিলাম, কেননা নফস মন্দের দিকে হুকুম করতেই থাকে। আর 'আমার রব যার উপর রহম করেন' মানে, আল্লাহ যাকে রক্ষা করেন। ইবনে কাসীর এই মতকে বলেন সবচেয়ে প্রসিদ্ধ, আর কাহিনির ধারা ও কথার অর্থের সঙ্গে সবচেয়ে মানানসই। তিনি জানান, মাওয়ারদী তাঁর তাফসীরে এই মত উল্লেখ করেছেন।"
          },
          {
            "en": "He adds that Abu al-'Abbas Ibn Taymiyya took up its defence and devoted a separate work to it. His argument is the setting: the whole passage is the speech of al-'Aziz's wife in the king's presence, and Yusuf (AS) was not there with them; the king had him brought only afterwards. The abridged English Ibn Kathir, grouped over 12:50 to 12:53, gives the same reading here and calls it the most viable.",
            "bn": "তিনি আরও বলেন, আবুল আব্বাস ইবনে তাইমিয়া এই মতের পক্ষে দাঁড়িয়েছিলেন এবং এ বিষয়ে আলাদা একটি রচনা লিখেছিলেন। ইবনে কাসীরের যুক্তি হলো প্রেক্ষাপট। পুরো আলোচনাটাই রাজার সামনে আযীযের স্ত্রীর বক্তব্য। ইউসুফ (আঃ) তখন সেখানে ছিলেন না, রাজা তাঁকে ডেকে আনেন পরে। ইবনে কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১২:৫০ থেকে ১২:৫৩ আয়াত একসঙ্গে আলোচনা করে। তার এই আয়াতের অংশেও একই পাঠ, আর একেই সবচেয়ে গ্রহণযোগ্য বলা হয়েছে।"
          },
          {
            "en": "As-Sa'di reaches the same conclusion by another path. Because her words in 12:52 carried a kind of self-vindication, as if no sin had come from her in Yusuf's matter, she corrected herself: I do not acquit myself, that is, of the seduction, the intent, the fierce craving and the scheming. He calls this the correct view, since the context is her speech and Yusuf (AS) was then in prison. The Muyassar also has her say it: I do not purify myself or acquit it.",
            "bn": "সা'দী একই সিদ্ধান্তে পৌঁছান অন্য পথে। ১২:৫২ আয়াতে মহিলার কথায় নিজেকে নির্দোষ দেখানোর একটা ভাব ছিল, যেন ইউসুফের ব্যাপারে তার দিক থেকে কোনো গুনাহই হয়নি। তাই সে নিজেকে শুধরে নিল: আমি নিজেকে দোষমুক্ত বলি না। অর্থাৎ ফুসলানো, মনের ইচ্ছা, প্রবল লোভ আর চক্রান্ত, এগুলো থেকে নয়। সা'দী এটাকেই সঠিক মত বলেন, কারণ প্রসঙ্গটা মহিলার বক্তব্য, আর ইউসুফ (আঃ) তখন কারাগারে। মুয়াসসারও কথাটা মহিলার মুখেই রাখে: আমি নিজেকে পবিত্র বলি না, দোষমুক্তও বলি না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reading Through Yusuf (AS)",
          "bn": "ইউসুফ (আঃ)-এর মুখে পাঠ"
        },
        "p": [
          {
            "en": "At-Tabari reads it the other way. His gloss begins: Yusuf, Allah's blessings on him, says: I do not acquit myself of error and slipping, so as to declare myself pure. Ibn Kathir notes that this is the only view Ibn Jarir and Ibn Abi Hatim relate. At-Tabari explains that the words followed 12:52: when Yusuf said he had not betrayed his master in secret, he was reminded of the inclination described in 12:24, wa hamma biha, and answered with this verse.",
            "bn": "তাবারী পড়েন উল্টো দিক থেকে। তাঁর ব্যাখ্যা শুরু হয় এভাবে: ইউসুফ, তাঁর উপর আল্লাহর রহমত, বলছেন: আমি নিজেকে ভুলত্রুটি আর পদস্খলন থেকে মুক্ত দাবি করে নিজের পবিত্রতা ঘোষণা করি না। ইবনে কাসীর জানান, ইবনে জারীর ও ইবনে আবী হাতিম এই মত ছাড়া আর কোনো মত উল্লেখ করেননি। তাবারীর ব্যাখ্যায়, কথাটা এসেছিল ১২:৫২ আয়াতের ঠিক পরে। ইউসুফ যখন বললেন তিনি গোপনে তাঁর মনিবের খেয়ানত করেননি, তখন ১২:২৪ আয়াতের সেই ঝোঁকের কথা, ওয়া হাম্মা বিহা, তাঁকে মনে করিয়ে দেওয়া হলো। জবাবে তিনি এই আয়াতের কথাগুলো বললেন।"
          },
          {
            "en": "He gives three versions of who did the reminding. In the first, Jibril or an angel said to him, not even on the day you inclined? He relates this from Ibn 'Abbas through 'Ikrima, and from Sa'id ibn Jubayr, Ibn Abi al-Hudhayl, al-Hasan, Abu Salih and Qatada. In the second, from as-Suddi, it was the woman who reminded him. In the third, from Ibn 'Abbas by another chain, nobody reminded him; he recalled it himself when Allah had shown his innocence.",
            "bn": "কে মনে করিয়ে দিয়েছিলেন, এ নিয়ে তাবারী তিনটি বর্ণনা আনেন। প্রথমটিতে জিবরীল, অথবা কোনো ফেরেশতা, তাঁকে বললেন: যেদিন আপনার মনে ঝোঁক এসেছিল, সেদিনও নয়? এটি তিনি বর্ণনা করেন ইকরিমার সূত্রে ইবনে আব্বাস (রাঃ) থেকে, আর সাঈদ ইবনে জুবাইর, ইবনে আবিল হুযাইল, হাসান, আবু সালিহ ও কাতাদা থেকে। দ্বিতীয়টিতে, সুদ্দীর বর্ণনায়, মনে করিয়ে দিয়েছিল সেই মহিলা। তৃতীয়টিতে, ইবনে আব্বাস (রাঃ) থেকে আরেক সূত্রে, কেউ মনে করায়নি। আল্লাহ যখন তাঁর নির্দোষিতা প্রকাশ করলেন, তিনি নিজেই সেটা স্মরণ করলেন।"
          },
          {
            "en": "After quoting the Ibn 'Abbas report, Ibn Kathir names others who said the same: Mujahid, Sa'id ibn Jubayr, 'Ikrima, Ibn Abi al-Hudhayl, ad-Dahhak, al-Hasan, Qatada and as-Suddi. He then restates that the first view, the woman's, is stronger and clearer. Al-Qurtubi quotes al-Qushayri as saying the apparent sense is that both 12:52 and this verse are Yusuf's.",
            "bn": "ইবনে আব্বাস (রাঃ)-এর বর্ণনাটি উদ্ধৃত করার পর ইবনে কাসীর আরও যাঁরা একই কথা বলেছেন তাঁদের নাম দেন: মুজাহিদ, সাঈদ ইবনে জুবাইর, ইকরিমা, ইবনে আবিল হুযাইল, দাহহাক, হাসান, কাতাদা ও সুদ্দী। তারপর আবার বলেন, প্রথম মতটি, অর্থাৎ মহিলার কথা হওয়ার মতটি, বেশি শক্তিশালী ও বেশি স্পষ্ট। কুরতুবী কুশাইরীর কথা উদ্ধৃত করেন: বাহ্যিক অর্থ হলো, ১২:৫২ আর এই আয়াত দুটোই ইউসুফের কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "What Would It Mean for Him?",
          "bn": "তাঁর মুখে কথাটার অর্থ কী"
        },
        "p": [
          {
            "en": "Those who hear Yusuf (AS) in the verse do not all explain it the same way. Al-Qurtubi reports from al-Hasan that when Yusuf said he had not betrayed his master, the Prophet of Allah disliked having praised himself, and so said, I do not acquit myself, because praising oneself is blameworthy. Al-Hasan's proof is the Qur'an's own command, fa-la tuzakku anfusakum, so do not claim purity for yourselves, the words of 53:32. On this reading the verse is an act of humility.",
            "bn": "যাঁরা আয়াতে ইউসুফ (আঃ)-এর কণ্ঠ শোনেন, তাঁরাও সবাই একইভাবে ব্যাখ্যা করেন না। কুরতুবী হাসান থেকে বর্ণনা করেন: ইউসুফ যখন বললেন তিনি মনিবের খেয়ানত করেননি, তখন আল্লাহর নবী অপছন্দ করলেন যে তিনি নিজের প্রশংসা করে ফেলেছেন। তাই বললেন, আমি নিজেকে দোষমুক্ত বলি না, কারণ নিজের পবিত্রতা ঘোষণা নিন্দনীয়। হাসানের দলিল কুরআনেরই নির্দেশ: ফালা তুযাক্কূ আনফুসাকুম, তোমরা নিজেদের পবিত্র দাবি কোরো না, যা ৫৩:৩২ আয়াতের কথা। এই পাঠে আয়াতটি বিনয়ের প্রকাশ।"
          },
          {
            "en": "Ma'arif al-Qur'an takes the same line and adds 4:49, those who claim purity for themselves while Allah purifies whom He wills. Its summary of his meaning: in a trial of that size, staying safe from sin was no achievement of his own but the mercy and help of Allah alone. It also notes that, according to some narrations, he said it because a thought had arisen in his heart, which it describes as involuntary and says he did not wholly absolve his inner self of.",
            "bn": "মাআরিফুল কুরআনও একই পথে চলে, আর সঙ্গে আনে ৪:৪৯ আয়াত: যারা নিজেদের পবিত্র দাবি করে, অথচ আল্লাহ যাকে চান তাকেই পবিত্র করেন। মাআরিফের সারকথা: এত বড় পরীক্ষায় গুনাহ থেকে বেঁচে থাকা তাঁর নিজের কোনো কৃতিত্ব ছিল না, এটা কেবল আল্লাহর রহমত ও সাহায্য। মাআরিফ এটাও উল্লেখ করে যে কিছু বর্ণনা অনুযায়ী তিনি কথাটা বলেছিলেন, কারণ তাঁর মনে একটা ভাবনা জেগেছিল। মাআরিফ সেটাকে অনিচ্ছাকৃত বলে বর্ণনা করে, আর বলে, সে জন্যই তিনি নিজের অন্তরকে পুরোপুরি দায়মুক্ত বলেননি।"
          },
          {
            "en": "Al-Qurtubi sets out his own stance carefully. If the words can be the woman's, he says, that reading is preferable, because it keeps Yusuf (AS) clear of what some reports describe. If they are Yusuf's, then they concern only what crossed his heart, following the view he prefers on wa hamma biha in 12:24. That phrase is disputed at its own verse, and the commentators here do not agree on what it involved.",
            "bn": "কুরতুবী নিজের অবস্থান সাবধানে বলেন। তাঁর মতে, কথাগুলো যদি মহিলার হওয়া সম্ভব হয়, তবে সেই পাঠই উত্তম, কারণ তাতে কিছু বর্ণনায় যা বলা হয়েছে তা থেকে ইউসুফ (আঃ) মুক্ত থাকেন। আর যদি ইউসুফের কথা হয়, তবে তা কেবল তাঁর মনে যা উদয় হয়েছিল সে বিষয়ে, ১২:২৪ আয়াতের ওয়া হাম্মা বিহা নিয়ে কুরতুবী যে মত বেছে নিয়েছেন সেই অনুযায়ী। সেই শব্দগুচ্ছ নিয়ে বিতর্ক তার নিজের আয়াতে, আর এখানকার তাফসীরকারেরাও এর অর্থ নিয়ে একমত নন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Third Voice, No Verdict",
          "bn": "তৃতীয় এক কণ্ঠ, রায় নেই"
        },
        "p": [
          {
            "en": "Al-Qurtubi records two further positions. Abu Bakr al-Anbari said some people take everything from that he may know in 12:52 to the end of this verse as the wife's words, joined without a full pause to her confession, and that this is the position of those who deny that Yusuf (AS) inclined at all. Al-Anbari does not choose it. Al-Qurtubi also mentions a view that al-'Aziz is speaking: I do not acquit myself of suspecting Yusuf.",
            "bn": "কুরতুবী আরও দুটি মত উল্লেখ করেন। আবু বকর আনবারী বলেছেন, কেউ কেউ ১২:৫২ আয়াতের 'সে যেন জানে' থেকে এই আয়াতের শেষ পর্যন্ত পুরোটাকে আযীযের স্ত্রীর কথা হিসেবে নেন, তার স্বীকারোক্তির সঙ্গে পূর্ণ বিরতি ছাড়াই জোড়া। আনবারীর মতে, এটা তাঁদের মত যাঁরা বলেন ইউসুফ (আঃ)-এর মনে কোনো ঝোঁকই আসেনি। আনবারী নিজে এই মত গ্রহণ করেন না। কুরতুবী আরেকটি মতও উল্লেখ করেন: বক্তা আযীয নিজে, অর্থাৎ আমি ইউসুফকে সন্দেহ করার দোষ থেকে নিজেকে মুক্ত বলি না।"
          },
          {
            "en": "So the commentators divide, and this article does not settle between them. Ibn Kathir, as-Sa'di and the Muyassar hear the woman; at-Tabari and the early authorities he cites hear Yusuf (AS); al-Qurtubi prefers the woman's reading where it is possible and explains the other. What follows about the soul and mercy holds under either reading: a speaker who has confessed and a speaker who has been cleared arrive at the same sentence.",
            "bn": "তাফসীরকারেরা তাই দুই ভাগে বিভক্ত, আর এ লেখা তাঁদের মধ্যে কোনো রায় দিচ্ছে না। ইবনে কাসীর, সা'দী ও মুয়াসসার শোনেন মহিলার কণ্ঠ। তাবারী আর তাঁর উদ্ধৃত প্রথম যুগের আলেমরা শোনেন ইউসুফ (আঃ)-এর কণ্ঠ। কুরতুবী সম্ভব হলে মহিলার পাঠকে প্রাধান্য দেন, আর অন্য পাঠের ব্যাখ্যাও দেন। নফস আর রহমত নিয়ে এরপর যা আসছে, তা দুই পাঠেই খাটে। দোষ স্বীকার করা বক্তা আর নির্দোষ প্রমাণিত বক্তা, দুজনেই এসে দাঁড়ান একই বাক্যে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Self That Keeps Commanding",
          "bn": "যে নফস হুকুম করতেই থাকে"
        },
        "p": [
          {
            "en": "Both the Muyassar and as-Sa'di gloss ammara as kathirat al-amr: not a soul that commands evil once, but a soul that does so again and again. The Muyassar's fuller wording is abundant in commanding its owner to acts of disobedience, in pursuit of its pleasures. As-Sa'di names what su' covers: indecency and every other sin. He adds that the soul is the mount of Shaytan, and through it he gets in to a person. Al-Qurtubi's short gloss is that the soul desires evil.",
            "bn": "মুয়াসসার ও সা'দী দুজনেই আম্মারার ব্যাখ্যা দেন কাসীরাতুল আমর, অর্থাৎ বেশি বেশি হুকুমকারী। এমন নফস নয় যে একবার মন্দের হুকুম দিল, বরং বারবার দিতেই থাকে। মুয়াসসারের পুরো ভাষ্য: নফস নিজের মজা খুঁজতে গিয়ে তার মালিককে খুব বেশি করে নাফরমানির হুকুম দেয়। সা'দী বলে দেন সূ বা মন্দের মধ্যে কী পড়ে: অশ্লীলতা আর বাকি সব গুনাহ। তিনি যোগ করেন, নফস হলো শয়তানের বাহন, এর ভেতর দিয়েই সে মানুষের কাছে ঢোকে। কুরতুবীর সংক্ষিপ্ত ব্যাখ্যা: নফস মন্দকে কামনা করে।"
          },
          {
            "en": "At-Tabari widens the word from one person to all: the souls of Allah's servants command them to what they desire, even when that desire lies outside what pleases Allah. Ibn Kathir, on the woman's reading, puts it in her own terms: the soul talks and wishes, and that is what led her on. Either way the verse speaks of the soul in general, an-nafs, and not only of the speaker's own.",
            "bn": "তাবারী শব্দটাকে একজন মানুষ থেকে সবার দিকে ছড়িয়ে দেন: আল্লাহর বান্দাদের নফস তাদের সেদিকেই হুকুম করে যা সে চায়, যদিও সেই চাওয়া আল্লাহর সন্তুষ্টির বাইরে। ইবনে কাসীর মহিলার পাঠ অনুযায়ী কথাটা তার নিজের ভাষায় রাখেন: নফস মনে মনে কথা বলে, আকাঙ্ক্ষা করে, আর সেটাই তাকে টেনে নিয়েছিল। যে পাঠই ধরা হোক, আয়াতটি বলছে আন-নাফস, অর্থাৎ সাধারণভাবে নফসের কথা, শুধু বক্তার নিজের নফসের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Falls Under the Exception",
          "bn": "ব্যতিক্রমের ভেতরে কারা"
        },
        "p": [
          {
            "en": "Illa ma rahima rabbi: the word ma normally means what, yet here it points to persons. Al-Qurtubi and al-Baghawi both say ma is used in the sense of man, who: except whom my Lord has mercy on and so protects. Both cite fa-nkihu ma taba lakum in 4:3, where ma also refers to people. Al-Qurtubi adds that the exception is munqati', disjoined, since those shown mercy are set apart from the soul that urges evil.",
            "bn": "ইল্লা মা রাহিমা রাব্বী। মা শব্দের সাধারণ অর্থ 'যা', অথচ এখানে তা মানুষের দিকে ইঙ্গিত করে। কুরতুবী ও বাগাভী দুজনেই বলেন, মা এখানে মান অর্থে, অর্থাৎ 'যে': আমার রব যার উপর রহম করেন এবং তাকে রক্ষা করেন, সে ছাড়া। দুজনেই উদাহরণ দেন ৪:৩ আয়াতের ফানকিহূ মা তাবা লাকুম থেকে, যেখানেও মা মানুষকেই বোঝায়। কুরতুবী যোগ করেন, এ ব্যতিক্রমটি মুনকাতি, অর্থাৎ বিচ্ছিন্ন, কারণ রহমতপ্রাপ্তদের মন্দের দিকে ঠেলা নফস থেকে আলাদা করে রাখা হয়েছে।"
          },
          {
            "en": "At-Tabari also calls the exception disjoined, but reads ma differently: it carries the sense of a verbal noun, so the meaning is except that my Lord has mercy on whom He wills among His creation and saves him from following the soul's desire. His parallel is 36:43 and 36:44: nor will they be rescued, except as a mercy from Us. On this reading the exception is less a list of people than an event: mercy arriving and doing the saving.",
            "bn": "তাবারীও ব্যতিক্রমটিকে বিচ্ছিন্ন বলেন, তবে মা-কে পড়েন অন্যভাবে। তাঁর মতে মা এখানে ক্রিয়াবিশেষ্যের অর্থ বহন করে। তখন অর্থ দাঁড়ায়: তবে আমার রব তাঁর সৃষ্টির মধ্যে যাকে চান তার উপর রহম করেন, আর তাকে নফসের খেয়ালখুশির অনুসরণ থেকে বাঁচিয়ে দেন। তাঁর উদাহরণ ৩৬:৪৩ ও ৩৬:৪৪ আয়াত: তাদের উদ্ধারও করা হবে না, তবে আমার পক্ষ থেকে রহমত হিসেবে। এই পাঠে ব্যতিক্রমটা মানুষের কোনো তালিকা নয়, বরং একটা ঘটনা: রহমত এসে পৌঁছায়, আর রহমতই বাঁচায়।"
          },
          {
            "en": "Al-Baghawi names two possibilities. Those shown mercy are the angels, whom Allah protected by not placing desire in them; or, it has been said, the phrase points to the state of protection at the moment the proof was seen, a reference to 12:24. As-Sa'di reads it as mercy that rescues a person from the commanding soul until it becomes mutma'inna, at rest with its Lord. That, he says, does not come from the soul at all, but from Allah's favour and mercy to His servant.",
            "bn": "বাগাভী দুটি সম্ভাবনার কথা বলেন। রহমতপ্রাপ্তরা হলেন ফেরেশতারা, যাঁদের মধ্যে আল্লাহ কামনা রাখেননি এবং এভাবে রক্ষা করেছেন। অথবা, বলা হয়েছে, কথাটা ইঙ্গিত করে প্রমাণ দেখার মুহূর্তে রক্ষা পাওয়ার অবস্থার দিকে, যা ১২:২৪ আয়াতের দিকে ইশারা। সা'দী একে পড়েন এমন রহমত হিসেবে, যা মানুষকে হুকুমকারী নফস থেকে উদ্ধার করে, শেষে তার নফস রবের কাছে মুতমাইন্না, প্রশান্ত হয়ে যায়। তাঁর মতে এটা নফসের নিজের অর্জন নয়, বরং বান্দার প্রতি আল্লাহর অনুগ্রহ ও রহমত।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgiving, Then Merciful",
          "bn": "আগে ক্ষমা, তারপর রহম"
        },
        "p": [
          {
            "en": "The verse closes on two names. At-Tabari explains ghafur as pardoning the sins of whoever repents, by leaving the punishment and the exposure aside, and rahim as sparing him punishment after his repentance. As-Sa'di: forgiving towards one who dared to commit sins, once he turns back; merciful in accepting his repentance and granting him good deeds. The Muyassar ties both names to those of His servants who repent. Each name is aimed at a person coming back.",
            "bn": "আয়াতের শেষ দুটি নামে। তাবারী গাফূর-এর ব্যাখ্যা দেন: যে তওবা করে, শাস্তি আর লাঞ্ছনা বাদ দিয়ে তার গুনাহ মাফ করে দেওয়া। আর রাহীম মানে, তওবার পর তাকে শাস্তি না দেওয়া। সা'দীর ভাষায়: যে গুনাহ করার দুঃসাহস দেখিয়েছে, সে ফিরে এলে তিনি ক্ষমাশীল। তার তওবা কবুল করে আর তাকে নেক আমলের তাওফীক দিয়ে তিনি দয়ালু। মুয়াসসার দুটি নামকেই জুড়ে দেয় তাঁর তওবাকারী বান্দাদের সঙ্গে। প্রতিটি নামের লক্ষ্য ফিরে আসা একজন মানুষ।"
          },
          {
            "en": "Ma'arif al-Qur'an brings in here a scheme of three states of the soul: ammara, urging evil (this verse); lawwama, the reproaching self sworn by in 75:2; and mutma'inna, the self at rest of 89:27. Left to itself the soul urges evil; when a person resists it for fear of Allah and repents, it reproaches; with long striving the urge itself fades. Ma'arif reads ghafur as a hint for the repenting self and rahim for the self at rest, itself a gift of mercy.",
            "bn": "মাআরিফুল কুরআন এখানে নফসের তিনটি অবস্থার একটি বিন্যাস আনে। আম্মারা, মন্দের দিকে ঠেলা নফস, যা এই আয়াতে। লাওয়ামা, তিরস্কারকারী নফস, ৭৫:২ আয়াতে যার শপথ করা হয়েছে। আর মুতমাইন্না, প্রশান্ত নফস, ৮৯:২৭ আয়াতে। নিজের উপর ছেড়ে দিলে নফস মন্দের দিকে ঠেলে। আল্লাহর ভয়ে মানুষ তাকে রুখে দিলে আর তওবা করলে সে তিরস্কার করতে শেখে। দীর্ঘ সাধনায় মন্দের তাড়নাটাই মিলিয়ে যায়। মাআরিফ গাফূর-এ দেখে তওবাকারী নফসের ইঙ্গিত, আর রাহীম-এ প্রশান্ত নফসের, যা নিজেও রহমতেরই দান।"
          }
        ]
      },
      {
        "h": {
          "en": "Safe Only by Mercy",
          "bn": "রহমতেই কেবল নিরাপত্তা"
        },
        "p": [
          {
            "en": "None of the eight commentaries consulted attaches a sound hadith to this verse. Al-Qurtubi cites, without chain or grading, a saying about a companion who repays kindness with harm, and Ma'arif repeats it from him; it is left aside here. A narration on the same theme, not attached to the verse by any of them, is in al-Bukhari's Sahih, number 6463, from Abu Hurayrah (RA), rendered here from its Arabic.",
            "bn": "এ আয়াতের জন্য দেখা আটটি তাফসীরের কোনোটিই আয়াতের সঙ্গে কোনো সহীহ হাদিস যুক্ত করেনি। কুরতুবী সনদ বা মান উল্লেখ ছাড়াই এমন এক সঙ্গীর কথা আনেন, যে ভালো ব্যবহারের জবাব দেয় ক্ষতি দিয়ে। মাআরিফ কথাটা কুরতুবী থেকেই নিয়েছে। তাই এখানে সেটা রাখা হলো না। একই বিষয়ের একটি হাদিস আছে বুখারীর সহীহ গ্রন্থে, ৬৪৬৩ নম্বরে, আবু হুরাইরা (রাঃ)-এর বর্ণনায়। তাফসীরকারদের কেউ একে এই আয়াতের সঙ্গে জুড়ে দেননি। নিচে আরবি থেকে এর অর্থ দেওয়া হলো।"
          },
          {
            "en": "The Prophet ﷺ said: \"No one's deeds will save him.\" They said, \"Not even you, Messenger of Allah?\" He said, \"Not even me, unless Allah covers me with mercy. So aim straight and keep close, go out in the morning and the evening and something of the night, and the middle way, the middle way: you will arrive.\" Deeds are still commanded, in the same breath. What they cannot do is make a person safe by themselves.",
            "bn": "নবী ﷺ বলেছেন: \"কারও আমল তাকে নাজাত দেবে না।\" সাহাবিরা বললেন, \"আপনাকেও না, হে আল্লাহর রাসূল?\" তিনি বললেন, \"আমাকেও না, যদি না আল্লাহ আমাকে রহমত দিয়ে ঢেকে নেন। অতএব সঠিক পথে লক্ষ্য রাখো, কাছাকাছি থাকো, সকালে ও বিকেলে বের হও, আর রাতের কিছু অংশে। মধ্যপথ, মধ্যপথ, তাহলেই পৌঁছে যাবে।\" একই কথার ভেতরে আমলের হুকুমও আছে। আমল যা পারে না, তা হলো একা একা মানুষকে নিরাপদ করা।"
          },
          {
            "en": "The verse narrates one woman's fault inside one story and licenses no judgement on any living person. Its turn is towards the reader. Whoever the speaker was, the sentence refuses what 53:32 forbids: declaring oneself pure. A person who has confessed need not pretend to have been blameless, and a person who has been cleared need not take the credit. Both can say the same thing: my soul is no guarantee, my Lord's mercy is, and He is Forgiving, Merciful.",
            "bn": "আয়াতটি একটি কাহিনির ভেতরে এক নারীর দোষের কথা বলে। জীবিত কোনো মানুষের বিচার করার অনুমতি এতে নেই। এর মুখ ফেরানো পাঠকের দিকে। বক্তা যে-ই হোন, বাক্যটি সেই কাজটি করে না যা ৫৩:৩২ আয়াত নিষেধ করেছে: নিজেকে পবিত্র ঘোষণা করা। যে দোষ স্বীকার করেছে, তাকে নিজেকে নিষ্কলঙ্ক দেখানোর ভান করতে হয় না। যে নির্দোষ প্রমাণিত হয়েছে, তাকেও কৃতিত্ব নিজের ঘরে তুলতে হয় না। দুজনেই একই কথা বলতে পারে: আমার নফস কোনো নিশ্চয়তা নয়, নিশ্চয়তা আমার রবের রহমত, আর তিনি ক্ষমাশীল, দয়াময়।"
          }
        ]
      }
    ]
  },
  "12:56": {
    "sections": [
      {
        "h": {
          "en": "Where the Word Thus Points",
          "bn": "‘এভাবেই’ শব্দের ইশারা"
        },
        "p": [
          {
            "en": "Wa-kadhalika makkanna li-Yusufa fi l-ard: and thus We established Yusuf in the land. The verse comes straight after two short exchanges. In 12:54 the king says, bring him to me and I will take him for myself, and once he has spoken with him he tells him, today you are with us secure and trusted. In 12:55 Yusuf (AS) asks to be set over the storehouses of the land, calling himself a knowing guardian. Then the Qur'an steps back from the conversation and names who acted: We established him.",
            "bn": "ওয়া কাযালিকা মাক্কান্না লি-ইউসুফা ফিল আরদ: আর এভাবেই আমি ইউসুফকে দেশে প্রতিষ্ঠিত করলাম। আয়াতটি আসে দুটি ছোট কথোপকথনের ঠিক পরে। ১২:৫৪ আয়াতে রাজা বলে, তাকে আমার কাছে আনো, আমি তাকে একান্ত নিজের করে নেব। কথা বলার পর সে জানিয়ে দেয়, আজ থেকে তুমি আমাদের কাছে মর্যাদাবান ও বিশ্বস্ত। ১২:৫৫ আয়াতে ইউসুফ (আঃ) দেশের ভান্ডারের দায়িত্ব চান এবং নিজেকে জ্ঞানী রক্ষক বলে পরিচয় দেন। এরপর কুরআন কথোপকথন থেকে একটু সরে এসে আসল কর্তার নাম বলে দেয়: আমিই তাকে প্রতিষ্ঠিত করলাম।"
          },
          {
            "en": "What does thus point back to? As-Sa'di answers: by these causes and preliminaries already mentioned. Al-Qurtubi reads it as a likeness: in the same way as the favour We showed him in bringing him close to the king's heart and saving him from prison, We established him, meaning We gave him power over what he wanted. The Muyassar says that just as Allah favoured Yusuf with release from prison, He established him in the land of Egypt. At-Tabari glosses makkanna with watta'na: We smoothed the ground for him.",
            "bn": "‘এভাবেই’ কথাটা পেছনের কোন দিকে ইশারা করে? সা'দী বলেন, আগে যে কারণ আর প্রস্তুতিগুলোর কথা এসেছে, সেগুলোর মধ্য দিয়েই। কুরতুবী এখানে তুলনা দেখেন। রাজার মনের কাছে টেনে আনা আর কারাগার থেকে মুক্তি দেওয়ার মাধ্যমে যে অনুগ্রহ তাঁর উপর করা হয়েছিল, ঠিক তেমনি তাঁকে প্রতিষ্ঠা দেওয়া হলো, অর্থাৎ তিনি যা চাইতেন তার উপর ক্ষমতা দেওয়া হলো। মুয়াসসারের ভাষায়, কারাগার থেকে মুক্তি দিয়ে আল্লাহ যেমন ইউসুফের প্রতি অনুগ্রহ করলেন, তেমনি তাঁকে মিসরের মাটিতে প্রতিষ্ঠিত করলেন। তাবারী মাক্কান্না শব্দের ব্যাখ্যা দেন ওয়াত্তা'না দিয়ে: আমি তাঁর জন্য পথ সমতল করে দিলাম।"
          },
          {
            "en": "At-Tabari, Ibn Kathir, al-Baghawi and the Muyassar all name al-ard here as the land of Egypt. The same words already stood in 12:21, when he entered the 'Aziz's house as a bought servant; here they return as he leaves prison to take charge. Every verb of giving belongs to Allah: We established, We touch with Our mercy, We do not let the reward be lost. Yusuf (AS) has one verb of his own in the verse, to settle where he wills, and even that freedom is described as something given. The verse is less about a man rising than about a Lord raising him.",
            "bn": "তাবারী, ইবন কাসীর, বাগাভী ও মুয়াসসার, সবাই এখানে আরদ বলতে মিসর দেশকেই বুঝিয়েছেন। একই শব্দ আগেও এসেছিল ১২:২১ আয়াতে, যখন তিনি কেনা খাদেম হয়ে আযীযের ঘরে ঢুকেছিলেন। এখানে শব্দগুলো ফিরে আসে, যখন তিনি কারাগার থেকে বেরিয়ে দায়িত্ব নিচ্ছেন। দেওয়ার প্রতিটি ক্রিয়া আল্লাহর: আমি প্রতিষ্ঠা দিলাম, আমি রহমত পৌঁছে দিই, আমি প্রতিদান নষ্ট হতে দিই না। ইউসুফ (আঃ)-এর নিজের ক্রিয়া এখানে একটিই, যেখানে ইচ্ছা সেখানে বসবাস করা। সেই স্বাধীনতাটুকুও দেওয়া জিনিস হিসেবেই এসেছে। এ আয়াতের কথা তাই কোনো মানুষের উপরে ওঠা নিয়ে যতটা, তার চেয়ে বেশি এক রবের তাঁকে উপরে তোলা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Free to Choose His Dwelling",
          "bn": "থাকার জায়গা বাছার স্বাধীনতা"
        },
        "p": [
          {
            "en": "Yatabawwa'u minha haythu yasha': he settles in it wherever he wills. At-Tabari explains it as taking a dwelling in the land of Egypt wherever he wished, after confinement and hardship. Ibn Kathir reports this from Ibn Jarir in nearly the same words, adding captivity to the list. As-Suddi and 'Abd al-Rahman ibn Zayd ibn Aslam, as Ibn Kathir cites them, read the phrase more widely: he disposes of things in it however he wills. Al-Baghawi joins both meanings.",
            "bn": "ইয়াতাবাওয়াউ মিনহা হাইসু ইয়াশা: সেখানে যেখানে ইচ্ছা তিনি বসবাস করেন। তাবারীর ব্যাখ্যায়, বন্দিত্ব আর কষ্টের দিনগুলোর পর মিসরের যেখানে খুশি তিনি নিজের ঠিকানা বানিয়ে নিতেন। ইবন কাসীর প্রায় একই ভাষায় কথাটা ইবন জারীরের বরাতে আনেন, আর তালিকায় বন্দিদশাও যোগ করেন। সুদ্দী এবং আবদুর রহমান ইবন যায়দ ইবন আসলাম, ইবন কাসীরের উদ্ধৃতি অনুযায়ী, অর্থটা আরও প্রশস্ত করে নেন: সেখানে তিনি যেভাবে চাইতেন সেভাবেই কাজ চালাতেন। বাগাভী দুই অর্থই একসঙ্গে নেন।"
          },
          {
            "en": "At-Tabari carries Ibn Zayd's fuller words: We gave him authority over whatever there was in it of that world, to do there as he wished, and it was entrusted to him. Ibn Zayd adds that had he wished to put Pharaoh under his hand and set himself above him, he would have done it. As-Sa'di describes the settled state as a comfortable life, wide blessing and broad standing. Al-Baghawi also records a reading: Ibn Kathir the reciter read nasha', where We will, to match makkanna, while the others read yasha', where he wills, to match yatabawwa'u.",
            "bn": "তাবারী ইবন যায়দের পুরো কথাটা আনেন। তাঁর ভাষায়, দুনিয়ার যা কিছু সেখানে ছিল তার উপর আমি তাঁকে ক্ষমতা দিলাম, যাতে সেখানে তিনি যা চান তা করতে পারেন, সবকিছু তাঁর হাতে সঁপে দেওয়া হলো। ইবন যায়দ আরও বলেন, তিনি চাইলে ফিরআউনকে নিজের হাতের নিচে রেখে নিজে তার উপরে বসতে পারতেন। সা'দীর চোখে এ প্রতিষ্ঠার চেহারা হলো সচ্ছল জীবন, প্রশস্ত নিয়ামত আর বিস্তৃত মর্যাদা। বাগাভী একটি কিরাআতের কথাও লিখেছেন। কারী ইবন কাসীর পড়েছেন নাশা, অর্থাৎ যেখানে আমি চাই, যাতে মাক্কান্নার সঙ্গে মেলে। অন্যরা পড়েছেন ইয়াশা, অর্থাৎ যেখানে তিনি চান, যাতে ইয়াতাবাওয়াউর সঙ্গে মেলে।"
          },
          {
            "en": "Set the phrase beside the earlier stations of his story. He was lowered into a well he did not choose, sold for a price he did not set, raised in a house that had bought him, and held in a prison he had not earned. At-Tabari names the same stations when he reaches the mercy clause: after servitude and captivity, and after being cast into the well. A man whose every address had been decided by others is now told that he may settle wherever he wills.",
            "bn": "কাহিনির আগের ধাপগুলোর পাশে কথাটা রেখে দেখুন। তাঁকে নামানো হয়েছিল এমন কূপে, যা তিনি বেছে নেননি। বিক্রি করা হয়েছিল এমন দামে, যা তিনি ঠিক করেননি। বড় হয়েছেন এমন ঘরে, যে ঘর তাঁকে কিনে এনেছিল। আর আটকে ছিলেন এমন কারাগারে, যা তাঁর প্রাপ্য ছিল না। রহমতের অংশে এসে তাবারীও এই ধাপগুলোর নাম করেন: দাসত্ব আর বন্দিত্বের পর, কূপে নিক্ষিপ্ত হওয়ার পর। যার প্রতিটি ঠিকানা এতদিন অন্যেরা ঠিক করে দিয়েছে, তাঁকেই এখন বলা হচ্ছে, যেখানে ইচ্ছা সেখানে থাকুন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Post in the Reports",
          "bn": "বর্ণনায় তাঁর পদ"
        },
        "p": [
          {
            "en": "The Qur'an says only that Allah established him in the land; it names no post. The commentators fill this in with reports, and at-Tabari introduces his with care. Through Ibn Ishaq: when Yusuf asked to be set over the storehouses, the king said, I have done it, and gave him, as they mention, the office of Itfir, removing Itfir from it. Through as-Suddi: the king put him in charge of Egypt, and he oversaw its selling, its trade and all its affairs.",
            "bn": "কুরআন শুধু বলে, আল্লাহ তাঁকে দেশে প্রতিষ্ঠিত করলেন। কোনো পদের নাম বলে না। তাফসীরকারেরা এই ফাঁকটা ভরেন বর্ণনা দিয়ে, আর তাবারী নিজের বর্ণনাগুলো আনেন সাবধানে। ইবন ইসহাকের সূত্রে: ইউসুফ (আঃ) যখন ভান্ডারের দায়িত্ব চাইলেন, রাজা বলল, দিলাম। তারপর, লোকে যেমন বলে থাকে, ইতফীরের পদ তাঁকে দিল এবং ইতফীরকে সেখান থেকে সরিয়ে দিল। সুদ্দীর সূত্রে: রাজা তাঁকে মিসরের দায়িত্বে বসাল, আর বেচাকেনা, ব্যবসা ও দেশের সব কাজ তিনিই দেখতেন।"
          },
          {
            "en": "Ibn Kathir's abridged English tafsir names the king ar-Rayyan ibn al-Walid and says Yusuf was appointed in place of the 'Aziz who had bought him. Ma'arif al-Qur'an, citing al-Qurtubi, al-Mazhari and others, says that after a trial year he was given charge of virtually the whole state. Al-Qurtubi carries from Ibn 'Abbas that he was given rule after a year and a half. These are reports about the post, not words of the verse, and they do not agree on the timing.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীরে রাজার নাম রাইয়ান ইবনুল ওয়ালীদ। সেখানে বলা হয়েছে, যে আযীয তাঁকে কিনেছিল, তার জায়গায় ইউসুফ (আঃ)-কে নিয়োগ দেওয়া হয়। মাআরিফুল কুরআন কুরতুবী, মাযহারী ও অন্যদের বরাতে লেখে, এক বছরের পরীক্ষামূলক সময়ের পর কার্যত গোটা রাষ্ট্রের ভার তাঁকে দেওয়া হয়। কুরতুবী ইবন আব্বাস (রাঃ)-এর বরাতে আনেন, দেড় বছর পর তাঁকে শাসনক্ষমতা দেওয়া হয়। এগুলো পদ নিয়ে বর্ণনা, আয়াতের শব্দ নয়। সময়ের হিসাবেও এগুলো এক কথা বলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Reports About Her",
          "bn": "তাঁকে নিয়ে দুই বর্ণনা"
        },
        "p": [
          {
            "en": "The same narration of Ibn Ishaq goes further, and at-Tabari keeps its hedges: it was mentioned to me, and Allah knows best, that Itfir died in those nights and that the king married Yusuf to Itfir's wife, Ra'il; and, they claim, she bore him two sons. Al-Qurtubi gives the same account on this verse. On the verse before, he carries from Wahb ibn Munabbih that the marriage came later, between the brothers' two visits, her husband having died while Yusuf was still in prison and her wealth gone.",
            "bn": "ইবন ইসহাকের একই বর্ণনা আরও এগোয়, আর তাবারী এর সতর্কতার শব্দগুলো রেখে দেন: আমাকে বলা হয়েছে, আল্লাহই ভালো জানেন, সেই রাতগুলোতে ইতফীর মারা যায়, আর রাজা ইতফীরের স্ত্রী রাঈলকে ইউসুফ (আঃ)-এর সঙ্গে বিয়ে দেয়। লোকেরা দাবি করে, তাঁর ঘরে দুই পুত্রের জন্ম হয়। কুরতুবী এ আয়াতে একই বিবরণ দেন। আগের আয়াতে তিনি ওয়াহব ইবন মুনাব্বিহের বরাতে আনেন যে বিয়েটা হয়েছিল পরে, ভাইদের দুবার আসার মাঝখানে, যখন ইউসুফ (আঃ)-এর কারাবাসের সময়েই তার স্বামী মারা গেছে আর সম্পদও শেষ হয়ে গেছে।"
          },
          {
            "en": "Al-Qurtubi also records, through al-Mawardi, the view of those who held that she was Zulaykha: Yusuf did not marry her. Seeing him in his procession, she wept and said, praise be to Allah who made kings slaves through disobedience and made slaves kings through obedience; he took her into his household, and she remained in his care until she died. Al-Qurtubi notes that this contradicts Wahb, and closes: Allah knows best. The verse settles neither account. Whatever her story, it was hers, and it licenses nothing against anyone living.",
            "bn": "কুরতুবী মাওয়ারদীর মাধ্যমে আরেকটি মতও লিখে রাখেন। যাঁরা বলেন মহিলাটি ছিলেন যুলাইখা, তাঁদের মতে ইউসুফ (আঃ) তাঁকে বিয়ে করেননি। শোভাযাত্রায় তাঁকে দেখে মহিলা কেঁদে বলেছিলেন, সব প্রশংসা আল্লাহর, যিনি নাফরমানির কারণে রাজাদের দাস বানান আর আনুগত্যের কারণে দাসদের রাজা বানান। তিনি তাঁকে নিজের পরিবারের আশ্রয়ে নিলেন, আর মৃত্যু পর্যন্ত তিনি সেখানেই ছিলেন। কুরতুবী মনে করিয়ে দেন, এ কথা ওয়াহবের বর্ণনার বিপরীত, তারপর বলেন: আল্লাহই ভালো জানেন। আয়াত এ দুইয়ের কোনোটির ফয়সালা দেয় না। তাঁর কাহিনি যা-ই হোক, তা তাঁরই কাহিনি, জীবিত কারও বিরুদ্ধে এখান থেকে কিছুই টানা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Storehouses",
          "bn": "ভান্ডারের দায়িত্ব চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Behind the establishing lies a request, and the commentators on 12:55 ask whether it was fitting. Ibn Kathir says Yusuf (AS) praised himself, which is allowed when a man's worth is unknown and there is need. He asked for the work because he knew he could do it, and for the benefit it held for the people: to manage the granaries through the years of drought he had foretold. As-Sa'di is direct: this was not eagerness for office on Yusuf's part, but a wish for the common good, since he knew in himself a competence and trustworthiness they did not yet know.",
            "bn": "এই প্রতিষ্ঠার পেছনে আছে একটি অনুরোধ। ১২:৫৫ আয়াতের তাফসীরে মুফাসসিরেরা প্রশ্ন তোলেন, অনুরোধটা কি সংগত ছিল? ইবন কাসীর বলেন, ইউসুফ (আঃ) নিজের প্রশংসা করেছিলেন, আর কারও যোগ্যতা যখন অজানা থাকে এবং প্রয়োজন দেখা দেয়, তখন তা জায়েয। তিনি কাজটা চেয়েছিলেন, কারণ জানতেন তিনি তা পারবেন, আর মানুষের উপকারও এতে ছিল। যে দুর্ভিক্ষের বছরগুলোর খবর তিনি আগেই দিয়েছিলেন, সেগুলোর জন্য শস্যভান্ডার সামলানোই ছিল লক্ষ্য। সা'দী সোজাসুজি বলেন, এটা পদের লোভ ছিল না। এটা ছিল সবার কল্যাণের আকাঙ্ক্ষা, কারণ নিজের মধ্যে তিনি এমন যোগ্যতা ও আমানতদারি চিনতেন, যা তারা তখনো জানত না।"
          },
          {
            "en": "The difficulty is a hadith. Al-Bukhari records: Narrated Abu Musa: Two men from my tribe and I entered upon the Prophet. One of the two men said to the Prophet, \"O Allah's Messenger! Appoint me as a governor,\" and so did the second. The Prophet ﷺ said, \"We do not assign the authority of ruling to those who ask for it, nor to those who are keen to have it.\" It stands in Sahih al-Bukhari, number 7149. Al-Qurtubi cites this narration in Muslim's wording, together with the Prophet's instruction to 'Abd al-Rahman ibn Samura not to ask for leadership.",
            "bn": "জটিলতা তৈরি করে একটি হাদীস। বুখারী বর্ণনা করেন, আবূ মূসা (রাঃ) বলেন: আমি আর আমার গোত্রের দুজন লোক নবী ﷺ-এর কাছে গেলাম। দুজনের একজন বলল, হে আল্লাহর রাসূল, আমাদেরকে শাসনকর্তা বানিয়ে দিন। অন্যজনও একই কথা বলল। তিনি বললেন, ‘যে এটা চায় আর যে এর জন্য লালায়িত, আমরা তাকে এই দায়িত্ব দিই না।’ হাদীসটি সহীহ বুখারীতে আছে, নম্বর ৭১৪৯। কুরতুবী এই বর্ণনাটি মুসলিমের ভাষায় উদ্ধৃত করেছেন। সঙ্গে এনেছেন আবদুর রহমান ইবন সামুরা (রাঃ)-কে দেওয়া নবী ﷺ-এর নির্দেশ: নেতৃত্ব চেয়ে নিয়ো না।"
          },
          {
            "en": "Al-Qurtubi answers in four ways. Yusuf (AS) asked because he knew that no one else could take his place in justice, reform and bringing the poor their rights. He asked on the strength of guarding and knowledge, not lineage or beauty. He spoke before people who did not know him, wanting to make himself known. And he saw the task as an obligation fixed on him, there being no one else there; this last, al-Qurtubi says, is the most apparent. Where someone else is fit for the task, he adds, the better course is not to ask.",
            "bn": "কুরতুবী চারটি জবাব দেন। এক, ইউসুফ (আঃ) চেয়েছিলেন কারণ জানতেন, ইনসাফ, সংস্কার আর গরিবের হক তার কাছে পৌঁছে দেওয়ার কাজে তাঁর জায়গা নেওয়ার মতো আর কেউ নেই। দুই, তিনি দাবি করেছিলেন রক্ষণাবেক্ষণ আর জ্ঞানের জোরে, বংশ বা সৌন্দর্যের জোরে নয়। তিন, তিনি কথা বলছিলেন এমন লোকদের সামনে, যারা তাঁকে চিনত না, তাই নিজের পরিচয় জানাতে চেয়েছিলেন। চার, সেখানে আর কেউ না থাকায় কাজটাকে তিনি নিজের উপর নির্দিষ্ট ফরয মনে করেছিলেন। কুরতুবীর মতে শেষ কারণটিই সবচেয়ে স্পষ্ট। তিনি যোগ করেন, অন্য কোনো যোগ্য লোক থাকলে না চাওয়াই উত্তম।"
          },
          {
            "en": "Ma'arif al-Qur'an draws the same line: asking is permissible when no one else could manage the office well, an honest self-assessment says one can, and the motive is not love of recognition, power or wealth. Both al-Qurtubi and Ma'arif carry the reasoning into their own times. Reported here, it explains a prophet's request; it is not a ruling on any office today. Nor, on the commentators' own reading, was the request a reach for gain.",
            "bn": "মাআরিফুল কুরআনও একই সীমারেখা টানে। চাওয়া জায়েয তখনই, যখন সেই পদ ভালোভাবে সামলানোর মতো আর কেউ নেই, নিজের সৎ মূল্যায়ন বলে যে তিনি পারবেন, আর উদ্দেশ্য খ্যাতি, ক্ষমতা বা সম্পদের লোভ নয়। কুরতুবী আর মাআরিফ দুজনেই এই যুক্তি নিজেদের যুগ পর্যন্ত টেনে নিয়েছেন। এখানে তা উদ্ধৃত হলো একজন নবীর অনুরোধ বোঝানোর জন্য। আজকের কোনো পদের ব্যাপারে এটা কোনো ফতোয়া নয়। তাফসীরকারদের নিজেদের ব্যাখ্যাতেও অনুরোধটি লাভের দিকে হাত বাড়ানো ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy That Lands Where He Wills",
          "bn": "রহমত পৌঁছায় যাকে তিনি চান"
        },
        "p": [
          {
            "en": "Nusibu bi-rahmatina man nasha': We touch with Our mercy whom We will. Al-Qurtubi glosses it as Our beneficence, adding that rahma here means blessing and kindness; al-Baghawi says, with Our favour. At-Tabari gives the clause its example: whomever We will of Our creation, just as We touched Yusuf with it and established him in the land after servitude. As-Sa'di adds a caution. This mercy, which Allah decreed for Yusuf (AS), is not confined to the blessings of this world.",
            "bn": "নুসীবু বিরাহমাতিনা মান নাশা: যাকে চাই, আমার রহমত তার কাছে পৌঁছে দিই। কুরতুবী এর অর্থ করেন, আমার অনুগ্রহ দিয়ে। তিনি বলেন, এখানে রহমত মানে নিয়ামত আর দয়া। বাগাভীর ভাষায়, আমার নিয়ামত দিয়ে। তাবারী এর একটি দৃষ্টান্তও দেখান: আমার সৃষ্টির মধ্যে যাকে চাই, যেমন ইউসুফের কাছে রহমত পৌঁছে দিয়েছি আর দাসত্বের পর তাঁকে দেশে প্রতিষ্ঠা দিয়েছি। সা'দী একটি সতর্কতা যোগ করেন। আল্লাহ ইউসুফ (আঃ)-এর জন্য যে রহমত নির্ধারণ করেছিলেন, তা শুধু দুনিয়ার নিয়ামতে সীমাবদ্ধ নয়।"
          },
          {
            "en": "The commentators also record whom the mercy reached through him. At-Tabari carries from Mujahid that the king who was with Yusuf accepted Islam. Al-Baghawi reports, from Mujahid and others, that Yusuf kept inviting the king and treating him gently until the king and many of the people accepted Islam. Al-Qurtubi says that once Egypt's affairs were handed to him, he was gentle with the people, called them to faith until they believed and established justice among them.",
            "bn": "তাঁর মাধ্যমে রহমত আর কাদের কাছে পৌঁছেছিল, তাফসীরকারেরা তাও লিখে রাখেন। তাবারী মুজাহিদের বরাতে আনেন, ইউসুফ (আঃ)-এর সঙ্গে যে রাজা ছিল, সে ইসলাম গ্রহণ করেছিল। বাগাভী মুজাহিদ ও অন্যদের বরাতে বলেন, ইউসুফ (আঃ) রাজাকে কোমলভাবে দাওয়াত দিয়ে যেতে থাকেন, শেষে রাজা আর বহু মানুষ মুসলমান হয়। কুরতুবী বলেন, মিসরের কাজকর্ম তাঁর হাতে আসার পর তিনি মানুষের সঙ্গে নরম ব্যবহার করতেন। তাদের ঈমানের দিকে ডাকতেন, শেষে তারা ঈমান আনে। তিনি তাদের মাঝে ইনসাফ কায়েম করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Patient Are the Muhsinin",
          "bn": "সবরকারীরাই মুহসিন"
        },
        "p": [
          {
            "en": "Wa la nudi'u ajra l-muhsinin: and We do not let the reward of those who do good be lost. At-Tabari defines the muhsin as whoever did well and obeyed his Lord, doing what He commanded and stopping at what He forbade, just as Allah did not let the work of Yusuf be lost. Ibn 'Abbas and Wahb, cited by al-Baghawi and al-Qurtubi, say the word here means the patient. Al-Qurtubi lists that patience: in the well, in bondage, in prison, and in holding back from what was forbidden.",
            "bn": "ওয়া লা নুদীউ আজরাল মুহসিনীন: আর আমি সৎকর্মশীলদের প্রতিদান নষ্ট হতে দিই না। তাবারীর সংজ্ঞায় মুহসিন সেই ব্যক্তি, যে ভালো কাজ করেছে, রবের আনুগত্য করেছে, তাঁর আদেশ পালন করেছে আর তাঁর নিষেধ থেকে থেমে গেছে। ঠিক যেমন আল্লাহ ইউসুফ (আঃ)-এর আমল নষ্ট হতে দেননি। বাগাভী ও কুরতুবী ইবন আব্বাস (রাঃ) ও ওয়াহবের বরাতে বলেন, এখানে মুহসিন মানে সবরকারী। কুরতুবী সেই সবরের তালিকাও দেন: কূপে, দাসত্বে, কারাগারে, আর হারাম থেকে নিজেকে বিরত রাখায়।"
          },
          {
            "en": "Ibn Kathir reads the clause the same way: We did not let Yusuf's patience be lost, under his brothers' harm and in the prison, so Allah followed it with safety, help and support. Al-Qurtubi then reports from al-Mawardi two views of what Yusuf was given here: a reward for what he was tried with, or a favour granted over and above, with his reward left intact for the Hereafter. The Muyassar widens the promise to anyone who does any good deed.",
            "bn": "ইবন কাসীরও একইভাবে পড়েন: ভাইদের দেওয়া কষ্টে আর কারাগারে ইউসুফ (আঃ) যে সবর করেছিলেন, আমি তা নষ্ট হতে দিইনি। তাই আল্লাহ এর পরে দিলেন নিরাপত্তা, সাহায্য আর সমর্থন। কুরতুবী এরপর মাওয়ারদীর বরাতে দুটি মত আনেন, এখানে ইউসুফ (আঃ)-কে যা দেওয়া হলো তা নিয়ে। একটি মত, এটা তাঁর পরীক্ষার প্রতিদান। অন্যটি, এটা বাড়তি অনুগ্রহ, আর তাঁর প্রতিদান আখিরাতের জন্য অক্ষত রাখা আছে। মুয়াসসার প্রতিশ্রুতিটা সবার জন্য খুলে দেয়: যে কেউ যেকোনো নেক আমল করে, তার জন্যই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Better Reward Still Ahead",
          "bn": "সামনে আরও উত্তম প্রতিদান"
        },
        "p": [
          {
            "en": "The next verse completes the thought: and the reward of the Hereafter is better for those who believed and were mindful of Allah (12:57). Ibn Kathir reads the two verses together. What Allah has prepared for Yusuf (AS) in the Hereafter is greater and more honoured than the authority He gave him in this life, and he sets beside it Sulayman (AS), given a gift in 38:39 and promised nearness and a good return in 38:40. As-Sa'di says it briefly: Yusuf has good in this world and good in the Hereafter.",
            "bn": "পরের আয়াত কথাটা পূর্ণ করে: আর যারা ঈমান এনেছে ও তাকওয়া অবলম্বন করেছে, তাদের জন্য আখিরাতের প্রতিদান আরও উত্তম (১২:৫৭)। ইবন কাসীর দুই আয়াত একসঙ্গে পড়েন। দুনিয়ায় আল্লাহ ইউসুফ (আঃ)-কে যে ক্ষমতা দিয়েছিলেন, আখিরাতে তাঁর জন্য যা প্রস্তুত, তা তার চেয়ে অনেক বড় ও সম্মানের। পাশে তিনি রাখেন সুলাইমান (আঃ)-এর কথা, যাঁকে ৩৮:৩৯ আয়াতে দান দেওয়া হয়েছে আর ৩৮:৪০ আয়াতে নৈকট্য ও উত্তম পরিণামের প্রতিশ্রুতি। সা'দী অল্প কথায় বলেন: ইউসুফের জন্য দুনিয়াতেও কল্যাণ, আখিরাতেও কল্যাণ।"
          },
          {
            "en": "Then the story moves on, and in 12:58 the brothers come in to him and do not recognise him. The establishing is named as mercy, never as a prize Yusuf (AS) pursued, and the reward that counts most is placed after it, in the Hereafter. The patience of the well and the cell was not wasted while it waited. Neither is the good a believer keeps doing in a hard place today, whether or not this world ever answers it.",
            "bn": "তারপর কাহিনি এগিয়ে যায়। ১২:৫৮ আয়াতে ভাইয়েরা তাঁর কাছে আসে, কিন্তু তাঁকে চিনতে পারে না। প্রতিষ্ঠাকে বলা হয়েছে রহমত, এমন কোনো পুরস্কার নয় যার পেছনে ইউসুফ (আঃ) ছুটেছিলেন। আর সবচেয়ে বড় প্রতিদান রাখা হয়েছে তার পরে, আখিরাতে। কূপ আর কারাগারের সবর অপেক্ষার দিনগুলোতে বৃথা যায়নি। কঠিন জায়গায় থেকেও আজ একজন মুমিন যে ভালো কাজ করে যায়, তাও বৃথা যায় না, দুনিয়া তার জবাব দিক বা না দিক।"
          }
        ]
      }
    ]
  },
  "12:62": {
    "sections": [
      {
        "h": {
          "en": "The Price Slipped Back",
          "bn": "দামটা ফিরল বস্তায়"
        },
        "p": [
          {
            "en": "The scene is still Yusuf's (AS) court. In 12:58 his brothers came for grain; he knew them and they did not know him. In 12:59 and 12:60 he furnished their supplies, asked them to bring a brother of theirs from their father, and told them there would be no measure for them without him. In 12:61 they promised to try to win their father over. Now, as they prepare to leave, he gives one more instruction, and this time it is spoken to his own men rather than to them.",
            "bn": "দৃশ্যটা তখনো ইউসুফ (আঃ)-এর দরবারে। ১২:৫৮ আয়াতে ভাইয়েরা শস্য নিতে এসেছিল। তিনি তাদের চিনলেন, তারা তাঁকে চিনল না। ১২:৫৯ ও ১২:৬০ আয়াতে তিনি তাদের রসদ বুঝিয়ে দিলেন, বাবার দিকের এক ভাইকে নিয়ে আসতে বললেন, আর জানিয়ে দিলেন, তাকে ছাড়া এলে তাদের জন্য আর কোনো বরাদ্দ নেই। ১২:৬১ আয়াতে তারা কথা দিল, বাবাকে রাজি করানোর চেষ্টা করবে। এবার তারা ফেরার পথ ধরছে। ঠিক তখন তিনি আরও একটা নির্দেশ দেন, তবে এবার ভাইদের নয়, নিজের লোকদের।"
          },
          {
            "en": "Wa-qala li-fityanihi: and he said to his young men. At-Tabari glosses fityan as his ghilman, his attendants, and cites Qatada for the same. As-Sa'di calls them those who were in his service. Al-Qurtubi notes that these men were the ones arranging the brothers' provisions, which is why they were able to put the payment into the packs at all, and he allows that they may have been free men who worked as his helpers rather than slaves. Ibn Kathir and the Muyassar both use at-Tabari's word, ghilman.",
            "bn": "ওয়া কালা লি-ফিতয়ানিহী: আর তিনি তাঁর যুবক কর্মচারীদের বললেন। তাবারী ফিতয়ানের অর্থ করেন গিলমান, অর্থাৎ তাঁর সেবক, আর কাতাদা থেকেও একই কথা আনেন। সা'দী বলেন, যারা তাঁর খেদমতে ছিল। কুরতুবী খেয়াল করিয়ে দেন, ভাইদের রসদ গুছিয়ে দিচ্ছিল এরাই, তাই বস্তায় দাম রেখে দেওয়া তাদের পক্ষেই সম্ভব ছিল। তাঁর মতে এরা গোলাম না হয়ে স্বাধীন মানুষও হতে পারে, যারা তাঁর সহকারী হিসেবে কাজ করত। ইবন কাসীর ও মুয়াসসার দুজনেই তাবারীর শব্দটা, গিলমান, ব্যবহার করেন।"
          },
          {
            "en": "The instruction itself: ij'alu bida'atahum fi rihalihim, put their goods in their saddlebags. Ibn Kathir adds the phrase min haythu la yash'urun, in a way they would not perceive, and the Muyassar says sirran, quietly. Ibn Ishaq, in at-Tabari's report, says the goods with which they had paid for the food were placed in their bags while they did not know. As-Suddi, also in at-Tabari, places the order in the middle of the work: Yusuf (AS) said it to his men while he was measuring out their grain.",
            "bn": "নির্দেশটা হলো: ইজআলূ বিদাআতাহুম ফী রিহালিহিম, তাদের পণ্য তাদের বস্তায় রেখে দাও। ইবন কাসীর জুড়ে দেন মিন হাইসু লা ইয়াশউরূন, এমনভাবে যে তারা টের পাবে না। মুয়াসসার বলে সিররান, চুপিসারে। তাবারীর বর্ণনায় ইবন ইসহাক বলেন, যে পণ্যের বদলে তারা খাদ্য পেয়েছিল, তাদের অজান্তে সেটাই তাদের মালপত্রে রেখে দেওয়া হলো। তাবারীতেই সুদ্দীর বর্ণনা নির্দেশটাকে কাজের মাঝখানে বসায়: শস্য মেপে দিতে দিতেই ইউসুফ (আঃ) লোকদের এ কথা বলেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Fityan and Fitya",
          "bn": "ফিতয়ান না ফিতয়া"
        },
        "p": [
          {
            "en": "The word his young men was read in two ways. Al-Baghawi reports that Hamza, al-Kisa'i and Hafs read li-fityanihi, with an alif and a nun, which is the text printed with this verse, and that the rest read li-fityatihi, with a ta. Al-Qurtubi's list differs at one point. He gives li-fityatihi to the people of Madinah, Abu 'Amr and 'Asim, as the choice of Abu Hatim and an-Nahhas, and li-fityanihi to the rest of the Kufans, as the choice of Abu 'Ubayd, who said it stands so in the codex of 'Abd Allah.",
            "bn": "'তাঁর যুবকেরা' শব্দটি দুইভাবে পড়া হয়েছে। বাগাভী জানান, হামযা, কিসাঈ ও হাফস পড়েছেন লি-ফিতয়ানিহী, আলিফ ও নূনসহ। এই আয়াতের সঙ্গে ছাপা পাঠ এটাই। বাকিরা পড়েছেন লি-ফিতয়াতিহী, তা দিয়ে। কুরতুবীর তালিকা একটা জায়গায় আলাদা। তিনি লি-ফিতয়াতিহী দেন মদীনাবাসী, আবূ আমর ও আসিমের নামে, আর বলেন এটি আবূ হাতিম ও নাহহাসের পছন্দ। লি-ফিতয়ানিহী দেন বাকি কূফীদের নামে, আবূ উবাইদের পছন্দ হিসেবে। আবূ উবাইদ বলেছেন, আবদুল্লাহর মুসহাফে শব্দটা এভাবেই আছে।"
          },
          {
            "en": "So the two lists place 'Asim differently: al-Qurtubi counts him with fitya, while al-Baghawi names Hafs, who transmits from him, with fityan. Both reports are given here as each mufassir gives them. On meaning, the two agree. Al-Qurtubi quotes ath-Tha'labi that they are two good usages, like sibyan and sibya for boys, and al-Baghawi says nearly the same. An-Nahhas, in al-Qurtubi, preferred fitya because Arabs use it for a smaller number, and a few hands fit the task of slipping goods into packs.",
            "bn": "তাহলে আসিমের জায়গা দুই তালিকায় দুই রকম। কুরতুবী তাঁকে ফিতয়ার দলে রাখেন, আর বাগাভী তাঁর কাছ থেকে বর্ণনাকারী হাফসের নাম দেন ফিতয়ানের দলে। দুটি বর্ণনাই এখানে রাখা হলো, যেভাবে প্রত্যেক মুফাসসির দিয়েছেন। অর্থ নিয়ে অবশ্য দুজন একমত। কুরতুবী সা'লাবী থেকে আনেন, দুটোই ভালো প্রয়োগ, যেমন বালকদের বেলায় সিবয়ান ও সিবয়া। বাগাভীও প্রায় একই শব্দে তা বলেন। কুরতুবীর বর্ণনায় নাহহাস ফিতয়া পছন্দ করেছিলেন। কারণ আরবরা শব্দটা কম সংখ্যার জন্য ব্যবহার করে, আর বস্তায় চুপিচুপি পণ্য রাখার কাজে অল্প কয়েকজন হাতই বেশি মানানসই।"
          }
        ]
      },
      {
        "h": {
          "en": "Silver, Leather or Meal",
          "bn": "রুপা, চামড়া, না ছাতু"
        },
        "p": [
          {
            "en": "Bida'a is what they had brought to trade. Ibn Kathir defines it as the goods they came with to buy provisions in exchange, and at-Tabari and as-Sa'di both call it the price of the food. What that price consisted of is reported, not settled. Qatada, in at-Tabari, says awraqahum, their silver coin. Al-Qurtubi gives dirhams and dinars under it is said, and Ibn Abbas's view that it was sandals, leather and a traveller's goods. Al-Baghawi says dirhams, cites ad-Dahhak from Ibn Abbas for sandals and leather, mentions a report of eight sacks of doum-palm meal, and judges the first view more correct.",
            "bn": "বিদাআ হলো তারা বেচাকেনার জন্য যা নিয়ে এসেছিল। ইবন কাসীরের সংজ্ঞায়, খাদ্যের বদলে দেওয়ার জন্য যে পণ্য তারা সঙ্গে এনেছিল। তাবারী ও সা'দী দুজনেই একে বলেন খাদ্যের দাম। সেই দামটা ঠিক কী ছিল, তা নিয়ে কেবল বর্ণনা আছে, মীমাংসা নেই। তাবারীর বর্ণনায় কাতাদা বলেন আওরাকাহুম, তাদের রুপার মুদ্রা। কুরতুবী 'বলা হয়' দিয়ে আনেন দিরহাম ও দীনার, আর ইবন আব্বাসের মত আনেন: জুতা, চামড়া আর মুসাফিরের মালপত্র। বাগাভী বলেন দিরহাম। ইবন আব্বাস থেকে দাহহাকের সূত্রে জুতা ও চামড়ার কথা আনেন, আটটি বস্তা খেজুরজাতীয় ফলের ছাতুর এক বর্ণনাও উল্লেখ করেন। তারপর রায় দেন, প্রথম মতটাই বেশি সঠিক।"
          },
          {
            "en": "Rihal is the plural of rahl. At-Tabari stops on the grammar: rihal is the plural for many, while arhul serves for three to ten. Al-Qurtubi quotes Ibn al-Anbari that rahl is said of a container and also of a house, and al-Baghawi glosses the word as aw'iyatihim, their containers. The picture is plain enough. The payment went back inside the very loads of grain the brothers would unpack at home, among the food it had bought. What they found when they opened them belongs to 12:65.",
            "bn": "রিহাল শব্দটি রাহলের বহুবচন। তাবারী এখানে ব্যাকরণে একটু থামেন: রিহাল বেশি সংখ্যার বহুবচন, আর তিনটি থেকে দশটি পর্যন্ত বোঝাতে আসে আরহুল। কুরতুবী ইবনুল আনবারী থেকে আনেন, রাহল বলা হয় পাত্রকেও, ঘরকেও। বাগাভী শব্দটার অর্থ করেন আওইয়াতিহিম, তাদের পাত্রগুলো। ছবিটা তাই সহজ। দামটা ফিরে গেল শস্যের সেই বোঝাগুলোর ভেতরেই, যেগুলো ভাইয়েরা বাড়ি গিয়ে খুলবে, যে খাদ্য সে দাম দিয়ে কেনা তার মাঝখানে। খোলার পর তারা কী পেল, সেটা ১২:৬৫ আয়াতের আলোচনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Several Reasons, None Settled",
          "bn": "কারণ কয়েকটি, মীমাংসা নেই"
        },
        "p": [
          {
            "en": "Why did he do it? The verse names the aim, la'allahum yarji'un, perhaps they will return, but not the reason behind it, and the commentators set out several without fixing on one. Ibn Kathir lists three, each with qila, it was said. Yusuf (AS) feared they had no other goods to come back with for provisions. Or tadhammama, he felt it beneath him to take payment for food from his father and brothers. Or he wanted them, on finding it, to come back out of scruple and caution, because he knew that trait in them. He closes with wallahu a'lam, and Allah knows best.",
            "bn": "তিনি এমন করলেন কেন? আয়াতটি উদ্দেশ্য বলে দেয়, লাআল্লাহুম ইয়ারজিঊন, হয়তো তারা ফিরে আসবে। কিন্তু এর পেছনের কারণ বলে না। তাফসীরকারেরা কয়েকটি কারণ সাজান, কোনো একটিকে চূড়ান্ত করেন না। ইবন কাসীর তিনটি কারণ আনেন, প্রতিটির আগে কীলা, বলা হয়েছে। এক, ইউসুফ (আঃ) ভয় পেয়েছিলেন, রসদ নিতে আবার আসার মতো আর কোনো পণ্য তাদের কাছে নেই। দুই, তাযাম্মামা: বাবা ও ভাইদের কাছ থেকে খাদ্যের দাম নেওয়া তিনি নিজের মর্যাদার পরিপন্থী মনে করেছিলেন। তিন, তিনি চেয়েছিলেন, দামটা পেয়ে তারা সংকোচ আর সাবধানতা থেকেই ফিরে আসুক, কারণ তাদের এই স্বভাব তাঁর জানা ছিল। শেষে তিনি বলেন, ওয়াল্লাহু আলাম, আল্লাহই ভালো জানেন।"
          },
          {
            "en": "At-Tabari poses the same question and answers that the act allows several aspects. First, he feared his father had no dirhams left, since it was a year of drought and famine, so that taking them would hurt him. Second, he wanted his father and brothers to have more room to live, given their need, and returned it without their knowing why, out of generosity and favour. Third, he wanted them to keep their promise to return. Finding in their packs a price now owned by another, they would not feel free to keep it, and that would draw them back all the more.",
            "bn": "তাবারীও একই প্রশ্ন তোলেন, তারপর বলেন, কাজটির কয়েকটি দিক হতে পারে। প্রথমত, তিনি ভয় পেয়েছিলেন যে বাবার কাছে আর দিরহাম নেই, কারণ সেটা ছিল খরা আর দুর্ভিক্ষের বছর। তাই এ দাম নিলে বাবার ক্ষতি হবে। দ্বিতীয়ত, প্রয়োজনের সময়ে বাবা ও ভাইদের হাতে একটু বেশি সচ্ছলতা থাকুক, এই ছিল তাঁর ইচ্ছা। তাই দয়া আর অনুগ্রহ থেকে তিনি তা ফিরিয়ে দিলেন, কেন দিলেন তা তাদের জানতে না দিয়ে। তৃতীয়ত, তিনি চেয়েছিলেন ফিরে আসার ওয়াদা তারা যেন না ভাঙে। বস্তায় এমন দাম পেলে, যার মালিক এখন অন্য কেউ, তা নিজেদের কাছে রেখে দিতে তাদের মন সায় দেবে না। এতে ফিরে আসার টান আরও বাড়বে।"
          },
          {
            "en": "Ma'arif al-Qur'an relays Ibn Kathir's three possibilities and fills in the second: unable to bear taking the price from them, Yusuf (AS) paid the amount himself into the royal treasury. That detail is Ma'arif's own, since Ibn Kathir's Arabic as fetched does not carry it. Ma'arif then sums up briefly. All these arrangements were made so that the brothers would keep coming to him, and so that he could meet his younger full brother. The English abridgement of Ibn Kathir keeps only the first reason, that he feared they had no more merchandise to bring.",
            "bn": "মাআরিফুল কুরআন ইবন কাসীরের তিনটি সম্ভাবনাই আনে, আর দ্বিতীয়টিতে একটা কথা যোগ করে: তাদের কাছ থেকে দাম নেওয়া সহ্য করতে না পেরে ইউসুফ (আঃ) নিজেই টাকাটা রাজকোষে জমা দিয়েছিলেন। এ তথ্য মাআরিফের নিজস্ব। ইবন কাসীরের যে আরবি পাঠ আনা হয়েছে, তাতে এটি নেই। এরপর মাআরিফ সংক্ষেপে সারকথা বলে। এত আয়োজন ছিল একটাই উদ্দেশ্যে: ভাইয়েরা যেন আসতে থাকে, আর তিনি যেন ছোট আপন ভাইয়ের দেখা পান। ইবন কাসীরের ইংরেজি সংক্ষেপে কেবল প্রথম কারণটাই আছে: তিনি ভয় পেয়েছিলেন, বিনিময়ে আনার মতো আর কোনো পণ্য তাদের কাছে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Scruple or Eager Return",
          "bn": "সংকোচ, না দয়ার টান"
        },
        "p": [
          {
            "en": "Al-Baghawi says outright that they differed over the reason, and gives four. It is said he wanted to show his generosity, pledging kindness in advance so that they would return. It is said he thought it lu'm, meanness, to take the price of food from his father and brothers in their need. Al-Kalbi said he feared his father had no silver to come back with. And it is said he knew their religion would make them return the goods to undo a mistake, since they would not think keeping them lawful. Al-Qurtubi's list adds one more: to help them come back and buy again.",
            "bn": "বাগাভী সরাসরি বলেন, কারণ নিয়ে তাঁরা মতভেদ করেছেন, আর চারটি মত আনেন। বলা হয়, তিনি নিজের উদারতা দেখাতে চেয়েছিলেন, আগেভাগেই সদাচরণের একটা নিশ্চয়তা দিয়ে রাখতে চেয়েছিলেন, যাতে তারা ফিরে আসতে আরও আগ্রহী হয়। বলা হয়, অভাবের সময়ে বাবা ও ভাইদের কাছ থেকে খাদ্যের দাম নেওয়াকে তিনি লু'ম, অর্থাৎ হীনতা মনে করেছিলেন। কালবী বলেছেন, তাঁর ভয় ছিল, আবার আসার মতো রুপা বাবার কাছে নেই। আরও বলা হয়, তিনি জানতেন তাদের দ্বীনদারি তাদের দিয়ে পণ্যটা ফেরত দেওয়াবে, ভুল শুধরে নেওয়ার জন্য, কারণ তা রেখে দেওয়া তারা হালাল মনে করবে না। কুরতুবীর তালিকায় আরেকটি কারণ আছে: আবার এসে খাদ্য কেনায় যেন এ দাম তাদের কাজে লাগে।"
          },
          {
            "en": "As-Sa'di is the one who weighs. He mentions the scruple reading with as was said, then gives what he takes to be the apparent sense: Yusuf (AS) wanted to make them eager for his kindness, having measured their grain in full and then returned their goods in a way they would not sense, with an eye to what was coming. His reason is a sentence about people: kindness obliges a person to complete loyalty towards the one who was kind. The Muyassar is close to him. They would recognise it, value our generosity to them, and come back hoping for more.",
            "bn": "এখানে মাপজোখ করে রায় দেন সা'দী। সংকোচের মতটা তিনি আনেন 'যেমন বলা হয়েছে' বলে। তারপর যেটাকে আয়াতের বাহ্যিক অর্থ মনে করেন তা বলেন: ইউসুফ (আঃ) চেয়েছিলেন তাঁর সদাচরণের প্রতি তাদের আগ্রহ জাগাতে। প্রথমে পুরো মাপে শস্য দিলেন, তারপর তাদের পণ্য এমনভাবে ফিরিয়ে দিলেন যে তারা টেরই পেল না, সামনে যা আসছে সেদিকে চোখ রেখে। তাঁর যুক্তি মানুষের স্বভাব নিয়ে একটি বাক্য: ইহসান মানুষকে ইহসানকারীর প্রতি পূর্ণ বিশ্বস্ততায় বেঁধে ফেলে। মুয়াসসারও তাঁর কাছাকাছি। তারা দামটা চিনবে, আমাদের সম্মান দেখানোর কদর করবে, আর আরও পাওয়ার আশায় ফিরে আসবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Perhaps in One Verse",
          "bn": "এক আয়াতে দুই 'হয়তো'"
        },
        "p": [
          {
            "en": "The verse says la'alla twice: la'allahum ya'rifunaha, perhaps they will recognise it, and la'allahum yarji'un, perhaps they will return. Why only perhaps they will recognise it? Al-Qurtubi gives a reason: because it might not come through the road safely. The goods could be lost on the way, and then there would be nothing to find. Al-Baghawi reads the recognition another way, as recognising our regard for them. On his reading, what they would know on unpacking was not only their payment but the hand that had put it back.",
            "bn": "আয়াতে লাআল্লা এসেছে দুবার: লাআল্লাহুম ইয়ারিফূনাহা, হয়তো তারা তা চিনবে, আর লাআল্লাহুম ইয়ারজিঊন, হয়তো তারা ফিরে আসবে। চেনার বেলাতেও কেবল 'হয়তো' কেন? কুরতুবী এর কারণ বলেন: পথে জিনিসটা নিরাপদে না-ও পৌঁছাতে পারে। পণ্য পথেই হারিয়ে যেতে পারে, তখন খুঁজে পাওয়ার মতো কিছুই থাকবে না। বাগাভী চেনাটাকে অন্যভাবে পড়েন: আমরা তাদের যে সম্মান দিয়েছি, সেটা চেনা। তাঁর পাঠে বস্তা খুলে তারা কেবল নিজেদের দাম চিনবে না, চিনবে সেই হাতটাকেও, যে তা ফিরিয়ে রেখেছিল।"
          },
          {
            "en": "The second perhaps is completed in two ways. As-Suddi, in at-Tabari, ends it with ilayya, perhaps they will return to me. Ibn Kathir ends it with biha, perhaps they will return with it, which sits with the scruple reading: they would come back bringing the price. The clause between the two, idha inqalabu ila ahlihim, when they have turned back to their families, al-Baghawi glosses as insarafu, when they have gone off. The verse places the finding at home, among their own people, and not in his court.",
            "bn": "দ্বিতীয় 'হয়তো'টি দুইভাবে পূর্ণ করা হয়েছে। তাবারীর বর্ণনায় সুদ্দী শেষে যোগ করেন ইলাইয়া: হয়তো তারা আমার কাছে ফিরে আসবে। ইবন কাসীর যোগ করেন বিহা: হয়তো তারা এটা নিয়ে ফিরে আসবে। এ পাঠ সংকোচের মতের সঙ্গে মেলে, অর্থাৎ তারা দামটা সঙ্গে নিয়ে ফিরবে। মাঝের অংশ ইযানকালাবূ ইলা আহলিহিম, যখন তারা পরিবারের কাছে ফিরে যাবে। বাগাভী এর অর্থ করেন ইনসারাফূ, যখন তারা চলে যাবে। আয়াতটি খুঁজে পাওয়ার মুহূর্তটা রাখে বাড়িতে, নিজেদের লোকজনের মাঝে, তাঁর দরবারে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gift Kept Out of Sight",
          "bn": "আড়ালে রাখা উপহার"
        },
        "p": [
          {
            "en": "None of the commentators fetched here reads this as a trick. Each reason they give is a form of care: fear for a father's means in a famine, reluctance to take money from one's own family, generosity, trust in the brothers' honesty, or the hope of drawing them back by kindness. At-Tabari and al-Baghawi both use the word takarruman, out of generosity. In their reading, what was hidden was a gift, and hiding it kept it from feeling like a favour waiting to be repaid. The verse narrates a prophet's action within one story, and the plan it serves unfolds in the verses after it.",
            "bn": "এখানে যেসব তাফসীর আনা হয়েছে, তার কোনোটিই কাজটাকে ছলনা হিসেবে পড়ে না। তাঁদের দেওয়া প্রতিটি কারণই যত্নের একেকটা রূপ: দুর্ভিক্ষে বাবার সামর্থ্য নিয়ে দুশ্চিন্তা, নিজের পরিবারের কাছ থেকে টাকা নিতে অনীহা, উদারতা, ভাইদের সততার উপর আস্থা, কিংবা দয়া দিয়ে তাদের ফিরিয়ে আনার আশা। তাবারী ও বাগাভী দুজনেই শব্দ ব্যবহার করেন তাকাররুমান, অর্থাৎ উদারতা থেকে। তাঁদের পাঠে যা লুকানো হয়েছিল তা উপহার। লুকিয়ে রাখায় সেটা আর শোধ করার অপেক্ষায় থাকা অনুগ্রহের মতো মনে হয়নি। আয়াতটি একটি কাহিনির ভেতরে একজন নবীর কাজের বর্ণনা দেয়, আর যে পরিকল্পনার অংশ এটি, তা খুলতে থাকে পরের আয়াতগুলোতে।"
          },
          {
            "en": "Why not simply tell them who he was? Ma'arif al-Qur'an asks this directly, after dwelling on how long Ya'qub (AS) grieved. It answers that Allah, in His wisdom, had held Yusuf (AS) back from making himself known, and says it found this stated in al-Qurtubi: that Allah, through revelation, stopped him from sending news of himself home. Ma'arif suggests the wisdom was to complete Ya'qub's (AS) trial, and adds that only Allah knows the workings of His wisdom. Al-Qurtubi's comment on this verse, as fetched, does not itself carry the point.",
            "bn": "তিনি নিজের পরিচয় সরাসরি বলে দিলেন না কেন? ইয়াকুব (আঃ) কত দীর্ঘ সময় শোক বয়ে বেড়িয়েছেন, তা নিয়ে কথা বলার পর মাআরিফুল কুরআন সোজাসুজি এ প্রশ্ন তোলে। জবাবে বলে, আল্লাহ তাঁর হিকমতে ইউসুফ (আঃ)-কে আত্মপ্রকাশ থেকে বিরত রেখেছিলেন। মাআরিফ জানায়, কুরতুবীতে কথাটা স্পষ্ট পাওয়া যায়: আল্লাহ ওহীর মাধ্যমে তাঁকে বাড়িতে নিজের খবর পাঠাতে নিষেধ করেছিলেন। মাআরিফের ধারণা, হিকমতটা ছিল ইয়াকুব (আঃ)-এর পরীক্ষা পূর্ণ করা। সঙ্গে এ কথাও বলে, আল্লাহর হিকমতের রহস্য কেবল তিনিই জানেন। এ আয়াতে কুরতুবীর যে আলোচনা আনা হয়েছে, তাতে অবশ্য কথাটা নেই।"
          },
          {
            "en": "A word on the brothers, since the story has told of their wrong against Yusuf (AS). Here two commentators credit them with something good: Ibn Kathir says Yusuf (AS) knew their scruple, and al-Baghawi says their religion would not let them keep what was not theirs. The verse describes one family in one account, and it licenses nothing against any living person or community. The same men, in the commentators' reading, carry both a past wrong and a known honesty. No tafsir fetched for this verse attaches a hadith to it.",
            "bn": "ভাইদের নিয়েও একটা কথা, কারণ কাহিনিতে ইউসুফ (আঃ)-এর প্রতি তাদের অন্যায়ের কথা এসেছে। এখানে দুজন তাফসীরকার তাদের একটা ভালো গুণের কথা বলেন। ইবন কাসীর বলেন, তাদের সংকোচের স্বভাব ইউসুফ (আঃ)-এর জানা ছিল। বাগাভী বলেন, তাদের দ্বীনদারি পরের জিনিস রেখে দিতে দেবে না। আয়াতটি একটি কাহিনিতে একটি পরিবারের কথা বলে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু বলার অনুমতি এটি দেয় না। তাফসীরকারদের পাঠে একই মানুষগুলোর মধ্যে অতীতের অন্যায় আর পরিচিত সততা পাশাপাশি থাকে। এ আয়াতের জন্য আনা কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Kindness That Asks Nothing Back",
          "bn": "প্রতিদান না চাওয়া দয়া"
        },
        "p": [
          {
            "en": "As-Sa'di's sentence is where a reader can stop: kindness binds a person to the one who was kind. A gift given quietly, with no claim attached, holds more firmly than a demand. In a general narration that is not attached to this verse, Sahih al-Bukhari (2585) records from 'A'isha (RA): Allah's Messenger ﷺ used to accept gifts and used to give something in return. Kindness received is meant to be answered, and the brothers' unease at holding what was not theirs is that same instinct at work.",
            "bn": "সা'দীর বাক্যটাতে পাঠক থেমে ভাবতে পারেন: ইহসান মানুষকে ইহসানকারীর সঙ্গে বেঁধে দেয়। দাবি ছাড়া চুপচাপ দেওয়া উপহার জোর করে চাওয়ার চেয়ে অনেক শক্ত করে ধরে রাখে। এ আয়াতের সঙ্গে যুক্ত নয়, এমন এক সাধারণ বর্ণনায় সহীহ বুখারী (২৫৮৫) আয়েশা (রাঃ) থেকে উল্লেখ করে: আল্লাহর রাসূল ﷺ হাদিয়া গ্রহণ করতেন এবং তার বিনিময়ে কিছু দিতেন। দয়া পেলে তার জবাব দিতে হয়। পরের জিনিস হাতে রাখতে ভাইদের যে অস্বস্তি, তা সেই একই স্বভাবের প্রকাশ।"
          },
          {
            "en": "For most readers the setting is smaller than famine and treasuries: a relative who cannot pay what they owe, a shopkeeper who hands back too much change, a friend who helped and asked for nothing. The verse suggests two habits. When I can afford it, I can give in a way that spares the other person's dignity, without making them watch me give. And when something that is not mine ends up in my bag, I can be the kind of person who does not rest until it goes back.",
            "bn": "বেশিরভাগ পাঠকের জীবনে প্রেক্ষাপটটা দুর্ভিক্ষ আর রাজকোষের চেয়ে অনেক ছোট। এমন আত্মীয়, যে পাওনা শোধ করতে পারছে না। এমন দোকানি, যে ভুল করে বেশি টাকা ফেরত দিয়েছে। এমন বন্ধু, যে উপকার করে কিছুই চায়নি। আয়াতটি দুটি অভ্যাসের দিকে ইশারা করে। সামর্থ্য থাকলে এমনভাবে দেওয়া, যাতে মানুষটার সম্মান বাঁচে, আমার দেওয়াটা তাকে চেয়ে চেয়ে দেখতে না হয়। আর পরের কোনো জিনিস আমার থলেতে চলে এলে এমন মানুষ হওয়া, যে তা ফিরিয়ে না দেওয়া পর্যন্ত স্বস্তি পায় না।"
          }
        ]
      }
    ]
  },
  "12:64": {
    "sections": [
      {
        "h": {
          "en": "Sent Home for the Boy",
          "bn": "ছোট ভাইয়ের জন্যই ফেরত"
        },
        "p": [
          {
            "en": "The verse is Ya'qub's (AS) reply, and what it answers is set up in 12:58 to 12:63. The brothers came to Egypt for grain and entered upon Yusuf (AS); he recognised them and they did not recognise him. When he had furnished their supplies he asked for a brother of theirs from their father, and warned that without him there would be no measure for them and they should not come near him. They answered that they would try to win the boy from his father, and that they would do it.",
            "bn": "আয়াতটি ইয়াকুব (আঃ)-এর জবাব। কিসের জবাব, তা সাজানো আছে ১২:৫৮ থেকে ১২:৬৩ আয়াতে। ভাইয়েরা শস্যের জন্য মিসরে এসে ইউসুফ (আঃ)-এর সামনে হাজির হলো। তিনি তাদের চিনলেন, তারা তাঁকে চিনল না। রসদ বুঝিয়ে দেওয়ার পর তিনি বললেন, তোমাদের বাপের দিকের ভাইটিকে নিয়ে এসো। সাথে সতর্ক করলেন: তাকে না আনলে আমার কাছে তোমাদের জন্য কোনো বরাদ্দ নেই, আমার কাছেও আর এসো না। তারা বলল, ছেলেটিকে নিয়ে আসতে বাবাকে রাজি করানোর চেষ্টা করবে, আর তা তারা করবেই।"
          },
          {
            "en": "Yusuf (AS) also had their payment slipped back into their saddlebags, in the hope, as 12:62 says, that they would recognise it and return. Back home they said in 12:63: O our father, measure has been denied to us, so send our brother with us and we will be given measure, and indeed we will be his guardians. Ibn Kathir's English abridgement fills in the sense as after this time, unless you send our brother Binyamin with us, and adds their reassurance: do not fear for his safety, for he will be returned to you.",
            "bn": "ইউসুফ (আঃ) তাদের দেওয়া পণ্যমূল্যও গোপনে তাদের মালপত্রের ভেতর রেখে দিতে বললেন। ১২:৬২ আয়াত বলে, উদ্দেশ্য ছিল তারা যেন তা চিনতে পারে আর আবার ফিরে আসে। বাড়ি ফিরে তারা ১২:৬৩ আয়াতে বলল: হে আমাদের আব্বা, আমাদের জন্য বরাদ্দ বন্ধ করে দেওয়া হয়েছে। আমাদের ভাইকে আমাদের সাথে পাঠান, তাহলে বরাদ্দ পাব, আর আমরা অবশ্যই তার হেফাজত করব। ইবন কাসীরের ইংরেজি সংক্ষেপ কথাটার অর্থ খুলে বলে: এরপর আর পাব না, যদি না আপনি আমাদের ভাই বিনইয়ামীনকে সাথে পাঠান। তাদের আশ্বাসটাও সেখানে আছে: তার নিরাপত্তা নিয়ে ভয় পাবেন না, তাকে আপনার কাছে ফিরিয়ে আনা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Words Heard Once Before",
          "bn": "এ কথা আগেও শোনা"
        },
        "p": [
          {
            "en": "Ibn Kathir's English abridgement then points to the echo. Wa-inna lahu la-hafizun, and indeed we will be his guardians, is what they said to Ya'qub (AS) about Yusuf (AS) in 12:12: send him with us tomorrow that he may eat well and play, and indeed we will be his guardians. This is why, he goes on, Ya'qub said what he says in our verse. His Arabic text on 12:64 opens with the same link: wa-li-hadha qala lahum, and for this reason he said to them.",
            "bn": "এরপর ইবন কাসীরের ইংরেজি সংক্ষেপ প্রতিধ্বনিটা ধরিয়ে দেয়। ওয়া ইন্না লাহূ লাহাফিযূন, আর আমরা অবশ্যই তার হেফাজত করব: ঠিক এ কথাই তারা ১২:১২ আয়াতে ইউসুফ (আঃ)-এর ব্যাপারে ইয়াকুব (আঃ)-কে বলেছিল। সেখানে ছিল: কাল তাকে আমাদের সাথে পাঠান, সে খাবে আর খেলবে, আর আমরা অবশ্যই তার হেফাজত করব। ইবন কাসীর বলেন, এ কারণেই ইয়াকুব আমাদের আয়াতের কথাটা বললেন। ১২:৬৪ আয়াতে তাঁর আরবি তাফসীরও শুরু হয় একই সূত্র ধরে: ওয়া লিহাযা কালা লাহুম, আর এ জন্যই তিনি তাদের বললেন।"
          },
          {
            "en": "A second thread runs through the Arabic itself, though none of the commentaries fetched for 12:64 draws it. In 12:11 the brothers had complained, ma laka la ta'manna 'ala Yusuf: why do you not entrust us with Joseph? The verb there, and amanukum and amintukum here, are built on the same letters, alif, mim and nun, and the app's English renders both as entrust. The first request came wrapped in a complaint about trust; the father answers the second with a question about trust.",
            "bn": "আরেকটা সুতো আরবি বাক্যের ভেতরেই আছে, যদিও ১২:৬৪ আয়াতের যেসব তাফসীর আনা হয়েছে, তার কোনোটি এটা দেখায় না। ১২:১১ আয়াতে ভাইয়েরা অনুযোগ করেছিল: মা লাকা লা তা'মান্না আলা ইউসুফ, ইউসুফের ব্যাপারে আপনি আমাদের বিশ্বাস করেন না কেন? সেখানকার ক্রিয়া আর এখানকার আমানুকুম ও আমিনতুকুম একই অক্ষরে গড়া: আলিফ, মীম, নূন। অ্যাপের ইংরেজি অনুবাদেও দুটোর অর্থ দেওয়া হয়েছে entrust। প্রথম অনুরোধটা এসেছিল বিশ্বাস নিয়ে অনুযোগের মোড়কে। দ্বিতীয়টির জবাবে বাবা বিশ্বাস নিয়েই প্রশ্ন তোলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "As I Trusted You Before",
          "bn": "যেভাবে আগে বিশ্বাস করেছিলাম"
        },
        "p": [
          {
            "en": "Hal amanukum 'alayhi illa kama amintukum 'ala akhihi min qabl: shall I entrust you with him except as I entrusted you with his brother before? At-Tabari's paraphrase stays close to the words. Ya'qub (AS) asks whether he should trust them with their brother from their father, the boy they are asking him to send, in any way other than he trusted them with his brother Yusuf (AS); min qabl, he says, means before him. His phrase for Binyamin repeats the demand of 12:59, a brother of yours from your father.",
            "bn": "হাল আমানুকুম আলাইহি ইল্লা কামা আমিনতুকুম আলা আখীহি মিন কাবল: আমি কি তার ব্যাপারে তোমাদের তেমনই বিশ্বাস করব, যেমন আগে তার ভাইয়ের ব্যাপারে করেছিলাম? তাবারী শব্দের কাছাকাছি থেকেই ব্যাখ্যা করেন। ইয়াকুব (আঃ) জানতে চাইছেন, তোমাদের বাপের দিকের যে ভাইকে পাঠাতে বলছ, তার ব্যাপারে কি তোমাদের অন্যভাবে বিশ্বাস করব, তার ভাই ইউসুফ (আঃ)-এর ব্যাপারে যেভাবে করেছিলাম তার বাইরে? তাবারী বলেন, মিন কাবল মানে তার আগে। বিনইয়ামীনের পরিচয়ে তিনি যে কথা ব্যবহার করেন, তা ১২:৫৯ আয়াতের দাবিরই পুনরাবৃত্তি: তোমাদের বাপের দিকের এক ভাই।"
          },
          {
            "en": "The others turn the question into what it implies. Al-Qurtubi: you were negligent over Yusuf, so how can I trust you with his brother? Al-Baghawi: how can I trust you with him when you did to Yusuf what you did? The Muyassar names Binyamin and adds the broken undertaking: I trusted you with his brother before, you bound yourselves to guard him, and you did not keep to it, so I do not rely on your undertaking or your keeping.",
            "bn": "বাকিরা প্রশ্নটাকে তার নিহিত অর্থে খুলে বলেন। কুরতুবী বলেন: ইউসুফের ব্যাপারে তোমরা অবহেলা করেছ, তাহলে তার ভাইয়ের ব্যাপারে তোমাদের বিশ্বাস করি কীভাবে? বাগাভী বলেন: ইউসুফের সাথে তোমরা যা করার করেছ, তারপর তার ব্যাপারে তোমাদের বিশ্বাস করি কীভাবে? মুয়াসসার বিনইয়ামীনের নাম নেয় আর ভাঙা অঙ্গীকারের কথা যোগ করে: আগে তার ভাইয়ের ব্যাপারে তোমাদের বিশ্বাস করেছিলাম। তোমরা তার হেফাজতের দায় নিয়েছিলে, কিন্তু সে দায় রক্ষা করোনি। তাই তোমাদের অঙ্গীকার আর তোমাদের হেফাজতের উপর আমি ভরসা করি না।"
          },
          {
            "en": "As-Sa'di sharpens the comparison. A commitment had already come from them, he writes, greater than this, to guard Yusuf (AS), and even so they did not keep what they had sealed with such emphasis. Ibn Kathir reads the line more as a forecast than as a statement about trust: will you do anything with him but what you did with his brother before, taking him out of my sight and coming between me and him? Both readings arrive at the same place: the old pledge has already been tested.",
            "bn": "সা'দী তুলনাটা আরও ধারালো করেন। তিনি লেখেন, ইউসুফ (আঃ)-এর হেফাজতের ব্যাপারে এর চেয়েও বড় অঙ্গীকার তাদের কাছ থেকে আগে এসেছিল। এত জোর দিয়ে যা পাকা করেছিল, তবু তা তারা রক্ষা করেনি। ইবন কাসীর বাক্যটিকে বিশ্বাসের কথা যতটা পড়েন, তার চেয়ে বেশি পড়েন সামনের আশঙ্কা হিসেবে: আগে তার ভাইয়ের সাথে যা করেছিলে, তার সাথেও কি তা-ই করবে না? তাকে আমার চোখের আড়ালে নিয়ে যাবে, আমার আর তার মাঝে বাধা হয়ে দাঁড়াবে? দুই পাঠ গিয়ে মেলে এক জায়গায়: পুরোনো অঙ্গীকারের পরীক্ষা আগেই হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Named, Not Retold",
          "bn": "উল্লেখ আছে, বিবরণ নেই"
        },
        "p": [
          {
            "en": "Notice how little the father says. The verse names no deed at all; it says only, as I entrusted you with his brother before. The commentators supply the content in their own measured terms: al-Qurtubi's negligence, al-Baghawi's what you did, Ibn Kathir's taking him away and coming between father and son, as-Sa'di's and the Muyassar's pledge not kept. None of them, on this verse, retells the earlier events. The sentence is about a trust and its record, and it stays there.",
            "bn": "লক্ষ করুন, বাবা কত কম বলেন। আয়াতে কোনো কাজের নামই নেই। আছে শুধু এটুকু: যেমন আগে তার ভাইয়ের ব্যাপারে তোমাদের বিশ্বাস করেছিলাম। তাফসীরকারেরা নিজেদের সংযত ভাষায় বিষয়টা ভরে দেন। কুরতুবী বলেন অবহেলা, বাগাভী বলেন যা করার করেছ। ইবন কাসীর বলেন চোখের আড়ালে নিয়ে যাওয়া আর বাবা-ছেলের মাঝে বাধা হয়ে দাঁড়ানো। সা'দী আর মুয়াসসার বলেন অঙ্গীকার রক্ষা না করা। এ আয়াতের আলোচনায় তাঁদের কেউ আগের ঘটনাগুলো আবার বলেন না। কথাটা একটা আমানত আর তার অতীত নিয়ে, সেখানেই থেমে থাকে।"
          },
          {
            "en": "That restraint guides the reader too. The verse reports what a father said to his sons about one past event in one family's story, and its commentators describe that event only as the Qur'an does. It licenses nothing against any living person or community: not against brothers or stepfamilies, and not against anyone who once failed a trust and has since changed. Whether these brothers were later counted among the prophets is a question the commentaries fetched for this verse do not take up, so this article leaves it there.",
            "bn": "পাঠকের জন্যও এই সংযম একটা দিশা। আয়াতটি জানায়, এক পরিবারের কাহিনিতে অতীতের একটি ঘটনা নিয়ে একজন বাবা তাঁর ছেলেদের কী বলেছিলেন। তাফসীরকারেরাও ঘটনাটা ততটুকুই বলেন, যতটুকু কুরআন বলে। আয়াতটি কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না। ভাইদের বিরুদ্ধে নয়, সৎ ভাইবোনের সংসারের বিরুদ্ধে নয়, এমন কারও বিরুদ্ধেও নয়, যে একবার আমানত রাখতে পারেনি কিন্তু পরে বদলে গেছে। এই ভাইয়েরা পরে নবীদের মধ্যে গণ্য হয়েছিলেন কি না, সে প্রশ্ন এ আয়াতের আনা তাফসীরগুলো তোলে না। তাই এ লেখাও তা নিয়ে কিছু বলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Hifzan or Hafizan",
          "bn": "হিফযান, না হাফিযান"
        },
        "p": [
          {
            "en": "Fa-Allahu khayrun hafizan: but Allah is the best guardian. Here the readers differ, and at-Tabari sets out the difference. The general body of the readers of Madinah, with some Kufans and Basrans, read khayrun hifzan, without the alif, meaning Allah is the best of you in keeping. The general body of the Kufan readers, with some of the people of Makkah, read hafizan, with the alif, taking keeper as a specification of khayr, as in the phrase huwa khayrun rajulan, he is the best as a man.",
            "bn": "ফাল্লাহু খাইরুন হাফিযা: আল্লাহই উত্তম রক্ষক। এখানে কারীদের পাঠে ভিন্নতা আছে, আর তাবারী তা গুছিয়ে বলেন। মদীনার কারীদের অধিকাংশ, সাথে কিছু কূফী ও বসরী কারী, পড়েছেন খাইরুন হিফযা, আলিফ ছাড়া। অর্থ: হেফাজতের দিক থেকে আল্লাহ তোমাদের সবার চেয়ে উত্তম। কূফার কারীদের অধিকাংশ আর মক্কার কিছু কারী পড়েছেন হাফিযা, আলিফসহ। এখানে রক্ষক শব্দটি খাইর-এর ব্যাখ্যা, যেমন আরবিতে বলা হয় হুয়া খাইরুন রাজুলা, মানুষ হিসেবে সে উত্তম।"
          },
          {
            "en": "Al-Baghawi names readers: Hamza, al-Kisa'i and Hafs read hafizan, with the alif, as a specification; the rest read hifzan, a verbal noun, best of you in keeping, that is, His keeping is better than yours. Al-Qurtubi assigns hifzan to the people of Madinah, Abu 'Amr and 'Asim, and hafizan to the remaining Kufans, as a circumstantial accusative; az-Zajjaj, he adds, takes it as a specification. Each list is reported as written. The text printed above reads hafizan, while Ibn Kathir quotes hifzan and notes that some read hafizan.",
            "bn": "বাগাভী কারীদের নাম বলেন। হামযা, কিসাঈ আর হাফস পড়েছেন হাফিযা, আলিফসহ, ব্যাখ্যা হিসেবে। বাকিরা পড়েছেন হিফযা, ক্রিয়াবাচক বিশেষ্য হিসেবে। অর্থ: হেফাজতে তোমাদের চেয়ে উত্তম, অর্থাৎ তাঁর হেফাজত তোমাদের হেফাজতের চেয়ে ভালো। কুরতুবী হিফযা পাঠটি দেন মদীনাবাসী, আবু আমর ও আসিমকে। হাফিযা দেন বাকি কূফীদের, অবস্থাবাচক হিসেবে। তিনি যোগ করেন, যাজ্জাজ এটাকে ব্যাখ্যা হিসেবে ধরেন। প্রতিটি তালিকা যেমন লেখা আছে, তেমনই দেওয়া হলো। উপরে ছাপা আয়াতে আছে হাফিযা। ইবন কাসীর উদ্ধৃত করেন হিফযা, আর জানান যে কেউ কেউ হাফিযা পড়েছেন।"
          },
          {
            "en": "At-Tabari will not choose between them. Both, he writes, are well-known readings close in meaning, each read by people with knowledge of the Qur'an, so whichever a reciter follows, he is right. His reason is neat: whoever describes Allah as the best of them in keeping has described Him as the best of them as a keeper, and whoever describes Him as the best keeper has described Him as best in keeping. On hafizan he adds that the sense is the best of you as a keeper, with of you left unspoken.",
            "bn": "তাবারী দুটোর মধ্যে কোনোটাকে বেছে নেন না। তিনি লেখেন, দুটোই প্রসিদ্ধ পাঠ, অর্থও কাছাকাছি। কুরআনের জ্ঞান রাখেন এমন লোকেরা দুটোই পড়েছেন, তাই যে কারী যেটাই পড়ুন, ঠিকই পড়েছেন। তাঁর যুক্তিটা পরিষ্কার। যে আল্লাহকে বলল হেফাজতে সবার চেয়ে উত্তম, সে তাঁকে রক্ষক হিসেবেও সবার চেয়ে উত্তম বলল। আর যে তাঁকে বলল সর্বোত্তম রক্ষক, সে তাঁকে হেফাজতেও সর্বোত্তম বলল। হাফিযা পাঠ সম্পর্কে তিনি আরও বলেন, অর্থটা হলো তোমাদের মধ্যে উত্তম রক্ষক, আর 'তোমাদের' কথাটা উহ্য রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Better Than Your Keeping",
          "bn": "তোমাদের হেফাজতের চেয়ে উত্তম"
        },
        "p": [
          {
            "en": "On either reading, the comparison is with the sons. Al-Qurtubi gives the meaning in one line: Allah's keeping of him is better than your keeping of him, and al-Baghawi says the same. The word answers theirs. In 12:63 they promised, wa-inna lahu la-hafizun, we will be his guardians; the father replies from the same root and sets Allah above them in it. The Muyassar spells out the turn: I do not rely on your undertaking and your keeping, but I rely on the keeping of Allah, the best of keepers.",
            "bn": "যে পাঠই ধরা হোক, তুলনাটা ছেলেদের সাথেই। কুরতুবী এক বাক্যে অর্থ বলে দেন: তোমরা তাকে যে হেফাজত করবে, তার চেয়ে আল্লাহর হেফাজত উত্তম। বাগাভীও একই কথা বলেন। বাবার শব্দটা আসলে ছেলেদের শব্দেরই জবাব। ১২:৬৩ আয়াতে তারা কথা দিয়েছিল: ওয়া ইন্না লাহূ লাহাফিযূন, আমরা অবশ্যই তার হেফাজত করব। বাবা একই ধাতু থেকে জবাব দেন, আর সেই গুণে আল্লাহকে তাদের উপরে রাখেন। মুয়াসসার মোড়টা খুলে বলে: তোমাদের অঙ্গীকার আর হেফাজতে আমি ভরসা করি না। আমি ভরসা করি আল্লাহর হেফাজতে, যিনি রক্ষকদের মধ্যে উত্তম।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the clause against the family's history. Ya'qub (AS), it says, had already seen the outcome of their guardianship earlier, and now he was placing his trust in Allah alone as his guardian. As-Sa'di, closing his gloss on the first half of the verse, arrives at the same point: so I do not rely on your commitment and your keeping; I rely only on Allah, exalted is He. Neither has the father call his sons worthless. The claim is about where the boy's safety finally rests.",
            "bn": "মাআরিফুল কুরআন বাক্যটি পড়ে পরিবারের অতীতের আলোয়। সেখানে বলা হয়েছে, ছেলেদের হেফাজতের পরিণাম ইয়াকুব (আঃ) আগেই দেখেছিলেন। এবার তিনি রক্ষক হিসেবে একমাত্র আল্লাহর উপরই ভরসা রাখছিলেন। সা'দী আয়াতের প্রথম অংশের ব্যাখ্যা শেষ করেন একই কথায়: তাই তোমাদের অঙ্গীকার আর হেফাজতে আমি ভরসা করি না, আমি ভরসা করি শুধু মহান আল্লাহর উপর। দুজনের কেউই বলেন না যে বাবা ছেলেদের অকেজো বলে দিয়েছেন। কথাটা হলো, ছেলেটির নিরাপত্তা শেষ পর্যন্ত কার হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Most Merciful of the Merciful",
          "bn": "দয়ালুদের মধ্যে শ্রেষ্ঠ দয়ালু"
        },
        "p": [
          {
            "en": "Wa huwa arhamu ar-rahimin: and He is the most merciful of the merciful. The commentators hear in it an old man naming his own need. Ibn Kathir has him say: He is the most merciful of the merciful towards me, and He will have mercy on my old age, my weakness and my grief for my son; I hope from Allah that He returns him to me and gathers my scattered affairs with him. Ma'arif adds that from Him alone he could hope to be looked on in his old age and sorrows, and spared further shocks.",
            "bn": "ওয়া হুয়া আরহামুর রাহিমীন: আর তিনি দয়ালুদের মধ্যে শ্রেষ্ঠ দয়ালু। তাফসীরকারেরা এ কথায় শোনেন এক বৃদ্ধের কণ্ঠ, যিনি নিজের প্রয়োজনের কথা বলছেন। ইবন কাসীর তাঁর মুখে বসান এই কথা: তিনি আমার প্রতি দয়ালুদের মধ্যে শ্রেষ্ঠ দয়ালু। আমার বার্ধক্য, আমার দুর্বলতা, ছেলের জন্য আমার শোক, সবকিছুর উপর তিনি দয়া করবেন। আল্লাহর কাছে আশা করি, তিনি তাকে আমার কাছে ফিরিয়ে দেবেন, তার সাথে আমার ছড়িয়ে পড়া সংসার আবার জুড়ে দেবেন। মাআরিফ যোগ করে, শুধু তাঁর কাছেই তিনি আশা করতে পারতেন যে তাঁর বার্ধক্য আর দুঃখের দিকে তিনি তাকাবেন, নতুন আঘাতে তাঁকে আর নাড়া দিতে দেবেন না।"
          },
          {
            "en": "At-Tabari's gloss runs the same way: Allah is the most merciful of any who show mercy to His creation; He will have mercy on my weakness in my old age and my loneliness at the loss of my son, so He will not let him be lost but will keep him until He returns him to me. Which son that him refers to, at-Tabari does not say. The Muyassar and as-Sa'di make it the boy about to travel: I hope He will have mercy on me, keep him and return him to me. As-Sa'di prefaces this with: He knows my state.",
            "bn": "তাবারীর ব্যাখ্যাও একই ধারায়: সৃষ্টির প্রতি যারা দয়া করে, আল্লাহ তাদের সবার চেয়ে বেশি দয়ালু। বুড়ো বয়সে আমার দুর্বলতা আর ছেলে হারিয়ে আমার একাকিত্বের উপর তিনি দয়া করবেন। তাই তিনি তাকে হারিয়ে যেতে দেবেন না, বরং হেফাজত করবেন, যতক্ষণ না আমার কাছে ফিরিয়ে দেন। এখানে 'তাকে' বলতে কোন ছেলে, তাবারী তা বলেন না। মুয়াসসার আর সা'দী এটাকে ধরেন রওনা হতে যাওয়া ছেলেটির কথা: আশা করি তিনি আমার উপর দয়া করবেন, তাকে হেফাজত করবেন আর আমার কাছে ফিরিয়ে দেবেন। সা'দী এর আগে বলেন: তিনি আমার অবস্থা জানেন।"
          },
          {
            "en": "Al-Qurtubi adds a report he attributes to Ka'b al-Ahbar: when Ya'qub said, but Allah is the best guardian, Allah said, by My might and majesty, I will return both your sons to you, after you relied on Me. Al-Qurtubi gives it as Ka'b's saying, with no chain in this passage; it is not a hadith of the Prophet ﷺ, and it stands here only as Ka'b's report. None of the tafsirs fetched for this verse attaches a hadith to it.",
            "bn": "কুরতুবী আরেকটি বর্ণনা যোগ করেন, যা তিনি কা'ব আল-আহবারের বলে উল্লেখ করেন: ইয়াকুব যখন বললেন, আল্লাহই উত্তম রক্ষক, তখন আল্লাহ বললেন, আমার ইজ্জত ও জালালের কসম, আমার উপর তুমি ভরসা করার পর তোমার দুই ছেলেকেই আমি তোমার কাছে ফিরিয়ে দেব। কুরতুবী এটাকে কা'বের উক্তি হিসেবেই আনেন, এই অংশে কোনো সনদ দেন না। এটি নবী ﷺ-এর হাদিস নয়, এখানে শুধু কা'বের বর্ণনা হিসেবেই থাকছে। এ আয়াতের যেসব তাফসীর আনা হয়েছে, তার কোনোটিই আয়াতটির সাথে কোনো হাদিস যুক্ত করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why He Let Him Go",
          "bn": "তবু কেন পাঠালেন"
        },
        "p": [
          {
            "en": "Is the verse a refusal? The commentators read the opposite. Al-Qurtubi says outright that it is evidence he agreed to send the boy with them. As-Sa'di is more tentative: it is as though, in these words, he had softened towards sending him. Ma'arif al-Qur'an gives the reason for the consent: Ya'qub (AS) did not rely on apparent conditions or on the pledges given by his sons, but agreed to send his youngest son with his brothers solely because he had now placed his trust in Allah.",
            "bn": "আয়াতটি কি প্রত্যাখ্যান? তাফসীরকারেরা উল্টোটাই পড়েন। কুরতুবী সরাসরি বলেন, এ আয়াত প্রমাণ করে যে তিনি ছেলেটিকে তাদের সাথে পাঠাতে রাজি হয়েছিলেন। সা'দী একটু সাবধানে বলেন: মনে হয়, এ কথার মধ্যে তাকে পাঠানোর ব্যাপারে তিনি নরম হয়ে এসেছিলেন। মাআরিফুল কুরআন সম্মতির কারণটাও বলে। ইয়াকুব (আঃ) বাহ্যিক অবস্থা কিংবা ছেলেদের অঙ্গীকারের উপর ভরসা করেননি। সবচেয়ে ছোট ছেলেকে ভাইদের সাথে পাঠাতে তিনি রাজি হয়েছিলেন শুধু এ কারণে যে, এবার তিনি আল্লাহর উপর ভরসা রেখেছিলেন।"
          },
          {
            "en": "The story moves on from here. When the sons open their baggage they find their goods returned to them (12:65), and in 12:66 Ya'qub (AS) asks for a pledge by Allah before he lets the boy go; those verses carry their own discussion. In 12:64 itself the shape is already complete: the doubt is spoken, the old record is named without being retold, and the boy's keeping is placed with Him whom the father calls the best of keepers and the most merciful of the merciful.",
            "bn": "কাহিনি এখান থেকে সামনে এগোয়। মালপত্র খুলে ছেলেরা দেখে, তাদের পণ্যমূল্য তাদের কাছে ফেরত এসেছে (১২:৬৫)। আর ১২:৬৬ আয়াতে ছেলেটিকে ছাড়ার আগে ইয়াকুব (আঃ) আল্লাহর নামে অঙ্গীকার চান। সেসব আয়াতের আলোচনা আলাদা। ১২:৬৪ আয়াতেই ছবিটা পূর্ণ হয়ে যায়। সন্দেহের কথা মুখে বলা হয়। পুরোনো ঘটনার উল্লেখ আসে, বিবরণ আসে না। আর ছেলেটির হেফাজত সঁপে দেওয়া হয় তাঁর হাতে, যাঁকে বাবা বলেন রক্ষকদের মধ্যে উত্তম আর দয়ালুদের মধ্যে শ্রেষ্ঠ দয়ালু।"
          },
          {
            "en": "For a reader, the verse shows a way to speak after being let down that is neither an accusation nor a pretence. Ya'qub (AS) does not act as if the past never happened, and he does not shut the door on the sons in front of him. He says what the record is, and then he says whom he trusts. Anyone who must hand a child, a duty or a hope into hands that once failed can borrow both sentences, and the second carries the weight: Allah is the best keeper.",
            "bn": "পাঠকের জন্য আয়াতটি দেখায়, কেউ কথা রাখেনি এমন অভিজ্ঞতার পর কীভাবে কথা বলা যায়। তাতে অভিযোগও থাকে না, ভানও থাকে না। ইয়াকুব (আঃ) এমন আচরণ করেন না, যেন অতীতে কিছুই ঘটেনি। আবার সামনে দাঁড়ানো ছেলেদের মুখের উপর দরজাও বন্ধ করেন না। আগে কী হয়েছিল, তা বলেন। তারপর বলেন, তিনি কার উপর ভরসা করেন। সন্তান, দায়িত্ব বা কোনো আশা যদি আপনাকে এমন হাতে তুলে দিতে হয়, যে হাত একবার ব্যর্থ হয়েছিল, এই দুটো কথা আপনিও বলতে পারেন। ভার বইবে দ্বিতীয়টি: আল্লাহই উত্তম রক্ষক।"
          }
        ]
      }
    ]
  },
  "12:70": {
    "sections": [
      {
        "h": {
          "en": "Provisions Loaded, a Cup Hidden",
          "bn": "রসদ বোঝাই, পেয়ালা লুকানো"
        },
        "p": [
          {
            "en": "The verse opens where 12:69 left off. The brothers have come in to Yusuf (AS), and he has drawn his full brother to himself and told him: I am your brother, so do not grieve over what they used to do. Now comes fa-lamma jahhazahum bi-jahazihim, so when he had furnished them with their supplies. At-Tabari explains it as Yusuf (AS) loading his brothers' camels with provisions and meeting their need, and cites Qatada: when he had met their need and given them their full measure. Al-Qurtubi defines tajhiz as sending someone off and bringing a matter to completion.",
            "bn": "আয়াতটি শুরু হয় ঠিক যেখানে ১২:৬৯ থেমেছিল। ভাইয়েরা ইউসুফ (আঃ)-এর কাছে এসেছে। তিনি সহোদর ভাইকে নিজের কাছে টেনে নিয়ে বলেছেন: আমিই তোমার ভাই, ওরা যা করত তার জন্য দুঃখ করো না। এবার আসে ফালাম্মা জাহহাযাহুম বিজাহাযিহিম: যখন তিনি তাদের রসদপত্র প্রস্তুত করে দিলেন। তাবারীর ব্যাখ্যায়, ইউসুফ (আঃ) ভাইদের উটে খাদ্যসামগ্রী বোঝাই করে দিলেন আর তাদের প্রয়োজন মিটিয়ে দিলেন। এখানে তিনি কাতাদার কথা আনেন: তাদের প্রয়োজন পূরণ করলেন, মাপ পুরোপুরি বুঝিয়ে দিলেন। কুরতুবীর সংজ্ঞায় তাজহীয মানে কাউকে বিদায় দেওয়া আর কাজটা শেষ করে ফেলা।"
          },
          {
            "en": "As-Sa'di adds that he measured out grain for each of the brothers, this brother among them. Ibn Ishaq, in at-Tabari's report, says he honoured them, gave to them and paid them in full, loaded a camel for each man, and loaded one for his brother in his brother's own name, just as he had for them. Ma'arif al-Qur'an likewise says each brother's grain was loaded on his camel separately and by name. Then the hinge of the verse: ja'ala as-siqayata fi rahli akhihi, he placed the drinking cup in his brother's baggage. At-Tabari glosses rahl as goods, and names the brother as Binyamin, son of the same mother and father.",
            "bn": "সা'দী যোগ করেন, তিনি প্রত্যেক ভাইকে মেপে শস্য দিলেন, আর এই ভাইও তাদের মধ্যে ছিল। তাবারীর বর্ণনায় ইবন ইসহাক বলেন, তিনি তাদের সম্মান করলেন, দিলেন, পুরো মাপে বুঝিয়ে দিলেন। প্রত্যেকের জন্য একটা করে উট বোঝাই করলেন, আর ভাইয়ের জন্যও তার নিজের নামে একটা উট বোঝাই করলেন, যেমন অন্যদের জন্য করেছিলেন। মাআরিফুল কুরআনও বলে, প্রত্যেক ভাইয়ের শস্য আলাদা আলাদা করে, নাম ধরে তার উটে তোলা হয়েছিল। এরপর আয়াতের মোড়: জাআলাস সিকায়াতা ফী রাহলি আখীহি, তিনি পানপাত্রটি ভাইয়ের মালপত্রের ভেতরে রেখে দিলেন। তাবারী রাহল অর্থ করেন মালসামান। আর ভাইয়ের নাম বলেন বিনইয়ামীন, একই মা-বাবার সন্তান।"
          }
        ]
      },
      {
        "h": {
          "en": "One Vessel, Two Names",
          "bn": "এক পাত্রের দুই নাম"
        },
        "p": [
          {
            "en": "Here the vessel is as-siqaya; two verses on it will be called suwa' al-malik. At-Tabari defines the siqaya as a drinking vessel, the one the king drank from and measured grain with. He cites al-Hasan that suwa' and siqaya are the same, the vessel drunk from, and Mujahid that they are one thing, which Yusuf drank from. Al-Baghawi says the same. Al-Qurtubi records, from an-Naqqash on Ibn Abbas, a vessel with two heads and a grip in the middle: the king drank from one end, and food was measured with the other. Ma'arif al-Qur'an notes that its link to the king marks it as something of special worth.",
            "bn": "এখানে পাত্রটির নাম আস-সিকায়া। দুই আয়াত পরে একে বলা হবে সুওয়াউল মালিক, রাজার পাত্র। তাবারীর সংজ্ঞায় সিকায়া পানপাত্র, যা থেকে রাজা পান করতেন আর যা দিয়ে শস্য মাপা হত। তিনি হাসানের কথা আনেন যে সুওয়া আর সিকায়া একই জিনিস, যে পাত্রে পান করা হয়। মুজাহিদও বলেন দুটো একই, ইউসুফ তাতে পান করতেন। বাগাভীরও একই কথা। কুরতুবী নাক্কাশের সূত্রে ইবন আব্বাসের এক বর্ণনা আনেন। তাতে পাত্রটির দুই মাথা, মাঝখানে হাতল। এক মাথা দিয়ে রাজা পান করতেন, অন্য মাথা দিয়ে খাদ্য মাপা হত। মাআরিফুল কুরআন বলে, রাজার সঙ্গে সম্পর্কই বোঝায় যে জিনিসটা ছিল বিশেষ মূল্যের।"
          },
          {
            "en": "What it was made of is reported, not settled. Ibn Kathir says silver in the view of most, and gold according to Ibn Zayd, and adds, from Ibn Abbas, Mujahid, Qatada, ad-Dahhak and Ibn Zayd, that it was drunk from and used to measure for people because food was scarce at the time. Al-Baghawi gives chrysolite from Ibn Abbas, silver from Ibn Ishaq, gold under it is said, and from Ikrima silver set with jewels, made the measure so that nothing else would be used. At-Tabari's report of Ibn Zayd calls it a cup of gold, so they mention. The reward promised for its return is the subject of 12:72.",
            "bn": "পাত্রটি কী দিয়ে তৈরি, সে ব্যাপারে বর্ণনা আছে, মীমাংসা নেই। ইবন কাসীর বলেন, অধিকাংশের মতে রুপার, আর ইবন যায়দের মতে সোনার। ইবন আব্বাস, মুজাহিদ, কাতাদা, দাহহাক ও ইবন যায়দের সূত্রে তিনি যোগ করেন, তাতে পান করা হত, আর সে সময় খাদ্যের অভাব ছিল বলে তা দিয়েই মানুষকে মেপে দেওয়া হত। বাগাভী ইবন আব্বাস থেকে আনেন যবরজদ, এক ধরনের দামি পাথর। ইবন ইসহাক থেকে রুপা, 'বলা হয়' দিয়ে সোনা, আর ইকরিমা থেকে রত্নখচিত রুপার পাত্র, যাকে মাপের পাত্র বানানো হয়েছিল যাতে অন্য কিছু দিয়ে মাপা না হয়। তাবারীর বর্ণনায় ইবন যায়দ বলেন, সোনার পেয়ালা, 'যেমনটা লোকে বলে'। ফেরত দেওয়ার পুরস্কারের কথা আসবে ১২:৭২ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Placed Unseen, Called Out Later",
          "bn": "অলক্ষ্যে রাখা, পরে ঘোষণা"
        },
        "p": [
          {
            "en": "Who put it there? Ibn Kathir says Yusuf (AS) ordered a young man in his service to do it, and the Muyassar says he ordered his workers; both add that it went into Binyamin's goods without anyone perceiving it. Al-Qurtubi allows either: he slipped it in himself where nobody saw, or told a close attendant to. Then thumma adhdhana mu'adhdhinun, a caller called. At-Tabari glosses it as a crier cried out, and records that an announcer announced. Al-Qurtubi reads adhdhana as intensive, as if he called O caravan over and over. The address, he says with Abu Ubayda, means O people of the caravan.",
            "bn": "কাজটা কে করল? ইবন কাসীর বলেন, ইউসুফ (আঃ) তাঁর এক পরিচারককে তা রাখতে আদেশ দেন। মুয়াসসার বলে, তিনি তাঁর কর্মচারীদের আদেশ দেন। দুজনেই যোগ করেন, পাত্রটি বিনইয়ামীনের মালপত্রে রাখা হয় কেউ টের পাওয়ার আগেই। কুরতুবী দুটোই সম্ভব মনে করেন: হয় তিনি নিজেই অলক্ষ্যে রেখে দেন, নয়তো ঘনিষ্ঠ কাউকে রাখতে বলেন। তারপর সুম্মা আয্যানা মুআয্যিনুন, এক ঘোষক ঘোষণা দিল। তাবারী এর অর্থ করেন, এক আহ্বানকারী ডাক দিল। আরেকটা মতও তিনি আনেন: এক জানানেওয়ালা জানিয়ে দিল। কুরতুবীর মতে আয্যানা শব্দে আধিক্য আছে, যেন সে বারবার ডাকছিল: হে কাফেলা! আবু উবায়দার সঙ্গে মিলে তিনি বলেন, এর মানে হে কাফেলার লোকেরা।"
          },
          {
            "en": "When the call came is read differently. Ma'arif al-Qur'an takes thumma, then, to show the announcement was not immediate: the caravan was allowed to leave first, so that nobody would sense a set-up. Ibn Ishaq, in at-Tabari, says Yusuf (AS) let them go until they were well away from the town, then had them overtaken and held before the cry. Al-Baghawi has them reach a halting place, or, it is said, leave the settled land. As-Suddi, also in at-Tabari, has the caller cry out before the caravan set off. Mujahid is reported as saying their caravan was donkeys; al-Farra, in al-Baghawi, says camels.",
            "bn": "ঘোষণা কখন হল, তা নিয়ে পাঠ ভিন্ন। মাআরিফুল কুরআন সুম্মা, অর্থাৎ 'তারপর', শব্দ থেকে বোঝে যে ঘোষণাটা সঙ্গে সঙ্গে হয়নি। আগে কাফেলাকে রওনা হতে দেওয়া হয়েছিল, যাতে কেউ সাজানো ব্যাপার বলে সন্দেহ না করে। তাবারীর বর্ণনায় ইবন ইসহাক বলেন, ইউসুফ (আঃ) তাদের যেতে দিলেন, শহর থেকে বেশ দূরে চলে যাওয়ার পর লোক পাঠিয়ে ধরে আনলেন, তারপর ডাক দেওয়া হল। বাগাভীর মতে তারা এক মনযিল পর্যন্ত গিয়েছিল, কিংবা বলা হয়, লোকালয় ছেড়ে বেরিয়ে গিয়েছিল। অথচ তাবারীতেই সুদ্দীর বর্ণনায় কাফেলা রওনা হওয়ার আগেই ঘোষক ডাক দেয়। মুজাহিদ থেকে বর্ণিত, তাদের কাফেলা ছিল গাধার। বাগাভীতে ফাররা বলেন, উটের।"
          }
        ]
      },
      {
        "h": {
          "en": "Did Binyamin Know?",
          "bn": "বিনইয়ামীন কি জানতেন?"
        },
        "p": [
          {
            "en": "The reports divide on whether the brother was in on it. As-Suddi, in at-Tabari, says it plainly: the brother did not perceive it. Ibn Kathir and the Muyassar speak of the cup going in without anyone perceiving. Al-Qurtubi opens his comment with a different picture. When Binyamin recognised Yusuf (AS), he said: do not send me back to them. Yusuf answered that he knew how Ya'qub grieved over him, and that his grief would only grow. Binyamin refused to leave. Yusuf told him he could be held back only if he were first linked to something unbecoming. Binyamin replied, I do not mind, and the measure was slipped in.",
            "bn": "ভাইটি ব্যাপারটা জানতেন কি না, এ নিয়ে বর্ণনাগুলো দুই ভাগ। তাবারীতে সুদ্দী সোজা বলেন: ভাই টেরও পাননি। ইবন কাসীর আর মুয়াসসারও বলেন, পাত্রটি রাখা হয়েছিল কেউ টের পাওয়ার আগেই। কুরতুবী তাঁর আলোচনা শুরু করেন অন্য এক ছবি দিয়ে। বিনইয়ামীন যখন ইউসুফ (আঃ)-কে চিনলেন, বললেন: আমাকে ওদের সঙ্গে ফেরত পাঠাবেন না। ইউসুফ (আঃ) বললেন, তুমি তো জানো আমার জন্য ইয়াকুব (আঃ) কত দুঃখে আছেন, তাঁর দুঃখ আরও বাড়বে। বিনইয়ামীন তবু যেতে রাজি হলেন না। ইউসুফ (আঃ) বললেন, তোমাকে রাখা যাবে কেবল তখনই, যখন তোমার নামে এমন কিছু জোড়া হবে যা তোমার জন্য শোভন নয়। বিনইয়ামীন বললেন, আমার কোনো পরোয়া নেই। তারপর পাত্রটি তাঁর বস্তায় রেখে দেওয়া হল।"
          },
          {
            "en": "Al-Qurtubi then raises the objection his own account invites: how could Binyamin agree to stay, when it would deepen his father's grief, and how could Yusuf (AS) go along with it? He answers that grief for Yusuf had so overcome Ya'qub (AS) that losing Binyamin could not weigh on him in full, and points out that when it happened Ya'qub said, in 12:84, O my sorrow over Yusuf, and did not dwell on Binyamin. And perhaps, he adds, Yusuf agreed to his staying by revelation. The article records both lines, the brother unaware and the brother consenting, and leaves them standing side by side as the sources do.",
            "bn": "নিজের বর্ণনা থেকেই যে আপত্তি ওঠে, কুরতুবী তা নিজেই তোলেন। বিনইয়ামীন থেকে গেলে তো পিতার দুঃখ আরও গভীর হবে, তবু তিনি রাজি হলেন কীভাবে? আর ইউসুফ (আঃ)-ই বা তাতে সায় দিলেন কেন? তাঁর জবাব: ইউসুফের শোক ইয়াকুব (আঃ)-কে এমনভাবে ছেয়ে ফেলেছিল যে বিনইয়ামীনকে হারানো তাঁর উপর পুরো ভার ফেলতে পারত না। তিনি দেখান, সে সময় ১২:৮৪ আয়াতে ইয়াকুব (আঃ) বলেছিলেন, হায় ইউসুফের জন্য আফসোস! বিনইয়ামীনের কথা তুলে থেমে থাকেননি। কুরতুবী আরও বলেন, হয়তো ইউসুফ (আঃ) ওহির ভিত্তিতেই তাঁর থেকে যাওয়ায় সম্মতি দিয়েছিলেন। এ লেখা দুটো ধারাই রাখছে: ভাই জানতেন না, আবার ভাই রাজি ছিলেন। উৎসগুলো যেমন পাশাপাশি রেখেছে, এখানেও তেমনই থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "How Could They Be Thieves?",
          "bn": "তারা চোর হল কীভাবে?"
        },
        "p": [
          {
            "en": "Here is the question every reader meets: the brothers had not taken the cup, so how could the cry you are thieves be made to them? Al-Qurtubi puts it in those terms, asking how theft could be attributed to brothers who were innocent of it, and gives several answers. The first: they had once stolen Yusuf (AS) from his father, thrown him into the well and then sold him. By that deed they had earned the name, so applying it to them was true. Al-Baghawi records the same reading, under it is said: that the words were meant in the sense that they had stolen Yusuf from his father.",
            "bn": "প্রত্যেক পাঠকের মনে এই প্রশ্নটা আসে। ভাইয়েরা তো পাত্রটা নেয়নি, তাহলে 'তোমরা চোর' কথাটা তাদের বলা হল কীভাবে? কুরতুবী প্রশ্নটা এভাবেই তোলেন: যারা চুরি থেকে নির্দোষ, সেই ভাইদের দিকে চুরির দায় যাবে কী করে? তারপর তিনি কয়েকটি জবাব দেন। প্রথম জবাব: একসময় তারা ইউসুফ (আঃ)-কে তাঁর পিতার কাছ থেকে চুরি করে নিয়েছিল, কূপে ফেলে দিয়েছিল, তারপর বেচে দিয়েছিল। সেই কাজের কারণেই নামটা তাদের প্রাপ্য হয়েছিল, তাই তাদের চোর বলা সত্যই ছিল। বাগাভীও 'বলা হয়' দিয়ে একই ব্যাখ্যা আনেন: কথাটা বলা হয়েছিল এই অর্থে যে তারা ইউসুফকে তাঁর পিতার কাছ থেকে চুরি করেছিল।"
          },
          {
            "en": "Al-Qurtubi's second answer reads the cry as your condition is the condition of thieves: something belonging to another has ended up with you without the king's consent or knowledge. His third is that it was a stratagem to bring Yusuf's brother to him and part him from the others, an answer that assumes Binyamin did not know the cup was placed, nor had Yusuf made himself known to him. The fourth takes the sentence as a question, are you thieves?, just as he reads wa tilka ni'matun in 26:22 as a question. He names their purpose himself: that lying should not be ascribed to Yusuf (AS).",
            "bn": "কুরতুবীর দ্বিতীয় জবাবে ডাকটার অর্থ: তোমাদের অবস্থা চোরের অবস্থার মতো। অন্যের একটা জিনিস রাজার সম্মতি ছাড়া, তাঁর অজান্তে, তোমাদের কাছে চলে এসেছে। তৃতীয় জবাব: এটা ছিল ভাইকে নিজের কাছে এনে বাকিদের থেকে আলাদা করার একটা কৌশল। তিনি সঙ্গে সঙ্গে মনে করিয়ে দেন, এই জবাব দাঁড়িয়ে আছে এই ধারণার উপর যে বিনইয়ামীন পাত্র রাখার কথা জানতেন না, আর ইউসুফ (আঃ)-ও তাঁকে নিজের পরিচয় দেননি। চতুর্থ জবাবে বাক্যটা প্রশ্ন: তোমরা কি চোর? যেমন তিনি ২৬:২২ আয়াতের ওয়া তিলকা নি'মাতুন অংশকে প্রশ্ন হিসেবে পড়েন। এসব জবাবের উদ্দেশ্যও কুরতুবী নিজেই বলে দেন: ইউসুফ (আঃ)-এর দিকে যেন মিথ্যার দায় না যায়।"
          },
          {
            "en": "Two more commentators turn to who spoke the words. As-Sa'di says that perhaps this announcer did not know the truth of the matter. Al-Baghawi lists three views, each introduced with it is said: that they said it without any order from Yusuf; that they said it at his order, and it was a lapse on his part; and the reading already given, that the brothers had stolen Yusuf from his father. These are the answers the commentaries consulted here give. They do not agree on one, and this article does not choose among them; it leaves the question where the mufassirun left it.",
            "bn": "আরও দুজন তাফসীরকার নজর দেন, কথাটা মুখে কে বলেছিল তার দিকে। সা'দী বলেন, হয়তো এই ঘোষক আসল ব্যাপারটা জানত না। বাগাভী তিনটি মত আনেন, প্রতিটির শুরুতে 'বলা হয়'। এক, তারা কথাটা বলেছিল ইউসুফের কোনো আদেশ ছাড়াই। দুই, তারা বলেছিল তাঁর আদেশে, আর সেটা ছিল তাঁর দিক থেকে একটা বিচ্যুতি। তিন, আগের সেই ব্যাখ্যা, ভাইয়েরা ইউসুফকে পিতার কাছ থেকে চুরি করেছিল। এ পর্যন্ত যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলোর জবাব এগুলোই। তাঁরা কোনো একটিতে একমত নন। এ লেখাও এদের মধ্যে কোনোটাকে বেছে নিচ্ছে না। মুফাসসিররা প্রশ্নটা যেখানে রেখে গেছেন, এখানেও সেখানেই থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "After the Cry",
          "bn": "ডাকের পরে যা ঘটল"
        },
        "p": [
          {
            "en": "Ibn Ishaq, in at-Tabari, and al-Baghawi both carry what the messenger is reported to have said once he reached them: did we not honour you as guests, give you full measure, treat you well and do for you what we did for no one else? They said: yes, and what is this about? He said: the king's cup is missing, and we suspect no one but you. The verses that follow take up the scene. In 12:71 the brothers turn and ask what is missing, and in 12:73 they swear by Allah that they came to cause no corruption and were never thieves.",
            "bn": "দূত তাদের কাছে পৌঁছে কী বলেছিল, তার একটা বর্ণনা তাবারীতে ইবন ইসহাকের সূত্রে আর বাগাভীতেও আছে: আমরা কি অতিথি হিসেবে তোমাদের সম্মান করিনি? পুরো মাপে দিইনি, ভালো জায়গায় রাখিনি, অন্য কারও জন্য যা করিনি তোমাদের জন্য তা করিনি? তারা বলল: হ্যাঁ, কিন্তু ব্যাপার কী? সে বলল: রাজার পাত্র হারিয়েছে, আর তোমাদের ছাড়া আমরা আর কাউকে সন্দেহ করি না। পরের আয়াতগুলো দৃশ্যটা এগিয়ে নেয়। ১২:৭১ আয়াতে ভাইয়েরা ঘুরে জিজ্ঞেস করে, কী হারিয়েছে। আর ১২:৭৩ আয়াতে আল্লাহর কসম খেয়ে বলে, তারা দেশে বিশৃঙ্খলা করতে আসেনি, আর তারা কখনো চোর ছিল না।"
          },
          {
            "en": "Several threads are left for their own verses. The reward of a camel's load and the guarantee behind it belong to 12:72; the words thus did We plan for Yusuf belong to 12:76; and what the brothers say in 12:77 belongs there. The English abridgement of Ibn Kathir treats 12:70 to 12:72 as one passage, and only its part on this verse is used here: the bowl was put in Binyamin's bag while they were unaware, and then a herald cried out. None of the commentaries consulted for this verse attaches a hadith to it, and none gives an occasion of revelation.",
            "bn": "কয়েকটা সুতো তাদের নিজ নিজ আয়াতের জন্য রেখে দেওয়া হল। এক উট-বোঝাই পুরস্কার আর তার জামিনের কথা ১২:৭২ আয়াতের। 'এভাবে আমি ইউসুফের জন্য কৌশল করেছিলাম' কথাটা ১২:৭৬ আয়াতের। আর ১২:৭৭ আয়াতে ভাইয়েরা যা বলে, তার আলোচনা সেখানেই। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১২:৭০ থেকে ১২:৭২ পর্যন্ত একসঙ্গে আলোচনা করে। এখানে তার শুধু এই আয়াতের অংশটুকু নেওয়া হয়েছে: তাদের অজান্তে পাত্রটি বিনইয়ামীনের বস্তায় রাখা হল, তারপর একজন ঘোষক ডাক দিল। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদিস জোড়েনি, কোনো শানে নুযূলও বলেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prophet's Plan, Not a Precedent",
          "bn": "নবীর পরিকল্পনা, নজির নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse narrates the plan of a prophet, guided by Allah, inside one story, and al-Qurtubi himself suggests Yusuf (AS) acted by revelation. It licenses no deception, no entrapment and no false accusation by anyone today: not by an employer against a worker, a household against a maid, an official against a suspect, or a relative against a relative. No one now receives revelation about who should be held and why. Whatever rulings the jurists have drawn from this passage belong to qualified scholars, weighed with all their conditions, and not to anyone looking for cover.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি কাহিনির ভেতরে আল্লাহর পথনির্দেশে চলা এক নবীর পরিকল্পনার বর্ণনা দেয়। কুরতুবী নিজেই বলেন, ইউসুফ (আঃ) সম্ভবত ওহির ভিত্তিতে কাজ করেছিলেন। আজ কারও জন্য এ আয়াতে প্রতারণা, ফাঁদ পাতা বা মিথ্যা অভিযোগের কোনো অনুমতি নেই। মালিক কর্মচারীর বিরুদ্ধে, গৃহকর্তা গৃহকর্মীর বিরুদ্ধে, কর্মকর্তা সন্দেহভাজনের বিরুদ্ধে, কিংবা আত্মীয় আত্মীয়ের বিরুদ্ধে এ থেকে কিছুই নিতে পারে না। কাকে আটকাতে হবে আর কেন, সে খবর এখন আর কারও কাছে ওহি হয়ে আসে না। এ অংশ থেকে ফকীহরা যে বিধান বের করেছেন, সেগুলো সব শর্তসহ বিচার করার দায়িত্ব যোগ্য আলেমদের। আড়াল খোঁজা কারও হাতে তা তুলে দেওয়া যায় না।"
          },
          {
            "en": "The same care applies to the brothers. One answer above calls them thieves for what they once did to Yusuf (AS), and the story does tell of that wrong. But it describes particular brothers in one account, and it licenses nothing against any living person, family or community. Notice, too, how hard the commentators worked here. They did not let the cry pass as if accusing the innocent were nothing; they asked how it could be said at all, and searched for answers. That effort is itself a lesson in how heavy the word thief is.",
            "bn": "ভাইদের বেলাতেও একই সতর্কতা। উপরের এক জবাবে তাদের চোর বলা হয়েছে ইউসুফ (আঃ)-এর সঙ্গে তাদের আগের আচরণের জন্য, আর কাহিনি সেই অন্যায়ের কথা বলেও। কিন্তু সে বর্ণনা একটি কাহিনির নির্দিষ্ট কয়েকজন ভাইয়ের। আজকের কোনো জীবিত মানুষ, পরিবার বা সম্প্রদায়ের বিরুদ্ধে এ থেকে কিছুই নেওয়া যায় না। খেয়াল করুন, তাফসীরকারেরা এখানে কত খেটেছেন। নির্দোষকে দোষ দেওয়া যেন কোনো ব্যাপারই নয়, এমনভাবে তাঁরা ডাকটাকে পার হয়ে যাননি। তাঁরা জিজ্ঞেস করেছেন, এমন কথা বলাই বা গেল কীভাবে, তারপর জবাব খুঁজেছেন। এই পরিশ্রমটুকুই শিক্ষা দেয়, 'চোর' শব্দটা কত ভারী।"
          }
        ]
      },
      {
        "h": {
          "en": "Slow to Say Thief",
          "bn": "চোর বলার আগে থামুন"
        },
        "p": [
          {
            "en": "A few verses earlier, in 12:67, Ya'qub (AS) told his sons that the decision is Allah's alone and that he relied on Him. Here the reader watches that sentence at work. The brothers set out with full loads and no idea of the cup; the caller may not have known the truth; even the brother's knowledge is disputed. Only the storyteller sees the whole, and the later verses will say whose planning it was. Most of us live on the brothers' side of such a moment, seeing a missing thing, a sudden charge, a turn we cannot explain, and not yet the rest of the story.",
            "bn": "কয়েক আয়াত আগে, ১২:৬৭ আয়াতে, ইয়াকুব (আঃ) ছেলেদের বলেছিলেন, হুকুম কেবল আল্লাহর, আর তিনি তাঁরই উপর ভরসা করেন। এখানে পাঠক সেই কথাটাকে কাজ করতে দেখেন। ভাইয়েরা পুরো বোঝাই নিয়ে রওনা হল, পাত্রের কথা কিছুই জানে না। ঘোষকও হয়তো আসল ব্যাপার জানত না। ভাইটি জানতেন কি না, তা নিয়েও মতভেদ। পুরো ছবিটা দেখেন কেবল যিনি কাহিনি বলছেন, আর পরিকল্পনাটা কার ছিল, পরের আয়াতগুলো তা বলে দেবে। আমাদের বেশিরভাগই এমন মুহূর্তে থাকি ভাইদের জায়গায়। হারানো কোনো জিনিস, হঠাৎ কোনো অভিযোগ, ব্যাখ্যা মেলে না এমন কোনো মোড় চোখে পড়ে, কাহিনির বাকিটা তখনো পড়ে না।"
          },
          {
            "en": "So the verse turns back on the reader. When money goes missing at home, or a phone disappears at work, how fast does the word thief come out, and at whom: the maid, the new colleague, the relative who was in the room? We have no revelation and no caller who knows what Allah knows. What we have is the duty to check, to ask before we accuse, and to remember that a name, once smeared, is hard to clean. Leave the planning to Allah, and let the word thief come slowly, if it comes at all.",
            "bn": "তাই আয়াতটা ফিরে আসে পাঠকের দিকে। ঘর থেকে টাকা হারালে, অফিসে ফোন উধাও হলে, 'চোর' শব্দটা কত তাড়াতাড়ি বেরিয়ে আসে? আর কার দিকে যায়: গৃহকর্মী, নতুন সহকর্মী, নাকি সেই আত্মীয় যিনি তখন ঘরে ছিলেন? আমাদের কাছে ওহি নেই। আল্লাহ যা জানেন, তা জানা কোনো ঘোষকও নেই। আমাদের আছে যাচাই করার দায়, অভিযোগের আগে জিজ্ঞেস করার দায়। আর মনে রাখার দায় যে একবার কারও নামে কালি লাগলে তা মোছা কঠিন। পরিকল্পনার ভার আল্লাহর উপর ছাড়ুন। আর 'চোর' শব্দটা মুখে আনতে হলে ধীরে আনুন, যদি আদৌ আনতেই হয়।"
          }
        ]
      }
    ]
  },
  "12:72": {
    "sections": [
      {
        "h": {
          "en": "The Answer to Their Question",
          "bn": "প্রশ্নের জবাবে তিন কথা"
        },
        "p": [
          {
            "en": "In 12:71 the brothers turned towards the men who had called after them and asked, what is it you are missing? This verse is the reply, twelve Arabic words in three parts: we are missing the king's measure; whoever brings it shall have a camel-load; and I stand surety for it. The cup being placed in his brother's bag and the cry that the caravan were thieves belong to 12:70, and this article leaves that ground to it.",
            "bn": "১২:৭১ আয়াতে ভাইয়েরা পেছন থেকে ডাক দেওয়া লোকদের দিকে ফিরে জিজ্ঞেস করেছিল, তোমাদের কী হারিয়েছে? এ আয়াত সেই প্রশ্নের জবাব। আরবিতে বারোটি শব্দ, তিনটি ভাগে ভাগ করা। আমরা রাজার মাপার পাত্রটি খুঁজে পাচ্ছি না। যে তা এনে দেবে, সে পাবে এক উট-বোঝাই মাল। আর এর জামিন আমি। ইউসুফ (আঃ)-এর ভাইয়ের বস্তায় পাত্র রাখা আর কাফেলাকে চোর বলে ডাক দেওয়ার কথা ১২:৭০ আয়াতের বিষয়। এ লেখা সে প্রসঙ্গে ঢুকবে না।"
          },
          {
            "en": "Who are the speakers? The verb qalu is plural, and the commentators fill it in slightly differently. At-Tabari glosses it simply as the people said to them. The Muyassar names the caller and those who were with him. Ma'arif al-Qur'an calls them the announcers. Then the sentence shifts from we to I in its last clause, wa-ana bihi za'im, and that single voice is the subject of a later section, because the commentators say who owned it.",
            "bn": "কথাগুলো কারা বলছে? ক্রিয়াটি কালূ, বহুবচন। তাফসীরকারেরা এর কর্তা একটু ভিন্ন ভিন্নভাবে বলেন। তাবারী শুধু বলেন, লোকেরা তাদের বলল। মুয়াসসার বলে, ঘোষক আর তার সঙ্গে যারা উপস্থিত ছিল। মাআরিফুল কুরআন তাদের বলে ঘোষণাকারীরা। বাক্যের শেষ অংশে এসে বহুবচন বদলে একবচন হয়ে যায়: ওয়া আনা বিহী যাঈম, আর আমি এর জামিন। এই একক কণ্ঠ কার, তাফসীরকারেরা তা বলে দিয়েছেন। সে আলোচনা আসবে পরের এক অংশে।"
          }
        ]
      },
      {
        "h": {
          "en": "Suwa' al-Malik, the King's Measure",
          "bn": "সুওয়া আল-মালিক: রাজার পাত্র"
        },
        "p": [
          {
            "en": "At-Tabari first records how the word was read. Abu Hurayra is reported to have read sa' al-malik, without the waw, as if meaning the sa' with which food is measured. Abu Raja' is reported to have read saw', and Yahya ibn Ya'mar sawgh, with a final ghayn, as if from the verb for fashioning metal. The reading of the cities is suwa', and at-Tabari says he does not allow any other, because the authoritative consensus stands on it. He then defines it as the vessel with which Yusuf measured out food.",
            "bn": "শব্দটি কীভাবে পড়া হয়েছে, তাবারী আগে সেটা লিখে রাখেন। আবু হুরায়রা (রাঃ) থেকে বর্ণিত, তিনি ওয়াও ছাড়া পড়েছেন সা আল-মালিক, অর্থাৎ খাদ্য মাপার সা। আবু রাজা থেকে বর্ণিত সাও, আর ইয়াহইয়া ইবন ইয়া'মার থেকে সাওগ, শেষে গাইন দিয়ে, যেন ধাতু গড়ার ক্রিয়া থেকে এসেছে। তবে বিভিন্ন নগরের কারীদের পাঠ সুওয়া। তাবারী বলেন, এর বাইরে অন্য পাঠ তিনি বৈধ মনে করেন না, কারণ নির্ভরযোগ্যদের ঐকমত্য এর উপরই। তারপর তিনি সংজ্ঞা দেন: এটি সেই পাত্র, যা দিয়ে ইউসুফ (আঃ) খাদ্যশস্য মেপে দিতেন।"
          },
          {
            "en": "What was it made of? The reports at-Tabari gathers do not all agree. Through Sa'id ibn Jubayr, Ibn Abbas describes it as shaped like a makkuk, a measuring cup, made of silver, and adds that al-Abbas had one like it before Islam and drank from it. Ikrima also says silver. Sa'id ibn Jubayr calls it the Persian makkuk whose two ends meet, from which the Persians drank. Qatada and ad-Dahhak say it was the king's drinking vessel, and Mujahid that Yusuf drank from it. One report, through Sadaqa ibn Abbad from his father, has Ibn Abbas say it was of copper.",
            "bn": "পাত্রটি কী দিয়ে তৈরি? তাবারীর সংগ্রহ করা বর্ণনাগুলো এখানে এক কথা বলে না। সাঈদ ইবন জুবাইরের সূত্রে ইবন আব্বাস (রাঃ) বলেন, এটি মাক্কূক নামের মাপার পাত্রের মতো, রুপার তৈরি। তিনি আরও বলেন, ইসলামের আগে আব্বাস (রাঃ)-এর কাছেও এমন একটা ছিল, তিনি তাতে পান করতেন। ইকরিমাও বলেন রুপার। সাঈদ ইবন জুবাইর বলেন, পারস্যের সেই মাক্কূক, যার দুই প্রান্ত মিলে যায়, পারসিকরা তাতে পান করত। কাতাদা ও দাহহাকের মতে এটি ছিল রাজার পানপাত্র। মুজাহিদ বলেন, ইউসুফ (আঃ) এতে পান করতেন। আর সাদাকা ইবন আব্বাদ তাঁর পিতার সূত্রে ইবন আব্বাস (রাঃ) থেকে একটি বর্ণনা আনেন: পাত্রটি ছিল তামার।"
          },
          {
            "en": "Ibn Kathir's English abridgement treats 12:70 to 12:72 as one passage, so only its closing lines belong to this verse. There it says the bowl was silver according to the majority of scholars, that some said gold, and that Ibn Zayd said the king drank from it and later measured grain with it once food grew scarce. His Arabic text on this verse is shorter: the king's sa' with which he measured. In 12:70 the same vessel is called as-siqaya, and at-Tabari glosses suwa' here as the king's drinking vessel, so the reports hold drinking and measuring together.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১২:৭০ থেকে ১২:৭২ পর্যন্ত একসঙ্গে আলোচনা করে, তাই এর শেষ কয়েকটি লাইনই কেবল এ আয়াতের। সেখানে বলা আছে, অধিকাংশ আলেমের মতে পাত্রটি ছিল রুপার, কেউ কেউ বলেছেন সোনার। ইবন যায়দ বলেন, রাজা আগে এতে পান করতেন, পরে খাদ্যের টান পড়লে এ দিয়েই শস্য মাপা হতো। এ আয়াতে তাঁর আরবি তাফসীর আরও ছোট: রাজার সা, যা দিয়ে তিনি মাপতেন। ১২:৭০ আয়াতে একই পাত্রকে বলা হয়েছে আস-সিকায়া। আর তাবারী এখানে সুওয়ার ব্যাখ্যা করেন রাজার পানপাত্র বলে। ফলে বর্ণনাগুলোতে পান করা আর মাপা, দুটো কাজই একসঙ্গে পাওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Camel's Load of Grain",
          "bn": "এক উট-বোঝাই খাদ্য"
        },
        "p": [
          {
            "en": "Wa-li-man ja'a bihi himlu ba'ir: and for whoever brings it, a camel's load. At-Tabari reads it as a camel-load of food, and quotes Qatada glossing it as wiqr ba'ir, the full burden of a camel. Al-Baghawi and the Muyassar also specify food. Mujahid, in several chains at-Tabari lists, says instead himl himar, a donkey's load, adding that this is a usage in the language. Al-Qurtubi keeps both: ba'ir here is the camel in the view of most commentators, and it was said to be the donkey, in the speech of some Arabs, which Mujahid said and preferred.",
            "bn": "ওয়া লিমান জাআ বিহী হিমলু বাঈর: আর যে এটা এনে দেবে, তার জন্য এক বাঈরের বোঝা। তাবারী এর অর্থ করেন এক উট-বোঝাই খাদ্য। কাতাদার ব্যাখ্যাও তিনি আনেন: উইকরু বাঈর, উটের পিঠের পুরো ভার। বাগাভী ও মুয়াসসারও খাদ্যের কথা স্পষ্ট করে বলে। অথচ তাবারীর উল্লেখ করা কয়েকটি সূত্রে মুজাহিদ বলেন, হিমলু হিমার, এক গাধার বোঝা। তাঁর মতে এটি আরবি ভাষারই একটি প্রয়োগ। কুরতুবী দুটো মতই রাখেন। অধিকাংশ তাফসীরকারের মতে বাঈর এখানে উট। আবার বলা হয়েছে গাধা, কিছু আরবের ভাষায় এমন প্রয়োগ আছে, আর মুজাহিদ এ কথা বলেছেন এবং এটাকেই বেছে নিয়েছেন।"
          },
          {
            "en": "Al-Qurtubi then raises a lawyer's objection. How could a camel-load be guaranteed when its amount seems unknown, since guaranteeing an unknown quantity is not valid? He answers that a camel-load was a fixed and known measure among them, like the wasq, so the guarantee was sound. As-Sa'di calls it a wage for finding the cup, and Ibn Kathir's English text calls it a reward. The offer, in other words, was specific enough that the man who found the cup would know what he was owed.",
            "bn": "এরপর কুরতুবী একজন ফকীহের আপত্তি তোলেন। উটের বোঝার পরিমাণ তো অনির্দিষ্ট মনে হয়, আর অজানা পরিমাণের জামিন হওয়া শুদ্ধ নয়। তাহলে এর জামিন হওয়া গেল কীভাবে? তাঁর জবাব: তাদের কাছে এক উট-বোঝাই ছিল নির্দিষ্ট ও জানা এক মাপ, ওয়াসকের মতো। তাই জামিনদারি শুদ্ধ হয়েছে। সা'দী একে বলেন পাত্রটি খুঁজে পাওয়ার পারিশ্রমিক। ইবন কাসীরের ইংরেজি পাঠে একে বলা হয়েছে পুরস্কার। মোট কথা, প্রস্তাবটা এতটাই নির্দিষ্ট ছিল যে পাত্র খুঁজে পাওয়া লোকটি জানত, তার পাওনা কতটুকু।"
          }
        ]
      },
      {
        "h": {
          "en": "Wa-Ana Bihi Za'im",
          "bn": "ওয়া আনা বিহী যাঈম"
        },
        "p": [
          {
            "en": "The commentators are unanimous on the word. At-Tabari explains za'im as kafil, a guarantor, and brings the same gloss from Ibn Abbas, Sa'id ibn Jubayr, Qatada, ad-Dahhak and Mujahid. His own paraphrase is exact: I am guarantor that I will pay him in full a camel-load of food if he brings me the king's measure. The Muyassar says guarantor and surety for the camel-load of food. Ibn Kathir's English text calls it an assurance that the reward would be delivered.",
            "bn": "শব্দটির অর্থে তাফসীরকারেরা একমত। তাবারী যাঈম-এর অর্থ করেন কাফীল, অর্থাৎ জামিনদার। একই ব্যাখ্যা তিনি আনেন ইবন আব্বাস (রাঃ), সাঈদ ইবন জুবাইর, কাতাদা, দাহহাক ও মুজাহিদ থেকে। তাঁর নিজের ভাষ্য একেবারে মাপা: যে আমার কাছে রাজার পাত্রটি এনে দেবে, তাকে এক উট-বোঝাই খাদ্য পুরোপুরি বুঝিয়ে দেওয়ার দায় আমার। মুয়াসসারের ভাষায়, উট-বোঝাই খাদ্যের জন্য আমি দায়ী ও জামিন। ইবন কাসীরের ইংরেজি পাঠ বলে, পুরস্কার যে পৌঁছে দেওয়া হবে, এটা তারই নিশ্চয়তা।"
          },
          {
            "en": "Whose voice is the I? Mujahid, in several chains in at-Tabari, says the za'im is the caller who cried, O caravan. Al-Qurtubi quotes him. As-Sa'di says the searching caller speaks these words, and al-Baghawi that the caller says it. Ibn Ishaq, in at-Tabari, has the messenger tell them that whoever brings it gets a camel-load and that he is surety for it until he hands it over. Al-Qurtubi builds a legal point on this, because the guarantor was someone other than Yusuf (AS). None of the texts consulted for this verse makes the I Yusuf (AS) himself, so this article does not either.",
            "bn": "এই আমি কে? তাবারীর উল্লেখ করা কয়েকটি সূত্রে মুজাহিদ বলেন, যাঈম হলো সেই ঘোষক, যে ডেকেছিল: হে কাফেলা! কুরতুবী তাঁর কথাটি উদ্ধৃত করেন। সা'দী বলেন, খুঁজে বেড়ানো ঘোষকই এ কথা বলছে। বাগাভীও বলেন, কথাটা ঘোষকের। তাবারীতে ইবন ইসহাকের বর্ণনায় দূত তাদের জানায়, যে এটা এনে দেবে সে উট-বোঝাই মাল পাবে, আর তা বুঝিয়ে না দেওয়া পর্যন্ত আমি এর জামিন। কুরতুবী এর উপর একটি ফিকহি কথা দাঁড় করান, কারণ জামিনদার ছিল ইউসুফ (আঃ) ছাড়া অন্য কেউ। এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীর ইউসুফ (আঃ)-কে এই আমি বলে না। তাই এ লেখাও তা বলছে না।"
          },
          {
            "en": "The word itself carries more than a contract. At-Tabari says the root sense of za'im in Arabic is the one who takes charge of a people's affairs, and that kafil and hamil share it, which is why a people's chief is called their za'im. He cites Layla al-Akhyaliyya on her brother, seen beneath the banner as za'im over the army. Al-Qurtubi quotes the same verse and lists za'im, kafil, hamil, damin and qabil as one meaning. To stand surety, on this reading, is a kind of leadership.",
            "bn": "শব্দটির ভেতরে চুক্তির চেয়ে বেশি কিছু আছে। তাবারী বলেন, আরবি ভাষায় যাঈম-এর মূল অর্থ, যে কোনো গোত্রের কাজকর্মের দায়িত্ব কাঁধে নেয়। কাফীল ও হামীল শব্দেও একই অর্থ আছে। এজন্যই গোত্রপ্রধানকে বলা হয় তাদের যাঈম। তিনি লায়লা আল-আখইয়ালিয়্যার একটি পঙক্তি আনেন। নিজের ভাইয়ের শোকে তিনি লিখেছিলেন, পতাকা উঠলে দেখবে সে পতাকার নিচে গোটা বাহিনীর যাঈম। কুরতুবীও এই পঙক্তি উদ্ধৃত করেন, আর বলেন যাঈম, কাফীল, হামীল, দামীন ও কাবীল একই অর্থের শব্দ। এ অর্থে কারও জামিন হওয়া এক ধরনের নেতৃত্ব।"
          }
        ]
      },
      {
        "h": {
          "en": "Ju'ala: A Reward for a Task",
          "bn": "জুআলা: কাজের বিনিময়ে পুরস্কার"
        },
        "p": [
          {
            "en": "Ibn Kathir labels each of the two clauses in a single line. And for whoever brings it a camel-load: this belongs to the chapter of ju'ala. And I stand surety for it: this belongs to the chapter of daman and kafala, guarantee and suretyship. Al-Qurtubi reports that some scholars find two proofs in the verse. The first is that ju'l is allowed, permitted out of need, so that it tolerates an unknown element that would not be tolerated elsewhere: if a man says whoever does such a thing shall have such a reward, it is valid.",
            "bn": "ইবন কাসীর এক লাইনেই দুটি অংশের পরিচয় দিয়ে দেন। যে এনে দেবে তার জন্য এক উট-বোঝাই: এটি জুআলার অধ্যায়ের বিষয়। আর আমি এর জামিন: এটি দামান ও কাফালার, অর্থাৎ দায় নেওয়া ও জামিন হওয়ার অধ্যায়ের বিষয়। কুরতুবী জানান, কিছু আলেম এ আয়াতে দুটি দলিল খুঁজে পান। প্রথমটি হলো জু'ল বা কাজের বিনিময়ে পুরস্কার ঘোষণা বৈধ। প্রয়োজনের খাতিরে এর অনুমতি দেওয়া হয়েছে, তাই এতে এমন কিছু অনিশ্চয়তা চলে, যা অন্য চুক্তিতে চলে না। কেউ যদি বলে, যে এ কাজটা করবে সে এত পাবে, তবে তা শুদ্ধ।"
          },
          {
            "en": "Al-Qurtubi sets out how ju'ala differs from hire. In ju'ala a single side is known and the other unknown, out of necessity, while in ijara both the wage and the work are fixed. Either party may withdraw, except that the offerer may not once the worker has begun. The parties need not meet, as this verse shows, and he says al-Shafi'i held all of this. His own school goes further: a man who returns a runaway slave without any offer is owed a customary wage. Al-Qurtubi notes that al-Shafi'i differed with them here.",
            "bn": "ইজারা বা ভাড়া-চুক্তির সঙ্গে জুআলার তফাত কুরতুবী খুলে বলেন। জুআলায় প্রয়োজনের কারণে এক দিক জানা থাকে, অন্য দিক অজানা। ইজারায় পারিশ্রমিক আর কাজ দুটোই নির্দিষ্ট। জুআলা থেকে যেকোনো পক্ষ সরে আসতে পারে, তবে কাজ শুরু হয়ে গেলে ঘোষণাকারী আর পারে না। দুই পক্ষের সামনাসামনি হওয়াও জরুরি নয়, এ আয়াতই তার প্রমাণ। কুরতুবী বলেন, শাফিঈ এর সবটাই মেনেছেন। তাঁর নিজের মাযহাব আরও এক ধাপ এগোয়: কোনো ঘোষণা ছাড়াই কেউ পালিয়ে যাওয়া গোলাম ফিরিয়ে আনলে সে প্রচলিত পারিশ্রমিক পাবে। কুরতুবী জানান, এখানে শাফিঈ তাঁদের সঙ্গে ভিন্নমত পোষণ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Answering for Another's Debt",
          "bn": "অন্যের দেনার দায় কাঁধে"
        },
        "p": [
          {
            "en": "The second proof, al-Qurtubi says, is that kafala, standing surety for someone, is allowed, since the caller who guaranteed was someone other than Yusuf (AS). His school's scholars hold that saying I bear it, I guarantee it, I am za'im, kafil or damin for you, or it is on me, is in every case a binding suretyship. Then he records where the jurists part. On surety for a person's appearance, the Kufans hold that if the man dies the guarantor is not bound to pay his debt, and that is one of al-Shafi'i's two views.",
            "bn": "কুরতুবী বলেন, দ্বিতীয় দলিল হলো কাফালা, অর্থাৎ কারও জামিন হওয়া বৈধ। কারণ যে ঘোষক জামিন হয়েছিল, সে ইউসুফ (আঃ) নয়, অন্য কেউ। তাঁর মাযহাবের আলেমদের মতে কেউ যদি বলে, এ দায় আমি নিলাম, আমি জামিন, আমি তোমার যাঈম বা কাফীল বা দামিন, অথবা এটা আমার উপর, তবে প্রতিটি কথাতেই জামিনদারি বাধ্যতামূলক হয়ে যায়। এরপর তিনি ফকীহদের মতভেদের জায়গাগুলো লিখে রাখেন। কেউ যদি কোনো মানুষকে হাজির করার জামিন হয় আর সে লোক মারা যায়, কূফার আলেমদের মতে জামিনদারকে তার দেনা শোধ করতে হবে না। শাফিঈর দুটি মতের একটিও এমন।"
          },
          {
            "en": "Malik, al-Layth and al-Awza'i hold that if he fails to produce the man he pays the debt and reclaims it from the debtor, unless he stipulated that he guaranteed the person and not the money. At-Tahawi argued for the Kufans that nobody can be bound to what he never guaranteed. On whether a creditor may claim from either party, ath-Thawri, the Kufans, al-Awza'i, al-Shafi'i, Ahmad and Ishaq say yes. Malik held that and later said the guarantor is taken only if the debtor is bankrupt or absent. Ibn Abi Layla held that the debt moves to the guarantor altogether.",
            "bn": "মালিক, লাইস ও আওযাঈর মত ভিন্ন। জামিনদার সে লোককে হাজির করতে না পারলে দেনা তাকেই শোধ করতে হবে, পরে সে দেনাদারের কাছ থেকে তা আদায় করবে। তবে সে যদি শর্ত করে থাকে যে শুধু মানুষটির জামিন হয়েছে, টাকার নয়, তাহলে ভিন্ন কথা। তাহাবী কূফার আলেমদের পক্ষে যুক্তি দেন: যার জামিন কেউ হয়নি, তার দায় তার উপর চাপানো যায় না। পাওনাদার দুজনের যে কারও কাছে দাবি করতে পারবে কি না, এ প্রশ্নে সাওরী, কূফার আলেমরা, আওযাঈ, শাফিঈ, আহমাদ ও ইসহাক বলেন, পারবে। মালিক আগে এ মত রাখতেন, পরে বলেন, দেনাদার দেউলিয়া বা অনুপস্থিত হলে তবেই জামিনদারকে ধরা যাবে। ইবন আবী লায়লার মতে দেনা পুরোপুরি জামিনদারের উপর চলে যায়।"
          },
          {
            "en": "Ibn Abi Layla argued from Abu Qatada's guarantee for a dead man's debt, which al-Qurtubi mentions. Sahih al-Bukhari (2289) narrates that the Prophet ﷺ declined to pray over a man who owed three dinars, until Abu Qatada said he would take on the debt, and then he prayed. That narration is not attached to this verse. Al-Qurtubi also records that suretyship does not apply to hadd penalties, with Abu Yusuf and Muhammad dissenting. The article reports these rulings and issues none. Actual questions belong with qualified scholars.",
            "bn": "ইবন আবী লায়লা দলিল দেন আবু কাতাদা (রাঃ)-এর সেই জামিনদারি থেকে, যা তিনি এক মৃত ব্যক্তির দেনার জন্য নিয়েছিলেন। কুরতুবী সেটার উল্লেখ করেন। সহীহ বুখারীর (২২৮৯) বর্ণনায় আছে, তিনটি দীনার দেনা রেখে মারা যাওয়া এক ব্যক্তির জানাযা পড়তে নবী ﷺ রাজি হননি। তারপর আবু কাতাদা (রাঃ) বললেন, তার দেনা আমি শোধ করব। তখন তিনি জানাযা পড়ালেন। এ বর্ণনা এ আয়াতের সঙ্গে সংশ্লিষ্ট নয়। কুরতুবী আরও লেখেন, হদ্দের শাস্তিতে জামিনদারি চলে না, তবে আবু ইউসুফ ও মুহাম্মাদ এতে দ্বিমত করেছেন। এ লেখা শুধু এসব মত তুলে ধরছে, নিজে কোনো ফতোয়া দিচ্ছে না। বাস্তব প্রশ্নের সমাধান যোগ্য আলেমদের কাছেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Perhaps Valid in Their Law",
          "bn": "হয়তো তাদের শরীয়তে বৈধ ছিল"
        },
        "p": [
          {
            "en": "Al-Qurtubi does not let the camel-load pass without a caution. Since the reward would go to whoever had taken the cup, it was payment to a thief, and that is not lawful for a thief. He offers two ways out and chooses neither firmly: perhaps it was valid in their law, or perhaps this was a ju'ala, money offered to whoever searched and sought. The broader question of whether the law of earlier prophets binds Muslims is not taken up in the texts consulted for this verse, so the article leaves it there.",
            "bn": "উট-বোঝাইয়ের কথাটা কুরতুবী একটা সতর্কতা ছাড়া পার হতে দেন না। পুরস্কারটা তো যাবে তার কাছে, যে পাত্রটা নিয়েছে। তাহলে এটা চোরকে দেওয়া বিনিময়, আর চোরের জন্য তা হালাল নয়। এর দুটি সম্ভাব্য জবাব তিনি দেন, তবে কোনোটিকে জোর দিয়ে বেছে নেন না। হয়তো তাদের শরীয়তে এটা বৈধ ছিল। অথবা এটা ছিল জুআলা, অর্থাৎ যে খুঁজবে ও তল্লাশি করবে তার জন্য ঘোষিত অর্থ। আগের নবীদের শরীয়ত মুসলমানদের জন্য বাধ্যতামূলক কি না, এই বড় প্রশ্নটি এ আয়াতের জন্য সংগ্রহ করা তাফসীরগুলোতে আলোচিত হয়নি। তাই এ লেখাও সেখানেই থামছে।"
          },
          {
            "en": "Ma'arif al-Qur'an uses this verse to ask how a prophet could let innocent men be called thieves, and answers, with al-Qurtubi and Mazhari, from 12:76, where Allah says, thus did We plan for Yusuf. That question belongs with 12:70 and 12:76. None of the commentaries consulted here attaches a sound hadith to this verse. And the verse describes a search inside one story; it licenses nothing against any living person or community, and gives no one a pattern for accusing others.",
            "bn": "মাআরিফুল কুরআন এ আয়াতে প্রশ্ন তোলে, একজন নবী কীভাবে নির্দোষ লোকদের চোর বলে ডাকতে দিলেন? আর কুরতুবী ও মাযহারীর সঙ্গে মিলে এর জবাব খোঁজে ১২:৭৬ আয়াতে, যেখানে আল্লাহ বলেন, এভাবে আমি ইউসুফের জন্য কৌশল করেছিলাম। সে প্রশ্নের জায়গা ১২:৭০ ও ১২:৭৬ আয়াত। এখানে সংগ্রহ করা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো সহীহ হাদিস যুক্ত করেনি। আর এ আয়াত একটি কাহিনির ভেতরের এক তল্লাশির বর্ণনা দেয়। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো অনুমতি দেয় না, কাউকে অভিযুক্ত করার নমুনাও বানায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Name Behind a Promise",
          "bn": "প্রতিশ্রুতির পেছনে নিজের নাম"
        },
        "p": [
          {
            "en": "Set the plot aside and the verse is plain commerce: a named reward, a stated amount, and a man who says the payment is on him. At-Tabari's paraphrase makes the point sharpest, that he will pay it in full. Most people will never search a caravan, but many will offer a reward for a lost thing, promise a fee for a job, or tell a lender that they will cover a friend's debt. Each of those is a small za'im moment, and each creates a claim on the one who spoke.",
            "bn": "কাহিনির কৌশলটা সরিয়ে রাখলে আয়াতটি সাদামাটা লেনদেনের কথা। একটা ঘোষিত পুরস্কার, নির্দিষ্ট পরিমাণ, আর একজন মানুষ, যে বলছে পরিশোধের দায় তার। তাবারীর ভাষ্যে কথাটা সবচেয়ে ধারালো: সে পুরোপুরি বুঝিয়ে দেবে। আমাদের বেশির ভাগ কখনো কাফেলা তল্লাশি করবে না। কিন্তু হারানো জিনিস ফেরত পেতে পুরস্কার ঘোষণা করি, কাজের বিনিময়ে টাকার কথা দিই, বন্ধুর দেনার ব্যাপারে পাওনাদারকে বলি, দায় আমার। প্রতিটিই ছোট এক যাঈম মুহূর্ত। প্রতিটিতেই যে কথা দিল, তার উপর অন্যের একটা হক তৈরি হয়ে যায়।"
          },
          {
            "en": "Two honesties are asked of the one who speaks. The first is in the offer: name it clearly, the way a camel-load was a known measure, so that no one is later cheated by vagueness. The second is in the keeping. In a general narration not attached to this verse, Sahih al-Bukhari (33) records that the Prophet ﷺ said: \"The signs of a hypocrite are three: Whenever he speaks, he tells a lie. Whenever he promises, he always breaks it (his promise). If you trust him, he proves to be dishonest. (If you keep something as a trust with him, he will not return it.)\"",
            "bn": "যে কথা দেয়, তার কাছে দুই রকম সততা চাওয়া হয়। প্রথমটা প্রস্তাবে। উট-বোঝাই যেমন জানা মাপ ছিল, তেমনি যা দিচ্ছেন তা পরিষ্কার করে বলুন, যাতে পরে অস্পষ্টতার সুযোগে কেউ ঠকে না যায়। দ্বিতীয়টা কথা রাখায়। সহীহ বুখারীতে (৩৩) একটি সাধারণ বর্ণনা আছে, যা এ আয়াতের সঙ্গে সংশ্লিষ্ট নয়। নবী ﷺ বলেছেন: \"মুনাফিকের আলামত তিনটি: কথা বললে মিথ্যা বলে, ওয়াদা করলে ভঙ্গ করে, আর তার কাছে আমানত রাখা হলে খেয়ানত করে।\""
          }
        ]
      }
    ]
  },
  "12:76": {
    "sections": [
      {
        "h": {
          "en": "Their Bags Before His",
          "bn": "ভাইয়ের বস্তার আগে তাদেরগুলো"
        },
        "p": [
          {
            "en": "Fa-bada'a bi-aw'iyatihim qabla wi'a'i akhihi: so he began with their bags before the bag of his brother. At-Tabari tells the scene. Yusuf (AS) searched their containers and packs for the king's measure, starting with the bags of his brothers through their father, one by one, and leaving to the end the bag of his full brother, from father and mother. He searched that last, and drew the measure out of it. Al-Qurtubi adds that wi'a' may be said as wu'a' or wi'a', both sound Arabic, and means whatever holds and protects goods.",
            "bn": "ফাবাদাআ বিআওইয়াতিহিম কাবলা উইআই আখীহি: অতঃপর সে ভাইয়ের বস্তার আগে তাদের বস্তা দিয়ে শুরু করল। তাবারী দৃশ্যটা সোজাভাবে বলেন। রাজার পরিমাপ-পাত্র খুঁজতে ইউসুফ (আঃ) তাদের থলে আর মালপত্র তল্লাশি করলেন। শুরু করলেন বৈমাত্রেয় ভাইদের বস্তা দিয়ে, একটার পর একটা। বাপ-মা দুদিক থেকে যে ভাই তাঁর আপন, তার বস্তা রাখলেন সবার শেষে। সেটাই শেষে তল্লাশি করলেন, আর সেখান থেকেই পাত্রটি বের করলেন। কুরতুবী যোগ করেন, শব্দটা উউআ আর উইআ দুভাবেই বলা হয়, দুটোই আরবদের ভাষা। অর্থ: যা মালপত্র ধরে রাখে ও সুরক্ষিত রাখে।"
          },
          {
            "en": "Why that order? Al-Qurtubi says Yusuf (AS) began with their packs to keep accusation and suspicion out of their hearts, which would have arisen had he started with his brother's. Al-Baghawi gives the same reason in two words, to remove the charge, and adds that he went through their bags one at a time. As-Sa'di says it was so that the doubt would lift that the thing had been done on purpose. The Muyassar frames it as making firm what he had arranged to keep his brother with him, and notes that he searched their goods himself.",
            "bn": "এই ক্রম কেন? কুরতুবী বলেন, ভাইয়ের বস্তা দিয়ে শুরু করলে তাদের মনে অভিযোগ আর সন্দেহ জাগত। তা দূরে রাখতেই ইউসুফ (আঃ) তাদের মালপত্র দিয়ে শুরু করেন। বাগাভী একই কারণ দেন দুই শব্দে: অভিযোগ সরানোর জন্য। সঙ্গে বলেন, তিনি তাদের বস্তা একটা একটা করে খুলেছিলেন। সা'দীর ব্যাখ্যা, যাতে এই সন্দেহ দূর হয় যে কাজটা ইচ্ছে করে করা হয়েছে। মুয়াসসার বিষয়টা দেখে এভাবে: ভাইকে নিজের কাছে রেখে দেওয়ার যে ব্যবস্থা তিনি করেছিলেন, তাকে পাকা করা। মুয়াসসার আরও জানায়, তিনি নিজেই দাঁড়িয়ে তাদের মালপত্র তল্লাশি করেছিলেন।"
          },
          {
            "en": "Ibn Kathir's Arabic calls the order a tawriya, a screen: he searched theirs first, and then took his brother from them by the ruling of their own confession and commitment. His English abridgement groups 12:73 to 12:76 together; its part on this verse says he started with their bags to complete the plan. Ma'arif al-Qur'an says the officials opened Binyamin's baggage last so that no doubt would arise. The commentators agree on the sequence and differ only in who searched, Yusuf (AS) himself or his men.",
            "bn": "ইবন কাসীরের আরবি তাফসীর এই ক্রমকে বলে তাওরিয়া, অর্থাৎ আড়াল। তিনি আগে তাদের বস্তা খুঁজলেন, তারপর তাদেরই স্বীকারোক্তি আর অঙ্গীকারের রায় অনুযায়ী ভাইকে তাদের কাছ থেকে নিয়ে নিলেন। ইবন কাসীরের ইংরেজি সংক্ষেপ ১২:৭৩ থেকে ১২:৭৬ আয়াতকে এক অংশ ধরে আলোচনা করে। এই আয়াতের অংশে বলা হয়েছে, পরিকল্পনা পূর্ণ করতে তিনি তাদের বস্তা দিয়ে শুরু করেন। মাআরিফুল কুরআন বলে, কোনো সন্দেহ যাতে না জাগে, সে জন্য কর্মকর্তারা বিনইয়ামীনের মাল খোলেন সবার শেষে। ক্রম নিয়ে তাফসীরকারেরা একমত। পার্থক্য শুধু এখানে: তল্লাশি কে করেছিল, ইউসুফ (আঃ) নিজে নাকি তাঁর লোকেরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Pausing Over Each Pack",
          "bn": "প্রতিটি বস্তায় থেমে থেমে"
        },
        "p": [
          {
            "en": "At-Tabari brings several reports on how the search went. Qatada is reported to have said that at every bag opened, he asked Allah's forgiveness, out of scruple over the charge he had laid on them. Ibn Jurayj adds that he already knew where the thing lay. When only the youngest was left, he said, I do not think the boy took anything. The brothers would not let it rest: no, clear him too; it will sit better with you and with us.",
            "bn": "তল্লাশি কীভাবে চলেছিল, তা নিয়ে তাবারী কয়েকটি বর্ণনা আনেন। কাতাদা থেকে বর্ণিত, প্রতিটি বস্তা খোলার সময় তিনি আল্লাহর কাছে ক্ষমা চাইতেন। কারণ তাদের উপর যে অভিযোগ তোলা হয়েছিল, তা নিয়ে তাঁর মনে খচখচানি ছিল। ইবন জুরাইজ যোগ করেন, জিনিসটা কোথায় আছে, তা তিনি আগে থেকেই জানতেন। শুধু ছোট ভাইয়ের বস্তা বাকি থাকতে তিনি বললেন, আমার মনে হয় না ছেলেটা কিছু নিয়েছে। ভাইয়েরা ছাড়ল না। বলল, ওকেও খুঁজে দেখুন, তাতে আপনার মনও শান্ত হবে, আমাদেরও।"
          },
          {
            "en": "Al-Qurtubi notes that some named the searcher as the one seeking forgiveness, while Qatada's words suggest Yusuf (AS). Since the search was his, al-Qurtubi says, it would imply the caller accused them on his own view; his answer is that it is said all of it was by Allah's command, and the words thus did We plan for Yusuf strengthen that. As-Sa'di draws attention to one verb. The verse says istakhrajaha, he brought it out, not he found it or his brother stole it, in keeping with what actually happened.",
            "bn": "কুরতুবী জানান, কারও মতে ক্ষমা চাইতেন তল্লাশিকারী, তবে কাতাদার কথার বাহ্যিক অর্থে তিনি ইউসুফ (আঃ) নিজে। তল্লাশি যেহেতু তাঁরই, তাতে মনে হতে পারে ঘোষক নিজের মত থেকে তাদের চোর বলেছিল। কুরতুবীর জবাব: বলা হয়, এর সবটাই ছিল আল্লাহর নির্দেশে, আর 'এভাবেই আমি ইউসুফের জন্য ব্যবস্থা করেছিলাম' কথাটা সেটাকেই জোরালো করে। সা'দী একটি ক্রিয়ার দিকে দৃষ্টি দেন। আয়াত বলছে ইসতাখরাজাহা, সে বের করল। বলেনি সে পেল, কিংবা তার ভাই চুরি করেছিল। যা আসলে ঘটেছিল, তার প্রতি খেয়াল রেখেই এই শব্দ।"
          }
        ]
      },
      {
        "h": {
          "en": "Kidna, in the Commentators' Words",
          "bn": "কিদনা: তাফসীরকারদের ভাষায়"
        },
        "p": [
          {
            "en": "Kadhalika kidna li-Yusuf: thus did We plan for Yusuf. At-Tabari glosses it as thus We arranged for Yusuf, so that he could free his full brother from the others through their own admission that he might take and keep him. Their answer, that whoever had the cup in his bag was to be held for it, was the rule of their own religion; and so, at-Tabari says, the brother came to be with Yusuf (AS) by their ruling and by Allah's arranging. Ibn Jurayj, as-Suddi and ad-Dahhak give the same gloss, sana'na, We brought it about.",
            "bn": "কাযালিকা কিদনা লিইউসুফ: এভাবেই আমি ইউসুফের জন্য ব্যবস্থা করেছিলাম। তাবারী এর অর্থ করেন: এভাবেই আমি ইউসুফের জন্য বন্দোবস্ত করলাম, যাতে সে তার আপন ভাইকে অন্য ভাইদের কাছ থেকে ছাড়িয়ে নিতে পারে। আর তা হবে তাদেরই স্বীকৃতিতে যে ইউসুফ তাকে নিয়ে নিজের কাছে রাখতে পারে। যার বস্তায় পাত্র মিলবে তাকেই আটকে রাখা হবে, তাদের এই জবাব ছিল তাদের নিজেদের ধর্মের বিধান। তাবারী বলেন, এভাবে ভাইটি ইউসুফ (আঃ)-এর কাছে এল তাদের রায়ে আর আল্লাহর ব্যবস্থায়। ইবন জুরাইজ, সুদ্দী আর দাহহাকও একই অর্থ দেন: সানা'না, আমি ঘটিয়ে দিলাম।"
          },
          {
            "en": "Mujahid, in at-Tabari, calls it a deed that Allah arranged for him, which Yusuf (AS) then took as his grounds. Al-Qurtubi collects three glosses: made, from Ibn Abbas; arranged, from al-Qutabi; and willed, from Ibn al-Anbari. Al-Baghawi reads it as requital: as the brothers had schemed against Yusuf at the start, so it was answered in their own affair, and he recalls Ya'qub's warning in 12:5 that they would plot against him. Then he draws the line: kayd from creatures is a stratagem, and from Allah it is arranging with the truth.",
            "bn": "তাবারীর উদ্ধৃতিতে মুজাহিদ একে বলেন এমন একটি কাজ, যা আল্লাহ তাঁর জন্য সাজিয়ে দিয়েছিলেন, আর ইউসুফ (আঃ) সেটাকেই নিজের কারণ হিসেবে ধরলেন। কুরতুবী তিনটি অর্থ জড়ো করেন। ইবন আব্বাস (রাঃ) থেকে: করলাম। কুতাবী থেকে: বন্দোবস্ত করলাম। ইবনুল আনবারী থেকে: চাইলাম। বাগাভী একে দেখেন প্রতিদান হিসেবে। ভাইয়েরা শুরুতে ইউসুফের বিরুদ্ধে ষড়যন্ত্র করেছিল, এবার তাদের নিজেদের ব্যাপারেই তার জবাব এল। তিনি মনে করিয়ে দেন ১২:৫ আয়াতে ইয়াকুব (আঃ)-এর সতর্কবাণী, ওরা তোমার বিরুদ্ধে চক্রান্ত করবে। তারপর তিনি পার্থক্যটা টেনে দেন: সৃষ্টির কাইদ হলো কৌশল, আর আল্লাহর কাইদ হলো সত্যের সঙ্গে ব্যবস্থা করা।"
          },
          {
            "en": "As-Sa'di explains it as We made this plan easy for him, a plan by which he reached an end that was not blameworthy; the Muyassar likewise says We made this arrangement easy for Yusuf. Ibn Kathir calls it a kayd that is loved and intended, which Allah loves and is pleased with, for the wisdom and the sought-after good in it. None of these commentators reads the word as deceit on Allah's part. This article follows them in rendering it planned.",
            "bn": "সা'দী ব্যাখ্যা করেন: এই পরিকল্পনা আমি তার জন্য সহজ করে দিলাম, যার মাধ্যমে সে এমন লক্ষ্যে পৌঁছাল যা নিন্দনীয় নয়। মুয়াসসারও বলে, ইউসুফের জন্য এই ব্যবস্থা আমি সহজ করে দিলাম। ইবন কাসীর একে বলেন প্রিয় ও কাঙ্ক্ষিত কাইদ, যা আল্লাহ ভালোবাসেন ও পছন্দ করেন, কারণ তাতে আছে প্রজ্ঞা আর কাঙ্ক্ষিত কল্যাণ। এই তাফসীরকারদের কেউই শব্দটিকে আল্লাহর পক্ষ থেকে প্রতারণা অর্থে পড়েননি। এই লেখাও তাঁদের অনুসরণে শব্দটির অর্থ করছে পরিকল্পনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Under the King's Law",
          "bn": "রাজার আইনে যা চলত না"
        },
        "p": [
          {
            "en": "Ma kana li-ya'khudha akhahu fi dini al-malik: he could not have taken his brother under the king's din. At-Tabari records two lines. Ibn Abbas and ad-Dahhak say the king's authority. Qatada, as-Suddi and others say the king's judgement and ruling; in Qatada's words, it was not in the king's judgement to enslave a man for a theft. Al-Qurtubi adds Mujahid, his ruling, naming what was at stake as the enslaving of thieves, and Ibn Isa, his customs.",
            "bn": "মা কানা লিইয়া'খুযা আখাহু ফী দীনিল মালিক: রাজার দীনের অধীনে সে তার ভাইকে আটকাতে পারত না। তাবারী দুটি ধারা লিপিবদ্ধ করেন। ইবন আব্বাস (রাঃ) আর দাহহাক বলেন, রাজার ক্ষমতা। কাতাদা, সুদ্দী ও অন্যরা বলেন, রাজার বিচার ও রায়। কাতাদার ভাষায়, চুরির দায়ে কাউকে দাস বানানো রাজার বিচারে ছিল না। কুরতুবী যোগ করেন মুজাহিদের মত: রাজার রায়। প্রশ্নটা ছিল চোরকে দাস বানানো নিয়ে, সেটাও মুজাহিদ উল্লেখ করেন। আর ইবন ঈসার মত: রাজার প্রচলিত রীতি।"
          },
          {
            "en": "What then was the king's penalty? As-Sa'di and the Muyassar say it was not part of his law to take ownership of a thief. Ma'mar, in at-Tabari, heard that the king's law charged a thief double the loss. Qatada, in al-Qurtubi, says it was beating and a double fine. Ma'arif al-Qur'an describes a corporal punishment followed by release on payment of twice the value. Ibn Zayd says that among the prophets, Ya'qub (AS) and his sons, a thief was taken as a slave for his theft.",
            "bn": "তাহলে রাজার আইনে সাজা কী ছিল? সা'দী আর মুয়াসসার বলেন, চোরকে নিজের মালিকানায় নিয়ে নেওয়া রাজার আইনের অংশ ছিল না। তাবারীর উদ্ধৃতিতে মা'মার শুনেছিলেন, রাজার আইনে চোরের উপর ক্ষতির দ্বিগুণ জরিমানা চাপানো হতো। কুরতুবীর উদ্ধৃতিতে কাতাদা বলেন, সাজা ছিল প্রহার আর দ্বিগুণ জরিমানা। মাআরিফুল কুরআনের বর্ণনায়, শারীরিক শাস্তির পর চুরি করা মালের দ্বিগুণ দাম দিলে চোর ছাড়া পেত। ইবন যায়দ বলেন, নবীদের মধ্যে, ইয়াকুব (আঃ) ও তাঁর ছেলেদের কাছে, চোরকে তার চুরির দায়ে দাস হিসেবে রেখে দেওয়া হতো।"
          },
          {
            "en": "So the brothers' own answer in 12:75 did what the king's law could not. Muhammad ibn Ka'b, in at-Tabari, says the king's law did not take a thief at all, but Allah arranged for the brother until they said what they said, and he took them at their word. At-Tabari judges that the sayings differ in wording but are close in meaning, for whoever is taken under a king's authority is taken under his ruling. The root of din, he adds, is obedience.",
            "bn": "তাহলে ১২:৭৫ আয়াতে ভাইদের নিজেদের জবাবই সেই কাজ করল, যা রাজার আইন করতে পারত না। তাবারীর উদ্ধৃতিতে মুহাম্মাদ ইবন কা'ব বলেন, রাজার আইনে চোরকে আটকানোর ব্যবস্থাই ছিল না। কিন্তু আল্লাহ ভাইটির জন্য এমন ব্যবস্থা করলেন যে তারা নিজেরাই যা বলার বলে ফেলল, আর তিনি তাদের সেই কথাতেই ধরলেন। তাবারীর বিচারে মতগুলোর শব্দ আলাদা, অর্থ কাছাকাছি। কারণ রাজার ক্ষমতার অধীনে যাকে ধরা হয়, তাকে ধরা হয় রাজার রায়েই। তিনি যোগ করেন, দীন শব্দের মূল অর্থ আনুগত্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Only Because Allah Willed It",
          "bn": "শুধু আল্লাহর ইচ্ছাতেই"
        },
        "p": [
          {
            "en": "Illa an yasha'a Allah: except that Allah willed. At-Tabari reads the exception as Allah's plan at work: Yusuf (AS) could not hold his brother under the ruler of his land except as Allah willed, through the arrangement He made, until the brothers and companions of the owner of the bag that held the measure handed him over by their own verdict, and did so willingly. As-Suddi, in at-Tabari, puts it as but We brought it about for him, by their saying he is its recompense.",
            "bn": "ইল্লা আঁই ইয়াশাআল্লাহ: আল্লাহ চাইলে ভিন্ন কথা। তাবারী এই ব্যতিক্রমকে পড়েন আল্লাহর পরিকল্পনার কাজ হিসেবে। নিজের দেশের শাসকের অধীনে ইউসুফ (আঃ) ভাইকে আটকে রাখতে পারতেন না, যদি না আল্লাহ তাঁর করা ব্যবস্থার মাধ্যমে তা চাইতেন। সেই ব্যবস্থায় যার বস্তায় পাত্র মিলল, তার ভাই আর সঙ্গীরাই নিজেদের রায়ে তাকে তুলে দিল, আর খুশিমনেই দিল। তাবারীর উদ্ধৃতিতে সুদ্দী বলেন, বরং আমি তার জন্য ঘটিয়ে দিলাম, তাদের এই কথার মাধ্যমে যে সে-ই এর প্রতিদান।"
          },
          {
            "en": "Al-Baghawi says Yusuf (AS) could not have detained his brother under the king's ruling but for Allah's gentle arranging, which put on the brothers' tongues that a thief's penalty is to be held as a slave. Al-Qurtubi's reading is that Allah willed the cup to be placed in his bag as a reason and an excuse for him. Ibn Kathir says Allah brought it about that the brothers bound themselves to what they bound themselves to, while Yusuf knew this was their law, and that this is why Allah praised him with the next words.",
            "bn": "বাগাভী বলেন, আল্লাহর সূক্ষ্ম ব্যবস্থা না থাকলে রাজার বিধানে ইউসুফ (আঃ) ভাইকে আটকাতে পারতেন না। সেই ব্যবস্থা হলো, ভাইদের মুখ দিয়েই বের হলো যে চোরের সাজা তাকে দাস করে রাখা। কুরতুবীর পাঠ: আল্লাহ চাইলেন পাত্রটা তার বস্তায় রাখা হোক, যাতে তা ইউসুফের জন্য একটা কারণ ও অজুহাত হয়। ইবন কাসীর বলেন, আল্লাহ এমন ব্যবস্থা করলেন যে ভাইয়েরা নিজেরাই নিজেদের উপর দায় চাপিয়ে নিল। আর ইউসুফ জানতেন এটা তাদের শরীয়তের বিধান। ইবন কাসীরের মতে এ কারণেই আল্লাহ পরের কথায় তাঁর প্রশংসা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Jurists Drew From It",
          "bn": "ফকীহরা এখান থেকে যা নিয়েছেন"
        },
        "p": [
          {
            "en": "Al-Qurtubi finds in thus did We plan for Yusuf the permissibility of reaching aims by stratagems, hiyal, so long as they do not oppose the Shari'a or demolish a principle. He sets this against the position he reports from Abu Hanifa, of allowing stratagems even where they break with the principles. He then records a consensus: before a zakat year is complete a man may sell or give away his wealth, provided he does not intend to escape the charity; once the year has turned, contriving and reducing are not lawful.",
            "bn": "'এভাবেই আমি ইউসুফের জন্য ব্যবস্থা করেছিলাম' কথা থেকে কুরতুবী এই মত নেন যে কৌশল বা হিয়ালের মাধ্যমে উদ্দেশ্যে পৌঁছানো জায়েয, যতক্ষণ তা শরীয়তের বিরোধী না হয় এবং কোনো মূলনীতি ভেঙে না দেয়। এর বিপরীতে তিনি আবু হানীফা থেকে একটি মত উল্লেখ করেন, যাতে মূলনীতির বিরোধী হলেও কৌশল অনুমোদিত। তারপর তিনি একটি ঐকমত্য লিপিবদ্ধ করেন। যাকাতের বছর পূর্ণ হওয়ার আগে কেউ নিজের সম্পদ বিক্রি বা দান করতে পারে, যদি যাকাত থেকে পালানোর নিয়ত না থাকে। বছর পূর্ণ হয়ে গেলে কৌশল করা বা কমিয়ে দেখানো বৈধ নয়।"
          },
          {
            "en": "Malik and Abu Hanifa differed here. Malik held that zakat is still due if a man disposes of wealth a month or so before the year with the intent to escape it; Abu Hanifa held that such intent a day before does not harm him. Al-Qurtubi then points to al-Bukhari's Book of Stratagems. The first report he names there is from Anas, that Abu Bakr wrote for him the zakat regulations, in Sahih al-Bukhari 6955: what is separate is not to be combined, nor what is combined separated, for fear of the charity. It concerns zakat and is not attached to this verse.",
            "bn": "এখানে মালিক আর আবু হানীফার মতভেদ। মালিকের মতে, কেউ যদি যাকাত এড়ানোর নিয়তে বছর পূর্ণ হওয়ার এক মাস বা কাছাকাছি সময় আগে সম্পদ হাতছাড়া করে, বছর শেষে তার উপর যাকাত আসবেই। আবু হানীফার মতে, এক দিন আগে এমন নিয়ত করলে তার ক্ষতি নেই। এরপর কুরতুবী বুখারীর 'কৌশল অধ্যায়'-এর দিকে ইঙ্গিত করেন। সেখানে তিনি প্রথম যে বর্ণনার নাম নেন, তা আনাস (রাঃ)-এর: আবু বকর (রাঃ) তাঁর জন্য যাকাতের বিধান লিখে দিয়েছিলেন। সহীহ বুখারী ৬৯৫৫-এর ভাষায়: যাকাতের ভয়ে আলাদাকে একত্র করা যাবে না, আর একত্রকে আলাদা করা যাবে না। বর্ণনাটি যাকাত বিষয়ক, এই আয়াতের সঙ্গে এর সরাসরি সম্পর্ক নেই।"
          },
          {
            "en": "Al-Qurtubi quotes al-Muhallab: al-Bukhari's aim is that whoever contrives to drop zakat bears the sin of it. He also quotes Ibn al-Arabi, who reports that some Shafi'i scholars took this verse as proof for stratagems towards what is permitted and for recovering rights, and calls that a grave mistake. Ma'arif al-Qur'an allows changing the form of a transaction for a reason the Shari'a recognises, but says any device that voids a ruling, such as dodging zakat or an unneeded journey to escape a fast, is haram by consensus.",
            "bn": "কুরতুবী মুহাল্লাবের কথা উদ্ধৃত করেন: বুখারীর উদ্দেশ্য হলো, যে কৌশল করে যাকাত বাদ দিতে চায়, গুনাহ তার ঘাড়েই। তিনি ইবনুল আরাবীর কথাও আনেন। ইবনুল আরাবী জানান, শাফেয়ী মাযহাবের কিছু আলেম এই আয়াতকে বৈধ কাজের জন্য কৌশল আর পাওনা আদায়ের কৌশলের দলিল হিসেবে নিয়েছেন। তিনি একে বলেন বড় ভুল। মাআরিফুল কুরআন শরীয়তসম্মত কারণে লেনদেনের ধরন বদলানোর অনুমতি দেয়। তবে বলে, যে কৌশল কোনো বিধানকে অকেজো করে দেয়, যেমন যাকাত ফাঁকি দেওয়া বা রোজা এড়াতে অপ্রয়োজনীয় সফর, তা সর্বসম্মতভাবে হারাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Above Every Knower, One Who Knows",
          "bn": "প্রত্যেক জ্ঞানীর উপরে আরেকজন"
        },
        "p": [
          {
            "en": "Narfa'u darajatin man nasha': We raise in degrees whom We will. At-Tabari notes two readings, darajati man in construct and darajatin with nunation, both meaning that Allah raises whom He wills in rank above others, as He raised Yusuf (AS) above his brothers. Ibn Jurayj says Yusuf and his brothers were all given knowledge, and Yusuf was raised above them in it. As-Sa'di names beneficial knowledge and knowing the ways that lead to their ends; al-Qurtubi, knowledge and faith. Ibn Kathir reads the phrase as praise, and pairs it with 58:11.",
            "bn": "নারফাউ দারাজাতিম মান নাশা: আমি যাকে চাই মর্যাদায় উঁচু করি। তাবারী দুটি কিরাআত উল্লেখ করেন, দারাজাতি মান আর দারাজাতিন। দুটোর অর্থই হলো, আল্লাহ যাকে চান অন্যদের উপরে মর্যাদা দেন, যেমন ইউসুফ (আঃ)-কে তাঁর ভাইদের উপরে দিয়েছিলেন। ইবন জুরাইজ বলেন, ইউসুফ আর তাঁর ভাইয়েরা সবাই জ্ঞান পেয়েছিলেন, তবে জ্ঞানে ইউসুফকে তাদের উপরে তোলা হয়েছিল। সা'দী বলেন উপকারী জ্ঞান আর লক্ষ্যে পৌঁছানোর পথ চেনার কথা। কুরতুবী বলেন জ্ঞান ও ঈমানের কথা। ইবন কাসীর বাক্যটিকে প্রশংসা হিসেবে পড়েন এবং ৫৮:১১ আয়াতের সঙ্গে মিলিয়ে দেখান।"
          },
          {
            "en": "Wa fawqa kulli dhi 'ilmin 'alim: and above every possessor of knowledge is one more knowing. Al-Hasan, in at-Tabari and Ibn Kathir, says there is no scholar without one above him, until knowledge ends with Allah; Qatada adds that from Him it began and to Him it returns. Ibn Abbas, reading the 'alim as Allah Himself, told a man who quoted the verse in wonder: a poor thing you said; Allah is the Knowing, above every knower. At-Tabari also reports that when a man corrected Ali, he said: you are right and I was wrong, and above every possessor of knowledge is one more knowing.",
            "bn": "ওয়া ফাওকা কুল্লি যী ইলমিন আলীম: আর প্রত্যেক জ্ঞানীর উপরে আছেন আরও জ্ঞানী একজন। তাবারী ও ইবন কাসীরের উদ্ধৃতিতে হাসান বাসরী বলেন, এমন কোনো আলেম নেই যার উপরে আরেকজন নেই, শেষে জ্ঞান গিয়ে থামে আল্লাহর কাছে। কাতাদা যোগ করেন, জ্ঞান শুরু হয়েছে তাঁর থেকেই, ফিরেও যায় তাঁর কাছে। ইবন আব্বাস (রাঃ) এখানে আলীম বলতে সরাসরি আল্লাহকে বুঝতেন। এক ব্যক্তি বিস্ময়ে আয়াতটি আওড়ালে তিনি বলেন, খারাপ বললে। আল্লাহই আলীম, তিনি প্রত্যেক জ্ঞানীর উপরে। তাবারী আরও বর্ণনা করেন, এক ব্যক্তি আলী (রাঃ)-এর ভুল ধরিয়ে দিলে তিনি বলেন, তুমি ঠিক বলেছ, আমি ভুল করেছি। আর প্রত্যেক জ্ঞানীর উপরে আছেন আরও বেশি জ্ঞানী।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge Held Lightly",
          "bn": "জ্ঞান বহনের আদব"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse narrates what Allah arranged for a prophet inside one story, and the penalty that held Binyamin was the brothers' own law. It licenses no stratagem today to evade a right, a debt, zakat or any ruling, and no trap laid for anyone. What the jurists drew from it, and where they disagreed, belongs to qualified scholars weighing each case with its conditions, not to anyone looking for a way around what they owe.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি কাহিনির ভেতরে একজন নবীর জন্য আল্লাহর করা ব্যবস্থার বর্ণনা দেয়। আর বিনইয়ামীনকে যে বিধানে আটকানো হলো, তা ছিল ভাইদের নিজেদের বিধান। আজ কারও হক, ঋণ, যাকাত বা কোনো বিধান এড়ানোর কৌশলের অনুমতি এ আয়াত দেয় না। কারও জন্য ফাঁদ পাতারও অনুমতি দেয় না। ফকীহরা এখান থেকে যা বের করেছেন, আর যেখানে তাঁরা একমত হননি, তার বিচার যোগ্য আলেমদের কাজ, যাঁরা প্রতিটি ক্ষেত্র তার শর্তসহ ওজন করেন। নিজের দায় এড়ানোর পথ খুঁজছে এমন কারও কাজ এটা নয়।"
          },
          {
            "en": "Then the verse turns to the reader. Yusuf (AS) was raised by knowledge, yet the same sentence places one above him, and Ali could say I was wrong without losing anything. Whatever I know, someone knows more, and Allah knows all of it. The brothers could not see where their own words would lead, and I cannot see where my days are heading. Knowledge carried with humility and trust in a plan I cannot see grow from the same root.",
            "bn": "এরপর আয়াত পাঠকের দিকে ফেরে। জ্ঞানের কারণে ইউসুফ (আঃ)-এর মর্যাদা বাড়ল, অথচ একই বাক্য তাঁর উপরেও আরেকজনকে রাখল। আলী (রাঃ) 'আমি ভুল করেছি' বলে কিছুই হারাননি। আমি যা-ই জানি, কেউ না কেউ তার চেয়ে বেশি জানে, আর আল্লাহ জানেন সবটাই। নিজেদের কথা কোথায় গিয়ে দাঁড়াবে, ভাইয়েরা তা দেখতে পায়নি। আমার দিনগুলো কোন দিকে যাচ্ছে, আমিও দেখতে পাই না। বিনয়ের সঙ্গে জ্ঞান বহন করা আর না-দেখা পরিকল্পনায় ভরসা রাখা, দুটোর শিকড় একই।"
          }
        ]
      }
    ]
  },
  "12:83": {
    "sections": [
      {
        "h": {
          "en": "The Same Words, Years Later",
          "bn": "বহু বছর পর একই কথা"
        },
        "p": [
          {
            "en": "The verse opens with qala, he said, and says nothing of the journey home. At-Tabari notes that something has been left out of the telling: the brothers of Binyamin went back to their father, Rubil stayed behind, and they gave him the news; when they told him that Binyamin had stolen, he said this. Al-Baghawi marks the same compression. They returned and repeated what their eldest had told them to say in 12:81 and 12:82: your son has stolen; ask the town and the caravan; we are truthful.",
            "bn": "আয়াতটি শুরু হয় 'কালা', তিনি বললেন, দিয়ে। ফেরার পথের কোনো কথা এতে নেই। তাবারী বলেন, এখানে বর্ণনার একটা অংশ উহ্য রাখা হয়েছে। বিনয়ামীনের ভাইয়েরা পিতার কাছে ফিরে গেল, রূবীল পেছনে রয়ে গেল, আর তারা পিতাকে খবরটা দিল। বিনয়ামীন চুরি করেছে, এ কথা শুনেই তিনি এ জবাব দিলেন। বাগাভীও এই সংক্ষেপের কথা বলেন। তারা ফিরে এসে সেটাই বলল, যা ১২:৮১ ও ১২:৮২ আয়াতে বড় ভাই তাদের শিখিয়ে দিয়েছিল: আপনার ছেলে চুরি করেছে, জনপদ আর কাফেলাকে জিজ্ঞেস করুন, আমরা সত্যবাদী।"
          },
          {
            "en": "Ibn Kathir begins with the echo: he said to them what he had said when they came with false blood on Yusuf's shirt. The seven Arabic words after qala are the words of 12:18 exactly: bal sawwalat lakum anfusukum amran fa-sabrun jamil. Then the two verses part. 12:18 closes by asking Allah's help against what the brothers describe; 12:83 closes with a hope and two names of Allah. As-Sa'di describes the father on hearing the news: his grief grew intense and his sorrow doubled.",
            "bn": "ইবন কাসীর শুরু করেন এই প্রতিধ্বনি দিয়ে। ইউসুফের জামায় মিথ্যা রক্ত নিয়ে তারা যখন এসেছিল, তখন যা বলেছিলেন, এবারও তাদের তা-ই বললেন। 'কালা'-র পরের সাতটি আরবি শব্দ হুবহু ১২:১৮ আয়াতের: বাল সাওওয়ালাত লাকুম আনফুসুকুম আমরা, ফাসাবরুন জামীল। এরপর দুই আয়াতের পথ আলাদা হয়ে যায়। ১২:১৮ শেষ হয় ভাইদের বানানো কথার বিপরীতে আল্লাহর সাহায্য চেয়ে। ১২:৮৩ শেষ হয় একটি আশা আর আল্লাহর দুটি নাম দিয়ে। খবর শুনে পিতার কী অবস্থা হলো, সা'দী তা বলেন: তাঁর শোক তীব্র হলো, দুঃখ দ্বিগুণ হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A True Report, an Old Shadow",
          "bn": "সত্য খবর, পুরোনো ছায়া"
        },
        "p": [
          {
            "en": "What makes the repetition striking is that this time the brothers were not inventing what they reported. The cup had been drawn from Binyamin's bag in 12:76, and in 12:81 they testify only to what they know. Ma'arif al-Qur'an says it outright: since Ya'qub (AS) knew they had lied to him before in Yusuf's case, he could not believe them this time either, though in fact this time they had told him no lie.",
            "bn": "পুনরাবৃত্তিটা চোখে পড়ার মতো, কারণ এবার ভাইয়েরা কিছু বানিয়ে বলেনি। ১২:৭৬ আয়াতে বিনয়ামীনের বস্তা থেকেই পাত্রটি বের করা হয়েছিল। ১২:৮১ আয়াতে তারা কেবল সেটুকুরই সাক্ষ্য দেয়, যা তারা জানে। মাআরিফুল কুরআন কথাটা সরাসরি বলে। ইউসুফের ব্যাপারে তারা আগে মিথ্যা বলেছিল, ইয়াকুব (আঃ) তা জানতেন। তাই এবারও তিনি তাদের বিশ্বাস করতে পারেননি, যদিও এবার আসলে তারা কোনো মিথ্যা বলেনি।"
          },
          {
            "en": "Ibn Ishaq's report, in at-Tabari and in Ibn Kathir, gives the father's thought: when they brought him this, he suspected them and supposed it was like what they had done with Yusuf. As-Sa'di says the same in his own words: he suspected them in this affair as he had suspected them in the first. The Muyassar writes the suspicion into its gloss: your souls, which command evil, made fair to you a plot you devised, as you did before with Yusuf.",
            "bn": "পিতার মনে কী ভাবনা এসেছিল, তা পাওয়া যায় ইবন ইসহাকের বর্ণনায়, তাবারী ও ইবন কাসীর দুজনেই যা এনেছেন। তারা যখন এ খবর নিয়ে এল, তিনি তাদের সন্দেহ করলেন। ভাবলেন, ইউসুফের সঙ্গে তারা যা করেছিল, এটাও তেমনই কিছু। সা'দী নিজের ভাষায় একই কথা বলেন: প্রথম ঘটনায় যেমন তাদের সন্দেহ করেছিলেন, এ ঘটনাতেও তেমনি করলেন। মুয়াসসার সন্দেহটাকে ব্যাখ্যার ভেতরেই বসিয়ে দেয়: মন্দের দিকে ঠেলে দেওয়া তোমাদের মন একটা চক্রান্তকে তোমাদের চোখে সুন্দর করে দেখিয়েছে, যেমন আগে ইউসুফের সঙ্গে করেছিলে।"
          },
          {
            "en": "On these readings the weight falls on the brothers. A deed done years before now stands between them and their father, so that a true account arrives already doubted. Once they asked him to believe a shirt; now they ask him to believe a town and a caravan. The verse shows what a lie goes on costing, long after it was told.",
            "bn": "এসব ব্যাখ্যায় ভারটা পড়ে ভাইদের উপর। বহু বছর আগের এক কাজ এখন তাদের আর পিতার মাঝখানে দাঁড়িয়ে আছে। তাই সত্য খবরও পৌঁছায় সন্দেহ মাথায় নিয়ে। একসময় তারা পিতাকে একটা জামা বিশ্বাস করাতে চেয়েছিল। এখন চাইছে একটা জনপদ আর একটা কাফেলার কথা বিশ্বাস করাতে। মিথ্যা বলার অনেক পরেও তার দাম দিয়ে যেতে হয়, আয়াতটি তা দেখিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Matter This Time?",
          "bn": "এবার কোন ব্যাপার?"
        },
        "p": [
          {
            "en": "What is the amr, the matter, this time? The commentators answer differently. Al-Baghawi names something the brothers had really done: your souls made fair to you the carrying of your brother to Egypt, in pursuit of a quick gain. It was they who had asked, in 12:63, that Binyamin be sent with them so that they could be given grain. On this reading the matter is not a theft but a request.",
            "bn": "এবার 'আমর', অর্থাৎ ব্যাপারটা কী? তাফসীরকারেরা ভিন্ন ভিন্ন উত্তর দেন। বাগাভী এমন একটা কাজের কথা বলেন, যা ভাইয়েরা সত্যিই করেছিল। তাঁর ব্যাখ্যায়: তোমাদের মন তোমাদের চোখে সুন্দর করে দেখিয়েছে ভাইকে মিসরে নিয়ে যাওয়া, তাড়াতাড়ি কিছু লাভের আশায়। ১২:৬৩ আয়াতে তারাই চেয়েছিল, বিনয়ামীনকে তাদের সঙ্গে পাঠানো হোক, যাতে শস্য পাওয়া যায়। এ ব্যাখ্যায় ব্যাপারটা চুরি নয়, সেই আবদার।"
          },
          {
            "en": "Ibn Kathir reports a second explanation from some people: because this new deed of theirs grew out of their earlier deed, the ruling on that deed was carried over to it, and so his words were sound. The earlier wrong colours the later event. Ibn Ishaq and as-Sa'di speak of suspicion; this view speaks of a ruling carried forward, without calling the second report a lie.",
            "bn": "ইবন কাসীর কিছু লোকের আরেকটি ব্যাখ্যা আনেন। তাদের এই নতুন কাজটা যেহেতু আগের কাজের উপর দাঁড়িয়ে, তাই আগের কাজের বিধান এর উপরও টেনে আনা হলো। সেই হিসেবে তাঁর কথাটা ঠিকই ছিল। এখানে আগের অন্যায় পরের ঘটনার রং বদলে দেয়। ইবন ইসহাক ও সা'দী বলেন সন্দেহের কথা। আর এ মত বলে আগের বিধান সামনে টেনে আনার কথা। দ্বিতীয় খবরটা মিথ্যা ছিল, এমন দাবি সে মত করে না।"
          },
          {
            "en": "Al-Qurtubi reads it a third way and turns the sentence towards Binyamin: your souls made it seem to you that my son stole, and he did not steal; that happened only for a matter Allah wills. Ma'arif al-Qur'an offers the same possibility: Ya'qub (AS) may have meant what was arranged in Egypt, where Binyamin was held on a charge of theft for a purpose whose outcome would unfold later, and in a better form. The article keeps these readings side by side and chooses none.",
            "bn": "কুরতুবী তৃতীয় একভাবে পড়েন, আর বাক্যটাকে ঘুরিয়ে দেন বিনয়ামীনের দিকে। তাঁর ব্যাখ্যায়: তোমাদের মন তোমাদের বুঝিয়েছে যে আমার ছেলে চুরি করেছে, অথচ সে চুরি করেনি। এটা ঘটেছে শুধু আল্লাহর চাওয়া একটা উদ্দেশ্যে। মাআরিফুল কুরআনও একই সম্ভাবনার কথা বলে। ইয়াকুব (আঃ) হয়তো মিসরে সাজানো সেই ব্যবস্থার দিকেই ইঙ্গিত করেছিলেন, যেখানে একটা উদ্দেশ্যে চুরির অভিযোগে বিনয়ামীনকে আটকানো হয়েছিল। তার ফল পরে আরও সুন্দর রূপে প্রকাশ পাবে। এ লেখা ব্যাখ্যাগুলো পাশাপাশি রাখে, কোনোটিকে বেছে নেয় না।"
          },
          {
            "en": "Ma'arif al-Qur'an closes its discussion by saying that both sides spoke truly. On the father's side, there had been no real theft, Binyamin had not really been arrested for theft, and the truth of the matter lay elsewhere; that was true in its place. On the sons' side, what they said, as they knew it, was not wrong either. The scene holds two honest positions: men reporting what they saw, and a father sensing that what they saw was not the whole of it.",
            "bn": "মাআরিফুল কুরআন আলোচনা শেষ করে এই বলে যে দুই পক্ষই সত্য বলেছিল। পিতার দিক থেকে দেখলে, আসলে কোনো চুরি হয়নি, চুরির জন্য বিনয়ামীন সত্যিকার অর্থে আটকও হননি। আসল ঘটনা ছিল অন্য জায়গায়, আর সে হিসেবে তাঁর কথা ছিল ঠিক। ছেলেদের দিক থেকে দেখলে, নিজেরা যতটুকু জানত, সেটুকুই বলেছিল। সেটাও ভুল ছিল না। দৃশ্যটিতে তাই দুটি সৎ অবস্থান। একদিকে কিছু মানুষ, যারা নিজের চোখে দেখা ঘটনা জানাচ্ছে। অন্যদিকে এক পিতা, যাঁর মন বলছে, তারা যা দেখেছে, সেটাই পুরো ঘটনা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience Over More Than One",
          "bn": "একজনের বেশি হারানোর সবর"
        },
        "p": [
          {
            "en": "Fa-sabrun jamil is explained at 12:18, and the commentators here mostly point back to it. Al-Qurtubi says so in as many words: my course is beautiful patience, or beautiful patience is more fitting for me, as at the beginning of the surah. What is new is what the patience has to carry. At-Tabari's gloss on 12:83 is in the plural: my patience over what has befallen me in the loss of my children. The first time it was one son.",
            "bn": "ফাসাবরুন জামীলের ব্যাখ্যা ১২:১৮ আয়াতেই এসেছে, আর এখানে তাফসীরকারেরা মূলত সেদিকেই ইশারা করেন। কুরতুবী তা সরাসরি বলেন: আমার পথ সুন্দর সবর, অথবা সুন্দর সবরই আমার জন্য শ্রেয়, যেমন সূরার শুরুতে বলা হয়েছে। নতুন বিষয় হলো সবরকে এবার কী বইতে হবে। ১২:৮৩ আয়াতে তাবারীর ব্যাখ্যা বহুবচনে: আমার সন্তানদের হারিয়ে যা আমার উপর এসেছে, তার উপর আমার সবর। প্রথমবার ছিল একটি ছেলে।"
          },
          {
            "en": "As-Sa'di describes the order of what follows. He took refuge first in beautiful patience, whose marks were given at 12:18; then he turned to the hope of relief, when he saw that the matter had grown severe and the distress had reached its end. Patience comes first in his reading, and hope rises from inside it.",
            "bn": "এরপর কী কী এল, তার ক্রম সা'দী তুলে ধরেন। তিনি প্রথমে আশ্রয় নিলেন সুন্দর সবরে, যার পরিচয় ১২:১৮ আয়াতেই এসেছে। তারপর যখন দেখলেন ব্যাপারটা কঠিন হয়ে গেছে আর কষ্ট শেষ সীমায় পৌঁছেছে, তখন মুক্তির আশার দিকে ফিরলেন। সা'দীর ব্যাখ্যায় সবর আগে আসে, আর আশা জন্ম নেয় তার ভেতর থেকেই।"
          },
          {
            "en": "Al-Qurtubi adds a saying of al-Hasan, through Qatadah: no two draughts that a servant swallows are dearer to Allah than a draught of calamity swallowed with good patience and good consolation, and a draught of anger swallowed with forbearance and pardon. This is al-Hasan's word, not a hadith. The verse sets the first kind before us: a fresh calamity, on top of an old one, received with the words of patience a second time.",
            "bn": "কুরতুবী কাতাদার সূত্রে হাসানের একটি কথা আনেন। বান্দা যত ঢোক গেলে, তার মধ্যে দুটি ঢোক আল্লাহর কাছে সবচেয়ে প্রিয়। একটি বিপদের ঢোক, যা সে গেলে উত্তম সবর আর উত্তম সান্ত্বনার সঙ্গে। আরেকটি রাগের ঢোক, যা সে গেলে সহনশীলতা আর ক্ষমার সঙ্গে। এটি হাসানের নিজের কথা, হাদীস নয়। আয়াতটি প্রথম ঢোকটির ছবি সামনে আনে: পুরোনো বিপদের উপর নতুন বিপদ, আর দ্বিতীয়বারও তাকে গ্রহণ করা সবরের কথা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Bihim: Three, Not Two",
          "bn": "বিহিম: দুজন নয়, তিনজন"
        },
        "p": [
          {
            "en": "'Asa Allahu an ya'tiyani bihim jami'an: perhaps Allah will bring them to me, all together. The commentators agree on whom the word gathers. Qatadah and Ibn Ishaq, both in at-Tabari: Yusuf, his brother and Rubil. Al-Baghawi and as-Sa'di: Yusuf, Binyamin and their brother who stayed in Egypt. The Muyassar: my three sons, Yusuf, his full brother, and their eldest, who stayed behind for his brother's sake.",
            "bn": "আসাল্লাহু আঁই ইয়াতিয়ানী বিহিম জামীআ: হয়তো আল্লাহ তাদের সবাইকে একসঙ্গে আমার কাছে এনে দেবেন। শব্দটি কাদের একত্র করে, সে ব্যাপারে তাফসীরকারেরা একমত। তাবারীতে কাতাদা ও ইবন ইসহাক দুজনেই বলেন: ইউসুফ, তাঁর ভাই আর রূবীল। বাগাভী ও সা'দীর ভাষায়: ইউসুফ, বিনয়ামীন আর তাদের সেই ভাই, যে মিসরে রয়ে গেছে। মুয়াসসার বলে: আমার তিনজন ছেলে। ইউসুফ, তাঁর সহোদর ভাই, আর তাদের বড় ভাই, যে ভাইয়ের জন্য পেছনে থেকে গেছে।"
          },
          {
            "en": "Al-Qurtubi explains why the word is bihim, them, at all: because they are three, Yusuf, his brother, and the brother who stayed behind for his brother's sake, the speaker of I will never leave the land in 12:80. Ibn Kathir adds why that brother stayed. He was waiting in Egypt for Allah's command concerning him: either his father would be content with him and order him home, or he would take his brother away in secret.",
            "bn": "শব্দটি কেন 'বিহিম', তাদের, সেটা কুরতুবী ব্যাখ্যা করেন: কারণ তারা তিনজন: ইউসুফ, তাঁর ভাই, আর সেই ভাই, যে ভাইয়ের জন্য পেছনে থেকে গেছে। ১২:৮০ আয়াতে 'আমি কিছুতেই এ দেশ ছাড়ব না' কথাটি তারই। সে ভাই কেন থেকে গেল, ইবন কাসীর তা যোগ করেন। নিজের ব্যাপারে আল্লাহর ফয়সালার অপেক্ষায় সে মিসরে ছিল। হয় পিতা তার উপর সন্তুষ্ট হয়ে তাকে ফিরে আসতে বলবেন, নয়তো সে গোপনে ভাইকে নিয়ে আসবে।"
          },
          {
            "en": "So the hope is wider than the news. He had just heard of a son held and another who would not come home, yet the prayer reaches past both to the son lost years before, of whom no word had come since. After a second blow he does not narrow what he asks for. He asks for all of them, together.",
            "bn": "আশাটা তাই খবরের চেয়েও বড়। তিনি সবে শুনেছেন, এক ছেলে আটক, আরেক ছেলে ফিরবে না। অথচ দোয়াটা দুজনকে ছাড়িয়ে পৌঁছে যায় সেই ছেলের কাছে, যাকে বহু বছর আগে হারিয়েছেন, যার কোনো খবর তারপর আর আসেনি। দ্বিতীয় আঘাতের পরেও তিনি চাওয়াটা ছোট করেন না। সবাইকে চান, একসঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Yusuf Is Counted In",
          "bn": "ইউসুফকেও কেন গোনা হলো"
        },
        "p": [
          {
            "en": "Why count Yusuf among those to be brought back, when his brothers had long ago reported him eaten by a wolf? Al-Qurtubi answers that Ya'qub (AS) held that Yusuf had not died; only news of him had been cut off. He then explains the silence from Yusuf's side. Yusuf was carried off as a slave who had no say over himself; then the king bought him, and he was kept in his house, not seen by people; then he was imprisoned.",
            "bn": "বহু বছর আগে ভাইয়েরা তো জানিয়ে দিয়েছিল, ইউসুফকে নেকড়ে খেয়ে ফেলেছে। তবু যাদের ফিরে পাওয়ার আশা, তাদের মধ্যে ইউসুফকে কেন গোনা হলো? কুরতুবীর উত্তর: ইয়াকুব (আঃ)-এর বিশ্বাস ছিল, ইউসুফ মারা যাননি, শুধু তাঁর খবর আসা বন্ধ হয়ে গেছে। এরপর তিনি ইউসুফের দিক থেকে এই নীরবতার কারণ বলেন। ইউসুফকে নিয়ে যাওয়া হয়েছিল দাস হিসেবে, নিজের উপর যার কোনো এখতিয়ার ছিল না। তারপর রাজা তাঁকে কিনে নেন, আর তিনি তাঁর ঘরে থাকতেন, লোকের সামনে আসতেন না। তারপর তাঁকে কারাগারে পাঠানো হয়।"
          },
          {
            "en": "When Yusuf gained power, al-Qurtubi goes on, he found a way for his father to learn of him, and sent no messenger because he did not want his brothers to know of it, lest they keep the messenger from reaching their father. Ma'arif al-Qur'an hears a hint in this clause too: the hope for them all together may point to an outcome already taking shape.",
            "bn": "কুরতুবী আরও বলেন, ক্ষমতা হাতে পাওয়ার পর ইউসুফ এমন উপায় বের করলেন, যাতে পিতা তাঁর খবর জানতে পারেন। কোনো দূত পাঠাননি, কারণ চাননি ভাইয়েরা তা জানুক। জানলে তারা হয়তো দূতকে পিতার কাছে পৌঁছাতেই দিত না। মাআরিফুল কুরআন এ অংশেও একটি ইঙ্গিত দেখে। সবাইকে একসঙ্গে ফিরে পাওয়ার এ আশা হয়তো এমন এক পরিণতির দিকে ইশারা করে, যা তখনই আকার নিচ্ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "He Knows My Aloneness",
          "bn": "আমার একাকীত্বও তিনি জানেন"
        },
        "p": [
          {
            "en": "Innahu huwa al-'Alimu al-Hakim: it is He who is the Knowing, the Wise. The glosses of al-'Alim run close. Al-Qurtubi, Ibn Kathir and the Muyassar: knowing of my state. Al-Baghawi: of my grief and my anguish at losing them. As-Sa'di: He knows my state, my need of His relief and favour, and how wholly I depend on His kindness. At-Tabari's list is the fullest: knowing of my aloneness, of their loss and my grief over them, and of the truth of what they say as against its falsehood.",
            "bn": "ইন্নাহু হুওয়াল আলীমুল হাকীম: তিনিই সর্বজ্ঞ, প্রজ্ঞাময়। 'আলীম' শব্দের ব্যাখ্যাগুলো কাছাকাছি। কুরতুবী, ইবন কাসীর আর মুয়াসসার বলেন: আমার অবস্থা তিনি জানেন। বাগাভী বলেন: তাদের হারিয়ে আমার শোক আর মনের যন্ত্রণা তিনি জানেন। সা'দী বলেন: তিনি জানেন আমার অবস্থা, তাঁর দেওয়া মুক্তি ও অনুগ্রহের জন্য আমার প্রয়োজন, আর তাঁর দয়ার উপর আমি কতটা নির্ভরশীল। সবচেয়ে বিস্তারিত তালিকা তাবারীর। তিনি জানেন আমার একাকীত্ব, তাদের হারানো আর তাদের জন্য আমার শোক। আর জানেন, তারা যা বলছে তার কোনটা সত্য, কোনটা মিথ্যা।"
          },
          {
            "en": "At-Tabari's last clause matters here. A father who cannot check his sons' account leaves its truth with the One who knows it. Al-Hakim is glossed as wise in His management of creation by at-Tabari, al-Baghawi and the Muyassar; in His acts, His decree and His measuring out by Ibn Kathir; in what He decrees by al-Qurtubi. As-Sa'di: He who has set for everything a measure and for every matter an end.",
            "bn": "তাবারীর শেষ কথাটি এখানে গুরুত্বপূর্ণ। যে পিতা ছেলেদের কথা যাচাই করতে পারছেন না, তিনি তার সত্যতার ভার রেখে দেন সেই সত্তার কাছে, যিনি তা জানেন। 'হাকীম' শব্দের ব্যাখ্যায় তাবারী, বাগাভী আর মুয়াসসার বলেন: সৃষ্টির ব্যবস্থাপনায় তিনি প্রজ্ঞাময়। ইবন কাসীর বলেন: তাঁর কাজে, তাঁর ফয়সালায় আর তাকদীরে। কুরতুবী বলেন: তিনি যা ফয়সালা করেন তাতে। সা'দীর ভাষায়: তিনি প্রতিটি জিনিসের একটা পরিমাণ আর প্রতিটি ব্যাপারের একটা শেষ ঠিক করে রেখেছেন।"
          },
          {
            "en": "The pair frames the story. In 12:6 Ya'qub (AS) told the young Yusuf, after hearing his dream, that your Lord is Knowing, Wise. Here, with three sons gone from him, he says it again of the same Lord. And in 12:100, with his parents raised on the throne and the dream fulfilled, Yusuf (AS) closes his words with the very phrase of this verse: innahu huwa al-'Alimu al-Hakim.",
            "bn": "এই নামজোড়া গোটা কাহিনিকে ঘিরে রেখেছে। ১২:৬ আয়াতে স্বপ্নের কথা শুনে ইয়াকুব (আঃ) কিশোর ইউসুফকে বলেছিলেন, তোমার রব সর্বজ্ঞ, প্রজ্ঞাময়। এখানে তিনজন ছেলেই কাছ থেকে দূরে, আর তিনি একই রবের ব্যাপারে আবার সেই কথা বলেন। আর ১২:১০০ আয়াতে, যখন বাবা-মাকে সিংহাসনে তোলা হয়েছে আর স্বপ্ন সত্য হয়েছে, ইউসুফ (আঃ) নিজের কথা শেষ করেন হুবহু এ আয়াতের বাক্যে: ইন্নাহু হুওয়াল আলীমুল হাকীম।"
          }
        ]
      },
      {
        "h": {
          "en": "At the Second Shock",
          "bn": "দ্বিতীয় আঘাতে"
        },
        "p": [
          {
            "en": "No tafsir fetched for this verse attaches a sound hadith to it. Al-Qurtubi gives one report raised to the Prophet ﷺ, whoever spreads his grief abroad has not been patient, through Muqatil ibn Sulayman from 'Ata' from Abu Hurayra, with no grading, and it is not relied on here. He also refers back to his remark under al-Baqara that patience is at the first shock. Those words close a narration in al-Bukhari that is general, about a woman at a grave, and not attached to this verse.",
            "bn": "এ আয়াতের জন্য আনা কোনো তাফসীর এর সঙ্গে কোনো সহীহ হাদীস জুড়ে দেয় না। কুরতুবী নবী ﷺ পর্যন্ত পৌঁছানো একটি বর্ণনা আনেন: যে নিজের শোক চারদিকে ছড়িয়ে দেয়, সে সবর করেনি। এর সূত্র মুকাতিল ইবন সুলাইমান থেকে আতা হয়ে আবু হুরাইরা (রাঃ)। কোনো মান উল্লেখ নেই, তাই এখানে এর উপর ভর করা হয়নি। কুরতুবী সূরা বাকারায় তাঁর একটি কথার দিকেও ইশারা করেন: সবর হলো প্রথম আঘাতের সময়। এ কথাগুলো দিয়েই শেষ হয় বুখারীর একটি বর্ণনা। সেটি সাধারণ, কবরের পাশে এক নারীকে নিয়ে, এ আয়াতের সঙ্গে যুক্ত নয়।"
          },
          {
            "en": "In al-Bukhari's wording (1283), Anas ibn Malik narrated: \"The Prophet (ﷺ) passed by a woman who was weeping beside a grave. He told her to fear Allah and be patient. She said to him, 'Go away, for you have not been afflicted with a calamity like mine.' And she did not recognize him. Then she was informed that he was the Prophet (ﷺ). so she went to the house of the Prophet (ﷺ) and there she did not find any guard. Then she said to him, 'I did not recognize you.' He said, 'Verily, the patience is at the first stroke of a calamity.'\" Al-Bukhari placed it in his Sahih.",
            "bn": "বুখারীর ভাষ্যে (১২৮৩) আনাস ইবন মালিক (রাঃ) বর্ণনা করেন: \"নবী ﷺ এক নারীর পাশ দিয়ে যাচ্ছিলেন, যে একটি কবরের পাশে কাঁদছিল। তিনি তাকে আল্লাহকে ভয় করতে আর সবর করতে বললেন। সে বলল, 'আমার কাছ থেকে সরে যান, আমার মতো বিপদ তো আপনার উপর আসেনি।' সে তাঁকে চিনতে পারেনি। পরে তাকে জানানো হলো, ইনি ছিলেন নবী ﷺ। তখন সে নবী ﷺ-এর ঘরের দরজায় এল, সেখানে কোনো পাহারাদার পেল না। সে বলল, 'আমি আপনাকে চিনতে পারিনি।' তিনি বললেন, 'সবর তো বিপদের প্রথম আঘাতের সময়।'\" বুখারী এটি তাঁর সহীহ গ্রন্থে স্থান দিয়েছেন।"
          },
          {
            "en": "In 12:84 he turns from them and says, O my sorrow for Yusuf, and his eyes whiten with grief. Ibn Kathir's abridged English says the new grief, losing Binyamin and Rubil, renewed the old sorrow he had kept to himself. This patience, said at a second shock, holds tears inside it; 12:86, where he complains of his grief only to Allah, has its own article. The verse describes these brothers' deeds within one family's story and licenses nothing against any living person or community.",
            "bn": "১২:৮৪ আয়াতে তিনি তাদের দিক থেকে মুখ ফিরিয়ে নেন, বলেন, হায় ইউসুফের জন্য আমার দুঃখ! শোকে তাঁর চোখ সাদা হয়ে যায়। ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ বলে, বিনয়ামীন আর রূবীলকে হারানোর নতুন শোক সেই পুরোনো দুঃখকে নতুন করে জাগিয়ে দিল, যা তিনি নিজের ভেতরে চেপে রেখেছিলেন। দ্বিতীয় আঘাতে বলা এ সবরের ভেতরে তাই চোখের পানিও আছে। ১২:৮৬ আয়াত, যেখানে তিনি বলেন নিজের শোকের অভিযোগ কেবল আল্লাহর কাছেই করেন, তার আলাদা লেখা আছে। আয়াতটি একটি পরিবারের কাহিনির ভেতরে এই ভাইদের কাজের বর্ণনা দেয়, কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না।"
          }
        ]
      }
    ]
  },
  "12:86-87": {
    "sections": [
      {
        "h": {
          "en": "Their Words, His Reply",
          "bn": "ছেলেদের কথা, পিতার জবাব"
        },
        "p": [
          {
            "en": "Ya'qub (AS) has just heard, in 12:80 to 12:82, that Binyamin is held in Egypt for theft and that the eldest brother has stayed behind. Ibn Kathir's abridged English says he answered in 12:83 with the same words he had spoken when they brought the false blood on Yusuf's shirt. In 12:84 he turns from them and his eyes whiten with grief, and in 12:85 they say: by Allah, you will not stop remembering Yusuf until you waste away or perish. At-Tabari names the addressees of 12:86: those of his sons who said this.",
            "bn": "১২:৮০ থেকে ১২:৮২ আয়াতে ইয়াকুব (আঃ) সবে খবর পেয়েছেন, চুরির দায়ে বিনয়ামীন মিসরে আটক, আর বড় ছেলে সেখানেই রয়ে গেছে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ বলে, ১২:৮৩ আয়াতে তিনি ঠিক সেই কথাই বলেছিলেন, যা বলেছিলেন ইউসুফের জামায় মিথ্যা রক্ত দেখে। ১২:৮৪ আয়াতে তিনি ছেলেদের দিক থেকে মুখ ফেরান, শোকে তাঁর চোখ সাদা হয়ে যায়। ১২:৮৫ আয়াতে ছেলেরা বলে: আল্লাহর কসম, ইউসুফের কথা আপনি ভুলবেনই না, যতক্ষণ না একেবারে ক্ষয়ে যান বা মারা যান। তাবারী জানিয়ে দেন ১২:৮৬ আয়াতের জবাব কাদের উদ্দেশে: ছেলেদের মধ্যে যারা এ কথা বলেছিল।"
          },
          {
            "en": "In what tone did they say it? The commentators hear it differently. Ibn Kathir's abridged English says his children felt pity for him and spoke out of sorrow and compassion, afraid he would die of grief. Ibn Ishaq, in at-Tabari, says Ya'qub answered as he did because he saw their roughness and harshness and the hard words they used to him, and al-Baghawi likewise opens the verse with: when he saw their harshness. The wording of 12:85 carries both readings, and the article keeps them side by side.",
            "bn": "কথাটা তারা কোন সুরে বলেছিল? মুফাসসিরদের কানে তা ভিন্নভাবে বাজে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ বলে, পিতার জন্য ছেলেদের মায়া লেগেছিল। দুঃখ আর দরদ নিয়েই তারা কথাটা বলেছিল, ভয় পাচ্ছিল শোকে তিনি মারা যাবেন। তাবারীর বর্ণনায় ইবন ইসহাক বলেন অন্য কথা। ছেলেদের রূঢ়তা, কঠোরতা আর তাঁর সঙ্গে কর্কশ ভাষা দেখেই ইয়াকুব (আঃ) এভাবে জবাব দিয়েছিলেন। বাগাভীও আয়াতটি শুরু করেন এ কথা দিয়ে: যখন তিনি তাদের কঠোরতা দেখলেন। ১২:৮৫ আয়াতের শব্দে দুটো পাঠই ধরে, তাই এ লেখা দুটোকেই পাশাপাশি রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Bathth Beside Huzn",
          "bn": "বাসস আর হুযন"
        },
        "p": [
          {
            "en": "Innama ashku baththi wa huzni ila Allah. Al-Qurtubi starts from the language: the real sense of bathth is the ruinous thing that comes upon a person and that he cannot manage to hide, from bathathtuhu, I scattered it, so a calamity came to be called bathth by extension. He quotes Dhu r-Rumma weeping at a ruined camp until its stones almost spoke back. Al-Baghawi gives the reason for the name in a clause: bathth is the severest grief, so called because its bearer cannot endure it without letting it show.",
            "bn": "ইন্নামা আশকূ বাসসী ওয়া হুযনী ইলাল্লাহ। কুরতুবী শুরু করেন ভাষা থেকে। তাঁর মতে 'বাসস'-এর আসল অর্থ মানুষের উপর এসে পড়া এমন সর্বনাশা জিনিস, যা সে লুকিয়ে রাখতে পারে না। শব্দটি এসেছে 'বাসাসতুহু' থেকে, মানে আমি তা ছড়িয়ে দিলাম। সেই সূত্রে বিপদকেই রূপক অর্থে বাসস বলা হয়েছে। প্রমাণে তিনি যুর-রুম্মার কবিতা আনেন, যেখানে কবি এক পোড়ো ভিটায় দাঁড়িয়ে এত কাঁদেন যে তার পাথরগুলোও যেন কথা বলে উঠতে চায়। বাগাভী নামের কারণটা এক কথায় বলেন: বাসস হলো সবচেয়ে তীব্র শোক। এ নাম তার এজন্য যে, শোকগ্রস্ত মানুষ তা প্রকাশ না করে সইতে পারে না।"
          },
          {
            "en": "The early glosses are shorter. Ibn Abbas, through Ibn Jurayj in at-Tabari, says baththi means hammi, my worry, and Ibn Kathir's Arabic glosses it the same way: my worry and the state I am in. Al-Hasan is reported by at-Tabari in two forms, hajati, my need, and in another chain huzni, my grief. It is also said, at-Tabari notes, that bathth is the most intense grief, and his editor traces that wording to Abu 'Ubayda's Majaz al-Qur'an.",
            "bn": "প্রথম যুগের ব্যাখ্যাগুলো আরও ছোট। তাবারীতে ইবন জুরাইজের সূত্রে ইবন আব্বাস বলেন, 'বাসসী' মানে 'হাম্মী', আমার দুশ্চিন্তা। ইবন কাসীরের আরবি তাফসীরও একই কথা বলে: আমার দুশ্চিন্তা আর আমি যে অবস্থায় আছি। হাসানের কথা তাবারী দুই রকমে এনেছেন। এক সূত্রে 'হাজাতী', আমার প্রয়োজন, আরেক সূত্রে 'হুযনী', আমার শোক। তাবারী আরও জানান, কেউ কেউ বলেছেন বাসস মানে সবচেয়ে তীব্র শোক। তাঁর সম্পাদক টীকায় দেখিয়েছেন, এ শব্দগুলো আবু উবাইদার 'মাজাযুল কুরআন' থেকে নেওয়া।"
          },
          {
            "en": "At-Tabari then gives his own view: bathth comes from bathth al-hadith, spreading one's talk, so the sense is: I complain of my news, the worry I am in, and I lay out my talk and my grief before Allah. As-Sa'di divides the pair: baththi is what I pour out in words, huzni is the grief inside my heart. Al-Qurtubi instead treats wa huzni as joined to bathth, the same thing said again in other wording. One reading hears two layers, the spoken and the hidden; the other hears one sorrow named twice.",
            "bn": "এরপর তাবারী নিজের মত দেন। তাঁর কাছে বাসস এসেছে 'বাসসুল হাদীস' থেকে, অর্থাৎ কথা ছড়িয়ে বলা। তাহলে অর্থ দাঁড়ায়: আমি যে দুশ্চিন্তায় আছি, আমার সেই খবরের অভিযোগ করছি, আর নিজের কথা ও শোক মেলে ধরছি আল্লাহর সামনে। সা'দী জোড়াটাকে দুই ভাগ করেন। বাসসী হলো মুখে যা বলে ফেলি, আর হুযনী হলো বুকের ভেতরে জমে থাকা শোক। কুরতুবী অন্যভাবে দেখেন। তাঁর মতে 'ওয়া হুযনী' বাসসের সঙ্গে যুক্ত, একই কথা অন্য শব্দে আবার বলা। এক পাঠে তাই দুটি স্তর শোনা যায়, প্রকাশ্য আর গোপন। অন্য পাঠে একটি দুঃখেরই দুটি নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Not to You, to Allah",
          "bn": "তোমাদের কাছে নয়, আল্লাহর কাছে"
        },
        "p": [
          {
            "en": "The particle innama restricts: only to Allah. At-Tabari spells it out in Ya'qub's voice: I do not complain of my worry and my grief to you; I complain of that to Allah. As-Sa'di gives it the edge the setting calls for: to Allah alone, not to you and not to anyone else of creation, so say what you will. The Muyassar renders the line as: I show my worry and my grief to none but Allah alone, for it is He who removes harm and affliction.",
            "bn": "'ইন্নামা' শব্দটি সীমা টেনে দেয়: কেবল আল্লাহর কাছে। তাবারী কথাটা খুলে বলেন ইয়াকুব (আঃ)-এর মুখে: আমার দুশ্চিন্তা আর শোকের অভিযোগ আমি তোমাদের কাছে করি না, করি আল্লাহর কাছে। প্রসঙ্গের দাবি মেনে সা'দী কথাটায় একটু ধার যোগ করেন: কেবল আল্লাহর কাছে, তোমাদের কাছে নয়, সৃষ্টির আর কারও কাছেও নয়। কাজেই তোমাদের যা বলার বলো। মুয়াসসার লাইনটির অর্থ করে এভাবে: আমার দুশ্চিন্তা আর শোক আমি এক আল্লাহ ছাড়া কারও সামনে প্রকাশ করি না, কারণ কষ্ট আর বিপদ তিনিই দূর করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an reads it as a request for room: not to you or to anyone else, but to Allah Himself, so leave me alone as I am. Ibn Ishaq, in at-Tabari, says Ya'qub spoke these words 'an 'ilmin billah, out of knowledge of Allah. In all of these readings the complaint does not stop; it changes address. The sons wanted the remembering to end. He answers that it was never laid before them, and that He before whom he lays it is, in the Muyassar's words, the remover of harm.",
            "bn": "মাআরিফুল কুরআন একে দেখে একটু একা থাকতে দেওয়ার অনুরোধ হিসেবে: তোমাদের কাছে নয়, আর কারও কাছেও নয়, স্বয়ং আল্লাহর কাছে। কাজেই আমাকে আমার মতো থাকতে দাও। তাবারীর বর্ণনায় ইবন ইসহাক বলেন, ইয়াকুব (আঃ) কথাগুলো বলেছিলেন 'আন ইলমিন বিল্লাহ', আল্লাহকে জেনে-বুঝে। এর কোনো পাঠেই অভিযোগ থেমে যায় না, শুধু ঠিকানা বদলায়। ছেলেরা চাইছিল তিনি ইউসুফকে মনে করা ছেড়ে দিন। তিনি জানিয়ে দেন, এ অভিযোগ কখনো তাদের সামনে রাখাই হয়নি। আর যাঁর কাছে রাখছেন, মুয়াসসারের ভাষায়, কষ্ট দূর করেন তিনিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Tears Beside Good Opinion",
          "bn": "চোখে পানি, মনে সুধারণা"
        },
        "p": [
          {
            "en": "At 12:18 Ya'qub (AS) named his course beautiful patience, and 12:83 repeats the words; the commentators on this verse show how they read his tears alongside that patience. Qatadah, in at-Tabari, says: we were told that no trial ever came down on Allah's prophet Ya'qub without his good opinion of Allah coming in behind it. Al-Hasan, asked how far Ya'qub's grief for his son reached, said: the grief of seventy bereaved mothers. And the reward? The reward of a hundred martyrs.",
            "bn": "১২:১৮ আয়াতে ইয়াকুব (আঃ) নিজের পথের নাম দিয়েছিলেন সুন্দর সবর, ১২:৮৩ আয়াতে সেই কথাই ফিরে আসে। এ আয়াতের মুফাসসিররা দেখান, সেই সবরের পাশে তাঁর চোখের পানিকে তাঁরা কীভাবে পড়েন। তাবারীতে কাতাদা বলেন: আমাদের জানানো হয়েছে, আল্লাহর নবী ইয়াকুবের উপর যখনই কোনো বিপদ নেমেছে, তার পেছন পেছন এসেছে আল্লাহর প্রতি তাঁর সুধারণা। হাসানকে জিজ্ঞেস করা হলো, ছেলের জন্য ইয়াকুবের শোক কতটা গভীর ছিল? তিনি বললেন: সন্তানহারা সত্তর জন মায়ের শোক। আর প্রতিদান? একশ শহীদের প্রতিদান।"
          },
          {
            "en": "Al-Hasan's answer ends with the line that carries the point: and his opinion of Allah did not turn bad for a single hour of night or day. In another report in at-Tabari, al-Hasan says eighty years passed between Yusuf leaving him and returning, that grief never left his heart, and that he wept until his sight went; then he swore that no creature on earth that day was more honoured by Allah than Ya'qub. In these reports grief and good opinion of Allah stand together.",
            "bn": "হাসানের জবাব শেষ হয় সেই কথায়, যেখানে আসল শিক্ষাটা: রাত-দিনের এক মুহূর্তের জন্যও আল্লাহর প্রতি তাঁর ধারণা খারাপ হয়নি। তাবারীর আরেক বর্ণনায় হাসান বলেন, ইউসুফ চলে যাওয়া থেকে ফিরে আসা পর্যন্ত আশি বছর কেটেছিল। এ সময় শোক তাঁর বুক থেকে একবারও সরেনি। কাঁদতে কাঁদতে তাঁর দৃষ্টিশক্তি চলে গিয়েছিল। তারপর হাসান কসম করে বলেন, সেদিন পৃথিবীতে আল্লাহর কাছে ইয়াকুবের চেয়ে বেশি সম্মানিত কোনো সৃষ্টি ছিল না। এসব বর্ণনায় শোক আর আল্লাহর প্রতি সুধারণা পাশাপাশি দাঁড়িয়ে থাকে।"
          },
          {
            "en": "Ma'arif al-Qur'an, citing al-Qurtubi, draws a rule from the episode: when distress strikes a Muslim in self, children, family or property, it is obligatory to meet it with patience at its best and contentment with Allah's decree, following the example of Ya'qub (AS) and the other prophets. It also reports Ibn Abbas saying that Allah gave Ya'qub the reward of the martyrs for this patience, and that whoever in this Ummah is patient in distress will receive a reward like it.",
            "bn": "মাআরিফুল কুরআন কুরতুবীর বরাতে ঘটনাটি থেকে একটি বিধান টানে। কোনো মুসলিমের নিজের, সন্তানের, পরিবারের বা সম্পদের উপর বিপদ এলে উত্তম সবর দিয়ে তার মোকাবিলা করা আর আল্লাহর ফয়সালায় রাজি থাকা তার উপর ওয়াজিব। এতে সে অনুসরণ করবে ইয়াকুব (আঃ) ও অন্য নবীদের পথ। একই গ্রন্থ ইবন আব্বাসের কথাও আনে: এ সবরের জন্য আল্লাহ ইয়াকুব (আঃ)-কে শহীদদের প্রতিদান দিয়েছেন। আর এই উম্মতেও যে বিপদে সবর করবে, সে-ও পাবে তেমনই প্রতিদান।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports of a Reproach",
          "bn": "ভর্ৎসনার বর্ণনাগুলো"
        },
        "p": [
          {
            "en": "At-Tabari and al-Baghawi also carry reports, from Talha ibn Musarrif, Habib ibn Abi Thabit, Thawr ibn Yazid and Sa'id ibn Jubayr, of a neighbour, a man or a king asking Ya'qub what had worn him down, and of his answer naming long years and many sorrows. In them Allah asks him whether he complains of Him to His creation, and in most of them Ya'qub turns to his Lord asking forgiveness; in Talha's account, whenever he was asked after that, he answered with this verse. None of these reports carries a chain to the Prophet ﷺ.",
            "bn": "তাবারী ও বাগাভী আরও কিছু বর্ণনা এনেছেন তালহা ইবন মুসাররিফ, হাবীব ইবন আবী সাবিত, সাওর ইবন ইয়াযীদ আর সাঈদ ইবন জুবাইরের সূত্রে। সেগুলোতে এক প্রতিবেশী, এক ব্যক্তি বা এক রাজা ইয়াকুব (আঃ)-কে জিজ্ঞেস করেন, কিসে তাঁকে এভাবে ভেঙে দিল। তিনি জবাবে বলেন দীর্ঘ সময় আর অনেক দুঃখের কথা। তখন আল্লাহ তাঁকে জিজ্ঞেস করেন, তুমি কি আমার সৃষ্টির কাছে আমার বিরুদ্ধে অভিযোগ করছ? বেশির ভাগ বর্ণনায় ইয়াকুব (আঃ) তখন রবের কাছে মাফ চান। তালহার বর্ণনায় আছে, এরপর থেকে কেউ জিজ্ঞেস করলে তিনি এ আয়াত দিয়েই জবাব দিতেন। এসব বর্ণনার কোনোটির সনদ নবী ﷺ পর্যন্ত পৌঁছায় না।"
          },
          {
            "en": "One version is raised to the Prophet ﷺ. Ibn Kathir gives it from Anas through Ibn Abi Hatim, with Jibril bringing the reproach, and grades it himself: a gharib hadith with nakara in it, that is, isolated and objectionable. At-Tabari also has whoever spreads his sorrow has not been patient, through Muslim ibn Yasar, who raises it to the Prophet ﷺ, and Ma'arif al-Qur'an gives it from Abu Hurayra; neither text grades it. No tafsir fetched for this verse attaches a sound hadith to it, so none is quoted here.",
            "bn": "একটি বর্ণনা নবী ﷺ পর্যন্ত পৌঁছানো হয়েছে। ইবন কাসীর সেটি এনেছেন আনাস থেকে, ইবন আবী হাতিমের সূত্রে। তাতে ভর্ৎসনার বার্তা নিয়ে আসেন জিবরীল। ইবন কাসীর নিজেই এর মান জানিয়ে দেন: হাদীসটি গরীব, আর এতে নাকারাত আছে, অর্থাৎ বিচ্ছিন্ন ও আপত্তিকর। তাবারী আরেকটি কথা এনেছেন: যে নিজের দুঃখ ছড়িয়ে বেড়ায়, সে সবর করেনি। এটি এসেছে মুসলিম ইবন ইয়াসারের সূত্রে, যিনি একে নবী ﷺ পর্যন্ত পৌঁছান। মাআরিফুল কুরআন একই কথা আনে আবু হুরাইরা (রাঃ) থেকে। কোনো গ্রন্থেই এর মান বলা হয়নি। এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীর এর সঙ্গে সহীহ হাদীস জোড়ে না, তাই এখানে কোনো হাদীস উদ্ধৃত হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Knew From Allah",
          "bn": "আল্লাহর কাছ থেকে যা জানতেন"
        },
        "p": [
          {
            "en": "Wa a'lamu mina Allahi ma la ta'lamun: and I know from Allah what you do not know. The commonest gloss goes back to Ibn Abbas. At-Tabari has it through al-'Awfi's chain: I know that Yusuf's dream is true and that I will prostrate to him, the dream of eleven stars, the sun and the moon in 12:4. Al-Qurtubi repeats it in Ibn Abbas's name. Ibn Kathir gives it too, with another wording: Allah must make the dream appear and fulfil it. Al-Baghawi's version widens it: I and you will prostrate to him.",
            "bn": "ওয়া আ'লামু মিনাল্লাহি মা লা তা'লামূন: আর আমি আল্লাহর কাছ থেকে এমন কিছু জানি, যা তোমরা জানো না। সবচেয়ে প্রচলিত ব্যাখ্যাটি ইবন আব্বাসের। তাবারী তা এনেছেন আওফীর সূত্রে: আমি জানি ইউসুফের স্বপ্ন সত্য, আর আমি তাকে সিজদা করব। স্বপ্নটি ১২:৪ আয়াতের, যেখানে ১১টি তারা, সূর্য আর চাঁদ তাঁকে সিজদা করছিল। কুরতুবীও ইবন আব্বাসের নামে একই কথা বলেন। ইবন কাসীরও এটি আনেন, সঙ্গে আরেকটি ভাষ্য: আল্লাহ স্বপ্নটিকে অবশ্যই প্রকাশ করবেন আর পূর্ণ করবেন। বাগাভীর বর্ণনায় পরিসর আরও বড়: আমি আর তোমরা সবাই তাকে সিজদা করব।"
          },
          {
            "en": "As-Suddi reads it as knowledge that Yusuf was alive. When the sons described the king, in al-Qurtubi's telling his conduct, justice and character, Ya'qub's soul sensed something; he said there is no truthful one on earth except a prophet, and he hoped: perhaps it is Yusuf. At-Tabari's editor warns that this report's wording is disturbed and may have a gap. Al-Qurtubi and al-Baghawi also relay, as something said or narrated, that Ya'qub asked the angel of death whether he had taken Yusuf's soul and was told no.",
            "bn": "সুদ্দীর পাঠে এ জানা মানে ইউসুফ যে বেঁচে আছেন, সেই জ্ঞান। ছেলেরা যখন রাজার কথা বলল, কুরতুবীর বর্ণনায় তাঁর আচরণ, ন্যায়বিচার আর চরিত্রের কথা, ইয়াকুব (আঃ)-এর মন কিছু একটা টের পেল। তিনি বললেন, পৃথিবীতে নবী ছাড়া এমন সত্যনিষ্ঠ কেউ হয় না। তারপর আশা করলেন: হয়তো সে-ই ইউসুফ। তাবারীর সম্পাদক সতর্ক করেন, এ বর্ণনার শব্দ এলোমেলো, মাঝখানে কিছু বাদ পড়ে থাকতে পারে। কুরতুবী ও বাগাভী 'বলা হয়' বা 'বর্ণিত আছে' বলে আরেকটি কথা আনেন। ইয়াকুব (আঃ) মৃত্যুর ফেরেশতাকে জিজ্ঞেস করেছিলেন, তিনি ইউসুফের রূহ কবজ করেছেন কি না। জবাব এসেছিল: না।"
          },
          {
            "en": "Others keep the knowledge general. Ibn Kathir's own gloss is: I hope from Him every good. Al-Qurtubi offers: I know of Allah's kindness to me what makes good opinion of Him binding, and, as another view, I know of His answering the distressed what you do not. As-Sa'di: that He will return them to me and cool my eye by gathering me with them. Ma'arif al-Qur'an: that he had been promised by Him that He would bring them all together. The Muyassar: of Allah's mercy and relief.",
            "bn": "অন্যরা জ্ঞানটিকে সাধারণ অর্থে রাখেন। ইবন কাসীরের নিজের ব্যাখ্যা: আমি তাঁর কাছে সব রকমের কল্যাণের আশা রাখি। কুরতুবী বলেন: আমার প্রতি আল্লাহর অনুগ্রহের এমন কিছু আমি জানি, যার কারণে তাঁর প্রতি সুধারণা রাখা আমার কর্তব্য। আরেকটি মত হিসেবে তিনি আনেন: বিপদগ্রস্তের দোয়া তিনি যে কবুল করেন, তা আমি জানি, তোমরা জানো না। সা'দীর মতে, তিনি তাদের আমার কাছে ফিরিয়ে দেবেন, তাদের সঙ্গে মিলিয়ে আমার চোখ জুড়াবেন। মাআরিফুল কুরআন বলে, আল্লাহ তাঁকে কথা দিয়েছিলেন যে সবাইকে তাঁর সঙ্গে একত্র করবেন। মুয়াসসারের মতে, এ জ্ঞান আল্লাহর রহমত আর মুক্তির।"
          }
        ]
      },
      {
        "h": {
          "en": "Tahassus, Not Tajassus",
          "bn": "তাহাসসুস, তাজাসসুস নয়"
        },
        "p": [
          {
            "en": "Ya baniyya, idh-habu fa-tahassasu min Yusufa wa akhihi. At-Tabari: go back to the place you came from, where you left your two brothers, and seek Yusuf and learn his news; as-Suddi adds, in Egypt. At-Tabari and al-Qurtubi derive tahassus from hiss, sense, and al-Qurtubi defines it as seeking a thing with the senses. Al-Baghawi and Ibn Kathir set it beside tajassus, with jim: tahassus is used for good and tajassus for evil. Ibn Abbas, in al-Baghawi, glosses it iltamisu, seek; as-Sa'di, be keen and strive in the search.",
            "bn": "ইয়া বুনাইয়্যা, ইযহাবূ ফাতাহাসসাসূ মিন ইউসুফা ওয়া আখীহি। তাবারীর ব্যাখ্যা: যেখান থেকে এসেছ, যেখানে দুই ভাইকে রেখে এসেছ, সেখানে ফিরে যাও। ইউসুফকে খোঁজো, তার খবর জানো। সুদ্দী যোগ করেন: মিসরে। তাবারী ও কুরতুবী 'তাহাসসুস' শব্দটি আনেন 'হিস' থেকে, মানে ইন্দ্রিয়ের অনুভূতি। কুরতুবীর সংজ্ঞায় তাহাসসুস হলো ইন্দ্রিয় দিয়ে কিছু খোঁজা। বাগাভী ও ইবন কাসীর একে রাখেন 'জীম' দিয়ে লেখা 'তাজাসসুস'-এর পাশে। তাহাসসুস চলে ভালো কাজে, আর তাজাসসুস মন্দ কাজে। বাগাভীতে ইবন আব্বাস এর অর্থ করেন 'ইলতামিসূ', খুঁজে দেখো। সা'দীর ভাষায়: আগ্রহ নিয়ে, পুরো চেষ্টা দিয়ে খোঁজো।"
          },
          {
            "en": "Why Egypt, and why now? Al-Qurtubi says the command shows Ya'qub was certain Yusuf lived, whether from the dream, from Allah making the wolf speak as at the start of the story, or from the angel of death's word, which he calls the most apparent. It is also said, he adds, that the returned goods, the detained brother and the honour shown them pointed him there. Ma'arif al-Qur'an notes he had never given such an order before, and reads the timing as Allah's: the meeting was not destined earlier, and when its time came, Allah put the means in his heart.",
            "bn": "মিসরই কেন, আর এখনই কেন? কুরতুবী বলেন, এ নির্দেশ দেখায় ইউসুফ যে বেঁচে আছেন, ইয়াকুব (আঃ) সে ব্যাপারে নিশ্চিত ছিলেন। হয় স্বপ্ন থেকে, নয়তো কাহিনির শুরুর মতো আল্লাহ নেকড়েকে দিয়ে কথা বলিয়েছিলেন বলে, নয়তো মৃত্যুর ফেরেশতার কথা থেকে। শেষটিকেই তিনি সবচেয়ে স্পষ্ট বলেন। তিনি আরও জানান, কেউ কেউ বলেছেন ফেরত দেওয়া পুঁজি, আটকে রাখা ভাই আর তাদের প্রতি দেখানো সম্মান তাঁকে ওদিকে ইঙ্গিত দিয়েছিল। মাআরিফুল কুরআন খেয়াল করায়, এর আগে তিনি কখনো এমন নির্দেশ দেননি। সময়টাকে গ্রন্থটি দেখে আল্লাহর ফয়সালা হিসেবে। আগে মিলন লেখা ছিল না, আর সময় যখন এল, আল্লাহ উপায়টা তাঁর মনে ঢেলে দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Rawh: Relief and Mercy",
          "bn": "রাওহ: মুক্তি ও রহমত"
        },
        "p": [
          {
            "en": "Wa la tay'asu min rawhi Allah. At-Tabari: do not despair that Allah will relieve us of the grief we are in over Yusuf and his brother with a relief from Him, and show them to me. Qatadah and ad-Dahhak gloss rawh as rahma, mercy; Ibn Zayd, as-Suddi and Ibn Ishaq as faraj, relief, as-Suddi adding: that He return Yusuf. Al-Baghawi gives mercy first and relief as a second view. Ibn Ishaq says Ya'qub said it holding to good opinion of his Lord amid his grief.",
            "bn": "ওয়া লা তাইআসূ মিন রাওহিল্লাহ। তাবারীর ব্যাখ্যা: আল্লাহ নিজের পক্ষ থেকে মুক্তি দিয়ে ইউসুফ আর তার ভাইয়ের জন্য আমাদের এই শোক দূর করবেন, তাদের আমাকে দেখাবেন, এ আশা ছেড়ো না। কাতাদা ও দাহহাক 'রাওহ'-এর অর্থ করেন রহমত। ইবন যায়দ, সুদ্দী ও ইবন ইসহাক অর্থ করেন 'ফারাজ', মুক্তি। সুদ্দী সঙ্গে বলেন: তিনি ইউসুফকে ফিরিয়ে দেবেন। বাগাভী প্রথমে রহমতের কথা বলেন, দ্বিতীয় মত হিসেবে মুক্তির। ইবন ইসহাক জানান, শোকের মধ্যেও রবের প্রতি সুধারণা ধরে রেখেই ইয়াকুব (আঃ) কথাটি বলেছিলেন।"
          },
          {
            "en": "Then the ground: none despairs of rawh Allah except the disbelieving people. At-Tabari explains the disbelievers here as those who deny His power to bring into being whatever He wills; the Muyassar, as those who deny His power and disbelieve in Him. Al-Qurtubi, citing Ibn Zayd, says the believer hopes for Allah's relief and the disbeliever despairs in hardship, and he takes the clause as proof that despair is among the major sins. As-Sa'di: hope drives a servant to strive, despair makes him heavy and slow, and hope in Allah's mercy rises with faith.",
            "bn": "তারপর কারণটা: কাফির সম্প্রদায় ছাড়া আল্লাহর রাওহ থেকে কেউ নিরাশ হয় না। তাবারী এখানে কাফির বলতে বোঝান তাদের, যারা অস্বীকার করে যে আল্লাহ যা চান তা-ই সৃষ্টি করতে পারেন। মুয়াসসারের ভাষায়, যারা তাঁর ক্ষমতা অস্বীকার করে, তাঁকে অবিশ্বাস করে। কুরতুবী ইবন যায়দের বরাতে বলেন, মুমিন আল্লাহর দেওয়া মুক্তির আশা রাখে, আর কাফির বিপদে নিরাশ হয়ে পড়ে। এ বাক্যকে তিনি প্রমাণ ধরেন যে নিরাশা কবীরা গুনাহর একটি। সা'দীর কথা: আশা বান্দাকে চেষ্টায় নামায়, নিরাশা তাকে ভারী আর ধীর করে দেয়। আর আল্লাহর রহমতের আশা বাড়ে ঈমানের মাপে।"
          },
          {
            "en": "This article passes no verdict on any person who despairs. The verse reports a father's words to his sons, and it licenses no one to pronounce on a grieving neighbour or any living person. What it holds up is the pairing in Ya'qub's (AS) reply: a sorrow too heavy to hide, laid before Allah alone, and in the next breath an order to go and search. As-Sa'di reads that order as hope at work. The sons went, and 12:88 opens with them entering upon the 'Aziz once more.",
            "bn": "নিরাশ হয়ে পড়া কোনো মানুষের ব্যাপারে এ লেখা কোনো রায় দেয় না। আয়াতটি ছেলেদের প্রতি এক পিতার কথা তুলে ধরে। শোকে ভেঙে পড়া কোনো প্রতিবেশী বা জীবিত কোনো মানুষ সম্পর্কে রায় দেওয়ার অনুমতি এটি কাউকে দেয় না। আয়াত যা দেখায়, তা ইয়াকুব (আঃ)-এর জবাবের জোড়টুকু। এত ভারী দুঃখ যে লুকানো যায় না, তা রাখা হলো কেবল আল্লাহর সামনে। আর পরের নিঃশ্বাসেই নির্দেশ: যাও, খোঁজো। সা'দী এই নির্দেশে দেখেন কাজে নামা আশা। ছেলেরা রওনা দিল। ১২:৮৮ আয়াত শুরু হয় তাদের আবার আযীযের দরবারে ঢোকার কথা দিয়ে।"
          }
        ]
      }
    ]
  },
  "12:90": {
    "sections": [
      {
        "h": {
          "en": "Recognition After Two Years",
          "bn": "দুই বছর পর চেনা"
        },
        "p": [
          {
            "en": "The brothers have come a third time, in need. In 12:88 they say that hardship has touched them and their family, that their goods are of little worth, and they ask for full measure and charity. In 12:89 the man they call al-'Aziz answers with a question of his own: do you know what you did with Yusuf and his brother, when you were ignorant? Now, in 12:90, the question comes back to him from their side: a-innaka la-anta Yusuf, are you indeed Yusuf?",
            "bn": "ভাইয়েরা তৃতীয়বার এসেছে, অভাব নিয়ে। ১২:৮৮ আয়াতে তারা বলে, তাদের আর তাদের পরিবারকে দুর্দশা ঘিরে ধরেছে, সঙ্গে আনা পুঁজিও সামান্য। তাই তারা পুরো মাপে শস্য আর সদকা চায়। ১২:৮৯ আয়াতে যাকে তারা আযীয বলে ডাকছে, তিনি পাল্টা প্রশ্ন করেন: তোমরা কি জানো ইউসুফ আর তার ভাইয়ের সঙ্গে কী করেছিলে, যখন তোমরা অজ্ঞ ছিলে? এবার ১২:৯০ আয়াতে প্রশ্নটা ফিরে আসে তাদের দিক থেকে: আ ইন্নাকা লা আনতা ইউসুফ, তুমিই কি সত্যিই ইউসুফ?"
          },
          {
            "en": "Ibn Kathir, in his Arabic tafsir, hears amazement in the question. The interrogative, he says, shows how great the thing seemed to them: they had been coming to him for two years and more without knowing him, while he knew them all along and kept himself hidden. The abridged English Ibn Kathir, which treats 12:89 to 12:92 as one group, says the same of this verse and adds, with the words it appears, and Allah knows best, that he revealed himself only then by Allah's command, as he had hidden himself earlier by Allah's command.",
            "bn": "ইবন কাসীর তাঁর আরবি তাফসীরে এ প্রশ্নের ভেতর বিস্ময় শুনতে পান। তাঁর মতে প্রশ্নের ধরনটাই বলে দেয়, ব্যাপারটা তাদের কাছে কত বড় ঠেকেছিল। দুই বছরের বেশি সময় ধরে তারা তাঁর কাছে আসা-যাওয়া করেছে, অথচ চিনতে পারেনি। আর তিনি শুরু থেকেই তাদের চিনতেন, কিন্তু নিজের পরিচয় গোপন রেখেছিলেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১২:৮৯ থেকে ১২:৯২ পর্যন্ত আয়াতগুলো একসঙ্গে আলোচনা করে। সেখানেও এ আয়াত সম্পর্কে একই কথা আছে, সঙ্গে এটুকু যোগ: বাহ্যত মনে হয়, আর আল্লাহই ভালো জানেন, তিনি এতদিন পরে এখনই পরিচয় দিলেন আল্লাহর হুকুমে, যেমন আগে আল্লাহর হুকুমেই তা গোপন রেখেছিলেন।"
          },
          {
            "en": "The same passage sets the moment in a larger pattern: when the affliction grew hardest, Allah sent relief, as He said in 94:5 and 94:6, with hardship comes ease. In 12:87 Ya'qub (AS) had sent his sons out with the words do not despair of Allah's relief. They came pleading about hunger, and found a brother they had long counted as lost.",
            "bn": "একই আলোচনা মুহূর্তটিকে একটা বড় নিয়মের ভেতরে বসায়: বিপদ যখন সবচেয়ে কঠিন হলো, আল্লাহ তখন স্বস্তি পাঠালেন, যেমন তিনি ৯৪:৫ ও ৯৪:৬ আয়াতে বলেছেন, নিশ্চয়ই কষ্টের সঙ্গে আছে স্বস্তি। ১২:৮৭ আয়াতে ইয়াকুব (আঃ) ছেলেদের পাঠিয়েছিলেন এই বলে: আল্লাহর দেওয়া স্বস্তি থেকে নিরাশ হয়ো না। তারা এসেছিল ক্ষুধার কথা জানাতে, আর পেল এমন এক ভাইকে, যাকে তারা বহুদিন হারানো বলেই ধরে নিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "What Made Them Look Again",
          "bn": "কীসে তারা নতুন করে তাকাল"
        },
        "p": [
          {
            "en": "The Qur'an does not say how they knew him. As-Sa'di keeps to that: they realised that the one addressing them was Yusuf. The commentators relate several reports, none graded in the texts consulted. At-Tabari gives, through Ibn Ishaq, that when Yusuf (AS) asked his question he removed the covering, kashafa al-ghita', and they knew him. Al-Baghawi reports the same from Ibn Ishaq, with the detail that he had been speaking to them from behind a screen and then lifted the veil.",
            "bn": "কীভাবে তারা তাঁকে চিনল, কুরআন তা বলে না। সা'দী সেখানেই থামেন: তারা বুঝে গেল, যিনি কথা বলছেন তিনিই ইউসুফ। তাফসীরকারেরা কয়েকটি বর্ণনা আনেন, তবে এখানে দেখা তাফসীরগুলোতে সেগুলোর কোনোটির মান উল্লেখ নেই। তাবারী ইবন ইসহাকের সূত্রে আনেন: প্রশ্নটা করার পর ইউসুফ (আঃ) আবরণ সরিয়ে দিলেন, কাশাফাল গিতা, আর তারা তাঁকে চিনে ফেলল। বাগাভীও ইবন ইসহাক থেকে একই কথা আনেন। সঙ্গে আছে, তিনি পর্দার আড়াল থেকে তাদের সঙ্গে কথা বলছিলেন, তারপর পর্দা তুলে দিলেন।"
          },
          {
            "en": "Two further reports are attributed to Ibn 'Abbas. Through ad-Dahhak, al-Baghawi relates that Yusuf (AS) smiled, they saw teeth like strung pearls, and the likeness made them ask; al-Qurtubi gives the smile too. Al-Baghawi through 'Ata', and al-Qurtubi without naming the link, relate that they did not know him until he took off his crown; there was a mark on the side of his head like one Ya'qub (AS) had; al-Baghawi adds Ishaq and Sarah.",
            "bn": "আরও দুটি বর্ণনা ইবন আব্বাস (রাঃ)-এর নামে আসে। দাহহাকের সূত্রে বাগাভী বলেন, ইউসুফ (আঃ) হাসলেন। তারা দেখল তাঁর দাঁত যেন গাঁথা মুক্তা। চেহারার মিল দেখেই তারা প্রশ্ন করল। কুরতুবীও হাসির বর্ণনাটি আনেন। বাগাভী আতার সূত্রে, আর কুরতুবী মাঝের বর্ণনাকারীর নাম না নিয়ে বলেন, মাথা থেকে মুকুট নামানোর আগ পর্যন্ত তারা তাঁকে চেনেনি। তাঁর মাথার এক পাশে একটা চিহ্ন ছিল, ইয়াকুব (আঃ)-এরও তেমন চিহ্ন ছিল। বাগাভী এর সঙ্গে ইসহাক ও সারার নামও যোগ করেন।"
          },
          {
            "en": "Al-Qurtubi also relates from Ibn 'Abbas a letter from Ya'qub (AS) to the ruler of Egypt, whose reading moved Yusuf (AS) to tears and to disclosure. These reports are ungraded here and do not agree among themselves, so this article asserts none of them. What is certain is the Qur'an's own sequence: his question, their question, his answer.",
            "bn": "কুরতুবী ইবন আব্বাস (রাঃ) থেকে আরও আনেন মিসরের শাসকের কাছে ইয়াকুব (আঃ)-এর লেখা এক চিঠির কথা। তাঁর বর্ণনায় চিঠিটা পড়ে ইউসুফ (আঃ) কেঁদে ফেলেন আর নিজের পরিচয় প্রকাশ করে দেন। এখানে এসব বর্ণনার কোনো মান উল্লেখ নেই, আর সেগুলো পরস্পরের সঙ্গে মেলেও না। তাই এ লেখা কোনোটিকেই নিশ্চিত বলে দাবি করে না। নিশ্চিত কেবল কুরআনের নিজের ধারা: তাঁর প্রশ্ন, তাদের প্রশ্ন, তারপর তাঁর উত্তর।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question or a Statement",
          "bn": "প্রশ্ন, নাকি ঘোষণা"
        },
        "p": [
          {
            "en": "The words a-innaka la-anta Yusuf carry a reading difference that the commentators report with different names. At-Tabari says the generality of the readers of the cities read it as a question. He notes that in the reading of Ubayy ibn Ka'b it was a-wa-anta Yusuf, and that Ibn Muhaysin is reported to have read innaka la-anta Yusuf as a statement, not a question. He judges the question correct because the authoritative readers agree on it. Ibn Kathir's Arabic tafsir names Ubayy and Ibn Muhaysin in the same way.",
            "bn": "আ ইন্নাকা লা আনতা ইউসুফ, এ শব্দগুলোর পাঠে একটি ভিন্নতা আছে, আর তাফসীরকারেরা তা বর্ণনা করেন ভিন্ন ভিন্ন নামে। তাবারী বলেন, বিভিন্ন শহরের অধিকাংশ কারী একে প্রশ্ন হিসেবে পড়েছেন। তিনি জানান, উবাই ইবন কা'ব (রাঃ)-এর পাঠে ছিল আ ওয়া আনতা ইউসুফ। আর ইবন মুহাইসিন থেকে বর্ণিত, তিনি পড়েছেন ইন্নাকা লা আনতা ইউসুফ, প্রশ্ন হিসেবে নয়, ঘোষণা হিসেবে। তাবারীর রায়ে প্রশ্নের পাঠটিই সঠিক, কারণ নির্ভরযোগ্য কারীরা এতে একমত। ইবন কাসীরের আরবি তাফসীরও উবাই ও ইবন মুহাইসিনের নাম একইভাবে উল্লেখ করে।"
          },
          {
            "en": "Ibn Kathir calls the question the well-known reading and gives his reason: the interrogative conveys how astonishing they found it. Al-Baghawi and al-Qurtubi name a different reader for the statement form. Al-Baghawi says that Ibn Kathir and Abu Ja'far read innaka as a statement, and the others as a question; al-Qurtubi names Ibn Kathir alone. This is Ibn Kathir the Qur'an reader, not the later commentator of the same name quoted above. So two commentators tie the statement reading to Ibn Muhaysin and two tie it to Ibn Kathir the reader.",
            "bn": "ইবন কাসীর প্রশ্নের পাঠকেই প্রসিদ্ধ পাঠ বলেন। কারণও দেখান: প্রশ্নের ধরনটাই জানিয়ে দেয় ব্যাপারটা তাদের কাছে কত বিস্ময়কর ছিল। বাগাভী ও কুরতুবী ঘোষণার পাঠের জন্য অন্য এক কারীর নাম নেন। বাগাভী বলেন, ইবন কাসীর ও আবু জা'ফর ইন্নাকা পড়েছেন ঘোষণা হিসেবে, বাকিরা প্রশ্ন হিসেবে। কুরতুবী শুধু ইবন কাসীরের নাম নেন। ইনি কারী ইবন কাসীর, ওপরে উদ্ধৃত একই নামের পরবর্তী যুগের তাফসীরকার নন। অর্থাৎ দুজন তাফসীরকার ঘোষণার পাঠকে জুড়েছেন ইবন মুহাইসিনের সঙ্গে, আর দুজন জুড়েছেন কারী ইবন কাসীরের সঙ্গে।"
          },
          {
            "en": "Al-Qurtubi adds that even the statement form may carry a question's sense, like wa tilka ni'matun in 26:22, understood as: is that a favour? Either way the meaning is not in dispute. They stood, between disbelief and dawning certainty, before the brother they had wronged, and his answer, given at once, settled it beyond doubt.",
            "bn": "কুরতুবী যোগ করেন, ঘোষণার পাঠেও প্রশ্নের অর্থ থাকতে পারে, যেমন ২৬:২২ আয়াতে ওয়া তিলকা নি'মাতুন, যার অর্থ ধরা হয়: এটাই কি সেই অনুগ্রহ? যে পাঠই হোক, অর্থ নিয়ে বিরোধ নেই। অবিশ্বাস আর ধীরে জেগে ওঠা নিশ্চয়তার মাঝখানে তারা দাঁড়িয়ে ছিল সেই ভাইয়ের সামনে, যার উপর তারা অন্যায় করেছিল। তাঁর তাৎক্ষণিক উত্তরেই সব সন্দেহ মিটে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "Ana Yusuf, Wa Hadha Akhi",
          "bn": "আনা ইউসুফ, ওয়া হাযা আখী"
        },
        "p": [
          {
            "en": "His answer is plain: ana Yusuf, I am Yusuf. Al-Qurtubi reads weight into the form. The name means, he says, I am the one who was wronged and whose killing was intended; and he did not say ana huwa, I am he, so as to give the story its full gravity. At-Tabari's gloss begins with a simple yes: yes, I am Yusuf. Nothing is softened and nothing is added.",
            "bn": "তাঁর উত্তর সোজা: আনা ইউসুফ, আমি ইউসুফ। কুরতুবী এ বাক্যগঠনের ভেতরে গুরুত্ব খুঁজে পান। তাঁর ব্যাখ্যায় কথাটার মানে: আমিই সেই মজলুম, যাকে মেরে ফেলার ইচ্ছা করা হয়েছিল। তিনি 'আনা হুয়া', অর্থাৎ 'আমিই সে' বলেননি, যাতে কাহিনির পুরো ভার বোঝা যায়। তাবারীর ব্যাখ্যা শুরু হয় ছোট্ট একটা হ্যাঁ দিয়ে: হ্যাঁ, আমিই ইউসুফ। কিছুই নরম করা হয়নি, কিছু যোগও করা হয়নি।"
          },
          {
            "en": "Then wa hadha akhi, and this is my brother. Al-Baghawi names him Binyamin, and the Muyassar calls him shaqiqi, my full brother. Ma'arif al-Qur'an gives two reasons for mentioning him. He added his brother so that they would be certain about him, and so that they would know at once that their errand was complete: the two they had been sent to search for, in 12:87, were both before them, in one place and at one time. The search Ya'qub (AS) commanded had ended in a single sentence.",
            "bn": "তারপর ওয়া হাযা আখী, আর এ আমার ভাই। বাগাভী তাঁর নাম বলেন বিনইয়ামীন, আর মুয়াসসার বলে শাকীকী, আমার আপন ভাই। ভাইয়ের কথা তোলার দুটি কারণ দেখায় মাআরিফুল কুরআন। এক, যাতে তাঁর পরিচয় নিয়ে তাদের মনে আর সন্দেহ না থাকে। দুই, যাতে তারা তখনই বুঝে যায় তাদের অভিযান সফল। ১২:৮৭ আয়াতে যে দুজনের খোঁজে তাদের পাঠানো হয়েছিল, দুজনেই এখন তাদের সামনে, একই জায়গায়, একই সময়ে। ইয়াকুব (আঃ) যে খোঁজের হুকুম দিয়েছিলেন, তা শেষ হলো একটিমাত্র বাক্যে।"
          }
        ]
      },
      {
        "h": {
          "en": "Qad Manna Allahu 'Alayna",
          "bn": "কাদ মান্নাল্লাহু আলাইনা"
        },
        "p": [
          {
            "en": "Qad manna Allahu 'alayna: Allah has certainly been gracious to us. The commentators name the favour in different ways. For Ibn Kathir, in Arabic and in the grouped English, it is His bringing them together after separation and after so long. The Muyassar says the same: He favoured us and joined us after parting. Al-Baghawi: He blessed us by gathering us. At-Tabari's wording is sharper: by gathering us after you had separated us.",
            "bn": "কাদ মান্নাল্লাহু আলাইনা: আল্লাহ অবশ্যই আমাদের উপর অনুগ্রহ করেছেন। অনুগ্রহটা কী, তাফসীরকারেরা তা বলেন নানা ভাবে। ইবন কাসীরের আরবি তাফসীর আর গোষ্ঠীবদ্ধ ইংরেজি সংস্করণ, দুটোতেই তা হলো বিচ্ছেদ আর দীর্ঘ সময়ের পর তাদের আবার এক করে দেওয়া। মুয়াসসারও একই কথা বলে: তিনি দয়া করে আমাদের বিচ্ছেদের পর মিলিয়ে দিয়েছেন। বাগাভী বলেন: আমাদের একত্র করে তিনি নিয়ামত দিয়েছেন। তাবারীর ভাষা আরেকটু তীক্ষ্ণ: তোমরা আমাদের আলাদা করে দেওয়ার পর তিনি আমাদের এক করেছেন।"
          },
          {
            "en": "Others widen it. Al-Qurtubi names rescue and kingship: Allah favoured us with deliverance and with rule. As-Sa'di names faith, taqwa and establishment in the world, and adds that this came by reason of patience and taqwa, which is how the next clause follows. Ma'arif al-Qur'an reads it in two stages. Allah first gave both brothers patience and fear of Him, qualities it calls a key to success and a shield in every hardship; then He turned hardship into comfort, separation into union, and want into abundance.",
            "bn": "কেউ কেউ অনুগ্রহটাকে আরও বড় করে দেখেন। কুরতুবীর মতে তা মুক্তি আর রাজত্ব। সা'দী বলেন ঈমান, তাকওয়া আর দুনিয়ায় প্রতিষ্ঠার কথা, আর যোগ করেন, এসব এসেছে সবর আর তাকওয়ার কারণে। পরের বাক্যটা এখান থেকেই আসে। মাআরিফুল কুরআন একে দুই ধাপে পড়ে। প্রথমে আল্লাহ দুই ভাইকে সবর আর তাকওয়া দিয়েছেন। মাআরিফের ভাষায় এ দুটি সাফল্যের চাবি, আর প্রতিটি বিপদে ঢাল। তারপর তিনি কষ্টকে বদলে দিয়েছেন স্বস্তিতে, বিচ্ছেদকে মিলনে, অভাবকে প্রাচুর্যে।"
          },
          {
            "en": "On Ma'arif's reading even the patience is part of the grace: the virtue itself came from Allah before the reward did. On that reading, and on as-Sa'di's, the sentence makes no claim of merit. The grace is named first, and the qualities that earned the reward are named as things Allah gave. The favour is also stated as shared: 'alayna, upon us, the two brothers together, the one who had known a well, a stranger's house and a prison, and the one who had just been held back from his family.",
            "bn": "মাআরিফের পাঠে সবরটাও অনুগ্রহেরই অংশ। প্রতিদানের আগে গুণটাই এসেছে আল্লাহর কাছ থেকে। এ পাঠে, আর সা'দীর পাঠেও, বাক্যটিতে নিজের কৃতিত্বের কোনো দাবি নেই। আগে আসে অনুগ্রহের কথা। আর যে গুণের জন্য প্রতিদান মিলেছে, সেগুলোও আসে আল্লাহর দান হিসেবে। অনুগ্রহটা আবার দুজনের মিলিত: আলাইনা, আমাদের উপর। একজন দেখেছেন কূপ, পরের ঘর আর কারাগার। আরেকজনকে এইমাত্র পরিবার থেকে আটকে রাখা হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Taqwa Paired With Sabr",
          "bn": "তাকওয়ার পাশে সবর"
        },
        "p": [
          {
            "en": "Then the principle: innahu man yattaqi wa yasbir, truly whoever is mindful of Allah and is patient. At-Tabari defines each half. Taqwa is to watch Allah by performing what He has made obligatory and avoiding disobedience to Him. Sabr is to hold oneself back, to restrain the self from what Allah has forbidden in word or deed, when an affliction from Allah comes down. On this reading the two are not the same virtue said twice: one governs what a person does, the other what a person bears.",
            "bn": "তারপর মূলনীতি: ইন্নাহু মান ইয়াত্তাকি ওয়া ইয়াসবির, নিশ্চয়ই যে তাকওয়া অবলম্বন করে আর সবর করে। তাবারী দুটো অংশের আলাদা সংজ্ঞা দেন। তাকওয়া হলো আল্লাহর ফরজগুলো আদায় করে আর তাঁর নাফরমানি থেকে দূরে থেকে তাঁর দিকে খেয়াল রাখা। সবর হলো নিজেকে ধরে রাখা: আল্লাহর পক্ষ থেকে কোনো বিপদ এলে, আল্লাহ যা হারাম করেছেন এমন কথা বা কাজ থেকে নফসকে আটকে রাখা। এ পাঠে দুটো একই গুণের দুই নাম নয়। একটির কাজ মানুষ কী করে তা ঠিক রাখা, অন্যটির কাজ মানুষ কী সয়ে যায় তা সামলানো।"
          },
          {
            "en": "Al-Qurtubi has him fear Allah and be patient over afflictions and away from sins. Al-Baghawi repeats at-Tabari's pairing of obligations and prohibitions. As-Sa'di takes patience beyond suffering: patience over pains and calamities, and patience in carrying out commands. The Muyassar says patient under trials. Ma'arif al-Qur'an glosses taqwa as fear of Allah that abstains from sins, and patience as endurance in distress. Each, in his own words, joins restraint from the forbidden to steadiness under hardship.",
            "bn": "কুরতুবী বলেন: আল্লাহকে ভয় করে, বিপদে সবর করে আর গুনাহ থেকে বিরত থাকায় সবর করে। বাগাভী তাবারীর মতোই ফরজ আদায় আর গুনাহ বর্জনের জোড় আনেন। সা'দী সবরকে কেবল কষ্ট সওয়ার মধ্যে আটকে রাখেন না: ব্যথা আর বিপদে সবর, আবার আদেশ পালনেও সবর। মুয়াসসার বলে, পরীক্ষার সময় সবর। মাআরিফুল কুরআনের ব্যাখ্যায় তাকওয়া হলো আল্লাহর এমন ভয়, যা গুনাহ থেকে দূরে রাখে, আর সবর হলো কষ্টের সময় টিকে থাকা। প্রত্যেকে নিজের ভাষায় একই জোড় বাঁধেন: হারাম থেকে সংযম, আর কষ্টের মধ্যে অবিচল থাকা।"
          },
          {
            "en": "Two early readings tie the pair to Yusuf's own life. At-Tabari, with al-Baghawi after him, relates from Mujahid: he guards against disobeying Allah and is patient in prison. Al-Baghawi also reports from Ibn 'Abbas: he guards against zina and is patient in remaining unmarried. On these readings the general sentence looks back at 12:23 to 12:33, where he refused and chose prison, and at the years that followed. The rule is general, man, whoever; its first example was standing in front of them.",
            "bn": "প্রথম যুগের দুটি ব্যাখ্যা এ জোড়কে ইউসুফ (আঃ)-এর নিজের জীবনের সঙ্গে জুড়ে দেয়। তাবারী, আর তাঁর পরে বাগাভী, মুজাহিদ থেকে আনেন: সে আল্লাহর নাফরমানি থেকে বাঁচে আর কারাগারে সবর করে। বাগাভী ইবন আব্বাস (রাঃ) থেকেও আনেন: সে যিনা থেকে বাঁচে আর অবিবাহিত থাকায় সবর করে। এ দুই ব্যাখ্যায় সাধারণ বাক্যটি পেছনে তাকায় ১২:২৩ থেকে ১২:৩৩ পর্যন্ত আয়াতগুলোর দিকে, যেখানে তিনি প্রত্যাখ্যান করেছিলেন আর কারাগার বেছে নিয়েছিলেন, আর তার পরের বছরগুলোর দিকে। নিয়ম সবার জন্য, মান, যে-ই হোক। তার প্রথম উদাহরণ দাঁড়িয়ে ছিল তাদের সামনেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Yattaqi, With the Ya' Kept",
          "bn": "ইয়া সহ ইয়াত্তাকী"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a further reading difference here. Ibn Kathir, the reader, read innahu man yattaqī with the final ya' kept, where the majority read yattaqi, the ya' dropped, as a conditional verb. He explains two ways to account for it. Man may mean alladhi, he who, so that yattaqi is not conditional and keeps its ya', and wa yasbiru is then read with a damma. Or man stays conditional and yasbir stays jussive, the ya' kept and the jussive shown only by dropping the vowel it would originally carry; he cites lines of poetry for that usage.",
            "bn": "কুরতুবী এখানে পাঠের আরেকটি ভিন্নতা উল্লেখ করেন। কারী ইবন কাসীর পড়েছেন ইন্নাহু মান ইয়াত্তাকী, শেষের ইয়া রেখে। অধিকাংশের পাঠে শর্তবাচক ক্রিয়া হিসেবে ইয়াটি বাদ পড়ে। কুরতুবী এর দুটি ব্যাখ্যা দেন। এক, মান এখানে আল্লাযী অর্থে, অর্থাৎ 'যে ব্যক্তি'। তখন ইয়াত্তাকী শর্তের ক্রিয়া নয়, তাই ইয়া থেকে যায়, আর ওয়া ইয়াসবিরু পড়া হয় পেশ দিয়ে। দুই, মান শর্তবাচকই থাকে, ইয়াসবির জযমযুক্ত থাকে। ইয়াটি তখনও থাকে, আর জযম বোঝা যায় ইয়ার মূল স্বরচিহ্নটি বাদ পড়ায়। এ ব্যবহারের পক্ষে তিনি কবিতার পঙক্তি আনেন।"
          },
          {
            "en": "He adds that the majority reading is plain, and that the pronoun in innahu refers to the matter as a whole: truly, the case is this. The verse then closes: fa-inna Allaha la yudi'u ajra al-muhsinin, Allah does not let the reward of those who do good be lost. At-Tabari: He does not void the reward of a person's good conduct or the recompense of obeying Him. Al-Qurtubi names the muhsinun as those patient in His trial and upright in His obedience. As-Sa'di: this very taqwa and patience is ihsan.",
            "bn": "তিনি আরও বলেন, অধিকাংশের পাঠটিই সহজ ও স্পষ্ট, আর ইন্নাহু-র সর্বনামটি পুরো বিষয়টিকে বোঝায়: আসল কথা হলো এই। তারপর আয়াতের সমাপ্তি: ফাইন্নাল্লাহা লা ইউদীউ আজরাল মুহসিনীন, আল্লাহ সৎকর্মশীলদের প্রতিদান নষ্ট করেন না। তাবারীর ব্যাখ্যায়, মানুষের সদাচরণের সওয়াব আর তাঁর আনুগত্যের বিনিময় তিনি বাতিল করেন না। কুরতুবীর মতে মুহসিন তারা, যারা তাঁর দেওয়া পরীক্ষায় সবর করে আর তাঁর আনুগত্যে অটল থাকে। সা'দী বলেন: এই তাকওয়া আর সবরই তো ইহসান।"
          }
        ]
      },
      {
        "h": {
          "en": "Grace First, Then the Rule",
          "bn": "আগে অনুগ্রহ, তারপর নিয়ম"
        },
        "p": [
          {
            "en": "After 12:89, notice what the sentence names. Having asked them once what they did, he now speaks of Allah's favour and of a rule for whoever keeps taqwa and patience. Most glosses of the favour name the reunion, the rescue or the rule; at-Tabari's alone mentions their part. The reckoning belongs to the verses after: in 12:91 they own their fault, and in 12:92 he answers, no blame on you today. The verse describes brothers in a story and licenses nothing against any living person or community.",
            "bn": "১২:৮৯ আয়াতের পর খেয়াল করুন, বাক্যটি কীসের নাম নেয়। একবার তাদের জিজ্ঞেস করে ফেলেছেন তারা কী করেছিল, এবার তিনি বলেন আল্লাহর অনুগ্রহের কথা, আর তাকওয়া ও সবর আঁকড়ে থাকা যে কারও জন্য একটি নিয়মের কথা। অনুগ্রহের ব্যাখ্যায় বেশির ভাগ তাফসীর বলে মিলন, মুক্তি বা রাজত্বের কথা। কেবল তাবারীর ব্যাখ্যায় তাদের ভূমিকার উল্লেখ আছে। হিসাব-নিকাশের পালা পরের আয়াতগুলোতে: ১২:৯১ আয়াতে তারা দোষ স্বীকার করে, আর ১২:৯২ আয়াতে তিনি বলেন, আজ তোমাদের বিরুদ্ধে কোনো অভিযোগ নেই। আয়াতটি একটি কাহিনির ভাইদের কথা বলে। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু বলার অনুমতি এতে নেই।"
          },
          {
            "en": "None of the eight commentaries consulted attaches a hadith to this verse. A narration on the same pairing, not attached to it by any of them, is in Sahih Muslim, number 2999, from Suhayb (RA), rendered here from its Arabic: \"How wonderful is the affair of the believer: all of it is good, and that is so for no one but the believer. If something pleasing reaches him, he gives thanks, and that is good for him. If harm reaches him, he is patient, and that is good for him.\"",
            "bn": "এ আয়াতের জন্য দেখা আটটি তাফসীরের কোনোটিই আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি। একই জোড়ের কথা আছে এমন একটি হাদিস সহীহ মুসলিমে, ২৯৯৯ নম্বরে, সুহাইব (রাঃ)-এর বর্ণনায়। তাফসীরকারদের কেউ একে এই আয়াতের সঙ্গে জুড়ে দেননি। আরবি থেকে এর অর্থ: \"মুমিনের ব্যাপারটা কত চমৎকার! তার সব কিছুই কল্যাণ, আর মুমিন ছাড়া আর কারও জন্য এমন নয়। আনন্দের কিছু ঘটলে সে শোকর করে, তাতে তার কল্যাণ হয়। কষ্ট এলে সে সবর করে, তাতেও তার কল্যাণ হয়।\""
          },
          {
            "en": "The turn is towards the reader. Patience and taqwa are judged by their end, and the end is Allah's to bring: from inside the well or the prison, no one could have seen this day. And when a person speaks of hardships survived, the verse offers a way to tell it. Name Allah's grace first, then the rule that anyone may hold to, and let the faults of others wait for their proper time, or for forgiveness.",
            "bn": "এবার মুখ ফেরানো পাঠকের দিকে। সবর আর তাকওয়ার বিচার হয় শেষ দেখে, আর শেষটা আনেন আল্লাহ। কূপের ভেতর বা কারাগারের ভেতর থেকে এই দিনটি কেউ দেখতে পায়নি। আর কেউ যখন পেরিয়ে আসা কষ্টের কথা বলে, আয়াতটি তাকে বলার একটা ধরন শিখিয়ে দেয়। আগে বলুন আল্লাহর অনুগ্রহের কথা, তারপর সেই নিয়মের কথা যা যে কেউ আঁকড়ে ধরতে পারে। অন্যদের দোষের কথা থাকুক তার নিজের সময়ের অপেক্ষায়, কিংবা ক্ষমার অপেক্ষায়।"
          }
        ]
      }
    ]
  },
  "12:92": {
    "sections": [
      {
        "h": {
          "en": "Eleven Words After a Confession",
          "bn": "স্বীকারোক্তির জবাবে এগারো শব্দ"
        },
        "p": [
          {
            "en": "In 12:91 the brothers swear by Allah that He has preferred Yusuf (AS) over them, and they add, wa-in kunna la-khati'in: and we were indeed in the wrong. 12:92 is his answer, and it is short: eleven Arabic words in three clauses. La tathriba 'alaykum al-yawm, no blame upon you today. Yaghfiru Allahu lakum, may Allah forgive you. Wa-huwa arhamu ar-rahimin, and He is the most merciful of the merciful. Nothing in it mentions the well, the shirt or the years between.",
            "bn": "১২:৯১ আয়াতে ভাইয়েরা আল্লাহর কসম খেয়ে বলে, আল্লাহ ইউসুফ (আঃ)-কে তাদের উপর মর্যাদা দিয়েছেন। সঙ্গে যোগ করে, ওয়া ইন কুন্না লাখাতিঈন: আর আমরাই ছিলাম অপরাধী। ১২:৯২ আয়াত তাঁর জবাব, আর জবাবটা ছোট। আরবিতে মাত্র ১১টি শব্দ, তিনটি বাক্যাংশে ভাগ করা। লা তাছরীবা আলাইকুমুল ইয়াওম: আজ তোমাদের কোনো দোষারোপ নেই। ইয়াগফিরুল্লাহু লাকুম: আল্লাহ তোমাদের মাফ করুন। ওয়া হুয়া আরহামুর রাহিমীন: তিনি দয়ালুদের মধ্যে সবচেয়ে বড় দয়ালু। কূপ, জামা কিংবা মাঝের বছরগুলোর কোনো উল্লেখই এতে নেই।"
          },
          {
            "en": "At-Tabari and Ibn Kathir both relate, through as-Suddi, how the exchange went: the brothers apologised to Yusuf, i'tadharu ilayhi, and he replied with these words, meaning, I will not mention your sin to you. Al-Qurtubi and al-Baghawi each open his reply with a note on the speaker: he was halim, forbearing, and al-Qurtubi adds muwaffaq, granted success. As-Sa'di says he spoke out of karam and jud, nobility and generosity. Ibn Kathir's abridged English, which treats 12:89 to 12:92 as one passage, notes that he felt compassion for his father and brothers while he held kingship, authority and power.",
            "bn": "তাবারী ও ইবন কাসীর দুজনেই সুদ্দীর সূত্রে কথোপকথনটা বর্ণনা করেন। ভাইয়েরা ইউসুফের কাছে ওজর পেশ করেছিল, ই'তাযারূ ইলাইহি। জবাবে তিনি এ কথাগুলো বললেন, যার অর্থ: তোমাদের গুনাহের কথা আমি আর তুলব না। কুরতুবী ও বাগাভী দুজনেই তাঁর জবাবের শুরুতে বক্তার পরিচয় দেন: তিনি ছিলেন হালীম, সহনশীল। কুরতুবী আরও বলেন, মুওয়াফফাক, আল্লাহর দেওয়া তাওফীকপ্রাপ্ত। সা'দীর ভাষায় তিনি কথাটা বলেছিলেন কারাম ও জূদ থেকে, অর্থাৎ মহত্ত্ব আর উদারতা থেকে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১২:৮৯ থেকে ১২:৯২ পর্যন্ত একটি অংশ ধরে আলোচনা করে। সেখানে বলা হয়েছে, রাজত্ব, কর্তৃত্ব আর ক্ষমতা হাতে থাকা অবস্থায় পিতা ও ভাইদের জন্য তাঁর মনে মমতা জেগেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Tathrib, a Word for Taunting",
          "bn": "তাছরীব: খোঁটা দেওয়ার শব্দ"
        },
        "p": [
          {
            "en": "What exactly is being waived? At-Tabari glosses la tathriba as la ta'yir 'alaykum, no taunting you with it, and records the same gloss from Sufyan. From Ibn Ishaq he gives la ta'nib, no rebuke, and from Qatada the plain statement that Yusuf (AS) did not reproach them for their deeds. Al-Qurtubi lists three words together, ta'yir, tawbikh and lawm: taunting, rebuke and blame. Al-Muyassar keeps to one, ta'nib. Al-Qurtubi also cites al-Asma'i, for whom tharraba 'alayhi means to denounce someone's deed as ugly.",
            "bn": "ঠিক কোন জিনিসটা মাফ করা হলো? তাবারী লা তাছরীবার ব্যাখ্যা দেন লা তা'য়ীরা আলাইকুম দিয়ে, অর্থাৎ এ নিয়ে তোমাদের খোঁটা দেওয়া হবে না। সুফিয়ান থেকেও তিনি একই ব্যাখ্যা আনেন। ইবন ইসহাক থেকে আনেন লা তা'নীব, কোনো ভর্ৎসনা নেই। কাতাদা থেকে আনেন সোজা কথা: ইউসুফ (আঃ) তাদের কাজের জন্য তাদের তিরস্কার করেননি। কুরতুবী একসঙ্গে তিনটি শব্দ আনেন: তা'য়ীর, তাওবীখ ও লাওম, মানে খোঁটা, ভর্ৎসনা আর দোষারোপ। মুয়াসসার একটি শব্দেই থামে, তা'নীব। কুরতুবী আসমাঈর কথাও আনেন। তাঁর মতে ছাররাবা আলাইহি মানে কারও কাজকে কুৎসিত বলে ধিক্কার দেওয়া।"
          },
          {
            "en": "At-Tabari's gloss does not stop at the tongue. No taunting, he says, and no spoiling of what lies between me and you: the hurma, the sanctity, and the right of brotherhood; rather, you have from me pardon and overlooking, as-safh wa-l-'afw. Al-Qurtubi gives the same explanation from az-Zajjaj, followed in the same passage by a note on the root: the original sense of tathrib is ifsad, spoiling, and this is the dialect of the people of the Hijaz. On this reading the brothers are told that the bond itself stays whole, not only that they will be spared a lecture.",
            "bn": "তাবারীর ব্যাখ্যা শুধু মুখের কথায় সীমাবদ্ধ নয়। তিনি বলেন, খোঁটা তো নেই-ই, তোমাদের আর আমার মাঝে যা আছে, তাও নষ্ট হবে না। সেটা হলো হুরমত, পারস্পরিক মর্যাদা, আর ভ্রাতৃত্বের হক। বরং আমার কাছে তোমাদের জন্য আছে সাফহ ও আফও, উপেক্ষা আর ক্ষমা। কুরতুবী একই ব্যাখ্যা আনেন যাজ্জাজ থেকে, আর একই অনুচ্ছেদে ধাতুটি নিয়ে একটি কথা আছে: তাছরীবের মূল অর্থ ইফসাদ, নষ্ট করা, আর এটি হিজাযবাসীর ভাষা। এ ব্যাখ্যায় ভাইদের শুধু এটুকু জানানো হচ্ছে না যে তাদের লম্বা উপদেশ শুনতে হবে না। জানানো হচ্ছে, সম্পর্কটাই অটুট থাকবে।"
          },
          {
            "en": "Al-Qurtubi also quotes a line by the poet Bishr that uses the word: I pardoned them with the pardon of one who does not reproach, ghayra muthrib, and left them to the punishment of an endless day. The line separates two things easily run together. A person can let a wrong go and still remind the wrongdoer of it at every turn; the poet claims to have pardoned without the reminder. Yusuf (AS) goes further. Where the poet leaves his enemies to punishment, he asks Allah to forgive his brothers.",
            "bn": "কুরতুবী কবি বিশরের একটি চরণও উদ্ধৃত করেন, যেখানে শব্দটি এসেছে: আমি তাদের মাফ করেছি এমনভাবে, যেভাবে খোঁটা না দেওয়া মানুষ মাফ করে, গাইরা মুছাররিব, আর তাদের ছেড়ে দিয়েছি অনন্ত এক দিনের শাস্তির হাতে। দুটি জিনিস প্রায়ই এক হয়ে যায়, চরণটি সে দুটিকে আলাদা করে দেখায়। মানুষ অন্যায় মাফ করেও প্রতিটি সুযোগে অন্যায়কারীকে তা মনে করিয়ে দিতে পারে। কবির দাবি, তিনি মাফ করেছেন খোঁটা ছাড়াই। ইউসুফ (আঃ) আরও এক ধাপ এগিয়ে যান। কবি শত্রুদের ছেড়ে দেন শাস্তির হাতে, আর তিনি ভাইদের জন্য আল্লাহর কাছে ক্ষমা চান।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Verb in a Hadith",
          "bn": "হাদীসে একই ক্রিয়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi points to a use of the same verb by the Prophet ﷺ. Sahih Muslim records it, number 1703, from Abu Hurayra (RA), in this English rendering: \"When the slave-woman of any of you commits adultery and this (offence of hers) becomes clear, she should be flogged (as the prescribed) punishment, but hurl no reproach at her. If she commits adultery again, she should (again be punished) by flogging, but hurl no reproach upon her. If she commits fornication for the third time and it becomes clear, then he should sell her, even if only for a rope of hair.\"",
            "bn": "কুরতুবী দেখান, নবী ﷺ-ও একই ক্রিয়া ব্যবহার করেছেন। সহীহ মুসলিমে আবু হুরায়রা (রাঃ) থেকে হাদীসটি আছে, নম্বর ১৭০৩। আরবি থেকে তার অর্থ: \"তোমাদের কারও দাসী যদি যিনা করে এবং তার যিনা স্পষ্ট হয়ে যায়, তবে সে যেন তাকে হদের বেত্রাঘাত করে, আর তাকে খোঁটা না দেয়। তারপর আবার যিনা করলে আবার বেত্রাঘাত করবে, আর খোঁটা দেবে না। তারপর তৃতীয়বার যিনা করলে এবং তা স্পষ্ট হলে সে যেন তাকে বিক্রি করে দেয়, চুলের একটি রশির বিনিময়ে হলেও।\""
          },
          {
            "en": "The narration concerns a legal penalty, not this verse, and none of the commentaries consulted attaches it to 12:92; al-Qurtubi cites it only for the meaning of la yuthrib 'alayha, do not taunt her. Still, the usage is instructive. Even where a penalty has been carried out in full, the Prophet ﷺ forbids adding reproach on top of it. Yusuf's (AS) brothers faced no penalty at all, and the reproach was waived as well. In both cases, once the matter is settled, reminding the person of it is no part of the settlement.",
            "bn": "হাদীসটি একটি শরয়ী শাস্তি নিয়ে, এ আয়াত নিয়ে নয়। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই একে ১২:৯২ আয়াতের সঙ্গে যুক্ত করেনি। কুরতুবী এটি এনেছেন কেবল লা ইউছাররিব আলাইহা, তাকে খোঁটা দিয়ো না, কথাটির অর্থ বোঝাতে। তবু শব্দের এ ব্যবহার থেকে শেখার আছে। শাস্তি পুরোপুরি কার্যকর হয়ে যাওয়ার পরও নবী ﷺ তার উপর খোঁটা চাপাতে নিষেধ করেছেন। ইউসুফ (আঃ)-এর ভাইদের তো কোনো শাস্তিই পেতে হয়নি, খোঁটাও মাফ হয়ে গেছে। দুই ক্ষেত্রেই বিষয়টা মীমাংসা হয়ে যাওয়ার পর তা মনে করিয়ে দেওয়া মীমাংসার অংশ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Does Today Belong?",
          "bn": "'আজ' কোন বাক্যের অংশ"
        },
        "p": [
          {
            "en": "The Arabic can be paused in two places, and the pause changes the sense. Al-Qurtubi reads la tathriba 'alaykum al-yawm as one complete statement, wa-tamma al-kalam, with today attached to the blame: no reproach on you today. Yaghfiru Allahu lakum then begins a new sentence. He reports that al-Akhfash allowed a pause after 'alaykum instead, so that the verse would run: no blame upon you; today Allah forgives you. The printed mushaf places its pause mark after al-yawm, the first way.",
            "bn": "আরবি বাক্যটিতে দুই জায়গায় থামা যায়, আর থামার জায়গা বদলালে অর্থও বদলায়। কুরতুবী লা তাছরীবা আলাইকুমুল ইয়াওমকে একটি পূর্ণ বাক্য ধরেন, ওয়া তাম্মাল কালাম। এতে 'আজ' যুক্ত হয় দোষারোপের সঙ্গে: আজ তোমাদের কোনো দোষারোপ নেই। এরপর ইয়াগফিরুল্লাহু লাকুম থেকে নতুন বাক্য শুরু। তিনি জানান, আখফাশ এর বদলে আলাইকুমের পরে থামা জায়েয বলেছেন। তখন আয়াতের অর্থ দাঁড়ায়: তোমাদের কোনো দোষারোপ নেই, আজ আল্লাহ তোমাদের মাফ করছেন। ছাপা মুসহাফে থামার চিহ্নটি আছে আল-ইয়াওমের পরে, অর্থাৎ প্রথম পদ্ধতিতে।"
          },
          {
            "en": "Al-Qurtubi says the first is in common use, al-musta'mal, and gives his reason. To pause on 'alaykum and begin al-yawm yaghfiru Allahu lakum would make the forgiveness a firm statement about that very day, and that, he says, could only come from revelation. Read the first way, yaghfiru is an imperfect verb carrying the sense of a prayer. He does not deny that al-Akhfash permitted the other pause. He reports it, and gives his own reason for keeping to the common reading.",
            "bn": "কুরতুবী বলেন, প্রথম পদ্ধতিটিই প্রচলিত, আল-মুস্তা'মাল। কারণও তিনি বলেন। আলাইকুমে থেমে আল-ইয়াওমা ইয়াগফিরুল্লাহু লাকুম দিয়ে শুরু করলে কথাটা হয়ে যায় ঠিক সেদিনই ক্ষমা হয়ে যাওয়ার নিশ্চিত ঘোষণা। তাঁর মতে এমন ঘোষণা ওহী ছাড়া সম্ভব নয়। প্রথম পদ্ধতিতে পড়লে ইয়াগফিরু হলো ভবিষ্যৎকালের ক্রিয়া, যার ভেতরে আছে দোয়ার অর্থ। আখফাশ যে অন্য জায়গায় থামা জায়েয বলেছেন, কুরতুবী তা অস্বীকার করেন না। তিনি মতটি উল্লেখ করেন, আর প্রচলিত পদ্ধতিতে থাকার পক্ষে নিজের যুক্তি দেন।"
          },
          {
            "en": "Ibn Kathir and al-Baghawi spell out what joining today to the reproach implies. Ibn Kathir: no rebuke on you and no blame on you today, and I will not bring up your sin against me after today. Al-Baghawi, in nearly the same words: no taunting on you today, and I will not mention your sin to you after today. On this gloss, today is not a limit after which reproach may resume; it marks the start of a silence meant to last. Al-Qurtubi adds that al-yawm here means al-waqt: the time, now.",
            "bn": "'আজ'-কে দোষারোপের সঙ্গে যুক্ত করলে কী দাঁড়ায়, ইবন কাসীর ও বাগাভী তা খুলে বলেন। ইবন কাসীরের ভাষায়: আজ তোমাদের কোনো ভর্ৎসনা নেই, কোনো তিরস্কার নেই, আর আজকের পর আমার প্রতি তোমাদের অন্যায়ের কথা আমি আর তুলব না। বাগাভী বলেন প্রায় একই ভাষায়: আজ তোমাদের কোনো খোঁটা নেই, আর আজকের পর তোমাদের গুনাহের কথা আমি উল্লেখ করব না। এ ব্যাখ্যায় 'আজ' কোনো মেয়াদ নয়, যার পরে আবার খোঁটা শুরু হবে। বরং এখান থেকে শুরু এমন এক নীরবতার, যা স্থায়ী হওয়ার কথা। কুরতুবী যোগ করেন, এখানে আল-ইয়াওম মানে আল-ওয়াক্ত, অর্থাৎ সময়টা, এখন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer, Not a Pronouncement",
          "bn": "রায় নয়, দোয়া"
        },
        "p": [
          {
            "en": "At-Tabari calls yaghfiru Allahu lakum a du'a from Yusuf (AS) for his brothers: that Allah forgive them the wrong they did him and the injustice they committed, and cover it over for them. Ibn Kathir says that having waived the reproach he gave them more, zadahum, by praying for their forgiveness. Al-Qurtubi: he asked Allah to cover them and to have mercy on them. Ibn Ishaq and ath-Thawri, in Ibn Kathir, explain the verb as yasturu: Allah will veil what you did. The waiver is Yusuf's own; the forgiveness he asks of Allah.",
            "bn": "তাবারী ইয়াগফিরুল্লাহু লাকুমকে বলেন ভাইদের জন্য ইউসুফ (আঃ)-এর দোয়া। তিনি চাইছেন, তাঁর প্রতি তারা যে অন্যায় করেছে আর যে জুলুম করেছে, আল্লাহ যেন তা মাফ করেন এবং ঢেকে দেন। ইবন কাসীর বলেন, খোঁটা মাফ করার পর তিনি তাদের আরও দিলেন, যাদাহুম: তাদের মাগফিরাতের জন্য দোয়া করলেন। কুরতুবীর ভাষায়, তিনি আল্লাহর কাছে চাইলেন যেন তিনি তাদের দোষ ঢেকে দেন আর তাদের উপর রহম করেন। ইবন কাসীরের তাফসীরে ইবন ইসহাক ও সাওরী ক্রিয়াটির অর্থ করেন ইয়াস্তুরু: তোমরা যা করেছ, আল্লাহ তা গোপন রাখবেন। খোঁটা মাফ করাটা ইউসুফের নিজের কাজ, আর মাগফিরাত তিনি চেয়ে নেন আল্লাহর কাছে।"
          },
          {
            "en": "The closing clause gives the ground of the prayer. Wa-huwa arhamu ar-rahimin: and He is the most merciful of all who show mercy. At-Tabari and al-Muyassar both attach the same condition to it: most merciful to whoever repents of his sin and returns to obeying Him. At-Tabari also records from Ibn Ishaq that the words came when they confessed their sin, hina i'tarafu bi-dhanbihim. The order matters. The brothers' admission in 12:91 comes first, and the prayer answers it. Allah's forgiveness is asked for, not presumed.",
            "bn": "শেষ বাক্যাংশে দোয়ার ভিত্তি। ওয়া হুয়া আরহামুর রাহিমীন: যারা দয়া করে, তাদের সবার চেয়ে তিনি বড় দয়ালু। তাবারী ও মুয়াসসার দুজনেই এর সঙ্গে একই শর্ত জুড়ে দেন: যে নিজের গুনাহ থেকে তওবা করে আর তাঁর আনুগত্যে ফিরে আসে, তার প্রতি তিনি সবচেয়ে দয়ালু। তাবারী ইবন ইসহাক থেকে আরও আনেন, কথাটা এসেছিল যখন তারা নিজেদের গুনাহ স্বীকার করল, হীনা ই'তারাফূ বিযাম্বিহিম। ক্রমটা খেয়াল করার মতো। আগে ১২:৯১ আয়াতে ভাইদের স্বীকারোক্তি, তারপর তার জবাবে দোয়া। আল্লাহর মাগফিরাত এখানে চেয়ে নেওয়া হচ্ছে, ধরে নেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Pardon Without the Reminder",
          "bn": "খোঁটাহীন মাফ"
        },
        "p": [
          {
            "en": "As-Sa'di gives the fullest account of what the verse achieves. He paraphrases: I will not reproach you or blame you. Then he says Yusuf (AS) pardoned them completely, samaha lahum samahan tamman, without taunting them by mentioning the earlier sin, and prayed for their forgiveness and mercy. This, he concludes, is the utmost of ihsan, which comes only from the elect of creation and the best of the chosen. Three things are joined in his reading: the pardon, the silence about the past, and the prayer.",
            "bn": "আয়াতটি কী করে দেখায়, তার সবচেয়ে পূর্ণ বিবরণ দেন সা'দী। তাঁর ভাষ্যে কথাটা এমন: আমি তোমাদের খোঁটা দেব না, দোষও দেব না। তারপর তিনি বলেন, ইউসুফ (আঃ) তাদের পুরোপুরি মাফ করে দিলেন, সামাহা লাহুম সামাহান তাম্মান। আগের গুনাহের কথা তুলে কোনো খোঁটা দিলেন না, আর তাদের মাগফিরাত ও রহমতের জন্য দোয়া করলেন। সা'দীর উপসংহার: এ হলো ইহসানের চূড়ান্ত রূপ, যা কেবল সৃষ্টির বিশেষ বান্দা আর বাছাই করা শ্রেষ্ঠ মানুষদের কাছ থেকেই আসে। তাঁর পাঠে তিনটি জিনিস একসঙ্গে বাঁধা: মাফ, অতীত নিয়ে নীরবতা, আর দোয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the waiver as a step beyond forgiveness. It paraphrases: never mind taking revenge for your injustices against me; today I would not even blame you. Then, on the same verse, it says the declaration was made from the highest level of good character, whereby the oppressor was not only forgiven but spared reproach as well. Pardon is one act. Refusing to rehearse the wrong is a second, and the verse contains both.",
            "bn": "মাআরিফুল কুরআন খোঁটা মাফ করাকে দেখে ক্ষমার চেয়েও এক ধাপ উপরে। তার ভাষ্য: আমার উপর তোমাদের জুলুমের প্রতিশোধ নেওয়ার কথা তো বাদই দাও, আজ আমি তোমাদের দোষও দেব না। এরপর একই আয়াত প্রসঙ্গে বলে, ঘোষণাটি এসেছিল উত্তম চরিত্রের সর্বোচ্চ স্তর থেকে। সেখানে জালিমকে শুধু মাফই করা হয়নি, খোঁটা থেকেও রেহাই দেওয়া হয়েছে। মাফ করা এক কাজ। অন্যায়টা বারবার আওড়াতে অস্বীকার করা আরেক কাজ। আয়াতে দুটোই আছে।"
          },
          {
            "en": "The setting gives this its weight. Ibn Kathir's abridged English notes that Yusuf (AS) was then in possession of kingship, authority and power, and 12:88 shows the brothers arriving to plead for grain and charity. Nothing compelled leniency. Forgiveness from someone who has no choice is close to resignation; forgiveness from someone who could punish, or could at least speak, is a choice. The commentators' word for him, halim, names the quality that holds back when it could act.",
            "bn": "প্রেক্ষাপটই কথাটাকে ভার দেয়। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ মনে করিয়ে দেয়, ইউসুফ (আঃ)-এর হাতে তখন রাজত্ব, কর্তৃত্ব আর ক্ষমতা। আর ১২:৮৮ আয়াতে দেখা যায়, ভাইয়েরা এসেছে খাদ্যশস্য আর দান চাইতে। নরম হওয়ার কোনো বাধ্যবাধকতা তাঁর ছিল না। যার আর কোনো উপায় নেই, তার ক্ষমা অনেকটা হাল ছেড়ে দেওয়ার মতো। কিন্তু যে শাস্তি দিতে পারত, অন্তত দুকথা শোনাতে পারত, তার ক্ষমা একটা সিদ্ধান্ত। তাফসীরকারেরা তাঁকে যে শব্দে চিনিয়েছেন, হালীম, তা এমন গুণের নাম, যা করার সামর্থ্য থাকতেও নিজেকে সংযত রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report From the Conquest",
          "bn": "মক্কা বিজয়ের দিনের এক বর্ণনা"
        },
        "p": [
          {
            "en": "Al-Qurtubi relates from Ibn 'Abbas (RA) that on the day of the conquest of Makkah, while people sheltered at the House, the Prophet ﷺ took hold of the two posts of the door and praised Allah, who fulfilled His promise, helped His servant and alone defeated the confederates. He asked Quraysh what they expected. They said: good; a noble brother and son of a noble brother, and you have power. He said: I say as my brother Yusuf said, no blame upon you today. 'Umar (RA) is reported as saying he sweated with shame, having told them on entering, today we take revenge on you.",
            "bn": "কুরতুবী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: মক্কা বিজয়ের দিন লোকেরা কা'বার কাছে আশ্রয় নিয়েছিল। নবী ﷺ দরজার দুই চৌকাঠ ধরে আল্লাহর প্রশংসা করলেন, যিনি তাঁর ওয়াদা সত্য করেছেন, তাঁর বান্দাকে সাহায্য করেছেন আর একাই সম্মিলিত বাহিনীকে পরাস্ত করেছেন। তারপর কুরাইশকে জিজ্ঞেস করলেন, তোমরা কী আশা করো? তারা বলল: ভালো কিছু। আপনি সম্মানিত ভাই, সম্মানিত ভাইয়ের ছেলে, আর এখন ক্ষমতা আপনার হাতে। তিনি বললেন: আমি তা-ই বলছি, যা আমার ভাই ইউসুফ বলেছিলেন, আজ তোমাদের কোনো দোষারোপ নেই। বর্ণনায় আছে, উমর (রাঃ) বলেছেন, লজ্জায় তিনি ঘেমে গিয়েছিলেন। কারণ মক্কায় ঢোকার সময় তিনি তাদের বলেছিলেন, আজ আমরা তোমাদের উপর প্রতিশোধ নেব।"
          },
          {
            "en": "The report is well known, and moving, but this article cannot present it as a confirmed hadith. Al-Qurtubi gives it without a chain in the text fetched, and no page from al-Bukhari, Muslim or the four Sunan confirming it was found for this draft. Other wordings of the scene circulate, and none of them was confirmed on a fetched page either. None of the eight commentaries consulted attaches a sound hadith to this verse. What this article rests on is the Qur'an's own wording, and the commentators' readings of it.",
            "bn": "বর্ণনাটি সুপরিচিত, হৃদয়ও ছুঁয়ে যায়। তবু এ লেখায় একে প্রমাণিত হাদীস হিসেবে পেশ করা যাচ্ছে না। যে পাঠ দেখা হয়েছে, তাতে কুরতুবী কোনো সনদ ছাড়াই এটি এনেছেন। বুখারী, মুসলিম কিংবা চারটি সুনানগ্রন্থের কোনো পাতায় এর সমর্থন এ লেখার জন্য পাওয়া যায়নি। ঘটনাটির আরও নানা ভাষ্য প্রচলিত আছে, সেগুলোর কোনোটিও দেখা কোনো পাতায় নিশ্চিত হয়নি। যে আটটি তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি। এ লেখার ভিত্তি তাই কুরআনের নিজের শব্দ আর তার উপর তাফসীরকারদের ব্যাখ্যা।"
          },
          {
            "en": "One more thing needs saying plainly. The verse describes brothers in a story who wronged one of their own and then admitted it. It licenses nothing against any living person or community, and it makes no family's past a charge against it. The commentaries fetched for this verse do not discuss the brothers' later standing, and this article does not either. It weighs the deed and the reply; the Qur'an reports their repentance in their own words, here in 12:91 and again in 12:97.",
            "bn": "আরেকটি কথা সোজাসুজি বলা দরকার। আয়াতটি একটি কাহিনির কয়েকজন ভাইয়ের কথা বলে, যারা নিজেদেরই একজনের উপর জুলুম করেছিল, পরে তা স্বীকারও করেছিল। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। কোনো পরিবারের অতীতকেও তার বিরুদ্ধে অভিযোগ বানায় না। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, সেগুলো ভাইদের পরবর্তী মর্যাদা নিয়ে আলোচনা করেনি, এ লেখাও করছে না। এখানে বিচার শুধু কাজটার আর তার জবাবের। তাদের তওবা কুরআন তাদেরই মুখে তুলে ধরেছে, এখানে ১২:৯১ আয়াতে, আবার ১২:৯৭ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgiving From the Stronger Side",
          "bn": "ক্ষমতার জায়গা থেকে ক্ষমা"
        },
        "p": [
          {
            "en": "The practical shape of the verse is unusually clear. Most of us forgive, when we do, from weakness, or long after the person has gone. The harder moment is what Yusuf (AS) faced: the person who wronged you stands in front of you, admits it, and needs something from you. That is when the pull to collect is strongest: to make them hear it all once, to extract a fuller apology, to grant the favour with a sigh that keeps the debt open.",
            "bn": "আয়াতটির বাস্তব শিক্ষা অস্বাভাবিক রকম স্পষ্ট। আমরা যদি ক্ষমা করিও, বেশিরভাগ সময় করি দুর্বল অবস্থায়, কিংবা মানুষটা জীবন থেকে চলে যাওয়ার অনেক পরে। কঠিন মুহূর্ত সেটাই, যার মুখোমুখি হয়েছিলেন ইউসুফ (আঃ)। যে আপনার উপর অন্যায় করেছে, সে আপনার সামনে দাঁড়িয়ে, দোষ স্বীকার করছে, আর আপনার কাছে তার কিছু দরকার। ঠিক তখনই পাওনা আদায়ের টান সবচেয়ে জোরালো। ইচ্ছা হয় একবার সবটা শুনিয়ে দিতে, আরও পূর্ণ ক্ষমা চাওয়াতে, কিংবা দীর্ঘশ্বাস ফেলে অনুগ্রহটা করতে, যাতে দেনাটা খোলাই থাকে।"
          },
          {
            "en": "Try it on something small this week. Find one admitted wrong you still mention, aloud or to yourself, and decide that this is its last outing; after today, in Ibn Kathir's and al-Baghawi's words, it is not to be raised again. If the person is still in your life and you hold some advantage, as a parent, a manager or the one they owe, give what they need without the speech. Then make a quiet du'a for them by name, asking Allah, the most merciful of the merciful, to forgive them. None of this asks you to pretend nothing happened. It asks that what happened stop being used.",
            "bn": "এ সপ্তাহে ছোট কিছু দিয়ে শুরু করে দেখুন। এমন একটি অন্যায় খুঁজে বের করুন, যা অন্যজন স্বীকার করেছে, অথচ আপনি এখনো মুখে বা মনে মনে তা টেনে আনেন। ঠিক করুন, এই শেষবার। ইবন কাসীর ও বাগাভীর কথায়, আজকের পর তা আর তোলা হবে না। মানুষটা যদি এখনো আপনার জীবনে থাকে, আর বাবা-মা, ঊর্ধ্বতন বা পাওনাদার হিসেবে আপনার হাত যদি উঁচুতে থাকে, তবে উপদেশের ঝাঁপি না খুলে তার যা দরকার তা দিন। তারপর চুপিচুপি তার নাম নিয়ে দোয়া করুন, দয়ালুদের শ্রেষ্ঠ দয়ালু আল্লাহ যেন তাকে মাফ করেন। এর কোনোটিই আপনাকে ভান করতে বলে না যে কিছুই ঘটেনি। শুধু বলে, যা ঘটেছে তাকে আর অস্ত্র বানাবেন না।"
          }
        ]
      }
    ]
  },
  "12:97": {
    "sections": [
      {
        "h": {
          "en": "Home From Egypt, Eyes Restored",
          "bn": "মিসর থেকে ফেরা, দৃষ্টি ফেরা"
        },
        "p": [
          {
            "en": "The verse opens on a scene the Qur'an does not stop to describe. Al-Qurtubi notes an ellipsis in the wording and supplies it: when they returned from Egypt, they said, O our father. The bearer of good news has already laid Yusuf's shirt on Ya'qub's face in 12:96, his sight has returned, and he has reminded them that he knew from Allah what they did not. Now the sons who went down to Egypt stand before him, and their first recorded words are a request for forgiveness.",
            "bn": "আয়াতটি শুরু হয় এমন এক দৃশ্যে, যার বর্ণনায় কুরআন থামে না। কুরতুবী বলেন, এখানে বাক্যের একটা অংশ উহ্য আছে। পুরো কথাটা হলো: যখন তারা মিসর থেকে ফিরে এল, তখন বলল, হে আমাদের পিতা। ১২:৯৬ আয়াতে সুসংবাদদাতা ইউসুফ (আঃ)-এর জামা ইয়াকুব (আঃ)-এর মুখে রেখে দিয়েছে। তাঁর দৃষ্টি ফিরে এসেছে। তিনি মনে করিয়ে দিয়েছেন, আল্লাহর কাছ থেকে তিনি যা জানেন, তারা তা জানে না। এবার মিসর-ফেরত ছেলেরা তাঁর সামনে দাঁড়ায়। তাদের মুখে প্রথম যে কথা কুরআন তুলে ধরে, তা হলো ক্ষমার আবেদন।"
          },
          {
            "en": "From that ellipsis al-Qurtubi draws a further point. Those who told Ya'qub (AS) in 12:95 that he was still in his old error must have been his grandsons or other relatives and household, not these sons, for they were away in Egypt; had it been them, he adds, it would have been a further undutifulness, and Allah knows best. Ibn Kathir's Arabic says they spoke to their father gently, mutarafiqin lahu. His abridged English, which treats 12:96 to 12:98 together, says they spoke with humbleness.",
            "bn": "ওই উহ্য অংশ থেকে কুরতুবী আরেকটি কথা বের করেন। ১২:৯৫ আয়াতে যারা ইয়াকুব (আঃ)-কে বলেছিল, আপনি তো সেই পুরনো বিভ্রান্তিতেই আছেন, তারা হয়তো তাঁর নাতিরা, কিংবা পরিবার ও আত্মীয়দের অন্য কেউ। এই ছেলেরা নয়, কারণ তারা তখন মিসরে। কুরতুবীর মতে, তারা হলে সেটা হতো পিতার প্রতি নাফরমানির উপর আরও নাফরমানি। আর আল্লাহই ভালো জানেন। ইবন কাসীরের আরবি তাফসীর বলে, তারা পিতার সঙ্গে কথা বলেছিল নরম সুরে, মুতারাফফিকীনা লাহু। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণ ১২:৯৬ থেকে ১২:৯৮ একসঙ্গে আলোচনা করে, আর সেখানে বলা হয়েছে, তারা বলেছিল বিনয়ের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Address, Turned Round",
          "bn": "একই ডাক, উল্টো মুখে"
        },
        "p": [
          {
            "en": "Ya abana, O our father, is the address these brothers have used before in this surah, and the earlier uses are worth setting beside this one. In 12:11 it opened their request to take Yusuf out with them. In 12:17 it opened the report that a wolf had eaten him, brought with a shirt stained with false blood. In 12:63 and 12:65 it carried the talk of grain and of taking Binyamin. Here the same two words open a confession.",
            "bn": "ইয়া আবানা, হে আমাদের পিতা। এই সূরায় ভাইয়েরা আগেও এভাবেই পিতাকে ডেকেছে, আর সেই আগের ডাকগুলো এ ডাকের পাশে রেখে দেখা দরকার। ১২:১১ আয়াতে এই ডাক দিয়েই শুরু হয়েছিল ইউসুফ (আঃ)-কে সঙ্গে নিয়ে যাওয়ার আবদার। ১২:১৭ আয়াতে এই ডাক দিয়েই শুরু হয়েছিল নেকড়ের গল্প, সঙ্গে মিথ্যা রক্ত মাখানো জামা। ১২:৬৩ ও ১২:৬৫ আয়াতে এই ডাকে এসেছিল শস্যের কথা, বিনইয়ামীনকে নিয়ে যাওয়ার কথা। এখানে সেই একই দুটি শব্দ খুলে দেয় একটি স্বীকারোক্তি।"
          },
          {
            "en": "Ma'arif al-Qur'an says the brothers asked their father's forgiveness in a spiritually endearing way, once the truth had come out. The tone matters. They do not argue their case or explain what drove them, and they do not ask him to forget. They call him by the name that belongs to him as their father, the name they once used to take his son from him, and they ask him to stand for them before Allah.",
            "bn": "মাআরিফুল কুরআন বলে, সত্য প্রকাশ হয়ে যাওয়ার পর ভাইয়েরা পিতার কাছে ক্ষমা চেয়েছিল এমন ভঙ্গিতে, যা অন্তর ছুঁয়ে যায়। সুরটা এখানে গুরুত্বপূর্ণ। তারা নিজেদের পক্ষে যুক্তি দেখায় না, কীসে তাদের এ কাজে টেনেছিল তারও ব্যাখ্যা দেয় না। পিতাকে সব ভুলে যেতেও বলে না। তারা তাঁকে ডাকে পিতা বলে, যে ডাকে একদিন তাঁর ছেলেকে তাঁর কাছ থেকে নিয়ে গিয়েছিল। আর অনুরোধ করে, তিনি যেন আল্লাহর কাছে তাদের হয়ে দাঁড়ান।"
          }
        ]
      },
      {
        "h": {
          "en": "Istaghfir Lana, in the Commentators' Glosses",
          "bn": "ইসতাগফির লানা: তাফসীরের ভাষ্যে"
        },
        "p": [
          {
            "en": "At-Tabari paraphrases the request in full. The sons of Ya'qub, those who had parted him from Yusuf, said: O our father, ask your Lord for us to pardon us and to cover over the sins we committed against you and against Yusuf, so that He does not punish us for them on the Day of Resurrection. The request, in his reading, looks past this life to the reckoning, and names two people wronged: the father in front of them, and the brother in Egypt.",
            "bn": "তাবারী পুরো অনুরোধটা নিজের ভাষায় খুলে বলেন। যারা ইয়াকুব (আঃ)-কে ইউসুফ (আঃ)-এর কাছ থেকে বিচ্ছিন্ন করেছিল, তাঁর সেই ছেলেরা বলল: হে আমাদের পিতা, আপনার রবের কাছে আমাদের জন্য চান, তিনি যেন আমাদের মাফ করেন। আপনার আর ইউসুফের ব্যাপারে আমরা যে গুনাহ করেছি, তা যেন ঢেকে দেন, কিয়ামতের দিন যেন এর জন্য শাস্তি না দেন। তাবারীর ব্যাখ্যায় অনুরোধটা এই জীবন ছাড়িয়ে হিসাবের দিন পর্যন্ত যায়। আর এতে দুজন মজলুমের নাম আছে: সামনে দাঁড়ানো পিতা, আর মিসরে থাকা ভাই।"
          },
          {
            "en": "The Muyassar gives nearly the same words, ask your Lord to pardon us and cover our sins, and names the wrong as what they did to Yusuf and to his full brother. So Binyamin is counted too, the brother whose detention in Egypt they had reported to their father in 12:81. The verb istaghfir, ask forgiveness, is simple, but each gloss spells out whose forgiveness is sought: Allah's, asked for them by their father.",
            "bn": "মুয়াসসারের ভাষাও প্রায় একই: আপনার রবের কাছে চান, তিনি যেন আমাদের মাফ করেন, আমাদের গুনাহ ঢেকে দেন। অন্যায়টা কী ছিল, সেটাও মুয়াসসার বলে দেয়: ইউসুফ আর তাঁর সহোদর ভাইয়ের সঙ্গে তারা যা করেছে। তাহলে বিনইয়ামীনের হিসাবও এর মধ্যে আছে। মিসরে তাঁর আটকে পড়ার খবর ১২:৮১ আয়াতে তারাই পিতাকে দিয়েছিল। ইসতাগফির, ক্ষমা চান, ক্রিয়াটা সহজ। তবু প্রতিটি ব্যাখ্যা পরিষ্কার করে দেয়, ক্ষমা চাওয়া হচ্ছে আল্লাহর কাছে, আর চাইছেন তাদের পিতা, তাদের হয়ে।"
          },
          {
            "en": "Notice also the plural, dhunubana, our sins. They do not ask pardon for a single lapse, as if one bad afternoon at the well were the whole of it. At-Tabari's gloss keeps the count honest: the sins we committed against you and against Yusuf. The lie about the wolf, the shirt, the years of letting their father grieve while they knew: the word gathers all of it, and they say it of themselves, with their own pronoun, lana, for us.",
            "bn": "বহুবচনটাও খেয়াল করুন: যুনূবানা, আমাদের গুনাহসমূহ। কূপের ধারে এক খারাপ বিকেলই যেন সব, এমন ভাব করে তারা একটিমাত্র ভুলের জন্য মাফ চায় না। তাবারীর ব্যাখ্যা হিসাবটা ঠিক রাখে: আপনার আর ইউসুফের ব্যাপারে আমরা যেসব গুনাহ করেছি। নেকড়ের মিথ্যা গল্প, সেই জামা, সব জেনেও বছরের পর বছর পিতাকে শোকে ডুবে থাকতে দেওয়া, এই এক শব্দে সবই এসে যায়। আর কথাটা তারা বলছে নিজেদের নিয়েই, নিজেদের সর্বনামে: লানা, আমাদের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Ask Him, Not Only Allah",
          "bn": "কেন পিতার কাছে চাওয়া"
        },
        "p": [
          {
            "en": "Why did they not simply ask Allah themselves? Among the commentaries consulted for this verse, al-Qurtubi gives a reason in one clause: they asked him for forgiveness because they had brought upon him a pain of grief whose sin would not fall from them except by his releasing them, bi-ihlalihi. In his reading, the request is aimed at Ya'qub (AS) as the one wronged, not only as a righteous man whose prayer is hoped for. Their sin against him was partly his to forgive.",
            "bn": "তারা নিজেরাই সরাসরি আল্লাহর কাছে চাইল না কেন? এ আয়াতের জন্য দেখা তাফসীরগুলোর মধ্যে কুরতুবী এক বাক্যে এর কারণ বলেন। তারা তাঁর কাছে ক্ষমা চেয়েছিল, কারণ তারা তাঁর উপর দুঃখের এমন কষ্ট চাপিয়ে দিয়েছিল, যার গুনাহ তাঁর মাফ করে দেওয়া ছাড়া তাদের ঘাড় থেকে নামত না। কুরতুবীর শব্দ: বি-ইহলালিহি, তাঁর দায়মুক্ত করে দেওয়ার মাধ্যমে। তাঁর ব্যাখ্যায় অনুরোধটা ইয়াকুব (আঃ)-এর কাছে যাচ্ছে মজলুম হিসেবে, শুধু এমন নেককার মানুষ হিসেবে নয়, যাঁর দোয়ার আশা করা যায়। তাঁর বিরুদ্ধে করা গুনাহ মাফ করার একটা অংশ ছিল তাঁরই হাতে।"
          },
          {
            "en": "Ma'arif al-Qur'an adds a different note, which answers a worry a reader might have. It says it is obvious that a person who asks someone to pray to Allah for the forgiveness of their sins would also pray for it themselves. On this reading, going through their father did not replace their own repentance; it stood beside it. The two points sit together without conflict: they turned to Allah, and they turned to the man they had hurt.",
            "bn": "মাআরিফুল কুরআন এখানে আরেকটি কথা যোগ করে, যা পাঠকের মনে জাগা একটি খটকার জবাব দেয়। সেখানে বলা হয়েছে, যে মানুষ অন্যকে বলে তার গুনাহ মাফের জন্য আল্লাহর কাছে দোয়া করতে, সে নিজেও যে তা চাইবে, এ তো স্পষ্ট। এ ব্যাখ্যা অনুযায়ী পিতার মাধ্যমে চাওয়াটা তাদের নিজেদের তওবার বদলি ছিল না, ছিল তার পাশাপাশি। দুটি কথার মধ্যে কোনো বিরোধ নেই। তারা আল্লাহর দিকে ফিরেছে, আবার যাঁকে কষ্ট দিয়েছে তাঁর দিকেও ফিরেছে।"
          },
          {
            "en": "None of the other commentaries consulted stops on the question. At-Tabari and the Muyassar gloss the request, as-Sa'di and al-Baghawi pass to the confession, and Ibn Kathir's Arabic records only the gentleness of their tone. So this article gives the two readings that were found, al-Qurtubi's and that of Ma'arif al-Qur'an, and does not add a third from elsewhere.",
            "bn": "দেখা অন্য তাফসীরগুলোর কোনোটিই এ প্রশ্নে থামেনি। তাবারী আর মুয়াসসার অনুরোধটার ব্যাখ্যা দেন। সা'দী আর বাগাভী চলে যান স্বীকারোক্তির দিকে। ইবন কাসীরের আরবি তাফসীর শুধু তাদের নরম সুরের কথা বলে। তাই এ লেখায় থাকছে যে দুটি ব্যাখ্যা পাওয়া গেছে সেগুলোই, কুরতুবীর আর মাআরিফুল কুরআনের। বাইরে থেকে তৃতীয় কোনো ব্যাখ্যা এখানে জোড়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Inna Kunna Khati'in",
          "bn": "ইন্না কুন্না খাতিঈন"
        },
        "p": [
          {
            "en": "The second half of the verse is the confession itself: inna kunna khati'in, indeed we were sinners. Al-Baghawi glosses khati'in with a single word, mudhnibin, people who sinned. At-Tabari explains it as in what we did to him, and then puts a sentence in their mouths: so we have confessed our sins. As-Sa'di opens his comment with the same idea, that they acknowledged their sin, and adds the words where we did to you what we did.",
            "bn": "আয়াতের দ্বিতীয় অর্ধেকই স্বীকারোক্তি: ইন্না কুন্না খাতিঈন, নিশ্চয়ই আমরা ছিলাম অপরাধী। বাগাভী খাতিঈন শব্দের অর্থ দেন একটি শব্দে: মুযনিবীন, গুনাহগার। তাবারী ব্যাখ্যা করেন, অর্থাৎ তাঁর সঙ্গে আমরা যা করেছি তাতে। তারপর তাদের মুখে একটি বাক্য বসিয়ে দেন: আমরা তো আমাদের গুনাহ স্বীকার করে নিলাম। সা'দীও তাঁর আলোচনা শুরু করেন একই কথায়, তারা নিজেদের গুনাহ মেনে নিয়েছিল। সঙ্গে যোগ করেন তাদের মুখের কথা: আপনার সঙ্গে আমরা যা করেছি, তাতে।"
          },
          {
            "en": "Notice what the sentence leaves out. It has no but in it: no word about the complaint of 12:8, that Yusuf and his brother were dearer to their father, and none about the long years since the well. The Muyassar names the wrong as what they did to Yusuf and his brother, and the verse names no cause at all. An admission with a reason attached tends to become a defence. Here it stays an admission.",
            "bn": "বাক্যটি কী বাদ দিয়েছে, সেটা খেয়াল করুন। এতে কোনো 'কিন্তু' নেই। ১২:৮ আয়াতের সেই অভিযোগের কথা নেই, ইউসুফ আর তাঁর ভাই পিতার কাছে বেশি প্রিয়। কূপের পর কেটে যাওয়া দীর্ঘ বছরগুলোর কথাও নেই। মুয়াসসার অন্যায়টার পরিচয় দেয় এভাবে: ইউসুফ আর তাঁর ভাইয়ের সঙ্গে তারা যা করেছে। কারণের কথা আয়াত নিজে একবারও তোলে না। স্বীকারোক্তির সঙ্গে কারণ জুড়ে দিলে তা প্রায়ই আত্মপক্ষ সমর্থন হয়ে দাঁড়ায়। এ স্বীকারোক্তি স্বীকারোক্তিই থেকে যায়।"
          },
          {
            "en": "They had said nearly the same words once already. In 12:91, standing before Yusuf (AS), they said wa in kunna la-khati'in, and we have indeed been sinners. Now, before their father, they say inna kunna khati'in again. Each of the two they had wronged most directly hears the admission in person. At-Tabari, al-Baghawi and as-Sa'di all take the word as a plain admission of sin, and nothing in the verse shows them softening it.",
            "bn": "প্রায় এই কথাই তারা আগে একবার বলেছে। ১২:৯১ আয়াতে ইউসুফ (আঃ)-এর সামনে দাঁড়িয়ে তারা বলেছিল, ওয়া ইন কুন্না লাখাতিঈন, আমরা সত্যিই অপরাধী ছিলাম। এবার পিতার সামনে আবার বলছে, ইন্না কুন্না খাতিঈন। যে দুজনের উপর তাদের অন্যায় সবচেয়ে সরাসরি পড়েছিল, দুজনেই স্বীকারোক্তিটা শুনলেন নিজের কানে। তাবারী, বাগাভী আর সা'দী তিনজনই শব্দটিকে নিয়েছেন গুনাহের সোজাসাপ্টা স্বীকারোক্তি হিসেবে। আয়াতে কথাটা নরম করার কোনো চেষ্টা দেখা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Releasing a Wrong by Name",
          "bn": "নাম ধরে দায়মুক্তি"
        },
        "p": [
          {
            "en": "Al-Qurtubi does not leave the point inside the story. He says, in his own voice, that the ruling holds for anyone who has harmed a Muslim unjustly, in his person, his property or anything else: he must seek that person's release, and tell him of the wrong and its extent. Whether a general release is enough, a vague please forgive me for anything, he notes is disputed, and he takes the view that it does not avail.",
            "bn": "কুরতুবী কথাটাকে কাহিনির ভেতরে আটকে রাখেন না। তিনি নিজের ভাষ্যে বলেন, এ বিধান এমন প্রত্যেকের বেলায় খাটে, যে অন্যায়ভাবে কোনো মুসলিমকে কষ্ট দিয়েছে, তার জানে, মালে বা অন্য কিছুতে। তাকে অবশ্যই ওই মানুষটির কাছে দায়মুক্তি চাইতে হবে, আর অন্যায়টা কী ছিল এবং কতটুকু ছিল, তা তাকে জানাতে হবে। মোটা দাগে মাফ চাওয়া, অর্থাৎ 'যা কিছু করেছি মাফ করে দিও' বলা যথেষ্ট কি না, তা নিয়ে মতভেদ আছে বলে তিনি উল্লেখ করেন। তাঁর মতে এতে কাজ হয় না।"
          },
          {
            "en": "His reason is practical. If the wronged person were told of a wrong of real size and weight, he might not be willing to release it; a blanket pardon, given without knowing, is not the same consent. Al-Qurtubi then brings a narration to the verse, citing Sahih al-Bukhari and others from Abu Hurayrah (RA). Al-Bukhari records it at number 2449, and the wording quoted below is his, from the page consulted.",
            "bn": "তাঁর যুক্তিটা বাস্তব। মজলুমকে যদি জানানো হয় অন্যায়টা আসলে কত বড়, কত ভারী, তাহলে সে হয়তো মাফ করতে রাজি হবে না। তাই না জেনে ঢালাওভাবে মাফ করে দেওয়া আর জেনেশুনে রাজি হওয়া এক কথা নয়। এরপর কুরতুবী আয়াতের আলোচনায় একটি হাদিস আনেন। সূত্র হিসেবে বলেন সহীহ বুখারী ও অন্যান্য গ্রন্থের কথা, বর্ণনাকারী আবু হুরায়রা (রাঃ)। বুখারী হাদিসটি এনেছেন ২৪৪৯ নম্বরে। নিচের শব্দগুলো বুখারীর বর্ণনা থেকে, যে পৃষ্ঠা দেখা হয়েছে সেখান থেকে নেওয়া।"
          },
          {
            "en": "In al-Bukhari's wording, the Prophet ﷺ said: \"Whoever has oppressed another person concerning his reputation or anything else, he should beg him to forgive him before the Day of Resurrection when there will be no money (to compensate for wrong deeds), but if he has good deeds, those good deeds will be taken from him according to his oppression which he has done, and if he has no good deeds, the sins of the oppressed person will be loaded on him.\" Al-Qurtubi closes with al-Muhallab: taken according to his wrong means the wrong must be of known extent, pointed to and made clear.",
            "bn": "বুখারীর বর্ণনায় নবী ﷺ বলেছেন: \"যে ব্যক্তি অন্য কারও উপর তার সম্মান বা অন্য কোনো বিষয়ে অন্যায় করেছে, সে যেন কিয়ামতের সেই দিন আসার আগেই তার কাছে মাফ চেয়ে দায়মুক্ত হয়ে নেয়, যেদিন কোনো দীনার থাকবে না, দিরহামও থাকবে না। তার যদি নেক আমল থাকে, তবে তার অন্যায়ের পরিমাণ অনুযায়ী তা থেকে নিয়ে নেওয়া হবে। আর তার যদি নেকি না থাকে, তবে মজলুমের গুনাহ থেকে নিয়ে তার উপর চাপিয়ে দেওয়া হবে।\" কুরতুবী শেষ করেন মুহাল্লাবের একটি কথা দিয়ে: 'অন্যায়ের পরিমাণ অনুযায়ী নেওয়া হবে' কথাটির দাবি হলো, অন্যায়টা পরিমাণে জানা থাকবে, চিহ্নিত থাকবে, স্পষ্ট থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Repentance, and the Reply Ahead",
          "bn": "তওবা, আর সামনের জবাব"
        },
        "p": [
          {
            "en": "The father's answer comes in the next verse, 12:98: I will ask my Lord to forgive you. Ibn Kathir's English group, running from 12:96 to 12:98, carries reports on when that prayer was made, and they belong with that verse, not with this. What this verse holds is the moment before the answer: grown men, long in the wrong, asking the father they grieved to pray for them.",
            "bn": "পিতার জবাব আসে পরের আয়াতে, ১২:৯৮: শীঘ্রই আমি আমার রবের কাছে তোমাদের জন্য ক্ষমা চাইব। ইবন কাসীরের ইংরেজি সংস্করণের যে অংশ ১২:৯৬ থেকে ১২:৯৮ একসঙ্গে আলোচনা করে, সেখানে এ দোয়া কখন করা হয়েছিল সে বিষয়ে কিছু বর্ণনা আছে। সেগুলোর জায়গা ওই আয়াতে, এখানে নয়। এ আয়াত ধরে রাখে জবাবের ঠিক আগের মুহূর্তটুকু। বহু দিন অন্যায়ের পথে থাকা প্রাপ্তবয়স্ক কজন মানুষ, যে পিতাকে তারা শোকে ডুবিয়েছিল, তাঁর কাছেই দোয়া চাইছে।"
          },
          {
            "en": "This is their repentance, and it should be read as one. The brothers did a grave wrong, and the Qur'an does not hide it; here they own it without condition. As-Sa'di's comment opens on their acknowledgment of the sin, and at-Tabari has them say they have confessed. The verse describes what these brothers did and said, inside one story, and licenses nothing against any living person or community. Nor does it close a door: people who wronged this badly still came back.",
            "bn": "এ হলো তাদের তওবা, আর তওবা হিসেবেই একে পড়া উচিত। ভাইয়েরা গুরুতর অন্যায় করেছিল, কুরআন তা লুকায়নি। এখানে তারা কোনো শর্ত ছাড়া সেটা মেনে নিচ্ছে। সা'দীর আলোচনা শুরুই হয় তাদের গুনাহ স্বীকারের কথা দিয়ে, আর তাবারী তাদের মুখে বসান, আমরা আমাদের গুনাহ স্বীকার করলাম। আয়াতটি একটি কাহিনির ভেতরে এই ভাইদের কাজ আর কথার বর্ণনা দেয়। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু বলার অনুমতি এতে নেই। কোনো দরজাও এ আয়াত বন্ধ করে না। এত বড় অন্যায় যারা করেছিল, তারাও ফিরে এসেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Owning It Without a But",
          "bn": "'কিন্তু' ছাড়া দায় নেওয়া"
        },
        "p": [
          {
            "en": "The verse turns on the reader in two ways. The first is the shape of the confession. Most of us, caught in a wrong, reach for the reason before the admission is finished: I was under pressure, you provoked me, anyone would have done the same. The brothers had reasons they could have given. They gave none. The sentence is short because nothing was added to it, and that is part of why it could be heard.",
            "bn": "আয়াতটি দুইভাবে পাঠকের দিকে ফেরে। প্রথমটি স্বীকারোক্তির ধরন। অন্যায়ে ধরা পড়লে আমাদের বেশির ভাগই স্বীকারোক্তি শেষ হওয়ার আগেই কারণ খুঁজতে থাকি: তখন চাপে ছিলাম, তুমিই তো উসকে দিয়েছিলে, যে কেউ এমনটা করত। ভাইদেরও বলার মতো কারণ ছিল। তারা একটাও বলেনি। বাক্যটা ছোট, কারণ এতে বাড়তি কিছু জোড়া হয়নি। আর সে কারণেই হয়তো কথাটা শোনার মতো হয়েছিল।"
          },
          {
            "en": "The second is the direction of the confession. They did not settle the matter privately and hope the wronged would never need to hear it. They came to their father's face. Al-Qurtubi's reading makes this more than good manners: a wrong done to a person is partly in that person's hands to release, and the Prophet ﷺ, in al-Bukhari's narration, urged that it be settled today, before the Day when there is no coin to pay with.",
            "bn": "দ্বিতীয়টি স্বীকারোক্তির দিক। তারা ব্যাপারটা চুপিচুপি মিটিয়ে নিয়ে আশা করেনি যে মজলুমের কানে কখনো কথাটা পৌঁছানোর দরকার হবে না। তারা পিতার মুখোমুখি এসেছে। কুরতুবীর ব্যাখ্যায় এটা শুধু ভদ্রতা নয়। কারও উপর করা অন্যায় মাফ করার একটা অংশ থাকে সেই মানুষেরই হাতে। আর বুখারীর বর্ণনায় নবী ﷺ তাগিদ দিয়েছেন, এটা আজই মিটিয়ে নিতে, সেই দিন আসার আগে, যেদিন দেওয়ার মতো কোনো দীনার-দিরহাম থাকবে না।"
          },
          {
            "en": "So the questions are close to home. Is there a person I have wronged whom I have only mentioned to Allah? Could I go to them and name what I did, and how much it cost them, without a but attached? The brothers waited many years before they could say it. The verse suggests it is never too late to begin, and that the words can be few: I was in the wrong. Please ask forgiveness for me.",
            "bn": "তাই প্রশ্নগুলো খুব কাছের। এমন কেউ কি আছে, যার উপর অন্যায় করেছি, অথচ তার কথা শুধু আল্লাহর কাছেই বলেছি? আমি কি তার কাছে গিয়ে বলতে পারি, ঠিক কী করেছিলাম আর তাতে তার কতটা ক্ষতি হয়েছিল, কোনো 'কিন্তু' না জুড়ে? ভাইদের কথাটা বলতে বহু বছর লেগেছিল। আয়াতটি বুঝিয়ে দেয়, শুরু করতে কখনো দেরি হয়ে যায় না, আর কথাও বেশি লাগে না: আমি অন্যায় করেছিলাম। আমার জন্য ক্ষমা চেয়ে দিন।"
          }
        ]
      }
    ]
  },
  "12:101": {
    "sections": [
      {
        "h": {
          "en": "After the Family Bowed Down",
          "bn": "পরিবার সিজদায় লুটিয়ে পড়ার পর"
        },
        "p": [
          {
            "en": "The prayer comes straight out of a scene. In 12:100 Yusuf (AS) raises his parents onto the throne, they fall down before him in prostration, and he tells his father this is his old dream fulfilled. What that prostration was is read in more than one way. Al-Baghawi, on that verse, says the greeting of people at the time was prostration, meaning a bowing and humbling rather than forehead to ground. It is also said, he adds, that they did put their foreheads down, as greeting and honour and not as worship.",
            "bn": "দোয়াটি এসেছে একটি দৃশ্যের ভেতর থেকে। ১২:১০০ আয়াতে ইউসুফ (আঃ) বাবা-মাকে সিংহাসনে তুলে বসান, তাঁরা তাঁর সামনে সিজদায় লুটিয়ে পড়েন, আর তিনি পিতাকে বলেন, এই তো আমার বহু আগের দেখা স্বপ্নের বাস্তব রূপ। সেই সিজদা কেমন ছিল, তা নিয়ে একাধিক ব্যাখ্যা আছে। বাগাভী ওই আয়াতে বলেন, সে যুগে মানুষের অভিবাদনই ছিল সিজদা। তবে তার মানে মাটিতে কপাল রাখা নয়, মাথা নুইয়ে বিনয় দেখানো। তিনি আরেকটি মতও আনেন: তাঁরা সত্যিই মাটিতে কপাল রেখেছিলেন, কিন্তু অভিবাদন ও সম্মান জানাতে, ইবাদত হিসেবে নয়।"
          },
          {
            "en": "Al-Baghawi says such a greeting was allowed in earlier nations and abrogated in this Shari'ah, and he reports from Ibn 'Abbas (RA) a third reading: that they fell prostrate to Allah in front of Yusuf. He calls the first view the soundest. As-Sa'di calls it a prostration of honour, reverence and respect. Ma'arif al-Qur'an says a prostration of reverence was permitted in the code of Yusuf (AS), and that in the Shari'ah of the Prophet ﷺ prostrating to anyone other than Allah is haram.",
            "bn": "বাগাভী বলেন, আগের উম্মতগুলোতে এমন অভিবাদন জায়েয ছিল, এই শরীয়তে তা রহিত হয়েছে। ইবন আব্বাস (রাঃ) থেকে তিনি তৃতীয় একটি ব্যাখ্যাও আনেন: তাঁরা ইউসুফের সামনে আল্লাহর উদ্দেশে সিজদা করেছিলেন। প্রথম মতটিকেই তিনি সবচেয়ে সঠিক বলেন। সা'দী একে বলেন সম্মান, শ্রদ্ধা ও মর্যাদা জানানোর সিজদা। মাআরিফুল কুরআনের ভাষ্য, ইউসুফ (আঃ)-এর শরীয়তে সম্মানের সিজদা বৈধ ছিল। কিন্তু নবী ﷺ-এর শরীয়তে আল্লাহ ছাড়া কাউকে সিজদা করা হারাম।"
          },
          {
            "en": "Then, with no narrative line between, comes 12:101. At-Tabari carries a report from Ibn Ishaq that bridges the two verses. Yusuf (AS) spoke the words of 12:100 when he saw the honour Allah had shown him and his household. Then he checked himself, remembered that the worldly state he was in would perish and pass away, and said: my Lord, You have given me of sovereignty. Al-Baghawi, closing his comment on 12:100, puts it in his own words: knowing that the bliss of this world does not last, he asked Allah for a good end.",
            "bn": "এরপর মাঝখানে বর্ণনার একটি লাইনও নেই, সরাসরি চলে আসে ১২:১০১। দুই আয়াতের মাঝে সেতু হিসেবে তাবারী ইবন ইসহাকের একটি বর্ণনা আনেন। আল্লাহ তাঁকে ও তাঁর পরিবারকে যে মর্যাদা দিলেন, তা দেখে ইউসুফ (আঃ) ১২:১০০-এর কথাগুলো বলেছিলেন। তারপর তিনি নিজেকে সামলে নিলেন। মনে পড়ল, দুনিয়ার যে অবস্থায় তিনি আছেন তা একদিন ফুরিয়ে যাবে, মুছে যাবে। তখন বললেন: হে আমার রব, আপনি আমাকে রাজত্বের কিছু দিয়েছেন। বাগাভীও ১২:১০০-এর আলোচনা শেষ করেন প্রায় একই কথায়: দুনিয়ার সুখ স্থায়ী নয় জেনে তিনি আল্লাহর কাছে শুভ পরিণাম চাইলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Some of Rule, Some of Knowledge",
          "bn": "রাজত্বের কিছু, জ্ঞানের কিছু"
        },
        "p": [
          {
            "en": "Rabbi qad ataytani min al-mulk: my Lord, You have given me of sovereignty. Al-Qurtubi says the min here is partitive, and so is the min in wa 'allamtani min ta'wil al-ahadith, because the rule of Egypt was not the whole of kingship, and the knowledge of interpreting dreams was not the whole of knowledge. He records two other views: that min marks the kind, as in the command to shun the filth that is idols (22:30), or that it is for emphasis, so the sense is simply: You gave me the kingdom and taught me the interpretation.",
            "bn": "রাব্বি কাদ আতাইতানী মিনাল মুলক: হে আমার রব, আপনি আমাকে রাজত্বের কিছু দিয়েছেন। কুরতুবী বলেন, এখানে 'মিন' অংশবাচক। ওয়া আল্লামতানী মিন তা'বীলিল আহাদীস, এই অংশের 'মিন'-ও তাই। কারণ মিসরের শাসন গোটা রাজত্ব ছিল না, আর স্বপ্নের ব্যাখ্যার বিদ্যাও সব জ্ঞান ছিল না। তিনি আরও দুটি মত উল্লেখ করেন। এক, 'মিন' এখানে জাতি বোঝায়, যেমন মূর্তি নামের অপবিত্রতা থেকে দূরে থাকার আদেশে (২২:৩০)। দুই, এটি জোর দেওয়ার জন্য। তখন অর্থ দাঁড়ায় সোজা: আপনি আমাকে রাজত্ব দিয়েছেন আর ব্যাখ্যা শিখিয়েছেন।"
          },
          {
            "en": "Which sovereignty? At-Tabari, al-Baghawi and the Muyassar all say the rule of Egypt. Al-Baghawi defines mulk itself as a breadth of power for whoever holds governance and management. As-Sa'di describes the post concretely: Yusuf (AS) was over the storehouses of the land and their management, a great minister to the king. At-Tabari says Yusuf spoke the prayer once Allah had gathered his family and established him in the land, longing to meet his righteous forefathers.",
            "bn": "কোন রাজত্ব? তাবারী, বাগাভী ও মুয়াসসার, তিনজনই বলেন মিসরের শাসন। বাগাভী 'মুলক' শব্দেরই সংজ্ঞা দেন এভাবে: যার হাতে শাসন ও পরিচালনার ভার, তার ক্ষমতার বিস্তৃতি। সা'দী পদটির বাস্তব ছবি দেন। ইউসুফ (আঃ) ছিলেন দেশের ভাণ্ডারগুলোর দায়িত্বে, সেগুলোর ব্যবস্থাপনায়, রাজার এক বড় মন্ত্রী। তাবারী বলেন, আল্লাহ যখন পরিবারকে তাঁর কাছে একত্র করলেন আর দেশে তাঁকে প্রতিষ্ঠিত করলেন, তখন নেককার পূর্বপুরুষদের সঙ্গে মিলিত হওয়ার আকুলতা নিয়ে তিনি এ দোয়া করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Dreams, or Reading Scripture",
          "bn": "স্বপ্নের ব্যাখ্যা, না কিতাবের অর্থ"
        },
        "p": [
          {
            "en": "The second gift, ta'wil al-ahadith, is glossed narrowly by most of the commentators fetched. At-Tabari says it means the interpretation of dreams, and carries from Mujahid a one-word gloss: al-'ibarah, the reading of them. Al-Baghawi says ta'bir ar-ru'ya, the explaining of dreams. The Muyassar widens it slightly, to the interpretation of dreams and other knowledge besides. As-Sa'di widens it further: the interpretation of the discourses of the revealed books, the interpretation of dreams, and other knowledge.",
            "bn": "দ্বিতীয় দান, তা'বীলুল আহাদীস। যেসব তাফসীর দেখা হয়েছে, তার বেশিরভাগই এর অর্থ সংকীর্ণ রাখে। তাবারী বলেন, এর মানে স্বপ্নের ব্যাখ্যা। মুজাহিদ থেকে তিনি এক শব্দের একটি ব্যাখ্যা আনেন: আল-ইবারাহ, অর্থাৎ স্বপ্নের মর্ম পড়া। বাগাভীর ভাষায় তা'বীরুর রু'ইয়া, স্বপ্নের তাবীর। মুয়াসসার পরিধিটা একটু বাড়ায়: স্বপ্নের ব্যাখ্যা, সঙ্গে আরও কিছু জ্ঞান। সা'দী আরও বাড়ান। তাঁর মতে এতে আছে নাযিলকৃত কিতাবগুলোর বাণীর ব্যাখ্যা, স্বপ্নের ব্যাখ্যা, আর অন্যান্য জ্ঞান।"
          },
          {
            "en": "At-Tabari also says why the two gifts are named at all: ta'didan li-ni'am Allah 'alayhi wa shukran lahu 'alayha, a counting of Allah's favours upon him and thanks to Him for them. As-Sa'di gives the same in three words of state: Yusuf (AS) spoke acknowledging Allah's blessing, thanking Him for it, and praying to stay firm in Islam. Read this way, the prayer has its parts in order. The gifts are named first, as thanks, and only after that does any request appear.",
            "bn": "দান দুটির কথা কেন বলা হলো, তাবারী তাও বলেন: তা'দীদান লি-নিআমিল্লাহি আলাইহি ওয়া শুকরান লাহু আলাইহা। অর্থাৎ নিজের উপর আল্লাহর নিয়ামতগুলো গুনে বলা, আর সেগুলোর জন্য তাঁর শুকরিয়া আদায়। সা'দী একই কথা বলেন তিনটি অবস্থার বর্ণনায়। ইউসুফ (আঃ) কথাগুলো বলেছিলেন আল্লাহর নিয়ামত স্বীকার করে, তার শুকরিয়া জানিয়ে, আর ইসলামের উপর অবিচল থাকার দোয়া করে। এভাবে পড়লে দোয়ার অংশগুলো সাজানো ক্রমে আসে। আগে শুকরিয়া হিসেবে দানগুলোর নাম, তারপরেই কেবল কোনো চাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Fatir, Then Wali",
          "bn": "ফাতির, তারপর ওয়ালী"
        },
        "p": [
          {
            "en": "Fatir as-samawati wal-ard. Al-Qurtubi explains the grammar: the word is accusative as a description of the one called on, Rabb, itself a vocative in construct, so the sense is O Lord; or it may be a second vocative. At-Tabari and al-Baghawi supply the dropped ya: O Originator of the heavens and the earth. Al-Qurtubi gives fatir its widest sense: Allah is the Originator of all that exists, its Creator, Beginner and Inventor, absolutely, from nothing and with no model before it.",
            "bn": "ফাতিরাস সামাওয়াতি ওয়াল আরদ। কুরতুবী ব্যাকরণটা খুলে বলেন। যাঁকে ডাকা হচ্ছে, সেই 'রব্ব' নিজেই সম্বোধনসূচক, আর 'ফাতির' তাঁরই বিশেষণ হিসেবে যবরযুক্ত। ফলে অর্থ হয়: হে রব। আবার এটি দ্বিতীয় একটি সম্বোধনও হতে পারে। তাবারী ও বাগাভী উহ্য 'ইয়া' জুড়ে দিয়ে পড়েন: হে আসমানসমূহ ও যমীনের স্রষ্টা। কুরতুবী 'ফাতির' শব্দকে দেন সবচেয়ে ব্যাপক অর্থ। যা কিছু আছে, আল্লাহ সবকিছুর ফাতির: স্রষ্টা, সূচনাকারী, উদ্ভাবক। শূন্য থেকে, আগের কোনো নমুনা ছাড়াই।"
          },
          {
            "en": "Then anta waliyyi fid-dunya wal-akhirah: You are my wali in this world and the Hereafter. At-Tabari spells it out in three parts: in this world You are my guardian against whoever showed me enmity and wanted me harm, by Your help, and You nourish me in it with Your blessing; in the Hereafter You take charge of me by Your grace and mercy. Al-Baghawi and al-Qurtubi gloss it as my helper, who takes charge of my affairs; the Muyassar, as the manager of all my affairs in both worlds.",
            "bn": "এরপর: আনতা ওয়ালিয়্যী ফিদ-দুনইয়া ওয়াল-আখিরাহ, দুনিয়া ও আখিরাতে আপনিই আমার ওয়ালী। তাবারী এর তিনটি দিক খুলে দেখান। দুনিয়ায় যে আমার সঙ্গে শত্রুতা করেছে, আমার ক্ষতি চেয়েছে, তার বিরুদ্ধে আপনি নিজের সাহায্য দিয়ে আমার অভিভাবক। দুনিয়াতে আপনিই নিজের নিয়ামত দিয়ে আমাকে লালন করেন। আর আখিরাতে আপনার অনুগ্রহ ও রহমত দিয়ে আমার দায়িত্ব নেবেন। বাগাভী ও কুরতুবীর ব্যাখ্যা: আমার সাহায্যকারী, আমার সব বিষয়ের দায়িত্ব যাঁর হাতে। মুয়াসসারের ভাষায়: দুই জগতেই আমার সব ব্যাপারের তত্ত্বাবধায়ক।"
          }
        ]
      },
      {
        "h": {
          "en": "Wishing Death, or Dying Muslim",
          "bn": "মৃত্যুর আকাঙ্ক্ষা, না ইসলামে মৃত্যু"
        },
        "p": [
          {
            "en": "Tawaffani musliman wa alhiqni bis-salihin: take me as a Muslim and join me with the righteous. Here the commentators divide. At-Tabari reports that before Yusuf (AS) no prophet had wished for death. Through as-Suddi, Ibn 'Abbas (RA) used to say the first prophet to ask Allah for death was Yusuf. Through Ibn Jurayj, Ibn 'Abbas said he longed to meet his Lord and loved to join Him and his fathers, so he asked to be taken. Mujahid says the same longing, for Allah and for Ibrahim and Ishaq.",
            "bn": "তাওয়াফফানী মুসলিমান ওয়া আলহিকনী বিস-সালিহীন: আমাকে মুসলিম অবস্থায় তুলে নিন, আর নেককারদের সঙ্গে মিলিয়ে দিন। এখানে তাফসীরকারদের মত দুই ভাগ হয়ে যায়। তাবারী বর্ণনা করেন, ইউসুফ (আঃ)-এর আগে কোনো নবী মৃত্যু কামনা করেননি। সুদ্দীর সূত্রে ইবন আব্বাস (রাঃ) বলতেন, আল্লাহর কাছে প্রথম যে নবী মৃত্যু চেয়েছিলেন, তিনি ইউসুফ। ইবন জুরাইজের সূত্রে ইবন আব্বাসের কথা: তিনি রবের সাক্ষাতের জন্য ব্যাকুল হয়েছিলেন, তাঁর কাছে ও পূর্বপুরুষদের কাছে চলে যেতে চেয়েছিলেন, তাই তুলে নেওয়ার দোয়া করেন। মুজাহিদও একই আকুলতার কথা বলেন: আল্লাহর জন্য, আর ইবরাহীম ও ইসহাকের জন্য।"
          },
          {
            "en": "Qatadah, in at-Tabari and al-Qurtubi, puts it most sharply: no one ever wished for death, prophet or other, except Yusuf, when his family was gathered and the favours were complete. Al-Qurtubi then gives the other side. It is said that Yusuf did not wish for death but wished to die in Islam, meaning: when my term comes, take me as a Muslim; and this, he says, is the view of the majority. As-Sa'di reads it as: keep Islam on me and make me firm in it until You take me, and states that this was not a prayer to hasten death.",
            "bn": "তাবারী ও কুরতুবী দুজনেই কাতাদার কথা আনেন, আর সেটাই সবচেয়ে স্পষ্ট: নবী হোক বা অন্য কেউ, ইউসুফ ছাড়া আর কেউ কখনো মৃত্যু কামনা করেনি। পরিবার যখন একত্র হলো, নিয়ামত যখন পূর্ণ হলো, তখনই তিনি তা চেয়েছিলেন। এরপর কুরতুবী অন্য পক্ষের কথা তোলেন। বলা হয়, ইউসুফ মৃত্যু কামনা করেননি, কামনা করেছিলেন ইসলামের উপর মৃত্যু। অর্থাৎ, আমার নির্ধারিত সময় যখন আসবে, তখন আমাকে মুসলিম অবস্থায় তুলে নিন। কুরতুবী বলেন, এটাই অধিকাংশের মত। সা'দীর পাঠও তাই: আমার উপর ইসলাম স্থায়ী রাখুন, তুলে নেওয়া পর্যন্ত তাতে অবিচল রাখুন। তিনি স্পষ্ট বলেন, এটা তাড়াতাড়ি মৃত্যু চাওয়ার দোয়া ছিল না।"
          },
          {
            "en": "At-Tabari's report from ad-Dahhak is close to that: take me in obedience to You, and forgive me when You take me. Ibn Kathir holds the question open with three possibilities. Yusuf (AS) may have said it at his deathbed. He may have asked to die in Islam whenever his term came, not at once, as one says to another, may Allah cause you to die in Islam. Or he may have asked for it at once, which was permissible in their religion; that, Ibn Kathir says, is the apparent sense of Qatadah's account, but it is not permitted in our Shari'ah.",
            "bn": "দাহহাক থেকে তাবারীর বর্ণনাও এর কাছাকাছি: আপনার আনুগত্যের উপর আমাকে তুলে নিন, আর তুলে নেওয়ার সময় আমাকে ক্ষমা করুন। ইবন কাসীর প্রশ্নটি খোলা রাখেন তিনটি সম্ভাবনা দিয়ে। হতে পারে ইউসুফ (আঃ) দোয়াটি করেছিলেন মৃত্যুশয্যায়। হতে পারে তিনি চেয়েছিলেন, নির্ধারিত সময় যখনই আসুক, মৃত্যু যেন ইসলামের উপর হয়, এখনই নয়। যেমন একজন আরেকজনকে বলে, আল্লাহ তোমাকে ইসলামের উপর মৃত্যু দিন। আবার হতে পারে তিনি তখনই তা চেয়েছিলেন, আর তাঁদের শরীয়তে তা জায়েয ছিল। ইবন কাসীর বলেন, কাতাদার বর্ণনার বাহ্যিক অর্থ এটাই, তবে আমাদের শরীয়তে তা জায়েয নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "If He Must Wish at All",
          "bn": "চাইতেই হলে যেভাবে চাইবে"
        },
        "p": [
          {
            "en": "Ibn Kathir and al-Qurtubi both bring in, at this verse, the Prophet's ﷺ ruling on wishing for death. Ibn Kathir cites it from Ahmad and notes that al-Bukhari and Muslim record it; al-Qurtubi gives it to Muslim. In al-Bukhari's Sahih (5671), Anas ibn Malik (RA) reports the Prophet ﷺ saying: None of you should wish for death because of a calamity befalling him; but if he has to wish for death, he should say: O Allah, keep me alive as long as life is better for me, and let me die if death is better for me.",
            "bn": "এ আয়াতের আলোচনায় ইবন কাসীর ও কুরতুবী দুজনেই মৃত্যু কামনা নিয়ে নবী ﷺ-এর নির্দেশ নিয়ে আসেন। ইবন কাসীর হাদীসটি আনেন আহমাদ থেকে, আর জানান বুখারী ও মুসলিমও তা বর্ণনা করেছেন। কুরতুবী এটি মুসলিমের বলে উল্লেখ করেন। সহীহ বুখারীতে (৫৬৭১) আনাস ইবন মালিক (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: কোনো বিপদে পড়ে তোমাদের কেউ যেন মৃত্যু কামনা না করে। আর যদি কামনা করতেই হয়, তবে সে যেন বলে: হে আল্লাহ, যতদিন বেঁচে থাকা আমার জন্য কল্যাণকর, ততদিন আমাকে বাঁচিয়ে রাখুন, আর যখন মৃত্যু আমার জন্য কল্যাণকর, তখন আমাকে মৃত্যু দিন।"
          },
          {
            "en": "Al-Qurtubi draws the consequence himself. Since this is established, he asks, how can it be said that Yusuf (AS) wished for death, for leaving the world and the cutting off of his deeds? That is far-fetched, he says, unless it is held to have been permitted in his law. He then adds that wishing and praying for death is allowed when trials appear and prevail and there is fear of losing the faith.",
            "bn": "এর ফলাফল কুরতুবী নিজেই টেনে বের করেন। তিনি প্রশ্ন তোলেন, এ নির্দেশ যখন প্রতিষ্ঠিত, তখন কীভাবে বলা যায় যে ইউসুফ (আঃ) মৃত্যু, দুনিয়া ছেড়ে যাওয়া আর আমলের ধারা থেমে যাওয়া কামনা করেছিলেন? তাঁর মতে কথাটা দূরবর্তী, যদি না বলা হয় তাঁর শরীয়তে তা জায়েয ছিল। তিনি আরও বলেন, যখন ফিতনা দেখা দেয় ও প্রবল হয়ে ওঠে, আর দ্বীন হারানোর ভয় থাকে, তখন মৃত্যু কামনা ও তার দোয়া জায়েয।"
          },
          {
            "en": "Ibn Kathir makes the same distinction. The prohibition concerns harm that is personal to a man; when the trial is in religion, asking for death is allowed. His example is the magicians of Fir'awn, who under threat of execution said: pour patience upon us and take us as Muslims (7:126). Ma'arif al-Qur'an reads 12:101 as a prayer to die holding to faith, and concludes that praying for death under particular conditions is not forbidden. The hadith's prohibition, it says, is aimed at asking for death out of worldly hardship or plain impatience.",
            "bn": "ইবন কাসীরও একই পার্থক্য টানেন। নিষেধাজ্ঞা সেই ক্ষতির বেলায়, যা কারও ব্যক্তিগত। দ্বীনের উপর ফিতনা এলে মৃত্যু চাওয়া জায়েয। তাঁর উদাহরণ ফেরাউনের জাদুকরেরা। মৃত্যুদণ্ডের হুমকির মুখে তাঁরা বলেছিলেন: আমাদের উপর ধৈর্য ঢেলে দিন, আর মুসলিম হিসেবে আমাদের তুলে নিন (৭:১২৬)। মাআরিফুল কুরআন ১২:১০১-কে পড়ে ঈমানের উপর অটল থেকে মৃত্যুর দোয়া হিসেবে। সেখান থেকে তার সিদ্ধান্ত, বিশেষ অবস্থায় মৃত্যুর দোয়া নিষিদ্ধ নয়। হাদীসের নিষেধ, তার ভাষায়, দুনিয়ার কষ্টে বা নিছক অধৈর্য হয়ে মৃত্যু চাওয়ার বিরুদ্ধে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Righteous, Whose Company",
          "bn": "কোন নেককার, কাদের সঙ্গ"
        },
        "p": [
          {
            "en": "Who are the righteous he asks to join? At-Tabari: his righteous fathers Ibrahim and Ishaq, and the prophets and messengers before them. Al-Qurtubi: his three fathers, Ibrahim, Ishaq and Ya'qub. Al-Baghawi: his fathers the prophets. Ibn Kathir: his brothers among the prophets and messengers. The Muyassar and as-Sa'di: the pious prophets and the chosen elect. Ma'arif al-Qur'an, citing Mazhari, says the salihin can be the prophets themselves. The exact words wa alhiqni bis-salihin occur in the Qur'an only here and in the prayer of Ibrahim (AS) in 26:83.",
            "bn": "কোন নেককারদের সঙ্গে তিনি মিলিত হতে চাইলেন? তাবারী বলেন, তাঁর নেককার পূর্বপুরুষ ইবরাহীম ও ইসহাক, আর তাঁদের আগের নবী-রাসূলগণ। কুরতুবীর মতে তাঁর তিনজন পূর্বপুরুষ: ইবরাহীম, ইসহাক ও ইয়াকুব। বাগাভী বলেন, তাঁর নবী পূর্বপুরুষগণ। ইবন কাসীর বলেন, নবী-রাসূলদের মধ্যে তাঁর ভাইয়েরা। মুয়াসসার ও সা'দী বলেন, পুণ্যবান নবীগণ আর আল্লাহর বাছাই করা প্রিয় বান্দারা। মাআরিফুল কুরআন মাযহারীর বরাতে বলে, সালিহীন বলতে নবীদেরও বোঝানো হতে পারে। ওয়া আলহিকনী বিস-সালিহীন, হুবহু এই কথা কুরআনে আছে শুধু এখানে আর ২৬:৮৩ আয়াতে ইবরাহীম (আঃ)-এর দোয়ায়।"
          },
          {
            "en": "Beside his deathbed possibility, Ibn Kathir sets a report from the two Sahihs through 'A'ishah (RA). In al-Bukhari's Sahih (4438) she describes the Prophet's ﷺ last moments. After cleaning his teeth with a fresh siwak she had softened for him, he raised his hand or his finger and said three times, fi ar-rafiq al-a'la, among the highest company, and then he died. Ibn Kathir offers it as the parallel for a prayer made at the point of death; the request in both is, in the end, a request for company.",
            "bn": "মৃত্যুশয্যার সম্ভাবনাটির পাশে ইবন কাসীর দুই সহীহ গ্রন্থ থেকে আয়িশা (রাঃ)-এর একটি বর্ণনা রাখেন। সহীহ বুখারীতে (৪৪৩৮) তিনি নবী ﷺ-এর শেষ মুহূর্তের বর্ণনা দেন। তিনি একটি তাজা মিসওয়াক চিবিয়ে নরম করে দিয়েছিলেন, নবী ﷺ তা দিয়ে দাঁত পরিষ্কার করলেন। তারপর হাত বা আঙুল তুলে তিনবার বললেন: ফির রাফীকিল আ'লা, সর্বোচ্চ সঙ্গীদের মাঝে। এরপরই তিনি ইন্তেকাল করেন। মৃত্যুর মুহূর্তে করা দোয়ার উদাহরণ হিসেবেই ইবন কাসীর এটি আনেন। দুই দোয়াতেই শেষ চাওয়াটা আসলে সঙ্গের চাওয়া।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi go on to his age, his burial in a marble coffin in the Nile, and Musa (AS) later taking the coffin out of Egypt, which al-Qurtubi ties to this very prayer. Ma'arif al-Qur'an, giving similar details, says that what happened after the story is not reported in the Qur'an or in any marfu' hadith, and that most commentators drew it from historical or Isra'ili narrations. It is left aside here.",
            "bn": "কুরতুবী ও বাগাভী এরপর চলে যান তাঁর বয়সের হিসাবে, নীলনদে মার্বেলের সিন্দুকে তাঁর দাফনে, আর পরে মূসা (আঃ)-এর সেই সিন্দুক মিসর থেকে নিয়ে যাওয়ার কাহিনিতে। কুরতুবী এই স্থানান্তরকে এই দোয়ার সঙ্গেই যুক্ত করেন। মাআরিফুল কুরআনেও এমন বিবরণ আছে। তবে সেখানে স্পষ্ট বলা হয়েছে, কাহিনির পরে কী ঘটেছিল তা কুরআনে নেই, কোনো মারফূ হাদীসেও নেই। বেশিরভাগ তাফসীরকার এসব নিয়েছেন ইতিহাসের বা ইসরাঈলী বর্ণনা থেকে। তাই এগুলো এখানে বাদ রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for the Good Days",
          "bn": "সুদিনের দোয়া"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an notes that with this prayer the story of Yusuf (AS), and its chain of lessons, reaches its completion. It draws a portrait from it: Allah's accepted servants may hold the highest ranks and every kind of power, yet they never grow proud of them; they keep fearing such things may be taken away, and keep praying that Allah's blessings stay with them through the hour of death. The very next verse, 12:102, turns from Yusuf to the Prophet ﷺ: that is from the news of the unseen which We reveal to you.",
            "bn": "মাআরিফুল কুরআন বলে, এই দোয়ার মধ্য দিয়েই ইউসুফ (আঃ)-এর কাহিনি আর তার শিক্ষার ধারা পূর্ণতা পায়। সেখান থেকে সে আল্লাহর মকবুল বান্দাদের একটি ছবিও আঁকে। তাঁরা হয়তো সবচেয়ে উঁচু মর্যাদায় আছেন, সব রকম ক্ষমতা তাঁদের হাতে, তবু এসব নিয়ে কখনো অহংকার করেন না। বরং ভয়ে থাকেন, এগুলো কেড়ে নেওয়া হতে পারে। আর দোয়া করতে থাকেন, আল্লাহর দেওয়া নিয়ামত যেন মৃত্যুর মুহূর্ত পর্যন্ত তাঁদের সঙ্গে থাকে। ঠিক পরের আয়াত, ১২:১০২, ইউসুফ থেকে ফিরে নবী ﷺ-কে বলে: এগুলো গায়েবের খবর, যা আমি তোমার কাছে ওহি করছি।"
          },
          {
            "en": "The prayer's own order is the practical point. It is said on a good day, not a hard one, and it begins by naming what has been given and by whom, with the partitive min keeping each gift in proportion. Only then come the requests, and they are not for more of the same. They ask for what success cannot secure: to be kept in Islam until death and placed among the righteous. Whoever reaches the top of some long climb has the words ready for that moment.",
            "bn": "দোয়াটির নিজের ক্রমই এর বাস্তব শিক্ষা। এটি কঠিন দিনের দোয়া নয়, সুদিনের। শুরু হয় কী পাওয়া গেছে আর কে দিয়েছেন, তার উল্লেখ দিয়ে। আর অংশবাচক 'মিন' প্রতিটি দানকে তার মাপে রাখে। তারপরেই আসে চাওয়া, আর সে চাওয়া একই জিনিস আরও বেশি পাওয়ার জন্য নয়। চাওয়া হয় তা-ই, যা সাফল্য দিয়ে নিশ্চিত করা যায় না: মৃত্যু পর্যন্ত ইসলামের উপর থাকা, আর নেককারদের দলে জায়গা পাওয়া। দীর্ঘ পথ পেরিয়ে যিনি কোনো চূড়ায় পৌঁছান, সেই মুহূর্তের জন্য কথাগুলো তাঁর হাতে তৈরি।"
          }
        ]
      }
    ]
  },
  "12:107": {
    "sections": [
      {
        "h": {
          "en": "To Whom the Question Goes",
          "bn": "প্রশ্নটা কাদের কাছে"
        },
        "p": [
          {
            "en": "Afa-aminu an ta'tiyahum ghashiyatun min 'adhabi-llah, aw ta'tiyahumu as-sa'atu baghtatan wa hum la yash'urun: do they then feel secure that an overwhelming portion of Allah's punishment will not come upon them, or that the Hour will not come upon them suddenly while they do not perceive? The verse belongs to a short run that follows the story of Yusuf (AS). In 12:103 most people will not believe, however much the Prophet ﷺ longs for it; in 12:105 they pass by signs in the heavens and the earth and turn away.",
            "bn": "আফাআমিনূ আন তা'তিয়াহুম গাশিয়াতুম মিন 'আযাবিল্লাহ, আও তা'তিয়াহুমুস সা'আতু বাগতাতাও ওয়া হুম লা ইয়াশ'উরূন: তারা কি তবে নিশ্চিন্ত হয়ে গেছে যে আল্লাহর আযাবের সর্বগ্রাসী কোনো অংশ তাদের উপর আসবে না, কিংবা কিয়ামত হঠাৎ তাদের উপর এসে পড়বে না, যখন তারা কিছুই টের পাবে না? ইউসুফ (আঃ)-এর কাহিনি শেষ হওয়ার পর কয়েকটি আয়াতের যে ছোট ধারা, এ আয়াত তারই অংশ। ১২:১০৩ আয়াতে বলা হয়, নবী ﷺ যত আগ্রহই রাখুন, অধিকাংশ মানুষ ঈমান আনবে না। ১২:১০৫ আয়াতে তারা আসমান আর জমিনের নিদর্শনের পাশ দিয়ে চলে যায়, মুখ ফিরিয়ে নেয়।"
          },
          {
            "en": "Then 12:106: most of them do not believe in Allah except while associating others with Him. The commentators read that line in more than one way. Ibn Kathir's English abridgement gives Ibn 'Abbas (RA): they have a part of faith, for asked who created the heavens and the earth they say Allah, yet they join others with Him in worship. Al-Hasan al-Basri applied it to the hypocrite who does good deeds to be seen, and Hudhayfah (RA) recited it as he tore a cord from a sick man's arm.",
            "bn": "তারপর ১২:১০৬: তাদের অধিকাংশ আল্লাহর উপর ঈমান আনে, অথচ সঙ্গে সঙ্গে শিরকও করে। এ বাক্যের ব্যাখ্যা তাফসীরকারেরা একভাবে করেননি। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে ইবন আব্বাস (রাঃ)-এর কথা আছে: তাদের ভেতর ঈমানের একটা অংশ আছে। আসমান-জমিন কে সৃষ্টি করেছেন, জিজ্ঞেস করলে তারা বলে আল্লাহ। তবু ইবাদতে তারা অন্যদের তাঁর শরিক করে। হাসান বসরী একে মুনাফিকের উপর প্রয়োগ করেছেন, যে লোক দেখানোর জন্য নেক আমল করে। আর হুযাইফা (রাঃ) এক অসুস্থ লোকের বাহুতে বাঁধা সুতা ছিঁড়ে ফেলার সময় এ আয়াত তিলাওয়াত করেছিলেন।"
          },
          {
            "en": "Those readings belong to 12:106, and this verse needs only their outline. At-Tabari names the people questioned in 12:107 from it: those who do not affirm that Allah is their Lord except while associating others with Him in their worship. As-Sa'di reaches a little further back, to those who do these things and turn away from Allah's signs. The question that follows is put to them, and to the mind that has grown comfortable with that mixture.",
            "bn": "এসব ব্যাখ্যা ১২:১০৬ আয়াতের, এখানে শুধু তার রূপরেখাটুকু দরকার। তাবারী সেখান থেকেই ১২:১০৭ আয়াতের প্রশ্নের লক্ষ্য চিহ্নিত করেন: যারা আল্লাহকে নিজেদের রব বলে স্বীকার করে, কিন্তু ইবাদতে তাঁর সঙ্গে অন্যকেও শরিক করে। সা'দী আরেকটু পেছনে যান। তাঁর মতে এরা সেই লোক, যারা এসব কাজ করে আর আল্লাহর নিদর্শন থেকে মুখ ফিরিয়ে রাখে। পরের প্রশ্নটা তাদেরই উদ্দেশে। আর সেই মনের উদ্দেশেও, যে এমন মিশ্রণে অভ্যস্ত হয়ে আরামে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Secure on What Grounds?",
          "bn": "কিসের ভরসায় নিশ্চিন্ত?"
        },
        "p": [
          {
            "en": "The verse opens with a question, and it is not a request for information. Ma'arif al-Qur'an says that here their heedlessness is questioned and deplored: how could people who deny and rebel grow so carefree about a punishment that might overtake them from all sides, or about the Hour descending on them while they are not ready for it? The Muyassar puts the same question in plainer words: is there anything with them that makes them safe from a punishment of Allah that falls on all of them, or from the Hour coming suddenly?",
            "bn": "আয়াতের শুরুতে প্রশ্ন, কিন্তু এ প্রশ্ন কিছু জানতে চাওয়ার জন্য নয়। মাআরিফুল কুরআন বলে, এখানে তাদের গাফলতিকে প্রশ্নের মুখে দাঁড় করিয়ে নিন্দা করা হচ্ছে। যারা অস্বীকার আর বিদ্রোহ করে, তারা কী করে এতটা বেপরোয়া হয়ে গেল? চারদিক থেকে ঘিরে ধরা শাস্তি আসতে পারে, কিংবা তারা তৈরি না থাকতেই কিয়ামত নেমে আসতে পারে, অথচ তাদের কোনো ভাবনা নেই। মুয়াসসার একই প্রশ্ন আরও সহজ ভাষায় রাখে: তাদের কাছে কি এমন কিছু আছে, যা তাদের নিরাপদ রাখবে আল্লাহর সেই শাস্তি থেকে, যা সবাইকে ছেয়ে ফেলবে, কিংবা হঠাৎ এসে পড়া কিয়ামত থেকে?"
          },
          {
            "en": "That second phrasing shows how the question works. It does not threaten a date. It asks for the ground on which their calm rests, and leaves them with none to give. Ibn Kathir's Arabic gloss runs close to it: have these idolaters felt safe that a matter should come to them, covering them, from where they do not perceive? Their security, put another way, is real as a feeling and empty as a fact, and the question is built to make that gap visible.",
            "bn": "দ্বিতীয় ভাষ্যটা দেখিয়ে দেয় প্রশ্নটা কীভাবে কাজ করে। এখানে কোনো তারিখের হুমকি নেই। প্রশ্নটা জানতে চায়, তাদের এই নিশ্চিন্ত ভাব দাঁড়িয়ে আছে কিসের উপর। আর উত্তর দেওয়ার মতো কিছুই তাদের হাতে থাকে না। ইবন কাসীরের আরবি ব্যাখ্যাও কাছাকাছি: এই মুশরিকরা কি নিশ্চিন্ত হয়ে গেছে যে এমন কোনো বিষয় তাদের উপর আসবে না, যা তাদের ঢেকে ফেলবে এমন দিক থেকে, যা তারা টেরও পাবে না? অন্যভাবে বললে, তাদের নিরাপত্তা অনুভূতি হিসেবে সত্য, কিন্তু বাস্তবে ফাঁপা। প্রশ্নটা গড়াই হয়েছে এই ফাঁকটা চোখের সামনে আনতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ghashiya in the Glosses",
          "bn": "ব্যাখ্যাকারদের মুখে গাশিয়াহ"
        },
        "p": [
          {
            "en": "The glosses on ghashiya keep returning to the verb inside it. Mujahid's, carried by at-Tabari through several chains, is a single word: taghshahum, it covers them. Al-Qurtubi gives Ibn 'Abbas (RA) as saying mujallila, all-enveloping, and al-Baghawi uses the same word without naming a source: 'uquba mujallila, an enveloping penalty. As-Sa'di stacks three verbs: a punishment that covers them, takes in all of them and uproots them. The Muyassar's word is ya'ummuhum, it includes them all.",
            "bn": "গাশিয়াহর ব্যাখ্যাগুলো বারবার ফিরে আসে শব্দটার ভেতরের ক্রিয়ায়। মুজাহিদের ব্যাখ্যা তাবারী কয়েকটি সূত্রে এনেছেন, আর তা মাত্র একটি শব্দ: তাগশাহুম, তা তাদের ঢেকে ফেলবে। কুরতুবী ইবন আব্বাস (রাঃ) থেকে আনেন মুজাল্লিলাহ, অর্থাৎ পুরোপুরি মুড়ে ফেলা। বাগাভী কোনো সূত্রের নাম না নিয়ে একই শব্দ ব্যবহার করেন: উকূবাহ মুজাল্লিলাহ, সবকিছু মুড়ে ফেলা শাস্তি। সা'দী পরপর তিনটি ক্রিয়া বসান: এমন আযাব যা তাদের ঢেকে ফেলে, সবাইকে ঘিরে নেয়, আর শিকড়সুদ্ধ উপড়ে ফেলে। মুয়াসসারের শব্দ ইয়া'উম্মুহুম, তা সবাইকে শামিল করে নেবে।"
          },
          {
            "en": "Qatada is reported twice in at-Tabari. In one chain he says 'uquba, a penalty from Allah's punishment; in the other, waqi'a, a blow that falls on them. Al-Qurtubi and al-Baghawi carry the second word from him too. A footnote in at-Tabari's edited text records that the printed edition had waqi'a with a long first vowel, an event, and that the editor kept the manuscript's word, which he calls entirely correct. Ad-Dahhak, in al-Qurtubi and al-Baghawi alike, names concrete forms: thunderbolts, and qawari', calamities that strike.",
            "bn": "তাবারীতে কাতাদা থেকে দুটি বর্ণনা আছে। একটি সূত্রে তিনি বলেন উকূবাহ, আল্লাহর আযাব থেকে আসা দণ্ড। অন্য সূত্রে বলেন ওয়াকী'আহ, এমন আঘাত যা তাদের উপর এসে পড়ে। কুরতুবী আর বাগাভীও তাঁর থেকে এই দ্বিতীয় শব্দটাই এনেছেন। তাবারীর সম্পাদিত পাঠের এক টীকায় আছে, ছাপা সংস্করণে শব্দটা ছিল ওয়াকি'আহ, অর্থাৎ ঘটনা। সম্পাদক পাণ্ডুলিপির শব্দটাই রেখেছেন এবং বলেছেন, সেটাই পুরোপুরি সঠিক। দাহহাক থেকে কুরতুবী ও বাগাভী দুজনেই নির্দিষ্ট রূপের কথা আনেন: বজ্রপাত, আর কাওয়ারি', অর্থাৎ আঘাত হেনে যাওয়া বিপর্যয়।"
          },
          {
            "en": "Right after Mujahid's gloss, al-Qurtubi and al-Baghawi both set a parallel beside it: yawma yaghshahumu al-'adhabu min fawqihim wa min tahti arjulihim, the Day the punishment covers them from above them and from beneath their feet (29:55). Ma'arif speaks in the same spirit of a punishment that overtakes them from all sides. Each gloss pictures the same thing from a different angle: nothing left uncovered, and no one left out of it.",
            "bn": "মুজাহিদের ব্যাখ্যার ঠিক পরেই কুরতুবী আর বাগাভী দুজনেই তার পাশে একটি সমান্তরাল আয়াত রাখেন: ইয়াওমা ইয়াগশাহুমুল 'আযাবু মিন ফাওকিহিম ওয়া মিন তাহতি আরজুলিহিম, যেদিন আযাব তাদের ঢেকে ফেলবে উপর থেকে আর পায়ের নিচ থেকে (২৯:৫৫)। মাআরিফও একই সুরে বলে, এমন শাস্তি যা চারদিক থেকে তাদের ঘিরে ধরবে। প্রতিটি ব্যাখ্যা একই জিনিস দেখায়, শুধু ভিন্ন দিক থেকে। কিছুই খোলা থাকবে না, কেউ বাদ পড়বে না।"
          }
        ]
      },
      {
        "h": {
          "en": "In This Life, or After?",
          "bn": "দুনিয়ায়, নাকি পরে?"
        },
        "p": [
          {
            "en": "Where does this covering punishment fall, in this life or after it? The verse sets it beside the Hour with aw, or, which at least makes them two things. At-Tabari reads it that way: a punishment from Allah that covers them for their shirk, or else the Resurrection coming on them suddenly while they persist in it, after which Allah keeps them forever in His Fire. Ad-Dahhak's thunderbolts are earthly events, and as-Sa'di's verb yasta'siluhum, it uproots them, describes the end of a people within history.",
            "bn": "এই ঢেকে ফেলা আযাব কোথায় আসবে, দুনিয়ায় নাকি তার পরে? আয়াত একে কিয়ামতের পাশে বসিয়েছে আও, অর্থাৎ 'অথবা' দিয়ে। এতে অন্তত বোঝা যায়, এরা দুটি আলাদা জিনিস। তাবারী এভাবেই পড়েন: শিরকের কারণে আল্লাহর এমন শাস্তি যা তাদের ঢেকে ফেলবে, নয়তো তারা শিরকে লেগে থাকা অবস্থায় হঠাৎ কিয়ামত এসে পড়বে, তারপর আল্লাহ তাদের চিরকাল তাঁর আগুনে রাখবেন। দাহহাকের বজ্রপাত দুনিয়ার ঘটনা। সা'দীর ক্রিয়া ইয়াসতা'সিলুহুম, শিকড়সুদ্ধ উপড়ে ফেলা, ইতিহাসের ভেতরেই কোনো জাতির শেষ হয়ে যাওয়ার ছবি।"
          },
          {
            "en": "That parallel, though, comes from a passage about the next world: the verse before it, 29:54, says that Hell will encompass the disbelievers. None of the commentators read for this verse argues the point out or calls it a disagreement. Side by side, they leave two pictures in view, a blow in this world and a covering on the Day, and the question holds against both. This article does not choose between them, because the sources it rests on do not.",
            "bn": "অথচ সেই সমান্তরাল আয়াতটি আখেরাতের প্রসঙ্গ থেকে নেওয়া। তার আগের আয়াত ২৯:৫৪ বলে, জাহান্নাম কাফিরদের ঘিরে রাখবে। এ আয়াতের জন্য যেসব তাফসীর পড়া হয়েছে, তার কোনোটিই বিষয়টা নিয়ে তর্ক তোলেনি, একে মতভেদও বলেনি। পাশাপাশি রাখলে দুটি ছবি চোখে থাকে: দুনিয়ার কোনো আঘাত, আর সেই দিনের ঢেকে ফেলা আযাব। প্রশ্নটা দুটোর বেলাতেই খাটে। এই লেখা কোনো একটিকে বেছে নেয় না, কারণ যে উৎসগুলোর উপর এটি দাঁড়িয়ে, সেগুলোও বেছে নেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Baghtatan, and the Unaware",
          "bn": "বাগতাতান, আর অসচেতন মানুষ"
        },
        "p": [
          {
            "en": "The second half names as-sa'a, the Hour, which al-Qurtubi and at-Tabari both gloss as al-qiyama, the Resurrection. Then baghtatan, suddenly. Al-Qurtubi treats its grammar: it stands in the accusative as a hal, a word describing the state in which the Hour arrives, and in origin it is a verbal noun. He cites al-Mubarrad that the Arabs do place a hal after an indefinite noun, as in waqa'a amrun baghtatan wa fuj'atan, a matter happened suddenly and abruptly.",
            "bn": "আয়াতের দ্বিতীয় ভাগে আছে আস-সা'আহ, সেই মুহূর্ত। কুরতুবী আর তাবারী দুজনেই এর ব্যাখ্যা দেন আল-কিয়ামাহ দিয়ে, অর্থাৎ পুনরুত্থান। তারপর বাগতাতান, হঠাৎ। কুরতুবী এর ব্যাকরণ নিয়ে কথা বলেন। শব্দটি নসব অবস্থায় হাল হয়ে এসেছে, মানে কিয়ামত কোন অবস্থায় আসবে তার বর্ণনা। মূলে এটি মাসদার, ক্রিয়াবাচক বিশেষ্য। তিনি মুবাররাদের কথা আনেন যে আরবরা অনির্দিষ্ট বিশেষ্যের পরেও হাল ব্যবহার করে, যেমন তারা বলে ওয়াকা'আ আমরুন বাগতাতাও ওয়া ফুজ'আতান, একটা ব্যাপার হঠাৎ আর আচমকা ঘটে গেল।"
          },
          {
            "en": "An-Nahhas, in al-Qurtubi's quotation, gives the sense: baghta is to be struck from where one did not expect it. The Muyassar and as-Sa'di both gloss the word with fuj'atan, all at once. It carries two ideas together, speed and surprise, and the clause that follows completes the surprise. Wa hum la yash'urun, while they do not perceive: al-Qurtubi calls it tawkid, emphasis, since baghtatan has already said as much, and al-Baghawi names what escapes them, its rising.",
            "bn": "কুরতুবীর উদ্ধৃতিতে নাহহাস অর্থটা বলে দেন: বাগতাহ মানে এমন দিক থেকে আঘাত আসা, যেখান থেকে কেউ আশা করেনি। মুয়াসসার আর সা'দী দুজনেই শব্দটির ব্যাখ্যা দেন ফুজ'আতান দিয়ে, আচমকা। এতে দুটো ভাব একসঙ্গে আছে, দ্রুততা আর অপ্রস্তুত অবস্থা। পরের বাক্যাংশ সেই অপ্রস্তুত ভাবটাকে পূর্ণ করে। ওয়া হুম লা ইয়াশ'উরূন, তারা টেরও পাবে না। কুরতুবী একে তাওকীদ বলেন, জোর দেওয়া, কারণ বাগতাতান আগেই প্রায় একই কথা বলেছে। আর বাগাভী বলে দেন কী তাদের অজানা থাকে: কিয়ামতের সংঘটন।"
          },
          {
            "en": "At-Tabari says they will not know of its coming and its arrival, and his paraphrase holds the detail that matters most: it finds them still persisting in their shirk and their disbelief in their Lord. Surprise alone is not the loss the verse warns of; no one is told the Hour's time. The loss is to be surprised before a person has turned back, with the mixture of 12:106 still unexamined and unrepented.",
            "bn": "তাবারী বলেন, তারা এর আগমন আর সংঘটন সম্পর্কে কিছুই জানবে না। তাঁর ব্যাখ্যায় সবচেয়ে জরুরি কথাটাও আছে: কিয়ামত তাদের পাবে এমন অবস্থায়, যখন তারা শিরক আর রবকে অস্বীকারে তখনো লেগে আছে। শুধু চমকে যাওয়াটা সেই ক্ষতি নয়, যার ব্যাপারে আয়াত সতর্ক করছে। কিয়ামতের সময় তো কাউকেই জানানো হয়নি। আসল ক্ষতি হলো ফিরে আসার আগেই ধরা পড়া, যখন ১২:১০৬ আয়াতের সেই মিশ্রণ তখনো খতিয়ে দেখা হয়নি, তার জন্য তওবাও করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Caught in the Middle of Business",
          "bn": "কাজের মাঝখানে ধরা পড়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi both relate from Ibn 'Abbas (RA) a picture of baghtatan: the Cry will sound over people while they are in their markets. Al-Qurtubi links it to another verse, ma yanzuruna illa sayhatan wahidatan ta'khudhuhum wa hum yakhissimun: they await nothing but a single Blast that will seize them while they are disputing (36:49). The Hour, in that picture, does not wait for a pause in ordinary life. It cuts into the middle of it.",
            "bn": "কুরতুবী আর বাগাভী দুজনেই ইবন আব্বাস (রাঃ) থেকে বাগতাতানের একটা ছবি বর্ণনা করেন: মানুষ যখন তাদের বাজারে ব্যস্ত, তখনই তাদের উপর বিকট আওয়াজ উঠবে। কুরতুবী একে আরেকটি আয়াতের সঙ্গে মেলান: মা ইয়ানযুরূনা ইল্লা সাইহাতাও ওয়াহিদাতান তা'খুযুহুম ওয়া হুম ইয়াখিসসিমূন, তারা কেবল একটি বিকট আওয়াজেরই অপেক্ষায়, যা তাদের পাকড়াও করবে যখন তারা বাদানুবাদে লিপ্ত (৩৬:৪৯)। এই ছবিতে কিয়ামত দৈনন্দিন জীবনের কোনো বিরতির জন্য অপেক্ষা করে না। জীবনের ঠিক মাঝখানে কেটে ঢুকে পড়ে।"
          },
          {
            "en": "None of the commentaries consulted attaches a prophetic hadith to 12:107 itself. A general narration, not reported about this verse, describes the same suddenness. Al-Bukhari relates it from Abu Hurayrah (RA) at number 6506 of his Sahih; its inclusion there is the collector's own judgement of it as sound. The Prophet ﷺ said: \"The Hour will not be established till the sun rises from the west, and when it rises (from the west) and the people see it, then all of them will believe (in Allah). But that will be the time when 'No good it will do to a soul to believe then, if it believed not before' (6:158).",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই ১২:১০৭ আয়াতের সঙ্গে সরাসরি কোনো হাদীস যুক্ত করেনি। তবে একটি সাধারণ বর্ণনা, যা এই আয়াত সম্পর্কে বর্ণিত নয়, সেই একই আকস্মিকতার কথা বলে। বুখারী তাঁর সহীহ গ্রন্থের ৬৫০৬ নম্বরে আবু হুরায়রা (রাঃ) থেকে এটি বর্ণনা করেছেন। সহীহ গ্রন্থে স্থান পাওয়াটাই একে বিশুদ্ধ বলে সংকলকের নিজের বিচার। বুখারীর ভাষ্যে নবী ﷺ বলেছেন: \"সূর্য পশ্চিম দিক থেকে উদিত না হওয়া পর্যন্ত কিয়ামত কায়েম হবে না। যখন তা পশ্চিম দিক থেকে উদিত হবে আর মানুষ তা দেখবে, তখন সবাই ঈমান আনবে। কিন্তু সেটা হবে সেই সময়, যখন 'কোনো প্রাণের ঈমান তার কাজে আসবে না, যদি সে আগে ঈমান না এনে থাকে' (৬:১৫৮)।"
          },
          {
            "en": "He went on: \"The Hour will be established (so suddenly) that two persons spreading a garment between them will not be able to finish their bargain, nor will they be able to fold it up. The Hour will be established while a man is carrying the milk of his she-camel, but cannot drink it; and the Hour will be established when someone is not able to prepare the tank to water his livestock from it; and the Hour will be established when some of you has raised his food to his mouth but cannot eat it.\"",
            "bn": "তিনি আরও বললেন: \"কিয়ামত এমনভাবে কায়েম হবে যে দুজন লোক তাদের মাঝে একটা কাপড় মেলে ধরেছে, কিন্তু কেনাবেচা শেষ করতে পারবে না, কাপড়টা ভাঁজও করতে পারবে না। কিয়ামত কায়েম হবে যখন একজন তার উটনীর দুধ নিয়ে ফিরছে, কিন্তু তা পান করতে পারবে না। কিয়ামত কায়েম হবে যখন কেউ তার পশুদের পানি খাওয়ানোর হাউজ মেরামত করছে, কিন্তু তাতে পানি খাওয়াতে পারবে না। আর কিয়ামত কায়েম হবে যখন তোমাদের কেউ মুখের কাছে খাবার তুলেছে, কিন্তু তা খেতে পারবে না।\""
          }
        ]
      },
      {
        "h": {
          "en": "Two Passages That Ask Alike",
          "bn": "একই প্রশ্নের আরও দুই জায়গা"
        },
        "p": [
          {
            "en": "Ibn Kathir, in his Arabic text and in the English abridgement, explains the verse by two others that ask the same question with the same verb. In 16:45 to 16:47: do those who plotted evil deeds feel secure that Allah will not make the earth swallow them, or that the punishment will not come on them from where they do not perceive, or that He will not seize them in their going to and fro, or seize them in a state of dread? That passage closes: truly your Lord is Kind, Merciful.",
            "bn": "ইবন কাসীর তাঁর আরবি তাফসীরে এবং ইংরেজি সংক্ষিপ্ত সংস্করণে আয়াতটি ব্যাখ্যা করেন আরও দুটি জায়গা দিয়ে, যেখানে একই ক্রিয়ায় একই প্রশ্ন করা হয়েছে। ১৬:৪৫ থেকে ১৬:৪৭ আয়াতে: যারা মন্দ চক্রান্ত করেছে, তারা কি নিশ্চিন্ত যে আল্লাহ তাদের মাটিতে ধসিয়ে দেবেন না? কিংবা এমন দিক থেকে আযাব আসবে না, যা তারা টেরও পাবে না? কিংবা চলাফেরার মধ্যেই তিনি তাদের পাকড়াও করবেন না? কিংবা ভয়ে কাঁপতে থাকা অবস্থায় ধরবেন না? সে অংশের শেষ কথা: নিশ্চয়ই তোমাদের রব বড়ই দয়ার্দ্র, পরম দয়ালু।"
          },
          {
            "en": "And in 7:97 to 7:99: did the people of the towns feel secure that Our punishment would not come on them by night while they slept, or in the forenoon while they played? Did they feel secure from the plan of Allah? None feels secure from the plan of Allah except the people who are losers. Together the three passages draw one pattern: a punishment that arrives in an hour of rest or play, from a side no one is watching, and a sense of safety that the Qur'an treats as the mark of loss.",
            "bn": "আর ৭:৯৭ থেকে ৭:৯৯ আয়াতে: জনপদের লোকেরা কি নিশ্চিন্ত হয়ে গেছে যে আমার আযাব তাদের উপর রাতে আসবে না, যখন তারা ঘুমিয়ে? কিংবা দিনের প্রথম ভাগে আসবে না, যখন তারা খেলায় মগ্ন? তারা কি আল্লাহর কৌশল থেকে নিশ্চিন্ত হয়ে গেছে? ক্ষতিগ্রস্ত সম্প্রদায় ছাড়া আল্লাহর কৌশল থেকে কেউ নিশ্চিন্ত থাকে না। তিনটি অংশ মিলিয়ে একটাই নকশা ফুটে ওঠে। আযাব আসে বিশ্রাম বা খেলার সময়, এমন দিক থেকে যেদিকে কেউ চোখ রাখেনি। আর যে নিরাপদ বোধকে কুরআন ক্ষতির চিহ্ন বলে গণ্য করে, সেটাই তাদের ভরসা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Asked of Me",
          "bn": "প্রশ্নটা ভেতরের দিকে"
        },
        "p": [
          {
            "en": "As-Sa'di ends his comment with the warning's purpose: they have made themselves deserving of it, so let them repent to Allah and leave what would cause their punishment. Read so, the verse is an opening as much as a threat, and the close of the Nahl passage says the same in its own way, naming the Lord as Kind and Merciful right after the ways a seizing could come. Next, 12:108 turns to the Prophet ﷺ and his way of calling to Allah with clear sight.",
            "bn": "সা'দী তাঁর ব্যাখ্যা শেষ করেন সতর্কবাণীর উদ্দেশ্য বলে: তারা নিজেরাই এর উপযুক্ত হয়ে গেছে, তাই তারা আল্লাহর কাছে তওবা করুক, আর যা তাদের শাস্তির কারণ হবে তা ছেড়ে দিক। এভাবে পড়লে আয়াতটি যতটা হুমকি, ততটাই খোলা দরজা। সূরা নাহলের অংশটাও নিজের ভঙ্গিতে একই কথা বলে। পাকড়াওয়ের নানা পথের কথা বলেই সে রবকে দয়ার্দ্র ও পরম দয়ালু বলে উল্লেখ করে। এর পরের আয়াত, ১২:১০৮, ফিরে যায় নবী ﷺ আর তাঁর পথের দিকে, যে পথে তিনি স্পষ্ট জ্ঞান নিয়ে আল্লাহর দিকে ডাকেন।"
          },
          {
            "en": "The verse describes the people it describes: those who acknowledged Allah and still joined others to Him in worship, and who turned away from His signs. It licenses nothing against any living person or community. It gives no one the right to name a flood, an earthquake or a sudden death as Allah's verdict on those it struck, and no right to point at a neighbour and call him the one meant. Its question has a single proper addressee for each reader, and that is the reader.",
            "bn": "আয়াতটি যাদের বর্ণনা দেয়, শুধু তাদেরই দেয়: যারা আল্লাহকে স্বীকার করত, তবু ইবাদতে অন্যদের তাঁর শরিক করত, আর তাঁর নিদর্শন থেকে মুখ ফিরিয়ে নিত। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। বন্যা, ভূমিকম্প বা হঠাৎ মৃত্যুকে আক্রান্ত মানুষদের উপর আল্লাহর রায় বলে ঘোষণা করার অধিকার এ আয়াত কাউকে দেয় না। প্রতিবেশীর দিকে আঙুল তুলে 'এই সেই লোক' বলারও অধিকার দেয় না। প্রত্যেক পাঠকের জন্য এর প্রশ্নের একজনই আসল শ্রোতা আছে, আর সে পাঠক নিজে।"
          },
          {
            "en": "The security the verse rebukes is a feeling of having time, held without any ground beneath it. Its remedy is not fear for its own sake. It is the hidden shirk the commentators find in 12:106, the deed done to be seen and the cord Hudhayfah (RA) tore away, checked now; the tawba postponed, made today; and the ordinary day lived as a day the Hour could interrupt. The verse's own question then becomes a daily question: on what grounds do I feel secure?",
            "bn": "আয়াত যে নিরাপদ বোধের নিন্দা করে, তা হলো হাতে সময় আছে এমন অনুভূতি, যার নিচে কোনো ভিত্তি নেই। এর প্রতিকার শুধু ভয় পাওয়া নয়। প্রতিকার হলো ১২:১০৬ আয়াতে তাফসীরকারেরা যে গোপন শিরক খুঁজে পান, লোক দেখানো আমল কিংবা হুযাইফা (রাঃ) যে সুতা ছিঁড়ে ফেলেছিলেন, সেগুলো এখনই খতিয়ে দেখা। ফেলে রাখা তওবা আজই করে নেওয়া। আর সাধারণ দিনটাকে এমনভাবে কাটানো, যেন কিয়ামত যেকোনো মুহূর্তে তা থামিয়ে দিতে পারে। তখন আয়াতের প্রশ্নটাই হয়ে ওঠে রোজকার প্রশ্ন: আমি কিসের ভরসায় নিশ্চিন্ত?"
          }
        ]
      }
    ]
  },
  "12:109": {
    "sections": [
      {
        "h": {
          "en": "Why Not an Angel?",
          "bn": "ফেরেশতা কেন নয়?"
        },
        "p": [
          {
            "en": "The surah is closing. The verses just before this one speak of how few believe, of signs passed by unnoticed, and of the Prophet's own path of calling to Allah with clear sight. Then comes a reply. Al-Qurtubi reads this verse as an answer to those who said, why has an angel not been sent down to him? At-Tabari's gloss is direct: We sent before you, O Muhammad, only men, not women and not angels, to whom We revealed Our signs, calling to obedience and to worship of Allah alone.",
            "bn": "সূরা শেষের দিকে। আগের আয়াতগুলোতে এসেছে, ঈমান আনে কত কম মানুষ, চোখের সামনের নিদর্শনও কীভাবে লোকে না দেখে পার হয়ে যায়, আর নবী ﷺ কীভাবে স্পষ্ট জ্ঞান নিয়ে আল্লাহর দিকে ডাকেন। তারপর আসে এক জবাব। কুরতুবীর মতে এ আয়াত তাদের উত্তর, যারা বলত: তাঁর কাছে ফেরেশতা নামানো হলো না কেন? তাবারী সরাসরি ব্যাখ্যা দেন: হে মুহাম্মাদ, তোমার আগে আমি কেবল পুরুষদেরই পাঠিয়েছি, নারী নয়, ফেরেশতাও নয়। তাঁদের কাছে আমার আয়াত ওহি করতাম, যাতে তাঁরা মানুষকে আল্লাহর আনুগত্য আর একমাত্র তাঁরই ইবাদতের দিকে ডাকেন।"
          },
          {
            "en": "At-Tabari also records Ibn Jurayj, who ties the verse to a charge the deniers made: Allah has sent down nothing to any human being, words the Qur'an quotes in 6:91. Ibn Jurayj then lists 12:103 to 12:107 with this verse and says that all of it was said to Quraysh. As-Sa'di draws out the consolation. We sent no angels and no other kind of creature, so why should your people find your message strange? In the messengers before you, he says, you have a good example.",
            "bn": "তাবারী ইবন জুরাইজের কথাও এনেছেন। তিনি আয়াতটিকে অস্বীকারকারীদের এক অভিযোগের সঙ্গে জুড়ে দেন: আল্লাহ কোনো মানুষের উপর কিছুই নাজিল করেননি। কুরআন তাদের এ কথা উদ্ধৃত করেছে ৬:৯১ আয়াতে। এরপর ইবন জুরাইজ ১২:১০৩ থেকে ১২:১০৭ পর্যন্ত আয়াতগুলো এ আয়াতের সঙ্গে গুনে বলেন, এর সবই কুরাইশকে বলা হয়েছিল। সা'দী এখান থেকে সান্ত্বনার দিকটা বের করেন। আমি ফেরেশতা পাঠাইনি, অন্য কোনো সৃষ্টিও নয়। তাহলে আপনার কওম আপনার রিসালাতকে অদ্ভুত ভাবছে কেন? তাঁর ভাষায়, আপনার আগের রাসূলদের মধ্যেই আপনার জন্য রয়েছে উত্তম আদর্শ।"
          }
        ]
      },
      {
        "h": {
          "en": "Messengers Who Ate Food",
          "bn": "যাঁরা খেতেন, বাজারে হাঁটতেন"
        },
        "p": [
          {
            "en": "Ibn Kathir reports through ad-Dahhak that Ibn Abbas (RA) explained illa rijalan this way: they were not from the people of heaven, as you claimed. Ibn Kathir then supports the reading with three other verses. In 25:20 every messenger before the Prophet ate food and walked in the markets. In 21:8 they were not given bodies that needed no food, nor were they immortal. And in 46:9 the Prophet is told to say that he is nothing new among the messengers.",
            "bn": "ইবন কাসীর দাহহাকের সূত্রে ইবনে আব্বাস (রাঃ)-এর ব্যাখ্যা এনেছেন: ইল্লা রিজালান মানে, তাঁরা আসমানের বাসিন্দা ছিলেন না, যেমনটা তোমরা দাবি করছ। এ ব্যাখ্যার সমর্থনে ইবন কাসীর আরও তিনটি আয়াত আনেন। ২৫:২০ আয়াতে আছে, নবী ﷺ-এর আগের প্রত্যেক রাসূল খাবার খেতেন, বাজারে চলাফেরা করতেন। ২১:৮ আয়াতে আছে, তাঁদের এমন দেহ দেওয়া হয়নি যার খাবার লাগে না, আর তাঁরা অমরও ছিলেন না। আর ৪৬:৯ আয়াতে নবী ﷺ-কে বলতে বলা হয়েছে, রাসূলদের মধ্যে আমি নতুন কিছু নই।"
          },
          {
            "en": "Ma'arif al-Qur'an adds the other side of the answer. For human beings, it says, a prophet of Allah has always been a human being, yet he differs from people at large in that revelation comes to him directly. That station is never the result of anyone's own effort. Allah Himself chooses from His servants whoever He knows to be fittest for the mission. So the messenger is near enough to be followed, and chosen in a way nobody can earn.",
            "bn": "মাআরিফুল কুরআন জবাবের অন্য দিকটাও দেখায়। মানুষের জন্য আল্লাহর নবী সবসময় মানুষই ছিলেন। তবে সাধারণ মানুষ থেকে তাঁর পার্থক্য এই যে আল্লাহর ওহি সরাসরি তাঁর কাছে আসে। এ মর্যাদা কারও নিজের চেষ্টায় অর্জিত হয় না। আল্লাহ নিজেই তাঁর বান্দাদের মধ্য থেকে সেই মানুষটিকে বেছে নেন, যাঁকে তিনি এ দায়িত্বের জন্য সবচেয়ে উপযুক্ত জানেন। তাই রাসূল এতটা কাছের যে তাঁকে অনুসরণ করা যায়, আবার এমনভাবে বাছাই করা যে কেউ চেষ্টা করে সে জায়গায় পৌঁছাতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Were Any Women Prophets?",
          "bn": "নারী নবী কি ছিলেন?"
        },
        "p": [
          {
            "en": "The word rijal, men, raises a question the commentators take up openly. Ibn Kathir says Allah sent His messengers from among men and not women, calls this the view of the majority of scholars, and states it as: Allah did not give any woman among the daughters of Adam a revelation of legislation, wahy tashri'. At-Tabari's gloss, not women and not angels, points the same way. Al-Qurtubi and al-Baghawi both quote al-Hasan: Allah never sent a prophet from the desert, nor from women, nor from the jinn.",
            "bn": "রিজাল, অর্থাৎ পুরুষ, শব্দটি একটি প্রশ্ন তোলে, আর তাফসীরকারেরা সেটা খোলাখুলিই আলোচনা করেন। ইবন কাসীর বলেন, আল্লাহ তাঁর রাসূলদের পাঠিয়েছেন পুরুষদের মধ্য থেকে, নারীদের মধ্য থেকে নয়। তিনি এটাকে অধিকাংশ আলেমের মত বলেন এবং কথাটা এভাবে সাজান: আদমের কন্যাদের কোনো নারীর কাছে আল্লাহ শরীয়তের ওহি, ওয়াহয়ু তাশরী', পাঠাননি। তাবারীর ব্যাখ্যা, নারী নয়, ফেরেশতাও নয়, একই দিকে ইঙ্গিত করে। কুরতুবী ও বাগাভী দুজনেই হাসানের কথা এনেছেন: আল্লাহ কখনো মরুবাসীদের মধ্য থেকে, নারীদের মধ্য থেকে বা জিনদের মধ্য থেকে কোনো নবী পাঠাননি।"
          },
          {
            "en": "Ibn Kathir then gives the other view in full. Some held that Sarah, the wife of Ibrahim (AS), the mother of Musa (AS) and Maryam were prophets. Their evidence was that angels brought Sarah the news of Ishaq, that 28:7 says We revealed to the mother of Musa, and that angels addressed Maryam in 3:42 and 3:43. Ma'arif al-Qur'an names the same three women. Al-Qurtubi mentions a report, attributed to the Prophet, naming four women prophets, and says this verse answers it.",
            "bn": "এরপর ইবন কাসীর অন্য মতটিও পুরোপুরি তুলে ধরেন। কেউ কেউ বলেছেন, ইবরাহীম (আঃ)-এর স্ত্রী সারা, মূসা (আঃ)-এর মা এবং মারইয়াম নবী ছিলেন। তাঁদের দলিল: ফেরেশতারা সারাকে ইসহাকের সুসংবাদ দিয়েছিলেন। ২৮:৭ আয়াতে আছে, আমি মূসার মায়ের কাছে ওহি পাঠালাম। আর ৩:৪২ ও ৩:৪৩ আয়াতে ফেরেশতারা মারইয়ামকে সম্বোধন করেছেন। মাআরিফুল কুরআনও এই তিনজন নারীর নাম নেয়। কুরতুবী নবী ﷺ-এর নামে বর্ণিত একটি বক্তব্যের কথা বলেন, যাতে চারজন নারী নবীর নাম আছে। তাঁর মতে এ আয়াত সেই বর্ণনার জবাব।"
          },
          {
            "en": "Ibn Kathir's reply is careful. That honour belonged to these women, he grants, but it does not follow that they were prophets. If whoever calls them prophets means that degree of honour, there is no doubt of it; the open question is whether it alone places someone among the prophets. He reports, through al-Ash'ari, that the imams of Ahl as-Sunna held there is no woman prophet, but there are siddiqat, and cites 5:75, where Maryam is called siddiqa. These are the positions in the texts consulted; this article takes none.",
            "bn": "ইবন কাসীরের জবাব সতর্ক। তিনি মেনে নেন, এই সম্মান তাঁদের ছিল, কিন্তু তা থেকে তাঁরা নবী ছিলেন এমন প্রমাণ হয় না। যিনি তাঁদের নবী বলছেন, তিনি যদি ওই মর্যাদাটুকুই বোঝান, তাতে কোনো সন্দেহ নেই। প্রশ্ন শুধু এটুকু: শুধু এতেই কি কেউ নবীদের কাতারে চলে আসেন? আশআরীর সূত্রে তিনি জানান, আহলুস সুন্নাহর ইমামদের মত হলো, নারীদের মধ্যে কোনো নবী নেই, তবে সিদ্দীকা আছেন। দলিল হিসেবে আনেন ৫:৭৫ আয়াত, যেখানে মারইয়ামকে সিদ্দীকা বলা হয়েছে। সংগৃহীত তাফসীরগুলোতে এই মতগুলোই আছে। এ লেখা কোনো পক্ষ নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "People of the Towns",
          "bn": "জনপদের মানুষ"
        },
        "p": [
          {
            "en": "Min ahl al-qura: from the people of the towns. At-Tabari explains it as the people of the settled cities, al-amsar, as opposed to the people of the open country. He cites Qatada: because they were more knowing and more forbearing. Ibn Kathir reads al-qura as cities, and quotes the same words of Qatada. The Muyassar gives the most practical reason: they are people of settled life, and so better able to understand the call and the message. As-Sa'di adds that their affair would then be clear and their standing known to all.",
            "bn": "মিন আহলিল কুরা: জনপদবাসীদের মধ্য থেকে। তাবারী এর ব্যাখ্যা দেন স্থায়ী শহরের মানুষ, আল-আমসার, খোলা প্রান্তরের মানুষের বিপরীতে। তিনি কাতাদার কথা আনেন: কারণ তারা বেশি জ্ঞানী ও বেশি সহনশীল ছিল। ইবন কাসীরও কুরা মানে শহর বলেছেন এবং কাতাদার একই কথা উদ্ধৃত করেছেন। মুয়াসসার সবচেয়ে বাস্তব কারণটা দেয়: তাঁরা স্থায়ী বসতির মানুষ, তাই দাওয়াত ও রিসালাত বোঝার ক্ষমতা তাঁদের বেশি। সা'দী যোগ করেন, এতে তাঁদের বিষয়টা স্পষ্ট থাকে আর তাঁদের অবস্থান সবার কাছে পরিচিত হয়।"
          },
          {
            "en": "Some commentators go further. Al-Qurtubi and al-Baghawi give reasons that describe the desert life of their sources in harsh terms, al-Baghawi introducing one of them with it is said, and Ibn Kathir supports the point with 9:97. Ma'arif al-Qur'an summarises this line and credits it to Ibn Kathir, al-Qurtubi and others. These are their readings, reported under their names. They explain a pattern in who was sent; they do not measure the worth of any people living today.",
            "bn": "কোনো কোনো তাফসীরকার আরও এগিয়ে যান। কুরতুবী ও বাগাভী এমন কিছু কারণ দেখান, যেখানে তাঁদের উৎসগুলো মরুজীবনের কথা বলেছে কড়া ভাষায়। এর একটি কারণ বাগাভী এনেছেন 'বলা হয়' বলে। ইবন কাসীর কথাটার সমর্থনে ৯:৯৭ আয়াত আনেন। মাআরিফুল কুরআন এই ধারার কথা সংক্ষেপে বলে, আর সূত্র হিসেবে ইবন কাসীর, কুরতুবী ও অন্যদের নাম নেয়। এগুলো তাঁদের ব্যাখ্যা, তাঁদের নামেই এখানে বলা হলো। এসব ব্যাখ্যা বোঝাতে চায়, কাদের পাঠানো হয়েছিল তাতে একটা ধারা আছে। আজকের কোনো জনগোষ্ঠীর মূল্য মাপা এর কাজ নয়।"
          },
          {
            "en": "So it should be said plainly: the verse describes who was sent, and licenses no contempt for any community, whether it lives in a city, a village or on the move. Ibn Kathir, in this very passage, cites a narration that points somewhere better. Ibn Majah 4032 has it from Ibn Umar (RA): the believer who mixes with people and bears their annoyance with patience will have a greater reward than the believer who does not mix with people and does not put up with their annoyance.",
            "bn": "তাই কথাটা সোজাসুজি বলা দরকার: আয়াতটি জানায় কাদের পাঠানো হয়েছিল। শহরে, গ্রামে বা যাযাবর জীবনে থাকা কোনো জনগোষ্ঠীকে তুচ্ছ করার অনুমতি এ আয়াত দেয় না। ইবন কাসীর এই আলোচনাতেই একটি বর্ণনা এনেছেন, যা আরও ভালো দিকে ইঙ্গিত করে। ইবন মাজাহ ৪০৩২ নম্বরে তা ইবন উমর (রাঃ) থেকে বর্ণিত: যে মুমিন মানুষের সঙ্গে মেশে এবং তাদের দেওয়া কষ্ট ধৈর্যের সঙ্গে সহ্য করে, সে সেই মুমিনের চেয়ে বেশি সওয়াব পাবে, যে মানুষের সঙ্গে মেশে না এবং তাদের দেওয়া কষ্টও সহ্য করে না।"
          },
          {
            "en": "Ibn Kathir gives it through Imam Ahmad; the wording above is Ibn Majah's, and the page consulted shows no grading from him, so none is claimed. It is a general narration and not attached to this verse. No commentator consulted attaches a sound hadith to 12:109 itself. What the narration adds is a measure that belongs to no place: the worth of a believer lies in living among people and bearing with them, which anyone anywhere can do.",
            "bn": "ইবন কাসীর বর্ণনাটি এনেছেন ইমাম আহমাদের সূত্রে। উপরের শব্দগুলো ইবন মাজাহর। যে পৃষ্ঠা দেখা হয়েছে, তাতে তাঁর কোনো মান নির্ণয় নেই, তাই কোনো মান দাবি করা হচ্ছে না। বর্ণনাটি সাধারণ, এ আয়াতের সঙ্গে সরাসরি যুক্ত নয়। সংগৃহীত তাফসীরগুলোর কোনোটিই ১২:১০৯ আয়াতের সঙ্গে কোনো সহীহ হাদিস জুড়ে দেয়নি। এ বর্ণনা যে মাপকাঠি দেয়, তা কোনো জায়গার সঙ্গে বাঁধা নয়। মুমিনের মর্যাদা মানুষের মাঝে থেকে তাদের সহ্য করায়, আর তা যে কেউ যেকোনো জায়গায় থেকেই পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking Among the Traces",
          "bn": "পুরোনো চিহ্নের মাঝে হাঁটা"
        },
        "p": [
          {
            "en": "Afalam yasiru fi al-ard: have they not travelled in the land and seen how those before them ended? At-Tabari reads it as addressed to the idolaters who denied the Prophet: did We not bring Our punishment down on those earlier peoples when they denied Our messengers, and rescue Our messengers and their followers, so that these might think it over and take a lesson? Ibn Jurayj, in at-Tabari, gives the sense as travelling and looking at their traces, athar, to reflect and learn.",
            "bn": "আফালাম ইয়াসীরূ ফিল আরদ: তারা কি পৃথিবীতে ভ্রমণ করে দেখেনি, তাদের আগের লোকদের পরিণাম কী হয়েছিল? তাবারীর মতে এ কথা বলা হচ্ছে সেই মুশরিকদের, যারা নবী ﷺ-কে অস্বীকার করছিল। আগের জাতিগুলো যখন আমার রাসূলদের অস্বীকার করেছিল, আমি কি তাদের উপর শাস্তি নামাইনি? আর রাসূল ও তাঁদের অনুসারীদের কি রক্ষা করিনি? এরা যেন তা নিয়ে ভাবে, শিক্ষা নেয়। তাবারীর বর্ণনায় ইবন জুরাইজ এর অর্থ করেন এভাবে: ঘুরে ঘুরে তাদের ফেলে যাওয়া চিহ্ন, আরবিতে যাকে বলে আসার, তা দেখা, ভাবা আর শিক্ষা নেওয়া।"
          },
          {
            "en": "Ibn Kathir joins the verse to 22:46, which asks whether they have travelled so that they might have hearts to understand with, for it is not the eyes that go blind but the hearts. Seeing, then, is not enough; reflection is the point. As-Sa'di turns it into a warning: beware of holding to what they held to, lest what befell them befall you. The verse describes what happened to those peoples as the Qur'an tells it, and licenses nothing against any living person or community.",
            "bn": "ইবন কাসীর আয়াতটিকে ২২:৪৬ আয়াতের সঙ্গে মিলিয়ে পড়েন। সেখানে প্রশ্ন আছে, তারা কি ভ্রমণ করেনি, যাতে তাদের এমন হৃদয় হয় যা দিয়ে তারা বোঝে? কেননা চোখ অন্ধ হয় না, অন্ধ হয় বুকের ভেতরের হৃদয়। শুধু দেখা তাই যথেষ্ট নয়, আসল কথা ভাবনা। সা'দী এটাকে সতর্কবাণী বানান: তারা যে পথে অটল ছিল, তোমরা সে পথে থেকো না, নইলে তাদের যা হয়েছিল তোমাদেরও তা হবে। কুরআন সেই জাতিগুলোর যে পরিণতির কথা বলে, আয়াত সেটুকুরই বর্ণনা দেয়। জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Better Abode",
          "bn": "যে ঘর উত্তম"
        },
        "p": [
          {
            "en": "Wa-la-daru al-akhirati khayrun lilladhina ittaqaw: and the home of the Hereafter is better for those who are mindful of Allah. At-Tabari hears an unspoken link: this is what We do in the world for those loyal to Us, rescuing them when punishment falls on the disobedient, and what awaits them in the Hereafter is better still. Ibn Kathir says the same: as We saved the believers in this life, We have written salvation for them in the Hereafter, far better than this world, and cites 40:51.",
            "bn": "ওয়া লাদারুল আখিরাতি খাইরুল লিল্লাযীনাত্তাকাও: যারা তাকওয়া অবলম্বন করে, তাদের জন্য আখিরাতের ঘর উত্তম। তাবারী এখানে না-বলা একটি যোগসূত্র শোনেন। দুনিয়ায় যারা আমার অনুগত, তাদের সঙ্গে আমি এমনই করি: নাফরমানদের উপর শাস্তি নামলে তাদের রক্ষা করি। আর আখিরাতে তাদের জন্য যা আছে, তা আরও ভালো। ইবন কাসীরও একই কথা বলেন: দুনিয়ায় যেমন মুমিনদের বাঁচিয়েছি, আখিরাতেও তাদের জন্য মুক্তি লিখে রেখেছি, আর তা দুনিয়ার চেয়ে বহু গুণ ভালো। প্রমাণ হিসেবে তিনি ৪০:৫১ আয়াত আনেন।"
          },
          {
            "en": "The phrase daru al-akhira joins a word to what looks like itself: the home of the last. At-Tabari, following al-Farra', explains this as a pairing allowed because the two words differ in form, like saying the day of Thursday. Al-Qurtubi reports that an-Nahhas rejected joining a thing to itself, and then gives the reading of the Basrans: the home of the final state. Al-Qurtubi and as-Sa'di both say the home meant is Paradise. The grammar differs; the destination does not.",
            "bn": "দারুল আখিরাহ শব্দবন্ধে একটি শব্দকে জোড়া হয়েছে এমন শব্দের সঙ্গে, যা দেখতে তারই মতো: শেষের ঘর। তাবারী ফাররাকে অনুসরণ করে বলেন, দুটি শব্দের রূপ আলাদা বলে এভাবে জোড়া চলে, যেমন আরবিতে বৃহস্পতিবারের দিন বলা হয়। কুরতুবী জানান, নাহহাস কোনো জিনিসকে নিজের সঙ্গেই জোড়ার কথা মানেননি। এরপর কুরতুবী বসরার ব্যাকরণবিদদের ব্যাখ্যা আনেন: শেষ অবস্থার ঘর। কুরতুবী ও সা'দী দুজনেই বলেন, এ ঘর মানে জান্নাত। ব্যাকরণে মতভেদ আছে, গন্তব্যে নেই।"
          },
          {
            "en": "Who are those who are mindful? At-Tabari defines them as those who fear Allah by carrying out what He made obligatory and avoiding what He forbade; as-Sa'di says nearly the same. As-Sa'di then sets the two homes side by side. The pleasure of this world is spoiled, troubled and cut off; the pleasure of the Hereafter is whole and complete, never ending, and always increasing. He closes with a phrase from 11:108: a gift never interrupted.",
            "bn": "তাকওয়া অবলম্বনকারী কারা? তাবারী বলেন, যারা আল্লাহর ফরজগুলো আদায় করে আর তাঁর নিষেধ করা গুনাহ থেকে দূরে থেকে তাঁকে ভয় করে। সা'দীও প্রায় একই কথা বলেন। এরপর সা'দী দুই ঘরকে পাশাপাশি রাখেন। দুনিয়ার সুখে ভেজাল আছে, দুশ্চিন্তা আছে, আর তা একসময় ফুরিয়ে যায়। আখিরাতের সুখ পূর্ণ ও নিখুঁত, কখনো শেষ হয় না, বরং সবসময় বাড়তেই থাকে। কথা শেষ করেন ১১:১০৮ আয়াতের একটি অংশ দিয়ে: এমন দান, যা কখনো বন্ধ হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Left Open",
          "bn": "খোলা রেখে দেওয়া প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse ends: afala ta'qilun, will you not reason? Al-Qurtubi notes two readings. Nafi', Asim, Ya'qub and others read it with ta', addressing the listeners directly: will you not reason? The rest read ya', speaking about them: will they not reason? Al-Baghawi records a similar split earlier in the verse, where Hafs reads nuhi, We revealed, and the others yuha, it was revealed. The Hafs reading, the text printed with this verse, turns the question toward the one hearing it.",
            "bn": "আয়াতের শেষে আছে: আফালা তা'কিলূন, তবুও কি তোমরা বুঝবে না? কুরতুবী দুটি কিরাআতের কথা বলেন। নাফি', আসিম, ইয়াকূব ও অন্যরা তা দিয়ে পড়েন, যাতে শ্রোতাদের সরাসরি বলা হয়: তোমরা কি বুঝবে না? বাকিরা পড়েন ইয়া দিয়ে, যাতে তাদের সম্পর্কে বলা হয়: তারা কি বুঝবে না? আয়াতের শুরুর দিকেও বাগাভী এমন একটি পার্থক্য লিখেছেন। হাফস পড়েন নূহী, আমি ওহি করতাম, আর অন্যরা পড়েন ইউহা, ওহি করা হতো। এ আয়াতের সঙ্গে ছাপা পাঠটি হাফসের কিরাআত, আর তাতে প্রশ্নটা ঘুরে আসে যে শুনছে তার দিকেই।"
          },
          {
            "en": "At-Tabari fills in what they were meant to understand: the evil end of disbelief and where its people end up, alongside what they had already seen and heard of the peoples before them. Al-Baghawi reads the question as an invitation, and so believe. The Muyassar asks, will you not reflect and take a lesson? As-Sa'di's gloss is the sharpest: will you not have minds that choose what is better over what is lower? On his reading, reason is not only thinking correctly; it is choosing correctly.",
            "bn": "তাদের কী বোঝার কথা ছিল, তাবারী তা খুলে বলেন: কুফরের মন্দ পরিণাম আর কুফরিকারীরা শেষে কোথায় গিয়ে দাঁড়ায়। আগের জাতিগুলোর বিষয়ে যা তারা নিজের চোখে দেখেছে, কানে শুনেছে, তার সঙ্গে মিলিয়ে বোঝার কথা। বাগাভী প্রশ্নটাকে পড়েন এক আহ্বান হিসেবে: তাহলে ঈমান আনো। মুয়াসসার জিজ্ঞেস করে: তোমরা কি ভেবে শিক্ষা নেবে না? সা'দীর ব্যাখ্যা সবচেয়ে ধারালো: তোমাদের কি এমন বুদ্ধি নেই, যা নিকৃষ্টের উপর উৎকৃষ্টকে বেছে নেয়? তাঁর পাঠে বুদ্ধি মানে শুধু সঠিক ভাবা নয়, সঠিক বেছে নেওয়াও।"
          }
        ]
      },
      {
        "h": {
          "en": "A Path Made for Human Feet",
          "bn": "মানুষের পায়ে চলার পথ"
        },
        "p": [
          {
            "en": "Turn the verse toward yourself. If every messenger was a man who ate food and walked the markets, then the life they modelled was lived in the same conditions as yours: hunger, work, family, and neighbours who did not always agree. It is easy to admire the prophets from so far off that their example asks nothing of us. This verse closes that distance. The path was walked by human feet, and it is still walkable, in whatever town or village or road you live on.",
            "bn": "আয়াতটিকে এবার নিজের দিকে ঘুরিয়ে ধরুন। প্রত্যেক রাসূল যদি এমন মানুষ হন যিনি খেতেন, বাজারে হাঁটতেন, তাহলে তাঁরা যে জীবন দেখিয়ে গেছেন, তা কেটেছে আপনার মতোই অবস্থার ভেতর দিয়ে: ক্ষুধা, কাজ, পরিবার, আর এমন প্রতিবেশী যারা সবসময় একমত নয়। নবীদের অনেক দূরে বসিয়ে শ্রদ্ধা করা সহজ। তখন তাঁদের আদর্শ আমাদের কাছে আর কিছুই দাবি করে না। এ আয়াত সেই দূরত্ব ঘুচিয়ে দেয়। পথটা মানুষের পায়েই হাঁটা হয়েছে। আপনি শহরে থাকুন, গ্রামে থাকুন বা পথে পথে, সে পথ আজও চলা যায়।"
          },
          {
            "en": "Then weigh. The verse puts two homes on the scale and says which is better for those who are mindful. Most of our choices are made against next week, not against the lasting home; the verse asks for a longer measure. And finally, reason. The question is not answered for you. You are asked to look at what has passed, to think it through, and, in as-Sa'di's words, to choose what is better over what is lower. Will you not reason?",
            "bn": "এরপর ওজন করুন। আয়াত দুটি ঘরকে পাল্লায় তুলে বলে দেয়, তাকওয়াওয়ালাদের জন্য কোনটা উত্তম। আমাদের বেশিরভাগ সিদ্ধান্ত মাপা হয় আগামী সপ্তাহের হিসাবে, চিরস্থায়ী ঘরের হিসাবে নয়। আয়াত চায় আরও লম্বা মাপকাঠি। আর শেষে, বুদ্ধি খাটান। প্রশ্নের উত্তর কেউ আপনার হয়ে দিয়ে দেবে না। যা ঘটে গেছে তা দেখুন, ভেবে দেখুন, আর সা'দীর ভাষায়, নিকৃষ্টের উপর উৎকৃষ্টকে বেছে নিন। তবুও কি বুঝবেন না?"
          }
        ]
      }
    ]
  }
});
