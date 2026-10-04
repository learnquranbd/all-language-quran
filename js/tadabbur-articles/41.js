/**
 * Tadabbur long-form articles — surah 41.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "41:3": {
    "sections": [
      {
        "h": {
          "en": "What the Revelation Is",
          "bn": "নাযিল হওয়া বাণীর পরিচয়"
        },
        "p": [
          {
            "en": "The surah opens with the letters Ha-Mim, and 41:2 then names the source of what follows: a revelation from the Entirely Merciful, the Especially Merciful. Those two verses are not this article's subject, and the letters are left without comment here. Verse 41:3 continues straight on: kitabun fussilat ayatuhu, a Book whose verses have been set out distinctly. The abridged English Ibn Kathir notes that the surah was revealed in Makkah, and heads its opening passage 'Description of the Qur'an, and what those who turn away from it say'.",
            "bn": "সূরার শুরু হা-মীম হরফ দুটি দিয়ে। তারপর ৪১:২ জানিয়ে দেয়, যা আসছে তা কোথা থেকে: পরম দয়াময়, পরম দয়ালুর কাছ থেকে নাযিল হওয়া বাণী। ওই দুটি আয়াত এ লেখার বিষয় নয়, আর হরফগুলো নিয়েও এখানে কোনো আলোচনা নেই। ৪১:৩ সোজা কথাটা এগিয়ে নেয়: কিতাবুন ফুসসিলাত আয়াতুহু, এক কিতাব, যার আয়াতগুলো আলাদা আলাদা করে খুলে বলা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ জানায়, সূরাটি নাযিল হয়েছে মক্কায়। শুরুর অংশের শিরোনাম সেখানে: কুরআনের বর্ণনা, আর যারা তা থেকে মুখ ফিরিয়ে নেয় তারা কী বলে।"
          },
          {
            "en": "At-Tabari records how some Basran grammarians tie the two verses together. On their reading, kitabun is the predicate of a subject left unstated: God is informing us that the revelation is a Book. So 41:2 tells where the words come from, and 41:3 tells what they are. The abridged English Ibn Kathir takes 41:2 to mean that the Qur'an is revealed from the Most Gracious, the Most Merciful, and then turns to the description this verse supplies, phrase by phrase, which is the order followed below.",
            "bn": "দুই আয়াত কীভাবে জোড়া লাগে, তাবারী তা জানান বসরার কিছু ব্যাকরণবিদের মত উদ্ধৃত করে। তাঁদের মতে কিতাবুন শব্দটি এমন এক বাক্যের বিধেয়, যার উদ্দেশ্য উহ্য রাখা হয়েছে। আল্লাহ খবর দিচ্ছেন, নাযিল হওয়া বাণীটি এক কিতাব। তাহলে ৪১:২ বলে কথাগুলো কোথা থেকে এসেছে, আর ৪১:৩ বলে সেগুলো কী। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৪১:২-এর অর্থ করে এভাবে: কুরআন নাযিল হয়েছে পরম করুণাময়, পরম দয়ালুর কাছ থেকে। তারপর তিনি এ আয়াতের বর্ণনায় যান, একটার পর একটা বাক্যাংশ ধরে। নিচের আলোচনাও সেই ক্রমেই চলবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Made Plain",
          "bn": "খুলে বলা আয়াত"
        },
        "p": [
          {
            "en": "The first glosses on fussilat ayatuhu are short. At-Tabari explains it as a Book whose verses have been made clear, bayyinat, and supports this with a report from as-Suddi, through a chain he names, that says the same thing in the same words: bayyinat ayatuhu. Al-Baghawi gives that single word and moves on. Al-Qurtubi pairs it with another: bayyinat wa fussirat, made clear and explained. So the plainest sense the commentators give is simply that nothing in the verses has been left obscure. The verb does not name who set the verses out, and the glosses do not pause there, since 41:2 has already named the revelation's source.",
            "bn": "ফুসসিলাত আয়াতুহু-এর প্রথম দিকের ব্যাখ্যাগুলো ছোট। তাবারী অর্থ করেন: এমন কিতাব, যার আয়াতগুলো স্পষ্ট করা হয়েছে, বুইয়িনাত। সমর্থনে তিনি সুদ্দীর একটি বর্ণনা আনেন, বর্ণনাকারীদের পরম্পরাসহ। সুদ্দীও হুবহু একই কথা বলেন: বুইয়িনাত আয়াতুহু। বাগাভী ওই একটি শব্দ বলেই সামনে এগিয়ে যান। কুরতুবী তার সঙ্গে আরেকটি শব্দ জোড়েন: বুইয়িনাত ওয়া ফুসসিরাত, স্পষ্ট করা হয়েছে এবং ব্যাখ্যা করা হয়েছে। অর্থাৎ তাফসীরকারদের দেওয়া সবচেয়ে সরল অর্থ হলো, আয়াতগুলোর কিছুই অস্পষ্ট রাখা হয়নি। কে খুলে বললেন, ক্রিয়াটি তা বলে না, ব্যাখ্যাগুলোও সেখানে থামে না, কারণ ৪১:২ আগেই জানিয়ে দিয়েছে বাণীটি কার কাছ থেকে এসেছে।"
          },
          {
            "en": "Ibn Kathir widens the gloss to cover both meaning and law: its meanings have been made clear and its rulings made firm. He sets beside it 11:1, a Book whose verses have been made firm and then set out in detail, from the Wise, the All-Aware. The Muyassar adds a measure of completeness: the verses were made clear with full clarity, tamam al-bayan, and their meanings and rulings explained. On these readings the setting out reaches what the Qur'an says and also what it requires.",
            "bn": "ইবন কাসীর ব্যাখ্যাটা অর্থ ও বিধান দুদিকেই ছড়িয়ে দেন। তাঁর ভাষায়, এর অর্থগুলো স্পষ্ট করা হয়েছে, আর এর বিধানগুলো মজবুত করা হয়েছে। পাশে তিনি রাখেন ১১:১, যেখানে বলা হয়েছে: এমন কিতাব, যার আয়াতগুলো মজবুত করা হয়েছে, তারপর বিস্তারিত বলা হয়েছে প্রজ্ঞাময়, সর্বজ্ঞের পক্ষ থেকে। মুয়াসসার যোগ করে পূর্ণতার মাপ: আয়াতগুলো স্পষ্ট করা হয়েছে পুরোপুরি, তামামুল বায়ান, আর তার অর্থ ও বিধানগুলো খুলে বলা হয়েছে। এ ব্যাখ্যাগুলো ধরলে খুলে বলাটা পৌঁছায় কুরআনের বক্তব্য পর্যন্ত, আবার কুরআনের দাবি পর্যন্তও।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Pairs Told Apart",
          "bn": "আলাদা করা তিন জোড়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi then reports what the setting out consists of, and gives it under three names. Qatada said the verses were set out by making clear what is lawful from what is unlawful, and obedience to God from disobedience. Al-Hasan said: by the promise and the threat, al-wa'd wa al-wa'id. Sufyan said: by reward and punishment, al-thawab wa al-'iqab. Al-Qurtubi lists the three statements in sequence and does not choose among them, and they are kept that way here. Each saying is brief, a few words naming what is being told apart from what.",
            "bn": "এরপর কুরতুবী জানান, খুলে বলাটা আসলে কোন কোন বিষয়ে। কথাটা তিনি আনেন তিনজনের নামে। কাতাদা বলেছেন, আয়াতগুলো খুলে বলা হয়েছে হালালকে হারাম থেকে, আর আল্লাহর আনুগত্যকে তাঁর নাফরমানি থেকে আলাদা করে দেখিয়ে। হাসান বলেছেন: ওয়াদা আর হুঁশিয়ারি দিয়ে, আল-ওয়া'দ ওয়াল-ওয়াঈদ। সুফিয়ান বলেছেন: সওয়াব আর শাস্তি দিয়ে, আস-সাওয়াব ওয়াল-ইকাব। কুরতুবী তিনটি কথা পরপর সাজিয়ে দেন, কোনোটিকে বেছে নেন না। এখানেও সেভাবেই রাখা হলো। প্রতিটি কথাই ছোট, অল্প কয়েকটি শব্দে বলা, কোনটাকে কোনটা থেকে আলাদা করা হলো।"
          },
          {
            "en": "Placed side by side, the three statements share a shape. Each names a pair of opposites, and each makes the setting out a matter of drawing a line between them. Qatada's line runs through conduct, what may be done and what may not. Al-Hasan's runs through what God has said He will do, in promise and in warning. Sufyan's runs through the outcome, what is gained and what is suffered. A reader who keeps all three in view holds the verses to a demanding standard of clarity.",
            "bn": "তিনটি কথা পাশাপাশি রাখলে একটা মিল চোখে পড়ে। প্রতিটিতে আছে বিপরীত দুই জিনিসের জোড়া, আর প্রতিটিতেই খুলে বলা মানে দুয়ের মাঝখানে রেখা টেনে দেওয়া। কাতাদার রেখা আমলের ভেতর দিয়ে যায়: কী করা যায়, কী যায় না। হাসানের রেখা যায় আল্লাহ নিজে যা করবেন বলে জানিয়েছেন তার ভেতর দিয়ে, ওয়াদায় ও হুঁশিয়ারিতে। সুফিয়ানের রেখা যায় পরিণামের ভেতর দিয়ে: কী মিলবে, কী ভুগতে হবে। তিনটিকে একসঙ্গে চোখের সামনে রাখলে আয়াতগুলোর স্পষ্টতার মাপকাঠি অনেক উঁচুতে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Kind on Its Own",
          "bn": "প্রতিটি জিনিস নিজ জায়গায়"
        },
        "p": [
          {
            "en": "As-Sa'di opens his comment by saying that God here praises the Book for the completeness of its clarity. He reads fussilat as every kind of thing being set apart on its own, 'ala hidatihi. That, he says, carries with it full clarity, a separating of each thing from the next, and tamyiz al-haqa'iq, the telling apart of realities. His gloss is wider than the three pairs. It speaks of things generally being given their own place, and of realities that the reader can then see distinctly.",
            "bn": "সা'দী তাঁর ব্যাখ্যা শুরু করেন এ কথা দিয়ে যে, আল্লাহ এখানে কিতাবের প্রশংসা করছেন তার স্পষ্টতার পূর্ণতার জন্য। ফুসসিলাত-এর অর্থ তিনি করেন: প্রতিটি জিনিসকে তার ধরন অনুযায়ী আলাদা করে নিজ জায়গায় রাখা হয়েছে, আলা হিদাতিহি। তাঁর মতে এর মধ্যেই আছে পূর্ণ স্পষ্টতা, প্রতিটি জিনিসকে অন্যটি থেকে আলাদা করা, আর তামঈযুল হাকাইক, অর্থাৎ বাস্তবতাগুলোকে একটা থেকে আরেকটা চিনিয়ে দেওয়া। তাঁর ব্যাখ্যা ওই তিনটি জোড়ার চেয়ে প্রশস্ত। এখানে সাধারণভাবে সব জিনিসের নিজ জায়গা পাওয়ার কথা, আর এমন বাস্তবতার কথা যা পাঠক তখন আলাদা করে দেখতে পায়।"
          },
          {
            "en": "Al-Qurtubi also notes that the verb has been read in another way, and he gives two meanings for that reading. Either the verses divide between truth and falsehood, or they are set apart from one another by their differing meanings. He takes the second from the ordinary use of fasala for someone who moves away from a town. The fetched text does not name who recited it so, and it is not pursued further here. Al-Qurtubi gives both meanings without preferring either. Both stay close to the main gloss: clarity reached by separation.",
            "bn": "কুরতুবী আরও জানান, ক্রিয়াটি আরেকভাবেও পড়া হয়েছে, আর সেই পাঠের দুটি অর্থ তিনি দেন। হয় আয়াতগুলো হক আর বাতিলের মাঝে ভাগ করে দেয়, নয়তো অর্থের ভিন্নতার কারণে আয়াতগুলো একটা থেকে আরেকটা আলাদা। দ্বিতীয় অর্থটি তিনি নেন ফাসালা শব্দের সাধারণ ব্যবহার থেকে, যেমন কেউ শহর ছেড়ে দূরে সরে গেলে বলা হয়। কারা এভাবে পড়েছেন, সংগৃহীত লেখায় তাঁদের নাম নেই, তাই বিষয়টি এখানে আর টানা হলো না। কুরতুবী দুটি অর্থই দেন, কোনোটিকে প্রাধান্য না দিয়ে। দুটোই মূল ব্যাখ্যার কাছাকাছি থাকে: আলাদা করার মধ্য দিয়েই স্পষ্টতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Plain Arabic Wording",
          "bn": "সুস্পষ্ট আরবী শব্দমালা"
        },
        "p": [
          {
            "en": "Qur'anan 'arabiyyan: an Arabic Qur'an. Ibn Kathir reads it as Arabic wording, clear and plain, and draws the two halves of the verse together: its meanings are set out in detail, and its words are clear and free of confusion. He adds that it is inimitable in both its wording and its meaning. He cites a later verse of this surah, 41:42: falsehood does not come to it from before it or from behind it, a revelation from the Wise, the Praiseworthy. On his reading, the Arabic and the clarity belong together.",
            "bn": "কুরআনান আরাবিয়্যান: আরবী কুরআন। ইবন কাসীরের ব্যাখ্যায় এর মানে আরবী শব্দে, পরিষ্কার ও সুস্পষ্ট। আয়াতের দুই অংশকে তিনি এক সুতোয় গাঁথেন। এর অর্থগুলো বিস্তারিত খুলে বলা, আর এর শব্দগুলো পরিষ্কার, কোনো জটিলতা নেই। তিনি আরও বলেন, শব্দে ও অর্থে, দুদিক থেকেই এ কিতাব অতুলনীয়, এর নজির কেউ আনতে পারে না। তিনি উদ্ধৃত করেন এ সূরারই পরের এক আয়াত, ৪১:৪২: বাতিল এর কাছে আসতে পারে না সামনে থেকেও না, পেছন থেকেও না। এ বাণী নাযিল হয়েছে প্রজ্ঞাময়, প্রশংসিতের পক্ষ থেকে। তাঁর পাঠে আরবী ভাষা আর স্পষ্টতা একসঙ্গে চলে।"
          },
          {
            "en": "As-Sa'di describes the Arabic as al-lugha al-fusha, the most eloquent speech, and calls Arabic the most complete of languages. The Muyassar adds a word about the reader's side: an Arabic Qur'an whose understanding has been made easy, muyassaran fahmuhu. The commentators thus join the language to the clarity. The verses were set out, and they were set out in a tongue whose words, on Ibn Kathir's reading, carry no confusion, so that what is distinguished in meaning is also plain in expression.",
            "bn": "সা'দী এ আরবীকে বলেন আল-লুগাতুল ফুসহা, সবচেয়ে বিশুদ্ধ ও প্রাঞ্জল ভাষা, আর আরবীকে বলেন সব ভাষার মধ্যে সবচেয়ে পূর্ণাঙ্গ। মুয়াসসার পাঠকের দিক থেকে একটি কথা যোগ করে: এমন আরবী কুরআন, যার বোঝা সহজ করে দেওয়া হয়েছে, মুয়াসসারান ফাহমুহু। এভাবে তাফসীরকারেরা ভাষাকে স্পষ্টতার সঙ্গে জুড়ে দেন। আয়াতগুলো খুলে বলা হয়েছে, আর খুলে বলা হয়েছে এমন ভাষায়, যার শব্দে ইবন কাসীরের মতে কোনো জটিলতা নেই। ফলে অর্থে যা আলাদা করে দেখানো, প্রকাশেও তা পরিষ্কার।"
          },
          {
            "en": "On the grammar, briefly. Ibn Kathir reads qur'anan as describing the Book's state: it is set out while being Arabic wording. Al-Baghawi says the word is in the accusative because the act of making clear falls on it: We set it out as a Qur'an. At-Tabari paraphrases its verses were set out in this way, and records that grammarians differed over the accusative; the portion fetched gives only the Basran view that the verb is taken up by ayat, which stands in the agent's place, and so qur'anan is accusative. As-Sa'di simply glosses: set out, and made Arabic.",
            "bn": "ব্যাকরণ নিয়ে সংক্ষেপে। ইবন কাসীর কুরআনান শব্দটিকে কিতাবের অবস্থার বিবরণ হিসেবে পড়েন: আরবী শব্দমালা হয়েই তা খুলে বলা। বাগাভী বলেন, শব্দটি নসবযুক্ত, কারণ খুলে বলার কাজটা এর উপরেই পড়েছে: আমরা একে কুরআন রূপে খুলে বলেছি। তাবারী অর্থ করেন, এর আয়াতগুলো এভাবেই খুলে বলা হয়েছে। তিনি জানান, নসবের কারণ নিয়ে ব্যাকরণবিদদের মধ্যে মতভেদ আছে। সংগৃহীত অংশে আছে শুধু বসরার মত: ক্রিয়াটি আয়াত শব্দ নিয়েই ব্যস্ত, আয়াত বসেছে কর্তার জায়গায়, তাই কুরআনান নসব পেয়েছে। সা'দী সোজা বলেন: খুলে বলা হয়েছে, আর আরবী করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A People Who Know",
          "bn": "যারা জানে তাদের জন্য"
        },
        "p": [
          {
            "en": "Li-qawmin ya'lamun: for a people who know. The commentators do not name this people in one way. The Muyassar says they are a people who know the Arabic tongue, al-lisan al-'arabi. Al-Baghawi gives the same gloss and adds a reason from the other direction: had it been in a tongue other than theirs, they would not have known it. On this reading the phrase completes qur'anan 'arabiyyan. The Book was given an Arabic form so that those addressed in that language would grasp it. The Muyassar's earlier phrase, easy to understand, belongs to the same thought.",
            "bn": "লিকাওমিন ইয়া'লামূন: এমন লোকদের জন্য, যারা জানে। এই লোকেরা কারা, তাফসীরকারেরা সবাই একইভাবে বলেন না। মুয়াসসারের মতে তারা সেই লোক, যারা আরবী ভাষা জানে, আল-লিসানুল আরাবী। বাগাভীও একই ব্যাখ্যা দেন, তারপর উল্টো দিক থেকে একটা কারণ জোড়েন: তাদের ভাষা ছাড়া অন্য ভাষায় হলে তারা তা বুঝতে পারত না। এ পাঠে বাক্যাংশটি কুরআনান আরাবিয়্যান-এর কথাটাই পূর্ণ করে। কিতাবকে আরবী রূপ দেওয়া হয়েছে, যাতে সে ভাষায় যাদের সম্বোধন করা হচ্ছে তারা তা ধরতে পারে। মুয়াসসারের আগের কথাটা, বোঝা সহজ করে দেওয়া, এই একই ভাবনার অংশ।"
          },
          {
            "en": "Ibn Kathir names a narrower group. In his Arabic: innama ya'rifu hadha al-bayan wa al-wuduh al-'ulama' al-rasikhun, it is only the scholars firmly grounded in knowledge who recognise this clarity and plainness. The abridged English renders it as scholars who are thoroughly versed in knowledge, by whom this clear style will be readily understood. Here the knowing is not only of the language but of the depth: the clarity is in the Book, and those who perceive it fully are those rooted in learning.",
            "bn": "ইবন কাসীর আরও নির্দিষ্ট একদলের কথা বলেন। তাঁর আরবী ভাষ্য: ইন্নামা ইয়া'রিফু হাযাল বায়ানা ওয়াল উযূহা আল-উলামাউর রাসিখূন। অর্থাৎ এই স্পষ্টতা ও প্রাঞ্জলতা চিনতে পারেন কেবল জ্ঞানে দৃঢ়প্রতিষ্ঠিত আলেমরা। সংক্ষিপ্ত ইংরেজি সংস্করণে কথাটা এসেছে এভাবে: জ্ঞানে গভীর পারদর্শী আলেমরাই এই স্পষ্ট ভঙ্গি সহজে বুঝবেন। এখানে জানা মানে শুধু ভাষা জানা নয়, গভীরতাও জানা। স্পষ্টতা কিতাবের ভেতরেই আছে, কিন্তু পুরোটা দেখতে পান তাঁরা, যাঁদের শিকড় জ্ঞানের গভীরে।"
          },
          {
            "en": "As-Sa'di reads the phrase as a purpose: li-ajli an yatabayyana lahum ma'nahu kama tabayyana lafzuhu, so that its meaning becomes clear to them just as its wording is clear, and guidance stands out from misguidance, and right conduct from error. Ma'arif al-Qur'an translates for a people who understand, and says the verses, being Arabic, clear and bearing good news and warning, can benefit only those who intend to ponder over them and understand them. These glosses are given side by side here, without a ruling between them.",
            "bn": "সা'দী বাক্যাংশটিকে উদ্দেশ্য হিসেবে পড়েন: লিআজলি আন ইয়াতাবাইয়ানা লাহুম মা'নাহু কামা তাবাইয়ানা লাফযুহু। অর্থাৎ যাতে এর শব্দ যেমন তাদের কাছে স্পষ্ট, এর অর্থও তেমনি স্পষ্ট হয়, আর হেদায়েত গোমরাহি থেকে, সঠিক পথ ভুল পথ থেকে আলাদা হয়ে দেখা দেয়। মাআরিফুল কুরআন অনুবাদ করে: যারা বোঝে তাদের জন্য। সেখানে বলা হয়েছে, আয়াতগুলো আরবী, স্পষ্ট, সুসংবাদ ও সতর্কবাণী বহনকারী, তবু এর উপকার পায় কেবল তারাই, যারা ভেবে দেখতে ও বুঝতে চায়। ব্যাখ্যাগুলো এখানে পাশাপাশি রাখা হলো, কোনোটার পক্ষে রায় না দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Spoken for Their Sake",
          "bn": "যাদের জন্য কথাটা নয়"
        },
        "p": [
          {
            "en": "As-Sa'di then names the other side. As for the ignorant, whom guidance increases only in misguidance and clarity only in blindness, the speech was not driven for their sake. He closes with 2:6: it is the same to them whether you warn them or do not warn them; they will not believe. Ma'arif al-Qur'an, for its part, notes that the Arabs and the Quraysh turned away despite all this, and points to the end of 41:4 for it. That verse belongs to its own place and is not taken up here.",
            "bn": "এরপর সা'দী অপর দিকের কথা বলেন। আর যারা অজ্ঞ, হেদায়েত যাদের গোমরাহিই বাড়ায়, স্পষ্টতা যাদের অন্ধত্বই বাড়ায়, কথাটা তাদের জন্য বলা হয়নি। শেষে তিনি আনেন ২:৬: তুমি তাদের সতর্ক করো বা না করো, তাদের কাছে দুটোই সমান, তারা ঈমান আনবে না। মাআরিফুল কুরআন তার দিক থেকে জানায়, এত কিছুর পরও আরবরা ও কুরাইশরা মুখ ফিরিয়ে নিয়েছিল, আর এ কথার জন্য সে ৪১:৪-এর শেষাংশের দিকে ইঙ্গিত করে। সে আয়াতের আলোচনা তার নিজের জায়গায়, এখানে তা তোলা হলো না।"
          },
          {
            "en": "It needs saying plainly that as-Sa'di describes a disposition, not a list of names, and that this verse and his comment license nothing against any living person or community; no reader is entitled to place another inside that description. What the comment leaves the reader is a question turned inward, about whether clarity is doing its work in him. None of the fetched commentaries attaches a hadith to this verse, and none is brought here; nor do they give a cause of revelation.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। সা'দী একটা মনোভাবের বর্ণনা দিয়েছেন, কোনো নামের তালিকা দেননি। এ আয়াত ও তাঁর ব্যাখ্যা আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। অন্য কাউকে ওই বর্ণনার ভেতরে বসিয়ে দেওয়ার অধিকার কোনো পাঠকের নেই। এ ব্যাখ্যা পাঠকের হাতে যা রেখে যায়, তা নিজের দিকে ফেরানো এক প্রশ্ন: স্পষ্টতা কি আমার ভেতরে তার কাজ করছে? সংগৃহীত তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানেও কোনো হাদীস আনা হলো না। নাযিলের কোনো প্রেক্ষাপটও তারা উল্লেখ করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Clarity Waiting on Readers",
          "bn": "স্পষ্টতা অপেক্ষায় পাঠকের"
        },
        "p": [
          {
            "en": "Across the commentaries, the work of making clear is credited to the Book. Its verses are bayyinat, made clear; tafsil, setting out, is done to them; its realities are told apart; its understanding, says the Muyassar, has been made easy. What the verse names on the reader's side is a verb: ya'lamun, they know. The Book has done what it was sent to do. Whether the setting out reaches anyone depends on whether there is a people who know, in whichever sense the commentators give. On al-Baghawi's reading the knowing begins with the language; on Ibn Kathir's it is deepest in the firmly grounded.",
            "bn": "সব তাফসীরেই স্পষ্ট করার কাজটা কিতাবের নামে লেখা। এর আয়াতগুলো বুইয়িনাত, স্পষ্ট করা। এগুলোকে খুলে বলা হয়েছে। এর বাস্তবতাগুলো আলাদা আলাদা করে চেনানো হয়েছে। আর মুয়াসসারের ভাষায়, এর বোঝা সহজ করে দেওয়া হয়েছে। অথচ পাঠকের দিকে আয়াত রেখেছে শুধু একটা ক্রিয়া: ইয়া'লামূন, তারা জানে। কিতাব তার কাজ করে ফেলেছে। খুলে বলা কথাটা কারও কাছে পৌঁছাবে কি না, তা নির্ভর করে জানে এমন লোক আছে কি না তার উপর, তাফসীরকারেরা জানার যে অর্থই দিন না কেন। বাগাভীর পাঠে জানা শুরু হয় ভাষা থেকে। ইবন কাসীরের পাঠে জানা সবচেয়ে গভীর তাঁদের মধ্যে, যাঁরা জ্ঞানে দৃঢ়।"
          },
          {
            "en": "Each of those senses asks something of the person who opens the Qur'an. Knowing the tongue asks for effort with the language. Being grounded in knowledge asks for patience and for the company of those who have it. Wanting the meaning to become as clear as the wording, in as-Sa'di's phrase, asks for slow reading. Intending to ponder, in Ma'arif's phrase, asks for a turned heart. The verse holds out the Book as already clear. What it waits for is the reader who comes in order to know.",
            "bn": "জানার এসব অর্থের প্রতিটিই কুরআন খোলা মানুষটার কাছে কিছু না কিছু চায়। ভাষা জানার অর্থ চায় ভাষার পেছনে খাটুনি। জ্ঞানে দৃঢ় হওয়ার অর্থ চায় ধৈর্য, আর যাঁদের সে জ্ঞান আছে তাঁদের সাহচর্য। সা'দীর কথামতো শব্দের মতো অর্থও স্পষ্ট হোক, এ চাওয়া দাবি করে ধীরে পড়া। মাআরিফুলের কথামতো ভেবে দেখার নিয়ত দাবি করে কুরআনের দিকে ফেরানো একটা মন। আয়াত কিতাবকে সামনে রাখে আগে থেকেই স্পষ্ট অবস্থায়। সে অপেক্ষা করে এমন পাঠকের জন্য, যে আসে জানার জন্য।"
          }
        ]
      }
    ]
  },
  "41:12": {
    "sections": [
      {
        "h": {
          "en": "From Smoke to Seven Heavens",
          "bn": "ধোঁয়া থেকে সাত আসমান"
        },
        "p": [
          {
            "en": "The passage opens at 41:9 with a question to those who disbelieve in the One who created the earth in two days and set up rivals to Him. Verse 41:10 adds the mountains, the blessing and the measured provisions of the earth. In 41:11 He turns to the heaven while it was smoke and calls heaven and earth to come, willingly or unwillingly, and they answer that they come willingly. Our verse finishes that account: fa-qadahunna sab'a samawatin fi yawmayn, so He completed them as seven heavens in two days.",
            "bn": "অংশটির শুরু ৪১:৯ আয়াতে, একটি প্রশ্ন দিয়ে। যিনি দুই দিনে যমীন সৃষ্টি করেছেন, তোমরা কি তাঁকেই অস্বীকার কর, আর তাঁর সমকক্ষ দাঁড় করাও? ৪১:১০ আয়াত যোগ করে পাহাড়, বরকত আর যমীনের মাপা রিযিকের কথা। ৪১:১১ আয়াতে তিনি আসমানের দিকে মনোনিবেশ করেন, তখন তা ছিল ধোঁয়া। তিনি আসমান ও যমীনকে ডাকেন: এসো, ইচ্ছায় হোক বা অনিচ্ছায়। দুটোই জবাব দেয়, আমরা স্বেচ্ছায় এলাম। আমাদের আয়াত সেই বর্ণনা শেষ করে: ফাকাদাহুন্না সাব'আ সামাওয়াতিন ফী ইয়াওমাইন, অতঃপর তিনি দুই দিনে সেগুলোকে সাতটি আসমানরূপে সম্পূর্ণ করলেন।"
          },
          {
            "en": "The verb qada carries the weight here. Al-Qurtubi glosses it as He completed them and finished them, and adds a second reading, it is said: He made them firm and well wrought. For that sense he cites a line of the poet Abu Dhu'ayb al-Hudhali about two coats of mail that Dawud (AS) had qada, finished with skill. Al-Baghawi has He completed them and finished their creation. At-Tabari says He finished creating them as seven heavens, and the Muyassar speaks of the creation and proportioning of the seven heavens.",
            "bn": "এখানে মূল ভার বহন করছে কাদা ক্রিয়াটি। কুরতুবী এর অর্থ করেন: তিনি সেগুলো পূর্ণ করলেন, কাজ শেষ করলেন। 'বলা হয়' কথাটি দিয়ে তিনি দ্বিতীয় একটি অর্থও আনেন: তিনি সেগুলোকে মজবুত ও নিখুঁত করে গড়লেন। এই অর্থের সমর্থনে তিনি কবি আবু যুয়াইব আল-হুযালীর একটি পঙক্তি উদ্ধৃত করেন। সেখানে দুটি বর্মের কথা আছে, যা দাউদ (আঃ) দক্ষ হাতে তৈরি করে শেষ করেছিলেন, কবি সেখানে কাদা শব্দই ব্যবহার করেছেন। বাগাভী বলেন, তিনি সেগুলো পূর্ণ করলেন এবং সৃষ্টির কাজ শেষ করলেন। তাবারীর ভাষায়, তিনি সাতটি আসমানরূপে সেগুলোর সৃষ্টি সমাপ্ত করলেন। মুয়াসসার বলে, সাতটি আসমানের সৃষ্টি ও বিন্যাসের কাজ তিনি সম্পন্ন করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Reckoning Two, Four and Two",
          "bn": "দুই, চার আর দুইয়ের হিসাব"
        },
        "p": [
          {
            "en": "Read quickly, 41:9, 41:10 and this verse seem to add up to eight days: two for the earth, four for its provisions, two for the heavens. The fetched commentators do not count it that way. Ibn Kathir puts the earth on Sunday and Monday, and the mountains, blessing and provisions on Tuesday and Wednesday, which, he says, together with the two previous days add up to four. The heavens then take two more days, Thursday and Friday. The four of 41:10, on this reckoning, include the two of 41:9.",
            "bn": "তাড়াতাড়ি পড়লে ৪১:৯, ৪১:১০ আর এই আয়াত মিলিয়ে মনে হতে পারে আটটি দিন: যমীনের জন্য দুই, তার রিযিকের জন্য চার, আসমানের জন্য আরও দুই। কিন্তু যেসব তাফসীর আমরা দেখেছি, সেগুলো এভাবে গোনে না। ইবন কাসীর যমীন সৃষ্টিকে রাখেন রবি ও সোমবারে, আর পাহাড়, বরকত ও রিযিককে মঙ্গল ও বুধবারে। তাঁর কথায়, আগের দুই দিন মিলিয়ে এ হয় চারটি দিন। তারপর আসমানের জন্য আরও দুই দিন, বৃহস্পতি ও শুক্রবার। এই হিসাবে ৪১:১০ আয়াতের চার দিনের ভেতরেই ৪১:৯ আয়াতের দুই দিন ধরা আছে।"
          },
          {
            "en": "Al-Qurtubi says the same in his own words: two days besides the four days in which He created the earth, so that the creation of the heavens and the earth fell within six days, as Allah says in 7:54. He then reports from 'Abdullah ibn Salam (RA): the earth in two days, its provisions in two, the heavens in two, beginning on Sunday and ending on Friday. Al-Qurtubi adds that the people of tafsir hold this view. As-Sa'di and the Muyassar also state that the whole was completed in six days.",
            "bn": "কুরতুবী একই কথা নিজের ভাষায় বলেন: যে চারটি দিনে যমীন সৃষ্টি হয়েছে, সেগুলো ছাড়া আরও দুই দিন। ফলে আসমান ও যমীনের সৃষ্টি হয়েছে ছয়টি দিনে, যেমন আল্লাহ ৭:৫৪ আয়াতে বলেছেন। এরপর তিনি আবদুল্লাহ ইবন সালাম (রাঃ) থেকে বর্ণনা আনেন: যমীন দুই দিনে, তার রিযিক দুই দিনে, আসমান দুই দিনে। শুরু রবিবারে, শেষ শুক্রবারে। কুরতুবী যোগ করেন, তাফসীরবিদদের অবস্থান এটাই। সা'দী আর মুয়াসসারও বলেন, পুরো সৃষ্টি সম্পন্ন হয়েছে ছয়টি দিনে।"
          },
          {
            "en": "At-Tabari gives the heavens Thursday and Friday, and cites as-Suddi for the stages: the smoke rose from the water when it breathed out, He made it a single heaven, then split it and made it seven heavens in two days. Friday, as-Suddi adds, is called al-Jumu'ah because in it He gathered the creation of the heavens and the earth. Al-Qurtubi reports from Mujahid that each of the six days is like a thousand years of your reckoning. The verse itself names only the numbers; the weekdays are the commentators' reckoning.",
            "bn": "তাবারী আসমানের জন্য বৃহস্পতি ও শুক্রবারের কথা বলেন, আর ধাপগুলোর জন্য সুদ্দীর বর্ণনা আনেন। পানি যখন নিঃশ্বাস ছাড়ল, তা থেকে ধোঁয়া উঠল। তিনি সেটাকে একটি আসমান বানালেন, তারপর তা চিরে দুই দিনে সাতটি আসমান করলেন। সুদ্দী আরও বলেন, শুক্রবারকে জুমু'আ বলা হয় কারণ সেদিন তিনি আসমান ও যমীনের সৃষ্টি একত্র করেছেন। কুরতুবী মুজাহিদ থেকে বর্ণনা করেন, ছয়টি দিনের প্রতিটি দিন তোমাদের গণনার হাজার বছরের মতো। আয়াত নিজে শুধু সংখ্যাগুলো বলে। সপ্তাহের দিনের নাম তাফসীরকারদের হিসাব।"
          }
        ]
      },
      {
        "h": {
          "en": "Able in a Moment, Yet Measured",
          "bn": "এক পলকে পারেন, তবু মেপে"
        },
        "p": [
          {
            "en": "Why days at all? The Muyassar answers briefly: the heavens and the earth were completed in six days for a wisdom that Allah knows, though He is able to create them in a single moment. As-Sa'di says more. Allah's power and will could create the whole in a single moment, he writes, but alongside His power He is Wise and Gentle, rafiq, and from His wisdom and gentleness He made their creation in this measured period. Neither commentator claims to know the full content of that wisdom.",
            "bn": "দিনের হিসাব কেন? মুয়াসসার সংক্ষেপে উত্তর দেয়: আসমান ও যমীন ছয়টি দিনে সম্পূর্ণ হয়েছে এমন এক হিকমতে, যা আল্লাহই জানেন, অথচ এক মুহূর্তেই সব সৃষ্টি করার ক্ষমতা তাঁর আছে। সা'দী আরেকটু খুলে বলেন। আল্লাহর কুদরত ও ইচ্ছা এক মুহূর্তে সবকিছু সৃষ্টি করতে সক্ষম। কিন্তু তিনি সর্বশক্তিমান হওয়ার পাশাপাশি হাকীম, প্রজ্ঞাময়, আর রাফীক, কোমল। তাঁর হিকমত ও কোমলতা থেকেই তিনি এই মাপা সময় ধরে সৃষ্টি করেছেন। হিকমতটা পুরোপুরি কী, তা জানার দাবি দুজনের কেউই করেন না।"
          },
          {
            "en": "That restraint is worth keeping. The verse does not ask the reader to time the stars or to map its days onto anything else. It asks the reader to notice that He who could have spoken everything into being at once chose order, stages and completion. The word qada already says it: the work was brought to its end and made firm. A believer who learns this about the heavens may learn patience with the stages of smaller things, where Allah also measures and does not hurry.",
            "bn": "এই সংযমটুকু ধরে রাখার মতো। আয়াতটি পাঠককে তারার সময় মাপতে বলে না, এর দিনগুলোকে অন্য কোনো কিছুর সঙ্গে মিলিয়ে দেখতেও বলে না। আয়াত শুধু দেখাতে চায়: যিনি চাইলে এক কথায় সবকিছু অস্তিত্বে আনতে পারতেন, তিনি বেছে নিয়েছেন শৃঙ্খলা, ধাপ আর পূর্ণতা। কাদা শব্দটাই তা বলে দেয়, কাজ শেষ পর্যন্ত পৌঁছানো হয়েছে, মজবুত করা হয়েছে। আসমান সম্পর্কে এ কথা যে মুমিন শেখে, ছোটখাটো বিষয়ের ধাপগুলোতেও সে ধৈর্য শিখতে পারে। সেখানেও আল্লাহ মেপে চলেন, তাড়াহুড়ো করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Narrations With Their Caveats",
          "bn": "সতর্কবাণীসহ বর্ণনাগুলো"
        },
        "p": [
          {
            "en": "Ibn Kathir quotes from at-Tabari a report, through 'Ikrimah from Ibn 'Abbas (RA), in which Jews asked the Prophet ﷺ about the creation of the heavens and the earth and received a day-by-day account in which 41:9 and 41:10 are recited. Ibn Kathir does not rest on it. His verdict, in his own words, is that this hadith has something strange in it. The article therefore does not build anything on its details, and repeats none of them as settled.",
            "bn": "ইবন কাসীর তাবারী থেকে একটি বর্ণনা উদ্ধৃত করেন, যা ইকরিমা হয়ে ইবন আব্বাস (রাঃ) থেকে এসেছে। তাতে আছে, কিছু ইহুদি নবী ﷺ-কে আসমান ও যমীনের সৃষ্টি সম্পর্কে জিজ্ঞেস করে, আর তিনি দিনে দিনে কী সৃষ্টি হয়েছে তার বিবরণ দেন। সেই বিবরণের মাঝে ৪১:৯ ও ৪১:১০ আয়াত তিলাওয়াত করা হয়। ইবন কাসীর এর উপর ভর করেন না। তাঁর নিজের রায়, এ হাদীসে অস্বাভাবিকতা আছে। তাই এই লেখা এর খুঁটিনাটির উপর কিছু দাঁড় করায় না, কোনোটাকেই প্রতিষ্ঠিত কথা হিসেবে আনে না।"
          },
          {
            "en": "Both Ibn Kathir and al-Qurtubi also mention the narration of Abu Hurayrah (RA) in Sahih Muslim (2789), which begins with the soil on Saturday and ends with Adam (AS) on Friday afternoon. Ibn Kathir calls it one of the unusual reports of the Sahih and says al-Bukhari, in his al-Tarikh, judged it defective: some narrate it from Abu Hurayrah from Ka'b al-Ahbar, which al-Bukhari called more correct. Al-Qurtubi sets it apart from the tafsir scholars' view. No fetched tafsir attaches a narration to this verse that settles the count beyond dispute.",
            "bn": "ইবন কাসীর ও কুরতুবী দুজনেই সহীহ মুসলিমে (২৭৮৯) থাকা আবু হুরায়রা (রাঃ)-এর বর্ণনার কথাও বলেন। সেখানে শুরু শনিবারে মাটি সৃষ্টি দিয়ে, আর শেষ শুক্রবার বিকেলে আদম (আঃ)-এর সৃষ্টি দিয়ে। ইবন কাসীর একে সহীহ গ্রন্থের অস্বাভাবিক বর্ণনাগুলোর একটি বলেন। তিনি জানান, বুখারী তাঁর আত-তারীখ গ্রন্থে এতে ত্রুটি চিহ্নিত করেছেন: কেউ কেউ এটি আবু হুরায়রা থেকে কা'ব আল-আহবারের সূত্রে বর্ণনা করেন, আর বুখারীর মতে সেটাই বেশি সঠিক। কুরতুবী একে তাফসীরবিদদের মত থেকে আলাদা করে রাখেন। দেখা তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে এমন কোনো বর্ণনা যুক্ত করেনি, যা দিনের হিসাবকে বিতর্কের ঊর্ধ্বে নিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Each Heaven Given Its Affair",
          "bn": "প্রতিটি আসমানকে তার কাজ"
        },
        "p": [
          {
            "en": "Wa awha fi kulli sama'in amraha: and He inspired in each heaven its command. The commentators give several glosses, and the fetched texts leave them side by side. The first reads amr as command. At-Tabari reports from Mujahid that it means what Allah commanded and willed. Al-Baghawi reports from Muqatil that He made known to each heaven what He willed of command and prohibition. As-Sa'di explains it as the command and management fitting each heaven, required by the wisdom of the Wisest of judges.",
            "bn": "ওয়া আওহা ফী কুল্লি সামাইন আমরাহা: আর প্রত্যেক আসমানে তিনি তার হুকুম ওহীর মাধ্যমে জানিয়ে দিলেন। তাফসীরকারেরা এর কয়েকটি ব্যাখ্যা দেন, আর আমাদের দেখা তাফসীরগুলো সেগুলোকে পাশাপাশিই রেখে দেয়। প্রথম ব্যাখ্যায় আমর মানে আদেশ। তাবারী মুজাহিদ থেকে বর্ণনা করেন: আল্লাহ যা আদেশ করেছেন আর যা চেয়েছেন। বাগাভী মুকাতিল থেকে আনেন: প্রত্যেক আসমানকে তিনি তাঁর ইচ্ছামতো আদেশ ও নিষেধ জানিয়ে দিলেন। সা'দীর ব্যাখ্যায় এ হল প্রত্যেক আসমানের উপযোগী হুকুম ও পরিচালনা, যা সবচেয়ে বড় বিচারকের হিকমত দাবি করেছে।"
          },
          {
            "en": "A second gloss reads it as what He placed in each heaven. As-Suddi, in at-Tabari, says He created in each heaven its creatures from among the angels, and what is in it of seas and mountains of hail, and what is not known. Al-Baghawi gives the same from 'Ata' from Ibn 'Abbas (RA). Qatadah says He created in it its sun, moon and stars and what sets it right. Ibn Kathir says He arranged in each heaven what it needs of angels and of things known only to Him. At-Tabari's own summary: He placed in each heaven what He willed to create.",
            "bn": "দ্বিতীয় ব্যাখ্যায় এর মানে, প্রত্যেক আসমানে তিনি যা রেখেছেন। তাবারীর উদ্ধৃতিতে সুদ্দী বলেন, প্রত্যেক আসমানে তিনি তার বাসিন্দা ফেরেশতাদের সৃষ্টি করেছেন, আর সেখানকার সাগর, শিলার পাহাড় এবং যা জানা নেই তা-ও। বাগাভী একই কথা আনেন আতা হয়ে ইবন আব্বাস (রাঃ) থেকে। কাতাদা বলেন, তিনি সেখানে তার সূর্য, চাঁদ, তারা আর তার কল্যাণের ব্যবস্থা সৃষ্টি করেছেন। ইবন কাসীরের ভাষায়, প্রত্যেক আসমানের যা প্রয়োজন, ফেরেশতা থেকে শুরু করে এমন সব জিনিস যা কেবল তিনিই জানেন, তা তিনি সেখানে সাজিয়ে দিয়েছেন। তাবারীর নিজের সারকথা: প্রত্যেক আসমানে তিনি যা সৃষ্টি করতে চেয়েছেন, তা রেখে দিয়েছেন।"
          },
          {
            "en": "Al-Qurtubi adds a note on the verb. Inspiration, he says, can be a command, citing 99:5, where your Lord inspired the earth, and 5:111, when I inspired the disciples, meaning I commanded them; here it is a command of bringing into being, amr takwin. He also reports from Ibn 'Abbas (RA) that in each heaven Allah has a house to which the angels go in pilgrimage and around which they circle, aligned with the Ka'bah, and that the house in the nearest heaven is al-Bayt al-Ma'mur. These are reported readings; the article does not choose between them.",
            "bn": "কুরতুবী ক্রিয়াটি নিয়ে একটি টীকা যোগ করেন। তাঁর মতে ওহী কখনো আদেশ অর্থেও আসে। প্রমাণ হিসেবে তিনি ৯৯:৫ আয়াত আনেন, যেখানে তোমার রব যমীনকে ওহী করেছেন, আর ৫:১১১ আয়াত, যখন আমি হাওয়ারীদের ওহী করেছিলাম, মানে আদেশ দিয়েছিলাম। এখানে তা সৃষ্টির আদেশ, আমর তাকবীন। তিনি ইবন আব্বাস (রাঃ) থেকে আরও বর্ণনা করেন, প্রত্যেক আসমানে আল্লাহর একটি ঘর আছে। ফেরেশতারা সেখানে হজ করে, তার চারপাশে তাওয়াফ করে, আর তা কা'বার ঠিক বরাবর। নিকটতম আসমানের ঘরটিই বাইতুল মা'মূর। এগুলো বর্ণিত ব্যাখ্যা, এই লেখা এর কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Lamps That Also Stand Guard",
          "bn": "যে প্রদীপ পাহারাও দেয়"
        },
        "p": [
          {
            "en": "Wa zayyanna as-sama'a ad-dunya bi-masabih: and We adorned the nearest heaven with lamps. At-Tabari says the lamps are the stars, set there as adornment for you, people. Ibn Kathir describes them as bright stars shining down on the people of the earth. As-Sa'di gives them several roles: light is sought by them, the way is found by them, and they are an outward beauty for the sky. Al-Qurtubi records a difference without settling it: it is said that every heaven has shining stars, and it is said that the stars belong to the nearest heaven alone.",
            "bn": "ওয়া যাইয়্যান্নাস সামাআদ দুনইয়া বিমাসাবীহ: আর আমি নিকটতম আসমানকে প্রদীপমালায় সাজিয়েছি। তাবারী বলেন, প্রদীপ মানে তারকা, হে মানুষ, তোমাদের জন্য সেগুলো সাজসজ্জা হিসেবে রাখা হয়েছে। ইবন কাসীরের বর্ণনায় সেগুলো উজ্জ্বল তারা, যা যমীনের মানুষের উপর আলো ছড়ায়। সা'দী সেগুলোর কয়েকটি কাজের কথা বলেন: সেগুলো থেকে আলো নেওয়া হয়, সেগুলো দেখে পথ চেনা হয়, আর বাইরের দিক থেকে সেগুলো আকাশের সৌন্দর্য। কুরতুবী একটি মতভেদ উল্লেখ করেন, মীমাংসা না করেই। কেউ বলেন, প্রত্যেক আসমানেই আলো দেওয়া তারা আছে। কেউ বলেন, তারা শুধু নিকটতম আসমানেরই।"
          },
          {
            "en": "Then wa hifzan, and as protection. The fetched texts agree on what the protection is against. Ibn Kathir says a guard against the devils, lest they listen to the Highest Assembly. The Muyassar says protection from the devils who steal a hearing. Al-Qurtubi says the same and adds that this guarding is by the stars with which the devils are pelted, as he explained under Surat al-Hijr. As-Sa'di calls it the stars' inward beauty: they are made missiles against the devils so that nothing is stolen by listening.",
            "bn": "তারপর ওয়া হিফযান, আর সুরক্ষা হিসেবে। কিসের থেকে সুরক্ষা, এ ব্যাপারে আমাদের দেখা তাফসীরগুলো একমত। ইবন কাসীর বলেন, শয়তানদের থেকে পাহারা, যাতে তারা ঊর্ধ্বজগতের সভার কথা শুনতে না পারে। মুয়াসসার বলে, চুরি করে কথা শোনা শয়তানদের থেকে সুরক্ষা। কুরতুবীও একই কথা বলেন, আর যোগ করেন যে এ পাহারা চলে সেই তারাগুলো দিয়ে, যা ছুড়ে শয়তানদের তাড়ানো হয়। সূরা হিজরের আলোচনায় তিনি এর ব্যাখ্যা দিয়েছেন। সা'দী একে বলেন তারার ভেতরের সৌন্দর্য: সেগুলোকে শয়তানদের বিরুদ্ধে নিক্ষেপের অস্ত্র বানানো হয়েছে, যাতে চুরি করে কিছু শোনা না যায়।"
          },
          {
            "en": "The grammar of hifzan is disputed, and at-Tabari sets out both sides. Some Basran grammarians read it as and We guarded it with a guarding, since adorning the sky already implies tending it. Some Kufan grammarians read it as and for protection We adorned it, since without the conjunction it would say We adorned the nearest heaven as protection. At-Tabari says the second is nearer to correct. Al-Baghawi and al-Qurtubi take the first: We guarded it a guarding. The difference stays a difference; both readings keep the guard.",
            "bn": "হিফযান শব্দের ব্যাকরণ নিয়ে মতভেদ আছে, আর তাবারী দুই পক্ষই তুলে ধরেন। বসরার কিছু ব্যাকরণবিদের মতে এর অর্থ: আর আমি তাকে ভালোভাবে হেফাজত করেছি। কারণ আকাশ সাজানোর কথা বলাতেই বোঝা যায়, তিনি তার দেখাশোনা করেছেন। কুফার কিছু ব্যাকরণবিদের মতে অর্থ: আর হেফাজতের জন্যই আমি তাকে সাজিয়েছি। কারণ সংযোজক 'ওয়া' বাদ দিলে বাক্যটা দাঁড়ায়, আমি নিকটতম আসমানকে সুরক্ষা হিসেবে সাজিয়েছি। তাবারীর মতে দ্বিতীয়টি সঠিকের বেশি কাছাকাছি। বাগাভী ও কুরতুবী প্রথমটি নেন। মতভেদটা মতভেদ হিসেবেই থাকুক। দুই পাঠেই পাহারা রয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Earth First, or the Sky?",
          "bn": "আগে যমীন, নাকি আসমান?"
        },
        "p": [
          {
            "en": "Al-Qurtubi raises the question himself. The outward sense of this verse, he says, is that the earth was created before the heaven, while 79:27 speaks of the heaven He built and 79:30 then says and the earth, after that, He spread it, which suggests the heaven came first. He reports that a group answered: the earth was created before the heaven, and spreading, dahw, is not creation. Allah created the earth, then the heavens, then spread the earth out. Al-Qurtubi attributes this to Ibn 'Abbas (RA).",
            "bn": "প্রশ্নটা কুরতুবী নিজেই তোলেন। তিনি বলেন, এ আয়াতের বাহ্যিক অর্থ হল, যমীন আসমানের আগে সৃষ্টি হয়েছে। অথচ ৭৯:২৭ আয়াতে আছে আসমানের কথা, যা তিনি নির্মাণ করেছেন, আর ৭৯:৩০ আয়াত বলে, এরপর তিনি যমীনকে বিস্তৃত করেছেন। এতে মনে হয় আসমান আগে। কুরতুবী জানান, একদল আলিম এর জবাব দিয়েছেন: যমীন আসমানের আগেই সৃষ্টি হয়েছে, আর বিস্তৃত করা, দাহউ, সৃষ্টি করা নয়। আল্লাহ যমীন সৃষ্টি করলেন, তারপর আসমান, তারপর যমীনকে বিছিয়ে দিলেন। কুরতুবী এ কথা ইবন আব্বাস (রাঃ)-এর বলে উল্লেখ করেন।"
          },
          {
            "en": "As-Sa'di frames it as an apparent conflict, adding that the Book of Allah has no contradiction in it. He gives the answer of many of the early generations: the creation of the earth and its form came before the heavens, as here, while its spreading, explained in 79:31 as bringing out its water and pasture, came after, as in Surat an-Nazi'at. He notes that the verse there says He spread it after that, and not that He created it after that.",
            "bn": "সা'দী একে বলেন বাহ্যিক বিরোধ, আর সঙ্গে যোগ করেন যে আল্লাহর কিতাবে কোনো বিরোধ নেই। তিনি সালাফের অনেকের জবাব উল্লেখ করেন: যমীনের সৃষ্টি ও তার আকৃতি আসমানের আগে, যেমন এখানে বলা হয়েছে। আর তাকে বিস্তৃত করা, যা ৭৯:৩১ আয়াতে ব্যাখ্যা করা হয়েছে পানি ও চারণভূমি বের করা দিয়ে, তা হয়েছে পরে, যেমন সূরা নাযি'আতে আছে। তিনি খেয়াল করিয়ে দেন, সেখানে বলা হয়েছে এরপর তিনি তা বিস্তৃত করলেন, এ কথা বলা হয়নি যে এরপর তিনি তা সৃষ্টি করলেন।"
          },
          {
            "en": "Ibn Kathir says the earth came first as a foundation comes before a roof, and cites 2:29. He then gives the answer of Ibn 'Abbas (RA), which he says al-Bukhari recorded in his Sahih, to a man troubled by these verses: the earth in two days, then the heavens in two, then the spreading of the earth in two more, so the earth and what is in it took four days. This is a Companion's explanation, not a saying of the Prophet ﷺ. The article reports these answers as theirs and adds none of its own.",
            "bn": "ইবন কাসীর বলেন, ভিত যেমন ছাদের আগে তৈরি হয়, তেমনি যমীন আগে সৃষ্টি হয়েছে। এরপর তিনি ২:২৯ আয়াত উল্লেখ করেন। তারপর তিনি ইবন আব্বাস (রাঃ)-এর জবাব আনেন, যা তাঁর কথামতো বুখারী তাঁর সহীহ গ্রন্থে লিপিবদ্ধ করেছেন। এক ব্যক্তি এসব আয়াত নিয়ে বিভ্রান্ত হয়েছিল। ইবন আব্বাস (রাঃ) বলেন: যমীন দুই দিনে, তারপর আসমান দুই দিনে, তারপর আরও দুই দিনে যমীন বিস্তৃত করা। ফলে যমীন ও তার ভেতরের সবকিছুতে লেগেছে চারটি দিন। এটি একজন সাহাবীর ব্যাখ্যা, নবী ﷺ-এর বাণী নয়। এই লেখা এ জবাবগুলো তাঁদের নামেই জানায়, নিজের থেকে কিছু যোগ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Decree of the Mighty",
          "bn": "পরাক্রমশালীর নির্ধারিত বিধান"
        },
        "p": [
          {
            "en": "Dhalika taqdiru al-'Aziz al-'Alim: that is the measuring of the Mighty, the Knowing. At-Tabari reads that as all He has described of creating the heavens and earth and adorning the sky, measured by Him who is mighty in vengeance on His enemies and knowing His servants' secret and open deeds. Ibn Kathir: mighty, having overpowered and subdued all things, and knowing every movement and stillness of His creatures. Al-Baghawi: mighty in His dominion, knowing in His guarding. As-Sa'di: His knowledge encompasses the unseen and the seen.",
            "bn": "যালিকা তাকদীরুল আযীযিল আলীম: এ হল মহাপরাক্রমশালী, সর্বজ্ঞের নির্ধারণ। তাবারীর ব্যাখ্যায়, আসমান-যমীন সৃষ্টি আর আকাশ সাজানোর যে বর্ণনা দেওয়া হল, সবই তাঁর মাপা, যিনি শত্রুদের থেকে প্রতিশোধ নিতে পরাক্রমশালী, আর বান্দাদের গোপন ও প্রকাশ্য সব আমল জানেন। ইবন কাসীর বলেন, তিনি সবকিছুকে পরাভূত ও বশীভূত করেছেন, আর সৃষ্টির প্রতিটি নড়াচড়া ও স্থিরতা তাঁর জানা। বাগাভীর ভাষায়, রাজত্বে তিনি পরাক্রমশালী, হেফাজতে তিনি সর্বজ্ঞ। সা'দী বলেন, তাঁর জ্ঞান গায়েব ও প্রকাশ্য সবকিছু ঘিরে রেখেছে।"
          },
          {
            "en": "As-Sa'di then turns back to 41:9: among the most astonishing things, he says, is that the idolaters abandon sincere devotion to this Lord, to whose command creation has yielded, and stranger still that they set up deficient rivals. The verse describes those addressed in the text and licenses nothing against any living person or community. For the reader it is a mirror: the heavens came willingly and received their command, and the same Lord has given a command to each of us.",
            "bn": "এরপর সা'দী ৪১:৯ আয়াতের দিকে ফিরে যান। তাঁর মতে সবচেয়ে আশ্চর্য বিষয়গুলোর একটি হল, মুশরিকরা এমন রবের প্রতি খাঁটি ইবাদত ছেড়ে দেয়, যাঁর হুকুমের সামনে গোটা সৃষ্টি মাথা নত করেছে। তার চেয়েও আশ্চর্য, তারা এমন সব শরীক দাঁড় করায়, যারা নিজেরাই অপূর্ণ। আয়াতটি কেবল তাদের কথাই বলে, যাদের উদ্দেশে কথাগুলো বলা হয়েছিল। আজকের কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কিছুর অনুমতি দেয় না। পাঠকের জন্য এটি এক আয়না। আসমান-যমীন স্বেচ্ছায় এসেছিল, তাদের হুকুমও তারা পেয়েছিল। সেই একই রব আমাদের প্রত্যেককেও একটি হুকুম দিয়েছেন।"
          }
        ]
      }
    ]
  },
  "41:22": {
    "sections": [
      {
        "h": {
          "en": "After the Skins Have Spoken",
          "bn": "চামড়ার সাক্ষ্যের পরে"
        },
        "p": [
          {
            "en": "The scene is already under way. In 41:19 to 41:21 the enemies of Allah are driven to the Fire, their hearing, eyes and skins testify against them, and when they ask their skins why, the skins answer that Allah, who makes all things speak, made them speak. Then comes this verse: wa ma kuntum tastatiruna an yashhada 'alaykum sam'ukum wa la absarukum wa la juludukum, wa lakin zanantum anna-llaha la ya'lamu kathiran mimma ta'malun. It has two halves: something they did not do, and the thought that explains why.",
            "bn": "দৃশ্যটা আগেই শুরু হয়ে গেছে। ৪১:১৯ থেকে ৪১:২১ আয়াতে আল্লাহর দুশমনদের জাহান্নামের দিকে হাঁকিয়ে নেওয়া হয়, তাদের কান, চোখ আর চামড়া তাদের বিরুদ্ধে সাক্ষ্য দেয়, আর চামড়াকে কারণ জিজ্ঞেস করলে সে বলে, যে আল্লাহ সবকিছুকে কথা বলান, তিনিই আমাদের কথা বলিয়েছেন। এরপর এই আয়াত: ওয়ামা কুনতুম তাসতাতিরূনা আঁই ইয়াশহাদা আলাইকুম সাম‘উকুম ওয়ালা আবসারুকুম ওয়ালা জুলূদুকুম, ওয়ালাকিন যানানতুম আন্নাল্লাহা লা ইয়া‘লামু কাসীরাম মিম্মা তা‘মালূন। আয়াতের দুটি ভাগ। প্রথম ভাগে আছে এমন এক কাজ, যা তারা করেনি। দ্বিতীয় ভাগে আছে সেই ধারণা, যা তার কারণ বলে দেয়।"
          },
          {
            "en": "The people addressed are named two verses earlier: a'da' Allah, the enemies of Allah (41:19). The verse describes what the text describes, a scene on the Day of Judgement spoken to those the Qur'an itself names that way. It licenses nothing against any living person or community, and no reader may lift the name from 41:19 and fasten it on a neighbour, a rival or a group. What a reader may take from it is a question turned inward, and that is how the commentators below handle it.",
            "bn": "কাদের উদ্দেশে কথা, তা দুই আয়াত আগেই বলা আছে: আ‘দাউল্লাহ, আল্লাহর দুশমন (৪১:১৯)। আয়াতটি শুধু তা-ই বর্ণনা করে, যা পাঠে আছে। কিয়ামতের দিনের এক দৃশ্য, আর সম্বোধন তাদের প্রতি, যাদের কুরআন নিজেই এই নামে ডেকেছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। ৪১:১৯ থেকে নামটা তুলে নিয়ে প্রতিবেশী, প্রতিপক্ষ বা কোনো দলের গায়ে সেঁটে দেওয়ার অধিকার কোনো পাঠকের নেই। পাঠক এখান থেকে নিতে পারেন নিজের দিকে ফেরানো একটা প্রশ্ন। নিচের তাফসীরকারেরাও আয়াতটিকে সেভাবেই পড়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Voice Is This?",
          "bn": "কথাটা কার মুখে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse as the skins and limbs still talking. When their owners blame them for testifying, they reply: you did not keep from us what you used to do; rather you committed disbelief and sins openly before Allah, not caring about Him, as you supposed, because you did not believe that He knows all your deeds. On this reading the verse continues the answer begun in 41:21, and the witnesses themselves explain why their testimony was possible: nothing had been kept from them.",
            "bn": "ইবন কাসীরের পাঠে কথাগুলো তখনো চামড়া আর অঙ্গপ্রত্যঙ্গের মুখে। মালিকেরা সাক্ষ্য দেওয়ার জন্য তাদের দোষ দিলে তারা জবাব দেয়: তোমরা যা করতে, তা আমাদের কাছ থেকে গোপন রাখতে না। বরং আল্লাহর সামনে খোলাখুলি কুফর আর গুনাহ করতে, তাঁর কোনো পরোয়া করতে না, অন্তত তোমাদের ধারণায়। কারণ তোমরা বিশ্বাস করতে না যে তিনি তোমাদের সব কাজ জানেন। এই পাঠে আয়াতটি ৪১:২১ আয়াতে শুরু হওয়া জবাবেরই বাকি অংশ। সাক্ষীরা নিজেরাই বলে দিচ্ছে, তাদের সাক্ষ্য কেন সম্ভব হলো: তাদের কাছ থেকে কিছুই লুকানো হয়নি।"
          },
          {
            "en": "Al-Qurtubi leaves the speaker open. It is possible, he says, that these are the words of the limbs to their owners, and it is possible that they are the words of Allah, or of the angels. The grammar allows all three, since the verse simply says 'you'. So Ibn Kathir names the limbs, while al-Qurtubi allows three speakers without choosing. The difference changes the tone more than the content: the same charge, spoken either by the body that was used or from above it.",
            "bn": "কুরতুবী বক্তার প্রশ্ন খোলা রাখেন। তাঁর কথায়, হতে পারে এগুলো অঙ্গপ্রত্যঙ্গের কথা, তাদের মালিকদের উদ্দেশে। আবার হতে পারে আল্লাহর কথা, কিংবা ফেরেশতাদের। আয়াত শুধু 'তোমরা' বলে, তাই ভাষার দিক থেকে তিনটিই চলে। ইবন কাসীর তাই নির্দিষ্ট করে অঙ্গপ্রত্যঙ্গের নাম বলেন, আর কুরতুবী কোনোটি বেছে না নিয়ে তিন বক্তারই সুযোগ রাখেন। এই মতভেদে বিষয় বদলায় না, বদলায় সুর। অভিযোগ একটাই। হয় তা আসছে সেই শরীর থেকে, যাকে কাজে লাগানো হয়েছিল, নয়তো তার উপর থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hiding, Guarding, Expecting",
          "bn": "লুকানো, সাবধানতা, নাকি ধারণা"
        },
        "p": [
          {
            "en": "The key word is tastatirun, and at-Tabari opens by saying the interpreters differed over it. Some said it means tastakhfun, you were not hiding; he gives this from as-Suddi: you were not hiding from them. Others said it means tattaqun, you were not guarding yourselves against it; this is Mujahid's word. Others said it means tazunnun, you did not think or expect; this is from Qatada, who reads the verse as: you did not suppose that your hearing and your eyes would testify against you.",
            "bn": "মূল শব্দ তাসতাতিরূন। তাবারী শুরুতেই জানান, এর অর্থ নিয়ে ব্যাখ্যাকারেরা একমত নন। কেউ বলেছেন এর মানে তাসতাখফূন, তোমরা লুকাতে না। এ মত তিনি আনেন সুদ্দী থেকে: তোমরা তাদের কাছ থেকে লুকাতে না। কেউ বলেছেন এর মানে তাত্তাকূন, তোমরা এ থেকে সাবধান থাকতে না। এটা মুজাহিদের শব্দ। আবার কেউ বলেছেন এর মানে তাযুন্নূন, তোমরা ধারণাও করতে না। এটা কাতাদার মত। তাঁর পাঠে আয়াতের অর্থ দাঁড়ায়: তোমরা ভাবতেই পারতে না যে তোমাদের কান আর চোখ তোমাদের বিরুদ্ধে সাক্ষ্য দেবে।"
          },
          {
            "en": "The others line up behind these three. Al-Baghawi says hiding is the meaning according to most scholars, then records Mujahid's guarding and Qatada's thinking. Al-Qurtubi gives the same order, hiding in the view of most scholars, then guarding from Mujahid, then thinking from Qatada. The Muyassar keeps to hiding: you did not conceal yourselves while committing sins, out of fear that your hearing, sight and skins would testify. As-Sa'di joins two of them: you were not hiding from your limbs' testimony, and you were not wary of it.",
            "bn": "অন্যরা এই তিনটি মতের কোনো না কোনোটির পেছনে দাঁড়ান। বাগাভী বলেন, অধিকাংশ আলেমের মতে অর্থ লুকানো। এরপর তিনি মুজাহিদের সাবধানতা আর কাতাদার ধারণার কথাও লিখে রাখেন। কুরতুবীর ক্রমও একই: অধিকাংশ আলেমের মতে লুকানো, তারপর মুজাহিদের মতে সাবধানতা, তারপর কাতাদার মতে ধারণা। মুয়াসসার লুকানোর অর্থেই থাকে: গুনাহ করার সময় তোমরা আড়াল খুঁজতে না এই ভয়ে যে তোমাদের কান, চোখ আর চামড়া সাক্ষ্য দেবে। সা'দী দুটিকে মিলিয়ে বলেন, অঙ্গের সাক্ষ্য থেকে তোমরা লুকাতে না, আর তা নিয়ে সতর্কও থাকতে না।"
          },
          {
            "en": "At-Tabari then weighs them. The soundest view, he says, is that it means hiding, because hiding is the known sense of istitar. That is his judgement, and he states its reason. Mujahid's and Qatada's readings remain on the record, carried by al-Qurtubi and al-Baghawi without rebuttal. So the verse is read three ways: you were not hiding, you were not guarding yourselves, you did not even expect it. Each names a different failure, of the act, of caution, or of belief, and this page keeps all three.",
            "bn": "এরপর তাবারী মতগুলো ওজন করেন। তাঁর মতে সবচেয়ে সঠিক হলো লুকানোর অর্থ, কারণ ইসতিতার শব্দের পরিচিত অর্থই আড়াল হওয়া। এটা তাঁর বিচার, আর কারণটাও তিনি বলে দেন। তবে মুজাহিদ আর কাতাদার ব্যাখ্যা বাদ পড়েনি। কুরতুবী আর বাগাভী কোনো খণ্ডন ছাড়াই সেগুলো উল্লেখ করেছেন। ফলে আয়াতের তিনটি পাঠ দাঁড়ায়: তোমরা লুকাতে না, তোমরা সাবধান থাকতে না, তোমরা এমনটা ভাবতেও না। একেকটিতে একেক রকম ব্যর্থতা, কোথাও কাজের, কোথাও সতর্কতার, কোথাও বিশ্বাসের। এ লেখা তিনটিকেই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Can Anyone Hide From Himself?",
          "bn": "নিজের কাছ থেকে কি লুকানো যায়"
        },
        "p": [
          {
            "en": "The hiding reading raises an obvious question, and at-Tabari asks it himself: how can a person hide from himself what he does? His answer is that the hiding meant here is leaving the act. A man conceals a sin from his own limbs only by not committing it. So he paraphrases: you were not hiding, and so leaving what Allah forbade in the world, out of caution lest your hearing and eyes testify against you today. Al-Qurtubi reasons the same way: since no one can hide his deed from himself, hiding here means abandoning the sin.",
            "bn": "লুকানোর অর্থ নিলে একটা প্রশ্ন সামনে আসে, আর তাবারী নিজেই সেটা তোলেন: মানুষ নিজের করা কাজ নিজের কাছ থেকে লুকাবে কীভাবে? তাঁর জবাব, এখানে লুকানো মানে কাজটা ছেড়ে দেওয়া। নিজের অঙ্গের কাছ থেকে গুনাহ লুকানোর একটাই উপায়, গুনাহটা না করা। তাই তাঁর ভাষ্যে অর্থ দাঁড়ায়: তোমরা আড়াল হতে না, অর্থাৎ দুনিয়াতে আল্লাহর হারাম করা কাজ ছেড়ে দিতে না, এই ভয়ে যে আজ তোমাদের কান আর চোখ সাক্ষ্য দেবে। কুরতুবীর যুক্তিও এক। কেউ নিজের কাজ নিজের কাছ থেকে লুকাতে পারে না, তাই এখানে লুকানোর মানে গুনাহ ছেড়ে দেওয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an makes the point in plain terms. A person who wants to commit a sin may hide it from other people, but how can he hide it from his own limbs? Once it is known that our ears, eyes, hands, feet, skin and hair will give true evidence when questioned, there is no way to hide a sin, and the only way to avoid the disgrace is to keep away from it. Read this way, the hiding reading arrives at the same door as Mujahid's guarding: the only cover that works is not doing it.",
            "bn": "মাআরিফুল কুরআন কথাটা সহজ ভাষায় বলে। গুনাহ করতে চাইলে মানুষ তা অন্য মানুষের কাছ থেকে লুকাতে পারে, কিন্তু নিজের অঙ্গপ্রত্যঙ্গের কাছ থেকে লুকাবে কী করে? যখন জানা গেল আমাদের কান, চোখ, হাত, পা, চামড়া, এমনকি চুলও জিজ্ঞাসিত হলে সত্য সাক্ষ্য দেবে, তখন গুনাহ লুকানোর আর কোনো পথ থাকে না। লাঞ্ছনা এড়ানোর একমাত্র উপায় গুনাহ থেকে দূরে থাকা। এভাবে পড়লে লুকানোর অর্থ গিয়ে মেশে মুজাহিদের সাবধানতার অর্থের সঙ্গে। যে আড়াল সত্যিই কাজে দেয়, তা হলো কাজটাই না করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Nothing, but Not Much",
          "bn": "অনেক কিছু অজানা, এই ভ্রম"
        },
        "p": [
          {
            "en": "The second half gives the reason: wa lakin zanantum anna-llaha la ya'lamu kathiran mimma ta'malun, but you thought that Allah does not know much of what you do. At-Tabari glosses zanantum as hasibtum, you reckoned: when you committed acts of disobedience in the world, you reckoned that Allah did not know much of your foul deeds, and that is why you did not shield yourselves and leave what He forbade. The Muyassar and as-Sa'di tie the thought to the sins themselves: in venturing on them you assumed it, and so what came from you came.",
            "bn": "দ্বিতীয় ভাগে কারণ: ওয়ালাকিন যানানতুম আন্নাল্লাহা লা ইয়া‘লামু কাসীরাম মিম্মা তা‘মালূন, বরং তোমরা ভেবেছিলে, তোমরা যা কর তার অনেক কিছুই আল্লাহ জানেন না। তাবারী যানানতুম-এর অর্থ করেন হাসিবতুম, তোমরা হিসাব কষে নিয়েছিলে। দুনিয়ায় আল্লাহর নাফরমানি করার সময় তোমরা ধরে নিয়েছিলে, তোমাদের অনেক নোংরা কাজ তিনি জানেন না। এ কারণেই তোমরা আড়াল খোঁজোনি, তাঁর হারাম করা কাজও ছাড়োনি। মুয়াসসার আর সা'দী ধারণাটাকে গুনাহের সঙ্গেই জুড়ে দেন। গুনাহে পা বাড়াতে গিয়েই তোমরা এমন ভেবেছিলে, আর তাই তোমাদের কাছ থেকে যা ঘটার তা-ই ঘটেছে।"
          },
          {
            "en": "Ibn Kathir puts it as a belief about extent: you did not believe that He knows all of your deeds. The word kathiran carries that. The thought was not that Allah knows nothing, but that a large part escapes Him. Al-Qurtubi adds what followed: so you argued over it, until your limbs testified against you with your deeds. Ma'arif al-Qur'an calls the assumption false against an evident matter, since any intelligent person could see that He who created him and gave him hearing and sight will know his deeds. What the thought led to is the next verse's subject.",
            "bn": "ইবন কাসীর একে দেখেন আল্লাহর জ্ঞানের পরিধি নিয়ে এক বিশ্বাস হিসেবে: তোমরা বিশ্বাস করতে না যে তিনি তোমাদের সব কাজ জানেন। কাসীরান শব্দটাই এ কথা বহন করে। ধারণাটা এমন ছিল না যে আল্লাহ কিছুই জানেন না। ধারণা ছিল, অনেকটাই তাঁর অগোচরে থেকে যায়। কুরতুবী এর পরের ঘটনাও জুড়ে দেন: তাই তোমরা এ নিয়ে তর্ক করলে, শেষে তোমাদের অঙ্গই তোমাদের কাজের সাক্ষ্য দিল। মাআরিফুল কুরআন বলে, এ ধারণা স্পষ্ট সত্যের বিপরীত। যিনি তাকে সৃষ্টি করলেন, শোনার আর দেখার শক্তি দিলেন, তিনি তার কাজ জানবেন না, এটা যেকোনো বুদ্ধিমান মানুষই বুঝত। ধারণাটা তাদের কোথায় নিল, সেটা পরের আয়াতের বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Men by the House",
          "bn": "কাবার পাশে তিনজন"
        },
        "p": [
          {
            "en": "At-Tabari, Ibn Kathir, al-Qurtubi and al-Baghawi all attach an occasion to this verse, from Abdullah ibn Mas'ud. At-Tabari introduces it as a report that the verse came down because of a group who disputed among themselves over whether Allah knows what they say and speak in secret. The versions differ in detail; in some of at-Tabari's and Ibn Kathir's chains Ibn Mas'ud is hiding behind the coverings of the Ka'ba. One collection's wording is given here, whole, so that no two versions are blended.",
            "bn": "তাবারী, ইবন কাসীর, কুরতুবী আর বাগাভী সবাই এ আয়াতের সঙ্গে একটি শানে নুযূল জুড়ে দেন, আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে। তাবারী একে পরিচয় করান এভাবে: বর্ণিত আছে, আয়াতটি নাযিল হয়েছিল একদল লোককে কেন্দ্র করে, যারা নিজেদের মধ্যে তর্ক করছিল যে তাদের গোপন কথাবার্তা আল্লাহ জানেন কি না। বর্ণনাগুলোর খুঁটিনাটিতে পার্থক্য আছে। তাবারী আর ইবন কাসীরের কোনো কোনো সনদে ইবনে মাসউদ (রাঃ) কাবার গিলাফের আড়ালে লুকিয়ে ছিলেন। দুটি বর্ণনা যেন মিশে না যায়, তাই এখানে একটি সংকলনের ভাষ্যই পুরোটা তুলে দেওয়া হলো।"
          },
          {
            "en": "Sahih al-Bukhari (4817), from Abdullah, as it appears on quranx in the Dar-us-Salam numbering: \"There gathered near the House (i.e. the Ka`ba) two Quraishi persons and a person from Thaqif (or two persons from Thaqif and one from Quraish), and all of them with very fat bellies but very little intelligence. One of them said, 'Do you think that Allah hears what we say?'",
            "bn": "সহীহ বুখারী (৪৮১৭), আবদুল্লাহ (রাঃ) থেকে, কুরআনএক্স সাইটে দারুস সালামের নম্বর অনুযায়ী: কাবার কাছে দুজন কুরাইশি আর একজন সাকাফি জড়ো হলো, কিংবা দুজন সাকাফি আর একজন কুরাইশি। তাদের সবার পেটে চর্বি অনেক, অন্তরে বুঝ কম। তাদের একজন বলল, তোমাদের কী মনে হয়, আমরা যা বলি আল্লাহ কি তা শোনেন?"
          },
          {
            "en": "Another said, 'He hears us when we talk in a loud voice, but He doesn't hear us when we talk in a low tone.' The third said, 'If He can hear when we talk in a loud tone, then He can also hear when we speak in a low tone.' Then Allah, the Honorable, the Majestic revealed: 'And you have not been screening against yourself lest your ears, and eyes and your skins should testify against you....'\" That is the whole of the narration in this chain.",
            "bn": "আরেকজন বলল, আমরা জোরে বললে তিনি শোনেন, চুপিচুপি বললে শোনেন না। তৃতীয়জন বলল, জোরে বললে যদি শোনেন, তবে চুপিচুপি বললেও শোনেন। তখন মহান ও পরাক্রমশালী আল্লাহ নাযিল করলেন: ওয়ামা কুনতুম তাসতাতিরূনা আঁই ইয়াশহাদা আলাইকুম সাম‘উকুম ওয়ালা আবসারুকুম ওয়ালা জুলূদুকুম, তোমরা আড়াল হতে না এই ভয়ে যে তোমাদের কান, চোখ আর চামড়া তোমাদের বিরুদ্ধে সাক্ষ্য দেবে। এই সনদে বর্ণনাটি এতটুকুই, পুরোটা এখানে দেওয়া হলো।"
          },
          {
            "en": "The report stands in al-Bukhari's Sahih, which is his own judgement of it, and nothing more is claimed for it here. It fits the word kathiran closely. The second man does not deny that Allah hears; he only limits the hearing to what is said aloud, and the third man's reply is the correction. The description of the three is Ibn Mas'ud's, of three particular men on one day. It says nothing about the tribes it names or anyone descended from them, and licenses nothing against any living person or community.",
            "bn": "বর্ণনাটি বুখারী তাঁর সহীহ গ্রন্থে রেখেছেন, এটাই এর ব্যাপারে তাঁর নিজের রায়। এখানে এর বেশি কিছু দাবি করা হচ্ছে না। কাসীরান শব্দের সঙ্গে বর্ণনাটি খুব মেলে। দ্বিতীয় লোকটি আল্লাহর শোনাকে অস্বীকার করেনি। সে শুধু শোনাকে জোরে বলা কথার মধ্যে সীমিত করেছে, আর তৃতীয়জনের জবাবেই ভুলটা ধরা পড়ে। তিনজনের যে বর্ণনা, তা ইবনে মাসউদ (রাঃ)-এর, একটি দিনের নির্দিষ্ট তিনজন মানুষ সম্পর্কে। যে গোত্রগুলোর নাম এসেছে, তাদের বা তাদের বংশধরদের সম্পর্কে এতে কিছুই বলা হয়নি। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধেও এটি কোনো অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Witnesses Beyond Suspicion",
          "bn": "যে সাক্ষীকে সন্দেহ করা যায় না"
        },
        "p": [
          {
            "en": "Qatada, in at-Tabari's report, does not stop at the meaning of the word. He turns to the reader: by Allah, son of Adam, there are witnesses against you from your own body that cannot be accused, so watch them, and fear Allah in your secret affairs and your open ones, for nothing hidden is hidden from Him; darkness to Him is light, and the secret to Him is open. Then he adds: whoever is able to die thinking well of Allah, let him do so, and there is no power except with Allah.",
            "bn": "তাবারীর বর্ণনায় কাতাদা শব্দের অর্থে থেমে থাকেন না। তিনি পাঠকের দিকে ফেরেন: আল্লাহর কসম, হে আদমসন্তান, তোমার নিজের শরীরেই তোমার বিরুদ্ধে এমন সাক্ষী আছে, যাদের অভিযুক্ত করা যায় না। তাই তাদের খেয়াল রাখো। গোপনে আর প্রকাশ্যে আল্লাহকে ভয় করো, কারণ কোনো গোপন জিনিসই তাঁর কাছে গোপন নয়। অন্ধকার তাঁর কাছে আলো, আর গোপন কথা তাঁর কাছে খোলা। তারপর তিনি যোগ করেন: যে আল্লাহর প্রতি সুধারণা নিয়ে মরতে পারে, সে যেন তা-ই করে। আর আল্লাহর সাহায্য ছাড়া কোনো শক্তি নেই।"
          },
          {
            "en": "Al-Qurtubi gives more of Qatada's picture of the testimony. Your hearing will say: I heard the truth and did not take it in, and I heard what was not permitted. Your eyes will say: I saw the signs of Allah and took no lesson, and I looked at what was not permitted. The testimony, on this account, covers what the organ received and neglected as well as what it reached for. Qatada's closing words also sit beside the verse's second half: they had thought wrongly about Allah, and he urges the reader to think well of Him.",
            "bn": "কুরতুবী সাক্ষ্যের ব্যাপারে কাতাদার আরও কিছু কথা আনেন। তোমার কান বলবে: আমি সত্য শুনেছিলাম, কিন্তু মনে ধরে রাখিনি। আর যা শোনা জায়েজ ছিল না, তা-ও শুনেছি। তোমার চোখ বলবে: আল্লাহর নিদর্শন দেখেছিলাম, কিন্তু শিক্ষা নিইনি। আর যার দিকে তাকানো জায়েজ ছিল না, তার দিকেও তাকিয়েছি। এই বর্ণনায় সাক্ষ্য শুধু অঙ্গ কী করেছে তা নিয়ে নয়। অঙ্গ যা পেয়েছিল অথচ কাজে লাগায়নি, সেটাও সাক্ষ্যের অংশ। কাতাদার শেষ কথাটিও আয়াতের দ্বিতীয় ভাগের পাশেই বসে। তারা আল্লাহ সম্পর্কে ভুল ধারণা করেছিল, আর তিনি পাঠককে বলেন তাঁর প্রতি সুধারণা রাখতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Body That Keeps Count",
          "bn": "শরীর রাখে হিসাব"
        },
        "p": [
          {
            "en": "The three readings of tastatirun ask three different things of a reader. Hiding asks whether I am covering my wrongs from people while doing them in front of my own eyes and ears. Guarding asks whether the thought of that testimony ever stops my hand. Expecting asks whether I believe in it at all. The commentators who answer the first, at-Tabari, al-Qurtubi and Ma'arif al-Qur'an, give the same remedy: the only real cover is leaving the sin. Qatada's remedy is watchfulness, in secret and in the open alike.",
            "bn": "তাসতাতিরূন-এর তিন পাঠ পাঠকের কাছে তিনটি আলাদা প্রশ্ন রাখে। লুকানোর পাঠ জিজ্ঞেস করে, আমি কি মানুষের চোখ থেকে গুনাহ ঢাকি, অথচ করি নিজের চোখ-কানের সামনেই? সাবধানতার পাঠ জিজ্ঞেস করে, সেই সাক্ষ্যের কথা ভেবে আমার হাত কখনো থামে কি? ধারণার পাঠ জিজ্ঞেস করে, আমি আদৌ তা বিশ্বাস করি তো? প্রথম প্রশ্নের জবাব যাঁরা দেন, সেই তাবারী, কুরতুবী আর মাআরিফুল কুরআন একই উপায় বলেন: আসল আড়াল হলো গুনাহটাই ছেড়ে দেওয়া। কাতাদার উপায় হলো সজাগ থাকা, গোপনে যেমন, প্রকাশ্যেও তেমন।"
          },
          {
            "en": "The second half asks something quieter. Few believers would say that Allah does not know what they do. But the verse names a thought of degree, not much rather than nothing, and that thought can live inside a person who would deny it in words. The second man by the House did not doubt that Allah hears; he only drew a line at the whisper. The third man's reasoning is the one to keep: if He hears the loud, He hears the low. Whatever my eyes, ears and skin are part of, He already knows.",
            "bn": "দ্বিতীয় ভাগের প্রশ্নটা আরও নিঃশব্দ। কোনো মুমিন মুখে বলবে না যে আল্লাহ তার কাজ জানেন না। কিন্তু আয়াত যে ধারণার কথা বলে, তা মাত্রার। কিছুই জানেন না, এমন নয়, বরং অনেকটা জানেন না। মুখে যে এ কথা অস্বীকার করবে, তার ভেতরেও এই ধারণা বাসা বাঁধতে পারে। কাবার পাশের দ্বিতীয় লোকটি সন্দেহ করেনি যে আল্লাহ শোনেন। সে শুধু ফিসফিসানির কাছে এসে একটা সীমা টেনেছিল। মনে রাখার মতো যুক্তি তৃতীয়জনের: জোরের কথা যিনি শোনেন, তিনি নিচু স্বরের কথাও শোনেন। আমার চোখ, কান আর চামড়া যাতেই শামিল থাকুক, তিনি তা আগেই জানেন।"
          }
        ]
      }
    ]
  },
  "41:33": {
    "sections": [
      {
        "h": {
          "en": "A Question With One Answer",
          "bn": "যে প্রশ্নের উত্তর একটিই"
        },
        "p": [
          {
            "en": "Wa man ahsanu qawlan — and who is better in speech? The Arabic is a question of the kind that expects no answer, because none is available: nobody is. The whole verse is thirteen words in Arabic, and it spends them naming who the question is about. What is being ranked here is not eloquence, not volume, not winning an argument. It is the best kind of speech there is, and the Quran defines it by what surrounds the speaking rather than by the speaking itself.",
            "bn": "ওয়া মান আহসানু ক্বাওলান — কথায় কে বেশি উত্তম? আরবিতে এটি এমন এক প্রশ্ন যা কোনো উত্তর প্রত্যাশা করে না, কারণ উত্তর নেই: কেউ নয়। পুরো আয়াতটি আরবিতে তেরোটি শব্দের, আর সেই শব্দগুলো খরচ হয় প্রশ্নটি কাকে নিয়ে তা বলতে গিয়ে। এখানে যার মান নির্ধারণ হচ্ছে তা বাগ্মিতা নয়, উচ্চস্বর নয়, তর্কে জেতাও নয়। এটি সর্বোত্তম ধরনের কথা, আর কুরআন তার সংজ্ঞা দেয় কথা বলাটিকে ঘিরে যা থাকে তা দিয়ে — কথা বলাটিকে দিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Things, Not One",
          "bn": "একটি নয়, তিনটি"
        },
        "p": [
          {
            "en": "The description has three parts, and they are easy to collapse into one. He calls to Allah — da'a ila Allah. He works righteousness — wa 'amila salihan. And he says, indeed I am of the Muslims — wa qala innani mina al-muslimin. Speech, action, and an owned identity. Remove any of the three and the verse no longer describes the person: a caller whose life contradicts him, or a good man who never invites anyone, or someone doing both while keeping his allegiance quiet.",
            "bn": "বর্ণনাটির তিনটি অংশ, আর এগুলোকে এক করে ফেলা খুব সহজ। সে আল্লাহর দিকে ডাকে — দা'আ ইলাল্লাহ। সে সৎকর্ম করে — ওয়া 'আমিলা সালিহা। আর সে বলে, নিশ্চয় আমি মুসলিমদের একজন — ওয়া ক্বালা ইন্নানী মিনাল মুসলিমীন। কথা, কাজ, আর নিজের বলে স্বীকার করা পরিচয়। এই তিনটির যেকোনো একটি সরিয়ে নিলে আয়াতটি আর সেই মানুষটির বর্ণনা থাকে না: এমন আহ্বানকারী যার জীবন তার কথাকে মিথ্যা প্রমাণ করে, কিংবা এমন ভালো মানুষ যে কাউকে কখনো ডাকে না, কিংবা এমন কেউ যে দুটোই করে অথচ নিজের পরিচয়টি চুপ করে রাখে।"
          },
          {
            "en": "The middle clause does the most work, because it is the one the Quran elsewhere presses hardest. 61:2-3 asks the believers why they say what they do not do, and calls it greatly hateful in the sight of Allah. 2:44 asks whether they order righteousness of people and forget themselves while they recite the Scripture. The verse does not require the caller to be perfect, which no caller has ever been. It requires that he be standing inside the thing he is calling people to.",
            "bn": "মাঝের অংশটিই সবচেয়ে বেশি কাজ করে, কারণ কুরআন অন্যত্র এটির ওপরই সবচেয়ে জোর দেয়। 61:2-3 আয়াতে মুমিনদের জিজ্ঞেস করা হয়, তারা কেন এমন কথা বলে যা তারা করে না, আর একে বলা হয় আল্লাহর কাছে অত্যন্ত অপছন্দনীয়। 2:44 আয়াতে জিজ্ঞেস করা হয়, তারা কি মানুষকে সৎকাজের নির্দেশ দেয় আর নিজেদের ভুলে যায়, অথচ কিতাব পাঠ করে? আয়াতটি আহ্বানকারীর নিখুঁত হওয়া দাবি করে না — কোনো আহ্বানকারীই কখনো নিখুঁত ছিল না। এটি দাবি করে, সে যেন যেদিকে ডাকছে সেই জিনিসটির ভেতরে দাঁড়িয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Meant",
          "bn": "কার কথা বলা হয়েছে"
        },
        "p": [
          {
            "en": "The commentators give more than one answer and do not treat them as rivals. Some read it of the Prophet ﷺ first, since he is the caller the surah is addressing. Ibn Kathir records a statement of Aisha (RA) reading it of the mu'adhdhin, who calls people to Allah and then prays what he called them to. Ibn Kathir also cites al-Hasan al-Basri saying of this verse that such a person is the beloved of Allah and the most beloved of the people of the earth to Allah. Most take the wording as general, since it is phrased as a class and not as a name.",
            "bn": "মুফাসসিরগণ একাধিক উত্তর দেন এবং সেগুলোকে পরস্পরবিরোধী মনে করেন না। কেউ কেউ প্রথমেই এটিকে নবী ﷺ-এর ক্ষেত্রে পড়েন, কারণ সূরাটি যাঁকে সম্বোধন করছে তিনিই সেই আহ্বানকারী। ইবনে কাসীর আয়িশা (রাঃ)-এর একটি উক্তি উল্লেখ করেন যেখানে তিনি এটিকে মুয়াযযিনের ক্ষেত্রে পড়েন — যে দিনে পাঁচবার মানুষকে আল্লাহর দিকে ডাকে, তারপর গিয়ে সেই নামাযটিই আদায় করে যার দিকে সে ডেকেছিল। ইবনে কাসীর হাসান আল-বসরীর কথাও উদ্ধৃত করেন, যিনি এই আয়াত সম্পর্কে বলেন যে এমন ব্যক্তিই আল্লাহর প্রিয়পাত্র, আর যমীনের মানুষদের মধ্যে আল্লাহর কাছে সবচেয়ে প্রিয়। অধিকাংশই শব্দগুলোকে সাধারণ অর্থে নেন, কারণ এটি কোনো নাম নয়, একটি শ্রেণি হিসেবে বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Sits in Fussilat",
          "bn": "সূরা ফুসসিলাতে এর অবস্থান"
        },
        "p": [
          {
            "en": "Surah Fussilat is Makkan, and the years it belongs to were years in which calling to Allah earned mockery rather than standing. The verses just before it, 41:30-32, promise that those who say our Lord is Allah and then hold steady will have the angels descend upon them with the words do not fear and do not grieve. Then this verse lifts the caller to the top of all speech. And the verse immediately after it, 41:34, supplies the manner: repel with what is better, and the one you were at enmity with becomes like a warm friend.",
            "bn": "সূরা ফুসসিলাত মক্কী, আর যে বছরগুলোর সঙ্গে এটি জড়িত সেগুলোতে আল্লাহর দিকে ডাকলে মর্যাদা নয়, উপহাসই জুটত। ঠিক আগের আয়াতগুলো, 41:30-32, প্রতিশ্রুতি দেয় যে যারা বলে 'আমাদের প্রতিপালক আল্লাহ' এবং তারপর অবিচল থাকে, তাদের কাছে ফেরেশতারা নেমে আসে এই কথা নিয়ে — ভয় করো না, দুঃখ করো না। এরপর আলোচ্য আয়াতটি আহ্বানকারীকে সব কথার শীর্ষে তুলে দেয়। আর ঠিক পরের আয়াত, 41:34, জোগায় পদ্ধতি: যা উৎকৃষ্ট তা দিয়ে প্রতিহত করো, তখন যার সঙ্গে শত্রুতা ছিল সে হয়ে যায় অন্তরঙ্গ বন্ধুর মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "How, Not Just Whether",
          "bn": "শুধু কি নয়, কীভাবেও"
        },
        "p": [
          {
            "en": "The Quran is specific about method elsewhere as well. 16:125 says to invite to the way of your Lord with wisdom and good instruction, and to argue with them in the way that is best. 12:108 has the Prophet ﷺ say that this is his way, that he invites to Allah upon insight, he and those who follow him. Read together with this verse, the three passages say that calling is a competence and not a temperament: it has content, it has manners, and it has evidence standing behind it.",
            "bn": "পদ্ধতির ব্যাপারে কুরআন অন্যত্রও সুনির্দিষ্ট। 16:125 আয়াতে বলা হয়, প্রজ্ঞা ও সুন্দর উপদেশ দিয়ে তোমার প্রতিপালকের পথের দিকে ডাকো, আর তাদের সঙ্গে বিতর্ক করো সর্বোত্তম পন্থায়। 12:108 আয়াতে নবী ﷺ বলেন, এটিই তাঁর পথ — তিনি ও যারা তাঁর অনুসরণ করে, তাঁরা জ্ঞানদৃষ্টির ওপর দাঁড়িয়ে আল্লাহর দিকে ডাকেন। আলোচ্য আয়াতের সঙ্গে মিলিয়ে পড়লে এই তিনটি অংশ বলে, আহ্বান করা একটি দক্ষতা, নিছক স্বভাব নয়: এর বিষয়বস্তু আছে, আদব আছে, আর পেছনে দাঁড়ানো দলিল আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "In Your Own Circle",
          "bn": "নিজের পরিসরে"
        },
        "p": [
          {
            "en": "What makes this verse usable is that it mentions no pulpit, no title and no following. Muslim relates from Abu Hurayrah (RA) that whoever calls to guidance has a reward like the rewards of those who follow him, without that diminishing their own rewards in the least. That covers a parent, a colleague, a message sent to one person. And the third clause has a modern edge: innani mina al-muslimin is said aloud, in the first person, by someone who is not quietly editing his religion out of his introduction.",
            "bn": "এই আয়াতটিকে ব্যবহারযোগ্য করে তোলে এই যে, এতে কোনো মিম্বরের কথা নেই, কোনো উপাধির কথা নেই, কোনো অনুসারীদলের কথাও নেই। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, যে হিদায়াতের দিকে ডাকে সে তার অনুসারীদের সমপরিমাণ প্রতিদান পায়, অথচ তাতে তাদের প্রতিদান বিন্দুমাত্র কমে না। এর আওতায় পড়ে একজন অভিভাবক, একজন সহকর্মী, একজন মানুষকে পাঠানো একটি বার্তা। আর তৃতীয় অংশটির একটি আধুনিক ধার আছে: 'ইন্নানী মিনাল মুসলিমীন' কথাটি উচ্চারিত হয় সরবে, উত্তম পুরুষে — এমন কারও মুখে যে নিজের পরিচয় দেওয়ার সময় চুপিসারে নিজের দ্বীনটুকু বাদ দিয়ে দেয় না।"
          }
        ]
      }
    ]
  },
  "41:34": {
    "sections": [
      {
        "h": {
          "en": "The Verse After the Call",
          "bn": "আহ্বানের পরের আয়াত"
        },
        "p": [
          {
            "en": "Surah Fussilat was revealed in Makkah, in years when calling to Allah earned mockery and harm. The verse just before this one, 41:33, asks: who is better in speech than one who calls to Allah, does righteousness and says, I am of the Muslims? Then comes this verse, and the placement is the point. It is addressed first to the caller, telling him how to answer the hostility his calling will certainly attract.",
            "bn": "সূরা ফুসসিলাত মক্কায় নাযিল হয় — এমন বছরগুলোতে, যখন আল্লাহর দিকে ডাকার পুরস্কার ছিল উপহাস ও নির্যাতন। ঠিক আগের আয়াত, 41:33, প্রশ্ন করে: কথায় তার চেয়ে উত্তম কে, যে আল্লাহর দিকে ডাকে, সৎকাজ করে এবং বলে — আমি মুসলিমদের একজন? তারপর আসে এই আয়াত, আর এই অবস্থানই মূল কথা। এটি প্রথমত সেই আহ্বানকারীকে সম্বোধন করে — তার ডাক যে শত্রুতা অবশ্যই টেনে আনবে, তার জবাব কীভাবে দিতে হবে তা শিখিয়ে।"
          },
          {
            "en": "That context saves the verse from being read as soft advice for easy days. It was given to people who were being insulted for their faith, and it told them their conduct under insult was part of the call itself. An argument can be won and a listener lost; the verse aims at winning the person, not the exchange.",
            "bn": "এই প্রেক্ষাপটই আয়াতটিকে সহজ দিনের নরম উপদেশ হিসেবে পড়া থেকে বাঁচায়। এটি দেওয়া হয়েছিল তাদের, যারা ঈমানের কারণে অপমানিত হচ্ছিল; আর এটি তাদের বলেছিল — অপমানের মুখে তাদের আচরণটাও দাওয়াতেরই অংশ। তর্কে জেতা যায়, অথচ শ্রোতাকে হারানো যায়; আয়াতটির লক্ষ্য মানুষটিকে জেতা, বাক্যবিনিময়টি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Equal, and Not Merely Good",
          "bn": "সমান নয়, কেবল ভালোও নয়"
        },
        "p": [
          {
            "en": "The verse opens with a flat statement: the good deed and the evil deed are not equal. That sounds obvious until its consequence lands — if they are not equal, then answering evil with equal evil is trading down, choosing the lesser currency. The command that follows raises the bar further: repel with that which is ahsan, better. Not merely with good, but with the better response available — patience where anger is deserved, a greeting where a slight was given.",
            "bn": "আয়াতটি শুরু হয় এক সরাসরি ঘোষণায়: ভালো কাজ আর মন্দ কাজ সমান নয়। কথাটা সাধারণ শোনায়, যতক্ষণ না এর পরিণতিটা ধরা পড়ে — সমান না হলে, মন্দের জবাব সমান মন্দ দিয়ে দেওয়া মানে নিচু মুদ্রায় নেমে যাওয়া। এরপরের আদেশ মানদণ্ড আরও ওঠায়: প্রতিহত করো তা দিয়ে যা 'আহসান' — উত্তম। কেবল ভালো দিয়ে নয়, বরং সম্ভাব্য উত্তম জবাবটি দিয়ে — যেখানে রাগ প্রাপ্য সেখানে ধৈর্য, যেখানে খোঁচা দেওয়া হয়েছে সেখানে সালাম।"
          },
          {
            "en": "The same instruction appears in 23:96, repel evil with that which is best, and in 13:22 the people of the final home are described as those who repel evil with good. Repetition across surahs marks this as method, not a one-off counsel. The Quran treats the gracious response as a tool that does work in the world — idfa, repel, is a verb of pushing something back, not of passively absorbing it.",
            "bn": "একই নির্দেশ 23:96 আয়াতে আছে — মন্দকে প্রতিহত করো তা দিয়ে যা সর্বোত্তম; আর 13:22 আয়াতে শেষ আবাসের অধিকারীদের পরিচয় দেওয়া হয়েছে — তারা মন্দকে ভালো দিয়ে প্রতিহত করে। একাধিক সূরায় এই পুনরাবৃত্তি বুঝিয়ে দেয়, এটি একটি পদ্ধতি — একবারের উপদেশ নয়। কুরআন অনুগ্রহপূর্ণ জবাবকে দেখে এমন এক হাতিয়ার হিসেবে যা দুনিয়ায় সত্যিই কাজ করে — 'ইদফা', প্রতিহত করো, শব্দটি কিছু ঠেলে ফেরানোর ক্রিয়া, নীরবে সয়ে যাওয়ার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Enemy Becomes a Warm Friend",
          "bn": "শত্রু হয়ে ওঠে অন্তরঙ্গ বন্ধু"
        },
        "p": [
          {
            "en": "Then the verse states the result: the one between whom and you is enmity will become as though he were a waliyy hamim, a devoted, warm friend. Hamim carries heat — the friend whose concern for you is warm to the touch, not polite distance. The little word kaanna, as though, is honest: the transformation can feel almost unbelievable, yet it happens. Hostility is often a fire waiting for fuel, and a better response starves it.",
            "bn": "এরপর আয়াতটি ফল ঘোষণা করে: তোমার ও যার মধ্যে শত্রুতা, সে হয়ে যাবে যেন এক 'ওয়ালিইয়ুন হামীম' — নিবেদিতপ্রাণ, উষ্ণ বন্ধু। 'হামীম' শব্দে তাপ আছে — সেই বন্ধু, তোমার জন্য যার উদ্বেগ ছুঁলে উষ্ণ লাগে; ভদ্র দূরত্ব নয়। ছোট্ট শব্দ 'কাআন্না' — যেন — সৎ স্বীকারোক্তি: এই রূপান্তর প্রায় অবিশ্বাস্য মনে হতে পারে, তবু তা ঘটে। শত্রুতা প্রায়ই জ্বালানির অপেক্ষায় থাকা আগুন, আর উত্তম জবাব সেই জ্বালানি বন্ধ করে দেয়।"
          },
          {
            "en": "Ibn Kathir and others record from the early commentators the plain reading of how this works: when a man wrongs you and you meet him with pardon and good, his own nature testifies against him, and the wrongdoer is turned. The verse does not promise that every enemy converts to friendship; it describes what the better response is capable of, and history and ordinary life both supply the examples.",
            "bn": "ইবনে কাসীর ও অন্যরা প্রাথমিক মুফাসসিরদের থেকে এর কার্যপ্রণালীর সরল পাঠটি লিপিবদ্ধ করেছেন: কেউ তোমার ওপর অন্যায় করলে তুমি যখন তাকে ক্ষমা ও কল্যাণ দিয়ে বরণ করো, তখন তার নিজের স্বভাবই তার বিরুদ্ধে সাক্ষ্য দেয়, আর অন্যায়কারী ফিরে আসে। আয়াতটি প্রতিশ্রুতি দেয় না যে প্রতিটি শত্রুই বন্ধুতে পরিণত হবে; এটি বর্ণনা করে উত্তম জবাব কী করতে সক্ষম — আর ইতিহাস ও দৈনন্দিন জীবন, দুটোই তার উদাহরণ জোগায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Can Actually Do This",
          "bn": "কে আসলে এটা পারে"
        },
        "p": [
          {
            "en": "The next verse, 41:35, immediately manages expectations: none is granted this quality except those who are patient, and none is granted it except the owner of a great portion. The Quran itself certifies the difficulty. Answering a wound with something better runs against instinct, and the verse calls the capacity a grant — yulaqqaha, something a person is given to receive — and its holder someone with hazz azim, a great share of good.",
            "bn": "পরের আয়াত, 41:35, সঙ্গে সঙ্গেই প্রত্যাশা ঠিক করে দেয়: এই গুণ কেবল তাদেরই দেওয়া হয় যারা ধৈর্যশীল, আর কেবল তাকেই দেওয়া হয় যে মহাভাগ্যের অধিকারী। কুরআন নিজেই কাজটির কাঠিন্য প্রত্যয়ন করে। আঘাতের জবাব উত্তম কিছু দিয়ে দেওয়া প্রবৃত্তির বিপরীতে চলে; আর আয়াতটি এই সামর্থ্যকে বলে এক দান — 'ইউলাক্কাহা', যা গ্রহণের জন্য মানুষকে দেওয়া হয় — এবং এর ধারককে বলে 'হাযযিন আযীম'-এর মালিক, কল্যাণের এক বিরাট অংশের অধিকারী।"
          },
          {
            "en": "Then 41:36 adds the final piece: if a provocation from Shaytan provokes you, seek refuge in Allah. The sequence is a complete anatomy of the angry moment. The insult arrives; the instinct to strike back is named as the devil's nudge, not as justice; and the remedy is not gritted teeth but isti'adhah, stepping out of the exchange and into Allah's protection. The three verses together are a training program, not a slogan.",
            "bn": "এরপর 41:36 শেষ টুকরোটি যোগ করে: শয়তানের পক্ষ থেকে কোনো প্ররোচনা তোমাকে উসকে দিলে আল্লাহর আশ্রয় চাও। এই ধারাবাহিকতা রাগের মুহূর্তের এক পূর্ণাঙ্গ ব্যবচ্ছেদ। অপমান আসে; পাল্টা আঘাতের প্রবৃত্তিকে চিহ্নিত করা হয় শয়তানের ঠেলা হিসেবে — ন্যায়বিচার হিসেবে নয়; আর প্রতিকার দাঁত কামড়ে সহ্য করা নয়, বরং 'ইস্তিআযা' — বাক্যবিনিময় থেকে বেরিয়ে আল্লাহর আশ্রয়ে ঢুকে পড়া। তিনটি আয়াত মিলে একটি প্রশিক্ষণ কর্মসূচি, কোনো স্লোগান নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Practicing the Better Answer",
          "bn": "উত্তম জবাবের অনুশীলন"
        },
        "p": [
          {
            "en": "The verse becomes real in small collisions: the curt message, the relative who needles, the colleague who takes credit. Practice starts below heroism — replying to sarcasm with plain courtesy, returning a greeting with a better one as 4:86 teaches, praying quietly for the person who irritates you most. Each repetition weakens the reflex the verse calls Shaytan's provocation and strengthens the grant it calls patience.",
            "bn": "আয়াতটি বাস্তব হয়ে ওঠে ছোট ছোট সংঘর্ষে: রুক্ষ বার্তা, খোঁচা দেওয়া আত্মীয়, কৃতিত্ব নিয়ে নেওয়া সহকর্মী। অনুশীলন শুরু হয় বীরত্বের অনেক নিচ থেকে — শ্লেষের জবাবে সাদাসিধা ভদ্রতা, সালামের জবাব আরও উত্তমভাবে ফেরানো যেমন 4:86 শেখায়, যে মানুষটি সবচেয়ে বিরক্ত করে তার জন্য নীরবে দোয়া করা। প্রতিটি পুনরাবৃত্তি সেই প্রতিবর্ত ক্রিয়াকে দুর্বল করে যাকে আয়াত বলে শয়তানের প্ররোচনা, আর সেই দানকে মজবুত করে যাকে বলে ধৈর্য।"
          },
          {
            "en": "One caution keeps the practice honest: the verse is about personal graciousness, not about abandoning justice or enabling oppression; the Quran elsewhere affirms the right of the wronged. What it removes is retaliation as a habit of the tongue and heart in daily dealings. The believer who masters that exchange rate — paying in better coin than was received — walks around with the great portion 41:35 describes, and some former enemies as proof.",
            "bn": "একটি সতর্কতা অনুশীলনটিকে সৎ রাখে: আয়াতটি ব্যক্তিগত মহানুভবতা নিয়ে — ন্যায়বিচার ছেড়ে দেওয়া বা জুলুমকে প্রশ্রয় দেওয়া নিয়ে নয়; কুরআন অন্যত্র মজলুমের অধিকার স্বীকার করেছে। এটি যা সরায় তা হলো দৈনন্দিন লেনদেনে জিহ্বা ও হৃদয়ের অভ্যাস হয়ে ওঠা প্রতিশোধ। যে মুমিন এই বিনিময় হার আয়ত্ত করে — যা পেয়েছে তার চেয়ে উত্তম মুদ্রায় শোধ করা — সে চলাফেরা করে 41:35 বর্ণিত সেই মহাভাগ্য নিয়ে, আর প্রমাণ হিসেবে সঙ্গে থাকে কিছু সাবেক শত্রু।"
          }
        ]
      }
    ]
  },
  "41:37": {
    "sections": [
      {
        "h": {
          "en": "From Refuge to the Sky",
          "bn": "আশ্রয় থেকে আকাশের দিকে"
        },
        "p": [
          {
            "en": "The verses just before this are about speech and conduct. 41:33 praised whoever calls to Allah and acts rightly, and 41:34 asked for evil to be pushed back with what is better. 41:36 then gave the remedy when a whisper from Satan stirs: seek refuge in Allah, the Hearing, the Knowing. Verse 37 lifts the eyes upward. Ibn Kathir opens on it by saying that Allah here alerts His creation to His immense power, that He has no equal, and that He is able to do whatever He wills.",
            "bn": "এর আগের আয়াতগুলো কথা আর আচরণ নিয়ে। ৪১:৩৩ আয়াত প্রশংসা করেছে সেই মানুষের, যে আল্লাহর দিকে ডাকে আর সৎ কাজ করে। ৪১:৩৪ আয়াত বলেছে মন্দকে উত্তম দিয়ে ঠেকাতে। তারপর ৪১:৩৬ আয়াত শয়তানের কুমন্ত্রণা জাগলে কী করতে হবে তা বলে দিয়েছে: আল্লাহর আশ্রয় চাও, তিনি সব শোনেন, সব জানেন। ৩৭ নম্বর আয়াত এবার চোখ তুলে দেয় উপরের দিকে। ইবন কাসীর এর আলোচনা শুরু করেন এ কথা বলে যে, আল্লাহ এখানে তাঁর সৃষ্টিকে নিজের বিশাল কুদরতের কথা মনে করিয়ে দিচ্ছেন। তাঁর কোনো তুলনা নেই, আর যা চান তা করতে তিনি সক্ষম।"
          },
          {
            "en": "The verse begins wa min ayatihi, and of His signs. The commentators fill the word with slightly different weight. Al-Qurtubi glosses the signs as marks that point to His oneness and His power. At-Tabari calls them Allah's proofs against His creation and His indications of His oneness and the greatness of His authority. As-Sa'di lists more: they show the perfection of His power, the reach of His will, the breadth of His rule, His mercy to His servants, and that He alone is God, without partner. Four signs are named, and then comes a command.",
            "bn": "আয়াতটি শুরু হয় ওয়া মিন আয়াতিহি দিয়ে: আর তাঁর নিদর্শনগুলোর মধ্যে। শব্দটার ওজন তাফসীরকারেরা একটু ভিন্নভাবে মাপেন। কুরতুবীর ব্যাখ্যায় এগুলো এমন আলামত, যা তাঁর একত্ব আর কুদরতের দিকে ইশারা করে। তাবারী এগুলোকে বলেন সৃষ্টির বিরুদ্ধে আল্লাহর দলিল, তাঁর একত্ব আর বিশাল ক্ষমতার প্রমাণ। সা'দী তালিকাটা আরও লম্বা করেন। এগুলো দেখায় তাঁর কুদরতের পূর্ণতা, তাঁর ইচ্ছার কার্যকারিতা, তাঁর রাজত্বের বিস্তার আর বান্দাদের প্রতি তাঁর রহমত। আরও দেখায় যে তিনিই একমাত্র ইলাহ, তাঁর কোনো শরিক নেই। চারটি নিদর্শনের নাম আসে, তারপর আসে একটি হুকুম।"
          }
        ]
      },
      {
        "h": {
          "en": "Two That Never Settle",
          "bn": "যে দুটি কখনো থামে না"
        },
        "p": [
          {
            "en": "The first pair is the night and the day. Ibn Kathir describes them as Allah creating the night with its darkness and the day with its brightness, two that follow each other in turn and never stay still. At-Tabari puts the sign in their difference and in each one taking over from the other. He then folds in words from 36:40: the sun does not catch up with the moon, nor does the night outrun the day, and each swims in its own orbit. The sign is the order as much as the light.",
            "bn": "প্রথম জোড়া রাত আর দিন। ইবন কাসীর বলেন, আল্লাহ রাতকে সৃষ্টি করেছেন তার অন্ধকার দিয়ে, আর দিনকে তার আলো দিয়ে। দুটি পালা করে একটার পর আরেকটা আসে, কোনোটাই থেমে থাকে না। তাবারী নিদর্শনটা খোঁজেন এদের ভিন্নতায়, আর একটার জায়গা আরেকটার নিয়ে নেওয়ায়। তারপর তিনি ৩৬:৪০ আয়াতের কথা জুড়ে দেন: সূর্য চাঁদকে ধরতে পারে না, রাতও দিনকে ছাড়িয়ে যেতে পারে না, প্রত্যেকে নিজ কক্ষপথে সাঁতার কাটে। তাই নিদর্শন শুধু আলো নয়, এই শৃঙ্খলাও।"
          },
          {
            "en": "As-Sa'di turns the pair toward the people who live inside it. The day carries the benefit of its light, in which servants go about their work, and the night the benefit of its darkness, in which creation grows still and rests. The sign is a provision as well as a spectacle. The Muyassar adds the frame that will matter in a moment: the alternation of night and day, and of sun and moon, is all under His subjection and His command. Nothing in the pair runs on its own authority.",
            "bn": "সা'দী জোড়াটাকে দেখেন তাদের দিক থেকে, যারা এর ভেতরে বাস করে। দিনের উপকার তার আলোয়, যেখানে বান্দারা কাজকর্ম করে। রাতের উপকার তার অন্ধকারে, যেখানে সৃষ্টি শান্ত হয়ে বিশ্রাম নেয়। ফলে নিদর্শনটা শুধু দেখার দৃশ্য নয়, জীবিকারও উপকরণ। মুয়াসসার একটা কাঠামো যোগ করে, যা একটু পরেই কাজে লাগবে। রাত-দিনের পালাবদল, সূর্য-চাঁদের আসা-যাওয়া, সবই তাঁর বশে আর তাঁর হুকুমের অধীনে। এ জোড়ার কোনো কিছুই নিজের ক্ষমতায় চলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Lamps That Keep the Calendar",
          "bn": "যে বাতি পঞ্জিকা ধরে রাখে"
        },
        "p": [
          {
            "en": "The second pair is the sun and the moon. Ibn Kathir dwells on the moon: its light, the stations measured out for it in its orbit, and the way its course shifts across the sky. Through the varying courses of moon and sun, he says, people know the measures of night and day, of weeks, months and years. By that the dates of rights falling due become clear, along with the times of worship and of dealings between people. The sky, read this way, is a calendar for obligations as well as a lamp.",
            "bn": "দ্বিতীয় জোড়া সূর্য আর চাঁদ। ইবন কাসীর চাঁদের কথা বিশেষ করে বলেন: তার আলো, কক্ষপথে তার জন্য মেপে রাখা মনজিলগুলো, আর আকাশে তার চলার পথের বদল। তাঁর মতে চাঁদ আর সূর্যের চলার এই ভিন্নতা থেকেই মানুষ রাত-দিন, সপ্তাহ, মাস আর বছরের হিসাব জানে। এতে স্পষ্ট হয় কখন কার হক পাওনা হলো, কখন ইবাদতের সময় আর কখন লেনদেনের। এভাবে পড়লে আকাশ শুধু বাতি নয়, দায়দায়িত্বের পঞ্জিকাও।"
          },
          {
            "en": "As-Sa'di widens the circle. The livelihoods of people cannot stand without the sun and moon, he writes, nor can their bodies, nor the bodies of their animals, and the benefits in the two are beyond counting. Then Ibn Kathir names the reason the warning comes next. Because the sun and moon are the most beautiful bodies to be seen in the upper and lower world, Allah points out that they are created things, two servants among His servants, under His compulsion and subjection. The greater the gift, the easier it is to bow to the gift.",
            "bn": "সা'দী পরিধিটা আরও বড় করেন। তিনি লেখেন, সূর্য-চাঁদ ছাড়া মানুষের জীবিকা টেকে না, তাদের শরীরও না, তাদের পশুদের শরীরও না। এ দুটিতে যত কল্যাণ, তা গুনে শেষ করা যায় না। এরপর ইবন কাসীর বলেন সতর্কবাণীটা কেন ঠিক এখানেই আসে। উপরের আর নিচের জগতে চোখে পড়া সব বস্তুর মধ্যে সূর্য আর চাঁদ সবচেয়ে সুন্দর। তাই আল্লাহ জানিয়ে দেন, এরা সৃষ্ট বস্তু, তাঁর বান্দাদের মধ্যে দুই বান্দা, তাঁর ক্ষমতা আর বশ্যতার অধীন। দান যত বড়, দানের সামনেই মাথা নুইয়ে ফেলার ঝুঁকি তত বেশি।"
          }
        ]
      },
      {
        "h": {
          "en": "They Run Because They Are Run",
          "bn": "চলে, কারণ চালানো হয়"
        },
        "p": [
          {
            "en": "La tasjudu lish-shamsi wa la lil-qamar: do not prostrate to the sun, nor to the moon. At-Tabari reads it as spoken to people at large, and he gives the reason at once. The two run in their orbit for your benefit, he says, but they run only because Allah makes them run for you, and they obey Him in their course. They have no power of their own to travel without Him moving them. Nor can they bring you any benefit or any harm by themselves.",
            "bn": "লা তাসজুদু লিশ-শামসি ওয়া লা লিল-কামার: সূর্যকে সেজদা করো না, চাঁদকেও না। তাবারী এটাকে পড়েন সাধারণভাবে সব মানুষকে বলা কথা হিসেবে, আর কারণটাও সঙ্গে সঙ্গে বলে দেন। দুটি কক্ষপথে চলে তোমাদের উপকারের জন্য, ঠিক। কিন্তু চলে কেবল এ কারণে যে আল্লাহ এদের তোমাদের জন্য চালান, আর চলার পথে এরা তাঁরই আনুগত্য করে। তিনি না চালালে নিজে নিজে চলার কোনো ক্ষমতা এদের নেই। নিজের পক্ষ থেকে তোমাদের কোনো উপকার বা ক্ষতি করার সাধ্যও নেই।"
          },
          {
            "en": "At-Tabari closes the thought with a picture. Allah subjected the two to you for your benefit and your welfare, so prostrate to Him and worship Him rather than them, for if He willed He would blot out their light and leave you bewildered in darkness, finding no path and seeing nothing. Al-Qurtubi argues the same way. Whatever the two are as creations, he says, they have no merit in themselves that would earn them worship beside Allah, because their Creator is Allah, and if He willed He would end them or put out their light.",
            "bn": "তাবারী ভাবনাটা শেষ করেন একটা ছবি দিয়ে। আল্লাহ এ দুটিকে তোমাদের উপকার আর কল্যাণের জন্য বশ করে দিয়েছেন। তাই সেজদা করো তাঁকে, ইবাদত করো তাঁর, এদের নয়। তিনি চাইলে এদের আলো মুছে দিতেন, আর তোমরা অন্ধকারে দিশেহারা হয়ে থাকতে, না পথ খুঁজে পেতে, না কিছু দেখতে। কুরতুবীর যুক্তিও একই ধারায়। তাঁর কথায়, সৃষ্টি হিসেবে এরা যা-ই হোক, নিজেদের এমন কোনো মর্যাদা নেই যার জোরে আল্লাহর পাশাপাশি ইবাদত পাওয়ার যোগ্য হবে। কারণ এদের স্রষ্টা আল্লাহ। তিনি চাইলে এদের বিলীন করে দিতেন বা এদের আলো নিভিয়ে দিতেন।"
          },
          {
            "en": "As-Sa'di compresses it into three words: the two are governed, subjected and created; the Muyassar uses two of them, governed and created. As-Sa'di then draws the general rule. Worship Him alone, for He is the great Creator, and leave the worship of every created thing, however large its body and however many its benefits, because that good does not come from the thing itself; it comes from its Creator. The warning lands on the very objects whose usefulness is plainest. What helps most is the thing most likely to be mistaken for its source.",
            "bn": "সা'দী কথাটাকে তিনটি শব্দে গুটিয়ে আনেন: এ দুটি পরিচালিত, বশীভূত আর সৃষ্ট। মুয়াসসার এর দুটি শব্দ নেয়: পরিচালিত আর সৃষ্ট। সা'দী এরপর একটা সাধারণ নিয়ম টানেন। শুধু তাঁরই ইবাদত করো, কারণ তিনিই মহান স্রষ্টা। সৃষ্ট সব কিছুর ইবাদত ছেড়ে দাও, তার আকার যত বড় আর উপকার যত বেশিই হোক। কারণ সেই কল্যাণ জিনিসটার নিজের নয়, তার স্রষ্টার পক্ষ থেকে আসে। লক্ষ করার মতো, সতর্কবাণীটা পড়েছে ঠিক সেই জিনিসগুলোর উপর, যাদের উপকার সবচেয়ে স্পষ্ট। যা সবচেয়ে বেশি কাজে লাগে, তাকেই উৎস ভেবে ভুল করার আশঙ্কা সবচেয়ে বেশি।"
          }
        ]
      },
      {
        "h": {
          "en": "One Pronoun for Four Signs",
          "bn": "চার নিদর্শনের এক সর্বনাম"
        },
        "p": [
          {
            "en": "Wasjudu lillahi alladhi khalaqahunna: and prostrate to Allah who created them. The pronoun -hunna is a feminine plural, though the nouns before it are a mixed group. At-Tabari explains both features. It is plural because what is meant is the night, the day, the sun and the moon together. It is feminine because the Arabs, speaking of plural things that are not human, often use the feminine, as in a sentence he quotes: I saw garments with 'Amr, and I took them, akhadhtuhunna, from him.",
            "bn": "ওয়াসজুদু লিল্লাহিল্লাযী খালাকাহুন্না: আর সেজদা করো আল্লাহকে, যিনি এদের সৃষ্টি করেছেন। এখানে -হুন্না সর্বনামটি স্ত্রীলিঙ্গ বহুবচন, অথচ আগের বিশেষ্যগুলো মেশানো। তাবারী দুটো দিকই ব্যাখ্যা করেন। বহুবচন, কারণ উদ্দেশ্য রাত, দিন, সূর্য আর চাঁদ, চারটি একসঙ্গে। আর স্ত্রীলিঙ্গ, কারণ মানুষ নয় এমন জিনিসের বহুবচনে আরবরা প্রায়ই স্ত্রীলিঙ্গ ব্যবহার করে। তিনি একটা নমুনা বাক্য আনেন: আমি আমরের কাছে কিছু কাপড় দেখলাম, আর সেগুলো তার কাছ থেকে নিয়ে নিলাম। এখানে 'সেগুলো' বোঝাতে আরবিতে আসে আখাযতুহুন্না।"
          },
          {
            "en": "Al-Qurtubi records three views on what the pronoun points back to: all four signs; the sun and moon alone, on the ground that two can be treated as a plural; or the sense of the word signs itself. On the form he agrees with al-Baghawi. Both say the feminine follows the pattern of the broken plural, and does not apply the usual rule of letting the masculine prevail in a mixed group, since these are not beings with reason. Either way, the verb fixes the point: He created each of them.",
            "bn": "সর্বনামটি কার দিকে ফিরছে, এ নিয়ে কুরতুবী তিনটি মত উল্লেখ করেন। এক, চারটি নিদর্শনের দিকেই। দুই, শুধু সূর্য আর চাঁদের দিকে, কারণ দুটিকেও বহুবচন ধরা যায়। তিন, খোদ 'নিদর্শন' শব্দের অর্থের দিকে। রূপের প্রশ্নে কুরতুবী আর বাগাভী একমত। দুজনেই বলেন, স্ত্রীলিঙ্গটা ভাঙা বহুবচনের ধাঁচ মেনে এসেছে। মিশ্র দলে পুরুষবাচককে প্রাধান্য দেওয়ার সাধারণ নিয়ম এখানে খাটেনি, কারণ এরা বুদ্ধিসম্পন্ন সত্তা নয়। যে মতই ধরা হোক, ক্রিয়াপদটি আসল কথাটা পাকা করে দেয়: এদের প্রত্যেককে তিনিই সৃষ্টি করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "If It Is Him You Worship",
          "bn": "যদি সত্যিই তাঁরই ইবাদত করো"
        },
        "p": [
          {
            "en": "The verse ends on a condition: in kuntum iyyahu ta'budun, if it is Him you worship. At-Tabari spells out what the condition carries. If you worship Allah and humble yourselves to Him in obedience, then part of that obedience is to keep worship purely His and to share it with nothing else, because worship suits no one but Him. The Muyassar reads it as: if you are truly yielding to His command, hearing and obeying, worshipping Him alone. As-Sa'di says simply: then single Him out for worship and sincere devotion.",
            "bn": "আয়াতটি শেষ হয় একটা শর্তে: ইন কুনতুম ইয়্যাহু তা'বুদূন, যদি তোমরা তাঁরই ইবাদত করো। শর্তটার ভেতরে কী আছে, তাবারী তা খুলে বলেন। তোমরা যদি আল্লাহর ইবাদত করো আর আনুগত্যে তাঁর সামনে বিনীত হও, তবে সেই আনুগত্যের অংশ হলো ইবাদতকে খাঁটিভাবে তাঁর জন্য রাখা, তাতে আর কাউকে শরিক না করা। কারণ ইবাদত তিনি ছাড়া আর কারও জন্য মানায় না। মুয়াসসারের পাঠে: যদি সত্যিই তোমরা তাঁর হুকুমের অনুগত হও, শোনো আর মানো, শুধু তাঁরই ইবাদত করো। সা'দীর কথা সংক্ষিপ্ত: তাহলে ইবাদত আর দ্বীনের ইখলাস শুধু তাঁর জন্যই নির্দিষ্ট করো।"
          },
          {
            "en": "Ibn Kathir names what the condition rules out: do not associate anything with Him, for your worship of Him will not profit you while you worship others with Him, since He does not forgive that partners be set up beside Him, words found in 4:48. None of the commentators fetched here names a particular people who bowed to the sun or the moon; at-Tabari reads the address as to people at large. The verse states what it states about such prostration, and it licenses nothing against any living person or community.",
            "bn": "শর্তটা কী বাদ দেয়, ইবন কাসীর তা বলে দেন: তাঁর সঙ্গে কিছুকে শরিক করো না। কারণ তাঁর পাশাপাশি অন্যের ইবাদত করলে তাঁর ইবাদত তোমাদের কোনো কাজে আসবে না, তিনি তাঁর সঙ্গে শরিক করা ক্ষমা করেন না। শেষ কথাটা ৪:৪৮ আয়াতের শব্দ। এখানে যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই সূর্য বা চাঁদকে সেজদা করত এমন নির্দিষ্ট কোনো জাতির নাম বলেনি। তাবারী সম্বোধনটা পড়েন সাধারণভাবে সব মানুষের প্রতি। এমন সেজদা সম্পর্কে আয়াত যা বলে তা-ই বলে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Bow Kept for One",
          "bn": "যে সেজদা শুধু একজনের"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws a ruling from the verse: prostration is the right of the Creator alone. It reports the consensus of the Ummah that prostrating before any star, human being or the like is forbidden, whether as worship or as a gesture of respect. The difference it records is in the verdict on the person. Whoever prostrates to other than Allah intending worship becomes a disbeliever. Whoever does it only as a mark of respect is not called a disbeliever, but has committed a grave forbidden act and is a sinner.",
            "bn": "মাআরিফুল কুরআন এ আয়াত থেকে একটা বিধান বের করে: সেজদা কেবল স্রষ্টারই হক। উম্মাহর ইজমা হিসেবে এতে বলা হয়েছে, কোনো তারা, মানুষ বা এমন কিছুর সামনে সেজদা করা হারাম, ইবাদতের নিয়তে হোক বা সম্মান দেখাতে। পার্থক্যটা শুধু ব্যক্তির হুকুমে। আল্লাহ ছাড়া অন্য কাউকে ইবাদতের নিয়তে সেজদা করলে সে কাফির হয়ে যায়। আর শুধু সম্মান দেখাতে করলে তাকে কাফির বলা হয় না, তবে সে কঠিন হারাম কাজ করেছে এবং গুনাহগার।"
          },
          {
            "en": "It goes on to separate two kinds of prostration. Prostration of worship to any being besides Allah, it says, was never lawful in the law given to any prophet, because it is shirk. Prostration of greeting and respect was allowed in some earlier laws, and it cites the angels before Adam (AS) and the father and brothers of Yusuf (AS) before him. The jurists of this Ummah, it says, agree that this was particular to those earlier laws and stands abrogated in Islam, so any prostration to other than Allah is now forbidden.",
            "bn": "এরপর মাআরিফুল কুরআন দুই ধরনের সেজদা আলাদা করে। আল্লাহ ছাড়া অন্য কোনো সত্তাকে ইবাদতের সেজদা কোনো নবীর শরিয়তে কখনো বৈধ ছিল না, কারণ তা শিরক। তবে অভিবাদন আর সম্মানের সেজদা আগের কিছু শরিয়তে বৈধ ছিল। এর উদাহরণ হিসেবে আনা হয়েছে আদম (আঃ)-এর সামনে ফেরেশতাদের সেজদা, আর ইউসুফ (আঃ)-এর সামনে তাঁর পিতা ও ভাইদের সেজদা। মাআরিফুল কুরআন বলে, এ উম্মাহর ফকীহরা একমত যে এটা আগের শরিয়তগুলোতেই সীমাবদ্ধ ছিল, ইসলামে তা রহিত। তাই এখন আল্লাহ ছাড়া কারও জন্য যেকোনো সেজদা হারাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Forehead Goes Down",
          "bn": "কোথায় কপাল মাটিতে নামে"
        },
        "p": [
          {
            "en": "Al-Qurtubi notes that this is a verse of prostration without dispute, but that scholars differed over the exact place to prostrate. Malik placed it at in kuntum iyyahu ta'budun, the end of verse 37, because it is joined to the command to prostrate, and 'Ali and Ibn Mas'ud (RA) and others used to prostrate at ta'budun. Ibn Wahb and ash-Shafi'i placed it at wa hum la yas'amun, the end of 41:38, because there the speech is complete and worship reaches its fullest; Abu Hanifa held the same, and Ibn 'Abbas (RA) used to prostrate at yas'amun.",
            "bn": "কুরতুবী জানান, এটি যে সেজদার আয়াত তাতে কোনো মতভেদ নেই। মতভেদ হয়েছে ঠিক কোন জায়গায় সেজদা করতে হবে তা নিয়ে। মালিকের মতে জায়গাটা ইন কুনতুম ইয়্যাহু তা'বুদূন, অর্থাৎ ৩৭ নম্বর আয়াতের শেষে, কারণ এটি সেজদার হুকুমের সঙ্গে লাগানো। আলী (রাঃ), ইবন মাসউদ (রাঃ) ও আরও কেউ কেউ তা'বুদূন-এ পৌঁছে সেজদা করতেন। ইবন ওয়াহব আর শাফিঈর মতে জায়গাটা ওয়া হুম লা ইয়াসআমূন, অর্থাৎ ৪১:৩৮ আয়াতের শেষে। কারণ সেখানে কথা পূর্ণ হয়, আর ইবাদত ও আনুগত্যের চূড়ান্ত রূপ সেখানেই। আবু হানীফাও এ মত দেন, আর ইবন আব্বাস (রাঃ) ইয়াসআমূন-এ সেজদা করতেন।"
          },
          {
            "en": "Al-Qurtubi goes on. Ibn 'Umar (RA) said to prostrate at the later of the two, and the same is reported from Masruq, Ibrahim an-Nakha'i, al-Hasan, Ibn Sirin and others he names; Abu Wa'il, Qatada and Bakr ibn 'Abdullah prostrated at yas'amun. He closes the question with a remark from Ibn al-'Arabi: the matter is close. The text of the mushaf shown here sets the sajda sign at the end of 41:38. Both positions stand as al-Qurtubi records them, and this article does not choose between them.",
            "bn": "কুরতুবী আরও বলেন, ইবন উমর (রাঃ) দুটির মধ্যে পরেরটিতে সেজদা করতে বলেছেন। মাসরূক, ইবরাহীম নাখঈ, হাসান, ইবন সীরীন এবং তাঁর উল্লেখ করা আরও কয়েকজন থেকে একই কথা বর্ণিত। আবু ওয়াইল, কাতাদা আর বকর ইবন আব্দুল্লাহ ইয়াসআমূন-এ সেজদা করতেন। প্রশ্নটা তিনি শেষ করেন ইবনুল আরাবীর একটি মন্তব্য দিয়ে: ব্যাপারটা কাছাকাছি। এখানে দেখানো মুসহাফের পাঠে সেজদার চিহ্ন বসানো আছে ৪১:৩৮ আয়াতের শেষে। কুরতুবী যেভাবে দুটি মত লিখেছেন, দুটিই সেভাবে রইল। এ লেখা কোনোটির পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Sun Darkens",
          "bn": "যখন সূর্য অন্ধকার হয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi relays a further point, from Ibn Khuwayz Mindad: that this verse includes the prayer for an eclipse of the sun and moon, since the Arabs used to say the sun and moon eclipse only for the death of someone great, and the Prophet ﷺ prayed the eclipse prayer. Al-Qurtubi adds that the eclipse prayer is established in the Sahih collections of al-Bukhari, Muslim and others, that its manner was much disputed because the reports differ, and that Sahih Muslim is the main reference on it. None of the commentators fetched here attaches a particular hadith to this verse.",
            "bn": "কুরতুবী আরেকটি কথা আনেন ইবন খুওয়াইয মিনদাদ থেকে: এ আয়াতে সূর্য ও চন্দ্রগ্রহণের নামাজের কথাও আছে। কারণ আরবরা বলত, বড় কোনো মানুষের মৃত্যু ছাড়া সূর্য-চাঁদে গ্রহণ লাগে না, আর নবী ﷺ গ্রহণের নামাজ পড়েছিলেন। কুরতুবী যোগ করেন, গ্রহণের নামাজ বুখারী, মুসলিম ও অন্যান্য সহীহ গ্রন্থে প্রমাণিত। তবে বর্ণনাগুলো ভিন্ন হওয়ায় এর পদ্ধতি নিয়ে অনেক মতভেদ হয়েছে, আর এ বিষয়ে মূল ভরসা সহীহ মুসলিম। এখানে দেখা কোনো তাফসীর এ আয়াতের সঙ্গে নির্দিষ্ট কোনো হাদীস জুড়ে দেয়নি।"
          },
          {
            "en": "A general narration on eclipses, which no commentator fetched here ties to this verse, is in Sahih al-Bukhari (1041). Abu Mas'ud (RA) said that the Prophet ﷺ said: 'The sun and the moon do not eclipse for the death of anyone among the people, but they are two signs among the signs of Allah; so when you see them, stand and pray.' Al-Bukhari gives it no grading beyond placing it in his Sahih. It uses the verse's own word, signs, and when the light falters it sends the believer to prayer.",
            "bn": "গ্রহণ নিয়ে একটি সাধারণ বর্ণনা আছে সহীহ বুখারীতে (১০৪১)। এখানে দেখা কোনো তাফসীর একে এ আয়াতের সঙ্গে যুক্ত করেনি। আবু মাসউদ (রাঃ) বলেন, নবী ﷺ বলেছেন: 'কোনো মানুষের মৃত্যুর কারণে সূর্য আর চাঁদে গ্রহণ লাগে না। বরং এ দুটি আল্লাহর নিদর্শনগুলোর মধ্যে দুটি নিদর্শন। তাই যখন এ দুটিকে দেখবে, দাঁড়িয়ে যাও আর নামাজ পড়ো।' নিজের সহীহ গ্রন্থে রাখা ছাড়া বুখারী এর আলাদা কোনো মান উল্লেখ করেননি। বর্ণনাটি আয়াতেরই শব্দ ব্যবহার করে, নিদর্শন। আর আলো যখন ম্লান হয়, তখন মুমিনকে পাঠিয়ে দেয় নামাজে।"
          }
        ]
      }
    ]
  },
  "41:53": {
    "sections": [
      {
        "h": {
          "en": "A Promise in Future Tense",
          "bn": "ভবিষ্যৎ কালের প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Sanurihim ayatina — We will show them Our signs — in the horizons and within themselves, until it becomes clear to them that it is the truth. The verb is future and continuous: not signs already sealed in a completed list, but a showing that goes on. Every generation, the verse promises, will be shown enough — in the world it explores and the self it inhabits — for the truth of the revelation to stand clear.",
            "bn": "সানুরীহিম আয়াতিনা — আমি তাদের আমার নিদর্শনগুলো দেখাব — দিগন্তসমূহে এবং তাদের নিজেদের মধ্যে, যতক্ষণ না তাদের কাছে স্পষ্ট হয় যে এটিই সত্য। ক্রিয়াটি ভবিষ্যৎ ও চলমান: সম্পূর্ণ হয়ে যাওয়া কোনো তালিকায় সিলমোহর পড়া নিদর্শন নয়, বরং এমন এক দেখানো যা চলতেই থাকে। আয়াতের প্রতিশ্রুতি: প্রতিটি প্রজন্মকে যথেষ্ট দেখানো হবে — যে জগৎ সে অনুসন্ধান করে আর যে সত্তায় সে বাস করে, দুটিতেই — যাতে ওহীর সত্যতা স্পষ্ট দাঁড়িয়ে যায়।"
          },
          {
            "en": "The pronoun in that it is the truth points, the commentators say, to the Quran and the message it carries. The verse thus makes a bold wager: reality itself, honestly examined at any depth, will keep agreeing with the Book. Signs do not replace revelation and revelation does not fear signs; each points at the other, and the showing continues until the seeing is complete.",
            "bn": "এটিই সত্য — এই বাক্যের সর্বনামটি, মুফাসসিরগণ বলেন, নির্দেশ করে কুরআন ও তার বহন করা বার্তাকে। আয়াতটি তাই এক সাহসী বাজি রাখে: বাস্তবতা নিজে, যে গভীরতাতেই সততার সঙ্গে পরীক্ষা করা হোক, কিতাবের সঙ্গে একমত হতেই থাকবে। নিদর্শন ওহীর জায়গা নেয় না, ওহীও নিদর্শনকে ভয় পায় না; প্রত্যেকে অন্যটির দিকে ইশারা করে, আর দেখা সম্পূর্ণ না হওয়া পর্যন্ত দেখানো চলতে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Horizons",
          "bn": "দিগন্তসমূহে নিদর্শন"
        },
        "p": [
          {
            "en": "Al-afaq, the horizons, was read two ways by the mufassirun, and both readings stand. Some took it as the regions of the earth — the early hearers would live to see the message reach lands they could not name, itself a sign that this word was not an ordinary word. Others took it as the horizons in the plainest sense: the sky and its order, the alternation that 2:164 and 3:190 keep pointing at from their own angles.",
            "bn": "আল-আফাক — দিগন্তসমূহ — মুফাসসিরগণ দুইভাবে পড়েছেন, এবং দুটি পাঠই টিকে থাকে। কেউ কেউ একে নিয়েছেন পৃথিবীর অঞ্চলসমূহ অর্থে — প্রথম শ্রোতারা বেঁচে থেকেই দেখবে এই বার্তা এমন সব ভূখণ্ডে পৌঁছেছে যাদের নামও তারা জানত না, যা নিজেই এক নিদর্শন যে এই বাণী সাধারণ বাণী নয়। অন্যরা নিয়েছেন সরলতম অর্থে দিগন্ত: আকাশ ও তার শৃঙ্খলা — যে আবর্তনের দিকে 2:164 ও 3:190 নিজ নিজ কোণ থেকে বারবার ইশারা করে।"
          },
          {
            "en": "On either reading the instruction to the reader is the same: look outward, and look as one expecting evidence. The Quran repeatedly commands the looking — 10:101 says, observe what is in the heavens and the earth — and treats the cosmos not as scenery but as speech: ayat, signs, the very word used for the Book's own verses. Scholars have long put it this way: creation and revelation are two books of one Author, each vouching for the other.",
            "bn": "যে পাঠই নিন, পাঠকের প্রতি নির্দেশ একই: বাইরে তাকান, এবং তাকান প্রমাণের প্রত্যাশী হয়ে। কুরআন বারবার তাকানোর আদেশ দেয় — 10:101 বলে, দেখো আসমান ও যমীনে কী আছে — আর মহাজগৎকে গণ্য করে দৃশ্যপট নয়, বাণী হিসেবে: আয়াত, নিদর্শন — ঠিক সেই শব্দ যা কিতাবের নিজের বাক্যগুলোর জন্যও ব্যবহৃত। আলিমগণ বহুদিন ধরেই কথাটি এভাবে বলেছেন: সৃষ্টি ও ওহী এক লেখকেরই দুই কিতাব — প্রত্যেকে অন্যটির সাক্ষ্য দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "And Within Themselves",
          "bn": "এবং নিজেদের মধ্যে"
        },
        "p": [
          {
            "en": "Wa fi anfusihim — and within their own selves. The commentators point to the body's construction, from a drop to hearing, sight and reasoning; to the sustenance and turning of hearts; and to what a person witnesses of Allah's dealings in his own life. 51:20-21 issues the same double summons: on the earth are signs for the certain, and within yourselves — do you not see?",
            "bn": "ওয়া ফী আনফুসিহিম — এবং তাদের নিজেদের মধ্যে। মুফাসসিরগণ ইঙ্গিত করেন দেহের নির্মাণের দিকে — এক বিন্দু থেকে শ্রবণ, দৃষ্টি ও বিবেক পর্যন্ত; হৃদয়ের রিযিক ও তার মোড় ফেরার দিকে; আর নিজের জীবনে আল্লাহর কার্যধারার যা কিছু মানুষ প্রত্যক্ষ করে তার দিকে। 51:20-21 একই দ্বৈত আহ্বান জারি করে: যমীনে নিদর্শন আছে দৃঢ় বিশ্বাসীদের জন্য, আর তোমাদের নিজেদের মধ্যেও — তোমরা কি দেখো না?"
          },
          {
            "en": "The inward sign has a special force the outward lacks: you cannot dismiss it as someone else's report. Whoever has watched their own heart shift from despair to tranquillity after du'a, or traced how they were carried through what should have broken them, has been shown a sign in the first person. The self is the one witness no sceptic can claim was somewhere else.",
            "bn": "অন্তর্গত নিদর্শনের এমন এক জোর আছে যা বাইরেরটির নেই: একে অন্য কারও প্রতিবেদন বলে উড়িয়ে দেওয়া যায় না। যে নিজের হৃদয়কে দোয়ার পরে হতাশা থেকে প্রশান্তিতে সরে যেতে দেখেছে, কিংবা খুঁজে দেখেছে কীভাবে তাকে পার করিয়ে নেওয়া হয়েছে এমন কিছুর ভেতর দিয়ে যা তাকে ভেঙে ফেলার কথা ছিল — তাকে নিদর্শন দেখানো হয়েছে একেবারে নিজের জবানে। নিজ সত্তা এমন এক সাক্ষী, কোনো সংশয়বাদী যার সম্পর্কে বলতে পারে না যে সে অন্য কোথাও ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Until It Becomes Clear",
          "bn": "যতক্ষণ না স্পষ্ট হয়"
        },
        "p": [
          {
            "en": "Hatta yatabayyana lahum — until it becomes clear to them. Clarity, in the Quran's account, arrives cumulatively: sign upon sign, outer and inner agreeing, until denial requires more effort than acceptance. This is how 2:164 works, piling the heavens, the rain, the ships and the winds into one verse for a people who reason, and how 3:190-191 describes the thinkers whom the alternation of night and day leads to: our Lord, You did not create this in vain.",
            "bn": "হাত্তা ইয়াতাবাইয়ানা লাহুম — যতক্ষণ না তাদের কাছে স্পষ্ট হয়। কুরআনের বিবরণে স্পষ্টতা আসে স্তরে স্তরে: নিদর্শনের ওপর নিদর্শন, বাহির ও ভেতর একমত হতে হতে, যতক্ষণ না অস্বীকারে গ্রহণের চেয়ে বেশি পরিশ্রম লাগে। 2:164 এভাবেই কাজ করে — আসমান, বৃষ্টি, জাহাজ আর বাতাসকে এক আয়াতে স্তূপ করে, বোঝে এমন জাতির জন্য; আর 3:190-191 বর্ণনা করে সেই চিন্তাশীলদের, রাত-দিনের আবর্তন যাদের পৌঁছে দেয় এই কথায়: আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি।"
          },
          {
            "en": "Note what the verse does not promise: that signs will force belief. Clarity can be shown and still refused; the Quran describes people who saw and turned away. The promise is about the evidence, not the verdict — Allah undertakes that the case will be made plain, and leaves the response where He always leaves it, with the one who has been shown.",
            "bn": "লক্ষ করুন আয়াতটি কী প্রতিশ্রুতি দেয় না: নিদর্শন ঈমান জোর করে আদায় করবে — এমন নয়। স্পষ্টতা দেখানো হতে পারে, তবু প্রত্যাখ্যাত হতে পারে; কুরআন এমন মানুষদের বর্ণনা দেয় যারা দেখেও মুখ ফিরিয়েছে। প্রতিশ্রুতিটি প্রমাণ নিয়ে, রায় নিয়ে নয় — আল্লাহ দায়িত্ব নেন যে মামলাটি সুস্পষ্ট করা হবে, আর জবাবটুকু রেখে দেন যেখানে তিনি সবসময় রাখেন: যাকে দেখানো হয়েছে, তার হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Witness Over All Things",
          "bn": "সবকিছুর সাক্ষী"
        },
        "p": [
          {
            "en": "The verse closes above the whole argument: is it not sufficient concerning your Lord that He is, over all things, a Witness? After horizons and selves, the final ground of certainty is not an object but a presence. He does not merely leave traces to be deciphered; He witnesses everything, including the deciphering, including the doubter mid-doubt. For hearts far along the road, this is the deepest proof: knowing themselves seen.",
            "bn": "আয়াতটি শেষ হয় পুরো যুক্তির ঊর্ধ্বে উঠে: আপনার রবের ব্যাপারে কি এটুকু যথেষ্ট নয় যে তিনি সবকিছুর ওপর সাক্ষী? দিগন্ত ও নিজ সত্তার পরে নিশ্চয়তার চূড়ান্ত ভিত্তি কোনো বস্তু নয়, এক উপস্থিতি। তিনি কেবল পাঠোদ্ধারের জন্য চিহ্ন রেখে যান না; তিনি সবকিছু প্রত্যক্ষ করেন — পাঠোদ্ধারটিসহ, সংশয়ের মাঝখানে থাকা সংশয়ীসহ। পথের অনেকটা এগিয়ে যাওয়া হৃদয়ের কাছে এটিই গভীরতম প্রমাণ: নিজেকে দেখা-হচ্ছে জানা।"
          },
          {
            "en": "The commentators hear in the closing question a gentle relocation of the whole search. Signs are for our benefit, not His need; He was never absent for evidence to establish. So the reflective reader holds both: study the signs gratefully, and remember that the One they point to is nearer than the pointing, a Witness over the very heart that is weighing Him.",
            "bn": "সমাপ্তির প্রশ্নটিতে মুফাসসিরগণ শোনেন গোটা অনুসন্ধানের এক কোমল স্থানবদল। নিদর্শন আমাদের উপকারের জন্য, তাঁর প্রয়োজনে নয়; তিনি কখনো অনুপস্থিত ছিলেন না যে প্রমাণ দিয়ে তাঁকে প্রতিষ্ঠা করতে হবে। তাই চিন্তাশীল পাঠক দুটিই ধরে রাখে: কৃতজ্ঞতার সঙ্গে নিদর্শন অধ্যয়ন করে, আর মনে রাখে — সেগুলো যাঁর দিকে ইশারা করে তিনি ইশারার চেয়েও নিকটে, সেই হৃদয়টিরও সাক্ষী, যে হৃদয় তাঁকে ওজন করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Training the Eye",
          "bn": "দৃষ্টির অনুশীলন"
        },
        "p": [
          {
            "en": "The verse turns observation into worship. Walk under the night sky deliberately; learn one thing about how your own hand or eye works; watch a season turn — and each time, complete the loop the Quran commands, from the wonder to its Maker. Without the loop, wonder decays into mere information; with it, an ordinary walk becomes what 3:191 describes, remembrance standing, sitting and lying down.",
            "bn": "আয়াতটি পর্যবেক্ষণকে ইবাদতে পরিণত করে। ইচ্ছা করেই রাতের আকাশের নিচে হাঁটুন; নিজের হাত বা চোখ কীভাবে কাজ করে তার একটি বিষয় শিখুন; একটি ঋতুর মোড় ফেরা দেখুন — আর প্রতিবার কুরআনের আদেশ করা বৃত্তটি সম্পূর্ণ করুন: বিস্ময় থেকে বিস্ময়ের নির্মাতা পর্যন্ত। বৃত্তটি ছাড়া বিস্ময় ক্ষয়ে যায় নিছক তথ্যে; বৃত্তটিসহ একটি সাধারণ হাঁটাও হয়ে ওঠে যা 3:191 বর্ণনা করে — দাঁড়িয়ে, বসে ও শুয়ে স্মরণ।"
          },
          {
            "en": "And keep the promise's tense in mind during dry seasons of faith. We will show them is Allah's undertaking, not yours; your part is to stay honest and keep looking. Certainty in the Quran is not a possession seized once but a clarity that grows as the showing continues — in the horizons, in yourself, until the truth stands where doubt used to live.",
            "bn": "আর ঈমানের শুষ্ক মৌসুমে প্রতিশ্রুতির কালটি মনে রাখুন। আমি তাদের দেখাব — এ দায়িত্ব আল্লাহর, আপনার নয়; আপনার অংশ সৎ থাকা আর তাকিয়ে যাওয়া। কুরআনে নিশ্চয়তা একবারে দখল করা কোনো সম্পত্তি নয়, বরং এমন এক স্পষ্টতা যা দেখানো চলতে থাকার সঙ্গে সঙ্গে বাড়ে — দিগন্তে, নিজের মধ্যে — যতক্ষণ না সত্য গিয়ে দাঁড়ায় ঠিক সেখানে, যেখানে আগে সংশয় বাস করত।"
          }
        ]
      }
    ]
  }
});
