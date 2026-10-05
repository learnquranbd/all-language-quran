/**
 * Tadabbur long-form articles — surah 53.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "53:23": {
    "sections": [
      {
        "h": {
          "en": "Names With Nothing Behind",
          "bn": "নামের পেছনে কিছু নেই"
        },
        "p": [
          {
            "en": "The verse follows directly on the naming of the three idols and the exposure of an unfair division in 53:19 to 53:22. In hiya illa asma'un sammaytumuha antum wa aba'ukum: they are nothing but names that you have named, you and your fathers. The sentence is built as a restriction, in ... illa, nothing but, and the same frame returns in the next clause: in yattabi'una illa z-zann, they follow nothing but assumption. Two exclusions in a single verse leave very little standing.",
            "bn": "তিনটি মূর্তির নাম নেওয়া আর এক অন্যায় ভাগাভাগির মুখোশ খুলে দেওয়ার পরপরই এ আয়াত আসে, ৫৩:১৯ থেকে ৫৩:২২ পর্যন্ত যার বর্ণনা। ইন হিয়া ইল্লা আসমাউন সাম্মাইতুমূহা আনতুম ওয়া আবাউকুম: এগুলো কিছু নাম ছাড়া আর কিছু নয়, যা তোমরা আর তোমাদের বাপদাদারা রেখেছ। বাক্যের গড়নটাই সীমা টেনে দেওয়ার: ইন ... ইল্লা, অর্থাৎ শুধু এটুকুই। পরের বাক্যাংশে একই ছাঁচ আবার ফিরে আসে: ইন ইয়াত্তাবিঊনা ইল্লায যান্না, তারা আন্দাজ ছাড়া কিছুই অনুসরণ করে না। এক আয়াতে দুটি নাকচ, দাঁড়িয়ে থাকার মতো প্রায় কিছুই আর বাকি থাকে না।"
          },
          {
            "en": "What does hiya, they, point to? At-Tabari makes it the names themselves: these names you have given, which are al-Lat, al-'Uzza and Manat the third, the other, are only names that you and your fathers before you gave, O you who associate partners with God. Al-Qurtubi and al-Baghawi make it the idols: these awthan, says al-Qurtubi, these asnam, says al-Baghawi. Ibn Kathir frames the verse as a rebuke for worshipping the idols and calling them gods, and the Muyassar says these idols are mere names with nothing of the attributes of perfection in them.",
            "bn": "হিয়া, অর্থাৎ এগুলো, বলতে কী বোঝানো হচ্ছে? তাবারীর মতে নামগুলোই। যে নাম তোমরা দিয়েছ, মানে লাত, উযযা আর তৃতীয় আরেকটি মানাত, এগুলো কেবল নাম, যা তোমরা আর তোমাদের আগের বাপদাদারা রেখেছ, হে আল্লাহর সঙ্গে শরিককারীরা। কুরতুবী আর বাগাভী সর্বনামটিকে মূর্তির দিকে ফেরান। কুরতুবী বলেন, এই আওসান। বাগাভী বলেন, এই আসনাম। ইবন কাসীর পুরো আয়াতকে দেখেন মূর্তিপূজা আর সেগুলোকে ইলাহ বলে ডাকার বিরুদ্ধে ভর্ৎসনা হিসেবে। মুয়াসসার বলে, এই মূর্তিগুলো নিছক নাম, পূর্ণতার কোনো গুণ এদের মধ্যে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Carved, Then Called Gods",
          "bn": "খোদাই করে ইলাহ ডাকা"
        },
        "p": [
          {
            "en": "Al-Qurtubi reads the naming as the last step of a making. Sammaytumuha, he says, means you carved them and named them gods. On antum wa aba'ukum he adds a single word, qalladtumuhum: you imitated your fathers in it. Ibn Kathir glosses the same phrase as min tilqa'i anfusikum, of your own accord, and his abridged English renders it as of your own desire. The fathers appear in the verse not as an excuse but as the channel through which the names arrived.",
            "bn": "কুরতুবীর চোখে নাম রাখাটা ছিল বানানোর শেষ ধাপ। তাঁর ব্যাখ্যায় সাম্মাইতুমূহা মানে, তোমরা ওগুলো খোদাই করেছ, তারপর ইলাহ নামে ডেকেছ। আনতুম ওয়া আবাউকুম প্রসঙ্গে তিনি শুধু এক শব্দ যোগ করেন, কাল্লাদতুমূহুম: এ ব্যাপারে তোমরা বাপদাদার অন্ধ অনুকরণ করেছ। ইবন কাসীর একই অংশের ব্যাখ্যা দেন মিন তিলকাই আনফুসিকুম, অর্থাৎ নিজেদের মনগড়া করে। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে কথাটা দাঁড়িয়েছে, নিজেদের ইচ্ছামতো। বাপদাদারা আয়াতে এসেছেন অজুহাত হিসেবে নয়, বরং সেই পথ হিসেবে, যে পথ ধরে নামগুলো এসে পৌঁছেছে।"
          },
          {
            "en": "Ibn Kathir's abridged English, in the passage covering 53:19 to 53:26, quotes Ibn Jarir (at-Tabari) on how two of the names were formed: they derived al-Lat from the name Allah and made it feminine, and al-'Uzza from God's name al-'Aziz. On that account the names borrowed their weight from the divine names they echoed, while nothing of the One so named stood behind them. The verse's charge fits it exactly: a word was coined, and the reality it implied was never sent down.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে ৫৩:১৯ থেকে ৫৩:২৬ পর্যন্ত আয়াতের আলোচনায় ইবন জারীর (তাবারী)-এর একটি উক্তি আছে, দুটি নাম কীভাবে গড়া হয়েছিল তা নিয়ে। আল্লাহ নাম থেকে তারা লাত বানিয়ে নিয়েছিল, স্ত্রীবাচক করে। আর আল্লাহর নাম আল-আযীয থেকে বানিয়েছিল উযযা। তা-ই যদি হয়, তবে নামগুলো ওজন ধার করেছিল আল্লাহর নামের প্রতিধ্বনি থেকে, অথচ সেই নামের মালিকের কিছুই তাদের পেছনে ছিল না। আয়াতের অভিযোগ ঠিক এখানেই খাপ খায়। একটা শব্দ বানানো হয়েছে, কিন্তু শব্দটা যে বাস্তবতার দাবি করে, তা কখনো নাজিল হয়নি।"
          },
          {
            "en": "The root of sammaytumuha, s-m-y, to name, returns four verses later. In 53:27 those who do not believe in the Hereafter layusammuna l-mala'ikata tasmiyata l-untha: they name the angels with female names. The passage thus binds two acts of naming together, idols given names and angels given names, and in both the name came from the namers, not from God. In 53:28 the refrain of this verse comes back, in yattabi'una illa z-zann. Those verses are pointers only here.",
            "bn": "সাম্মাইতুমূহা শব্দের ধাতু স-ম-য়, নাম রাখা। চারটি আয়াত পরে ধাতুটা আবার ফিরে আসে। ৫৩:২৭ আয়াতে যারা আখিরাতে বিশ্বাস করে না, তাদের সম্পর্কে বলা হয়েছে: লাইউসাম্মূনাল মালাইকাতা তাসমিয়াতাল উনসা, তারা ফেরেশতাদের নারীর নামে ডাকে। এভাবে এ অংশ দুটি নামকরণকে এক সুতোয় গাঁথে। মূর্তির নাম রাখা আর ফেরেশতার নাম রাখা, দুই ক্ষেত্রেই নাম এসেছে যারা রেখেছে তাদের কাছ থেকে, আল্লাহর কাছ থেকে নয়। ৫৩:২৮ আয়াতে এ আয়াতের ধুয়াটাও ফিরে আসে: ইন ইয়াত্তাবিঊনা ইল্লায যান্না। ওই আয়াতগুলো এখানে শুধু ইঙ্গিত হিসেবে রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant Sent Down",
          "bn": "নাজিল হয়নি কোনো সনদ"
        },
        "p": [
          {
            "en": "Ma anzala llahu biha min sultan: God has sent down for them no sultan. Most of the commentators fetched here read sultan as proof. Ibn Kathir glosses it min hujja, of proof. Al-Qurtubi says hujja wa la burhan, neither proof nor demonstration. Al-Baghawi says a proof for what you claim, that they are gods, and the Muyassar a proof that would confirm your claim about them. On this reading the verse asks for evidence and notes that none was ever given.",
            "bn": "মা আনযালাল্লাহু বিহা মিন সুলতান: আল্লাহ এগুলোর পক্ষে কোনো সুলতান নাজিল করেননি। এখানে যেসব তাফসীর দেখা হয়েছে, তার বেশির ভাগ সুলতান মানে করে প্রমাণ। ইবন কাসীরের ব্যাখ্যা মিন হুজ্জা, অর্থাৎ কোনো প্রমাণ। কুরতুবী বলেন, হুজ্জা ওয়া লা বুরহান, না প্রমাণ, না দলিল। বাগাভীর ভাষায়, ওগুলো ইলাহ বলে তোমরা যা দাবি করো, তার পক্ষে প্রমাণ। মুয়াসসারের ভাষায়, এমন প্রমাণ, যা তাদের নিয়ে তোমাদের দাবিকে সত্য বলে সমর্থন করবে। এ পাঠে আয়াতটি দলিল চায়, আর জানিয়ে দেয় যে কোনো দলিল কখনো দেওয়া হয়নি।"
          },
          {
            "en": "At-Tabari words it differently. Ma anzala llahu biha, he explains, means God did not make that permissible for you, nor give you leave for it: lam yubih Allahu dhalika lakum wa la adhina lakum bihi. Here the missing sultan is a warrant, a permission from Him who alone could grant it. The two readings are not the same. For most of these commentators the gap lies in the evidence; for at-Tabari it lies in the authorisation. Each is kept here as its holder gave it.",
            "bn": "তাবারী কথাটা বলেন অন্যভাবে। তাঁর ব্যাখ্যায় মা আনযালাল্লাহু বিহা মানে, আল্লাহ তোমাদের জন্য এটা বৈধ করেননি, এর অনুমতিও দেননি: লাম ইউবিহিল্লাহু যালিকা লাকুম ওয়া লা আযিনা লাকুম বিহি। এখানে যে সুলতান নেই, তা অনুমতিপত্র, এমন সত্তার দেওয়া অনুমতি, যিনি ছাড়া আর কেউ তা দিতে পারেন না। দুটি পাঠ এক নয়। এই তাফসীরকারদের বেশির ভাগের মতে ঘাটতিটা প্রমাণে, আর তাবারীর মতে ঘাটতিটা অনুমোদনে। এখানে প্রত্যেকের কথা তাঁর নিজের ভাষ্যেই রাখা হলো।"
          },
          {
            "en": "As-Sa'di ties the proof to its consequence. Sultan, he says, is proof and demonstration of the soundness of your way. Then he states a general rule: every matter for which God has sent down no sultan is false and corrupt, and is not to be taken as religion. He adds that the idolaters themselves were not following a demonstration that gave them certainty about their position. The rule concerns what may be taken as religion; it is a measure for claims, not a verdict on persons.",
            "bn": "সা'দী প্রমাণের সঙ্গে তার পরিণতিও জুড়ে দেন। তাঁর মতে সুলতান মানে তোমাদের পথ যে সঠিক, তার প্রমাণ ও দলিল। তারপর তিনি একটা সাধারণ নীতি বলেন: যে বিষয়ের পক্ষে আল্লাহ কোনো সুলতান নাজিল করেননি, তা বাতিল ও ভ্রষ্ট, তাকে দ্বীন হিসেবে গ্রহণ করা যায় না। তিনি আরও বলেন, মূর্তিপূজকেরা নিজেরাও এমন কোনো দলিলের অনুসরণ করছিল না, যা থেকে নিজেদের অবস্থান সম্পর্কে নিশ্চিত হওয়া যায়। নীতিটা হলো কোনটাকে দ্বীন বলে নেওয়া যাবে তার মাপকাঠি। দাবি যাচাইয়ের মানদণ্ড এটি, কোনো মানুষের উপর রায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "From Address to Report",
          "bn": "সম্বোধন থেকে বিবরণে"
        },
        "p": [
          {
            "en": "Read the verse aloud and the grammatical person changes in the middle. It begins with you: names you have named, you and your fathers. Then it turns: they follow nothing but assumption. Al-Qurtubi marks the turn in a phrase, 'ada min al-khitab ila l-khabar, it returned from address to report. Al-Baghawi says the same, raja'a ila l-khabar ba'da l-mukhataba. The idolaters are first spoken to and then spoken about, as though the verse steps back to describe them to the listener.",
            "bn": "আয়াতটি জোরে পড়লে মাঝপথে সম্বোধনের ধরন বদলে যায়। শুরু হয় সরাসরি তোমরা দিয়ে: নাম যা তোমরা রেখেছ, তোমরা আর তোমাদের বাপদাদারা। তারপর মোড় ঘোরে: তারা আন্দাজ ছাড়া কিছুই অনুসরণ করে না। কুরতুবী এই মোড়টা চিহ্নিত করেন এক বাক্যে: আদা মিনাল খিতাবি ইলাল খাবার, সম্বোধন থেকে বিবরণে ফিরে এল। বাগাভীও একই কথা বলেন: রাজাআ ইলাল খাবারি বা'দাল মুখাতাবা। মূর্তিপূজকদের প্রথমে সরাসরি বলা হচ্ছে, তারপর তাদের নিয়ে বলা হচ্ছে। যেন আয়াতটি এক পা পিছিয়ে শ্রোতার সামনে তাদের অবস্থা তুলে ধরছে।"
          },
          {
            "en": "Al-Qurtubi also records a variant reading. The common reading, he says, is yattabi'una, with the letter ya: they follow. 'Isa ibn 'Umar, Ayyub and Ibn as-Samayfa' read tattabi'una, with the letter ta: you follow, keeping the direct address, and he adds that this is the reading of Ibn Mas'ud and Ibn 'Abbas. On either reading the charge is the same. What changes is whether it is made to their face or reported about them to others.",
            "bn": "কুরতুবী এখানে কিরাআতের একটি ভিন্নতাও উল্লেখ করেন। তাঁর ভাষ্যে সাধারণ কিরাআত ইয়াত্তাবিঊনা, ইয়া অক্ষর দিয়ে: তারা অনুসরণ করে। ঈসা ইবন উমর, আইয়ুব আর ইবনুস সামাইফা পড়েছেন তাত্তাবিঊনা, তা অক্ষর দিয়ে: তোমরা অনুসরণ করো। এতে সরাসরি সম্বোধনটা বজায় থাকে। তিনি জানান, ইবন মাসউদ (রাঃ) আর ইবন আব্বাস (রাঃ)-এর কিরাআতও এটাই। যে কিরাআতই ধরা হোক, অভিযোগ একই থাকে। বদলায় শুধু এটুকু: কথাটা তাদের মুখের উপর বলা হচ্ছে, নাকি অন্যদের কাছে তাদের সম্পর্কে জানানো হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Guess and a Craving",
          "bn": "আন্দাজ আর মনের টান"
        },
        "p": [
          {
            "en": "In yattabi'una illa z-zann. At-Tabari explains: in the names they gave their gods, these idolaters follow nothing but the assumption that what they say is true, and not certainty. Ibn Kathir names what the assumption leaned on: they have no support except their good opinion of their fathers, who walked this false path before them. As-Sa'di is sharper. What led them to their position, he says, was corrupt assumption and stagnant ignorance, al-jahl al-kasid, together with what their selves desired.",
            "bn": "ইন ইয়াত্তাবিঊনা ইল্লায যান্না। তাবারীর ব্যাখ্যা: নিজেদের উপাস্যদের যে নাম তারা দিয়েছে, সে ব্যাপারে এই মুশরিকেরা কেবল এই ধারণার পেছনে চলে যে তাদের কথা সত্য। এর পেছনে কোনো ইয়াকীন, অর্থাৎ নিশ্চিত জ্ঞান, নেই। এই আন্দাজ কিসের উপর ভর করে ছিল, ইবন কাসীর তা বলে দেন। তাদের একমাত্র অবলম্বন বাপদাদার প্রতি ভালো ধারণা, যারা তাদের আগেই এই বাতিল পথে হেঁটেছিল। সা'দীর ভাষা আরও কড়া। তাঁর মতে তাদের এ অবস্থানে টেনে এনেছে ভ্রষ্ট ধারণা আর অচল মূর্খতা, আল-জাহলুল কাসিদ, সঙ্গে তাদের মনের চাওয়া।"
          },
          {
            "en": "Wa ma tahwa l-anfus: and what the selves desire. Here the commentators give different shades. At-Tabari reads it as their own desire, because they did not take these names from a revelation from God or from a messenger who told them; they made them up themselves, or took them from fathers who held the same disbelief. Ibn Kathir names the share their selves took in leadership and in honouring their ancient fathers. Al-Qurtubi says it is what the self inclines towards, and al-Baghawi what Shaytan made attractive to them.",
            "bn": "ওয়া মা তাহওয়াল আনফুস: আর মন যা চায়। এখানে তাফসীরকারদের ব্যাখ্যায় নানা রং দেখা যায়। তাবারীর মতে এটা তাদের নিজেদের প্রবৃত্তি। নামগুলো তারা আল্লাহর কোনো ওহি থেকে পায়নি, কোনো রাসূলও তাদের জানাননি। নিজেরাই বানিয়েছে, নয়তো নিয়েছে সেই বাপদাদার কাছ থেকে, যারা একই কুফরের উপর ছিল। ইবন কাসীর এখানে দেখেন নেতৃত্বের লোভ আর প্রাচীন পূর্বপুরুষদের মহিমা বাড়ানোয় মনের যে ভাগ, সেটা। কুরতুবীর মতে মন যেদিকে ঝোঁকে, তা-ই। বাগাভীর মতে শয়তান তাদের চোখে যা সুন্দর করে দেখিয়েছে।"
          },
          {
            "en": "The Muyassar speaks of selves turned aside from the sound fitra, and as-Sa'di of the shirk and innovations that agreed with their desires. These are shades rather than a dispute: one locates the desire in status, another in an outside whisper, another in a nature bent from its first shape. What they share is the verse's own pairing. Assumption supplies the claim and desire supplies the motive, and neither of them is knowledge.",
            "bn": "মুয়াসসার বলে, তাদের মন সুস্থ ফিতরা থেকে সরে গিয়েছিল। সা'দী বলেন সেই শিরক আর বিদআতের কথা, যা তাদের প্রবৃত্তির সঙ্গে মিলে যেত। এগুলো মতবিরোধ নয়, একই জিনিসের নানা দিক। কেউ চাওয়ার উৎস খোঁজেন মর্যাদার লোভে, কেউ বাইরের কুমন্ত্রণায়, কেউ আসল গড়ন থেকে বেঁকে যাওয়া স্বভাবে। সবার মিল আয়াতের নিজের জোড়ায়। দাবিটা জোগায় আন্দাজ, তাগিদটা জোগায় প্রবৃত্তি। আর এ দুটির কোনোটাই জ্ঞান নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Zann That Is Not Blamed",
          "bn": "যে যান্ন নিন্দনীয় নয়"
        },
        "p": [
          {
            "en": "Because the verse condemns following zann, a reader may ask about the many rulings Muslims act on with less than certain evidence. Ma'arif al-Qur'an takes this up in its note on the same refrain in 53:28, within a group that covers 53:23 to 53:28. The Arabic word zann, it says, is used in several senses. One of them is baseless thoughts, and that is the sense here, because baseless thoughts were the cause of idolatry and the verse sets out to remove that cause.",
            "bn": "আয়াতটি যান্নের অনুসরণকে নিন্দা করছে। তাহলে মুসলমানেরা যে অনেক বিধান নিশ্চিত প্রমাণের চেয়ে কম মানের দলিলের ভিত্তিতে মানেন, সেগুলোর কী হবে? এ প্রশ্ন পাঠকের মনে আসতে পারে। মাআরিফুল কুরআন ৫৩:২৩ থেকে ৫৩:২৮ পর্যন্ত আয়াতের দলবদ্ধ আলোচনায়, ৫৩:২৮ আয়াতে একই ধুয়ার প্রসঙ্গে বিষয়টি তোলে। সেখানে বলা হয়েছে, আরবি যান্ন শব্দ কয়েকটি অর্থে ব্যবহৃত হয়। তার একটি হলো ভিত্তিহীন ধারণা, আর এখানে অর্থ সেটাই। কারণ ভিত্তিহীন ধারণাই ছিল মূর্তিপূজার মূলে, আর আয়াতটি সেই মূলটাই উপড়ে ফেলতে চায়।"
          },
          {
            "en": "Zann is also used, Ma'arif goes on, as the opposite of yaqin, assured knowledge of something that really exists, such as what comes from the Qur'an and from reports carried by so many that agreement on a falsehood is impossible. Against that, zann can mean knowledge based on a proof that is not so certain as to rule out other possibilities, as with injunctions based on general narratives of the Prophet ﷺ. That kind is recognised by the Shari'ah, and the Ummah agrees that acting on it is obligatory. The verse, it concludes, denounces the first kind, so there is no contradiction.",
            "bn": "মাআরিফুল কুরআন আরও বলে, যান্ন শব্দ ইয়াকীনের বিপরীত অর্থেও আসে। ইয়াকীন হলো বাস্তবে আছে এমন কিছুর নিশ্চিত জ্ঞান, যেমন কুরআন থেকে পাওয়া জ্ঞান, কিংবা এত বিপুল সংখ্যক মানুষের বর্ণনা, যাদের সবাই মিথ্যার উপর একমত হওয়া অসম্ভব। এর বিপরীতে যান্ন কখনো এমন জ্ঞানকে বোঝায়, যা দলিলের উপর দাঁড়িয়ে আছে, তবে দলিলটা এত নিশ্চিত নয় যে অন্য সম্ভাবনা পুরোপুরি বাদ পড়ে যায়। নবী ﷺ-এর সাধারণ বর্ণনানির্ভর বিধানগুলো এর উদাহরণ। শরিয়ত এ ধরনের যান্নকে স্বীকৃতি দেয়, আর উম্মাহ একমত যে এর উপর আমল করা ওয়াজিব। সিদ্ধান্ত হলো, আয়াতটি প্রথম ধরনের যান্নকেই নিন্দা করে, তাই এতে কোনো বিরোধ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Guidance Had Already Come",
          "bn": "হেদায়াত আগেই এসেছিল"
        },
        "p": [
          {
            "en": "Wa laqad ja'ahum min rabbihimu l-huda: and guidance had certainly come to them from their Lord. At-Tabari spells out what that guidance was: the clear exposition, by the revelation given to Muhammad ﷺ, that worshipping these idols is not fitting, and that worship is fit only for God, the One, the Overpowering. Al-Qurtubi calls it the clarification from the Messenger that they are not gods. Al-Baghawi says the same and names its two carriers, the Book and the Messenger.",
            "bn": "ওয়া লাকাদ জাআহুম মির রাব্বিহিমুল হুদা: অথচ তাদের রবের কাছ থেকে তাদের কাছে হেদায়াত এসেই গিয়েছিল। সে হেদায়াত কী, তাবারী খুলে বলেন। মুহাম্মাদ ﷺ-এর উপর নাজিল হওয়া ওহির মাধ্যমে স্পষ্ট বর্ণনা এসেছিল যে এসব মূর্তির ইবাদত শোভা পায় না। ইবাদতের উপযুক্ত কেবল আল্লাহ, যিনি এক, যিনি সবার উপর প্রবল। কুরতুবীর ভাষায় এটা রাসূলের পক্ষ থেকে আসা সেই বর্ণনা, যা জানিয়ে দেয় এগুলো ইলাহ নয়। বাগাভীও একই কথা বলেন, আর এর দুটি বাহকের নাম নেন: কিতাব আর রাসূল।"
          },
          {
            "en": "Ibn Kathir widens the frame: God sent them messengers with the illuminating truth and the decisive proof, and yet they did not follow what was brought to them or submit to it. So at-Tabari, al-Qurtubi and al-Baghawi tie the guidance to the Prophet ﷺ and his revelation, while Ibn Kathir speaks of messengers in the plural. Both are recorded here as given. At-Tabari also quotes Ibn Zayd on this clause in three words, fa-ma ntafa'u bihi: and they did not benefit from it. The Muyassar ends its gloss the same way.",
            "bn": "ইবন কাসীর পরিসরটা বড় করেন। তাঁর ব্যাখ্যায় আল্লাহ তাদের কাছে রাসূলদের পাঠিয়েছিলেন উজ্জ্বল সত্য আর অকাট্য প্রমাণ দিয়ে, তবু তারা সে পথে চলেনি, মাথাও নোয়ায়নি। তাবারী, কুরতুবী আর বাগাভী হেদায়াতকে বাঁধেন নবী ﷺ আর তাঁর ওহির সঙ্গে। ইবন কাসীর বলেন বহুবচনে, রাসূলদের কথা। দুটি ভাষ্যই এখানে যেমন আছে তেমন রাখা হলো। তাবারী এ অংশে ইবন যায়দের তিনটি শব্দের একটি মন্তব্যও আনেন: ফামান তাফাঊ বিহি, কিন্তু তারা এতে কোনো উপকার নেয়নি। মুয়াসসারও তার ব্যাখ্যা শেষ করে একই কথায়।"
          },
          {
            "en": "As-Sa'di draws out the consequence. The guidance, he says, directs them in tawhid, in prophethood and in all that the servants need, and God has made it clear in the most complete way, with proofs that oblige them and others to follow it. After that clarification no excuse or argument remains for anyone. To stay on a path whose end is lasting misery is the most foolish folly and the worst wrong, and still, he adds, they nurse wishes and are deceived about themselves. The next verse, 53:24, asks: or will man have whatever he wishes?",
            "bn": "সা'দী এর পরিণতিটা টেনে বের করেন। তাঁর মতে এ হেদায়াত পথ দেখায় তাওহীদে, নবুওয়াতে, আর বান্দার প্রয়োজনের সব বিষয়ে। আল্লাহ তা সবচেয়ে পূর্ণ আর স্পষ্টভাবে বর্ণনা করেছেন, সঙ্গে দিয়েছেন এমন দলিল, যা তাদের এবং অন্যদেরও তা মেনে চলতে বাধ্য করে। এমন বর্ণনার পর কারও কোনো ওজর বা যুক্তি আর বাকি থাকে না। যে পথের শেষ চিরস্থায়ী দুর্ভাগ্য, তার উপর টিকে থাকা চরম বোকামি আর সবচেয়ে বড় জুলুম। তবু, তিনি যোগ করেন, তারা নানা আশা পোষে আর নিজেদের নিয়ে ধোঁকায় থাকে। ঠিক পরের আয়াত ৫৩:২৪ প্রশ্ন করে: মানুষ কি যা চায় তা-ই পায়?"
          }
        ]
      },
      {
        "h": {
          "en": "Reading It Without a Target",
          "bn": "কাউকে নিশানা না বানিয়ে"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse addresses the idolaters of the Prophet's ﷺ time and the names they gave to al-Lat, al-'Uzza and Manat. It describes what the text describes, and it licenses nothing against any living person or community. It is not a label to fix on any present-day group or practice. Its condemnation falls on a claim made without authority from God, and the commentators fetched here read it of those who made that claim, not of a people to be named today.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি নবী ﷺ-এর যুগের মূর্তিপূজকদের সম্বোধন করে, আর লাত, উযযা ও মানাতকে তারা যে নাম দিয়েছিল তার কথা বলে। আয়াত যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। এ যুগের কোনো দল বা কোনো রীতির গায়ে সেঁটে দেওয়ার তকমাও এটা নয়। এর নিন্দা পড়েছে আল্লাহর অনুমোদন ছাড়া করা এক দাবির উপর। এখানে দেখা তাফসীরগুলো আয়াতটি পড়ে সেই দাবিদারদের প্রসঙ্গেই, আজ কারও নাম ধরে চিহ্নিত করার জন্য নয়।"
          },
          {
            "en": "No fetched commentary attaches a hadith to this verse, so none is quoted. The reports in Ibn Kathir's grouped passage concern the idols themselves, in 53:19 and 53:20, and the wishing of 53:24, and they belong to those verses. The neighbours are pointers only: the unfair division of 53:21 and 53:22, which this verse answers, and the naming of angels with the refrain on assumption in 53:27 and 53:28, which carry its argument further.",
            "bn": "এখানে দেখা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই কোনো হাদীস উদ্ধৃত হলো না। ইবন কাসীরের দলবদ্ধ আলোচনায় যে বর্ণনাগুলো আছে, সেগুলো ৫৩:১৯ ও ৫৩:২০ আয়াতের মূর্তিগুলো নিয়ে, আর ৫৩:২৪ আয়াতের আশা-আকাঙ্ক্ষা নিয়ে। সেগুলো ওই আয়াতগুলোরই। পাশের আয়াতগুলো এখানে শুধু ইঙ্গিত। ৫৩:২১ ও ৫৩:২২ আয়াতের অন্যায় ভাগাভাগি, যার জবাব এ আয়াত। আর ৫৩:২৭ ও ৫৩:২৮ আয়াতে ফেরেশতাদের নামকরণ ও আন্দাজ নিয়ে সেই ধুয়া, যা এ আয়াতের যুক্তিকে আরও সামনে নিয়ে যায়।"
          },
          {
            "en": "What remains for a reader is the verse's test, turned inward. What do I hold that has no sultan behind it, only a habit, a good opinion of those who came before me, or a wish? The verse sets three things on one side, a name, a guess and a desire, and on the other a single thing, the guidance that came from their Lord. The question it leaves is not about anyone else's names but about what I myself follow, and whether I have let the guidance that reached me do its work.",
            "bn": "পাঠকের জন্য যা বাকি থাকে, তা আয়াতের পরীক্ষাটা নিজের দিকে ফেরানো। আমি এমন কী ধরে আছি, যার পেছনে কোনো সুলতান নেই? আছে শুধু অভ্যাস, আগের মানুষদের প্রতি ভালো ধারণা, নয়তো মনের ইচ্ছা? আয়াত এক পাল্লায় রাখে তিনটি জিনিস: নাম, আন্দাজ আর চাওয়া। অন্য পাল্লায় রাখে মাত্র একটি: তাদের রবের কাছ থেকে আসা হেদায়াত। যে প্রশ্ন আয়াতটি রেখে যায়, তা অন্য কারও নাম নিয়ে নয়। প্রশ্নটা আমি নিজে কী অনুসরণ করি তা নিয়ে, আর আমার কাছে যে হেদায়াত পৌঁছেছে, তাকে কাজ করতে দিয়েছি কি না, তা নিয়ে।"
          }
        ]
      }
    ]
  },
  "53:39-42": {
    "sections": [
      {
        "h": {
          "en": "An Ancient Charter",
          "bn": "এক প্রাচীন সনদ"
        },
        "p": [
          {
            "en": "These four short verses close an argument that begins at 53:33 with a portrait: a man who turned away, gave a little, and then withheld. Does he have knowledge of the unseen, the surah asks, or has he not been told what is in the scrolls of Musa (AS) and of Ibrahim (AS), who fulfilled his covenant? What follows from 53:38 onward is presented as the content of those earlier scriptures: no bearer of burdens bears the burden of another, and man has only that for which he strives.",
            "bn": "এই চারটি ছোট আয়াত এমন এক যুক্তির সমাপ্তি টানে, যা শুরু হয় 53:33 আয়াতে একটি প্রতিকৃতি দিয়ে: এক ব্যক্তি — যে মুখ ফিরিয়ে নিল, সামান্য দিল, তারপর বন্ধ করে দিল। সূরাটি জিজ্ঞেস করে, তার কাছে কি গায়েবের জ্ঞান আছে, নাকি তাকে জানানো হয়নি মূসা (আঃ)-এর সহীফায় কী আছে, আর ইবরাহীম (আঃ)-এর সহীফায় — যিনি তাঁর অঙ্গীকার পূর্ণ করেছিলেন? এরপর 53:38 আয়াত থেকে যা আসে তা উপস্থাপিত হয় সেই আগের কিতাবগুলোরই বিষয়বস্তু হিসেবে: কোনো বোঝা বহনকারী অন্যের বোঝা বহন করবে না, আর মানুষের জন্য কেবল তা-ই আছে যার জন্য সে চেষ্টা করেছে।"
          },
          {
            "en": "The framing matters: these are not rules invented for one community but principles Allah affirms from scriptures given long before. The verses answer a man who acted as though another could carry his burden; the answer he receives is a law as old as revealed religion itself. Responsibility cannot be transferred, and reward cannot be inherited from someone else's labor. Whatever else changed between the prophets, this clause of the charter did not.",
            "bn": "কাঠামোটিই গুরুত্বপূর্ণ: এগুলো কোনো এক উম্মতের জন্য বানানো নিয়ম নয়, বরং এমন নীতি, যা আল্লাহ বহু আগে দেওয়া কিতাবগুলো থেকে সত্যায়িত করছেন। আয়াতগুলো এমন এক ব্যক্তির জবাব, যে এমন আচরণ করছিল যেন অন্য কেউ তার বোঝা বইতে পারবে; সে যে উত্তর পায় তা ওহীভিত্তিক দ্বীনের সমান পুরোনো এক বিধান। দায় হস্তান্তর করা যায় না, আর অন্যের শ্রম থেকে প্রতিদান উত্তরাধিকারসূত্রে পাওয়া যায় না। নবীদের মাঝে আর যা-ই বদলে থাকুক, সনদের এই ধারাটি বদলায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Only What You Strive For",
          "bn": "কেবল যার জন্য তুমি চেষ্টা করেছ"
        },
        "p": [
          {
            "en": "53:39 states the rule with Arabic's tightest restriction: laysa lil-insani illa ma sa'a — there is not, for man, except what he strove for. Sa'a is a verb of effort, of laboring and pressing forward, and its verbal noun sa'y also names the walking between Safa and Marwah in the pilgrimage. Notice what the verse attaches ownership to: not to what a person achieved, gained, or was credited with, but to the striving itself. Outcomes pass through many hands; the effort alone is unambiguously yours.",
            "bn": "53:39 আয়াত নিয়মটি ঘোষণা করে আরবির সবচেয়ে আঁটসাঁট সীমাবদ্ধকরণে: লাইসা লিল-ইনসানি ইল্লা মা সা'আ — মানুষের জন্য তা ছাড়া কিছু নেই, যার জন্য সে চেষ্টা করেছে। সা'আ প্রচেষ্টার ক্রিয়াপদ — খাটা ও সামনে এগিয়ে যাওয়ার; আর তার ক্রিয়াবিশেষ্য সা'ঈ দিয়েই হজে সাফা ও মারওয়ার মাঝের চলাকে ডাকা হয়। লক্ষ করুন, আয়াতটি মালিকানা কীসের সঙ্গে জুড়ে দেয়: মানুষ যা অর্জন করল, পেল বা যার কৃতিত্ব পেল তার সঙ্গে নয় — খোদ চেষ্টাটির সঙ্গে। ফলাফল বহু হাত ঘুরে আসে; একমাত্র প্রচেষ্টাই দ্ব্যর্থহীনভাবে তোমার।"
          },
          {
            "en": "The mufassirun draw out the negative and positive sides together. Negatively, no one enters the account of that Day carrying credit generated by another's work while he himself slept — lineage, association, and wishful attachment purchase nothing. 2:281 warns of a Day when every soul is paid in full what it earned. Positively, nothing sincerely worked for is lost in transit: however small, however private, the striving is registered to its owner and to no one else.",
            "bn": "মুফাসসিরগণ নেতিবাচক ও ইতিবাচক দুটি দিকই একসঙ্গে টেনে আনেন। নেতিবাচক দিক: সেদিনের হিসাবে কেউ এমন পুঁজি নিয়ে ঢোকে না, যা তৈরি করেছে অন্যের শ্রম যখন সে নিজে ঘুমিয়েছিল — বংশ, সম্পর্ক আর আশাবাদী আঁকড়ে ধরা কিছুই কিনতে পারে না। 2:281 আয়াত সতর্ক করে এমন এক দিনের ব্যাপারে, যেদিন প্রতিটি প্রাণকে তার অর্জন পূর্ণমাত্রায় বুঝিয়ে দেওয়া হবে। ইতিবাচক দিক: আন্তরিকভাবে খাটা কোনো কিছু পথে হারায় না — যত ছোটই হোক, যত গোপনই হোক, চেষ্টাটি নিবন্ধিত হয় তার মালিকের নামে, আর কারও নামে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen, Then Paid in Full",
          "bn": "দেখা হবে, তারপর পূর্ণ প্রতিদান"
        },
        "p": [
          {
            "en": "53:40 promises that his striving will be seen — sawfa yura, a passive verb: the effort itself will be brought into view. 53:41 completes it: then he will be recompensed for it with the fullest recompense, al-jaza' al-awfa, where awfa is a superlative — not adequate payment but the most complete payment possible. The sequence is deliberate: first disclosure, then settlement. 99:7-8 gives the fine grain of the scales — whoever does an atom's weight of good will see it, and an atom's weight of evil will see it.",
            "bn": "53:40 আয়াত প্রতিশ্রুতি দেয়, তার চেষ্টা দেখা হবে — সাওফা ইউরা, কর্মবাচ্য ক্রিয়াপদ: প্রচেষ্টাটিকেই দৃষ্টির সামনে আনা হবে। 53:41 আয়াত তা সম্পূর্ণ করে: তারপর তাকে এর প্রতিদান দেওয়া হবে পূর্ণতম প্রতিদানে — আল-জাযাউল আওফা, যেখানে আওফা একটি অতিশয়ার্থক রূপ: যথেষ্ট পাওনা নয়, সম্ভাব্য সবচেয়ে পূর্ণ পাওনা। ধারাক্রমটি ইচ্ছাকৃত: আগে প্রকাশ, তারপর নিষ্পত্তি। 99:7-8 আয়াত দাঁড়িপাল্লার সূক্ষ্মতম এককটি দেয় — যে অণু পরিমাণ ভালো করবে সে তা দেখবে, আর যে অণু পরিমাণ মন্দ করবে সেও তা দেখবে।"
          },
          {
            "en": "For anyone whose best work goes unnoticed, this is the passage to stand on. The parent's unthanked years, the honesty that cost a promotion, the charity no ledger records — sawfa yura, it will be seen. And 76:22 addresses the people of the Garden with a sentence worth a lifetime: indeed this is a reward for you, and your striving has been appreciated. In both of the places the word mashkur, appreciated, occurs in the Quran — there and in 17:19 — it describes sa'y: Allah answers strivers with thanks.",
            "bn": "যার সেরা কাজগুলো কারও চোখে পড়ে না, তার দাঁড়ানোর জায়গা এই অংশটিই। মা-বাবার ধন্যবাদহীন বছরগুলো, যে সততার দাম গেছে পদোন্নতি, যে দান কোনো খাতায় ওঠেনি — সাওফা ইউরা, তা দেখা হবে। আর 76:22 আয়াত জান্নাতবাসীদের সম্বোধন করে এমন এক বাক্যে, যা এক জীবনের সমান দামি: নিশ্চয়ই এ তোমাদের প্রতিদান, আর তোমাদের প্রচেষ্টা সাদরে স্বীকৃত হয়েছে। কুরআনে মাশকূর — সাদরে স্বীকৃত — শব্দটি যে দুটি জায়গায় আছে — সেখানে এবং 17:19 আয়াতে — দুটিতেই তা বর্ণনা করছে সা'ঈকে: আল্লাহ চেষ্টাকারীদের জবাব দেন কৃতজ্ঞতা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Striving With Conditions",
          "bn": "শর্তসাপেক্ষ প্রচেষ্টা"
        },
        "p": [
          {
            "en": "17:19 spells out when striving is received with thanks: whoever desires the Hereafter, and strives for it the striving it deserves, and is a believer — the verse lays down intention, effort, and faith together. Effort alone is not the whole account; direction and belief give it its weight. 92:4 adds the observation that frames every biography: indeed your striving is diverse. All human beings expend effort; what separates lives is not whether they strive, but toward what.",
            "bn": "17:19 আয়াত খুলে বলে, কখন প্রচেষ্টা কৃতজ্ঞতার সঙ্গে গৃহীত হয়: যে আখিরাত চায়, এবং তার জন্য তার প্রাপ্য চেষ্টাটুকু করে, এবং মুমিন হয় — আয়াতটি নিয়ত, প্রচেষ্টা ও ঈমান তিনটিকে একসঙ্গে স্থাপন করে। কেবল প্রচেষ্টাই পুরো হিসাব নয়; অভিমুখ ও বিশ্বাসই তাকে ওজন দেয়। 92:4 আয়াত যোগ করে সেই পর্যবেক্ষণ, যা প্রতিটি জীবনীর কাঠামো: নিশ্চয়ই তোমাদের প্রচেষ্টা বিচিত্র। সব মানুষই পরিশ্রম ঢালে; জীবনগুলোকে আলাদা করে দেয় তারা চেষ্টা করে কি না তা নয় — কীসের দিকে করে, সেটিই।"
          },
          {
            "en": "The scholars discussed one debated edge of the rule. Ibn Kathir records that from 53:39 ash-Shafi'i concluded that the reward of reciting Quran does not reach the dead, since it was not of their doing, while other scholars allowed such gifts. He also relates what does continue: Muslim reports from Abu Hurairah (RA) that when a person dies, his works end except three — ongoing charity, knowledge that benefits, and a righteous child who prays for him. All three are fruits the person himself planted.",
            "bn": "আলিমগণ নিয়মটির একটি বিতর্কিত প্রান্ত নিয়ে আলোচনা করেছেন। ইবনে কাসীর লিপিবদ্ধ করেন, 53:39 আয়াত থেকে আশ-শাফি'ঈ সিদ্ধান্ত টানেন যে কুরআন তিলাওয়াতের সওয়াব মৃতের কাছে পৌঁছায় না, কারণ তা তার নিজের কাজ ছিল না; অন্য আলিমগণ অবশ্য এমন উপহারের অনুমতি দিয়েছেন। তিনি এ-ও বর্ণনা করেন, কোনটি চালু থাকে: মুসলিম আবু হুরাইরা (রাঃ) থেকে রিওয়ায়াত করেন — মানুষ মারা গেলে তার আমল বন্ধ হয়ে যায়, তিনটি ছাড়া: চলমান সদকা, উপকারে আসা জ্ঞান, আর তার জন্য দু'আকারী সৎ সন্তান। তিনটিই সেই ফল, যার চারা মানুষটি নিজেই পুঁতেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "To Your Lord Is the End",
          "bn": "তোমার রবের কাছেই সমাপ্তি"
        },
        "p": [
          {
            "en": "53:42 seals the passage: and that to your Lord is the finality — al-muntaha, the end point at which everything terminates. Courses of effort, chains of cause, journeys of every soul: all of them run out at Him. The mufassirun read it both as destiny — the return and the judgement are to Him — and as a closure of appeal: there is nothing beyond Him to aspire to or to fear. The One who sees the striving and pays the fullest wage is also, Himself, the destination.",
            "bn": "53:42 আয়াত অংশটিতে মোহর দেয়: আর তোমার রবের কাছেই চূড়ান্ত সমাপ্তি — আল-মুনতাহা, সেই শেষবিন্দু যেখানে সবকিছু গিয়ে থামে। প্রচেষ্টার ধারা, কার্যকারণের শৃঙ্খল, প্রতিটি প্রাণের সফর — সবই তাঁর কাছে গিয়ে ফুরায়। মুফাসসিরগণ একে পড়েন নিয়তি হিসেবেও — প্রত্যাবর্তন ও বিচার তাঁরই কাছে — আবার আবেদনের দরজা বন্ধ হওয়া হিসেবেও: তাঁর ওপারে আকাঙ্ক্ষা করার বা ভয় করার কিছু নেই। যিনি চেষ্টা দেখেন এবং পূর্ণতম মজুরি দেন, তিনি নিজেই গন্তব্যও।"
          }
        ]
      },
      {
        "h": {
          "en": "Working for the One Who Sees",
          "bn": "যিনি দেখেন তাঁর জন্য কাজ"
        },
        "p": [
          {
            "en": "Practically, the passage relocates a worker's attention from outcomes to effort, and from audience to Allah. Outcomes are shared and uncertain; effort is owned, and certain to be seen. That single shift answers the two diseases of work: despair when results fail, and performing for eyes when results succeed. A person who believes sawfa yura has an Audience whether or not anyone is watching, and a full wage whether or not anyone pays.",
            "bn": "ব্যবহারিকভাবে এই অংশটি কর্মীর মনোযোগ সরিয়ে আনে ফলাফল থেকে প্রচেষ্টায়, আর দর্শক থেকে আল্লাহয়। ফলাফল ভাগাভাগির জিনিস ও অনিশ্চিত; প্রচেষ্টা নিজের, এবং তা দেখা হবেই — নিশ্চিত। এই একটিমাত্র স্থানান্তর কাজের দুই ব্যাধিরই জবাব: ফল না এলে হতাশা, আর ফল এলে চোখের সামনে অভিনয়। যে বিশ্বাস করে সাওফা ইউরা, কেউ দেখুক বা না দেখুক তার একজন দর্শক আছেন, আর কেউ দাম দিক বা না দিক তার পূর্ণ মজুরি আছে।"
          },
          {
            "en": "It also ends excuse-making by proxy. No one's piety can be borrowed and no one's burden outsourced — not a family's reputation, a shaykh's standing, or a community's history. The question the passage leaves each reader is singular and freeing: what is my sa'y, and toward what is it pointed? Answer it while the striving is still being written, because it will surely be seen, paid in full, and traced — like everything — to your Lord at the end.",
            "bn": "এটি অন্যের ঘাড়ে ভর দেওয়া অজুহাতেরও সমাপ্তি টানে। কারও তাকওয়া ধার করা যায় না, কারও কাঁধে নিজের বোঝা চালান করা যায় না — পরিবারের সুনামেও না, কোনো শাইখের মর্যাদায়ও না, কোনো সম্প্রদায়ের ইতিহাসেও না। অংশটি প্রতিটি পাঠকের জন্য যে প্রশ্ন রেখে যায় তা একবচন এবং মুক্তিদায়ক: আমার সা'ঈ কী, আর তা কোন দিকে তাক করা? উত্তরটি দাও যতক্ষণ চেষ্টাটি এখনো লেখা হচ্ছে — কারণ তা অবশ্যই দেখা হবে, পূর্ণ প্রতিদান পাবে, এবং — সবকিছুর মতোই — শেষ প্রান্তে গিয়ে পৌঁছাবে তোমার রবের কাছে।"
          }
        ]
      }
    ]
  },
  "53:56": {
    "sections": [
      {
        "h": {
          "en": "Five Words After the Ruins",
          "bn": "ধ্বংসস্তূপের পরে পাঁচ শব্দ"
        },
        "p": [
          {
            "en": "Hadha nadhirun mina n-nudhuri l-ula: this is a warner of the warners of old. The verse is five Arabic words. A nadhir is someone who warns of a danger before it arrives; nudhur is its plural, and al-ula means the first, the earlier. The sentence comes straight after a roll call of the destroyed. Verses 53:50 to 53:54 name 'Ad, Thamud, the people of Nuh and the overturned towns, and 53:55 asks the listener which of the favours of his Lord he will dispute.",
            "bn": "হাযা নাযীরুম মিনান নুযুরিল ঊলা: এ পূর্বের সতর্ককারীদেরই একজন সতর্ককারী। আরবিতে আয়াতটি মাত্র পাঁচ শব্দের। নাযীর সেই ব্যক্তি, যে বিপদ আসার আগেই সাবধান করে দেয়। নুযুর তার বহুবচন, আর আল-ঊলা মানে প্রথম, আগের। বাক্যটি আসে ধ্বংসপ্রাপ্তদের এক তালিকার ঠিক পরে। ৫৩:৫০ থেকে ৫৩:৫৪ আয়াতে আদ, সামূদ, নূহের জাতি আর উল্টে দেওয়া জনপদের নাম এসেছে। তারপর ৫৩:৫৫ আয়াত শ্রোতাকে জিজ্ঞেস করে, প্রতিপালকের কোন নিয়ামত নিয়ে সে বিতর্ক করবে।"
          },
          {
            "en": "That list is itself part of a longer passage. It opens at 53:36 and 53:37 with a question: has he not been told what is in the scrolls of Musa, and of Ibrahim (AS) who fulfilled his obligations? Al-Qurtubi reports from as-Suddi, from Abu Salih, that everything from that question down to this very verse is in the scrolls of Ibrahim and Musa. So the word hadha, this, stands at a seam. Behind it lies a long account of what earlier revelation said; ahead of it, in 53:57, the surah announces that the Approaching has approached.",
            "bn": "তালিকাটি নিজেও এক দীর্ঘ অংশের ভেতরে পড়ে। সে অংশ শুরু হয় ৫৩:৩৬ ও ৫৩:৩৭ আয়াতে এক প্রশ্ন দিয়ে: তাকে কি জানানো হয়নি মূসার সহীফায় কী আছে, আর সেই ইবরাহীমের (আঃ) সহীফায়, যিনি নিজের দায়িত্ব পূর্ণ করেছিলেন? কুরতুবী সুদ্দী থেকে, তিনি আবু সালিহ থেকে বর্ণনা করেন: সেই প্রশ্ন থেকে এই আয়াত পর্যন্ত সবটুকুই ইবরাহীম ও মূসার সহীফায় আছে। তাই হাযা, অর্থাৎ 'এ', শব্দটি দাঁড়িয়ে আছে এক সন্ধিস্থলে। এর পেছনে আগের ওহির দীর্ঘ বিবরণ। সামনে ৫৩:৫৭ আয়াতে সূরা ঘোষণা দেয়, আসন্ন মুহূর্ত কাছে এসে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pointing at a Person",
          "bn": "ইঙ্গিত এক ব্যক্তির দিকে"
        },
        "p": [
          {
            "en": "Who is meant by this? Most of the commentators fetched here answer: the Prophet ﷺ. Ibn Kathir says plainly that hadha nadhir means Muhammad ﷺ, and al-Baghawi says the same. The Muyassar glosses it as Muhammad ﷺ, a warner with the truth the prophets before him warned with. As-Sa'di names him in full, the Qurayshi, Hashimi messenger, Muhammad son of 'Abdullah. Al-Qurtubi reports this reading from Ibn Jurayj and Muhammad ibn Ka'b, and at-Tabari brings it with his chains from Qatadah and from Abu Ja'far, who said simply: he is Muhammad ﷺ.",
            "bn": "'এ' বলতে কাকে বোঝানো হয়েছে? এখানে যে তাফসীরগুলো দেখা হয়েছে, তার বেশির ভাগের জবাব: নবী ﷺ। ইবন কাসীর সোজাসুজি বলেন, হাযা নাযীর মানে মুহাম্মাদ ﷺ। বাগাভীও একই কথা বলেন। মুয়াসসারের ব্যাখ্যা: ইনি মুহাম্মাদ ﷺ, আগের নবীরা যে সত্য দিয়ে সতর্ক করেছিলেন, সেই সত্য দিয়েই তিনি সতর্ককারী। সা'দী পুরো পরিচয় দিয়ে নাম নেন: কুরাইশি, হাশিমি রাসূল, আবদুল্লাহর পুত্র মুহাম্মাদ। কুরতুবী এ ব্যাখ্যা বর্ণনা করেন ইবন জুরাইজ ও মুহাম্মাদ ইবন কা'ব থেকে। তাবারী নিজের সনদে আনেন কাতাদা আর আবু জা'ফর থেকে। আবু জা'ফর শুধু বলেছিলেন: তিনি মুহাম্মাদ ﷺ।"
          },
          {
            "en": "A second answer points not at the man but at the book he brought. Al-Qurtubi reports from Qatadah that the verse means the Qur'an: it is a warner with what the earlier scriptures warned of. Ma'arif al-Qur'an keeps both open, saying the demonstrative hadha points either to the Prophet ﷺ or to the Qur'an; on the second reading, he has come with a book of guidance that brings success in this world and the next to those who follow it. This article does not choose between the person and the book.",
            "bn": "দ্বিতীয় জবাব ইঙ্গিত করে মানুষটির দিকে নয়, তিনি যে কিতাব নিয়ে এসেছেন তার দিকে। কুরতুবী কাতাদা থেকে বর্ণনা করেন, আয়াতের উদ্দেশ্য কুরআন: আগের কিতাবগুলো যা নিয়ে সতর্ক করেছিল, কুরআনও তা নিয়েই সতর্ক করে। মাআরিফুল কুরআন দুটো পথই খোলা রাখে। তার মতে ইঙ্গিতবাচক শব্দ হাযা হয় নবী ﷺ-এর দিকে, নয়তো কুরআনের দিকে। দ্বিতীয় অর্থে কথাটা দাঁড়ায়: তিনি এমন এক হিদায়াতের কিতাব নিয়ে এসেছেন, যা মেনে চললে দুনিয়া ও আখিরাতে সাফল্য মেলে। মানুষ না কিতাব, এ লেখা তার কোনোটিকে বেছে নেয় না।"
          },
          {
            "en": "Notice one detail in the reports themselves. At-Tabari lists Qatadah among those who say the warner is the Prophet ﷺ: Muhammad ﷺ warned as the messengers before him warned. Al-Baghawi quotes Qatadah in the same words. Al-Qurtubi, however, attributes the Qur'an reading to Qatadah. The sources fetched here carry both reports under his name and do not reconcile them, so neither is set aside. The two readings are close in any case, since the Prophet ﷺ warned with the Qur'an and the Qur'an came through him.",
            "bn": "বর্ণনাগুলোর ভেতরেই একটা খুঁটিনাটি খেয়াল করার মতো। তাবারী কাতাদাকে রেখেছেন তাঁদের মধ্যে, যাঁরা বলেন সতর্ককারী নবী ﷺ: মুহাম্মাদ ﷺ সতর্ক করেছেন, যেমন তাঁর আগের রাসূলরা সতর্ক করেছিলেন। বাগাভীও কাতাদার একই কথা উদ্ধৃত করেন। অথচ কুরতুবী কুরআনের ব্যাখ্যাটি কাতাদার নামে বলেন। এখানে দেখা সূত্রগুলোতে তাঁর নামে দুটো বর্ণনাই আছে, আর সূত্রগুলো এর মীমাংসা করেনি। তাই কোনোটিই বাদ দেওয়া হলো না। তা ছাড়া দুই ব্যাখ্যা পরস্পরের খুব কাছাকাছি। নবী ﷺ কুরআন দিয়েই সতর্ক করেছেন, আর কুরআন এসেছে তাঁরই মাধ্যমে।"
          }
        ]
      },
      {
        "h": {
          "en": "Last, Yet Among the First",
          "bn": "সর্বশেষ, তবু পূর্বসূরিদের দলে"
        },
        "p": [
          {
            "en": "At-Tabari opens his discussion with a puzzle. Allah describes the Prophet ﷺ as being from the first warners, yet he is the last of them. How can the last be counted among the first? Those who read the verse as being about the Prophet ﷺ answer with a turn of ordinary speech. He is a warner to his people, as the warners before him were warners to theirs, just as one says: this is one of the children of Adam, one of the people. On this reading, min, of, marks membership in a kind, not a place in time.",
            "bn": "তাবারী আলোচনা শুরু করেন একটি ধাঁধা দিয়ে। আল্লাহ নবী ﷺ-কে প্রথম দিকের সতর্ককারীদের একজন বলছেন, অথচ তিনি তাঁদের সর্বশেষ। সর্বশেষজন প্রথমদের মধ্যে গণ্য হন কীভাবে? যাঁরা আয়াতটিকে নবী ﷺ-এর বিষয়ে পড়েন, তাঁরা জবাব দেন সাধারণ কথার এক রীতি দিয়ে। তিনি নিজের জাতির জন্য সতর্ককারী, যেমন তাঁর আগের সতর্ককারীরা ছিলেন নিজ নিজ জাতির জন্য। ঠিক যেমন বলা হয়: এ আদম সন্তানদেরই একজন, মানুষদেরই একজন। এ ব্যাখ্যায় 'মিন' বোঝায় কোনো শ্রেণির সদস্য হওয়া, সময়ের কোনো অবস্থান নয়।"
          },
          {
            "en": "Ibn Kathir puts it briefly: min jinsihim, of their kind. He was sent as they were sent, and Ibn Kathir supports this with 46:9, where the Prophet ﷺ is told to say: I am not something new among the messengers. The Muyassar and as-Sa'di both echo that phrase, laysa bi-bid'in mina r-rusul, not new among the messengers. Al-Baghawi says he is a messenger sent to you, as they were sent to their peoples. Ma'arif al-Qur'an adds a contrast: earlier prophets were sent to their own nations, while he is sent to all mankind.",
            "bn": "ইবন কাসীর কথাটা বলেন সংক্ষেপে: মিন জিনসিহিম, তাঁদেরই শ্রেণির। তাঁরা যেভাবে প্রেরিত হয়েছিলেন, তিনিও সেভাবে প্রেরিত। এর সমর্থনে ইবন কাসীর আনেন ৪৬:৯, যেখানে নবী ﷺ-কে বলতে বলা হয়েছে: আমি রাসূলদের মধ্যে নতুন কিছু নই। মুয়াসসার ও সা'দী দুজনেই সেই কথার প্রতিধ্বনি তোলেন: লাইসা বিবিদ'ইম মিনার রুসুল, রাসূলদের মধ্যে নতুন নন। বাগাভী বলেন, তিনি তোমাদের কাছে প্রেরিত এক রাসূল, যেমন তাঁরা প্রেরিত হয়েছিলেন নিজ নিজ জাতির কাছে। মাআরিফুল কুরআন একটা পার্থক্যও যোগ করে: আগের নবীরা পাঠানো হয়েছিলেন নিজেদের জাতির কাছে, আর তিনি পাঠানো হয়েছেন সমগ্র মানবজাতির কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Or a Warning From the Scrolls",
          "bn": "নাকি সহীফার সতর্কবাণী"
        },
        "p": [
          {
            "en": "At-Tabari then reports a reading that differs from all of this. On it, hadha points back to what the surah has just said: this warning I have given you, people, about the blows I struck against the nations before you, is of the warnings those nations were given in the scrolls of Ibrahim and Musa. He brings it from Abu Malik, who said: it is from what they warned their peoples with in the scrolls of Ibrahim and Musa. Al-Qurtubi reports Abu Malik's saying too, in nearly the same words.",
            "bn": "এরপর তাবারী এমন এক ব্যাখ্যা আনেন, যা এর সবকিছু থেকে আলাদা। এ ব্যাখ্যায় হাযা ইঙ্গিত করে সূরা এইমাত্র যা বলেছে তার দিকে। অর্থ দাঁড়ায়: হে লোকসকল, তোমাদের আগের জাতিগুলোর ওপর আমি যে আঘাত হেনেছি, তা নিয়ে তোমাদের যে সতর্ক করলাম, তা সেই সতর্কবাণীগুলোরই অংশ, যা ইবরাহীম ও মূসার সহীফায় ওই জাতিগুলোকে দেওয়া হয়েছিল। তাবারী এটি আনেন আবু মালিক থেকে। তিনি বলেছিলেন: এ সেই সতর্কবাণীর অংশ, যা দিয়ে তাঁরা ইবরাহীম ও মূসার সহীফায় নিজেদের জাতিকে সতর্ক করেছিলেন। কুরতুবীও আবু মালিকের কথাটি প্রায় একই ভাষায় বর্ণনা করেন।"
          },
          {
            "en": "Al-Qurtubi adds a further line, introduced with wa-qila, it is said. On it, the reports of past nations that perished are a warning to this community, lest what befell them befall it too. Here nudhur is a verbal noun meaning warning, as Arabic uses nukr to mean disapproval. The sense becomes: this is a warning to you. Read this way, the verse names no warner at all. It labels what came before it, the ruins of 53:50 to 53:54, as the same old warning, delivered once more.",
            "bn": "কুরতুবী 'বলা হয়' কথাটি দিয়ে আরেকটি ব্যাখ্যা যোগ করেন। সে অনুযায়ী, ধ্বংস হয়ে যাওয়া অতীত জাতিগুলোর খবর এই উম্মতের জন্য এক সতর্কবাণী, যাতে তাদের ওপর যা নেমেছিল তা এদের ওপর না নামে। এখানে নুযুর ক্রিয়াবাচক বিশেষ্য, মানে সতর্ক করা। আরবিতে যেমন নুক্‌র মানে অস্বীকৃতি বা আপত্তি। তখন অর্থ হয়: এ তোমাদের জন্য এক সতর্কবাণী। এভাবে পড়লে আয়াতে কোনো সতর্ককারীর কথাই নেই। আয়াতটি আগের অংশকে, অর্থাৎ ৫৩:৫০ থেকে ৫৩:৫৪ আয়াতের ধ্বংসস্তূপগুলোকে, চিহ্নিত করে সেই পুরোনো সতর্কবাণী হিসেবে, যা আরেকবার পৌঁছে দেওয়া হলো।"
          },
          {
            "en": "At-Tabari then states his own preference. He judges Abu Malik's reading closer to the verse's meaning, because Allah placed it within verses He said are in the scrolls of Ibrahim and Musa, so hadha more fittingly points to the speech before it. Ibn Kathir, al-Baghawi, the Muyassar and as-Sa'di, on the other hand, take hadha as the Prophet ﷺ without mentioning the alternative. Both readings stand in the sources; at-Tabari's preference is reported as his, and this article adopts neither.",
            "bn": "এরপর তাবারী নিজের পছন্দ জানান। তাঁর বিচারে আবু মালিকের ব্যাখ্যা আয়াতের অর্থের বেশি কাছাকাছি। কারণ আল্লাহ এ কথা রেখেছেন এমন আয়াতগুলোর ধারায়, যেগুলো সম্পর্কে তিনি জানিয়েছেন যে সেগুলো ইবরাহীম ও মূসার সহীফায় আছে। তাই হাযা দিয়ে আগের কথার দিকে ইঙ্গিত করাই বেশি সংগত। অন্যদিকে ইবন কাসীর, বাগাভী, মুয়াসসার ও সা'দী বিকল্পটির উল্লেখ না করেই হাযা বলতে নবী ﷺ-কে বুঝিয়েছেন। দুটি ব্যাখ্যাই সূত্রে আছে। তাবারীর পছন্দ তাঁর নিজের হিসেবেই জানানো হলো। এ লেখা কোনোটিই গ্রহণ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Reject a Familiar Message?",
          "bn": "চেনা বার্তা অস্বীকার কেন"
        },
        "p": [
          {
            "en": "On every reading, the verse makes the same claim: what the listener is hearing is not new. As-Sa'di draws out what follows from that, in a string of questions. Messengers came before him and called to what he calls to, so on what ground is his message denied, and by what proof is his call made void? Is his character not the highest of the noble messengers? Did he not bring the Qur'an, which falsehood cannot approach from before it or behind it? Did Allah not destroy those who denied the messengers before him?",
            "bn": "যে ব্যাখ্যাই ধরি, আয়াতের দাবি একই: শ্রোতা যা শুনছে তা নতুন নয়। সা'দী এ থেকে কী বেরিয়ে আসে, তা দেখান একের পর এক প্রশ্নে। তাঁর আগেও রাসূলরা এসেছেন, আর তিনি যেদিকে ডাকেন তাঁরাও সেদিকেই ডেকেছেন। তাহলে কিসের ভিত্তিতে তাঁর রিসালাত অস্বীকার করা হয়? কোন প্রমাণে তাঁর দাওয়াত বাতিল হয়? তাঁর চরিত্র কি সম্মানিত রাসূলদের মধ্যে সবচেয়ে উঁচু নয়? তিনি কি সেই কুরআন আনেননি, যার সামনে বা পেছন থেকে বাতিল ঢুকতে পারে না? আল্লাহ কি তাঁর আগের রাসূলদের যারা মিথ্যা বলেছিল, তাদের ধ্বংস করেননি?"
          },
          {
            "en": "Al-Qurtubi's report from Ibn Jurayj and Muhammad ibn Ka'b gives the same point as a choice: if you obey him you will succeed, and if not, what befell those who denied the earlier messengers will befall you. These words address the deniers who first heard the surah, and the peoples of 53:50 to 53:54 are named by the text itself. The verse describes what it describes. It licenses nothing against any living person or community, and gives no reader a list of others to place among the ruined.",
            "bn": "কুরতুবী ইবন জুরাইজ ও মুহাম্মাদ ইবন কা'ব থেকে যা বর্ণনা করেন, তাতে একই কথা এসেছে এক বেছে নেওয়ার প্রশ্ন হয়ে: তাঁকে মানলে তোমরা সফল হবে। না মানলে আগের রাসূলদের অস্বীকারকারীদের ওপর যা নেমেছিল, তা তোমাদের ওপরও নামবে। এ কথাগুলোর লক্ষ্য সেই অস্বীকারকারীরা, যারা প্রথম এ সূরা শুনেছিল। আর ৫৩:৫০ থেকে ৫৩:৫৪ আয়াতের জাতিগুলোর নাম আয়াতই নিয়েছে। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ কোনো অনুমতি দেয় না। কোনো পাঠককে এমন তালিকাও দেয় না, যাতে সে অন্যদের ধ্বংসপ্রাপ্তদের কাতারে বসাতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Warner Who Ran Unclothed",
          "bn": "বস্ত্রহীন ছুটে আসা সতর্ককারী"
        },
        "p": [
          {
            "en": "None of the commentaries fetched here attaches a narration to this verse alone. Ibn Kathir, in the abridged English that treats 53:56 together with the verses after it, says what a warner is: someone eager to pass on what he knows of a disaster close at hand, so that it does not fall on the people he warns. He cites 34:46, he is only a warner to you before a severe punishment, and then a phrase from a hadith, I am the naked warner, which he says suits the next verse, 53:57, on the nearing of the Hour.",
            "bn": "এখানে দেখা তাফসীরগুলোর কোনোটিই শুধু এই আয়াতের সঙ্গে কোনো বর্ণনা জুড়ে দেয়নি। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৫৩:৫৬ আয়াতকে পরের আয়াতগুলোর সঙ্গে মিলিয়ে আলোচনা করে। সেখানে তিনি বলেন, সতর্ককারী সে, যে আসন্ন বিপদের খবর জানলে তা পৌঁছে দিতে ব্যাকুল থাকে, যাতে যাদের সে সতর্ক করছে তাদের ওপর বিপদটা না নামে। তিনি উদ্ধৃত করেন ৩৪:৪৬: তিনি তো এক কঠিন শাস্তির আগে তোমাদের জন্য কেবল একজন সতর্ককারী। তারপর এক হাদীসের অংশ আনেন: আমিই সেই নগ্ন সতর্ককারী। তাঁর মতে এ অর্থ মানায় পরের আয়াত ৫৩:৫৭-এর সঙ্গে, যেখানে কিয়ামত কাছে আসার কথা।"
          },
          {
            "en": "Ibn Kathir quotes only that phrase and names no collection. The full narration is in Sahih al-Bukhari (6482), from Abu Musa, in this wording: \"My example and the example of the message with which Allah has sent me is like that of a man who came to some people and said, I have seen with my own eyes the enemy forces, and I am a naked warner (to you) so save yourself, save yourself! A group of them obeyed him and went out at night, slowly and stealthily and were safe, while another group did not believe him and thus the army took them in the morning and destroyed them.\"",
            "bn": "ইবন কাসীর শুধু ওই অংশটুকুই উদ্ধৃত করেন, কোনো গ্রন্থের নাম বলেন না। পুরো বর্ণনাটি সহীহ বুখারীতে (৬৪৮২) আবু মূসা (রাঃ) থেকে এসেছে, এই ভাষায়: \"আমার আর আল্লাহ আমাকে যে বার্তা দিয়ে পাঠিয়েছেন তার দৃষ্টান্ত এমন এক ব্যক্তির মতো, যে এক সম্প্রদায়ের কাছে এসে বলল, আমি নিজের চোখে শত্রুবাহিনী দেখেছি, আর আমি (তোমাদের জন্য) নগ্ন সতর্ককারী। তাই বাঁচো, বাঁচো! তাদের একদল তার কথা মানল, রাতেই ধীরে ধীরে চুপিসারে বেরিয়ে পড়ল আর বেঁচে গেল। আরেক দল তাকে বিশ্বাস করল না। ফলে সকালে বাহিনী তাদের ধরে ফেলল এবং ধ্বংস করে দিল।\""
          },
          {
            "en": "Al-Bukhari placed it in his Sahih, and that is its grading here; nothing is added to it. Ibn Kathir explains the image: a man who has seen the danger rushes so fast to warn his people that he does not stop to dress. Ibn Kathir links the hadith to the meaning of a warner and to 53:57, not to the wording of this verse, and that is how it is used here. Ibn Kathir also brings a report on small sins, recorded by Imam Ahmad; it is not attached to this verse and is left out.",
            "bn": "ইমাম বুখারী এটি তাঁর সহীহ গ্রন্থে রেখেছেন। এখানে এর মান সেটুকুই, তার বেশি কিছু জোড়া হয়নি। ছবিটা ইবন কাসীর ব্যাখ্যা করেন এভাবে: বিপদ দেখে ফেলা মানুষটি নিজের লোকদের সাবধান করতে এত তাড়াহুড়ো করে ছোটে যে কাপড় পরার জন্যও থামে না। ইবন কাসীর হাদীসটিকে যুক্ত করেন সতর্ককারীর অর্থের সঙ্গে আর ৫৩:৫৭ আয়াতের সঙ্গে, এ আয়াতের শব্দের সঙ্গে নয়। এখানেও তা সেভাবেই ব্যবহার হলো। ইবন কাসীর ছোট গুনাহ নিয়ে ইমাম আহমাদের সংকলিত একটি বর্ণনাও আনেন। সেটি এ আয়াতের সঙ্গে যুক্ত নয়, তাই বাদ রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Is Concern",
          "bn": "সতর্ক করা মানে মমতা"
        },
        "p": [
          {
            "en": "The parable shows what kind of word nadhir is. The man in it gains nothing by being believed. He has seen an army, and his only thought is the people still asleep in its path. That is why Ibn Kathir defines the warner by eagerness: the wish that the disaster not fall on those he warns. A warning in this sense is not a threat. A threat says, I will harm you. A warning says, harm is coming and I want you safe. The verse places the Prophet ﷺ, or the message he carried, in that line.",
            "bn": "দৃষ্টান্তটি দেখায়, নাযীর শব্দটা আসলে কোন ধরনের। সেখানে লোকটির কথা কেউ বিশ্বাস করলে তার নিজের কোনো লাভ নেই। সে একটা বাহিনী দেখেছে, আর তার একমাত্র চিন্তা সেই মানুষগুলো, যারা তখনো বাহিনীর পথে ঘুমিয়ে আছে। এ জন্যই ইবন কাসীর সতর্ককারীকে চেনান তার ব্যাকুলতা দিয়ে: যাদের সে সতর্ক করছে, তাদের ওপর যেন বিপদ না নামে। এ অর্থে সতর্কবাণী হুমকি নয়। হুমকি বলে, আমি তোমার ক্ষতি করব। সতর্কবাণী বলে, ক্ষতি আসছে, আর আমি চাই তুমি নিরাপদ থাকো। আয়াতটি নবী ﷺ-কে, কিংবা তাঁর বহন করা বার্তাকে, সেই ধারাতেই রাখে।"
          },
          {
            "en": "Seen this way, the placement after 53:55 is worth noticing. That verse asks which of the favours of your Lord you will dispute, and the next words name a warner. The text does not say that the warning is one of those favours, and no commentator fetched here says so either. But the parable invites the thought on its own terms. The group that listened in the night owed its life to a man who would not keep quiet. Being told of danger in time is not a hardship placed on a people.",
            "bn": "এভাবে দেখলে ৫৩:৫৫ আয়াতের পরে এর অবস্থান খেয়াল করার মতো। সে আয়াত জিজ্ঞেস করে, তোমার প্রতিপালকের কোন নিয়ামত নিয়ে তুমি বিতর্ক করবে। আর ঠিক পরের কথাতেই আসে এক সতর্ককারীর উল্লেখ। সতর্কবাণী সেই নিয়ামতগুলোর একটি, এমন কথা আয়াত বলেনি, এখানে দেখা কোনো তাফসীরকারও বলেননি। তবে দৃষ্টান্তটি নিজের মতো করেই ভাবনাটা জাগায়। যে দল রাতে কথা শুনেছিল, তাদের প্রাণ বেঁচেছিল এমন একজনের কারণে, যে চুপ করে থাকেনি। সময় থাকতে বিপদের খবর পাওয়া কোনো জাতির ওপর চাপানো কষ্ট নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearing an Old Warning Afresh",
          "bn": "পুরোনো সতর্কবাণী নতুন করে শোনা"
        },
        "p": [
          {
            "en": "There is a danger in familiarity. A warning repeated across generations can start to sound like background noise, and the verse names exactly that quality: of old, one of a long line. Yet the line exists because the danger did not go away. Whichever reading one follows, the listener is told that the message reaching him is the message that reached 'Ad and Thamud. Its age is not a reason to discount it. It is evidence that it has been true for a very long time.",
            "bn": "চেনা জিনিসের মধ্যে একটা বিপদ থাকে। প্রজন্মের পর প্রজন্ম ধরে বারবার শোনা সতর্কবাণী একসময় পেছনের গুঞ্জনের মতো শোনাতে পারে। আর আয়াতটি ঠিক সেই গুণটির নামই নেয়: পূর্বের, এক দীর্ঘ ধারার অংশ। অথচ ধারাটা টিকে আছে, কারণ বিপদ সরে যায়নি। যে ব্যাখ্যাই অনুসরণ করা হোক, শ্রোতাকে জানানো হচ্ছে: তার কাছে যে বার্তা পৌঁছাচ্ছে, তা সেই বার্তাই, যা আদ ও সামূদের কাছে পৌঁছেছিল। পুরোনো বলে একে হালকা করার কারণ নেই। বরং এ প্রমাণ যে কথাটা বহু কাল ধরে সত্য।"
          },
          {
            "en": "Two practical lessons follow. The first is about receiving. When a true reminder reaches us, from the Qur'an, from a teacher, from someone who cares, the right response is the response of the group that set out in the night, not irritation at being disturbed. The second is about giving. Whoever warns others should warn as the man in the parable warned: urgently, plainly, and out of fear for them, never out of pleasure at their danger or at being proved right.",
            "bn": "এখান থেকে দুটি বাস্তব শিক্ষা আসে। প্রথমটি গ্রহণ করা নিয়ে। কুরআন থেকে হোক, শিক্ষকের কাছ থেকে হোক, বা আমাদের ভালো চায় এমন কারও কাছ থেকে, সত্যিকারের উপদেশ এলে সঠিক জবাব সেই দলের জবাব, যারা রাতেই বেরিয়ে পড়েছিল। বিরক্ত হওয়া নয় যে কেউ আমাদের আরামে ব্যাঘাত ঘটাল। দ্বিতীয়টি দেওয়া নিয়ে। যে অন্যকে সতর্ক করে, সে যেন দৃষ্টান্তের সেই মানুষটির মতো সতর্ক করে: তাড়াতাড়ি, সোজা কথায়, আর তাদের জন্য ভয় থেকে। তাদের বিপদে বা নিজে সঠিক প্রমাণিত হওয়ায় তৃপ্তি থেকে কখনো নয়।"
          }
        ]
      }
    ]
  }
});
