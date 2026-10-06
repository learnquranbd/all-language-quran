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
            "en": "Qul a'udhu bi-rabbi an-nas: say, I seek refuge in the Lord of mankind. In the Arabic of the mushaf the verse is four words, qul, a'udhu, bi-rabbi and an-nas. It opens the last surah of the Qur'an in the order of the mushaf, a surah of six verses, and the sentence it begins does not end here. The verse that follows, 114:2, adds the next name, and what refuge is sought from comes later still. This article stays with the first four words and what the commentators fetched for them say.",
            "bn": "কুল আঊযু বিরাব্বিন নাস: বলো, আমি আশ্রয় চাই মানুষের রবের কাছে। মুসহাফের আরবিতে আয়াতটিতে শব্দ চারটি: কুল, আঊযু, বিরাব্বি আর আন-নাস। মুসহাফের ক্রমে কুরআনের শেষ সূরা এখান থেকেই শুরু, সূরাটিতে আয়াত ছয়টি। আয়াতে যে বাক্য শুরু হয়, তা এখানে শেষ হয় না। পরের আয়াত ১১৪:২ পরের নামটি যোগ করে, আর কীসের থেকে আশ্রয় চাওয়া হচ্ছে, সে কথা আসে আরও পরে। এই লেখা থাকবে প্রথম চারটি শব্দের কাছেই, আর এগুলো নিয়ে সংগৃহীত তাফসীরগুলো কী বলে তার কাছে।"
          },
          {
            "en": "On where the surah was revealed, the fetched sources differ. The English abridgement of Ibn Kathir heads it as the surah which was revealed in Makkah. Al-Baghawi, on this same verse, labels it with a single word, madaniyya, revealed in Madinah. Neither argues the point in the text fetched for this verse, and this article does not settle it. Al-Qurtubi opens by saying the surah is like al-Falaq, because it is one of the two mu'awwidhatayn, the pair of surahs that seek refuge.",
            "bn": "সূরাটি কোথায় নাযিল হয়েছে, এ নিয়ে সংগৃহীত উৎসগুলো এক কথা বলে না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ শিরোনামেই লিখেছে, সূরাটি মক্কায় নাযিল হয়েছে। বাগাভী এই আয়াতেই এক শব্দে লিখেছেন: মাদানিয়্যা, অর্থাৎ মদীনায় নাযিল। এই আয়াতের জন্য সংগৃহীত লেখায় কেউই নিজের মতের পক্ষে যুক্তি দেননি, আর এই লেখাও কোনো পক্ষ নেয় না। কুরতুবী শুরুতেই বলেন, সূরাটি আল-ফালাকের মতো, কারণ এটি মুআওয়িযাতাইনের একটি, অর্থাৎ আশ্রয় চাওয়ার দুই সূরার একটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Told What to Say",
          "bn": "কী বলতে হবে, তা-ও শেখানো"
        },
        "p": [
          {
            "en": "The first word is a command. At-Tabari reads it as Allah speaking to His Prophet Muhammad ﷺ: say, O Muhammad, I seek protection with the Lord of mankind. The Muyassar names the same addressee in its own phrasing: say, O Messenger. On their reading the surah begins with an instruction given to the Prophet ﷺ, and the plea that follows is one he was taught to make, word for word, rather than one he composed. The word qul itself stays in the recited text, so whoever recites the surah repeats the command along with the plea.",
            "bn": "প্রথম শব্দটিই এক আদেশ। তাবারী একে পড়েন আল্লাহর পক্ষ থেকে তাঁর নবী মুহাম্মাদ ﷺ-এর প্রতি সম্বোধন হিসেবে: হে মুহাম্মাদ, বলো, আমি মানুষের রবের আশ্রয় চাই। মুয়াসসারও একই জনকে সম্বোধিত ধরে, তবে নিজের ভাষায়: হে রাসূল, বলো। তাঁদের পাঠে সূরার শুরু নবী ﷺ-কে দেওয়া এক নির্দেশ দিয়ে। পরের আবেদনটি তিনি নিজে রচনা করেননি, শব্দে শব্দে তাঁকে তা শেখানো হয়েছে। কুল শব্দটি তিলাওয়াতের পাঠেও থেকে যায়। তাই যে কেউ সূরাটি পড়ে, সে আবেদনের সঙ্গে আদেশটিও মুখে উচ্চারণ করে।"
          },
          {
            "en": "Ibn Kathir frames the command differently. He does not name the Prophet ﷺ as its addressee in the text fetched for this verse; he says that Allah commanded the one seeking refuge, al-musta'idh, to seek refuge with the One who holds the attributes the surah names. His word describes the addressee by what he does, so the instruction reaches whoever takes it up. The two framings are not set against each other in the sources: one names the first person told to say it, the other names anyone who says it after him.",
            "bn": "ইবন কাসীর আদেশটিকে দেখেন অন্যভাবে। এই আয়াতের জন্য সংগৃহীত লেখায় তিনি নবী ﷺ-কে সম্বোধিত হিসেবে উল্লেখ করেননি। তিনি বলেন, আল্লাহ আশ্রয়প্রার্থীকে, আল-মুসতাঈযকে, আদেশ দিয়েছেন সেই সত্তার আশ্রয় নিতে, যাঁর গুণগুলোর কথা সূরায় এসেছে। তাঁর শব্দটি সম্বোধিত ব্যক্তিকে চেনায় তার কাজ দিয়ে। ফলে যে-ই আশ্রয় চায়, নির্দেশটি তার কাছে পৌঁছে যায়। উৎসগুলোতে দুই পাঠ পরস্পরের বিপরীতে দাঁড় করানো হয়নি। একটি বলে প্রথম কাকে বলতে বলা হয়েছিল, অন্যটি বলে তাঁর পরে যে-ই বলে তার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb of Shelter",
          "bn": "আশ্রয় চাওয়ার ক্রিয়া"
        },
        "p": [
          {
            "en": "A'udhu is the plea itself, spoken by the one who asks: I seek refuge. At-Tabari glosses it with another verb, astajir, I seek protection, I ask to be sheltered. The Muyassar doubles it: a'udhu wa a'tasim, I seek refuge and I hold fast. It then says why the Lord of mankind is the One to ask: He alone is able to turn back the evil of the whisperer. In the Muyassar's few words, then, refuge is not a mood of the heart but a request made to the only One who can grant it.",
            "bn": "আঊযু হলো আবেদনটি নিজেই, যে চায় তার নিজের মুখের কথা: আমি আশ্রয় চাই। তাবারী এর অর্থ বোঝান আরেকটি ক্রিয়া দিয়ে, আসতাজীর: আমি নিরাপত্তা চাই, আমাকে আগলে রাখা হোক। মুয়াসসার শব্দটিকে জোড়া করে: আঊযু ওয়া আ'তাসিম, আমি আশ্রয় চাই আর আঁকড়ে ধরি। তারপর কারণও বলে, কেন মানুষের রবের কাছেই চাইতে হবে: কুমন্ত্রণাদাতার অনিষ্ট ফিরিয়ে দেওয়ার ক্ষমতা কেবল তাঁরই আছে। মুয়াসসারের অল্প কথায় তাই আশ্রয় মনের কোনো অবস্থা নয়। এ এমন এক আবেদন, যা করা হয় একমাত্র তাঁর কাছে, যিনি তা দিতে পারেন।"
          },
          {
            "en": "As-Sa'di uses three verbs side by side. The servant, he writes, should seek help, seek refuge and hold fast, yasta'in, yasta'idh and ya'tasim, by Allah's lordship over all people; the first of the three appears in square brackets in the printed text fetched, as an editor's addition. The three verbs move from asking for aid, to taking shelter, to holding on. Read together with at-Tabari and the Muyassar, the glosses agree that a'udhu is a servant turning to his Lord and asking.",
            "bn": "সা'দী পাশাপাশি তিনটি ক্রিয়া ব্যবহার করেন। তিনি লেখেন, বান্দার উচিত আল্লাহর কাছে সাহায্য চাওয়া, আশ্রয় চাওয়া আর তাঁকে আঁকড়ে ধরা: ইয়াসতাঈন, ইয়াসতাঈয, ইয়া'তাসিম। আর তা করবে সব মানুষের উপর আল্লাহর রুবূবিয়্যাতের দোহাই দিয়ে। সংগৃহীত মুদ্রিত পাঠে প্রথম ক্রিয়াটি তৃতীয় বন্ধনীর ভেতরে, সম্পাদকের সংযোজন হিসেবে। তিন ক্রিয়ায় ধাপে ধাপে এগোনো: সাহায্য চাওয়া, আশ্রয় নেওয়া, শক্ত করে ধরে থাকা। তাবারী আর মুয়াসসারের সঙ্গে মিলিয়ে পড়লে ব্যাখ্যাগুলো এক জায়গায় একমত: আঊযু মানে বান্দা তার রবের দিকে ফিরছে আর তাঁর কাছে চাইছে।"
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
            "bn": "বিরাব্বিন নাস: মানুষের রবের কাছে। কুরতুবী রাব্বুন নাসের অর্থ বলেন একটি লাইনেই: তাদের মালিক, আর যিনি তাদের সব ব্যাপার ঠিকঠাক করে দেন, মালিকুহুম ওয়া মুসলিহু উমূরিহিম। মাআরিফুল কুরআন শব্দটিকে দেখে আরেক দিক থেকে। তার মতে রব মানে যিনি লালনপালন করেন। এর ভেতরে এই কথাও আছে যে সর্বোচ্চ প্রতিপালক সব অবস্থায় সব কিছুর দেখভাল করেন। প্রথম ব্যাখ্যায় মালিকানা আর সংশোধন একসঙ্গে। দ্বিতীয়টিতে আগে আসে যত্ন আর লালন। দুটোই এখানে রাখা হলো যেভাবে লেখকেরা দিয়েছেন, কোনোটিকে অন্যটির উপরে বাছাই না করে।"
          },
          {
            "en": "Ibn Kathir names the quality behind the word: rububiyya, lordship, the first of three attributes of the Lord that the surah's opening sets out. He is the Lord of everything, he writes, and all things are created by Him, owned by Him and servants to Him. As-Sa'di likewise speaks of Allah's lordship over all people, and adds that all of creation falls under His lordship and His dominion, so that He holds every moving creature by its forelock. For both, rabb is a word of total ownership.",
            "bn": "ইবন কাসীর শব্দটির পেছনের গুণটির নাম বলেন: রুবূবিয়্যাত, প্রভুত্ব। সূরার শুরুতে রবের যে তিনটি গুণ এসেছে, এটি তার প্রথমটি। তিনি লেখেন, আল্লাহ সব কিছুর রব। সব কিছু তাঁরই সৃষ্টি, তাঁরই মালিকানায়, তাঁরই বান্দা। সা'দীও সব মানুষের উপর আল্লাহর রুবূবিয়্যাতের কথা বলেন। সঙ্গে যোগ করেন, গোটা সৃষ্টিজগৎ তাঁর রুবূবিয়্যাত আর তাঁর রাজত্বের অধীন। চলাফেরা করে এমন প্রতিটি প্রাণীর কপালের চুল তাঁর মুঠোয়। দুজনের কাছেই রব শব্দটি পূর্ণ মালিকানার কথা।"
          },
          {
            "en": "An-nas is the plain word for people, rendered here as mankind. The commentators fetched do not dwell on its grammar under this verse; their interest is in why it is named at all, which is the next question. What their glosses on rabb share is a picture of the One asked: He owns the one who asks, He tends him and He mends his affairs. A request for refuge is addressed to Someone already responsible for the one asking.",
            "bn": "আন-নাস হলো মানুষ বোঝানোর সাধারণ শব্দ। এই আয়াতে সংগৃহীত তাফসীরকারেরা শব্দটির ব্যাকরণ নিয়ে থামেননি। তাঁদের আগ্রহ বরং অন্য প্রশ্নে: মানুষের নাম আদৌ কেন নেওয়া হলো। সে প্রশ্ন আসছে পরের অংশে। রব নিয়ে তাঁদের ব্যাখ্যাগুলো মিলে যার কাছে চাওয়া হচ্ছে তাঁর একটি ছবি দাঁড় করায়। যে চাইছে, তিনি তার মালিক, তার দেখভাল করেন, তার ব্যাপারগুলো ঠিক করে দেন। আশ্রয়ের আবেদন তাই যায় এমন একজনের কাছে, চাওয়ার আগেই যিনি প্রার্থীর দায়িত্ব নিয়ে আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Why People Are Named",
          "bn": "মানুষের নাম কেন নেওয়া হলো"
        },
        "p": [
          {
            "en": "Al-Qurtubi puts the question himself: He is Lord of all creation, so why say Lord of people? He gives two reasons. The first: people are held in high regard, so by naming them Allah made known that He is their Lord, however great they are held to be. The second: He commanded refuge from their evil, so by naming them He made known that He is the One who gives refuge from them. One reason looks at those who are admired, the other at those who are feared.",
            "bn": "কুরতুবী প্রশ্নটা নিজেই তোলেন: আল্লাহ তো সমস্ত সৃষ্টির রব, তাহলে মানুষের রব বলা হলো কেন? তিনি দুটি কারণ দেন। প্রথমটি: মানুষকে বড় করে দেখা হয়। তাই তাদের নাম নিয়ে আল্লাহ জানিয়ে দিলেন, তাদের যত বড়ই মনে করা হোক, তিনি তাদেরও রব। দ্বিতীয়টি: তাদের অনিষ্ট থেকে আশ্রয় চাইতে আদেশ করা হয়েছে। তাই তাদের নাম নিয়ে তিনি জানালেন, তাদের হাত থেকে আশ্রয় তিনিই দেন। একটি কারণ তাকায় যাদের সম্মান করা হয় তাদের দিকে, অন্যটি যাদের ভয় করা হয় তাদের দিকে।"
          },
          {
            "en": "At-Tabari reads 114:1 together with the verse that follows and gives a reason close to al-Qurtubi's first. He is King of all creation, men, jinn and the rest, he writes, and the naming informs whoever used to venerate people as the believers venerate their Lord: He is King over whomever they venerate, who lives within His dominion with His power running over him, and He is more deserving of veneration and of worship than any person others venerate. The name confronts the habit of making people too great.",
            "bn": "তাবারী ১১৪:১ পড়েন পরের আয়াতের সঙ্গে মিলিয়ে, আর যে কারণ দেন তা কুরতুবীর প্রথম কারণের কাছাকাছি। তিনি লেখেন, আল্লাহ সমস্ত সৃষ্টির অধিপতি, মানুষ, জিন আর অন্য সবার। মুমিনরা তাদের রবকে যেভাবে সম্মান করে, কেউ কেউ মানুষকে সেভাবে সম্মান করত। এই নাম নিয়ে তাদের জানিয়ে দেওয়া হলো, যাকে তারা এত বড় করে, আল্লাহ তারও অধিপতি। সে তাঁরই রাজত্বে থাকে, তাঁর ক্ষমতা তার উপর চলে। কাজেই সম্মান আর ইবাদত পাওয়ার বেশি হকদার তিনিই, মানুষের মধ্যে যাকে বড় করা হয় সে নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an, citing al-Mazhari from al-Baydawi, gives a third reason by comparing the companion surah. There He is called the Lord of the daybreak, in 113:1, because protection was sought against outward bodily hardships, which are not confined to human beings: animals suffer them too. Here He is called the Lord of mankind, because the insinuations of Shaytan are restricted to man, with the jinn added to him. Three reasons, then, from three sources; this article records them and does not rank them.",
            "bn": "মাআরিফুল কুরআন মাযহারীর সূত্রে বায়যাবী থেকে তৃতীয় একটি কারণ আনে, সঙ্গী সূরার সঙ্গে তুলনা করে। ১১৩:১ আয়াতে আল্লাহকে বলা হয়েছে প্রভাতের রব। কারণ সেখানে আশ্রয় চাওয়া হয়েছিল বাইরের শারীরিক কষ্ট থেকে, যা শুধু মানুষের হয় না, পশুপাখিও তা ভোগ করে। এখানে তাঁকে বলা হয়েছে মানুষের রব। কারণ শয়তানের প্ররোচনা মানুষের সঙ্গেই সীমাবদ্ধ, আর জিনেরা তার সঙ্গে যুক্ত। তিন উৎস থেকে তাই তিনটি কারণ এল। এই লেখা কারণগুলো তুলে রাখে, কোনোটিকে আগে-পরে সাজায় না।"
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
            "bn": "রব হলো সূরায় পরপর আসা তিনটি নামের প্রথমটি। ইবন কাসীর তিনটিকে একসঙ্গে পড়েন রবের তিনটি গুণ হিসেবে: রুবূবিয়্যাত, মুলক আর উলূহিয়্যাত, অর্থাৎ প্রভুত্ব, রাজত্ব আর ইলাহ হওয়া। তিনি লেখেন, আল্লাহ সব কিছুর রব, সব কিছুর অধিপতি, সব কিছুর ইলাহ। এ কারণেই তিনি আশ্রয়প্রার্থীকে আদেশ দিয়েছেন এই গুণের অধিকারীর কাছেই আশ্রয় চাইতে। পরের আয়াত ১১৪:২ দ্বিতীয় নামটি বহন করে, তৃতীয়টি আসে তার পরে। ওই দুই নাম নিজ নিজ আয়াতের বিষয়, এখানে সেগুলোর আলোচনা হবে না।"
          },
          {
            "en": "As-Sa'di explains what the names give whoever asks. The surah, he says, contains seeking refuge in the Lord of people, their King and their God. The servant takes refuge in Allah's lordship over all people, and in His divinity, for which He created them; and that purpose cannot be completed for them except by repelling the evil of their enemy, who wants to cut them off from it. For as-Sa'di, then, rabb is where the plea starts: He who is asked already owns whoever asks.",
            "bn": "নামগুলো প্রার্থীকে কী দেয়, সা'দী তা ব্যাখ্যা করেন। তাঁর মতে সূরাটিতে আছে মানুষের রব, মানুষের অধিপতি আর মানুষের ইলাহর কাছে আশ্রয় চাওয়া। বান্দা আশ্রয় নেয় সব মানুষের উপর আল্লাহর রুবূবিয়্যাতের কাছে। আশ্রয় নেয় তাঁর উলূহিয়্যাতের কাছেও, যার জন্যই তিনি মানুষকে সৃষ্টি করেছেন। আর শত্রুর অনিষ্ট দূর না হলে সেই উদ্দেশ্য তাদের জন্য পূর্ণ হয় না, কারণ শত্রু চায় তাদের সেখান থেকে বিচ্ছিন্ন করতে। সা'দীর কাছে তাই আবেদনের শুরু রব থেকে: যার কাছে চাওয়া হচ্ছে, প্রার্থী আগে থেকেই তাঁর মালিকানায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Without a Like",
          "bn": "যার তুলনা দেখা যায়নি"
        },
        "p": [
          {
            "en": "Al-Qurtubi, opening the surah, cites a report from 'Uqba ibn 'Amir al-Juhani (RA) through at-Tirmidhi, notes that at-Tirmidhi called it hasan sahih, and adds that Muslim narrated it too. At-Tirmidhi's wording, in the English of the page fetched, is this: \"Narrated 'Uqbah bin 'Amir Al-Juhani: that the Prophet (ﷺ) said: 'Some Ayat have been revealed to me the likes of which have not been seen: Qul A'udhu Birabbin-Nas until the end of the Surah and Qul A'udhu Birabbil-Falaq until the end of the Surah.'\" (Tirmidhi 2902). At-Tirmidhi's own grading on the page: hasan sahih.",
            "bn": "কুরতুবী সূরার শুরুতে তিরমিযীর সূত্রে উকবা ইবন আমির আল-জুহানী (রাঃ) থেকে একটি বর্ণনা আনেন। তিনি জানান, তিরমিযী একে হাসান সহীহ বলেছেন, আর মুসলিমও এটি বর্ণনা করেছেন। সংগৃহীত পৃষ্ঠায় তিরমিযীর বর্ণনা এরকম: উকবা ইবন আমির আল-জুহানী থেকে বর্ণিত, নবী ﷺ বলেছেন: \"আমার উপর এমন কিছু আয়াত নাযিল হয়েছে, যার মতো আর দেখা যায়নি: কুল আঊযু বিরাব্বিন নাস, সূরার শেষ পর্যন্ত, আর কুল আঊযু বিরাব্বিল ফালাক, সূরার শেষ পর্যন্ত।\" (তিরমিযী ২৯০২)। পৃষ্ঠায় তিরমিযীর নিজের মান নির্ণয়: হাসান সহীহ।"
          },
          {
            "en": "The report praises the two surahs together, from first verse to last; it is about the surah as a whole and not about these four words alone. Muslim's record of it, as hadith 814, was confirmed on its page, but its wording differs and only at-Tirmidhi's is quoted here. The commentaries fetched for this verse give no occasion of revelation for it; al-Qurtubi's only word on its setting is that it is like al-Falaq. So no occasion is narrated here, and nothing is said of it from memory. Nor do they cite any other narration about when the surah is recited.",
            "bn": "বর্ণনাটি দুই সূরাকে একসঙ্গে প্রশংসা করে, প্রথম আয়াত থেকে শেষ আয়াত পর্যন্ত। তাই এটি গোটা সূরার কথা, শুধু এই চারটি শব্দের নয়। মুসলিমের বর্ণনাটি, হাদীস ৮১৪, তার পৃষ্ঠায় মিলিয়ে দেখা হয়েছে। তবে সেটির শব্দ আলাদা, তাই এখানে শুধু তিরমিযীর শব্দই উদ্ধৃত হলো। এই আয়াতের জন্য সংগৃহীত তাফসীরগুলো এর কোনো শানে নুযূল বলে না। প্রেক্ষাপট নিয়ে কুরতুবীর একমাত্র কথা, সূরাটি আল-ফালাকের মতো। তাই এখানে কোনো শানে নুযূল বর্ণনা করা হলো না, স্মৃতি থেকেও কিছু বলা হলো না। সূরাটি কখন পড়া হয়, সে বিষয়ে অন্য কোনো বর্ণনাও তারা এখানে আনেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Plea, Not a Verdict",
          "bn": "আবেদন, রায় নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi's second reason speaks of refuge from the evil of people, and as-Sa'di notes that whispering comes from humans as it comes from jinn. This needs saying plainly: the verse teaches a plea addressed to Allah. It names nobody, and it licenses nothing against any living person or community. Seeking refuge from harm is not a judgement on whoever is feared, and a reader who turns these words into suspicion of a neighbour or a group has turned a request for protection into an accusation the verse never made.",
            "bn": "কুরতুবীর দ্বিতীয় কারণে মানুষের অনিষ্ট থেকে আশ্রয়ের কথা আছে। আর সা'দী লেখেন, কুমন্ত্রণা যেমন জিনের কাছ থেকে আসে, তেমনি মানুষের কাছ থেকেও আসে। কথাটা তাই সোজাসুজি বলা দরকার। আয়াতটি শেখায় আল্লাহর কাছে করা এক আবেদন। এতে কারও নাম নেই, আর কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুরই অনুমতি দেয় না। ক্ষতি থেকে আশ্রয় চাওয়া মানে যাকে ভয় করি তার বিরুদ্ধে রায় দেওয়া নয়। কেউ যদি এ শব্দগুলো দিয়ে প্রতিবেশী বা কোনো দলের প্রতি সন্দেহ জাগায়, তবে নিরাপত্তার আবেদনকে সে বানিয়ে ফেলল এমন এক অভিযোগে, যা আয়াত কখনো করেনি।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the surah as completing its companion: al-Falaq seeks refuge from the hardships of this world, an-Nas from the trials of the Hereafter, against the whisperings that cause every sin. Since that anguish is the most severe, it says, the Qur'an fittingly ends by urging Allah's protection. Ibn Kathir adds one short sentence: the protected one is the one whom Allah protects, wal-ma'sum man 'asamahu Allah. The last surah of the mushaf opens, then, not on a story but on words to say, and the first One they name is the Lord of mankind.",
            "bn": "মাআরিফুল কুরআন সূরাটিকে পড়ে তার সঙ্গী সূরার পরিপূরক হিসেবে। আল-ফালাকে আশ্রয় চাওয়া হয় দুনিয়ার কষ্ট থেকে, আন-নাসে আখিরাতের পরীক্ষা থেকে, সেই কুমন্ত্রণার বিরুদ্ধে যা সব গুনাহের মূল। মাআরিফ বলে, আখিরাতের যন্ত্রণাই সবচেয়ে কঠিন, তাই কুরআন শেষে এসে আল্লাহর আশ্রয় চাওয়ার উপর জোর দিয়েছে। ইবন কাসীর ছোট্ট একটি বাক্য যোগ করেন: সুরক্ষিত সে-ই, যাকে আল্লাহ সুরক্ষা দেন, ওয়াল মা'সূমু মান আসামাহুল্লাহ। মুসহাফের শেষ সূরা তাই শুরু হয় কোনো কাহিনি দিয়ে নয়, মুখে বলার মতো কথা দিয়ে। আর সেই কথায় প্রথম যাঁর নাম আসে, তিনি মানুষের রব।"
          }
        ]
      }
    ]
  }
});
