/**
 * Tadabbur long-form articles — surah 114.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "114:1": {
    "sections": [
      {
        "h": {
          "en": "Four Words at the Very End",
          "bn": "মুসহাফের শেষ প্রান্তে চার শব্দ"
        },
        "p": [
          {
            "en": "Qul a'udhu bi-rabbi an-nas: say, I seek refuge in the Lord of mankind. In the Arabic of the mushaf the verse is four words, qul, a'udhu, bi-rabbi and an-nas. It opens the last surah of the Qur'an in the order of the mushaf, a surah of six verses, and the sentence it begins does not end here. The verse that follows, 114:2, adds the next name, and what refuge is sought from comes later still. This article stays with the first four words and what the commentators consulted for them say.",
            "bn": "কুল আঊযু বিরাব্বিন নাস: বলো, আমি আশ্রয় চাই মানুষের রবের কাছে। মুসহাফের আরবিতে আয়াতটিতে শব্দ চারটি: কুল, আঊযু, বিরাব্বি আর আন-নাস। মুসহাফের ক্রমে কুরআনের শেষ সূরা এখান থেকেই শুরু, সূরাটিতে আয়াত ছয়টি। তবে এখানে যে বাক্য শুরু হলো, তা এখানেই শেষ হয় না। পরের আয়াত ১১৪:২ পরের নামটি যোগ করে, আর কীসের থেকে আশ্রয় চাওয়া হচ্ছে, সে কথা আসে আরও পরে। এই লেখা শুধু প্রথম চারটি শব্দ নিয়ে, আর সংগৃহীত তাফসীরগুলো এগুলো সম্পর্কে কী বলে, তা নিয়ে।"
          },
          {
            "en": "On where the surah was revealed, the sources consulted here differ. The English abridgement of Ibn Kathir heads it as the surah which was revealed in Makkah. Al-Baghawi, on this same verse, labels it with a single word, madaniyya, revealed in Madinah. Neither argues the point in the text consulted for this verse, and this article does not settle it. Al-Qurtubi opens by saying the surah is like al-Falaq, because it is one of the two mu'awwidhatayn, the pair of surahs that seek refuge.",
            "bn": "সূরাটি কোথায় নাজিল হয়েছে, এ নিয়ে সংগৃহীত উৎসগুলো একমত নয়। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ শিরোনামেই লিখেছে, সূরাটি মক্কায় নাজিল হয়েছে। বাগাভী এই আয়াতেই এক শব্দে লিখেছেন: মাদানীয়্যা, অর্থাৎ মদীনায় নাজিল। এই আয়াতের জন্য সংগৃহীত লেখায় কেউই নিজের মতের পক্ষে যুক্তি দেননি, আর এই লেখাও কোনো পক্ষ নেয় না। কুরতুবী শুরুতেই বলেন, সূরাটি আল-ফালাকের মতো, কারণ দুটি মিলেই মুআওয়িযাতাইন, অর্থাৎ আশ্রয় চাওয়ার জোড়া সূরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Told What to Say",
          "bn": "যা বলতে হবে, তা-ই শিখিয়ে দেওয়া"
        },
        "p": [
          {
            "en": "The first word is a command. At-Tabari reads it as Allah speaking to His Prophet Muhammad ﷺ: say, O Muhammad, I seek protection with the Lord of mankind. The Muyassar names the same addressee in its own phrasing: say, O Messenger. On their reading the surah begins with an instruction given to the Prophet ﷺ, and the plea that follows is one he was taught to make, word for word, rather than one he composed. The word qul itself stays in the recited text, so whoever recites the surah repeats the command along with the plea.",
            "bn": "প্রথম শব্দটিই আদেশ। তাবারীর মতে এখানে আল্লাহ তাঁর নবী মুহাম্মাদ ﷺ-কে বলছেন: হে মুহাম্মাদ, বলো, আমি মানুষের রবের আশ্রয় চাই। মুয়াসসারও একই জনকে সম্বোধিত ধরে, শুধু নিজের ভাষায়: হে রাসূল, বলো। তাঁদের ব্যাখ্যায় সূরা শুরু হয় নবী ﷺ-কে দেওয়া একটি নির্দেশ দিয়ে। পরের আবেদনটি তিনি নিজে বানাননি, শব্দে শব্দে তাঁকে তা শিখিয়ে দেওয়া হয়েছে। কুল শব্দটি তিলাওয়াতেও রয়ে গেছে। তাই যে-ই সূরাটি পড়ে, সে আবেদনের সঙ্গে আদেশটিও মুখে আনে।"
          },
          {
            "en": "Ibn Kathir frames the command differently. He does not name the Prophet ﷺ as its addressee in the text consulted for this verse; he says that Allah commanded the one seeking refuge, al-musta'idh, to seek refuge with the One who holds the attributes the surah names. His word describes the addressee by what he does, so the instruction reaches whoever takes it up. The two framings are not set against each other in the sources: one names the first person told to say it, the other names anyone who says it after him.",
            "bn": "ইবন কাসীর আদেশটিকে দেখেন অন্যভাবে। এই আয়াতের জন্য সংগৃহীত লেখায় তিনি নবী ﷺ-কে সম্বোধিত বলে উল্লেখ করেননি। তিনি বলেন, আল্লাহ আশ্রয়প্রার্থীকে (আল-মুসতাঈয) আদেশ দিয়েছেন সেই সত্তার আশ্রয় নিতে, সূরায় যাঁর গুণগুলোর কথা এসেছে। তাঁর শব্দটি সম্বোধিত ব্যক্তিকে চেনায় তার কাজ দিয়ে। ফলে যে-ই আশ্রয় চায়, নির্দেশটি তার কাছে পৌঁছে যায়। উৎসগুলো এই দুই ব্যাখ্যাকে পরস্পরের বিরোধী হিসেবে দাঁড় করায় না। একটি বলে প্রথম কাকে বলতে বলা হয়েছিল, অন্যটি বলে তাঁর পরে যে-ই বলে, তার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb of Shelter",
          "bn": "আশ্রয় চাওয়ার ক্রিয়া"
        },
        "p": [
          {
            "en": "A'udhu is the plea itself, spoken by the one who asks: I seek refuge. At-Tabari glosses it with another verb, astajir, I seek protection, I ask to be sheltered. The Muyassar doubles it: a'udhu wa a'tasim, I seek refuge and I hold fast. It then says why the Lord of mankind is the One to ask: He alone is able to turn back the evil of the whisperer. In the Muyassar's few words, then, refuge is not a mood of the heart but a request made to the only One who can grant it.",
            "bn": "আঊযু হলো আবেদনটি নিজেই, যে চায় তার মুখের কথা: আমি আশ্রয় চাই। তাবারী এর অর্থ বোঝান আরেকটি ক্রিয়া দিয়ে, আসতাজীর: আমি নিরাপত্তা চাই, আমাকে আগলে রাখা হোক। মুয়াসসার এর সঙ্গে আরেকটি শব্দ জুড়ে দেয়: আঊযু ওয়া আ'তাসিম, আমি আশ্রয় চাই আর আঁকড়ে ধরি। তারপর কারণও বলে, কেন মানুষের রবের কাছেই চাইতে হবে: কুমন্ত্রণাদাতার অনিষ্ট ফিরিয়ে দেওয়ার ক্ষমতা কেবল তাঁরই আছে। মুয়াসসারের অল্প কথায় তাই আশ্রয় মনের কোনো অবস্থা নয়। এ হলো আবেদন, আর সে আবেদন করা হয় একমাত্র তাঁর কাছে, যিনি আশ্রয় দিতে পারেন।"
          },
          {
            "en": "As-Sa'di uses three verbs side by side. The servant, he writes, should seek help, seek refuge and hold fast, yasta'in, yasta'idh and ya'tasim, by Allah's lordship over all people; the first of the three appears in square brackets in the printed text consulted, as an editor's addition. The three verbs move from asking for aid, to taking shelter, to holding on. Read together with at-Tabari and the Muyassar, the glosses agree that a'udhu is a servant turning to his Lord and asking.",
            "bn": "সা'দী পাশাপাশি তিনটি ক্রিয়া ব্যবহার করেন। তিনি লেখেন, সব মানুষের উপর আল্লাহর রুবূবিয়্যাতকে অবলম্বন করে বান্দার উচিত সাহায্য চাওয়া, আশ্রয় চাওয়া আর আঁকড়ে ধরা: ইয়াসতাঈন, ইয়াসতাঈয, ইয়া'তাসিম। সংগৃহীত মুদ্রিত পাঠে প্রথম ক্রিয়াটি তৃতীয় বন্ধনীর ভেতরে আছে, অর্থাৎ সেটি সম্পাদকের সংযোজন। ক্রিয়া তিনটি ধাপে ধাপে এগোয়: সাহায্য চাওয়া, আশ্রয় নেওয়া, শক্ত করে ধরে থাকা। তাবারী আর মুয়াসসারের সঙ্গে মিলিয়ে পড়লে ব্যাখ্যাগুলো এক জায়গায় একমত: আঊযু মানে বান্দা তার রবের দিকে ফিরছে আর তাঁর কাছে চাইছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Owner, Mender and Nurturer",
          "bn": "মালিক, সংশোধনকারী, প্রতিপালক"
        },
        "p": [
          {
            "en": "Bi-rabbi an-nas: in the Lord of mankind. Al-Qurtubi glosses rabb an-nas in one line: their Owner, and the One who sets their affairs right, malikuhum wa muslihu umurihim. Ma'arif al-Qur'an takes the word from another side. Rabb, it says, stands for one who nurtures, and it implies that the Supreme Nurturer takes care of everything under all circumstances. The first gloss puts ownership and repair together; the second puts care and upbringing first. Both are given here as their authors give them, and neither is chosen over the other.",
            "bn": "বিরাব্বিন নাস: মানুষের রবের কাছে। কুরতুবী রাব্বুন নাসের অর্থ বলেন এক লাইনেই: তাদের মালিক, আর যিনি তাদের সব ব্যাপার ঠিকঠাক করে দেন, মালিকুহুম ওয়া মুসলিহু উমূরিহিম। মাআরিফুল কুরআন শব্দটিকে দেখে আরেক দিক থেকে। তার মতে রব মানে যিনি লালনপালন করেন। এর ভেতরে এই কথাও আছে যে সর্বোচ্চ প্রতিপালক সব অবস্থায় সব কিছুর দেখভাল করেন। প্রথম ব্যাখ্যায় মালিকানা আর সংশোধন একসঙ্গে। দ্বিতীয়টিতে আগে আসে যত্ন আর লালন। লেখকেরা যেভাবে দিয়েছেন, দুটোই এখানে সেভাবে রাখা হলো। এই লেখা কোনোটিকে অন্যটির উপরে বেছে নেয় না।"
          },
          {
            "en": "Ibn Kathir names the quality behind the word: rububiyya, lordship, the first of three attributes of the Lord that the surah's opening sets out. He is the Lord of everything, he writes, and all things are created by Him, owned by Him and servants to Him. As-Sa'di likewise speaks of Allah's lordship over all people, and adds that all of creation falls under His lordship and His dominion, so that He holds every moving creature by its forelock. For both, rabb is a word of total ownership.",
            "bn": "ইবন কাসীর শব্দটির পেছনের গুণটির নাম বলেন: রুবূবিয়্যাত, প্রভুত্ব। সূরার শুরুতে রবের যে তিনটি গুণ এসেছে, এটি তার প্রথমটি। তিনি লেখেন, আল্লাহ সব কিছুর রব। সব কিছু তাঁরই সৃষ্টি, তাঁরই মালিকানায়, তাঁরই বান্দা। সা'দীও সব মানুষের উপর আল্লাহর রুবূবিয়্যাতের কথা বলেন। সঙ্গে যোগ করেন, গোটা সৃষ্টিজগৎ তাঁর রুবূবিয়্যাত আর তাঁর রাজত্বের অধীন। চলাফেরা করে এমন প্রতিটি প্রাণীর কপালের চুল তাঁর মুঠোয়। দুজনের কাছেই রব শব্দটি পূর্ণ মালিকানার কথা।"
          },
          {
            "en": "An-nas is the plain word for people, rendered here as mankind. The commentators consulted do not dwell on its grammar under this verse; their interest is in why it is named at all, which is the next question. What their glosses on rabb share is a picture of the One asked: He owns the one who asks, He tends him and He mends his affairs. A request for refuge is addressed to Someone already responsible for the one asking.",
            "bn": "আন-নাস হলো মানুষ বোঝানোর সাধারণ শব্দ। এই আয়াতে সংগৃহীত তাফসীরকারেরা শব্দটির ব্যাকরণ নিয়ে থামেননি। তাঁদের আগ্রহ বরং অন্য প্রশ্নে: মানুষের নাম আদৌ কেন নেওয়া হলো। সে প্রশ্ন আসছে পরের অংশে। রব শব্দের ব্যাখ্যাগুলো মিলিয়ে দেখলে, যাঁর কাছে চাওয়া হচ্ছে তাঁর একটা ছবি ফুটে ওঠে: যে চাইছে, তিনি তার মালিক, তিনি তার দেখভাল করেন, তার ব্যাপারগুলো ঠিক করে দেন। আশ্রয়ের আবেদন তাই যায় এমন একজনের কাছে, চাওয়ার আগেই যিনি প্রার্থীর দায়িত্ব নিয়ে আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Why People Are Named",
          "bn": "মানুষের নাম কেন নেওয়া হলো"
        },
        "p": [
          {
            "en": "Al-Qurtubi puts the question himself: He is Lord of all creation, so why say Lord of people? He gives two reasons. The first: people are held in high regard, so by naming them Allah made known that He is their Lord, however great they are held to be. The second: He commanded refuge from their evil, so by naming them He made known that He is the One who gives refuge from them. One reason looks at those who are admired, the other at those who are feared.",
            "bn": "কুরতুবী প্রশ্নটা নিজেই তোলেন: আল্লাহ তো সমস্ত সৃষ্টির রব, তাহলে মানুষের রব বলা হলো কেন? তিনি দুটি কারণ দেন। প্রথমটি: মানুষকে বড় করে দেখা হয়। তাই তাদের নাম নিয়ে আল্লাহ জানিয়ে দিলেন, তাদের যত বড়ই মনে করা হোক, তিনি তাদেরও রব। দ্বিতীয়টি: আল্লাহ মানুষের অনিষ্ট থেকে আশ্রয় চাইতে আদেশ দিয়েছেন। তাই তাদের নাম নিয়ে তিনি জানালেন, তাদের হাত থেকে আশ্রয় তিনিই দেন। প্রথম কারণের চোখ তাদের দিকে, যাদের সমীহ করা হয়। দ্বিতীয়টির চোখ তাদের দিকে, যাদের ভয় করা হয়।"
          },
          {
            "en": "At-Tabari reads 114:1 together with the verse that follows and gives a reason close to al-Qurtubi's first. He is King of all creation, men, jinn and the rest, he writes, and the naming informs whoever used to venerate people as the believers venerate their Lord: He is King over whomever they venerate, who lives within His dominion with His power running over him, and He is more deserving of veneration and of worship than any person others venerate. The name confronts the habit of making people too great.",
            "bn": "তাবারী ১১৪:১ পড়েন পরের আয়াতের সঙ্গে মিলিয়ে, আর যে কারণ দেন তা কুরতুবীর প্রথম কারণের কাছাকাছি। তিনি লেখেন, আল্লাহ সমস্ত সৃষ্টির অধিপতি, মানুষ, জিন আর অন্য সবার। মুমিনরা তাদের রবকে যেভাবে সম্মান করে, কেউ কেউ মানুষকে সেভাবে সম্মান করত। এই নাম নিয়ে তাদের জানিয়ে দেওয়া হলো, যাকে তারা এত বড় করে, আল্লাহ তারও অধিপতি। সে তাঁরই রাজত্বে থাকে, তাঁর ক্ষমতা তার উপর চলে। কাজেই সম্মান আর ইবাদত পাওয়ার বেশি হকদার তিনিই, মানুষের মধ্যে যাকে বড় করা হয় সে নয়। মানুষকে মাত্রা ছাড়িয়ে বড় করে তোলার অভ্যাসের সামনে এই নাম সরাসরি দাঁড়িয়ে যায়।"
          },
          {
            "en": "Ma'arif al-Qur'an, citing al-Mazhari from al-Baydawi, gives a third reason by comparing the companion surah. There He is called the Lord of the daybreak, in 113:1, because protection was sought against outward bodily hardships, which are not confined to human beings: animals suffer them too. Here He is called the Lord of mankind, because the insinuations of Shaytan are restricted to man, with the jinn added to him. Three reasons, then, from three sources; this article records them and does not rank them.",
            "bn": "মাআরিফুল কুরআন মাযহারীর সূত্রে বায়যাবী থেকে তৃতীয় একটি কারণ আনে, সঙ্গী সূরার সঙ্গে তুলনা করে। ১১৩:১ আয়াতে আল্লাহকে বলা হয়েছে প্রভাতের রব। কারণ সেখানে আশ্রয় চাওয়া হয়েছিল বাইরের শারীরিক কষ্ট থেকে, যা শুধু মানুষের হয় না, পশুপাখিও তা ভোগ করে। এখানে তাঁকে বলা হয়েছে মানুষের রব। কারণ শয়তানের কুমন্ত্রণা শুধু মানুষের বেলাতেই, সঙ্গে জিনও আছে। তিন উৎস থেকে তাই তিনটি কারণ এল। এই লেখা কারণগুলো তুলে রাখে, কোনোটিকে আগে-পরে সাজায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The First of Three Names",
          "bn": "তিন নামের প্রথমটি"
        },
        "p": [
          {
            "en": "Rabb is the first of three names the surah gives in a row. Ibn Kathir reads them together as three attributes of the Lord: lordship, sovereignty and divinity, rububiyya, mulk and ilahiyya. He is the Lord of everything, its King and its God, Ibn Kathir writes; and therefore He commanded whoever seeks refuge to seek it with Him who holds these attributes. The verse that follows, 114:2, carries the second name, and the third comes after it. Those two names belong to their own verses and are not treated here.",
            "bn": "রব হলো সূরায় পরপর আসা তিনটি নামের প্রথমটি। ইবন কাসীর তিনটিকে একসঙ্গে পড়েন রবের তিনটি গুণ হিসেবে: রুবূবিয়্যাত, মুলক আর উলূহিয়্যাত, অর্থাৎ প্রভুত্ব, রাজত্ব আর ইলাহ হওয়া। তিনি লেখেন, আল্লাহ সব কিছুর রব, সব কিছুর অধিপতি, সব কিছুর ইলাহ। এ কারণেই তিনি আশ্রয়প্রার্থীকে আদেশ দিয়েছেন এই গুণগুলোর অধিকারীর কাছেই আশ্রয় চাইতে। দ্বিতীয় নামটি আছে পরের আয়াত ১১৪:২-এ, তৃতীয়টি তার পরে। ওই দুই নাম নিজ নিজ আয়াতের বিষয়, এখানে সেগুলোর আলোচনা হবে না।"
          },
          {
            "en": "As-Sa'di explains what the names give whoever asks. The surah, he says, contains seeking refuge in the Lord of people, their King and their God. The servant takes refuge in Allah's lordship over all people, and in His divinity, for which He created them; and that purpose cannot be completed for them except by repelling the evil of their enemy, who wants to cut them off from it. For as-Sa'di, then, rabb is where the plea starts: He who is asked already owns whoever asks.",
            "bn": "নামগুলো প্রার্থীকে কী দেয়, সা'দী তা ব্যাখ্যা করেন। তাঁর মতে সূরাটিতে আছে মানুষের রব, মানুষের অধিপতি আর মানুষের ইলাহর কাছে আশ্রয় চাওয়া। বান্দা আশ্রয় নেয় সব মানুষের উপর আল্লাহর রুবূবিয়্যাতের কাছে। আশ্রয় নেয় তাঁর উলূহিয়্যাতের কাছেও, যার জন্যই তিনি মানুষকে সৃষ্টি করেছেন। আর শত্রুর অনিষ্ট দূর না হলে সেই উদ্দেশ্য তাদের জন্য পূর্ণ হয় না, কারণ শত্রু চায় তাদের সেখান থেকে বিচ্ছিন্ন করতে। সা'দীর কাছে তাই আবেদনের শুরু রব থেকে: যাঁর কাছে চাওয়া হচ্ছে, প্রার্থী আগে থেকেই তাঁর মালিকানায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Without a Like",
          "bn": "অতুলনীয় আয়াত"
        },
        "p": [
          {
            "en": "Al-Qurtubi, opening the surah, cites a report from 'Uqba ibn 'Amir al-Juhani (RA) through at-Tirmidhi, notes that at-Tirmidhi called it hasan sahih, and adds that Muslim narrated it too. At-Tirmidhi's wording, in the English of the page consulted, is this: \"Narrated 'Uqbah bin 'Amir Al-Juhani: that the Prophet (ﷺ) said: 'Some Ayat have been revealed to me the likes of which have not been seen: Qul A'udhu Birabbin-Nas until the end of the Surah and Qul A'udhu Birabbil-Falaq until the end of the Surah.'\" (Tirmidhi 2902). At-Tirmidhi's own grading on the page: hasan sahih.",
            "bn": "কুরতুবী সূরার শুরুতে তিরমিযীর সূত্রে উকবা ইবন আমির আল-জুহানী (রাঃ) থেকে একটি বর্ণনা আনেন। তিনি জানান, তিরমিযী একে হাসান সহীহ বলেছেন, আর মুসলিমও এটি বর্ণনা করেছেন। সংগৃহীত পৃষ্ঠায় তিরমিযীর বর্ণনা এরকম: উকবা ইবন আমির আল-জুহানী থেকে বর্ণিত, নবী ﷺ বলেছেন: \"আমার উপর এমন কিছু আয়াত নাজিল হয়েছে, যার মতো আর দেখা যায়নি: কুল আঊযু বিরাব্বিন নাস, সূরার শেষ পর্যন্ত, আর কুল আঊযু বিরাব্বিল ফালাক, সূরার শেষ পর্যন্ত।\" (তিরমিযী ২৯০২)। পৃষ্ঠায় তিরমিযীর নিজের মান নির্ণয়: হাসান সহীহ।"
          },
          {
            "en": "The report praises the two surahs together, from first verse to last; it is about the surah as a whole and not about these four words alone. Muslim's record of it, as hadith 814, was confirmed on its page, but its wording differs and only at-Tirmidhi's is quoted here. The commentaries consulted for this verse give no occasion of revelation for it; al-Qurtubi's only word on its setting is that it is like al-Falaq. So no occasion is narrated here, and nothing is said of it from memory. Nor do they cite any other narration about when the surah is recited.",
            "bn": "বর্ণনাটিতে দুই সূরার একসঙ্গে প্রশংসা, প্রথম আয়াত থেকে শেষ আয়াত পর্যন্ত। তাই এটি গোটা সূরার কথা, শুধু এই চারটি শব্দের নয়। মুসলিমে বর্ণনাটি আছে ৮১৪ নম্বর হাদিস হিসেবে, তার পৃষ্ঠায় তা মিলিয়ে দেখা হয়েছে। তবে সেখানে শব্দ আলাদা, তাই এখানে শুধু তিরমিযীর শব্দই উদ্ধৃত হলো। এই আয়াতের জন্য সংগৃহীত তাফসীরগুলো এর কোনো শানে নুযূল বলে না। প্রেক্ষাপট নিয়ে কুরতুবীর একমাত্র কথা, সূরাটি আল-ফালাকের মতো। তাই এখানে কোনো শানে নুযূল বর্ণনা করা হলো না, স্মৃতি থেকেও কিছু বলা হলো না। সূরাটি কখন পড়া হয়, সে বিষয়ে অন্য কোনো বর্ণনাও তাফসীরগুলো আনেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Plea, Not a Verdict",
          "bn": "আবেদন, রায় নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi's second reason speaks of refuge from the evil of people, and as-Sa'di notes that whispering comes from humans as it comes from jinn. This needs saying plainly: the verse teaches a plea addressed to Allah. It names nobody, and it licenses nothing against any living person or community. Seeking refuge from harm is not a judgement on whoever is feared, and a reader who turns these words into suspicion of a neighbour or a group has turned a request for protection into an accusation the verse never made.",
            "bn": "কুরতুবীর দ্বিতীয় কারণে মানুষের অনিষ্ট থেকে আশ্রয়ের কথা আছে। আর সা'দী লেখেন, কুমন্ত্রণা যেমন জিনের কাছ থেকে আসে, তেমনি মানুষের কাছ থেকেও আসে। তাই কথাটা সোজাসুজি বলা দরকার: আয়াতটি আল্লাহর কাছে একটি আবেদন করতে শেখায়। এতে কারও নাম নেই। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতিও এতে নেই। ক্ষতি থেকে আশ্রয় চাওয়া মানে যাকে ভয় করি তার বিরুদ্ধে রায় দেওয়া নয়। কেউ যদি এই শব্দগুলোকে প্রতিবেশী বা কোনো দলের প্রতি সন্দেহে পরিণত করে, তবে সে নিরাপত্তার আবেদনকে এমন এক অভিযোগ বানিয়ে ফেলে, যা আয়াত কখনো করেনি।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the surah as completing its companion: al-Falaq seeks refuge from the hardships of this world, an-Nas from the trials of the Hereafter, against the whisperings that cause every sin. Since that anguish is the most severe, it says, the Qur'an fittingly ends by urging Allah's protection. Ibn Kathir adds one short sentence: the protected one is the one whom Allah protects, wal-ma'sum man 'asamahu Allah. The last surah of the mushaf opens, then, not on a story but on words to say, and the first One they name is the Lord of mankind.",
            "bn": "মাআরিফুল কুরআন সূরাটিকে পড়ে তার সঙ্গী সূরার পরিপূরক হিসেবে। আল-ফালাকে আশ্রয় চাওয়া হয় দুনিয়ার কষ্ট থেকে, আন-নাসে আখিরাতের পরীক্ষা থেকে, সেই কুমন্ত্রণার বিরুদ্ধে যা সব গুনাহের মূল। মাআরিফ বলে, আখিরাতের যন্ত্রণাই সবচেয়ে কঠিন, তাই কুরআন শেষে এসে আল্লাহর আশ্রয় চাওয়ার উপর জোর দিয়েছে। ইবন কাসীর ছোট্ট একটি বাক্য যোগ করেন: সুরক্ষিত সে-ই, যাকে আল্লাহ সুরক্ষা দেন, ওয়াল মা'সূমু মান আসামাহুল্লাহ। মুসহাফের শেষ সূরা তাই শুরু হয় কোনো কাহিনি দিয়ে নয়, মুখে বলার মতো কথা দিয়ে। আর সেই কথায় প্রথম যাঁর নাম আসে, তিনি মানুষের রব।"
          }
        ]
      }
    ]
  },
  "114:4": {
    "sections": [
      {
        "h": {
          "en": "An Enemy Known by Its Habits",
          "bn": "স্বভাব দিয়ে চেনানো শত্রু"
        },
        "p": [
          {
            "en": "Min sharri al-waswasi al-khannas: from the evil of the whisperer who withdraws. With these four Arabic words the surah turns. Three names of the Sheltering Lord have been spoken in 114:1 to 114:3; now comes the enemy. Ma'arif al-Qur'an says that after invoking three attributes of Allah, the verse describes him from whom protection is sought. Ibn Kathir reads the order the same way: the seeker of protection is commanded to seek refuge with Him who has these attributes, from the evil of this whisperer.",
            "bn": "মিন শাররিল ওয়াসওয়াসিল খান্নাস: সেই কুমন্ত্রণাদাতার অনিষ্ট থেকে, যে সরে পড়ে। আরবিতে মাত্র চারটি শব্দ, আর এখানেই সূরাটি মোড় নেয়। ১১৪:১ থেকে ১১৪:৩ আয়াতে আশ্রয়দাতার তিনটি নাম বলা হয়ে গেছে। এবার আসে তার কথা, যার থেকে আশ্রয় চাওয়া হচ্ছে। মাআরিফুল কুরআন সহজ করে বলে: আল্লাহর তিনটি গুণ উল্লেখের পর এ আয়াত সেই সত্তার বর্ণনা দেয়, যার হাত থেকে সুরক্ষা চাওয়া হয়। ইবন কাসীরও ক্রমটা এভাবেই পড়েন। যে সুরক্ষা চায়, তাকে আদেশ করা হয়েছে এই গুণগুলোর অধিকারীর কাছে আশ্রয় নিতে, সেই কুমন্ত্রণাদাতার অনিষ্ট থেকে, যে সরে পড়ে।"
          },
          {
            "en": "Notice how the enemy is introduced. He is named by two habits: one word for what he does, and one for how he leaves. The Muyassar's gloss keeps both: from the harm of the devil who whispers at times of heedlessness and hides when Allah is remembered. For as-Sa'di, the surah seeks refuge from Shaytan, who is the root and source of all evils, and part of his trial and his evil is that he whispers in the breasts of people.",
            "bn": "শত্রুকে কীভাবে পরিচয় করানো হলো, খেয়াল করুন। তাকে চেনানো হয়েছে দুটি স্বভাব দিয়ে। একটি শব্দ বলে সে কী করে, অন্যটি বলে সে কীভাবে চলে যায়। মুয়াসসারের ব্যাখ্যায় দুটোই আছে: সেই শয়তানের কষ্ট থেকে, যে গাফিলতির সময় কুমন্ত্রণা দেয় আর আল্লাহর জিকির হলে লুকিয়ে যায়। সা'দীর ভাষায়, এই সূরায় আশ্রয় চাওয়া হয়েছে শয়তান থেকে, যে সব অনিষ্টের মূল ও উৎস। আর তার ফিতনা ও অনিষ্টের একটি দিক হলো, সে মানুষের বুকে কুমন্ত্রণা দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When a Whisper Becomes a Name",
          "bn": "ফিসফিসানি যখন নাম হয়ে যায়"
        },
        "p": [
          {
            "en": "Al-Qurtubi explains al-waswas as the devil, and the meaning as from the evil of him who possesses the whispering, with the possessor's word left out; he gives this from al-Farra'. With a fatha on the waw, waswas is a noun, the whisperer; with a kasra, wiswas is the verbal noun, the whispering, as with zalzal and zilzal. Al-Baghawi says it serves as both verbal noun and noun, and relays al-Zajjaj: it means the devil who owns the whispering. Waswasa itself, al-Qurtubi says, is the talk of the self.",
            "bn": "কুরতুবী বলেন, আল-ওয়াসওয়াস মানে শয়তান। অর্থ দাঁড়ায়: কুমন্ত্রণার অধিকারীর অনিষ্ট থেকে। অধিকারী বোঝানো শব্দটি উহ্য রাখা হয়েছে, আর এ ব্যাখ্যা তিনি নেন ফাররা থেকে। ওয়াও-এ যবর দিলে ওয়াসওয়াস বিশেষ্য, অর্থাৎ কুমন্ত্রণাদাতা। যের দিলে উইসওয়াস ক্রিয়াবাচক বিশেষ্য, অর্থাৎ কুমন্ত্রণা দেওয়া, ঠিক যেমন যালযাল আর যিলযাল। বাগাভী বলেন, শব্দটি দুই অর্থেই চলে। তিনি যাজ্জাজের ব্যাখ্যাও আনেন: এর মানে কুমন্ত্রণার মালিক শয়তান। আর ওয়াসওয়াসা জিনিসটা কী, কুরতুবী তাও বলে দেন: মনের ভেতরের কথা।"
          },
          {
            "en": "The word carries sound in it. Al-Qurtubi notes that the Arabs called the low murmur of the hunter, the noise of hounds and the faint clink of jewellery waswas, and he cites lines of Dhu ar-Rumma and al-A'sha. Ma'arif al-Qur'an adds that the verbal noun is used here in a hyperbolic way for Shaytan, as if he were whisper embodied, and that his whispering means inviting people to obey him through speech whose subject is cast into the heart while no voice is heard.",
            "bn": "শব্দটার ভেতরেই একটা আওয়াজ লুকিয়ে আছে। কুরতুবী জানান, শিকারির চাপা গুঞ্জন, শিকারি কুকুরের শব্দ আর গয়নার মৃদু টুংটাংকে আরবরা ওয়াসওয়াস বলত। প্রমাণে তিনি যুর-রুম্মা ও আ'শার কবিতার চরণ আনেন। মাআরিফুল কুরআন যোগ করে, এখানে ক্রিয়াবাচক বিশেষ্যটি শয়তানের জন্য ব্যবহার করা হয়েছে অতিশয়োক্তি হিসেবে, যেন সে নিজেই মূর্তিমান ফিসফিসানি। তার কুমন্ত্রণা মানে নিজের আনুগত্যের দিকে ডাকা, এমন কথায় যার বিষয়টা অন্তরে ঢেলে দেওয়া হয়, অথচ কোনো আওয়াজ শোনা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Squatting on the Heart",
          "bn": "অন্তরের উপর ঘাপটি মেরে"
        },
        "p": [
          {
            "en": "Al-khannas is the second habit. Al-Qurtubi gives two reasons for the name. He is called khannas because he hides much, and from the same root comes 81:15, al-khunnas, the stars that vanish after they have shone. Or he is called so because he falls back when the servant remembers Allah; the Arabs say khanastuhu fa-khanasa, I held him back and he fell back. Ma'arif al-Qur'an renders the verb as to sneak, recede or withdraw furtively.",
            "bn": "আল-খান্নাস হলো দ্বিতীয় স্বভাব। নামটির দুটি কারণ বলেন কুরতুবী। এক, সে খুব বেশি লুকায়, তাই তাকে খান্নাস বলা হয়। একই ধাতু থেকে এসেছে ৮১:১৫ আয়াতের আল-খুন্নাস, সেই তারাগুলো, যারা জ্বলে ওঠার পর মিলিয়ে যায়। দুই, বান্দা আল্লাহকে স্মরণ করলে সে পিছিয়ে যায়। আরবরা বলে, খানাসতুহু ফা-খানাসা: আমি তাকে পিছিয়ে দিলাম, আর সে পিছিয়ে গেল। মাআরিফুল কুরআনে ক্রিয়াটির অর্থ চুপিসারে সরে পড়া বা পিছু হটা।"
          },
          {
            "en": "The best-known gloss comes from Ibn 'Abbas (RA). Ibn Kathir gives it through Sa'id ibn Jubayr, and at-Tabari through another chain: the devil is squatting on the heart of the son of Adam; when he grows absent-minded and heedless, the devil whispers, and when he remembers Allah, the devil withdraws. At-Tabari also reports from Ibn 'Abbas (RA) that no child is born without the whisperer upon its heart; once it comes to reason and remembers Allah, the whisperer withdraws, and when it grows heedless, he whispers.",
            "bn": "সবচেয়ে পরিচিত ব্যাখ্যাটি ইবন আব্বাস (রাঃ)-এর। ইবন কাসীর তা আনেন সাঈদ ইবন জুবাইরের সূত্রে, তাবারী আনেন আরেকটি সনদে। শয়তান আদমসন্তানের অন্তরের উপর ঘাপটি মেরে বসে থাকে। মানুষ যখন অন্যমনস্ক ও গাফিল হয়, সে কুমন্ত্রণা দেয়। আর মানুষ আল্লাহকে স্মরণ করলে সে সরে পড়ে। তাবারী ইবন আব্বাস (রাঃ) থেকে আরেকটি বর্ণনাও আনেন। এমন কোনো শিশু জন্মায় না, যার অন্তরের উপর কুমন্ত্রণাদাতা থাকে না। বুদ্ধি হওয়ার পর সে আল্লাহকে স্মরণ করলে কুমন্ত্রণাদাতা সরে যায়, আর গাফিল হলে আবার কুমন্ত্রণা দেয়।"
          },
          {
            "en": "Mujahid, in at-Tabari, draws the same movement in two verbs: the devil spreads himself out, and when Allah is remembered he shrinks back and withdraws; when the man grows heedless, he spreads out again. Al-Baghawi keeps the picture and glosses al-khannas as the one who keeps coming back. The reader is left with a simple map of the heart. His opening is the moment of forgetting, and his retreat begins at the moment of remembering. Both moments belong to the servant, which is why the surah puts a plea in the servant's mouth.",
            "bn": "তাবারীর বর্ণনায় মুজাহিদ একই আসা-যাওয়াকে দুটি ক্রিয়ায় ধরেন। শয়তান নিজেকে ছড়িয়ে দেয়। আল্লাহর জিকির হলে সে গুটিয়ে যায় আর সরে পড়ে। মানুষ আবার গাফিল হলে আবার ছড়িয়ে পড়ে। বাগাভীও একই ছবি রাখেন, আর আল-খান্নাসের অর্থ করেন: যে বারবার ফিরে আসে। পাঠকের হাতে তাই অন্তরের একটা সহজ মানচিত্র থাকে। ভুলে যাওয়ার মুহূর্তটাই তার প্রবেশপথ, আর স্মরণের মুহূর্তেই শুরু হয় তার পিছু হটা। দুটো মুহূর্তই বান্দার নিজের। এ কারণেই সূরাটি বান্দার মুখে একটি মিনতি তুলে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Ways of Falling Back",
          "bn": "পিছু হটার দুই রকম"
        },
        "p": [
          {
            "en": "Not every retreat is a defeat. Through al-'Awfi, at-Tabari and Ibn Kathir both report a second saying of Ibn 'Abbas (RA): al-waswas is Shaytan; he gives his command, and once he is obeyed, he withdraws. At-Tabari frames it as whispering a call to obey him in people's breasts until the call is answered, and then falling back. Here the withdrawing is no flight from remembrance. The silence that follows a sin is not peace; it may only mean that the whisper got what it came for.",
            "bn": "সব পিছু হটা পরাজয় নয়। আওফীর সূত্রে তাবারী ও ইবন কাসীর দুজনেই ইবন আব্বাস (রাঃ)-এর দ্বিতীয় একটি কথা আনেন। আল-ওয়াসওয়াস হলো শয়তান। সে হুকুম দেয়, আর তার কথা মানা হয়ে গেলে সরে পড়ে। তাবারী বিষয়টা এভাবে সাজান: মানুষের বুকে সে নিজের আনুগত্যের ডাক দিতে থাকে, যতক্ষণ না সে ডাকে সাড়া মেলে, তারপর পিছিয়ে যায়। এখানে সরে যাওয়াটা জিকির থেকে পালানো নয়। গুনাহের পরের নীরবতা তাই শান্তি নয়। হতে পারে, কুমন্ত্রণা যা চাইতে এসেছিল, তা পেয়ে গেছে।"
          },
          {
            "en": "At-Tabari keeps both sayings. In his judgement, Allah commanded His Prophet ﷺ to seek refuge from a devil who whispers at times and withdraws at others, and did not confine his whispering to a single kind or his withdrawing to a single manner. He may whisper a call to disobey Allah and withdraw once obeyed. He may whisper against obeying Allah, and withdraw when the servant recalls his Lord's command, obeys it and defies him. In both states, at-Tabari concludes, he is a whisperer who withdraws; that is his description.",
            "bn": "তাবারী দুটি কথাই রাখেন। তাঁর মতে আল্লাহ তাঁর নবী ﷺ-কে এমন শয়তান থেকে আশ্রয় চাইতে বলেছেন, যে কখনো কুমন্ত্রণা দেয়, কখনো সরে পড়ে। তার কুমন্ত্রণাকে কোনো এক ধরনে বাঁধা হয়নি, তার সরে যাওয়াকেও কোনো এক পথে সীমিত করা হয়নি। সে আল্লাহর নাফরমানির দিকে ডাকতে পারে, আর কথা মানা হলে সরে যেতে পারে। আবার আল্লাহর আনুগত্য থেকে ফেরাতেও পারে। তখন বান্দা রবের হুকুম মনে করে তা পালন করলে এবং শয়তানের কথা অমান্য করলে সে পিছিয়ে যায়। তাবারীর উপসংহার: দুই অবস্থাতেই সে কুমন্ত্রণাদাতা, যে সরে পড়ে। এটাই তার পরিচয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Dressing Wrong in Fine Clothes",
          "bn": "অন্যায়ের গায়ে সুন্দর পোশাক"
        },
        "p": [
          {
            "en": "As-Sa'di describes the method closely. The whisperer makes evil seem good to people, shows it to them in a handsome form and rouses their will to do it. He makes good seem ugly to them, holds them back from it and shows it in a form not its own. He is always in this state, whispering and withdrawing, which as-Sa'di explains as falling back when the servant remembers his Lord and asks His help in pushing him away.",
            "bn": "সা'দী কৌশলটা খুঁটিয়ে বর্ণনা করেন। কুমন্ত্রণাদাতা মন্দকে মানুষের চোখে ভালো করে তোলে, সুন্দর চেহারায় তা দেখায়, আর সে কাজের জন্য তাদের ইচ্ছাকে উসকে দেয়। ভালোকে সে তাদের চোখে কুৎসিত করে তোলে, তা থেকে তাদের পিছিয়ে রাখে, আর এমন চেহারায় দেখায় যা তার আসল চেহারা নয়। সে সবসময় এ অবস্থাতেই থাকে: কুমন্ত্রণা দেয়, আর সরে পড়ে। সা'দী সরে পড়ার অর্থ করেন, বান্দা যখন রবকে স্মরণ করে আর তাকে হটাতে রবের সাহায্য চায়, তখন পিছিয়ে যাওয়া।"
          },
          {
            "en": "When does it come? Ibn Kathir relays, through al-Mu'tamir ibn Sulayman from his father, a report the father says was mentioned to him: the devil, or the whisperer, blows into the heart of the son of Adam at times of grief and at times of joy, and when Allah is remembered he withdraws. Grief can whisper that Allah has forgotten you; joy can whisper that you did it alone. As-Sa'di draws the remedy from the surah's own order: seek help, refuge and protection in Allah's lordship over all people.",
            "bn": "কুমন্ত্রণা আসে কখন? ইবন কাসীর মু'তামির ইবন সুলাইমানের সূত্রে তাঁর বাবার একটি বর্ণনা আনেন। বাবা বলেন, কথাটা তাঁকে জানানো হয়েছে: শয়তান, কিংবা কুমন্ত্রণাদাতা, দুঃখের সময় আর আনন্দের সময় আদমসন্তানের অন্তরে ফুঁ দেয়, আর আল্লাহর জিকির হলে সরে পড়ে। দুঃখ কানে কানে বলতে পারে, আল্লাহ আপনাকে ভুলে গেছেন। আনন্দ বলতে পারে, এসব আপনি একাই করেছেন। প্রতিকারটা সা'দী সূরার নিজের ক্রম থেকেই বের করেন। সব মানুষের উপর আল্লাহর যে রুবুবিয়্যাত, তার কাছেই সাহায্য চাইতে হবে, আশ্রয় নিতে হবে, তাকেই আঁকড়ে ধরতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Blood Runs",
          "bn": "রক্ত যেখানে বয়ে চলে"
        },
        "p": [
          {
            "en": "Ibn Kathir brings a scene from the Prophet's ﷺ life into his commentary on this surah, and al-Qurtubi alludes to its key sentence under 114:5. In Sahih al-Bukhari (3281), Safiyya bint Huyay (RA) relates that she visited him at night while he was in i'tikaf, talked with him, and rose to leave; he rose to walk her back. Two men of the Ansar passed, and on seeing him they hurried. He said: Slowly, it is Safiyya bint Huyay. They said: Glory be to Allah, O Messenger of Allah!",
            "bn": "ইবন কাসীর এই সূরার তাফসীরে নবী ﷺ-এর জীবনের একটি দৃশ্য নিয়ে আসেন, আর কুরতুবী ১১৪:৫ আয়াতের আলোচনায় তার মূল বাক্যটির দিকে ইঙ্গিত করেন। সহীহ বুখারীতে (৩২৮১) সাফিয়্যা বিনতে হুয়াই (রাঃ) বলেন, নবী ﷺ তখন ই'তিকাফে ছিলেন। রাতে তিনি তাঁর সঙ্গে দেখা করতে যান, কথা বলেন, তারপর ফেরার জন্য ওঠেন। নবী ﷺ-ও উঠলেন তাঁকে বাড়ি পৌঁছে দিতে। পথে আনসারের দুজন লোক যাচ্ছিল। তাঁকে দেখে তারা দ্রুত হাঁটতে লাগল। তিনি বললেন: ধীরে চলো, এ সাফিয়্যা বিনতে হুয়াই। তারা বলল: সুবহানাল্লাহ, হে আল্লাহর রাসূল!"
          },
          {
            "en": "He answered: Shaytan runs in the human being where the blood runs, and I feared that he might cast something evil, or he said something, into your hearts. The report concerns that night, not this verse; the commentators bring it to show what the whisperer is like. Notice what the Prophet ﷺ did with the knowledge. He did not wait for a suspicion to settle in two loyal hearts. He named his wife at once and closed the door before a whisper could pass through it.",
            "bn": "তিনি বললেন: শয়তান মানুষের ভেতরে চলাচল করে, যেখানে রক্ত চলাচল করে। আমার ভয় হলো, সে তোমাদের অন্তরে মন্দ কিছু, কিংবা তিনি বলেছেন কিছু একটা, ঢেলে দিতে পারে। ঘটনাটা সেই রাতের, এই আয়াতের নয়। কুমন্ত্রণাদাতা কেমন, তা বোঝাতে তাফসীরকারেরা এটি টেনে আনেন। দেখুন, এই জ্ঞান দিয়ে নবী ﷺ কী করলেন। দুটি বিশ্বস্ত অন্তরে সন্দেহ জমে বসার অপেক্ষা তিনি করেননি। সঙ্গে সঙ্গে স্ত্রীর নাম বলে দিলেন, আর কুমন্ত্রণা ঢোকার আগেই দরজাটা বন্ধ করে দিলেন।"
          },
          {
            "en": "Ibn Kathir also cites, as confirmed in the Sahih, a report found in Sahih Muslim (2814) from 'Abdullah ibn Mas'ud (RA): There is none of you but his companion from the jinn has been assigned to him. They asked: And you too, O Messenger of Allah? He said: And me too, except that Allah has helped me against him, fa-aslama, so he commands me only to good. The two translations at hand render fa-aslama differently: he accepted Islam, or I am safe from him. On either reading, Allah's help is the decisive fact.",
            "bn": "ইবন কাসীর আরেকটি বর্ণনাও আনেন, যাকে তিনি সহীহ গ্রন্থে প্রমাণিত বলেন। সহীহ মুসলিমে (২৮১৪) আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকে বর্ণিত: তোমাদের প্রত্যেকের সঙ্গেই জিনদের মধ্য থেকে তার একজন সঙ্গী নিযুক্ত করা আছে। সাহাবিরা জিজ্ঞেস করলেন: আপনার সঙ্গেও, হে আল্লাহর রাসূল? তিনি বললেন: আমার সঙ্গেও, তবে আল্লাহ তার বিরুদ্ধে আমাকে সাহায্য করেছেন, ফা-আসলামা, তাই সে আমাকে কেবল ভালো কাজেরই হুকুম দেয়। হাতে থাকা দুটি অনুবাদে ফা-আসলামার অর্থ দুই রকম: সে ইসলাম গ্রহণ করেছে, অথবা আমি তার থেকে নিরাপদ। যেভাবেই পড়া হোক, মূল কথা আল্লাহর সাহায্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Of Jinn and of People",
          "bn": "জিনদের মধ্য থেকে, মানুষের মধ্য থেকে"
        },
        "p": [
          {
            "en": "The description runs on to 114:6, min al-jinnati wan-nas, of the jinn and of people, and the commentators differ over what the phrase explains. A first reading takes it as naming two kinds of whisperer. Al-Qurtubi reports al-Hasan: the devil of the jinn whispers in people's breasts, while the devil of mankind comes openly. Qatadah, in al-Qurtubi, says there are devils among both. At-Tabari relays Ibn Zayd, for whom the khannas is of jinn and of men, and who adds that it used to be said the human devil is harder on people, since the jinn whispers unseen while the human confronts you face to face.",
            "bn": "বর্ণনাটা গড়িয়ে যায় ১১৪:৬ পর্যন্ত: মিনাল জিন্নাতি ওয়ান-নাস, জিনদের মধ্য থেকে এবং মানুষের মধ্য থেকে। বাক্যাংশটি কোন কথার ব্যাখ্যা, তা নিয়ে তাফসীরকারদের মতভেদ আছে। প্রথম ব্যাখ্যায় এটি কুমন্ত্রণাদাতার দুই প্রকারের নাম। কুরতুবী হাসানের কথা আনেন: জিন-শয়তান মানুষের বুকে কুমন্ত্রণা দেয়, আর মানুষ-শয়তান আসে প্রকাশ্যে। কুরতুবীর বর্ণনায় কাতাদা বলেন, শয়তান দুই দলেই আছে। তাবারী ইবন যায়দের কথা আনেন: খান্নাস কুমন্ত্রণা দেয় আর সরে পড়ে, সে জিনদের মধ্যেও আছে, মানুষের মধ্যেও। ইবন যায়দ আরও জানান, আগে বলা হতো, মানুষ-শয়তান মানুষের জন্য বেশি কঠিন। জিন-শয়তান কুমন্ত্রণা দেয় অদেখা থেকে, আর মানুষ-শয়তান আপনার সামনে দাঁড়িয়ে মুখোমুখি কথা বলে।"
          },
          {
            "en": "The other reading takes the phrase as explaining the breasts that are whispered into. At-Tabari reads in the breasts of people as meaning their jinn and their humans. If jinn are not people, he answers, Allah has named them people here, as He named them men in 72:6, and he cites an Arab who heard jinn call themselves people of the jinn. Ibn Kathir records two views on 114:5, the plain view limiting it to the children of Adam and a wider view including jinn, and says 114:6 strengthens the second, before noting the first reading with 6:112.",
            "bn": "অন্য ব্যাখ্যায় বাক্যাংশটি বলছে, কাদের বুকে কুমন্ত্রণা দেওয়া হয়। তাবারী 'মানুষের বুকে' কথাটির অর্থ করেন: তাদের জিন ও তাদের মানুষ, দুই দলের বুকেই। জিন কি তবে মানুষ? তাঁর জবাব, আল্লাহ এখানে তাদের মানুষ বলেছেন, যেমন ৭২:৬ আয়াতে তাদের পুরুষ বলেছেন। তিনি এক আরবের কথাও আনেন, যে শুনেছিল জিনেরা নিজেদের বলছে জিনদের মানুষ। ইবন কাসীর ১১৪:৫ আয়াতে দুটি মত লেখেন। বাহ্যিক মতে কথাটি কেবল আদমসন্তানের জন্য, আরেক মতে জিনও এর ভেতরে পড়ে। তিনি বলেন, ১১৪:৬ দ্বিতীয় মতটিকে জোরালো করে। তারপর ৬:১১২ আয়াত দিয়ে প্রথম ব্যাখ্যাটিও উল্লেখ করেন।"
          },
          {
            "en": "Al-Qurtubi lays out still more: a group, with al-Farra', who take an-nas in 114:6 itself to mean jinn; others who say Iblis whispers in the breasts of jinn as of people; and others again who make the whisper the talk of the self. He closes: Allah knows best what is meant. The disagreement stands. One thing does not depend on it. The verse describes an act, whispering towards evil. It names no one, and it licenses nothing against any living person or community; to call one's opponent a devil is not what this plea teaches.",
            "bn": "কুরতুবী আরও কয়েকটি মত সাজিয়ে দেন। ফাররাসহ একদলের মতে ১১৪:৬ আয়াতের আন-নাস শব্দটিই এখানে জিন বোঝায়। আরেক দল বলে, ইবলীস যেমন মানুষের বুকে কুমন্ত্রণা দেয়, তেমনি জিনদের বুকেও দেয়। আরেক দল কুমন্ত্রণাকে মনের ভেতরের কথা বলে ধরে। শেষে তিনি বলেন: উদ্দেশ্য কী, আল্লাহই ভালো জানেন। মতভেদটা তাই রয়ে যায়। তবে একটি বিষয় এর উপর নির্ভর করে না। আয়াতটি একটি কাজের বর্ণনা দেয়, মন্দের দিকে কুমন্ত্রণা দেওয়া। এখানে কারও নাম নেই। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে আয়াতটি কোনো অনুমতিও দেয় না। প্রতিপক্ষকে শয়তান বলে দাগানো এই মিনতির শিক্ষা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Plot Shrunk to a Whisper",
          "bn": "চক্রান্ত নেমে এল ফিসফিসানিতে"
        },
        "p": [
          {
            "en": "Ibn Kathir ends his whole commentary on the Qur'an with a report he gives from Imam Ahmad, noting that Abu Dawud and an-Nasa'i also record it. In Sunan Abu Dawud (5112), Ibn 'Abbas (RA) says a man came to the Prophet ﷺ and said: O Messenger of Allah, one of us finds something in himself, hinting at it, such that to become charcoal would be dearer to him than to speak of it. He said: Allah is Most Great, Allah is Most Great, Allah is Most Great. Praise be to Allah, who turned his plot back into whispering.",
            "bn": "ইবন কাসীর তাঁর পুরো তাফসীর শেষ করেন একটি বর্ণনা দিয়ে, যা তিনি ইমাম আহমাদ থেকে আনেন। সঙ্গে জানান, আবু দাউদ ও নাসাঈও এটি বর্ণনা করেছেন। সুনান আবু দাউদে (৫১১২) ইবন আব্বাস (রাঃ) বলেন, এক লোক নবী ﷺ-এর কাছে এসে বলল: হে আল্লাহর রাসূল, আমাদের কেউ কেউ মনের ভেতর এমন কিছু টের পায়, সে কথাটার দিকে ইঙ্গিত করল, যা মুখে আনার চেয়ে পুড়ে কয়লা হয়ে যাওয়াও তার কাছে প্রিয়। তিনি বললেন: আল্লাহু আকবার, আল্লাহু আকবার, আল্লাহু আকবার। সব প্রশংসা আল্লাহর, যিনি তার চক্রান্তকে ফিরিয়ে দিয়েছেন নিছক কুমন্ত্রণায়।"
          },
          {
            "en": "Abu Dawud gives no grading for it on the page consulted. Al-Qurtubi, closing his discussion of 114:6, cites a narration of Abu Hurayra (RA) that Muslim records, found in Sahih Muslim (127): Allah has overlooked for my community what their selves tell them, so long as they do not speak of it or act upon it. Neither report is about this verse in particular; both concern what passes through the heart. A whisper heard is not a sin committed.",
            "bn": "যে পৃষ্ঠা দেখা হয়েছে, সেখানে আবু দাউদ এর কোনো মান উল্লেখ করেননি। কুরতুবী ১১৪:৬ আয়াতের আলোচনা শেষ করেন আবু হুরায়রা (রাঃ)-এর একটি বর্ণনা দিয়ে, যা মুসলিম এনেছেন। সহীহ মুসলিমে (১২৭) আছে: আমার উম্মতের মনে যা আসে, আল্লাহ তা ক্ষমা করে দিয়েছেন, যতক্ষণ না তারা তা মুখে বলে বা সে অনুযায়ী কাজ করে। কোনো বর্ণনাই বিশেষভাবে এই আয়াত নিয়ে নয়। দুটোই অন্তরের ভেতর দিয়ে যা বয়ে যায়, তা নিয়ে। কুমন্ত্রণা শুনে ফেলা মানেই গুনাহ করে ফেলা নয়।"
          },
          {
            "en": "So the verse leaves the reader with an enemy cut down to size. He is real, patient and close. Yet his power is that of a voice that cannot be heard, and it gives way before a name that can be spoken. The Qur'an's final surah does not ask the believer to defeat him alone. It teaches words to say, and to Whom. The remembrance that sends the whisperer back is the very refuge the surah began with.",
            "bn": "আয়াতটি তাই পাঠকের সামনে শত্রুকে তার আসল মাপে দাঁড় করায়। সে বাস্তব, সে ধৈর্যশীল, আর সে কাছেই থাকে। তবু তার শক্তি এমন এক কণ্ঠের শক্তি, যা শোনা যায় না। আর সে শক্তি হার মানে এমন এক নামের সামনে, যা মুখে উচ্চারণ করা যায়। কুরআনের শেষ সূরা মুমিনকে একা লড়ে তাকে হারাতে বলে না। সে শেখায় কী বলতে হবে, আর কাকে বলতে হবে। যে জিকির কুমন্ত্রণাদাতাকে পিছু হটায়, সেটাই সেই আশ্রয় চাওয়া, যা দিয়ে সূরাটি শুরু হয়েছিল।"
          }
        ]
      }
    ]
  }
});
