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
          "bn": "নাজিল হওয়া বাণীর পরিচয়"
        },
        "p": [
          {
            "en": "The surah opens with the letters Ha-Mim, and 41:2 then names the source of what follows: a revelation from the Entirely Merciful, the Especially Merciful. Those two verses are not this article's subject, and the letters are left without comment here. Verse 41:3 continues straight on: kitabun fussilat ayatuhu, a Book whose verses have been set out distinctly. The abridged English Ibn Kathir notes that the surah was revealed in Makkah, and heads its opening passage 'Description of the Qur'an, and what those who turn away from it say'.",
            "bn": "সূরার শুরু হা-মীম হরফ দুটি দিয়ে। তারপর ৪১:২ জানিয়ে দেয়, যা আসছে তা কোথা থেকে: পরম দয়াময়, পরম দয়ালুর কাছ থেকে নাজিল হওয়া বাণী। ওই দুটি আয়াত এ লেখার বিষয় নয়, আর হরফগুলো নিয়েও এখানে কোনো আলোচনা নেই। ৪১:৩ সোজা কথাটা এগিয়ে নেয়: কিতাবুন ফুসসিলাত আয়াতুহু, এক কিতাব, যার আয়াতগুলো আলাদা আলাদা করে খুলে বলা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ জানায়, সূরাটি নাজিল হয়েছে মক্কায়। শুরুর অংশের শিরোনাম সেখানে: কুরআনের বর্ণনা, আর যারা তা থেকে মুখ ফিরিয়ে নেয় তারা কী বলে।"
          },
          {
            "en": "At-Tabari records how some Basran grammarians tie the two verses together. On their reading, kitabun is the predicate of a subject left unstated: God is informing us that the revelation is a Book. So 41:2 tells where the words come from, and 41:3 tells what they are. The abridged English Ibn Kathir takes 41:2 to mean that the Qur'an is revealed from the Most Gracious, the Most Merciful, and then turns to the description this verse supplies, phrase by phrase, which is the order followed below.",
            "bn": "দুই আয়াত কীভাবে জোড়া লাগে, তাবারী তা জানান বসরার কিছু ব্যাকরণবিদের মত উদ্ধৃত করে। তাঁদের মতে কিতাবুন শব্দটি এমন এক বাক্যের বিধেয়, যার উদ্দেশ্য উহ্য রাখা হয়েছে। আল্লাহ খবর দিচ্ছেন, নাজিল হওয়া বাণীটি এক কিতাব। তাহলে ৪১:২ বলে কথাগুলো কোথা থেকে এসেছে, আর ৪১:৩ বলে সেগুলো কী। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৪১:২-এর অর্থ করে এভাবে: কুরআন নাজিল হয়েছে পরম করুণাময়, পরম দয়ালুর কাছ থেকে। তারপর তিনি এ আয়াতের বর্ণনায় যান, একটার পর একটা বাক্যাংশ ধরে। নিচের আলোচনাও সেই ক্রমেই চলবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Made Plain",
          "bn": "খুলে বলা আয়াত"
        },
        "p": [
          {
            "en": "The first glosses on fussilat ayatuhu are short. At-Tabari explains it as a Book whose verses have been made clear, bayyinat, and supports this with a report from as-Suddi, through a chain he names, that says the same thing in the same words: bayyinat ayatuhu. Al-Baghawi gives that single word and moves on. Al-Qurtubi pairs it with another: bayyinat wa fussirat, made clear and explained. So the plainest sense the commentators give is simply that nothing in the verses has been left obscure. The verb does not name who set the verses out, and the glosses do not pause there, since 41:2 has already named the revelation's source.",
            "bn": "ফুসসিলাত আয়াতুহু-এর প্রথম দিকের ব্যাখ্যাগুলো ছোট। তাবারী অর্থ করেন: এমন কিতাব, যার আয়াতগুলো স্পষ্ট করা হয়েছে, বুইয়িনাত। সমর্থনে তিনি সুদ্দীর একটি বর্ণনা আনেন, বর্ণনাকারীদের পরম্পরাসহ। সুদ্দীও হুবহু একই কথা বলেন: বুইয়িনাত আয়াতুহু। বাগাভী ওই একটি শব্দ বলেই সামনে এগিয়ে যান। কুরতুবী তার সঙ্গে আরেকটি শব্দ জোড়েন: বুইয়িনাত ওয়া ফুসসিরাত, স্পষ্ট করা হয়েছে এবং ব্যাখ্যা করা হয়েছে। অর্থাৎ তাফসীরকারদের দেওয়া সবচেয়ে সরল অর্থ হলো, আয়াতগুলোর কিছুই অস্পষ্ট রাখা হয়নি। কে খুলে বললেন, ক্রিয়াটি তা বলে না, ব্যাখ্যাগুলোও সেখানে থামে না, কারণ ৪১:২ আগেই জানিয়ে দিয়েছে বাণীটি কার কাছ থেকে এসেছে।"
          },
          {
            "en": "Ibn Kathir widens the gloss to cover both meaning and law: its meanings have been made clear and its rulings made firm. He sets beside it 11:1, a Book whose verses have been made firm and then set out in detail, from the Wise, the All-Aware. The Muyassar adds a measure of completeness: the verses were made clear with full clarity, tamam al-bayan, and their meanings and rulings explained. On these readings the setting out reaches what the Qur'an says and also what it requires.",
            "bn": "ইবন কাসীর ব্যাখ্যাটা অর্থ ও বিধান দুদিকেই ছড়িয়ে দেন। তাঁর ভাষায়, এর অর্থগুলো স্পষ্ট করা হয়েছে, আর এর বিধানগুলো মজবুত করা হয়েছে। পাশে তিনি রাখেন ১১:১, যেখানে বলা হয়েছে: এমন কিতাব, যার আয়াতগুলো মজবুত করা হয়েছে, তারপর বিস্তারিত বলা হয়েছে প্রজ্ঞাময়, সর্বজ্ঞের পক্ষ থেকে। মুয়াসসার যোগ করে পূর্ণতার মাপ: আয়াতগুলো স্পষ্ট করা হয়েছে পুরোপুরি, তামামুল বায়ান, আর তার অর্থ ও বিধানগুলো খুলে বলা হয়েছে। এ ব্যাখ্যাগুলো ধরলে খুলে বলাটা পৌঁছায় কুরআনের বক্তব্য পর্যন্ত, আবার কুরআনের দাবি পর্যন্তও।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Pairs Told Apart",
          "bn": "আলাদা করা তিন জোড়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi then reports what the setting out consists of, and gives it under three names. Qatada said the verses were set out by making clear what is lawful from what is unlawful, and obedience to God from disobedience. Al-Hasan said: by the promise and the threat, al-wa'd wa al-wa'id. Sufyan said: by reward and punishment, al-thawab wa al-'iqab. Al-Qurtubi lists the three statements in sequence and does not choose among them, and they are kept that way here. Each saying is brief, a few words naming what is being told apart from what.",
            "bn": "এরপর কুরতুবী জানান, খুলে বলাটা আসলে কোন কোন বিষয়ে। কথাটা তিনি আনেন তিনজনের নামে। কাতাদা বলেছেন, আয়াতগুলো খুলে বলা হয়েছে হালালকে হারাম থেকে, আর আল্লাহর আনুগত্যকে তাঁর নাফরমানি থেকে আলাদা করে দেখিয়ে। হাসান বলেছেন: ওয়াদা আর হুঁশিয়ারি দিয়ে, আল-ওয়া'দ ওয়াল-ওয়াঈদ। সুফিয়ান বলেছেন: সওয়াব আর শাস্তি দিয়ে, আস-সাওয়াব ওয়াল-ইকাব। কুরতুবী তিনটি কথা পরপর সাজিয়ে দেন, কোনোটিকে বেছে নেন না। এখানেও সেভাবেই রাখা হলো। প্রতিটি কথাই ছোট: অল্প কয়েকটি শব্দে বলে দেওয়া, কোন জিনিসকে কোন জিনিস থেকে আলাদা করা হচ্ছে।"
          },
          {
            "en": "Placed side by side, the three statements share a shape. Each names a pair of opposites, and each makes the setting out a matter of drawing a line between them. Qatada's line runs through conduct, what may be done and what may not. Al-Hasan's runs through what God has said He will do, in promise and in warning. Sufyan's runs through the outcome, what is gained and what is suffered. A reader who keeps all three in view holds the verses to a demanding standard of clarity.",
            "bn": "তিনটি কথা পাশাপাশি রাখলে একটা মিল চোখে পড়ে। প্রতিটিতে আছে বিপরীত দুই জিনিসের জোড়া, আর প্রতিটিতেই খুলে বলা মানে দুয়ের মাঝখানে রেখা টেনে দেওয়া। কাতাদার রেখা আমলের ভেতর দিয়ে যায়: কী করা যায়, কী যায় না। হাসানের রেখা যায় আল্লাহ নিজে যা করবেন বলে জানিয়েছেন তার ভেতর দিয়ে, ওয়াদায় ও হুঁশিয়ারিতে। সুফিয়ানের রেখা যায় পরিণামের ভেতর দিয়ে: কী মিলবে, কী ভুগতে হবে। যে পাঠক তিনটিকেই একসঙ্গে মনে রাখেন, তিনি আয়াতগুলোর স্পষ্টতাকে মাপেন খুব উঁচু মাপকাঠিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Kind on Its Own",
          "bn": "প্রতিটি জিনিস নিজ জায়গায়"
        },
        "p": [
          {
            "en": "As-Sa'di opens his comment by saying that God here praises the Book for the completeness of its clarity. He reads fussilat as every kind of thing being set apart on its own, 'ala hidatihi. That, he says, carries with it full clarity, a separating of each thing from the next, and tamyiz al-haqa'iq, the telling apart of realities. His gloss is wider than the three pairs. It speaks of things generally being given their own place, and of realities that the reader can then see distinctly.",
            "bn": "সা'দী শুরুতেই বলেন, আল্লাহ এখানে কিতাবের প্রশংসা করছেন, কারণ এর স্পষ্টতা পূর্ণাঙ্গ। ফুসসিলাত-এর অর্থ তিনি করেন: প্রতিটি জিনিসকে তার ধরন অনুযায়ী আলাদা করে নিজ জায়গায় রাখা হয়েছে, আলা হিদাতিহি। তাঁর মতে এর মধ্যেই আছে পূর্ণ স্পষ্টতা, প্রতিটি জিনিসকে অন্যটি থেকে আলাদা করা, আর তামঈযুল হাকাইক, অর্থাৎ বাস্তবতাগুলোকে একটা থেকে আরেকটা চিনিয়ে দেওয়া। তাঁর ব্যাখ্যা ওই তিন জোড়ার চেয়ে প্রশস্ত। এতে আছে সব জিনিসকে যার যার জায়গা দেওয়ার কথা, আর এমন বাস্তবতার কথা, যেগুলো পাঠক তখন আলাদা আলাদা করে দেখতে পান।"
          },
          {
            "en": "Al-Qurtubi also notes that the verb has been read in another way, and he gives two meanings for that reading. Either the verses divide between truth and falsehood, or they are set apart from one another by their differing meanings. He takes the second from the ordinary use of fasala for someone who moves away from a town. The text consulted here does not name who recited it so, and it is not pursued further here. Al-Qurtubi gives both meanings without preferring either. Both stay close to the main gloss: clarity reached by separation.",
            "bn": "কুরতুবী আরও জানান, ক্রিয়াটি আরেকভাবেও পড়া হয়েছে, আর সেই পাঠের দুটি অর্থ তিনি দেন। হয় আয়াতগুলো হক আর বাতিলের মাঝে ভাগ করে দেয়, নয়তো অর্থের ভিন্নতার কারণে আয়াতগুলো একটা থেকে আরেকটা আলাদা। দ্বিতীয় অর্থটি তিনি নেন ফাসালা শব্দের সাধারণ ব্যবহার থেকে, যেমন কেউ শহর ছেড়ে দূরে সরে গেলে বলা হয়। কারা এভাবে পড়েছেন, সংগৃহীত লেখায় তাঁদের নাম নেই, তাই বিষয়টি এখানে আর টানা হলো না। কুরতুবী দুটি অর্থই দেন, কোনোটিকে প্রাধান্য না দিয়ে। দুটোই মূল ব্যাখ্যার কাছাকাছি থাকে: আলাদা করার মধ্য দিয়েই স্পষ্টতা।"
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
            "bn": "কুরআনান আরাবিয়্যান: আরবী কুরআন। ইবন কাসীরের ব্যাখ্যায় এর মানে: আরবী শব্দমালা, পরিষ্কার ও সুস্পষ্ট। আয়াতের দুই অংশকে তিনি এক সুতোয় গাঁথেন: এর অর্থগুলো বিস্তারিত খুলে বলা, আর এর শব্দগুলো পরিষ্কার, কোনো জটিলতা নেই। তিনি আরও বলেন, শব্দে ও অর্থে, দুদিক থেকেই এ কিতাব অতুলনীয়, এর নজির কেউ আনতে পারে না। তিনি উদ্ধৃত করেন এ সূরারই পরের এক আয়াত, ৪১:৪২: বাতিল এর কাছে আসতে পারে না, সামনে থেকেও না, পেছন থেকেও না। এ বাণী নাজিল হয়েছে প্রজ্ঞাময়, প্রশংসিতের পক্ষ থেকে। তাঁর পাঠে আরবী ভাষা আর স্পষ্টতা একসঙ্গে চলে।"
          },
          {
            "en": "As-Sa'di describes the Arabic as al-lugha al-fusha, the most eloquent speech, and calls Arabic the most complete of languages. The Muyassar adds a word about the reader's side: an Arabic Qur'an whose understanding has been made easy, muyassaran fahmuhu. The commentators thus join the language to the clarity. The verses were set out, and they were set out in a tongue whose words, on Ibn Kathir's reading, carry no confusion, so that what is distinguished in meaning is also plain in expression.",
            "bn": "সা'দী এ আরবীকে বলেন আল-লুগাতুল ফুসহা, সবচেয়ে বিশুদ্ধ ও প্রাঞ্জল ভাষা, আর আরবীকে বলেন সব ভাষার মধ্যে সবচেয়ে পূর্ণাঙ্গ। মুয়াসসার পাঠকের দিক থেকে একটি কথা যোগ করে: এমন আরবী কুরআন, যার বোঝা সহজ করে দেওয়া হয়েছে, মুয়াসসারান ফাহমুহু। এভাবে তাফসীরকারেরা ভাষাকে স্পষ্টতার সঙ্গে জুড়ে দেন। আয়াতগুলো খুলে বলা হয়েছে, আর খুলে বলা হয়েছে এমন ভাষায়, যার শব্দে ইবন কাসীরের মতে কোনো জটিলতা নেই। ফলে অর্থে যা আলাদা করে দেখানো, প্রকাশেও তা পরিষ্কার।"
          },
          {
            "en": "On the grammar, briefly. Ibn Kathir reads qur'anan as describing the Book's state: it is set out while being Arabic wording. Al-Baghawi says the word is in the accusative because the act of making clear falls on it: We set it out as a Qur'an. At-Tabari paraphrases its verses were set out in this way, and records that grammarians differed over the accusative; the portion consulted gives only the Basran view that the verb is taken up by ayat, which stands in the agent's place, and so qur'anan is accusative. As-Sa'di simply glosses: set out, and made Arabic.",
            "bn": "ব্যাকরণ নিয়ে সংক্ষেপে। ইবন কাসীর কুরআনান শব্দটিকে কিতাবের অবস্থার বিবরণ হিসেবে পড়েন: আরবী শব্দমালা হয়েই তা খুলে বলা। বাগাভী বলেন, শব্দটি নসবযুক্ত, কারণ খুলে বলার কাজটা এর উপরেই পড়েছে: আমরা একে কুরআন রূপে খুলে বলেছি। তাবারী অর্থ করেন, এর আয়াতগুলো এভাবেই খুলে বলা হয়েছে। তিনি জানান, নসবের কারণ নিয়ে ব্যাকরণবিদদের মধ্যে মতভেদ আছে। সংগৃহীত অংশে আছে শুধু বসরার মত: ক্রিয়াটি আয়াত শব্দ নিয়েই ব্যস্ত, আয়াত বসেছে কর্তার জায়গায়, তাই কুরআনান নসব পেয়েছে। সা'দী সোজা বলেন: খুলে বলা হয়েছে, আর আরবী করা হয়েছে।"
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
            "bn": "লিকাওমিন ইয়া'লামূন: এমন লোকদের জন্য, যারা জানে। এই লোকেরা কারা, তাফসীরকারেরা সবাই একইভাবে বলেন না। মুয়াসসারের মতে তারা সেই লোক, যারা আরবী ভাষা জানে, আল-লিসানুল আরাবী। বাগাভীও একই ব্যাখ্যা দেন, তারপর উল্টো দিক থেকে একটা কারণ জোড়েন: তাদের ভাষা ছাড়া অন্য ভাষায় হলে তারা তা বুঝতে পারত না। এ পাঠে বাক্যাংশটি কুরআনান আরাবিয়্যান-এর কথাটাই পূর্ণ করে। কিতাবকে আরবী রূপ দেওয়া হয়েছে, যাতে সে ভাষায় যাদের সম্বোধন করা হচ্ছে তারা তা ধরতে পারে। মুয়াসসারের আগের কথাটা, বোঝা সহজ করে দেওয়া, এই একই ভাবনার অংশ।"
          },
          {
            "en": "Ibn Kathir names a narrower group. In his Arabic: innama ya'rifu hadha al-bayan wa al-wuduh al-'ulama' al-rasikhun, it is only the scholars firmly grounded in knowledge who recognise this clarity and plainness. The abridged English renders it as scholars who are thoroughly versed in knowledge, by whom this clear style will be readily understood. Here the knowing is not only of the language but of the depth: the clarity is in the Book, and those who perceive it fully are those rooted in learning.",
            "bn": "ইবন কাসীর আরও নির্দিষ্ট একদলের কথা বলেন। তাঁর আরবী ভাষ্য: ইন্নামা ইয়া'রিফু হাযাল বায়ানা ওয়াল উযূহা আল-উলামাউর রাসিখূন। অর্থাৎ এই স্পষ্টতা ও প্রাঞ্জলতা চিনতে পারেন কেবল জ্ঞানে দৃঢ়প্রতিষ্ঠিত আলেমরা। সংক্ষিপ্ত ইংরেজি সংস্করণে কথাটা এসেছে এভাবে: জ্ঞানে গভীর পারদর্শী আলেমরাই এই স্পষ্ট ভঙ্গি সহজে বুঝবেন। এখানে জানা মানে শুধু ভাষা জানা নয়, গভীরতাও জানা। স্পষ্টতা কিতাবের ভেতরেই আছে, কিন্তু পুরোটা দেখতে পান তাঁরা, যাঁদের শিকড় জ্ঞানের গভীরে।"
          },
          {
            "en": "As-Sa'di reads the phrase as a purpose: li-ajli an yatabayyana lahum ma'nahu kama tabayyana lafzuhu, so that its meaning becomes clear to them just as its wording is clear, and guidance stands out from misguidance, and right conduct from error. Ma'arif al-Qur'an translates for a people who understand, and says the verses, being Arabic, clear and bearing good news and warning, can benefit only those who intend to ponder over them and understand them. These glosses are given side by side here, without a ruling between them.",
            "bn": "সা'দী বাক্যাংশটিকে উদ্দেশ্য হিসেবে পড়েন: লিআজলি আন ইয়াতাবাইয়ানা লাহুম মা'নাহু কামা তাবাইয়ানা লাফযুহু। অর্থাৎ যাতে এর শব্দ যেমন তাদের কাছে স্পষ্ট, এর অর্থও তেমনি স্পষ্ট হয়, আর হেদায়েত গোমরাহি থেকে, সঠিক পথ ভুল পথ থেকে আলাদা হয়ে দেখা দেয়। মাআরিফুল কুরআন অনুবাদ করে: যারা বোঝে তাদের জন্য। সেখানে বলা হয়েছে, আয়াতগুলো আরবী, স্পষ্ট, সুসংবাদ ও সতর্কবাণী বহনকারী, তবু এর উপকার পায় কেবল তারাই, যারা ভেবে দেখতে ও বুঝতে চায়। ব্যাখ্যাগুলো এখানে পাশাপাশি রাখা হলো, কোনোটার পক্ষে রায় না দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Spoken for Their Sake",
          "bn": "যাদের জন্য কথাটা নয়"
        },
        "p": [
          {
            "en": "As-Sa'di then names the other side. As for the ignorant, whom guidance increases only in misguidance and clarity only in blindness, the speech was not driven for their sake. He closes with 2:6: it is the same to them whether you warn them or do not warn them; they will not believe. Ma'arif al-Qur'an, for its part, notes that the Arabs and the Quraysh turned away despite all this, and points to the end of 41:4 for it. That verse belongs to its own place and is not taken up here.",
            "bn": "এরপর সা'দী অপর দিকের কথা বলেন। আর যারা অজ্ঞ, হেদায়েত যাদের গোমরাহিই বাড়ায়, স্পষ্টতা যাদের অন্ধত্বই বাড়ায়, কথাটা তাদের জন্য বলা হয়নি। শেষে তিনি আনেন ২:৬: তুমি তাদের সতর্ক করো বা না করো, তাদের কাছে দুটোই সমান, তারা ঈমান আনবে না। মাআরিফুল কুরআন তার দিক থেকে জানায়, এত কিছুর পরও আরবরা ও কুরাইশরা মুখ ফিরিয়ে নিয়েছিল, আর এ কথার জন্য সে ৪১:৪-এর শেষাংশের দিকে ইঙ্গিত করে। সে আয়াতের আলোচনা তার নিজের জায়গায়, এখানে তা তোলা হলো না।"
          },
          {
            "en": "It needs saying plainly that as-Sa'di describes a disposition, not a list of names, and that this verse and his comment license nothing against any living person or community; no reader is entitled to place another inside that description. What the comment leaves the reader is a question turned inward, about whether clarity is doing its work in him. None of the commentaries consulted here attaches a hadith to this verse, and none is brought here; nor do they give a cause of revelation.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। সা'দী একটা মনোভাবের বর্ণনা দিয়েছেন, কোনো নামের তালিকা দেননি। এ আয়াত ও তাঁর ব্যাখ্যা আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। অন্য কাউকে ওই বর্ণনার ভেতরে বসিয়ে দেওয়ার অধিকার কোনো পাঠকের নেই। এ ব্যাখ্যা পাঠকের হাতে যা রেখে যায়, তা নিজের দিকে ফেরানো এক প্রশ্ন: স্পষ্টতা কি আমার ভেতরে তার কাজ করছে? সংগৃহীত তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি, তাই এখানেও কোনো হাদিস আনা হলো না। নাজিলের কোনো প্রেক্ষাপটও তারা উল্লেখ করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Clarity Waiting on Readers",
          "bn": "স্পষ্টতা অপেক্ষায় পাঠকের"
        },
        "p": [
          {
            "en": "Across the commentaries, the work of making clear is credited to the Book. Its verses are bayyinat, made clear; tafsil, setting out, is done to them; its realities are told apart; its understanding, says the Muyassar, has been made easy. What the verse names on the reader's side is a verb: ya'lamun, they know. The Book has done what it was sent to do. Whether the setting out reaches anyone depends on whether there is a people who know, in whichever sense the commentators give. On al-Baghawi's reading the knowing begins with the language; on Ibn Kathir's it is deepest in the firmly grounded.",
            "bn": "সব তাফসীরেই স্পষ্ট করার কাজটা কিতাবের নামে লেখা। এর আয়াতগুলো বুইয়িনাত, স্পষ্ট করা। এগুলোকে খুলে বলা হয়েছে। এর বাস্তবতাগুলো আলাদা আলাদা করে চেনানো হয়েছে। আর মুয়াসসারের ভাষায়, এর বোঝা সহজ করে দেওয়া হয়েছে। অথচ পাঠকের দিকে আয়াত রেখেছে শুধু একটা ক্রিয়া: ইয়া'লামূন, তারা জানে। কিতাব তার কাজ করে ফেলেছে। খুলে বলা কথাটা কারও কাছে পৌঁছাবে কি না, তা নির্ভর করে জানে এমন লোক আছে কি না তার উপর, তাফসীরকারেরা জানার যে অর্থই দিন না কেন। বাগাভীর পাঠে জানা শুরু হয় ভাষা থেকে। ইবন কাসীরের পাঠে জানা সবচেয়ে গভীর তাঁদের মধ্যে, যাঁরা জ্ঞানে দৃঢ়।"
          },
          {
            "en": "Each of those senses asks something of the person who opens the Qur'an. Knowing the tongue asks for effort with the language. Being grounded in knowledge asks for patience and for the company of those who have it. Wanting the meaning to become as clear as the wording, in as-Sa'di's phrase, asks for slow reading. Intending to ponder, in Ma'arif's phrase, asks for a turned heart. The verse holds out the Book as already clear. What it waits for is the reader who comes in order to know.",
            "bn": "জানার এই প্রতিটি অর্থই কুরআন হাতে নেওয়া মানুষটির কাছে কিছু না কিছু চায়। ভাষা জানতে হলে ভাষার পেছনে খাটতে হয়। জ্ঞানে দৃঢ় হতে হলে চাই ধৈর্য, আর যাঁদের সে জ্ঞান আছে তাঁদের সঙ্গ। সা'দীর কথামতো শব্দের মতো অর্থও স্পষ্ট হোক, এমন চাওয়া থাকলে পড়তে হয় ধীরে। মাআরিফের কথামতো ভেবে দেখার নিয়ত থাকলে চাই এমন একটা মন, যা কুরআনের দিকে ফিরেছে। আয়াত কিতাবকে সামনে রাখে আগে থেকেই স্পষ্ট অবস্থায়। অপেক্ষা শুধু এমন পাঠকের, যিনি আসেন জানার জন্য।"
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
          "bn": "ধোঁয়া থেকে সাত আসমান"
        },
        "p": [
          {
            "en": "The passage opens at 41:9 with a question to those who disbelieve in the One who created the earth in two days and set up rivals to Him. Verse 41:10 adds the mountains, the blessing and the measured provisions of the earth. In 41:11 He turns to the heaven while it was smoke and calls heaven and earth to come, willingly or unwillingly, and they answer that they come willingly. Our verse finishes that account: fa-qadahunna sab'a samawatin fi yawmayn, so He completed them as seven heavens in two days.",
            "bn": "অংশটির শুরু ৪১:৯ আয়াতে, একটি প্রশ্ন দিয়ে। যিনি দুই দিনে যমীন সৃষ্টি করেছেন, তোমরা কি তাঁকেই অস্বীকার কর, আর তাঁর সমকক্ষ দাঁড় করাও? ৪১:১০ আয়াত যোগ করে পাহাড়, বরকত আর যমীনের মাপা রিযিকের কথা। ৪১:১১ আয়াতে তিনি আসমানের দিকে মনোনিবেশ করেন, তখন তা ছিল ধোঁয়া। তিনি আসমান ও যমীনকে ডাকেন: এসো, ইচ্ছায় হোক বা অনিচ্ছায়। দুটোই জবাব দেয়, আমরা স্বেচ্ছায় এলাম। আমাদের আয়াত সেই বর্ণনা শেষ করে: ফাকাদাহুন্না সাব'আ সামাওয়াতিন ফী ইয়াওমাইন, অতঃপর তিনি দুই দিনে সেগুলোকে সাতটি আসমানরূপে সম্পূর্ণ করলেন।"
          },
          {
            "en": "The verb qada carries the weight here. Al-Qurtubi glosses it as He completed them and finished them, and adds a second reading, it is said: He made them firm and well wrought. For that sense he cites a line of the poet Abu Dhu'ayb al-Hudhali about two coats of mail that Dawud (AS) had qada, finished with skill. Al-Baghawi has He completed them and finished their creation. At-Tabari says He finished creating them as seven heavens, and the Muyassar speaks of the creation and proportioning of the seven heavens.",
            "bn": "এখানে আসল কথাটা কাদা ক্রিয়ার মধ্যে। কুরতুবী এর অর্থ করেন: তিনি সেগুলো পূর্ণ করলেন, কাজ শেষ করলেন। 'বলা হয়' কথাটি দিয়ে তিনি দ্বিতীয় একটি অর্থও আনেন: তিনি সেগুলোকে মজবুত ও নিখুঁত করে গড়লেন। এই অর্থের সমর্থনে তিনি কবি আবু যুয়াইব আল-হুযালীর একটি পঙক্তি উদ্ধৃত করেন। পঙক্তিটি দুটি বর্ম নিয়ে, যেগুলো দাউদ (আঃ) দক্ষ হাতে বানিয়ে শেষ করেছিলেন। সে কাজ বোঝাতে কবি কাদা শব্দটিই ব্যবহার করেছেন। বাগাভী বলেন, তিনি সেগুলো পূর্ণ করলেন এবং সৃষ্টির কাজ শেষ করলেন। তাবারীর ভাষায়, তিনি সাতটি আসমানরূপে সেগুলোর সৃষ্টি সমাপ্ত করলেন। মুয়াসসার বলে, সাতটি আসমানের সৃষ্টি ও বিন্যাসের কাজ তিনি সম্পন্ন করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Reckoning Two, Four and Two",
          "bn": "দুই, চার আর দুইয়ের হিসাব"
        },
        "p": [
          {
            "en": "Read quickly, 41:9, 41:10 and this verse seem to add up to eight days: two for the earth, four for its provisions, two for the heavens. The commentators consulted here do not count it that way. Ibn Kathir puts the earth on Sunday and Monday, and the mountains, blessing and provisions on Tuesday and Wednesday, which, he says, together with the two previous days add up to four. The heavens then take two more days, Thursday and Friday. The four of 41:10, on this reckoning, include the two of 41:9.",
            "bn": "তাড়াতাড়ি পড়লে ৪১:৯, ৪১:১০ আর এই আয়াত মিলিয়ে মনে হতে পারে আটটি দিন: যমীনের জন্য দুই, তার রিযিকের জন্য চার, আসমানের জন্য আরও দুই। কিন্তু যেসব তাফসীর আমরা দেখেছি, সেগুলো এভাবে গোনে না। ইবন কাসীর যমীন সৃষ্টিকে রাখেন রবি ও সোমবারে, আর পাহাড়, বরকত ও রিযিককে মঙ্গল ও বুধবারে। তাঁর কথায়, আগের দুই দিন মিলিয়ে এ হয় চারটি দিন। তারপর আসমানের জন্য আরও দুই দিন, বৃহস্পতি ও শুক্রবার। এই হিসাবে ৪১:১০ আয়াতের চার দিনের ভেতরেই ৪১:৯ আয়াতের দুই দিন ধরা আছে।"
          },
          {
            "en": "Al-Qurtubi says the same in his own words: two days besides the four days in which He created the earth, so that the creation of the heavens and the earth fell within six days, as Allah says in 7:54. He then reports from 'Abdullah ibn Salam (RA): the earth in two days, its provisions in two, the heavens in two, beginning on Sunday and ending on Friday. Al-Qurtubi adds that the people of tafsir hold this view. As-Sa'di and the Muyassar also state that the whole was completed in six days.",
            "bn": "কুরতুবী একই কথা নিজের ভাষায় বলেন: যে চারটি দিনে যমীন সৃষ্টি হয়েছে, সেগুলো ছাড়া আরও দুই দিন। ফলে আসমান ও যমীনের সৃষ্টি হয়েছে ছয়টি দিনে, যেমন আল্লাহ ৭:৫৪ আয়াতে বলেছেন। এরপর তিনি আবদুল্লাহ ইবন সালাম (রাঃ) থেকে বর্ণনা আনেন: যমীন দুই দিনে, তার রিযিক দুই দিনে, আসমান দুই দিনে। শুরু রবিবারে, শেষ শুক্রবারে। কুরতুবী যোগ করেন, তাফসীরবিদদের অবস্থান এটাই। সা'দী আর মুয়াসসারও বলেন, পুরো সৃষ্টি সম্পন্ন হয়েছে ছয়টি দিনে।"
          },
          {
            "en": "At-Tabari gives the heavens Thursday and Friday, and cites as-Suddi for the stages: the smoke rose from the water when it breathed out, He made it a single heaven, then split it and made it seven heavens in two days. Friday, as-Suddi adds, is called al-Jumu'ah because in it He gathered the creation of the heavens and the earth. Al-Qurtubi reports from Mujahid that each of the six days is like a thousand years of your reckoning. The verse itself names only the numbers; the weekdays are the commentators' reckoning.",
            "bn": "তাবারী আসমানের জন্য বৃহস্পতি ও শুক্রবারের কথা বলেন, আর ধাপগুলোর জন্য সুদ্দীর বর্ণনা আনেন। পানি যখন নিঃশ্বাস ছাড়ল, তা থেকে ধোঁয়া উঠল। তিনি সেটাকে একটি আসমান বানালেন, তারপর তা চিরে দুই দিনে সাতটি আসমান করলেন। সুদ্দী আরও বলেন, শুক্রবারকে জুমু'আ বলা হয় কারণ সেদিন তিনি আসমান ও যমীনের সৃষ্টি একত্র করেছেন। কুরতুবী মুজাহিদ থেকে বর্ণনা করেন, ছয়টি দিনের প্রতিটি দিন তোমাদের গণনার হাজার বছরের মতো। আয়াত নিজে শুধু সংখ্যাগুলো বলে। সপ্তাহের দিনের নাম তাফসীরকারদের হিসাব।"
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
            "bn": "দিনের হিসাব কেন? মুয়াসসার সংক্ষেপে উত্তর দেয়: আসমান ও যমীন ছয়টি দিনে সম্পূর্ণ হয়েছে এমন এক হিকমতে, যা আল্লাহই জানেন, অথচ এক মুহূর্তেই সব সৃষ্টি করার ক্ষমতা তাঁর আছে। সা'দী আরেকটু খুলে বলেন। আল্লাহর কুদরত ও ইচ্ছা এক মুহূর্তে সবকিছু সৃষ্টি করতে সক্ষম। কিন্তু তিনি সর্বশক্তিমান হওয়ার পাশাপাশি হাকীম, প্রজ্ঞাময়, আর রাফীক, কোমল। তাঁর হিকমত ও কোমলতা থেকেই তিনি এই মাপা সময় ধরে সৃষ্টি করেছেন। হিকমতটা পুরোপুরি কী, তা জানার দাবি দুজনের কেউই করেন না।"
          },
          {
            "en": "That restraint is worth keeping. The verse does not ask the reader to time the stars or to map its days onto anything else. It asks the reader to notice that He who could have spoken everything into being at once chose order, stages and completion. The word qada already says it: the work was brought to its end and made firm. A believer who learns this about the heavens may learn patience with the stages of smaller things, where Allah also measures and does not hurry.",
            "bn": "এই সংযমটুকু ধরে রাখার মতো। আয়াতটি পাঠককে তারার সময় মাপতে বলে না, এর দিনগুলোকে অন্য কোনো কিছুর সঙ্গে মিলিয়ে দেখতেও বলে না। আয়াত শুধু দেখাতে চায়: যিনি চাইলে এক কথায় সবকিছু অস্তিত্বে আনতে পারতেন, তিনি বেছে নিয়েছেন শৃঙ্খলা, ধাপ আর পূর্ণতা। কাদা শব্দটাই তা বলে দেয়: কাজটি শেষ পর্যন্ত নেওয়া হয়েছে, মজবুত করে গড়া হয়েছে। আসমানের ব্যাপারে এ শিক্ষা যে মুমিন পায়, সে ছোটখাটো বিষয়ের ধাপগুলোতেও ধৈর্য ধরতে শিখতে পারে। সেখানেও আল্লাহ মেপে চলেন, তাড়াহুড়ো করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Narrations With Their Caveats",
          "bn": "আপত্তিসহ বর্ণনাগুলো"
        },
        "p": [
          {
            "en": "Ibn Kathir quotes from at-Tabari a report, through 'Ikrimah from Ibn 'Abbas (RA), in which Jews asked the Prophet ﷺ about the creation of the heavens and the earth and received a day-by-day account in which 41:9 and 41:10 are recited. Ibn Kathir does not rest on it. His verdict, in his own words, is that this hadith has something strange in it. The article therefore does not build anything on its details, and repeats none of them as settled.",
            "bn": "ইবন কাসীর তাবারী থেকে একটি বর্ণনা উদ্ধৃত করেন, যা ইকরিমা হয়ে ইবন আব্বাস (রাঃ) থেকে এসেছে। তাতে আছে, কিছু ইহুদি নবী ﷺ-কে আসমান ও যমীনের সৃষ্টি সম্পর্কে জিজ্ঞেস করে, আর তিনি দিনে দিনে কী সৃষ্টি হয়েছে তার বিবরণ দেন। সেই বিবরণের মাঝে ৪১:৯ ও ৪১:১০ আয়াত তিলাওয়াত করা হয়। ইবন কাসীর এর উপর ভর করেন না। তাঁর নিজের রায়, এ হাদিসে অস্বাভাবিকতা আছে। তাই এই লেখা এর খুঁটিনাটির উপর কিছু দাঁড় করায় না, কোনোটাকেই প্রতিষ্ঠিত কথা হিসেবে আনে না।"
          },
          {
            "en": "Both Ibn Kathir and al-Qurtubi also mention the narration of Abu Hurayrah (RA) in Sahih Muslim (2789), which begins with the soil on Saturday and ends with Adam (AS) on Friday afternoon. Ibn Kathir calls it one of the unusual reports of the Sahih and says al-Bukhari, in his al-Tarikh, judged it defective: some narrate it from Abu Hurayrah from Ka'b al-Ahbar, which al-Bukhari called more correct. Al-Qurtubi sets it apart from the tafsir scholars' view. No tafsir consulted here attaches a narration to this verse that settles the count beyond dispute.",
            "bn": "ইবন কাসীর ও কুরতুবী দুজনেই সহীহ মুসলিমে (২৭৮৯) থাকা আবু হুরায়রা (রাঃ)-এর বর্ণনার কথাও বলেন। সেখানে শুরু শনিবারে মাটি সৃষ্টি দিয়ে, আর শেষ শুক্রবার বিকেলে আদম (আঃ)-এর সৃষ্টি দিয়ে। ইবন কাসীর একে সহীহ গ্রন্থের অস্বাভাবিক বর্ণনাগুলোর একটি বলেন। তিনি জানান, বুখারী তাঁর আত-তারীখ গ্রন্থে এতে ত্রুটি চিহ্নিত করেছেন: কেউ কেউ এটি আবু হুরায়রা থেকে কা'ব আল-আহবারের সূত্রে বর্ণনা করেন, আর বুখারীর মতে সেটাই বেশি সঠিক। কুরতুবী একে তাফসীরবিদদের মত থেকে আলাদা করে রাখেন। দেখা তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে এমন কোনো বর্ণনা যুক্ত করেনি, যা দিনের হিসাবকে বিতর্কের ঊর্ধ্বে নিয়ে যায়।"
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
            "en": "Wa awha fi kulli sama'in amraha: and He inspired in each heaven its command. The commentators give several glosses, and the texts consulted here leave them side by side. The first reads amr as command. At-Tabari reports from Mujahid that it means what Allah commanded and willed. Al-Baghawi reports from Muqatil that He made known to each heaven what He willed of command and prohibition. As-Sa'di explains it as the command and management fitting each heaven, required by the wisdom of the Wisest of judges.",
            "bn": "ওয়া আওহা ফী কুল্লি সামাইন আমরাহা: আর প্রত্যেক আসমানে তিনি তার হুকুম ওহির মাধ্যমে জানিয়ে দিলেন। তাফসীরকারেরা এর কয়েকটি ব্যাখ্যা দেন, আর আমাদের দেখা তাফসীরগুলো সেগুলোকে পাশাপাশিই রেখে দেয়। প্রথম ব্যাখ্যায় আমর মানে আদেশ। তাবারী মুজাহিদ থেকে বর্ণনা করেন: আল্লাহ যা আদেশ করেছেন আর যা চেয়েছেন। বাগাভী মুকাতিল থেকে আনেন: প্রত্যেক আসমানকে তিনি তাঁর ইচ্ছামতো আদেশ ও নিষেধ জানিয়ে দিলেন। সা'দীর ব্যাখ্যায় এ হলো প্রত্যেক আসমানের উপযোগী হুকুম ও পরিচালনা, শ্রেষ্ঠ বিচারকের হিকমত যা দাবি করে।"
          },
          {
            "en": "A second gloss reads it as what He placed in each heaven. As-Suddi, in at-Tabari, says He created in each heaven its creatures from among the angels, and what is in it of seas and mountains of hail, and what is not known. Al-Baghawi gives the same from 'Ata' from Ibn 'Abbas (RA). Qatadah says He created in it its sun, moon and stars and what sets it right. Ibn Kathir says He arranged in each heaven what it needs of angels and of things known only to Him. At-Tabari's own summary: He placed in each heaven what He willed to create.",
            "bn": "দ্বিতীয় ব্যাখ্যায় এর মানে, প্রত্যেক আসমানে তিনি যা রেখেছেন। তাবারীর উদ্ধৃতিতে সুদ্দী বলেন, প্রত্যেক আসমানে তিনি তার বাসিন্দা ফেরেশতাদের সৃষ্টি করেছেন, আর সেখানকার সাগর, শিলার পাহাড় এবং যা জানা নেই তা-ও। বাগাভী একই কথা আনেন আতা হয়ে ইবন আব্বাস (রাঃ) থেকে। কাতাদা বলেন, তিনি সেখানে তার সূর্য, চাঁদ, তারা আর তার কল্যাণের ব্যবস্থা সৃষ্টি করেছেন। ইবন কাসীরের ভাষায়, প্রত্যেক আসমানের যা প্রয়োজন, ফেরেশতা থেকে শুরু করে এমন সব জিনিস যা কেবল তিনিই জানেন, তা তিনি সেখানে সাজিয়ে দিয়েছেন। তাবারীর নিজের সারকথা: প্রত্যেক আসমানে তিনি যা সৃষ্টি করতে চেয়েছেন, তা রেখে দিয়েছেন।"
          },
          {
            "en": "Al-Qurtubi adds a note on the verb. Inspiration, he says, can be a command, citing 99:5, where your Lord inspired the earth, and 5:111, when I inspired the disciples, meaning I commanded them; here it is a command of bringing into being, amr takwin. He also reports from Ibn 'Abbas (RA) that in each heaven Allah has a house to which the angels go in pilgrimage and around which they circle, aligned with the Ka'bah, and that the house in the nearest heaven is al-Bayt al-Ma'mur. These are reported readings; the article does not choose between them.",
            "bn": "কুরতুবী ক্রিয়াটি নিয়ে একটি টীকা যোগ করেন। তাঁর মতে ওহি কখনো আদেশ অর্থেও আসে। প্রমাণ হিসেবে তিনি ৯৯:৫ আয়াত আনেন, যেখানে তোমার রব যমীনকে ওহি করেছেন, আর ৫:১১১ আয়াত, যখন আমি হাওয়ারীদের ওহি করেছিলাম, মানে আদেশ দিয়েছিলাম। এখানে তা সৃষ্টির আদেশ, আমর তাকবীন। তিনি ইবন আব্বাস (রাঃ) থেকে আরও বর্ণনা করেন, প্রত্যেক আসমানে আল্লাহর একটি ঘর আছে। ফেরেশতারা সেখানে হজ করে, তার চারপাশে তাওয়াফ করে, আর তা কা'বার ঠিক বরাবর। নিকটতম আসমানের ঘরটিই বাইতুল মা'মূর। এগুলো বর্ণিত ব্যাখ্যা, এই লেখা এর কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Lamps That Also Stand Guard",
          "bn": "যে প্রদীপ পাহারাও দেয়"
        },
        "p": [
          {
            "en": "Wa zayyanna as-sama'a ad-dunya bi-masabih: and We adorned the nearest heaven with lamps. At-Tabari says the lamps are the stars, set there as adornment for you, people. Ibn Kathir describes them as bright stars shining down on the people of the earth. As-Sa'di gives them several roles: light is sought by them, the way is found by them, and they are an outward beauty for the sky. Al-Qurtubi records a difference without settling it: it is said that every heaven has shining stars, and it is said that the stars belong to the nearest heaven alone.",
            "bn": "ওয়া যাইয়্যান্নাস সামাআদ দুনইয়া বিমাসাবীহ: আর আমি নিকটতম আসমানকে প্রদীপমালায় সাজিয়েছি। তাবারী বলেন, প্রদীপ মানে তারকা, হে মানুষ, তোমাদের জন্য সেগুলো সাজসজ্জা হিসেবে রাখা হয়েছে। ইবন কাসীরের বর্ণনায় সেগুলো উজ্জ্বল তারা, যা যমীনের মানুষের উপর আলো ছড়ায়। সা'দী সেগুলোর কয়েকটি কাজের কথা বলেন: সেগুলো থেকে আলো নেওয়া হয়, সেগুলো দেখে পথ চেনা হয়, আর বাইরের দিক থেকে সেগুলো আকাশের সৌন্দর্য। কুরতুবী একটি মতভেদ উল্লেখ করেন, মীমাংসা না করেই। কেউ বলেন, প্রত্যেক আসমানেই আলো দেওয়া তারা আছে। কেউ বলেন, তারা শুধু নিকটতম আসমানেরই।"
          },
          {
            "en": "Then wa hifzan, and as protection. The texts consulted here agree on what the protection is against. Ibn Kathir says a guard against the devils, lest they listen to the Highest Assembly. The Muyassar says protection from the devils who steal a hearing. Al-Qurtubi says the same and adds that this guarding is by the stars with which the devils are pelted, as he explained under Surat al-Hijr. As-Sa'di calls it the stars' inward beauty: they are made missiles against the devils so that nothing is stolen by listening.",
            "bn": "তারপর ওয়া হিফযান, আর সুরক্ষা হিসেবে। কিসের থেকে সুরক্ষা, এ ব্যাপারে আমাদের দেখা তাফসীরগুলো একমত। ইবন কাসীর বলেন, শয়তানদের থেকে পাহারা, যাতে তারা ঊর্ধ্বজগতের সভার কথা শুনতে না পারে। মুয়াসসার বলে, চুরি করে কথা শোনা শয়তানদের থেকে সুরক্ষা। কুরতুবীও একই কথা বলেন, আর যোগ করেন যে এ পাহারা চলে সেই তারাগুলো দিয়ে, যা ছুড়ে শয়তানদের তাড়ানো হয়। সূরা হিজরের আলোচনায় তিনি এর ব্যাখ্যা দিয়েছেন। সা'দী একে বলেন তারার ভেতরের সৌন্দর্য: সেগুলোকে শয়তানদের বিরুদ্ধে নিক্ষেপের অস্ত্র বানানো হয়েছে, যাতে চুরি করে কিছু শোনা না যায়।"
          },
          {
            "en": "The grammar of hifzan is disputed, and at-Tabari sets out both sides. Some Basran grammarians read it as and We guarded it with a guarding, since adorning the sky already implies tending it. Some Kufan grammarians read it as and for protection We adorned it, since without the conjunction it would say We adorned the nearest heaven as protection. At-Tabari says the second is nearer to correct. Al-Baghawi and al-Qurtubi take the first: We guarded it a guarding. The difference stays a difference; both readings keep the guard.",
            "bn": "হিফযান শব্দের ব্যাকরণ নিয়ে মতভেদ আছে, আর তাবারী দুই পক্ষই তুলে ধরেন। বসরার কিছু ব্যাকরণবিদের মতে এর অর্থ: আর আমি তাকে ভালোভাবে হেফাজত করেছি। কারণ আকাশ সাজানোর কথা বলাতেই বোঝা যায়, তিনি তার দেখাশোনা করেছেন। কুফার কিছু ব্যাকরণবিদের মতে অর্থ: আর হেফাজতের জন্যই আমি তাকে সাজিয়েছি। কারণ সংযোজক 'ওয়া' বাদ দিলে বাক্যটা দাঁড়ায়, আমি নিকটতম আসমানকে সুরক্ষা হিসেবে সাজিয়েছি। তাবারীর মতে দ্বিতীয়টি সঠিকের বেশি কাছাকাছি। বাগাভী ও কুরতুবী প্রথমটি নেন। মতভেদটা মতভেদ হিসেবেই থাকুক। দুই পাঠেই পাহারা রয়ে যায়।"
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
            "bn": "প্রশ্নটা কুরতুবী নিজেই তোলেন। তিনি বলেন, এ আয়াতের বাহ্যিক অর্থ হল, যমীন আসমানের আগে সৃষ্টি হয়েছে। অথচ ৭৯:২৭ আয়াতে আছে আসমানের কথা, যা তিনি নির্মাণ করেছেন, আর ৭৯:৩০ আয়াত বলে, এরপর তিনি যমীনকে বিস্তৃত করেছেন। এতে মনে হয় আসমান আগে। কুরতুবী জানান, একদল আলিম এর জবাব দিয়েছেন: যমীন আসমানের আগেই সৃষ্টি হয়েছে, আর বিস্তৃত করা, দাহউ, সৃষ্টি করা নয়। আল্লাহ যমীন সৃষ্টি করলেন, তারপর আসমান, তারপর যমীনকে বিছিয়ে দিলেন। কুরতুবী এ কথা ইবন আব্বাস (রাঃ)-এর বলে উল্লেখ করেন।"
          },
          {
            "en": "As-Sa'di frames it as an apparent conflict, adding that the Book of Allah has no contradiction in it. He gives the answer of many of the early generations: the creation of the earth and its form came before the heavens, as here, while its spreading, explained in 79:31 as bringing out its water and pasture, came after, as in Surat an-Nazi'at. He notes that the verse there says He spread it after that, and not that He created it after that.",
            "bn": "সা'দী একে বলেন বাহ্যিক বিরোধ, আর সঙ্গে যোগ করেন যে আল্লাহর কিতাবে কোনো বিরোধ নেই। তিনি সালাফের অনেকের জবাব উল্লেখ করেন: যমীনের সৃষ্টি ও তার আকৃতি আসমানের আগে, যেমন এখানে বলা হয়েছে। আর যমীনকে বিস্তৃত করা হয়েছে পরে, যেমন সূরা নাযি'আতে আছে। ৭৯:৩১ আয়াত এই বিস্তারের ব্যাখ্যা দেয়: তা থেকে পানি ও চারণভূমি বের করা। তিনি খেয়াল করিয়ে দেন, সেখানে বলা হয়েছে এরপর তিনি তা বিস্তৃত করলেন, এ কথা বলা হয়নি যে এরপর তিনি তা সৃষ্টি করলেন।"
          },
          {
            "en": "Ibn Kathir says the earth came first as a foundation comes before a roof, and cites 2:29. He then gives the answer of Ibn 'Abbas (RA), which he says al-Bukhari recorded in his Sahih, to a man troubled by these verses: the earth in two days, then the heavens in two, then the spreading of the earth in two more, so the earth and what is in it took four days. This is a Companion's explanation, not a saying of the Prophet ﷺ. The article reports these answers as theirs and adds none of its own.",
            "bn": "ইবন কাসীর বলেন, ভিত যেমন ছাদের আগে তৈরি হয়, তেমনি যমীন আগে সৃষ্টি হয়েছে। এরপর তিনি ২:২৯ আয়াত উল্লেখ করেন। তারপর তিনি ইবন আব্বাস (রাঃ)-এর জবাব আনেন, যা তাঁর কথামতো বুখারী তাঁর সহীহ গ্রন্থে লিপিবদ্ধ করেছেন। এক ব্যক্তি এসব আয়াত নিয়ে বিভ্রান্ত হয়েছিল। ইবন আব্বাস (রাঃ) বলেন: যমীন দুই দিনে, তারপর আসমান দুই দিনে, তারপর আরও দুই দিনে যমীন বিস্তৃত করা। ফলে যমীন ও তার ভেতরের সবকিছুতে লেগেছে চারটি দিন। এটি একজন সাহাবীর ব্যাখ্যা, নবী ﷺ-এর বাণী নয়। এই লেখা এ জবাবগুলো তাঁদের নামেই জানায়, নিজের থেকে কিছু যোগ করে না।"
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
            "bn": "যালিকা তাকদীরুল আযীযিল আলীম: এ হল মহাপরাক্রমশালী, সর্বজ্ঞের নির্ধারণ। তাবারীর ব্যাখ্যায়, আসমান-যমীন সৃষ্টি আর আকাশ সাজানোর যে বর্ণনা দেওয়া হল, সবই তাঁর মাপা, যিনি শত্রুদের থেকে প্রতিশোধ নিতে পরাক্রমশালী, আর বান্দাদের গোপন ও প্রকাশ্য সব আমল জানেন। ইবন কাসীর বলেন, তিনি সবকিছুকে পরাভূত ও বশীভূত করেছেন, আর সৃষ্টির প্রতিটি নড়াচড়া ও স্থিরতা তাঁর জানা। বাগাভীর ভাষায়, রাজত্বে তিনি পরাক্রমশালী, হেফাজতে তিনি সর্বজ্ঞ। সা'দী বলেন, তাঁর জ্ঞান গায়েব ও প্রকাশ্য সবকিছু ঘিরে রেখেছে।"
          },
          {
            "en": "As-Sa'di then turns back to 41:9: among the most astonishing things, he says, is that the idolaters abandon sincere devotion to this Lord, to whose command creation has yielded, and stranger still that they set up deficient rivals. The verse describes those addressed in the text and licenses nothing against any living person or community. For the reader it is a mirror: the heavens came willingly and received their command, and the same Lord has given a command to each of us.",
            "bn": "এরপর সা'দী ৪১:৯ আয়াতের দিকে ফিরে যান। তাঁর মতে সবচেয়ে আশ্চর্য বিষয়গুলোর একটি হল, মুশরিকরা এমন রবের প্রতি খাঁটি ইবাদত ছেড়ে দেয়, যাঁর হুকুমের সামনে গোটা সৃষ্টি মাথা নত করেছে। তার চেয়েও আশ্চর্য, তারা এমন সব শরীক দাঁড় করায়, যারা নিজেরাই অপূর্ণ। আয়াতটি কেবল তাদের কথাই বলে, যাদের উদ্দেশে কথাগুলো বলা হয়েছিল। আজকের কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কিছুর অনুমতি দেয় না। পাঠকের জন্য এটি এক আয়না। আসমান-যমীন স্বেচ্ছায় এসেছিল, তাদের হুকুমও তারা পেয়েছিল। সেই একই রব আমাদের প্রত্যেককেও একটি হুকুম দিয়েছেন।"
          }
        ]
      }
    ]
  },
  "41:16": {
    "sections": [
      {
        "h": {
          "en": "From the Boast to the Wind",
          "bn": "দম্ভের পরে বাতাস"
        },
        "p": [
          {
            "en": "In 41:13 the Prophet ﷺ was told to warn those who turn away of a sa'iqa like the sa'iqa of 'Ad and Thamud, and 41:15 recorded 'Ad's arrogance in the land and their question, who is stronger than us? Verse 41:16 opens with fa, so: fa-arsalna 'alayhim rihan sarsaran, so We sent upon them a sarsar wind. Al-Qurtubi calls the verse the explanation of the sa'iqa that was sent upon them, and Ma'arif al-Qur'an follows him: the storm that caught 'Ad was itself a sa'iqa, named here as a wind.",
            "bn": "৪১:১৩ আয়াতে নবী ﷺ-কে বলা হয়েছিল, যারা মুখ ফিরিয়ে নেয় তাদের ‘আদ ও সামূদের সা‘ইকার মতো এক সা‘ইকার ভয় দেখাতে। ৪১:১৫ আয়াত জানিয়েছে দুনিয়াতে ‘আদের না-হক অহংকারের কথা, আর তাদের সেই প্রশ্ন: শক্তিতে আমাদের চেয়ে বড় কে? ৪১:১৬ শুরু হয় ‘ফা’ দিয়ে, যার অর্থ অতঃপর: ফাআরসালনা ‘আলাইহিম রীহান সারসারান, তাই আমি তাদের উপর পাঠালাম সারসার বাতাস। কুরতুবী বলেন, তাদের উপর পাঠানো সেই সা‘ইকার ব্যাখ্যা এই আয়াত। মাআরিফুল কুরআনও তাঁর পথ ধরে: যে ঝড় ‘আদকে গ্রাস করেছিল, সেটাই ছিল সা‘ইকা, আর এখানে তার নাম বাতাস।"
          },
          {
            "en": "Ibn Kathir gives the link in his own words. 'Ad, he writes, challenged the Compeller with enmity, denied His signs and disobeyed His messenger, and for this Allah said: so We sent upon them a sarsar wind. The rest of the verse moves in four steps: the wind, the days through which it blew, its purpose, which was to make them taste the punishment of disgrace in this world, and a closing word on the Hereafter, whose punishment is more disgracing and where they will not be helped. Thamud, in 41:17, belong to the next verse.",
            "bn": "ইবন কাসীর যোগসূত্রটা নিজের ভাষায় বলেন। ‘আদ শত্রুতা নিয়ে মহাপরাক্রমশালীর মুখোমুখি দাঁড়িয়েছিল, তাঁর আয়াত অস্বীকার করেছিল, তাঁর রাসূলের নাফরমানি করেছিল। এ কারণেই আল্লাহ বললেন: তাই আমি তাদের উপর সারসার বাতাস পাঠালাম। আয়াতের বাকিটা চারটি ধাপে এগোয়। প্রথমে বাতাস। তারপর সেই দিনগুলো, যেগুলো জুড়ে বাতাস বয়েছিল। তারপর উদ্দেশ্য: দুনিয়াতেই তাদের লাঞ্ছনার শাস্তির স্বাদ দেওয়া। শেষে আখিরাতের কথা, যার শাস্তি আরও লাঞ্ছনাকর, আর যেখানে তারা কোনো সাহায্য পাবে না। ৪১:১৭ আয়াতের সামূদ পরের আয়াতের প্রসঙ্গ।"
          }
        ]
      },
      {
        "h": {
          "en": "Sarsar in Three Glosses",
          "bn": "সারসারের তিন অর্থ"
        },
        "p": [
          {
            "en": "What kind of wind was sarsar? At-Tabari reports that the people of interpretation differed. Mujahid, through two chains, said severe, and in one of them, severe in its samum against them. Qatada, through two chains, said cold. As-Suddi said cold and with a sound, and ad-Dahhak said a wind with intense cold in it. At-Tabari then names the saying he holds nearer the mark, and it is Mujahid's: sarsar, he argues, is the sound of the wind when it blows hard and is heard, like someone saying sarar.",
            "bn": "সারসার কেমন বাতাস? তাবারী জানান, ব্যাখ্যাকারদের মধ্যে মতভেদ ছিল। মুজাহিদ দুটি সনদে বলেছেন: প্রচণ্ড। একটিতে আছে: তাদের উপর প্রচণ্ড সামূম নিয়ে। কাতাদা দুটি সনদে বলেছেন: ঠান্ডা। সুদ্দী বলেছেন: ঠান্ডা, সঙ্গে আওয়াজ। দাহহাক বলেছেন: এমন বাতাস, যাতে আছে তীব্র শীত। এরপর তাবারী জানান, তাঁর কাছে কোন মত বেশি সঠিক। সেটা মুজাহিদের মত। তাঁর যুক্তি হলো, সারসার আসলে বাতাসের সেই আওয়াজ, যা জোরে বইলে কানে আসে, যেন কেউ বলছে সারার।"
          },
          {
            "en": "His reasoning turns on the shape of the word. Because the letter ra was repeated so often, one ra was changed to sad, as raddada became radrada, nahhaha became nahnaha and kaffafa became kafkafa. He adds that a river called Sarsar is said to have been named for the sound of the water running in it. Al-Qurtubi gives another account of the same word: it is said to come from sirr, cold, with the middle ra replaced by the word's first letter, as kubbibu became kubkibu.",
            "bn": "তাঁর যুক্তি শব্দের গড়ন নিয়ে। ‘রা’ বারবার আসায় একটি ‘রা’ বদলে ‘সাদ’ হয়েছে। যেমন রাদ্দাদা থেকে রাদরাদা, নাহহাহা থেকে নাহনাহা, কাফফাফা থেকে কাফকাফা। তিনি আরও জানান, সারসার নামে একটি নদী আছে। বলা হয়, তার বহমান পানির শব্দ থেকেই এই নাম। একই শব্দের আরেক রকম হিসাব দেন কুরতুবী। এক বর্ণনায় সারসারের মূল সির্র, অর্থাৎ ঠান্ডা। মাঝের ‘রা’-এর জায়গায় বসেছে শব্দের প্রথম অক্ষর, যেমন কুব্বিবূ থেকে কুবকিবূ।"
          },
          {
            "en": "Al-Qurtubi's list of voices is longer. Abu 'Ubayda: severe and stormy. 'Ikrima and Sa'id ibn Jubayr: intensely cold. Qatada, through Ma'mar, and 'Ata': cold, since in Arab speech sirr is cold. As-Suddi: loud, as a pen or a door is said to creak. Ibn as-Sikkit allows three roots: sirr, cold; the creak of a door; or sarra, a shout. Al-Baghawi puts the stormy, loud reading first, from sarra, and the cold reading second, under 'it is said'. Al-Muyassar joins two: intensely cold and loud.",
            "bn": "কুরতুবীর তালিকা আরও লম্বা। আবু উবায়দা: প্রচণ্ড, ঝড়ো। ইকরিমা ও সাঈদ ইবন জুবাইর: তীব্র ঠান্ডা। মা‘মারের সূত্রে কাতাদা, আর আতা: ঠান্ডা, কারণ আরবদের ভাষায় সির্র মানে ঠান্ডা। সুদ্দী: তীব্র আওয়াজের, যেমন কলম বা দরজার ক্যাঁচক্যাঁচ শব্দের বেলায় এই ধাতু আসে। ইবনুস সিক্কীত তিনটি মূলই সম্ভব মনে করেন: সির্র বা ঠান্ডা, দরজার ক্যাঁচক্যাঁচ, অথবা সাররা বা চিৎকার। বাগাভী আগে আনেন ঝড়ো, তীব্র আওয়াজের অর্থ, সাররা থেকে। ঠান্ডার অর্থ আসে পরে, ‘বলা হয়’ কথাটি জুড়ে। মুয়াসসার দুটি অর্থ মিলিয়েছে: তীব্র ঠান্ডা, উঁচু আওয়াজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Strength Met in Its Own Kind",
          "bn": "শক্তির জবাব শক্তিতে"
        },
        "p": [
          {
            "en": "Ibn Kathir does not choose among the glosses. He lists them, blowing hard, cold, having a sound, and then says the truth is that the wind had every one of these qualities. It was severe and strong, so that their punishment would be of the same kind as the strength by which they had been deceived. It was cold, intensely so, as in 69:6, bi-rihin sarsarin 'atiya, which he glosses as cold and severe. And it had a disturbing sound, the sound for which, he notes, a well-known river in the eastern lands was named Sarsar.",
            "bn": "ইবন কাসীর এই অর্থগুলোর কোনো একটিকে বেছে নেন না। তিনি সবগুলো উল্লেখ করেন: জোরে বয়ে যাওয়া, ঠান্ডা, আওয়াজওয়ালা। তারপর বলেন, সত্য হলো বাতাসটির মধ্যে এর সবই ছিল। সেটা ছিল প্রচণ্ড ও শক্তিশালী, যাতে তাদের শাস্তি হয় সেই জাতের, যে শক্তি নিয়ে তারা ধোঁকায় পড়েছিল। সেটা ছিল ঠান্ডা, ভীষণ ঠান্ডা, যেমন ৬৯:৬ আয়াতে আছে: বিরীহিন সারসারিন ‘আতিয়া। এর অর্থ তিনি করেন ঠান্ডা ও প্রচণ্ড। আর তাতে ছিল বিকট আওয়াজ। তিনি জানান, পূর্বাঞ্চলের এক প্রসিদ্ধ নদীর নামও সারসার, তার স্রোতের জোরালো শব্দের কারণে।"
          },
          {
            "en": "As-Sa'di holds force and noise together: a mighty wind, from its strength and severity, with a disturbing sound like crashing thunder. So the glosses gather around three qualities, intensely cold, loud or roaring, and violent, and the commentators weigh them differently. At-Tabari prefers Mujahid's 'severe', which he explains through the sound of a hard-blowing wind; Ibn Kathir takes all three at once; al-Muyassar names the cold and the sound. Ibn Kathir's remark on the kind of the punishment is his own, and it sits beside 41:15, where 'Ad asked who was stronger than them.",
            "bn": "সা'দী শক্তি আর শব্দ একসঙ্গে ধরেন: বিশাল এক বাতাস, তার জোর আর প্রচণ্ডতার কারণে। তার আওয়াজ ছিল ভয়ংকর, গর্জে ওঠা বজ্রের মতো। ফলে অর্থগুলো জড়ো হয় তিনটি গুণের চারপাশে: তীব্র ঠান্ডা, গর্জন বা উঁচু আওয়াজ, আর প্রচণ্ডতা। তাফসীরকারেরা এগুলোকে ভিন্ন ভিন্ন ওজন দেন। তাবারী মুজাহিদের ‘প্রচণ্ড’ অর্থটি বেছে নেন, আর তা বোঝান জোরে বওয়া বাতাসের শব্দ দিয়ে। ইবন কাসীর তিনটিই একসঙ্গে নেন। মুয়াসসার বলে ঠান্ডা আর শব্দের কথা। শাস্তির জাত নিয়ে মন্তব্যটা ইবন কাসীরের নিজের। তার পাশেই আছে ৪১:১৫, যেখানে ‘আদ জানতে চেয়েছিল, তাদের চেয়ে শক্তিশালী কে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nahisat, and for Whom",
          "bn": "নাহিসাত: অশুভ কার জন্য"
        },
        "p": [
          {
            "en": "Fi ayyamin nahisatin: in days that were nahisat. At-Tabari records four readings. Ibn 'Abbas: consecutive days in which Allah sent down the punishment. Mujahid: ill-omened. Qatada, in one chain, swears to it: days, by Allah, that were ill-omened upon the people; in another, ill-omened and grim. As-Suddi: days ill-omened for them. Ibn Zayd: days of evil, a wind of evil with no good in it at all. Ad-Dahhak: severe. At-Tabari judges the ill-omened reading the soundest, because that is the known meaning of nahs in the speech of the Arabs.",
            "bn": "ফী আইয়ামিন নাহিসাতিন: নাহিসাত দিনগুলোতে। তাবারী চারটি ব্যাখ্যা উল্লেখ করেন। ইবন আব্বাস (রাঃ): পরপর আসা দিন, যেগুলোতে আল্লাহ শাস্তি নাজিল করেছিলেন। মুজাহিদ: অশুভ। কাতাদা একটি সনদে কসম খেয়ে বলেন: আল্লাহর কসম, দিনগুলো ছিল সেই জাতির জন্য অশুভ। আরেক সনদে বলেন: অশুভ ও দুর্ভাগা। সুদ্দী: তাদের জন্য অশুভ দিন। ইবন যায়দ: অনিষ্টের দিন, অনিষ্টের বাতাস, যাতে কোনো কল্যাণ নেই। দাহহাক: কঠিন। তাবারীর মতে অশুভ অর্থটিই সবচেয়ে সঠিক, কারণ আরবদের ভাষায় নাহস শব্দের পরিচিত অর্থ এটাই।"
          },
          {
            "en": "Al-Qurtubi has Mujahid and Qatada for ill-omened, Ibn 'Abbas and 'Atiyya for consecutive, ad-Dahhak for severe, and adds two more: cold, reported by an-Naqqash, and dusty, reported by Ibn 'Isa. Al-Baghawi's gloss is grim and ill-omened, bearing misfortunes. Ibn Kathir reads the word as consecutive, and through 54:19, fi yawmi nahsin mustamirr, explains that they were first struck on a day that was ill-omened for them, and that this ill omen stayed with them until they were wiped out to the last.",
            "bn": "কুরতুবী অশুভ অর্থের জন্য মুজাহিদ ও কাতাদার নাম নেন, পরপর অর্থের জন্য ইবন আব্বাস (রাঃ) ও আতিয়্যার, কঠিন অর্থের জন্য দাহহাকের। তিনি আরও দুটি মত যোগ করেন: নাক্কাশের বর্ণনায় ঠান্ডা, ইবন ঈসার বর্ণনায় ধুলোভরা। বাগাভীর ব্যাখ্যা: দুর্ভাগা, অশুভ, দুর্দশায় ভরা। ইবন কাসীর শব্দটিকে পড়েন পরপর অর্থে। ৫৪:১৯ আয়াতের ফী ইয়াওমি নাহসিম মুস্তামির্র ধরে তিনি বোঝান, শাস্তি শুরু হয়েছিল এমন এক দিনে, যা তাদের জন্য অশুভ ছিল। তারপর সেই অশুভ তাদের সঙ্গেই লেগে থাকে, যতক্ষণ না শেষ মানুষটিও ধ্বংস হয়।"
          },
          {
            "en": "The word is also recited two ways. At-Tabari reports that most reciters of the cities read nahisat, with a vowel on the ha, while Nafi' and Abu 'Amr read nahsat, with the ha silent; al-Baghawi adds Ibn Kathir the reciter and Ya'qub to the second group. Abu 'Amr argued from yawmi nahsin in 54:19. Al-Qurtubi reports that Abu Hatim chose his reading and Abu 'Ubayd chose the other. At-Tabari's own verdict is that both are well-known readings with one meaning, since nahs and nahis are two known forms of the word.",
            "bn": "শব্দটির তিলাওয়াতও দুই রকম। তাবারী জানান, বিভিন্ন শহরের অধিকাংশ কারী পড়েছেন নাহিসাত, ‘হা’-তে যের দিয়ে। নাফি‘ ও আবু আমর পড়েছেন নাহসাত, ‘হা’ সাকিন রেখে। বাগাভী দ্বিতীয় দলে কারী ইবন কাসীর ও ইয়াকূবকেও রাখেন। আবু আমর দলিল দিতেন ৫৪:১৯ আয়াতের ইয়াওমি নাহসিন থেকে। কুরতুবী জানান, আবু হাতিম তাঁর কিরাআত বেছে নেন, আর আবু উবায়দ বেছে নেন অন্যটি। তাবারীর নিজের রায় হলো, দুটোই প্রসিদ্ধ কিরাআত, অর্থ একই। কারণ নাহস ও নাহিস, শব্দটির দুটো রূপই আরবিতে পরিচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "No Day Unlucky in Itself",
          "bn": "কোনো দিন নিজে অশুভ নয়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an stops on this phrase to head off a misreading. It states that it is established by the principles of Islam and the ahadith of the Prophet ﷺ that no day or night is in itself unlucky or ill-omened. The days of the windstorm over 'Ad are called unlucky, it explains, because those days had become ill-omened for them through their own misdeeds, and this does not mean they were ill-omened for everybody. It cites al-Mazhari and Bayan al-Qur'an for the point.",
            "bn": "মাআরিফুল কুরআন এই শব্দে থেমে একটি ভুল বোঝাবুঝির পথ আগেই বন্ধ করে। সেখানে বলা হয়েছে, ইসলামের মূলনীতি ও নবী ﷺ-এর হাদিস থেকে প্রতিষ্ঠিত যে, কোনো দিন বা রাত নিজে অশুভ বা অলক্ষুণে নয়। ‘আদের উপর ঝড়ের দিনগুলোকে অশুভ বলা হয়েছে, কারণ তাদের নিজেদের মন্দ কাজের ফলে দিনগুলো তাদের জন্য অশুভ হয়ে গিয়েছিল। এর মানে এই নয় যে, দিনগুলো সবার জন্য অশুভ ছিল। এ কথার সূত্র হিসেবে মাআরিফ মাযহারী ও বায়ানুল কুরআনের নাম নেয়।"
          },
          {
            "en": "Read the glosses again and the same qualifier is there. As-Suddi says ill-omened for them, 'alayhim. Qatada says ill-omened upon the people. Al-Muyassar writes days ill-omened for them, and Ibn Kathir a day that was ill-omened for them. The phrase speaks of what those days were to 'Ad, with the wind sent upon them, and gives no ground for marking a weekday or a date as unlucky. Ma'arif refers the wider question, whether anything can be ill-omened by its nature, to its author's Ahkam al-Qur'an, which was not consulted here.",
            "bn": "অর্থগুলো আবার পড়ুন, দেখবেন সবগুলোতে একই কথা জুড়ে আছে: তাদের জন্য। সুদ্দী বলেন: তাদের জন্য অশুভ, ‘আলাইহিম। কাতাদা বলেন: সেই জাতির জন্য অশুভ। মুয়াসসার লেখে: তাদের জন্য অশুভ দিন। ইবন কাসীর লেখেন: এমন দিন, যা তাদের জন্য অশুভ ছিল। অর্থাৎ কথাটা ‘আদকে নিয়ে: তাদের উপর যখন বাতাস পাঠানো হলো, সেই দিনগুলো তাদের জন্য কী ছিল। সপ্তাহের কোনো বার বা কোনো তারিখকে অশুভ ধরার ভিত্তি এখানে নেই। কোনো কিছু স্বভাবগতভাবেই অশুভ হতে পারে কি না, এই বড় প্রশ্নের জন্য মাআরিফ পাঠককে পাঠায় লেখকের নিজের বই আহকামুল কুরআনে। সে বই এখানে দেখা হয়নি।"
          },
          {
            "en": "How long the wind lasted, this verse does not say. Ibn Kathir and as-Sa'di both bring in 69:7, sakhkharaha 'alayhim sab'a layalin wa thamaniyata ayyamin husuma: He imposed it on them for seven nights and eight days in succession. As-Sa'di quotes the rest of that verse, the people lying felled as though they were hollow trunks of palm trees, and adds that it destroyed them until nothing of them could be seen but their dwellings. Al-Baghawi and al-Qurtubi report from ad-Dahhak that Allah had held back the rain from them for three years, while the winds kept blowing without rain.",
            "bn": "বাতাস কত দিন চলেছিল, এ আয়াত তা বলে না। ইবন কাসীর ও সা'দী দুজনেই ৬৯:৭ আয়াত টেনে আনেন: সাখখারাহা ‘আলাইহিম সাব‘আ লায়ালিন ওয়া সামানিয়াতা আইয়ামিন হুসূমা। তিনি তা তাদের উপর চাপিয়ে রেখেছিলেন একটানা সাতটি রাত ও আটটি দিন। সা'দী সেই আয়াতের বাকি অংশও উদ্ধৃত করেন: লোকগুলো সেখানে পড়ে আছে, যেন খেজুর গাছের ফাঁপা কাণ্ড। তিনি আরও বলেন, বাতাস তাদের এমনভাবে ধ্বংস করল যে, তাদের ঘরবাড়ি ছাড়া আর কিছুই দেখা যেত না। বাগাভী ও কুরতুবী দাহহাক থেকে বর্ণনা করেন, আল্লাহ টানা তিনটি বছর তাদের থেকে বৃষ্টি আটকে রেখেছিলেন, আর বৃষ্টি ছাড়াই বাতাস বইতে থাকত।"
          }
        ]
      },
      {
        "h": {
          "en": "Tasted Here, Worse There",
          "bn": "এখানে স্বাদ, সেখানে আরও কঠিন"
        },
        "p": [
          {
            "en": "Li-nudhiqahum 'adhaba l-khizyi fi l-hayati d-dunya: to make them taste the punishment of disgrace in the life of this world. The commentators gloss khizy with words of abasement. Al-Muyassar has the punishment of dhull and hawan, humiliation and contempt; al-Baghawi has hun and dhull. As-Sa'di explains it as the disgrace by which they were shamed and exposed among the creation. Al-Qurtubi reads the lam as purpose, so that We might make them taste it, and names the means: the barren wind, the phrase of 51:41.",
            "bn": "লিনুযীকাহুম ‘আযাবাল খিযয়ি ফিল হায়াতিদ দুনইয়া: যাতে দুনিয়ার জীবনে তাদের লাঞ্ছনার শাস্তির স্বাদ দিই। তাফসীরকারেরা খিযয়ের অর্থ করেন অপমান বোঝানো শব্দ দিয়ে। মুয়াসসার বলে যিল্লত ও হাওয়ানের শাস্তি, অর্থাৎ অপমান ও হেয়তা। বাগাভী বলেন হূন ও যিল্লত। সা'দীর ব্যাখ্যায় এ সেই লাঞ্ছনা, যাতে তারা গোটা সৃষ্টির সামনে অপদস্থ ও বেআব্রু হয়েছিল। কুরতুবী ‘লাম’-কে উদ্দেশ্য অর্থে পড়েন: যাতে আমি তাদের স্বাদ দিই। মাধ্যমটিও তিনি বলে দেন: বন্ধ্যা বাতাস, ৫১:৪১ আয়াতের শব্দে।"
          },
          {
            "en": "Wa-la-'adhabu l-akhirati akhza: and the punishment of the Hereafter is more disgracing. Al-Baghawi glosses akhza as more severe in abasement, al-Muyassar as more severe in humiliation and contempt, and Ibn Kathir as more severe in disgrace for them. At-Tabari has it as Our punishing them in the Hereafter is more disgracing for them, harsher in abasement and humbling. Al-Qurtubi says greater and more severe. Ibn Kathir draws the halves together: the disgrace of this world was joined, for them, to the punishment of the Hereafter.",
            "bn": "ওয়ালা‘আযাবুল আখিরাতি আখযা: আর আখিরাতের শাস্তি আরও লাঞ্ছনাকর। বাগাভী আখযার অর্থ করেন অপমানে আরও কঠিন। মুয়াসসার বলে অপমান ও হেয়তায় আরও কঠিন। ইবন কাসীর বলেন, তাদের জন্য লাঞ্ছনায় আরও কঠিন। তাবারীর ভাষায়, আখিরাতে আমার দেওয়া শাস্তি তাদের জন্য আরও লাঞ্ছনাকর, অপমান আর হীনতায় আরও কঠোর। কুরতুবী বলেন, আরও বড়, আরও কঠিন। ইবন কাসীর দুই অংশকে এক সুতোয় গাঁথেন: দুনিয়ার লাঞ্ছনা তাদের বেলায় গিয়ে মিশেছে আখিরাতের শাস্তির সঙ্গে।"
          },
          {
            "en": "Wa-hum la yunsarun: and they will not be helped. At-Tabari makes the subject 'Ad and the scene the Day of Resurrection: when Allah punishes them, there will be no helper against Him to rescue them or take their side. Ibn Kathir reads it of the Hereafter, just as they were not helped in this world. Al-Muyassar names the help denied: no one will keep the punishment away from them. As-Sa'di says they will not be shielded from Allah's punishment, nor can they benefit themselves. The boast of 41:15 ends with no helper at all.",
            "bn": "ওয়াহুম লা ইউনসারূন: আর তাদের সাহায্য করা হবে না। তাবারী বলেন, এখানে ‘তারা’ মানে ‘আদ, আর দৃশ্যটি কিয়ামতের দিনের। আল্লাহ যখন তাদের শাস্তি দেবেন, তাঁর বিরুদ্ধে কোনো সাহায্যকারী থাকবে না, যে তাদের উদ্ধার করবে বা তাদের পক্ষ নেবে। ইবন কাসীর এটাকে আখিরাতের কথা ধরেন, ঠিক যেমন দুনিয়াতেও তারা সাহায্য পায়নি। মুয়াসসার বলে দেয় কোন সাহায্য মিলবে না: শাস্তি ঠেকিয়ে রাখার কেউ থাকবে না। সা'দী বলেন, আল্লাহর শাস্তি থেকে তাদের আড়াল করা হবে না, আর নিজেরাও নিজেদের কোনো উপকার করতে পারবে না। ৪১:১৫ আয়াতের দম্ভ শেষ হয় একজন সাহায্যকারীও না পেয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Saba and Dabur",
          "bn": "সাবা আর দাবূর"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith to it or gives an occasion of revelation. One narration does name the wind that destroyed 'Ad, though it is a general saying, not tied to 41:16 by these sources. Ibn 'Abbas narrates that the Prophet ﷺ said: \"I was granted victory with As-Saba and the nation of 'Ad was destroyed by Ad-Dabur (westerly wind).\" Al-Bukhari records it in his Sahih, number 1035, and adds no grading of his own.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই আয়াতের সঙ্গে কোনো হাদিস জোড়েনি, নাজিলের কোনো প্রেক্ষাপটও দেয়নি। তবে একটি বর্ণনায় ‘আদকে ধ্বংসকারী বাতাসের নাম আছে। বর্ণনাটি সাধারণ, এই সূত্রগুলো একে ৪১:১৬ আয়াতের সঙ্গে যুক্ত করেনি। ইবন আব্বাস (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: \"আমাকে সাবা বাতাস দিয়ে বিজয় দেওয়া হয়েছে, আর ‘আদ জাতিকে ধ্বংস করা হয়েছে দাবূর, অর্থাৎ পশ্চিমা বাতাস দিয়ে।\" বুখারী এটি তাঁর সহীহ গ্রন্থে এনেছেন, নম্বর ১০৩৫। আলাদা কোনো মান তিনি উল্লেখ করেননি।"
          },
          {
            "en": "The narration sets two winds in one breath, one bringing help and one bringing ruin. The verse supplies what the narration leaves out: the cold, the roar, the force and the days. In neither text is the wind chance weather, for the verse says arsalna, We sent it. Neither text, though, gives the reader a key for reading the winds of today, and the last section turns to that.",
            "bn": "বর্ণনাটি এক নিঃশ্বাসে দুটি বাতাসের কথা বলে। একটি এনেছিল সাহায্য, অন্যটি ধ্বংস। বর্ণনায় যা নেই, আয়াত তা জানায়: ঠান্ডা, গর্জন, প্রচণ্ডতা আর সেই দিনগুলো। বর্ণনা হোক বা আয়াত, কোথাও বাতাসটা নিছক আকস্মিক আবহাওয়া নয়, কারণ আয়াত বলছে আরসালনা, আমি পাঠিয়েছি। তবু আজকের বাতাস দেখে কিছু পড়ে নেওয়ার চাবি এ দুটির কোনোটিই পাঠকের হাতে দেয় না। শেষ অংশে সেই কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Verdict on Anyone Now",
          "bn": "আজ কারও উপর রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks only of what it names: a wind sent on 'Ad, a people who, in 41:15, were arrogant in the land without right and rejected Allah's signs. It licenses nothing against any living person or community. It gives no one standing to call a storm, flood or drought that strikes people today a punishment upon them, to brand a nation or group as a new 'Ad, or to treat a day or a date as cursed. The judgment it reports is Allah's, about one people of the past.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি শুধু সেটুকুই বর্ণনা করে, যা কুরআন বর্ণনা করেছে: ‘আদের উপর পাঠানো এক বাতাস। ৪১:১৫ আয়াত অনুযায়ী তারা দুনিয়াতে না-হক অহংকার করেছিল আর আল্লাহর আয়াত অস্বীকার করেছিল। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজ কোথাও ঝড়, বন্যা বা খরা হলে সেটাকে সেখানকার মানুষের শাস্তি বলে ঘোষণা করার অধিকার এ আয়াত কাউকে দেয় না। কোনো জাতি বা দলকে নতুন ‘আদ বানানোর, কিংবা কোনো দিন বা তারিখকে অভিশপ্ত ভাবারও না। এখানে যে ফয়সালার খবর, তা আল্লাহর, অতীতের একটি জাতিকে নিয়ে।"
          },
          {
            "en": "What the verse leaves the reader is a mirror. 'Ad trusted their strength, and Ibn Kathir saw the punishment come in the kind of that strength. Whatever we lean on, health, wealth, numbers or cleverness, is held on loan. The verse also weighs two disgraces and calls the second greater: being shamed before people in this life, and being disgraced in the Hereafter with no helper. A reader who fears the second more, and checks the heart for the quiet question who is stronger than me, has taken the verse where it points.",
            "bn": "পাঠকের জন্য আয়াত রেখে যায় একটি আয়না। ‘আদ ভরসা করেছিল নিজেদের শক্তির উপর, আর ইবন কাসীর দেখেছেন শাস্তি এসেছে সেই শক্তিরই জাতে। আমরা যার উপর ভর দিই, স্বাস্থ্য, সম্পদ, লোকবল বা বুদ্ধি, সবই ধার করা। আয়াত দুটি লাঞ্ছনাকে পাশাপাশি মাপে, আর দ্বিতীয়টিকে বলে বড়। একটি দুনিয়াতে মানুষের সামনে অপদস্থ হওয়া। অন্যটি আখিরাতে, যেখানে কোনো সাহায্যকারী নেই। যে পাঠক দ্বিতীয়টিকেই বেশি ভয় করেন, আর নিজের মনে খুঁজে দেখেন চুপিচুপি সেই প্রশ্নটা জাগছে কি না, আমার চেয়ে শক্তিশালী কে, তিনিই আয়াতের ইশারা ধরতে পেরেছেন।"
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
          "bn": "চামড়ার সাক্ষ্যের পরে"
        },
        "p": [
          {
            "en": "The scene is already under way. In 41:19 to 41:21 the enemies of Allah are driven to the Fire, their hearing, eyes and skins testify against them, and when they ask their skins why, the skins answer that Allah, who makes all things speak, made them speak. Then comes this verse: wa ma kuntum tastatiruna an yashhada 'alaykum sam'ukum wa la absarukum wa la juludukum, wa lakin zanantum anna-llaha la ya'lamu kathiran mimma ta'malun. It has two halves: something they did not do, and the thought that explains why.",
            "bn": "দৃশ্যটা আগেই শুরু হয়ে গেছে। ৪১:১৯ থেকে ৪১:২১ আয়াতে আল্লাহর দুশমনদের জাহান্নামের দিকে হাঁকিয়ে নেওয়া হয়, তাদের কান, চোখ আর চামড়া তাদের বিরুদ্ধে সাক্ষ্য দেয়, আর চামড়াকে কারণ জিজ্ঞেস করলে সে বলে, যে আল্লাহ সবকিছুকে কথা বলান, তিনিই আমাদের কথা বলিয়েছেন। এরপর এই আয়াত: ওয়ামা কুনতুম তাসতাতিরূনা আঁই ইয়াশহাদা আলাইকুম সাম‘উকুম ওয়ালা আবসারুকুম ওয়ালা জুলূদুকুম, ওয়ালাকিন যানানতুম আন্নাল্লাহা লা ইয়া‘লামু কাসীরাম মিম্মা তা‘মালূন। আয়াতের দুটি ভাগ। প্রথম ভাগে আছে এমন এক কাজ, যা তারা করেনি। দ্বিতীয় ভাগে আছে সেই ধারণা, যা তার কারণ বলে দেয়।"
          },
          {
            "en": "The people addressed are named two verses earlier: a'da' Allah, the enemies of Allah (41:19). The verse speaks only of what it names, a scene on the Day of Judgement spoken to those the Qur'an itself names that way. It licenses nothing against any living person or community, and no reader may lift the name from 41:19 and fasten it on a neighbour, a rival or a group. What a reader may take from it is a question turned inward, and that is how the commentators below handle it.",
            "bn": "কাদের উদ্দেশে কথা, তা দুই আয়াত আগেই বলা আছে: আ‘দাউল্লাহ, আল্লাহর দুশমন (৪১:১৯)। আয়াতটি শুধু তা-ই বর্ণনা করে, যা পাঠে আছে। কিয়ামতের দিনের এক দৃশ্য, আর সম্বোধন তাদের প্রতি, যাদের কুরআন নিজেই এই নামে ডেকেছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। ৪১:১৯ থেকে নামটা তুলে নিয়ে প্রতিবেশী, প্রতিপক্ষ বা কোনো দলের গায়ে সেঁটে দেওয়ার অধিকার কোনো পাঠকের নেই। পাঠক এখান থেকে নিতে পারেন নিজের দিকে ফেরানো একটা প্রশ্ন। নিচের তাফসীরকারেরাও আয়াতটিকে সেভাবেই পড়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Voice Is This?",
          "bn": "কথাটা কার মুখে?"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse as the skins and limbs still talking. When their owners blame them for testifying, they reply: you did not keep from us what you used to do; rather you committed disbelief and sins openly before Allah, not caring about Him, as you supposed, because you did not believe that He knows all your deeds. On this reading the verse continues the answer begun in 41:21, and the witnesses themselves explain why their testimony was possible: nothing had been kept from them.",
            "bn": "ইবন কাসীরের পাঠে কথাগুলো তখনো চামড়া আর অঙ্গপ্রত্যঙ্গের মুখে। মালিকেরা সাক্ষ্য দেওয়ার জন্য তাদের দোষ দিলে তারা জবাব দেয়: তোমরা যা করতে, তা আমাদের কাছ থেকে গোপন রাখতে না। বরং আল্লাহর সামনে খোলাখুলি কুফর আর গুনাহ করতে, তাঁর কোনো পরোয়া করতে না, অন্তত তোমাদের ধারণায়। কারণ তোমরা বিশ্বাস করতে না যে তিনি তোমাদের সব কাজ জানেন। এই পাঠে আয়াতটি ৪১:২১ আয়াতে শুরু হওয়া জবাবেরই বাকি অংশ। সাক্ষীরা নিজেরাই বলে দিচ্ছে, তাদের সাক্ষ্য কেন সম্ভব হলো: তাদের কাছ থেকে কিছুই লুকানো হয়নি।"
          },
          {
            "en": "Al-Qurtubi leaves the speaker open. It is possible, he says, that these are the words of the limbs to their owners, and it is possible that they are the words of Allah, or of the angels. The grammar allows all three, since the verse simply says 'you'. So Ibn Kathir names the limbs, while al-Qurtubi allows three speakers without choosing. The difference changes the tone more than the content: the same charge, spoken either by the body that was used or from above it.",
            "bn": "কুরতুবী বক্তার প্রশ্ন খোলা রাখেন। তাঁর কথায়, হতে পারে এগুলো অঙ্গপ্রত্যঙ্গের কথা, তাদের মালিকদের উদ্দেশে। আবার হতে পারে আল্লাহর কথা, কিংবা ফেরেশতাদের। আয়াত শুধু 'তোমরা' বলে, তাই ভাষার দিক থেকে তিনটিই চলে। মোটকথা, ইবন কাসীর বক্তা হিসেবে অঙ্গপ্রত্যঙ্গের নাম বলেন, আর কুরতুবী কোনোটি বেছে না নিয়ে তিন বক্তারই সুযোগ রাখেন। এই মতভেদে বিষয় বদলায় না, বদলায় সুর। অভিযোগ একটাই। হয় তা আসছে সেই শরীর থেকে, যাকে কাজে লাগানো হয়েছিল, নয়তো তার উপর থেকে।"
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
            "bn": "মূল শব্দ তাসতাতিরূন। তাবারী শুরুতেই জানান, এর অর্থ নিয়ে ব্যাখ্যাকারেরা একমত নন। কেউ বলেছেন এর মানে তাসতাখফূন, তোমরা লুকাতে না। এ মত তিনি আনেন সুদ্দী থেকে: তোমরা তাদের কাছ থেকে লুকাতে না। কেউ বলেছেন এর মানে তাত্তাকূন, তোমরা এ থেকে সাবধান থাকতে না। এটা মুজাহিদের শব্দ। আবার কেউ বলেছেন এর মানে তাযুন্নূন, তোমরা ধারণাও করতে না। এটা কাতাদার মত। তাঁর পাঠে আয়াতের অর্থ দাঁড়ায়: তোমরা ভাবতেই পারতে না যে তোমাদের কান আর চোখ তোমাদের বিরুদ্ধে সাক্ষ্য দেবে।"
          },
          {
            "en": "The others line up behind these three. Al-Baghawi says hiding is the meaning according to most scholars, then records Mujahid's guarding and Qatada's thinking. Al-Qurtubi gives the same order, hiding in the view of most scholars, then guarding from Mujahid, then thinking from Qatada. The Muyassar keeps to hiding: you did not conceal yourselves while committing sins, out of fear that your hearing, sight and skins would testify. As-Sa'di joins two of them: you were not hiding from your limbs' testimony, and you were not wary of it.",
            "bn": "অন্যরা এই তিনটি মতের কোনো না কোনোটির পেছনে দাঁড়ান। বাগাভী বলেন, অধিকাংশ আলেমের মতে অর্থ লুকানো। এরপর তিনি মুজাহিদের সাবধানতা আর কাতাদার ধারণার কথাও লিখে রাখেন। কুরতুবীর ক্রমও একই: অধিকাংশ আলেমের মতে লুকানো, তারপর মুজাহিদের মতে সাবধানতা, তারপর কাতাদার মতে ধারণা। মুয়াসসার লুকানোর অর্থেই থাকে: গুনাহ করার সময় তোমরা আড়াল খুঁজতে না এই ভয়ে যে তোমাদের কান, চোখ আর চামড়া সাক্ষ্য দেবে। সা'দী দুটিকে মিলিয়ে বলেন, অঙ্গের সাক্ষ্য থেকে তোমরা লুকাতে না, আর তা নিয়ে সতর্কও থাকতে না।"
          },
          {
            "en": "At-Tabari then weighs them. The soundest view, he says, is that it means hiding, because hiding is the known sense of istitar. That is his judgement, and he states its reason. Mujahid's and Qatada's readings remain on the record, carried by al-Qurtubi and al-Baghawi without rebuttal. So the verse is read three ways: you were not hiding, you were not guarding yourselves, you did not even expect it. Each names a different failure, of the act, of caution, or of belief, and this page keeps all three.",
            "bn": "এরপর তাবারী মতগুলো ওজন করেন। তাঁর মতে সবচেয়ে সঠিক হলো লুকানোর অর্থ, কারণ ইসতিতার শব্দের পরিচিত অর্থই আড়াল হওয়া। এটা তাঁর বিচার, আর কারণটাও তিনি বলে দেন। তবে মুজাহিদ আর কাতাদার ব্যাখ্যা বাদ পড়েনি। কুরতুবী আর বাগাভী কোনো খণ্ডন ছাড়াই সেগুলো উল্লেখ করেছেন। ফলে আয়াতের তিনটি পাঠ দাঁড়ায়: তোমরা লুকাতে না, তোমরা সাবধান থাকতে না, তোমরা এমনটা ভাবতেও না। একেকটিতে একেক রকম ব্যর্থতা, কোথাও কাজের, কোথাও সতর্কতার, কোথাও বিশ্বাসের। এ লেখা তিনটিকেই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Can Anyone Hide From Himself?",
          "bn": "নিজের কাছ থেকে কি লুকানো যায়?"
        },
        "p": [
          {
            "en": "The hiding reading raises an obvious question, and at-Tabari asks it himself: how can a person hide from himself what he does? His answer is that the hiding meant here is leaving the act. A man conceals a sin from his own limbs only by not committing it. So he paraphrases: you were not hiding, and so leaving what Allah forbade in the world, out of caution lest your hearing and eyes testify against you today. Al-Qurtubi reasons the same way: since no one can hide his deed from himself, hiding here means abandoning the sin.",
            "bn": "লুকানোর অর্থ নিলে একটা প্রশ্ন সামনে আসে, আর তাবারী নিজেই সেটা তোলেন: মানুষ নিজের করা কাজ নিজের কাছ থেকে লুকাবে কীভাবে? তাঁর জবাব, এখানে লুকানো মানে কাজটা ছেড়ে দেওয়া। নিজের অঙ্গের কাছ থেকে গুনাহ লুকানোর একটাই উপায়, গুনাহটা না করা। তাই তাঁর ভাষ্যে অর্থ দাঁড়ায়: তোমরা আড়াল হতে না, অর্থাৎ দুনিয়াতে আল্লাহর হারাম করা কাজ ছেড়ে দিতে না, এই ভয়ে যে আজ তোমাদের কান আর চোখ সাক্ষ্য দেবে। কুরতুবীর যুক্তিও এক। কেউ নিজের কাজ নিজের কাছ থেকে লুকাতে পারে না, তাই এখানে লুকানোর মানে গুনাহ ছেড়ে দেওয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an makes the point in plain terms. A person who wants to commit a sin may hide it from other people, but how can he hide it from his own limbs? Once it is known that our ears, eyes, hands, feet, skin and hair will give true evidence when questioned, there is no way to hide a sin, and the only way to avoid the disgrace is to keep away from it. Read this way, the hiding reading arrives at the same door as Mujahid's guarding: the only cover that works is not doing it.",
            "bn": "মাআরিফুল কুরআন কথাটা সহজ ভাষায় বলে। গুনাহ করতে চাইলে মানুষ তা অন্য মানুষের কাছ থেকে লুকাতে পারে, কিন্তু নিজের অঙ্গপ্রত্যঙ্গের কাছ থেকে লুকাবে কী করে? যখন জানা গেল আমাদের কান, চোখ, হাত, পা, চামড়া, এমনকি চুলও জিজ্ঞাসিত হলে সত্য সাক্ষ্য দেবে, তখন গুনাহ লুকানোর আর কোনো পথ থাকে না। লাঞ্ছনা এড়ানোর একমাত্র উপায় গুনাহ থেকে দূরে থাকা। এভাবে পড়লে লুকানোর অর্থ গিয়ে মেশে মুজাহিদের সাবধানতার অর্থের সঙ্গে। যে আড়াল সত্যিই কাজে দেয়, তা হলো কাজটাই না করা।"
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
            "bn": "দ্বিতীয় ভাগে কারণ: ওয়ালাকিন যানানতুম আন্নাল্লাহা লা ইয়া‘লামু কাসীরাম মিম্মা তা‘মালূন, বরং তোমরা ভেবেছিলে, তোমরা যা কর তার অনেক কিছুই আল্লাহ জানেন না। তাবারী যানানতুম-এর অর্থ করেন হাসিবতুম, তোমরা হিসাব কষে নিয়েছিলে। দুনিয়ায় আল্লাহর নাফরমানি করার সময় তোমরা ধরে নিয়েছিলে, তোমাদের অনেক নোংরা কাজ তিনি জানেন না। এ কারণেই তোমরা আড়াল খোঁজোনি, তাঁর হারাম করা কাজও ছাড়োনি। মুয়াসসার আর সা'দী ধারণাটাকে গুনাহের সঙ্গেই জুড়ে দেন। গুনাহে পা বাড়াতে গিয়েই তোমরা এমন ভেবেছিলে, আর তাই তোমাদের কাছ থেকে যা ঘটার তা-ই ঘটেছে।"
          },
          {
            "en": "Ibn Kathir puts it as a belief about extent: you did not believe that He knows all of your deeds. The word kathiran carries that. The thought was not that Allah knows nothing, but that a large part escapes Him. Al-Qurtubi adds what followed: so you argued over it, until your limbs testified against you with your deeds. Ma'arif al-Qur'an calls the assumption false against an evident matter, since any intelligent person could see that He who created him and gave him hearing and sight will know his deeds. What the thought led to is the next verse's subject.",
            "bn": "ইবন কাসীর একে দেখেন আল্লাহর জ্ঞানের পরিধি নিয়ে এক বিশ্বাস হিসেবে: তোমরা বিশ্বাস করতে না যে তিনি তোমাদের সব কাজ জানেন। কাসীরান শব্দটাই এ কথা বহন করে। ধারণাটা এমন ছিল না যে আল্লাহ কিছুই জানেন না। ধারণা ছিল, অনেকটাই তাঁর অগোচরে থেকে যায়। কুরতুবী এর পরের ঘটনাও জুড়ে দেন: তাই তোমরা এ নিয়ে তর্ক করলে, শেষে তোমাদের অঙ্গই তোমাদের কাজের সাক্ষ্য দিল। মাআরিফুল কুরআন বলে, এ ধারণা মিথ্যা, একটা সুস্পষ্ট বিষয়ের বিপরীত। যিনি মানুষকে সৃষ্টি করেছেন, শোনার আর দেখার শক্তি দিয়েছেন, তিনি যে তার কাজ জানবেন, যেকোনো বুদ্ধিমান মানুষই তা বুঝতে পারে। ধারণাটা তাদের কোথায় নিল, সেটা পরের আয়াতের বিষয়।"
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
            "bn": "তাবারী, ইবন কাসীর, কুরতুবী আর বাগাভী সবাই এ আয়াতের সঙ্গে একটি শানে নুযূল জুড়ে দেন, আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে। তাবারী একে পরিচয় করান এভাবে: বর্ণিত আছে, আয়াতটি নাজিল হয়েছিল একদল লোককে কেন্দ্র করে, যারা নিজেদের মধ্যে তর্ক করছিল যে তাদের গোপন কথাবার্তা আল্লাহ জানেন কি না। বর্ণনাগুলোর খুঁটিনাটিতে পার্থক্য আছে। তাবারী আর ইবন কাসীরের কোনো কোনো সনদে ইবনে মাসউদ (রাঃ) কাবার গিলাফের আড়ালে লুকিয়ে ছিলেন। দুটি বর্ণনা যেন মিশে না যায়, তাই এখানে একটি সংকলনের ভাষ্যই পুরোটা তুলে দেওয়া হলো।"
          },
          {
            "en": "Sahih al-Bukhari (4817), from Abdullah, as it appears on quranx in the Dar-us-Salam numbering: \"There gathered near the House (i.e. the Ka`ba) two Quraishi persons and a person from Thaqif (or two persons from Thaqif and one from Quraish), and all of them with very fat bellies but very little intelligence. One of them said, 'Do you think that Allah hears what we say?'",
            "bn": "সহীহ বুখারী (৪৮১৭), আবদুল্লাহ (রাঃ) থেকে, কুরআনএক্স সাইটে দারুস সালামের নম্বর অনুযায়ী: কাবার কাছে দুজন কুরাইশি আর একজন সাকাফি জড়ো হলো, কিংবা দুজন সাকাফি আর একজন কুরাইশি। তাদের সবার পেটে চর্বি অনেক, অন্তরে বুঝ কম। তাদের একজন বলল, তোমাদের কী মনে হয়, আমরা যা বলি আল্লাহ কি তা শোনেন?"
          },
          {
            "en": "Another said, 'He hears us when we talk in a loud voice, but He doesn't hear us when we talk in a low tone.' The third said, 'If He can hear when we talk in a loud tone, then He can also hear when we speak in a low tone.' Then Allah, the Honorable, the Majestic revealed: 'And you have not been screening against yourself lest your ears, and eyes and your skins should testify against you....'\" That is the whole of the narration in this chain.",
            "bn": "আরেকজন বলল, আমরা জোরে বললে তিনি শোনেন, চুপিচুপি বললে শোনেন না। তৃতীয়জন বলল, জোরে বললে যদি শোনেন, তবে চুপিচুপি বললেও শোনেন। তখন মহান ও পরাক্রমশালী আল্লাহ নাজিল করলেন: ওয়ামা কুনতুম তাসতাতিরূনা আঁই ইয়াশহাদা আলাইকুম সাম‘উকুম ওয়ালা আবসারুকুম ওয়ালা জুলূদুকুম, তোমরা আড়াল হতে না এই ভয়ে যে তোমাদের কান, চোখ আর চামড়া তোমাদের বিরুদ্ধে সাক্ষ্য দেবে। এই সনদে বর্ণনাটি এতটুকুই, পুরোটা এখানে দেওয়া হলো।"
          },
          {
            "en": "The report stands in al-Bukhari's Sahih, which is his own judgement of it, and nothing more is claimed for it here. It fits the word kathiran closely. The second man does not deny that Allah hears; he only limits the hearing to what is said aloud, and the third man's reply is the correction. The description of the three is Ibn Mas'ud's, of three particular men on one day. It says nothing about the tribes it names or anyone descended from them, and licenses nothing against any living person or community.",
            "bn": "বর্ণনাটি বুখারী তাঁর সহীহ গ্রন্থে রেখেছেন, এটাই এর ব্যাপারে তাঁর নিজের রায়। এখানে এর বেশি কিছু দাবি করা হচ্ছে না। কাসীরান শব্দের সঙ্গে বর্ণনাটি খুব মেলে। দ্বিতীয় লোকটি আল্লাহর শোনাকে অস্বীকার করেনি। সে শুধু শোনাকে জোরে বলা কথার মধ্যে সীমিত করেছে, আর তৃতীয়জনের জবাবেই ভুলটা ধরা পড়ে। তিনজনের যে বর্ণনা, তা ইবনে মাসউদ (রাঃ)-এর, একটি দিনের নির্দিষ্ট তিনজন মানুষ সম্পর্কে। যে গোত্রগুলোর নাম এসেছে, তাদের বা তাদের বংশধরদের সম্পর্কে এতে কিছুই বলা হয়নি। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধেও এটি কোনো অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Witnesses Beyond Suspicion",
          "bn": "যে সাক্ষীকে সন্দেহ করা যায় না"
        },
        "p": [
          {
            "en": "Qatada, in at-Tabari's report, does not stop at the meaning of the word. He turns to the reader: by Allah, son of Adam, there are witnesses against you from your own body that cannot be accused, so watch them, and fear Allah in your secret affairs and your open ones, for nothing hidden is hidden from Him; darkness to Him is light, and the secret to Him is open. Then he adds: whoever is able to die thinking well of Allah, let him do so, and there is no power except with Allah.",
            "bn": "তাবারীর বর্ণনায় কাতাদা শব্দের অর্থে থেমে থাকেন না। তিনি পাঠকের দিকে ফেরেন: আল্লাহর কসম, হে আদমসন্তান, তোমার নিজের শরীরেই তোমার বিরুদ্ধে এমন সাক্ষী আছে, যাদের অভিযুক্ত করা যায় না। তাই তাদের খেয়াল রাখো। গোপনে আর প্রকাশ্যে আল্লাহকে ভয় করো, কারণ কোনো গোপন জিনিসই তাঁর কাছে গোপন নয়। অন্ধকার তাঁর কাছে আলো, আর গোপন কথা তাঁর কাছে খোলা। তারপর তিনি যোগ করেন: যে আল্লাহর প্রতি সুধারণা নিয়ে মরতে পারে, সে যেন তা-ই করে। আর আল্লাহর সাহায্য ছাড়া কোনো শক্তি নেই।"
          },
          {
            "en": "Al-Qurtubi gives more of Qatada's picture of the testimony. Your hearing will say: I heard the truth and did not take it in, and I heard what was not permitted. Your eyes will say: I saw the signs of Allah and took no lesson, and I looked at what was not permitted. The testimony, on this account, covers what the organ received and neglected as well as what it reached for. Qatada's closing words also sit beside the verse's second half: they had thought wrongly about Allah, and he urges the reader to think well of Him.",
            "bn": "কুরতুবী সাক্ষ্যের ব্যাপারে কাতাদার আরও কিছু কথা আনেন। তোমার কান বলবে: আমি সত্য শুনেছিলাম, কিন্তু মনে ধরে রাখিনি। আর যা শোনা জায়েজ ছিল না, তা-ও শুনেছি। তোমার চোখ বলবে: আল্লাহর নিদর্শন দেখেছিলাম, কিন্তু শিক্ষা নিইনি। আর যার দিকে তাকানো জায়েজ ছিল না, তার দিকেও তাকিয়েছি। এই বর্ণনায় সাক্ষ্য শুধু অঙ্গ কী করেছে তা নিয়ে নয়। অঙ্গ যা পেয়েছিল অথচ কাজে লাগায়নি, সেটাও সাক্ষ্যের অংশ। কাতাদার শেষ কথাটিও আয়াতের দ্বিতীয় ভাগের পাশেই বসে। তারা আল্লাহ সম্পর্কে ভুল ধারণা করেছিল, আর তিনি পাঠককে বলেন তাঁর প্রতি সুধারণা রাখতে।"
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
            "bn": "তাসতাতিরূন-এর তিন পাঠ পাঠকের কাছে তিনটি আলাদা প্রশ্ন রাখে। লুকানোর পাঠ জিজ্ঞেস করে, আমি কি মানুষের চোখ থেকে গুনাহ ঢাকি, অথচ করি নিজের চোখ-কানের সামনেই? সাবধানতার পাঠ জিজ্ঞেস করে, সেই সাক্ষ্যের কথা ভেবে আমার হাত কখনো থামে কি? ধারণার পাঠ জিজ্ঞেস করে, আমি আদৌ তা বিশ্বাস করি তো? প্রথম প্রশ্নের জবাব যাঁরা দেন, সেই তাবারী, কুরতুবী আর মাআরিফুল কুরআন একই উপায় বলেন: আসল আড়াল হলো গুনাহটাই ছেড়ে দেওয়া। কাতাদার উপায় হলো সজাগ থাকা, গোপনে যেমন, প্রকাশ্যেও তেমন।"
          },
          {
            "en": "The second half asks something quieter. Few believers would say that Allah does not know what they do. But the verse names a thought of degree, not much rather than nothing, and that thought can live inside a person who would deny it in words. The second man by the House did not doubt that Allah hears; he only drew a line at the whisper. The third man's reasoning is the one to keep: if He hears the loud, He hears the low. Whatever my eyes, ears and skin are part of, He already knows.",
            "bn": "দ্বিতীয় ভাগের প্রশ্নটা আরও নিঃশব্দ। কোনো মুমিন মুখে বলবে না যে আল্লাহ তার কাজ জানেন না। কিন্তু আয়াত যে ধারণার কথা বলে, তা মাত্রার। কিছুই জানেন না, এমন নয়, বরং অনেকটা জানেন না। মুখে যে এ কথা অস্বীকার করবে, তার ভেতরেও এই ধারণা বাসা বাঁধতে পারে। কাবার পাশের দ্বিতীয় লোকটি সন্দেহ করেনি যে আল্লাহ শোনেন। সে শুধু ফিসফিসানির কাছে এসে একটা সীমা টেনেছিল। মনে রাখার মতো যুক্তি তৃতীয়জনের: জোরের কথা যিনি শোনেন, তিনি নিচু স্বরের কথাও শোনেন। আমার চোখ, কান আর চামড়া যাতেই শামিল থাকুক, তিনি তা আগেই জানেন।"
          }
        ]
      }
    ]
  },
  "41:25": {
    "sections": [
      {
        "h": {
          "en": "Companions Made Available",
          "bn": "সঙ্গী জুটিয়ে দেওয়া"
        },
        "p": [
          {
            "en": "Wa qayyadna lahum quranā': and We assigned to them companions. The verses before this one stand on the Day of Judgment, where hearing, sight and skin testify against their owners (41:20), where a false assumption about Allah is named as the thing that ruined them (41:23), and where the Fire is their residence whether they endure it or plead (41:24). Here the passage turns back to the life before that Day and shows one of the forces that shaped it: companions who stood beside these people and made things look fair to them.",
            "bn": "ওয়া কাইয়াদনা লাহুম কুরানা: আর আমি তাদের জন্য সঙ্গী জুটিয়ে দিয়েছিলাম। এর আগের আয়াতগুলো দাঁড়িয়ে আছে বিচারের দিনে। সেখানে কান, চোখ আর চামড়া নিজের মালিকের বিরুদ্ধে সাক্ষ্য দেয় (৪১:২০)। আল্লাহ সম্পর্কে তাদের ভুল ধারণাই যে তাদের ডুবিয়েছে, সে কথা বলে দেওয়া হয় (৪১:২৩)। আর তারা সবর করুক বা মিনতি করুক, আগুনই তাদের ঠিকানা (৪১:২৪)। এই আয়াতে এসে বর্ণনা ফিরে যায় সেই দিনের আগের জীবনে। দেখায়, কোন জিনিস তাদের সেই জীবন গড়ে দিয়েছিল। তার একটি হলো কিছু সঙ্গী, যারা পাশে থেকে সবকিছু তাদের চোখে সুন্দর করে তুলত।"
          },
          {
            "en": "The verb carries much of the meaning. Al-Qurtubi explains qayyada Allahu fulanan li-fulan as Allah bringing one person to another and putting him within his reach, and quotes al-Qushayri: qayyada Allahu li rizqan, Allah made provision available to me just as I had sought it. He adds that taqyid can also mean exchange, as in muqayada, trading goods for goods. Al-Baghawi glosses the word as We sent and We appointed, and records Muqatil's We prepared and az-Zajjaj's We arranged for them. As-Sa'di reads it as We decreed for them.",
            "bn": "অর্থের অনেকটা ভার বইছে ক্রিয়াটি। কুরতুবী বলেন, কাইয়াদাল্লাহু ফুলানান লি-ফুলান মানে আল্লাহ একজনকে আরেকজনের কাছে এনে দিলেন, তার নাগালে পৌঁছে দিলেন। এর সঙ্গে তিনি কুশাইরীর উদাহরণ আনেন: কাইয়াদাল্লাহু লী রিযকান, অর্থাৎ যেমনটা চেয়েছিলাম, আল্লাহ তেমনি রিযিক জুটিয়ে দিলেন। তিনি আরও বলেন, তাকয়ীদ শব্দে বদলের অর্থও আছে। মুকায়াদা মানে পণ্যের বদলে পণ্য দেওয়া। বাগাভী অর্থ করেন: আমি পাঠালাম, তাদের উপর লাগিয়ে দিলাম। মুকাতিলের ব্যাখ্যা তিনি আনেন, আমি প্রস্তুত করে রাখলাম, আর যাজ্জাজের ব্যাখ্যা, আমি তাদের জন্য ব্যবস্থা করে দিলাম। সা'দীর পাঠে এর অর্থ: আমি তাদের জন্য নির্ধারণ করে দিলাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Devils, People, or Both",
          "bn": "শয়তান, মানুষ, নাকি দুই-ই"
        },
        "p": [
          {
            "en": "Who are these companions? At-Tabari says nuzara' min ash-shayatin, peers from among the devils, whom Allah coupled with them so that they made their ugly deeds look fair. He supports it with two early reports: as-Suddi said the companion is the devil, and Mujahid said devils. Al-Baghawi gives the same, peers from the devils until they led them astray, and as-Sa'di says companions from the devils. Al-Qurtubi opens his comment with an-Naqqash: We prepared devils for them. For this group of readings, the companions are devils.",
            "bn": "এই সঙ্গীরা কারা? তাবারী বলেন, নুযারা মিনাশ শায়াতীন, অর্থাৎ শয়তানদের মধ্য থেকে তাদের সমগোত্রীয় কিছু সাথী। আল্লাহ এদের তাদের সঙ্গে জুড়ে দিয়েছিলেন, আর এরা তাদের কুৎসিত আমলগুলো সুন্দর করে দেখিয়েছিল। এর পক্ষে তিনি পূর্বসূরিদের দুটি বর্ণনা আনেন। সুদ্দী বলেছেন, সঙ্গী মানে শয়তান। মুজাহিদ বলেছেন, শয়তানেরা। বাগাভীও একই কথা বলেন: শয়তানদের মধ্য থেকে সমগোত্রীয় সাথী, শেষে যারা তাদের পথভ্রষ্ট করেছে। সা'দীর কথাও তাই, শয়তানদের মধ্য থেকে সঙ্গী। কুরতুবী তাঁর আলোচনা শুরু করেন নাক্কাশের উক্তি দিয়ে: আমি তাদের জন্য শয়তানদের প্রস্তুত রেখেছিলাম। এই ব্যাখ্যাগুলোর মতে সঙ্গীরা শয়তান।"
          },
          {
            "en": "Others widen the circle. Ibn Kathir says the companions are min shayatin al-ins wa-l-jinn, from the devils of humankind and of the jinn, and the Muyassar says the same: corrupt companions from the devils of humans and jinn. Al-Qurtubi records an unattributed view that the companions come from the jinn and the devils, and from humans as well, and that they make sins look fair to the people they sit with. So the sources give two answers. For some, devils are meant. For others, the word also takes in human beings who do the same work.",
            "bn": "অন্যরা গণ্ডিটা আরও বড় করেন। ইবন কাসীর বলেন, এই সঙ্গীরা মিন শায়াতীনিল ইনসি ওয়াল জিন্ন, মানুষ আর জ্বিন দুই জাতের শয়তানদের মধ্য থেকে। মুয়াসসারও একই কথা বলে: মানুষ ও জ্বিনের শয়তানদের মধ্য থেকে কিছু নষ্ট সঙ্গী। কুরতুবী নাম ছাড়া একটি মত উল্লেখ করেন। সে মতে সঙ্গীরা জ্বিন ও শয়তানদের মধ্য থেকে, আবার মানুষের মধ্য থেকেও। তারা যাদের সঙ্গে থাকে, তাদের চোখে গুনাহকে সুন্দর করে তোলে। তাহলে সূত্রগুলো দুটি উত্তর দেয়। কারও মতে এখানে শয়তানের কথাই বলা হচ্ছে। কারও মতে শব্দটি সেই মানুষদেরও ধরে, যারা একই কাজ করে।"
          },
          {
            "en": "Al-Qurtubi also keeps two less common readings, each introduced with qila, it is said. The first places the companions in the Fire: companions there for those whose deeds had been made to look fair in the world, the sense being that Allah decreed this would come about and ruled it upon them. The other has nothing to do with devils. Allah made people need each other, the poor needing the rich to gain something from him and the rich needing the poor for help, and so they made sins look fair to each other.",
            "bn": "কুরতুবী আরও দুটি কম প্রচলিত ব্যাখ্যা রেখে দেন। দুটোই এসেছে কীলা, অর্থাৎ বলা হয়, দিয়ে। প্রথমটি সঙ্গীদের জায়গা দেয় আগুনের ভেতরে: দুনিয়াতে যাদের আমল তাদের চোখে সুন্দর করে দেখানো হয়েছিল, সেখানে তাদের জন্য সঙ্গী। এর অর্থ, আল্লাহ নির্ধারণ করে রেখেছিলেন যে এমনটা হবে, আর তাদের উপর সে ফয়সালা দিয়েছিলেন। দ্বিতীয়টির সঙ্গে শয়তানের কোনো সম্পর্ক নেই। আল্লাহ মানুষকে একে অপরের মুখাপেক্ষী করেছেন। গরিব ধনীর কাছে যায় কিছু পাওয়ার জন্য, ধনী গরিবের কাছে যায় সাহায্যের জন্য। আর এভাবে তারা একে অপরের চোখে গুনাহকে সুন্দর করে তুলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ugliness Dressed as Beauty",
          "bn": "কুৎসিতের গায়ে সুন্দরের পোশাক"
        },
        "p": [
          {
            "en": "Fa-zayyanu lahum: and they made things fair-seeming to them. Tazyin is adornment, making a thing look attractive to the one who sees it. At-Tabari names what was adorned: qaba'ih a'malihim, the ugliest of their deeds. The companions made those deeds look good, and the people took them as good. The Muyassar uses the same phrase, their ugly deeds in this world, and adds that the companions called them to the world's pleasures and its forbidden desires. Nothing in these glosses has the deed itself change; what the companions change is how it looks.",
            "bn": "ফাযাইয়ানূ লাহুম: আর তারা তাদের চোখে সুন্দর করে দেখাল। তাযয়ীন মানে সাজানো, কোনো জিনিসকে দর্শকের চোখে আকর্ষণীয় করে তোলা। কী সাজানো হয়েছিল, তাবারী তার নাম বলেন: কাবাইহু আমালিহিম, তাদের সবচেয়ে কুৎসিত আমলগুলো। সঙ্গীরা সেই আমলগুলোকে ভালো করে দেখাল, আর লোকেরা সেগুলোকে ভালো বলেই নিল। মুয়াসসারও একই কথা বলে, দুনিয়াতে তাদের কুৎসিত আমল। সঙ্গে যোগ করে, সঙ্গীরা তাদের ডেকেছিল দুনিয়ার মজা আর হারাম কামনার দিকে। এসব ব্যাখ্যায় আমলটা নিজে বদলায় না। সঙ্গীরা বদলায় শুধু তার চেহারা।"
          },
          {
            "en": "As-Sa'di draws the scene more fully. The companions decorated the world before their eyes and invited them to its forbidden pleasures until they were tempted, and so they rushed into acts of disobedience to Allah and took whatever path they wished in fighting Allah and His messengers. He links the verse with 19:83, have you not seen that We sent the devils upon the disbelievers, ta'uzzuhum azza, and explains the phrase: they stir them up toward sins and urge them on. In his account the adornment does not stay still; it ends in a push.",
            "bn": "সা'দী ছবিটা আরও পূর্ণ করে আঁকেন। সঙ্গীরা দুনিয়াকে তাদের চোখের সামনে রঙিন করে সাজিয়েছিল। ডেকেছিল তার হারাম মজা আর কামনার দিকে, যতক্ষণ না তারা ফিতনায় পড়ে। তারপর তারা আল্লাহর নাফরমানিতে ঝাঁপিয়ে পড়ে, আল্লাহ ও তাঁর রাসূলদের বিরুদ্ধে লড়াইয়ে যে পথ ইচ্ছা ধরে। এখানে তিনি ১৯:৮৩ আয়াতটি টানেন: তুমি কি দেখোনি, আমি কাফিরদের উপর শয়তানদের পাঠিয়েছি, তাউযযুহুম আযযা? এর ব্যাখ্যায় তিনি বলেন, তারা তাদের গুনাহর দিকে উসকে দেয়, তাড়া দিতে থাকে। তাঁর বর্ণনায় সাজসজ্জা থেমে থাকে না, শেষে তা ধাক্কা হয়ে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Lay Before and Behind",
          "bn": "সামনের দিক, পেছনের দিক"
        },
        "p": [
          {
            "en": "Ma bayna aydihim wa ma khalfahum: what was before them and what was behind them. The most widely reported gloss reads the pair as this world and the next. At-Tabari, with as-Suddi behind him, says the companions made the affairs of this world fair to them and made them love it until they preferred it to the Hereafter. What was behind them they dressed up by calling them to deny the Return: whoever dies will not be raised, and there is no reward and no punishment. Al-Baghawi, the Muyassar and al-Qurtubi, citing Mujahid, read it the same way.",
            "bn": "মা বাইনা আইদীহিম ওয়া মা খালফাহুম: তাদের সামনে যা ছিল আর তাদের পেছনে যা ছিল। সবচেয়ে বেশি যে ব্যাখ্যা এসেছে, তাতে এ জোড়া মানে দুনিয়া আর আখিরাত। তাবারী সুদ্দীর বর্ণনার ভিত্তিতে বলেন, সঙ্গীরা দুনিয়ার বিষয়গুলো তাদের চোখে সুন্দর করে দেখিয়েছিল, তার প্রতি এমন ভালোবাসা জাগিয়েছিল যে তারা দুনিয়াকে আখিরাতের উপরে রেখেছিল। আর পেছনের দিকটা সাজিয়েছিল পুনরুত্থান অস্বীকারের দাওয়াত দিয়ে। বলেছিল, যে মারা যায় তাকে আর ওঠানো হবে না, সওয়াবও নেই, শাস্তিও নেই। বাগাভী, মুয়াসসার আর মুজাহিদের সূত্রে কুরতুবীও একই অর্থ করেন।"
          },
          {
            "en": "Others read the pair differently. Al-Qurtubi reports from Ibn Abbas the order reversed: what was before them is their denial of the Hereafter, and what was behind them is putting things off and being lured toward the world. He gives az-Zajjaj's reading, what they had done and what they had resolved to do, and an unattributed reading: the like of the sins that went before, and what would be done after them. Ibn Kathir reads past and future. Their past deeds were made to look fair, and as for what lay ahead, they saw themselves as nothing but doers of good.",
            "bn": "অন্যরা জোড়াটিকে অন্যভাবে পড়েন। কুরতুবী ইবন আব্বাস (রাঃ) থেকে উল্টো ক্রম বর্ণনা করেন। সামনে যা ছিল, তা আখিরাতের বিষয়গুলো অস্বীকার করা। পেছনে যা ছিল, তা হলো কাজ ফেলে রাখা আর দুনিয়ার দিকে লোভ জাগানো। যাজ্জাজের ব্যাখ্যাও তিনি আনেন: যা তারা করে ফেলেছিল, আর যা করার সংকল্প নিয়েছিল। নাম ছাড়া আরেকটি মতও আছে: আগে যে গুনাহ হয়ে গেছে তার মতো গুনাহ, আর তাদের পরে যা করা হবে। ইবন কাসীর পড়েন অতীত আর ভবিষ্যৎ হিসেবে। তাদের অতীতের আমল তাদের চোখে সুন্দর করে দেখানো হয়েছিল। আর সামনের দিকে তারা নিজেদের নেককার ছাড়া আর কিছু ভাবতেই পারত না।"
          },
          {
            "en": "Two of the commentators point to a step the verse leaves unsaid. Al-Qurtubi says wa ma khalfahum is not joined to the first phrase at all: the sense is and they made them forget what was behind them, with that verb understood. As-Sa'di describes the Hereafter's side in the same spirit. The companions made it seem far off, made them forget to remember it, and at times raised doubts that it would ever come, until fear of it left their hearts. The sources lay these readings side by side, and this article does not choose among them.",
            "bn": "দুজন তাফসীরকার এমন এক ধাপের দিকে ইঙ্গিত করেন, যা আয়াতে উচ্চারিত হয়নি। কুরতুবী বলেন, ওয়া মা খালফাহুম অংশটি প্রথম অংশের সঙ্গে জোড়া নয়। অর্থ হলো: আর তারা তাদের পেছনের জিনিসটা ভুলিয়ে দিয়েছিল। ভুলিয়ে দেওয়ার ক্রিয়াটি এখানে উহ্য। সা'দীও আখিরাতের দিকটা একই সুরে বর্ণনা করেন। সঙ্গীরা আখিরাতকে দূরের জিনিস বানিয়ে দেখিয়েছিল, তার জিকির ভুলিয়ে দিয়েছিল। কখনো কখনো তা আদৌ ঘটবে কি না, সে নিয়ে সন্দেহও ঢুকিয়ে দিয়েছিল, শেষে তার ভয় অন্তর থেকে বিদায় নিয়েছিল। সূত্রগুলো এ ব্যাখ্যাগুলো পাশাপাশি রাখে, আর এ লেখা তার কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "His Will, Their Turning Away",
          "bn": "তাঁর ইচ্ছা, তাদের মুখ ফেরানো"
        },
        "p": [
          {
            "en": "The verse says We assigned, and the commentators do not pass over it. Ibn Kathir opens his comment by saying that Allah mentions that He Himself led the idolaters astray, that this was by His will, His bringing into being and His power, and that He is al-Hakim, the Wise, in His acts, through the companions He assigned them from the devils of humans and jinn. At-Tabari, on the next clause, ties the outcome to their deeds: the punishment became due to them because of what they committed of what their companions had adorned for them.",
            "bn": "আয়াত বলছে, আমি জুটিয়ে দিয়েছিলাম। তাফসীরকারেরা কথাটা এড়িয়ে যান না। ইবন কাসীর আলোচনা শুরু করেন এভাবে: আল্লাহ জানাচ্ছেন, মুশরিকদের তিনিই পথভ্রষ্ট করেছেন। এটা ঘটেছে তাঁর ইচ্ছায়, তাঁর সৃষ্টিগত ফয়সালায় আর তাঁর কুদরতে। আর নিজের কাজে তিনি আল-হাকীম, প্রজ্ঞাময়। এ কাজ ঘটেছে মানুষ ও জ্বিনের শয়তানদের মধ্য থেকে তাদের জন্য যে সঙ্গী তিনি জুটিয়ে দিয়েছেন, তাদের মাধ্যমে। তাবারী পরের অংশের আলোচনায় পরিণতিকে তাদের আমলের সঙ্গে বাঁধেন। সঙ্গীরা তাদের জন্য যা সাজিয়েছিল, তারা তা করে বসেছিল। সে কারণেই তাদের উপর শাস্তি অবধারিত হয়েছিল।"
          },
          {
            "en": "As-Sa'di names a cause for the assignment itself. This empowering of devils over the deniers, he says, comes because of their turning away from the remembrance of Allah and His signs, and their rejection of the truth. He cites 43:36 to 43:37, where the same verb returns: whoever turns blindly from the remembrance of the Most Merciful, nuqayyid lahu, We assign him a devil, who becomes his companion, and they turn them from the way while they think they are guided. Ibn Kathir cites the same two verses. This article reports these statements as the commentators give them and adds no theology of its own.",
            "bn": "সা'দী খোদ এই জুটিয়ে দেওয়ার একটি কারণ উল্লেখ করেন। তিনি বলেন, অস্বীকারকারীদের উপর শয়তানদের এই চাপিয়ে দেওয়ার কারণ তাদের নিজেদের মুখ ফেরানো। তারা আল্লাহর জিকির আর তাঁর আয়াত থেকে মুখ ফিরিয়েছিল, সত্যকে অস্বীকার করেছিল। এর পক্ষে তিনি ৪৩:৩৬ ও ৪৩:৩৭ আয়াত আনেন, যেখানে একই ক্রিয়া আবার এসেছে। যে দয়াময়ের জিকির থেকে অন্ধের মতো মুখ ফিরিয়ে নেয়, নুকাইয়িদ লাহু, আমি তার জন্য এক শয়তান জুটিয়ে দিই, সে-ই হয় তার সঙ্গী। তারা তাদের পথ থেকে ফিরিয়ে রাখে, অথচ তারা ভাবে তারা হিদায়াতের উপর আছে। ইবন কাসীরও এই দুই আয়াত উদ্ধৃত করেন। তাফসীরকারেরা যেভাবে বলেছেন, এ লেখা কথাগুলো সেভাবেই তুলে ধরে, নিজের পক্ষ থেকে কোনো আকীদাগত ব্যাখ্যা যোগ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Among Nations Long Gone",
          "bn": "বিগত জাতিগুলোর কাতারে"
        },
        "p": [
          {
            "en": "Wa haqqa 'alayhimu-l-qawl: and the word came due upon them. As-Suddi, in at-Tabari, says the word is al-'adhab, the punishment, and Ibn Kathir calls it kalimat al-'adhab, the word of punishment. As-Sa'di reads haqqa as became binding, and adds that the decree and the measure came down with their punishment. Al-Qurtubi gives the sense of the whole clause: there became due upon them of punishment what had become due upon the nations before them who disbelieved as they disbelieved. Ibn Kathir describes those nations in the same way, as people who did what these people did.",
            "bn": "ওয়া হাক্কা আলাইহিমুল কাওল: আর তাদের উপর বাণী অবধারিত হয়ে গেল। তাবারীর বর্ণনায় সুদ্দী বলেন, এখানে বাণী মানে আযাব, শাস্তি। ইবন কাসীর একে বলেন কালিমাতুল আযাব, শাস্তির বাণী। সা'দী হাক্কা শব্দের অর্থ করেন, বাধ্যতামূলক হয়ে গেল। সঙ্গে বলেন, তাদের শাস্তি নিয়ে ফয়সালা আর তাকদীর নেমে এল। কুরতুবী গোটা অংশের অর্থ দেন এভাবে: তাদের আগের যে জাতিগুলো তাদের মতোই কুফরি করেছিল, তাদের উপর যে শাস্তি অবধারিত হয়েছিল, এদের উপরও তা-ই অবধারিত হলো। ইবন কাসীরও সেই জাতিগুলোর পরিচয় দেন একইভাবে: যারা এদের মতোই কাজ করেছিল।"
          },
          {
            "en": "Fi umamin, among nations, gets two readings of its preposition. Al-Baghawi, and one view in al-Qurtubi, take fi to mean ma'a, with: they enter along with the disbelieving nations before them into what those nations entered. Another view in al-Qurtubi, and as-Sa'di's gloss fi jumla, read it as numbered among them. Al-Qurtubi quotes a line of poetry for this use, whose sense he gives as: you are among others who were turned aside, not the only one. Min al-jinni wa-l-ins: at-Tabari says some of those nations were jinn and some human, and the Muyassar calls them the disbelievers of jinn and men.",
            "bn": "ফী উমামিন, জাতিগুলোর মধ্যে। এখানে ফী অব্যয়টির দুটি পাঠ আছে। বাগাভী, আর কুরতুবীর উল্লেখ করা এক মত, ফী-কে ধরেন মাআ অর্থে, অর্থাৎ সঙ্গে। আগের কাফির জাতিগুলো যেখানে ঢুকেছে, এরাও তাদের সঙ্গে সেখানে ঢুকবে। কুরতুবীর উল্লেখ করা আরেক মত, আর সা'দীর ব্যাখ্যা ফী জুমলা, একে পড়েন তাদের দলভুক্ত হিসেবে। এ ব্যবহারের পক্ষে কুরতুবী একটি কবিতার চরণ আনেন। তিনি তার অর্থ দেন এভাবে: যারা পথ থেকে সরে গেছে, তুমি তাদের আরও অনেকের দলে আছ, একা নও। মিনাল জিন্নি ওয়াল ইনস: তাবারী বলেন, সেই জাতিগুলোর কিছু ছিল জ্বিন, কিছু মানুষ। মুয়াসসার তাদের বলে জ্বিন ও মানুষের কাফিররা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Bargain Badly Made",
          "bn": "লোকসানের বেচাকেনা"
        },
        "p": [
          {
            "en": "Innahum kanu khasirin: indeed they were losers. At-Tabari explains the loss as a trade gone wrong: those nations were maghbunin, cheated in a bargain, because they sold the pleasure of Allah and His mercy for His anger and His punishment. Al-Qurtubi and the Muyassar give the loss three objects: their deeds in this world, and themselves and their families on the Day of Resurrection. As-Sa'di says they lost their religion and their Hereafter, and whoever loses in that way must be humbled, made wretched and punished. Ibn Kathir says they and those before them were equal in loss and ruin.",
            "bn": "ইন্নাহুম কানূ খাসিরীন: নিশ্চয়ই তারা ছিল ক্ষতিগ্রস্ত। তাবারী এই ক্ষতিকে ব্যাখ্যা করেন ঠকে যাওয়া বেচাকেনা হিসেবে। সেই জাতিগুলো ছিল মাগবূন, দরদামে ঠকে যাওয়া লোক। তারা আল্লাহর সন্তুষ্টি আর রহমত বেচে দিয়েছিল তাঁর অসন্তুষ্টি আর শাস্তির বিনিময়ে। কুরতুবী আর মুয়াসসার এ ক্ষতির তিনটি দিক দেখান: দুনিয়াতে তাদের আমল, আর কিয়ামতের দিন তারা নিজেরা আর তাদের পরিবার। সা'দী বলেন, তারা হারিয়েছে তাদের দ্বীন আর আখিরাত। আর যে এভাবে হারায়, তাকে লাঞ্ছিত হতে হবে, দুর্ভাগা হতে হবে, শাস্তি পেতে হবে। ইবন কাসীর বলেন, ক্ষতি আর ধ্বংসে এরা আর আগের জাতিগুলো সমান হয়ে গেল।"
          },
          {
            "en": "The verse describes these deniers and the nations of jinn and humans it names, and what came due upon them. It licenses nothing against any living person or community: nobody may point at a neighbour, a rival group or a whole people and declare them the companions of devils or the condemned of this verse. None of the commentaries consulted here attaches a hadith to this verse, so none is quoted here. The reports above come from the early exegetes as at-Tabari, al-Qurtubi and al-Baghawi transmit them.",
            "bn": "আয়াতটি বর্ণনা করে এই অস্বীকারকারীদের কথা, আর জ্বিন ও মানুষের যে জাতিগুলোর কথা সে বলে, তাদের কথা। তাদের উপর কী অবধারিত হয়েছিল, সেটাই আয়াতের বিষয়। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। প্রতিবেশী, প্রতিদ্বন্দ্বী কোনো দল বা গোটা কোনো জাতির দিকে আঙুল তুলে কেউ বলতে পারে না, এরাই শয়তানের সঙ্গী, এরাই এ আয়াতের দণ্ডিত লোক। যেসব তাফসীর দেখা হয়েছে, তার কোনোটি এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি, তাই এখানে কোনো হাদিস উদ্ধৃত হয়নি। উপরের বর্ণনাগুলো পূর্বসূরি মুফাসসিরদের, তাবারী, কুরতুবী ও বাগাভী যেভাবে বর্ণনা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Sits Beside Me",
          "bn": "আমার পাশে কে বসে"
        },
        "p": [
          {
            "en": "What a reader can carry away from the verse is a question about company. The commentators differ on who the companions are, but they describe the same work: making the wrong look fair, making this world loom large and the next one feel far away. That work can be heard in any voice that says a sin is harmless, a delay is wise, an account will never be called. Ibn Kathir's reading adds the quietest part of it: such companions leave a person seeing himself as nothing but a doer of good.",
            "bn": "আয়াত থেকে পাঠক যা নিয়ে যেতে পারেন, তা সঙ্গ নিয়ে একটি প্রশ্ন। সঙ্গীরা কারা, তা নিয়ে তাফসীরকারদের মতভেদ আছে। কিন্তু তাদের কাজের বর্ণনা সবার কাছে একই: অন্যায়কে সুন্দর দেখানো, দুনিয়াকে বিরাট করে তোলা আর আখিরাতকে দূরে সরিয়ে দেওয়া। যে কণ্ঠই বলে, এ গুনাহ তো কিছু না, পরে করলেই হবে, হিসাব কোনোদিন চাওয়া হবে না, তার ভেতরে এই কাজের আওয়াজ শোনা যায়। ইবন কাসীরের ব্যাখ্যা এর সবচেয়ে নিঃশব্দ দিকটা ধরিয়ে দেয়। এমন সঙ্গীর পাল্লায় পড়ে মানুষ নিজেকে নেককার ছাড়া আর কিছু ভাবতেই পারে না।"
          },
          {
            "en": "So the practical turn is inward. Which voices around me, in friendship, on a screen, or in my own head, make wrongdoing look attractive? Who helps me remember the Hereafter, and who helps me forget it? As-Sa'di links the assignment of a devil companion to turning away from the remembrance of Allah, citing 43:36, so that remembrance is part of the answer. And since some commentators count humans among such companions, a harder question follows: whose companion am I, and what have I made look fair to them?",
            "bn": "তাই বাস্তব কাজের দিকটা ভেতরের দিকে ফেরে। বন্ধুত্বে, পর্দার ওপারে, কিংবা আমার নিজের মাথার ভেতরে কোন কোন কণ্ঠ অন্যায়কে আকর্ষণীয় করে তোলে? কে আমাকে আখিরাতের কথা মনে করিয়ে দেয়, আর কে ভুলিয়ে দেয়? সা'দী ৪৩:৩৬ আয়াত টেনে শয়তান-সঙ্গী জুটিয়ে দেওয়াকে আল্লাহর জিকির থেকে মুখ ফেরানোর সঙ্গে যুক্ত করেন। তাহলে উত্তরের একটা অংশ সেই জিকিরই। আর কিছু তাফসীরকার যেহেতু মানুষকেও এমন সঙ্গীর মধ্যে গোনেন, তাই আরও কঠিন একটা প্রশ্ন সামনে আসে: আমি কার সঙ্গী, আর তার চোখে আমি কী সুন্দর করে সাজিয়েছি?"
          }
        ]
      }
    ]
  },
  "41:33": {
    "sections": [
      {
        "h": {
          "en": "After the Angels' Promise",
          "bn": "ফেরেশতাদের সুসংবাদের পরে"
        },
        "p": [
          {
            "en": "41:30 to 41:32, just before, speak of those who said our Lord is Allah and then stood firm: the angels descend on them saying do not fear and do not grieve, and promise them a welcome from One Forgiving and Merciful. At-Tabari reads 41:33 as part of that picture. In his gloss, the best in speech is whoever said our Lord is Allah, held firm on faith in Him and on His commands and prohibitions, and called Allah's servants to what he had said and done himself.",
            "bn": "ঠিক আগের ৪১:৩০ থেকে ৪১:৩২ আয়াতে আছে তাদের কথা, যারা বলেছে আমাদের রব আল্লাহ, তারপর অটল থেকেছে। ফেরেশতারা তাদের কাছে নেমে এসে বলে, ভয় পেয়ো না, দুঃখ কোরো না। ক্ষমাশীল, দয়াময়ের পক্ষ থেকে আপ্যায়নের প্রতিশ্রুতিও তারা দেয়। তাবারী ৪১:৩৩ আয়াতকে পড়েন সেই একই ছবির অংশ হিসেবে। তাঁর ব্যাখ্যায় কথায় সবচেয়ে উত্তম সেই ব্যক্তি, যে বলেছে আমাদের রব আল্লাহ, তাঁর প্রতি ঈমানে এবং তাঁর আদেশ-নিষেধ মানায় অটল থেকেছে, আর নিজে যা বলেছে ও করেছে, আল্লাহর বান্দাদের সেদিকেই ডেকেছে।"
          },
          {
            "en": "Ma'arif al-Qur'an makes the link in its own terms: the believers just described have faith and do good, and this verse adds a second trait of the wholly obedient, that they invite others to the same. Al-Qurtubi looks further back, to 41:26, where the deniers tell each other not to listen to this Qur'an and to make noise over it. He calls 41:33 a rebuke to those who urged one another to babble, and paraphrases it: what speech is better than the Qur'an, and who is better in speech than the one who calls to Allah?",
            "bn": "মাআরিফুল কুরআনও যোগসূত্রটা দেখায়, নিজের ভাষায়। আগের আয়াতের মুমিনরা ঈমান আনে, নেক আমল করে। এ আয়াত পুরোপুরি অনুগতদের দ্বিতীয় একটি গুণ যোগ করে: তারা অন্যদেরও সেদিকে ডাকে। কুরতুবী তাকান আরও পেছনে, ৪১:২৬ আয়াতে। সেখানে অস্বীকারকারীরা একে অপরকে বলে, এই কুরআন শুনো না, এর মধ্যে হট্টগোল করো। কুরতুবীর মতে ৪১:৩৩ আয়াত তাদের প্রতি ভর্ৎসনা, যারা পরস্পরকে বাজে কথার পরামর্শ দিয়েছিল। আয়াতের মর্ম তিনি বলেন এভাবে: কুরআনের চেয়ে উত্তম কথা আর কী, আর আল্লাহর দিকে আহ্বানকারীর চেয়ে কথায় উত্তম আর কে?"
          }
        ]
      },
      {
        "h": {
          "en": "No One Better in Speech",
          "bn": "কথায় এর চেয়ে উত্তম কেউ নেই"
        },
        "p": [
          {
            "en": "Wa man ahsanu qawlan: and who is better in speech? As-Sa'di classifies the question as an interrogative carrying a settled negation, meaning that no one is better. The Muyassar turns it straight into a statement: no one is better in speech than the one who calls to the oneness of Allah and to worshipping Him alone. After the opening question, the thirteen Arabic words go to the person, not the speech.",
            "bn": "ওয়া মান আহসানু কাওলান: কথায় কে বেশি উত্তম? সা'দী প্রশ্নটির ধরন চিনিয়ে দেন। এ এমন প্রশ্ন, যার ভেতরে একটা পাকা না-বাচক উত্তর বসানো আছে: কেউ নেই। মুয়াসসার প্রশ্নটাকে সরাসরি বিবৃতিতে বদলে নেয়: যে আল্লাহর তাওহীদের দিকে এবং একমাত্র তাঁরই ইবাদতের দিকে ডাকে, কথায় তার চেয়ে উত্তম কেউ নেই। তেরো শব্দের আরবি আয়াতে শুরুর প্রশ্নের পর বাকিটা গেছে মানুষটির বর্ণনায়, কথার নয়।"
          },
          {
            "en": "As-Sa'di also widens the noun. Qawlan, he says, means speech, but also a way and a condition: kalaman wa tariqatan wa halatan. On his reading the verse ranks a manner of life, not a well-turned sentence. That fits the description that follows, which has three parts, only one of them strictly speech. The caller is weighed by what he says, by what he does, and by what he openly declares himself to be, all under one word.",
            "bn": "সা'দী বিশেষ্যটির পরিধিও বাড়িয়ে দেন। তাঁর মতে কাওলান মানে কথা, তবে সেই সাথে পথ ও অবস্থাও: কালামান ওয়া তারীকাতান ওয়া হালাতান। এ ব্যাখ্যায় আয়াতটি মাপছে একটা গোটা জীবনধারা, সুন্দর করে গড়া কোনো বাক্য নয়। পরের বর্ণনার সাথেও তা মেলে। সেখানে তিনটি অংশ, যার মাত্র একটি খাঁটি অর্থে কথা। আহ্বানকারীকে মাপা হয় তিনটি জিনিসে: সে কী বলে, কী করে, আর প্রকাশ্যে নিজেকে কী বলে ঘোষণা করে। তিনটিই এসেছে একটি শব্দের ছাতার নিচে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Answers to Who",
          "bn": "কে সেই আহ্বানকারী"
        },
        "p": [
          {
            "en": "At-Tabari says plainly that the people of knowledge differed over whom this description means, and the fetched commentaries give three answers. The first is the Prophet ﷺ. At-Tabari reports it from as-Suddi, who said it is Muhammad ﷺ when he called to Islam, and from Ibn Zayd. Al-Qurtubi names Ibn Sirin, as-Suddi, Ibn Zayd and al-Hasan for it. Al-Baghawi names Ibn Sirin, as-Suddi and Ibn Abbas, adding that he called to the testimony that there is no god but Allah.",
            "bn": "তাবারী স্পষ্ট বলেন, এ গুণ দিয়ে কাকে বোঝানো হয়েছে, তা নিয়ে আলিমদের মধ্যে মতভেদ আছে। হাতে থাকা তাফসীরগুলো তিনটি উত্তর দেয়। প্রথম উত্তর: নবী ﷺ। তাবারী এটি বর্ণনা করেন সুদ্দী থেকে, যিনি বলেছেন, এ হলেন মুহাম্মাদ ﷺ, যখন তিনি ইসলামের দিকে ডেকেছিলেন। ইবন যায়দ থেকেও তিনি একই কথা আনেন। কুরতুবী এ মতের পক্ষে নাম নেন ইবন সীরীন, সুদ্দী, ইবন যায়দ ও হাসানের। বাগাভী নাম নেন ইবন সীরীন, সুদ্দী ও ইবন আব্বাসের, আর যোগ করেন যে তিনি ডেকেছিলেন লা ইলাহা ইল্লাল্লাহর সাক্ষ্যের দিকে।"
          },
          {
            "en": "The second answer is the mu'adhdhin, who gives the adhan. At-Tabari reports it from Qays ibn Abi Hazim. Al-Qurtubi names Aisha (RA), Ikrima, Qays and Mujahid as saying the verse came down about the mu'adhdhins. Al-Baghawi gives Aisha's words as \"I see this verse as revealed about the mu'adhdhins.\" Ibn Kathir has her say that the verse is theirs, and explain: when the mu'adhdhin says hayya 'ala al-salah, come to prayer, he has called to Allah. He adds Ibn Umar and Ikrima.",
            "bn": "দ্বিতীয় উত্তর: মুয়াজ্জিন, যিনি আযান দেন। তাবারী এটি আনেন কায়স ইবন আবী হাযিম থেকে। কুরতুবীর তালিকায় আয়েশা (রাঃ), ইকরিমা, কায়স ও মুজাহিদ, যাঁরা বলেছেন আয়াতটি মুয়াজ্জিনদের সম্পর্কে নাযিল হয়েছে। বাগাভী আয়েশা (রাঃ)-এর কথা উদ্ধৃত করেন এভাবে: আমার মনে হয় এ আয়াত মুয়াজ্জিনদের ব্যাপারে নাযিল হয়েছে। ইবন কাসীরের বর্ণনায় তিনি বলেন, এ আয়াত তাদেরই, তারপর ব্যাখ্যা করেন: মুয়াজ্জিন যখন বলে হাইয়া আলাস সালাহ, নামাযের দিকে এসো, তখন সে আল্লাহর দিকেই ডাকল। ইবন কাসীর এর সাথে ইবন উমার ও ইকরিমার নামও যোগ করেন।"
          },
          {
            "en": "The third answer is every caller to Allah. Al-Baghawi has al-Hasan describe the believer who answered Allah's call and called people to what he had answered. Al-Qurtubi reports al-Hasan saying the verse is general for everyone who calls to Allah, and Qays saying it came down about every believer. So al-Hasan and Qays each appear under two answers, depending on the source. These are three readings, each with named holders, and this article sets them side by side without choosing.",
            "bn": "তৃতীয় উত্তর: আল্লাহর দিকে আহ্বানকারী প্রত্যেকে। বাগাভীর বর্ণনায় হাসান বলেন, এ সেই মুমিন, যে আল্লাহর ডাকে সাড়া দিয়েছে, তারপর যে ডাকে সাড়া দিয়েছে মানুষকে সেদিকেই ডেকেছে। কুরতুবী হাসান থেকে আনেন যে আয়াতটি আল্লাহর দিকে আহ্বানকারী সবার জন্য সাধারণ। কায়স থেকে আনেন যে আয়াতটি নাযিল হয়েছে প্রত্যেক মুমিন সম্পর্কে। ফলে সূত্রভেদে হাসান ও কায়স দুজনকেই দুই মতের ঘরে পাওয়া যায়। তিনটিই আলাদা ব্যাখ্যা, প্রত্যেকটির পেছনে নির্দিষ্ট নাম আছে। এ লেখা তিনটিকে পাশাপাশি রাখে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Makkan Verse, a Madinan Adhan",
          "bn": "মক্কার আয়াত, মদীনার আযান"
        },
        "p": [
          {
            "en": "Those who weigh the readings argue from dates. Al-Qurtubi quotes Ibn al-'Arabi: the first reading is more correct, because the verse is Makkan and the adhan is Madinan; the mu'adhdhin enters the verse by its meaning, not as the one intended when it was spoken. Ibn al-'Arabi also includes Abu Bakr, who said, while a man was choking the Prophet ﷺ: will you kill a man for saying my Lord is Allah? And he takes the verse to cover every good word that carries tawhid and faith.",
            "bn": "যাঁরা মতগুলো ওজন করেছেন, তাঁদের যুক্তি মূলত সময়কাল নিয়ে। কুরতুবী ইবনুল আরাবীর কথা উদ্ধৃত করেন: প্রথম মতটিই বেশি সঠিক, কারণ আয়াতটি মাক্কী আর আযান মাদানী। মুয়াজ্জিন আয়াতের অর্থের ভেতরে ঢোকেন, কিন্তু আয়াত বলার সময় তিনি উদ্দিষ্ট ছিলেন না। ইবনুল আরাবী আবূ বকর (রাঃ)-কেও এর অন্তর্ভুক্ত করেন। এক লোক যখন নবী ﷺ-এর গলা চেপে ধরেছিল, তখন তিনি বলেছিলেন: একজন মানুষ আমার রব আল্লাহ বলে বলেই কি তোমরা তাকে মেরে ফেলবে? তাঁর মতে তাওহীদ ও ঈমানের উল্লেখ আছে এমন সব উত্তম কথাই আয়াতের আওতায় পড়ে।"
          },
          {
            "en": "Ibn Kathir uses the same history to reach another conclusion. When the verse came down, he says, the adhan had not been legislated at all. It was legislated in Madinah after the Hijrah, when Abdullah ibn Zayd was shown it in a dream and the Prophet ﷺ told him to teach it to Bilal, whose voice was fuller. So, for Ibn Kathir, the correct view is that the verse is general, covering the mu'adhdhins and others, with the Messenger ﷺ the foremost of people in it.",
            "bn": "একই ইতিহাস থেকে ইবন কাসীর পৌঁছান ভিন্ন সিদ্ধান্তে। তিনি বলেন, আয়াত যখন নাযিল হয়, তখনো আযানের বিধানই আসেনি। আযান চালু হয় হিজরতের পর মদীনায়। আবদুল্লাহ ইবন যায়দ (রাঃ) স্বপ্নে তা দেখেছিলেন। নবী ﷺ তাঁকে বললেন বিলাল (রাঃ)-কে তা শিখিয়ে দিতে, কারণ বিলালের কণ্ঠ ছিল বেশি ভরাট। তাই ইবন কাসীরের মতে সঠিক কথা হলো, আয়াতটি সাধারণ। মুয়াজ্জিনরাও এর মধ্যে আছেন, অন্যরাও আছেন। আর এ গুণে মানুষের মধ্যে সবচেয়ে অগ্রগণ্য রাসূলুল্লাহ ﷺ।"
          },
          {
            "en": "Al-Qurtubi names a third view as the best of them: al-Hasan's, that the verse is general. At-Tabari reports the disagreement without a ruling at its end, though his own opening gloss is framed generally. Where a preference is stated, then, Ibn al-'Arabi leans to the Prophet ﷺ, and Ibn Kathir and al-Qurtubi to the general reading, while Ibn al-'Arabi and Ibn Kathir both keep the mu'adhdhin inside the verse. Those are their preferences, attributed to them; the article keeps all three readings open.",
            "bn": "কুরতুবী নিজে তৃতীয় একটি মতকে সবচেয়ে উত্তম বলেন: হাসানের মত, আয়াতটি সাধারণ। তাবারী মতভেদটা বর্ণনা করেন, শেষে কোনো রায় দেন না। তবে শুরুতে তাঁর নিজের ব্যাখ্যাটি সাধারণ ভাষায় বলা। মোট কথা, যেখানে পছন্দ জানানো হয়েছে, সেখানে ইবনুল আরাবী ঝুঁকেছেন নবী ﷺ-এর দিকে, ইবন কাসীর ও কুরতুবী সাধারণ অর্থের দিকে। আর ইবনুল আরাবী ও ইবন কাসীর দুজনই মুয়াজ্জিনকে আয়াতের ভেতরে রেখেছেন। এগুলো তাঁদেরই পছন্দ, তাঁদের নামেই বলা হলো। এ লেখা তিনটি ব্যাখ্যাই খোলা রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Longest Necks",
          "bn": "কিয়ামতে সবচেয়ে উঁচু গর্দান"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches one sound hadith to the mu'adhdhin reading, citing Sahih Muslim. In Muslim's wording (no. 387), Talhah ibn Yahya reports from his uncle that he was with Mu'awiyah ibn Abi Sufyan when the mu'adhdhin came to call him to prayer, and Mu'awiyah said: I heard the Messenger of Allah ﷺ say, \"The mu'adhdhins will have the longest necks of all people on the Day of Resurrection.\" Muslim records it in his Sahih.",
            "bn": "মুয়াজ্জিন-ব্যাখ্যার সাথে ইবন কাসীর একটি সহীহ হাদীস জুড়ে দেন, সহীহ মুসলিমের বরাতে। মুসলিমের ভাষ্যে (নং ৩৮৭) তালহা ইবন ইয়াহইয়া তাঁর চাচা থেকে বর্ণনা করেন: তিনি মুআবিয়া ইবন আবী সুফিয়ানের কাছে ছিলেন। এমন সময় মুয়াজ্জিন এসে তাঁকে নামাযের দিকে ডাকল। মুআবিয়া বললেন, আমি রাসূলুল্লাহ ﷺ-কে বলতে শুনেছি: \"কিয়ামতের দিন মুয়াজ্জিনরা হবে মানুষের মধ্যে সবচেয়ে লম্বা গর্দানের অধিকারী।\" মুসলিম হাদীসটি তাঁর সহীহ গ্রন্থে এনেছেন।"
          },
          {
            "en": "This hadith concerns the merit of the adhan. Ibn Kathir brings it in support of one reading, not as the occasion of the verse, and he himself judges the verse general. He also carries a Sunan report, \"the imam is a guarantor and the mu'adhdhin is entrusted\", and sayings of Companions on the mu'adhdhin's reward, which are not quoted here. Ma'arif al-Qur'an sets a condition on the adhan's merit: that it be given purely for Allah, not for payment or compensation.",
            "bn": "হাদীসটি আযানের ফযীলত নিয়ে। ইবন কাসীর এটি এনেছেন একটি ব্যাখ্যার সমর্থনে, আয়াত নাযিলের উপলক্ষ হিসেবে নয়। আর তিনি নিজে আয়াতটিকে সাধারণ বলেই রায় দেন। সুনানের একটি বর্ণনাও তিনি আনেন, ইমাম জিম্মাদার আর মুয়াজ্জিন আমানতদার, সঙ্গে মুয়াজ্জিনের সওয়াব নিয়ে কয়েকজন সাহাবীর উক্তি। সেগুলো এখানে উদ্ধৃত করা হলো না। মাআরিফুল কুরআন আযানের ফযীলতের সাথে একটা শর্ত জুড়ে দেয়: আযান দিতে হবে খাঁটিভাবে আল্লাহর জন্য, পারিশ্রমিক বা বিনিময়ের জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Deed Confirms the Word",
          "bn": "আমল যখন কথার সাক্ষী"
        },
        "p": [
          {
            "en": "The second clause, wa 'amila salihan, and does righteous deeds, is where the commentators place the caller's integrity. Ibn Kathir: he is himself guided by what he says, so his benefit reaches both himself and others, and he is not among those who command the good and do not do it, or forbid the evil and do it. As-Sa'di reads it the same way: together with calling people to Allah, he hastens himself to obey Allah's command with deeds that please his Lord.",
            "bn": "দ্বিতীয় অংশ, ওয়া আমিলা সালিহান, আর সে নেক আমল করে। তাফসীরকারেরা আহ্বানকারীর সততা খোঁজেন এখানেই। ইবন কাসীর বলেন, সে যা বলে, নিজেও সেই হিদায়াতের উপর আছে। তাই তার উপকার নিজের কাছেও থাকে, অন্যের কাছেও পৌঁছায়। সে তাদের দলে নয়, যারা ভালো কাজের আদেশ দেয় অথচ নিজে করে না, মন্দ থেকে নিষেধ করে অথচ নিজেই তাতে লিপ্ত। সা'দীও একইভাবে পড়েন: মানুষকে আল্লাহর দিকে ডাকার পাশাপাশি সে নিজেও দ্রুত আল্লাহর আদেশ মানে, এমন আমলে যা তার রবকে সন্তুষ্ট করে।"
          },
          {
            "en": "At-Tabari reports Qatada's portrait of this person: a servant whose deed confirms his word, whose going in matches his coming out, whose private self matches his public one, and whose presence matches his absence. The hypocrite, Qatada adds, is the servant in whom each of these pairs disagrees. Read this way, the clause asks less for flawlessness than for one person, not two, behind the call.",
            "bn": "তাবারী কাতাদার আঁকা ছবিটা তুলে ধরেন। এ এমন বান্দা, যার আমল তার কথাকে সত্য প্রমাণ করে। তার ঢোকা আর বেরোনো এক রকম, গোপন আর প্রকাশ্য এক রকম, সামনে থাকা আর আড়ালে থাকা এক রকম। কাতাদা যোগ করেন, মুনাফিক সেই বান্দা, যার মধ্যে এই প্রতিটি জোড়া পরস্পরের বিপরীত। এভাবে পড়লে অংশটি নিখুঁত হওয়ার দাবি যতটা করে, তার চেয়ে বেশি দাবি করে ডাকের পেছনে একজন মানুষ থাকার, দুজন নয়।"
          },
          {
            "en": "Others give the clause a narrower content. Qays ibn Abi Hazim, in at-Tabari, and Abu Umamah al-Bahili, in al-Baghawi, take it as prayer between the adhan and the iqamah, Abu Umamah specifying two rak'ahs. Al-Baghawi supports this with the hadith of Abdullah ibn Mughaffal, which al-Bukhari records in his Sahih (no. 624): Allah's Messenger ﷺ said, \"Between every two adhans there is a prayer,\" three times, then \"for whoever wishes.\" Al-Qurtubi adds Ikrima's gloss, he prayed and fasted, and al-Kalbi's, he performed the obligations, and calls al-Kalbi's the best when joined to avoiding the forbidden and doing much that is recommended.",
            "bn": "কেউ কেউ অংশটিকে আরও নির্দিষ্ট অর্থে নেন। তাবারীর বর্ণনায় কায়স ইবন আবী হাযিম এবং বাগাভীর বর্ণনায় আবূ উমামা বাহিলী (রাঃ) এর অর্থ করেন আযান ও ইকামতের মাঝের নামায। আবূ উমামা দুই রাকআতের কথা নির্দিষ্ট করে বলেন। বাগাভী এর সমর্থনে আনেন আবদুল্লাহ ইবন মুগাফফাল (রাঃ)-এর হাদীস, যা বুখারী তাঁর সহীহ গ্রন্থে এনেছেন (নং ৬২৪): রাসূলুল্লাহ ﷺ তিনবার বললেন, \"প্রতি দুই আযানের মাঝে নামায আছে,\" তারপর বললেন, \"যে চায় তার জন্য।\" কুরতুবী যোগ করেন ইকরিমার ব্যাখ্যা, সে নামায পড়েছে ও রোযা রেখেছে, আর কালবীর ব্যাখ্যা, সে ফরযগুলো আদায় করেছে। কুরতুবীর মতে কালবীর কথাই সবচেয়ে উত্তম, যদি তার সাথে থাকে হারাম থেকে বেঁচে থাকা আর বেশি বেশি নফল আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "Declared Without a Proviso",
          "bn": "শর্ত ছাড়াই ঘোষণা"
        },
        "p": [
          {
            "en": "The third clause, wa qala innani mina al-muslimin, and says: indeed I am of the Muslims, is glossed by at-Tabari as: I am among those who have yielded to Allah in obedience, humbled themselves before Him in servitude, and submitted through faith in His oneness. The Muyassar: among those compliant to Allah's command and His law. As-Sa'di: among those compliant to His command and walking His path. None of them treats muslimin here as a bare label; each fills it with yielding.",
            "bn": "তৃতীয় অংশ, ওয়া কালা ইন্নানী মিনাল মুসলিমীন, আর সে বলে: আমি অবশ্যই মুসলিমদের একজন। তাবারীর ব্যাখ্যায় এর মানে: আমি তাদের একজন, যারা আনুগত্যে আল্লাহর সামনে মাথা নত করেছে, বন্দেগিতে তাঁর কাছে নিজেকে ছোট করেছে, আর তাঁর একত্বে ঈমান এনে বিনীত হয়েছে। মুয়াসসার বলে: যারা আল্লাহর আদেশ ও শরীয়তের অনুগত, তাদের একজন। সা'দী বলেন: যারা তাঁর আদেশের অনুগত এবং তাঁর পথে চলে। কেউই এখানে মুসলিমীন শব্দটাকে নিছক পরিচয়ের তকমা হিসেবে নেননি। প্রত্যেকে এর ভেতরে ভরেছেন আত্মসমর্পণ।"
          },
          {
            "en": "Why say it at all, when calling and acting already show a person's Islam? Al-Qurtubi gives Ibn al-'Arabi's answer. Calling, by word or sword, can come from conviction or serve only to win an argument, and deeds can be done for show or sincerely; so the verse requires an explicit declaration of belief for Allah in all of it, and that the deed be for His sake. Al-Qurtubi then adds a point of his own: since Allah did not tell the speaker to attach in sha' Allah, the verse answers those who say, I am a Muslim, in sha' Allah.",
            "bn": "ডাকা আর আমল করাতেই তো একজনের ইসলাম বোঝা যায়, তাহলে মুখে বলার দরকার কী? কুরতুবী ইবনুল আরাবীর উত্তরটা আনেন। ডাকা, কথায় হোক বা তলোয়ারে, বিশ্বাস থেকেও হতে পারে, আবার কেবল তর্কে জেতার জন্যও হতে পারে। আমলও হতে পারে লোক দেখানোর জন্য, হতে পারে ইখলাসের সাথে। তাই আয়াত দাবি করে, সব কিছুর মধ্যে আল্লাহর প্রতি বিশ্বাসের স্পষ্ট ঘোষণা থাকতে হবে, আর আমল হতে হবে তাঁর সন্তুষ্টির জন্য। এরপর কুরতুবী নিজের একটা কথা যোগ করেন। আল্লাহ বক্তাকে ইন শা আল্লাহ জুড়ে দিতে বলেননি। তাই যারা বলে, আমি মুসলিম ইন শা আল্লাহ, আয়াতে তাদের জবাব আছে।"
          },
          {
            "en": "Al-Qurtubi also records a small practice drawn from the clause. Fudayl ibn Rufaydah, who gave the adhan for the companions of Abdullah ibn Mas'ud, was told by Asim ibn Hubayrah: when you give the adhan and say Allahu akbar, Allahu akbar, la ilaha illallah, then say, and I am of the Muslims; and he recited this verse. The report shows at least one early reader treating the words as a sentence a caller may say in his own voice, in the first person, at the moment of calling.",
            "bn": "এ অংশ থেকে নেওয়া ছোট একটা আমলের কথাও কুরতুবী লিখে রাখেন। ফুদাইল ইবন রুফাইদা আবদুল্লাহ ইবন মাসঊদ (রাঃ)-এর সাথীদের জন্য আযান দিতেন। আসিম ইবন হুবাইরা তাঁকে বললেন: আযানে যখন আল্লাহু আকবার আল্লাহু আকবার, লা ইলাহা ইল্লাল্লাহ বলবে, তখন বলো, আর আমি মুসলিমদের একজন। তারপর তিনি এ আয়াত তিলাওয়াত করলেন। বর্ণনাটি দেখায়, অন্তত একজন প্রথম যুগের পাঠক কথাগুলোকে নিয়েছিলেন এমন বাক্য হিসেবে, যা আহ্বানকারী ডাকার মুহূর্তে নিজের মুখে, নিজের পক্ষ থেকে বলতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ranks Between Two Callers",
          "bn": "দুই ধরনের আহ্বানকারীর মাঝে"
        },
        "p": [
          {
            "en": "As-Sa'di gives the widest account of what calling to Allah includes: teaching the ignorant, admonishing the heedless, arguing with those upon falsehood, and making Allah beloved to His servants by recounting His blessings, generosity and mercy. He counts in urging people to take knowledge from the Book and the Sunnah, good character, kindness to all people, ties of kinship, honouring parents, and admonition suited to seasons and calamities. Ma'arif al-Qur'an adds that the call may be by the spoken word, by writing or by any other means.",
            "bn": "আল্লাহর দিকে ডাকার মধ্যে কী কী পড়ে, তার সবচেয়ে বিস্তৃত বিবরণ দেন সা'দী। অজ্ঞকে শেখানো, গাফেলকে নসীহত করা, বাতিলপন্থীর সাথে যুক্তিতর্ক করা। আল্লাহর নিয়ামত, তাঁর দানশীলতা ও রহমতের কথা শুনিয়ে বান্দাদের কাছে তাঁকে প্রিয় করে তোলা। কিতাব ও সুন্নাহ থেকে ইলম নিতে উৎসাহ দেওয়া, উত্তম চরিত্র, সব মানুষের প্রতি সদাচার, আত্মীয়তার বন্ধন রক্ষা, মা-বাবার সাথে সদ্ব্যবহার, আর উপলক্ষ ও বিপদের সময় অবস্থা বুঝে নসীহত। এগুলোও তিনি এর মধ্যে গণনা করেন। মাআরিফুল কুরআন যোগ করে, ডাকা যায় মুখের কথায়, লেখায় বা অন্য যে কোনো উপায়ে।"
          },
          {
            "en": "One item on as-Sa'di's list is meeting the wrongdoer with kindness, and that is where the next verse goes: 41:34 tells the caller to repel evil with what is better, and 41:35 says that only the patient and the greatly fortunate are granted it. The Muyassar draws its own point from 41:33: the verse urges calling to Allah and shows the merit of scholars who call to Him upon clear insight.",
            "bn": "সা'দীর তালিকার একটি জিনিস হলো, যে মন্দ আচরণ করে তার সাথে সদাচার করা। পরের আয়াত ঠিক সেদিকেই যায়। ৪১:৩৪ আয়াত আহ্বানকারীকে বলে, মন্দকে প্রতিহত করো যা উত্তম তা দিয়ে। আর ৪১:৩৫ আয়াত বলে, এ গুণ পায় কেবল ধৈর্যশীলরা আর মহা ভাগ্যবানরা। মুয়াসসার ৪১:৩৩ আয়াত থেকে নিজস্ব একটি শিক্ষা টানে: আয়াতটি আল্লাহর দিকে ডাকতে উৎসাহ দেয়, আর দেখায় সেই আলিমদের মর্যাদা, যাঁরা সুস্পষ্ট জ্ঞানের ভিত্তিতে তাঁর দিকে ডাকেন।"
          },
          {
            "en": "As-Sa'di ends with ranks. This rank in full, he says, belongs to the siddiqin, who perfected themselves and others and inherited fully from the messengers; the worst in speech are those who call to the paths of misguidance. Between the two lie ranks only Allah knows, and he closes with 6:132: for all there are degrees from what they did. At-Tabari and Ibn Kathir both carry al-Hasan's words on the verse: he answered Allah's call, called people to what he had answered, did good in answering, and said I am of the Muslims. In al-Hasan's telling, the answering comes first.",
            "bn": "সা'দী শেষ করেন স্তরের কথা বলে। তাঁর মতে এ মর্যাদার পূর্ণতা সিদ্দীকদের, যাঁরা নিজেদের ও অন্যদের পূর্ণ করার চেষ্টা করেছেন এবং রাসূলদের উত্তরাধিকার পুরোপুরি পেয়েছেন। আর কথায় সবচেয়ে নিকৃষ্ট তারা, যারা গোমরাহির পথের দিকে ডাকে। এ দুইয়ের মাঝে এমন সব স্তর আছে, যা আল্লাহ ছাড়া কেউ জানে না। শেষে তিনি আনেন ৬:১৩২ আয়াত: প্রত্যেকের জন্য তাদের আমল অনুযায়ী মর্যাদা আছে। তাবারী ও ইবন কাসীর দুজনই আয়াতটি নিয়ে হাসানের কথা আনেন: সে আল্লাহর ডাকে সাড়া দিয়েছে, যে ডাকে সাড়া দিয়েছে মানুষকে সেদিকে ডেকেছে, সাড়া দিয়ে নেক আমল করেছে, আর বলেছে আমি মুসলিমদের একজন। হাসানের বর্ণনায় সাড়া দেওয়াটাই আগে।"
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
          "bn": "দাওয়াতের আয়াতের ঠিক পরে"
        },
        "p": [
          {
            "en": "Wa la tastawi al-hasanatu wa la as-sayyi'ah: the good deed and the bad deed are not equal. The verse comes straight after 41:33, which asks who is better in speech than one who calls to Allah, does righteous work and says, I am of the Muslims. Ma'arif al-Qur'an marks the join: from here begin special instructions for those engaged in calling others to Allah, and their gist is not to repay evil with evil but to be patient and obliging. Ibn Kathir notes that the verse before was revealed in Makkah.",
            "bn": "ওয়া লা তাসতাওয়িল হাসানাতু ওয়া লাস সাইয়িআহ: ভালো কাজ আর মন্দ কাজ সমান নয়। আয়াতটি এসেছে ঠিক ৪১:৩৩-এর পরে। সেখানে প্রশ্ন ছিল, যে মানুষকে আল্লাহর দিকে ডাকে, নেক আমল করে আর বলে ‘আমি মুসলিমদের একজন’, কথায় তার চেয়ে উত্তম কে? মাআরিফুল কুরআন এই জোড়াটা চিনিয়ে দেয়। এখান থেকে শুরু হচ্ছে আল্লাহর দিকে আহ্বানকারীদের জন্য বিশেষ কিছু নির্দেশনা। সারকথা হলো, মন্দের বদলা মন্দ দিয়ে নয়, বরং সবর আর সদাচরণ দিয়ে। ইবন কাসীর জানান, আগের আয়াতটি মক্কায় নাযিল হয়েছিল।"
          },
          {
            "en": "At-Tabari reads the opening against the whole passage. The good deed, he says, belongs to those who said Our Lord is Allah and then stood firm (41:30), who answered their Lord's call and invited His servants to the same. The bad deed belongs to those who said, do not listen to this Qur'an and make noise over it, so that you may overcome (41:26). Their states and ranks, he concludes, are not equal before Allah. Later he restates the line more broadly: faith in Allah and obedience to Him are not equal to shirk and disobedience.",
            "bn": "তাবারী আয়াতের শুরুটা পড়েন পুরো অংশের সঙ্গে মিলিয়ে। তাঁর মতে ভালো কাজ তাদের, যারা বলেছে ‘আমাদের রব আল্লাহ’, তারপর তাতে অটল থেকেছে (৪১:৩০)। তারা রবের ডাকে সাড়া দিয়েছে, আর আল্লাহর বান্দাদেরও সেদিকে ডেকেছে। মন্দ কাজ তাদের, যারা বলেছে, এই কুরআন শুনো না, এর মাঝে হট্টগোল করো, যাতে তোমরা জিততে পারো (৪১:২৬)। তাই আল্লাহর কাছে দুই দলের অবস্থা ও মর্যাদা এক নয়, এই তাঁর উপসংহার। পরে তিনি কথাটা আরও বিস্তৃত করে বলেন: আল্লাহর প্রতি ঈমান ও তাঁর আনুগত্য আর শিরক ও নাফরমানি কখনো সমান নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Good and Bad, Variously Named",
          "bn": "ভালো-মন্দের নানা নাম"
        },
        "p": [
          {
            "en": "What the pair names, the commentators answer in two broad ways. The Muyassar keeps to the passage: the good of those who believed in Allah, kept to His law and did good to His creation, against the evil of those who disbelieved, opposed His command and harmed His creation. As-Sa'di widens it to every act. Good deeds done for Allah's pleasure and bad deeds that anger Him are not equal, nor are kindness and harm to people, not in themselves, not in their description and not in their reward. He cites 55:60: is the reward of good anything but good?",
            "bn": "এই জোড়া দিয়ে কী বোঝানো হয়েছে, তাফসীরকারদের উত্তর মোটামুটি দুই ধরনের। মুয়াসসার থাকে আশপাশের আয়াতের মধ্যেই। যারা আল্লাহর প্রতি ঈমান এনেছে, তাঁর শরীয়তে অটল থেকেছে আর তাঁর সৃষ্টির প্রতি সদাচরণ করেছে, তাদের ভালো কাজ এক দিকে। অন্য দিকে তাদের মন্দ কাজ, যারা কুফরি করেছে, তাঁর হুকুমের বিরোধিতা করেছে আর তাঁর সৃষ্টিকে কষ্ট দিয়েছে। সা'দী কথাটা ছড়িয়ে দেন সব আমলে। আল্লাহর সন্তুষ্টির জন্য নেক আমল আর তাঁকে নারাজ করে এমন গুনাহ সমান নয়। মানুষের প্রতি সদাচরণ আর দুর্ব্যবহারও সমান নয়, না নিজের সত্তায়, না গুণে, না প্রতিদানে। তিনি টেনে আনেন ৫৫:৬০: সদাচরণের প্রতিদান কি সদাচরণ ছাড়া আর কিছু?"
          },
          {
            "en": "Al-Qurtubi gathers narrower glosses side by side. From Ibn 'Abbas: the good is la ilaha illa Allah and the bad is shirk. It was also said: obedience against shirk, which he calls the first reading itself. Others said courteous tact against harshness, or pardon against taking revenge, and from 'Ali ibn Abi Talib he reports love of the Messenger's family against hatred of them. Al-Baghawi gives three pairs: patience and anger, forbearance and ignorance, pardon and wrongdoing. Ibn Kathir says only that there is a vast difference between them.",
            "bn": "কুরতুবী আরও নির্দিষ্ট ব্যাখ্যাগুলো পাশাপাশি সাজান। ইবন আব্বাস (রাঃ) থেকে: ভালো হলো লা ইলাহা ইল্লাল্লাহ, আর মন্দ হলো শিরক। কেউ বলেছেন, আনুগত্য বনাম শিরক। কুরতুবীর মতে এটা আসলে প্রথম ব্যাখ্যাটিই। অন্যদের মতে কোমল ব্যবহার বনাম রূঢ়তা, কিংবা ক্ষমা বনাম প্রতিশোধ। আলী ইবন আবী তালিব (রাঃ) থেকে তিনি আনেন: রাসূলের পরিবারকে ভালোবাসা বনাম তাঁদের প্রতি বিদ্বেষ। বাগাভী দেন তিনটি জোড়া: সবর আর রাগ, সহনশীলতা আর মূর্খতা, ক্ষমা আর অন্যায়। ইবন কাসীর শুধু বলেন, এ দুয়ের মধ্যে বিরাট ফারাক।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Second La",
          "bn": "দ্বিতীয় ‘লা’ কেন"
        },
        "p": [
          {
            "en": "The wording repeats the negative: wa la tastawi al-hasanatu wa la as-sayyi'ah, literally not equal is the good, and not the bad. Al-Farra', quoted by both al-Baghawi and al-Qurtubi, calls the second la a connective without negating force of its own, so that the sense is simply that the good and the bad are not equal. Al-Qurtubi supports it with a line of poetry that uses la the same way.",
            "bn": "আয়াতে না-বাচক শব্দটা দুবার এসেছে: ওয়া লা তাসতাওয়িল হাসানাতু ওয়া লাস সাইয়িআহ। আরবিতে ‘লা’ বসেছে ভালোর আগে, আবার মন্দের আগেও। বাগাভী ও কুরতুবী দুজনেই ফাররার মত উদ্ধৃত করেন। তাঁর মতে দ্বিতীয় ‘লা’ কেবল সংযোগের শব্দ, আলাদা করে কিছু নাকচ করে না। অর্থ দাঁড়ায় সোজা: ভালো আর মন্দ সমান নয়। কুরতুবী এর সমর্থনে একটি কবিতার চরণ আনেন, যেখানে ‘লা’ এসেছে ঠিক এভাবেই।"
          },
          {
            "en": "At-Tabari explains the repetition by logic rather than ornament. If one thing is not equal to another, the other is not equal to it either, so la can attach to each side, and the sentence would be correct without the second la too. He reports a Basran grammarian who called it extra, for emphasis, citing 57:29 and the oaths of 75:1 and 75:2, and others who rejected that analysis of those verses. At-Tabari records the dispute; either analysis leaves the meaning unchanged.",
            "bn": "তাবারী পুনরাবৃত্তিটা ব্যাখ্যা করেন যুক্তি দিয়ে, অলংকার দিয়ে নয়। একটা জিনিস অন্যটার সমান না হলে অন্যটাও প্রথমটার সমান নয়। তাই ‘লা’ দুই দিকেই বসতে পারে। আবার দ্বিতীয় ‘লা’ না থাকলেও বাক্যটা শুদ্ধই থাকত। বসরার এক ব্যাকরণবিদের মত তিনি উল্লেখ করেন, যিনি একে বাড়তি বলেছেন, জোর দেওয়ার জন্য। তিনি প্রমাণ হিসেবে আনেন ৫৭:২৯, আর ৭৫:১ ও ৭৫:২-এর কসম। অন্য কেউ কেউ ওই আয়াতগুলোর এমন বিশ্লেষণ মানেননি। তাবারী মতভেদটা লিখে রাখেন। তবে যে বিশ্লেষণই নেওয়া হোক, অর্থ একই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pushing Back With Better",
          "bn": "উত্তম দিয়ে ঠেকানো"
        },
        "p": [
          {
            "en": "Then the command: idfa' billati hiya ahsan, repel with that which is better. At-Tabari reads it as addressed to the Prophet ﷺ: repel, Muhammad, the ignorance of whoever acts ignorantly towards you with your forbearance, the wrong of whoever wrongs you with your pardon, and the hurt you meet from them with your patience. He adds that the people of interpretation said much the same, though they differed in its detail. The Muyassar also has the Messenger addressed: repel whoever harms you with your pardon, forbearance and kindness.",
            "bn": "তারপর আদেশ: ইদফা' বিল্লাতী হিয়া আহসান, যা উত্তম তা দিয়ে প্রতিহত করো। তাবারীর মতে কথাটা নবী ﷺ-কে বলা। হে মুহাম্মাদ, যে তোমার সঙ্গে মূর্খের মতো আচরণ করে, তোমার সহনশীলতা দিয়ে তার মূর্খতা ঠেকাও। যে অন্যায় করে, তোমার ক্ষমা দিয়ে তার অন্যায় ঠেকাও। আর তাদের দিক থেকে যে কষ্ট আসে, তা ঠেকাও তোমার সবর দিয়ে। তিনি যোগ করেন, তাফসীরকারেরা খুঁটিনাটিতে ভিন্নমত রাখলেও মোটামুটি এ কথাই বলেছেন। মুয়াসসারেও সম্বোধন রাসূলকে: যে তোমাকে কষ্ট দেয়, তাকে তোমার ক্ষমা, সহনশীলতা ও সদাচরণ দিয়ে ঠেকাও।"
          },
          {
            "en": "The report most of these files carry is from Ibn 'Abbas, through 'Ali ibn Abi Talhah: Allah commanded the believers to be patient at anger, and forbearing and forgiving at wrongdoing; when they do so, Allah protects them from Shaytan and their enemy yields to them, as though he were a close friend. At-Tabari gives it with its chain, al-Baghawi and al-Qurtubi more briefly, Ibn Kathir in English under 41:35, and Ma'arif al-Qur'an through Tafsir Mazhari.",
            "bn": "এখানকার বেশির ভাগ তাফসীরে যে বর্ণনা আছে, তা আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) থেকে। আল্লাহ মুমিনদের আদেশ দিয়েছেন রাগের সময় সবর করতে, আর অন্যায়ের সময় সহনশীল হতে ও ক্ষমা করতে। তারা এমন করলে আল্লাহ তাদের শয়তান থেকে রক্ষা করেন, আর শত্রু তাদের কাছে নত হয়, যেন সে অন্তরঙ্গ বন্ধু। তাবারী এটা পুরো সনদসহ আনেন। বাগাভী ও কুরতুবী আনেন সংক্ষেপে, ইবন কাসীর ইংরেজি সংস্করণে ৪১:৩৫-এর আলোচনায়, আর মাআরিফুল কুরআন তাফসীরে মাযহারীর বরাতে।"
          },
          {
            "en": "As-Sa'di calls this a special kind of goodness with a large place: goodness to the one who wronged you, above all someone with a great right over you, such as relatives and companions. If he cuts you off, keep the tie; if he wrongs you, pardon him; if he speaks against you, absent or present, do not answer in kind but forgive and speak gently. If he shuns you, sweeten your words and offer him your greeting. Ma'arif al-Qur'an adds a gradation: not repaying evil and forgiving is good, but doing the wrongdoer some good after forgiving him is far better.",
            "bn": "সা'দী একে বলেন বিশেষ এক সদাচরণ, যার মর্যাদা অনেক বড়। তা হলো যে আপনার সঙ্গে খারাপ করেছে, তার সঙ্গে ভালো করা। বিশেষ করে এমন কেউ, আপনার ওপর যার বড় হক আছে, যেমন আত্মীয়স্বজন ও সঙ্গী-সাথী। সে সম্পর্ক ছিন্ন করলে আপনি জুড়ে রাখুন। সে জুলুম করলে মাফ করে দিন। আড়ালে বা সামনে আপনার নামে কিছু বললে পাল্টা জবাব না দিয়ে ক্ষমা করুন, নরম কথা বলুন। সে কথা বন্ধ করে দূরে সরে গেলে আপনি মিষ্টি করে কথা বলুন, সালাম দিন। মাআরিফুল কুরআন একটা ধাপ দেখায়। মন্দের বদলা না নিয়ে ক্ষমা করা ভালো, তবে ক্ষমার পর মন্দকারীর কিছু উপকার করা তার চেয়ে অনেক উত্তম।"
          }
        ]
      },
      {
        "h": {
          "en": "A Greeting, a Prayer, a Hand",
          "bn": "সালাম, দোয়া আর করমর্দন"
        },
        "p": [
          {
            "en": "A second line of interpretation makes the better thing concrete. At-Tabari, under 'others said', reports from 'Ata' that it means the greeting of peace, and from Mujahid: saying peace be upon you when you meet him. Al-Qurtubi gives the same from both, for the one who is hostile to you. He also reports from Ibn 'Abbas the man who is reviled and answers: if you are truthful, may Allah forgive me, and if you are lying, may Allah forgive you. A report, he adds, has Abu Bakr say this to a man who spoke ill of him, and Ma'arif al-Qur'an repeats it.",
            "bn": "ব্যাখ্যার আরেকটি ধারা ‘উত্তম’ জিনিসটাকে হাতে-কলমে দেখায়। তাবারী ‘অন্যরা বলেছেন’ বলে আতা থেকে আনেন: এর মানে সালাম। আর মুজাহিদ থেকে: দেখা হলে তাকে ‘আসসালামু আলাইকুম’ বলা। কুরতুবীও দুজন থেকে একই কথা আনেন, আর বলেন এ সালাম তার জন্য, যে আপনার সঙ্গে শত্রুতা করে। তিনি ইবন আব্বাস (রাঃ) থেকে আরও আনেন এক লোকের কথা, যাকে গালি দেওয়া হলে সে বলে: তুমি সত্য বলে থাকলে আল্লাহ আমাকে মাফ করুন, আর মিথ্যা বলে থাকলে আল্লাহ তোমাকে মাফ করুন। কুরতুবী জানান, এক বর্ণনায় আবু বকর (রাঃ) তাঁর নিন্দা করা এক লোককে ঠিক এ কথাই বলেছিলেন। মাআরিফুল কুরআনও ঘটনাটি উল্লেখ করে।"
          },
          {
            "en": "Al-Qurtubi adds a third reading from Ibn al-'Arabi's Ahkam: the handshake, with the report, shake hands and rancour leaves. He narrates a debate. Malik did not favour it; Sufyan cited the Prophet ﷺ shaking hands with Ja'far on his return from Abyssinia, and when Malik called that a special case, Sufyan answered that whatever applied to the Prophet ﷺ in a particular case applies to us, and whatever applied generally applies to us. Al-Qurtubi then notes that Malik is also reported to have permitted it, as a body of scholars did.",
            "bn": "কুরতুবী ইবনুল আরাবীর আহকাম থেকে তৃতীয় একটি ব্যাখ্যা আনেন: করমর্দন। সঙ্গে একটি বর্ণনা: পরস্পর হাত মেলাও, মনের বিদ্বেষ দূর হবে। তারপর তিনি একটি বিতর্কের কথা বলেন। ইমাম মালিক করমর্দন পছন্দ করতেন না। সুফিয়ান প্রমাণ দিলেন, জাফর (রাঃ) হাবশা থেকে ফিরলে নবী ﷺ তাঁর সঙ্গে হাত মিলিয়েছিলেন। মালিক বললেন, ওটা ছিল বিশেষ ঘটনা। সুফিয়ান জবাব দিলেন, নবী ﷺ-এর বিশেষ ক্ষেত্রে যা প্রযোজ্য, আমাদের বেলায়ও তা-ই, আর সাধারণ ক্ষেত্রে যা প্রযোজ্য, তাও আমাদের বেলায়। কুরতুবী পরে জানান, মালিক থেকে করমর্দন জায়েয হওয়ার মতও বর্ণিত আছে, আর একদল আলিমও সে মতের।"
          },
          {
            "en": "For handshaking among the Companions, al-Qurtubi cites a report from Qatadah through Anas and calls it sahih. It is in Sahih al-Bukhari (6263): Narrated Qatada: I asked Anas, 'Was it a custom of the companions of the Prophet (ﷺ) to shake hands with one another?' He said, 'Yes.' It speaks of handshaking in general, and al-Qurtubi brings it for that one reading; it is not a report about this verse. None of the commentaries fetched here attaches to the verse a Prophetic saying on answering wrong with good.",
            "bn": "সাহাবীদের মধ্যে করমর্দনের প্রমাণে কুরতুবী কাতাদা থেকে আনাস (রাঃ)-এর সূত্রে একটি বর্ণনা আনেন এবং একে সহীহ বলেন। এটি সহীহ বুখারীতে আছে (৬২৬৩): কাতাদা বলেন, আমি আনাসকে জিজ্ঞেস করলাম, নবী ﷺ-এর সাহাবীদের মধ্যে কি পরস্পর হাত মেলানোর প্রচলন ছিল? তিনি বললেন, হ্যাঁ। বর্ণনাটি সাধারণভাবে করমর্দন নিয়ে। কুরতুবী একে এনেছেন কেবল ওই একটি ব্যাখ্যার সমর্থনে, এটি এ আয়াত সম্পর্কে কোনো বর্ণনা নয়। এখানে সংগৃহীত কোনো তাফসীর মন্দের জবাবে ভালো করা নিয়ে নবী ﷺ-এর কোনো বাণী এ আয়াতের সঙ্গে যুক্ত করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "As Though Close Kin",
          "bn": "যেন আপন আত্মীয়"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the command as: whoever wrongs you, repel him by treating him well, and he quotes 'Umar: you have never punished whoever disobeyed Allah concerning you with anything like obeying Allah concerning him. Then the result, fa-idha alladhi baynaka wa baynahu 'adawatun ka-annahu waliyyun hamim. When you do good to whoever did you wrong, Ibn Kathir explains, that good leads him to sincere friendship, love and tenderness towards you, until he becomes as though a close friend, near to you in compassion and kindness.",
            "bn": "ইবন কাসীর আদেশটা পড়েন এভাবে: কেউ আপনার সঙ্গে খারাপ করলে তার সঙ্গে ভালো ব্যবহার করে তাকে ঠেকান। সঙ্গে উমর (রাঃ)-এর কথা: আপনার ব্যাপারে যে আল্লাহর নাফরমানি করেছে, তার ব্যাপারে আপনি আল্লাহর আনুগত্য করলেন, এর চেয়ে বড় শাস্তি তাকে আর দিতে পারবেন না। তারপর ফলাফল: ফা-ইযাল্লাযী বাইনাকা ওয়া বাইনাহু আদাওয়াতুন কাআন্নাহু ওয়ালিয়্যুন হামীম। ইবন কাসীরের ব্যাখ্যায়, মন্দকারীর সঙ্গে ভালো করলে সেই ভালোই তাকে টেনে আনে আপনার সঙ্গে খাঁটি সম্পর্কে, ভালোবাসায় আর মমতায়। শেষে সে হয়ে যায় যেন অন্তরঙ্গ বন্ধু, আপনার প্রতি দয়া ও সদাচরণে একেবারে কাছের মানুষ।"
          },
          {
            "en": "On hamim the files agree on nearness. At-Tabari glosses hamim as qarib, near, and pictures the former enemy, through his gentleness and goodness to you, as though he were a protector from your own cousins, close to you in lineage. He cites Qatadah: as though a near protector. The Muyassar and as-Sa'di both say as though near and compassionate; al-Baghawi says like the friend and the relative; al-Qurtubi says a near friend. Al-Baghawi also names the step before it: when you do this, your enemy yields to you.",
            "bn": "হামীম শব্দের অর্থে তাফসীরগুলো একমত, এর মূলে আছে নৈকট্য। তাবারী বলেন, হামীম মানে নিকটজন। তাঁর ছবিতে সাবেক শত্রু তার কোমলতা আর সদাচরণে আপনার কাছে হয়ে ওঠে যেন চাচাতো ভাইদের কেউ, বংশে আপনার একেবারে আপন অভিভাবক। তিনি কাতাদা থেকে আনেন: যেন কাছের অভিভাবক। মুয়াসসার ও সা'দী দুজনেই বলেন, যেন নিকটজন ও দরদি। বাগাভীর ভাষায়, বন্ধু ও আত্মীয়ের মতো। কুরতুবীর ভাষায়, কাছের বন্ধু। বাগাভী এর আগের ধাপটাও বলে দেন: আপনি এমন করলে আপনার শত্রু আপনার কাছে নত হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Names in the Reports",
          "bn": "বর্ণনায় দুটি নাম"
        },
        "p": [
          {
            "en": "Two of the files carry reports on whom the verse concerned. Al-Baghawi cites Muqatil ibn Hayyan: it came down about Abu Sufyan ibn Harb, who softened towards the Muslims after fierce hostility through the marriage tie between him and the Prophet ﷺ, then became Muslim, a protector through Islam and near through kinship. Al-Qurtubi gives the same from Muqatil, adding that he used to harm the Prophet ﷺ. Al-Qurtubi then reports, from al-Mawardi, that it was also said to concern Abu Jahl ibn Hisham, and that Allah commanded patience with him and overlooking his harm.",
            "bn": "কার প্রসঙ্গে আয়াতটি, এ নিয়ে দুটি তাফসীরে বর্ণনা আছে। বাগাভী মুকাতিল ইবন হাইয়ান থেকে আনেন: আয়াতটি নাযিল হয়েছে আবু সুফিয়ান ইবন হারব (রাঃ)-এর ব্যাপারে। প্রচণ্ড শত্রুতার পর নবী ﷺ-এর সঙ্গে বৈবাহিক আত্মীয়তার সূত্রে তিনি মুসলিমদের প্রতি নরম হন। তারপর ইসলাম গ্রহণ করেন। ইসলামের সূত্রে হলেন অভিভাবক, আর আত্মীয়তার সূত্রে আপনজন। কুরতুবীও মুকাতিল থেকে একই কথা আনেন, সঙ্গে যোগ করেন যে তিনি নবী ﷺ-কে কষ্ট দিতেন। এরপর কুরতুবী মাওয়ার্দীর বরাতে জানান, কারও মতে আয়াতটি আবু জাহল ইবন হিশামের প্রসঙ্গে, আর আল্লাহ তার ব্যাপারে সবর ও উপেক্ষা করার আদেশ দিয়েছিলেন।"
          },
          {
            "en": "Al-Qurtubi weighs the two and calls the first, given by ath-Tha'labi and al-Qushayri, the more apparent, because of the verse's own words about enmity turning into friendship. These are reports the two commentators carry under Muqatil's and al-Mawardi's names; at-Tabari, Ibn Kathir and as-Sa'di give no occasion at all. The names describe what the reports describe, about people of that time. The verse licenses nothing against any living person or community, and it names no one.",
            "bn": "কুরতুবী দুটোকে মেপে দেখেন। সা'লাবী ও কুশাইরীর আনা প্রথম বর্ণনাটিকেই তিনি বেশি স্পষ্ট বলেন, কারণ আয়াত নিজেই শত্রুতা বন্ধুত্বে বদলে যাওয়ার কথা বলছে। মনে রাখা দরকার, এগুলো ওই দুই তাফসীরকারের আনা বর্ণনা, মুকাতিল ও মাওয়ার্দীর নামে। তাবারী, ইবন কাসীর ও সা'দী নাযিলের কোনো উপলক্ষই উল্লেখ করেননি। নাম দুটি কেবল সে যুগের মানুষের ব্যাপারে বর্ণনার কথাই বলে। আয়াতটি কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না, আর এতে কারও নামও নেই।"
          },
          {
            "en": "Al-Qurtubi also opens his comment on idfa' with a claim of abrogation: it was abrogated by the verse of the sword, and what remains of it as recommended is good companionship, bearing with others and overlooking faults. Further on he adds, under it was said, that this was before the command to fight. The other files fetched here, at-Tabari, Ibn Kathir, as-Sa'di, al-Baghawi and the Muyassar, mention no abrogation and explain the command as it stands. The difference is recorded here as theirs.",
            "bn": "ইদফা' শব্দের আলোচনা কুরতুবী শুরু করেন রহিত হওয়ার একটি দাবি দিয়ে। তাঁর ভাষায়, তরবারির আয়াত একে রহিত করেছে, আর এর যে অংশ মুস্তাহাব হিসেবে টিকে আছে তা হলো সুন্দর মেলামেশা, সহ্য করা আর দোষ এড়িয়ে যাওয়া। আরেকটু পরে তিনি ‘বলা হয়েছে’ বলে আনেন, এটা যুদ্ধের আদেশ আসার আগের কথা। এখানে সংগৃহীত বাকি তাফসীরগুলো, অর্থাৎ তাবারী, ইবন কাসীর, সা'দী, বাগাভী ও মুয়াসসার, রহিত হওয়ার কোনো কথা বলেননি। তাঁরা আদেশটির ব্যাখ্যা দিয়েছেন যেমন আছে তেমনভাবেই। পার্থক্যটা তাঁদের, আর তা তাঁদের নামেই এখানে রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience, a Portion, a Refuge",
          "bn": "সবর, সৌভাগ্য আর আশ্রয়"
        },
        "p": [
          {
            "en": "41:35 follows: none is granted it except those who are patient, and none is granted it except one with a great portion. Ibn Kathir explains that no one accepts this counsel and acts on it except those able to be patient in it, since it is hard for people. The great portion, he says, is a large share of happiness in this world and the next. The Muyassar says the same and names what the patience is for: hardships and harm, and holding oneself to what Allah loves.",
            "bn": "এরপর ৪১:৩৫: এ গুণ কেবল তারাই পায় যারা সবর করে, আর কেবল সে-ই পায় যার ভাগ্য বড়। ইবন কাসীর বলেন, এ উপদেশ মেনে নিয়ে তা অনুযায়ী চলে কেবল তারাই, যারা এতে সবর ধরে রাখতে পারে। কারণ মানুষের জন্য কাজটা কঠিন। বড় ভাগ্য বলতে তিনি বোঝান দুনিয়া ও আখিরাতে সুখের বড় অংশ। মুয়াসসারও একই কথা বলে, আর জানিয়ে দেয় সবরটা কিসের ওপর: অপছন্দের বিষয় আর কষ্টের ওপর, এবং নিজেকে আল্লাহর পছন্দের পথে ধরে রাখার ওপর।"
          },
          {
            "en": "41:36 then turns to the provocation: if an incitement from Shaytan stirs you, seek refuge in Allah. Ibn Kathir draws a contrast. A devil among men may be won over by kind treatment, but a devil among the jinn, when he whispers, can only be met by seeking refuge with the Creator who gave him power over you. He notes that the Qur'an pairs these commands in only two other places: 7:199 and 7:200, and 23:96 to 23:98.",
            "bn": "তারপর ৪১:৩৬ আসে উসকানির প্রসঙ্গে: শয়তানের পক্ষ থেকে কোনো প্ররোচনা আপনাকে নাড়া দিলে আল্লাহর আশ্রয় চান। ইবন কাসীর এখানে একটা পার্থক্য দেখান। মানুষ-শয়তানকে ভালো ব্যবহার দিয়ে বশে আনা যেতে পারে। কিন্তু জিন-শয়তান যখন কুমন্ত্রণা দেয়, তখন একমাত্র উপায় সেই স্রষ্টার আশ্রয় চাওয়া, যিনি তাকে আপনার ওপর ক্ষমতা দিয়েছেন। তিনি জানান, এ দুই আদেশ কুরআনে একসঙ্গে এসেছে আর মাত্র দুই জায়গায়: ৭:১৯৯ ও ৭:২০০-তে, আর ২৩:৯৬ থেকে ২৩:৯৮-এ।"
          },
          {
            "en": "Al-Qurtubi closes with a scene. A man reviled Qanbar, the freed servant of 'Ali ibn Abi Talib, and 'Ali called out: Qanbar, leave the one who reviles you and pay him no heed; you will please the Most Merciful, anger Shaytan and punish your reviler, for a fool is punished by nothing like silence. Between that silence, as-Sa'di's greeting offered to a relative who shuns you, and Ibn 'Abbas's patience at anger, the commentators leave a range of better answers, and 41:35 is frank that each one takes patience.",
            "bn": "কুরতুবী শেষ করেন একটি ঘটনা দিয়ে। এক লোক আলী ইবন আবী তালিব (রাঃ)-এর আযাদকৃত গোলাম কাম্বারকে গালি দিল। আলী (রাঃ) ডেকে বললেন: কাম্বার, যে তোমাকে গালি দিচ্ছে তাকে ছেড়ে দাও, তার দিকে মন দিয়ো না। এতে দয়াময় খুশি হবেন, শয়তান নারাজ হবে, আর গালিদাতাও শাস্তি পাবে। কারণ মূর্খকে চুপ থাকার চেয়ে বড় শাস্তি আর কিছু দিয়ে দেওয়া যায় না। ওই নীরবতা, দূরে সরে যাওয়া আত্মীয়কে সা'দীর পরামর্শমতো সালাম দেওয়া, আর রাগের মুহূর্তে ইবন আব্বাস (রাঃ)-এর বলা সবর। তাফসীরকারেরা উত্তম জবাবের এমন অনেক রূপ রেখে গেছেন। আর ৪১:৩৫ খোলাখুলিই বলে দেয়, প্রতিটির জন্য সবর লাগে।"
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
          "bn": "আশ্রয় থেকে আকাশের দিকে"
        },
        "p": [
          {
            "en": "The verses just before this are about speech and conduct. 41:33 praised whoever calls to Allah and acts rightly, and 41:34 asked for evil to be pushed back with what is better. 41:36 then gave the remedy when a whisper from Satan stirs: seek refuge in Allah, the Hearing, the Knowing. Verse 37 lifts the eyes upward. Ibn Kathir opens on it by saying that Allah here alerts His creation to His immense power, that He has no equal, and that He is able to do whatever He wills.",
            "bn": "এর আগের আয়াতগুলো কথা আর আচরণ নিয়ে। ৪১:৩৩ আয়াত প্রশংসা করেছে সেই মানুষের, যে আল্লাহর দিকে ডাকে আর সৎ কাজ করে। ৪১:৩৪ আয়াত বলেছে মন্দকে উত্তম দিয়ে ঠেকাতে। তারপর ৪১:৩৬ আয়াত শয়তানের কুমন্ত্রণা জাগলে কী করতে হবে তা বলে দিয়েছে: আল্লাহর আশ্রয় চাও, তিনি সব শোনেন, সব জানেন। ৩৭ নম্বর আয়াত এবার চোখ তুলে দেয় উপরের দিকে। ইবন কাসীর এর আলোচনা শুরু করেন এ কথা বলে যে, আল্লাহ এখানে তাঁর সৃষ্টিকে নিজের বিশাল কুদরতের কথা মনে করিয়ে দিচ্ছেন। তাঁর কোনো তুলনা নেই, আর যা চান তা করতে তিনি সক্ষম।"
          },
          {
            "en": "The verse begins wa min ayatihi, and of His signs. The commentators fill the word with slightly different weight. Al-Qurtubi glosses the signs as marks that point to His oneness and His power. At-Tabari calls them Allah's proofs against His creation and His indications of His oneness and the greatness of His authority. As-Sa'di lists more: they show the perfection of His power, the reach of His will, the breadth of His rule, His mercy to His servants, and that He alone is God, without partner. Four signs are named, and then comes a command.",
            "bn": "আয়াতটি শুরু হয় ওয়া মিন আয়াতিহি দিয়ে: আর তাঁর নিদর্শনগুলোর মধ্যে। শব্দটার ওজন তাফসীরকারেরা একটু ভিন্নভাবে মাপেন। কুরতুবীর ব্যাখ্যায় এগুলো এমন আলামত, যা তাঁর একত্ব আর কুদরতের দিকে ইশারা করে। তাবারী এগুলোকে বলেন সৃষ্টির বিরুদ্ধে আল্লাহর দলিল, তাঁর একত্ব আর বিশাল ক্ষমতার প্রমাণ। সা'দী তালিকাটা আরও লম্বা করেন। এগুলো দেখায় তাঁর কুদরতের পূর্ণতা, তাঁর ইচ্ছার কার্যকারিতা, তাঁর রাজত্বের বিস্তার আর বান্দাদের প্রতি তাঁর রহমত। আরও দেখায় যে তিনিই একমাত্র ইলাহ, তাঁর কোনো শরিক নেই। চারটি নিদর্শনের নাম আসে, তারপর আসে একটি হুকুম।"
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
            "bn": "প্রথম জোড়া রাত আর দিন। ইবন কাসীর বলেন, আল্লাহ রাতকে সৃষ্টি করেছেন তার অন্ধকার দিয়ে, আর দিনকে তার আলো দিয়ে। দুটি পালা করে একটার পর আরেকটা আসে, কোনোটাই থেমে থাকে না। তাবারী নিদর্শনটা খোঁজেন এদের ভিন্নতায়, আর একটার জায়গা আরেকটার নিয়ে নেওয়ায়। তারপর তিনি ৩৬:৪০ আয়াতের কথা জুড়ে দেন: সূর্য চাঁদকে ধরতে পারে না, রাতও দিনকে ছাড়িয়ে যেতে পারে না, প্রত্যেকে নিজ কক্ষপথে সাঁতার কাটে। তাই নিদর্শন শুধু আলো নয়, এই শৃঙ্খলাও।"
          },
          {
            "en": "As-Sa'di turns the pair toward the people who live inside it. The day carries the benefit of its light, in which servants go about their work, and the night the benefit of its darkness, in which creation grows still and rests. The sign is a provision as well as a spectacle. The Muyassar adds the frame that will matter in a moment: the alternation of night and day, and of sun and moon, is all under His subjection and His command. Nothing in the pair runs on its own authority.",
            "bn": "সা'দী জোড়াটাকে দেখেন তাদের দিক থেকে, যারা এর ভেতরে বাস করে। দিনের উপকার তার আলোয়, যেখানে বান্দারা কাজকর্ম করে। রাতের উপকার তার অন্ধকারে, যেখানে সৃষ্টি শান্ত হয়ে বিশ্রাম নেয়। ফলে নিদর্শনটা শুধু দেখার দৃশ্য নয়, জীবিকারও উপকরণ। মুয়াসসার একটা কাঠামো যোগ করে, যা একটু পরেই কাজে লাগবে। রাত-দিনের পালাবদল, সূর্য-চাঁদের আসা-যাওয়া, সবই তাঁর বশে আর তাঁর হুকুমের অধীনে। এ জোড়ার কোনো কিছুই নিজের ক্ষমতায় চলে না।"
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
            "bn": "দ্বিতীয় জোড়া সূর্য আর চাঁদ। ইবন কাসীর চাঁদের কথা বিশেষ করে বলেন: তার আলো, কক্ষপথে তার জন্য মেপে রাখা মনজিলগুলো, আর আকাশে তার চলার পথের বদল। তাঁর মতে চাঁদ আর সূর্যের চলার এই ভিন্নতা থেকেই মানুষ রাত-দিন, সপ্তাহ, মাস আর বছরের হিসাব জানে। এতে স্পষ্ট হয় কখন কার হক পাওনা হলো, কখন ইবাদতের সময় আর কখন লেনদেনের। এভাবে পড়লে আকাশ শুধু বাতি নয়, দায়দায়িত্বের পঞ্জিকাও।"
          },
          {
            "en": "As-Sa'di widens the circle. The livelihoods of people cannot stand without the sun and moon, he writes, nor can their bodies, nor the bodies of their animals, and the benefits in the two are beyond counting. Then Ibn Kathir names the reason the warning comes next. Because the sun and moon are the most beautiful bodies to be seen in the upper and lower world, Allah points out that they are created things, two servants among His servants, under His compulsion and subjection. The greater the gift, the easier it is to bow to the gift.",
            "bn": "সা'দী পরিধিটা আরও বড় করেন। তিনি লেখেন, সূর্য-চাঁদ ছাড়া মানুষের জীবিকা টেকে না, তাদের শরীরও না, তাদের পশুদের শরীরও না। এ দুটিতে যত কল্যাণ, তা গুনে শেষ করা যায় না। এরপর ইবন কাসীর বলেন সতর্কবাণীটা কেন ঠিক এখানেই আসে। উপরের আর নিচের জগতে চোখে পড়া সব বস্তুর মধ্যে সূর্য আর চাঁদ সবচেয়ে সুন্দর। তাই আল্লাহ জানিয়ে দেন, এরা সৃষ্ট বস্তু, তাঁর বান্দাদের মধ্যে দুই বান্দা, তাঁর ক্ষমতা আর বশ্যতার অধীন। দান যত বড়, দানের সামনেই মাথা নুইয়ে ফেলার ঝুঁকি তত বেশি।"
          }
        ]
      },
      {
        "h": {
          "en": "They Run Because They Are Run",
          "bn": "চলে, কারণ চালানো হয়"
        },
        "p": [
          {
            "en": "La tasjudu lish-shamsi wa la lil-qamar: do not prostrate to the sun, nor to the moon. At-Tabari reads it as spoken to people at large, and he gives the reason at once. The two run in their orbit for your benefit, he says, but they run only because Allah makes them run for you, and they obey Him in their course. They have no power of their own to travel without Him moving them. Nor can they bring you any benefit or any harm by themselves.",
            "bn": "লা তাসজুদু লিশ-শামসি ওয়া লা লিল-কামার: সূর্যকে সেজদা করো না, চাঁদকেও না। তাবারী এটাকে পড়েন সাধারণভাবে সব মানুষকে বলা কথা হিসেবে, আর কারণটাও সঙ্গে সঙ্গে বলে দেন। দুটি কক্ষপথে চলে তোমাদের উপকারের জন্য, ঠিক। কিন্তু চলে কেবল এ কারণে যে আল্লাহ এদের তোমাদের জন্য চালান, আর চলার পথে এরা তাঁরই আনুগত্য করে। তিনি না চালালে নিজে নিজে চলার কোনো ক্ষমতা এদের নেই। নিজের পক্ষ থেকে তোমাদের কোনো উপকার বা ক্ষতি করার সাধ্যও নেই।"
          },
          {
            "en": "At-Tabari closes the thought with a picture. Allah subjected the two to you for your benefit and your welfare, so prostrate to Him and worship Him rather than them, for if He willed He would blot out their light and leave you bewildered in darkness, finding no path and seeing nothing. Al-Qurtubi argues the same way. Whatever the two are as creations, he says, they have no merit in themselves that would earn them worship beside Allah, because their Creator is Allah, and if He willed He would end them or put out their light.",
            "bn": "তাবারী ভাবনাটা শেষ করেন একটা ছবি দিয়ে। আল্লাহ এ দুটিকে তোমাদের উপকার আর কল্যাণের জন্য বশ করে দিয়েছেন। তাই সেজদা করো তাঁকে, ইবাদত করো তাঁর, এদের নয়। তিনি চাইলে এদের আলো মুছে দিতেন, আর তোমরা অন্ধকারে দিশেহারা হয়ে থাকতে, না পথ খুঁজে পেতে, না কিছু দেখতে। কুরতুবীর যুক্তিও একই ধারায়। তাঁর কথায়, সৃষ্টি হিসেবে এরা যা-ই হোক, নিজেদের এমন কোনো মর্যাদা নেই যার জোরে আল্লাহর পাশাপাশি ইবাদত পাওয়ার যোগ্য হবে। কারণ এদের স্রষ্টা আল্লাহ। তিনি চাইলে এদের বিলীন করে দিতেন বা এদের আলো নিভিয়ে দিতেন।"
          },
          {
            "en": "As-Sa'di compresses it into three words: the two are governed, subjected and created; the Muyassar uses two of them, governed and created. As-Sa'di then draws the general rule. Worship Him alone, for He is the great Creator, and leave the worship of every created thing, however large its body and however many its benefits, because that good does not come from the thing itself; it comes from its Creator. The warning lands on the very objects whose usefulness is plainest. What helps most is the thing most likely to be mistaken for its source.",
            "bn": "সা'দী কথাটাকে তিনটি শব্দে গুটিয়ে আনেন: এ দুটি পরিচালিত, বশীভূত আর সৃষ্ট। মুয়াসসার এর দুটি শব্দ নেয়: পরিচালিত আর সৃষ্ট। সা'দী এরপর একটা সাধারণ নিয়ম টানেন। শুধু তাঁরই ইবাদত করো, কারণ তিনিই মহান স্রষ্টা। সৃষ্ট সব কিছুর ইবাদত ছেড়ে দাও, তার আকার যত বড় আর উপকার যত বেশিই হোক। কারণ সেই কল্যাণ জিনিসটার নিজের নয়, তার স্রষ্টার পক্ষ থেকে আসে। লক্ষ করার মতো, সতর্কবাণীটা পড়েছে ঠিক সেই জিনিসগুলোর উপর, যাদের উপকার সবচেয়ে স্পষ্ট। যা সবচেয়ে বেশি কাজে লাগে, তাকেই উৎস ভেবে ভুল করার আশঙ্কা সবচেয়ে বেশি।"
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
            "bn": "ওয়াসজুদু লিল্লাহিল্লাযী খালাকাহুন্না: আর সেজদা করো আল্লাহকে, যিনি এদের সৃষ্টি করেছেন। এখানে -হুন্না সর্বনামটি স্ত্রীলিঙ্গ বহুবচন, অথচ আগের বিশেষ্যগুলো মেশানো। তাবারী দুটো দিকই ব্যাখ্যা করেন। বহুবচন, কারণ উদ্দেশ্য রাত, দিন, সূর্য আর চাঁদ, চারটি একসঙ্গে। আর স্ত্রীলিঙ্গ, কারণ মানুষ নয় এমন জিনিসের বহুবচনে আরবরা প্রায়ই স্ত্রীলিঙ্গ ব্যবহার করে। তিনি একটা নমুনা বাক্য আনেন: আমি আমরের কাছে কিছু কাপড় দেখলাম, আর সেগুলো তার কাছ থেকে নিয়ে নিলাম। এখানে 'সেগুলো' বোঝাতে আরবিতে আসে আখাযতুহুন্না।"
          },
          {
            "en": "Al-Qurtubi records three views on what the pronoun points back to: all four signs; the sun and moon alone, on the ground that two can be treated as a plural; or the sense of the word signs itself. On the form he agrees with al-Baghawi. Both say the feminine follows the pattern of the broken plural, and does not apply the usual rule of letting the masculine prevail in a mixed group, since these are not beings with reason. Either way, the verb fixes the point: He created each of them.",
            "bn": "সর্বনামটি কার দিকে ফিরছে, এ নিয়ে কুরতুবী তিনটি মত উল্লেখ করেন। এক, চারটি নিদর্শনের দিকেই। দুই, শুধু সূর্য আর চাঁদের দিকে, কারণ দুটিকেও বহুবচন ধরা যায়। তিন, খোদ 'নিদর্শন' শব্দের অর্থের দিকে। রূপের প্রশ্নে কুরতুবী আর বাগাভী একমত। দুজনেই বলেন, স্ত্রীলিঙ্গটা ভাঙা বহুবচনের ধাঁচ মেনে এসেছে। মিশ্র দলে পুরুষবাচককে প্রাধান্য দেওয়ার সাধারণ নিয়ম এখানে খাটেনি, কারণ এরা বুদ্ধিসম্পন্ন সত্তা নয়। যে মতই ধরা হোক, ক্রিয়াপদটি আসল কথাটা পাকা করে দেয়: এদের প্রত্যেককে তিনিই সৃষ্টি করেছেন।"
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
            "bn": "আয়াতটি শেষ হয় একটা শর্তে: ইন কুনতুম ইয়্যাহু তা'বুদূন, যদি তোমরা তাঁরই ইবাদত করো। শর্তটার ভেতরে কী আছে, তাবারী তা খুলে বলেন। তোমরা যদি আল্লাহর ইবাদত করো আর আনুগত্যে তাঁর সামনে বিনীত হও, তবে সেই আনুগত্যের অংশ হলো ইবাদতকে খাঁটিভাবে তাঁর জন্য রাখা, তাতে আর কাউকে শরিক না করা। কারণ ইবাদত তিনি ছাড়া আর কারও জন্য মানায় না। মুয়াসসারের পাঠে: যদি সত্যিই তোমরা তাঁর হুকুমের অনুগত হও, শোনো আর মানো, শুধু তাঁরই ইবাদত করো। সা'দীর কথা সংক্ষিপ্ত: তাহলে ইবাদত আর দ্বীনের ইখলাস শুধু তাঁর জন্যই নির্দিষ্ট করো।"
          },
          {
            "en": "Ibn Kathir names what the condition rules out: do not associate anything with Him, for your worship of Him will not profit you while you worship others with Him, since He does not forgive that partners be set up beside Him, words found in 4:48. None of the commentators consulted here names a particular people who bowed to the sun or the moon; at-Tabari reads the address as to people at large. The verse states what it states about such prostration, and it licenses nothing against any living person or community.",
            "bn": "শর্তটা কী বাদ দেয়, ইবন কাসীর তা বলে দেন: তাঁর সঙ্গে কিছুকে শরিক করো না। কারণ তাঁর পাশাপাশি অন্যের ইবাদত করলে তাঁর ইবাদত তোমাদের কোনো কাজে আসবে না, তিনি তাঁর সঙ্গে শরিক করা ক্ষমা করেন না। শেষ কথাটা ৪:৪৮ আয়াতের শব্দ। এখানে যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই সূর্য বা চাঁদকে সেজদা করত এমন নির্দিষ্ট কোনো জাতির নাম বলেনি। তাবারী সম্বোধনটা পড়েন সাধারণভাবে সব মানুষের প্রতি। এমন সেজদা সম্পর্কে আয়াত যা বলে তা-ই বলে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না।"
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
            "bn": "মাআরিফুল কুরআন এ আয়াত থেকে একটা বিধান বের করে: সেজদা কেবল স্রষ্টারই হক। উম্মাহর ইজমা হিসেবে এতে বলা হয়েছে, কোনো তারা, মানুষ বা এমন কিছুর সামনে সেজদা করা হারাম, ইবাদতের নিয়তে হোক বা সম্মান দেখাতে। পার্থক্যটা শুধু ব্যক্তির হুকুমে। আল্লাহ ছাড়া অন্য কাউকে ইবাদতের নিয়তে সেজদা করলে সে কাফির হয়ে যায়। আর শুধু সম্মান দেখাতে করলে তাকে কাফির বলা হয় না, তবে সে কঠিন হারাম কাজ করেছে এবং গুনাহগার।"
          },
          {
            "en": "It goes on to separate two kinds of prostration. Prostration of worship to any being besides Allah, it says, was never lawful in the law given to any prophet, because it is shirk. Prostration of greeting and respect was allowed in some earlier laws, and it cites the angels before Adam (AS) and the father and brothers of Yusuf (AS) before him. The jurists of this Ummah, it says, agree that this was particular to those earlier laws and stands abrogated in Islam, so any prostration to other than Allah is now forbidden.",
            "bn": "এরপর মাআরিফুল কুরআন দুই ধরনের সেজদা আলাদা করে। আল্লাহ ছাড়া অন্য কোনো সত্তাকে ইবাদতের সেজদা কোনো নবীর শরিয়তে কখনো বৈধ ছিল না, কারণ তা শিরক। তবে অভিবাদন আর সম্মানের সেজদা আগের কিছু শরিয়তে বৈধ ছিল। এর উদাহরণ হিসেবে আনা হয়েছে আদম (আঃ)-এর সামনে ফেরেশতাদের সেজদা, আর ইউসুফ (আঃ)-এর সামনে তাঁর পিতা ও ভাইদের সেজদা। মাআরিফুল কুরআন বলে, এ উম্মাহর ফকীহরা একমত যে এটা আগের শরিয়তগুলোতেই সীমাবদ্ধ ছিল, ইসলামে তা রহিত। তাই এখন আল্লাহ ছাড়া কারও জন্য যেকোনো সেজদা হারাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Forehead Goes Down",
          "bn": "কোথায় কপাল মাটিতে নামে"
        },
        "p": [
          {
            "en": "Al-Qurtubi notes that this is a verse of prostration without dispute, but that scholars differed over the exact place to prostrate. Malik placed it at in kuntum iyyahu ta'budun, the end of verse 37, because it is joined to the command to prostrate, and 'Ali and Ibn Mas'ud (RA) and others used to prostrate at ta'budun. Ibn Wahb and ash-Shafi'i placed it at wa hum la yas'amun, the end of 41:38, because there the speech is complete and worship reaches its fullest; Abu Hanifa held the same, and Ibn 'Abbas (RA) used to prostrate at yas'amun.",
            "bn": "কুরতুবী জানান, এটি যে সেজদার আয়াত তাতে কোনো মতভেদ নেই। মতভেদ হয়েছে ঠিক কোন জায়গায় সেজদা করতে হবে তা নিয়ে। মালিকের মতে জায়গাটা ইন কুনতুম ইয়্যাহু তা'বুদূন, অর্থাৎ ৩৭ নম্বর আয়াতের শেষে, কারণ এটি সেজদার হুকুমের সঙ্গে লাগানো। আলী (রাঃ), ইবন মাসউদ (রাঃ) ও আরও কেউ কেউ তা'বুদূন-এ পৌঁছে সেজদা করতেন। ইবন ওয়াহব আর শাফিঈর মতে জায়গাটা ওয়া হুম লা ইয়াসআমূন, অর্থাৎ ৪১:৩৮ আয়াতের শেষে। কারণ সেখানে কথা পূর্ণ হয়, আর ইবাদত ও আনুগত্যের চূড়ান্ত রূপ সেখানেই। আবু হানীফাও এ মত দেন, আর ইবন আব্বাস (রাঃ) ইয়াসআমূন-এ সেজদা করতেন।"
          },
          {
            "en": "Al-Qurtubi goes on. Ibn 'Umar (RA) said to prostrate at the later of the two, and the same is reported from Masruq, Ibrahim an-Nakha'i, al-Hasan, Ibn Sirin and others he names; Abu Wa'il, Qatada and Bakr ibn 'Abdullah prostrated at yas'amun. He closes the question with a remark from Ibn al-'Arabi: the matter is close. The text of the mushaf shown here sets the sajda sign at the end of 41:38. Both positions stand as al-Qurtubi records them, and this article does not choose between them.",
            "bn": "কুরতুবী আরও বলেন, ইবন উমর (রাঃ) দুটির মধ্যে পরেরটিতে সেজদা করতে বলেছেন। মাসরূক, ইবরাহীম নাখঈ, হাসান, ইবন সীরীন এবং তাঁর উল্লেখ করা আরও কয়েকজন থেকে একই কথা বর্ণিত। আবু ওয়াইল, কাতাদা আর বকর ইবন আব্দুল্লাহ ইয়াসআমূন-এ সেজদা করতেন। প্রশ্নটা তিনি শেষ করেন ইবনুল আরাবীর একটি মন্তব্য দিয়ে: ব্যাপারটা কাছাকাছি। এখানে দেখানো মুসহাফের পাঠে সেজদার চিহ্ন বসানো আছে ৪১:৩৮ আয়াতের শেষে। কুরতুবী যেভাবে দুটি মত লিখেছেন, দুটিই সেভাবে রইল। এ লেখা কোনোটির পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Sun Darkens",
          "bn": "যখন সূর্য অন্ধকার হয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi relays a further point, from Ibn Khuwayz Mindad: that this verse includes the prayer for an eclipse of the sun and moon, since the Arabs used to say the sun and moon eclipse only for the death of someone great, and the Prophet ﷺ prayed the eclipse prayer. Al-Qurtubi adds that the eclipse prayer is established in the Sahih collections of al-Bukhari, Muslim and others, that its manner was much disputed because the reports differ, and that Sahih Muslim is the main reference on it. None of the commentators consulted here attaches a particular hadith to this verse.",
            "bn": "কুরতুবী আরেকটি কথা আনেন ইবন খুওয়াইয মিনদাদ থেকে: এ আয়াতে সূর্য ও চন্দ্রগ্রহণের নামাজের কথাও আছে। কারণ আরবরা বলত, বড় কোনো মানুষের মৃত্যু ছাড়া সূর্য-চাঁদে গ্রহণ লাগে না, আর নবী ﷺ গ্রহণের নামাজ পড়েছিলেন। কুরতুবী যোগ করেন, গ্রহণের নামাজ বুখারী, মুসলিম ও অন্যান্য সহীহ গ্রন্থে প্রমাণিত। তবে বর্ণনাগুলো ভিন্ন হওয়ায় এর পদ্ধতি নিয়ে অনেক মতভেদ হয়েছে, আর এ বিষয়ে মূল ভরসা সহীহ মুসলিম। এখানে দেখা কোনো তাফসীর এ আয়াতের সঙ্গে নির্দিষ্ট কোনো হাদিস জুড়ে দেয়নি।"
          },
          {
            "en": "A general narration on eclipses, which no commentator consulted here ties to this verse, is in Sahih al-Bukhari (1041). Abu Mas'ud (RA) said that the Prophet ﷺ said: 'The sun and the moon do not eclipse for the death of anyone among the people, but they are two signs among the signs of Allah; so when you see them, stand and pray.' Al-Bukhari gives it no grading beyond placing it in his Sahih. It uses the verse's own word, signs, and when the light falters it sends the believer to prayer.",
            "bn": "গ্রহণ নিয়ে একটি সাধারণ বর্ণনা আছে সহীহ বুখারীতে (১০৪১)। এখানে দেখা কোনো তাফসীর একে এ আয়াতের সঙ্গে যুক্ত করেনি। আবু মাসউদ (রাঃ) বলেন, নবী ﷺ বলেছেন: 'কোনো মানুষের মৃত্যুর কারণে সূর্য আর চাঁদে গ্রহণ লাগে না। বরং এ দুটি আল্লাহর নিদর্শনগুলোর মধ্যে দুটি নিদর্শন। তাই যখন এ দুটিকে দেখবে, দাঁড়িয়ে যাও আর নামাজ পড়ো।' নিজের সহীহ গ্রন্থে রাখা ছাড়া বুখারী এর আলাদা কোনো মান উল্লেখ করেননি। বর্ণনাটি আয়াতেরই শব্দ ব্যবহার করে, নিদর্শন। আর আলো যখন ম্লান হয়, তখন মুমিনকে পাঠিয়ে দেয় নামাজে।"
          }
        ]
      }
    ]
  },
  "41:47": {
    "sections": [
      {
        "h": {
          "en": "A Question Sent Back",
          "bn": "প্রশ্ন ফিরে যায় তাঁর কাছে"
        },
        "p": [
          {
            "en": "The verse before this one, 41:46, closes a short argument: whoever does good does it for his own soul, whoever does evil does it against it, and your Lord is never unjust to His servants. A reckoning of that kind points to a day when it is carried out. 41:47 opens on that day's timing: ilayhi yuraddu 'ilmu as-sa'ah, to Him is the knowledge of the Hour referred. The verb yuraddu is passive and means returned or handed back. The knowledge is not shared out among creatures; it is sent home.",
            "bn": "এর আগের আয়াত ৪১:৪৬ একটি ছোট যুক্তি শেষ করেছে: যে ভালো কাজ করে, নিজের জন্যই করে; যে মন্দ করে, তার দায় তার নিজের ওপরই পড়ে; আর আপনার রব বান্দাদের প্রতি কখনো জুলুম করেন না। এমন হিসাবের কথা উঠলেই একটা দিনের কথা আসে, যেদিন সে হিসাব হবে। ৪১:৪৭ শুরু হয় সেই দিনের সময় দিয়ে: ইলাইহি ইউরাদ্দু ইলমুস সা'আহ, কিয়ামতের জ্ঞান তাঁর দিকেই ফিরিয়ে দেওয়া হয়। ইউরাদ্দু ক্রিয়াটি কর্মবাচ্য, মানে ফেরত দেওয়া হয়। এ জ্ঞান সৃষ্টির মধ্যে ভাগ হয় না, নিজের ঠিকানায় ফিরে যায়।"
          },
          {
            "en": "The commentators read the clause in close agreement. At-Tabari says those who have knowledge refer the knowledge of the Hour to Allah, for no one besides Him knows when it will stand. Al-Baghawi says its knowledge, when anyone is asked about it, is referred back to Him, and no one else knows it. The Muyassar adds that it returns to Allah alone, who has no partner. As-Sa'di widens the circle: all of creation refer their knowledge to Allah and admit they cannot reach it, messengers, angels and everyone else.",
            "bn": "এ অংশের ব্যাখ্যায় তাফসীরকারেরা প্রায় একমত। তাবারী বলেন, যাদের জ্ঞান আছে তারা কিয়ামতের জ্ঞান আল্লাহর দিকে সোপর্দ করে, কারণ তা কখন কায়েম হবে, তিনি ছাড়া কেউ জানে না। বাগাভীর কথায়, এ বিষয়ে কাউকে জিজ্ঞেস করা হলে উত্তরটা তাঁর দিকেই ফিরিয়ে দিতে হয়, অন্য কেউ তা জানে না। মুয়াসসার যোগ করে, এ জ্ঞান ফেরে একমাত্র আল্লাহর কাছে, যাঁর কোনো শরীক নেই। সা'দী বৃত্তটা আরও বড় করেন। তাঁর মতে গোটা সৃষ্টি এ জ্ঞান আল্লাহর কাছে সোপর্দ করে এবং নিজের অক্ষমতা স্বীকার করে: রাসূলগণ, ফেরেশতারা, আর বাকি সবাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked by an Angel",
          "bn": "ফেরেশতার প্রশ্ন, নবীর উত্তর"
        },
        "p": [
          {
            "en": "Ibn Kathir explains the clause in one short line, no one knows it besides Him, and then points to a conversation. The Prophet ﷺ, whom he calls the leader of mankind, was asked about the Hour by Jibril (AS), one of the leading angels, and said: the one asked about it knows no more than the one asking. Ibn Kathir sets two verses beside it: 79:44, to your Lord is its final term, and 7:187, none will reveal it at its time except Him. The second of these twice says its knowledge is with Allah.",
            "bn": "ইবন কাসীর অংশটির ব্যাখ্যা দেন এক বাক্যে: তিনি ছাড়া কেউ তা জানে না। তারপর একটি কথোপকথনের দিকে ইঙ্গিত করেন। নবী ﷺ, যাঁকে তিনি মানবজাতির নেতা বলেন, তাঁকে কিয়ামত সম্পর্কে জিজ্ঞেস করেছিলেন জিবরীল (আঃ), যিনি শ্রেষ্ঠ ফেরেশতাদের একজন। নবী ﷺ বলেছিলেন, যাকে জিজ্ঞেস করা হচ্ছে, সে প্রশ্নকারীর চেয়ে বেশি জানে না। এর পাশে ইবন কাসীর দুটি আয়াত রাখেন। ৭৯:৪৪: এর চূড়ান্ত সময় আপনার রবের কাছে। আর ৭:১৮৭: তিনি ছাড়া কেউ তা যথাসময়ে প্রকাশ করবে না। শেষ আয়াতটি দুবার বলে, এর জ্ঞান আল্লাহর কাছে।"
          },
          {
            "en": "Sahih al-Bukhari 50, from Abu Hurayra, has it after questions on faith, Islam and ihsan: \"When will the Hour be established?\" Allah's Messenger (ﷺ) replied, \"The answerer has no better knowledge than the questioner. But I will inform you about its portents. 1. When a slave (lady) gives birth to her master. 2. When the shepherds of black camels start boasting and competing with others in the construction of higher buildings. And the Hour is one of five things which nobody knows except Allah.\" These portents belong to the hadith's own subject, not to this verse; no tafsir consulted here on 41:47 explains them, so this article does not.",
            "bn": "কথোপকথনটি আছে সহীহ বুখারী ৫০-এ, আবু হুরায়রা (রাঃ)-এর বর্ণনায়। দীর্ঘ সে হাদিসে জিবরীল (আঃ) ঈমান, ইসলাম ও ইহসান সম্পর্কে প্রশ্ন করেন। কিয়ামতের অংশটি এরকম: তিনি জিজ্ঞেস করলেন, কিয়ামত কখন? নবী ﷺ বললেন, \"যাকে এ বিষয়ে জিজ্ঞেস করা হচ্ছে, সে প্রশ্নকারীর চেয়ে বেশি জানে না। তবে আমি তোমাকে এর কিছু আলামত বলে দিচ্ছি। ১. যখন দাসী তার মনিবকে জন্ম দেবে। ২. যখন কালো উটের রাখালেরা উঁচু দালান বানানো নিয়ে পাল্লা দেবে। কিয়ামত সেই পাঁচ বিষয়ের একটি, যা আল্লাহ ছাড়া কেউ জানে না।\" এ আলামতগুলো হাদিসটির নিজস্ব আলোচনার অংশ, এ আয়াতের বিষয়ের বাইরে। ৪১:৪৭-এর ওপর এখানে উদ্ধৃত কোনো তাফসীর এগুলোর ব্যাখ্যা দেয়নি, তাই এ লেখাও সে ব্যাখ্যায় যায় না।"
          },
          {
            "en": "The report goes on: the Prophet ﷺ recited the opening of 31:34, indeed with Allah is the knowledge of the Hour; the man left; those sent after him found no one; and the Prophet ﷺ said it was Jibril, come to teach people their religion. Al-Bukhari placed it in his Sahih and gave it no further grading. Notice what was being taught. Jibril came as a teacher, and part of his lesson was a reply admitting that no creature holds this answer. Saying so plainly was itself part of the religion Jibril came to teach.",
            "bn": "বর্ণনাটি এরপর বলে, নবী ﷺ ৩১:৩৪ আয়াতের শুরু তিলাওয়াত করলেন: নিশ্চয়ই কিয়ামতের জ্ঞান আল্লাহর কাছে। লোকটি চলে গেল। তাঁকে ফিরিয়ে আনতে লোক পাঠানো হলো, কিন্তু কাউকে দেখা গেল না। তখন নবী ﷺ বললেন, ইনি জিবরীল, মানুষকে তাদের দ্বীন শেখাতে এসেছিলেন। বুখারী এটি তাঁর সহীহ গ্রন্থে এনেছেন, আলাদা কোনো মান উল্লেখ করেননি। লক্ষ করার বিষয়, এখানে শেখানো হচ্ছিল কী। জিবরীল (আঃ) এসেছিলেন শিক্ষক হয়ে, আর তাঁর পাঠের একটি অংশ ছিল এমন এক জবাব, যা স্বীকার করে নেয়: এ প্রশ্নের উত্তর কোনো সৃষ্টির কাছে নেই। সোজাসুজি এ কথা বলাটাও ছিল সেই দ্বীনের অংশ, যা শেখাতে জিবরীল (আঃ) এসেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Fruit Still in Its Sheath",
          "bn": "খোসার ভেতরের ফল"
        },
        "p": [
          {
            "en": "Wa ma takhruju min thamaratin min akmamiha: and no fruit comes out of its akmam except with His knowledge. At-Tabari explains: whatever fruit of a tree appears from the akmam in which it was hidden, and then comes out into view. He reports Mujahid's gloss, when it emerges, and as-Suddi's, from its spathe. Akmam, he says, is the plural of a word for any container, of water or of anything else, and the Arabs call the husk of the palm's spathe a kumm. Al-Qurtubi, al-Baghawi and the Muyassar all gloss it as containers.",
            "bn": "ওয়া মা তাখরুজু মিন সামারাতিন মিন আকমামিহা: তাঁর অজান্তে কোনো ফল তার আকমাম থেকে বের হয় না। তাবারী ব্যাখ্যা করেন: গাছের যে ফল তার আকমামের ভেতরে লুকিয়ে ছিল, তারপর বেরিয়ে এসে চোখের সামনে দেখা দেয়। তিনি মুজাহিদের ব্যাখ্যা আনেন, যখন তা বের হয়, আর সুদ্দীর ব্যাখ্যা, খেজুরের মোচা থেকে। তাবারী বলেন, আকমাম এমন এক শব্দের বহুবচন, যা পানি বা অন্য কিছু ধরে রাখার যেকোনো আধারকে বোঝায়। খেজুরের মোচার খোসাকে আরবরা বলে কুম্ম। কুরতুবী, বাগাভী ও মুয়াসসার তিনজনই শব্দটির অর্থ করেন আধার বা আবরণ।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both report from Ibn 'Abbas that the word means the spathe before it splits; al-Qurtubi adds that once it splits it is no longer called a kimma. The verse catches the fruit, then, at the moment it is still sealed in. At-Tabari notes two readings, thamarat in the plural and thamara in the singular, and accepts both as close in meaning. As-Sa'di makes the clause cover the fruit of every tree in towns and in open country, each known to Allah in detail.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, শব্দটির অর্থ ফেটে যাওয়ার আগের মোচা। কুরতুবী যোগ করেন, ফেটে গেলে তাকে আর কিম্মা বলা হয় না। তাহলে আয়াতটি ফলকে ধরেছে ঠিক সেই মুহূর্তে, যখন তা তখনো আবরণে বন্ধ। তাবারী দুটি কিরাআতের কথা বলেন: বহুবচনে সামারাত আর একবচনে সামারা। অর্থ কাছাকাছি বলে তিনি দুটোকেই সঠিক মানেন। সা'দী এ অংশকে ছড়িয়ে দেন সব গাছের ফলে, জনপদের হোক বা খোলা প্রান্তরের। আল্লাহ এর প্রতিটির খবর রাখেন খুঁটিনাটিসহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Womb Within His Knowledge",
          "bn": "প্রতিটি গর্ভ তাঁর জ্ঞানে"
        },
        "p": [
          {
            "en": "Wa ma tahmilu min untha wa la tada'u illa bi-'ilmih: no female conceives or gives birth except with His knowledge. At-Tabari: no female carries a pregnancy when she carries it, nor delivers her child, except with knowledge from Allah, and none of it is hidden from Him. As-Sa'di counts the females of the children of Adam and of every other kind of animal. Al-Baghawi glosses except with His knowledge as except by His permission. Ibn Kathir says all of it is within His knowledge, and not a speck's weight in earth or heaven escapes it.",
            "bn": "ওয়া মা তাহমিলু মিন উনসা ওয়া লা তাদাউ ইল্লা বিইলমিহ: কোনো মাদি গর্ভ ধারণ করে না, প্রসবও করে না, তাঁর জ্ঞানের বাইরে। তাবারী বলেন, কোনো মাদি যখন গর্ভ ধারণ করে, কিংবা সন্তান প্রসব করে, তা আল্লাহর জানার মধ্যেই ঘটে, এর কিছুই তাঁর কাছে গোপন থাকে না। সা'দী এর মধ্যে ধরেন আদম সন্তানের নারীদের, আর অন্য সব প্রাণীর মাদিদেরও। বাগাভী 'তাঁর জ্ঞানে' কথাটির অর্থ করেন 'তাঁর অনুমতিতে'। ইবন কাসীর বলেন, এর সবই তাঁর জ্ঞানের ভেতরে। আসমান বা জমিনের এক কণা পরিমাণ জিনিসও তাঁর জ্ঞান থেকে হারিয়ে যায় না।"
          },
          {
            "en": "Ibn Kathir then lines up three verses: 6:59, not a leaf falls but He knows it; 13:8, Allah knows what every female carries and what the wombs fall short of and exceed; and 35:11, whose middle carries this very clause word for word. Al-Qurtubi and al-Baghawi draw the link the verse is built on: the knowledge of the Hour is referred to Him just as the knowledge of fruits and offspring is. The commentators consulted here speak of His knowledge, not of how a fruit forms or a child grows, and this article keeps to that.",
            "bn": "এরপর ইবন কাসীর তিনটি আয়াত পাশাপাশি রাখেন। ৬:৫৯: এমন কোনো পাতা ঝরে না, যা তিনি জানেন না। ১৩:৮: প্রত্যেক মাদি যা গর্ভে ধারণ করে, আর গর্ভাশয়ে যা কমে ও বাড়ে, আল্লাহ তা জানেন। আর ৩৫:১১, যার মাঝখানে হুবহু এ আয়াতেরই বাক্যটি আছে। কুরতুবী ও বাগাভী সেই যোগসূত্রটি দেখান, যার ওপর আয়াতটি দাঁড়িয়ে: ফল আর সন্তানের জ্ঞান যেমন তাঁর কাছে সোপর্দ, কিয়ামতের জ্ঞানও তেমনি। এখানে উদ্ধৃত তাফসীরকারেরা কথা বলেন তাঁর জ্ঞান নিয়ে, ফল কীভাবে গঠিত হয় বা শিশু কীভাবে বেড়ে ওঠে তা নিয়ে নয়। এ লেখাও সে সীমায় থাকে।"
          },
          {
            "en": "As-Sa'di closes this part of the verse with a question that turns it toward the next. If Allah knows every fruit and every pregnancy in detail, how did the idolaters make equal to Him beings that have no knowledge, no hearing and no sight? The pairing in the verse makes the point without argument. One great unknown, the Hour, stands beside countless small hidden things that happen every day. The same knowledge holds both, and nothing set up beside Him holds either.",
            "bn": "আয়াতের এ অংশ শেষ করতে গিয়ে সা'দী একটি প্রশ্ন তোলেন, যা পরের অংশের দিকে মুখ ঘুরিয়ে দেয়। প্রতিটি ফল আর প্রতিটি গর্ভের খবর যদি আল্লাহ খুঁটিনাটিসহ জানেন, তাহলে মুশরিকরা কীভাবে তাঁর সমকক্ষ বানাল এমন সত্তাকে, যার না আছে জ্ঞান, না শোনার ক্ষমতা, না দেখার? আয়াতের জোড়টাই কথাটা বুঝিয়ে দেয়, তর্ক ছাড়াই। একদিকে এক বিশাল অজানা, কিয়ামত। অন্যদিকে প্রতিদিন ঘটে চলা অগণিত ছোট ছোট গোপন ঘটনা। একই জ্ঞান দুটোকেই ধরে রাখে। তাঁর পাশে যাদের দাঁড় করানো হয়, তারা এর কোনোটাই ধরে রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Roll Call of Partners",
          "bn": "শরীকদের খোঁজ"
        },
        "p": [
          {
            "en": "Wa yawma yunadihim ayna shuraka'i: and the Day He calls to them, where are My partners? Ibn Kathir places the call on the Day of Resurrection, before all of creation: Allah calls out to the idolaters, where are My partners whom you worshipped along with Me? At-Tabari names those addressed as the ones who, in this world, associated idols and images with Him, and gives the question as: where are My partners whom you used to join with Me in your worship? Al-Qurtubi has: whom you claimed in the world were gods who would intercede.",
            "bn": "ওয়া ইয়াওমা ইউনাদীহিম আইনা শুরাকাঈ: আর যেদিন তিনি তাদের ডেকে বলবেন, কোথায় আমার শরীকরা? ইবন কাসীর এ ডাকের সময় বলেন কিয়ামতের দিন, সমস্ত সৃষ্টির সামনে। আল্লাহ মুশরিকদের ডেকে বলবেন: কোথায় আমার সেই শরীকরা, আমার সঙ্গে যাদের তোমরা ইবাদত করতে? তাবারীর কাছে সম্বোধিত লোকেরা তারা, যারা দুনিয়াতে মূর্তি আর প্রতিমাকে তাঁর শরীক বানিয়েছিল। তাঁর ভাষায় প্রশ্নটি: কোথায় আমার শরীকরা, আমার ইবাদতে যাদের তোমরা অংশীদার করতে? কুরতুবীর ভাষায়: দুনিয়াতে যাদের তোমরা সুপারিশকারী উপাস্য বলে দাবি করতে।"
          },
          {
            "en": "The Muyassar and as-Sa'di give the call its purpose in the same words: a rebuke, and a laying bare of their lie. As-Sa'di fills in what the lie cost: the partners were the ones you claimed were Mine, whom you worshipped, argued over, and for whose sake you took the messengers as enemies. The possessive, My partners, is not a concession. Al-Qurtubi and as-Sa'di both gloss it as those you claimed, and the translation shown with this verse likewise sets the word in quotation marks. The question is asked of people who already know the answer.",
            "bn": "মুয়াসসার আর সা'দী এ ডাকের উদ্দেশ্য বলেন একই শব্দে: তিরস্কার, আর তাদের মিথ্যা খুলে দেখানো। সে মিথ্যার দাম কী ছিল, সা'দী তা স্পষ্ট করেন। শরীক তারাই, যাদের তোমরা আমার শরীক বলে দাবি করেছিলে, যাদের ইবাদত করেছিলে, যাদের পক্ষে তর্ক করেছিলে, আর যাদের জন্য রাসূলদের সঙ্গে শত্রুতা করেছিলে। 'আমার শরীক' কথাটিতে কোনো স্বীকৃতি নেই। কুরতুবী আর সা'দী দুজনেই এর অর্থ করেন, যাদের তোমরা দাবি করতে। এখানে দেখানো অনুবাদেও শব্দটি তেমনি উদ্ধৃতিচিহ্নের ভেতরে রাখা। প্রশ্নটা করা হচ্ছে এমন লোকদের, যারা উত্তর আগেই জেনে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "We Have Told You",
          "bn": "আমরা আপনাকে জানিয়ে দিলাম"
        },
        "p": [
          {
            "en": "Qalu adhannaka: they say, we inform You. At-Tabari reports from Ibn 'Abbas that adhannaka means a'lamnaka, we have informed You, and Ibn Kathir, al-Baghawi and as-Sa'di give the same gloss; the Muyassar adds the word now. Al-Qurtubi gives we have made You hear and informed You, explains that adhana means to inform, and cites a line of the poet al-Harith ibn Hilliza in which Asma' announces her parting. At-Tabari also reports as-Suddi as saying ata'naka, we have obeyed You; his editor notes the word may originally have been atla'naka, we have made known to You, to carry the sense of knowledge.",
            "bn": "কালূ আযান্নাকা: তারা বলবে, আমরা আপনাকে জানাচ্ছি। তাবারী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, আযান্নাকা মানে আ'লামনাকা, আমরা আপনাকে জানিয়েছি। ইবন কাসীর, বাগাভী ও সা'দীও একই অর্থ করেন, আর মুয়াসসার জুড়ে দেয় 'এখন'। কুরতুবীর ব্যাখ্যা: আমরা আপনাকে শুনিয়েছি ও জানিয়েছি। তিনি বলেন, আযানা মানে জানানো, এবং কবি হারিস ইবন হিল্লিযার একটি পঙক্তি আনেন, যেখানে আসমা তার বিদায়ের খবর জানায়। তাবারী সুদ্দী থেকেও বর্ণনা করেন: আতা'নাকা, আমরা আপনার আনুগত্য করেছি। তবে তাঁর গ্রন্থের সম্পাদক টীকায় বলেন, শব্দটি সম্ভবত ছিল আত্বলা'নাকা, আমরা আপনাকে অবহিত করেছি, যাতে জানানোর অর্থটি থাকে।"
          },
          {
            "en": "Ma minna min shahid: there is no witness among us. Ibn Kathir: not one of us today bears witness that You have a partner. At-Tabari, al-Baghawi, al-Qurtubi and the Muyassar read it the same way, no one among us testifies that You have a partner. As-Sa'di hears a fuller confession: we inform You, our Lord, and bear witness against ourselves that none of us testifies that they were gods or Your partners; all of us have now come back to knowing that worshipping them was false, and we disown them.",
            "bn": "মা মিন্না মিন শাহীদ: আমাদের মধ্যে কোনো সাক্ষী নেই। ইবন কাসীর বলেন, আজ আমাদের একজনও সাক্ষ্য দেয় না যে আপনার কোনো শরীক আছে। তাবারী, বাগাভী, কুরতুবী আর মুয়াসসারও একই অর্থ করেন: আপনার শরীক আছে, এমন সাক্ষ্য আমাদের কেউ দেয় না। সা'দী এর মধ্যে আরও পূর্ণ এক স্বীকারোক্তি শোনেন। হে আমাদের রব, আমরা আপনাকে জানাচ্ছি, আর আমাদের বিরুদ্ধেই আপনি সাক্ষী থাকুন: ওরা উপাস্য ছিল বা আপনার শরীক ছিল, এ সাক্ষ্য আমাদের কেউ দেয় না। আমরা সবাই এখন বুঝে গেছি যে ওদের ইবাদত ছিল বাতিল, আর আমরা ওদের থেকে সম্পর্ক ছিন্ন করছি।"
          },
          {
            "en": "Who says it? At-Tabari, Ibn Kathir, al-Baghawi, as-Sa'di and the Muyassar all make the speakers the idolaters. Al-Qurtubi records three views: they said refers to the idols; or, it is said, to the idolaters; and it may mean both together, the worshipper and the worshipped. The difference is left standing here. Al-Baghawi adds that once they saw the punishment they disowned the idols. Al-Qurtubi says that when they saw the Resurrection they disowned the idols and the idols disowned them, a point he says has come up in several places before.",
            "bn": "কথাটা কারা বলবে? তাবারী, ইবন কাসীর, বাগাভী, সা'দী ও মুয়াসসারের মতে বক্তা মুশরিকরা। কুরতুবী তিনটি মত উল্লেখ করেন। 'তারা বলবে' মানে মূর্তিগুলো; অথবা, কেউ কেউ বলেন, মুশরিকরা; আর হতে পারে দুই পক্ষই, উপাসক ও উপাস্য একসঙ্গে। এ মতভেদ এখানে যেমন আছে তেমনই রাখা হলো। বাগাভী যোগ করেন, শাস্তি চোখে দেখার পর তারা মূর্তিগুলোর সঙ্গে সম্পর্ক অস্বীকার করবে। কুরতুবী বলেন, কিয়ামত চোখের সামনে দেখে তারা মূর্তিদের থেকে সম্পর্ক ছিন্ন করবে, মূর্তিরাও তাদের থেকে। তিনি বলেন, এ কথা আগেও একাধিক জায়গায় এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Scene, Not a Sentence",
          "bn": "দৃশ্যের বর্ণনা, রায় নয়"
        },
        "p": [
          {
            "en": "This should be said plainly. The verse speaks only of what it names: Allah's question, on the Day of Resurrection, to those who set up partners with Him, and their answer. It licenses nothing against any living person or community. The question where are My partners belongs to Allah, asked on His Day; no reader is handed it to put to a neighbour. The rebuke that the Muyassar and as-Sa'di find in it is His rebuke at the Resurrection, not a tone any of us may borrow toward people in this world.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: কিয়ামতের দিন যারা আল্লাহর সঙ্গে শরীক বানিয়েছিল, তাদের প্রতি তাঁর প্রশ্ন, আর তাদের জবাব। এটি কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। 'কোথায় আমার শরীকরা' প্রশ্নটি আল্লাহর, তাঁর নিজের দিনে করা। কোনো পাঠকের হাতে তা তুলে দেওয়া হয়নি, যাতে সে প্রতিবেশীকে এ প্রশ্নে বিঁধতে পারে। মুয়াসসার আর সা'দী এতে যে তিরস্কার দেখেন, তা কিয়ামতের দিনে আল্লাহর তিরস্কার। দুনিয়ার মানুষের প্রতি সেই সুর ধার করার অধিকার আমাদের কারও নেই।"
          },
          {
            "en": "What a reader may do is turn the scene inward. As-Sa'di's question still stands: how can anything without knowledge, hearing or sight be made equal to Him who knows every sealed fruit? The verse leaves a person to ask it of himself while the asking can still change something. No commentator consulted here gives an occasion of revelation for this verse with a chain, so this article gives none and reads it in its place, after the reckoning of 41:46 and before the scene continues in the next verse.",
            "bn": "পাঠক যা করতে পারেন, তা হলো দৃশ্যটাকে নিজের ভেতরের দিকে ফেরানো। সা'দীর প্রশ্ন এখনো দাঁড়িয়ে আছে: যার জ্ঞান নেই, শোনার বা দেখার ক্ষমতা নেই, তাকে কীভাবে সেই সত্তার সমান করা যায়, যিনি আবরণে বন্ধ প্রতিটি ফলের খবর রাখেন? আয়াতটি প্রশ্নটা মানুষের নিজের কাছেই রেখে যায়, এমন সময়ে, যখন প্রশ্ন করলে এখনো কিছু বদলানো যায়। এখানে উদ্ধৃত কোনো তাফসীরকার সনদসহ এ আয়াতের শানে নুযূল দেননি। তাই এ লেখাও কোনো শানে নুযূল দেয় না। আয়াতটিকে পড়ে তার নিজের জায়গায়: ৪১:৪৬ আয়াতের হিসাবের কথার পরে, আর দৃশ্যটি পরের আয়াতে যেখানে এগিয়ে যায়, তার আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Without the Date",
          "bn": "তারিখ না জেনে বেঁচে থাকা"
        },
        "p": [
          {
            "en": "People have always wanted the date. Confident calculations of when the end will come keep appearing, and every date named so far has passed. The verse and the hadith beside it close that door from both sides. The best of creation, asked by an angel, said he knew no more than the one asking. Signs were given and the date was held back. What remains to a believer is not a countdown but readiness, and the freedom to say I do not know where knowing is not his to have.",
            "bn": "মানুষ সব সময় তারিখটা জানতে চেয়েছে। শেষ কবে আসবে, তা নিয়ে জোর গলার হিসাব বারবার হাজির হয়। এ পর্যন্ত যত তারিখ বলা হয়েছে, সবই পেরিয়ে গেছে। আয়াত আর তার পাশের হাদিস দুদিক থেকে সেই দরজা বন্ধ করে দেয়। সৃষ্টির শ্রেষ্ঠ মানুষটিকে একজন ফেরেশতা জিজ্ঞেস করলেন, আর তিনি বললেন, প্রশ্নকারীর চেয়ে বেশি তিনি জানেন না। আলামত বলা হলো, তারিখ রেখে দেওয়া হলো। মুমিনের জন্য বাকি থাকে উল্টো গোনা নয়, প্রস্তুতি। আর যে জ্ঞান তার পাওয়ার নয়, সেখানে 'আমি জানি না' বলতে পারার স্বাধীনতা।"
          },
          {
            "en": "The middle of the verse turns that unknown into comfort. The knowledge that keeps the Hour is the same knowledge that is present at a spathe before it splits and at a birth no one else witnesses. Nothing that is hidden from me is hidden from Him. And the end of the verse asks for a confession that is better made now, freely, than on a Day when it is drawn out under questioning. Those who say on that Day that none of them testifies to any partner will be saying what a believer can say every day.",
            "bn": "আয়াতের মাঝের অংশ সেই অজানাকে সান্ত্বনায় বদলে দেয়। যে জ্ঞান কিয়ামতের সময় নিজের কাছে রাখে, সেই একই জ্ঞান উপস্থিত থাকে ফেটে যাওয়ার আগের মোচার ভেতরে, আর এমন প্রসবের মুহূর্তে, যা আর কেউ দেখে না। আমার কাছে যা লুকানো, তাঁর কাছে তা লুকানো নয়। আর আয়াতের শেষ অংশ এমন এক স্বীকারোক্তি চায়, যা আজ নিজে থেকে করে ফেলাই ভালো, সেই দিনের অপেক্ষায় না থেকে, যেদিন প্রশ্নের মুখে তা আদায় করা হবে। সেদিন যারা বলবে, শরীকের পক্ষে তাদের কেউ সাক্ষ্য দেয় না, তারা সেই কথাই বলবে, যা একজন মুমিন প্রতিদিন বলতে পারে।"
          }
        ]
      }
    ]
  },
  "41:53": {
    "sections": [
      {
        "h": {
          "en": "Fussilat's Closing Promise",
          "bn": "ফুসসিলাতের শেষ প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Surat Fussilat is almost over when this verse comes. Just before it, 41:52 tells the Prophet ﷺ to put a question to those who rejected the Qur'an: have you considered, if it is from Allah and you then disbelieve in it, who is more astray than one in extreme opposition? Ibn Kathir, in the abridged English, reads that opposition as disbelief, stubbornness and resistance to the truth, on a path that leads far from guidance. The question is left open, and 41:53 follows it with a promise.",
            "bn": "সূরা ফুসসিলাত তখন প্রায় শেষের দিকে। ঠিক আগের আয়াত ৪১:৫২-তে নবী ﷺ-কে বলা হয়েছে, যারা কুরআন প্রত্যাখ্যান করেছে তাদের সামনে একটি প্রশ্ন রাখতে: ভেবে দেখেছ কি, এটা যদি আল্লাহর কাছ থেকেই এসে থাকে আর তোমরা তা অস্বীকার করো, তবে যে বিরোধিতায় বহু দূরে চলে গেছে তার চেয়ে বেশি পথভ্রষ্ট আর কে? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ এই বিরোধিতাকে বলে কুফর, একগুঁয়েমি আর সত্যের বিরুদ্ধাচরণ, এমন পথ যা হিদায়াত থেকে অনেক দূরে নিয়ে যায়। প্রশ্নটার জবাব সেখানে দেওয়া হয়নি। পরের আয়াত, ৪১:৫৩, আসে একটি প্রতিশ্রুতি নিয়ে।"
          },
          {
            "en": "After it, 41:54 closes the surah: they are in doubt about meeting their Lord, and He encompasses all things. Earlier, 41:37 counted the night, the day, the sun and the moon among His signs and forbade bowing to the sun or the moon, and 41:47 referred knowledge of the Hour to Him alone. Before that, 41:33 praised the one who calls to Allah and acts righteously, and 41:34 told the believer to repel the bad with what is better. Here the word signs returns, as a promise about what is coming.",
            "bn": "এর পরে ৪১:৫৪ সূরাটি শেষ করে: তারা তাদের রবের সাথে সাক্ষাৎ নিয়ে সন্দেহে আছে, আর তিনি সব কিছু বেষ্টন করে আছেন। আগে ৪১:৩৭ রাত, দিন, সূর্য ও চাঁদকে তাঁর নিদর্শনের মধ্যে গুনেছে, আর সূর্য বা চাঁদকে সিজদা করতে নিষেধ করেছে। ৪১:৪৭ কিয়ামতের জ্ঞান একমাত্র তাঁর দিকেই ফিরিয়ে দিয়েছে। তারও আগে ৪১:৩৩ প্রশংসা করেছে সেই মানুষের, যে আল্লাহর দিকে ডাকে আর নেক আমল করে। ৪১:৩৪ মুমিনকে বলেছে মন্দকে উত্তম দিয়ে প্রতিহত করতে। এখানে 'নিদর্শন' শব্দটি আবার ফিরে আসে, এবার সামনে যা ঘটবে তার প্রতিশ্রুতি হয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Will Be Shown",
          "bn": "যাদের দেখানো হবে"
        },
        "p": [
          {
            "en": "Sanurihim ayatina: We will show them Our signs. Who are they? At-Tabari names them as these deniers who rejected the Reminder sent down to Muhammad, Allah's servant, and al-Muyassar also says these deniers. Ibn Kathir reads the showing as Allah making plain His proofs that the Qur'an is truth sent down from Him upon His Messenger ﷺ. As-Sa'di hears it as an answer to doubt: if you say otherwise, or doubt that it is sound and real, Allah will set up His signs for you and show them to you.",
            "bn": "সানুরীহিম আয়াতিনা: আমি তাদের আমার নিদর্শনগুলো দেখাব। 'তাদের' বলতে কারা? তাবারীর মতে, এরা সেই মিথ্যারোপকারীরা, যারা আল্লাহর বান্দা মুহাম্মাদ ﷺ-এর উপর নাযিল হওয়া যিকরকে অস্বীকার করেছিল। মুয়াসসারও বলে, এই মিথ্যারোপকারীরা। ইবন কাসীর দেখানোর অর্থ করেন এভাবে: আল্লাহ তাদের সামনে নিজের প্রমাণ স্পষ্ট করবেন যে কুরআন সত্য, তাঁর কাছ থেকেই তাঁর রাসূল ﷺ-এর উপর নাযিল হয়েছে। সা'দী একে পড়েন সন্দেহের জবাব হিসেবে: তোমরা যদি অন্য কথা বলো, কিংবা এর সত্যতা নিয়ে সন্দেহ করো, তবে আল্লাহ তোমাদের জন্য তাঁর নিদর্শন দাঁড় করাবেন, দেখিয়ে দেবেন।"
          },
          {
            "en": "Ayat, al-Qurtubi says, are marks of Allah's oneness and power. For al-afaq he quotes al-Jawhari's Sihah: the afaq are the regions, and the singular is ufuq. He then cites a line of verse that speaks of the horizons of the sky and its rising stars. The word can face the earth's sides or the sky's, and the commentators read it both ways. Those to be shown were the Makkan deniers of the verse's own setting; the verse describes them and licenses nothing against any living person or community.",
            "bn": "কুরতুবী বলেন, আয়াত মানে আল্লাহর একত্ব ও কুদরতের আলামত। আফাক শব্দের জন্য তিনি জাওহারীর সিহাহ থেকে উদ্ধৃত করেন: আফাক মানে চারপাশের অঞ্চল, একবচনে উফুক। তারপর একটি কবিতার চরণ আনেন, যেখানে আকাশের দিগন্ত আর উদীয়মান তারার কথা আছে। শব্দটি তাই পৃথিবীর দিকগুলোও বোঝাতে পারে, আকাশের দিকগুলোও, আর তাফসীরকারেরা দুইভাবেই পড়েছেন। যাদের দেখানোর কথা, তারা আয়াতের নিজস্ব প্রেক্ষাপটের মক্কার অস্বীকারকারীরা। আয়াতটি তাদের বর্ণনা দেয় মাত্র, আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুই করার অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Towns Opened, Then Makkah",
          "bn": "জনপদ বিজয়, তারপর মক্কা"
        },
        "p": [
          {
            "en": "At-Tabari states the disagreement outright: the people of interpretation differed over the signs promised here. Some held that the signs in the horizons were the Prophet's ﷺ campaigns in the regions around the land of the Makkan idolaters, and that wa fi anfusihim, and within themselves, meant the conquest of Makkah. In a chain at-Tabari gives, al-Minhal said the horizons meant Muhammad ﷺ prevailing over the people. As-Suddi said: what We open for you, Muhammad, of the horizons, and within themselves, among the people of Makkah: We will open Makkah for you.",
            "bn": "তাবারী মতভেদটা সরাসরি বলে দেন: এখানে যে নিদর্শনের প্রতিশ্রুতি, তা নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। কারও কারও মতে, দিগন্তের নিদর্শন হলো মক্কার মুশরিকদের এলাকার আশপাশে নবী ﷺ-এর অভিযানগুলো। আর ওয়া ফী আনফুসিহিম, তাদের নিজেদের মধ্যে, মানে মক্কা বিজয়। তাবারীর দেওয়া এক সনদে মিনহাল বলেছেন, দিগন্তের নিদর্শন মানে মানুষের উপর মুহাম্মাদ ﷺ-এর বিজয়। সুদ্দী বলেছেন: হে মুহাম্মাদ, দিগন্তের যেসব অঞ্চল আমি তোমার জন্য খুলে দেব। আর তাদের নিজেদের মধ্যে, অর্থাৎ মক্কাবাসীর মধ্যে: আমি তোমার জন্য মক্কা খুলে দেব।"
          },
          {
            "en": "Al-Baghawi carries this reading from Mujahid, al-Hasan and as-Suddi: in the horizons, the towns opened to Muhammad ﷺ and the Muslims; within themselves, the conquest of Makkah. Al-Qurtubi gives it from Mujahid as the opening of towns, then spells it out as the conquests Allah eased for the Messenger, the caliphs after him and the helpers of his religion. He notes that al-Minhal ibn 'Amr and as-Suddi said it, and that it was at-Tabari's choice. Ibn Kathir leads with it too: the horizons are the conquests and Islam's prevailing over the regions and the other religions.",
            "bn": "বাগাভী এই মত বর্ণনা করেন মুজাহিদ, হাসান ও সুদ্দী থেকে: দিগন্তে মানে মুহাম্মাদ ﷺ ও মুসলিমদের হাতে যেসব জনপদ বিজিত হবে, আর নিজেদের মধ্যে মানে মক্কা বিজয়। কুরতুবী মুজাহিদ থেকে আনেন জনপদ বিজয়ের কথা, তারপর তা খুলে বলেন: আল্লাহ রাসূলের জন্য, তাঁর পরের খলীফাদের জন্য আর তাঁর দ্বীনের সাহায্যকারীদের জন্য যে বিজয় সহজ করেছেন। তিনি জানান, মিনহাল ইবন আমর ও সুদ্দীও এ কথা বলেছেন, আর তাবারী এটাই গ্রহণ করেছেন। ইবন কাসীরও প্রথমে এ অর্থই আনেন: দিগন্ত মানে বিজয়গুলো, আর বিভিন্ন অঞ্চলে ও অন্য সব ধর্মের উপর ইসলামের প্রাধান্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Ruined Homes, and Badr",
          "bn": "বিরান বসতি আর বদর"
        },
        "p": [
          {
            "en": "Another line of reading looks to the past. Al-Baghawi reports from Ibn 'Abbas (RA) that the horizons are the dwellings of the nations that passed away, and that within themselves means through trial and illness. Al-Qurtubi opens his own entry with the same pair, with no name attached: in the horizons, the ruined homes of earlier nations; within themselves, afflictions and sickness.",
            "bn": "আরেকটি ব্যাখ্যা তাকায় অতীতের দিকে। বাগাভী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, দিগন্তের নিদর্শন মানে বিলুপ্ত জাতিগুলোর বসতি, আর নিজেদের মধ্যে মানে বিপদ-আপদ ও রোগব্যাধির মাধ্যমে। কুরতুবীও নিজের আলোচনা শুরু করেন এই জোড়া দিয়েই, কারও নাম ছাড়া: দিগন্তে, আগের জাতিদের বিরান ঘরবাড়ি; নিজেদের মধ্যে, বালা-মুসিবত আর অসুখ।"
          },
          {
            "en": "Qatada keeps the past for the horizons and puts a battle inside. In al-Baghawi he says: in the horizons, Allah's dealings with the nations; within themselves, the day of Badr. Al-Qurtubi gives the same from Qatada and ad-Dahhak. Badr also appears in Ibn Kathir, who quotes Mujahid, al-Hasan and as-Suddi on the signs within themselves: the battle of Badr, the conquest of Makkah and like events that befell them, in which Allah gave victory to Muhammad ﷺ and his Companions and forsook falsehood and its party.",
            "bn": "কাতাদা দিগন্তকে রেখে দেন অতীতের জন্য, আর ভেতরে আনেন একটি যুদ্ধ। বাগাভীর বর্ণনায় তিনি বলেন: দিগন্তে, বিভিন্ন জাতির মধ্যে আল্লাহর ঘটানো ঘটনাবলি; নিজেদের মধ্যে, বদরের দিন। কুরতুবী একই কথা আনেন কাতাদা ও দাহহাক থেকে। বদরের কথা ইবন কাসীরেও আছে। নিজেদের মধ্যকার নিদর্শন সম্পর্কে তিনি মুজাহিদ, হাসান ও সুদ্দীর বক্তব্য উদ্ধৃত করেন: বদর যুদ্ধ, মক্কা বিজয় এবং তাদের উপর নেমে আসা এ ধরনের আরও ঘটনা, যেখানে আল্লাহ মুহাম্মাদ ﷺ ও তাঁর সাহাবীদের বিজয় দিয়েছেন আর বাতিল ও তার দলকে অপদস্থ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Sky, Earth and the Body",
          "bn": "আকাশ, মাটি আর দেহ"
        },
        "p": [
          {
            "en": "A third line reads the horizons as the sky and the earth. At-Tabari reports that others took them as the stars and moon of the night and the sun of the day, the horizons of the heavens; within themselves, they said, meant the passage of the body's waste. In at-Tabari's report from Ibn Zayd: the horizons of the heavens, their stars, sun and moon that run, and signs within themselves as well. Al-Qurtubi and al-Baghawi give this reading from 'Ata' and Ibn Zayd.",
            "bn": "তৃতীয় একটি ব্যাখ্যায় দিগন্ত মানে আকাশ আর পৃথিবী। তাবারী জানান, অন্যরা এর অর্থ করেছেন রাতের তারা ও চাঁদ আর দিনের সূর্য, অর্থাৎ আকাশের দিগন্ত। আর নিজেদের মধ্যে বলতে তাঁরা বুঝিয়েছেন দেহ থেকে মলমূত্র বের হওয়ার পথ। ইবন যায়দ থেকে তাবারীর বর্ণনা: আকাশের দিগন্ত, তার তারা, সূর্য আর চাঁদ, যারা চলতে থাকে; আর নিজেদের মধ্যেও নিদর্শন আছে। কুরতুবী ও বাগাভী এই মত আনেন আতা ও ইবন যায়দ থেকে।"
          },
          {
            "en": "Al-Qurtubi's list runs from sun, moon and stars through winds, rain, thunder and lightning to plants, mountains and seas. Within themselves he finds subtle making and wondrous wisdom, down to the body's exits: a man eats and drinks through one opening, and what remains leaves by two. He adds the eyes, which he calls a drop of water through which a person sees between sky and earth, and the ears that tell voices apart.",
            "bn": "কুরতুবীর তালিকা সূর্য, চাঁদ, তারা থেকে শুরু করে বাতাস, বৃষ্টি, বজ্র আর বিদ্যুৎ পেরিয়ে উদ্ভিদ, পাহাড় আর সমুদ্র পর্যন্ত গেছে। মানুষের নিজের মধ্যে তিনি দেখেন সূক্ষ্ম কারিগরি আর অভিনব হিকমত, এমনকি দেহের নির্গমনপথেও। মানুষ খায় আর পান করে একই পথে, অথচ বাকিটা বের হয় দুই পথে। তিনি চোখের কথা বলেন, যাকে তিনি বলেন এক ফোঁটা পানি, যা দিয়ে মানুষ আকাশ থেকে মাটি পর্যন্ত দেখে। আর কানের কথা, যা নানা আওয়াজ আলাদা করে চেনে।"
          },
          {
            "en": "Ibn Kathir offers the body as a possibility, saying it may be meant: what a human is made of and the wondrous forms within him, which he says anatomy lays out as evidence of the Maker's wisdom, together with his differing characters and the decrees he cannot get past. He closes with lines that Ibn Abi ad-Dunya recited from his teacher Abu Ja'far al-Qurashi, which open: if you look for a lesson, look at yourself, for in you there is a lesson.",
            "bn": "ইবন কাসীর দেহের অর্থটি আনেন সম্ভাবনা হিসেবে, 'হতে পারে' বলে: মানুষ যা দিয়ে গড়া আর তার ভেতরের বিস্ময়কর গঠন, যা তাঁর ভাষায় শারীরবিদ্যা বিস্তারিত দেখায় এবং যা স্রষ্টার হিকমতের প্রমাণ। সঙ্গে মানুষের নানা রকম স্বভাব, আর সেই তাকদীর যা সে নিজের শক্তি বা কৌশলে পার হতে পারে না। শেষে তিনি সেই কবিতা আনেন, যা ইবন আবিদ দুনইয়া তাঁর উস্তাদ আবু জাফর কুরাশী থেকে আবৃত্তি করেছেন। শুরুটা এমন: শিক্ষা খুঁজলে নিজের দিকে তাকাও, তোমার মধ্যেই শিক্ষা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verdict, Several Lists",
          "bn": "এক রায়, কয়েকটি তালিকা"
        },
        "p": [
          {
            "en": "At-Tabari did not leave the question open. He judged the first reading, as-Suddi's, the more correct, and gave his reason: Allah promised His Prophet ﷺ to show the deniers signs, and it makes no sense to threaten people with showing them what they already see. The promise must be of something new to them, the Prophet ﷺ prevailing over the edges of their land and then over the land itself. The stars, the sun and the moon they had seen often, before and after.",
            "bn": "তাবারী প্রশ্নটা খোলা রাখেননি। তিনি প্রথম মত, অর্থাৎ সুদ্দীর মতকেই বেশি সঠিক বলেছেন, কারণও দেখিয়েছেন। আল্লাহ তাঁর নবী ﷺ-কে কথা দিয়েছিলেন যে অস্বীকারকারীদের নিদর্শন দেখাবেন। যা তারা আগে থেকেই দেখে, তা দেখানোর হুমকি দেওয়ার কোনো মানে হয় না। তাই প্রতিশ্রুতিটা এমন কিছুর, যা তারা আগে দেখেনি: প্রথমে তাদের এলাকার প্রান্তে, তারপর তাদের নিজেদের শহরে নবী ﷺ-এর বিজয়। নক্ষত্র, সূর্য আর চাঁদ তো তারা আগেও বহুবার দেখেছে, পরেও দেখেছে।"
          },
          {
            "en": "Others gather instead of choosing. Al-Muyassar lists the conquests first, then signs across the heavens and the earth and the great events Allah brings about in them, then the wonders within the self. As-Sa'di has the heavens, the earth and the body, and adds punishments falling on those who denied and victory for the believers. This article reports at-Tabari's preference as his and adopts no reading itself.",
            "bn": "অন্যরা কোনো একটিকে না বেছে সবগুলো একসাথে রাখেন। মুয়াসসার প্রথমে রাখে বিজয়গুলোর কথা, তারপর আকাশ ও পৃথিবীজুড়ে নিদর্শন আর সেখানে আল্লাহর ঘটানো বড় বড় ঘটনা, তারপর মানুষের নিজের ভেতরের বিস্ময়। সা'দী আনেন আকাশ, পৃথিবী আর দেহ, সঙ্গে যোগ করেন অস্বীকারকারীদের উপর নেমে আসা শাস্তি আর মুমিনদের বিজয়। এই লেখা তাবারীর পছন্দকে তাঁর নিজের মত হিসেবেই জানায়, নিজে কোনো মত গ্রহণ করে না।"
          },
          {
            "en": "Ma'arif al-Qur'an translates al-afaq as the universe, since the horizons take in all its sides, and dwells on the self: the organs, the joints that serve seventy or eighty years without wearing out, the lines on the skin of the hands. From the future tense it argues that Allah will keep showing signs until the Day of Judgment, and says the verse therefore covers all the new discoveries of science. That is Ma'arif's own application. The older commentators fetched here do not make it, though Ibn Kathir points to anatomy as showing the Maker's wisdom.",
            "bn": "মাআরিফুল কুরআন আফাকের অনুবাদ করে বিশ্বজগৎ, কারণ দিগন্ত তার সব দিককে ঘিরে রাখে। তারপর মানুষের নিজের দিকে মন দেয়: অঙ্গপ্রত্যঙ্গ, সত্তর-আশি বছর ব্যবহারেও ক্ষয়ে না যাওয়া গাঁটগুলো, হাতের চামড়ার রেখা। ভবিষ্যৎকালের ক্রিয়া থেকে সে যুক্তি দেয় যে কিয়ামত পর্যন্ত আল্লাহ নিদর্শন দেখাতেই থাকবেন, আর বলে, এ কারণে আয়াতটি বিজ্ঞানের সব নতুন আবিষ্কারকে শামিল করে। এটা মাআরিফের নিজস্ব প্রয়োগ। এখানে পড়া পুরোনো তাফসীরগুলো এমন দাবি করে না, যদিও ইবন কাসীর শারীরবিদ্যাকে স্রষ্টার হিকমতের প্রমাণ হিসেবে উল্লেখ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What Will Become Clear",
          "bn": "কী স্পষ্ট হবে"
        },
        "p": [
          {
            "en": "Hatta yatabayyana lahum annahu al-haqq: until it becomes clear to them that it is the truth. What is it? Al-Qurtubi counts four answers: the Qur'an; Islam, which the Messenger brought them and called them to; that what Allah shows them and does is the truth; and that Muhammad ﷺ is the true Messenger. Al-Baghawi puts the religion of Islam first, then gives, under it was said, the Qur'an, shown to be from Allah, and Muhammad ﷺ, shown to be supported by Allah.",
            "bn": "হাত্তা ইয়াতাবাইয়ানা লাহুম আন্নাহুল হাক্ক: যতক্ষণ না তাদের কাছে স্পষ্ট হয় যে এটাই সত্য। 'এটা' কী? কুরতুবী চারটি উত্তর গুনেছেন: কুরআন; ইসলাম, যা রাসূল তাদের কাছে নিয়ে এসেছেন এবং যার দিকে ডেকেছেন; আল্লাহ তাদের যা দেখান ও করেন, তা-ই সত্য; আর মুহাম্মাদ ﷺ সত্য রাসূল। বাগাভী প্রথমে আনেন দ্বীন ইসলামের কথা। তারপর 'বলা হয়' দিয়ে আনেন কুরআন, যা আল্লাহর কাছ থেকে বলে স্পষ্ট হবে, আর মুহাম্মাদ ﷺ, যিনি আল্লাহর পক্ষ থেকে সাহায্যপ্রাপ্ত বলে স্পষ্ট হবে।"
          },
          {
            "en": "Ibn Kathir and al-Muyassar take it as the Qur'an, and al-Muyassar adds that the clarity will admit no doubt. At-Tabari, true to his reading, makes it the promise within the revelation: they would know that Allah would make the religion He sent Muhammad ﷺ with prevail over all religions, however much the idolaters disliked it. As-Sa'di says Allah has done this, showing His servants signs that made the truth clear, but it is He who grants belief to whom He wills and leaves unaided whom He wills.",
            "bn": "ইবন কাসীর ও মুয়াসসার একে কুরআন ধরেন, আর মুয়াসসার যোগ করে, এই স্পষ্টতায় সন্দেহের কোনো জায়গা থাকবে না। তাবারী নিজের ব্যাখ্যার সাথে মিল রেখে একে ধরেন ওহির ভেতরের প্রতিশ্রুতি হিসেবে: তারা জানবে, যে দ্বীন দিয়ে আল্লাহ মুহাম্মাদ ﷺ-কে পাঠিয়েছেন, মুশরিকরা যতই অপছন্দ করুক, তাকে তিনি সব ধর্মের উপর বিজয়ী করবেন। সা'দী বলেন, আল্লাহ তা করেছেন। তিনি বান্দাদের এমন নিদর্শন দেখিয়েছেন যাতে সত্য স্পষ্ট হয়েছে। কিন্তু ঈমানের তাওফীক তিনিই দেন যাকে চান, আর যাকে চান সাহায্য থেকে বঞ্চিত রাখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Enough as a Witness",
          "bn": "যথেষ্ট সেই সাক্ষী"
        },
        "p": [
          {
            "en": "The verse closes on a question: a-wa-lam yakfi bi-rabbika annahu 'ala kulli shay'in shahid, is it not enough concerning your Lord that He is witness over all things? At-Tabari takes it as said to the Prophet ﷺ: is it not enough, Muhammad, that your Lord witnesses everything His creation does, that knowledge of none of it escapes Him, and that He repays them for their deeds, the doer of good with good and the wrongdoer with his due?",
            "bn": "আয়াত শেষ হয় একটি প্রশ্নে: আওয়া লাম ইয়াকফি বিরাব্বিকা আন্নাহু আলা কুল্লি শাইয়িন শাহীদ, তোমার রবের ব্যাপারে এটুকু কি যথেষ্ট নয় যে তিনি সব কিছুর সাক্ষী? তাবারী একে নবী ﷺ-এর প্রতি সম্বোধন ধরেন: হে মুহাম্মাদ, এটা কি যথেষ্ট নয় যে তোমার রব তাঁর সৃষ্টির প্রতিটি কাজের সাক্ষী, কোনো কিছুর জ্ঞান তাঁর কাছ থেকে হারিয়ে যায় না, আর তিনি তাদের আমলের প্রতিদান দেবেন, সৎকর্মশীলকে সৎকর্মের আর মন্দকারীকে তার প্রাপ্য?"
          },
          {
            "en": "Others hear in it Allah's testimony for His Messenger. Ibn Kathir: Allah suffices as witness over the words and deeds of His servants, and He bears witness that Muhammad ﷺ is truthful in what he conveys from Him, as in 4:166, but Allah bears witness to what He has sent down to you. Al-Muyassar and as-Sa'di: is Allah's testimony not proof enough that the Qur'an is true and its bearer truthful? As-Sa'di adds that Allah backed that spoken testimony by aiding him. Muqatil, in al-Baghawi, says enough as a witness that the Qur'an is from Allah.",
            "bn": "অন্যরা এতে শোনেন রাসূলের পক্ষে আল্লাহর সাক্ষ্য। ইবন কাসীর বলেন, বান্দাদের কথা ও কাজের সাক্ষী হিসেবে আল্লাহই যথেষ্ট, আর তিনি সাক্ষ্য দেন যে মুহাম্মাদ ﷺ তাঁর পক্ষ থেকে যা জানান তাতে তিনি সত্যবাদী। সঙ্গে আনেন ৪:১৬৬: কিন্তু আল্লাহ সাক্ষ্য দেন, তোমার প্রতি যা নাযিল করেছেন তার পক্ষে। মুয়াসসার ও সা'দীর কথা: কুরআন যে সত্য আর যিনি তা এনেছেন তিনি যে সত্যবাদী, তার প্রমাণ হিসেবে আল্লাহর সাক্ষ্যই কি যথেষ্ট নয়? সা'দী যোগ করেন, এই মৌখিক সাক্ষ্যকে আল্লাহ পোক্ত করেছেন রাসূলকে সাহায্য করে। বাগাভীতে মুকাতিলও বলেন, কুরআন যে আল্লাহর কাছ থেকে, তার সাক্ষী হিসেবে তোমার রবই যথেষ্ট।"
          },
          {
            "en": "On shahid itself the glosses stay close to the word. Az-Zajjaj, in al-Baghawi, explains the sufficiency as Allah having made the proofs clear enough, and the shahid as the witness from whom nothing is absent. Al-Qurtubi says shahid means the Knower, or comes from shahada in the sense of being present, and adds readings in which the sufficiency concerns His punishing the disbelievers or His witnessing their deeds.",
            "bn": "শাহীদ শব্দের ব্যাখ্যায় তাফসীরগুলো শব্দের কাছাকাছিই থাকে। বাগাভীর উদ্ধৃতিতে যাজ্জাজ বলেন, এখানে যথেষ্টতার মানে, আল্লাহ প্রমাণগুলো যথেষ্ট পরিমাণে স্পষ্ট করে দিয়েছেন। আর শাহীদ হলেন সেই সাক্ষী, যাঁর কাছ থেকে কিছুই অনুপস্থিত থাকে না। কুরতুবী বলেন, শাহীদ মানে যিনি জানেন, অথবা শব্দটি এসেছে শাহাদা থেকে, যার অর্থ উপস্থিত থাকা। তিনি আরও কিছু ব্যাখ্যা আনেন, যেখানে যথেষ্টতা কাফিরদের শাস্তি দেওয়ার ব্যাপারে, কিংবা তাদের আমলের সাক্ষী হওয়ার ব্যাপারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Last Word of Fussilat",
          "bn": "ফুসসিলাতের শেষ কথা"
        },
        "p": [
          {
            "en": "Then 41:54 ends the surah: they are in doubt about meeting their Lord, and He encompasses all things. Ibn Kathir, in the abridged English, explains the doubt as doubt that the Hour will come, so that they neither think of it nor work for it, and the encompassing as all creation being under Allah's control, dominion and knowledge, so that whatever He wills happens. Witness over all things in 41:53, encompassing all things in 41:54: these are the surah's last words about its Lord.",
            "bn": "তারপর ৪১:৫৪ সূরাটি শেষ করে: তারা তাদের রবের সাথে সাক্ষাৎ নিয়ে সন্দেহে আছে, আর তিনি সব কিছু বেষ্টন করে আছেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ বলে, সন্দেহটা কিয়ামত আসবে কি না তা নিয়ে, তাই তারা এ নিয়ে ভাবে না, এর জন্য চেষ্টাও করে না। আর বেষ্টনের অর্থ, গোটা সৃষ্টি আল্লাহর নিয়ন্ত্রণ, রাজত্ব ও জ্ঞানের অধীন, তিনি যা চান তা-ই ঘটে। ৪১:৫৩-এ সব কিছুর সাক্ষী, ৪১:৫৪-এ সব কিছুকে বেষ্টনকারী: রব সম্পর্কে এ সূরার শেষ কথা এ দুটিই।"
          },
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, so none is quoted here. Al-Muyassar ends its entry by saying that nothing is greater as testimony than Allah's. The verse ends on its question, and it leaves the reader two tasks: to look at what is shown, and to rest on Him who witnesses it all.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো পড়া হয়েছে, তার কোনোটিই এর সাথে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হলো না। মুয়াসসার তার আলোচনা শেষ করে এই কথায়: আল্লাহর সাক্ষ্যের চেয়ে বড় সাক্ষ্য আর কিছু নেই। আয়াত শেষ হয় তার প্রশ্নটি দিয়েই। পাঠকের জন্য তাই দুটি কাজ থাকে: যা দেখানো হয় তা মন দিয়ে দেখা, আর যিনি সব কিছুর সাক্ষী তাঁর উপর ভরসা রাখা।"
          }
        ]
      }
    ]
  }
});
