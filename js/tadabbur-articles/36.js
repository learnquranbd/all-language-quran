/**
 * Tadabbur long-form articles — surah 36.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "36:2": {
    "sections": [
      {
        "h": {
          "en": "The Letters, Then the Oath",
          "bn": "অক্ষর, এরপর শপথ"
        },
        "p": [
          {
            "en": "The surah opens with two letters, Ya Sin, and then with an oath. The letters belong to the muqattaʿat, the disjoined letters that begin 29 surahs, and the settled position in this project is the one the commentators keep returning to: their full meaning rests with Allah, and no reading here claims to have decoded them. Ibn Kathir points the reader back to his discussion of the letters at the start of al-Baqarah rather than fixing a single sense here. We meet the same restraint at the head of other surahs, such as the letters that open 26:1.",
            "bn": "সূরা শুরু হয় দুটি অক্ষর দিয়ে, ইয়া-সীন। তারপর আসে একটি শপথ। অক্ষর দুটি মুকাত্তাআতের অন্তর্ভুক্ত; মুকাত্তাআত হলো সেই বিচ্ছিন্ন অক্ষর, যা দিয়ে ২৯টি সূরা শুরু হয়েছে। এগুলো নিয়ে এই প্রকল্পের স্থির অবস্থান সেটাই, যেখানে তাফসীরকারেরা বারবার ফিরে আসেন: এগুলোর পূর্ণ অর্থ আল্লাহই জানেন, আর এখানকার কোনো ব্যাখ্যা এগুলোর রহস্য ভেদ করার দাবি করে না। ইবন কাসীর এখানে কোনো একটি অর্থ ঠিক করে দেন না; পাঠককে বরং বাকারা সূরার শুরুতে এই অক্ষরগুলো নিয়ে তাঁর আলোচনার দিকে ফিরিয়ে দেন। অন্য সূরার শুরুতেও একই সংযম চোখে পড়ে, যেমন ২৬:১ আয়াতের অক্ষরগুলোতে।"
          },
          {
            "en": "Ma'arif al-Qur'an records that some narrations went further with these two letters. A few called Ya Sin one of the names of Allah, a view traced to Imam Malik and to Ibn Abbas; others read it as a word meaning O man, addressed to the Prophet ﷺ, which is close to Ibn Jubayr's saying that it is a name of the Prophet ﷺ. None of this is asserted as certain, and Ma'arif itself keeps the well-known position that the letters are known in full to Allah. The weight of the verse falls on what comes next, the oath.",
            "bn": "মাআরিফুল কুরআন জানায়, কিছু বর্ণনা এই দুই অক্ষর নিয়ে আরও এগিয়ে গেছে। কেউ কেউ ইয়া-সীনকে আল্লাহর একটি নাম বলেছেন; এই মত ইমাম মালিক ও ইবন আব্বাস (রাঃ) থেকে বর্ণিত। আবার কেউ একে ‘হে মানুষ’ অর্থের শব্দ ধরেছেন, যা দিয়ে নবী ﷺ-কে ডাকা হচ্ছে। ইবন জুবায়েরের কথাও এর কাছাকাছি: তাঁর মতে এটি নবী ﷺ-এরই একটি নাম। তবে এর কোনোটিকেই নিশ্চিত বলা হয়নি। মাআরিফ নিজেও সেই প্রসিদ্ধ মতেই থাকে যে অক্ষরগুলোর পূর্ণ অর্থ কেবল আল্লাহই জানেন। আয়াতের আসল ভার পড়ে পরের অংশে, অর্থাৎ শপথের উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "An Oath By His Own Book",
          "bn": "নিজের কিতাবের নামে শপথ"
        },
        "p": [
          {
            "en": "Wa'l-Qur'āni'l-ḥakīm: by the wise Qur'an. The form is an oath, and the One swearing is Allah. This is worth pausing on, because Allah needs no oath to make His word more certain; His bare statement is already the truth. When He swears, the oath is not for His sake but for the hearer's, drawing attention to the thing sworn by and lending it weight. And the thing He chooses to swear by here is His own revealed Book, which honours the Book and tells the reader at once that something heavy is about to be affirmed.",
            "bn": "ওয়াল-কুরআনিল-হাকীম: হিকমতপূর্ণ কুরআনের শপথ। বাক্যটি শপথের, আর শপথ করছেন স্বয়ং আল্লাহ। এখানে একটু থামা দরকার। নিজের কথাকে আরও নিশ্চিত করতে আল্লাহর কোনো শপথের প্রয়োজন নেই; তিনি এমনি যা বলেন, তা-ই সত্য। তিনি যখন শপথ করেন, তা নিজের জন্য নয়, শ্রোতার জন্য। শপথ শ্রোতার মন টেনে নেয় সেই জিনিসের দিকে, যার নামে শপথ করা হলো, আর তার গুরুত্ব বাড়িয়ে দেয়। এখানে শপথের জন্য তিনি বেছে নিয়েছেন নিজের নাজিল করা কিতাবকেই। এতে কিতাবের মর্যাদা প্রকাশ পায়, আর পাঠক সঙ্গে সঙ্গে বুঝে যায়, এবার গুরুতর কোনো কথা জোর দিয়ে বলা হবে।"
          },
          {
            "en": "There is an adab, a courtesy, that sits underneath this. Allah may swear by whatever He wills of His creation or His words, for all of it is His; a human being has no such liberty. The believer may swear only by Allah, never by anything besides Him. So the oath that opens the surah is His to make and His alone, and even as it dignifies the Book, it quietly marks the distance between the Creator who swears by what He wills and the servant who may name only his Lord.",
            "bn": "এর ভেতরে একটা আদবও লুকিয়ে আছে। আল্লাহ তাঁর সৃষ্টি বা তাঁর কালামের যেকোনো কিছুর নামে শপথ করতে পারেন, কারণ সবই তাঁর। মানুষের সেই স্বাধীনতা নেই। মুমিন শপথ করতে পারে কেবল আল্লাহর নামে, অন্য কিছুর নামে কখনো নয়। তাই সূরার শুরুর এই শপথ কেবল তাঁরই করার। এই শপথ কিতাবকে সম্মান দেয়, আবার নিঃশব্দে একটা দূরত্বও চিনিয়ে দেয়: স্রষ্টা যার নামে ইচ্ছা শপথ করেন, আর বান্দা নাম নিতে পারে শুধু তার রবের।"
          }
        ]
      },
      {
        "h": {
          "en": "What Al-Ḥakīm Carries",
          "bn": "‘হাকীম’ শব্দের ভেতরে কী আছে"
        },
        "p": [
          {
            "en": "The single word al-ḥakīm, applied to the Qur'an, opens onto a range of meaning, and the commentators do not all land in the same place. Read one way it means the wise, the Book full of ḥikma; read another way it means the firmly made, al-muḥkam, perfected so that no flaw reaches it; and the root itself, ḥ-k-m, also carries judging and deciding, the sense of a word that rules between truth and falsehood. These are not rival errors to be settled; they are facets of one word, and the verse is richer for holding them together.",
            "bn": "কুরআনের বিশেষণ হিসেবে ‘হাকীম’ মাত্র একটি শব্দ, কিন্তু এর অর্থের পরিসর অনেক বড়। তাফসীরকারেরাও সবাই একই অর্থে গিয়ে থামেন না। এক অর্থে এর মানে প্রজ্ঞাময়, হিকমতে ভরা কিতাব। আরেক অর্থে মজবুত করে গড়া, আল-মুহকাম, এমন নিখুঁত যে কোনো ত্রুটি একে ছুঁতে পারে না। আবার মূল ধাতু হা-কাফ-মীমের ভেতরেই আছে বিচার ও মীমাংসার অর্থ: এমন বাণী, যা সত্য আর মিথ্যার মধ্যে ফয়সালা করে দেয়। এগুলো পরস্পরবিরোধী ভুল নয় যে মীমাংসা করে একটিকে রাখতে হবে। এগুলো একই শব্দের নানা দিক, আর সবগুলো একসঙ্গে ধরে রাখায় আয়াতটি আরও সমৃদ্ধ হয়।"
          },
          {
            "en": "Al-Qurtubi notes a point of grammar that keeps these senses close. The form faʿīl, he says, can stand in the place of the form mufʿil, so that ḥakīm in regard to Allah can bear the meaning of muḥkam, the one who makes firm, just as alīm, painful, can mean mu'lim, the one who causes pain. Said of the Qur'an, then, al-ḥakīm leans at once toward the Book that is itself wise and the Book that has been firmly made wise by its Author. The reader does not have to choose; the word was chosen because it holds both.",
            "bn": "কুরতুবী ব্যাকরণের একটি দিক দেখিয়ে দেন, যা এই অর্থগুলোকে কাছাকাছি রাখে। তিনি বলেন, ‘ফাঈল’ রূপটি ‘মুফঈল’ রূপের জায়গায় বসতে পারে। তাই আল্লাহর ক্ষেত্রে ‘হাকীম’ শব্দটি ‘মুহকাম’-এর অর্থ দিতে পারে, অর্থাৎ যিনি মজবুত করেন। ঠিক যেমন ‘আলীম’ (যন্ত্রণাদায়ক) শব্দটি ‘মুলিম’ অর্থে আসতে পারে, অর্থাৎ যে যন্ত্রণা দেয়। তাহলে কুরআনের ক্ষেত্রে ‘হাকীম’ একসঙ্গে দুই দিকে ঝোঁকে: কিতাবটি নিজেই প্রজ্ঞাময়, আবার যিনি এটি নাজিল করেছেন, তিনি একে মজবুত করে প্রজ্ঞাময় বানিয়েছেন। পাঠককে কোনো একটি বেছে নিতে হয় না। শব্দটিই বেছে নেওয়া হয়েছে এ কারণে যে এর মধ্যে দুটোই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Book Firmly Made",
          "bn": "মজবুত করে গড়া কিতাব"
        },
        "p": [
          {
            "en": "The reading that most of the fetched commentators take is al-ḥakīm as al-muḥkam, the firmly made. Ibn Kathir glosses it as the perfected Book which falsehood does not approach, neither from before it nor from behind it, wording that echoes the Qur'an's description of itself at 41:42. At-Tabari reads al-muḥkam as firmly made by what it contains of its rulings, its aḥkām, and the clear proofs of its arguments. The Muyassar gathers the same strands, saying Allah swears by the firmly made Qur'an, by the rulings, the wisdom and the proofs it carries.",
            "bn": "এখানে যেসব তাফসীর দেখা হয়েছে, তার বেশিরভাগ ‘হাকীম’-কে ‘মুহকাম’ অর্থে নেয়, অর্থাৎ মজবুত করে গড়া। ইবন কাসীরের ব্যাখ্যায় এটি সেই নিখুঁত কিতাব, যার কাছে বাতিল আসতে পারে না, সামনে থেকেও না, পেছন থেকেও না। কথাটা ৪১:৪২ আয়াতে কুরআনের নিজের সম্পর্কে দেওয়া বর্ণনারই প্রতিধ্বনি। তাবারীর মতে কিতাবটি ‘মুহকাম’, কারণ এর ভেতরের বিধান, অর্থাৎ আহকাম, আর এর যুক্তির সুস্পষ্ট প্রমাণ একে মজবুত করেছে। মুয়াসসারও একই কথাগুলো একসঙ্গে বলে: আল্লাহ শপথ করছেন সেই মজবুত কুরআনের, যাতে আছে বিধান, হিকমত আর প্রমাণ।"
          },
          {
            "en": "Al-Qurtubi presses the sense furthest. Al-ḥakīm means al-muḥkam, he writes, so firmly made that it is open to no invalidity and no contradiction, and he cites the verse where Allah says of the Book that its verses were made firm, aḥkamat āyātuhu, at 11:1. The firmness, he adds, runs through both its arrangement and its meanings, so that no flaw can enter it. A Book described this way is being set forward as something that holds together under pressure, with nothing in it that argument can break open.",
            "bn": "কুরতুবী এই অর্থকে সবচেয়ে বেশি দূর নিয়ে যান। তিনি লেখেন, ‘হাকীম’ মানে ‘মুহকাম’: এমন মজবুত করে গড়া যে এতে কোনো বাতিল বা স্ববিরোধের জায়গা নেই। প্রমাণ হিসেবে তিনি ১১:১ আয়াত উল্লেখ করেন, যেখানে আল্লাহ কিতাব সম্পর্কে বলেন, এর আয়াতগুলো মজবুত করা হয়েছে, ‘আহকামাত আয়াতুহু’। তিনি আরও বলেন, এই মজবুতি কিতাবের বিন্যাসেও আছে, অর্থেও আছে; তাই কোনো ত্রুটি এতে ঢুকতে পারে না। এই বর্ণনা কিতাবটিকে সামনে আনে এমন কিছু হিসেবে, যা চাপের মুখেও অটুট থাকে। তর্ক দিয়ে এর কোনো অংশ ভেঙে ফেলা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Wisdom That Places Each Thing",
          "bn": "প্রতিটি জিনিস আপন জায়গায়"
        },
        "p": [
          {
            "en": "As-Sa'di takes the other strand of the word and works it carefully. The Qur'an is al-ḥakīm, he says, because its very description is ḥikma, and ḥikma means putting each thing in its proper place. Allah places command and prohibition exactly where each belongs, and He places the recompense of good and of evil each in its fitting place, so that the Book's rulings, both the legal and the ones about reward and punishment, are all built on the utmost wisdom. On this reading the Book is wise not only in what it says but in where it sets each thing.",
            "bn": "সাদী শব্দটির অন্য অর্থটি ধরে যত্ন নিয়ে ব্যাখ্যা করেন। তিনি বলেন, কুরআন ‘হাকীম’, কারণ এর বৈশিষ্ট্যই হলো হিকমত, আর হিকমত মানে প্রতিটি জিনিসকে তার ঠিক জায়গায় রাখা। আল্লাহ আদেশ আর নিষেধ রাখেন ঠিক যেখানে যেটির জায়গা। ভালো কাজের প্রতিদান আর মন্দ কাজের প্রতিফলও রাখেন যার যার উপযুক্ত স্থানে। ফলে কিতাবের সব বিধান, শরীয়তের বিধান হোক বা প্রতিদান ও শাস্তির বিধান, দাঁড়িয়ে আছে পূর্ণ হিকমতের উপর। এই ব্যাখ্যায় কিতাব প্রজ্ঞাময় শুধু তার কথায় নয়, কোন জিনিস কোথায় রাখে তাতেও।"
          },
          {
            "en": "He draws out one mark of that wisdom in particular. Among the ways this Qur'an is wise, as-Sa'di writes, is that it joins the mention of a ruling to the wisdom behind it, alerting the mind to the correspondences and the qualities that make the ruling fit its case. The Book does not only command; it shows why, so the reason can be seen and weighed. A reader who notices this will stop treating the Qur'an as a list of verdicts and start reading it as something that teaches the mind to recognise why a thing is right.",
            "bn": "সেই হিকমতের একটি নিদর্শন তিনি আলাদা করে দেখান। সাদী লেখেন, এই কুরআনের হিকমতের একটি দিক হলো, এটি কোনো বিধান বলার সঙ্গে তার পেছনের হিকমতও বলে দেয়। এতে মন সজাগ হয় সেই মিল আর গুণগুলোর দিকে, যেগুলোর কারণে বিধানটি তার ক্ষেত্রের সঙ্গে খাপ খায়। কিতাব শুধু আদেশ দেয় না, কেন দেয় তাও দেখায়, যাতে কারণটা চোখে পড়ে আর ভেবে দেখা যায়। যে পাঠক এটা খেয়াল করেন, তিনি কুরআনকে আর রায়ের তালিকা মনে করেন না। তখন তিনি একে পড়েন এমন কিতাব হিসেবে, যা মনকে শেখায় কোনো কিছু কেন সঠিক, তা চিনে নিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Oath Finds Its Answer",
          "bn": "শপথ পেল তার জবাব"
        },
        "p": [
          {
            "en": "An oath in Arabic waits for its answer, the statement it was sworn to confirm, and here the answer follows at once: innaka lamina'l-mursalīn, indeed you are among the messengers, ʿalā ṣirāṭin mustaqīm, on a straight path. The Muyassar completes the sense: you, O Messenger, are of those sent with Allah's revelation to His servants, upon a straight and balanced road, and that road is Islam. So the thing the Qur'an is sworn by goes to vouch for the one who brought the Qur'an. The Book is laid down as the evidence, and the messenger is what it certifies.",
            "bn": "আরবিতে শপথ তার জবাবের অপেক্ষায় থাকে, অর্থাৎ যে কথাটা নিশ্চিত করতে শপথ করা হলো। এখানে জবাব আসে সঙ্গে সঙ্গেই: ইন্নাকা লামিনাল-মুরসালীন, তুমি অবশ্যই রাসূলদের একজন, ‘আলা সিরাতিম মুসতাকীম, সরল পথের উপর। মুয়াসসার অর্থটি পূর্ণ করে বলে: হে রাসূল, আল্লাহ তাঁর বান্দাদের কাছে ওহি দিয়ে যাদের পাঠিয়েছেন, তুমি তাদেরই একজন, আর তুমি আছ এক সরল ও ভারসাম্যপূর্ণ পথে; সেই পথ ইসলাম। অর্থাৎ যে কুরআনের নামে শপথ করা হলো, সেই কুরআনই সাক্ষ্য দিচ্ছে কুরআনের বাহকের পক্ষে। কিতাব এখানে প্রমাণ, আর সেই প্রমাণ যাঁর সত্যতার সনদ দেয়, তিনি রাসূল।"
          },
          {
            "en": "The next verse names the source. Tanzīlu'l-ʿazīzi'r-raḥīm, 36:5, a sending down from the Almighty, the Most Merciful. Ibn Kathir reads the straight path of 36:4 as an upright way, religion and law together, and the revelation of 36:5 as coming from the Lord of might who is merciful to His believing servants. Set in order, the passage moves from the Book sworn by, to the messenger confirmed, to the straight path he walks, to the Almighty and Merciful who sent it all down. The oath does not hang alone; it opens a chain that ends in the Sender.",
            "bn": "পরের আয়াত উৎসের নাম বলে দেয়: তানযীলুল-আযীযির-রাহীম, ৩৬:৫, মহাপরাক্রমশালী, পরম দয়ালুর পক্ষ থেকে নাজিল করা। ইবন কাসীর ৩৬:৪ আয়াতের সরল পথ বলতে বোঝেন সোজা পথ, দ্বীন ও শরীয়ত দুটোই। আর ৩৬:৫ আয়াতের ওহি আসে সেই পরাক্রমশালী রবের কাছ থেকে, যিনি তাঁর মুমিন বান্দাদের প্রতি দয়ালু। ক্রমটা সাজালে দাঁড়ায় এমন: প্রথমে যে কিতাবের নামে শপথ, তারপর রাসূলের সত্যতার ঘোষণা, তারপর সেই সরল পথ যাতে তিনি চলেন, শেষে সেই পরাক্রমশালী ও দয়ালু সত্তা, যিনি সবকিছু নাজিল করেছেন। শপথটি একা দাঁড়িয়ে নেই। এটি একটি ধারার শুরু, যা গিয়ে শেষ হয় প্রেরণকারীর কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sound Word On Oaths",
          "bn": "শপথ নিয়ে সহিহ কথা"
        },
        "p": [
          {
            "en": "No sound hadith is reported as revealed about this particular verse, so the honest thing is to say so and not to dress a weak report as more than it is. But the oath's quiet lesson about swearing has a sound hadith standing beside it, not tied to 36:2 yet directly on the matter. Ibn Umar reported that the Prophet ﷺ found Umar swearing by his father and called out: 'Verily Allah forbids you to swear by your fathers. If one has to take an oath, he should swear by Allah or otherwise keep quiet.' This is in Sahih al-Bukhari, number 6108, and it is sound.",
            "bn": "এই নির্দিষ্ট আয়াতটি নাজিলের প্রেক্ষাপট নিয়ে কোনো সহিহ হাদিস বর্ণিত হয়নি। তাই সৎ পথ হলো সেটা খোলাখুলি বলা, আর দুর্বল কোনো বর্ণনাকে তার চেয়ে বড় করে না দেখানো। তবে শপথ নিয়ে এই আয়াতের যে নীরব শিক্ষা, তার পাশে একটি সহিহ হাদিস আছে। হাদিসটি ৩৬:২ আয়াতের সঙ্গে বাঁধা নয়, তবে ঠিক এই বিষয়েই। ইবন উমর (রাঃ) বর্ণনা করেন, নবী ﷺ উমর (রাঃ)-কে তাঁর বাবার নামে কসম খেতে দেখে ডেকে বললেন: ‘আল্লাহ তোমাদের বাবাদের নামে কসম খেতে নিষেধ করেছেন। কাউকে কসম খেতে হলে সে যেন আল্লাহর নামে খায়, নইলে চুপ থাকে।’ হাদিসটি সহিহ বুখারিতে আছে, নম্বর ৬১০৮, এবং এটি সহিহ।"
          },
          {
            "en": "The verse and the hadith sit together cleanly. Allah swears by His own Book because every oath is His to make, while the believer is told to swear by Allah alone or to stay silent. As for the well-loved saying that Ya Sin is the heart of the Qur'an, it should be weighed honestly: at-Tirmidhi, who records it, calls it gharīb, notes that one of its narrators is unknown, and grades a supporting chain as weak. So its reward-claims are not built on here. The surah earns its weight from the oath that opens it, not from a disputed merit.",
            "bn": "আয়াত আর হাদিস একে অপরের সঙ্গে সুন্দর মিলে যায়। আল্লাহ নিজের কিতাবের নামে শপথ করেন, কারণ যেকোনো শপথ করার অধিকার তাঁরই। আর মুমিনকে বলা হয়েছে কেবল আল্লাহর নামে শপথ করতে, নইলে চুপ থাকতে। ‘ইয়া-সীন কুরআনের হৃদয়’ বলে যে কথাটি মানুষের খুব প্রিয়, সেটিও সৎভাবে যাচাই করা দরকার। তিরমিযী নিজেই এটি বর্ণনা করে একে ‘গারীব’ বলেছেন, জানিয়েছেন যে এর একজন বর্ণনাকারী অজ্ঞাত, আর এর সমর্থক একটি সনদকে দুর্বল বলেছেন। তাই এখানে এর সওয়াবের দাবির উপর কিছু দাঁড় করানো হয়নি। সূরাটি তার গুরুত্ব পায় শুরুর শপথ থেকে, বিতর্কিত কোনো ফজিলত থেকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under An Oath",
          "bn": "শপথের ছায়ায় জীবন"
        },
        "p": [
          {
            "en": "It is worth sitting with what it means that Allah swore by this Book. An oath points to the worth of the thing sworn by, and here the Sworn-by is the very revelation in the reader's hands. If the Almighty set His oath on it, the least a servant can do is stop treating it as background furniture, kept on a shelf and rarely opened, and start treating it as the weighty evidence it was offered as. The Book that vouches for the Prophet ﷺ is the same Book we are slow to consult when a doubt arises.",
            "bn": "আল্লাহ এই কিতাবের নামে শপথ করেছেন। এর মানে কী, তা নিয়ে একটু ভাবা দরকার। যার নামে শপথ করা হয়, শপথ তার মূল্যের দিকে ইশারা করে। আর এখানে যার নামে শপথ, তা পাঠকের হাতে থাকা এই ওহিই। মহাপরাক্রমশালী নিজে যার উপর শপথ রেখেছেন, বান্দার অন্তত এটুকু করা উচিত: একে আর ঘরের আসবাবের মতো তাকে তুলে রাখবে না, যা কালেভদ্রে খোলা হয়। বরং একে ধরবে সেই ভারী দলিল হিসেবে, যেভাবে একে দেওয়া হয়েছে। যে কিতাব নবী ﷺ-এর পক্ষে সাক্ষ্য দেয়, মনে সন্দেহ জাগলে সেই কিতাবের কাছে যেতেই আমাদের দেরি হয়।"
          },
          {
            "en": "There is also a steadiness to carry away. A Book described as firmly made, with no contradiction able to enter it, invites a particular patience: when a verse seems to clash with another, the fault to suspect first is in my reading, my haste, my half-knowledge, not in the Book that Allah called muḥkam. And a Book described as wise, placing each thing in its right spot, asks to be read for its reasons and not only its rulings. To live under this oath is to hold the Qur'an as both unbreakable and deeply reasoned, and to open it as if its Author meant every word.",
            "bn": "এখান থেকে একটা স্থিরতাও সঙ্গে নেওয়ার আছে। যে কিতাবকে মজবুত করে গড়া বলা হয়েছে, যাতে কোনো স্ববিরোধ ঢুকতে পারে না, তা এক বিশেষ ধৈর্য চায়। কোনো আয়াত যদি আরেকটির সঙ্গে সাংঘর্ষিক মনে হয়, প্রথমে সন্দেহ করতে হবে নিজেকে: আমার বোঝায় ভুল, আমার তাড়াহুড়া, আমার আধাআধি জ্ঞান। আল্লাহ যাকে ‘মুহকাম’ বলেছেন, সেই কিতাবকে নয়। আবার যে কিতাবকে প্রজ্ঞাময় বলা হয়েছে, যা প্রতিটি জিনিস ঠিক জায়গায় রাখে, তা চায় পাঠক শুধু বিধান নয়, বিধানের কারণও খুঁজে পড়ুক। এই শপথের ছায়ায় বাঁচা মানে কুরআনকে একই সঙ্গে অটুট আর গভীর যুক্তিতে গাঁথা বলে মানা, আর একে এমনভাবে খোলা, যেন যিনি এটি নাজিল করেছেন, তিনি এর প্রতিটি শব্দ পূর্ণ উদ্দেশ্য নিয়েই বলেছেন।"
          }
        ]
      }
    ]
  },
  "36:11-12": {
    "sections": [
      {
        "h": {
          "en": "Who the Warning Reaches",
          "bn": "সতর্কবাণী কার কাছে পৌঁছায়"
        },
        "p": [
          {
            "en": "The surah's opening has just described hearts that cannot take a warning: necks shackled so the head stays raised, a barrier set before them and behind. By 36:10 the verdict is blunt — whether you warn them or not makes no difference, they will not believe. Then 36:11 turns the camera. Ma'arif al-Qur'an frames the refusal as the ripening of a free choice: God laid two roads before people, and once a person settles into denial, the things that feed that denial never run short. The warner was never speaking to stone by mistake.",
            "bn": "সূরার শুরুতেই এমন অন্তরের কথা এসেছে, যা সতর্কবাণী নিতে পারে না। গলায় বেড়ি, তাই মাথা উঁচু হয়ে আটকে থাকে; সামনে-পেছনে দেয়াল তোলা। ৩৬:১০ আয়াতে রায়টা সাফ: আপনি তাদের সতর্ক করুন বা না করুন, কিছু যায় আসে না, তারা ঈমান আনবে না। এরপর ৩৬:১১ আয়াত দৃষ্টি ফেরায় অন্য দিকে। মাআরিফুল কুরআনের মতে এই অস্বীকার মানুষের স্বাধীন বাছাইয়েরই পরিণতি। আল্লাহ মানুষের সামনে দুটি পথ রেখেছেন। কেউ একবার অস্বীকারে থিতু হয়ে গেলে সেই অস্বীকারের রসদ আর ফুরায় না। সতর্ককারী তো ভুল করে পাথরকে শোনাচ্ছিলেন না।"
          },
          {
            "en": "The word that opens 36:11 is innamā — 'only,' a word of restriction. As-Sa'di is careful about what it restricts. It does not shrink the Prophet's duty, for 36:6 sent him to warn a whole heedless people. It restricts where the benefit lands: his warning profits, and takes heed from his counsel, only whoever follows the Reminder. The task of warning stays as wide as all mankind; what the verse pins down is the soil in which it finally takes. The disappointment of the sealed hearts is answered not by shrinking the work but by naming its harvest.",
            "bn": "৩৬:১১ আয়াত শুরু হয় ‘ইন্নামা’ দিয়ে। এর অর্থ ‘কেবল’; এটি সীমা টানার শব্দ। সা'দী সতর্কভাবে দেখান, শব্দটি কী সীমিত করছে। এটি নবী ﷺ-এর দায়িত্ব ছোট করে না, কারণ ৩৬:৬ আয়াতে তাঁকে পাঠানো হয়েছে গোটা এক উদাসীন জাতিকে সতর্ক করতে। এটি সীমিত করে শুধু ফল কোথায় ধরবে, সেটুকু। তাঁর সতর্কবাণীতে উপকার পায়, তাঁর নসিহত গ্রহণ করে কেবল সে, যে উপদেশ মেনে চলে। সতর্ক করার কাজ গোটা মানবজাতি পর্যন্ত বিস্তৃতই থাকে; আয়াত শুধু চিনিয়ে দেয় কোন মাটিতে তা শেষ পর্যন্ত শিকড় গাড়ে। যেসব অন্তরে সিল পড়ে গেছে, তাদের নিয়ে হতাশার জবাব আসে কাজ ছোট করে নয়, বরং কাজের ফসল কোথায়, তা বলে দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Marks of the Receptive",
          "bn": "গ্রহণকারী অন্তরের দুই চিহ্ন"
        },
        "p": [
          {
            "en": "As-Sa'di describes this receptive group by two marks. The first is a sound aim: whoever's purpose is to follow the truth and heed what he is reminded of. The second is awe: and he fears the Most Merciful unseen. 'Whoever is marked by these two,' as-Sa'di writes, 'a good intention in seeking the truth and fear of God Most High — these are the ones who profit from your message and are purified by your teaching.' Ibn Kathir's abridgement reads the Reminder plainly as the Qur'an, benefiting the believer who walks by it.",
            "bn": "সা'দী এই গ্রহণকারী দলকে চেনান দুই চিহ্নে। প্রথমটি সৎ উদ্দেশ্য: যার লক্ষ্য হক মেনে চলা আর যে উপদেশ দেওয়া হয় তা গ্রহণ করা। দ্বিতীয়টি ভয়: আর সে না দেখেও দয়াময়কে ভয় করে। সা'দী লেখেন, যার মধ্যে এই দুই গুণ আছে, হক খোঁজার সৎ নিয়ত আর আল্লাহর ভয়, তারাই আপনার বার্তা থেকে উপকার পায় আর আপনার শেখানোয় পরিশুদ্ধ হয়। ইবন কাসীর সংক্ষিপ্ত তাফসীরে ‘উপদেশ’ বলতে সোজা কুরআনকেই বোঝেন, যা কাজে লাগে সেই মুমিনের যে এর পথে চলে।"
          },
          {
            "en": "Notice the order. Following comes first — ittabaʿa, a verb of action, not merely of hearing. The Reminder has already reached the heedless as well; what sets this listener apart is that he moves with it. Then the inward state is joined to the outward act, awe bound to obedience, as a single pair. A person can keep the form and lose the fear, or claim the fear and never change a step. The verse refuses to split them. The ground that takes the seed is both soft and watered, turned over and ready.",
            "bn": "খেয়াল করুন ক্রমটা। আগে আসে মেনে চলা, ‘ইত্তাবাআ’, যা কাজের ক্রিয়া, নিছক শোনার নয়। উপদেশ তো উদাসীনদের কাছেও পৌঁছে গেছে; এই শ্রোতা আলাদা এ কারণে যে উপদেশ শুনে সে চলতে শুরু করে। তারপর ভেতরের অবস্থা বাইরের কাজের সঙ্গে জোড়া লাগে, ভয় বাঁধা পড়ে আনুগত্যের সঙ্গে, একসুতোয়। মানুষ বাইরের আমলটুকু ধরে রেখে ভেতরের ভয় হারিয়ে ফেলতে পারে, কিংবা ভয়ের দাবি করেও এক পা না নড়তে পারে। আয়াত তাদের আলাদা হতে দেয় না। যে মাটি বীজ নেয় তা নরমও, ভেজাও, কর্ষিত আর প্রস্তুত।"
          }
        ]
      },
      {
        "h": {
          "en": "Awe With No Witness",
          "bn": "সাক্ষীহীন ভয়"
        },
        "p": [
          {
            "en": "bi'l-ghayb — 'unseen.' Ibn Kathir explains it as fearing the Most Merciful even when no one sees him but Allah: he knows that Allah watches him and sees what he does. This is faith's private exam — conduct behind a shut door, when nothing of reputation is at stake and the only witness is the One being feared. The Qur'an sets the same two words side by side in 67:12: those who fear their Lord unseen, for them is forgiveness and a great reward. Ibn Kathir places that verse beside this one.",
            "bn": "‘বিল-গায়ব’, অর্থাৎ না দেখে। ইবন কাসীর বলেন, এর মানে দয়াময়কে ভয় করা তখনও, যখন আল্লাহ ছাড়া কেউ তাকে দেখে না; সে জানে আল্লাহ তাকে দেখছেন আর তার কাজ লক্ষ করছেন। এটাই ঈমানের গোপন পরীক্ষা: বন্ধ দরজার পেছনে মানুষ কেমন চলে, যেখানে লোকে কী বলবে তার কোনো ভয় নেই, আর একমাত্র সাক্ষী তিনিই, যাঁকে ভয় করা হচ্ছে। কুরআন একই দুই শব্দ পাশাপাশি রাখে ৬৭:১২ আয়াতে: যারা না দেখে তাদের রবকে ভয় করে, তাদের জন্য ক্ষমা আর বিরাট পুরস্কার। ইবন কাসীর সেই আয়াতকে এই আয়াতের পাশে রাখেন।"
          },
          {
            "en": "There is a quiet mercy in the name chosen here: ar-Rahmān, the Most Merciful. The Lord feared in secret is not a distant tyrant but the wellspring of all mercy; the awe and the hope rest on the very same Lord. To fear ar-Rahmān is to take with full seriousness the Lord most ready to forgive. That is why the clause can swing so fast from warning to good news without any strain. The heart that fears Him where no eye falls is precisely the heart He is reaching to reassure.",
            "bn": "এখানে বেছে নেওয়া নামটির মধ্যেই আছে নীরব এক রহমত: আর-রহমান, পরম দয়াময়। গোপনে যাঁকে ভয় করা হয়, তিনি দূরের কোনো জালিম শাসক নন; তিনি সব রহমতের উৎস। ভয় আর আশা, দুটোই একই রবের উপর ভর করে। আর-রহমানকে ভয় করা মানে সেই রবকে পূর্ণ গুরুত্ব দেওয়া, যিনি ক্ষমা করতে সবচেয়ে বেশি প্রস্তুত। তাই বাক্যটি কোনো টানাপোড়েন ছাড়াই এত দ্রুত সতর্কবাণী থেকে সুসংবাদে চলে যেতে পারে। যে অন্তর কারও চোখের আড়ালেও তাঁকে ভয় করে, ঠিক সেই অন্তরকেই তিনি আশ্বাস দিতে এগিয়ে আসেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Warning Turns to Good News",
          "bn": "সতর্কতা বদলে যায় সুসংবাদে"
        },
        "p": [
          {
            "en": "fabashshirhu — 'so give him glad tidings.' In one breath the verb of warning becomes the verb of good news, bishāra. As-Sa'di ties each gift to its root: forgiveness for his sins, and a noble reward for his righteous deeds and sincere intention. The receptive heart is not merely spared; it is promised two things, one that wipes the past clean and one that crowns what is to come. Warning and glad tidings turn out not to be opposite jobs but the two ends of a single message.",
            "bn": "‘ফাবাশশিরহু’, অর্থাৎ তাকে সুসংবাদ দাও। এক নিঃশ্বাসেই সতর্ক করার ক্রিয়া বদলে যায় সুসংবাদের ক্রিয়ায়, বিশারায়। সা'দী দেখান, প্রতিটি দান কিসের বিনিময়ে: গুনাহের জন্য মাগফিরাত, আর নেক আমল ও খাঁটি নিয়তের জন্য সম্মানজনক পুরস্কার। গ্রহণকারী অন্তর কেবল রেহাই পায় না; তাকে দুটি জিনিসের ওয়াদা দেওয়া হয়। একটি অতীতকে মুছে পরিষ্কার করে দেয়, আরেকটি সামনের জীবনকে পূর্ণতা দেয়। বোঝা যায়, সতর্কবাণী আর সুসংবাদ পরস্পরবিরোধী দুই কাজ নয়; একই বার্তার দুই প্রান্ত।"
          },
          {
            "en": "The reward is called karīm — noble, generous. Ibn Kathir reads it as a reward vast and great and beautiful. Karīm carries open-handedness, the giving of a Giver who gives before being asked and more than is deserved. So the verse holds out no bare wage; it promises a gift that bears the character of its Giver. For a warner worn down by refusal, and for a believer who obeys where no applause waits, this is the turn that recasts the whole labour: the ground that receives the word receives its harvest too.",
            "bn": "পুরস্কারকে বলা হয়েছে ‘কারীম’, অর্থাৎ সম্মানজনক ও উদার। ইবন কাসীরের ব্যাখ্যায় এ পুরস্কার বিশাল, মহৎ ও সুন্দর। ‘কারীম’ শব্দে আছে দরাজ হাতের ছোঁয়া: এমন দাতার দান, যিনি চাওয়ার আগেই দেন, প্রাপ্যের চেয়েও বেশি দেন। তাই আয়াত শুধু শুকনো মজুরির কথা বলে না; এমন দানের ওয়াদা দেয়, যাতে দাতার স্বভাবই ফুটে ওঠে। অস্বীকার শুনতে শুনতে ক্লান্ত সতর্ককারীর জন্য, আর যে মুমিন কোনো বাহবার আশা ছাড়াই আনুগত্য করে, তার জন্য এই মোড় গোটা পরিশ্রমকে নতুন চোখে দেখায়: যে মাটি বাণী গ্রহণ করে, ফসলও সে-ই পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Caller's Failure",
          "bn": "দাঈর ব্যর্থতা নয়"
        },
        "p": [
          {
            "en": "Read together, the sealed hearts of 36:10 and the receptive heart of 36:11 hold a mercy for anyone who calls to good and meets a wall. Later in this same surah the messengers state their own brief: our duty is only the clear delivery of the message, 36:17. The opening and shutting of hearts was never placed in their hands. When the word slides off like rain on rock, 36:11 tells the caller plainly where it was always meant to soak in. Being refused is not the evidence that he has failed.",
            "bn": "৩৬:১০ আয়াতের সিল-পড়া অন্তর আর ৩৬:১১ আয়াতের গ্রহণকারী অন্তর একসঙ্গে পড়লে একটা রহমত পাওয়া যায়। সেটা তাদের জন্য, যারা মানুষকে ভালোর দিকে ডাকে আর দেয়ালে গিয়ে ধাক্কা খায়। এই সূরাতেই পরে রাসূলগণ নিজেদের দায়িত্বের কথা বলেন: আমাদের কাজ কেবল স্পষ্টভাবে বার্তা পৌঁছে দেওয়া, ৩৬:১৭। অন্তর খোলা বা বন্ধ করার ভার কখনো তাঁদের হাতে দেওয়া হয়নি। পাথরে পড়া বৃষ্টির মতো কথা যখন গড়িয়ে চলে যায়, ৩৬:১১ আয়াত দাঈকে সাফ জানিয়ে দেয়, এই কথা শুরু থেকেই কোন মাটিতে গিয়ে ভিজবে বলে ঠিক ছিল। প্রত্যাখ্যাত হওয়া প্রমাণ করে না যে তিনি ব্যর্থ।"
          },
          {
            "en": "This guards against two errors at once. It keeps the caller from despair, since the verse has already promised that some soil will take the seed and he is not answerable for the rock. It also keeps him from pride, because the softness belongs to the heart that God made soft, not to the caller's own eloquence. His share is faithful delivery and his own secret awe of ar-Rahmān; the yield is written elsewhere, by a hand that is not his. A parent, a teacher, a friend who keeps reminding can lay this burden down.",
            "bn": "এতে একসঙ্গে দুটি ভুল থেকে রক্ষা মেলে। প্রথমত, দাঈ হতাশ হন না, কারণ আয়াত আগেই ওয়াদা দিয়েছে, কোনো না কোনো মাটি বীজ নেবেই; আর পাথরের জন্য তাঁকে জবাবদিহি করতে হবে না। দ্বিতীয়ত, তিনি অহংকার থেকেও বাঁচেন, কারণ অন্তর নরম হয়েছে আল্লাহ নরম করেছেন বলে, দাঈর নিজের বাগ্মিতার জোরে নয়। তাঁর ভাগে আছে বিশ্বস্তভাবে পৌঁছে দেওয়া আর গোপনে আর-রহমানকে ভয় করা। ফসল কী হবে, তা লেখা হয় অন্যখানে, অন্য হাতে। যে বাবা-মা, শিক্ষক বা বন্ধু বারবার মনে করিয়ে দিয়ে যান, তিনি এই বোঝা নামিয়ে রাখতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What We Send Ahead",
          "bn": "যা আমরা আগে পাঠাই"
        },
        "p": [
          {
            "en": "36:12 opens a fresh scene: Indeed We give life to the dead. As-Sa'di reads it of the resurrection — We raise them after their death to recompense them for their deeds — and al-Qurtubi calls this the clearer sense, while noting that some also read it of reviving a dead heart through faith. The promise of reward made to the believer now shows the court where the account is settled. Giving life to the dead is set as the frame around everything the verse is about to say concerning the record.",
            "bn": "৩৬:১২ আয়াত নতুন এক দৃশ্য খোলে: নিশ্চয়ই আমিই মৃতকে জীবিত করি। সা'দী একে পুনরুত্থানের কথা হিসেবে পড়েন: মৃত্যুর পর আমি তাদের আবার ওঠাব, তাদের আমলের প্রতিদান দিতে। কুরতুবীর মতে এটাই বেশি স্পষ্ট অর্থ, তবে তিনি জানান, কেউ কেউ একে ঈমানের মাধ্যমে মৃত অন্তরকে জীবিত করার অর্থেও নেন। মুমিনকে পুরস্কারের যে ওয়াদা দেওয়া হলো, এবার দেখা যায় সেই আদালত, যেখানে হিসাব চুকানো হবে। আমলনামা নিয়ে আয়াত এরপর যা বলবে, মৃতকে জীবিত করার কথাটি তার চারপাশে কাঠামো হয়ে আছে।"
          },
          {
            "en": "Then: and We write what they sent ahead — mā qaddamū, their deeds. Ma'arif al-Qur'an lingers on that verb, sent ahead. The good or bad done in this world has not simply slipped behind us and vanished. It was their baggage, Ma'arif says, which has gone on ahead of them to the destination they must reach. Writing it down, Ma'arif adds, is for safe-keeping, so that no error, forgetting, increase or decrease can touch it. What feels spent and finished is in truth shipped forward, waiting at the far end.",
            "bn": "তারপর: আর আমি লিখে রাখি যা তারা আগে পাঠিয়েছে, ‘মা কাদ্দামু’, অর্থাৎ তাদের আমল। মাআরিফুল কুরআন ‘আগে পাঠানো’ ক্রিয়াটির উপর একটু থামে। দুনিয়ায় করা ভালো-মন্দ শুধু পেছনে পড়ে থেকে মিলিয়ে যায়নি। মাআরিফ বলে, ওগুলো ছিল তাদের মালপত্র, যা তাদের আগেই রওনা হয়ে গেছে সেই গন্তব্যে, যেখানে তাদের পৌঁছাতেই হবে। মাআরিফ আরও বলে, লিখে রাখা হয় হেফাজতের জন্য, যাতে কোনো ভুল, ভুলে যাওয়া, বাড়ানো বা কমানো তাকে ছুঁতে না পারে। যা খরচ হয়ে শেষ হয়ে গেছে মনে হয়, তা আসলে আগেভাগে পাঠানো হয়েছে; ওপারে অপেক্ষা করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Footprints That Keep Writing",
          "bn": "পদচিহ্ন, যার লেখা থামে না"
        },
        "p": [
          {
            "en": "Then the verse adds a second column: wa āthārahum — and their traces. The commentators open the word to two ranges. As-Sa'di takes it broadly: the traces of good and evil a person was the cause of setting in motion, in his life and after his death — knowledge he taught, a book he wrote, a masjid he built, a charity others copy, and, in the same way, every harm he let loose. Al-Qurtubi gives the matching list: learning, an endowment, a bridge, a mosque, against an unjust levy or a corrupting fashion.",
            "bn": "এরপর আয়াত হিসাবের খাতায় আরেকটি ঘর যোগ করে: ‘ওয়া আসারাহুম’, আর তাদের রেখে যাওয়া চিহ্ন। তাফসীরকারেরা শব্দটির দুই রকম পরিসর দেখান। সা'দী একে ব্যাপক অর্থে নেন: ভালো আর মন্দের সেই সব চিহ্ন, যা চালু হওয়ার পেছনে মানুষটি নিজেই কারণ ছিল, তার জীবদ্দশায় এবং মৃত্যুর পরেও। যেমন যে ইলম সে শিখিয়েছে, যে কিতাব লিখেছে, যে মসজিদ বানিয়েছে, যে দান দেখে অন্যরাও দান করে; আর একইভাবে, যত ক্ষতি সে ছড়িয়ে দিয়ে গেছে। কুরতুবীও একই ধরনের তালিকা দেন: ইলম, ওয়াকফ, সেতু, মসজিদ; আর উল্টো দিকে অন্যায় কর বা মানুষকে নষ্ট করে এমন কোনো রীতি।"
          },
          {
            "en": "The second range is literal footsteps. Al-Qurtubi reports that Ibn Abbas, Umar and Sa'id ibn Jubayr read the traces as steps to the mosques, and an-Nahhas judged this the best that has been said, because the verse came down about it: the Ansar's homes lay far from the mosque. Tirmidhi records from Abu Sa'id al-Khudri that Banu Salama wished to move nearer and the verse was revealed; Tirmidhi graded that report hasan gharib, sound but singular in its chain. The two readings do not quarrel; Ibn Kathir folds the footsteps into the wider traces.",
            "bn": "দ্বিতীয় পরিসরটি আক্ষরিক অর্থে পায়ের ছাপ। কুরতুবী জানান, ইবন আব্বাস, উমর ও সাঈদ ইবন জুবায়ের এই চিহ্ন বলতে বুঝেছেন মসজিদের দিকে হেঁটে যাওয়ার পদক্ষেপ। নাহহাস একে এ বিষয়ে বলা সবচেয়ে ভালো কথা বলেছেন, কারণ আয়াতটি এ নিয়েই নাজিল হয়েছিল: আনসারদের ঘরবাড়ি ছিল মসজিদ থেকে দূরে। তিরমিযী আবু সাঈদ খুদরী (রাঃ) থেকে বর্ণনা করেন, বনু সালিমা মসজিদের কাছে সরে আসতে চেয়েছিল, তখন আয়াতটি নাজিল হয়। তিরমিযী বর্ণনাটিকে ‘হাসান গারীব’ বলেছেন, অর্থাৎ গ্রহণযোগ্য, তবে সনদে একক। দুই ব্যাখ্যার মধ্যে কোনো বিরোধ নেই; ইবন কাসীর পায়ের ছাপকে বৃহত্তর চিহ্নের ভেতরেই ধরে নেন।"
          },
          {
            "en": "The incident stands firmly recorded in Sahih Muslim, from Jabir ibn Abdullah (may Allah be pleased with him): There were some plots lying vacant around the mosque. Banu Salama decided to shift and come nearer to the mosque. When this reached the Messenger of Allah ﷺ he said to them: O Banu Salama, live in your houses, for your steps are recorded; live in your houses, for your steps are recorded. It is sound by its place in Muslim's collection. Every walk toward good, the Prophet ﷺ taught, is itself being written down.",
            "bn": "ঘটনাটি সহীহ মুসলিমে নির্ভরযোগ্যভাবে বর্ণিত আছে, জাবির ইবন আবদুল্লাহ (রাঃ) থেকে: মসজিদের চারপাশে কিছু জমি খালি পড়ে ছিল। বনু সালিমা ঠিক করল, তারা মসজিদের কাছে চলে আসবে। এ খবর রাসূলুল্লাহ ﷺ-এর কাছে পৌঁছলে তিনি তাদের বললেন: হে বনু সালিমা, তোমরা নিজেদের বাড়িতেই থাকো, তোমাদের পদক্ষেপ লেখা হচ্ছে; নিজেদের বাড়িতেই থাকো, তোমাদের পদক্ষেপ লেখা হচ্ছে। মুসলিমের সংকলনে স্থান পাওয়াই এর সহীহ হওয়ার প্রমাণ। নবী ﷺ শিখিয়েছেন, ভালোর দিকে প্রতিটি হাঁটাও লেখা হয়ে যাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Still Being Counted",
          "bn": "যা এখনো গোনা হচ্ছে"
        },
        "p": [
          {
            "en": "The same truth drives the Prophet's best-known teaching on what outlives us. Ibn Kathir cites it here from Sahih Muslim, on the authority of Abu Hurayra (may Allah be pleased with him): When a man dies, his deeds come to an end except three — a continuing charity, or knowledge from which people benefit, or a righteous child who prays for him. These are the traces in person: a sadaqa still flowing, a lesson still taught, a child still at prayer. The ledger stays open long after the hand that opened it has gone still.",
            "bn": "আমাদের মৃত্যুর পরেও কী টিকে থাকে, এ নিয়ে নবী ﷺ-এর সবচেয়ে পরিচিত শিক্ষার পেছনেও এই একই সত্য। ইবন কাসীর এখানে সহীহ মুসলিম থেকে আবু হুরায়রা (রাঃ)-এর সূত্রে হাদিসটি উদ্ধৃত করেন: মানুষ মারা গেলে তার আমল বন্ধ হয়ে যায়, তিনটি ছাড়া: চলমান সদকা, অথবা এমন ইলম যা থেকে মানুষ উপকার পায়, অথবা নেক সন্তান, যে তার জন্য দোয়া করে। এগুলোই সেই চিহ্নের জীবন্ত রূপ: সদকা এখনো বয়ে চলছে, শেখানো পাঠ এখনো পড়ানো হচ্ছে, সন্তান এখনো তার জন্য দোয়া করে চলেছে। যে হাত খাতাটি খুলেছিল, তা থেমে যাওয়ার অনেক পরেও খাতা খোলাই থাকে।"
          },
          {
            "en": "Ibn Kathir also brings from Muslim, on the authority of Jarir ibn Abdullah (may Allah be pleased with him), the warning's mirror image: whoever sets a good precedent in Islam has its reward and the reward of all who act on it after him, and whoever sets a bad precedent bears its burden and theirs — and in Ibn Abi Hatim's fuller wording the Prophet ﷺ then recited this very verse. So the traces run in both directions. The question the verse leaves is not whether we leave a trail behind, but what that trail will teach whoever walks it after us.",
            "bn": "ইবন কাসীর মুসলিম থেকে জারীর ইবন আবদুল্লাহ (রাঃ)-এর সূত্রে আনেন সেই সতর্কতার উল্টো ছবিও: যে ইসলামে কোনো ভালো রীতি চালু করে, তার জন্য তার সওয়াব আর তার পরে যারা তা পালন করে সবার সওয়াব; আর যে মন্দ রীতি চালু করে, তার উপর তার বোঝা আর তাদেরও বোঝা। ইবন আবি হাতিমের পূর্ণতর বর্ণনায় নবী ﷺ এরপর এই আয়াতটিই তিলাওয়াত করেন। তাই চিহ্ন দুই দিকেই চলে। আয়াতের রেখে যাওয়া প্রশ্নটা তাই এ নয় যে আমরা পেছনে কোনো পথের দাগ রেখে যাব কি না। প্রশ্ন হলো, আমাদের পরে যে সেই পথে হাঁটবে, সেই দাগ তাকে কী শেখাবে।"
          },
          {
            "en": "The verse closes by sealing everything: and all things We have enumerated in a clear register — imām mubīn. The commentators spread the phrase across a range. Mujahid, Qatada, as-Sa'di and al-Baghawi take the imām mubīn as al-Lawh al-Mahfuz, the Preserved Tablet — the mother of books, to which the records in the angels' hands return. Al-Qurtubi notes that another group read it as the pages of a person's own deeds. Either way, nothing is mislaid. The deed, its far-off echo, even the steps between a house and the prayer — all are held in a record that never drops a line.",
            "bn": "আয়াত শেষ হয় সবকিছুর উপর সিলমোহর দিয়ে: আর সবকিছু আমি গুনে রেখেছি এক স্পষ্ট কিতাবে, ‘ইমাম মুবীন’। কথাটির ব্যাখ্যায় তাফসীরকারদের মত একাধিক। মুজাহিদ, কাতাদা, সা'দী ও বাগাভী ‘ইমাম মুবীন’ বলতে বোঝেন লাওহে মাহফুজ, সংরক্ষিত ফলক। এটি উম্মুল কিতাব, ফেরেশতাদের হাতে থাকা সব লিপি যার কাছে গিয়ে মেলে। কুরতুবী জানান, আরেক দল একে মানুষের নিজের আমলনামা বলে বুঝেছেন। যে অর্থেই নিই, কিছুই হারায় না। আমল, তার বহুদূরের প্রতিধ্বনি, এমনকি ঘর থেকে নামাজ পর্যন্ত প্রতিটি পদক্ষেপ, সবই এমন এক খাতায় ধরা আছে, যা একটি লাইনও বাদ দেয় না।"
          }
        ]
      }
    ]
  },
  "36:23": {
    "sections": [
      {
        "h": {
          "en": "The Question He Asks Aloud",
          "bn": "যে প্রশ্ন সে জোরে করে"
        },
        "p": [
          {
            "en": "The verse opens with a question the man puts to himself out loud: a-attakhidhu min dunihi alihatan, shall I take gods besides Him? Ibn Kathir calls this a rhetorical question meant to deny and to rebuke, not a request for information. Al-Baghawi reads it the same way: the shape is a question, the meaning is refusal, I will not take gods besides Him. The man already knows his answer. He frames it as a question so that his people have to reach that answer alongside him, rather than hear it handed to them.",
            "bn": "আয়াতটি শুরু হয় এমন এক প্রশ্ন দিয়ে, যা লোকটি নিজেকেই জোরে জোরে করছে: আআত্তাখিযু মিন দূনিহী আলিহাতান, আমি কি তাঁকে ছেড়ে অন্য সব ইলাহ ধরব? ইবন কাসীর বলেন, এটি অস্বীকার আর ভর্ৎসনার জন্য আনা প্রশ্ন, জানতে চাওয়া নয়। বাগাভীও একইভাবে পড়েন: আকারে প্রশ্ন, অর্থে প্রত্যাখ্যান, অর্থাৎ আমি তাঁকে ছেড়ে অন্য ইলাহ ধরব না। লোকটি তার উত্তর আগেই জানে। সে প্রশ্নের রূপে কথাটা রাখে, যাতে তার জাতির লোকেরা উত্তরটা তার সঙ্গে নিজেরাই খুঁজে পায়, মুখে তুলে দেওয়া উত্তর শুনে নয়।"
          },
          {
            "en": "There is a method in this. He does not merely announce that idols are false; he walks his people through why, step by step, inviting them to see it for themselves. A claim asserted can be waved away. A question honestly posed has to be answered, and the answer condemns the idols from the questioner's own mouth. So the first thing to learn from this believer is not only what he believed, but how he called others to it: by reasoning, in the open, in front of a crowd that had just made its threats.",
            "bn": "এর ভেতরে একটা পদ্ধতি আছে। সে কেবল ঘোষণা দেয় না যে মূর্তিগুলো মিথ্যা; বরং ধাপে ধাপে কেন মিথ্যা তা সে জাতিকে দেখিয়ে দেয়, যাতে তারা নিজেরাই বিষয়টা বুঝে নেয়। শুধু দাবি করলে তা উড়িয়ে দেওয়া যায়। কিন্তু সৎভাবে রাখা প্রশ্নের জবাব দিতেই হয়, আর সেই জবাব প্রশ্নকারীর নিজের মুখেই মূর্তিগুলোকে দোষী সাব্যস্ত করে। তাই এই মুমিনের কাছ থেকে প্রথম শেখার বিষয় কেবল সে কী বিশ্বাস করত তা নয়, বরং সে কীভাবে অন্যদের সেদিকে ডেকেছিল: যুক্তি দিয়ে, খোলাখুলি, সদ্য হুমকি দেওয়া এক ভিড়ের সামনে দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Man from the Edge",
          "bn": "প্রান্ত থেকে আসা মানুষ"
        },
        "p": [
          {
            "en": "To hear the question rightly, remember who asks it. Three verses earlier, in 36:20, a man comes running from the farthest part of the city, calling his people to follow the messengers. Ma'arif al-Qur'an notes that the Qur'an here names the place al-madinah, a word used for a large city rather than a mere village, which fits the reports that this was a great town. The man runs in from its outskirts, straight into the danger, for no reason but to speak the truth he has found.",
            "bn": "প্রশ্নটা ঠিকভাবে বুঝতে হলে মনে রাখুন, প্রশ্নটা কে করছে। তিন আয়াত আগে, ৩৬:২০ আয়াতে, নগরের সবচেয়ে দূরের প্রান্ত থেকে এক লোক ছুটে আসে, আর তার জাতিকে রাসূলদের অনুসরণ করতে ডাকে। মাআরিফুল কুরআন বলে, কুরআন এখানে জায়গাটিকে ‘আল-মাদীনা’ বলেছে। শব্দটি ছোট গ্রাম নয়, বড় শহর বোঝায়। এটা সেই বর্ণনাগুলোর সঙ্গে মেলে, যেগুলোতে একে বড় শহর বলা হয়েছে। লোকটি শহরের কিনারা থেকে সোজা বিপদের মুখে ছুটে আসে, শুধু এই জন্য যে, যে সত্য সে পেয়েছে, তা বলবে।"
          },
          {
            "en": "As to who he was, the commentators pass on historical reports rather than anything the verse itself states. Ma'arif al-Qur'an relates, on the authority of Ibn Ishaq from Ibn Abbas, Ka'b al-Ahbar and Wahb ibn Munabbih, that his name was Habib and that by the better-known account he worked as a carpenter. These are narrations from the early generations, not a ruling of the text; the Qur'an leaves him unnamed on purpose. What it keeps in view is never his name or his trade, but the argument he stands up to make.",
            "bn": "সে কে ছিল, এ নিয়ে তাফসীরকারেরা আয়াতের বক্তব্য নয়, বরং ঐতিহাসিক বর্ণনা তুলে ধরেন। মাআরিফুল কুরআন ইবন ইসহাকের সূত্রে ইবন আব্বাস, কাব আল-আহবার ও ওয়াহব ইবন মুনাব্বিহ থেকে বর্ণনা করে যে তার নাম ছিল হাবীব, আর বেশি প্রসিদ্ধ বর্ণনায় সে ছিল কাঠমিস্ত্রি। এগুলো পূর্ববর্তী প্রজন্মের বর্ণনা, আয়াতের কোনো ফয়সালা নয়; কুরআন তাকে ইচ্ছে করেই নামহীন রেখেছে। কুরআনের নজরে তার নাম বা পেশা নয়, বরং সে যে যুক্তিটা দাঁড়িয়ে পেশ করছে সেটাই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "If the Merciful Wills Harm",
          "bn": "করুণাময় যদি ক্ষতি চান"
        },
        "p": [
          {
            "en": "The heart of his reasoning is a single condition: in yuridni r-rahmanu bi-durrin, if the Most Merciful should intend me some harm. At-Tabari glosses durr as harm and hardship that touches a person. Al-Qurtubi reads it more narrowly, as the sickness that might afflict him. Al-Baghawi takes it as any evil or hateful thing that could befall. Whether the harm is illness in particular or anything wider, the point holds and the commentators meet on it: the power to send it rests with Allah, and the man names that power exactly.",
            "bn": "তার যুক্তির মূল একটি শর্তে: ইন ইউরিদনির রাহমানু বিদুররিন, করুণাময় যদি আমার কোনো ক্ষতি করতে চান। তাবারী দুরর-এর অর্থ করেন সেই ক্ষতি ও কষ্ট, যা মানুষকে স্পর্শ করে। কুরতুবী একে আরও সংকীর্ণভাবে পড়েন, অর্থাৎ যে অসুখ তাকে পেয়ে বসতে পারে। বাগাভী ধরেন যেকোনো মন্দ বা অপ্রিয় বিপদকে। ক্ষতি বিশেষ করে অসুখ হোক বা আরও বিস্তৃত কিছু, কথাটা একই থাকে আর তাফসীরকারেরা তাতে একমত: তা পাঠানোর ক্ষমতা আল্লাহরই হাতে, আর লোকটি ঠিক সেই ক্ষমতারই নাম নেয়।"
          },
          {
            "en": "Notice the name he chooses. He does not say if God wills me harm but if ar-Rahman, the Most Merciful, intends it. The very One whose mercy reaches all things is also the only One whose decree can touch him with hardship. Mercy and power are not two rival gods to be set against each other; they are one Lord. To dread harm from any other source, or to beg relief from any other hand, is to misread who it is that actually holds both the harm and the healing.",
            "bn": "খেয়াল করুন সে কোন নামটা বেছে নেয়। সে বলে না আল্লাহ যদি আমার ক্ষতি চান, বরং বলে আর-রাহমান, সেই করুণাময় যদি তা চান। যাঁর দয়া সব কিছুকে ঘিরে রাখে, তিনিই একমাত্র সত্তা যাঁর ফয়সালা তাকে কষ্ট দিয়ে স্পর্শ করতে পারে। দয়া আর ক্ষমতা এমন দুই প্রতিদ্বন্দ্বী ইলাহ নয়, যাদের একজনকে আরেকজনের বিরুদ্ধে দাঁড় করানো যায়; দুটোই একই রবের। অন্য কোনো উৎস থেকে ক্ষতির ভয় করা, কিংবা অন্য কারও কাছে মুক্তি ভিক্ষা চাওয়া মানে চিনতে ভুল করা, ক্ষতি আর আরোগ্য দুটোই আসলে কার হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "What No Idol Can Lift",
          "bn": "মূর্তি যা সরাতে পারে না"
        },
        "p": [
          {
            "en": "If harm comes from Him, what can the idols do about it? Nothing, says the verse: la tughni anni shafa'atuhum shay'an wa-la yunqidhun, their intercession will avail me nothing, nor can they rescue me. At-Tabari separates the two failures inside that line. Their pleading cannot lift the harm once it has come down, and they themselves cannot pull the man out of it when it has seized him. The idol is useless on both sides of the trouble, powerless before it strikes and powerless after.",
            "bn": "ক্ষতি যদি তাঁর কাছ থেকেই আসে, তবে মূর্তিগুলো তা নিয়ে কী করতে পারে? কিছুই না, বলে আয়াত: লা তুগনি আন্নী শাফাআতুহুম শাইআন ওয়ালা ইউনকিযূন, তাদের সুপারিশ আমার কোনো কাজে আসবে না, আর তারা আমাকে উদ্ধারও করতে পারবে না। তাবারী এই কথার ভেতরে দুটি ব্যর্থতা আলাদা করেন। ক্ষতি নেমে এলে তাদের সুপারিশ তা সরাতে পারে না, আর ক্ষতি যখন তাকে পেয়ে বসে তখন তারা নিজেরাও তাকে টেনে তুলতে পারে না। বিপদের দুই পাশেই মূর্তি অকেজো, আঘাত আসার আগেও অসহায়, আঘাতের পরেও অসহায়।"
          },
          {
            "en": "Ibn Kathir drives the same point home. These gods you worship beside Him, he says, possess no command at all; if Allah wills a person harm, none can remove it but He, as another verse puts it in 10:107. The idols can neither repel the decree nor hold it back, nor save the one who is caught under it. Their worshippers have handed their hope to objects that cannot act, while the single One who does act stands entirely outside their reckoning, unasked and unacknowledged.",
            "bn": "ইবন কাসীর একই কথা আরও জোর দিয়ে বলেন। তিনি বলেন, তাঁকে ছেড়ে তোমরা যে ইলাহদের পূজা কর, তাদের হাতে কোনো কর্তৃত্বই নেই; আল্লাহ কারও ক্ষতি চাইলে তিনি ছাড়া কেউ তা সরাতে পারে না, যেমন ১০:১০৭ আয়াতে বলা হয়েছে। মূর্তিগুলো না ফয়সালা ঠেকাতে পারে, না আটকে রাখতে পারে, না এর নিচে পড়া মানুষকে বাঁচাতে পারে। তাদের পূজারিরা নিজেদের আশা তুলে দিয়েছে এমন জিনিসের হাতে, যা কিছুই করতে পারে না। অথচ যিনি একাই সব করেন, তিনি তাদের হিসাবের বাইরেই থেকে যান; তাঁকে তারা ডাকেও না, মানেও না।"
          },
          {
            "en": "Al-Qurtubi fastens on the last word, la yunqidhun, they cannot save me. He glosses it as, they cannot rescue me from the affliction I am in. Read together with his reading of durr as sickness, the picture turns vivid: a man laid low by illness, surrounded by figures he once called gods, and not one of them able to raise him from where he lies. The verse strips the idol of the exact service its worshipper most wanted from it, help in the hour it is needed.",
            "bn": "কুরতুবী শেষ শব্দটির উপর জোর দেন, লা ইউনকিযূন, তারা আমাকে বাঁচাতে পারে না। তিনি এর ব্যাখ্যা করেন: আমি যে বিপদে আছি, তা থেকে তারা আমাকে উদ্ধার করতে পারে না। দুরর-কে অসুখ হিসেবে তাঁর পড়ার সঙ্গে মিলিয়ে দেখলে ছবিটা জীবন্ত হয়ে ওঠে: অসুখে কাবু এক মানুষ, চারপাশে সেইসব মূর্তি যাদের সে এক সময় ইলাহ বলত, অথচ তাদের একটিও তাকে শোয়া জায়গা থেকে তুলতে পারে না। পূজারি তার মূর্তির কাছে সবচেয়ে বেশি যা চাইত, তা হলো দরকারের সময় সাহায্য। আয়াত মূর্তির কাছ থেকে ঠিক সেটাই কেড়ে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of Intercession",
          "bn": "সুপারিশের দুই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "The word shafa'a, intercession, deserves care, because the Qur'an elsewhere affirms a true intercession. The commentators give two complementary reasons the idols' intercession is worth nothing. As-Sa'di explains that none may intercede with Allah except by His leave, so whatever these objects might plead carries no weight before Him. Al-Baghawi presses further: these false gods have no intercession at all, not a weak intercession but simply none, so there is nothing in them even to fall short. Both readings end at the same emptiness.",
            "bn": "শাফাআ, অর্থাৎ সুপারিশ শব্দটি নিয়ে সতর্ক থাকা দরকার, কারণ কুরআন অন্যত্র এক সত্য সুপারিশকে স্বীকার করে। মূর্তির সুপারিশ কেন মূল্যহীন, তাফসীরকারেরা তার দুটি পরিপূরক কারণ দেন। সা'দী বলেন, আল্লাহর কাছে তাঁর অনুমতি ছাড়া কেউই সুপারিশ করতে পারে না, তাই এই জিনিসগুলো যা-ই আবেদন করুক তাঁর কাছে তার কোনো ওজন নেই। বাগাভী আরও এগিয়ে বলেন: এই মিথ্যা ইলাহদের কোনো সুপারিশই নেই, দুর্বল সুপারিশও নয়, একেবারেই নেই, তাই কম পড়ার মতোও কিছু তাদের মধ্যে নেই। দুই ব্যাখ্যাই একই শূন্যতায় গিয়ে ঠেকে।"
          },
          {
            "en": "So the verse does not deny intercession as such; it denies that the idols own any. On the Day of Judgement intercession will indeed take place, but only for whom Allah permits and only by His leave, which is exactly the principle the believer's words rest on. What is refused here is the pagan hope that a carved figure or a lesser being could overrule the Lord on your behalf. Reliance misplaced onto such intercessors is not piety; it is a wager on a power that was never there to begin with.",
            "bn": "তাই আয়াত সুপারিশকে একেবারে অস্বীকার করে না; অস্বীকার করে মূর্তিদের কোনো সুপারিশ থাকাকে। কিয়ামতের দিন সুপারিশ সত্যিই হবে, তবে কেবল তার জন্য, যার ব্যাপারে আল্লাহ অনুমতি দেন, আর কেবল তাঁরই অনুমতিতে। মুমিনের কথা ঠিক এই নীতির উপরই দাঁড়িয়ে। এখানে নাকচ করা হচ্ছে মুশরিকদের সেই আশা যে খোদাই করা কোনো মূর্তি বা নিচু স্তরের কোনো সত্তা আপনার হয়ে রবের ফয়সালা উল্টে দিতে পারবে। এমন সুপারিশকারীর উপর ভুল ভরসা রাখা দ্বীনদারি নয়; এ এমন এক শক্তির উপর বাজি ধরা, যার অস্তিত্বই কোনোদিন ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Whole Argument in Order",
          "bn": "গোটা যুক্তি এক সুতোয়"
        },
        "p": [
          {
            "en": "Set his words in order and the argument stands complete. Why should I not worship the One who created me, he asks in 36:22, and to whom you are all being returned? Worship is owed to the Maker who is also the Judge. Then comes the counter-question of 36:23: shall I set up, beside that Maker, gods who cannot touch harm or help? And then the verdict he passes, in 36:24, on himself: were I to do such a thing, I would be in plain and open error.",
            "bn": "তার কথাগুলো সাজিয়ে নিন, যুক্তিটা পূর্ণ হয়ে দাঁড়ায়। সে ৩৬:২২ আয়াতে বলে, যিনি আমাকে সৃষ্টি করেছেন সেই একমাত্র সত্তার ইবাদত আমি কেন করব না, আর যাঁর কাছে তোমাদের সবাইকে ফিরিয়ে নেওয়া হচ্ছে? ইবাদত প্রাপ্য সেই স্রষ্টার, যিনিই আবার বিচারক। এরপর আসে ৩৬:২৩ আয়াতের পাল্টা প্রশ্ন: সেই স্রষ্টার পাশে আমি কি এমন ইলাহ বসাব, যারা ক্ষতি বা উপকার কিছুই ছুঁতে পারে না? তারপর সে ৩৬:২৪ আয়াতে নিজের উপর রায় দেয়: এমন করলে আমি স্পষ্ট গোমরাহিতে পড়ে যাব।"
          },
          {
            "en": "He turns the verdict on himself before he ever turns it on them. That is the honesty of a sincere caller: he argues as though his own soul were on the line, because in truth it is. Then, in 36:25, he seals the matter in the open, saying, I have believed in your Lord, so hear me. He has reasoned his way to the truth in public, and now he takes his stand on that truth in public too, whatever the cost of saying it in front of them turns out to be.",
            "bn": "সে রায়টা তাদের উপর চাপানোর আগে নিজের উপরই ফেরায়। এটাই একজন আন্তরিক আহ্বানকারীর সততা: সে এমনভাবে যুক্তি দেয় যেন তার নিজের প্রাণটাই পণ, কারণ সত্যিই তা-ই। এরপর ৩৬:২৫ আয়াতে সে খোলাখুলি বিষয়টা পাকা করে বলে, আমি তোমাদের রবের উপর ঈমান এনেছি, কাজেই আমার কথা শোনো। সে প্রকাশ্যে যুক্তি দিয়ে সত্যে পৌঁছেছে, আর এখন সেই সত্যের উপরই প্রকাশ্যে দাঁড়ায়, তাদের সামনে তা বলার দাম যা-ই হোক না কেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Harm Only by His Writing",
          "bn": "ক্ষতি কেবল তাঁর লিখনে"
        },
        "p": [
          {
            "en": "The principle under this verse, that harm and help come from Allah alone, is stated plainly in a well-known hadith. The commentators here do not attach it to 36:23, so it stands as a general teaching of the Prophet rather than a comment tied to these words. At-Tirmidhi records that the Prophet said to the young Ibn Abbas, who was riding behind him: be mindful of Allah and He will protect you; when you ask, ask of Allah, and when you seek help, seek it from Allah.",
            "bn": "এই আয়াতের নিচে যে নীতি, অর্থাৎ ক্ষতি আর উপকার কেবল আল্লাহর কাছ থেকে আসে, তা এক সুপরিচিত হাদীসে সোজাসুজি বলা হয়েছে। তাফসীরকারেরা এখানে একে ৩৬:২৩ আয়াতের সঙ্গে জুড়ে দেননি, তাই এটি এই শব্দগুলোর ব্যাখ্যা নয়, বরং নবী ﷺ-এর একটি সাধারণ শিক্ষা হিসেবেই থাকে। তিরমিযী বর্ণনা করেন, নবী ﷺ তাঁর পেছনে বসা কিশোর ইবন আব্বাসকে বলেছিলেন: আল্লাহকে স্মরণে রাখো, তিনি তোমাকে হেফাজত করবেন; চাইলে আল্লাহর কাছে চাও, আর সাহায্য চাইলে আল্লাহর কাছেই চাও।"
          },
          {
            "en": "Then come the words that match this verse almost exactly: know that if the whole community gathered to benefit you, they could not benefit you with anything except what Allah has already written for you, and if they gathered to harm you, they could not harm you with anything except what Allah has already written against you. At-Tirmidhi graded this report hasan sahih, sound. The idols of the town, and every power a person leans on today, fall squarely under that same unbreakable rule.",
            "bn": "এরপর আসে সেই কথা, যা এই আয়াতের সঙ্গে প্রায় হুবহু মেলে: জেনে রাখো, গোটা জাতি যদি তোমার উপকার করতে একজোট হয়, তবু আল্লাহ তোমার জন্য যা লিখে রেখেছেন তা ছাড়া তারা কোনো উপকার করতে পারবে না; আর যদি তারা তোমার ক্ষতি করতে একজোট হয়, তবু আল্লাহ তোমার বিরুদ্ধে যা লিখে রেখেছেন তা ছাড়া তারা কোনো ক্ষতি করতে পারবে না। তিরমিযী এই বর্ণনাকে হাসান সহীহ বলেছেন। জনপদের মূর্তিগুলো, আর আজ মানুষ যে শক্তির উপরই হেলান দেয়, সবই সেই একই অটল নিয়মের নিচে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "What You Lean On",
          "bn": "আপনার ভরসা কিসে"
        },
        "p": [
          {
            "en": "Carried into an ordinary life, the man's question becomes a quiet test of the heart. Everyone leans on something against the fear of harm: a job, a connection, a saved amount, another person's goodwill, even the habit of worry itself. None of these is an idol of stone, and yet the verse's logic reaches all of them without exception. Can any of them turn aside what your Lord has already decided? If the honest answer is no, then they were never the place where your deepest trust belonged.",
            "bn": "সাধারণ জীবনে আনলে লোকটির প্রশ্ন মনের এক নীরব পরীক্ষা হয়ে দাঁড়ায়। ক্ষতির ভয়ে সবাই কিছু না কিছুর উপর ভর করে: চাকরি, কারও সঙ্গে জানাশোনা, জমানো কিছু টাকা, অন্য মানুষের সুনজর, এমনকি দুশ্চিন্তা করার অভ্যাসটাই। এগুলোর কোনোটিই পাথরের মূর্তি নয়, তবু আয়াতের যুক্তি এদের প্রত্যেকটির বেলায় খাটে। আপনার রব যা আগেই ঠিক করে রেখেছেন, এদের কেউ কি তা ফেরাতে পারবে? সৎ উত্তর যদি হয় ‘না’, তবে আপনার গভীরতম ভরসার জায়গা এগুলো কখনো ছিল না।"
          },
          {
            "en": "This is not a call to abandon means; the believer still spoke, still acted, still warned his people to the end. It is a call to put means back in their place, under the hand that actually governs them. Rely on ar-Rahman, who alone can send the harm and alone can lift it, and treat every lesser help as a gift from Him rather than a rival to Him. Ask Him, seek your help from Him, and let the things you once leaned on serve you rather than quietly rule you.",
            "bn": "এটি উপায়-উপকরণ ছেড়ে দেওয়ার ডাক নয়; সেই মুমিন তো শেষ পর্যন্ত কথা বলেছে, কাজ করেছে, নিজের জাতিকে সতর্ক করেছে। এটি উপায়গুলোকে তাদের আসল জায়গায় ফিরিয়ে দেওয়ার ডাক: যাঁর হাতে এগুলোর আসল নিয়ন্ত্রণ, তাঁর অধীনে। ভরসা রাখুন আর-রাহমানের উপর; তিনি একাই ক্ষতি পাঠাতে পারেন, একাই তা সরাতে পারেন। আর ছোটখাটো প্রতিটি সাহায্যকে তাঁর প্রতিদ্বন্দ্বী নয়, তাঁরই দান হিসেবে দেখুন। তাঁর কাছেই চান, তাঁর কাছেই সাহায্য চান। যেসব জিনিসের উপর একসময় ভর করতেন, সেগুলো যেন চুপিসারে আপনার উপর রাজত্ব না করে, বরং আপনার কাজে লাগে।"
          },
          {
            "en": "One note in closing. The town in this passage is later destroyed for its rejection, yet the verse before us is the speech of a believer calling to the truth, and it licenses nothing against any living person or community. It is an argument for tawhid, addressed first of all to the one who reads it now. Its claim is on my own reliance and my own fear, not on anyone else's blame, and it asks only that I move my trust to where it was always owed.",
            "bn": "শেষে একটি কথা। এই কাহিনির জনপদটি পরে তার অস্বীকারের কারণে ধ্বংস হয়। তবু আমাদের সামনের আয়াতটি সত্যের দিকে ডাকা এক মুমিনের কথা; এটি কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুরই অনুমতি দেয় না। এটি তাওহীদের পক্ষে এক যুক্তি, আর এর প্রথম শ্রোতা সেই মানুষ, যে এখন এটি পড়ছে। এর দাবি আমার নিজের ভরসা আর আমার নিজের ভয়ের উপর, অন্য কাউকে দোষ দেওয়ার উপর নয়। এটি শুধু এটুকু চায়: আমার ভরসা আমি সেখানে সরিয়ে নিই, যেখানে তার পাওনা সবসময়ই ছিল।"
          }
        ]
      }
    ]
  },
  "36:26": {
    "sections": [
      {
        "h": {
          "en": "It Was Said to Him",
          "bn": "তাকে বলা হলো"
        },
        "p": [
          {
            "en": "The verse opens with a passive verb, qīla, it was said, and never names the speaker. There is no scene of dying set in between. His people have just struck down the man who ran to tell them to follow the messengers, and the next thing the Qur'an records is not his wound but an invitation: Enter Paradise. At-Tabari reads it as Allah's own word to him the very moment they killed him. As-Sa'di says it reached him straightaway, fī l-ḥāl, and al-Muyassar adds that it was spoken after his killing as an honour to him, ikrāman lahu.",
            "bn": "আয়াতটি শুরু হয় কর্মবাচ্যের একটি ক্রিয়া দিয়ে, ‘কীলা’, বলা হলো; বক্তার নাম বলা হয় না। মাঝখানে মৃত্যুর কোনো দৃশ্য নেই। যে লোক ছুটে এসে জাতিকে রাসূলদের অনুসরণ করতে বলেছিল, তার জাতির লোকেরা এইমাত্র তাকে মেরে ফেলেছে। এরপর কুরআন তার আঘাতের কথা বলে না; বলে এক আহ্বানের কথা: জান্নাতে প্রবেশ কর। তাবারীর মতে এটি আল্লাহরই কথা; তারা তাকে হত্যা করার সঙ্গে সঙ্গেই তিনি তাকে এ কথা বলেন। সাদী বলেন, কথাটি তার কাছে পৌঁছেছিল তৎক্ষণাৎ। আর মুয়াসসার যোগ করে, হত্যার পর তাকে সম্মান জানাতেই এ কথা বলা হয়েছিল।"
          },
          {
            "en": "Who spoke it is left veiled, though the certainty of it is not. Ma'arif al-Qur'an holds that the address reached him through an angel sent to bid him enter. The passive keeps the speaker behind a curtain and puts the whole weight on the words themselves. Set the two sides of the moment beside each other. Behind him is a street full of people who mocked the messengers and turned on him; ahead of him is a single command, Enter, and a door standing open. The distance between the two is the length of his faith.",
            "bn": "কে কথাটি বলল, তা আড়ালে রাখা হয়েছে; কিন্তু কথাটি যে নিশ্চিত, তাতে কোনো আড়াল নেই। মাআরিফুল কুরআন বলে, এক ফেরেশতার মাধ্যমে এ আহ্বান তার কাছে পৌঁছেছিল, যাকে পাঠানো হয়েছিল তাকে প্রবেশের কথা বলতে। কর্মবাচ্য বক্তাকে পর্দার আড়ালে রাখে, আর পুরো ভার তুলে দেয় কথাগুলোর উপর। মুহূর্তটার দুই দিক পাশাপাশি রাখুন। পেছনে রাস্তাভর্তি মানুষ, যারা রাসূলদের ঠাট্টা করেছে আর তার উপর চড়াও হয়েছে। সামনে একটিমাত্র হুকুম, প্রবেশ কর, আর খোলা একটা দুয়ার। এ দুইয়ের মাঝের দূরত্বটুকুই তার ঈমানের মাপ।"
          }
        ]
      },
      {
        "h": {
          "en": "By What Door He Entered",
          "bn": "কোন দুয়ার দিয়ে প্রবেশ"
        },
        "p": [
          {
            "en": "The commentators differ on the manner of his entering. Ibn Mas'ud (RA), through Ibn Ishaq and carried by both at-Tabari and Ibn Kathir, reports that his people trampled him until his entrails came out, and that Allah said to him, Enter Paradise; so he entered it alive and provided for, Allah having lifted from him the sickness, grief and toil of this world. Al-Qurtubi preserves another account, that they sawed him. The mode of his death is left as the reports leave it, but the line they share is firm: his own people killed him, and he was admitted.",
            "bn": "তার প্রবেশের ধরন নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। ইবনে মাসঊদ (রাঃ) থেকে ইবনে ইসহাকের সূত্রে আসা বর্ণনাটি তাবারী ও ইবনে কাসীর দুজনেই এনেছেন: তার জাতি তাকে এমনভাবে পায়ে পিষেছিল যে তার নাড়িভুঁড়ি বেরিয়ে এসেছিল। তখন আল্লাহ তাকে বললেন, জান্নাতে প্রবেশ কর। সে জীবিত অবস্থায় জান্নাতে প্রবেশ করল, সেখানে তাকে রিযিক দেওয়া হয়; আল্লাহ তার থেকে দুনিয়ার রোগ, দুঃখ আর কষ্ট তুলে নিয়েছেন। কুরতুবী আরেকটি বর্ণনাও রেখেছেন: তারা তাকে করাত দিয়ে চিরেছিল। মৃত্যুর ধরন নিয়ে বর্ণনাগুলো যেমন বলেছে, আমরা তেমনই রেখে দিচ্ছি। কিন্তু যে কথায় সব বর্ণনা এক, তা পাকা: তার নিজের জাতিই তাকে হত্যা করেছিল, আর তাকে জান্নাতে কবুল করে নেওয়া হয়েছিল।"
          },
          {
            "en": "Mujahid reads the welcome as a verdict. In Ibn Kathir he says, It was said to Habib an-Najjar, Enter Paradise; this was his due, for he had been killed, and when he saw the reward he spoke. At-Tabari carries the same from him in other words: qad wajabat lahu l-janna, Paradise had become his by right, said when he saw the reward. A group, al-Qurtubi notes, took Enter Paradise to mean it has become due to you, a report that he had earned admission, since entering it in full comes only after the resurrection.",
            "bn": "মুজাহিদ এই অভ্যর্থনাকে একটি রায় হিসেবে দেখেন। ইবনে কাসীরে তাঁর কথা আছে: হাবীব আন-নাজ্জারকে বলা হলো, জান্নাতে প্রবেশ কর। এটা ছিল তার প্রাপ্য, কারণ তাকে হত্যা করা হয়েছিল; আর পুরস্কার দেখে সে কথা বলে উঠল। তাবারীও মুজাহিদ থেকে একই কথা অন্য শব্দে এনেছেন: কাদ ওয়াজাবাত লাহুল জান্নাহ, জান্নাত তার অধিকার হয়ে গিয়েছিল; পুরস্কার দেখে সে এ কথা বলেছিল। কুরতুবী জানান, একদল ‘জান্নাতে প্রবেশ কর’ কথার অর্থ নিয়েছেন ‘জান্নাত তোমার জন্য অবধারিত হয়ে গেছে’। অর্থাৎ এটা এক ঘোষণা যে সে প্রবেশের যোগ্যতা অর্জন করেছে, কারণ পুরোপুরি জান্নাতে প্রবেশ তো পুনরুত্থানের পরেই।"
          },
          {
            "en": "Qatadah tied his being alive to the verse on the slain in Allah's way: he is in Paradise, living and provided for, as 3:169 says of those killed in His path. Al-Qurtubi keeps a different view too, from al-Hasan by way of al-Qushayri, that Allah raised him up before they could kill him and he remains in the Garden. Al-Qurtubi's own preference is the plain reading: when he was killed, he was told to enter. Ma'arif gathers it into the state of barzakh, where those bound for Paradise are already given its comfort, a foretaste of the entry still to come.",
            "bn": "কাতাদা তার জীবিত থাকার কথাকে আল্লাহর পথে নিহতদের আয়াতের সঙ্গে মিলিয়ে দেখেন: সে জান্নাতে জীবিত, রিযিক পাচ্ছে, যেমনটা ৩:১৬৯ আয়াত আল্লাহর পথে নিহতদের সম্পর্কে বলে। কুরতুবী আরেকটি মতও রাখেন, হাসান থেকে কুশায়রীর সূত্রে, যে তারা তাকে হত্যা করার আগেই আল্লাহ তাকে উঠিয়ে নিয়েছিলেন, আর সে জান্নাতেই রয়ে গেছে। কুরতুবীর নিজের পছন্দ সোজা কথাটাই, তাকে যখন হত্যা করা হলো তখন তাকে প্রবেশ করতে বলা হলো। মাআরিফ পুরো বিষয়টিকে বারযাখের অবস্থায় গুছিয়ে আনে, যেখানে জান্নাতের জন্য নির্ধারিতদের আগেই তার আরাম দেওয়া হয়, সামনের সেই প্রবেশের এক আগাম স্বাদ।"
          }
        ]
      },
      {
        "h": {
          "en": "His First Thought Was Them",
          "bn": "প্রথম ভাবনাটাই তাদের নিয়ে"
        },
        "p": [
          {
            "en": "Now comes the astonishing turn. Qala ya layta qawmi ya'lamun, he said, Would that my people knew. Not a word about his killers' crime, no plea for justice, no breath of relief at his own escape. His first reach, standing inside the reward, is back toward qawmi, my people, the very ones who had just put him to death. Hear the word itself. He does not say those people, or that nation; he says mine. The tie he claims to them is not cancelled by what they did to him.",
            "bn": "এবার আসে বিস্ময়কর মোড়টা। কালা ইয়া লাইতা কাওমী ইয়ালামূন, সে বলল, হায়, আমার জাতির লোকেরা যদি জানত। খুনিদের অপরাধ নিয়ে একটি শব্দও নেই, বিচারের কোনো আরজি নেই, নিজের রক্ষা পাওয়ার স্বস্তিরও কোনো নিঃশ্বাস নেই। পুরস্কারের ভেতরে দাঁড়িয়ে তার মন প্রথমেই ছুটে যায় ‘কাওমী’র দিকে, আমার জাতি; সেই লোকগুলোর দিকে, যারা এইমাত্র তাকে মেরে ফেলেছে। শব্দটা খেয়াল করুন। সে বলে না ‘ঐ লোকেরা’ কিংবা ‘ঐ জাতি’; সে বলে ‘আমার’। তাদের সঙ্গে সে যে বন্ধনের দাবি করে, তারা তার সঙ্গে যা করল তাতে তা মুছে যায় না।"
          },
          {
            "en": "Al-Qurtubi observes that the sentence is shaped as though answering a question, someone asking what he found at that great triumph, and he answers not with his own joy but with a wish for them. The man murdered by his community wants, before anything for himself, that his community could see what he now sees. There is no gloating in it and no curse upon those who killed him. There is only a longing, bare and urgent, that they might arrive where he has arrived.",
            "bn": "কুরতুবী লক্ষ করেন, বাক্যটি এমনভাবে গড়া, যেন কোনো প্রশ্নের জবাব। কেউ যেন জিজ্ঞেস করছে, সেই মহা সাফল্যের মুহূর্তে সে কী পেল। আর সে জবাব দেয় নিজের আনন্দের কথা বলে নয়, তাদের জন্য একটি কামনা জানিয়ে। নিজের জাতির হাতে খুন হওয়া লোকটি নিজের জন্য কিছু চাওয়ার আগে চায়, সে এখন যা দেখছে, তার জাতিও যেন তা দেখতে পায়। এতে কোনো উল্লাস নেই, খুনিদের প্রতি কোনো অভিশাপও নেই। আছে শুধু এক খোলা, তীব্র আকুতি: সে যেখানে পৌঁছেছে, তারাও যেন সেখানে পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Longed Them to Know",
          "bn": "কী জানুক, এই ছিল চাওয়া"
        },
        "p": [
          {
            "en": "The wish does not stop at knew. The next verse completes it: bima ghafara li rabbi wa ja'alani mina l-mukramin, of how my Lord has forgiven me and placed me among the honoured (36:27). What he aches for them to know is the forgiveness and the honour. Al-Qurtubi lingers on the small word bima, the thing by which he was forgiven, and notes the grammarians even read it as a question of wonder: by what did my Lord forgive me. Either way the gaze is fixed on mercy received, not on wrong suffered.",
            "bn": "চাওয়াটা ‘যদি জানত’ বলেই থেমে যায় না। পরের আয়াত তা পূর্ণ করে: বিমা গাফারা লী রাব্বী ওয়া জাআলানী মিনাল মুকরামীন, আমার রব কীসের বদৌলতে আমাকে ক্ষমা করেছেন আর সম্মানিতদের অন্তর্ভুক্ত করেছেন (৩৬:২৭)। সে চায় তারা জানুক সেই ক্ষমা আর সেই সম্মানের কথা। কুরতুবী ছোট্ট শব্দ ‘বিমা’-র উপর থামেন, অর্থাৎ কিসের বদৌলতে তাকে ক্ষমা করা হলো, আর জানান ব্যাকরণবিদেরা একে বিস্ময়ের প্রশ্ন হিসেবেও পড়েছেন, কীসের বদলে আমার রব আমাকে ক্ষমা করলেন। যেভাবেই পড়ুন, দৃষ্টি স্থির থাকে পাওয়া রহমতের উপর, সহ্য করা অন্যায়ের উপর নয়।"
          },
          {
            "en": "At-Tabari spells out what he wished they would grasp. He wanted them to know that the reason his Lord forgave his sins and placed him among those honoured with His Paradise was his faith in Allah and his patience, borne even to being killed, so that they too might believe and come to deserve the Garden. Abu Mijlaz, in Ibn Kathir, reads the verse's own answer to its question: forgiven, he says, because of my faith in my Lord and my belief in the Messengers.",
            "bn": "তাবারী খুলে বলেন, সে তাদের কী বোঝাতে চেয়েছিল। সে চেয়েছিল তারা জানুক, তার রব কেন তার গুনাহ মাফ করেছেন আর তাকে জান্নাত দিয়ে সম্মানিতদের দলে রেখেছেন: আল্লাহর উপর তার ঈমান আর তার ধৈর্যের কারণে, যে ধৈর্য সে নিহত হওয়া পর্যন্ত ধরে রেখেছিল। যাতে তারাও ঈমান আনে আর জান্নাতের যোগ্য হয়। ইবনে কাসীরে আবূ মিজলায প্রশ্নটির জবাব আয়াত থেকেই দেন: আমাকে ক্ষমা করা হয়েছে আমার রবের উপর আমার ঈমান আর রাসূলদের সত্য বলে মেনে নেওয়ার কারণে।"
          },
          {
            "en": "Ibn Kathir draws the point all the way out. The man meant that if his people could only see the vast reward and the lasting blessing he had been given, it would move them to follow the messengers. His wish is not that they would envy him his place but that they would be guided by what he had found. The honour he received becomes, in his own mouth, an argument he presses on the living, the strongest case he can make for the faith that cost him his life.",
            "bn": "ইবনে কাসীর কথাটা একেবারে শেষ পর্যন্ত খুলে বলেন। লোকটি বোঝাতে চেয়েছিল, তাকে যে বিশাল পুরস্কার আর স্থায়ী নিয়ামত দেওয়া হয়েছে, তার জাতি যদি শুধু তা দেখতে পেত, তবে তারা রাসূলদের অনুসরণ করতে উদ্বুদ্ধ হতো। সে চায়নি তারা তার জায়গা দেখে হিংসা করুক; চেয়েছে, সে যা পেয়েছে তা দেখে তারা হেদায়েত পাক। যে সম্মান সে পেয়েছে, তার নিজের মুখে সেটাই হয়ে ওঠে জীবিতদের সামনে রাখা এক যুক্তি। যে ঈমানের জন্য তাকে প্রাণ দিতে হলো, তার পক্ষে এর চেয়ে জোরালো প্রমাণ সে আর দিতে পারত না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sincere Past the Grave",
          "bn": "কবরের ওপারেও খাঁটি দরদ"
        },
        "p": [
          {
            "en": "Ibn 'Abbas (RA), in a report recorded by Ibn Abi Hatim, lays the two halves of the man's life side by side. He was sincere to his people in his lifetime with O my people, follow the messengers (36:20), and he was sincere to them after his death with Would that my people knew. The nasiha, the honest good-will of one who wants nothing for you but your good, did not end when they killed him. It simply changed address, from a street he ran down to a Paradise he had entered.",
            "bn": "ইবনে আবী হাতিমের বর্ণনায় ইবনে আব্বাস (রাঃ) লোকটির জীবনের দুই অংশ পাশাপাশি রাখেন। জীবদ্দশায় সে তার জাতির কল্যাণ চেয়েছিল এই বলে: হে আমার জাতি, রাসূলদের অনুসরণ কর (৩৬:২০)। আর মৃত্যুর পরেও সে তাদের কল্যাণ চেয়েছে এই বলে: হায়, আমার জাতির লোকেরা যদি জানত! নাসীহা মানে এমন মানুষের খাঁটি কল্যাণকামনা, যে আপনার ভালো ছাড়া আর কিছুই চায় না। তারা তাকে হত্যা করলেও তার এই নাসীহা থামেনি। শুধু ঠিকানা বদলেছে: যে রাস্তা ধরে সে ছুটে এসেছিল, সেখান থেকে যে জান্নাতে সে প্রবেশ করেছে, সেখানে।"
          },
          {
            "en": "Qatadah puts it as a settled rule: you will never meet a true believer except as a sincere adviser, never as one who deceives; and when this man saw with his own eyes how Allah had honoured him, he wished his people could know it. As-Sa'di says the same, that he spoke to inform them of the honour he reached for his tawhid and his sincerity, advising his people after his death as he had advised them in his life. Good-will toward one's own persecutors, outliving the body they destroyed.",
            "bn": "কাতাদা একে একটি স্থির নিয়ম হিসেবে বলেন: খাঁটি মুমিনকে আপনি সবসময় আন্তরিক কল্যাণকামী হিসেবেই পাবেন, কখনো প্রতারক হিসেবে নয়। এই লোকটি যখন নিজ চোখে দেখল আল্লাহ তাকে কত সম্মান দিয়েছেন, তখন সে চাইল তার জাতিও যেন তা জানতে পারে। সাদীও একই কথা বলেন: তাওহীদ আর ইখলাসের বিনিময়ে সে যে সম্মান পেয়েছে, তার খবর জানাতেই সে কথা বলেছিল। জীবদ্দশায় যেমন জাতিকে নসিহত করেছিল, মৃত্যুর পরেও তেমনি করল। যারা তার উপর জুলুম করেছে, তাদের প্রতিও তার কল্যাণকামনা বেঁচে রইল, তারা যে দেহ ধ্বংস করেছিল, তার পরেও।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prophet Wiping Blood",
          "bn": "যে নবী রক্ত মুছছিলেন"
        },
        "p": [
          {
            "en": "This cast of heart is one the Prophet (peace be upon him) once described in a scene. 'Abdullah ibn Mas'ud (RA) narrated: It is as though I see the Prophet (peace be upon him) telling of one of the prophets whose people had beaten him until he bled, and he was wiping the blood from his face and saying, O Allah, forgive my people, for they have no knowledge. It is recorded in Sahih al-Bukhari, number 3477, and in Sahih Muslim; their inclusion of a report is these two imams' mark of its soundness.",
            "bn": "এমন অন্তরের ছবি নবী ﷺ একবার একটি ঘটনার বর্ণনায় এঁকেছিলেন। আবদুল্লাহ ইবনে মাসঊদ (রাঃ) বলেন, আমি যেন এখনো দেখছি, নবী ﷺ নবীদের একজনের কথা বলছেন, যাঁকে তাঁর জাতি মেরে রক্তাক্ত করেছিল। তিনি মুখ থেকে রক্ত মুছছিলেন আর বলছিলেন, হে আল্লাহ, আমার জাতিকে ক্ষমা করুন, কারণ তারা জানে না। হাদিসটি সহীহ বুখারীতে আছে, নম্বর ৩৪৭৭, আর সহীহ মুসলিমেও আছে। কোনো বর্ণনা এই দুই ইমামের গ্রন্থে স্থান পাওয়াই তার সহীহ হওয়ার প্রমাণ।"
          },
          {
            "en": "Hear the two sentences together. The prophet of the hadith, bloodied by his people, prays Forgive my people, for they do not know, fa-innahum la ya'lamun. The believer of the sura, killed by his people, wishes Would that my people knew, ya layta qawmi ya'lamun. The same root, 'a-l-m, to know, runs through both. Each man makes his persecutors' ignorance the thing he grieves and their guidance the thing he wants. Neither asks for a reckoning; both ache over what their people do not yet understand.",
            "bn": "দুটি বাক্য একসঙ্গে শুনুন। হাদিসের সেই নবী, নিজের জাতির হাতে রক্তাক্ত, দোয়া করেন: আমার জাতিকে ক্ষমা করুন, কারণ তারা জানে না, ফা-ইন্নাহুম লা ইয়ালামূন। সূরার এই মুমিন, নিজের জাতির হাতে নিহত, আকুল হয়ে বলে: হায়, আমার জাতির লোকেরা যদি জানত, ইয়া লাইতা কাওমী ইয়ালামূন। দুটোতেই আছে একই ধাতু, আইন-লাম-মীম, অর্থাৎ জানা। দুজনেরই দুঃখ জালিমদের অজ্ঞতা নিয়ে, আর চাওয়া তাদের হেদায়েত। কেউই হিসাব চান না; দুজনেরই কষ্ট, তাদের জাতি এখনো যা বোঝেনি তা নিয়ে।"
          },
          {
            "en": "This was the Prophet's (peace be upon him) own temperament, and the Qur'an records how far it reached in him. His concern for his people was so consuming that Allah addressed it directly: would you perhaps destroy yourself with grief that they will not believe (18:6). The believer at the city's edge, the earlier prophet wiping his face, and the Prophet (peace be upon him) grieving over his own people all stand in a single line, each of them longing for the guidance of the very people who hurt him.",
            "bn": "এটাই ছিল নবী ﷺ-এর নিজের স্বভাব, আর তাঁর মধ্যে এ স্বভাব কতটা গভীর ছিল, কুরআন তা লিখে রেখেছে। নিজের জাতির জন্য তাঁর দুশ্চিন্তা এতটাই প্রবল ছিল যে আল্লাহ সরাসরি সে কথা তুলে বলেন: তারা ঈমান আনছে না বলে তুমি কি দুঃখে নিজেকে শেষ করে ফেলবে (১৮:৬)? নগরের প্রান্ত থেকে আসা সেই মুমিন, মুখ থেকে রক্ত মুছতে থাকা আগের সেই নবী, আর নিজের জাতির জন্য দুঃখে কাতর নবী ﷺ, সবাই দাঁড়িয়ে আছেন এক কাতারে। প্রত্যেকেই আকুল ছিলেন ঠিক সেই মানুষদের হেদায়েতের জন্য, যারা তাঁদের কষ্ট দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant for Revenge",
          "bn": "বদলার কোনো সনদ নয়"
        },
        "p": [
          {
            "en": "What became of his people is told next, and told briefly: no army was sent down against them from the sky, for the matter was simpler than that; it was but one blast, and at once they were extinguished (36:28 and 36:29). Ibn Kathir explains that Allah did not need to dispatch soldiers; a single Sayhah ended them. These verses report what befell that one people and nothing more. Say it plainly, in both tongues: the passage describes what the text describes, and it licenses nothing against any living person or community.",
            "bn": "তার জাতির কী হলো, তা পরের আয়াতেই বলা হয়েছে, আর খুব সংক্ষেপে: তাদের বিরুদ্ধে আসমান থেকে কোনো সৈন্যবাহিনী নামানো হয়নি, কারণ ব্যাপারটা এর চেয়ে সহজ ছিল। ছিল মাত্র একটি প্রচণ্ড আওয়াজ, আর সঙ্গে সঙ্গে তারা নিভে গেল (৩৬:২৮ ও ৩৬:২৯)। ইবনে কাসীর বলেন, আল্লাহর সৈন্য পাঠানোর দরকার ছিল না; একটি সাইহাই তাদের শেষ করে দিল। এই আয়াতগুলো শুধু সেই একটি জাতির পরিণতির খবর দেয়, এর বেশি কিছু নয়। সোজা কথায় বলে রাখি, দুই ভাষাতেই: এই অংশ শুধু তা-ই বর্ণনা করে যা আয়াতে আছে, আর এটি কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "Notice that the believer himself sought none of this. His wish was the opposite: that they be forgiven and guided, not that they be destroyed. The man who was wronged does not reach for vengeance even when vengeance would be just; he reaches instead for their good. If his story leaves a reader eager to see enemies struck down, it has been read against its own grain, for its hero spent his last breath longing that his enemies be saved.",
            "bn": "খেয়াল করুন, মুমিন নিজে এর কিছুই চায়নি। তার চাওয়া ছিল ঠিক উল্টো: তারা ক্ষমা পাক, হেদায়েত পাক; ধ্বংস হোক, তা নয়। যার উপর জুলুম হয়েছে, সে প্রতিশোধের দিকে হাত বাড়ায় না, প্রতিশোধ ন্যায্য হলেও না; সে হাত বাড়ায় তাদের কল্যাণের দিকে। তার কাহিনি পড়ে কোনো পাঠক যদি শত্রুদের ধ্বংস দেখতে উদগ্রীব হয়ে ওঠে, তবে সে কাহিনিটা উল্টো বুঝেছে। কারণ এর নায়ক শেষ নিঃশ্বাস পর্যন্ত আকুল ছিল, তার শত্রুরাও যেন নাজাত পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Door Still Open",
          "bn": "খোলা দুয়ারের সামনে"
        },
        "p": [
          {
            "en": "The lesson sits in the gap between would that my people knew and the way most of us speak of those who have wronged us. Hurt, our instinct is to want them to get what they deserve. His instinct, killed, was to want them to get what he got: forgiveness and honour. That is hirs, a keen and restless eagerness, turned outward toward other people's guidance rather than inward toward our own comfort or our own vindication. He was greedy for their salvation the way we are greedy for our own.",
            "bn": "শিক্ষাটা লুকিয়ে আছে দুটি কথার ফাঁকে: একদিকে তার 'হায়, আমার জাতির লোকেরা যদি জানত', অন্যদিকে যারা আমাদের উপর অন্যায় করেছে তাদের নিয়ে আমাদের বেশির ভাগের মুখের কথা। আঘাত পেলে আমাদের মন চায়, ওরা উচিত শিক্ষা পাক। আর সে নিহত হয়েও চাইল, ওরা তা-ই পাক যা সে পেয়েছে: ক্ষমা আর সম্মান। এটাই হিরস, তীব্র আর অস্থির এক আকুলতা। তবে তা ফেরানো নিজের আরাম বা নিজেকে সঠিক প্রমাণ করার দিকে নয়, অন্য মানুষের হেদায়েতের দিকে। নিজের মুক্তির জন্য আমরা যতটা লোভী, সে ততটাই লোভী ছিল ওদের মুক্তির জন্য।"
          },
          {
            "en": "It costs something to carry good-will past an injury, and far more to carry it past a grave. But this is the measure the verse sets before us. The people you have the most reason to resent are people the mercy of your Lord is wide enough to reach, and your part is to long for them to reach it. Wish them guidance and not ruin; and if you are ever honoured, let your first thought be for those still standing outside the open door.",
            "bn": "আঘাত পাওয়ার পরও কারও ভালো চাওয়া সহজ নয়; আর মৃত্যুর পরেও সেই ভালো চাওয়া ধরে রাখা আরও অনেক কঠিন। তবু আয়াতটি আমাদের সামনে এই মাপকাঠিই রাখে। যাদের উপর রাগ করার সবচেয়ে বেশি কারণ আপনার আছে, আপনার রবের রহমত তাদের কাছে পৌঁছানোর মতোও প্রশস্ত। আপনার কাজ হলো মন থেকে চাওয়া, তারা যেন সেই রহমত পায়। তাদের জন্য ধ্বংস নয়, হেদায়েত চান। আর কখনো যদি আপনাকে সম্মান দেওয়া হয়, তবে আপনার প্রথম ভাবনা হোক তাদের নিয়ে, যারা এখনো খোলা দুয়ারের বাইরে দাঁড়িয়ে আছে।"
          }
        ]
      }
    ]
  },
  "36:34": {
    "sections": [
      {
        "h": {
          "en": "From Bare Grain to Garden",
          "bn": "শস্য থেকে বাগান পর্যন্ত"
        },
        "p": [
          {
            "en": "The verse just before this one, 36:33, has already made its point: the dead earth is a sign, for Allah revives it and brings grain out of it, and from that grain they eat. That is survival, the plain bread that keeps a people alive. Then 36:34 does not stop there. It adds gardens of date-palms and grapevines, and springs that burst up from the ground. The move is from the loaf to the orchard, from what a body needs to what a Lord freely gives beyond the need.",
            "bn": "ঠিক আগের আয়াত, ৩৬:৩৩, মূল কথাটা বলে রেখেছে: মরা যমীন এক নিদর্শন। আল্লাহ তাকে জীবিত করেন, তা থেকে শস্য বের করেন, আর সেই শস্যই মানুষ খায়। এ হলো বেঁচে থাকার খোরাক, সাদামাটা রুটি, যা একটা জাতিকে টিকিয়ে রাখে। কিন্তু ৩৬:৩৪ সেখানে থামে না। এতে যোগ হয় খেজুর আর আঙুরের বাগান, আর মাটি ফুঁড়ে বেরোনো ঝর্ণা। কথা গড়ায় রুটি থেকে বাগানে: শরীরের যা দরকার, তা থেকে সেই দানে, যা রব প্রয়োজনের বাইরেও অকাতরে দেন।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the whole stretch of Surah Ya Sin this way: its signs are at once clear proofs of Allah's perfect power and mirrors of the particular favours He pours on His creatures. A Lord who meant only to keep them breathing could have closed the account at the grain of the previous verse. Instead He plants whole gardens. So this verse asks us to see ordinary abundance not as the world's default setting but as a deliberate kindness, and the rest of this reading follows that gift down to its source.",
            "bn": "মাআরিফুল কুরআন সূরা ইয়াসিনের এই পুরো অংশটাকে এভাবেই পড়ে: এর নিদর্শনগুলো একদিকে আল্লাহর নিখুঁত ক্ষমতার স্পষ্ট প্রমাণ, অন্যদিকে সৃষ্টির উপর তাঁর ঢেলে দেওয়া বিশেষ অনুগ্রহের আয়না। রবের উদ্দেশ্য যদি শুধু তাদের নিঃশ্বাসটুকু টিকিয়ে রাখা হতো, আগের আয়াতের শস্যেই তিনি হিসাব শেষ করতে পারতেন। অথচ তিনি গোটা বাগান বসান। তাই আয়াতটি চায়, চারপাশের সাধারণ প্রাচুর্যকে আমরা দুনিয়ার আপনাআপনি নিয়ম না ভেবে আল্লাহর ইচ্ছাকৃত দয়া বলে চিনি। এই লেখার বাকিটা সেই দানকে তার উৎস পর্যন্ত অনুসরণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Name Palm and Vine",
          "bn": "খেজুর আর আঙুরের কথা কেন"
        },
        "p": [
          {
            "en": "The verse could have said fruit trees and left it general. It does not. It names two in particular: nakhil, the date-palms, and a'nab, the grapevines. Al-Qurtubi notices the choice and gives a reason for it. He says the two are singled out because they are a'la ath-thamar, the highest of fruits, the ones a listener in that land would prize above the rest. Scripture here does not reach for an abstraction; it points at the very trees in the hearer's own valley.",
            "bn": "আয়াত চাইলে শুধু 'ফলের গাছ' বলে কথাটা সাধারণ রাখতে পারত। তা করেনি। নাম ধরে বলেছে দুটির কথা: নাখীল, অর্থাৎ খেজুরগাছ, আর আ'নাব, অর্থাৎ আঙুরলতা। কুরতুবী এই বাছাইটা লক্ষ করেন এবং কারণও বলেন। তাঁর মতে এ দুটিকে আলাদা করে বলা হয়েছে, কারণ এরা আ'লাত সামার, ফলের মধ্যে সেরা; সেই অঞ্চলের শ্রোতার কাছে বাকি সব ফলের চেয়ে দামি। কুরআন এখানে কোনো বিমূর্ত কথায় যায় না। শ্রোতার নিজের উপত্যকার গাছগুলোই আঙুল দিয়ে দেখিয়ে দেয়।"
          },
          {
            "en": "As-Sa'di reads it the same way and sharpens it. He glosses the gardens as holding many trees, but especially the palm and the vine, which he calls ashraf al-ashjar, the noblest of the trees. The point of naming is that a named gift is a personal one. A Lord who lists the palm and the vine by name is not tipping a sack of generic provision over a crowd; He is handing this household the dates it dries and this vineyard the grapes it presses.",
            "bn": "সা'দীও একইভাবে পড়েন, আর কথাটা আরও ধারালো করেন। তাঁর ব্যাখ্যায় বাগানে অনেক গাছ আছে, তবে বিশেষ করে খেজুর আর আঙুর, যাদের তিনি বলেন আশরাফুল আশজার, অর্থাৎ গাছের মধ্যে সবচেয়ে সম্মানিত। নাম ধরে বলার মানেই হলো দানটা ব্যক্তিগত। যে রব খেজুর আর আঙুরের নাম ধরে বলেন, তিনি ভিড়ের উপর ঢালাও রিজিকের বস্তা উপুড় করে দিচ্ছেন না। তিনি এই ঘরকে দিচ্ছেন সেই খেজুর, যা সে শুকিয়ে রাখে; এই আঙুরবাগানকে দিচ্ছেন সেই আঙুর, যার রস সে নিংড়ে নেয়।"
          },
          {
            "en": "This is where gratitude turns tangible. It is easy to thank God in general and feel nothing, because a general blessing is too large to picture. The verse refuses that fog. It makes you hold a date, bite a grape, taste the particular sweetness, and only then ask where it came from. Thanks that begins with a specific fruit in the hand is harder to fake and harder to forget than thanks offered to the whole sky at once.",
            "bn": "এখানে এসে শুকরিয়া হাতে ছোঁয়ার মতো হয়ে ওঠে। মোটা দাগে আল্লাহর শুকরিয়া আদায় করে মনে কিছুই অনুভব না করা সহজ, কারণ ঢালাও নিয়ামত এত বড় যে মনে তার ছবিই আঁকা যায় না। আয়াত সেই ধোঁয়াশায় থাকতে দেয় না। আপনার হাতে একটা খেজুর তুলে দেয়, একটা আঙুরে কামড় দেওয়ায়, সেই বিশেষ মিষ্টি স্বাদটা নিতে বলে, আর তারপরই জিজ্ঞেস করে: এটা এলো কোথা থেকে? হাতের একটা নির্দিষ্ট ফল দিয়ে যে শুকরিয়া শুরু হয়, তাতে ভান করা কঠিন, ভুলে যাওয়াও কঠিন। গোটা আকাশের দিকে তাকিয়ে একবারে সেরে ফেলা শুকরিয়া তেমন নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Is Gardens",
          "bn": "শব্দটা বাগান"
        },
        "p": [
          {
            "en": "The word the verse uses for the planting is jannat. At-Tabari, al-Qurtubi and al-Baghawi all gloss it with the same ordinary Arabic word, basatin: orchards, tended gardens. This matters, because a garden is not a wilderness. A wilderness happens; a garden is laid out. Rows, walls, shade, water led where it is wanted. The image is not of a plain that chanced to turn green but of ground arranged with intent, the way a careful owner arranges the land he loves.",
            "bn": "এই বাগানের জন্য আয়াত যে শব্দটি এনেছে, তা হলো জান্নাত। তাবারী, কুরতুবী আর বাগাভী তিনজনই এর ব্যাখ্যা দেন একই সাধারণ আরবি শব্দে: বাসাতীন, অর্থাৎ ফলের বাগান, যত্নে গড়া উদ্যান। কথাটা জরুরি, কারণ বাগান আর জঙ্গল এক নয়। জঙ্গল আপনাআপনি গজায়, বাগান ভেবেচিন্তে সাজাতে হয়: সারি সারি গাছ, দেয়াল, ছায়া, আর যেখানে দরকার সেখানে পানির নালা। ছবিটা এমন কোনো মাঠের নয়, যা হঠাৎ সবুজ হয়ে গেছে। এ এমন জমির ছবি, যা উদ্দেশ্য নিয়ে গোছানো, যেভাবে যত্নশীল মালিক তার প্রিয় জমিটুকু গুছিয়ে রাখে।"
          },
          {
            "en": "There is a quiet weight in the word itself. Jannat is the same word the Qur'an uses for the Garden promised in the life to come. The orchard on this dead earth is not that Garden, and the commentators do not conflate them; they keep to basatin, the orchards of this world. But a reader who knows both uses cannot miss the echo. The green that springs from dead ground is a small, perishable sample of a greater and lasting one, set here to be eaten now and remembered later.",
            "bn": "শব্দটার ভেতরেই একটা নিঃশব্দ ভার আছে। পরকালে যে জান্নাতের ওয়াদা, কুরআন তার জন্যও এই একই শব্দ ব্যবহার করে। এই মরা যমীনের বাগান সেই জান্নাত নয়, আর তাফসীরকারেরাও দুটোকে মিশিয়ে ফেলেন না; তাঁরা বাসাতীন, অর্থাৎ দুনিয়ার বাগানের ব্যাখ্যাতেই থাকেন। তবু যে পাঠক শব্দটির দুই ব্যবহারই জানেন, তিনি প্রতিধ্বনিটা না শুনে পারেন না। মরা মাটি থেকে জেগে ওঠা এই সবুজ এক বড় আর চিরস্থায়ী সবুজের ছোট্ট, নশ্বর নমুনা। আল্লাহ তা এখানে রেখেছেন, যেন এখন খাওয়া যায় আর পরে মনে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Springs Threaded Through the Roots",
          "bn": "শিকড় বেয়ে বয় ঝর্ণা"
        },
        "p": [
          {
            "en": "Then the verse turns to the water: wa-fajjarna fiha mina al-'uyun, and We caused springs to burst forth within it. At-Tabari explains the verb plainly, anba'na min 'uyun al-ma', We made springs of water well up. Al-Muyassar adds the purpose in a word: springs that give it drink, that irrigate it. The garden has been planted, and now the verse shows the one thing a garden cannot do for itself. Trees cannot summon their own water. It has to rise to them.",
            "bn": "এরপর আয়াত ফেরে পানির দিকে: ওয়া ফাজ্জারনা ফীহা মিনাল উয়ূন, আর আমি তার ভেতরে ঝর্ণা ফাটিয়ে বের করি। তাবারী ক্রিয়াটির সোজা ব্যাখ্যা দেন: আম্বা'না মিন উয়ূনিল মা', অর্থাৎ আমি পানির ঝর্ণা উৎসারিত করি। মুয়াসসার এক কথায় উদ্দেশ্যটাও জুড়ে দেন: এমন ঝর্ণা, যা বাগানকে পান করায়, সেচ দেয়। বাগান লাগানো হয়ে গেছে। এবার আয়াত দেখায় এমন একটি কাজ, যা বাগান নিজে কিছুতেই করতে পারে না। গাছ নিজের পানি নিজে ডেকে আনতে পারে না। পানিকেই উঠে আসতে হয় তার কাছে।"
          },
          {
            "en": "Ibn Kathir fills in the picture. He reads the springs as rivers set coursing, anharan sarihatan, to the very places where they are needed. Al-Qurtubi notes the same nearness from the other side: the springs, he says, are made to burst forth inside the orchards themselves, fi al-basatin. So the water is not stranded at the edge of the land for someone to haul inward. It rises where the roots already are, delivered to the exact spot of the thirst.",
            "bn": "ইবন কাসীর ছবিটা পূর্ণ করেন। তাঁর ব্যাখ্যায় ঝর্ণাগুলো হলো বইয়ে দেওয়া নদী, আনহারান সারিহাতান, যা ঠিক সেসব জায়গায় পৌঁছায় যেখানে পানির দরকার। কুরতুবী অন্য দিক থেকে একই নৈকট্যের কথা বলেন: তাঁর মতে ঝর্ণাগুলো ফুটে বের হয় বাগানের ভেতরেই, ফিল বাসাতীন। তাই পানি জমির কিনারায় পড়ে থাকে না যে কাউকে বয়ে ভেতরে আনতে হবে। যেখানে শিকড় আগে থেকেই আছে, পানি সেখানেই ওঠে; ঠিক যেখানে তৃষ্ণা, সেখানে পৌঁছে যায়।"
          },
          {
            "en": "That is an engineering no farmer laid. A person can dig a channel once a spring exists, but he cannot decide where water will rise, nor seam the ground so it breaks open among the roots. The verse is careful to put this part of the work beyond the gardener. He may lead the water the last few steps; he did not place the source, nor fill it, nor aim it at his trees. The plumbing of the garden was installed before he arrived.",
            "bn": "এ এমন প্রকৌশল যা কোনো চাষি বসায়নি। ঝর্ণা থাকলে মানুষ একবার নালা কেটে নিতে পারে, কিন্তু পানি কোথায় উঠবে তা সে ঠিক করতে পারে না, শিকড়ের মাঝখানে মাটি চিরে দিতেও পারে না। আয়াত সাবধানে কাজের এই অংশটা বাগানির নাগালের বাইরে রাখে। শেষ কয়েক পা পানিকে সে হয়তো টেনে নেয়, কিন্তু উৎসটা সে বসায়নি, তা ভরেওনি, নিজের গাছের দিকে তাক করেও দেয়নি। বাগানের পানির ব্যবস্থা তার আসার আগেই বসানো হয়ে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Hands That Did Not Make It",
          "bn": "যে হাত এ বানায়নি"
        },
        "p": [
          {
            "en": "The next verse, 36:35, completes the thought and names the purpose: li-ya'kulu min thamarihi wa-ma 'amilat-hu aydihim, that they may eat of its fruit, though their hands did not make it. The garden was described, the water traced, and now comes the line that tells you how to hold all of it. Eat, yes; the fruit is for you. But the thing in your hand is not your manufacture. Ibn Kathir states it directly: all of this comes about by Allah's mercy, not by their own effort and labour and strength.",
            "bn": "পরের আয়াত, ৩৬:৩৫, ভাবনাটা পূর্ণ করে আর উদ্দেশ্যটা বলে দেয়: লিইয়া'কুলূ মিন সামারিহি ওয়া মা আমিলাতহু আয়দীহিম, অর্থাৎ যাতে তারা তার ফল খায়, অথচ তাদের হাত তা বানায়নি। বাগানের বর্ণনা হলো, পানির পথও দেখানো হলো। এবার আসে সেই কথা, যা বলে দেয় এই সবকিছুকে কোন চোখে দেখতে হবে। খান, অবশ্যই; ফল আপনার জন্যই। কিন্তু হাতের জিনিসটা আপনার বানানো নয়। ইবন কাসীর সোজাসুজি বলেন: এর সবটাই আসে আল্লাহর রহমতে, তাদের নিজেদের চেষ্টা, খাটুনি আর শক্তিতে নয়।"
          },
          {
            "en": "He does not leave the reading floating; he grounds it. This, Ibn Kathir reports, was the understanding of Ibn 'Abbas and Qatada, the early authorities who read ma 'amilat-hu aydihim as a flat denial that human hands produced the fruit. The force of it is not that work is worthless. A man really does plant the pit, prune the branch, guard the vine. The force is that none of his labour reaches the one thing that makes a garden a garden, which is the life inside it.",
            "bn": "তিনি এই ব্যাখ্যাকে ভাসিয়ে রাখেন না, এর ভিত্তিও দেখান। ইবন কাসীর জানান, ইবন আব্বাস আর কাতাদা, এই আদি মনীষীরাও এভাবেই বুঝেছেন: তাঁদের কাছে মা আমিলাতহু আয়দীহিম মানে সাফ কথা, ফল মানুষের হাতে তৈরি নয়। এর মানে এই নয় যে পরিশ্রমের কোনো দাম নেই। মানুষ তো সত্যিই বীজ পোঁতে, ডাল ছাঁটে, লতা পাহারা দেয়। আসল কথা হলো, তার কোনো খাটুনিই সেই জিনিসের নাগাল পায় না, যা বাগানকে বাগান বানায়: তার ভেতরের প্রাণ।"
          },
          {
            "en": "Picture the division of labour honestly. You can set a seed in soil, but you cannot command it to split and climb. You can water a trunk, but you cannot sweeten a grape or pack a date with flesh. Every step a human can take is a step of arranging what already lives; the living itself is handed to him. The verse is drawing a clean line through the work of a farmer, with his portion on one side and God's portion, the larger one, on the other.",
            "bn": "কার কাজ কতটুকু, একবার সৎভাবে ভেবে দেখুন। আপনি মাটিতে বীজ বসাতে পারেন, কিন্তু তাকে হুকুম দিতে পারেন না যে ফেটে উপরে ওঠো। গুঁড়িতে পানি ঢালতে পারেন, কিন্তু আঙুরে মিষ্টি ভরতে বা খেজুরে শাঁস জমাতে পারেন না। মানুষ যা-ই করুক, তা আগে থেকে জীবিত কিছুকে গুছিয়ে দেওয়া মাত্র; প্রাণটুকু আসে দান হয়ে। আয়াত চাষির কাজের মাঝখান দিয়ে একটা পরিষ্কার দাগ টানে: একপাশে তার ভাগ, অন্যপাশে আল্লাহর ভাগ, আর সেটাই অনেক বড়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight of One Word",
          "bn": "এক শব্দের ভার"
        },
        "p": [
          {
            "en": "There is an honest difference among the commentators here, and it turns on a single Arabic word: the ma in wa-ma 'amilat-hu aydihim. Read as a negation, it says their hands did not make it, the reading Ibn Kathir carries from Ibn 'Abbas and Qatada. But Ibn Kathir also reports that Ibn Jarir at-Tabari took the ma as a relative pronoun, meaning what, so the sense becomes: they eat of the fruit and of what their own hands have worked, that is, by planting the seed and tending the plant.",
            "bn": "এখানে তাফসীরকারদের মধ্যে সত্যিকারের একটা মতভেদ আছে, আর পুরোটাই একটি আরবি শব্দকে ঘিরে: ওয়া মা আমিলাতহু আয়দীহিম-এর 'মা'। একে না-বোধক ধরলে অর্থ দাঁড়ায়, তাদের হাত তা বানায়নি। ইবন কাসীর এই পাঠই ইবন আব্বাস আর কাতাদা থেকে বর্ণনা করেন। কিন্তু তিনি এটাও জানান যে ইবন জারীর তাবারী 'মা'-কে ধরেছেন 'যা' অর্থের সম্বন্ধবাচক শব্দ হিসেবে। তখন ভাবটা হয়: তারা খায় ফল থেকে, আর তাদের নিজেদের হাত যা খেটে করেছে তা থেকে, অর্থাৎ বীজ পুঁতে আর গাছের যত্ন নিয়ে।"
          },
          {
            "en": "Ibn Kathir notes that Ibn Jarir favoured this second reading and that it fits the recitation of Ibn Mas'ud. The two readings are kept as they stand, without this article settling between them. And they need no settling to leave gratitude intact. Whether the verse denies the human hand any share or grants it the small share of planting and tending, the sweetness, the growth and the life stay God's work in both. The call that follows, will you not give thanks, lands the same from either side.",
            "bn": "ইবন কাসীর উল্লেখ করেন, ইবন জারীর এই দ্বিতীয় পাঠটাকেই বেশি পছন্দ করতেন, আর তা ইবন মাসউদের কিরাতের সঙ্গেও মেলে। দুটি পাঠ যেমন আছে তেমনই রইল; এ লেখা তাদের মধ্যে রায় দিচ্ছে না। আর শুকরিয়া অটুট রাখতে রায়ের দরকারও নেই। আয়াত মানুষের হাতকে কোনো ভাগ না-ই দিক, কিংবা বীজ পোঁতা আর যত্নের ছোট্ট ভাগটুকু দিক, ফলের মিষ্টি, বেড়ে ওঠা আর প্রাণ দুই পাঠেই আল্লাহর কাজ। তাই পরের ডাক, 'তোমরা কি শুকরিয়া আদায় করবে না', যে পাঠই ধরুন, একইভাবে এসে লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Thanks It Asks",
          "bn": "যে শুকরিয়া আয়াত চায়"
        },
        "p": [
          {
            "en": "After the gift is laid out in full, the garden, the named fruits, the springs, the life no hand produced, the passage closes on a question rather than a command: afala yashkurun, will they not then give thanks. A question is sharper than an order. An order can be obeyed grudgingly; a question has to be answered, and the only honest answer, once you have seen whose work the fruit is, is yes. The verse is not demanding payment for the harvest. It is asking whether the obvious will be acknowledged.",
            "bn": "বাগান, নাম ধরে বলা ফল, ঝর্ণা, কোনো হাতে না-বানানো প্রাণ: দানের পুরো ছবি মেলে ধরার পর আয়াতাংশটি শেষ হয় হুকুমে নয়, প্রশ্নে: আফালা ইয়াশকুরূন, তবু কি তারা শুকরিয়া আদায় করবে না? প্রশ্ন হুকুমের চেয়ে ধারালো। হুকুম গাঁইগুঁই করেও মানা যায়, কিন্তু প্রশ্নের জবাব দিতেই হয়। আর ফলটা কার কাজ, তা দেখে ফেলার পর একমাত্র সৎ জবাব হলো: হ্যাঁ। আয়াত ফসলের দাম চাইছে না। শুধু জানতে চাইছে, এত স্পষ্ট জিনিসটা স্বীকার করা হবে কি না।"
          },
          {
            "en": "The Prophet (ﷺ) brought that acknowledgement down to the smallest scale it can take. Muslim records, from Anas ibn Malik, that Allah's Messenger (ﷺ) said Allah is pleased with His servant who eats a morsel of food and praises Him for it, or drinks a draught and praises Him for it (Sahih Muslim 2734). It carries the collector's highest grade, being set down in his Sahih. The verse points at whole orchards; the hadith shows that the thanks they call for is paid a mouthful at a time.",
            "bn": "নবী ﷺ এই স্বীকৃতিকে নামিয়ে আনলেন একেবারে ছোট্ট মাপে। মুসলিম আনাস ইবন মালিক থেকে বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: আল্লাহ সেই বান্দার উপর সন্তুষ্ট হন, যে এক লোকমা খাবার খেয়ে তাঁর প্রশংসা করে, কিংবা এক ঢোক পানি পান করে তাঁর প্রশংসা করে (সহীহ মুসলিম ২৭৩৪)। মুসলিম হাদিসটি তাঁর সহীহ গ্রন্থে রেখেছেন, তাই সংকলকের বিচারে এটি সর্বোচ্চ মানের। আয়াত দেখায় গোটা বাগান, আর হাদিস দেখায়, সেই বাগানের শুকরিয়া শোধ হয় এক এক লোকমায়।"
          },
          {
            "en": "That is a mercy in the size of it. A debt of gratitude for whole gardens would crush anyone who tried to pay it in one sum; no amount of thanks could ever match the gift. So the thanks is broken into bites. A word over the date, a word over the water, al-hamdu lillah at the lip of the cup, and the account is being kept. Gratitude at this scale is not a grand feeling summoned once a year but a habit worn into the ordinary motions of eating and drinking.",
            "bn": "এই ছোট মাপটাই আসলে রহমত। গোটা বাগানের শুকরিয়ার দেনা কেউ একবারে শোধ করতে চাইলে সেই ভারে পিষে যেত; কোনো শুকরিয়াই ওই দানের সমান হতে পারে না। তাই শুকরিয়াকে ভাগ করে দেওয়া হয়েছে লোকমায় লোকমায়। খেজুর মুখে দিতে একটা কথা, পানি খেতে একটা কথা, পেয়ালা ঠোঁটে ছোঁয়াতেই আলহামদুলিল্লাহ, আর হিসাবটা জমা হতে থাকে। এই মাপের শুকরিয়া বছরে একবার জাগিয়ে তোলা কোনো বড় আবেগ নয়। এ এক অভ্যাস, যা রোজকার খাওয়া-দাওয়ার সঙ্গে মিশে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Dead Earth Argues",
          "bn": "মরা মাটির সাক্ষ্য"
        },
        "p": [
          {
            "en": "There is a second thing this garden is doing, and the opening word of the passage names it. A sign for them, 36:33 begins, before the dead earth is ever revived. Ibn Kathir reads that sign as evidence of the Creator and of His perfect power to resurrect the dead: ground that was dry and lifeless, then stirred, swollen and sent up in every lovely kind of growth. The fruit you eat is provision; the dead earth that grew it is at the same time an argument for the Day you will be raised.",
            "bn": "এই বাগান আরও একটা কাজ করছে, আর আয়াতাংশের প্রথম কথাটাই তা বলে দেয়। মরা যমীন জীবিত হওয়ার কথা আসার আগেই ৩৬:৩৩ শুরু হয় এ কথায়: তাদের জন্য এক নিদর্শন। ইবন কাসীরের মতে এই নিদর্শন স্রষ্টার প্রমাণ, আর মৃতকে জীবিত করার তাঁর পূর্ণ ক্ষমতারও প্রমাণ: যে জমি ছিল শুকনো আর প্রাণহীন, তা নড়ে উঠল, ফুলে উঠল, আর নানা রকম সুন্দর ফসলে ভরে গেল। আপনি যে ফল খান, তা রিজিক। আর যে মরা মাটিতে তা ফলেছে, সেই মাটিই একই সঙ্গে সেই দিনের দলিল, যেদিন আপনাকে আবার জীবিত করে ওঠানো হবে।"
          },
          {
            "en": "This is why Ma'arif al-Qur'an said the one sign works in two directions at once, as a proof of power and as a favour received. The same hand that greens a dead field will raise a buried body; the gratitude owed for the fruit and the hope held for the resurrection rest on one and the same power. So the verse leaves a person with more than a full plate. It leaves him with a reason to thank, in every bite, the Lord who feeds the living now and will revive the dead later.",
            "bn": "এ কারণেই মাআরিফুল কুরআন বলেছিল, একই নিদর্শন একসঙ্গে দুই দিকে কাজ করে: এ ক্ষমতার প্রমাণ, আবার পাওয়া অনুগ্রহও। যে হাত মরা মাঠকে সবুজ করে, সেই হাতই কবরের দেহকে আবার ওঠাবে। ফলের জন্য যে শুকরিয়া পাওনা, আর পুনরুত্থান নিয়ে যে আশা, দুটোই দাঁড়িয়ে আছে একই শক্তির উপর। তাই আয়াত মানুষকে শুধু ভরা পাত দিয়ে ছেড়ে দেয় না। প্রতিটি লোকমায় সেই রবের শুকরিয়া আদায়ের কারণও দিয়ে যায়, যিনি এখন জীবিতদের খাওয়াচ্ছেন আর পরে মৃতদের জীবিত করবেন।"
          }
        ]
      }
    ]
  },
  "36:36": {
    "sections": [
      {
        "h": {
          "en": "The Answer to a Question",
          "bn": "একটি প্রশ্নের জবাব"
        },
        "p": [
          {
            "en": "The verses before this one are an argument from the ground up. 36:33 offers the dead earth as a sign: We gave it life and brought grain out of it, and from that they eat. 36:34 adds gardens of date palms and grapevines with springs made to burst forth in them. 36:35 states the purpose — that they may eat of its fruit, and their hands did not make it — and then asks: will they not then be grateful?",
            "bn": "এর আগের আয়াতগুলো একেবারে মাটি থেকে ধাপে ধাপে যুক্তি গড়ে তোলে। ৩৬:৩৩ মরা যমীনকে নিদর্শন হিসেবে সামনে আনে: আমি তাকে জীবিত করেছি, তা থেকে শস্য বের করেছি, আর তা-ই তারা খায়। ৩৬:৩৪ যোগ করে খেজুর আর আঙুরের বাগান, যার ভেতরে ঝর্ণা উৎসারিত করা হয়েছে। ৩৬:৩৫ উদ্দেশ্যটা বলে দেয়: যাতে তারা তার ফল খায়, অথচ তাদের হাত তা বানায়নি। তারপর প্রশ্ন করে: তবু কি তারা শুকরিয়া আদায় করবে না?"
          }
        ]
      },
      {
        "h": {
          "en": "Azwaj",
          "bn": "আযওয়াজ"
        },
        "p": [
          {
            "en": "This verse answers that question with a word rather than a rebuttal: subhana alladhi khalaqa al-azwaja kullaha. Azwaj is the plural of zawj, and Arabic uses zawj for one of a pair, the counterpart — each of two is the zawj of the other, so the word carries a relationship rather than a quantity. Kullaha, all of them, then shuts the door on exceptions. The One being glorified is glorified for a pattern, not for a list of items.",
            "bn": "এই আয়াত সেই প্রশ্নের জবাব দেয় পাল্টা যুক্তিতে নয়, একটি শব্দে: সুবহানাল্লাযী খালাকাল আযওয়াজা কুল্লাহা। আযওয়াজ হলো যাওজের বহুবচন। আরবিতে যাওজ মানে জোড়ার একটি, যার একজন সঙ্গী আছে; দুটির প্রত্যেকটিই অপরটির যাওজ। তাই শব্দটি কোনো সংখ্যা বোঝায় না, বোঝায় একটি সম্পর্ক। এরপর কুল্লাহা, অর্থাৎ সবগুলোই, ব্যতিক্রমের দরজা বন্ধ করে দেয়। যাঁর পবিত্রতা ঘোষণা করা হচ্ছে, তা করা হচ্ছে একটি নকশার জন্য, কোনো জিনিসের তালিকার জন্য নয়।"
          },
          {
            "en": "The Quran states the same rule elsewhere in its widest form. 51:49 says that of every thing We created two mates, and the clause of purpose attached to it is about the hearer taking something in, not about being informed. 13:3 applies it to one visible class: from all the fruits He made in the earth two mates. The pairing is presented each time as something to be noticed and used, and each time the noticing is expected to end somewhere other than in a catalogue.",
            "bn": "কুরআন অন্য জায়গায় এই নিয়মটাই বলেছে সবচেয়ে ব্যাপক রূপে। ৫১:৪৯ বলে, প্রতিটি জিনিস আমি জোড়ায় জোড়ায় সৃষ্টি করেছি; আর এর সঙ্গে যে উদ্দেশ্য জুড়ে দেওয়া, তা শ্রোতার মনে কিছু গেঁথে যাওয়ার কথা, কেবল খবর জানানোর নয়। ১৩:৩ একই নিয়ম খাটায় চোখে দেখা যায় এমন একটি শ্রেণিতে: পৃথিবীতে তিনি সব রকম ফলের জোড়া বানিয়েছেন। প্রতিবারই জোড়ার কথাটা আসে এমন কিছু হিসেবে, যা খেয়াল করতে হবে, কাজে লাগাতে হবে। আর প্রতিবারই আশা থাকে, এই খেয়াল করা শুধু একটা তালিকা বানিয়ে থেমে যাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Columns in Plain Sight",
          "bn": "চোখের সামনের দুটি স্তম্ভ"
        },
        "p": [
          {
            "en": "The verse then lists three sources, and the first two are handed to the audience already opened. Mimma tunbitu al-ard, from what the earth grows, is exactly the material of 36:33 and 36:34 — the grain, the palms, the vines. The listener does not have to accept a claim about somewhere else; he has been standing in the evidence for three verses, and the verse simply gives the standing thing a name.",
            "bn": "এরপর আয়াত তিনটি উৎসের কথা বলে, আর প্রথম দুটি শ্রোতার হাতে আসে আগে থেকেই খোলা অবস্থায়। মিম্মা তুনবিতুল আরদ, অর্থাৎ যমীন যা উৎপন্ন করে: এ ঠিক সেই জিনিস, যার কথা ৩৬:৩৩ আর ৩৬:৩৪ আয়াতে ছিল, মানে শস্য, খেজুরগাছ, আঙুরলতা। দূরের কোনো জায়গা নিয়ে কোনো দাবি শ্রোতাকে মেনে নিতে হয় না। তিন আয়াত ধরে সে প্রমাণের মাঝখানেই দাঁড়িয়ে আছে। আয়াত শুধু চোখের সামনের সেই জিনিসটার একটা নাম দেয়।"
          },
          {
            "en": "Wa min anfusihim, and from themselves, turns the argument on the audience. Ibn Kathir glosses it as their being made male and female, and the Quran says as much directly: 53:45 speaks of the two mates, the male and the female, and 75:39 says He made of him the two mates, male and female. So the second source is not observed at a distance. The one being invited to glorify is himself half of an instance.",
            "bn": "ওয়া মিন আনফুসিহিম, আর তাদের নিজেদের মধ্য থেকে: এখানে এসে যুক্তিটা শ্রোতার নিজের দিকেই ঘুরে যায়। ইবনে কাসীর এর ব্যাখ্যা দেন এভাবে: তাদের পুরুষ আর নারী করে সৃষ্টি করা। কুরআনও সরাসরি একই কথা বলে। ৫৩:৪৫ আয়াতে আছে, তিনিই জোড়া সৃষ্টি করেছেন, পুরুষ ও নারী; আর ৭৫:৩৯ আয়াতে আছে, তিনি তা থেকে বানিয়েছেন জোড়া, পুরুষ ও নারী। তাই দ্বিতীয় উৎসটি দূর থেকে দেখার জিনিস নয়। যাকে তাসবীহর দিকে ডাকা হচ্ছে, সে নিজেই এমন এক জোড়ার অর্ধেক।"
          }
        ]
      },
      {
        "h": {
          "en": "And From What They Do Not Know",
          "bn": "আর যা তারা জানে না"
        },
        "p": [
          {
            "en": "The third item is wa mimma la ya'lamun, and from what they do not know. It is placed in the same grammatical slot as the first two, as though it were a third region of creation, and Ibn Kathir glosses it as kinds of creation of which they know nothing. But read the wording closely. The ignorance is ascribed to the audience by a verb — la ya'lamun, they do not know — not to the things by an adjective.",
            "bn": "তৃতীয়টি হলো ওয়া মিম্মা লা ইয়া'লামুন, আর যা তারা জানে না। ব্যাকরণে এটি বসেছে প্রথম দুটির একই জায়গায়, যেন সৃষ্টির তৃতীয় কোনো এলাকা। ইবনে কাসীর এর ব্যাখ্যা দেন: এমন সব সৃষ্টি, যাদের সম্পর্কে তারা কিছুই জানে না। কিন্তু শব্দগুলো খেয়াল করে পড়ুন। আয়াত না-জানাটা চাপিয়েছে শ্রোতাদের উপর, একটি ক্রিয়া দিয়ে: লা ইয়া'লামুন, তারা জানে না। জিনিসগুলোর উপর কোনো বিশেষণ দিয়ে নয়।"
          },
          {
            "en": "That is a real difference. The verse does not say there are pairs which are unknowable; it says there are pairs you do not know about. So the third item is not a gap left in the sentence for someone to fill in later and claim a point. It is a statement about the knowers, written into a declaration of glory by the One who does not share the limitation, and it stands whatever the state of anyone's learning.",
            "bn": "পার্থক্যটা সত্যিকারের। আয়াত বলছে না যে এমন জোড়া আছে, যা কখনো জানা সম্ভব নয়। বলছে, এমন জোড়া আছে, যেগুলোর খবর আপনারা জানেন না। তাই তৃতীয় বিষয়টি বাক্যে ফেলে রাখা এমন কোনো ফাঁকা ঘর নয়, যা পরে কেউ ভরে দিয়ে কৃতিত্ব দাবি করবে। এ হলো যারা জানে, তাদের সম্পর্কে একটি কথা। আর কথাটা মহিমা ঘোষণার ভেতরে বসিয়েছেন তিনি, যাঁর এই সীমাবদ্ধতা নেই। কার জ্ঞান কতদূর পৌঁছাল, তাতে এ কথার কিছু বদলায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Category That Only Widens",
          "bn": "যে শ্রেণিটি কেবল প্রশস্ত হয়"
        },
        "p": [
          {
            "en": "Whatever anyone comes to know moves out of the third item and into one of the first two, and yet the third does not shrink by the transfer. It was never a list with a length, and the more of creation a person learns to name, the wider the unnamed remainder opens in front of him. 17:44 does the same work with a different subject: there is not a thing that does not exalt Him with praise — but you do not understand their exalting.",
            "bn": "কেউ যা-ই জানতে পারুক, তা তৃতীয় ভাগ থেকে সরে প্রথম দুটির একটিতে চলে যায়; তবু তাতে তৃতীয় ভাগ ছোট হয় না। এটা কোনো দিনই নির্দিষ্ট দৈর্ঘ্যের তালিকা ছিল না। মানুষ সৃষ্টির যত বেশি জিনিসের নাম দিতে শেখে, নাম-না-জানা বাকিটা তার সামনে তত বড় হয়ে খুলে যায়। ১৭:৪৪ অন্য বিষয় নিয়ে একই কাজ করে: এমন কিছু নেই যা প্রশংসার সঙ্গে তাঁর তাসবীহ পড়ে না, কিন্তু তোমরা তাদের তাসবীহ বোঝো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why It Begins With Subhan",
          "bn": "কেন শুরু হয় 'সুবহান' দিয়ে"
        },
        "p": [
          {
            "en": "Subhana is glorification: a declaration that He is far above every deficiency. The verse puts it first, before any of the three sources, so the conclusion is spoken before the evidence. That order is why the third source can be admitted without embarrassment. A person whose response to creation is an inventory needs the inventory finished; a person whose response is tasbih does not, and can say aloud that part of the list is closed to him.",
            "bn": "সুবহানা মানে পবিত্রতা ঘোষণা: তিনি সব ত্রুটির বহু ঊর্ধ্বে। আয়াত এটাকে রেখেছে সবার আগে, তিন উৎসের কোনোটির কথা আসার আগেই। ফলে প্রমাণের আগেই সিদ্ধান্তটা বলা হয়ে যায়। এই ক্রমের কারণেই তৃতীয় উৎসটি কোনো সংকোচ ছাড়া মেনে নেওয়া যায়। সৃষ্টি দেখে যে শুধু তালিকা বানায়, তার তালিকাটা পূর্ণ হওয়া চাই। কিন্তু সৃষ্টি দেখে যার মুখে তাসবীহ আসে, তার সেই দরকার নেই। সে খোলাখুলি বলতে পারে, তালিকার একটা অংশ তার জন্য বন্ধ।"
          }
        ]
      }
    ]
  },
  "36:47": {
    "sections": [
      {
        "h": {
          "en": "Spend From What He Gave",
          "bn": "তিনি যা দিয়েছেন তা থেকে"
        },
        "p": [
          {
            "en": "Wa-idha qila lahum anfiqu mimma razaqakumu Allah: and when it is said to them, spend from what Allah has provided you. The verse opens with the same formula as 36:45, when it is said to them. There the call was to beware what lies ahead and behind; here it is to give. Ma'arif al-Qur'an reads the passage as two dialogues between believers and the disbelievers of Makkah, and notes that the reply to the first is left unsaid in 36:45, because the turning away named in 36:46 already supplies it.",
            "bn": "ওয়া ইযা কীলা লাহুম আনফিকূ মিম্মা রাযাকাকুমুল্লাহ: আর যখন তাদের বলা হয়, আল্লাহ তোমাদের যা রিযক দিয়েছেন তা থেকে খরচ করো। আয়াতের শুরু ৩৬:৪৫ আয়াতের মতো একই কথায়: যখন তাদের বলা হয়। সেখানে ডাক ছিল সামনের ও পেছনের বিপদ থেকে সাবধান হওয়ার, এখানে ডাক দান করার। মাআরিফুল কুরআন পুরো অংশটিকে দেখে মুমিন আর মক্কার কাফিরদের মধ্যে দুটি কথোপকথন হিসেবে। প্রথমটির জবাব ৩৬:৪৫ আয়াতে উহ্য রাখা হয়েছে, কারণ ৩৬:৪৬ আয়াতে যে মুখ ফিরিয়ে নেওয়ার কথা, সেটাই ওই জবাবের কাজ সেরে দেয়।"
          },
          {
            "en": "So the refusal here is no isolated lapse of generosity. It is the same turning away, now showing in the purse rather than in belief. Notice how the command is worded. It does not say spend from your wealth, but from what Allah has provided you. As-Sa'di glosses it as the provision Allah bestowed on you as a favour, which He could have taken from you had He willed. The instruction names the Giver before it asks for anything, and that will matter when the reply comes.",
            "bn": "তাই এখানকার অস্বীকার উদারতার কোনো বিচ্ছিন্ন ঘাটতি নয়। এ সেই একই মুখ ফিরিয়ে নেওয়া, এবার ঈমানের প্রশ্নে নয়, টাকার থলিতে দেখা দিয়েছে। হুকুমের ভাষাটাও লক্ষ করার মতো। বলা হয়নি, তোমাদের সম্পদ থেকে খরচ করো। বলা হয়েছে, আল্লাহ তোমাদের যা রিযক দিয়েছেন তা থেকে। সা'দী ব্যাখ্যা করেন: এ সেই রিযক, যা আল্লাহ অনুগ্রহ করে তোমাদের দিয়েছেন, আর তিনি চাইলে তা কেড়েও নিতে পারতেন। কিছু চাওয়ার আগেই হুকুমটি দাতার নাম নেয়। জবাব যখন আসবে, এ কথার ওজন তখন বোঝা যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Mouths, Which Poor",
          "bn": "কারা বলল, কাদের জন্য"
        },
        "p": [
          {
            "en": "Who were they? At-Tabari names them as the mushrikin, who denied Allah's oneness and worshipped others besides Him, and al-Baghawi has the believers addressing the disbelievers of Makkah. That is the frame of most commentaries fetched here. Al-Qurtubi records others. He reports from al-Hasan that it means the Jews, who had been commanded to feed the poor, and from Ibn Abbas that there were zanadiqa in Makkah who, when told to give to the needy, swore: will Allah make him poor and we feed him?",
            "bn": "এরা কারা? তাবারীর ভাষায় তারা মুশরিক, যারা আল্লাহর একত্ব অস্বীকার করত আর তাঁকে ছেড়ে অন্যের ইবাদত করত। বাগাভীর বর্ণনায় মুমিনরা কথাটা বলেছিল মক্কার কাফিরদের। এখানে যেসব তাফসীর দেখা হয়েছে, তার বেশিরভাগের কাঠামো এটাই। কুরতুবী আরও কিছু মত আনেন। হাসান থেকে তিনি বর্ণনা করেন, এখানে ইহুদিদের কথা বলা হয়েছে, যাদের গরিবকে খাওয়ানোর আদেশ দেওয়া হয়েছিল। ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, মক্কায় কিছু যিন্দীক ছিল। অভাবীকে দান করতে বললে তারা কসম খেয়ে বলত: আল্লাহ তাকে গরিব বানাবেন, আর আমরা তাকে খাওয়াব?"
          },
          {
            "en": "He closes with one more view: that the verse came down about a group of zanadiqa who did not believe in the Maker at all and mocked the believers with this saying, a view he credits to al-Qushayri and al-Mawardi. These are minority readings, and in al-Qurtubi's own list the idolaters appear as one view among them. The main frame remains the Makkan idolaters, whose turning away fills 36:45 and 36:46 and whose mockery of the promise follows in 36:48.",
            "bn": "শেষে কুরতুবী আরেকটি মত আনেন: আয়াতটি নাযিল হয়েছিল একদল যিন্দীকের ব্যাপারে, যারা স্রষ্টাকেই বিশ্বাস করত না, আর এই কথা বলে মুমিনদের ঠাট্টা করত। মতটি তিনি কুশাইরী ও মাওয়ার্দীর বরাতে উল্লেখ করেন। এগুলো সংখ্যালঘু মত। কুরতুবীর নিজের তালিকায় মুশরিকদের কথাও আসে এসব মতের একটি হিসেবে। তবু মূল কাঠামো মক্কার মূর্তিপূজারীরাই। ৩৬:৪৫ ও ৩৬:৪৬ আয়াতে তাদেরই মুখ ফিরিয়ে নেওয়ার কথা, আর ৩৬:৪৮ আয়াতে তাদেরই প্রতিশ্রুতি নিয়ে বিদ্রুপ।"
          },
          {
            "en": "What was asked also differs. At-Tabari has them told to pay what Allah had made due to the needy and poor among them. Ibn Kathir speaks of the poor and needy among the Muslims, and reads to those who believe as also meaning about them. Al-Baghawi and al-Qurtubi give a sharper detail: the believers asked them to spend from the share of crops and cattle they themselves claimed was Allah's, the share named in 6:136. Their own religious claim was held up to them.",
            "bn": "ঠিক কী চাওয়া হয়েছিল, সে বিষয়েও বর্ণনা ভিন্ন। তাবারীর মতে তাদের বলা হয়েছিল, নিজেদের মধ্যকার অভাবী ও মিসকিনদের যে হক আল্লাহ নির্ধারণ করেছেন, তা আদায় করো। ইবন কাসীর বলেন মুসলিমদের মধ্যকার গরিব ও অভাবীদের কথা, আর 'মুমিনদের বলল' কথাটার অর্থ তিনি এও করেন যে মুমিনদের সম্পর্কে বলল। বাগাভী ও কুরতুবী আরও সূক্ষ্ম বিবরণ দেন। মুমিনরা বলেছিল, ফসল আর গবাদিপশুর যে অংশকে তোমরা নিজেরাই আল্লাহর বলে দাবি করো, তা থেকেই খরচ করো। এ সেই অংশ, যার কথা ৬:১৩৬ আয়াতে আছে। তাদের নিজেদের ধর্মীয় দাবিই তাদের সামনে তুলে ধরা হচ্ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Faith's Words in Mocking Mouths",
          "bn": "ঠাট্টার মুখে ঈমানের ভাষা"
        },
        "p": [
          {
            "en": "Then the reply: a-nut'imu man law yasha'u Allahu at'amahu, shall we feed someone whom Allah, had He willed, would have fed? Al-Qurtubi explains where the phrase came from. The disbelievers had heard the believers say that the Provider is Allah, and tie events to His will: had Allah willed He would have enriched this man, had Allah willed it would be so. They threw that language back at the believers in mockery. Al-Baghawi and al-Qurtubi both gloss nut'imu, we feed, as narzuqu, we provide for.",
            "bn": "এরপর জবাব: আনুত'ইমু মান লাও ইয়াশাউল্লাহু আত'আমাহু, আমরা কি এমন লোককে খাওয়াব, আল্লাহ চাইলে যাকে নিজেই খাওয়াতেন? কথাটা কোথা থেকে এল, কুরতুবী তা ব্যাখ্যা করেন। কাফিররা মুমিনদের মুখে শুনেছিল যে রিযকদাতা আল্লাহ, আর সবকিছু তাঁর ইচ্ছার সঙ্গে বাঁধা: আল্লাহ চাইলে অমুককে ধনী করতেন, আল্লাহ চাইলে এমনটা হত। সেই ভাষাই তারা ঠাট্টা করে মুমিনদের দিকে ছুড়ে দিল। বাগাভী ও কুরতুবী দুজনেই নুত'ইমু, অর্থাৎ আমরা খাওয়াব, শব্দটির ব্যাখ্যা করেন নারযুকু দিয়ে, মানে আমরা রিযক দেব।"
          },
          {
            "en": "Ibn Kathir gives the claim its most pious-sounding form: had Allah wished, He would have made them independent and fed them from His provision, so we are only agreeing with Allah's will about them. The Muyassar and as-Sa'di both call them muhtajjin, men arguing from a proof, and as-Sa'di names the proof: the divine will. Al-Qurtubi adds another way they may have meant it: if Allah provided for us, He is able to provide for you, so why look to us?",
            "bn": "ইবন কাসীর দাবিটাকে তুলে ধরেন তার সবচেয়ে দ্বীনদারি চেহারায়: আল্লাহ চাইলে এদের অভাবমুক্ত করতেন, নিজের রিযক থেকে খাওয়াতেন। কাজেই এদের ব্যাপারে আমরা তো আল্লাহর ইচ্ছার সঙ্গেই একমত হচ্ছি। মুয়াসসার ও সা'দী দুজনেই তাদের বলেন মুহতাজ্জীন, অর্থাৎ দলিল দেখিয়ে তর্ককারী। সা'দী দলিলটার নামও বলে দেন: আল্লাহর ইচ্ছা। কুরতুবী আরেকটি সম্ভাব্য অর্থ আনেন। তারা হয়তো বোঝাতে চেয়েছিল: আল্লাহ যদি আমাদের রিযক দিয়ে থাকেন, তোমাদেরও দিতে পারেন। তাহলে আমাদের দিকে তাকিয়ে আছ কেন?"
          },
          {
            "en": "Ma'arif al-Qur'an points to the irony. These same people acknowledged that Allah sends down water and revives the earth, as 29:63 records them saying when asked. Their quarrel was never with His being the Provider, only with what that belief asked of them. In Ma'arif's paraphrase the sarcasm runs: you say Allah sustains all creation, yet He gave these nothing, so why should we? They had made His generosity the reason for their own lack of it.",
            "bn": "মাআরিফুল কুরআন এখানকার পরিহাসটা ধরিয়ে দেয়। এই লোকেরাই মানত যে আকাশ থেকে পানি নামিয়ে মরা মাটিকে জীবিত করেন আল্লাহ। ২৯:৬৩ আয়াতে জিজ্ঞেস করা হলে তারা এ কথাই বলে। আল্লাহ রিযকদাতা, এ নিয়ে তাদের কোনো বিরোধ ছিল না। বিরোধ ছিল সেই বিশ্বাস তাদের কাছে যা দাবি করে, তা নিয়ে। মাআরিফের ভাষ্যে বিদ্রুপটা এরকম: তোমরা বলো আল্লাহ গোটা সৃষ্টিকে রিযক দেন, অথচ এদের তিনি কিছুই দেননি, তাহলে আমরা দেব কেন? তাঁর দানশীলতাকেই তারা নিজেদের কৃপণতার কারণ বানিয়ে নিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A True Sentence, a False Proof",
          "bn": "সত্য বাক্য, মিথ্যা দলিল"
        },
        "p": [
          {
            "en": "Al-Qurtubi puts the whole case in a single line: they spoke the truth in saying that had Allah willed He would have fed them, but they lied in the argument they drew from it. He sets two other places beside it. In 6:148 the idolaters say that had Allah willed they would not have associated partners with Him. In 63:1 the hypocrites testify that the Prophet (ﷺ) is Allah's Messenger, and Allah, who knows he is, bears witness that they are liars. Words can be true while their use is false.",
            "bn": "কুরতুবী পুরো বিষয়টা এক বাক্যে বলে দেন: আল্লাহ চাইলে খাওয়াতেন, এ কথায় তারা সত্য বলেছে, কিন্তু এ থেকে যে যুক্তি দাঁড় করিয়েছে, তাতে মিথ্যা বলেছে। এর পাশে তিনি আরও দুটি জায়গা রাখেন। ৬:১৪৮ আয়াতে মুশরিকরা বলে, আল্লাহ চাইলে আমরা শিরক করতাম না। ৬৩:১ আয়াতে মুনাফিকরা সাক্ষ্য দেয় যে নবী ﷺ আল্লাহর রাসূল। আল্লাহ জানেন তিনি সত্যিই তাঁর রাসূল, তবু তিনি সাক্ষ্য দেন যে মুনাফিকরা মিথ্যাবাদী। কথা সত্য হতে পারে, অথচ সেই কথার ব্যবহার মিথ্যা।"
          },
          {
            "en": "As-Sa'di calls the reply a sign of their great ignorance, or of a feigned ignorance that would cost them dearly. His reason is a principle: the divine will is never a proof for anyone who disobeys. Whatever Allah wills happens and whatever He does not will does not, yet He has enabled His servants and given them strength to do what is commanded and avoid what is forbidden. When they leave a command undone, as-Sa'di says, it is their own choice, not compulsion or force.",
            "bn": "সা'দী এই জবাবকে বলেন তাদের ভয়াবহ অজ্ঞতার প্রমাণ, কিংবা এমন ভান করা অজ্ঞতার, যার পরিণাম খুব খারাপ। কারণ হিসেবে তিনি একটা মূলনীতি বলেন: আল্লাহর ইচ্ছা কোনো নাফরমানের জন্য কখনো দলিল হতে পারে না। আল্লাহ যা চান তা হয়, যা চান না তা হয় না। তবু তিনি বান্দাদের সামর্থ্য দিয়েছেন, হুকুম পালন আর নিষেধ এড়িয়ে চলার শক্তি দিয়েছেন। সা'দী বলেন, তাই তারা যখন হুকুম ছেড়ে দেয়, সেটা তাদের নিজেদের বাছাই, কোনো জবরদস্তি বা চাপ নয়।"
          },
          {
            "en": "Al-Qurtubi answers the other form of the argument, why should we provide when Allah can, just as plainly. When Allah gives a servant wealth and then makes a right due within it, it is as though He has taken that portion back out of his hands, so there is nothing left to object to. The giver is not stepping into Allah's place as Provider. He is passing on what was never fully his to keep. The command and the will are not rivals.",
            "bn": "আল্লাহ যখন পারেন, তখন আমরা কেন দেব, যুক্তির এই রূপের জবাবও কুরতুবী দেন সোজা ভাষায়। আল্লাহ যখন কোনো বান্দাকে সম্পদ দেন, তারপর তাতে কোনো হক ফরয করে দেন, তখন যেন তিনি সেই অংশটুকু তার হাত থেকে ফিরিয়েই নিলেন। কাজেই আপত্তির আর কিছু থাকে না। যে দান করে, সে আল্লাহর রিযকদাতা হওয়ার জায়গায় গিয়ে বসছে না। যা কখনো পুরোপুরি তার নিজের রাখার জন্য ছিল না, সে শুধু তা অন্যের হাতে পৌঁছে দিচ্ছে। হুকুম আর ইচ্ছা পরস্পরের প্রতিদ্বন্দ্বী নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Provision That Travels Through Hands",
          "bn": "হাত ঘুরে পৌঁছানো রিযক"
        },
        "p": [
          {
            "en": "Al-Baghawi widens the lens beyond Makkah. This, he says, is what misers cling to: we will not give to someone Allah has deprived. He calls the claim false. Allah made some of His creatures rich and others poor as a trial. He kept the world from the poor man not out of stinginess, and told the rich man to spend not because He needed his wealth, but to test the rich through the poor, in the share He assigned the poor within the rich man's wealth.",
            "bn": "বাগাভী দৃষ্টিটাকে মক্কার বাইরেও ছড়িয়ে দেন। তিনি বলেন, কৃপণেরা এ কথাই আঁকড়ে ধরে: আল্লাহ যাকে বঞ্চিত করেছেন, আমরা তাকে দেব না। তাঁর মতে এ দাবি বাতিল। পরীক্ষার জন্যই আল্লাহ সৃষ্টির কাউকে ধনী আর কাউকে গরিব বানিয়েছেন। গরিবকে দুনিয়া থেকে বঞ্চিত রেখেছেন কৃপণতার কারণে নয়। ধনীকে খরচ করতে বলেছেন তার সম্পদের প্রয়োজনে নয়। বরং ধনীর সম্পদে গরিবের জন্য যে অংশ তিনি নির্ধারণ করেছেন, তা দিয়ে গরিবের মাধ্যমে ধনীকে পরীক্ষা করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an develops the same thought. Allah could deliver everyone's sustenance directly, and among animals and insects that is how it reaches them, from nature's own spread. Among people He makes some the means by which provision reaches others, so that the one who spends earns the reward and the one who receives learns gratitude to the giver. The rich need the labour of the poor as surely as the poor need the money of the rich, so that, Ma'arif concludes, nobody is doing anybody a favour.",
            "bn": "মাআরিফুল কুরআন একই ভাবনাকে আরও খুলে বলে। আল্লাহ সবার রিযক সরাসরি পৌঁছে দিতে পারেন, আর পশুপাখি ও কীটপতঙ্গের বেলায় প্রকৃতির নিজস্ব দস্তরখান থেকে তা এভাবেই পৌঁছায়। মানুষের বেলায় তিনি কাউকে কাউকে বানিয়েছেন অন্যের কাছে রিযক পৌঁছানোর মাধ্যম। এতে যে খরচ করে সে সওয়াব পায়, আর যে পায় সে দাতার প্রতি কৃতজ্ঞ হতে শেখে। গরিবের যেমন ধনীর টাকার দরকার, ধনীরও তেমনি গরিবের শ্রমের দরকার। তাই মাআরিফের উপসংহার, আসলে কেউ কারও উপর দয়া করছে না।"
          },
          {
            "en": "Al-Qurtubi also records a report, introduced only with it is said and carrying no chain, that Abu Bakr used to feed poor Muslims, and Abu Jahl asked him whether he claimed Allah was able to feed them. Yes, he said. Then why has He not? He has tried some people with poverty and some with wealth, Abu Bakr replied, commanding the poor to be patient and the rich to give. The report ends that the verse then came down. It is a tafsir narrative, not a hadith, and is not treated here as an established occasion of revelation.",
            "bn": "কুরতুবী আরও একটি বর্ণনা উল্লেখ করেন, শুধু 'বলা হয়' দিয়ে, কোনো সনদ ছাড়া। আবু বকর (রাঃ) গরিব মুসলিমদের খাওয়াতেন। আবু জাহল তাঁকে জিজ্ঞেস করল, তুমি কি মনে কর আল্লাহ এদের খাওয়াতে সক্ষম? তিনি বললেন, হ্যাঁ। তাহলে খাওয়ান না কেন? আবু বকর (রাঃ) জবাব দিলেন: তিনি কিছু মানুষকে অভাব দিয়ে আর কিছু মানুষকে প্রাচুর্য দিয়ে পরীক্ষা করেন। গরিবকে সবরের আদেশ দিয়েছেন, ধনীকে দান করার। বর্ণনাটি শেষ হয় এ কথায় যে তখন আয়াতটি নাযিল হল। এটা তাফসীরের বর্ণনা, হাদীস নয়, আর এখানে একে নাযিলের প্রতিষ্ঠিত প্রেক্ষাপট হিসেবে ধরা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Voice Says Clear Error",
          "bn": "স্পষ্ট ভ্রান্তি, কার মুখে"
        },
        "p": [
          {
            "en": "The closing clause, in antum illa fi dalalin mubin, you are only in clear error, leaves a question: whose words are these? At-Tabari gives two ways. In the first, the disbelievers are still speaking to the believers: in telling us to spend on your poor from what Allah provided, you are only straying from the truth. He calls this the more fitting of the two. In the second, these are Allah's words to the idolaters: in saying shall we feed whom Allah would have fed, it is you who are in clear error.",
            "bn": "শেষ অংশ, ইন আনতুম ইল্লা ফী দালালিম মুবীন, তোমরা তো স্পষ্ট ভ্রান্তিতেই আছ। এখানে প্রশ্ন ওঠে: কথাগুলো কার? তাবারী দুটি দিক উল্লেখ করেন। প্রথম দিক অনুযায়ী কাফিররাই মুমিনদের উদ্দেশে কথা বলে চলেছে: আল্লাহর দেওয়া রিযক থেকে তোমাদের গরিবদের জন্য খরচ করতে বলে তোমরা সত্য থেকে সরে গেছ। তাবারী দুটির মধ্যে এটিকেই বেশি উপযুক্ত বলেন। দ্বিতীয় দিক অনুযায়ী এটা মুশরিকদের প্রতি আল্লাহর বাণী: আল্লাহ চাইলে যাকে খাওয়াতেন তাকে কি আমরা খাওয়াব, এ কথা বলে তোমরাই স্পষ্ট ভ্রান্তিতে আছ।"
          },
          {
            "en": "The others divide along that line. Ibn Kathir takes it as the disbelievers' words, in your telling us to do this, and cites at-Tabari's second possibility only to add that it is open to question. Al-Baghawi, as-Sa'di and the Muyassar also hear the disbelievers, al-Baghawi glossing the error as following Muhammad (ﷺ) and leaving their ways. Al-Qurtubi lists three voices: the disbelievers, a sense he credits to Muqatil and others; the Prophet's Companions answering them; or Allah answering them. The disagreement stands, names attached.",
            "bn": "বাকি তাফসীরকারেরাও এই দুই মতে ভাগ হয়ে যান। ইবন কাসীর একে কাফিরদের কথা হিসেবে নেন, অর্থাৎ আমাদের এমন আদেশ দিয়ে তোমরাই ভুল করছ। তাবারীর দ্বিতীয় সম্ভাবনাটি তিনি উল্লেখ করেন, তবে যোগ করেন যে তাতে আপত্তির জায়গা আছে। বাগাভী, সা'দী ও মুয়াসসারও এখানে কাফিরদের কণ্ঠই শোনেন। বাগাভীর ব্যাখ্যায় ভ্রান্তিটা হলো মুহাম্মাদ ﷺ-এর অনুসরণ আর তাদের পথ ছেড়ে দেওয়া। কুরতুবী তিনটি কণ্ঠের কথা বলেন: কাফিরদের, যে অর্থ তিনি মুকাতিল ও অন্যদের বরাতে আনেন; নবী ﷺ-এর সাহাবীদের, যাঁরা তাদের জবাব দিচ্ছেন; কিংবা আল্লাহর, যিনি তাদের জবাব দিচ্ছেন। মতভেদটা রয়েই যায়, কে কোন মত দিয়েছেন তা সহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Angels at Every Dawn",
          "bn": "প্রতি ভোরে দুই ফেরেশতা"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a sound hadith to it, and the Abu Bakr report above is not a hadith. There is a general narration on the very choice the verse describes, though it is not attached to this verse. Al-Bukhari records from Abu Huraira that the Prophet (ﷺ) said: \"Every day two angels come down from Heaven and one of them says, 'O Allah! Compensate every person who spends in Your Cause,' and the other (angel) says, 'O Allah! Destroy every miser.'\" (Sahih al-Bukhari 1442). It stands in his Sahih.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো সহীহ হাদিস যুক্ত করেনি, আর উপরের আবু বকর (রাঃ)-এর বর্ণনাও হাদিস নয়। তবে আয়াত যে বাছাইয়ের কথা বলে, ঠিক সেই বিষয়ে একটি সাধারণ হাদিস আছে, যদিও তা এ আয়াতের সঙ্গে যুক্ত নয়। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: \"প্রতিদিন আসমান থেকে দুজন ফেরেশতা নেমে আসেন। তাঁদের একজন বলেন, হে আল্লাহ, আপনার পথে যে-ই খরচ করে, তাকে বদলা দিন। অন্যজন বলেন, হে আল্লাহ, প্রত্যেক কৃপণকে ধ্বংস করুন।\" (সহীহ বুখারী ১৪৪২)। হাদিসটি তাঁর সহীহ গ্রন্থে আছে।"
          },
          {
            "en": "The hadith speaks in the same pairing as the verse: someone who spends and someone who withholds, both under Allah's will and both addressed by it. The disbelievers in 36:47 argued that His will made their giving pointless. The angels' prayer runs the other way, asking that same will to replace what the spender gives and to bring loss on the one who holds back. Allah's will does not cancel the command to give. It stands behind the giver.",
            "bn": "হাদীসটি আয়াতের মতোই জোড়ায় কথা বলে: একজন খরচ করে, আরেকজন আটকে রাখে। দুজনেই আল্লাহর ইচ্ছার অধীন, দুজনের উদ্দেশেই কথা। ৩৬:৪৭ আয়াতের কাফিররা যুক্তি দিয়েছিল যে তাঁর ইচ্ছাই তাদের দানকে অর্থহীন করে দেয়। ফেরেশতাদের দোয়া চলে উল্টো দিকে। তাঁরা সেই একই ইচ্ছার কাছে চান, দাতা যা দেয় তার বদলা দেওয়া হোক, আর যে আটকে রাখে তার ক্ষতি হোক। আল্লাহর ইচ্ছা দান করার হুকুমকে বাতিল করে না। বরং দাতার পেছনে দাঁড়িয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Excuse Within Reach",
          "bn": "হাতের কাছের অজুহাত"
        },
        "p": [
          {
            "en": "One thing must be said plainly. The verse describes what the text describes: a particular group who mocked the call to feed the poor and twisted Allah's decree into an excuse. It licenses nothing against any living person or community. It is no tool for labelling those who will not give to one's own cause, nor for judging anyone's poverty or wealth. Its claim is on the reader, and on the shape of the reader's own excuses.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: একটি নির্দিষ্ট দল, যারা গরিবকে খাওয়ানোর ডাক নিয়ে ঠাট্টা করেছিল আর আল্লাহর তাকদীরকে অজুহাত বানিয়েছিল। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। নিজের পছন্দের কাজে যারা দান করে না, তাদের গায়ে তকমা লাগানোর হাতিয়ার এটা নয়। কারও অভাব বা প্রাচুর্য বিচার করার উপায়ও নয়। এর দাবি পাঠকের উপর, তার নিজের অজুহাতগুলোর চেহারার উপর।"
          },
          {
            "en": "And that excuse sits closer than it looks. Few would say aloud that Allah should have fed the hungry Himself. It comes in softer forms: someone else will help, they will manage, what I give will change nothing. Each borrows a little of the same logic, that the need in front of me is not my concern because it lies within Allah's power. The verse answers with its first words. What you hold is what Allah has provided you, and the command to spend came with it.",
            "bn": "আর সেই অজুহাত যতটা দূরে মনে হয়, আসলে ততটা নয়। আল্লাহরই উচিত ছিল ক্ষুধার্তকে খাওয়ানো, এ কথা খুব কম মানুষ মুখ ফুটে বলবে। কিন্তু তা আসে নরম চেহারায়: অন্য কেউ সাহায্য করবে, ওরা চালিয়ে নেবে, আমি দিলে কী আর বদলাবে। প্রতিটির মধ্যেই সেই একই যুক্তির খানিকটা ধার করা আছে: সামনের প্রয়োজনটা আল্লাহর ক্ষমতার মধ্যে, তাই আমার মাথাব্যথা নয়। আয়াত এর জবাব দেয় শুরুর কথাগুলো দিয়েই। আপনার হাতে যা আছে, তা আল্লাহর দেওয়া রিযক, আর খরচ করার হুকুম তার সঙ্গেই এসেছে।"
          }
        ]
      }
    ]
  },
  "36:51": {
    "sections": [
      {
        "h": {
          "en": "Breath Into the Horn",
          "bn": "শিঙ্গায় ফুঁকের মুহূর্ত"
        },
        "p": [
          {
            "en": "Wa-nufikha fi aṣ-ṣūr: and the Horn was blown. The verse is ten words long and opens with a verb that names no blower and gives no hour, telling an event still to come as though it were already done. It follows straight on from 36:49 and 36:50, where a cry seizes people in the middle of their quarrels and leaves them unable to make a bequest or reach their families. There the scene was the end of life. Here, without any bridge, it turns to life's return.",
            "bn": "ওয়া নুফিখা ফিস সূর: আর শিঙ্গায় ফুঁ দেওয়া হলো। পুরো আয়াত দশটি শব্দের। প্রথম ক্রিয়াতেই কে ফুঁ দিল তার নাম নেই, কখন দিল তারও উল্লেখ নেই। যা এখনো ঘটেনি, তাকে বলা হয়েছে যেন ঘটে গেছে। আয়াতটি সরাসরি ৩৬:৪৯ ও ৩৬:৫০ আয়াতের পরে আসে। সেখানে এক প্রচণ্ড আওয়াজ মানুষকে ঝগড়ার মাঝখানে ধরে ফেলে, তারা না পারে ওসিয়ত করতে, না পারে পরিবারের কাছে ফিরতে। সেখানে ছবি ছিল জীবনের শেষের। এখানে কোনো সেতু ছাড়াই ছবি বদলে যায় জীবনের ফিরে আসায়।"
          },
          {
            "en": "What is aṣ-ṣūr? Al-Muyassar names it simply as al-qarn, the horn. Al-Qurtubi records a different reading from Qatada, who took aṣ-ṣūr as the plural of ṣūra, a form, so that the blowing is into the forms and the souls; he notes that Abu Hurayra (RA) is reported to have read the word as aṣ-ṣuwar. He then quotes an-Nahhas: the sound view is that aṣ-ṣūr, with the waw unvowelled, is the horn, established by instruction from the Messenger of Allah (peace be upon him) and well known in the speech of the Arabs.",
            "bn": "সূর আসলে কী? মুয়াসসার সোজাসুজি বলে, সূর হলো কারন, অর্থাৎ শিঙ্গা। কুরতুবী কাতাদার আরেকটি ব্যাখ্যা উল্লেখ করেন। কাতাদা সূর শব্দকে সূরা, মানে আকৃতি, এর বহুবচন ধরেছেন। তাহলে অর্থ দাঁড়ায়, ফুঁ দেওয়া হবে দেহের আকৃতিগুলোতে, আর রূহ তাতে ফিরে আসবে। কুরতুবী আরও জানান, আবু হুরায়রা (রাঃ) শব্দটি সুওয়ার পড়েছেন বলে বর্ণনা আছে। এরপর তিনি নাহহাসের কথা আনেন: সঠিক মত হলো, ওয়াও সাকিন দিয়ে সূর মানে শিঙ্গা। রাসূলুল্লাহ ﷺ থেকে এভাবেই জানা গেছে, আর আরবদের ভাষাতেও অর্থটি পরিচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Second Blast or Third",
          "bn": "দ্বিতীয় ফুঁ, নাকি তৃতীয়"
        },
        "p": [
          {
            "en": "Every commentator fetched for this verse agrees on what this blowing does: it raises the dead. At-Tabari says plainly that the blowing meant here is nafkhat al-baʿth, the blast of resurrection. As-Sa'di sets it against the earlier blowing: the first blowing is the blast of terror and death, and this is the blast of raising and spreading forth. Al-Muyassar calls it the second blowing, by which souls are returned to their bodies, and al-Baghawi calls it the last blowing, the blowing of resurrection.",
            "bn": "এ আয়াতের যত তাফসীর দেখা হয়েছে, এই ফুঁ কী ঘটায় সে বিষয়ে সবাই একমত: এতে মৃতরা জীবিত হয়ে ওঠে। তাবারী সোজা বলেন, এখানে উদ্দেশ্য নাফখাতুল বা'স, পুনরুত্থানের ফুঁ। সা'দী একে আগেরটির পাশে রেখে বোঝান। প্রথম ফুঁ ভয় আর মৃত্যুর, আর এটি ওঠানো ও ছড়িয়ে দেওয়ার। মুয়াসসার একে বলে দ্বিতীয় ফুঁ, যাতে রূহগুলো তাদের দেহে ফিরিয়ে দেওয়া হয়। বাগাভী বলেন, এটি শেষ ফুঁ, পুনরুত্থানের ফুঁ।"
          },
          {
            "en": "On the count they differ. Al-Qurtubi calls it the second blowing, for the new creation, and adds that he showed in Surat an-Naml that there are two blowings, not three, and that this very verse points to it. Ibn Kathir, writing on the same verse, calls it the third blast, the blast of raising and spreading forth from the graves. Both are named here because both wrote it down for this verse, and the weighing is theirs. What the verse itself fixes is the effect: a blowing, and at once the graves are empty.",
            "bn": "গণনায় এসে তাঁদের মত আলাদা হয়ে যায়। কুরতুবী একে বলেন দ্বিতীয় ফুঁ, নতুন সৃষ্টির ফুঁ। তিনি যোগ করেন, সূরা নামলে তিনি দেখিয়েছেন ফুঁ দুটি, তিনটি নয়, আর এই আয়াতও সে কথার দিকে ইঙ্গিত করে। ইবন কাসীর একই আয়াতের আলোচনায় একে বলেন তৃতীয় ফুঁ, কবর থেকে ওঠানো ও ছড়িয়ে দেওয়ার ফুঁ। দুজনের কথাই এখানে আনা হলো, কারণ দুজনই এই আয়াতের নিচে তা লিখেছেন। কোনটি ভারী, সে বিচার তাঁদের। আয়াত নিজে যা নিশ্চিত করে তা হলো ফল: ফুঁ পড়ল, আর সঙ্গে সঙ্গে কবরগুলো খালি।"
          }
        ]
      },
      {
        "h": {
          "en": "Forty of What",
          "bn": "চল্লিশ, কিন্তু কিসের"
        },
        "p": [
          {
            "en": "Al-Qurtubi also brings a report through al-Mubarak ibn Fadala from al-Hasan, who said that the Messenger of Allah (peace be upon him) said: between the two blowings are forty years; by the first Allah causes every living thing to die, and by the other He gives life to every dead thing. As al-Qurtubi gives the chain, no Companion stands between al-Hasan and the Prophet. It is a report carried in a tafsir, not a hadith this article can check against a collection, and no grading is offered for it here.",
            "bn": "কুরতুবী আরও একটি বর্ণনা আনেন, মুবারক ইবন ফাদালার সূত্রে হাসান থেকে। হাসান বলেন, রাসূলুল্লাহ ﷺ বলেছেন: দুই ফুঁয়ের মাঝে চল্লিশ বছর। প্রথমটি দিয়ে আল্লাহ প্রত্যেক জীবিতকে মৃত্যু দেবেন, আর অন্যটি দিয়ে প্রত্যেক মৃতকে জীবন দেবেন। কুরতুবী যে সনদ দিয়েছেন, তাতে হাসান আর নবী ﷺ-এর মাঝখানে কোনো সাহাবীর নাম নেই। এটি তাফসীরে বর্ণিত একটি রিওয়ায়াত। এমন হাদীস নয় যা এই লেখা কোনো হাদীসগ্রন্থের সঙ্গে মিলিয়ে দেখতে পেরেছে, তাই এখানে এর কোনো মান নির্ধারণ করা হচ্ছে না।"
          },
          {
            "en": "Al-Baghawi, for his part, writes forty years between the two blowings in his own words and names no source. So the figure travels through the commentaries, yet its unit is exactly what a sound narration declines to settle. In Sahih al-Bukhari, number 4935, Abu Hurayra (RA) reports that the Messenger of Allah (peace be upon him) said: Between the two sounds of the trumpet there will be forty. Someone asked him, forty days? He refused to reply. Forty months? He refused. Forty years? Again he refused to reply.",
            "bn": "বাগাভীও নিজের ভাষায় লেখেন, দুই ফুঁয়ের মাঝে চল্লিশ বছর, তবে কোনো সূত্রের নাম দেন না। সংখ্যাটা এভাবে তাফসীর থেকে তাফসীরে ঘুরেছে। অথচ তার একক কী, ঠিক সেটাই একটি সহীহ বর্ণনা স্থির করতে রাজি হয়নি। সহীহ বুখারী, হাদীস ৪৯৩৫-এ আবু হুরায়রা (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: দুই ফুঁয়ের মাঝে থাকবে চল্লিশ। কেউ তাঁকে জিজ্ঞেস করল, চল্লিশ দিন? তিনি উত্তর দিতে অস্বীকার করলেন। চল্লিশ মাস? তিনি অস্বীকার করলেন। চল্লিশ বছর? এবারও তিনি উত্তর দিলেন না।"
          },
          {
            "en": "The same narration goes on: then Allah will send down water from the sky, and the dead will grow as vegetation grows. Everything of a human being decays except one bone, the small bone at the base of the spine, and from it the creation will be put together on the Day of Resurrection. No tafsir fetched for this verse quotes it, so it is not attached to 36:51, though it speaks of the same two blowings. Its place in his Sahih is al-Bukhari's own mark of its soundness. Whatever Abu Hurayra's reason, he would not name the unit, and this article will not either.",
            "bn": "একই বর্ণনায় আছে: তারপর আল্লাহ আকাশ থেকে পানি নামাবেন, আর মৃতরা গজিয়ে উঠবে যেভাবে শাকসবজি গজায়। মানুষের দেহের সব কিছু পচে যায়, শুধু একটা হাড় ছাড়া। সেটা মেরুদণ্ডের একেবারে নিচের ছোট্ট হাড়, আর কিয়ামতের দিন সেখান থেকেই সৃষ্টিকে আবার জোড়া লাগানো হবে। এ আয়াতের যে তাফসীরগুলো দেখা হয়েছে তার কোনোটিতে বর্ণনাটি নেই। তাই এটি ৩৬:৫১ আয়াতের সঙ্গে যুক্ত নয়, যদিও কথা বলে সেই দুই ফুঁ নিয়েই। ইমাম বুখারী তাঁর সহীহ গ্রন্থে এটি রেখেছেন, আর সেটাই তাঁর দৃষ্টিতে এর সহীহ হওয়ার চিহ্ন। আবু হুরায়রা (রাঃ) যে কারণেই হোক এককটি বলেননি, এই লেখাও বলবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Graves in Two Dialects",
          "bn": "কবরের দুই উচ্চারণ"
        },
        "p": [
          {
            "en": "Fa-idha hum min al-ajdath: and at once they are, from the graves. At-Tabari gives ajdath as the plural of jadath, a grave, and narrates from Ibn 'Abbas and from Qatada that min al-ajdath means from the graves. He adds that the word has two forms: the people of al-'Aliya say jadath with a tha', and the people of as-Safila say jadaf with a fa'. Al-Qurtubi records that the verse was also read min al-ajdaf, a reading az-Zamakhshari mentions, while the more eloquent form is jadath.",
            "bn": "ফা ইযা হুম মিনাল আজদাস: আর তখনই তারা কবর থেকে। তাবারী বলেন, আজদাস শব্দটি জাদাসের বহুবচন, যার অর্থ কবর। তিনি ইবন আব্বাস (রাঃ) ও কাতাদা থেকে বর্ণনা করেন, মিনাল আজদাস মানে কবরগুলো থেকে। তিনি আরও জানান, শব্দটির দুই রকম উচ্চারণ আছে। আলিয়া অঞ্চলের লোকেরা বলে জাদাস, সা অক্ষর দিয়ে। আর সাফিলা অঞ্চলের লোকেরা বলে জাদাফ, ফা অক্ষর দিয়ে। কুরতুবী উল্লেখ করেন, আয়াতটি মিনাল আজদাফ রূপেও পড়া হয়েছে, যামাখশারী তা বর্ণনা করেছেন। তবে বেশি বিশুদ্ধ রূপ জাদাস।"
          },
          {
            "en": "The small word fa-idha carries more weight than the noun beside it. It marks a sudden arrival: and there they are. Between the blowing and the emerging the verse sets no interval, describes no gathering of limbs and no slow waking. Al-Muyassar fills the gap with a single clause: their souls are returned to their bodies, and there they are, coming out of their graves to their Lord in haste. The verse spends its few words on direction alone, from the graves and to their Lord, and leaves out everything in between.",
            "bn": "পাশের বিশেষ্যটির চেয়ে ছোট্ট ফা ইযা শব্দটির ভার বেশি। এ শব্দ বোঝায় হঠাৎ এসে হাজির হওয়া: আর ওই যে তারা! ফুঁ আর বেরিয়ে আসার মাঝে আয়াত কোনো বিরতি রাখেনি। হাড়গোড় জোড়া লাগার বর্ণনা নেই, ধীরে ঘুম ভাঙার ছবিও নেই। মুয়াসসার এক বাক্যে ফাঁকটুকু ভরে দেয়: রূহগুলো তাদের দেহে ফিরিয়ে দেওয়া হবে, আর তখনই তারা কবর থেকে বেরিয়ে দ্রুত তাদের রবের দিকে চলবে। আয়াত তার অল্প কটি শব্দ খরচ করেছে শুধু দিক বোঝাতে, কবর থেকে আর রবের দিকে। মাঝখানের সব কিছু সে বাদ রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Delivered From the Earth",
          "bn": "মাটির গর্ভ থেকে বেরোনো"
        },
        "p": [
          {
            "en": "Then the last word, yansilun. At-Tabari narrates from Ibn 'Abbas, and separately from Qatada, a gloss of a single word: yakhrujun, they come out. Al-Qurtubi gives the same gloss under the same two names and supports it with a line of Imru' al-Qays, fa-sulli thiyabi min thiyabiki tansuli, where the verb means to slip out and come away. From this, he says, a child is called nasl, offspring, because it comes out of its mother's womb.",
            "bn": "এরপর আয়াতের শেষ শব্দ, ইয়ানসিলূন। তাবারী ইবন আব্বাস (রাঃ) থেকে, আবার আলাদাভাবে কাতাদা থেকে, এর এক শব্দের ব্যাখ্যা বর্ণনা করেন: ইয়াখরুজূন, তারা বেরিয়ে আসে। কুরতুবীও এই দুই নামেই একই ব্যাখ্যা দেন। প্রমাণ হিসেবে তিনি ইমরুল কায়সের একটি পঙক্তি আনেন, ফাসুল্লী সিয়াবী মিন সিয়াবিকি তানসুলি, যেখানে ক্রিয়াটির অর্থ খসে বেরিয়ে আসা। কুরতুবী বলেন, এখান থেকেই সন্তানকে নাসল বলা হয়, কারণ সে মায়ের গর্ভ থেকে বেরিয়ে আসে।"
          },
          {
            "en": "Al-Baghawi draws the same line in fewer words: they come out of the graves alive, and from this a child is called nasl, for its coming out of its mother's womb. The word, then, holds a picture of birth inside it. The earth that received the dead gives them back the way a womb gives up a child, and the people in this verse are, in the plain sense of their verb, delivered. The grave turns out not to be a last address. It is a place from which they are brought out living.",
            "bn": "বাগাভী একই সম্পর্ক টানেন আরও কম কথায়: তারা জীবিত অবস্থায় কবর থেকে বেরিয়ে আসবে, আর এখান থেকেই সন্তানকে নাসল বলা হয়, কারণ সে মায়ের পেট থেকে বের হয়। শব্দটির ভেতরে তাই জন্মের একটা ছবি লুকিয়ে আছে। যে মাটি মৃতদের নিজের ভেতরে নিয়েছিল, সে তাদের ফিরিয়ে দেয়, যেমন মায়ের গর্ভ সন্তানকে দুনিয়ায় পাঠায়। ক্রিয়াটির সোজা অর্থেই এ আয়াতের মানুষগুলো যেন নতুন করে জন্ম নেয়। কবর তাহলে শেষ ঠিকানা নয়। সেখান থেকে তাদের জীবিত বের করে আনা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wolf's Quick Trot",
          "bn": "নেকড়ের দুলকি চাল"
        },
        "p": [
          {
            "en": "The second sense is speed. Al-Qurtubi introduces it with the words it is said: they hasten. Nasalan and 'asalan, he explains, mean hurrying in one's going, and from them comes the name for the gait of the wolf; he quotes a line about a wolf trotting through the cold of the night. At-Tabari folds both senses into his gloss: to their Lord they come out swiftly, nasalan being haste in walking. Ibn Kathir and Ma'arif al-Qur'an give the word as walking quickly, and al-Muyassar renders it as coming out to their Lord in haste.",
            "bn": "দ্বিতীয় অর্থটি দ্রুততার। কুরতুবী 'বলা হয়' কথাটি দিয়ে তা আনেন: তারা দ্রুত চলে। তিনি বুঝিয়ে বলেন, নাসালান আর আসালান মানে চলায় তাড়াহুড়া করা, আর নেকড়ের চলনের নামও এখান থেকেই। এর সমর্থনে তিনি একটি পঙক্তি আনেন, যেখানে রাতের ঠান্ডায় এক নেকড়ে দুলকি চালে ছুটে চলে। তাবারী তাঁর ব্যাখ্যায় দুটো অর্থ একসঙ্গে রাখেন: তারা দ্রুত বেরিয়ে তাদের রবের দিকে আসে, আর নাসালান মানে হাঁটায় দ্রুততা। ইবন কাসীর ও মাআরিফুল কুরআন শব্দটির অর্থ বলেন দ্রুত হাঁটা। মুয়াসসার লেখে, তারা দ্রুত বেরিয়ে রবের দিকে চলে।"
          },
          {
            "en": "The two senses do not compete, and al-Qurtubi joins them himself: the meaning is that they come out hastening. A person emerges, and the emerging is already a running. Keeping both protects the word from being flattened. If yansilun meant only to hurry, the verse would lose the birth inside it; if it meant only to come out, it would lose the urgency that as-Sa'di draws out below. The verb holds the whole movement at once: out of the earth, toward Allah, without a pause between.",
            "bn": "দুটি অর্থের মধ্যে কোনো টানাটানি নেই। কুরতুবী নিজেই দুটোকে মিলিয়ে দেন: অর্থ হলো, তারা দ্রুত বেরিয়ে আসবে। মানুষ বেরোচ্ছে, আর বেরোনোটাই একরকম দৌড়। দুটো অর্থই ধরে রাখলে শব্দটির পুরো ভার বজায় থাকে। ইয়ানসিলূন যদি শুধু তাড়াহুড়া বোঝাত, তাহলে এর ভেতরের জন্মের ছবিটা হারিয়ে যেত। আর যদি শুধু বেরিয়ে আসা বোঝাত, তাহলে হারিয়ে যেত সেই তাড়া, যা নিচে সা'দী খুলে বলেছেন। একটিমাত্র ক্রিয়া পুরো চলাটাকে ধরে রাখে: মাটি থেকে বাইরে, আল্লাহর দিকে, মাঝখানে কোনো থামা ছাড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing, Then Racing",
          "bn": "আগে দাঁড়ানো, তারপর ছোটা"
        },
        "p": [
          {
            "en": "Other verses show the same moment from other angles, and the commentators lay them side by side. Ibn Kathir and Ma'arif al-Qur'an both set beside this verse 70:43, the Day they come out of the graves swiftly, as if racing to a goal. Al-Qurtubi adds 54:7, where they come out of the graves like locusts spread abroad, and 31:28, your creation and your raising are only as a single soul. Each verse catches a different detail: the speed, the multitude, and the ease of the whole thing for Allah.",
            "bn": "অন্য আয়াতগুলো একই মুহূর্তকে অন্য কোণ থেকে দেখায়, আর তাফসীরকারেরা সেগুলো পাশাপাশি রাখেন। ইবন কাসীর ও মাআরিফুল কুরআন দুজনেই এ আয়াতের পাশে ৭০:৪৩ আয়াত আনেন: সেদিন তারা কবর থেকে দ্রুত বেরিয়ে আসবে, যেন কোনো লক্ষ্যের দিকে ছুটছে। কুরতুবী যোগ করেন ৫৪:৭ আয়াত, যেখানে তারা কবর থেকে বের হবে ছড়িয়ে পড়া পঙ্গপালের মতো। আর ৩১:২৮ আয়াত, তোমাদের সৃষ্টি ও পুনরুত্থান কেবল এক প্রাণের মতোই। প্রতিটি আয়াত আলাদা একটি দিক ধরে: কোনোটা গতি, কোনোটা অগণিত ভিড়, কোনোটা আল্লাহর কাছে পুরো ব্যাপারটার সহজ হওয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an takes up an apparent tension with 39:68, where after the blowing they stand up, looking on. It answers that there is no contradiction: first comes the instant of standing up in wonder, and then the racing toward the plain of Resurrection. It adds that, since the Qur'an tells of angels calling people to that plain, the disbelievers' arrival there will not be of their own pleasure but by compulsion, the angels' call driving them on in haste. The hurry, in that reading, is not always eagerness.",
            "bn": "৩৯:৬৮ আয়াতে আছে, ফুঁ দেওয়ার পর তারা দাঁড়িয়ে তাকিয়ে থাকবে। মাআরিফুল কুরআন এর সঙ্গে আমাদের আয়াতের আপাত টানাপোড়েনের প্রশ্ন তোলে এবং জবাব দেয় যে এখানে কোনো বিরোধ নেই। প্রথমে বিস্ময়ে উঠে দাঁড়ানোর মুহূর্ত, তারপর কিয়ামতের ময়দানের দিকে ছুটে চলা। মাআরিফুল কুরআন আরও বলে, কুরআন জানায় ফেরেশতারা মানুষকে সেই ময়দানে ডাকবেন। তাই কাফিররা সেখানে নিজেদের খুশিতে যাবে না, যাবে বাধ্য হয়ে। ফেরেশতাদের ডাকই তাদের তাড়িয়ে নিয়ে যাবে। এই ব্যাখ্যায় তাই সব তাড়াহুড়া আগ্রহ থেকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "No Room to Linger",
          "bn": "থেমে থাকার উপায় নেই"
        },
        "p": [
          {
            "en": "As-Sa'di draws out what the haste means. They hasten, he says, to be present before Him, unable to take their time or to hold back, and in that state those who denied it grieve and show their regret and remorse. A few verses earlier the deniers asked, when is this promise, if you are truthful (36:48). The answer the surah gives is not a date. It is a sound, and after it a movement that nobody is able to slow down.",
            "bn": "এই তাড়াহুড়ার মানে কী, সা'দী তা খুলে বলেন। তারা দ্রুত চলবে তাঁর সামনে হাজির হতে, ধীরে চলার বা পিছিয়ে থাকার কোনো ক্ষমতা তাদের থাকবে না। সেই অবস্থায় যারা অস্বীকার করত, তারা দুঃখে ভেঙে পড়বে, আফসোস আর অনুতাপ প্রকাশ করবে। কয়েক আয়াত আগেই অস্বীকারকারীরা জিজ্ঞেস করেছিল, তোমরা সত্যবাদী হলে বলো, এই ওয়াদা কবে আসবে (৩৬:৪৮)? সূরাটি এর জবাবে কোনো তারিখ দেয়নি। জবাব হলো একটা আওয়াজ, আর তারপর এমন এক চলা, যা কেউ ধীর করতে পারবে না।"
          },
          {
            "en": "That is the point for the reader. Delay is a habit of this life: the prayer pushed later, the return to Allah saved for a calmer season, the debt to someone we wronged left for another day. The verse does not argue with that habit. It simply shows where the habit ends. On that Day every person will hurry toward their Lord, whether they wished to or not. The only question still open is whether the hurrying begins by choice, before the Horn, or under compulsion, after it.",
            "bn": "পাঠকের জন্য আসল কথা এখানেই। দেরি করা এ দুনিয়ার এক অভ্যাস। নামাজ পিছিয়ে দিই, আল্লাহর দিকে ফেরাটা তুলে রাখি একটু শান্ত সময়ের জন্য, যার উপর অন্যায় করেছি তার পাওনা ফেলে রাখি আরেক দিনের জন্য। আয়াত এই অভ্যাসের সঙ্গে তর্ক করে না। শুধু দেখিয়ে দেয়, অভ্যাসটা কোথায় গিয়ে থামে। সেদিন প্রত্যেকে তার রবের দিকে ছুটবে, চাক বা না চাক। এখন খোলা আছে শুধু একটা প্রশ্ন: ছোটা কি শুরু হবে নিজের ইচ্ছায়, শিঙ্গার আগে? নাকি বাধ্য হয়ে, শিঙ্গার পরে?"
          },
          {
            "en": "And the verse carries hope as much as warning. The word that names offspring names this rising too, so the believer is being told that the grave will give them back as surely as a mother's womb gives up a child. The next verse records the first words spoken on that road, and it is left for its own place. This verse stops at the movement itself, in the plain order of its words: the Horn, the graves, their Lord, and the hurrying that joins them.",
            "bn": "আয়াতে সতর্কবার্তা যেমন আছে, তেমনি আছে আশাও। যে শব্দে সন্তানের নাম, সেই শব্দেই এই উত্থানের কথা। মুমিনকে তাই জানানো হচ্ছে, মায়ের গর্ভ যেমন নিশ্চিতভাবে সন্তানকে দুনিয়ায় পাঠায়, কবরও তেমনি নিশ্চিতভাবে তাকে ফিরিয়ে দেবে। সেই পথে প্রথম কোন কথা উচ্চারিত হবে, তা আছে পরের আয়াতে, আর সেটা তার নিজের জায়গার জন্য রইল। এই আয়াত থামে চলাটুকুতেই, শব্দের সোজা ক্রমে: শিঙ্গা, কবর, তাদের রব, আর সেই দ্রুত চলা যা এগুলোকে এক সুতোয় গাঁথে।"
          }
        ]
      }
    ]
  },
  "36:55": {
    "sections": [
      {
        "h": {
          "en": "Reward Speaks After Justice",
          "bn": "ইনসাফের পরে প্রতিদানের কথা"
        },
        "p": [
          {
            "en": "Inna ashab al-jannati al-yawma fi shughulin fakihun: indeed the companions of Paradise, this Day, are in an occupation, rejoicing. The verse is seven Arabic words long, and it comes straight after 36:54, where the Day is declared: no soul will be wronged in anything, and you will be repaid only for what you used to do. As-Sa'di reads the link exactly so. Having said that nobody is recompensed except for what he did, Allah mentions the recompense of the two parties, and begins with the people of Paradise.",
            "bn": "ইন্না আসহাবাল জান্নাতিল ইয়াওমা ফী শুগুলিন ফাকিহূন: নিশ্চয়ই জান্নাতবাসীরা আজ এক ব্যস্ততায় আছে, আনন্দে মগ্ন। আরবিতে আয়াতটি মাত্র সাতটি শব্দের। এর ঠিক আগে ৩৬:৫৪ আয়াতে সেই দিনের ঘোষণা: কারও উপর সামান্যতম যুলম হবে না, আর তোমরা যা করতে কেবল তারই প্রতিদান পাবে। সা'দী দুই আয়াতের যোগসূত্রটা এভাবেই দেখেন। প্রত্যেকে কেবল নিজের আমলেরই প্রতিদান পাবে, এ কথা বলার পর আল্লাহ দুই দলের প্রতিদানের কথা তোলেন। আর শুরু করেন জান্নাতবাসীদের দিয়ে।"
          },
          {
            "en": "The word al-yawm, this Day, carries over from the verse before. In 36:54 it is the Day on which no soul is wronged; here the same Day is seen from the side of those it honours. Ibn Kathir places the moment: when the people of Paradise have left the open plains of the gathering and come down into the meadows of the gardens. Al-Muyassar keeps it short: on that Day the people of Paradise are occupied, away from others, with kinds of bliss in which they take delight.",
            "bn": "আল-ইয়াওম, অর্থাৎ আজ, শব্দটি আগের আয়াত থেকেই চলে এসেছে। ৩৬:৫৪ আয়াতে এটি সেই দিন, যেদিন কারও উপর যুলম হবে না। এখানে একই দিনকে দেখা হচ্ছে তাদের দিক থেকে, যাদের সেদিন সম্মান দেওয়া হবে। ইবন কাসীর মুহূর্তটা চিনিয়ে দেন: হাশরের খোলা প্রান্তর পেরিয়ে জান্নাতবাসীরা যখন জান্নাতের বাগানে এসে নামবে। মুয়াসসার অল্প কথায় সারেন। সেদিন জান্নাতবাসীরা অন্য সবকিছু ছেড়ে নানা রকম নিয়ামতে ব্যস্ত থাকবে, আর সেসব উপভোগ করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Shughl or Shughul",
          "bn": "শুগল নাকি শুগুল"
        },
        "p": [
          {
            "en": "The word shughul means occupation, the state of being taken up with something, and it reaches us in two vowellings. Al-Baghawi reports that the reciters Ibn Kathir, Nafi' and Abu 'Amr read shughl, with the second letter unvowelled, and the rest read shughul. He and al-Qurtubi both call them two dialects of one word, like suht and suhut. At-Tabari names the reciters of Madina and some Basrans for the first form and most of the Kufans for the second, and judges either correct, since both are known readings and their meanings are close.",
            "bn": "শুগুল মানে ব্যস্ততা, কোনো কিছুতে ডুবে থাকা। শব্দটি দুইভাবে উচ্চারিত হয়ে আমাদের কাছে এসেছে। বাগাভী জানান, কারী ইবন কাসীর, নাফি' ও আবূ আমর পড়েছেন শুগল, মাঝের অক্ষরে সাকিন দিয়ে। বাকিরা পড়েছেন শুগুল। বাগাভী ও কুরতুবী দুজনেই বলেন, এ একই শব্দের দুটি আঞ্চলিক রূপ, যেমন সুহত ও সুহুত। তাবারী প্রথম রূপের পাঠক হিসেবে মদীনার কারীদের ও কিছু বসরীর নাম নেন, দ্বিতীয় রূপের জন্য কূফার বেশির ভাগ কারীর। তাঁর রায়: যেভাবেই পড়া হোক, ঠিক আছে। দুটিই প্রচলিত পাঠ, আর অর্থও কাছাকাছি।"
          },
          {
            "en": "A third vowelling, shaghal, is reported from Abu 'Amr as well, and at-Tabari refuses it, because the authoritative body of reciters agreed against it. The point of the whole discussion is not a quarrel. Shughl and shughul name the same thing, said in two shapes the Arabic of the time allowed, and nothing in the verse's meaning turns on which a reciter chose. What the word itself carries is the picture of someone fully taken up, with no room left for anything else.",
            "bn": "আবূ আমর থেকে শাগাল নামে আরেকটি উচ্চারণও বর্ণিত আছে। তাবারী সেটি গ্রহণ করেন না, কারণ নির্ভরযোগ্য কারীগণ একমত হয়ে এর বিপরীত পড়েছেন। তবে এই পুরো আলোচনা কোনো বিবাদ নয়। শুগল আর শুগুল একই জিনিসের নাম, সে যুগের আরবি ভাষা দুটি রূপই মেনে নিত। কোন কারী কোনটা বেছে নিলেন, তাতে আয়াতের অর্থে কোনো হেরফের হয় না। শব্দটা যে ছবি আঁকে, সেটাই আসল: একজন মানুষ পুরোপুরি কিছুতে ডুবে আছে, অন্য কিছুর জন্য তার মনে আর জায়গা নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an asks why the verse should speak of occupation at all. In Paradise there will be no obligatory worship to perform and no living to earn, and someone might wonder whether so much freedom would leave a person restless or bored. The phrase fi shughul, it suggests, may be there to remove that thought: their enjoyment will itself be their main activity, and the question of boredom simply does not arise. It also allows the sense some commentators give, that they will be untouched by what afflicts the people of Hell.",
            "bn": "মাআরিফুল কুরআন প্রশ্ন তোলে, আয়াতে ব্যস্ততার কথা আসলই বা কেন? জান্নাতে ফরজ ইবাদতের দায় থাকবে না, রুজির জন্য খাটুনিও থাকবে না। কারও মনে হতে পারে, এত অবসর কি মানুষকে অস্থির বা একঘেয়ে করে তুলবে না? মাআরিফুল কুরআনের মতে, ফী শুগুল কথাটা হয়তো এই ভাবনাটাই দূর করতে এসেছে। তাদের উপভোগই হবে তাদের প্রধান কাজ, তাই একঘেয়েমির প্রশ্নই ওঠে না। কথাটার আরেকটি অর্থও এখানে সম্ভব, যা কোনো কোনো তাফসীরকার বলেছেন: জাহান্নামীদের উপর যা ঘটছে, তা তাদের একটুও স্পর্শ করবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Occupies Them",
          "bn": "কীসে তারা ব্যস্ত"
        },
        "p": [
          {
            "en": "What exactly occupies them? At-Tabari opens by saying that the people of interpretation differed over the meaning of this occupation, and he lists the views with their chains. Mujahid said: fi ni'ma, in bliss. It is the broadest answer and needs no further object. Al-Hasan, in at-Tabari's report, joins bliss to another thought: their bliss occupies them away from the punishment the people of the Fire are in. Isma'il ibn Abi Khalid, through Shu'ba, says only this: occupied away from what the people of the Fire meet.",
            "bn": "তারা ঠিক কীসে ব্যস্ত? তাবারী শুরুতেই বলেন, এই ব্যস্ততার অর্থ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। তারপর সনদসহ মতগুলো সাজান। মুজাহিদ বলেছেন: নিয়ামতের মধ্যে। এটাই সবচেয়ে প্রশস্ত উত্তর, এর সঙ্গে আর কিছু জুড়তে হয় না। তাবারীর বর্ণনায় হাসান নিয়ামতের সঙ্গে আরেকটি ভাবনা যোগ করেন। তাঁর কথায়, নিয়ামত তাদের এতটাই ব্যস্ত রাখবে যে জাহান্নামীদের শাস্তির দিকে মন যাবে না। শু'বার সূত্রে ইসমাঈল ইবন আবী খালিদ শুধু এটুকু বলেন: জাহান্নামীরা যা ভোগ করছে, তা থেকে তারা অন্যমনস্ক থাকবে।"
          },
          {
            "en": "Another group named a particular delight. At-Tabari reports from 'Abdullah ibn Mas'ud (RA), from Ibn 'Abbas (RA) through 'Ikrima, and from Sa'id ibn al-Musayyab that the occupation is the joy of marital union with their spouses in Paradise; al-Baghawi gives it from Ibn 'Abbas, and Ibn Kathir adds a longer list of early names. The commentators state this reading briefly and move on. As-Sa'di, naming no single delight, speaks of everything the souls desire and the eyes find pleasure in, and this article keeps to that register.",
            "bn": "আরেক দল নির্দিষ্ট একটি আনন্দের কথা বলেছেন। তাবারী আবদুল্লাহ ইবন মাসউদ (রাঃ), ইকরিমার সূত্রে ইবন আব্বাস (রাঃ) এবং সাঈদ ইবনুল মুসাইয়িব থেকে বর্ণনা করেন: এই ব্যস্ততা জান্নাতে নিজেদের স্ত্রীদের সঙ্গে দাম্পত্য মিলনের আনন্দ। বাগাভী কথাটি ইবন আব্বাস (রাঃ) থেকে আনেন, আর ইবন কাসীর পূর্বসূরিদের আরও কয়েকজনের নাম যোগ করেন। তাফসীরকারেরা এ মতটি সংক্ষেপে বলে সামনে এগিয়ে যান। সা'দী আলাদা করে কোনো আনন্দের নাম নেন না। তিনি বলেন সেইসব কিছুর কথা, যা মন চায় আর চোখ দেখে তৃপ্তি পায়। এ লেখাও সেই সংযত সুরেই থাকবে।"
          },
          {
            "en": "Al-Baghawi and al-Qurtubi carry the list further. Waki' ibn al-Jarrah said: fi as-sama', in listening. Ibn Kaysan said: in visiting one another. Both record, under the words it is said, that they are occupied as guests of Allah, in diyafat Allah. Ibn Kathir notes a report from Ibn 'Abbas (RA) about listening to strings, and adds that Abu Hatim said it was perhaps a mistake by the one who heard it. Al-Qurtubi, for his part, places Sa'id ibn al-Musayyab with those who read the occupation as being spared concern for the people of the Fire.",
            "bn": "বাগাভী ও কুরতুবী তালিকাটা আরও লম্বা করেন। ওয়াকী ইবনুল জাররাহ বলেছেন: শোনার মধ্যে, অর্থাৎ সামা'। ইবন কাইসান বলেছেন: একে অন্যের সঙ্গে দেখা করতে যাওয়ার মধ্যে। দুজনেই 'বলা হয়' কথাটি দিয়ে আরেকটি মত আনেন: তারা ব্যস্ত থাকবে আল্লাহর মেহমান হয়ে। ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে তারের বাদ্য শোনার একটি বর্ণনার উল্লেখ করেন। সঙ্গে জানান, আবূ হাতিম বলেছেন, হয়তো এটা যিনি শুনেছেন তাঁরই ভুল। কুরতুবী আবার সাঈদ ইবনুল মুসাইয়িবকে রাখেন তাদের দলে, যাঁরা বলেন জাহান্নামীদের নিয়ে দুশ্চিন্তা থেকে তাদের মুক্ত রাখা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "At-Tabari Keeps Them All",
          "bn": "তাবারী সব মতই রাখেন"
        },
        "p": [
          {
            "en": "At-Tabari does not pick one of these against the rest. The most correct thing to say, he writes, is what Allah said: the companions of Paradise, its people, are in an occupation, rejoicing in favours that come to them in it. That occupation is bliss, and marital joy, and pleasant pastime and delight, and being taken up away from what the people of the Fire meet. His verdict keeps the verse's own generality. The Qur'an names no single object for shughul, so he declines to narrow it on its behalf.",
            "bn": "তাবারী একটি মত নিয়ে বাকিগুলো বাদ দেন না। তিনি লেখেন, সবচেয়ে সঠিক কথা সেটাই, যা আল্লাহ নিজে বলেছেন: জান্নাতের অধিবাসীরা এক ব্যস্ততায় আছে, সেখানে তাদের কাছে আসা নিয়ামতে তারা আনন্দিত। সেই ব্যস্ততা নিয়ামত, দাম্পত্যের আনন্দ, বিনোদন ও তৃপ্তি। আবার জাহান্নামীরা যা ভোগ করছে, তা থেকে অন্যমনস্ক থাকাও এর অংশ। তাঁর এই রায় আয়াতের নিজস্ব ব্যাপকতাকে অক্ষুণ্ণ রাখে। কুরআন শুগুলের কোনো একটি নির্দিষ্ট বিষয় বলে দেয়নি। তাই তাবারীও নিজের পক্ষ থেকে অর্থটাকে সংকীর্ণ করতে রাজি হন না।"
          },
          {
            "en": "The other commentators fetched lean the same way in their own words. As-Sa'di calls it an occupation that delights the soul and gives it pleasure, made of everything the souls long for, the eyes delight in, and those who wish could wish for. Ibn Kathir begins with a general sentence before he quotes anyone: occupied away from others by the lasting bliss and the great triumph they are in. The particular readings stay as the words of the early generation. None of the commentaries fetched for this verse attaches a sound hadith to it.",
            "bn": "অন্য যেসব তাফসীর দেখা হয়েছে, সেগুলোও নিজের ভাষায় একই দিকে ঝোঁকে। সা'দী বলেন, এ এমন ব্যস্ততা, যা মনকে খুশি করে, তৃপ্তি দেয়। এতে আছে মন যা চায়, যাতে চোখ জুড়ায়, আর কেউ যা কিছু চাইতে পারে তার সবই। ইবন কাসীর কারও উক্তি আনার আগে নিজে একটি সাধারণ কথা বলেন: তারা যে স্থায়ী নিয়ামত আর মহাসাফল্যের মধ্যে আছে, তাতেই ডুবে থেকে অন্য সবকিছু ভুলে আছে। নির্দিষ্ট মতগুলো থেকে যায় পূর্বসূরিদের কথা হিসেবে। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই আয়াতটির সঙ্গে কোনো সহীহ হাদিস জোড়েনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Glad, and Marvelling at It",
          "bn": "আনন্দিত, মুগ্ধও"
        },
        "p": [
          {
            "en": "The second word, fakihun, describes the people in that occupation. Al-Qurtubi gathers the glosses: al-Hasan said masrurun, gladdened; Ibn 'Abbas (RA) said farihun, joyful; Mujahid and ad-Dahhak said mu'jabun, delighted and pleased by what they have; as-Suddi said na'imun, living in ease. Then he gives his own judgement: the meaning is close. At-Tabari keeps the same two main lines with their chains, Ibn 'Abbas (RA) on joy and Mujahid on 'ajibun, those who marvel. The glosses are a range of shades, not a disagreement.",
            "bn": "দ্বিতীয় শব্দ ফাকিহূন। এটি বলে, সেই ব্যস্ততায় থাকা মানুষগুলোর অবস্থা কেমন। কুরতুবী ব্যাখ্যাগুলো এক জায়গায় আনেন। হাসান বলেছেন মাসরূরূন, খুশি। ইবন আব্বাস (রাঃ) বলেছেন ফারিহূন, আনন্দিত। মুজাহিদ ও দাহহাক বলেছেন মু'জাবূন, নিজেদের যা আছে তাতে মুগ্ধ ও তৃপ্ত। সুদ্দী বলেছেন না'ইমূন, স্বাচ্ছন্দ্যে আছে। তারপর কুরতুবী নিজের মত দেন: অর্থগুলো কাছাকাছি। তাবারীও সনদসহ প্রধান দুটি ধারা রাখেন: ইবন আব্বাস (রাঃ) থেকে আনন্দ, আর মুজাহিদ থেকে আজিবূন, যারা বিস্মিত। এগুলো একই অর্থের নানা রং, মতবিরোধ নয়।"
          },
          {
            "en": "There are two readings of this word too. The reciters of the cities read fākihūn, with an alif after the first letter; Abu Ja'far the reciter read fakihūn, without it, and al-Baghawi notes that Hafs follows him on this word in Surat al-Mutaffifin. At-Tabari prefers the long form because it is the known reading. Al-Baghawi and al-Qurtubi, the latter citing al-Farra', treat the two as dialects of one word, like ḥādhirūn and ḥadhirūn. Al-Baghawi glosses it as na'imun, living in ease.",
            "bn": "এই শব্দেরও দুটি পাঠ আছে। বিভিন্ন শহরের কারীগণ পড়েছেন আলিফসহ: فاكهون। কারী আবূ জা'ফর পড়েছেন আলিফ ছাড়া: فكهون। বাগাভী জানান, সূরা আল-মুতাফফিফীনে এই শব্দের বেলায় হাফস তাঁর সঙ্গে একমত। তাবারী লম্বা রূপটাই পছন্দ করেন, কারণ সেটাই প্রচলিত পাঠ। বাগাভী ও কুরতুবী দুটিকে একই শব্দের দুই আঞ্চলিক রূপ বলেন, যেমন حاذرون ও حذرون। কুরতুবী এ কথা আনেন ফাররা থেকে। বাগাভী এর অর্থ করেন না'ইমূন, স্বাচ্ছন্দ্যে থাকা মানুষ।"
          },
          {
            "en": "The grammarians drew a finer line. Al-Qurtubi reports from al-Kisa'i and Abu 'Ubayda that fākih, with the alif, is one who has fruit, on the pattern of words for a man who owns dates or milk, while fakih, without it, is one who enjoys and takes his ease. At-Tabari reports the same Basran view, and a Kufan view that the pair is like ḥādhirūn and ḥadhirūn, and calls the second closer to the word. Al-Qurtubi adds that fukaha is jesting and pleasant talk, and Abu Zayd's remark that a fakih man is good-hearted and quick to laugh.",
            "bn": "ভাষাবিদেরা আরও সূক্ষ্ম পার্থক্য টেনেছেন। কুরতুবী কিসাঈ ও আবূ উবাইদা থেকে বর্ণনা করেন: আলিফসহ ফাকিহ মানে যার কাছে ফল আছে, যেমন খেজুর বা দুধের মালিককে বোঝাতে আরবিতে একই ছাঁচের শব্দ আছে। আর আলিফ ছাড়া ফাকিহ মানে যে উপভোগ করে, আরামে থাকে। তাবারী বসরীদের এই মত উল্লেখ করেন। সঙ্গে কূফীদের মতও আনেন যে, এ দুটি حاذرون ও حذرون-এর মতো, আর বলেন দ্বিতীয় মতটিই শব্দের সঙ্গে বেশি মেলে। কুরতুবী যোগ করেন, ফুকাহা মানে রসিকতা ও মিষ্টি কথা। আবূ যায়দের উক্তিও আনেন: ফাকিহ সেই মানুষ, যার মন ভালো আর যে সহজে হাসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Spared the Sight of Suffering",
          "bn": "যন্ত্রণার দৃশ্য থেকে মুক্ত"
        },
        "p": [
          {
            "en": "One reading deserves a longer look, because it touches the heart. Al-Baghawi reports al-Kalbi: occupied away from the people of the Fire and what they are in; their affair does not trouble them and they do not call them to mind. Al-Qurtubi gives it, from Sa'id ibn al-Musayyab and others, with a sharper edge: occupied with their pleasures and bliss, away from concern for the people of disobedience and their end in the Fire, even if their own relatives and families are among them.",
            "bn": "একটি মত একটু বেশি সময় নিয়ে ভাবার মতো, কারণ তা মনকে নাড়া দেয়। বাগাভী কালবী থেকে বর্ণনা করেন: জাহান্নামীরা আর তাদের দুর্দশা থেকে তারা অন্যমনস্ক থাকবে। ওদের ব্যাপার তাদের চিন্তায় ফেলবে না, ওদের কথা তাদের মনেও পড়বে না। কুরতুবী সাঈদ ইবনুল মুসাইয়িব ও অন্যদের সূত্রে কথাটা আরও কড়া করে বলেন। তারা নিজেদের আনন্দ আর নিয়ামতে এমন ব্যস্ত থাকবে যে নাফরমানদের নিয়ে, জাহান্নামে তাদের পরিণতি নিয়ে কোনো দুশ্চিন্তা থাকবে না। ওদের মধ্যে নিজেদের আত্মীয়স্বজন আর পরিবারের লোক থাকলেও না।"
          },
          {
            "en": "This can sound hard on first hearing. Yet at-Tabari counts it among the favours of that occupation, not as a coldness in the believers. Read as reflection: a joy that grief could break into at any moment would not be complete, and the verse stands right after the declaration that no soul is wronged. What befalls anyone there is settled by the Just, according to what each did. The people of Paradise are not asked to carry it, and that release is itself part of the reward.",
            "bn": "প্রথম শুনলে কথাটা কঠিন মনে হতে পারে। কিন্তু তাবারী একে মুমিনদের হৃদয়হীনতা বলেননি, বরং সেই ব্যস্ততার নিয়ামতগুলোর মধ্যেই গুনেছেন। একটু ভেবে দেখুন। যে আনন্দে যেকোনো মুহূর্তে দুঃখ এসে ঢুকতে পারে, সে আনন্দ পূর্ণ হয় না। আর আয়াতটি এসেছে ঠিক সেই ঘোষণার পরে যে, কারও উপর জুলুম হবে না। সেখানে কার কী হবে, তা ফয়সালা করবেন ন্যায়বিচারক আল্লাহ, প্রত্যেকের আমল অনুযায়ী। জান্নাতবাসীদের সেই বোঝা বইতে হবে না। এই মুক্তিটাও প্রতিদানেরই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Busy Here, Busy There",
          "bn": "এখানেও ব্যস্ত, সেখানেও ব্যস্ত"
        },
        "p": [
          {
            "en": "The verse borrows a word everyone knows. Shughl is the ordinary word for being busy, and in this world it is usually a complaint: I have no time, the work never ends, something else is always waiting. The Qur'an takes that word and turns it inside out. In Paradise people are still occupied, but with what they would choose, and fakihun says how it feels from inside: glad, pleased, finding it wonderful. Ma'arif al-Qur'an's point holds here. The rest of Paradise is not empty time.",
            "bn": "আয়াতটি সবার চেনা একটা শব্দ বেছে নিয়েছে। শুগল মানে সাধারণ ব্যস্ততা। এই দুনিয়ায় শব্দটা সাধারণত অভিযোগের সুরে আসে: সময় নেই, কাজ শেষ হয় না, সবসময় আরেকটা কিছু অপেক্ষা করছে। কুরআন সেই শব্দটাকেই উল্টে দেয়। জান্নাতেও মানুষ ব্যস্ত থাকবে, তবে নিজেদের মনের মতো জিনিসে। আর ফাকিহূন বলে দেয় ভেতর থেকে সেটা কেমন লাগে: খুশি, তৃপ্ত, মুগ্ধ। মাআরিফুল কুরআনের কথাটা এখানে খাটে। জান্নাতের অবসর ফাঁকা সময় নয়।"
          },
          {
            "en": "The link to 36:54 tells where this occupation comes from: you will be repaid only for what you used to do. The busyness of that Day answers the busyness of this one. Not every effort here is a burden to be rid of. A prayer kept on a tired evening, a debt honoured when it was hard, a kindness done with no one watching are forms of shughl too. The verse leaves the reader asking whether the hours that fill the day are building toward that joy or simply passing.",
            "bn": "৩৬:৫৪ আয়াতের সঙ্গে যোগসূত্রই বলে দেয়, এই ব্যস্ততা কোথা থেকে আসে: তোমরা যা করতে, কেবল তারই প্রতিদান পাবে। সেদিনের ব্যস্ততা এদিনের ব্যস্ততারই জবাব। এখানকার সব খাটুনিই ঝেড়ে ফেলার মতো বোঝা নয়। ক্লান্ত সন্ধ্যায় যে নামাজটা ছাড়েননি, কষ্ট হলেও যে ঋণটা শোধ করেছেন, কেউ দেখছিল না তবু যে উপকারটা করেছেন, এগুলোও তো শুগল। আয়াতটি পাঠককে একটা প্রশ্নের সামনে দাঁড় করায়। যে ঘণ্টাগুলো দিয়ে আমার দিন ভরে, সেগুলো কি সেই আনন্দের দিকে কিছু গড়ে তুলছে, নাকি শুধু পার হয়ে যাচ্ছে?"
          }
        ]
      },
      {
        "h": {
          "en": "The Ledger's Brighter Column",
          "bn": "হিসাবের উজ্জ্বল দিকটা"
        },
        "p": [
          {
            "en": "Read in its place, the verse is a hinge. From 36:49 to 36:54 the passage moves from the single cry that seizes people in the middle of their disputes, to the Horn, the rising from the graves, and the declaration of justice. Here, for the first time in the sequence, the view turns to those for whom the Day is good news. As-Sa'di's framing fits: the recompense of the two parties, beginning with the people of Paradise. The verses that follow carry the picture further, and the other party's turn comes after.",
            "bn": "নিজের জায়গায় রেখে পড়লে আয়াতটি যেন দরজার কব্জা। ৩৬:৪৯ থেকে ৩৬:৫৪ পর্যন্ত বর্ণনা এগিয়েছে ধাপে ধাপে। প্রথমে এক বিকট শব্দ, যা মানুষকে তাদের ঝগড়ার মাঝখানে পাকড়াও করে। তারপর শিঙ্গা, কবর থেকে উঠে আসা, আর ন্যায়বিচারের ঘোষণা। এখানে এসে এই ধারায় প্রথমবার দৃষ্টি ফেরে তাদের দিকে, যাদের জন্য সেই দিন সুসংবাদ। সা'দীর কাঠামোটা এখানে খাপ খায়: দুই দলের প্রতিদান, শুরু জান্নাতবাসীদের দিয়ে। পরের আয়াতগুলো ছবিটা আরও এগিয়ে নেয়, আর অন্য দলের পালা আসে তার পরে।"
          },
          {
            "en": "The verse does not give a list. It gives a state: occupied, and glad of it. The commentators fill that state with many things, bliss, marital joy, listening, visiting one another, being Allah's guests, freedom from the sight of punishment, and at-Tabari lets them all stand. For the reader the verse's restraint is itself a mercy. Whatever a believer most deeply longs for finds room inside the word shughul, and the word fakihun promises that it will not grow stale.",
            "bn": "আয়াতটি কোনো তালিকা দেয় না, দেয় একটি অবস্থা: ব্যস্ত, আর তাতেই খুশি। তাফসীরকারেরা সেই অবস্থাকে নানা কিছু দিয়ে ভরেছেন। নিয়ামত, দাম্পত্যের আনন্দ, শোনা, একে অন্যের সঙ্গে দেখা করা, আল্লাহর মেহমান হওয়া, শাস্তির দৃশ্য থেকে মুক্তি। তাবারী সবগুলোকেই জায়গা দেন। পাঠকের জন্য আয়াতের এই সংযমও এক রহমত। একজন মুমিন মনের গভীরে যা সবচেয়ে বেশি চায়, তার জায়গা হয়ে যায় শুগুল শব্দের ভেতরে। আর ফাকিহূন শব্দটি কথা দেয়, সেই আনন্দ কখনো বাসি হবে না।"
          }
        ]
      }
    ]
  },
  "36:60": {
    "sections": [
      {
        "h": {
          "en": "A Question After the Parting",
          "bn": "আলাদা করার পর এক প্রশ্ন"
        },
        "p": [
          {
            "en": "Alam aʿhad ilaykum ya bani Adam: did I not charge you, O children of Adam? The verse follows directly on 36:59, where the criminals are told on the Day of Judgement to stand apart today. At-Tabari notes that something is left unsaid, because the context makes it obvious: then it will be said. The speaker is Allah, the hearers are those who have just been set apart, and the verse is the first sentence of His indictment against them.",
            "bn": "আলাম আ'হাদ ইলাইকুম ইয়া বানী আদাম: হে আদম সন্তান, আমি কি তোমাদের নির্দেশ দিইনি? আয়াতটি সরাসরি আসে ৩৬:৫৯-এর পরে, যেখানে বিচারের দিনে অপরাধীদের বলা হয়: আজ তোমরা আলাদা হয়ে যাও। তাবারী লক্ষ করেন, এখানে একটা কথা উহ্য আছে, কারণ প্রসঙ্গই তা বুঝিয়ে দেয়: তারপর বলা হবে। বক্তা আল্লাহ নিজে। শ্রোতা তারা, যাদের এইমাত্র আলাদা করা হলো। আর এই আয়াত তাদের বিরুদ্ধে তাঁর অভিযোগনামার প্রথম বাক্য।"
          },
          {
            "en": "The question does not ask for information. Ibn Kathir calls it a taqriʿ, a reproach from Allah to the disbelievers among the children of Adam. Al-Muyassar describes it as Allah speaking to them in rebuke and in reminder. Both words matter. The reproach shames them for what they did, and the reminder points back to something they were once told and set aside. Nothing in the question is new to them; that is exactly its force.",
            "bn": "প্রশ্নটা কিছু জানতে চাওয়ার জন্য নয়। ইবন কাসীর একে বলেন তাকরী', আদম সন্তানদের মধ্যে যারা কুফরি করেছে, তাদের প্রতি আল্লাহর ভর্ৎসনা। মুয়াসসারের ভাষায়, আল্লাহ তাদের সঙ্গে কথা বলছেন তিরস্কার আর স্মরণ করিয়ে দেওয়ার জন্য। দুটো শব্দই গুরুত্বপূর্ণ। তিরস্কার তাদের লজ্জা দেয় নিজেদের কাজের জন্য। আর স্মরণ করানোটা মনে করিয়ে দেয় সেই কথা, যা একদিন তাদের শোনানো হয়েছিল, কিন্তু তারা সরিয়ে রেখেছিল। প্রশ্নের কিছুই তাদের কাছে নতুন নয়। এর জোরটা ঠিক সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Charge Carried by Messengers",
          "bn": "রাসূলদের মুখে পৌঁছানো নির্দেশ"
        },
        "p": [
          {
            "en": "What is the ʿahd that Allah says He gave? Al-Qurtubi answers directly: al-ʿahd here means al-wasiyya, a binding instruction. Did I not instruct you and convey to you, on the tongues of the messengers? As-Sa'di gives the same sense in the first person: I command you and instruct you, on the tongues of My messengers, and I say to you. Al-Baghawi reduces it to a single verb: did I not command you? At-Tabari reads it as did I not instruct you and command you, and he places that instruction fi d-dunya, in this world.",
            "bn": "আল্লাহ যে আহদের কথা বলছেন, তা কী? কুরতুবী সরাসরি উত্তর দেন: এখানে আহদ মানে ওসিয়ত, অর্থাৎ পালনীয় নির্দেশ। আমি কি রাসূলদের মুখে তোমাদের নির্দেশ দিইনি, তোমাদের কাছে পৌঁছে দিইনি? সা'দী একই অর্থ দেন আল্লাহর নিজের জবানিতে: আমি আমার রাসূলদের মুখে তোমাদের আদেশ দিই, নির্দেশ দিই, আর তোমাদের বলি। বাগাভী পুরো কথাটাকে এক ক্রিয়ায় নিয়ে আসেন: আমি কি তোমাদের আদেশ করিনি? তাবারীর পাঠে অর্থ দাঁড়ায়, আমি কি তোমাদের নির্দেশ ও আদেশ দিইনি। আর সেই নির্দেশের জায়গা তিনি ঠিক করে দেন দুনিয়ায়।"
          },
          {
            "en": "Put together, the commentators fetched for this verse describe a charge given openly, in this life, through revelation. Al-Muyassar repeats the route: did I not instruct you on the tongues of My messengers? Nothing here is a secret or private pact. It is the message the prophets carried, generation after generation, to the children of Adam as a whole. That is why the question can be asked at all on that Day: the instruction had reached them, in words they could hear, from people sent to say it.",
            "bn": "এ আয়াতের জন্য দেখা তাফসীরগুলো মিলিয়ে পড়লে ছবিটা পরিষ্কার। আল্লাহ নির্দেশটা দিয়েছেন প্রকাশ্যে, এই জীবনেই, ওহির মাধ্যমে। মুয়াসসারও সেই একই মাধ্যমের কথা বলে: আমি কি আমার রাসূলদের মুখে তোমাদের নির্দেশ দিইনি? এখানে গোপন বা ব্যক্তিগত কোনো চুক্তির কথা নেই। এ হলো সেই বাণী, যা নবীরা যুগের পর যুগ গোটা আদম সন্তানের কাছে বয়ে এনেছেন। সে দিন প্রশ্নটা করা যায় এ কারণেই। নির্দেশটা তাদের কাছে পৌঁছেছিল, শোনার মতো ভাষায়, এমন মানুষের মুখে যাঁদের পাঠানোই হয়েছিল তা বলার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship That Never Bowed",
          "bn": "সিজদা ছাড়াই যে ইবাদত"
        },
        "p": [
          {
            "en": "An lā taʿbudu ash-shaytan: that you not worship Satan. Read flatly, the words could suggest people kneeling before Satan as before an idol. The commentators close off that reading at once. At-Tabari explains: that you not worship Satan, and so obey him in disobedience to Allah. Al-Qurtubi: that is, do not obey him in disobeying Me. Al-Baghawi says the same, do not obey Satan in disobedience to Allah, and as-Sa'di glosses it in two words: do not obey him. Al-Muyassar sets the two side by side: not to worship Satan and not to obey him.",
            "bn": "আন লা তা'বুদুশ শাইতান: তোমরা শয়তানের ইবাদত করো না। শুধু শব্দ ধরে পড়লে মনে হতে পারে, মানুষ বুঝি মূর্তির সামনে যেমন, তেমনি শয়তানের সামনে মাথা নত করে। তাফসীরকারেরা এই পাঠ শুরুতেই বন্ধ করে দেন। তাবারী ব্যাখ্যা করেন: শয়তানের ইবাদত করো না, অর্থাৎ আল্লাহর নাফরমানিতে তার আনুগত্য করো না। কুরতুবী: আমার নাফরমানিতে তার কথা মেনো না। বাগাভীও একই কথা বলেন: আল্লাহর নাফরমানিতে শয়তানের আনুগত্য করো না। সা'দী দুই শব্দে বলেন: তার আনুগত্য করো না। মুয়াসসার দুটোকে পাশাপাশি রাখে: শয়তানের ইবাদত করো না, তার কথাও মেনো না।"
          },
          {
            "en": "Ma'arif al-Qur'an raises the obvious objection. The disbelievers did not generally worship Satan; they worshipped idols and other things. How, then, does this blame fall on them? Its answer is that to submit to some being absolutely, obeying it in word and deed in everything and under all conditions, is nothing other than worship. Since these people kept following Satan's teachings, they are called his worshippers. The label describes what they did with their obedience, not what they did with their foreheads.",
            "bn": "মাআরিফুল কুরআন স্বাভাবিক আপত্তিটা নিজেই তোলে। কাফেররা সাধারণত শয়তানের পূজা করত না। তারা পূজা করত মূর্তি বা অন্য কিছুর। তাহলে এই দোষ তাদের ঘাড়ে আসে কীভাবে? এর জবাব: কোনো সত্তার কাছে পুরোপুরি নিজেকে সঁপে দেওয়া, সব বিষয়ে, সব অবস্থায় কথায় ও কাজে তার আনুগত্য করা, এটাই ইবাদত। এরা সারাজীবন শয়তানের শেখানো পথে চলেছে, তাই তাদের বলা হয়েছে তার ইবাদতকারী। নামটা এসেছে তারা নিজেদের আনুগত্য দিয়ে কী করেছে তা থেকে। কপাল কোথায় ঠেকিয়েছে, তা থেকে নয়।"
          },
          {
            "en": "This matters for how the verse is read today. A person who has never heard of any cult of Satan can still be among those addressed, because the question is about whose command he followed when it clashed with Allah's. The worship meant here wears ordinary clothes. It looks like a choice made under pressure, a whisper accepted, a habit that keeps a person away from what Allah asked. The verse names that pattern by its real name, so that nobody can hide it behind a gentler label.",
            "bn": "আজকের পাঠকের জন্য কথাটা জরুরি। শয়তান-পূজার কোনো দলের নামও যে শোনেনি, সেও এই প্রশ্নের লক্ষ্য হতে পারে। কারণ প্রশ্নটা হলো, আল্লাহর হুকুমের সঙ্গে সংঘাত বাধলে সে কার কথা মেনেছে। এখানে যে ইবাদতের কথা, তা দেখতে খুব সাধারণ। চাপের মুখে নেওয়া কোনো সিদ্ধান্ত, মেনে নেওয়া কোনো কুমন্ত্রণা, এমন কোনো অভ্যাস যা মানুষকে আল্লাহর চাওয়া থেকে দূরে রাখে। আয়াতটি এই ধারাকে তার আসল নামে ডাকে, যাতে কেউ একে নরম কোনো নামের আড়ালে লুকাতে না পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "How Wide the Rebuke Reaches",
          "bn": "তিরস্কার কতদূর পৌঁছায়"
        },
        "p": [
          {
            "en": "The commentators frame the scope of the rebuke in two ways. Ibn Kathir names its addressees: al-kafara min bani Adam, the disbelievers among the children of Adam, who obeyed Satan though he was a clear enemy to them. As-Sa'di looks instead at what is being rebuked, and widens it: this rebuke takes in every kind of disbelief and every kind of sin, because all of them are obedience to Satan and worship of him. One defines who stands accused on that Day; the other defines what counts as the act.",
            "bn": "তিরস্কারের পরিধি তাফসীরকারেরা দুইভাবে দেখান। ইবন কাসীর বলেন এর লক্ষ্য কারা: আদম সন্তানদের মধ্যে যারা কাফের, যারা শয়তানের আনুগত্য করেছে, অথচ সে তাদের প্রকাশ্য শত্রু। সা'দী তাকান অন্য দিকে, কী কাজের জন্য তিরস্কার, সেদিকে। আর তিনি পরিধিটা বড় করেন: এই তিরস্কারের ভেতরে পড়ে সব রকমের কুফর আর সব রকমের গুনাহ, কারণ এগুলোর প্রতিটিই শয়তানের আনুগত্য, তার ইবাদত। একজন ঠিক করে দেন সে দিন অভিযুক্ত কারা। অন্যজন ঠিক করে দেন কোন কাজ এর আওতায় পড়ে।"
          },
          {
            "en": "These readings do not cancel each other, and as-Sa'di does not say that every sinner is among the criminals of 36:59. What he says is that the same logic runs through every act of disobedience: each one, in its measure, is a moment of listening to the enemy instead of to Allah. That gives the believer a reason to hear this verse as addressed to him as well. The verse speaks to the children of Adam, and a Muslim reading it is one of them.",
            "bn": "এই ব্যাখ্যাগুলো একে অপরকে বাতিল করে না। সা'দী এ কথা বলেন না যে প্রত্যেক গুনাহগার ৩৬:৫৯-এর অপরাধীদের দলে। তিনি বলেন, প্রতিটি নাফরমানির পেছনে একই হিসাব কাজ করে। নিজ নিজ মাত্রায় প্রত্যেকটাই এমন এক মুহূর্ত, যখন মানুষ আল্লাহর কথা না শুনে শত্রুর কথা শুনেছে। তাই মুমিনেরও আয়াতটিকে নিজের প্রতি বলা কথা হিসেবে শোনার কারণ আছে। আয়াতটি আদম সন্তানদের সম্বোধন করে, আর যে মুসলিম এটা পড়ছেন, তিনিও তাদেরই একজন।"
          }
        ]
      },
      {
        "h": {
          "en": "An Enemy Who Showed Himself",
          "bn": "যে শত্রু নিজেকে চিনিয়ে দিয়েছে"
        },
        "p": [
          {
            "en": "Innahu lakum ʿaduwwun mubin: indeed he is to you a clear enemy. Al-Baghawi and al-Muyassar both explain mubin as zahir al-ʿadawa, open in his enmity. At-Tabari supplies the words as Allah speaking: and I say to you, Satan is to you a clear enemy. He then explains how that enmity became clear. Satan refused to prostrate to your father Adam (AS), out of envy over the honour Allah had given him, and then deceived him until he brought about the expulsion of Adam and his wife from the Garden.",
            "bn": "ইন্নাহু লাকুম আদুউউম মুবীন: নিশ্চয়ই সে তোমাদের প্রকাশ্য শত্রু। বাগাভী আর মুয়াসসার দুজনেই মুবীনের অর্থ করেন যাহিরুল আদাওয়াহ, যার শত্রুতা খোলাখুলি। তাবারী কথাটাকে আল্লাহর জবানিতে সাজান: আর আমি তোমাদের বলি, শয়তান তোমাদের প্রকাশ্য শত্রু। তারপর তিনি ব্যাখ্যা করেন, শত্রুতাটা প্রকাশ পেল কীভাবে। আল্লাহ তোমাদের পিতা আদম (আঃ)-কে যে সম্মান দিয়েছিলেন, তাতে হিংসা করে শয়তান তাঁকে সিজদা করতে অস্বীকার করে। তারপর তাঁকে ধোঁকা দিতে থাকে, যতক্ষণ না আদম (আঃ) ও তাঁর স্ত্রীকে জান্নাত থেকে বের করিয়ে ছাড়ে।"
          },
          {
            "en": "That is the background at-Tabari gives, and it is enough. The enmity did not begin with any one person's sins; it began with a refusal and a grudge aimed at the father of every reader of this verse. An enemy who announced himself that early leaves no room for the plea that nobody knew. As-Sa'di draws out the same point from Allah's side: so I warned you against him with the utmost warning, cautioned you against obeying him, and told you what he calls you to.",
            "bn": "তাবারী এই পটভূমিটুকুই দেন, আর এটুকুই যথেষ্ট। শত্রুতা কোনো একজন মানুষের গুনাহ দিয়ে শুরু হয়নি। শুরু হয়েছে এক অস্বীকার আর এক বিদ্বেষ দিয়ে, যার লক্ষ্য ছিলেন এ আয়াতের প্রতিটি পাঠকের আদি পিতা। যে শত্রু এত আগেই নিজের পরিচয় ঘোষণা করেছে, তার বেলায় 'কেউ তো জানত না' বলার সুযোগ থাকে না। সা'দী একই কথা আনেন আল্লাহর দিক থেকে: আমি তোমাদের তার ব্যাপারে চূড়ান্তভাবে সাবধান করেছি, তার আনুগত্য থেকে সতর্ক করেছি, আর জানিয়ে দিয়েছি সে তোমাদের কিসের দিকে ডাকে।"
          },
          {
            "en": "Ibn Kathir completes the contrast in a brief sentence. Those rebuked obeyed Satan, who was a clear enemy to them, and disobeyed ar-Rahman, the One who created them and provided for them. Set them side by side and the folly is plain. Here is the enemy who declared hostility and never hid it; there is the Lord whose creation and provision they lived on every day. They gave their obedience to the enemy and withheld it from their Lord.",
            "bn": "ইবন কাসীর ছোট্ট একটি বাক্যে বৈপরীত্যটা পূর্ণ করেন। যাদের তিরস্কার করা হচ্ছে, তারা শয়তানের আনুগত্য করেছে, যে তাদের প্রকাশ্য শত্রু ছিল। আর নাফরমানি করেছে রহমানের, যিনি তাদের সৃষ্টি করেছেন, রিযিক দিয়েছেন। পাশাপাশি রাখলেই বোকামিটা চোখে পড়ে। এখানে সেই শত্রু, যে শত্রুতা ঘোষণা করেছে আর কখনো লুকায়নি। ওখানে সেই রব, যাঁর সৃষ্টি আর রিযিকের উপর তারা প্রতিদিন বেঁচে থেকেছে। আনুগত্য তারা দিয়েছে শত্রুকে, আর তা আটকে রেখেছে নিজেদের রবের কাছ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Servant of the Dinar",
          "bn": "দিনারের গোলাম"
        },
        "p": [
          {
            "en": "To show that obedience can amount to worship, Ma'arif al-Qur'an refers on this verse to a hadith about the person who becomes the servant of his money. One wording is in Sahih al-Bukhari, number 2886, from Abu Hurayra (RA): the Prophet (peace be upon him) said, Let the slave of the dinar and the dirham, of the qatifa and the khamisa perish, for he is pleased if these things are given to him, and if not, he is displeased. The qatifa and khamisa are fine cloths; the translator glosses them as money and luxurious clothes.",
            "bn": "আনুগত্য যে ইবাদতের পর্যায়ে পৌঁছাতে পারে, তা বোঝাতে মাআরিফুল কুরআন এ আয়াতের আলোচনায় একটি হাদিসের কথা আনে। হাদিসটি এমন মানুষকে নিয়ে, যে নিজের সম্পদের গোলাম হয়ে যায়। এর একটি বর্ণনা আছে সহীহ বুখারীতে, ২৮৮৬ নম্বরে, আবু হুরাইরা (রাঃ) থেকে। নবী ﷺ বলেছেন: দিনার আর দিরহামের গোলাম, কাতীফা আর খামীসার গোলাম ধ্বংস হোক। তাকে এগুলো দেওয়া হলে সে খুশি, না দেওয়া হলে নাখোশ। কাতীফা আর খামীসা হলো দামি কাপড়। অনুবাদক এগুলোর অর্থ করেছেন সম্পদ আর বিলাসী পোশাক।"
          },
          {
            "en": "Some caution is needed. Ma'arif's paraphrase also speaks of a servant of the spouse, but the Bukhari wording quoted here does not contain that phrase, so this article does not attach it to al-Bukhari. And no tafsir fetched for 36:60 ties this hadith to the verse as its occasion; it is a general narration, brought in by Ma'arif only to explain what worship means. Its place in his Sahih is al-Bukhari's own mark of soundness, though he notes after it that Israʾil narrated it from Abu Hasin without raising it to the Prophet.",
            "bn": "এখানে কিছু সতর্কতা দরকার। মাআরিফুল কুরআনের বর্ণনায় স্ত্রীর গোলামের কথাও আছে, কিন্তু এখানে উদ্ধৃত বুখারীর শব্দে সে কথা নেই। তাই এ লেখা ওই অংশটুকু বুখারীর নামে জুড়ে দিচ্ছে না। আর ৩৬:৬০-এর জন্য দেখা কোনো তাফসীর এ হাদিসকে আয়াত নাজিলের উপলক্ষ হিসেবে জোড়েনি। এটা একটা সাধারণ বর্ণনা। মাআরিফুল কুরআন এনেছে শুধু ইবাদতের অর্থ বোঝাতে। সহীহ গ্রন্থে এর স্থান পাওয়াই বুখারীর নিজের দেওয়া বিশুদ্ধতার স্বীকৃতি। তবে হাদিসের পরে তিনি উল্লেখ করেছেন, ইসরাঈল এটি আবু হাসীন থেকে বর্ণনা করেছেন নবী ﷺ পর্যন্ত না পৌঁছিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Addressed to Every Child of Adam",
          "bn": "প্রত্যেক আদম সন্তানের প্রতি"
        },
        "p": [
          {
            "en": "The vocative ya bani Adam matters. Ma'arif al-Qur'an says these words will be spoken on the Day of Qiyamah to all human beings. Al-Qurtubi records a grammatical note from al-Kisaʾi on the particle: the la in an la taʿbudu is the la of prohibition, so the instruction is a direct forbidding. The verse also ends in the middle of a thought. The charge is not complete until the next verse, 36:61, where the same address carries on, so 36:60 is best read as the first half of one sentence.",
            "bn": "ইয়া বানী আদাম, এই সম্বোধনটা গুরুত্বপূর্ণ। মাআরিফুল কুরআন বলে, কিয়ামতের দিন এ কথা বলা হবে সব মানুষকে। কুরতুবী অব্যয়টি নিয়ে কিসাঈর একটি ব্যাকরণগত মন্তব্য উল্লেখ করেন: আন লা তা'বুদূ-তে যে লা, তা নিষেধের লা। অর্থাৎ নির্দেশটা সরাসরি নিষেধাজ্ঞা। আয়াতটি আবার শেষও হয় কথার মাঝখানে। নির্দেশটা পূর্ণ হয় পরের আয়াত ৩৬:৬১-এ গিয়ে, যেখানে একই সম্বোধন চলতে থাকে। তাই ৩৬:৬০-কে পড়া ভালো এক বাক্যের প্রথম অর্ধেক হিসেবে।"
          },
          {
            "en": "Because the address is to humanity, the verse is not a label to pin on anyone now living. It describes what Allah will say to those judged on that Day, and the judging is His alone. It licenses nothing against any living person or community, and gives no one the right to call a neighbour, a rival or another group the party of Satan. The only person a reader can usefully test against this verse is the one holding the book.",
            "bn": "সম্বোধন যেহেতু গোটা মানবজাতির প্রতি, তাই আজ বেঁচে থাকা কারও গায়ে সাঁটার মতো তকমা এ আয়াত নয়। আয়াতটি বলে, সে দিন যাদের বিচার হবে, তাদের আল্লাহ কী বলবেন। আর বিচার একমাত্র তাঁরই। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। প্রতিবেশী, প্রতিপক্ষ বা অন্য কোনো দলকে শয়তানের দল বলে দাগানোর অধিকারও কাউকে দেয় না। এ আয়াত দিয়ে মেপে দেখে সত্যিকারের লাভ হয় শুধু একজনের বেলায়: যিনি কিতাবটি হাতে নিয়ে পড়ছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Answering While It Is Today",
          "bn": "জবাব দেওয়ার সময় এখনই"
        },
        "p": [
          {
            "en": "On that Day the question will need no reply; the record will already have answered it. Today it is different. The charge described by al-Qurtubi and as-Sa'di is still being delivered, on the tongues of the messengers, through the Book that carries their message. Each time Allah's command and some other voice pull in opposite directions, the reader is being asked the question early, and the choice made then is the real answer.",
            "bn": "সে দিন প্রশ্নটার কোনো জবাব লাগবে না। আমলনামাই তার জবাব দিয়ে রাখবে। আজকের ব্যাপারটা আলাদা। কুরতুবী আর সা'দী যে নির্দেশের কথা বলেন, তা এখনো পৌঁছে চলেছে রাসূলদের মুখে, সেই কিতাবের মাধ্যমে যা তাঁদের বাণী বয়ে আনে। যখনই আল্লাহর হুকুম আর অন্য কোনো ডাক দুই দিকে টানে, প্রশ্নটা তখনই আগেভাগে পাঠকের সামনে এসে দাঁড়ায়। আর তখন তিনি যা বেছে নেন, সেটাই আসল জবাব।"
          },
          {
            "en": "The enemy does not usually ask for open allegiance. He asks for small permissions: a prayer delayed, a word said that should not be, money taken from where it should not come. As-Sa'di's point is that each of these is obedience to him in its measure. Seeing that clearly is not meant to frighten a believer into despair. It is meant to let him recognise the voice for what it is and turn back towards the Lord who created him and provides for him.",
            "bn": "শত্রু সাধারণত প্রকাশ্য আনুগত্যের শপথ চায় না। সে চায় ছোট ছোট অনুমতি। একটু দেরিতে নামাজ, মুখ ফসকে বলা অনুচিত কোনো কথা, যেখান থেকে আসার কথা নয় সেখান থেকে আসা টাকা। সা'দীর কথা হলো, এর প্রতিটিই নিজ মাত্রায় তার আনুগত্য। এটা স্পষ্ট করে দেখা মুমিনকে ভয় দেখিয়ে হতাশ করার জন্য নয়। এর উদ্দেশ্য, ডাকটাকে তার আসল চেহারায় চিনে নিয়ে সেই সত্তার দিকে ফিরে আসা, যিনি সৃষ্টি করেছেন আর রিযিক দেন।"
          },
          {
            "en": "So the verse leaves the reader with a simple test that works in any hour of any day. Before acting, ask whose instruction this choice is following. If it is Allah's, the charge given through the messengers is being kept. If it is the enemy's, there is still time, as there will not be on that Day, to stop, seek forgiveness and choose differently. The question of 36:60 is asked once at the end, but it can be answered many times before it.",
            "bn": "তাই আয়াতটি পাঠকের হাতে এক সহজ পরীক্ষা রেখে যায়, যা দিনের যে কোনো সময় কাজে লাগে। কিছু করার আগে নিজেকে জিজ্ঞেস করুন: এই সিদ্ধান্ত কার নির্দেশ মানছে? যদি আল্লাহর হয়, তবে রাসূলদের মাধ্যমে দেওয়া নির্দেশ রক্ষা হচ্ছে। যদি শত্রুর হয়, তবে এখনো সময় আছে, যা সে দিন থাকবে না। থামুন, ইস্তিগফার করুন, অন্য পথ বেছে নিন। ৩৬:৬০-এর প্রশ্ন শেষে করা হবে একবার, কিন্তু তার আগে এর জবাব দেওয়া যায় বহুবার।"
          }
        ]
      }
    ]
  },
  "36:69": {
    "sections": [
      {
        "h": {
          "en": "Who Called Him a Poet",
          "bn": "কারা তাঁকে কবি বলত"
        },
        "p": [
          {
            "en": "Wa ma 'allamnahu al-shi'ra wa ma yanbaghi lahu: and We did not teach him poetry, nor is it befitting for him. Al-Baghawi gives the setting on the authority of al-Kalbi: the disbelievers of Makkah said that Muhammad ﷺ was a poet and that what he said was poetry, so Allah sent this verse down to give them the lie. As-Sa'di likewise reads it as Allah clearing His Prophet of what the idolaters threw at him, that he was a poet and that what he brought was poetry.",
            "bn": "ওয়া মা আল্লামনাহুশ শি'রা ওয়া মা ইয়ামবাগী লাহু: আমি তাঁকে কবিতা শেখাইনি, আর তা তাঁর জন্য শোভনও নয়। আয়াতের প্রেক্ষাপট বাগাভী জানান কালবীর সূত্রে। মক্কার কাফিররা বলত, মুহাম্মাদ ﷺ একজন কবি, আর তিনি যা বলেন তা কবিতা। তাদের মিথ্যা ধরিয়ে দিতে আল্লাহ এ আয়াত নাযিল করেন। সা'দীও একইভাবে পড়েন: মুশরিকরা নবীর গায়ে যে অপবাদ ছুড়েছিল, যে তিনি কবি আর তাঁর আনা বাণী কবিতা, আল্লাহ এখানে তা থেকে তাঁকে পবিত্র ঘোষণা করছেন।"
          },
          {
            "en": "Al-Qurtubi shows how hollow the charge was even to those who made it. Quraysh, he writes, consulted over what they would tell the Arabs arriving for the pilgrimage season, and some proposed: we will say he is a poet. The shrewder among them answered that the Arabs would call them liars, because they knew every form of poetry, and by Allah his speech resembled none of those forms and was not poetry at all.",
            "bn": "অভিযোগটা যে ফাঁপা ছিল, তা অভিযোগকারীরাও জানত। কুরতুবী লেখেন, হজের মৌসুমে আরবরা এলে তাদের কী বলা হবে, তা নিয়ে কুরাইশ পরামর্শে বসেছিল। কেউ প্রস্তাব দিল, আমরা বলব সে কবি। তাদের মধ্যে যারা বুদ্ধিমান, তারা জবাব দিল: আরবরা তোমাদের মিথ্যাবাদী বলবে। কবিতার সব ধরন তাদের চেনা, আর আল্লাহর কসম, তাঁর কথা সেগুলোর কোনোটার মতো নয়, কবিতাই নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an explains why the deniers reached for the label at all. They could not deny the Qur'an's power to move hearts, so they looked for an account of that power that left the Divine Word out of it: it was magic, or it was poetry, since poetry too stirs the heart. The verse does not weigh the accusation as though it had some merit. It names the charge only to remove it, and that is the only way it is reported here.",
            "bn": "অস্বীকারকারীরা এই নাম কেন খুঁজে নিল, মাআরিফুল কুরআন তা ব্যাখ্যা করে। কুরআন যে মানুষের হৃদয় নাড়িয়ে দেয়, তা অস্বীকার করার উপায় ছিল না। তাই তারা এমন ব্যাখ্যা খুঁজল যাতে আল্লাহর বাণীর কথা আসে না। বলল, এটা জাদু, অথবা কবিতা, কারণ কবিতাও তো মন দোলায়। আয়াতটি এই অভিযোগকে এমনভাবে বিচার করে না যেন এর কোনো ওজন ছিল। অভিযোগের উল্লেখ কেবল তা খণ্ডন করার জন্য, আর এ লেখাতেও কথাটা আসছে শুধু সেভাবেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Taught, and Not Fitting",
          "bn": "শেখানো হয়নি, মানায়ও না"
        },
        "p": [
          {
            "en": "At-Tabari and the Muyassar read the second clause the same way: it was not befitting for him to be a poet. Ibn Kathir turns it towards his nature. Poetry, he says, was not in his temperament: he did not do it well, did not love it, and his disposition did not call for it. It was reported, he adds, that he could not keep a line in correct meter; if he recited one, he lamed it or left it unfinished.",
            "bn": "তাবারী আর মুয়াসসার দ্বিতীয় বাক্যাংশ একইভাবে পড়েন: কবি হওয়া তাঁর জন্য শোভন ছিল না। ইবন কাসীর কথাটা তাঁর স্বভাবের দিকে নিয়ে যান। তিনি বলেন, কবিতা নবীর মেজাজে ছিল না। তিনি তা ভালো পারতেন না, পছন্দও করতেন না, তাঁর সহজাত প্রকৃতিও সেদিকে টানত না। ইবন কাসীর আরও জানান, বর্ণিত আছে যে তিনি ঠিক ছন্দে কোনো পঙক্তি মনে রাখতে পারতেন না। আবৃত্তি করলে ছন্দ ভেঙে যেত, নয়তো অসম্পূর্ণ থাকত।"
          },
          {
            "en": "Al-Baghawi says it was not made easy for him: not a single line of verse would scan for him, so that when he quoted a line it came off his tongue broken. Al-Qurtubi records the reading of az-Zajjaj, that what Allah did not teach him was to compose, that is, He did not make him a poet, and that this does not stop him reciting something of poetry. An-Nahhas, he notes, rated this among the best readings of the verse. The denial falls on the craft and the title.",
            "bn": "বাগাভী বলেন, বিষয়টা তাঁর জন্য সহজ করা হয়নি। কবিতার কোনো পঙক্তিই তাঁর মুখে ঠিক ছন্দে বসত না। কোনো পঙক্তি উদ্ধৃত করলে তা ভাঙা অবস্থায় বেরোত। কুরতুবী যাজ্জাজের ব্যাখ্যা তুলে ধরেন। আল্লাহ তাঁকে যা শেখাননি তা হলো কবিতা রচনা, অর্থাৎ তাঁকে কবি বানাননি। এতে অন্যের কবিতা থেকে কিছু আবৃত্তি করা নিষেধ হয়ে যায় না। কুরতুবী জানান, নাহহাস এ ব্যাখ্যাকে আয়াতের ব্যাপারে বলা সবচেয়ে ভালো কথাগুলোর একটি বলেছেন। অস্বীকারটা তাই কবিতার কারিগরি আর কবি উপাধির ওপর।"
          },
          {
            "en": "As-Sa'di goes furthest. That he should be a poet, he writes, belongs to the category of the impossible, because he is rashid muhtadi, rightly directed and guided, while the poets are ghawun, straying, and those who follow them stray too. The phrase echoes 26:224. The clause wa ma yanbaghi lahu then says more than that a skill was missing. The role of poet and the role of messenger point in opposite directions.",
            "bn": "সা'দী সবচেয়ে দূর পর্যন্ত যান। তাঁর মতে নবীর কবি হওয়া অসম্ভবের পর্যায়ের কথা। কারণ তিনি রাশীদ ও মুহতাদী, সঠিক পথে চালিত ও হিদায়াতপ্রাপ্ত। আর কবিরা গাবূন, পথভ্রষ্ট, যাদের অনুসারীরাও পথভ্রষ্ট। শেষ কথাটি ২৬:২২৪ আয়াতের প্রতিধ্বনি। তাহলে ওয়া মা ইয়ামবাগী লাহু শুধু এটুকু বলে না যে একটা দক্ষতা তাঁর ছিল না। কবির ভূমিকা আর রাসূলের ভূমিকা দুই উল্টো দিকে চলে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Proof Set in His Nature",
          "bn": "স্বভাবের ভেতরে রাখা প্রমাণ"
        },
        "p": [
          {
            "en": "Al-Qurtubi explains why the absence matters. Allah, he says, made this one of the signs of His Prophet, so that no doubt would enter the minds of those to whom he was sent, and no one would suppose that he had managed the Qur'an through some poetic strength in his nature. As-Sa'di places it in a wider pattern: Allah cut off every doubt the misguided might cling to, settling that he would neither write nor read, and telling us He had not taught him poetry.",
            "bn": "এই না-থাকাটা কেন গুরুত্বপূর্ণ, কুরতুবী তা ব্যাখ্যা করেন। তিনি বলেন, আল্লাহ একে তাঁর নবীর নিদর্শনগুলোর একটি বানিয়েছেন, যাতে যাদের কাছে তাঁকে পাঠানো হয়েছে তাদের মনে সন্দেহ ঢুকতে না পারে। কেউ যেন না ভাবে, স্বভাবের কাব্যশক্তি দিয়েই তিনি কুরআন বানিয়ে ফেলেছেন। সা'দী একে আরও বড় নকশার ভেতরে রাখেন। পথভ্রষ্টরা যে সন্দেহ আঁকড়ে ধরতে পারত, আল্লাহ তার সবগুলোর পথ বন্ধ করেছেন। তিনি স্থির করেছেন নবী লিখবেনও না, পড়বেনও না, আর জানিয়ে দিয়েছেন যে তাঁকে কবিতা শেখানো হয়নি।"
          },
          {
            "en": "Al-Qurtubi then quotes Ibn al-'Arabi, who says the verse is no fault-finding with poetry, just as 29:48, which says the Prophet recited no book before this and wrote none with his right hand, is no fault-finding with writing. Al-Qurtubi adds a story of the caliph al-Ma'mun, who rebuked a man for excusing his illiteracy and his broken verse by the Prophet's example: in the Prophet it was a virtue, in you a defect. It was withheld from him to remove suspicion, not because poetry or writing is a fault.",
            "bn": "এরপর কুরতুবী ইবনুল আরাবীর কথা আনেন। ২৯:৪৮ আয়াত বলছে, এর আগে নবী কোনো কিতাব পড়তেন না, ডান হাতে কিছু লিখতেনও না। ইবনুল আরাবী বলেন, সে আয়াত যেমন লেখালেখির দোষ ধরে না, এ আয়াতও তেমনি কবিতার দোষ ধরে না। কুরতুবী খলিফা মামুনের একটা ঘটনাও আনেন। এক লোক নিজের নিরক্ষরতা আর ছন্দ ভাঙার অজুহাত দিচ্ছিল নবীর উদাহরণ টেনে। মামুন তাকে ধমক দিয়ে বললেন, নবীর বেলায় এটা ছিল মর্যাদা, তোমার বেলায় এটা ঘাটতি। সন্দেহ দূর করতেই তাঁকে এ থেকে দূরে রাখা হয়েছিল, কবিতা বা লেখা দোষের বলে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Grey Hair Before Islam",
          "bn": "পাকা চুল আগে, না ইসলাম"
        },
        "p": [
          {
            "en": "Al-Baghawi reports, with his own chain, and Ibn Kathir through Ibn Abi Hatim, that al-Hasan, whom Ibn Kathir identifies as al-Basri, said: the Prophet ﷺ used to quote the line kafa bil-islami wa'sh-shaybi lil-mar'i nahiya, Islam and grey hair suffice a man as a restraint. Abu Bakr (RA) said: Messenger of Allah, the poet only said kafa ash-shaybu wa'l-islamu, grey hair and Islam. Al-Qurtubi supplies the opening half of the line: Hurayrata wadda' in tajahhazta ghadiya, bid Hurayra farewell if you set out at dawn.",
            "bn": "বাগাভী নিজের সনদে, আর ইবন কাসীর ইবনু আবী হাতিমের সূত্রে, হাসান থেকে বর্ণনা করেন। ইবন কাসীর জানিয়ে দেন, ইনি হাসান বসরী। নবী ﷺ একটি পঙক্তি উদ্ধৃত করতেন: কাফা বিল-ইসলামি ওয়াশ-শাইবি লিল-মারই নাহিয়া, মানুষকে বিরত রাখতে ইসলাম আর পাকা চুলই যথেষ্ট। আবু বকর (রাঃ) বললেন, হে আল্লাহর রাসূল, কবি তো বলেছিল কাফাশ-শাইবু ওয়াল-ইসলামু, পাকা চুল আর ইসলাম। পঙক্তির প্রথম অর্ধেক কুরতুবী জুড়ে দেন: হুরাইরাতা ওয়াদ্দি' ইন তাজাহহাযতা গাদিয়া, ভোরে রওনা হলে হুরাইরাকে বিদায় জানাও।"
          },
          {
            "en": "Then the witness. In al-Baghawi's wording Abu Bakr and Umar (RA) both said: I bear witness that you are the Messenger of Allah. Ibn Kathir and al-Qurtubi have Abu Bakr or Umar, the narrator unsure which. All three then cite this verse. The detail that moved them was the inversion itself. Anyone with a poet's ear hears a broken meter at once; he did not, and his companion drew a proof from it. None of the three grades the report, and this article does not either.",
            "bn": "তারপর সাক্ষ্য। বাগাভীর ভাষ্যে আবু বকর আর উমর (রাঃ) দুজনেই বললেন: আমি সাক্ষ্য দিচ্ছি, আপনি আল্লাহর রাসূল। ইবন কাসীর আর কুরতুবীর বর্ণনায় আছে আবু বকর অথবা উমর, বর্ণনাকারী নিশ্চিত নন কে। এরপর তিনজনই এ আয়াত উল্লেখ করেন। সাহাবিদের নাড়া দিয়েছিল শব্দ উল্টে যাওয়ার ব্যাপারটাই। কবির কান থাকলে ছন্দ ভাঙা সঙ্গে সঙ্গে ধরা পড়ে। তাঁর কাছে পড়েনি, আর সাহাবি এ থেকেই প্রমাণ টেনে নিলেন। তিন তাফসীরের কেউ বর্ণনাটির মান নির্ণয় করেননি, এ লেখাও করছে না।"
          },
          {
            "en": "Ibn Kathir adds a second case from al-Bayhaqi's Dala'il. The Prophet ﷺ said to al-'Abbas ibn Mirdas: was it you who said, do you put my plunder and the plunder of al-'Ubayd between al-Aqra' and 'Uyayna? Al-'Abbas corrected him: it is between 'Uyayna and al-Aqra'. He answered: it is all the same, meaning the sense was unchanged. Al-Qurtubi gives the principle behind both stories: when he quoted, he guarded the meanings only.",
            "bn": "ইবন কাসীর বায়হাকীর দালাইল থেকে আরেকটি ঘটনা আনেন। নবী ﷺ আব্বাস ইবনু মিরদাসকে বললেন: তুমিই কি সেই লোক যে বলেছিল, আমার আর উবাইদের গনিমত কি আকরা আর উয়াইনার মধ্যে ভাগ করে দেবে? আব্বাস শুধরে দিলেন, উয়াইনা আর আকরার মধ্যে। তিনি বললেন, সবই এক। অর্থাৎ অর্থে কোনো তফাত নেই। কুরতুবী দুই ঘটনার পেছনের মূলনীতিটা বলে দেন: উদ্ধৃত করার সময় তিনি কেবল অর্থটুকু ধরে রাখতেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Tarafa's Line, Told Two Ways",
          "bn": "তারাফার পঙক্তির দুই ভাষ্য"
        },
        "p": [
          {
            "en": "At-Tabari, with his chain to Qatada, and Ibn Kathir report that Aisha (RA) was asked whether the Messenger of Allah ﷺ used to quote any poetry. She said: it was the most hated speech to him, except that he would quote a line of the brother of Banu Qays, putting its end first and its beginning last. Abu Bakr (RA) said: it is not like that. He replied: by Allah, I am not a poet, nor is it befitting for me. His reply repeats the verse's own wording.",
            "bn": "তাবারী কাতাদা পর্যন্ত নিজের সনদে বর্ণনা করেন, ইবন কাসীরও করেন: আয়িশা (রাঃ)-কে জিজ্ঞেস করা হয়েছিল, রাসূলুল্লাহ ﷺ কি কবিতা থেকে কিছু উদ্ধৃত করতেন? তিনি বললেন, কবিতা ছিল তাঁর কাছে সবচেয়ে অপছন্দের কথা। তবে বনু কায়সের এক লোকের একটা পঙক্তি তিনি উদ্ধৃত করতেন, শেষটা আগে আর শুরুটা পরে বসিয়ে। আবু বকর (রাঃ) বললেন, পঙক্তিটা এরকম নয়। তিনি বললেন, আল্লাহর কসম, আমি কবি নই, আর তা আমার জন্য শোভনও নয়। তাঁর জবাবে আয়াতের শব্দগুলোই ফিরে আসে।"
          },
          {
            "en": "Ma'mar's version from Qatada, which opens it reached me, appears in al-Baghawi and Ibn Kathir and names the poet: Tarafa. The full line runs sa-tubdi laka al-ayyamu ma kunta jahilan, wa ya'tika bil-akhbari man lam tuzawwidi: the days will show you what you did not know, and news will be brought by someone you never provisioned. In this report he said it as wa ya'tika man lam tuzawwid bil-akhbar, the news moved to the end. Al-Qurtubi gives it inverted too.",
            "bn": "কাতাদা থেকে মা'মারের ভাষ্য শুরু হয় 'আমার কাছে পৌঁছেছে' কথাটি দিয়ে। বাগাভী আর ইবন কাসীর দুজনেই এটি আনেন, আর এতে কবির নাম আছে: তারাফা। পুরো পঙক্তি এরকম: সাতুবদী লাকাল আইয়ামু মা কুনতা জাহিলান, ওয়া ইয়া'তীকা বিল-আখবারি মান লাম তুযাওয়িদি। দিনগুলো তোমাকে দেখাবে যা তুমি জানতে না, আর খবর এনে দেবে এমন লোক যাকে তুমি পাথেয় দিয়ে পাঠাওনি। এ বর্ণনায় তিনি বলতেন, ওয়া ইয়া'তীকা মান লাম তুযাওয়িদ বিল-আখবার, খবর শব্দটা চলে গেছে শেষে। কুরতুবীও উল্টানো রূপেই দেন।"
          },
          {
            "en": "Ibn Kathir, however, also cites Imam Ahmad through ash-Sha'bi from Aisha (RA): when news was slow in coming, he would quote Tarafa's wa ya'tika bil-akhbari man lam tuzawwidi, in its proper order. An-Nasa'i reports it so in al-Yawm wa'l-Layla, and al-Baghawi's own report through al-Miqdam ibn Shurayh keeps the order as well. So the reports disagree on whether this half-line came out reversed. The commentators leave them side by side unsettled, and so does this article.",
            "bn": "অন্যদিকে ইবন কাসীর ইমাম আহমাদের বর্ণনাও আনেন, শা'বীর সূত্রে আয়িশা (রাঃ) থেকে। খবর আসতে দেরি হলে তিনি তারাফার ওয়া ইয়া'তীকা বিল-আখবারি মান লাম তুযাওয়িদি উদ্ধৃত করতেন, ঠিক ক্রমেই। নাসাঈ তাঁর আল-ইয়াওম ওয়াল-লাইলায় এভাবেই এনেছেন। বাগাভীর নিজের আরেক বর্ণনা, মিকদাম ইবনু শুরাইহের সূত্রে, সেখানেও ক্রম ঠিক আছে। তাহলে এই অর্ধ-পঙক্তি উল্টে বেরিয়েছিল কি না, তা নিয়ে বর্ণনাগুলো একমত নয়। তাফসীরকারেরা মীমাংসা না করে পাশাপাশি রেখেছেন, এ লেখাও তাই রাখল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Poet Tests the Words",
          "bn": "এক কবির যাচাই"
        },
        "p": [
          {
            "en": "Ibn Kathir notes that at-Tirmidhi also has the al-Miqdam report. Jami' at-Tirmidhi 2848, from al-Miqdam ibn Shurayh from his father: Aisha (RA) was asked whether the Prophet ﷺ used to quote any poetry. She said: he would quote the poetry of Ibn Rawaha, and he would quote, saying: and news will be brought to you by someone you never provisioned. At-Tirmidhi grades it hasan sahih. Here the half-line stands in its proper order, and Ibn Kathir places it in Tarafa's famous ode.",
            "bn": "ইবন কাসীর জানান, মিকদামের বর্ণনাটি তিরমিযীতেও আছে। জামে তিরমিযী ২৮৪৮, মিকদাম ইবনু শুরাইহ তাঁর পিতা থেকে: আয়িশা (রাঃ)-কে জিজ্ঞেস করা হলো, নবী ﷺ কি কবিতা থেকে কিছু উদ্ধৃত করতেন? তিনি বললেন, তিনি ইবনু রাওয়াহার কবিতা উদ্ধৃত করতেন, আর উদ্ধৃত করে বলতেন: খবর তোমার কাছে নিয়ে আসবে এমন লোক যাকে তুমি পাথেয় দিয়ে পাঠাওনি। তিরমিযী একে হাসান সহীহ বলেছেন। এখানে অর্ধ-পঙক্তিটি ঠিক ক্রমে আছে, আর ইবন কাসীর একে তারাফার বিখ্যাত কাসীদার অংশ বলে চিহ্নিত করেন।"
          },
          {
            "en": "Al-Qurtubi brings a second witness and notes that Muslim reported it. In the long hadith of Abu Dharr's coming to Islam, Sahih Muslim 2473, his brother Unays returns from Makkah and Abu Dharr asks what people say of the man there. Unays answers: they say a poet, a soothsayer, a sorcerer. And Unays was one of the poets. Unays said: I have heard the speech of soothsayers, and this is not their speech.",
            "bn": "কুরতুবী আরেকজন সাক্ষী আনেন এবং জানান, মুসলিম এটি বর্ণনা করেছেন। আবু যার (রাঃ)-এর ইসলাম গ্রহণের দীর্ঘ হাদীসে, সহীহ মুসলিম ২৪৭৩, তাঁর ভাই উনাইস মক্কা থেকে ফেরেন। আবু যার জানতে চান, সেখানকার লোকটি সম্পর্কে মানুষ কী বলে। উনাইস জবাব দেন: তারা বলে কবি, গণক, জাদুকর। উনাইস নিজেও ছিলেন একজন কবি। তিনি বললেন: আমি গণকদের কথা শুনেছি, তাঁর কথা তাদের কথার মতো নয়।"
          },
          {
            "en": "He went on: I have laid his words against the measures of poetry, and it will not hold on anyone's tongue after me that it is poetry. By Allah, he is truthful and they are liars. The hadith is not narrated as commentary on this verse; al-Qurtubi brings it here. Ibn Kathir also cites Imam Ahmad, ungraded, from Aisha (RA): poetry was the most hated speech to him.",
            "bn": "তারপর বললেন: আমি তাঁর কথাকে কবিতার ছন্দের মাপে বসিয়ে দেখেছি। আমার পরে কেউ একে কবিতা বললে সে কথা টিকবে না। আল্লাহর কসম, তিনি সত্যবাদী, আর ওরা মিথ্যাবাদী। হাদিসটি এ আয়াতের ব্যাখ্যা হিসেবে বর্ণিত হয়নি। কুরতুবী নিজে একে এখানে এনেছেন। ইবন কাসীর ইমাম আহমাদের সূত্রে আয়িশা (রাঃ)-এর কথাও আনেন, মান নির্ণয় ছাড়া: কবিতা ছিল তাঁর কাছে সবচেয়ে অপছন্দের কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "When Speech Falls Into Meter",
          "bn": "কথা যখন ছন্দে পড়ে যায়"
        },
        "p": [
          {
            "en": "Ibn Kathir says the Sahihs of al-Bukhari and Muslim record him joining his companions' rajaz from Ibn Rawaha's verses while they dug the Trench. At Hunayn he said ana an-nabiyyu la kadhib, ana ibnu 'Abd al-Muttalib, I am the Prophet, no lie; I am the son of 'Abd al-Muttalib. Such lines, Ibn Kathir reports the scholars saying, fell into meter by chance, without aiming at verse.",
            "bn": "ইবন কাসীর বলেন, বুখারী ও মুসলিমে আছে, খন্দক খোঁড়ার সময় তিনি সাহাবিদের সঙ্গে ইবনু রাওয়াহার রাজায পঙক্তিতে গলা মেলাতেন। হুনাইনে তিনি বলেছিলেন: আনান নাবিয়্যু লা কাযিব, আনা ইবনু আব্দিল মুত্তালিব। আমি নবী, মিথ্যা নয়, আমি আব্দুল মুত্তালিবের সন্তান। ইবন কাসীর আলিমদের কথা উদ্ধৃত করেন: এসব কাকতালীয়ভাবে ছন্দে পড়ে গেছে, কবিতা রচনার ইচ্ছা ছাড়াই।"
          },
          {
            "en": "Al-Qurtubi answers the same way and widens it. Phrases that happen to scan occur in all speech, he says, even in the Qur'an, as in lan tanalu al-birra hatta tunfiqu mimma tuhibbun in 3:92 and nasrun min Allahi wa fathun qarib in 61:13, and none of this is poetry. Quoting a line or hitting a rhyme, by the agreement of the scholars, does not make a man a poet, just as whoever sews a single stitch is not a tailor.",
            "bn": "কুরতুবীও একই জবাব দেন, আরও বিস্তৃত করে। তিনি বলেন, ছন্দে মিলে যাওয়া বাক্য সব কথাতেই আসে, এমনকি কুরআনেও। যেমন ৩:৯২ আয়াতে লান তানালুল বিররা হাত্তা তুনফিকূ মিম্মা তুহিব্বূন, আর ৬১:১৩ আয়াতে নাসরুম মিনাল্লাহি ওয়া ফাতহুন কারীব। এর কোনোটাই কবিতা নয়। আলিমদের ঐকমত্য অনুযায়ী, একটা পঙক্তি উদ্ধৃত করলে বা অন্ত্যমিল মিলে গেলেই কেউ কবি হয়ে যায় না। ঠিক যেমন একটা ফোঁড় সেলাই করলেই কেউ দর্জি হয় না।"
          },
          {
            "en": "Whether the verse says anything against poetry itself is a real disagreement. Al-Qurtubi reports that Malik, asked about reciting poetry, said: do not do much of it, for among its faults is that Allah says, We did not teach him poetry. Ibn al-'Arabi holds that the verse finds no fault in poetry. Ibn Kathir notes that some poetry is lawful, naming Hassan ibn Thabit, Ka'b ibn Malik and Ibn Rawaha. Both positions stand here.",
            "bn": "আয়াতটি খোদ কবিতার বিরুদ্ধে কিছু বলে কি না, তা নিয়ে সত্যিকারের মতভেদ আছে। কুরতুবী জানান, ইমাম মালিককে কবিতা আবৃত্তির ব্যাপারে জিজ্ঞেস করা হলে বলেছিলেন: বেশি কোরো না। এর দোষের মধ্যে আছে যে আল্লাহ বলেছেন, আমি তাঁকে কবিতা শেখাইনি। ইবনুল আরাবী বলেন আয়াতটি কবিতার দোষ ধরে না। ইবন কাসীর জানান, কিছু কবিতা বৈধ, আর নাম নেন হাসসান ইবনু সাবিত, কা'ব ইবনু মালিক ও ইবনু রাওয়াহার। দুই মতই এখানে রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing but a Reminder",
          "bn": "উপদেশ ছাড়া আর কিছু নয়"
        },
        "p": [
          {
            "en": "In huwa illa dhikrun wa qur'anun mubin: it is nothing but a reminder and a clear Qur'an. The commentators differ on what it refers to. At-Tabari takes it as Muhammad ﷺ himself: he is nothing but a reminder to you, Allah reminding you by sending him and alerting you to your share. Al-Baghawi takes it as the Qur'an. Ibn Kathir reads it as what We taught him, and al-Qurtubi as what he recites to you.",
            "bn": "ইন হুয়া ইল্লা যিকরুন ওয়া কুরআনুম মুবীন: এ তো কেবল উপদেশ আর সুস্পষ্ট কুরআন। হুয়া বলতে কী বোঝানো হয়েছে, তাফসীরকারেরা এক কথা বলেন না। তাবারীর মতে এ খোদ মুহাম্মাদ ﷺ। তিনি তোমাদের জন্য উপদেশ মাত্র, তাঁকে পাঠিয়ে আল্লাহ তোমাদের মনে করিয়ে দিয়েছেন আর তোমাদের নিজেদের কল্যাণের ব্যাপারে সজাগ করেছেন। বাগাভীর মতে এ হলো কুরআন। ইবন কাসীর পড়েন, যা আমি তাঁকে শিখিয়েছি। কুরতুবী পড়েন, যা তিনি তোমাদের সামনে তিলাওয়াত করেন।"
          },
          {
            "en": "On the two nouns, al-Baghawi glosses dhikr as exhortation and says the clear Qur'an holds the obligations, the limits and the rulings. As-Sa'di says it reminds minds of what Allah set in their natures, the command to every good and the ban on every ugliness. At-Tabari adds that it shows whoever ponders that it is revelation, not poetry and not a soothsayer's speech.",
            "bn": "শব্দ দুটি নিয়ে বাগাভী বলেন, জিকির মানে নসিহত, আর সুস্পষ্ট কুরআনে আছে ফরজগুলো, সীমারেখা আর বিধান। সা'দী বলেন, আল্লাহ মানুষের ফিতরাতে যা গেঁথে দিয়েছেন, অর্থাৎ সব ভালোর আদেশ আর সব মন্দের নিষেধ, এ কিতাব বিবেককে তা মনে করিয়ে দেয়। তাবারী যোগ করেন, যে ভেবে দেখে, সে এ থেকেই বুঝে নেয় যে এটা ওহি, কবিতা নয়, গণকের কথাও নয়।"
          },
          {
            "en": "The verse turns attention from the Messenger's tongue to the listener's ear. The labels on offer let its hearers admire or dismiss without obeying. A reminder cannot be kept at that distance; it asks to be acted on, and a clear Book asks to be understood, not only enjoyed. Finding a recitation beautiful is a real gift; the next step is asking what the words said to do.",
            "bn": "আয়াতটি মনোযোগ সরিয়ে আনে রাসূলের মুখ থেকে শ্রোতার কানে। নানা নাম হাতের কাছে থাকায় শ্রোতারা মুগ্ধ হতে পারত, নয়তো উড়িয়ে দিতে পারত, মানতে হতো না। উপদেশকে এভাবে দূরে রাখা যায় না, উপদেশ চায় আমল। সুস্পষ্ট কিতাব চায় বোঝা, শুধু উপভোগ নয়। তিলাওয়াত সুন্দর লাগা সত্যিই এক নিয়ামত। পরের ধাপ হলো প্রশ্ন করা, এই কথাগুলো আমাকে কী করতে বলল।"
          }
        ]
      }
    ]
  },
  "36:77": {
    "sections": [
      {
        "h": {
          "en": "From Comfort to a Question",
          "bn": "সান্ত্বনার পরেই প্রশ্ন"
        },
        "p": [
          {
            "en": "Awa-lam yara al-insanu anna khalaqnahu min nutfatin fa-idha huwa khasimun mubin: does man not see that We created him from a drop, and then, at once, he is a clear adversary? The verse follows directly on 36:76, where the Prophet ﷺ is told not to let their speech grieve him, because Allah knows what they hide and what they declare. The verses before that spoke of livestock created and tamed for people, and of gods taken that cannot help them. Now the address turns away from the grieving Prophet ﷺ towards the man whose words caused the grief.",
            "bn": "আওয়ালাম ইয়ারাল ইনসানু আন্না খালাকনাহু মিন নুতফাতিন ফাইযা হুয়া খাসীমুম মুবীন: মানুষ কি দেখে না, আমি তাকে এক ফোঁটা শুক্র থেকে সৃষ্টি করেছি, আর তারপরই সে হয়ে গেল প্রকাশ্য ঝগড়াটে? ঠিক আগের আয়াত ৩৬:৭৬-এ নবী ﷺ-কে বলা হয়েছে, ওদের কথা যেন তাঁকে কষ্ট না দেয়। কারণ ওরা যা লুকায় আর যা প্রকাশ করে, আল্লাহ সবই জানেন। তার আগের আয়াতগুলোতে ছিল মানুষের জন্য বানানো ও বশ মানানো পশুর কথা, আর এমন সব উপাস্যের কথা, যারা কোনো সাহায্য করতে পারে না। এবার কথার মুখ ঘুরে যায়। দুঃখ পাওয়া নবী ﷺ-কে ছেড়ে কথা এবার সেই লোকের দিকে, যার কথায় দুঃখটা এসেছিল।"
          },
          {
            "en": "The question is built on the verb of seeing, yara, but the commentators read it as seeing with the mind. Ibn Kathir paraphrases it this way: does the one who denies the resurrection not take the beginning as proof of the return? The Muyassar puts it in nearly the same terms: does man, the denier of the resurrection, not see the beginning of his own creation, and infer from it his coming back? As-Sa'di says the verse points the denier, and the one who doubts, to something that gives complete certainty the resurrection will happen, and that something is his own beginning.",
            "bn": "প্রশ্নটা দাঁড়িয়ে আছে দেখা অর্থের ক্রিয়া ইয়ারা-র উপর। তবে তাফসীরকারেরা একে চোখের দেখা নয়, মনের দেখা হিসেবে পড়েন। ইবন কাসীর অর্থটা খুলে বলেন এভাবে: পুনরুত্থান যে অস্বীকার করে, সে কি শুরু দেখে ফিরে আসার প্রমাণ নেয় না? মুয়াসসারের কথাও প্রায় একই। পুনরুত্থান অস্বীকারকারী মানুষ কি নিজের সৃষ্টির শুরুটা দেখে না, যাতে তা থেকে নিজের ফিরে আসা বুঝে নিতে পারে? সা'দী বলেন, অস্বীকারকারী আর সন্দেহকারী দুজনকেই আয়াতটি এমন এক জিনিসের দিকে দেখায়, যা পুনরুত্থান ঘটবে বলে পুরো নিশ্চয়তা দেয়। সেই জিনিস তার নিজেরই শুরু।"
          },
          {
            "en": "Ibn Kathir reports from Mujahid, Ikrimah, Urwa ibn az-Zubayr, as-Suddi and Qatada that these verses at the end of Ya-Sin were sent down together, from this verse to the last. As-Sa'di describes the passage the same way: it states the doubt of those who deny the resurrection, then answers it in the most complete, the best and the clearest way. This verse is where the answer opens. It does not open with the heavens or the earth, which come later in the passage. It opens with the questioner, and with a plain fact about himself he cannot dispute.",
            "bn": "ইবন কাসীর মুজাহিদ, ইকরিমা, উরওয়া ইবন যুবাইর, সুদ্দী ও কাতাদা থেকে বর্ণনা করেন, ইয়াসীনের শেষের এই আয়াতগুলো এখান থেকে সূরার শেষ পর্যন্ত একসঙ্গে নাযিল হয়েছিল। সা'দীও অংশটাকে এভাবেই দেখেন। পুনরুত্থান অস্বীকারকারীদের সংশয়টা এখানে তুলে ধরা হয়েছে, তারপর তার জবাব দেওয়া হয়েছে সবচেয়ে পূর্ণ, সবচেয়ে সুন্দর আর সবচেয়ে স্পষ্টভাবে। জবাবের শুরু এই আয়াতে। আসমান-যমীনের কথা আসবে পরে। শুরুটা হয় প্রশ্নকারীকে দিয়েই, তার নিজের এমন এক সত্য দিয়ে, যা নিয়ে সে তর্ক তুলতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Man Was Meant",
          "bn": "লোকটি আসলে কে"
        },
        "p": [
          {
            "en": "At-Tabari opens his comment by saying there was a difference over which man is meant by al-insan here, and he sets out three views, each with its authorities. Some said it was Ubayy ibn Khalaf, and he gives this from Mujahid and from Qatada. Others said it was al-As ibn Wa'il as-Sahmi, and he gives this from Sa'id ibn Jubayr. Others again said it was Abdullah ibn Ubayy, and he gives this through a chain reaching Ibn Abbas (RA). At-Tabari lays the three side by side and moves on to the meaning without choosing between them.",
            "bn": "তাবারী শুরুতেই জানিয়ে দেন, এখানে আল-ইনসান বলতে কোন লোককে বোঝানো হয়েছে, তা নিয়ে মতভেদ আছে। তিনি তিনটি মত আনেন, প্রত্যেকটির সঙ্গে বর্ণনাকারীদের নাম। কেউ বলেছেন, লোকটি উবাই ইবন খালাফ। এ মত তিনি আনেন মুজাহিদ ও কাতাদা থেকে। কেউ বলেছেন, আস ইবন ওয়াইল সাহমী। এ মত আনেন সাঈদ ইবন জুবাইর থেকে। আবার কেউ বলেছেন, আবদুল্লাহ ইবন উবাই। এটি তিনি আনেন ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছানো এক সনদে। তিনটি মত পাশাপাশি রেখে তাবারী অর্থের আলোচনায় চলে যান, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "The other commentators fetched here show the same spread. Al-Qurtubi gives all three names: Abdullah ibn Ubayy from Ibn Abbas, al-As ibn Wa'il from Sa'id ibn Jubayr, and Ubayy ibn Khalaf al-Jumahi from al-Hasan, adding that Ibn Ishaq said the same and that Ibn Wahb narrated it from Malik. Al-Baghawi names only Ubayy ibn Khalaf al-Jumahi, saying in his own voice that the verse came down about him, a man who disputed with the Prophet ﷺ in denying the resurrection. Ma'arif al-Qur'an mentions Ubayy and al-As, and sees no improbability in the event having happened with both.",
            "bn": "এখানে দেখা অন্য তাফসীরগুলোতেও মতের একই রকম ছড়াছড়ি। কুরতুবী তিনটি নামই আনেন। ইবন আব্বাস থেকে আবদুল্লাহ ইবন উবাই, সাঈদ ইবন জুবাইর থেকে আস ইবন ওয়াইল, আর হাসান থেকে উবাই ইবন খালাফ জুমাহী। সঙ্গে যোগ করেন, ইবন ইসহাকও তা-ই বলেছেন, আর ইবন ওয়াহব এটি মালিক থেকে বর্ণনা করেছেন। বাগাভী শুধু উবাই ইবন খালাফ জুমাহীর নাম নেন। নিজের ভাষায় বলেন, আয়াতটি নাজিল হয়েছে তাকে নিয়েই, যে পুনরুত্থান অস্বীকার করে নবী ﷺ-এর সঙ্গে ঝগড়া করেছিল। মাআরিফুল কুরআন উবাই ও আস দুজনের কথাই বলে, আর মনে করে, ঘটনাটা দুজনের বেলাতেই ঘটে থাকতে পারে, এতে অসম্ভব কিছু নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Ibn Kathir Sifts the Reports",
          "bn": "ইবন কাসীরের যাচাই"
        },
        "p": [
          {
            "en": "Ibn Kathir looks more closely at the chains. He gives the al-As report through Ibn Abi Hatim, with a chain running from Sa'id ibn Jubayr to Ibn Abbas, and notes that Ibn Jarir, that is at-Tabari, narrated it from Sa'id ibn Jubayr without mentioning Ibn Abbas. He then quotes the third view, through al-Awfi from Ibn Abbas, naming Abdullah ibn Ubayy, and judges it munkar, objectionable: the surah is Makkan, he says, while Abdullah ibn Ubayy ibn Salul was in Madinah. That verdict is Ibn Kathir's own. At-Tabari records a report naming Abdullah ibn Ubayy and passes no judgment on it.",
            "bn": "ইবন কাসীর সনদগুলো আরও খুঁটিয়ে দেখেন। আস-এর ঘটনাটি তিনি আনেন ইবন আবী হাতিমের সূত্রে, যার সনদ সাঈদ ইবন জুবাইর হয়ে ইবন আব্বাস পর্যন্ত গেছে। সঙ্গে জানান, ইবন জারীর, মানে তাবারী, এটি সাঈদ ইবন জুবাইর থেকে বর্ণনা করেছেন, ইবন আব্বাসের নাম আনেননি। এরপর তিনি তৃতীয় মতটি উদ্ধৃত করেন আওফীর সূত্রে ইবন আব্বাস থেকে, যেখানে নাম আবদুল্লাহ ইবন উবাই। এই বর্ণনাকে তিনি মুনকার বলেন, অর্থাৎ আপত্তিকর। কারণ সূরাটি মাক্কী, আর আবদুল্লাহ ইবন উবাই ইবন সালূল থাকত মদীনায়। এ রায় ইবন কাসীরের নিজের। তাবারী আবদুল্লাহ ইবন উবাইয়ের নামসহ বর্ণনাটি এনেছেন, কিন্তু এ নিয়ে কোনো মন্তব্য করেননি।"
          },
          {
            "en": "Then Ibn Kathir sets the question of the name aside. Whether these verses came down about Ubayy ibn Khalaf, or about al-As ibn Wa'il, or about both, he says, they are general, covering everyone who denies the resurrection. The al- of al-insan, he adds, marks the whole kind, taking in every denier. This article keeps the three names as the commentators keep them, as a difference they report side by side, and it takes no side. What all the reports share matters more for reading the verse than which name stands at their head.",
            "bn": "তারপর ইবন কাসীর নামের প্রশ্নটা একপাশে সরিয়ে রাখেন। তাঁর কথা, আয়াতগুলো উবাই ইবন খালাফকে নিয়ে নাযিল হোক, আস ইবন ওয়াইলকে নিয়ে হোক, কিংবা দুজনকে নিয়েই, এগুলো সাধারণ। পুনরুত্থান যে-ই অস্বীকার করে, সবাই এর আওতায়। তিনি আরও বলেন, আল-ইনসান শব্দের আল এখানে গোটা জাত বোঝায়, তাই প্রত্যেক অস্বীকারকারী এতে শামিল। এই লেখা তিনটি নাম সেভাবেই রাখছে, যেভাবে তাফসীরকারেরা রেখেছেন: পাশাপাশি বর্ণিত এক মতভেদ হিসেবে। কোনো পক্ষ নেওয়া হচ্ছে না। আয়াত বোঝার জন্য বর্ণনাগুলোর মাথায় কার নাম, তার চেয়ে বেশি জরুরি সবগুলোতে যা মিল আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dust Thrown to the Wind",
          "bn": "বাতাসে ছুড়ে দেওয়া হাড়ের গুঁড়া"
        },
        "p": [
          {
            "en": "The reports tell essentially the same scene. A man came to the Prophet ﷺ with an old, decayed bone. In Qatada's report in at-Tabari he crumbled it and then scattered it into the wind; in Sa'id ibn Jubayr's he crumbled it in front of the Prophet ﷺ; al-Baghawi says he crumbled it with his hand. Then came the challenge, in words close to these: will Allah bring this back to life after it has rotted? The verse after this, 36:78, takes up that challenge and the answer in its own words, and those belong to its own reading.",
            "bn": "বর্ণনাগুলো মূলত একই দৃশ্যের কথা বলে। এক লোক নবী ﷺ-এর কাছে এল পুরনো, পচে যাওয়া একটা হাড় নিয়ে। তাবারীতে কাতাদার বর্ণনায় সে হাড়টা গুঁড়িয়ে বাতাসে উড়িয়ে দেয়। সাঈদ ইবন জুবাইরের বর্ণনায় সে নবী ﷺ-এর সামনেই সেটা গুঁড়া করে। বাগাভী বলেন, সে হাড়টা হাতে চেপে গুঁড়িয়ে দিয়েছিল। তারপর এল চ্যালেঞ্জ, মোটামুটি এই ভাষায়: পচে যাওয়ার পর আল্লাহ কি একে আবার জীবিত করবেন? পরের আয়াত ৩৬:৭৮ এই চ্যালেঞ্জ আর তার জবাব নিজের ভাষায় তুলে ধরে। সে আলোচনা সেই আয়াতেরই প্রাপ্য।"
          },
          {
            "en": "What this verse does is name the man by what he has become: khasim, an adversary. At-Tabari's paraphrase ties the word to the scene. Does this man, the man mocking the bones, not see that We created him from a drop and then shaped him into a well-formed creature? Yet he holds a dispute against his Lord, disputing what his Lord told him He would do, which is to bring His creatures to life after their death. Mubin, at-Tabari says, means that he makes it plain to anyone who hears him that he is contending with the Lord who created him.",
            "bn": "এই আয়াত লোকটিকে চেনায় সে যা হয়ে উঠেছে, তা দিয়ে: খাসীম, প্রতিপক্ষ। তাবারীর ব্যাখ্যা শব্দটাকে ওই দৃশ্যের সঙ্গে বেঁধে দেয়। হাড় নিয়ে যে বিদ্রূপ করছে, সে কি দেখে না, আমি তাকে এক ফোঁটা থেকে সৃষ্টি করে সুগঠিত এক সৃষ্টিতে পরিণত করেছি? অথচ সে নিজের রবের বিরুদ্ধে বিবাদে নেমেছে। রব তাকে জানিয়েছেন, তিনি মৃত্যুর পর সৃষ্টিকে আবার জীবিত করবেন, আর সে বিবাদ করছে ঠিক এই কথা নিয়ে। তাবারী বলেন, মুবীন মানে যে-ই তার কথা শোনে, তার কাছে সে স্পষ্ট করে দেয় যে সে নিজের স্রষ্টা রবের সঙ্গে লড়ছে।"
          },
          {
            "en": "Qatada's report in at-Tabari ends with a further sentence: the Messenger of Allah ﷺ killed Ubayy ibn Khalaf on the day of Uhud. It is given here because the source carries it, and only as a report of history, under the view that names Ubayy. The verse describes what the text describes, a named man's dispute in the Prophet's time, and it licenses nothing against any living person or community. It gives no one a warrant to treat a person who doubts the Hereafter today as an enemy to be harmed.",
            "bn": "তাবারীতে কাতাদার বর্ণনা শেষ হয় আরও একটি বাক্যে: উহুদের দিন রাসূলুল্লাহ ﷺ উবাই ইবন খালাফকে হত্যা করেন। সূত্রে কথাটা আছে বলেই এখানে আনা হলো, শুধু ইতিহাসের খবর হিসেবে, আর তা-ও কেবল সেই মতের অধীনে, যে মত উবাইয়ের নাম নেয়। আয়াতটি সেটুকুই বর্ণনা করে, যা পাঠে আছে: নবী ﷺ-এর যুগে নির্দিষ্ট এক লোকের বিবাদ। বর্তমানের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আজ কেউ আখিরাত নিয়ে সন্দেহ করলে তাকে শত্রু ভেবে ক্ষতি করার কোনো ছাড়পত্রও এতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Arguing for Falsehood",
          "bn": "বাতিলের পক্ষে তর্ক"
        },
        "p": [
          {
            "en": "Al-Baghawi glosses khasim with a short phrase: jadal bil-batil, one who argues with falsehood. Mubin, for him, means plain in his quarrel. Then he draws out the sense: man is created from a drop and then disputes, so how is it that he does not reflect on the beginning of his own creation, and leave the dispute? For al-Baghawi the verse's question is more than a rebuke. It carries its cure inside it. The very act of looking back that would answer the doubt would also bring the quarrel to an end.",
            "bn": "বাগাভী খাসীম শব্দের অর্থ করেন ছোট্ট একটি কথায়: জাদালুম বিল-বাতিল, অর্থাৎ বাতিলকে নিয়ে তর্ক করে যে। তাঁর কাছে মুবীন মানে ঝগড়ায় যার রূপ খোলাখুলি। তারপর তিনি মর্মটা বের করে আনেন। মানুষ এক ফোঁটা শুক্র থেকে তৈরি, তবু সে ঝগড়া করে। তাহলে নিজের সৃষ্টির শুরু নিয়ে সে ভাবে না কেন, যাতে ঝগড়াটা ছেড়ে দেয়? বাগাভীর পাঠে আয়াতের প্রশ্নটা কেবল ধমক নয়। এর ভেতরেই ওষুধ রাখা আছে। পেছনে ফিরে তাকানো সন্দেহের জবাবও দিত, আবার বিবাদটাও থামিয়ে দিত।"
          },
          {
            "en": "Al-Qurtubi begins with the drop itself. A nutfa, he says, is a small amount of water, from nataf, to drip. Khasim mubin is a man who argues in a dispute and sets out his case plainly. What the phrase intends, he says, is that the man became a clear disputer after he had been nothing worth mentioning. Ma'arif al-Qur'an reads it the same way: created from a lowly drop, he has the audacity to challenge Allah and refuse to accept His power. The same closing words stand at 16:4; here the dispute has a named subject, the return.",
            "bn": "কুরতুবী শুরু করেন ফোঁটাটা দিয়েই। নুতফা মানে সামান্য পানি, শব্দটা এসেছে নাতাফা থেকে, যার মানে ফোঁটা ফোঁটা ঝরা। খাসীমুম মুবীন হলো সেই লোক, যে বিবাদে তর্ক করে আর নিজের যুক্তি খোলাখুলি তুলে ধরে। তাঁর মতে কথাটার উদ্দেশ্য হলো, উল্লেখ করার মতো কিছুই যে ছিল না, সে-ই পরে হয়ে উঠল প্রকাশ্য তার্কিক। মাআরিফুল কুরআনও এভাবেই পড়ে। তুচ্ছ এক ফোঁটা থেকে তৈরি হয়েও সে আল্লাহকে চ্যালেঞ্জ করার দুঃসাহস দেখায়, তাঁর ক্ষমতা মানতে চায় না। ঠিক এই শেষের শব্দগুলো ১৬:৪ আয়াতেও আছে। তবে এখানে বিবাদের বিষয়টা নির্দিষ্ট: ফিরে আসা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Exhibit That Argues Back",
          "bn": "যে প্রমাণ নিজেই তর্ক করে"
        },
        "p": [
          {
            "en": "Here lies the irony the verse leaves unspoken. The man holds up a bone as evidence that life cannot return to what has crumbled, yet he himself is the stronger exhibit. He was once less than a bone: a little water with no shape, no voice and no case to make. The verse never states that he contradicts himself. It sets the two ends of his story side by side, the drop and the disputer, and leaves the listener to notice that the man arguing against the resurrection is himself standing evidence for it.",
            "bn": "আয়াতটি মুখে না বলে একটা বৈপরীত্য রেখে দেয়। লোকটা হাড় উঁচিয়ে প্রমাণ করতে চায়, যা গুঁড়া হয়ে গেছে তাতে আর প্রাণ ফেরে না। অথচ তার চেয়ে বড় প্রমাণ সে নিজেই। একসময় সে হাড়েরও কম ছিল: সামান্য পানি, যার না ছিল আকার, না কণ্ঠ, না কোনো যুক্তি। আয়াত কোথাও বলে না যে সে নিজের কথাই নিজে কাটছে। শুধু তার কাহিনির দুই মাথা পাশাপাশি বসিয়ে দেয়, ফোঁটা আর তার্কিক। বাকিটা শ্রোতা নিজেই দেখে নেয়। পুনরুত্থানের বিরুদ্ধে যে তর্ক করছে, সে নিজেই তার জীবন্ত প্রমাণ হয়ে দাঁড়িয়ে আছে।"
          },
          {
            "en": "As-Sa'di asks the reader to look into exactly that gap. Man began as a drop, he writes, then moved through stage after stage until he grew and reached his youth, and his mind became complete and settled; then he is a clear adversary. Let him consider the distance between these two states, says as-Sa'di, and know that the One who brought him into being from nothing is all the more able to bring him back after he has been scattered and torn apart. Ibn Kathir asks the same: is the One who made him from this weak drop not able to restore him after death?",
            "bn": "সা'দী পাঠককে ঠিক এই ফাঁকটার দিকেই তাকাতে বলেন। তিনি লেখেন, মানুষের শুরু এক ফোঁটা থেকে। তারপর ধাপে ধাপে সে বদলেছে, বড় হয়েছে, যৌবনে পৌঁছেছে, তার বুদ্ধি পূর্ণ ও স্থির হয়েছে। আর তখনই সে প্রকাশ্য প্রতিপক্ষ। সা'দীর কথা, এই দুই অবস্থার ফারাকটা সে একবার ভেবে দেখুক। আর জেনে রাখুক, যিনি তাকে শূন্য থেকে অস্তিত্বে এনেছেন, ছড়িয়ে-ছিটিয়ে টুকরো হয়ে যাওয়ার পর তাকে ফিরিয়ে আনা তাঁর পক্ষে আরও সহজে সম্ভব। ইবন কাসীরের প্রশ্নও একই। যিনি এই দুর্বল ফোঁটা থেকে তাকে বানিয়েছেন, মৃত্যুর পর তাকে আবার গড়তে কি তিনি অক্ষম?"
          }
        ]
      },
      {
        "h": {
          "en": "Narrations Under This Verse",
          "bn": "এ আয়াতের নিচে বর্ণনাগুলো"
        },
        "p": [
          {
            "en": "The occasion reports above come through the commentators' own chains, from Mujahid, Qatada, Sa'id ibn Jubayr and others, and none of the texts fetched quotes a hadith from the main collections that speaks of this verse by name. Ibn Kathir does cite, in support of the argument, a narration from Musnad Ahmad and Ibn Majah from Busr ibn Jahhash, about the Prophet ﷺ spitting into his palm. The Ibn Majah page fetched for it shows no grading. Its wording is set out in the article on 16:4, which shares this verse's closing words, and it is not repeated here.",
            "bn": "ওপরের শানে নুযূলের বর্ণনাগুলো এসেছে তাফসীরকারদের নিজস্ব সনদে, মুজাহিদ, কাতাদা, সাঈদ ইবন জুবাইর প্রমুখ থেকে। যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই প্রধান হাদীসগ্রন্থ থেকে এমন কোনো হাদীস আনে না, যা নাম ধরে এ আয়াতের কথা বলে। তবে ইবন কাসীর যুক্তির সমর্থনে মুসনাদে আহমাদ ও ইবন মাজাহ থেকে বুসর ইবন জাহহাশের একটি বর্ণনা আনেন। তাতে আছে, নবী ﷺ নিজের হাতের তালুতে থুথু ফেলেছিলেন। ইবন মাজাহর যে পাতাটি দেখা হয়েছে, তাতে কোনো মান উল্লেখ নেই। বর্ণনাটির ভাষা ১৬:৪ আয়াতের প্রবন্ধে দেওয়া আছে, যে আয়াতের শেষ শব্দগুলো এ আয়াতের মতোই। তাই এখানে আর পুনরাবৃত্তি করা হলো না।"
          },
          {
            "en": "Ibn Kathir's reading of al-insan as the whole kind turns the verse back towards every reader. The man with the bone is not a figure to be looked down on from a distance. Every reader began as the same drop, and every reader carries the same tongue, which can as easily be turned into a case against its Giver. Read this way, the verse is not a label to pin on doubters. It is a mirror held up first to whoever recites it, asking how much of its second half has crept into his own life.",
            "bn": "ইবন কাসীর আল-ইনসান বলতে গোটা মানবজাত বুঝেছেন। এই পাঠ আয়াতটাকে প্রত্যেক পাঠকের দিকেই ঘুরিয়ে দেয়। হাড় হাতে লোকটা এমন কেউ নয়, যাকে দূরে দাঁড়িয়ে তুচ্ছ চোখে দেখা যায়। প্রত্যেক পাঠকের শুরু সেই একই ফোঁটা থেকে। প্রত্যেকের মুখে সেই একই জিভ, যাকে অনায়াসে দাতারই বিরুদ্ধে মামলা সাজাতে লাগানো যায়। এভাবে পড়লে আয়াতটা সন্দেহকারীদের গায়ে সাঁটার লেবেল নয়। এ এক আয়না, যা প্রথমে ধরা হয় তেলাওয়াতকারীর সামনেই। আয়না জিজ্ঞেস করে, এর দ্বিতীয় অর্ধেকের কতটুকু চুপিসারে তোমার নিজের জীবনে ঢুকে পড়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Back to Look Ahead",
          "bn": "পেছনে তাকিয়ে সামনে দেখা"
        },
        "p": [
          {
            "en": "The verse asks for a habit of mind as well as a belief. Doubt about the return rarely arrives as a bone held up in public. It comes as a quiet feeling that death is final, that the promise is too large, that what is scattered stays scattered. The answer offered here is not to argue louder. It is to look back, as the commentators read yara, at one's own beginning. No one chose to be formed, given a mind or taught to speak. All of that happened without our help, from the same Lord who promises the return.",
            "bn": "আয়াতটা শুধু একটা বিশ্বাস চায় না, ভাবনার একটা অভ্যাসও চায়। ফিরে যাওয়া নিয়ে সন্দেহ খুব কমই জনসমক্ষে হাড় উঁচিয়ে আসে। আসে চুপিচুপি, এক অনুভূতি হয়ে: মৃত্যুই শেষ, ওয়াদাটা বড্ড বড়, যা ছড়িয়ে গেছে তা ছড়িয়েই থাকবে। এখানে জবাবটা জোর গলায় তর্ক নয়। তাফসীরকারেরা ইয়ারা শব্দকে যেভাবে পড়েছেন, সেভাবে নিজের শুরুর দিকে ফিরে তাকানো। আকার পাওয়া, বুদ্ধি পাওয়া, কথা বলতে শেখা, এর কোনোটাই কেউ নিজে বেছে নেয়নি। সবই ঘটেছে আমাদের কোনো সাহায্য ছাড়া, সেই একই রবের হাতে, যিনি ফিরিয়ে আনার ওয়াদা দিয়েছেন।"
          },
          {
            "en": "There is a quieter lesson in khasim as well. The cleverness al-Baghawi calls arguing with falsehood is a gift turned the wrong way: the mind that grew out of the drop is the very thing used to deny its Giver. Before arguing with any of Allah's promises, a believer can put to himself the question al-Baghawi draws from the verse: have I reflected on how I began? Often that remembering is enough to let the quarrel fall quiet, and to make room for the answer the verses after this go on to give.",
            "bn": "খাসীম শব্দে আরেকটা নিচু স্বরের শিক্ষাও আছে। বাগাভী যাকে বাতিল নিয়ে তর্ক বলেছেন, সেই চাতুর্য আসলে উল্টো দিকে ঘোরানো এক দান। ফোঁটা থেকে যে বুদ্ধি বেড়ে উঠেছে, সেটাকেই লাগানো হয় দাতাকে অস্বীকার করতে। আল্লাহর কোনো ওয়াদার বিরুদ্ধে তর্ক শুরু করার আগে মুমিন নিজেকে সেই প্রশ্নটা করতে পারেন, যা বাগাভী আয়াত থেকে বের করে এনেছেন: আমি কি ভেবে দেখেছি, আমার শুরুটা কেমন ছিল? প্রায়ই এটুকু মনে করাই ঝগড়াটা থামিয়ে দিতে যথেষ্ট। তখন পরের আয়াতগুলোর জবাব শোনার জায়গাও তৈরি হয়।"
          }
        ]
      }
    ]
  },
  "36:82": {
    "sections": [
      {
        "h": {
          "en": "The Close of Ya-Sin's Argument",
          "bn": "ইয়াসীনের যুক্তির সমাপ্তি"
        },
        "p": [
          {
            "en": "This verse is the summit of the argument that closes Surah Ya-Sin. 36:77-79 sets the scene: man, created from a drop, stands disputing with his Maker, striking a parable and forgetting his own creation — who will give life to bones when they have crumbled? The books of tafsir relate that a denier of resurrection came to the Prophet ﷺ crushing an old bone and scattering its dust as he asked exactly that.",
            "bn": "এই আয়াতটি সূরা ইয়াসীনের সমাপ্তি-যুক্তির চূড়া। 36:77-79 দৃশ্যটি সাজায়: এক বিন্দু থেকে সৃষ্ট মানুষ নিজের স্রষ্টার সঙ্গে বিতর্কে দাঁড়িয়ে, উপমা ছুড়ছে আর নিজের সৃষ্টির কথাই ভুলে গেছে — হাড়গুলো চূর্ণ হয়ে গেলে কে সেগুলোকে জীবন দেবে? তাফসীরের কিতাবসমূহ বর্ণনা করে, পুনরুত্থান-অস্বীকারকারী এক ব্যক্তি নবী ﷺ-এর কাছে এসেছিল একটি পুরোনো হাড় গুঁড়িয়ে তার ধুলো ছড়াতে ছড়াতে, ঠিক এই প্রশ্নটিই করতে করতে।"
          },
          {
            "en": "The answer given is a method as much as a reply: say, He will give them life who produced them the first time, and He is Knowing of all creation. Restoring is not harder than originating — and the Originator has already been demonstrated by every body in the room. From there the surah widens the evidence, fire from the green tree, the creation of the heavens, until it arrives at this verse's summary of His power.",
            "bn": "প্রদত্ত উত্তরটি জবাব যতটা, পদ্ধতিও ততটাই: বলুন, তিনিই সেগুলোকে জীবন দেবেন যিনি প্রথমবার সেগুলো সৃষ্টি করেছেন, আর তিনি সকল সৃষ্টি সম্পর্কে সম্যক জ্ঞাত। ফিরিয়ে আনা প্রথমবার বানানোর চেয়ে কঠিন নয় — আর প্রথম নির্মাতার প্রমাণ তো ঘরের প্রতিটি দেহই দিয়ে রেখেছে। সেখান থেকে সূরাটি প্রমাণ আরও প্রশস্ত করে — সবুজ গাছ থেকে আগুন, আসমানসমূহের সৃষ্টি — যতক্ষণ না পৌঁছায় তাঁর ক্ষমতার এই আয়াত-সারাংশে।"
          }
        ]
      },
      {
        "h": {
          "en": "Kun fa-Yakun",
          "bn": "কুন ফা-ইয়াকুন"
        },
        "p": [
          {
            "en": "Innama amruhu — His command is only — when He intends a thing, that He says to it: Be, and it is. The restriction particle innama does the work: this is the whole of it. No struggle, no materials gathered, no interval in which the outcome hangs uncertain. The commentators are careful on one point: the wording does not mean He needs speech as a tool, the way we need hands; it expresses how completely reality answers His intent — instantly, without resistance or delay.",
            "bn": "ইন্নামা আমরুহু — তাঁর ব্যাপার তো কেবল এই — তিনি যখন কিছু করতে চান, তখন তাকে বলেন: হও, আর তা হয়ে যায়। সীমাবদ্ধকরণ শব্দ ইন্নামা-ই কাজটি করে: এটুকুই সব। কোনো সংগ্রাম নেই, কোনো উপকরণ জোগাড় নেই, এমন কোনো বিরতি নেই যাতে ফলাফল অনিশ্চিত ঝুলে থাকে। মুফাসসিরগণ একটি বিষয়ে সতর্ক: এই ভাষার অর্থ এই নয় যে হাতিয়ার হিসেবে তাঁর বাক্যের প্রয়োজন, যেমন আমাদের হাতের প্রয়োজন; এটি প্রকাশ করে বাস্তবতা তাঁর ইচ্ছায় কত সম্পূর্ণভাবে সাড়া দেয় — তাৎক্ষণিক, কোনো প্রতিরোধ বা বিলম্ব ছাড়া।"
          },
          {
            "en": "Between His will and its object there is nothing that could intervene: no rival power, as 2:163 has already established there is none, no shortage, no fatigue — the same freedom from weariness 2:255 attaches to His preserving of the heavens and the earth. Difficulty is a relation between a task and limited strength. Where strength has no limit, the category of difficult simply does not apply.",
            "bn": "তাঁর ইচ্ছা ও তার লক্ষ্যবস্তুর মাঝখানে হস্তক্ষেপ করার মতো কিছুই নেই: কোনো প্রতিদ্বন্দ্বী শক্তি নেই — 2:163 আগেই প্রতিষ্ঠা করেছে যে নেই — কোনো ঘাটতি নেই, কোনো ক্লান্তি নেই — সেই একই ক্লান্তিহীনতা যা 2:255 যুক্ত করে আসমান-যমীনের রক্ষণাবেক্ষণে। কঠিন হওয়া হলো কাজ ও সীমিত শক্তির মধ্যকার এক সম্পর্ক। যেখানে শক্তির কোনো সীমা নেই, সেখানে কঠিনের শ্রেণিটিই আর প্রযোজ্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Else the Word Sounds",
          "bn": "আর যেখানে বাণীটি ধ্বনিত"
        },
        "p": [
          {
            "en": "Kun fa-yakun recurs across the Quran, and its placements are a study in themselves. 2:117 attaches it to the origination of the heavens and the earth. 3:47 answers Maryam's astonishment at bearing a child untouched; 3:59 levels Isa (AS) and Adam (AS) — created from dust, then Be, and he was; 19:35 refuses the notion of a son for Allah by it; 40:68 attaches it to giving life and dealing death.",
            "bn": "কুন ফা-ইয়াকুন কুরআনজুড়ে ফিরে ফিরে আসে, আর এর অবস্থানগুলো নিজেই এক অধ্যয়নের বিষয়। 2:117 একে যুক্ত করে আসমান-যমীনের সূচনার সঙ্গে। 3:47 উত্তর দেয় মারইয়ামের বিস্ময়ের — স্পর্শ ছাড়া সন্তান ধারণের প্রশ্নে; 3:59 ঈসা (আঃ) ও আদম (আঃ)-কে সমান করে দেয় — মাটি থেকে সৃষ্টি, তারপর হও, আর তিনি হয়ে গেলেন; 19:35 এরই জোরে আল্লাহর পুত্রের ধারণা প্রত্যাখ্যান করে; 40:68 একে যুক্ত করে জীবন দান ও মৃত্যু ঘটানোর সঙ্গে।"
          },
          {
            "en": "The pattern is consistent: the phrase appears precisely where human beings say impossible — a universe from nothing, a child without a father, the dead raised. Each time the Quran declines to argue the impossibility on our terms and instead corrects the frame: you are measuring by the strength of creatures. Measured by His command, none of these cases is even distinct from the others; all are one word.",
            "bn": "ধরনটি সামঞ্জস্যপূর্ণ: বাক্যাংশটি আসে ঠিক সেখানে, যেখানে মানুষ বলে অসম্ভব — শূন্য থেকে মহাবিশ্ব, পিতা ছাড়া সন্তান, মৃতের পুনরুত্থান। প্রতিবার কুরআন আমাদের শর্তে অসম্ভবতা নিয়ে তর্ক করতে অস্বীকার করে এবং বরং কাঠামোটাই সংশোধন করে: তোমরা মাপছ সৃষ্টির শক্তি দিয়ে। তাঁর নির্দেশ দিয়ে মাপলে এই ঘটনাগুলোর কোনোটি অন্যগুলো থেকে আলাদাও নয়; সবই একটিমাত্র কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Kingdom in His Hand",
          "bn": "তাঁর হাতে সব রাজত্ব"
        },
        "p": [
          {
            "en": "The surah's final verse, 36:83, completes the thought: so exalted is He in whose hand is the malakut — the dominion, the inner sovereignty — of every thing, and to Him you will be returned. Power alone might only awe us; the return makes it personal. The One whose word suffices for anything is also the One before whom every life ends up standing, so His effortless power is not a spectacle but our destination.",
            "bn": "সূরার শেষ আয়াত 36:83 ভাবনাটি সম্পূর্ণ করে: অতএব পবিত্র ও মহান তিনি, যাঁর হাতে প্রতিটি জিনিসের মালাকূত — কর্তৃত্ব, অন্তর্গত সার্বভৌমত্ব — আর তাঁরই কাছে তোমাদের ফিরিয়ে নেওয়া হবে। কেবল ক্ষমতা হয়তো আমাদের শুধু স্তম্ভিতই করত; প্রত্যাবর্তন একে ব্যক্তিগত করে তোলে। যাঁর একটি কথাই যেকোনো কিছুর জন্য যথেষ্ট, তিনিই সেই সত্তা যাঁর সামনে প্রতিটি জীবন শেষ পর্যন্ত দাঁড়ায় — তাই তাঁর অনায়াস ক্ষমতা কোনো প্রদর্শনী নয়, আমাদের গন্তব্য।"
          },
          {
            "en": "Ya-Sin thus closes by joining the two certainties the surah argued from its opening scenes: He can, and we will return. Resurrection stops being a puzzle about scattered bones — the surah has dissolved that with the first creation, the green tree and the word Be — and becomes instead a scheduled appointment with the Owner of everything, for which the only sensible preparation is deeds.",
            "bn": "ইয়াসীন তাই শেষ হয় দুটি নিশ্চয়তাকে জুড়ে দিয়ে, যেগুলোর পক্ষে সূরাটি তার শুরুর দৃশ্যগুলো থেকে যুক্তি সাজিয়েছে: তিনি পারেন, আর আমরা ফিরব। পুনরুত্থান তখন আর ছড়ানো হাড় নিয়ে কোনো ধাঁধা থাকে না — প্রথম সৃষ্টি, সবুজ গাছ আর হও শব্দটি দিয়ে সূরা তা গলিয়ে দিয়েছে — বরং হয়ে ওঠে সবকিছুর মালিকের সঙ্গে এক নির্ধারিত সাক্ষাৎ, যার একমাত্র বুদ্ধিমান প্রস্তুতি আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "Effortless for Him, Weighty for Us",
          "bn": "তাঁর জন্য সহজ, আমাদের জন্য গুরুভার"
        },
        "p": [
          {
            "en": "Hold the two scales apart and the verse becomes practical. On His side, nothing is heavy: not your provision, not the guidance of a hardened relative, not the mending of what looks finished. On our side, deeds are weighed and days are counted precisely because outcomes are not ours to speak into being. We were given effort, patience and du'a — the creaturely instruments — and He kept Be for Himself.",
            "bn": "দুটি পাল্লা আলাদা করে ধরুন — আয়াতটি ব্যবহারিক হয়ে ওঠে। তাঁর দিকে কিছুই ভারী নয়: আপনার রিযিক নয়, কঠিন হয়ে যাওয়া কোনো আত্মীয়ের হিদায়াত নয়, শেষ দেখানো কোনো কিছুর জোড়া লাগাও নয়। আমাদের দিকে আমল ওজন করা হয় আর দিন গোনা হয় ঠিক এ কারণেই যে, ফলাফল মুখের কথায় ঘটিয়ে ফেলা আমাদের কাজ নয়। আমাদের দেওয়া হয়েছে প্রচেষ্টা, ধৈর্য ও দোয়া — সৃষ্টির হাতিয়ার — আর হও তিনি রেখেছেন নিজের জন্য।"
          },
          {
            "en": "This division answers both despair and presumption. Despair says the situation is impossible; the verse replies that impossible describes your strength, not His command. Presumption says it will happen because I have arranged it; 18:23-24 has already corrected that grammar — nothing happens except by His will. Between the two corrections stands the believer: working as if effort matters, asking as if only He decides, because both are true.",
            "bn": "এই ভাগাভাগি হতাশা ও দাম্ভিকতা দুটিরই জবাব দেয়। হতাশা বলে পরিস্থিতি অসম্ভব; আয়াত উত্তর দেয়: অসম্ভব শব্দটি তোমার শক্তির বর্ণনা, তাঁর নির্দেশের নয়। দাম্ভিকতা বলে এটি ঘটবেই কারণ আমি সব সাজিয়ে রেখেছি; 18:23-24 আগেই সেই ভাষাভঙ্গি সংশোধন করেছে — তাঁর ইচ্ছা ছাড়া কিছুই ঘটে না। দুই সংশোধনের মাঝখানে দাঁড়িয়ে মুমিন: কাজ করে যেন প্রচেষ্টার মূল্য আছে, চায় যেন সিদ্ধান্ত কেবল তাঁরই — কারণ দুটিই সত্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Boldly",
          "bn": "সাহস করে চাওয়া"
        },
        "p": [
          {
            "en": "The practical fruit is boldness in du'a. People trim their prayers to what seems achievable, as if sparing Allah embarrassment; the verse exposes the courtesy as bad theology. Ask for the whole need — the cure, the reconciliation, the guidance of the person everyone has given up on — because the One being asked does not scale His answers to plausibility. He says Be.",
            "bn": "ব্যবহারিক ফল — দোয়ায় সাহস। মানুষ নিজের প্রার্থনা ছেঁটে নেয় যা অর্জনযোগ্য মনে হয় তাতে, যেন আল্লাহকে বিব্রত হওয়া থেকে বাঁচাচ্ছে; আয়াতটি এই সৌজন্যকে ভুল আকীদা বলে উন্মোচন করে। পুরো প্রয়োজনটাই চান — আরোগ্য, মীমাংসা, সেই মানুষটির হিদায়াত যার আশা সবাই ছেড়ে দিয়েছে — কারণ যাঁর কাছে চাওয়া হচ্ছে তিনি নিজের জবাব সম্ভাব্যতার মাপে ছোট করেন না। তিনি বলেন: হও।"
          },
          {
            "en": "And let the same word steady you when His decree runs against your wishes. What He willed happened by a word, and what He withheld was withheld with the same total ease — meaning neither was an accident, an oversight or a failure of resources. The heart that absorbs 36:82 stops negotiating with imagined obstacles and deals directly, in trust and asking, with the One whose command is only Be, and it is.",
            "bn": "আর তাঁর ফয়সালা যখন আপনার ইচ্ছার বিপরীতে চলে, তখন একই শব্দকে আপনাকে স্থির রাখতে দিন। তিনি যা চেয়েছেন তা ঘটেছে এক কথায়, আর যা আটকে রেখেছেন তা আটকানো হয়েছে সেই একই পূর্ণ অনায়াসে — অর্থাৎ কোনোটিই দুর্ঘটনা নয়, অসাবধানতা নয়, সামর্থ্যের ঘাটতিও নয়। যে হৃদয় 36:82 আত্মস্থ করে, সে কাল্পনিক বাধার সঙ্গে দর-কষাকষি থামিয়ে দেয় এবং ভরসা ও চাওয়া নিয়ে সরাসরি লেনদেন করে তাঁর সঙ্গে — যাঁর নির্দেশ কেবল: হও, আর তা হয়ে যায়।"
          }
        ]
      }
    ]
  }
});
