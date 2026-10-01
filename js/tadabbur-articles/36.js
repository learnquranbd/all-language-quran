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
            "bn": "সূরা শুরু হয় দুটি অক্ষর দিয়ে, ইয়া-সীন, এরপর আসে এক শপথ। এই অক্ষরগুলো মুকাত্তাআতের অন্তর্ভুক্ত, যে বিচ্ছিন্ন অক্ষর দিয়ে ২৯টি সূরা শুরু হয়েছে। এই প্রকল্পে অবস্থানটা সেই, যেখানে তাফসীরকারেরা বারবার ফিরে আসেন। এগুলোর পূর্ণ অর্থ আল্লাহর কাছেই, আর এখানে কোনো ব্যাখ্যা এগুলোর রহস্য খুলে ফেলার দাবি করে না। ইবন কাসীর এখানে একটি অর্থ স্থির না করে পাঠককে বাকারা সূরার শুরুতে অক্ষর নিয়ে তাঁর আলোচনার দিকে ফিরিয়ে দেন। অন্য সূরার শুরুতেও আমরা একই সংযম দেখি, যেমন ২৬:১ আয়াতের শুরুর অক্ষরগুলোতে।"
          },
          {
            "en": "Ma'arif al-Qur'an records that some narrations went further with these two letters. A few called Ya Sin one of the names of Allah, a view traced to Imam Malik and to Ibn Abbas; others read it as a word meaning O man, addressed to the Prophet ﷺ, which is close to Ibn Jubayr's saying that it is a name of the Prophet ﷺ. None of this is asserted as certain, and Ma'arif itself keeps the well-known position that the letters are known in full to Allah. The weight of the verse falls on what comes next, the oath.",
            "bn": "মাআরিফুল কুরআন জানায়, কিছু বর্ণনা এই দুই অক্ষর নিয়ে আরও কথা বলেছে। কেউ কেউ ইয়া-সীনকে আল্লাহর নামগুলোর একটি বলেছেন, এই মত ইমাম মালিক ও ইবন আব্বাস (রাঃ)-এর দিকে সম্পর্কিত। আবার কেউ একে ‘হে মানুষ’ অর্থে পড়েছেন, যা নবী ﷺ-কে সম্বোধন, আর এটি ইবন জুবায়েরের সেই কথার কাছাকাছি যে এটি নবী ﷺ-এরই একটি নাম। এর কোনোটিই নিশ্চিত বলে দাবি করা হয়নি, আর মাআরিফ নিজেও সেই পরিচিত অবস্থানেই থাকে যে অক্ষরগুলোর পূর্ণ অর্থ আল্লাহই জানেন। আয়াতের ভার পড়ে এর পরের অংশে, শপথের উপর।"
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
            "bn": "ওয়াল-কুরআনিল-হাকীম: হিকমতপূর্ণ কুরআনের শপথ। বাক্যটির গড়ন শপথের, আর শপথকারী স্বয়ং আল্লাহ। এখানে একটু থামা দরকার, কারণ নিজের কথাকে আরও নিশ্চিত করতে আল্লাহর কোনো শপথের প্রয়োজন নেই। তাঁর নিছক বক্তব্যই সত্য। তিনি যখন শপথ করেন, সেই শপথ তাঁর জন্য নয়, শ্রোতার জন্য। যা নিয়ে শপথ করা হয় তার দিকে মন টানা হয়, তাকে ভার দেওয়া হয়। আর এখানে তিনি শপথ করার জন্য বেছে নেন নিজের নাজিলকৃত কিতাবকেই। এতে কিতাবের সম্মান বাড়ে, আর পাঠক সঙ্গে সঙ্গে বোঝে, এবার ভারী কিছু একটা নিশ্চিত করা হবে।"
          },
          {
            "en": "There is an adab, a courtesy, that sits underneath this. Allah may swear by whatever He wills of His creation or His words, for all of it is His; a human being has no such liberty. The believer may swear only by Allah, never by anything besides Him. So the oath that opens the surah is His to make and His alone, and even as it dignifies the Book, it quietly marks the distance between the Creator who swears by what He wills and the servant who may name only his Lord.",
            "bn": "এর নিচে একটি আদব লুকিয়ে আছে। আল্লাহ তাঁর সৃষ্টি বা তাঁর কথার যে কোনো কিছুর নামে শপথ করতে পারেন, কারণ সবই তাঁর। মানুষের এমন স্বাধীনতা নেই। মুমিন কেবল আল্লাহর নামেই শপথ করতে পারে, তিনি ছাড়া আর কিছুর নামে নয়। তাই সূরার শুরুর এই শপথ করার অধিকার একমাত্র তাঁরই। কিতাবকে সম্মানিত করার পাশাপাশি এই শপথ চুপচাপ সেই দূরত্বও চিহ্নিত করে দেয়, যা আছে ইচ্ছেমতো শপথকারী স্রষ্টা আর কেবল নিজের রবের নাম নিতে পারা বান্দার মাঝে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Al-Ḥakīm Carries",
          "bn": "হাকীম শব্দ যা বহন করে"
        },
        "p": [
          {
            "en": "The single word al-ḥakīm, applied to the Qur'an, opens onto a range of meaning, and the commentators do not all land in the same place. Read one way it means the wise, the Book full of ḥikma; read another way it means the firmly made, al-muḥkam, perfected so that no flaw reaches it; and the root itself, ḥ-k-m, also carries judging and deciding, the sense of a word that rules between truth and falsehood. These are not rival errors to be settled; they are facets of one word, and the verse is richer for holding them together.",
            "bn": "কুরআনের বেলায় ব্যবহৃত একক শব্দ ‘হাকীম’ অর্থের এক বিস্তৃত পরিসর খুলে দেয়, আর তাফসীরকারেরা সবাই একই জায়গায় থামেন না। এক অর্থে এর মানে প্রজ্ঞাময়, হিকমতে ভরা কিতাব। আরেক অর্থে এর মানে মজবুত করে গড়া, আল-মুহকাম, এমনভাবে নিখুঁত যে কোনো ত্রুটি একে ছুঁতে পারে না। আবার ধাতুটি, হা-কা-মা, নিজেই বহন করে বিচার ও মীমাংসার অর্থ, সত্য ও মিথ্যার মাঝে ফয়সালা দেওয়া শব্দের ভাব। এগুলো একে অন্যের ভুল নয় যে একটা বেছে নিতে হবে। এগুলো এক শব্দেরই নানা দিক, আর এদের একসঙ্গে ধরে রাখায় আয়াত আরও সমৃদ্ধ।"
          },
          {
            "en": "Al-Qurtubi notes a point of grammar that keeps these senses close. The form faʿīl, he says, can stand in the place of the form mufʿil, so that ḥakīm in regard to Allah can bear the meaning of muḥkam, the one who makes firm, just as alīm, painful, can mean mu'lim, the one who causes pain. Said of the Qur'an, then, al-ḥakīm leans at once toward the Book that is itself wise and the Book that has been firmly made wise by its Author. The reader does not have to choose; the word was chosen because it holds both.",
            "bn": "কুরতুবী ব্যাকরণের একটি দিক ধরিয়ে দেন, যা এই অর্থগুলোকে কাছাকাছি রাখে। তিনি বলেন, ‘ফাঈল’ রূপটি ‘মুফঈল’ রূপের জায়গায় বসতে পারে, ফলে আল্লাহর বেলায় ‘হাকীম’ শব্দ ‘মুহকাম’ অর্থ বহন করতে পারে, অর্থাৎ যিনি মজবুত করেন। যেমন ‘আলীম’ মানে যন্ত্রণাদায়ক, বোঝাতে পারে ‘মুলিম’, অর্থাৎ যিনি যন্ত্রণা দেন। তাহলে কুরআনের বেলায় ‘হাকীম’ একসঙ্গে ঝুঁকে পড়ে সেই কিতাবের দিকে যা নিজেই প্রজ্ঞাময়, আবার সেই কিতাবের দিকেও যাকে এর রচয়িতা মজবুত করে প্রজ্ঞাময় করেছেন। পাঠককে বেছে নিতে হয় না, শব্দটি বেছে নেওয়াই হয়েছে কারণ এটি দুটোই ধরে রাখে।"
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
            "bn": "এখানে আনা বেশিরভাগ তাফসীরকার যে অর্থটি গ্রহণ করেন, তা হলো ‘হাকীম’ অর্থে ‘মুহকাম’, অর্থাৎ মজবুত করে গড়া। ইবন কাসীর একে ব্যাখ্যা করেন সেই নিখুঁত কিতাব হিসেবে, যার কাছে মিথ্যা পৌঁছাতে পারে না, সামনে থেকেও নয়, পেছন থেকেও নয়। এই ভাষা কুরআনের নিজের সম্পর্কে ৪১:৪২ আয়াতের বর্ণনার প্রতিধ্বনি। তাবারী ‘মুহকাম’ পড়েন এভাবে, কিতাবের ভেতরে থাকা বিধান তথা আহকাম আর এর যুক্তির সুস্পষ্ট প্রমাণ দিয়ে একে মজবুত করা হয়েছে। মুয়াসসার একই সুতোগুলো একত্র করে বলে, আল্লাহ শপথ করছেন সেই মজবুত কুরআনের, যা বহন করে বিধান, হিকমত আর প্রমাণ।"
          },
          {
            "en": "Al-Qurtubi presses the sense furthest. Al-ḥakīm means al-muḥkam, he writes, so firmly made that it is open to no invalidity and no contradiction, and he cites the verse where Allah says of the Book that its verses were made firm, aḥkamat āyātuhu, at 11:1. The firmness, he adds, runs through both its arrangement and its meanings, so that no flaw can enter it. A Book described this way is being set forward as something that holds together under pressure, with nothing in it that argument can break open.",
            "bn": "কুরতুবী অর্থটিকে সবচেয়ে দূর পর্যন্ত টানেন। তিনি লেখেন, ‘হাকীম’ মানে ‘মুহকাম’, এমন মজবুত করে গড়া যে তাতে কোনো বাতিল বা অসঙ্গতির সুযোগ নেই। তিনি সেই আয়াত উল্লেখ করেন যেখানে আল্লাহ কিতাব সম্পর্কে বলেন, এর আয়াতগুলো মজবুত করা হয়েছে, ‘আহকামাত আয়াতুহু’, ১১:১ আয়াতে। তিনি যোগ করেন, এই মজবুতি কিতাবের গঠন ও অর্থ দুটোর ভেতর দিয়েই চলে, ফলে এতে কোনো ত্রুটি ঢুকতে পারে না। এভাবে বর্ণিত কিতাবকে এমন কিছু হিসেবে পেশ করা হচ্ছে, যা চাপের মুখেও অটুট থাকে, যার কোনো অংশ তর্ক দিয়ে ভেঙে ফেলা যায় না।"
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
            "bn": "সাদী শব্দটির অন্য সুতোটি ধরে যত্ন করে খোলেন। তিনি বলেন, কুরআন ‘হাকীম’, কারণ এর গোটা পরিচয়ই হিকমত, আর হিকমত মানে প্রতিটি জিনিসকে তার আপন জায়গায় রাখা। আল্লাহ আদেশ ও নিষেধ ঠিক সেখানেই রাখেন যেখানে যেটির স্থান, আর ভালো ও মন্দের প্রতিদান রাখেন প্রত্যেকটিকে তার উপযুক্ত জায়গায়। ফলে কিতাবের বিধানগুলো, শরীয়তের বিধান আর প্রতিদান ও শাস্তির বিধান, সবই গড়ে উঠেছে চূড়ান্ত হিকমতের উপর। এই পাঠে কিতাব প্রজ্ঞাময় কেবল যা বলে তাতে নয়, প্রতিটি জিনিস কোথায় বসায় তাতেও।"
          },
          {
            "en": "He draws out one mark of that wisdom in particular. Among the ways this Qur'an is wise, as-Sa'di writes, is that it joins the mention of a ruling to the wisdom behind it, alerting the mind to the correspondences and the qualities that make the ruling fit its case. The Book does not only command; it shows why, so the reason can be seen and weighed. A reader who notices this will stop treating the Qur'an as a list of verdicts and start reading it as something that teaches the mind to recognise why a thing is right.",
            "bn": "সেই হিকমতের একটি বিশেষ ছাপ তিনি টেনে বের করেন। সাদী লেখেন, এই কুরআন যেভাবে প্রজ্ঞাময় তার একটি হলো, এটি কোনো বিধানের উল্লেখের সঙ্গে তার পেছনের হিকমতও জুড়ে দেয়, মনকে সেই মিল আর গুণগুলোর দিকে সজাগ করে যা বিধানটিকে তার বিষয়ের উপযুক্ত করে তোলে। কিতাব শুধু আদেশ দেয় না, কেন তা-ও দেখায়, যাতে কারণটি দেখা ও ওজন করা যায়। যে পাঠক এটা খেয়াল করে, সে কুরআনকে আর রায়ের তালিকা ভাবা ছেড়ে এমন কিছু হিসেবে পড়তে শুরু করে, যা মনকে শেখায় একটা জিনিস কেন সঠিক তা চিনতে।"
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
            "bn": "আরবিতে শপথ তার জবাবের অপেক্ষায় থাকে, অর্থাৎ যে কথা নিশ্চিত করতে শপথ করা হলো সেটির। এখানে জবাব আসে সঙ্গে সঙ্গেই: ইন্নাকা লামিনাল-মুরসালীন, তুমি অবশ্যই রসূলগণের অন্তর্ভুক্ত, ‘আলা সিরাতিম মুসতাকীম, সরল পথের উপর। মুয়াসসার অর্থটি পূর্ণ করে: হে রসূল, তুমি তাদেরই একজন যাদের আল্লাহর ওহি দিয়ে তাঁর বান্দাদের কাছে পাঠানো হয়েছে, এক সরল ও ভারসাম্যপূর্ণ পথে, আর সেই পথই ইসলাম। তাই যে কুরআনের নামে শপথ, সেই কুরআন সাক্ষ্য দেয় তাঁরই পক্ষে যিনি কুরআন এনেছেন। কিতাবকে রাখা হলো দলিল হিসেবে, আর রসূল হলেন যা সেই দলিল প্রমাণ করে।"
          },
          {
            "en": "The next verse names the source. Tanzīlu'l-ʿazīzi'r-raḥīm, 36:5, a sending down from the Almighty, the Most Merciful. Ibn Kathir reads the straight path of 36:4 as an upright way, religion and law together, and the revelation of 36:5 as coming from the Lord of might who is merciful to His believing servants. Set in order, the passage moves from the Book sworn by, to the messenger confirmed, to the straight path he walks, to the Almighty and Merciful who sent it all down. The oath does not hang alone; it opens a chain that ends in the Sender.",
            "bn": "পরের আয়াত উৎসের নাম বলে দেয়। তানযীলুল-আযীযির-রাহীম, ৩৬:৫, মহাপরাক্রমশালী পরম করুণাময়ের পক্ষ থেকে অবতীর্ণ। ইবন কাসীর ৩৬:৪ আয়াতের সরল পথকে পড়েন সোজা পথ হিসেবে, দ্বীন ও শরীয়ত একসঙ্গে, আর ৩৬:৫ আয়াতের ওহিকে পড়েন সেই পরাক্রমশালী রবের কাছ থেকে আসা হিসেবে, যিনি তাঁর মুমিন বান্দাদের প্রতি দয়ালু। সাজিয়ে দেখলে অংশটি এগোয় এভাবে, যে কিতাবের নামে শপথ, সেখান থেকে নিশ্চিত হওয়া রসূল, এরপর তিনি যে সরল পথে চলেন, এরপর সেই পরাক্রমশালী ও দয়ালু সত্তা যিনি সবই নাজিল করেছেন। শপথ একা ঝুলে থাকে না, এটি এমন এক সূত্র খুলে দেয় যা গিয়ে থামে প্রেরণকর্তার কাছে।"
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
            "bn": "এই নির্দিষ্ট আয়াত নিয়ে নাজিল হওয়া কোনো সহিহ হাদিস বর্ণিত নেই। তাই সৎ কথা হলো সেটা বলে দেওয়া, দুর্বল কোনো বর্ণনাকে তার চেয়ে বড় করে না সাজানো। তবে শপথ নিয়ে এই আয়াতের নীরব শিক্ষার পাশে একটি সহিহ হাদিস দাঁড়িয়ে আছে, যা ৩৬:২ আয়াতের সঙ্গে বাঁধা নয়, তবু বিষয়টির সঙ্গে সরাসরি জড়িত। ইবন উমর (রাঃ) বর্ণনা করেন, নবী ﷺ উমর (রাঃ)-কে তাঁর বাবার নামে কসম খেতে দেখে ডেকে বললেন: ‘আল্লাহ তোমাদের বাবাদের নামে কসম খেতে নিষেধ করেছেন। কাউকে কসম খেতে হলে সে যেন আল্লাহর নামে খায়, নইলে চুপ থাকে।’ এটি সহিহ বুখারিতে আছে, নম্বর ৬১০৮, আর এটি সহিহ।"
          },
          {
            "en": "The verse and the hadith sit together cleanly. Allah swears by His own Book because every oath is His to make, while the believer is told to swear by Allah alone or to stay silent. As for the well-loved saying that Ya Sin is the heart of the Qur'an, it should be weighed honestly: at-Tirmidhi, who records it, calls it gharīb, notes that one of its narrators is unknown, and grades a supporting chain as weak. So its reward-claims are not built on here. The surah earns its weight from the oath that opens it, not from a disputed merit.",
            "bn": "আয়াত আর হাদিস দুটি সুন্দরভাবে পাশাপাশি বসে। আল্লাহ নিজের কিতাবের নামে শপথ করেন, কারণ প্রতিটি শপথ করার অধিকার তাঁরই, আর মুমিনকে বলা হয়েছে কেবল আল্লাহর নামে শপথ করতে, নইলে চুপ থাকতে। আর ‘ইয়া-সীন কুরআনের হৃদয়’ বলে যে প্রিয় কথাটি প্রচলিত, তা সৎভাবে ওজন করা দরকার। তিরমিযী, যিনি এটি বর্ণনা করেন, একে ‘গারীব’ বলেন, জানান যে এর একজন বর্ণনাকারী অপরিচিত, আর এর একটি সহায়ক সনদকে দুর্বল বলে চিহ্নিত করেন। তাই এর সওয়াবের দাবিগুলোর উপর এখানে কিছু গড়া হয়নি। সূরা তার ভার পায় শুরুর শপথ থেকে, কোনো বিতর্কিত ফযিলত থেকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under An Oath",
          "bn": "শপথের নিচে বেঁচে থাকা"
        },
        "p": [
          {
            "en": "It is worth sitting with what it means that Allah swore by this Book. An oath points to the worth of the thing sworn by, and here the Sworn-by is the very revelation in the reader's hands. If the Almighty set His oath on it, the least a servant can do is stop treating it as background furniture, kept on a shelf and rarely opened, and start treating it as the weighty evidence it was offered as. The Book that vouches for the Prophet ﷺ is the same Book we are slow to consult when a doubt arises.",
            "bn": "আল্লাহ এই কিতাবের নামে শপথ করেছেন, এর মানে কী, তা নিয়ে একটু বসা দরকার। শপথ যা নিয়ে করা হয় তার মূল্যের দিকে ইশারা করে, আর এখানে যা নিয়ে শপথ তা হলো পাঠকের হাতে থাকা সেই ওহিই। মহাপরাক্রমশালী যদি এর উপর শপথ রাখেন, তাহলে বান্দার অন্তত এটুকু করা উচিত। একে আর তাকের উপর তুলে রাখা, কদাচিৎ খোলা আসবাবের মতো না ভেবে সেই ভারী দলিল হিসেবে ধরা, যেভাবে একে পেশ করা হয়েছে। যে কিতাব নবী ﷺ-এর পক্ষে সাক্ষ্য দেয়, সন্দেহ জাগলে সেই কিতাবের কাছেই যেতে আমরা দেরি করি।"
          },
          {
            "en": "There is also a steadiness to carry away. A Book described as firmly made, with no contradiction able to enter it, invites a particular patience: when a verse seems to clash with another, the fault to suspect first is in my reading, my haste, my half-knowledge, not in the Book that Allah called muḥkam. And a Book described as wise, placing each thing in its right spot, asks to be read for its reasons and not only its rulings. To live under this oath is to hold the Qur'an as both unbreakable and deeply reasoned, and to open it as if its Author meant every word.",
            "bn": "সঙ্গে নেওয়ার মতো একটা স্থিরতাও আছে। যে কিতাবকে বলা হয়েছে মজবুত করে গড়া, যাতে কোনো অসঙ্গতি ঢুকতে পারে না, তা এক বিশেষ ধৈর্যের ডাক দেয়। কোনো আয়াত যখন আরেকটির সঙ্গে সংঘর্ষপূর্ণ মনে হয়, প্রথমে যে দোষ সন্দেহ করা উচিত তা আমার পড়ায়, আমার তাড়াহুড়ায়, আমার অল্প জানায়, সেই কিতাবে নয় যাকে আল্লাহ ‘মুহকাম’ বলেছেন। আর যে কিতাবকে বলা হয়েছে প্রজ্ঞাময়, প্রতিটি জিনিস যথাস্থানে রাখা, তা শুধু বিধানের জন্য নয়, তার কারণের জন্যও পড়তে বলে। এই শপথের নিচে বেঁচে থাকা মানে কুরআনকে একসঙ্গে অটুট আর গভীরভাবে যুক্তিপূর্ণ হিসেবে ধরা, আর একে এমনভাবে খোলা যেন এর রচয়িতা প্রতিটি শব্দ মন থেকে বলেছেন।"
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
            "bn": "সূরার শুরুতেই এমন অন্তরের কথা এসেছে যা সতর্কবাণী নিতে পারে না। গলায় বেড়ি, তাই মাথা খাড়া হয়ে থাকে, সামনে ও পেছনে দেয়াল তোলা। ৩৬:১০ আয়াতে রায়টা সাফ: আপনি তাদের সতর্ক করুন বা না করুন, কিছুই বদলায় না, তারা ঈমান আনবে না। এরপর ৩৬:১১ আয়াত ক্যামেরা ঘুরিয়ে দেয়। মাআরিফুল কুরআন অস্বীকারকে দেখায় স্বাধীন পছন্দের ফল হিসেবে। আল্লাহ মানুষের সামনে দুই পথ রেখেছেন, আর কেউ একবার অস্বীকারে থিতু হলে সেই অস্বীকারের রসদ আর ফুরায় না। বার্তাবাহক ভুল করে পাথরের সঙ্গে কথা বলছিলেন না।"
          },
          {
            "en": "The word that opens 36:11 is innamā — 'only,' a word of restriction. As-Sa'di is careful about what it restricts. It does not shrink the Prophet's duty, for 36:6 sent him to warn a whole heedless people. It restricts where the benefit lands: his warning profits, and takes heed from his counsel, only whoever follows the Reminder. The task of warning stays as wide as all mankind; what the verse pins down is the soil in which it finally takes. The disappointment of the sealed hearts is answered not by shrinking the work but by naming its harvest.",
            "bn": "৩৬:১১ আয়াত শুরু হয় ‘ইন্নামা’ শব্দ দিয়ে, যার অর্থ ‘কেবল’, সীমা টেনে দেওয়ার শব্দ। সা'দী খেয়াল করিয়ে দেন, এটা কী সীমিত করছে। নবীর দায়িত্ব এটা ছোট করে না, কারণ ৩৬:৬ আয়াতে তাঁকে গোটা এক উদাসীন সম্প্রদায়ের কাছে পাঠানো হয়েছে। এটা সীমিত করে কোথায় ফল ধরবে তা: তাঁর সতর্কবাণী কাজে লাগে আর তাঁর নসিহত সে-ই গ্রহণ করে যে উপদেশ মেনে চলে। সতর্ক করার কাজ গোটা মানবজাতির মতোই বিস্তৃত থাকে; আয়াত শুধু ঠিক করে দেয় কোন মাটিতে তা শেষমেশ শিকড় গাড়ে। সীলমোহরপ্রাপ্ত অন্তরের হতাশার জবাব কাজ ছোট করে নয়, বরং তার ফসলের নাম ধরে।"
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
            "bn": "খেয়াল করুন ক্রমটা। আগে আসে মেনে চলা, ‘ইত্তাবাআ’, যা কাজের ক্রিয়া, নিছক শোনার নয়। উপদেশ তো উদাসীনদের কাছেও পৌঁছে গেছে; এই শ্রোতাকে আলাদা করে এটাই যে সে উপদেশের সঙ্গে পা মেলায়। তারপর ভেতরের অবস্থা বাইরের কাজের সঙ্গে জোড়া লাগে, ভয় বাঁধা পড়ে আনুগত্যের সঙ্গে, একসুতোয়। মানুষ রূপটা ধরে রেখে ভয়টা হারাতে পারে, কিংবা ভয়ের দাবি করেও এক পা না নড়তে পারে। আয়াত তাদের আলাদা হতে দেয় না। যে মাটি বীজ নেয় তা নরমও, ভেজাও, কর্ষিত আর প্রস্তুত।"
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
            "bn": "‘বিল-গায়ব’, অর্থাৎ না দেখে। ইবন কাসীর বলেন, এর মানে দয়াময়কে ভয় করা তখনও, যখন আল্লাহ ছাড়া কেউ তাকে দেখে না; সে জানে আল্লাহ তাকে দেখছেন আর তার কাজ লক্ষ করছেন। এটাই ঈমানের গোপন পরীক্ষা। বন্ধ দরজার পেছনের আচরণ, যেখানে সুনামের কিছু ঝুঁকিতে নেই আর একমাত্র সাক্ষী সেই সত্তা যাঁকে ভয় করা হচ্ছে। কুরআন একই দুই শব্দ পাশাপাশি রাখে ৬৭:১২ আয়াতে: যারা না দেখে তাদের রবকে ভয় করে, তাদের জন্য ক্ষমা আর বিরাট পুরস্কার। ইবন কাসীর সেই আয়াতকে এই আয়াতের পাশে রাখেন।"
          },
          {
            "en": "There is a quiet mercy in the name chosen here: ar-Rahmān, the Most Merciful. The Lord feared in secret is not a distant tyrant but the wellspring of all mercy; the awe and the hope rest on the very same Lord. To fear ar-Rahmān is to take with full seriousness the Lord most ready to forgive. That is why the clause can swing so fast from warning to good news without any strain. The heart that fears Him where no eye falls is precisely the heart He is reaching to reassure.",
            "bn": "এখানে বেছে নেওয়া নামটায় আছে এক নীরব রহমত: আর-রহমান, পরম দয়াময়। গোপনে যাঁকে ভয় করা হয় তিনি কোনো দূরের স্বৈরশাসক নন, বরং সব রহমতের উৎস। ভয় আর আশা একই রবের উপর ভর করে। আর-রহমানকে ভয় করা মানে সেই রবকে পুরো গুরুত্বে নেওয়া, যিনি ক্ষমায় সবচেয়ে প্রস্তুত। এজন্যই বাক্যটা এত দ্রুত সতর্কতা থেকে সুসংবাদে দুলে যেতে পারে, কোনো টানাপড়েন ছাড়াই। যে অন্তর কোনো চোখ না পড়া জায়গায়ও তাঁকে ভয় করে, সেই অন্তরকেই তিনি আশ্বস্ত করতে এগিয়ে আসছেন।"
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
            "bn": "‘ফাবাশশিরহু’, অর্থাৎ তাকে সুসংবাদ দাও। এক নিঃশ্বাসেই সতর্কতার ক্রিয়া বদলে যায় সুসংবাদের ক্রিয়ায়, বিশারায়। সা'দী প্রতিটি দান তার শিকড়ের সঙ্গে বাঁধেন: গুনাহের জন্য মাগফিরাত, আর নেক আমল ও খাঁটি নিয়তের জন্য সম্মানজনক পুরস্কার। গ্রহণকারী অন্তর কেবল রেহাই পায় না; তাকে দুটি জিনিসের ওয়াদা দেওয়া হয়, একটি অতীতকে মুছে দেয় আর একটি সামনের দিনকে মুকুট পরায়। সতর্কতা আর সুসংবাদ তাই বিপরীত কাজ নয়, একই বার্তার দুই প্রান্ত।"
          },
          {
            "en": "The reward is called karīm — noble, generous. Ibn Kathir reads it as a reward vast and great and beautiful. Karīm carries open-handedness, the giving of a Giver who gives before being asked and more than is deserved. So the verse holds out no bare wage; it promises a gift that bears the character of its Giver. For a warner worn down by refusal, and for a believer who obeys where no applause waits, this is the turn that recasts the whole labour: the ground that receives the word receives its harvest too.",
            "bn": "পুরস্কারকে বলা হয়েছে ‘কারীম’, সম্মানজনক ও উদার। ইবন কাসীর একে পড়েন বিশাল, মহৎ আর সুন্দর পুরস্কার হিসেবে। ‘কারীম’ শব্দে আছে খোলা হাত, এমন দাতার দান যিনি চাওয়ার আগেই দেন, আর প্রাপ্যের চেয়ে বেশি দেন। তাই আয়াত কোনো শুকনো মজুরি বাড়িয়ে ধরে না; এমন দানের ওয়াদা দেয় যা তার দাতার স্বভাব বহন করে। অস্বীকারে ক্লান্ত বার্তাবাহকের জন্য, আর যে মুমিন হাততালি নেই এমন জায়গায় মানে, তার জন্য এই মোড়ই গোটা শ্রমকে নতুন করে দেখায়: যে মাটি কথা গ্রহণ করে, সে তার ফসলও পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Caller's Failure",
          "bn": "ডাকওয়ালার ব্যর্থতা নয়"
        },
        "p": [
          {
            "en": "Read together, the sealed hearts of 36:10 and the receptive heart of 36:11 hold a mercy for anyone who calls to good and meets a wall. Later in this same surah the messengers state their own brief: our duty is only the clear delivery of the message, 36:17. The opening and shutting of hearts was never placed in their hands. When the word slides off like rain on rock, 36:11 tells the caller plainly where it was always meant to soak in. Being refused is not the evidence that he has failed.",
            "bn": "একসঙ্গে পড়লে ৩৬:১০ আয়াতের সীলমোহরপ্রাপ্ত অন্তর আর ৩৬:১১ আয়াতের গ্রহণকারী অন্তর একটা রহমত ধরে রাখে, তাদের জন্য যারা ভালোর দিকে ডাকে আর দেয়ালে ধাক্কা খায়। এই সূরাতেই পরে রসূলগণ নিজেদের দায়িত্ব জানান: আমাদের কাজ কেবল স্পষ্টভাবে বার্তা পৌঁছানো, ৩৬:১৭। অন্তর খোলা বা বন্ধ করা কখনো তাঁদের হাতে রাখা হয়নি। কথা যখন পাথরে বৃষ্টির মতো গড়িয়ে যায়, ৩৬:১১ আয়াত ডাকওয়ালাকে সাফ বলে দেয়, তা শুরু থেকেই কোথায় গিয়ে শুষে যাওয়ার কথা ছিল। প্রত্যাখ্যাত হওয়া তাঁর ব্যর্থতার প্রমাণ নয়।"
          },
          {
            "en": "This guards against two errors at once. It keeps the caller from despair, since the verse has already promised that some soil will take the seed and he is not answerable for the rock. It also keeps him from pride, because the softness belongs to the heart that God made soft, not to the caller's own eloquence. His share is faithful delivery and his own secret awe of ar-Rahmān; the yield is written elsewhere, by a hand that is not his. A parent, a teacher, a friend who keeps reminding can lay this burden down.",
            "bn": "এতে একসঙ্গে দুই ভুল থেকে রক্ষা মেলে। ডাকওয়ালাকে এটা হতাশা থেকে বাঁচায়, কারণ আয়াত আগেই ওয়াদা দিয়েছে কোনো না কোনো মাটি বীজ নেবে, আর পাথরের দায় তাঁর নয়। এটা তাঁকে অহংকার থেকেও বাঁচায়, কারণ নরম হওয়াটা সেই অন্তরের, যাকে আল্লাহ নরম করেছেন, ডাকওয়ালার নিজের বাগ্মিতার নয়। তাঁর ভাগ বিশ্বস্তভাবে পৌঁছে দেওয়া আর গোপনে আর-রহমানকে ভয় করা; ফসল লেখা হয় অন্য কোথাও, এমন হাতে যা তাঁর নয়। যে বাবা-মা, শিক্ষক বা বন্ধু উপদেশ দিয়ে যান, তিনি এই বোঝা নামিয়ে রাখতে পারেন।"
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
            "bn": "৩৬:১২ আয়াত নতুন এক দৃশ্য খোলে: নিশ্চয়ই আমিই মৃতকে জীবিত করি। সা'দী একে পড়েন পুনরুত্থানের কথা হিসেবে। মৃত্যুর পর আমরা তাদের ওঠাই তাদের আমলের প্রতিদান দিতে। কুরতুবী একেই বলেন স্পষ্টতর অর্থ, তবে জানান কেউ কেউ একে মৃত অন্তরকে ঈমানে জীবিত করার অর্থেও পড়েন। মুমিনকে দেওয়া পুরস্কারের ওয়াদা এবার দেখায় সেই আদালত, যেখানে হিসাব চুকানো হয়। মৃতকে জীবিত করার কথাটা রাখা হয়েছে সেই কাঠামো হিসেবে, রেকর্ড নিয়ে আয়াত এরপর যা বলবে তার চারপাশে।"
          },
          {
            "en": "Then: and We write what they sent ahead — mā qaddamū, their deeds. Ma'arif al-Qur'an lingers on that verb, sent ahead. The good or bad done in this world has not simply slipped behind us and vanished. It was their baggage, Ma'arif says, which has gone on ahead of them to the destination they must reach. Writing it down, Ma'arif adds, is for safe-keeping, so that no error, forgetting, increase or decrease can touch it. What feels spent and finished is in truth shipped forward, waiting at the far end.",
            "bn": "তারপর: আর আমি লিখে রাখি যা তারা আগে পাঠিয়েছে, ‘মা কাদ্দামু’, তাদের আমল। মাআরিফুল কুরআন সেই ক্রিয়াটায় থেমে থাকে, আগে পাঠানো। দুনিয়ায় করা ভালো বা মন্দ নিছক পেছনে ফেলে এসে মিলিয়ে যায়নি। মাআরিফুল কুরআন বলে, ওগুলো ছিল তাদের মালপত্র, যা তাদের আগেই রওনা হয়ে গেছে সেই গন্তব্যে যেখানে তাদের পৌঁছাতে হবে। লিখে রাখা, মাআরিফুল কুরআন যোগ করে, হলো নিরাপদে রাখার জন্য, যাতে কোনো ভুল, ভুলে যাওয়া, বাড়া বা কমা তা স্পর্শ করতে না পারে। যা শেষ আর খরচ হয়ে গেছে মনে হয়, তা আসলে আগে পাঠানো, অপেক্ষায় ওই প্রান্তে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Footprints That Keep Writing",
          "bn": "যে পদচিহ্ন লেখা চলতেই থাকে"
        },
        "p": [
          {
            "en": "Then the verse adds a second column: wa āthārahum — and their traces. The commentators open the word to two ranges. As-Sa'di takes it broadly: the traces of good and evil a person was the cause of setting in motion, in his life and after his death — knowledge he taught, a book he wrote, a masjid he built, a charity others copy, and, in the same way, every harm he let loose. Al-Qurtubi gives the matching list: learning, an endowment, a bridge, a mosque, against an unjust levy or a corrupting fashion.",
            "bn": "এরপর আয়াত যোগ করে দ্বিতীয় একটি স্তম্ভ: ‘ওয়া আসারাহুম’, আর তাদের রেখে যাওয়া চিহ্ন। তাফসীরকারেরা শব্দটাকে খোলেন দুই পরিসরে। সা'দী নেন ব্যাপক অর্থে: ভালো আর মন্দের সেই চিহ্ন, যা চালু করার কারণ একজন মানুষ নিজেই হয়েছে, তার জীবদ্দশায় আর মৃত্যুর পরেও। যে ইলম সে শিখিয়েছে, যে কিতাব লিখেছে, যে মসজিদ গড়েছে, যে দান অন্যে অনুসরণ করে, আর তেমনি সব ক্ষতি যা সে ছেড়ে দিয়ে গেছে। কুরতুবী দেন মিলিয়ে তালিকা: ইলম, ওয়াকফ, সেতু, মসজিদ, বিপরীতে অন্যায় কর বা নষ্ট করা কোনো রীতি।"
          },
          {
            "en": "The second range is literal footsteps. Al-Qurtubi reports that Ibn Abbas, Umar and Sa'id ibn Jubayr read the traces as steps to the mosques, and an-Nahhas judged this the best that has been said, because the verse came down about it: the Ansar's homes lay far from the mosque. Tirmidhi records from Abu Sa'id al-Khudri that Banu Salama wished to move nearer and the verse was revealed; Tirmidhi graded that report hasan gharib, sound but singular in its chain. The two readings do not quarrel; Ibn Kathir folds the footsteps into the wider traces.",
            "bn": "দ্বিতীয় পরিসরটি আক্ষরিক পদচিহ্ন। কুরতুবী বলেন, ইবন আব্বাস, উমর ও সাঈদ ইবন জুবায়ের এই চিহ্নকে পড়েন মসজিদের দিকে ফেলা পায়ের ধাপ হিসেবে, আর নাহহাস একে বলেন এ নিয়ে বলা সেরা কথা, কারণ আয়াতটি এ বিষয়েই নাযিল হয়েছে: আনসারদের ঘরবাড়ি ছিল মসজিদ থেকে দূরে। তিরমিযী আবু সাঈদ খুদরী (রাঃ) থেকে বর্ণনা করেন যে বনু সালিমা কাছে সরে আসতে চেয়েছিল আর তখন আয়াত নাযিল হয়; তিরমিযী সেই বর্ণনাকে বলেছেন হাসান গারীব, সহীহ তবে সনদে একক। এই দুই পাঠ পরস্পর ঝগড়া করে না; ইবন কাসীর পদচিহ্নকে বৃহত্তর চিহ্নের ভেতরেই গুঁজে দেন।"
          },
          {
            "en": "The incident stands firmly recorded in Sahih Muslim, from Jabir ibn Abdullah (may Allah be pleased with him): There were some plots lying vacant around the mosque. Banu Salama decided to shift and come nearer to the mosque. When this reached the Messenger of Allah ﷺ he said to them: O Banu Salama, live in your houses, for your steps are recorded; live in your houses, for your steps are recorded. It is sound by its place in Muslim's collection. Every walk toward good, the Prophet ﷺ taught, is itself being written down.",
            "bn": "ঘটনাটি দৃঢ়ভাবে লিপিবদ্ধ আছে সহীহ মুসলিমে, জাবির ইবন আবদুল্লাহ (রাঃ) থেকে: মসজিদের চারপাশে কিছু জায়গা খালি পড়ে ছিল। বনু সালিমা ঠিক করল মসজিদের কাছে সরে আসবে। এ কথা রসূলুল্লাহ ﷺ-এর কাছে পৌঁছলে তিনি তাদের বললেন: হে বনু সালিমা, তোমরা নিজেদের বাড়িতেই থাকো, তোমাদের পায়ের ধাপ লেখা হচ্ছে; নিজেদের বাড়িতেই থাকো, তোমাদের পায়ের ধাপ লেখা হচ্ছে। মুসলিমের সংকলনে স্থান পাওয়ায় এটি সহীহ। ভালোর দিকে ফেলা প্রতিটি পদক্ষেপ, নবী ﷺ শিখিয়েছেন, নিজেই লেখা হচ্ছে।"
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
            "bn": "একই সত্য চালায় নবীর সবচেয়ে পরিচিত সেই শিক্ষা, আমাদের পরেও কী টিকে থাকে তা নিয়ে। ইবন কাসীর এখানে সহীহ মুসলিম থেকে আবু হুরায়রা (রাঃ)-এর সূত্রে তা উদ্ধৃত করেন: মানুষ মারা গেলে তার আমল শেষ হয়ে যায়, তিনটি ছাড়া, চলমান সদকা, অথবা এমন ইলম যা থেকে মানুষ উপকার পায়, অথবা নেক সন্তান যে তার জন্য দোয়া করে। এগুলোই মূর্ত রূপে সেই চিহ্ন: এক সদকা এখনো বয়ে চলছে, এক পাঠ এখনো পড়ানো হচ্ছে, এক সন্তান এখনো নামাজে। খাতা খোলা থাকে, যে হাত তা খুলেছিল তা থেমে যাওয়ার অনেক পরেও।"
          },
          {
            "en": "Ibn Kathir also brings from Muslim, on the authority of Jarir ibn Abdullah (may Allah be pleased with him), the warning's mirror image: whoever sets a good precedent in Islam has its reward and the reward of all who act on it after him, and whoever sets a bad precedent bears its burden and theirs — and in Ibn Abi Hatim's fuller wording the Prophet ﷺ then recited this very verse. So the traces run in both directions. The question the verse leaves is not whether we leave a trail behind, but what that trail will teach whoever walks it after us.",
            "bn": "ইবন কাসীর মুসলিম থেকে জারীর ইবন আবদুল্লাহ (রাঃ)-এর সূত্রে আনেন সেই সতর্কতার উল্টো ছবিও: যে ইসলামে কোনো ভালো রীতি চালু করে, তার জন্য তার সওয়াব আর তার পরে যারা তা পালন করে সবার সওয়াব; আর যে মন্দ রীতি চালু করে, তার উপর তার বোঝা আর তাদেরও বোঝা। ইবন আবি হাতিমের পূর্ণতর বর্ণনায় নবী ﷺ এরপর এই আয়াতটিই তিলাওয়াত করেন। তাই চিহ্ন দুই দিকেই চলে। আয়াত যে প্রশ্ন রেখে যায় তা এই নয় যে আমরা পেছনে কোনো রেখা রেখে যাই কি না, বরং সেই রেখা আমাদের পরে যে হাঁটবে তাকে কী শেখাবে।"
          },
          {
            "en": "The verse closes by sealing everything: and all things We have enumerated in a clear register — imām mubīn. The commentators spread the phrase across a range. Mujahid, Qatada, as-Sa'di and al-Baghawi take the imām mubīn as al-Lawh al-Mahfuz, the Preserved Tablet — the mother of books, to which the records in the angels' hands return. Al-Qurtubi notes that another group read it as the pages of a person's own deeds. Either way, nothing is mislaid. The deed, its far-off echo, even the steps between a house and the prayer — all are held in a record that never drops a line.",
            "bn": "আয়াত সব কিছু সিলমোহর করে শেষ হয়: আর সব কিছু আমি গুনে রেখেছি স্পষ্ট এক কিতাবে, ‘ইমাম মুবীন’। তাফসীরকারেরা কথাটাকে ছড়িয়ে দেন এক পরিসরে। মুজাহিদ, কাতাদা, সা'দী ও বাগাভী ‘ইমাম মুবীন’ বলতে নেন লাওহে মাহফুজ, সংরক্ষিত ফলক, কিতাবসমূহের জননী, ফেরেশতাদের হাতের লেখা যার কাছে ফিরে যায়। কুরতুবী জানান, আরেক দল একে পড়েন মানুষের নিজের আমলনামার পাতা হিসেবে। যে পথেই হোক, কিছুই হারায় না। আমল, তার বহুদূরের প্রতিধ্বনি, এমনকি ঘর থেকে নামাজ পর্যন্ত ধাপগুলোও, সবই ধরা থাকে এমন এক রেকর্ডে যা কখনো এক লাইনও বাদ দেয় না।"
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
          "bn": "নিজের কাছেই রাখা প্রশ্ন"
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
            "bn": "প্রশ্নটা ঠিকভাবে শুনতে হলে মনে রাখুন কে তা করছে। তিনটি আয়াত আগে, ৩৬:২০ আয়াতে, নগরের সবচেয়ে দূরের প্রান্ত থেকে এক লোক ছুটে আসে, আর জাতিকে রসূলদের মান্য করতে ডাকে। মাআরিফুল কুরআন বলে, কুরআন এখানে জায়গাটিকে বলেছে আল-মাদীনা, যে শব্দ ছোট গ্রাম নয় বড় শহরের জন্য ব্যবহৃত হয়; এতে সেই বর্ণনাগুলোর সঙ্গে মেলে যেখানে একে বড় জনপদ বলা হয়েছে। লোকটি শহরের কিনারা থেকে সোজা বিপদের মুখে ছুটে আসে, কেবল পাওয়া সত্যটুকু বলার জন্য।"
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
            "bn": "তার যুক্তির মূল একটি শর্তে: ইন ইউরিদনির রাহমানু বিদুররিন, করুণাময় যদি আমার কোনো ক্ষতি করতে চান। তাবারী দুরর-এর অর্থ করেন সেই ক্ষতি ও কষ্ট, যা মানুষকে স্পর্শ করে। কুরতুবী একে আরও সংকীর্ণভাবে পড়েন, অর্থাৎ যে অসুখ তাকে পেয়ে বসতে পারে। বাগাভী ধরেন যেকোনো মন্দ বা অপ্রিয় বিপদকে। ক্ষতি বিশেষ করে অসুখ হোক বা আরও বিস্তৃত কিছু, কথাটা একই থাকে আর তাফসীরকারেরা তাতে একমত: তা পাঠানোর ক্ষমতা আল্লাহরই হাতে, আর লোকটি সেই ক্ষমতাকে হুবহু চিনিয়ে দেয়।"
          },
          {
            "en": "Notice the name he chooses. He does not say if God wills me harm but if ar-Rahman, the Most Merciful, intends it. The very One whose mercy reaches all things is also the only One whose decree can touch him with hardship. Mercy and power are not two rival gods to be set against each other; they are one Lord. To dread harm from any other source, or to beg relief from any other hand, is to misread who it is that actually holds both the harm and the healing.",
            "bn": "খেয়াল করুন সে কোন নামটা বেছে নেয়। সে বলে না আল্লাহ যদি আমার ক্ষতি চান, বরং বলে আর-রাহমান, সেই করুণাময় যদি তা চান। যাঁর দয়া সব কিছুকে ঘিরে রাখে, তিনিই একমাত্র সত্তা যাঁর ফয়সালা তাকে কষ্ট দিয়ে স্পর্শ করতে পারে। দয়া আর ক্ষমতা পরস্পরের মুখোমুখি দাঁড় করানোর মতো দুই প্রতিদ্বন্দ্বী ইলাহ নয়; তারা একই রব। অন্য কোনো উৎস থেকে ক্ষতির ভয় করা, কিংবা অন্য কোনো হাতের কাছে মুক্তি চাওয়া মানে ভুল বোঝা যে ক্ষতি আর আরোগ্য দুটোই আসলে কার হাতে।"
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
            "bn": "ইবন কাসীর একই কথা আরও জোর দিয়ে বলেন। তিনি বলেন, তাঁকে ছেড়ে তোমরা যে ইলাহদের পূজা কর, তাদের হাতে কোনো কর্তৃত্বই নেই; আল্লাহ কারও ক্ষতি চাইলে তিনি ছাড়া কেউ তা সরাতে পারে না, যেমন অন্য আয়াতে ১০:১০৭ আয়াতে বলা হয়েছে। মূর্তিগুলো না ফয়সালা ঠেকাতে পারে, না আটকে রাখতে পারে, না এর নিচে পড়া মানুষকে বাঁচাতে পারে। তাদের পূজারিরা নিজেদের আশা তুলে দিয়েছে এমন জিনিসের হাতে যা কিছুই করতে পারে না, অথচ যিনি একমাত্র কাজ করেন তিনি তাদের হিসাবের বাইরেই থেকে যান, না ডাকা, না স্বীকৃত।"
          },
          {
            "en": "Al-Qurtubi fastens on the last word, la yunqidhun, they cannot save me. He glosses it as, they cannot rescue me from the affliction I am in. Read together with his reading of durr as sickness, the picture turns vivid: a man laid low by illness, surrounded by figures he once called gods, and not one of them able to raise him from where he lies. The verse strips the idol of the exact service its worshipper most wanted from it, help in the hour it is needed.",
            "bn": "কুরতুবী শেষ শব্দটির উপর জোর দেন, লা ইউনকিযূন, তারা আমাকে বাঁচাতে পারে না। তিনি এর ব্যাখ্যা করেন: আমি যে বিপদে আছি, তা থেকে তারা আমাকে উদ্ধার করতে পারে না। দুরর-কে অসুখ হিসেবে তাঁর পড়ার সঙ্গে মিলিয়ে দেখলে ছবিটা জীবন্ত হয়ে ওঠে: অসুখে কাবু এক মানুষ, চারপাশে সেইসব মূর্তি যাদের সে এক সময় ইলাহ বলত, অথচ তাদের একটিও তাকে শোয়া জায়গা থেকে তুলতে পারে না। পূজারি তার মূর্তির কাছে ঠিক যে সেবাটা সবচেয়ে বেশি চেয়েছিল, প্রয়োজনের মুহূর্তে সাহায্য, আয়াত সেটাই তার কাছ থেকে কেড়ে নেয়।"
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
            "bn": "শাফাআ, অর্থাৎ সুপারিশ শব্দটি নিয়ে সতর্ক থাকা দরকার, কারণ কুরআন অন্যত্র এক সত্য সুপারিশকে স্বীকার করে। মূর্তির সুপারিশ কেন মূল্যহীন, তাফসীরকারেরা তার দুটি পরিপূরক কারণ দেন। সা'দী বলেন, আল্লাহর কাছে তাঁর অনুমতি ছাড়া কেউই সুপারিশ করতে পারে না, তাই এই জিনিসগুলো যা-ই আবেদন করুক তাঁর কাছে তার কোনো ওজন নেই। বাগাভী আরও এগিয়ে বলেন: এই মিথ্যা ইলাহদের কোনো সুপারিশই নেই, দুর্বল সুপারিশও নয়, একেবারেই নেই, তাই তাদের ভেতরে কমতি হওয়ার মতো কিছুই অবশিষ্ট থাকে না। দুই ব্যাখ্যাই একই শূন্যতায় গিয়ে ঠেকে।"
          },
          {
            "en": "So the verse does not deny intercession as such; it denies that the idols own any. On the Day of Judgement intercession will indeed take place, but only for whom Allah permits and only by His leave, which is exactly the principle the believer's words rest on. What is refused here is the pagan hope that a carved figure or a lesser being could overrule the Lord on your behalf. Reliance misplaced onto such intercessors is not piety; it is a wager on a power that was never there to begin with.",
            "bn": "তাই আয়াত সুপারিশকে একেবারে অস্বীকার করে না; অস্বীকার করে যে মূর্তিদের কোনো সুপারিশ আছে। কিয়ামতের দিন সুপারিশ সত্যিই হবে, তবে কেবল তাদের জন্য যাদের আল্লাহ অনুমতি দেন আর কেবল তাঁরই অনুমতিতে, আর এই নীতির উপরই মুমিনের কথা দাঁড়িয়ে। এখানে যা নাকচ করা হচ্ছে তা হলো মুশরিকদের সেই আশা, যেন কোনো খোদাই করা মূর্তি বা ছোট কোনো সত্তা তোমার হয়ে রবের ফয়সালা উল্টে দিতে পারবে। এমন সুপারিশকারীর উপর ভুল করে রাখা ভরসা ইবাদত নয়; এ তো এমন এক শক্তির উপর বাজি, যা কোনোদিন ছিলই না।"
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
            "bn": "তার কথাগুলো সাজিয়ে নিন, যুক্তিটা পূর্ণ হয়ে দাঁড়ায়। সে ৩৬:২২ আয়াতে বলে, যিনি আমাকে সৃষ্টি করেছেন সেই একমাত্র সত্তার ইবাদত আমি কেন করব না, আর যাঁর কাছে তোমাদের সবাইকে ফিরিয়ে নেওয়া হচ্ছে? ইবাদত প্রাপ্য সেই স্রষ্টার, যিনিই আবার বিচারক। এরপর আসে ৩৬:২৩ আয়াতের পাল্টা প্রশ্ন: সেই স্রষ্টার পাশে আমি কি এমন ইলাহ বসাব, যারা ক্ষতি বা উপকার কিছুই ছুঁতে পারে না? তারপর সে ৩৬:২৪ আয়াতে নিজের উপর রায় দেয়: এমন করলে আমি স্পষ্ট খোলা ভুলেই পড়ব।"
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
          "bn": "আপনি কিসে হেলান দেন"
        },
        "p": [
          {
            "en": "Carried into an ordinary life, the man's question becomes a quiet test of the heart. Everyone leans on something against the fear of harm: a job, a connection, a saved amount, another person's goodwill, even the habit of worry itself. None of these is an idol of stone, and yet the verse's logic reaches all of them without exception. Can any of them turn aside what your Lord has already decided? If the honest answer is no, then they were never the place where your deepest trust belonged.",
            "bn": "সাধারণ জীবনে নিয়ে এলে লোকটির প্রশ্নটা মনের এক নীরব পরীক্ষা হয়ে দাঁড়ায়। ক্ষতির ভয়ের বিপরীতে সবাই কিছু না কিছুর উপর হেলান দেয়: চাকরি, কোনো যোগাযোগ, জমানো কিছু টাকা, অন্য মানুষের সদিচ্ছা, এমনকি দুশ্চিন্তা করার অভ্যাসটাই। এগুলোর কোনোটাই পাথরের মূর্তি নয়, তবু আয়াতের যুক্তি এদের প্রত্যেকটিকে ছুঁয়ে যায়। এদের কেউ কি আপনার রব যা ঠিক করে রেখেছেন তা সরিয়ে দিতে পারবে? সৎ উত্তর যদি হয় না, তবে আপনার গভীরতম ভরসার আসল জায়গা এগুলো কখনোই ছিল না।"
          },
          {
            "en": "This is not a call to abandon means; the believer still spoke, still acted, still warned his people to the end. It is a call to put means back in their place, under the hand that actually governs them. Rely on ar-Rahman, who alone can send the harm and alone can lift it, and treat every lesser help as a gift from Him rather than a rival to Him. Ask Him, seek your help from Him, and let the things you once leaned on serve you rather than quietly rule you.",
            "bn": "এটি উপায়-অবলম্বন ছেড়ে দেওয়ার ডাক নয়; সেই মুমিন তো শেষ পর্যন্ত কথা বলেছে, কাজ করেছে, জাতিকে সতর্ক করেছে। এটি উপায়গুলোকে তাদের জায়গায় ফিরিয়ে রাখার ডাক, সেই হাতের নিচে যা আসলে এদের পরিচালনা করে। ভরসা রাখুন আর-রাহমানের উপর, যিনি একাই ক্ষতি পাঠাতে পারেন আর একাই তা সরাতে পারেন, আর প্রতিটি ছোট সাহায্যকে তাঁর প্রতিদ্বন্দ্বী নয়, তাঁরই দান হিসেবে দেখুন। তাঁর কাছে চান, তাঁর কাছেই সাহায্য চান, আর যেগুলোর উপর এক সময় হেলান দিতেন সেগুলো আপনাকে শাসন না করে বরং আপনার সেবা করুক।"
          },
          {
            "en": "One note in closing. The town in this passage is later destroyed for its rejection, yet the verse before us is the speech of a believer calling to the truth, and it licenses nothing against any living person or community. It is an argument for tawhid, addressed first of all to the one who reads it now. Its claim is on my own reliance and my own fear, not on anyone else's blame, and it asks only that I move my trust to where it was always owed.",
            "bn": "শেষে একটি কথা। এই অংশের জনপদকে পরে তার অস্বীকারের কারণে ধ্বংস করা হয়, তবু আমাদের সামনের আয়াতটি হলো সত্যের দিকে ডাকা এক মুমিনের কথা, আর তা কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। এ হলো তাওহীদের পক্ষে এক যুক্তি, যা সবার আগে সম্বোধন করে তাকেই যে এখন তা পড়ছে। এর দাবি আমার নিজের ভরসা আর নিজের ভয়ের উপর, অন্য কারও দোষের উপর নয়, আর তা কেবল এটুকুই চায় যে আমি আমার ভরসা সেখানে সরিয়ে নিই যেখানে তা চিরকাল প্রাপ্য ছিল।"
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
            "bn": "আয়াতটি শুরু হয় একটি কর্মবাচ্যের ক্রিয়া দিয়ে, কীলা, বলা হলো, আর বক্তার নাম বলে না। মাঝখানে মৃত্যুর কোনো দৃশ্য নেই। যে লোক ছুটে এসে বলেছিল রসূলদের মান্য করতে, তার জাতির লোকেরা এইমাত্র তাকে মেরে ফেলেছে। এরপর কুরআন যা তুলে ধরে তা তার আঘাত নয়, বরং এক আহ্বান, জান্নাতে প্রবেশ কর। তাবারী এটিকে পড়েন আল্লাহরই কথা হিসেবে, যা তিনি বলেছিলেন তারা তাকে হত্যা করার সঙ্গে সঙ্গেই। সাদী বলেন কথাটি তার কাছে এসেছিল তৎক্ষণাৎ, আর মুয়াসসার যোগ করেন, তাকে সম্মান জানাতেই তার হত্যার পর এ কথা বলা হয়েছিল।"
          },
          {
            "en": "Who spoke it is left veiled, though the certainty of it is not. Ma'arif al-Qur'an holds that the address reached him through an angel sent to bid him enter. The passive keeps the speaker behind a curtain and puts the whole weight on the words themselves. Set the two sides of the moment beside each other. Behind him is a street full of people who mocked the messengers and turned on him; ahead of him is a single command, Enter, and a door standing open. The distance between the two is the length of his faith.",
            "bn": "কে বলল তা ঢেকে রাখা হয়েছে, যদিও কথাটির নিশ্চয়তা ঢাকা পড়েনি। মাআরিফুল কুরআন বলে, এক ফেরেশতার মাধ্যমে এ আহ্বান তার কাছে পৌঁছেছিল, যাকে পাঠানো হয়েছিল তাকে প্রবেশের কথা বলতে। কর্মবাচ্য বক্তাকে পর্দার আড়ালে রাখে, আর পুরো ভার তুলে দেয় কথাগুলোর উপর। মুহূর্তটার দুই দিক পাশাপাশি রাখুন। পেছনে এক রাস্তা ভরা মানুষ, যারা রসূলদের ঠাট্টা করেছে আর তার উপর চড়াও হয়েছে। সামনে একটিমাত্র হুকুম, প্রবেশ কর, আর খোলা একটা দুয়ার। এ দুইয়ের মাঝের দূরত্বটুকুই তার ঈমানের মাপ।"
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
            "bn": "প্রবেশের ধরন নিয়ে তাফসীরকারেরা মতভেদ করেন। ইবনে মাসঊদ (রাঃ) থেকে, ইবনে ইসহাকের সূত্রে, তাবারী ও ইবনে কাসীর দুজনেই বর্ণনা করেন যে তার জাতি তাকে পায়ে মাড়িয়েছিল। আর আল্লাহ তাকে বললেন, জান্নাতে প্রবেশ কর। সে জীবিত অবস্থায় তাতে প্রবেশ করল, যেখানে তাকে রিযিক দেওয়া হয়, আল্লাহ তার থেকে দুনিয়ার রোগ, দুঃখ আর ক্লান্তি তুলে নিয়েছেন। কুরতুবী আরেকটি বর্ণনা রাখেন, তাকে করাত দিয়ে চেরা হয়েছিল। মৃত্যুর ধরন বর্ণনাগুলো যেমন রেখেছে তেমনই থাক, কিন্তু যে কথায় সবাই এক তা পাকা, তার নিজের জাতিই তাকে হত্যা করেছিল, আর তাকে কবুল করে নেওয়া হয়েছিল।"
          },
          {
            "en": "Mujahid reads the welcome as a verdict. In Ibn Kathir he says, It was said to Habib an-Najjar, Enter Paradise; this was his due, for he had been killed, and when he saw the reward he spoke. At-Tabari carries the same from him in other words: qad wajabat lahu l-janna, Paradise had become his by right, said when he saw the reward. A group, al-Qurtubi notes, took Enter Paradise to mean it has become due to you, a report that he had earned admission, since entering it in full comes only after the resurrection.",
            "bn": "মুজাহিদ এই অভ্যর্থনাকে পড়েন এক রায় হিসেবে। ইবনে কাসীরে তিনি বলেন, হাবীব আন-নাজ্জারকে বলা হলো, জান্নাতে প্রবেশ কর। এ ছিল তার প্রাপ্য, কারণ তাকে হত্যা করা হয়েছিল, আর পুরস্কার দেখে সে কথা বলল। তাবারী তার থেকেই অন্য ভাষায় একই কথা আনেন, কাদ ওয়াজাবাত লাহুল জান্নাহ, জান্নাত তার হকে পরিণত হয়েছিল, এ কথা সে বলেছিল পুরস্কার দেখার সময়। কুরতুবী জানান, একদল জান্নাতে প্রবেশ কর কথার অর্থ নিয়েছেন তোমার জন্য তা অবধারিত হয়ে গেছে, এ এক ঘোষণা যে সে প্রবেশের যোগ্য হয়েছে, কারণ পূর্ণভাবে তাতে ঢোকা তো পুনরুত্থানের পরেই।"
          },
          {
            "en": "Qatadah tied his being alive to the verse on the slain in Allah's way: he is in Paradise, living and provided for, as 3:169 says of those killed in His path. Al-Qurtubi keeps a different view too, from al-Hasan by way of al-Qushayri, that Allah raised him up before they could kill him and he remains in the Garden. Al-Qurtubi's own preference is the plain reading: when he was killed, he was told to enter. Ma'arif gathers it into the state of barzakh, where those bound for Paradise are already given its comfort, a foretaste of the entry still to come.",
            "bn": "কাতাদা তার জীবিত থাকাকে যুক্ত করেন আল্লাহর পথে নিহতদের নিয়ে নাজিল হওয়া আয়াতের সঙ্গে, সে জান্নাতে জীবিত ও রিযিকপ্রাপ্ত, যেমন ৩:১৬৯ আয়াত তাঁর পথে নিহতদের নিয়ে বলে। কুরতুবী আরেকটি মতও রাখেন, হাসান থেকে কুশায়রীর সূত্রে, যে তারা তাকে হত্যা করার আগেই আল্লাহ তাকে উঠিয়ে নিয়েছিলেন, আর সে জান্নাতেই রয়ে গেছে। কুরতুবীর নিজের পছন্দ সোজা কথাটাই, তাকে যখন হত্যা করা হলো তখন তাকে প্রবেশ করতে বলা হলো। মাআরিফ পুরো বিষয়টিকে বারযাখের অবস্থায় গুছিয়ে আনে, যেখানে জান্নাতের জন্য নির্ধারিতদের আগেই তার আরাম দেওয়া হয়, শেষ প্রবেশের আগে এক ধরনের প্রবেশ।"
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
            "bn": "এবার আসে বিস্ময়কর মোড়টা। কালা ইয়া লাইতা কাওমী ইয়ালামূন, সে বলল, হায়, আমার জাতির লোকেরা যদি জানত। খুনিদের অপরাধ নিয়ে একটি শব্দও নেই, বিচারের কোনো আরজি নেই, নিজের রক্ষা পাওয়ার স্বস্তিরও কোনো নিঃশ্বাস নেই। পুরস্কারের ভেতরে দাঁড়িয়ে তার প্রথম হাত বাড়ানোটা কাওমীরই দিকে, আমার জাতি, যারা এইমাত্র তাকে মৃত্যুর মুখে ঠেলে দিয়েছে। শব্দটা খেয়াল করুন। সে বলে না ঐ লোকেরা, কিংবা ঐ জাতি, সে বলে আমার। তাদের সঙ্গে সে যে বন্ধনের দাবি করে, তারা তার সঙ্গে যা করল তাতে তা মুছে যায় না।"
          },
          {
            "en": "Al-Qurtubi observes that the sentence is shaped as though answering a question, someone asking what he found at that great triumph, and he answers not with his own joy but with a wish for them. The man murdered by his community wants, before anything for himself, that his community could see what he now sees. There is no gloating in it and no curse upon those who killed him. There is only a longing, bare and urgent, that they might arrive where he has arrived.",
            "bn": "কুরতুবী লক্ষ করেন, বাক্যটি এমনভাবে গড়া যেন কোনো প্রশ্নের জবাব, কেউ যেন জিজ্ঞেস করছে সেই মহা সাফল্যে সে কী পেল, আর সে জবাব দেয় নিজের আনন্দ দিয়ে নয়, তাদের জন্য এক কামনা দিয়ে। নিজের জাতির হাতে খুন হওয়া লোকটি নিজের জন্য কিছু চাওয়ার আগে চায় তার জাতি যেন সে এখন যা দেখছে তা দেখতে পায়। এতে কোনো অহংকার নেই, যারা তাকে মারল তাদের প্রতি কোনো অভিশাপও নেই। আছে শুধু একটা আকুতি, খোলা ও তীব্র, তারাও যেন সেখানে পৌঁছায় যেখানে সে পৌঁছেছে।"
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
            "bn": "চাওয়াটা জানত পর্যন্ত থেমে থাকে না। পরের আয়াত তা পূর্ণ করে, বিমা গাফারা লী রাব্বী ওয়া জাআলানী মিনাল মুকরামীন, আমার রব কীসের বদৌলতে আমাকে ক্ষমা করেছেন আর সম্মানিতদের অন্তর্ভুক্ত করেছেন (৩৬:২৭)। সে চায় তারা জানুক সেই ক্ষমা আর সেই সম্মানের কথা। কুরতুবী ছোট্ট শব্দ বিমা নিয়ে থামেন, যে জিনিসের বদলে তাকে ক্ষমা করা হলো, আর জানান ব্যাকরণবিদেরা একে বিস্ময়ের প্রশ্ন হিসেবেও পড়েছেন, কীসের বদলে আমার রব আমাকে ক্ষমা করলেন। যেভাবেই পড়ুন, দৃষ্টি স্থির থাকে পাওয়া রহমতের উপর, সহ্য করা অন্যায়ের উপর নয়।"
          },
          {
            "en": "At-Tabari spells out what he wished they would grasp. He wanted them to know that the reason his Lord forgave his sins and placed him among those honoured with His Paradise was his faith in Allah and his patience, borne even to being killed, so that they too might believe and come to deserve the Garden. Abu Mijlaz, in Ibn Kathir, reads the verse's own answer to its question: forgiven, he says, because of my faith in my Lord and my belief in the Messengers.",
            "bn": "তাবারী খুলে বলেন সে কী জানাতে চেয়েছিল তাদের। সে চেয়েছিল তারা জানুক, তার রব যে কারণে তার গুনাহ ক্ষমা করেছেন আর তাকে জান্নাত দিয়ে সম্মানিতদের দলে তুলেছেন, তা হলো আল্লাহর উপর তার ঈমান আর তার ধৈর্য, হত্যা হয়ে যাওয়া পর্যন্ত বয়ে নেওয়া সেই ধৈর্য। যেন তারাও ঈমান আনে আর জান্নাতের যোগ্য হয়ে ওঠে। ইবনে কাসীরে আবূ মিজলায আয়াতের নিজের জবাবটাই পড়েন, ক্ষমা, সে বলে, আমার রবের উপর আমার ঈমান আর রসূলদের প্রতি আমার বিশ্বাসের কারণে।"
          },
          {
            "en": "Ibn Kathir draws the point all the way out. The man meant that if his people could only see the vast reward and the lasting blessing he had been given, it would move them to follow the messengers. His wish is not that they would envy him his place but that they would be guided by what he had found. The honour he received becomes, in his own mouth, an argument he presses on the living, the strongest case he can make for the faith that cost him his life.",
            "bn": "ইবনে কাসীর কথাটা একেবারে শেষ পর্যন্ত টানেন। লোকটির মানে ছিল, তার জাতি যদি কেবল সেই বিশাল পুরস্কার আর স্থায়ী নিয়ামত দেখতে পেত যা তাকে দেওয়া হয়েছে, তবে তা তাদের নাড়া দিত রসূলদের মান্য করতে। তার চাওয়া এ নয় যে তারা তার জায়গা দেখে হিংসা করুক, বরং সে যা পেয়েছে তা দিয়েই তারা হেদায়েত পাক। তার পাওয়া সম্মান তার নিজের মুখে পরিণত হয় জীবিতদের উপর পেশ করা এক যুক্তিতে, যে ঈমান তার জীবন কেড়েছে, সেটার পক্ষে তার সবচেয়ে জোরালো প্রমাণ।"
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
            "bn": "ইবনে আব্বাস (রাঃ), ইবনে আবী হাতিমের বর্ণনায়, লোকটির জীবনের দুই অর্ধ পাশাপাশি রাখেন। সে তার জাতির প্রতি খাঁটি দরদ দেখিয়েছিল তার জীবদ্দশায়, হে আমার জাতি, রসূলদের মান্য কর (৩৬:২০) বলে। আর সে তাদের প্রতি খাঁটি ছিল তার মৃত্যুর পরেও, হায়, আমার জাতির লোকেরা যদি জানত বলে। নাসীহা, এমন একজনের সৎ কল্যাণকামনা যে আপনার ভালো ছাড়া আর কিছুই চায় না, তা তারা তাকে হত্যা করার সময় থামেনি। সে কেবল ঠিকানা বদলাল, যে রাস্তা ধরে সে ছুটে এসেছিল সেখান থেকে যে জান্নাতে সে ঢুকেছিল সেখানে।"
          },
          {
            "en": "Qatadah puts it as a settled rule: you will never meet a true believer except as a sincere adviser, never as one who deceives; and when this man saw with his own eyes how Allah had honoured him, he wished his people could know it. As-Sa'di says the same, that he spoke to inform them of the honour he reached for his tawhid and his sincerity, advising his people after his death as he had advised them in his life. Good-will toward one's own persecutors, outliving the body they destroyed.",
            "bn": "কাতাদা একে পেশ করেন এক পাকা নিয়ম হিসেবে, খাঁটি মুমিনকে আপনি কখনো পাবেন না শুধু একজন আন্তরিক উপদেশদাতা ছাড়া, কখনো প্রতারক হিসেবে নয়। আর এই লোকটি যখন নিজ চোখে দেখল আল্লাহ তাকে কেমন সম্মান দিয়েছেন, সে চাইল তার জাতিও যেন তা জানতে পারে। সাদীও একই কথা বলেন, সে কথা বলল তার তাওহীদ আর তার ইখলাসের বিনিময়ে পাওয়া সম্মানের খবর দিতে, মৃত্যুর পরেও জাতিকে উপদেশ দিতে, যেমন জীবদ্দশায় দিয়েছিল। নিজের উপর যারা জুলুম করেছে তাদের প্রতি কল্যাণকামনা, যে দেহটা তারা ধ্বংস করল তার চেয়েও বেশি দিন বেঁচে রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prophet Wiping Blood",
          "bn": "রক্ত মোছা এক নবী"
        },
        "p": [
          {
            "en": "This cast of heart is one the Prophet (peace be upon him) once described in a scene. 'Abdullah ibn Mas'ud (RA) narrated: It is as though I see the Prophet (peace be upon him) telling of one of the prophets whose people had beaten him until he bled, and he was wiping the blood from his face and saying, O Allah, forgive my people, for they have no knowledge. It is recorded in Sahih al-Bukhari, number 3477, and in Sahih Muslim; their inclusion of a report is these two imams' mark of its soundness.",
            "bn": "এই ধরনের অন্তর নবী ﷺ একবার একটি দৃশ্যে বর্ণনা করেছিলেন। আবদুল্লাহ ইবনে মাসঊদ (রাঃ) বর্ণনা করেন, আমি যেন দেখছি নবী ﷺ নবীদের একজনের কথা বলছেন, যাকে তার জাতি মেরে রক্তাক্ত করেছিল, আর তিনি মুখ থেকে রক্ত মুছতে মুছতে বলছিলেন, হে আল্লাহ, আমার জাতিকে ক্ষমা করুন, কারণ তারা জানে না। এটি সহীহ বুখারীতে আছে, হাদীস ৩৪৭৭, আর সহীহ মুসলিমেও আছে। কোনো বর্ণনা এই দুই ইমামের গ্রন্থে স্থান পাওয়াই তার সহীহ হওয়ার প্রমাণ।"
          },
          {
            "en": "Hear the two sentences together. The prophet of the hadith, bloodied by his people, prays Forgive my people, for they do not know, fa-innahum la ya'lamun. The believer of the sura, killed by his people, wishes Would that my people knew, ya layta qawmi ya'lamun. The same root, 'a-l-m, to know, runs through both. Each man makes his persecutors' ignorance the thing he grieves and their guidance the thing he wants. Neither asks for a reckoning; both ache over what their people do not yet understand.",
            "bn": "দুটি বাক্য একসঙ্গে শুনুন। হাদীসের নবী, জাতির হাতে রক্তাক্ত, দোয়া করেন, আমার জাতিকে ক্ষমা করুন, কারণ তারা জানে না, ফা-ইন্নাহুম লা ইয়ালামূন। সূরার মুমিন, জাতির হাতে নিহত, কামনা করে, হায়, আমার জাতির লোকেরা যদি জানত, ইয়া লাইতা কাওমী ইয়ালামূন। একই ধাতু, আইন-লাম-মীম, জানা, দুটোর ভেতর দিয়েই বয়ে যায়। দুজনেই নিজের জালিমদের অজ্ঞতাকেই দুঃখের বিষয় বানান, আর তাদের হেদায়েতকে চাওয়ার বিষয়। কেউই বিচার চায় না, দুজনেই কষ্ট পায় তাদের জাতি এখনো যা বোঝেনি তা নিয়ে।"
          },
          {
            "en": "This was the Prophet's (peace be upon him) own temperament, and the Qur'an records how far it reached in him. His concern for his people was so consuming that Allah addressed it directly: would you perhaps destroy yourself with grief that they will not believe (18:6). The believer at the city's edge, the earlier prophet wiping his face, and the Prophet (peace be upon him) grieving over his own people all stand in a single line, each of them longing for the guidance of the very people who hurt him.",
            "bn": "এ ছিল নবীর ﷺ নিজেরই স্বভাব, আর কুরআন ধরে রাখে তা তার ভেতরে কত দূর পৌঁছেছিল। নিজের জাতির জন্য তার দরদ এতটাই গ্রাস করে রেখেছিল যে আল্লাহ সরাসরি সে প্রসঙ্গে বলেন, তারা ঈমান আনছে না বলে তুমি কি নিজেকে শোকে শেষ করে ফেলবে (১৮:৬)। নগর প্রান্তের সেই মুমিন, মুখ মোছা সেই আগের নবী, আর নিজের জাতির জন্য শোকে কাতর নবী ﷺ, সবাই দাঁড়িয়ে আছেন এক কাতারে, প্রত্যেকেই আকুল সেই মানুষদের হেদায়েতের জন্য যারা তাকে কষ্ট দিয়েছে।"
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
            "bn": "তার জাতির কী হলো তা পরেই বলা হয়, আর সংক্ষেপেই বলা হয়, তাদের বিরুদ্ধে আসমান থেকে কোনো সৈন্যবাহিনী নামানো হয়নি, কারণ ব্যাপারটা তার চেয়ে সহজ ছিল। ছিল মাত্র একটা প্রচণ্ড শব্দ, আর সঙ্গে সঙ্গে তারা নিস্তব্ধ হয়ে গেল (৩৬:২৮ ও ৩৬:২৯)। ইবনে কাসীর বলেন, আল্লাহর সৈন্য পাঠানোর দরকার ছিল না, একটি সাইহাই তাদের শেষ করে দিল। এই আয়াতগুলো সেই একটি জাতির পরিণতির খবর দেয়, এর বেশি কিছু নয়। সোজা কথায় বলি, দুই ভাষাতেই, আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে, আর তা কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "Notice that the believer himself sought none of this. His wish was the opposite: that they be forgiven and guided, not that they be destroyed. The man who was wronged does not reach for vengeance even when vengeance would be just; he reaches instead for their good. If his story leaves a reader eager to see enemies struck down, it has been read against its own grain, for its hero spent his last breath longing that his enemies be saved.",
            "bn": "খেয়াল করুন, মুমিন নিজে এর কিছুই চায়নি। তার চাওয়া ছিল ঠিক উল্টো, তারা ক্ষমা পাক আর হেদায়েত পাক, ধ্বংস নয়। যার উপর অন্যায় হয়েছে সে বদলার দিকে হাত বাড়ায় না, বদলা ন্যায্য হলেও নয়, বরং সে হাত বাড়ায় তাদের কল্যাণের দিকে। তার কাহিনি পড়ে কোনো পাঠক যদি শত্রুদের ধ্বংস দেখতে উদগ্রীব হয়ে ওঠে, তবে কাহিনিটা তার নিজের ধারার বিপরীতেই পড়া হলো, কারণ এর নায়ক তার শেষ নিঃশ্বাসটুকু খরচ করেছে এই আকুতিতে যে তার শত্রুরাও যেন বাঁচে।"
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
            "bn": "শিক্ষাটা লুকিয়ে আছে হায়, আমার জাতির লোকেরা যদি জানত আর যারা আমাদের উপর অন্যায় করেছে তাদের নিয়ে আমরা বেশির ভাগ সময় যেভাবে কথা বলি, এই দুইয়ের ফাঁকে। আঘাত পেলে আমাদের স্বভাব চায় তারা উচিত শিক্ষা পাক। তার স্বভাব, নিহত হয়েও, চাইল তারা সেটাই পাক যা সে পেয়েছে, ক্ষমা আর সম্মান। এটাই হিরস, এক তীব্র অস্থির আকুলতা, যা বাইরের দিকে ফেরানো, অন্য মানুষের হেদায়েতের দিকে, নিজের আরাম বা নিজের জয়ের দিকে নয়। নিজেদের মুক্তির জন্য আমরা যতটা লোভী, সে ততটাই লোভী ছিল তাদের মুক্তির জন্য।"
          },
          {
            "en": "It costs something to carry good-will past an injury, and far more to carry it past a grave. But this is the measure the verse sets before us. The people you have the most reason to resent are people the mercy of your Lord is wide enough to reach, and your part is to long for them to reach it. Wish them guidance and not ruin; and if you are ever honoured, let your first thought be for those still standing outside the open door.",
            "bn": "আঘাত পার করে কল্যাণকামনা বয়ে নিতে কিছু মূল্য দিতে হয়, আর কবর পার করে তা বয়ে নিতে মূল্য দিতে হয় আরও অনেক বেশি। কিন্তু আয়াতটি আমাদের সামনে এই মাপই রাখে। যাদের উপর রাগ করার সবচেয়ে বেশি কারণ আপনার আছে, তারাও এমন মানুষ যাদের নাগাল পেতে আপনার রবের রহমত যথেষ্ট প্রশস্ত, আর আপনার কাজ হলো তারা যেন সেই রহমতের নাগাল পায় তা কামনা করা। তাদের জন্য হেদায়েত চান, ধ্বংস নয়। আর কখনো যদি আপনাকে সম্মান দেওয়া হয়, খোলা দুয়ারের বাইরে যারা এখনো দাঁড়িয়ে আছে, আপনার প্রথম ভাবনাটা তাদের নিয়েই হোক।"
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
            "bn": "ঠিক আগের আয়াত, ৩৬:৩৩, কথাটা সেরে রেখেছে: মরা যমীন এক নিদর্শন, আল্লাহ তাকে জীবিত করেন আর তা থেকে শস্য বের করেন, সেই শস্য থেকেই মানুষ খায়। এ হলো বেঁচে থাকা, যে রুটি একটা জাতিকে টিকিয়ে রাখে। এরপর ৩৬:৩৪ সেখানে থামে না। তা যোগ করে খেজুর আর আঙুরের বাগান, আর মাটি ফুঁড়ে ওঠা ঝর্ণা। সুরটা বদলায় রুটি থেকে বাগানে, শরীরের প্রয়োজন থেকে সেই দানে যা রব প্রয়োজনের বাইরেও অকাতরে দেন।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the whole stretch of Surah Ya Sin this way: its signs are at once clear proofs of Allah's perfect power and mirrors of the particular favours He pours on His creatures. A Lord who meant only to keep them breathing could have closed the account at the grain of the previous verse. Instead He plants whole gardens. So this verse asks us to see ordinary abundance not as the world's default setting but as a deliberate kindness, and the rest of this reading follows that gift down to its source.",
            "bn": "মাআরিফুল কুরআন গোটা সুরা ইয়াসিনকে এভাবে পড়ে: এর নিদর্শনগুলো একদিকে আল্লাহর নিখুঁত ক্ষমতার স্পষ্ট প্রমাণ, আবার অন্যদিকে তাঁর বান্দাদের উপর ঢেলে দেওয়া বিশেষ অনুগ্রহের আয়না। যে রব কেবল তাদের নিঃশ্বাস টিকিয়ে রাখতে চাইতেন, তিনি আগের আয়াতের শস্যেই হিসাব বন্ধ করে দিতে পারতেন। তার বদলে তিনি গোটা বাগান বসান। তাই এ আয়াত আমাদের বলে, রোজকার প্রাচুর্যকে দুনিয়ার স্বাভাবিক নিয়ম বলে না দেখে এক সচেতন দয়া বলে দেখতে। এই পাঠের বাকিটা সেই দানকে তার উৎস পর্যন্ত খুঁজে যায়।"
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
            "bn": "আয়াত চাইলে শুধু ফলের গাছ বলে বিষয়টা সাধারণ রেখে দিতে পারত। তা করেনি। এটি বিশেষভাবে দুটির নাম নেয়: নাখীল অর্থাৎ খেজুরগাছ, আর আ'নাব অর্থাৎ আঙুরের লতা। কুরতুবী এই বেছে নেওয়াটা লক্ষ করেন আর এর কারণও দেন। তিনি বলেন, এই দুটিকে আলাদা করে বলা হয়েছে কারণ এরা আ'লাত সামার, অর্থাৎ ফলের মধ্যে সবচেয়ে উঁচু, যাকে সেই অঞ্চলের শ্রোতা বাকি সবের উপরে দাম দিত। এখানে কুরআন কোনো বিমূর্ত কথায় যায় না, বরং শ্রোতার নিজের উপত্যকার গাছগুলোকেই দেখিয়ে দেয়।"
          },
          {
            "en": "As-Sa'di reads it the same way and sharpens it. He glosses the gardens as holding many trees, but especially the palm and the vine, which he calls ashraf al-ashjar, the noblest of the trees. The point of naming is that a named gift is a personal one. A Lord who lists the palm and the vine by name is not tipping a sack of generic provision over a crowd; He is handing this household the dates it dries and this vineyard the grapes it presses.",
            "bn": "সা'দী একইভাবে পড়েন আর কথাটা আরও ধারালো করেন। তিনি বাগানের ব্যাখ্যায় বলেন, এতে অনেক গাছ আছে, তবে বিশেষভাবে খেজুর আর আঙুর, যাদের তিনি বলেন আশরাফুল আশজার, অর্থাৎ গাছের মধ্যে সবচেয়ে সম্মানিত। নাম ধরে বলার মানে হলো, যে দান নাম পায় তা ব্যক্তিগত দান। যে রব খেজুর আর আঙুরের নাম ধরে বলেন, তিনি ভিড়ের উপর কোনো সাধারণ রিজিকের বস্তা উপুড় করে দিচ্ছেন না। তিনি এই ঘরকে তার শুকানো খেজুর আর এই বাগানকে তার নিংড়ানো আঙুর তুলে দিচ্ছেন।"
          },
          {
            "en": "This is where gratitude turns tangible. It is easy to thank God in general and feel nothing, because a general blessing is too large to picture. The verse refuses that fog. It makes you hold a date, bite a grape, taste the particular sweetness, and only then ask where it came from. Thanks that begins with a specific fruit in the hand is harder to fake and harder to forget than thanks offered to the whole sky at once.",
            "bn": "এখানেই শুকরিয়া হাতে ধরা পড়ে। আল্লাহকে মোটের উপর ধন্যবাদ জানিয়ে কিছুই অনুভব না করা সহজ, কারণ সাধারণ নিয়ামত এত বড় যে তার ছবি মনে আঁকা যায় না। আয়াত সেই ধোঁয়াশা মানে না। এটি আপনাকে হাতে একটা খেজুর ধরায়, একটা আঙুরে কামড় বসায়, সেই নির্দিষ্ট মিষ্টির স্বাদ নেওয়ায়, আর তারপরই প্রশ্ন তোলে এটা এলো কোথা থেকে। হাতের নির্দিষ্ট একটা ফল দিয়ে শুরু হওয়া শুকরিয়া গোটা আকাশের উদ্দেশে একসঙ্গে দেওয়া শুকরিয়ার চেয়ে বানানো কঠিন, ভোলাও কঠিন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Is Gardens",
          "bn": "শব্দটা বাগান, নিছক খেত নয়"
        },
        "p": [
          {
            "en": "The word the verse uses for the planting is jannat. At-Tabari, al-Qurtubi and al-Baghawi all gloss it with the same ordinary Arabic word, basatin: orchards, tended gardens. This matters, because a garden is not a wilderness. A wilderness happens; a garden is laid out. Rows, walls, shade, water led where it is wanted. The image is not of a plain that chanced to turn green but of ground arranged with intent, the way a careful owner arranges the land he loves.",
            "bn": "রোপণের জন্য আয়াত যে শব্দটি ব্যবহার করে তা হলো জান্নাত। তাবারী, কুরতুবী আর বাগাভী তিনজনই একই সাধারণ আরবি শব্দ দিয়ে এর ব্যাখ্যা দেন, বাসাতীন, অর্থাৎ ফলের বাগান, যত্নে গড়া উদ্যান। এটা গুরুত্বপূর্ণ, কারণ বাগান কোনো জঙ্গল নয়। জঙ্গল আপনাআপনি হয়, বাগান সাজিয়ে বানানো হয়। সারি, দেয়াল, ছায়া, যেখানে দরকার সেখানেই পানির পথ। ছবিটা এমন কোনো মাঠের নয় যা হঠাৎ সবুজ হয়ে গেছে, বরং এমন জমির যা উদ্দেশ্য নিয়ে গোছানো, যেভাবে যত্নশীল মালিক তার ভালোবাসার জমি গুছিয়ে রাখে।"
          },
          {
            "en": "There is a quiet weight in the word itself. Jannat is the same word the Qur'an uses for the Garden promised in the life to come. The orchard on this dead earth is not that Garden, and the commentators do not conflate them; they keep to basatin, the orchards of this world. But a reader who knows both uses cannot miss the echo. The green that springs from dead ground is a small, perishable sample of a greater and lasting one, set here to be eaten now and remembered later.",
            "bn": "শব্দটার ভেতরেই একটা চুপচাপ ভার আছে। জান্নাত সেই একই শব্দ, যা কুরআন পরকালে প্রতিশ্রুত বাগানের জন্য ব্যবহার করে। এই মরা যমীনের বাগান সেই জান্নাত নয়, আর তাফসীরকারেরা দুটোকে মিলিয়ে ফেলেন না, তাঁরা বাসাতীনেই থাকেন, অর্থাৎ দুনিয়ার বাগানে। তবু যে পাঠক দুটি ব্যবহারই জানে, সে প্রতিধ্বনিটা এড়াতে পারে না। মরা মাটি থেকে ফুটে ওঠা সবুজ এক বড় আর চিরস্থায়ী সবুজের ছোট, নশ্বর নমুনা। এটা এখানে রাখা হয়েছে এখন খাওয়ার জন্য, পরে মনে রাখার জন্য।"
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
            "bn": "এরপর আয়াত ফেরে পানির দিকে: ওয়া ফাজ্জারনা ফীহা মিনাল উয়ূন, আর আমি তার ভেতরে ঝর্ণা ফাটিয়ে বের করি। তাবারী ক্রিয়াটির সোজা ব্যাখ্যা দেন, আম্বা'না মিন উয়ূনিল মা', অর্থাৎ আমি পানির ঝর্ণা উৎসারিত করি। মুয়াসসার এক কথায় উদ্দেশ্যটাও জুড়ে দেন: এমন ঝর্ণা যা তাকে পান করায়, সেচ দেয়। বাগান তো লাগানো হয়েছে, আর এবার আয়াত দেখায় সেই একটি জিনিস যা বাগান নিজের জন্য করতে পারে না। গাছ নিজের পানি নিজে ডেকে আনতে পারে না। পানিকেই তার কাছে উঠে আসতে হয়।"
          },
          {
            "en": "Ibn Kathir fills in the picture. He reads the springs as rivers set coursing, anharan sarihatan, to the very places where they are needed. Al-Qurtubi notes the same nearness from the other side: the springs, he says, are made to burst forth inside the orchards themselves, fi al-basatin. So the water is not stranded at the edge of the land for someone to haul inward. It rises where the roots already are, delivered to the exact spot of the thirst.",
            "bn": "ইবন কাসীর ছবিটা পূর্ণ করেন। তিনি ঝর্ণাকে পড়েন নদী হিসেবে যা চলতে শুরু করেছে, আনহারান সারিহাতান, ঠিক সেসব জায়গায় যেখানে তাদের দরকার। কুরতুবী অন্যদিক থেকে একই নৈকট্যের কথা বলেন: তাঁর মতে ঝর্ণাগুলো ফাটিয়ে বের করা হয় বাগানের ভেতরেই, ফিল বাসাতীন। তাই পানি জমির কিনারায় আটকে থাকে না যে কাউকে তা ভেতরে টেনে আনতে হবে। যেখানে শিকড় আগে থেকেই আছে সেখানেই তা ওঠে, তৃষ্ণার ঠিক জায়গায় পৌঁছে যায়।"
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
            "bn": "পরের আয়াত, ৩৬:৩৫, ভাবনাটা পূর্ণ করে আর উদ্দেশ্যটার নাম দেয়: লিইয়া'কুলূ মিন সামারিহি ওয়া মা আমিলাতহু আয়দীহিম, অর্থাৎ যাতে তারা তার ফল খেতে পারে, অথচ তাদের হাত তা বানায়নি। বাগানের বর্ণনা হলো, পানির পথ দেখানো হলো, আর এবার আসে সেই লাইন যা শেখায় এই সবটা কীভাবে ধরতে হয়। খাও, নিশ্চয়ই, ফল তোমারই জন্য। কিন্তু হাতের জিনিসটা তোমার বানানো নয়। ইবন কাসীর সোজা বলেন: এর সবটাই আসে আল্লাহর রহমতে, তাদের নিজেদের চেষ্টা, খাটুনি আর শক্তিতে নয়।"
          },
          {
            "en": "He does not leave the reading floating; he grounds it. This, Ibn Kathir reports, was the understanding of Ibn 'Abbas and Qatada, the early authorities who read ma 'amilat-hu aydihim as a flat denial that human hands produced the fruit. The force of it is not that work is worthless. A man really does plant the pit, prune the branch, guard the vine. The force is that none of his labour reaches the one thing that makes a garden a garden, which is the life inside it.",
            "bn": "তিনি পাঠটাকে ভাসিয়ে রাখেন না, ভিত্তি দেন। ইবন কাসীর জানান, এটি ছিল ইবন আব্বাস আর কাতাদার বোঝা, সেই আদি মনীষীদের, যাঁরা মা আমিলাতহু আয়দীহিমকে পড়েছেন মানুষের হাতে ফল উৎপন্ন হওয়ার সাফ অস্বীকার হিসেবে। এর জোরটা এই নয় যে পরিশ্রম মূল্যহীন। মানুষ তো সত্যিই বীজ পোঁতে, ডাল ছাঁটে, লতা পাহারা দেয়। জোরটা এই যে তার খাটুনির কোনোটাই সেই একটি জিনিসের নাগাল পায় না যা বাগানকে বাগান বানায়, আর তা হলো এর ভেতরের প্রাণ।"
          },
          {
            "en": "Picture the division of labour honestly. You can set a seed in soil, but you cannot command it to split and climb. You can water a trunk, but you cannot sweeten a grape or pack a date with flesh. Every step a human can take is a step of arranging what already lives; the living itself is handed to him. The verse is drawing a clean line through the work of a farmer, with his portion on one side and God's portion, the larger one, on the other.",
            "bn": "কাজের ভাগটা সৎভাবে কল্পনা করুন। আপনি মাটিতে বীজ বসাতে পারেন, কিন্তু তাকে ফেটে উপরে উঠতে হুকুম দিতে পারেন না। আপনি গুঁড়িতে পানি দিতে পারেন, কিন্তু আঙুরকে মিষ্টি করতে বা খেজুরকে শাঁসে ভরতে পারেন না। মানুষ যত পা ফেলতে পারে তার প্রতিটিই আগে থেকে জীবিত কিছুকে সাজানোর পা, জীবনটা তার হাতে তুলে দেওয়া হয়। আয়াত চাষির কাজের ভেতর দিয়ে একটা পরিষ্কার দাগ টানে, একপাশে তার ভাগ আর অন্যপাশে আল্লাহর ভাগ, যা অনেক বড়।"
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
            "bn": "এখানে তাফসীরকারদের মধ্যে একটা সৎ মতভেদ আছে, আর তা ঘোরে একটিমাত্র আরবি শব্দকে ঘিরে: ওয়া মা আমিলাতহু আয়দীহিম-এর মা শব্দটি। একে অস্বীকারবাচক ধরলে অর্থ দাঁড়ায় তাদের হাত তা বানায়নি, যে পাঠ ইবন কাসীর ইবন আব্বাস আর কাতাদা থেকে বহন করেন। কিন্তু ইবন কাসীর এটাও জানান যে ইবন জারীর তাবারী মা-কে ধরেছেন সম্বন্ধবাচক শব্দ হিসেবে, অর্থাৎ যা, ফলে ভাবটা হয়: তারা খায় ফল থেকে আর তাদের নিজেদের হাত যা খেটেছে তা থেকে, অর্থাৎ বীজ পুঁতে আর গাছের যত্ন নিয়ে।"
          },
          {
            "en": "Ibn Kathir notes that Ibn Jarir favoured this second reading and that it fits the recitation of Ibn Mas'ud. The two readings are kept as they stand, without this article settling between them. And they need no settling to leave gratitude intact. Whether the verse denies the human hand any share or grants it the small share of planting and tending, the sweetness, the growth and the life stay God's work in both. The call that follows, will you not give thanks, lands the same from either side.",
            "bn": "ইবন কাসীর উল্লেখ করেন যে ইবন জারীর এই দ্বিতীয় পাঠটাকেই বেশি পছন্দ করতেন আর তা ইবন মাসউদের কিরাতের সঙ্গে মেলে। দুটি পাঠ যেমন আছে তেমনই রাখা হলো, এ লেখা তাদের মাঝে কোনো মীমাংসা করছে না। আর শুকরিয়া অটুট রাখতে কোনো মীমাংসার দরকারও নেই। আয়াত মানুষের হাতকে কোনো ভাগ না দিক, কিংবা পোঁতা আর যত্নের সামান্য ভাগটুকু দিক, ফলের মিষ্টি, বেড়ে ওঠা আর প্রাণ দুই পাঠেই আল্লাহর কাজ থেকে যায়। এরপরের ডাক, তোমরা কি শুকরিয়া আদায় করবে না, দুদিক থেকেই একইভাবে এসে পড়ে।"
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
            "bn": "দান পুরো মেলে ধরার পর, বাগান, নাম ধরে বলা ফল, ঝর্ণা, যে প্রাণ কোনো হাত বানায়নি, আয়াতাংশ শেষ হয় হুকুম দিয়ে নয়, প্রশ্ন দিয়ে: আফালা ইয়াশকুরূন, তাহলে কি তারা শুকরিয়া আদায় করবে না। প্রশ্ন হুকুমের চেয়ে ধারালো। হুকুম গাঁইগুঁই করে মানা যায়, প্রশ্নের জবাব দিতেই হয়। আর ফলটা কার কাজ তা দেখে ফেলার পর একমাত্র সৎ জবাব হলো হ্যাঁ। আয়াত ফসলের দাম চাইছে না। এটি জানতে চাইছে, যা স্পষ্ট তা মেনে নেওয়া হবে কি না।"
          },
          {
            "en": "The Prophet (ﷺ) brought that acknowledgement down to the smallest scale it can take. Muslim records, from Anas ibn Malik, that Allah's Messenger (ﷺ) said Allah is pleased with His servant who eats a morsel of food and praises Him for it, or drinks a draught and praises Him for it (Sahih Muslim 2734). It carries the collector's highest grade, being set down in his Sahih. The verse points at whole orchards; the hadith shows that the thanks they call for is paid a mouthful at a time.",
            "bn": "নবী ﷺ সেই স্বীকৃতিকে নামিয়ে আনেন সবচেয়ে ছোট মাপে, যতটা ছোট হতে পারে। মুসলিম আনাস ইবন মালিক থেকে বর্ণনা করেন যে আল্লাহর রাসূল ﷺ বলেছেন, আল্লাহ তাঁর সেই বান্দার উপর সন্তুষ্ট হন যে এক লোকমা খাবার খেয়ে তাঁর প্রশংসা করে, কিংবা এক ঢোক পানি পান করে তাঁর প্রশংসা করে (সহীহ মুসলিম ২৭৩৪)। এটি সংকলকের সর্বোচ্চ মান বহন করে, কারণ তা তাঁর সহীহ গ্রন্থে রাখা হয়েছে। আয়াত দেখায় গোটা বাগান, আর হাদীস দেখায় যে বাগানের দাবি করা শুকরিয়া একেক লোকমায় শোধ হয়।"
          },
          {
            "en": "That is a mercy in the size of it. A debt of gratitude for whole gardens would crush anyone who tried to pay it in one sum; no amount of thanks could ever match the gift. So the thanks is broken into bites. A word over the date, a word over the water, al-hamdu lillah at the lip of the cup, and the account is being kept. Gratitude at this scale is not a grand feeling summoned once a year but a habit worn into the ordinary motions of eating and drinking.",
            "bn": "এর আকারেই একটা রহমত লুকিয়ে। গোটা বাগানের জন্য শুকরিয়ার দেনা একবারে শোধ করতে গেলে যে কাউকে তা পিষে ফেলবে, কোনো পরিমাণ শুকরিয়াই সেই দানের সমান হতে পারে না। তাই শুকরিয়াকে ভাগ করে দেওয়া হয়েছে লোকমায় লোকমায়। খেজুরের বেলায় একটা কথা, পানির বেলায় একটা কথা, পেয়ালার কিনারায় আলহামদুলিল্লাহ, আর হিসাবটা জমা হতে থাকে। এই মাপের শুকরিয়া বছরে একবার ডেকে আনা কোনো বিরাট অনুভূতি নয়, বরং খাওয়া আর পানের রোজকার নড়াচড়ায় গেঁথে যাওয়া এক অভ্যাস।"
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
            "bn": "এই বাগান আরও একটা কাজ করছে, আর আয়াতাংশের প্রথম শব্দটাই তার নাম দেয়। মরা যমীন জীবিত হওয়ার আগেই ৩৬:৩৩ শুরু হয় এভাবে, তাদের জন্য এক নিদর্শন। ইবন কাসীর সেই নিদর্শনকে পড়েন স্রষ্টার প্রমাণ আর মৃতকে জীবিত করার তাঁর নিখুঁত ক্ষমতার প্রমাণ হিসেবে: যে জমি ছিল শুকনো আর প্রাণহীন, তারপর তা জেগে উঠল, ফুলে উঠল আর নানা সুন্দর ফসলে ভরে উঠল। আপনি যে ফল খান তা রিজিক, আর যে মরা মাটি তা ফলিয়েছে তা একই সঙ্গে সেই দিনের দলিল যেদিন আপনাকে আবার তোলা হবে।"
          },
          {
            "en": "This is why Ma'arif al-Qur'an said the one sign works in two directions at once, as a proof of power and as a favour received. The same hand that greens a dead field will raise a buried body; the gratitude owed for the fruit and the hope held for the resurrection rest on one and the same power. So the verse leaves a person with more than a full plate. It leaves him with a reason to thank, in every bite, the Lord who feeds the living now and will revive the dead later.",
            "bn": "এ কারণেই মাআরিফুল কুরআন বলেছিল, একই নিদর্শন একসঙ্গে দুই দিকে কাজ করে, ক্ষমতার প্রমাণ হিসেবে আর পাওয়া অনুগ্রহ হিসেবে। যে হাত মরা মাঠকে সবুজ করে সেই হাতই কবরস্থ দেহকে তুলবে। ফলের জন্য প্রাপ্য শুকরিয়া আর পুনরুত্থানের জন্য ধরে রাখা আশা একই শক্তির উপর দাঁড়িয়ে। তাই আয়াত মানুষকে কেবল ভরা পাতের চেয়ে বেশি কিছু দিয়ে যায়। এটি তাকে দেয় প্রতিটি লোকমায় শুকরিয়ার কারণ সেই রবের প্রতি, যিনি এখন জীবিতকে খাওয়ান আর পরে মৃতকে জীবিত করবেন।"
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
            "bn": "এর আগের আয়াতগুলো একেবারে মাটি থেকে গড়ে তোলা একটি যুক্তি। 36:33 আয়াত মৃত যমীনকে নিদর্শন হিসেবে পেশ করে: আমি তাকে জীবন দিয়েছি এবং তা থেকে শস্য বের করেছি, আর তা থেকেই তারা খায়। 36:34 আয়াত যোগ করে খেজুর ও আঙুরের বাগান, আর তার মধ্যে উৎসারিত করা ঝর্ণা। 36:35 আয়াত উদ্দেশ্যটি বলে — যাতে তারা তার ফল খেতে পারে, আর তা তাদের হাত বানায়নি — এবং তারপর প্রশ্ন করে: তবু কি তারা কৃতজ্ঞতা প্রকাশ করবে না?"
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
            "bn": "এই আয়াত সেই প্রশ্নের জবাব দেয় পাল্টা যুক্তি দিয়ে নয়, একটি শব্দ দিয়ে: সুবহানাল্লাযী খালাকাল আযওয়াজা কুল্লাহা। 'আযওয়াজ' হলো 'যাওজ'-এর বহুবচন, আর আরবিতে 'যাওজ' মানে জোড়ার একটি, অর্থাৎ প্রতিরূপ — দুইয়ের প্রত্যেকেই অপরটির যাওজ; ফলে শব্দটি সংখ্যা নয়, একটি সম্পর্ক বহন করে। এরপর 'কুল্লাহা' অর্থাৎ 'সবগুলোই' ব্যতিক্রমের দরজা বন্ধ করে দেয়। যাঁর পবিত্রতা ঘোষণা করা হচ্ছে, তা করা হচ্ছে একটি নকশার জন্য, জিনিসের কোনো তালিকার জন্য নয়।"
          },
          {
            "en": "The Quran states the same rule elsewhere in its widest form. 51:49 says that of every thing We created two mates, and the clause of purpose attached to it is about the hearer taking something in, not about being informed. 13:3 applies it to one visible class: from all the fruits He made in the earth two mates. The pairing is presented each time as something to be noticed and used, and each time the noticing is expected to end somewhere other than in a catalogue.",
            "bn": "কুরআন একই নীতিকে অন্যত্র তার সবচেয়ে ব্যাপক রূপে বলে। 51:49 আয়াত বলে, প্রতিটি বস্তুকে আমি জোড়ায় জোড়ায় সৃষ্টি করেছি — আর তার সাথে জুড়ে দেওয়া উদ্দেশ্য-বাক্যটি শ্রোতার কিছু গ্রহণ করা নিয়ে, তথ্য পাওয়া নিয়ে নয়। 13:3 আয়াত তা প্রয়োগ করে দৃশ্যমান একটি শ্রেণিতে: সব ফলের মধ্যেই তিনি যমীনে জোড়া সৃষ্টি করেছেন। প্রতিবারই জোড়া বিষয়টিকে পেশ করা হয় লক্ষ করার ও কাজে লাগানোর মতো কিছু হিসেবে, আর প্রতিবারই আশা করা হয় যে সেই লক্ষ করাটি তালিকা ছাড়া অন্য কোথাও গিয়ে শেষ হবে।"
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
            "bn": "এরপর আয়াতটি তিনটি উৎসের তালিকা দেয়, আর প্রথম দুটি শ্রোতার হাতে তুলে দেওয়া হয় আগে থেকেই খুলে রেখে। 'মিম্মা তুনবিতুল আরদ' — যমীন যা উৎপন্ন করে — ঠিক সেই উপকরণই যা 36:33 ও 36:34 আয়াতে ছিল: শস্য, খেজুরগাছ, আঙুরলতা। শ্রোতাকে অন্য কোথাকার কোনো দাবি মেনে নিতে হয় না; তিনটি আয়াত ধরে সে প্রমাণের ভেতরেই দাঁড়িয়ে আছে, আর আয়াতটি কেবল সেই দাঁড়িয়ে থাকা জিনিসটির একটি নাম দেয়।"
          },
          {
            "en": "Wa min anfusihim, and from themselves, turns the argument on the audience. Ibn Kathir glosses it as their being made male and female, and the Quran says as much directly: 53:45 speaks of the two mates, the male and the female, and 75:39 says He made of him the two mates, male and female. So the second source is not observed at a distance. The one being invited to glorify is himself half of an instance.",
            "bn": "'ওয়া মিন আনফুসিহিম' — আর তাদের নিজেদের মধ্য থেকে — যুক্তিটিকে শ্রোতার নিজের দিকেই ফিরিয়ে দেয়। ইবনে কাসীর এর ব্যাখ্যা করেন তাদের পুরুষ ও নারী হিসেবে সৃষ্টি হওয়া দিয়ে, আর কুরআন কথাটি সরাসরিও বলে: 53:45 আয়াত বলে তিনিই জোড়া সৃষ্টি করেন — পুরুষ ও নারী, আর 75:39 আয়াত বলে তিনি তা থেকে জুড়ি বানিয়েছেন, পুরুষ ও নারী। সুতরাং দ্বিতীয় উৎসটি দূর থেকে দেখা কিছু নয়। যাকে পবিত্রতা ঘোষণার আহ্বান জানানো হচ্ছে, সে নিজেই একটি দৃষ্টান্তের অর্ধেক।"
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
            "bn": "তৃতীয় বিষয়টি হলো 'ওয়া মিম্মা লা ইয়া'লামুন' — আর যা তারা জানে না। এটিকে বসানো হয়েছে প্রথম দুটির মতো একই ব্যাকরণগত জায়গায়, যেন এটি সৃষ্টির তৃতীয় একটি এলাকা; আর ইবনে কাসীর এর ব্যাখ্যা করেন এমন সব সৃষ্টি হিসেবে যাদের সম্পর্কে তারা কিছুই জানে না। কিন্তু শব্দচয়নটি মনোযোগ দিয়ে পড়ুন। অজ্ঞতাটি একটি ক্রিয়াপদ দিয়ে শ্রোতাদের উপর আরোপ করা হয়েছে — 'লা ইয়া'লামুন', তারা জানে না — বিশেষণ দিয়ে বস্তুগুলোর উপর নয়।"
          },
          {
            "en": "That is a real difference. The verse does not say there are pairs which are unknowable; it says there are pairs you do not know about. So the third item is not a gap left in the sentence for someone to fill in later and claim a point. It is a statement about the knowers, written into a declaration of glory by the One who does not share the limitation, and it stands whatever the state of anyone's learning.",
            "bn": "এটি সত্যিকারের একটি পার্থক্য। আয়াত বলে না যে এমন জোড়া আছে যা জানা অসম্ভব; বলে যে এমন জোড়া আছে যেগুলো সম্পর্কে তোমরা জানো না। সুতরাং তৃতীয় বিষয়টি বাক্যের ভেতরে ফেলে রাখা এমন কোনো ফাঁক নয় যা পরে কেউ ভরাট করে কৃতিত্ব দাবি করবে। এটি জ্ঞানীদের সম্পর্কে একটি বিবৃতি, যা মহিমার ঘোষণার ভেতরে লিখে দিয়েছেন তিনি, যাঁর মধ্যে সেই সীমাবদ্ধতা নেই — আর কারও জ্ঞানের অবস্থা যেমনই হোক, কথাটি দাঁড়িয়ে থাকে।"
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
            "bn": "কেউ যা-ই জানতে পারুক, তা তৃতীয় বিষয়টি থেকে সরে গিয়ে প্রথম দুটির একটিতে ঢুকে পড়ে; তবু এই স্থানান্তরে তৃতীয়টি ছোট হয় না। এটি কখনোই দৈর্ঘ্যওয়ালা কোনো তালিকা ছিল না, আর সৃষ্টির যত বেশি জিনিসকে মানুষ নাম দিতে শেখে, নাম না-পাওয়া অবশিষ্টটুকু তার সামনে তত প্রশস্ত হয়ে খোলে। 17:44 আয়াত ভিন্ন বিষয় নিয়ে একই কাজ করে: এমন কোনো বস্তু নেই যা প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করে না — কিন্তু তোমরা তাদের সেই তাসবীহ বোঝো না।"
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
            "bn": "'সুবহানা' মানে পবিত্রতা ঘোষণা: এই ঘোষণা যে তিনি সব ত্রুটির অনেক ঊর্ধ্বে। আয়াতটি একে বসায় সবার আগে, তিনটি উৎসের কোনোটির আগেই — ফলে সিদ্ধান্তটি বলা হয় প্রমাণের আগে। এই ক্রমটির কারণেই তৃতীয় উৎসটিকে কোনো অস্বস্তি ছাড়াই স্বীকার করে নেওয়া যায়। সৃষ্টির প্রতি যার প্রতিক্রিয়া একটি তালিকা, তার সেই তালিকা সম্পূর্ণ হওয়া দরকার; যার প্রতিক্রিয়া তাসবীহ, তার তা দরকার নেই — সে মুখ ফুটে বলতে পারে যে তালিকার একটি অংশ তার কাছে বন্ধ।"
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
