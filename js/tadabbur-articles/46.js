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
  "46:10": {
    "sections": [
      {
        "h": {
          "en": "Say, Have You Considered",
          "bn": "বলো, ভেবে দেখেছ কি"
        },
        "p": [
          {
            "en": "The verse closes an exchange. In 46:7 those who disbelieve call the recited verses obvious magic. In 46:8 they say he has invented it. In 46:9 the Prophet ﷺ is told to say that he is nothing new among the messengers and follows only what is revealed to him. Now comes the next instruction, qul ara'aytum: say, have you considered. At-Tabari names the addressees as the idolaters who said of this Qur'an, when it reached them, this is obvious magic.",
            "bn": "আয়াতটি একটা কথোপকথনের শেষ ধাপ। ৪৬:৭ আয়াতে অস্বীকারকারীরা তিলাওয়াত করা আয়াতগুলোকে বলে প্রকাশ্য জাদু। ৪৬:৮ আয়াতে তারা বলে, তিনি নিজেই এটা বানিয়েছেন। ৪৬:৯ আয়াতে নবী ﷺ-কে বলতে বলা হয়, রাসূলদের মধ্যে তিনি নতুন কেউ নন, আর তিনি কেবল ওহীরই অনুসরণ করেন। এবার আসে পরের নির্দেশ, কুল আরাআইতুম: বলো, তোমরা কি ভেবে দেখেছ? তাবারী জানান, কথাটা সেই মুশরিকদের উদ্দেশে, কুরআন যখন তাদের কাছে পৌঁছাল, তারা বলেছিল এ তো প্রকাশ্য জাদু।"
          },
          {
            "en": "Al-Baghawi glosses ara'aytum as tell me, what do you say. Al-Qurtubi notes that the word is set for asking and questioning, which is why it takes no object. Ibn Kathir turns the question into a warning: what do you suppose Allah will do with you, if this Book I have brought was sent down to me to convey to you, and you have disbelieved in it and called it a lie? Al-Muyassar addresses the whole verse to the idolaters of the Prophet's ﷺ own people.",
            "bn": "বাগাভী আরাআইতুম শব্দের অর্থ করেন: আমাকে বলো, তোমরা কী বলো? কুরতুবী লক্ষ করেন, শব্দটা প্রশ্ন করার জন্যই তৈরি, তাই এর কোনো কর্ম লাগে না। ইবনে কাসীর প্রশ্নটাকে সতর্কবাণীতে বদলে দেন। তাঁর ভাষায়: যে কিতাব আমি এনেছি, তা যদি তোমাদের কাছে পৌঁছে দেওয়ার জন্য সত্যিই আমার উপর নাযিল হয়ে থাকে, আর তোমরা তা অস্বীকার করে মিথ্যা বলে থাকো, তবে আল্লাহ তোমাদের সঙ্গে কী করবেন বলে মনে করো? মুয়াসসার পুরো আয়াতটিকে নবী ﷺ-এর নিজের কওমের মুশরিকদের উদ্দেশে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer Left Unsaid",
          "bn": "যে জবাব মুখে আসেনি"
        },
        "p": [
          {
            "en": "The sentence opens with a condition, in kana min 'indi Allah, if it is from Allah, and never states what follows from it. Al-Baghawi says the answer is omitted and stands for: have you not done wrong? He finds the evidence in the verse's own close, indeed Allah does not guide the wrongdoing people. He also reports a different completion from al-Hasan: then who is further astray than you, as in the surah he calls as-Sajda.",
            "bn": "বাক্যটা শুরু হয় একটা শর্ত দিয়ে, ইন কানা মিন ইনদিল্লাহ: যদি এটা আল্লাহর কাছ থেকে হয়। কিন্তু তাতে কী দাঁড়ায়, সে কথা আর বলা হয় না। বাগাভী বলেন, জবাবটা উহ্য। তার মানে: তোমরা কি জুলুম করোনি? প্রমাণ তিনি পান আয়াতের শেষ কথায়, নিশ্চয়ই আল্লাহ জালিম সম্প্রদায়কে হিদায়াত দেন না। হাসান থেকে তিনি আরেকটি পূরণও আনেন: তাহলে তোমাদের চেয়ে বেশি পথভ্রষ্ট আর কে? যেমনটা আছে সেই সূরায়, যাকে তিনি সূরা সাজদা বলেন।"
          },
          {
            "en": "Al-Qurtubi gathers more. From az-Zajjaj: he believed, so will you believe? From others: have you not done wrong, which the ending makes plain; or, do you then feel safe from Allah's punishment? He also reports from an-Naqqash and others that the verse moves a clause out of order, and should be read: if it is from Allah, and a witness from the Children of Israel testified and believed, and you disbelieved. Al-Muyassar and as-Sa'di close the thought with the same question: is this anything but the greatest wrong and the most severe disbelief?",
            "bn": "কুরতুবী আরও কয়েকটি মত জড়ো করেন। যাজ্জাজের মতে: সে তো ঈমান আনল, তোমরা কি ঈমান আনবে? অন্যদের মতে: তোমরা কি জুলুম করোনি, যা আয়াতের শেষাংশ পরিষ্কার করে দেয়। কিংবা: তবে কি তোমরা আল্লাহর আযাব থেকে নিশ্চিন্ত? নাক্কাশ ও অন্যদের সূত্রে তিনি আরও জানান, আয়াতে একটা অংশ আগে-পরে বসেছে। সাজিয়ে পড়লে দাঁড়ায়: যদি এটা আল্লাহর কাছ থেকে হয়, আর বনী ইসরাঈলের এক সাক্ষী সাক্ষ্য দিয়ে ঈমান আনে, অথচ তোমরা অস্বীকার করো। মুয়াসসার আর সা'দী দুজনেই চিন্তাটা শেষ করেন একই প্রশ্নে: এটা কি সবচেয়ে বড় জুলুম আর সবচেয়ে কঠিন কুফর ছাড়া আর কিছু?"
          }
        ]
      },
      {
        "h": {
          "en": "Testifying to Its Like",
          "bn": "তার অনুরূপের পক্ষে সাক্ষ্য"
        },
        "p": [
          {
            "en": "'Ala mithlihi: to the like of it. At-Tabari reports both camps agreeing on what the like is. Those who name Musa (AS) say the like of the Qur'an, to which Musa testified by confirming it, is the Torah. Those who name 'Abdullah ibn Salam (RA) say he testified to the like of this Qur'an by confirming it, and that the like of the Qur'an is the Torah. Masruq, in at-Tabari's chains, sets it out as a pair: the Torah is like the Qur'an, and Musa is like Muhammad ﷺ.",
            "bn": "আলা মিসলিহি: তার অনুরূপের উপর। তাবারীর বর্ণনায় দেখা যায়, এই 'অনুরূপ' কী, তা নিয়ে দুই দলই একমত। যাঁরা মূসা (আঃ)-এর নাম বলেন, তাঁদের মতে কুরআনের অনুরূপ হলো তাওরাত, যার সত্যতার পক্ষে মূসা (আঃ) সাক্ষ্য দিয়েছেন। যাঁরা আবদুল্লাহ ইবনে সালাম (রাঃ)-এর নাম বলেন, তাঁরাও বলেন, তিনি এই কুরআনের অনুরূপকে সত্য বলে সাক্ষ্য দিয়েছেন, আর কুরআনের অনুরূপ হলো তাওরাত। তাবারীর সনদগুলোতে মাসরূক কথাটা জোড়া বেঁধে বলেন: তাওরাত কুরআনের মতো, আর মূসা মুহাম্মাদ ﷺ-এর মতো।"
          },
          {
            "en": "Ibn Kathir reads the phrase more broadly: the earlier scriptures sent down on the prophets testified to its truth and soundness, gave good news of it, and told of the like of what this Qur'an tells. Al-Muyassar names what is in the Torah confirming the prophethood of Muhammad ﷺ. Al-Qurtubi glosses it as the like of what I have brought you, with Musa testifying to the Torah and Muhammad ﷺ to the Qur'an.",
            "bn": "ইবনে কাসীর কথাটা আরও প্রশস্ত করে পড়েন। তাঁর মতে, আগের নবীদের উপর নাযিল হওয়া কিতাবগুলো এর সত্যতা ও বিশুদ্ধতার সাক্ষ্য দিয়েছে, এর সুসংবাদ দিয়েছে, আর এই কুরআন যা জানায় তার অনুরূপ খবরই দিয়েছে। মুয়াসসার নির্দিষ্ট করে বলে: তাওরাতে মুহাম্মাদ ﷺ-এর নবুওয়াতের যে সমর্থন আছে, সেটাই। কুরতুবীর ব্যাখ্যা: আমি তোমাদের কাছে যা এনেছি তার অনুরূপ। মূসা সাক্ষ্য দিয়েছেন তাওরাতের পক্ষে, আর মুহাম্মাদ ﷺ কুরআনের পক্ষে।"
          },
          {
            "en": "A third reading gives the word mithl no weight of its own. Al-Qurtubi reports from al-Jurjani that it is a connective, and al-Baghawi states the same himself: the witness testified to it, that is, that it is from Allah. On that reading the clause says simply that a witness affirmed the Qur'an's origin. On the others, the witness affirmed something parallel to it, an earlier revelation in agreement with the new.",
            "bn": "তৃতীয় এক পাঠে মিসল শব্দটার আলাদা কোনো ভার নেই। কুরতুবী জুরজানী থেকে আনেন, এটা নিছক সংযোগের শব্দ। বাগাভীও নিজে একই কথা বলেন: সাক্ষী এরই পক্ষে সাক্ষ্য দিয়েছেন, অর্থাৎ এটা আল্লাহর কাছ থেকে এসেছে। এ পাঠে বাক্যটার সোজা অর্থ: একজন সাক্ষী কুরআনের উৎস সম্পর্কে সাক্ষ্য দিয়েছেন। অন্য পাঠগুলোতে সাক্ষী সাক্ষ্য দিয়েছেন এর সমান্তরাল কিছুর পক্ষে, আগের এমন এক ওহীর পক্ষে, যা নতুনটার সঙ্গে মিলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name Most Reports Give",
          "bn": "অধিকাংশ বর্ণনায় যাঁর নাম"
        },
        "p": [
          {
            "en": "Who is the witness? At-Tabari opens by saying the interpreters differed. The larger group names 'Abdullah ibn Salam (RA). At-Tabari carries this through chains from Sa'd ibn Abi Waqqas (RA); from 'Abdullah ibn Salam (RA) himself, reported as saying the verse was revealed about him; and from Ibn Abbas (RA), Mujahid, Qatadah, ad-Dahhak, al-Hasan, Ibn Zayd and 'Awf ibn Malik (RA). In Qatadah's wording, Ibn Salam believed in the Book of Allah, His Messenger and Islam, and was one of the rabbis of the Jews.",
            "bn": "সাক্ষী কে? তাবারী শুরুতেই বলেন, ব্যাখ্যাকারীরা এ নিয়ে মতভেদ করেছেন। বড় দলটি নাম বলে আবদুল্লাহ ইবনে সালাম (রাঃ)-এর। তাবারী এ মত আনেন বিভিন্ন সনদে: সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) থেকে, স্বয়ং আবদুল্লাহ ইবনে সালাম (রাঃ) থেকে, যিনি বলেছেন বলে বর্ণিত যে আয়াতটি তাঁকে নিয়েই নাযিল হয়েছে, আর ইবনে আব্বাস (রাঃ), মুজাহিদ, কাতাদা, দাহহাক, হাসান, ইবনে যায়দ ও আওফ ইবনে মালিক (রাঃ) থেকে। কাতাদার ভাষায়, ইবনে সালাম আল্লাহর কিতাব, তাঁর রাসূল ও ইসলামের উপর ঈমান এনেছিলেন, আর তিনি ছিলেন ইহুদিদের আহবার, অর্থাৎ বড় আলিমদের একজন।"
          },
          {
            "en": "Ibn Kathir lists those who said it is 'Abdullah ibn Salam: Ibn Abbas, Mujahid, ad-Dahhak, Qatadah, 'Ikrimah, Yusuf ibn 'Abdullah ibn Salam, Hilal ibn Yasaf, as-Suddi, ath-Thawri, Malik ibn Anas and Ibn Zayd. Al-Qurtubi names Ibn Abbas, al-Hasan, 'Ikrimah, Qatadah and Mujahid, and says Ibn Salam testified that the Messenger ﷺ is mentioned in the Torah and is a prophet from Allah. Al-Baghawi names Qatadah and ad-Dahhak. Al-Muyassar offers him as an example: a witness such as 'Abdullah ibn Salam.",
            "bn": "ইবনে কাসীর তালিকা দেন, কারা বলেছেন সাক্ষী আবদুল্লাহ ইবনে সালাম: ইবনে আব্বাস, মুজাহিদ, দাহহাক, কাতাদা, ইকরিমা, ইউসুফ ইবনে আবদুল্লাহ ইবনে সালাম, হিলাল ইবনে ইয়াসাফ, সুদ্দী, সাওরী, মালিক ইবনে আনাস ও ইবনে যায়দ। কুরতুবী নাম করেন ইবনে আব্বাস, হাসান, ইকরিমা, কাতাদা ও মুজাহিদের। তিনি বলেন, ইবনে সালাম সাক্ষ্য দিয়েছিলেন যে তাওরাতে রাসূল ﷺ-এর উল্লেখ আছে, আর তিনি আল্লাহর পক্ষ থেকে নবী। বাগাভী নাম করেন কাতাদা ও দাহহাকের। মুয়াসসার তাঁকে দৃষ্টান্ত হিসেবে আনে: আবদুল্লাহ ইবনে সালামের মতো কোনো সাক্ষী।"
          }
        ]
      },
      {
        "h": {
          "en": "A Makkan Surah, a Madinan Convert",
          "bn": "মক্কার সূরা, মদীনায় ইসলাম"
        },
        "p": [
          {
            "en": "Against this stands a reading held by Masruq and reported through ash-Sha'bi. At-Tabari gives it in several chains. In one, Masruq swears: by Allah, it was not revealed about 'Abdullah ibn Salam; it was revealed only in Makkah, and 'Abdullah accepted Islam only in Madinah. It was rather an argument Muhammad ﷺ held with his own people. The Torah is like the Qur'an and Musa is like Muhammad; they believed in the Torah and in their messenger, and you disbelieved.",
            "bn": "এর বিপরীতে আছে মাসরূকের মত, যা এসেছে শা'বীর মাধ্যমে। তাবারী এটা আনেন কয়েকটি সনদে। একটি বর্ণনায় মাসরূক কসম খেয়ে বলেন: আল্লাহর কসম, এটা আবদুল্লাহ ইবনে সালামকে নিয়ে নাযিল হয়নি। এটা নাযিল হয়েছে মক্কায়, আর আবদুল্লাহ ইসলাম গ্রহণ করেছেন মদীনায়। এটা ছিল নিজের কওমের সঙ্গে মুহাম্মাদ ﷺ-এর এক বিতর্ক। তাওরাত কুরআনের মতো, মূসা মুহাম্মাদের মতো। তারা তাওরাত ও তাদের রাসূলের উপর ঈমান এনেছিল, আর তোমরা অস্বীকার করলে।"
          },
          {
            "en": "Ash-Sha'bi, in at-Tabari's report, puts it sharply: people claim the witness is 'Abdullah ibn Salam, and I know better than that; 'Abdullah accepted Islam in Madinah, and Masruq told me that the Ha-Mim surahs came down in Makkah. On this view the witness is Musa ibn 'Imran (AS) and the like of the Qur'an is the Torah. Al-Baghawi gives the same from ash-Sha'bi quoting Masruq, adding that each of the two confirms the other.",
            "bn": "তাবারীর বর্ণনায় শা'বী কথাটা বলেন ধারালোভাবে: লোকে দাবি করে, সাক্ষী হলেন আবদুল্লাহ ইবনে সালাম, অথচ আমি এ বিষয়ে ভালো জানি। আবদুল্লাহ ইসলাম গ্রহণ করেছেন মদীনায়, আর মাসরূক আমাকে জানিয়েছেন, হা-মীম সূরাগুলো নাযিল হয়েছে মক্কায়। এ মতে সাক্ষী হলেন মূসা ইবনে ইমরান (আঃ), আর কুরআনের অনুরূপ হলো তাওরাত। বাগাভীও শা'বীর মাধ্যমে মাসরূক থেকে একই কথা আনেন, সঙ্গে যোগ করেন, দুটির প্রত্যেকটি অপরটিকে সত্য বলে।"
          },
          {
            "en": "Al-Qurtubi records the variations. From Masruq: it is Musa and the Torah, not Ibn Salam, because he became Muslim in Madinah and the surah is Makkan, and the words you disbelieved in it address Quraysh. From ash-Sha'bi: it is whoever of the Children of Israel believed in Musa and the Torah, since Ibn Salam, as al-Qurtubi gives his words, became Muslim two years before the Prophet's ﷺ death. Al-Baghawi adds two unnamed views: the witness is Musa ibn 'Imran, or a prophet of the Children of Israel.",
            "bn": "কুরতুবী মতগুলোর রকমফের লিখে রাখেন। মাসরূকের মতে: সাক্ষী মূসা ও তাওরাত, ইবনে সালাম নন। কারণ তিনি মুসলিম হয়েছেন মদীনায়, আর সূরাটি মক্কী। আর 'তোমরা তা অস্বীকার করলে' কথাটা কুরাইশকে লক্ষ করে। শা'বীর মতে: সাক্ষী বনী ইসরাঈলের সেই ব্যক্তি, যে মূসা ও তাওরাতের উপর ঈমান এনেছে। কারণ কুরতুবীর উদ্ধৃত ভাষায়, ইবনে সালাম মুসলিম হয়েছেন নবী ﷺ-এর ইন্তিকালের দুই বছর আগে। বাগাভী নাম ছাড়া আরও দুটি মত আনেন: সাক্ষী মূসা ইবনে ইমরান, অথবা বনী ইসরাঈলের কোনো এক নবী।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing the Two Readings",
          "bn": "দুই ব্যাখ্যার ওজন"
        },
        "p": [
          {
            "en": "At-Tabari's conclusion has two halves. He says Masruq's reading is closer to the outward wording: the verse comes in the course of Allah rebuking the idolaters of Quraysh and arguing against them for His Prophet ﷺ, it matches the verses before it, and no mention of the People of the Book has come before it. But, he continues, reports have come from a group of the Companions that it means 'Abdullah ibn Salam, most interpreters hold this, and they knew better the Qur'an's meanings and the occasion of its revelation.",
            "bn": "তাবারীর সিদ্ধান্তের দুটি অংশ। তিনি বলেন, আয়াতের বাহ্যিক শব্দের সঙ্গে মাসরূকের ব্যাখ্যাই বেশি মেলে। কারণ আয়াতটি এসেছে কুরাইশের মুশরিকদের তিরস্কার করে তাদের বিরুদ্ধে আল্লাহর নবী ﷺ-এর পক্ষে যুক্তি তোলার ধারায়। আগের আয়াতগুলোর সঙ্গে এর মিল আছে, আর এর আগে আহলে কিতাবের কোনো উল্লেখ আসেনি। তবে তিনি আরও বলেন, সাহাবীদের একটি দল থেকে বর্ণনা এসেছে যে এখানে আবদুল্লাহ ইবনে সালামকেই বোঝানো হয়েছে। অধিকাংশ ব্যাখ্যাকারও এ মতে, আর তাঁরাই কুরআনের অর্থ ও নাযিলের প্রেক্ষাপট বেশি জানতেন।"
          },
          {
            "en": "So his own gloss, as the fetched text runs, reads the verse with Ibn Salam: he is the witness, the like of the Qur'an is the Torah, and his testimony is that Muhammad ﷺ is written in the Torah as a prophet. Ibn Kathir, after quoting the Masruq and ash-Sha'bi line, says Ibn Jarir chose it; the reader can set that beside at-Tabari's own wording. Ibn Kathir's own view is that the witness is a generic term covering 'Abdullah ibn Salam and others, since the verse is Makkan and came before his Islam.",
            "bn": "তাই আমাদের সামনে থাকা পাঠে তাবারীর নিজের ব্যাখ্যা আয়াতটি পড়ে ইবনে সালামকে ধরে: তিনিই সাক্ষী, কুরআনের অনুরূপ তাওরাত, আর তাঁর সাক্ষ্য হলো, তাওরাতে মুহাম্মাদ ﷺ-কে নবী হিসেবে লেখা আছে। ইবনে কাসীর মাসরূক ও শা'বীর মত উদ্ধৃত করে বলেন, ইবনে জারীর এটাই গ্রহণ করেছেন। পাঠক কথাটা তাবারীর নিজের ভাষার পাশে রেখে দেখতে পারেন। ইবনে কাসীরের নিজের মত হলো, সাক্ষী শব্দটা জাতিবাচক, আবদুল্লাহ ইবনে সালাম ও অন্যদের সবাইকে শামিল করে। কারণ আয়াতটি মক্কী, তাঁর ইসলাম গ্রহণের আগেই নাযিল হয়েছে।"
          },
          {
            "en": "Two others offer ways to hold both. Al-Qurtubi, straight after quoting al-Qushayri on the Musa view, allows that a verse could come down in Madinah and be placed in a Makkan surah, since a verse would be revealed and the Prophet ﷺ would say, put it in such-and-such a surah. Ma'arif al-Qur'an says the verse names no particular scholar and does not say whether the testimony came before it or after, so understanding it does not hang on fixing the witness. This article leaves the question where they leave it.",
            "bn": "আরও দুজন দুই মতকে একসঙ্গে ধরে রাখার পথ দেখান। মূসা (আঃ)-এর পক্ষের মত নিয়ে কুশাইরীর কথা উদ্ধৃত করার ঠিক পরেই কুরতুবীর পাঠ সম্ভাবনা রাখে: কোনো আয়াত মদীনায় নাযিল হয়ে মক্কী সূরায় স্থান পেতে পারে, কারণ আয়াত নাযিল হলে নবী ﷺ বলতেন, এটা অমুক সূরায় রাখো। মাআরিফুল কুরআন বলে, আয়াতটি কোনো নির্দিষ্ট আলিমের নাম বলে না, সাক্ষ্যটা আগে হয়েছে না পরে হবে তাও বলে না। তাই সাক্ষীকে নির্দিষ্ট না করেও আয়াতটি বোঝা যায়। এই লেখাও প্রশ্নটা সেখানেই রেখে দেয়, যেখানে তাঁরা রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What Sa'd Never Heard Elsewhere",
          "bn": "সা'দ যা আর কারও বেলায় শোনেননি"
        },
        "p": [
          {
            "en": "The report most often cited is in Sahih al-Bukhari, number 3812, through Malik from 'Amir ibn Sa'd from his father, Sa'd ibn Abi Waqqas (RA): I never heard the Prophet ﷺ say of anyone walking on the earth that he is of the people of Paradise, except 'Abdullah ibn Salam. He said: and about him this verse was revealed, And a witness from the Children of Israel testified, the verse. He said: I do not know whether Malik said the verse, or whether it is in the hadith.",
            "bn": "সবচেয়ে বেশি উদ্ধৃত বর্ণনাটি সহীহ বুখারীতে, নম্বর ৩৮১২, মালিক থেকে, তিনি আমির ইবনে সা'দ থেকে, তিনি তাঁর পিতা সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) থেকে: পৃথিবীর বুকে চলাফেরা করা কারও সম্পর্কে নবী ﷺ-কে আমি বলতে শুনিনি যে সে জান্নাতবাসী, আবদুল্লাহ ইবনে সালাম ছাড়া। তিনি বলেন: আর তাঁকে নিয়েই এই আয়াত নাযিল হয়েছে, 'আর বনী ইসরাঈলের এক সাক্ষী সাক্ষ্য দিল', পুরো আয়াত। তিনি বলেন: আমি জানি না, 'আয়াত'-এর কথাটা মালিক বলেছেন, নাকি তা হাদীসেরই অংশ।"
          },
          {
            "en": "That last line matters for this verse. A narrator in the chain could not say whether the clause about the verse belonged to the hadith itself or was something Malik said while narrating it. The Arabic on the quranx page carries the line; the English rendering there stops before it. Al-Baghawi quotes the report through al-Bukhari with the same doubt. Ibn Kathir cites it as recorded by al-Bukhari, Muslim and an-Nasa'i, and Ma'arif al-Qur'an follows him; neither repeats the narrator's note.",
            "bn": "শেষ লাইনটা এই আয়াতের জন্য গুরুত্বপূর্ণ। সনদের একজন বর্ণনাকারী নিশ্চিত হতে পারেননি, আয়াতের কথাটা হাদীসেরই অংশ, নাকি বর্ণনা করতে গিয়ে মালিক নিজে তা বলেছেন। quranx-এর পাতায় আরবী পাঠে লাইনটা আছে, কিন্তু সেখানকার ইংরেজি অনুবাদ তার আগেই থেমে গেছে। বাগাভী বুখারীর সূত্রে বর্ণনাটা আনেন একই সংশয়সহ। ইবনে কাসীর জানান, এটা বুখারী, মুসলিম ও নাসাঈ বর্ণনা করেছেন, আর মাআরিফুল কুরআন তাঁকেই অনুসরণ করে। বর্ণনাকারীর ওই মন্তব্য দুজনের কেউই উল্লেখ করেননি।"
          },
          {
            "en": "At-Tirmidhi records a longer report from the nephew of 'Abdullah ibn Salam, set when 'Uthman (RA) was besieged, in which Ibn Salam tells the crowd that verses were revealed about him, naming this one and 13:43. At-Tirmidhi grades it hasan gharib at number 3256 and gharib where it appears again at number 3803. At-Tabari also carries longer accounts of Ibn Salam's testimony from Ibn Abbas, ad-Dahhak, al-Hasan, who says only that it reached him, and 'Awf ibn Malik, with chains and no grading.",
            "bn": "তিরমিযী আবদুল্লাহ ইবনে সালামের ভাতিজার সূত্রে একটা দীর্ঘ বর্ণনা আনেন। ঘটনা উসমান (রাঃ) যখন অবরুদ্ধ, তখনকার। সেখানে ইবনে সালাম লোকদের বলেন, তাঁকে নিয়ে কয়েকটি আয়াত নাযিল হয়েছে, আর নাম করেন এই আয়াত ও ১৩:৪৩ আয়াতের। তিরমিযী নম্বর ৩২৫৬-এ একে হাসান গরীব বলেছেন, আর নম্বর ৩৮০৩-এ একই বর্ণনা আবার এনে বলেছেন গরীব। তাবারীও ইবনে সালামের সাক্ষ্য নিয়ে দীর্ঘ কিছু বর্ণনা আনেন ইবনে আব্বাস, দাহহাক, হাসান ও আওফ ইবনে মালিক থেকে। হাসান শুধু বলেন, খবরটা তাঁর কাছে পৌঁছেছে। তাবারী সনদ দেন, কোনো মান নির্ণয় করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Belief Beside Proud Refusal",
          "bn": "ঈমানের পাশে অহংকারী অস্বীকার"
        },
        "p": [
          {
            "en": "Fa-amana wa-stakbartum: so he believed, and you were arrogant. Ibn Kathir explains that the witness believed because he recognised it was the truth, while you arrogantly refused to follow it. He quotes Masruq: this witness believed in his prophet and his book, and you disbelieved in your prophet and your book. On that wording the contrast is between someone faithful to the scripture he already held and hearers who turned from the messenger sent to them.",
            "bn": "ফাআমানা ওয়াসতাকবারতুম: সে ঈমান আনল, আর তোমরা অহংকার করলে। ইবনে কাসীর ব্যাখ্যা করেন, সাক্ষী ঈমান এনেছিলেন কারণ তিনি চিনেছিলেন এটাই সত্য, আর তোমরা অহংকার করে এর অনুসরণ থেকে বিরত থাকলে। তিনি মাসরূকের কথা আনেন: এই সাক্ষী তার নবী ও তার কিতাবের উপর ঈমান আনল, আর তোমরা অস্বীকার করলে তোমাদের নবী ও তোমাদের কিতাবকে। এই ভাষ্যে তুলনাটা দাঁড়ায় দুই পক্ষের মধ্যে। একদিকে এমন একজন, যিনি নিজের হাতে থাকা কিতাবের প্রতি বিশ্বস্ত থেকেছেন। অন্যদিকে শ্রোতারা, যারা তাদের কাছে পাঠানো রাসূল থেকে মুখ ফিরিয়ে নিল।"
          },
          {
            "en": "The closing words, inna Allaha la yahdi al-qawma az-zalimin, at-Tabari glosses this way: Allah does not grant success in reaching the truth and the straight path to those who wronged themselves by drawing His displeasure on themselves through disbelief. As-Sa'di adds the line that carries furthest: part of wrongdoing is arrogance towards the truth after one has been able to reach it. Al-Muyassar speaks of Allah not granting success to Islam and to reaching the truth for those who wronged themselves.",
            "bn": "শেষ কথা, ইন্নাল্লাহা লা ইয়াহদিল কাওমায যালিমীন। তাবারীর ব্যাখ্যা: যারা কুফরির মাধ্যমে নিজেদের উপর আল্লাহর অসন্তোষ ডেকে এনে নিজেদের প্রতি জুলুম করেছে, আল্লাহ তাদের সত্যে পৌঁছানোর আর সরল পথ পাওয়ার তাওফীক দেন না। সা'দী এমন একটি কথা যোগ করেন, যা অনেক দূর পর্যন্ত পৌঁছায়: সত্যে পৌঁছানোর সুযোগ পাওয়ার পরও তার সামনে অহংকার করা জুলুমেরই অংশ। মুয়াসসার বলে, যারা নিজেদের প্রতি জুলুম করেছে, আল্লাহ তাদের ইসলাম গ্রহণের আর সত্যে পৌঁছানোর তাওফীক দেন না।"
          },
          {
            "en": "This needs saying plainly. The verse names a believer from the Children of Israel and addresses deniers in the setting the commentators describe. It describes what the text describes and licenses nothing against any living person or community, and it supports no verdict, favourable or hostile, on any present-day people, religion or state. What it leaves with the reader is a question about himself: when the proof is in front of me, is it the evidence I am weighing, or my standing?",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি বনী ইসরাঈলের এক ঈমানদারের কথা বলে, আর অস্বীকারকারীদের সম্বোধন করে সেই প্রেক্ষাপটে, যা তাফসীরকারেরা বর্ণনা করেছেন। আয়াত যা বর্ণনা করে, তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। আজকের কোনো জাতি, ধর্ম বা রাষ্ট্র সম্পর্কে ভালো বা মন্দ কোনো রায়ও এ থেকে টানা যায় না। পাঠকের হাতে আয়াতটি রেখে যায় নিজের সম্পর্কে একটি প্রশ্ন: প্রমাণ যখন চোখের সামনে, তখন আমি কি প্রমাণটাকে মাপছি, নাকি নিজের মান-মর্যাদাকে?"
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
  },
  "46:21": {
    "sections": [
      {
        "h": {
          "en": "Told to Remember a Brother",
          "bn": "এক ভাইকে মনে করার আদেশ"
        },
        "p": [
          {
            "en": "Wa-dhkur akha 'Ad: and remember the brother of 'Ad. The surah has just shown, in 46:20, the deniers brought before the Fire, and now it turns to a story. At-Tabari reads the command as addressed to the Prophet Muhammad ﷺ: mention Hud to your people who reject the truth you brought, for Allah sent you to them as He sent Hud to 'Ad, and warn them that what came down on 'Ad for their disbelief could come down on them.",
            "bn": "ওয়াযকুর আখা ‘আদ: আর ‘আদের ভাইয়ের কথা স্মরণ করো। ঠিক আগে ৪৬:২০ আয়াতে সূরাটি দেখিয়েছে, অস্বীকারকারীদের জাহান্নামের সামনে হাজির করা হচ্ছে। এবার সে একটি কাহিনির দিকে ফেরে। তাবারীর পাঠে আদেশটা নবী মুহাম্মাদ ﷺ-এর প্রতি: যে সত্য আপনি এনেছেন তা যারা ফিরিয়ে দিচ্ছে, সেই কওমকে হূদের কথা শোনান। আল্লাহ যেমন হূদকে ‘আদের কাছে পাঠিয়েছিলেন, তেমনি আপনাকে পাঠিয়েছেন এদের কাছে। কুফরির কারণে ‘আদের ওপর যা নেমেছিল, এদের ওপরও তা নামতে পারে, এ কথা বলে তাদের সাবধান করুন।"
          },
          {
            "en": "Ibn Kathir puts the weight elsewhere: Allah speaks here consoling His Prophet over those of his people who denied him. Al-Qurtubi holds both. First, the Prophet ﷺ is to remind the idolaters of the story of 'Ad so that they take a lesson; then, introduced with 'it is said', he is to recall Hud's story within himself, to follow his example and to have his people's denial weigh less on him. As-Sa'di adds a third note: remember him with fine praise, for Hud (AS) was among the noble messengers Allah honoured with calling people to His religion.",
            "bn": "ইবন কাসীরের জোর অন্য জায়গায়। তাঁর মতে আল্লাহ এখানে নিজের নবীকে সান্ত্বনা দিচ্ছেন, কারণ তাঁর কওমের অনেকে তাঁকে মিথ্যাবাদী বলেছিল। কুরতুবী দুটো দিকই রাখেন। প্রথমত, নবী ﷺ মুশরিকদের ‘আদের কাহিনি মনে করিয়ে দেবেন, যাতে তারা শিক্ষা নেয়। তারপর 'বলা হয়' কথাটি দিয়ে আনেন দ্বিতীয় মত: তিনি নিজে মনে মনে হূদের কাহিনি স্মরণ করবেন, তাঁর পথ অনুসরণ করবেন, আর এতে নিজের কওমের অস্বীকার তাঁর কাছে হালকা হয়ে আসবে। সা'দী তৃতীয় একটি সুর যোগ করেন: তাঁকে স্মরণ করো সুন্দর প্রশংসার সঙ্গে। কেননা হূদ (আঃ) ছিলেন সেই সম্মানিত রাসূলদের একজন, যাঁদের আল্লাহ নিজের দ্বীনের দিকে ডাকার মর্যাদা দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Kin by Lineage, Not Creed",
          "bn": "বংশে ভাই, দ্বীনে নয়"
        },
        "p": [
          {
            "en": "The verse does not name the brother of 'Ad; the commentators do. At-Tabari, al-Baghawi, as-Sa'di and Ibn Kathir all say he is Hud (AS), and at-Tabari also carries the identification from Ibn Zayd. Ibn Kathir adds that Allah sent him to 'Ad al-ula, the first 'Ad, and al-Qurtubi gives his lineage as Hud ibn 'Abd Allah ibn Rabah. Ma'arif al-Qur'an, in its note on 46:21 to 46:28, refers the reader to the fuller account at 11:50, which itself calls him their brother: wa ila 'Adin akhahum Huda.",
            "bn": "আয়াতে ‘আদের ভাইয়ের নাম নেই, নাম দেন তাফসীরকারেরা। তাবারী, বাগাভী, সা'দী ও ইবন কাসীর সবাই বলেন, তিনি হূদ (আঃ)। তাবারী ইবন যায়দের সূত্রেও একই পরিচয় আনেন। ইবন কাসীর যোগ করেন, আল্লাহ তাঁকে পাঠিয়েছিলেন ‘আদুল উলা, অর্থাৎ প্রথম ‘আদের কাছে। কুরতুবী তাঁর বংশধারা দেন এভাবে: হূদ ইবন আবদুল্লাহ ইবন রাবাহ। মাআরিফুল কুরআন ৪৬:২১ থেকে ৪৬:২৮ আয়াতের আলোচনায় পাঠককে পাঠায় ১১:৫০ আয়াতের বিস্তারিত বর্ণনায়। সেখানেও তাঁকে বলা হয়েছে তাদের ভাই: ওয়া ইলা ‘আদিন আখাহুম হূদা।"
          },
          {
            "en": "What kind of brother? Al-Muyassar and al-Qurtubi answer in the same words: their brother in lineage, not in religion, fi n-nasab la fi d-din. Ma'arif al-Qur'an gives two reasons for the word: he belonged to their tribe, and he was their well-wisher as a brother is. The first is a fact of birth, the second a matter of manner. A warning from inside the family cannot be waved off as a stranger's meddling, and it carries the concern of someone whose own people they are.",
            "bn": "কেমন ভাই? মুয়াসসার আর কুরতুবী একই কথায় উত্তর দেন: বংশে তাদের ভাই, দ্বীনে নয়, ফিন নাসাবি লা ফিদ দ্বীন। মাআরিফুল কুরআন এ শব্দের দুই কারণ বলে। তিনি ছিলেন তাদেরই গোত্রের লোক, আর ভাইয়ের মতোই তাদের কল্যাণ চাইতেন। প্রথমটা জন্মের সূত্র, দ্বিতীয়টা আচরণের। পরিবারের ভেতর থেকে আসা সতর্কবাণীকে বাইরের লোকের নাক গলানো বলে উড়িয়ে দেওয়া যায় না। তাতে থাকে এমন মানুষের দরদ, যার নিজের লোক তারা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer That Includes Him",
          "bn": "যে দোয়ায় তিনিও শামিল"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches one narration here. He cites Ibn Majah, under the chapter 'Whoever supplicates should begin with himself', from Ibn 'Abbas, that the Messenger of Allah ﷺ said: yarhamuna Allahu wa akha 'Ad, 'May Allah have mercy on us and on the brother of 'Ad.' Checked against Ibn Majah's Sunan, number 3852, that short line is the whole of the Prophet's words. Ibn Majah records it without grading it, and this article adds no grading of its own.",
            "bn": "ইবন কাসীর এখানে একটি বর্ণনা জুড়ে দেন। ইবন মাজাহ থেকে তিনি উদ্ধৃত করেন, 'যে দোয়া করে সে যেন নিজেকে দিয়ে শুরু করে' শিরোনামের অধ্যায় থেকে। ইবন আব্বাস (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: ইয়ারহামুনাল্লাহু ওয়া আখা ‘আদ, 'আল্লাহ আমাদের প্রতি রহম করুন, আর ‘আদের ভাইয়ের প্রতিও।' ইবন মাজাহর সুনানে, হাদীস নম্বর ৩৮৫২, মিলিয়ে দেখা হয়েছে। নবীজির কথা বলতে এই ছোট্ট বাক্যটুকুই। ইবন মাজাহ এর কোনো মান নির্ধারণ করেননি, আর এ লেখাও নিজে থেকে কোনো মান যোগ করছে না।"
          },
          {
            "en": "Two points bear on the verse. The Prophet ﷺ uses the Qur'an's own phrase, akha 'Ad, rather than the name, so the title the verse gives Hud (AS) is the title he carries in prayer. And Ibn Majah places it in the chapter on beginning a supplication with oneself: mercy is asked for 'us' first, then for the brother of 'Ad. The messenger who once warned his own people is prayed for by a later messenger who was warning his.",
            "bn": "এতে আয়াতের সঙ্গে সম্পর্কিত দুটি বিষয় আছে। নবী ﷺ নাম না বলে কুরআনের নিজের শব্দটাই ব্যবহার করেছেন, আখা ‘আদ। অর্থাৎ আয়াত হূদ (আঃ)-কে যে পরিচয়ে ডেকেছে, দোয়াতেও তিনি সেই পরিচয়েই স্মরণীয়। আর ইবন মাজাহ বর্ণনাটি রেখেছেন নিজেকে দিয়ে দোয়া শুরু করার অধ্যায়ে: রহমত চাওয়া হয়েছে আগে 'আমাদের' জন্য, তারপর ‘আদের ভাইয়ের জন্য। যে রাসূল একদিন নিজের কওমকে সতর্ক করেছিলেন, তাঁর জন্য দোয়া করছেন পরের এক রাসূল, যিনি তখন সতর্ক করছিলেন নিজের কওমকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Long Curved Hills of Sand",
          "bn": "বাঁকা লম্বা বালির ঢিবি"
        },
        "p": [
          {
            "en": "Idh andhara qawmahu bil-Ahqaf: when he warned his people at al-Ahqaf. The word is a plural of hiqf, and the commentators define it from the language. At-Tabari: sand that stretches long without reaching the size of a mountain. Al-Qurtubi: great sand that stretches long and bends, short of a mountain. Al-Baghawi: the long, curved part of the sands, and from al-Kisa'i, sand that curves round. Ibn Kathir reports from Ibn Zayd a mountain of sand, and from 'Ikrimah the mountain and the cave.",
            "bn": "ইয আনযারা কাওমাহু বিল আহকাফ: যখন তিনি আহকাফে নিজের কওমকে সতর্ক করেছিলেন। শব্দটি হিকফের বহুবচন, আর তাফসীরকারেরা অর্থ নেন ভাষা থেকে। তাবারী বলেন, লম্বা হয়ে ছড়ানো বালি, যা পাহাড়ের সমান উঁচু হয় না। কুরতুবীর মতে বিশাল বালির স্তূপ, যা লম্বা হয়ে বেঁকে যায়, তবু পাহাড় হয়ে ওঠে না। বাগাভী বলেন বালির লম্বা বাঁকা অংশ, আর কিসাঈ থেকে আনেন গোল হয়ে ঘোরা বালি। ইবন কাসীর ইবন যায়দ থেকে বর্ণনা করেন বালির পাহাড়, আর ইকরিমা থেকে পাহাড় ও গুহা।"
          },
          {
            "en": "Where were these dunes? At-Tabari says the people of interpretation differed, and lists them. From Ibn 'Abbas, a mountain in ash-Sham, and from ad-Dahhak, a mountain called al-Ahqaf; from Ibn 'Abbas again, a valley between 'Uman and Mahra; from Ibn Ishaq, the sands from 'Uman to Hadramawt, and all of Yemen; from Mujahid, a land, and in another report a place in Hisma; and from Qatadah, that 'Ad were a tribe in Yemen, people of the sands overlooking the sea in a land called ash-Shihr.",
            "bn": "এই বালিয়াড়ি ছিল কোথায়? তাবারী বলেন, তাফসীরবিদদের মধ্যে মতভেদ আছে, তারপর মতগুলো সাজিয়ে দেন। ইবন আব্বাস (রাঃ) থেকে: শামের একটি পাহাড়। দাহহাক থেকে: আহকাফ নামের একটি পাহাড়। ইবন আব্বাস (রাঃ) থেকে আবার: উমান ও মাহরার মাঝের একটি উপত্যকা। ইবন ইসহাক থেকে: উমান থেকে হাদরামাওত পর্যন্ত বালি, আর গোটা ইয়েমেন। মুজাহিদ থেকে: একটি ভূমি, আর অন্য বর্ণনায় হিসমার একটি জায়গা। কাতাদা থেকে: ‘আদ ছিল ইয়েমেনের একটি গোত্র, সাগরের দিকে মুখ করা বালির মানুষ, শিহর নামের এক ভূমিতে।"
          },
          {
            "en": "The other works keep to a general description. Al-Muyassar: the abundant sands in the south of the Arabian Peninsula. As-Sa'di: the abundant sands in the land of Yemen. Al-Baghawi and al-Qurtubi relay Muqatil: the dwellings of 'Ad were in Yemen, in Hadramawt, at a place called Mahra, and they lived in tents and moved about in spring. Ma'arif al-Qur'an speaks of valleys surrounded by long, curved sand dunes. This article does not choose among these places, and adds none of its own.",
            "bn": "অন্য তাফসীরগুলো সাধারণ বর্ণনাতেই থাকে। মুয়াসসার বলে, আরব উপদ্বীপের দক্ষিণের বিস্তীর্ণ বালুকাভূমি। সা'দী বলেন, ইয়েমেনের বিস্তীর্ণ বালুকাভূমি। বাগাভী ও কুরতুবী মুকাতিলের কথা আনেন: ‘আদের বসতি ছিল ইয়েমেনে, হাদরামাওতে, মাহরা নামের এক জায়গায়। তারা তাঁবুতে থাকত, বসন্তে ঘুরে বেড়াত। মাআরিফুল কুরআন বলে লম্বা বাঁকা বালিয়াড়িতে ঘেরা উপত্যকার কথা। এর কোনো একটিকে এ লেখা বেছে নিচ্ছে না, নিজের থেকে নতুন কোনো জায়গাও যোগ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge That Changes Nothing",
          "bn": "যে জ্ঞানে কিছুই বদলায় না"
        },
        "p": [
          {
            "en": "At-Tabari's own verdict is worth reading slowly. The soundest thing to say, he writes, is that Allah has told us that 'Ad were warned by their brother Hud at al-Ahqaf, and that al-Ahqaf are the long, raised sands he has described. It may be a mountain in ash-Sham, a valley between 'Uman and Hadramawt, or ash-Shihr. Then the sentence that settles it: no obligation is fulfilled by knowing it, and no duty is lost by not knowing it.",
            "bn": "তাবারীর নিজের রায়টা ধীরে পড়ার মতো। তিনি লেখেন, সবচেয়ে সঠিক কথা এই: আল্লাহ জানিয়েছেন, ‘আদকে তাদের ভাই হূদ আহকাফে সতর্ক করেছিলেন। আর আহকাফ হলো তাঁর বর্ণিত সেই লম্বা উঁচু বালিয়াড়ি। হতে পারে তা শামের কোনো পাহাড়, হতে পারে উমান ও হাদরামাওতের মাঝের উপত্যকা, হতে পারে শিহর। তারপর আসে তাঁর মীমাংসার বাক্য: এটা জানলে কোনো ফরয আদায় হয় না, আর না জানলে কোনো ওয়াজিব নষ্ট হয় না।"
          },
          {
            "en": "Wherever it was, he goes on, its description stands: a people whose homes were on high, stretching sands. That is a useful discipline for reading the Qur'an's stories. Ma'arif al-Qur'an gives a reason the dunes are named at all: so that someone travelling in that region could find their places if he wished. Both keep the place in service of the lesson. The name locates the story, and the story is about a warning and a people's answer to it.",
            "bn": "জায়গাটা যেখানেই হোক, তিনি বলে চলেন, পরিচয় একই থাকে: এমন এক জাতি, যাদের ঘরবাড়ি ছিল উঁচু, লম্বা বালিয়াড়ির ওপর। কুরআনের কাহিনি পড়ার জন্য এ এক কাজের নিয়ম। মাআরিফুল কুরআন বালিয়াড়ির উল্লেখের একটা কারণও দেয়: ওই অঞ্চলে কেউ সফর করলে চাইলে যেন তাদের জায়গাগুলো খুঁজে পায়। দুজনেই জায়গাকে রাখেন শিক্ষার কাজে। নামটা কাহিনিকে ঠিকানা দেয়, আর কাহিনিটা এক সতর্কবাণী ও তার প্রতি এক জাতির জবাব নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Warners Before and Behind",
          "bn": "সামনে-পেছনে সতর্ককারী"
        },
        "p": [
          {
            "en": "Wa qad khalati n-nudhuru min bayni yadayhi wa min khalfihi: and warners had passed on before him and after him. Al-Qurtubi and al-Baghawi both gloss the opening as the messengers having passed on. At-Tabari reads the two phrases in time: min bayni yadayhi, before Hud, and min khalfihi, after Hud, messengers who went with warnings to their nations. Al-Qurtubi gives the same from al-Farra', and al-Muyassar agrees. At-Tabari also reports that the reading of 'Abd Allah has wa min ba'dihi, 'and after him'; al-Qurtubi names him as Ibn Mas'ud.",
            "bn": "ওয়া কাদ খালাতিন নুযুরু মিম বাইনি ইয়াদাইহি ওয়া মিন খালফিহি: আর তাঁর আগে ও পরে সতর্ককারীরা গত হয়েছেন। কুরতুবী ও বাগাভী দুজনেই প্রথম অংশের অর্থ করেন, রাসূলগণ গত হয়ে গেছেন। তাবারী দুটি শব্দগুচ্ছকে পড়েন সময়ের হিসেবে। মিম বাইনি ইয়াদাইহি মানে হূদের আগে, মিন খালফিহি মানে হূদের পরে। এঁরা সেই রাসূল, যাঁরা নিজ নিজ উম্মতের কাছে সতর্কবাণী নিয়ে গেছেন। কুরতুবী ফাররা থেকে একই অর্থ আনেন, মুয়াসসারও তা-ই বলে। তাবারী আরও জানান, আবদুল্লাহর কিরাআতে আছে ওয়া মিম বা‘দিহি, অর্থাৎ 'আর তাঁর পরে'। কুরতুবী তাঁকে চিহ্নিত করেন ইবন মাসউদ (রাঃ) হিসেবে।"
          },
          {
            "en": "Ibn Kathir reads the same words in space rather than time. Allah, he explains, had sent messengers and warners to the towns around the land of 'Ad. He compares 2:66, where a punishment was made an example li-ma bayna yadayha wa ma khalfaha, and 41:13 and 41:14, where messengers came to 'Ad and Thamud min bayni aydihim wa min khalfihim, saying: worship none but Allah. So one phrase carries two readings in these commentaries, before and after in time, and around in place. The article sets both down and chooses neither.",
            "bn": "ইবন কাসীর একই শব্দ পড়েন সময়ের বদলে স্থানের হিসেবে। তিনি বুঝিয়ে বলেন, ‘আদের দেশের আশপাশের জনপদগুলোতে আল্লাহ রাসূল ও সতর্ককারী পাঠিয়েছিলেন। তুলনার জন্য তিনি আনেন ২:৬৬ আয়াত, যেখানে এক শাস্তিকে দৃষ্টান্ত বানানো হয়েছে লিমা বাইনা ইয়াদাইহা ওয়ামা খালফাহা। আর আনেন ৪১:১৩ ও ৪১:১৪ আয়াত, যেখানে ‘আদ ও সামূদের কাছে রাসূলরা এসেছিলেন মিম বাইনি আইদীহিম ওয়া মিন খালফিহিম, এ কথা নিয়ে যে আল্লাহ ছাড়া কারও ইবাদত করো না। ফলে এই তাফসীরগুলোতে একটি বাক্যাংশের দুই পাঠ: সময়ের হিসেবে আগে-পরে, আর স্থানের হিসেবে চারপাশে। এ লেখা দুটোই তুলে রাখছে, কোনোটিকে বেছে নিচ্ছে না।"
          },
          {
            "en": "As-Sa'di draws out what the clause says about Hud himself. Because warners had gone before him and came after him, he says, Hud was not a novelty among them and did not depart from them. Al-Baghawi, after glossing the first phrase as before Hud, adds to the second only the words 'to their peoples'. On either reading the clause places Hud (AS) inside a long line of messengers sharing a single message, and that is part of why his story could be told to a later messenger as comfort.",
            "bn": "এ বাক্য হূদের নিজের অবস্থান সম্পর্কে কী বলে, সা'দী তা খুলে দেখান। তাঁর আগেও সতর্ককারীরা গেছেন, পরেও এসেছেন, তাই হূদ তাঁদের মধ্যে নতুন কিছু ছিলেন না, তাঁদের থেকে আলাদাও ছিলেন না। বাগাভী প্রথম অংশকে হূদের আগে বলে ব্যাখ্যা করার পর দ্বিতীয় অংশের সঙ্গে জুড়ে দেন শুধু 'তাদের কওমের কাছে' কথাটুকু। যে পাঠই ধরা হোক, বাক্যটি হূদ (আঃ)-কে বসায় একই বার্তা বহনকারী রাসূলদের দীর্ঘ সারিতে। এ কারণেও পরের এক রাসূলকে সান্ত্বনা দিতে তাঁর কাহিনি শোনানো যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Sentence Is It",
          "bn": "বাক্যটা কার মুখের"
        },
        "p": [
          {
            "en": "Then comes alla ta'budu illa-llah: that you worship none but Allah. Whose words are these? Al-Qurtubi poses the question outright. In his first reading the clause is a kalam mu'tarid, a parenthesis, and only after it does Hud speak: 'Then Hud said: Indeed, I fear for you the punishment of a mighty day.' Then, introduced with 'it is said', he gives the other reading: that alla ta'budu illa-llah is itself Hud's speech. He closes with wa-llahu a'lam, and Allah knows best.",
            "bn": "এরপর আসে আল্লা তা‘বুদূ ইল্লাল্লাহ: যেন তোমরা আল্লাহ ছাড়া কারও ইবাদত না করো। এ কথা কার? কুরতুবী প্রশ্নটা সরাসরি তোলেন। তাঁর প্রথম পাঠে এই অংশ কালাম মু‘তারিদ, মাঝখানে ঢুকে পড়া একটি বাক্য। এর পরেই কেবল হূদ কথা বলেন: 'তারপর হূদ বললেন, আমি তোমাদের ওপর এক মহাদিনের শাস্তির ভয় করছি।' এরপর 'বলা হয়' কথাটি দিয়ে তিনি আনেন অন্য পাঠ: আল্লা তা‘বুদূ ইল্লাল্লাহ কথাটিও হূদেরই মুখের। শেষে তিনি বলেন ওয়াল্লাহু আ‘লাম, আল্লাহই ভালো জানেন।"
          },
          {
            "en": "At-Tabari glosses the clause straight after the warners: do not associate anything with Allah in your worship of Him, make your worship His alone and single Him out as God, for there is no god but Him. He notes that 'Ad, as reported, worshipped idols. The report he cites from ad-Dahhak makes the words the message of every messenger: Allah never sent a messenger except with this, that Allah be worshipped. Al-Muyassar likewise makes it the warning the messengers brought before Hud and after him.",
            "bn": "তাবারী সতর্ককারীদের কথার পরপরই এ অংশের ব্যাখ্যা দেন: আল্লাহর ইবাদতে তাঁর সঙ্গে কিছুই শরীক কোরো না, ইবাদত খাঁটিভাবে তাঁর জন্যই রাখো, ইলাহ হিসেবে কেবল তাঁকেই মানো, কারণ তিনি ছাড়া কোনো ইলাহ নেই। তিনি জানান, বর্ণনা অনুযায়ী ‘আদ ছিল মূর্তিপূজারী। দাহহাক থেকে তিনি যে বর্ণনা আনেন, তাতে কথাটা হয়ে যায় প্রত্যেক রাসূলের বার্তা: আল্লাহ এমন কোনো রাসূল পাঠাননি, যিনি এই বার্তা নিয়ে আসেননি যে আল্লাহর ইবাদত করা হোক। মুয়াসসারও একে সেই সতর্কবাণী বলে, যা হূদের আগে ও পরে রাসূলগণ নিয়ে এসেছিলেন।"
          },
          {
            "en": "As-Sa'di reads it as Hud speaking. He runs the sentence on: Hud was not a novelty among the warners, saying to them, alla ta'budu illa-llah. He commanded them to worship Allah, which gathers every right word and praiseworthy deed, forbade them shirk and setting up rivals, and warned them of severe punishment if they did not obey. Ibn Kathir, after citing 41:13 and 41:14, adds: Hud said that to them. The readings differ on who speaks, not on what is said.",
            "bn": "সা'দী এটিকে হূদের কথা হিসেবে পড়েন। তিনি বাক্যটা টেনে নিয়ে যান: সতর্ককারীদের মধ্যে হূদ নতুন কেউ ছিলেন না, তিনি তাদের বলছিলেন, আল্লা তা‘বুদূ ইল্লাল্লাহ। তিনি তাদের আল্লাহর ইবাদতের আদেশ দেন, যার মধ্যে আছে প্রতিটি সঠিক কথা আর প্রশংসনীয় আমল। শিরক আর আল্লাহর সমকক্ষ দাঁড় করানো থেকে নিষেধ করেন, আর না মানলে কঠিন শাস্তির ভয় দেখান। ইবন কাসীর ৪১:১৩ ও ৪১:১৪ আয়াত উদ্ধৃত করার পর বলেন: হূদ তাদের এ কথা বলেছিলেন। পাঠগুলোর মতভেদ বক্তা নিয়ে, বক্তব্য নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day He Feared For Them",
          "bn": "যে দিনের ভয় তিনি করতেন"
        },
        "p": [
          {
            "en": "Inni akhafu 'alaykum 'adhaba yawmin 'azim: indeed, I fear for you the punishment of a mighty day. At-Tabari reports it as Hud's speech to his people: I fear for you, my people, because of your worship of other than Allah, the punishment of Allah on a mighty day, a day whose terror is great, and that is the Day of Resurrection. Al-Muyassar gives the same gloss in nearly the same words: the punishment of Allah on a day whose terror is great, the Day of Resurrection.",
            "bn": "ইন্নী আখাফু আলাইকুম আযাবা ইয়াওমিন আযীম: আমি তোমাদের ওপর এক মহাদিনের শাস্তির ভয় করছি। তাবারী একে হূদের কথা হিসেবেই উদ্ধৃত করেন, নিজের কওমকে বলা: হে আমার কওম, আল্লাহ ছাড়া অন্যের ইবাদতের কারণে আমি তোমাদের ওপর এক মহাদিনে আল্লাহর শাস্তির ভয় করছি। সে দিনের বিভীষিকা হবে বিশাল, আর সেটি কিয়ামতের দিন। মুয়াসসার প্রায় একই ভাষায় একই ব্যাখ্যা দেয়: এমন দিনে আল্লাহর শাস্তি, যার বিভীষিকা বিশাল, অর্থাৎ কিয়ামতের দিন।"
          },
          {
            "en": "As-Sa'di does not name the day. He says Hud warned them of severe punishment if they did not obey, and closes with a short line: that call did not benefit them. What 'Ad answered, and what reached them, belongs to the verses that follow. Here the sentence stops at fear. Hud does not taunt or threaten; he says akhafu, I fear, and the fear is 'alaykum, for you. That is how a brother speaks.",
            "bn": "সা'দী দিনটির নাম বলেন না। তিনি বলেন, না মানলে কঠিন শাস্তির ব্যাপারে হূদ তাদের সাবধান করেছিলেন। শেষে ছোট্ট একটি বাক্য: সেই দাওয়াত তাদের কোনো কাজে আসেনি। ‘আদ কী জবাব দিয়েছিল আর তাদের ওপর কী নেমেছিল, তা পরের আয়াতগুলোর বিষয়। এখানে বাক্যটা থেমে যায় ভয়ের কথায়। হূদ বিদ্রূপ করেন না, হুমকিও দেন না। তিনি বলেন আখাফু, আমি ভয় করছি, আর সে ভয় আলাইকুম, তোমাদের জন্য। ভাই এভাবেই কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Story, Not an Accusation",
          "bn": "কাহিনি, অভিযোগ নয়"
        },
        "p": [
          {
            "en": "One thing needs saying plainly. 'Ad, in the Qur'an's telling, are a people of the past who were warned and turned the warning away. This verse describes what the text describes: a brother's warning to his own people at al-Ahqaf. It licenses nothing against any living person or community. No commentary consulted here identifies 'Ad with any people living today, nor does this article. The dunes are no charge against whoever lives near them now.",
            "bn": "একটি কথা সোজাসুজি বলা দরকার। কুরআনের বর্ণনায় ‘আদ অতীতের এক জাতি, যাদের সতর্ক করা হয়েছিল আর তারা সে সতর্কবাণী ফিরিয়ে দিয়েছিল। আয়াতটি কেবল তা-ই বর্ণনা করে যা পাঠে আছে: আহকাফে নিজের কওমের প্রতি এক ভাইয়ের সতর্কবাণী। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। এখানে দেখা কোনো তাফসীর ‘আদকে আজকের কোনো জাতির সঙ্গে এক করেনি, এ লেখাও করছে না। ওই বালিয়াড়ির আশপাশে আজ যারা থাকে, তাদের বিরুদ্ধে এ কোনো অভিযোগ নয়।"
          },
          {
            "en": "The verse does give the reader places to stand. The commentaries read it as a warning to those who reject, comfort for the rejected messenger, and praise for the messenger remembered. When a truth I hold is waved away, I am not the first. When someone close to me warns me out of care, the kinship is a reason to listen, not to dismiss. And the heart of the warning does not change from messenger to messenger: worship none but Allah.",
            "bn": "আয়াতটি পাঠকের হাতে বরং তুলে দেয় দাঁড়ানোর কয়েকটি জায়গা। তাফসীরগুলো একে পড়ে প্রত্যাখ্যানকারীদের প্রতি সতর্কবাণী হিসেবে, প্রত্যাখ্যাত মানুষের জন্য সান্ত্বনা হিসেবে, আর যাঁকে স্মরণ করা হচ্ছে তাঁর প্রশংসা হিসেবে। আমার আঁকড়ে ধরা কোনো সত্যকে কেউ উড়িয়ে দিলে মনে রাখি, আমিই প্রথম নই। কাছের কেউ মমতা থেকে সাবধান করলে আত্মীয়তাটা শোনার কারণ, উড়িয়ে দেওয়ার নয়। আর রাসূল বদলালেও সতর্কবাণীর মূল কথা বদলায় না: আল্লাহ ছাড়া কারও ইবাদত কোরো না।"
          }
        ]
      }
    ]
  },
  "46:24": {
    "sections": [
      {
        "h": {
          "en": "From the Dare to the Sky",
          "bn": "চ্যালেঞ্জ থেকে আকাশে"
        },
        "p": [
          {
            "en": "The exchange before this verse ended in a dare. Hud's (AS) people told him in 46:22 to bring what he was promising them, if he was truthful, and in 46:23 he answered that the knowledge of it was with Allah alone. The Qur'an does not say how long they waited. Its next words are fa-lamma ra'awhu, then when they saw it. The story moves straight from the challenge to the thing challenged, with nothing in between, as though the reply to their words had appeared in the sky.",
            "bn": "আগের আয়াতগুলোর কথোপকথন থেমেছিল একটা চ্যালেঞ্জে। ৪৬:২২ আয়াতে হূদ (আঃ)-এর সম্প্রদায় তাঁকে বলেছিল, সত্যবাদী হলে যার ভয় দেখাচ্ছ তা নিয়ে এসো। ৪৬:২৩ আয়াতে তিনি জবাব দিয়েছিলেন, এর জ্ঞান কেবল আল্লাহর কাছে। কতদিন তারা অপেক্ষা করেছিল, কুরআন তা জানায় না। পরের শব্দগুলোই হল ফালাম্মা রাআওহু: অতঃপর যখন তারা তা দেখল। চ্যালেঞ্জ থেকে কাহিনি সোজা চলে যায় চ্যালেঞ্জের বিষয়ে, মাঝখানে আর কিছু নেই। যেন তাদের কথার জবাব ভেসে উঠল আকাশেই।"
          },
          {
            "en": "What did they see? The pronoun in ra'awhu, they saw it, has no noun before it in the verse. Al-Qurtubi reports al-Mubarrad's view that it points to something not yet named, which the next word, 'aridan, makes clear: they saw the cloud spread across the sky. He also reports a second view, that the pronoun reaches back to what you promise us in 46:22. At-Tabari, Ibn Kathir, al-Baghawi, as-Sa'di and the Muyassar all name the hidden object outright: it was the punishment they had been promised and had hurried.",
            "bn": "তারা কী দেখল? রাআওহু শব্দের সর্বনামটির আগে আয়াতে কোনো বিশেষ্য নেই। কুরতুবী মুবাররাদের মত উল্লেখ করেন: সর্বনামটি এমন কিছুর দিকে ইঙ্গিত করছে যার নাম এখনো আসেনি, আর পরের শব্দ 'আরিদান তা খুলে দেয়। অর্থাৎ তারা আকাশ জুড়ে ছড়ানো মেঘ দেখল। কুরতুবী আরেকটি মতও আনেন: সর্বনামটি ফিরে যায় ৪৬:২২ আয়াতের 'যার ভয় দেখাচ্ছ' কথাটির দিকে। তাবারী, ইবন কাসীর, বাগাভী, সা'দী ও মুয়াসসার সরাসরি নাম বলে দেন: তারা দেখেছিল সেই শাস্তি, যার প্রতিশ্রুতি তাদের দেওয়া হয়েছিল আর যা তারা তাড়াতাড়ি চেয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Cloud Lying Across the Horizon",
          "bn": "দিগন্তে আড়াআড়ি মেঘ"
        },
        "p": [
          {
            "en": "'Aridan is the word for what they saw, and at-Tabari explains how the Arabs used it. A cloud seen in some quarter of the sky towards evening, which by the next morning has evened out and drawn together, is called 'arid, because of its breadth, its 'ard, across part of the sky as it forms. He supports this with a line of al-A'sha about a man who spent the night watching such a cloud, the lightning at its edges like flames.",
            "bn": "তারা যা দেখেছিল তার নাম 'আরিদ। আরবরা শব্দটা কীভাবে ব্যবহার করত, তাবারী তা বুঝিয়ে দেন। সন্ধ্যার দিকে আকাশের কোনো এক কোণে মেঘ দেখা দিল, পরদিন সকালে তা সমান হয়ে ছড়িয়ে গেল, এক অংশ আরেক অংশের সঙ্গে মিশে গেল। এমন মেঘকে বলে 'আরিদ। কারণ জন্মের সময় আকাশের একাংশে তা চওড়া হয়ে থাকে, আর চওড়াকে আরবিতে বলে 'আরদ। প্রমাণ হিসেবে তাবারী আ'শার একটি পঙক্তি আনেন। সেখানে একজন সারা রাত জেগে এমন মেঘের দিকে চেয়ে থাকে, তার কিনারায় বিদ্যুৎ যেন আগুনের শিখা।"
          },
          {
            "en": "Al-Qurtubi gives the same root sense: the cloud is so named because it appears in the breadth of the sky, and he quotes al-Jawhari that the 'arid is the cloud stretching across the horizon. Al-Baghawi adds movement: a cloud that shows itself on a side of the sky and then covers the whole of it. As-Sa'di calls it something lying across the sky like a cloud. At-Tabari also reports a briefer gloss from Ibn Abbas: it is the wind when it has stirred up clouds.",
            "bn": "কুরতুবীও একই ধাতুগত অর্থ দেন: আকাশের প্রশস্ত অংশে দেখা দেয় বলে মেঘটির এই নাম। তিনি জাওহারীর কথা উদ্ধৃত করেন, 'আরিদ হল সেই মেঘ যা দিগন্ত জুড়ে আড়াআড়ি পড়ে থাকে। বাগাভী এতে গতি যোগ করেন। তাঁর ভাষায় এ এমন মেঘ যা আকাশের এক পাশে দেখা দেয়, তারপর গোটা আকাশ ঢেকে ফেলে। সা'দী বলেন, মেঘের মতো আকাশে আড়াআড়ি পড়ে থাকা কিছু। তাবারী ইবন আব্বাস (রাঃ) থেকে আরও ছোট একটি ব্যাখ্যা আনেন: এ হল সেই বাতাস, যা মেঘ উড়িয়ে তুলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Valleys That Had Waited",
          "bn": "অপেক্ষায় থাকা উপত্যকা"
        },
        "p": [
          {
            "en": "Mustaqbila awdiyatihim: heading towards their valleys. Awdiya is the plural of wadi, and as-Sa'di says what these valleys were to them: valleys that ran with water and watered their crops, with wells and pools from which they drank. Ibn Kathir says they had been in drought and were in need of rain. Al-Qurtubi says rain had been slow to reach them, and Qatada, in at-Tabari, that it had been withheld from them for a time. At-Tabari reads their hope as rain by which they would live.",
            "bn": "মুস্তাকবিলা আওদিয়াতিহিম: তাদের উপত্যকাগুলোর দিকে এগিয়ে আসছে। আওদিয়া হল ওয়াদি শব্দের বহুবচন। এই উপত্যকাগুলো তাদের কাছে কী ছিল, সা'দী তা বলেন: পানি বয়ে যেত, ফসলে সেচ হত, আর এখানকার কূপ ও জলাশয় থেকে তারা পান করত। ইবন কাসীর বলেন, তারা খরায় ভুগছিল, বৃষ্টির খুব প্রয়োজন ছিল। কুরতুবী বলেন, বৃষ্টি আসতে দেরি হচ্ছিল। তাবারীর বর্ণনায় কাতাদা বলেন, কিছুকাল ধরে তাদের বৃষ্টি বন্ধ ছিল। তাবারী তাদের আশাটা এভাবে পড়েন: এমন বৃষ্টি এসেছে, যাতে তারা প্রাণ ফিরে পাবে।"
          },
          {
            "en": "The commentators also say where the cloud came from. Al-Qurtubi reports from Ibn Abbas and others that it came from a valley out of which, by settled custom, whatever came was rain. Ibn Ishaq, in at-Tabari, says Allah drove the black cloud to 'Ad until it came out upon them from a valley of theirs called al-Mughith, and al-Baghawi gives the same name. Ma'arif al-Qur'an says the punishment came as a cloud that looked benign. They were not careless watchers; it came from exactly where rain had always come.",
            "bn": "মেঘটা কোন দিক থেকে এসেছিল, তাফসীরকারেরা তাও বলেন। কুরতুবী ইবন আব্বাস (রাঃ) ও অন্যদের সূত্রে আনেন, মেঘটা এসেছিল এমন এক উপত্যকা থেকে, যেখান থেকে যা আসত তা চিরাচরিতভাবে বৃষ্টিই হত। তাবারীর বর্ণনায় ইবন ইসহাক বলেন, আল্লাহ কালো মেঘটিকে 'আদের দিকে হাঁকিয়ে নিলেন। শেষে তা তাদের মুগীস নামের এক উপত্যকা দিয়ে তাদের উপর বেরিয়ে এল। বাগাভীও একই নাম বলেন। মাআরিফুল কুরআন বলে, শাস্তি এসেছিল এমন মেঘের রূপে, যা দেখতে নিরীহ। তারা অসতর্ক দর্শক ছিল না। মেঘটা ঠিক সেখান থেকেই এসেছিল, যেখান থেকে বৃষ্টি সবসময় আসত।"
          }
        ]
      },
      {
        "h": {
          "en": "Words Spoken in Welcome",
          "bn": "স্বাগত জানানোর কথা"
        },
        "p": [
          {
            "en": "Qalu hadha 'aridun mumtiruna: they said, this is a cloud that will rain on us. Ibn Kathir and al-Baghawi describe their mood with istabsharu, they rejoiced as at good news, and as-Sa'di says they spoke the words gladdened. Qatada, in at-Tabari, adds a harsher line, introduced with it was mentioned to us: they said, Hud has lied, Hud has lied. Then the prophet of Allah went out and looked the cloud over, and said: rather, it is what you sought to hurry.",
            "bn": "কালূ হাযা 'আরিদুম মুমতিরুনা: তারা বলল, এ তো মেঘ, আমাদের বৃষ্টি দেবে। ইবন কাসীর ও বাগাভী তাদের মনের অবস্থা বোঝাতে ইসতাবশারূ শব্দ ব্যবহার করেন, অর্থাৎ সুসংবাদ পাওয়ার মতো খুশি হল। সা'দী বলেন, কথাটা তারা বলেছিল আনন্দে। তাবারীর বর্ণনায় কাতাদা আরও কঠিন একটি কথা যোগ করেন, শুরু করেন 'আমাদের কাছে উল্লেখ করা হয়েছে' বলে: তারা বলেছিল, হূদ মিথ্যা বলেছে, হূদ মিথ্যা বলেছে। তখন আল্লাহর নবী বেরিয়ে এসে মেঘটা ভালো করে দেখলেন এবং বললেন: বরং এ হল তা-ই, যা তোমরা তাড়াতাড়ি চেয়েছিলে।"
          },
          {
            "en": "Al-Qurtubi pauses on the grammar of mumtiruna, raining on us. It carries a pronoun, which normally makes a word definite, yet it describes an indefinite noun, 'aridun. He quotes al-Jawhari glossing it as mumtirun lana and saying that, being definite, it cannot describe the indefinite 'arid. Al-Qurtubi disagrees: that, he says, goes against the grammarians, for this kind of annexation is verbal and not real, so the word stays indefinite and can describe an indefinite noun. The disagreement is kept as he reports it.",
            "bn": "মুমতিরুনা, অর্থাৎ আমাদের উপর বর্ষণকারী, শব্দটির ব্যাকরণ নিয়ে কুরতুবী একটু থামেন। শব্দটির সঙ্গে সর্বনাম যুক্ত, আর তাতে সাধারণত শব্দ নির্দিষ্ট হয়ে যায়। অথচ এটি বিশেষণ হয়ে বসেছে অনির্দিষ্ট বিশেষ্য 'আরিদুন-এর। কুরতুবী জাওহারীর কথা আনেন। জাওহারী এর অর্থ করেন মুমতিরুন লানা, আর বলেন, নির্দিষ্ট বলে এটি অনির্দিষ্ট 'আরিদের বিশেষণ হতে পারে না। কুরতুবী এতে একমত নন। তাঁর মতে কথাটা নাহুবিদদের মতের বিরোধী। এ ধরনের সম্বন্ধ কেবল শব্দগত, প্রকৃত নয়। তাই শব্দটি অনির্দিষ্টই থাকে এবং অনির্দিষ্ট বিশেষ্যের বিশেষণ হতে পারে। মতভেদটা যেমন তিনি জানিয়েছেন, তেমনই রাখা হল।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Voice Says Rather",
          "bn": "'বরং' বলছেন কে"
        },
        "p": [
          {
            "en": "Then comes bal: no, rather. The verse does not name who speaks it, and the commentators divide. Some hear Hud (AS) answering his people. The Muyassar spells it out: Hud said to them, it is not a cloud of rain and mercy as you supposed, but a cloud of the punishment you hurried. At-Tabari reads it the same way, as Allah reporting what His prophet Hud said to his people, and the reports he gathers from Qatada, 'Amr ibn Maymun and Ibn Abbas all put the answer in the prophet's mouth.",
            "bn": "এরপর আসে বাল: না, বরং। কথাটা কে বলছেন, আয়াত তা বলে না, আর এখানে তাফসীরকারেরা দুই ভাগ। কেউ কেউ শোনেন হূদ (আঃ)-এর কণ্ঠ, তিনি সম্প্রদায়কে জবাব দিচ্ছেন। মুয়াসসার কথাটা খুলে লেখে: হূদ তাদের বললেন, তোমরা যেমন ভেবেছ, এ বৃষ্টি ও রহমতের মেঘ নয়। এ সেই শাস্তির মেঘ, যা তোমরা তাড়াতাড়ি চেয়েছিলে। তাবারীও একইভাবে পড়েন: আল্লাহ এখানে জানাচ্ছেন, তাঁর নবী হূদ তাঁর সম্প্রদায়কে কী বলেছিলেন। কাতাদা, আমর ইবন মাইমূন ও ইবন আব্বাস (রাঃ) থেকে তিনি যে বর্ণনাগুলো আনেন, সবগুলোতেই জবাবটা নবীর মুখে।"
          },
          {
            "en": "Al-Qurtubi also takes Hud as the speaker and offers textual evidence: some read the verse as qala Hudun bal huwa, Hud said, rather it is. He reports a further reading, qul bal, say: rather, which makes it Allah telling the prophet what to say. Others introduce the words as Allah's own. Ibn Kathir sets qala Allahu ta'ala, Allah the Exalted said, before them; as-Sa'di writes qala ta'ala, and al-Baghawi yaqulu Allahu ta'ala. Within at-Tabari's own collection, Ibn Ishaq's report also presents them as Allah's speech.",
            "bn": "কুরতুবীও হূদকেই বক্তা ধরেন, আর এর পক্ষে পাঠের প্রমাণ দেন। কেউ কেউ আয়াতটি পড়েছেন কালা হূদুন বাল হুয়া, অর্থাৎ হূদ বললেন, বরং এ হল। তিনি আরেকটি পাঠও উল্লেখ করেন, কুল বাল: বলো, বরং। সে পাঠে কথাটা দাঁড়ায় নবীকে আল্লাহর শিখিয়ে দেওয়া জবাব। অন্যরা কথাগুলোকে আল্লাহর নিজের বাণী হিসেবে শুরু করেন। ইবন কাসীর এর আগে লেখেন কালাল্লাহু তা'আলা, মহান আল্লাহ বললেন। সা'দী লেখেন কালা তা'আলা, আর বাগাভী লেখেন ইয়াকূলুল্লাহু তা'আলা। তাবারীর নিজের সংকলনেই ইবন ইসহাকের বর্ণনা কথাগুলোকে আল্লাহর বাণী হিসেবে আনে।"
          },
          {
            "en": "This article does not choose between them. Each reading has its basis in what the commentators report, and on either reading the answer to their joy is the same correction. What the difference brings out is how closely the verse joins the two voices. On the first reading, the messenger who said in 46:23 that he only conveys what he was sent with is now the one who names what is coming. On the second, Allah answers their words directly, over the head of the people who had defied His messenger.",
            "bn": "এ লেখা দুই মতের কোনোটিকে বেছে নিচ্ছে না। তাফসীরকারদের বর্ণনায় দুটিরই ভিত্তি আছে, আর যেভাবেই পড়া হোক, তাদের আনন্দের জবাব একই সংশোধন। মতভেদটা বরং দেখায়, আয়াত দুই কণ্ঠকে কত কাছাকাছি বেঁধে রেখেছে। প্রথম পাঠে, যে রাসূল ৪৬:২৩ আয়াতে বলেছিলেন তিনি শুধু প্রেরিত বার্তা পৌঁছে দেন, তিনিই এখন জানিয়ে দিচ্ছেন কী আসছে। দ্বিতীয় পাঠে আল্লাহ নিজেই তাদের কথার জবাব দিচ্ছেন, সেই লোকদের, যারা তাঁর রাসূলকে অমান্য করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Thing They Hurried",
          "bn": "যা তারা তাড়াতাড়ি চেয়েছিল"
        },
        "p": [
          {
            "en": "Ma ista'jaltum bihi: that which you sought to hasten. Ibn Kathir, as-Sa'di and at-Tabari each tie it to the dare of 46:22: this is the punishment of which you said, bring us what you promise us, if you are of the truthful. As-Sa'di puts it more sharply: this is what you brought upon yourselves when you said that. Ibn Kathir, on 46:22, says they sought to hasten the punishment believing it would never come, and compares 42:18, where those who do not believe in the Hour seek to hasten it.",
            "bn": "মাসতা'জালতুম বিহী: যা তোমরা তাড়াতাড়ি চেয়েছিলে। ইবন কাসীর, সা'দী ও তাবারী প্রত্যেকে একে ৪৬:২২ আয়াতের চ্যালেঞ্জের সঙ্গে জুড়ে দেন। এ সেই শাস্তি, যার ব্যাপারে তোমরা বলেছিলে, সত্যবাদী হলে যার ভয় দেখাচ্ছ তা নিয়ে এসো। সা'দী আরও ধারালোভাবে বলেন, ওই কথা বলে তোমরা নিজেরাই নিজেদের উপর এটা ডেকে এনেছ। ইবন কাসীর ৪৬:২২ আয়াতের আলোচনায় বলেন, শাস্তি কখনো আসবে না ভেবেই তারা তা তাড়াতাড়ি চেয়েছিল। এর তুলনায় তিনি আনেন ৪২:১৮ আয়াত, যেখানে কিয়ামতে অবিশ্বাসীরা তা তাড়াতাড়ি আনতে চায়।"
          },
          {
            "en": "Then the verse names it: rihun fiha 'adhabun alim, a wind in which is a painful punishment. At-Tabari explains that wind restates what came before it, as though the verse said, rather it is a wind with a painful punishment in it. Al-Qurtubi says the wind by which they were punished arose out of the very cloud they had seen, and that Hud left from among them. The welcome and the ruin were the same thing seen twice: first as they hoped it was, then as it was.",
            "bn": "এরপর আয়াত জিনিসটার নাম বলে দেয়: রীহুন ফীহা 'আযাবুন আলীম, এমন বাতাস, যার ভেতরে যন্ত্রণাদায়ক শাস্তি। তাবারী ব্যাখ্যা করেন, 'বাতাস' শব্দটি আগের কথাটিকেই নতুন করে বলছে। যেন আয়াত বলছে, বরং এ এমন বাতাস, যার মধ্যে যন্ত্রণাদায়ক শাস্তি। কুরতুবী বলেন, যে বাতাসে তাদের শাস্তি হয়েছিল, তা উঠেছিল ঠিক সেই মেঘ থেকেই, যা তারা দেখেছিল। আর হূদ (আঃ) তাদের মাঝখান থেকে বেরিয়ে গিয়েছিলেন। যাকে তারা স্বাগত জানাল আর যা তাদের ধ্বংস করল, দুটো একই জিনিস। প্রথমবার দেখা গেল তাদের আশার চেহারায়, পরেরবার আসল চেহারায়।"
          },
          {
            "en": "Of the wind itself the commentators on this verse give only glimpses, since its work is the subject of the next verse. 'Amr ibn Maymun, in at-Tabari, says it began flinging down the tents and bringing a man who was away and throwing him down, and that it would lift a woman's camel-litter until it looked like a locust. Al-Baghawi and al-Qurtubi give the same image of the litter. The fuller account, of what the wind destroyed and what it left standing, belongs to 46:25.",
            "bn": "বাতাসটা নিজে কেমন ছিল, এ আয়াতের তাফসীরে তার কেবল ঝলক মেলে। কারণ বাতাসের কাজ পরের আয়াতের বিষয়। তাবারীর বর্ণনায় আমর ইবন মাইমূন বলেন, বাতাস তাঁবুগুলো ছুড়ে ফেলতে লাগল। যে লোক দূরে ছিল, তাকে উড়িয়ে এনে আছড়ে ফেলল। উটের পিঠের হাওদা শূন্যে তুলে নিত, শেষে সেটাকে পঙ্গপালের মতো দেখাত। বাগাভী ও কুরতুবীও হাওদার এই একই ছবি দেন। বাতাস কী ধ্বংস করল আর কী দাঁড়িয়ে রইল, সেই পূর্ণ বিবরণ ৪৬:২৫ আয়াতের।"
          }
        ]
      },
      {
        "h": {
          "en": "A Face That Changed at Clouds",
          "bn": "মেঘ দেখলে বদলে যাওয়া মুখ"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches to this verse a report from 'A'ishah (RA), citing it from Imam Ahmad and noting that al-Bukhari and Muslim also record it. In al-Bukhari's wording (4828) she said: I never saw the Messenger of Allah ﷺ laughing so fully that I could see his uvula; he used only to smile. And whenever he saw clouds or wind, it could be seen in his face. She said: O Messenger of Allah, when people see clouds they rejoice, hoping there will be rain in them, yet when you see them I see displeasure in your face.",
            "bn": "ইবন কাসীর এ আয়াতের সঙ্গে আয়েশা (রাঃ)-এর একটি বর্ণনা জুড়ে দেন। তিনি তা আনেন ইমাম আহমদ থেকে, আর জানান যে বুখারী ও মুসলিমও এটি বর্ণনা করেছেন। বুখারীর ভাষায় (৪৮২৮) তিনি বলেন: আমি কখনো রাসূলুল্লাহ ﷺ-কে এমনভাবে হাসতে দেখিনি যে তাঁর আলজিভ দেখা যায়। তিনি শুধু মুচকি হাসতেন। আর যখনই তিনি মেঘ বা বাতাস দেখতেন, তাঁর চেহারায় তা ফুটে উঠত। আয়েশা (রাঃ) বললেন: হে আল্লাহর রাসূল, লোকেরা মেঘ দেখলে খুশি হয়, এই আশায় যে তাতে বৃষ্টি আছে। অথচ আমি দেখি, আপনি মেঘ দেখলে আপনার চেহারায় অপছন্দের ছাপ পড়ে।"
          },
          {
            "en": "He said: O 'A'ishah, what assures me that there is no punishment in it? A people were punished with the wind, and a people saw the punishment and said, This is a cloud that will rain on us. The report is in al-Bukhari's Sahih, and Muslim records the same exchange from 'A'ishah (899). The Prophet ﷺ did not take the sight of a cloud as a promise. He remembered this verse, and the memory kept his hope in Allah's mercy from hardening into the presumption that a cloud could only mean good.",
            "bn": "তিনি বললেন: হে আয়েশা, এর ভেতরে যে শাস্তি নেই, তার নিশ্চয়তা আমাকে কে দেবে? এক জাতিকে বাতাস দিয়ে শাস্তি দেওয়া হয়েছিল। আর এক জাতি শাস্তি দেখে বলেছিল, এ তো মেঘ, আমাদের বৃষ্টি দেবে। বর্ণনাটি বুখারীর সহীহ গ্রন্থে আছে, আর মুসলিমও আয়েশা (রাঃ) থেকে একই কথোপকথন বর্ণনা করেছেন (৮৯৯)। নবী ﷺ মেঘ দেখাকেই প্রতিশ্রুতি ধরে নেননি। এ আয়াত তাঁর মনে ছিল। আল্লাহর রহমতের আশা তাঁর ছিল ঠিকই, কিন্তু সেই স্মৃতি আশাকে এমন নিশ্চিন্ততায় গড়াতে দেয়নি যে মেঘ মানেই কেবল কল্যাণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Our Own Weather",
          "bn": "নিজের আকাশ পড়া"
        },
        "p": [
          {
            "en": "This needs saying plainly. 'Ad are a people the Qur'an describes as destroyed, and this verse describes what the text describes: their dare, their reading of a cloud, and the punishment inside it. It licenses nothing against any living person or community. It names no present-day people as their heirs, and it gives no reader the right to point at a storm, a flood or a drought that strikes others and pronounce it their punishment. Hud (AS) himself said, in 46:23, that the knowledge is with Allah.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। 'আদ এমন এক জাতি, কুরআন যাদের ধ্বংসপ্রাপ্ত বলে বর্ণনা করে। এ আয়াত কেবল তা-ই বর্ণনা করে, যা পাঠে আছে: তাদের চ্যালেঞ্জ, মেঘ নিয়ে তাদের ভুল পাঠ, আর তার ভেতরের শাস্তি। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। আজকের কোনো জাতিকে এ আয়াত তাদের উত্তরসূরি বলে চিহ্নিত করে না। অন্যদের উপর আসা ঝড়, বন্যা বা খরার দিকে আঙুল তুলে সেটাকে তাদের শাস্তি বলে ঘোষণা করার অধিকারও কোনো পাঠককে দেয় না। হূদ (আঃ) নিজেই ৪৬:২৩ আয়াতে বলেছিলেন, এর জ্ঞান আল্লাহর কাছে।"
          },
          {
            "en": "What the verse does give is a mirror. The people of 'Ad knew their valleys and where rain came from, and the cloud came from exactly there. Their error lay further back than the cloud. They had already decided the warning was empty, so when something arrived they could read it only as good news. Wanting rain was not the fault; their valleys needed it. The fault was a reading of events that had quietly ruled out Allah's warning before anything had happened.",
            "bn": "আয়াত যা দেয়, তা এক আয়না। 'আদ জাতি নিজেদের উপত্যকা চিনত, জানত বৃষ্টি কোন দিক থেকে আসে, আর মেঘও এসেছিল ঠিক সেদিক থেকেই। তাদের ভুলের শুরু মেঘের অনেক আগে। সতর্কবাণী যে ফাঁকা, এ সিদ্ধান্ত তারা আগেই নিয়ে রেখেছিল। তাই কিছু এলে তারা সেটাকে কেবল সুসংবাদ হিসেবেই পড়তে পারত। বৃষ্টি চাওয়া দোষের ছিল না, তাদের উপত্যকার তা দরকারও ছিল। দোষ ছিল এমনভাবে ঘটনা পড়া, যেখানে কিছু ঘটার আগেই আল্লাহর সতর্কবাণীকে চুপিচুপি বাদ দেওয়া হয়ে গিয়েছিল।"
          },
          {
            "en": "For a reader today the verse turns into a few plain habits. Meet ease and good fortune with gratitude rather than the assumption that they prove Allah is pleased. Meet a warning, from the Qur'an or from a sincere person, with seriousness rather than a dare to prove itself. Never ask for proof in the form of punishment. And when the sky darkens, in weather or in life, remember what the Prophet ﷺ remembered: that a people once saw punishment coming and called it rain.",
            "bn": "আজকের পাঠকের জন্য আয়াতটি কয়েকটি সহজ অভ্যাসে রূপ নেয়। আরাম আর সৌভাগ্য এলে শুকরিয়া আদায় করুন, এটাকে আল্লাহর সন্তুষ্টির প্রমাণ ধরে নেবেন না। কুরআন থেকে হোক বা কোনো আন্তরিক মানুষের মুখ থেকে, সতর্কবাণী এলে গুরুত্ব দিন, প্রমাণ দেখানোর চ্যালেঞ্জ ছুড়বেন না। শাস্তির রূপে প্রমাণ কখনো চাইবেন না। আর আকাশ অন্ধকার হলে, আবহাওয়ায় হোক বা জীবনে, নবী ﷺ যা মনে রাখতেন তা মনে রাখুন: এক জাতি শাস্তি আসতে দেখে তাকে বৃষ্টি বলে ডেকেছিল।"
          }
        ]
      }
    ]
  },
  "46:35": {
    "sections": [
      {
        "h": {
          "en": "Patience After the Fire Scene",
          "bn": "আগুনের দৃশ্যের পরে সবর"
        },
        "p": [
          {
            "en": "Fa-sbir: so be patient. This is the last verse of al-Ahqaf, and it comes directly after 46:34, where those who disbelieved are set before the Fire and asked whether this is not the truth, and answer, yes, by our Lord. With that scene still in view, the Prophet ﷺ is told to endure. At-Tabari says God was steadying him to go on carrying the burden of the message and the weight of prophethood, and telling him to take as his model the messengers of resolve who came before him.",
            "bn": "ফাসবির: অতএব সবর করুন। এটি সূরা আহকাফের শেষ আয়াত। ঠিক আগে ৪৬:৩৪ আয়াতে কাফিরদের আগুনের সামনে দাঁড় করিয়ে জিজ্ঞেস করা হয়, এটা কি সত্য নয়? তারা বলে, হ্যাঁ, আমাদের রবের কসম। সেই দৃশ্য চোখের সামনে রেখেই নবী ﷺ-কে সবরের আদেশ দেওয়া হলো। তাবারী বলেন, রিসালাতের বোঝা আর নবুওয়াতের ভার বহন করে এগিয়ে যেতে আল্লাহ তাঁকে দৃঢ় রাখছিলেন। সেই সঙ্গে আদেশ দিচ্ছিলেন, আগের দৃঢ় সংকল্পের রসূলদের তিনি যেন আদর্শ হিসেবে ধরেন।"
          },
          {
            "en": "Patient over what? The commentators agree. Ibn Kathir says over his people's denial of him. At-Tabari says over the harm he met for God's sake from those of his people who called him a liar. The Muyassar says the same in brief. As-Sa'di adds a second strand to the command: that he should keep calling them to God, not only bear what they did. He then says the Prophet ﷺ obeyed, and endured as no prophet before him had endured, until God gave his religion the upper hand.",
            "bn": "সবর কিসের উপর? এ প্রশ্নে তাফসীরকারেরা একমত। ইবন কাসীর বলেন, কওম যে তাঁকে মিথ্যা প্রতিপন্ন করেছে, তার উপর। তাবারী বলেন, আল্লাহর পথে চলতে গিয়ে কওমের মিথ্যাবাদী বলা লোকদের কাছ থেকে যে কষ্ট এসেছে, তার উপর। মুয়াসসার সংক্ষেপে একই কথা বলে। সা'দী আদেশের সঙ্গে আরেকটি দিক জোড়েন: শুধু তাদের আচরণ সয়ে যাওয়া নয়, তাদের আল্লাহর দিকে ডেকে যেতে থাকা। তারপর তিনি বলেন, নবী ﷺ রবের আদেশ মেনেছিলেন। এমন সবর করেছিলেন যা আগের কোনো নবী করেননি, শেষে আল্লাহ তাঁর দ্বীনকে বিজয়ী করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight of 'Azm",
          "bn": "‘আযম শব্দের ভার"
        },
        "p": [
          {
            "en": "Ulu-l-'azm: the possessors of 'azm. First, what the word means. Al-Baghawi reports from Ibn 'Abbas that they were dhawu al-hazm, people of firm decision, and al-Qurtubi gives Ibn 'Abbas as saying people of firmness and patience. Al-Baghawi adds from ad-Dahhak: people of earnestness and patience. At-Tabari reports from Sa'id ibn Jubayr that God named it 'azm because of its intensity. Between them, the glosses join a settled will to the patience that keeps that will standing.",
            "bn": "উলুল ‘আযম: ‘আযমের অধিকারী। আগে দেখা যাক শব্দটার মানে। বাগাভী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, তাঁরা ছিলেন যাওয়ুল হাযম, অর্থাৎ দৃঢ় সিদ্ধান্তের মানুষ। কুরতুবী ইবন আব্বাস (রাঃ)-এর কথা আনেন এভাবে: দৃঢ়তা ও সবরের মানুষ। বাগাভী দাহহাক থেকে যোগ করেন: নিষ্ঠা ও সবরের মানুষ। তাবারী সাঈদ ইবন জুবাইর থেকে বর্ণনা করেন, এর তীব্রতার কারণেই আল্লাহ একে ‘আযম নাম দিয়েছেন। সব মিলিয়ে ব্যাখ্যাগুলো স্থির সংকল্পকে জুড়ে দেয় সেই সবরের সঙ্গে, যা সংকল্পটাকে দাঁড় করিয়ে রাখে।"
          },
          {
            "en": "Other descriptions frame them by what they bore. At-Tabari records a view that they were the ones tested for God's sake with trials in this world, whose trials only made them more earnest in God's command, such as Nuh, Ibrahim and Musa and those like them. As-Sa'di calls them the masters of creation, people of high resolve and lofty aims, whose patience was great and whose certainty was complete, and so the most worthy of being followed.",
            "bn": "অন্য বর্ণনায় তাঁদের চেনানো হয় তাঁরা কী সয়েছেন তা দিয়ে। তাবারী একটি মত উল্লেখ করেন: দুনিয়ায় আল্লাহর জন্য যাঁদের নানা বিপদে পরীক্ষা করা হয়েছে, আর বিপদ তাঁদের আল্লাহর কাজে আরও নিষ্ঠাবান করেছে, যেমন নূহ, ইবরাহীম ও মূসা (আঃ) এবং তাঁদের মতো আরও যাঁরা। সা'দী তাঁদের বলেন সৃষ্টির নেতা, উঁচু সংকল্প আর মহৎ লক্ষ্যের মানুষ। তাঁদের সবর ছিল বিশাল, ইয়াকীন ছিল পূর্ণ, তাই অনুসরণের সবচেয়ে বেশি হকদার তাঁরাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Messenger, or a Few",
          "bn": "সব রসূল, নাকি কয়েকজন"
        },
        "p": [
          {
            "en": "The next question turns on a small word, min, in min ar-rusul. If it takes a part, the resolute are some of the messengers. If it names the kind, all the messengers are meant. At-Tabari reports Ibn Zayd: every messenger was of resolve, for God took no messenger who was not. Al-Baghawi gives the same from Ibn Zayd and explains the grammar: min names the kind here, as in cloaks of silk. Al-Qurtubi records this reading from Ibn 'Abbas as well, and says 'Ali ibn Mahdi at-Tabari chose it.",
            "bn": "পরের প্রশ্নটা ঝুলে আছে ছোট্ট শব্দ মিন-এর উপর, মিনার রুসুল কথাটিতে। মিন যদি অংশ বোঝায়, তবে দৃঢ় সংকল্পের মানুষেরা রসূলদের মধ্যে কয়েকজন। আর যদি শ্রেণি বোঝায়, তবে সব রসূলই উদ্দেশ্য। তাবারী ইবন যায়দের কথা আনেন: প্রত্যেক রসূলই ছিলেন ‘আযমের অধিকারী। আল্লাহ এমন কাউকে রসূল বানাননি যাঁর ‘আযম ছিল না। বাগাভীও ইবন যায়দ থেকে একই কথা দেন এবং ব্যাকরণটা খুলে বলেন: এখানে মিন শ্রেণি বোঝায়, যেমন বলা হয় রেশমের চাদর। কুরতুবী এই মত ইবন আব্বাস (রাঃ) থেকেও উল্লেখ করেন, আর বলেন আলী ইবন মাহদী তাবারী এটিই গ্রহণ করেছেন।"
          },
          {
            "en": "Ibn Kathir gives the five as the best-known view, then allows that all the messengers may be meant, with min naming the kind, and closes, God knows best. Ma'arif al-Qur'an goes further: according to the authentic exegetes min is not partitive here, so all messengers are resolute. It then notes that the Qur'an itself sets some messengers above others, citing 2:253, so those who excel in resolve carry the title in a special way. The many lists that follow treat the phrase as naming a group within the messengers, and disagree over its members.",
            "bn": "ইবন কাসীর পাঁচজনের নামকে সবচেয়ে প্রসিদ্ধ মত হিসেবে দেন। তারপর সম্ভাবনা রাখেন যে সব রসূলই উদ্দেশ্য হতে পারেন, মিন তখন শ্রেণি বোঝাবে। শেষে বলেন, আল্লাহই ভালো জানেন। মাআরিফুল কুরআন আরও এগিয়ে যায়: নির্ভরযোগ্য মুফাসসিরদের মতে এখানে মিন অংশ বোঝায় না, তাই সব রসূলই দৃঢ় সংকল্পের। এরপর বলে, কুরআন নিজেই কিছু রসূলকে অন্যদের উপর মর্যাদা দিয়েছে, প্রমাণ হিসেবে আনে ২:২৫৩। তাই সংকল্পে যাঁরা অগ্রগণ্য, উপাধিটা বিশেষভাবে তাঁদের। সামনে যেসব তালিকা আসছে, সেগুলো কথাটিকে রসূলদের ভেতরের একটি দল হিসেবে পড়ে, আর দলে কারা, তা নিয়ে মতভেদ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Names on the Commentators' Lists",
          "bn": "তাফসীরকারদের তালিকায় যাঁরা"
        },
        "p": [
          {
            "en": "The best-known list has five names. At-Tabari reports it from 'Ata' al-Khurasani: Nuh, Ibrahim, Musa, 'Isa and Muhammad ﷺ. Al-Qurtubi gives it from Mujahid and calls them the bearers of the law-codes, and al-Baghawi gives the four from Ibn 'Abbas and Qatadah, five with the Prophet ﷺ. The Muyassar calls it the well-known view and tells the Prophet ﷺ, you are among them. Ibn Kathir and al-Baghawi point to 33:7 and 42:13, where the five are named together. Why they are singled out is taken up in the 42:13 article and not repeated here.",
            "bn": "সবচেয়ে প্রসিদ্ধ তালিকায় পাঁচজনের নাম। তাবারী এটি আতা আল-খুরাসানী থেকে বর্ণনা করেন: নূহ, ইবরাহীম, মূসা, ঈসা (আঃ) ও মুহাম্মাদ ﷺ। কুরতুবী একই তালিকা মুজাহিদ থেকে দেন এবং তাঁদের বলেন শরীয়তের বাহক। বাগাভী ইবন আব্বাস (রাঃ) ও কাতাদা থেকে চারজনের নাম দেন, নবী ﷺ-কে নিয়ে পাঁচজন। মুয়াসসার একে প্রসিদ্ধ মত বলে, আর নবী ﷺ-কে বলে, আপনিও তাঁদের একজন। ইবন কাসীর ও বাগাভী দেখান ৩৩:৭ আর ৪২:১৩ আয়াত, যেখানে এই পাঁচজনের নাম একসঙ্গে এসেছে। কেন তাঁদের আলাদা করে বলা হলো, সে আলোচনা ৪২:১৩ আয়াতের প্রবন্ধে আছে, এখানে আর তোলা হলো না।"
          },
          {
            "en": "Abu al-'Aliyah, in al-Qurtubi, named Nuh, Hud and Ibrahim, and said the Prophet ﷺ was commanded to be the fourth. As-Suddi counted six: Ibrahim, Musa, Dawud, Sulayman, 'Isa and Muhammad ﷺ. Muqatil, in both al-Qurtubi and al-Baghawi, also counted six, pairing each with what he endured: Nuh, Ibrahim, Ishaq, Ya'qub, Yusuf and Ayyub. A view both report without a name gives Nuh, Hud, Salih, Lut, Shu'ayb and Musa, told in sequence in al-A'raf and ash-Shu'ara'. Al-Hasan, in al-Qurtubi, made them four: Ibrahim, Musa, Dawud and 'Isa.",
            "bn": "কুরতুবীর বর্ণনায় আবুল আলিয়া নাম নেন নূহ, হূদ ও ইবরাহীম (আঃ)-এর। তিনি বলেন, নবী ﷺ-কে আদেশ দেওয়া হয়েছিল তাঁদের চতুর্থজন হতে। সুদ্দী গোনেন ছয়টি নাম: ইবরাহীম, মূসা, দাঊদ, সুলাইমান, ঈসা (আঃ) ও মুহাম্মাদ ﷺ। মুকাতিলও কুরতুবী ও বাগাভী দুজনের বর্ণনায় ছয়টি নাম দেন, প্রত্যেকের পাশে তিনি কী সয়েছেন তা জুড়ে: নূহ, ইবরাহীম, ইসহাক, ইয়াকূব, ইউসুফ ও আইয়ূব (আঃ)। নামহীন আরেক মত, যা দুজনেই আনেন, বলে নূহ, হূদ, সালিহ, লূত, শুআইব ও মূসা (আঃ), সূরা আ'রাফ ও শুআরায় যাঁদের কাহিনি পরপর এসেছে। কুরতুবীর বর্ণনায় হাসান গোনেন চারজন: ইবরাহীম, মূসা, দাঊদ ও ঈসা (আঃ)।"
          },
          {
            "en": "Still other readings start from a role or a passage. Al-Kalbi, and in al-Qurtubi also ash-Sha'bi and Mujahid in a second report, said they were those commanded to fight, who confronted the enemies of the religion openly. Another view takes the eighteen prophets named in al-An'am, because 6:90 follows their names with: those are the ones God guided, so follow their guidance. Al-Qurtubi says al-Hasan ibn al-Fadl chose it, and he lists all eighteen, from Ibrahim to Lut.",
            "bn": "আরও কিছু মত শুরু হয় কোনো দায়িত্ব বা কোনো আয়াতাংশ থেকে। কালবী বলেন, আর কুরতুবীর বর্ণনায় শা'বী এবং আরেক বর্ণনায় মুজাহিদও বলেন, তাঁরা হলেন সেই রসূলরা যাঁদের লড়াইয়ের আদেশ দেওয়া হয়েছিল, যাঁরা দ্বীনের শত্রুদের সামনে খোলাখুলি দাঁড়িয়েছিলেন। আরেক মত ধরে সূরা আন‘আমে নাম আসা ১৮ জন নবীকে, কারণ ৬:৯০ আয়াত তাঁদের নামের পরেই বলে: এঁরাই তাঁরা যাঁদের আল্লাহ হিদায়াত দিয়েছেন, অতএব তাঁদের হিদায়াতের অনুসরণ করুন। কুরতুবী বলেন, হাসান ইবনুল ফাদল এই মত গ্রহণ করেছেন। তিনি ইবরাহীম থেকে লূত (আঃ) পর্যন্ত ১৮ জনের নামই উল্লেখ করেন।"
          },
          {
            "en": "A few views are framed by who is left out. Ibn Jurayj, in al-Qurtubi, counted Isma'il, Ya'qub and Ayyub among them, and not Yunus, Sulayman or Adam (peace be upon them). Al-Qurtubi and al-Baghawi both record an unnamed view that counts every prophet except Yunus (AS), citing 68:48, be not like the companion of the fish. Al-Qurtubi also reports from some scholars a story of twelve prophets sent to the Children of Israel, ending it with God knows best. This article reports these views and judges no prophet, and it chooses none of the lists.",
            "bn": "কয়েকটি মত সাজানো হয়েছে কাকে বাদ রাখা হলো, তা দিয়ে। কুরতুবীর বর্ণনায় ইবন জুরাইজ ইসমাঈল, ইয়াকূব ও আইয়ূব (আঃ)-কে তাঁদের মধ্যে গণ্য করেন, ইউনুস, সুলাইমান ও আদম (আঃ)-কে নয়। কুরতুবী ও বাগাভী দুজনেই নামহীন এক মত উল্লেখ করেন, যা ইউনুস (আঃ) ছাড়া সব নবীকে গণ্য করে, দলিল হিসেবে আনে ৬৮:৪৮: মাছওয়ালার মতো হবেন না। কুরতুবী কিছু আলিম থেকে ১২ জন নবীর এক কাহিনিও বর্ণনা করেন, যাঁদের বনী ইসরাঈলের কাছে পাঠানো হয়েছিল, শেষে লেখেন, আল্লাহই ভালো জানেন। এ প্রবন্ধ মতগুলো শুধু তুলে ধরে। কোনো নবীর ব্যাপারে রায় দেয় না, কোনো তালিকাও বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Asking for It Sooner",
          "bn": "আগেভাগে চাওয়া নয়"
        },
        "p": [
          {
            "en": "Wa la tasta'jil lahum: and do not seek to hasten it for them. Al-Qurtubi notes that the object is left unsaid, and that it is the punishment. Ibn Kathir reads: do not hasten its arrival upon them, and sets beside it 73:11, leave Me with the deniers and give them respite a little, and 86:17, allow time for the disbelievers. At-Tabari says: do not hurry by asking your Lord for it on their account, for it will descend on them without fail.",
            "bn": "ওয়া লা তাসতা‘জিল লাহুম: আর তাদের জন্য তাড়াহুড়া করবেন না। কুরতুবী লক্ষ করেন, কিসের তাড়াহুড়া, সে কর্মটা উহ্য রাখা হয়েছে, আর সেটা হলো আযাব। ইবন কাসীর পড়েন: তাদের উপর আযাব নেমে আসা ত্বরান্বিত করতে চাইবেন না। পাশে রাখেন ৭৩:১১, আমাকে ছেড়ে দিন মিথ্যাবাদীদের সঙ্গে, আর তাদের কিছুটা অবকাশ দিন। আর ৮৬:১৭, কাফিরদের সময় দিন। তাবারী বলেন, রবের কাছে তাদের জন্য সেটা চেয়ে তাড়াহুড়া করবেন না, কারণ তা তাদের উপর নামবেই।"
          },
          {
            "en": "On what lay behind the command, the sources say little, and this article says no more. Al-Baghawi writes, with his own as though, that the Prophet ﷺ had grown somewhat weary and wished the punishment to fall on those who refused, so he was told to be patient and not hasten it. Muqatil, in al-Qurtubi, says the hastening meant praying against them. As-Sa'di turns it round: the deniers demanded the punishment out of ignorance, and he is told not to let that move him to pray against them, since all that is coming is near.",
            "bn": "আদেশটির পেছনে কী ছিল, সে বিষয়ে সূত্রগুলো অল্পই বলে, এ প্রবন্ধও তার বেশি বলবে না। বাগাভী নিজেই 'যেন' শব্দ দিয়ে সংশয় রেখে লেখেন, নবী ﷺ যেন কিছুটা ক্লান্ত হয়ে পড়েছিলেন। তিনি চাইছিলেন, যারা অস্বীকার করেছে তাদের উপর আযাব নামুক। তাই তাঁকে সবর করতে আর তাড়াহুড়া ছাড়তে বলা হলো। কুরতুবীর বর্ণনায় মুকাতিল বলেন, তাড়াহুড়া মানে তাদের বিরুদ্ধে বদদোয়া করা। সা'দী বিষয়টা উল্টো দিক থেকে দেখেন: আযাব চেয়ে তাড়া দিচ্ছিল মিথ্যাবাদীরাই, নিজেদের মূর্খতায়। নবী ﷺ-কে বলা হলো, তাদের এই আচরণ যেন তাঁকে বদদোয়ায় না টানে, কারণ যা আসছে তা কাছেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Lifetime Shrunk to an Hour",
          "bn": "দিনের এক প্রহরে গোটা জীবন"
        },
        "p": [
          {
            "en": "Ka'annahum yawma yarawna ma yu'adun: on the day they see what they are promised, it will be as though they had stayed only an hour of a day. Stayed where? At-Tabari, as-Sa'di and the Muyassar say in this world. Al-Baghawi and Ibn Kathir say in this world and in the barzakh, the interval after death. Al-Qurtubi gives two names: Yahya takes what they are promised as the punishment, so the stay is this world; an-Naqqash takes it as the Hereafter, so the stay is in their graves until they are raised.",
            "bn": "কাআন্নাহুম ইয়াওমা ইয়ারাওনা মা ইউ‘আদূন: যেদিন তারা দেখবে যার ওয়াদা তাদের দেওয়া হচ্ছে, সেদিন মনে হবে তারা দিনের এক প্রহরের বেশি থাকেনি। কোথায় থাকেনি? তাবারী, সা'দী ও মুয়াসসার বলেন, দুনিয়ায়। বাগাভী ও ইবন কাসীর বলেন, দুনিয়ায় এবং বারযাখে, মৃত্যুর পরের অন্তর্বর্তী জগতে। কুরতুবী দুটি নাম আনেন। ইয়াহইয়ার মতে ওয়াদার জিনিসটা আযাব, তাই অবস্থান মানে দুনিয়ার জীবন। নাক্কাশের মতে সেটা আখিরাত, তাই অবস্থান মানে পুনরুত্থান পর্যন্ত কবরে থাকা।"
          },
          {
            "en": "Why it feels so short is answered in several ways. At-Tabari says the severity of what falls on them makes them forget how many years and months they spent, and cites 23:112 and 23:113, where those asked reply, a day or part of a day. Al-Baghawi says what has passed, however long, becomes as though it never was. Al-Qurtubi adds: compared with the Day of Resurrection. Ibn Kathir cites 79:46 and 10:45. As-Sa'di draws the consolation: let their brief enjoyment not grieve you.",
            "bn": "এত ছোট কেন মনে হবে, তার জবাব আসে কয়েকভাবে। তাবারী বলেন, যে আযাব তাদের উপর নামবে তার কঠোরতা ভুলিয়ে দেবে কত বছর আর কত মাস তারা কাটিয়েছে। তিনি আনেন ২৩:১১২ ও ২৩:১১৩, যেখানে জিজ্ঞাসার জবাবে তারা বলে, এক দিন বা দিনের কিছু অংশ। বাগাভী বলেন, যা পেরিয়ে গেছে তা যত দীর্ঘই হোক, যেন কখনো ছিলই না। কুরতুবী যোগ করেন: কিয়ামতের দিনের তুলনায়। ইবন কাসীর আনেন ৭৯:৪৬ আর ১০:৪৫। সা'দী এখান থেকে সান্ত্বনা টানেন: তাদের সামান্য ভোগবিলাস যেন আপনাকে দুঃখ না দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "One Word Standing Alone",
          "bn": "একা দাঁড়ানো এক শব্দ"
        },
        "p": [
          {
            "en": "Then a single word stands on its own: balagh. At-Tabari reads it two ways, and Ibn Kathir passes both on from him. Either that brief stay was a balagh, a span that carried them through this world to their term, or this Qur'an and its reminder are a balagh, enough for them if they reflect. As-Sa'di also gives two: this world's pleasures are only a scant and troubled provision for a short present, or this Qur'an is a balagh and provision for the abode to come.",
            "bn": "তারপর একটি শব্দ আলাদা হয়ে দাঁড়ায়: বালাগ। তাবারী একে দুইভাবে পড়েন, আর ইবন কাসীর দুটি পাঠই তাঁর কাছ থেকে উদ্ধৃত করেন। প্রথম পাঠে, ওই সংক্ষিপ্ত অবস্থানটাই বালাগ, এমন এক সময় যা তাদের দুনিয়ার ভেতর দিয়ে নির্ধারিত মেয়াদ পর্যন্ত পৌঁছে দিয়েছে। দ্বিতীয় পাঠে, এই কুরআন আর তার উপদেশ তাদের জন্য বালাগ, যদি তারা ভাবে তবে এটুকুই যথেষ্ট। সা'দীও দুটি অর্থ দেন। দুনিয়ার ভোগ আর মজা কেবল অল্প সময় পার করার সামান্য, তিক্ততা মেশানো সম্বল। অথবা এই কুরআন বালাগ, আখিরাতের পথের পাথেয়।"
          },
          {
            "en": "Others keep to the Qur'an reading. Al-Baghawi says this Qur'an and its clear exposition are a balagh from God to you, balagh meaning tabligh, the conveying of a message. Al-Qurtubi gives that reading from al-Hasan and cites 14:52 and 21:106, where the same word describes revelation; he gives the other from Ibn 'Isa: that stay was a balagh. The Muyassar says: this is a balagh for them and for others.",
            "bn": "অন্যরা কুরআনের অর্থটাই ধরে রাখেন। বাগাভী বলেন, এই কুরআন আর এর সুস্পষ্ট বর্ণনা আল্লাহর পক্ষ থেকে তোমাদের কাছে বালাগ। বালাগ মানে তাবলীগ, বার্তা পৌঁছে দেওয়া। কুরতুবী এই অর্থ হাসান থেকে উল্লেখ করেন এবং আনেন ১৪:৫২ ও ২১:১০৬, যেখানে একই শব্দ ওহীর পরিচয় দেয়। অন্য অর্থটা তিনি দেন ইবন ঈসা থেকে: ওই অবস্থানটাই বালাগ। মুয়াসসার বলে, এটা তাদের জন্য এবং অন্যদের জন্যও বালাগ।"
          }
        ]
      },
      {
        "h": {
          "en": "None Perishes but the Perisher",
          "bn": "ধ্বংসের পথিকই ধ্বংস হয়"
        },
        "p": [
          {
            "en": "Fa-hal yuhlaku illa-l-qawmu-l-fasiqun: will any be destroyed except the defiantly disobedient people? At-Tabari reads the question as a denial, God destroys none but them, those who opposed His command, left His obedience and disbelieved in Him. Al-Qurtubi gives Ibn 'Abbas: those who went out from God's command. As-Sa'di adds that they refused the truth the messengers brought, after God had warned them and left them no excuse. Ibn Kathir calls this His justice: He punishes only whoever deserves it.",
            "bn": "ফাহাল ইউহলাকু ইল্লাল কওমুল ফাসিকূন: নাফরমান সম্প্রদায় ছাড়া আর কাউকে কি ধ্বংস করা হবে? তাবারী প্রশ্নটাকে পড়েন অস্বীকার হিসেবে: আল্লাহ তাদের ছাড়া কাউকে ধ্বংস করেন না। তারা সেই লোক, যারা তাঁর আদেশের বিরোধিতা করেছে, আনুগত্য ছেড়ে বেরিয়ে গেছে, তাঁকে অস্বীকার করেছে। কুরতুবী ইবন আব্বাস (রাঃ) থেকে আনেন: যারা আল্লাহর আদেশের বাইরে চলে গেছে। সা'দী যোগ করেন, আল্লাহ তাদের সতর্ক করেছেন, অজুহাতের পথ বন্ধ করেছেন, তারপরও তারা রসূলদের আনা সত্য ফিরিয়ে দিয়েছে। ইবন কাসীর একে বলেন আল্লাহর ইনসাফ: যে শাস্তির যোগ্য, তিনি কেবল তাকেই শাস্তি দেন।"
          },
          {
            "en": "The people the verse names heard the message and refused it, and the commentators define them by that refusal. The verse describes what it describes. It licenses nothing against any living person or community, and the destiny of no person is judged by this article or by its reader. The verse itself opens the other way: with patience, with continued calling to God, and with the outcome left to Him.",
            "bn": "আয়াত যাদের কথা বলছে, তারা বার্তা শুনেছিল এবং ফিরিয়ে দিয়েছিল। তাফসীরকারেরা তাদের চেনান ওই প্রত্যাখ্যান দিয়েই। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। আজ বেঁচে থাকা কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এটি দেয় না। এই প্রবন্ধ বা এর পাঠক কারও পরিণতির রায় দিতে পারে না। আয়াতটি নিজেই শুরু হয়েছে অন্য দিক থেকে: সবর দিয়ে, আল্লাহর দিকে ডেকে যাওয়া দিয়ে, আর ফয়সালা তাঁর হাতে ছেড়ে দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hope at the Very Edge",
          "bn": "একেবারে কিনারায় আশা"
        },
        "p": [
          {
            "en": "At-Tabari reports Qatadah on this clause: know that none perishes before God except a perisher, one who turned his back on Islam, or a hypocrite who affirmed with his tongue and contradicted with his deeds. Qatadah then adds, as something told to him, a saying of the Prophet ﷺ on intending good and evil that ends with the same phrase. Sahih Muslim (131) has it from Ibn 'Abbas, the Prophet ﷺ relating from his Lord:",
            "bn": "তাবারী এই অংশের ব্যাখ্যায় কাতাদার কথা আনেন: জেনে রাখুন, আল্লাহর কাছে ধ্বংস হয় কেবল সে-ই, যে ধ্বংসের পথ ধরেছে। যে ইসলামের দিকে পিঠ ফিরিয়েছে, অথবা যে মুনাফিক মুখে সত্য বলেছে আর কাজে উল্টোটা করেছে। এরপর কাতাদা, তাঁকে যেমন জানানো হয়েছিল, নবী ﷺ-এর একটি বাণী জোড়েন। ভালো ও মন্দের নিয়ত নিয়ে সেই বাণী শেষ হয় ঠিক এই কথায়। সহীহ মুসলিমে (১৩১) এটি আছে ইবন আব্বাস (রাঃ) থেকে, যেখানে নবী ﷺ তাঁর রবের কথা বর্ণনা করছেন:"
          },
          {
            "en": "\"Verily Allah recorded the good and the evil and then made it clear that he who intended good but did not do it, Allah recorded one complete good in his favour, but if he intended it and also did it, the Glorious and Great Allah recorded ten to seven hundred virtues and even more to his credit. But [if] he intended evil, but did not commit it, Allah wrote down full one good in his favour. If he intended that and also committed it, Allah made an entry of one evil against him.\"",
            "bn": "\"নিশ্চয়ই আল্লাহ নেকি ও গুনাহ লিখে রেখেছেন, তারপর তা স্পষ্ট করে দিয়েছেন। যে কোনো নেক কাজের ইচ্ছা করল কিন্তু করল না, আল্লাহ তার জন্য একটি পূর্ণ নেকি লেখেন। আর যদি ইচ্ছা করে কাজটাও করে, মহান আল্লাহ তার জন্য ১০ থেকে ৭০০ গুণ, এমনকি আরও বহু গুণ নেকি লেখেন। আর যদি কোনো মন্দ কাজের ইচ্ছা করে কিন্তু না করে, আল্লাহ তার জন্য একটি পূর্ণ নেকি লেখেন। আর যদি ইচ্ছা করে কাজটাও করে ফেলে, আল্লাহ তার বিরুদ্ধে একটিমাত্র গুনাহ লেখেন।\""
          },
          {
            "en": "Muslim then gives a second chain with the same meaning, which adds: \"Allah would even wipe out (the evil committed by a man) and Allah does not put to destruction anyone except he who is doomed to destruction.\" Muslim includes both chains in his Sahih. Al-Baghawi reports az-Zajjaj: with God's mercy and favour, none is destroyed except the fasiqun, and for this reason, he says, some held that no verse holds stronger hope. Al-Qurtubi records the same.",
            "bn": "মুসলিম এরপর একই অর্থে আরেকটি সনদ দেন, তাতে যোগ আছে: \"আল্লাহ (মানুষের করা গুনাহ) মুছেও দেন, আর আল্লাহর কাছে ধ্বংস হয় না কেউ, কেবল সে ছাড়া যে ধ্বংসের জন্যই নির্ধারিত।\" মুসলিম দুটি সনদই তাঁর সহীহ গ্রন্থে এনেছেন। বাগাভী যাজ্জাজের কথা আনেন: আল্লাহর রহমত ও অনুগ্রহ থাকতে নাফরমানরা ছাড়া কেউ ধ্বংস হয় না। এ কারণেই, তিনি বলেন, কেউ কেউ মনে করেছেন, আশার ব্যাপারে এর চেয়ে শক্তিশালী আয়াত আর নেই। কুরতুবীও একই কথা উল্লেখ করেন।"
          }
        ]
      }
    ]
  }
});
