/**
 * Tadabbur long-form articles — surah 2.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "2:2": {
    "sections": [
      {
        "h": {
          "en": "That, Meaning This",
          "bn": "‘ওই’ বলে ‘এই’ বোঝানো"
        },
        "p": [
          {
            "en": "Before Surat al-Baqara asks anything of its listener, it names what he is holding: dhalika al-kitab, that is the Book. Arabic points to near things with hadha and to far things with dhalika, and al-Baghawi states the rule: hadha for nearness, dhalika for distance. Yet the far word is used here for a Book being recited in the listener's own hearing. Every commentator read here stops at that puzzle, and they answer it differently.",
            "bn": "সূরা বাকারা শ্রোতার কাছে কিছু চাওয়ার আগে জানিয়ে দেয় তার হাতে কী আছে: যালিকাল কিতাব, ওই হলো কিতাব। আরবিতে কাছের জিনিস দেখাতে বলা হয় হাযা, আর দূরের জিনিস দেখাতে যালিকা। বাগাভী নিয়মটা বলে দেন: হাযা কাছের জন্য, যালিকা দূরের জন্য। অথচ যে কিতাব শ্রোতার কানের কাছেই তিলাওয়াত হচ্ছে, তার জন্য এখানে এসেছে দূরের শব্দটি। এখানে যত তাফসীর পড়া হয়েছে, প্রত্যেকটিই এই ধাঁধায় এসে থেমেছে, আর উত্তর দিয়েছে ভিন্ন ভিন্নভাবে।"
          },
          {
            "en": "The first answer is that the far word here carries the near meaning. At-Tabari reports it from the general body of commentators, with chains to Mujahid, Ikrima, as-Suddi and Ibn Abbas: dhalika al-kitab means this Book. Ibn Kathir adds Sa'id ibn Jubayr, Muqatil ibn Hayyan, Zayd ibn Aslam and Ibn Jurayj, and explains that the Arabs lend these two pointing words to each other, putting either in the other's place, a usage well known in their speech. Al-Qurtubi notes that al-Bukhari records Ma'mar saying the same: this Quran.",
            "bn": "প্রথম উত্তর হলো, দূরের শব্দটি এখানে কাছের অর্থেই এসেছে। তাবারী এটি বর্ণনা করেন অধিকাংশ মুফাসসিরের কথা হিসেবে, আর সনদ দেন মুজাহিদ, ইকরিমা, সুদ্দী ও ইবন আব্বাস পর্যন্ত: যালিকাল কিতাব মানে এই কিতাব। ইবন কাসীর তালিকায় যোগ করেন সাঈদ ইবন জুবাইর, মুকাতিল ইবন হাইয়ান, যায়দ ইবন আসলাম ও ইবন জুরাইজকে। তিনি বুঝিয়ে বলেন, আরবরা এই দুই ইশারা-শব্দ একে অন্যের জায়গায় বসায়, আর তাদের কথায় এ চল সুপরিচিত। কুরতুবী জানান, বুখারী মা'মারের এই উক্তি এনেছেন: যালিকাল কিতাব মানে এই কুরআন।"
          },
          {
            "en": "At-Tabari gives a reason as well as a gloss. Whatever has only just been told is, to the listener, both finished and still present. A man hears another's account and answers, that, by God, is as you said, or, this, by God, is as you said, and both are right. Alif lam mim has just been spoken, and dhalika points back to what those letters conveyed, finished yet still near. He sets beside it 38:48 and 38:49, where a list of prophets, once closed, is called hadha dhikr, this is a reminder.",
            "bn": "তাবারী শুধু অর্থ বলেই থামেন না, কারণও দেখান। যে কথা এইমাত্র বলা শেষ হলো, শ্রোতার কাছে তা একই সঙ্গে শেষ হয়ে যাওয়া আবার সামনেও উপস্থিত। কেউ কারও কাছে একটা ঘটনা শুনে বলতে পারে, আল্লাহর কসম, ওটা তুমি যেমন বললে তেমনই। আবার বলতে পারে, এটা তুমি যেমন বললে তেমনই। দুটোই ঠিক। আলিফ লাম মীম এইমাত্র উচ্চারিত হয়েছে। যালিকা ইশারা করছে ওই অক্ষরগুলো যা জানাল সেদিকে, যা শেষ হয়েছে অথচ এখনও কাছেই। পাশে তিনি রাখেন ৩৮:৪৮ ও ৩৮:৪৯ আয়াত। সেখানে নবীদের একটি তালিকা শেষ হওয়ার পর বলা হয়েছে হাযা যিকর, এ এক উপদেশ।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Far Word Stays Far",
          "bn": "দূরের ইশারা যখন দূরেই থাকে"
        },
        "p": [
          {
            "en": "Al-Qurtubi reports the opposite answer as well: dhalika keeps its own meaning and points to something absent, and he counts ten opinions about what that absent thing is. Among them are the decree written over all creatures, of happiness and misery, life span and provision; the Quran already revealed in Mecca; the Preserved Tablet; and al-Kisa'i's view that it is the Quran still in heaven, not yet sent down.",
            "bn": "উল্টো উত্তরটিও কুরতুবী বর্ণনা করেন: যালিকা তার নিজের অর্থেই আছে, ইশারা করছে অনুপস্থিত কিছুর দিকে। সেই অনুপস্থিত জিনিসটি কী, তা নিয়ে তিনি দশটি মত গুনেছেন। এর মধ্যে আছে সৃষ্টিকুলের জন্য লিখে রাখা ফয়সালা, যাতে আছে সৌভাগ্য ও দুর্ভাগ্য, আয়ু ও রিযিক। আছে মক্কায় আগেই নাযিল হওয়া কুরআন, আছে লাওহে মাহফুয। কিসাঈর মতে এটি আসমানে থাকা সেই কুরআন, যা তখনও নাযিল হয়নি।"
          },
          {
            "en": "Several of these turn on a promise kept. Al-Baghawi quotes al-Farra': Allah had promised His Prophet ﷺ a Book that water would not wash away and much repeating would not wear out, and on sending the Quran He said, in effect, this is that Book I promised you. Al-Qurtubi reports a version tied to 73:5, We will cast upon you a weighty word, said in Mecca and fulfilled, on this reading, when the opening of al-Baqara came down in Medina.",
            "bn": "এর কয়েকটি মত দাঁড়িয়ে আছে প্রতিশ্রুতি পূরণের উপর। বাগাভী ফাররার কথা আনেন: আল্লাহ তাঁর নবী ﷺ-কে এমন এক কিতাবের ওয়াদা দিয়েছিলেন, যা পানিতে মুছে যায় না, বারবার পড়লেও পুরনো হয় না। কুরআন নাযিল করে তিনি যেন বললেন, এই সেই কিতাব, যার ওয়াদা তোমাকে দিয়েছিলাম। কুরতুবী আরেকটি রূপ বর্ণনা করেন ৭৩:৫ আয়াতের সঙ্গে জুড়ে: আমি তোমার উপর এক ভারী বাণী নাযিল করব। কথাটি বলা হয়েছিল মক্কায়। এই ব্যাখ্যায় তা পূরণ হলো মদীনায়, যখন বাকারার শুরুর আয়াতগুলো নাযিল হলো।"
          },
          {
            "en": "Ma'arif al-Qur'an finds the far end closer to hand, in al-Fatiha: the prayer for the straight path in 1:6 has been granted, and this Book is the answer to it. Other views point to earlier scripture. At-Tabari mentions that some took the words to mean the Torah and the Gospel, remarking only that the word then keeps its plain sense without strain; his own preference, stated just before, is the first reading. Ibn Kathir rejects that view outright: whoever says it has gone far afield and burdened himself with what he has no knowledge of.",
            "bn": "মাআরিফুল কুরআন দূরের প্রান্তটা খুঁজে পায় হাতের কাছেই, সূরা ফাতিহায়। ১:৬ আয়াতে সরল পথের যে দুআ, তা কবুল হয়েছে, আর এই কিতাব সেই দুআর জবাব। অন্য কিছু মত ইশারা করে আগের কিতাবগুলোর দিকে। তাবারী জানান, কেউ কেউ এ দিয়ে তাওরাত ও ইনজীল বুঝেছেন। তিনি শুধু মন্তব্য করেন, তাহলে শব্দটি টানাটানি ছাড়াই নিজের সাধারণ অর্থে থাকে। তবে এর ঠিক আগেই তিনি জানিয়ে দিয়েছেন, তাঁর পছন্দ প্রথম ব্যাখ্যাটি। ইবন কাসীর এ মত সরাসরি নাকচ করেন। তাঁর ভাষায়, যে এ কথা বলে সে অনেক দূরে চলে গেছে, আর এমন বিষয়ে নিজেকে কষ্ট দিয়েছে যার জ্ঞান তার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Letters Gathered Into a Book",
          "bn": "অক্ষর জুড়ে জুড়ে কিতাব"
        },
        "p": [
          {
            "en": "The noun carries a picture of its own. Al-Baghawi and al-Qurtubi both trace kitab to a root whose first sense is joining and gathering: a battalion is called a katiba because its men are gathered together, and a book is called kitab, al-Baghawi says, because letter is joined to letter. He adds that kitab is a verbal noun used for the thing written, as Arabs call a created thing khalq. Al-Qurtubi lists further senses of the word, among them an obligation, a ruling and a decree.",
            "bn": "বিশেষ্যটির ভেতরেও একটা ছবি আছে। বাগাভী ও কুরতুবী দুজনেই কিতাব শব্দকে এমন এক ধাতুর সঙ্গে মেলান, যার মূল অর্থ জোড়া দেওয়া, একত্র করা। সেনাদলকে কাতীবা বলা হয়, কারণ তার লোকেরা এক জায়গায় জড়ো। আর বাগাভীর কথায়, কিতাবকে কিতাব বলা হয় কারণ তাতে অক্ষরের সঙ্গে অক্ষর জোড়া লাগে। তিনি আরও বলেন, কিতাব আসলে ক্রিয়াবাচক বিশেষ্য, অর্থ লিখিত জিনিস, যেমন আরবরা সৃষ্ট বস্তুকে বলে খালক। কুরতুবী শব্দটির আরও কিছু অর্থ গুনিয়েছেন, যেমন ফরয, বিধান ও তাকদীর।"
          },
          {
            "en": "As-Sa'di finds the Book's rank in the noun rather than in the pointer. He glosses dhalika as this, and then calls it this great Book, the one that is the Book in truth, holding knowledge and plain truth that the books of earlier and later peoples did not hold. Al-Muyassar opens the same way: that Quran is the great Book. In both, the weight falls on al-kitab itself. It is not one book among many but the Book, and the rest of the verse says what kind.",
            "bn": "সা'দী কিতাবের মর্যাদা খোঁজেন ইশারা-শব্দে নয়, বিশেষ্যটিতে। তিনি যালিকার অর্থ করেন এই। তারপর বলেন, এ হলো সেই মহান কিতাব, যা প্রকৃত অর্থেই কিতাব। এতে এমন জ্ঞান আর এমন স্পষ্ট সত্য আছে, যা আগের বা পরের কোনো জাতির কিতাবে ছিল না। মুয়াসসারও শুরু করে একই ভাবে: ওই কুরআনই মহান কিতাব। দুজনের কাছেই ভারটা পড়েছে আল-কিতাব শব্দের উপর। এটি বহু বইয়ের একটি নয়, এটিই কিতাব। আর কেমন কিতাব, তা বলে দেয় আয়াতের বাকি অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Doubt With Nowhere to Stand",
          "bn": "সন্দেহের দাঁড়ানোর জায়গা নেই"
        },
        "p": [
          {
            "en": "La rayba fih: there is no doubt in it. Ibn Kathir lists Companions and Successors who glossed rayb as shakk, doubt, and quotes Ibn Abi Hatim: I know of no disagreement about this. Al-Qurtubi widens the word. Rayb carries three senses in Arabic, doubt, suspicion of someone, and need, and he gives a line of poetry for each. The verb rabani is said, he notes, when something brings doubt and fear into you. The la here is the negation that covers a whole kind.",
            "bn": "লা রাইবা ফীহ: এতে কোনো সন্দেহ নেই। ইবন কাসীর সাহাবী ও তাবিঈদের একটি তালিকা দেন, যাঁরা রাইব শব্দের অর্থ করেছেন শাক্ক, অর্থাৎ সন্দেহ। তারপর ইবন আবী হাতিমের কথা আনেন: এ বিষয়ে কোনো মতভেদ আমার জানা নেই। কুরতুবী শব্দটিকে আরও খুলে দেখান। আরবিতে রাইবের তিনটি অর্থ: সন্দেহ, কারও প্রতি অভিযোগের সন্দেহ, আর প্রয়োজন। প্রতিটির পক্ষে তিনি একটি করে কবিতার চরণ আনেন। তিনি জানান, কোনো কিছু মনে সন্দেহ আর ভয় ঢুকিয়ে দিলে বলা হয় রাবানী। আর এখানে যে লা, তা গোটা জাতকেই নাকচ করে।"
          },
          {
            "en": "What exactly is not in doubt? At-Tabari answers: there is no doubt in that Book that it is from Allah. Ibn Kathir says the same and sets beside it 32:2, the sending down of the Book, no doubt in it, from the Lord of the worlds. Al-Baghawi adds: and that it is the truth and true speech. Al-Qurtubi says it is true in itself and sent down from Allah, one of His attributes and uncreated, even if doubt befalls the disbelievers.",
            "bn": "ঠিক কোন বিষয়ে সন্দেহ নেই? তাবারীর উত্তর: ওই কিতাব যে আল্লাহর কাছ থেকে এসেছে, তাতে কোনো সন্দেহ নেই। ইবন কাসীরও একই কথা বলেন, আর পাশে রাখেন ৩২:২ আয়াত: এ কিতাবের অবতরণ, এতে কোনো সন্দেহ নেই, জগতসমূহের রবের পক্ষ থেকে। বাগাভী যোগ করেন, আর এটি হক, এর কথা সত্য। কুরতুবীর কথায়, কিতাবটি নিজেই সত্য, আল্লাহর কাছ থেকে নাযিল হওয়া। এটি তাঁর এক সিফাত, সৃষ্ট নয়। কাফিরদের মনে সন্দেহ জাগলেও তাতে এ সত্য বদলায় না।"
          },
          {
            "en": "Ma'arif al-Qur'an meets the obvious objection, since many people have doubted the Quran. Doubt about a statement arises in two ways: either the statement itself is faulty, or the listener misunderstands it. The second does not make the statement doubtful, however many share the misreading, and so it remains true that there is no doubt in this Book. Ma'arif cites the surah's own turn to such doubters at 2:23, if you are in rayb about what We have sent down.",
            "bn": "স্বাভাবিক আপত্তিটা মাআরিফুল কুরআন নিজেই তোলে: বহু মানুষ তো কুরআন নিয়ে সন্দেহ করেছে। কোনো কথা নিয়ে সন্দেহ জন্মায় দুই পথে। হয় কথাটাতেই ভুল আছে, নয়তো শ্রোতা ভুল বুঝেছে। দ্বিতীয় ক্ষেত্রে কথাটা সন্দেহজনক হয়ে যায় না, যত মানুষই ভুল বুঝুক। তাই এ কথা সত্যই থাকে যে এই কিতাবে কোনো সন্দেহ নেই। মাআরিফ এখানে টেনে আনে ২:২৩ আয়াত, যেখানে সূরাটি নিজেই এমন সন্দেহকারীদের দিকে ফেরে: আমি যা নাযিল করেছি তাতে যদি তোমাদের রাইব থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report That Carries a Command",
          "bn": "খবরের ভেতরে নিষেধ"
        },
        "p": [
          {
            "en": "The sentence reads as a statement, and the glosses above treat it so. Three of the commentators also record a second reading without naming who held it: a report in form, a prohibition in meaning, do not doubt it. Al-Baghawi supports it from 2:197, fa-la rafatha wa la fusuq, where no obscenity and no wickedness during Hajj means do not commit them. Ibn Kathir records it as what some said, and al-Qurtubi as what was said. None of the three argues against it.",
            "bn": "বাক্যটি পড়তে খবর, আর ওপরের ব্যাখ্যাগুলোও একে খবর হিসেবেই নিয়েছে। তবে তিনজন মুফাসসির আরেকটি ব্যাখ্যাও লিখে রেখেছেন, কার মত তা না জানিয়ে। সেটি হলো: রূপে খবর, অর্থে নিষেধ, অর্থাৎ এতে সন্দেহ কোরো না। বাগাভী এর পক্ষে আনেন ২:১৯৭ আয়াত: ফালা রাফাসা ওয়ালা ফুসূক। হজ্জে অশ্লীলতা নেই, পাপাচার নেই, মানে এসব কোরো না। ইবন কাসীর মতটি এনেছেন কেউ কেউ বলেছেন বলে, কুরতুবী এনেছেন বলা হয়েছে বলে। তিনজনের কেউই এর বিরুদ্ধে যুক্তি দেননি।"
          },
          {
            "en": "Al-Muyassar holds both in one line: there is no doubt that it is from Allah, so it is not right for anyone to doubt it, because it is so clear. As-Sa'di draws a rule. A negation meant as praise must contain its opposite, the perfection, because negation is mere absence and bare absence praises nothing. The opposite of doubt is certainty, so the Book carries a knowledge of certainty that removes doubt. And since guidance comes only through certainty, he says, the verse moves straight on to guidance.",
            "bn": "মুয়াসসার এক বাক্যেই দুটো ধরে রাখে: এটি আল্লাহর কাছ থেকে এসেছে, এতে সন্দেহ নেই। তাই এত স্পষ্ট কিতাব নিয়ে কারও সন্দেহ করা চলে না। সা'দী এখান থেকে একটি নিয়ম বের করেন। প্রশংসার জন্য যে না-বাচক কথা বলা হয়, তার ভেতরে তার বিপরীত পূর্ণতাটাও থাকতে হয়। কারণ নাকচ মানে শুধু না থাকা, আর নিছক না থাকায় কোনো প্রশংসা নেই। সন্দেহের বিপরীত ইয়াকীন। তাই এ কিতাবে আছে এমন নিশ্চিত জ্ঞান, যা সন্দেহ দূর করে। তিনি বলেন, ইয়াকীন ছাড়া হিদায়াত আসে না, তাই আয়াত সোজা চলে যায় হিদায়াতের কথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Places to Stop",
          "bn": "থামার দুই জায়গা"
        },
        "p": [
          {
            "en": "The printed text of this verse carries a small mark at two places, after la rayba and after fih, and the commentators discuss where the sense divides. Ibn Kathir reports that some reciters stop at la rayba and begin again with fihi hudan lil-muttaqin, in it is guidance for the God-conscious. He prefers stopping after fih, for two reasons: it matches 32:2, la rayba fihi min rabbil-alamin, and it makes hudan a description of the Quran itself, which is more eloquent than saying guidance is in it.",
            "bn": "এ আয়াতের ছাপা পাঠে দুই জায়গায় একটি ছোট চিহ্ন আছে, লা রাইবা-র পরে আর ফীহ-র পরে। অর্থ কোথায় ভাগ হয়, তা নিয়ে মুফাসসিররা আলোচনা করেছেন। ইবন কাসীর জানান, কিছু কারী লা রাইবা-তে থেমে নতুন করে শুরু করেন ফীহি হুদাল লিল মুত্তাকীন, এতে মুত্তাকীদের জন্য হিদায়াত আছে। তাঁর পছন্দ ফীহ-র পরে থামা। কারণ দুটো। এতে ৩২:২ আয়াতের সঙ্গে মিল থাকে, যেখানে আছে লা রাইবা ফীহি মির রাব্বিল আলামীন। আর তখন হুদা হয়ে যায় কুরআনেরই গুণ। তাঁর মতে কিতাবে হিদায়াত আছে বলার চেয়ে কিতাবটাই হিদায়াত বলা বেশি জোরালো।"
          },
          {
            "en": "At-Tabari reads the same way: the pronoun in fih returns to the Book, so the sense is no doubt in that Book that it is from Allah, a guidance for the God-conscious. Al-Qurtubi's grammar fits the other division. He treats fihi hudan as one clause, with hudan as its subject and fih as its predicate, and lists five ways of pronouncing the pronoun, among them Ibn Kathir the reciter's fihi, lengthened. Ibn Kathir the commentator adds that hudan may be read as describing the Book or as a state, guiding.",
            "bn": "তাবারীও একই ভাবে পড়েন। ফীহ-র সর্বনাম ফেরে কিতাবের দিকে, ফলে অর্থ দাঁড়ায়: ওই কিতাব আল্লাহর কাছ থেকে এসেছে, এতে সন্দেহ নেই, মুত্তাকীদের জন্য হিদায়াত। কুরতুবীর ব্যাকরণ মেলে অন্য ভাগটির সঙ্গে। তিনি ফীহি হুদা-কে একটি বাক্যাংশ ধরেন, যেখানে হুদা উদ্দেশ্য আর ফীহ বিধেয়। সর্বনামটি উচ্চারণের পাঁচটি রূপও তিনি গুনিয়েছেন, তার একটি কারী ইবন কাসীরের টেনে পড়া ফীহী। মুফাসসির ইবন কাসীর আরও বলেন, হুদা শব্দটিকে কিতাবের বিশেষণ হিসেবেও পড়া যায়, আবার অবস্থা হিসেবেও, অর্থাৎ পথ দেখিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Guidance Named for the Few",
          "bn": "অল্প কজনের নামে হিদায়াত"
        },
        "p": [
          {
            "en": "Then the scope narrows: hudan lil-muttaqin, a guidance for the God-conscious. Yet 2:185 calls the same Quran hudan lin-nas, a guidance for mankind. As-Sa'di sets the two side by side. There He made it general, and here He named the muttaqin, because the Book is in itself guidance for all creation. The wretched would not lift their heads to it, so it stands as proof against them. The muttaqin brought the greatest cause of guidance, taqwa, and so they were guided and benefited fully.",
            "bn": "এরপর পরিসর সরু হয়ে আসে: হুদাল লিল মুত্তাকীন, মুত্তাকীদের জন্য হিদায়াত। অথচ ২:১৮৫ আয়াতে এই কুরআনকেই বলা হয়েছে হুদাল লিন নাস, মানুষের জন্য হিদায়াত। সা'দী দুটি আয়াত পাশাপাশি রাখেন। সেখানে আল্লাহ কথাটা সবার জন্য বলেছেন, আর এখানে নাম নিয়েছেন মুত্তাকীদের। কারণ কিতাবটি নিজে গোটা সৃষ্টির জন্যই হিদায়াত। হতভাগারা এর দিকে মাথা তুলেও তাকায়নি, তাই এটি তাদের বিরুদ্ধে দলিল হয়ে আছে। মুত্তাকীরা হিদায়াত পাওয়ার সবচেয়ে বড় উপায়টি নিয়ে এসেছিল, সেটি তাকওয়া। তাই তারা পথ পেয়েছে, পুরো উপকারও পেয়েছে।"
          },
          {
            "en": "As-Sa'di's second answer divides the word. There is guidance of explanation and guidance of enabling. The muttaqin received both, others only the first, and explanation without being enabled to act on it is not complete guidance. Al-Qurtubi draws the same line: the guidance of pointing the way, which messengers can give, as in 42:52, and the guidance of enabling, which Allah alone gives, as in 28:56, you do not guide whom you love. Ibn Kathir puts it briefly: the Quran is guidance in itself, but only the righteous attain it.",
            "bn": "সা'দীর দ্বিতীয় উত্তর শব্দটিকে দুই ভাগে ভাগ করে। এক হলো বুঝিয়ে দেওয়ার হিদায়াত, আরেক হলো আমলের তাওফীক দেওয়ার হিদায়াত। মুত্তাকীরা দুটোই পেয়েছে, অন্যরা শুধু প্রথমটি। আর আমলের তাওফীক ছাড়া শুধু বুঝিয়ে দেওয়া পূর্ণ হিদায়াত নয়। কুরতুবীও একই রেখা টানেন। একটি পথ দেখানোর হিদায়াত, যা রাসূলরাও দিতে পারেন, যেমন ৪২:৫২ আয়াতে। অন্যটি তাওফীকের হিদায়াত, যা কেবল আল্লাহর হাতে, যেমন ২৮:৫৬ আয়াতে: তুমি যাকে ভালোবাসো তাকে হিদায়াত দিতে পারো না। ইবন কাসীর সংক্ষেপে বলেন, কুরআন নিজেই হিদায়াত, কিন্তু তা পায় কেবল নেককাররা।"
          },
          {
            "en": "At-Tabari states it more sharply. Had the Book been light for others too, Allah would not have singled out the muttaqin. It is guidance for them, deafness in the deniers' ears, blindness on their sight, and a conclusive proof against them. Al-Qurtubi, by contrast, says Allah named them to honour them, though it is guidance for all creation. Ma'arif al-Qur'an sees degrees: whoever accepts guidance may hope to rise to their rank, and those already among them receive more, without limit.",
            "bn": "তাবারী কথাটা আরও ধারালো করে বলেন। কিতাবটি অন্যদের জন্যও আলো হলে আল্লাহ আলাদা করে মুত্তাকীদের নাম নিতেন না। এটি তাদের জন্য হিদায়াত। অস্বীকারকারীদের কানে এটি বধিরতা, চোখে অন্ধত্ব, আর তাদের বিরুদ্ধে চূড়ান্ত দলিল। কুরতুবী অন্যভাবে বলেন: কিতাবটি গোটা সৃষ্টির জন্য হিদায়াত হলেও আল্লাহ মুত্তাকীদের নাম নিয়েছেন তাদের সম্মান দিতে। মাআরিফুল কুরআন এখানে স্তর দেখে। যে হিদায়াত গ্রহণ করে, সে তাদের স্তরে ওঠার আশা রাখতে পারে। আর যারা আগেই সেখানে আছে, তারা পায় আরও, যার কোনো সীমা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking a Path of Thorns",
          "bn": "কাঁটার পথে হাঁটা"
        },
        "p": [
          {
            "en": "Who are the muttaqin? At-Tabari gathers the early answers. Al-Hasan: they guarded against what was forbidden and did what was obligatory. Ibn Abbas: they fear His punishment for leaving the guidance they know, and hope for His mercy. Al-Kalbi: they avoid the major sins. Qatadah: they are the people described in 2:3 and 2:4. At-Tabari will not narrow the word, since the verse names taqwa without restriction, and Ibn Kathir says of that choice: it is as he said.",
            "bn": "মুত্তাকী কারা? তাবারী প্রথম যুগের উত্তরগুলো একত্র করেন। হাসান বসরী বলেন, যা হারাম তা থেকে তারা বেঁচে থেকেছে, আর যা ফরয তা আদায় করেছে। ইবন আব্বাস বলেন, জানা হিদায়াত ছেড়ে দিলে আল্লাহর যে শাস্তি, তারা তাকে ভয় করে, আর তাঁর রহমতের আশা রাখে। কালবী বলেন, তারা কবীরা গুনাহ এড়িয়ে চলে। কাতাদা বলেন, ২:৩ ও ২:৪ আয়াতে যাদের বর্ণনা, তারাই। তাবারী শব্দটিকে সংকীর্ণ করতে রাজি নন, কারণ আয়াত তাকওয়ার কথা বলেছে কোনো সীমা না টেনে। তাঁর এই বাছাই সম্পর্কে ইবন কাসীর বলেন, তিনি যেমন বলেছেন, বিষয়টি তেমনই।"
          },
          {
            "en": "As-Sa'di defines its reality as taking what shields you from Allah's anger, by obeying His commands and avoiding what He forbids. Al-Baghawi traces the root to a barrier set between two things, as a man holds up his shield. Then a report, in al-Qurtubi's wording: Umar ibn al-Khattab asks about taqwa and is asked in turn, have you walked a path with thorns? I tucked up my clothes and took care. That is taqwa. Al-Qurtubi names the one he asked as Ubayy; Ibn Kathir names Ubayy under it has been said; al-Baghawi names Ka'b al-Ahbar.",
            "bn": "সা'দী তাকওয়ার আসল রূপ বলেন এভাবে: আল্লাহর আদেশ মেনে আর নিষেধ এড়িয়ে এমন কিছু ধরে রাখা, যা তাঁর ক্রোধ থেকে বাঁচায়। বাগাভী শব্দের মূল খুঁজে পান দুই জিনিসের মাঝে দাঁড় করানো আড়ালে, যেমন মানুষ ঢাল তুলে নিজেকে আড়াল করে। তারপর একটি বর্ণনা, কুরতুবীর ভাষায়। উমর (রাঃ) তাকওয়া সম্পর্কে জিজ্ঞেস করলেন। উল্টো তাঁকেই প্রশ্ন করা হলো, কখনো কাঁটাভরা পথে হেঁটেছেন? তিনি বললেন, কাপড় গুটিয়ে সাবধানে চলেছি। উত্তর এল, এটাই তাকওয়া। কুরতুবীর বর্ণনায় যাঁকে জিজ্ঞেস করা হয়েছিল তিনি উবাই (রাঃ)। ইবন কাসীরও উবাইয়ের নাম আনেন, তবে 'বলা হয়' কথাটি জুড়ে। বাগাভীর বর্ণনায় তিনি কা'ব আল-আহবার।"
          },
          {
            "en": "Ibn Kathir also cites at-Tirmidhi (2451), from Atiyya as-Sa'di: the servant does not reach being among the muttaqin until he leaves what carries no harm, wary of what does carry harm. At-Tirmidhi graded it hasan gharib, known to him only by this route. No fetched commentary reports an occasion of revelation for the verse. What it leaves is a sequence: a Book beyond doubt, guidance that reaches those who bring care, and 2:3 to 2:5 naming what that care looks like.",
            "bn": "ইবন কাসীর তিরমিযীর একটি বর্ণনাও আনেন (২৪৫১), আতিয়্যা সা'দী (রাঃ) থেকে: বান্দা মুত্তাকীদের একজন হতে পারে না, যতক্ষণ না সে ক্ষতিহীন জিনিসও ছেড়ে দেয়, ক্ষতিকর জিনিস থেকে সাবধান থাকতে। তিরমিযী একে হাসান গরীব বলেছেন, আর জানিয়েছেন যে এই একটি সূত্র ছাড়া তিনি এটি জানেন না। আমাদের পড়া কোনো তাফসীর এ আয়াতের নাযিলের প্রেক্ষাপট বর্ণনা করেনি। আয়াতটি রেখে যায় একটি ধারাবাহিকতা: সন্দেহের ঊর্ধ্বে এক কিতাব, এমন হিদায়াত যা পৌঁছায় সাবধানীদের কাছে, আর ২:৩ থেকে ২:৫ আয়াত, যা দেখিয়ে দেয় সেই সাবধানতার চেহারা।"
          }
        ]
      }
    ]
  },
  "2:8-10": {
    "sections": [
      {
        "h": {
          "en": "Three Groups at the Gate",
          "bn": "প্রবেশপথে তিন দল"
        },
        "p": [
          {
            "en": "The Quran's longest surah opens by sorting humanity into three. Four verses, 2:2-5, describe the believers and end with their success. Two verses, 2:6-7, dispatch the open disbelievers, sealed against warning. Then thirteen verses, 2:8-20, are given to a third group: those who say they believe and do not. The commentators draw the obvious lesson from the arithmetic — the concealed disease needed the longest description, because it is the hardest to see.",
            "bn": "কুরআনের সবচেয়ে বড় সূরা শুরু হয় মানুষকে তিন ভাগে ভাগ করে। চারটি আয়াত, 2:2-5, মুমিনদের কথা বলে, আর শেষ হয় তাদের সফলতায়। দুটি আয়াত, 2:6-7, খোলাখুলি কাফিরদের কথা অল্পেই সেরে ফেলে; তাদের অন্তরে মোহর পড়ে গেছে, সতর্কবাণী আর পৌঁছায় না। তারপর তেরোটি আয়াত, 2:8-20, তৃতীয় এক দলের জন্য: যারা বলে, আমরা ঈমান এনেছি, অথচ আনেনি। এই হিসাব থেকে মুফাসসিরগণ সহজ শিক্ষাটাই টানেন: লুকানো রোগটার জন্যই সবচেয়ে লম্বা বর্ণনা লেগেছে, কারণ সেটাই সবচেয়ে কম চোখে পড়ে।"
          },
          {
            "en": "The hypocrites of Madinah were a fact of the community this surah addressed: men who entered Islam outwardly, for safety or advantage, after the believers grew strong, while their hearts stayed behind. But the passage is worded without names, in the present tense of every generation — wa minan-nas, and among mankind are those who say. The Quran preserved the description and not the roster, because the disease outlives its first patients.",
            "bn": "এ সূরা যে সমাজকে সম্বোধন করেছিল, মদীনার মুনাফিকরা ছিল সেখানকার বাস্তবতা। মুমিনরা শক্তিশালী হওয়ার পর তারা নিরাপত্তা বা সুবিধার আশায় বাইরে বাইরে ইসলামে ঢুকেছিল, কিন্তু অন্তর পড়ে ছিল পেছনে। তবু এই অংশে কারও নাম নেই। ভাষাটা বর্তমান কালের, যা প্রতিটি প্রজন্মের বেলায় খাটে: ওয়া মিনান-নাস, আর মানুষের মধ্যে কিছু লোক আছে যারা বলে। কুরআন সংরক্ষণ করেছে বর্ণনাটা, নামের তালিকা নয়। কারণ রোগটা তার প্রথম রোগীদের পরেও বেঁচে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Words Without the Heart's Signature",
          "bn": "হৃদয়ের সই ছাড়া কথা"
        },
        "p": [
          {
            "en": "Their sentence is doctrinally perfect: we believe in Allah and in the Last Day — the opening and the end of faith, the two articles that carry all the rest. The refutation does not accuse them of misstating anything; it goes beneath the words: wa ma hum bi-mu'minin, and they are not believers at all, with an emphatic particle pressed into the denial. The Quran here separates two things we habitually merge — the content of a statement, and the truthfulness of its speaker.",
            "bn": "আকীদার দিক থেকে তাদের কথায় কোনো খুঁত নেই: আমরা আল্লাহর প্রতি ও শেষ দিবসের প্রতি ঈমান এনেছি। এ দুটোই ঈমানের শুরু আর শেষ, বাকি সব এ দুই স্তম্ভের ওপর দাঁড়িয়ে। জবাবে কুরআন তাদের কথায় কোনো ভুল ধরেনি। জবাব চলে যায় শব্দের নিচে: ওয়া মা হুম বি-মু'মিনীন, আর তারা মোটেই মুমিন নয়। এই না-এর ভেতরে জোর দেওয়ার একটা অব্যয়ও বসানো আছে। কুরআন এখানে এমন দুটি জিনিস আলাদা করে, যা আমরা অভ্যাসবশে গুলিয়ে ফেলি: কথার বিষয়বস্তু, আর যে বলছে তার সত্যবাদিতা।"
          },
          {
            "en": "That separation returns in 63:1, where hypocrites state a true sentence — that Muhammad ﷺ is the Messenger of Allah — and Allah, affirming the sentence itself, testifies that they are liars in saying it. Truth in the mouth does not certify truth in the heart. A claim of faith is weighed not against a creed but against the person making it, and only One party can weigh that.",
            "bn": "এই পার্থক্য আবার আসে 63:1 আয়াতে। সেখানে মুনাফিকরা একটা সত্য কথাই বলে: মুহাম্মাদ ﷺ আল্লাহর রাসূল। আল্লাহ কথাটাকে সত্য বলে মেনে নিয়েও সাক্ষ্য দেন, এ কথা বলায় তারা মিথ্যাবাদী। মুখে সত্য থাকলেই অন্তরে সত্য আছে, এমন সনদ মেলে না। ঈমানের দাবি মাপা হয় আকীদার সঙ্গে মিলিয়ে নয়, যে দাবি করছে তার সঙ্গে মিলিয়ে। আর সেটা মাপতে পারেন কেবল একজনই।"
          }
        ]
      },
      {
        "h": {
          "en": "Deception That Circles Back",
          "bn": "ঘুরে আসা প্রতারণা"
        },
        "p": [
          {
            "en": "They seek to deceive Allah and those who believe — yukhadi'un, a verb form that pictures deception as an attempted contest. The verse's answer removes the other contestant: they deceive none but themselves, and they perceive it not. Nothing lands on Allah, who knows what they conceal, and nothing lands durably on the believers. What remains is the deceiver himself, spending his one life maintaining a performance whose only permanent audience is the performer.",
            "bn": "তারা আল্লাহ ও মুমিনদের ধোঁকা দিতে চায়। ক্রিয়াটি হলো ইউখাদিঊন, এমন এক রূপ যা ধোঁকাকে দেখায় দুই পক্ষের লড়াইয়ের চেষ্টা হিসেবে। আয়াতের জবাব অপর পক্ষকেই সরিয়ে দেয়: তারা নিজেদের ছাড়া কাউকে ধোঁকা দেয় না, অথচ তা টের পায় না। আল্লাহর গায়ে কিছুই লাগে না, তারা যা লুকায় তিনি তা জানেন। মুমিনদের গায়েও স্থায়ীভাবে কিছু লাগে না। বাকি থাকে কেবল প্রতারক নিজে। তার একটাই জীবন, আর সেটা সে খরচ করে এমন এক অভিনয় চালিয়ে যেতে, যার একমাত্র স্থায়ী দর্শক সে নিজেই।"
          },
          {
            "en": "The lack of perception is the frightening clause. Hypocrisy in this passage is not a cold decision renewed each morning; it becomes a condition its carrier can no longer feel. Each successful performance makes the mask more comfortable, until the actor forgets it is a mask. That is why the passage speaks of a disease rather than a crime — crimes are known to their doers, while a disease can spread precisely because it goes unfelt.",
            "bn": "ভয়ের কথাটা হলো ওই 'টের পায় না'। এই অংশে মুনাফিকি ঠান্ডা মাথায় নেওয়া এমন কোনো সিদ্ধান্ত নয়, যা প্রতিদিন সকালে নতুন করে নিতে হয়। এটা এমন এক অবস্থা হয়ে দাঁড়ায়, যা যার ভেতরে আছে সে আর অনুভবই করতে পারে না। প্রতিটি সফল অভিনয়ে মুখোশটা আরেকটু আরামের হয়, শেষে অভিনেতা ভুলেই যায় যে ওটা মুখোশ। এ কারণেই অংশটি অপরাধের কথা না বলে রোগের কথা বলে। অপরাধী জানে সে অপরাধ করছে, কিন্তু রোগ ছড়াতে পারে ঠিক এজন্যই যে তা টের পাওয়া যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Disease That Is Fed",
          "bn": "যে রোগকে খোরাক দেওয়া হয়"
        },
        "p": [
          {
            "en": "Fi qulubihim marad — in their hearts is a disease. The early commentators gloss it as doubt, and Ibn Kathir relates their view that this is a disease in the religion rather than the body. Then a clause of precise justice: fa-zadahumu Allahu marada, so Allah increased them in disease. The increase is recompense in kind, measure for measure — as they chose falseness, more falseness was opened to them. No spiritual state stands still; it compounds in whichever direction it is fed.",
            "bn": "ফী কুলূবিহিম মারাদ: তাদের অন্তরে আছে রোগ। প্রথম যুগের মুফাসসিরগণ এর অর্থ করেছেন সন্দেহ। ইবনে কাসীর তাঁদের এই মত বর্ণনা করেন যে, এ রোগ শরীরের নয়, দ্বীনের। তারপর আসে মাপা ইনসাফের একটি বাক্য: ফা-যাদাহুমুল্লাহু মারাদা, ফলে আল্লাহ তাদের রোগ বাড়িয়ে দিলেন। এই বাড়িয়ে দেওয়া তাদের কাজেরই সমান মাপের প্রতিদান। তারা মিথ্যাকে বেছে নিয়েছিল, তাই তাদের সামনে আরও মিথ্যার পথ খুলে দেওয়া হলো। অন্তরের কোনো অবস্থাই এক জায়গায় থেমে থাকে না। যেদিকে খোরাক পায়, সেদিকেই চক্রবৃদ্ধি হারে বাড়ে।"
          },
          {
            "en": "The sentence of punishment is attached to a habit, not an act: a painful punishment bima kanu yakdhibun — for what they used to lie, the Arabic construction of kana with the present verb marking continuous, habitual practice. The passage indicts lying as a settled way of being. One lie is a sin to repent of; lying as a maintained system is the load-bearing wall of hypocrisy itself, and the punishment clause names the wall, not a single brick.",
            "bn": "শাস্তির রায় বাঁধা হয়েছে একটা অভ্যাসের সঙ্গে, কোনো একটি কাজের সঙ্গে নয়: যন্ত্রণাদায়ক শাস্তি, বিমা কানূ ইয়াকযিবূন, কারণ তারা মিথ্যা বলে আসছিল। আরবিতে 'কানা'-র সঙ্গে বর্তমান কালের ক্রিয়া বসলে বোঝায় লাগাতার, অভ্যাসের কাজ। তাই অংশটি মিথ্যাকে ধরছে জীবনের স্থায়ী ধরন হিসেবে। একটা মিথ্যা এমন গুনাহ, যার জন্য তওবা করা যায়। কিন্তু নিয়ম করে টিকিয়ে রাখা মিথ্যা হলো মুনাফিকির ভার বয়ে রাখা দেয়াল। শাস্তির বাক্যটি নাম নেয় সেই দেয়ালের, আলাদা কোনো ইটের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Passage Continues",
          "bn": "অংশটি যেভাবে এগোয়"
        },
        "p": [
          {
            "en": "The following verses extend the portrait. In 2:11-12 they answer the charge of corruption with a claim of reform — we are only setters-right — and the Quran replies that they are the corrupters, though they perceive not. In 2:14 the two faces are shown in motion: meeting the believers they say we believe, and alone with their devils they say we are with you, we were only mocking. Every scene repeats the first one — a public sentence, a private reality, and a gap.",
            "bn": "পরের আয়াতগুলো ছবিটাকে আরও বড় করে। 2:11-12 আয়াতে ফাসাদের অভিযোগের জবাবে তারা দাবি করে, আমরা তো কেবল সংশোধনকারী। কুরআন জবাব দেয়: তারাই ফাসাদকারী, কিন্তু তারা টের পায় না। 2:14 আয়াতে দুই চেহারা দেখা যায় চলন্ত অবস্থায়: মুমিনদের সঙ্গে দেখা হলে বলে, আমরা ঈমান এনেছি; আর নিজেদের শয়তানদের সঙ্গে একা হলে বলে, আমরা তোমাদের সঙ্গেই আছি, আমরা তো কেবল ঠাট্টা করছিলাম। প্রতিটি দৃশ্যে প্রথম দৃশ্যটাই ফিরে আসে: প্রকাশ্যে এক কথা, গোপনে আরেক বাস্তবতা, আর মাঝখানে ফাঁক।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding the Mirror Honestly",
          "bn": "আয়নাটি সৎভাবে ধরা"
        },
        "p": [
          {
            "en": "The passage is a mirror, and mirrors are for the person in front of them. Its use is not to diagnose neighbours but to run the audit inward: where do my words about faith outrun my heart — in public religiosity, in pious phrases typed without feeling, in commitments announced and quietly dropped? The verses warn that the gap does not hold steady. Whatever is performed and not meant widens it; whatever is meant and practised heals it.",
            "bn": "এই অংশটা একটা আয়না, আর আয়না তো যে সামনে দাঁড়ায় তার জন্যই। এর কাজ প্রতিবেশীর দোষ ধরা নয়, নিজের হিসাব নেওয়া। ঈমান নিয়ে আমার মুখের কথা কোথায় আমার অন্তরকে ছাড়িয়ে যায়? লোক দেখানো দ্বীনদারিতে, মন ছাড়া টাইপ করা দ্বীনি বাক্যে, ঘোষণা দিয়ে চুপিচুপি ছেড়ে দেওয়া ওয়াদায়? আয়াতগুলো সতর্ক করে, এই ফাঁক এক জায়গায় থেমে থাকে না। মন থেকে না এনে যা শুধু দেখানো হয়, তা ফাঁকটা চওড়া করে। আর যা মন থেকে আসে এবং আমলে আসে, তা ফাঁকটা সারিয়ে তোলে।"
          },
          {
            "en": "The passage also shows the direction of repair by naming the mechanics of decline. If lying as a habit feeds the disease, truthfulness as a habit starves it: one commitment kept exactly as announced, one pious sentence not said because it was not yet true, one deed moved from the seen column to the unseen. The believers described in 2:2-5 differ not by grander claims but by smaller gaps — and the gap, not the claim, is what this passage measures.",
            "bn": "অবনতি কীভাবে ঘটে, তা দেখিয়ে দিয়ে অংশটি সারানোর পথও দেখায়। মিথ্যা বলার অভ্যাস যদি রোগের খোরাক হয়, তবে সত্য বলার অভ্যাস রোগটাকে না খাইয়ে মারে: যেমন বলেছিলেন হুবহু তেমনি রাখা একটা ওয়াদা; এখনো নিজের মধ্যে সত্য হয়নি বলে না-বলা একটা দ্বীনি কথা; প্রকাশ্য আমলের তালিকা থেকে গোপন আমলের তালিকায় সরিয়ে নেওয়া একটা আমল। 2:2-5 আয়াতের মুমিনরা আলাদা বড় দাবির জোরে নয়, ফাঁক ছোট বলে। আর এই অংশ মাপে দাবিটা নয়, ফাঁকটাই।"
          }
        ]
      }
    ]
  },
  "2:14-16": {
    "sections": [
      {
        "h": {
          "en": "Between Two Rooms",
          "bn": "দুই ঘরের মাঝখানে"
        },
        "p": [
          {
            "en": "Al-Baqarah is Madinan, and it opens by sorting people. 2:2-5 describe the believers and end with their success, 2:6-7 close the file on those who refuse openly, and from 2:8 the surah gives its longest opening portrait to a third group. 2:8-10 supply the words, the self-deception and the disease of the heart. 2:11-13 record what they answer when challenged: we are only reformers, and should we believe as the foolish have believed. Our three verses then set the same people in motion and close their account.",
            "bn": "সূরা বাকারা মাদানি, আর শুরুতেই এ সূরা মানুষকে ভাগ করে নেয়। 2:2 থেকে 2:5 আয়াত মুমিনদের কথা বলে শেষ হয় তাদের সফলতায়, 2:6 আর 2:7 আয়াত খোলাখুলি অস্বীকারকারীদের ফাইল বন্ধ করে দেয়, আর 2:8 আয়াত থেকে সূরা তৃতীয় এক দলকে দেয় শুরুর সবচেয়ে লম্বা বর্ণনা। 2:8 থেকে 2:10 আয়াত দেয় তাদের কথা, নিজেকে ঠকানো আর অন্তরের রোগ। 2:11 থেকে 2:13 আয়াত লিখে রাখে ধরা পড়লে তারা কী বলে: আমরা তো সংশোধনকারী, আর নির্বোধেরা যেমন ঈমান এনেছে আমরাও কি তেমন আনব। এরপর আমাদের তিন আয়াত সেই লোকদেরই চলতে দেখায়, আর তাদের হিসাব চুকিয়ে দেয়।"
          },
          {
            "en": "After the account is closed, 2:17-20 turn to pictures: a man who kindles a fire and then loses his light, and travellers in a storm who walk while the lightning shows the road and stand still when it goes dark. So these three verses sit at the hinge of the passage, between the last of the reported speech and the first of the parables. No occasion of revelation for these three verses is established, so the placement is what carries them. Ibn Kathir names no occasion here either and reads them simply as the description continuing.",
            "bn": "হিসাব চুকিয়ে দেওয়ার পর 2:17 থেকে 2:20 আয়াত ছবিতে চলে যায়: এক লোক আগুন জ্বালাল, তারপর তার আলোই হারিয়ে গেল; আর ঝড়ের রাতে পথচারীরা, বিদ্যুৎ চমকালে পা বাড়ায়, অন্ধকার নামলে থমকে দাঁড়ায়। তাই এই তিন আয়াত দাঁড়িয়ে আছে গোটা অংশের গাঁটে, শেষ উদ্ধৃত কথা আর প্রথম উপমার মাঝখানে। এই তিন আয়াতের কোনো শানে নুযুল প্রতিষ্ঠিত নেই, তাই অবস্থানটাই এদের ধরে রাখে। ইবনে কাসীরও এখানে কোনো শানে নুযুল বলেন না, তিনি এগুলোকে আগের বর্ণনারই ধারাবাহিকতা ধরেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Words They Choose",
          "bn": "যে শব্দগুলো তারা বেছে নেয়"
        },
        "p": [
          {
            "en": "The verb for their private meeting is khalaw, from the root kh-l-w, used of a place emptied of everyone else and of a person who withdraws to be alone. Khalaw does not report a meeting so much as an emptying: they got their leaders to themselves, with the room cleared of everyone else. The sentence itself marks the second room as the room without witnesses. The believers are given a meeting; the others are given a privacy. Almost everything the passage says about two faces is already carried in the difference between those two settings.",
            "bn": "গোপন বৈঠকের জন্য আয়াত যে ক্রিয়া নেয় তা খালাউ, মূল কাফ-লাম-ওয়াও থেকে। এ শব্দ বলা হয় এমন জায়গার কথা যেখানে আর কেউ নেই, আর এমন মানুষের কথা যে একা হতে সরে যায়। খালাউ ঠিক দেখা করার খবর দেয় না, দেয় ঘর খালি হওয়ার খবর। তারা সর্দারদের নিজেদের কাছে পেল, আর ঘর থেকে বাকি সবাই সরে গেল। বাক্যটাই দ্বিতীয় ঘরকে চিনিয়ে দেয় সাক্ষীহীন ঘর হিসেবে। মুমিনরা পায় একটা সাক্ষাৎ, আর ওরা পায় নিরিবিলি। দুই চেহারা নিয়ে এই অংশ যা যা বলবে, তার প্রায় পুরোটাই এই দুই পরিবেশের তফাতে ধরা আছে।"
          },
          {
            "en": "They withdraw to shayatinihim, their devils, from the root sh-t-n, which carries the sense of being far off and out of reach. Shaytan stands here not as the name of one being but as a description applied to persons, which is why the possessive works at all: these are their devils, the ones belonging to them. At-Tabari says the devils of every creation are the mischievous among them, human and jinn, and he cites 6:112, where every prophet is given enemies from the devils of mankind and jinn who whisper adorned speech to one another.",
            "bn": "তারা সরে যায় শায়াতিনিহিম-এর কাছে, নিজেদের শয়তানদের কাছে। মূল শিন-তা-নুন, যার ভেতরে আছে দূরে সরে যাওয়া, নাগালের বাইরে চলে যাওয়া। এখানে শয়তান কোনো একজনের নাম নয়, মানুষের গায়ে বসানো একটা বর্ণনা। তাই ‘তাদের শয়তান’ বলা যায়, নিজেদেরই লোক। তাবারি বলেন, প্রতিটি সৃষ্টির শয়তান হলো তাদের ভেতরের দুষ্ট অংশ, মানুষের ভেতরও আছে, জিনের ভেতরও আছে। তিনি দলিল হিসেবে আনেন 6:112 আয়াত, যেখানে প্রত্যেক নবীর জন্য মানুষ আর জিনের শয়তানদের শত্রু বানানো হয়েছে, যারা একে অপরের কাছে চিত্তাকর্ষক কথাবার্তা বলে।"
          },
          {
            "en": "Their excuse is innama nahnu mustahzi'un, we are nothing but mockers, where innama restricts the sentence to a single meaning: nothing serious is happening here, it is only a joke. The next verse answers with the same root, Allahu yastahzi'u bihim. Then 2:16 changes register altogether and speaks of trade. Ishtaraw is the verb for buying. What they bought is dalalah, error, and what they handed over is al-huda, guidance. The verse closes by saying their tijarah, their commerce, made no profit, and that they were not guided either.",
            "bn": "তাদের অজুহাত ইন্নামা নাহনু মুসতাহযিউন, আমরা তো নিছক ঠাট্টাকারী। ‘ইন্নামা’ বাক্যটাকে এক অর্থে বেঁধে ফেলে: এখানে গুরুতর কিছু ঘটছে না, স্রেফ মজা। পরের আয়াত জবাব দেয় ঠিক একই মূল দিয়ে, আল্লাহু ইয়াসতাহযিউ বিহিম। তারপর 2:16 আয়াত সুর পাল্টে ব্যবসার কথা তোলে। ইশতারাউ মানে কিনে নেওয়া। তারা কিনেছে দালালাহ, গোমরাহি, আর দাম দিয়েছে আল-হুদা, হেদায়েত। আয়াত শেষ হয় এই বলে, তাদের তিজারাহ অর্থাৎ কারবারে লাভ হয়নি, আর তারা সৎপথও পায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Mockery, Respite, and Trade",
          "bn": "উপহাস, অবকাশ আর কারবার"
        },
        "p": [
          {
            "en": "On the mockery attributed to Allah, Ibn Kathir gives the settled explanation. One word is used for the deed and for its recompense while the two meanings differ, exactly as 42:40 calls the repayment of an evil an evil like it, and 2:194 tells those transgressed against to transgress in the same measure. The first act is injustice and the second is justice, and the shared noun does not distinguish them. He adds that the scholars are agreed Allah does none of this in play; it is a just penalty shaped to match the crime.",
            "bn": "আল্লাহর দিকে যে উপহাসের কথা বলা হয়েছে, ইবনে কাসীর সেখানে চেনা ব্যাখ্যাটাই দেন। কাজ আর তার প্রতিদান, দুটোর জন্য একই শব্দ ব্যবহার হয়, অথচ অর্থ দুই রকম। ঠিক যেমন 42:40 আয়াত মন্দের বদলাকেও ‘মন্দ’ বলে, আর 2:194 আয়াত যার উপর বাড়াবাড়ি হয়েছে তাকে বলে সমান মাপে বাড়াবাড়ি করতে। প্রথম কাজটা জুলুম, দ্বিতীয়টা ইনসাফ, কিন্তু শব্দ এক বলে তফাতটা শব্দে ধরা পড়ে না। তিনি যোগ করেন, আলিমদের ইজমা এই যে আল্লাহ এসব খেলাচ্ছলে করেন না। এ হলো অপরাধের মাপে বানানো ন্যায্য শাস্তি।"
          },
          {
            "en": "At-Tabari reads the mocking as something that lands on the Day of Resurrection, and points to 57:13, where the hypocrites ask the believers to wait so that they may take some of their light and a wall goes up between them, and to 3:178, where a postponed reckoning only lets sin increase. On wa yamudduhum, as-Suddi reports from Ibn Abbas and Ibn Mas'ud (RA) that it means He gives them respite, while Mujahid reads it as an increase in their deviation. At-Tabari prefers the first and folds the second into it.",
            "bn": "তাবারি এই উপহাসকে দেখেন কিয়ামতের দিনে নেমে আসা জিনিস হিসেবে। তিনি দেখান 57:13 আয়াত, যেখানে মুনাফিকরা মুমিনদের বলে একটু দাঁড়াও, তোমাদের আলো থেকে কিছু নিই, আর তখনই তাদের মাঝে দেয়াল উঠে যায়। সঙ্গে দেখান 3:178 আয়াত, যেখানে হিসাব পিছিয়ে দেওয়া মানে কেবল গুনাহ বেড়ে যাওয়া। ‘ওয়া ইয়ামুদ্দুহুম’ নিয়ে সুদ্দি ইবনে আব্বাস আর ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেন, অর্থ হলো তিনি তাদের ঢিল দেন। মুজাহিদ পড়েন, তিনি তাদের সীমালঙ্ঘন বাড়িয়ে দেন। তাবারি প্রথমটাকেই বেছে নেন আর দ্বিতীয়টাকে তার ভেতরে ধরেন।"
          },
          {
            "en": "Ibn Kathir gathers the early readings of 2:16 into one statement: they exchanged guidance to buy misguidance, and the verse covers both those who believed and then disbelieved, as 63:3 describes, and those who preferred deviation from the start, as 41:17 says of Thamud. As-Sa'di presses the image harder. A man who trades a dinar for a dirham has lost; what then of one who trades a jewel for a dirham? Qatadah, in at-Tabari's report, said he had watched such men leave guidance for deviation and safety for fear.",
            "bn": "ইবনে কাসীর 2:16 আয়াতের পুরোনো ব্যাখ্যাগুলো এক কথায় গুছিয়ে দেন: তারা হেদায়েত দিয়ে গোমরাহি কিনেছে। আয়াত ধরে তাদেরও, যারা ঈমান এনে পরে কুফরি করেছে, 63:3 আয়াত যাদের কথা বলে; আর তাদেরও, যারা শুরু থেকেই বাঁকা পথ পছন্দ করেছে, 41:17 আয়াত সামূদ জাতির বেলায় যেমন বলে। সাদি ছবিটাকে আরও চেপে ধরেন। যে দিনার দিয়ে দিরহাম কেনে সে-ই তো ঠকল; তাহলে যে মণিমুক্তা দিয়ে দিরহাম কেনে, তার কী দশা? তাবারির বর্ণনায় কাতাদা বলেছেন, তিনি এমন লোক দেখেছেন যারা হেদায়েত ছেড়ে গোমরাহি নিয়েছে, নিরাপত্তা ছেড়ে নিয়েছে ভয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hadith on Two Faces",
          "bn": "দুই চেহারা নিয়ে এক হাদিস"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said: You will find among the worst of people on the Day of Resurrection, with Allah, the two-faced one who comes to these with one face and to those with another face. That is al-Bukhari 6058. It is honestly a thematic link and not an occasion of revelation, and Ibn Kathir does not attach it to these verses. But the hadith and the passage describe one man from two angles.",
            "bn": "বুখারি আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: কিয়ামতের দিন আল্লাহর কাছে তোমরা সবচেয়ে নিকৃষ্ট মানুষদের মধ্যে পাবে সেই দুই চেহারার লোককে, যে এদের কাছে আসে এক চেহারা নিয়ে আর ওদের কাছে আসে আরেক চেহারা নিয়ে। এটি বুখারি ৬০৫৮। সোজা কথায় এটা বিষয়ের মিল, শানে নুযুল নয়, আর ইবনে কাসীর হাদিসটিকে এই আয়াতগুলোর সঙ্গে জোড়েননি। তবু হাদিস আর আয়াত একই লোককে দুই দিক থেকে দেখাচ্ছে।"
          },
          {
            "en": "The verses follow him between the rooms; the hadith reports where the habit puts him at the end. Notice what neither text says. Neither calls him a liar in one room and a truthful man in the other, as though one face were the real one. Both treat the two faces as the single thing he is, and the verses show why: he is not undecided but committed, because the sentence he says in private opens with indeed we are with you. The public sentence is the performance, and the hadith grades the performance.",
            "bn": "আয়াত তাকে এক ঘর থেকে আরেক ঘরে অনুসরণ করে, আর হাদিস জানায় এই অভ্যাস শেষমেশ তাকে কোথায় নিয়ে দাঁড় করায়। খেয়াল করুন, দুটোর কোনোটাই কী বলেনি। কেউ বলেনি সে এক ঘরে মিথ্যুক আর অন্য ঘরে সত্যবাদী, যেন কোনো একটা চেহারা আসল। দুটোই দুই চেহারাকে তার একটাই পরিচয় ধরে। আয়াত কারণটাও দেখায়: লোকটা দোটানায় নেই, সে পক্ষ বেছে নিয়েছে, কারণ আড়ালে বলা তার কথাটা শুরু হয় ‘আমরা তোমাদের সাথেই আছি’ দিয়ে। প্রকাশ্যের কথাটাই অভিনয়, আর হাদিস সেই অভিনয়ের নম্বর দিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Follow Them",
          "bn": "যে আয়াতগুলো তাদের পিছু নেয়"
        },
        "p": [
          {
            "en": "4:142 says the hypocrites seek to deceive Allah and He deceives them, then shows the same doubleness inside the prayer itself: they rise to it lazily, seen by people, remembering Allah only a little. 63:3 explains the sealing that follows: they believed and then disbelieved, so their hearts were sealed and they do not understand. 6:112 is the verse at-Tabari brings, where the devils of mankind and jinn inspire one another with adorned speech. Between them these three give the motive, the mechanism and the company.",
            "bn": "4:142 আয়াত বলে, মুনাফিকরা আল্লাহকে ধোঁকা দিতে চায়, আর তিনি তাদের ধোঁকায় ফেলে দেন। তারপর একই দ্বিমুখিতা দেখায় নামাজের ভেতরেই: তারা দাঁড়ায় শিথিল হয়ে, লোক দেখানোর জন্য, আল্লাহকে স্মরণ করে সামান্যই। 63:3 আয়াত এরপরের মোহরটা বুঝিয়ে দেয়: তারা ঈমান এনেছিল, তারপর কুফরি করেছে, তাই তাদের অন্তরে মোহর পড়ে গেছে আর তারা কিছু বোঝে না। 6:112 আয়াত সেটাই যা তাবারি এনেছেন, যেখানে মানুষ আর জিনের শয়তানরা একে অপরের কাছে চিত্তাকর্ষক কথাবার্তা বলে। তিনটি মিলে দেয় উদ্দেশ্য, কারিগরি আর সঙ্গ।"
          },
          {
            "en": "Two more finish the picture. 9:65 records the same excuse in almost the same words, we were only conversing and playing, and answers it by naming what was being played with: Allah, His verses and His Messenger. 57:14 then carries the claim of 2:14 into the next life. There the hypocrites call across to the believers, were we not with you, and are told yes, but you afflicted yourselves and waited and doubted, and wishful thinking deluded you. The same claim, made in the other direction, and finally answered out loud.",
            "bn": "আরও দুটো আয়াত ছবিটা পূর্ণ করে। 9:65 আয়াত প্রায় একই ভাষায় সেই অজুহাত লিখে রাখে, আমরা তো হাসি-ঠাট্টা করছিলাম, আর জবাবে নাম ধরে বলে দেয় ঠাট্টাটা কাকে নিয়ে ছিল: আল্লাহ, তাঁর আয়াত আর তাঁর রাসূল। এরপর 57:14 আয়াত 2:14 আয়াতের দাবিটাকে পরকালে নিয়ে যায়। সেখানে মুনাফিকরা মুমিনদের ডেকে বলে, আমরা কি তোমাদের সঙ্গে ছিলাম না। জবাব আসে, হ্যাঁ, কিন্তু তোমরা নিজেরাই নিজেদের বিপদে ফেলেছ, অপেক্ষা করেছ, সন্দেহ করেছ, আর মিথ্যে আশা তোমাদের ভুলিয়ে রেখেছে। একই দাবি, উল্টো দিকে বলা, আর এবার সামনাসামনি জবাব পাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping One Face",
          "bn": "এক চেহারা ধরে রাখা"
        },
        "p": [
          {
            "en": "The test this passage offers is simple to run and uncomfortable to pass. Take a sentence you said today about faith, about a person, about your own intentions, and ask whether you would repeat it word for word in the other room. Not a softened version; the same sentence. Most of the gap in an ordinary life shows up in that one question, and it shows up long before anything as grave as hypocrisy: in a message about a friend, in a promise made to end a conversation, in an opinion held in one company and dropped in another.",
            "bn": "এই অংশ যে পরীক্ষা দেয়, তা চালানো সহজ, পাস করা কঠিন। আজ ঈমান নিয়ে, কোনো মানুষ নিয়ে, নিজের নিয়ত নিয়ে আপনি যা বলেছেন তার একটা কথা নিন। জিজ্ঞেস করুন, হুবহু এই কথাটা কি অন্য ঘরে গিয়ে বলতে পারবেন। নরম করে নয়, ঠিক এই কথাটাই। সাধারণ জীবনের ফাঁকটা এই একটা প্রশ্নেই বেরিয়ে আসে, আর নিফাকের মতো ভারী কিছু হওয়ার অনেক আগেই আসে: বন্ধুকে নিয়ে পাঠানো মেসেজে, কথা থামানোর জন্য দেওয়া ওয়াদায়, এক জায়গায় ধরে রাখা আর আরেক জায়গায় ছেড়ে দেওয়া মতামতে।"
          },
          {
            "en": "The second habit worth watching is the joke. We were only mocking is the oldest cover in the surah and it still works, because it lets a man say the thing and take it back in the same breath. When a remark about someone's prayer, about a person's practice, or about the Book itself is followed by I was only joking, the joke is not the problem. The sentence underneath it is, and 9:65 refuses the cover outright by asking what exactly was being laughed at.",
            "bn": "দ্বিতীয় যে অভ্যাসটা খেয়াল রাখা দরকার, তা হলো ঠাট্টা। ‘আমরা তো স্রেফ মজা করছিলাম’ এই সূরার সবচেয়ে পুরোনো আড়াল, আর আজও কাজ করে। কারণ এতে মানুষ কথাটা বলেও ফেলে, একই নিঃশ্বাসে ফিরিয়েও নেয়। কারও নামাজ নিয়ে, কারও আমল নিয়ে, কিংবা কিতাব নিয়ে বলা কথার পিছনে যখন ‘আরে মজা করছিলাম’ জুড়ে দেওয়া হয়, সমস্যাটা মজায় নয়। সমস্যা তার নিচের কথাটায়। 9:65 আয়াত এই আড়ালটা সরাসরি খারিজ করে দেয়, জিজ্ঞেস করে হাসিটা আসলে কাকে নিয়ে ছিল।"
          },
          {
            "en": "The third is company. The passage does not say the man changed his mind in private; it says he went somewhere. Look for the place where you become a different person, and ask whose approval you are buying there. As-Sa'di's exchange rate is the useful measure. Guidance is what you actually pay with, and it does not come back at the end of the evening. Ask what a week of that spending has bought, and whether the profit line in 2:16 has anything on it at all.",
            "bn": "তৃতীয়টা সঙ্গ। আয়াত বলেনি লোকটা আড়ালে গিয়ে মত বদলাল, বলেছে সে কোথাও গেল। খুঁজে বের করুন সেই জায়গাটা যেখানে আপনি অন্য মানুষ হয়ে যান, আর নিজেকে জিজ্ঞেস করুন সেখানে কার সন্তুষ্টি আপনি কিনছেন। সাদির দেওয়া দরটাই এখানে কাজের মাপকাঠি। আপনি দাম দিচ্ছেন হেদায়েত দিয়ে, আর রাত শেষে সেটা ফেরত আসে না। জিজ্ঞেস করুন, এক সপ্তাহের এই খরচে কী কিনলেন, আর 2:16 আয়াতের লাভের ঘরে আদৌ কিছু জমল কি না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for a Steady Heart",
          "bn": "অন্তর অটল রাখার ফরিয়াদ"
        },
        "p": [
          {
            "en": "The Quran gives the exact request these verses call for, in 3:8: Our Lord, let not our hearts deviate after You have guided us, and grant us from Yourself mercy; indeed, You are the Bestower. 2:16 describes a heart that has already traded its guidance away. 3:8 is the plea of people who have been guided and know they can lose it. Say it as it stands, in Arabic or in your own language, and say it while things are going well, because the passage describes a slide that nobody announces.",
            "bn": "এই আয়াতগুলো যে চাওয়াটা দাবি করে, কুরআন সেটা হুবহু দিয়ে রেখেছে 3:8 আয়াতে: হে আমাদের প্রতিপালক, সৎপথ দেখানোর পর তুমি আমাদের অন্তরগুলোকে বাঁকা করে দিও না, আমাদের তোমার কাছ থেকে রহমত দাও, তুমিই তো মহান দাতা। 2:16 আয়াত এমন এক হৃদয়ের কথা বলে যে হেদায়েত বেচে দিয়েছে। আর 3:8 হলো তাদের ফরিয়াদ, যারা হেদায়েত পেয়েছে এবং জানে যে তা হারানো যায়। আরবিতে বা নিজের ভাষায় যেমন আছে তেমনই বলুন, আর ভালো সময়েই বলুন, কারণ এই অংশ যে পিছলে পড়ার কথা বলছে তার কোনো ঘোষণা আগে থেকে আসে না।"
          },
          {
            "en": "A shorter plea can be made from the vocabulary of the verses themselves; it is composed here, not narrated: O Allah, give me one face. Do not let me sell Your guidance and buy error with it, and do not leave me wandering while I think I am walking. Say it where the passage puts the danger, in the second room rather than the first: at the end of an evening spent among people whose approval costs you something, before the door opens again on the rest of your life.",
            "bn": "আয়াতের নিজের শব্দ দিয়েই ছোট একটা মিনতি বানানো যায়। এটি এখানে বানানো, কোনো বর্ণনা নয়: হে আল্লাহ, আমাকে একটাই চেহারা দিন। আপনার হেদায়েত বেচে তা দিয়ে গোমরাহি কিনতে দেবেন না, আর আমি হাঁটছি ভেবে যেন ঘুরে না মরি। অংশটি যেখানে বিপদ দেখাচ্ছে, বলুন ঠিক সেখানে দাঁড়িয়েই, প্রথম ঘরে নয়, দ্বিতীয় ঘরে: যাদের সন্তুষ্টি আপনার কিছু না কিছু খরচ করায় তাদের মাঝে সন্ধ্যাটা ফুরিয়ে আসার সময়, বাকি জীবনের দরজা আবার খুলে যাওয়ার আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ask Yourself Tonight",
          "bn": "আজ রাতে নিজেকে জিজ্ঞেস করুন"
        },
        "p": [
          {
            "en": "Which sentence that I said this week would I refuse to have repeated, unedited, to the other people in my life? When I add that I was only joking, what did I actually want to say and not want to own? Is there a room I walk into where a different version of me starts talking, and when did I last notice that happening while it happened, rather than remembering it afterwards on the way home?",
            "bn": "এ সপ্তাহে বলা কোন কথাটা আমি চাইব না যে অদলবদল ছাড়া আমার জীবনের অন্য মানুষদের কানে যাক? ‘আমি তো মজা করছিলাম’ যোগ করার সময় আসলে কোন কথাটা আমি বলতে চেয়েছিলাম অথচ দায় নিতে চাইনি? এমন কোনো ঘর কি আছে যেখানে ঢুকলে আমার অন্য একটা সংস্করণ কথা বলা শুরু করে, আর সেটা ঘটার সময়েই শেষ কবে টের পেয়েছি, ফেরার পথে মনে পড়া নয়?"
          },
          {
            "en": "2:16 calls it a purchase rather than a slip. What have I bought this month with guidance I already had, and what did it turn out to be worth once the evening was over? And if respite is not the same thing as approval, what am I currently reading as approval simply because nothing has gone wrong yet, and how long have I been reading it that way?",
            "bn": "2:16 আয়াত একে বলছে কেনাবেচা, পা ফসকে যাওয়া নয়। হাতে থাকা হেদায়েত খরচ করে এ মাসে আমি কী কিনলাম, আর সন্ধ্যা ফুরিয়ে যাওয়ার পর সেটার দাম কত দাঁড়াল? আর ঢিল দেওয়া যদি সম্মতি না হয়, তাহলে স্রেফ এখনো কিছু বিগড়ায়নি বলে আমি কোনটাকে সম্মতি ধরে বসে আছি, আর কত দিন ধরে ওভাবেই ধরে আছি?"
          }
        ]
      }
    ]
  },
  "2:22": {
    "sections": [
      {
        "h": {
          "en": "The First Command, the First Prohibition",
          "bn": "প্রথম আদেশ, প্রথম নিষেধ"
        },
        "p": [
          {
            "en": "Ibn Kathir notes that the first imperative addressed to human beings in the order of the mushaf is 2:21, worship your Lord who created you and those before you, and that the first prohibition follows here. That placement is worth holding. Before any ruling on food, marriage, war or wealth, the Book issues one instruction and one ban, and they are two sides of a single matter: give worship to Him, and do not hand it to anything else.",
            "bn": "ইবনে কাসীর বলেন, মুসহাফের ক্রমে মানুষকে দেওয়া প্রথম আদেশ হলো 2:21 আয়াত: তোমাদের সেই রবের ইবাদত করো, যিনি তোমাদের ও তোমাদের আগের লোকদের সৃষ্টি করেছেন। আর প্রথম নিষেধটা আসে ঠিক এখানে। জায়গাটা মনে রাখার মতো। খাবার, বিয়ে, যুদ্ধ বা সম্পদের কোনো বিধান আসার আগেই কিতাব একটা আদেশ দেয় আর একটা নিষেধ করে। দুটো একই কথার দুই পিঠ: ইবাদত তাঁকেই দাও, অন্য কিছুকে দিয়ো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Bed and a Ceiling",
          "bn": "বিছানা আর ছাদ"
        },
        "p": [
          {
            "en": "The evidence offered is domestic, not astronomical. He made the earth firash for you, the word for bedding spread out to lie on, and the sky bina', a built structure raised over it. Put together they describe a house: a floor prepared for rest and a roof above it. The argument is not that these facts are surprising. It is that they are so ordinary that we walk across the floor and under the roof all day without registering that someone laid them out.",
            "bn": "এখানে যে দলিল দেওয়া হয়েছে, তা আকাশের গ্রহ-নক্ষত্রের হিসাব নয়, ঘর-গৃহস্থালির কথা। তিনি তোমাদের জন্য যমীনকে করেছেন 'ফিরাশ'। শব্দটার মানে শোয়ার জন্য বিছিয়ে দেওয়া বিছানা। আর আকাশকে করেছেন 'বিনা', তার ওপরে তোলা এক নির্মাণ। দুটো মিলিয়ে একটা ঘরের ছবি: বিশ্রামের জন্য তৈরি মেঝে, আর মাথার ওপর ছাদ। যুক্তিটা এই নয় যে এসব জিনিস খুব অবাক করার মতো। যুক্তিটা হলো, এগুলো এতই সাধারণ যে আমরা সারা দিন এই মেঝেতে হাঁটি, এই ছাদের নিচে থাকি, অথচ খেয়ালই করি না যে কেউ এগুলো বিছিয়ে দিয়েছেন।"
          },
          {
            "en": "Then the chain of provision: He sent down water from the sky and brought out by it fruits as rizq for you. Notice that the sentence does not stop at rain and plants. It runs all the way to your table and names what arrives there as provision addressed to you. The Arabic marks this twice, once at the start with lakum, for you, and once at the end with lakum again. The whole arrangement is framed as something done on your behalf.",
            "bn": "তারপর রিযিকের ধারা: তিনি আকাশ থেকে পানি নামিয়েছেন, আর তা দিয়ে ফলমূল বের করেছেন তোমাদের রিযিক হিসেবে। খেয়াল করুন, বাক্যটা বৃষ্টি আর গাছপালায় থেমে যায় না। এটা চলে আসে একেবারে আপনার খাবারের থালা পর্যন্ত, আর সেখানে যা পৌঁছায় তাকে বলে আপনার নামে পাঠানো রিযিক। আরবিতে কথাটা দুবার চিহ্নিত: শুরুতে একবার 'লাকুম', অর্থাৎ তোমাদের জন্য, আর শেষে আবার 'লাকুম'। পুরো ব্যবস্থাটাকেই দেখানো হয়েছে আপনার জন্য করা কাজ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb That Turns Around",
          "bn": "যে ক্রিয়াপদ ঘুরে দাঁড়ায়"
        },
        "p": [
          {
            "en": "The prohibition reuses the verse's own opening verb, and the effect is easy to miss in translation. He is the one who made, ja'ala, the earth and the sky for you. So do not make, taj'alu, rivals for Allah. The same act of assigning a role is being described twice: He assigned these things to your benefit, so do not assign His place to them. Read that way the ban is not an arbitrary rule but the exact reversal of what has just been established.",
            "bn": "নিষেধের বাক্যে আয়াতের শুরুর ক্রিয়াটাই আবার এসেছে, আর অনুবাদে এই মিলটা সহজেই হারিয়ে যায়। তিনিই তোমাদের জন্য যমীন ও আকাশকে বানিয়েছেন, 'জাআলা'। তাই তোমরা আল্লাহর সমকক্ষ বানিয়ো না, 'তাজআলূ'। একই কাজ, অর্থাৎ কাউকে একটা ভূমিকায় বসানো, দুবার বলা হচ্ছে। তিনি এসব জিনিস তোমাদের উপকারে বসিয়েছেন, তাই তোমরা এগুলোকে তাঁর আসনে বসিয়ো না। এভাবে পড়লে নিষেধটা খেয়ালখুশির কোনো নিয়ম নয়, বরং একটু আগে যা বলা হলো, ঠিক তারই উল্টো পিঠ।"
          },
          {
            "en": "Andad is the plural of nidd, a rival or a match, something set up as an equal in a matter. It is a broader word than idol. A nidd is whatever is given a share of the reliance, fear, love or obedience that belongs to Allah alone. The Musnad of Ahmad records from Ibn Abbas (RA) that when a man said to the Prophet ﷺ, what Allah wills and what you will, he replied, have you made me a rival to Allah, and told him to say what Allah alone wills.",
            "bn": "'আনদাদ' হলো 'নিদ'-এর বহুবচন। নিদ মানে প্রতিদ্বন্দ্বী বা সমকক্ষ, কোনো ব্যাপারে যাকে সমান করে দাঁড় করানো হয়। শব্দটা 'মূর্তি'র চেয়ে অনেক বড় পরিসরের। যে ভরসা, ভয়, ভালোবাসা বা আনুগত্য কেবল আল্লাহর প্রাপ্য, তার ভাগ যাকেই দেওয়া হয়, সে-ই 'নিদ'। ইমাম আহমদের মুসনাদে ইবনে আব্বাস (রাঃ) থেকে বর্ণিত আছে: এক লোক নবী ﷺ-কে বলল, আল্লাহ যা চান আর আপনি যা চান। তিনি বললেন, তুমি কি আমাকে আল্লাহর সমকক্ষ বানিয়ে দিলে? আর তাকে বলতে বললেন: কেবল আল্লাহ যা চান।"
          }
        ]
      },
      {
        "h": {
          "en": "While You Know",
          "bn": "অথচ তোমরা জানো"
        },
        "p": [
          {
            "en": "The verse closes on two Arabic words that change the nature of the charge: wa antum ta'lamun, while you know. The people first addressed were not ignorant of Allah. They acknowledged Him as Creator and still divided their worship, which is why 35:3 can ask them whether there is any creator besides Allah who provides for them from the sky and the earth. The Quran rarely treats shirk as an information problem. It treats it as a failure to act on knowledge already held.",
            "bn": "আয়াত শেষ হয় দুটি আরবি শব্দে, আর এতেই অভিযোগের ধরন বদলে যায়: 'ওয়া আনতুম তা'লামূন', অথচ তোমরা জানো। প্রথম যাদের উদ্দেশে আয়াতটি নাজিল হয়, তারা আল্লাহকে চিনত না, এমন নয়। তারা তাঁকে স্রষ্টা বলে মানত, তবু ইবাদত ভাগ করে দিত। এ কারণেই 35:3 আয়াত তাদের জিজ্ঞেস করতে পারে: আল্লাহ ছাড়া আর কোনো স্রষ্টা আছে কি, যে আকাশ ও যমীন থেকে তোমাদের রিযিক দেয়? কুরআন শিরককে খুব কমই না-জানার সমস্যা বলে দেখে। তার চোখে শিরক হলো জানা কথা অনুযায়ী না চলা।"
          }
        ]
      },
      {
        "h": {
          "en": "What a Rival Looks Like Now",
          "bn": "আজ সমকক্ষ দেখতে কেমন"
        },
        "p": [
          {
            "en": "Few readers today keep a carved figure at home, which can make the prohibition feel historical. Luqman's warning in 31:13 keeps it current by calling shirk a great wrong rather than a foreign custom. The question the verse leaves is functional: what actually holds the place of ultimate reliance? A salary, a passport, a reputation, a person whose approval decides your choices. Anything trusted the way Allah is meant to be trusted has quietly been assigned a share of what 2:22 forbids.",
            "bn": "আজ খুব কম পাঠকের ঘরেই খোদাই করা মূর্তি থাকে, তাই নিষেধটাকে পুরোনো দিনের ব্যাপার মনে হতে পারে। 31:13 আয়াতে লুকমানের উপদেশ একে আজও জীবন্ত রাখে, কারণ সেখানে শিরককে বলা হয়েছে মহা জুলুম, কোনো ভিনদেশি রীতি নয়। আয়াতটা যে প্রশ্ন রেখে যায়, তা কাজের প্রশ্ন: শেষ ভরসার জায়গাটা আসলে কে দখল করে আছে? বেতন, পাসপোর্ট, সুনাম, কিংবা এমন কেউ, যার পছন্দ-অপছন্দে আপনার সিদ্ধান্ত ঠিক হয়। আল্লাহর ওপর যেভাবে ভরসা করার কথা, সেভাবে যার ওপরই ভরসা করা হয়, চুপিসারে তাকে সেই ভাগ দিয়ে দেওয়া হয়েছে, যা 2:22 আয়াত নিষেধ করে।"
          },
          {
            "en": "Al-Bukhari and Muslim both narrate from Mu'adh ibn Jabal (RA) that the Prophet ﷺ told him the right of Allah upon His servants is that they worship Him and associate nothing with Him. The verse gives the same claim its evidence rather than its wording. Every meal already eaten and every night already slept through is the argument. Gratitude noticed at the level of the floor and the roof is what keeps worship from being divided.",
            "bn": "ইমাম বুখারী ও মুসলিম উভয়েই মুআয ইবনে জাবাল (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ তাঁকে বলেছিলেন, বান্দাদের ওপর আল্লাহর হক হলো তারা তাঁরই ইবাদত করবে এবং তাঁর সঙ্গে কিছুকে শরিক করবে না। আয়াত একই কথা বলে, তবে শব্দে নয়, প্রমাণে। এ পর্যন্ত যত বেলা খেয়েছেন, যত রাত ঘুমিয়ে কাটিয়েছেন, সবই সেই প্রমাণ। মেঝে আর ছাদের মতো সাধারণ জিনিসে যে কৃতজ্ঞতা জাগে, সেটাই ইবাদতকে ভাগ হয়ে যেতে দেয় না।"
          }
        ]
      }
    ]
  },
  "2:23-24": {
    "sections": [
      {
        "h": {
          "en": "Where the Challenge Falls",
          "bn": "চ্যালেঞ্জ কোথায় এসে পড়ে"
        },
        "p": [
          {
            "en": "2:21 calls all mankind to worship the Lord who created them, and 2:22 sets out the evidence: the earth as a bed, the sky as a ceiling, rain, and fruit brought out as provision. Having settled that nothing but Allah deserves worship, Ibn Kathir says, the passage turns to prove the other half of the message, that the man delivering it was sent. The challenge is therefore not an isolated dare thrown at opponents. It is the second pillar of an argument the surah has only just begun.",
            "bn": "2:21 আয়াত সমস্ত মানুষকে ডাকে তাদের সৃষ্টিকর্তা রবের ইবাদতের দিকে, আর 2:22 আয়াত দলিল সাজিয়ে দেয়: যমীন বিছানা, আকাশ ছাদ, বৃষ্টি, আর রিযিক হিসেবে বের করা ফলমূল। ইবনে কাসীর বলেন, আল্লাহ ছাড়া কেউ ইবাদতের যোগ্য নয় এ কথা পাকা করার পর অংশটি বার্তার বাকি অর্ধেক প্রমাণ করতে নামে, অর্থাৎ যিনি এ বার্তা আনছেন তিনি পাঠানো লোক। তাই এ চ্যালেঞ্জ বিরোধীদের দিকে ছুড়ে দেওয়া বিচ্ছিন্ন কোনো হুংকার নয়। সূরা এইমাত্র যে যুক্তি শুরু করেছে, এ তারই দ্বিতীয় খুঁটি।"
          },
          {
            "en": "Ibn Kathir notes that the same challenge had already come down in Makkah, in 28:49, 17:88, 11:13 and 10:38, and that Allah then repeated it in Madinah in this verse, addressing the Arab disbelievers, the most eloquent of all nations. The repetition is the interesting part. The audience had changed and the terms had not. No occasion of revelation is reported for the verse itself, so its placement is what carries it: it stands exactly where a reader newly told to worship one God would ask why he should believe the man telling him so.",
            "bn": "ইবনে কাসীর জানান, একই চ্যালেঞ্জ মক্কাতেই নেমে গিয়েছিল, 28:49, 17:88, 11:13 আর 10:38 আয়াতে। এরপর আল্লাহ মদিনায় এই আয়াতে সেটাই আবার তোলেন, আরব কাফিরদের উদ্দেশ করে, যারা ছিল সব জাতির চেয়ে বেশি ভাষাদক্ষ। মজার জায়গা এই পুনরাবৃত্তিতেই। শ্রোতা বদলেছে, শর্ত বদলায়নি। আয়াতটির নিজের কোনো শানে নুযুল বর্ণিত নেই, তাই এর অবস্থানই একে ধরে রাখে। যে পাঠককে এইমাত্র এক আল্লাহর ইবাদতের কথা বলা হলো, সে ঠিক এখানেই জিজ্ঞেস করবে, যে বলছে তাকে বিশ্বাস করব কেন।"
          },
          {
            "en": "Then 2:25 swings the other way with good news of gardens beneath which rivers flow for those who believe and do righteous deeds, and 2:26 answers a complaint about the Book's parables of a mosquito or something smaller. Taken together the four verses are a short course in how the Quran handles objection. It names the test, it states the stake, it shows the reward, and it declines to be embarrassed about its own manner of speaking.",
            "bn": "এরপর 2:25 আয়াত উল্টো দিকে ঘুরে সুসংবাদ দেয়, যারা ঈমান আনে ও নেক আমল করে তাদের জন্য জান্নাত, যার নিচে নদী বয়। আর 2:26 আয়াত জবাব দেয় সেই অভিযোগের, যে কিতাব মশা বা তার চেয়েও ছোট কিছুর উপমা টানে কেন। চার আয়াত একসাথে পড়লে বোঝা যায় কুরআন আপত্তি কীভাবে সামলায়। সে পরীক্ষাটা বলে দেয়, দামটা ধরিয়ে দেয়, পুরস্কারটা দেখায়, আর নিজের বলার ধরন নিয়ে কোনো লজ্জা রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Rayb, Abdina, Shuhada",
          "bn": "রায়ব, আবদিনা, শুহাদা"
        },
        "p": [
          {
            "en": "The doubt named here is rayb, not shakk. Rayb is the restless kind of doubt, suspicion that will not sit still, and the surah has already used the word: 2:2 declares the Book to be one in which there is no rayb. So the challenge opens by taking a word from the surah's own second verse and handing it back to the objector. If you are in the very condition this Book claims to be free of, the verse says, then here is what you should do about it.",
            "bn": "এখানে যে সন্দেহের নাম নেওয়া হয়েছে তা রায়ব, শাক নয়। রায়ব হলো অস্থির ধরনের সন্দেহ, যে খটকা মনের ভেতর থিতু হয় না। সূরা শব্দটা আগেই ব্যবহার করেছে, 2:2 আয়াত ঘোষণা করে এ কিতাবে কোনো রায়ব নেই। তাই চ্যালেঞ্জ শুরু হয় সূরার দ্বিতীয় আয়াতের শব্দটাই তুলে এনে আপত্তিকারীর হাতে ফেরত দিয়ে। এ কিতাব যে জিনিস থেকে মুক্ত বলে দাবি করে, আপনি যদি ঠিক সেই অবস্থাতেই থাকেন, তবে আয়াত বলে দিচ্ছে এখন কী করতে হবে।"
          },
          {
            "en": "What was sent down came upon abdina, Our servant. At the exact point where the Prophet's truthfulness is on trial, the title chosen for him is servanthood rather than messenger or prophet. As-Sa'di reads this as deliberate honour, and points out that the same title carries the two highest moments in his life: 17:1 for the night journey, and 25:1 for the sending down of the Criterion. The challenge also rests on it. He is a servant, a man they had known since boyhood, not a being of another kind.",
            "bn": "যা নাজিল হয়েছে, তা এসেছে আবদিনা-র উপর, আমার বান্দার উপর। ঠিক যে জায়গায় নবী ﷺ-এর সত্যতা যাচাই হচ্ছে, সেখানে তাঁর পরিচয় হিসেবে বেছে নেওয়া হয়েছে বান্দা হওয়া, রাসূল বা নবী নয়। সাদি একে দেখেন ইচ্ছাকৃত সম্মান হিসেবে, আর দেখান যে তাঁর জীবনের দুই সর্বোচ্চ মুহূর্তেও একই পরিচয় বসেছে: 17:1 আয়াতে রাতের সফরে, আর 25:1 আয়াতে ফুরকান নাজিলের কথায়। চ্যালেঞ্জটাও এরই উপর দাঁড়ানো। তিনি একজন বান্দা, ছেলেবেলা থেকে যাকে ওরা চেনে, আলাদা কোনো জাতের সৃষ্টি নন।"
          },
          {
            "en": "Then wadu shuhada'akum, call your witnesses, min dun Allah, from other than Allah. Ibn Abbas (RA) glossed shuhada' as aids. Mujahid took it to mean people, that is, eloquent and knowledgeable men who would testify for them. As-Suddi reports from Abu Malik that it means their partners, the deities they would call upon for support. The permission is as wide as the language allows, and exactly one helper is ruled out. Then 2:24 answers with lan, the strongest negation of the future that Arabic has: you will not do it, and you never will.",
            "bn": "তারপর ওয়াদউ শুহাদাআকুম, তোমাদের সাক্ষীদের ডাকো, মিন দুনিল্লাহ, আল্লাহ ছাড়া। ইবনে আব্বাস (রাঃ) শুহাদা শব্দের ব্যাখ্যায় বলেছেন সাহায্যকারী। মুজাহিদ নিয়েছেন মানুষ অর্থে, অর্থাৎ ভাষায় দক্ষ ও জ্ঞানী লোক, যারা তাদের পক্ষে সাক্ষ্য দেবে। সুদ্দি আবু মালিক থেকে বর্ণনা করেন, অর্থ হলো তাদের শরিক, সাহায্যের জন্য যাদের তারা ডাকত। অনুমতিটা ভাষা যতদূর দিতে পারে ততদূর খোলা, আর ঠিক একজনকেই বাদ রাখা হয়েছে। এরপর 2:24 আয়াত জবাব দেয় ‘লান’ দিয়ে, ভবিষ্যৎ নাকচ করার সবচেয়ে জোরালো শব্দ আরবিতে যা আছে: তোমরা পারবে না, আর কক্ষনো পারবেও না।"
          }
        ]
      },
      {
        "h": {
          "en": "How Large the Dare Is",
          "bn": "চ্যালেঞ্জটা আসলে কত বড়"
        },
        "p": [
          {
            "en": "The phrase surah min mithlih can be read two ways, and the reading decides how large the challenge is. It can mean a surah like the Quran, or a surah from one like him, that is, from another unlettered man. Ibn Kathir takes the first, and reports that this is also the tafsir of Mujahid, Qatadah, at-Tabari, az-Zamakhshari and ar-Razi. Ar-Razi adds that it is the reading of Umar, Ibn Mas'ud, Ibn Abbas (RA), al-Hasan al-Basri and most of the scholars, and prefers it because it makes the challenge complete.",
            "bn": "‘সূরাতিম মিম মিসলিহি’ কথাটা দুইভাবে পড়া যায়, আর কোন পাঠ নেবেন তার উপরই নির্ভর করে চ্যালেঞ্জটা কত বড়। অর্থ হতে পারে কুরআনের মতো সূরা, আবার হতে পারে তাঁর মতো কারও কাছ থেকে আনা সূরা, অর্থাৎ লেখাপড়া না জানা আরেকজনের কাছ থেকে। ইবনে কাসীর প্রথমটাই নেন, আর জানান এটাই মুজাহিদ, কাতাদা, তাবারি, যামাখশারি আর রাযির ব্যাখ্যা। রাযি যোগ করেন, এটাই উমর, ইবনে মাসউদ, ইবনে আব্বাস (রাঃ), হাসান বসরি আর অধিকাংশ আলিমের পাঠ। তিনি এ পাঠকেই এগিয়ে রাখেন, কারণ এতেই চ্যালেঞ্জ পূর্ণ হয়।"
          },
          {
            "en": "His reasoning is that a dare aimed only at the unlettered would prove little, so the terms are set at the level of anyone who can use the language. Ibn Kathir then draws attention to the clause fa in lam taf'alu wa lan taf'alu, and calls it a miracle in its own right: a plain statement, made once, that nobody would ever meet the terms, and it has stood without correction since. He adds that short surahs and long ones alike fall within the challenge.",
            "bn": "তাঁর যুক্তি হলো, চ্যালেঞ্জ যদি কেবল নিরক্ষরদের দিকে ছোড়া হতো তবে তা সামান্যই প্রমাণ করত। তাই শর্ত বাঁধা হয়েছে এমন মাপে, যাতে ভাষা যে চালাতে জানে সে-ই ধরা পড়ে। এরপর ইবনে কাসীর ‘ফাইন লাম তাফআলু ওয়া লান তাফআলু’ কথাটার দিকে নজর টানেন, আর একে বলেন নিজেই এক মুজিযা: একবার বলে দেওয়া সোজা এক কথা, যে কেউ কোনোদিন এ শর্ত পূরণ করবে না। কথাটা আজও শুধরাতে হয়নি। তিনি আরও বলেন, ছোট সূরা আর বড় সূরা দুটোই চ্যালেঞ্জের ভেতরে পড়ে।"
          },
          {
            "en": "As-Sa'di reads the whole passage as a fair criterion rather than a taunt. The man they are asked to match is one of them, known since birth, who neither reads nor writes; they are the finest speakers of the language and they hate him enough to want him refuted. If they can produce the like they were truthful; if not, that inability is itself the great sign. One point stays inside its own frame: when Ibn Kathir calls them the most eloquent of all nations, he means the first audience, Arabs asked to match a Book in their own language.",
            "bn": "সাদি গোটা অংশটাকে পড়েন খোঁচা হিসেবে নয়, ইনসাফের মাপকাঠি হিসেবে। যাঁর সমকক্ষ কিছু আনতে বলা হচ্ছে তিনি ওদেরই একজন, জন্ম থেকে চেনা, যিনি পড়তে বা লিখতে জানেন না। আর ওরা ভাষার সেরা কারিগর, আর তাঁকে খণ্ডন করার মতো যথেষ্ট বিদ্বেষও ওদের আছে। সমকক্ষ কিছু আনতে পারলে ওরাই সত্যবাদী। না পারলে সেই অক্ষমতাই বড় নিদর্শন। একটা কথা নিজের গণ্ডিতেই রাখা দরকার: ইবনে কাসীর যখন তাদের বলেন সব জাতির চেয়ে বেশি ভাষাদক্ষ, তখন তিনি প্রথম শ্রোতাদের কথাই বলছেন, সেই আরবদের কথা, যাদের নিজেদের ভাষার কিতাবের সমকক্ষ কিছু আনতে বলা হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Miracle That Outlives Witnesses",
          "bn": "সাক্ষীদের পরেও টিকে থাকা নিদর্শন"
        },
        "p": [
          {
            "en": "The Two Sahihs record from Abu Hurayrah (RA) that the Prophet ﷺ said, in Muslim's wording: Every Prophet was given a miracle of the kind that brings mankind to faith, and what I was given is a revelation that Allah sent down to me; so I hope that I will have the most followers on the Day of Resurrection. Ibn Kathir brings this narration at exactly this verse, and it explains why a challenge of this shape exists at all.",
            "bn": "বুখারি ও মুসলিম দুই সহিহ গ্রন্থেই আবু হুরায়রা (রাঃ) থেকে বর্ণিত আছে, নবী ﷺ বলেছেন, মুসলিমের ভাষায়: প্রত্যেক নবীকে এমন নিদর্শন দেওয়া হয়েছে যা দেখে মানুষ ঈমান আনে, আর আমাকে যা দেওয়া হয়েছে তা ওহি, যা আল্লাহ আমার কাছে নাজিল করেছেন। তাই আমি আশা করি কিয়ামতের দিন আমার অনুসারীই হবে সবচেয়ে বেশি। ইবনে কাসীর ঠিক এই আয়াতেই বর্ণনাটি আনেন, আর এতেই বোঝা যায় এমন ধরনের চ্যালেঞ্জ কেন আছে।"
          },
          {
            "en": "Other prophets were given signs that their own generation watched: a staff, a healing, a she-camel. Those signs ended with the eyewitnesses. A recited Book does not end that way. It can be put into the hands of a stranger many centuries later, and it arrives with its own test attached, which is why the hadith ties the nature of the miracle to the size of the following.",
            "bn": "অন্য নবীদের এমন নিদর্শন দেওয়া হয়েছিল যা তাঁদের নিজেদের যুগের মানুষ চোখে দেখেছে: একটা লাঠি, একজনের সুস্থ হয়ে ওঠা, একটা উটনী। সেসব নিদর্শন শেষ হয়ে গেছে চাক্ষুষ সাক্ষীদের সাথেই। পড়া হয় এমন কিতাব ওভাবে শেষ হয় না। বহু শতাব্দী পরের অচেনা কারও হাতে তা তুলে দেওয়া যায়, আর সঙ্গে তার নিজের পরীক্ষাটাও যায়। এ কারণেই হাদিস নিদর্শনের ধরনের সঙ্গে অনুসারীর সংখ্যা জুড়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Door, Five Sides",
          "bn": "একই দরজা, পাঁচ দিক থেকে"
        },
        "p": [
          {
            "en": "10:38 and 11:13 stand closest to this verse. Both answer the accusation that he invented it. Both carry the same condition at the end, if you should be truthful, and both allow the same help, whomever you can call upon besides Allah. What separates them is the quantity demanded: 10:38 asks for one surah like it, while 11:13 asks for ten invented surahs like it. Set beside 2:23, the three differ in how much is required and agree entirely on who may be brought in to help.",
            "bn": "এ আয়াতের সবচেয়ে কাছে দাঁড়িয়ে আছে 10:38 আর 11:13। দুটোই জবাব দেয় সেই অভিযোগের, যে তিনি নিজে বানিয়েছেন। দুটোরই শেষে একই শর্ত, যদি তোমরা সত্যবাদী হও, আর দুটোতেই একই সাহায্যের অনুমতি, আল্লাহ ছাড়া যাকে পারো ডেকে নাও। তফাত শুধু পরিমাণে: 10:38 চায় এর মতো একটা সূরা, আর 11:13 চায় এর মতো বানানো দশটা সূরা। 2:23 আয়াতের পাশে রাখলে তিনটির তফাত কেবল দাবির পরিমাণে, আর সাহায্যে কাকে ডাকা যাবে সে বিষয়ে তিনটিই একমত।"
          },
          {
            "en": "52:34 is shorter and harder. It keeps the condition, if they should be truthful, and drops any mention of helpers: let them produce a statement like it. 17:88 moves the opposite way and widens the helpers as far as they can go, saying that if mankind and the jinn gathered together to produce the like of this Quran they could not, even if they were assistants to one another. 28:49 changes the object entirely: bring a scripture from Allah more guiding than these two, and I will follow it.",
            "bn": "52:34 আয়াত ছোট, আর বেশি কঠিন। শর্তটা রাখে, যদি তারা সত্যবাদী হয়, কিন্তু সাহায্যকারীর কথা একেবারেই তোলে না: এ রকম একটা কালাম তারা নিয়ে আসুক। 17:88 আয়াত উল্টো দিকে যায় আর সাহায্যকারীর পরিসর যতদূর সম্ভব বাড়িয়ে দেয়, বলে দেয় মানুষ আর জিন সবাই একজোট হয়েও এ কুরআনের মতো কিছু আনতে পারবে না, একে অপরের সাহায্যকারী হলেও নয়। আর 28:49 আয়াত চাওয়াটাই বদলে দেয়: আল্লাহর কাছ থেকে এ দুই কিতাবের চেয়ে বেশি পথ দেখায় এমন কিতাব আনো, আমি সেটাই মেনে চলব।"
          },
          {
            "en": "Together the five close one door from different sides: with whatever help you can gather, with ten times the material, with no helpers mentioned at all, with every speaking creature working in concert, and with a better book from any source whatever. All five came down within the years of revelation itself, not spread over later centuries, and the terms were never quietly narrowed along the way. A claim that keeps shrinking is usually a claim under pressure.",
            "bn": "পাঁচটি মিলে একই দরজা বন্ধ করে ভিন্ন ভিন্ন দিক থেকে: যত সাহায্য জোগাড় করতে পারো তা নিয়ে, দশগুণ উপকরণ নিয়ে, কোনো সাহায্যকারীর নাম ছাড়াই, কথা বলতে জানে এমন সব সৃষ্টি একসঙ্গে নিয়ে, আর যেকোনো জায়গা থেকে আরও ভালো কিতাব এনে। পাঁচটিই নেমেছে ওহি নাজিলের কালের ভেতরেই, পরের শতাব্দীগুলোতে ছড়িয়ে নয়, আর পথে কোথাও শর্তগুলো চুপচাপ ছোট করে আনা হয়নি। যে দাবি ক্রমেই ছোট হতে থাকে, সে দাবি সাধারণত চাপে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "When Doubt Arrives",
          "bn": "সন্দেহ এলে"
        },
        "p": [
          {
            "en": "The verse assumes doubt will come and does not scold it. It says, if you are in rayb, then do this; it does not say, if you are in rayb, you are finished. That distinction is worth holding on a night when belief feels thin. The Quran's own instruction to a doubting reader is to test the claim rather than to suppress the feeling, and the test it names is one anybody can begin without a teacher, a library or a public argument.",
            "bn": "আয়াত ধরেই নেয় সন্দেহ আসবে, আর তা নিয়ে ধমক দেয় না। বলে, রায়বে থাকলে এটা করো; বলে না, রায়বে থাকলে তোমার সব শেষ। যে রাতে ঈমান পাতলা মনে হয়, সেই রাতে এই তফাতটা ধরে রাখার মতো। সন্দিহান পাঠককে কুরআনের নিজের নির্দেশ হলো অনুভূতিটা চেপে রাখা নয়, দাবিটা যাচাই করা। আর যে যাচাইয়ের কথা সে বলছে, তা শুরু করতে কোনো উস্তাদ, কোনো পাঠাগার বা কোনো প্রকাশ্য তর্কের দরকার হয় না।"
          },
          {
            "en": "In practice that means reading the Book as itself rather than only reading about it. Take one short surah and stay with it until you can say what it does and how it turns. Then try to write four lines that do the same work in a language you actually know well. Most people abandon the exercise within an hour, and the abandonment is the useful part, because it makes the distance measurable instead of theoretical.",
            "bn": "কাজে এর মানে হলো কিতাব সম্পর্কে পড়ার বদলে কিতাবটাই পড়া। ছোট একটা সূরা নিন, আর তার সাথে ততক্ষণ থাকুন যতক্ষণ না বলতে পারেন সেটা কী করে আর কোথায় গিয়ে মোড় নেয়। তারপর নিজের ভালো জানা ভাষায় চার লাইন লিখে দেখুন, যা একই কাজ করে। বেশিরভাগ মানুষ ঘণ্টাখানেকের মধ্যেই চেষ্টা ছেড়ে দেন, আর এই ছেড়ে দেওয়াটাই আসল লাভ। কারণ তখন দূরত্বটা তত্ত্ব থাকে না, মাপা যায়।"
          },
          {
            "en": "2:24 refuses to let the matter stay literary. Having named the test, it names the stake: a fire whose fuel is people and stones, prepared for those who refuse. Ibn Kathir notes that many of the imams of the Sunnah used the word prepared, u'iddat, to argue that the Fire exists now rather than only in the future. So the passage moves the question out of the seminar and into this week, where the honest response is a decision about your own morning.",
            "bn": "2:24 আয়াত বিষয়টাকে সাহিত্যের আলোচনায় আটকে থাকতে দেয় না। পরীক্ষার কথা বলার পর সে দামটাও বলে দেয়: সেই আগুন, যার ইন্ধন মানুষ আর পাথর, যা প্রস্তুত রাখা হয়েছে অস্বীকারকারীদের জন্য। ইবনে কাসীর জানান, ‘উইদ্দাত’ অর্থাৎ প্রস্তুত রাখা হয়েছে, এই শব্দ দিয়েই আহলুস সুন্নাহর অনেক ইমাম দলিল দিয়েছেন যে জাহান্নাম এখনই আছে, কেবল ভবিষ্যতে নয়। তাই অংশটি প্রশ্নটাকে আলোচনার আসর থেকে তুলে এ সপ্তাহের জীবনে নামিয়ে আনে, যেখানে সৎ জবাব হলো নিজের সকাল নিয়ে একটা সিদ্ধান্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Plea Against the Fire",
          "bn": "আগুন থেকে বাঁচার ফরিয়াদ"
        },
        "p": [
          {
            "en": "The verse names a Fire and tells you to fear it, so the Quran's own plea against that Fire belongs here. 2:201 puts it in the mouth of the believer: Our Lord, give us in this world good and in the Hereafter good, and protect us from the punishment of the Fire. It is short enough to say without preparation. It takes the warning of 2:24 seriously without collapsing into despair, because it asks for good in both houses and not merely for escape from one.",
            "bn": "আয়াত আগুনের নাম নেয় আর তাকে ভয় করতে বলে, তাই সেই আগুন থেকে বাঁচার জন্য কুরআনের নিজের ফরিয়াদটাই এখানে মানায়। 2:201 আয়াত সেটা মুমিনের মুখে তুলে দেয়: হে আমাদের রব, আমাদের দুনিয়াতেও কল্যাণ দাও, আখিরাতেও কল্যাণ দাও, আর আমাদের জাহান্নামের আযাব থেকে বাঁচাও। এটা এত ছোট যে আগে থেকে তৈরি না হয়েও বলা যায়। 2:24 আয়াতের সতর্কবাণীকে এ দোয়া গুরুত্ব দেয়, অথচ হতাশায় ভেঙে পড়ে না, কারণ সে দুই ঘরেই কল্যাণ চায়, শুধু একটা থেকে পালানো চায় না।"
          },
          {
            "en": "A second plea can be built from the words of the verse itself; it is composed here, not narrated: O Allah, You sent this Book down upon Your servant. Where I carry rayb, put certainty in its place; where I fall silent before Your Book, teach me; and do not let me be among the fuel of what You have prepared. Say the first request in daylight, when nothing in particular is wrong, because doubt is far easier to answer before it arrives than in the middle of it.",
            "bn": "আয়াতের নিজের শব্দ দিয়েই দ্বিতীয় একটা মিনতি গড়া যায়। এটি এখানে বানানো, কোনো বর্ণনা নয়: হে আল্লাহ, আপনি এ কিতাব নাজিল করেছেন আপনার বান্দার উপর। আমার ভেতরে যেখানে রায়ব, সেখানে ইয়াকিন বসিয়ে দিন; আপনার কিতাবের সামনে যেখানে আমি চুপ হয়ে যাই, সেখানে আমাকে শিখিয়ে দিন; আর আপনি যা প্রস্তুত রেখেছেন তার ইন্ধন আমাকে বানাবেন না। প্রথম চাওয়াটা দিনের আলোয় বলুন, যখন বিশেষ কিছু বিগড়ায়নি। সন্দেহ আসার আগে তার জবাব দেওয়া অনেক সহজ, আসার পরে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Take These Home",
          "bn": "এগুলো সাথে নিয়ে যান"
        },
        "p": [
          {
            "en": "Have I ever actually taken the test this verse offers, or have I only heard that other people failed it? When doubt about the Book visits me, what do I do in the next hour: read it, avoid it, or argue about it with someone who is not reading it either? The verse calls him Our servant at the very moment of proof; what does it change for me that the highest title in the sentence is servanthood rather than rank?",
            "bn": "এ আয়াত যে পরীক্ষা দিচ্ছে, আমি কি কখনো সত্যিই তাতে বসেছি, নাকি শুধু শুনেছি যে অন্যরা পারেনি? কিতাব নিয়ে সন্দেহ এলে পরের এক ঘণ্টায় আমি কী করি, সেটা পড়ি, এড়িয়ে যাই, নাকি এমন কারও সাথে তর্ক করি যে নিজেও পড়ছে না? প্রমাণের ঠিক মুহূর্তে আয়াত তাঁকে বলছে ‘আমার বান্দা’। বাক্যের সবচেয়ে বড় পরিচয়টা পদমর্যাদা নয়, বান্দা হওয়া, এটা আমার কাছে কী বদলে দেয়?"
          },
          {
            "en": "If this challenge has stood open ever since, and nobody has met it, why does my own certainty still rise and fall with my mood from one week to the next? And which short surah could I sit with this week, slowly and more than once, until I could say in my own words what it actually does and where it turns?",
            "bn": "এই চ্যালেঞ্জ যদি সেদিন থেকে আজ পর্যন্ত খোলা থাকে আর কেউ তা মেলাতে না পারে, তবু আমার নিজের ইয়াকিন এক সপ্তাহ থেকে আরেক সপ্তাহে মেজাজের সাথে ওঠানামা করে কেন? আর এ সপ্তাহে কোন ছোট সূরাটা নিয়ে আমি ধীরে, একাধিকবার বসতে পারি, যতক্ষণ না নিজের ভাষায় বলতে পারি সেটা আসলে কী করে আর কোথায় গিয়ে মোড় নেয়?"
          }
        ]
      }
    ]
  },
  "2:30-33": {
    "sections": [
      {
        "h": {
          "en": "Announced Before He Existed",
          "bn": "থাকার আগেই ঘোষণা"
        },
        "p": [
          {
            "en": "The verses just before this one address the reader directly. 2:28 asks how you can disbelieve in Allah when you were lifeless and He gave you life, and 2:29 says He created for you everything on the earth and then turned to the heaven and made it seven heavens. Our passage answers the obvious next question. If the earth was made for us, on what terms do we hold it? The answer begins in the assembly of the angels, long before any of us arrived.",
            "bn": "এর ঠিক আগের আয়াতগুলো পাঠককে সরাসরি ধরে। 2:28 আয়াত জিজ্ঞেস করে, তোমরা আল্লাহকে অস্বীকার করছ কীভাবে, অথচ তোমরা ছিলে প্রাণহীন আর তিনি তোমাদের জীবন দিলেন। 2:29 আয়াত বলে, যমীনের সবকিছু তিনি তোমাদের জন্যই সৃষ্টি করেছেন, তারপর আকাশের দিকে মনোযোগ দিলেন আর তা সাত আকাশে সাজালেন। আমাদের অংশ এরপরের স্বাভাবিক প্রশ্নের জবাব দেয়। যমীন যদি আমাদের জন্যই বানানো হয়, তবে কোন শর্তে আমরা তা ধরে আছি? জবাবটা শুরু হয় ফেরেশতাদের মজলিসে, আমাদের কেউ পৌঁছানোর অনেক আগে।"
          },
          {
            "en": "Ibn Kathir reads the whole scene as a favour recalled: Allah mentioned the children of Adam in the highest of heights before He created them. The sequence that follows is tightly built. 2:30 to 2:33 give the announcement, the angels' question and the naming; 2:34 gives the command to prostrate and the refusal of Iblis; 2:35 to 2:36 the tree and the going down; 2:37 the words Adam (AS) received and the mercy that met them. No occasion of revelation is reported, and none is needed.",
            "bn": "ইবনে কাসীর গোটা দৃশ্যটাকে পড়েন স্মরণ করিয়ে দেওয়া নিয়ামত হিসেবে: সৃষ্টি করার আগেই আল্লাহ সর্বোচ্চ মজলিসে আদম সন্তানের আলোচনা তুলেছেন। এরপরের ধারাটা শক্ত করে বাঁধা। 2:30 থেকে 2:33 আয়াত দেয় ঘোষণা, ফেরেশতাদের প্রশ্ন আর নাম শেখানো; 2:34 আয়াত দেয় সিজদার হুকুম আর ইবলিসের অস্বীকার; 2:35 আর 2:36 আয়াত গাছ আর নেমে যাওয়া; 2:37 আয়াত সেই বাণী, যা আদম (আঃ) পেলেন, আর সেই রহমত, যা ওই বাণীর জবাবে এল। এর কোনো শানে নুযুল বর্ণিত নেই, দরকারও নেই।"
          },
          {
            "en": "Then 2:38 sets the terms of life on earth, and 2:39 the consequence of refusing them, before 2:40 turns to the Children of Israel and stays with them for many pages. So this passage is the hinge of the surah's opening: it explains what a human being is for, immediately before the surah begins examining a community that had been given the same trust and had handled it badly.",
            "bn": "এরপর 2:38 আয়াত যমীনের জীবনের শর্ত ঠিক করে দেয়, আর 2:39 আয়াত বলে দেয় শর্ত না মানলে কী হয়। তারপর 2:40 আয়াত বানী ইসরাঈলের দিকে মুখ ঘোরায় আর বহু পৃষ্ঠা তাদের নিয়েই থাকে। তাই এ অংশটা সূরার শুরুর গাঁট: মানুষ কীসের জন্য, সেটা এখানে বলে দেওয়া হয়, আর ঠিক এর পরেই সূরা এমন এক জাতির হিসাব খোলে, যাদের একই আমানত দেওয়া হয়েছিল আর যারা তা ঠিকমতো রাখেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Khalifah, al-Asma, Anbi'uni",
          "bn": "খলিফা, আল-আসমা, আম্বিউনি"
        },
        "p": [
          {
            "en": "Khalifah comes from the root kh-l-f, which is about coming after, taking the place of someone. The verse does not say I will create a khalifah but I am placing one, using an active participle that puts the act on the point of happening. Ibn Kathir reads the word as generations succeeding one another, century after century, and brings 6:165, where He made you successors on the earth and raised some of you above others in rank to test you, and 27:62, where He makes you inheritors of the earth.",
            "bn": "খলিফা শব্দের মূল খা-লাম-ফা, যার ভাব হলো পরে আসা, কারও জায়গা নেওয়া। আয়াত বলেনি আমি খলিফা সৃষ্টি করব, বলেছে আমি বসাচ্ছি। এখানে এসেছে ইসমে ফায়েল, যা কাজটাকে ঘটার মুখে দাঁড় করিয়ে দেয়। ইবনে কাসীর শব্দটা পড়েন একের পর এক আসা প্রজন্ম অর্থে, শতাব্দীর পর শতাব্দী। তিনি আনেন 6:165 আয়াত, যেখানে তিনি তোমাদের যমীনে পরস্পরের স্থলাভিষিক্ত করেছেন আর মর্যাদায় কাউকে কারও উপরে রেখেছেন পরীক্ষার জন্য, আর 27:62 আয়াত, যেখানে তিনি তোমাদের যমীনের উত্তরাধিকারী বানান।"
          },
          {
            "en": "Then He taught Adam al-asma kullaha, the names, all of them, with kull and its pronoun closing the phrase so that nothing is left outside. Ad-Dahhak reports from Ibn Abbas (RA) that these are the names people use: human, animal, sky, earth, land, sea, horse, donkey and the rest of the species. As-Sa'di adds that the teaching covered the things themselves and their meanings, down to the difference between a dish and a small dish. It was language and the world together, not a list of sounds.",
            "bn": "এরপর তিনি আদমকে শেখালেন আল-আসমা কুল্লাহা, সব নাম। ‘কুল্লাহা’ শব্দটা বাক্যটা এমনভাবে বন্ধ করে দেয় যে বাইরে আর কিছু থাকে না। দাহহাক ইবনে আব্বাস (রাঃ) থেকে জানান, এগুলো মানুষের ব্যবহারের নাম: মানুষ, পশু, আসমান, যমীন, স্থল, সমুদ্র, ঘোড়া, গাধা আর বাকি সব প্রজাতি। সাদি যোগ করেন, শেখানো হয়েছিল জিনিসগুলো আর তাদের অর্থও, এমনকি থালা আর ছোট থালার তফাত পর্যন্ত। এটা ভাষা আর দুনিয়া একসাথে, নিছক শব্দের তালিকা নয়।"
          },
          {
            "en": "The command to the angels is anbi'uni, from the root n-b-', the root of naba, weighty news. He does not say tell Me the names but give Me the report of them. The demonstrative and the object pronoun used are the forms Arabic reserves for rational beings, although what was displayed included more than rational beings. Al-Qurtubi, and Ibn Ashur after him, explain this as taghlib, the plural by predominance, where the rational members of a mixed group decide the form the whole group takes.",
            "bn": "ফেরেশতাদের প্রতি হুকুম আম্বিউনি, মূল নুন-বা-হামযা থেকে, যেখান থেকে ‘নাবা’ অর্থাৎ ভারী খবর। তিনি বলেননি নামগুলো বলে দাও, বলেছেন নামগুলোর খবর আমাকে দাও। এখানে ইঙ্গিতের শব্দ আর কর্মের সর্বনাম দুটোই এসেছে সেই রূপে, যা আরবি রাখে বুদ্ধিমান সৃষ্টির জন্য। অথচ সামনে রাখা জিনিসের মধ্যে বুদ্ধিমান ছাড়া আরও অনেক কিছু ছিল। কুরতুবি, আর তাঁর পরে ইবনে আশুর, একে বোঝান তাগলিব দিয়ে, অর্থাৎ প্রাধান্যের ভিত্তিতে বহুবচন: মেশানো দলে বুদ্ধিমান অংশটাই গোটা দলের রূপ ঠিক করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading the Angels' Question",
          "bn": "ফেরেশতাদের প্রশ্নটা কীভাবে পড়বেন"
        },
        "p": [
          {
            "en": "Ibn Kathir argues that khalifah here does not mean Adam (AS) alone, since otherwise the angels' words about corruption and bloodshed would not have been allowed to stand. Al-Qurtubi adds a second sense to the word: a khalifah is one who settles disputes among people, restraining them from injustice and sin, and he holds that this verse establishes the duty of appointing such a leader. Between the two readings the word carries both a fact about our species and a job description.",
            "bn": "ইবনে কাসীর দেখান, এখানে খলিফা মানে কেবল আদম (আঃ) নন। কেবল তিনি হলে ফেরেশতাদের বলা বিশৃঙ্খলা আর রক্তপাতের কথাটা এভাবে থেকে যেত না। কুরতুবি শব্দটায় আরেকটা অর্থ যোগ করেন: খলিফা সেই, যে মানুষের বিবাদ মেটায়, তাদের জুলুম আর গুনাহ থেকে ঠেকায়। তিনি ধরেন, এই আয়াত থেকেই এমন নেতা নিযুক্ত করার দায়িত্ব প্রমাণিত হয়। দুই পাঠ মিলিয়ে শব্দটা একদিকে আমাদের জাতের পরিচয় দেয়, অন্যদিকে দেয় কাজের বিবরণ।"
          },
          {
            "en": "Ibn Kathir is careful about the angels' words. They were not disputing with Allah, he says, and not envying the children of Adam, as some have mistakenly thought. Qatadah's view is that they already knew this creation would cause trouble on the earth, so the question was asked to learn the wisdom behind the decision, as though to say, our Lord, what is the good of it, since we glorify and sanctify You without any of that?",
            "bn": "ফেরেশতাদের কথাটা নিয়ে ইবনে কাসীর সাবধান। তিনি বলেন, তারা আল্লাহর সাথে তর্ক করছিল না, আদম সন্তানের প্রতি হিংসাও করছিল না, যেমনটা কেউ কেউ ভুল করে ভেবেছেন। কাতাদার মত হলো, এই সৃষ্টি যমীনে গোলমাল করবে তা তারা আগেই জানত। তাই প্রশ্নটা ছিল ফয়সালার হিকমত জেনে নেওয়ার জন্য, যেন তারা বলছে, হে আমাদের রব, এতে কল্যাণ কী, আমরা তো এসব ছাড়াই আপনার তাসবিহ আর পবিত্রতা ঘোষণা করি?"
          },
          {
            "en": "On the answer itself the mufassirun offer more than one line. Ibn Kathir fills it out: I know that the benefit outweighs the harm you have named, for I will create among them prophets and messengers, the truthful, the martyrs, the righteous, the worshippers, the pious and the scholars who act on what they know. Ar-Razi reports a different reading, that the angels were asking to be given the earth themselves, so that the answer means He knows whether remaining in the heavens is better for them.",
            "bn": "জবাবটা নিয়ে মুফাসসিরদের একাধিক কথা আছে। ইবনে কাসীর তা খুলে বলেন: আমি জানি তোমরা যে ক্ষতির কথা বললে তার চেয়ে কল্যাণ বেশি, কারণ আমি এদের ভেতর থেকেই বানাব নবী আর রাসূল, সিদ্দিক, শহিদ, নেককার, ইবাদতগুজার, পরহেজগার, আর সেই আলিমদের, যারা জানা কথায় আমল করে। রাযি ভিন্ন এক পাঠ জানান, ফেরেশতারা চাইছিল যমীনটা তাদেরই দেওয়া হোক। সে পাঠে জবাবের অর্থ দাঁড়ায়, আসমানে থাকাই তাদের জন্য ভালো কি না, তা তিনিই জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Taught the Names of Everything",
          "bn": "সবকিছুর নাম শেখানো হয়েছিল যাঁকে"
        },
        "p": [
          {
            "en": "Al-Bukhari explains this verse in his Book of Tafsir with a narration from Anas ibn Malik (RA). On the Day of Resurrection the believers look for someone to intercede and go first to Adam (AS), saying: You are the father of mankind. Allah created you with His own Hand, ordered the angels to prostrate to you, and taught you the names of everything. Intercede for us with your Lord. He answers that he is not the one for it, remembering his own error, and sends them on.",
            "bn": "বুখারি তাঁর তাফসির অধ্যায়ে এ আয়াতের ব্যাখ্যায় আনাস ইবনে মালিক (রাঃ) থেকে বর্ণনা আনেন। কিয়ামতের দিন মুমিনরা সুপারিশ করার মতো কাউকে খুঁজবে আর প্রথমে যাবে আদম (আঃ)-এর কাছে, বলবে: আপনি মানুষের পিতা। আল্লাহ নিজ হাতে আপনাকে সৃষ্টি করেছেন, ফেরেশতাদের আপনাকে সিজদার হুকুম দিয়েছেন, আর আপনাকে সব কিছুর নাম শিখিয়েছেন। আপনার রবের কাছে আমাদের জন্য সুপারিশ করুন। তিনি জবাব দেবেন, এ কাজের লোক তিনি নন, নিজের ভুলটা তাঁর মনে পড়বে, আর তিনি তাদের আরেকজনের কাছে পাঠাবেন।"
          },
          {
            "en": "Ibn Kathir quotes the narration here for one phrase in it: taught you the names of everything. The Companions in the report are not making a poetic compliment; they are naming the thing that set Adam (AS) apart, and they name it alongside being created by His Hand and being prostrated to. Notice also what the same hadith does with that honour. The one who was taught all the names still says, I am not the one for this, and remembers a mistake. Knowledge given raises a man without making him safe.",
            "bn": "ইবনে কাসীর বর্ণনাটি এখানে আনেন এর ভেতরের এই কথাটার জন্য: আপনাকে সবকিছুর নাম শিখিয়েছেন। বর্ণনায় সাহাবিরা কোনো কাব্যিক প্রশংসা করছেন না; তাঁরা সেই জিনিসটার নাম নিচ্ছেন যা আদম (আঃ)-কে আলাদা করেছে, আর সেটা বলছেন আল্লাহর নিজ হাতে সৃষ্টি আর ফেরেশতাদের সিজদার পাশাপাশি। খেয়াল করুন, একই হাদিস সেই সম্মান নিয়ে কী করে। যাঁকে সব নাম শেখানো হয়েছিল, তিনিই বলছেন, এ কাজের লোক আমি নই, আর তাঁর একটা ভুল মনে পড়ছে। দেওয়া জ্ঞান মানুষকে উঁচু করে, নিরাপদ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Rank, Test, and Knowledge",
          "bn": "মর্যাদা, পরীক্ষা আর জ্ঞান"
        },
        "p": [
          {
            "en": "35:39 says plainly that He made you successors on the earth, and then attaches the price. Whoever disbelieves carries his own disbelief, and the verse says twice what such disbelief earns: with their Lord it increases the disbelievers in nothing but hatred, and it increases them in nothing but loss. 67:2 gives the reason the arrangement exists at all, that He created death and life to test which of you is best in deed. Read with 2:30, the two say that the rank is real, that it is temporary, and that it is being marked.",
            "bn": "35:39 আয়াত সোজাসুজি বলে, তিনি তোমাদের যমীনে স্থলাভিষিক্ত করেছেন, আর সঙ্গে দামটাও জুড়ে দেয়। যে কুফরি করবে তার কুফরি তার ঘাড়েই। আর আয়াত দুবার বলে দেয় এই কুফর কী বাড়ায়: কাফিরদের কুফর তাদের রবের কাছে বাড়ায় কেবল ঘৃণা, আর বাড়ায় কেবল ক্ষতি। 67:2 আয়াত বলে দেয় এই ব্যবস্থাটা আছেই কেন, তিনি মৃত্যু আর জীবন সৃষ্টি করেছেন যাচাই করতে, আমলে তোমাদের মধ্যে কে সেরা। 2:30 আয়াতের সাথে পড়লে দুটো মিলে বলে, মর্যাদাটা সত্যি, সেটা সাময়িক, আর তার খাতা লেখা হচ্ছে।"
          },
          {
            "en": "On the knowledge itself, 96:4-5 stands at the very beginning of revelation and says the same thing in a few words: He taught by the pen, taught man what he did not know. 12:76 sets the limit that keeps a learned man honest, and above every possessor of knowledge is one more knowing. And 20:114 puts the only safe response into the mouth of the Prophet ﷺ himself: my Lord, increase me in knowledge. He is told to ask for more, and told not to hurry ahead of what is being given.",
            "bn": "জ্ঞান নিয়ে 96:4-5 আয়াত দাঁড়িয়ে আছে ওহির একেবারে শুরুতে, আর অল্প কথায় একই কথা বলে: তিনি কলমের সাহায্যে শিখিয়েছেন, মানুষকে শিখিয়েছেন যা সে জানত না। 12:76 আয়াত সেই সীমাটা টেনে দেয় যা জ্ঞানী মানুষকে সৎ রাখে, প্রত্যেক জ্ঞানীর উপরে আছে আরও বড় জ্ঞানী। আর 20:114 আয়াত একমাত্র নিরাপদ জবাবটা নবী ﷺ-এর নিজের মুখে তুলে দেয়: হে আমার রব, আমাকে জ্ঞানে বাড়িয়ে দিন। তাঁকে আরও চাইতে বলা হয়েছে, আর যা দেওয়া হচ্ছে তার আগে ছুটতে নিষেধ করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding a Given Knowledge",
          "bn": "দেওয়া জ্ঞান হাতে রাখা"
        },
        "p": [
          {
            "en": "The sentence to carry out of this passage is the angels' own: we have no knowledge except what You have taught us. It is not modesty for its own sake; it is an accurate description of every fact in your head. Try saying it before you teach, before you correct someone, before you answer a question in a group. It changes the way the next sentence comes out, because a man who knows his knowledge is on loan argues differently from a man who thinks he made it.",
            "bn": "এই অংশ থেকে যে কথাটা সাথে নিয়ে যাওয়ার, তা ফেরেশতাদের নিজেদের কথা: আপনি যা শিখিয়েছেন তা ছাড়া আমাদের কোনো জ্ঞান নেই। এটা নিছক বিনয় দেখানো নয়, আপনার মাথার প্রতিটি তথ্যের সঠিক বর্ণনা। কথাটা একবার মনে মনে বলে দেখুন, শেখাতে বসার আগে, কাউকে শুধরে দেওয়ার আগে, দশজনের মধ্যে কোনো প্রশ্নের জবাব দেওয়ার আগে। পরের বাক্যটা বেরোনোর ধরনই বদলে যায়। যে জানে তার জ্ঞান ধার করা, সে তর্ক করে অন্যভাবে, আর যে ভাবে জ্ঞানটা সে নিজে বানিয়েছে, সে করে অন্যভাবে।"
          },
          {
            "en": "The second practice is the plain admission. The angels said we do not know before anyone forced them to, and the passage treats that as their honour rather than their embarrassment. Most of us have a subject we bluff about in company. Name it, and next time say that you do not know and will find out. Then actually find out, because 20:114 asks for increase, not for comfortable ignorance dressed up as humility.",
            "bn": "দ্বিতীয় অভ্যাসটা হলো সোজা স্বীকার করা। কেউ চাপ দেওয়ার আগেই ফেরেশতারা বলেছিল আমরা জানি না, আর অংশটি সেটাকে তাদের লজ্জা নয়, সম্মান হিসেবেই ধরে। আমাদের প্রায় সবার এমন একটা বিষয় আছে যা নিয়ে লোকের সামনে আমরা ভান করি। বিষয়টা চিনে নিন, আর পরেরবার বলে দিন যে জানি না, জেনে নেব। তারপর সত্যিই জেনে নিন। কারণ 20:114 আয়াত বাড়তি জ্ঞান চায়, বিনয়ের পোশাক পরানো আরামদায়ক অজ্ঞতা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Teaching It to a Child",
          "bn": "শিশুকে কীভাবে শেখাবেন"
        },
        "p": [
          {
            "en": "For a child or a study circle the passage teaches itself. Set objects on a table, ask for their names, and let the room feel how much a name carries. Then read 2:32 aloud and ask who taught them the word for each thing. The lesson lands without a sermon: you were given a language, you did not invent it, and the earth you name was handed to you on the same terms.",
            "bn": "শিশু বা পড়ার হালকার জন্য এ অংশ নিজেই নিজেকে শেখায়। টেবিলে কিছু জিনিস সাজিয়ে দিন, নাম জিজ্ঞেস করুন, আর ঘরটা টের পাক একটা নামের ভেতরে কত কিছু ধরা থাকে। এরপর 2:32 আয়াত জোরে পড়ুন আর জিজ্ঞেস করুন, প্রতিটা জিনিসের শব্দটা তাদের কে শিখিয়েছে। ওয়াজ না করেই কথাটা পৌঁছে যায়: ভাষাটা আপনাকে দেওয়া হয়েছে, আপনি বানাননি, আর যে যমীনের নাম আপনি রাখছেন সেটাও একই শর্তে আপনার হাতে এসেছে।"
          },
          {
            "en": "For an older circle, put the angels' sentence at the centre instead. Ask everyone to name one thing they know well, then to trace where it came from: a teacher, a parent, a book somebody bought for them, a language they were born inside. Nobody in the room will find a piece of knowledge with no giver behind it. That is 2:32 arrived at from the other end, and a group that reaches it themselves does not need to be told it.",
            "bn": "বড়দের হালকার জন্য বরং ফেরেশতাদের বাক্যটাকে মাঝখানে রাখুন। প্রত্যেককে বলুন এমন কিছুর নাম নিতে যা তারা ভালো জানে, তারপর খুঁজে বের করতে সেটা কোথা থেকে এসেছে: কোনো উস্তাদ, মা-বাবা, কারও কিনে দেওয়া বই, কিংবা যে ভাষার ভেতরে তারা জন্মেছে। ঘরের কেউই এমন জ্ঞান খুঁজে পাবে না যার পিছনে কোনো দাতা নেই। এ হলো 2:32 আয়াতে উল্টো দিক থেকে পৌঁছানো, আর যে দল নিজেরাই সেখানে পৌঁছে যায় তাদের কথাটা বলে দিতে হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Angels' Own Words",
          "bn": "ফেরেশতাদের নিজেদের কথা"
        },
        "p": [
          {
            "en": "This passage contains its own supplication, and the angels say it: Glory be to You, we have no knowledge except what You have taught us; indeed, it is You who are the Knowing, the Wise. That is 2:32 exactly as the Book gives it. It is the right thing to say when a decree makes no sense to you, because it is what creatures said when a decree made no sense to them, and it ends not in complaint but in two of His names.",
            "bn": "এই অংশের ভেতরেই তার দোয়া আছে, আর সেটা বলছে ফেরেশতারা: আপনি পবিত্র মহান, আপনি যা শিখিয়েছেন তা ছাড়া আমাদের কোনো জ্ঞান নেই, নিশ্চয়ই আপনি সর্বজ্ঞ ও প্রজ্ঞাময়। এ হলো 2:32 আয়াত, হুবহু যেমন কিতাব দিয়েছে। কোনো ফয়সালা যখন আপনার কাছে অর্থহীন লাগে, তখন এটাই বলার কথা। কারণ যাদের কাছে একটা ফয়সালা অর্থহীন লেগেছিল, তারাই এ কথা বলেছিল। আর কথাটা শেষ হয় অভিযোগে নয়, তাঁর দুটো নামে।"
          },
          {
            "en": "Beside it place the request the Prophet ﷺ was taught in 20:114: my Lord, increase me in knowledge. Said together the two hold the balance the passage sets. One admits that nothing in you is self-made; the other refuses to let that admission become an excuse for staying where you are. Say the first when you are corrected and the second when you sit down to read, and the pair will cover most of a lifetime of learning.",
            "bn": "এর পাশে রাখুন সেই চাওয়াটা, যা নবী ﷺ-কে শেখানো হয়েছে 20:114 আয়াতে: হে আমার রব, আমাকে জ্ঞানে বাড়িয়ে দিন। দুটো একসাথে বললে অংশটি যে ভারসাম্য দাঁড় করায় তা ধরা থাকে। একটা মেনে নেয় যে আপনার ভেতরের কিছুই নিজের বানানো নয়; অন্যটা সেই মেনে নেওয়াকে থেমে থাকার অজুহাত হতে দেয় না। কেউ ভুল ধরিয়ে দিলে প্রথমটা বলুন, আর পড়তে বসার সময় দ্বিতীয়টা। এই জোড়াই সারা জীবনের শেখার প্রায় পুরোটা ঢেকে দেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for the Week",
          "bn": "সপ্তাহের জন্য কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "The angels asked in order to learn, not to argue. When a decree of Allah makes no sense to me, which of those two am I actually doing, and how would someone listening be able to tell? Everything I know was taught to me by someone or something He arranged. Where do I still talk as though I owned it, and who has heard me do that most recently?",
            "bn": "ফেরেশতারা প্রশ্ন করেছিল জানার জন্য, তর্কের জন্য নয়। আল্লাহর কোনো ফয়সালা যখন আমার কাছে অর্থহীন লাগে, তখন আমি আসলে এ দুইয়ের কোনটা করি, আর পাশে বসে কেউ শুনলে সে কি তফাতটা ধরতে পারবে? আমি যা কিছু জানি, তিনিই কোনো না কোনো ব্যবস্থায় আমাকে শিখিয়েছেন। কোথায় আমি এখনো এমন করে কথা বলি যেন জ্ঞানটা আমার নিজের, আর শেষবার সেটা কার কানে গেছে?"
          },
          {
            "en": "Could I say out loud, in front of people whose respect I want, that I have no knowledge except what I was taught? What is the last thing I honestly admitted not knowing, and did I go and find it out afterwards? If the earth is an assignment rather than a possession, what part of it has actually been assigned to me this week, and what am I doing with the corner of it that is under my hand right now?",
            "bn": "যাদের সম্মান আমি চাই, তাদের সামনে কি আমি মুখে বলতে পারি যে আমাকে যা শেখানো হয়েছে তা ছাড়া আমার কোনো জ্ঞান নেই? শেষ কবে আমি সত্যি করে স্বীকার করেছি যে এটা জানি না, আর তারপর কি সত্যিই জেনে নিয়েছি? যমীন যদি সম্পত্তি না হয়ে দায়িত্ব হয়, তবে এ সপ্তাহে তার কোন অংশটা আসলে আমার ভাগে পড়েছে, আর এই মুহূর্তে আমার হাতের নিচে যে কোণটুকু আছে তা নিয়ে আমি কী করছি?"
          }
        ]
      }
    ]
  },
  "2:40": {
    "sections": [
      {
        "h": {
          "en": "The Turn to a People",
          "bn": "এক জাতির দিকে ফেরা"
        },
        "p": [
          {
            "en": "Up to here the surah has spoken to everyone. 2:38 sets the terms of life on the earth for all the children of Adam, and 2:39 names the consequence of refusing them. Then the voice turns and calls one community by name. From this verse the surah stays with the Children of Israel for many pages, and almost every later reminder in that stretch opens with a phrase like and when, taking up one more scene from their history.",
            "bn": "এ পর্যন্ত সূরা সবার সাথে কথা বলেছে। 2:38 আয়াত আদম সন্তানের সবার জন্য যমীনের জীবনের শর্ত ঠিক করে দেয়, আর 2:39 আয়াত বলে দেয় শর্ত না মানলে পরিণতি কী। এরপর স্বর ঘুরে গিয়ে একটা জাতিকে নাম ধরে ডাকে। এ আয়াত থেকে সূরা বহু পৃষ্ঠা ধরে বানী ইসরাঈলের সাথেই থাকে, আর সেই অংশের প্রায় প্রতিটি স্মরণ শুরু হয় ‘আর যখন’ ধরনের কথা দিয়ে, তাদের ইতিহাসের আরও একটা দৃশ্য তুলে এনে।"
          },
          {
            "en": "What follows unpacks the three demands at once. 2:41 asks them to believe in what was sent down confirming what is with them, and not to sell the signs for a small price. 2:42 forbids mixing truth with falsehood or hiding the truth knowingly. 2:43 names prayer and zakah. 2:44 asks the hardest question in the passage, whether they order righteousness on others while forgetting themselves. 2:45 then offers the help: patience and prayer.",
            "bn": "এরপর যা আসে, তা এই তিন দাবিকেই খুলে দেখায়। 2:41 আয়াত তাদের ডাকে সেই কিতাবে ঈমান আনতে, যা তাদের কাছে থাকা কিতাবের সত্যায়ন করে নাজিল হয়েছে, আর বলে, সামান্য দামে আয়াত বেচে দিয়ো না। 2:42 আয়াত নিষেধ করে সত্যকে মিথ্যার সাথে মেশাতে, আর জেনেশুনে সত্য লুকাতে। 2:43 আয়াত নাম নেয় নামাজ আর যাকাতের। 2:44 আয়াত এ অংশের সবচেয়ে কঠিন প্রশ্নটা করে, তোমরা কি মানুষকে ভালো কাজের কথা বল আর নিজেদের ভুলে যাও। এরপর 2:45 আয়াত সাহায্যের পথ দেখায়: ধৈর্য আর নামাজ।"
          },
          {
            "en": "Ibn Kathir says the command in this verse is to enter Islam and follow Muhammad ﷺ, and he hears in the vocative a reminder of their father. To say O Children of Israel is like saying O son of that generous man, do this, and he compares 17:3, where a later generation is addressed as the offspring of those We carried with Nuh, who was a grateful servant. No occasion of revelation is reported for the verse, and its force comes from where it stands.",
            "bn": "ইবনে কাসীর বলেন, এ আয়াতের হুকুম হলো ইসলামে প্রবেশ করা আর মুহাম্মাদ ﷺ-এর অনুসরণ করা। আর সম্বোধনের ভেতরেই তিনি শোনেন তাদের পিতার কথা। ‘হে বানী ইসরাঈল’ বলা যেন বলা, ওহে সেই দানশীল লোকটির ছেলে, এ কাজটা কর। তিনি পাশে রাখেন 17:3 আয়াত, যেখানে পরের প্রজন্মকে ডাকা হয়েছে তাদের সন্তান বলে, যাদের আল্লাহ নূহের সাথে নৌকায় তুলেছিলেন। আর নূহ ছিলেন শুকরগুজার বান্দা। আয়াতটির কোনো শানে নুযুল বর্ণিত নেই, এর জোর আসে তার অবস্থান থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ni'mah, Ahd, Irhabun",
          "bn": "নিয়ামত, আহদ, ইরহাবুন"
        },
        "p": [
          {
            "en": "The first word is a command, udhkuru, from the root dh-k-r, the same root as dhikr. It does not mean feel warmly about; it means bring back to mind and keep there. As-Sa'di sets out what remembering a favour actually involves: to acknowledge it in the heart, to praise Allah for it with the tongue, and to spend it on the deeds He loves. On that reading a favour you have never named aloud and never used in obedience has not yet been remembered at all.",
            "bn": "প্রথম শব্দটাই হুকুম, উযকুরু, মূল যাল-কাফ-রা থেকে, জিকির শব্দের মূলও এটাই। এর মানে মনে মনে একটু উষ্ণতা টের পাওয়া নয়; মানে কথাটা মনে ফিরিয়ে আনা আর সেখানে ধরে রাখা। সাদি খুলে বলেন, নিয়ামত স্মরণ করা আসলে কী: অন্তরে তা স্বীকার করা, মুখে আল্লাহর প্রশংসা করা, আর তিনি যে আমল ভালোবাসেন তাতে সেটা খরচ করা। এ পাঠে, যে নিয়ামতের নাম আপনি কখনো মুখে নেননি আর কখনো আনুগত্যে খাটাননি, তা এখনো স্মরণই করা হয়নি।"
          },
          {
            "en": "The covenant clause is built on one verb used twice. Awfu bi ahdi ufi bi ahdikum: fulfil My covenant, I will fulfil yours. The verb awfa is about paying in full rather than paying something, which is why a partial keeping is not what the word describes. The sentence is also shaped as an exchange with Allah holding the other end, and the second half is put in the jussive, so that His fulfilment is presented as the answer to theirs and not as an unrelated promise.",
            "bn": "অঙ্গীকারের অংশটা গড়া হয়েছে একই ক্রিয়া দুবার ব্যবহার করে। আওফু বিআহদি উফি বিআহদিকুম: আমার অঙ্গীকার পূর্ণ কর, আমি তোমাদেরটা পূর্ণ করব। ‘আওফা’ মানে পুরোটা চুকিয়ে দেওয়া, কিছুটা দেওয়া নয়। তাই আংশিক রক্ষা করাকে এ শব্দ বোঝায় না। বাক্যটা সাজানোও হয়েছে লেনদেনের ঢঙে, যার অন্য প্রান্ত আল্লাহর হাতে। আর দ্বিতীয় অংশটা এমন গঠনে রাখা হয়েছে যে তাঁর পূর্ণ করাটা দাঁড়ায় তাদের পূর্ণ করার জবাব হিসেবে, আলাদা কোনো প্রতিশ্রুতি হিসেবে নয়।"
          },
          {
            "en": "The verse ends wa iyyaya farhabun. The object pronoun is placed before its verb, and in Arabic that fronting narrows the action to that object: it is Me and no one else that you are to dread. The root here is r-h-b, dread, and it is worth setting beside the ending of 2:41, which uses the root of taqwa instead. Two verses, two different words for fear, one addressed to the raw feeling and one to the careful conduct that grows out of it.",
            "bn": "আয়াত শেষ হয় ওয়া ইয়্যায়া ফারহাবুন দিয়ে। কর্মের সর্বনাম ‘ইয়্যায়া’ (আমাকেই) ক্রিয়ার আগে বসানো হয়েছে। আরবিতে এভাবে আগে আনলে কাজটা ওই একজনেই আটকে যায়: ভয় আমাকেই করতে হবে, আর কাউকে নয়। এখানে মূল রা-হা-বা, অর্থ ত্রাস। পাশে রাখার মতো 2:41 আয়াতের শেষটা, যেখানে বদলে আসে তাকওয়ার মূল। দুই আয়াত, ভয়ের দুটো আলাদা শব্দ। একটা ধরে ভেতরের কাঁচা অনুভূতিটা, আরেকটা ধরে সেই অনুভূতি থেকে গড়ে ওঠা সাবধান চলাফেরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Favour, Which Covenant",
          "bn": "কোন নিয়ামত, কোন অঙ্গীকার"
        },
        "p": [
          {
            "en": "Israel is Ya'qub (AS), and at-Tabari reports from Ibn Abbas (RA) that the name itself means the servant of Allah. On which favour is meant, the early readings differ in scope. Mujahid names the concrete rescues: water brought out of stone, manna and quails sent down, deliverance from being enslaved by Pharaoh. Abu al-Aliyah names something larger and quieter, that Allah sent prophets and messengers among them and revealed Books to them, more than to the nations around them.",
            "bn": "ইসরাঈল হলেন ইয়াকুব (আঃ), আর তাবারি ইবনে আব্বাস (রাঃ) থেকে জানান, নামটির অর্থই আল্লাহর বান্দা। কোন নিয়ামতের কথা বলা হচ্ছে, তা নিয়ে পুরোনো ব্যাখ্যাগুলোর পরিধি আলাদা। মুজাহিদ নাম নেন হাতে ধরা উদ্ধারগুলোর: পাথর থেকে পানি বের করা, মান্না আর সালওয়া নামানো, ফেরাউনের দাসত্ব থেকে মুক্তি। আবুল আলিয়া নাম নেন আরও বড় আর আরও নীরব এক জিনিসের, আল্লাহ তাদের ভেতরেই নবী আর রাসূল পাঠিয়েছেন এবং তাদের কিতাব দিয়েছেন, আশপাশের জাতিগুলোর চেয়ে বেশি।"
          },
          {
            "en": "Ibn Kathir adds his own comparison and marks it as his: this verse, he says, is like what Musa (AS) told them in 5:20, remember the favour of Allah upon you when He made prophets among you and made you possessors and gave you what He had given no one else. Muhammad ibn Ishaq reports from Ibn Abbas (RA) a third and simplest gloss, that the favour means My support for you and for your fathers, that is, the saving of them from Pharaoh and his people.",
            "bn": "ইবনে কাসীর নিজের একটা তুলনা যোগ করেন আর সেটা নিজের বলেই চিহ্নিত করেন: তিনি বলেন, এ আয়াত সেই কথারই মতো যা মূসা (আঃ) তাদের বলেছিলেন 5:20 আয়াতে, তোমাদের উপর আল্লাহর নিয়ামত স্মরণ কর, তিনি তোমাদের মধ্যে নবী দিয়েছেন, তোমাদের অধিপতি করেছেন, আর এমন কিছু দিয়েছেন যা আর কাউকে দেননি। মুহাম্মাদ ইবনে ইসহাক ইবনে আব্বাস (রাঃ) থেকে আনেন তৃতীয় ও সবচেয়ে সহজ ব্যাখ্যাটা, নিয়ামত মানে তোমাদের আর তোমাদের পূর্বপুরুষদের প্রতি আমার সাহায্য, অর্থাৎ ফেরাউন আর তার লোকদের হাত থেকে বাঁচানো।"
          },
          {
            "en": "On the covenant itself, al-Hasan al-Basri identifies it with 5:12, where Allah says I am with you if you establish prayer, give zakah, believe in My messengers and support them, and lend Allah a goodly loan. Abu al-Aliyah reads it more broadly as His covenant with all His servants, to enter Islam and hold to it. Ad-Dahhak reports from Ibn Abbas (RA) that I will fulfil your covenant means I will be pleased with you and admit you to Paradise.",
            "bn": "অঙ্গীকারটা কী, সে বিষয়ে হাসান বসরি একে মেলান 5:12 আয়াতের সাথে, যেখানে আল্লাহ বলেন, আমি তোমাদের সঙ্গে আছি, যদি তোমরা নামাজ কায়েম কর, যাকাত দাও, আমার রাসূলদের প্রতি ঈমান আন ও তাঁদের সাহায্য কর, আর আল্লাহকে উত্তম ঋণ দাও। আবুল আলিয়া একে পড়েন আরও চওড়া অর্থে, সব বান্দার সাথেই তাঁর অঙ্গীকার, ইসলামে ঢোকা আর তাতে টিকে থাকা। দাহহাক ইবনে আব্বাস (রাঃ) থেকে জানান, ‘আমি তোমাদের অঙ্গীকার পূর্ণ করব’ মানে আমি তোমাদের প্রতি সন্তুষ্ট হব আর জান্নাতে ঢোকাব।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Reports, Carefully Placed",
          "bn": "দুই বর্ণনা, মেপে রাখা"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches no narration from the two Sahihs to this verse. What he cites is a report of Ibn Abbas (RA) recorded by Abu Dawud at-Tayalisi in his Musnad: a group of Jews came to the Prophet ﷺ and he asked them, do you know that Israel is Ya'qub? They said, yes, by Allah. He said, O Allah, bear witness. This article takes nothing from it but the identification of the name, and does not claim a grading for its chain.",
            "bn": "এ আয়াতের সাথে ইবনে কাসীর বুখারি বা মুসলিমের কোনো বর্ণনা জোড়েননি। তিনি যা আনেন তা ইবনে আব্বাস (রাঃ) থেকে আসা বর্ণনা, আবু দাউদ আত-তায়ালিসি নিজের মুসনাদে যা রেখেছেন: একদল ইহুদি নবী ﷺ-এর কাছে এল, আর তিনি তাদের জিজ্ঞেস করলেন, তোমরা কি জানো ইসরাঈল মানেই ইয়াকুব? তারা বলল, হ্যাঁ, আল্লাহর কসম। তিনি বললেন, হে আল্লাহ, আপনি সাক্ষী থাকুন। এ লেখা এর থেকে কেবল নামের পরিচয়টুকুই নিচ্ছে, আর এর সনদের কোনো মান দাবি করছে না।"
          },
          {
            "en": "On the favour that Abu al-Aliyah named, there is a sound narration, though it is a thematic companion rather than something the tafsir attaches here. Al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said: the Children of Israel were governed by the prophets; whenever a prophet died another prophet succeeded him, and there will be no prophet after me. Read beside 2:40 it puts a size to the favour being recalled, and explains why forgetting it was so serious.",
            "bn": "আবুল আলিয়া যে নিয়ামতের কথা বলেছেন, তা নিয়ে সহিহ বর্ণনা আছে, যদিও এটি বিষয়ের মিল, তাফসির এখানে জুড়ে দেওয়া কিছু নয়। বুখারি আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: বানী ইসরাঈলকে পরিচালনা করতেন নবীগণ; একজন নবী মারা গেলে আরেকজন নবী তাঁর জায়গা নিতেন, আর আমার পরে কোনো নবী নেই। 2:40 আয়াতের পাশে রাখলে বোঝা যায় যে নিয়ামত স্মরণ করাতে বলা হচ্ছে তার মাপ কত, আর সেটা ভুলে যাওয়া কেন এত বড় ব্যাপার।"
          }
        ]
      },
      {
        "h": {
          "en": "The Call Repeated Elsewhere",
          "bn": "এই ডাক আরও যেখানে"
        },
        "p": [
          {
            "en": "2:47 repeats this call almost word for word a few verses later and adds one clause: that I preferred you over the worlds. The repetition shows that the first call was not a passing sentence but the heading of the whole section. 5:12 is the covenant text al-Hasan al-Basri pointed to, and it is worth reading in full, because it lists the terms and then states plainly what happens to whoever disbelieves after that.",
            "bn": "কয়েক আয়াত পরেই 2:47 আয়াত এই ডাকটাই প্রায় হুবহু আবার তোলে, আর একটা কথা যোগ করে: আমি তোমাদের বিশ্বজগতের উপর শ্রেষ্ঠত্ব দিয়েছিলাম। এই পুনরাবৃত্তি দেখায়, প্রথম ডাকটা চলতি পথে বলা কোনো কথা ছিল না, ছিল গোটা অধ্যায়ের শিরোনাম। 5:12 আয়াত সেই অঙ্গীকারের পাঠ, হাসান বসরি যেদিকে ইঙ্গিত করেছেন। পুরোটা পড়ে নেওয়া ভালো, কারণ সেখানে শর্তগুলো গোনা আছে, আর তারপর সোজা বলে দেওয়া আছে এরপরও যে অস্বীকার করে তার কী হয়।"
          },
          {
            "en": "5:20 puts the same reminder in the mouth of Musa (AS) while the favour was still fresh, which shows that this was never a new complaint invented later. 17:3 is Ibn Kathir's parallel for the form of address, a whole generation named as the children of a grateful servant. And 16:91 hands the clause to us: fulfil the covenant of Allah when you have made it, and do not break oaths after confirming them, having made Allah a witness over you.",
            "bn": "5:20 আয়াত একই স্মরণ তুলে দেয় মূসা (আঃ)-এর মুখে, যখন নিয়ামতের কথা তখনো টাটকা। এতে বোঝা যায়, এ অভিযোগ পরে বানানো নতুন কিছু ছিল না। 17:3 আয়াতকে ইবনে কাসীর আনেন সম্বোধনের ধরনের মিল হিসেবে: সেখানে গোটা একটা প্রজন্মকে ডাকা হয়েছে এক শুকরগুজার বান্দার সন্তান বলে। আর 16:91 আয়াত শর্তটা আমাদের হাতেই তুলে দেয়: অঙ্গীকার করলে আল্লাহর অঙ্গীকার পূর্ণ কর, আর পাকাপোক্ত করার পর কসম ভেঙো না, কারণ তোমরা আল্লাহকেই নিজেদের উপর সাক্ষী বানিয়েছ।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping Your Side",
          "bn": "নিজের দিকটা রাখা"
        },
        "p": [
          {
            "en": "Start where the verse starts. Take as-Sa'di's three steps and run them on one favour this week: name it in your heart, say it out loud in praise so that someone hears you, and then spend it on something Allah loves. Health becomes an early prayer, a salary becomes a quiet transfer, a free evening becomes an hour with a parent. A favour that never reaches the hands stays a mood, and moods do not hold a covenant together for long.",
            "bn": "আয়াত যেখান থেকে শুরু করে, সেখান থেকেই শুরু করুন। সাদির তিনটি ধাপ নিন আর এ সপ্তাহে একটা নিয়ামতের উপর চালান: অন্তরে তার নাম নিন, মুখে প্রশংসা করে বলুন যেন কেউ শোনে, তারপর আল্লাহ ভালোবাসেন এমন কিছুতে সেটা খরচ করুন। সুস্থতা হয়ে যাক আউয়াল ওয়াক্তের নামাজ, বেতন হয়ে যাক নীরবে পাঠানো কিছু টাকা, খালি একটা সন্ধ্যা হয়ে যাক মা-বাবার সাথে এক ঘণ্টা। যে নিয়ামত হাত পর্যন্ত পৌঁছায় না তা মনের ভালো লাগা হয়েই থাকে, আর ভালো লাগা দিয়ে অঙ্গীকার বেশিদিন টেকে না।"
          },
          {
            "en": "Then read your own side of the covenant as a list rather than a feeling. 2:41 to 2:43 give the terms in short clauses: believe what was sent down, do not trade the signs for a small price, do not mix truth with falsehood, do not hide what you know, establish the prayer, give the zakah. Read them slowly and mark the one you have quietly stopped keeping. That single line is what the verse is asking about, not your general standing.",
            "bn": "এরপর নিজের দিকের অঙ্গীকারটা অনুভূতি হিসেবে নয়, তালিকা হিসেবে পড়ুন। 2:41 থেকে 2:43 আয়াত শর্তগুলো ছোট ছোট বাক্যে দিয়ে দেয়: যা নাজিল হয়েছে তাতে ঈমান আনো, আয়াতের বিনিময়ে সামান্য মূল্য নিও না, সত্যের সাথে মিথ্যা মিশিও না, যা জানো তা লুকিও না, নামাজ কায়েম করো, যাকাত দাও। ধীরে পড়ুন আর দাগ দিন সেই শর্তটায় যা আপনি চুপচাপ ছেড়ে দিয়েছেন। আয়াত ঠিক সেই একটা লাইনের খোঁজ করছে, আপনার সাধারণ অবস্থানের নয়।"
          },
          {
            "en": "The last clause is the one that changes a week the fastest. Fear Me alone is not an instruction to be frightened more; it is an instruction to be frightened of fewer things. Most compromises in a working life are made out of a small dread of somebody: a manager, a relative, a crowd online. Name the fear that is currently steering a decision, hold it beside the One the verse names, and notice how much of your caution has been going to the wrong address.",
            "bn": "শেষ কথাটাই এক সপ্তাহ সবচেয়ে দ্রুত বদলে দিতে পারে। ‘কেবল আমাকেই ভয় কর’ মানে আরও বেশি ভয় পাওয়ার হুকুম নয়, কম জিনিসকে ভয় পাওয়ার হুকুম। কর্মজীবনের বেশিরভাগ আপস হয় কাউকে না কাউকে সামান্য ভয় থেকে: বস, আত্মীয়, কিংবা অনলাইনের ভিড়। এই মুহূর্তে আপনার কোন সিদ্ধান্তটা কোন ভয় চালাচ্ছে তার নাম নিন, আয়াত যাঁর নাম বলছে তাঁর পাশে সেটা রাখুন, আর দেখুন আপনার সতর্কতার কতটা এতদিন ভুল ঠিকানায় যাচ্ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Chief of Istighfar",
          "bn": "ইস্তিগফারের সর্দার"
        },
        "p": [
          {
            "en": "The Sunnah has a supplication built out of these very two words, favour and covenant. Al-Bukhari records from Shaddad ibn Aws (RA) that the Prophet ﷺ called it the chief manner of asking forgiveness: O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I am upon Your covenant and Your promise as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for none forgives sins but You.",
            "bn": "সুন্নাহতে এমন দোয়া আছে, যা গড়া হয়েছে এই দুটো শব্দ দিয়েই, নিয়ামত আর অঙ্গীকার। বুখারি শাদ্দাদ ইবনে আউস (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ একে বলেছেন ইস্তিগফারের সর্দার: হে আল্লাহ, আপনিই আমার রব, আপনি ছাড়া কোনো ইলাহ নেই। আপনি আমাকে সৃষ্টি করেছেন আর আমি আপনার বান্দা, আর আমি আপনার অঙ্গীকার ও ওয়াদার উপরই আছি যতটা পারি। আমি যা করেছি তার অনিষ্ট থেকে আপনার কাছে পানাহ চাই। আমার উপর আপনার নিয়ামত স্বীকার করছি, আর নিজের গুনাহও স্বীকার করছি, তাই আমাকে মাফ করুন, আপনি ছাড়া গুনাহ কেউ মাফ করে না।"
          },
          {
            "en": "Look at what it does with the verse's own clause. It does not claim a perfect keeping; it says as much as I can, and then moves straight from the covenant to a confession. That is the honest shape of a believer's side of the exchange. A shorter line can be added in the verse's own words, composed here and not narrated: O Allah, make me remember what You gave me before I ask You for more, and let my fear of You leave no room for the rest.",
            "bn": "খেয়াল করুন, দোয়াটা আয়াতের শর্তটা নিয়ে কী করে। দোয়াটা নিখুঁতভাবে রক্ষা করার দাবি করে না, বলে ‘যতটা পারি’, তারপর অঙ্গীকার থেকে সোজা চলে যায় স্বীকারোক্তিতে। লেনদেনে বান্দার দিকটা আসলে এই চেহারারই। আয়াতের নিজের শব্দ দিয়ে সাথে ছোট একটা লাইন যোগ করা যায়, এটি এখানে বানানো, কোনো বর্ণনা নয়: হে আল্লাহ, আরও চাওয়ার আগে আপনি যা দিয়েছেন তা আমাকে মনে করিয়ে দিন, আর আপনার ভয় যেন বাকি সব ভয়ের জায়গা না রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Carry These Into Tomorrow",
          "bn": "কাল সকালে সাথে নিন"
        },
        "p": [
          {
            "en": "Which favour in my life have I stopped mentioning, even privately, simply because it has been there a long time? If remembering is meant to reach the hands, what did my gratitude actually do this week that someone else could have noticed? And if a favour I never name is a favour I have not yet remembered, how long is my list of things I have received and never once said thank you for?",
            "bn": "আমার জীবনের কোন নিয়ামতের কথা আমি আর মুখেও আনি না, নিজের কাছেও না, স্রেফ এই কারণে যে সেটা অনেক দিন ধরে আছে? স্মরণ যদি হাত পর্যন্ত পৌঁছানোর কথা হয়, তবে এ সপ্তাহে আমার শুকরিয়া এমন কী করেছে যা অন্য কারও চোখে পড়তে পারত? আর যে নিয়ামতের নাম আমি কখনো নিইনি সেটা যদি এখনো স্মরণই না করা হয়ে থাকে, তাহলে পাওয়া অথচ কখনো একবারও শুকরিয়া না বলা জিনিসের তালিকাটা আমার কত লম্বা?"
          },
          {
            "en": "The covenant is worded as an exchange, so which clause of my side have I quietly stopped keeping while still expecting the other half, and which line of 2:41 to 2:43 makes me want to turn the page when I read it slowly? Fear Me alone narrows the list to One, so whose displeasure moves me faster than His right now, and what would change tomorrow morning if that order were corrected?",
            "bn": "অঙ্গীকারটা লেনদেনের ভাষায় বলা। তাহলে আমার দিকের কোন শর্তটা আমি চুপচাপ ছেড়ে দিয়েছি অথচ অন্য অর্ধেকটা এখনো আশা করে আছি, আর 2:41 থেকে 2:43 আয়াত ধীরে পড়লে কোন লাইনটায় এসে আমার পাতা উল্টে দিতে ইচ্ছে করে? ‘কেবল আমাকেই ভয় কর’ তালিকাটা একজনে নামিয়ে আনে; এই মুহূর্তে কার অসন্তুষ্টি আমাকে তাঁর চেয়ে দ্রুত নাড়ায়, আর এই ক্রমটা ঠিক হয়ে গেলে কাল সকালে কী বদলে যেত?"
          }
        ]
      }
    ]
  },
  "2:45-46": {
    "sections": [
      {
        "h": {
          "en": "Two Handholds for the Struggling",
          "bn": "সংগ্রামীর জন্য দুটি অবলম্বন"
        },
        "p": [
          {
            "en": "Seek help through patience and prayer. The verb is ista'inu — ask for aid, the same root a Muslim recites in every unit of prayer: You alone we worship, You alone we ask for help. The verse names two instruments: sabr, which holds the self steady, and salah, which connects it upward. In its context the address falls within a long passage to the Children of Israel, who were being called to let go of status and follow the truth; the counsel is general because that struggle is.",
            "bn": "ধৈর্য আর নামাজের মাধ্যমে সাহায্য চাও। ক্রিয়াটি 'ইসতাঈনূ', অর্থাৎ সাহায্য চাও। এই একই মূলের শব্দ মুসলিম প্রতি রাকাতে পড়ে: আমরা কেবল তোমারই ইবাদত করি, কেবল তোমারই কাছে সাহায্য চাই। আয়াত দুটো উপায়ের নাম নেয়: সবর, যা নিজেকে স্থির রাখে, আর সালাত, যা তাকে উপরের সাথে জুড়ে দেয়। প্রসঙ্গের দিক থেকে এ সম্বোধন বনী ইসরাঈলকে বলা এক লম্বা অংশের ভেতরে পড়ে। তাদের ডাকা হচ্ছিল মর্যাদার মোহ ছেড়ে সত্যের পথে চলতে। তবু উপদেশটা সবার জন্য, কারণ সেই সংগ্রামও সবার।"
          },
          {
            "en": "The same command returns in 2:153, this time addressed to the believers directly, with an addition: indeed Allah is with the patient. The Quran issuing one prescription twice, to two different audiences, marks it as the standing treatment for difficulty as such — not for one community's crisis. Whatever the weight is, these are the two hands offered for carrying it.",
            "bn": "একই হুকুম 2:153 আয়াতে আবার আসে, এবার সরাসরি মুমিনদের প্রতি, সাথে একটা কথা যোগ করে: নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। কুরআন একই ব্যবস্থাপত্র দুবার দিচ্ছে, দুই ভিন্ন শ্রোতাকে। এতেই বোঝা যায়, এটা কোনো এক জাতির সংকটের ওষুধ নয়, যেকোনো কষ্টের স্থায়ী চিকিৎসা। বোঝা যা-ই হোক, তা বইতে এই দুটো হাতই বাড়িয়ে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Quran Admits It Is Heavy",
          "bn": "কুরআন নিজেই বলে: এটা ভারী"
        },
        "p": [
          {
            "en": "Then comes a sentence of remarkable candor: and indeed it is kabirah — heavy, a big thing — except for the khashi'in. The Quran does not pretend that rising for prayer while anxious, tired or wronged is easy. It certifies the difficulty in the same breath as the command. That honesty matters pastorally: the person who finds prayer hard is not failing at some effortless thing; he is experiencing exactly what the Book said he would, and is being told where the lightness comes from.",
            "bn": "তারপর আসে আশ্চর্য রকম খোলামেলা একটা বাক্য: আর নিশ্চয়ই তা 'কাবীরা', অর্থাৎ ভারী, বড় ব্যাপার, তবে খাশিঈন, মানে খুশূওয়ালাদের জন্য নয়। দুশ্চিন্তা, ক্লান্তি বা জুলুমের শিকার হয়ে নামাজে দাঁড়ানো সহজ, কুরআন এমন ভান করে না। হুকুমের সাথে একই নিঃশ্বাসে সে কষ্টটাও স্বীকার করে নেয়। মানুষকে সান্ত্বনা আর দিশা দেওয়ার কাজে এই সততার বড় দাম আছে। নামাজ যার কাছে কঠিন লাগে, সে কোনো সহজ কাজে ব্যর্থ হচ্ছে না। কিতাব যা বলেছিল, সে ঠিক তা-ই টের পাচ্ছে। আর তাকে বলে দেওয়া হচ্ছে, হালকা লাগাটা আসে কোথা থেকে।"
          },
          {
            "en": "Khushu' is the lowered, humbled attentiveness of a heart that knows before Whom it stands. The verse makes it the dividing line: the same prayer that is a burden to one person is a relief to another, and the difference is not in the prayer but in the state of the one praying. Weight, here, is a symptom to be read — heaviness in worship invites a question about the heart, not about the worship.",
            "bn": "খুশূ হলো এমন হৃদয়ের নত, বিনীত মনোযোগ, যে জানে সে কার সামনে দাঁড়িয়েছে। আয়াত একেই সীমারেখা বানায়: একই নামাজ একজনের কাছে বোঝা, আরেকজনের কাছে স্বস্তি। তফাতটা নামাজে নয়, যে নামাজ পড়ছে তার অবস্থায়। এখানে ভার একটা লক্ষণ, যা বুঝে নিতে হয়। ইবাদত ভারী লাগলে প্রশ্ন ওঠে হৃদয় নিয়ে, ইবাদত নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Makes It Light",
          "bn": "যা একে হালকা করে"
        },
        "p": [
          {
            "en": "The next verse, 2:46, defines the khashi'in: those who think that they will meet their Lord and that to Him they will return. The verb is yazunnuna, ordinarily to suppose — but the commentators, at-Tabari among them, are explicit that zann here means certainty, yaqin, as it does in several places in the Quran. What lightens prayer is not technique but conviction: the settled knowledge that the meeting will happen and that every road ends at Him.",
            "bn": "পরের আয়াত, 2:46, খাশিঈনদের পরিচয় দেয়: যারা মনে করে যে তারা তাদের রবের সাথে সাক্ষাৎ করবে, আর তাঁরই দিকে ফিরে যাবে। ক্রিয়াটি 'ইয়াযুন্নূনা', সাধারণ অর্থে ধারণা করা। কিন্তু মুফাসসিররা, তাঁদের মধ্যে আত-তাবারীও, স্পষ্ট বলেছেন, এখানে 'যন' মানে নিশ্চিত বিশ্বাস, ইয়াকীন, যেমন কুরআনের আরও কয়েক জায়গায়। নামাজকে হালকা করে কোনো কৌশল নয়, দৃঢ় বিশ্বাস: এই পাকা জানা যে সাক্ষাৎ হবেই, আর প্রতিটি পথ গিয়ে শেষ হয় তাঁরই কাছে।"
          },
          {
            "en": "The logic is simple once stated. A person stands willingly, even eagerly, before someone he is certain he will answer to and hope in. If the meeting feels theoretical, the standing feels pointless, and pointless acts are always heavy. So the verse quietly diagnoses every season of heavy worship: the weight is proportional to the distance the return has drifted from the center of one's attention.",
            "bn": "যুক্তিটা একবার বলে দিলেই সহজ। মানুষ নিজের ইচ্ছায়, এমনকি আগ্রহ নিয়েই দাঁড়ায় তাঁর সামনে, যাঁর কাছে তাকে জবাব দিতেই হবে বলে সে নিশ্চিত, আর যাঁর কাছে তার আশা। সাক্ষাৎটা যদি শুধু তত্ত্বের কথা মনে হয়, দাঁড়ানোটাও অর্থহীন মনে হয়। আর অর্থহীন কাজ সবসময়ই ভারী। তাই ইবাদত ভারী লাগার প্রতিটি মৌসুমের কারণ আয়াতটি চুপচাপ ধরিয়ে দেয়: তাঁর কাছে ফিরে যাওয়ার কথাটা মনোযোগের কেন্দ্র থেকে যতটা দূরে সরে গেছে, ভারও ঠিক ততটা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prophet's Own Refuge",
          "bn": "নবীজির নিজের আশ্রয়"
        },
        "p": [
          {
            "en": "The Prophet ﷺ lived this verse before teaching it. It is reported in the collection of Abu Dawud that when a matter distressed him, he would turn to prayer. He also said to Bilal (RA), in words preserved in the same collection: give us rest by it, O Bilal — the call to prayer announcing not another duty on a hard day, but the hard day's relief. Prayer in his practice was where pressure was taken, not where pressure accumulated.",
            "bn": "নবী ﷺ এ আয়াত শেখানোর আগে নিজের জীবনে তা পালন করেছেন। আবু দাউদের সংকলনে বর্ণিত আছে, কোনো বিষয় তাঁকে চিন্তায় ফেললে তিনি নামাজে দাঁড়াতেন। একই সংকলনে সংরক্ষিত এক কথায় তিনি বিলাল (রাঃ)-কে বলেছেন: হে বিলাল, এর মাধ্যমে আমাদের প্রশান্তি দাও। আযান তখন কঠিন দিনে আরেকটা দায়িত্বের ঘোষণা নয়, সেই কঠিন দিনেরই স্বস্তি। তাঁর জীবনে নামাজ ছিল চাপ নামিয়ে রাখার জায়গা, চাপ জমানোর জায়গা নয়।"
          },
          {
            "en": "That ordering is the verse's practical teaching: prayer as first response, not last resort. The common pattern is reversed — we exhaust the phone calls, the worrying and the planning, and pray when nothing is left. The verse and the Prophet's ﷺ example put the prayer at the front of the emergency, where the help is actually sought from the One who can give it, as 29:45 adds that prayer itself restrains and that the remembrance of Allah is greatest.",
            "bn": "এই ক্রমটাই আয়াতের হাতে-কলমে শিক্ষা: নামাজ প্রথম সাড়া, শেষ উপায় নয়। আমাদের সাধারণ অভ্যাস উল্টো। ফোনের পর ফোন, দুশ্চিন্তা, পরিকল্পনা সব শেষ করি, আর কিছু বাকি না থাকলে তবে নামাজে দাঁড়াই। আয়াত আর নবী ﷺ-এর দৃষ্টান্ত নামাজকে বসায় বিপদের একেবারে শুরুতে। সেখানে সাহায্য সত্যিই চাওয়া হয় তাঁর কাছে, যিনি তা দিতে পারেন। 29:45 আয়াত এর সাথে যোগ করে, নামাজ নিজেই মন্দ থেকে ফিরিয়ে রাখে, আর আল্লাহর জিকিরই সবচেয়ে বড়।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience and Prayer, Woven",
          "bn": "সবর ও সালাত, একসূত্রে"
        },
        "p": [
          {
            "en": "The two instruments reinforce each other. Patience keeps a person praying when answers are slow; prayer replenishes the patience that daily life spends. One works horizontally, absorbing what people and circumstances inflict; the other works vertically, drawing from what does not run out. The believer under pressure alternates between them the way a climber moves between two handholds — never releasing both at once.",
            "bn": "এ দুটো উপায় একে অন্যকে শক্তি দেয়। জবাব আসতে দেরি হলে সবর মানুষকে নামাজে টিকিয়ে রাখে। আর রোজকার জীবন যে সবর খরচ করে ফেলে, নামাজ তা আবার ভরে দেয়। একটা কাজ করে পাশাপাশি, মানুষ আর পরিস্থিতি যা চাপিয়ে দেয় তা সয়ে নিয়ে। অন্যটা কাজ করে উপরের দিকে, যা কখনো ফুরায় না তা থেকে টেনে এনে। চাপে থাকা মুমিন এ দুটোর মধ্যে পালা করে ভর দেয়, যেমন পাহাড়ে চড়া মানুষ দুই আঁকড়ানোর জায়গার মধ্যে ভর বদলায়, কিন্তু কখনো দুটো একসাথে ছাড়ে না।"
          },
          {
            "en": "Living the verse can begin the same week it is read. When the next difficulty announces itself, pray two rak'ahs before opening the laptop or making the calls, and name the difficulty to Allah inside them. Then practice one deliberate act of sabr in the same matter — a complaint withheld, a decision delayed until calm. Small as they are, these are the verse's own two handholds, offered to the khashi'in and to everyone still becoming one of them.",
            "bn": "আয়াতটা যে সপ্তাহে পড়লেন, সে সপ্তাহ থেকেই জীবনে আনা শুরু করা যায়। পরের কষ্টটা যখন জানান দেবে, ল্যাপটপ খোলা বা ফোন করার আগে দুই রাকাত নামাজ পড়ুন, আর সেই নামাজের ভেতরেই কষ্টটার নাম ধরে আল্লাহকে বলুন। তারপর একই বিষয়ে ভেবেচিন্তে একটা সবরের কাজ করুন: একটা অভিযোগ মুখে না আনা, কিংবা মন শান্ত না হওয়া পর্যন্ত একটা সিদ্ধান্ত পিছিয়ে রাখা। ছোট হলেও এ দুটোই আয়াতের নিজের দুই অবলম্বন। এগুলো খাশিঈনদের জন্য, আর যারা এখনো তাদের একজন হয়ে ওঠার পথে আছে, তাদের প্রত্যেকের জন্যও।"
          }
        ]
      }
    ]
  },
  "2:49-50": {
    "sections": [
      {
        "h": {
          "en": "Two Memories Before Two Commands",
          "bn": "দুই হুকুমের আগে দুই স্মৃতি"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and from 2:40 it turns to the Children of Israel, the community in Madinah that already held a scripture. The address opens with remember My favour and closes, many verses later, with the same call in 2:122. Between the two frames runs a long recital of what Allah did for them and what they did in return. 2:49 and 2:50 are the first two scenes of that recital. Before them, 2:47 has repeated the summons to remember, and 2:48 has warned of a Day when no soul can stand in for another. After them, 2:51 moves straight to the calf.",
            "bn": "সূরা বাকারা মাদানী সূরা। ২:৪০ থেকে এর কথা ঘুরে যায় বনী ইসরাঈলের দিকে, মদীনার সেই সম্প্রদায়ের দিকে যাদের হাতে আগে থেকেই কিতাব ছিল। সম্বোধন শুরু হয় 'আমার নিয়ামত স্মরণ কর' দিয়ে, আর বহু আয়াত পরে ২:১২২ আয়াতে সেই একই ডাক দিয়ে শেষ হয়। মাঝখানে লম্বা এক হিসাব: আল্লাহ তাদের জন্য কী করেছেন, আর বদলে তারা কী করেছে। ২:৪৯ ও ২:৫০ সেই হিসাবের প্রথম দুই দৃশ্য। ঠিক আগে ২:৪৭ আবার স্মরণের ডাক দিয়েছে, ২:৪৮ সাবধান করেছে এমন এক দিনের কথা বলে যেদিন কেউ কারো বদলে দাঁড়াতে পারবে না। ঠিক পরে ২:৫১ সোজা চলে যায় বাছুরের ঘটনায়।"
          },
          {
            "en": "The placement matters. The reader is asked to remember before being asked to believe, and to face a Day of no substitutes before hearing the story of a rescue. That order keeps the memory honest: the favour is real, but it does not buy anyone a place on the Day. What the sequence is doing across 2:40 to 2:123 is laying favour, ingratitude and renewed mercy in layer after layer, so that by the end nobody can mistake the pattern. These two verses lay the first layer, and they lay it with the gentlest of the favours, a rescue.",
            "bn": "এই বিন্যাসের মানে আছে। ঈমান আনতে বলার আগে মনে করতে বলা হচ্ছে, আর উদ্ধারের গল্প শোনানোর আগে দেখানো হচ্ছে সেই দিন, যেদিন কেউ কারো বদলি হবে না। এতে স্মৃতিটা খাঁটি থাকে: নিয়ামত সত্যি, কিন্তু সেই নিয়ামত দিয়ে কেয়ামতের দিনে জায়গা কেনা যায় না। ২:৪০ থেকে ২:১২৩ পর্যন্ত পুরো অংশটা যা করছে তা হল, নিয়ামত, অকৃতজ্ঞতা আর নতুন করে রহমত, এই তিনটিকে স্তরে স্তরে সাজানো, যাতে শেষে গিয়ে ধরনটা কারো চোখ এড়াতে না পারে। এই দুই আয়াত প্রথম স্তরটা বসায়, আর বসায় সবচেয়ে কোমল নিয়ামত দিয়ে: উদ্ধার।"
          }
        ]
      },
      {
        "h": {
          "en": "Rescued, Driven, Tried",
          "bn": "উদ্ধার, পীড়ন, পরীক্ষা"
        },
        "p": [
          {
            "en": "Three words carry the first verse. Najjaynakum, We saved you, is from the root n-j-w, to escape or be brought to safety; 2:49 uses the intensive form najjayna, while 2:50, 7:141 and 14:6 tell the same deliverance with anja, a lighter form of the same root. Yasumunakum, they were afflicting you, is from s-w-m, to impose a thing on someone and keep driving him under it; Abu Ubaydah glossed it as humiliation, and the imperfect tense pictures the torment as continuous rather than a single blow. The sons slaughtered and the women left alive then spell out what that torment was.",
            "bn": "প্রথম আয়াত দাঁড়িয়ে আছে তিনটি শব্দের উপর। 'নাজ্জাইনাকুম', আমি তোমাদের উদ্ধার করেছিলাম, এর মূল ন-জ-ও, বিপদ থেকে বেরিয়ে নিরাপদে পৌঁছানো। ২:৪৯ আয়াতে এসেছে জোরালো রূপ 'নাজ্জাইনা', আর ২:৫০, ৭:১৪১ ও ১৪:৬ আয়াতে একই উদ্ধারের কথা বলা হয়েছে একই মূলের হালকা রূপ 'আনজা' দিয়ে। 'ইয়াসুমুনাকুম', তারা তোমাদের যাতনা দিত, এর মূল স-ও-ম, কারো উপর কিছু চাপিয়ে তাকে তার নিচে ঠেলে রাখা। আবু উবাইদা এর অর্থ করেছেন লাঞ্ছনা। ক্রিয়ার চলমান রূপ যাতনাটাকে দেখায় একটানা চলতে থাকা কষ্ট হিসেবে, এক ঘায়ের ব্যাপার হিসেবে নয়। ছেলেদের জবাই আর মেয়েদের বাঁচিয়ে রাখা, এই দুটো তখন খুলে বলে যাতনাটা আসলে কী ছিল।"
          },
          {
            "en": "The third word is bala'. From b-l-w, to test, it names a trial that reveals what a thing is made of, and the Quran uses it for hardship and for ease alike, as 21:35 says openly. Here the sentence is deliberately open: and in that was a great trial from your Lord. In what? The slaughter, or the saving? The grammar leaves room for both, and the commentators, as the next section shows, took it both ways. The reader is being told that suffering and deliverance are both examinations, and that the second is not easier to pass.",
            "bn": "তৃতীয় শব্দ 'বালা'। মূল ব-ল-ও, পরীক্ষা করা, যে পরীক্ষায় ধরা পড়ে জিনিসটা আসলে কী দিয়ে তৈরি। কুরআন শব্দটি কষ্টের জন্যও ব্যবহার করে, স্বাচ্ছন্দ্যের জন্যও, ২১:৩৫ আয়াতে খোলাখুলি সেটাই বলা আছে। এখানে বাক্যটি ইচ্ছে করেই খোলা রাখা: 'আর এতে ছিল তোমাদের রবের পক্ষ থেকে মহাপরীক্ষা।' কীসে? জবাইয়ে, না উদ্ধারে? ব্যাকরণ দুটোরই জায়গা রাখে, আর মুফাসসিররা দুভাবেই নিয়েছেন, পরের অংশে তা দেখা যাবে। পাঠককে বলা হচ্ছে, কষ্টও পরীক্ষা, মুক্তিও পরীক্ষা, আর দ্বিতীয়টায় পাশ করা সহজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Parted With You In It",
          "bn": "তোমাদের নিয়েই সাগর চিরে"
        },
        "p": [
          {
            "en": "2:50 says faraqna bikum al-bahr, We parted the sea by you, with the preposition bi attached to the people rather than to the sea. Al-Qurtubi and others read it as the sea being split on their account and, on one reading, as they entered it, so that the parting happened with them inside it, not before they arrived. Then two verbs in quick succession: We saved you, We drowned. The same water, the same hour, two opposite outcomes, and the difference between them was nothing the people had done that morning. That is what a favour looks like when it is stated without decoration.",
            "bn": "২:৫০ বলছে 'ফারাকনা বিকুমুল বাহর', আমি তোমাদের দিয়ে সাগর বিভক্ত করেছিলাম। 'বি' অব্যয়টি লেগে আছে মানুষের সাথে, সাগরের সাথে নয়। কুরতুবী ও অন্যরা এর অর্থ নিয়েছেন: সাগর চিরেছিল তাদেরই কারণে, আর এক পাঠে, তারা ঢোকার সময়ই। অর্থাৎ সাগর চিরেছিল তারা ভেতরে থাকা অবস্থায়, তারা পৌঁছানোর আগে নয়। তারপর পরপর দুটো ক্রিয়া: তোমাদের বাঁচালাম, ওদের ডোবালাম। একই পানি, একই ঘণ্টা, দুই উল্টো পরিণতি। আর সেই সকালে এই ফারাক তারা নিজেদের কোনো কাজে অর্জন করেনি। সাজসজ্জা ছাড়া নিয়ামতকে বললে এমনই দেখায়।"
          },
          {
            "en": "The verse ends with wa antum tanzurun, while you were looking on. It is a small clause with a large purpose. The people addressed in Madinah had seen none of it; their ancestors had. Yet the Quran says you throughout, treating the nation as one body across the centuries, the way a family speaks of what happened to us. The watching is also part of the gift. As-Sa'di notes that they were made to see their enemy's end with their own eyes so that their hearts could be settled.",
            "bn": "আয়াত শেষ হয় 'ওয়া আনতুম তানযুরুন' দিয়ে, আর তোমরা দেখছিলে। ছোট কথা, বড় উদ্দেশ্য। মদীনায় যাদের ডাকা হচ্ছে তারা এর কিছুই দেখেনি, দেখেছিল তাদের পূর্বপুরুষ। তবু কুরআন পুরোটা জুড়ে বলছে 'তোমরা', জাতিকে শতাব্দী পেরিয়ে এক দেহ ধরে, যেভাবে পরিবারের লোক বলে 'আমাদের সাথে যা হয়েছিল'। দেখাটাও নিয়ামতের অংশ। সা'দী লিখেছেন, শত্রুর শেষ পরিণতি তাদের নিজের চোখে দেখানো হয়েছিল যাতে মন ঠান্ডা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Read",
          "bn": "মুফাসসিররা যা পড়েছেন"
        },
        "p": [
          {
            "en": "At-Tabari takes the trial at the end of 2:49 as the rescue itself: the saving of your fathers from Pharaoh's torment was a great blessing from your Lord, since bala' in Arabic can mean a gift by which a person is tested. Ar-Razi lays both senses side by side and lets them stand: bala' is used for hardship, mihnah, and for favour, ni'mah, and here the slaughter was the first and the saving was the second. On this reading the verse describes not one trial but two, and the second is the one the audience is still living inside.",
            "bn": "তাবারী ২:৪৯ এর শেষের 'পরীক্ষা'কে ধরেছেন উদ্ধার হিসেবেই: ফেরাউনের যাতনা থেকে তোমাদের বাপদাদাকে বাঁচানো ছিল তোমাদের রবের পক্ষ থেকে বিরাট নিয়ামত, কারণ আরবিতে 'বালা' এমন দানকেও বলে যা দিয়ে মানুষকে যাচাই করা হয়। রাযী দুটো অর্থ পাশাপাশি রেখে দুটোকেই দাঁড় করান: 'বালা' আসে কষ্ট অর্থে, অর্থাৎ মিহনা, আবার অনুগ্রহ অর্থে, অর্থাৎ নি'মাহ। এখানে জবাই ছিল প্রথমটা, উদ্ধার দ্বিতীয়টা। এই পাঠে আয়াত এক পরীক্ষার কথা বলছে না, দুই পরীক্ষার, আর দ্বিতীয়টার ভেতরেই শ্রোতারা এখনো বাস করছে।"
          },
          {
            "en": "Ibn Kathir follows at-Tabari on the blessing but adds, citing 21:35 and 7:168, that within every blessing there is a test, exactly as within every hardship. He also notes that the killing of sons is the explanation of the worst torment, not an item added to it. Al-Qurtubi, on yasumunakum, prefers the sense of an excess in tormenting, going beyond what any ruler needs to keep a people down. As-Sa'di draws the practical line: a favour done to the fathers is a favour to the sons, which is why the descendants are addressed as if they had stood on the shore.",
            "bn": "ইবনে কাসীর নিয়ামতের ব্যাপারে তাবারীর সাথে যান, তবে ২১:৩৫ ও ৭:১৬৮ টেনে যোগ করেন: প্রতিটি নিয়ামতের ভেতরে পরীক্ষা আছে, ঠিক যেমন প্রতিটি কষ্টের ভেতরে। তিনি এটাও ধরিয়ে দেন, ছেলেদের হত্যা 'নিকৃষ্টতম যাতনা'র ব্যাখ্যা, তার সাথে জোড়া বাড়তি কিছু নয়। কুরতুবী 'ইয়াসুমুনাকুম' শব্দে পছন্দ করেন বাড়াবাড়ির অর্থ: একটা জাতিকে দাবিয়ে রাখতে যতটা লাগে তার চেয়ে অনেক বেশি যাতনা। সা'দী টানেন কাজের লাইনটা: বাপদাদার উপর নিয়ামত মানে সন্তানের উপরও নিয়ামত, তাই বংশধরদের এমনভাবে ডাকা হচ্ছে যেন তারাই তীরে দাঁড়িয়ে ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day of Ashura",
          "bn": "আশুরার দিন"
        },
        "p": [
          {
            "en": "The one sound hadith the classical commentators attach to this rescue is about a fast. Sahih al-Bukhari 2004 records from Ibn Abbas (RA): the Prophet ﷺ came to Madinah and found the Jews fasting the day of Ashura. He asked, 'What is this?' They said, 'This is a good day; this is the day on which Allah saved the Children of Israel from their enemy, so Musa fasted it.' He said, 'I have more right to Musa than you,' and he fasted it and commanded that it be fasted.",
            "bn": "এই উদ্ধারের সাথে ক্লাসিক মুফাসসিররা যে একটি সহীহ হাদিস জুড়ে দেন, সেটি রোজার। সহীহ বুখারী ২০০৪, ইবনে আব্বাস (রাঃ) থেকে: নবী ﷺ মদীনায় এসে দেখলেন ইহুদীরা আশুরার দিন রোজা রাখছে। জিজ্ঞেস করলেন, 'এটা কী?' তারা বলল, 'এ এক ভালো দিন। এই দিনে আল্লাহ বনী ইসরাঈলকে তাদের শত্রুর হাত থেকে বাঁচিয়েছিলেন, তাই মূসা এই দিনে রোজা রেখেছিলেন।' তিনি বললেন, 'মূসার উপর তোমাদের চেয়ে আমার হক বেশি।' তারপর তিনি নিজে সেই রোজা রাখলেন এবং রাখতে হুকুম দিলেন।"
          },
          {
            "en": "Notice what the hadith does with the verse. It takes a favour done to another community and makes it a reason for this community to worship. The Prophet ﷺ did not say that the Exodus was their story and not his; he claimed Musa (AS), and with him the memory, for every believer. Ibn Kathir places the report exactly here, under 2:50, so that the reader who has just been told to remember has a way to do it with his body once a year. Gratitude in the Sunnah is rarely left as a feeling; it is given a day and a fast.",
            "bn": "হাদিসটি আয়াতকে নিয়ে কী করছে, খেয়াল করুন। অন্য এক সম্প্রদায়ের উপর করা নিয়ামতকে হাদিসটি এই উম্মতের ইবাদতের কারণ বানিয়ে দেয়। নবী ﷺ বলেননি, ওটা ওদের গল্প, আমার নয়। তিনি মূসা (আঃ)-কে দাবি করলেন, আর তাঁর সাথে স্মৃতিটাকেও, প্রত্যেক মুমিনের জন্য। ইবনে কাসীর রেওয়ায়েতটি রাখেন ঠিক এখানে, ২:৫০ আয়াতের নিচে, যাতে যে পাঠককে এইমাত্র মনে করতে বলা হল, সে বছরে একদিন শরীর দিয়ে মনে করার উপায় পায়। সুন্নাহতে কৃতজ্ঞতা কমই শুধু অনুভূতি হয়ে থাকে, তাকে দেওয়া হয় একটা দিন আর একটা রোজা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Deliverance Elsewhere",
          "bn": "একই উদ্ধার অন্য সূরায়"
        },
        "p": [
          {
            "en": "The Exodus is retold across the Quran, and each telling adds a stroke. 14:6 has Musa (AS) himself reminding his people of this exact favour, in almost the same words, which shows that the call to remember began with the rescuer's own prophet, not with a later rebuke. 28:4 gives Pharaoh's method: he split the population into factions and crushed one of them, so that the slaughter of sons was policy, not madness. 26:63 supplies the moment 2:50 compresses into one verb, the staff striking the water and each half standing like a great mountain.",
            "bn": "এই উদ্ধারের কথা কুরআন বারবার বলেছে, আর প্রতিবার নতুন একটা রেখা যোগ হয়। ১৪:৬ আয়াতে মূসা (আঃ) নিজেই তাঁর কওমকে প্রায় একই শব্দে এই নিয়ামত মনে করিয়ে দিচ্ছেন। মনে রাখার এই ডাক তাহলে পরের কোনো ভর্ৎসনা থেকে শুরু হয়নি, শুরু হয়েছিল উদ্ধারের নবীর মুখেই। ২৮:৪ ফেরাউনের কায়দা দেখায়: সে জনগণকে দলে দলে ভাগ করে একটা দলকে পিষে রেখেছিল, তাই ছেলেদের জবাই ছিল রাষ্ট্রের নীতি, কারো পাগলামি নয়। ২৬:৬৩ দেয় সেই মুহূর্তটা, যাকে ২:৫০ একটি ক্রিয়ায় চেপে রেখেছে: লাঠির আঘাত পানিতে, আর দুই ভাগ দাঁড়িয়ে গেল বিশাল পাহাড়ের মতো।"
          },
          {
            "en": "10:92 finishes the drowning with a sentence 2:50 does not need but the reader does: Pharaoh's body would be preserved as a sign for those after him, and many people pass Allah's signs heedlessly. Finally 21:35 states the rule that makes bala' intelligible, that Allah tests with evil and with good alike. Read together, these verses turn 2:49-50 from an isolated reminder into a keyhole through which the whole story can be seen: the oppression, the method, the sea, the sign left behind, and the test that ease itself becomes.",
            "bn": "১০:৯২ ডুবে যাওয়ার ঘটনাটা শেষ করে এমন এক বাক্যে যা ২:৫০ আয়াতের দরকার নেই, কিন্তু পাঠকের দরকার আছে: ফেরাউনের দেহ রক্ষা করা হবে পরবর্তীদের জন্য নিদর্শন হিসেবে, অথচ অনেক মানুষ আল্লাহর নিদর্শন থেকে বেখেয়াল। শেষে ২১:৩৫ সেই নিয়মটা বলে দেয় যা 'বালা' শব্দকে বোধগম্য করে: আল্লাহ মন্দ দিয়েও পরীক্ষা করেন, ভালো দিয়েও। সবগুলো একসাথে পড়লে ২:৪৯-৫০ আর বিচ্ছিন্ন স্মৃতি থাকে না, হয়ে যায় চাবির ফুটো, যার ভেতর দিয়ে পুরো গল্পটা দেখা যায়: জুলুম, তার কায়দা, সাগর, পেছনে রেখে যাওয়া নিদর্শন, আর স্বাচ্ছন্দ্য নিজেই যে পরীক্ষা হয়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Rescue You Did Not Witness",
          "bn": "যে উদ্ধার আপনি দেখেননি"
        },
        "p": [
          {
            "en": "The verse addresses people who inherited a rescue, and that is most of us. Somebody's illness that did not take them, a family that survived a war or a famine, a parent who was brought out of poverty or out of misguidance: the reader stands on the far shore of deliverances he was not old enough, or not yet born, to watch. The first practice is simply to name them. Once a week, perhaps on Friday, a believer can list three things he was saved from without lifting a hand, and say alhamdulillah for each by name rather than in general.",
            "bn": "আয়াতের শ্রোতারা উদ্ধার পেয়েছিল উত্তরাধিকারে, আর আমাদের অধিকাংশেরই অবস্থা তাই। কারো অসুখ যা তাকে নিয়ে যায়নি, একটা পরিবার যা যুদ্ধ বা দুর্ভিক্ষ পার হয়ে এসেছে, বাবা বা মা যাকে দারিদ্র্য থেকে কিংবা গোমরাহি থেকে বের করে আনা হয়েছিল। পাঠক দাঁড়িয়ে আছেন এমন সব উদ্ধারের ওপারের তীরে, যা দেখার বয়স তাঁর হয়নি, বা তখনো জন্মই হয়নি। প্রথম আমলটা সোজা: এগুলোর নাম মুখে আনা। সপ্তাহে একদিন, হয়তো জুমার দিনে, তিনটি জিনিসের তালিকা করুন যা থেকে হাত না তুলেই আপনাকে বাঁচানো হয়েছে, আর প্রতিটির জন্য আলাদা করে আলহামদুলিল্লাহ বলুন, মোটের উপর নয়।"
          },
          {
            "en": "The second practice is harder. The verse calls the rescue a trial, so the believer should ask what his ease is currently testing. A comfortable season tempts a person to think the sea parted because of him. The corrective is to spend a portion of what the rescue gave: time, if health was returned; money, if income was; teaching, if guidance was. And on Ashura, the fast the Prophet ﷺ claimed from Musa (AS) is the ready-made act: a day when the body remembers a favour the mind has stopped noticing.",
            "bn": "দ্বিতীয় আমলটা কঠিন। আয়াত উদ্ধারকে বলছে পরীক্ষা, তাই মুমিনের জিজ্ঞেস করা উচিত, আমার স্বাচ্ছন্দ্য এখন কীসের পরীক্ষা নিচ্ছে। আরামের মৌসুমে মনে হতে থাকে, সাগর তো আমার জন্যই চিরেছিল। এর ওষুধ হল উদ্ধার যা দিয়েছে তার একটা অংশ খরচ করা: স্বাস্থ্য ফিরে এলে সময়, রোজগার ফিরে এলে টাকা, হেদায়েত পেলে শেখানো। আর আশুরার দিনে সেই রোজা, যা নবী ﷺ মূসা (আঃ) থেকে নিজের বলে দাবি করেছিলেন, তৈরি আমল হয়ে হাতের কাছেই আছে। একটা দিন, যেদিন মন যে নিয়ামত খেয়াল করা ছেড়ে দিয়েছে, শরীর সেটা মনে করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a From the Shore",
          "bn": "তীর থেকে এক দোয়া"
        },
        "p": [
          {
            "en": "The verse is not itself a supplication, and no specific Sunnah du'a is attached to it beyond the fast already mentioned. A short du'a in its own vocabulary, offered here as a composed prayer and not as a transmitted text, might run: O Allah, You saved the people of Musa from the worst of torments and parted the sea while they watched. Save us from every Pharaoh outside us and every Pharaoh within us, and when You save us, make the saving a trial that we pass.",
            "bn": "আয়াতটি নিজে দোয়া নয়, আর উপরে বলা রোজা ছাড়া এর সাথে নির্দিষ্ট কোনো সুন্নাহ দোয়াও জোড়া নেই। আয়াতের নিজের শব্দে ছোট একটা দোয়া, যা এখানে দেওয়া হচ্ছে রচিত দোয়া হিসেবে, বর্ণিত হাদিস হিসেবে নয়: হে আল্লাহ, আপনি মূসার কওমকে নিকৃষ্টতম যাতনা থেকে বাঁচিয়েছেন, তাদের চোখের সামনে সাগর চিরে দিয়েছেন। আমাদেরও বাঁচান বাইরের প্রতিটি ফেরাউন থেকে আর ভেতরের প্রতিটি ফেরাউন থেকে। আর যখন বাঁচাবেন, সেই বাঁচানোকে এমন পরীক্ষা বানান যাতে আমরা পাশ করি।"
          },
          {
            "en": "The reader can say it in any language and in his own words; the point is the vocabulary, najjaytana, You saved us, and bala', the trial, so that the du'a carries the verse's two halves and not only the first. It can be said after a hardship ends, which is exactly when most people stop making du'a. The believer who asks to be made grateful at the moment of relief is doing what the verse was revealed to produce: turning a rescue into remembrance before it can turn into entitlement.",
            "bn": "পাঠক নিজের ভাষায় নিজের কথায় বলতে পারেন। আসল কথা শব্দ দুটো: 'নাজ্জাইতানা', আপনি আমাদের বাঁচিয়েছেন, আর 'বালা', পরীক্ষা, যাতে দোয়ায় আয়াতের দুই অংশই থাকে, শুধু প্রথমটা নয়। কষ্ট কেটে যাওয়ার পর এই দোয়া বলা যায়, আর ঠিক তখনই বেশিরভাগ মানুষ দোয়া করা থামিয়ে দেয়। যে মুমিন মুক্তির মুহূর্তে কৃতজ্ঞ হওয়ার তৌফিক চান, তিনি ঠিক সেটাই করছেন যার জন্য আয়াত নাজিল হয়েছিল: উদ্ধারকে স্মরণে বদলে দেওয়া, তা প্রাপ্য মনে করার আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Which deliverances in my own life did I merely inherit, and when did I last thank Allah for them by name? When a hardship of mine ended, did I remember the ending as a favour from my Lord, or file it away as luck and move on? The people watched their enemy drown: what did I feel, honestly, the last time someone who had wronged me fell, and did I remember Who had done the saving?",
            "bn": "আমার নিজের জীবনে কোন উদ্ধারগুলো আমি স্রেফ উত্তরাধিকারে পেয়েছি, আর সেগুলোর জন্য নাম ধরে আল্লাহর শুকরিয়া শেষ কবে করেছি? আমার কোনো কষ্ট যখন কেটে গেল, সেই কেটে যাওয়াকে কি আমার রবের নিয়ামত বলে মনে রেখেছি, নাকি 'কপাল ভালো' বলে তুলে রেখে এগিয়ে গেছি? তারা শত্রুকে ডুবতে দেখেছিল। যে আমার উপর জুলুম করেছিল, সে শেষবার যখন পড়ে গেল, সত্যি বলতে আমি কী অনুভব করেছি? আর বাঁচানোর কাজটা কে করলেন, সেটা কি তখন মনে ছিল?"
          },
          {
            "en": "If ease is a trial as much as hardship, what is my present ease examining in me, and how would I know whether I am passing? The Prophet ﷺ gave gratitude a day and a fast: what one act, on a date I can name, will carry my remembrance of the favours this verse describes, so that the memory lives in my calendar and not only in my mood?",
            "bn": "স্বাচ্ছন্দ্য যদি কষ্টের মতোই পরীক্ষা হয়, তবে আমার এখনকার আরাম আমার ভেতরের কী যাচাই করছে, আর পাশ করছি কি না তা বুঝব কীভাবে? নবী ﷺ শুকরিয়ার জন্য একটা দিন আর একটা রোজা রেখে গেছেন। আমার কোন একটা কাজ, নির্দিষ্ট কোন তারিখে, এই আয়াতে বলা নিয়ামতগুলোর স্মরণ বয়ে নেবে, যাতে স্মৃতিটা শুধু মনের অবস্থায় নয়, আমার ক্যালেন্ডারেও বেঁচে থাকে?"
          }
        ]
      }
    ]
  },
  "2:58-59": {
    "sections": [
      {
        "h": {
          "en": "After the Manna, a Door",
          "bn": "মান্নার পরে এক দরজা"
        },
        "p": [
          {
            "en": "The verse stands in the middle of the recital that began at 2:40, in which Allah reminds the Children of Israel of favour after favour and of what met each one. 2:57 has just described the cloud, the manna and the quails, and closed with the line that they wronged not Us but themselves. 2:58 opens with the same wa idh, and when, that has introduced most of the scenes since 2:49: and when We said, enter this town. 2:59 records what some of them did with the instruction, and 2:60 moves on to the water struck from the rock.",
            "bn": "২:৪০ থেকে যে বর্ণনা শুরু হয়েছে, আয়াতটি তার মাঝখানে। সেখানে আল্লাহ বনী ইসরাঈলকে একের পর এক নিয়ামতের কথা মনে করিয়ে দেন, আর প্রতিটির পর কী ঘটেছিল তাও। ঠিক আগে ২:৫৭ বলেছে মেঘের ছায়া, মান্না আর সালওয়ার কথা, আর শেষ করেছে এই কথায়: তারা আমার উপর জুলুম করেনি, জুলুম করেছে নিজেদের উপর। ২:৫৮ শুরু হয় সেই একই 'ওয়া ইয' (আর যখন) দিয়ে, ২:৪৯ থেকে বেশিরভাগ দৃশ্য যা দিয়ে শুরু হয়েছে: আর যখন আমি বললাম, এই জনপদে ঢোকো। ২:৫৯ জানায়, সেই নির্দেশ পেয়ে তাদের কেউ কেউ কী করল, আর ২:৬০ চলে যায় পাথরে আঘাত করে বের করা পানির কথায়।"
          },
          {
            "en": "The commentators place the scene after the wandering. Ibn Kathir explains that when the people refused to enter the holy land, in the episode told at 5:21-26, they were left to wander, and that this command to enter came when the wandering was over. Which town is meant is a real difference among them, as a later section shows. What matters for placement is the pattern: a provision, an instruction attached to it, a response, and a consequence. The verse is the recital's clearest case of a mercy that arrived with its own small conditions and was met with a change of words.",
            "bn": "মুফাসসিররা ঘটনাটিকে রাখেন মরুভূমিতে ঘুরে বেড়ানোর পরে। ইবনে কাসীর বুঝিয়েছেন, ৫:২১-২৬ আয়াতে বলা ঘটনায় লোকেরা যখন পবিত্র ভূমিতে ঢুকতে অস্বীকার করল, তখন তাদের মরুভূমিতে ঘুরে বেড়াতে ছেড়ে দেওয়া হল। ঢোকার এই হুকুম এল সেই ঘোরাঘুরি শেষ হলে। জনপদটা কোনটা, এ নিয়ে তাঁদের মধ্যে সত্যিকারের মতভেদ আছে, পরের এক অংশে তা আসবে। আয়াতটির জায়গা বোঝার জন্য আসল কথা হল ধারাটা: একটা রিজিক, তার সাথে জুড়ে দেওয়া একটা নির্দেশ, একটা জবাব, আর একটা পরিণতি। পুরো বর্ণনায় এর চেয়ে পরিষ্কার উদাহরণ আর নেই: রহমত এল নিজের ছোট ছোট শর্ত নিয়ে, আর তার জবাব এল শব্দ বদলে দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Plenty, Bowing, One Word",
          "bn": "প্রাচুর্য, নত মাথা, একটি শব্দ"
        },
        "p": [
          {
            "en": "Raghadan, in ease and abundance, is from r-gh-d, a life that is wide and untroubled; the Quran uses the same word for Adam (AS) and his wife in the garden at 2:35. Eat wherever you will, then, is not rationing but its opposite. Sujjadan is the plural of sajid, one who prostrates or bows, from s-j-d, the root of sujud in prayer. Placed beside a gate it cannot mean full prostration while walking, so the word is stretched to its wider sense: entering bent, lowered, humbled. The plenty and the bowing come in the same breath.",
            "bn": "'রাগাদান' মানে স্বচ্ছন্দে ও প্রাচুর্যে। মূল র-গ-দ, এমন জীবন যা প্রশস্ত আর দুশ্চিন্তাহীন। ২:৩৫ আয়াতে জান্নাতে আদম (আঃ) ও তাঁর স্ত্রীর জন্য কুরআন ঠিক এই শব্দই ব্যবহার করেছে। কাজেই 'সেখান থেকে যেখানে খুশি খাও' মানে মেপে মেপে দেওয়া নয়, বরং তার উল্টো। 'সুজ্জাদান' হল 'সাজিদ'-এর বহুবচন: যে সিজদা করে বা নত হয়। মূল স-জ-দ, নামাজের সিজদাও এই মূল থেকে। দরজার সাথে জুড়ে আসায় এর মানে হাঁটতে হাঁটতে পুরো সিজদা হতে পারে না। তাই শব্দটিকে নিতে হয় তার বিস্তৃত অর্থে: ঝুঁকে, নিচু হয়ে, বিনীত হয়ে ঢোকা। প্রাচুর্য আর নত হওয়া, দুটো আসে একই নিঃশ্বাসে।"
          },
          {
            "en": "Hittah is the word the story turns on. From h-t-t, to put down or lift off a load, it means a putting-down: put our burdens down from us. Al-Qurtubi points out that it stands in the nominative, as if the people were to say our request is a hittah, a lifting of sins. The command is to say one word, and the reward follows without pause: We will forgive your sins for you. The verse then adds, and We will increase the doers of good, a promise beyond forgiveness for those who do more.",
            "bn": "'হিত্তাহ' সেই শব্দ, যার উপর গল্পটা ঘোরে। মূল হ-ত-ত, বোঝা নামানো বা তুলে নেওয়া, তাই অর্থ 'নামিয়ে দেওয়া': আমাদের বোঝা আমাদের থেকে নামিয়ে দিন। কুরতুবী ধরিয়ে দেন, শব্দটি এসেছে 'আমাদের আরজি হিত্তাহ' এই ধাঁচে, অর্থাৎ লোকেরা যেন বলছে, আমাদের চাওয়া হল গুনাহ তুলে নেওয়া। হুকুম ছিল একটি শব্দ বলার, আর পুরস্কার আসে সঙ্গে সঙ্গেই: আমি তোমাদের গুনাহ মাফ করব। তারপর আয়াত যোগ করে, আর নেককারদের আমি আরও বাড়িয়ে দেব। যারা আরও বেশি করে, তাদের জন্য এ মাফের উপরে বাড়তি এক ওয়াদা।"
          }
        ]
      },
      {
        "h": {
          "en": "Changed Into Something Else",
          "bn": "বদলে দিল অন্য কথায়"
        },
        "p": [
          {
            "en": "2:59 uses baddala, from b-d-l, to exchange one thing for another; it is the same root as the verb in 2:61, where the people trade a better food for a lesser. What was exchanged here was a word: those who wronged changed it for a saying other than what had been said to them. The Quran does not report the substitute. The commentators fill the gap from a hadith, quoted below, but the verse itself keeps the focus on the act of changing, not on the joke. Whatever the replacement was, it was not what they were told to say.",
            "bn": "২:৫৯ ব্যবহার করেছে 'বাদ্দালা', মূল ব-দ-ল, এক জিনিসের বদলে আরেকটা নেওয়া। ২:৬১ আয়াতের ক্রিয়াটিও একই মূল থেকে, যেখানে লোকেরা ভালো খাবারের বদলে নিকৃষ্টটা চায়। এখানে বদল হল একটা শব্দের: যারা জুলুম করেছিল, তাদের যা বলতে বলা হয়েছিল তার বদলে তারা অন্য এক কথা বলল। বদলে কী বলেছিল, কুরআন জানায় না। মুফাসসিররা ফাঁকটা ভরেন একটি হাদিস দিয়ে, নিচে তা আসছে। কিন্তু আয়াত নিজে নজর রাখে বদলানোর কাজটার উপর, ঠাট্টার উপর নয়। বদলে তারা যা-ই বলুক, যা বলতে বলা হয়েছিল সেটা তা ছিল না।"
          },
          {
            "en": "Notice the restriction repeated twice: those who wronged changed, and upon those who wronged We sent down. Not everyone changed the word, and the punishment fell only on those who did. The rijz that came from the sky is glossed by Ibn Abbas as punishment wherever the word appears in the Book, and many commentators, on the basis of the hadith about the plague below, take it here as an epidemic, which the English translation adds in brackets. The verse ends on bima kanu yafsuqun, because they were persistently rebelling, a verb of continuous action, so the plague answered a habit, not one lapse.",
            "bn": "খেয়াল করুন, একটা সীমা টানা হয়েছে দুবার: 'যারা জুলুম করল তারা বদলাল', আর 'যারা জুলুম করল তাদের উপর নামালাম'। সবাই শব্দ বদলায়নি, আর শাস্তি পড়েছিল কেবল যারা বদলেছিল তাদের উপর। আকাশ থেকে যে 'রিজয' এল, ইবনে আব্বাস বলেন, কিতাবে যেখানেই শব্দটি আছে, তার অর্থ শাস্তি। নিচের মহামারীর হাদিসের ভিত্তিতে অনেক মুফাসসির এখানে একে মহামারী ধরেন; ইংরেজি অনুবাদেও বন্ধনীতে মহামারী লেখা আছে। আয়াত শেষ হয় 'বিমা কানু ইয়াফসুকুন' দিয়ে, কারণ তারা লাগাতার নাফরমানি করত। ক্রিয়াটি চলতে থাকা কাজের, তাই মহামারী এসেছিল একটা অভ্যাসের জবাবে, এক মুহূর্তের ভুলের জবাবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Town, the Gate, the Word",
          "bn": "জনপদ, দরজা, শব্দ"
        },
        "p": [
          {
            "en": "Which town? Ibn Kathir reports that as-Suddi, Qatadah and ar-Rabi ibn Anas held it to be Jerusalem, Bayt al-Maqdis, and that a report from Ibn Abbas and Abdur-Rahman ibn Zayd named Jericho; he prefers the first. On sujjadan, al-Hasan al-Basri took it as literal prostration on entering, while ar-Razi rejected that, and others read it as humility of body, since people walking through a gate cannot prostrate; Ibn Abbas said simply, bowing. The two readings share the point: the body was to say what the tongue was about to say.",
            "bn": "কোন জনপদ? ইবনে কাসীর জানান, সুদ্দী, কাতাদা ও রাবী ইবনে আনাস বলেছেন জেরুজালেম, বাইতুল মাকদিস, আর ইবনে আব্বাস ও আবদুর রহমান ইবনে যায়েদ থেকে এক বর্ণনায় এসেছে জেরিকো। তিনি নিজে প্রথমটাকে অগ্রাধিকার দেন। 'সুজ্জাদান' নিয়ে হাসান বসরী নিয়েছেন ঢোকার সময় আক্ষরিক সিজদা, রাযী তা নাকচ করেছেন, আর অন্যরা একে পড়েছেন দেহের বিনয় হিসেবে, কারণ দরজা দিয়ে হাঁটতে থাকা মানুষ সিজদা করতে পারে না। ইবনে আব্বাস সোজা বলেছেন, ঝুঁকে। দুই পাঠের কথা এক: জিহ্বা যা বলতে যাচ্ছে, শরীর আগে তা বলবে।"
          },
          {
            "en": "On hittah, Ibn Abbas glossed it as istighfar, seeking forgiveness, and al-Hasan and Qatadah as the plain request, take our errors down from us. The difference is small and both are true to the root. As-Sa'di reads We will increase the doers of good as increase in goodness and reward, while noting that the forgiveness was promised to everyone who did the two things asked. Ibn Kathir sums up the changed word in 2:59 as a change of both word and deed, the mocking phrase being the outward sign of an inward refusal.",
            "bn": "'হিত্তাহ' নিয়ে ইবনে আব্বাস অর্থ করেছেন ইস্তিগফার, মাফ চাওয়া। হাসান ও কাতাদা নিয়েছেন সরল আরজি: আমাদের ভুলগুলো আমাদের থেকে নামিয়ে দিন। ফারাক সামান্য, আর দুটোই শব্দমূলের সাথে মেলে। সা'দী 'নেককারদের বাড়িয়ে দেব' বলতে বুঝেছেন নেকি ও সওয়াব বাড়ানো। সাথে তিনি ধরিয়ে দেন, মাফের ওয়াদা ছিল প্রত্যেকের জন্য, যে-ই বলে দেওয়া দুটো কাজ করেছে। ইবনে কাসীরের সারকথা হল, ২:৫৯ আয়াতে শুধু শব্দ বদলায়নি, কাজও বদলেছিল: ঠাট্টার বাক্যটা ছিল ভেতরের অস্বীকারের বাইরের চিহ্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Prophet ﷺ Said Happened",
          "bn": "নবী ﷺ জানালেন কী ঘটেছিল"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari 4479 records from Abu Hurairah (RA) that the Prophet ﷺ said: 'It was said to the Children of Israel, enter the gate bowing and say hittah. But they entered crawling on their buttocks and changed it, and said, a grain in a hair.' The report supplies what the verse withheld: the bowing was mocked with a posture, and the word was mocked with a rhyme, habbah for hittah, a seed in place of a lifting of sins. The hadith is the reason every commentary tells the story the way it does.",
            "bn": "সহীহ বুখারী ৪৪৭৯, আবু হুরায়রা (রাঃ) থেকে, নবী ﷺ বলেছেন: 'বনী ইসরাঈলকে বলা হয়েছিল, দরজা দিয়ে নত হয়ে ঢোকো আর বলো হিত্তাহ। কিন্তু তারা নিতম্বে ভর দিয়ে হামাগুড়ি দিয়ে ঢুকল, আর কথাটা বদলে বলল, চুলের ভেতর একটা দানা।' আয়াত যা চেপে রেখেছিল, এই বর্ণনা তা জানিয়ে দেয়। তারা নত হওয়াকে ঠাট্টা করল একটা ভঙ্গি দিয়ে, আর শব্দটাকে ঠাট্টা করল ছন্দ মিলিয়ে: হিত্তাহর জায়গায় হাব্বাহ, গুনাহ তুলে নেওয়ার জায়গায় একটা দানা। প্রতিটি তাফসীর গল্পটা যেভাবে বলে, তার কারণ এই হাদিস।"
          },
          {
            "en": "A second report explains the punishment. Sahih al-Bukhari 3473 records from Usamah ibn Zayd (RA) that the Prophet ﷺ said: 'The plague is an affliction that was sent upon a group of the Children of Israel, or upon those before you. So when you hear of it in a land, do not go to it, and when it breaks out in a land where you are, do not leave in flight from it.' The classical commentators connect this to the rijz from the sky, and it turns the verse into a living instruction: a believer's conduct in an epidemic descends, in part, from 2:59.",
            "bn": "শাস্তির ব্যাখ্যা দেয় দ্বিতীয় এক বর্ণনা। সহীহ বুখারী ৩৪৭৩, উসামা ইবনে যায়েদ (রাঃ) থেকে, নবী ﷺ বলেছেন: 'মহামারী এক আপদ, যা পাঠানো হয়েছিল বনী ইসরাঈলের এক দলের উপর, অথবা তোমাদের আগে যারা ছিল তাদের উপর। তাই কোনো ভূমিতে তা শুনলে সেখানে যেয়ো না, আর তোমরা যে ভূমিতে আছ সেখানে তা দেখা দিলে পালিয়ে বেরিয়ো না।' প্রাচীন মুফাসসিররা একে আকাশ থেকে আসা 'রিজয'-এর সাথে জোড়েন, আর তাতে আয়াতটি হয়ে যায় জীবন্ত এক নির্দেশ: মহামারীর সময় মুমিন কীভাবে চলবেন, তার শিক্ষার একটা অংশ আসে ২:৫৯ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Door in Other Surahs",
          "bn": "অন্য সূরায় সেই দরজা"
        },
        "p": [
          {
            "en": "7:161-162 tell the same scene with small differences that the commentators noticed: there the command is dwell rather than enter, and say hittah comes before enter the gate. The two orderings are both true, since the people were to do both, and reading them together stops a reader from making the story hang on a single sequence. 4:154 lists enter the gate bowing among the terms of their covenant, side by side with do not transgress on the Sabbath, so the gate was a covenant matter and not a passing courtesy.",
            "bn": "৭:১৬১-১৬২ একই দৃশ্য বলে, কিছু ছোট ফারাক নিয়ে, যা মুফাসসিররা খেয়াল করেছেন: সেখানে হুকুম 'ঢোকো' নয়, 'বাস করো', আর 'হিত্তাহ বলো' আসে 'দরজা দিয়ে ঢোকো'র আগে। দুই ক্রমই সত্য, কারণ লোকেদের দুটোই করতে হত। দুটো একসাথে পড়লে পাঠক আর গল্পটাকে একটা নির্দিষ্ট ক্রমের উপর দাঁড় করান না। ৪:১৫৪ তাদের অঙ্গীকারের শর্তের তালিকায় 'দরজা দিয়ে নত হয়ে ঢোকো' রেখেছে, ঠিক 'শনিবারে সীমা লঙ্ঘন করো না'র পাশে। দরজাটা তাহলে অঙ্গীকারের বিষয় ছিল, চলতি ভদ্রতা নয়।"
          },
          {
            "en": "5:21 gives Musa (AS) commanding his people to enter the blessed land, and 5:24 gives their earlier refusal, we will never enter it as long as they are in it. That refusal is the background the commentators assume for 2:58: the entry finally offered had already been refused once. And 110:3 shows what the gate was for. When help and victory come, the Prophet ﷺ is told to glorify his Lord and seek His forgiveness. Ibn Kathir sets the two beside each other: victory is the moment to bow and say hittah, not to straighten up.",
            "bn": "৫:২১ আয়াতে মূসা (আঃ) তাঁর কওমকে বরকতময় ভূমিতে ঢুকতে হুকুম দিচ্ছেন, আর ৫:২৪ আয়াতে তাদের আগের অস্বীকার: ওরা যতদিন ওখানে আছে আমরা কখনো ঢুকব না। ২:৫৮ আয়াতের পটভূমি হিসেবে মুফাসসিররা এই অস্বীকারটাই ধরে নেন: শেষে যে প্রবেশের সুযোগ দেওয়া হল, তা আগে একবার ফিরিয়ে দেওয়া হয়েছিল। আর ১১০:৩ দেখায় দরজাটা কীসের জন্য ছিল। সাহায্য আর বিজয় এলে নবী ﷺ-কে বলা হচ্ছে রবের প্রশংসায় তাসবীহ পড়তে আর তাঁর কাছে মাফ চাইতে। ইবনে কাসীর দুটোকে পাশাপাশি রাখেন: বিজয়ের মুহূর্তটাই নত হয়ে হিত্তাহ বলার সময়, পিঠ সোজা করার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "At the Gate of Every Mercy",
          "bn": "প্রতিটি রহমতের দরজায়"
        },
        "p": [
          {
            "en": "Every mercy in a believer's life arrives with a small instruction attached. A new job comes with the instruction to be honest in it; recovery from illness with the instruction to use the body for what it was returned for; a marriage with the instruction of kindness; a Ramadan with the instruction to fast it and not merely to eat at night. The verse trains a person to look for the sujjadan and the hittah in each blessing, the posture and the word that are being asked of him at the door, and to give them before he sits down to eat.",
            "bn": "মুমিনের জীবনে প্রতিটি রহমত আসে ছোট একটা নির্দেশ সাথে নিয়ে। নতুন চাকরি আসে তাতে সৎ থাকার নির্দেশ নিয়ে। অসুখ থেকে সেরে ওঠা আসে এই নির্দেশ নিয়ে যে শরীরটা যে কাজের জন্য ফেরত দেওয়া হল সেই কাজেই লাগাতে হবে। বিয়ে আসে সদাচরণের নির্দেশ নিয়ে, রমজান আসে রোজা রাখার নির্দেশ নিয়ে, শুধু রাতে খাওয়ার নয়। আয়াত মানুষকে শেখায় প্রতিটি নিয়ামতে 'সুজ্জাদান' আর 'হিত্তাহ' খুঁজতে। দরজায় তার কাছে কোন ভঙ্গি আর কোন শব্দ চাওয়া হচ্ছে, সেটা খেয়াল করতে, আর খেতে বসার আগেই তা দিয়ে দিতে।"
          },
          {
            "en": "The practical discipline is in the words of worship. The people were told to say one thing and said another that sounded like it. A believer can go through the phrases he says mechanically: the istighfar after prayer, the tasbih on the fingers, the du'a before food. Do they still mean what they were given to mean, or have they worn into a rhyme? This week, choose one fixed phrase and say it slowly, once, with the meaning in front of the mind. And when good news comes, before telling anyone, bow and ask forgiveness; that is the order 2:58 and 110:3 both give.",
            "bn": "হাতে-কলমে চর্চার জায়গা হল ইবাদতের শব্দগুলো। লোকেদের একটা কথা বলতে বলা হয়েছিল, তারা বলল অন্য কথা, যা শুনতে প্রায় একই রকম। মুমিন যে বাক্যগুলো যন্ত্রের মতো বলে যান, সেগুলো একবার মিলিয়ে দেখতে পারেন: নামাজের পরের ইস্তিগফার, আঙুলে গোনা তাসবীহ, খাওয়ার আগের দোয়া। যে অর্থের জন্য এগুলো দেওয়া হয়েছিল, এখনো কি সেই অর্থ বহন করে, নাকি ক্ষয়ে গিয়ে শুধু ছন্দ হয়ে গেছে? এই সপ্তাহে একটা বাঁধা বাক্য বেছে নিন, একবার ধীরে বলুন, অর্থটা মনের সামনে রেখে। আর সুখবর এলে কাউকে বলার আগে নত হয়ে মাফ চান। ২:৫৮ ও ১১০:৩, দুটোই এই ক্রম শেখায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a From the Word's Root",
          "bn": "শব্দের মূল থেকে দোয়া"
        },
        "p": [
          {
            "en": "The verse contains its own du'a, one word long, and the Sunnah gives a fuller form built on the same idea. Sahih al-Bukhari records, from Abu Musa al-Ash'ari (RA), that the Prophet ﷺ used to say: 'O Allah, forgive me my sin and my ignorance and my excess in my affair, and what You know better than I. O Allah, forgive me my earnest and my jest, my mistake and my deliberate act, and all of that is with me.' The word for sin there, khati'ah, is the singular of khataya in the verse.",
            "bn": "আয়াতের ভেতরেই তার দোয়া আছে, এক শব্দের, আর সুন্নাহ একই ভাবনার উপর একটা পূর্ণ রূপ দিয়েছে। সহীহ বুখারীতে আবু মূসা আশআরী (রাঃ) থেকে এসেছে, নবী ﷺ বলতেন: 'হে আল্লাহ, আমার গুনাহ, আমার অজ্ঞতা, আমার কাজে আমার বাড়াবাড়ি, আর যা আপনি আমার চেয়ে ভালো জানেন, সব মাফ করুন। হে আল্লাহ, আমার গম্ভীর কথা আর আমার ঠাট্টা, আমার ভুল আর আমার ইচ্ছাকৃত কাজ মাফ করুন, আর এসব সবই আমার মধ্যে আছে।' সেখানে গুনাহর জন্য শব্দটি 'খাতীআহ', আয়াতের 'খাতায়া'র একবচন।"
          },
          {
            "en": "Saying it at a door is the way to make it the verse's du'a: on entering the mosque, on the threshold of a new home, at the start of a journey or a contract. The Children of Israel were asked for one word at a gate; the Prophet ﷺ gave his community many words for the same posture. A believer who says hittah in his own language, put my burden down, and then says the Bukhari du'a in full, has done what the verse asked and what the people who changed the word refused to do.",
            "bn": "দরজায় দাঁড়িয়ে বললেই এটা আয়াতের দোয়া হয়ে যায়: মসজিদে ঢোকার সময়, নতুন বাড়ির চৌকাঠে, সফর বা চুক্তির শুরুতে। বনী ইসরাঈলের কাছে দরজায় একটা শব্দ চাওয়া হয়েছিল, নবী ﷺ তাঁর উম্মতকে একই ভঙ্গির জন্য অনেক শব্দ দিয়ে গেছেন। যে মুমিন নিজের ভাষায় হিত্তাহ বলেন, আমার বোঝা নামিয়ে দিন, তারপর বুখারীর দোয়াটি পুরো পড়েন, তিনি সেটাই করলেন যা আয়াত চেয়েছিল, আর যা শব্দ বদলানো লোকেরা করতে চায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "When Allah's mercy asks something small of me, a bowed head, a plain admission, do I give it, or does the smallness make me treat it as beneath me? Which words of worship have I worn down over the years into sounds that no longer say what they were given to say? What am I doing at the gate of the blessing I am in right now: bowing, or walking in upright as if I had built the town myself?",
            "bn": "আল্লাহর রহমত যখন আমার কাছে ছোট কিছু চায়, নত মাথা, সোজা স্বীকারোক্তি, আমি কি তা দিই, নাকি ছোট বলেই সেটাকে নিজের মর্যাদার নিচে মনে করি? বছরের পর বছর বলতে বলতে ইবাদতের কোন শব্দগুলোকে আমি ক্ষইয়ে নিছক আওয়াজ বানিয়ে ফেলেছি, যেগুলো আর সেই কথা বলে না যার জন্য সেগুলো দেওয়া হয়েছিল? এই মুহূর্তে যে নিয়ামতের ভেতরে আছি, তার দরজায় আমি কী করছি: নত হচ্ছি, নাকি এমন সোজা হয়ে ঢুকছি যেন জনপদটা আমিই বানিয়েছি?"
          },
          {
            "en": "Is there an instruction attached to a favour I received this year that I have quietly set aside while keeping the favour itself? The punishment fell only on those who changed the word: do I take comfort in the fact that others changed it too, or do I ask what I myself am saying at the door, and whether it is still the word I was given?",
            "bn": "এই বছর পাওয়া কোনো নিয়ামতের সাথে জোড়া এমন কোনো নির্দেশ কি আছে, যা আমি চুপচাপ সরিয়ে রেখেছি, অথচ নিয়ামতটা রেখে দিয়েছি? শাস্তি পড়েছিল কেবল তাদের উপর যারা শব্দ বদলেছিল। অন্যরাও বদলেছে, এই ভেবে আমি কি স্বস্তি পাই, নাকি নিজেকে জিজ্ঞেস করি, দরজায় দাঁড়িয়ে আমি নিজে কী বলছি, আর সেটা কি এখনো সেই শব্দ যা আমাকে দেওয়া হয়েছিল?"
          }
        ]
      }
    ]
  },
  "2:61": {
    "sections": [
      {
        "h": {
          "en": "Twelve Springs, Then a Complaint",
          "bn": "বারো ঝর্ণা, তারপর অভিযোগ"
        },
        "p": [
          {
            "en": "2:61 is one of the longest verses in the address to the Children of Israel that runs from 2:40, and it is where the run of remembered scenes that began at 2:49 first reaches a verdict. Just before it, 2:60 has Musa (AS) praying for water and twelve springs breaking from a rock, with the instruction eat and drink from Allah's provision and do not spread corruption. Just after it, 2:62 opens a wider door, promising reward to whoever believes in Allah and the Last Day and does right, whatever community he came from. Between the water and the promise stands a complaint about food.",
            "bn": "২:৪০ থেকে বনী ইসরাঈলকে উদ্দেশ করে যে বক্তব্য চলছে, ২:৬১ তার সবচেয়ে দীর্ঘ আয়াতগুলোর একটি। ২:৪৯ থেকে একের পর এক যে দৃশ্য মনে করিয়ে দেওয়া হচ্ছিল, সেই ধারা এখানে এসে প্রথমবার রায়ে পৌঁছায়। ঠিক আগে ২:৬০ আয়াতে মূসা (আঃ) পানির জন্য দোয়া করছেন, পাথর থেকে বারোটি ঝর্ণা ফুটছে, সাথে নির্দেশ: আল্লাহর রিজিক থেকে খাও ও পান কর, আর জমিনে ফাসাদ ছড়িয়ো না। ঠিক পরে ২:৬২ খুলে দেয় আরও বড় দরজা: যে-ই আল্লাহ ও শেষ দিনে ঈমান আনে আর নেক কাজ করে, সে যে সম্প্রদায় থেকেই আসুক, তার পুরস্কার আছে। পানি আর ওয়াদার মাঝখানে দাঁড়িয়ে আছে খাবার নিয়ে এক অভিযোগ।"
          },
          {
            "en": "The verse has two halves that read differently. The first is narrative: a request, a reply from Musa (AS), a dismissal. The second is verdict: humiliation and neediness struck upon them, anger from Allah, and two chained explanations beginning with that was because. The sequence from 2:49 has been building toward this: every favour met with a lapse, every lapse met with forgiveness, until the verse where the pattern is named. The reader should notice that the verdict is not about vegetables. It is about what the request for vegetables was a symptom of.",
            "bn": "আয়াতের দুই অর্ধেকের সুর দুই রকম। প্রথমটা কাহিনি: একটা আবদার, মূসা (আঃ)-এর জবাব, এক ধমক। দ্বিতীয়টা রায়: তাদের উপর চাপল লাঞ্ছনা আর অভাব, আল্লাহর গজব, আর 'তা এজন্য যে' দিয়ে শুরু হওয়া পরপর জোড়া দুটো ব্যাখ্যা। ২:৪৯ থেকে ধারাটা এদিকেই এগোচ্ছিল: প্রতিটি নিয়ামতের জবাবে একটা করে পদস্খলন, প্রতিটি পদস্খলনের জবাবে মাফ। শেষে এই আয়াতে এসে ধারাটার নাম বলে দেওয়া হল। খেয়াল করুন, রায়টা শাকসবজি নিয়ে নয়। শাকসবজির আবদারটা কীসের লক্ষণ ছিল, রায় সেটা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "We Will Not Be Patient",
          "bn": "আমরা ধৈর্য ধরব না"
        },
        "p": [
          {
            "en": "The complaint opens with lan nasbira, we will never be patient, from the root s-b-r that the surah has just praised at 2:45. Lan is the emphatic negation of the future in Arabic, so the sentence is not a sigh but a refusal. What they could not bear was ta'am wahid, one kind of food: the manna and quails of 2:57. The list that follows, herbs, cucumbers, fum, lentils and onions, is deliberately ordinary. The word fum has been read as garlic and as wheat, and translations still divide over it; the verse's point survives either way, since all five grow from any patch of earth.",
            "bn": "অভিযোগ শুরু হয় 'লান নাসবিরা' দিয়ে, আমরা কখনো ধৈর্য ধরব না। মূল স-ব-র, সূরা এইমাত্র ২:৪৫ আয়াতে যার প্রশংসা করেছে। আরবিতে ভবিষ্যৎকে জোর দিয়ে নাকচ করে 'লান', তাই বাক্যটা দীর্ঘশ্বাস নয়, সরাসরি অস্বীকার। তারা সইতে পারছিল না 'তাআম ওয়াহিদ', এক রকম খাবার: ২:৫৭ আয়াতের মান্না ও সালওয়া। এরপরের তালিকা, শাক, শসা, ফুম, মসুর, পেঁয়াজ, ইচ্ছে করেই সাদামাটা। 'ফুম' শব্দটির অর্থ কেউ করেছেন রসুন, কেউ গম, অনুবাদগুলো এখনো এ নিয়ে দুই ভাগ। আয়াতের কথা দুভাবেই টেকে, কারণ পাঁচটার সবই যেকোনো টুকরো জমিতে জন্মায়।"
          },
          {
            "en": "Musa's (AS) reply uses two comparatives: adna, the lower or nearer, and khayr, the better. Atastabdiluna, would you exchange, is from b-d-l, the same root as the changed word in 2:59; the surah keeps returning to the act of swapping what Allah gave for what the self prefers. Ihbitu misran, go down to a town, uses the verb of descent that 2:36 and 2:38 used for leaving the garden. What they asked for was easy to get and beneath what they had, so it would not be brought down from the sky; they could walk to it.",
            "bn": "মূসা (আঃ)-এর জবাবে দুটো তুলনা: 'আদনা', নিচু বা কাছের, আর 'খাইর', উত্তম। 'আতাসতাবদিলুন', তোমরা কি বদলে নিতে চাও, এসেছে ব-দ-ল মূল থেকে, ২:৫৯ আয়াতে বদলানো শব্দের সেই একই মূল। আল্লাহ যা দিলেন তার বদলে নফস যা চায় তা নেওয়া, সূরা বারবার এই কাজে ফিরে আসে। 'ইহবিতু মিসরান', কোনো শহরে নেমে যাও, এখানে সেই নামার ক্রিয়া যা ২:৩৬ ও ২:৩৮ আয়াতে জান্নাত ছেড়ে আসার জন্য এসেছিল। তারা যা চাইল তা পাওয়া সহজ, আর যা তাদের হাতে ছিল তার চেয়ে নিচু, তাই তা আকাশ থেকে নামানো হবে না। হেঁটে গেলেই পাওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Struck Upon Them",
          "bn": "তাদের উপর চাপল"
        },
        "p": [
          {
            "en": "Duribat 'alayhim, was struck upon them, is the verb used for pitching a tent or fixing a stamp: the dhillah, humiliation, and maskanah, neediness, are pictured as fastened over them like a covering. Ba'u bi-ghadab, they returned with anger from Allah, uses ba'a, to come back carrying something; at-Tabari explains it by 5:29, where the same verb describes carrying a burden of sin back with oneself. The grammar is passive and the agent is unnamed, which keeps the verse from being a boast by anyone; what fell on them fell from Allah, on account of what follows.",
            "bn": "'দুরিবাত আলাইহিম', তাদের উপর বসিয়ে দেওয়া হল। এই ক্রিয়া তাঁবু খাটানো বা ছাপ বসানোর জন্য ব্যবহার হয়: 'যিল্লাহ', লাঞ্ছনা, আর 'মাসকানাহ', অভাব, যেন আচ্ছাদনের মতো তাদের উপর আটকে দেওয়া হল। 'বাউ বিগাদাব', তারা আল্লাহর গজব নিয়ে ফিরল, এখানে 'বাআ' মানে কিছু বয়ে নিয়ে ফেরা। তাবারী এর ব্যাখ্যা দেন ৫:২৯ দিয়ে, যেখানে একই ক্রিয়া গুনাহর বোঝা নিজের সাথে বয়ে ফেরার কথা বলে। বাক্যে কে করল তার নাম নেই, তাই আয়াত কারো বড়াই হয়ে ওঠে না। যা তাদের উপর পড়ল তা আল্লাহর পক্ষ থেকে পড়ল, এরপরে যে কারণ আসছে সেই কারণে।"
          },
          {
            "en": "Then the two dhalika clauses. That was because they disbelieved in Allah's signs and killed the prophets without right; that was because they disobeyed and were transgressing. The second clause explains the first, not the humiliation directly: the great crimes are traced back to ordinary disobedience and habitual overstepping. Kanu ya'tadun, they used to transgress, is again the continuous form. The verse is drawing a line downward, from small persistent sins to the rejection of prophets, and it is drawing the line for whoever reads it. This is the verse's most transferable content, and the commentators below make it explicit.",
            "bn": "তারপর 'যালিকা' দিয়ে শুরু দুটো বাক্য। তা এজন্য যে তারা আল্লাহর নিদর্শন অস্বীকার করত আর নবীদের অন্যায়ভাবে হত্যা করত; তা এজন্য যে তারা নাফরমানি করত আর সীমা লঙ্ঘন করত। দ্বিতীয় বাক্যটা প্রথমটার ব্যাখ্যা, সরাসরি লাঞ্ছনার নয়: বড় অপরাধগুলোর শিকড় খোঁজা হচ্ছে সাধারণ নাফরমানি আর অভ্যাসের সীমালঙ্ঘনে। 'কানু ইয়া'তাদুন', তারা সীমা লঙ্ঘন করত, আবার সেই চলমান রূপ। আয়াত একটা রেখা টানছে নিচের দিকে, ছোট কিন্তু লেগে থাকা গুনাহ থেকে নবীদের প্রত্যাখ্যান পর্যন্ত, আর যে-ই পড়ুক তার জন্যই টানছে। আয়াতের এই অংশটাই সবচেয়ে বেশি নিজের জীবনে নেওয়ার মতো, নিচে মুফাসসিররা তা খোলাখুলি বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Words, One Meaning",
          "bn": "তিন শব্দ, এক অর্থ"
        },
        "p": [
          {
            "en": "The commentators differ on three words and agree on the meaning. On fum, Ibn Kathir reports that Ibn Mas'ud read it as thum, garlic, and that Ibn Abbas glossed it the same way, while others took it as wheat; al-Bukhari recorded the view that it covers any grain eaten. On misran, Ibn Abbas read the indefinite noun as any city, while Abu al-Aliyah and ar-Rabi ibn Anas took it as Egypt itself; Ibn Kathir prefers any city, since the reply is that what you asked for is common everywhere. On maskanah, Abu al-Aliyah and as-Suddi said poverty, and Atiyah al-Awfi said the tribute they came to pay.",
            "bn": "তিনটি শব্দ নিয়ে মুফাসসিরদের মতভেদ আছে, কিন্তু অর্থে তাঁরা একমত। 'ফুম' নিয়ে ইবনে কাসীর জানান, ইবনে মাসউদ পড়েছেন 'সুম', রসুন, ইবনে আব্বাসও একই অর্থ করেছেন, আর অন্যরা নিয়েছেন গম। বুখারী লিখে রেখেছেন এই মত যে খাওয়ার যেকোনো শস্য এর মধ্যে পড়ে। 'মিসরান' নিয়ে ইবনে আব্বাস অনির্দিষ্ট শব্দটিকে পড়েছেন যেকোনো শহর, আর আবুল আলিয়া ও রাবী ইবনে আনাস নিয়েছেন খোদ মিশর। ইবনে কাসীর যেকোনো শহরকে অগ্রাধিকার দেন, কারণ জবাবটাই হল, তোমরা যা চেয়েছ তা সব জায়গায় পাওয়া যায়। 'মাসকানাহ' নিয়ে আবুল আলিয়া ও সুদ্দী বলেছেন দারিদ্র্য, আতিয়া আওফী বলেছেন সেই কর, যা পরে তাদের দিতে হত।"
          },
          {
            "en": "Al-Hasan al-Basri gives the reading of the heart behind the request: they were bored with one food and remembered the meals of the life they had left. As-Sa'di reads the two that was because clauses as a chain, disobedience and transgression leading on to disbelief and to violence against prophets, so that the verse warns against the first link by showing the last. Ibn Kathir reads the humiliation as a lasting consequence of that conduct; 2:62, which follows at once, keeps the door open to whoever believes and does right, so the reader hears a rule about conduct, not about descent.",
            "bn": "আবদারের পেছনের মনটা পড়ে দেন হাসান বসরী: তারা এক খাবারে বিরক্ত হয়ে গিয়েছিল আর যে জীবন ছেড়ে এসেছিল তার খাওয়া-দাওয়া মনে পড়ছিল। সা'দী 'তা এজন্য যে' বাক্য দুটোকে পড়েন এক শিকল হিসেবে: নাফরমানি আর সীমালঙ্ঘন গড়াতে গড়াতে পৌঁছায় কুফরে আর নবীদের উপর হাত তোলায়, তাই আয়াত শেষ কড়াটা দেখিয়ে প্রথম কড়া থেকে সাবধান করে। ইবনে কাসীর লাঞ্ছনাকে পড়েন সেই আচরণের স্থায়ী পরিণতি হিসেবে। আর ঠিক পরেই ২:৬২ দরজা খোলা রাখে যে-ই ঈমান আনে আর নেক কাজ করে তার জন্য, তাই পাঠক শোনেন আচরণের নিয়ম, বংশের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hadith Ibn Kathir Brings",
          "bn": "ইবনে কাসীর যে হাদিস আনেন"
        },
        "p": [
          {
            "en": "No sound hadith is attached to the request for vegetables itself, and the classical commentaries do not pretend otherwise. What Ibn Kathir brings to the verse is a narration on its second half, the disbelief in signs and the killing of prophets. Sahih Muslim 91 records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ said: 'Pride is rejecting the truth and looking down on people.' Ibn Kathir's point is that the two crimes named in the verse are the two halves of that definition: signs rejected, and the men who carried them held in contempt.",
            "bn": "শাকসবজির আবদারটা নিয়ে সরাসরি কোনো সহীহ হাদিস নেই, আর প্রাচীন তাফসীরগুলোও এমন কিছু আছে বলে দাবি করে না। ইবনে কাসীর যে বর্ণনা আনেন, তা আয়াতের দ্বিতীয় অর্ধেক নিয়ে: নিদর্শন অস্বীকার আর নবী হত্যা। সহীহ মুসলিম ৯১, আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে, নবী ﷺ বলেছেন: 'অহংকার হল হককে ঠেলে দেওয়া আর মানুষকে তুচ্ছ করা।' ইবনে কাসীরের কথা হল, আয়াতে বলা দুই অপরাধ ওই সংজ্ঞারই দুই অর্ধেক: নিদর্শন ঠেলে দেওয়া, আর যাঁরা তা বয়ে এনেছিলেন তাঁদের তুচ্ছ করা।"
          },
          {
            "en": "The hadith keeps the verse from being about them. Pride as the Prophet ﷺ defines it is a posture available to anyone, and its two movements, batar al-haqq and ghamt an-nas, refusing what is true and belittling those who bring it, can be practised at a dinner table as easily as in a court. The believer who reads 2:61 with Muslim 91 beside it stops asking why they wanted onions and starts asking where in his own week he has rejected a truth because he did not like the person who told him.",
            "bn": "হাদিসটি আয়াতকে শুধু 'ওদের' ব্যাপার হতে দেয় না। নবী ﷺ অহংকারের যে সংজ্ঞা দিয়েছেন, সেই মনোভাব যে কারো মধ্যে আসতে পারে। তার দুই চাল, 'বাতারুল হক' আর 'গামতুন নাস', সত্যকে ঠেলে দেওয়া আর যে সত্য আনে তাকে ছোট করা, আদালতে যেমন, খাবার টেবিলেও তেমনি চর্চা করা যায়। যে মুমিন মুসলিম ৯১ পাশে রেখে ২:৬১ পড়েন, তিনি 'ওরা পেঁয়াজ চাইল কেন' জিজ্ঞেস করা ছেড়ে দেন। জিজ্ঞেস করতে শুরু করেন, এই সপ্তাহে কোথায় আমি একটা সত্য ঠেলে দিয়েছি, শুধু যে বলেছে তাকে পছন্দ হয়নি বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Manna in Other Surahs",
          "bn": "অন্য সূরায় মান্না"
        },
        "p": [
          {
            "en": "7:160 tells the same provision, the twelve springs, the cloud, the manna and the quails, and ends with the same sentence as 2:57, they wronged not Us but themselves; it shows the food was a favour before it was a complaint. 20:81 gives the instruction that came with the food, eat of the good things and do not transgress therein, lest My anger descend, and the anger of 2:61 is the anger 20:81 warned of. 3:112 repeats 2:61's closing verdict almost word for word, humiliation, anger, disbelief in signs, killing prophets, disobedience, transgression, and adds an exception, a rope from Allah and a rope from the people.",
            "bn": "৭:১৬০ একই রিজিকের কথা বলে, বারো ঝর্ণা, মেঘ, মান্না ও সালওয়া, আর শেষ করে ২:৫৭ আয়াতের সেই একই বাক্যে, তারা আমার উপর জুলুম করেনি, করেছে নিজেদের উপর। এই আয়াত দেখায়, খাবারটা অভিযোগ হওয়ার আগে নিয়ামত ছিল। ২০:৮১ দেয় খাবারের সাথে আসা নির্দেশ: ভালো জিনিস থেকে খাও, আর এতে সীমা ছাড়িয়ো না, নইলে আমার গজব নেমে আসবে। ২:৬১ আয়াতের গজব সেই গজব, যার সাবধানবাণী ২০:৮১ দিয়েছিল। ৩:১১২ প্রায় হুবহু ২:৬১ আয়াতের শেষ রায়টা আবার বলে, লাঞ্ছনা, গজব, নিদর্শন অস্বীকার, নবী হত্যা, নাফরমানি, সীমালঙ্ঘন, আর যোগ করে এক ব্যতিক্রম: আল্লাহর ও মানুষের আশ্রয় ছাড়া।"
          },
          {
            "en": "5:70 states plainly what killing the prophets meant: whenever a messenger came with what they did not desire, some they denied and some they killed. And 14:7 gives the law the whole verse illustrates from its other side: if you are grateful I will surely increase you, and if you are ungrateful, My punishment is severe. Read together, these sisters set the food request inside a pattern that begins with a gift, passes through impatience, and ends, when the impatience hardens into rejection, with the loss of what was given.",
            "bn": "৫:৭০ পরিষ্কার বলে নবীদের হত্যা করা মানে কী ছিল: যখনই কোনো রাসূল এমন কিছু নিয়ে এলেন যা তাদের মনে ধরেনি, কাউকে তারা অস্বীকার করল, কাউকে হত্যা করল। আর পুরো আয়াতটি যে নিয়মের উদাহরণ, ১৪:৭ সেটাই বলে দেয় অন্য দিক থেকে: শুকরিয়া করলে আমি অবশ্যই তোমাদের বাড়িয়ে দেব, আর অকৃতজ্ঞ হলে আমার শাস্তি কঠিন। সব মিলিয়ে এই আয়াতগুলো খাবারের আবদারকে একটা ধারার ভেতরে বসিয়ে দেয়। ধারাটা শুরু হয় দান দিয়ে, তারপর আসে অধৈর্য, আর সেই অধৈর্য যখন জমে প্রত্যাখ্যান হয়ে যায়, তখন শেষ হয় যা দেওয়া হয়েছিল তা হারিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Bored With Manna",
          "bn": "মান্নায় বিরক্ত"
        },
        "p": [
          {
            "en": "The most common form of ingratitude is not denial but boredom. The same spouse, the same job, the same city, the same prayer five times a day, the same Quran with the same surahs: a believer wakes one morning and finds that what he once asked Allah for has become one kind of food. The verse names that moment and refuses to treat it as small. The first practice is to catch the sentence lan nasbira in one's own mouth, I cannot stand this any more, and ask whether the thing complained of is in fact adna or khayr, lesser or better.",
            "bn": "অকৃতজ্ঞতার সবচেয়ে চেনা চেহারা অস্বীকার নয়, বিরক্তি। একই জীবনসঙ্গী, একই চাকরি, একই শহর, দিনে পাঁচবার একই নামাজ, একই সূরা দিয়ে একই কুরআন। মুমিন একদিন সকালে জেগে দেখেন, যা তিনি একদিন আল্লাহর কাছে চেয়েছিলেন, তা হয়ে গেছে 'এক রকম খাবার'। আয়াত সেই মুহূর্তটার নাম বলে, আর একে ছোট বলে ধরে না। প্রথম আমল হল নিজের মুখে 'লান নাসবিরা' বাক্যটা ধরে ফেলা, এটা আর সহ্য হচ্ছে না, আর জিজ্ঞেস করা, যা নিয়ে অভিযোগ, সেটা আসলে 'আদনা' না 'খাইর', নিচু না উত্তম।"
          },
          {
            "en": "The second practice is to make change the right way. The verse does not forbid wanting variety; it rebukes trading down and demanding that heaven deliver what any town sells. A believer who wants a different job, house or routine may ask Allah for it, but should first list what the present one is giving that he would be handing back. And the two that was because clauses give a rule for self-examination: a large failing in one's religion usually has a small persistent disobedience underneath it, and the small one is the one to treat.",
            "bn": "দ্বিতীয় আমল হল সঠিক পথে বদল চাওয়া। আয়াত বৈচিত্র্য চাওয়া নিষেধ করে না। সে তিরস্কার করে ভালোটা ছেড়ে নিচুটা নেওয়াকে, আর যেকোনো শহরে যা বিক্রি হয় তা আসমান থেকে নামানোর দাবিকে। যে মুমিন ভিন্ন চাকরি, বাড়ি বা রুটিন চান, তিনি আল্লাহর কাছে চাইতে পারেন। তবে আগে তাঁর লিখে নেওয়া উচিত, এখনকারটা তাঁকে কী কী দিচ্ছে, যা তিনি ফেরত দিতে যাচ্ছেন। আর 'তা এজন্য যে' বাক্য দুটো নিজেকে যাচাইয়ের একটা নিয়ম দেয়: দ্বীনে বড় কোনো খামতির নিচে সাধারণত ছোট একটা লেগে থাকা নাফরমানি থাকে, আর চিকিৎসা করতে হয় ছোটটার।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a for Sufficiency",
          "bn": "যথেষ্ট থাকার দোয়া"
        },
        "p": [
          {
            "en": "The verse pairs humiliation with maskanah, and the Sunnah has a du'a that asks for the opposite of both. Sahih Muslim 2721 records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ used to say: 'O Allah, I ask You for guidance, piety, chastity and self-sufficiency.' The last word, ghina, is the state of needing nothing beyond what one has, which is exactly what the people of 2:61 lacked while the manna was still falling. Said daily, the du'a asks for the heart that could have eaten the one food with thanks.",
            "bn": "আয়াত লাঞ্ছনার সাথে জুড়েছে 'মাসকানাহ', আর সুন্নাহতে এমন এক দোয়া আছে যা দুটোরই উল্টো জিনিস চায়। সহীহ মুসলিম ২৭২১, আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে, নবী ﷺ বলতেন: 'হে আল্লাহ, আমি আপনার কাছে চাই হেদায়েত, তাকওয়া, পবিত্রতা আর অভাবমুক্তি।' শেষ শব্দ 'গিনা' মানে, যা আছে তার বাইরে আর কিছুর দরকার না থাকা। মান্না তখনো নামছিল, অথচ ২:৬১ আয়াতের মানুষগুলোর ঠিক এই জিনিসটাই ছিল না। রোজ পড়লে এই দোয়া সেই মন চায়, যে মন এক খাবারই শুকরিয়ার সাথে খেতে পারত।"
          },
          {
            "en": "A composed du'a in the verse's own vocabulary, offered as such, could add: O Allah, make what You have chosen for me better in my eyes than what I would choose for myself, make me patient with the one provision until You change it, and do not let my complaint over the small thing become a habit that reaches the great. The Prophet's ﷺ du'a is the one to memorise; the second only turns the verse's warning into a request, so that the reader asks for the patience the verse's speakers refused.",
            "bn": "এর সাথে আয়াতের নিজের শব্দ দিয়ে বানানো একটা দোয়াও যোগ করা যায়, রচিত দোয়া বলে জানিয়েই দেওয়া হচ্ছে: হে আল্লাহ, আপনি আমার জন্য যা বেছেছেন, আমার নিজের বাছাইয়ের চেয়ে সেটাকেই আমার চোখে ভালো করে দিন। আপনি বদলে না দেওয়া পর্যন্ত এক রিজিকে আমাকে ধৈর্য দিন। আর ছোট জিনিস নিয়ে আমার অভিযোগকে এমন অভ্যাস হতে দেবেন না যা বড়টায় গিয়ে পৌঁছায়। মুখস্থ করার মতো দোয়া নবী ﷺ-এরটাই। দ্বিতীয়টা শুধু আয়াতের সাবধানবাণীকে চাওয়ায় বদলে দেয়, যাতে আয়াতে যারা কথা বলেছিল তারা যে ধৈর্য ফিরিয়ে দিয়েছিল, পাঠক সেটাই চান।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Which blessing in my life have I grown bored of purely because it is reliable, and what would I feel if it were taken? When I ask Allah for a change, am I trading a better thing for a lesser one that I merely find more familiar? What is the one kind of food I keep complaining about, and Who provided it, and have I thanked Him for it once this week?",
            "bn": "আমার জীবনের কোন নিয়ামতে আমি বিরক্ত হয়ে গেছি স্রেফ এই কারণে যে সেটা কখনো ফাঁকি দেয় না, আর সেটা কেড়ে নেওয়া হলে আমার কেমন লাগত? আল্লাহর কাছে যখন বদল চাই, আমি কি ভালো একটা জিনিস দিয়ে নিচু একটা জিনিস নিচ্ছি, যেটা শুধু আমার বেশি চেনা? আমার সেই 'এক রকম খাবার'টা কী, যা নিয়ে আমি অভিযোগ করেই যাই, আর সেটা দিলেন কে, আর এই সপ্তাহে একবারও কি তাঁর শুকরিয়া করেছি?"
          },
          {
            "en": "Where in my own life did a small disobedience, repeated, quietly become a habit of refusing what I know is true? The Prophet ﷺ defined pride as rejecting the truth and looking down on people: when did I last reject something true because I did not like who said it, and what would it take to accept it now?",
            "bn": "আমার নিজের জীবনে কোন ছোট নাফরমানি বারবার করতে করতে চুপিচুপি এমন অভ্যাস হয়ে গেছে যে, যা সত্য বলে জানি তা-ই ঠেলে দিই? নবী ﷺ অহংকারের সংজ্ঞা দিয়েছেন হককে ঠেলে দেওয়া আর মানুষকে তুচ্ছ করা: শেষ কবে আমি কোনো সত্য কথা ঠেলে দিয়েছি শুধু এই কারণে যে, যে বলেছে তাকে আমার পছন্দ হয়নি? আর এখন সেটা মেনে নিতে কী লাগবে?"
          }
        ]
      }
    ]
  },
  "2:65-66": {
    "sections": [
      {
        "h": {
          "en": "The Verse That Assumes You Know",
          "bn": "যে আয়াত ধরে নেয় আপনি জানেন"
        },
        "p": [
          {
            "en": "The scene sits inside the run of remembered scenes that began at 2:49. 2:63 recalled the covenant taken under the raised mount, and 2:64 said they turned away after it, adding that but for Allah's favour and mercy they would have been among the losers. 2:65 then changes the verb. Most scenes so far have opened with and when; this one opens with wa laqad 'alimtum, and you certainly knew. The Sabbath story is not being told to them; it is being cited as something they already carry. 2:66 gives its purpose, and 2:67 begins the cow.",
            "bn": "২:৪৯ থেকে মনে করিয়ে দেওয়া দৃশ্যের যে সারি চলছে, এই দৃশ্য তারই ভেতরে। ২:৬৩ মনে করিয়েছে উঁচু করে ধরা পাহাড়ের নিচে নেওয়া অঙ্গীকার, ২:৬৪ বলেছে এরপরও তারা মুখ ফিরিয়ে নিল, আর যোগ করেছে, আল্লাহর অনুগ্রহ ও রহমত না থাকলে তারা ক্ষতিগ্রস্তদের দলে পড়ত। ২:৬৫ এসে ক্রিয়াটা বদলে দেয়। এতক্ষণ বেশিরভাগ দৃশ্য খুলেছে 'আর যখন' দিয়ে, এটা খোলে 'ওয়া লাকাদ আলিমতুম' দিয়ে, আর তোমরা অবশ্যই জান। শনিবারের গল্পটা তাদের নতুন করে শোনানো হচ্ছে না। এটা এমন এক ঘটনা হিসেবে উল্লেখ হচ্ছে, যা তারা আগে থেকেই জানে। ২:৬৬ বলে এর উদ্দেশ্য, আর ২:৬৭ শুরু করে গরুর ঘটনা।"
          },
          {
            "en": "The placement is deliberate. A verse about mercy, 2:64, is followed at once by one of the surah's most severe scenes, and the severity is aimed at those who transgressed among you, not at all of them. Then 2:66 splits the audience a second time: the same event is a deterrent for one kind of person and a lesson for another. The sequence from 2:40 has been showing favour, lapse and mercy in turn; this pair shows what happens when a limit set by the covenant is crossed with contrivance, and, in the same breath, whom the story is for.",
            "bn": "বিন্যাসটা ইচ্ছাকৃত। রহমতের আয়াত ২:৬৪, তার ঠিক পরেই সূরার সবচেয়ে কঠোর দৃশ্যগুলোর একটি, আর কঠোরতার নিশানা 'তোমাদের মধ্যে যারা সীমা লঙ্ঘন করেছিল', সবাই নয়। তারপর ২:৬৬ শ্রোতাদের আরেকবার ভাগ করে: একই ঘটনা এক রকম মানুষের জন্য শাস্তির নজির, আরেক রকম মানুষের জন্য উপদেশ। ২:৪০ থেকে ধারাটা পালা করে দেখাচ্ছিল নিয়ামত, পদস্খলন আর রহমত। এই জোড়া দেখায়, অঙ্গীকারে বাঁধা কোনো সীমা যখন চালাকি করে পার হওয়া হয় তখন কী হয়, আর একই নিঃশ্বাসে বলে দেয়, গল্পটা কার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Crossed, Driven Off, Made a Fetter",
          "bn": "সীমা পার, তাড়িয়ে দেওয়া, শিকল বানানো"
        },
        "p": [
          {
            "en": "I'tadaw, they transgressed, is from '-d-w, to cross over a line; the same root gives 'udwan, aggression, and the ya'tadun of 2:61. The line here was the Sabbath, sabt, the day of ceasing that was set for them, as 16:124 says, and that 4:154 lists as a term of their covenant. Khasi'in, despised, is from kh-s-', which describes a dog driven off and kept at a distance; the Quran uses the same root for the eye that returns khasi'an, humbled and defeated, in 67:4. It is a word about being pushed out of the circle, not only about looking different.",
            "bn": "'ই'তাদাও', তারা সীমা লঙ্ঘন করল, মূল আ-দ-ও, একটা রেখা পার হয়ে যাওয়া। একই মূল থেকে 'উদওয়ান', আগ্রাসন, আর ২:৬১ আয়াতের 'ইয়া'তাদুন'। এখানে রেখাটা ছিল শনিবার, 'সাবত', কাজ থেকে বিরত থাকার দিন। ১৬:১২৪ বলছে, দিনটা তাদের জন্যই নির্ধারিত হয়েছিল, আর ৪:১৫৪ একে তাদের অঙ্গীকারের শর্তের মধ্যে গুনেছে। 'খাসিঈন', ঘৃণিত, মূল খ-স-আ, যা এমন কুকুরকে বোঝায় যাকে তাড়িয়ে দূরে রাখা হয়। ৬৭:৪ আয়াতে যে চোখ 'খাসিআন', নত ও ব্যর্থ হয়ে ফিরে আসে, কুরআন সেখানেও এই মূলই ব্যবহার করেছে। শব্দটা দল থেকে বাইরে ঠেলে দেওয়ার কথা বলে, শুধু চেহারা বদলে যাওয়ার কথা নয়।"
          },
          {
            "en": "Nakal, in 2:66, is the word the verse's purpose hangs on. Its root n-k-l gives nikl, a fetter or shackle, and the verb means to restrain; a nakal is a punishment shaped so that it holds others back from the same act. The Arabic of 79:25 uses it for Pharaoh's end. Maw'izah, from w-'-z, is the counsel that softens a heart. The verse thus names two effects of one event: it fetters some and it teaches others. Which effect a hearer receives is decided by the last word, lil-muttaqin, for those who fear Allah.",
            "bn": "২:৬৬ আয়াতের 'নাকাল' সেই শব্দ, যার উপর আয়াতের উদ্দেশ্য ঝুলে আছে। এর মূল ন-ক-ল থেকে 'নিকল', বেড়ি বা শিকল, আর ক্রিয়ার অর্থ আটকে রাখা। 'নাকাল' এমন শাস্তি, যার গড়নই এমন যে অন্যদের একই কাজ থেকে ধরে রাখে। ৭৯:২৫ আয়াতের আরবিতে ফেরাউনের পরিণতির জন্য এই শব্দই এসেছে। 'মাওইযাহ', মূল ও-আ-য, সেই নসিহত যা মন নরম করে। আয়াত তাহলে এক ঘটনার দুই ফলের নাম বলছে: কাউকে সে বেঁধে রাখে, কাউকে শেখায়। শ্রোতা কোন ফলটা পাবেন, তা ঠিক করে শেষ শব্দ, 'লিল মুত্তাকীন', যারা আল্লাহকে ভয় করে তাদের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Be, and They Were",
          "bn": "হও, আর তারা হল"
        },
        "p": [
          {
            "en": "Fa-qulna lahum kunu, so We said to them, be. The Quran gives the creative command in this same word, kun, at 36:82: when He intends a thing, He says to it be, and it is. The transformation is therefore given as a word, not a process, and the verse offers no description beyond the two words qiradatan khasi'in. Everything a reader may have heard about how it looked, how long it lasted, or who among them became what, is absent from the text; the Quran gives the sentence and withholds the spectacle.",
            "bn": "'ফাকুলনা লাহুম কুনু', তখন আমি তাদের বললাম, হও। সৃষ্টির হুকুমও কুরআন এই একই শব্দে দেয়, 'কুন', ৩৬:৮২ আয়াতে: তিনি যখন কিছু চান, তাকে বলেন হও, আর তা হয়ে যায়। রূপান্তরটা তাই দেওয়া হয়েছে একটা শব্দ হিসেবে, ধাপে ধাপে ঘটা কিছু হিসেবে নয়, আর আয়াত 'কিরাদাতান খাসিঈন', এই দুটো শব্দের বাইরে কোনো বর্ণনা দেয় না। দেখতে কেমন ছিল, কতদিন টিকেছিল, তাদের কে কী হয়েছিল, এসব নিয়ে পাঠক যা-ই শুনে থাকুন, পাঠ্যে তার কিছুই নেই। কুরআন রায়টা দেয়, তামাশাটা দেয় না।"
          },
          {
            "en": "Lahum, to them, restricts the sentence to those who transgressed among you, the alladhina i'tadaw minkum of the verse's first half. The Quran is exact about this, and 7:165 is more exact still: those who forbade the evil were saved, and those who wronged were seized. The address to the whole community is you knew; the sentence is passed on a subset. A reader who takes the verse as a verdict on a people has misread its grammar. It is a verdict on an act, and the act is available to anyone who can find a clever way around a clear command.",
            "bn": "'লাহুম', তাদের, রায়টাকে সীমিত করে 'তোমাদের মধ্যে যারা সীমা লঙ্ঘন করেছিল' তাদের মধ্যে, আয়াতের প্রথম অর্ধেকের 'আল্লাযীনা ই'তাদাও মিনকুম'। কুরআন এ ব্যাপারে নিখুঁত, আর ৭:১৬৫ আরও নিখুঁত: যারা মন্দ থেকে নিষেধ করত তাদের বাঁচানো হল, আর যারা জুলুম করেছিল তাদের পাকড়াও করা হল। পুরো সম্প্রদায়কে বলা হচ্ছে 'তোমরা জান', রায় দেওয়া হচ্ছে একটা অংশের উপর। যে পাঠক আয়াতকে একটা জাতির উপর রায় ধরেন, তিনি এর ব্যাকরণই ভুল পড়েছেন। এ রায় একটা কাজের উপর, আর সেই কাজ যে কারো নাগালে, যে পরিষ্কার হুকুমের পাশ কাটানোর চালাক পথ খুঁজে পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Bodies or Hearts",
          "bn": "দেহ না অন্তর"
        },
        "p": [
          {
            "en": "The commentators differ on the transformation and agree on its meaning. Ibn Abbas, Qatadah and the majority took kunu qiradatan literally: their bodies were changed. Mujahid held that it was their hearts that were changed and that the verse speaks by way of a likeness, as 62:5 likens others to a donkey carrying books. At-Tabari reports Mujahid's view and rejects it as against the apparent sense of the words, and Ibn Kathir follows at-Tabari. The reader should know that both readings existed among the early scholars and that the majority reading is literal.",
            "bn": "রূপান্তর নিয়ে মুফাসসিরদের মতভেদ আছে, কিন্তু এর অর্থ নিয়ে তাঁরা একমত। ইবনে আব্বাস, কাতাদা ও অধিকাংশ 'কুনু কিরাদাতান'কে আক্ষরিক নিয়েছেন: তাদের দেহ বদলে দেওয়া হয়েছিল। মুজাহিদের মত, বদলেছিল তাদের অন্তর, আর আয়াত কথা বলছে উপমার ভঙ্গিতে, যেমন ৬২:৫ অন্যদের তুলনা করেছে কিতাব বওয়া গাধার সাথে। তাবারী মুজাহিদের মত উল্লেখ করে তা নাকচ করেন, কারণ তা শব্দের প্রকাশ্য অর্থের বিরুদ্ধে যায়, আর ইবনে কাসীর তাবারীকে অনুসরণ করেন। পাঠকের জানা দরকার, প্রথম যুগের আলেমদের মধ্যে দুই ব্যাখ্যাই ছিল, আর অধিকাংশের ব্যাখ্যা আক্ষরিক।"
          },
          {
            "en": "On 2:66 the differences are about pronouns. Ibn Kathir, following Ibn Abbas, takes the it that was made a deterrent as the town, and what is before it and behind it as the settlements around it. Others, whose reading most translations follow, take the phrase in time: those present then and those who came after. As-Sa'di explains lil-muttaqin by observing that only the God-fearing profit from a warning, since the others hear the story and feel nothing. Ibn Kathir adds that Allah preserved the account so that the reminder would reach those who came later, which is the reader.",
            "bn": "২:৬৬ নিয়ে মতভেদটা সর্বনাম নিয়ে। ইবনে কাসীর, ইবনে আব্বাসকে অনুসরণ করে, যে 'তা'কে শাস্তির নজির বানানো হল সেটা ধরেন জনপদটাকে, আর 'তার সামনে ও পেছনে যা আছে'কে ধরেন আশপাশের বসতি। অন্যরা, যাঁদের ব্যাখ্যা অধিকাংশ অনুবাদ অনুসরণ করে, কথাটিকে সময়ের অর্থে নেন: তখন যারা উপস্থিত ছিল আর যারা পরে এল। 'লিল মুত্তাকীন'-এর ব্যাখ্যায় সা'দী বলেন, সাবধানবাণী থেকে উপকার পায় কেবল আল্লাহভীরুরা; বাকিরা গল্প শোনে, কিন্তু মনে কিছুই নাড়া দেয় না। ইবনে কাসীর যোগ করেন, আল্লাহ ঘটনাটা সংরক্ষণ করেছেন যাতে স্মরণটা পরে যারা আসবে তাদের কাছে পৌঁছায়, আর সেটা পাঠক নিজেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Prophet ﷺ Clarified",
          "bn": "নবী ﷺ যা পরিষ্কার করেছেন"
        },
        "p": [
          {
            "en": "The sound hadith on the transformation answers the question people most often ask. Sahih Muslim 2663 records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ was asked whether the apes and pigs were from those who had been transformed, and he said: 'Allah did not destroy a people, or punish a people, and then make offspring for them; the apes and pigs existed before that.' The transformed had no line. The animals a person sees are creation, not the remnant of a punishment, and the hadith closes a door that curiosity keeps trying to open.",
            "bn": "রূপান্তর নিয়ে যে সহীহ হাদিস আছে, তা সেই প্রশ্নের জবাব দেয় যা মানুষ সবচেয়ে বেশি করে। সহীহ মুসলিম ২৬৬৩, আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে: নবী ﷺ-কে জিজ্ঞেস করা হয়েছিল, বানর আর শূকর কি রূপান্তরিত মানুষদের বংশ? তিনি বললেন: 'আল্লাহ কোনো কওমকে ধ্বংস করে, বা কোনো কওমকে শাস্তি দিয়ে, তারপর তাদের বংশধর বানাননি; আর বানর ও শূকর তার আগে থেকেই ছিল।' রূপান্তরিতদের কোনো বংশধারা ছিল না। মানুষ যে প্রাণী দেখে তা সৃষ্টি, কোনো শাস্তির অবশেষ নয়, আর কৌতূহল যে দরজাটা বারবার খুলতে চায়, হাদিস সেটা বন্ধ করে দেয়।"
          },
          {
            "en": "That is all the sound narration says. What the hadith teaches by its restraint is worth noticing: the Prophet ﷺ was asked about the apes and answered about the apes, and did not narrate the story's interior. The verse itself gives two words for the sentence and a full verse for its purpose, and that proportion is the guide. A believer who reads 2:65 for the spectacle has read it upside down; the weight of the text is on 2:66, the deterrent and the lesson, and that is the part he is meant to carry out of the story.",
            "bn": "সহীহ বর্ণনা এইটুকুই বলে। হাদিসটি তার সংযম দিয়ে যা শেখায়, তা লক্ষ করার মতো: নবী ﷺ-কে বানর নিয়ে জিজ্ঞেস করা হল, তিনি বানর নিয়ে জবাব দিলেন, গল্পের ভেতরটা বর্ণনা করলেন না। আয়াত নিজে রায়ের জন্য দিয়েছে দুটো শব্দ, আর তার উদ্দেশ্যের জন্য পুরো একটা আয়াত। এই অনুপাতই পথনির্দেশ। যে মুমিন তামাশা দেখতে ২:৬৫ পড়েন, তিনি উল্টো করে পড়েছেন। পাঠ্যের ভার ২:৬৬ আয়াতে, শাস্তির নজির আর উপদেশে, আর গল্প থেকে তাঁর সেটাই বয়ে নিয়ে বের হওয়ার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Town by the Sea",
          "bn": "সমুদ্রের ধারের সেই জনপদ"
        },
        "p": [
          {
            "en": "7:163 tells what 2:65 assumes: a town by the sea, the fish coming openly on the Sabbath and staying away on other days, a test set precisely at the point of their weakness. 7:164 records a dispute inside the town, some asking why bother warning a people Allah will punish, and the warners answering, to be clear before your Lord, and perhaps they will fear Him. 7:165 gives the outcome the Quran wants noticed: those who forbade evil were saved, and only those who wronged were seized. 7:166 then repeats the sentence of 2:65 in the same words.",
            "bn": "২:৬৫ যা ধরে নেয়, ৭:১৬৩ তা বলে দেয়: সমুদ্রের ধারে এক জনপদ, শনিবারে মাছ প্রকাশ্যে চলে আসত আর অন্য দিন আসত না, ঠিক তাদের দুর্বলতার জায়গায় পাতা এক পরীক্ষা। ৭:১৬৪ জানায় জনপদের ভেতরের এক তর্ক: কেউ কেউ বলছে, যাদের আল্লাহ শাস্তি দেবেন তাদের নসিহত করে লাভ কী, আর নসিহতকারীরা জবাব দিচ্ছে, তোমাদের রবের কাছে দায়মুক্ত থাকতে, আর হয়তো তারা ভয় করবে। ৭:১৬৫ জানায় সেই পরিণতি, যা কুরআন চায় আপনি খেয়াল করুন: যারা মন্দ থেকে নিষেধ করত তাদের বাঁচানো হল, আর কেবল যারা জুলুম করেছিল তাদের পাকড়াও করা হল। ৭:১৬৬ তারপর ২:৬৫ আয়াতের রায় একই শব্দে আবার বলে।"
          },
          {
            "en": "4:47 turns the story into a warning addressed to the People of the Book in Madinah, before We curse them as We cursed the people of the Sabbath, which shows that the event was cited in the Prophet's ﷺ own time as a live precedent. 16:124 explains that the Sabbath itself was appointed for those who differed over it, a rule tied to a people, not a rule for all. And 12:111 states the principle that 2:66 applies: in their stories there is a lesson for those of understanding. Story, restriction, and lesson are the three things these sisters supply.",
            "bn": "৪:৪৭ গল্পটাকে মদীনার আহলে কিতাবের প্রতি সাবধানবাণী বানিয়ে দেয়: শনিবারওয়ালাদের যেমন লানত করেছিলাম, তোমাদেরও তেমনি লানত করার আগে। বোঝা যায়, নবী ﷺ-এর নিজের সময়েও ঘটনাটা জীবন্ত নজির হিসেবে উল্লেখ হত। ১৬:১২৪ বুঝিয়ে দেয়, শনিবার নির্ধারিত হয়েছিল কেবল তাদের জন্য যারা এ নিয়ে মতভেদ করেছিল। নিয়মটা এক কওমের সাথে বাঁধা, সবার জন্য নয়। আর ১২:১১১ বলে সেই নীতি যা ২:৬৬ কাজে লাগায়: তাদের কাহিনিতে বোধসম্পন্নদের জন্য শিক্ষা আছে। গল্প, সীমা আর শিক্ষা, এই তিনটি জিনিস জোগায় এই সম্পর্কিত আয়াতগুলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Loophole and the Limit",
          "bn": "ফাঁক আর সীমা"
        },
        "p": [
          {
            "en": "The offence in this story was not open defiance. Ibn Kathir describes it as a contrivance: a way of taking on the Sabbath what the Sabbath forbade, arranged so that the letter seemed kept. That is the form of sin most available to religious people. A trade structured so that the interest is called something else; a fast kept while the tongue does what the fast was meant to stop; a promise kept in wording and broken in substance; a rule of one's employer or one's state satisfied on paper. The verse's warning is aimed at the clever, and the reader should assume he is one of them.",
            "bn": "এই গল্পের অপরাধটা খোলা বিদ্রোহ ছিল না। ইবনে কাসীর একে বলেন কৌশল: শনিবার যা নিষেধ করেছিল, শনিবারেই তা নেওয়ার এমন ব্যবস্থা, যাতে বাইরে থেকে মনে হয় নিয়মের অক্ষর রক্ষা হয়েছে। দ্বীনদার মানুষের হাতের সবচেয়ে কাছে গুনাহর এই চেহারাটাই থাকে। এমন লেনদেন যেখানে সুদের অন্য নাম দেওয়া হয়। এমন রোজা যেখানে জিহ্বা ঠিক সেটাই করে যা থামাতে রোজা দেওয়া হয়েছিল। এমন ওয়াদা যা কথায় রাখা হয় আর কাজে ভাঙা হয়। মালিক বা রাষ্ট্রের এমন নিয়ম যা কাগজে পূরণ হয়। আয়াতের সাবধানবাণীর নিশানা চালাক লোক, আর পাঠক ধরে নিন, তিনি তাদেরই একজন।"
          },
          {
            "en": "The practice is a weekly question, best asked on the day one has set apart for it: where this week did I find a way around a command while keeping its words? Name one such arrangement and undo it. The second practice comes from 7:165: be among those who forbid the evil, quietly and without contempt, since that was the group that was saved. A believer who cannot stop a wrong can still be recorded as having spoken against it, and the Quran says that this was enough to separate him from the sentence.",
            "bn": "আমল হল সপ্তাহে একটা প্রশ্ন, যে দিনটা আপনি এর জন্য আলাদা করে রেখেছেন সেদিন করলে সবচেয়ে ভালো: এই সপ্তাহে কোথায় আমি কোনো হুকুমের শব্দ ঠিক রেখে তার পাশ কাটানোর পথ খুঁজেছি? এমন একটা ব্যবস্থার নাম বলুন আর তা ভেঙে দিন। দ্বিতীয় আমল আসে ৭:১৬৫ থেকে: যারা মন্দ থেকে নিষেধ করে তাদের একজন হোন, চুপচাপ, অবজ্ঞা ছাড়া, কারণ ওই দলটাকেই বাঁচানো হয়েছিল। যে মুমিন কোনো অন্যায় থামাতে পারেন না, তাঁর নামও লেখা থাকতে পারে যারা এর বিরুদ্ধে বলেছিল তাদের খাতায়, আর কুরআন বলছে, রায় থেকে আলাদা হতে এটুকুই যথেষ্ট ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a Against Sudden Wrath",
          "bn": "আচমকা গজব থেকে বাঁচার দোয়া"
        },
        "p": [
          {
            "en": "The Sunnah has a du'a that fits the verse exactly. Sahih Muslim 2739 records from Abdullah ibn Umar (RA) that among the supplications of the Prophet ﷺ was: 'O Allah, I seek refuge in You from the removal of Your favour, the change of the well-being You have given, the suddenness of Your punishment, and all of Your displeasure.' The Sabbath-breakers lost a favour, saw their well-being changed, and met a punishment that arrived in a word. The du'a asks to be kept from each of those four.",
            "bn": "সুন্নাহতে এমন এক দোয়া আছে যা আয়াতের সাথে হুবহু মেলে। সহীহ মুসলিম ২৭৩৯, আবদুল্লাহ ইবনে উমর (রাঃ) থেকে, নবী ﷺ-এর দোয়াগুলোর একটি ছিল: 'হে আল্লাহ, আমি আপনার আশ্রয় চাই আপনার নিয়ামত চলে যাওয়া থেকে, আপনার দেওয়া নিরাপত্তা বদলে যাওয়া থেকে, আপনার শাস্তির আচমকা আসা থেকে, আর আপনার সব রকম অসন্তুষ্টি থেকে।' শনিবারের সীমালঙ্ঘনকারীরা নিয়ামত হারিয়েছিল, তাদের নিরাপত্তা বদলে গিয়েছিল, আর এমন শাস্তি পেয়েছিল যা এসেছিল একটি শব্দে। দোয়াটি এই চারটির প্রতিটি থেকে রক্ষা চায়।"
          },
          {
            "en": "A composed supplication in the verse's own vocabulary, offered as such, could follow it: O Allah, make me among the muttaqin for whom this story is a lesson, and not among those for whom it had to become a fetter. Keep me from crossing Your limits by cleverness, and when I see a wrong I cannot stop, let me at least be counted among those who forbade it. The Muslim du'a is the one to memorise; the second only turns 2:66 into a request.",
            "bn": "এর পরে আয়াতের নিজের শব্দ দিয়ে বানানো একটা দোয়াও বলা যেতে পারে, রচিত দোয়া বলে জানিয়েই দেওয়া হচ্ছে: হে আল্লাহ, আমাকে সেই মুত্তাকীদের একজন করুন যাদের জন্য এই গল্প উপদেশ, তাদের একজন নয় যাদের জন্য একে শিকল হতে হয়েছিল। চালাকি করে আপনার সীমা পার হওয়া থেকে আমাকে বাঁচান। আর যে অন্যায় আমি থামাতে পারি না, তা দেখলে অন্তত যারা নিষেধ করেছিল তাদের মধ্যে আমাকে গুনে নিন। মুখস্থ করার দোয়া মুসলিমেরটাই, দ্বিতীয়টা শুধু ২:৬৬ আয়াতকে চাওয়ায় বদলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Where in my religion have I found a way around a rule while keeping its letter, and whom am I fooling by it? When I hear that someone was punished for a trick I also use, do I take the warning, or do I take comfort that I have not yet been caught? The story is a lesson only for the God-fearing: which kind of reader am I, and how would my week look different if I were the other kind?",
            "bn": "আমার দ্বীনে কোথায় আমি কোনো নিয়মের অক্ষর রেখে তার পাশ কাটানোর পথ খুঁজে নিয়েছি, আর তাতে ঠকাচ্ছি কাকে? যে চাল আমিও চালি, সেই চালের জন্য কেউ শাস্তি পেয়েছে শুনলে আমি কি সাবধান হই, নাকি স্বস্তি পাই যে আমি এখনো ধরা পড়িনি? গল্পটা উপদেশ কেবল আল্লাহভীরুদের জন্য: আমি কোন রকম পাঠক, আর অন্য রকম হলে আমার সপ্তাহটা কেমন আলাদা দেখাত?"
          },
          {
            "en": "What day, or what limit, has Allah set apart in my life that I have quietly renegotiated with myself? The ones who forbade the evil were saved: is there a wrong around me that I have decided is not my business, and what is the smallest honest thing I could say about it this week, to whom, and when?",
            "bn": "আল্লাহ আমার জীবনে কোন দিন, বা কোন সীমা, আলাদা করে রেখেছেন যা আমি নিজের সাথে চুপচাপ নতুন করে দরকষাকষি করে নিয়েছি? যারা মন্দ থেকে নিষেধ করেছিল তাদের বাঁচানো হয়েছিল: আমার আশপাশে এমন কোনো অন্যায় কি আছে যা আমি ঠিক করে নিয়েছি আমার ব্যাপার নয়, আর এই সপ্তাহে তা নিয়ে সবচেয়ে ছোট সৎ কথাটা কী বলতে পারি, কাকে, কখন?"
          }
        ]
      }
    ]
  },
  "2:74": {
    "sections": [
      {
        "h": {
          "en": "After the Dead Man Rose",
          "bn": "মৃত লোকটা জেগে ওঠার পর"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and from 2:40 onward it addresses the Children of Israel through a long chain of reminders, most opened with 'and when'. The story of the cow runs from 2:67 to 2:73: a killing, a dispute, a command to sacrifice, the questions that made the command harder than it needed to be, and finally the slain man struck with part of the animal so that Allah shows how He brings the dead to life. 2:73 closes with the purpose of the whole scene, 'that you might reason'. Our verse records what came instead of reasoning.",
            "bn": "সূরা বাকারা মাদানি সূরা। 2:40 আয়াত থেকে বানী ইসরাঈলকে ডেকে একের পর এক স্মরণ করিয়ে দেওয়া শুরু হয়, বেশিরভাগের শুরুতে ‘আর যখন’। গরুর ঘটনা চলে 2:67 থেকে 2:73 পর্যন্ত: একটা খুন, দোষারোপ, কুরবানির হুকুম, প্রশ্নের পর প্রশ্ন করে সেই হুকুমকে অকারণে কঠিন বানানো, আর শেষে গরুর একটা অংশ দিয়ে নিহতকে আঘাত করা। আল্লাহ দেখালেন তিনি মৃতকে কীভাবে জীবিত করেন। 2:73 আয়াত শেষ হয় গোটা দৃশ্যের উদ্দেশ্য দিয়ে: ‘যেন তোমরা বোঝো’। বোঝার বদলে যা এল, আমাদের আয়াত তারই খবর দেয়।"
          },
          {
            "en": "The word thumma, 'then', opens the verse and carries the rebuke inside it: after that, after a dead man rose in front of you, your hearts hardened. 2:75 then turns from the Israelites to the believers and asks whether they still hope such people will believe, when a party among them distorted the word of Allah after understanding it. The verse therefore stands between a miracle and a warning to Muslims. It describes a heart that signs no longer reach, and then tells the believers what to expect from it. No occasion of revelation is reported for it; it belongs to the sequence.",
            "bn": "আয়াত শুরু হয় ‘সুম্মা’ শব্দে, ‘তারপর’। ধমকটা এই একটা শব্দের ভেতরেই: এর পরেও, চোখের সামনে মৃত মানুষ উঠে দাঁড়ানোর পরেও, তোমাদের হৃদয় শক্ত হয়ে গেল। এরপর 2:75 আয়াত বানী ইসরাঈল থেকে মুখ ফিরিয়ে মুমিনদের জিজ্ঞেস করে, তোমরা কি এখনো আশা কর এরা ঈমান আনবে? অথচ এদের একদল আল্লাহর কথা বুঝে নেওয়ার পরও বিকৃত করত। তাই আয়াতটা দাঁড়িয়ে আছে এক মুজিযা আর মুসলমানদের প্রতি এক সতর্কবার্তার মাঝখানে। প্রথমে এমন এক হৃদয়ের ছবি, নিদর্শন যাকে আর ছোঁয় না। তারপর মুমিনদের বলে দেওয়া, এমন হৃদয়ের কাছে কী আশা করা যায়। এর কোনো আলাদা শানে নুযুল বর্ণিত নেই, এটা ধারাবাহিকতার অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Qasat, Hijarah, Yatafajjar",
          "bn": "কাসাত, হিজারা, ইয়াতাফাজ্জার"
        },
        "p": [
          {
            "en": "Qasat comes from the root q-s-w. Ar-Raghib in al-Mufradat explains qaswah as coarseness of the heart, the quality of a stone that is hard and dry, and Arabic uses the same root for a hard stone and a hard heart, carrying it from the stone to the heart. The verse then names hijarah, stones, the plural of hajar, and adds aw ashaddu qaswah, 'or harder in hardness'. Ibn Kathir records that the scholars agreed that 'or' here does not express doubt. The phrase is a measurement, and the measurement finds the heart to be the harder of the two.",
            "bn": "‘কাসাত’ এসেছে ক-স-ও মূল থেকে। রাগিব ইসফাহানি আল-মুফরাদাতে ‘কাসওয়া’র মানে দিয়েছেন হৃদয়ের রুক্ষতা, শুকনো শক্ত পাথরের যে গুণ। আরবিতে শক্ত পাথর আর শক্ত হৃদয়, দুটোর জন্যই একই মূল ব্যবহার হয়। শব্দটা পাথর থেকে হৃদয়ে এসেছে। এরপর আয়াত বলে ‘হিজারা’, পাথরসমূহ, ‘হাজার’ শব্দের বহুবচন। তার সাথে যোগ করে ‘আও আশাদ্দু কাসওয়া’, ‘কিংবা কাঠিন্যে আরও শক্ত’। ইবনে কাসীর লিখেছেন, আলেমরা একমত যে এখানে ‘কিংবা’ কোনো সন্দেহ বোঝায় না। এটা একটা মাপ। আর মাপ শেষে দেখা যায়, দুটোর মধ্যে হৃদয়টাই বেশি শক্ত।"
          },
          {
            "en": "Three verbs then describe what stones do. Yatafajjar, from f-j-r, is the same root as fajr, the dawn that bursts through the dark; rivers burst out of some stones. Yashshaqqaq, from sh-q-q, is to split, and water comes out of others. Yahbit, from h-b-t, is to fall down, and some fall min khashyatillah, from the fear of Allah. The sequence moves from the greatest response to the least: an outpouring, then a trickle, then a mere collapse. Even the smallest of the three is more than the hardened heart offered after it had watched a dead man rise.",
            "bn": "এরপর তিনটি ক্রিয়াপদ বলে পাথর কী করে। ‘ইয়াতাফাজ্জার’, ফ-জ-র মূল থেকে, ফজরের সেই একই মূল, যে ভোর অন্ধকার ফুঁড়ে বেরিয়ে আসে। কোনো কোনো পাথর থেকে নদী ফেটে বেরোয়। ‘ইয়াশশাক্কাক’, শ-ক-ক মূল থেকে, মানে ফেটে যাওয়া। কোনোটা ফাটে, পানি বের হয়। ‘ইয়াহবিত’, হ-ব-ত মূল থেকে, মানে নিচে পড়া। কোনোটা পড়ে ‘মিন খাশইয়াতিল্লাহ’, আল্লাহর ভয়ে। ক্রমটা নামছে বড় সাড়া থেকে ছোট সাড়ায়: প্রথমে স্রোত, তারপর ধারা, তারপর শুধু গড়িয়ে পড়া। এই তিনের সবচেয়ে ছোটটাও সেই হৃদয়ের চেয়ে বেশি, যে হৃদয় মৃত মানুষকে জেগে উঠতে দেখেও কিছুই দেয়নি।"
          },
          {
            "en": "Each of the three clauses is built on inna with the emphatic lam, 'indeed there are certainly some', so the Arabic insists three times that stones respond. The verse closes with wa ma Allahu bighafilin 'amma ta'malun, 'and Allah is not unaware of what you do', a sentence that returns in 2:85 at the end of the next passage about the same people. Hardness, the ending says, is not a private condition. A heart that shows no reaction to signs is still being watched by the One who sent the signs, and its stillness is itself something that it does.",
            "bn": "তিনটি বাক্যাংশের প্রতিটি গড়া হয়েছে ‘ইন্না’ আর জোর দেওয়ার ‘লাম’ দিয়ে: ‘নিশ্চয়ই এমন কিছু অবশ্যই আছে’। আরবি তিনবার জোর দিয়ে বলে, পাথর সাড়া দেয়। আয়াত শেষ হয় ‘ওয়া মাল্লাহু বিগাফিলিন আম্মা তা’মালুন’ দিয়ে, ‘তোমরা যা কর আল্লাহ তা থেকে বেখেয়াল নন’। একই বাক্য ফিরে আসে 2:85 আয়াতে, এই একই লোকদের নিয়ে পরের অংশের শেষে। এই শেষ কথাটা বলছে, কাঠিন্য কারও ব্যক্তিগত ব্যাপার নয়। নিদর্শনের সামনে যে হৃদয় কোনো সাড়া দেখায় না, নিদর্শন যিনি পাঠিয়েছেন তিনি সেটাও দেখছেন। তার নিশ্চুপ থাকাটাও তার একটা কাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Mufassirun Read It",
          "bn": "মুফাসসিররা কীভাবে পড়েছেন"
        },
        "p": [
          {
            "en": "At-Tabari sets out the readings of aw ashaddu. Some took 'or' as 'and': like stones and harder. Some took it as 'rather': like stones, no, harder than that. He himself preferred a third: the hearts are of two kinds, some like stone and some harder, so that the verse describes a whole people without claiming that every heart among them is the same. Ibn Kathir accepts at-Tabari's preference and finds the same pattern in 2:17 and 2:19, where the hypocrites are likened first to a man who kindled a fire and then to people caught in a rainstorm, two pictures for two groups.",
            "bn": "তাবারি ‘আও আশাদ্দু’র পাঠগুলো সাজিয়ে দেখান। কেউ ‘কিংবা’কে নিয়েছেন ‘এবং’ অর্থে: পাথরের মতো এবং তার চেয়েও শক্ত। কেউ নিয়েছেন ‘বরং’ অর্থে: পাথরের মতো, না, তার চেয়েও শক্ত। তিনি নিজে পছন্দ করেছেন তৃতীয়টা: হৃদয়গুলো দুই রকম, কিছু পাথরের মতো, কিছু তার চেয়েও শক্ত। ফলে আয়াত একটা গোটা জাতির ছবি আঁকে, কিন্তু দাবি করে না যে তাদের প্রতিটি হৃদয় এক রকম। ইবনে কাসীর তাবারির এই পছন্দ মেনে নেন এবং একই ধরন খুঁজে পান 2:17 আর 2:19 আয়াতে। সেখানে মুনাফিকদের তুলনা প্রথমে আগুন জ্বালানো এক লোকের সাথে, তারপর ঝড়বৃষ্টিতে আটকে পড়া লোকদের সাথে। দুই দলের জন্য দুটো ছবি।"
          },
          {
            "en": "On the stones that fall from the fear of Allah, the commentators divide. Ibn Kathir reports that some held the phrase to be a figure of speech. Ar-Razi and al-Qurtubi, he says, saw no need for that, since Allah creates in stones whatever awareness He wills, and Ibn Kathir supports them with 33:72, where the mountains shrink from carrying the trust, and 17:44, where everything glorifies Him. Ibn Ishaq narrates from Ibn Abbas (RA) the plainest gloss of all: some stones are softer than your hearts, for they acknowledge the truth that you are being called to.",
            "bn": "আল্লাহর ভয়ে যে পাথর পড়ে যায়, তা নিয়ে মুফাসসিররা দুই ভাগ। ইবনে কাসীর জানান, কেউ কেউ এটাকে নিছক কথার অলংকার ধরেছেন। কিন্তু রাযি আর কুরতুবি, তাঁর ভাষায়, এমন ব্যাখ্যার দরকার দেখেননি। আল্লাহ পাথরের ভেতর যে বোধ চান তা সৃষ্টি করেন। ইবনে কাসীর তাঁদের পক্ষে দাঁড় করান 33:72 আয়াতকে, যেখানে আমানত বহন করতে পাহাড় পিছিয়ে যায়, আর 17:44 আয়াতকে, যেখানে সবকিছু তাঁর তাসবিহ করে। ইবনে ইসহাক ইবনে আব্বাস (রাঃ) থেকে সবচেয়ে সোজা ব্যাখ্যাটা এনেছেন: কিছু পাথর তোমাদের হৃদয়ের চেয়ে নরম, কারণ যে হকের দিকে তোমাদের ডাকা হচ্ছে, তারা তা মেনে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Stone in Makkah",
          "bn": "মক্কার এক পাথর"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches to this verse a report in Sahih Muslim from Jabir ibn Samurah (RA): the Messenger of Allah ﷺ said, 'I know a stone in Makkah that used to greet me with salam before I was sent; I recognise it even now' (Muslim 2277). He cites it to show that the fear of stones in the verse is real. A stone once greeted a prophet. A heart that has heard the Quran for years and gives no greeting back has, in the verse's own terms, fallen below that stone.",
            "bn": "ইবনে কাসীর এই আয়াতের সাথে সহিহ মুসলিমের একটি হাদিস জুড়ে দেন। জাবির ইবনে সামুরা (রাঃ) বলেন, রাসূলুল্লাহ ﷺ বলেছেন, ‘মক্কায় এমন এক পাথরকে আমি চিনি, নবুওয়াত পাওয়ার আগে সে আমাকে সালাম দিত; এখনো আমি তাকে চিনি’ (মুসলিম ২২৭৭)। তিনি এটা আনেন এই দেখাতে যে আয়াতে পাথরের ভয় সত্যিকারের। একটা পাথর একদিন এক নবীকে সালাম দিয়েছিল। বছরের পর বছর কুরআন শুনেও যে হৃদয় কোনো সালাম ফেরায় না, আয়াতের নিজের হিসাবে সে ওই পাথরের নিচে নেমে গেছে।"
          },
          {
            "en": "Muslim also narrates from Ibn Mas'ud (RA) that between the Companions' acceptance of Islam and Allah's reproach in 57:16, the verse about hearts hardening over a long term, there passed only four years (Muslim 3027). Nothing in that report is about the Children of Israel; it is about us. At-Tirmidhi carries a report from Ibn Umar (RA) that much talk without the remembrance of Allah hardens the heart, but at-Tirmidhi himself graded it hasan gharib (at-Tirmidhi 2411) and its chain has been questioned, so this article does not rest on it. The two reports in Muslim are enough.",
            "bn": "মুসলিমে ইবনে মাসউদ (রাঃ) থেকে আরেকটি বর্ণনা আছে: সাহাবিদের ইসলাম কবুল আর 57:16 আয়াতে আল্লাহর তিরস্কারের মাঝে ব্যবধান ছিল মাত্র চার বছর (মুসলিম ৩০২৭)। দীর্ঘ সময়ে হৃদয় শক্ত হওয়ার সেই আয়াত। এই বর্ণনায় বানী ইসরাঈলের কথা নেই, কথাটা আমাদের নিয়ে। তিরমিযিতে ইবনে উমর (রাঃ) থেকে একটি বর্ণনা আছে, আল্লাহর জিকির ছাড়া বেশি কথা হৃদয় শক্ত করে। কিন্তু তিরমিযি নিজেই একে ‘হাসান গরিব’ বলেছেন (তিরমিযি ২৪১১), আর এর সনদ নিয়ে প্রশ্ন তোলা হয়েছে। তাই এই লেখা তার ওপর ভর করেনি। মুসলিমের দুটো বর্ণনাই যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Sisters in the Quran",
          "bn": "কুরআনে এর সহোদর আয়াত"
        },
        "p": [
          {
            "en": "57:16 is the verse Ibn Kathir reads beside this one. It asks the believers whether the time has not come for their hearts to humble at the remembrance of Allah, and warns them not to become like the earlier people of the Book whose hearts hardened when a long period passed over them. 5:13 names a cause: the breaking of the covenant, after which Allah made their hearts hard. 6:43 shows the same stone in another people. When the punishment came they did not humble themselves; their hearts hardened, and Shaytan made their deeds attractive to them.",
            "bn": "ইবনে কাসীর এই আয়াতের পাশে রাখেন 57:16 আয়াতকে। সেখানে মুমিনদের জিজ্ঞেস করা হয়, আল্লাহর জিকিরে তাদের হৃদয় বিনীত হওয়ার সময় কি এখনো আসেনি? আর সতর্ক করা হয়, আগের আহলে কিতাবের মতো যেন তারা না হয়, দীর্ঘ সময় পেরিয়ে যাওয়ায় যাদের হৃদয় শক্ত হয়ে গিয়েছিল। 5:13 আয়াত একটা কারণ ধরিয়ে দেয়: অঙ্গীকার ভাঙা, যার পরে আল্লাহ তাদের হৃদয় শক্ত করে দিলেন। 6:43 আয়াত একই পাথর দেখায় অন্য এক জাতির ভেতর। শাস্তি এলেও তারা নত হলো না। তাদের হৃদয় শক্ত হয়ে গেল, আর শয়তান তাদের কাজগুলো তাদের চোখে সুন্দর করে দিল।"
          },
          {
            "en": "The opposite condition has its own verses. 39:23 describes the skins of those who fear their Lord shivering at the Book, then their skins and hearts relaxing at the remembrance of Allah: awe, then rest, in a heart still soft enough to move. 8:2 makes that movement the definition of a believer: when Allah is mentioned their hearts tremble, and when His verses are recited their faith grows. Read together, the sisters say that a heart's response to reminder is not a passing mood but a diagnosis of its condition.",
            "bn": "উল্টো অবস্থার জন্যও আয়াত আছে। 39:23 আয়াতে যারা তাদের রবকে ভয় করে, কিতাব শুনে তাদের গা শিউরে ওঠে, তারপর আল্লাহর জিকিরে তাদের গা আর হৃদয় শান্ত হয়। আগে ভয়, তারপর স্বস্তি, এমন এক হৃদয়ে যা নড়ার মতো নরম আছে। 8:2 আয়াত এই নড়াটাকেই মুমিনের সংজ্ঞা বানিয়ে দেয়: আল্লাহর নাম নিলে তাদের হৃদয় কেঁপে ওঠে, তাঁর আয়াত পড়া হলে তাদের ঈমান বাড়ে। সব মিলিয়ে সহোদর আয়াতগুলো বলছে, নসিহতে হৃদয় কেমন সাড়া দেয়, সেটা ক্ষণিকের মেজাজ নয়। সেটাই বলে দেয় হৃদয়ের আসল অবস্থা।"
          }
        ]
      },
      {
        "h": {
          "en": "Checking Your Own Heart",
          "bn": "নিজের হৃদয় পরখ করা"
        },
        "p": [
          {
            "en": "The verse is a mirror, not a window; it is not for looking at anyone else. Take the three stones as a test. When you hear a verse that once made you weep, is there an outpouring, a trickle, a small collapse, or nothing? When a funeral passes, when a warning lands, when you are shown a mercy you did not earn, what moves inside? The verse does not ask for a performance of tears. It asks whether anything still answers, because a heart that has seen signs and stayed still has already begun to set.",
            "bn": "এই আয়াত আয়না, জানালা নয়। অন্য কাউকে দেখার জন্য এটা নয়। তিনটি পাথরকে পরীক্ষা হিসেবে নিন। যে আয়াত শুনে একদিন আপনার চোখে পানি এসেছিল, আজ সেটা শুনলে কী হয়? স্রোত, ধারা, একটু গড়িয়ে পড়া, নাকি কিছুই না? জানাজা সামনে দিয়ে গেলে, কোনো সতর্কবাণী গায়ে লাগলে, না চাইতেই কোনো রহমত পেলে ভেতরে কী নড়ে? আয়াত কান্নার অভিনয় চায় না। চায় শুধু জানতে, ভেতরে কিছু এখনো সাড়া দেয় কি না। কারণ নিদর্শন দেখেও যে হৃদয় স্থির রইল, সে জমতে শুরু করে দিয়েছে।"
          },
          {
            "en": "The remedies are the ones the sister verses name. Recite a short passage slowly each day with the intention that it reach you, not merely pass over you. Keep a fixed portion of dhikr, since 57:16 places softening at the remembrance of Allah. Guard the covenant in small things, since 5:13 links hardness to broken promises. Give something away when your heart feels closed, because tightness and hardness travel together. And treat any day in which nothing moved you as a warning to act on, not as an ordinary day.",
            "bn": "প্রতিকার সেগুলোই, যা সহোদর আয়াতগুলো নাম ধরে বলে দিয়েছে। রোজ ছোট একটা অংশ ধীরে তিলাওয়াত করুন, এই নিয়তে যে কথাটা আপনার ভেতরে পৌঁছাক, শুধু উপর দিয়ে চলে না যাক। জিকিরের একটা বাঁধা পরিমাণ রাখুন, কারণ 57:16 আয়াত নরম হওয়াকে রেখেছে আল্লাহর জিকিরের কাছে। ছোট ছোট ওয়াদা রক্ষা করুন, কারণ 5:13 আয়াত কাঠিন্যকে জুড়েছে ওয়াদা ভাঙার সাথে। হৃদয় বন্ধ লাগলে কিছু দান করুন, কারণ কৃপণতা আর কাঠিন্য একসাথে চলে। আর যে দিন কিছুই আপনাকে নাড়ায়নি, সে দিনটাকে সাধারণ দিন ভাববেন না। সেটাকে সতর্কবার্তা ধরে কাজে নামুন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Refuge From the Unhumbled Heart",
          "bn": "অবিনীত হৃদয় থেকে পানাহ"
        },
        "p": [
          {
            "en": "The Prophet ﷺ taught a du'a that names this disease. Muslim narrates from Zayd ibn Arqam (RA) that he used to say: 'O Allah, I seek refuge in You from knowledge that does not benefit, from a heart that does not humble itself, from a soul that is never satisfied, and from a supplication that is not answered' (Muslim 2722). The heart that does not humble itself is qalbin la yakhsha'. The du'a asks for the humbling, khushu', that the verse's stones show by falling from the fear of Allah: two words for one movement. The Sunnah puts into the believer's mouth a request against exactly what 2:74 describes.",
            "bn": "নবী ﷺ এমন এক দোয়া শিখিয়েছেন, যা এই রোগটার নাম ধরে ডাকে। মুসলিমে যায়েদ ইবনে আরকাম (রাঃ) বলেন, তিনি বলতেন: ‘হে আল্লাহ, আমি আপনার কাছে পানাহ চাই এমন ইলম থেকে যা উপকার দেয় না, এমন হৃদয় থেকে যা বিনীত হয় না, এমন নফস থেকে যা কখনো তৃপ্ত হয় না, আর এমন দোয়া থেকে যা কবুল হয় না’ (মুসলিম ২৭২২)। যে হৃদয় বিনীত হয় না, আরবিতে ‘কালবিন লা ইয়াখশা’। দোয়াটা চায় সেই নত হওয়া, সেই ‘খুশু’, যা আয়াতের পাথর দেখায় আল্লাহর ভয়ে গড়িয়ে পড়ে। দুটো শব্দ, নড়াটা একটাই। 2:74 আয়াত যে অবস্থার ছবি আঁকে, সুন্নাহ ঠিক তার বিরুদ্ধেই একটা চাওয়া মুমিনের মুখে তুলে দেয়।"
          },
          {
            "en": "A shorter plea can be drawn from the verse's own words; it is composed here, not narrated: 'O Allah, do not let my heart become like stone or harder. Make it a heart from which rivers of remembrance burst, that splits open at Your Book, and that falls down at Your fear. You are not unaware of what I do, so make what I do pleasing to You.' Say it after the Sunnah du'a rather than instead of it, and say it before the first reading of the Quran each day.",
            "bn": "আয়াতের নিজের শব্দ থেকে আরও ছোট একটা মিনতি বানানো যায়। এটা রচিত, কোনো বর্ণনা নয়: ‘হে আল্লাহ, আমার হৃদয়কে পাথরের মতো বা তার চেয়ে শক্ত হতে দেবেন না। একে এমন হৃদয় বানান, যা থেকে জিকিরের নদী বেরোয়, যা আপনার কিতাবে ফেটে যায়, যা আপনার ভয়ে নুয়ে পড়ে। আমি যা করি আপনি তা থেকে বেখেয়াল নন, তাই আমার কাজকে আপনার পছন্দের বানিয়ে দিন।’ সুন্নাহর দোয়ার বদলে নয়, তার পরে এটা বলুন। আর বলুন রোজ কুরআনের প্রথম তিলাওয়াতের আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "When did a verse of the Quran last stop me where I stood, and what did I do in the hour after it? If my heart were one of the stones in this verse, which of the three would it be today, and would I even know if it were none of them? The verse says the hearts hardened after that, after a sign. What signs have I been given in my own life that I have already filed away as ordinary events?",
            "bn": "কুরআনের কোনো আয়াত শেষ কবে আমাকে থমকে দিয়েছিল, আর তার পরের এক ঘণ্টায় আমি কী করেছিলাম? আমার হৃদয় যদি এই আয়াতের পাথরগুলোর একটা হতো, আজ সেটা তিনের কোনটা হতো, আর কোনোটাই না হলে আমি কি তা টের পেতাম? আয়াত বলছে, নিদর্শনের পরে হৃদয় শক্ত হলো। আমার নিজের জীবনে কোন কোন নিদর্শন আমি পেয়েছি, যেগুলো এরই মধ্যে সাধারণ ঘটনা বলে সরিয়ে রেখেছি?"
          },
          {
            "en": "Which small covenant with Allah, a promise about my prayer, my tongue, or my earnings, have I quietly stopped keeping, and does 5:13 describe what followed inside me? What would it look like this week to sit deliberately under the rain of remembrance, in the rows of prayer and in front of an open mushaf, rather than to wait for my heart to soften on its own, and who, in my house, would notice first if it did?",
            "bn": "আল্লাহর সাথে ছোট কোন ওয়াদাটা, নামাজ নিয়ে, জবান নিয়ে বা রোজগার নিয়ে, আমি চুপচাপ রাখা ছেড়ে দিয়েছি, আর তারপর আমার ভেতরে যা ঘটেছে, 5:13 আয়াত কি তারই বর্ণনা? হৃদয় নিজে নিজে নরম হবে বলে বসে না থেকে, এ সপ্তাহে ইচ্ছা করে জিকিরের বৃষ্টির নিচে বসলে, নামাজের কাতারে আর খোলা মুসহাফের সামনে, তার চেহারা কেমন হবে, আর সত্যিই নরম হলে আমার ঘরে সবার আগে কে টের পাবে?"
          }
        ]
      }
    ]
  },
  "2:83": {
    "sections": [
      {
        "h": {
          "en": "A Covenant Read Back to Them",
          "bn": "তাদেরই সামনে পড়ে শোনানো অঙ্গীকার"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and the long address to the Children of Israel that began at 2:40 has just passed through their claim in 2:80 that the Fire would touch them only for numbered days. 2:81 and 2:82 answer that claim with a rule that applies to everyone: whoever earns evil and is encircled by his sin belongs to the Fire, and whoever believes and does righteous deeds belongs to Paradise. Our verse then opens a new reminder with 'and when', and this time the reminder is a list of duties.",
            "bn": "সূরা বাকারা মাদানি সূরা। 2:40 আয়াত থেকে বানী ইসরাঈলকে যে লম্বা সম্বোধন শুরু হয়েছে, তা সবে পেরিয়ে এসেছে 2:80 আয়াতের সেই দাবি: আগুন তাদের ছোঁবে শুধু গোনা কয়েকটা দিন। 2:81 আর 2:82 আয়াত সেই দাবির জবাব দেয় এমন এক নিয়মে, যা সবার জন্য খাটে। যে গুনাহ কামায় আর গুনাহ যাকে ঘিরে ফেলে, সে জাহান্নামি। যে ঈমান আনে আর নেক আমল করে, সে জান্নাতি। এরপর আমাদের আয়াত ‘আর যখন’ বলে নতুন একটা স্মরণ শুরু করে। এবার স্মরণটা একটা দায়িত্বের তালিকা।"
          },
          {
            "en": "The list is followed at once, in 2:84, by a second covenant about blood and homes, and in 2:85 by the charge that they believed in part of the Book and rejected part. So 2:83 is the first of a pair, the general terms before the specific breach. No occasion of revelation is reported for it; its place is in the sequence of reminders. Its final clause, 'then you turned away, except a few of you, and you were refusing', is the verdict that the next two verses will document in detail.",
            "bn": "তালিকার ঠিক পরেই, 2:84 আয়াতে, আসে দ্বিতীয় অঙ্গীকার, রক্ত আর ঘরবাড়ি নিয়ে। তারপর 2:85 আয়াতে অভিযোগ: তোমরা কিতাবের কিছু অংশ মানো, কিছু অংশ অস্বীকার কর। তাই 2:83 আয়াত একটা জোড়ার প্রথমটা। আগে সাধারণ শর্ত, পরে নির্দিষ্ট ভঙ্গ। এর কোনো আলাদা শানে নুযুল বর্ণিত নেই, এর জায়গা স্মরণের এই ধারার ভেতরে। এর শেষ কথাটা, ‘তারপর অল্প কয়েকজন ছাড়া তোমরা মুখ ফিরিয়ে নিলে, আর তোমরা অস্বীকারকারী ছিলে’, একটা রায়। পরের দুই আয়াত সেই রায়ের দলিল খুঁটিয়ে দেখায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Mithaq, Ihsan, Husna",
          "bn": "মিসাক, ইহসান, হুসনা"
        },
        "p": [
          {
            "en": "Mithaq comes from the root w-th-q, which is the language of tying something fast; a wathaq is a bond or fetter, and a mithaq is a promise pulled tight so that it cannot slip. The Quran uses the word for what Allah takes from prophets and from peoples, never for a casual undertaking. When the verse says the mithaq was taken from the Children of Israel, it means they were bound, and the binding was of the kind that leaves no room to say the terms were unclear.",
            "bn": "‘মিসাক’ এসেছে ও-স-ক মূল থেকে, শক্ত করে বাঁধার ভাষা। ‘ওয়াসাক’ মানে বাঁধন বা শিকল, আর ‘মিসাক’ এমন ওয়াদা, যা এমন টান দিয়ে বাঁধা যে খুলে যাওয়ার উপায় নেই। কুরআন এই শব্দ ব্যবহার করে আল্লাহ নবীদের আর জাতিগুলোর কাছ থেকে যা নেন তার জন্য, হালকা কোনো কথার জন্য নয়। আয়াত যখন বলে বানী ইসরাঈলের কাছ থেকে মিসাক নেওয়া হয়েছিল, মানে তারা বাঁধা পড়েছিল। আর সে বাঁধন এমন যে ‘শর্ত পরিষ্কার ছিল না’ বলার কোনো জায়গা থাকে না।"
          },
          {
            "en": "Ihsan, from h-s-n, is more than being kind; it is doing a thing well, to the point of beauty, and here it stands in the accusative, ihsanan, with its verb left unspoken, as if to say 'and towards parents, excellence', so that the noun carries the whole weight of the command. The same construction returns in 17:23 and 4:36. Then the verse says qulu lin-nasi husna. In the reading of Hafs the word is husnan, the noun 'goodness' itself; in the reading of Hamzah and al-Kisa'i it is hasanan, 'a good word'.",
            "bn": "‘ইহসান’, হ-স-ন মূল থেকে, শুধু দয়া নয়। কোনো কাজ ভালো করে করা, এত ভালো যে তা সুন্দর হয়ে ওঠে। এখানে শব্দটা ‘ইহসানান’ রূপে এসেছে, ক্রিয়াপদ উহ্য রেখে, যেন বলা হচ্ছে ‘আর মা-বাবার প্রতি, ইহসান’। ফলে হুকুমের পুরো ভার এই একটা শব্দের ওপর। একই গঠন ফিরে আসে 17:23 আর 4:36 আয়াতে। তারপর আয়াত বলে ‘কুলু লিন-নাসি হুসনা’। হাফসের পাঠে শব্দটা ‘হুসনান’, খোদ ‘ভালোত্ব’ নামের বিশেষ্য। হামযা আর কিসাঈর পাঠে ‘হাসানান’, ‘একটা ভালো কথা’।"
          },
          {
            "en": "Two features of the wording carry meaning. La ta'buduna illa Allah is a statement in form, 'you will not worship except Allah', yet it functions as a command; at-Tabari reads it as a prohibition in the form of a report, and az-Zamakhshari adds that this form is more forceful than a bare 'do not', because it treats the outcome as settled. And the verse begins by reporting about 'the Children of Israel' in the third person, then swings round to 'you turned away' in the second. The listeners who thought they were hearing history discover they are being addressed.",
            "bn": "শব্দবিন্যাসের দুটো দিক আলাদা মানে বহন করে। ‘লা তা’বুদুনা ইল্লাল্লাহ’ গঠনে একটা বিবৃতি, ‘তোমরা আল্লাহ ছাড়া কারও ইবাদত করবে না’, কিন্তু কাজ করে হুকুম হিসেবে। তাবারি একে পড়েছেন খবরের চেহারায় বলা নিষেধ হিসেবে, আর যামাখশারি যোগ করেছেন, এই চেহারা খালি ‘করো না’র চেয়ে জোরালো। কারণ তাতে ফলাফলকে ধরে নেওয়া হয় মীমাংসিত। আর আয়াতে প্রথমে বানী ইসরাঈলের কথা যেন দূর থেকে, তারপর ঘুরে সরাসরি তাদেরই: ‘তোমরা মুখ ফিরিয়ে নিলে’। যারা ভেবেছিল ইতিহাস শুনছে, তারা টের পায় কথাটা তাদেরই বলা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Order of the List",
          "bn": "তালিকার ক্রম"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the list as a ranking of rights. First is the right of Allah, that He be worshipped alone, the reason for which creation was made; then the rights of creatures, and foremost among them the parents. He observes that Allah habitually pairs the parents' right with His own, and cites 31:14, 'be grateful to Me and to your parents', and 17:23, where the same two duties open the same sentence. On 'speak good to people' he gives the plain sense, good words and lenience, and adds that commanding good and forbidding wrong are included within it.",
            "bn": "ইবনে কাসীর এই তালিকাকে পড়েন হকের ক্রম হিসেবে। সবার আগে আল্লাহর হক, একমাত্র তাঁরই ইবাদত, যে কারণে সৃষ্টি হয়েছে। তারপর সৃষ্টির হক, আর তার শীর্ষে মা-বাবা। তিনি খেয়াল করেন, আল্লাহ সাধারণত মা-বাবার হককে নিজের হকের সাথে জুড়ে বলেন। প্রমাণে আনেন 31:14 আয়াত, ‘আমার শোকর কর আর তোমার মা-বাবার’, আর 17:23 আয়াত, যেখানে একই দুই দায়িত্ব একই বাক্যের শুরুতে। ‘মানুষের সাথে ভালো কথা বল’ প্রসঙ্গে তিনি সোজা অর্থই দেন, ভালো কথা আর নরম ব্যবহার। সাথে যোগ করেন, সৎ কাজের আদেশ আর অন্যায়ের নিষেধও এর ভেতরে পড়ে।"
          },
          {
            "en": "Al-Hasan al-Basri, quoted by Ibn Kathir, widened the good word further: enjoining good, forbidding wrong, patience, and pardon, every kind of conduct Allah is pleased with. As-Sa'di explains the reason the command takes this shape: a person cannot reach everyone with his wealth, so Allah commanded the one form of ihsan that can reach every creature, goodness in speech. At-Tabari records both readings, husnan and hasanan, and treats their sense as close. The difference between the commentators is one of scope, not of substance: how far 'good' stretches, and whether it names the word or the manner.",
            "bn": "হাসান বসরি, ইবনে কাসীরের বরাতে, ভালো কথার পরিধি আরও বাড়িয়েছেন: সৎ কাজের আদেশ, অন্যায়ের নিষেধ, সবর আর মাফ, আল্লাহ যত আচরণে খুশি হন সবই। সাদি বুঝিয়েছেন হুকুমটা এই চেহারা কেন নিল। মানুষ নিজের সম্পদ দিয়ে সবার কাছে পৌঁছাতে পারে না, তাই আল্লাহ এমন এক ইহসানের হুকুম দিলেন, যা প্রতিটি সৃষ্টির কাছে পৌঁছাতে পারে। সেটা কথার ইহসান। তাবারি দুটো পাঠই লিপিবদ্ধ করেছেন, ‘হুসনান’ আর ‘হাসানান’, আর দুটোর অর্থ কাছাকাছি ধরেছেন। মুফাসসিরদের মতভেদ পরিধি নিয়ে, মূল কথা নিয়ে নয়: ‘ভালো’ কতদূর ছড়ায়, আর তা বলা কথাটাকে বোঝায় নাকি বলার ধরনকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer on Time, a Cheerful Face",
          "bn": "সময়মতো নামাজ, হাসিমুখ"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches to the parents' clause the report of Ibn Mas'ud (RA) in the two Sahihs. In al-Bukhari's wording: I asked the Prophet ﷺ, which deed is dearest to Allah? He said, prayer at its proper time. I asked, then which? He said, kindness to parents. I asked, then which? He said, jihad in the way of Allah (al-Bukhari 527). The hadith places the two duties the verse places together, worship and parents, side by side at the top, and in the same order the verse gives them.",
            "bn": "মা-বাবার শর্তটার সাথে ইবনে কাসীর জুড়ে দেন দুই সহিহে থাকা ইবনে মাসউদ (রাঃ)-এর বর্ণনা। বুখারির ভাষায়: আমি নবী ﷺ-কে জিজ্ঞেস করলাম, কোন আমল আল্লাহর কাছে সবচেয়ে প্রিয়? তিনি বললেন, সময়মতো নামাজ। আমি বললাম, তারপর কোনটা? বললেন, মা-বাবার সাথে সদ্ব্যবহার। আমি বললাম, তারপর কোনটা? বললেন, আল্লাহর পথে জিহাদ (বুখারি ৫২৭)। আয়াত যে দুই দায়িত্বকে পাশাপাশি রেখেছে, ইবাদত আর মা-বাবা, হাদিস সে দুটোকেই সবার উপরে পাশাপাশি রাখে। আর ক্রমটাও আয়াতের ক্রম।"
          },
          {
            "en": "To 'speak good to people' Ibn Kathir joins a report of Abu Dharr (RA). In Muslim's wording, the Prophet ﷺ said: do not belittle any good deed, even meeting your brother with a cheerful face (Muslim 2626). Ibn Kathir notes that the verse commands good speech immediately after commanding good treatment, so that two kinds of conduct are named together, words and deeds. The hadith lowers the bar to where anyone can reach it. A face is speech before the mouth opens, and the covenant counts it.",
            "bn": "‘মানুষের সাথে ভালো কথা বল’ অংশের সাথে ইবনে কাসীর জুড়ে দেন আবু যর (রাঃ)-এর বর্ণনা। মুসলিমের ভাষায় নবী ﷺ বলেছেন: ‘কোনো নেক কাজকে ছোট মনে করো না, হোক তা তোমার ভাইয়ের সাথে হাসিমুখে দেখা করা’ (মুসলিম ২৬২৬)। ইবনে কাসীর লক্ষ করেন, আয়াত ভালো ব্যবহারের হুকুমের ঠিক পরেই ভালো কথার হুকুম দেয়। ফলে দুই রকম আচরণ একসাথে নাম পায়, কথা আর কাজ। হাদিস মাপকাঠিটা এতটা নিচে নামিয়ে আনে যে সবাই তার নাগাল পায়। মুখ খোলার আগেই চেহারা একটা কথা বলে দেয়। আর অঙ্গীকার সেটাও গোনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Sisters in the Quran",
          "bn": "কুরআনে এর সহোদর আয়াত"
        },
        "p": [
          {
            "en": "17:23 gives the same opening pair, worship none but Him and treat parents well, then turns it into detail: not even 'uff' to them in their old age, and a noble word instead. 4:36 is the sister Ibn Kathir names outright, since it repeats the verse's list to this ummah and lengthens it with neighbours, the companion at one's side, the traveller and those in one's charge; what was a covenant with Israel is, in 4:36, a command to us. 31:14 explains why parents come straight after Allah: the mother carried him in weakness upon weakness.",
            "bn": "17:23 আয়াতে একই প্রথম জোড়া, তিনি ছাড়া কারও ইবাদত নয় আর মা-বাবার সাথে সদ্ব্যবহার, তারপর সেটা খুঁটিনাটিতে নামে: বার্ধক্যে তাদের ‘উফ’ পর্যন্ত বলা যাবে না, বলতে হবে সম্মানের কথা। 4:36 আয়াতকে ইবনে কাসীর সরাসরি সহোদর বলে নাম নেন। কারণ সেটা এই আয়াতের তালিকা এই উম্মতের সামনে আবার পড়ে আর লম্বা করে: প্রতিবেশী, পাশের সাথী, মুসাফির আর অধীনস্থরা। বানী ইসরাঈলের সাথে যা ছিল অঙ্গীকার, 4:36 আয়াতে তা আমাদের প্রতি হুকুম। 31:14 আয়াত বুঝিয়ে দেয় আল্লাহর ঠিক পরেই মা-বাবা কেন: মা তাকে বহন করেছেন দুর্বলতার ওপর দুর্বলতা নিয়ে।"
          },
          {
            "en": "2:177 restates most of the same list as the definition of righteousness itself: belief, giving wealth despite love of it to relatives, orphans, the needy and the traveller, establishing prayer, giving zakah, and keeping promises when they are made. That last clause is the one 2:83 says was broken. 16:90 gathers the whole into three words, justice, ihsan and giving to relatives, and calls it an admonition. Together the sisters show that the covenant of 2:83 was never a special burden on one people; it is the standing shape of a believing life.",
            "bn": "2:177 আয়াত প্রায় একই তালিকা আবার বলে, এবার খোদ নেকির সংজ্ঞা হিসেবে: ঈমান, আত্মীয়, ইয়াতিম, মিসকিন আর মুসাফিরকে সম্পদ দেওয়া, নামাজ কায়েম, যাকাত আদায়, আর ওয়াদা করলে তা রক্ষা করা। এই শেষ কথাটাই 2:83 আয়াত বলছে ভাঙা হয়েছিল। 16:90 আয়াত পুরোটাকে তিন শব্দে জড়ো করে, ইনসাফ, ইহসান আর আত্মীয়কে দেওয়া, আর একে বলে নসিহত। সব মিলিয়ে সহোদর আয়াতগুলো দেখায়, 2:83 আয়াতের অঙ্গীকার কোনো এক জাতির ওপর বিশেষ বোঝা ছিল না। মুমিনের জীবনের স্থায়ী চেহারাটাই এমন।"
          }
        ]
      },
      {
        "h": {
          "en": "Working Through the Terms",
          "bn": "শর্তগুলো ধরে ধরে কাজ"
        },
        "p": [
          {
            "en": "Read the verse as your own covenant and take one term a day over the coming days. Worship none but Allah: on the first day notice what you feared, hoped in or obeyed more readily than Him. Parents: on the second, call or visit, and if they have died, pray for them and give something in their name. Relatives, orphans, the needy: on the next three days, one each, find a name, not a category, and do something for that person that costs you. Then good speech, then prayer and zakah. The point is to find where you have quietly turned away.",
            "bn": "আয়াতটাকে নিজের অঙ্গীকার হিসেবে পড়ুন আর কয়েক দিন ধরে রোজ একটা শর্ত নিন। আল্লাহ ছাড়া কারও ইবাদত নয়: প্রথম দিন খেয়াল করুন, তাঁর চেয়ে বেশি সহজে আপনি কাকে ভয় পেয়েছেন, কার কাছে আশা করেছেন, কার কথা মেনেছেন। মা-বাবা: দ্বিতীয় দিন ফোন করুন বা দেখা করুন, আর তাঁরা না থাকলে দোয়া করুন ও তাঁদের নামে কিছু দান করুন। আত্মীয়, ইয়াতিম, মিসকিন: পরের তিন দিন, প্রত্যেকের জন্য এক দিন, একটা নাম খুঁজুন, কোনো শ্রেণি নয়, আর সেই মানুষটার জন্য এমন কিছু করুন যাতে আপনার খরচ হয়। তারপর ভালো কথা, তারপর নামাজ আর যাকাত। উদ্দেশ্য একটাই, কোথায় আপনি চুপচাপ মুখ ফিরিয়ে নিয়েছেন তা খুঁজে বের করা।"
          },
          {
            "en": "The term most people fail is the one that costs nothing: speaking good to people. The verse says an-nas, people, not believers, not the deserving. It includes the shopkeeper who overcharged you, the driver who cut in, the relative who has never once asked after you, and the person online you will never meet. Muslim's hadith sets the floor at a cheerful face. Try one full day in which no sentence leaves your mouth that you would be ashamed to hear read back as part of a covenant with Allah, and see how far into the day you get.",
            "bn": "যে শর্তে সবচেয়ে বেশি মানুষ ফেল করে, সেটাতে কোনো খরচ নেই: মানুষের সাথে ভালো কথা। আয়াত বলছে ‘আন-নাস’, মানুষ, মুমিন নয়, যোগ্য লোক নয়। এর ভেতরে পড়ে যে দোকানদার আপনার কাছে বেশি নিয়েছে, যে ড্রাইভার হুট করে সামনে ঢুকে পড়েছে, যে আত্মীয় জীবনে একবারও আপনার খোঁজ নেয়নি, আর অনলাইনে যার সাথে কোনোদিন দেখা হবে না। মুসলিমের হাদিস নিচের সীমা বেঁধে দিয়েছে হাসিমুখে। একটা পুরো দিন চেষ্টা করুন, যাতে এমন কোনো বাক্য মুখ থেকে না বেরোয়, যা আল্লাহর সাথে অঙ্গীকারের অংশ হিসেবে পড়ে শোনালে আপনার লজ্জা লাগবে। দেখুন দিনের কতদূর পর্যন্ত যেতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a From the Verse",
          "bn": "আয়াত থেকে একটি দোয়া"
        },
        "p": [
          {
            "en": "For the second term of the covenant the Quran itself supplies the supplication. 17:24 follows the parents' clause of 17:23 with the words to say: 'My Lord, have mercy upon them as they brought me up when I was small.' It is the du'a the Quran sets beside the parents' clause, for their lifetime and after it, and it is short enough to say after every prayer. Saying it daily keeps the second line of the covenant alive even on days when the phone call did not happen.",
            "bn": "অঙ্গীকারের দ্বিতীয় শর্তের জন্য দোয়াটা কুরআন নিজেই দিয়েছে। 17:23 আয়াতের মা-বাবার অংশের পরেই 17:24 আয়াতে আসে বলার কথাটা: ‘হে আমার রব, তাদের প্রতি রহম করুন, যেমন তারা আমাকে ছোটবেলায় লালন করেছেন।’ মা-বাবার হকের ঠিক পাশে কুরআন এই দোয়াটাই রেখেছে, তাঁদের জীবদ্দশার জন্য আর তার পরের জন্যও। এত ছোট যে প্রতি নামাজের পরে বলা যায়। রোজ বললে অঙ্গীকারের দ্বিতীয় লাইনটা বেঁচে থাকে, এমন দিনেও যেদিন ফোনটা করা হয়নি।"
          },
          {
            "en": "For the covenant as a whole, a supplication in the verse's own vocabulary, composed here and not narrated: 'O Allah, You took a covenant and I have turned away from parts of it. Make me worship none but You, make me excellent to my parents, and make my hands reach the relative, the orphan and the needy. Put a good word on my tongue for all people, keep me standing in prayer and giving what is due, and do not write me among those who turned away, but among the few.'",
            "bn": "পুরো অঙ্গীকারের জন্য আয়াতের নিজের শব্দে একটা দোয়া। এটা রচিত, কোনো বর্ণনা নয়: ‘হে আল্লাহ, আপনি অঙ্গীকার নিয়েছেন, আর আমি তার কিছু অংশ থেকে মুখ ফিরিয়ে নিয়েছি। আমাকে দিয়ে শুধু আপনারই ইবাদত করান, মা-বাবার প্রতি আমাকে ইহসানকারী বানান, আর আমার হাত পৌঁছে দিন আত্মীয়, ইয়াতিম আর মিসকিনের কাছে। সব মানুষের জন্য আমার জবানে ভালো কথা দিন, আমাকে নামাজে দাঁড় করিয়ে রাখুন আর হক আদায়ে লাগিয়ে রাখুন। যারা মুখ ফিরিয়ে নিয়েছে আমাকে তাদের মাঝে লিখবেন না, লিখুন সেই অল্প কয়েকজনের মাঝে।’"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "If the terms of this verse were read aloud in my house as my own signed covenant, which line would make me look at the floor, and which single term, kept for a month, would change that house most? The verse puts parents immediately after Allah. Where do they actually sit in my week, measured in minutes rather than in feelings? Who is the orphan or the needy person I could name right now, and if I cannot name one, what does that say about how far my list of people extends?",
            "bn": "এই আয়াতের শর্তগুলো যদি আমার সই করা অঙ্গীকার হিসেবে আমার ঘরে জোরে পড়া হয়, কোন লাইনে আমি মেঝের দিকে তাকাব, আর কোন একটা শর্ত এক মাস ধরে রাখলে সেই ঘরটা সবচেয়ে বেশি বদলাবে? আয়াত মা-বাবাকে রাখে আল্লাহর ঠিক পরেই। আমার সপ্তাহে তাঁরা আসলে কোথায় আছেন, অনুভূতিতে নয়, মিনিটের হিসাবে? এই মুহূর্তে কোন ইয়াতিম বা কোন অভাবী মানুষের নাম আমি বলতে পারি, আর বলতে না পারলে সেটা কী বলে দেয়, আমার মানুষের তালিকা কতদূর পর্যন্ত যায়?"
          },
          {
            "en": "The covenant makes good speech to all people a religious duty. Whom do I speak to carelessly because I have decided they do not count? The verse ends by saying that most turned away while a few did not. What did the few do differently, and is there anything stopping me from being one of them starting with the next person I speak to?",
            "bn": "অঙ্গীকার সব মানুষের সাথে ভালো কথা বলাকে দ্বীনের দায়িত্ব বানিয়েছে। কার সাথে আমি অসাবধানে কথা বলি, কারণ ঠিক করে নিয়েছি তার হিসাব রাখার দরকার নেই? আয়াত শেষ হয় এই বলে যে বেশিরভাগ মুখ ফিরিয়ে নিল, অল্প কয়েকজন নেয়নি। সেই অল্প কয়েকজন আলাদা কী করেছিল, আর পরের যে মানুষটার সাথে আমি কথা বলব, তাকে দিয়ে শুরু করে তাদের একজন হতে আমাকে কী আটকাচ্ছে?"
          }
        ]
      }
    ]
  },
  "2:84-86": {
    "sections": [
      {
        "h": {
          "en": "Two Covenants and One Breach",
          "bn": "দুই অঙ্গীকার, একটি ভঙ্গ"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and the reminders to the Children of Israel that began at 2:40 have just listed, in 2:83, the general terms of their covenant: worship, parents, kin, orphans, the needy, good speech, prayer and zakah. 2:84 now recalls a second and more specific covenant, no shedding of one another's blood and no eviction from homes, which they acknowledged and witnessed. 2:85 sets their conduct against it and asks the question that gives the passage its name, and 2:86 pronounces the verdict. 2:87 then moves on to the messengers they rejected.",
            "bn": "সূরা বাকারা মাদানি সূরা। 2:40 আয়াত থেকে বানী ইসরাঈলকে যে স্মরণ করানো চলছে, তা 2:83 আয়াতে সবে গুনিয়ে দিয়েছে তাদের অঙ্গীকারের সাধারণ শর্ত: ইবাদত, মা-বাবা, আত্মীয়, ইয়াতিম, মিসকিন, ভালো কথা, নামাজ আর যাকাত। এবার 2:84 আয়াত মনে করায় দ্বিতীয় ও আরও নির্দিষ্ট এক অঙ্গীকার, একে অন্যের রক্ত ঝরাবে না, কাউকে ঘর থেকে তাড়াবে না। তারা তা মেনে নিয়েছিল, নিজেরাই সাক্ষী ছিল। 2:85 আয়াত তাদের কাজকে সেই অঙ্গীকারের পাশে রাখে আর সেই প্রশ্নটা করে, যে প্রশ্নে এই অংশ পরিচিত। 2:86 আয়াত রায় শোনায়। তারপর 2:87 আয়াত চলে যায় সেই রাসূলদের দিকে, যাঁদের তারা প্রত্যাখ্যান করেছিল।"
          },
          {
            "en": "The occasion is a sirah report, not a fabricated tale. Ibn Kathir records from Ibn Ishaq, from Ibn Abbas (RA), that before Islam the Jews of Madinah were split between the two Arab tribes: Banu Qaynuqa were allies of the Khazraj, and Banu an-Nadir and Banu Qurayzah were allies of the Aws. When the Aws and Khazraj fought, each Jewish group fought beside its ally, killing and expelling fellow Jews, and when the fighting ended each ransomed its captives because the Torah required it. The Torah, Ibn Abbas noted, forbade both the killing and the expulsion.",
            "bn": "শানে নুযুলটা সিরাতের বর্ণনা, বানানো গল্প নয়। ইবনে কাসীর ইবনে ইসহাকের সূত্রে ইবনে আব্বাস (রাঃ) থেকে লিখেছেন, ইসলামের আগে মদিনার ইহুদিরা দুই আরব গোত্রের মাঝে ভাগ হয়ে ছিল। বনু কায়নুকা ছিল খাযরাজের মিত্র, আর বনু নাযির ও বনু কুরায়যা ছিল আউসের মিত্র। আউস আর খাযরাজে যুদ্ধ বাঁধলে প্রত্যেক ইহুদি দল নিজের মিত্রের পাশে দাঁড়িয়ে লড়ত, নিজেদেরই জাতভাই ইহুদিদের মারত, ঘরছাড়া করত। যুদ্ধ থামলে প্রত্যেকে নিজেদের বন্দিদের মুক্তিপণ দিয়ে ছাড়াত, কারণ তাওরাত তা চাইত। অথচ, ইবনে আব্বাস (রাঃ) বলেন, খুন আর বহিষ্কার দুটোই তাওরাতে হারাম ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Anfusakum, Tazaharun, Ba'd",
          "bn": "আনফুসাকুম, তাযাহারুন, বা’দ"
        },
        "p": [
          {
            "en": "The covenant says la tasfikuna dima'akum, you will not shed 'your blood', and la tukhrijuna anfusakum, you will not evict 'yourselves'. Anfusakum, from n-f-s, means literally 'your own selves', and the Quran uses it for a community so bound together that a wrong done to one member is done to oneself. Ibn Kathir compares 2:54, where the same word describes the killing that was to be carried out within the people after the calf. The verse could have said 'one another'; it said 'yourselves', so that the breach is exposed as self-harm before it is anything else.",
            "bn": "অঙ্গীকারে বলা হয় ‘লা তাসফিকুনা দিমাআকুম’, তোমরা ‘তোমাদের রক্ত’ ঝরাবে না, আর ‘লা তুখরিজুনা আনফুসাকুম’, তোমরা ‘নিজেদের’ বের করে দেবে না। ‘আনফুসাকুম’, ন-ফ-স মূল থেকে, আক্ষরিক অর্থে ‘তোমাদের নিজের সত্তা’। কুরআন শব্দটা ব্যবহার করে এমন এক জামাতের জন্য, যারা এতটা একসাথে বাঁধা যে একজনের ওপর জুলুম মানে নিজের ওপর জুলুম। ইবনে কাসীর তুলনা টানেন 2:54 আয়াতের সাথে, বাছুরের ঘটনার পর জাতির ভেতরে যে হত্যা চালানোর কথা, সেখানেও একই শব্দ। আয়াত বলতে পারত ‘একে অন্যকে’। বলেছে ‘নিজেদেরকে’, যেন অঙ্গীকার ভাঙাটা অন্য কিছু হওয়ার আগে ধরা পড়ে নিজের ক্ষতি হিসেবে।"
          },
          {
            "en": "Tazaharuna, from z-h-r, the word for the back, means to stand back to back with someone, to back one another up; here they back one another 'in sin and aggression', bil-ithmi wal-'udwan, the exact pair the Quran forbids cooperating in elsewhere. Then tufaduhum, you ransom them, carried in two canonical readings that at-Tabari records, tufaduhum and tafduhum, both meaning to redeem a captive. The clause wa huwa muharramun 'alaykum ikhrajuhum, 'while their eviction was forbidden to you', is a parenthesis dropped between the ransom and the question, so the reader cannot reach the question without passing the prohibition.",
            "bn": "‘তাযাহারুন’, য-হ-র মূল থেকে, যে মূলে পিঠ শব্দটা, মানে কারও সাথে পিঠে পিঠ লাগিয়ে দাঁড়ানো, একে অন্যকে পিঠ দেওয়া। এখানে তারা পিঠ দিচ্ছে ‘গুনাহ আর সীমালঙ্ঘনে’, ‘বিল-ইসমি ওয়াল-উদওয়ান’, ঠিক সেই জোড়া, যাতে সহযোগিতা কুরআন অন্যত্র নিষেধ করেছে। তারপর ‘তুফাদুহুম’, তোমরা তাদের মুক্তিপণ দিয়ে ছাড়াও। এর দুটো স্বীকৃত পাঠ তাবারি লিপিবদ্ধ করেছেন, ‘তুফাদুহুম’ আর ‘তাফদুহুম’, দুটোরই মানে বন্দি ছাড়ানো। ‘ওয়া হুয়া মুহাররামুন আলাইকুম ইখরাজুহুম’, ‘অথচ তাদের বের করে দেওয়া তোমাদের জন্য হারাম ছিল’, এই অংশটা মুক্তিপণ আর প্রশ্নের মাঝখানে বসানো একটা বন্ধনী। পাঠক নিষেধটা না পেরিয়ে প্রশ্ন পর্যন্ত পৌঁছাতে পারে না।"
          },
          {
            "en": "The centre of the passage is a-fa-tu'minuna bi-ba'dil-kitabi wa takfuruna bi-ba'd. The hamzah of denial joined to fa, 'so do you then', is the Quran's grammar for a question whose answer condemns the one asked. Ba'd, part, is set against ba'd, part, with the two verbs 'believe' and 'disbelieve' hung on them, so that the sentence itself is split down the middle like the conduct it describes. 2:85 opens with thumma antum ha'ula'i, 'then you are these very ones', a pointing demonstrative that refuses to let the listeners hide behind the past. It ends, as 2:74 did, with 'Allah is not unaware of what you do'.",
            "bn": "এই অংশের কেন্দ্র হলো ‘আ-ফা-তু’মিনুনা বি-বা’দিল-কিতাবি ওয়া তাকফুরুনা বি-বা’দ’। অস্বীকারের ‘হামযা’র সাথে ‘ফা’ জুড়ে, ‘তবে কি তোমরা’, এটা কুরআনের সেই প্রশ্নের ব্যাকরণ, যার উত্তর প্রশ্ন শোনা লোককেই দোষী করে। ‘বা’দ’, অংশ, বসানো হয়েছে ‘বা’দ’, অংশের মুখোমুখি, আর দুটোর গায়ে ঝোলানো দুটো ক্রিয়া, ‘ঈমান আনো’ আর ‘কুফরি কর’। ফলে বাক্যটা নিজেই মাঝখান থেকে দুই ভাগ, যে আচরণের বর্ণনা দিচ্ছে ঠিক তার মতো। 2:85 আয়াত শুরু হয় ‘সুম্মা আনতুম হাউলাই’ দিয়ে, ‘তারপর তোমরাই তো এই লোক’, আঙুল তুলে দেখানো এমন শব্দ, যা শ্রোতাকে অতীতের আড়ালে লুকাতে দেয় না। শেষ হয় ঠিক 2:74 আয়াতের মতো: ‘তোমরা যা কর আল্লাহ তা থেকে বেখেয়াল নন’।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Ransoming Counts Against Them",
          "bn": "মুক্তিপণ কেন তাদের বিপক্ষে"
        },
        "p": [
          {
            "en": "Ibn Kathir gives the reading that most commentators share: believing in part is the ransoming, which the Torah commands; disbelieving in part is the killing and expulsion, which the Torah forbids. As-Sa'di reads the two parts the same way. Ibn Kathir adds why 'yourselves' is the right word, quoting the Prophet ﷺ that the believers are like one body, and he notes the verdict's two halves: the disgrace of this world for defying the law in their hands, and the severest punishment on the Day for defying the Book itself.",
            "bn": "ইবনে কাসীর সেই ব্যাখ্যাটা দেন, যা বেশিরভাগ মুফাসসিরের: কিছু অংশে ঈমান মানে মুক্তিপণ দেওয়া, যা তাওরাত হুকুম করে। কিছু অংশে কুফরি মানে খুন আর বহিষ্কার, যা তাওরাত নিষেধ করে। সাদিও দুই অংশকে একইভাবে পড়েন। ইবনে কাসীর আরও যোগ করেন ‘নিজেদের’ শব্দটা কেন ঠিক শব্দ, নবী ﷺ-এর সেই কথা এনে, মুমিনরা এক দেহের মতো। আর তিনি রায়ের দুই ভাগ আলাদা করে দেখান: হাতে থাকা শরিয়ত অমান্য করার জন্য দুনিয়ার লাঞ্ছনা, আর খোদ কিতাব অমান্য করার জন্য কিয়ামতের দিনে কঠিনতম শাস্তি।"
          },
          {
            "en": "Ar-Razi presses a question the text invites: ransoming captives was itself obedience to the Torah, so how can it appear in a list of charges? His answer is that the ransom is not the charge; it is the evidence. It proves they knew the Book was binding, which removes the excuse of ignorance for the killing. At-Tabari, working through the readings and the grammar clause by clause, keeps to the plain sense of each phrase and lets the charge stand as worded. The commentators differ in emphasis, from grammar to law to psychology, but none softens the charge.",
            "bn": "রাযি এমন একটা প্রশ্ন চেপে ধরেন, যা আয়াত নিজেই তুলে দেয়: বন্দি ছাড়ানো তো নিজেই তাওরাতের আনুগত্য, তাহলে সেটা অভিযোগের তালিকায় আসে কী করে? তাঁর জবাব: মুক্তিপণটা অভিযোগ নয়, প্রমাণ। এটা প্রমাণ করে তারা জানত কিতাব মানা ফরজ। ফলে খুনের ব্যাপারে ‘জানতাম না’ বলার অজুহাত আর থাকে না। তাবারি পাঠ আর ব্যাকরণ ধরে ধরে বাক্যাংশ বাক্যাংশ এগোন, প্রতিটির সোজা অর্থের কাছে থাকেন, আর অভিযোগটাকে যেমন বলা হয়েছে তেমনই দাঁড় করিয়ে রাখেন। মুফাসসিররা জোর দেন ভিন্ন ভিন্ন জায়গায়, ব্যাকরণ, বিধান, মনের হিসাব। কিন্তু কেউই অভিযোগটা নরম করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Body",
          "bn": "এক দেহ"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches to 'do not shed your own blood' the hadith of an-Nu'man ibn Bashir (RA). In Muslim's wording, the Messenger of Allah ﷺ said: the believers, in their mutual love, mercy and compassion, are like a single body; when one limb complains, the rest of the body responds with sleeplessness and fever (Muslim 2586). The hadith explains the word anfusakum from inside. If the community is one body, then to kill a member and then pay to redeem him is to wound a limb and bandage it, and to call the bandage obedience.",
            "bn": "‘তোমাদের নিজের রক্ত ঝরাবে না’ অংশের সাথে ইবনে কাসীর জুড়ে দেন নু’মান ইবনে বশির (রাঃ)-এর হাদিস। মুসলিমের ভাষায় রাসূলুল্লাহ ﷺ বলেছেন: মুমিনরা পরস্পরের ভালোবাসা, দয়া ও মমতায় এক দেহের মতো। দেহের একটা অঙ্গ কষ্ট পেলে বাকি দেহ জেগে থেকে আর জ্বরে সাড়া দেয় (মুসলিম ২৫৮৬)। হাদিসটা ‘আনফুসাকুম’ শব্দটাকে ভেতর থেকে বুঝিয়ে দেয়। জামাত যদি এক দেহ হয়, তবে একজনকে মেরে তারপর তাকে ছাড়াতে টাকা দেওয়া মানে একটা অঙ্গ কেটে তাতে ব্যান্ডেজ বাঁধা। আর ব্যান্ডেজটাকে আনুগত্য বলে ডাকা।"
          },
          {
            "en": "On the question 'do you believe in part and disbelieve in part' itself, no sound hadith is attached in the classical tafsir, and this article does not supply one. What the Sunnah offers instead is the standard the question assumes. In Sahih Muslim, Ubadah ibn as-Samit (RA) describes the pledge the Companions gave the Prophet ﷺ: to hear and obey in hardship and in ease, in what they liked and in what they disliked. Obedience in what one likes is not what a pledge is for. The pledge exists for the other half.",
            "bn": "‘তোমরা কি কিছু অংশ মানো আর কিছু অংশ অস্বীকার কর’, এই প্রশ্নটার সাথে ধ্রুপদী তাফসিরে কোনো সহিহ হাদিস জোড়া নেই, আর এই লেখাও কোনো হাদিস জুড়ে দিচ্ছে না। তার বদলে সুন্নাহ দেয় সেই মাপকাঠি, প্রশ্নটা যা ধরে নিয়ে করা। সহিহ মুসলিমে উবাদা ইবনে সামিত (রাঃ) সাহাবিদের দেওয়া বায়াতের বর্ণনা দেন: নবী ﷺ-এর কথা শুনব আর মানব, কষ্টে ও স্বাচ্ছন্দ্যে, যা ভালো লাগে তাতে আর যা ভালো লাগে না তাতেও। যা ভালো লাগে তাতে আনুগত্যের জন্য বায়াত লাগে না। বায়াত আছে বাকি অর্ধেকটার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Sisters in the Quran",
          "bn": "কুরআনে এর সহোদর আয়াত"
        },
        "p": [
          {
            "en": "4:150 describes people who say 'we believe in some and disbelieve in others' about the messengers and want a path in between; 4:151 names them the disbelievers in truth. The same split, applied to messengers instead of commands, receives the same verdict. 24:48 shows the reflex in action: called to Allah and His Messenger for judgement, a party turns aside, and 24:51 gives the believers' answer in its place, 'we hear and we obey'. The pair sets the two possible responses to a command one does not like side by side.",
            "bn": "4:150 আয়াত এমন লোকদের ছবি আঁকে, যারা রাসূলদের নিয়ে বলে ‘কাউকে মানি, কাউকে মানি না’ আর মাঝামাঝি একটা পথ চায়। 4:151 আয়াত তাদের বলে আসল কাফির। একই বিভাজন, হুকুমের বদলে রাসূলদের ওপর খাটানো, একই রায় পায়। 24:48 আয়াত এই স্বভাবটাকে কাজে দেখায়: ফয়সালার জন্য আল্লাহ ও তাঁর রাসূলের দিকে ডাকলে একদল মুখ ফিরিয়ে নেয়। আর 24:51 আয়াত তার জায়গায় মুমিনদের জবাব বসায়, ‘আমরা শুনলাম ও মানলাম’। অপছন্দের হুকুমের সামনে দুটো সম্ভাব্য জবাব এই জোড়া পাশাপাশি রেখে দেয়।"
          },
          {
            "en": "2:100 widens the charge from one breach to a pattern: every time they took a covenant, a party of them threw it away. 62:5 gives the image that follows from partial faith: those entrusted with the Torah who did not carry it are like a donkey carrying volumes of books, in possession of every page and bound by none. Read beside 2:85, these sisters say that believing in part is not a lesser form of belief; it is a way of owning the Book without being owned by it.",
            "bn": "2:100 আয়াত অভিযোগটাকে একটা ভঙ্গ থেকে একটা স্বভাবে ছড়িয়ে দেয়: যখনই তারা অঙ্গীকার করেছে, তাদের একদল তা ছুড়ে ফেলেছে। 62:5 আয়াত দেয় সেই ছবি, আংশিক ঈমান থেকে যা দাঁড়ায়: তাওরাতের দায়িত্ব পেয়ে যারা তা বহন করেনি, তারা কিতাবের বোঝা বওয়া গাধার মতো। সব পাতা কাছে আছে, কোনো পাতায় বাঁধা নেই। 2:85 আয়াতের পাশে পড়লে এই সহোদররা বলে, কিছু অংশে ঈমান কোনো ছোট মাপের ঈমান নয়। এটা কিতাবের মালিক হওয়ার একটা কায়দা, কিতাবের কাছে নিজে বাঁধা না পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Question Turned Inward",
          "bn": "প্রশ্নটা নিজের দিকে"
        },
        "p": [
          {
            "en": "The verse is not a text for judging others; the only person whose 'part' you can inspect is yourself. Make an honest list. The commands that cost you little, you probably keep: fasting Ramadan, the Friday prayer, avoiding pork. Now write the commands that cost you something: the source of your income, the interest on your loan, the backbiting in your family group, the prayer at dawn, the relative you have cut off, the wife or husband whose rights you have quietly reduced. Where a command sits on the second list and you have made peace with leaving it, you have found your ransom and your killing.",
            "bn": "এই আয়াত অন্যকে বিচার করার লেখা নয়। যার ‘অংশ’ আপনি পরখ করতে পারেন, সে একজনই, আপনি নিজে। সৎভাবে একটা তালিকা করুন। যে হুকুমে খরচ কম, সেগুলো আপনি সম্ভবত রাখেন: রমজানের রোজা, জুমার নামাজ, শুয়োর থেকে দূরে থাকা। এবার লিখুন যে হুকুমে খরচ আছে: রোজগারের উৎস, ঋণের সুদ, পারিবারিক গ্রুপে গিবত, ফজরের নামাজ, যে আত্মীয়র সাথে সম্পর্ক কেটেছেন, যে স্ত্রী বা স্বামীর হক চুপচাপ কমিয়ে দিয়েছেন। দ্বিতীয় তালিকার কোনো হুকুম ছেড়ে দেওয়া নিয়ে যেখানে আপনি শান্তিতে আছেন, সেখানেই আপনার মুক্তিপণ আর আপনার খুন পাশাপাশি পাওয়া গেল।"
          },
          {
            "en": "Then take one item from the second list and treat it as the Israelites should have treated the ban on killing: as a term of a covenant you have witnessed. Do not try to fix the whole list; the verse's own example is one breach beside one obedience. Tell someone you trust which command you are returning to, so the return is witnessed the way the covenant was. And notice the trade 2:86 names. Whatever you gain from the command you leave out, it is being paid for with the Hereafter, and that price does not go down over time.",
            "bn": "এবার দ্বিতীয় তালিকা থেকে একটা জিনিস নিন। খুনের নিষেধকে বানী ইসরাঈলের যেভাবে ধরা উচিত ছিল, একে সেভাবে ধরুন: এমন এক অঙ্গীকারের শর্ত, যার আপনি নিজে সাক্ষী। পুরো তালিকা একবারে ঠিক করতে যাবেন না। আয়াতের নিজের উদাহরণেও একটা আনুগত্যের পাশে একটা ভঙ্গ। যাকে ভরসা করেন, তাকে বলুন কোন হুকুমে আপনি ফিরছেন, যাতে ফেরাটাও সাক্ষী পায়, অঙ্গীকার যেমন পেয়েছিল। আর 2:86 আয়াত যে সওদার নাম নিয়েছে, তা খেয়াল করুন। যে হুকুম বাদ দিচ্ছেন তা থেকে যা-ই পান, দামটা দেওয়া হচ্ছে আখিরাত দিয়ে। আর সে দাম সময়ের সাথে কমে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Forgiveness, Our Lord",
          "bn": "আপনার মাফ, হে আমাদের রব"
        },
        "p": [
          {
            "en": "The Quran answers the divided faith of 2:85 with a whole one at the surah's end. 2:285 describes the believers who make no distinction between any of Allah's messengers and who say 'we hear and we obey', and it gives their supplication in the same breath: 'Your forgiveness, our Lord, and to You is the destination.' That is the du'a to carry from this verse, because it joins the undivided obedience that 2:85 found missing to the plea for pardon that anyone honest about his own list will need. Say it, in Arabic or in your own tongue, after every prayer this week.",
            "bn": "2:85 আয়াতের দুই ভাগ হওয়া ঈমানের জবাব কুরআন দেয় সূরার শেষে অখণ্ড এক ঈমান দিয়ে। 2:285 আয়াত সেই মুমিনদের ছবি আঁকে, যারা আল্লাহর রাসূলদের কারও মাঝে তফাত করে না, যারা বলে ‘আমরা শুনলাম ও মানলাম’। আর একই নিঃশ্বাসে তাদের দোয়াটা দিয়ে দেয়: ‘আপনার মাফ, হে আমাদের রব, আর আপনার কাছেই ফেরা।’ এই আয়াত থেকে সাথে নেওয়ার দোয়া এটাই। কারণ এটা জুড়ে দেয় সেই অখণ্ড আনুগত্য, যা 2:85 আয়াত খুঁজে পায়নি, আর সেই মাফের মিনতি, নিজের তালিকা নিয়ে সৎ যে কারও যা লাগবে। এ সপ্তাহে প্রতি নামাজের পর বলুন, আরবিতে বা নিজের ভাষায়।"
          },
          {
            "en": "A supplication in the passage's own vocabulary, composed here and not narrated: 'O Allah, I acknowledged Your covenant and witnessed it, and then I kept the part that suited me and left the part that cost me. Do not let me believe in part of Your Book and disbelieve in part. Make me hear and obey in what I like and in what I dislike, and do not let me buy this life with the next. You are not unaware of what I do; make what I do whole.'",
            "bn": "এই অংশের নিজের শব্দে একটা দোয়া। এটা রচিত, কোনো বর্ণনা নয়: ‘হে আল্লাহ, আমি আপনার অঙ্গীকার মেনেছি, সাক্ষী থেকেছি, তারপর সুবিধার অংশটা রেখেছি আর খরচের অংশটা ছেড়েছি। আমাকে আপনার কিতাবের কিছু অংশে ঈমান আর কিছু অংশে কুফরি করতে দেবেন না। যা ভালো লাগে তাতে আর যা ভালো লাগে না তাতেও আমাকে দিয়ে শোনান ও মানান। আখিরাত দিয়ে দুনিয়া কিনতে দেবেন না। আমি যা করি আপনি তা থেকে বেখেয়াল নন। আমার কাজকে অখণ্ড করে দিন।’"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Which command have I obeyed for years mainly because it costs me nothing, and which one have I left for years mainly because it does? If a stranger reconstructed my creed from my bank statement, my phone and my family gatherings, which parts of the Book would he conclude I believe in? The Israelites paid ransoms and called it faith. What is the obedience I point to when my conscience raises the disobedience I would rather not discuss?",
            "bn": "কোন হুকুম আমি বছরের পর বছর মেনেছি মূলত এ কারণে যে তাতে আমার কিছু খরচ হয় না? আর কোনটা বছরের পর বছর ছেড়ে রেখেছি মূলত এ কারণে যে হয়? আমার ব্যাংকের হিসাব, ফোন আর পারিবারিক আসর থেকে কোনো অচেনা লোক আমার আকিদা দাঁড় করালে সে কী ধরে নেবে, কিতাবের কোন অংশে আমি বিশ্বাস করি? বানী ইসরাঈল মুক্তিপণ দিয়ে তাকে ঈমান বলত। আমার বিবেক যখন সেই নাফরমানির কথা তোলে, যা নিয়ে আমি কথা বলতে চাই না, তখন আমি কোন আনুগত্যটা দেখিয়ে দিই?"
          },
          {
            "en": "The verse says they acknowledged the covenant and witnessed it. What have I said in prayer, in public, or to my children that my private conduct contradicts, and who is watching the gap? 2:86 names the price of partial faith as the Hereafter. What, exactly, am I buying with it, and would I sign that contract if it were written out in full in front of me?",
            "bn": "আয়াত বলছে তারা অঙ্গীকার মেনে নিয়েছিল আর সাক্ষী ছিল। নামাজে, লোকের সামনে বা সন্তানদের কাছে আমি কী বলেছি, যা আমার গোপন আচরণ অস্বীকার করে? আর এই ফাঁকটা কে দেখছে? 2:86 আয়াত আংশিক ঈমানের দাম বলেছে আখিরাত। ঠিক কী কিনছি আমি এই দামে? আর এই চুক্তি যদি পুরোটা লিখে আমার সামনে রাখা হতো, আমি কি সই করতাম?"
          }
        ]
      }
    ]
  },
  "2:93": {
    "sections": [
      {
        "h": {
          "en": "The Mount, Raised Again",
          "bn": "পাহাড়, আবার তোলা"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and the surah has already told this scene once. 2:63 recalled the covenant, the mount raised over them, and the command to take what they were given with determination and remember what is in it, and 2:64 recorded that they turned away after that. Our verse returns to the same moment inside a second, sharper sequence. 2:87 to 2:91 have charged them with rejecting and killing messengers and with claiming to believe only in what was sent to them; 2:92 has just said that Musa (AS) brought them clear proofs and they took the calf after that.",
            "bn": "সূরা বাকারা মাদানি সূরা, আর এই দৃশ্য সূরা একবার বলে ফেলেছে। 2:63 আয়াত মনে করিয়েছিল অঙ্গীকার, তাদের ওপর তোলা পাহাড়, আর হুকুম, যা দেওয়া হয়েছে তা দৃঢ়ভাবে ধরো আর তাতে যা আছে স্মরণ রাখো। 2:64 আয়াত লিখে রেখেছিল, এর পরেও তারা মুখ ফিরিয়ে নিল। আমাদের আয়াত সেই একই মুহূর্তে ফেরে, তবে দ্বিতীয় ও আরও ধারালো এক ধারার ভেতরে। 2:87 থেকে 2:91 আয়াত তাদের অভিযুক্ত করেছে রাসূলদের অস্বীকার ও হত্যার দায়ে, আর ‘শুধু আমাদের ওপর যা নাজিল হয়েছে তা মানি’ বলার দায়ে। 2:92 আয়াত সবে বলেছে, মূসা (আ) তাদের কাছে স্পষ্ট প্রমাণ এনেছিলেন, তারপরও তারা বাছুরকে ধরল।"
          },
          {
            "en": "So when 2:93 says 'and when We took your covenant and raised over you the mount', it is not adding information; it is placing the calf and the covenant in the same frame. The command this time is 'take what We have given you with determination and listen', and the reported answer is 'we hear and we disobey'. Then comes the diagnosis, the calf drunk into their hearts, and the verdict, spoken through 'Say', that addresses their claim to faith. 2:94 follows with a challenge: if the Hereafter is yours alone, wish for death. No separate occasion of revelation is reported; the verse belongs to the argument.",
            "bn": "তাই 2:93 আয়াত যখন বলে ‘আর যখন আমি তোমাদের অঙ্গীকার নিলাম আর তোমাদের ওপর পাহাড় তুললাম’, তখন নতুন কোনো তথ্য যোগ হয় না। বাছুর আর অঙ্গীকারকে একই ফ্রেমে বসানো হয়। এবার হুকুম, ‘যা দিলাম দৃঢ়ভাবে ধরো আর শোনো’, আর লিখে রাখা জবাব, ‘আমরা শুনলাম আর অমান্য করলাম’। এরপর রোগ ধরা পড়ে, হৃদয়ে পান করানো বাছুর। তারপর রায়, ‘বলো’ দিয়ে শুরু, যা তাদের ঈমানের দাবিকে সোজা সম্বোধন করে। 2:94 আয়াত আসে চ্যালেঞ্জ নিয়ে: আখিরাত যদি শুধু তোমাদেরই হয়, মৃত্যু কামনা করো। আলাদা কোনো শানে নুযুল বর্ণিত নেই। আয়াত এই যুক্তির ধারার অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Ushribu fi Qulubihim al-'Ijl",
          "bn": "উশরিবু ফি কুলুবিহিমুল-ইজল"
        },
        "p": [
          {
            "en": "Ushribu is the passive of the fourth form of sh-r-b, to drink: not 'they drank' but 'they were made to drink', so that the heart appears as something into which a liquid was poured. The verse says fi qulubihim, 'in their hearts', not 'upon' them. A stain lies on a surface; a drink goes inside and spreads. Then the object is al-'ijl, the calf itself. A calf cannot be drunk, so at-Tabari supplies the omitted word: the love of the calf, hubb al-'ijl, a love so complete that the calf and its love are named by one word.",
            "bn": "‘উশরিবু’ শ-র-ব মূল থেকে, পান করা। কিন্তু শব্দটা ‘তারা পান করল’ নয়, ‘তাদের পান করানো হলো’। ফলে হৃদয়কে দেখা যায় এমন পাত্র হিসেবে, যাতে কোনো তরল ঢালা হয়েছে। আয়াত বলে ‘ফি কুলুবিহিম’, ‘তাদের হৃদয়ের ভেতরে’, ওপরে নয়। দাগ থাকে উপরিতলে। পানীয় ভেতরে যায় আর ছড়ায়। তারপর কর্ম হিসেবে আসে ‘আল-ইজল’, খোদ বাছুরটা। বাছুর তো পান করা যায় না, তাই তাবারি বাদ পড়া শব্দটা বসিয়ে দেন: বাছুরের ভালোবাসা, ‘হুব্বুল-ইজল’। এত পুরো ভালোবাসা যে বাছুর আর তার ভালোবাসাকে এক শব্দে ডাকা চলে।"
          },
          {
            "en": "Why drinking rather than any other image? Water reaches parts of the body that food never touches, and it does so quickly and without being noticed; the Arabs spoke of a dye that a cloth had drunk. Commentators such as ash-Shawkani in Fath al-Qadir give the speed and reach of a drink as the reason the verse chose the word. Then bi-kufrihim, 'because of their disbelief': the ba' is the ba' of cause. The verse does not say the drinking caused the disbelief. It says the disbelief caused the drinking.",
            "bn": "অন্য কোনো ছবি না দিয়ে পান করার ছবি কেন? পানি শরীরের এমন জায়গায় পৌঁছায়, যেখানে খাবার কখনো যায় না, আর যায় দ্রুত, চোখে না পড়ে। আরবরা বলত, কাপড়টা রং পান করেছে। শাওকানির মতো মুফাসসিররা, যেমন ফাতহুল কাদিরে, পানীয়ের এই দ্রুত ছড়িয়ে পড়াকেই আয়াতের শব্দ বাছাইয়ের কারণ বলেছেন। তারপর ‘বি-কুফরিহিম’, ‘তাদের কুফরির কারণে’। এখানকার ‘বা’ কারণের ‘বা’। আয়াত বলছে না, পান করানোটা কুফরির কারণ। বলছে, কুফরিই পান করানোর কারণ।"
          },
          {
            "en": "Two more features shape the verse. 'We hear and we disobey', sami'na wa 'asayna, is built to be heard against sami'na wa ata'na, 'we hear and we obey', the believers' words in 2:285 near the surah's end: the first word identical, the second its opposite. And the closing sentence, 'wretched is what your faith commands you, if you are believers', is irony. Faith commands no such thing; the verse lets them keep the word 'faith' for one clause and then hangs a condition on it, in kuntum mu'minin, that the whole verse has already shown they fail.",
            "bn": "আরও দুটো দিক আয়াতের চেহারা গড়ে। ‘সামি’না ওয়া আসাইনা’, ‘আমরা শুনলাম আর অমান্য করলাম’, গড়া হয়েছে ‘সামি’না ওয়া আতা’না’র মুখোমুখি শোনার জন্য, ‘আমরা শুনলাম আর মানলাম’, সূরার শেষের দিকে 2:285 আয়াতে মুমিনদের কথা। প্রথম শব্দ হুবহু এক, দ্বিতীয়টা তার উল্টো। আর শেষ বাক্য, ‘তোমাদের ঈমান যার হুকুম দেয় তা কত নিকৃষ্ট, যদি তোমরা মুমিন হও’, এটা বিদ্রূপ। ঈমান এমন কোনো হুকুম দেয় না। আয়াত তাদের ‘ঈমান’ শব্দটা রাখতে দেয় একটা বাক্যাংশের জন্য, তারপর তাতে একটা শর্ত ঝুলিয়ে দেয়, ‘ইন কুনতুম মু’মিনিন’। গোটা আয়াত এরই মধ্যে দেখিয়ে দিয়েছে, সে শর্তে তারা ফেল।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Mufassirun Said",
          "bn": "মুফাসসিররা যা বলেছেন"
        },
        "p": [
          {
            "en": "At-Tabari reads 'we hear and we disobey' literally, as words spoken: we heard your saying and disobeyed your command. Others read it as the speech of their conduct rather than of their tongues, since what a people does with a command is the answer it gives. Both readings arrive at the same place, which is why at-Tabari's literal sense has never troubled the other. On the calf, at-Tabari supplies the omitted 'love' and treats the verb as an image of how deeply that love had penetrated, not as a report of any physical drink.",
            "bn": "তাবারি ‘আমরা শুনলাম আর অমান্য করলাম’ পড়েন আক্ষরিক অর্থে, মুখে বলা কথা হিসেবে: আপনার কথা শুনলাম আর আপনার হুকুম অমান্য করলাম। অন্যরা একে পড়েন জবানের নয়, আচরণের কথা হিসেবে। একটা হুকুম নিয়ে একটা জাতি যা করে, সেটাই তার জবাব। দুই পাঠ একই জায়গায় পৌঁছায়, তাই তাবারির আক্ষরিক অর্থ অন্যটার সাথে কখনো ঠোকাঠুকি করেনি। বাছুর প্রসঙ্গে তাবারি বাদ পড়া ‘ভালোবাসা’ শব্দটা বসান, আর ক্রিয়াপদটাকে ধরেন সেই ভালোবাসা কত গভীরে ঢুকেছিল তার ছবি হিসেবে, কোনো সত্যিকারের পানীয়ের খবর হিসেবে নয়।"
          },
          {
            "en": "Ibn Kathir gathers the early authorities on the phrase. Qatadah said they absorbed its love until that love settled in their hearts, and Abu al-Aliyah and ar-Rabi' ibn Anas said the same. On the closing line Ibn Kathir reads more widely than the words strictly require: the wretched thing their faith commands, he says, includes their whole history of breaking covenants and disbelieving in the signs of Allah, down to their rejection of the final Messenger ﷺ. Commentators such as ash-Shawkani, as noted above, give the speed and reach of a drink as the reason for the image. The commentators differ in reach, not in direction.",
            "bn": "ইবনে কাসীর এই বাক্যাংশ নিয়ে প্রাথমিক যুগের মতগুলো জড়ো করেন। কাতাদা বলেছেন, তারা এর ভালোবাসা শুষে নিয়েছিল, যতক্ষণ না সে ভালোবাসা তাদের হৃদয়ে থিতু হলো। আবুল আলিয়া আর রাবি ইবনে আনাস একই কথা বলেছেন। শেষ লাইনে ইবনে কাসীর শব্দগুলো যতটা কড়া অর্থে চায়, তার চেয়ে বড় করে পড়েন: তাদের ঈমান যে নিকৃষ্ট কাজের হুকুম দেয়, তাঁর মতে তার ভেতরে পড়ে অঙ্গীকার ভাঙা আর আল্লাহর নিদর্শন অস্বীকারের পুরো ইতিহাস, একেবারে শেষ রাসূল ﷺ-কে প্রত্যাখ্যান পর্যন্ত। শাওকানির মতো মুফাসসিররা, আগে যেমন বলা হলো, পানীয়ের দ্রুত ছড়িয়ে পড়াকেই এই ছবির কারণ বলেছেন। মুফাসসিরদের তফাত পরিধিতে, দিকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearts Between Two Fingers",
          "bn": "দুই আঙুলের মাঝে হৃদয়"
        },
        "p": [
          {
            "en": "No sound hadith is attached in the classical tafsir to the phrase about drinking the calf, and this article will not fill that space with a weak one. What the Sunnah does give is the verse's premise, that hearts can be turned. Muslim narrates from Abdullah ibn Amr (RA) that the Messenger of Allah ﷺ said: the hearts of all the children of Adam are between two of the fingers of the Most Merciful, as one heart, and He turns them wherever He wills. Then he said: O Allah, Turner of hearts, turn our hearts to Your obedience (Muslim 2654).",
            "bn": "বাছুর পান করানোর এই বাক্যাংশের সাথে ধ্রুপদী তাফসিরে কোনো সহিহ হাদিস জোড়া নেই, আর এই লেখা সে জায়গা কোনো দুর্বল বর্ণনা দিয়ে ভরাবে না। সুন্নাহ যা দেয় তা হলো আয়াতের ভিত্তিটা, হৃদয়কে ঘোরানো যায়। মুসলিমে আবদুল্লাহ ইবনে আমর (রাঃ) বলেন, রাসূলুল্লাহ ﷺ বলেছেন: আদম সন্তানের সব হৃদয় পরম দয়াময়ের দুই আঙুলের মাঝে, যেন একটাই হৃদয়। তিনি যেদিকে চান সেদিকে ঘোরান। তারপর তিনি বললেন: হে আল্লাহ, হৃদয়ের পরিবর্তনকারী, আমাদের হৃদয়কে আপনার আনুগত্যের দিকে ঘুরিয়ে দিন (মুসলিম ২৬৫৪)।"
          },
          {
            "en": "The other half of the verse, hearing without obeying, has its closest echo not in a hadith but in 4:46. There the Quran reports that some of the Jews of Madinah said the very words of the mount, 'we hear and disobey', twisting their tongues, and adds that had they said 'we hear and obey' it would have been better for them and more upright. The verse then names the same cause 2:93 names: Allah cursed them for their disbelief. The answer at the mount was not a lapse of one day; it had become a saying, and the cure was still the two words they would not say.",
            "bn": "আয়াতের বাকি অর্ধেক, না মেনে শোনা, তার সবচেয়ে কাছের প্রতিধ্বনি কোনো হাদিসে নয়, 4:46 আয়াতে। সেখানে কুরআন জানায়, মদিনার ইহুদিদের কেউ কেউ পাহাড়ের নিচের সেই কথাটাই বলত, ‘আমরা শুনলাম ও অমান্য করলাম’, জিভ বাঁকিয়ে। আর যোগ করে, তারা যদি বলত ‘আমরা শুনলাম ও মেনে নিলাম’, তবে তা তাদের জন্য উত্তম ও সঙ্গত হতো। এরপর আয়াত সেই একই কারণ ধরিয়ে দেয়, যা 2:93 আয়াত ধরিয়েছে: তাদের কুফরির কারণে আল্লাহ তাদের লানত করেছেন। পাহাড়ের নিচের জবাবটা এক দিনের পা পিছলানো ছিল না। সেটা একটা বুলি হয়ে গিয়েছিল। আর ওষুধ তখনো সেই দুটো শব্দই, যা তারা বলতে চায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Sisters in the Quran",
          "bn": "কুরআনে এর সহোদর আয়াত"
        },
        "p": [
          {
            "en": "2:63 is the first telling of this scene and must be read with it; there the command was to take the Book firmly and remember what is in it, and 2:64 records the turning away. 2:285, at the surah's close, holds the answer the mount was waiting for: the believers say 'we hear and we obey', and the sentence continues into a plea for forgiveness. 20:91 shows the calf's love in the people's own mouths, when they tell Harun (AS) they will not cease being devoted to it until Musa (AS) returns. That is what a heart that has drunk something sounds like.",
            "bn": "2:63 আয়াত এই দৃশ্যের প্রথম বয়ান, এর সাথে পড়া দরকার। সেখানে হুকুম ছিল কিতাব শক্ত করে ধরো আর তাতে যা আছে স্মরণ রাখো, আর 2:64 আয়াত লিখে রাখে মুখ ফিরিয়ে নেওয়া। 2:285 আয়াত, সূরার শেষে, ধরে রেখেছে সেই জবাব, পাহাড় যার অপেক্ষায় ছিল: মুমিনরা বলে ‘আমরা শুনলাম ও মানলাম’, আর বাক্যটা গড়িয়ে যায় মাফের মিনতিতে। 20:91 আয়াত বাছুরের ভালোবাসাকে দেখায় লোকদের নিজের মুখে, যখন তারা হারুন (আ) কে বলে, মূসা (আ) ফিরে না আসা পর্যন্ত আমরা এর পূজায় লেগেই থাকব। কিছু পান করে ফেলা হৃদয়ের আওয়াজ এমনই হয়।"
          },
          {
            "en": "83:14 gives the neighbouring image: a stain has covered their hearts from what they used to earn, a film that settles on the outside; 2:93 goes one step further in, to what was drunk. 7:152 states the outcome for those who took the calf: anger from their Lord and humiliation in this life, the same disgrace 2:85 promised for believing in part. Read together, the sisters trace a single line: what the heart is filled with governs what the mouth answers, and what the mouth answers governs what follows.",
            "bn": "83:14 আয়াত পাশের ছবিটা দেয়: তাদের কামাই তাদের হৃদয়ে জং ধরিয়ে দিয়েছে, বাইরে জমে বসা একটা আস্তর। 2:93 আয়াত আরও এক ধাপ ভেতরে যায়, যা পান করা হয়েছে সেখানে। 7:152 আয়াত বলে দেয় যারা বাছুরকে ধরেছিল তাদের পরিণতি: তাদের রবের গজব আর দুনিয়ার জীবনে লাঞ্ছনা, কিছু অংশে ঈমানের জন্য 2:85 আয়াত যে লাঞ্ছনার ওয়াদা করেছিল সেটাই। একসাথে পড়লে সহোদর আয়াতগুলো একটা রেখা টানে: হৃদয়ে যা ভরা থাকে তা ঠিক করে মুখ কী জবাব দেবে, আর মুখের জবাব ঠিক করে এরপর কী আসবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Has My Heart Drunk?",
          "bn": "আমার হৃদয় কী পান করেছে?"
        },
        "p": [
          {
            "en": "The verse is about a people at a mountain, and it is about you. Start with the order it gives: the drinking came first, the refusal came out of it. So do not begin with the commands you fail; begin with what your heart is absorbing every day without your permission. Count the hours of screens, the accounts you follow, the person whose approval you check for, the purchase you keep returning to in your mind. None of these is a calf. But whatever is being poured in daily, unnoticed, is what will speak for you when the next command arrives.",
            "bn": "আয়াতটা এক পাহাড়ের নিচের এক জাতিকে নিয়ে, আর আপনাকে নিয়ে। আয়াত যে ক্রম দিয়েছে তা দিয়ে শুরু করুন: আগে পান করানো, তার ভেতর থেকে অস্বীকার। তাই যে হুকুমে আপনি ফেল করেন তা দিয়ে শুরু করবেন না। শুরু করুন আপনার অনুমতি ছাড়াই রোজ আপনার হৃদয় যা শুষে নিচ্ছে তা দিয়ে। স্ক্রিনের ঘণ্টা গুনুন, যেসব অ্যাকাউন্ট অনুসরণ করেন, যার মন পাওয়ার জন্য বারবার দেখেন, যে কেনাকাটা মনে বারবার ফিরে আসে। এর কোনোটাই বাছুর নয়। কিন্তু রোজ কারও নজরে না পড়ে যা ঢালা হচ্ছে, পরের হুকুম এলে সেটাই আপনার হয়ে কথা বলবে।"
          },
          {
            "en": "Then practise the other formula. The next time a verse or a hadith reaches you with a command you did not want, say 'we hear and we obey' aloud, and do one small thing towards it within the hour: a message sent, a subscription cancelled, a debt repaid in part, a prayer moved earlier. Obedience acted on immediately after hearing is what keeps hearing from decaying into the Israelites' answer. And pour something in on purpose: a fixed daily portion of the Quran, taken firmly, as the mount commanded, so that the heart has been drinking that before anything else is offered.",
            "bn": "তারপর অন্য বাক্যটা অভ্যাস করুন। পরের বার কোনো আয়াত বা হাদিস এমন কোনো হুকুম নিয়ে আপনার কাছে পৌঁছালে, যা আপনি চাননি, জোরে বলুন ‘আমরা শুনলাম ও মানলাম’। আর এক ঘণ্টার ভেতরে সেদিকে ছোট একটা কাজ করুন: একটা বার্তা পাঠানো, একটা সাবস্ক্রিপশন বন্ধ করা, ঋণের কিছুটা শোধ করা, নামাজ একটু আগে পড়া। শোনার ঠিক পরেই কাজে নামা আনুগত্যই শোনাকে বানী ইসরাঈলের জবাবে পচে যাওয়া থেকে বাঁচায়। আর ইচ্ছা করে কিছু ঢালুন: কুরআনের বাঁধা একটা দৈনিক অংশ, শক্ত করে ধরা, পাহাড়ের নিচে যেমন হুকুম ছিল। যাতে অন্য কিছু সামনে আসার আগেই হৃদয় সেটা পান করে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Turner of Hearts",
          "bn": "হৃদয়ের পরিবর্তনকারী"
        },
        "p": [
          {
            "en": "The du'a for this verse is the one the Prophet ﷺ attached to his own words about hearts. In Muslim's narration from Abdullah ibn Amr (RA), after saying that hearts are between two fingers of the Most Merciful, he said: Allahumma musarrifal-qulub, sarrif qulubana 'ala ta'atik, 'O Allah, Turner of hearts, turn our hearts to Your obedience' (Muslim 2654). It asks for exactly what 2:93 says the Israelites lacked, a heart turned towards obeying rather than towards the calf, and it asks it from the only One who turns hearts.",
            "bn": "এই আয়াতের দোয়া সেটাই, যা নবী ﷺ হৃদয় নিয়ে নিজের কথার সাথে জুড়ে দিয়েছিলেন। মুসলিমে আবদুল্লাহ ইবনে আমর (রাঃ)-এর বর্ণনায়, হৃদয় পরম দয়াময়ের দুই আঙুলের মাঝে বলার পর তিনি বলেন: ‘আল্লাহুম্মা মুসাররিফাল-কুলুব, সাররিফ কুলুবানা আলা তা’আতিক’, ‘হে আল্লাহ, হৃদয়ের পরিবর্তনকারী, আমাদের হৃদয়কে আপনার আনুগত্যের দিকে ঘুরিয়ে দিন’ (মুসলিম ২৬৫৪)। 2:93 আয়াত বলছে বানী ইসরাঈলের যা ছিল না, এই দোয়া ঠিক সেটাই চায়, বাছুরের দিকে নয়, মানার দিকে ফেরানো হৃদয়। আর চায় একমাত্র তাঁর কাছে, যিনি হৃদয় ঘোরান।"
          },
          {
            "en": "A supplication in the verse's own vocabulary, composed here and not narrated, may follow it: 'O Allah, do not let my heart be made to drink anything but Your love and the love of what You love. Let me take what You have given me with determination, and when I hear, let me obey. Empty from my heart every calf that has settled there, and do not let my faith command me to anything You hate.' Say the Sunnah du'a first; the composed one only names, in the verse's words, what the Sunnah du'a already asks.",
            "bn": "এর পরে আয়াতের নিজের শব্দে একটা দোয়া বলা যায়। এটা রচিত, কোনো বর্ণনা নয়: ‘হে আল্লাহ, আমার হৃদয়কে আপনার ভালোবাসা আর আপনি যা ভালোবাসেন তার ভালোবাসা ছাড়া আর কিছু পান করাবেন না। আপনি যা দিয়েছেন তা আমাকে দৃঢ়ভাবে ধরতে দিন, আর যখন শুনি, তখন মানতে দিন। আমার হৃদয়ে থিতু হয়ে বসা প্রতিটি বাছুর খালি করে দিন। আর আমার ঈমানকে এমন কিছুর হুকুম দিতে দেবেন না, যা আপনি ঘৃণা করেন।’ সুন্নাহর দোয়াটা আগে বলুন। রচিত দোয়াটা শুধু আয়াতের শব্দে নাম ধরে বলে, সুন্নাহর দোয়া এমনিতেই যা চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Which command have I heard clearly, many times, and answered with my life in the words 'we hear and we disobey', without ever saying them? The verse explains the refusal by the drinking. What has my heart been given to drink this year, and who poured it? If my choices over the last month were read back as the commands of my faith, what would a listener conclude my faith is?",
            "bn": "কোন হুকুম আমি পরিষ্কার শুনেছি, বহুবার, আর মুখে না বলেও জীবন দিয়ে জবাব দিয়েছি ‘আমরা শুনলাম আর অমান্য করলাম’? আয়াত অস্বীকারটা বুঝিয়েছে পান করানো দিয়ে। এ বছর আমার হৃদয়কে কী পান করতে দেওয়া হয়েছে, আর ঢেলেছে কে? গত এক মাসের আমার পছন্দগুলো যদি আমার ঈমানের হুকুম হিসেবে পড়ে শোনানো হয়, শ্রোতা কী ধরে নেবে আমার ঈমান কী?"
          },
          {
            "en": "4:46 says it would have been better for them to have said 'we hear and we obey'. When did I last say that to a command I disliked, and how long ago was that? The Prophet ﷺ, who knew hearts are turned by Allah, still asked for his to be turned. If he asked, what stops me from asking every day, and from naming in that du'a the one calf, the one thing my heart has settled on, that I could name honestly tonight?",
            "bn": "4:46 আয়াত বলছে, ‘আমরা শুনলাম ও মেনে নিলাম’ বললে তা তাদের জন্য উত্তম হতো। ভালো না লাগা কোনো হুকুমকে আমি শেষ কবে এই কথাটা বলেছি, আর সেটা কতদিন আগে? নবী ﷺ জানতেন হৃদয় আল্লাহই ঘোরান, তবু নিজের হৃদয় ঘোরানোর জন্য চাইতেন। তিনি চাইলে আমাকে রোজ চাইতে কী আটকায়, আর সেই চাওয়ার ভেতরে একটা বাছুরের নাম নিতে, যার ওপর আমার হৃদয় থিতু হয়ে বসেছে আর আজ রাতেই যার নাম আমি সৎভাবে বলতে পারি?"
          }
        ]
      }
    ]
  },
  "2:97-98": {
    "sections": [
      {
        "h": {
          "en": "An Objection About the Carrier",
          "bn": "বাহককে নিয়ে আপত্তি"
        },
        "p": [
          {
            "en": "Al-Baqarah is Madinan, and the long address to the Children of Israel that opened at 2:40 is still running here. The verse just before, 2:96, describes a clinging to life that outlasts every argument. The verses just after return to the same audience: 2:99 speaks of clear signs sent down, and 2:100 of a covenant that a party of them throw away every time it is made. Between them, two verses stop to take up one objection and answer it.",
            "bn": "সূরা আল-বাকারা মাদানী। 2:40 আয়াতে বনী ইসরাঈলের প্রতি যে দীর্ঘ সম্বোধন শুরু হয়েছিল, তা এখানেও চলছে। ঠিক আগের আয়াত, 2:96, বলছে বেঁচে থাকার এমন আঁকড়ে ধরার কথা, যা সব যুক্তির পরেও টিকে থাকে। ঠিক পরের আয়াতগুলো আবার একই শ্রোতার দিকে ফেরে: 2:99 বলে নাজিল হওয়া সুস্পষ্ট নিদর্শনের কথা, আর 2:100 বলে সেই অঙ্গীকারের কথা, যা যখনই করা হয়, তাদের একদল তা ছুড়ে ফেলে দেয়। এর মাঝখানে দুটো আয়াত থেমে একটা আপত্তি তুলে ধরে আর তার জবাব দেয়।"
          },
          {
            "en": "At-Tabari reports that the scholars of tafsir agree these two verses came down in answer to those who claimed that Jibril was their enemy while Mikail was their friend. Al-Bukhari records in his Sahih, from Anas ibn Malik (RA), that Abdullah ibn Salam (RA) came to the Prophet ﷺ on his arrival in Madinah with three questions, was told the answers had just been brought by Jibril, and said that of all the angels this was the one held to be an enemy. The Messenger of Allah ﷺ then recited this verse.",
            "bn": "আত-তাবারী জানাচ্ছেন, তাফসীরের ইমামগণ এ বিষয়ে একমত যে এই দুই আয়াত নেমেছিল তাদের জবাবে, যারা দাবি করত জিবরীল তাদের শত্রু আর মীকাঈল তাদের বন্ধু। ইমাম বুখারী তাঁর সহীহ গ্রন্থে আনাস ইবনে মালিক (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ মদীনায় পৌঁছানোর পর আবদুল্লাহ ইবনে সালাম (রাঃ) তিনটি প্রশ্ন নিয়ে তাঁর কাছে আসেন। তাঁকে বলা হয়, জবাবগুলো এইমাত্র জিবরীল নিয়ে এসেছেন। তিনি বললেন, সব ফেরেশতার মধ্যে ইনিই তো সেই একজন, যাঁকে শত্রু বলা হয়। তখন আল্লাহর রাসূল ﷺ এই আয়াতটি তিলাওয়াত করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Enmity, and a Heart",
          "bn": "শত্রুতা আর সেই হৃদয়"
        },
        "p": [
          {
            "en": "The word is aduww, from the root '-d-w, whose sense is running past a limit rather than merely feeling cold towards someone. An aduww is not a person you find unpleasant; he is one who has crossed over into hostility and acts on it. The verse begins with qul, say, which places the whole reply in the mouth of the Prophet ﷺ rather than in argument between the parties, and it opens a condition, whoever is an enemy to Jibril, whose completing clause the Arabic leaves unspoken. The Bengali translation fills that gap with a bracketed clause; the English leaves the sentence open.",
            "bn": "শব্দটা 'আদুউ', মূল আইন-দাল-ওয়াও। এর মূল ভাব সীমা ছাড়িয়ে যাওয়া, শুধু কারও প্রতি মন ঠান্ডা থাকা নয়। 'আদুউ' মানে এমন কেউ নয়, যাকে আপনার ভালো লাগে না। সে শত্রুতার সীমা পেরিয়ে গেছে, আর সেই মতো কাজও করে। আয়াত শুরু হয় 'কুল', অর্থাৎ 'বলুন' দিয়ে। ফলে পুরো জবাবটা দুই পক্ষের তর্কে থাকে না, আসে নবী ﷺ-এর মুখে। তারপর একটা শর্ত শুরু হয়, 'যে জিবরীলের শত্রু', কিন্তু শর্তের বাকি অংশটা আরবিতে উহ্য রাখা হয়েছে। বাংলা অনুবাদ ফাঁকটা বন্ধনীর ভেতরে একটা বাক্যাংশ দিয়ে ভরে দেয়, ইংরেজি অনুবাদ বাক্যটা খোলাই রাখে।"
          },
          {
            "en": "In place of the threat the sentence gives information: he brought it down upon your heart by the permission of Allah. Not to the ear, not into a book handed over, but onto the heart, which is where the Quran is described as landing again at 26:194. And the permission matters. An angel who descends only by his Lord's command, as 19:64 has them say of themselves, cannot be the author of what he carries, so hating him for the cargo is a category mistake before it is a sin.",
            "bn": "হুমকির জায়গায় বাক্যটা একটা খবর দেয়: আল্লাহর অনুমতিতে তিনিই একে আপনার হৃদয়ে নামিয়েছেন। কানে নয়, হাতে তুলে দেওয়া কোনো কিতাবে নয়, সোজা হৃদয়ে। 26:194 আয়াতেও কুরআন নামার জায়গা হিসেবে আবার হৃদয়ের কথাই আসে। অনুমতির কথাটাও জরুরি। 19:64 আয়াতে ফেরেশতারা নিজেরাই বলেন, তাঁরা প্রতিপালকের হুকুম ছাড়া নামেন না। এমন ফেরেশতা যা বয়ে আনেন, তার রচয়িতা তিনি হতে পারেন না। তাই বয়ে আনা বার্তার জন্য তাঁকে ঘৃণা করা গুনাহ তো বটেই, তার আগে একটা গোড়ার ভুল।"
          },
          {
            "en": "There is the name itself. Ikrimah glossed the elements Jibr, Mik and Israf as meaning servant, and il as Allah; Ibn Kathir passes this gloss on from al-Bukhari, and early authorities carry it from Ibn Abbas (RA). On that reading, the name being quarrelled with means servant of Allah. Ibn Kathir adds a comparison that makes the pattern easy to see: il stays constant across Jibril, Mikail and Israfil the way Abd stays constant across Abdullah, Abd ar-Rahman and Abd al-Malik.",
            "bn": "এরপর আসে নামটি নিজেই। ইকরিমা ব্যাখ্যা করেছেন, জিবর, মীক ও ইসরাফ শব্দাংশগুলোর অর্থ বান্দা, আর 'ঈল' অর্থ আল্লাহ। ইবনে কাসীর এই ব্যাখ্যাটি ইমাম বুখারী থেকে নিয়ে এসেছেন, আর প্রাচীন ইমামগণ তা বর্ণনা করেছেন ইবনে আব্বাস (রাঃ) থেকে। এই পাঠ অনুযায়ী, যে নামটি নিয়ে ঝগড়া চলছিল তার অর্থ দাঁড়ায় আল্লাহর বান্দা। ইবনে কাসীর এমন একটি তুলনা যোগ করেন, যাতে গড়নটা সহজে ধরা পড়ে: জিবরীল, মীকাঈল ও ইসরাফীল জুড়ে 'ঈল' যেমন অপরিবর্তিত থাকে, আবদুল্লাহ, আবদুর রহমান ও আবদুল মালিক জুড়ে 'আবদ' তেমনি অপরিবর্তিত থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Both Angels Are Named",
          "bn": "দুই ফেরেশতার নাম কেন"
        },
        "p": [
          {
            "en": "At-Tabari's contribution is the occasion, and he states it as agreed rather than as one opinion among several: the passage answers a claim about the two named angels. That settles what the verse is doing before anyone asks what it means. It is not opening a general discussion of angels. It is closing a particular door, and the closing is done by telling the objector something about Jibril he had not thought to take into account.",
            "bn": "আত-তাবারীর অবদান হলো শানে নুযুল। তিনি এটাকে কয়েকটা মতের একটা হিসেবে নয়, সবার একমত বিষয় হিসেবে পেশ করেন: আয়াত দুটো নাম নেওয়া দুই ফেরেশতাকে নিয়ে তোলা এক দাবির জবাব। ফলে আয়াতের অর্থ নিয়ে প্রশ্ন ওঠার আগেই ঠিক হয়ে যায় আয়াতটা কী করছে। এখানে ফেরেশতাদের নিয়ে সাধারণ কোনো আলোচনা শুরু হচ্ছে না। বন্ধ হচ্ছে একটা নির্দিষ্ট দরজা। আর দরজাটা বন্ধ হয় আপত্তিকারীকে জিবরীল সম্পর্কে এমন একটা কথা জানিয়ে, যা সে হিসাবেই ধরেনি।"
          },
          {
            "en": "Ibn Kathir draws the principle out. Whoever takes one messenger as an enemy has taken all of them as enemies, because a messenger does not choose his own errand. He reads 4:150 alongside this verse: those who believe in some and disbelieve in others, seeking a way in between, are named disbelievers there. And since Allah chooses messengers from among the angels as well as from among people, as 22:75 says, the same rule reaches the angel who is only carrying orders.",
            "bn": "ইবনে কাসীর এখান থেকে নীতিটা বের করে আনেন। যে একজন রাসূলকে শত্রু বানায়, সে আসলে সব রাসূলকেই শত্রু বানায়, কারণ কোনো রাসূল নিজের দায়িত্ব নিজে বেছে নেন না। তিনি এই আয়াতের পাশে 4:150 আয়াত রাখেন: যারা কাউকে মানে আর কাউকে মানে না, আর মাঝখান দিয়ে একটা পথ খোঁজে, সেখানে তাদের কাফির বলা হয়েছে। 22:75 আয়াত বলছে, আল্লাহ মানুষের মধ্য থেকে যেমন, ফেরেশতাদের মধ্য থেকেও তেমনি রাসূল বেছে নেন। তাই একই নিয়ম সেই ফেরেশতার ওপরও খাটে, যিনি শুধু হুকুম বয়ে আনেন।"
          },
          {
            "en": "One question the second verse raises is why Jibril and Mikail are named at all, when His angels has already been said. Ibn Kathir answers that the passage exists to defend Jibril, the emissary between Allah and His prophets, and that Mikail is named beside him precisely because the claim had been that Mikail was the friend. Naming both removes the escape route. You cannot keep the enmity by dividing the two of them between a friendly angel and a hostile one.",
            "bn": "দ্বিতীয় আয়াত একটি প্রশ্ন তোলে: 'তাঁর ফেরেশতাগণ' বলার পরেও জিবরীল ও মীকাঈলের নাম আলাদা করে নেওয়া হলো কেন। ইবনে কাসীর জবাব দেন, গোটা অংশটির কাজই হলো জিবরীলের পক্ষ নেওয়া, যিনি আল্লাহ ও তাঁর নবীগণের মধ্যে বার্তাবাহক। আর মীকাঈলের নাম তাঁর পাশে আসে ঠিক এই কারণেই যে দাবিটা ছিল, মীকাঈল বন্ধু। দুজনের নাম একসঙ্গে নিলে পালানোর পথটি বন্ধ হয়ে যায়। বন্ধু ফেরেশতা ও শত্রু ফেরেশতা বানিয়ে দুজনকে ভাগ করে নিয়ে আর শত্রুতা ধরে রাখা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Lord of Those Three",
          "bn": "সেই তিনজনের প্রতিপালক"
        },
        "p": [
          {
            "en": "Ibn Kathir brings at this very verse the supplication with which the Prophet ﷺ used to open his prayer when he rose at night. Sahih Muslim 770 records it from Aishah (RA): O Allah, Lord of Jibril and Mikail and Israfil, Originator of the heavens and the earth, Knower of the unseen and the seen, You judge between Your servants concerning that in which they differ; guide me by Your leave to the truth in what is differed over. Indeed, You guide whom You will to a straight path.",
            "bn": "ঠিক এই আয়াতেই ইবনে কাসীর নিয়ে আসেন সেই দু'আটি, যা দিয়ে নবী ﷺ রাতে উঠে নামাজ শুরু করতেন। সহীহ মুসলিমের ৭৭০ নম্বর হাদিসে আয়েশা (রাঃ) থেকে তা এসেছে: হে আল্লাহ, জিবরীল, মীকাঈল ও ইসরাফীলের প্রতিপালক, আসমান ও যমীনের স্রষ্টা, গায়েব ও প্রকাশ্যের জ্ঞাতা, আপনিই আপনার বান্দাদের মধ্যে তাদের মতভেদের ফয়সালা করেন। যে বিষয়ে মতভেদ হয়েছে, তাতে আপনার অনুমতিতে আমাকে সত্যের পথ দেখান। নিশ্চয়ই আপনি যাকে চান সরল পথের দিকে পথ দেখান।"
          },
          {
            "en": "Notice what the du'a does with the same three names. The night prayer begins by addressing Allah as the Lord of the very angels a dispute had been built around, and the request that follows is for guidance in exactly what is differed over. A quarrel that made Jibril a party is answered by a Sunnah that makes him a servant with a Lord, and hands the disagreement back to the One who will settle it.",
            "bn": "লক্ষ করুন, দু'আটি এই তিনটি নাম নিয়ে কী করে। রাতের নামাজ শুরু হয় আল্লাহকে সেই ফেরেশতাদেরই প্রতিপালক বলে ডেকে, যাঁদের ঘিরে ঝগড়াটা দাঁড় করানো হয়েছিল। তারপর যা চাওয়া হয়, তা ঠিক সেই বিষয়েই পথের দিশা, যা নিয়ে মতভেদ। যে ঝগড়া জিবরীলকে একটা পক্ষ বানিয়ে ফেলেছিল, তার জবাব আসে এমন এক সুন্নাহ দিয়ে, যা তাঁকে দেখায় প্রতিপালকের অধীন একজন বান্দা হিসেবে। আর মতভেদটা ফিরিয়ে দেয় তাঁরই হাতে, যিনি তার ফয়সালা করবেন।"
          },
          {
            "en": "Ibn Kathir also cites here the hadith qudsi recorded by al-Bukhari 6502 from Abu Hurayrah (RA), in which Allah says that whoever shows enmity to a friend of His, He has declared war upon him. That is why, Ibn Kathir says, the second verse ends where it does. Hostility to those Allah has chosen is not a private opinion held quietly at home; the verse answers it in Allah's own name: Allah is an enemy to the disbelievers.",
            "bn": "ইবনে কাসীর এখানে আরও উদ্ধৃত করেন ইমাম বুখারীর ৬৫০২ নম্বরে আবু হুরায়রা (রাঃ) থেকে বর্ণিত হাদিসে কুদসী, যাতে আল্লাহ বলেন, যে তাঁর কোনো ওলীর সঙ্গে শত্রুতা করে, তিনি তার বিরুদ্ধে যুদ্ধ ঘোষণা করেন। ইবনে কাসীর বলেন, এ কারণেই দ্বিতীয় আয়াতের শেষটা এমন। আল্লাহ যাঁদের বেছে নিয়েছেন, তাঁদের সাথে শত্রুতা ঘরে বসে চুপচাপ পুষে রাখা কোনো ব্যক্তিগত মত নয়। আয়াত এর জবাব দেয় আল্লাহর নিজের পক্ষ থেকে: আল্লাহ কাফিরদের শত্রু।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Revelation Lands",
          "bn": "ওহি কোথায় এসে নামে"
        },
        "p": [
          {
            "en": "Read 26:192-194 next: the Quran is the revelation of the Lord of the worlds, the Trustworthy Spirit brought it down, upon your heart. Three verses give the source, the carrier and the landing place in that order, and they put the same phrase about the heart in a Makkan surah. Then 16:102 answers the objection from another side, naming the Pure Spirit as the one who brought it down from your Lord in truth, to make firm those who believe.",
            "bn": "এরপর পড়ুন 26:192-194: কুরআন জগৎসমূহের প্রতিপালকের কাছ থেকে অবতীর্ণ, বিশ্বস্ত আত্মা একে নিয়ে নেমেছেন, আর নেমেছেন আপনার হৃদয়ে। তিনটি আয়াত পরপর দিয়ে দেয় উৎস, বাহক আর নামার জায়গা, এবং হৃদয় নিয়ে সেই একই কথাটি রাখে মক্কী এক সূরায়। এরপর 16:102 আপত্তির জবাব দেয় আরেক দিক থেকে, রুহুল কুদূসের নাম নিয়ে বলে যে তিনিই একে আপনার প্রতিপালকের কাছ থেকে যথাযথভাবে নামিয়েছেন, ঈমানদারদের দৃঢ় রাখার জন্য।"
          },
          {
            "en": "For the principle underneath, 4:150 names the people who believe in some and reject others and want a way in between, and 2:285 gives the believers' answer at the close of this same surah: they make no distinction between any of His messengers. Set them side by side and this passage stops being about a long-ago quarrel. It is the negative image of a sentence every Muslim recites, and 22:75 closes the gap by including angels among those Allah chooses as messengers.",
            "bn": "এর পেছনের নীতিটি বুঝতে পড়ুন ৪:১৫০। সেখানে তাদের কথা আছে, যারা কতককে মানে, কতককে মানে না, আর মাঝামাঝি একটা পথ বের করতে চায়। আর এই সূরারই শেষে ২:২৮৫ দেয় ঈমানদারদের জবাব: তাঁর রাসূলগণের কারও মধ্যে তাঁরা কোনো পার্থক্য করেন না। দুটো পাশাপাশি রাখলে এই অংশটি আর বহু আগের কোনো ঝগড়ার গল্প থাকে না। প্রত্যেক মুসলিম যে বাক্যটি পড়েন, এ হলো তারই উল্টো ছবি। আর ২২:৭৫ বাকি ফাঁকটুকুও বন্ধ করে দেয়: আল্লাহ যাঁদের রাসূল হিসেবে বেছে নেন, তাঁদের মধ্যে ফেরেশতারাও আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Claim Without the Name",
          "bn": "নাম বাদ দিয়ে কথাটি"
        },
        "p": [
          {
            "en": "The habit the verse exposes is not rare and it is not ancient. A piece of advice arrives from a colleague you resent, a correction comes from a relative you have quarrelled with, a reminder is given by someone whose manner you dislike, and the mind goes to work on the carrier instead of the cargo. By the time you have finished assessing who said it you have not once asked whether it was true. That is the shape of the objection this passage answers.",
            "bn": "আয়াত যে স্বভাবটি খুলে দেখায়, তা বিরলও নয়, পুরোনোও নয়। যে সহকর্মীকে আপনি সহ্য করতে পারেন না তাঁর কাছ থেকে পরামর্শ আসে, যে আত্মীয়ের সঙ্গে ঝগড়া হয়েছে তিনি ভুল ধরিয়ে দেন, যার ধরন আপনার পছন্দ নয় তিনি মনে করিয়ে দেন কোনো কথা। মন তখন কাজে লেগে যায় বাহককে নিয়ে, বয়ে আনা কথাটিকে নিয়ে নয়। কে বলল তা যাচাই শেষ হতে হতে কথাটা সত্য কি না, সেটাই আর একবারও জিজ্ঞেস করা হয় না। এই অংশ যে আপত্তির জবাব দিচ্ছে, তার গড়ন এটাই।"
          },
          {
            "en": "So make it a rule to separate the claim from the claimant before you answer. Write the advice down without the name attached and weigh it as if a stranger had said it. 5:8 forbids letting hatred of a people push you off justice, and that is a courtroom rule long before it is a mosque one. If the correction is true, take it and thank Allah that it reached you at all, whatever route it took to arrive.",
            "bn": "তাই নিয়ম বানিয়ে নিন: জবাব দেওয়ার আগে কথাটিকে বক্তা থেকে আলাদা করুন। নাম বাদ দিয়ে পরামর্শটি লিখে ফেলুন, তারপর এমনভাবে ওজন করুন যেন অচেনা কেউ বলেছেন। ৫:৮ আয়াত নিষেধ করে, কোনো সম্প্রদায়ের প্রতি বিদ্বেষ যেন আপনাকে ইনসাফ থেকে সরিয়ে না দেয়। মসজিদের নিয়ম হওয়ার অনেক আগেই এটি আদালতের নিয়ম। ভুল ধরিয়ে দেওয়া কথাটি সত্য হলে মেনে নিন, আর আল্লাহর শুকরিয়া আদায় করুন যে কথাটি আদৌ আপনার কাছে পৌঁছেছে, যে পথ ধরেই আসুক না কেন।"
          },
          {
            "en": "There is a second thing to live here, quieter than the first. The angels are not an abstraction to be assented to and then forgotten. This verse has them named, given errands, and defended by name. Believing in them means treating the unseen servants of Allah as real, and it shows in small places: taking the recitation of the Quran seriously as something carried and placed rather than merely printed, and being careful about what an unseen witness is watching.",
            "bn": "জীবনে আমল করার মতো দ্বিতীয় একটি বিষয়ও এখানে আছে, প্রথমটির চেয়ে নীরব। ফেরেশতারা মুখে স্বীকার করে ভুলে যাওয়ার মতো কোনো ধারণা নন। এই আয়াতে তাঁদের নাম নেওয়া হয়েছে, দায়িত্ব দেওয়া হয়েছে, আর নাম ধরে পক্ষও নেওয়া হয়েছে। তাঁদের প্রতি ঈমান মানে আল্লাহর অদৃশ্য বান্দাদের সত্যিকারের বলে মানা, আর তা ধরা পড়ে ছোট ছোট জায়গায়: কুরআন তিলাওয়াতকে ছাপা কাগজ নয়, বরং বয়ে এনে রেখে দেওয়া আমানত হিসেবে গুরুত্ব দেওয়ায়, আর অদৃশ্য কোনো সাক্ষী কী দেখছেন সে বিষয়ে সতর্ক থাকায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Shown",
          "bn": "সত্য দেখিয়ে দেওয়ার আবেদন"
        },
        "p": [
          {
            "en": "The supplication quoted above from Sahih Muslim 770 is the du'a of this verse, and it is meant to be used rather than admired. Say it standing, in the night prayer, where the Sunnah places it, and if the night is beyond you for now, say it after the obligatory prayer on the day a disagreement has gone sour. Learn the opening by heart first, the three names and the two titles, because that clause is what anchors the rest, and let the request for guidance follow in whatever wording you can hold.",
            "bn": "উপরে সহীহ মুসলিমের ৭৭০ নম্বর থেকে যে দু'আটি তুলে ধরা হলো, সেটিই এই আয়াতের দু'আ; আর তা মুগ্ধ হয়ে দেখার জন্য নয়, কাজে লাগানোর জন্য। সুন্নাহ যেখানে একে রেখেছে সেখানেই পড়ুন, অর্থাৎ রাতের নামাজে দাঁড়িয়ে। রাত এখনো নাগালের বাইরে হলে, যেদিন কোনো মতভেদ তেতো হয়ে গেছে সেদিন ফরজ নামাজের পর পড়ুন। আগে মুখস্থ করুন শুরুর অংশটুকু, তিনটি নাম আর দুটি গুণবাচক পরিচয়; ওই অংশই বাকিটাকে ধরে রাখে। তারপর পথ চাওয়ার আবেদনটি আসুক, যে ভাষায় আপনি ধরে রাখতে পারেন।"
          },
          {
            "en": "It is worth noticing what the du'a does not ask for. It does not ask that the other side be defeated, or that you be proved right. It asks to be shown the truth in the matter, which is a request a person can only make honestly if he is willing to lose the argument. Said at night, before anyone is watching, it is a good test of whether the quarrel is about the truth or about the winning.",
            "bn": "দু'আটি যা চায় না, সেদিকেও নজর দেওয়া দরকার। এতে চাওয়া হয়নি অন্য পক্ষ হেরে যাক, কিংবা আপনিই ঠিক প্রমাণিত হোন। এতে চাওয়া হয়েছে বিষয়টিতে সত্য দেখিয়ে দেওয়া, আর এই আবেদন কেউ সৎভাবে করতে পারেন কেবল তখনই, যখন তিনি তর্কে হারতে রাজি আছেন। রাতে, যখন কেউ দেখছে না, তখন এটি পড়া ভালো এক পরীক্ষা: ঝগড়াটা সত্য নিয়ে, নাকি জেতা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Name Stops Me",
          "bn": "কার নাম আমাকে থামায়"
        },
        "p": [
          {
            "en": "Whose name, if it appeared at the top of a message, would make me stop reading before the second line? Is there anything true in what that person has been trying to tell me? When I last disagreed with someone in the family, was I looking for the truth of the matter, or for a way to keep my position without losing face?",
            "bn": "কার নাম কোনো বার্তার শুরুতে দেখলে আমি দ্বিতীয় লাইনে যাওয়ার আগেই পড়া থামিয়ে দেব? সেই মানুষটি আমাকে যা বোঝাতে চাইছেন, তার মধ্যে কি সত্য কিছু আছে? পরিবারের কারও সঙ্গে শেষবার যখন আমার মতভেদ হয়েছিল, আমি কি বিষয়টির সত্য খুঁজছিলাম, নাকি মুখ না হারিয়ে নিজের অবস্থানে টিকে থাকার উপায় খুঁজছিলাম?"
          },
          {
            "en": "The Quran was placed on a heart before it was ever written on a page. What condition is my heart in when I open it, and do I prepare for that meeting at all? If Allah names Himself the enemy of those who take His servants as enemies, what am I quietly nursing that I would not want counted on that side of the line?",
            "bn": "কাগজে লেখা হওয়ার আগে কুরআন রাখা হয়েছিল এক হৃদয়ে। কুরআন খোলার সময় আমার হৃদয়ের অবস্থা কেমন থাকে, আর সেই সাক্ষাতের জন্য আমি আদৌ কি কোনো প্রস্তুতি নিই? আল্লাহ যদি নিজেকে তাদের শত্রু বলেন যারা তাঁর বান্দাদের শত্রু বানায়, তবে আমি চুপচাপ কী পুষে রেখেছি, যা এই সীমার ওই পাশে গোনা হোক তা আমি চাইব না?"
          }
        ]
      }
    ]
  },
  "2:102": {
    "sections": [
      {
        "h": {
          "en": "What Was Picked Up Instead",
          "bn": "বদলে যা তুলে নেওয়া হলো"
        },
        "p": [
          {
            "en": "Al-Baqarah is Madinan, and this is the longest verse in its stretch of the surah; it is the second half of a sentence that begins at 2:101. There, a messenger comes confirming the Scripture they already hold, and a party of those given the Scripture throw the Book of Allah behind their backs as if they did not know. Our verse says what they took up in its place. Then 2:103 closes the passage with the counterfactual that hurts most: had they believed and been mindful of Allah, the reward from Allah would have been better.",
            "bn": "সূরা আল-বাকারা মাদানী, আর সূরার এই অংশে সবচেয়ে লম্বা আয়াত এটিই; ২:১০১ আয়াতে শুরু হওয়া কথার দ্বিতীয় অর্ধেক এটি। সেখানে রাসূল আসেন তাদের হাতে থাকা কিতাবেরই সত্যায়নকারী হয়ে, আর কিতাবপ্রাপ্তদেরই একদল আল্লাহর কিতাব পিঠের পিছনে ছুড়ে ফেলে দেয়, যেন তারা কিছু জানেই না। আমাদের আয়াত বলে দেয়, তার জায়গায় তারা কী তুলে নিয়েছিল। এরপর ২:১০৩ অংশটি শেষ করে এমন এক 'যদি' দিয়ে, যা সবচেয়ে বেশি কষ্ট দেয়: তারা ঈমান আনলে আর তাকওয়া অবলম্বন করলে আল্লাহর কাছ থেকে পাওয়া প্রতিদানই হতো উত্তম।"
          },
          {
            "en": "So the frame is an exchange, not a lecture on the occult. A Book was set down and something else was taken up, and the verse spends its length showing that the something else was known to be worthless by the very people who chose it. The name of Sulayman (AS) had been drawn into a charge, and the verse lifts it off him in three words before going any further: wa ma kafara Sulayman, it was not he who disbelieved.",
            "bn": "কাজেই কাঠামোটা লেনদেনের, গুপ্তবিদ্যা নিয়ে বক্তৃতার নয়। কিতাব নামিয়ে রাখা হলো, আর তুলে নেওয়া হলো অন্য কিছু। আয়াতটি নিজের পুরো দৈর্ঘ্য খরচ করে দেখায়, যারা সেই অন্য জিনিসটি বেছে নিয়েছিল তারা নিজেরাই জানত ওটা মূল্যহীন। সুলায়মান (আঃ)-এর নাম টেনে আনা হয়েছিল এক অপবাদে, আর আয়াতটি আর কোনো দিকে যাওয়ার আগেই তিনটি শব্দে তা তাঁর ঘাড় থেকে নামিয়ে দেয়: 'ওয়া মা কাফারা সুলায়মান', কুফরি তিনি করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "One Word, Two Readings",
          "bn": "একটি শব্দ, দুটি পাঠ"
        },
        "p": [
          {
            "en": "The famous difficulty in the verse is the little word ma in the clause about what came down at Babylon. In Arabic ma can be a relative pronoun, meaning that which, or it can be a negation, meaning and nothing was. Everything that follows in the commentaries follows from which of the two a reader takes, and both readings were held by early authorities. The Quran does not settle it in the wording, which is why the difference is reported as a difference and not as an error.",
            "bn": "আয়াতের বিখ্যাত জটিলতাটি ছোট্ট একটি শব্দে: 'মা'। বাবিলে কী নেমেছিল, সেই অংশে শব্দটি আছে। আরবিতে 'মা' সম্বন্ধবাচক সর্বনাম হতে পারে, তখন অর্থ 'যা'; আবার না-বোধক হতে পারে, তখন অর্থ 'আর নামানো হয়নি'। তাফসীরে এরপর যা কিছু আসে, সবই নির্ভর করে পাঠক এই দুটির কোনটি নেন তার ওপর, আর প্রথম যুগের ইমামদের মধ্যে দুটি পাঠেরই অনুসারী ছিলেন। কুরআনের শব্দ নিজে এর ফয়সালা করে দেয় না। তাই পার্থক্যটিকে ভুল বলা হয় না, মতপার্থক্য বলেই বর্ণনা করা হয়।"
          },
          {
            "en": "Two more words carry weight. The two say they are only a fitnah, a trial, and fitnah in the Quran is a testing that sorts people rather than a punishment that falls on them, so the warning is part of the test and not an escape from it. And the passage ends with sharaw bihi anfusahum, they sold themselves for it, the same idiom of a ruinous sale that 2:90 used earlier in the same surah about the same people. The Quran is pricing a transaction, twice.",
            "bn": "আরও দুটি শব্দ ভার বইছে। দুজন বলেন, তাঁরা কেবল 'ফিতনা', অর্থাৎ পরীক্ষা; আর কুরআনে 'ফিতনা' মানে এমন যাচাই যা মানুষকে আলাদা করে দেয়, তাদের ওপর নেমে আসা শাস্তি নয়। কাজেই সাবধানবাণীটি পরীক্ষারই অংশ, পরীক্ষা থেকে ছাড় নয়। আর অংশটি শেষ হয় 'শারাও বিহি আনফুসাহুম' দিয়ে, অর্থাৎ এর বিনিময়ে তারা নিজেদের বিক্রি করেছে। সর্বনাশা বেচাকেনার এই একই বাগ্‌ভঙ্গি একই সূরায় আগেই 2:90 আয়াতে এই লোকদের সম্পর্কে ব্যবহার হয়েছে। কুরআন এক লেনদেনের দাম বসাচ্ছে, দুইবার।"
          },
          {
            "en": "Then there is khalaq, the word for what the buyer will not have in the Hereafter. Ibn Abbas (RA), Mujahid and as-Suddi all gloss it as a share or portion. It is not that his reward will be small; the sentence removes him from the distribution entirely. Set that beside the clause that he learns what harms him and does not benefit him, and the verse has stated the cost twice over, in this world and the next, before it ever raises its voice.",
            "bn": "এরপর আছে 'খালাক' শব্দটি, অর্থাৎ আখিরাতে ক্রেতার যা থাকবে না। ইবনে আব্বাস (রাঃ), মুজাহিদ ও আস-সুদ্দী তিনজনই এর অর্থ করেছেন অংশ বা ভাগ। কথাটা এই নয় যে তার প্রতিদান কম হবে; বাক্যটি তাকে বণ্টন থেকেই সরিয়ে দেয়। এর পাশে রাখুন সেই কথাটি, যে সে এমন জিনিস শেখে যা তার ক্ষতি করে, উপকার করে না। তাহলে দেখা যাবে, গলা চড়ানোর আগেই আয়াতটি দুই দুইবার খরচের হিসাব দিয়ে দিয়েছে, দুনিয়ায় একবার, আখিরাতে একবার।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Disputes, One Verse",
          "bn": "এক আয়াতে দুই মতভেদ"
        },
        "p": [
          {
            "en": "Ibn Kathir's own rendering takes the ma as a relative pronoun, so that what came down upon the two angels at Babylon is among the things the devils taught. A second dispute runs beside that one, over who Harut and Marut were. Ibn Kathir reports at-Tabari as holding that they were two ordinary men of Babylon rather than angels, and says plainly that this explanation is not plausible; many of the Salaf, he answers, held that they were angels sent down as the verse states.",
            "bn": "ইবনে কাসীর নিজের ব্যাখ্যায় 'মা'-কে নেন সম্বন্ধবাচক সর্বনাম হিসেবে; অর্থাৎ বাবিলে দুই ফেরেশতার ওপর যা নামানো হয়েছিল, তা-ও শয়তানদের শেখানো জিনিসগুলোর মধ্যেই পড়ে। এর পাশেই চলে আরেকটি মতভেদ: হারূত ও মারূত আসলে কারা ছিলেন। ইবনে কাসীর জানান, আত-তাবারীর মত হলো তাঁরা ফেরেশতা নন, বাবিলের সাধারণ দুই মানুষ; আর ইবনে কাসীর সোজা বলে দেন, এই ব্যাখ্যা গ্রহণযোগ্য নয়। জবাবে তিনি বলেন, সালাফের অনেকেই মত দিয়েছেন যে আয়াত যেমন বলছে তেমনই, তাঁরা নাজিল হওয়া ফেরেশতাই ছিলেন।"
          },
          {
            "en": "Al-Qurtubi reports the other reading, in which the ma negates: nothing at all was sent down upon the two, and the denial simply continues the denial already made about Sulayman (AS). On that reading the verse is one long clearing of names, first a prophet and then two angels, and the disbelief stays entirely with the devils who taught. He also, Ibn Kathir relays, reports the angels view from Ali (RA), Ibn Mas'ud (RA), Ibn Abbas (RA), Ibn Umar (RA), Ka'b al-Ahbar, as-Suddi and al-Kalbi.",
            "bn": "আল-কুরতুবী অন্য পাঠটি বর্ণনা করেন, যেখানে 'মা' নেতিবাচক: দুজনের ওপর কিছুই নামানো হয়নি, আর এই অস্বীকার সুলায়মান (আঃ) সম্পর্কে করা অস্বীকারেরই ধারাবাহিকতা। এই পাঠে আয়াতটি হয়ে ওঠে নাম পরিষ্কার করার এক দীর্ঘ প্রক্রিয়া, প্রথমে একজন নবীর, তারপর দুই ফেরেশতার; আর কুফরি পুরোটাই থেকে যায় শিক্ষাদাতা শয়তানদের ঘাড়ে। ইবনে কাসীর জানাচ্ছেন, হারূত ও মারূত ফেরেশতা ছিলেন এই মতটি আল-কুরতুবী বর্ণনা করেছেন আলী (রাঃ), ইবনে মাসঊদ (রাঃ), ইবনে আব্বাস (রাঃ), ইবনে উমার (রাঃ), কাব আল-আহবার, আস-সুদ্দী ও আল-কালবী থেকে।"
          },
          {
            "en": "Ibn Kathir records both readings of the ma without forcing a choice between them. What is more useful for a reader today is how he handles the material around the verse. He relays several early reports about the pair, from as-Suddi, from Ibn Abbas (RA) by way of Abu Ja'far ar-Razi, from al-Hasan al-Basri and from Qatadah, and rests no ruling on any of them. The storytellers' tales that grew around the two are not needed for the verse, and are left out here.",
            "bn": "'মা'-এর দুটি পাঠই ইবনে কাসীর তুলে ধরেন, কোনোটিকে জোর করে বেছে নেন না। তবে আজকের পাঠকের জন্য বেশি কাজের হলো আয়াতের চারপাশের বর্ণনা তিনি কীভাবে সামলান। দুজনকে নিয়ে প্রাচীন কয়েকটি বর্ণনা তিনি তুলে ধরেন, আস-সুদ্দী থেকে, আবু জাফর আর-রাযীর সূত্রে ইবনে আব্বাস (রাঃ) থেকে, আল-হাসান আল-বসরী ও কাতাদা থেকে; কিন্তু তার কোনোটির ওপর তিনি কোনো সিদ্ধান্ত দাঁড় করান না। কিসসাকারদের মুখে দুজনকে ঘিরে যে গল্পগুলো জমে উঠেছে, আয়াত বোঝার জন্য সেগুলোর দরকার নেই, তাই এখানে সেগুলো রাখা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Throne on the Water",
          "bn": "পানির উপরে পাতা আসন"
        },
        "p": [
          {
            "en": "At the clause about separating a man from his wife, Ibn Kathir brings the narration of Jabir ibn Abdullah (RA) in Sahih Muslim 2813. Satan sets his throne upon the water and sends out his troops; the nearest to him in rank is the one who causes the greatest fitnah. One comes and says he kept at a man until he made him say such and such, and is told he has done nothing. Another says he did not leave him until he had separated him from his wife, and is drawn close and embraced.",
            "bn": "স্বামী-স্ত্রীর মধ্যে বিচ্ছেদ ঘটানোর কথাটির জায়গায় ইবনে কাসীর নিয়ে আসেন জাবির ইবনে আবদুল্লাহ (রাঃ)-এর বর্ণনা, সহীহ মুসলিম ২৮১৩। শয়তান পানির ওপর নিজের আসন পাতে আর নিজের বাহিনী পাঠায়; পদমর্যাদায় তার সবচেয়ে কাছের সে-ই, যে সবচেয়ে বড় ফিতনা ঘটিয়েছে। একজন এসে বলে, সে অমুককে লেগে থেকে অমুক কথা বলিয়ে ছেড়েছে; জবাব আসে, তুমি কিছুই করোনি। আরেকজন বলে, সে ছাড়েনি যতক্ষণ না লোকটিকে তার স্ত্রীর কাছ থেকে আলাদা করেছে; তাকে কাছে টেনে জড়িয়ে ধরা হয়।"
          },
          {
            "en": "The second narration is not brought by Ibn Kathir at this place; it is the one the books of Sunnah standardly attach to the subject. Sahih al-Bukhari 2766, from Abu Hurayrah (RA), records that the Messenger of Allah ﷺ named the seven destructive sins and the Companions asked what they were. Sorcery stands second on that list, immediately after associating partners with Allah. The order tells you how the Sunnah classes the subject of this verse: not as a curiosity or a folk practice, but next door to the one sin that is never forgiven unrepented.",
            "bn": "দ্বিতীয় বর্ণনাটি ইবনে কাসীর এখানে আনেননি; এটি সেই হাদিস, সুন্নাহর কিতাবগুলো যাকে চিরকাল এই প্রসঙ্গের সঙ্গেই রাখে। সহীহ বুখারীর ২৭৬৬ নম্বর, আবু হুরায়রা (রাঃ) থেকে, যেখানে আল্লাহর রাসূল ﷺ সাতটি ধ্বংসকারী গুনাহের কথা বলেন এবং সাহাবীগণ জিজ্ঞেস করেন সেগুলো কী। সেই তালিকায় যাদুর অবস্থান দ্বিতীয়, ঠিক আল্লাহর সঙ্গে শরীক করার পরেই। এই ক্রমটিই বলে দেয় সুন্নাহ এই আয়াতের বিষয়টিকে কোন কাতারে রাখে: কৌতূহল বা লোকাচার হিসেবে নয়, বরং সেই গুনাহের পাশের ঘরে, তওবা ছাড়া যা কখনো মাফ হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Magician Never Succeeds",
          "bn": "যাদুকর কখনো সফল হয় না"
        },
        "p": [
          {
            "en": "Hear 20:69 beside this verse: what the magicians crafted is but a magician's trick, and the magician does not succeed wherever he is. Musa (AS) is told to throw, and the throwing settles the question of power in public. 10:81 adds the verdict in his own words, that Allah will expose the worthlessness of what they brought, because Allah does not amend the work of corrupters. Both verses say in narrative what our verse says in law.",
            "bn": "এই আয়াতের পাশে শুনুন 20:69: যাদুকররা যা বানিয়েছে তা যাদুকরের কৌশল ছাড়া কিছু নয়, আর যাদুকর যেখানেই যাক সফল হয় না। মূসা (আঃ)-কে বলা হয় ছুড়ে দিতে, আর সেই ছুড়ে দেওয়াই সবার সামনে শক্তির প্রশ্নটির ফয়সালা করে দেয়। 10:81 তাঁরই মুখে রায়টি যোগ করে: তারা যা এনেছে আল্লাহ তা ব্যর্থ করে দেবেন, কারণ বিপর্যয় সৃষ্টিকারীদের কাজ আল্লাহ সংশোধন করেন না। দুটি আয়াত ঘটনার ভাষায় তা-ই বলে, যা আমাদের আয়াত বলে বিধানের ভাষায়।"
          },
          {
            "en": "For the clause about harm only by the permission of Allah, read 6:17: if Allah touches you with harm, none can remove it but He. That is the doctrine the verse is protecting. Then 113:4 tells you where to take the fear, seeking refuge from the evil of the blowers in knots, and 2:90 shows the same people making the same wretched sale earlier in the same surah, so you can see that this is a pattern the surah is tracking, not an isolated incident.",
            "bn": "আল্লাহর অনুমতি ছাড়া ক্ষতি না হওয়ার কথাটির জন্য পড়ুন 6:17: আল্লাহ কোনো ক্ষতি দিয়ে স্পর্শ করলে তিনি ছাড়া কেউ তা সরাতে পারে না। এই বিশ্বাসটিকেই আয়াতটি আগলাচ্ছে। এরপর 113:4 বলে দেয় ভয়টা কোথায় নিয়ে যেতে হবে, গিরায় ফুঁ দেওয়াদের অনিষ্ট থেকে আশ্রয় চেয়ে। আর 2:90 দেখায়, একই সূরায় আগেই এই লোকেরা একই সর্বনাশা বেচাকেনা করছে। অর্থাৎ সূরাটি যা অনুসরণ করছে তা বিচ্ছিন্ন কোনো ঘটনা নয়, একটা ধারা।"
          }
        ]
      },
      {
        "h": {
          "en": "What Replaced the Book",
          "bn": "কিতাবের জায়গা কী নিয়েছে"
        },
        "p": [
          {
            "en": "Start where the passage starts, at 2:101, because the sorcery is downstream of something else. A Book was within reach and was put down. Ask honestly what has replaced it in the hours where it used to sit, or would sit. Very few people abandon guidance for something impressive; they abandon it for something available. Fixing the second half of the verse usually means fixing the first half, which is a matter of when the Quran is opened and for how long.",
            "bn": "শুরু করুন সেখান থেকেই যেখান থেকে অংশটি শুরু হয়, অর্থাৎ 2:101 থেকে, কারণ যাদু আসে আরও আগের কিছু থেকে। কিতাব হাতের কাছেই ছিল, আর তা নামিয়ে রাখা হলো। সৎভাবে জিজ্ঞেস করুন, যে সময়টায় ওটা থাকত বা থাকার কথা, সেই সময়টা এখন কী দখল করেছে। খুব কম মানুষ হিদায়াত ছাড়ে চমকপ্রদ কিছুর জন্য; ছাড়ে হাতের কাছে যা আছে তার জন্য। আয়াতের দ্বিতীয় অর্ধেক ঠিক করা মানে সাধারণত প্রথম অর্ধেকটাই ঠিক করা, আর সেটা কুরআন কখন খোলা হয় আর কতক্ষণ খোলা থাকে, তারই হিসাব।"
          },
          {
            "en": "The second thing to live is the refusal of the shortcut. Fortune-tellers, charms bought for a marriage or a job, remedies that promise to bend an outcome: all of them trade on the belief the verse denies, that something can act outside the permission of Allah. When a marriage is under strain, the verse itself points where the trouble comes from, and the Quran's own remedy in 4:35 is arbitration by two people who want reconciliation, not a purchased solution.",
            "bn": "আমলের দ্বিতীয় বিষয়টি হলো শর্টকাট থেকে দূরে থাকা। গণক, বিয়ে বা চাকরির জন্য কেনা তাবিজ, ফলাফল ঘুরিয়ে দেওয়ার প্রতিশ্রুতি দেওয়া টোটকা: সবগুলোর ব্যবসা চলে একটি বিশ্বাসের ওপর, আর আয়াতটি ঠিক সেই বিশ্বাসটিই নাকচ করে। বিশ্বাসটি হলো, আল্লাহর অনুমতির বাইরেও কিছু কাজ করতে পারে। সংসারে টান পড়লে আয়াতটি নিজেই দেখিয়ে দেয় ঝামেলাটা কোথা থেকে আসে। আর কুরআনের নিজের সমাধান ৪:৩৫ আয়াতে: দুজন সালিস, যাঁরা মীমাংসা চান। টাকা দিয়ে কেনা কোনো সমাধান নয়।"
          },
          {
            "en": "Third, take the warning seriously as a warning. The two were made to say we are only a trial before they taught anything, and people went ahead. That is the pattern of most ruin: not ignorance, but a caution heard and stepped over. The verse says it twice, that they learn what harms them, and that they knew. Whatever you are currently arguing with in your own conscience is being described here, in its own vocabulary.",
            "bn": "তৃতীয়ত, সাবধানবাণীকে সত্যিই সাবধানবাণী হিসেবে নিন। কিছু শেখানোর আগে দুজনকে বলানো হয়েছিল, আমরা কেবল পরীক্ষা; তবু মানুষ এগিয়ে গেছে। বেশির ভাগ সর্বনাশের ধরনটাই এই: না জানা নয়, বরং সতর্কবাণী শুনে তার ওপর দিয়ে হেঁটে যাওয়া। আয়াতটি দুইবার বলে, তারা এমন জিনিস শেখে যা তাদের ক্ষতি করে, আর তারা জানত। নিজের বিবেকের সঙ্গে আপনি এখন যা নিয়ে তর্ক করছেন, এখানে তারই বর্ণনা চলছে, তারই ভাষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Surahs Before Sleep",
          "bn": "ঘুমের আগে তিন সূরা"
        },
        "p": [
          {
            "en": "The verse leaves a person aware of an unseen harm and unsure what to do with the awareness. The Sunnah answers with a practice rather than a worry. Sahih al-Bukhari 5017 records from Aishah (RA) that every night when the Prophet ﷺ went to his bed he would cup his hands together, blow into them, recite al-Ikhlas, al-Falaq and an-Nas into them, and then wipe with them over as much of his body as he could reach, beginning with his head and face, doing that three times.",
            "bn": "আয়াতটি মানুষকে ছেড়ে দেয় অদৃশ্য এক ক্ষতির খবর হাতে নিয়ে, অথচ সেই খবর নিয়ে কী করবেন তা অজানা রেখে। সুন্নাহ জবাব দেয় দুশ্চিন্তা দিয়ে নয়, অভ্যাস দিয়ে। সহীহ বুখারীর ৫০১৭ নম্বর হাদিসে আয়েশা (রাঃ) থেকে এসেছে, নবী ﷺ প্রতি রাতে বিছানায় গিয়ে দুই হাত একসঙ্গে মিলিয়ে তাতে ফুঁ দিতেন, তাতে সূরা ইখলাস, ফালাক ও নাস পড়তেন, তারপর মাথা ও মুখমণ্ডল থেকে শুরু করে শরীরের যতটা নাগাল পেতেন ততটায় হাত বুলিয়ে নিতেন। এভাবে তিনবার করতেন।"
          },
          {
            "en": "That is the answer in its own place: not an amulet, not a specialist, but three short surahs, said by a person for himself, every night, in the dark, with nobody watching; the two mu'awwidhatayn among them name the verse's own subject matter. Alongside it you can make the verse's vocabulary into a supplication of your own: O Allah, You are the one by whose permission alone harm reaches or passes me; teach me what benefits me, keep from me what harms me, and do not let me sell myself for anything.",
            "bn": "জবাবটা এখানেই, নিজের জায়গায়: তাবিজ নয়, বিশেষজ্ঞ নয়, বরং ছোট তিনটি সূরা, যার মধ্যে মুআওবিযাতাইন দুটিতে এই আয়াতের বিষয়টিরই নাম আছে; আর তা একজন নিজের জন্য নিজে পড়েন, প্রতি রাতে, অন্ধকারে, কারও চোখের সামনে নয়। এর পাশে আয়াতের শব্দগুলো দিয়ে নিজের একটি দু'আও বানিয়ে নিতে পারেন: হে আল্লাহ, আপনার অনুমতিতেই ক্ষতি আমার কাছে আসে বা সরে যায়; যা আমার উপকারে আসে তা শিখিয়ে দিন, যা ক্ষতি করে তা আমার থেকে দূরে রাখুন, আর কোনো কিছুর বিনিময়েই আমাকে নিজেকে বেচতে দেবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Did I Trade",
          "bn": "আমি কী বিনিময় করলাম"
        },
        "p": [
          {
            "en": "What have I set the Book down for, and what does the exchange rate look like written out? Is there a warning I have already heard clearly about something I am still doing? When the last hard thing happened, did my hand go first to du'a and to the means Allah has permitted, or to whatever promised the quickest turn?",
            "bn": "কিতাব আমি নামিয়ে রেখেছি কীসের জন্য, আর সেই বিনিময়ের হিসাবটা লিখে ফেললে দেখতে কেমন লাগে? এমন কোনো সাবধানবাণী কি আছে, যা আমি স্পষ্ট শুনেছি অথচ কাজটা এখনো চালিয়ে যাচ্ছি? গতবার কঠিন কিছু ঘটার সময় আমার হাত প্রথমে কোন দিকে গিয়েছিল: দু'আ আর আল্লাহর অনুমোদিত উপায়ের দিকে, নাকি যেটা সবচেয়ে তাড়াতাড়ি মোড় ঘোরানোর কথা দিয়েছিল সেদিকে?"
          },
          {
            "en": "The narration puts the breaking of a marriage at the top of Satan's list. What am I doing this month that strengthens the bond in my own home, and what am I doing that quietly wears it down? And if magic harms and does not benefit, what else in my week fits that description exactly, and why have I not applied the same verdict to it?",
            "bn": "বর্ণনাটি শয়তানের তালিকার শীর্ষে রাখে সংসার ভাঙাকে। এই মাসে আমি এমন কী করছি যা নিজের ঘরের বাঁধন শক্ত করে, আর এমন কী করছি যা চুপচাপ তা ক্ষইয়ে দেয়? আর যাদু যদি ক্ষতি করে, উপকার না করে, তবে আমার সপ্তাহের আর কোন জিনিস হুবহু এই বর্ণনায় পড়ে, আর তার ওপর একই রায় আমি দিইনি কেন?"
          }
        ]
      }
    ]
  },
  "2:113-114": {
    "sections": [
      {
        "h": {
          "en": "A Claim and Its Echo",
          "bn": "দাবি আর তার প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "The passage before these verses is about a claim to exclusive entry. In 2:111 the assertion is that none will enter Paradise except one who belongs to this group or that one, and the reply is that this is only wishful thinking, so bring your proof if you are truthful. 2:112 then states the actual standard: whoever submits his face to Allah while doing good has his reward with his Lord, with no fear on him and no grief. Our first verse follows immediately.",
            "bn": "এই আয়াতগুলোর আগের অংশটি একচেটিয়া প্রবেশের দাবি নিয়ে। 2:111 আয়াতে দাবি হলো, অমুক দল বা তমুক দলের লোক ছাড়া কেউ জান্নাতে ঢুকবে না; জবাব আসে, এ কেবল আকাঙ্ক্ষা, সত্যবাদী হলে দলিল আনো। এরপর 2:112 প্রকৃত মানদণ্ডটি বলে দেয়: যে আল্লাহর কাছে আত্মসমর্পণ করে আর সৎকাজ করে, তার প্রতিদান তার প্রতিপালকের কাছে; তার কোনো ভয় নেই, দুঃখও নেই। আমাদের প্রথম আয়াতটি ঠিক এরপরেই।"
          },
          {
            "en": "Ibn Ishaq reports from Ibn Abbas (RA) that a delegation of Christians from Najran came to the Messenger of Allah ﷺ and rabbis came and disputed with them in his presence, each side telling the other that they stood on nothing, and that this verse came down about it. After 2:114 the surah turns outward again: 2:115 says that to Allah belong the east and the west, so wherever you turn, there is the Face of Allah, which is a very deliberate thing to place after a verse about barred doors.",
            "bn": "ইবনে ইসহাক ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, নাজরান থেকে খ্রিষ্টানদের একটি প্রতিনিধিদল আল্লাহর রাসূল ﷺ-এর কাছে আসে, আর ইহুদি আলিমরাও এসে তাঁর সামনেই তাদের সঙ্গে বিতর্কে জড়ায়। দুই পক্ষই অন্য পক্ষকে বলে, তোমাদের দাঁড়ানোর কিছু নেই। এই ঘটনাতেই আয়াতটি নামে। এরপর 2:114 পেরিয়ে সূরা আবার বাইরের দিকে ফেরে: 2:115 বলে, পূর্ব ও পশ্চিম আল্লাহরই, কাজেই যেদিকেই মুখ ফেরান সেদিকেই আল্লাহর চেহারা। বন্ধ দরজার আয়াতের পরেই এ কথাটি বসানো খুব ভেবেচিন্তে করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Upon a Thing",
          "bn": "কোনো কিছুর উপরেই নয়"
        },
        "p": [
          {
            "en": "The Arabic of the accusation is laysa ala shay'in, literally not upon a thing. It is not the language of correction. To say a man is mistaken about something leaves him standing; to say he is not upon a thing is to remove the ground from under him entirely, scripture, prophet and all. The Quran quotes it in that bare form twice in one verse, once in each direction, and lets the symmetry do the work of comment.",
            "bn": "অভিযোগটির আরবি হলো 'লাইসা আলা শাইইন', আক্ষরিক অর্থে কোনো কিছুর উপরেই নয়। এটি ভুল ধরিয়ে দেওয়ার ভাষা নয়। কাউকে কোনো বিষয়ে ভুল বললে তার দাঁড়ানোর জায়গা থাকে; কিন্তু সে কোনো কিছুর উপরেই নেই বললে তার পায়ের নিচের মাটিটাই সরিয়ে নেওয়া হয়, কিতাব-নবী সবসুদ্ধ। কুরআন কথাটি এই সাদামাটা রূপেই এক আয়াতে দুইবার তুলে ধরে, দুই দিক থেকে একবার করে, আর মন্তব্যের কাজটা ছেড়ে দেয় এই প্রতিসাম্যের ওপর।"
          },
          {
            "en": "Then comes a small clause that changes the temperature: and they recite the Scripture. Grammatically it is a circumstantial phrase, describing the state the speakers are in while they speak. It does not say they are wrong about each other; it says look what they are doing at the same time. The reader is meant to feel the friction between a book open in the hands and a sentence in the mouth that erases the other reader entirely.",
            "bn": "এরপর আসে ছোট্ট একটি বাক্যাংশ, যা পরিবেশের তাপটাই বদলে দেয়: অথচ তারা কিতাব পাঠ করে। ব্যাকরণের দিক থেকে এটি অবস্থা বোঝানো বাক্যাংশ: কথা বলার সময় বক্তারা কী অবস্থায় আছে, তা জানায়। কথাটি বলে না যে তারা একে অপরের ব্যাপারে ভুল; বলে, দেখুন, ঠিক একই সময়ে তারা কী করছে। হাতে খোলা কিতাব, আর মুখে এমন এক বাক্য যা অন্য পাঠককে পুরোপুরি মুছে দেয়। এই দুইয়ের ঘষাটুকু পাঠকের গায়ে লাগুক, সেটাই উদ্দেশ্য।"
          },
          {
            "en": "In the second verse the question is wa-man aẓlam, who is more unjust, a form the Quran reserves for the far end of a scale rather than for ordinary wrongdoing. And the charge is not neglect but effort: sa'a fi kharabiha, he strives at their ruin. Sa'y is deliberate, worked-at motion. Ruin here is not a building falling down while nobody notices; it is something a person gets up in the morning and works towards.",
            "bn": "দ্বিতীয় আয়াতে প্রশ্নটি 'ওয়া মান আজলাম', অর্থাৎ তার চেয়ে বড় জালিম কে; কুরআন এই গড়নটি রাখে সাধারণ অন্যায়ের জন্য নয়, বরং মাপকাঠির একেবারে শেষ প্রান্তের জন্য। আর অভিযোগটি অবহেলার নয়, পরিশ্রমের: 'সাআ ফী খারাবিহা', সে ওগুলোর ধ্বংসের চেষ্টা করে। 'সাঈ' মানে ইচ্ছাকৃত, খেটে করা চলাচল। এখানে ধ্বংস মানে কারও নজর ছাড়াই ভবন ভেঙে পড়া নয়; এ এমন কিছু, যার জন্য মানুষ সকালে উঠে খাটে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Mosques, Which Offenders",
          "bn": "কোন মসজিদ, কোন অপরাধী"
        },
        "p": [
          {
            "en": "On those who do not know say the like of their words, the commentators divide. As-Suddi refers it to the Arabs who said the Prophet ﷺ followed nothing. Ar-Rabi ibn Anas and Qatadah read it of the Christians answering the Jews, and Ata' pushed it further back, to nations before either scripture. At-Tabari declines to narrow it: the wording is general, and he finds no evidence favouring one proposal over the others. Ibn Kathir reports the disagreement and agrees that the general reading is better. Worth noting: the English translation in this app narrows the phrase with a bracketed gloss, the polytheists, where the commentators left it open.",
            "bn": "'যারা জানে না তারাও ওদের মতোই বলে' অংশটি নিয়ে মুফাসসিরগণ ভাগ হয়ে যান। আস-সুদ্দী একে ফেরান সেই আরবদের দিকে, যারা বলত নবী ﷺ কিছুরই অনুসারী নন। আর-রাবী ইবনে আনাস ও কাতাদা একে পড়েন ইহুদিদের জবাবে খ্রিষ্টানদের বলা কথা হিসেবে, আর আতা একে আরও পেছনে নিয়ে যান, দুই কিতাবের আগের জাতিগুলো পর্যন্ত। আত-তাবারী একে সংকীর্ণ করতে রাজি নন: শব্দগঠন সাধারণ, আর কোনো একটি প্রস্তাবকে অন্যগুলোর ওপর প্রাধান্য দেওয়ার মতো প্রমাণ তিনি পান না। ইবনে কাসীর মতভেদটি তুলে ধরে একমত হন যে সাধারণ পাঠটিই উত্তম। একটি কথা মনে রাখা ভালো: মুফাসসিরগণ যেখানে অংশটি খোলা রেখেছেন, অ্যাপের ইংরেজি অনুবাদ সেখানে বন্ধনীর ভেতরে 'মুশরিকরা' জুড়ে দিয়ে অর্থটি সংকীর্ণ করে দেয়।"
          },
          {
            "en": "On the second verse the difference is sharper, because it decides which mosques and which offenders are meant. Ibn Kathir inclines to the Quraysh: he brings the report of Ibn Zayd, which Ibn Jarir transmits, that the verse concerns those who turned the Prophet ﷺ back from Makkah at al-Hudaybiyyah, and the report from Ibn Abbas (RA) in Ibn Abi Hatim that the Quraysh prevented him from praying at the Ka'bah. At-Tabari is reported to prefer a reading pointed centuries earlier, at the ruin of Bayt al-Maqdis, though that is not the line Ibn Kathir takes here.",
            "bn": "দ্বিতীয় আয়াতে মতভেদ আরও তীক্ষ্ণ, কারণ এখানেই ঠিক হয় কোন মসজিদ আর কোন অপরাধীদের কথা বলা হচ্ছে। ইবনে কাসীর কুরাইশদের দিকেই ঝোঁকেন। তিনি আনেন ইবনে যায়েদের বর্ণনা, যা ইবনে জারীর বর্ণনা করেছেন: হুদাইবিয়ায় যারা নবী ﷺ-কে মক্কা থেকে ফিরিয়ে দিয়েছিল, আয়াতটি তাদের নিয়ে। সঙ্গে আনেন ইবনে আবী হাতিমে থাকা ইবনে আব্বাস (রাঃ)-এর বর্ণনা: কুরাইশরা তাঁকে কাবায় নামাজ পড়তে দেয়নি। আত-তাবারী সম্পর্কে বলা হয়, তিনি পছন্দ করেন শত শত বছর আগের এক ঘটনার দিকে ইঙ্গিত করা পাঠ, বাইতুল মাকদিসের ধ্বংস; তবে ইবনে কাসীর এখানে সেই পথ ধরেননি।"
          },
          {
            "en": "Ibn Kathir then removes the need to choose in practice. He glosses striving at their ruin as preventing the very people who would fill them with the remembrance of Allah, so that barring the worshipper is itself a species of ruining the place. If that is what ruin means, the charge fits every case the commentators proposed, and it also fits cases none of them had in front of them. The wrong named is a wrong anyone with a key can commit.",
            "bn": "এরপর ইবনে কাসীর ব্যবহারিকভাবে বেছে নেওয়ার প্রয়োজনটাই সরিয়ে দেন। 'ওগুলোর ধ্বংসের চেষ্টা' অংশটির ব্যাখ্যায় তিনি বলেন, যারা মসজিদকে আল্লাহর জিকিরে ভরে তুলত ঠিক তাদেরই বাধা দেওয়া। অর্থাৎ ইবাদতকারীকে আটকানোটাই জায়গাটিকে ধ্বংস করারই একটি ধরন। ধ্বংসের অর্থ যদি এই হয়, তবে মুফাসসিরগণ যত ঘটনার কথা তুলেছেন সবকটিতেই অভিযোগটি খাপ খায়, আর খাপ খায় এমন ঘটনাতেও যেগুলো তাঁদের সামনে ছিল না। এখানে যে অন্যায়ের নাম নেওয়া হলো, হাতে চাবি আছে এমন যে কেউ তা করতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Silence, Then a Supplication",
          "bn": "নীরবতা, তারপর এক দু'আ"
        },
        "p": [
          {
            "en": "It is worth saying plainly that the mufassirun attach no marfu narration to the first of these two verses. The material at 2:113 is the report of the occasion and the disagreement over who is meant, and nothing further should be smuggled in to fill the space. A verse can be well understood on its own wording and its context, and this is one of them.",
            "bn": "সোজাসুজি বলে রাখা ভালো, এই দুই আয়াতের প্রথমটির সঙ্গে মুফাসসিরগণ নবী ﷺ পর্যন্ত পৌঁছানো কোনো বর্ণনা জুড়ে দেন না। 2:113 আয়াতে যা আছে তা হলো প্রেক্ষাপটের বর্ণনা আর কাদের কথা বলা হচ্ছে সেই মতভেদ; ফাঁক ভরাতে এর বাইরে কিছু চোরাপথে ঢোকানো উচিত নয়। কিছু আয়াত নিজের শব্দ ও প্রসঙ্গ দিয়েই ভালোভাবে বোঝা যায়, আর এটি তেমনই একটি।"
          },
          {
            "en": "At the second verse Ibn Kathir does bring a narration, and its fit is exact. Musnad Ahmad records from Busr ibn Artah (RA) a supplication the Messenger of Allah ﷺ used to make, and Ibn Kathir grades the hadith hasan. The verse closes on two penalties, disgrace in this world and a great punishment in the Hereafter; the du'a asks refuge from precisely those two and adds a good outcome in every affair. It is quoted whole further down, where the du'a for this passage belongs. The commentator heard the verse's closing rhythm and answered it in the Sunnah's own words.",
            "bn": "দ্বিতীয় আয়াতে ইবনে কাসীর একটি বর্ণনা নিয়ে আসেন, আর তার মিলটি একেবারে হুবহু। মুসনাদে আহমাদে বুসর ইবনে আরতাআ (রাঃ) থেকে এসেছে এমন এক দু'আ, যা আল্লাহর রাসূল ﷺ করতেন; ইবনে কাসীর হাদিসটিকে হাসান বলেছেন। আয়াত শেষ হয় দুটি শাস্তি দিয়ে, দুনিয়ায় লাঞ্ছনা আর আখিরাতে কঠিন শাস্তি; দু'আটি ঠিক সেই দুটি থেকেই আশ্রয় চায়, সঙ্গে চায় সব কাজে ভালো পরিণতি। পুরো দু'আটি নিচে দেওয়া আছে, দু'আর অংশে। মুফাসসির আয়াতের শেষ সুরটি শুনেছেন, আর জবাব দিয়েছেন সুন্নাহর নিজের ভাষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "They Are Not All Alike",
          "bn": "তারা সবাই সমান নয়"
        },
        "p": [
          {
            "en": "The first sister is the corrective, and it must be read or the verse will be misused: 3:113 says they are not all the same, and describes among the People of the Scripture a community standing in obedience, reciting the verses of Allah through the night and prostrating. The Quran itself refuses the blanket sentence that 2:113 was quoting. Whoever takes this verse as licence to erase a whole people has read one half of the Book and stopped.",
            "bn": "প্রথম সহোদর আয়াতটিই সংশোধনী, আর তা না পড়লে এই আয়াতের অপব্যবহার হবে: 3:113 বলে, তারা সবাই এক নয়; কিতাবীদের মধ্যে এমন এক দল আছে, যারা দ্বীনের উপর প্রতিষ্ঠিত, রাতের বেলা আল্লাহর আয়াত পড়ে আর সিজদা করে। 2:113 যে ঢালাও বাক্যটি উদ্ধৃত করছিল, কুরআন নিজেই তা মানতে অস্বীকার করে। যিনি এই আয়াতকে গোটা একটি জাতিকে মুছে দেওয়ার ছাড়পত্র বানান, তিনি কিতাবের অর্ধেক পড়েই থেমে গেছেন।"
          },
          {
            "en": "For the mosques, 9:18 gives the positive standard: they are maintained by those who believe in Allah and the Last Day, establish prayer, give zakah and fear none but Allah. 72:18 gives the ownership: the masjids belong to Allah, so call upon no one alongside Him. 8:34 shows the same crime as our verse in Makkah, obstructing al-Masjid al-Haram, and 22:40 widens the frame further, naming monasteries, churches, synagogues and mosques in which the name of Allah is much mentioned as places Allah defends by checking people through one another.",
            "bn": "মসজিদ প্রসঙ্গে ৯:১৮ দেয় ইতিবাচক মানদণ্ড: মসজিদ আবাদ করে তারাই, যারা আল্লাহ ও আখিরাতে ঈমান আনে, নামাজ কায়েম করে, যাকাত দেয় আর আল্লাহ ছাড়া কাউকে ভয় করে না। ৭২:১৮ জানায় মালিকানার কথা: মসজিদ আল্লাহরই, কাজেই তাঁর সঙ্গে অন্য কাউকে ডেকো না। ৮:৩৪ মক্কায় আমাদের আয়াতের সেই একই অপরাধ দেখায়: মসজিদুল হারামে বাধা দেওয়া। আর ২২:৪০ পরিসরটি আরও বড় করে। সেখানে আশ্রম, গির্জা, ইহুদিদের উপাসনালয় আর মসজিদের নাম এসেছে, যেখানে আল্লাহর নাম বেশি বেশি নেওয়া হয়; আল্লাহ মানুষ দিয়ে মানুষকে ঠেকিয়ে এসব জায়গা রক্ষা করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Keep the Quarrel Its Size",
          "bn": "ঝগড়াকে তার মাপে রাখুন"
        },
        "p": [
          {
            "en": "The sentence the verse quotes is available in every language and it is not confined to any one community. Muslims say it about other Muslims: that group has nothing, there is nothing there, they are not upon anything. Notice that the objection almost never starts out that sweeping. It begins as a disagreement about a ruling or a method, and somewhere in the retelling it becomes a verdict on the whole person, delivered in a few words that leave nothing standing.",
            "bn": "আয়াত যে বাক্যটি উদ্ধৃত করে, তা সব ভাষায় পাওয়া যায় এবং কোনো একটি সম্প্রদায়ের মধ্যেই আটকে নেই। মুসলিমরা অন্য মুসলিমদের সম্পর্কে বলেন: ওদের কিছু নেই, ওখানে কিছুই নেই, ওরা কোনো কিছুর ওপরেই নেই। খেয়াল করুন, আপত্তিটা শুরুতে প্রায় কখনোই এত ঢালাও থাকে না। শুরু হয় কোনো মাসআলা বা পদ্ধতি নিয়ে দ্বিমত দিয়ে, আর বলতে বলতে কোথাও গিয়ে তা গোটা মানুষটির ওপর রায় হয়ে দাঁড়ায়, এমন কয়েকটি শব্দে যা কিছুই দাঁড়িয়ে থাকতে দেয় না।"
          },
          {
            "en": "So keep the disagreement the size it actually is. State the point you differ on and stop there, in the words you would use if the other person were in the room. That is not softness, it is accuracy, and it is what 2:113 exposes as missing: the parties were reciting, so they had the material to be precise with and chose the sweeping line instead. Precision is a form of honesty, and it is cheaper than the alternative.",
            "bn": "কাজেই মতভেদটিকে তার আসল মাপেই রাখুন। কোন জায়গায় আপনি ভিন্নমত পোষণ করেন তা বলুন এবং সেখানেই থামুন, আর এমন ভাষায় বলুন যেমনটা বলতেন মানুষটি ঘরে উপস্থিত থাকলে। এটি নরম হওয়া নয়, এটি নির্ভুল হওয়া; আর 2:113 ঠিক এই জিনিসটির অভাবই খুলে দেখায়। দুই পক্ষই তো পড়ছিল, অর্থাৎ নিখুঁত হওয়ার উপকরণ তাদের হাতেই ছিল, তবু তারা বেছে নিল ঢালাও কথাটি। নিখুঁত হওয়া এক ধরনের সততা, আর তা বিকল্পটির চেয়ে সস্তা।"
          },
          {
            "en": "The second verse turns this into a matter of keys and doors. Ask whether anyone has been made less welcome by you in a place of worship: a person whose dress or accent or reputation draws looks, a woman with children, a newcomer who prays differently from the rest of the row. Ibn Kathir's gloss is the standard to be measured against, because on it barring the worshipper is already the ruin the verse condemns, whatever the state of the building.",
            "bn": "দ্বিতীয় আয়াত বিষয়টিকে নিয়ে আসে চাবি আর দরজার প্রশ্নে। জিজ্ঞেস করুন, ইবাদতের জায়গায় আপনার কারণে কারও আসা কি কঠিন হয়েছে: যাঁর পোশাক, উচ্চারণ বা পরিচিতি দেখে লোকে তাকায়, বাচ্চা কোলে কোনো নারী, কিংবা নতুন কেউ যিনি কাতারের বাকিদের চেয়ে একটু আলাদাভাবে নামাজ পড়েন। ইবনে কাসীরের ব্যাখ্যাটিই এখানে মাপকাঠি, কারণ সেই ব্যাখ্যা অনুযায়ী ইবাদতকারীকে আটকানোটাই আয়াতের নিন্দিত সেই ধ্বংস, ভবনের অবস্থা যেমনই হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Penalties, One Request",
          "bn": "দুই শাস্তি, এক আবেদন"
        },
        "p": [
          {
            "en": "The Sunnah supplication is the one to say first, whole and in its own plural wording, as Musnad Ahmad has it from Busr ibn Artah (RA) and Ibn Kathir grades it hasan: Allahumma ahsin 'aqibatana fi'l-umuri kulliha wa ajirna min khizyi'd-dunya wa 'adhabi'l-akhirah. O Allah, make our end good in all our affairs, and grant us refuge from disgrace in this world and the punishment of the Hereafter. Notice that it asks for a community and not for one man, which is the right posture after two verses about parties tearing at each other.",
            "bn": "আগে বলার মতো দু'আটি সুন্নাহর, আর তা বলতে হয় পুরোটা, তার নিজের বহুবচনেই। মুসনাদে আহমাদে বুসর ইবনে আরতাআ (রাঃ) থেকে এটি এসেছে, আর ইবনে কাসীর একে হাসান বলেছেন: 'আল্লাহুম্মা আহসিন আকিবাতানা ফিল উমূরি কুল্লিহা, ওয়া আজিরনা মিন খিযয়িদ দুনইয়া ওয়া আযাবিল আখিরাহ'। হে আল্লাহ, আমাদের সব কাজের পরিণতি ভালো করে দিন, আর আমাদের আশ্রয় দিন দুনিয়ার লাঞ্ছনা ও আখিরাতের শাস্তি থেকে। লক্ষ করুন, দু'আটি চাইছে গোটা জামাতের জন্য, একজনের জন্য নয়। দুই পক্ষের কামড়াকামড়ি নিয়ে বলা দুটি আয়াতের পর এটাই ঠিক ভঙ্গি।"
          },
          {
            "en": "Beside it, and clearly not from any narration, you can say a supplication composed out of these two verses' own vocabulary: O Allah, You will judge between Your servants on the Day of Resurrection concerning what they differed in, so do not let me pass that judgement myself; keep my tongue from erasing what You have not erased; and let no servant of Yours find Your house harder to enter because of me. Say it after prayer on a day when you have argued with someone, and notice which clause is hardest to say honestly. Usually it is the one about the door.",
            "bn": "এর পাশে আরেকটি দু'আ পড়া যায়, যা কোনো বর্ণনা থেকে নেওয়া নয়, আয়াত দুটির নিজস্ব শব্দ দিয়েই গড়া, আর সেভাবেই তা পেশ করা হচ্ছে: হে আল্লাহ, আপনার বান্দারা যে বিষয়ে মতভেদ করেছে, কিয়ামতের দিন আপনিই তার ফয়সালা করবেন; আমাকে সেই ফয়সালা নিজে দিয়ে দিতে দেবেন না। আপনি যা মুছে দেননি, আমার জিহ্বা যেন তা মুছে না দেয়। আমার কারণে আপনার কোনো বান্দার জন্য আপনার ঘরে ঢোকা যেন কঠিন না হয়। যেদিন কারও সঙ্গে তর্ক হয়েছে, সেদিন নামাজের পর এটি পড়ুন, আর লক্ষ করুন কোন অংশটি সৎভাবে বলা সবচেয়ে কঠিন লাগে। সাধারণত সেটি দরজার কথাটিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Did I Leave Them Anything",
          "bn": "তাদের কি কিছু রেখেছি"
        },
        "p": [
          {
            "en": "When I last described a group of Muslims I disagree with, did my sentence leave them anything at all? If someone repeated my words back to me about my own people, would I call it fair? Both parties in this verse were reciting Scripture while they spoke. What am I reciting, and does it reach the way I talk about other people by the afternoon?",
            "bn": "যাদের সঙ্গে আমি একমত নই, শেষবার সেই মুসলিমদের বর্ণনা দেওয়ার সময় আমার বাক্যটি কি তাদের কিছু অবশিষ্ট রেখেছিল? আমার নিজের লোকদের সম্পর্কে কেউ আমার কথাগুলোই ফিরিয়ে বললে আমি কি তাকে ইনসাফ বলতাম? এই আয়াতে দুই পক্ষই কথা বলার সময় কিতাব পড়ছিল। আমি কী পড়ছি, আর তা কি বিকেলের মধ্যে অন্য মানুষ সম্পর্কে আমার কথাবার্তা পর্যন্ত পৌঁছায়?"
          },
          {
            "en": "Is there anyone who has stopped coming to a gathering or a masjid I am part of, and do I know why? If Allah has kept the final verdict for the Day of Resurrection, what am I gaining by issuing mine early? And what would it cost me, this week, to say plainly to one person that I differ with them on one point and no more than that?",
            "bn": "আমি যে মজলিস বা মসজিদের সঙ্গে যুক্ত, সেখানে আসা কি কেউ বন্ধ করে দিয়েছেন, আর কেন তা কি আমি জানি? আল্লাহ যদি চূড়ান্ত রায়টি কিয়ামতের দিনের জন্য রেখে দেন, তবে আগেভাগে নিজের রায় দিয়ে আমার লাভটা কী? আর এই সপ্তাহে একজন মানুষকে সোজাসুজি এটুকু বলতে আমার কী খরচ হবে: একটি বিষয়ে আপনার সঙ্গে আমার দ্বিমত আছে, এর বেশি কিছু নয়?"
          }
        ]
      }
    ]
  },
  "2:125-126": {
    "sections": [
      {
        "h": {
          "en": "One House, Two Voices",
          "bn": "এক ঘর, দুই কণ্ঠ"
        },
        "p": [
          {
            "en": "Just before these verses, 2:124 has Ibrahim (AS) tried by his Lord with words, fulfilling them, made a leader for the people, and told when he asks about his descendants that the covenant does not include the wrongdoers. That answer is still in the air when our two verses begin. The first speaks from Allah's side about the House and its keeping; the second is Ibrahim (AS) himself, asking for the city.",
            "bn": "এই আয়াতগুলোর ঠিক আগে 2:124 আয়াতে ইবরাহীম (আঃ)-কে তাঁর প্রতিপালক কয়েকটি বিষয়ে পরীক্ষা করেন, তিনি তা পূর্ণ করেন, তাঁকে মানুষের নেতা করা হয়, আর বংশধরদের কথা জিজ্ঞেস করলে জবাব আসে যে অঙ্গীকারে জালিমরা শামিল নয়। আমাদের দুই আয়াত যখন শুরু হচ্ছে, সেই জবাবটি তখনো বাতাসে ভাসছে। প্রথম আয়াত আল্লাহর দিক থেকে বলে ঘরটির কথা আর তা রক্ষার কথা; দ্বিতীয়টি ইবরাহীম (আঃ) নিজেই, শহরটির জন্য চাইছেন।"
          },
          {
            "en": "After them the scene moves to the building itself. 2:127 shows Ibrahim (AS) and Isma'il (AS) raising the foundations with a prayer that runs through 2:129, and that prayer is a separate episode from the supplication in our second verse. Al-Baqarah is Madinan, so a community that this same surah will later turn towards that House is first being walked back through its history.",
            "bn": "এরপর দৃশ্য সরে যায় নির্মাণকাজের দিকেই। 2:127 আয়াতে ইবরাহীম (আঃ) ও ইসমাঈল (আঃ) ভিত্তি তুলছেন, সঙ্গে এমন এক দু'আ যা 2:129 পর্যন্ত চলে; আর সেই দু'আটি আমাদের দ্বিতীয় আয়াতের মিনতি থেকে আলাদা ঘটনা। সূরা আল-বাকারা মাদানী। এই সূরাই পরে যে জামাতকে সেই ঘরের দিকে ফেরাবে, তাদেরকেই আগে ঘরটির ইতিহাসের মধ্য দিয়ে হাঁটিয়ে নেওয়া হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Place You Come Back To",
          "bn": "যে জায়গায় ফিরে আসা হয়"
        },
        "p": [
          {
            "en": "The House is called a mathabah, from the root th-w-b, which carries the sense of returning. The app renders it a place of return in English and a gathering point in Bengali, and both catch part of it. Al-Awfi reports Ibn Abbas (RA) drawing the meaning out plainly: people do not stay in it, they visit it and go home and then come to it again. So the word does not describe a destination reached once. It describes something a life keeps orbiting, and the Arabic form suggests the place of the returning rather than the act.",
            "bn": "ঘরটিকে বলা হয়েছে 'মাসাবা'। শব্দটির মূল সা-ওয়াও-বা, যার ভেতরে আছে ফিরে আসার ভাব। অ্যাপের ইংরেজি অনুবাদে শব্দটি হয়েছে 'ফিরে আসার জায়গা', বাংলায় 'মিলনকেন্দ্র'; দুটিই অর্থের একেকটি দিক ধরে। আল-আওফী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, তিনি অর্থটি সোজা করে খুলে বলেছেন: মানুষ এতে থেকে যায় না, তারা আসে, ঘরে ফেরে, তারপর আবার আসে। অর্থাৎ শব্দটি একবার পৌঁছে যাওয়ার মতো কোনো গন্তব্য বোঝায় না। বোঝায় এমন কিছু, যাকে ঘিরে গোটা জীবন ঘুরতে থাকে। আর আরবি গড়নটি ফিরে আসার কাজটির চেয়ে ফিরে আসার জায়গাটিরই বেশি ইঙ্গিত দেয়।"
          },
          {
            "en": "Beside it stands amn, security. Abu al-Aliyah glossed it against the background everyone in that century knew: raiding and seizure were normal, and the people around the Sacred Precinct were not taken. The second verse then repeats the request in the words of Ibrahim (AS), and the wording differs from 14:35 in one detail. Here he asks for hadha baladan, a city, indefinite; there for hadha al-balad, this city, definite.",
            "bn": "এর পাশেই দাঁড়িয়ে আছে 'আমন', অর্থাৎ নিরাপত্তা। আবুল আলিয়া এর ব্যাখ্যা দেন সেই যুগের চেনা পটভূমিতে: হানা দেওয়া আর ধরে নিয়ে যাওয়া ছিল স্বাভাবিক, অথচ হারামের চারপাশের মানুষকে কেউ ধরে নিত না। এরপর দ্বিতীয় আয়াতে ইবরাহীম (আঃ)-এর নিজের ভাষায় আবেদনটি ফিরে আসে, আর 14:35 আয়াতের সঙ্গে তার একটি জায়গায় পার্থক্য। এখানে তিনি চান 'হাযা বালাদান', অর্থাৎ একটি শহর, অনির্দিষ্ট; সেখানে চান 'হাযাল বালাদ', অর্থাৎ এই শহর, নির্দিষ্ট।"
          },
          {
            "en": "Ibn Kathir reads that difference as two occasions rather than one. The indefinite belongs to a time when there was as yet no settled city to point at, before the House was raised; the definite belongs to a later prayer, after the House stood and people lived around it. Then the first verse gives its own instruction in a single word: take from the standing place of Ibrahim a musalla, a place of prayer, which turns a stone left over from building work into a fixture of worship.",
            "bn": "ইবনে কাসীর এই পার্থক্যকে পড়েন দুটি আলাদা উপলক্ষ হিসেবে, এক উপলক্ষ নয়। অনির্দিষ্ট রূপটি এমন সময়ের, যখন দেখিয়ে দেওয়ার মতো বসতিই গড়ে ওঠেনি, ঘর তোলার আগে; আর নির্দিষ্ট রূপটি পরের কোনো দু'আর, যখন ঘর দাঁড়িয়ে গেছে আর তার চারপাশে মানুষ বসতি করেছে। এরপর প্রথম আয়াত নিজের নির্দেশটি সেরে ফেলে মাত্র এক শব্দে: ইবরাহীমের দাঁড়ানোর জায়গা থেকে 'মুসাল্লা' গ্রহণ করো, অর্থাৎ নামাজের জায়গা। এতে নির্মাণকাজের পড়ে থাকা পাথরটাই হয়ে যায় ইবাদতের স্থায়ী চিহ্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Stone and Its Place",
          "bn": "পাথরটি আর তার জায়গা"
        },
        "p": [
          {
            "en": "On what the Maqam is, Ibn Kathir gives the reading the tafsir mostly settles on, reporting it from Sa'id ibn Jubayr by way of Sufyan ath-Thawri: the stone Ibrahim (AS) stood upon as the walls of the House rose, with Isma'il (AS) handing him the stones, moved along each side as the building went round. A second view, as-Suddi's, makes it the stone that Isma'il's wife put under Ibrahim's feet when she washed his head; ar-Razi reports the same from al-Hasan al-Basri, Qatadah and ar-Rabi ibn Anas. Al-Qurtubi mentions it but does not consider it authentic, although others gave it preference.",
            "bn": "মাকাম কী, সে বিষয়ে ইবনে কাসীর দেন সেই পাঠটি, তাফসীর সাধারণত যেখানে এসে থামে; তিনি তা বর্ণনা করেন সুফিয়ান আস-সাওরীর সূত্রে সাঈদ ইবনে জুবায়ের থেকে: ঘরের দেয়াল ওঠার সময় ইবরাহীম (আঃ) যে পাথরের ওপর দাঁড়াতেন, আর ইসমাঈল (আঃ) তাঁকে পাথর এগিয়ে দিতেন; নির্মাণ যত পাশ ঘুরত, পাথরটিও তত সরত। দ্বিতীয় মতটি আস-সুদ্দীর: ইবরাহীমের মাথা ধুয়ে দেওয়ার সময় ইসমাঈলের স্ত্রী তাঁর পায়ের নিচে যে পাথরটি রেখেছিলেন, সেটিই মাকাম। আর-রাযীও একই মত বর্ণনা করেন আল-হাসান আল-বসরী, কাতাদা ও আর-রাবী ইবনে আনাস থেকে। আল-কুরতুবী মতটির উল্লেখ করেন, তবে সহীহ মনে করেন না, যদিও অন্যরা তাকেই প্রাধান্য দিয়েছেন।"
          },
          {
            "en": "Where the Maqam stood is a separate question, and here the reports are firm. In the time of the Messenger of Allah ﷺ and of Abu Bakr (RA) it stood right against the wall of the Ka'bah. Umar ibn al-Khattab (RA) moved it back to where it stands now. Abd ar-Razzaq transmits this from Ata' and from Mujahid, who says Umar (RA) was the first to move it, and al-Bayhaqi records it from Aishah (RA) by a chain Ibn Kathir calls authentic.",
            "bn": "মাকাম কোথায় ছিল, সেটি আলাদা প্রশ্ন, আর এখানে বর্ণনাগুলো দৃঢ়। আল্লাহর রাসূল ﷺ ও আবু বকর (রাঃ)-এর সময়ে তা ছিল কাবার দেয়াল ঘেঁষেই। উমার ইবনুল খাত্তাব (রাঃ) তা সরিয়ে নিয়ে যান এখন যেখানে আছে সেখানে। আবদুর রাযযাক এটি বর্ণনা করেন আতা থেকে এবং মুজাহিদ থেকে, যিনি বলেন উমার (রাঃ)-ই প্রথম তা সরিয়েছেন; আর আল-বায়হাকী তা বর্ণনা করেন আয়েশা (রাঃ) থেকে এমন সনদে, যাকে ইবনে কাসীর সহীহ বলেছেন।"
          },
          {
            "en": "It is worth noticing what these reports do not say. None of them gives a reason for the move. They record the act, the mover and the fact that none of the Companions objected to it, and they stop there. Explanations are easy to supply and are often supplied, but they are not in the narrations, and a reader who wants to stay with what is transmitted should keep the gap open rather than fill it.",
            "bn": "এই বর্ণনাগুলো যা বলে না, সেদিকেও নজর দেওয়া দরকার। কোনোটিই সরানোর কারণ জানায় না। সেগুলো লিখে রাখে কাজটি, কে করেছেন, আর সাহাবীগণের কেউ আপত্তি করেননি এই তথ্যটুকু, তারপর থেমে যায়। ব্যাখ্যা জোগাড় করা সহজ এবং প্রায়ই জোগাড় করা হয়, কিন্তু ব্যাখ্যাটি বর্ণনায় নেই; আর যিনি বর্ণিত জিনিসের মধ্যেই থাকতে চান, তাঁর উচিত ফাঁকটি ভরাট না করে খোলা রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Voice Answers",
          "bn": "জবাবটি কার কণ্ঠে"
        },
        "p": [
          {
            "en": "In the second verse Ibrahim (AS) asks for two things, security for the city and provision from its fruits, and then he limits the second request himself: whoever of them believes in Allah and the Last Day. He had heard at 2:124 that the covenant does not reach the wrongdoers, and the restriction in his own mouth is a man taking that answer seriously and asking within it rather than around it.",
            "bn": "দ্বিতীয় আয়াতে ইবরাহীম (আঃ) দুটি জিনিস চান, শহরের নিরাপত্তা আর তার ফলমূল থেকে জীবিকা; এরপর দ্বিতীয় আবেদনটিতে তিনি নিজেই সীমা টানেন: তাদের মধ্যে যারা আল্লাহ ও শেষ দিনে ঈমান আনে। 2:124 আয়াতে তিনি শুনেছিলেন যে অঙ্গীকার জালিমদের পর্যন্ত পৌঁছায় না, আর নিজের মুখে টানা এই সীমাটুকু দেখায় এক মানুষ সেই জবাবটিকে গুরুত্বের সঙ্গে নিয়েছেন এবং তার ভেতরে থেকেই চাইছেন, তার চারপাশ দিয়ে নয়।"
          },
          {
            "en": "The reply is not his. Ubayy ibn Ka'b (RA) said the words about the disbeliever are Allah's own speech, and Mujahid and Ikrimah read them the same way. So the movement in this verse runs one direction only: the servant narrowed, and his Lord widened. Ibn Abbas (RA), in the report Ibn Abi Hatim gives, states it in as many words, that Ibrahim (AS) asked provision for the believers alone and was answered that provision goes to the disbeliever as well.",
            "bn": "জবাবটি তাঁর নয়। উবাই ইবনে কাব (রাঃ) বলেছেন, কাফির সম্পর্কে কথাগুলো আল্লাহর নিজের বাণী; মুজাহিদ ও ইকরিমাও একইভাবে পড়েন। কাজেই এই আয়াতে গতিটি চলে একটিমাত্র দিকে: বান্দা সংকীর্ণ করলেন, তাঁর প্রতিপালক চওড়া করলেন। ইবনে আবী হাতিমের দেওয়া বর্ণনায় ইবনে আব্বাস (রাঃ) কথাটি স্পষ্ট ভাষাতেই বলেন, ইবরাহীম (আঃ) কেবল ঈমানদারদের জন্য জীবিকা চেয়েছিলেন, আর জবাব এল যে জীবিকা কাফিরের কাছেও যায়।"
          },
          {
            "en": "But the widening has a term on it. The disbeliever is given enjoyment for a little, and then driven to the punishment of the Fire, and wretched is the destination. Ibn Abbas (RA) recited 17:20 at this point: to each We extend, to these and to those, from the gift of your Lord, and the gift of your Lord has never been restricted. Provision in this world is therefore not a verdict on anyone. It is a loan of time, and the verse names the day it comes due.",
            "bn": "তবে এই প্রসারণের ওপর একটি মেয়াদ বসানো আছে। কাফিরকে কিছুকাল ভোগ করতে দেওয়া হয়, তারপর তাকে জাহান্নামের শাস্তির দিকে নিয়ে যাওয়া হয়, আর কতই না নিকৃষ্ট সেই ঠিকানা। এই জায়গায় ইবনে আব্বাস (রাঃ) তিলাওয়াত করেন 17:20: আমি এদের আর ওদের সবাইকেই আপনার প্রতিপালকের দান থেকে সাহায্য করি, আর আপনার প্রতিপালকের দান কখনো বন্ধ হওয়ার নয়। কাজেই দুনিয়ার জীবিকা কারও ব্যাপারে কোনো রায় নয়। ওটা সময়ের ধার, আর আয়াত বলে দেয় শোধের দিনটি কবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Umar's Wish, Then Revelation",
          "bn": "উমারের ইচ্ছা, তারপর ওহি"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari 402 records from Anas (RA) that Umar ibn al-Khattab (RA) said he agreed with his Lord in three matters. The first he mentions is this: he said to the Messenger of Allah ﷺ that he wished he would take the standing place of Ibrahim as a place of prayer, and the verse came down. A wish spoken by a Companion, and then the command in the Book, is a striking thing to find behind a line every pilgrim now obeys.",
            "bn": "সহীহ বুখারীর ৪০২ নম্বর হাদিসে আনাস (রাঃ) থেকে এসেছে, উমার ইবনুল খাত্তাব (রাঃ) বলেছেন, তিনটি বিষয়ে তাঁর মত তাঁর প্রতিপালকের সিদ্ধান্তের সঙ্গে মিলে গেছে। তার প্রথমটি এটিই: তিনি আল্লাহর রাসূল ﷺ-কে বলেছিলেন, আমার ইচ্ছা আপনি ইবরাহীমের দাঁড়ানোর জায়গাটিকে নামাজের জায়গা হিসেবে গ্রহণ করেন; এরপরই আয়াতটি নামে। একজন সাহাবীর মুখের ইচ্ছা, তারপর কিতাবে নেমে আসা হুকুম—আজ প্রত্যেক হাজি যে নির্দেশ মেনে চলেন, তার পেছনে এই ঘটনাটি পাওয়া চমকে দেওয়ার মতো।"
          },
          {
            "en": "The practice itself is in Sahih Muslim 1218, the long narration of Jabir (RA) describing the hajj of the Prophet ﷺ. After the sevenfold circuit he went to the standing place of Ibrahim, with it between himself and the House, and prayed two rak'ahs. Al-Bukhari records the same two rak'ahs behind the Maqam from Ibn Umar (RA), so the act is established from more than one direction.",
            "bn": "কাজটি নিজে আছে সহীহ মুসলিমের ১২১৮ নম্বরে, জাবির (রাঃ)-এর সেই দীর্ঘ বর্ণনায়, যেখানে তিনি নবী ﷺ-এর হজের বিবরণ দেন। সাতবার তাওয়াফ শেষে তিনি ইবরাহীমের দাঁড়ানোর জায়গায় যান, তাকে নিজের ও ঘরের মাঝখানে রেখে দুই রাকাত নামাজ পড়েন। ইমাম বুখারী মাকামের পেছনে এই দুই রাকাতের কথা ইবনে উমার (রাঃ) থেকেও বর্ণনা করেন, কাজেই কাজটি একাধিক দিক থেকেই প্রমাণিত।"
          },
          {
            "en": "The standing of those two rak'ahs is then a question of fiqh rather than of report. The madhahib differ over whether they are obligatory upon one who has made tawaf or a confirmed Sunnah, and the difference is old; each side reasons from the same texts, and a worshipper loses nothing by praying them carefully whichever view he follows. What no one disputes is where they belong and what they are for.",
            "bn": "এরপরের প্রশ্নটি আর বর্ণনার নয়, ফিকহের: এই দুই রাকাতের মর্যাদা কী। তাওয়াফকারীর ওপর এ নামাজ ওয়াজিব, নাকি সুন্নাতে মুয়াক্কাদা, তা নিয়ে মাযহাবগুলোর মধ্যে মতভেদ আছে, আর মতভেদটি পুরোনো। দুই পক্ষই একই দলিল থেকে যুক্তি সাজান, আর যে মতই কেউ অনুসরণ করুন, যত্ন করে দুই রাকাত পড়লে তাঁর কিছু হারায় না। যা নিয়ে কারও দ্বিমত নেই তা হলো এই নামাজ কোথায় পড়তে হয় আর কেন পড়তে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The House in Other Surahs",
          "bn": "অন্য সূরায় সেই ঘর"
        },
        "p": [
          {
            "en": "22:26 is the closest sister, and almost the same sentence: We designated for Ibrahim the site of the House, saying associate nothing with Me, and purify My House for those who perform tawaf and those who stand and those who bow and prostrate. Put beside our verse it shows one charge given twice in the Quran, in nearly identical words, which is the Book's way of marking something as settled rather than incidental.",
            "bn": "22:26 সবচেয়ে কাছের সহোদর আয়াত, আর বাক্যটিও প্রায় একই: আমি ইবরাহীমের জন্য ঘরের জায়গা নির্দিষ্ট করে দিয়েছিলাম এই বলে যে আমার সঙ্গে কিছু শরীক করো না, আর আমার ঘরকে পবিত্র রাখো তাওয়াফকারী, দণ্ডায়মান, রুকু ও সিজদাকারীদের জন্য। আমাদের আয়াতের পাশে রাখলে দেখা যায়, একই দায়িত্ব কুরআনে দুইবার এসেছে, প্রায় একই ভাষায়; আর এভাবেই কিতাব বুঝিয়ে দেয় যে বিষয়টি আকস্মিক নয়, স্থির।"
          },
          {
            "en": "3:97 names the standing place of Ibrahim among the clear signs in the House and says whoever enters it is safe, which is our first verse restated as a fact. 29:67 asks whether they have not seen that a safe sanctuary was made for them while people are snatched away all around, and 14:37 is Ibrahim (AS) praying again in the same vocabulary, that hearts incline towards his descendants in that valley and that they be provided from the fruits. 17:20 is the verse Ibn Abbas (RA) reached for on the answer.",
            "bn": "3:97 ঘরের ভেতরের সুস্পষ্ট নিদর্শনগুলোর মধ্যে ইবরাহীমের দাঁড়ানোর জায়গার নাম নেয় এবং বলে, যে এতে প্রবেশ করে সে নিরাপদ; এ যেন আমাদের প্রথম আয়াতটিই ঘটনা হিসেবে আবার বলা। 29:67 জিজ্ঞেস করে, তারা কি দেখেনি যে তাদের জন্য নিরাপদ হারাম বানানো হয়েছে, অথচ চারপাশ থেকে মানুষ ছিনিয়ে নেওয়া হচ্ছে। আর 14:37 আয়াতে ইবরাহীম (আঃ) সেই একই ভাষায় আবার দু'আ করছেন, যেন মানুষের হৃদয় সেই উপত্যকার বংশধরদের দিকে ঝোঁকে আর তাদের ফলমূল থেকে জীবিকা দেওয়া হয়। জবাবের প্রসঙ্গে ইবনে আব্বাস (রাঃ) যে আয়াতটি টেনেছিলেন তা 17:20।"
          }
        ]
      },
      {
        "h": {
          "en": "A Return You Choose",
          "bn": "ফিরে আসা যা আপনি বেছে নেন"
        },
        "p": [
          {
            "en": "Most readers will not stand at the Maqam this year, but the word mathabah is portable. Something in every week is the place you return to, and the question is whether you chose it. Fix one appointment that you come back to the way the verse describes, a fixed page of the Quran, one prayer prayed in the masjid, one night of the week kept clear, and let the rest of the timetable arrange itself around that return rather than the other way about.",
            "bn": "বেশির ভাগ পাঠক এ বছর মাকামের সামনে দাঁড়াবেন না, কিন্তু 'মাসাবা' শব্দটি সঙ্গে নিয়ে চলা যায়। প্রতিটি সপ্তাহেই এমন কিছু থাকে যেখানে আপনি ফিরে যান, আর প্রশ্ন হলো সেটি আপনি বেছে নিয়েছেন কি না। আয়াত যেভাবে বলছে সেভাবে ফিরে আসার মতো সময় ঠিক করে নিন: কুরআনের নির্দিষ্ট এক পৃষ্ঠা, মসজিদে পড়া কোনো এক ওয়াক্ত, সপ্তাহের কোনো রাত খালি রাখা। তারপর বাকি রুটিনটাকে সেই ফিরে আসার চারপাশে সাজতে দিন, উল্টোটা নয়।"
          },
          {
            "en": "The charge to purify the House was given for the sake of the people who would worship in it, not for the look of the place. That makes the state of your own masjid, and of the corner of the house where you pray, a duty owed to whoever comes next. Sweeping a prayer room, mending the shoe rack, keeping the entrance clear for someone slow on their feet: these are small acts, and this verse is where they get their weight.",
            "bn": "ঘরটিকে পবিত্র রাখার দায়িত্ব দেওয়া হয়েছিল সেখানে যারা ইবাদত করবে তাদের জন্য, জায়গাটির চেহারার জন্য নয়। এতে আপনার নিজের মসজিদের অবস্থা, আর ঘরের যে কোণে আপনি নামাজ পড়েন তার অবস্থা, পরের যিনি আসবেন তাঁর প্রতি আপনার দায় হয়ে দাঁড়ায়। নামাজঘর ঝাড়ু দেওয়া, জুতোর তাক সারানো, ধীরে হাঁটা কারও জন্য প্রবেশপথ খালি রাখা: কাজগুলো ছোট, আর এই আয়াতেই সেগুলো নিজেদের ওজন পায়।"
          },
          {
            "en": "The second verse corrects a quiet piece of arithmetic most people carry. If provision reached the disbeliever too, then a full plate is not a certificate and an empty one is not a demotion. Stop reading your bank balance as a report card on your faith, and stop reading anyone else's that way either. Ask for what Ibrahim (AS) asked for, in his order: security first, then sustenance, and both of them from the One who gives.",
            "bn": "দ্বিতীয় আয়াত ঠিক করে দেয় চুপচাপ বয়ে বেড়ানো এক হিসাব, যা বেশির ভাগ মানুষের মধ্যেই আছে। জীবিকা যদি কাফিরের কাছেও পৌঁছে থাকে, তবে ভরা থালা কোনো সনদ নয়, আর খালি থালাও পদাবনতি নয়। নিজের ব্যাংক হিসাবকে ঈমানের নম্বরপত্র হিসেবে পড়া বন্ধ করুন, আর অন্য কারওটিকেও সেভাবে পড়বেন না। ইবরাহীম (আঃ) যা চেয়েছিলেন তা-ই চান, তাঁরই ক্রমে: আগে নিরাপত্তা, তারপর জীবিকা, আর দুটোই সেই সত্তার কাছে যিনি দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Praying for Your Own City",
          "bn": "নিজের শহরের জন্য দু'আ"
        },
        "p": [
          {
            "en": "The second verse is already a supplication, and it can be said as it stands, with your own city in place of his: My Lord, make this a secure city, and provide its people with fruits, whoever of them believes in Allah and the Last Day. Said for a neighbourhood rather than for a household, it is a prayer most people have never made, and it changes how you look at the street on the way to work.",
            "bn": "দ্বিতীয় আয়াতটি নিজেই একটি দু'আ, আর তাঁর শহরের জায়গায় নিজের শহর বসিয়ে তা যেমন আছে তেমনই পড়া যায়: হে আমার প্রতিপালক, এই শহরকে নিরাপদ করুন, আর এর অধিবাসীদের মধ্যে যারা আল্লাহ ও শেষ দিনে ঈমান আনে তাদের ফলমূল থেকে জীবিকা দিন। এক ঘরের জন্য নয়, গোটা পাড়ার জন্য পড়লে এটি এমন এক দু'আ, যা বেশির ভাগ মানুষ কখনো করেননি; আর কাজে যাওয়ার পথে রাস্তাটিকে দেখার ধরনও এতে বদলে যায়।"
          },
          {
            "en": "Notice how it teaches you to ask. He kept the request inside what he had been told, and he was answered more widely than he asked. That is the safe posture for a servant: ask within what you know of your Lord's guidance, and leave the enlarging of it to Him. He has never needed our help to be generous, and He has not asked us to guess where His generosity ends.",
            "bn": "লক্ষ করুন, আয়াতটি আপনাকে কীভাবে চাইতে শেখায়। তাঁকে যা বলা হয়েছিল, আবেদনটি তিনি তার ভেতরেই রাখলেন; আর জবাব পেলেন যা চেয়েছিলেন তার চেয়ে চওড়া। বান্দার জন্য নিরাপদ ভঙ্গিটি এটাই: নিজের প্রতিপালকের হিদায়াত সম্পর্কে যতটুকু জানেন তার ভেতরে থেকেই চান, আর তা বাড়ানোর কাজটি তাঁর ওপরেই ছেড়ে দিন। উদার হতে তাঁর কখনো আমাদের সাহায্য লাগেনি, আর তাঁর দান কোথায় গিয়ে শেষ হয় তা অনুমান করতেও তিনি আমাদের বলেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "What Do I Return To",
          "bn": "আমি কীসের কাছে ফিরি"
        },
        "p": [
          {
            "en": "What is the thing I actually return to, week after week, and did I choose it or did it choose me? Ibrahim (AS) asked for security before he asked for fruit. If I wrote out my last ten du'as in order, what would the order say about me? And is there a name I have quietly kept out of my prayers?",
            "bn": "সপ্তাহের পর সপ্তাহ আমি আসলে কীসের কাছে ফিরে যাই, আর সেটি কি আমি বেছে নিয়েছি, নাকি সেটিই আমাকে বেছে নিয়েছে? ইবরাহীম (আঃ) ফলমূল চাওয়ার আগে চেয়েছিলেন নিরাপত্তা। আমার শেষ দশটি দু'আ ক্রম অনুযায়ী লিখে ফেললে সেই ক্রম আমার সম্পর্কে কী বলত? আর এমন কোনো নাম কি আছে, যা আমি চুপচাপ নিজের দু'আর বাইরে রেখে দিয়েছি?"
          },
          {
            "en": "The reports say Umar (RA) moved the stone and give no reason for it. How comfortable am I with not knowing why, and how often do I invent a reason so a story will close? And if worldly provision reaches everyone alike, what have I been quietly concluding about people who have more than me, or less?",
            "bn": "বর্ণনাগুলো বলে উমার (রাঃ) পাথরটি সরিয়েছেন, আর কারণ কিছু বলে না। কারণ না জানা নিয়ে আমি কতটা স্বস্তিতে থাকতে পারি, আর গল্পটা যেন গুছিয়ে শেষ হয় সেজন্য কতবার আমি নিজেই কারণ বানিয়ে নিই? আর দুনিয়ার জীবিকা যদি সবার কাছেই সমানভাবে পৌঁছায়, তবে আমার চেয়ে যাদের বেশি আছে বা কম আছে তাদের সম্পর্কে আমি চুপচাপ কী সিদ্ধান্ত টেনে রেখেছি?"
          }
        ]
      }
    ]
  },
  "2:128": {
    "sections": [
      {
        "h": {
          "en": "One Supplication, Three Verses",
          "bn": "একটি দু'আ, তিনটি আয়াত"
        },
        "p": [
          {
            "en": "The prayer does not begin here. 2:127 opens with Ibrahim (AS) raising the foundations of the House together with Isma'il (AS), and their words start there: our Lord, accept from us; indeed You are the Hearing, the Knowing. Our verse continues with rabbana wa-j'alna — our Lord, and make us — the wa tying it to what came before. 2:129 continues again in the same way with a third request.",
            "bn": "দু'আটি এখান থেকে শুরু হয়নি। ২:১২৭ শুরু হয় ইবরাহীম (আঃ) ও ইসমাঈল (আঃ)-এর কাবাগৃহের ভিত্তি তোলার দৃশ্য দিয়ে, আর তাঁদের কথা সেখানেই শুরু: হে আমাদের প্রতিপালক, আমাদের পক্ষ থেকে কবুল করুন; নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ। আমাদের আয়াতটি এগিয়ে চলে 'রাব্বানা ওয়াজ'আলনা' দিয়ে, অর্থাৎ হে আমাদের প্রতিপালক, আর আমাদের বানান। শুরুর 'ওয়া' শব্দটি একে আগের কথার সঙ্গে বেঁধে দেয়। ২:১২৯ আবার একইভাবে তৃতীয় একটি আবেদন নিয়ে এগোয়।"
          },
          {
            "en": "The supplication ends there. 2:130 leaves their speech entirely and comments on them in the third person: and who would be averse to the religion of Ibrahim except one who makes a fool of himself. So the boundary is 2:127 to 2:129, three verses of one prayer, and this verse is its middle. Reading it alone loses both the occasion — two men with their hands on the stones — and the request that completes it.",
            "bn": "দু'আটি সেখানেই শেষ। 2:130 তাঁদের কথা সম্পূর্ণ ছেড়ে দিয়ে বাইরে থেকে তাঁদের সম্পর্কে মন্তব্য করে: সেই নির্বোধ ছাড়া আর কে ইবরাহীমের দ্বীন থেকে মুখ ফিরিয়ে নেবে। অর্থাৎ সীমা হলো 2:127 থেকে 2:129 — একটি দু'আর তিনটি আয়াত, আর আমাদের আয়াতটি তার মাঝখানে। একে একা পড়লে দুটোই হারায়: প্রেক্ষাপট, অর্থাৎ পাথরের ওপর হাত রাখা দুজন মানুষ; এবং সেই আবেদন, যা দু'আটিকে সম্পূর্ণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Make Us Two Submitters",
          "bn": "আমাদের দুজনকে অনুগত করুন"
        },
        "p": [
          {
            "en": "The first request is in the dual. Muslimayni laka — two submitters to You — because two people are speaking, a father and a son. What they ask for is the thing an onlooker would assume they already had. They are building the House of Allah on His instruction, and one of the first things out of their mouths is a request to be made submitters, preceded in the verse before by a plea that the work be accepted at all.",
            "bn": "প্রথম আবেদনটা দ্বিবচনে: মুসলিমাইনি লাকা, আপনার অনুগত দুজন। কারণ কথা বলছেন দুজন, এক পিতা আর এক পুত্র। তাঁরা চাইছেন ঠিক সেই জিনিস, যা বাইরে থেকে যে কেউ দেখে ভাবত তাঁদের তো আছেই। আল্লাহর হুকুমেই তাঁরা তাঁর ঘর বানাচ্ছেন, অথচ মুখ খুলে প্রথম দিকের কথাগুলোর একটাই হলো: আমাদের অনুগত বানিয়ে দিন। আর তার আগের আয়াতে তাঁরা মিনতি করেছেন, কাজটা যেন আদৌ কবুল হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Requests, Then a Reason",
          "bn": "তিনটি আবেদন, তারপর একটি কারণ"
        },
        "p": [
          {
            "en": "Count the imperatives in the verse and there are three: make us, show us, and turn to us. Everything else is either the content of a request or the ground for one. The closing words — indeed You are the Accepting of repentance, the Merciful — are not a fourth petition; they are the reason the third one was worth making. The prayer names two divine attributes and asks for exactly what those two attributes give.",
            "bn": "আয়াতে হুকুমের ক্রিয়াগুলো গুনলে পাবেন তিনটি: আমাদের বানান, আমাদের দেখান, আর আমাদের প্রতি ফিরুন। বাকি সব কথা হয় কোনো আবেদনের বিষয়, নয়তো আবেদনের ভিত্তি। শেষের কথাগুলো, নিশ্চয়ই আপনি তাওবা কবুলকারী, পরম দয়ালু, চতুর্থ কোনো আবেদন নয়। এগুলোই সেই কারণ, যার ভরসায় তৃতীয় আবেদনটা করা চলে। দু'আটি আল্লাহর দুটি গুণের নাম নেয়, আর চায় ঠিক তা-ই, যা এই দুই গুণ দিয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "From Our Offspring",
          "bn": "আমাদের বংশধরদের থেকে"
        },
        "p": [
          {
            "en": "The request for a nation is worded carefully: wa min dhurriyyatina ummatan muslimatan laka — and from our offspring, a nation submitting to You. The min is partitive. He does not ask that all his descendants be that nation, and he had already learned why. In 2:124, when Ibrahim (AS) was made a leader for the people and asked whether the covenant extended to his descendants, the answer was that it does not include the wrongdoers.",
            "bn": "জাতির জন্য আবেদনের শব্দগুলো খুব মেপে বাছা: ওয়া মিন যুররিয়্যাতিনা উম্মাতাম মুসলিমাতাল লাকা, আর আমাদের বংশধরদের মধ্য থেকে আপনার অনুগত এক জাতি। এখানে 'মিন' অংশ বোঝায়। তিনি চাননি যে তাঁর সব বংশধরই সেই জাতি হোক, আর কেন চাননি তা তিনি আগেই শিখেছিলেন। 2:124-এ ইবরাহীম (আঃ)-কে মানুষের নেতা বানানো হলে তিনি জিজ্ঞেস করেছিলেন, এই অঙ্গীকার কি তাঁর বংশধরদের পর্যন্তও যাবে। জবাব এসেছিল: জালিমরা এর মধ্যে পড়ে না।"
          },
          {
            "en": "So this is hope that has been to school. In 2:126 the same man, having heard the answer of 2:124, asked provision only for those of the city who believe, and Allah extended it even to the disbeliever, for a little while, before the punishment of the Fire. He had asked broadly once and learned the limit; he asked narrowly the second time and was answered more generously than he asked. By our verse he asks for a portion of his line rather than the whole of it.",
            "bn": "তাহলে এ হলো ঠেকে শেখা আশা। 2:124-এর জবাব শোনার পর এই মানুষটিই 2:126-এ জীবিকা চেয়েছিলেন শুধু শহরের ঈমানদারদের জন্য। আল্লাহ তা বাড়িয়ে দিলেন কাফেরের জন্যও: কিছুকাল ভোগ করতে দেবেন, তারপর জাহান্নামের শাস্তি। একবার তিনি সবার জন্য চেয়ে সীমাটা শিখেছিলেন। দ্বিতীয়বার চাইলেন মেপে, আর জবাব পেলেন চাওয়ার চেয়েও উদার। আমাদের আয়াতে এসে তিনি চাইছেন বংশের একটা অংশের জন্য, পুরো বংশের জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Show Us Our Rites",
          "bn": "আমাদের ইবাদতের নিয়ম দেখান"
        },
        "p": [
          {
            "en": "Arina manasikana — show us our rites. Manasik is the plural of mansak, and the commentators read it primarily of the rites of the hajj, and more widely of the ways of drawing near to Allah. The request is not for the desire to worship, which the two of them plainly had; it is for the instruction. Even a prophet building the Ka'bah does not deduce from his own sincerity how the worship at it is to be done.",
            "bn": "আরিনা মানাসিকানা: আমাদের ইবাদতের নিয়মগুলো দেখিয়ে দিন। মানাসিক শব্দটি 'মানসাক'-এর বহুবচন। মুফাসসিরগণ একে মূলত হজের বিধি-বিধান অর্থে বোঝেন, আর আরও বড় অর্থে আল্লাহর নৈকট্য পাওয়ার পথগুলো। তাঁরা ইবাদতের আগ্রহ চাইছেন না, সেটা তো দুজনেরই স্পষ্ট ছিল। তাঁরা চাইছেন শিক্ষা। কাবা গড়ছেন যে নবী, তিনিও নিজের আন্তরিকতা থেকে আন্দাজ করে নেন না, সেখানে ইবাদত কীভাবে করতে হবে।"
          },
          {
            "en": "That is a large principle inside a short clause, and it is still operating. Later, at 22:27, the proclamation of the hajj is commanded, and the rites Muslims perform around that House every year are the answer to a request made while its foundations were still going up. Worship in Islam is received rather than composed, and this verse is where one of the builders of the House asks to receive it.",
            "bn": "ছোট্ট এক বাক্যাংশে বড় একটা নীতি লুকিয়ে আছে, আর সেটা আজও চলছে। পরে 22:27-এ হজের ঘোষণা দেওয়ার হুকুম আসে। মুসলিমরা প্রতি বছর সেই ঘরের চারপাশে যে বিধিগুলো পালন করেন, সেগুলো আসলে একটা আবেদনের জবাব। আবেদনটা করা হয়েছিল তখন, যখন ঘরের ভিত তখনো গাঁথা চলছে। ইসলামে ইবাদত কেউ নিজে বানিয়ে নেয় না, আল্লাহর কাছ থেকে পায়। আর এই আয়াতেই ঘরের এক নির্মাতা সেটা পাওয়ার আবেদন জানাচ্ছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "And Turn to Us",
          "bn": "আর আমাদের প্রতি ফিরুন"
        },
        "p": [
          {
            "en": "The last request is the one that startles readers: wa tub 'alayna, and turn to us. Tawbah from the servant's side is a returning; from Allah's side, as the name at-Tawwab indicates, it is a turning towards the one who returns. Two people engaged in the most conspicuous act of obedience in their lives close the sentence by asking for that. Nothing in the verse names a particular sin; the request is simply treated as ordinary.",
            "bn": "শেষ আবেদনটাই পাঠককে চমকে দেয়: ওয়া তুব আলাইনা, আর আমাদের প্রতি ফিরুন। বান্দার দিক থেকে তাওবা মানে ফিরে আসা। আল্লাহর দিক থেকে, আত-তাওয়াব নামটি যেমন বোঝায়, তাওবা মানে যে ফিরে আসে তার দিকে ফিরে তাকানো। দুজন মানুষ জীবনের সবচেয়ে চোখে পড়ার মতো আনুগত্যের কাজটি করছেন, আর বাক্য শেষ করছেন ঠিক এই চাওয়া দিয়ে। আয়াতে কোনো নির্দিষ্ট গুনাহের নাম নেই। এই চাওয়াটাকে একেবারে সাধারণ ব্যাপার হিসেবেই রাখা হয়েছে।"
          },
          {
            "en": "The verse after theirs was answered in wording anyone can check. 2:129 asks for a messenger from among them who would recite Allah's verses, teach the Book and wisdom, and purify them. 3:164 and 62:2 describe what Allah actually did with the same three items, though not in the same order — reciting, purifying, then teaching. A prayer made at a foundation was answered across a gap the two of them did not live to see.",
            "bn": "তাঁদের পরের আয়াতের দু'আর জবাব কীভাবে এসেছে, যে কেউ শব্দ মিলিয়ে তা দেখে নিতে পারেন। 2:129-এ তাঁরা চেয়েছেন তাদেরই মধ্য থেকে এক রাসূল, যিনি আল্লাহর আয়াত পড়ে শোনাবেন, কিতাব ও হিকমাত শেখাবেন, আর তাদের পরিশুদ্ধ করবেন। আল্লাহ আসলে কী করেছেন, তা জানায় 3:164 ও 62:2। সেখানেও সেই তিনটি বিষয়, তবে ক্রম আলাদা: পড়ে শোনানো, পরিশুদ্ধ করা, তারপর শেখানো। ভিতের পাশে দাঁড়িয়ে করা দু'আর জবাব এল এত লম্বা ব্যবধানে, যা তাঁরা দুজন বেঁচে থেকে দেখে যাননি।"
          }
        ]
      }
    ]
  },
  "2:132-133": {
    "sections": [
      {
        "h": {
          "en": "Two Fathers, One Charge",
          "bn": "দুই পিতা, এক ওসিয়ত"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and these two verses close the narrative section about Ibrahim (AS). 2:130 has just said that only a man who makes a fool of himself turns away from his religion, and 2:131 records the moment: his Lord said to him, submit, and he answered that he had submitted to the Lord of the worlds. Our verse takes that single word and turns it into something handed on. Ibrahim charged his sons with it, and Ya'qub (AS) charged his with the same.",
            "bn": "সূরা বাকারা মাদানি সূরা, আর এই দুটি আয়াত ইবরাহীম (আঃ)-কে নিয়ে বর্ণনার অংশটি শেষ করে আনে। 2:130 আয়াত সবে বলেছে, নিজেকে নির্বোধ বানায় এমন লোক ছাড়া আর কেউ তাঁর দ্বীন থেকে মুখ ফেরায় না। 2:131 আয়াত মুহূর্তটা লিখে রাখে: তাঁর প্রতিপালক তাঁকে বললেন, আত্মসমর্পণ কর; তিনি বললেন, আমি সারা জগতের প্রতিপালকের কাছে আত্মসমর্পণ করলাম। আমাদের আয়াত সেই একটি কথাকেই তুলে নেয় আর বানিয়ে দেয় হাতে হাতে পৌঁছে দেওয়ার জিনিস। ইবরাহীম নিজের ছেলেদের সেই ওসিয়তই করলেন, ইয়াকুব (আঃ)-ও করলেন তাঁর ছেলেদের।"
          },
          {
            "en": "No occasion of revelation is reported for the pair. Their force lies in where they stand, not in an occasion. Madinah's People of the Book claimed Ibrahim and Ya'qub (AS) as their own, and a few verses later 2:140 puts that claim into words: do you say that Ibrahim, Isma'il, Ishaq, Ya'qub and the Descendants were Jews or Christians? 2:133 answers before the question is asked, and it answers with a question of its own. Were you present at that bedside? What was said there is on record, and it names no community that came later.",
            "bn": "এই জোড়ার কোনো শানে নুযুল বর্ণিত নেই। এদের জোর কোনো ঘটনায় নয়, এদের অবস্থানে। মদিনার আহলে কিতাব ইবরাহীম আর ইয়াকুব (আঃ)-কে নিজেদের বলে দাবি করত, আর কয়েক আয়াত পরেই 2:140 আয়াত সেই দাবিটাকে কথায় ধরে ফেলে: তোমরা কি বলছ ইবরাহীম, ইসমাঈল, ইসহাক, ইয়াকুব আর তাঁদের বংশধরেরা ইহুদি বা নাসারা ছিলেন? 2:133 আয়াত প্রশ্ন ওঠার আগেই জবাব দেয়, আর জবাব দেয় নিজেই একটা প্রশ্ন করে। সেই শয্যার পাশে তোমরা কি ছিলে? সেখানে কী বলা হয়েছিল তা লেখা আছে, আর তাতে পরে আসা কোনো দলের নাম নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Wasiyyah, Aslama, Muslimun",
          "bn": "ওসিয়ত, আসলামা, মুসলিমুন"
        },
        "p": [
          {
            "en": "The verb in 2:132 is wassa, from the root w-s-y, the language of a charge laid on someone who will have to carry it after you are gone. The noun from that root, wasiyyah, is the word the Quran uses in 2:180 for the bequest a dying man leaves to parents and near relatives. So the two fathers are shown doing exactly what every believer is later instructed to do, with one difference: what they hand over is not property.",
            "bn": "2:132 আয়াতের ক্রিয়াপদ ‘ওয়াস্‌সা’, মূল ও-স-য় থেকে। এ হলো এমন দায়িত্ব চাপিয়ে দেওয়ার ভাষা, যা আপনি চলে যাওয়ার পর অন্যকে বইতে হবে। একই মূল থেকে আসা ‘ওসিয়ত’ শব্দটাই কুরআন 2:180 আয়াতে ব্যবহার করে সেই অসিয়তের জন্য, যা মৃত্যুর মুখে দাঁড়ানো মানুষ মা-বাবা আর নিকটজনের জন্য রেখে যায়। অর্থাৎ দুই পিতাকে দেখানো হচ্ছে ঠিক সেই কাজে, যা পরে প্রতিটি মুমিনকে করতে বলা হয়েছে। তফাত একটাই: তাঁরা যা হাতে তুলে দিচ্ছেন তা সম্পত্তি নয়।"
          },
          {
            "en": "Then the command itself: la tamutunna illa wa antum muslimun, do not die except while you are submitters. Read flatly it orders something nobody can obey, since no one schedules his own death. The prohibition therefore falls not on the dying but on the state death finds you in. And the word for that state, muslimun, is built on the same verb aslama that Ibrahim (AS) had used of himself one verse earlier. What he said about himself, he asks his sons to be.",
            "bn": "এরপর খোদ হুকুমটা: ‘লা তামূতুন্না ইল্লা ওয়া আনতুম মুসলিমূন’, মুসলিম না হয়ে মরো না। সোজাসুজি পড়লে এ এমন হুকুম, যা কেউ পালন করতে পারে না, কারণ নিজের মৃত্যুর দিনক্ষণ কেউ ঠিক করে না। তাই নিষেধটা মরার ওপর নয়, মৃত্যু আপনাকে যে অবস্থায় পায় সেই অবস্থার ওপর। আর সেই অবস্থার শব্দ ‘মুসলিমূন’ গড়ে উঠেছে সেই ‘আসলামা’ ক্রিয়া থেকেই, যা এক আয়াত আগে ইবরাহীম (আঃ) নিজের সম্পর্কে বলেছিলেন। নিজের সম্পর্কে যা বলেছিলেন, ছেলেদেরও তিনি তা-ই হতে বলছেন।"
          },
          {
            "en": "2:133 changes instrument. It does not argue; it asks. Am kuntum shuhada'a, or were you witnesses, is a question that expects no answer, put to people who were confidently reporting a scene they never attended. And the sons' reply keeps the same root running to the end: your God and the God of your fathers, Ibrahim and Isma'il and Ishaq, one God, and to Him we are muslimun. Three generations, one object of worship, and the same word for surrender closing the sentence.",
            "bn": "2:133 আয়াত হাতিয়ার বদলায়। সে তর্ক করে না, প্রশ্ন করে। ‘আম কুনতুম শুহাদাআ’, তোমরা কি সাক্ষী ছিলে, এ এমন প্রশ্ন যার জবাব চাওয়া হচ্ছে না। প্রশ্নটা করা হচ্ছে তাদের, যারা এমন এক দৃশ্যের বিবরণ দিচ্ছিল যেখানে তারা কোনোদিন উপস্থিত ছিল না। আর ছেলেদের জবাবে সেই একই মূল শেষ পর্যন্ত চলতে থাকে: আপনার ইলাহ আর আপনার পূর্বপুরুষ ইবরাহীম, ইসমাঈল ও ইসহাকের ইলাহ, এক ইলাহ, আর আমরা তাঁরই কাছে ‘মুসলিমূন’। তিন পুরুষ, ইবাদতের একই মাবুদ, আর বাক্যের শেষে আত্মসমর্পণের সেই একই শব্দ।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Mufassirun Read It",
          "bn": "মুফাসসিরগণ যেভাবে পড়েছেন"
        },
        "p": [
          {
            "en": "At-Tabari glosses the command as holding to Islam until death comes upon you while you are upon it. That amounts to reading the verse as a command about a state rather than an event, since a man can obey an order about his last minute only by obeying it in all the others. As-Sa'di reaches the same place from the other end: a person dies on what he lived by and is raised on what he died on, so the instruction is to keep to this religion and not step off it until death overtakes him.",
            "bn": "তাবারি হুকুমটার ব্যাখ্যা করেন এভাবে: ইসলাম ধরে থাকো, আর সেই অবস্থায় থাকতে থাকতেই যেন মৃত্যু এসে পড়ে। এতে দাঁড়ায় সেই পাঠই, যেখানে আয়াতটা কোনো ঘটনার নয়, একটা অবস্থার হুকুম দিচ্ছে। কারণ নিজের শেষ মুহূর্ত নিয়ে দেওয়া হুকুম মানুষ কেবল বাকি সব মুহূর্তে মেনেই মানতে পারে। সাদি একই জায়গায় পৌঁছান উল্টো দিক থেকে। মানুষ যেভাবে বেঁচেছে সেভাবেই মরে, আর যেভাবে মরেছে সেভাবেই ওঠানো হবে। তাই নির্দেশ হলো, এই দ্বীন ধরে রাখুন, মৃত্যু এসে ধরার আগ পর্যন্ত এক পা-ও বাইরে যাবেন না।"
          },
          {
            "en": "Ibn Kathir works on the sons' reply. Isma'il (AS) was Ya'qub's uncle, not his father, and Ibn Kathir explains that calling him a father is known Arab usage, citing an-Nahhas as al-Qurtubi reports him. He then notes that this verse is used as evidence that a grandfather counts as a father and inherits, quoting al-Bukhari's transmission of Abu Bakr's (RA) position from Ibn Abbas (RA) and Ibn az-Zubayr (RA). He also records the other view, which divides that inheritance between the grandfather and the brothers, and names Malik, ash-Shafi'i and Ahmad with it.",
            "bn": "ইবনে কাসীর কাজ করেন ছেলেদের জবাব নিয়ে। ইসমাঈল (আঃ) ছিলেন ইয়াকুবের চাচা, পিতা নন। ইবনে কাসীর বুঝিয়ে দেন, চাচাকে পিতা বলা আরবের চেনা ব্যবহার; প্রমাণে তিনি নাহ্‌হাসের কথা আনেন, যা কুরতুবি বর্ণনা করেছেন। এরপর তিনি জানান, এই আয়াত দলিল হিসেবে আনা হয় এ কথায় যে দাদাও পিতা গণ্য হন এবং উত্তরাধিকার পান। এ প্রসঙ্গে তিনি বুখারির সেই বর্ণনা আনেন, যেখানে আবু বকর (রাঃ)-এর অবস্থান এসেছে ইবনে আব্বাস (রাঃ) ও ইবনুয যুবায়র (রাঃ)-এর সূত্রে। সাথে তিনি অন্য মতটিও লিখে রাখেন, যেখানে সেই উত্তরাধিকার দাদা ও ভাইদের মধ্যে ভাগ হয়, আর নাম নেন মালিক, শাফিঈ ও আহমাদের।"
          }
        ]
      },
      {
        "h": {
          "en": "Brothers of One Religion",
          "bn": "এক দ্বীনের ভাই"
        },
        "p": [
          {
            "en": "To this passage Ibn Kathir attaches words of the Prophet ﷺ that al-Bukhari records from Abu Hurayrah (RA): the prophets are brothers of one father, their mothers are different and their religion is one. He brings it to make the point the sons' answer makes. The God of Ibrahim, Isma'il and Ishaq is the God the sons of Ya'qub (AS) undertake to worship, and the laws given to the prophets differed while the thing they submitted to did not change at all.",
            "bn": "এই অংশের সাথে ইবনে কাসীর জুড়ে দেন নবী ﷺ-এর সেই কথা, যা বুখারি আবু হুরায়রা (রাঃ) থেকে লিখে রেখেছেন: নবীগণ এক পিতার সন্তান, তাঁদের মায়েরা আলাদা আর দ্বীন এক। কথাটা তিনি আনেন ঠিক সেই কথাটার জন্য, যা ছেলেদের জবাবেই আছে। ইবরাহীম, ইসমাঈল আর ইসহাকের ইলাহই সেই ইলাহ, যাঁর ইবাদতের অঙ্গীকার ইয়াকুব (আঃ)-এর ছেলেরা করছেন। নবীদের দেওয়া শরিয়ত আলাদা হয়েছে, কিন্তু যাঁর কাছে তাঁরা আত্মসমর্পণ করেছেন তিনি এতটুকু বদলাননি।"
          },
          {
            "en": "Ibn Kathir closes the passage with a second narration, attached to the verse just after ours. 2:134 tells the audience that a nation has passed away, that it has what it earned and they have what they earn, and that they will not be asked about its deeds. Ibn Kathir gives it without naming a collection; it is in Muslim's Sahih, from Abu Hurayrah (RA): whoever is slowed by his deeds will not be hastened by his lineage. Descent from Ibrahim (AS) is an accident of birth. What 2:132 commands is not.",
            "bn": "ইবনে কাসীর অংশটা শেষ করেন আরেকটি বর্ণনা দিয়ে, যা আমাদের ঠিক পরের আয়াতের সাথে জোড়া। 2:134 আয়াত শ্রোতাদের বলে, একটা জাতি গত হয়ে গেছে; তাদের জন্য তাদের কামাই, তোমাদের জন্য তোমাদের কামাই, আর তারা কী করত সে সম্পর্কে তোমাদের জিজ্ঞেস করা হবে না। ইবনে কাসীর কোনো সংকলনের নাম না নিয়েই কথাটি আনেন; এটি আছে সহিহ মুসলিমে, আবু হুরায়রা (রাঃ)-এর সূত্রে: যাকে তার আমল পিছিয়ে দিয়েছে, বংশ তাকে এগিয়ে দেবে না। ইবরাহীম (আঃ)-এর বংশে জন্ম হওয়া নিছক জন্মসূত্রে পাওয়া, কারও অর্জন নয়। 2:132 আয়াত যে হুকুম দেয়, সেটা তেমন নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Charge Recurs",
          "bn": "ওসিয়তটি আর কোথায় আছে"
        },
        "p": [
          {
            "en": "2:131 is where the word starts. Told to submit, Ibrahim (AS) answers that he has submitted to the Lord of the worlds, and everything in our two verses is that one answer being passed down a line. 3:102 puts the identical command to this ummah, joining it to fearing Allah as He should be feared, so the charge is not a family heirloom but a standing instruction. 2:134 then shuts the door on inherited merit: that was a nation which has passed on, and you will not be asked about what they used to do.",
            "bn": "শব্দটা শুরু হয় 2:131 আয়াতে। আত্মসমর্পণ করতে বলা হলে ইবরাহীম (আঃ) বলেন, তিনি সারা জগতের প্রতিপালকের কাছে আত্মসমর্পণ করেছেন। আমাদের দুই আয়াতে যা আছে, তা ওই একটি জবাবেরই বংশপরম্পরায় হাতবদল। 3:102 আয়াত হুবহু একই হুকুম দেয় এই উম্মতকে, আর তার সাথে জুড়ে দেয় আল্লাহকে যেভাবে ভয় করা উচিত সেভাবে ভয় করার কথা। অর্থাৎ এই ওসিয়ত কোনো পারিবারিক সম্পদ নয়, চালু নির্দেশ। আর 2:134 আয়াত উত্তরাধিকারসূত্রে পাওয়া মর্যাদার দরজা বন্ধ করে দেয়: সে জাতি গত হয়ে গেছে, আর তারা কী করত সে সম্পর্কে তোমাদের জিজ্ঞেস করা হবে না।"
          },
          {
            "en": "Two prayers elsewhere in the Quran turn the command into a request. In 12:101 Yusuf (AS), at the summit of his life, asks to be caused to die a Muslim and joined to the righteous, and that is all he asks for himself. In 7:126 the magicians of Fir'awn, believers of a few moments' standing and facing execution, ask that patience be poured upon them and that they be caused to die as Muslims. A minister at the top and condemned men at the bottom make the same request.",
            "bn": "কুরআনের আরও দুটি দোয়ায় হুকুমটা হয়ে যায় আবেদন। ১২:১০১ আয়াতে ইউসুফ (আঃ), জীবনের সবচেয়ে উঁচু জায়গায় দাঁড়িয়ে, চান যেন তাঁকে মুসলিম অবস্থায় মৃত্যু দেওয়া হয় আর নেককারদের সাথে মিলিয়ে দেওয়া হয়। নিজের জন্য তিনি এটুকুই চেয়েছেন। ৭:১২৬ আয়াতে ফেরাউনের জাদুকরেরা, যাঁদের ঈমান সবে কয়েক মুহূর্তের আর সামনে মৃত্যুদণ্ড, চান যেন তাঁদের ওপর সবর ঢেলে দেওয়া হয় আর মুসলিম অবস্থায় মৃত্যু দেওয়া হয়। সবার উপরে থাকা এক মন্ত্রী আর সবার নিচে থাকা কজন দণ্ডিত মানুষ, আবেদন একটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Toward the State",
          "bn": "অবস্থার দিকে বাঁচা"
        },
        "p": [
          {
            "en": "Because the hour is not ours to pick, the command reaches backwards into ordinary time. In practice it means not carrying arrangements you would be ashamed to be found inside: the debt left unsettled, the relative not spoken to since an argument two years old, the matter nobody in the house knows about. It means the bequest of 2:180 written rather than postponed, and it means treating tawbah as this evening's work instead of something scheduled for a season of life that has not arrived.",
            "bn": "সময়টা যেহেতু আমাদের বেছে নেওয়ার নয়, হুকুমটা পিছিয়ে এসে সাধারণ দিনগুলোর ওপর পড়ে। কাজে এর মানে হলো, এমন কোনো অবস্থা বয়ে না বেড়ানো যেখানে ধরা পড়লে আপনার লজ্জা লাগবে: মিটমাট না হওয়া ঋণ, দুই বছর আগের ঝগড়ার পর থেকে যে আত্মীয়ের সাথে কথা নেই, ঘরের কেউ জানে না এমন কোনো ব্যাপার। এর মানে 2:180 আয়াতের অসিয়তটা ফেলে না রেখে লিখে ফেলা। আর এর মানে তওবাকে আজ সন্ধ্যার কাজ ধরা, জীবনের এমন কোনো মৌসুমের জন্য তুলে না রাখা যে মৌসুম এখনো আসেনি।"
          },
          {
            "en": "It also means noticing what the two fathers did not ask about. Ya'qub (AS) is at the end of his life, and the question he puts to his sons is what they will worship after him. He did not ask his sons about property, or about which of them will lead the family. A man can leave his children comfortable and leave them nothing. The verse suggests one test for a household: if that last conversation happened tonight, is there anything in it the children could answer together?",
            "bn": "সেই সাথে এর মানে খেয়াল করা, দুই পিতা কী নিয়ে প্রশ্ন করেননি। ইয়াকুব (আঃ) জীবনের শেষ প্রান্তে, আর ছেলেদের কাছে তাঁর প্রশ্ন, তাঁর পরে তারা কার ইবাদত করবে। সম্পত্তি নিয়ে তিনি ছেলেদের কিছু জিজ্ঞেস করেননি, কে পরিবারের হাল ধরবে তা নিয়েও নয়। মানুষ সন্তানদের সচ্ছল রেখে গিয়েও আসলে কিছুই না রেখে যেতে পারে। আয়াতটি ঘরের জন্য একটা পরীক্ষা বাতলে দেয়: শেষ কথাটা যদি আজ রাতেই হতো, তার ভেতরে এমন কিছু কি আছে যার জবাব ছেলেমেয়েরা একসাথে দিতে পারত?"
          }
        ]
      },
      {
        "h": {
          "en": "Yusuf's Request, Ours Too",
          "bn": "ইউসুফের চাওয়া, আমাদেরও"
        },
        "p": [
          {
            "en": "The Quran itself turns this command into a supplication, in Yusuf's (AS) mouth, and it is short enough to keep. 12:101 ends: tawaffani musliman wa alhiqni bis-salihin, cause me to die a Muslim and join me with the righteous. Said after a prayer it asks for precisely what 2:132 orders, which is the ordinary shape of obedience in the Quran. What you are commanded to be, you turn round and ask to be made.",
            "bn": "কুরআন নিজেই এই হুকুমকে দোয়ায় বদলে দেয়, ইউসুফ (আঃ)-এর মুখে, আর দোয়াটা এত ছোট যে ধরে রাখা যায়। 12:101 আয়াত শেষ হয়: ‘তাওয়াফ্‌ফানি মুসলিমান ওয়া আলহিক্‌নি বিস্‌সালিহীন’, আমাকে মুসলিম অবস্থায় মৃত্যু দিন আর নেককারদের সাথে মিলিয়ে দিন। নামাজের পরে বললে এ দোয়া ঠিক তা-ই চায়, 2:132 আয়াত যার হুকুম দেয়। কুরআনে আনুগত্যের চেহারাটাই এমন। আপনাকে যা হতে বলা হয়েছে, ঘুরে দাঁড়িয়ে আপনি সেটাই বানিয়ে দেওয়ার আবেদন করেন।"
          },
          {
            "en": "A second supplication, in the verse's own vocabulary, composed here and not narrated: O Allah, You chose this religion for me before I was able to choose anything. Keep me upon it in health and in fear, in company and alone, and let the last state You find me in be submission to You. Make what I leave my family weightier than what I leave them in property, and gather us on the word the sons of Ya'qub (AS) answered with.",
            "bn": "দ্বিতীয় দোয়াটি আয়াতের নিজের শব্দে, এখানে রচিত, কোনো বর্ণনা নয়: হে আল্লাহ, আমি কিছু বেছে নেওয়ার মতো হওয়ার আগেই আপনি এই দ্বীন আমার জন্য বেছে নিয়েছেন। সুস্থতায় ও ভয়ে, লোকের মাঝে ও একা, আমাকে এর ওপরেই রাখুন। শেষে আপনি আমাকে যে অবস্থায় পান, সেটি যেন আপনার কাছে আত্মসমর্পণই হয়। পরিবারের জন্য আমি যা রেখে যাব, তা সম্পত্তির চেয়ে ভারী করুন, আর ইয়াকুব (আঃ)-এর ছেলেরা যে কথায় জবাব দিয়েছিলেন, সেই কথার ওপর আমাদের জড়ো করুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions at the Bedside",
          "bn": "শয্যার পাশে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "2:132 forbids me a state, not a date. If the state I am in tonight were fixed without warning, what in it would I want changed first, and what is stopping me from changing it now instead of at some later point I have quietly promised myself? Ya'qub (AS) asked his sons about worship at the one moment when nobody says anything unimportant. If I had that moment, what would I ask, and would the people around the bed have the faintest idea how to answer?",
            "bn": "2:132 আয়াত আমাকে একটা অবস্থা নিষেধ করে, কোনো তারিখ নয়। আজ রাতে আমি যে অবস্থায় আছি, তা যদি কোনো সতর্কবার্তা ছাড়াই চিরদিনের মতো স্থির হয়ে যেত, তার কোন জিনিসটা আমি সবার আগে বদলাতে চাইতাম? আর পরে কোনো এক সময় করব বলে নিজেকে চুপচাপ যে কথা দিয়ে রেখেছি, তার অপেক্ষায় না থেকে এখনই তা বদলাতে আমাকে কী আটকাচ্ছে? ইয়াকুব (আঃ) ছেলেদের ইবাদত নিয়ে প্রশ্ন করেছিলেন এমন এক মুহূর্তে, যে মুহূর্তে কেউ অকাজের কথা বলে না। সেই মুহূর্ত আমার হলে আমি কী জিজ্ঞেস করতাম, আর শয্যার পাশে দাঁড়ানো মানুষগুলো আদৌ কি জানত কী জবাব দিতে হয়?"
          },
          {
            "en": "2:134 tells me I will not be asked about the deeds of those who went before me. Which parts of my religion are actually mine, and which are borrowed from a family or a culture that will not be standing next to me? And when I read the sons' answer, your God and the God of your fathers, one God, whose faith am I currently making it easier for my own children to hold?",
            "bn": "2:134 আয়াত আমাকে বলে দেয়, আমার আগে যাঁরা গেছেন তাঁদের আমল নিয়ে আমাকে জিজ্ঞেস করা হবে না। তাহলে আমার দ্বীনের কোন অংশগুলো আসলেই আমার, আর কোনগুলো ধার করা এমন পরিবার বা সমাজ থেকে, যারা সেদিন আমার পাশে দাঁড়াবে না? আর ছেলেদের জবাবটা যখন পড়ি, আপনার ইলাহ আর আপনার পূর্বপুরুষদের ইলাহ, এক ইলাহ, তখন প্রশ্ন জাগে, আমি এখন কার ঈমান আমার নিজের সন্তানদের জন্য সহজ করে দিচ্ছি?"
          }
        ]
      },
      {
        "h": {
          "en": "A Word to Parents",
          "bn": "মা-বাবার জন্য একটি কথা"
        },
        "p": [
          {
            "en": "This is one of the easiest passages in the Quran to teach a child, because it is a scene rather than a rule. A man at the end of his life, his sons around him, one question, one answer. Read 2:133 aloud and stop at the question. Ask the children what they would say. The answer the Quran records is not clever; it names God, names the fathers who worshipped Him, and ends by saying that we are submitted to Him.",
            "bn": "কুরআনের যে অংশগুলো শিশুকে শেখানো সবচেয়ে সহজ, এ তার একটি। কারণ এখানে কোনো বিধান নেই, আছে একটা দৃশ্য। জীবনের শেষ প্রান্তে দাঁড়ানো এক মানুষ, চারপাশে তাঁর ছেলেরা, একটা প্রশ্ন, একটা জবাব। 2:133 আয়াত জোরে পড়ুন আর প্রশ্নটার জায়গায় থামুন। ছেলেমেয়েদের জিজ্ঞেস করুন, তারা কী বলত। কুরআন যে জবাব লিখে রেখেছে তা চটপটে কিছু নয়; সে ইলাহর নাম নেয়, যাঁরা তাঁর ইবাদত করেছেন সেই পূর্বপুরুষদের নাম নেয়, আর শেষ করে এই বলে যে আমরা তাঁরই কাছে আত্মসমর্পিত।"
          },
          {
            "en": "What follows from that is a habit rather than a lesson. The sons could answer because they had been hearing the answer all their lives, not because someone coached them at the bedside. So the parent's work sits in ordinary weeks: praying where the children can see it, naming Allah when something good arrives and when something is taken away, and letting them hear the household's decisions explained by what Allah loves. The last question only reads back what the years put in.",
            "bn": "এখান থেকে যা আসে তা কোনো পাঠ নয়, একটা অভ্যাস। ছেলেরা জবাব দিতে পেরেছিলেন কারণ সারা জীবন ধরে জবাবটা তাঁরা শুনে এসেছেন, শয্যার পাশে কেউ শিখিয়ে দিয়েছিল বলে নয়। তাই মা-বাবার কাজটা পড়ে আছে সাধারণ সপ্তাহগুলোর ভেতরে: এমন জায়গায় নামাজ পড়া যেখানে সন্তানেরা দেখে, ভালো কিছু এলে আর কিছু কেড়ে নেওয়া হলে আল্লাহর নাম নেওয়া, আর ঘরের সিদ্ধান্তগুলোর ব্যাখ্যা তাদের সামনে আল্লাহর পছন্দ দিয়ে দেওয়া। শেষ প্রশ্নটা কেবল পড়ে শোনায়, বছরগুলো ভেতরে কী ঢেলেছে।"
          }
        ]
      }
    ]
  },
  "2:143-144": {
    "sections": [
      {
        "h": {
          "en": "Who Inherits Ibrahim",
          "bn": "ইবরাহীমের উত্তরাধিকারী কে"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and its long argument with the People of the Book keeps returning to one question: who truly inherits Ibrahim (AS). 2:135 has the invitation to become a Jew or a Christian and be guided; 2:140 asks whether Ibrahim, Isma'il, Ishaq and Ya'qub (AS) are to be called Jews or Christians. The qibla is where that argument becomes a direction the body must face, and 2:142 has already put the objection into the mouths of the foolish before it was raised.",
            "bn": "সূরা বাকারা মাদানি সূরা, আর আহলে কিতাবের সাথে তার লম্বা বিতর্ক বারবার একটি প্রশ্নেই ফেরে: ইবরাহীম (আঃ)-এর আসল উত্তরাধিকারী কে। 2:135 আয়াতে আছে সেই আহ্বান, ইহুদি বা নাসারা হয়ে যাও, পথ পেয়ে যাবে। 2:140 আয়াত জিজ্ঞেস করে, ইবরাহীম, ইসমাঈল, ইসহাক আর ইয়াকুব (আঃ)-কে কি ইহুদি বা নাসারা বলা যাবে। কিবলার প্রসঙ্গেই সেই বিতর্ক এসে দাঁড়ায় শরীর কোন দিকে ফিরবে সেই প্রশ্নে। আর আপত্তিটা ওঠার আগেই 2:142 আয়াত তা নির্বোধদের মুখে বসিয়ে দিয়েছে।"
          },
          {
            "en": "The occasion is established. Al-Bukhari records from al-Bara' ibn Azib (RA) that the Prophet ﷺ prayed toward Bayt al-Maqdis for sixteen or seventeen months while wishing to face the Ka'bah, and that the first prayer he offered facing it was Asr. Ibn Kathir transmits from Ibn Abbas (RA) that this was the first abrogation in the Quran, and that in that period the Prophet ﷺ would supplicate and look up toward the sky. That waiting is what 2:144 opens by describing.",
            "bn": "এর শানে নুযুল নির্ভরযোগ্য সূত্রে প্রমাণিত। বুখারি বারা ইবনে আযিব (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ ষোলো কিংবা সতেরো মাস বায়তুল মাকদিসের দিকে ফিরে নামাজ পড়েছেন, অথচ মনে চাইত কাবার দিকে ফিরতে; আর কাবার দিকে ফিরে তাঁর পড়া প্রথম নামাজ ছিল আসর। ইবনে কাসীর ইবনে আব্বাস (রাঃ) থেকে জানান, কুরআনে এটিই প্রথম রহিত হওয়ার ঘটনা, আর সেই সময়টাতে নবী ﷺ দোয়া করতেন এবং আকাশের দিকে তাকিয়ে থাকতেন। সেই অপেক্ষার কথা দিয়েই 2:144 আয়াত শুরু হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Wasat and the Turning",
          "bn": "ওয়াসাত আর মুখ ফেরানো"
        },
        "p": [
          {
            "en": "Wasat is from the root w-s-t, the middle of a thing. From that comes the choicest part, since what sits in the middle is guarded on every side, and from that again comes the just, since a just man stands between two claims and leans to neither. The verse does not say that Allah made this ummah the greatest; it says He placed it in the middle, and then gives the purpose at once: that you be witnesses over the people, and the Messenger a witness over you.",
            "bn": "‘ওয়াসাত’ এসেছে ও-স-ত মূল থেকে, কোনো জিনিসের মাঝখান। সেখান থেকেই আসে সেরা অংশের অর্থ, কারণ যা মাঝখানে থাকে তা চারদিক থেকে আগলে রাখা থাকে। আর সেখান থেকেই আসে ইনসাফের অর্থ, কারণ ইনসাফের মানুষ দুই দাবির মাঝখানে দাঁড়ায়, কোনো দিকে হেলে না। আয়াত বলেনি আল্লাহ এই উম্মতকে সবচেয়ে বড় বানিয়েছেন; বলেছে তিনি তাকে মাঝখানে বসিয়েছেন। আর সাথে সাথেই উদ্দেশ্যটাও বলে দিয়েছেন: তোমরা মানুষের ওপর সাক্ষী হবে, আর রাসূল তোমাদের ওপর সাক্ষী হবেন।"
          },
          {
            "en": "2:144 begins qad nara taqalluba wajhika fis-sama'. The sentence opens with qad nara, We have indeed been seeing, and what is seen, taqallub, the turning about of your face toward the sky, arrives inside that seeing. So the first thing the verse establishes is not the Prophet's ﷺ longing but Allah's watching of it. As-Sa'di notices that the verse names the face rather than the eyes, and reads the choice as showing how completely the matter occupied him.",
            "bn": "2:144 আয়াত শুরু হয় ‘কাদ নারা তাকাল্লুবা ওয়াজহিকা ফিস্‌সামা’ দিয়ে। বাক্যের গোড়াতেই ‘কাদ নারা’, অর্থাৎ আমি অবশ্যই দেখে আসছি। আর যা দেখা হচ্ছে, সেই ‘তাকাল্লুব’, তোমার মুখের আকাশের দিকে ঘুরে যাওয়া, আসে সেই দেখার ভেতরে। ফলে আয়াত প্রথমে যা দাঁড় করায় তা নবী ﷺ-এর আকুতি নয়, সেই আকুতির ওপর আল্লাহর নজর। সাদি খেয়াল করেন, আয়াত চোখের কথা না বলে মুখের কথা বলেছে, আর এতে তিনি দেখেন বিষয়টা তাঁকে কতখানি জুড়ে রেখেছিল।"
          },
          {
            "en": "The clause that sets both turnings up is li-na'lama, literally so that We know. Ibn Kathir glosses it as so as to find who will follow the Messenger and who turns back. Then the root q-l-b runs through both verses. In 2:143 those who fail are the ones who turn about on their heels, yanqalibu 'ala 'aqibayh; in 2:144 what Allah has been seeing is the taqallub of a face. The heart's own name, qalb, is from the same root, which is why the best known supplication for steadfastness addresses Allah as the Turner of hearts.",
            "bn": "দুই রকম ঘোরার গোড়ায় আছে ‘লিনা’লামা’ কথাটি, আক্ষরিক অর্থে ‘যাতে আমি জানি’। ইবনে কাসীর এর ব্যাখ্যা করেন এভাবে: যাতে বেরিয়ে আসে, কে রাসূলের অনুসরণ করে আর কে পিছু হটে। এরপর ক-ল-ব মূলটি দুই আয়াত জুড়েই চলতে থাকে। 2:143 আয়াতে যারা হেরে যায় তারা ‘ইয়ানকালিবু আলা আকিবাইহি’, পায়ের ভরে উল্টো ঘুরে যায়। 2:144 আয়াতে আল্লাহ যা দেখে আসছেন তা একটি মুখের ‘তাকাল্লুব’। হৃদয়ের নিজের নাম ‘কলব’ও একই মূল থেকে, আর সেজন্যই অবিচল থাকার সবচেয়ে পরিচিত দোয়াটি আল্লাহকে ডাকে হৃদয়ের পরিবর্তনকারী বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Just, Best, or Balanced",
          "bn": "ইনসাফ, শ্রেষ্ঠ, না ভারসাম্য"
        },
        "p": [
          {
            "en": "At-Tabari glosses wasat as 'adl, just, and the narration below glosses it the same way. Ibn Kathir takes it as the best and most honoured, and argues from usage: Quraysh is spoken of as being in the wasat of the Arab tribes, meaning the best of them, and the prayer most hold to be Asr, called al-wusta, is the best prayer. He then reads the verse as a statement of this ummah's rank, given the most complete legislation and the clearest way.",
            "bn": "তাবারি ‘ওয়াসাত’-এর অর্থ করেন ‘আদল’, অর্থাৎ ইনসাফ, আর নিচের বর্ণনাটিও একই অর্থই দেয়। ইবনে কাসীর একে নেন সেরা ও সবচেয়ে সম্মানিত অর্থে, আর দলিল আনেন ব্যবহার থেকে: আরব গোত্রগুলোর মধ্যে কুরাইশকে বলা হয় ‘ওয়াসাত’-এ আছে, মানে তাদের সেরা; আর যে নামাজকে অধিকাংশ আলিম আসর বলেন, সেই ‘উসতা’ই সেরা নামাজ। এরপর তিনি আয়াতটিকে পড়েন এই উম্মতের মর্যাদার ঘোষণা হিসেবে, যাকে দেওয়া হয়েছে সবচেয়ে পূর্ণ বিধান আর সবচেয়ে পরিষ্কার পথ।"
          },
          {
            "en": "Ibn Ashur puts i'tidal, balance, first: the community is set between extremes. As-Sa'di glosses the word as just and choice, and then spells the balance out across the religion, between those who go too far in exalting the prophets and those who reject them outright, between a law made unbearably heavy and a law let go altogether, between a purity nothing satisfies and a table nothing is kept off. The four readings do not fight each other, but they are not the same claim, and what separates them is which of justice, excellence and balance each puts first.",
            "bn": "ইবনে আশুর আগে রাখেন ‘ইতিদাল’, অর্থাৎ ভারসাম্য: এই উম্মতকে বসানো হয়েছে দুই প্রান্তের মাঝখানে। সাদি শব্দটির অর্থ করেন ইনসাফ ও বাছাই, তারপর ভারসাম্যটা গোটা দ্বীন জুড়ে খুলে দেখান। নবীদের বাড়িয়ে তোলা আর নবীদের সাফ অস্বীকার করার মাঝখানে; বিধানকে অসহনীয় ভারী বানানো আর বিধানকে একেবারে ছেড়ে দেওয়ার মাঝখানে; যে পবিত্রতা কিছুতেই মেটে না আর যে পাত থেকে কিছুই সরানো হয় না, তার মাঝখানে। চারটি পাঠ একে অন্যের সাথে লড়ে না, তবে একই কথাও বলে না। তফাতটা এখানে যে ইনসাফ, শ্রেষ্ঠত্ব আর ভারসাম্যের কোনটিকে কে আগে রাখছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Nuh and His Witnesses",
          "bn": "নূহ ও তাঁর সাক্ষীরা"
        },
        "p": [
          {
            "en": "The narration the commentators attach here sits in al-Bukhari's own tafsir of this verse, from Abu Sa'id al-Khudri (RA). In its wording, Nuh (AS) and his ummah will come on the Day of Resurrection. He will be asked whether he conveyed, and he will say yes. His ummah will be asked whether he conveyed to them, and they will say no, no prophet came to us. Nuh (AS) will be asked who testifies for him, and he will say Muhammad ﷺ and his ummah. So we bear witness that he conveyed; and then the verse is recited, and the Messenger is a witness over you (al-Bukhari 4487).",
            "bn": "মুফাসসিরগণ এখানে যে বর্ণনাটি জুড়ে দেন, তা আছে খোদ বুখারির এই আয়াতের তাফসিরেই, আবু সাঈদ খুদরি (রাঃ)-এর সূত্রে। তার ভাষায়, কিয়ামতের দিন নূহ (আঃ) আর তাঁর উম্মত আসবে। তাঁকে জিজ্ঞেস করা হবে, তুমি কি পৌঁছে দিয়েছিলে; তিনি বলবেন, হ্যাঁ। তাঁর উম্মতকে জিজ্ঞেস করা হবে, তিনি কি তোমাদের কাছে পৌঁছে দিয়েছিলেন; তারা বলবে, না, আমাদের কাছে কোনো নবী আসেননি। নূহ (আঃ)-কে জিজ্ঞেস করা হবে, তোমার পক্ষে সাক্ষ্য দেবে কে; তিনি বলবেন, মুহাম্মাদ ﷺ আর তাঁর উম্মত। তখন আমরা সাক্ষ্য দেব যে তিনি পৌঁছে দিয়েছিলেন। এরপর পড়া হয় আয়াতটি: আর রাসূল তোমাদের ওপর সাক্ষী (বুখারি ৪৪৮৭)।"
          },
          {
            "en": "Two things follow from that scene. The witnessing named in 2:143 is not a soft metaphor for setting a good example; it is testimony given where testimony decides a case, and this ummah is called to give it. And the chain does not stop with them, because the Messenger ﷺ stands as witness over the witnesses. A community that testifies about others is a community under observation itself, which is why the honour and the accountability arrive in the same sentence.",
            "bn": "এই দৃশ্য থেকে দুটি জিনিস বেরিয়ে আসে। 2:143 আয়াতে সাক্ষী হওয়ার কথাটি ভালো দৃষ্টান্ত রাখার নরম উপমা নয়; এ হলো সেই সাক্ষ্য, যেখানে সাক্ষ্যেই মামলার ফয়সালা হয়, আর এই উম্মতকে তা দিতে ডাকা হচ্ছে। আর শৃঙ্খলটা তাঁদের কাছেই থামে না, কারণ সাক্ষীদের ওপর সাক্ষী হয়ে দাঁড়ান রাসূল ﷺ। যে জাতি অন্যদের ব্যাপারে সাক্ষ্য দেয়, তার দিকেও নজর থাকে। সেজন্যই মর্যাদা আর জবাবদিহি একই বাক্যে এসে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing You Prayed Was Lost",
          "bn": "আপনার নামাজ নষ্ট হয়নি"
        },
        "p": [
          {
            "en": "The verse ends with a reassurance nobody would have known to ask for until the change came. Wa ma kana Allahu li-yudi'a imanakum: Allah would never let your faith go to waste. Ibn Kathir explains the meaning as the reward of your prayers toward Bayt al-Maqdis, and reports in the Sahih from al-Bara' (RA) that people had asked about those who prayed toward the first qibla and died before the change, and that this clause came down about them.",
            "bn": "আয়াত শেষ হয় এমন এক আশ্বাসে, যা চাওয়ার কথা এই বদল আসার আগে কারও মাথাতেই আসত না। ‘ওয়া মা কানাল্লাহু লিইউদীআ ঈমানাকুম’, আল্লাহ তোমাদের ঈমান বিনষ্ট হতে দেবেন না। ইবনে কাসীর এর অর্থ করেন বায়তুল মাকদিসের দিকে ফিরে পড়া নামাজগুলোর সওয়াব। সহিহ বর্ণনায় বারা (রাঃ) থেকে তিনি জানান, যাঁরা প্রথম কিবলার দিকে নামাজ পড়ে বদলের আগেই ইন্তেকাল করেছেন তাঁদের নিয়ে মানুষ প্রশ্ন করেছিল, আর তাঁদের ব্যাপারেই এই কথাটি নাজিল হয়।"
          },
          {
            "en": "Notice what the clause calls those prayers. Not your prayers but your faith, and the commentators are the ones who supply that the reward of the prayers is meant. Obedience carried out under a ruling that is later replaced is not wasted work; it was obedience at the time it was done. And the verse closes with two names, Ra'uf and Rahim, kind and merciful, used here of a change in the law, so that the ruling and the mercy are not left standing as two separate things.",
            "bn": "খেয়াল করুন, ওই নামাজগুলোকে আয়াত কী বলছে। ‘তোমাদের নামাজ’ নয়, বলছে ‘তোমাদের ঈমান’; আর নামাজের সওয়াবের কথা যে বোঝানো হয়েছে, সেটা যোগ করেন মুফাসসিরগণ। পরে বদলে যাওয়া কোনো বিধানের অধীনে করা আনুগত্য বৃথা খাটুনি নয়; যখন করা হয়েছিল তখন সেটা আনুগত্যই ছিল। আর আয়াত শেষ হয় দুটি নাম দিয়ে, রউফ আর রহিম, স্নেহশীল আর দয়ালু। নাম দুটি এখানে এসেছে বিধান বদলের প্রসঙ্গে, যাতে বিধান আর রহমত দুটো আলাদা জিনিস হয়ে দাঁড়িয়ে না থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Around the Qibla",
          "bn": "কিবলা ঘিরে অন্য আয়াত"
        },
        "p": [
          {
            "en": "22:78 repeats the witness clause almost word for word and shows what surrounds it: He chose you, laid no hardship on you in the religion, called it the religion of your father Ibrahim, and named you Muslims. That is the answer to the question this whole stretch of al-Baqarah is arguing about. 4:135 then shows what the witnessing costs, ordering the believers to stand firm in justice as witnesses for Allah even against themselves, their parents and their relatives.",
            "bn": "22:78 আয়াত সাক্ষ্যের কথাটি প্রায় হুবহু আবার বলে আর দেখিয়ে দেয় তার চারপাশে কী আছে: তিনি তোমাদের বেছে নিয়েছেন, দ্বীনে কোনো কঠোরতা চাপাননি, একে বলেছেন তোমাদের পিতা ইবরাহীমের দ্বীন, আর তোমাদের নাম রেখেছেন মুসলিম। বাকারার এই গোটা অংশ যে প্রশ্ন নিয়ে তর্ক করছে, এটিই তার জবাব। এরপর 4:135 আয়াত দেখায় সাক্ষী হওয়ার দাম কত। সেখানে হুকুম, ইনসাফের ওপর অটল থেকে আল্লাহর জন্য সাক্ষ্য দাও, তা নিজের, মা-বাবার কিংবা আত্মীয়ের বিরুদ্ধে গেলেও।"
          },
          {
            "en": "2:115 stands behind the whole change: to Allah belong the east and the west, so wherever you turn, there is the Face of Allah. No direction is holy in itself; what makes one a qibla is that He said so. 2:146 answers the objectors, saying that those given the Scripture know him as they know their own sons. And 2:150 repeats the command a third time with its purpose attached, that people have no argument against you and that His favour upon you be completed.",
            "bn": "গোটা বদলটার পেছনে দাঁড়িয়ে আছে 2:115 আয়াত: পূর্ব-পশ্চিম আল্লাহরই, তাই তোমরা যেদিকেই মুখ ফেরাও, সেদিকেই আল্লাহর চেহারা। কোনো দিক নিজে থেকে পবিত্র নয়; কোনো দিককে কিবলা বানায় কেবল তাঁর কথা। 2:146 আয়াত আপত্তিকারীদের জবাব দেয়, বলে, যাদের কিতাব দেওয়া হয়েছে তারা তাঁকে চেনে যেভাবে নিজের ছেলেদের চেনে। আর 2:150 আয়াত হুকুমটি তৃতীয়বার দেয়, সাথে উদ্দেশ্যও জুড়ে দেয়: যেন মানুষের হাতে তোমাদের বিরুদ্ধে কোনো কথা না থাকে আর তোমাদের ওপর তাঁর নিয়ামত পূর্ণ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ruling Arrived Mid-Prayer",
          "bn": "হুকুম এল নামাজের ভেতরেই"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Ibn Umar (RA) that while people were praying Fajr in the Quba mosque, a man came and said that Quran had been revealed to the Prophet ﷺ and he had been ordered to face the Ka'bah, so face it; and they turned toward it. That is what obedience looks like when it arrives at an inconvenient moment. The ruling reached them inside the prayer, and the bodies moved before the objections could be collected.",
            "bn": "বুখারি ইবনে উমর (রাঃ) থেকে বর্ণনা করেন, কুবা মসজিদে লোকেরা যখন ফজরের নামাজ পড়ছিলেন, তখন এক ব্যক্তি এসে বললেন, নবী ﷺ-এর ওপর কুরআন নাজিল হয়েছে আর তাঁকে কাবার দিকে ফিরতে বলা হয়েছে, কাজেই তোমরাও কাবার দিকে ফের। তাঁরা সেদিকেই ফিরে গেলেন। বেখাপ্পা সময়ে হুকুম এসে পড়লে আনুগত্য দেখতে এমনই লাগে। বিধানটি তাঁদের কাছে পৌঁছেছিল নামাজের ভেতরেই, আর আপত্তিগুলো জড়ো হওয়ার আগেই শরীর ঘুরে গিয়েছিল।"
          },
          {
            "en": "For a reader the practice is smaller and harder. The command you find heaviest is the one to carry out first: name it, whether it is the prayer whose time you keep pushing, the income you have never examined, or the relative you have decided is impossible, and do it once before arguing with it. Then take the witness clause literally for a week. Assume somebody near you is learning what Islam is from how you drive, pay and speak, because the verse says that this is exactly what is happening.",
            "bn": "পাঠকের জন্য কাজটা আরও ছোট, আর আরও কঠিন। যে হুকুমটা আপনার কাছে সবচেয়ে ভারী, সেটাই আগে পালন করার: নাম ধরে ঠিক করুন সেটা কী, যে নামাজের ওয়াক্ত আপনি বারবার পেছান, যে আয়ের উৎস আপনি কোনোদিন খতিয়ে দেখেননি, নাকি যে আত্মীয়কে আপনি অসম্ভব ঠাউরে রেখেছেন। তর্ক শুরুর আগে একবার করে ফেলুন। তারপর এক সপ্তাহ সাক্ষ্যের কথাটি আক্ষরিকভাবে ধরুন। ধরে নিন, কাছের কেউ আপনার গাড়ি চালানো, লেনদেন আর কথা দেখে ইসলাম কী তা শিখছে। আয়াত বলছে, ঠিক এটাই ঘটছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking the Turner of Hearts",
          "bn": "হৃদয়ের পরিবর্তনকারীর কাছে চাওয়া"
        },
        "p": [
          {
            "en": "The verse is not itself a supplication, but its vocabulary hands one over. At-Tirmidhi records that the Prophet ﷺ used often to say: Ya Muqallib al-qulub, thabbit qalbi 'ala dinik, O Turner of hearts, make my heart firm upon Your religion. The verb is the one this passage has been turning over: the heels that turn back, the face that turns upward, and the heart that is turned by Someone other than its owner.",
            "bn": "আয়াতটি নিজে দোয়া নয়, কিন্তু তার শব্দভাণ্ডার দোয়াটি হাতে ধরিয়ে দেয়। তিরমিযি বর্ণনা করেন, নবী ﷺ প্রায়ই বলতেন: ‘ইয়া মুকাল্লিবাল কুলূব, সাব্বিত কালবি আলা দীনিক’, হে হৃদয়ের পরিবর্তনকারী, আমার হৃদয়কে আপনার দ্বীনের ওপর স্থির রাখুন। ক্রিয়াপদটি সেটিই, যা এই অংশ জুড়ে ঘুরে ফিরে আসছে: যে পা উল্টো ঘোরে, যে মুখ উপরে ঘোরে, আর যে হৃদয়কে ঘোরান তার মালিক ছাড়া অন্য কেউ।"
          },
          {
            "en": "And a supplication in the verse's own words, composed here and not narrated: O Allah, You saw a face turned toward the sky before a word of it was spoken, so see in me what I have not managed to ask for. Make me one of those who follow the Messenger ﷺ and not one of those who turn back on their heels. Hold me in the middle, where justice is, and let nothing I have already done for You be lost.",
            "bn": "আর আয়াতের নিজের শব্দে একটি দোয়া, এখানে রচিত, কোনো বর্ণনা নয়: হে আল্লাহ, একটি কথাও বলার আগে আপনি আকাশের দিকে ফেরানো মুখ দেখে ফেলেছিলেন; যা চাইতে পারিনি, আমার ভেতরে তা-ও দেখুন। আমাকে বানান তাঁদের একজন, যাঁরা রাসূল ﷺ-এর অনুসরণ করেন; পায়ের ভরে যারা উল্টো ঘোরে তাদের বানাবেন না। ইনসাফ যেখানে, সেই মাঝখানটাতেই আমাকে ধরে রাখুন, আর আপনার জন্য যা করে ফেলেছি তার কিছুই নষ্ট হতে দেবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions the Change Leaves",
          "bn": "বদলটা যে প্রশ্ন রেখে যায়"
        },
        "p": [
          {
            "en": "The verse says the first qibla was set in order to separate those who follow from those who turn on their heels. Which instruction have I found heaviest this year, and which of the two groups did my response put me in? Being called a witness means being looked at. If a neighbour or a colleague built their whole picture of this religion out of my week, what would be in the picture, and which part of it would I want to take back?",
            "bn": "আয়াত বলছে, প্রথম কিবলা রাখা হয়েছিল অনুসরণকারীদের থেকে পিছু হটাদের আলাদা করার জন্য। এ বছর কোন হুকুমটা আমার কাছে সবচেয়ে ভারী লেগেছে, আর আমার জবাব আমাকে দুই দলের কোনটিতে ফেলেছে? সাক্ষী বলে ডাকা মানে, লোকে আমার দিকে তাকিয়ে আছে। প্রতিবেশী বা সহকর্মী যদি কেবল আমার সপ্তাহটা দেখে এই দ্বীনের গোটা ছবিটা আঁকেন, সেই ছবিতে কী কী থাকবে, আর তার কোন অংশটা আমি ফিরিয়ে নিতে চাইব?"
          },
          {
            "en": "Allah saw a face turned toward the sky before the request was ever put into words. What have I wanted for years and never once asked Him for, and why not? And the verse promises that nothing already offered is lost. Which act of obedience have I written off as pointless because the situation changed, the group broke up, or nobody ever noticed that I did it?",
            "bn": "মুখে কথাটা ওঠার আগেই আল্লাহ আকাশের দিকে ফেরানো মুখ দেখে ফেলেছিলেন। বছরের পর বছর কী চেয়ে এসেছি, অথচ একবারও তাঁর কাছে চাইনি, আর কেন চাইনি? আর আয়াত কথা দিচ্ছে, আগে পেশ করা কিছুই নষ্ট হয় না। পরিস্থিতি বদলে গেছে, দলটা ভেঙে গেছে, কিংবা কেউ কোনোদিন খেয়ালই করেনি বলে কোন আনুগত্যটাকে আমি অর্থহীন ধরে বাদ দিয়ে দিয়েছি?"
          }
        ]
      }
    ]
  },
  "2:152": {
    "sections": [
      {
        "h": {
          "en": "An Exchange in Four Words",
          "bn": "চার শব্দে এক বিনিময়"
        },
        "p": [
          {
            "en": "The Arabic is startlingly short: fadhkuruni adhkurkum. Remember Me, I will remember you. Both verbs come from the same root, dhikr, which covers mentioning with the tongue, recalling in the mind and keeping present in the heart. The Quran does not say worship Me and I will reward you, though that is true elsewhere. Here the same word is used on both sides, so the sentence reads as an exchange between two parties rather than a transaction.",
            "bn": "আরবি বাক্যটা চমকে দেওয়ার মতো ছোট: ফাযকুরূনী আযকুরকুম। আমাকে স্মরণ করো, আমি তোমাদের স্মরণ করব। দুটি ক্রিয়াই এসেছে একই ধাতু 'যিকর' থেকে। শব্দটা তিনটি জিনিসই বোঝায়: মুখে উচ্চারণ করা, মনে মনে স্মরণ করা, আর অন্তরে সারাক্ষণ হাজির রাখা। কুরআন এখানে বলেনি, 'আমার ইবাদত করো, আমি প্রতিদান দেব', যদিও অন্য জায়গায় সে কথাও সত্য। এখানে দুই দিকেই একই শব্দ, তাই বাক্যটা লেনদেনের মতো শোনায় না, শোনায় দুই পক্ষের পারস্পরিক আদান-প্রদানের মতো।"
          },
          {
            "en": "The second half sets up an opposition that is easy to miss in translation: washkuru li wa la takfurun. Be grateful to Me and do not be ungrateful. The opposite of shukr in Quranic Arabic is kufr, from a root meaning to cover something over. The farmer who buries a seed uses the same verb. Ingratitude, in this picture, is not loud denial. It is quietly covering a gift until it is no longer visible.",
            "bn": "দ্বিতীয় অংশে এমন এক বৈপরীত্য আছে, যা অনুবাদে সহজেই চোখ এড়িয়ে যায়: ওয়াশকুরূ লী ওয়ালা তাকফুরূন। আমার প্রতি কৃতজ্ঞ হও, অকৃতজ্ঞ হয়ো না। কুরআনের আরবিতে 'শুকর'-এর উল্টো হলো 'কুফর', যার মূল অর্থ কোনো কিছু ঢেকে দেওয়া। কৃষক যখন বীজ মাটিচাপা দেয়, আরবিতে তার বেলাতেও এই একই ক্রিয়া বসে। এই ছবিতে অকৃতজ্ঞতা মানে গলা চড়িয়ে অস্বীকার করা নয়। চুপচাপ একটা নিয়ামতকে ঢেকে ফেলা, যতক্ষণ না সেটা আর চোখেই পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Before and After",
          "bn": "আগের ও পরের আয়াত"
        },
        "p": [
          {
            "en": "The verse is general in application, with no particular occasion of revelation attached to it, but its position in Surah al-Baqarah is instructive. It closes the long passage on the change of the qiblah, 2:142-152, in which the direction of prayer was turned from Jerusalem to the Sacred Mosque and the community was tested by the objections that followed. Remembrance is being commanded to a people who had just been unsettled publicly.",
            "bn": "আয়াতটির বিধান সবার জন্য, এর সাথে নির্দিষ্ট কোনো শানে নুযূল জড়িত নেই। তবে সূরা আল-বাকারায় এর জায়গাটা অনেক কিছু শেখায়। কিবলা বদলের লম্বা অংশটি (2:142-152) এই আয়াতেই শেষ হয়। সেখানে নামাজের দিক বায়তুল মাকদিস থেকে ঘুরিয়ে মসজিদুল হারামের দিকে করা হয়, আর তারপর যে আপত্তিগুলো ওঠে, তা দিয়ে মুসলিম সমাজের পরীক্ষা হয়। অর্থাৎ স্মরণের হুকুম আসছে এমন এক জাতির কাছে, যারা সবেমাত্র সবার সামনে নাড়া খেয়েছে।"
          },
          {
            "en": "The immediately preceding verse, 2:151, lists what Allah has already given them: a messenger from among themselves who recites His signs, purifies them and teaches them the Book and wisdom. So remember Me arrives as a response to a favour already itemised. The verse that follows, 2:153, tells them to seek help through patience and prayer. Remembrance is placed exactly between a gift received and a hardship expected.",
            "bn": "ঠিক আগের আয়াত 2:151 গুনে গুনে বলে দেয়, আল্লাহ তাঁদের আগেই কী দিয়েছেন: তাঁদেরই মধ্য থেকে একজন রাসূল, যিনি তাঁর আয়াত পড়ে শোনান, তাঁদের পরিশুদ্ধ করেন, আর কিতাব ও হিকমত শেখান। তাই 'আমাকে স্মরণ করো' আসে এমন অনুগ্রহের জবাবে, যার হিসাব এইমাত্র দেওয়া হলো। পরের আয়াত 2:153 তাঁদের বলে, ধৈর্য ও নামাজের মাধ্যমে সাহায্য চাও। স্মরণের জায়গাটা তাই ঠিক মাঝখানে: একদিকে পাওয়া নিয়ামত, অন্যদিকে সামনে আসা কষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Remembers Us With",
          "bn": "তিনি কী দিয়ে স্মরণ করেন"
        },
        "p": [
          {
            "en": "The commentators are careful with the second half of the exchange. Allah's remembrance of a servant is not of the same kind as ours of Him; it is understood as befitting Him, and is explained as mention, favour, protection and reward. A hadith qudsi recorded by al-Bukhari and Muslim supplies the clearest gloss: Allah says He is as His servant expects of Him, that if the servant mentions Him within himself He mentions him within Himself, and if the servant mentions Him in a gathering He mentions him in a better gathering.",
            "bn": "বিনিময়ের দ্বিতীয় অংশ নিয়ে মুফাসসিরগণ খুব সাবধানে কথা বলেন। আল্লাহ বান্দাকে যে স্মরণ করেন, তা আমাদের স্মরণের মতো নয়। তাঁর শানের উপযোগী অর্থেই এটা বুঝতে হয়, আর এর ব্যাখ্যা দেওয়া হয় এভাবে: বান্দার কথা উল্লেখ করা, অনুগ্রহ করা, হেফাজত করা আর প্রতিদান দেওয়া। সবচেয়ে পরিষ্কার ব্যাখ্যা মেলে বুখারী ও মুসলিমে বর্ণিত একটি হাদিসে কুদসীতে। আল্লাহ বলেন, বান্দা তাঁর সম্পর্কে যেমন ধারণা রাখে, তিনি তেমনই। বান্দা যদি মনে মনে তাঁকে স্মরণ করে, তিনিও নিজের কাছে তাকে স্মরণ করেন। আর বান্দা যদি কোনো মজলিসে তাঁকে স্মরণ করে, তিনি তাকে স্মরণ করেন তার চেয়ে উত্তম মজলিসে।"
          },
          {
            "en": "That reading keeps the verse from becoming sentimental. The promise is not that a warm feeling follows every recitation. It is that a person who keeps Allah present is themselves kept present with Allah, and that this happens whether or not it is felt at the time. Many of the early scholars are reported to have said that dhikr done without any sweetness is still dhikr, and that the sweetness usually comes to those who continued anyway.",
            "bn": "এই ব্যাখ্যা আয়াতটিকে নিছক আবেগের কথা হয়ে যেতে দেয় না। প্রতিশ্রুতিটা এই নয় যে প্রতিবার তিলাওয়াতের পর মনে উষ্ণ একটা অনুভূতি জাগবে। প্রতিশ্রুতিটা হলো, যে আল্লাহকে মনে হাজির রাখে, আল্লাহর কাছেও সে হাজির থাকে, সেই মুহূর্তে তা টের পাওয়া যাক বা না যাক। পূর্বসূরি বহু আলিম থেকে বর্ণিত আছে, কোনো স্বাদ ছাড়া করা জিকিরও জিকির। আর স্বাদটা সাধারণত তারাই পায়, যারা স্বাদ না পেয়েও চালিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Was Practised",
          "bn": "যেভাবে আমল করা হতো"
        },
        "p": [
          {
            "en": "The Prophet ﷺ tied remembrance and gratitude together exactly as the verse does. Abu Dawud and an-Nasa'i report that he took Mu'adh ibn Jabal (RA) by the hand, told him he loved him, and instructed him not to leave the end of any prayer without saying: O Allah, help me to remember You, to thank You, and to worship You well. The three requests match the verse's two commands and add the means of fulfilling them.",
            "bn": "স্মরণ আর কৃতজ্ঞতাকে নবী ﷺ ঠিক আয়াতের মতোই এক সুতোয় গেঁথেছেন। আবু দাউদ ও নাসাঈ বর্ণনা করেন, তিনি মু'আয ইবনে জাবাল (রাঃ)-এর হাত ধরে বললেন, আমি তোমাকে ভালোবাসি। তারপর বলে দিলেন, কোনো নামাজের শেষে এই দোয়া পড়া যেন বাদ না পড়ে: হে আল্লাহ, আপনাকে স্মরণ করতে, আপনার শোকর আদায় করতে আর সুন্দরভাবে আপনার ইবাদত করতে আমাকে সাহায্য করুন। তিনটি চাওয়া আয়াতের দুটি হুকুমের সাথে মেলে, সাথে সেগুলো পালনের উপায়টাও জুড়ে দেয়।"
          },
          {
            "en": "His own remembrance was constant rather than occasional. Aishah (RA) reported, as narrated in Muslim, that he used to remember Allah at all his times. The pattern preserved from him is not long isolated sessions but short phrases attached to ordinary actions: waking, dressing, eating, leaving the house, entering the mosque, seeing rain, and lying down again at night. Remembrance was threaded through the day rather than scheduled against it.",
            "bn": "তাঁর নিজের জিকির ছিল সার্বক্ষণিক, মাঝেমধ্যের নয়। মুসলিমে আয়িশা (রাঃ)-এর বর্ণনা আছে, তিনি সব সময় আল্লাহকে স্মরণ করতেন। তাঁর কাছ থেকে যে ধারা আমরা পেয়েছি, তা আলাদা করে বসা লম্বা মজলিস নয়। তা হলো রোজকার কাজের সাথে জোড়া ছোট ছোট বাক্য: ঘুম থেকে ওঠা, কাপড় পরা, খাওয়া, ঘর থেকে বের হওয়া, মসজিদে ঢোকা, বৃষ্টি দেখা, আর রাতে আবার বিছানায় যাওয়া। জিকিরের জন্য দিন থেকে আলাদা সময় কেটে রাখা হতো না, জিকির বোনা থাকত দিনের ভেতরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Gratitude That Names Things",
          "bn": "যে কৃতজ্ঞতা নাম ধরে বলে"
        },
        "p": [
          {
            "en": "Gratitude in the Quran is more than a mood. The classical scholars describe it as having three parts: recognising the blessing as coming from Allah, expressing that with the tongue, and using the blessing in a way its Giver would approve. By that definition a person can feel thankful and still not be grateful, and a person can be grateful in the middle of a difficult week because the third part is an action rather than a feeling.",
            "bn": "কুরআনে কৃতজ্ঞতা কেবল একটি মেজাজ নয়। ধ্রুপদী আলিমগণ একে তিন অংশে বর্ণনা করেন: নিয়ামতটিকে আল্লাহর পক্ষ থেকে এসেছে বলে স্বীকার করা, জিহ্বা দিয়ে তা প্রকাশ করা, এবং নিয়ামতটিকে এমনভাবে ব্যবহার করা যা এর দাতার পছন্দ। এই সংজ্ঞা অনুসারে একজন মানুষ কৃতজ্ঞ বোধ করেও প্রকৃত শোকরগুজার না হতে পারে; আবার কঠিন এক সপ্তাহের মাঝখানেও কেউ শোকরগুজার হতে পারে, কারণ তৃতীয় অংশটি অনুভূতি নয়, কাজ।"
          },
          {
            "en": "This is where the verse becomes practical. Vague thankfulness fades quickly; named thankfulness does not. Naming three specific things at a fixed point in the day, saying alhamdulillah aloud when something ordinary goes right, and spending one blessing deliberately in obedience are all small enough to sustain. The verse warns against covering blessings over, and nothing uncovers a blessing faster than saying what it is.",
            "bn": "এখানে এসে আয়াতটি হাতে-কলমে কাজের হয়ে ওঠে। ঝাপসা কৃতজ্ঞতা তাড়াতাড়ি মিলিয়ে যায়, নাম ধরে বলা কৃতজ্ঞতা যায় না। দিনের একটা নির্দিষ্ট সময়ে তিনটি নির্দিষ্ট নিয়ামতের নাম বলা, সাধারণ কোনো কাজ ঠিকঠাক হলে মুখে 'আলহামদুলিল্লাহ' বলা, আর একটি নিয়ামত জেনে-বুঝে আল্লাহর আনুগত্যে খরচ করা: এগুলো এত ছোট যে নিয়মিত ধরে রাখা যায়। আয়াতটি নিয়ামত ঢেকে ফেলার ব্যাপারে সতর্ক করে। আর নিয়ামতের ওপর থেকে ঢাকনা সরানোর সবচেয়ে দ্রুত উপায় হলো, সেটা কী, তা মুখে বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping the Line Open",
          "bn": "সংযোগটি খোলা রাখা"
        },
        "p": [
          {
            "en": "One reason this verse is loved is that it sets no minimum. There is no threshold of piety to cross before the exchange begins, no state of purity required for the tongue to move. A person returning after years away starts at the same place as anyone else: with a phrase. The verse's grammar makes remembrance the first move, which means the servant is never waiting for permission to begin.",
            "bn": "এই আয়াতটি যে কারণে এত প্রিয়, তার একটি হলো এখানে কোনো ন্যূনতম শর্ত নেই। বিনিময় শুরু হওয়ার আগে পার হওয়ার মতো কোনো তাকওয়ার সীমারেখা নেই, জিহ্বা নড়ার জন্য কোনো বিশেষ পবিত্রতার অবস্থাও আবশ্যক নয়। বছরের পর বছর দূরে থেকে ফিরে আসা মানুষটি শুরু করে ঠিক সেখান থেকেই, যেখান থেকে আর সবাই শুরু করে: একটি বাক্য দিয়ে। আয়াতের ব্যাকরণ স্মরণকে প্রথম পদক্ষেপ বানিয়েছে, অর্থাৎ বান্দাকে শুরু করার জন্য কারও অনুমতির অপেক্ষায় বসে থাকতে হয় না।"
          },
          {
            "en": "What sustains it in a modern week is usually anchoring rather than ambition. Tie a short phrase to something you already do without fail, such as unlocking a phone, waiting at a light or climbing stairs. Keep the morning and evening adhkar short enough that you will not abandon them when tired. The measure of success is not intensity on one day but the line staying open across ordinary ones.",
            "bn": "এ যুগের ব্যস্ত সপ্তাহে জিকির টিকে থাকে সাধারণত বড় সংকল্পে নয়, রোজকার কোনো কাজের সাথে বেঁধে নেওয়ায়। যে কাজ আপনি প্রতিদিন না ভুলে করেন, যেমন ফোনের লক খোলা, সিগন্যালে দাঁড়িয়ে থাকা বা সিঁড়ি ভাঙা, তার সাথে একটা ছোট বাক্য জুড়ে দিন। সকাল-সন্ধ্যার জিকির এতটা ছোট রাখুন, যেন ক্লান্ত দিনেও ছেড়ে না দেন। সফলতার মাপ কোনো এক দিনের জোশ নয়, সাধারণ দিনগুলো জুড়ে সংযোগটা খোলা থাকা।"
          }
        ]
      }
    ]
  },
  "2:153": {
    "sections": [
      {
        "h": {
          "en": "An Equipment List",
          "bn": "সরঞ্জামের তালিকা"
        },
        "p": [
          {
            "en": "The verse opens with the call the Quran reserves for its own people: O you who believe. What follows is not a ruling but equipment: ista'inu, seek help, bi-s-sabri wa-s-salah, through patience and prayer. The verb concedes something first — that believers will need help, that faith exempts no one from weight. The question the verse answers is not whether hardship comes but what to lean on when it does, and it names two supports: one inward, one enacted.",
            "bn": "আয়াতটি শুরু হয় সেই ডাকে, যা কুরআন শুধু নিজের লোকদের জন্য রেখেছে: হে ঈমানদারগণ। এরপর যা আসে তা কোনো বিধান নয়, সরঞ্জাম: 'ইসতাঈনূ', সাহায্য চাও, 'বিস-সাবরি ওয়াস-সালাহ', ধৈর্য ও নামাজের মাধ্যমে। ক্রিয়াটা আগেই একটা কথা মেনে নেয়: মুমিনদেরও সাহায্য লাগবে, ঈমান কাউকে বোঝা থেকে রেহাই দেয় না। কষ্ট আসবে কি না, আয়াত সে প্রশ্নের জবাব দিচ্ছে না। জবাব দিচ্ছে, কষ্ট এলে কীসে ভর দেবেন। আর দুটি অবলম্বনের নাম বলে দেয়: একটি ভেতরের, একটি কাজে করার।"
          },
          {
            "en": "The pairing has already appeared at 2:45, addressed there to the Children of Israel, with the warning that prayer is heavy except for the humble. Repeated now to the believers, it gains an ending the earlier verse lacked: inna Allaha ma'a as-sabirin, Allah is with the patient. The same prescription, but written this time with the companionship attached — as if to say the medicine is old, and the believers are being told what taking it earns.",
            "bn": "এই জোড়া আগেও এসেছে, 2:45 আয়াতে। সেখানে সম্বোধন ছিল বনী ইসরাঈলের প্রতি, সাথে সতর্কবাণী: বিনয়ীরা ছাড়া অন্যদের কাছে নামাজ ভারী। এবার মুমিনদের কাছে একই কথা ফিরে এসে এমন এক সমাপ্তি পায়, যা আগের আয়াতে ছিল না: 'ইন্নাল্লাহা মাআস-সাবিরীন', আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। ব্যবস্থাপত্র সেই একই, তবে এবার সাথে জুড়ে দেওয়া হয়েছে তাঁর সঙ্গ। যেন বলা হচ্ছে: ওষুধ পুরোনো, আর মুমিনদের এবার জানিয়ে দেওয়া হচ্ছে, এ ওষুধ খেলে কী পাওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Sabr Is",
          "bn": "সবর কী"
        },
        "p": [
          {
            "en": "Sabr in Arabic is confinement: holding the self in place. The scholars — as-Sa'di lays it out — divide it into three: patience upon obedience until it is done, patience away from sin until it passes, and patience under the decree without rage at it. All three are active. Nothing in the word means passivity; the person of sabr is holding a line under pressure, which is the opposite of doing nothing.",
            "bn": "আরবিতে 'সবর' মানে আটকে রাখা: নিজেকে জায়গায় ধরে রাখা। আলিমগণ একে তিন ভাগ করেন, আস-সা'দী যেমন গুছিয়ে বলেছেন। আনুগত্যের ওপর সবর, যতক্ষণ না কাজটা শেষ হয়। গুনাহ থেকে দূরে থাকার সবর, যতক্ষণ না সেটা কেটে যায়। আর তাকদীরের ফয়সালায় সবর, তার ওপর ক্ষোভ না ঝেড়ে। তিনটিই সক্রিয়। শব্দটার কোথাও নিষ্ক্রিয়তার অর্থ নেই। সবরকারী মানুষ চাপের মুখে নিজের জায়গা আঁকড়ে ধরে আছেন, আর সেটা হাত গুটিয়ে বসে থাকার ঠিক উল্টো।"
          },
          {
            "en": "Ya'qub (AS) models a crucial distinction: he vowed beautiful patience in 12:83, and in 12:86 said, I only complain of my anguish and my grief to Allah. Complaint to Allah does not break sabr; complaint against Allah does. Nor do tears break it: the Prophet ﷺ wept when his son Ibrahim died and said the eye weeps and the heart grieves, but we say only what pleases our Lord — al-Bukhari relates it from Anas (RA).",
            "bn": "ইয়াকুব (আঃ) নিজের জীবনে একটা জরুরি পার্থক্য দেখিয়ে দেন। 12:83 আয়াতে তিনি সুন্দর সবরের কথা দেন, আর 12:86 আয়াতে বলেন: আমি আমার অস্থিরতা আর দুঃখের নালিশ কেবল আল্লাহর কাছেই করছি। আল্লাহর কাছে নালিশ করলে সবর ভাঙে না, আল্লাহর বিরুদ্ধে নালিশ করলে ভাঙে। চোখের পানিও সবর ভাঙে না। ছেলে ইবরাহীম মারা গেলে নবী ﷺ কেঁদেছিলেন আর বলেছিলেন, চোখ অশ্রু ঝরায়, হৃদয় শোক করে, কিন্তু আমরা কেবল তা-ই বলি, যাতে আমাদের রব সন্তুষ্ট হন। বুখারী এটি আনাস (রাঃ) থেকে বর্ণনা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer as Help",
          "bn": "সাহায্য হিসেবে নামাজ"
        },
        "p": [
          {
            "en": "The second support is salah — named here not as duty but as help. Prayer helps in a way the praying person can verify: it interrupts the siege. Five times a day the matter that fills the horizon is set down, the body is placed before Allah, and the words of 1:5 — You alone we worship, You alone we ask for help — are said by someone who currently means them. Abu Dawud relates that when a matter distressed the Prophet ﷺ, he hastened to prayer.",
            "bn": "দ্বিতীয় অবলম্বন সালাত। এখানে তার নাম এসেছে দায়িত্ব হিসেবে নয়, সাহায্য হিসেবে। নামাজ যেভাবে সাহায্য করে, নামাজি নিজেই তা যাচাই করে দেখতে পারেন: নামাজ অবরোধটা ভেঙে দেয়। দিনে পাঁচবার, যে সমস্যা গোটা দিগন্ত জুড়ে আছে তা নামিয়ে রাখতে হয়, শরীরটাকে দাঁড় করাতে হয় আল্লাহর সামনে। আর 1:5 আয়াতের কথাগুলো, আমরা কেবল তোমারই ইবাদত করি, কেবল তোমারই কাছে সাহায্য চাই, তখন মুখে আনেন এমন একজন, যিনি এই মুহূর্তে কথাটা সত্যিই মন থেকে বলছেন। আবু দাউদ বর্ণনা করেন, কোনো বিষয় নবী ﷺ-কে পেরেশান করলে তিনি তাড়াতাড়ি নামাজে দাঁড়িয়ে যেতেন।"
          },
          {
            "en": "The commentators note the order of the pair: sabr, then salah — the general steadying, then the specific refuge. And they note what prayer presumes: that in hardship the first movement is toward Allah, not merely toward solutions. The one who prays about a problem has already refused to face it alone, and that refusal, repeated five times daily, is itself a treatment for the despair that isolation manufactures.",
            "bn": "মুফাসসিরগণ জোড়াটির ক্রম লক্ষ করেন: আগে সবর, পরে সালাত। প্রথমে সাধারণভাবে নিজেকে স্থির রাখা, তারপর নির্দিষ্ট আশ্রয়। তাঁরা এটাও লক্ষ করেন যে নামাজ একটা কথা ধরে নেয়: কষ্টের সময় প্রথম পা উঠবে আল্লাহর দিকে, শুধু সমাধানের খোঁজে নয়। যে মানুষ কোনো সমস্যা নিয়ে নামাজে দাঁড়ায়, সে আগেই ঠিক করে ফেলেছে, এর মুখোমুখি একা হবে না। দিনে পাঁচবার ফিরে ফিরে আসা এই সিদ্ধান্তই সেই হতাশার চিকিৎসা, যা একাকীত্ব থেকে জন্মায়।"
          }
        ]
      },
      {
        "h": {
          "en": "With the Patient",
          "bn": "ধৈর্যশীলদের সঙ্গে"
        },
        "p": [
          {
            "en": "Inna Allaha ma'a as-sabirin. The scholars distinguish two kinds of withness in the Quran: the general one of knowledge — He is with you wherever you are, as 57:4 says — and a special one of support and protection reserved for particular servants. This verse states the special kind. It is a companionship of aid: help, steadying and care attached to the patient specifically, while His knowledge already covered everyone. The patient person is not merely observed; he is accompanied.",
            "bn": "'ইন্নাল্লাহা মাআস-সাবিরীন'। আলিমগণ কুরআনে আল্লাহর 'সঙ্গে থাকা'কে দুই ভাগে দেখেন। একটি সাধারণ, জ্ঞানের দিক থেকে সঙ্গে থাকা: তোমরা যেখানেই থাকো, তিনি তোমাদের সঙ্গে আছেন, যেমন 57:4 বলে। আরেকটি বিশেষ, সাহায্য আর হেফাজতের সঙ্গে থাকা, যা নির্দিষ্ট বান্দাদের জন্য। এই আয়াত বলছে বিশেষটির কথা। এ হলো সাহায্যের সঙ্গ: সহায়তা, অবিচলতা আর দেখভাল, যা বিশেষ করে ধৈর্যশীলদের জন্য, যদিও তাঁর জ্ঞান আগে থেকেই সবাইকে ঘিরে আছে। ধৈর্যশীল মানুষকে তিনি শুধু দেখছেন না, তার সঙ্গে আছেন।"
          },
          {
            "en": "The verse's neighbours show why the equipment was issued here. 2:154 corrects how the believers speak of those killed in Allah's path. 2:155 promises testing with fear, hunger and loss of wealth, lives and fruits, and sends glad tidings — to the patient. 2:156-157 then hand them their sentence for calamity, inna lillahi wa inna ilayhi raji'un, and name the return: salawat from their Lord, and mercy, and it is they who are guided.",
            "bn": "আশপাশের আয়াতগুলো দেখায়, সরঞ্জামগুলো ঠিক এখানেই কেন দেওয়া হলো। 2:154 শুধরে দেয়, আল্লাহর পথে যাঁরা নিহত হন, তাঁদের নিয়ে মুমিনরা কীভাবে কথা বলবে। 2:155 জানিয়ে দেয়, ভয়, ক্ষুধা আর সম্পদ, প্রাণ ও ফসলের ক্ষতি দিয়ে পরীক্ষা হবে, আর সুসংবাদ পাঠায় ধৈর্যশীলদের। এরপর 2:156-157 তাঁদের হাতে তুলে দেয় বিপদের মুহূর্তের বাক্য, 'ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন', আর বলে দেয় প্রতিদান কী: তাঁদের রবের পক্ষ থেকে সালাওয়াত ও রহমত, আর তাঁরাই হিদায়াতপ্রাপ্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Believer's Whole Weather",
          "bn": "মুমিনের সব ঋতু"
        },
        "p": [
          {
            "en": "Muslim relates from Suhayb (RA) that the Prophet ﷺ said: wondrous is the affair of the believer, for all of his affair is good, and that belongs to no one but the believer — if ease reaches him he is grateful, and that is good for him; if harm reaches him he is patient, and that is good for him. Between that hadith and this verse, no weather is wasted on a believer; both halves of life have a productive response.",
            "bn": "ইমাম মুসলিম সুহাইব (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: মুমিনের ব্যাপারটা বড়ই আশ্চর্যের! তার সব অবস্থাই তার জন্য কল্যাণ, আর এ সৌভাগ্য মুমিন ছাড়া আর কারও নেই। সুখ এলে সে শোকর করে, তাতে তার কল্যাণ হয়; বিপদ এলে সে সবর করে, তাতেও তার কল্যাণ হয়। এই হাদিস আর এই আয়াত পাশাপাশি রাখলে বোঝা যায়, মুমিনের জীবনের কোনো মৌসুমই বৃথা যায় না; সুখ-দুঃখ দুই দিকেরই একটা ফলপ্রসূ জবাব তার কাছে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Practising the Pair",
          "bn": "জোড়াটির চর্চা"
        },
        "p": [
          {
            "en": "The verse's practice is concrete because its nouns are concrete. When the hard thing arrives: first, hold — do not resign, retaliate, publish or decide in the first surge; that holding is sabr. Second, pray — not eventually, but as the Prophet ﷺ did, moving toward salah while the matter is still hot. The order of operations fits how a person actually breaks: speech first, then despair; so the verse steadies the tongue first and then fills it with prayer.",
            "bn": "আয়াতের আমলটা স্পষ্ট, কারণ এর শব্দগুলো স্পষ্ট ও বাস্তব। কঠিন কিছু এসে পড়লে প্রথম কাজ: নিজেকে সামলে রাখা। প্রথম ধাক্কার মধ্যে হাল ছেড়ে দেবেন না, পাল্টা আঘাত করবেন না, সবাইকে জানিয়ে বেড়াবেন না, কোনো সিদ্ধান্তও নেবেন না। এই সামলে রাখাই সবর। দ্বিতীয় কাজ: নামাজ। 'পরে একসময়' নয়; নবী ﷺ যেমন করতেন, বিষয়টা গরম থাকতেই সালাতের দিকে এগিয়ে যাওয়া। এই ক্রম মানুষের ভেঙে পড়ার আসল ধরনের সঙ্গে মেলে: আগে মুখ ফসকায়, তারপর আসে হতাশা। তাই আয়াতটি আগে জবানকে স্থির করে, তারপর তাকে দোয়ায় ভরে দেয়।"
          },
          {
            "en": "And carry the ending as the point: Allah is with the patient. Patience in the Quran is never a lonely road; it is the most accompanied road there is. The relief may be slow, and the test may not lift — 2:155 promised testing, not exemption — but the company is immediate, from the first moment of holding on. That is the exchange the patient have always judged worthwhile: hardship with Him over ease without Him.",
            "bn": "আর আয়াতের শেষ কথাটিকেই মূল কথা হিসেবে ধরে রাখুন: আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। কুরআনে সবর কখনো একাকী পথ নয়; বরং এর চেয়ে বেশি সঙ্গ আর কোনো পথে নেই। স্বস্তি আসতে দেরি হতে পারে, পরীক্ষা না-ও কাটতে পারে; ২:১৫৫ তো পরীক্ষারই কথা দিয়েছে, রেহাইয়ের নয়। কিন্তু সঙ্গটা মেলে সঙ্গে সঙ্গে, ধৈর্য ধরার প্রথম মুহূর্ত থেকেই। ধৈর্যশীলরা চিরকাল এই লেনদেনকেই লাভের মনে করেছেন: তাঁকে ছাড়া আরামের চেয়ে তাঁর সঙ্গে কষ্টই ভালো।"
          }
        ]
      }
    ]
  },
  "2:155-157": {
    "sections": [
      {
        "h": {
          "en": "Testing Announced in Advance",
          "bn": "আগেই ঘোষিত পরীক্ষা"
        },
        "p": [
          {
            "en": "The sentence begins with an emphasis translation can barely carry: wa la-nabluwannakum, We will most certainly test you. Nothing here is conditional. The verse was given to the believers of Madinah in the early years, when insecurity, shortage and death in Allah's path were near realities, and it does not promise them exemption. It promises them information: the tests are coming, they are from Him, and they have a stated shape and a stated exit.",
            "bn": "বাক্যটি শুরু হয়েছে এমন জোর দিয়ে, যা অনুবাদে ধরা প্রায় অসম্ভব: ওয়া লানাবলুওয়ান্নাকুম, আমি অবশ্যই অবশ্যই তোমাদের পরীক্ষা করব। এখানে কোনো 'যদি' নেই। মদীনার প্রথম দিকের মুমিনদের কাছে আয়াতটি এসেছিল এমন সময়ে, যখন নিরাপত্তাহীনতা, অভাব আর আল্লাহর পথে মৃত্যু ছিল চোখের সামনের বাস্তবতা। তবু আয়াত তাদের রেহাইয়ের কথা দেয়নি। দিয়েছে আগাম খবর: পরীক্ষা আসছে, আসছে তাঁরই কাছ থেকে, আর তার চেহারা কেমন হবে এবং বেরোনোর পথ কোথায়, দুটোই বলে দেওয়া আছে।"
          },
          {
            "en": "Its neighbours set the frame. 2:153 has just told the believers to seek help through patience and prayer, and 2:154 has forbidden them to call those killed in Allah's path dead. Then comes the testing verse. The order matters: the equipment is issued before the trial is announced. Patience is not improvised in the middle of grief; it is a discipline the surah has already prescribed before naming what it will be needed for.",
            "bn": "আশপাশের আয়াতগুলোই প্রেক্ষাপট তৈরি করে দেয়। ঠিক আগে ২:১৫৩ মুমিনদের বলেছে সবর আর নামাজের মাধ্যমে সাহায্য চাইতে, আর ২:১৫৪ নিষেধ করেছে আল্লাহর পথে নিহতদের মৃত বলতে। তারপর আসে পরীক্ষার আয়াত। এই ক্রমের গুরুত্ব আছে: পরীক্ষার ঘোষণার আগেই হাতিয়ার হাতে তুলে দেওয়া হয়েছে। শোকের মাঝখানে দাঁড়িয়ে হঠাৎ সবর বানিয়ে নেওয়া যায় না। সবর একটা সাধনা, আর কীসের জন্য তা লাগবে সেটা বলার আগেই সূরাটি তার নির্দেশ দিয়ে রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Something of Fear",
          "bn": "সামান্য কিছু ভয়"
        },
        "p": [
          {
            "en": "The wording is merciful in a way easy to miss: bi-shay'in min al-khawf, with something of fear — a portion, not the whole. Commentators such as Ibn Kathir and as-Sa'di pause on this: whatever any believer faces, it is a measured fraction of what could be, sized to capacity. The list then names five doors through which loss enters a life: fear, hunger, loss of wealth, of lives, and of fruits — the harvests and earnings a person laboured over.",
            "bn": "শব্দচয়নে এমন এক রহমত লুকিয়ে আছে, যা সহজে চোখে পড়ে না: বি-শাইয়িম মিনাল খাওফ, অর্থাৎ ভয়ের কিছুটা দিয়ে। পুরোটা নয়, একটা অংশ। ইবনে কাসীর ও আস-সা'দীর মতো মুফাসসিররা এখানে একটু থামেন। তাঁরা বলেন, কোনো মুমিন যে বিপদের মুখোমুখিই হোক, তা যা হতে পারত তার মাপা একটা অংশমাত্র, তার সাধ্য বুঝে মাপা। এরপর আয়াত গুনে দেয় জীবনে ক্ষতি ঢোকার পাঁচটি দরজা: ভয়, ক্ষুধা, সম্পদের ক্ষতি, প্রাণের ক্ষতি আর ফল-ফসলের ক্ষতি, অর্থাৎ মানুষ যে ফসল আর উপার্জনের পেছনে খেটেছে।"
          },
          {
            "en": "At the end of the announcement stands a surprising word: wa bashshir as-sabirin, and give good news to the patient. Bushra is the vocabulary of victory and glad tidings, and here it is fastened to a list of losses. The verse is teaching a redefinition. For the patient, the trial is not only subtraction; it is the very ground on which the three gifts of 2:157 will be given, and so news of it can honestly be called good.",
            "bn": "ঘোষণার শেষে এসে দাঁড়ায় এক অবাক করা শব্দ: ওয়া বাশশিরিস সাবিরীন, আর ধৈর্যশীলদের সুসংবাদ দাও। বুশরা শব্দটা বিজয় আর খুশির খবরের শব্দ, অথচ আয়াত তাকে জুড়ে দিয়েছে ক্ষতির এক তালিকার সঙ্গে। আয়াতটি আসলে বিষয়টাকে নতুন করে বুঝতে শেখাচ্ছে। ধৈর্যশীলের কাছে পরীক্ষা শুধু হারানো নয়; এর ওপরেই তাকে দেওয়া হবে ২:১৫৭-এর তিনটি উপহার। তাই এর খবরকে সত্যি সত্যিই সুসংবাদ বলা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Patient Say",
          "bn": "ধৈর্যশীলরা যা বলে"
        },
        "p": [
          {
            "en": "2:156 defines the patient not by feeling less but by saying something true when struck: inna lillahi wa inna ilayhi raji'un — we belong to Allah, and to Him we return. The sentence contains two facts. We are His property, so what He reclaims was always His; and we are travelling toward Him, so no loss is final that ends where He is. Grief re-described this way still hurts, but it stops accusing.",
            "bn": "২:১৫৬ ধৈর্যশীলদের চিনিয়ে দেয় কম কষ্ট পাওয়া দিয়ে নয়, বরং আঘাত লাগার মুহূর্তে একটা সত্য কথা বলা দিয়ে: ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন, আমরা আল্লাহরই, আর তাঁরই কাছে ফিরে যাব। এই বাক্যে দুটি সত্য আছে। আমরা তাঁর মালিকানায়; তাই তিনি যা ফিরিয়ে নেন, তা সবসময় তাঁরই ছিল। আর আমরা তাঁর দিকেই চলেছি; তাই যে ক্ষতির শেষ তাঁর কাছে গিয়ে, তা চূড়ান্ত ক্ষতি নয়। শোককে এভাবে দেখলে ব্যথা তবু থাকে, কিন্তু অভিযোগ থেমে যায়।"
          },
          {
            "en": "The verse says idha asabat-hum musibah — when affliction strikes them, not some time afterwards. The Prophet ﷺ said, in the agreed-upon hadith, that patience is only at the first blow. The istirja is therefore meant to be ready before it is needed, kept close like a document one must produce at a checkpoint. Those who must first argue with the decree before accepting it have accepted something, but not quite what this verse describes.",
            "bn": "আয়াত বলছে, ইযা আসাবাতহুম মুসীবাহ, যখন বিপদ তাদের ওপর আঘাত হানে; পরে কোনো এক সময় নয়। বুখারী ও মুসলিমের সর্বসম্মত হাদিসে নবী ﷺ বলেছেন, আসল সবর তো প্রথম আঘাতের মুহূর্তেই। তাই ইস্তিরজার বাক্যটি দরকার পড়ার আগেই তৈরি রাখতে হয়, চেকপোস্টে দেখানোর কাগজের মতো হাতের কাছে। যারা আগে তাকদীরের সঙ্গে তর্ক করে তারপর মেনে নেন, তারাও কিছু একটা মেনেছেন ঠিকই। কিন্তু এই আয়াত যে মেনে নেওয়ার কথা বলে, তা ঠিক এটা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Umm Salamah's Exchange",
          "bn": "উম্মে সালামার বিনিময়"
        },
        "p": [
          {
            "en": "Muslim relates from Umm Salamah (RA) that the Prophet ﷺ taught: no servant is struck by an affliction and says — inna lillahi wa inna ilayhi raji'un; O Allah, reward me in my affliction and give me better in its place — except that Allah rewards him and gives him better. When her husband Abu Salamah (RA) died, she said the words, while wondering who could possibly be better than him.",
            "bn": "ইমাম মুসলিম উম্মে সালামা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ শিখিয়েছেন: কোনো বান্দা বিপদে পড়ে যদি বলে, 'ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন; হে আল্লাহ, আমার এ বিপদে আমাকে প্রতিদান দিন এবং এর বদলে এর চেয়ে উত্তম কিছু দিন', তাহলে আল্লাহ তাকে প্রতিদান দেন এবং এর চেয়ে উত্তম কিছু দান করেন। স্বামী আবু সালামা (রাঃ) মারা গেলে তিনি দোয়াটি পড়লেন, যদিও মনে মনে ভাবছিলেন, আবু সালামার চেয়ে উত্তম আর কে হতে পারে!"
          },
          {
            "en": "Then the Prophet ﷺ himself sent for her in marriage, and she would later tell the story as its own proof: Allah gave her better than Abu Salamah. The narration turns the verse from doctrine into biography. The promise attached to patience is not deferred entirely to the next life; sometimes the replacement arrives in this one, and arrives in a form the mourner could not have had the imagination to request.",
            "bn": "এরপর স্বয়ং নবী ﷺ তাঁকে বিয়ের প্রস্তাব পাঠালেন। পরে তিনি ঘটনাটি বলতেন এর নিজের প্রমাণ হিসেবেই: আল্লাহ তাঁকে আবু সালামার চেয়েও উত্তম দিয়েছেন। এই বর্ণনা আয়াতটিকে তত্ত্বের পাতা থেকে তুলে এনে জীবনের গল্পে বসিয়ে দেয়। সবরের সঙ্গে জুড়ে থাকা প্রতিশ্রুতির সবটাই আখিরাতের জন্য তোলা থাকে না। কখনো কখনো বদলটা এই দুনিয়াতেই আসে, আর এমন রূপে আসে, যা চেয়ে নেওয়ার কথা শোকার্ত মানুষটি কল্পনাও করতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Salawat, Mercy, Guidance",
          "bn": "সালাওয়াত, রহমত, হিদায়াত"
        },
        "p": [
          {
            "en": "2:157 names what descends on such people: salawat from their Lord, and mercy, and the declaration that they are the guided. That Allah should send salawat — His praise and commendation — upon a grieving servant is an extraordinary honour, and the commentators note that patience is here itself called guidance: it is those people, the verse says, who are the muhtadun. Losing rightly turns out to be one of the ways of being found.",
            "bn": "২:১৫৭ জানিয়ে দেয় এমন মানুষদের ওপর কী নেমে আসে: তাদের রবের পক্ষ থেকে সালাওয়াত, রহমত, আর এই ঘোষণা যে তারাই হিদায়াতপ্রাপ্ত। শোকে কাতর এক বান্দার ওপর আল্লাহ নিজে সালাওয়াত পাঠাবেন, অর্থাৎ তার প্রশংসা ও স্বীকৃতি দেবেন, এ এক অসাধারণ সম্মান। মুফাসসিররা আরও লক্ষ করেন, এখানে সবরকেই হিদায়াত গণ্য করা হয়েছে, কারণ আয়াত এদেরকেই বলছে মুহতাদুন। দেখা যাচ্ছে, ঠিকভাবে হারাতে পারাও পথ খুঁজে পাওয়ার একটি উপায়।"
          },
          {
            "en": "Other verses complete the picture. 39:10 promises the patient their reward without measure, the only deed given that open-ended wage, and 64:11, revealed about calamity, says that whoever believes in Allah, He guides his heart. The lived practice is unglamorous: learn the words now, say them at the first blow, ask for the replacement, and let the ownership statement do its slow work on the accusation grief wants to make.",
            "bn": "অন্য আয়াতগুলো ছবিটা পূর্ণ করে। ৩৯:১০ ধৈর্যশীলদের বেহিসাব প্রতিদানের ওয়াদা দেয়; এমন সীমাহীন পারিশ্রমিক আর কোনো আমলের জন্য বলা হয়নি। আর বিপদ প্রসঙ্গে নাজিল হওয়া ৬৪:১১ বলে, যে আল্লাহর ওপর ঈমান আনে, আল্লাহ তার অন্তরকে পথ দেখান। বাস্তব আমলটা একেবারেই সাদামাটা: দোয়ার কথাগুলো এখনই শিখে নিন, প্রথম আঘাতেই বলুন, বদলে উত্তম কিছু চেয়ে নিন। তারপর 'আমরা আল্লাহরই' কথাটিকে সময় দিন; শোক যে অভিযোগ তুলতে চায়, কথাটি ধীরে ধীরে তাকে থামিয়ে দেবে।"
          }
        ]
      }
    ]
  },
  "2:163": {
    "sections": [
      {
        "h": {
          "en": "One Sentence, the Whole Creed",
          "bn": "এক বাক্যে গোটা আকীদা"
        },
        "p": [
          {
            "en": "Wa ilahukum ilahun wahid — and your God is one God. Then the negation and affirmation that define Islam: there is no deity except Him, ar-Rahman, ar-Rahim. The verse is short enough to memorize in a minute, yet the commentators treat it as one of the Quran's fullest statements of tawheed: it names the claim, excludes every rival, and immediately tells you what the One you now worship alone is like.",
            "bn": "ওয়া ইলাহুকুম ইলাহুন ওয়াহিদ, আর তোমাদের ইলাহ এক ইলাহ। এরপর আসে সেই না-বাচক ও হ্যাঁ-বাচক ঘোষণা, যা ইসলামের পরিচয়: তিনি ছাড়া কোনো ইলাহ নেই, তিনি আর-রাহমান, আর-রাহীম। আয়াতটি এত ছোট যে এক মিনিটেই মুখস্থ হয়ে যায়, অথচ মুফাসসিররা একে কুরআনে তাওহিদের সবচেয়ে পূর্ণাঙ্গ ঘোষণাগুলোর একটি মনে করেন। আয়াতটি দাবিটা উচ্চারণ করে, প্রত্যেক প্রতিদ্বন্দ্বীকে বাতিল করে, আর সঙ্গে সঙ্গে জানিয়ে দেয়, যাঁর একার ইবাদত আপনি এখন করছেন, তিনি কেমন।"
          },
          {
            "en": "Ilah does not mean creator only; the mushrikun of Makkah agreed Allah created the heavens and the earth. Ilah is the one worshipped — loved, feared, hoped in, obeyed at the deepest level. So the verse's claim is not settled by conceding a Creator exists. It is settled only when worship, in all those inward senses, is actually given to Him alone.",
            "bn": "ইলাহ মানে শুধু স্রষ্টা নয়। মক্কার মুশরিকরাও মানত যে আসমান-যমীন আল্লাহই সৃষ্টি করেছেন। ইলাহ তিনি, যাঁর ইবাদত করা হয়: অন্তরের সবচেয়ে গভীর থেকে যাঁকে ভালোবাসা হয়, ভয় করা হয়, যাঁর কাছে আশা রাখা হয়, যাঁর আনুগত্য করা হয়। তাই একজন স্রষ্টা আছেন, এটুকু মেনে নিলেই আয়াতের দাবি পূরণ হয় না। দাবি পূরণ হয় তখনই, যখন অন্তরের এই সব অর্থে ইবাদত সত্যিই শুধু তাঁকেই দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Claim, Then the Evidence",
          "bn": "দাবি, তারপর প্রমাণ"
        },
        "p": [
          {
            "en": "Placement carries argument in the Quran. Immediately after this verse comes 2:164, which sweeps through the heavens and the earth, night and day, the ships, the rain, the scattered creatures, the winds and the clouds, and calls them signs for a people who reason. The commentators read the pair together: 2:163 states that your God is one, and 2:164 lays out the evidence in front of every eye that will look.",
            "bn": "কুরআনে আয়াতের অবস্থানও একটা যুক্তি। এই আয়াতের ঠিক পরেই আসে ২:১৬৪। সেখানে একে একে আসে আসমান-যমীন, রাত-দিন, জাহাজ, বৃষ্টি, ছড়িয়ে থাকা প্রাণী, বাতাস আর মেঘ, আর এসবকে বলা হয় বিবেকবান সম্প্রদায়ের জন্য নিদর্শন। মুফাসসিররা দুটি আয়াত একসঙ্গে পড়েন: ২:১৬৩ ঘোষণা দেয়, তোমাদের ইলাহ এক; আর ২:১৬৪ সেই দাবির প্রমাণ সাজিয়ে রাখে প্রত্যেক চোখের সামনে, যে চোখ তাকাতে রাজি।"
          },
          {
            "en": "Two verses later, 2:165 describes the failure the claim excludes: people who take rivals besides Allah and love them as Allah should be loved — while those who believe are stronger in love for Allah. The sequence moves from doctrine to evidence to the heart, which is where the Quran always locates shirk and tawheed alike: not merely in what is said, but in what is loved most.",
            "bn": "দুই আয়াত পরে ২:১৬৫ সেই ব্যর্থতার কথা বলে, যা এই দাবি নাকচ করে দেয়: কিছু মানুষ আল্লাহর পাশাপাশি সমকক্ষ দাঁড় করায় এবং তাদের এমনভাবে ভালোবাসে, যেমন ভালোবাসা কেবল আল্লাহর প্রাপ্য। অথচ যারা ঈমান এনেছে, আল্লাহর প্রতি তাদের ভালোবাসা আরও প্রবল। এভাবে কথা এগোয় আকীদা থেকে প্রমাণে, প্রমাণ থেকে অন্তরে। কুরআন শিরক আর তাওহিদ দুটোকেই সবসময় এই অন্তরেই খোঁজে: শুধু মুখে কী বলা হয় তাতে নয়, সবচেয়ে বেশি কী ভালোবাসা হয় তাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Oneness Paired With Mercy",
          "bn": "একত্বের সঙ্গে রহমত"
        },
        "p": [
          {
            "en": "The verse could have closed with names of power — the Mighty, the Compeller — and the theology would stand. Instead it closes with ar-Rahman ar-Rahim, the two names of mercy the Quran opens with in 1:1-5, and the pairing is deliberate teaching. The One who tolerates no rival in worship is not a distant force to be appeased; He is overflowing in mercy toward the very servants He commands.",
            "bn": "আয়াতটি ক্ষমতার নাম দিয়ে শেষ হতে পারত, যেমন পরাক্রমশালী, মহাপ্রতাপশালী; তাতেও আকীদায় কোনো কমতি হতো না। কিন্তু শেষ হয়েছে আর-রাহমান আর-রাহীম দিয়ে, রহমতের সেই দুই নাম, যা দিয়ে কুরআন ১:১-৫ অংশে শুরু হয়। এই জোড় ভেবেচিন্তে দেওয়া শিক্ষা। ইবাদতে যিনি কোনো শরিক সহ্য করেন না, তিনি এমন কোনো দূরের শক্তি নন, যাঁকে কোনোরকমে খুশি রাখতে হয়। যে বান্দাদের তিনি হুকুম দেন, তাদের প্রতিই তাঁর রহমত উপচে পড়ছে।"
          },
          {
            "en": "This changes what exclusive worship feels like from the inside. If the only God were only powerful, tawheed would be submission to strength. Because the only God is the Most Merciful, tawheed is also trust, closeness and relief: every need brought to one door, and behind that one door, mercy. The commentators note that the verse gives hope its foundation in the same breath that it removes every rival.",
            "bn": "এতে একনিষ্ঠ ইবাদতের ভেতরের অনুভূতিটাই বদলে যায়। একমাত্র ইলাহ যদি শুধু ক্ষমতাবান হতেন, তাওহিদ হতো শক্তির কাছে মাথা নোয়ানো মাত্র। কিন্তু একমাত্র ইলাহ যেহেতু পরম দয়ালু, তাওহিদ তাই ভরসাও, নৈকট্যও, স্বস্তিও। সব প্রয়োজন নিয়ে যেতে হয় একটিই দরজায়, আর সেই দরজার ওপাশে আছে রহমত। মুফাসসিররা লক্ষ করেন, আয়াতটি একদিকে সব শরিককে সরিয়ে দেয়, আর একই সঙ্গে আশার ভিত গেঁথে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Quran's Own Argument",
          "bn": "কুরআনের নিজস্ব যুক্তি"
        },
        "p": [
          {
            "en": "The Quran does not leave oneness as bare assertion. 21:22 argues: had there been in the heavens and the earth gods besides Allah, both would have fallen into ruin — two absolute wills cannot share one universe that runs this smoothly. And 23:91 adds: had there been gods with Him, each god would have taken away what it created and sought to overcome the others. The seamlessness of the world testifies to a single hand.",
            "bn": "কুরআন একত্বকে নিছক ঘোষণা করেই থেমে থাকে না। ২১:২২ যুক্তি দেয়: আসমান ও যমীনে আল্লাহ ছাড়া আরও ইলাহ থাকলে দুটোই ধ্বংস হয়ে যেত। দুটি সর্বময় ইচ্ছা এমন নিখুঁতভাবে চলা একটি জগৎ ভাগাভাগি করে চালাতে পারে না। আর ২৩:৯১ যোগ করে: তাঁর সঙ্গে অন্য ইলাহ থাকলে প্রত্যেক ইলাহ নিজের সৃষ্টি নিয়ে আলাদা হয়ে যেত, আর একজন আরেকজনের ওপর চড়াও হতে চাইত। জগৎ যে কোথাও জোড়াতালি ছাড়াই চলছে, এটাই সাক্ষ্য দেয় যে এর পেছনে একটিই হাত।"
          },
          {
            "en": "This is why 2:163 can stand beside 2:164 without strain: the order of nature is not just beautiful, it is evidence. One law from the depth of the sea to the edge of the sky, one water feeding a thousand kinds of fruit, one pattern of night and day for every land — a plurality of gods would show seams, and there are none.",
            "bn": "এ কারণেই ২:১৬৩ কোনো টানাপোড়েন ছাড়াই ২:১৬৪-এর পাশে দাঁড়াতে পারে। প্রকৃতির শৃঙ্খলা শুধু সুন্দরই নয়, এটা প্রমাণও। সাগরের তলা থেকে আকাশের কিনারা পর্যন্ত একই নিয়ম; একই পানিতে হাজার রকম ফল ফলে; প্রতিটি দেশে রাত-দিনের একই ছন্দ। ইলাহ একাধিক হলে কোথাও না কোথাও জোড়ার দাগ চোখে পড়ত, অথচ কোথাও তেমন কোনো দাগ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "One God, One Direction",
          "bn": "এক ইলাহ, এক অভিমুখ"
        },
        "p": [
          {
            "en": "Tawheed simplifies a life. Whoever serves many masters is pulled apart by them, as 39:29 pictures in its parable of the slave owned by quarrelling partners against the slave owned by one man — are the two equal? Fear of one God replaces a thousand scattered anxieties about people, luck and loss; hope in one God replaces the exhausting courting of everyone who might be useful.",
            "bn": "তাওহিদ জীবনকে সহজ করে দেয়। যে বহু মনিবের সেবা করে, মনিবরা তাকে টেনে টুকরো টুকরো করে ফেলে। ৩৯:২৯ এই ছবিটাই আঁকে এক উপমায়: এক গোলামের মালিক ঝগড়াটে কয়েকজন শরিক, আরেক গোলামের মালিক একজনই। এই দুজন কি সমান? এক আল্লাহর ভয় মানুষ, ভাগ্য আর লোকসান নিয়ে হাজারো ছড়ানো দুশ্চিন্তার জায়গা নিয়ে নেয়। আর এক আল্লাহর ওপর আশা মানুষকে মুক্তি দেয় কাজে আসতে পারে এমন সবার মন জুগিয়ে চলার ক্লান্তিকর চেষ্টা থেকে।"
          },
          {
            "en": "The verse also guards against the subtler rivals that 2:165 warns of — not carved idols but loves that outrank Allah: wealth, status, opinion, ambition. The test of ilahun wahid is not whether we can recite it but what we obey when obedience becomes costly, and what we reach for first when we are afraid.",
            "bn": "যে সূক্ষ্ম প্রতিদ্বন্দ্বীদের ব্যাপারে ২:১৬৫ সতর্ক করে, আয়াতটি তাদের থেকেও আগলে রাখে। এরা খোদাই করা মূর্তি নয়, বরং এমন সব ভালোবাসা, যা আল্লাহর চেয়েও ওপরে জায়গা করে নেয়: সম্পদ, পদমর্যাদা, লোকে কী বলবে, উচ্চাকাঙ্ক্ষা। ইলাহুন ওয়াহিদের আসল পরীক্ষা এটা নয় যে আমরা কথাটা মুখে বলতে পারি কি না। পরীক্ষা হলো, আনুগত্যের দাম যখন চড়া হয় তখন আমরা কার কথা মানি, আর ভয় পেলে সবার আগে কার দিকে হাত বাড়াই।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping It Daily",
          "bn": "প্রতিদিনের চর্চায়"
        },
        "p": [
          {
            "en": "La ilaha illa Huwa is the sentence Islam begins with, and the tradition keeps it on the tongue: in the adhan, in the tashahhud of every prayer, in the remembrances of morning and evening. Repetition is not redundancy; it is maintenance. Each recitation re-centres the heart that has drifted during the day toward smaller fears and smaller hopes.",
            "bn": "লা ইলাহা ইল্লা হুয়া, এই বাক্য দিয়েই ইসলামের শুরু, আর সুন্নাহ একে সবসময় মুখে রাখার ব্যবস্থা করেছে: আজানে, প্রতিটি নামাজের তাশাহহুদে, সকাল-সন্ধ্যার জিকিরে। বারবার বলা বাড়তি কিছু নয়; এ হলো যত্ন নেওয়া। দিনের মধ্যে মন ছোট ছোট ভয় আর ছোট ছোট আশার দিকে সরে যায়; প্রতিবারের উচ্চারণ সেই মনকে আবার কেন্দ্রে ফিরিয়ে আনে।"
          },
          {
            "en": "Let the verse also set the tone of your asking. Because He is one, take every need to Him first, before any created door; because He is ar-Rahman ar-Rahim, take it to Him expecting kindness, not reluctance. That is tawheed made practice: absolute oneness, met with all-encompassing mercy, worshipped without rivals and approached without dread.",
            "bn": "আপনার চাওয়ার সুরও এই আয়াত দিয়েই ঠিক করুন। তিনি এক, তাই যেকোনো প্রয়োজন কোনো সৃষ্টির দরজায় নেওয়ার আগে প্রথমে তাঁর কাছে নিন। তিনি আর-রাহমান আর-রাহীম, তাই তাঁর কাছে যান দয়া পাওয়ার আশা নিয়ে, তিনি বিরক্ত হবেন এমন ভয় নিয়ে নয়। এটাই আমলে পরিণত তাওহিদ: নিরঙ্কুশ একত্ব, যার সঙ্গে মিশে আছে সবকিছু ঘিরে থাকা রহমত। তাঁর ইবাদতে কোনো শরিক নেই, আর তাঁর কাছে যেতে কোনো ভয় নেই।"
          }
        ]
      }
    ]
  },
  "2:164": {
    "sections": [
      {
        "h": {
          "en": "The Evidence After the Claim",
          "bn": "দাবির পর প্রমাণ"
        },
        "p": [
          {
            "en": "The verse before this one, 2:163, makes the largest claim a sentence can carry: your God is one God; there is no deity except Him. This verse immediately opens the case file. Indeed, in the creation of the heavens and the earth, the alternation of night and day, the ships, the rain, the creatures, the winds and the clouds — are signs for a people who reason. Assertion first, then evidence, laid out for any mind willing to work.",
            "bn": "এর আগের আয়াত ২:১৬৩ এমন এক দাবি করেছে, যার চেয়ে বড় দাবি কোনো বাক্যে আঁটে না: তোমাদের ইলাহ এক ইলাহ; তিনি ছাড়া কোনো ইলাহ নেই। এই আয়াত সঙ্গে সঙ্গে মামলার নথি খুলে বসে: নিশ্চয় আসমান-যমীনের সৃষ্টিতে, রাত-দিনের পালাবদলে, জাহাজে, বৃষ্টিতে, প্রাণীকুলে, বাতাসে আর মেঘে নিদর্শন রয়েছে বিবেকবান সম্প্রদায়ের জন্য। আগে ঘোষণা, তারপর প্রমাণ; আর সেই প্রমাণ সাজানো আছে যেকোনো মনের সামনে, যে মন খাটতে রাজি।"
          },
          {
            "en": "The commentators note the pairing as a model of how the Quran argues. It does not demand belief in oneness as a blind leap; it points at the world and says: examine. The verse's closing phrase — li-qawmin ya'qilun, for a people who use reason — makes intellect the intended audience. Reason, in the Quran, is not faith's rival to be subdued but faith's instrument, invited to do its best work on the evidence.",
            "bn": "মুফাসসিররা এই জোড়াকে কুরআনের যুক্তি দেওয়ার ধরনের একটি নমুনা হিসেবে দেখেন। কুরআন চোখ বুজে একত্বে বিশ্বাস করতে বলে না; জগতের দিকে আঙুল তুলে বলে: যাচাই করে দেখো। আয়াতের শেষ কথা লি-কাওমিন ইয়াকিলূন, যারা বিবেক খাটায় তাদের জন্য। অর্থাৎ বুদ্ধিই এখানে আসল শ্রোতা। কুরআনে বিবেক ঈমানের প্রতিপক্ষ নয় যে তাকে দমিয়ে রাখতে হবে; বরং ঈমানের হাতিয়ার, যাকে ডাকা হয়েছে প্রমাণের ওপর নিজের সেরাটা ঢেলে দিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Signs the Verse Gathers",
          "bn": "আয়াতে গাঁথা নিদর্শনসমূহ"
        },
        "p": [
          {
            "en": "Count what the verse gathers: the creation of the heavens and the earth; the alternation of night and day; the ships running through the sea with what benefits people; the water Allah sends down, giving life to the earth after its death; every creature He has scattered through it; the turning of the winds; and the clouds held subjected between sky and earth. From cosmic architecture down to a drifting cloud, one unbroken chain of evidence.",
            "bn": "গুনে দেখুন আয়াতটি কী কী এক জায়গায় এনেছে: আসমান-যমীনের সৃষ্টি; রাত-দিনের পালাবদল; মানুষের কাজে লাগে এমন জিনিস নিয়ে সাগরে চলা জাহাজ; আকাশ থেকে আল্লাহর পাঠানো পানি, যা দিয়ে তিনি মরে যাওয়া যমীনকে আবার জীবিত করেন; যমীনে ছড়িয়ে দেওয়া সব রকম প্রাণী; বাতাসের দিক বদল; আর আসমান-যমীনের মাঝে অনুগত করে রাখা মেঘ। মহাবিশ্বের বিশাল কাঠামো থেকে ভেসে চলা এক টুকরো মেঘ পর্যন্ত, প্রমাণের একটিই অটুট শিকল।"
          },
          {
            "en": "The selection has a quiet logic. Some signs are pure divine act — sky, rain, life. One is human craft: the ship, built by hands yet carried only because water bears weight, winds blow and stars guide, all by His ordering. Including it teaches that technology sails inside His laws, never outside them, and that human skill, honestly traced, ends at dependencies no human made.",
            "bn": "বাছাইয়ের পেছনে একটা নীরব যুক্তি আছে। কিছু নিদর্শন সরাসরি আল্লাহর কাজ: আকাশ, বৃষ্টি, জীবন। একটি মানুষের হাতের কারিগরি: জাহাজ। মানুষ তা বানায় ঠিকই, কিন্তু ভেসে থাকে কেবল এজন্য যে পানি ভার বয়, বাতাস বয়ে চলে, তারা পথ দেখায়, আর এসবই তাঁর ব্যবস্থায়। জাহাজকে তালিকায় রেখে আয়াত শেখায়, প্রযুক্তি চলে তাঁর নিয়মের ভেতরেই, কখনো বাইরে নয়। মানুষের দক্ষতার শিকড় সৎভাবে খুঁজতে গেলে শেষে গিয়ে ঠেকে এমন সব জিনিসে, যা কোনো মানুষ বানায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ordinary Made Loud",
          "bn": "সাধারণ যখন সরব"
        },
        "p": [
          {
            "en": "Nothing in the list is exotic. No one alive has missed a sunrise, a rainfall or a cloud; that is precisely the point. The Quran locates its evidence in what familiarity has silenced, and the word it uses for these things — ayat, signs — is the same word used for its own verses. Scholars have long drawn the conclusion: creation and revelation are two books from one Author, and this verse is where a page of each is held up together.",
            "bn": "তালিকার কোনো কিছুই দুর্লভ নয়। জীবনে সূর্যোদয়, বৃষ্টি বা মেঘ দেখেনি, এমন মানুষ নেই; আর ঠিক এটাই আসল কথা। কুরআন তার প্রমাণ রাখে সেসব জিনিসে, যেগুলো চিরচেনা বলে আমরা আর খেয়ালই করি না। এসবকে কুরআন যে শব্দে ডাকে, আয়াত বা নিদর্শন, নিজের বাক্যগুলোকেও সেই একই নামে ডাকে। আলিমরা বহু আগেই এ থেকে সিদ্ধান্ত টেনেছেন: সৃষ্টি আর ওহি একই রচয়িতার দুটি কিতাব, আর এই আয়াতে দুটিরই একটি করে পাতা পাশাপাশি মেলে ধরা হয়েছে।"
          },
          {
            "en": "Familiarity is treated as a veil to be lifted, not a verdict of insignificance. The rain that bores a commuter fed every civilization; the night that merely ends a day rests every body on earth. 30:21-24 works the same method on sleep, lightning and the love between spouses — ordinary mercies re-announced as signs — each paragraph ending by naming the audience able to hear it: those who listen, those who reason, those who reflect.",
            "bn": "চিরচেনা হওয়াকে এখানে দেখা হয় এমন এক পর্দা হিসেবে, যা সরাতে হবে; এটা তুচ্ছতার রায় নয়। যে বৃষ্টি অফিসযাত্রীর বিরক্তি জাগায়, সেই বৃষ্টিই প্রতিটি সভ্যতার মুখে খাবার জুগিয়েছে। যে রাতকে আমরা শুধু দিনের শেষ ভাবি, সেই রাতই পৃথিবীর প্রতিটি শরীরকে বিশ্রাম দেয়। ৩০:২১-২৪ একই পদ্ধতি খাটায় ঘুম, বিদ্যুৎ চমক আর স্বামী-স্ত্রীর ভালোবাসার ওপর। প্রতিদিনের এসব রহমতকে নতুন করে নিদর্শন বলে ঘোষণা করে, আর প্রতিটি অংশের শেষে বলে দেয় কারা তা ধরতে পারবে: যারা শোনে, যারা বিবেক খাটায়, যারা চিন্তা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Rain and the Resurrection",
          "bn": "বৃষ্টি ও পুনরুত্থান"
        },
        "p": [
          {
            "en": "One sign in the list carries doctrine as well as wonder: the water that gives life to the earth after its death. The Quran repeatedly holds this up as the visible rehearsal of resurrection; 35:9 completes the analogy in so many words — He drives the clouds to a dead land and revives the earth with it: thus is the resurrection. Every rainfall re-stages what 36:33 also names a sign: the dead earth, revived, from which they eat.",
            "bn": "তালিকার একটি নিদর্শন বিস্ময়ের পাশাপাশি আকীদার কথাও বহন করে: সেই পানি, যা দিয়ে মৃত যমীন আবার প্রাণ পায়। কুরআন বারবার একে দেখায় পুনরুত্থানের চোখে দেখা মহড়া হিসেবে। ৩৫:৯ উপমাটি সরাসরি পূর্ণ করে দেয়: তিনি মেঘকে হাঁকিয়ে নেন মৃত ভূখণ্ডের দিকে, তারপর তা দিয়ে যমীনকে জীবিত করেন; পুনরুত্থানও এমনই। প্রতিটি বৃষ্টি নতুন করে সেই দৃশ্যই দেখায়, যাকে ৩৬:৩৩-ও নিদর্শন বলেছে: মৃত যমীন, যাকে তিনি জীবিত করেন, আর যা থেকে তারা খায়।"
          },
          {
            "en": "The mufassirun read the whole list this way, as evidence with directions. Upward, it establishes the Creator's oneness — the seamless coordination of sky, sea and wind is the argument of 21:22 made visible. Forward, it establishes His power to repeat what He began. The verse thus quietly carries the Quran's two great contested claims, tawheed and resurrection, on the back of phenomena no denier could deny experiencing.",
            "bn": "মুফাসসিররা পুরো তালিকাটাই এভাবে পড়েন: এমন প্রমাণ হিসেবে, যা দুই দিকে ইঙ্গিত করে। ওপরের দিকে, এটি স্রষ্টার একত্ব প্রমাণ করে; আকাশ, সাগর আর বাতাসের নিখুঁত মিলমিশ যেন ২১:২২-এর যুক্তিকেই চোখের সামনে এনে দেয়। সামনের দিকে, এটি প্রমাণ করে, তিনি যা প্রথমবার করেছেন তা আবার করার ক্ষমতা তাঁর আছে। কুরআনের যে দুটি বড় দাবি নিয়ে সবচেয়ে বেশি বিরোধ, তাওহিদ আর পুনরুত্থান, আয়াতটি নীরবে সে দুটিকে দাঁড় করিয়ে দেয় এমন সব ঘটনার ওপর, যেগুলো নিজে দেখার কথা কোনো অস্বীকারকারীও অস্বীকার করতে পারত না।"
          }
        ]
      },
      {
        "h": {
          "en": "For a People Who Reason",
          "bn": "বিবেকবানদের জন্য"
        },
        "p": [
          {
            "en": "Li-qawmin ya'qilun. The Quran ends its sign-verses with varied conditions — for those who reflect, who listen, who are certain — and the variation is deliberate, matching each set of signs to the faculty that best receives it. Here, where the signs form an interlocking system, the summons is to aql, reason: the capacity that connects, infers and refuses to believe that an unbroken order assembled itself from nowhere.",
            "bn": "লি-কাওমিন ইয়াকিলূন। কুরআন তার নিদর্শনের আয়াতগুলো শেষ করে নানা শর্ত দিয়ে: যারা চিন্তা করে, যারা শোনে, যারা দৃঢ় বিশ্বাস রাখে। এই ভিন্নতা ইচ্ছাকৃত; প্রতিটি নিদর্শনের দলকে মেলানো হয় সেই ক্ষমতার সঙ্গে, যা তা সবচেয়ে ভালোভাবে ধরতে পারে। এখানে নিদর্শনগুলো একে অন্যের সঙ্গে জুড়ে একটি পূর্ণ ব্যবস্থা গড়ে, তাই ডাক দেওয়া হয়েছে আকলকে, অর্থাৎ বিবেককে। আকল সেই ক্ষমতা, যা এক জিনিসকে আরেক জিনিসের সঙ্গে মেলায়, সিদ্ধান্তে পৌঁছায়, আর এটা মানতে রাজি হয় না যে এমন অটুট শৃঙ্খলা শূন্য থেকে নিজে নিজে জোড়া লেগে গেছে।"
          },
          {
            "en": "3:190-191 paints the people who answer the summons: in the creation of the heavens and the earth and the alternation of night and day are signs for those of understanding — who remember Allah standing, sitting and on their sides, and reflect on creation until it issues in speech: our Lord, You did not create this in vain. Observation, remembrance, reflection, then prayer — a complete method in two verses.",
            "bn": "৩:১৯০-১৯১ সেই মানুষদের ছবি আঁকে, যারা এই ডাকে সাড়া দেয়: আসমান-যমীনের সৃষ্টিতে আর রাত-দিনের পালাবদলে বোধসম্পন্নদের জন্য নিদর্শন রয়েছে। তারা দাঁড়িয়ে, বসে, কাত হয়ে শুয়ে আল্লাহকে স্মরণ করে, আর সৃষ্টি নিয়ে ভাবতে থাকে, যতক্ষণ না সেই ভাবনা মুখে কথা হয়ে বেরিয়ে আসে: হে আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি। দেখা, জিকির, চিন্তা, তারপর দোয়া: মাত্র দুই আয়াতে একটি পূর্ণ পদ্ধতি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Habit of Looking",
          "bn": "দেখার অভ্যাস"
        },
        "p": [
          {
            "en": "The verse's practice is tafakkur, and it needs scheduling like anything precious. Take one item from the list per week and actually look: follow one rainfall from cloud to soil; learn what keeps a laden ship above thousands of metres of water; notice which creatures share your street. End each looking the way 3:191 ends, with the mind's discovery handed up as praise.",
            "bn": "এই আয়াতের আমল হলো তাফাক্কুর, আর যেকোনো মূল্যবান জিনিসের মতো এর জন্যও সময় বেঁধে রাখতে হয়। প্রতি সপ্তাহে তালিকা থেকে একটা জিনিস বেছে নিন, আর সত্যিই চোখ মেলে দেখুন। একটা বৃষ্টিকে মেঘ থেকে মাটি পর্যন্ত অনুসরণ করুন। জেনে নিন, হাজার হাজার মিটার গভীর পানির ওপর মালবোঝাই জাহাজকে কী ভাসিয়ে রাখে। খেয়াল করুন, আপনার পাড়ায় আর কোন কোন প্রাণী আপনার সঙ্গে থাকে। প্রতিবারের দেখা শেষ করুন ৩:১৯১-এর মতো করে: মন যা আবিষ্কার করল, তা প্রশংসা হয়ে ওপরে উঠে যাক।"
          },
          {
            "en": "Done steadily, the habit converts the daily commute into a gallery and dulls the false division between thinking and worship. The verse asked for a people who reason; it is inviting you to be one of them — someone for whom the sky is no longer background, the rain no longer weather only, and every ordinary thing has resumed its first job: pointing, insistently and precisely, at its Maker.",
            "bn": "নিয়মিত করতে থাকলে এই অভ্যাস রোজকার যাতায়াতকে একটা প্রদর্শনশালায় বদলে দেয়, আর চিন্তা ও ইবাদতের মাঝের মিথ্যা দেয়ালটা ক্ষয়ে যেতে থাকে। আয়াতটি বিবেকবান এক সম্প্রদায়ের কথা বলেছে; আপনাকে তাদেরই একজন হওয়ার দাওয়াত দিচ্ছে। এমন একজন, যার কাছে আকাশ আর শুধু পটভূমি নয়, বৃষ্টি আর শুধু আবহাওয়া নয়। প্রতিটি সাধারণ জিনিস তার কাছে আবার নিজের প্রথম কাজে ফিরে গেছে: বারবার, নিখুঁতভাবে নিজের স্রষ্টার দিকে আঙুল তুলে দেখানো।"
          }
        ]
      }
    ]
  },
  "2:165": {
    "sections": [
      {
        "h": {
          "en": "Rivals in the Heart",
          "bn": "হৃদয়ের ভেতরের প্রতিদ্বন্দ্বী"
        },
        "p": [
          {
            "en": "The verse opens with a diagnosis: among mankind are those who take, besides Allah, andad — rivals — loving them as they love Allah. Andad is the plural of nidd, which in Arabic is not any competitor but a peer, something treated as an equal and a match. The charge is precise. These people did not deny Allah; the pagans of Makkah affirmed Him as Creator. Their disease was dividing the heart's supreme love and handing a share of it elsewhere.",
            "bn": "আয়াতটি শুরু হয় রোগটা ধরিয়ে দিয়ে: মানুষের মধ্যে এমন কিছু লোক আছে, যারা আল্লাহর পাশাপাশি 'আনদাদ' বা প্রতিদ্বন্দ্বী দাঁড় করায়, আর তাদের ভালোবাসে আল্লাহকে ভালোবাসার মতো করে। আনদাদ হলো নিদ্দ-এর বহুবচন। আরবিতে নিদ্দ মানে যেকোনো প্রতিযোগী নয়, বরং সমকক্ষ, যাকে সমান ও জুড়ি বলে ধরা হয়। অভিযোগটি একেবারে সুনির্দিষ্ট। এই লোকেরা আল্লাহকে অস্বীকার করেনি; মক্কার মুশরিকরা তো তাঁকে স্রষ্টা বলে মানত। তাদের রোগ ছিল, অন্তরের সবচেয়ে বড় ভালোবাসাকে ভাগ করে তার একটা অংশ অন্য কাউকে দিয়ে দেওয়া।"
          },
          {
            "en": "The word nidd carries a weight the Prophet ﷺ himself underlined. Al-Bukhari narrates from Ibn Mas'ud (RA) that he asked the Prophet ﷺ which sin is greatest in Allah's sight, and the answer began: that you set up a nidd for Allah while He created you. The greatest of all wrongs, in that answer, is not first an act of violence but a transaction of the heart — giving to a creature what belongs to the One who made you.",
            "bn": "নিদ্দ শব্দটির ভার নবী ﷺ নিজেই জোর দিয়ে বুঝিয়েছেন। ইমাম বুখারী ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেন, তিনি নবী ﷺ-কে জিজ্ঞেস করেছিলেন, আল্লাহর কাছে কোন গুনাহ সবচেয়ে বড়। উত্তরের শুরুটা ছিল: তুমি আল্লাহর জন্য নিদ্দ দাঁড় করাবে, অথচ তিনিই তোমাকে সৃষ্টি করেছেন। এই উত্তরে সবচেয়ে বড় অন্যায়টি প্রথমত কোনো সহিংসতা নয়, বরং অন্তরের একটা লেনদেন: যিনি আপনাকে সৃষ্টি করেছেন, তাঁর প্রাপ্য জিনিস কোনো সৃষ্টিকে দিয়ে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Rivals Wear Many Faces",
          "bn": "প্রতিদ্বন্দ্বীর বহু চেহারা"
        },
        "p": [
          {
            "en": "The commentators refuse to leave the verse safely in the past with carved idols. A nidd, they explain, is whatever receives the love, hope, fear or obedience that belong to Allah alone — a leader followed into clear disobedience, wealth pursued past every limit, a person whose approval outweighs the Creator's command. The verse says these attachments are loved ka-hubbillah, as Allah is loved: the same longing, the same sacrifice, the same fear of loss, aimed at something that cannot sustain it.",
            "bn": "মুফাসসিররা আয়াতটিকে খোদাই করা মূর্তির যুগে, নিরাপদ দূরত্বে ফেলে রাখতে রাজি নন। তাঁরা ব্যাখ্যা করেন, নিদ্দ হলো এমন যেকোনো কিছু, যা সেই ভালোবাসা, আশা, ভয় বা আনুগত্য পায়, যা কেবল আল্লাহর প্রাপ্য। যেমন: এমন নেতা, যার পেছনে চলতে গিয়ে মানুষ স্পষ্ট নাফরমানিতে জড়ায়; এমন সম্পদ, যার পেছনে সব সীমা ছাড়িয়ে ছোটা হয়; এমন মানুষ, যার সন্তুষ্টি স্রষ্টার হুকুমের চেয়েও ভারী হয়ে যায়। আয়াত বলছে, এসব টানকে ভালোবাসা হয় 'কাহুব্বিল্লাহ', আল্লাহকে যেভাবে ভালোবাসা হয় সেভাবে: একই আকুলতা, একই ত্যাগ, একই হারানোর ভয়। অথচ যার দিকে এসব ঢালা হয়, সে এর ভার বইতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Stronger in Love",
          "bn": "ভালোবাসায় আরও প্রবল"
        },
        "p": [
          {
            "en": "Against this the verse sets its counterweight: but those who believe are ashaddu hubban lillah, more intense in love for Allah. The commentators ask why the believers' love is stronger and answer from the verse's own logic. It is undivided, while the idolater's love is scattered among many claimants. It rests on knowledge of the One loved, so it does not collapse when circumstances turn. And it is anchored in the source of every blessing rather than in one of the blessings.",
            "bn": "এর বিপরীতে আয়াত রাখে পাল্লার অন্য দিকটা: কিন্তু যারা ঈমান এনেছে, তারা 'আশাদ্দু হুব্বাল লিল্লাহ', আল্লাহর প্রতি ভালোবাসায় আরও প্রবল। মুফাসসিররা প্রশ্ন তোলেন, মুমিনের ভালোবাসা বেশি মজবুত কেন, আর উত্তর খোঁজেন আয়াতের নিজের যুক্তিতেই। মুমিনের ভালোবাসা ভাগ হয়নি, অথচ মুশরিকের ভালোবাসা বহু দাবিদারের মধ্যে ছড়িয়ে আছে। মুমিনের ভালোবাসা দাঁড়িয়ে আছে যাঁকে ভালোবাসে তাঁকে জানার ওপর, তাই অবস্থা বদলালে তা ভেঙে পড়ে না। আর এ ভালোবাসার নোঙর সব নিয়ামতের উৎসে বাঁধা, কোনো একটা নিয়ামতে নয়।"
          },
          {
            "en": "The Quran demonstrates the difference at sea. In 29:65, when the idolaters board a ship, they call on Allah alone, sincere to Him in religion — then, delivered safely to land, they return to their partners. Crisis strips their rivals of pretence in a moment. The believer's love is precisely what remains when that stripping happens, made permanent: the crisis-sincerity of the drowning man, held steadily on dry land.",
            "bn": "কুরআন এই পার্থক্যটা দেখায় সমুদ্রের মাঝখানে। ২৯:৬৫-এ মুশরিকরা যখন নৌকায় চড়ে, তখন দ্বীনকে আল্লাহর জন্য খাঁটি করে কেবল তাঁকেই ডাকে। তারপর তিনি তাদের নিরাপদে ডাঙায় পৌঁছে দিলে তারা আবার শরিকদের কাছে ফিরে যায়। বিপদ এক মুহূর্তে তাদের প্রতিদ্বন্দ্বীদের মুখোশ খুলে দেয়। মুমিনের ভালোবাসা হলো মুখোশ খুলে যাওয়ার পর যা বাকি থাকে, সেটাই, তবে স্থায়ী রূপে: ডুবতে বসা মানুষের সেই মুহূর্তের একনিষ্ঠতা, শুকনো ডাঙাতেও যা সে অটলভাবে ধরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "When All Power Is Seen",
          "bn": "যখন সমস্ত শক্তি দৃশ্যমান হবে"
        },
        "p": [
          {
            "en": "The verse then looks forward with a sentence of terrible clarity: if only those who wronged could see, when they see the punishment, that power belongs to Allah entirely, and that Allah is severe in punishment. The rivals were loved because they seemed to hold benefit — status, protection, provision. On the Day the truth is unveiled, every ounce of quwwah, power, is seen where it always was. The beloved rivals hold nothing and never did.",
            "bn": "এরপর আয়াতটি সামনের দিকে তাকায় ভয়ংকর রকম স্পষ্ট এক বাক্যে: হায়, জালিমরা যদি দেখত, যখন তারা আজাব দেখবে, যে সমস্ত শক্তি পুরোপুরি আল্লাহরই, আর আল্লাহ শাস্তিদানে কঠোর! প্রতিদ্বন্দ্বীদের ভালোবাসা হতো, কারণ মনে হতো তাদের হাতে কিছু উপকার আছে: মর্যাদা, নিরাপত্তা, রিযিক। যেদিন সত্য খুলে যাবে, সেদিন কুওয়াহ অর্থাৎ শক্তির প্রতিটি কণা দেখা যাবে ঠিক সেখানেই, যেখানে তা সবসময় ছিল। ভালোবাসার ওই প্রতিদ্বন্দ্বীদের হাতে কিছুই নেই, আর কখনো ছিলও না।"
          },
          {
            "en": "The two verses that follow, 2:166-167, complete the scene: the followed disown their followers, the bonds between them are cut, and those who followed wish for one return to the world so they could disown in turn. Every love built on a rival ends in mutual repudiation. The Quran shows this not to satisfy curiosity about the Last Day but so that the repudiation can happen now, voluntarily, while it still counts.",
            "bn": "পরের দুই আয়াত, ২:১৬৬-১৬৭, দৃশ্যটি পূর্ণ করে। যাদের অনুসরণ করা হতো, তারা অনুসারীদের অস্বীকার করবে; তাদের মাঝের সব বন্ধন ছিঁড়ে যাবে; আর অনুসারীরা আফসোস করবে, যদি একবার দুনিয়ায় ফিরে যাওয়া যেত, তাহলে তারাও ওদের অস্বীকার করত। প্রতিদ্বন্দ্বীর ওপর গড়া প্রতিটি ভালোবাসা শেষে গিয়ে ঠেকে পরস্পরকে অস্বীকারে। কুরআন এটা দেখায় কিয়ামত নিয়ে কৌতূহল মেটাতে নয়, বরং যেন সেই সম্পর্ক ছিন্ন করার কাজটা এখনই, স্বেচ্ছায় হয়ে যায়, যখন তার এখনো মূল্য আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Love with a Test Attached",
          "bn": "ভালোবাসার যাচাই"
        },
        "p": [
          {
            "en": "How does a person know which love actually rules his heart? The Quran supplies the instrument in 3:31, where the claim of loving Allah is tested by following His Messenger ﷺ, and Allah's love and forgiveness are promised in return. Feelings can be argued about endlessly; following can be observed. The supreme love this verse describes is therefore not a private glow but a standing arrangement of one's life around the Beloved's word.",
            "bn": "কোন ভালোবাসা আসলে নিজের অন্তরে রাজত্ব করছে, মানুষ তা বুঝবে কীভাবে? কুরআন সেই মাপকাঠি দিয়ে দেয় ৩:৩১-এ: আল্লাহকে ভালোবাসার দাবি যাচাই হয় তাঁর রাসূল ﷺ-এর অনুসরণ দিয়ে, আর এর বদলে আল্লাহ নিজের ভালোবাসা ও মাগফিরাতের ওয়াদা দেন। অনুভূতি নিয়ে অনন্তকাল তর্ক চলতে পারে, কিন্তু অনুসরণ চোখে দেখা যায়। তাই এই আয়াত যে সর্বোচ্চ ভালোবাসার কথা বলে, তা মনের গোপন কোনো আবেগ নয়। তা হলো প্রিয়তমের কথাকে কেন্দ্র করে নিজের পুরো জীবনটা স্থায়ীভাবে সাজিয়ে নেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Auditing the Heart",
          "bn": "হৃদয়ের হিসাব নেওয়া"
        },
        "p": [
          {
            "en": "The verse invites an audit that no one else can run for you. Ask what you sacrifice for without being asked, what you obey reflexively, what loss frightens you most, what your thoughts return to when they are free. The answers mark where your strongest love currently sits. Nothing in the verse forbids loving family, wealth or comfort; the Quran commands kindness to kin and calls wealth a favour. The question is only ever about rank.",
            "bn": "আয়াতটি আপনাকে এমন এক হিসাব নিতে ডাকে, যা আপনার হয়ে আর কেউ নিতে পারবে না। নিজেকে জিজ্ঞেস করুন: কেউ না বললেও কীসের জন্য আপনি ত্যাগ স্বীকার করেন? কার কথা আপনি না ভেবেই মেনে নেন? কোন জিনিস হারানোর ভয় আপনাকে সবচেয়ে বেশি তাড়া করে? মন অবসর পেলে কোথায় গিয়ে ফেরে? এই উত্তরগুলোই দেখিয়ে দেয়, আপনার সবচেয়ে প্রবল ভালোবাসা এখন কোথায় বসে আছে। পরিবার, সম্পদ বা আরাম ভালোবাসতে আয়াত কোথাও নিষেধ করে না; কুরআন তো আত্মীয়ের সঙ্গে সদ্ব্যবহারের হুকুম দেয়, সম্পদকে অনুগ্রহ বলে। প্রশ্নটা সবসময় শুধু এই: কোনটা আগে, কোনটা পরে।"
          },
          {
            "en": "And rank is corrected the way it was corrupted — gradually, by direction of attention. Love for Allah grows by knowing Him: reading His words as addressed to you, tracing His names in what happens to you, remembering Him until remembrance becomes the heart's default. As that love thickens, the rivals shrink back into what they really are — gifts to be received from Him, enjoyed for Him and, when He asks, surrendered to Him.",
            "bn": "আর ক্রম যে পথে নষ্ট হয়েছিল, শোধরায়ও সেই পথে: ধীরে ধীরে, মনোযোগের দিক বদলে। আল্লাহর প্রতি ভালোবাসা বাড়ে তাঁকে চেনার মধ্য দিয়ে: তাঁর কালাম এমনভাবে পড়া, যেন আপনাকেই বলা হচ্ছে; নিজের জীবনে যা ঘটে, তাতে তাঁর নামগুলোর ছাপ খোঁজা; আর তাঁকে এত স্মরণ করা যে স্মরণই অন্তরের স্বাভাবিক অবস্থা হয়ে যায়। সেই ভালোবাসা যত গাঢ় হয়, প্রতিদ্বন্দ্বীরা তত ছোট হয়ে নিজেদের আসল জায়গায় ফিরে যায়। তারা আসলে উপহার: তাঁর কাছ থেকে নেওয়ার, তাঁর জন্য উপভোগ করার, আর তিনি চাইলে তাঁর হাতেই ফিরিয়ে দেওয়ার।"
          }
        ]
      }
    ]
  },
  "2:168-169": {
    "sections": [
      {
        "h": {
          "en": "After Tawhid, the Table",
          "bn": "তাওহিদের পরে খাবারের পাত"
        },
        "p": [
          {
            "en": "2:163 has just declared that your God is one God, and 2:164 has laid out the signs in the heavens and the earth for a people who reason. 2:165 then describes those who take rivals beside Allah and love them as Allah is loved, and 2:166 and 2:167 show those attachments collapsing into mutual disowning. Then the address widens without warning. O mankind, eat of what is on the earth, lawful and good. After a long stretch of argument the Quran turns to all people, and what it speaks to them about is food.",
            "bn": "2:163 আয়াত সবে ঘোষণা করেছে, তোমাদের ইলাহ এক ইলাহ। 2:164 আয়াত বিবেকবানদের জন্য আসমান-জমিনের নিদর্শনগুলো সাজিয়ে দিয়েছে। এরপর 2:165 আয়াত বলছে তাদের কথা, যারা আল্লাহর পাশে সমকক্ষ দাঁড় করায় আর আল্লাহকে ভালোবাসার মতো তাদের ভালোবাসে; 2:166 আর 2:167 আয়াত দেখায় সেই টানগুলো কীভাবে ভেঙে পড়ে পারস্পরিক অস্বীকৃতিতে। তারপর কোনো ভূমিকা ছাড়াই সম্বোধন চওড়া হয়ে যায়। ওহে মানুষ, জমিনে যা আছে তার হালাল আর পবিত্র জিনিস খাও। লম্বা তর্কের পর কুরআন ফেরে সব মানুষের দিকে, আর যে বিষয়ে কথা বলে তা খাবার।"
          },
          {
            "en": "What comes after keeps the same thread. 2:170 records the answer of those who will not follow what Allah sent down: we follow what we found our fathers doing. 2:171 gives the parable of a call heard as bare noise. Then 2:172 repeats the command to the believers with gratitude attached, and 2:173 names what is excluded. No occasion of revelation is established for our verse. Its placement is the argument, since the God who alone is worshipped is also the only one entitled to say what may be eaten.",
            "bn": "পরের অংশও একই সুতো ধরে রাখে। 2:170 আয়াত লিখে রাখে তাদের জবাব, যারা আল্লাহর নাজিল করা জিনিস মানবে না: আমরা তো তা-ই মানব, যাতে বাপ-দাদাদের পেয়েছি। 2:171 আয়াত দেয় সেই উপমা, যেখানে ডাক কানে পৌঁছায় স্রেফ শব্দ হয়ে। এরপর 2:172 আয়াত হুকুমটি মুমিনদের সামনে আবার রাখে, সাথে জুড়ে দেয় শোকর। আর 2:173 আয়াত বলে দেয় কী কী বাদ। আমাদের আয়াতের কোনো প্রতিষ্ঠিত শানে নুযুল নেই। এর অবস্থানই যুক্তি, কারণ যিনি একাই ইবাদতের যোগ্য, কী খাওয়া যাবে তা বলার অধিকারও কেবল তাঁরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Halal, Tayyib, Khutuwat",
          "bn": "হালাল, তাইয়িব, খুতুওয়াত"
        },
        "p": [
          {
            "en": "Halal comes from h-l-l, a root whose sense is untying and releasing; it is the language of a knot undone, and the opposite of what stays bound. Tayyib comes from t-y-b: wholesome, clean, pleasant, the word for what is good in itself rather than merely allowed. The verse joins the two and does not collapse them into one condition. A thing can be released and still not be wholesome for you, and a thing can be wholesome on the plate while the route it took to reach the plate was never untied at all.",
            "bn": "‘হালাল’ এসেছে হ-ল-ল মূল থেকে, যার ভাব খুলে দেওয়া আর ছেড়ে দেওয়া; এ হলো গিঁট খোলার ভাষা, আর যা বাঁধা থাকে তার উল্টো। ‘তাইয়িব’ এসেছে ত-য়-ব থেকে: পবিত্র, পরিচ্ছন্ন, প্রীতিকর; যা নিজে থেকেই ভালো, নিছক অনুমোদিত নয়। আয়াত দুটোকে জোড়া লাগায়, কিন্তু এক শর্তে মিশিয়ে ফেলে না। কোনো জিনিস খোলা থাকতে পারে অথচ আপনার জন্য পবিত্র না হতে পারে। আবার কোনো জিনিস পাতে পবিত্র, অথচ পাত পর্যন্ত আসার পথটা কোনোদিন খোলাই হয়নি।"
          },
          {
            "en": "Khutuwat is the plural of khutwah, a single stride of the foot. Not the road and not the destination: the step. The image says how the enemy actually works. He does not ask for the whole distance, he asks for the next footfall, and every one of them is small enough to be argued for. And 2:169 opens with innama ya'murukum, he only orders you, a restriction rather than a description. However wide the range of his suggestions looks, all of it falls under three headings.",
            "bn": "‘খুতুওয়াত’ হলো ‘খুতওয়া’-র বহুবচন, পায়ের এক কদম। পথ নয়, গন্তব্যও নয়: কদম। ছবিটাই বলে দেয় শত্রু আসলে কীভাবে কাজ করে। সে গোটা দূরত্ব চায় না, চায় পরের পা-টা, আর প্রতিটি পা-ই এত ছোট যে তার পক্ষে যুক্তি সাজানো যায়। আর 2:169 আয়াত শুরু হয় ‘ইন্নামা ইয়ামুরুকুম’ দিয়ে, সে কেবল তোমাদের হুকুম দেয়। এ বর্ণনা নয়, সীমা টেনে দেওয়া। তার পরামর্শের পরিধি যতই চওড়া দেখাক, পুরোটাই তিনটা শিরোনামের নিচে পড়ে।"
          },
          {
            "en": "The three rise as they go. Su', evil, covers whatever harms. Fahsha' is what is gross enough that people recognise it on sight. Then, above both, saying about Allah what you do not know. Ibn Kathir reads the order exactly that way: evil, then what is worse than it, then worse again. And the last of the three is the only one on the list that a person can commit while feeling more religious for having done it.",
            "bn": "তিনটি ধাপে ধাপে ওঠে। ‘সূ’, মন্দ, যা কিছু ক্ষতি করে তার সবই। ‘ফাহশা’ এমন কাজ, যা দেখামাত্র মানুষ চিনে ফেলে। তারপর দুটোরই ওপরে, আল্লাহ সম্পর্কে না জেনে কথা বলা। ইবনে কাসীর ক্রমটা ঠিক এভাবেই পড়েন: মন্দ, তারপর তার চেয়ে খারাপ, তারপর আরও খারাপ। আর এই তিনটির শেষটাই তালিকার একমাত্র জিনিস, যা করে ফেলে মানুষ নিজেকে আরও বেশি দ্বীনদার ভাবতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prohibitions Nobody Was Given",
          "bn": "কেউ দেয়নি এমন নিষেধ"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the footsteps against a concrete background. He names the bahirah, the sa'ibah and the wasilah, camels that the Arabs of the Jahiliyyah released, dedicated and declared off limits on their own authority. The verse's charge is that these self-made prohibitions were not piety at all but obedience to someone else's suggestion. Qatadah and as-Suddi, whom Ibn Kathir quotes here, widen the phrase: every act of disobedience to Allah is among the footsteps of Satan. Ibn Abbas (RA) is reported as placing a vow or oath sworn in anger among them.",
            "bn": "ইবনে কাসীর পায়ের চিহ্নের কথাটি পড়েন একেবারে বাস্তব প্রেক্ষাপটে। তিনি নাম নেন বাহিরা, সায়িবা আর ওয়াসিলার, সেই উটগুলোর, যেগুলোকে জাহিলিয়াতের আরবরা নিজেদের ইচ্ছায় ছেড়ে দিত, উৎসর্গ করত আর নিজেদের জন্য নিষিদ্ধ ঘোষণা করত। আয়াতের অভিযোগ হলো, নিজেদের বানানো এই নিষেধগুলো মোটেই দ্বীনদারি ছিল না, ছিল অন্য কারও পরামর্শ মেনে চলা। কাতাদা আর সুদ্দি, যাঁদের কথা ইবনে কাসীর এখানে আনেন, কথাটার পরিধি বাড়ান: আল্লাহর নাফরমানির প্রতিটি কাজই শয়তানের পায়ের চিহ্নের ভেতরে পড়ে। ইবনে আব্বাস (রাঃ) থেকে বর্ণিত আছে, রাগের মাথায় করা মানত বা কসমও এর মধ্যে গণ্য।"
          },
          {
            "en": "As-Sa'di reads the command as setting a default. What is on the earth is permitted until something shows otherwise, and what is forbidden falls into two kinds: foul in itself, or forbidden because of the way it was obtained, since a thing taken by theft or seizure is not lawful whatever the thing happens to be. He ties the third of Satan's commands to the pagans' self-made prohibitions. Between them the commentators put the weight in two places at once, on what the thing is and on how it came to you.",
            "bn": "সাদি হুকুমটি থেকে একটি মূলনীতি বের করেন: জমিনে যা আছে তা হালাল, যতক্ষণ না উল্টোটা প্রমাণ হয়। আর হারাম দুই রকম: হয় জিনিসটা নিজেই নোংরা, নয়তো যে পথে হাতে এসেছে সেই কারণে হারাম; চুরি করা বা ছিনিয়ে নেওয়া জিনিস যা-ই হোক, হালাল নয়। শয়তানের তৃতীয় হুকুমটিকে তিনি মিলিয়ে দেন মুশরিকদের নিজেদের বানানো নিষেধের সাথে। এভাবে মুফাসসিরগণ একসাথে দুই জায়গায় জোর দেন: জিনিসটা কী, আর তা কীভাবে আপনার কাছে এল।"
          }
        ]
      },
      {
        "h": {
          "en": "Created Upright, Then Turned",
          "bn": "সোজা বানানো, তারপর ঘোরানো"
        },
        "p": [
          {
            "en": "Muslim records from Iyad ibn Himar (RA) that the Prophet ﷺ reported Allah as saying: every wealth I have granted My servants is lawful for them; and, further on, I created My servants upright, then the devils came to them and turned them away from their religion and forbade them what I had made lawful for them. Ibn Kathir brings this narration at exactly this verse, because it states in a line what the verse assumes. The permission is older than the ban, and the ban came from somewhere else.",
            "bn": "ইমাম মুসলিম ইয়ায ইবনে হিমার (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ জানিয়েছেন যে আল্লাহ বলেন: আমার বান্দাদের যত সম্পদ আমি দিয়েছি, সবই তাদের জন্য হালাল; আর তার পরে, আমি আমার বান্দাদের সোজা করে বানিয়েছি, তারপর শয়তানরা তাদের কাছে এসে তাদের দ্বীন থেকে ঘুরিয়ে দিল আর আমি যা হালাল করেছিলাম তা তাদের ওপর হারাম করে দিল। ইবনে কাসীর বর্ণনাটি আনেন ঠিক এই আয়াতেই, কারণ আয়াত যা ধরে নিয়ে কথা বলে, হাদিসটি তা এক লাইনে বলে দেয়। অনুমতিটা নিষেধের চেয়ে পুরোনো, আর নিষেধটা এসেছে অন্য জায়গা থেকে।"
          },
          {
            "en": "The other narration the commentators bring to this command is the one about the traveller. In Muslim's wording, from Abu Hurayrah (RA), the Prophet ﷺ spoke of a man long on the road, dishevelled and dusty, who stretches his hands to the sky calling my Lord, my Lord, while his food, his drink and his clothing are unlawful and he has been nourished by the unlawful; so how could he be answered (Muslim 1015)? Ibn Kathir attaches it at 2:172 rather than here, and the verses recited inside it are 2:172 and 23:51, but the command is the same one, seen from the side of the du'a it blocks.",
            "bn": "এই হুকুমের সাথে মুফাসসিরগণ যে আরেকটি বর্ণনা আনেন, তা সেই মুসাফিরকে নিয়ে। মুসলিমের ভাষায়, আবু হুরায়রা (রাঃ)-এর সূত্রে, নবী ﷺ বলেছেন এমন এক মানুষের কথা, যে দীর্ঘ পথ পেরিয়ে এলোমেলো আর ধুলোমাখা, আকাশের দিকে দুই হাত বাড়িয়ে ডাকছে, হে আমার রব, হে আমার রব; অথচ তার খাবার হারাম, পানীয় হারাম, পোশাক হারাম, আর সে বেড়ে উঠেছে হারামে; তাহলে তার ডাকে সাড়া দেওয়া হবে কী করে (মুসলিম ১০১৫)? ইবনে কাসীর বর্ণনাটি জুড়ে দেন 2:172 আয়াতের সাথে, এখানে নয়; আর হাদিসের ভেতরে পড়া আয়াত দুটিও 2:172 আর 23:51। তবে হুকুম সেই একটাই, এবার যে দোয়া আটকে যায় তার দিক থেকে দেখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on the Permitted",
          "bn": "অনুমোদিত নিয়ে অন্য আয়াত"
        },
        "p": [
          {
            "en": "2:172 narrows the same command to the believers and attaches thanks to it: eat of the good things We have provided for you and be grateful to Allah, if it is Him you worship. 2:173 then names what is excluded, and the list is startlingly short, with relief for anyone driven to it by necessity. Read together, the two verses say that the forbidden is the exception and the permitted is the field, which is the reverse of how anxious people usually carry the subject.",
            "bn": "2:172 আয়াত একই হুকুম সংকীর্ণ করে আনে মুমিনদের ওপর আর তার সাথে জুড়ে দেয় শোকর: আমার দেওয়া পবিত্র জিনিস খাও আর আল্লাহর শোকর কর, যদি তোমরা তাঁরই ইবাদত করে থাক। এরপর 2:173 আয়াত বলে দেয় কী কী বাদ, আর তালিকাটা অবাক করার মতো ছোট; সাথে ছাড় আছে তার জন্য, যাকে নিরুপায় হয়ে বাধ্য হতে হয়েছে। দুটো একসাথে পড়লে দাঁড়ায়, নিষিদ্ধটাই ব্যতিক্রম আর অনুমোদিতটাই মাঠ। উদ্বিগ্ন মানুষ সাধারণত বিষয়টা ঠিক উল্টো করে বয়ে বেড়ায়।"
          },
          {
            "en": "5:87 forbids the opposite error, telling believers not to declare unlawful the good things Allah has made lawful for them and not to transgress. 16:116 goes after the tongue directly, forbidding you to say this is lawful and this is unlawful in order to invent a lie about Allah. And 7:157 describes the Prophet ﷺ as the one who makes the good things lawful for them and forbids them the foul, which gives the standard against which any claim about halal has to be measured.",
            "bn": "5:87 আয়াত উল্টো ভুলটাও নিষেধ করে, মুমিনদের বলে, আল্লাহ যেসব পবিত্র জিনিস হালাল করেছেন সেগুলোকে হারাম বানিয়ো না আর সীমা ছেড়ো না। 16:116 আয়াত সরাসরি জবানের পেছনে লাগে, নিষেধ করে আল্লাহর ওপর মিথ্যা বানানোর জন্য ‘এটা হালাল, এটা হারাম’ বলা। আর 7:157 আয়াত নবী ﷺ-এর পরিচয় দেয় এভাবে যে তিনি তাদের জন্য পবিত্র জিনিস হালাল করেন আর নোংরা জিনিস হারাম করেন। হালাল নিয়ে যে কোনো দাবিকে এই মাপকাঠিতেই মাপতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Step, Not the Road",
          "bn": "গোটা পথ নয়, এক কদম"
        },
        "p": [
          {
            "en": "The work splits along the verse's two conditions. Halal asks about the route: where the income came from, whether there is interest inside the contract, whether the goods were described honestly, whether the people who made them were paid. Tayyib asks about the effect: whether what you eat, in this quantity and at this hour, leaves you able to stand in prayer and able to think clearly afterwards. Most people are careful about one of the two and have never once looked hard at the other.",
            "bn": "কাজটা ভাগ হয়ে যায় আয়াতের দুই শর্ত ধরে। হালাল জানতে চায় পথের কথা: আয়টা কোথা থেকে এল, চুক্তির ভেতরে সুদ আছে কি না, পণ্যের বর্ণনা সৎ ছিল কি না, যারা বানিয়েছে তাদের পাওনা মিটেছে কি না। তাইয়িব জানতে চায় প্রভাবের কথা: এই পরিমাণে, এই সময়ে যা খাচ্ছেন, তা খেয়ে আপনি নামাজে দাঁড়াতে পারছেন কি না, পরে পরিষ্কারভাবে ভাবতে পারছেন কি না। বেশিরভাগ মানুষ দুটোর একটা নিয়ে সাবধান, আর অন্যটা একবারও খতিয়ে দেখেননি।"
          },
          {
            "en": "The footsteps tell you where to look when something has gone wrong. Do not hunt for the decision that ruined it; find the first small step. Nobody sets out to build a business on deception or a body on sugar, and nobody is offered the whole distance at once. So the practice is to name the last step you took in a direction you do not want to keep walking, and refuse the next one, which is always the only one actually on offer. 2:170 shows the excuse that stands ready: this is what we found our fathers doing.",
            "bn": "কিছু একটা বিগড়ে গেলে কোথায় তাকাতে হবে, পায়ের চিহ্নই তা বলে দেয়। যে সিদ্ধান্ত সব নষ্ট করেছে তার পেছনে ছুটবেন না; প্রথম ছোট কদমটা খুঁজুন। কেউ ঠিক করে বসে না যে প্রতারণার ওপর ব্যবসা দাঁড় করাবে বা চিনির ওপর শরীর, আর কাউকে একবারে গোটা দূরত্ব সাধা হয় না। তাই কাজটা হলো, যে দিকে আর হাঁটতে চান না সেদিকে শেষ যে কদমটা ফেলেছেন তার নাম ধরে চিনে নেওয়া, আর পরের কদমটা ফিরিয়ে দেওয়া। কারণ সামনে সব সময় আসলে ওই একটা কদমই সাধা হয়। 2:170 আয়াত তৈরি অজুহাতটাও দেখিয়ে দেয়: আমরা তো বাপ-দাদাদের এভাবেই পেয়েছি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a For Lawful Provision",
          "bn": "হালাল রিযিকের জন্য দোয়া"
        },
        "p": [
          {
            "en": "The verse is a command rather than a prayer, but the Sunnah keeps a supplication on the same theme. At-Tirmidhi records it from Ali (RA) and grades it hasan gharib (at-Tirmidhi 3563): Allahumma-kfini bi-halalika 'an haramika, wa aghnini bi-fadlika 'amman siwak. O Allah, suffice me with what You have made lawful against what You have forbidden, and enrich me by Your bounty so that I need nobody besides You. It asks for exactly the life this verse commands, one that can be lived inside the permitted without strain.",
            "bn": "আয়াতটি দোয়া নয়, হুকুম; তবে একই বিষয়ে সুন্নাহয় দোয়া আছে। তিরমিযি এটি আলী (রাঃ) থেকে বর্ণনা করেছেন আর একে বলেছেন হাসান গরিব (তিরমিযি ৩৫৬৩): ‘আল্লাহুম্মাকফিনি বিহালালিকা আন হারামিক, ওয়া আগনিনি বিফাদলিকা আম্মান সিওয়াক’। হে আল্লাহ, আপনার হারাম থেকে বাঁচিয়ে আপনার হালাল দিয়েই আমাকে যথেষ্ট করে দিন, আর আপনার অনুগ্রহে আমাকে এমন অভাবমুক্ত করুন যে আপনি ছাড়া আর কাউকে আমার দরকার না হয়। আয়াত যে জীবনের হুকুম দেয়, দোয়াটি ঠিক তা-ই চায়: এমন জীবন, যা টানাটানি ছাড়াই অনুমোদিতের ভেতরে কাটানো যায়।"
          },
          {
            "en": "A second supplication in the verse's own vocabulary, composed here and not narrated: O Allah, You spread out the earth and called its good things lawful. Keep my hand on what You released and off what You tied. Show me the step before the step, and never let me say about You what I was not taught. Make what enters my body help me stand in front of You, and make what I earn something I would be content to hear read out.",
            "bn": "দ্বিতীয় দোয়াটি আয়াতের নিজের শব্দে, এখানে রচিত, কোনো বর্ণনা নয়: হে আল্লাহ, আপনি জমিন বিছিয়েছেন আর তার ভালো জিনিসগুলোকে হালাল বলেছেন। আপনি যা খুলে দিয়েছেন আমার হাত সেখানেই রাখুন, আর যা বেঁধে রেখেছেন তা থেকে সরিয়ে রাখুন। কদমের আগের কদমটা আমাকে দেখিয়ে দিন, আর যা শেখানো হয়নি আপনার সম্পর্কে তা কখনো বলতে দেবেন না। আমার শরীরে যা ঢোকে তা যেন আপনার সামনে দাঁড়াতে সাহায্য করে, আর আমি যা কামাই তা যেন এমন হয়, যা সবার সামনে পড়ে শোনালেও আমি খুশি থাকব।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Over the Meal",
          "bn": "খেতে বসে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse sets two tests and I probably enforce only one of them. Which do I quietly skip, the question of where the thing came from or the question of what it is doing to me? If I traced the money that paid for this week's food all the way back, is there any part of the chain I would rather not look at closely, and what have I told myself in order to avoid looking?",
            "bn": "আয়াত দুটো পরীক্ষা রাখে, আর সম্ভবত আমি একটাই মানি। কোনটাকে আমি চুপচাপ বাদ দিই, জিনিসটা কোথা থেকে এল সেই প্রশ্নটা, নাকি সেটা আমার সাথে কী করছে সেই প্রশ্নটা? এ সপ্তাহের খাবারের টাকাটা যদি একেবারে গোড়া পর্যন্ত ধরে ধরে দেখি, সেই শৃঙ্খলের কোনো অংশ কি আছে যার দিকে ভালো করে তাকাতে আমার ইচ্ছে করে না? আর তাকানো এড়াতে নিজেকে আমি কী বুঝিয়েছি?"
          },
          {
            "en": "The enemy asks for one step, never for the road. What was the first small step in the habit I am least willing to talk about, and what is the next step being offered right now? And the heaviest of the three things he orders is speaking about Allah without knowledge. When did I last tell somebody that Allah forbids or permits something because I had heard it said, and not because I knew He said it?",
            "bn": "শত্রু এক কদম চায়, গোটা পথ কখনো নয়। যে অভ্যাসটা নিয়ে কথা বলতে আমার সবচেয়ে অনীহা, তার প্রথম ছোট কদমটা কী ছিল? আর এই মুহূর্তে পরের কদম হিসেবে আমাকে কী সাধা হচ্ছে? আর সে যে তিনটি জিনিসের হুকুম দেয়, তার সবচেয়ে ভারীটা হলো আল্লাহ সম্পর্কে না জেনে কথা বলা। শেষ কবে আমি কাউকে বলেছি আল্লাহ অমুকটা নিষেধ করেছেন বা অনুমতি দিয়েছেন, শুধু শুনেছি বলে, তিনি বলেছেন তা জানি বলে নয়?"
          }
        ]
      },
      {
        "h": {
          "en": "A Word at the Table",
          "bn": "খাবারের পাতে একটি কথা"
        },
        "p": [
          {
            "en": "Children usually learn halal as a short list of forbidden foods and almost never as a question about money. Teach it in the order the verse gives it. The earth is full of good things and they are yours; there is a short list that is not. Say the short list aloud, so it stops feeling endless, and only then ask the harder question over the meal: where did this come from, and was everyone along the way dealt with fairly?",
            "bn": "শিশুরা সাধারণত হালাল শেখে নিষিদ্ধ খাবারের ছোট একটা তালিকা হিসেবে, আর টাকার প্রশ্ন হিসেবে প্রায় কখনোই নয়। আয়াত যে ক্রমে বলেছে, সেই ক্রমেই শেখান। জমিন ভরা ভালো জিনিসে আর সেগুলো তোমাদেরই; ছোট একটা তালিকা আছে যা নয়। ছোট তালিকাটা জোরে পড়ে শোনান, যাতে সেটা আর অন্তহীন মনে না হয়। তারপরেই কেবল খেতে বসে কঠিন প্রশ্নটা তুলুন: এটা কোথা থেকে এল, আর পথের প্রত্যেকের সাথে কি ঠিক ব্যবহার করা হয়েছে?"
          },
          {
            "en": "The footsteps are the easiest image in this passage to hand a child. Nobody arrives anywhere in one jump. Ask them to trace a habit they dislike in themselves back to its first step, and let them find it rather than telling them. Then let them watch you refuse a small thing and say plainly why you refused it. That is the whole verse: the food, the footsteps, and an enemy the Quran calls open because his working method was never a secret.",
            "bn": "এই অংশের যে ছবিটা শিশুর হাতে তুলে দেওয়া সবচেয়ে সহজ, তা পায়ের চিহ্ন। কেউ এক লাফে কোথাও পৌঁছায় না। নিজের যে অভ্যাসটা তার পছন্দ নয়, সেটার প্রথম কদমটা পর্যন্ত ধরে ধরে যেতে বলুন, আর উত্তরটা তাকে বলে না দিয়ে তাকেই খুঁজে বের করতে দিন। তারপর তাকে দেখতে দিন, আপনি ছোট একটা জিনিস ফিরিয়ে দিচ্ছেন আর সোজা করে বলছেন কেন ফিরিয়ে দিলেন। গোটা আয়াতটাই এই: খাবার, পায়ের চিহ্ন, আর এমন এক শত্রু, যাকে কুরআন প্রকাশ্য বলে, কারণ তার কাজের ধরন কোনোদিন গোপন ছিল না।"
          }
        ]
      }
    ]
  },
  "2:177": {
    "sections": [
      {
        "h": {
          "en": "Not a Direction to Face",
          "bn": "মুখ ফেরানোর দিক নয়"
        },
        "p": [
          {
            "en": "The qibla passage closed at 2:150, and 2:174 to 2:176 have just rebuked those who conceal what Allah sent down of the Book and sell it for a small price. Then this verse opens by denying that righteousness is a matter of turning your face east or west. Ibn Kathir reads that opening as looking straight back at the change of qibla, since facing a direction carries no birr in itself and only obedience does, and he quotes Abu al-Aliyah that the Jews faced west for their qibla and the Christians east.",
            "bn": "কিবলার অংশটা শেষ হয়েছে 2:150 আয়াতে। তারপর 2:174 থেকে 2:176 আয়াত সবে ধমক দিয়েছে তাদের, যারা আল্লাহর নাজিল করা কিতাব গোপন করে আর তুচ্ছ দামে বেচে দেয়। এরপর এই আয়াত শুরুই হয় এই কথা দিয়ে: পূর্ব বা পশ্চিমে মুখ ফেরানোতে নেকি নেই। ইবনে কাসীরের মতে এই শুরুটা সরাসরি কিবলা বদলের দিকেই ইঙ্গিত করে, কারণ কোনো দিকে মুখ করায় নিজে থেকে কোনো নেকি নেই, নেকি আছে কেবল আল্লাহর হুকুম মানায়। প্রমাণে তিনি আবুল আলিয়ার কথা আনেন: ইহুদিরা কিবলা করত পশ্চিমকে, আর নাসারারা পূর্বকে।"
          },
          {
            "en": "What comes after it is law. 2:178 gives legal retribution, 2:180 the bequest at death, and from there the surah moves on to fasting and to hajj. So the verse stands in the doorway of al-Baqarah's long legal section, and it is a definition rather than a ruling. Ibn Kathir opens his comment on it by saying that it contains great wisdoms and encompasses rulings and correct beliefs. The surah is stating what all the rulings are for, immediately before it begins issuing them.",
            "bn": "এর পরে যা আসে তা বিধান। 2:178 আয়াতে কিসাস, 2:180 আয়াতে মৃত্যুর সময়ের অসিয়ত, আর সেখান থেকে সূরা এগোয় রোজা আর হজের দিকে। ফলে আয়াতটি দাঁড়িয়ে আছে বাকারার লম্বা বিধান-অংশের দরজায়, আর এটি বিধান নয়, সংজ্ঞা। ইবনে কাসীর এর ব্যাখ্যা শুরুই করেন এ কথা বলে যে এতে রয়েছে বড় বড় হিকমত আর এতে বিধান ও সঠিক আকিদা দুটোই ধরা আছে। বিধান জারি করা শুরুর ঠিক আগে সূরা বলে নিচ্ছে, এই সব বিধান আসলে কীসের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Birr Defined by a Person",
          "bn": "মানুষ দিয়ে নেকির সংজ্ঞা"
        },
        "p": [
          {
            "en": "Birr, from the root b-r-r, is wide goodness: the word used for kindness to parents and for conduct that reaches other people well. But the verse's most striking move is not in the lexicon. It does not say that righteousness is that you believe; it says that righteousness is the one who believes. The definition is a person rather than an act, which is why the list that follows can run through belief, money, prayer, promises and patience without ever changing its subject.",
            "bn": "‘বির’ শব্দের মূল ব-র-র, অর্থ ব্যাপক কল্যাণ। মা-বাবার সাথে সদ্ব্যবহার আর মানুষের সাথে সুন্দর আচরণ, দুটো বোঝাতেই এ শব্দ আসে। তবে আয়াতের সবচেয়ে চমকপ্রদ দিকটা অভিধানে নেই। আয়াত বলে না যে নেকি হলো তোমরা ঈমান আনো; বলে, নেকি হলো সেই মানুষ, যে ঈমান আনে। সংজ্ঞাটা কোনো কাজ নয়, একজন মানুষ। সেজন্যই পরের তালিকাটা ঈমান, টাকা, নামাজ, দেওয়া কথা আর সবর পেরিয়ে যায়, অথচ কার কথা হচ্ছে তা একবারও বদলায় না।"
          },
          {
            "en": "Ath-Thawri, quoted by Ibn Kathir, recited the clause that righteousness is the one who believes in Allah and said that what follows are the kinds of birr; Ibn Kathir comments that he spoke the truth. Notice then what the verse counts. Five objects of belief are named: Allah, the Last Day, the angels, the Book, the prophets. And the patience at the end is given three settings, poverty, hardship, and the time of fighting, which Ibn Kathir glosses as the battlefield while facing the enemy.",
            "bn": "সাওরির কথা এনে ইবনে কাসীর জানান, তিনি ‘নেকি হলো সেই ব্যক্তি যে আল্লাহর ওপর ঈমান আনে’ অংশটি পড়ে বলেছিলেন, এরপর যা আসে তা নেকিরই নানা রকম; আর ইবনে কাসীর মন্তব্য করেন, তিনি ঠিকই বলেছেন। এবার খেয়াল করুন আয়াত কী কী গোনে। ঈমানের বিষয় পাঁচটি: আল্লাহ, শেষ দিন, ফেরেশতা, কিতাব আর নবীগণ। আর শেষের সবরের জন্য দেওয়া হয়েছে তিনটি অবস্থা, অভাব, কষ্ট আর ‘হীনাল বা’স’। অ্যাপের বাংলা অনুবাদে শেষেরটি এসেছে ‘সংকটে’ হয়ে, যুদ্ধের কোনো উল্লেখ ছাড়াই; আর ইবনে কাসীর এর ব্যাখ্যায় বলেন শত্রুর মুখোমুখি রণক্ষেত্রের কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Love Is Meant",
          "bn": "কার ভালোবাসার কথা"
        },
        "p": [
          {
            "en": "The clause wa ata al-mala 'ala hubbihi turns on a single pronoun. Hubbihi is love of it, or love of Him, and the Arabic carries more than one possible antecedent. Al-Qurtubi lists three: the wealth, so that it is given while still loved; Allah, so that it is given out of love for Him; and the giving itself. At-Tabari, Ibn Kathir and as-Sa'di prefer the first. Ibn Kathir glosses the clause as giving money away while desiring it and loving it, and as-Sa'di reads it the same way, adding that love of wealth is in every person.",
            "bn": "‘ওয়া আতাল মালা আলা হুব্বিহি’ অংশটির অর্থ ঝুলে আছে একটিমাত্র সর্বনামের ওপর। ‘হুব্বিহি’ মানে হতে পারে ‘তার’ ভালোবাসা, আবার ‘তাঁর’ ভালোবাসাও; আরবিতে সর্বনামটি একাধিক দিকে ফিরতে পারে। কুরতুবি তিনটি সম্ভাবনার কথা বলেন: সম্পদ, অর্থাৎ ভালোবাসা থাকতে থাকতেই তা দিয়ে দেওয়া; আল্লাহ, অর্থাৎ তাঁর ভালোবাসায় দেওয়া; আর খোদ দেওয়ার কাজটি। তাবারি, ইবনে কাসীর আর সাদি প্রথমটিকেই বেছে নেন। ইবনে কাসীরের ব্যাখ্যা: মনে টাকার চাহিদা আর মায়া থাকা অবস্থাতেই তা দিয়ে দেওয়া। সাদিও একইভাবে পড়েন, আর যোগ করেন, সম্পদের প্রতি ভালোবাসা প্রত্যেক মানুষের ভেতরেই আছে।"
          },
          {
            "en": "The app's two translations part company at this clause, and a reader is better off knowing why. The English renders it in spite of love for it, following the reading those three commentators prefer. The Bengali renders it for the love of Allah, which is the second of al-Qurtubi's three. Neither is a mistake, and neither is a private opinion; both are readings the tafsir tradition records for the same pronoun. In practice they meet, since wealth handed over for love of Allah is wealth handed over while it is still loved.",
            "bn": "এই অংশে অ্যাপের দুই অনুবাদ আলাদা পথে যায়, আর পাঠকের জেনে রাখাই ভালো কেন। ইংরেজিতে আছে ‘সম্পদের প্রতি ভালোবাসা থাকা সত্ত্বেও’, অর্থাৎ ওই তিন মুফাসসিরের পছন্দ করা পাঠ। বাংলায় আছে ‘আল্লাহর ভালবাসার্থে’, যা কুরতুবির তিনটির মধ্যে দ্বিতীয়টি। কোনোটিই ভুল নয়, কোনোটিই কারও নিজস্ব মতও নয়; একই সর্বনামের দুটো পাঠই তাফসিরের ধারায় লেখা আছে। বাস্তবে দুটো এক জায়গাতেই মেলে, কারণ আল্লাহর ভালোবাসায় যে সম্পদ হাতছাড়া করা হয়, সেটি তখনো ভালোবাসা অবস্থাতেই হাতছাড়া হয়।"
          },
          {
            "en": "Ibn Kathir supports the reading he prefers from the Quran itself. 76:8 uses the same construction of those who give food to the needy, the orphan and the captive, and 3:92 says plainly that you will never attain birr until you spend from what you love. He then sets 59:9 above both, where the Ansar give the Muhajirun preference over themselves although they are in privation, and calls that a higher category, since those in our verse give away what they covet while those in 59:9 give away what they need.",
            "bn": "নিজের পছন্দ করা পাঠের সমর্থন ইবনে কাসীর আনেন কুরআন থেকেই। 76:8 আয়াতে একই গঠন এসেছে তাদের প্রসঙ্গে, যারা মিসকিন, ইয়াতিম আর বন্দিকে খাবার খাওয়ায়। অ্যাপের বাংলায় অবশ্য 76:8 আয়াতও দ্বিতীয় পাঠটিই নিয়েছে, ‘আল্লাহর প্রতি তাদের ভালবাসার কারণে’; তাই ইবনে কাসীরের দলিলটা এখানে দাঁড়িয়ে আছে আরবি গঠনের ওপর, বাংলা অনুবাদের ওপর নয়। আর 3:92 আয়াত সোজা বলে দেয়, যা ভালোবাসো তা থেকে খরচ না করা পর্যন্ত তোমরা নেকি পাবে না। এরপর তিনি দুটোরই ওপরে রাখেন 59:9 আয়াতকে, যেখানে আনসাররা নিজেরা অভাবে থেকেও মুহাজিরদের নিজেদের ওপর প্রাধান্য দেন। একে তিনি বলেন উঁচু স্তর, কারণ আমাদের আয়াতের মানুষ দিয়ে দেয় যা সে চায়, আর 59:9 আয়াতের মানুষ দিয়ে দেয় যা তার নিজেরই দরকার।"
          }
        ]
      },
      {
        "h": {
          "en": "The Best Charity",
          "bn": "সবচেয়ে উত্তম সদকা"
        },
        "p": [
          {
            "en": "To the clause about wealth Ibn Kathir attaches a narration found in the two Sahihs from Abu Hurayrah (RA). In al-Bukhari's wording the Prophet ﷺ was asked which charity is greatest in reward and answered: that you give charity while you are healthy and covetous, fearing poverty and hoping for wealth (al-Bukhari 1419). The hadith puts a clock on the verse's clause. Wealth is loved while you are well and still afraid of being poor, and that is exactly when the giving is worth most.",
            "bn": "সম্পদের অংশটির সাথে ইবনে কাসীর জুড়ে দেন আবু হুরায়রা (রাঃ)-এর একটি বর্ণনা, যা দুই সহিহেই আছে। বুখারির ভাষায়, নবী ﷺ-কে জিজ্ঞেস করা হয়েছিল কোন সদকার সওয়াব সবচেয়ে বেশি। তিনি বললেন: সুস্থ অবস্থায়, সম্পদের লোভ থাকা অবস্থায় সদকা করা, যখন তুমি অভাবের ভয় করো আর ধনী হওয়ার আশা রাখো (বুখারি ১৪১৯)। হাদিসটি আয়াতের কথাটিকে একটা নির্দিষ্ট সময়ের সাথে বেঁধে দেয়। আপনি যখন সুস্থ আর গরিব হওয়ার ভয় এখনো মনে আছে, সম্পদ তখনই সবচেয়ে প্রিয়; আর দেওয়ার দামও ঠিক তখনই সবচেয়ে বেশি।"
          },
          {
            "en": "To the clause about promises he attaches another, also from Abu Hurayrah (RA). The signs of a hypocrite are three: when he speaks he lies, when he promises he breaks it, and when he is entrusted he betrays (al-Bukhari 33). Ibn Kathir introduces it by saying that the opposite of fulfilling a covenant is hypocrisy. That is why a kept promise stands in this list beside prayer and zakah. It is not being placed there as good manners; it is one of the marks by which faith is told apart from an imitation of faith.",
            "bn": "দেওয়া কথার অংশটির সাথে তিনি জুড়ে দেন আরেকটি বর্ণনা, সেটিও আবু হুরায়রা (রাঃ)-এর সূত্রে। মুনাফিকের আলামত তিনটি: কথা বললে মিথ্যা বলে, ওয়াদা করলে ভঙ্গ করে, আর আমানত রাখা হলে খেয়ানত করে (বুখারি ৩৩)। বর্ণনাটি আনার আগে ইবনে কাসীর বলেন, অঙ্গীকার রক্ষার উল্টো জিনিসটাই মুনাফিকি। সেজন্যই কথা রাখা এই তালিকায় নামাজ আর যাকাতের পাশে জায়গা পেয়েছে। এটা নিছক ভদ্রতা হিসেবে এখানে আসেনি। এটা সেই আলামতগুলোর একটি, যা দিয়ে খাঁটি ঈমানকে নকল ঈমান থেকে আলাদা করে চেনা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Beside This List",
          "bn": "এই তালিকার পাশের আয়াত"
        },
        "p": [
          {
            "en": "3:92 states the same principle without any list: you will never attain birr until you spend from what you love. 59:9 raises it a step, describing the Ansar who gave the Muhajirun preference over themselves although they were in privation, and adding that whoever is protected from the stinginess of his own soul is among the successful. Between the two, our verse holds the middle rung, since it asks for what is loved rather than for what is needed.",
            "bn": "3:92 আয়াত কোনো তালিকা ছাড়াই একই নীতি বলে দেয়: যা ভালোবাসো তা থেকে খরচ না করা পর্যন্ত তোমরা নেকি পাবে না। 59:9 আয়াত এক ধাপ ওপরে ওঠে। সেখানে সেই আনসারদের কথা, যাঁরা নিজেরা অভাবে থেকেও মুহাজিরদের নিজেদের ওপর প্রাধান্য দিয়েছিলেন; সাথে যোগ করে, যাকে নিজের মনের কার্পণ্য থেকে বাঁচানো হয়েছে সে-ই সফল। এ দুইয়ের মাঝের ধাপে আছে আমাদের আয়াত, কারণ সে চায় প্রিয় জিনিস থেকে দেওয়া, একেবারে প্রয়োজনের জিনিস থেকে নয়।"
          },
          {
            "en": "4:36 lists nearly the same recipients as a command to this ummah, adding the near and the far neighbour, the companion at your side, and those in your charge, and it closes by saying that Allah does not love the proud and boastful. 13:20 isolates the covenant clause on its own: those who fulfil the covenant of Allah and do not break the contract. And 22:37 states in another setting what our verse opens with, that neither the meat of the sacrifices nor their blood reaches Allah, but the taqwa from you does.",
            "bn": "৪:৩৬ আয়াত প্রায় একই লোকদের তালিকা দেয়, এবার এই উম্মতের প্রতি হুকুম হিসেবে; সাথে যোগ করে নিকট ও দূর প্রতিবেশী, পাশের সাথী আর অধীনস্থদের। আর শেষ হয় এই বলে যে আল্লাহ অহংকারী ও দাম্ভিককে ভালোবাসেন না। ১৩:২০ আয়াত অঙ্গীকারের কথাটিকে আলাদা করে তুলে ধরে: যারা আল্লাহকে দেওয়া কথা রক্ষা করে আর প্রতিশ্রুতি ভাঙে না। আর ২২:৩৭ আয়াত অন্য প্রসঙ্গে সেই কথাটিই বলে, যা দিয়ে আমাদের আয়াত শুরু হয়েছে: কোরবানির গোশতও আল্লাহর কাছে পৌঁছায় না, রক্তও নয়, পৌঁছায় তোমাদের তাকওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "How the List Is Kept",
          "bn": "তালিকাটা যেভাবে মেনে চলা যায়"
        },
        "p": [
          {
            "en": "The verse resists being kept in the abstract, because it names people rather than causes. Take it in order across a week. Belief first: read the five things named and ask which of them last changed a decision you made. Then wealth: find an actual name for each category instead of a heading, a relative who is struggling, one orphan, one person who asked you and was put off. Give while it is inconvenient, which is the condition the verse and the hadith both attach to it.",
            "bn": "আয়াতটিকে শুধু তত্ত্বের মধ্যে আটকে রাখা যায় না, কারণ সে খাতের নাম নেয় না, মানুষের নাম নেয়। এক সপ্তাহ ধরে একে একে ধরুন। আগে ঈমান: নাম নেওয়া পাঁচটি বিষয় পড়ুন আর নিজেকে জিজ্ঞেস করুন, এর কোনটি শেষবার আপনার কোনো সিদ্ধান্ত বদলে দিয়েছিল। তারপর সম্পদ: প্রতিটি খাতের জন্য শুধু শিরোনাম নয়, একটা করে সত্যিকারের নাম খুঁজে বের করুন। টানাটানিতে থাকা একজন আত্মীয়, একজন ইয়াতিম, এমন একজন যে চেয়েছিল আর আপনি ঘুরিয়ে দিয়েছিলেন। দিন এমন সময়ে, যখন দিতে কষ্ট হয়, কারণ আয়াত আর হাদিস দুটোই এই শর্ত জুড়ে দিয়েছে।"
          },
          {
            "en": "Then the two fixed duties, prayer and zakah, which are the parts most people already keep, and then the two that quietly go missing: a promise and patience. Write down what you promised this month and to whom, and clear the list. And notice which of the three patiences is actually yours to practise now, narrow money, illness or grief, or the moment when danger arrives, because the verse only calls anyone truthful after the whole of it has been counted together.",
            "bn": "তারপর বাঁধা দুই ফরজ, নামাজ আর যাকাত; এ দুটো বেশিরভাগ মানুষ এমনিতেই পালন করেন। তারপর সেই দুটো, যা চুপচাপ হারিয়ে যায়: দেওয়া কথা আর সবর। এ মাসে কাকে কী কথা দিয়েছেন লিখে ফেলুন, তারপর একে একে সব কথা রাখুন। আর খেয়াল করুন, তিন রকম সবরের কোনটি এখন সত্যিই আপনার সামনে: টাকার টানাটানি, অসুখ বা শোক, নাকি বিপদ এসে দাঁড়ানোর মুহূর্ত। কারণ পুরো তালিকা একসাথে গোনা শেষ হওয়ার পরই আয়াত কাউকে সত্যবাদী বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the List",
          "bn": "তালিকাটা চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "The verse is a description rather than a request, so the supplication has to be built out of it. This one is composed here and is not narrated: O Allah, do not let my religion stop at the direction I face. Give me belief in You, in the Last Day, in Your angels, Your Book and Your prophets that travels as far as my hands. Loosen my grip on wealth while I still love it, and put the relative, the orphan, the needy, the traveller and the one who asks into my week.",
            "bn": "আয়াতটি কোনো আবেদন নয়, বর্ণনা; তাই দোয়াটি এর ভেতর থেকে গড়ে নিতে হয়। নিচের দোয়াটি এখানে বানানো, কোনো বর্ণিত দোয়া নয়: হে আল্লাহ, আমার দ্বীন যেন শুধু কোন দিকে মুখ করি, সেখানেই থেমে না যায়। আপনার ওপর, শেষ দিনের ওপর, আপনার ফেরেশতা, কিতাব আর নবীদের ওপর আমাকে এমন ঈমান দিন, যা আমার হাত পর্যন্ত পৌঁছায়। সম্পদ যখন এখনো আমার প্রিয়, তখনই তার ওপর আমার মুঠো আলগা করে দিন। আর আত্মীয়, ইয়াতিম, মিসকিন, মুসাফির আর যে চায়, তাদের আমার সপ্তাহের ভেতরে এনে দিন।"
          },
          {
            "en": "And the close: keep me in prayer and in zakah, make me a man whose promise can be relied upon, and give me patience in poverty, in pain and at the moment fear arrives. When the counting is done, write me among those this verse calls truthful. A shorter request sits well beside it, and the Quran supplies it in 2:201, which asks for good in this world, good in the Hereafter, and protection from the punishment of the Fire.",
            "bn": "আর শেষে: আমাকে নামাজে আর যাকাতে অটল রাখুন, এমন মানুষ বানান যার কথার ওপর ভরসা করা যায়, আর সবর দিন অভাবে, কষ্টে আর ভয় এসে দাঁড়ানোর মুহূর্তে। গোনা শেষ হলে এই আয়াত যাদের সত্যবাদী বলে, আমাকে তাদের মধ্যে লিখে নিন। এর সাথে ছোট একটি দোয়াও খুব মানায়, আর কুরআন নিজেই তা দিয়ে রেখেছে 2:201 আয়াতে: সেখানে চাওয়া হয় দুনিয়ায় কল্যাণ, আখিরাতে কল্যাণ আর জাহান্নামের শাস্তি থেকে রক্ষা।"
          }
        ]
      },
      {
        "h": {
          "en": "Where an Honest Reader Stops",
          "bn": "সৎ পাঠক যেখানে থামেন"
        },
        "p": [
          {
            "en": "The verse begins by refusing to let religion be a direction. Which part of mine is still a direction, something I face rather than something I do, and what would it cost me to convert it into an action this week? The wealth clause asks for giving while the wealth is loved. When did I last give something away that I actually wanted to keep, and what did I tell myself afterwards about why that was enough?",
            "bn": "আয়াত শুরুই হয় এ কথা দিয়ে যে, দ্বীন নিছক একটা দিক নয়। আমার দ্বীনের কোন অংশটা এখনো শুধু একটা দিক হয়ে আছে, যেদিকে আমি মুখ ফেরাই, কিন্তু যা আমি করি না? এ সপ্তাহে সেটাকে কাজে বদলাতে গেলে আমার কী খরচ হবে? সম্পদের কথাটি চায়, ভালোবাসা থাকতে থাকতেই দিয়ে দেওয়া। শেষ কবে আমি এমন কিছু দিয়েছি, যা আসলে রেখে দিতে চেয়েছিলাম? আর পরে নিজেকে কী বুঝিয়েছি যে ওটুকুই যথেষ্ট?"
          },
          {
            "en": "A kept promise stands here between zakah and patience. What did I promise, to whom, and how long ago, and is there anyone still waiting on a word of mine? Three patiences are named, and one of them is usually the one I am being asked for at any given time. Which is it now? And if the verse were used to describe me, at which item in the list would an honest reader stop and look up?",
            "bn": "রাখা কথা এখানে দাঁড়িয়ে আছে যাকাত আর সবরের মাঝখানে। আমি কী কথা দিয়েছি, কাকে দিয়েছি, কতদিন আগে দিয়েছি, আর আমার কোনো কথার জন্য এখনো কি কেউ বসে আছে? তিন রকম সবরের নাম আছে, আর যেকোনো সময়ে সাধারণত তার একটাই আমার কাছে চাওয়া হয়। এখন সেটা কোনটা? আর আয়াতটি দিয়ে যদি আমার পরিচয় লেখা হতো, তালিকার কোন জায়গায় এসে একজন সৎ পাঠক থেমে গিয়ে মুখ তুলে তাকাতেন?"
          }
        ]
      },
      {
        "h": {
          "en": "A Word to Teachers",
          "bn": "শিক্ষকের জন্য একটি কথা"
        },
        "p": [
          {
            "en": "This is the verse for a class that has started arguing about outward markers. Read the first clause and stop there: it is not righteousness that you turn your faces east or west. Ask what today's east and west are, the marker people carry as proof of religion while the rest of the list goes unread. Then read the list slowly and let the students count what is actually in it before anyone comments.",
            "bn": "বাইরের চিহ্ন নিয়ে যে ক্লাসে তর্ক শুরু হয়ে গেছে, এই আয়াত সেই ক্লাসের জন্য। প্রথম কথাটি পড়ুন আর সেখানেই থামুন: পূর্ব বা পশ্চিমে মুখ ফেরানোতে নেকি নেই। জিজ্ঞেস করুন, আজকের দিনের পূর্ব-পশ্চিম কোনগুলো, অর্থাৎ কোন চিহ্নটা মানুষ দ্বীনের প্রমাণ হিসেবে বয়ে বেড়ায় আর তালিকার বাকিটা পড়াই হয় না। তারপর তালিকাটা ধীরে পড়ুন, আর কেউ মন্তব্য করার আগেই ছাত্রদের গুনে দেখতে দিন তাতে আসলে কী কী আছে।"
          },
          {
            "en": "Then set the exercise the verse itself sets. Have each student write the list down and mark the items they can evidence from the past month, from what happened rather than from what they intended. Nobody's sheet comes back full, and that is the lesson rather than a failure of the class. It is also why the verse ends by calling those who keep it the truthful, since the list tests whether what a person says about his faith matches what his week contains.",
            "bn": "তারপর আয়াত নিজে যে অনুশীলনটা দেয়, সেটাই দিন। প্রত্যেক ছাত্রকে তালিকাটা লিখতে বলুন, আর গত এক মাসে যেগুলোর প্রমাণ সে দিতে পারে সেগুলোতে দাগ দিতে বলুন; যা করতে চেয়েছিল তা দিয়ে নয়, যা সত্যিই ঘটেছে তা দিয়ে। কারও কাগজই পুরো দাগ নিয়ে ফেরে না, আর এটাই আসল শিক্ষা, ক্লাসের ব্যর্থতা নয়। আয়াত যে এই মানুষদের সত্যবাদী বলে শেষ হয়, তারও কারণ এটাই: তালিকাটা যাচাই করে, মানুষ নিজের ঈমান নিয়ে যা বলে আর তার সপ্তাহে যা ঘটে, দুটো মেলে কি না।"
          }
        ]
      }
    ]
  },
  "2:183": {
    "sections": [
      {
        "h": {
          "en": "Written, As It Was Written",
          "bn": "লেখা হলো, যেমন লেখা হয়েছিল"
        },
        "p": [
          {
            "en": "The verse uses the vocabulary of decree: kutiba alaykumus-siyam, fasting has been written upon you. In this same stretch of Surah al-Baqarah the identical verb prescribes just retribution in 2:178 and the bequest in 2:180. Fasting arrives with that weight — not a recommendation for the devout, but legislation for the whole community, addressed as you who believe. It was made obligatory in Madinah, in the second year after the hijrah.",
            "bn": "আয়াতের ভাষা ফরমানের ভাষা: কুতিবা আলাইকুমুস সিয়াম, তোমাদের ওপর রোজা লিখে দেওয়া হয়েছে। সূরা বাকারার এই অংশেই একই ক্রিয়া দিয়ে ২:১৭৮ আয়াতে কিসাস আর ২:১৮০ আয়াতে অসিয়ত ফরজ করা হয়েছে। রোজাও আসে সেই ওজন নিয়ে। এটা দ্বীনদার কিছু মানুষের জন্য পরামর্শ নয়, গোটা উম্মতের জন্য আইন, আর সম্বোধনটাও সবাইকে: ‘হে ঈমানদারগণ’। রোজা ফরজ হয় মদীনায়, হিজরতের দ্বিতীয় বছরে।"
          },
          {
            "en": "Then comes a clause that changes the mood of the command: kama kutiba alal-ladhina min qablikum, as it was written upon those before you. Communities before this ummah were also given fasting in some form; the Quran does not detail their forms, and the differing reports the commentators relate about them settle nothing. The point of the comparison is companionship in discipline: restraining the self for Allah's sake is not an innovation but an old, shared road.",
            "bn": "এরপর আসে এমন একটি কথা, যা হুকুমের সুরটাই বদলে দেয়: কামা কুতিবা আলাল্লাযীনা মিন কাবলিকুম, যেমন লেখা হয়েছিল তোমাদের আগের লোকদের ওপর। এই উম্মতের আগের জাতিগুলোকেও কোনো না কোনোভাবে রোজা দেওয়া হয়েছিল। সে রোজা কেমন ছিল, কুরআন তা খুলে বলেনি। মুফাসসিররা যেসব বর্ণনা আনেন, সেগুলোও একটা আরেকটার সাথে মেলে না, তাই তা দিয়ে কিছু নিশ্চিত হয় না। তুলনাটার আসল কথা হলো, এই সাধনায় আপনি একা নন। আল্লাহর জন্য নিজেকে সামলে রাখা নতুন কিছু নয়; এ বহু পুরোনো পথ, যে পথে সবাই একসাথে হেঁটেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Purpose Clause",
          "bn": "রোজা কীসের জন্য"
        },
        "p": [
          {
            "en": "The verse ends by telling us what fasting is for: la'allakum tattaqun, that you may attain taqwa. Taqwa is guarding — placing something between yourself and what harms you. The training logic is plain. A person who can refuse permitted food, drink and marital relations from dawn to sunset, for no reason except that Allah said so, is building exactly the muscle needed to refuse what Allah forbade in the other eleven months.",
            "bn": "আয়াত শেষ হয় রোজা কীসের জন্য তা জানিয়ে: লাআল্লাকুম তাত্তাকুন, যাতে তোমরা তাকওয়া অর্জন করো। তাকওয়া মানে বাঁচিয়ে চলা: নিজের আর ক্ষতিকর জিনিসের মাঝখানে একটা আড়াল রাখা। প্রশিক্ষণের হিসাবটা সোজা। ভোর থেকে সূর্যাস্ত পর্যন্ত যে মানুষ হালাল খাবার, পানীয় আর স্ত্রী-সঙ্গ ছেড়ে থাকতে পারে, শুধু আল্লাহ বলেছেন বলে, সে ঠিক সেই পেশিটাই গড়ে তুলছে, যা দিয়ে বাকি এগারো মাস আল্লাহর হারাম করা জিনিস থেকে দূরে থাকা যায়।"
          },
          {
            "en": "The commentators add a second mechanism: fasting narrows the routes of appetite. Hunger quietens the demands of the self, and with them much of what leads to sin. So the fast is aimed at the interior; the empty stomach is the instrument, not the achievement. A fast measured only in hours endured has been read at the level of the husk. The verse itself states the target, and the target is taqwa.",
            "bn": "মুফাসসিররা আরেকটি দিক যোগ করেন: রোজা প্রবৃত্তির রাস্তাগুলো সরু করে দেয়। ক্ষুধা নফসের চাহিদাকে শান্ত করে, আর তার সাথে দমে যায় গুনাহের দিকে টেনে নেওয়া অনেক কিছুই। তাই রোজার আসল নিশানা অন্তর। খালি পেট হলো উপায়, অর্জন নয়। যে রোজা শুধু কত ঘণ্টা কষ্ট সইলাম তা দিয়ে মাপা হয়, সে রোজার খোসাটুকুই ধরা হয়েছে। আয়াত নিজেই লক্ষ্যটা বলে দিয়েছে, আর সে লক্ষ্য তাকওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "From Numbered Days to the Month",
          "bn": "গোনা কয়েক দিন থেকে পুরো মাস"
        },
        "p": [
          {
            "en": "The legislation unfolds across the passage. 2:184 speaks of numbered days and records concessions; 2:185 then names the month and gives the reason for its choice: Ramadan, in which the Quran was sent down as guidance for mankind. The month of fasting is the month of revelation — the discipline of the body is tied to the arrival of the Book, as if an emptier vessel were being prepared to carry it.",
            "bn": "বিধানটা পুরো অংশ জুড়ে ধাপে ধাপে খোলে। ২:১৮৪ আয়াত বলে গোনা কয়েকটি দিনের কথা, আর ছাড়ের বিধান দেয়। তারপর ২:১৮৫ আয়াত মাসটির নাম নেয়, আর কেন এই মাস, তাও জানায়: রমজান, যে মাসে মানুষের হিদায়াতের জন্য কুরআন নাজিল হয়েছে। রোজার মাসই ওহির মাস। শরীরের সংযমকে বেঁধে দেওয়া হয়েছে কিতাব আসার সাথে, যেন কিতাব ধারণের জন্য পাত্রটাকে একটু খালি করে তৈরি করা হচ্ছে।"
          },
          {
            "en": "The same verse insists twice on gentleness: whoever is ill or travelling may make up the days later, for Allah intends ease for you, and does not intend hardship for you. The command that trains restraint is itself restrained. Any presentation of fasting as competitive severity has left the text; the Lawgiver built the exemptions into the founding verses themselves, in the same breath as the obligation.",
            "bn": "একই আয়াত দুবার কোমলতার কথা মনে করিয়ে দেয়: কেউ অসুস্থ হলে বা সফরে থাকলে পরে দিনগুলো পূরণ করে নেবে, কারণ আল্লাহ তোমাদের জন্য সহজ চান, কঠিন চান না। যে হুকুম সংযম শেখায়, সে হুকুম নিজেও সংযত। রোজাকে কে কত কঠোর হতে পারে তার প্রতিযোগিতা বানালে মূল পাঠ থেকেই সরে যাওয়া হয়। বিধানদাতা ছাড়গুলো রেখেছেন একেবারে গোড়ার আয়াতগুলোতেই, ফরজ করার কথার সাথে একই নিঃশ্বাসে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse in the Middle",
          "bn": "মাঝখানে বসানো আয়াতটি"
        },
        "p": [
          {
            "en": "Between the fasting legislation of 2:183-185 and the night regulations of 2:187 sits 2:186: when My servants ask you about Me, I am near; I answer the call of the caller when he calls. Commentators have long noticed the placement, and also what is missing from the verse: the usual instruction say does not appear between Allah and the asker. In the middle of hunger and rules stands the most intimate sentence of nearness in the surah.",
            "bn": "রোজার বিধান (২:১৮৩-১৮৫) আর রাতের নিয়মকানুন (২:১৮৭), এই দুইয়ের মাঝখানে বসে আছে ২:১৮৬: আমার বান্দারা যখন তোমাকে আমার সম্পর্কে জিজ্ঞেস করে, তখন আমি তো কাছেই; যে ডাকে, সে যখন ডাকে, আমি তার ডাকে সাড়া দিই। মুফাসসিররা অনেক আগেই এই জায়গাটা খেয়াল করেছেন। আয়াতে কী নেই, সেটাও খেয়াল করেছেন: আল্লাহ আর প্রশ্নকারীর মাঝে সাধারণত যে ‘বলো’ থাকে, এখানে তা নেই। ক্ষুধা আর নিয়মকানুনের ঠিক মাঝখানে দাঁড়িয়ে আছে এই সূরায় আল্লাহর নৈকট্যের সবচেয়ে আপন কথাটি।"
          },
          {
            "en": "The arrangement teaches what the month is for. Fasting empties; du'a fills. A person weakened by the day's abstention is, precisely then, addressed by I am near. Whoever keeps Ramadan as a diet with rituals has missed the door the text itself placed mid-passage: the fasting person is being positioned, day after day, as a caller whom Allah has announced in advance that He answers.",
            "bn": "এই সাজানোটাই শেখায়, মাসটা কীসের জন্য। রোজা খালি করে, দোয়া ভরিয়ে দেয়। সারা দিন না খেয়ে দুর্বল মানুষটিকে ঠিক তখনই শোনানো হয়: আমি তো কাছেই। যে রমজানকে কিছু আনুষ্ঠানিকতা মেশানো ডায়েট বানিয়ে ফেলে, সে হারিয়ে ফেলে সেই দরজা, যা আয়াতগুলোর ঠিক মাঝখানে বসানো। দিনের পর দিন রোজাদারকে এমন জায়গায় দাঁড় করানো হচ্ছে, যেখানে সে ডাকবে, আর আল্লাহ আগেই ঘোষণা দিয়ে রেখেছেন যে তিনি সাড়া দেবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Fast That Changes Conduct",
          "bn": "যে রোজা আচরণ বদলায়"
        },
        "p": [
          {
            "en": "The Prophet ﷺ tied the fast to behaviour in words al-Bukhari preserves: whoever does not give up false speech and acting upon it, Allah has no need of his giving up his food and his drink. And in the agreed-upon hadith, fasting is a shield, and the fasting person is told not to answer abuse in kind but to say: I am fasting. The fast extends from the stomach to the tongue and the temper.",
            "bn": "নবী ﷺ রোজাকে আচরণের সাথে বেঁধে দিয়েছেন। ইমাম বুখারী তাঁর কথাটি সংরক্ষণ করেছেন: যে মিথ্যা কথা আর সে অনুযায়ী কাজ ছাড়ল না, তার খাবার-পানীয় ছেড়ে দেওয়ায় আল্লাহর কোনো প্রয়োজন নেই। আর বুখারী ও মুসলিম দুজনেই যে হাদিস এনেছেন, তাতে আছে: রোজা ঢাল। রোজাদারকে কেউ গালি দিলে সে যেন পাল্টা গালি না দেয়, বরং বলে: আমি রোজাদার। রোজা তাই পেট ছাড়িয়ে পৌঁছে যায় জিভ আর মেজাজ পর্যন্ত।"
          },
          {
            "en": "So the honest yearly measure is the one the verse itself installs: la'allakum tattaqun. Did the month leave more guarding behind — over speech, over earnings, over the eyes — than it found? The verse's opening comfort still stands: believers before us walked this same road, and it was written for them as it was written for us, because the goal at its end, taqwa, has never changed.",
            "bn": "তাই প্রতি বছর নিজেকে সৎভাবে মাপার মাপকাঠি সেটাই, যা আয়াত নিজে বসিয়ে দিয়েছে: লাআল্লাকুম তাত্তাকুন। মাসটা যাওয়ার সময় কি আসার সময়ের চেয়ে বেশি সাবধানতা রেখে গেল? কথায়, উপার্জনে, চোখের দৃষ্টিতে? আয়াতের শুরুর সান্ত্বনাটা এখনো আছে: আমাদের আগের মুমিনরাও এই পথে হেঁটেছেন। তাঁদের ওপরও রোজা লেখা হয়েছিল, যেমন লেখা হয়েছে আমাদের ওপর, কারণ পথের শেষের লক্ষ্য তাকওয়া কখনো বদলায়নি।"
          }
        ]
      }
    ]
  },
  "2:186": {
    "sections": [
      {
        "h": {
          "en": "An Answer Without a Messenger",
          "bn": "মধ্যস্থতা ছাড়া উত্তর"
        },
        "p": [
          {
            "en": "The verse begins with a question being reported: and when My servants ask you about Me. Elsewhere in the Quran, when people put a question to the Prophet ﷺ, the answer opens with qul, say to them. Here that word is absent. The reply comes straight back: fa inni qarib, then indeed I am near. The commentators note the omission and read it as part of the meaning rather than a stylistic accident.",
            "bn": "আয়াত শুরু হয় একটি প্রশ্নের কথা জানিয়ে: আর যখন আমার বান্দারা আপনাকে আমার সম্পর্কে জিজ্ঞেস করে। কুরআনের অন্য জায়গায় মানুষ নবী ﷺ-কে কিছু জিজ্ঞেস করলে জবাব শুরু হয় ‘কুল’ দিয়ে, মানে ‘আপনি বলে দিন’। এখানে সে শব্দটি নেই। জবাব আসে সরাসরি: ফা-ইন্নী কারীব, আমি তো কাছেই আছি। মুফাসসিররা এই না-থাকাটা লক্ষ করেছেন, আর একে ভাষার কোনো আকস্মিক ভঙ্গি না ধরে অর্থেরই অংশ হিসেবে পড়েছেন।"
          },
          {
            "en": "Two more details carry weight. Allah calls them 'ibadi, My servants, a term of belonging, before saying anything about their request. And He describes Himself as qarib, near, using an adjective rather than a verb, so nearness is stated as a permanent quality and not as something that happens when we call. The response clause follows: ujibu da'wata ad-da'i idha da'ani, I answer the call of the caller when he calls Me.",
            "bn": "আরও দুটো খুঁটিনাটি বড় অর্থ বহন করে। তাদের চাওয়ার কথা কিছু বলার আগেই আল্লাহ তাদের ডাকেন ‘ইবাদী’, আমার বান্দারা। শব্দটাতেই আছে আপনত্ব: তারা তাঁরই লোক। আর তিনি নিজের পরিচয় দেন ‘কারীব’, কাছে, বলে। এটা ক্রিয়া নয়, বিশেষণ। তাই নৈকট্য এখানে তাঁর স্থায়ী গুণ, আমরা ডাকলে তবেই ঘটে এমন কিছু নয়। এরপর আসে সাড়া দেওয়ার কথা: উজীবু দা'ওয়াতাদ্‌ দা'ই ইযা দা'আন, যে ডাকে, সে যখন আমাকে ডাকে, আমি তার ডাকে সাড়া দিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Placed Inside Ramadan",
          "bn": "রমজানের মাঝখানে বসানো"
        },
        "p": [
          {
            "en": "The setting is unmistakable. Verse 2:185 has just described Ramadan as the month in which the Quran was sent down and given the concession for the traveller and the ill. Verse 2:187 goes on to the rules of the nights of fasting. Between these two sits a verse about nearness and supplication, with nothing on its surface about fasting at all. The commentators treat this placement as the point: du'a belongs to the month.",
            "bn": "প্রেক্ষাপটটা ভুল বোঝার উপায় নেই। ঠিক আগের আয়াত ২:১৮৫ রমজানকে বলেছে সেই মাস, যে মাসে কুরআন নাজিল হয়েছে, আর মুসাফির ও অসুস্থকে ছাড় দিয়েছে। পরের আয়াত ২:১৮৭ চলে যায় রোজার রাতগুলোর বিধানে। এই দুইয়ের মাঝখানে বসে আছে নৈকট্য আর দোয়ার একটি আয়াত, যার শব্দে রোজার কোনো উল্লেখই নেই। মুফাসসিররা এই বসানোটাকেই আসল কথা বলে দেখেন: দোয়া এই মাসেরই অংশ।"
          },
          {
            "en": "Several reports in the tafsir literature describe companions or a bedouin asking whether their Lord is near, so that they might whisper to Him, or far, so that they should call out. These reports vary in strength and are relayed through different chains, so it is safer to say that the verse answers a real and recurring human question than to fix it to one incident. Its wording is general and speaks to anyone who has wondered how far away God is.",
            "bn": "তাফসীরের কিতাবে কয়েকটি বর্ণনা আছে: কিছু সাহাবী, কিংবা এক বেদুইন, জানতে চেয়েছিলেন, আমাদের রব কি কাছে, তাহলে চুপিচুপি ডাকব; নাকি দূরে, তাহলে জোরে ডাকব? বর্ণনাগুলোর সনদ সমান মজবুত নয়, এসেছেও ভিন্ন ভিন্ন সূত্রে। তাই আয়াতটিকে কোনো একটি ঘটনায় বেঁধে না ফেলে এটুকু বলাই নিরাপদ: মানুষের মনে সত্যিই যে প্রশ্ন জাগে, বারবার জাগে, আয়াতটি তারই জবাব। এর ভাষা সবার জন্য খোলা। আল্লাহ কত দূরে, এ কথা যে কখনো ভেবেছে, আয়াতটি তার সাথেই কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Response Means",
          "bn": "সাড়া দেওয়ার অর্থ"
        },
        "p": [
          {
            "en": "The verse promises a response, and the commentators are careful not to flatten that into getting whatever is asked. A hadith in the Musnad of Ahmad, with a similar report in at-Tirmidhi, describes three possible outcomes for a supplication made without sin or severing of kinship: it is given, or it is stored for the hereafter, or an equivalent harm is turned away. On that reading no du'a is wasted, though not every du'a arrives in the shape it was posted.",
            "bn": "আয়াত সাড়া দেওয়ার প্রতিশ্রুতি দেয়, আর মুফাসসিররা সাবধান থাকেন, যেন একে ‘যা চাইব তা-ই পাব’ বানিয়ে ছোট করে ফেলা না হয়। মুসনাদে আহমাদের একটি হাদিসে (তিরমিযীতেও কাছাকাছি বর্ণনা আছে) এসেছে: যে দোয়ায় গুনাহ বা আত্মীয়তা ছিন্ন করার কিছু নেই, তার তিনটি পরিণতির একটি ঘটে। হয় চাওয়া জিনিসটা দেওয়া হয়, নয়তো আখিরাতের জন্য জমা রাখা হয়, নয়তো সমান কোনো বিপদ সরিয়ে দেওয়া হয়। এভাবে দেখলে কোনো দোয়াই বৃথা যায় না, যদিও সব দোয়া ঠিক যে রূপে চাওয়া হয়েছিল, সেই রূপে ফেরে না।"
          },
          {
            "en": "The verse then turns the direction around: falyastajibu li walyu'minu bi, so let them respond to Me and believe in Me, that they may be rightly guided. The verb for Allah answering the servant, ujibu, returns from the same root in another form for the servant answering Allah. Asking and obeying are placed on one continuum. The commentators generally read this as a condition of quality rather than eligibility: the more responsive the servant, the more the relationship works in both directions.",
            "bn": "এরপর আয়াত দিকটা উল্টে দেয়: ফাল-ইয়াস্তাজীবূ লী ওয়াল-ইউ'মিনূ বী, অতএব তারাও আমার ডাকে সাড়া দিক আর আমার ওপর ঈমান আনুক, যাতে তারা সঠিক পথ পায়। আল্লাহ বান্দার ডাকে সাড়া দেন, এ কথা বলতে এসেছে 'উজীবু'। বান্দা আল্লাহর ডাকে সাড়া দেবে, এ কথায় এসেছে একই মূলের ক্রিয়া, শুধু রূপটা ভিন্ন। চাওয়া আর মানা তাই একই সুতোয় গাঁথা। মুফাসসিররা সাধারণত একে দোয়া কবুলের যোগ্যতার শর্ত হিসেবে পড়েন না, পড়েন সম্পর্কের মানের শর্ত হিসেবে: বান্দা যত বেশি সাড়া দেয়, সম্পর্কটা তত বেশি দুই দিক থেকে সচল থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Prophet ﷺ Asked",
          "bn": "নবী ﷺ কীভাবে চাইতেন"
        },
        "p": [
          {
            "en": "The Prophet ﷺ called du'a the very substance of worship, in a report transmitted by at-Tirmidhi. His own supplications, preserved in large numbers, are marked by a few consistent habits: praising Allah before asking, sending salawat, using His names appropriate to the request, and asking for the small along with the great. A report in at-Tirmidhi, though of debated strength, has him teaching that a servant should ask Allah even for the strap of his sandal when it breaks.",
            "bn": "তিরমিযীর এক বর্ণনায় নবী ﷺ দোয়াকে বলেছেন ইবাদতের আসল সার। তাঁর নিজের অনেক দোয়া সংরক্ষিত আছে, আর সেগুলোতে কয়েকটি অভ্যাস বারবার দেখা যায়: চাওয়ার আগে আল্লাহর প্রশংসা করা, দরূদ পড়া, যা চাইছেন তার সাথে মিলিয়ে আল্লাহর নাম ধরে ডাকা, আর বড় জিনিসের সাথে ছোট জিনিসও চাওয়া। তিরমিযীর আরেকটি বর্ণনা, যার সনদ নিয়ে মতভেদ রয়েছে, বলছে তিনি শিখিয়েছেন: জুতার ফিতা ছিঁড়ে গেলে বান্দা যেন সেটাও আল্লাহর কাছেই চায়।"
          },
          {
            "en": "Certain times were emphasised in his practice. Al-Bukhari and Muslim record that Allah descends, in a manner befitting Him, in the last third of the night and calls out who is asking of Me that I may give him. Other reports single out the moment of prostration, the time between the adhan and the iqamah, and the last hour of Friday. None of these makes du'a exclusive to a slot; they mark hours when hearts are usually more awake.",
            "bn": "তাঁর আমলে কিছু সময়ের বিশেষ গুরুত্ব ছিল। বুখারী ও মুসলিমে আছে, রাতের শেষ তৃতীয়াংশে আল্লাহ তাঁর শান অনুযায়ী নেমে আসেন আর ডেকে বলেন: কে আছে আমার কাছে চাইবে, আমি তাকে দেব? অন্য বর্ণনায় আলাদা করে এসেছে সিজদার মুহূর্ত, আজান আর ইকামতের মাঝের সময়, আর জুমার দিনের শেষ প্রহর। এর কোনোটিই দোয়াকে কোনো নির্দিষ্ট সময়ে আটকে দেয় না। এগুলো শুধু সেই সময়গুলো চিনিয়ে দেয়, যখন মন সাধারণত বেশি জেগে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Answer Is Slow",
          "bn": "যখন উত্তর দেরিতে আসে"
        },
        "p": [
          {
            "en": "The hardest part of this verse is living in the gap between asking and receiving. The Prophet ﷺ addressed that gap directly, warning in a report in al-Bukhari and Muslim that a servant's supplication is answered so long as he is not hasty, and explaining haste as saying I called and I called and was not answered, and then giving up. The failure named there is abandoning the asking, not the delay itself.",
            "bn": "এই আয়াতের সবচেয়ে কঠিন দিক হলো চাওয়া আর পাওয়ার মাঝের ফাঁকটুকুতে দিন কাটানো। নবী ﷺ সরাসরি এই ফাঁকের কথা বলেছেন। বুখারী ও মুসলিমের এক হাদিসে তিনি সতর্ক করেছেন: বান্দার দোয়া কবুল হতে থাকে, যতক্ষণ না সে তাড়াহুড়া করে। তাড়াহুড়ার ব্যাখ্যা দিয়েছেন এভাবে: সে বলে, ‘আমি ডাকলাম, ডাকলাম, সাড়া পেলাম না’, তারপর চাওয়াই ছেড়ে দেয়। তাহলে এখানে দোষ দেরির নয়, দোষ চাওয়া ছেড়ে দেওয়ার।"
          },
          {
            "en": "It is worth saying plainly what the verse does not say. It does not promise that a specific illness will lift, that a marriage will be restored, or that a result will land on a date we choose. It promises nearness and a hearing. For many people in long waits, that distinction is what makes the verse survivable: they are not being ignored, and the file is not closed, even when nothing visible has moved for a very long time.",
            "bn": "আয়াত কী বলেনি, সেটাও সোজাসুজি বলা দরকার। আয়াত কথা দেয়নি যে নির্দিষ্ট কোনো রোগ সেরে যাবে, ভাঙা সংসার জোড়া লাগবে, কিংবা আমাদের পছন্দের তারিখে ফল এসে হাজির হবে। কথা দিয়েছে নৈকট্যের, আর শোনার। যাঁরা দীর্ঘ অপেক্ষায় আছেন, তাঁদের অনেকের কাছে এই পার্থক্যটুকুই আয়াতটিকে সয়ে নেওয়ার মতো করে তোলে। কেউ তাঁদের উপেক্ষা করছে না, ফাইলও বন্ধ হয়ে যায়নি, যদিও বহুদিন ধরে চোখে পড়ার মতো কিছুই নড়েনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Making It a Habit",
          "bn": "দোয়াকে অভ্যাস বানানো"
        },
        "p": [
          {
            "en": "In practice, the people who keep asking tend to be the ones who made asking small and specific. A short list carried in the head or the phone, three or four items named plainly in one's own language, revisited after a prayer rather than in a special session. Du'a in the mother tongue outside of prayer is agreed upon by the scholars, and honesty in wording usually does more for presence of heart than eloquence.",
            "bn": "বাস্তবে দেখা যায়, যাঁরা চাওয়া ধরে রাখতে পারেন, তাঁরা সাধারণত চাওয়াটাকে ছোট আর নির্দিষ্ট করে নিয়েছেন। মাথায় বা ফোনে রাখা ছোট একটা তালিকা, নিজের ভাষায় সোজা করে লেখা তিন-চারটি বিষয়। আলাদা কোনো আয়োজন করে নয়, নামাজের পর একবার করে সেগুলো আবার চেয়ে নেওয়া। নামাজের বাইরে মাতৃভাষায় দোয়া করা যায়, এ ব্যাপারে আলেমরা একমত। আর শব্দের কারুকাজের চেয়ে শব্দের সততাই সাধারণত মনকে বেশি হাজির রাখে।"
          },
          {
            "en": "The verse also quietly changes what asking is for. If nearness is the permanent fact and the response is guaranteed in some form, then du'a stops being a lottery ticket and becomes the way a servant stays in contact with the One in charge of the outcome. People who pray this way report that the asking itself steadies them, well before anything in the situation has changed.",
            "bn": "আয়াতটি নীরবে আরেকটা জিনিস বদলে দেয়: চাওয়ার উদ্দেশ্য। নৈকট্য যদি স্থায়ী সত্য হয়, আর সাড়া যদি কোনো না কোনো রূপে নিশ্চিত হয়, তাহলে দোয়া আর লটারির টিকিট থাকে না। দোয়া হয়ে যায় সেই পথ, যা দিয়ে বান্দা ফলাফলের মালিকের সাথে যোগাযোগ ধরে রাখে। যাঁরা এভাবে দোয়া করেন, তাঁরা বলেন, পরিস্থিতির কিছু বদলানোর অনেক আগেই চাওয়াটাই তাঁদের মনকে স্থির করে দেয়।"
          }
        ]
      }
    ]
  },
  "2:196": {
    "sections": [
      {
        "h": {
          "en": "The Doorway to the Rites",
          "bn": "হজের অংশের দরজা"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and by this point it has moved deep into law. 2:183-187 set out the fast, 2:189 answers a question about the new moons and names them as markers of time for people and for hajj, and 2:190-195 turn to fighting in Allah's way and to spending in it. Then this verse opens the passage on the rites of pilgrimage. It is a long verse, and it is dense with rulings: completion, prevention, the ransom for shaving, the combining of umrah with hajj, and the fast that stands in for a sacrifice.",
            "bn": "সূরা বাকারা মাদানি, আর এই জায়গায় এসে সূরা আইনের গভীরে ঢুকে পড়েছে। ২:১৮৩ থেকে ২:১৮৭ আয়াতে রোজার বিধান এসেছে। ২:১৮৯ আয়াত নতুন চাঁদ নিয়ে প্রশ্নের জবাব দেয় আর চাঁদকে বলে মানুষের ও হজের সময় মাপার চিহ্ন। ২:১৯০ থেকে ২:১৯৫ আয়াত কথা বলে আল্লাহর পথে লড়াই আর খরচ নিয়ে। এরপর এই আয়াত খুলে দেয় হজের আনুষ্ঠানিকতার অংশ। আয়াতটি লম্বা, আর বিধানে ঠাসা: পূর্ণ করা, বাধা পাওয়া, মাথা মুণ্ডানোর ফিদইয়া, উমরাকে হজের সঙ্গে মেলানো, আর কুরবানির বদলে রোজা।"
          },
          {
            "en": "After it, 2:197 names the well-known months of hajj and rules out intimacy, disobedience and disputing during it, 2:198-199 move the pilgrims from Arafat to al-Mash'ar al-Haram, and 2:200-203 close the rites with remembrance. So this verse is the doorway of the passage: it tells the pilgrim to finish before it tells him what the finishing contains. As for the occasion, Sahih al-Bukhari records from Ka'b ibn Ujrah (RA) that the clause on the ransom for shaving came down concerning him, a report taken up further below.",
            "bn": "এর পরে ২:১৯৭ আয়াত হজের নির্দিষ্ট মাসগুলোর কথা বলে, আর সে সময় স্ত্রীসঙ্গ, নাফরমানি ও ঝগড়া নিষেধ করে। ২:১৯৮ ও ২:১৯৯ আয়াত হাজিদের আরাফাত থেকে মাশআরুল হারামে নিয়ে যায়, আর ২:২০০ থেকে ২:২০৩ আয়াত আনুষ্ঠানিকতা শেষ করে জিকির দিয়ে। তাই এই আয়াত গোটা অংশের দরজা। শেষ করার ভেতরে কী কী আছে, তা বলার আগেই হাজিকে সে জানিয়ে দেয় যে শেষ করতে হবে। শানে নুযুলের ব্যাপারে ইমাম বুখারী তাঁর সহীহ গ্রন্থে কা'ব ইবনে উজরা (রাঃ)-এর বর্ণনা এনেছেন, মাথা মুণ্ডানোর ফিদইয়ার অংশটুকু নাজিল হয়েছিল তাঁকে কেন্দ্র করে। সে বর্ণনা একটু পরে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Complete, Hemmed In, Made Easy",
          "bn": "পূর্ণ করা, আটকে পড়া, সহজ করা"
        },
        "p": [
          {
            "en": "The verse begins with wa atimmu, from the root t-m-m, which means to bring a thing to its full measure so that nothing of it is missing. It is not the verb for starting. The same imperative appears in 2:187, where the fasting believer is told to complete the fast until the night. In both places the law assumes the act is already under way and asks for its end to be reached. Then comes lillah, for Allah, set right beside the two rites, so that the completion and the intention are named in one breath.",
            "bn": "আয়াত শুরু হয় ওয়া আতিম্মু দিয়ে, মূল তা-মিম-মিম। এর অর্থ কোনো জিনিসকে তার পুরো মাপে পৌঁছে দেওয়া, যাতে কিছুই বাকি না থাকে। শুরু করার জন্য এই ক্রিয়া ব্যবহার হয় না। একই আদেশ এসেছে ২:১৮৭ আয়াতে, যেখানে রোজাদারকে বলা হয়েছে রাত পর্যন্ত রোজা পূর্ণ করতে। দুই জায়গাতেই শরিয়ত ধরে নিচ্ছে কাজটা চলছে, আর চাইছে তা শেষ মাথায় পৌঁছাক। তারপর দুই ইবাদতের ঠিক পাশে আসে লিল্লাহ, আল্লাহর জন্য। ফলে পূর্ণ করা আর নিয়ত, দুটোর কথা এসেছে এক নিঃশ্বাসে।"
          },
          {
            "en": "The second key word is uhsirtum, you are prevented, from h-s-r, to hem in or confine. The verb is passive, so the verse does not name who or what does the preventing, and that silence is where the scholars later differed. The third is istaysara, what is easily obtained, from y-s-r, the root of ease. It appears twice in the verse, once for the pilgrim who is prevented and once for the one who combines umrah with hajj. It is the root 2:185 used earlier in the surah when it said that Allah intends ease for you and does not intend hardship.",
            "bn": "দ্বিতীয় মূল শব্দ উহসিরতুম, তোমরা বাধা পাও। মূল হা-সাদ-রা, অর্থ ঘিরে ফেলা, আটকে রাখা। ক্রিয়াটি কর্মবাচ্যে, তাই কে বা কী বাধা দিল আয়াত তার নাম বলে না। এই নীরবতার জায়গাতেই পরে আলেমদের মতভেদ হয়েছে। তৃতীয় শব্দ ইসতাইসারা, যা সহজে জোটে, মূল ইয়া-সিন-রা, সহজের মূল। আয়াতে এটি এসেছে দুবার: একবার বাধা পাওয়া হাজির জন্য, আরেকবার উমরাকে হজের সঙ্গে মেলানো হাজির জন্য। সূরার আগের দিকে ২:১৮৫ আয়াত এই মূল দিয়েই বলেছিল, আল্লাহ তোমাদের জন্য সহজ চান, কঠিন চান না।"
          },
          {
            "en": "The verse then ends on two sentences that do not look like rulings at all: fear Allah, and know that Allah is severe in penalty. After so much ease the ending can seem abrupt. It sits where it does because concessions can be misused, claimed by the healthy or stretched by the comfortable, and the close reminds the pilgrim that the One who granted the ease also sees how it is used. Mercy runs through the body of the verse and taqwa stands at its end, and each holds the other in place.",
            "bn": "এরপর আয়াত শেষ হয় এমন দুটো বাক্যে, যেগুলোকে বিধান বলে মনেই হয় না: আল্লাহকে ভয় করো, আর জেনে রাখো, আল্লাহ শাস্তিদানে কঠোর। এত ছাড়ের পর এমন সমাপ্তি হঠাৎ শোনাতে পারে। কিন্তু জায়গাটা ভেবেচিন্তেই বাছা। ছাড়ের অপব্যবহার হতে পারে। সুস্থ মানুষ তা দাবি করতে পারে, সচ্ছল মানুষ তা টেনে লম্বা করতে পারে। শেষ বাক্যটি হাজিকে মনে করিয়ে দেয়, যিনি ছাড় দিয়েছেন তিনি দেখছেনও, ছাড়টা কীভাবে নেওয়া হচ্ছে। আয়াতের শরীর জুড়ে রহমত, আর শেষ মাথায় তাকওয়া। একটা আরেকটাকে জায়গামতো ধরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Commentators Read It",
          "bn": "মুফাসসিরগণ যেভাবে পড়েছেন"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the opening command as binding once the rites are begun: a hajj or umrah that has been entered must be carried through, even if it was voluntary. He also records the difference over prevention. Some early authorities, Ibn Abbas (RA) among them, held that the prevention meant here is by an enemy, which was the situation at al-Hudaybiyah. Others took it more widely, to include illness and other obstacles. The jurists who came after divided along the same line, and the verse's passive verb leaves room for both readings.",
            "bn": "ইবনে কাসীর শুরুর আদেশটিকে পড়েন এভাবে: হজ বা উমরা একবার শুরু হলে তা শেষ করা জরুরি, নফল হিসেবে শুরু করলেও। বাধা পাওয়ার অর্থ নিয়ে মতভেদও তিনি উল্লেখ করেছেন। প্রথম যুগের কয়েকজন আলেম, তাঁদের মধ্যে ইবনে আব্বাস (রাঃ), বলেছেন এখানে বাধা মানে শত্রুর বাধা, হুদাইবিয়ায় যেমনটা ঘটেছিল। অন্যরা অর্থটা আরও চওড়া করে অসুস্থতা আর অন্যান্য প্রতিবন্ধকতাকেও এর ভেতরে এনেছেন। পরের ফকিহরাও এই দুই ধারায় ভাগ হয়েছেন, আর আয়াতের কর্মবাচ্য ক্রিয়া দুটো পাঠের জন্যই জায়গা রেখেছে।"
          },
          {
            "en": "On what is easily obtained of sacrificial animals, Ibn Kathir reports from the early authorities that the least which satisfies it is a single sheep or goat. On combining umrah with hajj, the verse closes that ruling with the words: this is for those whose family is not in the area of al-Masjid al-Haram, and the scholars differed over whether this refers to the combining itself or to the sacrifice it requires. This page records that difference and does not settle it; the pilgrim takes the detail from a scholar he trusts.",
            "bn": "সহজে জোটে এমন কুরবানির পশু প্রসঙ্গে ইবনে কাসীর প্রথম যুগের আলেমদের থেকে উল্লেখ করেছেন, এর সর্বনিম্ন হলো একটি ছাগল বা ভেড়া। উমরাকে হজের সঙ্গে মেলানোর বিধানটি আয়াত শেষ করে এই কথায়: এটা তাদের জন্য, যাদের পরিবার মাসজিদুল হারামের এলাকায় থাকে না। এখানে এটা বলতে মেলানোটাই বোঝানো হয়েছে, নাকি তার জন্য জরুরি কুরবানি, সে নিয়ে আলেমদের মতভেদ আছে। এই লেখা মতভেদটুকু জানিয়ে রাখছে, মীমাংসা করছে না। খুঁটিনাটি হাজি জেনে নেবেন নিজের আস্থাভাজন আলেমের কাছ থেকে।"
          },
          {
            "en": "The same commentator gathers more than one reading of the phrase tilka 'asharatun kamilah, those are ten complete, which follows three days of fasting during hajj and seven on returning home. The sum is obvious, so why state it? One reading is that it is emphasis, the way an Arab says he saw a thing with his own eyes. Another is that it assures the pilgrim that the ten days fully stand in for the animal he could not find. Both readings leave the one who fasts with nothing lacking.",
            "bn": "হজের সময় তিন দিন আর বাড়ি ফিরে সাত দিন রোজার পর আয়াত বলে, তিলকা আশারাতুন কামিলাহ, এই হলো পূর্ণ দশ দিন। এই বাক্যের একাধিক ব্যাখ্যা ইবনে কাসীর একসঙ্গে এনেছেন। যোগফল তো স্পষ্ট, তাহলে বলার দরকার কী? এক ব্যাখ্যায় এটা জোর দেওয়ার জন্য, যেমন আরবরা বলে, আমি নিজের চোখে দেখেছি। আরেক ব্যাখ্যায় এটা হাজির জন্য আশ্বাস: যে পশু তিনি জোগাড় করতে পারেননি, দশ দিনের রোজা তার জায়গা পুরোপুরি পূরণ করে। দুই ব্যাখ্যাতেই রোজাদারের কোনো ঘাটতি থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Companion's Affliction",
          "bn": "এক সাহাবির কষ্ট"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari records from Ka'b ibn Ujrah (RA) that the Prophet ﷺ came to him in the time of al-Hudaybiyah while lice were scattering over his face. The Prophet ﷺ asked whether the creatures of his head were troubling him, and Ka'b said that they were. The Prophet ﷺ then told Ka'b to shave, and to fast three days, or feed six poor people, or offer a sacrifice. The three choices the verse names, fasting, charity or an offering, are here given their measure by the one to whom the verse was revealed.",
            "bn": "ইমাম বুখারী কা'ব ইবনে উজরা (রাঃ) থেকে বর্ণনা করেছেন: হুদাইবিয়ার সময় নবী ﷺ তাঁর কাছে এলেন, তখন উকুন তাঁর মুখের ওপর ঝরে পড়ছিল। নবী ﷺ জানতে চাইলেন, মাথার পোকাগুলো তাঁকে কষ্ট দিচ্ছে কি না। কা'ব (রাঃ) জানালেন, দিচ্ছে। তখন নবী ﷺ তাঁকে মাথা মুণ্ডাতে বললেন, আর বললেন তিন দিন রোজা রাখতে, কিংবা ছয়জন মিসকিনকে খাওয়াতে, কিংবা একটি কুরবানি দিতে। আয়াত যে তিনটি পথের নাম নিয়েছে, রোজা, সদকা বা কুরবানি, এখানে তার মাপ ঠিক করে দিলেন সেই মানুষটি, যাঁর ওপর আয়াত নাজিল হয়েছিল।"
          },
          {
            "en": "In another narration in al-Bukhari, a Follower named Abdullah ibn Ma'qil sat with Ka'b in the mosque at Kufah and asked him about this ransom. Ka'b told him what had happened and ended by saying that the verse had come down about him in particular and was for all of you in general. A ruling that began with one Companion's suffering became law for every pilgrim after him. The pattern recurs across the law of this surah: a real difficulty, faced by a real person, answered with a care that does not expire.",
            "bn": "বুখারীর আরেক বর্ণনায় আছে, আবদুল্লাহ ইবনে মা'কিল নামে এক তাবেয়ি কুফার মসজিদে কা'ব (রাঃ)-এর পাশে বসে এই ফিদইয়ার কথা জানতে চেয়েছিলেন। কা'ব (রাঃ) ঘটনাটা শোনালেন, তারপর বললেন, আয়াতটি নাজিল হয়েছিল বিশেষ করে আমাকে নিয়ে, আর তা তোমাদের সবার জন্য। এক সাহাবির কষ্ট থেকে শুরু হওয়া বিধান হয়ে গেল তাঁর পরের সব হাজির আইন। এই সূরার আইনে এমন ধারা বারবার দেখা যায়। বাস্তব এক মানুষ, বাস্তব এক কষ্ট, আর তার জবাবে এমন যত্ন, যার মেয়াদ কোনোদিন ফুরায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Walk Beside It",
          "bn": "পাশাপাশি চলা আয়াতগুলো"
        },
        "p": [
          {
            "en": "2:185 is the nearest sister, because it laid down the same pattern for the fast: whoever is ill or on a journey makes up an equal number of other days, and Allah intends ease. 2:286 states the principle beneath both verses, that Allah does not charge a soul beyond its capacity. And 3:97 frames the whole obligation in the same spirit, making the pilgrimage to the House a duty owed to Allah by whoever is able to find a way to it. Capacity is written into the command from the start.",
            "bn": "সবচেয়ে কাছের বোন ২:১৮৫ আয়াত, কারণ রোজার ক্ষেত্রে সে একই ধারা বেঁধে দিয়েছিল: যে অসুস্থ বা সফরে, সে অন্য দিনে সমান সংখ্যা পূরণ করবে, আর আল্লাহ সহজ চান। দুই আয়াতের নিচের নীতিটা বলে দেয় ২:২৮৬ আয়াত: আল্লাহ কাউকে সাধ্যের বাইরে দায়িত্ব দেন না। আর ৩:৯৭ আয়াত গোটা ফরজটাকেই সাজিয়েছে একই মেজাজে। আল্লাহর ঘরের হজ তাঁর হক, সেই মানুষের ওপর যার সেখানে পৌঁছানোর সামর্থ্য আছে। সামর্থ্যের কথা হুকুমের ভেতরে গোড়া থেকেই লেখা।"
          },
          {
            "en": "22:37 guards the sacrifice this verse keeps mentioning: neither its meat nor its blood reaches Allah, only the taqwa of the one who offers it. And 48:27 tells of the true vision shown to the Messenger ﷺ, that the believers would enter al-Masjid al-Haram in safety, heads shaved and hair shortened, not fearing anyone. For the believers who had been turned back at al-Hudaybiyah, that verse promised the completion this one commands, deferred but not denied. Read together, the two verses keep the offering sincere and the hope alive.",
            "bn": "এই আয়াতে বারবার আসা কুরবানিকে পাহারা দেয় ২২:৩৭ আয়াত: তার গোশতও আল্লাহর কাছে পৌঁছায় না, রক্তও না, পৌঁছায় কেবল কুরবানিদাতার তাকওয়া। আর ৪৮:২৭ আয়াত জানায় রাসূল ﷺ-কে দেখানো সত্য স্বপ্নের কথা: মুমিনরা নিরাপদে মাসজিদুল হারামে ঢুকবে, কেউ মাথা মুণ্ডিয়ে, কেউ চুল ছেঁটে, কাউকে ভয় না করে। হুদাইবিয়া থেকে যাঁদের ফিরে যেতে হয়েছিল, তাঁদের জন্য সেই আয়াত ছিল এই আয়াতের আদেশ করা পূর্ণতার প্রতিশ্রুতি, দেরিতে হলেও বাতিল নয়। দুটো একসঙ্গে পড়লে কুরবানি থাকে খাঁটি, আর আশা থাকে জীবিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Finishing When Life Intervenes",
          "bn": "জীবন বাধা দিলে কীভাবে শেষ করবেন"
        },
        "p": [
          {
            "en": "The first lesson is for anyone who begins an act of worship and feels its weight halfway through. The verse treats a beginning made for Allah as something close to a promise. A season of night prayer, a course of Quran study, a charity pledged to a family in need: the believer who has started asks first how to finish, and only afterwards whether a lawful concession applies. The rulings for these other acts are their own, and the schools differ over which voluntary deeds become binding once begun, but the posture carries over.",
            "bn": "প্রথম শিক্ষাটা তাঁর জন্য, যিনি কোনো ইবাদত শুরু করে মাঝপথে তার ভার টের পান। আল্লাহর জন্য করা শুরুকে আয়াত প্রায় একটা ওয়াদার মতো দেখে। কিছুদিন ধরে রাতের নামাজ, কুরআন শেখার একটা কোর্স, অভাবী কোনো পরিবারকে সদকার কথা দেওয়া, যা-ই হোক, যিনি শুরু করেছেন তিনি আগে ভাবেন কীভাবে শেষ করবেন। তারপর দেখেন, জায়েজ কোনো ছাড় প্রযোজ্য কি না। এসব আমলের বিধান অবশ্য আলাদা, আর শুরু করার পর কোন নফল কাজ বাধ্যতামূলক হয়ে যায়, তা নিয়ে মাযহাবগুলোর মতভেদ আছে। তবু মনের এই গড়নটা সব ক্ষেত্রেই কাজে আসে।"
          },
          {
            "en": "The second lesson is for the hard season. Illness, a closed border, a refused visa, money that runs out: the verse anticipated every kind of block and gave each a road. A believer who is stopped does not have to choose between pretending nothing happened and giving up. He looks for the provision Allah has already made. For the pilgrim, these are the rulings the scholars teach before departure, and the verse invites him to learn them as mercy rather than as small print he hopes never to read.",
            "bn": "দ্বিতীয় শিক্ষাটা কঠিন সময়ের জন্য। অসুখ, বন্ধ সীমান্ত, ভিসা না পাওয়া, টাকা ফুরিয়ে যাওয়া, আয়াত সব রকম বাধার কথা আগেই ভেবে রেখেছে আর প্রত্যেকটার জন্য একটা পথ দিয়েছে। আটকে পড়া মুমিনকে তাই দুটোর একটা বেছে নিতে হয় না, হয় ভান করা যে কিছুই হয়নি, নয়তো হাল ছেড়ে দেওয়া। তিনি খোঁজেন আল্লাহ আগে থেকে কী ব্যবস্থা রেখেছেন। হাজির জন্য সেগুলো হলো সেই বিধান, যা আলেমরা রওনার আগে শেখান। আয়াত চায় তিনি এগুলো শিখুন রহমত হিসেবে, এমন শর্ত হিসেবে নয় যা কখনো পড়তে না হলেই বাঁচি।"
          },
          {
            "en": "The third lesson lives in the word lillah. A journey to Makkah is public, photographed and talked about, and the verse sets for Allah beside the rites before it gives a single detail. Checking the intention before the ticket is booked, and again when the story of the trip is being told afterwards, is a small act that keeps the whole journey inside the command.",
            "bn": "তৃতীয় শিক্ষাটা লিল্লাহ শব্দে। মক্কার সফর সবার চোখের সামনে হয়, ছবি ওঠে, গল্প হয়। অথচ কোনো খুঁটিনাটি বলার আগেই আয়াত ইবাদতের পাশে বসিয়ে দিয়েছে, আল্লাহর জন্য। টিকিট কাটার আগে নিয়তটা একবার যাচাই করা, আর ফিরে এসে সফরের গল্প বলার সময় আরেকবার, এই ছোট্ট কাজটুকুই গোটা সফরকে হুকুমের ভেতরে ধরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for Acceptance",
          "bn": "কবুলের জন্য দোয়া"
        },
        "p": [
          {
            "en": "The verse is a command, not a supplication, so the du'a here is taken from the two prophets who raised the House. 2:127 records that Ibrahim and Isma'il (AS), raising its foundations, said: our Lord, accept this from us; indeed You are the Hearing, the Knowing. Those who built the House asked for acceptance rather than praise, and the one who completes its rites can end with the same words: rabbana taqabbal minna, innaka anta as-sami' al-'alim.",
            "bn": "আয়াতটি আদেশ, দোয়া নয়। তাই এখানে দোয়া নেওয়া হলো কাবার ভিত তোলা দুই নবীর কাছ থেকে। ২:১২৭ আয়াত জানায়, ইবরাহীম ও ইসমাঈল (আঃ) ঘরের ভিত তুলতে তুলতে বলছিলেন: হে আমাদের রব, আমাদের পক্ষ থেকে কবুল করুন, নিশ্চয়ই আপনি সব শোনেন, সব জানেন। যাঁরা ঘরটি বানিয়েছিলেন তাঁরা প্রশংসা চাননি, কবুল চেয়েছিলেন। সেই ঘরের ইবাদত যিনি শেষ করেন, তিনিও শেষ করতে পারেন একই কথায়: রাব্বানা তাকাব্বাল মিন্না, ইন্নাকা আনতাস সামিউল আলিম।"
          },
          {
            "en": "Beside it, a short supplication in the verse's own vocabulary, offered as such and not as a transmitted text: O Allah, help me complete for You what I began for You; make easy for me what You made easy in Your law; and when I am held back, accept from me what I was able to reach. It can be said at the start of any worship that will take effort to finish, whether a hajj, a Ramadan or a single hard night of standing in prayer.",
            "bn": "এর পাশে আয়াতের নিজের শব্দে গড়া ছোট একটি দোয়া। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়: হে আল্লাহ, আপনার জন্য যা শুরু করেছি, আপনার জন্যই তা পূর্ণ করতে আমাকে সাহায্য করুন। আপনার শরিয়তে যা সহজ করেছেন, আমার জন্যও তা সহজ করুন। আর আমি আটকে গেলে, যতটুকু পৌঁছাতে পেরেছি ততটুকুই কবুল করে নিন। যে ইবাদত শেষ করতে কষ্ট হবে, তার শুরুতে এটা বলা যায়, হোক তা হজ, একটা রমজান, কিংবা নামাজে দাঁড়িয়ে কাটানো একটিমাত্র কঠিন রাত।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for the Road",
          "bn": "পথের জন্য কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "What have I begun for Allah and left somewhere in the middle, and what would the next small step toward completing it be? When a good deed was blocked, did I look for the substitute the law provides, or did I quietly treat the block as a release? Is there a concession I use with a sense of shame, as if it made my worship smaller, when the verse offers it as Allah's own provision for exactly my situation?",
            "bn": "আল্লাহর জন্য কী শুরু করে মাঝপথে ফেলে রেখেছি, আর তা শেষ করার দিকে পরের ছোট পদক্ষেপটা কী হতে পারে? কোনো নেক কাজে বাধা এলে আমি কি শরিয়তের দেওয়া বিকল্পটা খুঁজেছি, নাকি চুপচাপ বাধাটাকেই ছুটি ধরে নিয়েছি? এমন কোনো ছাড় কি আছে যা আমি লজ্জা নিয়ে গ্রহণ করি, যেন তাতে আমার ইবাদত ছোট হয়ে গেল, অথচ আয়াত তা দিয়েছে ঠিক আমার মতো অবস্থার জন্য আল্লাহর নিজের ব্যবস্থা হিসেবে?"
          },
          {
            "en": "The verse says for Allah before it names a single rule. In my most visible worship, which part of me is watching for other people's approval? And when I cannot give what is asked, the animal, the money or the strength, do I take up the substitute with the same seriousness, trusting that when Allah calls ten days complete, nothing in them is lacking?",
            "bn": "কোনো নিয়মের নাম নেওয়ার আগেই আয়াত বলেছে, আল্লাহর জন্য। আমার সবচেয়ে চোখে পড়া ইবাদতে আমার ভেতরের কোন অংশটা অন্যের বাহবার দিকে তাকিয়ে থাকে? আর যা চাওয়া হয়েছে তা দিতে না পারলে, পশু হোক, টাকা হোক বা শক্তি, আমি কি বিকল্পটা একই গুরুত্ব দিয়ে পালন করি? ভরসা রাখি কি যে আল্লাহ যখন দশ দিনকে পূর্ণ বলেছেন, তখন তাতে কোনো কমতি নেই?"
          }
        ]
      }
    ]
  },
  "2:201": {
    "sections": [
      {
        "h": {
          "en": "Two Kinds of Asking",
          "bn": "দুই রকমের চাওয়া"
        },
        "p": [
          {
            "en": "The verse sits inside the passage on the rites of pilgrimage. After the command to remember Allah when the rites are done, 2:200 describes one kind of person: among the people is he who says, our Lord, give us in this world — and he has no share in the Hereafter. Then this verse presents the contrast: and among them is he who says, our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
            "bn": "আয়াতটি হজের বিধানের অংশের ভেতরে। হজের কাজ শেষ হলে আল্লাহর জিকির করার হুকুমের পর ২:২০০ আয়াত এক ধরনের মানুষের কথা বলে: মানুষের মধ্যে কেউ বলে, হে আমাদের রব, আমাদের দুনিয়াতেই দিন। আখিরাতে তার কোনো অংশ নেই। তারপর এই আয়াত উল্টো ছবিটা দেখায়: আর তাদের মধ্যে কেউ বলে, হে আমাদের রব, আমাদের দুনিয়ায় কল্যাণ দিন, আখিরাতেও কল্যাণ দিন, আর আমাদের আগুনের শাস্তি থেকে বাঁচান।"
          },
          {
            "en": "The difference between the two askers is not that one prays and the other does not — both are shown praying, at the same holy site, to the same Lord. The difference is the horizon of the request. One vocabulary ends at this world; the other spans both lives and adds a plea for safety. The verse after, 2:202, gives the verdict: those people will have a portion of what they earned, and Allah is swift in account.",
            "bn": "দুজনের তফাত এটা নয় যে একজন দোয়া করে আর অন্যজন করে না। দুজনকেই দেখানো হয়েছে দোয়া করতে, একই পবিত্র জায়গায়, একই রবের কাছে। তফাতটা হলো চাওয়া কতদূর পর্যন্ত যায়। একজনের চাওয়া এই দুনিয়াতেই শেষ। অন্যজনের চাওয়া দুই জীবন জুড়ে, সাথে বিপদ থেকে বাঁচার আরজিও। পরের আয়াত, ২:২০২, রায় জানিয়ে দেয়: তারা যা অর্জন করেছে, তার অংশ তারা পাবে, আর আল্লাহ দ্রুত হিসাব নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Breadth of Hasanah",
          "bn": "হাসানার ব্যাপ্তি"
        },
        "p": [
          {
            "en": "The prayer's key word, hasanah, is deliberately broad — a good thing, unspecified. The commentators fill in examples without closing the list: in this world, well-being, a righteous spouse, beneficial knowledge, lawful provision; in the Hereafter, Paradise and what leads to it, with some noting that the ultimate hasanah there is Allah's pleasure. The openness is the craft of the du'a. It asks for the category of good and leaves the selection to the One who knows what is good for us.",
            "bn": "দোয়াটির মূল শব্দ ‘হাসানা’ ইচ্ছা করেই ব্যাপক রাখা হয়েছে: কোনো একটা কল্যাণ, নির্দিষ্ট করে বলা নয়। মুফাসসিররা উদাহরণ দেন, তবে তালিকা বন্ধ করেন না। দুনিয়ায় সুস্থতা, নেককার জীবনসঙ্গী, উপকারী ইলম, হালাল রিযিক। আখিরাতে জান্নাত আর যা জান্নাতের দিকে নিয়ে যায়। কেউ কেউ বলেন, সেখানে সবচেয়ে বড় হাসানা হলো আল্লাহর সন্তুষ্টি। এই খোলা রাখাটাই দোয়াটির মুনশিয়ানা। দোয়াটি কল্যাণ চায়, কিন্তু কোন কল্যাণ, তা বাছাইয়ের ভার ছেড়ে দেয় তাঁর ওপর, যিনি জানেন আমাদের জন্য কোনটা ভালো।"
          },
          {
            "en": "Note also what the prayer does not do. It does not renounce the world — it asks for good in it, in harmony with the counsel given to Qarun in 28:77 not to forget one's share. And it does not assume that worldly good automatically continues into the next life; the second clause has to be asked for separately. The grammar itself teaches that the two goods are distinct requests with one Giver.",
            "bn": "দোয়াটি কী করে না, সেটাও খেয়াল করুন। দুনিয়াকে ত্যাগ করে না, বরং দুনিয়াতেও কল্যাণ চায়। 28:77 আয়াতে কারুনকে যে উপদেশ দেওয়া হয়েছিল, দুনিয়া থেকে নিজের অংশ ভুলে যেয়ো না, এটা তার সাথে মিলে যায়। আবার দোয়াটি এটাও ধরে নেয় না যে দুনিয়ার কল্যাণ আপনা থেকেই আখিরাতে গড়িয়ে যাবে। দ্বিতীয় অংশটা আলাদা করে চাইতে হয়। বাক্যের গঠনই শিখিয়ে দেয়, দুই কল্যাণ দুটো আলাদা চাওয়া, অথচ দাতা একজনই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Third Clause",
          "bn": "তৃতীয় অংশ"
        },
        "p": [
          {
            "en": "The du'a could have stopped at two symmetrical requests, but it adds: and protect us from the punishment of the Fire. The addition concedes something humbling — that receiving good in both worlds does not by itself guarantee safety, and that the Fire is a real destination requiring a specific plea. Comfort in this life can even become material for heedlessness; the third clause is insurance against the success of the first.",
            "bn": "দোয়াটি দুটো সমান মাপের চাওয়াতেই থেমে যেতে পারত, কিন্তু সাথে যোগ করে: আর আমাদের আগুনের শাস্তি থেকে বাঁচান। এই বাড়তি কথাটুকু বিনয়ের সাথে একটা সত্য মেনে নেয়। দুই জগতে কল্যাণ পেলেই নিরাপত্তা নিশ্চিত হয়ে যায় না, আর জাহান্নাম সত্যিকারের এক ঠিকানা, যা থেকে বাঁচতে আলাদা করে আরজি করতে হয়। দুনিয়ার আরাম এমনকি গাফিলতির কারণও হয়ে উঠতে পারে। তৃতীয় অংশটা তাই প্রথম অংশের সাফল্যেরই বিপদ থেকে রক্ষাকবচ।"
          },
          {
            "en": "Ordering matters too. The prayer moves from the near to the far to the ultimate: today's needs, the eternal home, and deliverance from ruin. A person who repeats it attentively rehearses a complete worldview several times a day — engaged with this world, aimed at the next, and never presuming immunity from loss. Few sentences carry that much orientation in so few words.",
            "bn": "ক্রমটাও গুরুত্বপূর্ণ। দোয়াটা কাছ থেকে দূরে যায়, তারপর একেবারে শেষ গন্তব্যে: আজকের প্রয়োজন, চিরকালের ঘর, আর ধ্বংস থেকে মুক্তি। যে মন দিয়ে দোয়াটা বারবার পড়ে, সে দিনে কয়েকবার একটা পূর্ণ জীবনদৃষ্টি ঝালিয়ে নেয়: দুনিয়ার কাজে লেগে থাকা, নজর আখিরাতের দিকে, আর কখনো এমন না ভাবা যে আমার কোনো ক্ষতি হতে পারে না। এত কম কথায় এতখানি দিশা দেয়, এমন বাক্য খুব কমই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prophet's Most Frequent Du'a",
          "bn": "নবীজির সবচেয়ে বেশি পড়া দোয়া"
        },
        "p": [
          {
            "en": "Anas ibn Malik (RA) reported that the most frequent supplication of the Prophet ﷺ was this very prayer: our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire. The report is agreed upon in al-Bukhari and Muslim. Of everything he ﷺ could have made his daily refrain, he chose the du'a of balance — which is itself a commentary on what a well-aimed life asks for.",
            "bn": "আনাস ইবনে মালিক (রাঃ) বর্ণনা করেন, নবী ﷺ সবচেয়ে বেশি যে দোয়া করতেন, তা এটিই: হে আমাদের রব, আমাদের দুনিয়ায় কল্যাণ দিন, আখিরাতেও কল্যাণ দিন, আর আমাদের আগুনের শাস্তি থেকে বাঁচান। হাদিসটি বুখারী ও মুসলিম দুজনেই এনেছেন। তিনি ﷺ যেকোনো দোয়াকেই রোজকার মুখের দোয়া বানাতে পারতেন, তবু বেছে নিলেন ভারসাম্যের এই দোয়া। এ বাছাইটাই বলে দেয়, ঠিক লক্ষ্যে চলা জীবন আসলে কী চায়।"
          },
          {
            "en": "Muslim also narrates through Anas (RA) that the Prophet ﷺ visited a Muslim who had grown as frail as a chick, because he had asked Allah to advance his Hereafter punishment into this world. The Prophet ﷺ told him he could not bear that, and asked: why did you not say — and taught him this du'a. Then he prayed it for him and Allah cured him. The story fixes the prayer's character: it is the correction of extreme asking.",
            "bn": "মুসলিম আনাস (রাঃ) থেকে আরও বর্ণনা করেছেন: নবী ﷺ এক মুসলিমকে দেখতে গেলেন, যে দুর্বল হয়ে পাখির ছানার মতো হয়ে গিয়েছিল। কারণ সে আল্লাহর কাছে চেয়েছিল, আখিরাতে তার যে শাস্তি হওয়ার কথা, তা যেন দুনিয়াতেই দিয়ে দেওয়া হয়। নবী ﷺ বললেন, তুমি তা সইতে পারবে না। তারপর বললেন, তুমি কেন এভাবে বললে না, আর তাকে এই দোয়াটি শিখিয়ে দিলেন। এরপর তিনি তার জন্য এই দোয়া করলেন, আর আল্লাহ তাকে সুস্থ করে দিলেন। ঘটনাটি দোয়াটির স্বভাব চিনিয়ে দেয়: এটি বাড়াবাড়ি রকমের চাওয়াকে শুধরে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying the Balance",
          "bn": "ভারসাম্য ধরে রাখা"
        },
        "p": [
          {
            "en": "The prayer is short enough to say between two breaths, and Islam has placed it throughout the day — many Muslims say it in prostration, after prayers, and pilgrims say it between the Yemeni corner and the Black Stone during tawaf. Its frequency is the training: each repetition re-centers the compass, pulling the heart back from whichever extreme the day pushed it toward, worldliness or despair of the world.",
            "bn": "দোয়াটি এত ছোট যে দুই নিঃশ্বাসের ফাঁকেই বলে ফেলা যায়, আর ইসলাম একে সারা দিনে ছড়িয়ে রেখেছে। বহু মুসলিম এটি পড়েন সিজদায়, নামাজের পরে, আর হাজিরা পড়েন তাওয়াফের সময় রুকনে ইয়ামানী ও হাজরে আসওয়াদের মাঝখানে। বারবার পড়াটাই এখানে প্রশিক্ষণ। দিন হৃদয়কে যে প্রান্তেই ঠেলে দিক, দুনিয়াদারির দিকে কিংবা দুনিয়া নিয়ে হতাশার দিকে, প্রতিবারের পড়া কম্পাসের কাঁটাকে আবার মাঝখানে ফিরিয়ে আনে, সঙ্গে হৃদয়কেও।"
          },
          {
            "en": "A practical exercise makes it personal: occasionally unpack the word hasanah before saying it. Name, in your own mind, what good in this world would actually mean this month, and what good in the Hereafter you are working toward — then say the words with those meanings loaded. The du'a of the Prophet ﷺ was frequent but never mechanical, and one loaded recitation shapes a day more than many empty ones.",
            "bn": "একটা সহজ অনুশীলন দোয়াটিকে নিজের করে তোলে: মাঝে মাঝে পড়ার আগে 'হাসানা' শব্দটার ভেতরে একটু তাকান। মনে মনে ঠিক করুন, এই মাসে দুনিয়ার কল্যাণ বলতে আপনার কাছে আসলে কী, আর আখিরাতের কোন কল্যাণের জন্য আপনি খাটছেন। তারপর সেই অর্থগুলো মনে রেখে শব্দগুলো বলুন। নবী ﷺ দোয়া করতেন প্রায়ই, কিন্তু কখনো যন্ত্রের মতো নয়। অর্থ বুঝে একবার পড়া দিনটাকে যতটা গড়ে দেয়, অর্থহীনভাবে বহুবার পড়া ততটা দেয় না।"
          }
        ]
      }
    ]
  },
  "2:203": {
    "sections": [
      {
        "h": {
          "en": "When the Rites Are Done",
          "bn": "আনুষ্ঠানিকতা শেষ হলে"
        },
        "p": [
          {
            "en": "The passage on the rites of hajj that 2:196 opened ends with this verse. 2:196 commanded the pilgrim to complete hajj and umrah for Allah, 2:197-199 carried him through the months of hajj, Arafat and al-Mash'ar al-Haram, and 2:200 told him that once the rites were finished he should remember Allah as he used to remember his forefathers, or with greater remembrance. 2:200-202 then set two kinds of asker side by side. This verse returns to remembrance, gives it a set time, and sends the pilgrims home with a thought about where every road ends.",
            "bn": "২:১৯৬ আয়াত হজের আনুষ্ঠানিকতার যে অংশ খুলেছিল, এই আয়াতে তা শেষ হয়। ২:১৯৬ আয়াত হাজিকে আদেশ দিয়েছিল আল্লাহর জন্য হজ ও উমরা পূর্ণ করতে। ২:১৯৭ থেকে ২:১৯৯ আয়াত তাঁকে নিয়ে গেছে হজের মাসগুলো, আরাফাত আর মাশআরুল হারাম পেরিয়ে। ২:২০০ আয়াত বলেছে, আনুষ্ঠানিকতা শেষ হলে বাপ-দাদাকে যেভাবে স্মরণ করতে, আল্লাহকে সেভাবে স্মরণ করো, বরং তার চেয়েও বেশি। তারপর ২:২০০ থেকে ২:২০২ আয়াত দুই রকম প্রার্থনাকারীকে পাশাপাশি দাঁড় করায়। এই আয়াত ফিরে আসে জিকিরে, তাকে একটা নির্দিষ্ট সময় দেয়, আর হাজিদের বাড়ি পাঠায় একটা ভাবনা সঙ্গে দিয়ে: সব পথ শেষে কোথায় গিয়ে মেলে।"
          },
          {
            "en": "The verse after it, 2:204, begins a new portrait: a man whose talk about worldly life pleases the listener, who calls Allah to witness what is in his heart, and who is the fiercest of opponents. So this verse stands at a seam. On one side lie the rites, their mercy and their remembrance. On the other the surah turns to how people behave once they are back in ordinary life. The commentators discuss this verse for its rulings rather than for a single occasion of revelation, so its place in the sequence is what carries it here.",
            "bn": "এর পরের আয়াত, ২:২০৪, শুরু করে নতুন এক মানুষের ছবি। দুনিয়ার জীবন নিয়ে তার কথা শুনতে ভালো লাগে, মনের কথার পক্ষে সে আল্লাহকে সাক্ষী রাখে, অথচ সে সবচেয়ে ঝগড়াটে। তাই এই আয়াত দাঁড়িয়ে আছে দুই অংশের জোড়ার জায়গায়। এক পাশে আনুষ্ঠানিকতা, তার রহমত আর তার জিকির। অন্য পাশে সূরা চলে যায় সাধারণ জীবনে ফিরে মানুষ কেমন আচরণ করে সেই প্রসঙ্গে। মুফাসসিররা এই আয়াত আলোচনা করেন এর বিধানের জন্য, নির্দিষ্ট কোনো শানে নুযুলের জন্য নয়। তাই এখানে আয়াতের অবস্থানটাই তার ভার বহন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Counted Days, Two Departures",
          "bn": "গোনা দিন, দুই রকম বিদায়"
        },
        "p": [
          {
            "en": "The days are ayyam ma'dudat, counted days. Ma'dudat comes from the root '-d-d, to count, and in Arabic usage a thing described as counted is usually few, few enough to number one by one. The Quran uses the same phrase for the fast in 2:184, a limited number of days, and a form of the same word in 12:20 for the few dirhams for which Yusuf (AS) was sold. Here it tells the pilgrim that the days of remembrance at the end of hajj are short, and will be gone before he has had his fill of them.",
            "bn": "দিনগুলোকে বলা হয়েছে আইয়ামুম মা'দুদাত, গোনা দিন। মা'দুদাত এসেছে আইন-দাল-দাল মূল থেকে, অর্থ গোনা। আরবি ব্যবহারে কোনো কিছুকে গোনা বললে সাধারণত বোঝায় তা অল্প, একটা একটা করে গোনা যায় এমন। রোজার ক্ষেত্রে ২:১৮৪ আয়াতে ঠিক এই কথাটাই এসেছে, নির্দিষ্ট কয়েকটি দিন। আর ১২:২০ আয়াতে একই শব্দের আরেক রূপ এসেছে সেই কয়েকটি দিরহামের বেলায়, যার বিনিময়ে ইউসুফ (আঃ)-কে বেচে দেওয়া হয়েছিল। এখানে শব্দটি হাজিকে জানিয়ে দেয়, হজের শেষে জিকিরের এই দিনগুলো ছোট, মন ভরার আগেই ফুরিয়ে যাবে।"
          },
          {
            "en": "Then the verse sets two verbs against each other: ta'ajjala, to hasten, and ta'akhkhara, to stay behind. Each is followed by the very same words, fa la ithma 'alayh, there is no sin upon him. By clearing both choices in identical language, the verse leaves neither the one who leaves nor the one who stays any ground for looking at the other as the lesser pilgrim. Then comes a short qualifier, li-man ittaqa, for the one who fears Allah, and it ties the whole allowance to how the pilgrim has carried himself.",
            "bn": "তারপর আয়াত দুটো ক্রিয়াকে মুখোমুখি দাঁড় করায়: তাআজ্জালা, তাড়াতাড়ি করা, আর তাআখখারা, পিছিয়ে থাকা। দুটোর পরেই হুবহু একই কথা, ফালা ইসমা আলাইহি, তার কোনো গুনাহ নেই। দুই পথকে একই ভাষায় দায়মুক্ত করায়, যে আগে চলে গেল আর যে থেকে গেল, কেউই অন্যজনকে ছোট হাজি ভাবার জায়গা পায় না। এরপর আসে ছোট একটা শর্ত, লিমানিত্তাকা, তার জন্য যে আল্লাহকে ভয় করে। পুরো ছাড়টি এই শর্তের সঙ্গে বাঁধা।"
          },
          {
            "en": "The verse closes on tuhsharun, you will be gathered, from the root h-sh-r, to assemble people and bring them together. It is one of the Quran's words for the gathering of the Day of Resurrection. At the very moment the pilgrims are about to disperse from one of the largest gatherings they will ever see in this life, they are told of another gathering, and of the One to whom it leads.",
            "bn": "আয়াত শেষ হয় তুহশারুন শব্দে, তোমাদের একত্র করা হবে। মূল হা-শিন-রা, মানুষকে জড়ো করে এক জায়গায় আনা। কিয়ামতের দিনের সমাবেশ বোঝাতে কুরআন যে শব্দগুলো ব্যবহার করে, এটি তার একটি। হাজিরা যখন এই জীবনে দেখা সবচেয়ে বড় সমাবেশগুলোর একটি থেকে ছড়িয়ে পড়তে যাচ্ছেন, ঠিক সেই মুহূর্তে তাঁদের জানানো হয় আরেক সমাবেশের কথা, আর তাঁর কথা, যাঁর কাছে সেই সমাবেশ গিয়ে থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Said",
          "bn": "মুফাসসিরগণ কী বলেছেন"
        },
        "p": [
          {
            "en": "Al-Bukhari mentions in his book of the two Eids that Ibn Abbas (RA) said the known days, the phrase of 22:28, are the first ten days of Dhu al-Hijjah, and the counted days are the days of tashriq. Ibn Kathir opens with that report, then records from Miqsam from Ibn Abbas a count of four days, the day of sacrifice and the three after it. He says Ibn Umar, Ibn az-Zubayr, Ata', Mujahid, Malik and others held that count. He adds that the verse's words on hastening in two days support that count, pointing to the three days after the day of sacrifice, spent at Mina.",
            "bn": "ইমাম বুখারী তাঁর সহীহ গ্রন্থের দুই ঈদের অধ্যায়ে উল্লেখ করেছেন, ইবনে আব্বাস (রাঃ) বলেছেন: জানা দিনগুলো, যার কথা এসেছে ২২:২৮ আয়াতে, হলো জিলহজের প্রথম দশ দিন, আর গোনা দিনগুলো হলো তাশরিকের দিন। ইবনে কাসীর এই বর্ণনা দিয়ে শুরু করেছেন। তারপর মিকসামের সূত্রে ইবনে আব্বাস (রাঃ) থেকে আরেকটি গণনা এনেছেন: চার দিন, কুরবানির দিন আর তার পরের তিন দিন। তিনি বলেছেন, ইবনে উমার (রাঃ), ইবনে যুবাইর (রাঃ), আতা, মুজাহিদ, ইমাম মালিক প্রমুখও এই মত দিয়েছেন। তিনি আরও বলেছেন, দুই দিনে তাড়াতাড়ি চলে যাওয়ার কথাটি এই গণনাকেই সমর্থন করে, আর তা ইঙ্গিত করে কুরবানির দিনের পরের তিন দিনের দিকে, যা কাটে মিনায়।"
          },
          {
            "en": "On the qualifier for the one who fears Allah, at-Tafsir al-Muyassar reads it as the one who feared Allah in his hajj: the lifting of sin belongs to him, and for him either choice is free of blame. As-Sa'di reads it the same way, tying the allowance to those who keep their Lord's commands and the rules of the pilgrimage. It sits beside the saying al-Bukhari records from Abu Hurayrah (RA), that whoever performs hajj for Allah without obscenity or wrongdoing returns like the day his mother bore him.",
            "bn": "লিমানিত্তাকা শর্তটির ব্যাখ্যায় আত-তাফসীর আল-মুয়াসসার বলে: যে হজে আল্লাহকে ভয় করেছে। গুনাহ না থাকার এই ঘোষণা তারই জন্য, আর তার জন্য দুই পথই দোষমুক্ত। আস-সাদীও একই কথা বলেন: ছাড়টি তাদের জন্য, যারা রবের আদেশ ও হজের বিধান মেনে চলে। এর পাশে এসে দাঁড়ায় আবু হুরাইরা (রাঃ) থেকে ইমাম বুখারীর বর্ণিত হাদিস: যে আল্লাহর জন্য হজ করে, অশ্লীলতা ও নাফরমানি থেকে দূরে থাকে, সে ফেরে সেদিনের মতো, যেদিন তার মা তাকে জন্ম দিয়েছিল।"
          },
          {
            "en": "Ibn Kathir includes within the remembrance of these days the mention of Allah's name over the sacrifices, the takbir after the prayers, remembrance at all other times, and the takbir with each pebble thrown at the pillars. The scholars differ over the exact wording of the takbir and the prayers at which it begins and ends, and this page does not choose between them. What they share is the picture: a whole valley of people whose ordinary days have remembrance running through them.",
            "bn": "এই দিনগুলোর জিকিরের ভেতরে ইবনে কাসীর ধরেছেন কুরবানির পশুর ওপর আল্লাহর নাম নেওয়া, নামাজের পরের তাকবির, আর বাকি সময়ের জিকির। জামারায় প্রতিটি কঙ্কর ছোড়ার সময়ের তাকবিরও এর মধ্যে পড়ে। তাকবিরের ঠিক শব্দ কী, আর কোন নামাজ থেকে শুরু হয়ে কোন নামাজে শেষ, সে নিয়ে আলেমদের মতভেদ আছে। এই লেখা সেখানে কোনো পক্ষ নিচ্ছে না। তবে ছবিটা সবার কাছে এক: গোটা একটা উপত্যকা ভরা মানুষ, যাদের সাধারণ দিনগুলোর ভেতর দিয়ে জিকির বয়ে চলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Days of Eating and Remembrance",
          "bn": "খাওয়ার দিন, জিকিরের দিন"
        },
        "p": [
          {
            "en": "Sahih Muslim records from Nubayshah al-Hudhali (RA) that the Messenger of Allah ﷺ said the days of tashriq are days of eating and drinking. In another of Muslim's narrations of the same saying, the words continue: and remembrance of Allah. The report puts together two things a pilgrim might think belong apart, the meat of the sacrifice and the takbir, the shared meal and the name of Allah. The counted days are not a fast or a vigil. They are ordinary days of eating, and the verse asks that remembrance run through them.",
            "bn": "ইমাম মুসলিম নুবাইশা আল-হুযালি (রাঃ) থেকে বর্ণনা করেছেন, রাসূলুল্লাহ ﷺ বলেছেন, তাশরিকের দিনগুলো খাওয়া আর পান করার দিন। একই হাদিসের মুসলিমের আরেক বর্ণনায় কথাটা আরও এগোয়: এবং আল্লাহর জিকিরের দিন। হাদিসটি এমন দুটো জিনিস একসঙ্গে রাখে, যা হাজি হয়তো আলাদা ভাবতেন: কুরবানির গোশত আর তাকবির, একসঙ্গে বসে খাওয়া আর আল্লাহর নাম। গোনা দিনগুলো রোজার দিন নয়, রাত জাগার দিনও নয়। এগুলো খাওয়াদাওয়ার সাধারণ দিন, আর আয়াত চায় সেই দিনগুলোর ভেতর দিয়ে জিকির বয়ে যাক।"
          },
          {
            "en": "Al-Bukhari also mentions, in the same book of the two Eids, that Umar (RA) would say takbir in his tent at Mina, the people in the mosque would hear him and say takbir, and the people in the markets would join them, until Mina shook with takbir. He mentions too that Ibn Umar (RA) said takbir at Mina during those days, after the prayers, on his bed, in his tent, where he sat and as he walked. A whole valley, in other words, made the command of this verse audible.",
            "bn": "ইমাম বুখারী দুই ঈদের সেই অধ্যায়েই আরও উল্লেখ করেছেন, উমর (রাঃ) মিনায় নিজের তাঁবুতে তাকবির বলতেন। মসজিদের লোকেরা তা শুনে তাকবির বলত, বাজারের লোকেরাও তাদের সঙ্গে যোগ দিত, শেষে গোটা মিনা তাকবিরে কেঁপে উঠত। ইমাম বুখারী এটাও উল্লেখ করেছেন যে ইবনে উমর (রাঃ) ওই দিনগুলোতে মিনায় তাকবির বলতেন নামাজের পরে, বিছানায়, তাঁবুতে, বসার জায়গায়, আর হাঁটতে হাঁটতে। অর্থাৎ গোটা একটা উপত্যকা এই আয়াতের আদেশকে কানে শোনার মতো করে তুলেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Heard Alongside",
          "bn": "পাশাপাশি শোনার আয়াত"
        },
        "p": [
          {
            "en": "2:200 is the first sister, because it opened the remembrance this verse completes: when you have finished your rites, remember Allah as you remembered your forefathers, or with greater remembrance. 22:28 names the other set of days, the known days, on which the pilgrims mention the name of Allah over the livestock He provided, then eat of them and feed the poor. Read together, the two verses give the whole season a single thread, from the first of the ten days to the last of the counted ones.",
            "bn": "প্রথম বোন ২:২০০ আয়াত, কারণ এই আয়াত যে জিকির পূর্ণ করে, তার শুরু সেখানে: আনুষ্ঠানিকতা শেষ হলে আল্লাহকে স্মরণ করো যেভাবে বাপ-দাদাকে স্মরণ করতে, বরং তার চেয়েও বেশি। ২২:২৮ আয়াত বলে অন্য দিনগুলোর কথা, আরবিতে যাকে বলা হয়েছে জানা দিন। সে দিনগুলোতে হাজিরা আল্লাহর দেওয়া পশুর ওপর তাঁর নাম নেন, তারপর নিজেরা খান আর অভাবীদের খাওয়ান। দুটো একসঙ্গে পড়লে গোটা মৌসুম একটা সুতোয় গাঁথা হয়ে যায়, দশ দিনের প্রথম দিন থেকে গোনা দিনের শেষ দিন পর্যন্ত।"
          },
          {
            "en": "5:96, in the middle of the rulings on game during ihram, ends on nearly the same words as this verse: fear Allah, to whom you will be gathered. The pilgrim meets the same reminder whether he is being told what to avoid or being told he may go home. And 62:10 gives the weekly form of the same movement: when the prayer has been concluded, disperse within the land, seek the bounty of Allah, and remember Allah often. Leaving a place of worship is never leaving remembrance.",
            "bn": "ইহরাম অবস্থায় শিকারের বিধানের মাঝখানে ৫:৯৬ আয়াত শেষ হয় প্রায় এই আয়াতের কথাতেই: আল্লাহকে ভয় করো, যাঁর কাছে তোমাদের একত্র করা হবে। কী থেকে বেঁচে থাকতে হবে সেটা শোনার সময়ও, আর বাড়ি ফেরার অনুমতি পাওয়ার সময়ও, হাজি একই কথা শোনেন। আর ৬২:১০ আয়াত একই চলাচলের সাপ্তাহিক রূপ দেখায়: নামাজ শেষ হলে জমিনে ছড়িয়ে পড়ো, আল্লাহর অনুগ্রহ খোঁজো, আর আল্লাহকে বেশি বেশি স্মরণ করো। ইবাদতের জায়গা ছেড়ে যাওয়া মানে কখনোই জিকির ছেড়ে যাওয়া নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Days After the Peak",
          "bn": "চূড়ার পরের দিনগুলো"
        },
        "p": [
          {
            "en": "Most believers have their own version of the counted days. The last nights of Ramadan give way to Eid, a retreat ends and work resumes, a season of intense study or caregiving comes to a close. The verse suggests that the days right after a peak are where much is kept or lost. They can be planned in advance: a set of daily adhkar that will not be dropped, the takbir said aloud in the days of Eid, and one habit from the high season carried deliberately into the ordinary days after it.",
            "bn": "প্রায় প্রত্যেক মুমিনের জীবনেই গোনা দিনের নিজস্ব একটা রূপ আছে। রমজানের শেষ রাতগুলোর পর আসে ঈদ, ইতিকাফ শেষে কাজে ফিরতে হয়, গভীর পড়াশোনা বা কারও সেবার একটা মৌসুম ফুরিয়ে যায়। আয়াত ইঙ্গিত দেয়, চূড়ার ঠিক পরের দিনগুলোতেই অনেক কিছু টিকে যায় কিংবা হারিয়ে যায়। এই দিনগুলোর পরিকল্পনা আগেই করা যায়: প্রতিদিনের কিছু জিকির যা বাদ পড়বে না, ঈদের দিনগুলোতে জোরে তাকবির, আর চূড়ার মৌসুমের একটি অভ্যাস, যা সচেতনভাবে পরের সাধারণ দিনগুলোতে বয়ে নেওয়া হবে।"
          },
          {
            "en": "The second lesson is how to hold a lawful choice. Families and study circles often split over permitted options: which day to travel, which of two recognised opinions to follow in a detail of worship. The verse models a settled way of speaking about such things. Name both options, declare both free of sin, and tie the worth of either to taqwa. A pilgrim who stays the third day has not thereby earned the right to look down on one who left on the second because his group was leaving.",
            "bn": "দ্বিতীয় শিক্ষা, জায়েজ দুই পথের মধ্যে বেছে নেওয়াকে কীভাবে ধরে রাখতে হয়। পরিবার আর দ্বীনি মজলিস প্রায়ই ভাগ হয়ে যায় বৈধ বিকল্প নিয়ে: কোন দিন রওনা হবে, ইবাদতের কোনো খুঁটিনাটিতে স্বীকৃত দুই মতের কোনটা মানবে। এমন বিষয়ে কথা বলার একটা স্থির ধরন আয়াত দেখিয়ে দেয়। দুটো পথেরই নাম নিন, দুটোকেই দায়মুক্ত বলুন, আর দুটোরই মূল্য বেঁধে দিন তাকওয়ার সঙ্গে। যে হাজি তৃতীয় দিন থেকে গেলেন, শুধু সে কারণে তিনি সেই হাজিকে ছোট চোখে দেখার অধিকার পান না, যিনি নিজের দল রওনা হচ্ছিল বলে দ্বিতীয় দিনে চলে গেছেন।"
          },
          {
            "en": "The third lesson is the gathering. At the end of hajj the crowds thin quickly: bags are packed, transport is queued, farewells are said. The verse puts the word gathered into that very scene. Any departure, from a masjid, a wedding, a funeral or a city, can become a moment of remembrance for the one who notices it: this crowd is dispersing, and another is coming from which nobody will slip away early.",
            "bn": "তৃতীয় শিক্ষা, সেই সমাবেশ। হজ শেষে ভিড় দ্রুত পাতলা হয়ে আসে। ব্যাগ গোছানো হয়, গাড়ির সারি দাঁড়ায়, বিদায় নেওয়া চলে। আয়াত ঠিক এই দৃশ্যের ভেতরে একত্র করার কথাটা বসিয়ে দেয়। মসজিদ, বিয়েবাড়ি, জানাজা কিংবা কোনো শহর, যেকোনো জায়গা থেকে বিদায়ের মুহূর্ত জিকিরের মুহূর্ত হয়ে উঠতে পারে, যদি খেয়াল করা যায়: এই ভিড় ভেঙে যাচ্ছে, আর আরেকটা ভিড় আসছে, যেখান থেকে কেউ আগেভাগে সরে পড়তে পারবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Help Me to Remember You",
          "bn": "আপনাকে স্মরণ করতে সাহায্য করুন"
        },
        "p": [
          {
            "en": "The counted days are days of remembrance, and the du'a that fits them is one the Prophet ﷺ taught for exactly this need. Abu Dawud and an-Nasa'i report that the Prophet ﷺ took Mu'adh ibn Jabal (RA) by the hand, declared his love for Mu'adh, and instructed him not to leave the end of any prayer without saying: Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik, O Allah, help me to remember You, to thank You, and to worship You well.",
            "bn": "গোনা দিনগুলো জিকিরের দিন, আর তার সঙ্গে মানানসই দোয়াটি নবী ﷺ শিখিয়েছিলেন ঠিক এই প্রয়োজনের জন্যই। আবু দাউদ ও নাসাঈ বর্ণনা করেছেন, নবী ﷺ মুআয ইবনে জাবাল (রাঃ)-এর হাত ধরে তাঁকে ভালোবাসার কথা জানালেন, তারপর নির্দেশ দিলেন, কোনো নামাজের শেষে যেন তিনি এই দোয়া বাদ না দেন: আল্লাহুম্মা আইন্নি আলা জিকরিকা ওয়া শুকরিকা ওয়া হুসনি ইবাদাতিক। হে আল্লাহ, আপনাকে স্মরণ করতে, আপনার শুকরিয়া আদায় করতে আর সুন্দরভাবে আপনার ইবাদত করতে আমাকে সাহায্য করুন।"
          },
          {
            "en": "Beside it, a short supplication in the verse's own vocabulary, offered as such and not as a transmitted text: O Allah, do not let my remembrance of You end when the rites end; make me one of those who fear You, whether I hasten or stay behind; and on the day I am gathered to You, gather me among those You have forgiven. It suits the last evening of any blessed season, when the bags are already packed.",
            "bn": "এর পাশে আয়াতের নিজের শব্দে গড়া ছোট একটি দোয়া। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়: হে আল্লাহ, আনুষ্ঠানিকতা শেষ হলে আমার জিকির যেন শেষ না হয়। আমি আগে চলে যাই বা পিছিয়ে থাকি, আমাকে তাদের একজন বানান যারা আপনাকে ভয় করে। আর যেদিন আমাকে আপনার কাছে একত্র করা হবে, সেদিন আমাকে তাদের সঙ্গে একত্র করুন, যাদের আপনি মাফ করেছেন। যেকোনো বরকতময় মৌসুমের শেষ সন্ধ্যায়, ব্যাগ যখন গোছানো হয়ে গেছে, এই দোয়া মানিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Take Home",
          "bn": "বাড়ি নিয়ে যাওয়ার প্রশ্ন"
        },
        "p": [
          {
            "en": "After the last high point of worship in my life, a Ramadan, a hajj or umrah, a night that moved me, what did the following few days actually contain? Which small habit from that season survived, and which did I let go the moment the season ended? What would it take to protect one of those habits through the counted days in front of me now, before they too are gone?",
            "bn": "জীবনের শেষ যে ইবাদতের চূড়াটা পেরিয়ে এসেছি, একটা রমজান, একটা হজ বা উমরা, মন ছুঁয়ে যাওয়া কোনো রাত, তার পরের কয়েকটা দিনে আসলে কী ছিল? সেই মৌসুমের কোন ছোট অভ্যাসটা টিকে গেছে, আর কোনটা মৌসুম ফুরোতেই ছেড়ে দিয়েছি? সামনের গোনা দিনগুলোও ফুরিয়ে যাওয়ার আগে, তার একটা অভ্যাসকে বাঁচিয়ে রাখতে আমার কী করতে হবে?"
          },
          {
            "en": "When I stand at a fork between two lawful options, do I secretly need mine to be the more pious one? Whom have I judged for leaving early, or for staying longer, when the verse cleared both of us in the same words? And the next time I watch a crowd dispersing after prayer, will I remember the gathering from which no one hastens away?",
            "bn": "দুটো জায়েজ পথের মোড়ে দাঁড়িয়ে আমি কি মনে মনে চাই যে আমারটাই বেশি তাকওয়ার পথ হোক? আগে চলে যাওয়ার জন্য, কিংবা বেশি দিন থেকে যাওয়ার জন্য, কাকে আমি বিচার করেছি, অথচ আয়াত একই কথায় দুজনকেই দায়মুক্ত করেছে? আর পরের বার নামাজের পর ভিড় ভাঙতে দেখলে, আমি কি সেই সমাবেশের কথা মনে করব, যেখান থেকে কেউ তাড়াহুড়ো করে সরে যেতে পারবে না?"
          }
        ]
      }
    ]
  },
  "2:213": {
    "sections": [
      {
        "h": {
          "en": "Why Communities Divide",
          "bn": "জাতিগুলো কেন ভাগ হয়"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and this part of it speaks to a young community living among older ones. 2:208 calls the believers to enter Islam completely and not to follow Satan's footsteps, 2:209-210 warn those who slip after clear proofs have come, 2:211 tells the Prophet ﷺ to ask the Children of Israel how many clear signs they were given, and 2:212 says that worldly life has been made attractive to those who disbelieve, who mock the believers. This verse then steps back and tells the whole story of religious difference in a few lines.",
            "bn": "সূরা বাকারা মাদানী, আর এই অংশ কথা বলছে পুরোনো জাতিগুলোর মাঝে বাস করা এক নতুন উম্মতের সঙ্গে। ২:২০৮ আয়াত মুমিনদের ডাকে পুরোপুরি ইসলামে প্রবেশ করতে আর শয়তানের পদাঙ্ক অনুসরণ না করতে। ২:২০৯ ও ২:২১০ আয়াত সতর্ক করে তাদের, যারা স্পষ্ট প্রমাণ আসার পরেও পা পিছলে পড়ে। ২:২১১ আয়াত নবী ﷺ-কে বলে, বনী ইসরাঈলকে জিজ্ঞেস করো তাদের কত স্পষ্ট নিদর্শন দেওয়া হয়েছিল। ২:২১২ আয়াত জানায়, কাফেরদের চোখে দুনিয়ার জীবন সাজিয়ে দেওয়া হয়েছে, আর তারা মুমিনদের ঠাট্টা করে। এরপর এই আয়াত একটু দূরে দাঁড়িয়ে কয়েক লাইনে বলে দেয় দ্বীন নিয়ে মানুষের মতভেদের পুরো ইতিহাস।"
          },
          {
            "en": "The verse after it, 2:214, turns to the believers directly: do you think you will enter Paradise without trials like those that struck the people before you, who were shaken until the messenger and those who believed with him asked when the help of Allah would come? The order matters. First this verse explains why communities divide; then the next warns that holding on to guidance among the divided will cost something. No single established occasion of revelation is attached to the verse, so its place in this sequence is what carries it.",
            "bn": "এর পরের আয়াত, ২:২১৪, সরাসরি মুমিনদের দিকে ফেরে: তোমরা কি ভেবেছ জান্নাতে ঢুকে যাবে, অথচ আগের লোকদের ওপর যে পরীক্ষা এসেছিল তা তোমাদের ওপর এখনো আসেনি? তারা এমনভাবে কেঁপে উঠেছিল যে রাসূল আর তাঁর সঙ্গী মুমিনরাও বলে উঠেছিলেন, আল্লাহর সাহায্য কখন আসবে? এই ক্রমটা গুরুত্বপূর্ণ। আগে এই আয়াত ব্যাখ্যা করে জাতিগুলো কেন ভাগ হয়, তারপর পরের আয়াত সতর্ক করে, বিভক্ত মানুষের মাঝে হেদায়েত আঁকড়ে থাকার একটা দাম আছে। আয়াতটির সঙ্গে প্রতিষ্ঠিত কোনো নির্দিষ্ট শানে নুযুল যুক্ত নেই, তাই এই ধারাবাহিকতায় তার অবস্থানটাই তার ভার বহন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Community, Then Rivalry",
          "bn": "এক উম্মত, তারপর রেষারেষি"
        },
        "p": [
          {
            "en": "The first key word is ummah, a community bound together by something held in common, here a single religion. The verse says kana, mankind was one community, and continues with fa-ba'atha, so Allah sent the prophets. The small particle fa implies a step the verse leaves unsaid, because the prophets were sent to judge in what people differed over, and there was nothing to judge while they were one. 10:19 supplies that step in plain words: mankind was but one community, and then they differed.",
            "bn": "প্রথম মূল শব্দ উম্মাহ, এমন এক জনগোষ্ঠী যাদের এক সুতোয় বেঁধে রাখে একটা অভিন্ন জিনিস, এখানে এক দ্বীন। আয়াত বলে কানা, মানুষ এক উম্মত ছিল, তারপর বলে ফাবাআসা, অতএব আল্লাহ নবীদের পাঠালেন। ছোট্ট ফা অব্যয়টি এমন এক ধাপের ইঙ্গিত দেয়, যা আয়াত মুখে বলেনি। নবীদের পাঠানো হয়েছিল মানুষের মতভেদের ফয়সালা করতে, আর সবাই যখন এক ছিল তখন ফয়সালার কিছু ছিল না। ১০:১৯ আয়াত সেই ধাপটা সোজা ভাষায় বলে দেয়: মানুষ এক উম্মতই ছিল, পরে তারা মতভেদ করল।"
          },
          {
            "en": "The second is baghyan baynahum, out of rivalry among themselves. Baghy, from the root b-gh-y, is to seek beyond one's due, and so to transgress against another. The verse builds up to it with care: none differed over the Book except those who were given it, after the clear proofs had come to them, out of baghy. Each phrase closes an excuse. It was not strangers to the Book who differed, it was not before the evidence arrived, and it was not an honest mistake. It was the wish to stand over one another.",
            "bn": "দ্বিতীয় শব্দ বাগইয়াম বাইনাহুম, নিজেদের মধ্যে রেষারেষির কারণে। বাগই এসেছে বা-গাইন-ইয়া মূল থেকে, এর অর্থ নিজের প্রাপ্যের সীমা ছাড়িয়ে চাওয়া, আর তা থেকে অন্যের ওপর বাড়াবাড়ি করা। আয়াত যত্ন করে এই শব্দ পর্যন্ত পৌঁছায়: কিতাব নিয়ে মতভেদ করেনি কেউ, তারা ছাড়া যাদের কিতাব দেওয়া হয়েছিল, স্পষ্ট প্রমাণ আসার পরে, রেষারেষির কারণে। প্রতিটি অংশ একেকটা অজুহাত বন্ধ করে দেয়। যারা মতভেদ করল তারা কিতাবের অচেনা লোক নয়, প্রমাণ আসার আগেও নয়, আর সরল ভুলও নয়। কারণ ছিল একে অন্যের মাথার ওপরে দাঁড়ানোর ইচ্ছা।"
          },
          {
            "en": "The third is bi-idhnihi, by His permission, attached to the guidance of the believers. They were not guided because they out-argued anyone. And the verse closes with a general statement: Allah guides whom He wills to a straight path. Guidance is named twice, once as something that happened in history and once as something Allah goes on doing, so no generation can treat it as an inheritance it already owns.",
            "bn": "তৃতীয় শব্দ বিইযনিহি, তাঁর অনুমতিতে, যা জুড়ে আছে মুমিনদের হেদায়েত পাওয়ার সঙ্গে। তারা কাউকে তর্কে হারিয়ে হেদায়েত পায়নি। আর আয়াত শেষ হয় একটা সাধারণ কথায়: আল্লাহ যাকে চান সরল পথে পরিচালিত করেন। হেদায়েতের কথা এসেছে দুবার। একবার ইতিহাসে ঘটে যাওয়া ঘটনা হিসেবে, আরেকবার এমন কাজ হিসেবে যা আল্লাহ করেই চলেছেন। তাই কোনো প্রজন্ম একে উত্তরাধিকারে পাওয়া নিজের সম্পত্তি ভাবতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of One Community",
          "bn": "এক উম্মতের দুই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "At-Tabari records from Ibn Abbas (RA) that between Adam and Nuh (AS) there were ten generations, all of them upon a law of truth; then they differed, and Allah sent the prophets as bringers of good tidings and warners. Ibn Kathir cites this report and prefers it. On this reading the one community was one in truth, and difference was the later arrival that the prophets were sent to judge. It fits 10:19, which sets being one community first and the differing after it.",
            "bn": "তাবারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেছেন, আদম (আঃ) আর নূহ (আঃ)-এর মাঝে দশ প্রজন্ম কেটেছিল, তারা সবাই ছিল সত্যের শরিয়তের ওপর। তারপর তারা মতভেদ করল, আর আল্লাহ নবীদের পাঠালেন সুসংবাদদাতা ও সতর্ককারী করে। ইবনে কাসীর এই বর্ণনা উদ্ধৃত করেছেন এবং একেই অগ্রাধিকার দিয়েছেন। এই ব্যাখ্যায় এক উম্মত মানে সত্যের ওপর এক, আর মতভেদ এসেছে পরে, যার ফয়সালার জন্য নবীদের পাঠানো হয়। ১০:১৯ আয়াতের সঙ্গেও এটা মেলে, যেখানে আগে এক উম্মত থাকার কথা, আর মতভেদ তার পরে।"
          },
          {
            "en": "A second reading, which at-Tabari also records, takes the one community to have been one in disbelief, with the prophets sent into that darkness. Ar-Razi sets out both positions and weighs the arguments for each. The difference is real and old, and this page does not decide it beyond noting Ibn Kathir's preference. On either reading, what carries the reflection is untouched: the verse describes difference arriving, and it names the source of the difference that survived the prophets and their Book.",
            "bn": "আরেকটি ব্যাখ্যাও তাবারী উল্লেখ করেছেন। তাতে এক উম্মত মানে কুফরির ওপর এক, আর নবীদের পাঠানো হয়েছিল সেই অন্ধকারের মধ্যে। রাজি দুই মতই সাজিয়ে দুই দিকের যুক্তি ওজন করেছেন। মতভেদটা বাস্তব আর পুরোনো। ইবনে কাসীর কোনটাকে অগ্রাধিকার দিয়েছেন সেটুকু জানানো ছাড়া এই লেখা এর মীমাংসা করছে না। যে ব্যাখ্যাই ধরা হোক, এখানকার ভাবনার ভিত অটুট থাকে। আয়াত দেখায় মতভেদ কীভাবে এল, আর নবী ও কিতাব আসার পরেও যে মতভেদ টিকে রইল, তার উৎসের নাম বলে দেয়।"
          },
          {
            "en": "On baghyan baynahum, Ibn Kathir explains that they differed after the proofs had been established against them, out of envy and wrongdoing toward one another. He then brings under the verse's closing clauses the report about Friday given in the next section, and reads the guidance of the believers as including this ummah's guidance to matters the earlier communities had disputed.",
            "bn": "বাগইয়াম বাইনাহুম প্রসঙ্গে ইবনে কাসীর ব্যাখ্যা করেন, তাদের বিরুদ্ধে প্রমাণ প্রতিষ্ঠিত হওয়ার পরেই তারা মতভেদ করেছিল, একে অন্যের প্রতি হিংসা আর জুলুম থেকে। এরপর আয়াতের শেষ অংশের অধীনে তিনি জুমার দিনের সেই হাদিস আনেন, যা পরের অংশে আসছে। মুমিনদের হেদায়েত পাওয়ার কথার মধ্যে তিনি ধরেন এই উম্মতের সেইসব বিষয়ে পথ পাওয়াও, যা নিয়ে আগের জাতিগুলো বিবাদ করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Guided to What Others Disputed",
          "bn": "অন্যরা যা নিয়ে বিবাদ করেছিল"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both record from Abu Hurayrah (RA) the saying of the Prophet ﷺ that his community is the last to come and the foremost on the Day of Resurrection, even though the earlier communities were given the Book before it. Al-Bukhari's wording continues that this day, Friday, was prescribed for those communities and they differed over it, and Allah guided the Muslims to it, so the others follow them in it: the Jews on the next day and the Christians on the day after. The report shows the verse's pattern within a single week.",
            "bn": "ইমাম বুখারী ও মুসলিম দুজনেই আবু হুরাইরা (রাঃ) থেকে নবী ﷺ-এর এই কথা বর্ণনা করেছেন: আমরা সবার শেষে এসেছি, অথচ কিয়ামতের দিন আমরাই থাকব সবার আগে, যদিও আগের জাতিগুলোকে কিতাব দেওয়া হয়েছিল আমাদের আগে। বুখারীর বর্ণনায় এরপর আছে, এই দিনটি, অর্থাৎ জুমা, তাদের জন্য নির্ধারিত হয়েছিল, তারা এ নিয়ে মতভেদ করল, আর আল্লাহ আমাদের এর দিকে পথ দেখালেন। তাই মানুষ এতে আমাদের পেছনে: ইহুদিরা পরের দিন, আর খ্রিস্টানরা তার পরের দিন। এক সপ্তাহের ছোট্ট পরিসরে হাদিসটি আয়াতের ধারাটাই দেখিয়ে দেয়।"
          },
          {
            "en": "Muslim also records from Aishah (RA), when she was asked how the Prophet ﷺ began his prayer when he stood at night, that he opened it with a supplication whose closing lines take this verse's words and turn them into a request: You judge between Your servants in what they used to differ over; guide me in what has been differed over of the truth, by Your permission; indeed You guide whom You will to a straight path. The full supplication is given in the du'a section below.",
            "bn": "ইমাম মুসলিম আরও বর্ণনা করেছেন, আয়েশা (রাঃ)-কে জিজ্ঞেস করা হয়েছিল, রাতে নামাজে দাঁড়ালে নবী ﷺ কী দিয়ে শুরু করতেন। তিনি জানালেন, নবী ﷺ শুরু করতেন এমন এক দোয়া দিয়ে, যার শেষ অংশ এই আয়াতের শব্দগুলো তুলে নিয়ে প্রার্থনা বানিয়ে দেয়: আপনার বান্দারা যা নিয়ে মতভেদ করত, আপনিই তার ফয়সালা করেন। সত্যের যে বিষয়ে মতভেদ হয়েছে, আপনার অনুমতিতে তাতে আমাকে পথ দেখান। নিশ্চয়ই আপনি যাকে চান সরল পথে পরিচালিত করেন। পুরো দোয়াটি নিচে দোয়ার অংশে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Story, Told Again",
          "bn": "একই কাহিনি, বারবার"
        },
        "p": [
          {
            "en": "10:19 states the history in the plainest terms: mankind was but one community, then they differed, and but for a word that preceded from your Lord, it would have been judged between them. 3:19 names the cause this verse names: those given the Scripture did not differ except after knowledge had come to them, out of rivalry among themselves. 45:17 repeats the same pattern and adds where it ends: your Lord will judge between them on the Day of Resurrection concerning that over which they used to differ.",
            "bn": "১০:১৯ আয়াত ইতিহাসটা বলে সবচেয়ে সরল ভাষায়: মানুষ এক উম্মতই ছিল, পরে তারা মতভেদ করল, আর তোমার রবের পক্ষ থেকে আগেই একটা কথা স্থির হয়ে না থাকলে তাদের মধ্যে ফয়সালা হয়ে যেত। ৩:১৯ আয়াত সেই কারণটাই বলে যা এই আয়াত বলেছে: যাদের কিতাব দেওয়া হয়েছিল, তারা মতভেদ করেছিল কেবল জ্ঞান আসার পরে, নিজেদের রেষারেষির কারণে। ৪৫:১৭ আয়াত একই ধারার পুনরাবৃত্তি করে আর জানিয়ে দেয় এর শেষ কোথায়: তারা যা নিয়ে মতভেদ করত, কিয়ামতের দিন তোমার রব তাদের মধ্যে তার ফয়সালা করবেন।"
          },
          {
            "en": "11:118-119 add another side: had your Lord willed He could have made mankind one community, but they will not cease to differ, except those on whom your Lord has mercy. And 3:105 turns the history into a command for this ummah: do not be like those who became divided and differed after the clear proofs had come to them. The story in 2:213 is not told so that Muslims can feel superior to others; the warnings on either side of it make clear it is told so they will not repeat it.",
            "bn": "১১:১১৮ ও ১১:১১৯ আয়াত আরেকটা দিক যোগ করে: তোমার রব চাইলে মানুষকে এক উম্মত বানাতে পারতেন, কিন্তু তারা মতভেদ করতেই থাকবে, কেবল তারা ছাড়া যাদের ওপর তোমার রব দয়া করেন। আর ৩:১০৫ আয়াত ইতিহাসটাকে এই উম্মতের জন্য হুকুম বানিয়ে দেয়: তাদের মতো হয়ো না, যারা স্পষ্ট প্রমাণ আসার পরেও বিভক্ত হয়েছে আর মতভেদ করেছে। ২:২১৩ আয়াতের কাহিনি মুসলিমদের অন্যের চেয়ে বড় ভাবার জন্য বলা হয়নি। এর দুই পাশের সতর্কবাণী স্পষ্ট করে দেয়, বলা হয়েছে যাতে তারা নিজেরা একই কাজ না করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Test for Every Dispute",
          "bn": "প্রতিটি বিবাদের জন্য একটি পরীক্ষা"
        },
        "p": [
          {
            "en": "The verse gives a working test for any dispute about religion. Before speaking, ask the question it raises: have the clear proofs already come, and if so, what is keeping this disagreement alive? If it is genuine uncertainty, the path is study, patience and asking those who know. If it is baghy, the wish to be above a rival, a teacher, a neighbouring masjid or a relative, then no further evidence will end it, because evidence was never what the dispute was about.",
            "bn": "দ্বীন নিয়ে যেকোনো বিবাদের জন্য আয়াত একটা কাজের পরীক্ষা দিয়ে দেয়। কথা বলার আগে আয়াতের তোলা প্রশ্নটা নিজেকে করুন: স্পষ্ট প্রমাণ কি আগেই এসে গেছে? এসে থাকলে, এই মতভেদকে বাঁচিয়ে রাখছে কী? যদি সত্যিকারের অনিশ্চয়তা হয়, তাহলে পথ হলো পড়াশোনা, ধৈর্য, আর যারা জানেন তাদের জিজ্ঞেস করা। কিন্তু যদি তা হয় বাগই, কোনো প্রতিদ্বন্দ্বী, কোনো উস্তাদ, পাশের মসজিদ বা কোনো আত্মীয়ের ওপরে থাকার ইচ্ছা, তাহলে নতুন প্রমাণ দিয়ে এ বিবাদ মিটবে না। কারণ বিবাদটা কখনো প্রমাণ নিয়ে ছিলই না।"
          },
          {
            "en": "In practice this looks small. It means not sharing the clip that humiliates a scholar you disagree with. It means stating another Muslim's position as he would state it before you answer it. It means asking whether the matter is one on which the scholars of the ummah have long held more than one view, and if so, holding yours without contempt. And it means asking Allah for guidance in the very questions you feel sure about, since the verse says guidance came by His permission and not by anyone's cleverness.",
            "bn": "বাস্তবে এর চেহারা ছোট ছোট কাজে। যে আলেমের সঙ্গে আপনার দ্বিমত, তাঁকে হেয় করা ভিডিওটা শেয়ার না করা। আরেক মুসলিমের মত খণ্ডন করার আগে তা এমনভাবে বলা, যেভাবে তিনি নিজে বলতেন। খেয়াল করা, বিষয়টা এমন কি না যেখানে উম্মতের আলেমদের মধ্যে বহুদিন ধরে একাধিক মত চলে আসছে, আর তেমন হলে নিজের মত রাখা কাউকে তুচ্ছ না করে। আর যে প্রশ্নগুলোতে আপনি নিশ্চিত, ঠিক সেগুলোতেই আল্লাহর কাছে হেদায়েত চাওয়া। কারণ আয়াত বলেছে, হেদায়েত এসেছে তাঁর অনুমতিতে, কারও বুদ্ধির জোরে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night Prayer's Opening",
          "bn": "রাতের নামাজের শুরুর দোয়া"
        },
        "p": [
          {
            "en": "The Prophet ﷺ carried this verse's vocabulary into his own night prayer. Muslim records from Aishah (RA) that he would open it with these words: O Allah, Lord of Jibril, Mika'il and Israfil, Originator of the heavens and the earth, Knower of the unseen and the seen, You judge between Your servants in what they used to differ over. Guide me in what has been differed over of the truth, by Your permission. Indeed, You guide whom You will to a straight path.",
            "bn": "নবী ﷺ এই আয়াতের শব্দগুলো বয়ে নিয়ে গেছেন নিজের রাতের নামাজে। ইমাম মুসলিম আয়েশা (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ রাতের নামাজ শুরু করতেন এই কথাগুলো দিয়ে: হে আল্লাহ, জিবরীল, মীকাঈল ও ইসরাফীলের রব, আসমান ও জমিনের স্রষ্টা, গায়েব ও প্রকাশ্য সবকিছুর জ্ঞানী, আপনার বান্দারা যা নিয়ে মতভেদ করত, আপনিই তার ফয়সালা করেন। সত্যের যে বিষয়ে মতভেদ হয়েছে, আপনার অনুমতিতে তাতে আমাকে পথ দেখান। নিশ্চয়ই আপনি যাকে চান সরল পথে পরিচালিত করেন।"
          },
          {
            "en": "In Arabic it opens Allahumma rabba Jibra'il wa Mika'il wa Israfil, and its heart is ihdini lima-khtulifa fihi min al-haqqi bi-idhnik. Anyone can learn that line and say it before study, before a difficult conversation with someone they disagree with, or at the start of the night prayer as he ﷺ did. It asks for exactly what 2:213 says the believers were given, and it asks for it on the same terms, by His permission.",
            "bn": "আরবিতে দোয়াটি শুরু হয় আল্লাহুম্মা রাব্বা জিবরাঈলা ওয়া মীকাঈলা ওয়া ইসরাফীলা দিয়ে, আর এর প্রাণ হলো ইহদিনি লিমাখতুলিফা ফীহি মিনাল হাক্কি বিইযনিক। যে কেউ এই লাইনটা শিখে নিয়ে বলতে পারেন পড়তে বসার আগে, দ্বিমত আছে এমন কারও সঙ্গে কঠিন আলাপের আগে, কিংবা নবী ﷺ-এর মতো রাতের নামাজের শুরুতে। ২:২১৩ আয়াত বলেছে মুমিনদের যা দেওয়া হয়েছিল, দোয়াটি ঠিক সেটাই চায়, আর চায় একই শর্তে, তাঁর অনুমতিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সঙ্গে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "When I last argued about a matter of religion, was I hoping to find the truth or hoping to be seen to have it? Which disagreement in my family, my masjid or my online circle has outlived every clear proof, and what is really feeding it? Do I pray for guidance in the questions I have already decided, or only in the ones I admit I do not know?",
            "bn": "শেষবার দ্বীনের কোনো বিষয়ে তর্ক করার সময় আমি কি সত্যটা খুঁজে পেতে চেয়েছিলাম, নাকি চেয়েছিলাম লোকে দেখুক সত্যটা আমার হাতে? আমার পরিবার, মসজিদ বা অনলাইনের পরিচিত মহলে কোন মতভেদ সব স্পষ্ট প্রমাণের পরেও টিকে আছে, আর আসলে তাকে খোরাক দিচ্ছে কী? যেসব প্রশ্নের মীমাংসা আমি করে ফেলেছি, সেগুলোতেও কি হেদায়েত চাই, নাকি কেবল সেগুলোতে, যেখানে স্বীকার করি যে জানি না?"
          },
          {
            "en": "If guidance comes by His permission, what have I been treating as my own achievement? Whose correct view do I find it hard to accept only because of who holds it? When Allah has guided me to something others dispute, do I answer with gratitude or with contempt? And when I am right, can I be right quietly, without needing someone else to be humiliated?",
            "bn": "হেদায়েত যদি তাঁর অনুমতিতেই আসে, তাহলে কোন জিনিসকে আমি নিজের কৃতিত্ব বলে ধরে রেখেছি? কার সঠিক মত মেনে নিতে আমার কষ্ট হয় শুধু এই কারণে যে মতটা তাঁর? যে বিষয়ে অন্যরা বিবাদ করে, সেখানে আল্লাহ আমাকে পথ দেখালে আমি কি শুকরিয়া দিয়ে সাড়া দিই, নাকি তাচ্ছিল্য দিয়ে? আর আমি ঠিক থাকলে, কাউকে অপমানিত হতে না দেখেও কি চুপচাপ ঠিক থাকতে পারি?"
          }
        ]
      },
      {
        "h": {
          "en": "For Teachers and Parents",
          "bn": "শিক্ষক ও অভিভাবকদের জন্য"
        },
        "p": [
          {
            "en": "For children, the verse can be told as a story in three moments. People were once one family on one truth. They began to quarrel, and Allah sent prophets and books to settle it. Then some quarrelled even over the book, because each wanted to be the winner. Ask a child what keeps a quarrel with a brother or sister going after everyone already knows who was right. Children often answer with the meaning of baghy long before they have heard the word.",
            "bn": "শিশুদের কাছে আয়াতটি বলা যায় তিন ধাপের একটা গল্প হিসেবে। একসময় মানুষ ছিল এক সত্যের ওপর এক পরিবার। তারপর তারা ঝগড়া শুরু করল, আর আল্লাহ তা মেটাতে পাঠালেন নবী আর কিতাব। এরপর কেউ কেউ কিতাব নিয়েও ঝগড়া করল, কারণ প্রত্যেকে জিততে চাইছিল। শিশুকে জিজ্ঞেস করুন, কে ঠিক ছিল সবাই জেনে যাওয়ার পরেও ভাই বা বোনের সঙ্গে ঝগড়া কেন চলতে থাকে? বাগই শব্দটা শোনার অনেক আগেই শিশুরা প্রায়ই এর অর্থটা নিজেরাই বলে দেয়।"
          },
          {
            "en": "In a study circle, the verse sets the manners of disagreement before any disagreement begins. A teacher can open a session on a contested question by reading it together, naming the difference between honest uncertainty and rivalry, and closing with the Prophet's ﷺ du'a from Muslim. Students then learn that the aim of the discussion is to be guided, not to be proven right, and that the one who concedes a point has lost nothing.",
            "bn": "দ্বীনি পাঠচক্রে আয়াতটি মতভেদ শুরু হওয়ার আগেই মতভেদের আদব ঠিক করে দেয়। বিতর্কিত কোনো প্রশ্নের আলোচনা শিক্ষক শুরু করতে পারেন আয়াতটি একসঙ্গে পড়ে, সরল অনিশ্চয়তা আর রেষারেষির পার্থক্যটা চিনিয়ে দিয়ে, আর শেষ করতে পারেন মুসলিমে বর্ণিত নবী ﷺ-এর দোয়াটি দিয়ে। শিক্ষার্থীরা তখন শেখে, আলোচনার লক্ষ্য হেদায়েত পাওয়া, নিজেকে ঠিক প্রমাণ করা নয়। আর যে একটা যুক্তি মেনে নেয়, সে কিছুই হারায় না।"
          }
        ]
      }
    ]
  },
  "2:216": {
    "sections": [
      {
        "h": {
          "en": "A Command and an Admission",
          "bn": "আদেশের সঙ্গে স্বীকৃতি"
        },
        "p": [
          {
            "en": "The verse opens with kutiba 'alaykumul-qital, fighting has been prescribed for you. The same verb, kutiba, was used a few verses earlier for fasting in 2:183, so the wording places this among the ordained duties rather than among appeals. Then comes something unusual: wa huwa kurhun lakum, and it is disliked by you. Allah states the feeling of those He is commanding before He argues with it.",
            "bn": "আয়াত শুরু হয় 'কুতিবা আলাইকুমুল কিতাল' দিয়ে: তোমাদের ওপর যুদ্ধ ফরজ করা হলো। কয়েক আয়াত আগে ২:১৮৩-এ রোজার বেলায়ও ঠিক এই 'কুতিবা' শব্দটাই এসেছে। তাই শব্দটাই একে অনুরোধের কাতারে নয়, নির্ধারিত ফরজের কাতারে বসিয়ে দেয়। এরপর আসে একটা অপ্রত্যাশিত কথা: 'ওয়া হুয়া কুরহুন লাকুম', আর তা তোমাদের কাছে অপছন্দের। যাদের আদেশ দিচ্ছেন, তাদের মনের অনুভূতিটা আল্লাহ নিজেই আগে বলে দেন, তারপর তার জবাব দেন।"
          },
          {
            "en": "That admission is the door into the rest of the verse. Nobody is told that they should have enjoyed the prospect. Then the principle arrives in two balanced clauses: it may be that you dislike a thing and it is good for you, and it may be that you love a thing and it is bad for you. The particle 'asa speaks of what may be so, addressing our limited view rather than laying down a universal rule; the verse does not claim that everything disliked is secretly good.",
            "bn": "এই স্বীকৃতিই বাকি আয়াতে ঢোকার দরজা। কাউকে বলা হয়নি যে ব্যাপারটায় তার খুশি হওয়া উচিত ছিল। তারপর মূল নীতিটা আসে সমান মাপের দুটি বাক্যে: হতে পারে তোমরা কোনো কিছু অপছন্দ করো, অথচ তা তোমাদের জন্য কল্যাণকর; আর হতে পারে তোমরা কোনো কিছু ভালোবাসো, অথচ তা তোমাদের জন্য ক্ষতিকর। 'আসা' শব্দের অর্থ, এমন হতে পারে। শব্দটি আমাদের সীমিত দৃষ্টির কথা মাথায় রেখে বলা, সবখানে খাটে এমন কোনো নিয়ম জারি করা নয়। আয়াত এমন দাবি করে না যে অপছন্দের প্রতিটি জিনিসের ভেতরেই কল্যাণ লুকিয়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Was Revealed",
          "bn": "কোন প্রেক্ষাপটে নাজিল"
        },
        "p": [
          {
            "en": "The verse belongs to the Madinan passages of Surah al-Baqarah dealing with the community's new and unwelcome reality of armed conflict. It sits shortly after 2:214, which asks whether people supposed they would enter the Garden without the trials that came upon those before them, and just before 2:217, which answers a question about fighting in the sacred month. The setting is a specific and serious obligation, not an abstract meditation on fate.",
            "bn": "আয়াতটি সূরা বাকারার মাদানী অংশের, যেখানে নতুন মুসলিম সমাজের সামনে সশস্ত্র লড়াইয়ের নতুন ও অনাকাঙ্ক্ষিত বাস্তবতা নিয়ে কথা হচ্ছে। এর অল্প আগে ২:২১৪ আয়াত প্রশ্ন করেছে: মানুষ কি ভেবে নিয়েছে, আগের লোকদের ওপর যে পরীক্ষা এসেছিল তা ছাড়াই তারা জান্নাতে ঢুকে যাবে? আর ঠিক পরে ২:২১৭ আয়াত পবিত্র মাসে যুদ্ধ নিয়ে এক প্রশ্নের জবাব দেয়। অর্থাৎ প্রেক্ষাপট একটা নির্দিষ্ট ও গুরুতর দায়িত্ব, তাকদির নিয়ে কোনো বিমূর্ত ভাবনা নয়।"
          },
          {
            "en": "Keeping that origin in view matters, because the closing principle is stated in fully general terms and has therefore travelled far beyond its original subject. That travel is legitimate: the Quran often states a universal rule at the end of a particular ruling. But a reader who forgets the setting can end up using the verse to explain away every disappointment, which is a heavier claim than the words make.",
            "bn": "এই মূল প্রেক্ষাপট মনে রাখা জরুরি। আয়াতের শেষ নীতিটা পুরোপুরি সাধারণ ভাষায় বলা, তাই তা নিজের মূল বিষয় ছাড়িয়ে অনেক দূর পৌঁছেছে। এভাবে পৌঁছানোটা ঠিকই আছে: কুরআন প্রায়ই কোনো নির্দিষ্ট বিধানের শেষে সবার জন্য খাটে এমন একটা নীতি বলে দেয়। কিন্তু প্রেক্ষাপট ভুলে গেলে পাঠক এই আয়াত দিয়ে জীবনের প্রতিটি হতাশাকে ব্যাখ্যা করে উড়িয়ে দিতে পারেন। আয়াতের শব্দগুলো যতটা দাবি করে, এটা তার চেয়ে অনেক ভারী দাবি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Limits of Our Sight",
          "bn": "আমাদের দৃষ্টির সীমা"
        },
        "p": [
          {
            "en": "The verse ends with wallahu ya'lamu wa antum la ta'lamun: and Allah knows while you do not know. The commentators generally read the whole verse as a correction of a specific error, which is judging outcomes by present feeling. Human preference works on visible, immediate information. Divine knowledge takes in what the same choice produces years later and in the hereafter. The two will not always agree, and when they do not, the verse says which is reliable.",
            "bn": "আয়াত শেষ হয় 'ওয়াল্লাহু ইয়া'লামু ওয়া আনতুম লা তা'লামূন' দিয়ে: আল্লাহ জানেন, আর তোমরা জানো না। মুফাসসিররা সাধারণত পুরো আয়াতকে পড়েন একটা নির্দিষ্ট ভুল শুধরে দেওয়া হিসেবে। ভুলটা হলো এই মুহূর্তের অনুভূতি দিয়ে পরিণতির বিচার করা। মানুষের পছন্দ চলে চোখের সামনের, তাৎক্ষণিক তথ্যের ওপর। আর আল্লাহর জ্ঞানে আছে, সেই একই সিদ্ধান্ত বহু বছর পরে এবং আখিরাতে কী ফল আনবে। দুটো সবসময় মেলে না। যখন মেলে না, তখন কোনটার ওপর ভরসা করা যায়, আয়াত তা বলে দেয়।"
          },
          {
            "en": "It is important to notice what this does not establish. The verse does not teach that hardship is always disguised benefit, nor that a person should stop preferring health to illness or safety to danger. It teaches that our ranking of possibilities is provisional. The commentators tend to draw from it a posture rather than an explanation: do what is right, prefer what is lawful, and do not build certainty on a forecast you are not equipped to make.",
            "bn": "খেয়াল রাখা দরকার, আয়াতটি কী প্রমাণ করে না। আয়াত শেখায় না যে কষ্ট মানেই ছদ্মবেশে কল্যাণ। এটাও শেখায় না যে মানুষ অসুস্থতার চেয়ে সুস্থতা, বিপদের চেয়ে নিরাপত্তা চাওয়া ছেড়ে দেবে। আয়াত শেখায়, কোনটা ভালো আর কোনটা মন্দ, সে ব্যাপারে আমাদের হিসাব সাময়িক। মুফাসসিররা এ থেকে সাধারণত কোনো ব্যাখ্যা নয়, বরং একটা মনোভাব বের করে আনেন: যা ঠিক তা করুন, যা হালাল তা বেছে নিন, আর এমন ভবিষ্যদ্বাণীর ওপর নিশ্চয়তার ঘর বানাবেন না, যা করার সামর্থ্যই আপনার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Lived by the Companions",
          "bn": "সাহাবীদের জীবনে"
        },
        "p": [
          {
            "en": "The generation who first heard this verse did not pretend to relish what it commanded. Their example is one of acting rightly while still disliking the task, which is a far more usable model than manufactured enthusiasm. The verse's honesty about kurh is what makes that possible: obedience is measured by what a person does, and feelings are allowed to lag behind without invalidating the deed.",
            "bn": "যাঁরা প্রথম এই আয়াত শুনেছিলেন, তাঁরা এমন ভান করেননি যে আদেশটা তাঁদের খুব ভালো লাগছে। তাঁদের দৃষ্টান্ত হলো, মন না চাইলেও সঠিক কাজটা করে যাওয়া। জোর করে বানানো উৎসাহের চেয়ে এই আদর্শ অনেক বেশি কাজের। 'কুরহ', অর্থাৎ অপছন্দের কথা আয়াত সোজাসুজি স্বীকার করেছে বলেই এটা সম্ভব হয়। আনুগত্য মাপা হয় মানুষ কী করল তা দিয়ে। অনুভূতি পিছিয়ে থাকলেও আমল বাতিল হয়ে যায় না।"
          },
          {
            "en": "Muslim narrates that when Umm Salamah (RA) lost her husband Abu Salamah (RA) she said the supplication the Prophet ﷺ had taught, asking Allah to reward her in her affliction and to replace it with something better, and she admitted she wondered who could possibly be better than Abu Salamah. She was later married to the Prophet ﷺ. She did not know at the time; that is the whole point of the account, and she did not claim to.",
            "bn": "ইমাম মুসলিম বর্ণনা করেছেন, উম্মে সালামা (রাঃ) যখন স্বামী আবু সালামা (রাঃ)-কে হারালেন, তখন নবী ﷺ-এর শেখানো দোয়াটি পড়লেন। সে দোয়ায় আল্লাহর কাছে চাওয়া হয় বিপদের প্রতিদান, আর তার বদলে আরও উত্তম কিছু। তিনি নিজেই স্বীকার করেছেন, তখন মনে মনে ভেবেছিলেন, আবু সালামার চেয়ে উত্তম আর কে হতে পারে! পরে নবী ﷺ-এর সঙ্গে তাঁর বিয়ে হয়। সেই মুহূর্তে তিনি তা জানতেন না, আর জানার দাবিও করেননি। পুরো ঘটনার মূল কথা এটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading It in Real Pain",
          "bn": "সত্যিকারের কষ্টের মধ্যে আয়াতটি"
        },
        "p": [
          {
            "en": "This verse is often quoted to people in the middle of loss, and it can be quoted badly. Told to a grieving parent, it may sound like a claim that their child's death was good for them, which the verse does not say and which no one is in a position to say. What the verse asserts is the limit of our knowledge, and a limit on our knowledge is not a licence to speak confidently about someone else's calamity.",
            "bn": "শোকের মাঝখানে থাকা মানুষকে প্রায়ই এই আয়াত শোনানো হয়, আর শোনানোর ধরন খারাপও হতে পারে। সন্তান হারানো কোনো বাবা-মাকে বললে মনে হতে পারে, বলা হচ্ছে সন্তানের মৃত্যু তাঁদের জন্য ভালোই হয়েছে। আয়াত এমন কথা বলে না, আর এমন কথা বলার মতো অবস্থানেও কেউ নেই। আয়াত বলে আমাদের জ্ঞানের সীমার কথা। আর নিজের জ্ঞান সীমিত হলে তা থেকে অন্যের বিপদ নিয়ে জোর গলায় কথা বলার অনুমতি মেলে না।"
          },
          {
            "en": "Read in the first person it works quite differently. It gives permission to stop demanding an explanation as the price of continuing, and it leaves the future genuinely open rather than sealed by present appearances. The Quran nowhere asks a person to call a wound sweet. It asks them to keep going without concluding that the story has ended badly, when they are not the one who can see the end.",
            "bn": "কিন্তু নিজের জন্য পড়লে আয়াতটি একেবারে অন্যভাবে কাজ করে। এটি আপনাকে ছাড় দেয়: সামনে চলার আগে 'কেন হলো' তার ব্যাখ্যা আদায় করতে হবে না। এখনকার চেহারা দেখে ভবিষ্যৎকে বন্ধ খাতা বানিয়ে ফেলে না, সত্যিই খোলা রাখে। কুরআন কোথাও কাউকে বলে না যে ক্ষতকে মিষ্টি বলুন। বলে, চলতে থাকুন। শেষটা দেখার ক্ষমতা যখন আপনার নেই, তখন ধরে নেবেন না যে গল্পটা খারাপভাবে শেষ হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Using It Well",
          "bn": "আয়াতটির সঠিক ব্যবহার"
        },
        "p": [
          {
            "en": "There is a decision-making use for this verse that costs nothing and often helps. Before a choice, do the work: gather the facts, take advice, weigh the lawful options, pray istikharah. Then act on the best available reading and hand the outcome over. The verse is not an argument for passivity; it is an argument against treating your own preference as knowledge, which is a different and more specific thing.",
            "bn": "সিদ্ধান্ত নেওয়ার সময় এই আয়াতের একটা ব্যবহার আছে, যাতে কিছুই খরচ হয় না, অথচ প্রায়ই কাজে দেয়। কোনো সিদ্ধান্তের আগে নিজের কাজটুকু করুন: তথ্য জোগাড় করুন, পরামর্শ নিন, হালাল বিকল্পগুলো ওজন করে দেখুন, ইস্তিখারা করুন। তারপর হাতে থাকা সবচেয়ে ভালো বিবেচনা অনুযায়ী কাজ করুন, আর ফলাফল আল্লাহর হাতে ছেড়ে দিন। আয়াতটি হাত গুটিয়ে বসে থাকার পক্ষে যুক্তি নয়। এটি যুক্তি নিজের পছন্দকে জ্ঞান বলে ধরে নেওয়ার বিরুদ্ধে, আর সেটা আলাদা, অনেক বেশি নির্দিষ্ট একটা ব্যাপার।"
          },
          {
            "en": "Afterwards, it changes how disappointment is carried. A rejected application, a refused proposal, a job that fell through: each can be recorded as a closed door whose reason is not yet available, rather than as proof of being unwanted. Many people find that keeping a short record of past turns they resented, and revisiting it a few years later, teaches this verse more convincingly than any amount of argument.",
            "bn": "পরে, হতাশা বয়ে বেড়ানোর ধরনটাও আয়াত বদলে দেয়। নাকচ হওয়া আবেদন, ফিরিয়ে দেওয়া বিয়ের প্রস্তাব, শেষমেশ না হওয়া চাকরি: এগুলোকে 'আমাকে কেউ চায় না'-র প্রমাণ না ভেবে এমন বন্ধ দরজা হিসেবে মনে রাখা যায়, যার কারণ এখনো জানা যায়নি। অনেকে দেখেছেন, অতীতের যেসব মোড়ে মনে ক্ষোভ জমেছিল, সেগুলোর একটা ছোট তালিকা লিখে রেখে কয়েক বছর পরে আবার পড়লে আয়াতটি যতটা গভীরভাবে বোঝা যায়, কোনো যুক্তিতর্কে ততটা যায় না।"
          }
        ]
      }
    ]
  },
  "2:222": {
    "sections": [
      {
        "h": {
          "en": "A Question Asked Openly",
          "bn": "খোলাখুলি করা প্রশ্ন"
        },
        "p": [
          {
            "en": "Surah al-Baqarah carries a run of questions the companions brought to the Prophet ﷺ, each introduced with the words: they ask you. They ask about what to spend in 2:215, about fighting in the sacred month in 2:217, about wine and gambling in 2:219, and here about menstruation. The Quran treats none of these as too awkward to answer. A matter of the body receives its reply in the same Book, in the same measured voice, as matters of war and wealth.",
            "bn": "সূরা বাকারায় পরপর কয়েকটি প্রশ্ন আছে, যা সাহাবীরা নবী ﷺ-এর কাছে নিয়ে এসেছিলেন। প্রতিটি শুরু হয় একই কথায়: তারা আপনাকে জিজ্ঞেস করে। ২:২১৫ আয়াতে প্রশ্ন কী খরচ করবে তা নিয়ে, ২:২১৭ আয়াতে পবিত্র মাসে যুদ্ধ নিয়ে, ২:২১৯ আয়াতে মদ ও জুয়া নিয়ে, আর এখানে হায়েয নিয়ে। কুরআন এর কোনোটিকেই এত বিব্রতকর মনে করেনি যে জবাব দেওয়া যায় না। শরীরের একটা বিষয়ের জবাবও এসেছে সেই একই কিতাবে, সেই একই সংযত সুরে, যেভাবে এসেছে যুদ্ধ আর সম্পদের প্রশ্নের জবাব।"
          },
          {
            "en": "The occasion is preserved by Muslim from Anas (RA). Among the Jews of Madinah, when a woman menstruated they would not eat with her nor stay with her in the house. The companions asked the Prophet ﷺ, this verse came down, and he said: do everything except intercourse. The revealed answer neither adopted the surrounding practice of exclusion nor erased all restraint. It drew one precise line and left the woman's place at the table, and in the home, exactly where it was.",
            "bn": "শানে নুযুলটি ইমাম মুসলিম আনাস (রাঃ) থেকে বর্ণনা করেছেন। মদীনার ইহুদিদের নিয়ম ছিল, কোনো নারীর হায়েয হলে তারা তার সঙ্গে খেত না, এক ঘরে থাকত না। সাহাবীরা নবী ﷺ-কে এ বিষয়ে জিজ্ঞেস করলেন, তখন এই আয়াত নাজিল হলো, আর তিনি বললেন: সহবাস ছাড়া সবকিছু করো। ওহির এই জবাব আশপাশের দূরে ঠেলে রাখার প্রথাও নেয়নি, আবার সব সংযমও তুলে দেয়নি। একটিমাত্র স্পষ্ট সীমা টেনে দিয়েছে, আর দস্তরখানে ও ঘরের ভেতরে নারীর জায়গা যেখানে ছিল, ঠিক সেখানেই রেখে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Harm, Not Shame",
          "bn": "কষ্ট, লজ্জা নয়"
        },
        "p": [
          {
            "en": "Asked what menstruation is, the verse answers with a single word: adha, a hurt. The word describes a condition, not a person. The verse does not call the woman impure, and it attaches no blame to a process she did not choose. The commentators observe that the instruction which follows rests on this word: because there is hurt, there is distance of one specific kind, and when the hurt passes, the distance passes with it. The logic of the ruling is protective, not punitive.",
            "bn": "হায়েয কী, এই প্রশ্নের জবাবে আয়াত একটিমাত্র শব্দ বলে: আযা, অর্থাৎ কষ্ট। শব্দটি একটা অবস্থার বর্ণনা, কোনো মানুষের নয়। আয়াত নারীকে অপবিত্র বলেনি, আর যা সে নিজে বেছে নেয়নি তার জন্য তাকে কোনো দোষও দেয়নি। মুফাসসিররা লক্ষ করেছেন, পরের নির্দেশটা দাঁড়িয়ে আছে এই শব্দের ওপরই: কষ্ট আছে বলেই একটা নির্দিষ্ট ধরনের দূরত্ব রাখতে হয়, আর কষ্ট চলে গেলে দূরত্বও চলে যায়। বিধানটির উদ্দেশ্য রক্ষা করা, শাস্তি দেওয়া নয়।"
          },
          {
            "en": "The command to keep away from women during menstruation could have been stretched wide. The Prophet's ﷺ own words in the report of Anas (RA) fixed its scope: everything except intercourse itself. Shared meals, affection and ordinary company all continue. The same narration records the Jews complaining that this man leaves nothing of their practice without differing from it — a measure of how deliberately the verse marked out its own path between exclusion on one side and no restraint at all on the other.",
            "bn": "হায়েযের সময় স্ত্রীদের থেকে দূরে থাকার আদেশটাকে টেনে অনেক বড় করে ফেলা যেত। কিন্তু আনাস (রাঃ)-এর বর্ণনায় নবী ﷺ নিজেই এর সীমা ঠিক করে দিয়েছেন: শুধু সহবাস ছাড়া সবকিছু। একসঙ্গে খাওয়া, আদর-ভালোবাসা, স্বাভাবিক মেলামেশা, সবই চলবে। একই বর্ণনায় আছে, ইহুদিরা অভিযোগ করেছিল, এই লোকটি আমাদের কোনো রীতিতেই আমাদের বিরোধিতা না করে ছাড়েন না। এ থেকে বোঝা যায়, একদিকে দূরে ঠেলে দেওয়া আর অন্যদিকে কোনো সংযমই না রাখা, এই দুইয়ের মাঝখান দিয়ে আয়াত কত ভেবেচিন্তে নিজের পথ এঁকেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Verbs of Purity",
          "bn": "পবিত্রতার দুটি ক্রিয়াপদ"
        },
        "p": [
          {
            "en": "The verse's timeline turns on two related verbs. Do not approach them, it says, hatta yathurna — until they become pure, the bleeding itself ending. Then: fa-idha tatahharna — when they have purified themselves, a verb form whose added letters signal a deliberate act a person performs. The wording pictures two stages, something that happens to a woman and something she then does, and only after both does the permission return, from where Allah has commanded you.",
            "bn": "আয়াতের সময়ের হিসাব ঘুরছে কাছাকাছি অর্থের দুটি ক্রিয়ার ওপর। আয়াত বলছে, তাদের কাছে যেয়ো না হাত্তা ইয়াতহুরনা, যতক্ষণ না তারা পবিত্র হয়, অর্থাৎ রক্তস্রাব নিজে থেকে বন্ধ হয়। তারপর: ফাইযা তাতাহহারনা, যখন তারা নিজেরা পবিত্র হয়ে নেয়। এই ক্রিয়ারূপে বাড়তি যে অক্ষরগুলো আছে, তা বোঝায় মানুষের নিজে ইচ্ছা করে করা কাজ। শব্দগুলো এভাবে দুটি ধাপ দেখায়: একটা নারীর ওপর ঘটে, আরেকটা সে নিজে করে। দুটো ধাপ পেরোলেই অনুমতি ফিরে আসে, যেদিক থেকে আল্লাহ তোমাদের আদেশ দিয়েছেন।"
          },
          {
            "en": "The mufassirun — at-Tabari, Ibn Kathir, al-Qurtubi — pause over how much guidance this one sentence carries while staying wholly free of coarseness. Everything intimate is said through modest indirection: keep away, do not approach, come to them. Al-Baqarah handles the nights of Ramadan in 2:187 with the same pairing of frankness about the subject and restraint in the wording. The Quran demonstrates that speech about the body can be perfectly clear without ever becoming crude.",
            "bn": "তাবারী, ইবনে কাসীর আর কুরতুবীর মতো মুফাসসিররা এখানে থেমে লক্ষ করেছেন, একটিমাত্র বাক্য কত দিকনির্দেশনা বহন করছে, অথচ কোথাও এতটুকু অশালীনতা নেই। ঘনিষ্ঠ সব কথা বলা হয়েছে শালীন ইঙ্গিতে: দূরে থাকো, কাছে যেয়ো না, তাদের কাছে যাও। রমজানের রাতের কথাও সূরা বাকারা ২:১৮৭ আয়াতে একইভাবে বলেছে: বিষয় নিয়ে খোলামেলা, শব্দে সংযত। কুরআন দেখিয়ে দেয়, শরীর নিয়ে কথা পুরোপুরি স্পষ্ট হতে পারে, কখনো স্থূল না হয়েও।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom Allah Loves",
          "bn": "আল্লাহ যাদের ভালোবাসেন"
        },
        "p": [
          {
            "en": "The closing sentence lifts the whole passage: indeed Allah loves at-tawwabin and loves al-mutatahhirin. At-tawwabin is an intensive form — not those who repented once, but those who keep returning. Al-mutatahhirin is a participle of deliberate effort — those who take purification upon themselves as a practice. A verse of bodily regulation thus ends with the love of Allah, joining the outward washing just legislated to the inward washing of tawbah, and naming both as qualities He loves.",
            "bn": "শেষ বাক্যটি পুরো অংশটিকে অনেক উঁচুতে তুলে নেয়: নিশ্চয়ই আল্লাহ ভালোবাসেন আত-তাওয়াবীনদের, আর ভালোবাসেন আল-মুতাতাহহিরীনদের। আত-তাওয়াবীন আধিক্য বোঝানো রূপ। এরা একবার তওবা করে থেমে যাওয়া লোক নয়, বারবার ফিরে আসা লোক। আল-মুতাতাহহিরীন শব্দে আছে সচেতন চেষ্টার ভাব: এরা পবিত্রতাকে নিজেদের অভ্যাস বানিয়ে নিয়েছে। শরীরের বিধান নিয়ে একটি আয়াত এভাবে শেষ হয় আল্লাহর ভালোবাসায়। সদ্য দেওয়া বাইরের ধোয়ার বিধানকে জুড়ে দেয় তওবার ভেতরের ধোয়ার সঙ্গে, আর দুটোকেই বলে তাঁর প্রিয় গুণ।"
          },
          {
            "en": "The pairing recurs elsewhere. Praising the people of a mosque founded upon taqwa, the Quran says in 9:108 that in it are men who love to purify themselves, and that Allah loves those who purify themselves. Purity in the Quran is never merely hygienic; it is a quality of the person that Allah Himself declares beloved. And tawbah is named first in our verse: before it praises the washing of the body, it praises the washing of the heart.",
            "bn": "এই জুটি অন্য জায়গাতেও আছে। তাকওয়ার ওপর প্রতিষ্ঠিত এক মসজিদের লোকদের প্রশংসা করে কুরআন ৯:১০৮ আয়াতে বলে, সেখানে এমন লোক আছে যারা পবিত্র থাকতে ভালোবাসে, আর আল্লাহ পবিত্রতা অর্জনকারীদের ভালোবাসেন। কুরআনে পবিত্রতা কখনো শুধু পরিচ্ছন্নতার ব্যাপার নয়। এটা মানুষের এমন এক গুণ, যাকে আল্লাহ নিজে প্রিয় বলে ঘোষণা করেছেন। আর আমাদের আয়াতে তওবার নাম এসেছে আগে: শরীর ধোয়ার প্রশংসার আগে আয়াত প্রশংসা করেছে অন্তর ধোয়ার।"
          }
        ]
      },
      {
        "h": {
          "en": "Dignity in the Ruling",
          "bn": "বিধানের ভেতরের মর্যাদা"
        },
        "p": [
          {
            "en": "Lived rightly, the verse protects women from two injustices at once. It forbids treating a menstruating woman as unfit company — the exclusion it was revealed to end — and it acknowledges the hurt of those days rather than pretending they are nothing. A household shaped by this verse neither banishes nor ignores; it adjusts one thing and honors everything else. The days a woman may find hardest each month are met, in this ruling, with consideration instead of stigma.",
            "bn": "ঠিকভাবে মেনে চললে আয়াতটি নারীকে একসঙ্গে দুটি অবিচার থেকে বাঁচায়। হায়েযের সময় নারীকে সঙ্গ দেওয়ার অযোগ্য ভাবা নিষেধ করে; এই দূরে ঠেলে রাখা বন্ধ করতেই আয়াতটি নাজিল হয়েছিল। আবার সেই দিনগুলোর কষ্টকে 'কিছুই না' বলে উড়িয়েও দেয় না, স্বীকার করে। এই আয়াতের আলোয় গড়া সংসার কাউকে দূরেও ঠেলে না, অবহেলাও করে না। একটা বিষয়ে সমঝে চলে, বাকি সবকিছুতে সম্মান রাখে। প্রতি মাসে যে দিনগুলো একজন নারীর কাছে সবচেয়ে কঠিন হতে পারে, এই বিধানে সেগুলোর জবাব কলঙ্ক নয়, সহমর্মিতা।"
          },
          {
            "en": "The verse also trains the asking of questions. The companions carried a delicate matter to revelation instead of settling it by the customs around them, and the answer corrected those customs. Whoever teaches this verse inherits both habits: to answer honest questions about the body without embarrassment, and to measure inherited practice against what Allah actually revealed rather than assuming the two must already agree.",
            "bn": "আয়াতটি প্রশ্ন করাও শেখায়। সাহাবীরা একটি নাজুক বিষয় আশপাশের প্রথা দিয়ে মিটিয়ে ফেলেননি, ওহির কাছে নিয়ে গেছেন, আর ওহির জবাব সেই প্রথাগুলোকেই শুধরে দিয়েছে। যিনি এই আয়াত শেখান, তিনি দুটো অভ্যাসেরই উত্তরাধিকারী হন। এক, শরীর নিয়ে আন্তরিক প্রশ্নের জবাব লজ্জা না পেয়ে দেওয়া। দুই, বাপ-দাদার কাছ থেকে পাওয়া প্রথাকে আল্লাহ আসলে যা নাজিল করেছেন তার সঙ্গে মিলিয়ে দেখা, দুটো আপনা থেকেই মিলে যাবে বলে ধরে না নেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying the Ending",
          "bn": "শেষ বাক্যটি সঙ্গে রাখা"
        },
        "p": [
          {
            "en": "The practical residue of the verse is its last line. Whoever performs wudu or ghusl is invited to intend by it the quality Allah loves, not a mechanical routine. And whoever falls, in any matter at all, is invited into the first word: the tawwab is precisely the one who has something to return from, again and again. The verse refuses despair as firmly as it refuses shamelessness — the beloved here are not the faultless, but the returning and the purifying.",
            "bn": "আয়াতের যে শিক্ষাটা হাতে-কলমে থেকে যায়, তা এর শেষ বাক্যে। যে ওযু বা গোসল করে, তাকে ডাকা হচ্ছে যেন সে এটাকে যন্ত্রের মতো রুটিন না বানিয়ে আল্লাহর প্রিয় গুণটির নিয়ত করে। আর যে-কেউ যেকোনো বিষয়ে পা হড়কায়, তাকে ডাকা হচ্ছে প্রথম শব্দটির দিকে: তাওয়াব তো সে-ই, যার বারবার ফিরে আসার মতো কিছু আছে। আয়াত নির্লজ্জতাকে যতটা দৃঢ়ভাবে ফিরিয়ে দেয়, হতাশাকেও ঠিক ততটাই। এখানে আল্লাহর প্রিয় তারা নয় যাদের কোনো ভুল নেই, বরং তারা, যারা বারবার ফিরে আসে আর নিজেকে পবিত্র করে।"
          }
        ]
      }
    ]
  },
  "2:229": {
    "sections": [
      {
        "h": {
          "en": "Law in the Hardest Room",
          "bn": "সবচেয়ে কঠিন ঘরে আইন"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and from 2:221 it gathers the law of marriage and its ending. 2:222-223 speak of intimacy, 2:224-225 of oaths, 2:226-227 of the husband who swears to stay away from his wife, and 2:228 of the waiting period of the divorced woman, her husband's right to take her back within it if they want reconciliation, and the reminder that women are owed the like of what is expected of them, according to what is reasonable. This verse follows directly and puts a limit on that right to take back.",
            "bn": "সূরা বাকারা মাদানি, আর ২:২২১ আয়াত থেকে সূরা একত্র করে বিয়ে ও বিয়ে ভাঙার বিধান। ২:২২২ ও ২:২২৩ আয়াত দাম্পত্যের ঘনিষ্ঠতা নিয়ে, ২:২২৪ ও ২:২২৫ আয়াত শপথ নিয়ে, ২:২২৬ ও ২:২২৭ আয়াত সেই স্বামীকে নিয়ে, যে স্ত্রীর কাছে না যাওয়ার কসম খায়। ২:২২৮ আয়াত বলে তালাকপ্রাপ্ত নারীর ইদ্দতের কথা, মীমাংসা চাইলে সে সময়ের মধ্যে স্বামীর তাকে ফিরিয়ে নেওয়ার অধিকারের কথা। আর মনে করিয়ে দেয়, ন্যায্য নিয়ম অনুযায়ী নারীদেরও তেমনই হক আছে, যেমন তাদের ওপর হক আছে। এই আয়াত ঠিক তার পরে এসে ফিরিয়ে নেওয়ার সেই অধিকারের একটা সীমা বেঁধে দেয়।"
          },
          {
            "en": "The verse after it, 2:230, completes the count: if he divorces her again, she is not lawful to him afterwards until she has married another husband. 2:231 then forbids keeping a wife in order to harm her, and 2:232 forbids preventing divorced women from remarrying their former husbands when both agree on fair terms. Ibn Kathir explains that this verse ended an earlier practice in which a man could divorce his wife and take her back again and again, without any limit, as long as she remained in her waiting period.",
            "bn": "এর পরের আয়াত, ২:২৩০, গণনাটা পূর্ণ করে: স্বামী যদি তাকে আবার তালাক দেয়, তাহলে অন্য স্বামীর সঙ্গে তার বিয়ে না হওয়া পর্যন্ত সে আর তার জন্য হালাল নয়। এরপর ২:২৩১ আয়াত ক্ষতি করার উদ্দেশ্যে স্ত্রীকে আটকে রাখা নিষেধ করে, আর ২:২৩২ আয়াত নিষেধ করে তালাকপ্রাপ্ত নারীদের আগের স্বামীর সঙ্গে আবার বিয়েতে বাধা দিতে, যখন দুজন ন্যায্যভাবে রাজি। ইবনে কাসীর ব্যাখ্যা করেন, এই আয়াত আগের একটা প্রথার অবসান ঘটিয়েছিল। সে প্রথায় স্ত্রী ইদ্দতের মধ্যে থাকা পর্যন্ত একজন পুরুষ তাকে বারবার তালাক দিয়ে আবার ফিরিয়ে নিতে পারত, কোনো সীমা ছাড়াই।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping, Releasing, and Limits",
          "bn": "রাখা, ছাড়া, আর সীমা"
        },
        "p": [
          {
            "en": "The verse opens with at-talaqu marratan, divorce is twice. Talaq, from the root t-l-q, carries the sense of release, of untying what was bound. Then two phrases stand side by side: imsakun bi-ma'ruf, keeping with what is right, and tasrihun bi-ihsan, releasing with good treatment. Ma'ruf is what is known and recognised as good; ihsan is doing a thing well and generously. Neither choice is left bare. The verse does not simply say keep her or release her. It says how each of the two must be done.",
            "bn": "আয়াত শুরু হয় আত-তালাকু মাররাতান দিয়ে, তালাক দুবার। তালাক শব্দের মূল তোয়া-লাম-কাফ, এর ভেতরে আছে ছেড়ে দেওয়া, বাঁধন খুলে দেওয়ার ভাব। তারপর পাশাপাশি দুটো কথা: ইমসাকুম বিমা'রুফ, ন্যায্যভাবে রেখে দেওয়া, আর তাসরীহুম বিইহসান, সদ্ব্যবহারের সঙ্গে বিদায় দেওয়া। মা'রুফ মানে যা ভালো বলে জানা ও স্বীকৃত, আর ইহসান মানে কাজটা সুন্দরভাবে, উদারভাবে করা। কোনো পথই খালি রাখা হয়নি। আয়াত কেবল বলেনি রাখো বা ছাড়ো। দুটোর প্রতিটা কীভাবে করতে হবে, সেটাও বলে দিয়েছে।"
          },
          {
            "en": "The phrase hudud Allah, the limits of Allah, occurs four times in this single verse. Hadd, from the root h-d-d, is a boundary, the line that separates one thing from another and keeps it from spilling into its neighbour. It is a striking word to repeat in the middle of a family breaking apart, when feelings run highest. The command attached to the limits here is fala ta'taduha, do not transgress them, while 2:187, at the end of the fasting rulings, said of the limits there fala taqrabuha, do not approach them.",
            "bn": "হুদুদুল্লাহ, আল্লাহর সীমা, কথাটা এই এক আয়াতেই এসেছে চারবার। হাদ্দ শব্দের মূল হা-দাল-দাল, অর্থ সীমানা, সেই রেখা যা এক জিনিসকে আরেক জিনিস থেকে আলাদা করে, পাশেরটার মধ্যে ঢুকে পড়তে দেয় না। একটা পরিবার যখন ভেঙে যাচ্ছে, আবেগ যখন সবচেয়ে চড়া, ঠিক তখন এই শব্দের বারবার ফিরে আসা লক্ষ করার মতো। এখানে সীমার সঙ্গে জুড়ে দেওয়া আদেশ হলো ফালা তা'তাদূহা, এগুলো লঙ্ঘন করো না। অথচ রোজার বিধানের শেষে ২:১৮৭ আয়াত সেখানকার সীমা নিয়ে বলেছিল ফালা তাকরাবূহা, এগুলোর কাছেও যেয়ো না।"
          },
          {
            "en": "Then the address shifts. It is not lawful for you, the husbands, to take anything of what you gave, unless both, husband and wife, fear that they cannot keep Allah's limits. Then: if you fear that the two will not keep them. The second you is no longer the husbands alone. Commentators read it as addressed to those in authority and to the people who mediate between the couple, and the Bengali translation in this app reflects that reading in its bracket, naming the arbiters of both sides.",
            "bn": "তারপর সম্বোধন বদলে যায়। তোমাদের জন্য, অর্থাৎ স্বামীদের জন্য, যা দিয়েছ তার কিছু ফিরিয়ে নেওয়া হালাল নয়, যদি না দুজন, স্বামী ও স্ত্রী, আশঙ্কা করে যে তারা আল্লাহর সীমা রক্ষা করতে পারবে না। তারপর আয়াত বলে: যদি তোমরা আশঙ্কা করো যে ওরা দুজন সীমা রক্ষা করবে না। এই দ্বিতীয় তোমরা আর কেবল স্বামীরা নয়। মুফাসসিররা একে পড়েছেন দায়িত্বশীল কর্তৃপক্ষ আর দুজনের মধ্যে মধ্যস্থতাকারীদের প্রতি সম্বোধন হিসেবে। এই অ্যাপের বাংলা অনুবাদও বন্ধনীতে উভয় পক্ষের শালিসদের নাম নিয়ে সেই পাঠই তুলে ধরেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Explain",
          "bn": "মুফাসসিরগণ যা ব্যাখ্যা করেছেন"
        },
        "p": [
          {
            "en": "Ibn Kathir explains keeping with what is right and releasing with good treatment this way: after one or two divorces the husband may take his wife back during her waiting period, intending to set things right and to treat her well, or he may leave her until the waiting period ends and let her go kindly, without wronging her of any of her rights and without harming her. On the verse's next clause he says a husband may not pressure his wife or make her life hard so that she gives back the dower and gifts to escape.",
            "bn": "ন্যায্যভাবে রেখে দেওয়া আর সদ্ব্যবহার করে ছেড়ে দেওয়া, এ দুটোর ব্যাখ্যায় ইবনে কাসীর বলেন: এক বা দুই তালাকের পর স্বামী ইদ্দতের মধ্যে স্ত্রীকে ফিরিয়ে নিতে পারে, যদি তার নিয়ত থাকে সম্পর্ক ঠিক করার আর স্ত্রীর সঙ্গে ভালো ব্যবহার করার। কিংবা ইদ্দত শেষ হওয়া পর্যন্ত তাকে ছেড়ে রেখে ভালোভাবে বিদায় দিতে পারে, তার কোনো হক না মেরে, তার কোনো ক্ষতি না করে। আয়াতের পরের অংশ নিয়ে তিনি বলেন, স্বামী স্ত্রীকে চাপ দিয়ে বা তার জীবন কঠিন করে তুলে এমন অবস্থায় ফেলতে পারে না, যাতে মুক্তি পেতে সে মোহর আর উপহার ফিরিয়ে দেয়।"
          },
          {
            "en": "He then ties the exception to a situation in which the wife has come to dislike living with her husband and fears she cannot fulfil his rights. In that case she may give back what she received in order to be released, and he may accept it. This release in return for a payment is known as khul'. Ibn Kathir's explanation stays close to the verse's own words, and he brings the report about the wife of Thabit ibn Qays (RA), given in the next section, as its example.",
            "bn": "এরপর তিনি বলেন, ব্যতিক্রমটি সেই অবস্থার জন্য, যখন স্বামীর সঙ্গে সংসার করা স্ত্রীর কাছে অপছন্দের হয়ে গেছে, আর সে আশঙ্কা করছে যে স্বামীর হক আদায় করতে পারবে না। তখন মুক্তি পেতে সে যা পেয়েছিল তা ফেরত দিতে পারে, আর স্বামী তা নিতে পারে। বিনিময় দিয়ে এভাবে মুক্তি পাওয়াকে বলে খুলা। ইবনে কাসীরের ব্যাখ্যা আয়াতের শব্দ থেকে বেশি দূরে যায় না। উদাহরণ হিসেবে তিনি আনেন সাবিত ইবনে কায়স (রাঃ)-এর স্ত্রীর ঘটনা, যা পরের অংশে আসছে।"
          },
          {
            "en": "Al-Qurtubi, whose commentary treats the legal side of the verse at length, records differences among the scholars over details this page does not settle: whether a husband may accept more than he originally gave, and whether khul' counts as one of the divorces or is a separation of another kind. Among the views recorded on the second question is one reported from Ibn Abbas (RA), that it is not counted as a divorce. Those questions belong with a qualified scholar. The verse's own stress falls on something every reader can act on: the limits.",
            "bn": "কুরতুবীর তাফসীরে আয়াতের ফিকহি দিক নিয়ে লম্বা আলোচনা আছে। তিনি কিছু খুঁটিনাটিতে আলেমদের মতভেদ উল্লেখ করেছেন, যার মীমাংসা এই লেখা করবে না। যেমন, স্বামী শুরুতে যা দিয়েছিল তার চেয়ে বেশি নিতে পারে কি না, আর খুলা তালাকগুলোর একটি বলে গণ্য হবে, নাকি এটি অন্য ধরনের বিচ্ছেদ। দ্বিতীয় প্রশ্নে যেসব মত এসেছে, তার একটি ইবনে আব্বাস (রাঃ) থেকে বর্ণিত: খুলা তালাক হিসেবে গণ্য হয় না। এসব প্রশ্নের জবাব যোগ্য আলেমের কাছ থেকে নিতে হবে। আয়াত নিজে জোর দিয়েছে এমন এক জিনিসে, যা প্রত্যেক পাঠক মেনে চলতে পারেন: আল্লাহর সীমা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Garden Returned",
          "bn": "ফেরত দেওয়া বাগান"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari records from Ibn Abbas (RA) that the wife of Thabit ibn Qays (RA) came to the Prophet ﷺ and said that she did not fault Thabit in his character or his religion, but that she disliked falling into kufr while in Islam, a word Ibn Hajar explains as possibly meaning ingratitude toward a husband. The Prophet ﷺ asked her whether she would give back his garden. She said yes, and the Prophet ﷺ told Thabit to accept the garden and divorce her once.",
            "bn": "ইমাম বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেছেন, সাবিত ইবনে কায়স (রাঃ)-এর স্ত্রী নবী ﷺ-এর কাছে এসে বললেন, সাবিতের চরিত্রে বা দ্বীনদারিতে তিনি কোনো দোষ দেখেন না, কিন্তু ইসলামে থেকে কুফরে পড়াকে তিনি অপছন্দ করেন। ইবনে হাজার এই কুফরের একটি সম্ভাব্য অর্থ বলেছেন স্বামীর প্রতি অকৃতজ্ঞতা। নবী ﷺ তাঁর কাছে জানতে চাইলেন, সাবিতের বাগানটি তিনি ফিরিয়ে দেবেন কি না। তিনি হ্যাঁ বললেন। তখন নবী ﷺ সাবিত (রাঃ)-কে বাগানটি গ্রহণ করে তাঁকে এক তালাক দিতে বললেন।"
          },
          {
            "en": "The report shows the verse's balance at work. The woman is not asked to invent a fault in her husband, and she does not; she speaks honestly about her own heart. Her husband does not lose what he gave to a marriage that she, not he, is asking to end, because the garden returns to him. In the narration the Prophet ﷺ lectures neither of them. He applies what the verse allows, in a single divorce, and both leave with their dignity. Al-Bukhari's narration does not name her, and this page follows it.",
            "bn": "এই হাদিসে আয়াতের ভারসাম্যটা হাতে-কলমে দেখা যায়। স্ত্রীকে স্বামীর কোনো দোষ বানিয়ে বলতে বলা হয়নি, তিনি তা বলেনওনি। তিনি সৎভাবে নিজের মনের কথাই বলেছেন। বিয়েটা শেষ করতে চাইছেন স্ত্রী, স্বামী নন। তাই স্বামী নিজের দেওয়া জিনিস হারান না, বাগান তাঁর কাছে ফিরে যায়। বর্ণনায় দেখা যায়, নবী ﷺ দুজনের কাউকেই উপদেশ শোনাতে বসেননি। আয়াত যা অনুমতি দেয়, এক তালাকের মাধ্যমে তিনি তা-ই কার্যকর করেছেন, আর দুজনেই মর্যাদা নিয়ে বিদায় নিয়েছেন। বুখারীর এই বর্ণনায় স্ত্রীর নাম নেই, তাই এই লেখাও তাঁর নাম নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on Repair and Parting",
          "bn": "মেরামত আর বিদায়ের আয়াত"
        },
        "p": [
          {
            "en": "2:231 repeats the verse's two choices and names what lies outside them: do not keep women, intending harm, to transgress against them, and do not take the verses of Allah in jest. 4:35 goes a step earlier, before any divorce is pronounced: if you fear a breach between the two, send an arbitrator from his people and an arbitrator from her people, and if they both desire reconciliation, Allah will bring it about. The Quran's first counsel to a failing marriage is repair.",
            "bn": "২:২৩১ আয়াত এই দুই পথের কথা আবার বলে, আর এর বাইরে কী পড়ে তা-ও স্পষ্ট করে দেয়: কষ্ট দেওয়ার উদ্দেশ্যে, বাড়াবাড়ি করার জন্য নারীদের আটকে রেখো না, আর আল্লাহর আয়াতকে ঠাট্টার বিষয় বানিয়ো না। ৪:৩৫ আয়াত আরও এক ধাপ আগের কথা বলে, তালাক দেওয়ার আগেরও: দুজনের মধ্যে ফাটল ধরার আশঙ্কা হলে স্বামীর পরিবার থেকে একজন আর স্ত্রীর পরিবার থেকে একজন সালিস পাঠাও। তারা দুজন মীমাংসা চাইলে আল্লাহ মিল ঘটিয়ে দেবেন। ভাঙতে বসা সংসারের জন্য কুরআনের প্রথম পরামর্শ হলো জোড়া লাগানো।"
          },
          {
            "en": "4:20-21 guard what this verse protects: if you want to replace one wife with another and have given one of them a great amount, take nothing back of it, for how could you take it after you have gone in unto each other and they have taken from you a solemn covenant? 65:1-2, in the surah named for divorce, return to the limits of Allah and to the same pair of choices, retaining on acceptable terms or parting on acceptable terms. And 4:130 promises that if the two separate, Allah will enrich each of them from His abundance.",
            "bn": "এই আয়াত যা রক্ষা করে, ৪:২০ ও ৪:২১ আয়াত তা পাহারা দেয়: এক স্ত্রীর জায়গায় আরেকজনকে আনতে চাইলে, আর তাদের কাউকে অনেক সম্পদ দিয়ে থাকলেও, তা থেকে কিছুই ফিরিয়ে নিয়ো না। কেমন করে তা নেবে, যখন তোমরা একে অন্যের সঙ্গে মিলিত হয়েছ আর তারা তোমাদের কাছ থেকে দৃঢ় অঙ্গীকার নিয়েছে? তালাক নামের সূরায় ৬৫:১ ও ৬৫:২ আয়াত আবার ফিরে আসে আল্লাহর সীমার কথায়, আর একই দুই পথে: ন্যায্যভাবে রেখে দেওয়া, নয়তো ন্যায্যভাবে আলাদা হওয়া। আর ৪:১৩০ আয়াত কথা দেয়, দুজন আলাদা হয়ে গেলে আল্লাহ নিজের প্রাচুর্য থেকে প্রত্যেককে অভাবমুক্ত করবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "When a Marriage Is Under Strain",
          "bn": "সংসারে যখন টানাপোড়েন"
        },
        "p": [
          {
            "en": "Most readers of this verse are not in the middle of a divorce, but many will stand near one, as a spouse, a parent, a sibling or a friend asked for advice. The verse asks each of them to keep the conversation inside two words. Is what is being proposed ma'ruf, right and recognisable as right? And if the marriage is ending, is it ending with ihsan? Threats over the children, withholding what is owed and public humiliation fall outside both words, whichever side begins them.",
            "bn": "এই আয়াতের বেশির ভাগ পাঠক নিজে তালাকের মাঝখানে নেই। তবে অনেকেই কারও না কারও তালাকের কাছাকাছি থাকবেন: স্বামী বা স্ত্রী হিসেবে, বাবা-মা বা ভাই-বোন হিসেবে, কিংবা এমন বন্ধু হিসেবে, যাঁর কাছে কেউ পরামর্শ চেয়েছে। আয়াত তাঁদের প্রত্যেককে বলে, আলাপটা দুটো শব্দের ভেতরে রাখুন। যা প্রস্তাব করা হচ্ছে, তা কি মা'রুফ, মানে ন্যায্য, আর সবার চোখেও ন্যায্য? আর সংসার যদি ভাঙতেই থাকে, তা কি ইহসানের সঙ্গে ভাঙছে? সন্তানদের নিয়ে হুমকি, প্রাপ্য আটকে রাখা, লোকের সামনে অপমান, এগুলো দুই শব্দেরই বাইরে, যে পক্ষই শুরু করুক।"
          },
          {
            "en": "For a couple under strain, these verses suggest an order. Bring in wise people from both families before any pronouncement, as 4:35 directs. If parting truly becomes the only road, learn its rulings from a qualified scholar rather than from anger or rumour, because the details are real and they carry consequences. And whatever is decided, protect the other person's dignity in speech afterwards. The verse calls whoever oversteps these limits a wrongdoer, and that word does not lapse once the parting is complete.",
            "bn": "টানাপোড়েনে থাকা দম্পতির জন্য এই আয়াতগুলো একটা ক্রম দেখায়। তালাকের কোনো কথা মুখে আনার আগে দুই পরিবারের বুঝদার মানুষদের ডাকুন, যেমনটা ৪:৩৫ আয়াত বলেছে। বিচ্ছেদই যদি সত্যিই একমাত্র পথ হয়ে দাঁড়ায়, তাহলে এর বিধান রাগের মাথায় বা লোকের মুখে শুনে নয়, যোগ্য আলেমের কাছ থেকে জানুন। কারণ এর খুঁটিনাটি হেলাফেলার নয়, প্রতিটির পরিণতি আছে। আর যে সিদ্ধান্তই হোক, পরে কথাবার্তায় অন্যজনের মর্যাদা রক্ষা করুন। যে এই সীমা পেরিয়ে যায়, আয়াত তাকে জালিম বলে, আর বিচ্ছেদ চুকে গেলেও সেই নাম মুছে যায় না।"
          },
          {
            "en": "For the wider community, the verse means that a woman who, fearing the marriage cannot be kept within Allah's limits, seeks release by returning what she received is using a provision the Quran itself sets out, and a man who releases a wife with good treatment is obeying a command, not admitting defeat. Neither should become the subject of gossip. Families who treat every divorce as a disgrace to be hidden at any price, and families who use it as a weapon, both step outside the two words this verse sets.",
            "bn": "বৃহত্তর সমাজের জন্য আয়াতের শিক্ষা এই: কোনো নারী যদি আশঙ্কা করেন যে এই সংসারে আল্লাহর সীমা রক্ষা হবে না, আর তাই যা পেয়েছিলেন তা ফেরত দিয়ে মুক্তি চান, তিনি কুরআনেরই রাখা একটি ব্যবস্থা কাজে লাগাচ্ছেন। আর যে পুরুষ সদ্ব্যবহারের সঙ্গে স্ত্রীকে বিদায় দেন, তিনি হার মানছেন না, হুকুম মানছেন। এঁদের কাউকে নিয়েই কানাকানি করা ঠিক নয়। কোনো পরিবার প্রতিটি তালাককে এমন লজ্জা ভাবে, যা যেকোনো মূল্যে লুকাতে হবে। আবার কোনো পরিবার তালাককে অস্ত্র বানায়। দুপক্ষই আয়াতের বেঁধে দেওয়া দুই শব্দের বাইরে চলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a for the Home",
          "bn": "ঘরের জন্য দোয়া"
        },
        "p": [
          {
            "en": "The verse is law rather than supplication, so the du'a here is drawn from elsewhere in the Quran. 25:74 records the prayer of the servants of the Most Merciful: our Lord, grant us from among our wives and offspring comfort to our eyes, and make us an example for the righteous. It is a prayer for a home that stays far from the hard room this verse enters, and it can be said by the married and the unmarried alike, as a request and as a reminder of what a home is for.",
            "bn": "আয়াতটি বিধান, দোয়া নয়। তাই এখানকার দোয়াটি নেওয়া হলো কুরআনের অন্য জায়গা থেকে। ২৫:৭৪ আয়াতে আছে রহমানের বান্দাদের দোয়া: হে আমাদের রব, আমাদের স্ত্রী ও সন্তানদের আমাদের চোখ জুড়ানোর উপলক্ষ বানিয়ে দিন, আর আমাদের মুত্তাকিদের জন্য আদর্শ বানিয়ে দিন। এ দোয়া এমন এক ঘরের জন্য, যে ঘর এই আয়াতে বলা কঠিন অবস্থা থেকে দূরে থাকে। বিবাহিত-অবিবাহিত সবাই এটা পড়তে পারেন: আল্লাহর কাছে চাওয়া হিসেবে, আর ঘর কীসের জন্য, সেই কথা মনে করিয়ে দেওয়া হিসেবেও।"
          },
          {
            "en": "For a marriage that is struggling or has already ended, a short supplication in the verse's own vocabulary, offered as such and not as a transmitted text: O Allah, if we stay together, let us stay with what is right; if we part, let us part with good treatment; keep us both within Your limits, and let neither of us be among the wrongdoers. After a parting, the promise of 4:130 can also be asked for: O Allah, enrich each of us from Your abundance.",
            "bn": "যে সংসার টানাপোড়েনে আছে, কিংবা ইতিমধ্যেই ভেঙে গেছে, তার জন্য আয়াতের নিজের শব্দ দিয়ে সাজানো ছোট একটি দোয়া। এটি হাদিসে বর্ণিত কোনো দোয়া নয়, সেভাবেই এটি পেশ করা হলো: হে আল্লাহ, আমরা একসঙ্গে থাকলে যেন ন্যায্যভাবে থাকি, আলাদা হলে যেন সদ্ব্যবহারের সঙ্গে আলাদা হই। আমাদের দুজনকেই আপনার সীমার ভেতরে রাখুন, আর আমাদের কাউকে জালিমদের দলে ফেলবেন না। বিচ্ছেদের পর ৪:১৩০ আয়াতের প্রতিশ্রুতিটাও চাওয়া যায়: হে আল্লাহ, নিজের প্রাচুর্য থেকে আমাদের প্রত্যেককে অভাবমুক্ত করুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Worth Keeping",
          "bn": "মনে রাখার মতো প্রশ্ন"
        },
        "p": [
          {
            "en": "In the relationships that test me most, do I ask what is ma'ruf, or only what I am permitted to do? If I have parted from someone, a spouse, a business partner or a friend, did I part with ihsan, and is there anything I still owe them, in words or in money? What have I given in the past that I would, in a moment of anger, want to take back?",
            "bn": "যে সম্পর্কগুলো আমাকে সবচেয়ে বেশি পরীক্ষায় ফেলে, সেখানে আমি কি জিজ্ঞেস করি কোনটা মা'রুফ, নাকি কেবল কতটুকু আমার জন্য জায়েজ? কারও সঙ্গে সম্পর্ক ভেঙে থাকলে, স্বামী বা স্ত্রী, ব্যবসার অংশীদার বা বন্ধু, আমি কি ইহসানের সঙ্গে বিদায় নিয়েছি? কথায় বা টাকায় তাদের কোনো পাওনা কি এখনো আমার কাছে রয়ে গেছে? অতীতে যা দিয়েছি, তার কোনটা রাগের মুহূর্তে ফিরিয়ে নিতে ইচ্ছে করবে?"
          },
          {
            "en": "When I advise a relative whose marriage is failing, do I push first toward repair, toward the limits of Allah, or toward winning? And when I hear about someone else's divorce, do my words about it stay within the limits this verse names four times, or do I add a wrong of my own to a story that was never mine to tell?",
            "bn": "যে আত্মীয়ের সংসার ভাঙতে বসেছে, তাকে পরামর্শ দেওয়ার সময় আমি আগে কোন দিকে নিয়ে যাই: জোড়া লাগানোর দিকে, আল্লাহর সীমার দিকে, নাকি জেতার দিকে? আর অন্য কারও তালাকের খবর শুনলে, সে নিয়ে আমার কথা কি সেই সীমার ভেতরে থাকে, যার কথা এই আয়াত চারবার বলেছে? নাকি যে গল্প বলার অধিকার আমার কখনো ছিল না, তাতে নিজের একটা জুলুম জুড়ে দিই?"
          }
        ]
      }
    ]
  },
  "2:238": {
    "sections": [
      {
        "h": {
          "en": "A Prayer Verse Among Family Laws",
          "bn": "পারিবারিক বিধানের মাঝে নামাজের আয়াত"
        },
        "p": [
          {
            "en": "The placement of this verse surprises every first-time reader. Surah al-Baqarah has been working through marriage and separation for many verses: 2:237 settles what a husband owes if he divorces before consummation with a dower already fixed. Then, without transition, comes a command about guarding the prayers. Then 2:239 continues on prayer, and only afterwards does the surah return to the rights of widows.",
            "bn": "প্রথমবার যিনিই পড়েন, এই আয়াতের জায়গাটা দেখে অবাক হন। সূরা আল-বাকারা তখন বহু আয়াত ধরে বিয়ে ও বিচ্ছেদের বিধান বলে চলেছে। ২:২৩৭ আয়াত ঠিক করে দেয়, মহর নির্ধারিত হওয়ার পর স্ত্রীকে স্পর্শ করার আগেই তালাক দিলে স্বামীকে কী দিতে হবে। এরপর কোনো ভূমিকা ছাড়াই আসে নামাজ হেফাজতের হুকুম। ২:২৩৯ আয়াতও নামাজের কথাই বলে, আর তারপর গিয়ে সূরাটি আবার বিধবাদের অধিকারের প্রসঙ্গে ফেরে।"
          },
          {
            "en": "The mufassirun read the placement as deliberate. A household coming apart is exactly the situation in which prayers are lost: the timings go, the mind is elsewhere, and the very worship that would steady a person is the first casualty of what is unsettling them. Dropping this command into the middle of the divorce rulings puts it where it is hardest to keep and most needed.",
            "bn": "মুফাসসিরগণ মনে করেন, আয়াতটি ভেবেচিন্তেই এখানে রাখা হয়েছে। সংসার যখন ভাঙতে থাকে, ঠিক তখনই নামাজ হারিয়ে যায়: ওয়াক্ত ছুটে যায়, মন পড়ে থাকে অন্য কোথাও। যে ইবাদত মানুষকে স্থির রাখত, অস্থিরতার প্রথম ধাক্কাটা লাগে সেখানেই। তালাকের বিধানের ঠিক মাঝখানে হুকুমটি রাখা মানে, যেখানে নামাজ ধরে রাখা সবচেয়ে কঠিন আর সবচেয়ে বেশি দরকার, ঠিক সেখানেই একে বসানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Guard Them, Not Merely Perform",
          "bn": "শুধু আদায় নয়, হেফাজত"
        },
        "p": [
          {
            "en": "The command is hafizu, from the root of hifz, keeping and protecting, in a form that carries sustained and effortful attention. The verse does not say pray the prayers; it says guard them. Something guarded has a value that can be lost and a threat that can take it. The commentators list what is being guarded: their appointed times, their conditions of purity, their pillars and postures, and the presence of heart within them.",
            "bn": "হুকুমটি হলো 'হাফিজূ'। এর মূল 'হিফজ', মানে রক্ষা করা, আগলে রাখা। শব্দের এই গঠনে আছে টানা ও কষ্টসাধ্য মনোযোগের অর্থ। আয়াত বলেনি, নামাজ পড়ো; বলেছে, নামাজের হেফাজত করো। যে জিনিস পাহারা দিতে হয়, সেটা দামি, হারিয়েও যেতে পারে, আর তা কেড়ে নেওয়ার মতো বিপদও থাকে। কী কী হেফাজত করতে হবে, মুফাসসিরগণ তার তালিকা দিয়েছেন: নির্ধারিত ওয়াক্ত, পবিত্রতার শর্ত, রুকন ও নামাজের ভঙ্গিগুলো, আর নামাজের ভেতর দিলের উপস্থিতি।"
          },
          {
            "en": "Times come first, because 4:103 calls the prayer a decree of specified times upon the believers. And the same root returns as a mark of the successful believer, in 23:9 and again in 70:34, where those who carefully maintain their prayers are named among the saved. In both places the description is not that they pray but that they keep guard over praying, which is a different and harder claim.",
            "bn": "প্রথমে ওয়াক্ত, কারণ ৪:১০৩ আয়াত বলছে, নামাজ মুমিনদের ওপর নির্ধারিত সময়ে ফরজ। একই মূল শব্দ সফল মুমিনের পরিচয় হিসেবেও এসেছে, ২৩:৯ আয়াতে, আবার ৭০:৩৪ আয়াতে। সেখানে যারা যত্ন করে নামাজের হেফাজত করে, তাদের নাম এসেছে নাজাতপ্রাপ্তদের মধ্যে। দুই জায়গাতেই বলা হয়নি যে তারা নামাজ পড়ে। বলা হয়েছে, তারা নামাজকে পাহারা দিয়ে রাখে। এটা আলাদা দাবি, আর আরও কঠিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Is the Middle Prayer",
          "bn": "মধ্যবর্তী সালাত কোনটি"
        },
        "p": [
          {
            "en": "Then one prayer is singled out: was-salat al-wusta, and the middle prayer. Which one is meant is a genuine and old disagreement. The view of the majority is that it is Asr, and it rests on the strongest evidence: Muslim narrates from Ali (RA) that on the day of the Trench the Prophet ﷺ said the enemy had kept them from the middle prayer, the prayer of Asr, and prayed against them.",
            "bn": "এরপর একটি নামাজকে আলাদা করে বলা হয়েছে: 'ওয়াস-সালাতুল উসতা', আর মধ্যবর্তী সালাত। কোনটি বোঝানো হয়েছে, তা নিয়ে সত্যিকারের ও পুরোনো মতভেদ আছে। অধিকাংশ আলেমের মতে এটি আসর, আর এ মতের দলিলই সবচেয়ে মজবুত: ইমাম মুসলিম আলী (রাঃ) থেকে বর্ণনা করেন, খন্দকের দিন নবী ﷺ বলেছিলেন, শত্রুরা আমাদের মধ্যবর্তী সালাত, অর্থাৎ আসরের সালাত থেকে আটকে রেখেছে। তারপর তিনি তাদের বিরুদ্ধে বদদোয়া করেন।"
          },
          {
            "en": "But it should be stated as the majority position and not as a settled fact, because respected early authorities held otherwise, some naming Fajr, others Zuhr, and other views besides. Some commentators suggest the wording was left short of naming the prayer outright so that a worshipper, unsure which one carries the extra emphasis, would guard all five with the same care. Whichever reading is taken, that is the practical result the verse produces.",
            "bn": "তবে একে অধিকাংশের মত হিসেবেই বলা উচিত, চূড়ান্ত মীমাংসা হিসেবে নয়। কারণ প্রথম যুগের সম্মানিত অনেকে ভিন্ন মত দিয়েছেন: কেউ বলেছেন ফজর, কেউ যোহর, এর বাইরেও মত আছে। কোনো কোনো মুফাসসির বলেন, নামাজটির নাম সরাসরি না বলার পেছনে হয়তো এই হিকমত: কোন নামাজের ওপর বাড়তি জোর, মুসল্লি তা নিশ্চিত জানেন না, তাই পাঁচ ওয়াক্তই সমান যত্নে হেফাজত করবেন। যে ব্যাখ্যাই নেওয়া হোক, বাস্তবে আয়াতের ফল এটাই দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Qanitin",
          "bn": "কানিতীন হয়ে দাঁড়ানো"
        },
        "p": [
          {
            "en": "The second half turns from the schedule to the state: and stand before Allah qanitin. Qunut in Arabic carries obedience joined to humility and stillness, the bearing of someone who has stopped arguing. It is a description of posture and of heart at once, and it rules out standing there while everything except the prayer runs through the mind.",
            "bn": "আয়াতের দ্বিতীয় ভাগ সময়ের কথা থেকে সরে আসে মনের অবস্থার দিকে: আর আল্লাহর সামনে কানিতীন হয়ে দাঁড়াও। আরবিতে কুনূত মানে আনুগত্য, সঙ্গে বিনয় আর স্থিরতা। তর্ক থামিয়ে দেওয়া মানুষের যে ভঙ্গি, সেটাই কুনূত। এতে দেহের ভঙ্গি আর দিলের অবস্থা দুটোই আছে। তাই নামাজে দাঁড়িয়ে আছি, অথচ মাথায় নামাজ ছাড়া দুনিয়ার সব কিছু ঘুরছে, কুনূত এমন দাঁড়ানোকে মেনে নেয় না।"
          },
          {
            "en": "Muslim narrates from Zayd ibn Arqam (RA) that the Companions used to speak to one another during the prayer, a man addressing his neighbour about his own affairs, until this clause was revealed and they were ordered to be silent and forbidden from speaking. The clause therefore has a history: it cleared the prayer of ordinary conversation. What it asks for now is the same clearing, one level further in, of the conversation still running inside the head.",
            "bn": "ইমাম মুসলিম যায়েদ ইবনে আরকাম (রাঃ) থেকে বর্ণনা করেন, সাহাবীগণ নামাজের মধ্যে একে অপরের সঙ্গে কথা বলতেন। কেউ পাশের জনকে নিজের কাজের কথা বলতেন। তারপর এই অংশটি নাজিল হয়, আর তাঁদের চুপ থাকতে আদেশ করা হয়, কথা বলতে নিষেধ করা হয়। তাই এই বাক্যের পেছনে একটা ইতিহাস আছে: এটি নামাজ থেকে সাধারণ কথাবার্তা সরিয়ে দিয়েছিল। আজ এটি সেই একই কাজ চায়, তবে আরও এক স্তর ভেতরে: মাথার ভেতরে যে কথাবার্তা এখনো চলতে থাকে, তা থামানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Dropped Even in Fear",
          "bn": "ভয়ের মধ্যেও বাদ পড়ে না"
        },
        "p": [
          {
            "en": "How seriously the guarding is meant becomes clear in 2:239, which follows at once: if you are in fear, then pray on foot or riding, and when you are secure, remember Allah as He taught you what you did not know. The form of the prayer bends as far as walking or on the back of an animal in the middle of danger. What it does not do is stop. A duty that survives that will survive a busy afternoon.",
            "bn": "হেফাজতের হুকুমটা কতটা গুরুতর, তা বোঝা যায় ঠিক পরের আয়াত ২:২৩৯ থেকে: যদি তোমরা ভয়ের মধ্যে থাক, তবে হেঁটে বা বাহনে চড়েই নামাজ পড়ো; আর যখন নিরাপদ হও, তখন আল্লাহকে স্মরণ করো, যেভাবে তিনি তোমাদের শিখিয়েছেন যা তোমরা জানতে না। বিপদের মাঝে নামাজের ধরন এতটাই নমনীয় হয় যে হেঁটে হেঁটে বা পশুর পিঠে বসেও পড়া যায়। কিন্তু নামাজ থেমে যায় না। যে ফরজ এমন অবস্থাতেও টিকে থাকে, ব্যস্ত একটা বিকেলেও তা টিকে থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "How Guarding Is Done",
          "bn": "হেফাজত কীভাবে হয়"
        },
        "p": [
          {
            "en": "Guarding is mostly done before the prayer rather than in it. Know the times rather than waiting to be told them; put the phone out of reach; arrive at the mat with a minute in hand instead of at the last legal moment. Then, standing, give the opening takbir the weight of a door closing behind you. 2:45 admits the difficulty plainly, calling prayer heavy except upon the humble, which is a promise that the heaviness lifts as the humility grows.",
            "bn": "হেফাজতের কাজটা বেশির ভাগ হয় নামাজের আগে, ভেতরে নয়। ওয়াক্তগুলো নিজেই জেনে রাখুন, কেউ মনে করিয়ে দেবে সেই অপেক্ষায় থাকবেন না। ফোনটা হাতের নাগালের বাইরে রাখুন। ওয়াক্তের একেবারে শেষ মুহূর্তে নয়, হাতে এক মিনিট রেখে জায়নামাজে পৌঁছান। তারপর দাঁড়িয়ে তাকবীরে তাহরীমা বলুন এমনভাবে, যেন পেছনে একটা দরজা বন্ধ হয়ে গেল। ২:৪৫ আয়াত কষ্টটা সোজাসুজি স্বীকার করে: বিনয়ীরা ছাড়া অন্য সবার জন্য নামাজ ভারী। এর মধ্যেই আছে প্রতিশ্রুতি: বিনয় যত বাড়ে, ভার তত হালকা হয়।"
          }
        ]
      }
    ]
  },
  "2:240-242": {
    "sections": [
      {
        "h": {
          "en": "The Last Word on the Household",
          "bn": "সংসারের বিধানের শেষ কথা"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and from 2:221 onward it has been laying down the law of the family: whom a believer may marry, oaths of abstention, divorce and its waiting periods, nursing, and the widow's term. The run is interrupted once, at 2:238-239, by the command to guard the prayers even in fear. Then the surah comes back to the household for three final verses. 2:240 speaks of the widow, 2:241 of the divorced woman, and 2:242 closes the whole section with a sentence about why Allah explains all of this.",
            "bn": "সূরা বাকারা মাদানি সূরা। ২:২২১ আয়াত থেকে এটি একটানা পরিবারের বিধান দিয়ে চলেছে: মুমিন কাকে বিয়ে করতে পারে, স্ত্রীর কাছে না যাওয়ার কসম, তালাক আর তার ইদ্দত, দুধ খাওয়ানো, বিধবার অপেক্ষার সময়। মাঝখানে ধারাটা একবারই থেমেছে, ২:২৩৮-২৩৯ আয়াতে, যেখানে ভয়ের মধ্যেও নামাজ হেফাজতের হুকুম এসেছে। তারপর শেষ তিনটি আয়াতের জন্য সূরা আবার সংসারে ফেরে। ২:২৪০ আয়াত বিধবাকে নিয়ে, ২:২৪১ আয়াত তালাকপ্রাপ্তা নারীকে নিয়ে। আর ২:২৪২ আয়াত পুরো অংশটা শেষ করে একটি বাক্যে: আল্লাহ কেন এসব এত খুলে বলেন।"
          },
          {
            "en": "No occasion of revelation is established for these verses, and the question they raise is one of placement. Six verses earlier, 2:234 fixed the widow's waiting period at four months and ten days. Here a full year appears. Most commentators hold that 2:240 was revealed first and its ruling later replaced, which means the verse that replaced it stands earlier in the mushaf than the verse it replaced. As-Sa'di points out that this is exactly what the majority view requires, since a replacing ruling must come later in revelation even when it comes earlier on the page.",
            "bn": "এই আয়াতগুলোর কোনো প্রতিষ্ঠিত শানে নুযুল নেই। প্রশ্নটা বরং এদের অবস্থান নিয়ে। ছয় আয়াত আগে ২:২৩৪ আয়াত বিধবার ইদ্দত চার মাস দশ দিন ঠিক করে দিয়েছে, অথচ এখানে দেখা যাচ্ছে পুরো এক বছর। অধিকাংশ মুফাসসিরের মত হলো, ২:২৪০ আয়াত আগে নাজিল হয়েছিল, পরে এর হুকুম বদলে গেছে। তার মানে যে আয়াত হুকুমটা বদলাল, মুসহাফে সেটি বসেছে আগে। আস-সা'দী লক্ষ করেছেন, অধিকাংশের মত মানলে ঠিক এটাই দাঁড়ায়। কারণ রহিতকারী হুকুমকে নাজিলের হিসাবে পরে আসতেই হবে, পাতায় সেটি আগে থাকলেও।"
          }
        ]
      },
      {
        "h": {
          "en": "Wasiyyah, Mata' and a Door Left Open",
          "bn": "ওসিয়ত, মাতা' আর খোলা দরজা"
        },
        "p": [
          {
            "en": "The verse calls what the dying husband owes a wasiyyah, from the root w-s-y, a charge laid on others to carry out after one is gone. The same noun appears in 2:180, where a bequest to parents and near relatives is prescribed as a duty upon the righteous. What this bequest secures is mata'an ila al-hawl. Mata' is provision, anything a person can use and benefit from. Al-hawl is the full year, from a root that speaks of change and passing: a year that has run its whole course.",
            "bn": "মৃত্যুপথযাত্রী স্বামীর এই দায়কে আয়াতটি বলছে ওসিয়ত। শব্দটির মূলে আছে এমন দায়িত্বের অর্থ, যা নিজে চলে যাওয়ার পর অন্যদের পালন করার জন্য রেখে যাওয়া হয়। একই শব্দ আছে ২:১৮০ আয়াতে, যেখানে বাবা-মা ও নিকটাত্মীয়দের জন্য ওসিয়তের নির্দেশ এসেছে মুত্তাকিদের কর্তব্য হিসেবে। এখানে ওসিয়ত যা নিশ্চিত করে তা হলো 'মাতা'আন ইলাল হাওল'। মাতা' মানে ভরণপোষণ, মানুষ যা কাজে লাগিয়ে উপকার পায়। আল-হাওল মানে পূর্ণ এক বছর। শব্দটির মূলে আছে বদল আর পেরিয়ে যাওয়ার অর্থ: এমন বছর, যা নিজের পুরো পথ পার করেছে।"
          },
          {
            "en": "Two phrases then set the widow's position with care. Ghayra ikhraj, without putting out: no heir may evict her. Fa-in kharajna, but if they go out: the same root now describes her own act instead of someone else's. Expulsion is forbidden, departure is permitted, and the difference between the two is simply whose decision it is. The verse adds that there is no blame on you for what they do with themselves, min ma'ruf, in a recognised and decent way. Her life after the death is hers to shape.",
            "bn": "এরপর দুটি শব্দবন্ধ বিধবার অবস্থান যত্ন করে ঠিক করে দেয়। 'গাইরা ইখরাজ', বের করে না দিয়ে: কোনো ওয়ারিশ তাঁকে উচ্ছেদ করতে পারবে না। 'ফা-ইন খারাজনা', তবে তাঁরা নিজেরা বেরিয়ে গেলে: একই ধাতু এবার অন্যের কাজ নয়, তাঁর নিজের কাজ বোঝায়। বের করে দেওয়া নিষেধ, নিজে চলে যাওয়া বৈধ। দুইয়ের তফাত শুধু এটুকু, সিদ্ধান্তটা কার। আয়াত আরও বলে, ভালো ও স্বীকৃত পথে তাঁরা নিজেদের ব্যাপারে যা করবেন তাতে তোমাদের কোনো গুনাহ নেই। স্বামীর মৃত্যুর পরের জীবন গড়ার ভার তাঁর নিজের হাতে।"
          },
          {
            "en": "The next verse repeats the key word. Wa lil-mutallaqati mata'un bil-ma'ruf: for divorced women too there is a provision, according to what is reasonable. Earlier, 2:236 had called such a gift a duty upon the muhsinin, the doers of good. 2:241 calls it a duty upon the muttaqin, those who fear Allah. The one word binds two women together. The one whose marriage ended at a grave and the one whose marriage ended with a pronouncement are both to be sent on their way with something in their hands.",
            "bn": "পরের আয়াতে মূল শব্দটাই আবার আসে। 'ওয়া লিল-মুতাল্লাকাতি মাতা'উন বিল-মা'রূফ': তালাকপ্রাপ্তা নারীদের জন্যও আছে ন্যায়সঙ্গত ভরণপোষণ। আগে ২:২৩৬ আয়াত এমন উপহারকে বলেছিল মুহসিনদের কর্তব্য, অর্থাৎ যারা সৎকর্ম করে। ২:২৪১ আয়াত একে বলছে মুত্তাকিদের কর্তব্য, যারা আল্লাহকে ভয় করে। মাতা' শব্দটি এই দুই নারীকে এক সুতোয় বাঁধে। একজনের বিয়ে শেষ হয়েছে কবরের পাশে, আরেকজনের তালাকের একটি উচ্চারণে। দুজনকেই বিদায় দিতে হবে খালি হাতে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Year, Replaced or Retained",
          "bn": "এক বছর: রহিত, না বহাল"
        },
        "p": [
          {
            "en": "Ibn Kathir reports that the majority of scholars held 2:240 to be abrogated by 2:234, and, citing Ibn Abi Hatim, he names among those who said so Mujahid, al-Hasan, Ikrimah, Qatadah and ad-Dahhak. Through Ali ibn Abi Talhah he cites Ibn Abbas (RA) explaining how it happened. A widow used to stay in her husband's house for a year with her maintenance provided. Then 2:234 set her term at four months and ten days, and 4:12 gave her a fixed share of the estate, so the bequest of maintenance was no longer needed.",
            "bn": "ইবনে কাসীর জানান, অধিকাংশ আলেমের মতে ২:২৩৪ আয়াত ২:২৪০ আয়াতকে রহিত করেছে। ইবনে আবি হাতিমের বরাতে যাঁরা এ কথা বলেছেন তাঁদের মধ্যে তিনি মুজাহিদ, আল-হাসান, ইকরিমা, কাতাদা ও দাহহাকের নাম নেন। আলী ইবনে আবি তালহার সূত্রে তিনি ইবনে আব্বাস (রাঃ)-এর ব্যাখ্যাও আনেন। আগে বিধবা এক বছর স্বামীর ঘরে থাকতেন, খরচও পেতেন। তারপর ২:২৩৪ আয়াত তাঁর ইদ্দত চার মাস দশ দিন করে দিল, আর ৪:১২ আয়াত সম্পত্তিতে তাঁর নির্দিষ্ট অংশ ঠিক করে দিল। ফলে ভরণপোষণের ওসিয়তের আর দরকার রইল না।"
          },
          {
            "en": "A second reading keeps the verse in force for another purpose, and Mujahid, though listed above with the abrogation view, held it too. Al-Bukhari records from him that the four months and ten days are the obligatory term, and that 2:240 added the rest of the year, seven months and twenty days, as a bequest in her favour: she could stay in the house or leave. As-Sa'di prefers a reading of this kind. For him 2:234 binds the widow to her term, while 2:240 is Allah's counsel to the husband's family to let her remain a full year, for her comfort and as kindness to the man they lost.",
            "bn": "দ্বিতীয় একটি ব্যাখ্যা আয়াতটিকে বহাল রাখে, তবে ভিন্ন উদ্দেশ্যে। ওপরে রহিত হওয়ার মতের আলেমদের মধ্যে মুজাহিদের নাম এলেও তিনি এই মতও পোষণ করতেন। ইমাম বুখারী তাঁর থেকে বর্ণনা করেছেন: চার মাস দশ দিন হলো বাধ্যতামূলক ইদ্দত, আর ২:২৪০ আয়াত বছরের বাকি সাত মাস বিশ দিন বিধবার পক্ষে ওসিয়ত হিসেবে যোগ করেছে। তিনি চাইলে ঘরে থেকে যেতে পারতেন, চাইলে চলে যেতে পারতেন। আস-সা'দী এ ধরনের ব্যাখ্যাকেই বেশি সঠিক মনে করেন। তাঁর মতে ২:২৩৪ আয়াত বিধবাকে ইদ্দতে বাঁধে। আর ২:২৪০ আয়াত স্বামীর পরিবারের প্রতি আল্লাহর উপদেশ: বিধবাকে পুরো এক বছর থাকতে দাও, তাঁর মনের সান্ত্বনার জন্য আর যে মানুষটিকে তোমরা হারালে তাঁর প্রতি সদ্ব্যবহার হিসেবে।"
          },
          {
            "en": "Ibn Kathir adds a further distinction. Those who say the inheritance verse removed the widow's right to housing can only mean the time beyond four months and ten days. Whether she keeps a right to stay in the marital home during the term itself is, he says, a separate question on which scholars disagreed. The disagreement is set down here as the commentators set it down. The ruling a family follows today is a matter for its scholars; what every reading shares is that a widow's first months are protected, not left to whoever inherits the house.",
            "bn": "ইবনে কাসীর আরেকটি পার্থক্য দেখান। যাঁরা বলেন উত্তরাধিকারের আয়াত বিধবার বাসস্থানের হক তুলে দিয়েছে, তাঁদের কথা খাটে কেবল চার মাস দশ দিনের পরের সময়ের বেলায়। ইদ্দতের ভেতরে স্বামীর ঘরে থাকার হক তাঁর থাকে কি না, সেটা তাঁর ভাষায় আলাদা প্রশ্ন, আর তাতে আলেমরা একমত হননি। মতভেদটা এখানে সেভাবেই রাখা হলো, যেভাবে মুফাসসিররা রেখে গেছেন। আজ কোনো পরিবার কোন মাসআলা মানবে, সেটা তাদের আলেমদের বিষয়। তবে সব ব্যাখ্যাই এক জায়গায় মেলে: বিধবার প্রথম মাসগুলো সুরক্ষিত, ঘরের নতুন মালিকের মর্জির ওপর ছেড়ে দেওয়া নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Uthman's Answer, Furay'ah's Question",
          "bn": "উসমান (রাঃ)-এর জবাব, ফুরাইআ (রাঃ)-এর প্রশ্ন"
        },
        "p": [
          {
            "en": "Al-Bukhari records that Abdullah ibn az-Zubayr (RA) put the obvious question to Uthman ibn Affan (RA). The verse about widows and a year's provision had been abrogated by the other verse, he said, so why was it written in? Uthman (RA) addressed him as son of my brother and told him that he would not move anything of the Quran from its place. Ibn Kathir explains the answer: the verses stand in the order revelation gave them, so Uthman left this one where he found it. A verse whose ruling was held to have changed was still revelation.",
            "bn": "ইমাম বুখারী বর্ণনা করেছেন, আবদুল্লাহ ইবনুয যুবাইর (রাঃ) উসমান ইবনে আফফান (রাঃ)-কে স্বাভাবিক প্রশ্নটাই করেছিলেন। বিধবা আর এক বছরের ভরণপোষণের আয়াতটি তো অন্য আয়াত দিয়ে রহিত হয়ে গেছে, তাহলে এটি লেখা হলো কেন? উসমান (রাঃ) তাঁকে ভাতিজা বলে সম্বোধন করে জানালেন, কুরআনের কোনো কিছুই তিনি তার জায়গা থেকে সরাবেন না। ইবনে কাসীর জবাবটির ব্যাখ্যা দেন: ওহি আয়াতগুলোকে যে ক্রমে রেখেছে সেই ক্রমেই তারা আছে, তাই উসমান (রাঃ) আয়াতটিকে যেখানে পেয়েছেন সেখানেই রেখেছেন। হুকুম বদলে গেছে বলে ধরা হলেও আয়াতটি ওহিই থেকে যায়।"
          },
          {
            "en": "Imam Malik records in al-Muwatta a report that Ibn Kathir brings into this discussion. Furay'ah bint Malik (RA), the sister of Abu Sa'id al-Khudri (RA), lost her husband when he went after slaves of his who had run away and they killed him. He had left her no house of his own and no maintenance, so she asked the Prophet ﷺ whether she might go back to her family. The Prophet ﷺ first said yes. Then he called her back, heard the story again, and told her to stay in her house until the term reached its end.",
            "bn": "ইমাম মালিক মুয়াত্তায় একটি বর্ণনা এনেছেন, যা ইবনে কাসীর এই আলোচনায় টেনে আনেন। আবু সাঈদ খুদরী (রাঃ)-এর বোন ফুরাইআ বিনতে মালিক (রাঃ)-এর স্বামী পালিয়ে যাওয়া নিজের কয়েকজন দাসের খোঁজে বেরিয়েছিলেন, আর তারা তাঁকে হত্যা করে। তিনি স্ত্রীর জন্য নিজের মালিকানার কোনো ঘর রেখে যাননি, খরচও রেখে যাননি। তাই ফুরাইআ (রাঃ) নবী ﷺ-কে জিজ্ঞেস করলেন, তিনি কি নিজের পরিবারের কাছে ফিরে যেতে পারেন। নবী ﷺ প্রথমে হ্যাঁ বললেন। তারপর তাঁকে ফিরিয়ে ডেকে ঘটনাটা আবার শুনলেন, আর বললেন ইদ্দত শেষ না হওয়া পর্যন্ত নিজের ঘরেই থাকতে।"
          },
          {
            "en": "She stayed there four months and ten days. Years later, during his caliphate, Uthman (RA) sent for her, asked her about it, and judged by what she told him. The two reports belong side by side. One shows a Companion refusing to move a verse even though he was told its ruling had been superseded. The other shows the Prophet ﷺ taking the trouble to call a grieving woman back so that she would not lose her place in her home during her term. The revelation is kept intact, and so is the widow.",
            "bn": "তিনি সেখানে চার মাস দশ দিন থাকলেন। বহু বছর পরে খিলাফতের সময় উসমান (রাঃ) তাঁকে ডেকে পাঠান, বিষয়টা জিজ্ঞেস করেন, আর তাঁর কথা অনুযায়ীই ফয়সালা দেন। দুটি বর্ণনা পাশাপাশি রাখার মতো। একটিতে দেখা যায়, হুকুম বদলে গেছে বলে শোনার পরও একজন সাহাবি আয়াতকে তার জায়গা থেকে নড়াতে রাজি নন। অন্যটিতে দেখা যায়, নবী ﷺ শোকার্ত এক নারীকে যত্ন করে ফিরিয়ে ডাকছেন, যাতে ইদ্দতের সময় ঘরে তাঁর জায়গাটা হারিয়ে না যায়। ওহিও অক্ষত থাকে, বিধবাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Hold the Same Line",
          "bn": "একই সুরের আয়াত"
        },
        "p": [
          {
            "en": "Start with 2:234, which fixes the widow's term at four months and ten days and ends with the same freedom that 2:240 gives her: once the term is over, there is no blame for what she decently does with herself. Then 4:12 gives her an inheritance of her own, a fourth of what her husband leaves if he has no child and an eighth if he has one. Whatever view one takes of the year's bequest, the Quran did not leave her dependent on the goodwill of the heirs.",
            "bn": "শুরু করুন ২:২৩৪ আয়াত দিয়ে। সেখানে বিধবার ইদ্দত চার মাস দশ দিন, আর শেষে সেই একই স্বাধীনতা, যা ২:২৪০ আয়াতও তাঁকে দেয়: মেয়াদ শেষ হলে ভালোভাবে নিজের ব্যাপারে তিনি যা করবেন তাতে কোনো গুনাহ নেই। এরপর ৪:১২ আয়াত তাঁকে নিজস্ব উত্তরাধিকার দেয়। স্বামীর সন্তান না থাকলে রেখে যাওয়া সম্পদের চার ভাগের এক ভাগ, সন্তান থাকলে আট ভাগের এক ভাগ। এক বছরের ওসিয়ত নিয়ে যে মতই নেওয়া হোক, কুরআন তাঁকে ওয়ারিশদের দয়ার ওপর ঝুলিয়ে রাখেনি।"
          },
          {
            "en": "2:180 is the nearest relative of the verse in wording: a bequest prescribed for parents and near relatives and called a duty upon the righteous, the very phrase with which 2:241 closes. 65:1 carries the same protective instinct into divorce, forbidding that divorced women be turned out of their houses during the waiting period. And 33:49, speaking of a marriage that ends before it is consummated, tells the husband to provide for her and to release her gracefully. Between them, 65:1 and 33:49 name a home, a provision and a gracious parting for a woman whose marriage has ended.",
            "bn": "শব্দের দিক থেকে এই আয়াতের সবচেয়ে কাছের আত্মীয় ২:১৮০ আয়াত: বাবা-মা ও নিকটাত্মীয়দের জন্য ওসিয়তের নির্দেশ, যাকে বলা হয়েছে মুত্তাকিদের কর্তব্য। ২:২৪১ আয়াতও ঠিক এই কথাটি দিয়েই শেষ হয়। ৬৫:১ আয়াত সুরক্ষার এই মনোভাব তালাকের ভেতরেও নিয়ে যায়: ইদ্দতের সময় তালাকপ্রাপ্তা স্ত্রীদের ঘর থেকে বের করে দিতে নিষেধ করে। আর ৩৩:৪৯ আয়াত, যেখানে দাম্পত্য শুরুর আগেই বিয়ে ভেঙে যায়, স্বামীকে বলে তাকে কিছু সামগ্রী দিতে আর সুন্দরভাবে বিদায় দিতে। ৬৫:১ ও ৩৩:৪৯ আয়াত মিলিয়ে পড়লে বিয়ে শেষ হয়ে যাওয়া নারীর জন্য ঘর, সামগ্রী আর সম্মানের বিদায়, এই তিনটিরই কথা পাওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "When a Family Changes Shape",
          "bn": "যখন পরিবারের চেহারা বদলে যায়"
        },
        "p": [
          {
            "en": "The days after a death are when widows are most easily wronged, often by people who mean no harm. Relatives begin dividing property, someone decides the house must be sold, someone else assumes she will move back to her parents. The verse asks those people to slow down. Before the estate is discussed, ask her where she wants to live and what she will need in the coming year. If you are the heir who holds the keys, the verse's own phrase is your instruction: no putting out.",
            "bn": "মৃত্যুর পরের দিনগুলোতেই বিধবার ওপর সবচেয়ে সহজে অবিচার হয়, অনেক সময় এমন লোকদের হাতে যাদের মনে কোনো খারাপ উদ্দেশ্য নেই। আত্মীয়রা সম্পত্তি ভাগের কথা তোলে, কেউ ঠিক করে ফেলে বাড়িটা বিক্রি হবে, কেউ ধরে নেয় তিনি বাবার বাড়ি ফিরে যাবেন। আয়াতটি এই মানুষগুলোকে একটু থামতে বলে। সম্পত্তির আলোচনা শুরুর আগে তাঁকে জিজ্ঞেস করুন, তিনি কোথায় থাকতে চান আর সামনের বছরটায় তাঁর কী লাগবে। ঘরের চাবি যদি আপনার হাতে থাকে, তাহলে আয়াতের শব্দটাই আপনার জন্য নির্দেশ: বের করে দেওয়া চলবে না।"
          },
          {
            "en": "The same verse guards her against the opposite mistake. Some families, out of loyalty to the one who died, expect a widow to stay in mourning indefinitely and treat any step she takes toward a new life as a betrayal. The Quran says there is no blame for what she decently does with herself, so honour her choice once the term is over. And when a marriage ends in divorce, give the provision of 2:241 even if the separation was bitter. It is named a duty upon the muttaqin, and bitterness is exactly what tempts people to skip it.",
            "bn": "একই আয়াত তাঁকে উল্টো ভুল থেকেও রক্ষা করে। কোনো কোনো পরিবার মৃত মানুষটির প্রতি আনুগত্যের নামে আশা করে, বিধবা অনির্দিষ্টকাল শোকেই থাকবেন। নতুন জীবনের দিকে তাঁর যেকোনো পদক্ষেপকে তারা বিশ্বাসঘাতকতা ভাবে। কুরআন বলছে, ভালোভাবে নিজের ব্যাপারে তিনি যা করবেন তাতে কোনো গুনাহ নেই। তাই ইদ্দত শেষ হলে তাঁর সিদ্ধান্তকে সম্মান করুন। আর বিয়ে যদি তালাকে শেষ হয়, বিচ্ছেদ তিক্ত হলেও ২:২৪১ আয়াতের ভরণপোষণটুকু দিন। একে মুত্তাকিদের কর্তব্য বলা হয়েছে, আর তিক্ততাই মানুষকে এটা এড়িয়ে যেতে প্রলুব্ধ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Widow's Du'a",
          "bn": "এক বিধবার দোয়া"
        },
        "p": [
          {
            "en": "Muslim records from Umm Salamah (RA) that she heard the Prophet ﷺ say that when a Muslim struck by a calamity says what Allah has commanded, \"We belong to Allah and to Him we return. O Allah, reward me in my affliction and give me in exchange something better than it,\" Allah gives him something better in exchange. When her husband Abu Salamah (RA) died, she wondered which of the Muslims could be better than him. Then she said the words, and Allah gave her the Messenger of Allah ﷺ in his place.",
            "bn": "ইমাম মুসলিম উম্মে সালামা (রাঃ) থেকে বর্ণনা করেছেন, তিনি নবী ﷺ-কে বলতে শুনেছেন: কোনো মুসলিম বিপদে পড়ে যদি আল্লাহর নির্দেশিত কথাটি বলে, \"আমরা আল্লাহরই এবং তাঁর দিকেই ফিরে যাব। হে আল্লাহ, আমার এই বিপদে আমাকে প্রতিদান দিন, আর এর বদলে আমাকে এর চেয়ে উত্তম কিছু দিন\", তাহলে আল্লাহ তাকে এর চেয়ে উত্তম কিছু দেন। স্বামী আবু সালামা (রাঃ) মারা গেলে তিনি ভাবলেন, মুসলিমদের মধ্যে আবু সালামার চেয়ে উত্তম আর কে হতে পারে? তবু তিনি কথাগুলো বললেন, আর আল্লাহ তাঁকে তাঁর বদলে দিলেন আল্লাহর রাসূল ﷺ-কে।"
          },
          {
            "en": "Beside it stands a short supplication in the vocabulary of these verses, composed for this article and not a transmitted du'a: O Allah, al-'Aziz, al-Hakim, make us a household that never puts out those whom death has left behind; give us the taqwa that keeps us kind when a marriage ends; and make Your verses clear to us, as You said You would, so that we understand them. The final request is 2:242 turned into a prayer, and a reader who has worked through these rulings has good reason to end on it.",
            "bn": "এর পাশে রইল এই আয়াতগুলোর শব্দ দিয়ে সাজানো ছোট একটি দোয়া। এটি বর্ণিত কোনো দোয়া নয়, এই লেখার জন্যই গাঁথা: হে আল্লাহ, হে আল-আযীয, হে আল-হাকীম, আমাদের এমন পরিবার বানিয়ে দিন, যারা কারও মৃত্যুর পর তার রেখে যাওয়া মানুষদের কখনো ঘর থেকে বের করে দেয় না। আমাদের সেই তাকওয়া দিন, যা বিয়ে ভেঙে গেলেও আমাদের সদয় রাখে। আর আপনার কথামতো আপনার আয়াতগুলো আমাদের কাছে স্পষ্ট করে দিন, যাতে আমরা বুঝতে পারি। শেষ আবেদনটি ২:২৪২ আয়াতকেই দোয়ায় রূপ দেয়। এই বিধানগুলো পড়ে আসা পাঠকের জন্য এখানে শেষ করাটাই মানানসই।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for the Household",
          "bn": "ঘরের জন্য কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "Is there a widow in my family, or a divorced woman, whom nobody has actually asked about her needs for the coming year? When property is divided after a death, do I speak up for the person with the least power in the room, or do I wait for someone else to do it? If I have been through a divorce myself, did I part with the provision and the grace that these verses ask for, or did I let anger keep what was owed in my hand?",
            "bn": "আমার পরিবারে কি এমন কোনো বিধবা বা তালাকপ্রাপ্তা নারী আছেন, সামনের বছরটায় যাঁর কী দরকার, কেউ আসলে তাঁকে জিজ্ঞেস করেনি? মৃত্যুর পর সম্পত্তি ভাগের সময় ঘরের সবচেয়ে দুর্বল মানুষটির পক্ষে কি আমি কথা বলি, নাকি অপেক্ষা করি কখন অন্য কেউ বলবে? নিজে যদি তালাকের ভেতর দিয়ে গিয়ে থাকি, তাহলে এই আয়াতগুলো যে ভরণপোষণ আর সৌজন্য চায়, তা দিয়ে কি বিদায় নিয়েছি? নাকি রাগের বশে পাওনাটা নিজের হাতেই আটকে রেখেছি?"
          },
          {
            "en": "Do I respect the choices of someone who is grieving, or do I decide on their behalf what loyalty to the dead requires of them? And when I meet a ruling in the Quran whose details the scholars have discussed at length, do I stop at knowing that it was debated, or do I go on to ask, as 2:242 invites me to, what Allah is teaching me to understand about people through it?",
            "bn": "শোকে থাকা মানুষের সিদ্ধান্তকে কি আমি সম্মান করি, নাকি মৃত মানুষটির প্রতি আনুগত্য তার কাছে কী দাবি করে, তা আমিই তার হয়ে ঠিক করে দিই? আর কুরআনের এমন কোনো হুকুম, যার খুঁটিনাটি নিয়ে আলেমরা দীর্ঘ আলোচনা করেছেন, তার সামনে এসে কি আমি শুধু এটুকু জেনেই থেমে যাই যে এ নিয়ে মতভেদ আছে? নাকি ২:২৪২ আয়াতের ডাকে সাড়া দিয়ে আরও জিজ্ঞেস করি, এর মধ্য দিয়ে আল্লাহ মানুষ সম্পর্কে আমাকে কী বুঝতে শেখাচ্ছেন?"
          }
        ]
      }
    ]
  },
  "2:249-251": {
    "sections": [
      {
        "h": {
          "en": "A Story Told to Madinah",
          "bn": "মদিনাকে শোনানো এক কাহিনি"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and after its long section on family law it turns toward fighting and sacrifice. 2:243 recalls people who left their homes in thousands fearing death, 2:244 commands fighting in the way of Allah, and 2:245 asks who will lend Allah a goodly loan. Then 2:246 opens a story. The chiefs of the Children of Israel after Musa (AS) asked a prophet of theirs for a king so that they could fight, and when fighting was prescribed for them they turned away, all but a few.",
            "bn": "সূরা বাকারা মাদানি সূরা। পরিবারের দীর্ঘ বিধানের পর সূরাটি লড়াই আর ত্যাগের দিকে মোড় নেয়। ২:২৪৩ আয়াত মনে করিয়ে দেয় সেই লোকদের কথা, যারা মৃত্যুর ভয়ে হাজারে হাজারে ঘর ছেড়েছিল। ২:২৪৪ আয়াত আল্লাহর পথে লড়াইয়ের হুকুম দেয়, আর ২:২৪৫ আয়াত জিজ্ঞেস করে, কে আল্লাহকে উত্তম ঋণ দেবে। তারপর ২:২৪৬ আয়াত একটি কাহিনি শুরু করে। মূসা (আঃ)-এর পরে বনী ইসরাঈলের নেতারা তাদের এক নবীর কাছে একজন বাদশাহ চাইল, যাতে তারা লড়াই করতে পারে। অথচ লড়াই যখন ফরজ হলো, অল্প কজন ছাড়া সবাই মুখ ফিরিয়ে নিল।"
          },
          {
            "en": "2:247 names Talut as the king Allah chose, and 2:248 gives the sign of the chest carried by the angels. Our passage is the march itself: the river, the crossing, the du'a on open ground, and the victory. As-Sa'di says Allah told this story so that the believers would draw its lessons and not hold back from jihad. 2:252 then turns to the Prophet ﷺ: these are the verses of Allah which We recite to you in truth, and you are one of the messengers. No separate occasion of revelation is reported.",
            "bn": "২:২৪৭ আয়াতে আল্লাহ তালূতকে বাদশাহ হিসেবে বেছে নেন। ২:২৪৮ আয়াত নিদর্শন হিসেবে জানায় ফেরেশতাদের বয়ে আনা সিন্দুকের কথা। আমাদের অংশটি খোদ অভিযানের: নদী, নদী পার হওয়া, খোলা ময়দানে দোয়া, আর বিজয়। আস-সা'দী বলেন, আল্লাহ এই কাহিনি শুনিয়েছেন যাতে মুমিনরা এর শিক্ষা নেয় এবং জিহাদ থেকে পিছিয়ে না থাকে। এরপর ২:২৫২ আয়াত নবী ﷺ-এর দিকে ফেরে: এগুলো আল্লাহর আয়াত, যা আমি সত্যসহ তোমাকে পড়ে শোনাই, আর তুমি অবশ্যই রাসূলদের একজন। আলাদা কোনো শানে নুযুল বর্ণিত নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The River Before the Battle",
          "bn": "যুদ্ধের আগে নদী"
        },
        "p": [
          {
            "en": "When Talut set out with the soldiers, he told them that Allah would test them with a river. Whoever drank from it was not of him, except one who scooped up a single handful, and whoever did not taste it was of him. The test was not really about water. As-Sa'di explains that Talut sensed the weakness in their resolve and needed to separate those who would endure from those who would slip away, and the thirst of the march was exactly the pressure that would show the difference.",
            "bn": "তালূত সৈন্যদের নিয়ে রওনা হয়ে বললেন, আল্লাহ একটি নদী দিয়ে তোমাদের পরীক্ষা করবেন। যে তা থেকে পান করবে সে আমার দলের নয়। আর যে তার স্বাদ নেবে না সে আমার দলের, তবে কেউ হাতে এক আঁজলা তুলে নিলে সে-ও। পরীক্ষাটা আসলে পানি নিয়ে ছিল না। আস-সা'দী ব্যাখ্যা করেন, তালূত তাদের সংকল্পের দুর্বলতা টের পেয়েছিলেন। কারা টিকে থাকবে আর কারা সরে পড়বে, তাদের আলাদা করা দরকার ছিল। অভিযানের পথের তৃষ্ণাই ছিল সেই চাপ, যা তফাতটা স্পষ্ট করে দেবে।"
          },
          {
            "en": "They drank from it, except a few of them. Then, when Talut had crossed it together with those who believed with him, some said: we have no strength today against Jalut and his soldiers. As-Sa'di allows two readings of who spoke. They may have been those who had already fallen away, excusing themselves, or some of those who had crossed, whose hearts faltered at the sight of the enemy. Either way, an answer came from within the ranks, and the whole passage turns on it.",
            "bn": "অল্প কজন ছাড়া সবাই পান করল। তারপর তালূত ও তাঁর সঙ্গে ঈমান আনা লোকেরা যখন নদী পার হলেন, কেউ কেউ বলল: আজ জালূত ও তার সৈন্যদের মোকাবেলার শক্তি আমাদের নেই। কথাটা কারা বলেছিল, সে ব্যাপারে আস-সা'দী দুটি সম্ভাবনা রাখেন। হতে পারে তারা আগেই দল ছেড়ে যাওয়া লোক, যারা নিজেদের সাফাই গাইছিল। আবার হতে পারে নদী পার হওয়াদেরই কেউ কেউ, শত্রু দেখে যাদের মন দমে গিয়েছিল। যেভাবেই হোক, জবাব এল দলের ভেতর থেকেই, আর গোটা অংশটা ঘোরে সেই জবাবকে ঘিরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Certainty, Open Ground, a Vessel Emptied",
          "bn": "নিশ্চিত বিশ্বাস, খোলা ময়দান, উপুড় করা পাত্র"
        },
        "p": [
          {
            "en": "The answer came from alladhina yazunnuna annahum mulaqu Allah, those who were sure that they would meet Allah. The verb zann often means to suppose, and some translations keep that sense in this verse. But at 2:46 the commentators, at-Tabari among them, take it as certainty, and in their reading it carries that sense here too. Their words were kam min fi'atin qalilatin ghalabat fi'atan kathiratan bi-idhni Allah. Kam is not a question but an exclamation of how many: how many a small company has overcome a large company by Allah's permission. They were not predicting from their numbers. They were reading history as a pattern of His permission.",
            "bn": "জবাবটা দিয়েছিল 'আল্লাযীনা ইয়াযুন্নূনা আন্নাহুম মুলাকুল্লাহ', যারা নিশ্চিত ছিল যে আল্লাহর সঙ্গে তাদের সাক্ষাৎ হবে। 'যান্ন' শব্দ প্রায়ই ধারণা বোঝায়, আর কোনো কোনো অনুবাদে এই আয়াতে 'ধারণা' শব্দটিই রাখা হয়েছে। কিন্তু ২:৪৬ আয়াতে তাবারীসহ মুফাসসিররা একে নিশ্চিত বিশ্বাস অর্থে নিয়েছেন, আর তাঁদের ব্যাখ্যায় এখানেও অর্থটা তা-ই। তাদের কথা ছিল: 'কাম মিন ফিআতিন কালীলাতিন গালাবাত ফিআতান কাসীরাতান বি-ইযনিল্লাহ'। এখানে 'কাম' প্রশ্ন নয়, বিস্ময়ের সঙ্গে আধিক্য বোঝায়: আল্লাহর অনুমতিতে কত ছোট দল কত বড় দলকে হারিয়ে দিয়েছে! তারা নিজেদের সংখ্যা দেখে ভবিষ্যদ্বাণী করছিল না। তারা ইতিহাসকে পড়ছিল আল্লাহর অনুমতির ধারাবাহিক রীতি হিসেবে।"
          },
          {
            "en": "2:250 begins wa lamma barazu li-Jaluta wa junudih. Baraza is to come out into the open, and al-baraz is open, level ground with nowhere to hide. Nothing stood between them and the enemy any more. At that moment they said: Rabbana afrigh 'alayna sabran. Ifragh is to empty a vessel out over something, pouring until nothing is held back, so the picture is of patience poured out in full rather than handed over in a measure. Ibn Kathir glosses it simply: send down patience upon us from You.",
            "bn": "২:২৫০ আয়াত শুরু হয় 'ওয়া লাম্মা বারাযূ লি-জালূতা ওয়া জুনূদিহ' দিয়ে। 'বারাযা' মানে খোলা জায়গায় বেরিয়ে আসা, আর 'আল-বারায' হলো এমন খোলা সমতল ভূমি, যেখানে লুকানোর জায়গা নেই। শত্রু আর তাদের মাঝে তখন কোনো আড়াল ছিল না। ঠিক সেই মুহূর্তে তারা বলল: 'রাব্বানা আফরিগ আলাইনা সাবরা'। 'ইফরাগ' মানে পাত্র উপুড় করে কোনো কিছুর ওপর ঢেলে দেওয়া, কিছুই আটকে না রেখে। তাই ছবিটা মেপে মেপে দেওয়া ধৈর্যের নয়, পুরোটা ঢেলে দেওয়া ধৈর্যের। ইবনে কাসীর সরল ব্যাখ্যা দেন: আপনার পক্ষ থেকে আমাদের ওপর ধৈর্য নাজিল করুন।"
          },
          {
            "en": "The du'a makes three requests, and all three are imperatives addressed to Allah: afrigh, pour; thabbit, make firm; unsurna, give us victory. Their order runs from the inside outward. Patience is in the heart, firmness is in the feet, and victory is on the field, so the request that lies wholly in the enemy's view comes last. Then 2:251 answers in the language of 2:249: fa-hazamuhum bi-idhni Allah, so they defeated them by the permission of Allah. The phrase the certain ones spoke before the battle is the phrase in which the Quran reports its end.",
            "bn": "দোয়াটিতে তিনটি আবেদন, আর তিনটিই আল্লাহর কাছে আদেশবাচক ক্রিয়ায় চাওয়া: 'আফরিগ' ঢেলে দিন, 'সাব্বিত' অটল করুন, 'উনসুরনা' আমাদের বিজয় দিন। ক্রমটা ভেতর থেকে বাইরের দিকে যায়। ধৈর্য থাকে অন্তরে, অটলতা পায়ে, বিজয় ময়দানে। তাই যে চাওয়াটা পুরোপুরি শত্রুর চোখের সামনে, সেটা আসে সবার শেষে। তারপর ২:২৫১ আয়াত জবাব দেয় ২:২৪৯ আয়াতের ভাষাতেই: 'ফাহাযামূহুম বি-ইযনিল্লাহ', অতঃপর তারা আল্লাহর অনুমতিতে তাদের পরাজিত করল। যুদ্ধের আগে নিশ্চিত বিশ্বাসীরা যে শব্দ উচ্চারণ করেছিল, কুরআন যুদ্ধের পরিণতিও জানায় সেই শব্দেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Victory Comes From",
          "bn": "বিজয় আসে কোথা থেকে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the exchange after the river as a lesson in where victory comes from. Those who crossed saw how few they were beside a numerous enemy, and their people of knowledge strengthened their resolve, reminding them that Allah's promise is true and that victory is from Him, not from numbers or equipment. He explains firm feet as steadiness against the enemy, being kept from flight and from feebleness. And beside 2:251 he places 22:40: were it not that Allah checks some people by means of others, monasteries, churches, synagogues and mosques would have been demolished.",
            "bn": "নদী পারের পরের কথোপকথনকে ইবনে কাসীর পড়েন বিজয় কোথা থেকে আসে তার শিক্ষা হিসেবে। যারা পার হয়েছিল তারা বিশাল শত্রুর পাশে নিজেদের অল্প সংখ্যা দেখল। তখন তাদের আলেমরা তাদের মনোবল শক্ত করলেন, মনে করিয়ে দিলেন যে আল্লাহর ওয়াদা সত্য, আর বিজয় আসে তাঁর কাছ থেকে, সংখ্যা বা অস্ত্রশস্ত্র থেকে নয়। অটল পায়ের অর্থ তিনি বলেন শত্রুর সামনে দৃঢ় থাকা, পালানো আর দুর্বলতা থেকে রক্ষা পাওয়া। আর ২:২৫১ আয়াতের পাশে তিনি রাখেন ২২:৪০ আয়াত: আল্লাহ যদি মানুষের একদলকে দিয়ে আরেক দলকে প্রতিহত না করতেন, তাহলে আশ্রম, গির্জা, ইহুদিদের উপাসনালয় আর মসজিদ ধ্বংস হয়ে যেত।"
          },
          {
            "en": "As-Sa'di draws out the close of 2:251. Allah made Dawud (AS) a prophet and gave him kingship, wisdom and beneficial knowledge, and the verse then states the benefit of striving: without this checking, the disbelieving and the corrupt would dominate the earth and it would fall into ruin, but Allah is gracious to His servants in protecting the believers through His law and His decree. On what al-hikmah means here, Ibn Kathir takes it as the prophethood that came to Dawud (AS), with the kingdom that had been Talut's passing to him as well.",
            "bn": "আস-সা'দী ২:২৫১ আয়াতের শেষাংশ খুলে বলেন। আল্লাহ দাউদ (আঃ)-কে নবী বানালেন, তাঁকে রাজত্ব, হিকমত আর উপকারী জ্ঞান দিলেন। এরপর আয়াতটি জিহাদের উপকারিতা জানায়: এই প্রতিরোধ না থাকলে কাফির আর ফাসাদকারীরা পৃথিবী দখল করে নিত, আর পৃথিবী বিপর্যস্ত হয়ে যেত। কিন্তু আল্লাহ তাঁর বিধান ও তাকদিরের মাধ্যমে মুমিনদের রক্ষা করে বান্দাদের প্রতি অনুগ্রহ করেন। এখানে 'আল-হিকমাহ' বলতে কী বোঝানো হয়েছে, সে ব্যাপারে ইবনে কাসীর বলেন, এটি দাউদ (আঃ)-কে দেওয়া নবুয়ত, আর সেই সঙ্গে তালূতের রাজত্বও তাঁর হাতে আসে।"
          },
          {
            "en": "What the commentators decline to supply matters too. Ibn Kathir notes that the account of how Dawud (AS) killed Jalut, with a sling, comes from the Israelite reports, and the Quran itself gives no such detail. A figure for Talut's army appears in some commentaries with the reminder that Allah knows best. This article leaves such details aside. The Quran tells the story without them, and its lesson does not need them: a few who kept a command, a du'a on open ground, and a victory attributed wholly to Allah's permission.",
            "bn": "মুফাসসিররা যা দিতে রাজি হননি, সেটাও গুরুত্বপূর্ণ। ইবনে কাসীর জানান, দাউদ (আঃ) গুলতি দিয়ে জালূতকে হত্যা করেছিলেন, এই বিবরণ এসেছে ইসরাঈলি বর্ণনা থেকে। কুরআন নিজে এমন কোনো খুঁটিনাটি দেয়নি। কোনো কোনো তাফসিরে তালূতের বাহিনীর একটা সংখ্যাও এসেছে, সঙ্গে এই সতর্কতা যে আল্লাহই ভালো জানেন। এই লেখা এসব খুঁটিনাটি পাশে সরিয়ে রাখে। কুরআন এগুলো ছাড়াই কাহিনিটি বলেছে, আর এর শিক্ষারও এগুলো লাগে না: হুকুম মেনে চলা অল্প কজন, খোলা ময়দানে একটি দোয়া, আর এমন বিজয় যার পুরো কৃতিত্ব আল্লাহর অনুমতির।"
          }
        ]
      },
      {
        "h": {
          "en": "Badr and the Number at the River",
          "bn": "বদর আর নদী পারের সংখ্যা"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches to this passage a report that al-Bukhari records from al-Bara' ibn 'Azib (RA). The Companions of Muhammad ﷺ used to say among themselves that the people of Badr were as many as the companions of Talut who crossed the river with him, three hundred and ten and some, and that none crossed with him except a believer. The comparison was theirs, not a later preacher's. The men who stood at Badr saw their own battle in this story, and 3:123 records what followed: Allah had given them victory at Badr while they were weak.",
            "bn": "ইবনে কাসীর এই অংশের সঙ্গে একটি বর্ণনা যুক্ত করেন, যা ইমাম বুখারী বারা ইবনে আযিব (রাঃ) থেকে এনেছেন। মুহাম্মাদ ﷺ-এর সাহাবিরা নিজেদের মধ্যে বলাবলি করতেন, বদরের যোদ্ধারা সংখ্যায় ছিলেন তালূতের সেই সঙ্গীদের সমান, যারা তাঁর সঙ্গে নদী পার হয়েছিল: তিনশো দশের কিছু বেশি। আর মুমিন ছাড়া কেউ তাঁর সঙ্গে পার হয়নি। তুলনাটা তাঁদের নিজেদের, পরের যুগের কোনো বক্তার নয়। বদরে যাঁরা দাঁড়িয়েছিলেন, তাঁরা নিজেদের যুদ্ধকে এই কাহিনির মধ্যে দেখেছিলেন। আর ৩:১২৩ আয়াত লিখে রাখে এর পরিণতি: তোমরা দুর্বল থাকা অবস্থায় আল্লাহ বদরে তোমাদের সাহায্য করেছিলেন।"
          },
          {
            "en": "A second narration shapes how the du'a should be carried. Al-Bukhari records from Abdullah ibn Abi Awfa (RA) that on one of his campaigns the Prophet ﷺ waited until the sun had declined, then stood among the people and told them not to wish to meet the enemy but to ask Allah for well-being, and that when they did meet the enemy they should be patient. Talut's army asked for patience poured over them at the moment of meeting. The Sunnah adds what comes before that moment: nobody is to go looking for the trial.",
            "bn": "দ্বিতীয় একটি বর্ণনা বলে দেয় দোয়াটা কীভাবে বহন করতে হবে। ইমাম বুখারী আবদুল্লাহ ইবনে আবি আওফা (রাঃ) থেকে বর্ণনা করেছেন, এক অভিযানে নবী ﷺ সূর্য হেলে পড়া পর্যন্ত অপেক্ষা করলেন। তারপর লোকদের মাঝে দাঁড়িয়ে বললেন, শত্রুর মুখোমুখি হওয়ার আকাঙ্ক্ষা কোরো না, আল্লাহর কাছে নিরাপত্তা চাও। আর যখন মুখোমুখি হবে, তখন ধৈর্য ধরো। তালূতের বাহিনী ধৈর্য চেয়েছিল ঠিক মুখোমুখি হওয়ার মুহূর্তে। সুন্নাহ যোগ করে সেই মুহূর্তের আগের কথা: পরীক্ষাকে কেউ খুঁজে বেড়াবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Others Who Asked the Same",
          "bn": "একই দোয়া যাঁরা করেছিলেন"
        },
        "p": [
          {
            "en": "The Arabic words afrigh 'alayna sabran occur again in 7:126, spoken by Pharaoh's magicians after they believed and were threatened with having their hands and feet cut off and being crucified: our Lord, pour upon us patience and let us die as Muslims. In 3:146-147 the devoted men who fought alongside prophets said: our Lord, forgive us our sins and our excess in our affairs, make our feet firm and give us victory over the disbelieving people. Those are the two closing requests of 2:250, now preceded by a plea for forgiveness.",
            "bn": "'আফরিগ আলাইনা সাবরা', এই আরবি শব্দগুলো আবার এসেছে ৭:১২৬ আয়াতে, ফেরাউনের জাদুকরদের মুখে। ঈমান আনার পর তাদের হাত-পা কেটে শূলে চড়ানোর হুমকি দেওয়া হয়েছিল, আর তারা বলেছিল: হে আমাদের রব, আমাদের ওপর ধৈর্য ঢেলে দিন আর মুসলিম অবস্থায় আমাদের মৃত্যু দিন। ৩:১৪৬-১৪৭ আয়াতে নবীদের সঙ্গে লড়াই করা আল্লাহওয়ালা মানুষেরা বলেছিল: হে আমাদের রব, আমাদের গুনাহ আর কাজে আমাদের বাড়াবাড়ি ক্ষমা করুন, আমাদের পা অটল রাখুন, আর কাফির সম্প্রদায়ের বিরুদ্ধে আমাদের বিজয় দিন। এ হলো ২:২৫০ আয়াতের শেষ দুটি আবেদনই, তবে তার আগে এসেছে ক্ষমা চাওয়া।"
          },
          {
            "en": "8:45-46 turns the du'a into standing orders for the believers: when you meet a company, stand firm and remember Allah much, do not dispute among yourselves, and be patient, for Allah is with the patient, almost the very sentence with which 2:249 ends. 8:66 gives the arithmetic in the same spirit: a hundred who are steadfast will overcome two hundred, and a thousand will overcome two thousand by the permission of Allah. And 47:7 names the condition behind firm feet: if you support Allah, He will support you and plant your feet firmly.",
            "bn": "৮:৪৫-৪৬ আয়াত এই দোয়াকে মুমিনদের জন্য স্থায়ী নির্দেশে পরিণত করে: কোনো বাহিনীর মুখোমুখি হলে অবিচল থাকো, আল্লাহকে বেশি বেশি স্মরণ করো, নিজেদের মধ্যে ঝগড়া কোরো না, আর ধৈর্য ধরো, আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। শেষ বাক্যটি প্রায় হুবহু সেই কথা, যা দিয়ে ২:২৪৯ আয়াত শেষ হয়। ৮:৬৬ আয়াত একই মেজাজে হিসাবটা দেয়: একশো জন ধৈর্যশীল দুশো জনের ওপর জয়ী হবে, আর এক হাজার জন আল্লাহর অনুমতিতে দুই হাজারের ওপর জয়ী হবে। আর ৪৭:৭ আয়াত অটল পায়ের শর্তটা জানায়: তোমরা যদি আল্লাহকে সাহায্য করো, তিনি তোমাদের সাহায্য করবেন আর তোমাদের পা দৃঢ় করে দেবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Rivers in an Ordinary Life",
          "bn": "সাধারণ জীবনের নদী"
        },
        "p": [
          {
            "en": "Most readers will never stand in a battle line, but the shape of this passage repeats in ordinary life. A hard task is usually preceded by a smaller test of restraint: some lawful comfort you are asked to take only a handful of. The night before an exam, the months of saving before a debt is cleared, the fasting days before Eid, the evenings a new parent gives up. Those who drink their fill at the river rarely reach the field. Treat the small restraint as the real contest, because it usually is.",
            "bn": "বেশির ভাগ পাঠক কোনো দিন যুদ্ধের সারিতে দাঁড়াবেন না। তবু এই অংশের ধাঁচটা সাধারণ জীবনে বারবার ফিরে আসে। কঠিন কাজের আগে সাধারণত আসে সংযমের একটা ছোট পরীক্ষা: হালাল কোনো আরাম, যা থেকে আপনাকে শুধু এক আঁজলা নিতে বলা হচ্ছে। পরীক্ষার আগের রাত, ঋণ শোধের আগে মাসের পর মাস সঞ্চয়, ঈদের আগের রোজার দিনগুলো, নতুন বাবা-মায়ের ছেড়ে দেওয়া সন্ধ্যাগুলো। নদীর পাড়ে যারা পেট ভরে পান করে, ময়দানে তারা খুব কমই পৌঁছায়। ছোট সংযমটাকেই আসল লড়াই ধরে নিন, কারণ বেশির ভাগ সময় সেটাই আসল।"
          },
          {
            "en": "When the moment itself comes, say their du'a before you step into the open: before the hospital appointment, the difficult conversation, the first day of a job you are not sure you can do. Ask for patience first, not only for the outcome. And when you hear voices, your own included, saying there is no strength for this today, answer the way the certain ones did. Do not argue from the numbers in front of you. Remind yourself that you will meet Allah, and that small companies have prevailed by His permission before.",
            "bn": "আর আসল মুহূর্তটা যখন আসে, খোলা ময়দানে পা রাখার আগে তাদের দোয়াটা পড়ুন: হাসপাতালে ডাক্তার দেখানোর আগে, কঠিন কোনো আলাপের আগে, এমন চাকরির প্রথম দিনে, যা সামলাতে পারবেন কি না নিশ্চিত নন। আগে ধৈর্য চান, শুধু ফলাফল নয়। আর যখন কেউ বলে, কিংবা আপনার নিজের মনই বলে, আজ এর শক্তি নেই, তখন নিশ্চিত বিশ্বাসীদের মতো জবাব দিন। সামনের সংখ্যা দেখে তর্ক করবেন না। নিজেকে মনে করিয়ে দিন, আল্লাহর সঙ্গে সাক্ষাৎ হবেই, আর তাঁর অনুমতিতে ছোট দল আগেও জিতেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Du'as for the Open Field",
          "bn": "খোলা ময়দানের দুটি দোয়া"
        },
        "p": [
          {
            "en": "The first is the verse itself, worth learning in Arabic: Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'ala al-qawmi al-kafirin. Our Lord, pour upon us patience, make our feet firm, and give us victory over the disbelieving people. Keep its words exactly as the Quran gives them. Its first two requests fit any hour in which you must hold your ground.",
            "bn": "প্রথমটি খোদ আয়াতটি, যা আরবিতে মুখস্থ করে নেওয়ার মতো: 'রাব্বানা আফরিগ আলাইনা সাবরাও ওয়া সাব্বিত আকদামানা ওয়ানসুরনা আলাল কাওমিল কাফিরীন।' হে আমাদের রব, আমাদের ওপর ধৈর্য ঢেলে দিন, আমাদের পা অটল রাখুন, আর কাফির সম্প্রদায়ের বিরুদ্ধে আমাদের বিজয় দিন। এর শব্দগুলো কুরআন যেভাবে দিয়েছে ঠিক সেভাবেই রাখুন। প্রথম দুটি আবেদন এমন যেকোনো সময়ের জন্য মানানসই, যখন আপনাকে নিজের জায়গায় অটল থাকতে হবে।"
          },
          {
            "en": "The second comes from the same narration of Abdullah ibn Abi Awfa (RA) in al-Bukhari. After telling the people to be patient when they met the enemy, the Prophet ﷺ supplicated: \"O Allah, Revealer of the Book, Mover of the clouds, Defeater of the confederates, defeat them and give us victory over them.\" It calls on Allah by what He has already done, sending down revelation, driving the clouds and routing the confederates, before asking Him to do it again. The certain ones at the river reasoned in the same way.",
            "bn": "দ্বিতীয়টি ইমাম বুখারীর বর্ণিত আবদুল্লাহ ইবনে আবি আওফা (রাঃ)-এর সেই একই হাদিস থেকে। শত্রুর মুখোমুখি হলে ধৈর্য ধরতে বলার পর নবী ﷺ দোয়া করলেন: \"হে আল্লাহ, কিতাব নাজিলকারী, মেঘ পরিচালনাকারী, সম্মিলিত বাহিনীকে পরাজিতকারী, তাদের পরাজিত করুন আর তাদের বিরুদ্ধে আমাদের বিজয় দিন।\" দোয়াটি আল্লাহকে ডাকে তিনি আগে যা করেছেন তা দিয়ে: ওহি নাজিল করা, মেঘ চালানো, সম্মিলিত বাহিনীকে ছত্রভঙ্গ করা। তারপর আবার তা করার আবেদন জানায়। নদী পারের নিশ্চিত বিশ্বাসীরাও ঠিক এভাবেই ভেবেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions from the Riverbank",
          "bn": "নদীর পাড় থেকে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "Which river am I standing at this week, and am I treating it as a small inconvenience rather than as the test that decides whether I reach the field at all? When I look at what I face, whose voice do I listen to longest: the one that counts the enemy's soldiers, or the one that remembers the meeting with Allah?",
            "bn": "এই সপ্তাহে আমি কোন নদীর পাড়ে দাঁড়িয়ে আছি, আর সেটাকে কি ছোটখাটো ঝামেলা ভাবছি, অথচ ওই পরীক্ষাই ঠিক করবে আমি আদৌ ময়দানে পৌঁছাব কি না? সামনের বিপদের দিকে তাকালে কার কথা আমি সবচেয়ে বেশিক্ষণ শুনি: যে শত্রুর সৈন্য গোনে, নাকি যে আল্লাহর সঙ্গে সাক্ষাতের কথা মনে রাখে?"
          },
          {
            "en": "Do I ask Allah for patience before hardship begins, or do I wait until I have already lost it? Am I one of those who strengthen others when their hearts fail, as the people of knowledge did among Talut's soldiers, or one of those whose words make a frightened group more afraid? And when help does come, do I attribute it, as 2:251 does, to the permission of Allah, or to my own planning?",
            "bn": "কষ্ট শুরু হওয়ার আগেই কি আমি আল্লাহর কাছে ধৈর্য চাই, নাকি ধৈর্য হারিয়ে ফেলার পর চাই? তালূতের সৈন্যদের মধ্যে আলেমরা যেমন করেছিলেন, অন্যের মন ভেঙে পড়লে আমি কি তাদের সাহস জোগাই, নাকি আমার কথায় ভীত দলটা আরও ভয় পেয়ে যায়? আর সাহায্য যখন সত্যিই আসে, তখন কি ২:২৫১ আয়াতের মতো তাকে আল্লাহর অনুমতির দিকে ফেরাই, নাকি নিজের পরিকল্পনার দিকে?"
          }
        ]
      }
    ]
  },
  "2:255": {
    "sections": [
      {
        "h": {
          "en": "No God But He, the Living",
          "bn": "তিনি ছাড়া কোনো ইলাহ নেই, তিনি চিরঞ্জীব"
        },
        "p": [
          {
            "en": "The verse opens by clearing the ground: la ilaha illa Huwa, there is no god except He. Arabic negates first and affirms second, so the sentence empties the heart of every rival before it names the One who remains. Two names follow immediately, and the commentators treat them as the pillars the rest of the verse stands on: al-Hayy, the Ever-Living, whose life was never granted and will never end, and al-Qayyum, the Self-Subsisting who holds everything else in being.",
            "bn": "আয়াতটি শুরুতেই জায়গা খালি করে নেয়: 'লা ইলাহা ইল্লা হুয়া', তিনি ছাড়া কোনো ইলাহ নেই। আরবিতে আগে 'না', পরে 'হ্যাঁ'। তাই বাক্যটি প্রথমে দিল থেকে সব প্রতিদ্বন্দ্বীকে বের করে দেয়, তারপর নাম নেয় তাঁর, যিনি একাই থেকে যান। এরপরই আসে দুটি নাম। মুফাসসিরগণ বলেন, বাকি আয়াত এ দুটি নামের ওপরই দাঁড়িয়ে আছে। আল-হাইয়্য, চিরঞ্জীব: তাঁর জীবন কারও দেওয়া নয়, কখনো শেষও হবে না। আর আল-কাইয়্যূম, যিনি নিজে নিজে প্রতিষ্ঠিত এবং বাকি সবকিছুকে টিকিয়ে রাখেন।"
          },
          {
            "en": "Then comes a denial that sounds gentle and is enormous. Neither sinah nor nawm takes hold of Him: sinah is the drowsiness that arrives before sleep, nawm is sleep itself. The wording climbs from the smaller to the greater and rules out both. Every living thing we have ever met must stop and rest; the One described here does not pause, and so creation is never for a single moment left unattended while its Sustainer is not watching.",
            "bn": "এরপর আসে একটি 'না', যা শুনতে নরম, কিন্তু অর্থে বিশাল। তাঁকে সিনাহও স্পর্শ করে না, নাওমও না। সিনাহ হলো ঘুমের আগের তন্দ্রা, আর নাওম হলো ঘুম। কথাটা ছোট থেকে বড়র দিকে যায়, আর দুটোকেই নাকচ করে। আমরা যত প্রাণী দেখেছি, সবাইকে কোনো এক সময় থামতে হয়, বিশ্রাম নিতে হয়। কিন্তু এখানে যাঁর কথা বলা হচ্ছে, তিনি কখনো থামেন না। তাই এমন একটি মুহূর্তও আসে না, যখন সৃষ্টিজগৎ অরক্ষিত পড়ে থাকে আর এর পালনকর্তা খেয়াল রাখছেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ownership, Permission, Knowledge",
          "bn": "মালিকানা, অনুমতি, জ্ঞান"
        },
        "p": [
          {
            "en": "To Him belongs whatever is in the heavens and whatever is on the earth. The Arabic particle ma, whatever, sweeps in what we have named and catalogued and everything we have not. Then a question shaped so that it answers itself: who is there that can intercede with Him except by His permission? The people first addressed by this verse believed their idols would speak on their behalf. The sentence removes that at the root without denying that intercession exists at all.",
            "bn": "আসমানে যা কিছু আছে আর জমিনে যা কিছু আছে, সবই তাঁর। আরবি 'মা' শব্দটির অর্থ 'যা কিছু'। আমরা যেসবের নাম দিয়েছি, তালিকা করেছি, সেগুলো তো এর ভেতরে আছেই, আর যেগুলোর নাম দিইনি, সেগুলোও আছে। তারপর এমন একটি প্রশ্ন, যার উত্তর প্রশ্নের ভেতরেই: তাঁর অনুমতি ছাড়া কে আছে যে তাঁর কাছে সুপারিশ করবে? এ আয়াত প্রথম যাদের শোনানো হয়েছিল, তারা বিশ্বাস করত তাদের মূর্তিগুলো তাদের হয়ে কথা বলবে। বাক্যটি সেই বিশ্বাসকে গোড়া থেকে উপড়ে ফেলে, তবে সুপারিশ বলে কিছুই নেই, এমন কথাও বলে না।"
          },
          {
            "en": "What is left standing is intercession by permission, granted to whom He allows. Knowledge follows: He knows what is before them and what is behind them, and they encompass nothing of His knowledge except what He wills. Read slowly, that clause describes every scholar, every specialist and every anxious planner. Whatever any of us knows is a portion that has been measured out, and it has been measured out by the One who holds the whole of it.",
            "bn": "টিকে থাকে শুধু অনুমতি নিয়ে সুপারিশ, আর তা-ও কেবল তার জন্য, যাকে তিনি অনুমতি দেন। এরপর জ্ঞানের কথা: তাদের সামনে যা আছে আর পেছনে যা আছে, সব তিনি জানেন; আর তিনি যতটুকু চান, তার বাইরে তাঁর জ্ঞানের কিছুই তারা আয়ত্ত করতে পারে না। ধীরে পড়লে দেখা যায়, এই বাক্যে প্রত্যেক আলেম, প্রত্যেক বিশেষজ্ঞ, প্রত্যেক দুশ্চিন্তায় থাকা পরিকল্পনাকারীর ছবি আছে। আমরা যে যা জানি, তা মেপে দেওয়া একটা ভাগ মাত্র। আর মেপে দিয়েছেন তিনি, পুরো জ্ঞান যাঁর কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Kursi and the Guarding",
          "bn": "কুরসী আর হেফাজত"
        },
        "p": [
          {
            "en": "His Kursi extends over the heavens and the earth. The commentators differ over the word. A group of the early authorities relate that the Kursi is something other than the 'Arsh, the Throne, and far smaller than it; others read the word as an image of His knowledge or His sovereign command. The mainstream Sunni position is to affirm the word exactly as revealed, without asking how and without imagining a seat resembling the chair of a king.",
            "bn": "তাঁর কুরসী আসমান ও জমিন জুড়ে বিস্তৃত। শব্দটির অর্থ নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে। সালাফের একদল থেকে বর্ণিত, কুরসী আরশ থেকে আলাদা জিনিস, আর আরশের তুলনায় অনেক ছোট। অন্যরা শব্দটিকে তাঁর জ্ঞান বা তাঁর সার্বভৌম হুকুমের রূপক হিসেবে পড়েছেন। আহলুস সুন্নাহর মূলধারার অবস্থান হলো, শব্দটি যেভাবে নাজিল হয়েছে ঠিক সেভাবেই মেনে নেওয়া, 'কীভাবে' প্রশ্ন না তুলে, আর রাজার আসনের মতো কোনো আসনের কল্পনা না করে।"
          },
          {
            "en": "The clause that follows is the one people carry home with them: preserving them both does not weary Him. The verb carries the sense of being burdened by a heavy task. The verse then closes with al-'Aliyy al-'Azim, the Most High, the Most Great. Notice the order of the whole: majesty, then knowledge, then care, then the assurance that the care costs Him nothing at all. The reader is left feeling very small and entirely safe.",
            "bn": "এর পরের বাক্যটিই মানুষ মনে গেঁথে নিয়ে যায়: এ দুটির হেফাজত তাঁকে ক্লান্ত করে না। এখানকার ক্রিয়াপদে আছে ভারী বোঝা বইতে গিয়ে হাঁপিয়ে পড়ার ভাব। আয়াত শেষ হয় আল-আলিয়্য ও আল-আযীম নামে: তিনি সর্বোচ্চ, তিনি মহান। পুরো আয়াতের ক্রমটা খেয়াল করুন: প্রথমে মহিমা, তারপর জ্ঞান, তারপর হেফাজত, আর শেষে এই আশ্বাস যে এই হেফাজতে তাঁর কোনো কষ্টই হয় না। পড়া শেষে পাঠক নিজেকে খুব ছোট মনে করেন, আবার পুরোপুরি নিরাপদও বোধ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Verse Sits",
          "bn": "আয়াতটির অবস্থান"
        },
        "p": [
          {
            "en": "No sound report fixes a particular occasion of revelation for this verse; like most of Surah al-Baqarah it is general, and it is honest to say so rather than invent an incident. Its placement, however, is clearly deliberate. The verse just before it, 2:254, tells the believers to spend from what they have been given before a day arrives in which there is no bargaining, no friendship and no intercession.",
            "bn": "এই আয়াতের নির্দিষ্ট কোনো শানে নুযূল সহীহ সূত্রে প্রমাণিত নয়। সূরা আল-বাকারার বেশির ভাগ আয়াতের মতো এটিও সাধারণ। কোনো ঘটনা বানিয়ে বলার চেয়ে এ কথা খোলাখুলি স্বীকার করাই সততা। তবে আয়াতটিকে যে ভেবেচিন্তে এখানে রাখা হয়েছে, তা স্পষ্ট। ঠিক আগের আয়াত ২:২৫৪ মুমিনদের বলে, তাদের যা দেওয়া হয়েছে তা থেকে খরচ করতে, সেই দিন আসার আগেই, যেদিন বেচাকেনা থাকবে না, বন্ধুত্ব থাকবে না, সুপারিশও থাকবে না।"
          },
          {
            "en": "Ayat al-Kursi then explains why that day works that way: because intercession belongs to His permission alone. The verse after it, 2:256, states that there is no compulsion in religion, since guidance has become clear from error. Placed side by side, the three verses move from what we owe, to who Allah is, to how faith must be entered. Reciting Ayat al-Kursi with its neighbours in view stops it drifting free as an isolated formula.",
            "bn": "এরপর আয়াতুল কুরসী জানায়, সেই দিনটি কেন এমন হবে: সুপারিশ চলবে কেবল তাঁর অনুমতিতে। পরের আয়াত ২:২৫৬ বলে, দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই, কারণ হিদায়াত গোমরাহি থেকে আলাদা হয়ে স্পষ্ট হয়ে গেছে। তিনটি আয়াত পাশাপাশি রাখলে দেখা যায় কথাটা ধাপে ধাপে এগোচ্ছে: আমাদের দায়িত্ব কী, আল্লাহ কে, আর ঈমানে প্রবেশ করতে হয় কীভাবে। আগে-পরের আয়াতগুলো মাথায় রেখে পড়লে আয়াতুল কুরসী আর শুধু আলাদা করে মুখস্থ করা একটা বাক্য হয়ে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Was Used",
          "bn": "আয়াতটির আমল"
        },
        "p": [
          {
            "en": "Muslim narrates that the Prophet ﷺ asked Ubayy ibn Ka'b (RA) which verse of the Book of Allah he held to be greatest, and when Ubayy answered with Ayat al-Kursi the Prophet ﷺ struck him on the chest and congratulated him on his knowledge. The verse is not called greatest for its length. It is greatest because from beginning to end it has one subject and one only, which is Allah Himself.",
            "bn": "ইমাম মুসলিম বর্ণনা করেছেন, নবী ﷺ উবাই ইবনে কা'ব (রাঃ)-কে জিজ্ঞেস করলেন, আল্লাহর কিতাবের কোন আয়াতটি তাঁর মতে সবচেয়ে মহান। উবাই আয়াতুল কুরসীর কথা বললে নবী ﷺ তাঁর বুকে চাপড় দিয়ে এই জ্ঞানের জন্য তাঁকে মোবারকবাদ জানালেন। আয়াতটি লম্বা বলে মহান নয়। মহান এ কারণে যে শুরু থেকে শেষ পর্যন্ত এর বিষয় একটাই, আর তা হলো স্বয়ং আল্লাহ।"
          },
          {
            "en": "Al-Bukhari relates the account of Abu Hurayrah (RA), left to guard the zakat stores of Ramadan, who caught a thief on three successive nights; on the last the thief bought his release by teaching him that whoever recites Ayat al-Kursi before sleeping has a guardian from Allah with him until morning, and the Prophet ﷺ confirmed that the words were true even though the one who spoke them was a devil. Reciting it after each obligatory prayer is reported from the Prophet ﷺ in the collection of an-Nasa'i.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ)-এর একটি ঘটনা বর্ণনা করেছেন। রমজানের যাকাতের মাল পাহারার দায়িত্ব ছিল তাঁর ওপর। পরপর তিন রাত তিনি এক চোরকে ধরেন। শেষ রাতে চোরটি ছাড়া পাওয়ার বিনিময়ে তাঁকে শিখিয়ে দেয়: ঘুমানোর আগে কেউ আয়াতুল কুরসী পড়লে সকাল পর্যন্ত আল্লাহর পক্ষ থেকে একজন পাহারাদার তার সঙ্গে থাকে। নবী ﷺ জানালেন, কথাটা সত্যি, যদিও যে বলেছে সে এক শয়তান। প্রতিটি ফরজ নামাজের পর আয়াতুল কুরসী পড়ার কথাও নবী ﷺ থেকে বর্ণিত আছে, ইমাম নাসাঈর সংকলনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying It Through the Day",
          "bn": "দিনভর আয়াতটি সঙ্গে রাখা"
        },
        "p": [
          {
            "en": "The practical shape of this verse is small and repeatable: after every obligatory prayer, and again before sleep. What changes with practice is not the count but the attention. Read the clauses as statements about reality rather than as sounds to complete — He does not sleep, He is not wearied, He knows what lies ahead of you — and the verse begins to work on the particular worry that made you reach for it.",
            "bn": "এই আয়াতের আমল ছোট, আর বারবার করা যায়: প্রতিটি ফরজ নামাজের পর, আবার ঘুমানোর আগে। নিয়মিত পড়তে পড়তে যা বদলায় তা সংখ্যা নয়, মনোযোগ। বাক্যগুলোকে শুধু উচ্চারণ করে শেষ করার মতো শব্দ ভাববেন না। এগুলো বাস্তবতার খবর: তিনি ঘুমান না, তিনি ক্লান্ত হন না, আপনার সামনে কী আছে তিনি জানেন। এভাবে পড়লে যে দুশ্চিন্তা আপনাকে আয়াতটির কাছে টেনে এনেছিল, আয়াতটি ঠিক সেই দুশ্চিন্তার ওপরই কাজ শুরু করে।"
          },
          {
            "en": "It also disciplines hope. If nothing is guaranteed by any intercessor except by His permission, then contacts, reputations and favours are not where safety actually lies. And if He is never wearied by preserving the heavens and the earth, the matter you are carrying is not too much to hand over to Him tonight. Anxiety loses weight, not because the problem became smaller, but because the One in charge of it has been described accurately.",
            "bn": "আয়াতটি আশাকেও ঠিক জায়গায় রাখে। তাঁর অনুমতি ছাড়া কোনো সুপারিশকারী যদি কিছুই নিশ্চিত করতে না পারে, তাহলে চেনাজানা লোক, সুনাম বা কারও খাতির, এসবের মধ্যে আসল নিরাপত্তা নেই। আর আসমান-যমীনের হেফাজত যদি তাঁকে কখনো ক্লান্ত না করে, তাহলে আপনি যে বোঝা বয়ে বেড়াচ্ছেন, আজ রাতে তা তাঁর হাতে সঁপে দেওয়ার পক্ষে মোটেই বেশি ভারী নয়। দুশ্চিন্তা হালকা হয়ে আসে। সমস্যা ছোট হয়েছে বলে নয়, বরং যাঁর হাতে এর ভার, তাঁকে ঠিকঠাক চেনা গেছে বলে।"
          }
        ]
      }
    ]
  },
  "2:257": {
    "sections": [
      {
        "h": {
          "en": "The Sentence and Its Mirror",
          "bn": "বাক্য ও তার প্রতিবিম্ব"
        },
        "p": [
          {
            "en": "Allah is the wali of those who believe; He brings them out of the darknesses into the light. And those who disbelieve — their patrons are the taghut, who bring them out of the light into the darknesses. The verse is built as a mirror: the same verb of bringing out, the same two destinations, opposite directions. Everyone in it is moving; no one is standing still. The only question the verse leaves open is which way you are being led.",
            "bn": "আল্লাহ মুমিনদের ওয়ালী। তিনি তাদের অন্ধকারগুলো থেকে বের করে আলোর দিকে আনেন। আর যারা কুফরি করে, তাদের অভিভাবক তাগূত। তারা ওদের আলো থেকে বের করে অন্ধকারগুলোর দিকে নিয়ে যায়। আয়াতটি গড়া আয়নার মতো: বের করে আনার একই ক্রিয়া, একই দুই গন্তব্য, শুধু দিক উল্টো। আয়াতের প্রত্যেকেই চলছে, কেউ থেমে দাঁড়িয়ে নেই। আয়াতটি একটি প্রশ্নই খোলা রাখে: আপনাকে কোন দিকে নিয়ে যাওয়া হচ্ছে?"
          },
          {
            "en": "Wali is a rich word: ally, protector, guardian, the one who takes charge of your affairs and stands closest to you. When Allah names Himself wali of the believers, He is not describing a feeling but a working relationship — guidance given, protection extended, affairs managed by One who neither sleeps, as 2:255 has just said, nor is ever absent.",
            "bn": "ওয়ালী শব্দটির অর্থ অনেক গভীর: বন্ধু, রক্ষক, অভিভাবক, যিনি আপনার সব বিষয়ের দায়িত্ব নেন আর থাকেন আপনার সবচেয়ে কাছে। আল্লাহ যখন নিজেকে মুমিনদের ওয়ালী বলেন, তখন তিনি কোনো অনুভূতির কথা বলছেন না। বলছেন এমন এক সম্পর্কের কথা, যা কাজে দেখা যায়: তিনি পথ দেখান, রক্ষা করেন, সব বিষয় সামলান। আর যিনি সামলান তিনি ঘুমান না, যেমন ২:২৫৫ এইমাত্র বলেছে, কখনো অনুপস্থিতও থাকেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "After the Kursi and the Choice",
          "bn": "কুরসী ও সিদ্ধান্তের পরে"
        },
        "p": [
          {
            "en": "The verse does not stand alone. 2:255 has just described the God whose Kursi extends over the heavens and the earth. 2:256 then declares there is no compulsion in religion, for guidance has become clear from error, and promises that whoever rejects the taghut and believes in Allah has grasped the firmest handle, which never breaks. 2:257 completes the movement: it shows what happens after the hand closes on the handle — or refuses it.",
            "bn": "আয়াতটি একা দাঁড়িয়ে নেই। ২:২৫৫ এইমাত্র সেই আল্লাহর পরিচয় দিয়েছে, যাঁর কুরসী আসমান-যমীন জুড়ে বিস্তৃত। এরপর ২:২৫৬ ঘোষণা করে, দ্বীনে কোনো জবরদস্তি নেই, কারণ হিদায়াত গোমরাহি থেকে স্পষ্ট হয়ে গেছে। সেই আয়াত ওয়াদাও দেয়: যে তাগূতকে অস্বীকার করে আল্লাহর ওপর ঈমান আনে, সে এমন মজবুত হাতল আঁকড়ে ধরেছে, যা কখনো ভাঙে না। ২:২৫৭ কথাটা পূর্ণ করে। হাত সেই হাতল আঁকড়ে ধরলে কী ঘটে, আর ধরতে অস্বীকার করলে কী ঘটে, এই আয়াত তা দেখায়।"
          },
          {
            "en": "Read as a sequence, the three verses answer three questions in order. Who is Allah? The Living, the Sustainer, as 2:255 declares. How is faith entered? Freely, by a clear choice, as 2:256 rules. What does the choice deliver? A guardian, and a lifelong movement toward light, as 2:257 promises. The commentators read the passage as one lesson in three steps rather than three isolated sayings.",
            "bn": "পরপর পড়লে তিনটি আয়াত ক্রমানুসারে তিনটি প্রশ্নের জবাব দেয়। আল্লাহ কে? চিরঞ্জীব, সবকিছুর ধারক, যেমনটা ২:২৫৫ ঘোষণা করে। ঈমানে প্রবেশ করতে হয় কীভাবে? স্বাধীনভাবে, স্পষ্ট বুঝে বেছে নিয়ে, যেমনটা ২:২৫৬-এর বিধান। এই বেছে নেওয়া কী এনে দেয়? একজন অভিভাবক, আর সারা জীবন আলোর দিকে এগিয়ে চলা, যেমনটা ২:২৫৭-এর ওয়াদা। মুফাসসিরগণ এই অংশটিকে তিনটি বিচ্ছিন্ন উক্তি হিসেবে নয়, তিন ধাপের একটি শিক্ষা হিসেবেই পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Darknesses Plural, Light Singular",
          "bn": "অন্ধকার বহু, আলো এক"
        },
        "p": [
          {
            "en": "The Arabic is precise: zulumat, darknesses, always plural in this idiom; nur, light, singular. The commentators draw the meaning out: falsehood is many — sects, superstitions, desires, ideologies, each a darkness of its own — while truth is one road. 6:153 states it as a command: this is My path, straight, so follow it, and do not follow the other ways, for they will scatter you from His way.",
            "bn": "আরবি শব্দ দুটি খুব হিসাব করে বসানো। যুলুমাত মানে অন্ধকার, তবে এই বাগধারায় শব্দটি সবসময় বহুবচন। নূর মানে আলো, আর তা একবচন। মুফাসসিরগণ এর তাৎপর্য বের করেছেন: বাতিল অনেক রকম। দল-উপদল, কুসংস্কার, প্রবৃত্তি, নানা মতবাদ, প্রতিটিই আলাদা এক অন্ধকার। অথচ সত্যের পথ একটাই। ৬:১৫৩ আয়াত এ কথাই বলে আদেশের সুরে: এটাই আমার সরল পথ, তোমরা এরই অনুসরণ করো, অন্য পথগুলোর অনুসরণ কোরো না, কারণ সেগুলো তোমাদের তাঁর পথ থেকে বিচ্ছিন্ন করে দেবে।"
          },
          {
            "en": "Darkness in the Quran's usage is not only ignorance of doctrine. It is every state in which a person cannot see where they are going: confusion about what matters, blindness to consequences, a conscience dimmed by habit. Light, correspondingly, is not information but sight — the ability to see the world, the self and the road ahead as they actually are.",
            "bn": "কুরআনের ভাষায় অন্ধকার মানে শুধু আকীদা না জানা নয়। মানুষ যে অবস্থায় দেখতে পায় না সে কোথায় চলেছে, তার সবই অন্ধকার: কোনটা জরুরি তা নিয়ে দিশেহারা হওয়া, পরিণতির দিকে চোখ বন্ধ রাখা, অভ্যাসের চাপে বিবেক ঝাপসা হয়ে যাওয়া। তেমনি আলো মানে শুধু তথ্য নয়, দেখতে পাওয়ার ক্ষমতা: দুনিয়া, নিজেকে আর সামনের পথকে আসলে যেমন, ঠিক তেমন করে দেখতে পারা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Taghut",
          "bn": "তাগূত কারা"
        },
        "p": [
          {
            "en": "Taghut, from a root meaning to overflow all bounds, is the Quran's name for whatever is served or obeyed in place of Allah — idols, tyrants, soothsayers, and in every age its newer forms. The scholars' definitions vary in wording and agree in substance: anything that takes for itself, or is given, what belongs to Allah alone. Such patrons come in the plural where the true wali is one, and the verse's grammar carries exactly that contrast.",
            "bn": "তাগূত শব্দের মূল অর্থ সব সীমা ছাড়িয়ে উপচে পড়া। আল্লাহর বদলে যার ইবাদত বা আনুগত্য করা হয়, কুরআন তাকেই তাগূত বলে: মূর্তি, জালিম শাসক, গণক, আর প্রতিটি যুগে তার নতুন নতুন রূপ। আলিমদের সংজ্ঞার ভাষা আলাদা হলেও মূল কথায় তাঁরা একমত: যা কেবল আল্লাহর প্রাপ্য, তা যে নিজে নিয়ে নেয় কিংবা যাকে তা দিয়ে দেওয়া হয়, সে-ই তাগূত। আয়াতে এমন অভিভাবকদের কথা এসেছে বহুবচনে, অথচ প্রকৃত ওয়ালী একজন। আয়াতের ব্যাকরণে ঠিক এই বৈপরীত্যটাই ধরা আছে।"
          },
          {
            "en": "Their direction of pull is the verse's sharpest point: out of the light into the darknesses. The commentators explain that the light was available to them — the clear proofs of 2:256, the sound nature every person is created upon — and their false patrons turn them away from it. No one begins in neutral. Turning from light that has reached you is itself a movement into the dark.",
            "bn": "তারা কোন দিকে টানে, সেটাই আয়াতের সবচেয়ে তীক্ষ্ণ কথা: আলো থেকে অন্ধকারগুলোর দিকে। মুফাসসিরগণ ব্যাখ্যা করেন, আলো তাদের হাতের নাগালেই ছিল। ছিল ২:২৫৬ আয়াতের স্পষ্ট প্রমাণ, ছিল সেই সুস্থ ফিতরাত, যার ওপর প্রতিটি মানুষকে সৃষ্টি করা হয়। তাদের মিথ্যা অভিভাবকরাই তাদের সেখান থেকে ফিরিয়ে নেয়। কেউই নিরপেক্ষ জায়গা থেকে শুরু করে না। যে আলো আপনার কাছে পৌঁছে গেছে, তা থেকে মুখ ফিরিয়ে নেওয়াটাই অন্ধকারের দিকে এগিয়ে যাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Promise Elsewhere",
          "bn": "অন্যত্র একই প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Bringing out of darknesses into light is one of the Quran's steady descriptions of what Allah does for believers. 5:16 says He guides by the Quran those who pursue His pleasure into the ways of peace and brings them out of darknesses into light by His permission. 14:1 gives the Book that very purpose, and 65:11 attaches it to the Messenger reciting clear verses. 33:43 adds that He and His angels send blessings on the believers to bring them out of darknesses into light.",
            "bn": "অন্ধকারগুলো থেকে আলোয় বের করে আনা: মুমিনদের জন্য আল্লাহ কী করেন, কুরআন বারবার এভাবেই তা বর্ণনা করে। ৫:১৬ আয়াত বলে, যারা তাঁর সন্তুষ্টির পথে চলে, তিনি কুরআন দিয়ে তাদের শান্তির পথে চালান, আর নিজ অনুমতিতে অন্ধকার থেকে আলোয় বের করে আনেন। ১৪:১ আয়াতে কিতাব নাজিলের উদ্দেশ্যই এটা বলা হয়েছে, আর ৬৫:১১ আয়াত একে যুক্ত করে সেই রাসূলের সঙ্গে, যিনি স্পষ্ট আয়াত তিলাওয়াত করে শোনান। ৩৩:৪৩ আয়াত যোগ করে: তিনি ও তাঁর ফেরেশতারা মুমিনদের ওপর রহমত পাঠান, যেন তাদের অন্ধকার থেকে আলোয় বের করে আনেন।"
          },
          {
            "en": "Gather the passages and the instruments of the bringing-out appear: the Book, the Messenger ﷺ, and Allah's own mercy and blessing. The believer is not asked to generate light; he is asked to stay attached to the sources of it. Detach from revelation, and the verse's other current — the pull of the many darknesses — does not stop running.",
            "bn": "এই আয়াতগুলো একসঙ্গে রাখলে বোঝা যায়, কী কী দিয়ে বের করে আনা হয়: কিতাব, রাসূল ﷺ, আর আল্লাহর নিজের রহমত ও বরকত। মুমিনকে নিজে আলো তৈরি করতে বলা হয়নি। তাকে বলা হয়েছে আলোর এই উৎসগুলোর সঙ্গে লেগে থাকতে। ওহি থেকে দূরে সরে গেলে আয়াতের অন্য স্রোতটা, মানে নানা অন্ধকারের টান, থেমে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Auditing Your Allegiances",
          "bn": "নিজের আনুগত্য যাচাই"
        },
        "p": [
          {
            "en": "The verse invites a plain audit. Everyone has patrons in practice: voices obeyed, sources trusted, company kept, feeds followed. The test it offers is directional — after a season under this influence, do I see more clearly or less? Am I closer to prayer, honesty and remembrance, or further? Movement toward light and movement toward darkness both happen gradually, which is why the audit has to be deliberate.",
            "bn": "আয়াতটি নিজেকে সোজাসুজি যাচাই করে দেখার ডাক দেয়। বাস্তবে প্রত্যেকেরই কিছু অভিভাবক আছে: যাদের কথা মেনে চলি, যাদের কথায় ভরসা করি, যাদের সঙ্গে ওঠাবসা করি, অনলাইনে যাদের নিয়মিত দেখি-শুনি। আয়াতের পরীক্ষাটা দিক নিয়ে: এই প্রভাবের মধ্যে কিছুদিন কাটানোর পর আমি কি আগের চেয়ে পরিষ্কার দেখি, নাকি ঝাপসা? নামাজ, সততা আর জিকিরের কাছে এসেছি, নাকি দূরে সরে গেছি? আলোর দিকে চলা আর অন্ধকারের দিকে চলা, দুটোই ঘটে ধীরে ধীরে। তাই যাচাইটা করতে হয় জেনে-বুঝে।"
          },
          {
            "en": "And the promise is personal. Taking Allah as wali is not a mood but a set of acts: obeying Him when it costs, consulting His Book before other counsel, asking Him first. Whoever does this has His word that the direction of their life is out of every darkness — confusion, sin, despair — and into light, and that the Guardian managing the journey never hands it off.",
            "bn": "আর ওয়াদাটা আপনার নিজের জন্য। আল্লাহকে ওয়ালী হিসেবে গ্রহণ করা কোনো মেজাজের ব্যাপার নয়, কিছু নির্দিষ্ট কাজ: দাম দিতে হলেও তাঁর হুকুম মানা, অন্যের পরামর্শ নেওয়ার আগে তাঁর কিতাব দেখা, সবার আগে তাঁর কাছেই চাওয়া। যে এমন করে, তার জন্য আল্লাহর ওয়াদা আছে: তার জীবন চলবে প্রতিটি অন্ধকার থেকে আলোর দিকে, সেটা দিশেহারা অবস্থা হোক, গুনাহ হোক বা হতাশা। আর এই যাত্রা যিনি পরিচালনা করেন, সেই অভিভাবক কখনো দায়িত্বটা অন্য কারও হাতে ছেড়ে দেন না।"
          }
        ]
      }
    ]
  },
  "2:261": {
    "sections": [
      {
        "h": {
          "en": "A Seed in the Spending Passage",
          "bn": "দানের আলোচনায় একটি বীজ"
        },
        "p": [
          {
            "en": "The verse opens a sustained passage on spending that continues through 2:274 without a break. Earlier, in 2:254 the believers were told to spend from what they had been given before a day arrives with no bargaining and no friendship; now the Quran turns from warning to invitation. The example of those who spend their wealth in the way of Allah is like a grain that grows seven ears, in every ear a hundred grains. The image is drawn from farming, the most familiar economy its first hearers knew.",
            "bn": "এই আয়াত দিয়েই দান নিয়ে একটানা আলোচনা শুরু হয়, যা কোনো বিরতি ছাড়া চলে ২:২৭৪ পর্যন্ত। এর আগে ২:২৫৪ আয়াতে মুমিনদের বলা হয়েছিল, তাদের যা দেওয়া হয়েছে তা থেকে খরচ করতে, সেই দিন আসার আগেই, যেদিন কোনো বেচাকেনা থাকবে না, কোনো বন্ধুত্বও না। এবার কুরআন সতর্ক করা থেকে সরে দাওয়াতের সুরে কথা বলে। যারা আল্লাহর পথে নিজেদের সম্পদ খরচ করে, তাদের উপমা একটি শস্যদানার মতো, যা থেকে সাতটি শীষ গজায়, আর প্রতিটি শীষে থাকে একশো দানা। ছবিটা নেওয়া হয়েছে চাষাবাদ থেকে, যা ছিল প্রথম শ্রোতাদের সবচেয়ে চেনা জীবিকা।"
          },
          {
            "en": "The choice of picture matters. A merchant's profit returns to him alone; a seed becomes food for others, and its growth is slow, hidden, and entirely dependent on what Allah sends of rain and sun. The verb is anbatat — the grain itself \"produced\" seven ears — yet every listener knew that no grain grows itself. From the first line, then, giving is placed inside a world where increase is Allah's work, not the giver's, and where the visible loss of burying a seed is simply what sowing looks like.",
            "bn": "ছবিটা বেছে নেওয়ার পেছনে কারণ আছে। ব্যবসায়ীর লাভ ফেরে শুধু তার নিজের কাছে। কিন্তু বীজ অন্যের মুখের খাবার হয়। তার বেড়ে ওঠা ধীর, চোখের আড়ালে, আর পুরোপুরি নির্ভর করে আল্লাহ কতটা বৃষ্টি আর রোদ পাঠান তার ওপর। ক্রিয়াপদটি 'আনবাতাত', অর্থাৎ দানাটি নিজেই সাতটি শীষ 'গজাল'। অথচ প্রত্যেক শ্রোতাই জানত, কোনো দানা নিজে নিজে গজায় না। তাই প্রথম লাইন থেকেই আয়াত দানকে বসিয়ে দেয় এমন এক জগতে, যেখানে বাড়ানো আল্লাহর কাজ, দাতার নয়। বীজ মাটিতে চাপা দিলে যে আপাত ক্ষতি চোখে পড়ে, সেটাই আসলে বোনার স্বাভাবিক চেহারা।"
          }
        ]
      },
      {
        "h": {
          "en": "Seven Hundred From One",
          "bn": "এক থেকে সাতশত"
        },
        "p": [
          {
            "en": "The arithmetic is stated so that it can be done: seven ears with a hundred grains in each is seven hundred grains from a single seed. Ibn Kathir places beside the verse a report that Muslim narrates from Abu Mas'ud al-Ansari (RA): a man brought a haltered she-camel and said, \"This is in the way of Allah,\" and the Prophet ﷺ told him that on the Day of Resurrection he would have seven hundred she-camels, all of them haltered. The parable was not poetry alone; it was applied as a real rate.",
            "bn": "হিসাবটা এমনভাবে বলা, যেন হাতে-কলমে কষে দেখা যায়: সাতটি শীষ, প্রতিটিতে একশো দানা, অর্থাৎ একটি বীজ থেকে সাতশো দানা। ইবনে কাসীর আয়াতটির পাশে একটি বর্ণনা রাখেন, যা ইমাম মুসলিম আবু মাসউদ আল-আনসারী (রাঃ) থেকে বর্ণনা করেছেন: এক ব্যক্তি লাগাম পরানো একটি উটনী এনে বলল, \"এটা আল্লাহর পথে।\" নবী ﷺ তাকে বললেন, কিয়ামতের দিন সে সাতশো উটনী পাবে, যার প্রত্যেকটির লাগাম পরানো থাকবে। অর্থাৎ উপমাটা শুধু কাব্য ছিল না, সত্যিকারের হার হিসেবেই একে ধরা হয়েছিল।"
          },
          {
            "en": "Then the verse refuses to close the ledger: and Allah multiplies for whom He wills. Seven hundred is a floor for this door of deeds, not a ceiling, and what lies beyond it is left to His will — tied, as-Sa'di explains, to the giver's faith and sincerity and to the benefit the gift actually brings. The verse ends with two names, al-Wasi' al-'Alim: His giving is vast enough to afford all of this, and He knows exactly who gave what, from what, and why.",
            "bn": "এরপর আয়াত হিসাবের খাতা বন্ধ করে না: আর আল্লাহ যাকে চান, তার জন্য বহুগুণ বাড়িয়ে দেন। এই আমলের ক্ষেত্রে সাতশো হলো সর্বনিম্ন, সর্বোচ্চ নয়। এর ওপরে কতটা, তা তাঁর ইচ্ছার ওপর ছেড়ে দেওয়া। আস-সা'দী ব্যাখ্যা করেন, এটা নির্ভর করে দাতার ঈমান ও ইখলাসের ওপর, আর দানটা বাস্তবে কতটা উপকারে এল তার ওপর। আয়াত শেষ হয় দুটি নামে, আল-ওয়াসি' আল-'আলীম। তাঁর দান এত প্রশস্ত যে এ সবকিছু দেওয়া তাঁর জন্য কিছুই নয়, আর তিনি ঠিক ঠিক জানেন কে কী দিল, কোথা থেকে দিল, কেন দিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Guard the Gift",
          "bn": "যে আয়াতগুলো দানকে পাহারা দেয়"
        },
        "p": [
          {
            "en": "What follows shows that the harvest can be lost after the sowing. In 2:262 those who spend and do not follow their gift with reminders of favour or with injury are promised their reward with their Lord, with no fear and no grief. In 2:264 charity followed by reminders and hurt is likened to rain falling on a smooth stone carrying a little soil — the downpour leaves it bare and hard. Spending plants the seed, but pride and cruelty afterwards can strip the whole field.",
            "bn": "পরের আয়াতগুলো দেখায়, বীজ বোনার পরেও ফসল হাতছাড়া হতে পারে। ২:২৬২ আয়াতে বলা হয়েছে, যারা খরচ করে আর দানের পরে খোঁটা দেয় না, কষ্টও দেয় না, তাদের প্রতিদান তাদের রবের কাছে আছে, তাদের কোনো ভয় নেই, কোনো দুঃখও নেই। ২:২৬৪ আয়াত খোঁটা আর কষ্ট দেওয়া দানকে তুলনা করে সামান্য মাটি জমা মসৃণ পাথরের ওপর পড়া বৃষ্টির সঙ্গে: মুষলধারে বর্ষণ পাথরটাকে ন্যাড়া আর শক্ত করে রেখে যায়। খরচ করলে বীজ বোনা হয়, কিন্তু পরে অহংকার আর নিষ্ঠুরতা গোটা ক্ষেতটাই উজাড় করে দিতে পারে।"
          },
          {
            "en": "The passage then gives the opposite picture. In 2:265 those who spend seeking Allah's pleasure and the steadying of their own souls are like a garden on high ground: heavy rain doubles its fruit, and even a drizzle is enough for it. And in 2:271 both open and secret giving are honoured, with quiet giving to the poor called better for the giver. Read together, the passage teaches not only that we should give, but how a gift keeps its value once given.",
            "bn": "এরপর আলোচনাটা উল্টো ছবিটা দেখায়। ২:২৬৫ আয়াতে বলা হয়েছে, যারা আল্লাহর সন্তুষ্টি চেয়ে আর নিজেদের মনকে মজবুত করতে খরচ করে, তারা উঁচু জমির এক বাগানের মতো: ভারী বৃষ্টি হলে তার ফল দ্বিগুণ হয়, আর গুঁড়ি গুঁড়ি বৃষ্টিই তার জন্য যথেষ্ট। ২:২৭১ আয়াতে প্রকাশ্য ও গোপন দুই দানেরই মর্যাদা দেওয়া হয়েছে, তবে গরিবকে চুপচাপ দেওয়াকে দাতার জন্য বেশি ভালো বলা হয়েছে। সব মিলিয়ে পড়লে এই আলোচনা শুধু এটুকু শেখায় না যে আমাদের দান করা উচিত। শেখায়, দেওয়ার পরেও দান কীভাবে তার মূল্য ধরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wider Economy of Giving",
          "bn": "দানের বড় হিসাব"
        },
        "p": [
          {
            "en": "Other verses use the same daring language about the same act. In 2:245 spending is called a goodly loan to Allah, which He multiplies many times over; in 34:39 He promises that whatever you spend, He will replace it. The general rule for good deeds appears in 6:160 — whoever brings a good deed shall have ten times its like — while charity in this verse reaches seven hundred, which tells us how highly this particular deed ranks.",
            "bn": "অন্য আয়াতগুলোও এই একই আমল নিয়ে একই রকম সাহসী ভাষা ব্যবহার করে। ২:২৪৫ আয়াতে খরচ করাকে বলা হয়েছে আল্লাহকে উত্তম ঋণ দেওয়া, যা তিনি বহুগুণ বাড়িয়ে দেন। ৩৪:৩৯ আয়াতে তিনি ওয়াদা করেন, তোমরা যা-ই খরচ করো, তিনি তার বিনিময় দেবেন। নেক আমলের সাধারণ নিয়মটা আছে ৬:১৬০ আয়াতে: কেউ একটি নেকি নিয়ে এলে তার দশ গুণ পাবে। অথচ এই আয়াতে দানের প্রতিদান গিয়ে ঠেকে সাতশোতে। এ থেকেই বোঝা যায়, এই আমলটির মর্যাদা কত উঁচু।"
          },
          {
            "en": "The Prophet ﷺ said, in a hadith that Muslim narrates, that charity does not diminish wealth. And al-Bukhari narrates that two angels descend every morning, one praying, \"O Allah, give the one who spends a replacement,\" and the other, \"O Allah, give the one who withholds ruin.\" The seed-picture of 2:261 makes the same claim as an image: what has left the hand has not left the ledger, and the only spending that is truly gone is the spending that never happened.",
            "bn": "ইমাম মুসলিমের বর্ণিত হাদিসে নবী ﷺ বলেছেন, দান সম্পদ কমায় না। আর ইমাম বুখারী বর্ণনা করেছেন, প্রতিদিন সকালে দুজন ফেরেশতা নামেন। একজন দোয়া করেন, \"হে আল্লাহ, যে খরচ করে তাকে বিনিময় দিন,\" আর অন্যজন বলেন, \"হে আল্লাহ, যে আটকে রাখে তাকে ধ্বংস দিন।\" ২:২৬১ আয়াতের বীজের ছবি একই কথা বলে উপমার ভাষায়: যা হাত থেকে চলে গেছে, তা হিসাবের খাতা থেকে মুছে যায়নি। সত্যিকারের হারানো খরচ কেবল সেটাই, যা কখনো করাই হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Parable",
          "bn": "উপমাটা জীবনে আনা"
        },
        "p": [
          {
            "en": "A farmer does not grieve when the seed leaves his hand and disappears under the soil; he calls that day the beginning of the crop, not the loss of the grain. The verse asks the giver to feel the same way at the exact moment of parting with money, which is precisely the moment giving hurts. It also frees the small giver: a single grain is a tiny thing, and it is exactly the tiny thing that the parable chooses to magnify seven hundredfold.",
            "bn": "বীজ হাত থেকে ছেড়ে মাটির নিচে হারিয়ে গেলে কৃষক দুঃখ করে না। সে ওই দিনটাকে বলে ফসলের শুরু, দানা হারানোর দিন নয়। আয়াতটি দাতার কাছে ঠিক এই অনুভূতিই চায়, টাকা হাতছাড়া করার সেই মুহূর্তে, যখন দান করতে সবচেয়ে বেশি কষ্ট লাগে। আয়াতটি ছোট দাতাকেও সংকোচ থেকে মুক্তি দেয়। একটি দানা খুবই সামান্য জিনিস, আর উপমাটি ঠিক সেই সামান্য জিনিসটিকেই সাতশো গুণ বাড়িয়ে দেখায়।"
          },
          {
            "en": "The open clause — Allah multiplies for whom He wills — turns attention from the amount to the giver. Two people may give the same coin and sow very different harvests. So the practical work of this verse is inward and outward at once: find something to give today, keep it free of reminders and of show, and let the mathematics of seven ears and a hundred grains, together with whatever lies beyond them, remain what the verse leaves it — Allah's own business.",
            "bn": "আয়াতের খোলা অংশটি, আল্লাহ যাকে চান তার জন্য বহুগুণ বাড়িয়ে দেন, মনোযোগ সরিয়ে নেয় পরিমাণ থেকে দাতার দিকে। দুজন মানুষ একই মুদ্রা দান করে একেবারে আলাদা ফসল বুনতে পারে। তাই এই আয়াতের আমল একই সঙ্গে ভেতরের আর বাইরের। আজ দেওয়ার মতো কিছু খুঁজে নিন। সেটাকে খোঁটা আর লোক দেখানো থেকে মুক্ত রাখুন। আর সাত শীষ ও একশো দানার হিসাব, তার ওপরে যা কিছু আছে তা-সহ, আয়াত যেখানে রেখেছে সেখানেই থাকতে দিন: সেটা আল্লাহর নিজের ব্যাপার।"
          }
        ]
      }
    ]
  },
  "2:264": {
    "sections": [
      {
        "h": {
          "en": "A Call Inside the Spending Passage",
          "bn": "দানের আলোচনার মাঝে একটি ডাক"
        },
        "p": [
          {
            "en": "From 2:261 the surah speaks of spending in a continuous passage that runs to 2:274. It opens with the seed of seven ears, and then it begins to protect what has been sown. 2:262 promises reward to those who do not follow their spending with reminders or injury. 2:263 says that a kind word and forgiveness are better than charity followed by injury, and that Allah is Free of need and Forbearing. Our verse then turns to the listeners with a direct call, the first ya ayyuha alladhina amanu since 2:254.",
            "bn": "২:২৬১ আয়াত থেকে সূরাটি একটানা দানের কথা বলে চলে, আর এ আলোচনা গিয়ে থামে ২:২৭৪ আয়াতে। শুরুতে আসে সাত শীষের বীজের উপমা, তারপর শুরু হয় বপন করা ফসলকে রক্ষার কথা। ২:২৬২ আয়াত প্রতিদানের ওয়াদা দেয় তাদের, যারা দানের পেছনে খোঁটা বা কষ্ট জুড়ে দেয় না। ২:২৬৩ আয়াত বলে, যে দানের পর কষ্ট দেওয়া হয় তার চেয়ে ভালো কথা আর ক্ষমা উত্তম, আর আল্লাহ অভাবমুক্ত, পরম সহনশীল। এরপর আমাদের আয়াত শ্রোতাদের সরাসরি ডাকে। ২:২৫৪ আয়াতের পর 'ইয়া আইয়ুহাল্লাযীনা আমানূ' সম্বোধন এখানেই প্রথম।"
          },
          {
            "en": "Two more parables follow the verse. 2:265 likens the spending of those who seek Allah's pleasure to a garden on high ground, and 2:266 asks whether anyone would wish to own a rich garden, grow old with weak children, and then see it burned by a fiery whirlwind. No occasion of revelation is established for 2:264. Its force lies in its position: after the promise of increase and before the two gardens, it names what can erase the increase altogether.",
            "bn": "আয়াতটির পরে আসে আরও দুটি উপমা। ২:২৬৫ আয়াত আল্লাহর সন্তুষ্টি চেয়ে যারা খরচ করে তাদের দানকে তুলনা করে উঁচু জমির বাগানের সঙ্গে। ২:২৬৬ আয়াত জিজ্ঞেস করে, কেউ কি চাইবে তার একটা ফলভরা বাগান থাকুক, সে বুড়ো হয়ে যাক, সন্তানেরা থাকুক দুর্বল, আর তারপর আগুনে ঝড় এসে বাগানটা পুড়িয়ে দিক? ২:২৬৪ আয়াতের কোনো প্রতিষ্ঠিত শানে নুযুল নেই। এর জোর এর অবস্থানে। বৃদ্ধির ওয়াদার পরে আর দুই বাগানের আগে এসে আয়াতটি সেই জিনিসের নাম বলে দেয়, যা পুরো বৃদ্ধিকেই মুছে দিতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Mann, Adha and a Smooth Rock",
          "bn": "মান্ন, আযা আর মসৃণ পাথর"
        },
        "p": [
          {
            "en": "La tubtilu sadaqatikum: do not make your charities batil, void, as though they had never been given. Two causes are named together. Al-mann is reminding someone of a favour you did them, holding it over them, and Ibn Kathir notes that it may be done in words or in actions. Al-adha is injury of any kind. The root of mann returns in 49:17, where certain people consider their Islam a favour to the Prophet ﷺ, and they are told that it is Allah who has conferred favour upon them by guiding them to faith.",
            "bn": "'লা তুবতিলূ সাদাকাতিকুম': তোমাদের দানকে বাতিল করে দিয়ো না, যেন তা কখনো দেওয়াই হয়নি। দুটি কারণ একসঙ্গে বলা হয়েছে। 'আল-মান্ন' মানে কারও প্রতি করা অনুগ্রহের কথা তাকে মনে করিয়ে দেওয়া, খোঁটা দিয়ে তার মাথার ওপর ঝুলিয়ে রাখা; ইবনে কাসীর বলেন তা কথায়ও হতে পারে, কাজেও। 'আল-আযা' মানে যেকোনো ধরনের কষ্ট। 'মান্ন' ধাতুটি আবার এসেছে ৪৯:১৭ আয়াতে। সেখানে কিছু লোক নবী ﷺ-এর প্রতি নিজেদের ইসলাম গ্রহণকে অনুগ্রহ মনে করে, আর তাদের বলা হয়: বরং আল্লাহই তোমাদের ঈমানের পথ দেখিয়ে তোমাদের প্রতি অনুগ্রহ করেছেন।"
          },
          {
            "en": "Then comes ka-lladhi yunfiqu malahu ri'a'a an-nas: like the one who spends his wealth to be seen by people and does not believe in Allah and the Last Day. The picture that follows is exact. A safwan is a smooth rock. On it lies turab, a layer of soil. A wabil, a heavy downpour, strikes it and leaves it salda, bare and hard. From a distance the dusty rock resembles ground that could be planted. One real rain shows what was underneath all along.",
            "bn": "তারপর আসে 'কাল্লাযী ইউনফিকু মালাহূ রিআআন নাস': সেই লোকের মতো, যে মানুষকে দেখানোর জন্য নিজের সম্পদ খরচ করে, আর আল্লাহ ও শেষ দিনে বিশ্বাস রাখে না। এরপরের ছবিটা নিখুঁত। 'সাফওয়ান' হলো মসৃণ পাথর। তার ওপর থাকে 'তুরাব', মাটির পাতলা স্তর। 'ওয়াবিল', অর্থাৎ মুষলধারে বৃষ্টি, তাকে আঘাত করে আর রেখে যায় 'সালদ', ন্যাড়া আর শক্ত। দূর থেকে ধুলোমাখা পাথরটাকে চাষযোগ্য জমির মতো লাগে। একটা আসল বৃষ্টিই দেখিয়ে দেয়, নিচে আসলে সব সময় কী ছিল।"
          },
          {
            "en": "Two features of the wording carry the point further. The simile begins in the singular, his example, and ends in the plural, la yaqdiruna 'ala shay'in mimma kasabu, they are unable to keep anything of what they earned, so the one man stands for a whole kind of people. And the downpour here is the same wabil that, in the very next verse, falls on the garden on high ground and doubles its fruit. The rain does not change between the two verses. The ground does.",
            "bn": "শব্দচয়নের দুটি দিক কথাটাকে আরও এগিয়ে নেয়। উপমাটা শুরু হয় একবচনে, 'তার উদাহরণ', আর শেষ হয় বহুবচনে, 'লা ইয়াকদিরূনা আলা শাইইম মিম্মা কাসাবূ', তারা যা উপার্জন করেছে তার কিছুই ধরে রাখতে পারবে না। তাই একজন মানুষ এখানে গোটা এক ধরনের মানুষের প্রতিনিধি। আর এখানকার মুষলধারে বৃষ্টি সেই একই 'ওয়াবিল', যা ঠিক পরের আয়াতে উঁচু জমির বাগানে পড়ে তার ফল দ্বিগুণ করে। দুই আয়াতের মাঝে বৃষ্টি বদলায় না। বদলায় মাটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of the Rock",
          "bn": "পাথরের দুই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse as a warning that charity is rendered void when harm or reminders follow it, because the reward of the giving is not enough to cancel the harm done afterwards. In his reading the rock is first the likeness of the one who gives to be seen: such a person pretends to give for Allah while seeking praise and a name for generosity, and his deeds vanish even though people suppose them as plentiful as dust. He also records that ad-Dahhak applied the likeness to the one who follows his charity with reminders or injury.",
            "bn": "ইবনে কাসীর আয়াতটিকে পড়েন সতর্কবার্তা হিসেবে: দানের পরে কষ্ট বা খোঁটা এলে দান বাতিল হয়ে যায়, কারণ দেওয়ার সওয়াব পরে দেওয়া কষ্টকে মুছে দেওয়ার জন্য যথেষ্ট নয়। তাঁর ব্যাখ্যায় পাথরটা প্রথমত সেই লোকের উপমা, যে দেখানোর জন্য দেয়। এমন লোক ভান করে যে আল্লাহর জন্য দিচ্ছে, অথচ চায় প্রশংসা আর দানশীল হিসেবে নাম। মানুষ তার আমলকে ধুলোর মতো প্রচুর ভাবলেও তা মিলিয়ে যায়। তিনি এটাও উল্লেখ করেন যে দাহহাক উপমাটিকে প্রয়োগ করেছেন সেই লোকের ওপরও, যে দানের পেছনে খোঁটা বা কষ্ট জুড়ে দেয়।"
          },
          {
            "en": "As-Sa'di reads the rock through the heart. The heart of the one who gives for show is like that smooth stone under its coat of earth: it looks as if it could soften and grow something, but it is hard, and one downpour exposes it. He then lays the three parables of the passage side by side as a single scale. The garden on high ground is the deed built on faith and sincerity and kept free of what spoils it. The burned garden of 2:266 is the deed that had that foundation and was destroyed afterwards.",
            "bn": "আস-সা'দী পাথরটাকে পড়েন অন্তরের দিক থেকে। লোক দেখানো দাতার অন্তর মাটির আস্তরে ঢাকা সেই মসৃণ পাথরের মতো। মনে হয় নরম হয়ে কিছু গজাতে পারবে, অথচ ভেতরে শক্ত, আর এক পশলা ভারী বৃষ্টিই তা প্রকাশ করে দেয়। এরপর তিনি এই অংশের তিনটি উপমা পাশাপাশি রাখেন একটি মাপকাঠি হিসেবে। উঁচু জমির বাগান হলো ঈমান ও ইখলাসের ওপর দাঁড়ানো আমল, যা নষ্ট করার সব কিছু থেকে মুক্ত। ২:২৬৬ আয়াতের পুড়ে যাওয়া বাগান হলো সেই আমল, যার ভিত ঠিকই ছিল, কিন্তু পরে ধ্বংস হয়ে গেছে।"
          },
          {
            "en": "The rock of 2:264, for as-Sa'di, is the deed that lacked the foundation from the start, the condition without which no deed benefits the one who does it. The difference between the two commentators is one of emphasis rather than contradiction. Ibn Kathir keeps the believer who reminds and wounds in view through ad-Dahhak; as-Sa'di separates the believer whose sound gift is later ruined from the show-off whose gift was never sound. Read together, they give the verse both of its edges.",
            "bn": "আস-সা'দীর কাছে ২:২৬৪ আয়াতের পাথর হলো সেই আমল, যার শুরু থেকেই ভিত ছিল না। আর এই ভিত এমন শর্ত, যা ছাড়া কোনো আমল আমলকারীর কাজে আসে না। দুই মুফাসসিরের পার্থক্যটা বিরোধের নয়, জোর দেওয়ার। ইবনে কাসীর দাহহাকের সূত্রে খোঁটা দেওয়া আর কষ্ট দেওয়া মুমিনকেও চোখের সামনে রাখেন। আস-সা'দী আলাদা করেন দুজনকে: যে মুমিনের ঠিকঠাক দান পরে নষ্ট হয়, আর যে লোক দেখানো দাতার দান কখনো ঠিকই ছিল না। দুটো একসঙ্গে পড়লে আয়াতের দুই ধারই সামনে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reminder and the Reputation",
          "bn": "খোঁটা আর নামের লোভ"
        },
        "p": [
          {
            "en": "Ibn Kathir brings to this passage a hadith that Muslim records from Abu Dharr (RA). The Prophet ﷺ said that there are three to whom Allah will not speak on the Day of Resurrection, at whom He will not look, and whom He will not purify, and they will have a painful punishment. He named them: the one who lets his lower garment trail, the one who reminds people of what he gave, and the one who sells his goods with a false oath. Al-mannan, the one who reminds, is counted among them.",
            "bn": "ইবনে কাসীর এই অংশে একটি হাদিস আনেন, যা ইমাম মুসলিম আবু যার (রাঃ) থেকে বর্ণনা করেছেন। নবী ﷺ বলেছেন, তিন ধরনের মানুষের সঙ্গে আল্লাহ কিয়ামতের দিন কথা বলবেন না, তাদের দিকে তাকাবেন না, তাদের পবিত্র করবেন না, আর তাদের জন্য আছে যন্ত্রণাদায়ক শাস্তি। তিনি তাদের পরিচয় দিলেন: যে নিজের পরনের কাপড় ঝুলিয়ে টেনে চলে, যে দান করে খোঁটা দেয়, আর যে মিথ্যা কসম খেয়ে পণ্য বিক্রি করে। খোঁটা দেওয়া দাতা, 'আল-মান্নান', এদেরই একজন।"
          },
          {
            "en": "The other half of the verse, spending to be seen by people, has its own warning in a hadith that Muslim records from Abu Hurayrah (RA) about the first people to be judged on the Day of Resurrection. Among them is a man to whom Allah gave wealth of every kind. He is asked what he did with it and says he spent in every path in which Allah loves spending. He is told that he lied: he gave so that it would be said he is generous, and it was said. Then he is dragged on his face into the Fire.",
            "bn": "আয়াতের বাকি অর্ধেক, মানুষকে দেখানোর জন্য খরচ করা, তা নিয়ে আলাদা সতর্কবার্তা আছে একটি হাদিসে। ইমাম মুসলিম আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন, কিয়ামতের দিন সবার আগে যাদের বিচার হবে তাদের মধ্যে আছে এক ব্যক্তি, যাকে আল্লাহ সব রকমের সম্পদ দিয়েছিলেন। তাকে জিজ্ঞেস করা হবে, সে সম্পদ দিয়ে কী করেছে। সে বলবে, আল্লাহ যে যে পথে খরচ ভালোবাসেন তার প্রতিটিতে খরচ করেছে। তাকে বলা হবে, তুমি মিথ্যা বলেছ, তুমি দিয়েছিলে যাতে লোকে বলে লোকটা দানশীল, আর তা বলা হয়ে গেছে। তারপর তাকে উপুড় করে টেনে আগুনে ফেলা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Guard the Deed",
          "bn": "আমলের পাহারাদার আয়াতগুলো"
        },
        "p": [
          {
            "en": "4:38 describes the same person in almost the same words: those who spend their wealth to be seen by people and believe neither in Allah nor in the Last Day, and it adds that whoever has Satan for a companion has an evil companion. 47:33 gives the believers the command in general form, obey Allah and obey the Messenger and do not invalidate your deeds, with the same verb as our verse. What 2:264 says about charity, 47:33 says about every deed a believer does.",
            "bn": "৪:৩৮ আয়াত প্রায় একই শব্দে একই মানুষের বর্ণনা দেয়: যারা মানুষকে দেখানোর জন্য নিজেদের সম্পদ খরচ করে, আর আল্লাহ ও আখিরাতে বিশ্বাস রাখে না। সঙ্গে যোগ করে, শয়তান যার সঙ্গী, সে সঙ্গী কতই না মন্দ। ৪৭:৩৩ আয়াত মুমিনদের হুকুমটা দেয় সাধারণভাবে: আল্লাহর আনুগত্য করো, রাসূলের আনুগত্য করো, আর নিজেদের আমল নষ্ট করো না। ক্রিয়াটা আমাদের আয়াতেরই। ২:২৬৪ আয়াত দানের ব্যাপারে যা বলে, ৪৭:৩৩ আয়াত তা বলে মুমিনের প্রতিটি আমলের ব্যাপারে।"
          },
          {
            "en": "14:18 uses nearly the same closing clause for the deeds of those who disbelieve in their Lord: they are like ashes that the wind blows hard on a stormy day, and they are unable to keep anything of what they earned. 2:266 carries the warning to believers. Al-Bukhari records that Umar (RA) asked the Companions whom that verse concerned, and Ibn Abbas (RA) said it was a likeness struck for a deed. The report goes on to explain it as a rich man who worked in obedience to Allah, then fell into sins until they drowned his good deeds.",
            "bn": "১৪:১৮ আয়াত প্রায় একই শেষ বাক্য ব্যবহার করে তাদের আমলের জন্য, যারা নিজেদের রবকে অস্বীকার করে: ঝড়ের দিনে প্রবল বাতাসে উড়ে যাওয়া ছাইয়ের মতো, উপার্জনের কিছুই তারা কাজে লাগাতে পারে না। ২:২৬৬ আয়াত সতর্কবার্তাটা মুমিনদের দিকে নিয়ে আসে। ইমাম বুখারী বর্ণনা করেছেন, উমর (রাঃ) সাহাবিদের জিজ্ঞেস করেছিলেন আয়াতটি কাদের ব্যাপারে। ইবনে আব্বাস (রাঃ) বললেন, এটি একটি আমলের উপমা। বর্ণনাটি এর ব্যাখ্যা দেয় এমন এক ধনী লোক দিয়ে, যে আল্লাহর আনুগত্যে আমল করত, তারপর গুনাহে জড়িয়ে পড়ল, শেষে সেই গুনাহ তার নেক আমলগুলো ডুবিয়ে দিল।"
          },
          {
            "en": "Against all of these stands 76:9, the words of those who feed the needy, the orphan and the captive: we feed you only for the face of Allah, and we want from you neither reward nor thanks. There is no room for a reminder in that sentence, because nothing is owed back. And 74:6, from the early instructions to the Prophet ﷺ, uses the root of mann itself: do not confer a favour to acquire more. The defect that 2:264 names was already being guarded against in some of the first commands the Quran gave.",
            "bn": "এসবের বিপরীতে দাঁড়িয়ে আছে ৭৬:৯ আয়াত, মিসকিন, ইয়াতিম আর বন্দিকে যারা খাওয়ায় তাদের কথা: আমরা তোমাদের খাওয়াই শুধু আল্লাহর সন্তুষ্টির জন্য, তোমাদের কাছে কোনো প্রতিদান চাই না, কৃতজ্ঞতাও না। এই বাক্যে খোঁটার জায়গা নেই, কারণ বদলে কিছু পাওনা নেই। আর নবী ﷺ-কে দেওয়া প্রথম দিকের নির্দেশগুলোর মধ্যে ৭৪:৬ আয়াতে 'মান্ন' ধাতুটিই এসেছে: বেশি পাওয়ার আশায় অনুগ্রহ করো না। ২:২৬৪ আয়াত যে দোষের নাম বলে, কুরআনের প্রথম দিকের কিছু নির্দেশেই তার বিরুদ্ধে পাহারা বসানো হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Giving Without an Invoice",
          "bn": "হিসাবের খাতা ছাড়া দান"
        },
        "p": [
          {
            "en": "Reminders rarely sound like reminders. They sound like after everything I have done for you, said in an argument years later. They sound like a relative mentioning at a family gathering who paid for whose wedding. They are the expectation that the person you helped will now agree with you, visit you first, or never refuse you. Adha is often quieter still: the long wait before the envelope is handed over, the questions that make someone justify being poor, the photograph taken while they receive a food parcel.",
            "bn": "খোঁটা সাধারণত খোঁটার মতো শোনায় না। শোনায় এমন: তোমার জন্য কী না করেছি, কথাটা হয়তো বহু বছর পরে কোনো ঝগড়ায় বলা। শোনায় পারিবারিক আসরে কোনো আত্মীয়ের মুখে, কার বিয়ের খরচ কে দিয়েছিল সেই প্রসঙ্গে। খোঁটা হলো এই প্রত্যাশা যে যাকে সাহায্য করেছি সে এখন আমার কথায় সায় দেবে, আগে আমার বাড়ি আসবে, কখনো না বলবে না। কষ্ট দেওয়া অনেক সময় আরও নিঃশব্দ: খাম হাতে দেওয়ার আগে লম্বা অপেক্ষা, এমন প্রশ্ন যাতে মানুষটাকে নিজের অভাবের কৈফিয়ত দিতে হয়, ত্রাণের প্যাকেট নেওয়ার মুহূর্তে তোলা ছবি।"
          },
          {
            "en": "The verse points to practices that are simple to name and hard to keep. Once you have given, stop mentioning the gift, to the one who received it and to anyone else. If you notice yourself keeping an account in your head, give that same person something more, secretly, and keep no record of it. When you cannot give without resentment, take the path of 2:263 instead: a kind word and forgiveness are better than a gift followed by hurt. And when you organise charity, make dignity part of the plan, so that no one pays for help with humiliation.",
            "bn": "আয়াতটি এমন কিছু অভ্যাসের দিকে ইশারা করে, যার নাম বলা সহজ কিন্তু ধরে রাখা কঠিন। একবার দিয়ে ফেললে দানের কথা আর তুলবেন না, গ্রহীতার কাছেও না, অন্য কারও কাছেও না। মনে মনে হিসাব রাখছেন টের পেলে একই মানুষকে গোপনে আরও কিছু দিন, আর সেটার কোনো হিসাব রাখবেন না। মনে ক্ষোভ না রেখে দিতে না পারলে ২:২৬৩ আয়াতের পথ ধরুন: কষ্ট দেওয়া দানের চেয়ে ভালো কথা আর ক্ষমা উত্তম। আর দানের আয়োজন করলে সম্মান রক্ষাকে পরিকল্পনার অংশ বানান, যাতে কাউকে অপমান দিয়ে সাহায্যের দাম চুকাতে না হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a for Soft Ground",
          "bn": "নরম মাটির জন্য দোয়া"
        },
        "p": [
          {
            "en": "The commentators attach no particular du'a to this verse, so what follows is a supplication composed for this article in the verse's own vocabulary, not a transmitted one: O Allah, do not let us make our charity void with reminders or with hurt. Do not make our hearts like the smooth rock under its thin soil. Make them like the garden on high ground, which a downpour doubles and a drizzle is enough for. Accept from us what we give for Your face alone, and hide it even from ourselves.",
            "bn": "মুফাসসিররা এই আয়াতের সঙ্গে বিশেষ কোনো দোয়া জুড়ে দেননি। তাই নিচের দোয়াটি এই লেখার জন্য আয়াতের শব্দ থেকেই সাজানো, বর্ণিত কোনো দোয়া নয়: হে আল্লাহ, খোঁটা বা কষ্ট দিয়ে আমাদের দান নষ্ট হতে দেবেন না। আমাদের অন্তরকে পাতলা মাটির নিচের মসৃণ পাথরের মতো বানাবেন না। বানিয়ে দিন উঁচু জমির সেই বাগানের মতো, মুষলধারে বৃষ্টি যার ফল দ্বিগুণ করে আর গুঁড়ি গুঁড়ি বৃষ্টিই যার জন্য যথেষ্ট। শুধু আপনার সন্তুষ্টির জন্য যা দিই তা কবুল করুন, আর তা আমাদের নিজেদের কাছ থেকেও লুকিয়ে রাখুন।"
          },
          {
            "en": "The Sunnah describes the giver that such a du'a hopes to make. Al-Bukhari records from Abu Hurayrah (RA) that among the seven whom Allah will shade on the day when there is no shade but His is a man who gives charity so secretly that his left hand does not know what his right hand has given. A gift that the giver's own left hand has not heard about is a gift he will never mention, and nothing is left on that ground for the rain to wash away.",
            "bn": "এমন দোয়া যে দাতা গড়ে তুলতে চায়, সুন্নাহ তার ছবি এঁকে দেয়। ইমাম বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন, যেদিন আল্লাহর ছায়া ছাড়া আর কোনো ছায়া থাকবে না, সেদিন তিনি যে সাতজনকে ছায়া দেবেন তাদের একজন সেই ব্যক্তি, যে এত গোপনে দান করে যে তার ডান হাত কী দিল বাম হাত তা জানে না। দাতার নিজের বাম হাতই যে দানের খবর পায়নি, সে দানের কথা সে কখনো মুখে আনবে না। সে মাটিতে বৃষ্টির ধুয়ে নেওয়ার মতো কিছুই থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Before the Rain",
          "bn": "বৃষ্টির আগে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "Which of my past gifts would I be ashamed for the person who received it to hear me mention? When I help someone, what do I quietly expect in return: thanks, loyalty, deference, a reputation? If I knew for certain that nobody would ever learn what I gave this year, would the amount change? Have I ever made someone stand, wait, explain or be photographed as the price of what I gave them?",
            "bn": "আমার আগের কোন দানের কথা মুখে আনতে আমার লজ্জা লাগবে, যদি গ্রহীতা তা শুনে ফেলে? কাউকে সাহায্য করলে বিনিময়ে চুপচাপ কী আশা করি: ধন্যবাদ, আনুগত্য, সমীহ, নাকি সুনাম? যদি নিশ্চিত জানতাম, এ বছর কী দিয়েছি তা কেউ কোনো দিন জানবে না, তাহলে কি পরিমাণটা বদলে যেত? কাউকে কি কখনো দাঁড় করিয়ে রেখে, অপেক্ষা করিয়ে, কৈফিয়ত চেয়ে বা ছবি তুলে আমার দানের দাম আদায় করেছি?"
          },
          {
            "en": "Is the ground of my heart soil, or stone under a thin layer of soil, and what did the last heavy rain in my life reveal about it? When I cannot give without resentment, do I at least offer the kind word and the pardon that 2:263 calls better? And is there a gift I have already spoiled with reminders, for which I should now ask Allah's forgiveness and the pardon of the one I hurt?",
            "bn": "আমার অন্তরের জমি কি আসল মাটি, নাকি পাতলা মাটির আস্তরে ঢাকা পাথর? জীবনের শেষ ভারী বৃষ্টিটা এ ব্যাপারে কী প্রকাশ করে দিয়েছে? ক্ষোভ ছাড়া দিতে না পারলে অন্তত কি ২:২৬৩ আয়াতের সেই ভালো কথা আর ক্ষমাটুকু দিই, যাকে উত্তম বলা হয়েছে? আর এমন কোনো দান কি আছে যা ইতিমধ্যে খোঁটা দিয়ে নষ্ট করে ফেলেছি, যার জন্য এখন আল্লাহর কাছে মাফ চাওয়া আর যাকে কষ্ট দিয়েছি তার কাছে ক্ষমা চাওয়া উচিত?"
          }
        ]
      }
    ]
  },
  "2:273": {
    "sections": [
      {
        "h": {
          "en": "Whom the Spending Is For",
          "bn": "দানটা কাদের জন্য"
        },
        "p": [
          {
            "en": "The spending passage that began at 2:261 is drawing to its close. 2:271 has said that giving openly is good and giving secretly to the poor is better. 2:272 has told the Prophet ﷺ that guiding people is not his responsibility, and has told the believers that whatever good they spend is for themselves, that they spend only seeking the face of Allah, and that it will be repaid to them in full. Our verse then answers a question the passage has not yet asked aloud: who should receive it?",
            "bn": "২:২৬১ আয়াতে শুরু হওয়া দানের আলোচনা শেষের দিকে এসে পড়েছে। ২:২৭১ আয়াত বলেছে, প্রকাশ্যে দান করা ভালো, আর গোপনে অভাবীদের দেওয়া আরও ভালো। ২:২৭২ আয়াত নবী ﷺ-কে জানিয়েছে, মানুষকে হেদায়াত দেওয়া তাঁর দায়িত্ব নয়। আর মুমিনদের বলেছে, ভালো যা কিছু তারা খরচ করে তা তাদের নিজেদেরই জন্য, তারা খরচ করে শুধু আল্লাহর সন্তুষ্টি চেয়ে, আর তার পুরো প্রতিদান তাদের দেওয়া হবে। এরপর আমাদের আয়াত এমন এক প্রশ্নের জবাব দেয়, যা আলোচনাটা এখনো মুখ ফুটে জিজ্ঞেস করেনি: দানটা পাবে কারা?"
          },
          {
            "en": "After it, 2:274 praises those who spend by night and by day, secretly and publicly, and promises them no fear and no grief. Straight after that, 2:275 turns to those who consume riba, so the giving that asks nothing back is set directly beside the lending that demands more. No established occasion of revelation is reported for 2:273. Ibn Kathir identifies the people it describes as the emigrants who had come to Madinah for Allah and His Messenger and had no means sufficient to support themselves.",
            "bn": "এর পরে ২:২৭৪ আয়াত প্রশংসা করে তাদের, যারা রাতে ও দিনে, গোপনে ও প্রকাশ্যে খরচ করে, আর ওয়াদা দেয় যে তাদের কোনো ভয় নেই, দুঃখও নেই। ঠিক তার পরেই ২:২৭৫ আয়াত সুদখোরদের কথায় যায়। ফলে কিছুই ফেরত না চাওয়া দানের ঠিক পাশে বসেছে বেশি ফেরত দাবি করা ঋণ। ২:২৭৩ আয়াতের কোনো প্রতিষ্ঠিত শানে নুযুল বর্ণিত নেই। ইবনে কাসীর আয়াতে বর্ণিত মানুষদের চিহ্নিত করেন সেই মুহাজিরদের সঙ্গে, যাঁরা আল্লাহ ও তাঁর রাসূলের জন্য মদিনায় এসেছিলেন, অথচ নিজেদের চালানোর মতো যথেষ্ট সম্বল তাঁদের ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Held Back, Unable to Travel",
          "bn": "আটকে পড়া, সফরে অক্ষম"
        },
        "p": [
          {
            "en": "The verse opens li-l-fuqara', for the poor, without saying what is for them. The subject is left unspoken because the passage has already supplied it, the spending of 2:272, and translations fill it in. The same words, li-l-fuqara', appear in 9:60 at the head of the list of those entitled to zakah. The first description is alladhina uhsiru fi sabilillah, those who have been held back in the cause of Allah. Uhsiru comes from the same root as uhsirtum in 2:196, where pilgrims are prevented from completing their rites.",
            "bn": "আয়াতটি শুরু হয় 'লিল-ফুকারা' দিয়ে, অর্থাৎ অভাবীদের জন্য, কিন্তু কী তাদের জন্য তা বলে না। সেটা উহ্য রাখা হয়েছে, কারণ আলোচনা আগেই তা জানিয়ে দিয়েছে: ২:২৭২ আয়াতের খরচ। অনুবাদগুলো তা পূরণ করে নেয়। একই শব্দ 'লিল-ফুকারা' আছে ৯:৬০ আয়াতে, যাকাতের হকদারদের তালিকার শুরুতে। প্রথম বিবরণ 'আল্লাযীনা উহসিরূ ফী সাবীলিল্লাহ', যারা আল্লাহর পথে আটকে আছে। 'উহসিরূ' এসেছে সেই ধাতু থেকে, যা থেকে এসেছে ২:১৯৬ আয়াতের 'উহসিরতুম', যেখানে হজযাত্রীরা হজ-উমরাহ পূর্ণ করতে বাধা পায়।"
          },
          {
            "en": "Then la yastati'una darban fi al-ard, they are unable to strike out in the land. Darb fi al-ard is the Arabic idiom for travelling, especially travelling to trade and earn. Ibn Kathir points to 4:101, where the same expression describes journeys on which the prayer may be shortened, and to 73:20, where it describes those travelling through the land seeking Allah's bounty. These poor are not idle. Whatever holds them in Allah's cause has taken away the ordinary road to a livelihood, and the verse asks others to stand in its place.",
            "bn": "তারপর 'লা ইয়াসতাতীঊনা দারবান ফিল আরদ', তারা দেশে বেরিয়ে পড়তে পারে না। 'দারব ফিল আরদ' আরবিতে সফরের বাগধারা, বিশেষ করে ব্যবসা আর রোজগারের জন্য সফর। ইবনে কাসীর দেখান ৪:১০১ আয়াত, যেখানে একই শব্দবন্ধ এমন সফর বোঝায় যাতে নামাজ কসর করা যায়। আর দেখান ৭৩:২০ আয়াত, যেখানে তা বোঝায় আল্লাহর অনুগ্রহের খোঁজে দেশে ঘুরে বেড়ানো মানুষদের। এই অভাবীরা অলস নয়। আল্লাহর পথে যা তাদের আটকে রেখেছে, তা রোজগারের সাধারণ রাস্তাটাই কেড়ে নিয়েছে, আর আয়াত অন্যদের বলছে সেই জায়গাটা পূরণ করতে।"
          },
          {
            "en": "Yahsabuhum al-jahil aghniya'a min at-ta'affuf: the one who does not know takes them for rich because of their restraint. Jahil here is not a fool but someone unaware of their situation, as Ibn Kathir explains it. Ta'affuf comes from 'iffah in a form that suggests effort: holding oneself back, with some struggle, from what does not befit one. Then the address shifts from the plural to a single listener: ta'rifuhum bi-simahum, you will know them by their mark. The crowd is misled, but the one who looks closely is not, and the verse speaks to that one.",
            "bn": "'ইয়াহসাবুহুমুল জাহিলু আগনিয়াআ মিনাত তাআফফুফ': যে জানে না, সে তাদের সংযমের কারণে তাদের ধনী মনে করে। এখানে 'জাহিল' মানে বোকা নয়, বরং এমন কেউ যে তাদের অবস্থা জানে না, ইবনে কাসীর এভাবেই ব্যাখ্যা করেন। 'তাআফফুফ' এসেছে 'ইফফাহ' থেকে, এমন এক গঠনে যা চেষ্টার ইঙ্গিত দেয়: যা নিজের জন্য মানানসই নয়, কষ্ট করে হলেও তা থেকে নিজেকে বিরত রাখা। এরপর সম্বোধন বহুবচন থেকে সরে আসে একজন শ্রোতার দিকে: 'তা'রিফুহুম বি-সীমাহুম', তুমি তাদের লক্ষণ দেখে চিনবে। ভিড় ভুল বোঝে, কিন্তু যে মনোযোগ দিয়ে দেখে সে ভুল বোঝে না, আর আয়াত কথা বলছে তার সঙ্গেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Ilhaf and Its Two Readings",
          "bn": "ইলহাফ আর তার দুই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "The last description is la yas'aluna an-nasa ilhafa. Ilhaf is asking with insistence, pressing a request on someone and not letting go, and Arabic lexicographers connect it with lihaf, the heavy covering that wraps itself around a person. Ibn Kathir explains that they do not beg and so do not demand of people more than they need, and he adds that whoever asks people while having what suffices him has asked with ilhaf.",
            "bn": "শেষ বিবরণ 'লা ইয়াসআলূনান নাসা ইলহাফা'। 'ইলহাফ' মানে নাছোড় হয়ে চাওয়া, কারও ওপর আবদার চাপিয়ে দিয়ে আর ছাড়তে না চাওয়া। আরবি অভিধানবিদরা শব্দটিকে যুক্ত করেন 'লিহাফ' শব্দের সঙ্গে, অর্থাৎ ভারী চাদর, যা মানুষকে জড়িয়ে ঢেকে ফেলে। ইবনে কাসীর ব্যাখ্যা করেন, তারা ভিক্ষা করে না, তাই প্রয়োজনের বেশি মানুষের কাছে দাবিও করে না। তিনি যোগ করেন, নিজের প্রয়োজন মেটানোর মতো সম্বল থাকা সত্ত্বেও যে মানুষের কাছে চায়, সে-ই ইলহাফ করে চাইল।"
          },
          {
            "en": "As-Sa'di states one reading plainly: these are people who do not beg, and if acute need does force them to ask, they still do not insist. A second reading takes the negation further, so that they do not ask people at all. Ash-Shawkani records it in Fath al-Qadir, with the reasoning that the verse has just described them by a restraint so complete that the unaware take them for rich. Both readings describe dignity. They differ only on whether a single gentle request, made from real need, would break it.",
            "bn": "আস-সা'দী একটি ব্যাখ্যা সোজাসুজি বলেন: এরা ভিক্ষা করে না, আর তীব্র অভাব যদি চাইতে বাধ্যও করে, তবু নাছোড় হয় না। দ্বিতীয় ব্যাখ্যাটি না-বাচক কথাটিকে আরও দূরে নিয়ে যায়: তারা মানুষের কাছে আদৌ চায় না। শাওকানী ফাতহুল কাদীরে এই মত উল্লেখ করেছেন। যুক্তি হলো, আয়াত একটু আগেই তাদের এমন পূর্ণ সংযমের কথা বলেছে যে না জানা লোকেরা তাদের ধনী ভাবে। দুটি ব্যাখ্যাই আত্মসম্মানের ছবি আঁকে। তফাত শুধু এটুকু, সত্যিকার প্রয়োজনে নরম করে একবার চাইলে সেই সম্মান ভাঙে কি না।"
          },
          {
            "en": "On who they are, the commentators widen the circle with care. Ibn Kathir names the emigrants in Madinah. As-Sa'di describes a kind of person rather than a historical group: people occupied with work in Allah's cause who have no chance, or no wish, to spend their time on earning, and who keep their restraint regardless. He calls them the most deserving of charity, since it frees them for their aims and thanks them for resting their hope on the Creator rather than on creation. He adds that giving to every other good cause and every other needy person is rewarded too.",
            "bn": "এরা কারা, সে প্রশ্নে মুফাসসিররা সাবধানে পরিধি বাড়ান। ইবনে কাসীর নাম নেন মদিনার মুহাজিরদের। আস-সা'দী ঐতিহাসিক দলটির বদলে এক ধরনের মানুষের বর্ণনা দেন: আল্লাহর পথের কাজে ব্যস্ত এমন মানুষ, রোজগারে সময় দেওয়ার যাদের সুযোগ নেই বা ইচ্ছা নেই, অথচ যারা সংযম ধরে রাখে। তিনি তাদের দানের সবচেয়ে বেশি হকদার বলেন। কারণ দান তাদের লক্ষ্যের পথে মুক্ত করে দেয়, আর সৃষ্টির বদলে স্রষ্টার ওপর আশা রাখার জন্য তাদের প্রতি কৃতজ্ঞতাও জানায়। সঙ্গে তিনি যোগ করেন, অন্য যেকোনো ভালো কাজে আর অন্য যেকোনো অভাবীকে দিলেও প্রতিদান আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Needy One Nobody Notices",
          "bn": "যে অভাবীকে কেউ লক্ষ করে না"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said the miskin is not the one who goes round the people and is sent away with a morsel or two, or a date or two. The miskin is the one who does not have enough to make him independent, whose condition goes unnoticed so that no charity is given to him, and who does not stand up to ask people. Ibn Kathir sets this hadith directly beside the verse, because it describes the same person from the other side: the side of a society that fails to see him.",
            "bn": "ইমাম বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলেছেন: মিসকিন সে নয়, যে মানুষের দ্বারে দ্বারে ঘোরে আর এক-দুই লোকমা বা এক-দুইটা খেজুর নিয়ে ফিরে যায়। মিসকিন সে, যার কাছে নিজেকে স্বাবলম্বী করার মতো যথেষ্ট কিছু নেই, যার অবস্থা কারও চোখে পড়ে না বলে কেউ তাকে দান করে না, আর যে উঠে গিয়ে মানুষের কাছে চায়ও না। ইবনে কাসীর হাদিসটি আয়াতের ঠিক পাশেই রাখেন, কারণ এটি একই মানুষকে দেখায় অন্য দিক থেকে: সেই সমাজের দিক থেকে, যা তাকে দেখতে পায় না।"
          },
          {
            "en": "In the narration that al-Bukhari places under this verse in his book of tafsir, the second half is briefer, the miskin being simply the one who restrains himself, and the listener is then directed to recite, if he wishes, la yas'aluna an-nasa ilhafa. Another narration in al-Bukhari, from Hakim ibn Hizam (RA), gives the promise behind such restraint: the upper hand is better than the lower hand, whoever seeks restraint, Allah makes him restrained, and whoever seeks to be free of need, Allah makes him free of need.",
            "bn": "ইমাম বুখারী তাঁর তাফসির অধ্যায়ে এই আয়াতের অধীনে যে বর্ণনা এনেছেন, সেখানে দ্বিতীয় অংশটি আরও সংক্ষিপ্ত: মিসকিন সে, যে নিজেকে সংযত রাখে। তারপর শ্রোতাকে বলা হয়, চাইলে পড়ো 'লা ইয়াসআলূনান নাসা ইলহাফা'। ইমাম বুখারীর আরেকটি বর্ণনায়, হাকীম ইবনে হিযাম (রাঃ) থেকে, এমন সংযমের পেছনের ওয়াদাটা আছে: ওপরের হাত নিচের হাতের চেয়ে উত্তম। যে সংযম চায়, আল্লাহ তাকে সংযমী করেন। আর যে অভাবমুক্ত থাকতে চায়, আল্লাহ তাকে অভাবমুক্ত করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Beside the Hidden Poor",
          "bn": "গোপন অভাবীদের পাশের আয়াতগুলো"
        },
        "p": [
          {
            "en": "59:8 assigns a share of wealth to the poor emigrants who were expelled from their homes and their properties, seeking bounty from Allah and His approval and supporting Allah and His Messenger, and it calls them the truthful. They are the community Ibn Kathir finds in our verse, now described by what they left behind. 9:60 places the poor and the needy at the head of those entitled to zakah, so the attention that 2:273 asks of the generous is also built into an obligation that does not wait for anyone's generosity.",
            "bn": "৫৯:৮ আয়াত সম্পদের একটা অংশ ঠিক করে দেয় সেই দরিদ্র মুহাজিরদের জন্য, যাদের ঘরবাড়ি আর সম্পত্তি থেকে উচ্ছেদ করা হয়েছে, যারা আল্লাহর অনুগ্রহ ও সন্তুষ্টি চায় আর আল্লাহ ও তাঁর রাসূলকে সাহায্য করে, আর তাদের বলে সত্যবাদী। ইবনে কাসীর আমাদের আয়াতে যে সম্প্রদায়কে দেখেন, এরা তারাই, এবার বর্ণনা এসেছে তারা কী ছেড়ে এসেছে সেই দিক থেকে। ৯:৬০ আয়াত যাকাতের হকদারদের শুরুতে রাখে ফকির ও মিসকিনকে। ফলে ২:২৭৩ আয়াত দানশীলদের কাছে যে মনোযোগ চায়, তা এমন এক ফরজের মধ্যেও গেঁথে দেওয়া হয়েছে, যা কারও দানশীলতার অপেক্ষায় থাকে না।"
          },
          {
            "en": "Ibn Kathir reads the mark by which they are known beside 48:29, where the sign of the believers is in their faces from the effect of prostration, and 47:30, where the Prophet ﷺ is told that he will know certain people by the tone of their speech. And so that praise for those who do not ask is never turned against those who do, 93:10 says plainly: as for the one who asks, do not repel him. 2:177 likewise counts giving to those who ask among the marks of righteousness. The restraint of the silent is honoured, and the door stays open to the one who knocks.",
            "bn": "যে লক্ষণ দেখে তাদের চেনা যায়, ইবনে কাসীর তা পড়েন ৪৮:২৯ আয়াতের পাশে রেখে, যেখানে সেজদার প্রভাবে মুমিনদের চিহ্ন তাদের চেহারায়। আর ৪৭:৩০ আয়াতের পাশে, যেখানে নবী ﷺ-কে বলা হয়েছে, কিছু লোককে তিনি তাদের কথার ধরন থেকেই চিনবেন। যারা চায় না তাদের প্রশংসা যেন কখনো যারা চায় তাদের বিরুদ্ধে ব্যবহার না হয়, সেজন্য ৯৩:১০ আয়াত সোজাসুজি বলে: প্রার্থীকে ধমক দিয়ো না। ২:১৭৭ আয়াতও নেককারদের গুণের মধ্যে গোনে প্রার্থীদের দান করা। চুপ থাকা মানুষের সংযম সম্মান পায়, আবার দরজায় কড়া নাড়া মানুষের জন্যও দরজা খোলা থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Learning to See the Mark",
          "bn": "লক্ষণ দেখতে শেখা"
        },
        "p": [
          {
            "en": "The verse trains the eye. Hidden need rarely announces itself, but it leaves marks for anyone willing to look: the student who always says he has already eaten, the widow who has stopped inviting guests, the colleague whose shoes have been mended one time too many, the family whose children suddenly stop going on school trips, the relative who asks about everyone else's news and never mentions his own. None of these people will ask you for anything. Some of them would be hurt if you asked them directly.",
            "bn": "আয়াতটি চোখকে প্রশিক্ষণ দেয়। গোপন অভাব খুব কমই নিজের কথা ঘোষণা করে, কিন্তু যে দেখতে চায় তার জন্য লক্ষণ রেখে যায়। যে ছাত্র সব সময় বলে সে খেয়ে এসেছে, যে বিধবা মেহমান ডাকা বন্ধ করে দিয়েছেন, যে সহকর্মীর জুতা একবার বেশিই সেলাই হয়েছে, যে পরিবারের বাচ্চারা হঠাৎ স্কুলের সফরে যাওয়া বন্ধ করে দিয়েছে, যে আত্মীয় সবার খবর নেয় অথচ নিজের কথা কখনো তোলে না। এদের কেউ আপনার কাছে কিছু চাইবে না। কেউ কেউ সরাসরি জিজ্ঞেস করলে কষ্টও পাবে।"
          },
          {
            "en": "So give in the way the verse protects. Let help arrive as a gift for a child, a loan with no pressure to repay, an order placed with a small family business, a fee quietly settled, or through someone they trust. 2:271 has already said that giving secretly to the poor is better for you. And if you are the one in need, the verse offers you a dignity to keep: turn to Allah first, ask people only from real need, never press, and trust the promise that whoever seeks restraint is given it.",
            "bn": "তাই আয়াত যেভাবে আড়াল রক্ষা করে, সেভাবেই দিন। সাহায্যটা পৌঁছাক বাচ্চার জন্য উপহার হয়ে, ফেরত দেওয়ার চাপহীন ঋণ হয়ে, পরিবারের ছোট ব্যবসায় দেওয়া অর্ডার হয়ে, চুপচাপ মিটিয়ে দেওয়া কোনো ফি হয়ে, কিংবা তাদের বিশ্বস্ত কারও হাত দিয়ে। ২:২৭১ আয়াত আগেই বলেছে, গোপনে অভাবীদের দেওয়া আপনার জন্য আরও ভালো। আর অভাবী মানুষটা যদি আপনি নিজেই হন, আয়াতটি আপনাকে একটা সম্মান ধরে রাখতে বলে: আগে আল্লাহর দিকে ফিরুন, সত্যিকার প্রয়োজন ছাড়া মানুষের কাছে চাইবেন না, কখনো নাছোড় হবেন না, আর ভরসা রাখুন, যে সংযম চায় তাকে সংযম দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for Restraint and Sufficiency",
          "bn": "সংযম আর অভাবমুক্তির দোয়া"
        },
        "p": [
          {
            "en": "Muslim records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ used to say: \"O Allah, I ask You for guidance, piety, restraint and sufficiency.\" In Arabic: Allahumma inni as'aluka al-huda wa at-tuqa wa al-'afafa wa al-ghina. The third word, al-'afaf, comes from the same root as the ta'affuf of our verse. The fourth, al-ghina, is what the unaware wrongly suppose these poor already have. The du'a asks Allah for the real thing behind both of those appearances, the restraint that is truly there and the sufficiency that is not yet.",
            "bn": "ইমাম মুসলিম আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলতেন: \"হে আল্লাহ, আমি আপনার কাছে হেদায়াত, তাকওয়া, সংযম আর অভাবমুক্তি চাই।\" আরবিতে: 'আল্লাহুম্মা ইন্নী আসআলুকাল হুদা ওয়াত তুকা ওয়াল আফাফা ওয়াল গিনা।' তৃতীয় শব্দ 'আল-আফাফ' এসেছে আমাদের আয়াতের 'তাআফফুফ' শব্দের একই ধাতু থেকে। চতুর্থ শব্দ 'আল-গিনা', না জানা লোকেরা ভুল করে ভাবে এই অভাবীদের তা আগে থেকেই আছে। দোয়াটি এই দুই বাহ্যিক চেহারার পেছনের আসল জিনিসটাই আল্লাহর কাছে চায়: যে সংযম সত্যিই আছে, আর যে অভাবমুক্তি এখনো আসেনি।"
          },
          {
            "en": "Beside it stands a short supplication in the words of the verse, composed for this article and not transmitted: O Allah, open our eyes to those whom the unaware take for rich, and let us give to them in a way that leaves their dignity whole. When need comes to us, keep us from pressing anyone with our asking, and let us ask You before we ask anyone else. Whatever good we spend, You know it; make that knowledge enough for us.",
            "bn": "এর পাশে রইল আয়াতের শব্দ দিয়ে সাজানো ছোট একটি দোয়া, এই লেখার জন্য গাঁথা, বর্ণিত নয়: হে আল্লাহ, না জানা লোকেরা যাদের ধনী ভাবে, তাদের দিকে আমাদের চোখ খুলে দিন, আর এমনভাবে তাদের দিতে দিন যাতে তাদের সম্মান পুরোপুরি অটুট থাকে। আমাদের ওপর অভাব এলে কারও কাছে নাছোড় হয়ে চাওয়া থেকে আমাদের রক্ষা করুন, আর অন্য কারও কাছে চাওয়ার আগে যেন আপনার কাছে চাই। ভালো যা কিছু আমরা খরচ করি, আপনি তা জানেন; আপনার এই জানাটাই আমাদের জন্য যথেষ্ট করে দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions That Look Closer",
          "bn": "কাছ থেকে দেখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Who in my family, my mosque or my workplace has grown quieter about their circumstances over the past year, and have I asked myself why? When I plan my giving, how much of it goes to whoever asks first and loudest, and how much to need that I had to go out and find? Do I know anyone whose work for the good of others has cost them their ordinary way of earning, and have I ever thought of them as the people this verse describes?",
            "bn": "আমার পরিবার, মসজিদ বা কর্মস্থলে গত এক বছরে কে নিজের অবস্থা নিয়ে আরও চুপচাপ হয়ে গেছে, আর কেন, সে প্রশ্ন কি নিজেকে করেছি? দানের পরিকল্পনা করার সময় তার কতটা যায় যে আগে আর জোরে চায় তার কাছে, আর কতটা যায় এমন অভাবের কাছে যা আমাকে খুঁজে বের করতে হয়েছে? এমন কাউকে কি চিনি, অন্যের কল্যাণে কাজ করতে গিয়ে যার রোজগারের সাধারণ পথ বন্ধ হয়ে গেছে, আর তাকে কি কখনো এই আয়াতের মানুষ হিসেবে ভেবেছি?"
          },
          {
            "en": "When I am the one in difficulty, do I take my need to Allah before I take it to people, and do I ask with dignity rather than with pressure? Have I ever made someone's restraint harder by helping them in a way that exposed them? And am I content to have given something good that only Allah will ever know about, trusting the verse's closing words that He knows it?",
            "bn": "নিজে যখন কষ্টে পড়ি, তখন কি মানুষের কাছে নেওয়ার আগে নিজের প্রয়োজন আল্লাহর কাছে নিয়ে যাই, আর চাপ দিয়ে নয়, সম্মান রেখে চাই? কাউকে কি কখনো এমনভাবে সাহায্য করেছি যে তার আড়াল ভেঙে গেছে, আর তার সংযম ধরে রাখা কঠিন হয়ে পড়েছে? আর এমন কোনো ভালো দান করে কি আমি সন্তুষ্ট থাকতে পারি, যার খবর শুধু আল্লাহই রাখবেন, আয়াতের শেষ কথায় ভরসা রেখে যে তিনি তা জানেন?"
          }
        ]
      }
    ]
  },
  "2:275": {
    "sections": [
      {
        "h": {
          "en": "After the Givers, the Takers",
          "bn": "দানের পরে সুদের কথা"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and the verses just before this one are about giving. 2:261 likens spending in Allah's way to a seed that grows seven spikes, 2:264 warns against cancelling charity with reminders and injury, and 2:274 praises those who spend by night and by day, secretly and publicly. Ibn Kathir marks the turn that follows: having described the righteous who give, the surah moves on to those who consume riba. Two kinds of people are set side by side, one whose wealth leaves his hand for others and one whose wealth grows out of others.",
            "bn": "সূরা বাকারা মাদানি সূরা, আর এই আয়াতের ঠিক আগের আয়াতগুলো দান নিয়ে। ২:২৬১ আয়াত আল্লাহর পথে খরচকে এমন বীজের সঙ্গে তুলনা করে, যা থেকে সাতটি শীষ গজায়। ২:২৬৪ আয়াত খোঁটা দিয়ে আর কষ্ট দিয়ে দান নষ্ট করতে নিষেধ করে। ২:২৭৪ আয়াত প্রশংসা করে তাদের, যারা রাতে-দিনে, গোপনে ও প্রকাশ্যে খরচ করে। ইবনে কাসীর এরপরের মোড়টা চিহ্নিত করেন: দানশীল নেককারদের কথা বলার পর সূরা এবার সুদখোরদের কথায় আসে। দুই রকম মানুষকে পাশাপাশি দাঁড় করানো হলো। একজনের সম্পদ তার হাত ছেড়ে অন্যের কাছে যায়, আরেকজনের সম্পদ বাড়ে অন্যের ঘাড়ে চেপে।"
          },
          {
            "en": "The passage that opens here runs to 2:281. 2:276 says Allah destroys riba and makes charity grow, 2:278 and 2:279 order the believers to give up what remains of riba owed to them and warn of war from Allah and His Messenger, and 2:280 requires respite for a debtor in hardship. The reports differ on which verse of the Quran came down last. One of them, which al-Bukhari records from Ibn Abbas (RA), names the verse of riba, and other reports name other verses. Either way, this law belongs to the late Madinan years.",
            "bn": "এখান থেকে যে অংশ শুরু হলো, তা চলে ২:২৮১ পর্যন্ত। ২:২৭৬ আয়াত বলে, আল্লাহ সুদ মিটিয়ে দেন আর দানকে বাড়িয়ে দেন। ২:২৭৮ ও ২:২৭৯ আয়াত মুমিনদের হুকুম দেয় পাওনা সুদের বাকিটুকু ছেড়ে দিতে, আর না ছাড়লে আল্লাহ ও তাঁর রাসূলের পক্ষ থেকে যুদ্ধের ঘোষণা শোনায়। ২:২৮০ আয়াত অভাবগ্রস্ত ঋণীকে সময় দেওয়া বাধ্যতামূলক করে। কুরআনের সবশেষে কোন আয়াত নাজিল হয়েছে, এ নিয়ে বর্ণনাগুলো এক নয়। বুখারী ইবনে আব্বাস (রাঃ) থেকে যে বর্ণনাটি এনেছেন, তাতে সুদের আয়াতের নাম আছে, আর অন্য বর্ণনায় অন্য আয়াতের নাম। যেটাই হোক, এই বিধান মদিনার শেষ বছরগুলোর।"
          }
        ]
      },
      {
        "h": {
          "en": "Eating, Staggering, Increase",
          "bn": "খাওয়া, টলে পড়া, বৃদ্ধি"
        },
        "p": [
          {
            "en": "The verb is ya'kuluna, they eat. The Quran uses eating for taking wealth elsewhere too, as in 4:10 on those who devour the property of orphans, and the commentators explain that eating is named because it is the chief use a person makes of money, while every other use is included in it. Riba itself comes from the root r-b-w, to increase and swell. The same root gives rabwah, the high ground of 2:265, where spending for Allah's approval is pictured as a garden on a rise that yields double.",
            "bn": "আয়াতের ক্রিয়াপদ ‘ইয়া'কুলূন’, অর্থাৎ তারা খায়। সম্পদ দখল করা বোঝাতে কুরআন অন্য জায়গাতেও খাওয়ার শব্দ ব্যবহার করে, যেমন ৪:১০ আয়াতে, যারা ইয়াতিমের মাল গ্রাস করে তাদের ব্যাপারে। মুফাসসিরগণ ব্যাখ্যা করেন, টাকা দিয়ে মানুষ সবচেয়ে বেশি যা করে তা হলো খাওয়া, তাই খাওয়ার নাম নেওয়া হয়েছে। অন্য সব ব্যবহারও এর মধ্যেই পড়ে। ‘রিবা’ শব্দটা এসেছে র-ব-ও মূল থেকে, যার অর্থ বাড়া, ফুলে ওঠা। এই মূল থেকেই এসেছে ‘রাবওয়াহ’, ২:২৬৫ আয়াতের সেই উঁচু জমি। সেখানে আল্লাহর সন্তুষ্টির জন্য খরচকে দেখানো হয়েছে টিলার ওপরের বাগান হিসেবে, যা দ্বিগুণ ফল দেয়।"
          },
          {
            "en": "The picture is built on yatakhabbatuhu, from khabt, to strike about without direction, as an animal beats the ground blindly. Min al-mass, from the touch, names its cause. Then the objection is quoted: innama al-bay'u mithlu ar-riba, trade is only like riba. The order deserves a second look. One would expect riba to be likened to trade, since trade is the thing everyone accepts. Instead the speakers make riba the standard and trade the copy, and az-Zamakhshari reads the reversal as a measure of how completely riba had become the norm in their minds.",
            "bn": "ছবিটা দাঁড়িয়ে আছে ‘ইয়াতাখাব্বাতুহু’ শব্দের ওপর। মূল শব্দ ‘খাবত’, মানে দিশাহীনভাবে আঘাত করা, যেমন কোনো পশু অন্ধের মতো মাটিতে পা ঠোকে। ‘মিনাল মাস’, ছোঁয়া থেকে, এই দশার কারণটা বলে দেয়। তারপর আপত্তিটা উদ্ধৃত হয়: ‘ইন্নামাল বাই'উ মিসলুর রিবা’, বেচাকেনা তো সুদেরই মতো। কথাটার ক্রম আরেকবার খেয়াল করুন। স্বাভাবিকভাবে সুদকেই বেচাকেনার সঙ্গে তুলনা করার কথা, কারণ বেচাকেনা তো সবার কাছে স্বীকৃত। অথচ তারা সুদকে বানিয়েছে মাপকাঠি, আর বেচাকেনাকে তার নকল। আয-যামাখশারী এই উল্টো ক্রমকে দেখেন প্রমাণ হিসেবে যে, তাদের মনে সুদই কতখানি স্বাভাবিক নিয়ম হয়ে বসেছিল।"
          },
          {
            "en": "The reply does not argue back. Wa ahalla Allahu al-bay'a wa harrama ar-riba: Allah has made trade lawful and forbidden riba. The resemblance the objectors claimed is not taken apart point by point; it is overruled by the One who has the right to rule. Then the vocabulary changes to that of a warning heard. Maw'izah is an admonition that reaches the heart, and intaha is to desist, to stop at a limit. The verse does not ask the listener to win the debate first. It asks him to stop.",
            "bn": "জবাবে পাল্টা তর্ক নেই। ‘ওয়া আহাল্লাল্লাহুল বাই'আ ওয়া হাররামার রিবা’: আল্লাহ বেচাকেনা হালাল করেছেন আর সুদ হারাম করেছেন। আপত্তিকারীরা যে মিলের দাবি তুলেছিল, তাকে একটা একটা করে খণ্ডন করা হয়নি। ফয়সালা দেওয়ার হক যাঁর, তিনি সেটা বাতিল করে দিয়েছেন। এরপর শব্দগুলো বদলে যায় সতর্কবাণী শোনার ভাষায়। ‘মাও'ইযাহ’ হলো এমন উপদেশ যা অন্তরে গিয়ে লাগে, আর ‘ইনতাহা’ মানে বিরত হওয়া, সীমায় এসে থেমে যাওয়া। আয়াত শ্রোতাকে আগে তর্কে জিততে বলে না। বলে থামতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Rising Without Balance",
          "bn": "ভারসাম্য হারিয়ে ওঠা"
        },
        "p": [
          {
            "en": "At-Tabari and Ibn Kathir both read the standing as the rising on the Day of Resurrection: the consumer of riba will come out of his grave like one seized by madness. Ibn Kathir relays from Ibn Abbas (RA) that the consumer of riba will be raised on that Day insane and choking. The app's English carries this reading in its brackets. Read beside the quoted objection, the picture fits the offence closely. A mind that had lost its sense of which thing is the standard rises without its balance.",
            "bn": "আত-তাবারী ও ইবনে কাসীর দুজনেই দাঁড়ানোকে পড়েছেন কিয়ামতের দিনের ওঠা হিসেবে: সুদখোর কবর থেকে উঠবে পাগলে ধরা মানুষের মতো। ইবনে কাসীর ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, সেদিন সুদখোরকে ওঠানো হবে উন্মাদ অবস্থায়, দম আটকে আসা অবস্থায়। অ্যাপের ইংরেজি অনুবাদ বন্ধনীর ভেতরে এই ব্যাখ্যাটাই রেখেছে। আপত্তির কথাটার পাশে রেখে পড়লে বোঝা যায়, ছবিটা অপরাধের সঙ্গে কতটা মিলে যায়। যে মাথা ভুলে গিয়েছিল কোনটা মাপকাঠি আর কোনটা নকল, সে উঠবে ভারসাম্য হারিয়ে।"
          },
          {
            "en": "On what the riba was, at-Tabari relays from Zayd ibn Aslam how it worked before Islam. When a debt fell due, the creditor would say to the debtor: will you pay, or will you increase? If he paid, it was settled; if not, the term was extended and the sum raised. 3:130 names the result, riba doubled and multiplied. Ibn Kathir adds that the chapters of riba are among the hardest for scholars, and brings the wish of Umar (RA) that the Prophet ﷺ had left them clearer guidance on some of them.",
            "bn": "সুদ আসলে কী ছিল, সে ব্যাপারে আত-তাবারী যায়দ ইবনে আসলাম থেকে জাহিলি যুগের রীতিটা বর্ণনা করেন। ঋণ পরিশোধের সময় এলে পাওনাদার দেনাদারকে বলত: শোধ করবে, নাকি বাড়াবে? শোধ করলে মিটে গেল। না পারলে মেয়াদ বাড়ানো হতো, সঙ্গে অঙ্কটাও। ৩:১৩০ আয়াত এর ফলটার নাম দিয়েছে: বহুগুণে বেড়ে চলা সুদ। ইবনে কাসীর যোগ করেন, সুদের মাসআলাগুলো আলিমদের কাছেও সবচেয়ে কঠিন অধ্যায়গুলোর একটি। এ প্রসঙ্গে তিনি উমর (রাঃ)-এর সেই আকাঙ্ক্ষার কথা আনেন যে, নবী ﷺ যদি এর কিছু অধ্যায়ে আরও স্পষ্ট নির্দেশনা রেখে যেতেন।"
          },
          {
            "en": "The two endings are read with care. Fa lahu ma salaf: Ibn Kathir explains that what was taken before the prohibition reached a person is his, and he is not made to return it. Wa amruhu ila Allah: his affair rests with Allah, who knows whether the stopping is sincere. Wa man 'ada: at-Tabari glosses the one who returns as the one who goes back to consuming riba after it was forbidden and repeats the old claim that trade is like riba. On that reading, the warning of the Fire meets a man who has taken back both the act and its justification.",
            "bn": "দুই রকম পরিণতির কথা মুফাসসিরগণ যত্ন নিয়ে পড়েছেন। ‘ফালাহু মা সালাফ’: ইবনে কাসীর ব্যাখ্যা করেন, নিষেধাজ্ঞা পৌঁছানোর আগে যা নেওয়া হয়ে গেছে তা তারই, সেটা ফেরত দিতে তাকে বাধ্য করা হয় না। ‘ওয়া আমরুহু ইলাল্লাহ’: তার বিষয়টা আল্লাহর হাতে, থেমে যাওয়াটা খাঁটি কি না তিনিই জানেন। ‘ওয়া মান আদা’: আত-তাবারী ফিরে যাওয়া লোকটিকে ব্যাখ্যা করেন এমন একজন হিসেবে, যে হারাম হওয়ার পরও আবার সুদ খেতে শুরু করে আর সেই পুরোনো দাবি আওড়ায় যে বেচাকেনা সুদেরই মতো। এই ব্যাখ্যায় আগুনের সতর্কবাণী সেই মানুষের জন্য, যে কাজটাও ফিরিয়ে এনেছে, তার পক্ষের যুক্তিটাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Hand in the Contract",
          "bn": "চুক্তির প্রতিটি হাত"
        },
        "p": [
          {
            "en": "Muslim records from Jabir ibn Abdullah (RA) that the Messenger of Allah ﷺ cursed the one who consumes riba, the one who pays it, the one who writes it down and its two witnesses, and said that they are all alike. The narration reaches well beyond the lender. The one who pays, the scribe who records the deal and the men who witness it are named with him. A transaction of riba needs several hands before it can exist, and the hadith names every one of them.",
            "bn": "মুসলিম জাবির ইবনে আবদুল্লাহ (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ লানত করেছেন সুদখোরের ওপর, সুদদাতার ওপর, সুদের লেখকের ওপর আর তার দুই সাক্ষীর ওপর। আর তিনি বলেছেন, এরা সবাই সমান। বর্ণনাটা শুধু পাওনাদারে থেমে থাকে না। যে সুদ দেয়, যে চুক্তি লিখে রাখে, যারা সাক্ষী থাকে, সবার নাম তার সঙ্গে এসেছে। সুদের একটা লেনদেন দাঁড়াতে কয়েকটা হাত লাগে। হাদিসটি তাদের প্রত্যেকের নাম ধরে ডেকেছে।"
          },
          {
            "en": "Al-Bukhari records the long dream narrated by Samurah ibn Jundub (RA), in which the Prophet ﷺ was shown a man standing in a river of blood. Each time the man came forward to climb out, another man threw a stone into his mouth and he went back to where he had been. When the Prophet ﷺ asked about him, he was told that the man in the river was the consumer of riba. Beside 2:275 the likeness is hard to miss: one man cannot stand upright, the other cannot get out.",
            "bn": "বুখারী সামুরা ইবনে জুনদুব (রাঃ)-এর বর্ণনায় নবী ﷺ-এর দীর্ঘ স্বপ্নের কথা এনেছেন। সেখানে তাঁকে দেখানো হয় রক্তের এক নদীতে দাঁড়ানো একজন মানুষ। লোকটি যখনই উঠে আসতে এগোয়, আরেকজন তার মুখে পাথর ছুড়ে মারে, আর সে আগের জায়গায় ফিরে যায়। নবী ﷺ তার সম্পর্কে জানতে চাইলে তাঁকে বলা হয়, নদীর ওই লোকটি সুদখোর। ২:২৭৫ আয়াতের পাশে রাখলে মিলটা চোখ এড়ায় না। আয়াতের মানুষটি সোজা হয়ে দাঁড়াতে পারে না, আর স্বপ্নের মানুষটি নদী থেকে বেরোতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verses Around It",
          "bn": "আশপাশের আয়াতগুলো"
        },
        "p": [
          {
            "en": "3:130 forbids the believers to consume riba doubled and multiplied, naming the pre-Islamic form in which a debt swelled with each extension. 30:39, from a Makkan surah, draws the contrast before any ruling: what you give to increase within the wealth of people does not increase with Allah, while zakah given for His face is what multiplies. 4:161, in a passage about the Jews, names their taking of usury though they had been forbidden it, together with consuming people's wealth unjustly.",
            "bn": "৩:১৩০ আয়াত মুমিনদের বহুগুণে বেড়ে চলা সুদ খেতে নিষেধ করে। এ হলো জাহিলি যুগের সেই রূপ, যেখানে প্রতিবার মেয়াদ বাড়লে ঋণও ফুলে উঠত। ৩০:৩৯ আয়াত মক্কী সূরার, সেখানে কোনো বিধানের আগেই তফাতটা দেখিয়ে দেওয়া হয়েছে: মানুষের সম্পদে বাড়ার আশায় যা দেওয়া হয়, আল্লাহর কাছে তা বাড়ে না। আর আল্লাহর সন্তুষ্টির জন্য যে যাকাত দেওয়া হয়, সেটাই বহুগুণ হয়। ৪:১৬১ আয়াত ইহুদিদের প্রসঙ্গে বলে, নিষেধ থাকা সত্ত্বেও তারা সুদ নিত আর অন্যায়ভাবে মানুষের সম্পদ গ্রাস করত।"
          },
          {
            "en": "Closest of all is 2:276, the very next verse: Allah destroys riba and gives increase for charities. The Arabic for that increase, yurbi, comes from the same root as riba, so the verse takes the word the lender lives by and gives it to the one who gives. And 2:280 completes the moral turn of the passage: if a debtor is in hardship, let there be postponement until ease, and remitting the debt as charity is better for you, if you only knew.",
            "bn": "সবচেয়ে কাছের আয়াত ২:২৭৬, ঠিক পরেরটি: আল্লাহ সুদ মিটিয়ে দেন আর দানকে বাড়িয়ে দেন। ‘বাড়িয়ে দেন’ বোঝাতে আরবি শব্দ ‘ইউরবী’, রিবার মূল থেকেই আসা। অর্থাৎ সুদখোর যে শব্দের ওপর বেঁচে থাকে, আয়াত সেটা তুলে দিল দানকারীর হাতে। আর ২:২৮০ আয়াত পুরো অংশের নৈতিক মোড়টা পূর্ণ করে: ঋণী যদি অভাবে থাকে, তবে সচ্ছলতা আসা পর্যন্ত তাকে সময় দিতে হবে। আর ঋণটা দান হিসেবে মাফ করে দেওয়া আপনাদের জন্য আরও উত্তম, যদি আপনারা জানতেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Stopping Before Understanding",
          "bn": "বোঝার আগে থামা"
        },
        "p": [
          {
            "en": "The first thing the verse builds is the habit of stopping. Its sequence is plain: an admonition comes, the person desists, and what is past is left with Allah. It does not require every question to be settled before one stops. People often reverse that order, keeping a practice while they gather reasons for it, and the objection quoted in this verse is exactly such a reason. When a ruling reaches you about something you have been doing, stop first, then learn.",
            "bn": "আয়াতটি প্রথমে যে অভ্যাস গড়ে তোলে, তা হলো থেমে যাওয়া। এর ধাপগুলো সোজা: উপদেশ আসে, মানুষটি বিরত হয়, আর অতীত রেখে দেওয়া হয় আল্লাহর কাছে। থামার আগে সব প্রশ্নের মীমাংসা হতে হবে, এমন শর্ত আয়াত রাখেনি। মানুষ প্রায়ই ক্রমটা উল্টে দেয়। কাজটা চালিয়ে যায়, আর পাশাপাশি তার পক্ষে যুক্তি জমায়। এই আয়াতে যে আপত্তিটা উদ্ধৃত হয়েছে, সেটা ঠিক এমনই এক যুক্তি। তাই যে কাজ আপনি করে আসছেন, সে সম্পর্কে হুকুম পৌঁছালে আগে থামুন, তারপর শিখুন।"
          },
          {
            "en": "The second is attention to the other side of a debt. The passage gives the creditor duties of patience, not only the debtor duties of payment. If someone owes you and is struggling, 2:280 tells you to wait until ease and calls remission better. In an ordinary month that can mean asking what is possible before pressing, and writing down what is agreed, as 2:282 commands, so that neither side is wronged. And where a particular dealing is unclear, the difficulty Ibn Kathir admits is a reason to ask people of knowledge, not to decide by preference.",
            "bn": "দ্বিতীয় অভ্যাস হলো ঋণের অন্য পাশটার দিকে নজর রাখা। এই অংশ দেনাদারের ওপর শুধু শোধ করার দায় চাপায়নি, পাওনাদারের ওপরও ধৈর্যের দায় রেখেছে। কেউ আপনার কাছে ঋণী আর কষ্টে আছে, তখন ২:২৮০ আয়াত বলে সচ্ছলতা আসা পর্যন্ত অপেক্ষা করতে, আর মাফ করে দেওয়াকে বলে আরও উত্তম। সাধারণ একটা মাসে এর মানে হতে পারে, চাপ দেওয়ার আগে জিজ্ঞেস করা কতটুকু সম্ভব। আর ২:২৮২ আয়াতের হুকুম মেনে যা ঠিক হলো তা লিখে রাখা, যাতে কোনো পক্ষের ওপর জুলুম না হয়। কোনো নির্দিষ্ট লেনদেন অস্পষ্ট ঠেকলে, ইবনে কাসীর যে কাঠিন্যের কথা স্বীকার করেছেন, সেটাই আলিমদের জিজ্ঞেস করার কারণ। নিজের পছন্দমতো সিদ্ধান্ত নেওয়ার কারণ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for Sufficiency",
          "bn": "অভাবমুক্তির দোয়া"
        },
        "p": [
          {
            "en": "The Sunnah supplies a du'a that sits close to this verse. Muslim records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ used to say: Allahumma inni as'aluka al-huda wa at-tuqa wa al-'afafa wa al-ghina, O Allah, I ask You for guidance, piety, restraint and sufficiency. The last two words carry this verse's concern. 'Afaf is keeping one's hand back from what is not permitted, and ghina is being made free of the need that pushes a person toward what is forbidden.",
            "bn": "সুন্নাহতে এমন একটি দোয়া আছে, যা এই আয়াতের খুব কাছাকাছি। মুসলিম আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলতেন: ‘আল্লাহুম্মা ইন্নী আসআলুকাল হুদা ওয়াত তুকা ওয়াল আফাফা ওয়াল গিনা’, হে আল্লাহ, আমি আপনার কাছে হিদায়াত, তাকওয়া, সংযম আর অভাবমুক্তি চাই। শেষ দুটি শব্দেই এই আয়াতের মূল চিন্তা। ‘আফাফ’ হলো যা জায়েজ নয় তা থেকে হাত গুটিয়ে রাখা। আর ‘গিনা’ হলো সেই অভাব থেকে মুক্ত থাকা, যা মানুষকে হারামের দিকে ঠেলে দেয়।"
          },
          {
            "en": "A short supplication in the verse's own vocabulary, offered here as a composed prayer and not a transmitted one: O Allah, when Your admonition reaches me, make me of those who desist; forgive what is past, and do not let me return to it. Its three clauses follow the verse's own order of maw'izah and stopping, what is past, and the warning against going back, and it can be said whenever a ruling you have long been avoiding finally reaches you.",
            "bn": "আয়াতের নিজের শব্দে ছোট একটি দোয়া। এটি বর্ণিত দোয়া নয়, এখানে বানিয়ে দেওয়া: হে আল্লাহ, আপনার উপদেশ যখন আমার কাছে পৌঁছায়, আমাকে তাদের দলে রাখুন যারা থেমে যায়। যা হয়ে গেছে তা মাফ করে দিন, আর আমাকে আবার সেদিকে ফিরে যেতে দেবেন না। দোয়াটির তিনটি অংশ আয়াতের ক্রমই মেনে চলে: উপদেশ ও থেমে যাওয়া, আগে যা হয়ে গেছে, আর ফিরে যাওয়ার বিরুদ্ধে সতর্কতা। যে হুকুম আপনি অনেক দিন এড়িয়ে চলছিলেন, সেটা অবশেষে কানে পৌঁছালে এই দোয়াটি পড়তে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Next Transaction",
          "bn": "পরের লেনদেনের আগে"
        },
        "p": [
          {
            "en": "Is there a practice I continue while I wait to be persuaded, when this verse asks me to stop first and understand afterwards? When I defend something doubtful, do I reach for a resemblance, it is just like that other thing, instead of asking what Allah has ruled? After I stop, do I leave my past with Allah, or do I keep either excusing it or despairing over it?",
            "bn": "এমন কোনো কাজ কি আছে যা আমি চালিয়ে যাচ্ছি, আর অপেক্ষা করছি কেউ আমাকে বুঝিয়ে রাজি করাক, অথচ এই আয়াত বলছে আগে থামতে, বোঝা পরে? সন্দেহজনক কিছুর পক্ষে দাঁড়াতে গিয়ে আমি কি মিল খুঁজে বেড়াই, এটা তো ওটারই মতো, অথচ জিজ্ঞেস করি না আল্লাহ কী ফয়সালা দিয়েছেন? থেমে যাওয়ার পর আমি কি অতীতটা আল্লাহর হাতে ছেড়ে দিই, নাকি হয় অজুহাত দিয়ে চলি, নয়তো হতাশায় ডুবে থাকি?"
          },
          {
            "en": "When someone owes me and is struggling, what would waiting until ease actually look like this month? Which of my dealings would I be uneasy to see written down in full? And what would it mean for my wealth to grow the way the next verse says charity grows, by what leaves my hand rather than by what I extract from someone else's need?",
            "bn": "কেউ আমার কাছে ঋণী আর কষ্টে আছে, এই মাসে সচ্ছলতা পর্যন্ত অপেক্ষা করা বাস্তবে দেখতে কেমন হবে? আমার কোন লেনদেনটা পুরোপুরি লিখে রাখা হলে আমি অস্বস্তিতে পড়তাম? আর পরের আয়াত যেভাবে বলে দান বাড়ে, সেভাবে আমার সম্পদ বাড়ার মানে কী দাঁড়াবে? হাত থেকে যা বেরিয়ে যায় তা দিয়ে বাড়া, অন্যের অভাব থেকে যা নিংড়ে নিই তা দিয়ে নয়।"
          }
        ]
      }
    ]
  },
  "2:281": {
    "sections": [
      {
        "h": {
          "en": "Planted in the Middle of a Ledger",
          "bn": "হিসাবের খাতার মাঝখানে বসানো"
        },
        "p": [
          {
            "en": "This verse sits inside the longest stretch of financial law in the Quran. 2:275 to 2:279 deal with riba and end by telling those who repent that they may have their principal, wronging nobody and being wronged by nobody. 2:280 requires that a debtor in hardship be given respite until ease, and adds that remitting the debt as charity is better. Then comes our verse, and after it 2:282, the longest verse in the Book, on writing debts down.",
            "bn": "আয়াতটির জায়গা কুরআনের সবচেয়ে দীর্ঘ আর্থিক বিধানের মাঝখানে। ২:২৭৫ থেকে ২:২৭৯ পর্যন্ত আয়াতগুলো সুদ নিয়ে। শেষে বলা হয়েছে, যারা তওবা করে তারা নিজেদের মূলধন ফেরত পাবে; কারও ওপর জুলুম করবে না, কারও জুলুমের শিকারও হবে না। ২:২৮০ আয়াতের হুকুম, অভাবে পড়া ঋণীকে সচ্ছলতা আসা পর্যন্ত সময় দিতে হবে। সঙ্গে বলা হয়েছে, ঋণটা দান হিসেবে মাফ করে দেওয়া আরও ভালো। এরপর আমাদের আয়াত। তার পরেই ২:২৮২, কুরআনের দীর্ঘতম আয়াত, যার বিষয় ঋণ লিখে রাখা।"
          },
          {
            "en": "The placement is the first thing to notice. Between a rule about forgiving what you are owed and a rule about documenting what you lend, the Quran inserts a sentence about being returned to Allah. It does not conclude the financial passage from outside; it is planted in the middle of it, where the money is. Whatever else this verse is, it is a verse about the Day of Judgement addressed to creditors and to debtors.",
            "bn": "প্রথমে খেয়াল করার বিষয় হলো আয়াতটির জায়গা। একদিকে পাওনা মাফ করে দেওয়ার বিধান, অন্যদিকে ধার দিলে তা লিখে রাখার বিধান। এই দুইয়ের মাঝখানে কুরআন বসিয়ে দিয়েছে একটি বাক্য: সবাইকে আল্লাহর কাছে ফিরিয়ে নেওয়া হবে। আয়াতটি বাইরে দাঁড়িয়ে আর্থিক আলোচনার উপসংহার টানছে না। একেবারে তার মাঝখানে বসানো, যেখানে টাকাপয়সার কারবার। আয়াতটি আর যা-ই হোক, এটা কিয়ামতের দিনের কথা, আর কথাটা বলা হচ্ছে পাওনাদার ও দেনাদারকে উদ্দেশ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "You Will Be Returned",
          "bn": "তোমাদের ফিরিয়ে নেওয়া হবে"
        },
        "p": [
          {
            "en": "Turja'una is passive: you will be brought back, not you will return. The distinction matters because the whole passage is about parties who decide things — who lends, who waits, who forgives, who writes it down. This clause names the one appointment that nobody arranges for himself. 29:57 states it the same way, with every soul tasting death and then being returned to Him, and the Arabic there is passive too.",
            "bn": "'তুরজাঊন' শব্দটি কর্মবাচ্যে: তোমাদের ফিরিয়ে আনা হবে। তোমরা নিজেরা ফিরে যাবে, এমন নয়। পার্থক্যটা জরুরি। কারণ পুরো অংশটাই এমন লোকদের নিয়ে, যারা নিজেরা সিদ্ধান্ত নেয়: কে ধার দেবে, কে অপেক্ষা করবে, কে মাফ করবে, কে লিখে রাখবে। আর এই বাক্যাংশটি এমন এক সাক্ষাতের কথা বলে, যার সময় কেউ নিজে ঠিক করে না। ২৯:৫৭ আয়াতও কথাটা একইভাবে বলে: প্রত্যেক প্রাণ মৃত্যুর স্বাদ নেবে, তারপর তাঁরই কাছে ফিরিয়ে আনা হবে। সেখানেও আরবি ক্রিয়াটি কর্মবাচ্যে।"
          },
          {
            "en": "There is a second shift inside the sentence. It opens by addressing you in the plural — fear a Day when you will be returned — and closes speaking about them: every soul will be paid in full what it earned, and they will not be wronged. The audience gathered at the start has dispersed by the end into individual souls. A room can be addressed together. It cannot be judged together.",
            "bn": "বাক্যটির ভেতরে আরেকটা পালাবদল আছে। শুরুতে বহুবচনে সরাসরি সম্বোধন: সেই দিনকে ভয় করো, যেদিন তোমাদের ফিরিয়ে নেওয়া হবে। আর শেষে কথা হচ্ছে 'তাদের' নিয়ে: প্রত্যেক প্রাণকে তার কামাইয়ের পুরো প্রতিদান দেওয়া হবে, আর তাদের ওপর জুলুম করা হবে না। শুরুতে যারা একসঙ্গে জড়ো ছিল, শেষে এসে তারা আলাদা আলাদা প্রাণ হয়ে গেছে। ঘরভর্তি মানুষকে একসঙ্গে ডাকা যায়, কিন্তু একসঙ্গে বিচার করা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Paid in Full",
          "bn": "পুরোপুরি পরিশোধ"
        },
        "p": [
          {
            "en": "Tuwaffa is from the root of wafa', completing and discharging in full; it is the root behind the command to give full measure and behind tawaffa, the taking of a soul. The Quran chose a settlement word and set it inside a passage about settlements. Every clause around it involves an amount owed — the principal, the delay, the remission, the written term — and this verse says that a final account will be paid out to the last unit.",
            "bn": "'তুওয়াফফা' এসেছে 'ওয়াফা' ধাতু থেকে, যার অর্থ পূর্ণ করা, পাওনা পুরোপুরি মিটিয়ে দেওয়া। পুরো মাপে দেওয়ার হুকুমও এই ধাতু থেকে, আবার 'তাওয়াফফা', অর্থাৎ প্রাণ কবজ করা, সেটাও। কুরআন হিসাব মেটানোর একটা শব্দ বেছে নিয়ে বসিয়েছে ঠিক হিসাব মেটানোর আলোচনার ভেতরে। চারপাশের প্রতিটি বাক্যে কোনো না কোনো পাওনার অঙ্ক আছে: মূলধন, সময় দেওয়া, মাফ করা, লিখে রাখা মেয়াদ। আর এই আয়াত বলছে, শেষ হিসাবটা মেটানো হবে কড়ায়-গণ্ডায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Earned",
          "bn": "যা সে অর্জন করেছে"
        },
        "p": [
          {
            "en": "Kasabat here is neutral and covers everything a soul brings. That is worth marking, because the same surah later separates the verbs. In 2:286 the good is laha ma kasabat, hers is what she earned, and the evil is 'alayha ma iktasabat, against her is what she acquired, in a form that carries added effort. Here one verb carries both, because the point is not the difference between them but that the total is paid.",
            "bn": "এখানে 'কাসাবাত' নিরপেক্ষ শব্দ। প্রাণ যা কিছু নিয়ে আসে, ভালো-মন্দ সবই এর মধ্যে পড়ে। কথাটা খেয়াল রাখার মতো, কারণ এই সূরাই পরে ক্রিয়া দুটিকে আলাদা করেছে। ২:২৮৬ আয়াতে ভালোর বেলায় বলা হয়েছে 'লাহা মা কাসাবাত', সে যা অর্জন করেছে তা তারই। আর মন্দের বেলায় 'আলাইহা মাক্‌তাসাবাত', সে যা কামাই করেছে তা তার বিরুদ্ধে। দ্বিতীয় ক্রিয়াটির গঠনে বাড়তি চেষ্টার ভাব আছে। এখানে একটি ক্রিয়াই দুটোকে ধরে রেখেছে, কারণ এখানে কথা দুইয়ের পার্থক্য নিয়ে নয়। কথা হলো, পুরো অঙ্কটাই মিটিয়ে দেওয়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Among the Last, But Which Last",
          "bn": "শেষ দিকের আয়াত, কিন্তু সবশেষ কোনটি?"
        },
        "p": [
          {
            "en": "Reports from the early generations place this verse among the last portions of the Quran to be revealed, and some of them name a number of days that the Prophet ﷺ lived afterwards. The reports do not agree with one another. Other narrations name the verse of kalalah at 4:176 as the last revealed, and others point to 2:278 on riba or to 5:3 on the completion of the religion.",
            "bn": "প্রথম যুগের বর্ণনায় এই আয়াতকে কুরআনের সবশেষে নাজিল হওয়া অংশগুলোর মধ্যে ধরা হয়েছে। কোনো কোনো বর্ণনায় এ কথাও আছে, এরপর নবী ﷺ কত দিন জীবিত ছিলেন। তবে বর্ণনাগুলো একটি আরেকটির সঙ্গে মেলে না। অন্য কিছু বর্ণনা বলে, সবশেষে নাজিল হয়েছে ৪:১৭৬, কালালার আয়াত। আবার কিছু বর্ণনা ইঙ্গিত করে সুদের বিষয়ে ২:২৭৮ আয়াতের দিকে, কিংবা দ্বীন পূর্ণ হওয়ার ঘোষণা ৫:৩ আয়াতের দিকে।"
          },
          {
            "en": "The honest position is that the reports differ, and that no single verse can be declared the final one on their strength. Some of the difference is a difference of question: last revealed of all, last revealed on a ruling, last revealed of a particular passage. What the reports do agree on is that this verse is late, and that what a community was left with near the end was a sentence about being returned to Allah.",
            "bn": "সৎ কথা হলো, বর্ণনাগুলোতে ভিন্নতা আছে, আর সেগুলোর জোরে কোনো একটি আয়াতকে নিশ্চিতভাবে সবশেষ বলে দেওয়া যায় না। ভিন্নতার কিছুটা আসলে প্রশ্নের ভিন্নতা। কেউ বলছেন সব মিলিয়ে সবশেষ আয়াতের কথা, কেউ বিধানের আয়াতগুলোর মধ্যে সবশেষের কথা, কেউ কোনো নির্দিষ্ট অংশের সবশেষ আয়াতের কথা। তবে একটা বিষয়ে বর্ণনাগুলো একমত: আয়াতটি একেবারে শেষ দিকের। শেষ সময়ে উম্মতের হাতে যা রেখে যাওয়া হলো, তা হলো আল্লাহর কাছে ফিরিয়ে নেওয়ার একটি বাক্য।"
          }
        ]
      },
      {
        "h": {
          "en": "They Will Not Be Wronged",
          "bn": "তাদের ওপর জুলুম করা হবে না"
        },
        "p": [
          {
            "en": "The verse's closing verb has already been heard in this passage. 2:279 told those who give up riba that they may keep their capital — la tazlimuna wa la tuzlamun, wronging nobody and being wronged by nobody. Here the same root is applied to the reckoning, and turned to the third person: wa hum la yuzlamun. Justice between two traders and justice on the Day are named with one term, which is this surah's way of saying that they are the same standard at two different scales.",
            "bn": "আয়াতের শেষ ক্রিয়াটি এই অংশে আগেও একবার এসেছে। সুদ ছেড়ে দেওয়া লোকদের ২:২৭৯ আয়াত বলেছে, তারা নিজেদের মূলধন রাখতে পারবে: 'লা তাযলিমূনা ওয়ালা তুযলামূন', কারও ওপর জুলুম করবে না, কারও জুলুমের শিকারও হবে না। এখানে একই ধাতু এসেছে আখিরাতের হিসাবের প্রসঙ্গে, আর এবার কথা বলা হচ্ছে 'তাদের' নিয়ে: 'ওয়া হুম লা ইউযলামূন'। দুই ব্যবসায়ীর মধ্যেকার ইনসাফ আর কিয়ামতের দিনের ইনসাফ, দুটোর জন্যই একই শব্দ। এভাবে সূরাটি বুঝিয়ে দেয়, মাপকাঠি একটাই, শুধু পরিসর দুই রকম।"
          },
          {
            "en": "6:160 closes with this identical clause after describing how deeds are repaid, so the phrase is the Quran's standing guarantee at the ledger. What it rules out on the human side is straightforward. A debt collected harshly from someone in hardship, a term quietly altered, a document not written because trust was assumed — each of these is an entry, and the verse says the entry survives the death of both parties.",
            "bn": "৬:১৬০ আয়াতও আমলের প্রতিদান কীভাবে দেওয়া হবে তা বলার পর ঠিক এই বাক্যাংশ দিয়েই শেষ হয়। অর্থাৎ হিসাবের খাতায় এটি কুরআনের স্থায়ী জামিন। মানুষের দিক থেকে এর ফলে কী চলবে না, তা পরিষ্কার। অভাবে থাকা কারও কাছ থেকে কড়াভাবে আদায় করা ঋণ, চুপিচুপি বদলে দেওয়া মেয়াদ, 'বিশ্বাস তো আছেই' ভেবে না-লেখা দলিল: এর প্রতিটিই খাতার একেকটি হিসাব। আর আয়াত বলছে, দুই পক্ষ মারা যাওয়ার পরও সেই হিসাব মুছে যায় না।"
          }
        ]
      }
    ]
  },
  "2:284": {
    "sections": [
      {
        "h": {
          "en": "Where the Ending Begins",
          "bn": "যেখানে সমাপ্তি শুরু"
        },
        "p": [
          {
            "en": "This verse opens the closing group of Surah al-Baqarah. Immediately before it, 2:283 finishes the long passage on debts, pledges and witnesses with a warning about the inside of a person: do not conceal testimony, for whoever conceals it, his heart is sinful. The next verse takes that verb, concealing, out of the courtroom and applies it to everything a human being keeps out of sight.",
            "bn": "এই আয়াত দিয়ে সূরা আল-বাকারার শেষ অংশ শুরু হয়। ঠিক আগে ২:২৮৩ আয়াত ঋণ, বন্ধক আর সাক্ষ্যের দীর্ঘ আলোচনা শেষ করেছে মানুষের ভেতরের ব্যাপারে এক সতর্কবাণী দিয়ে: সাক্ষ্য গোপন করো না; যে তা গোপন করে, তার অন্তর গুনাহগার। পরের আয়াতটি এই 'গোপন করা' ক্রিয়াটিকে আদালত থেকে বের করে আনে, আর মানুষ যা কিছু চোখের আড়ালে রাখে, তার সবকিছুর ওপর খাটায়।"
          },
          {
            "en": "The verse states ownership first — to Allah belongs whatever is in the heavens and whatever is in the earth — a clause the reader has already met in 2:255 earlier in this same surah. Then the accounting: whether you show what is within yourselves or conceal it, Allah will bring you to account for it. Then two possibilities, and the order is worth noticing: He forgives whom He wills, and He punishes whom He wills. Forgiveness is named first.",
            "bn": "আয়াতটি প্রথমে মালিকানার কথা বলে: আসমানে যা আছে আর জমিনে যা আছে, সবই আল্লাহর। এই কথাটি পাঠক এই সূরাতেই আগে ২:২৫৫ আয়াতে পেয়েছেন। তারপর হিসাবের কথা: তোমাদের মনে যা আছে, তা প্রকাশ করো বা গোপন রাখো, আল্লাহ তার হিসাব নেবেন। তারপর দুটি সম্ভাবনা, আর ক্রমটা খেয়াল করার মতো: তিনি যাকে ইচ্ছা ক্ষমা করেন, যাকে ইচ্ছা শাস্তি দেন। ক্ষমার কথাই আগে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night It Fell Heavy",
          "bn": "যে রাতে তা ভারী ঠেকল"
        },
        "p": [
          {
            "en": "Muslim narrates from Abu Hurayrah (RA) that when this verse came down it weighed on the Companions. They came to the Prophet ﷺ, knelt, and said that they had been charged with duties they could carry — prayer, fasting, striving, charity — but that this verse was beyond their strength. He answered by asking whether they wished to say what the two communities of the People of the Book before them had said: we hear and we disobey.",
            "bn": "ইমাম মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, এই আয়াত নাজিল হলে সাহাবীদের কাছে তা খুব ভারী মনে হলো। তাঁরা নবী ﷺ-এর কাছে এসে হাঁটু গেড়ে বসলেন। বললেন, এতদিন তাঁদের এমন সব দায়িত্ব দেওয়া হয়েছে যা তাঁরা পালন করতে পারেন: নামাজ, রোজা, জিহাদ, সদকা। কিন্তু এই আয়াত তাঁদের সাধ্যের বাইরে। জবাবে নবী ﷺ জিজ্ঞেস করলেন, তোমরাও কি তোমাদের আগের দুই আহলে কিতাব সম্প্রদায়ের মতো বলতে চাও: আমরা শুনলাম এবং অমান্য করলাম?"
          },
          {
            "en": "He told them to say instead: we hear and we obey, Your forgiveness, our Lord, and to You is the destination. They said it, and the narration reports that their tongues submitted to it. What they had just been taught to say is then found word for word at the close of 2:285, which came down after. Then 2:286 came, and in this narration the answer given to each petition of that closing supplication is: Yes. A second narration in Muslim, from Ibn Abbas (RA), reports the answer as: I have done so.",
            "bn": "তিনি বললেন, বরং তোমরা বলো: আমরা শুনলাম এবং মানলাম; হে আমাদের রব, আমরা আপনার ক্ষমা চাই, আর প্রত্যাবর্তন আপনারই দিকে। সাহাবীরা তা-ই বললেন, আর বর্ণনায় আছে, তাঁদের জিহ্বা কথাগুলোর কাছে বশ মানল। তাঁদের যা বলতে শেখানো হলো, হুবহু সেই কথাগুলোই পাওয়া যায় পরে নাজিল হওয়া ২:২৮৫ আয়াতের শেষে। তারপর নাজিল হলো ২:২৮৬। এই বর্ণনা অনুযায়ী, শেষের সেই দোয়ার প্রতিটি আবেদনের জবাব ছিল: হ্যাঁ। মুসলিমের আরেক বর্ণনায় ইবনে আব্বাস (রাঃ) থেকে জবাবটি এসেছে এভাবে: আমি তা করলাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Abrogated, or Explained?",
          "bn": "রহিত, নাকি ব্যাখ্যা?"
        },
        "p": [
          {
            "en": "The narration in Muslim itself uses the word: Allah then abrogated it. Al-Bukhari records a Companion's statement that this verse was abrogated by what came after it. So the abrogation reading is not an invention of later scholars; it is in the reports. But it is not the only reading among the early authorities, and pretending otherwise would misrepresent the field.",
            "bn": "মুসলিমের বর্ণনাতেই শব্দটা আছে: তারপর আল্লাহ এটি রহিত করে দিলেন। ইমাম বুখারী এক সাহাবীর কথা এনেছেন যে, পরে নাজিল হওয়া আয়াত এই আয়াতকে রহিত করেছে। তাই রহিত হওয়ার মতটা পরের যুগের আলিমদের বানানো নয়, বর্ণনাতেই আছে। তবে প্রথম যুগের আলিমদের মধ্যে এটাই একমাত্র মত নয়। অন্যরকম দেখালে বিষয়টার ভুল ছবি দেওয়া হবে।"
          },
          {
            "en": "Ibn Kathir reports the other position as well: that nothing was lifted, and that what happened was clarification. On that reading a person is called to account for what the heart settles on and acts upon, not for the involuntary thought that crosses it and is refused. Those who hold it cite al-Bukhari's narration from Abu Hurayrah (RA) that Allah has pardoned this community for what occurs to their minds so long as they do not act on it or speak it. The difference is old, and the honest thing is to say that the scholars differ.",
            "bn": "ইবনে কাসীর অন্য মতটিও উল্লেখ করেছেন: কিছুই তুলে নেওয়া হয়নি, যা হয়েছে তা হলো ব্যাখ্যা। এই মত অনুযায়ী মানুষকে হিসাব দিতে হবে সেই বিষয়ের, যার ওপর মন স্থির হয় আর যে অনুযায়ী সে কাজ করে। মনে অনিচ্ছায় যে ভাবনা উঁকি দিয়ে যায় আর সে তা ফিরিয়ে দেয়, তার হিসাব নয়। এই মতের পক্ষে যাঁরা, তাঁরা আবু হুরাইরা (রাঃ) থেকে বুখারীর বর্ণনাটি দলিল হিসেবে আনেন: আল্লাহ এই উম্মতের মনে যা উদয় হয় তা মাফ করে দিয়েছেন, যতক্ষণ না তারা সে অনুযায়ী কাজ করে বা মুখে বলে। মতভেদটা পুরোনো। সৎ কথা হলো, এখানে আলিমদের মধ্যে মতভেদ আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Heart Is Not Exempt",
          "bn": "অন্তরও হিসাবের আওতায়"
        },
        "p": [
          {
            "en": "Whichever reading is taken, the inner life is not left unaccountable, because other verses say the same thing without any dispute attached. 2:225 says Allah does not take you to task for what is unintentional in your oaths, but for what your hearts have earned. 33:5 says there is no blame for an honest mistake, but there is for what your hearts intended. In both, the settled intent of the heart is the thing recorded.",
            "bn": "যে মতই নেওয়া হোক, মনের ভেতরের জগৎ হিসাবের বাইরে থাকে না। কারণ অন্য আয়াতগুলো কোনো মতভেদ ছাড়াই একই কথা বলে। ২:২২৫ আয়াত বলে, তোমাদের অনিচ্ছাকৃত কসমের জন্য আল্লাহ তোমাদের পাকড়াও করবেন না, কিন্তু তোমাদের অন্তর যা অর্জন করেছে তার জন্য পাকড়াও করবেন। ৩৩:৫ আয়াত বলে, ভুলবশত কিছু করলে গুনাহ নেই, কিন্তু অন্তর যা ইচ্ছা করে করেছে তার জন্য আছে। দুই জায়গাতেই যা লেখা হয়, তা অন্তরের পাকা সংকল্প।"
          },
          {
            "en": "3:29 states the knowledge side in almost the same words as this verse: whether you conceal what is in your breasts or reveal it, Allah knows it. Read together, the verses close a door that most of us leave quietly open — the assumption that the interior of a person is unpoliced territory, where motives can be kept for private use and never audited.",
            "bn": "৩:২৯ আয়াত জানার দিকটা প্রায় এই আয়াতের ভাষাতেই বলে: তোমাদের বুকে যা আছে তা গোপন রাখো বা প্রকাশ করো, আল্লাহ তা জানেন। আয়াতগুলো একসঙ্গে পড়লে একটা দরজা বন্ধ হয়ে যায়, যেটা আমরা বেশির ভাগই চুপচাপ খোলা রেখে দিই। সেটা এই ধারণা: মানুষের ভেতরটা পাহারাহীন এলাকা, সেখানে নিয়তগুলো নিজের কাজে লুকিয়ে রাখা যায়, কেউ কখনো যাচাই করবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under It",
          "bn": "এই আয়াত মেনে চলা"
        },
        "p": [
          {
            "en": "The practical weight of the verse falls on motive rather than on thought. A passing resentment that arrives and is pushed away is not the target; a grudge that is fed, or a public good deed done for the look of it, is. The work it asks for is quiet and continuous: check what you actually want from an action before you do it, and again afterwards, when the reason tends to change.",
            "bn": "আয়াতটির বাস্তব ভার পড়ে নিয়তের ওপর, ভাবনার ওপর নয়। ক্ষণিকের বিরক্তি মনে এল আর আপনি সরিয়ে দিলেন, সেটা আয়াতের লক্ষ্য নয়। লক্ষ্য হলো সেই বিদ্বেষ, যাকে খাইয়ে-পরিয়ে পুষে রাখা হয়, কিংবা লোক দেখানোর জন্য প্রকাশ্যে করা কোনো ভালো কাজ। এর জন্য যে আমল দরকার, তা নীরব আর নিরন্তর। কোনো কাজের আগে যাচাই করুন, এ থেকে আসলে আপনি কী চান। কাজের পরেও আবার যাচাই করুন, কারণ তখন উদ্দেশ্যটা প্রায়ই বদলে যায়।"
          },
          {
            "en": "It is worth ending where the verse ends, and where the passage it opens ends. This verse names forgiveness before punishment. The three verses it begins close with 2:286 and a supplication that was answered request by request. Being seen through, in this Book, is never presented as a reason for despair; it is presented as a reason to bring the inside into line with the outside.",
            "bn": "শেষ করা ভালো সেখানেই, যেখানে আয়াতটি শেষ হয়, আর যেখানে শেষ হয় এর শুরু করা অংশটি। এই আয়াত শাস্তির আগে ক্ষমার নাম নিয়েছে। যে তিন আয়াতের শুরু এখান থেকে, তা শেষ হয় ২:২৮৬ আয়াতে, এমন এক দোয়া দিয়ে যার প্রতিটি আবেদন একে একে কবুল হয়েছিল। আল্লাহ ভেতর পর্যন্ত দেখেন, এই কিতাবে কথাটা কখনো হতাশার কারণ হিসেবে আসেনি। এসেছে ভেতরটাকে বাইরের সঙ্গে মিলিয়ে নেওয়ার তাগিদ হিসেবে।"
          }
        ]
      }
    ]
  },
  "2:286": {
    "sections": [
      {
        "h": {
          "en": "Capacity, Not Cruelty",
          "bn": "সাধ্য, নিষ্ঠুরতা নয়"
        },
        "p": [
          {
            "en": "The verse begins with a rule that governs the whole of the law: Allah does not burden a soul beyond its wus'. The word is worth pausing on. Wus' is not the utmost a person can manage before collapsing; it is the comfortable room a person has, the space within their capacity. The commentators point out that Allah could have used a word meaning maximum effort and did not. The obligations of Islam sit inside our range, not at its outer edge.",
            "bn": "আয়াতটি শুরু হয় এমন এক নীতি দিয়ে, যা পুরো শরীয়তের ওপর খাটে: আল্লাহ কোনো প্রাণের ওপর তার 'উস'-এর বাইরে বোঝা চাপান না। শব্দটির কাছে একটু থামা দরকার। 'উস' মানে ভেঙে পড়ার ঠিক আগ পর্যন্ত সর্বোচ্চ চেষ্টা নয়। এর মানে মানুষের সামর্থ্যের ভেতরে স্বস্তিতে চলার মতো জায়গাটুকু। মুফাসসিরগণ দেখিয়েছেন, আল্লাহ চাইলে 'সর্বোচ্চ চেষ্টা' বোঝায় এমন শব্দ ব্যবহার করতে পারতেন, কিন্তু করেননি। ইসলামের দায়িত্বগুলো আমাদের সামর্থ্যের ভেতরেই, তার শেষ সীমায় নয়।"
          },
          {
            "en": "The next clause turns on a small grammatical shift that the commentators regularly note. For good it says laha ma kasabat, hers is what she earned; for evil, wa 'alayha ma iktasabat, against her is what she acquired. The second verb is a form that carries added effort. Good is written down as soon as it is earned; evil is recorded as something a person had to work at. The asymmetry is not an accident of style.",
            "bn": "পরের বাক্যে একটি ছোট ব্যাকরণগত বদল আছে, যার কথা মুফাসসিরগণ প্রায়ই বলেন। ভালোর বেলায় বলা হয়েছে 'লাহা মা কাসাবাত', সে যা অর্জন করেছে তা তারই। মন্দের বেলায় 'ওয়া আলাইহা মাক্‌তাসাবাত', সে যা কামাই করেছে তা তার বিরুদ্ধে। দ্বিতীয় ক্রিয়াটির গঠনে বাড়তি চেষ্টার ভাব আছে। ভালো কাজ অর্জন করামাত্র লেখা হয়ে যায়। আর মন্দ কাজ লেখা হয় এমন কিছু হিসেবে, যার পেছনে মানুষকে খাটতে হয়েছে। এই অসমতা নিছক ভাষার সৌন্দর্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night the Weight Lifted",
          "bn": "যে রাতে বোঝা নেমে গেল"
        },
        "p": [
          {
            "en": "This is one of the places where a sound occasion of revelation is preserved. Muslim narrates that when 2:284 came down, saying that Allah will call to account whatever the servants disclose or conceal within themselves, the companions found it heavy and came to the Prophet ﷺ saying that this was beyond their power. He told them not to answer as the People of the Book had answered, but to say: we hear and we obey.",
            "bn": "এটি এমন এক জায়গা, যেখানে আয়াত নাজিলের প্রেক্ষাপট সহীহ সূত্রে সংরক্ষিত আছে। মুসলিম বর্ণনা করেন, ২:২৮৪ নাজিল হলো, যেখানে বলা হয়েছে বান্দারা মনের ভেতর যা প্রকাশ করে বা গোপন রাখে, আল্লাহ সবকিছুর হিসাব নেবেন। সাহাবীদের কাছে তা ভারী ঠেকল। তাঁরা নবী ﷺ-এর কাছে এসে বললেন, এটা তাঁদের সাধ্যের বাইরে। নবী ﷺ তাঁদের বললেন, আহলে কিতাব যেভাবে জবাব দিয়েছিল সেভাবে জবাব দিয়ো না; বরং বলো: আমরা শুনলাম এবং মানলাম।"
          },
          {
            "en": "When they said it and their tongues submitted to it, this verse came down and lifted what they had feared. In this narration the answer given to each request in the closing supplication is: Yes. A second narration in Muslim, from Ibn Abbas (RA), reports the answer as: I have done so. That is the emotional shape of the passage. A community expressed obedience before it received relief, and then relief arrived request by request. The verse is the last of Surah al-Baqarah, and it ends the longest surah on an answered prayer.",
            "bn": "তাঁরা যখন তা বললেন আর তাঁদের জিহ্বা তাতে বশ মানল, তখন এই আয়াত নাজিল হয়ে তাঁদের ভয় দূর করে দিল। এই বর্ণনায় শেষের দোয়ার প্রতিটি আবেদনের জবাব এসেছে: হ্যাঁ। মুসলিমের আরেক বর্ণনায়, ইবনে আব্বাস (রাঃ) থেকে, জবাবটি এসেছে: আমি তা করলাম। পুরো অংশের আবেগটা এভাবেই সাজানো। স্বস্তি পাওয়ার আগেই সাহাবীদের জামাত আনুগত্য ঘোষণা করেছিল, তারপর স্বস্তি এল এক এক আবেদন ধরে। আয়াতটি সূরা আল-বাকারার শেষ আয়াত। কুরআনের দীর্ঘতম সূরা শেষ হয় একটি কবুল হওয়া দোয়া দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Requests in Order",
          "bn": "পরপর পাঁচটি আবেদন"
        },
        "p": [
          {
            "en": "The supplication is carefully ordered. First, do not take us to task if we forget or fall into error, which asks for the two failures that are not deliberate. Then, do not place upon us an isr, a heavy binding burden such as was placed on those before us. Then, do not make us bear what we have no strength for. Notice that the servant asks for ease even after being told the law is already within capacity.",
            "bn": "দোয়াটি খুব যত্ন করে সাজানো। প্রথমে: আমরা যদি ভুলে যাই বা ভুল করে ফেলি, আমাদের পাকড়াও করবেন না। এখানে চাওয়া হচ্ছে সেই দুই ত্রুটির মাফ, যা ইচ্ছাকৃত নয়। তারপর: আমাদের ওপর 'ইসর' চাপাবেন না, অর্থাৎ এমন ভারী, বেঁধে ফেলা বোঝা, যা আমাদের আগের লোকদের ওপর চাপানো হয়েছিল। তারপর: যা বহন করার শক্তি আমাদের নেই, তা আমাদের ওপর চাপাবেন না। খেয়াল করুন, শরীয়ত আগে থেকেই সাধ্যের ভেতরে, এ কথা জানানোর পরও বান্দা সহজের জন্য দোয়া করছে।"
          },
          {
            "en": "The last three words for mercy are not repetition. 'Afw is erasure, that the offence be wiped away as though it had not happened; maghfirah comes from covering, that it be veiled from exposure; rahmah is the mercy that gives after the debt is settled. The prayer ends by naming Allah our mawla, our protector and patron, and asking for help against those who reject faith. Weakness has been turned, sentence by sentence, into a claim on His care.",
            "bn": "শেষের তিনটি শব্দ একই কথার পুনরাবৃত্তি নয়। 'আফও মানে মুছে ফেলা, যেন অপরাধটা ঘটেইনি। মাগফিরাত এসেছে ঢেকে দেওয়ার অর্থ থেকে, যেন তা প্রকাশ না পায়। আর রহমত সেই দয়া, যা দেনা মিটে যাওয়ার পরও দান করে। দোয়ার শেষে আল্লাহকে ডাকা হয় 'মাওলা' বলে, অর্থাৎ আমাদের অভিভাবক ও সহায়। আর কাফির সম্প্রদায়ের বিরুদ্ধে সাহায্য চাওয়া হয়। বাক্যে বাক্যে দুর্বলতা বদলে গেছে তাঁর যত্ন পাওয়ার দাবিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Draw",
          "bn": "মুফাসসিরগণ যা বের করেন"
        },
        "p": [
          {
            "en": "The majority of exegetes take the opening rule as a foundation of Islamic legal reasoning rather than a comforting sentiment. From it the jurists derive that inability removes obligation: the one who cannot stand prays sitting, the one who cannot fast makes up or feeds, the one under genuine compulsion is not held as the free actor is. Whole chapters of fiqh on concession and necessity rest on this single clause.",
            "bn": "অধিকাংশ মুফাসসির আয়াতের প্রথম নীতিটিকে নিছক সান্ত্বনার কথা হিসেবে দেখেন না। তাঁদের কাছে এটি ইসলামী ফিকহের একটি ভিত্তি। এখান থেকেই ফকীহগণ নীতি বের করেছেন: অক্ষমতা থাকলে দায়িত্ব থাকে না। যে দাঁড়াতে পারে না, সে বসে নামাজ পড়ে। যে রোজা রাখতে পারে না, সে কাজা করে বা ফিদইয়া দেয়। যাকে সত্যিই জোর করে বাধ্য করা হয়েছে, তাকে স্বাধীন মানুষের মতো ধরা হয় না। ছাড় ও জরুরত নিয়ে ফিকহের পুরো পুরো অধ্যায় এই একটি বাক্যের ওপর দাঁড়িয়ে।"
          },
          {
            "en": "They also read the verse against 2:284 rather than apart from it. The earlier verse establishes that Allah knows the inner life completely; this one clarifies that He does not punish the passing thought a person neither acted on nor settled into. Knowledge is total; accountability is measured. Holding both together is what keeps a believer honest without becoming paralysed by self-inspection.",
            "bn": "তাঁরা আয়াতটিকে ২:২৮৪ থেকে আলাদা করে পড়েন না, পাশাপাশি রেখে পড়েন। আগের আয়াত জানিয়ে দেয়, মানুষের ভেতরের সবকিছু আল্লাহ পুরোপুরি জানেন। আর এই আয়াত পরিষ্কার করে দেয়, মনে আসা যে ভাবনা মানুষ কাজে রূপ দেয়নি, মনেও গেঁথে নেয়নি, তার জন্য তিনি শাস্তি দেন না। জ্ঞান তাঁর পূর্ণ; জবাবদিহি মেপে মেপে। দুটোকে একসঙ্গে ধরে রাখলে মুমিন সৎ থাকে, আবার নিজের ভেতর খুঁটিয়ে দেখতে দেখতে অবশও হয়ে পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "In the Practice of the Prophet ﷺ",
          "bn": "নবী ﷺ-এর সুন্নাহতে"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both record that the Prophet ﷺ said whoever recites the last two verses of Surah al-Baqarah in a night, they will suffice him. Whatever the precise scope of that sufficiency, the practice it produced is clear: these verses became part of the believer's night, recited as protection and as the closing statement of the day. Many companions are reported to have kept them as a fixed habit before sleeping.",
            "bn": "বুখারী ও মুসলিম দুজনেই বর্ণনা করেন, নবী ﷺ বলেছেন: যে ব্যক্তি রাতে সূরা আল-বাকারার শেষ দুই আয়াত পড়বে, তার জন্য তা যথেষ্ট হবে। এই 'যথেষ্ট' ঠিক কতটুকু, তা যা-ই হোক, এ থেকে যে আমল গড়ে উঠেছে তা পরিষ্কার। আয়াতগুলো মুমিনের রাতের অংশ হয়ে গেছে। হেফাজতের জন্য পড়া হয়, আবার দিনের শেষ কথা হিসেবেও। বহু সাহাবী সম্পর্কে বর্ণিত আছে, ঘুমানোর আগে এগুলো পড়া তাঁদের বাঁধা অভ্যাস ছিল।"
          },
          {
            "en": "Muslim also narrates that these closing verses, together with al-Fatihah, were given to the Prophet ﷺ as two lights not given to any prophet before him. The wording matters for how a Muslim uses them. They are described as a gift and a light, not as an incantation. Recited without meaning they are still recitation; recited with meaning they are a conversation the believer has already been told was answered.",
            "bn": "মুসলিম আরও বর্ণনা করেন, সূরা ফাতিহা আর এই শেষ আয়াতগুলো নবী ﷺ-কে দুটি নূর হিসেবে দেওয়া হয়েছে, যা তাঁর আগে কোনো নবীকে দেওয়া হয়নি। একজন মুসলিম এগুলো কীভাবে পড়বে, তা বুঝতে শব্দগুলো জরুরি। এগুলোকে বলা হয়েছে উপহার ও নূর, কোনো মন্ত্র নয়। অর্থ না বুঝে পড়লেও তা তিলাওয়াত। কিন্তু অর্থ বুঝে পড়লে তা হয়ে ওঠে এমন এক কথোপকথন, যার জবাব মিলেছে বলে মুমিনকে আগেই জানানো হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living With Your Limits",
          "bn": "নিজের সীমা জেনে চলা"
        },
        "p": [
          {
            "en": "It helps to be exact about what the opening promise covers. It says that Allah does not impose religious obligation beyond capacity. It does not promise that life will never feel overwhelming, that grief will stay manageable, or that a person will never need help, rest or treatment. Reading it as a claim that no believer can ever be crushed by circumstances turns a mercy into a burden, which is the opposite of the verse's own direction.",
            "bn": "শুরুর প্রতিশ্রুতিটা ঠিক কতটুকু জুড়ে, তা সঠিকভাবে বোঝা দরকার। এটি বলে, আল্লাহ সাধ্যের বেশি দ্বীনি দায়িত্ব চাপান না। এটি এমন ওয়াদা করে না যে জীবন কখনো অসহ্য মনে হবে না, শোক সবসময় সামলে নেওয়া যাবে, কিংবা মানুষের কখনো সাহায্য, বিশ্রাম বা চিকিৎসা লাগবে না। কেউ যদি একে এভাবে পড়ে যে কোনো মুমিন কখনো পরিস্থিতির চাপে ভেঙে পড়তে পারে না, তাহলে রহমতকেই বোঝা বানিয়ে ফেলা হয়। অথচ আয়াতটি চলছে ঠিক উল্টো দিকে।"
          },
          {
            "en": "Used properly it does two things at once. When a duty feels impossible, it asks whether the duty is truly beyond capacity or merely beyond current habit, and the difference is usually clear on inspection. And when a person is genuinely at the end of their strength, it hands them a supplication that Allah Himself taught for exactly that moment, ending not in a complaint but in the words: You are our protector, so help us.",
            "bn": "ঠিকভাবে কাজে লাগালে আয়াতটি একসঙ্গে দুটো কাজ করে। কোনো দায়িত্ব অসম্ভব মনে হলে প্রশ্ন তোলে: দায়িত্বটা কি সত্যিই সাধ্যের বাইরে, নাকি শুধু এখনকার অভ্যাসের বাইরে? একটু খতিয়ে দেখলে পার্থক্যটা সাধারণত পরিষ্কার হয়ে যায়। আর কেউ যখন সত্যিই শক্তির শেষ সীমায় পৌঁছে যায়, তখন আয়াতটি তার হাতে তুলে দেয় ঠিক সেই মুহূর্তের জন্য আল্লাহর নিজের শেখানো একটি দোয়া। দোয়াটি অভিযোগে শেষ হয় না, শেষ হয় এই কথায়: আপনি আমাদের অভিভাবক, তাই আমাদের সাহায্য করুন।"
          }
        ]
      }
    ]
  }
});
