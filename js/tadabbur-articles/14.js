/**
 * Tadabbur long-form articles — surah 14.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "14:1": {
    "sections": [
      {
        "h": {
          "en": "A Book With a Stated Job",
          "bn": "নির্দিষ্ট কাজ নিয়ে এক কিতাব"
        },
        "p": [
          {
            "en": "Alif, lam, ra. Ibn Kathir records that the commentators differed over these disconnected letters, some leaving their meaning to Allah and others interpreting them, and he counts this verse among the openings that go straight on to speak for the Book. Then comes kitabun anzalnahu ilayka. At-Tabari, al-Baghawi and Ibn Kathir supply the word left unsaid: this is a Book which We sent down to you, O Muhammad, meaning the Qur'an. Ma'arif al-Qur'an gives the grammar: kitabun is the predicate of an implied hadha, this.",
            "bn": "আলিফ-লাম-রা। ইবন কাসীর জানান, এই বিচ্ছিন্ন অক্ষরগুলোর অর্থ নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে: কেউ এর জ্ঞান আল্লাহর হাতে ছেড়ে দিয়েছেন, কেউ ব্যাখ্যা করেছেন। কিছু সূরা এই অক্ষর দিয়ে শুরু হয়ে সঙ্গে সঙ্গে কিতাবের পক্ষে কথা বলে, আর ইবন কাসীর এ আয়াতকে সেগুলোর মধ্যে গোনেন। তারপর আসে কিতাবুন আনযালনাহু ইলাইকা। তাবারী, বাগাভী আর ইবন কাসীর না-বলা শব্দটা জুড়ে দেন: এটি এমন এক কিতাব যা আমি তোমার প্রতি নাযিল করেছি, হে মুহাম্মাদ, অর্থাৎ কুরআন। মাআরিফুল কুরআন ব্যাকরণটা বলে দেয়: কিতাবুন হলো উহ্য 'হাযা' (এটি) শব্দের বিধেয়।"
          },
          {
            "en": "The surah is Makkan. Al-Qurtubi reports that it is Makkan throughout in the view of al-Hasan, 'Ikrimah and Jabir, while Ibn 'Abbas and Qatadah except two verses as Madinan, and some say three: the passage beginning at 14:28, which he says came down about those who made war on Allah and His Messenger. Ma'arif al-Qur'an traces the surah's course: it opens with the mission of the messengers, moves to tawhid and its proofs, and in that setting brings in Ibrahim (AS), after whom it is named.",
            "bn": "সূরাটি মক্কী। কুরতুবী জানান, হাসান, ইকরিমা আর জাবিরের মতে পুরো সূরাই মক্কায় নাযিল। ইবন আব্বাস (রাঃ) আর কাতাদা দুটি আয়াতকে মাদানী বলে আলাদা রাখেন, কারও মতে তিনটি। সেটি ১৪:২৮ থেকে শুরু হওয়া অংশ, আর কুরতুবী বলেন, তা নাযিল হয়েছিল তাদের ব্যাপারে যারা আল্লাহ ও তাঁর রাসূলের বিরুদ্ধে যুদ্ধ করেছিল। মাআরিফুল কুরআন সূরার গতিপথ দেখায়। শুরুতে রাসূলদের দায়িত্বের বিবরণ, তারপর তাওহীদ ও তার প্রমাণ, আর সেই প্রসঙ্গেই আসে ইবরাহীম (আঃ)-এর কাহিনি। তাঁর নামেই সূরার নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Addressed to One, Meant for All",
          "bn": "সম্বোধন একজনকে, উদ্দেশ্য সবাই"
        },
        "p": [
          {
            "en": "Ibn Kathir describes the Book and its bearer in matching terms: the noblest Book Allah sent down from the heaven, upon the noblest Messenger He sent on the earth, to all of its people, Arabs and non-Arabs. Ma'arif al-Qur'an reads the address in two directions. Ascribing the sending down to Allah shows the greatness of the Book, since He revealed it Himself. Making the Prophet ﷺ its addressee shows his own high station, as the first to whom it was spoken.",
            "bn": "কিতাব আর তার বাহককে ইবন কাসীর একই মাপে বর্ণনা করেন। আসমান থেকে আল্লাহ যত কিতাব নাযিল করেছেন, এটি তার মধ্যে সবচেয়ে মর্যাদাবান। আর যাঁর উপর নাযিল করেছেন, পৃথিবীতে পাঠানো রাসূলদের মধ্যে তিনি সবচেয়ে মর্যাদাবান, পাঠানো হয়েছে পৃথিবীর সব মানুষের কাছে, আরব-অনারব সবার কাছে। মাআরিফুল কুরআন সম্বোধনটার দুটি দিক দেখায়। নাযিল করার কাজ আল্লাহর দিকে সম্পর্কিত, তাই কিতাবের মহত্ত্ব বোঝা যায়, কারণ তিনি নিজেই তা পাঠিয়েছেন। আর নবী ﷺ এর প্রথম সম্বোধিত ব্যক্তি, তাই বোঝা যায় তাঁর নিজের উঁচু মর্যাদাও।"
          },
          {
            "en": "The audience is then named: an-nas, people. Ma'arif al-Qur'an takes the word for humankind, all who are present and all who will come. And the verse gives the Book a purpose before it says anything else about it: li-tukhrija, so that you may bring out. Ibn Kathir's paraphrase makes the starting point plain: We sent you, O Muhammad, with this Book only so that you bring people out of what they are in, from misguidance and error, to guidance and right conduct.",
            "bn": "এরপর শ্রোতাদের নাম আসে: আন-নাস, মানুষ। মাআরিফুল কুরআন শব্দটিকে গোটা মানবজাতি অর্থে নেয়, যারা আছে আর যারা ভবিষ্যতে আসবে, সবাই। কিতাব সম্পর্কে আর কিছু বলার আগেই আয়াতটি তার উদ্দেশ্য জানিয়ে দেয়: লিতুখরিজা, যাতে তুমি বের করে আনো। ইবন কাসীরের ব্যাখ্যায় শুরুর জায়গাটা পরিষ্কার। হে মুহাম্মাদ, আমি তোমাকে এ কিতাব দিয়ে পাঠিয়েছি শুধু এজন্য, যাতে মানুষ যে অবস্থায় আছে, সেই ভ্রষ্টতা ও বিপথগামিতা থেকে তুমি তাদের বের করে আনো হিদায়াত ও সঠিক পথের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Misguidance Under Many Names",
          "bn": "ভ্রষ্টতার নানা নাম"
        },
        "p": [
          {
            "en": "Mina az-zulumati ila an-nur: out of the darknesses into the light. At-Tabari: that you may guide them by it out of the darknesses of misguidance and disbelief into the light of faith and its brightness, and by it show the people of ignorance and blindness the ways of right conduct and guidance. He cites Qatadah: from misguidance to guidance. Ibn Kathir and the Muyassar name the same pair, misguidance and error, left for guidance.",
            "bn": "মিনায যুলুমাতি ইলান নূর: অন্ধকারগুলো থেকে আলোর দিকে। তাবারী বলেন, যাতে তুমি এর মাধ্যমে তাদের পথ দেখাও, ভ্রষ্টতা আর কুফরের অন্ধকার থেকে ঈমানের আলো আর তার উজ্জ্বলতার দিকে। আর এর মাধ্যমে অজ্ঞতা ও অন্ধত্বে থাকা মানুষকে দেখিয়ে দাও সঠিক পথ ও হিদায়াতের রাস্তা। তিনি কাতাদার কথা উদ্ধৃত করেন: ভ্রষ্টতা থেকে হিদায়াতের দিকে। ইবন কাসীর আর মুয়াসসারও একই জোড়ার কথা বলেন: ভ্রষ্টতা আর বিপথ ছেড়ে হিদায়াতের দিকে।"
          },
          {
            "en": "Al-Qurtubi widens the list: out of the darknesses of disbelief, misguidance and ignorance into the light of faith and knowledge. He calls the wording a likeness, since disbelief stands in the place of darkness and Islam in the place of light. Then, under the words it is said, he adds two further pairs, from innovation to the Sunnah and from doubt to certainty, and calls the meanings close. As-Sa'di goes furthest: the darknesses of ignorance, disbelief, bad character and the kinds of sin, left for the light of knowledge, faith and good character.",
            "bn": "কুরতুবী তালিকাটা আরও বড় করেন: কুফর, ভ্রষ্টতা আর অজ্ঞতার অন্ধকার থেকে ঈমান ও জ্ঞানের আলোর দিকে। তাঁর মতে কথাটা উপমা। কুফর যেন অন্ধকার, আর ইসলাম যেন আলো। তারপর 'বলা হয়' কথাটি দিয়ে তিনি আরও দুটি জোড়া যোগ করেন: বিদআত থেকে সুন্নাহর দিকে, সন্দেহ থেকে ইয়াকীনের দিকে। আর বলেন, অর্থগুলো একটা আরেকটার কাছাকাছি। সা'দীর তালিকা সবচেয়ে বড়। তাঁর মতে অন্ধকার হলো অজ্ঞতা, কুফর, মন্দ চরিত্র আর নানা রকম গুনাহ। আর আলো হলো জ্ঞান, ঈমান আর উত্তম চরিত্র।"
          },
          {
            "en": "The glosses differ in breadth, not in direction. As-Sa'di's list, with bad character and sin in it, reaches people who already believe. Two of them also say how the bringing out is done: al-Qurtubi, by the Book, through your calling people to it; al-Baghawi, li-tad'uhum, so that you call them. The page on 2:257 treats the same phrase where Allah Himself brings the believers out and the taghut lead the other way; here the means named are a Book and a man who carries it.",
            "bn": "ব্যাখ্যাগুলোর পার্থক্য পরিসরে, দিকে নয়। সা'দীর তালিকায় মন্দ চরিত্র আর গুনাহ আছে, তাই তা এমন মানুষের কাছেও পৌঁছায় যারা আগে থেকেই ঈমান এনেছে। দুজন মুফাসসির বের করে আনার পদ্ধতিও বলেন। কুরতুবী বলেন, কিতাব দিয়ে, মানুষকে তার দিকে তোমার দাওয়াতের মাধ্যমে। বাগাভী বলেন, লিতাদউয়াহুম, যাতে তুমি তাদের ডাকো। ২:২৫৭ আয়াতের পাতায় একই বাক্যাংশ এসেছে সেখানে, যেখানে আল্লাহ নিজে মুমিনদের বের করে আনেন আর তাগূত টানে উল্টো দিকে। এখানে মাধ্যম হিসেবে নাম এসেছে একটি কিতাবের আর তার বাহক একজন মানুষের।"
          }
        ]
      },
      {
        "h": {
          "en": "Darknesses Many, Light One",
          "bn": "অন্ধকার অনেক, আলো একটাই"
        },
        "p": [
          {
            "en": "Of the commentators read for this verse, Ma'arif al-Qur'an is the one that remarks on the number of the two nouns. Az-zulumat is the plural of zulmah, darkness, and here it means the darkness of kufr and shirk and the darkness of evil deeds. It is plural, Ma'arif al-Qur'an explains, because kufr and shirk come in many kinds and shades, and evil deeds are countless. An-nur, the light of faith, is singular, because faith and truth are one and the same.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর পড়া হয়েছে, তার মধ্যে দুটি বিশেষ্যের বচন নিয়ে কথা বলে মাআরিফুল কুরআন। আয-যুলুমাত হলো যুলমাহ (অন্ধকার) শব্দের বহুবচন। এখানে এর অর্থ কুফর ও শিরকের অন্ধকার, আর মন্দ আমলের অন্ধকার। মাআরিফুল কুরআনের ব্যাখ্যায় শব্দটা বহুবচন, কারণ কুফর আর শিরকের ধরন ও রূপ অনেক, আর মন্দ আমলের তো হিসাবই নেই। কিন্তু আন-নূর, অর্থাৎ ঈমানের আলো, একবচন, কারণ ঈমান আর সত্য একই জিনিস।"
          },
          {
            "en": "Ma'arif al-Qur'an adds that the darkness and light here are plainly not the kind seen with the eyes, and that the verse's next words make clear what is meant: the path of Allah. Whoever takes it does not stray like one walking in the dark. As-Sa'di reads the same link from the other side: having named the light, the verse then explains the light to which this Book guides them, ila sirati al-'aziz al-hamid. On both readings the light and the path are one thing described twice.",
            "bn": "মাআরিফুল কুরআন আরও বলে, এখানকার অন্ধকার আর আলো চোখে দেখা যায় এমন কিছু নয়, এটা স্পষ্ট। তাই আয়াতের পরের শব্দগুলো বুঝিয়ে দেয় আসলে কী বোঝানো হয়েছে: আল্লাহর পথ। যে এই পথ ধরে, সে অন্ধকারে হাঁটা মানুষের মতো পথ হারায় না। সা'দী একই সংযোগ দেখেন অন্য দিক থেকে। আলোর কথা বলার পর আয়াতটি ব্যাখ্যা করে দেয় সেই আলো কী, যার দিকে এ কিতাব তাদের পথ দেখায়: ইলা সিরাতিল আযীযিল হামীদ। দুই ব্যাখ্যাতেই আলো আর পথ একই জিনিস, দুবার দুভাবে বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "By Their Lord's Permission",
          "bn": "তাদের রবের অনুমতিতে"
        },
        "p": [
          {
            "en": "Bi-idhni rabbihim: by the permission of their Lord. At-Tabari glosses it as their Lord's granting them success in it, tawfiq, and His gentleness with them. Al-Qurtubi uses the same two words and adds the grammar: the preposition bi attaches to tukhrija, so the permission governs the bringing out itself. The Muyassar joins the two terms of the verse and the gloss: by their Lord's permission and His tawfiq to them.",
            "bn": "বিইযনি রাব্বিহিম: তাদের রবের অনুমতিতে। তাবারী এর ব্যাখ্যা দেন এভাবে: তাদের রব তাদেরকে এ কাজে তাওফীক দেন, আর তাদের প্রতি কোমল আচরণ করেন। কুরতুবীও এই দুটি শব্দই ব্যবহার করেন, সঙ্গে ব্যাকরণও বলেন। 'বি' অব্যয়টি তুখরিজা ক্রিয়ার সঙ্গে যুক্ত, অর্থাৎ অনুমতিটা খাটে বের করে আনার কাজের উপরেই। মুয়াসসার আয়াতের শব্দ আর ব্যাখ্যার শব্দ একসঙ্গে রাখে: তাদের রবের অনুমতি ও তাদের প্রতি তাঁর তাওফীকে।"
          },
          {
            "en": "Others gloss the word differently. Al-Baghawi: by the command of their Lord; and, under it is said, by the knowledge of their Lord. Ibn Kathir explains the clause through decree: He is the Guide of whoever He has decreed guidance for, at the hands of His Messenger, who was sent by His command. So the commentators give tawfiq and gentleness (at-Tabari, al-Qurtubi, the Muyassar), command and knowledge (al-Baghawi) and decree (Ibn Kathir). None of them sets his gloss against another's; the readings stand side by side.",
            "bn": "অন্যরা শব্দটার ব্যাখ্যা দেন ভিন্নভাবে। বাগাভী বলেন, তাদের রবের নির্দেশে। আর 'বলা হয়' দিয়ে আনেন আরেকটি অর্থ: তাদের রবের জ্ঞানে। ইবন কাসীর বাক্যাংশটা বোঝান তাকদীর দিয়ে। যার জন্য আল্লাহ হিদায়াত নির্ধারণ করে রেখেছেন, তিনিই তাকে হিদায়াত দেন, তাঁর রাসূলের হাত দিয়ে, যাঁকে তিনি নিজের নির্দেশে পাঠিয়েছেন। তাহলে ব্যাখ্যাগুলো দাঁড়ায় এই: তাওফীক ও কোমলতা (তাবারী, কুরতুবী, মুয়াসসার), নির্দেশ ও জ্ঞান (বাগাভী), আর তাকদীর (ইবন কাসীর)। কেউ অন্যের ব্যাখ্যার বিরুদ্ধে নিজেরটা দাঁড় করান না। ব্যাখ্যাগুলো পাশাপাশি থাকে।"
          },
          {
            "en": "As-Sa'di draws a practical line from the clause. What Allah loves will not come about from people except by a will from Allah and His help, and so the verse urges servants to seek their Lord's help. Ma'arif al-Qur'an dwells on the word rabbihim, their Lord. It points, the commentary says, to no other motive for this universal favour than His lordship: the Master of all humankind has kept His mercy turned on them, though Allah owes nothing to anyone and no one can compel Him.",
            "bn": "সা'দী এ বাক্যাংশ থেকে একটা ব্যবহারিক শিক্ষা টানেন। আল্লাহ যা ভালোবাসেন, তা মানুষের কাছ থেকে আসে না আল্লাহর ইচ্ছা আর তাঁর সাহায্য ছাড়া। তাই আয়াতটি বান্দাদের উৎসাহ দেয় নিজের রবের কাছে সাহায্য চাইতে। মাআরিফুল কুরআন থামে রাব্বিহিম, তাদের রব, শব্দটায়। এর ব্যাখ্যায়, সবার জন্য এই অনুগ্রহের পেছনে তাঁর রুবূবিয়াত ছাড়া আর কোনো কারণ নেই। গোটা মানবজাতির স্রষ্টা ও মালিক সবসময় তাদের প্রতি রহমতের দৃষ্টি রেখেছেন। অথচ আল্লাহ কারও কাছে ঋণী নন, তাঁর উপর কারও হক নেই, তাঁকে কেউ বাধ্যও করতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Act Is the Guiding",
          "bn": "পথ দেখানো কার কাজ"
        },
        "p": [
          {
            "en": "The verb li-tukhrija is addressed to the Prophet ﷺ: that you may bring out. At-Tabari explains why. Allah ascribed the bringing out to His Prophet, though He Himself is the Guide of His creation and grants faith to those of them He loves, because it was the Prophet ﷺ who called them to it and taught them what it held for them and against them. Al-Qurtubi: the act is ascribed to him because he is the caller, the warner and the guide.",
            "bn": "লিতুখরিজা ক্রিয়াটি নবী ﷺ-কে সম্বোধন করে: যাতে তুমি বের করে আনো। তাবারী এর কারণ ব্যাখ্যা করেন। সৃষ্টিকে হিদায়াত দেন আল্লাহ নিজে, আর তাদের মধ্যে যাকে তিনি ভালোবাসেন, তাকেই তিনি ঈমানের তাওফীক দেন। তবু বের করে আনার কাজটি তিনি তাঁর নবীর দিকে সম্পর্কিত করেছেন। কারণ নবী ﷺ-ই মানুষকে সেদিকে ডেকেছিলেন, আর তাতে তাদের লাভ কী, দায় কী, তা জানিয়ে দিয়েছিলেন। কুরতুবীও বলেন, কাজটি তাঁর দিকে সম্পর্কিত, কারণ তিনিই আহ্বানকারী, সতর্ককারী ও পথপ্রদর্শক।"
          },
          {
            "en": "At-Tabari then draws a doctrinal conclusion from the wording. The verse, he says, shows the soundness of the position of ahl al-ithbat, who ascribe the acts of servants to the servants as acquisition, kasb, and to Allah as origination and management. It also shows the error of ahl al-qadar, who denied that Allah has any making in those acts. The editor's note identifies the first group as Ahl as-Sunnah and the second as the Mu'tazilah and those who denied qadar.",
            "bn": "এরপর তাবারী আয়াতের শব্দ থেকে আকীদার একটা সিদ্ধান্ত টানেন। তাঁর মতে আয়াতটি প্রমাণ করে 'আহলুল ইসবাত'-এর অবস্থান সঠিক। তাঁরা বান্দার কাজকে বান্দার দিকে সম্পর্কিত করেন অর্জন (কাসব) হিসেবে, আর আল্লাহর দিকে সম্পর্কিত করেন সৃষ্টি ও পরিচালনা হিসেবে। আর এটা প্রমাণ করে 'আহলুল কাদর'-এর ভুল, যারা অস্বীকার করেছিল যে ওসব কাজে আল্লাহর কোনো সৃষ্টিকর্ম আছে। সম্পাদকের টীকা জানায়, প্রথম দল হলো আহলুস সুন্নাহ, আর দ্বিতীয় দল মুতাযিলা ও তাকদীর অস্বীকারকারীরা।"
          },
          {
            "en": "Ma'arif al-Qur'an approaches the same tension through 28:56: you do not guide whom you love, but Allah guides whom He wills. Guidance is in reality Allah's act alone, and the words bi-idhni rabbihim remove the doubt the verb might raise, since he does it only by Allah's will. Ma'arif draws one more point. Though guidance is Allah's act, it is not received without the Prophet ﷺ as the medium, so only the sense of the Qur'an he conveyed by word or deed can be trusted.",
            "bn": "মাআরিফুল কুরআন একই টানাপোড়েনের কাছে আসে ২৮:৫৬ আয়াতের মধ্য দিয়ে: তুমি যাকে ভালোবাসো তাকে হিদায়াত দিতে পারো না, বরং আল্লাহ যাকে চান হিদায়াত দেন। আসলে হিদায়াত দেওয়া শুধু আল্লাহরই কাজ। ক্রিয়াটি যে সংশয় জাগাতে পারত, বিইযনি রাব্বিহিম শব্দগুলো তা দূর করে দেয়, কারণ নবী কাজটা করেন শুধু আল্লাহর ইচ্ছায়। মাআরিফুল কুরআন আরেকটি কথা যোগ করে। হিদায়াত আল্লাহর কাজ হলেও নবী ﷺ-এর মাধ্যম ছাড়া তা পাওয়া যায় না। তাই কুরআনের সেই ব্যাখ্যাই নির্ভরযোগ্য, যা তিনি কথায় বা কাজে আমাদের কাছে পৌঁছে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Road and Its Owner",
          "bn": "পথ আর পথের মালিক"
        },
        "p": [
          {
            "en": "Ila sirati al-'azizi al-hamid: to the path of the Mighty, the Praiseworthy. At-Tabari: to the straight road of Allah, His religion which He was pleased with and laid down for His creation. Al-Baghawi: to His religion; the Muyassar: to Islam, the path of Allah. Al-Qurtubi notes that the two names follow each other with no and between them, as in saying I went out to Zayd, the wise, the virtuous, because both describe one.",
            "bn": "ইলা সিরাতিল আযীযিল হামীদ: মহাপরাক্রমশালী, প্রশংসিতের পথে। তাবারী বলেন, আল্লাহর সরল পথের দিকে, অর্থাৎ তাঁর দ্বীন, যা তিনি পছন্দ করেছেন আর তাঁর সৃষ্টির জন্য বিধান করেছেন। বাগাভী বলেন, তাঁর দ্বীনের দিকে। মুয়াসসার বলে, ইসলামের দিকে, যা আল্লাহর পথ। কুরতুবী দেখান, নাম দুটি পরপর এসেছে মাঝে 'ওয়া' (এবং) ছাড়া। যেমন কেউ বলে, আমি বুদ্ধিমান, গুণবান যায়দের কাছে গেলাম। কারণ দুটি গুণই একজনেরই।"
          },
          {
            "en": "On al-'Aziz, Ibn Kathir: He who is neither resisted nor overcome, but subdues everything besides Him. Al-Qurtubi: He who has no like and no equal; and, under it is said, He whom no victor overcomes, or He who is unassailable in His dominion and authority. Al-Baghawi: al-ghalib, the Prevailing. On al-Hamid, at-Tabari: a fa'il form turned from maf'ul, meaning He who is praised for His favours. Al-Qurtubi: praised by every tongue, glorified in every place and every state. Al-Baghawi: He who deserves praise. Ibn Kathir: praised in all His acts, words, law, commands and prohibitions.",
            "bn": "আল-আযীয প্রসঙ্গে ইবন কাসীর বলেন, যাঁকে বাধা দেওয়া যায় না, পরাস্তও করা যায় না, বরং তিনিই বাকি সবকিছুর উপর প্রবল। কুরতুবীর মতে, যাঁর কোনো তুলনা নেই, সমকক্ষও নেই। আর 'বলা হয়' দিয়ে আরও দুটি অর্থ আনেন: যাঁকে কোনো বিজয়ী হারাতে পারে না, অথবা নিজের রাজত্ব ও ক্ষমতায় যিনি অজেয়। বাগাভী বলেন, আল-গালিব, সর্বজয়ী। আল-হামীদ প্রসঙ্গে তাবারী বলেন, শব্দটি মাফউলের অর্থে ফায়ীল রূপ, মানে নিজের নিয়ামতের জন্য যিনি প্রশংসিত। কুরতুবীর মতে, প্রতিটি জিহ্বায় প্রশংসিত, সব জায়গায় সব অবস্থায় মহিমান্বিত। বাগাভীর মতে, প্রশংসার যিনি হকদার। ইবন কাসীরের মতে, তাঁর সব কাজে, কথায়, শরীয়তে, আদেশে ও নিষেধে প্রশংসিত।"
          },
          {
            "en": "As-Sa'di sees a message in where the two names are placed. They follow the mention of the path that leads to Him, and that points to the traveller: whoever walks it is mighty with the might of Allah and strong, even if he has no helpers but Allah, praised in his affairs and good in his outcome. Ma'arif al-Qur'an makes a similar point: since the One the path leads to is Mighty and deserving of all praise, one who takes it will not stumble, and the effort made on it will not go to waste.",
            "bn": "নাম দুটি কোথায় বসেছে, তাতে সা'দী একটা বার্তা দেখেন। তাঁর কাছে পৌঁছানোর পথের উল্লেখের পরেই নাম দুটি এসেছে, আর তা ইঙ্গিত করে পথিকের দিকে। যে এ পথে চলে, সে আল্লাহর ইজ্জতে ইজ্জতওয়ালা, শক্তিশালী, আল্লাহ ছাড়া তার আর কোনো সাহায্যকারী না থাকলেও। নিজের কাজকর্মে সে প্রশংসিত, তার পরিণামও ভালো। মাআরিফুল কুরআনও প্রায় একই কথা বলে। পথ যাঁর কাছে নিয়ে যায়, তিনি মহাপরাক্রমশালী, সব প্রশংসার হকদার। তাই যে এ পথ ধরে, সে হোঁচট খাবে না, আর এ পথে তার চেষ্টাও বৃথা যাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Sentence Runs On",
          "bn": "বাক্য গড়ায় পরের আয়াতে"
        },
        "p": [
          {
            "en": "How is the bringing out done? Ma'arif al-Qur'an notes that the verse does not spell out the manner, but the usual way of reforming a people through a book is to spread its teachings among them. It adds recitation: wherever the Qur'an lists the Prophet's tasks, as in 3:164 and 62:2, he recites its verses to them before he purifies them and teaches them the Book and wisdom. Recitation belongs to the words, the commentary says, and their reading has its own effect on the self.",
            "bn": "বের করে আনার কাজটা হয় কীভাবে? মাআরিফুল কুরআন বলে, আয়াতে পদ্ধতির বিস্তারিত নেই। তবে কিতাব দিয়ে কোনো জাতিকে সংশোধনের সাধারণ পথ হলো, তার শিক্ষা মানুষের মধ্যে ছড়িয়ে দেওয়া। এর সঙ্গে তিলাওয়াতের কথাও আসে। ৩:১৬৪ ও ৬২:২ আয়াতের মতো যেখানেই কুরআন নবী ﷺ-এর দায়িত্বের তালিকা দিয়েছে, সেখানে প্রথমে আছে তাদের কাছে আয়াত তিলাওয়াত, তারপর পরিশুদ্ধ করা, তারপর কিতাব ও হিকমাহ শেখানো। মাআরিফুল কুরআনের মতে তিলাওয়াতের সম্পর্ক শব্দের সঙ্গে, আর শব্দ পাঠ করারও মনের উপর আলাদা প্রভাব আছে।"
          },
          {
            "en": "None of the commentators read for this verse attaches a hadith of the Prophet ﷺ to it. The sentence itself does not end at 14:1. Verse 14:2 continues with the name: Allah, to whom belongs whatever is in the heavens and whatever is on the earth, which Ibn Kathir compares with 7:158. Then 14:2 and 14:3 turn to the disbelievers, who prefer the life of this world to the Hereafter and bar others from Allah's path. That passage describes those the text describes, and licenses nothing against any living person or community.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর পড়া হয়েছে, তার কোনোটিই এর সঙ্গে নবী ﷺ-এর কোনো হাদীস যুক্ত করেনি। বাক্যটা অবশ্য ১৪:১-এ শেষ হয় না। ১৪:২ আয়াত নামটা দিয়ে কথা চালিয়ে যায়: আল্লাহ, আসমানসমূহে যা আছে আর পৃথিবীতে যা আছে, সবই যাঁর। ইবন কাসীর এর সঙ্গে ৭:১৫৮ আয়াতের তুলনা করেন। তারপর ১৪:২ ও ১৪:৩ আয়াত কথা বলে কাফিরদের নিয়ে, যারা আখিরাতের চেয়ে দুনিয়ার জীবনকে বেশি ভালোবাসে আর অন্যদের আল্লাহর পথ থেকে আটকায়। সে অংশ বর্ণনা করে সেই মানুষদেরই, যাদের কথা আয়াতে আছে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে তা কোনো কিছুর অনুমতি দেয় না।"
          },
          {
            "en": "What the verse leaves the reader is a Book with a direction. The commentators name the darknesses in several ways, but they agree that the way out runs through what the Prophet ﷺ brought, and that it happens only by the permission of the Lord of those brought out. As-Sa'di turns that into a practice: ask Him for help. Ma'arif al-Qur'an adds the measure: the closer people come to this Book, the better their state in this world and the next.",
            "bn": "আয়াতটি পাঠকের হাতে দিয়ে যায় এমন এক কিতাব, যার একটা নির্দিষ্ট দিক আছে। অন্ধকারকে মুফাসসিররা নানাভাবে চিহ্নিত করেছেন, কিন্তু তাঁরা একমত যে বের হওয়ার পথ গেছে নবী ﷺ যা নিয়ে এসেছেন তার ভেতর দিয়ে। আর সেটা ঘটে কেবল যাদের বের করে আনা হচ্ছে, তাদের রবের অনুমতিতে। সা'দী একে বানান রোজকার আমল: তাঁর কাছে সাহায্য চান। মাআরিফুল কুরআন মাপকাঠিটাও দেয়। মানুষ এ কিতাবের যত কাছে আসবে, দুনিয়া আর আখিরাতে তাদের অবস্থা তত ভালো হবে।"
          }
        ]
      }
    ]
  },
  "14:7": {
    "sections": [
      {
        "h": {
          "en": "A Proclamation, Not a Remark",
          "bn": "মন্তব্য নয়, ঘোষণা"
        },
        "p": [
          {
            "en": "The verse opens wa idh ta'adhdhana rabbukum, and when your Lord proclaimed. Ta'adhdhana is not the ordinary verb for saying. It comes from the root that gives adhan, the call announced aloud so that a whole town hears it. What follows is therefore public, formal and put on record — a declaration rather than an aside, and the Arabic tells you so before you reach the content.",
            "bn": "আয়াতের শুরু: ওয়া ইয্ তা’আয্‌যানা রাব্বুকুম, আর যখন তোমাদের রব ঘোষণা করলেন। তা’আয্‌যানা সাধারণ ‘বলা’ ক্রিয়া নয়। শব্দটা এসেছে সেই ধাতু থেকে, যা থেকে এসেছে আযান: উঁচু গলায় দেওয়া সেই ডাক, যা গোটা জনপদ শোনে। তাই এরপর যা আসছে তা প্রকাশ্য, আনুষ্ঠানিক, দলিলে লিখে রাখার মতো কথা। পাশ কাটিয়ে বলা মন্তব্য নয়, ঘোষণা। আর মূল কথায় পৌঁছানোর আগেই আরবি শব্দটি তা জানিয়ে দেয়।"
          },
          {
            "en": "Then the content: la'in shakartum la'azidannakum. Both halves carry the emphatic lam, and the verb ends in the doubled nun of confirmation. This is the construction Arabic uses for a sworn undertaking; the plainest English that keeps its weight is if you are grateful, I shall most certainly increase you. Nothing about the promise is left provisional except the condition attached to it.",
            "bn": "এরপর মূল কথা: লা’ইন শাকারতুম লা’আযীদান্নাকুম। দুই অংশেই আছে জোর দেওয়ার লাম, আর ক্রিয়ার শেষে আছে তাগিদের দ্বিত্ব নূন। শপথ করে দেওয়া অঙ্গীকারের জন্য আরবি এই গঠনই ব্যবহার করে। এর ভার ধরে রেখে সবচেয়ে সহজ করে বললে: যদি তোমরা কৃতজ্ঞ হও, আমি অবশ্যই অবশ্যই তোমাদের বাড়িয়ে দেব। প্রতিশ্রুতিতে শুধু জুড়ে দেওয়া শর্তটুকুই শর্ত, বাকি কিছুই অনিশ্চিত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Object Left Open",
          "bn": "কীসে বাড়াবেন, বলা নেই"
        },
        "p": [
          {
            "en": "Read the promise again and notice what is missing. I shall increase you — in what? The Arabic gives no object. It does not say increase you in wealth, or in health, or in years. The commentators dwell on this omission: an unnamed object is an unlimited one, so the increase may come in provision, in strength, in knowledge, in ease of worship, in contentment with what is already there.",
            "bn": "প্রতিশ্রুতিটা আবার পড়ুন, আর খেয়াল করুন কী নেই। আমি তোমাদের বাড়িয়ে দেব। কীসে? আরবিতে এর কোনো কর্ম নেই। আয়াত বলেনি সম্পদে বাড়াব, বা স্বাস্থ্যে, বা আয়ুতে। মুফাসসিররা এই না-বলার ওপর অনেকক্ষণ থেমেছেন: যে কর্মের নাম নেই, তার সীমাও নেই। তাই বাড়তি আসতে পারে রিজিকে, শক্তিতে, জ্ঞানে, ইবাদতের সহজতায়, কিংবা যা আছে তাতেই তৃপ্ত থাকায়।"
          },
          {
            "en": "This matters, because the verse is often quoted as though it promised more money to the thankful. It promises more, and leaves the currency to the Giver. A person whose income does not change but who stops resenting it has received exactly what was promised. Shukr in the Quran is not a mood; it is recognition of where a thing came from, expressed by the tongue, the heart and the use made of the gift.",
            "bn": "কথাটা জরুরি, কারণ আয়াতটি প্রায়ই এমনভাবে উদ্ধৃত হয়, যেন কৃতজ্ঞ হলেই বেশি টাকা মিলবে। প্রতিশ্রুতি আছে বাড়িয়ে দেওয়ার, কিন্তু কোন মুদ্রায় দেবেন, তা দাতা নিজের হাতে রেখেছেন। যার আয় বদলায়নি, অথচ সেই আয় নিয়ে মনে আর ক্ষোভ নেই, সে ঠিক সেটাই পেয়েছে যার প্রতিশ্রুতি ছিল। কুরআনে শুকর কোনো মেজাজ নয়। শুকর মানে চিনে নেওয়া, জিনিসটা কোথা থেকে এসেছে। সেই চেনা প্রকাশ পায় মুখে, অন্তরে, আর দানটাকে কাজে লাগানোর ধরনে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Two Halves Are Not Symmetrical",
          "bn": "দুই অংশ সমান নয়"
        },
        "p": [
          {
            "en": "The second half changes shape: wa la'in kafartum inna adhabi lashadid. If you are ungrateful, indeed My punishment is severe. Read the grammar closely. For gratitude, Allah says I shall increase you — first person, direct, with the servant as the object. For ingratitude, He does not say I shall punish you; He states that His punishment is severe. The threat is stated as an attribute, at one remove.",
            "bn": "দ্বিতীয়ার্ধে গড়ন বদলে যায়: ওয়া লা’ইন কাফারতুম ইন্না ‘আযাবী লাশাদীদ। যদি তোমরা অকৃতজ্ঞ হও, নিশ্চয়ই আমার শাস্তি কঠিন। ব্যাকরণটা মন দিয়ে দেখুন। কৃতজ্ঞতার বেলায় আল্লাহ বলেন, আমি তোমাদের বাড়িয়ে দেব। তিনি নিজে 'আমি' বলে সরাসরি কথা বলছেন, আর যাকে বাড়াবেন সে বান্দা নিজেই। অকৃতজ্ঞতার বেলায় তিনি বলেন না, আমি তোমাদের শাস্তি দেব। তিনি বলেন, তাঁর শাস্তি কঠিন। হুমকিটা এসেছে তাঁর একটি গুণের বর্ণনা হিসেবে, এক ধাপ দূরত্ব রেখে।"
          },
          {
            "en": "The verb chosen for ingratitude is worth holding on to as well: kafartum, from the root k-f-r, whose base meaning is to cover. Ingratitude in Arabic is a covering over of a blessing so that it is no longer visible as one. That is why kufr can mean both disbelief and thanklessness — they are the same act performed on different objects. Later in the surah, 14:34 says that if you tried to count the favour of Allah you could not enumerate it.",
            "bn": "অকৃতজ্ঞতার জন্য বেছে নেওয়া ক্রিয়াটিও মনে রাখার মতো: কাফারতুম, ক-ফ-র ধাতু থেকে, যার মূল অর্থ ঢেকে ফেলা। আরবিতে অকৃতজ্ঞতা মানে নিয়ামতকে এমনভাবে ঢেকে ফেলা, যাতে তা আর নিয়ামত বলে চোখে না পড়ে। এ কারণেই কুফর শব্দে অবিশ্বাসও বোঝায়, অকৃতজ্ঞতাও। কাজ একটাই, শুধু যা ঢাকা হচ্ছে তা আলাদা। সূরার পরের দিকে ১৪:৩৪ বলে, আল্লাহর নিয়ামত গুনতে চাইলে তোমরা তা গুনে শেষ করতে পারবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken to a Rescued People",
          "bn": "সদ্য রক্ষা পাওয়া এক কওমের প্রতি"
        },
        "p": [
          {
            "en": "The declaration is not floating free. It sits inside the speech of Musa (AS) to his people. 14:5 records that Musa was sent with signs and told to bring his people out of darkness into light and to remind them of the days of Allah. 14:6 then names a specific day: remember when He saved you from the people of Pharaoh, who were inflicting the worst punishment on you.",
            "bn": "ঘোষণাটা শূন্যে ঝুলে নেই। এটা আছে নিজের কওমের প্রতি মূসা (আঃ)-এর ভাষণের ভেতরে। ১৪:৫ জানায়, আল্লাহ মূসাকে নিদর্শন দিয়ে পাঠিয়েছিলেন, আর বলেছিলেন তাঁর কওমকে অন্ধকার থেকে আলোর দিকে বের করে আনতে এবং তাদের আল্লাহর দিনগুলোর কথা মনে করিয়ে দিতে। এরপর ১৪:৬ একটি নির্দিষ্ট দিনের কথা বলে: স্মরণ করো, যখন তিনি তোমাদের ফেরাউনের লোকদের হাত থেকে রক্ষা করেছিলেন, যারা তোমাদের সবচেয়ে নিকৃষ্ট শাস্তি দিচ্ছিল।"
          },
          {
            "en": "So gratitude is taught here to people who had just been given something enormous and specific. That is the context the verse asks to be read in: not an abstract principle but the right response to a deliverance one has actually lived through. And 14:8 closes the door on any misunderstanding — Musa says, if you and everyone on earth are ungrateful, Allah is Free of need, Praiseworthy. The increase is entirely for the grateful. Nothing is added to Allah by it.",
            "bn": "অর্থাৎ এখানে কৃতজ্ঞতা শেখানো হচ্ছে এমন মানুষদের, যারা সবেমাত্র বিরাট আর সুনির্দিষ্ট একটা কিছু পেয়েছে। আয়াতটি এই প্রেক্ষাপটেই পড়তে বলে। এটা কোনো বিমূর্ত নীতিকথা নয়, নিজের জীবনে দেখা এক মুক্তির সঠিক জবাব। আর ১৪:৮ সব ভুল বোঝাবুঝির পথ বন্ধ করে দেয়। মূসা বলেন, তোমরা আর দুনিয়ার সবাই মিলে যদি অকৃতজ্ঞ হও, তবু আল্লাহ অভাবমুক্ত, প্রশংসিত। বাড়তিটা পুরোটাই কৃতজ্ঞদের জন্য। এতে আল্লাহর কিছুই বাড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Gratitude in Practice",
          "bn": "কৃতজ্ঞতার আমল"
        },
        "p": [
          {
            "en": "The Sunnah gives this verse concrete form. Sahih al-Bukhari and Sahih Muslim record that the Prophet ﷺ would stand in prayer at night until his feet swelled, and when asked why, when his sins were forgiven, he answered: shall I not be a grateful servant? Gratitude there is not a feeling produced after a gift but a form of worship offered because of one.",
            "bn": "সুন্নাহ এই আয়াতকে চোখে দেখার মতো রূপ দেয়। সহীহ বুখারী ও সহীহ মুসলিমে আছে, নবী ﷺ রাতে নামাজে এত দীর্ঘ সময় দাঁড়িয়ে থাকতেন যে তাঁর পা ফুলে যেত। তাঁকে জিজ্ঞেস করা হলো, আল্লাহ তো আপনার গুনাহ মাফ করে দিয়েছেন, তবু কেন? তিনি বললেন: আমি কি একজন কৃতজ্ঞ বান্দা হব না? এখানে কৃতজ্ঞতা কিছু পাওয়ার পরে জাগা কোনো অনুভূতি নয়, বরং সেই পাওয়ার কারণে আদায় করা ইবাদত।"
          },
          {
            "en": "There is also a short du'a the Prophet ﷺ taught Mu'adh ibn Jabal (RA), telling him he loved him and instructing him not to leave it after any prayer: Allahumma a'inni ala dhikrika wa shukrika wa husni ibadatik — O Allah, help me to remember You, to thank You, and to worship You well. It is preserved in the Sunan collections and graded sound, and it makes the point that shukr itself is something we need help to do.",
            "bn": "নবী ﷺ মু‘আয ইবনে জাবাল (রাঃ)-কে বলেছিলেন যে তিনি তাঁকে ভালোবাসেন। তারপর তাঁকে একটি ছোট দোয়া শিখিয়ে দিয়ে বলেছিলেন, কোনো নামাজের পরেই যেন তিনি এটা না ছাড়েন: আল্লাহুম্মা আ‘ইন্নী ‘আলা যিকরিকা ওয়া শুকরিকা ওয়া হুসনি ‘ইবাদাতিক। হে আল্লাহ, আপনাকে স্মরণ করতে, আপনার শুকরিয়া আদায় করতে আর সুন্দরভাবে আপনার ইবাদত করতে আমাকে সাহায্য করুন। দোয়াটি সুনান গ্রন্থগুলোতে আছে, আর বর্ণনাটি নির্ভরযোগ্য বলে গণ্য। দোয়াটি মনে করিয়ে দেয়, শুকর আদায় করতেও আমাদের সাহায্য লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "জীবনে এর চর্চা"
        },
        "p": [
          {
            "en": "The practical difficulty with gratitude is that blessings become invisible by being constant. Nobody thanks Allah for a working knee until it stops working. The verb kafara, to cover, describes that process exactly, and the remedy is simply to make the blessing visible again: name one thing out loud each day, and prefer the ones you have never named — eyesight, a functioning household, a name that is not feared.",
            "bn": "কৃতজ্ঞতার আসল মুশকিল হলো, নিয়ামত সব সময় থাকে বলেই একসময় আর চোখে পড়ে না। হাঁটু ঠিকঠাক চলছে বলে কেউ আল্লাহর শুকরিয়া করে না, যতক্ষণ না হাঁটু বিগড়ে যায়। কাফারা, অর্থাৎ ঢেকে ফেলা, ক্রিয়াটি ঠিক এই ব্যাপারটাই বোঝায়। প্রতিকারও সহজ: নিয়ামতকে আবার চোখের সামনে আনা। প্রতিদিন একটা নিয়ামতের নাম মুখে উচ্চারণ করুন। আর বেছে নিন সেগুলো, যেগুলোর নাম আপনি কখনো নেননি: চোখের দৃষ্টি, ভালোভাবে চলা একটা সংসার, এমন একটা নাম, যা শুনে কেউ ভয় পায় না।"
          },
          {
            "en": "The fuller form is to thank with the thing itself. Wealth is thanked by spending some of it, knowledge by teaching it, health by using it in something worth doing, time by not wasting it on what leaves nothing behind. And gratitude is most useful precisely where it is least natural: in a narrow month, in illness, after a loss. That is where the promise of increase stops being decoration and starts doing work.",
            "bn": "এর পূর্ণ রূপ হলো, জিনিসটা দিয়েই তার শুকরিয়া আদায় করা। সম্পদের শুকরিয়া তার কিছুটা খরচ করে, জ্ঞানের শুকরিয়া তা অন্যকে শিখিয়ে, সুস্থতার শুকরিয়া তা কোনো ভালো কাজে লাগিয়ে, আর সময়ের শুকরিয়া তা এমন কাজে নষ্ট না করে, যা পেছনে কিছুই রেখে যায় না। কৃতজ্ঞতা সবচেয়ে বেশি কাজে আসে ঠিক সেখানেই, যেখানে কৃতজ্ঞ হওয়া সবচেয়ে কঠিন: টানাটানির মাসে, অসুখে, কিছু হারানোর পরে। সেখানেই বাড়িয়ে দেওয়ার প্রতিশ্রুতি আর শুধু শুনতে ভালো লাগার কথা থাকে না, সত্যিই কাজে লাগতে শুরু করে।"
          }
        ]
      }
    ]
  },
  "14:13": {
    "sections": [
      {
        "h": {
          "en": "Where the Argument Ended",
          "bn": "তর্ক যেখানে থামল"
        },
        "p": [
          {
            "en": "From 14:9 the surah has been replaying a long exchange between the messengers and their peoples. The peoples said they doubted; the messengers asked whether there could be doubt about Allah, Creator of the heavens and the earth. The peoples said you are only men like us; the messengers agreed they were men, and in 14:12 promised to bear patiently whatever harm was done to them. Now, in 16 Arabic words, the peoples stop arguing and start threatening, and a single sentence from the Lord of the messengers answers them.",
            "bn": "১৪:৯ আয়াত থেকে সূরাটি রাসূলগণ আর তাঁদের কওমের মধ্যে এক দীর্ঘ কথোপকথন তুলে ধরছে। কওম বলেছিল, আমরা সন্দেহে আছি। রাসূলগণ জিজ্ঞেস করেছিলেন, আসমান ও যমীনের স্রষ্টা আল্লাহকে নিয়েও কি সন্দেহ? কওম বলেছিল, তোমরা তো আমাদেরই মতো মানুষ। রাসূলগণ মেনে নিয়েছিলেন যে তাঁরা মানুষই, আর ১৪:১২ আয়াতে বলেছিলেন, তোমরা যত কষ্ট দাও, আমরা সবর করব। এবার আরবি ১৬টি শব্দে কওম যুক্তি ছেড়ে হুমকিতে নামে। আর রাসূলদের রবের একটিমাত্র বাক্য তার জবাব দেয়।"
          },
          {
            "en": "As-Sa'di reads the verse as the end-point of that story. Having told of the messengers' call, their persistence and their refusal to tire, Allah now mentions the furthest the situation reached with their peoples. He calls the threat the most extreme form of rejection there can be: after it there was no hope left in them. Al-Qurtubi notes the grammar of the oath. The lam on la-nukhrijannakum is a lam of oath, as though they said: by God, we will drive you out.",
            "bn": "সা'দী আয়াতটিকে পড়েন সেই কাহিনির শেষ সীমা হিসেবে। রাসূলদের দাওয়াত, তাতে লেগে থাকা আর ক্লান্ত না হওয়ার কথা বলার পর আল্লাহ এখানে জানাচ্ছেন, কওমের সঙ্গে ব্যাপারটা শেষমেশ কোথায় গিয়ে ঠেকেছিল। সা'দীর ভাষায়, এ হুমকি প্রত্যাখ্যানের চরম রূপ। এরপর তাদের কাছ থেকে আর কোনো আশা বাকি থাকে না। কুরতুবী কসমের ব্যাকরণের দিকে ইশারা করেন। লানুখরিজান্নাকুম শব্দের লাম হলো কসমের লাম। যেন তারা বলছে: আল্লাহর কসম, আমরা তোমাদের বের করে দেবই।"
          }
        ]
      },
      {
        "h": {
          "en": "Leave, Unless You Conform",
          "bn": "হয় মানো, নয় বেরোও"
        },
        "p": [
          {
            "en": "At-Tabari glosses the two halves plainly. Out of our land means out of our country: we will drive you from it. Aw la-ta'udunna fi millatina means unless you return into our religion, the one we hold, the worship of idols. He then explains aw. Here, he says, it carries the sense of illa, unless, or hatta, until, as when an Arab says: I will beat you, or you confess to me. The Muyassar and al-Baghawi keep the same sense: we will expel you until you come back to our religion.",
            "bn": "তাবারী দুই অংশের অর্থ সোজাসুজি বলেন। আমাদের দেশ থেকে মানে আমাদের জনপদ থেকে, সেখান থেকে তোমাদের তাড়িয়ে দেব। আও লাতাঊদুন্না ফী মিল্লাতিনা মানে, যদি না তোমরা আমাদের ধর্মে ফেরো, যে ধর্মের উপর আমরা আছি, অর্থাৎ মূর্তিপূজা। তারপর তিনি আও শব্দটি ব্যাখ্যা করেন। তাঁর মতে এখানে এর অর্থ ইল্লা, অর্থাৎ যদি না, কিংবা হাত্তা, অর্থাৎ যতক্ষণ না। যেমন আরবরা বলে: তোমাকে মারবই, যতক্ষণ না আমার কাছে স্বীকার করো। মুয়াসসার আর বাগাভীও একই অর্থ রাখেন: আমাদের ধর্মে না ফেরা পর্যন্ত তোমাদের তাড়িয়ে দেব।"
          },
          {
            "en": "At-Tabari supports the reading with poetry. He cites Imru' al-Qays telling a weeping companion on the road to Caesar: we are only seeking a kingdom, or we die and are excused. Some Arabs, he explains, give the verb after aw a different ending from the verb before it, to show that the clause is cut off from what precedes it and means until or unless. On this reading the verse describes one sentence with an exit: expulsion is the penalty, and conformity is the only way to escape it.",
            "bn": "তাবারী এ অর্থের পক্ষে কবিতা আনেন। ইমরুল কায়সের একটি পঙক্তি তিনি উদ্ধৃত করেন। কায়সারের কাছে যাওয়ার পথে কাঁদতে থাকা সঙ্গীকে কবি বলছেন: আমরা রাজত্বের চেষ্টা করছি, নয়তো মরে গিয়ে অজুহাত পাব। তাবারী বুঝিয়ে দেন, কিছু আরব আও-এর পরের ক্রিয়াপদের শেষাংশ আগের ক্রিয়াপদ থেকে আলাদা করে পড়ে। এতে বোঝানো হয় যে বাক্যাংশটি আগের কথা থেকে বিচ্ছিন্ন, আর এর অর্থ যতক্ষণ না বা যদি না। এ পাঠে আয়াতের হুমকি একটাই শাস্তি, সঙ্গে একটা বেরোনোর পথ। শাস্তি হলো দেশছাড়া হওয়া, আর তা থেকে বাঁচার একমাত্র উপায় তাদের মতো হয়ে যাওয়া।"
          },
          {
            "en": "Al-Qurtubi reports at-Tabari's reading, until you return or unless you return, and adds that others held it too. Then he quotes Ibn al-'Arabi, who says the verse has no need of that assumed meaning: aw keeps its ordinary sense of choice. The disbelievers gave the messengers a choice between returning to their creed and being driven from their land. Ibn al-'Arabi calls this Allah's way with His messengers and His servants, and points to 17:76 and 17:77. Al-Qurtubi records both readings side by side and does not choose between them.",
            "bn": "কুরতুবী তাবারীর পাঠটি উল্লেখ করেন, অর্থাৎ যতক্ষণ না ফেরো বা যদি না ফেরো, আর জানান যে আরও অনেকে এ মত দিয়েছেন। তারপর তিনি ইবনুল আরাবীর কথা আনেন। ইবনুল আরাবীর মতে এ অনুমিত অর্থের কোনো দরকার নেই। আও তার স্বাভাবিক অর্থেই আছে, অর্থাৎ দুটির একটি বেছে নেওয়া। কাফিররা রাসূলদের সামনে দুটি পথ রেখেছিল: হয় তাদের মিল্লাতে ফেরা, নয়তো দেশ থেকে বহিষ্কৃত হওয়া। ইবনুল আরাবী একে বলেন রাসূল ও বান্দাদের ব্যাপারে আল্লাহর চিরাচরিত রীতি, আর দলিল হিসেবে দেখান ১৭:৭৬ ও ১৭:৭৭ আয়াত। কুরতুবী দুটি পাঠ পাশাপাশি রাখেন, কোনোটিকে বেছে নেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Puzzle of Returning",
          "bn": "ফিরে আসার ধাঁধা"
        },
        "p": [
          {
            "en": "Read quickly, la-ta'udunna, you must return, could sound as if the messengers had once shared their peoples' creed. The commentators on this verse do not take the question up here. At-Tabari and the Muyassar simply gloss it as coming back to our religion, and al-Qurtubi says the meaning was already treated in al-A'raf. There, at 7:88, the people of Shu'ayb (AS) make the same threat in almost the same words, and the commentators on that verse give several answers. Each is reported below with its name, and this article takes no side.",
            "bn": "তাড়াহুড়ো করে পড়লে লাতাঊদুন্না, অর্থাৎ তোমাদের ফিরতেই হবে, শুনে মনে হতে পারে রাসূলগণ একসময় কওমের মিল্লাতে ছিলেন। এ আয়াতের তাফসীরকারেরা এখানে প্রশ্নটি তোলেন না। তাবারী আর মুয়াসসার শুধু অর্থ করেন, আমাদের ধর্মে ফিরে আসা। কুরতুবী বলেন, এর অর্থ সূরা আ'রাফে আগেই আলোচিত হয়েছে। সেখানে ৭:৮৮ আয়াতে শু'আইব (আঃ)-এর কওম প্রায় একই ভাষায় একই হুমকি দেয়। ওই আয়াতের তাফসীরে তাফসীরকারেরা কয়েকটি জবাব দিয়েছেন। নিচে প্রতিটি জবাব তার বক্তার নামসহ দেওয়া হলো। এই লেখা কোনো পক্ষ নেয় না।"
          },
          {
            "en": "Al-Qurtubi, on 7:88, gives three. First, la-ta'udunna means la-tasirunna: you must come over to our creed, with no earlier state implied. Second, introduced with it is said: Shu'ayb's followers had been disbelievers before they believed in him, so the threat means come back to us as you were. Third, he quotes az-Zajjaj: the verb of returning can mean a beginning, as in the idiom 'ada ilayya min fulan makruh, harm came to me from so-and-so, said even when no harm had come from him before.",
            "bn": "কুরতুবী ৭:৮৮ আয়াতের তাফসীরে তিনটি জবাব দেন। প্রথমত, লাতাঊদুন্না মানে লাতাসীরুন্না, অর্থাৎ তোমাদেরকে আমাদের মিল্লাতে আসতেই হবে। এতে আগের কোনো অবস্থার ইঙ্গিত নেই। দ্বিতীয়ত, 'বলা হয়' কথাটি জুড়ে তিনি আনেন: শু'আইবের অনুসারীরা তাঁর উপর ঈমান আনার আগে কুফরের উপর ছিল। তাই হুমকির অর্থ, আগে যেমন ছিলে তেমনি আমাদের দিকে ফিরে এসো। তৃতীয়ত, তিনি যাজ্জাজের কথা আনেন। ফেরার ক্রিয়াটি শুরু বোঝাতেও পারে। আরবরা বলে, আদা ইলাইয়া মিন ফুলানিন মাকরূহ, অমুকের কাছ থেকে আমার উপর কষ্ট এল। আগে তার কাছ থেকে কোনো কষ্ট না এলেও কথাটা এভাবে বলা হয়।"
          },
          {
            "en": "Ibn Kathir, on the same verse, gives a fourth answer. The words are addressed to the messenger, he says, but what is meant is his followers who were with him. When Shu'ayb (AS) replies, if we returned to your creed we would have invented a great lie against Allah, Ibn Kathir says he is speaking for his followers. These answers stand on 7:88, carried here because al-Qurtubi himself sends his reader there. Whichever one a reader finds strongest, none of these commentators says that a messenger ever held the creed he was sent to leave behind.",
            "bn": "একই আয়াতে ইবন কাসীর চতুর্থ একটি জবাব দেন। তাঁর মতে কথাটা বলা হয়েছে রাসূলকে, কিন্তু উদ্দেশ্য তাঁর সঙ্গে থাকা অনুসারীরা। শু'আইব (আঃ) যখন জবাবে বলেন, তোমাদের মিল্লাতে ফিরলে আমরা আল্লাহর উপর বিরাট মিথ্যা আরোপ করে বসব, তখন ইবন কাসীরের মতে তিনি কথা বলছেন তাঁর অনুসারীদের হয়ে। এ জবাবগুলো ৭:৮৮ আয়াতের তাফসীর থেকে নেওয়া। এখানে আনা হলো, কারণ কুরতুবী নিজেই পাঠককে সেখানে পাঠান। পাঠক যে জবাবটিকেই সবচেয়ে জোরালো মনে করুন, এই তাফসীরকারদের কেউ বলেন না যে কোনো রাসূল কখনো সেই মিল্লাতের উপর ছিলেন, যা থেকে মানুষকে ফেরাতে তাঁকে পাঠানো হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Our Land, They Said",
          "bn": "আমাদের দেশ, তারা বলল"
        },
        "p": [
          {
            "en": "As-Sa'di stops on a single word: ardina, our land. It was not enough for them to turn away from guidance, he says. They threatened the messengers with expulsion from their homes, claimed the land as their own, and asserted that the messengers had no right in it, which he counts among the greatest of wrongs. Allah brought His servants out onto the earth, commanded them to worship Him, and made the earth and all on it serve them as a help in that worship.",
            "bn": "সা'দী একটি শব্দে থামেন: আরদিনা, আমাদের দেশ। তিনি বলেন, হেদায়াত থেকে মুখ ফিরিয়ে নেওয়াই তাদের কাছে যথেষ্ট মনে হয়নি। তারা রাসূলদের ঘরবাড়ি থেকে বের করে দেওয়ার হুমকি দিল, দেশটাকে নিজেদের বলে দাবি করল, আর বলল এতে রাসূলদের কোনো হক নেই। সা'দীর চোখে এ সবচেয়ে বড় যুলমগুলোর একটি। আল্লাহই তো তাঁর বান্দাদের যমীনে এনেছেন, তাঁর ইবাদতের হুকুম দিয়েছেন। আর যমীন ও তার উপরের সবকিছু তাদের অধীন করে দিয়েছেন, যাতে তারা এর সাহায্যে তাঁর ইবাদত করতে পারে।"
          },
          {
            "en": "So, as-Sa'di reasons, whoever uses the earth to worship Allah may do so lawfully, while whoever uses it for disbelief has no clean claim to it; in truth the enemies of the messengers owned nothing of the land they threatened to expel them from. He then argues on ordinary custom as well. The messengers were people of their own countries, individuals from among their own peoples. By what right, he asks, could anyone deny them so plain a right, unless religion and common decency had been lost altogether?",
            "bn": "সা'দীর যুক্তি তাই এমন: যে যমীনকে আল্লাহর ইবাদতে কাজে লাগায়, তার জন্য তা হালাল। আর যে তা কুফর ও নাফরমানিতে লাগায়, তার জন্য তা খাঁটি নয়, হালালও নয়। কাজেই রাসূলদের শত্রুরা আসলে সেই যমীনের কিছুরই মালিক ছিল না, যেখান থেকে তারা রাসূলদের তাড়ানোর হুমকি দিচ্ছিল। এরপর তিনি সাধারণ প্রথার দিক থেকেও যুক্তি দেন। রাসূলগণ তো নিজ নিজ দেশেরই মানুষ, নিজ কওমেরই সদস্য। তাহলে এত স্পষ্ট একটা হক থেকে তাঁদের বঞ্চিত করার অধিকার কে দিল? সা'দী বলেন, দ্বীন আর ভদ্রতা পুরোপুরি হারিয়ে না গেলে এমন হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "An Old Threat, Often Repeated",
          "bn": "পুরোনো হুমকি, বারবার"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse as a report of what the disbelieving nations threatened their messengers with: expulsion from their land and banishment from their midst. He lines up the parallels. The people of Shu'ayb (AS) at 7:88, already met above; the people of Lut (AS), who said at 27:56, drive the family of Lut out of your town; the idolaters of Quraysh, who nearly unsettled the Prophet ﷺ to drive him from the land, at 17:76; and the plot at 8:30 to confine him, kill him or drive him out.",
            "bn": "ইবন কাসীর আয়াতটিকে পড়েন কাফির জাতিগুলোর সেই হুমকির বিবরণ হিসেবে, যা তারা নিজেদের রাসূলদের দিয়েছিল: দেশ থেকে বের করে দেওয়া, নিজেদের মাঝ থেকে নির্বাসিত করা। তিনি একই ধরনের আয়াতগুলো পাশাপাশি রাখেন। ৭:৮৮ আয়াতে শু'আইব (আঃ)-এর কওম, যাদের কথা ওপরে এসেছে। ২৭:৫৬ আয়াতে লূত (আঃ)-এর কওম, যারা বলেছিল, লূতের পরিবারকে তোমাদের জনপদ থেকে বের করে দাও। ১৭:৭৬ আয়াতে কুরাইশের মুশরিকরা, যারা নবী ﷺ-কে দেশ থেকে উৎখাত করার উপক্রম করেছিল। আর ৮:৩০ আয়াতে তাঁকে বন্দি করা, হত্যা করা বা বের করে দেওয়ার চক্রান্ত।"
          },
          {
            "en": "Then Ibn Kathir traces what Allah did. He gave His Messenger victory, and by means of his leaving Makkah gave him helpers and supporters. He kept raising him stage by stage until He opened for him the very Makkah that had expelled him, and people entered the religion of Allah in crowds. That, says Ibn Kathir, is why Allah said: We will surely destroy the wrongdoers. The English abridgement groups 14:13 to 14:17; only its 14:13 part is used here, and it matches the Arabic.",
            "bn": "এরপর ইবন কাসীর দেখান, আল্লাহ কী করলেন। তিনি তাঁর রাসূলকে বিজয় দিলেন। মক্কা ছেড়ে যাওয়াকেই উপলক্ষ বানিয়ে তাঁকে দিলেন আনসার ও সাহায্যকারী। তাঁকে ধাপে ধাপে ওপরে তুলতে থাকলেন, শেষে সেই মক্কাই তাঁর হাতে খুলে দিলেন, যে মক্কা তাঁকে বের করে দিয়েছিল। আর মানুষ দলে দলে আল্লাহর দ্বীনে প্রবেশ করল। ইবন কাসীর বলেন, এজন্যই আল্লাহ বলেছেন: আমি জালিমদের অবশ্যই ধ্বংস করব। তাঁর তাফসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ ১৪:১৩ থেকে ১৪:১৭ পর্যন্ত একসঙ্গে আলোচনা করে। এখানে শুধু ১৪:১৩ আয়াতের অংশটুকু নেওয়া হয়েছে, আর তা আরবি মূলের সঙ্গে মেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reply Went to the Messengers",
          "bn": "জবাব গেল রাসূলদের কাছে"
        },
        "p": [
          {
            "en": "Fa-awha ilayhim rabbuhum: so their Lord revealed to them. The pronoun points to the messengers; the Muyassar says it outright, that Allah revealed to His messengers that He would destroy those who denied Him and His messengers. The threateners are answered, but not to their faces. The reply is a word of assurance to the threatened. As-Sa'di reads the sequence as a turning point: once their plotting against the messengers had reached this state, nothing remained but for Allah to carry out His command and help His friends.",
            "bn": "ফাআওহা ইলাইহিম রব্বুহুম: তখন তাদের রব তাদের কাছে ওহি পাঠালেন। সর্বনামটি রাসূলদের দিকে ইশারা করে। মুয়াসসার সরাসরি বলে দেয়, আল্লাহ তাঁর রাসূলদের ওহি করে জানালেন যে, যারা তাঁকে ও তাঁর রাসূলদের অস্বীকার করেছে, তিনি তাদের ধ্বংস করবেন। হুমকিদাতারা জবাব পেল, কিন্তু সামনাসামনি নয়। জবাবটা আসলে হুমকির শিকারদের জন্য আশ্বাসের বাণী। সা'দী এ ধারাবাহিকতাকে মোড় ঘোরার মুহূর্ত হিসেবে পড়েন। রাসূলদের বিরুদ্ধে তাদের চক্রান্ত যখন এ পর্যায়ে পৌঁছল, তখন আল্লাহর ফয়সালা কার্যকর করা আর তাঁর বন্ধুদের সাহায্য করা ছাড়া আর কিছু বাকি রইল না।"
          },
          {
            "en": "At-Tabari gives two senses of al-zalimin. They are those who wronged themselves, bringing Allah's punishment on themselves by their disbelief. It may also be, he says, that they were called wrongdoers for worshipping idols and gods that may not be worshipped: putting worship where it does not belong is a wrong, and they were named for it. As-Sa'di adds only that the destruction came by various kinds of punishment. What follows the destruction, the promise in 14:14 to settle the believers in the land after them, is that verse's own subject.",
            "bn": "তাবারী আয-যালিমীন শব্দের দুটি অর্থ দেন। তারা নিজেদের উপর যুলম করেছে, কুফরের কারণে নিজেদের উপর আল্লাহর শাস্তি অবধারিত করেছে। আবার তাঁর মতে এমনও হতে পারে যে তাদের জালিম বলা হয়েছে মূর্তি আর এমন সব উপাস্যের পূজা করার কারণে, যাদের ইবাদত করা বৈধ নয়। ইবাদতকে তার জায়গার বাইরে রাখাই যুলম, আর সে নামেই তাদের ডাকা হয়েছে। সা'দী শুধু যোগ করেন, ধ্বংস এসেছিল নানা রকম শাস্তির মাধ্যমে। ধ্বংসের পরে কী, অর্থাৎ ১৪:১৪ আয়াতে মু'মিনদের তাদের পরে দেশে বসবাস করানোর প্রতিশ্রুতি, সেটা ওই আয়াতেরই আলোচ্য বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Story, Not a Warrant",
          "bn": "কাহিনি, অনুমতিপত্র নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes past peoples and their messengers, as the text itself describes them, and a verdict that Allah Himself announced and Himself carried out. It licenses no expulsion, no coercion and no hostility by anyone today, against any person or community, Muslim or not. No reader is made Allah's instrument by reading it. If anything, the verse condemns the very thing a reader might be tempted to borrow from it: driving people from their homes to force them into a creed.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি অতীতের কিছু জাতি আর তাদের রাসূলদের কথা বলে, ঠিক যেভাবে কুরআন নিজে বলেছে। আর যে ফয়সালার কথা বলে, তা আল্লাহ নিজে ঘোষণা করেছেন, নিজেই কার্যকর করেছেন। আজ কারও জন্য এতে কাউকে দেশ থেকে তাড়ানোর, জোর করার বা শত্রুতা করার কোনো অনুমতি নেই, সে মুসলিম হোক বা অমুসলিম, ব্যক্তি হোক বা গোষ্ঠী। আয়াত পড়ে কোনো পাঠক আল্লাহর হাতিয়ার হয়ে যায় না। বরং পাঠকের যে জিনিসটা ধার করার লোভ হতে পারে, আয়াতটি ঠিক সেটারই নিন্দা করে: মানুষকে তার ঘর থেকে তাড়িয়ে জোর করে কোনো ধর্মে ঢোকানো।"
          },
          {
            "en": "Two notes on sources. None of the commentaries consulted for this verse attaches a hadith to it; the one narration in the English Ibn Kathir belongs to 14:15, the obstinate tyrant, and is not used here. Ma'arif al-Qur'an treats 14:8 to 14:17 as one passage, but its entry as consulted speaks only of Musa's (AS) words in 14:8, so it contributes nothing on this verse. What the article reports comes from at-Tabari, al-Qurtubi, as-Sa'di, Ibn Kathir, al-Baghawi and the Muyassar.",
            "bn": "উৎস নিয়ে দুটি কথা। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদিস যুক্ত করেনি। ইবন কাসীরের ইংরেজি সংস্করণে যে একটি বর্ণনা আছে, তা ১৪:১৫ আয়াতের উদ্ধত স্বৈরাচারী প্রসঙ্গে, তাই এখানে নেওয়া হয়নি। মাআরিফুল কুরআন ১৪:৮ থেকে ১৪:১৭ পর্যন্ত একসঙ্গে আলোচনা করে। কিন্তু যে অংশটুকু পাওয়া গেছে, তাতে কেবল ১৪:৮ আয়াতে মূসা (আঃ)-এর কথার ব্যাখ্যা আছে, তাই এ আয়াতে এর কোনো অবদান নেই। এ লেখার সব কথা এসেছে তাবারী, কুরতুবী, সা'দী, ইবন কাসীর, বাগাভী ও মুয়াসসার থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Firm, Without Rancour",
          "bn": "অটল থাকা, বিদ্বেষ ছাড়া"
        },
        "p": [
          {
            "en": "The pressure in this verse has a familiar shape. It comes from the many, it speaks of our land and our ways, and it offers belonging on one condition: become like us. Most readers will never be threatened with exile. But the same terms arrive at smaller scale in a family, a workplace or a circle of friends: laugh along or be left out, bend the rule or lose the post, keep your prayer out of sight. The question the verse puts to the reader is what they measure right by.",
            "bn": "এ আয়াতের চাপটা চেনা চেহারার। তা আসে সংখ্যাগরিষ্ঠের দিক থেকে। তার ভাষা: আমাদের দেশ, আমাদের রীতি। আর সে দলে জায়গা দেয় একটাই শর্তে: আমাদের মতো হয়ে যাও। বেশিরভাগ পাঠককে হয়তো কখনো দেশছাড়া হওয়ার হুমকি শুনতে হবে না। কিন্তু সেই একই শর্ত ছোট আকারে আসে পরিবারে, কর্মস্থলে, বন্ধুদের আড্ডায়। সবার সঙ্গে হাসো, নইলে একঘরে হও। নিয়মটা একটু বাঁকাও, নইলে পদ হারাও। নামাজটা লোকচক্ষুর আড়ালে রাখো। আয়াত পাঠককে জিজ্ঞেস করে: ঠিক-বেঠিক আপনি কী দিয়ে মাপেন?"
          },
          {
            "en": "The messengers' own answer came one verse earlier. In 14:12 they said: why should we not rely on Allah when He has guided us to our ways, and we will surely bear patiently whatever harm you do us. They did not threaten back, and they did not give way. The verdict in 14:13 was not theirs to issue; it came from their Lord. Holding firm, then, is not the same as holding a grudge. A believer can refuse the terms and still wish the people offering them well.",
            "bn": "রাসূলদের নিজেদের জবাব এসেছে ঠিক আগের আয়াতে। ১৪:১২ আয়াতে তাঁরা বলেছিলেন: আমরা আল্লাহর উপর ভরসা করব না কেন, তিনিই তো আমাদের পথ দেখিয়েছেন। আর তোমরা আমাদের যে কষ্টই দাও, আমরা অবশ্যই সবর করব। তাঁরা পাল্টা হুমকি দেননি, আবার মাথাও নোয়াননি। ১৪:১৩ আয়াতের ফয়সালা দেওয়ার দায়িত্ব তাঁদের ছিল না, তা এসেছে তাঁদের রবের কাছ থেকে। তাই অটল থাকা আর মনে ক্ষোভ পুষে রাখা এক জিনিস নয়। একজন মু'মিন শর্তগুলো প্রত্যাখ্যান করেও শর্তদাতাদের কল্যাণ কামনা করতে পারেন।"
          },
          {
            "en": "So the practice is modest and daily. Notice when a habit is only yours because it is everyone's. When you must refuse, refuse with patience, in few words and without contempt, so that the refusal stays about the truth and not about you. Leave the judgment of those who press you with Allah, who alone knows how each story ends. And turn the verse around once: ask whether you have ever been the voice of the many, telling someone else to fit in or step out.",
            "bn": "তাই অনুশীলনটা ছোট, প্রতিদিনের। খেয়াল করুন, কোন অভ্যাসটা আপনার শুধু এজন্য যে সবার ওটা আছে। না বলতেই যদি হয়, সবরের সঙ্গে বলুন, অল্প কথায়, অবজ্ঞা ছাড়া। তাহলে প্রত্যাখ্যানটা সত্যের ব্যাপারেই থাকবে, আপনার অহংয়ের ব্যাপার হয়ে উঠবে না। যারা চাপ দেয়, তাদের বিচার আল্লাহর হাতে ছেড়ে দিন। প্রতিটি কাহিনির শেষ কেবল তিনিই জানেন। আর একবার আয়াতটা নিজের দিকে ঘুরিয়ে দেখুন। আপনি নিজেই কি কখনো সংখ্যাগরিষ্ঠের কণ্ঠ হয়ে কাউকে বলেছেন: হয় মানিয়ে চলো, নয়তো সরে দাঁড়াও?"
          }
        ]
      }
    ]
  },
  "14:21": {
    "sections": [
      {
        "h": {
          "en": "No Screen on the Plain",
          "bn": "ময়দানে কোনো আড়াল নেই"
        },
        "p": [
          {
            "en": "Wa-barazu lillahi jami'an: and they will come out before Allah, all together. Al-Qurtubi explains buruz as appearing, and baraz as a wide open place, named for how exposed it is; they emerge from their graves on the Day of Resurrection. The verb is past in form and future in meaning, he notes, and he ties it back to 14:15: they asked for a decision, were destroyed, and are then raised for the reckoning, standing before Allah with nothing to hide them. Lillah, he says, means at Allah's command to come out.",
            "bn": "ওয়া বারাযূ লিল্লাহি জামী'আ: আর তারা সবাই একসঙ্গে আল্লাহর সামনে বেরিয়ে আসবে। কুরতুবী বলেন, বুরূয মানে প্রকাশ পাওয়া। আর বারায হলো খোলা প্রশস্ত জায়গা, সবকিছু চোখের সামনে থাকে বলেই এই নাম। কিয়ামতের দিন তারা কবর থেকে বেরিয়ে আসবে। ক্রিয়াটি অতীতকালের, কিন্তু অর্থ ভবিষ্যতের, এটাও তিনি লক্ষ করেন। তিনি একে ১৪:১৫ আয়াতের সঙ্গে জুড়ে দেন: তারা ফায়সালা চেয়েছিল, ধ্বংস হয়েছিল, তারপর হিসাবের জন্য তাদের ওঠানো হবে। তখন আল্লাহর সামনে তাদের ঢেকে রাখার কিছুই থাকবে না। আর লিল্লাহ মানে, তাঁর মতে, বেরিয়ে আসার জন্য আল্লাহর হুকুমে।"
          },
          {
            "en": "Ibn Kathir pictures an open stretch of ground where nothing screens anyone. As-Sa'di describes the trumpet blown, people coming out of the graves to their Lord and standing on a level plain, in the words of 20:106 and 20:107, with nothing of them hidden from Him. The commentators differ on who is meant by they. Ibn Kathir says all creation, the righteous and the wicked; the Muyassar says the creatures come out to be judged. At-Tabari reads they as those who disbelieved, the people the preceding verses have been describing.",
            "bn": "ইবন কাসীরের বর্ণনায় এ এক খোলা প্রান্তর, যেখানে কেউ কারও আড়ালে থাকতে পারে না। সা'দী বলেন, শিঙায় ফুঁ দেওয়া হলে মানুষ কবর থেকে বেরিয়ে তাদের রবের দিকে যাবে। দাঁড়াবে এক সমতল ময়দানে, যার বর্ণনা ২০:১০৬ ও ২০:১০৭ আয়াতের ভাষায়। তাদের কোনো কিছুই তাঁর কাছে গোপন থাকবে না। 'তারা' কারা, এ নিয়ে মুফাসসিরদের মত আলাদা। ইবন কাসীর বলেন, সমস্ত সৃষ্টি, নেককার ও বদকার সবাই। মুয়াসসার বলে, বিচারের জন্য সৃষ্টিকুল বেরিয়ে আসবে। তাবারী কিন্তু এখানে 'তারা' বলতে বোঝেন কাফিরদের, আগের আয়াতগুলো যাদের কথা বলে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Weak Were",
          "bn": "দুর্বল বলতে কারা"
        },
        "p": [
          {
            "en": "Fa-qala al-du'afa'u li-lladhina istakbaru: then the weak will say to those who were arrogant. At-Tabari reads it as the followers speaking to the followed, who in this world were too proud to worship Allah sincerely and to follow the messengers sent to them. He cites Ibn Jurayj: the weak are the followers, the arrogant are the leaders. Al-Baghawi says the same and adds that the arrogant were proud over people, the leaders and chiefs. Ibn Kathir has followers of their chiefs, masters and great ones, who would not worship Allah alone or go along with the messengers.",
            "bn": "ফাকালাদ দু'আফাউ লিল্লাযীনাস তাকবারূ: তখন দুর্বলরা অহংকারীদের বলবে। তাবারীর ব্যাখ্যায় কথা বলছে অনুসারীরা, যাদের তারা মানত তাদের উদ্দেশে। এই মান্য লোকেরা দুনিয়ায় অহংকারবশত আল্লাহর খাঁটি ইবাদত করেনি, তাদের কাছে পাঠানো রাসূলদেরও মানেনি। তাবারী ইবন জুরাইজের কথা আনেন: দুর্বলরা হলো অনুসারী, অহংকারীরা নেতা। বাগাভীও তাই বলেন। তিনি যোগ করেন, এরা মানুষের উপর বড়াই করত, এরাই ছিল নেতা ও সর্দার। ইবন কাসীরের ভাষায় দুর্বলরা তাদের সর্দার, মনিব আর বড়দের অনুসারী। আর সেই বড়রা এক আল্লাহর ইবাদত করতে ও রাসূলদের সঙ্গে চলতে রাজি হয়নি।"
          },
          {
            "en": "As-Sa'di chooses a sharper word. The weak, he says, are al-tabi'un wa-l-muqallidun, the followers and the imitators, and the arrogant are those followed, the leaders in misguidance. On taba'an, followers, the grammarians are close: at-Tabari takes it as the plural of tabi', as ghayab is of gha'ib, and al-Baghawi and al-Qurtubi compare haras from haris. Al-Qurtubi also allows a verbal noun, meaning people of following. On every reading, what the weak put forward is simply that they followed.",
            "bn": "সা'দী এখানে আরও ধারালো শব্দ বেছে নেন। তাঁর মতে দুর্বলরা হলো আত-তাবি'ঊন ওয়াল মুকাল্লিদূন: অনুসারী আর অন্ধ অনুকরণকারী। আর অহংকারীরা হলো যাদের অনুসরণ করা হতো, গোমরাহির পথের নেতারা। তাবা'আ শব্দ নিয়ে ব্যাকরণের ব্যাখ্যাগুলো কাছাকাছি। তাবারী একে তাবি'-এর বহুবচন ধরেন, যেমন গা'ইব থেকে গায়াব। বাগাভী আর কুরতুবী তুলনা দেন হারিস থেকে হারাস শব্দের সঙ্গে। কুরতুবী একে ক্রিয়াবাচক বিশেষ্য হিসেবেও পড়ার সুযোগ রাখেন, তখন অর্থ হয় অনুসরণের লোক। যেভাবেই পড়া হোক, দুর্বলদের হাতে দেখানোর মতো একটাই জিনিস আছে: তারা অনুসরণ করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Obedience Presented as a Claim",
          "bn": "আনুগত্যের বিনিময় দাবি"
        },
        "p": [
          {
            "en": "Inna kunna lakum taba'an: we were your followers. Ibn Kathir glosses it: whatever you ordered, we carried out. At-Tabari fills in the orders: they obeyed their leaders in worshipping idols and disbelieving in Allah, and kept away from what the leaders forbade them, which was following Allah's messengers. As-Sa'di has the weak say it more bitterly: you ordered us to misguidance, you made it look fair to us, and you led us astray. All three place the following in this world, where it was given freely.",
            "bn": "ইন্না কুন্না লাকুম তাবা'আ: আমরা তো তোমাদেরই অনুসারী ছিলাম। ইবন কাসীরের ব্যাখ্যা: তোমরা যা হুকুম করতে, আমরা তা-ই পালন করতাম। হুকুমগুলো কী ছিল, তাবারী তা খুলে বলেন। মূর্তিপূজা আর আল্লাহকে অস্বীকার করার ব্যাপারে তারা নেতাদের কথা মেনেছিল। নেতারা যা নিষেধ করত তা থেকেও দূরে থেকেছিল, আর সেই নিষিদ্ধ জিনিসটা ছিল আল্লাহর রাসূলদের অনুসরণ। সা'দীর বর্ণনায় দুর্বলদের কণ্ঠে তিক্ততা বেশি: তোমরা আমাদের গোমরাহির হুকুম দিয়েছিলে, তা আমাদের চোখে সুন্দর করে সাজিয়েছিলে, আর আমাদের পথভ্রষ্ট করেছিলে। তিনজনই অনুসরণটা রাখেন দুনিয়ায়, যেখানে তা দেওয়া হয়েছিল স্বেচ্ছায়।"
          },
          {
            "en": "Fa-hal antum mughnuna 'anna: so can you avail us anything? Al-Qurtubi separates two uses of the verb: aghna 'anhu is to push harm away from someone, while aghnahu is to bring him benefit, so the question is whether they can push anything away. At-Tabari adds one word, today. Ibn Kathir and the Muyassar both add a reminder, as you used to promise us, and as-Sa'di: even an atom's weight. The followers do not plead for mercy. They present their obedience as if it had bought them something.",
            "bn": "ফাহাল আনতুম মুগনূনা 'আন্না: তাহলে তোমরা কি আমাদের থেকে কিছু সরাতে পারবে? কুরতুবী এই ক্রিয়ার দুটি ব্যবহার আলাদা করেন। আগনা 'আনহু মানে কারও উপর থেকে কষ্ট সরিয়ে দেওয়া, আর আগনাহু মানে তার কাছে উপকার পৌঁছে দেওয়া। তাই প্রশ্নটা হলো, তারা কি কিছু ঠেকাতে পারবে। তাবারী একটা শব্দ যোগ করেন: আজ। ইবন কাসীর আর মুয়াসসার দুজনেই যোগ করেন একটা খোঁটা: যেমনটা তোমরা আমাদের কথা দিতে। সা'দী বলেন: এক কণা পরিমাণ হলেও। অনুসারীরা দয়া ভিক্ষা করছে না। তারা নিজেদের আনুগত্যকে দেখাচ্ছে এমনভাবে, যেন তা দিয়ে কিছু কেনা হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Guided to What?",
          "bn": "কোন পথের হিদায়াত?"
        },
        "p": [
          {
            "en": "Law hadana Allahu la-hadaynakum: had Allah guided us, we would have guided you. Al-Qurtubi lists three meanings. First: had Allah guided us to faith, we would have guided you to it. Then, each introduced with it is said: had He guided us to the road to Paradise; and had He saved us from the punishment, we would have saved you. At-Tabari takes a reading close to that last one: had Allah shown us anything by which to fend off His punishment today, we would have shown it to you, so that you could fend it off yourselves.",
            "bn": "লাও হাদানাল্লাহু লাহাদাইনাকুম: আল্লাহ আমাদের হিদায়াত দিলে আমরাও তোমাদের হিদায়াত দিতাম। কুরতুবী তিনটি অর্থ উল্লেখ করেন। প্রথমটি: আল্লাহ আমাদের ঈমানের পথ দেখালে আমরাও তোমাদের সে পথ দেখাতাম। বাকি দুটি তিনি আনেন 'বলা হয়' দিয়ে। একটি হলো, তিনি আমাদের জান্নাতের রাস্তা দেখালে আমরাও দেখাতাম। অন্যটি, তিনি আমাদের আযাব থেকে বাঁচালে আমরাও তোমাদের বাঁচাতাম। তাবারী যে অর্থ নেন তা শেষটির কাছাকাছি। আজ তাঁর আযাব ঠেকানোর মতো কিছু যদি আল্লাহ আমাদের বাতলে দিতেন, আমরা তা তোমাদেরও বাতলে দিতাম, যাতে তোমরা নিজেরাই তা ঠেকাতে পারো।"
          },
          {
            "en": "On at-Tabari's reading the leaders are answering the question they were asked, and guidance here means a way out, not the faith they refused in the world. The Muyassar takes the other road: had Allah guided us to faith we would have directed you to it, but He did not grant us success, so we went astray and led you astray. Al-Baghawi is close: we would have called you to guidance, and when He left us astray, we called you to misguidance. As-Sa'di sets beside the sentence the words we led you astray as we went astray, an echo of 28:63.",
            "bn": "তাবারীর পাঠে নেতারা ঠিক সেই প্রশ্নেরই জবাব দিচ্ছে, যা তাদের করা হয়েছিল। এখানে হিদায়াত মানে বেরোনোর রাস্তা, দুনিয়ায় যে ঈমান তারা প্রত্যাখ্যান করেছিল সেটা নয়। মুয়াসসার চলে অন্য পথে। আল্লাহ আমাদের ঈমানের পথ দেখালে আমরাও তোমাদের সে পথে ডাকতাম। কিন্তু তিনি আমাদের তাওফীক দেননি, তাই আমরা নিজেরা পথ হারিয়েছি, তোমাদেরও হারিয়েছি। বাগাভীর কথাও কাছাকাছি: আমরা তোমাদের হিদায়াতের দিকে ডাকতাম, আর তিনি যখন আমাদের পথভ্রষ্ট থাকতে দিলেন, আমরা তোমাদের ডাকলাম গোমরাহির দিকে। সা'দী এ বাক্যের পাশে বসান আরেকটি কথা: আমরা নিজেরা যেমন বিপথে গিয়েছিলাম, তোমাদেরও তেমনি বিপথে নিয়েছিলাম। কথাটি ২৮:৬৩ আয়াতের প্রতিধ্বনি।"
          },
          {
            "en": "Ibn Kathir carries the leaders' speech further in his paraphrase: but the word of our Lord has come true against us, Allah's decree went before, in us and in you, and the word of punishment is due upon the disbelievers. So the texts consulted here do not agree on what guidance means here. At-Tabari reads a way to escape; the Muyassar, al-Baghawi and al-Qurtubi's first meaning read guidance to faith; Ibn Kathir frames the reply with decree. As-Sa'di draws the plain conclusion in his own words: so none can avail another.",
            "bn": "ইবন কাসীর নিজের ভাষায় নেতাদের কথা আরও খানিকটা এগিয়ে নেন। কিন্তু আমাদের বিরুদ্ধে আমাদের রবের কথা সত্য হয়ে গেছে। আমাদের আর তোমাদের ব্যাপারে আল্লাহর তাকদীর আগেই নির্ধারিত ছিল। আর কাফিরদের উপর আযাবের বাণী অবধারিত হয়ে গেছে। তাহলে দেখা যাচ্ছে, এখানে হিদায়াত মানে কী, সে বিষয়ে সংগৃহীত তাফসীরগুলো একমত নয়। তাবারীর কাছে এটা বাঁচার পথ। মুয়াসসার, বাগাভী আর কুরতুবীর প্রথম অর্থে এটা ঈমানের পথ। আর ইবন কাসীর জবাবটাকে দেখেন তাকদীরের আলোয়। সা'দী নিজের ভাষায় সোজা উপসংহার টানেন: কাজেই কেউ কারও কোনো কাজে আসবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "An Excuse That Changes Nothing",
          "bn": "যে অজুহাতে কিছুই বদলায় না"
        },
        "p": [
          {
            "en": "None of the commentators consulted here stops to weigh the leaders' sentence as an argument, and none of them calls it a sound one; they explain what the words mean and move on. The Qur'an gives a fuller version of the same quarrel in 34:31 to 34:33, which Ibn Kathir places at the gathering. The weak say: had it not been for you, we would have been believers. The arrogant answer: did we turn you away from guidance after it had come to you? No, you were criminals. The weak reply: it was your plotting by night and day, when you ordered us to disbelieve in Allah.",
            "bn": "সংগৃহীত তাফসীরগুলোর কেউই নেতাদের এ কথাকে যুক্তি হিসেবে মেপে দেখতে থামেননি, কেউ একে গ্রহণযোগ্য যুক্তিও বলেননি। শব্দগুলোর অর্থ বুঝিয়ে দিয়েই তাঁরা এগিয়ে গেছেন। একই বিবাদের আরও পূর্ণ ছবি কুরআন দেয় ৩৪:৩১ থেকে ৩৪:৩৩ আয়াতে, আর ইবন কাসীর সেটাকে রাখেন হাশরের ময়দানে। দুর্বলরা বলে: তোমরা না থাকলে আমরা অবশ্যই মুমিন হতাম। অহংকারীরা জবাব দেয়: তোমাদের কাছে হিদায়াত আসার পর আমরা কি তোমাদের তা থেকে ফিরিয়ে রেখেছিলাম? বরং তোমরা নিজেরাই অপরাধী ছিলে। দুর্বলরা বলে: বরং দিনরাত তোমাদের চক্রান্তই ছিল, যখন তোমরা আমাদের আল্লাহকে অস্বীকার করার হুকুম দিতে।"
          },
          {
            "en": "Read beside 14:21, that exchange has each side admitting what the other says: guidance had come, and orders were given and taken. In 14:21 itself the leaders never deny being followed. Whatever their reply means, the words that follow show it changes nothing, for panic and patience are now the same to them. The next verse, 14:22, gives the speech of Satan once the matter has been decided, and it belongs to its own reading.",
            "bn": "১৪:২১ আয়াতের পাশে রেখে পড়লে দেখা যায়, সেখানে দুই পক্ষই অপরপক্ষের কথা মেনে নিচ্ছে। হিদায়াত এসেছিল, আর হুকুম দেওয়াও হয়েছিল, মানাও হয়েছিল। ১৪:২১ আয়াতে নেতারা কোথাও অস্বীকার করে না যে লোকেরা তাদের অনুসরণ করত। তাদের জবাবের অর্থ যা-ই হোক, পরের কথাগুলোই দেখিয়ে দেয় যে তাতে কিছুই বদলায় না। অস্থিরতা আর সবর এখন তাদের কাছে একই। পরের আয়াত ১৪:২২-এ আছে বিচার শেষ হওয়ার পর শয়তানের ভাষণ, সেটা আলাদা পাঠের বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "In the Fire, or Before?",
          "bn": "আগুনে, নাকি তার আগেই"
        },
        "p": [
          {
            "en": "Where does this exchange happen? Ibn Kathir says the apparent sense is that it takes place in the Fire, after they have entered it, and he lines up the sister verses. In 40:47 and 40:48 they argue within the Fire, the weak ask the arrogant to take a share of it off them, and the answer comes: we are all in it; Allah has judged between His servants. In 7:38 and 7:39 each nation that enters curses its sister, and the last asks double punishment for the first. In 33:66 to 33:68 they say: we obeyed our masters and our great ones, and they led us astray.",
            "bn": "এ কথোপকথন কোথায় ঘটবে? ইবন কাসীর বলেন, বাহ্যত মনে হয় আগুনে প্রবেশের পর সেখানেই এটা ঘটবে। এরপর তিনি একে একে সাজিয়ে দেন সমধর্মী আয়াতগুলো। ৪০:৪৭ ও ৪০:৪৮ আয়াতে তারা আগুনের ভেতরে বিতর্ক করে। দুর্বলরা অহংকারীদের বলে, আগুনের কিছু অংশ আমাদের থেকে নিয়ে নাও। জবাব আসে: আমরা সবাই তো এর মধ্যেই আছি, আল্লাহ বান্দাদের মাঝে ফায়সালা করে ফেলেছেন। ৭:৩৮ ও ৭:৩৯ আয়াতে প্রতিটি দল প্রবেশের সময় তার সমগোত্রীয় দলকে লানত দেয়, আর পরের দল আগের দলের জন্য দ্বিগুণ শাস্তি চায়। ৩৩:৬৬ থেকে ৩৩:৬৮ আয়াতে তারা বলে: আমরা আমাদের নেতা ও বড়দের কথা মেনেছিলাম, আর তারাই আমাদের পথভ্রষ্ট করেছে।"
          },
          {
            "en": "The quarrel at the gathering itself, Ibn Kathir says, is that of 34:31 to 34:33. As-Sa'di places 14:21 there too: once people have come out onto the plain, they begin to argue, each defending himself as far as he can, though that will not be granted them. The Muyassar also sets the words on the Day of Resurrection, when all appear to be judged. The texts consulted here leave the difference standing, as does this article. Another sister, 2:166 and 2:167, completes the picture: the followed disown those who followed them, and every tie between them is cut.",
            "bn": "ইবন কাসীরের মতে হাশরের ময়দানের বিবাদ হলো ৩৪:৩১ থেকে ৩৪:৩৩ আয়াতেরটি। সা'দী ১৪:২১ আয়াতকেও রাখেন সেখানেই। মানুষ যখন ময়দানে বেরিয়ে আসবে, তখন তারা তর্ক শুরু করবে, প্রত্যেকে যতটা পারে নিজেকে বাঁচানোর চেষ্টা করবে। কিন্তু সে সুযোগ তারা পাবে কোথায়? মুয়াসসারও কথাগুলো রাখে কিয়ামতের দিনে, যখন সবাই বিচারের জন্য হাজির হবে। সংগৃহীত তাফসীরগুলো এ মতভেদ মিটিয়ে দেয়নি, এ লেখাও মেটাচ্ছে না। আরও কিছু সমধর্মী আয়াত ছবিটা পূর্ণ করে, ২:১৬৬ ও ২:১৬৭। সেখানে যাদের অনুসরণ করা হতো, তারা অনুসারীদের সঙ্গে সম্পর্ক অস্বীকার করে, আর তাদের মাঝের সব বন্ধন ছিঁড়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Panic and Patience Weighed Equal",
          "bn": "অস্থিরতা আর সবর সমান ওজনের"
        },
        "p": [
          {
            "en": "Sawa'un 'alayna a-jazi'na am sabarna ma lana min mahis: it is the same for us whether we panic or are patient; there is no escape for us. Al-Qurtubi explains mahis as a place of flight and refuge, from hasa, to flee or swerve aside: we have no way to put distance between us and the Fire. At-Tabari glosses it as a place to veer off to. Ibn Kathir: there is no deliverance from what we are in, whether we bear it or rage at it. At-Tabari puts it in the leaders' mouths: we have panicked, and neither panic nor patience has helped us.",
            "bn": "সাওয়াউন 'আলাইনা আজাযি'না আম সাবারনা মা লানা মিম মাহীস: আমরা অস্থির হই বা সবর করি, দুটোই আমাদের জন্য সমান, আমাদের পালানোর কোনো জায়গা নেই। কুরতুবী বলেন, মাহীস মানে পালানোর আর আশ্রয় নেওয়ার জায়গা। শব্দটা এসেছে হা-সা থেকে, অর্থাৎ পালানো বা পাশ কাটিয়ে সরে যাওয়া। মানে দাঁড়ায়: আগুন থেকে নিজেদের দূরে সরানোর কোনো উপায় আমাদের নেই। তাবারীর ব্যাখ্যায় এটা এমন জায়গা যেদিকে সরে যাওয়া যায়। ইবন কাসীর বলেন, যে অবস্থায় আমরা আছি তা থেকে মুক্তি নেই, সবর করি বা হা-হুতাশ করি। তাবারী নেতাদের মুখে কথাটা বসান এভাবে: আমরা অস্থির হয়েছি, কিন্তু অস্থিরতাও কাজে আসেনি, সবরও না।"
          },
          {
            "en": "Some commentators carry reports of how the people of the Fire came to say this. At-Tabari gives, with his chain through Yunus and Ibn Wahb, the words of Ibn Zayd, which Ibn Kathir also quotes: they said, the people of Paradise reached it by weeping and humbling themselves before Allah, so let us weep; when that did not help, they said, they reached it by patience, so let us be patient; they showed a patience never seen, it did not help, and then they said this verse. These are Ibn Zayd's words, not a hadith.",
            "bn": "জাহান্নামীরা কীভাবে এ কথায় পৌঁছাল, সে বিষয়ে কিছু বর্ণনা মুফাসসিররা এনেছেন। তাবারী ইউনুস ও ইবন ওয়াহবের মাধ্যমে নিজের সনদে ইবন যায়দের কথা আনেন, ইবন কাসীরও তা উদ্ধৃত করেন। তারা বলল, জান্নাতীরা জান্নাত পেয়েছে আল্লাহর কাছে কান্নাকাটি আর কাকুতি-মিনতি করে, চলো আমরাও কাঁদি। তাতে কাজ হলো না। তখন বলল, তারা জান্নাত পেয়েছে সবরের কারণে, চলো আমরাও সবর করি। এমন সবর করল যা আগে কেউ দেখেনি। তাতেও কাজ হলো না। তখন তারা এ আয়াতের কথাগুলো বলল। এটা ইবন যায়দের নিজের কথা, কোনো হাদিস নয়।"
          },
          {
            "en": "A second report, from Muhammad ibn Ka'b al-Qurazi, is in at-Tabari, al-Qurtubi and al-Baghawi: they agreed on patience, it lasted long, then they panicked. In at-Tabari's version he opens it with it reached me, or was mentioned to me, and the editor's note in the consulted at-Tabari text calls its chain ruined, one narrator being unknown or abandoned. Al-Baghawi cites Muqatil, without a chain: panic for five hundred years, then patience for five hundred. Al-Qurtubi gives the reverse order under it is narrated from the Prophet ﷺ, with no chain or grading, so this article does not rely on it. No tafsir consulted attaches a sound hadith to this verse.",
            "bn": "দ্বিতীয় বর্ণনাটি মুহাম্মাদ ইবন কা'ব আল-কুরাযীর, তাবারী, কুরতুবী ও বাগাভী তিনজনই এনেছেন। তারা সবর করার ব্যাপারে একমত হলো, সবর দীর্ঘ হলো, তারপর অস্থির হয়ে পড়ল। তাবারীর বর্ণনায় তিনি শুরু করেন এই বলে: আমার কাছে পৌঁছেছে, অথবা আমাকে বলা হয়েছে। সংগৃহীত তাবারীর টীকায় সম্পাদক এর সনদকে অকেজো বলেছেন, কারণ একজন বর্ণনাকারী অজ্ঞাত, নয়তো পরিত্যক্ত। বাগাভী কোনো সনদ ছাড়াই মুকাতিলের কথা আনেন: পাঁচশো বছর অস্থিরতা, তারপর পাঁচশো বছর সবর। কুরতুবী ঠিক উল্টো ক্রমটি আনেন 'নবী ﷺ থেকে বর্ণিত আছে' বলে, কিন্তু কোনো সনদ বা মান উল্লেখ করেন না। তাই এ লেখা সেটির উপর ভর করছে না। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো সহীহ হাদিস জোড়েনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Following While It Can Be Checked",
          "bn": "যাচাইয়ের সময় থাকতেই অনুসরণ"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes the Hereafter as the text describes it: a scene of that Day and a conversation among people whose outcome has already been decided. It licenses no contempt for any living person or community, and no one alive is to be labelled one of the weak or one of the arrogant because of it. While a person lives, the choice of whom to follow is still open to them. The verse is not a set of labels for sorting one's neighbours; it is a warning addressed to whoever is reading it.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি আখিরাতের সেই ছবিই দেখায়, যা কুরআনের ভাষায় আছে: সেদিনের একটি দৃশ্য, আর এমন কিছু মানুষের কথোপকথন যাদের পরিণাম আগেই ঠিক হয়ে গেছে। বেঁচে থাকা কোনো মানুষ বা কোনো সম্প্রদায়কে তুচ্ছ করার অনুমতি এ আয়াত দেয় না। এ আয়াতের জোরে জীবিত কাউকে দুর্বলদের দলে বা অহংকারীদের দলে ফেলা যায় না। মানুষ যতদিন বেঁচে আছে, কার পেছনে চলবে সে পথ তার সামনে খোলা। প্রতিবেশীদের গায়ে তকমা লাগানোর তালিকা এটা নয়। এটা সতর্কবাণী, আর তা যে পড়ছে তার উদ্দেশেই।"
          },
          {
            "en": "As-Sa'di's word, al-muqallidun, the imitators, names the habit the verse is about: taking a road because someone ahead is on it, without asking where it goes. The followers in the verse never say they were forced. They say only that they followed. Everyone follows someone, a parent, a teacher, a scholar, a crowd, a screen. The question the verse leaves with the reader is whether that following is being checked against what Allah revealed and what His Messenger ﷺ taught while checking can still change something.",
            "bn": "সা'দীর ব্যবহার করা শব্দ আল-মুকাল্লিদূন, অর্থাৎ অন্ধ অনুকরণকারী। এ আয়াত যে অভ্যাসের কথা বলছে, শব্দটা ঠিক সেটাকেই চিহ্নিত করে। সামনে কেউ হাঁটছে বলে একই রাস্তা ধরা, রাস্তাটা কোথায় গেছে তা না জেনেই। আয়াতের অনুসারীরা কোথাও বলে না যে তাদের জোর করা হয়েছিল। তারা শুধু বলে, আমরা তোমাদের অনুসরণ করেছিলাম। প্রত্যেকেই কারও না কারও পেছনে চলে। বাবা-মা, শিক্ষক, আলেম, ভিড়, কিংবা মোবাইলের পর্দা। আয়াত পাঠকের হাতে যে প্রশ্ন রেখে যায় তা হলো: এই অনুসরণ কি আল্লাহর নাজিল করা বাণী আর তাঁর রাসূল ﷺ-এর শিক্ষার সঙ্গে মিলিয়ে দেখা হচ্ছে? এখনই মিলিয়ে দেখার সময়, যখন তাতে কিছু বদলানো যায়।"
          },
          {
            "en": "The verse shows the moment when I was only following is finally said aloud and buys nothing, and the ones who were followed cannot even answer for themselves. That is why the check belongs to today. Of any voice that shapes my faith or my conduct I can ask: where does this lead, and on what proof? Would this person stand for me then? And if others follow me, at home, at work or anywhere else, the verse speaks to me from the other side as well, for in it the followed stand beside their followers with nothing to give them.",
            "bn": "আয়াতটি সেই মুহূর্ত দেখায়, যখন 'আমি তো শুধু অনুসরণ করেছি' কথাটা শেষমেশ মুখে উচ্চারিত হয়, অথচ তাতে কিছুই মেলে না। আর যাদের অনুসরণ করা হয়েছিল, তারা নিজেদের দায়ও নিতে পারে না। এ কারণেই যাচাইয়ের কাজটা আজকের। আমার ঈমান বা আচরণকে যে কণ্ঠ গড়ে দিচ্ছে, তাকে আমি জিজ্ঞেস করতে পারি: এ পথ কোথায় নিয়ে যায়, আর তার দলিল কী? সেদিন কি এই মানুষটি আমার হয়ে দাঁড়াবে? আর ঘরে, কাজে বা অন্য কোথাও কেউ যদি আমার পেছনে চলে, তাহলে আয়াতটি আমাকে অন্য দিক থেকেও ডাকছে। কারণ এখানে যাদের অনুসরণ করা হতো, তারা অনুসারীদের পাশেই দাঁড়িয়ে, অথচ তাদের দেওয়ার মতো কিছুই নেই।"
          }
        ]
      }
    ]
  },
  "14:24-26": {
    "sections": [
      {
        "h": {
          "en": "After the Ashes, a Tree",
          "bn": "ছাইয়ের পরে একটি গাছ"
        },
        "p": [
          {
            "en": "Earlier in the surah, 14:18 likened the deeds of those who disbelieve in their Lord to ashes that the wind blows hard on a stormy day. Al-Qurtubi reads 14:24 as the answer to that picture: having struck the parable of the disbelievers' deeds, Allah now strikes the parable of the believers' words. Between the ashes and the tree stands 14:23, where the believers enter gardens and their greeting is peace.",
            "bn": "এর আগে ১৪:১৮ আয়াতে রবকে অস্বীকারকারীদের আমলকে তুলনা করা হয়েছে ছাইয়ের সঙ্গে, ঝড়ের দিনে বাতাস যাকে প্রচণ্ড বেগে উড়িয়ে নেয়। কুরতুবী ১৪:২৪ আয়াতকে পড়েন সেই ছবির জবাব হিসেবে। কাফিরদের আমলের উপমা দেওয়ার পর আল্লাহ এবার দিচ্ছেন মুমিনদের কথার উপমা। ছাই আর গাছের মাঝখানে আছে ১৪:২৩ আয়াত। সেখানে মুমিনরা জান্নাতে প্রবেশ করে, আর তাদের অভিবাদন হয় সালাম।"
          },
          {
            "en": "The verse opens with alam tara, have you not seen. At-Tabari takes it as spoken to the Prophet ﷺ: have you not seen, O Muhammad, with the eye of your heart, and so come to know how Allah has drawn a likeness. Al-Baghawi and the Muyassar render it have you not known. Al-Baghawi defines a mathal as a saying that passes from mouth to mouth to liken one thing to another. At-Tabari adds a point of syntax: the tree is good of fruit, and the word fruit is left unsaid because naming the tree is enough for those who hear.",
            "bn": "আয়াতের শুরু আলাম তারা দিয়ে: তুমি কি দেখোনি? তাবারীর মতে কথাটি নবী ﷺ-এর প্রতি। হে মুহাম্মাদ, অন্তরের চোখে কি দেখোনি, আর জানোনি আল্লাহ কীভাবে একটি দৃষ্টান্ত দাঁড় করিয়েছেন? বাগাভী আর মুয়াসসার এর অর্থ করেন: তুমি কি জানো না? বাগাভী মাসালের সংজ্ঞাও দেন। মাসাল হলো লোকের মুখে মুখে চলা এমন কথা, যা দিয়ে এক জিনিসকে আরেক জিনিসের সঙ্গে মেলানো হয়। তাবারী ভাষার একটি সূক্ষ্ম দিকও দেখান। গাছটি উত্তম তার ফলের কারণে। তবু ফল শব্দটি বলা হয়নি, কারণ গাছের নাম শুনলেই শ্রোতা ফলের কথা বুঝে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Readings of the Word",
          "bn": "কালিমার তিন পাঠ"
        },
        "p": [
          {
            "en": "The best-known reading comes from Ibn 'Abbas (RA) through 'Ali ibn Abi Talha, and at-Tabari, Ibn Kathir and al-Qurtubi all relay it: the good word is the testimony that there is no god but Allah, and the good tree is the believer. Its firm root, he said, is la ilaha illallah fixed in the believer's heart, and its branch in the sky means that by it the believer's deeds are raised to heaven. Ibn Kathir adds that ad-Dahhak, Sa'id ibn Jubayr, 'Ikrima, Qatada and others took the verse as a picture of the believer, his good speech and his righteous deeds.",
            "bn": "সবচেয়ে পরিচিত ব্যাখ্যাটি ইবন আব্বাস (রাঃ)-এর, আলী ইবন আবী তালহার সূত্রে। তাবারী, ইবন কাসীর ও কুরতুবী তিনজনই তা এনেছেন। তাঁর মতে উত্তম কালিমা হলো এই সাক্ষ্য যে আল্লাহ ছাড়া কোনো ইলাহ নেই, আর উত্তম গাছ হলো মুমিন। দৃঢ় শিকড় মানে মুমিনের অন্তরে গেঁথে থাকা লা ইলাহা ইল্লাল্লাহ। আকাশে ছড়ানো শাখা মানে, এই কালিমার জোরেই মুমিনের আমল আসমানে তুলে নেওয়া হয়। ইবন কাসীর জানান, দাহহাক, সাঈদ ইবন জুবাইর, ইকরিমা, কাতাদা ও আরও অনেকে আয়াতটিকে দেখেছেন মুমিনের ছবি হিসেবে: মুমিন নিজে, তার উত্তম কথা আর তার নেক আমল।"
          },
          {
            "en": "Al-Qurtubi reports from Mujahid and Ibn Jurayj that it is iman, faith, and at-Tabari's own gloss agrees: by good, he says, is meant faith in Allah. Ar-Rabi' ibn Anas, in at-Tabari, calls it the parable of faith, whose firm root that never passes away is sincerity to Allah and whose branch in the sky is the fear of Allah. A third reading, from 'Atiyya al-'Awfi and ar-Rabi' as al-Qurtubi lists them, makes it the believer himself, from whom good speech and righteous deeds never stop rising.",
            "bn": "কুরতুবী মুজাহিদ ও ইবন জুরাইজ থেকে আনেন, এটি ঈমান। তাবারীর নিজের ব্যাখ্যাও তাই: উত্তম বলতে আল্লাহর প্রতি ঈমান। তাবারীর বর্ণনায় রাবী ইবন আনাস একে বলেন ঈমানের দৃষ্টান্ত। তার যে দৃঢ় শিকড় কখনো মুছে যায় না, তা আল্লাহর জন্য ইখলাস। আর আকাশে তার শাখা হলো আল্লাহর ভয়। তৃতীয় ব্যাখ্যায় কালিমা হলো মুমিন নিজেই, যার থেকে উত্তম কথা আর নেক আমল উঠতেই থাকে। কুরতুবী এ মত আতিয়্যা আওফী ও রাবীর নামে উল্লেখ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Palm or a Tree of Paradise",
          "bn": "খেজুর গাছ, নাকি জান্নাতের গাছ"
        },
        "p": [
          {
            "en": "On the tree itself there is a real difference, and at-Tabari sets out both sides. Most said it is the date palm: Anas ibn Malik, Masruq, Mujahid, 'Ikrima and Qatada among them, and Ibn Kathir adds Ibn Mas'ud (RA). 'Ikrima's reason fits in a single clause: there is never a time without some benefit in it. Shu'ayb ibn al-Habhab tells how he went with Abu al-'Aliya to visit Anas, who had a tray of fresh dates brought and said: eat, Abu al-'Aliya, for this is from the tree Allah mentioned in His Book.",
            "bn": "গাছটি কোনটি, এ নিয়ে সত্যিকারের মতভেদ আছে, আর তাবারী দুই পক্ষই তুলে ধরেন। অধিকাংশের মতে এটি খেজুর গাছ। আনাস ইবন মালিক, মাসরূক, মুজাহিদ, ইকরিমা ও কাতাদা এ মতের লোক, আর ইবন কাসীর এ তালিকায় ইবন মাসঊদ (রাঃ)-এর নামও যোগ করেন। ইকরিমার যুক্তি এক কথায়: এ গাছে উপকার কখনো ফুরায় না। শুআইব ইবন হাবহাব বলেন, তিনি আবুল আলিয়ার সঙ্গে আনাস (রাঃ)-এর কাছে গিয়েছিলেন। আনাস এক থালা তাজা খেজুর আনিয়ে বললেন: খাও, আবুল আলিয়া। এ সেই গাছের ফল, যার কথা আল্লাহ তাঁর কিতাবে বলেছেন।"
          },
          {
            "en": "The other view comes from Ibn 'Abbas through Abu Zabyan: it is a tree in Paradise. At-Tabari, al-Baghawi and Ibn Kathir all record it. Al-Qurtubi relays a further report from Ibn 'Abbas that it is the coconut, and quotes as-Suhayli rejecting a coconut report ascribed to 'Ali, because the sound hadith of Ibn 'Umar names the palm. At-Tabari weighs the palm against the tree of Paradise and chooses the palm, and he gives his reason in a phrase: the report from the Messenger of Allah ﷺ about it is sound.",
            "bn": "অন্য মতটি ইবন আব্বাস (রাঃ)-এর, আবু যাবইয়ানের সূত্রে: এটি জান্নাতের একটি গাছ। তাবারী, বাগাভী ও ইবন কাসীর তিনজনই তা লিখেছেন। কুরতুবী ইবন আব্বাস থেকে আরেকটি বর্ণনা আনেন যে গাছটি নারকেল। আবার তিনি সুহাইলীর কথাও উদ্ধৃত করেন, যিনি আলী (রাঃ)-এর নামে চলা নারকেলের বর্ণনাটি নাকচ করেছেন। কারণ ইবন উমার (রাঃ)-এর সহীহ হাদীসে গাছটির নাম খেজুর। তাবারী খেজুর গাছ আর জান্নাতের গাছ দুটি মত মিলিয়ে দেখে খেজুর গাছকেই বেছে নেন। কারণটাও তিনি সংক্ষেপে বলেন: এ বিষয়ে রাসূলুল্লাহ ﷺ থেকে আসা বর্ণনাটি সহীহ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer Ibn 'Umar Kept Back",
          "bn": "ইবন উমারের না-বলা উত্তর"
        },
        "p": [
          {
            "en": "Ibn Kathir quotes this report under the verse from al-Bukhari. In Sahih al-Bukhari (4698) 'Abdullah ibn 'Umar (RA) says: We were with the Messenger of Allah ﷺ and he said, 'Tell me of a tree that resembles, or is like, the Muslim man: its leaves do not fall, and not, and not, and not, and it gives its fruit at every time.' Ibn 'Umar said: It came to my mind that it was the palm, but I saw Abu Bakr and 'Umar not speaking, so I disliked to speak. When they said nothing, the Messenger of Allah ﷺ said, 'It is the palm.'",
            "bn": "ইবন কাসীর এ আয়াতের আলোচনায় বর্ণনাটি বুখারী থেকে উদ্ধৃত করেন। সহীহ বুখারীতে (৪৬৯৮) আবদুল্লাহ ইবন উমার (রাঃ) বলেন: আমরা রাসূলুল্লাহ ﷺ-এর কাছে ছিলাম। তিনি বললেন, আমাকে এমন এক গাছের কথা বলো, যা মুসলিম মানুষের মতো, বা মুসলিম মানুষের সদৃশ। তার পাতা ঝরে না, এবং না, এবং না, এবং না। আর সে সব সময় তার ফল দেয়। ইবন উমার বলেন: আমার মনে এল, এটা খেজুর গাছ। কিন্তু দেখলাম আবু বকর ও উমার কিছু বলছেন না, তাই আমিও কথা বলা পছন্দ করলাম না। তাঁরা কিছু না বলায় রাসূলুল্লাহ ﷺ বললেন: এটা খেজুর গাছ।"
          },
          {
            "en": "Ibn 'Umar went on: When we stood up, I said to 'Umar, 'Father, by Allah, it had come to my mind that it was the palm.' He said, 'What kept you from speaking?' I said, 'I did not see you speaking, so I disliked to speak or say anything.' 'Umar said, 'That you had said it would be dearer to me than such and such.' The report is in al-Bukhari's Sahih, his own collection of what he judged sound. Its words 'it gives its fruit at every time' are the words of 14:25 itself.",
            "bn": "ইবন উমার আরও বলেন: আমরা উঠে আসার পর আমি উমারকে বললাম, আব্বা, আল্লাহর কসম, আমার মনে এসেছিল এটা খেজুর গাছ। তিনি বললেন, তাহলে বললে না কেন? আমি বললাম, আপনাদের কাউকে কথা বলতে দেখিনি, তাই কিছু বলা বা মুখ খোলা পছন্দ করিনি। উমার বললেন, তুমি যদি বলতে, তবে তা আমার কাছে অমুক অমুক জিনিসের চেয়েও প্রিয় হতো। বর্ণনাটি বুখারীর সহীহ গ্রন্থে আছে, যেখানে তিনি কেবল নিজের বিচারে সহীহ হাদীস রেখেছেন। এতে নবী ﷺ-এর মুখে সব সময় ফল দেওয়ার যে কথা, তা হুবহু ১৪:২৫ আয়াতের ভাষা।"
          },
          {
            "en": "Other routes of the same report add detail. In the wording through 'Abdullah ibn Dinar, which al-Baghawi and Ibn Kathir give, the people's thoughts went to the trees of the open country, and Ibn 'Umar felt too shy to speak. In the wording through Mujahid, which at-Tabari cites for his choice and which Ibn Kathir says both al-Bukhari and Muslim collected, the Prophet ﷺ had just been brought the pith of a palm, and Ibn 'Umar kept quiet because he was the youngest of the people there.",
            "bn": "একই বর্ণনার অন্য সূত্রগুলোতে আরও খুঁটিনাটি আছে। আবদুল্লাহ ইবন দীনারের সূত্রে, যা বাগাভী ও ইবন কাসীর এনেছেন, উপস্থিত লোকদের ভাবনা চলে গিয়েছিল খোলা প্রান্তরের নানা গাছের দিকে, আর ইবন উমার লজ্জায় চুপ ছিলেন। মুজাহিদের সূত্রে, যা তাবারী নিজের মতের পক্ষে আনেন, নবী ﷺ-এর কাছে তখন খেজুর গাছের মাথি আনা হয়েছিল। ইবন উমার চুপ ছিলেন, কারণ উপস্থিতদের মধ্যে তিনিই ছিলেন সবচেয়ে ছোট। ইবন কাসীর জানান, এ সূত্রটি বুখারী ও মুসলিম দুজনই বর্ণনা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How Long Is a Hin?",
          "bn": "হীন কত দিনের"
        },
        "p": [
          {
            "en": "Tu'ti ukulaha kulla hin: it gives its fruit at every hin. Al-Baghawi notes that in the language a hin is simply a time, then records how far apart the readings fall. Mujahid and 'Ikrima said a full year, since the palm bears once a year. Sa'id ibn Jubayr, Qatada and al-Hasan said six months, from the first showing of the fruit to its harvest, and this is also reported from Ibn 'Abbas. Some said four months. Sa'id ibn al-Musayyib said two months. Ar-Rabi' ibn Anas said every morning and evening.",
            "bn": "তু'তী উকুলাহা কুল্লা হীন: প্রতি হীনে সে তার ফল দেয়। বাগাভী বলেন, ভাষায় হীন মানে কেবল একটি সময়। তারপর তিনি দেখান, এখানে এর ব্যাখ্যা কত দূরে দূরে ছড়িয়ে আছে। মুজাহিদ ও ইকরিমার মতে পুরো এক বছর, কারণ খেজুর গাছ বছরে একবার ফল দেয়। সাঈদ ইবন জুবাইর, কাতাদা ও হাসানের মতে ৬ মাস, ফল প্রথম দেখা দেওয়া থেকে কেটে তোলা পর্যন্ত। ইবন আব্বাস (রাঃ) থেকেও এ কথা বর্ণিত। কারও মতে ৪ মাস। সাঈদ ইবনুল মুসাইয়িবের মতে দুই মাস। আর রাবী ইবন আনাসের মতে প্রতি সকাল ও সন্ধ্যা।"
          },
          {
            "en": "At-Tabari lists the same sides with their chains. From Ibn 'Abbas through Abu Zabyan comes morning and evening; from ad-Dahhak, every hour of night and day, in winter and summer; from Qatada and al-Hasan, between six months and seven. Several of the answers were given to people who had sworn an oath for a hin. 'Ikrima told 'Umar ibn 'Abd al-'Aziz that there is a hin no one can measure, citing 76:1, and a hin that can be measured, citing this verse, from one year to the next.",
            "bn": "তাবারী একই মতগুলো সনদসহ সাজান। আবু যাবইয়ানের সূত্রে ইবন আব্বাস (রাঃ) থেকে আসে সকাল ও সন্ধ্যা। দাহহাক থেকে আসে রাত-দিনের প্রতিটি ঘণ্টা, শীতে ও গ্রীষ্মে। কাতাদা ও হাসান থেকে আসে ৬ থেকে ৭ মাস। এর কয়েকটি উত্তর এসেছিল এমন লোকদের প্রশ্নে, যারা কোনো কিছু এক হীন পর্যন্ত করবে না বলে কসম খেয়েছিল। ইকরিমা উমার ইবন আবদুল আযীযকে বলেছিলেন, এক হীন আছে যা কেউ মাপতে পারে না, যেমন ৭৬:১ আয়াতে। আরেক হীন মাপা যায়, যেমন এই আয়াতে: এক বছর থেকে পরের বছর।"
          },
          {
            "en": "The commentators then choose. At-Tabari prefers morning and evening and every hour, because the fruit stands for the believer's deeds and speech, which are raised to Allah every day, not once a year, and a likeness cannot differ in meaning from what it likens. Ibn Kathir reaches the same end from the context: the believer is like a tree that always has fruit, summer or winter, night or day. Al-Qurtubi keeps a year for oaths and notes that Abu Hanifa took six months, but he also quotes an-Nahhas: the sayings are close, not contradictory.",
            "bn": "এরপর মুফাসসিররা নিজেদের মত বেছে নেন। তাবারী পছন্দ করেন সকাল-সন্ধ্যা ও প্রতিটি মুহূর্তের মত। কারণ ফলটি মুমিনের আমল ও কথার প্রতীক, আর তা আল্লাহর কাছে ওঠে প্রতিদিন, বছরে একবার নয়। আর যে জিনিসের উপমা দেওয়া হয়, উপমা অর্থে তার বিপরীত হতে পারে না। ইবন কাসীরও প্রসঙ্গ দেখে একই সিদ্ধান্তে আসেন। মুমিন এমন গাছের মতো, যাতে শীতে-গ্রীষ্মে, রাতে-দিনে সব সময় ফল থাকে। কুরতুবী কসমের মাসআলায় এক বছর ধরেন, আর জানান আবু হানীফা ধরেছেন ৬ মাস। তবে তিনি নাহহাসের কথাও আনেন: মতগুলো কাছাকাছি, পরস্পরবিরোধী নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Root, Trunk and Branch",
          "bn": "শিকড়, কাণ্ড আর শাখা"
        },
        "p": [
          {
            "en": "Bi-idhni rabbiha, by the leave of its Lord. At-Tabari glosses it as by its Lord's command; Ibn Kathir reads it as fruit that comes complete, good, abundant and pure. The Muyassar and as-Sa'di then carry the image across to faith. The tree of faith, as-Sa'di puts it, has its root firm in the believer's heart as knowledge and conviction. Its branches are good words, righteous deeds, pleasing character and fine manners, always rising to Allah, and what it yields benefits the believer and benefits others too.",
            "bn": "বি-ইযনি রাব্বিহা: তার রবের অনুমতিতে। তাবারী এর অর্থ করেন, রবের আদেশে। ইবন কাসীরের পাঠে এর মানে, ফল আসে পূর্ণ, সুন্দর, প্রচুর আর পবিত্র হয়ে। মুয়াসসার আর সা'দী এখান থেকে ছবিটা নিয়ে যান ঈমানের দিকে। সা'দী বলেন, ঈমানের গাছের শিকড় মুমিনের অন্তরে দৃঢ়ভাবে বসে থাকে জ্ঞান ও বিশ্বাস হয়ে। তার শাখা হলো উত্তম কথা, নেক আমল, পছন্দনীয় চরিত্র আর সুন্দর আদব, যা সব সময় আল্লাহর দিকে উঠতে থাকে। আর এ গাছ যা ফলায়, তাতে মুমিনের নিজের উপকার হয়, অন্যদেরও উপকার হয়।"
          },
          {
            "en": "Al-Baghawi explains why faith is likened to a tree at all. A tree is only a tree with three things, a deep root, a standing trunk and a high branch, and faith is only complete with three: assent in the heart, a word on the tongue and action with the limbs. He ties the rising branch to 35:10: to Him ascends the good word. The verse closes, and Allah strikes parables for people that they may remember. As-Sa'di sees a mercy in the method itself, since a parable brings what the mind grasps near through what the senses know.",
            "bn": "ঈমানকে গাছের সঙ্গে কেন তুলনা করা হলো, বাগাভী তা ব্যাখ্যা করেন। তিনটি জিনিস না থাকলে গাছ গাছ হয় না: গভীর শিকড়, খাড়া কাণ্ড আর উঁচু শাখা। ঈমানও তিনটি জিনিস ছাড়া পূর্ণ হয় না: অন্তরে বিশ্বাস, মুখে স্বীকৃতি আর অঙ্গপ্রত্যঙ্গে আমল। ওপরে ওঠা শাখাকে তিনি মেলান ৩৫:১০ আয়াতের সঙ্গে: তাঁর দিকেই ওঠে উত্তম কথা। আয়াত শেষ হয় এভাবে: আল্লাহ মানুষের জন্য দৃষ্টান্ত দেন, যাতে তারা উপদেশ নেয়। সা'দী এই পদ্ধতিতেই রহমত দেখেন। বুদ্ধি দিয়ে যা বুঝতে হয়, উপমা তাকে চোখে দেখা জিনিসের মাধ্যমে কাছে এনে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Uprooted, With Nowhere to Settle",
          "bn": "উপড়ানো, থিতু হওয়ার জায়গা নেই"
        },
        "p": [
          {
            "en": "The second parable answers the first. For at-Tabari and al-Baghawi the bad word is shirk, and 'Ali ibn Abi Talha's report from Ibn 'Abbas makes shirk the word and the one who commits it the tree. The Muyassar and as-Sa'di call it the word of kufr. On the tree, most named the colocynth, at-Tabari says, and Anas called it ash-shiryan. Ibn 'Abbas, through Abu Zabyan, said it is a likeness only, a tree never created on the face of the earth. Al-Baghawi and al-Qurtubi also record garlic, and kushuth, which al-Qurtubi describes as having no leaves and no roots in the ground.",
            "bn": "দ্বিতীয় উপমাটি প্রথমটির জবাব। তাবারী ও বাগাভীর মতে মন্দ কালিমা হলো শিরক। ইবন আব্বাস (রাঃ) থেকে আলী ইবন আবী তালহার বর্ণনায় শিরক হলো কালিমা, আর শিরককারী হলো গাছ। মুয়াসসার ও সা'দী একে বলেন কুফরের কালিমা। গাছটি কোনটি? তাবারী বলেন, অধিকাংশের মতে মাকাল, আরবিতে হানযাল। আনাস (রাঃ) একে বলেছেন শারইয়ান। আবু যাবইয়ানের সূত্রে ইবন আব্বাস বলেছেন, এটি কেবলই একটি উপমা। এমন কোনো গাছ পৃথিবীর বুকে সৃষ্টিই করা হয়নি। বাগাভী ও কুরতুবী রসুন আর কুশূসের কথাও উল্লেখ করেন। কুরতুবীর বর্ণনায় কুশূসের পাতা নেই, মাটিতে শিকড়ও নেই।"
          },
          {
            "en": "A report from Anas raises both trees to the Prophet ﷺ: brought a dish of dates, he recited the two parables and said the good tree is the palm and the bad tree the colocynth. At-Tirmidhi records it (3119), then judges the version that stops at Anas more sound, adding that only Hammad ibn Salama raised it to the Prophet; al-Qurtubi passes on the same verdict. At-Tabari therefore keeps the question open: if the report is sound, no other view may be held, and if not, it is a tree with the description Allah gave it.",
            "bn": "আনাস (রাঃ)-এর একটি বর্ণনা দুটি গাছের পরিচয়ই নবী ﷺ-এর কথা হিসেবে আনে। তাঁর কাছে এক থালা খেজুর আনা হলে তিনি দুই উপমার আয়াত পড়েন, আর বলেন উত্তম গাছ খেজুর গাছ, মন্দ গাছ মাকাল। তিরমিযী বর্ণনাটি এনেছেন (৩১১৯)। তারপর তিনি রায় দেন, আনাস পর্যন্ত থেমে যাওয়া সংস্করণটিই বেশি সহীহ। তিনি আরও বলেন, হাম্মাদ ইবন সালামা ছাড়া আর কেউ একে নবী ﷺ পর্যন্ত পৌঁছাননি। কুরতুবীও তিরমিযীর এই রায় তুলে দেন। তাই তাবারী প্রশ্নটি খোলা রাখেন। বর্ণনাটি সহীহ হলে অন্য কোনো মত চলবে না। আর সহীহ না হলে এটি সেই গাছ, যার গুণ আল্লাহ বর্ণনা করেছেন।"
          },
          {
            "en": "That description is the point. Ijtuththat, at-Tabari explains, means torn out entirely, and Qatada glosses it the same way. Ma laha min qarar: it has no root in the ground on which to stand. So, at-Tabari concludes, the disbeliever's kufr and his disobedience have no firmness on earth and no ascent to heaven. Qatada tells of a man of knowledge asked about the bad word, who said: I know of no resting place for it on earth, nor any ascent in heaven, except that it clings to its speaker's neck until he meets the Resurrection with it.",
            "bn": "আসল কথা ওই গুণেই। তাবারী বলেন, ইজতুসসাত মানে সমূলে উপড়ে ফেলা, আর কাতাদাও একই অর্থ করেন। মা লাহা মিন কারার: মাটিতে তার এমন কোনো শিকড় নেই, যার ওপর সে দাঁড়াতে পারে। তাবারীর সিদ্ধান্ত, কাফিরের কুফর আর তার নাফরমানির না আছে জমিনে স্থিতি, না আছে আসমানে ওঠার পথ। কাতাদা এক আলিমের কথা বলেন, যাঁকে মন্দ কালিমা সম্পর্কে জিজ্ঞেস করা হয়েছিল। তিনি বলেছিলেন: জমিনে এর কোনো ঠাঁই আমি জানি না, আসমানে ওঠার কোনো পথও না। শুধু এটুকু জানি, এটা বক্তার গলায় লেগে থাকে, যতক্ষণ না সে তা নিয়েই কিয়ামতে হাজির হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Likeness, Not a Label",
          "bn": "উপমা, কারও গায়ের তকমা নয়"
        },
        "p": [
          {
            "en": "Several commentators move from the word to the person. The Muyassar says the disbeliever has no firmness and no good in him, and Ibn Kathir that no deed of his ascends or is accepted. The verse describes what it describes, a word and the tree it is likened to, and it licenses nothing against any living person or community. As-Sa'di, who counts acts of disobedience alongside the word of kufr, turns the parable back on the reader's own tongue.",
            "bn": "কয়েকজন মুফাসসির কালিমা থেকে মানুষের কথায় যান। মুয়াসসার বলে, কাফিরের কোনো স্থিতি নেই, তার মধ্যে কোনো কল্যাণও নেই। ইবন কাসীর বলেন, তার কোনো আমল ওপরে ওঠে না, কবুলও হয় না। আয়াতটি কেবল তা-ই বর্ণনা করে যা তাতে আছে: একটি কালিমা, আর যে গাছের সঙ্গে তার তুলনা। জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কোনো অনুমতি দেয় না। সা'দী কুফরের কালিমার পাশে গুনাহকেও গোনেন। তাতে উপমাটি ফিরে আসে পাঠকের নিজের জিহ্বার দিকে।"
          },
          {
            "en": "The next verse carries the root into a harder season: in 14:27 Allah keeps firm those who believe with the firm word, in this life and in the Hereafter, and what is narrated on it belongs to that verse. Here the work is earlier and daily. Ibn Kathir's believer is one for whom a righteous deed is raised through the hours of the night and the ends of the day. And 'Umar's words to his son show how much a true answer, held back out of shyness, would have been worth to him.",
            "bn": "পরের আয়াত শিকড়টিকে নিয়ে যায় আরও কঠিন এক ঋতুতে। ১৪:২৭ আয়াতে আল্লাহ মুমিনদের সুদৃঢ় বাণী দিয়ে অবিচল রাখেন, দুনিয়ার জীবনেও, আখিরাতেও। সে বিষয়ে যা বর্ণিত, তা ওই আয়াতেরই প্রাপ্য। এখানকার কাজ তার আগের, আর প্রতিদিনের। ইবন কাসীরের পাঠে মুমিন সেই মানুষ, রাতের প্রহরে আর দিনের দুই প্রান্তে যার কোনো না কোনো নেক আমল ওপরে উঠতে থাকে। আর ছেলের প্রতি উমার (রাঃ)-এর কথাই বলে দেয়, লজ্জায় চেপে রাখা একটি সত্য উত্তর তাঁর কাছে কত দামি হতো।"
          }
        ]
      }
    ]
  },
  "14:34": {
    "sections": [
      {
        "h": {
          "en": "The Sum of a List of Gifts",
          "bn": "নিয়ামতের তালিকা আর তার যোগফল"
        },
        "p": [
          {
            "en": "This verse concludes an inventory. In 14:32-33 Allah recounts what He has set to work for mankind: He created the heavens and the earth, sent down water from the sky and brought out fruits as provision, subjected the ships to run upon the sea by His command, the rivers, the sun and the moon persistent in their courses, and the night and the day. Each item is something no human hand built and no human bill ever paid for.",
            "bn": "এ আয়াত একটি তালিকার শেষ টানে। ১৪:৩২-৩৩ আয়াতে আল্লাহ গুনিয়ে বলেন, মানুষের কাজে তিনি কী কী লাগিয়ে দিয়েছেন: আসমান ও যমীন সৃষ্টি করেছেন, আকাশ থেকে পানি নামিয়ে তা দিয়ে রিযিক হিসেবে ফলমূল বের করেছেন, নিজের হুকুমে সাগরে চলার জন্য নৌযানকে বশ করে দিয়েছেন; বশ করে দিয়েছেন নদীগুলোকে, নিজ নিজ পথে অবিরাম চলা সূর্য ও চাঁদকে, আর রাত ও দিনকে। এর একটিও কোনো মানুষের হাতে গড়া নয়, আর কোনোটির দাম কোনো মানুষ কোনোদিন শোধ করেনি।"
          },
          {
            "en": "Then comes the summary: wa atakum min kulli ma sa'altumuh, and He gave you from all that you asked of Him. The verb atakum is in the past tense — the giving has already happened, before any thanks were considered. Reading the list and the summary together makes the verse's method plain: it does not argue for gratitude in the abstract, it walks the reader through the warehouse first and then asks them to consider the ledger.",
            "bn": "তারপর আসে সারকথা: ওয়া আতাকুম মিন কুল্লি মা সাআলতুমূহ, আর তোমরা তাঁর কাছে যা চেয়েছ, তার সবকিছু থেকেই তিনি তোমাদের দিয়েছেন। 'আতাকুম' ক্রিয়াটি অতীতকালে: দেওয়া হয়ে গেছে আগেই, শুকরিয়ার কথা ভাবারও আগে। তালিকা আর সারকথা একসঙ্গে পড়লে আয়াতের ধরনটা পরিষ্কার হয়। আয়াত শুকরিয়ার পক্ষে কোনো তাত্ত্বিক যুক্তি দেয় না। আগে পাঠককে গোটা ভাণ্ডারটা ঘুরিয়ে দেখায়, তারপর বলে, এবার হিসাবের খাতাটা ভেবে দেখুন।"
          }
        ]
      },
      {
        "h": {
          "en": "What You Asked and What You Did Not",
          "bn": "যা চেয়েছেন আর যা চাননি"
        },
        "p": [
          {
            "en": "The commentators pause on min kulli ma sa'altumuh, from all that you asked of Him. Taken one way, it means every category of thing humans have requested has been drawn upon for you. But they also point out that most of what sustains us was never requested at all. No one asked for lungs before drawing a first breath; no one petitioned for the sun. Allah gave in answer to asking, long before asking, and gave what we would never have known to ask.",
            "bn": "'মিন কুল্লি মা সাআলতুমূহ', তোমরা তাঁর কাছে যা চেয়েছ তার সবকিছু থেকে: এই কথাটায় এসে মুফাসসিরগণ থামেন। এক অর্থে এর মানে, মানুষ যত রকমের জিনিস চেয়েছে, তার প্রতিটি থেকেই তোমাদের দেওয়া হয়েছে। কিন্তু তাঁরা এটাও দেখান যে, যা কিছু আমাদের বাঁচিয়ে রাখে, তার বেশিরভাগ কেউ কোনোদিন চায়ইনি। প্রথম নিঃশ্বাস নেওয়ার আগে কেউ ফুসফুস চায়নি; সূর্যের জন্য কেউ দরখাস্ত করেনি। আল্লাহ চাওয়ার জবাবে দিয়েছেন, চাওয়ার অনেক আগেও দিয়েছেন, আর এমন জিনিসও দিয়েছেন, যা চাইতে হয় বলে আমরা জানতামই না।"
          },
          {
            "en": "That widening changes how a person prays. If the record shows that the unasked gifts outnumber the asked ones, then asking is not the engine of provision — generosity is. We do not extract blessings from a reluctant giver by the force of our requests; we name a few needs to a Lord who has been supplying thousands of unnamed ones all along. Du'a remains commanded and beloved, riding on a giving that never waited for it.",
            "bn": "অর্থের এই বিস্তার মানুষের দোয়ার ধরন বদলে দেয়। হিসাব যদি বলে, না-চাওয়া দান চাওয়া দানের চেয়ে বেশি, তাহলে রিযিক আসে চাওয়ার জোরে নয়, আসে দাতার দানশীলতায়। আমরা অনুরোধের চাপে কোনো অনিচ্ছুক দাতার হাত থেকে নিয়ামত ছিনিয়ে আনি না। আমরা তো এমন এক রবের কাছে গুটিকয় প্রয়োজনের কথা বলি, যিনি নাম-না-জানা হাজারো প্রয়োজন এতকাল ধরে মিটিয়ে আসছেন। তবু দোয়া আল্লাহর হুকুম, তাঁর প্রিয় আমল। দোয়া চলে এমন এক দানের ওপর ভর করে, যে দান কখনো দোয়ার অপেক্ষায় বসে থাকেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Count That Cannot Finish",
          "bn": "যে গণনা শেষ হয় না"
        },
        "p": [
          {
            "en": "Then the famous clause: wa in ta'uddu ni'mata Allahi la tuhsuha, and if you should count the favour of Allah, you could not enumerate it. The verb tuhsuha comes from ihsa', which means exact, exhaustive enumeration — not a rough tally but a complete audit. And the thing being counted is named in the singular, ni'mah, favour: the commentators observe that even a single blessing resists the audit, because each one unfolds into others.",
            "bn": "তারপর আসে বিখ্যাত বাক্যটি: ওয়া ইন তাউদ্দূ নি'মাতাল্লাহি লা তুহসূহা, আর তোমরা যদি আল্লাহর নিয়ামত গুনতে চাও, গুনে শেষ করতে পারবে না। 'তুহসূহা' এসেছে 'ইহসা' থেকে। ইহসা মানে আন্দাজে মোটামুটি গোনা নয়, একটা একটা করে নিখুঁত, পুরো হিসাব করা। আর যা গোনা হচ্ছে, তার নাম এসেছে একবচনে: নি'মাহ, নিয়ামত। মুফাসসিরগণ বলেন, একটিমাত্র নিয়ামতও পুরো হিসাবে ধরা দেয় না, কারণ প্রতিটি নিয়ামত খুললেই ভেতর থেকে আরও নিয়ামত বেরিয়ে আসে।"
          },
          {
            "en": "Test the claim on anything small. Count what one working eye involves: the tear film, the lens, the nerve, the brain's processing, the light itself, and the safety of every day on which nothing struck it. Each item on that list opens its own list. The verse is not exaggerating for effect; it is stating an arithmetic fact about a sum with no bottom. The honest accountant closes the books and converts the audit into thanks.",
            "bn": "যেকোনো ছোট জিনিস দিয়ে কথাটা যাচাই করে দেখুন। একটি সুস্থ চোখের পেছনে কী কী আছে, গুনে দেখুন: চোখের পানির পাতলা আস্তরণ, লেন্স, স্নায়ু, মস্তিষ্কের কাজ, খোদ আলো, আর সেই প্রতিটি দিনের নিরাপত্তা, যেদিন চোখে কোনো আঘাত লাগেনি। এই তালিকার প্রতিটি জিনিস খুললে আবার নতুন তালিকা। আয়াত কথাটা বাড়িয়ে বলছে না। এ এক সোজা হিসাবের সত্য: এমন এক যোগফল, যার কোনো তল নেই। তাই সৎ হিসাবরক্ষক খাতা বন্ধ করেন, আর পুরো হিসাবটাকে শুকরিয়ায় বদলে নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Heavy Words at the End",
          "bn": "শেষে দুটি ভারী শব্দ"
        },
        "p": [
          {
            "en": "The verse closes with a diagnosis: inna al-insana la-zalumun kaffar, indeed mankind is persistently unjust, deeply ungrateful. Both words are intensive forms in Arabic — zalum and kaffar are patterns that signal repetition and excess, not an occasional slip. The injustice named here, the commentators explain, includes putting blessings to wrong use and crediting them to the wrong source; the ingratitude is the settled habit of noticing what is missing while consuming what is present.",
            "bn": "আয়াত শেষ হয় মানুষের রোগটা ধরিয়ে দিয়ে: ইন্নাল-ইনসানা লা-যালূমুন কাফফার, নিশ্চয়ই মানুষ বড়ই জালিম, ভীষণ অকৃতজ্ঞ। দুটি শব্দই আরবিতে আধিক্য বোঝানোর রূপ। যালূম আর কাফফার এমন গঠন, যা বারবার করা আর মাত্রা ছাড়ানো বোঝায়; মাঝেমধ্যে একটু-আধটু ভুল নয়। মুফাসসিরগণ ব্যাখ্যা করেন, এখানে যে জুলুমের কথা, তার মধ্যে আছে নিয়ামতকে ভুল কাজে লাগানো আর ভুল উৎসের নামে চালিয়ে দেওয়া। আর অকৃতজ্ঞতা হলো সেই পাকা অভ্যাস: যা আছে তা ভোগ করতে করতেও চোখে পড়ে শুধু যা নেই।"
          },
          {
            "en": "The Quran contains a sister clause. In 16:18 the same words appear — if you count the favour of Allah, you cannot enumerate it — but the ending differs: there the verse concludes that Allah is Forgiving, Merciful. The commentators set the two endings side by side. This verse names what we are; that verse names what He is. Faced with an uncountable debt held by an uncounting debtor, His response is not collection but forgiveness — which is itself one more favour that escaped our audit.",
            "bn": "কুরআনে এ বাক্যের একটি জোড়া আছে। ১৬:১৮ আয়াতে হুবহু একই কথা আসে: আল্লাহর নিয়ামত গুনতে চাইলে তোমরা গুনে শেষ করতে পারবে না। কিন্তু শেষটা আলাদা। সেখানে আয়াত শেষ হয় এই কথায়: আল্লাহ ক্ষমাশীল, পরম দয়ালু। মুফাসসিরগণ দুটি শেষকে পাশাপাশি রাখেন। এ আয়াত বলে আমরা কেমন; ও আয়াত বলে তিনি কেমন। দেনাদার গুনতেই পারে না, অথচ তার ঘাড়ে অগণিত ঋণ। তার জবাবে আল্লাহ পাওনা আদায় করেন না, মাফ করে দেন। আর এই মাফও তো আরেকটি নিয়ামত, যা আমাদের হিসাব থেকে বাদ পড়ে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Gratitude Multiplies the Gift",
          "bn": "কৃতজ্ঞতা দানকে বাড়িয়ে দেয়"
        },
        "p": [
          {
            "en": "The same surah has already stated what gratitude does. In 14:7 your Lord proclaimed: if you are grateful, I will surely increase you, but if you deny, indeed My punishment is severe. Set beside this verse, the two form a hinge. The favours cannot be counted, and mankind tends to thanklessness — yet the door out of that condition is not to finish the count, which is impossible, but to thank, which multiplies the very thing being counted.",
            "bn": "শুকরিয়া কী করে, সে কথা এই সূরা আগেই বলে দিয়েছে। ১৪:৭ আয়াতে তোমাদের রব ঘোষণা করেছেন: তোমরা কৃতজ্ঞ হলে আমি অবশ্যই তোমাদের আরও বাড়িয়ে দেব, আর যদি অস্বীকার করো, তবে নিশ্চয়ই আমার শাস্তি বড় কঠিন। এ আয়াতের পাশে রাখলে দুটি আয়াত দরজার কবজার মতো একে অন্যের সঙ্গে জুড়ে যায়। নিয়ামত গোনা যায় না, আর মানুষের ঝোঁক অকৃতজ্ঞতার দিকে। তবু এ অবস্থা থেকে বেরোনোর দরজা গোনা শেষ করা নয়, সেটা তো অসম্ভব। দরজা হলো শুকরিয়া, আর শুকরিয়া যা গোনা হচ্ছে সেটাকেই বহুগুণ বাড়িয়ে দেয়।"
          },
          {
            "en": "The Prophet ﷺ modelled what thanking an uncountable Giver looks like. Al-Bukhari narrates from al-Mughirah ibn Shu'bah (RA) that the Prophet ﷺ would stand in night prayer until his feet swelled, and when asked why he did this when his past and future sins had been forgiven, he answered: should I not be a grateful servant? Gratitude, in that answer, is not payment towards a balance. It is a relationship that grows warmer the more clearly the debt is seen.",
            "bn": "অগণিত নিয়ামতের দাতাকে কীভাবে শুকরিয়া জানাতে হয়, নবী ﷺ নিজে তা করে দেখিয়েছেন। বুখারী মুগীরা ইবনে শু'বা (রাঃ) থেকে বর্ণনা করেন: নবী ﷺ রাতের নামাজে এত দীর্ঘ সময় দাঁড়িয়ে থাকতেন যে তাঁর পা ফুলে যেত। কেউ জিজ্ঞেস করল, আপনার আগের-পরের সব গুনাহ তো মাফ হয়ে গেছে, তবু কেন এমন করেন? তিনি বললেন: আমি কি কৃতজ্ঞ বান্দা হব না? এই উত্তরে শুকরিয়া কোনো দেনা শোধের কিস্তি নয়। এ এক সম্পর্ক: ঋণটা যত পরিষ্কার চোখে পড়ে, সম্পর্ক তত উষ্ণ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Begin Counting Anyway",
          "bn": "তবু গোনা শুরু করুন"
        },
        "p": [
          {
            "en": "The verse says the count cannot be finished; it never says the count should not be started. The classical teachers of the heart prescribed exactly this exercise, because the attempt itself is the cure. List ten blessings tonight — specific ones, with names and dates — and the listing will run into the same wall the verse describes: every item splits into more. A person who hits that wall regularly finds complaint harder to sustain, because the inventory keeps interrupting it.",
            "bn": "আয়াত বলে, গোনা শেষ হবে না; কিন্তু কোথাও বলে না যে গোনা শুরুই করা যাবে না। আত্মশুদ্ধির পুরোনো উস্তাদরা ঠিক এই অনুশীলনটাই করতে বলতেন, কারণ চেষ্টাটাই ওষুধ। আজ রাতে দশটি নিয়ামতের তালিকা করুন। গড়পড়তা কথা নয়, নির্দিষ্ট করে, নাম আর তারিখসহ। দেখবেন, তালিকাটা আয়াতে বলা সেই দেয়ালেই গিয়ে ঠেকছে: প্রতিটি জিনিস ভাঙলে আরও জিনিস বেরোচ্ছে। যে নিয়মিত এই দেয়ালে ঠেকে, তার পক্ষে অভিযোগ ধরে রাখা কঠিন হয়ে যায়, কারণ নিয়ামতের হিসাব বারবার মাঝখানে এসে পড়ে।"
          },
          {
            "en": "Gratitude then wants three outlets, as the scholars describe it: the heart's acknowledgement that every gift traces back to Allah, the tongue's praise, and the limbs' use of each blessing in ways its Giver approves. Eyes given free are thanked by what they read and refuse to read; wealth given unasked is thanked at the point of spending. The verse's closing words about injustice and ingratitude stop being our description the moment the counting, the thanking and the using begin.",
            "bn": "আলিমগণ বলেন, এরপর শুকরিয়া প্রকাশের তিনটি পথ খোঁজে। অন্তর মেনে নেয় যে প্রতিটি দান আল্লাহর কাছ থেকেই এসেছে; জিহ্বা তাঁর প্রশংসা করে; আর অঙ্গ-প্রত্যঙ্গ প্রতিটি নিয়ামতকে এমনভাবে কাজে লাগায়, যা দাতা পছন্দ করেন। বিনা দামে পাওয়া চোখের শুকরিয়া হয় সে কী পড়ে আর কী পড়তে রাজি হয় না, তা দিয়ে। না চাইতে পাওয়া সম্পদের শুকরিয়া হয় খরচ করার মুহূর্তে। গোনা, শুকরিয়া আর সঠিক ব্যবহার শুরু হওয়ামাত্র আয়াতের শেষের জুলুম আর অকৃতজ্ঞতার কথা আর আমাদের পরিচয় থাকে না।"
          }
        ]
      }
    ]
  },
  "14:40-41": {
    "sections": [
      {
        "h": {
          "en": "The Close of a Long Prayer",
          "bn": "দীর্ঘ এক দোয়ার শেষ কথা"
        },
        "p": [
          {
            "en": "These two verses end a passage of Ibrahim's (AS) speech that opens at 14:35, where he asks that this city be made secure and that he and his sons be kept from worshipping idols. Along the way, 14:37 has him settling some of his offspring in an uncultivated valley by the Sacred House liyuqimu as-salah, so that they would establish prayer.",
            "bn": "ইবরাহীম (আঃ)-এর যে দীর্ঘ কথামালা ১৪:৩৫ থেকে শুরু, এই দুটি আয়াতে তা শেষ হয়। শুরুতেই তিনি চান, এই নগরীকে নিরাপদ করা হোক, আর তিনি ও তাঁর সন্তানেরা যেন মূর্তিপূজা থেকে রক্ষা পান। মাঝে ১৪:৩৭-এ দেখা যায়, তিনি তাঁর বংশধরদের একাংশকে সম্মানিত ঘরের পাশে এক অনাবাদি উপত্যকায় রেখে আসছেন, লিইউকীমুস সালাহ, যাতে তারা নামাজ কায়েম করে।"
          },
          {
            "en": "Just before the closing petitions comes praise rather than a request. In 14:39 he says: praise to Allah, who granted me Isma'il and Ishaq in old age; indeed my Lord is the Hearer of supplication. So the two verses that follow are spoken by a man who has already been answered once, at an age when the answer looked impossible. He does not stop asking after the gift arrives.",
            "bn": "শেষ আবেদনগুলোর ঠিক আগে আসে চাওয়া নয়, প্রশংসা। 14:39-এ তিনি বলেন: সমস্ত প্রশংসা আল্লাহর, যিনি বার্ধক্যে আমাকে ইসমাঈল ও ইসহাক দান করেছেন; নিশ্চয় আমার প্রতিপালক দোয়া শ্রবণকারী। কাজেই পরের দুটি আয়াত সেই ব্যক্তির মুখের কথা, যাঁর একটি দোয়া ইতিমধ্যেই কবুল হয়েছে — এমন এক বয়সে, যখন কবুল হওয়াটাকেই অসম্ভব মনে হচ্ছিল। দান পাওয়ার পরও তিনি চাওয়া থামান না।"
          }
        ]
      },
      {
        "h": {
          "en": "Make Me One Who Establishes Prayer",
          "bn": "আমাকে নামাজ কায়েমকারী বানিয়ে দিন"
        },
        "p": [
          {
            "en": "Rabbi ij'alni muqima as-salah. He does not ask to pray; he asks to be made muqim as-salah, an active participle naming a settled kind of person rather than a single act. The difference is the difference between managing a prayer today and being someone through whom prayer keeps standing. He is asking for an identity, and asking for it from the only One who can install it.",
            "bn": "রাব্বিজ'আলনী মুকীমাস সালাহ। তিনি শুধু নামাজ পড়ার সুযোগ চাইছেন না; চাইছেন, তাঁকে যেন মুকীমুস সালাহ বানানো হয়। শব্দটি কর্তাবাচক রূপ: একবারের কোনো কাজ বোঝায় না, বোঝায় স্থায়ী এক ধরনের মানুষকে। পার্থক্যটা এমন: আজ কোনোমতে এক ওয়াক্ত নামাজ সেরে নেওয়া এক জিনিস, আর এমন মানুষ হয়ে যাওয়া, যাঁর হাত ধরে নামাজ কায়েম থাকে, আরেক জিনিস। তিনি চাইছেন একটি পরিচয়, আর চাইছেন একমাত্র তাঁর কাছেই, যিনি সেই পরিচয় গেঁথে দিতে পারেন।"
          },
          {
            "en": "It is worth sitting with the fact that a prophet asks this at the end of his life. He had already left his people, faced a fire, migrated, and settled his family beside the House for the sake of prayer. None of that is offered here as a qualification. The request assumes that steadiness in worship is granted and re-granted, never banked, however long a record of it a person has.",
            "bn": "একটু থেমে ভাবার মতো কথা: জীবনের শেষ প্রান্তে এসে একজন নবী এটাই চাইছেন। ততদিনে তিনি নিজের কওম ছেড়ে এসেছেন, আগুনের মুখোমুখি হয়েছেন, হিজরত করেছেন, আর নামাজের জন্যই পরিবারকে ওই ঘরের পাশে রেখে এসেছেন। অথচ এখানে তিনি এর কোনোটিকেই নিজের যোগ্যতা হিসেবে তুলে ধরেন না। দোয়াটির ভেতরেই এই বোধ আছে যে, ইবাদতে অবিচল থাকা আল্লাহ বারবার নতুন করে দান করেন; একে কখনো জমিয়ে রাখা যায় না, কারও অতীত আমলের খাতা যত লম্বাই হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "And From My Descendants",
          "bn": "আর আমার বংশধরদের থেকেও"
        },
        "p": [
          {
            "en": "The next words are wa min dhurriyyati, and from my descendants. The preposition min introduces a portion, which is why the app's English renders it as many from my descendants rather than all of them. Ibrahim (AS) had been taught the reason for that caution directly. In 2:124 he was made a leader for mankind, asked and of my descendants, and was answered: My covenant does not include the wrongdoers.",
            "bn": "পরের কথাগুলো হলো ওয়া মিন যুররিয়্যাতী (আর আমার বংশধরদের থেকেও)। 'মিন' অব্যয়টি একটি অংশ বোঝায়, তাই অ্যাপের ইংরেজি অনুবাদে এটি এসেছে 'আমার বংশধরদের মধ্য হতে অনেককে', সবাইকে নয়। এই সতর্কতার কারণ ইবরাহীম (আঃ)-কে সরাসরিই শেখানো হয়েছিল। 2:124-এ তাঁকে মানুষের জন্য নেতা করা হয়, তিনি জিজ্ঞেস করেন 'আর আমার বংশধরদের থেকেও?', আর উত্তর আসে: আমার অঙ্গীকার জালিমদের নাগাল পায় না।"
          },
          {
            "en": "So the request is shaped by what he already knew. He does not claim his line; he asks for a portion of it, and for the one thing he most wants continued. The same instinct appears at 2:128, where he and Isma'il (AS) ask that a submitting community be raised from their offspring. A father's prayer here is not for comfort but for worship.",
            "bn": "তাই আগে থেকে যা জানতেন, সে অনুযায়ীই তিনি দোয়াটি সাজিয়েছেন। পুরো বংশের ওপর দাবি তোলেন না; চান তার একটি অংশ, আর চান সেই একটি জিনিস, যা তিনি সবচেয়ে বেশি টিকে থাকতে দেখতে চান। একই টান দেখা যায় ২:১২৮-এ, যেখানে তিনি ও ইসমাঈল (আঃ) চান, তাঁদের বংশ থেকে যেন আল্লাহর অনুগত এক উম্মত গড়ে ওঠে। এখানে এক বাবার দোয়া আরাম-আয়েশের জন্য নয়, ইবাদতের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Accept My Supplication",
          "bn": "আমার দোয়া কবুল করুন"
        },
        "p": [
          {
            "en": "Then the address shifts. Up to this point he has said rabbi, my Lord; now he says rabbana, our Lord, and adds wa taqabbal du'a, and accept my supplication. That clause appears nowhere else in the Quran. Having asked for things, he asks that the asking itself be received — a petition about petitions, placed last so that everything before it is covered by it.",
            "bn": "এরপর সম্বোধন বদলে যায়। এতক্ষণ তিনি বলছিলেন রাব্বি, হে আমার রব; এখন বলেন রাব্বানা, হে আমাদের রব। সঙ্গে যোগ করেন ওয়া তাকাব্বাল দুআ, আর আমার দোয়া কবুল করুন। এই বাক্যটি কুরআনে আর কোথাও নেই। এতগুলো জিনিস চাওয়ার পর তিনি চান, চাওয়াটাই যেন কবুল হয়। এ যেন দোয়ার জন্য দোয়া, আর সেটি রাখা হয়েছে সবার শেষে, যাতে আগের সব চাওয়া এর আওতায় এসে যায়।"
          },
          {
            "en": "Across these two verses there are three imperatives: make me, and accept, and forgive. That is a small number for a prayer that reaches so far, and the smallness is instructive. Ibrahim (AS) does not list circumstances or name outcomes. He asks to be made a certain kind of servant, asks that the asking be received, and asks for pardon — and stops.",
            "bn": "এই দুই আয়াতে আদেশসূচক ক্রিয়া মাত্র তিনটি: আমাকে বানিয়ে দিন, কবুল করুন, আর ক্ষমা করুন। যে দোয়া এত দূর পর্যন্ত ছড়িয়ে যায়, তার জন্য সংখ্যাটা খুবই কম, আর এই কম হওয়াটাই শিক্ষা। ইবরাহীম (আঃ) পরিস্থিতির ফিরিস্তি দেন না, কী ফল চান তা-ও নাম ধরে বলেন না। তিনি চান তাঁকে যেন বিশেষ এক ধরনের বান্দা বানানো হয়, চান তাঁর চাওয়া যেন কবুল হয়, আর চান মাফ। ব্যস, এখানেই থামেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Me, My Parents, the Believers",
          "bn": "আমি, আমার পিতামাতা, মুমিনগণ"
        },
        "p": [
          {
            "en": "In 14:41 the circle widens in one breath: forgive me, and my parents, and the believers. The order is worth noticing. He begins with himself, which is the honest place to begin, moves to the two people he owes most, and ends with everyone who shares his faith, most of whom had not yet been born when he said it.",
            "bn": "১৪:৪১-এ এক নিঃশ্বাসে বৃত্তটা বড় হয়ে যায়: আমাকে ক্ষমা করুন, আমার পিতামাতাকে, আর মুমিনদের। ক্রমটা খেয়াল করার মতো। তিনি শুরু করেন নিজেকে দিয়ে, আর সৎভাবে শুরু করতে হলে সেখান থেকেই করতে হয়। তারপর আসেন সেই দুজনের কথায়, যাঁদের কাছে তাঁর ঋণ সবচেয়ে বেশি। শেষ করেন তাঁর ঈমানের সব শরিককে দিয়ে, যাঁদের বেশিরভাগ তখনো জন্মই নেননি।"
          },
          {
            "en": "The mention of his parents raises a question the Quran itself answers. 9:114 states that Ibrahim's (AS) seeking forgiveness for his father was only because of a promise he had made him, and that when it became clear to him that his father was an enemy to Allah, he disassociated from him. 60:4 then marks that one saying as the sole exception in a pattern otherwise given to us to follow.",
            "bn": "পিতামাতার উল্লেখ একটি প্রশ্ন তোলে, যার উত্তর কুরআন নিজেই দেয়। 9:114 বলে, ইবরাহীম (আঃ)-এর পিতার জন্য ক্ষমা প্রার্থনা কেবল সেই প্রতিশ্রুতির কারণেই ছিল যা তিনি তাঁকে দিয়েছিলেন; আর যখন তাঁর কাছে স্পষ্ট হলো যে তাঁর পিতা আল্লাহর শত্রু, তখন তিনি তাঁর থেকে সম্পর্ক ছিন্ন করেন। এরপর 60:4 সেই একটি কথাকেই ব্যতিক্রম হিসেবে চিহ্নিত করে — বাকি আদর্শটুকু আমাদের অনুসরণের জন্যই দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day the Account Stands",
          "bn": "যেদিন হিসাব কায়েম হবে"
        },
        "p": [
          {
            "en": "The last words fix a time: yawma yaqumu al-hisab, the Day the account is established. The verb is the same root used for standing something upright, the root behind muqim as-salah at the start of 14:40. Prayer is what he asks to have standing now; the reckoning is what will be made to stand then. The prayer opens and closes on the same image.",
            "bn": "শেষ কথাগুলো একটি সময় বেঁধে দেয়: ইয়াওমা ইয়াকূমুল হিসাব, যেদিন হিসাব কায়েম হবে। এ ক্রিয়ার মূল ধাতু সেটাই, যা দিয়ে কোনো কিছু সোজা করে দাঁড় করানো বোঝায়। ১৪:৪০-এর শুরুতে 'মুকীমুস সালাহ' শব্দের পেছনেও এই ধাতু। নামাজকে তিনি এখন দাঁড় করিয়ে রাখতে চান; আর হিসাবকে সেদিন দাঁড় করানো হবে। দোয়াটি একই ছবি দিয়ে শুরু হয়, একই ছবিতে শেষ হয়।"
          },
          {
            "en": "Lived, the passage gives a shape to du'a that is easy to copy and hard to exhaust. Ask to be made a person of prayer rather than for a good week of it; name your children in the same sentence; carry your parents in it; then widen it to believers you will never meet. Ibrahim (AS) asked for continuity, and the surah records the words he used.",
            "bn": "জীবনে নামালে এ অংশটি দোয়ার এমন একটি ছাঁচ দেয়, যা অনুসরণ করা সহজ, অথচ কখনো ফুরোয় না। ভালো একটা সপ্তাহের নামাজ নয়, নামাজি মানুষ হওয়াটাই চান। একই বাক্যে সন্তানদের নাম নিন; পিতামাতাকেও সেই দোয়ায় রাখুন; তারপর দোয়াটা ছড়িয়ে দিন সেই মুমিনদের পর্যন্ত, যাঁদের সঙ্গে কোনোদিন আপনার দেখা হবে না। ইবরাহীম (আঃ) ধারাবাহিকতা চেয়েছিলেন, আর সূরাটি তাঁর বলা শব্দগুলোই লিখে রেখেছে।"
          }
        ]
      }
    ]
  },
  "14:49": {
    "sections": [
      {
        "h": {
          "en": "Six Words on a Changed Earth",
          "bn": "বদলে যাওয়া পৃথিবীতে ছয় শব্দ"
        },
        "p": [
          {
            "en": "Wa-tara al-mujrimina yawma'idhin muqarranina fi al-asfad: and you will see the criminals that Day bound together in fetters. In Arabic the verse is six words long, and it does not stand alone. It opens with and, which joins it to the verse before, where the earth is changed into another earth, and the heavens too, and all come out before Allah, the One, the Prevailing. That Day, yawma'idhin, points back to the Day just named, and al-Qurtubi glosses it simply as the Day of Resurrection.",
            "bn": "ওয়া তারাল মুজরিমীনা ইয়াওমাইযিন মুকাররানীনা ফিল আসফাদ: আর সেদিন তুমি অপরাধীদের দেখবে শিকলে একসঙ্গে বাঁধা। আরবিতে আয়াতটি মাত্র ছয়টি শব্দের, আর এটি একা দাঁড়িয়ে নেই। শুরুর একটি ছোট্ট শব্দ, 'ওয়া' (আর), একে আগের আয়াতের সঙ্গে জুড়ে দেয়। সেখানে পৃথিবী বদলে অন্য পৃথিবী হয়ে যায়, আসমানগুলোও বদলে যায়, আর সবাই বেরিয়ে আসে এক ও প্রবল পরাক্রান্ত আল্লাহর সামনে। 'ইয়াওমাইযিন', সেদিন, ইঙ্গিত করে সদ্য উল্লেখ করা সেই দিনের দিকে। কুরতুবী সোজা কথায় বলেন, এর মানে কিয়ামতের দিন।"
          },
          {
            "en": "This article keeps to the six words and says so whenever it borrows. Three things come from the neighbouring verses and serve here only as setting. From 14:48, the changed earth. From 14:50, the garments of pitch and the Fire covering their faces. From 14:51, the reason given for the whole scene: that Allah may repay every soul for what it earned. At-Tabari's text consulted for this verse is in fact his comment on 14:48. He lists reports that the new earth will be silver, or fire, or bread, calls each possible, and says no report obliges acceptance, so only what the plain text shows can be said.",
            "bn": "এ লেখা ওই ছয়টি শব্দের মধ্যেই থাকবে, আর আশপাশের আয়াত থেকে কিছু নিলে তা খোলাখুলি বলবে। পাশের আয়াতগুলো থেকে তিনটি জিনিস এসেছে, শুধু পটভূমি হিসেবে। ১৪:৪৮ থেকে বদলে যাওয়া পৃথিবী। ১৪:৫০ থেকে আলকাতরার পোশাক আর আগুনে ঢাকা মুখ। ১৪:৫১ থেকে গোটা দৃশ্যের কারণ: আল্লাহ যেন প্রত্যেককে তার কামাইয়ের প্রতিদান দেন। এ আয়াতের জন্য তাবারীর যে লেখা আনা হয়েছে, তা আসলে ১৪:৪৮-এর আলোচনা। সেখানে তিনি বর্ণনা আনেন, নতুন পৃথিবী হবে রুপার, কিংবা আগুনের, কিংবা রুটির। প্রতিটিকেই তিনি সম্ভব বলেন। তবে এমন কোনো বর্ণনা নেই যা মেনে নেওয়া বাধ্যতামূলক, তাই আয়াতের স্পষ্ট কথার বাইরে কিছু বলা চলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Sees, and Who Is Seen",
          "bn": "কে দেখেন, কাদের দেখা যায়"
        },
        "p": [
          {
            "en": "Wa-tara, and you will see, is spoken to one listener. Ibn Kathir names him: you, O Muhammad, will see them that Day. The Muyassar says the same with a title, O Messenger. So the scene is first shown to the Prophet ﷺ, and through the recitation it reaches everyone who hears the verse. The Day is still ahead, yet the verse puts it as something to be seen rather than something reported. The listener is placed in front of the scene, not told about it from a distance.",
            "bn": "'ওয়া তারা', আর তুমি দেখবে, কথাটা একজন শ্রোতাকে বলা। ইবন কাসীর তাঁর নাম বলে দেন: হে মুহাম্মাদ, সেদিন তুমি তাদের দেখবে। মুয়াসসারও একই কথা বলে, তবে উপাধি দিয়ে: হে রাসূল। দৃশ্যটা তাই প্রথমে দেখানো হচ্ছে নবী ﷺ-কে, আর তিলাওয়াতের মাধ্যমে তা পৌঁছে যায় আয়াতটি যে-ই শোনে তার কাছে। দিনটি এখনো সামনে, তবু আয়াত একে খবর হিসেবে দেয় না, দেয় চোখে দেখার জিনিস হিসেবে। শ্রোতাকে দূর থেকে গল্প শোনানো হচ্ছে না, দাঁড় করানো হচ্ছে দৃশ্যের সামনে।"
          },
          {
            "en": "Who are al-mujrimun, the criminals? The commentators consulted here give three glosses. Ibn Kathir: those who committed crimes through their disbelief and their corruption, bi-kufrihim wa-fasadihim. Al-Qurtubi: they are al-mushrikun, those who ascribe partners to Allah. As-Sa'di: those whose description is crime and a great number of sins. The first two tie the word to disbelief; as-Sa'di defines it by what marks a person's conduct. None of them names an individual or a people. Each defines the word by a description, and that matters for how the verse may be used.",
            "bn": "আল-মুজরিমূন, অপরাধীরা, কারা? যে তাফসীরগুলো সামনে আছে, সেগুলোতে তিনটি ব্যাখ্যা পাওয়া যায়। ইবন কাসীর বলেন, যারা কুফর আর ফাসাদের মাধ্যমে অপরাধ করেছে, বি-কুফরিহিম ওয়া ফাসাদিহিম। কুরতুবী বলেন, এরা মুশরিক, যারা আল্লাহর সঙ্গে শরিক করে। সা'দীর ভাষায়, যাদের পরিচয়ই অপরাধ আর গুনাহের আধিক্য। প্রথম দুজন শব্দটিকে কুফরের সঙ্গে জুড়েছেন। সা'দী সংজ্ঞা দিয়েছেন মানুষের আচরণের চিহ্ন দিয়ে। তাঁদের কেউই কোনো ব্যক্তি বা জাতির নাম নেননি। প্রত্যেকে শব্দটির পরিচয় দিয়েছেন গুণ দিয়ে। আয়াতটি কীভাবে ব্যবহার করা যায়, সে প্রশ্নে এ কথাটা গুরুত্বপূর্ণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Joined to One Another",
          "bn": "একে অন্যের সঙ্গে জোড়া"
        },
        "p": [
          {
            "en": "Muqarranin means joined, and al-Baghawi notes that a rope is called qarn from the same root. The commentators agree that the criminals are bound; they do not agree on what each is bound to, and this article reports their readings without choosing among them. Al-Qurtubi's first gloss is a single word, mashdudin, tied fast, without saying to what. Al-Baghawi's first gloss is the plainest: bound tightly to one another, mashdudina ba'duhum bi-ba'd. On this reading the chain runs from one criminal to the next.",
            "bn": "মুকাররানীন মানে জোড়া লাগানো। বাগাভী জানান, একই ধাতু থেকে দড়িকে বলা হয় কারন। অপরাধীরা যে বাঁধা থাকবে, এ নিয়ে তাফসীরকারদের মধ্যে মতভেদ নেই। মতভেদ হলো, প্রত্যেকে কার সঙ্গে বাঁধা। এ লেখা তাঁদের ব্যাখ্যাগুলো তুলে ধরবে, কোনোটিকে বেছে নেবে না। কুরতুবীর প্রথম ব্যাখ্যা একটিমাত্র শব্দ: মাশদূদীন, শক্ত করে বাঁধা। কার সঙ্গে, তা তিনি বলেন না। বাগাভীর প্রথম ব্যাখ্যা সবচেয়ে সরল: একে অন্যের সঙ্গে শক্ত করে বাঁধা, মাশদূদীনা বা'দুহুম বি-বা'দ। এ পাঠে শিকল এক অপরাধী থেকে আরেক অপরাধী পর্যন্ত চলে গেছে।"
          },
          {
            "en": "Ibn Kathir sharpens it: some joined to others, the peers and those of a like kind gathered together, each sort with its sort. He supports this with other verses. Gather those who did wrong and their azwaj, their counterparts (37:22). And when the souls are paired (81:7). And when they are thrown into a narrow place of it, bound together, they will cry out there for destruction (25:13). And the devils, every builder and diver, and others bound together in fetters (38:37 and 38:38), where the very phrase muqarranina fi al-asfad occurs again.",
            "bn": "ইবন কাসীর কথাটা আরও স্পষ্ট করেন: একে অন্যের সঙ্গে জোড়া, সমগোত্রীয় আর একই ধরনের লোকদের একত্র করা হবে, প্রত্যেক শ্রেণিকে তার শ্রেণির সঙ্গে। এর সমর্থনে তিনি অন্য আয়াত আনেন। যারা যুলম করেছে তাদের আর তাদের আযওয়াজ, তাদের সমগোত্রীয়দের একত্র করো (৩৭:২২)। আর যখন আত্মাগুলোকে জোড়া বাঁধা হবে (৮১:৭)। আর যখন তাদের একসঙ্গে বেঁধে জাহান্নামের কোনো সংকীর্ণ জায়গায় ফেলা হবে, তখন তারা সেখানে ধ্বংস কামনা করবে (২৫:১৩)। আর শয়তানদের, প্রত্যেক নির্মাতা ও ডুবুরিকে, আর শিকলে একসঙ্গে বাঁধা অন্যদের (৩৮:৩৭ ও ৩৮:৩৮)। এখানে হুবহু এই বাক্যাংশটিই আবার এসেছে: মুকাররানীনা ফিল আসফাদ।"
          },
          {
            "en": "A second reading binds each one to a companion of another kind. Al-Qurtubi and al-Baghawi both give it under qila, it is said: every disbeliever is joined with a devil, in al-Qurtubi's wording in one collar, in al-Baghawi's with his own devil in a chain. Both cite the same 37:22 and explain azwajahum there as their close companions from among the devils. So one verse serves two readings: for Ibn Kathir the azwaj are their likes, for this reported view their devils. Al-Qurtubi adds a further qila: the disbelievers are gathered in fetters just as they gathered in this world upon sins.",
            "bn": "দ্বিতীয় এক ব্যাখ্যায় প্রত্যেককে বাঁধা হয় ভিন্ন জাতের এক সঙ্গীর সঙ্গে। কুরতুবী ও বাগাভী দুজনেই কথাটা আনেন 'কীলা', বলা হয়, দিয়ে: প্রত্যেক কাফিরকে জুড়ে দেওয়া হবে এক শয়তানের সঙ্গে। কুরতুবীর ভাষায় এক বেড়ির মধ্যে, বাগাভীর ভাষায় নিজের শয়তানের সঙ্গে এক শিকলে। দুজনেই একই আয়াত ৩৭:২২ আনেন, আর সেখানে 'আযওয়াজাহুম'-এর ব্যাখ্যা করেন শয়তানদের মধ্য থেকে তাদের ঘনিষ্ঠ সঙ্গী। ফলে একটি আয়াত দুই ব্যাখ্যার কাজে লাগছে। ইবন কাসীরের কাছে আযওয়াজ মানে তাদের মতো লোক, আর এই বর্ণিত মতে তাদের শয়তান। কুরতুবী আরও একটি 'কীলা' যোগ করেন: দুনিয়ায় কাফিরেরা যেমন গুনাহের উপর একজোট হয়েছিল, তেমনি তাদের শিকলে একজোট করা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hands, Necks and Chains",
          "bn": "হাত, গলা আর শিকল"
        },
        "p": [
          {
            "en": "A third reading looks at the body rather than at a partner. Al-Baghawi reports it, again under qila: their hands and feet are joined to their necks with fetters and shackles. The Muyassar takes a similar line in its own words: bound with shackles, their hands and feet joined by chains, in humiliation and disgrace. The Bengali translation shown with this verse here follows this reading too, speaking of hands and feet tied tight in chains. On this view what is joined together is a person's own limbs.",
            "bn": "তৃতীয় এক ব্যাখ্যা সঙ্গীর দিকে নয়, শরীরের দিকে তাকায়। বাগাভী এটিও আনেন 'কীলা' দিয়ে: তাদের হাত-পা বেড়ি আর শিকল দিয়ে গলার সঙ্গে জুড়ে দেওয়া হবে। মুয়াসসার নিজের ভাষায় কাছাকাছি কথা বলে: বেড়িতে বাঁধা, হাত-পা শিকলে জোড়া, অপমান আর লাঞ্ছনার মধ্যে। এখানে আয়াতের সঙ্গে যে বাংলা অনুবাদ দেখানো হয়, সেটিও এই পথে গেছে: 'শৃঙ্খলে তাদের হাত পা শক্ত করে বাঁধা'। এ ব্যাখ্যায় যা জোড়া লাগানো হয়, তা মানুষের নিজেরই হাত-পা।"
          },
          {
            "en": "As-Sa'di joins the two ideas of grouping and chaining. Every group of the criminals who shared one kind of deed, kull ahli 'amal, is chained with chains of fire, and they are led to the punishment in the most abject and hideous form. Ma'arif al-Qur'an, in a passage covering the verses around this one, says the culprits will be shackled together in chains, each group huddled separately and then shackled together. Here the bond is neither a single partner nor one's own limbs, but the others who did the same work.",
            "bn": "সা'দী দল বাঁধা আর শিকল পরানো, দুটি ধারণা একসঙ্গে আনেন। অপরাধীদের মধ্যে যারা একই ধরনের আমল করেছে, কুল্লু আহলি 'আমাল, প্রত্যেক এমন দলকে আগুনের শিকলে বাঁধা হবে। তারপর তাদের টেনে নেওয়া হবে আযাবের দিকে, সবচেয়ে লাঞ্ছিত ও বীভৎস চেহারায়। মাআরিফুল কুরআন এ আয়াতের আশপাশের আয়াতগুলো একসঙ্গে আলোচনা করতে গিয়ে বলে, অপরাধীদের শিকলে একসঙ্গে বাঁধা হবে: প্রতিটি দলকে আলাদা করে জড়ো করে তারপর একসঙ্গে বাঁধা হবে। এখানে বাঁধন কোনো একক সঙ্গীর সঙ্গে নয়, নিজের হাত-পায়ের সঙ্গেও নয়, বরং যারা একই কাজ করেছে তাদের সঙ্গে।"
          },
          {
            "en": "None of the commentators consulted here weighs one of these readings against another. Al-Qurtubi and al-Baghawi each set a plain gloss first and then list the others with it is said, and Ibn Kathir gives his own without discussing the rest. The article leaves them side by side as the sources do. Bound to one another, to a like, to a devil, hands to neck, or group by deed: each is a reading of the same six words, and the reader is not asked here to decide between them.",
            "bn": "যেসব তাফসীর সামনে আছে, তার কোনোটিই এসব ব্যাখ্যার একটিকে অন্যটির উপর প্রাধান্য দেয়নি। কুরতুবী ও বাগাভী দুজনেই আগে একটি সরল ব্যাখ্যা দিয়েছেন, তারপর বাকিগুলো 'বলা হয়' বলে পাশে রেখেছেন। ইবন কাসীর নিজের ব্যাখ্যা দিয়েছেন, অন্যগুলো নিয়ে আলোচনা করেননি। উৎসগুলো যেভাবে রেখেছে, এ লেখাও সেভাবে ব্যাখ্যাগুলো পাশাপাশি রাখছে। একে অন্যের সঙ্গে, সমগোত্রীয়ের সঙ্গে, শয়তানের সঙ্গে, হাত গলার সঙ্গে, কিংবা একই আমলের দলের সঙ্গে। সবই একই ছয়টি শব্দের ব্যাখ্যা, আর পাঠককে কোনোটি বেছে নিতে হবে, এমন দায় এখানে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Asfad, the Fetters",
          "bn": "আসফাদ: বেড়ি আর শিকল"
        },
        "p": [
          {
            "en": "Ibn Kathir defines al-asfad as al-quyud, shackles, and names those who said so: Ibn 'Abbas, Sa'id ibn Jubayr, al-A'mash and 'Abd al-Rahman ibn Zayd. The word is well known in the language, he adds, and quotes a line of the poet 'Amr ibn Kulthum in which his side came home with kings musaffadin, in fetters. Al-Qurtubi gives al-asfad a pair of meanings, al-aghlal wa-al-quyud, collars and shackles, with the singular safad.",
            "bn": "ইবন কাসীর আল-আসফাদের অর্থ বলেন আল-কুয়ূদ, বেড়ি। আর যারা এ কথা বলেছেন তাঁদের নামও দেন: ইবন আব্বাস, সাঈদ ইবন জুবাইর, আ'মাশ আর আবদুর রহমান ইবন যায়দ। তিনি যোগ করেন, ভাষায় শব্দটি সুপরিচিত। প্রমাণ হিসেবে কবি আমর ইবন কুলসূমের একটি পঙক্তি আনেন, যেখানে কবির পক্ষ রাজাদের বেড়ি পরিয়ে, মুসাফফাদীন অবস্থায়, ঘরে ফিরেছিল। কুরতুবী আল-আসফাদের দুটি অর্থ দেন: আল-আগলাল ওয়াল কুয়ূদ, গলার বেড়ি আর শিকল। এর একবচন সাফাদ।"
          },
          {
            "en": "The grammarians' notes follow. Al-Qurtubi: safadtuhu safdan means I fettered him, and to express more of it, one says saffadtuhu tasfidan, with the doubled letter. Al-Baghawi: whoever you bind with a firm binding, you have fettered him. He cites Abu 'Ubayda for the two participles, masfud and musaffad. Al-Qurtubi also quotes Hassan ibn Thabit on every captive whose safad, his collar, is tied tight. The picture the lexicon builds is not of a light restraint but of something fastened hard and meant to hold.",
            "bn": "তারপর আসে ভাষাবিদদের কথা। কুরতুবী বলেন, সাফাদতুহু সাফদান মানে আমি তাকে বেড়ি পরালাম। আর মাত্রা বাড়িয়ে বলতে চাইলে বলা হয় সাফফাদতুহু তাসফীদান, অক্ষর দ্বিগুণ করে। বাগাভী বলেন, কাউকে শক্ত বাঁধনে বাঁধলে তুমি তাকে সাফাদ করলে। এর দুটি রূপের জন্য তিনি আবু উবাইদার বরাত দেন: মাসফূদ আর মুসাফফাদ। কুরতুবী হাসসান ইবন সাবিতের একটি পঙক্তিও আনেন, যেখানে প্রত্যেক বন্দির সাফাদ, তার গলার বেড়ি, কষে বাঁধা। অভিধান যে ছবি আঁকে, তা হালকা কোনো আটকে রাখা নয়। শক্ত করে লাগানো বাঁধন, যা ধরে রাখার জন্যই তৈরি।"
          },
          {
            "en": "Then al-Qurtubi turns the word over. Asfadtuhu isfadan, he writes, means I gave to him, and some say both forms serve for fettering and for giving alike. He quotes al-Nabigha using safad for a gift, and gives the reason: the gift is called safad because it binds and makes a servant of the one who receives it. He closes with Abu al-Tayyib: I bound myself in your shelter out of love, and whoever finds kindness a fetter is fettered by it. This is a note on the word, not his reading of the verse, and the article treats it that way.",
            "bn": "এরপর কুরতুবী শব্দটিকে উল্টো দিক থেকে দেখান। তিনি লেখেন, আসফাদতুহু ইসফাদান মানে আমি তাকে দান করলাম। কেউ কেউ বলেন, দুটো রূপই বেড়ি পরানো আর দান করা, দুই অর্থেই চলে। নাবিগার একটি পঙক্তিতে সাফাদ মানে উপহার, আর কুরতুবী কারণও বলেন: উপহারকে সাফাদ বলা হয়, কারণ তা গ্রহীতাকে বেঁধে ফেলে, তাকে দাতার বান্দা বানিয়ে দেয়। শেষে তিনি আবুত তাইয়িবের পঙক্তি আনেন: ভালোবাসার টানে তোমার ছায়ায় নিজেকে বেঁধেছি, যে দয়াকে বেড়ি হিসেবে পায়, সে তাতে বাঁধা পড়ে। এটা শব্দ নিয়ে তাঁর মন্তব্য, আয়াতের ব্যাখ্যা নয়। এ লেখাও একে সেভাবেই দেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Added to the Picture",
          "bn": "ছবিতে বাড়তি রং নেই"
        },
        "p": [
          {
            "en": "None of the commentaries consulted here attaches a hadith to this verse, so none is quoted here. Ibn Kathir's abridged English commentary does cite a narration collected by Muslim, but it sits under the next verse's garments of pitch and is not attached to this one, so it is left aside. The many reports in at-Tabari's consulted text concern the changed earth of the verse before. None of them is borrowed here to fill in what this verse leaves unsaid, and the article marks such narrations as belonging elsewhere.",
            "bn": "সামনে থাকা কোনো তাফসীরই এ আয়াতের সঙ্গে কোনো হাদিস জুড়ে দেয়নি, তাই এখানে কোনো হাদিস উদ্ধৃত করা হচ্ছে না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীরে মুসলিমের সংকলিত একটি বর্ণনা আছে ঠিকই, তবে সেটি এসেছে পরের আয়াতের আলকাতরার পোশাকের আলোচনায়, এ আয়াতের সঙ্গে জোড়া নয়। তাই সেটি বাদ রাখা হলো। তাবারীর লেখায় যে অনেক বর্ণনা আছে, সেগুলো আগের আয়াতের বদলে যাওয়া পৃথিবী নিয়ে। এ আয়াত যা বলেনি, তা ভরাট করতে সেগুলোর কোনোটিই এখানে টেনে আনা হয়নি। এমন বর্ণনা অন্য আয়াতের, এ লেখা সেটা স্পষ্ট করে রাখছে।"
          },
          {
            "en": "What the verse gives is spare: a sight, a Day, people bound, and fetters. It does not give the length of the chains, their metal or their number, and neither do the commentators on this verse. Ibn Kathir's evidence is other verses; al-Qurtubi's and al-Baghawi's is the language and its poetry. Ma'arif al-Qur'an, in its passage on this group of verses, pauses on a caution: the reality of these things is known to Allah alone, and a servant's part is to live by his commitment to Him rather than to go searching for the causes of His workings.",
            "bn": "আয়াত যা দেয়, তা খুবই সংক্ষিপ্ত: একটি দৃশ্য, একটি দিন, বাঁধা মানুষ, আর শিকল। শিকল কত লম্বা, কোন ধাতুর, কতগুলো, আয়াত তা বলে না। এ আয়াতের তাফসীরকারেরাও বলেননি। ইবন কাসীরের প্রমাণ অন্য আয়াত। কুরতুবী আর বাগাভীর প্রমাণ আরবি ভাষা আর তার কবিতা। মাআরিফুল কুরআন এই আয়াতগুচ্ছের আলোচনায় এক জায়গায় থেমে সতর্ক করে: এসব বিষয়ের প্রকৃত অবস্থা কেবল আল্লাহই জানেন। বান্দার কাজ তাঁর প্রতি নিজের অঙ্গীকার নিয়ে বেঁচে থাকা, তাঁর কাজের কারণ খুঁজে বেড়ানো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "No Living Name in It",
          "bn": "এতে জীবিত কারও নাম নেই"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes the Hereafter as the text describes it: a scene on a Day that has not yet come, shown to the Prophet ﷺ and to whoever hears it. It names no living person and no community. It licenses no contempt for anyone, and it gives no one the right to point at a neighbour, a rival or a people and call them al-mujrimun. The commentators defined the word by description, not by name, and the judgement on that Day belongs to Allah alone.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি আখিরাতের বর্ণনা দেয়, ঠিক যেভাবে আয়াতের ভাষা দেয়: এমন এক দিনের দৃশ্য যা এখনো আসেনি, দেখানো হয়েছে নবী ﷺ-কে আর যে-ই আয়াতটি শোনে তাকে। এতে কোনো জীবিত মানুষের নাম নেই, কোনো সম্প্রদায়েরও নয়। কাউকে তুচ্ছ করার অনুমতি এ আয়াত দেয় না। প্রতিবেশী, প্রতিদ্বন্দ্বী বা কোনো জাতির দিকে আঙুল তুলে তাদের 'আল-মুজরিমূন' বলার অধিকারও কাউকে দেয় না। তাফসীরকারেরা শব্দটির পরিচয় দিয়েছেন গুণ দিয়ে, নাম দিয়ে নয়। আর সেদিনের বিচার একমাত্র আল্লাহর হাতে।"
          },
          {
            "en": "The warning points the other way, at the one reading. Several of the readings above set people beside those who resembled them or kept them company: each sort with its sort, a disbeliever with the devil who was his close companion, each group of one kind of deed chained together. One says outright that they are gathered in fetters as they once gathered upon sins. If that is the picture, the verse is not asking me to find the criminals around me. It is asking me whom I am gathering with, and upon what, while the gathering is still mine to choose.",
            "bn": "সতর্কবাণীর মুখ উল্টো দিকে, যে পড়ছে তার দিকে। উপরের কয়েকটি ব্যাখ্যা মানুষকে দাঁড় করায় তাদের পাশে, যাদের সঙ্গে তার মিল ছিল বা যাদের সঙ্গ সে ধরে রেখেছিল: প্রত্যেক শ্রেণি তার শ্রেণির সঙ্গে, কাফির তার ঘনিষ্ঠ সঙ্গী শয়তানের সঙ্গে, একই আমলের প্রতিটি দল একসঙ্গে বাঁধা। একটি ব্যাখ্যা তো খোলাখুলিই বলে, দুনিয়ায় তারা যেমন গুনাহের উপর একজোট হয়েছিল, শিকলেও তেমনি একজোট হবে। ছবিটা যদি এমন হয়, তবে আয়াত আমাকে আশপাশের অপরাধীদের খুঁজে বের করতে বলছে না। আয়াত জিজ্ঞেস করছে, আমি কাদের সঙ্গে জোট বাঁধছি, কিসের উপর, যখন জোট বাছাইয়ের সুযোগ এখনো আমার হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Bonds Chosen Now",
          "bn": "এখন যে বাঁধন বেছে নিই"
        },
        "p": [
          {
            "en": "Few bonds in a life are tied in one moment. Most are tied a little at a time: the friends I sit with most evenings, the group chat I open first, the jokes I laugh along with, the habits I return to when no one is watching. None of these feels like a chain while it is being tied. The verse shows what a bond looks like when it can no longer be loosened. That is a reason to look at my own bonds today, while loosening one still takes only a decision and some effort.",
            "bn": "জীবনের খুব কম বাঁধনই এক মুহূর্তে বাঁধা হয়। বেশিরভাগ বাঁধা পড়ে একটু একটু করে: যাদের সঙ্গে প্রায় প্রতি সন্ধ্যায় বসি, যে গ্রুপ চ্যাট সবার আগে খুলি, যে ঠাট্টায় সবার সঙ্গে হেসে উঠি, কেউ না দেখলে যে অভ্যাসে ফিরে যাই। বাঁধার সময় এগুলোর কোনোটিকেই শিকল মনে হয় না। আয়াতটি দেখায়, বাঁধন যখন আর খোলা যায় না, তখন তা কেমন দেখায়। আজই নিজের বাঁধনগুলোর দিকে তাকানোর কারণ এটাই। এখনো একটা বাঁধন খুলতে লাগে শুধু সিদ্ধান্ত আর কিছুটা চেষ্টা।"
          },
          {
            "en": "Al-Qurtubi's note on the word leaves a second thought. Safad is a fetter, and it is also a gift, because kindness binds whoever receives it. Not every bond is a chain to be feared. Good company, a friend who reminds me of Allah, a gathering where His name is mentioned, kindness given and received for His sake: these bind too, and they are bonds worth choosing. The verse sets the fetters of that Day before the reader, and leaves the reader free, today, to choose which ties to loosen and which to tighten.",
            "bn": "শব্দটি নিয়ে কুরতুবীর মন্তব্য আরেকটি ভাবনা রেখে যায়। সাফাদ মানে বেড়ি, আবার সাফাদ মানে উপহারও, কারণ দয়া গ্রহীতাকে বেঁধে ফেলে। সব বাঁধনই ভয় পাওয়ার মতো শিকল নয়। ভালো মানুষের সঙ্গ, এমন বন্ধু যে আল্লাহর কথা মনে করিয়ে দেয়, এমন মজলিস যেখানে তাঁর জিকির হয়, তাঁর সন্তুষ্টির জন্য দেওয়া-নেওয়া দয়া, এগুলোও বাঁধে। আর এসব বাঁধনই বেছে নেওয়ার মতো। আয়াত সেদিনের শিকল পাঠকের সামনে রাখে, আর আজ পাঠককে স্বাধীন রাখে: কোন বাঁধন ঢিলে করবেন, কোনটা আরও শক্ত করবেন, তা বেছে নেওয়ার জন্য।"
          }
        ]
      }
    ]
  }
});
