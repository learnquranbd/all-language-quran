/**
 * Tadabbur long-form articles — surah 46.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "46:3": {
    "sections": [
      {
        "h": {
          "en": "From the Page to the Sky",
          "bn": "কিতাবের পাতা থেকে আকাশে"
        },
        "p": [
          {
            "en": "Surat al-Ahqaf opens with Ha Mim and then a sentence about its own source: the revelation of the Book is from Allah, the Exalted in Might, the Wise (46:2). The very next sentence lifts the eyes from the page to the sky. Ma khalaqna as-samawati wal-arda wa ma baynahuma illa bil-haqqi wa ajalin musamma: We did not create the heavens and the earth and what is between them except with truth and a named term. Then the verse names a response: and those who disbelieve are turning away from what they were warned of.",
            "bn": "সূরা আল-আহকাফ শুরু হয় হা-মীম দিয়ে। তারপর আসে কিতাবের উৎস নিয়ে একটি বাক্য: এ কিতাব নাযিল হয়েছে মহা পরাক্রমশালী, প্রজ্ঞাময় আল্লাহর কাছ থেকে (৪৬:২)। ঠিক পরের বাক্যেই দৃষ্টি পাতা ছেড়ে আকাশে ওঠে। মা খালাকনাস সামাওয়াতি ওয়াল আরদা ওয়া মা বাইনাহুমা ইল্লা বিল-হাক্কি ওয়া আজালিম মুসাম্মা: আমি আকাশমণ্ডলী, পৃথিবী আর এ দুয়ের মাঝে যা আছে, তা হক আর এক নির্ধারিত মেয়াদ ছাড়া সৃষ্টি করিনি। আয়াত এরপর একটি প্রতিক্রিয়ার কথা বলে: আর যারা কুফরি করেছে, তাদের যে বিষয়ে সতর্ক করা হয়েছে, তা থেকে তারা মুখ ফিরিয়ে আছে।"
          },
          {
            "en": "Ibn Kathir, in the English abridgement, notes that the surah was revealed in Makkah and reads its opening as a single movement. He heads the passage The Qur'an is a Revelation from Allah and the Universe is His True Creation, and on 46:2 he says Allah describes Himself as possessing ultimate wisdom in His statements and actions. Read that way, the Book stands for what He says and the heavens for what He does, and the verse sets them side by side. The fetched texts give no occasion of revelation.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ জানায়, সূরাটি মক্কায় নাযিল হয়েছে। সূরার শুরুটা তিনি পড়েন এক টানা ধারায়। অংশটির শিরোনাম তিনি দেন: কুরআন আল্লাহর নাযিল করা, আর বিশ্বজগৎ তাঁর সত্য সৃষ্টি। ৪৬:২ আয়াতে তিনি বলেন, আল্লাহ নিজের পরিচয় দিচ্ছেন এমনভাবে যে তাঁর কথায় ও কাজে রয়েছে চূড়ান্ত প্রজ্ঞা। এভাবে পড়লে কিতাব হলো তাঁর কথা, আকাশ হলো তাঁর কাজ, আর আয়াত দুটোকে পাশাপাশি রাখে। সংগৃহীত তাফসীরগুলোতে নাযিলের কোনো উপলক্ষ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "One Preposition, Two Objects",
          "bn": "এক অব্যয়ে দুই জিনিস"
        },
        "p": [
          {
            "en": "The translation printed with this verse reads in truth and [for] a specified term, and the brackets admit that the word for has been supplied. The Arabic has one preposition doing both jobs. In bil-haqqi wa ajalin, the genitive ending on ajalin shows that it hangs on the same bi as al-haqq. Creation is with truth and with a named term. At-Tabari makes the link plain when he restates the clause as wa illa bi-ajalin, and except with a term.",
            "bn": "এ আয়াতের সঙ্গে ছাপা ইংরেজি অনুবাদে আছে: in truth and [for] a specified term। বন্ধনী নিজেই স্বীকার করে, for শব্দটা বাইরে থেকে যোগ করা। আরবিতে একটিমাত্র অব্যয় দুটি কাজই করছে। বিল-হাক্কি ওয়া আজালিন অংশে আজালিন শব্দের যের-চিহ্ন দেখায়, শব্দটি আল-হাক্কের মতোই একই বি-এর অধীনে। অর্থাৎ সৃষ্টি হয়েছে হক দিয়ে, আবার এক নির্ধারিত মেয়াদ দিয়েও। তাবারী বাক্যটি নতুন করে বলার সময় সংযোগটা স্পষ্ট করে দেন: ওয়া ইল্লা বি-আজালিন, আর এক মেয়াদ ছাড়া নয়।"
          },
          {
            "en": "The glosses on illa bil-haqq are set out at 45:22. What 46:3 adds is the second object. A world made only with truth might, as far as that phrase goes, run on for ever; this one was made with its end already named. Musamma is a passive participle: named, specified. The commentators differ on what the name points to, and that comes below. Here it is enough that the term belongs to the making itself.",
            "bn": "ইল্লা বিল-হাক্ক কথাটির ব্যাখ্যাগুলো ৪৫:২২ আয়াতে আলোচিত। ৪৬:৩ নতুন যা যোগ করে, তা হলো দ্বিতীয় জিনিসটি। শুধু হক দিয়ে বানানো একটি জগৎ, অন্তত ওই শব্দটুকু অনুযায়ী, হয়তো চিরকাল চলতে পারত। কিন্তু এ জগতের শেষটা বানানোর সময়েই নির্ধারিত। মুসাম্মা কর্মবাচ্য বিশেষণ, মানে নাম-দেওয়া, ঠিক-করে-রাখা। নামটা ঠিক কীসের দিকে ইশারা করে, তা নিয়ে তাফসীরকারদের মতভেদ আছে। সে আলোচনা আসছে নিচে আলাদা অংশে। এখানে এটুকুই যথেষ্ট যে মেয়াদটা সৃষ্টিরই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Idle, Not Left Neglected",
          "bn": "অনর্থক নয়, অবহেলায় ফেলে রাখা নয়"
        },
        "p": [
          {
            "en": "On the first object the texts speak in several voices. Ibn Kathir says: la 'ala wajhi'l-'abathi wal-batil, not by way of idle play and falsehood. The Muyassar and as-Sa'di share a pair of denials, la 'abathan wa la suda, not in vain and not left neglected. The Muyassar's purpose is that servants know the greatness of their Creator and worship Him alone. As-Sa'di's is that they know that greatness and draw inference to His perfection. Both add that they should know He is able to bring them back after death, and as-Sa'di adds: for recompense.",
            "bn": "প্রথম জিনিসটি নিয়ে তাফসীরগুলো কয়েক রকম কথা বলে। ইবন কাসীর বলেন: লা আলা ওয়াজহিল আবাসি ওয়াল বাতিল, খেলাচ্ছলে বা বাতিলভাবে নয়। মুয়াসসার আর সা'দী দুজনেই একজোড়া অস্বীকৃতি ব্যবহার করেন: লা আবাসান ওয়া লা সুদা, অনর্থক নয়, অবহেলায় ফেলে রাখাও নয়। মুয়াসসারের মতে উদ্দেশ্য হলো বান্দারা স্রষ্টার মহত্ত্ব চিনবে আর একমাত্র তাঁরই ইবাদত করবে। সা'দীর মতে তারা সেই মহত্ত্ব চিনবে আর তা থেকে তাঁর পূর্ণতার প্রমাণ নেবে। দুজনেই যোগ করেন, তারা জানবে মৃত্যুর পর বান্দাদের আবার ফিরিয়ে আনতে তিনি সক্ষম। সা'দী আরও বলেন: প্রতিদানের জন্য।"
          },
          {
            "en": "At-Tabari glosses the phrase as illa li-iqamati'l-haqqi wal-'adli fi'l-khalq: only for the establishing of truth and justice among creation. The Muyassar has a near twin, wa li-yuqimu'l-haqqa wal-'adla fima baynahum, and so that they establish truth and justice among themselves. The two are close but not the same. At-Tabari's phrase names no one doing the establishing, while the Muyassar puts the task in the servants' own hands. The difference stands: one reads justice as built into creation, the other as work creation's people are given to do.",
            "bn": "তাবারী শব্দটির ব্যাখ্যা দেন এভাবে: ইল্লা লি-ইকামাতিল হাক্কি ওয়াল আদলি ফিল খালক, অর্থাৎ শুধু সৃষ্টির মাঝে হক ও ইনসাফ কায়েমের জন্য। মুয়াসসারের কথাটা প্রায় যমজ: ওয়া লি-য়ুকীমুল হাক্কা ওয়াল আদলা ফীমা বাইনাহুম, আর যাতে তারা নিজেদের মধ্যে হক ও ইনসাফ কায়েম করে। দুটি ব্যাখ্যা কাছাকাছি, তবে এক নয়। তাবারীর বাক্যে কায়েম কে করবে, তার নাম নেই। মুয়াসসার দায়িত্বটা তুলে দেয় বান্দাদের নিজেদের হাতে। পার্থক্যটা থেকেই যায়। একটি পাঠে ইনসাফ সৃষ্টির ভেতরেই গাঁথা, অন্য পাঠে তা মানুষের হাতে দেওয়া কাজ।"
          },
          {
            "en": "Al-Qurtubi gives two readings and does not choose between them. The first is brief and unexpected: illa bil-haqq, ay lil-zawali wal-fana', for passing away and perishing. The second he introduces with wa qila, and it is said: so that I may recompense the doer of good and the doer of evil. For this he cites 53:31: and to Allah belongs whatever is in the heavens and whatever is on the earth, so that He may recompense those who do evil for what they have done and recompense those who do good with the best. His first reading already reaches toward the clause that follows.",
            "bn": "কুরতুবী দুটি ব্যাখ্যা দেন, কোনোটিকে বেছে নেন না। প্রথমটি ছোট আর অপ্রত্যাশিত: ইল্লা বিল-হাক্ক, আই লিয-যাওয়ালি ওয়াল ফানা, অর্থাৎ বিলীন হওয়া আর ধ্বংস হওয়ার জন্য। দ্বিতীয়টি তিনি আনেন ওয়া কীলা, বলা হয়েছে, কথাটি দিয়ে: যাতে আমি সৎকর্মশীল আর অসৎকর্মশীল দুজনকেই প্রতিদান দিই। এর সমর্থনে তিনি ৫৩:৩১ উদ্ধৃত করেন: আকাশমণ্ডলী ও পৃথিবীতে যা কিছু আছে সবই আল্লাহর, যাতে যারা মন্দ করেছে তাদের তিনি কাজ অনুযায়ী প্রতিফল দেন, আর যারা সৎকাজ করেছে তাদের দেন উত্তম প্রতিদান। তাঁর প্রথম ব্যাখ্যাটি আগেভাগেই পরের অংশের দিকে হাত বাড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Term Is Named",
          "bn": "কার মেয়াদ নির্ধারিত"
        },
        "p": [
          {
            "en": "On wa ajalin musamma the texts divide more sharply. Al-Qurtubi says: ya'ni al-qiyamah, fi qawli Ibn 'Abbas wa ghayrihi, it means the Resurrection, in the saying of Ibn Abbas and others, and he adds that it is the term at which the heavens and the earth come to their end. Al-Baghawi says the same without naming Ibn Abbas: it means the Day of Resurrection, the term at which the heavens and the earth end, and he calls the phrase an isharah ila fana'ihima, a pointer to their passing away.",
            "bn": "ওয়া আজালিম মুসাম্মা নিয়ে তাফসীরগুলোর মতভেদ আরও স্পষ্ট। কুরতুবী বলেন: ইয়া'নিল কিয়ামাহ, ফী কাওলি ইবন আব্বাস ওয়া গাইরিহি। অর্থাৎ এর মানে কিয়ামত, ইবন আব্বাস (রাঃ) ও অন্যদের মতে। তিনি যোগ করেন, এ সেই মেয়াদ যেখানে গিয়ে আকাশমণ্ডলী আর পৃথিবী শেষ হয়ে যাবে। বাগাভী ইবন আব্বাসের নাম না নিয়ে একই কথা বলেন: এর মানে কিয়ামতের দিন, সেই মেয়াদ যেখানে আকাশ আর পৃথিবী শেষ হবে। শব্দটিকে তিনি বলেন ইশারাতুন ইলা ফানাইহিমা, অর্থাৎ এ দুটোর বিলীন হওয়ার দিকে ইঙ্গিত।"
          },
          {
            "en": "Al-Qurtubi then gives a second reading, again with wa qila: it is the decreed term of every created thing, al-ajal al-maqdur li-kulli makhluq. On this reading there is an ending for each thing made. At-Tabari's wording sits between the two. He speaks of a term for all of that, known to Him, at which He brings it to nothing when it reaches it, and makes it cease to exist after it had existed by His bringing it into being. He neither names the Day nor divides the term thing by thing.",
            "bn": "এরপর কুরতুবী আবারও ওয়া কীলা দিয়ে দ্বিতীয় একটি ব্যাখ্যা আনেন: আল-আজালুল মাকদূরু লি-কুল্লি মাখলূক, প্রত্যেক সৃষ্ট বস্তুর জন্য নির্ধারিত মেয়াদ। এ পাঠে প্রতিটি সৃষ্টির আলাদা শেষ। তাবারীর ভাষা এ দুই ব্যাখ্যার মাঝামাঝি। তিনি বলেন এমন এক মেয়াদের কথা, যা এসবের জন্য এবং যা আল্লাহর জানা। সেখানে পৌঁছালে তিনি তা বিলীন করে দেন। নিজে অস্তিত্ব দিয়েছিলেন বলেই তা ছিল, আর অস্তিত্বের পর তিনিই তাকে অস্তিত্বহীন করেন। তিনি কিয়ামতের দিনের নাম নেন না, আবার মেয়াদকে বস্তু ধরে ধরে ভাগও করেন না।"
          },
          {
            "en": "The rest stress the fixing rather than the identity. Ibn Kathir says: ila muddatin mu'ayyanatin madrubatin la tazidu wa la tanqus, to a set, appointed duration that neither increases nor decreases. As-Sa'di says that the creation of the heavens and the earth, and their remaining, are decreed to a named term. The Muyassar says only: to a term known to Him. So the texts hold two identifications, the Day that ends the heavens and the term of each created thing, while the rest insist only that the term is fixed and known. No position is taken here between them.",
            "bn": "বাকিরা জোর দেন মেয়াদ নির্ধারিত হওয়ার উপর, সেটা কী তার উপর নয়। ইবন কাসীর বলেন: ইলা মুদ্দাতিন মু'আইয়ানাতিন মাদরূবাতিন লা তাযীদু ওয়া লা তানকুস। অর্থাৎ এক নির্দিষ্ট, বেঁধে দেওয়া সময় পর্যন্ত, যা বাড়েও না, কমেও না। সা'দী বলেন, আকাশ ও পৃথিবীর সৃষ্টি আর টিকে থাকা দুটোই এক নির্ধারিত মেয়াদ পর্যন্ত বাঁধা। মুয়াসসার শুধু বলে: তাঁর জানা এক মেয়াদ পর্যন্ত। তাহলে তাফসীরগুলোতে দুটি চিহ্নিতকরণ পাওয়া যায়: আকাশ শেষ করে দেওয়া সেই দিন, আর প্রতিটি সৃষ্টির নিজস্ব মেয়াদ। বাকিরা শুধু জোর দেন যে মেয়াদ নির্ধারিত ও জানা। এখানে এদের কোনো একটির পক্ষ নেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Truth That Includes an Ending",
          "bn": "যে হকের ভেতরে সমাপ্তি আছে"
        },
        "p": [
          {
            "en": "Set the two halves together. Al-Qurtubi's first gloss reads bil-haqq itself as for passing away, and al-Baghawi reads the named term as a pointer to that passing. In these texts the truth of creation and its end are not two separate facts but one fact seen from two sides. As-Sa'di opens his comment by saying that Allah set up proofs for that abode, and gave His servants a sample of reward and punishment in the near term, to draw them to seek what is loved and flee what is feared. And for this reason, he says, He said here: We did not create.",
            "bn": "দুটি অংশ একসঙ্গে রাখুন। কুরতুবীর প্রথম ব্যাখ্যায় বিল-হাক্ক মানেই বিলীন হওয়ার জন্য। আর বাগাভীর কাছে নির্ধারিত মেয়াদ সেই বিলীন হওয়ারই ইঙ্গিত। এই তাফসীরগুলোতে সৃষ্টির হক আর তার সমাপ্তি দুটি আলাদা সত্য নয়। একই সত্য, দুই দিক থেকে দেখা। সা'দী তাঁর আলোচনার শুরুতেই বলেন, আল্লাহ সেই ঘরের পক্ষে প্রমাণ দাঁড় করিয়েছেন। বান্দাদের তিনি দুনিয়াতেই পুরস্কার ও শাস্তির একটু নমুনা চাখিয়েছেন, যাতে তারা প্রিয় জিনিস খোঁজে আর ভয়ের জিনিস থেকে পালায়। সা'দী বলেন, এ কারণেই এখানে আল্লাহ বললেন: আমি সৃষ্টি করিনি।"
          },
          {
            "en": "So for as-Sa'di the verse is evidence offered for the abode to come: whoever made the heavens and the earth in all their vastness is able to bring the servants back. The reader's own life then has a place in the sentence. If al-Qurtubi's second reading holds, a person's lifespan is one of the terms the verse names. If the first holds, that lifespan sits inside the single term that ends the heavens. A named term was set for the heavens, and a named term is set for the one reading about them.",
            "bn": "তাই সা'দীর কাছে আয়াতটি আগামী ঘরের পক্ষে পেশ করা প্রমাণ। যিনি এত বিশাল আকাশ আর পৃথিবী বানিয়েছেন, তিনি বান্দাদের আবার ফিরিয়ে আনতেও সক্ষম। এখানে পাঠকের নিজের জীবনও বাক্যের ভেতরে জায়গা পায়। কুরতুবীর দ্বিতীয় ব্যাখ্যা ধরলে মানুষের আয়ুও আয়াতে উল্লিখিত মেয়াদগুলোর একটি। প্রথম ব্যাখ্যা ধরলে সেই আয়ু আকাশ শেষ হওয়ার একক মেয়াদের ভেতরেই পড়ে। আকাশের জন্য যেমন মেয়াদ ঠিক করা আছে, যিনি আকাশ নিয়ে পড়ছেন তাঁর জন্যও তেমনই এক মেয়াদ ঠিক করা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Content of the Warning",
          "bn": "সতর্কবাণীতে কী ছিল"
        },
        "p": [
          {
            "en": "The last clause turns from the sky to people: walladhina kafaru 'amma undhiru mu'ridun. The verb undhiru is passive, they were warned, and the verse does not stop to name the warner. Al-Qurtubi glosses it with khuwwifuhu, what they were made to fear. He adds that the ma in 'amma may be masdariyyah, so that the sense is from their being warned of that Day. The clause can therefore be read as turning away from the thing they were warned of, or as turning away from the act of warning itself.",
            "bn": "শেষ অংশে আয়াত আকাশ থেকে মানুষের দিকে ফেরে: ওয়াল্লাযীনা কাফারূ আম্মা উনযিরূ মু'রিদূন। উনযিরূ ক্রিয়াটি কর্মবাচ্য: তাদের সতর্ক করা হয়েছে। সতর্ককারী কে, আয়াত তা থেমে বলে না। কুরতুবী এর ব্যাখ্যায় বলেন খুউয়িফূহু, অর্থাৎ যে জিনিসের ভয় তাদের দেখানো হয়েছে। তিনি আরও বলেন, আম্মা শব্দের মা হতে পারে মাসদারিয়্যাহ। তখন অর্থ দাঁড়ায়: সেই দিন সম্পর্কে তাদের সতর্ক করা থেকে। তাই বাক্যটি দুইভাবে পড়া যায়। যে বিষয়ে সতর্ক করা হয়েছে তা থেকে মুখ ফেরানো, অথবা খোদ সতর্ক করার কাজটি থেকেই মুখ ফেরানো।"
          },
          {
            "en": "The commentators fill in what the warning carried. Al-Baghawi: what they were made to fear in the Qur'an, of the resurrection and the reckoning. The Muyassar: what the Qur'an warned them of. At-Tabari: Allah's warning to them. Ibn Kathir names the means rather than the content: He sent down to them a Book and sent to them a Messenger, and they turn away from all of that. That last gloss reaches back to 46:2, where the Book was said to come from the Mighty, the Wise.",
            "bn": "সতর্কবাণীতে কী ছিল, তাফসীরকারেরা তা খুলে বলেন। বাগাভীর মতে, কুরআনে পুনরুত্থান আর হিসাব-নিকাশের যে ভয় তাদের দেখানো হয়েছে। মুয়াসসারের মতে, কুরআন যে বিষয়ে তাদের সতর্ক করেছে। তাবারীর মতে, তাদের প্রতি আল্লাহর সতর্কবাণী। ইবন কাসীর বিষয়বস্তুর বদলে মাধ্যমের কথা বলেন: আল্লাহ তাদের কাছে কিতাব নাযিল করেছেন, রাসূল পাঠিয়েছেন, আর তারা এসব কিছু থেকেই মুখ ফিরিয়ে আছে। শেষ ব্যাখ্যাটি ৪৬:২ আয়াতে ফিরে যায়, যেখানে বলা হয়েছে কিতাব এসেছে পরাক্রমশালী, প্রজ্ঞাময়ের কাছ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Distracted, Not Uninformed",
          "bn": "অজানা নয়, অমনোযোগ"
        },
        "p": [
          {
            "en": "Who are those who disbelieve here? At-Tabari: those who denied the oneness of Allah. The Muyassar: those who denied that Allah is the true God. And how do they turn away? Ibn Kathir: lahuna 'amma yuradu bihim, distracted from what is intended for them. Al-Qurtubi gives three words: muwallun, lahun, ghayru musta'iddina lahu, turning their backs, distracted, not preparing for it. Both use lahun, a word of amusement and distraction. Beside Ibn Kathir's gloss on the first half: the heavens were not made in play, and the ones who turn away are the ones at play.",
            "bn": "এখানে কুফরিকারী কারা? তাবারীর মতে, যারা আল্লাহর একত্ব অস্বীকার করেছে। মুয়াসসারের মতে, যারা অস্বীকার করেছে যে আল্লাহই সত্য ইলাহ। আর তারা মুখ ফেরায় কীভাবে? ইবন কাসীর বলেন: লাহূনা আম্মা য়ুরাদু বিহিম, তাদের কাছে যা চাওয়া হয়েছে, তা থেকে তারা উদাসীন হয়ে মেতে আছে। কুরতুবী তিনটি শব্দ দেন: মুওয়াল্লূন, লাহূন, গাইরু মুসতা'ইদ্দীনা লাহু। অর্থাৎ পিঠ ফিরিয়ে আছে, মেতে আছে, সেদিনের জন্য কোনো প্রস্তুতি নিচ্ছে না। দুজনেই লাহূন শব্দটি ব্যবহার করেন, যার মধ্যে খেলা আর অন্যমনস্কতার ভাব আছে। প্রথম অংশে ইবন কাসীরের নিজের ব্যাখ্যার পাশে রাখলে দাঁড়ায়: আকাশ খেলাচ্ছলে বানানো হয়নি, অথচ যারা মুখ ফেরায় তারাই খেলায় মেতে আছে।"
          },
          {
            "en": "At-Tabari names what the turning away consists of: la yatta'izuna bihi wa la yatafakkaruna fa ya'tabirun, they take no admonition from it, and they do not reflect so as to draw the lesson. The Muyassar repeats the first two verbs. As-Sa'di: once Allah had given the news, set up the proof and lit the way, a party of creation refused anything but turning from the truth and turning aside from the call of the messengers. In none of these texts is the problem a lack of information. The warning arrived; the attention did not.",
            "bn": "মুখ ফেরানো বলতে আসলে কী বোঝায়, তাবারী তা বলে দেন: লা ইয়াত্তাইযূনা বিহি ওয়া লা ইয়াতাফাক্কারূনা ফা ইয়া'তাবিরূন। অর্থাৎ তারা এ থেকে নসিহত নেয় না, আর এমনভাবে ভাবে না যাতে শিক্ষা নিতে পারে। মুয়াসসার প্রথম দুটি ক্রিয়াই আবার বলে। সা'দীর কথায়, আল্লাহ খবর দিলেন, প্রমাণ দাঁড় করালেন, পথ আলোকিত করলেন। তারপরও সৃষ্টির একটি দল হক থেকে মুখ ফেরানো আর রাসূলদের দাওয়াত থেকে সরে যাওয়া ছাড়া আর কিছুতেই রাজি হলো না। এ তাফসীরগুলোর কোনোটিতেই সমস্যাটা তথ্যের অভাব নয়। সতর্কবাণী পৌঁছেছিল, মনোযোগ পৌঁছায়নি।"
          },
          {
            "en": "As-Sa'di then sets the other party beside them. Those who believed, when they knew the reality of the matter, received their Lord's counsels with acceptance and surrender, met them with compliance and reverence, and so won every good and had every harm turned from them. Ibn Kathir ends his comment on the deniers in a single clause: wa saya'lamuna ghibba dhalik, and they will come to know the outcome of that. The verse itself closes on mu'ridun, a participle that describes them rather than narrating one act.",
            "bn": "এরপর সা'দী তাদের পাশে অন্য দলটিকে রাখেন। যারা ঈমান এনেছিল, তারা আসল অবস্থা জানার পর রবের নসিহত কবুল করেছে মেনে নিয়ে, আত্মসমর্পণ করে। আনুগত্য আর সম্মান দিয়ে সেগুলো গ্রহণ করেছে। ফলে তারা সব কল্যাণ পেয়েছে, আর সব অনিষ্ট তাদের থেকে সরে গেছে। মুখ ফেরানো লোকদের নিয়ে ইবন কাসীর আলোচনা শেষ করেন একটিমাত্র বাক্যে: ওয়া সাইয়া'লামূনা গিব্বা যালিক, আর এর পরিণাম তারা শিগগিরই জানবে। আয়াত নিজে শেষ হয় মু'রিদূন শব্দে। শব্দটি কর্তৃবাচক বিশেষ্য, একবারের কোনো ঘটনা বলে না, তাদের অবস্থার বর্ণনা দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Mirror Faces the Reader",
          "bn": "আয়না পাঠকের দিকে ফেরানো"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes those who disbelieve and turn away from the warning, and the commentators identify them by what they denied, the oneness of Allah. It describes what the text describes and licenses nothing against any living person or community. No tafsir fetched for this verse attaches a hadith to it, so none is quoted here. The next verse turns to what such people invoke besides Allah and asks for their proof, and that belongs to its own reading.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত বর্ণনা দিচ্ছে তাদের, যারা কুফরি করেছে আর সতর্কবাণী থেকে মুখ ফিরিয়েছে। তাফসীরকারেরা তাদের চিনিয়েছেন তারা কী অস্বীকার করেছিল তা দিয়ে, অর্থাৎ আল্লাহর একত্ব। আয়াত শুধু তা-ই বর্ণনা করে যা তার ভাষায় আছে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুরই অনুমতি দেয় না। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি। পরের আয়াত আল্লাহকে ছেড়ে তারা যাদের ডাকে সেদিকে ফেরে আর প্রমাণ চায়। সে আলোচনা সেই আয়াতের।"
          },
          {
            "en": "The mirror the verse holds up is for the reader. At-Tabari and the Muyassar name the opposite of turning away in two verbs: taking admonition and reflecting. The first half of the verse is the material for that reflection, laid out overhead every day: a sky made with truth and running to a named term. The question is not whether the warning has reached us; for anyone reading this, it has. The question is whether we are attending to it, or whether we have found something else to be busy with until the term arrives.",
            "bn": "আয়াত যে আয়না তুলে ধরে, তা পাঠকের নিজের জন্য। মুখ ফেরানোর বিপরীত কী, তাবারী আর মুয়াসসার দুটি ক্রিয়ায় তা বলে দেন: নসিহত নেওয়া আর চিন্তা করা। সেই চিন্তার উপকরণ আয়াতের প্রথম অংশেই আছে, প্রতিদিন মাথার উপর মেলে রাখা। এমন এক আকাশ, যা বানানো হয়েছে হক দিয়ে আর যা চলছে নির্ধারিত মেয়াদের দিকে। সতর্কবাণী আমাদের কাছে পৌঁছেছে কি না, প্রশ্ন সেটা নয়। যিনি এ লেখা পড়ছেন, তাঁর কাছে তো পৌঁছেছেই। প্রশ্ন হলো, আমরা কি সেদিকে মন দিচ্ছি? নাকি মেয়াদ আসা পর্যন্ত ব্যস্ত থাকার মতো অন্য কিছু খুঁজে নিয়েছি?"
          }
        ]
      }
    ]
  },
  "46:15": {
    "sections": [
      {
        "h": {
          "en": "A Command With Its Reason Attached",
          "bn": "কারণসহ একটি নির্দেশ"
        },
        "p": [
          {
            "en": "The verse opens with wassayna al-insana bi-walidayhi ihsana: We have enjoined upon man kindness to his parents. The verb wassayna, We have enjoined, is the language of a solemn charge laid down by Allah Himself, and ihsan is a verbal noun demanding not bare compliance but excellence — the same word used for the highest grade of worship. Then, unusually, the verse immediately supplies the command's reason, and the reason is a person: his mother.",
            "bn": "আয়াতটি শুরু হয়: ওয়াসসাইনাল-ইনসানা বিওয়ালিদাইহি ইহসানা — আমি মানুষকে তার পিতামাতার প্রতি সদাচরণের নির্দেশ দিয়েছি। ওয়াসসাইনা ক্রিয়াটি — আমি নির্দেশ দিয়েছি — স্বয়ং আল্লাহর দেওয়া এক গুরুগম্ভীর দায়িত্বের ভাষা, আর ইহসান একটি ক্রিয়াবাচক বিশেষ্য, যা নিছক আনুগত্য নয়, উৎকর্ষ দাবি করে — ইবাদতের সর্বোচ্চ স্তরের জন্যও এই একই শব্দ ব্যবহৃত হয়। তারপর, অস্বাভাবিকভাবে, আয়াতটি সঙ্গে সঙ্গে আদেশটির কারণ জানিয়ে দেয় — আর সেই কারণটি একজন মানুষ: তার মা।"
          },
          {
            "en": "His mother carried him in hardship and gave birth to him in hardship — the word kurhan appears twice, once for the carrying and once for the delivery. Both parents are named in the command, but when the verse argues its case it points to the one whose service can never be repaid in kind. Nobody remembers being carried, and nobody witnessed their own birth; the verse testifies on behalf of a debt its debtor slept through.",
            "bn": "তার মা কষ্ট করে তাকে গর্ভে ধারণ করেছে এবং কষ্ট করে তাকে প্রসব করেছে — কুরহান শব্দটি দুইবার এসেছে, একবার গর্ভধারণের জন্য, একবার প্রসবের জন্য। আদেশে পিতামাতা দুজনের কথাই আছে, কিন্তু আয়াত যখন তার যুক্তি পেশ করে তখন আঙুল তোলে তাঁর দিকে, যাঁর সেবা কোনোদিন সমান মাপে শোধ করা যায় না। গর্ভে বহন করার কথা কারও মনে থাকে না, নিজের জন্ম কেউ দেখেনি; আয়াতটি এমন এক ঋণের পক্ষে সাক্ষ্য দেয়, যে ঋণের দেনাদার তখন ঘুমিয়ে ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Thirty Months, Measured",
          "bn": "মাপা ত্রিশ মাস"
        },
        "p": [
          {
            "en": "Then a number: his bearing and his weaning are thirty months. The Quran gives the weaning period on its own elsewhere — in 2:233 mothers suckle their children two complete years, which is twenty-four months, for whoever wishes to complete the nursing. Ibn Kathir relates that Ali (RA) put the two verses together and drew a legal conclusion: thirty months less twenty-four leaves six, so the shortest term of pregnancy the law recognises is six months.",
            "bn": "তারপর একটি সংখ্যা: তার গর্ভধারণ ও দুধ ছাড়ানো ত্রিশ মাসে। কুরআন দুধপানের মেয়াদ আলাদাভাবে অন্যত্র দিয়েছে — 2:233 আয়াতে মায়েরা সন্তানদের পূর্ণ দুই বছর দুধ পান করাবে, অর্থাৎ চব্বিশ মাস, যে দুধপানের মেয়াদ পূর্ণ করতে চায় তার জন্য। ইবনে কাসীর বর্ণনা করেন, আলী (রাঃ) আয়াত দুটি মিলিয়ে একটি শরয়ী সিদ্ধান্ত টেনেছিলেন: ত্রিশ মাস থেকে চব্বিশ বাদ দিলে থাকে ছয়, তাই শরীয়ত গর্ভধারণের সর্বনিম্ন যে মেয়াদ স্বীকার করে তা ছয় মাস।"
          },
          {
            "en": "The deduction shows how precisely the companions read. But for the ordinary reader the number does something simpler: it converts a vague sense of owing one's mother into a measured quantity. Thirty months is roughly nine hundred days and nights of another person's body being spent on yours before you could thank anyone. The verse asks for ihsan towards parents only after establishing that the account opened long before the child's memory did.",
            "bn": "এই সিদ্ধান্ত দেখায় সাহাবীগণ কত সূক্ষ্মভাবে পড়তেন। কিন্তু সাধারণ পাঠকের জন্য সংখ্যাটি আরও সরল একটি কাজ করে: মায়ের কাছে ঋণী থাকার অস্পষ্ট অনুভূতিকে এটি একটি মাপা পরিমাণে বদলে দেয়। ত্রিশ মাস মানে মোটামুটি নয়শো দিন-রাত — আপনি কাউকে ধন্যবাদ দিতে শেখার আগেই অন্য একজন মানুষের শরীর আপনার শরীরের পেছনে ব্যয় হয়ে গেছে। আয়াতটি পিতামাতার প্রতি ইহসান চায় কেবল এটুকু প্রতিষ্ঠার পরে যে হিসাবখাতাটি খুলেছিল সন্তানের স্মৃতি শুরু হওয়ার অনেক আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Full Strength and Forty Years",
          "bn": "পূর্ণ শক্তি ও চল্লিশ বছর"
        },
        "p": [
          {
            "en": "The verse then leaps across decades in a single clause: until, when he reaches his full strength and reaches forty years, he says a prayer. Two arrivals are named — ashuddahu, the peak of bodily and mental maturity, and then forty years. The commentators read forty as the age at which excuses run out: the passions have cooled, the parents have grown old or passed on, and a person's own children are watching how they treat their grandparents.",
            "bn": "এরপর আয়াতটি একটি মাত্র বাক্যাংশে কয়েক দশক পেরিয়ে যায়: অবশেষে সে যখন তার পূর্ণ শক্তিতে পৌঁছায় এবং চল্লিশ বছরে পৌঁছায়, তখন সে একটি দুআ করে। দুটি পৌঁছানোর কথা এসেছে — আশুদ্দাহু, দৈহিক ও মানসিক পরিপক্বতার চূড়া, তারপর চল্লিশ বছর। মুফাসসিরগণ চল্লিশকে পড়েন সেই বয়স হিসেবে যেখানে অজুহাত ফুরিয়ে যায়: প্রবৃত্তি ঠান্ডা হয়েছে, পিতামাতা বৃদ্ধ হয়েছেন বা চলে গেছেন, আর মানুষটির নিজের সন্তানেরা দেখছে সে তার দাদা-দাদি, নানা-নানির সঙ্গে কেমন ব্যবহার করে।"
          },
          {
            "en": "What the mature person does at that summit is the verse's quiet surprise. He does not celebrate his strength or audit his achievements; he turns and prays. The Quran presents the turning point of maturity not as arrival at independence but as arrival at gratitude — the moment a person finally has the height to see how much was carried for them, and uses that height to ask for the ability to give thanks.",
            "bn": "সেই চূড়ায় পৌঁছে পরিণত মানুষটি কী করে — সেটিই আয়াতের নীরব চমক। সে তার শক্তি উদযাপন করে না, অর্জনের হিসাবও মেলায় না; সে ফিরে দাঁড়ায় এবং দুআ করে। কুরআন পরিণত বয়সের মোড়কে উপস্থাপন করে স্বাধীনতায় পৌঁছানো হিসেবে নয়, কৃতজ্ঞতায় পৌঁছানো হিসেবে — সেই মুহূর্ত, যখন মানুষ অবশেষে এতটা উচ্চতা পায় যে দেখতে পারে তার জন্য কতখানি বহন করা হয়েছিল, আর সেই উচ্চতা ব্যবহার করে চায় শুকরিয়া আদায়ের সামর্থ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prayer Itself",
          "bn": "দুআটি নিজে"
        },
        "p": [
          {
            "en": "The du'a deserves reading clause by clause. Rabbi awzi'ni an ashkura ni'mataka — my Lord, enable me to be grateful for Your favour; awzi'ni is an imperative of request, asking Allah to gather one's scattered capacities towards thankfulness, an admission that even gratitude needs His help. The favour named is upon me and upon my parents — one blessing flowing through two generations. Then: and that I do righteousness You approve of, since not every impressive deed earns His approval.",
            "bn": "দুআটি বাক্যাংশ ধরে ধরে পড়ার দাবি রাখে। রাব্বি আওযি'নী আন আশকুরা নি'মাতাকা — হে আমার রব, আমাকে সামর্থ্য দিন যেন আপনার নিয়ামতের শুকরিয়া আদায় করি; আওযি'নী একটি প্রার্থনাসূচক আদেশরূপ, যা আল্লাহর কাছে চায় — তিনি যেন মানুষের ছড়িয়ে থাকা সামর্থ্যগুলো কৃতজ্ঞতার দিকে জড়ো করে দেন; এ এক স্বীকারোক্তি যে কৃতজ্ঞতার জন্যও তাঁর সাহায্য লাগে। যে নিয়ামতের নাম নেওয়া হয়েছে তা আমার ওপর ও আমার পিতামাতার ওপর — একটি নিয়ামত দুই প্রজন্মের ভেতর দিয়ে বয়ে চলেছে। তারপর: এবং যেন এমন সৎকাজ করি যা আপনি পছন্দ করেন — কারণ চোখধাঁধানো প্রতিটি কাজ তাঁর সন্তুষ্টি পায় না।"
          },
          {
            "en": "The prayer then reaches forward: and make righteousness continue for me in my offspring. The one who has just acknowledged the debt to the generation before asks for goodness in the generation after — gratitude flowing backwards becomes concern flowing forwards. And it closes with return: I have repented to You, and I am of the Muslims. At the height of his strength, the speaker's final words are surrender, as if strength were only ever borrowed for this.",
            "bn": "এরপর দুআটি সামনের দিকে হাত বাড়ায়: এবং আমার জন্য আমার সন্তানদের মধ্যে সততা অব্যাহত রাখুন। যে ব্যক্তি এইমাত্র আগের প্রজন্মের কাছে ঋণ স্বীকার করল, সে-ই পরের প্রজন্মের কল্যাণ চাইছে — পেছনদিকে বয়ে যাওয়া কৃতজ্ঞতা সামনের দিকে বয়ে যাওয়া মমতায় পরিণত হয়। আর শেষ হয় প্রত্যাবর্তনে: আমি আপনার কাছে তাওবা করলাম, এবং আমি মুসলিমদের অন্তর্ভুক্ত। শক্তির শিখরে দাঁড়িয়ে বক্তার শেষ কথা আত্মসমর্পণ — যেন শক্তিটা এই কাজের জন্যই ধার নেওয়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Echoes Across the Quran",
          "bn": "কুরআনজুড়ে প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "The verse gathers threads laid elsewhere. In 31:14 the mother carries her child in weakness upon weakness, and the weaning is in two years, with the command to be grateful to Me and to your parents — the same pairing of divine and parental thanks. In 17:23-24 kindness to parents is legislated for their old age, down to the prohibition of saying so much as uff to them, and the child is taught to pray: my Lord, have mercy on them as they raised me when I was small.",
            "bn": "আয়াতটি অন্যত্র বিছানো সুতোগুলো একত্র করে। 31:14 আয়াতে মা তার সন্তানকে বহন করে দুর্বলতার ওপর দুর্বলতা নিয়ে, আর দুধ ছাড়ানো দুই বছরে — সঙ্গে আদেশ: আমার প্রতি ও তোমার পিতামাতার প্রতি কৃতজ্ঞ হও — আল্লাহর শুকরিয়া ও পিতামাতার শুকরিয়ার সেই একই জোড়। 17:23-24 আয়াতে পিতামাতার বার্ধক্যের জন্য সদাচরণ বিধিবদ্ধ হয়েছে — এমনকি তাঁদের 'উফ' পর্যন্ত বলা নিষেধ — আর সন্তানকে দুআ শেখানো হয়েছে: হে আমার রব, তাঁদের প্রতি রহম করুন যেমন তাঁরা আমাকে শৈশবে লালন করেছেন।"
          },
          {
            "en": "The opening words of the mature believer's prayer are not unique to this verse either. In 27:19 Sulayman (AS), at the peak of a kingdom no one after him would match, smiles at the speech of an ant and prays with the same words: rabbi awzi'ni an ashkura ni'mataka, my Lord, enable me to be grateful for Your favour upon me and upon my parents. A prophet-king and an unnamed forty-year-old reach the same summit and say the same sentence.",
            "bn": "পরিণত মুমিনের দুআর শুরুর শব্দগুলোও কেবল এই আয়াতের নিজস্ব নয়। 27:19 আয়াতে সুলাইমান (আঃ), এমন এক রাজত্বের শিখরে যার সমকক্ষ তাঁর পরে কেউ হবে না, একটি পিপীলিকার কথা শুনে মুচকি হাসেন এবং একই শব্দে দুআ করেন: রাব্বি আওযি'নী আন আশকুরা নি'মাতাকা — হে আমার রব, আমাকে সামর্থ্য দিন যেন আমার ওপর ও আমার পিতামাতার ওপর আপনার নিয়ামতের শুকরিয়া আদায় করি। একজন নবী-বাদশাহ আর এক নাম-না-জানা চল্লিশ বছরের মানুষ একই চূড়ায় পৌঁছে একই বাক্য উচ্চারণ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Turning Point",
          "bn": "মোড় ঘোরার মুহূর্তটি যাপন"
        },
        "p": [
          {
            "en": "For those approaching or past forty, the verse offers a ready-made agenda: memorise this du'a and mean it. Its three requests — capacity for gratitude, deeds He approves, righteous descendants — and its closing declaration of repentance cover precisely the concerns that midlife raises and that midlife crises mishandle. Where the culture around us treats forty as a deadline for self-reinvention, the verse treats it as the appointed hour for self-orientation: towards the parents behind, the children ahead, and the Lord above.",
            "bn": "যাঁদের বয়স চল্লিশের কাছাকাছি বা পেরিয়ে গেছে, তাঁদের জন্য আয়াতটি একটি তৈরি কর্মসূচি দেয়: এই দুআটি মুখস্থ করুন এবং অন্তর থেকে করুন। এর তিনটি চাওয়া — কৃতজ্ঞতার সামর্থ্য, তাঁর পছন্দের আমল, সৎ সন্তান — আর শেষের তাওবার ঘোষণাটি মধ্যজীবন যে দুশ্চিন্তাগুলো তোলে এবং মধ্যজীবনের সংকট যেগুলো ভুলভাবে সামলায়, ঠিক সেগুলোই ধারণ করে। আমাদের চারপাশের সংস্কৃতি যেখানে চল্লিশকে ধরে নিজেকে নতুন করে গড়ার শেষ সময়সীমা, আয়াতটি সেখানে একে ধরে নিজেকে ঠিক দিকে ফেরানোর নির্ধারিত ক্ষণ: পেছনের পিতামাতা, সামনের সন্তান, আর ঊর্ধ্বের রবের দিকে।"
          },
          {
            "en": "For those whose parents still live, the verse restores urgency: the thirty months were spent on you without a contract, and the window for ihsan in return is closing at an unknown rate. For those whose parents have died, the du'a keeps a door open, since gratitude for the favour upon them can still be spoken. And for every parent reading, there is a sobering mirror: the gratitude your children will one day pray with is being shaped by what they watch you do now.",
            "bn": "যাঁদের পিতামাতা এখনো জীবিত, আয়াতটি তাঁদের তাগিদ ফিরিয়ে দেয়: সেই ত্রিশ মাস কোনো চুক্তি ছাড়াই আপনার পেছনে ব্যয় হয়েছিল, আর বিনিময়ে ইহসানের জানালাটি বন্ধ হয়ে আসছে — কত দ্রুত, তা অজানা। যাঁদের পিতামাতা মারা গেছেন, দুআটি তাঁদের জন্য একটি দরজা খোলা রাখে, কারণ তাঁদের ওপর নিয়ামতের শুকরিয়া এখনো মুখে আনা যায়। আর প্রতিটি পাঠক-অভিভাবকের জন্য আছে একটি সংযত আয়না: আপনার সন্তানেরা একদিন যে কৃতজ্ঞতা নিয়ে দুআ করবে, তা গড়ে উঠছে এখন তারা আপনাকে যা করতে দেখছে তা দিয়ে।"
          }
        ]
      }
    ]
  }
});
