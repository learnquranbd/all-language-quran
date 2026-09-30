/**
 * Tadabbur long-form articles — surah 23.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "23:1-3": {
    "sections": [
      {
        "h": {
          "en": "Success in the Past Tense",
          "bn": "অতীত কালে সফলতা"
        },
        "p": [
          {
            "en": "Qad aflaha al-mu'minun: truly the believers have succeeded. The Arabic opens with qad and a past-tense verb — the success is announced as a settled fact before a single condition has been listed. Falah is the Quran's word for the full harvest: attaining what one hoped and escaping what one feared. The surah begins by handing that verdict to the believers, then spends the following verses, 23:2-9, describing who exactly was just congratulated.",
            "bn": "'কাদ আফলাহাল মু'মিনূন' — মুমিনরা সত্যিই সফল হয়ে গেছে। আরবিতে শুরুটা 'কাদ' আর অতীত কালের ক্রিয়া দিয়ে — একটি শর্তও তালিকাভুক্ত হওয়ার আগেই সফলতাকে ঘোষণা করা হয় মীমাংসিত সত্য হিসেবে। 'ফালাহ' হলো পূর্ণ ফসলের জন্য কুরআনের শব্দ: যা আশা করা হয়েছিল তা পাওয়া, আর যা ভয় করা হয়েছিল তা থেকে রেহাই। সূরাটি শুরুতেই মুমিনদের হাতে সেই রায় তুলে দেয়, তারপর পরের আয়াতগুলোতে — 23:2-9 — বর্ণনা করে ঠিক কাদের এইমাত্র অভিনন্দন জানানো হলো।"
          },
          {
            "en": "The list that follows names traits, not credentials: humility in prayer, turning from idle talk, giving zakah, guarding chastity, keeping trusts and covenants, protecting the prayers. It ends at 23:10-11 with the inheritance: these are the heirs who will inherit Firdaws, abiding there forever. Success is thus defined at the surah's start, and 23:115 near its end asks the question that gives the definition its urgency: did you think We created you without purpose?",
            "bn": "এরপরের তালিকাটি নাম নেয় গুণের, সনদের নয়: নামাযে বিনয়, অনর্থক কথা থেকে ফিরে থাকা, যাকাত আদায়, লজ্জাস্থানের হেফাজত, আমানত ও অঙ্গীকার রক্ষা, নামাযসমূহের সংরক্ষণ। তালিকা শেষ হয় 23:10-11 আয়াতে উত্তরাধিকার দিয়ে: এরাই সেই ওয়ারিশ, যারা ফিরদাউসের উত্তরাধিকারী হবে, সেখানে চিরকাল থাকবে। সফলতা এভাবে সংজ্ঞায়িত হয় সূরার শুরুতে, আর শেষের কাছে 23:115 করে সেই প্রশ্ন, যা সংজ্ঞাটিকে তার জরুরিত্ব দেয়: তোমরা কি ভেবেছিলে আমরা তোমাদের উদ্দেশ্যহীন সৃষ্টি করেছি?"
          }
        ]
      },
      {
        "h": {
          "en": "Khushu' Comes First",
          "bn": "খুশু সবার আগে"
        },
        "p": [
          {
            "en": "The first trait chosen — before zakah, chastity or honesty — is alladhina hum fi salatihim khashi'un: those who in their prayer are humbly attentive. Khushu' in the language is lowness and stillness; in the prayer, the commentators describe it as the heart standing present before Allah and the limbs going quiet in sympathy. It is placed first because it is the interior of the deed the whole religion is built around: prayer as meeting, not as motion.",
            "bn": "প্রথম যে গুণটি বাছাই করা হয়েছে — যাকাত, চারিত্রিক পবিত্রতা বা সততারও আগে — তা হলো 'আল্লাযীনা হুম ফী সালাতিহিম খাশিউন': যারা নিজেদের নামাযে বিনম্র-মনোযোগী। ভাষায় 'খুশু' মানে অবনত হওয়া ও স্থির হওয়া; নামাযে মুফাসসিরগণ একে বর্ণনা করেন — হৃদয় আল্লাহর সামনে উপস্থিত হয়ে দাঁড়ায়, আর অঙ্গ-প্রত্যঙ্গ তার সহমর্মিতায় শান্ত হয়ে আসে। এটিকে প্রথমে রাখা হয়েছে কারণ পুরো দ্বীন যে আমলকে ঘিরে গড়া, এ হলো তার অন্দরমহল: নামায মানে সাক্ষাৎ, নড়াচড়া নয়।"
          },
          {
            "en": "The wording repays attention: fi salatihim, in their prayer — khushu' is located inside the act, a state to be entered; and salatihim, their prayer, hints at ownership, for a thing is guarded when it is felt as one's own. Al-Bukhari relates from Anas (RA) that the Prophet ﷺ sternly warned people who lift their gaze to the sky during prayer — even the eyes are gathered in. The body is taught to stand still so that the heart can.",
            "bn": "শব্দবিন্যাসটি মনোযোগের প্রতিদান দেয়: 'ফী সালাতিহিম' — তাদের নামাযের ভেতরে — খুশুর অবস্থান কাজটির অভ্যন্তরে, এ এমন এক অবস্থা যাতে প্রবেশ করতে হয়; আর 'সালাতিহিম' — তাদের নামায — মালিকানার ইঙ্গিত দেয়, কারণ কোনো জিনিস তখনই পাহারা পায় যখন তা নিজের বলে অনুভূত হয়। বুখারী আনাস (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ নামাযে আকাশের দিকে দৃষ্টি তোলা লোকদের কঠোরভাবে সতর্ক করেছেন — এমনকি চোখদুটোকেও গুটিয়ে আনা হয়। দেহকে স্থির দাঁড়াতে শেখানো হয়, যাতে হৃদয় স্থির হতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Bracket of Prayer",
          "bn": "নামাযের বন্ধনী"
        },
        "p": [
          {
            "en": "Ibn Kathir observes that the passage opens with the prayer's khushu' at 23:2 and closes with its guarding at 23:9 — beginning and ending the portrait of success with salah. The bracket carries a teaching: quality first, constancy last, and everything else — speech, wealth, chastity, trust — held between them. A life framed by prayer at both edges is what the surah means by a believer; the traits in the middle are what such framing produces.",
            "bn": "ইবনে কাসীর লক্ষ করেন, অনুচ্ছেদটি খোলে 23:2 আয়াতে নামাযের খুশু দিয়ে, আর বন্ধ হয় 23:9 আয়াতে তার হেফাজত দিয়ে — সফলতার প্রতিকৃতির শুরু ও শেষ দুটোই সালাত দিয়ে। এই বন্ধনী একটি শিক্ষা বহন করে: আগে মান, শেষে নিয়মানুবর্তিতা, আর বাকি সব — কথা, সম্পদ, চারিত্রিক পবিত্রতা, আমানত — এ দুয়ের মাঝে ধরা। দুই কিনারায় নামাযে বাঁধাই করা একটি জীবন — সূরাটি 'মুমিন' বলতে এটিই বোঝায়; মাঝের গুণগুলো সেই বাঁধাইয়েরই ফসল।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning From Laghw",
          "bn": "লাগও থেকে ফিরে থাকা"
        },
        "p": [
          {
            "en": "The second trait: wa-alladhina hum 'ani al-laghwi mu'ridun — those who turn away from laghw. Laghw is whatever carries no benefit: idle talk, vain disputes, entertainment that leaves nothing behind, and at its worst, falsehood. The word is a participle, mu'ridun, ones turning aside — not fighting laghw, not policing it in others, simply withdrawing their attention from it. 25:72 shows the same gait: when they pass by laghw, they pass with dignity.",
            "bn": "দ্বিতীয় গুণ: 'ওয়াল্লাযীনা হুম আনিল-লাগবি মু'রিদূন' — যারা লাগও থেকে মুখ ফিরিয়ে থাকে। 'লাগও' হলো যা কিছু কোনো উপকার বহন করে না: অনর্থক কথা, বৃথা তর্ক, যে বিনোদন পেছনে কিছুই রেখে যায় না, আর তার নিকৃষ্টতম রূপে — মিথ্যা। শব্দটি একটি কর্তৃবাচক বিশেষণ-পদ (ইসম ফা'ইল) — 'মু'রিদূন', পাশ কাটিয়ে চলা মানুষ — লাগওয়ের সঙ্গে লড়াই নয়, অন্যদের মধ্যে তার পাহারাদারিও নয়, স্রেফ তা থেকে নিজেদের মনোযোগ তুলে নেওয়া। 25:72 একই চলন দেখায়: তারা যখন লাগওয়ের পাশ দিয়ে যায়, মর্যাদার সঙ্গে পেরিয়ে যায়।"
          },
          {
            "en": "28:55 adds the words of such people: when they hear laghw they turn from it and say, to us our deeds and to you yours — peace be upon you; we do not seek the ignorant. The commentators note the connection between this trait and the first: a heart soaked in idle speech arrives at prayer still buzzing with it. Guarding the tongue and ears between prayers is how khushu' inside the prayer is provisioned; the two traits are one economy of attention.",
            "bn": "28:55 এমন মানুষদের কথাগুলোও যোগ করে: তারা লাগও শুনলে তা থেকে মুখ ফিরিয়ে নেয় এবং বলে — আমাদের আমল আমাদের, তোমাদের আমল তোমাদের; তোমাদের প্রতি সালাম, আমরা অজ্ঞদের সঙ্গ চাই না। মুফাসসিরগণ এই গুণ ও প্রথম গুণের সংযোগটি লক্ষ করেন: অনর্থক কথায় ভেজা হৃদয় নামাযে পৌঁছেও তার গুঞ্জন নিয়ে হাজির হয়। নামাযগুলোর মাঝের সময়ে জিহ্বা ও কান পাহারা দেওয়াই হলো নামাযের ভেতরের খুশুর রসদ জোগানো; গুণ দুটি আসলে মনোযোগের একটিই অর্থনীতি।"
          }
        ]
      },
      {
        "h": {
          "en": "Success Redefined",
          "bn": "সফলতার নতুন সংজ্ঞা"
        },
        "p": [
          {
            "en": "The definition cuts against the market's. Nothing in 23:1-11 mentions accumulating wealth, status, safety or length of days; the failed and the flourishing are distinguished by the quality of worship and the discipline of speech and appetite. The Quran prices the alternatives elsewhere too: 87:14-15 — he has succeeded who purifies himself, remembers his Lord's name and prays; 91:9-10 — he succeeds who purifies the soul, and he fails who buries it. Falah is consistently an inward transaction with outward fruit.",
            "bn": "সংজ্ঞাটি বাজারের সংজ্ঞার বিপরীতে কাটে। 23:1-11 আয়াতের কোথাও সম্পদ জমানো, মর্যাদা, নিরাপত্তা বা আয়ুর দৈর্ঘ্যের উল্লেখ নেই; ব্যর্থ আর সফলের পার্থক্য করা হয়েছে ইবাদতের মান এবং কথা ও প্রবৃত্তির শৃঙ্খলা দিয়ে। কুরআন অন্যত্রও বিকল্পগুলোর দাম বেঁধে দেয়: 87:14-15 — সে-ই সফল হয়েছে, যে নিজেকে পরিশুদ্ধ করেছে, তার রবের নাম স্মরণ করেছে এবং নামায পড়েছে; 91:9-10 — সে-ই সফল, যে আত্মাকে পরিশুদ্ধ করে, আর সে-ই ব্যর্থ, যে তাকে কলুষে ঢেকে দেয়। 'ফালাহ' ধারাবাহিকভাবেই এক ভেতরের লেনদেন, যার ফল বাইরে ফলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Entering the Description",
          "bn": "বর্ণনাটির ভেতরে ঢোকা"
        },
        "p": [
          {
            "en": "The practical door is the first trait, taken concretely. Khushu' responds to preparation: arriving before the iqamah rather than during it, knowing the meaning of what is recited, and remembering that the prayer may be one's last — the Prophet ﷺ advised a man, in what Ibn Majah relates, to pray the prayer of one bidding farewell. None of this is exotic; all of it is scheduling and attention, which is why the verse can fairly ask it of everyone.",
            "bn": "ব্যবহারিক দরজাটি হলো প্রথম গুণ — বাস্তবভাবে ধরা। খুশু প্রস্তুতিতে সাড়া দেয়: ইকামতের সময় নয়, তার আগে পৌঁছানো; যা তিলাওয়াত হচ্ছে তার অর্থ জানা; আর মনে রাখা যে এই নামাযই শেষ নামায হতে পারে — নবী ﷺ এক ব্যক্তিকে উপদেশ দিয়েছিলেন — ইবনে মাজাহ যা বর্ণনা করেন — বিদায়ী মানুষের নামাযের মতো নামায পড়তে। এর কোনোটিই দুর্লভ কিছু নয়; সবটাই সময় ব্যবস্থাপনা আর মনোযোগ — আর এ কারণেই আয়াতটি ন্যায্যভাবে সবার কাছে তা চাইতে পারে।"
          },
          {
            "en": "Then the second trait, also concretely: an audit of inputs. What a person scrolls, overhears and repeats is not neutral; the verse treats attention as capital that success requires spending well. Turning away — mu'ridun — is undramatic: closing the feed, leaving the pointless argument, letting a rumour die at one's own ear. Done for Allah, these small withdrawals are listed in the Quran among the traits of the people who inherit Firdaws, which is a remarkable exchange rate.",
            "bn": "তারপর দ্বিতীয় গুণ, সেটিও বাস্তবভাবে: যা ঢোকে তার হিসাব-নিরীক্ষা। মানুষ যা স্ক্রল করে, কানে তোলে আর মুখে ফেরায়, তা নিরপেক্ষ নয়; আয়াতটি মনোযোগকে গণ্য করে এমন পুঁজি হিসেবে, সফলতার জন্য যা ভালোভাবে খরচ করা জরুরি। মুখ ফিরিয়ে নেওয়া — 'মু'রিদূন' — নাটকীয় কিছু নয়: ফিডটি বন্ধ করা, অর্থহীন তর্ক ছেড়ে আসা, গুজবকে নিজের কানেই মরতে দেওয়া। আল্লাহর জন্য করা হলে এই ছোট ছোট সরে আসাগুলোই কুরআনে তালিকাভুক্ত হয় ফিরদাউসের উত্তরাধিকারীদের গুণাবলির মধ্যে — যা এক অসাধারণ বিনিময়-হার।"
          }
        ]
      }
    ]
  },
  "23:6": {
    "sections": [
      {
        "h": {
          "en": "A Guard Set on Desire",
          "bn": "কামনার উপর পাহারা"
        },
        "p": [
          {
            "en": "The list of the successful believers pauses on something intimate. Its fifth mark reads, wallażīna hum lifurūjihim ḥāfiẓūn, and those who guard their private parts (23:5). Ibn Kathir reads it as guarding them from the unlawful, so that a believer does not fall into the fornication or the like that Allah forbade. The word ḥāfiẓūn, guardians and keepers, casts the body's intimacy as a thing kept under watch, not simply spent. And it stands here among prayer, honest speech and charity, not off in a corner of its own.",
            "bn": "সফলকাম মু'মিনদের তালিকা এখানে থামে এক ব্যক্তিগত কথায়। এর পঞ্চম গুণ: ওয়াল্লাযীনা হুম লিফুরূজিহিম হাফিযূন, আর যারা নিজেদের লজ্জাস্থান হেফাজত করে (২৩:৫)। ইবন কাসীর একে পড়েন হারাম থেকে হেফাজত হিসেবে, যাতে মু'মিন আল্লাহর নিষিদ্ধ করা যিনা বা এ জাতীয় কাজে না পড়ে। হাফিযূন শব্দটি, অর্থাৎ পাহারাদার ও রক্ষক, শরীরের ঘনিষ্ঠতাকে দেখায় পাহারায় রাখা এক জিনিস হিসেবে, নিছক ভোগের বিষয় নয়। আর এ গুণ এখানে বসেছে নামাজ, সৎ কথা ও দানের পাশে, আলাদা কোনো কোণে নয়।"
          },
          {
            "en": "Then the line is drawn: illā ʿalā azwājihim aw mā malakat aymānuhum (23:6), except with their wives or those their right hands possess. At-Tabari glosses ʿalā azwājihim as the wives whom Allah made lawful to men through marriage, and the closing fa-innahum ghayru malūmīn as this: such a man is not rebuked, not blamed, and bears no sin he could be faulted for. So the exception is not a hole cut in the guarding. It is the place where the guarding rightly comes to rest.",
            "bn": "এরপর টানা হয় সীমারেখা: ইল্লা আলা আযওয়াজিহিম আও মা মালাকাত আইমানুহুম (২৩:৬), নিজেদের স্ত্রী কিংবা তাদের ডান হাত যাদের মালিক, তারা ছাড়া। তাবারী আলা আযওয়াজিহিম-এর ব্যাখ্যা দেন সেই স্ত্রীরা হিসেবে যাদের আল্লাহ বিয়ের মাধ্যমে পুরুষদের জন্য হালাল করেছেন, আর শেষাংশ ফাইন্নাহুম গাইরু মালূমীন-এর অর্থ করেন এভাবে: এমন লোককে ভর্ৎসনা করা হয় না, নিন্দা করা হয় না, আর এতে এমন কোনো গুনাহ নেই যার জন্য তাকে দোষ দেওয়া যায়। তাই এই ব্যতিক্রম হেফাজতে কাটা কোনো ফাঁক নয়। এ সেই জায়গা যেখানে হেফাজত যথাযথভাবে থিতু হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Exception That Bounds It",
          "bn": "সীমা টেনে দেওয়া ব্যতিক্রম"
        },
        "p": [
          {
            "en": "A small preposition does real work here. Al-Baghawi notes that ʿalā carries the sense of min, from; al-Farrāʾ, cited by al-Qurtubi, reads the phrase as from their wives whom Allah has made lawful to them, whom they do not exceed. Desire, then, is licensed toward a named few and nowhere else. What the verse praises is not appetite satisfied but appetite confined, pointed at what is permitted and turned away from all the rest. The grammar narrows the field on purpose, and it opens no door that the guarding had already closed.",
            "bn": "এখানে ছোট্ট এক অব্যয় বড় কাজ করে। বাগভী বলেন, আলা এখানে মিন বা 'থেকে' অর্থে এসেছে; ফাররা, যাঁকে কুরতুবী উদ্ধৃত করেন, বাক্যটি পড়েন এভাবে: তাদের সেই স্ত্রীদের থেকে যাদের আল্লাহ হালাল করেছেন, যাদের তারা অতিক্রম করে না। কামনা তাই বৈধ হয়েছে গুটিকয় নির্দিষ্ট মানুষের দিকে, আর কোথাও নয়। আয়াত যা প্রশংসা করে তা চাহিদা মিটিয়ে ফেলা নয়, বরং চাহিদাকে বেঁধে রাখা, অনুমোদিতের দিকে তাক করা আর বাকি সবকিছু থেকে মুখ ফেরানো। ব্যাকরণ ইচ্ছে করেই পরিসরটা সরু করে, হেফাজত যে দরজা বন্ধ করেছে তা এটি নতুন করে খোলে না।"
          },
          {
            "en": "Al-Baghawi adds a condition easy to miss. A man is spared blame only when he comes in the way the Sacred Law allowed. Intimacy in a forbidden manner, or during menstruation and post-natal bleeding, he calls prohibited, and for it the man is indeed blamed. So even inside the lawful bond the permission is not total; it keeps a shape. The verse hands nobody an open-ended licence. It hands a licence with edges, and the edges are part of the gift. Read this way, the licence is a mercy with manners, not a blank permission a man may carry wherever his want happens to lead.",
            "bn": "বাগভী এমন এক শর্ত যোগ করেন যা সহজে চোখ এড়িয়ে যায়। একজন পুরুষ নিন্দা থেকে তখনই রেহাই পায় যখন সে শরিয়ত-অনুমোদিত পথে আসে। নিষিদ্ধ পন্থায়, কিংবা হায়েজ ও নিফাসের সময় ঘনিষ্ঠতাকে তিনি হারাম বলেন, আর তাতে পুরুষ প্রকৃতপক্ষে দোষী। তাই বৈধ বন্ধনের ভেতরেও অনুমতি সম্পূর্ণ নয়, তার একটা আকার আছে। আয়াত কাউকে খোলা-হাতে ছাড় দেয় না। যে ছাড় দেয় তার সীমা আছে, আর সেই সীমাটাই দানের অংশ। এভাবে দেখলে এই ছাড় শালীনতা-সহ এক রহমত, চাওয়া যেদিকে টানে সেদিকেই বয়ে নেওয়ার মতো খোলা কোনো অনুমতি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Second Clause Meant",
          "bn": "দ্বিতীয় বাক্যাংশের অর্থ"
        },
        "p": [
          {
            "en": "The phrase mā malakat aymānuhum, those whom the right hands possess, the commentators on this verse read plainly. At-Tabari, as-Sa'di and al-Muyassar each gloss it as the imāʾ, the bondwomen of that era's legal order, adding that no blame attaches because Allah had made this lawful within that setting. Ibn Kathir names them the captives held as such. It is history being reported by the mufassirūn, the law of a world that was, not a practice the verse sets out to commend. The reading runs uniform across them, and none reaches past the plain sense of the words to make the clause say more than its own age did.",
            "bn": "মা মালাকাত আইমানুহুম, অর্থাৎ ডান হাত যাদের মালিক, এই আয়াতের তাফসীরকারেরা সোজাভাবেই পড়েন। তাবারী, সা'দী ও মুয়াসসার প্রত্যেকে একে ব্যাখ্যা করেন সেকালের আইনি ব্যবস্থার দাসীদের হিসেবে, আর বলেন যে এতে কোনো নিন্দা নেই, কারণ আল্লাহ সেই পরিসরে তা হালাল করেছিলেন। ইবন কাসীর তাদের বলেন এভাবে ধরে রাখা বন্দিদের। এ তাফসীরকারদের বর্ণিত ইতিহাস, এক বিগত জগতের আইন, আয়াত যা সুপারিশ করতে নামেনি এমন কোনো প্রথা নয়। তাদের সবার পড়াই অভিন্ন, আর কেউ শব্দের সোজা অর্থ ছাড়িয়ে বাক্যাংশটিকে তার নিজের যুগের চেয়ে বেশি কিছু বলাতে যায় না।"
          },
          {
            "en": "This must be said plainly, in both languages. The classical commentators are describing an institution of their time's law; they are not issuing a licence for ours. The verse states what the sources state and licenses nothing against any living person or community. The slavery those societies knew is gone, and the passage never rested its weight there. Its weight rests on the guarding, on holding desire inside lawful bounds, in whatever age a believer happens to read it. To celebrate it misreads the text, and to rail at it misreads it too; the sober course is to report the scholars' scope and turn back to restraint.",
            "bn": "কথাটা দুই ভাষাতেই স্পষ্ট করে বলা দরকার। ক্লাসিক্যাল তাফসীরকারেরা তাঁদের কালের আইনের এক প্রতিষ্ঠানের বর্ণনা দিচ্ছেন, আমাদের কালের জন্য কোনো অনুমতি জারি করছেন না। আয়াত যা উৎসে আছে তা-ই বলে, আর কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। সেসব সমাজ যে দাসপ্রথা জানত তা আজ নেই, আর এ অংশ কখনো সেখানে তার ভার রাখেনি। তার ভার রাখা আছে হেফাজতের উপরে, যে-কোনো যুগে বান্দা এ পড়ুক না কেন, কামনাকে বৈধ সীমার ভেতরে ধরে রাখার উপরে। একে উদযাপন করা যেমন আয়াতকে ভুল পড়া, তেমনি আয়াতের বিরুদ্ধে গর্জানোও ভুল পড়া; ধীরস্থির পথ হলো শুধু আলেমদের দেওয়া পরিধিটুকু জানিয়ে ভারটা সংযমের দিকে ফিরিয়ে আনা।"
          },
          {
            "en": "Al-Qurtubi records how hedged the clause always was. By the agreement of the jurists, he reports, a woman may not take her own male slave in this way; the address is to men, and she does not enter the verse. He notes too that ownership dissolves a prior marriage rather than divorcing it, so the categories never blur. The detail earns its place only to show how bound to its own legal world this clause has been from the very start. In his hands the whole discussion stays technical and time-bound, a matter of a vanished law, never a charter a reader today could reach for.",
            "bn": "কুরতুবী দেখান বাক্যাংশটি বরাবর কতটা বেড়া-দেওয়া ছিল। তিনি জানান, ফকীহদের ঐকমত্যে একজন নারী এভাবে নিজের পুরুষ দাসকে নিতে পারে না; সম্বোধন পুরুষদের প্রতি, নারী এ আয়াতে ঢোকে না। তিনি এ-ও বলেন, মালিকানা আগের বিয়েকে তালাক না দিয়ে বরং ভেঙে দেয়, ফলে শ্রেণিগুলো কখনো ঘোলাটে হয় না। এই খুঁটিনাটির দাম শুধু এটুকু দেখানোয় যে বাক্যাংশটি শুরু থেকেই তার নিজস্ব আইনি জগতের সঙ্গে কতটা বাঁধা ছিল। তাঁর হাতে গোটা আলোচনাই কারিগরি ও কালনির্ভর থাকে, এক বিলুপ্ত আইনের বিষয়, আজকের পাঠক হাত বাড়াতে পারে এমন কোনো সনদ কখনোই নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Beyond That Is Transgression",
          "bn": "এর বাইরে সীমালঙ্ঘন"
        },
        "p": [
          {
            "en": "Then comes the seal: famani-btaghā warāʾa dhālika fa-ulāʾika humu l-ʿādūn (23:7), but whoever seeks beyond that, those are the transgressors. Ibn Kathir glosses dhālika as anything other than a wife or a lawful bondwoman, and al-ʿādūn as the aggressors, those who overstep. The clause turns the exception into a fence. Whatever the two lawful categories do not hold falls, by the plain force of this verse, on the far side of the line, in the country of transgression. The verse does not merely permit the two; it closes off everything else, so that the permission and the prohibition are drawn by one and the same stroke.",
            "bn": "এরপর আসে সিলমোহর: ফামানিবতাগা ওয়ারাআ যালিকা ফাউলাইকা হুমুল আদূন (২৩:৭), তবে যে এর বাইরে চায়, তারাই সীমালঙ্ঘনকারী। ইবন কাসীর যালিকা-র ব্যাখ্যা করেন স্ত্রী বা বৈধ দাসী ছাড়া অন্য যেকোনো কিছু হিসেবে, আর আল-আদূন মানে করেন আগ্রাসী, যারা সীমা ছাড়ায়। এই বাক্য ব্যতিক্রমকে বানিয়ে দেয় এক বেড়া। দুই বৈধ শ্রেণি যা ধরে না, তা এই আয়াতের সোজা জোরে গিয়ে পড়ে রেখার ওপারে, সীমালঙ্ঘনের দেশে। আয়াত শুধু দুইকে অনুমতিই দেয় না; বাকি সব বন্ধ করে দেয়, ফলে অনুমতি আর নিষেধ একই টানে আঁকা হয়।"
          },
          {
            "en": "The jurists leaned their rulings on this fence. Ibn Kathir reports that al-Shāfiʿī and those with him read in it the prohibition of a solitary act, since it lies outside the two categories the verse allowed. Al-Qurtubi keeps a real disagreement open here: the general body of scholars held such an act forbidden, while Ahmad ibn Hanbal, for all his caution, permitted it, likening it to the letting of blood. Both names stand, unranked. The point that survives the dispute is that the bounds are real.",
            "bn": "ফকীহরা তাঁদের বিধান এই বেড়ার উপরেই দাঁড় করান। ইবন কাসীর জানান, শাফিঈ ও তাঁর অনুসারীরা এতে এক নিভৃত কাজের নিষেধ পড়েছেন, কারণ তা আয়াতের অনুমোদিত দুই শ্রেণির বাইরে পড়ে। কুরতুবী এখানে এক সত্যিকারের মতভেদ খোলা রাখেন: আলেমদের সাধারণ দল একে হারাম ধরেছেন, আর আহমাদ ইবন হাম্বল, তাঁর সমস্ত সতর্কতা সত্ত্বেও, একে জায়েজ বলেছেন, রক্ত বের করার সঙ্গে তুলনা টেনে। দুটি নামই থাকে, কোনো ক্রম ছাড়া। বিতর্ক পেরিয়ে যা টিকে থাকে তা হলো সীমাগুলো সত্যিকারের।"
          }
        ]
      },
      {
        "h": {
          "en": "A Fear That Held",
          "bn": "যে ভয় থামিয়ে দিল"
        },
        "p": [
          {
            "en": "The Sunnah gives this kind of guarding a face. In Ṣaḥīḥ al-Bukhārī (660), Abu Hurayra reports the Prophet ﷺ naming seven whom Allah will shade on a Day when there is no shade but His. The wording, quoted whole: a just ruler; a youth raised worshipping his Lord; a man whose heart is tied to the mosques; two men who love one another for Allah's sake, meeting and parting upon it; a man whom a woman of rank and beauty calls, and he says, I fear Allah; a man who gives charity in secret; and a man who remembers Allah alone until his eyes overflow.",
            "bn": "সুন্নাহ এই ধরনের হেফাজতকে একটা চেহারা দেয়। সহীহ বুখারীতে (৬৬০) আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ সাতটি শ্রেণির কথা বলেছেন যাদের আল্লাহ সেদিন ছায়া দেবেন যেদিন তাঁর ছায়া ছাড়া কোনো ছায়া থাকবে না। শব্দগুলো পুরো তুলে ধরা হলো: ন্যায়পরায়ণ শাসক; রবের ইবাদতে বেড়ে ওঠা যুবক; যার হৃদয় মসজিদের সঙ্গে বাঁধা এমন ব্যক্তি; দুই ব্যক্তি যারা আল্লাহর জন্য পরস্পরকে ভালোবাসে, তাঁর জন্যই মেলে ও তাঁর জন্যই বিদায় নেয়; এমন ব্যক্তি যাকে পদমর্যাদা ও রূপের অধিকারিণী কোনো নারী ডাকে, আর সে বলে, আমি আল্লাহকে ভয় করি; এমন ব্যক্তি যে গোপনে দান করে; আর এমন ব্যক্তি যে নির্জনে আল্লাহকে স্মরণ করে আর তার চোখ ছাপিয়ে যায়।"
          },
          {
            "en": "The figure the verse most nearly touches is the fifth: a man whom a woman of rank and beauty invites, with every worldly reason to yield, and he answers only, I fear Allah. This is chastity as the passage means it. Not a man emptied of desire, but a man whose desire meets a larger fear and halts. Al-Bukhārī sets him in the shade of the Throne beside the just ruler and the secret giver, which tells you how heavily the guarding of 23:5 is weighed.",
            "bn": "আয়াত সবচেয়ে কাছ থেকে যাকে ছোঁয় সে পঞ্চম জন: এমন পুরুষ যাকে পদমর্যাদা ও রূপের অধিকারিণী নারী ডাকে, বশ হওয়ার সব দুনিয়াবি কারণ হাতে, তবু সে শুধু জবাব দেয়, আমি আল্লাহকে ভয় করি। এ-ই সতীত্ব, আয়াত যেভাবে বোঝায়। কামনা-শূন্য কোনো পুরুষ নয়, বরং যার কামনা এক বড় ভয়ের মুখে থেমে যায়। বুখারী তাকে আরশের ছায়ায় বসান ন্যায়পরায়ণ শাসক আর গোপন দাতার পাশে, যা বলে দেয় ২৩:৫-এর হেফাজত কত ভারী করে মাপা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Desire Kept Under Rein",
          "bn": "লাগাম পরানো কামনা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an reads the whole clause as guarding the private parts against unlawful liaison. The believers meet their need with their wives and by the lawful bond, and hold clear of the forbidden. Then it names the moral the verse is driving at: that sexual desire must be kept under strict control and never allowed to become mere gratification of the passions. The permission the verse grants is real, but it is meant as a channel for the desire, not a licence to be ruled by it. Restraint here is active, not passive; it channels a real appetite toward a lawful end rather than pretending it is not there.",
            "bn": "মাআরিফুল কুরআন গোটা বাক্যাংশকে পড়ে অবৈধ সম্পর্ক থেকে লজ্জাস্থানের হেফাজত হিসেবে। মু'মিনরা নিজেদের স্ত্রী ও বৈধ বন্ধনের মাধ্যমে চাহিদা মেটায়, আর নিষিদ্ধ থেকে দূরে থাকে। এরপর তা আয়াতের আসল শিক্ষাটি ধরিয়ে দেয়: যৌন কামনাকে কঠোরভাবে বশে রাখতে হবে, একে কখনো নিছক প্রবৃত্তির ভোগে পরিণত হতে দেওয়া যাবে না। আয়াত যে অনুমতি দেয় তা সত্যি, কিন্তু তা কামনার জন্য এক নালা হিসেবে রাখা, কামনার হাতে বন্দি হওয়ার ছাড়পত্র নয়। এখানকার সংযম নিষ্ক্রিয় নয়, সক্রিয়; বাস্তব এক চাহিদাকে একেবারে নেই বলে ভান না করে তাকে বৈধ লক্ষ্যের দিকে বইয়ে দেয়।"
          },
          {
            "en": "As-Sa'di and al-Muyassar give the reason there is no blame in a single short line: because Allah has made it lawful. That is worth sitting with. The believer's restraint is not a grim war waged on the body. It is a life lived inside a mercy already granted, taking the wide lawful good and leaving the narrow forbidden thing. Al-Muyassar calls the lawful enjoyment exactly that, a thing carrying no blame and no constraint, since its bound was set by the very Lord who made the desire.",
            "bn": "সা'দী ও মুয়াসসার এক ছোট্ট বাক্যেই বলে দেন কেন এতে কোনো নিন্দা নেই: কারণ আল্লাহ তা হালাল করেছেন। এটুকু নিয়ে একটু থামা ভালো। মু'মিনের সংযম শরীরের বিরুদ্ধে গোমড়া কোনো যুদ্ধ নয়। এ এমন এক জীবন যা আগেই দেওয়া এক রহমতের ভেতরে বাঁচে, প্রশস্ত বৈধ কল্যাণটুকু নেয় আর সংকীর্ণ নিষিদ্ধ জিনিসটি ছাড়ে। মুয়াসসার বৈধ উপভোগকে ঠিক তা-ই বলেন, নিন্দা ও সংকোচহীন এক জিনিস, কারণ যিনি এর সীমা টেনেছেন তিনিই কামনাটি বানিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Counted Among the Saved",
          "bn": "সফলদের কাতারে গণিত"
        },
        "p": [
          {
            "en": "Set the clause back into its list. The believer who guards here stands in the same run of verses as those humble in prayer, those who turn from idle talk, those faithful to trust and pledge (23:8). Guarding the body is not a lesser, private virtue tacked on at the end. The Qur'an counts it a mark of the mu'min, level with worship and honesty. Taken together, the passage says, these are the people who inherit al-Firdaus (23:11) and abide there. Chastity keeps the same company as prayer, which is why losing it is not a private slip but a crack in the whole description of the saved.",
            "bn": "বাক্যাংশটিকে তার তালিকায় ফিরিয়ে রাখুন। এখানে যে হেফাজত করে সে দাঁড়িয়ে আছে সেই একই আয়াতগুচ্ছে যেখানে আছে নামাজে বিনয়ীরা, অসার কথা থেকে যারা মুখ ফেরায়, আমানত ও অঙ্গীকারে যারা বিশ্বস্ত (২৩:৮)। শরীরের হেফাজত শেষে জুড়ে দেওয়া কোনো ছোট, ব্যক্তিগত গুণ নয়। কুরআন একে গণনা করে মু'মিনের এক নিদর্শন হিসেবে, ইবাদত ও সততার সমান কাতারে। এরা সবাই মিলেই, আয়াত বলে, ফিরদাউসের উত্তরাধিকারী (২৩:১১) আর সেখানে চিরকাল থাকবে। সতীত্ব নামাজের সঙ্গেই এক কাতারে থাকে, তাই একে হারানো ব্যক্তিগত ছোট্ট ভুল নয়, বরং সফলদের গোটা বর্ণনায় এক ফাটল।"
          },
          {
            "en": "This is why the exception closes not with a shrug but with fa-innahum ghayru malūmīn, they are not blamed. In a sūrah that opens by declaring the believers already successful (23:1), freedom from blame is itself a quiet praise. The man who keeps desire in its lawful place has nothing he must answer for. He is not merely tolerated at the edge of the community. He is counted in, among the very people the chapter has just called the successful. Not to be blamed, in a sūrah built on praise, is to be quietly named among the winners, and the guarded believer wears that verdict.",
            "bn": "এ কারণেই ব্যতিক্রম শেষ হয় কাঁধ ঝাঁকিয়ে নয়, বরং ফাইন্নাহুম গাইরু মালূমীন দিয়ে, তারা নিন্দিত নয়। যে সূরা শুরুই হয় মু'মিনদের সফলকাম ঘোষণা দিয়ে (২৩:১), সেখানে নিন্দা থেকে মুক্তি নিজেই এক নীরব প্রশংসা। যে কামনাকে তার বৈধ জায়গায় রাখে, তার জবাব দেওয়ার কিছু নেই। তাকে সমাজের কিনারে কেবল সহ্য করা হয় না। তাকে গোনা হয় ভেতরে, ঠিক সেই মানুষদের মধ্যে যাদের অধ্যায় খানিক আগেই সফলকাম বলেছে। প্রশংসার উপর গড়া সূরায় নিন্দামুক্ত থাকা মানে বিজয়ীদের কাতারে চুপচাপ নাম ওঠা, আর হেফাজতকারী মু'মিন সেই রায়টিই বহন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Asks",
          "bn": "আয়াত আমাদের কাছে যা চায়"
        },
        "p": [
          {
            "en": "Carried out of the seventh century and into a phone-lit night, the verse loses none of its edge. The lawful bounds it names are fewer for most readers now, but the guarding it asks has not changed, and the transgression beyond the bound (23:7) sits as close as a bright screen in a dark room. Chastity was never the claim that desire is shameful. It is the discipline of aiming desire only where Allah has opened a door, and keeping it off every door He has not.",
            "bn": "সপ্তম শতাব্দী থেকে বেরিয়ে ফোনের আলোয় ভেজা রাতে এসেও আয়াতের ধার একটুও কমে না। বেশিরভাগ পাঠকের কাছে এর বৈধ সীমা আজ কম, কিন্তু যে হেফাজত এটি চায় তা বদলায়নি, আর সীমার ওপারের সীমালঙ্ঘন (২৩:৭) অন্ধকার ঘরে জ্বলজ্বলে এক পর্দার মতোই কাছে। সতীত্ব কখনোই এ দাবি ছিল না যে কামনা লজ্জার। এ হলো কামনাকে শুধু সেদিকেই তাক করার অনুশীলন যেখানে আল্লাহ দরজা খুলেছেন, আর যেসব দরজা তিনি খোলেননি সেসব থেকে একে সরিয়ে রাখা।"
          },
          {
            "en": "So the verse leaves a plain question at the threshold of the private hour. When nobody is watching and the wrong is easy and free, does the fear of Allah still hold, as it held the man in the hadith? The successful believer is not a person who feels no pull toward the forbidden. He is the person who guards, keeps within the lawful bound, and trusts that the mercy which drew the bound is wider and kinder than whatever waits outside it.",
            "bn": "তাই আয়াত নিভৃত মুহূর্তের দরজায় রেখে যায় এক সোজা প্রশ্ন। যখন কেউ দেখছে না আর অন্যায়টা সহজ ও বিনা মূল্যের, তখনও কি আল্লাহর ভয় ধরে রাখে, যেমন হাদিসের সেই মানুষটিকে ধরে রেখেছিল? সফলকাম মু'মিন এমন কেউ নয় যে নিষিদ্ধের টান একদম টের পায় না। সে সেই মানুষ যে হেফাজত করে, বৈধ সীমার ভেতরে থাকে, আর বিশ্বাস রাখে যে সীমাটি যে রহমত টেনেছে তা বাইরের যেকোনো কিছুর চেয়ে প্রশস্ত ও দয়ালু।"
          }
        ]
      }
    ]
  },
  "23:14": {
    "sections": [
      {
        "h": {
          "en": "One Sentence, One Subject",
          "bn": "এক বাক্য, এক কর্তা"
        },
        "p": [
          {
            "en": "The verse continues an argument begun two verses earlier. 23:12 states that man was created from an extract of clay, and 23:13 that he was then placed as a drop in a secure lodging. 23:14 carries the chain forward with linked verbs, each stage named and the next made out of it. The grammar is worth noticing before the content.",
            "bn": "আয়াতটি দুই আয়াত আগে শুরু হওয়া একটি যুক্তির ধারাবাহিকতা। 23:12 বলে, মানুষকে সৃষ্টি করা হয়েছে মাটির নির্যাস থেকে; আর 23:13 বলে, এরপর তাকে শুক্রবিন্দু রূপে এক সুরক্ষিত আধারে স্থাপন করা হয়েছে। 23:14 সেই শৃঙ্খলটিকে পরস্পরযুক্ত ক্রিয়াপদ দিয়ে এগিয়ে নেয় — প্রতিটি স্তরের নাম বলা হয় এবং পরেরটি তা থেকেই বানানো হয়। বিষয়বস্তুর আগে ব্যাকরণটিই লক্ষ করার মতো।"
          },
          {
            "en": "Every verb in the chain has the same subject, and it is We. Nothing in the sentence develops, becomes or emerges of itself. Even in the last clause, where a genuinely new kind of thing appears, the verb is ansha'nahu, We produced him. A reader accustomed to describing his own beginnings in the passive voice is handed a sentence in which each step has an agent, and the agent never changes.",
            "bn": "এই শৃঙ্খলের প্রতিটি ক্রিয়াপদের কর্তা একই, আর তা হলো 'আমি'। বাক্যটির কোথাও কিছু নিজে থেকে বিকশিত হয় না, হয়ে ওঠে না, বেরিয়ে আসে না। এমনকি শেষ বাক্যাংশেও, যেখানে সত্যিকারের নতুন ধরনের এক সত্তা আবির্ভূত হয়, ক্রিয়াপদটি 'আনশা'নাহু' — আমি তাকে সৃজন করেছি। যে পাঠক নিজের সূচনা বর্ণনা করতে অভ্যস্ত কর্মবাচ্যে, তার হাতে এমন এক বাক্য তুলে দেওয়া হয় যার প্রতিটি ধাপের একজন কর্তা আছে, এবং সেই কর্তা কখনো বদলায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Another Creation",
          "bn": "এক নতুন সৃষ্টি"
        },
        "p": [
          {
            "en": "The final clause is thumma ansha'nahu khalqan akhar, then We produced him as another creation. Ibn Kathir explains it as the breathing of the soul, after which it moved and became a new creature, one that hears, sees, understands and moves. He also reports, from al-Awfi from Ibn Abbas (RA), a second reading: changed from state to state until it comes out an infant, and then on through childhood, youth, maturity and old age.",
            "bn": "শেষ বাক্যাংশটি হলো 'ছুম্মা আনশা'নাহু খালকান আখার' — অতঃপর আমি তাকে এক নতুন সৃষ্টিরূপে দাঁড় করালাম। ইবনে কাসীর একে ব্যাখ্যা করেন রূহ ফুঁকে দেওয়া হিসেবে, যার পর তা নড়ে উঠল এবং এমন এক নতুন সত্তা হলো যে শোনে, দেখে, বোঝে ও চলে। তিনি আল-আওফী সূত্রে ইবনে আব্বাস (রাঃ) থেকে আরেকটি পাঠও উল্লেখ করেন: এক অবস্থা থেকে অন্য অবস্থায় বদলাতে বদলাতে শিশু হয়ে ভূমিষ্ঠ হওয়া, তারপর শৈশব, যৌবন, পূর্ণতা ও বার্ধক্যের ভেতর দিয়ে এগোনো।"
          },
          {
            "en": "Both readings agree on the essential thing: this is a change of kind, not another change of size. Something that was being shaped becomes someone who can be addressed. 32:9 says as much in its own words — He proportioned him and breathed into him of His spirit, and made for you hearing and sight and hearts. The faculties named there are exactly the ones by which a person is later held responsible.",
            "bn": "দুটি পাঠই মূল বিষয়ে একমত: এটি ধরনের পরিবর্তন, আকারের আরেকটি পরিবর্তন নয়। যাকে গড়া হচ্ছিল, সে এমন একজন হয়ে ওঠে যাকে সম্বোধন করা যায়। 32:9 নিজের ভাষায় একই কথা বলে — তিনি তাকে সুঠাম করলেন এবং তাতে নিজের পক্ষ থেকে রূহ ফুঁকে দিলেন, আর তোমাদের জন্য শ্রবণ, দৃষ্টি ও হৃদয় দিলেন। সেখানে যেসব শক্তির নাম নেওয়া হয়েছে, ঠিক সেগুলোর ভিত্তিতেই পরে মানুষকে দায়বদ্ধ করা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Argument Does Not Stop Here",
          "bn": "যুক্তি এখানেই থামে না"
        },
        "p": [
          {
            "en": "The chain runs straight on. 23:15 says that after that you are certainly to die, and 23:16 that on the Day of Resurrection you will certainly be raised. Ibn Kathir reads the three verses as one movement: created from nothing, then death, then a creation anew. Whoever accepted the first two steps because he has watched them happen has been walked into the third by the same conjunction that carried him through the first.",
            "bn": "শৃঙ্খলটি সোজা এগিয়ে যায়। 23:15 বলে, এরপর তোমরা অবশ্যই মরবে; আর 23:16 বলে, কিয়ামতের দিন তোমাদের অবশ্যই পুনরুত্থিত করা হবে। ইবনে কাসীর এই তিন আয়াতকে একটি গতিধারা হিসেবে পড়েন: শূন্য থেকে সৃষ্টি, তারপর মৃত্যু, তারপর নতুন করে সৃষ্টি। যে ব্যক্তি প্রথম দুই ধাপ মেনে নিয়েছে কারণ সে সেগুলো ঘটতে দেখেছে, তাকে তৃতীয় ধাপে নিয়ে যাওয়া হয়েছে সেই একই সংযোজক শব্দ দিয়ে যা তাকে প্রথম ধাপ পার করিয়েছিল।"
          },
          {
            "en": "The Quran makes that inference explicit elsewhere. 36:78 has a man ask who will give life to bones once they are disintegrated, and 36:79 answers that the One who produced them the first time will. 30:27 says He begins creation then repeats it, and that is easier for Him. 50:15 asks whether We were wearied by the first creation, and observes that they are in confusion about a new one.",
            "bn": "কুরআন অন্যত্র এই সিদ্ধান্তটি স্পষ্ট করে বলে দেয়। 36:78-এ এক ব্যক্তি জিজ্ঞেস করে, হাড় যখন গলে যাবে তখন কে তাতে প্রাণ দেবে; আর 36:79 জবাব দেয়, যিনি প্রথমবার তা সৃষ্টি করেছেন তিনিই দেবেন। 30:27 বলে, তিনিই সৃষ্টির সূচনা করেন, তারপর তার পুনরাবৃত্তি করেন, আর তা তাঁর জন্য আরও সহজ। 50:15 জিজ্ঞেস করে, প্রথম সৃষ্টিতে কি আমি ক্লান্ত হয়েছিলাম — আর লক্ষ করে যে তারা নতুন সৃষ্টির ব্যাপারে বিভ্রান্তিতে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fatabaraka",
          "bn": "ফাতাবারাকা"
        },
        "p": [
          {
            "en": "Then the verse breaks off and praises: fatabaraka Allahu ahsanu al-khaliqin. The verb tabaraka is built on the root of barakah, good that is abundant and does not run out, and in the Quran it is said only of Allah or of His name. It is not a wish that someone be blessed. It is a statement that such good belongs to Him, offered here as the natural end of the description just given.",
            "bn": "এরপর আয়াতটি বর্ণনা থামিয়ে প্রশংসায় ফেটে পড়ে: ফাতাবারাকাল্লাহু আহসানুল খালিকীন। 'তাবারাকা' ক্রিয়াপদটি গড়া হয়েছে 'বারাকাহ' শব্দমূল থেকে — এমন কল্যাণ যা প্রচুর এবং যা ফুরায় না; আর কুরআনে এটি কেবল আল্লাহ বা তাঁর নামের ক্ষেত্রেই ব্যবহৃত হয়েছে। এটি কারও জন্য বরকতের দোয়া নয়। এটি একটি ঘোষণা যে এই কল্যাণ তাঁরই — আর এখানে তা পেশ করা হয়েছে এইমাত্র দেওয়া বর্ণনার স্বাভাবিক পরিণতি হিসেবে।"
          },
          {
            "en": "This exact form with its connecting fa occurs in one other verse. 40:64 describes Allah making the earth a place of settlement and the sky a structure, then says that He formed you and perfected your forms and provided you with good things, before closing on fatabaraka Allahu rabbu al-alamin. In both places the praise arrives immediately after the shaping of a human being. Worship, not analysis, is the response the Quran models to this subject.",
            "bn": "সংযোজক 'ফা' সহ ঠিক এই রূপটি আর মাত্র একটি আয়াতে এসেছে। 40:64 বর্ণনা করে, আল্লাহ পৃথিবীকে বসবাসের স্থান ও আকাশকে ছাদ বানিয়েছেন, তারপর বলে যে তিনি তোমাদের আকৃতি দিয়েছেন এবং তোমাদের আকৃতি সুন্দর করেছেন ও তোমাদের উত্তম রিযিক দিয়েছেন — এরপর শেষ হয় 'ফাতাবারাকাল্লাহু রাব্বুল আলামীন' দিয়ে। দুই জায়গাতেই প্রশংসাটি আসে মানুষ গড়ার বর্ণনার ঠিক পরে। এই বিষয়ে কুরআন যে সাড়াটি শিখিয়ে দেয় তা হলো ইবাদত, বিশ্লেষণ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Best of Creators",
          "bn": "সর্বোত্তম স্রষ্টা"
        },
        "p": [
          {
            "en": "Ahsanu al-khaliqin occurs twice in the Quran, and 37:125 is the other place, where a prophet asks his people whether they call upon Ba'l and leave the best of creators. The plural does not concede rivals. The Quran uses the verb of a creature only of Isa (AS), at 3:49 and again at 5:110, where he designs from clay the form of a bird by the permission of Allah.",
            "bn": "'আহসানুল খালিকীন' কুরআনে দুবার এসেছে, আর দ্বিতীয় জায়গাটি 37:125, যেখানে একজন নবী তাঁর জাতিকে জিজ্ঞেস করেন, তোমরা কি বা'লকে ডাকো আর সর্বোত্তম স্রষ্টাকে ছেড়ে দাও? বহুবচনটি কোনো প্রতিদ্বন্দ্বী স্বীকার করে না। কুরআন কোনো সৃষ্টির ক্ষেত্রে এই ক্রিয়াপদটি ব্যবহার করেছে কেবল ঈসা (আঃ)-এর বেলায় — 3:49-এ, আবার 5:110-এ, যেখানে তিনি আল্লাহর অনুমতিক্রমে মাটি থেকে পাখির আকৃতি গড়েন।"
          },
          {
            "en": "So the superlative works by contrast inside a single word used at two levels. What people call making is the arranging of material that was handed to them; what is meant by al-Khaliq is bringing the material into being and then shaping it. The verse has just walked through a shaping performed on material nobody supplied, and only after that does it name the One who did it the best of creators.",
            "bn": "তাই এই শ্রেষ্ঠত্ববাচক প্রয়োগটি কাজ করে একটি শব্দের দুই স্তরের ব্যবহারের বৈসাদৃশ্যের মধ্য দিয়ে। মানুষ যাকে বানানো বলে, তা হলো তার হাতে তুলে দেওয়া উপকরণ সাজানো; আর 'আল-খালিক' বলতে বোঝায় উপকরণটিকে অস্তিত্বে আনা, তারপর তাকে আকৃতি দেওয়া। আয়াতটি এইমাত্র এমন এক আকৃতিদানের ভেতর দিয়ে হেঁটে এল যার উপকরণ কেউ সরবরাহ করেনি — আর কেবল তার পরেই যিনি এটি করলেন তাঁকে সর্বোত্তম স্রষ্টা বলে ডাকা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Drawing the Conclusion",
          "bn": "সিদ্ধান্তটি টানা"
        },
        "p": [
          {
            "en": "Lived, this is a discipline of attention rather than of study. Say the last four words of the verse when a child is born, when a body recovers, when a hand does what it was told to do. The verse does not ask its reader to explain anything. It asks him to draw the conclusion it has already drawn: that the One who did this once is neither wearied nor finished, and the raising is His to do.",
            "bn": "জীবনে প্রয়োগের দিক থেকে এটি পড়াশোনার নয়, মনোযোগের একটি অনুশীলন। শিশু জন্মালে, কোনো শরীর সুস্থ হয়ে উঠলে, কিংবা হাত যা করতে বলা হয়েছে তা করলে — আয়াতটির শেষ চারটি শব্দ বলুন। আয়াতটি তার পাঠকের কাছে কোনো ব্যাখ্যা চায় না। এটি চায় সে যেন সেই সিদ্ধান্তটিই টানে যা আয়াতটি ইতিমধ্যেই টেনেছে: যিনি একবার এটি করেছেন তিনি ক্লান্তও নন, শেষও করেননি, আর পুনরুত্থান করা তাঁরই কাজ।"
          }
        ]
      }
    ]
  },
  "23:20": {
    "sections": [
      {
        "h": {
          "en": "One Item on the List",
          "bn": "তালিকার একটি নাম"
        },
        "p": [
          {
            "en": "This verse does not stand alone. It falls in a run of signs that begins a few lines earlier: above you the layered heavens (23:17), then rain sent down from the sky in a measured amount and settled in the earth (23:18), then gardens of date-palm and vine heavy with fruit (23:19). Only after all of that does the Qur'an say wa-shajaratan, and a tree, adding one more item to a list of provisions already long. Ibn Kathir reads the whole passage as a recital of God's countless blessings to His servants.",
            "bn": "এ আয়াত একা দাঁড়িয়ে নেই। কয়েক লাইন আগে থেকে শুরু হওয়া নিদর্শনের এক ধারায় এর অবস্থান। প্রথমে মাথার উপরে স্তরে সাজানো আকাশ (২৩:১৭), তারপর আকাশ থেকে মেপে নামিয়ে যমীনে থিতিয়ে দেওয়া বৃষ্টি (২৩:১৮), তারপর খেজুর আর আঙুরের ফলে ভরা বাগান (২৩:১৯)। এত কিছুর পরেই কুরআন বলে ওয়া শাজারাতান, আর একটি গাছ, আগে থেকেই লম্বা নিয়ামতের তালিকায় জুড়ে দেয় আরও একটি নাম। ইবন কাসীর গোটা অংশটিকে পড়েন বান্দার প্রতি আল্লাহর অগণিত নিয়ামতের বিবরণ হিসেবে।"
          },
          {
            "en": "Earlier the same sūrah turned the reader inward, to the making of the human body as its own sign (23:14). Here the signs turn outward, to the world that keeps a person alive: water, orchards, this tree, the cattle that follow in 23:21. Ibn Kathir, reading 23:18 through 23:22 together, lists them as one unbroken chain of favours — rain in due measure, gardens brought forth, oil and relish, milk and meat and carriage. The verse about the olive is one link in that chain, not a stray remark.",
            "bn": "এই সূরার আগের অংশ পাঠকের চোখ ঘুরিয়েছিল ভেতরের দিকে, মানুষের দেহ গড়ার মধ্যেই ছিল এক নিদর্শন (২৩:১৪)। এখানে নিদর্শনগুলো মুখ ফেরায় বাইরের দিকে, যে জগৎ মানুষকে বাঁচিয়ে রাখে তার দিকে, পানি, বাগান, এই গাছ, আর পরে ২৩:২১ আয়াতের গবাদি পশু। ইবন কাসীর ২৩:১৮ থেকে ২৩:২২ একসাথে পড়ে এগুলোকে সাজান নিয়ামতের এক অবিচ্ছিন্ন শৃঙ্খল হিসেবে, মেপে নামানো বৃষ্টি, গজিয়ে তোলা বাগান, তেল আর রসদ, দুধ, গোশত ও বাহন। যায়তুনের আয়াতটি সেই শৃঙ্খলের একটি কড়া, বিচ্ছিন্ন কোনো মন্তব্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why This Tree Alone",
          "bn": "কেন শুধু এই গাছ"
        },
        "p": [
          {
            "en": "as-Sa'di notes that the olive tree — its whole genus — was singled out for mention here because its ground is special, the land of Shām, and because of the many benefits packed into it. al-Qurtubi adds a further reason: the olive is set apart for its great usefulness across Shām, the Hijaz and other lands, and because it needs so little of the watering, digging and tending that other trees demand. Much is given, and little is asked in return.",
            "bn": "সাদী বলেন, এখানে যায়তুন গাছকে, অর্থাৎ তার গোটা জাতটাকে, আলাদা করে নাম ধরে বলা হয়েছে দুটি কারণে। এর জায়গাটা বিশেষ, শামের ভূমি, আর এর ভেতরে ঠাসা অসংখ্য উপকার। কুরতুবী আরেকটি কারণ যোগ করেন। শাম, হিজায ও অন্যান্য দেশজুড়ে যায়তুনের বিরাট উপকারিতা, আর অন্য গাছের মতো পানি দেওয়া, মাটি খোঁড়া কিংবা যত্নআত্তির খুব একটা দরকার হয় না বলেই একে আলাদা করা হয়েছে। দেওয়া হয় অনেক, বিনিময়ে চাওয়া হয় সামান্য।"
          },
          {
            "en": "al-Qurtubi and al-Baghawi both pass on a saying of Muqatil: the mountain was singled out for the olive because the first olive grew from it. Both add a further report that the olive was the first tree to grow on earth after the Flood. Neither commentator builds a ruling on this; each sets it down only as something said. What is firm is the point these reports circle around: to the eye of the tradition this is no ordinary crop, but a tree old enough to feel like a beginning.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই মুকাতিলের একটি কথা বর্ণনা করেন, তূরকে যায়তুনের জন্য আলাদা করা হয়েছে কারণ প্রথম যায়তুন এখান থেকেই গজিয়েছিল। দুজনেই আরেকটি বর্ণনা যোগ করেন, মহাপ্লাবনের পর দুনিয়ায় সবার আগে যে গাছ গজিয়েছিল তা এই যায়তুন। কোনো তাফসীরকারই এর উপর কোনো বিধান দাঁড় করান না, কেবল একটি জনশ্রুতি হিসেবেই তা তুলে ধরেন। যা নিশ্চিত তা হলো এই বর্ণনাগুলোর ঘিরে থাকা কথাটি, ঐতিহ্যের চোখে এ কোনো সাধারণ ফসল নয়, বরং এমন এক গাছ যা যেন কোনো সূচনার মতোই পুরনো।"
          }
        ]
      },
      {
        "h": {
          "en": "Rooted in a Blessed Place",
          "bn": "বরকতময় পাহাড়ে গজানো"
        },
        "p": [
          {
            "en": "Ṭūr, the commentators agree, simply means a mountain. Ibn Kathir passes on a finer distinction some scholars drew: a height is called a Ṭūr when trees grow on it, and if it stands bare it is called a jabal, a plain mountain, not a Ṭūr — though he closes with wa-Allāhu aʿlam, and God knows best. On this reading the name itself already hints at green, at slopes that carry the very olives the verse is describing.",
            "bn": "তূর মানে সোজা কথায় পাহাড়, তাফসীরকারেরা এ নিয়ে একমত। ইবন কাসীর কিছু আলিমের টানা একটি সূক্ষ্ম পার্থক্য বর্ণনা করেন, যে উঁচু ভূমিতে গাছ জন্মায় তাকে বলা হয় তূর, আর তা যদি ন্যাড়া দাঁড়িয়ে থাকে তবে তাকে বলা হয় জাবাল, নিছক পাহাড়, তূর নয়। তবে তিনি শেষ করেন 'ওয়াল্লাহু আ'লাম', আল্লাহই ভালো জানেন, বলে। এ পাঠ ধরলে নামটাই আগেভাগে সবুজের ইশারা দেয়, সেই ঢালের কথা বলে যেখানে আয়াতের বর্ণিত যায়তুনই ফলে।"
          },
          {
            "en": "Where is this mountain? Ibn Kathir, and Ibn Abbas before him as at-Tabari and al-Qurtubi record, place it in the land of Shām: it is the mountain on which God spoke to Mūsā ibn ʿImrān (AS), and in the ranges around it the olive trees grow. Ibn Zayd, cited by both at-Tabari and al-Qurtubi, describes it as a long ridge running from Egypt toward Ayla. The tree of provision, then, is rooted in ground already marked by revelation.",
            "bn": "এই পাহাড় কোথায়? ইবন কাসীর, আর তাঁর আগে ইবন আব্বাস, যেমন তাবারী ও কুরতুবী উদ্ধৃত করেন, একে রাখেন শামের ভূমিতে। এই সেই পাহাড় যার উপরে আল্লাহ কথা বলেছিলেন মূসা ইবন ইমরান (আঃ)-এর সঙ্গে, আর তার চারপাশের পাহাড়শ্রেণিতেই ফলে যায়তুন। তাবারী ও কুরতুবী দুজনের উদ্ধৃত ইবন যায়দের বর্ণনায় এ এক লম্বা শৈলশিরা, মিসর থেকে আইলার দিকে বিস্তৃত। তাহলে নিয়ামতের এই গাছটির শিকড় গাঁথা এমন মাটিতে যা আগে থেকেই ওহির চিহ্ন বহন করে।"
          },
          {
            "en": "Ibn Kathir makes one more identification: Ṭūr Sīnāʾ is the same as Ṭūr Sīnīn. al-Baghawi, discussing the word, ties it directly to God's oath by Ṭūri sīnīn in 95:2 — the sūrah that opens by swearing on the fig and the olive (95:1). Both commentators treat the two names as one blessed place. The olive of this verse and the olive sworn by in that sūrah are gathered around the same mountain, which is perhaps why this single tree could stand in for a whole catalogue of gifts.",
            "bn": "ইবন কাসীর আরেকটি পরিচয় দেন, তূর সীনা আর তূর সীনীন একই পাহাড়। বাগাভী শব্দটি আলোচনা করতে গিয়ে একে সরাসরি জুড়ে দেন ৯৫:২ আয়াতে 'তূরি সীনীন'-এর কসমের সঙ্গে, যে সূরার শুরুই হয় ডুমুর আর যায়তুনের কসম দিয়ে (৯৫:১)। দুই তাফসীরকারই এই দুটি নামকে একই বরকতময় জায়গা হিসেবে ধরেন। এই আয়াতের যায়তুন আর ওই সূরায় যে যায়তুনের কসম, দুই-ই ঘিরে আছে একই পাহাড়কে, আর হয়তো সেজন্যই একটিমাত্র গাছ গোটা এক নিয়ামতের ফিরিস্তির প্রতিনিধি হতে পেরেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Name Might Mean",
          "bn": "নামটির অর্থ নিয়ে মতভেদ"
        },
        "p": [
          {
            "en": "What does Sīnāʾ itself mean? Here the commentators genuinely differ, and at-Tabari and al-Qurtubi lay the views side by side. Mujahid reads it as blessed, so the phrase would mean a tree from a blessed mountain. Qatadah reads it as beautiful, a good mountain; ad-Dahhak says the word is beautiful in the Nabataean tongue. Muqatil widens it further: any mountain that bears fruit is a Sīnāʾ. Against these, the majority, al-Qurtubi reports, take it as simply the proper name of the mountain, the way people say the mountain of Uhud.",
            "bn": "সীনা শব্দটার নিজের অর্থ কী? এখানে তাফসীরকারদের মধ্যে সত্যিকারের মতভেদ, আর তাবারী ও কুরতুবী মতগুলো পাশাপাশি সাজিয়ে দেন। মুজাহিদ পড়েন 'বরকতময়', তাহলে কথাটার মানে দাঁড়ায় বরকতময় পাহাড় থেকে জন্মানো গাছ। কাতাদা পড়েন 'সুন্দর', সুন্দর পাহাড়, আর দাহহাক বলেন শব্দটি নাবাতী ভাষায় 'সুন্দর'। মুকাতিল অর্থটা আরও চওড়া করেন, ফলদায়ী যেকোনো পাহাড়ই সীনা। এদের বিপরীতে অধিকাংশ আলিম, কুরতুবী জানান, একে ধরেন নিছক পাহাড়টির নাম হিসেবে, যেমন বলা হয় উহুদ পাহাড়।"
          },
          {
            "en": "at-Tabari weighs the choices and settles on the last: Sīnāʾ is a proper name annexed to Ṭūr to identify it, much as the Arabs speak of the two mountains of Ṭayyi'. Were it truly an adjective meaning blessed or beautiful, he argues, the grammar of the phrase would run differently. Yet he keeps what Ibn Abbas held: this is the mountain from which Mūsā (AS) was called, and it is blessed — blessed as a place, even if the word Sīnāʾ does not itself mean blessed. The disagreement is left standing, and it costs the verse nothing.",
            "bn": "তাবারী মতগুলো ওজন করে শেষটির দিকে ঝোঁকেন, সীনা হলো তূরের সঙ্গে জুড়ে দেওয়া একটি নাম, যা দিয়ে পাহাড়টিকে চেনা যায়, যেমন আরবরা বলে তায়ির দুই পাহাড়। এটি যদি সত্যিই 'বরকতময়' বা 'সুন্দর' অর্থের বিশেষণ হতো, তিনি যুক্তি দেন, তবে বাক্যের গঠন অন্যরকম হতো। তবু তিনি ইবন আব্বাসের কথাটা ধরে রাখেন, এই সেই পাহাড় যেখান থেকে মূসা (আঃ)-কে ডাকা হয়েছিল, আর তা বরকতময়, জায়গা হিসেবে বরকতময়, যদিও সীনা শব্দটার অর্থ নিজে 'বরকতময়' নয়। মতভেদটা রয়ে যায়, তাতে আয়াতের কিছুই খোয়া যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Tree That Yields Oil",
          "bn": "যে গাছ তেল দেয়"
        },
        "p": [
          {
            "en": "The verse says tanbutu bi'l-duhn, which grows with oil. The reciters read the opening verb two ways — tanbutu and tunbitu — and at-Tabari, al-Qurtubi and al-Baghawi all record the split, along with a grammarians' debate over whether the bāʾ in bi'l-duhn is an added particle or carries its own weight. at-Tabari prefers tanbutu, the reading the body of reciters agree on, and the meanings converge either way: the tree brings forth its fruit, and in that fruit is oil.",
            "bn": "আয়াত বলে 'তানবুতু বিদ্দুহন', যা তেলসহ জন্মায়। শুরুর ক্রিয়াটি কারীরা দুইভাবে পড়েন, 'তানবুতু' আর 'তুনবিতু', আর তাবারী, কুরতুবী ও বাগাভী সবাই এই ভিন্নতা লিপিবদ্ধ করেন, সঙ্গে ব্যাকরণবিদদের এই তর্কও যে 'বিদ্দুহন'-এর 'বা' অক্ষরটি বাড়তি নাকি নিজের ওজন বহন করে। তাবারী 'তানবুতু'-কেই অগ্রাধিকার দেন, যে পাঠে কারীদের বড় অংশ একমত, আর যেভাবেই পড়া হোক অর্থ মিলে যায় এক জায়গায়, গাছ তার ফল ফলায়, আর সেই ফলেই থাকে তেল।"
          },
          {
            "en": "Mujahid glosses bi'l-duhn as with its fruit, and Ibn Abbas is plainer still: the oil meant is olive oil, which is eaten and rubbed on the body. Ma'arif al-Qur'an gathers the uses the fruit was known for — the oil massaged into the skin, burned in lamps to give light, and poured over food as a dressing. One pressing of one fruit yields a balm, a lamp and a meal. The Muyassar keeps to the plain sense: from it oil is pressed, to anoint with and to eat.",
            "bn": "মুজাহিদ 'বিদ্দুহন'-এর ব্যাখ্যা দেন 'তার ফলসহ', আর ইবন আব্বাস আরও সোজা, এখানে তেল মানে যায়তুনের তেল, যা খাওয়া হয় আর গায়ে মাখা হয়। মাআরিফুল কুরআন এই ফলের যেসব ব্যবহার পরিচিত ছিল তা একসাথে আনে, গায়ে মাখার তেল, বাতিতে জ্বেলে আলো পাওয়া, আর খাবারের উপর ঢেলে রসদ হিসেবে নেওয়া। একটিমাত্র ফলের একবার নিংড়ানোতেই মেলে মলম, বাতি আর খাবার। মুয়াসসার সাদামাটা অর্থেই থামে, এ থেকে তেল নিংড়ানো হয়, মাখার জন্য আর খাওয়ার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Dye or Something to Dip",
          "bn": "রং না ডুবিয়ে খাওয়ার জিনিস"
        },
        "p": [
          {
            "en": "Then comes wa-ṣibghin li'l-ākilīn, and a ṣibgh for those who eat, and here the word opens two ways at once. Its root sense, al-Qurtubi explains, is a dye — what a garment is coloured with. But the same word names a relish, a thing bread is dipped into, and al-Qurtubi draws the bridge between the two: bread dipped in the oil is, as it were, coloured by it, so the condiment borrows the name of the dye. The verse holds both pictures without forcing a choice between them.",
            "bn": "তারপর আসে 'ওয়া সিবগিন লিল-আকিলীন', আর ভক্ষণকারীদের জন্য এক 'সিবগ', আর এখানে শব্দটি একসাথে দুইদিকে খোলে। কুরতুবী বলেন, এর মূল অর্থ 'রং', যা দিয়ে কাপড় রাঙানো হয়। কিন্তু একই শব্দ বোঝায় এমন রসদ, যাতে রুটি ডুবিয়ে খাওয়া হয়, আর কুরতুবী দুইয়ের মাঝে সেতু টানেন, তেলে ডোবানো রুটি যেন সেই তেলে রেঙে যায়, তাই রসদটি ধার করে রঙের নামটাই। আয়াত জোর করে কোনোটি বেছে না নিয়ে দুটি ছবিই ধরে রাখে।"
          },
          {
            "en": "Read as a relish, the word is glossed idām, a condiment. Ibn Kathir, following Qatadah, reads ṣibgh as exactly that. at-Tabari pictures the eaters dipping their bread in the oil — yaṣṭabighūna bihi — and Ibn Zayd, whom he cites, says this olive is a ṣibgh for those who eat, a thing they take as idām and dip into. as-Sa'di sums it up: in the fruit is oil, used to light a lamp and taken as a relish by those who eat. The plain, daily act of dipping bread is where the word finally lands.",
            "bn": "রসদ হিসেবে পড়লে শব্দটির ব্যাখ্যা 'ইদাম', মানে খাবারের সঙ্গী কিছু। ইবন কাসীর কাতাদার অনুসরণে 'সিবগ'-কে ঠিক তা-ই ধরেন। তাবারী ছবিটা আঁকেন, ভক্ষণকারীরা তাদের রুটি তেলে ডুবিয়ে নিচ্ছে, 'ইয়াসতাবিগূনা বিহি', আর তাঁর উদ্ধৃত ইবন যায়দ বলেন, এই যায়তুন ভক্ষণকারীদের জন্য এক 'সিবগ', যা তারা ইদাম হিসেবে নেয় আর তাতে ডুবিয়ে খায়। সাদী গুটিয়ে বলেন, ফলের ভেতরে আছে তেল, যা দিয়ে বাতি জ্বালানো হয় আর ভক্ষণকারীরা রসদ হিসেবে নেয়। রুটি ডুবিয়ে খাওয়ার সাদামাটা রোজকার কাজেই শব্দটি শেষমেশ এসে থামে।"
          },
          {
            "en": "Muqatil, cited by al-Qurtubi and al-Baghawi, divides the two gifts cleanly: the adm, the thing eaten with bread, is the olive itself, and the duhn is its oil. On his reading God has placed in this one tree both a food and a fuel — the fruit to eat and the oil to press. Whether ṣibgh is heard as dye or as relish, the drift is the same: the verse is counting a mercy that reaches the table, the lamp and the body from a single root.",
            "bn": "কুরতুবী ও বাগাভীর উদ্ধৃত মুকাতিল দুটি দানকে পরিষ্কার আলাদা করেন, 'আদম', অর্থাৎ রুটির সঙ্গে খাওয়ার জিনিস, তা হলো যায়তুন ফল নিজেই, আর 'দুহন' হলো তার তেল। তাঁর পাঠ ধরলে আল্লাহ এই একটি গাছেই রেখেছেন খাবার আর জ্বালানি, দুটোই, খাওয়ার ফল আর নিংড়ানোর তেল। 'সিবগ' রং অর্থেই শোনা হোক বা রসদ অর্থে, ঝোঁকটা একই, আয়াত এমন এক রহমত গুনছে যা একটিমাত্র শিকড় থেকে পৌঁছে যায় পাতে, বাতিতে আর শরীরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Condiment on the Bread",
          "bn": "রুটির সঙ্গে ইদাম"
        },
        "p": [
          {
            "en": "Because ṣibgh was heard as idām, the commentators reach for what the Prophet ﷺ said about condiments. al-Qurtubi records a sound report, in Ṣaḥīḥ Muslim from Jābir ibn ʿAbdillāh (RA): the Prophet ﷺ asked his household for a condiment, was told there was only vinegar, called for it and ate, saying, 'What a good condiment is vinegar, what a good condiment is vinegar.' It is a word about idām in general, not revealed about this verse, but it lights up the same humble table the olive is set on.",
            "bn": "যেহেতু 'সিবগ' 'ইদাম' অর্থে শোনা হয়েছে, তাফসীরকারেরা টেনে আনেন খাবারের সঙ্গী নিয়ে নবী ﷺ-এর কথা। কুরতুবী একটি সহীহ বর্ণনা উদ্ধৃত করেন, সহীহ মুসলিমে জাবির ইবন আবদিল্লাহ (রাঃ) থেকে, নবী ﷺ তাঁর ঘরের লোকের কাছে খাবারের সঙ্গী কিছু চাইলেন, জানানো হলো ঘরে সিরকা ছাড়া কিছু নেই, তিনি তা আনালেন আর খেতে খেতে বললেন, 'সিরকা কত উত্তম ইদাম, সিরকা কত উত্তম ইদাম।' এ কথা ইদাম নিয়ে সাধারণভাবে বলা, এই আয়াত ঘিরে নাযিল হয়নি, তবু যে সাদামাটা দস্তরখানে যায়তুন সাজানো, এ কথা সেটিকেই আলোকিত করে।"
          },
          {
            "en": "There is a narration closer to the olive itself, and honesty requires care with it. Ibn Kathir and al-Qurtubi both cite a report from ʿUmar (RA) that the Prophet ﷺ said, 'Eat olive oil and anoint with it, for it is from a blessed tree,' carried by at-Tirmidhi and Ibn Mājah. But at-Tirmidhi grades it himself: it is known only through ʿAbd ar-Razzāq, who was inconsistent — muḍṭarib — in narrating it, sometimes tracing it to ʿUmar and sometimes not. So the fitting olive-hadith carries a known weakness, and it is not leaned on here as sound.",
            "bn": "যায়তুনের আরও কাছের একটি বর্ণনা আছে, আর সততা দাবি করে সেটির ব্যাপারে সতর্কতা। ইবন কাসীর ও কুরতুবী দুজনেই উমর (রাঃ) থেকে একটি বর্ণনা উদ্ধৃত করেন যে নবী ﷺ বলেছেন, 'তোমরা যায়তুনের তেল খাও আর তা গায়ে মাখো, কেননা তা এক বরকতময় গাছ থেকে আসে,' যা এনেছেন তিরমিযী ও ইবন মাজাহ। কিন্তু তিরমিযী নিজেই এর মান বলে দেন, এটি জানা যায় কেবল আবদুর রাযযাকের সূত্রে, যিনি এ বর্ণনায় ছিলেন অস্থির, 'মুদতারিব', কখনো উমর পর্যন্ত টেনেছেন, কখনো টানেননি। তাই যায়তুনের সঙ্গে সবচেয়ে মানানসই হাদীসটিতেই আছে জানা দুর্বলতা, আর একে এখানে সহীহ ধরে ভরসা করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading the Whole List",
          "bn": "পুরো তালিকাটি একসাথে"
        },
        "p": [
          {
            "en": "Step back and the verse's work is clear. It is one entry in a ledger of provision — heaven, measured rain, orchard, olive, cattle — and its job is to make an ordinary thing visible again. Oil for the lamp, a fruit for the plate, a relish for the bread: gifts so constant that a person stops seeing them. The passage names them one by one precisely because familiarity has worn them smooth. To read the verse well is to look at the oil in the kitchen and remember that it was grown.",
            "bn": "একটু পিছিয়ে দাঁড়ালে আয়াতের কাজটা পরিষ্কার হয়। এ নিয়ামতের খতিয়ানের একটি এন্ট্রি, আকাশ, মেপে নামানো বৃষ্টি, বাগান, যায়তুন, গবাদি পশু, আর এর কাজ হলো একটা সাদামাটা জিনিসকে আবার চোখে পড়ার মতো করে তোলা। বাতির তেল, পাতের ফল, রুটির রসদ, এমন নিয়ামত যা এত নিয়মিত যে মানুষ আর তা খেয়ালই করে না। আয়াত এগুলোকে একে একে নাম ধরে বলে ঠিক এই কারণেই যে চেনা হতে হতে এগুলো ফিকে হয়ে গেছে। আয়াতটা ঠিকভাবে পড়া মানে রান্নাঘরের তেলের দিকে তাকিয়ে মনে করা যে তা ফলানো হয়েছিল।"
          },
          {
            "en": "What response does the passage ask? Right after the olive, 23:21 turns to the cattle and calls them a lesson, ʿibrah, something to be read and learned from. The whole run of signs is bending the reader toward gratitude — not a feeling summoned on command, but the simple recognition that what sustains you was made and given. The olive asks little and gives light, food and relish together. The least a person can offer back is to notice, and to thank the One who set such a tree growing on a blessed hill.",
            "bn": "আয়াতগুলো কী জবাব চায়? যায়তুনের ঠিক পরেই ২৩:২১ আয়াত গবাদি পশুর কথায় ফেরে আর তাদের বলে 'ইবরাত', এমন এক শিক্ষণীয় দৃষ্টান্ত যা পড়ে শেখার মতো। গোটা নিদর্শনের সারিটাই পাঠককে বাঁকিয়ে নিচ্ছে শুকরিয়ার দিকে, হুকুম দিয়ে ডেকে আনা কোনো অনুভূতি নয়, বরং এই সোজা স্বীকৃতি যে আপনাকে যা বাঁচিয়ে রাখছে তা বানানো হয়েছে আর দেওয়া হয়েছে। যায়তুন চায় সামান্য, আর একসাথে দেয় আলো, খাবার আর রসদ। বিনিময়ে মানুষের অন্তত এটুকু দেওয়ার আছে যে সে খেয়াল করবে, আর শুকর করবে সেই সত্তার, যিনি এমন একটি গাছ ফলিয়েছেন এক বরকতময় টিলায়।"
          }
        ]
      }
    ]
  },
  "23:27": {
    "sections": [
      {
        "h": {
          "en": "Answered With A Command",
          "bn": "উত্তর এলো নির্দেশ হয়ে"
        },
        "p": [
          {
            "en": "The verse just before this one is a prayer: My Lord, help me, for they have denied me (23:26). Ibn Kathir sets it beside Nuh's cry elsewhere, that he was overcome and asked for help (54:10), and then shows what the help turned out to be. God did not strike them down on the spot. He answered, So We revealed to him: build the ship. as-Sa'di reads the ship as a means and a cause of rescue, put in place before destruction's causes arrived. The plea for victory was granted, but granted as a long task laid on the one who prayed.",
            "bn": "এ আয়াতের ঠিক আগের আয়াতটি এক প্রার্থনা: হে আমার রব, আমাকে সাহায্য করো, কারণ তারা আমাকে মিথ্যাবাদী বলছে (২৩:২৬)। ইবন কাসীর এর পাশে রাখেন নূহ (আঃ)-এর অন্যত্র বর্ণিত সেই কান্না, যেখানে তিনি পরাভূত হয়ে আল্লাহর কাছে সাহায্য চান (৫৪:১০)। তারপর তিনি দেখান, সাহায্যটা আসলে কী হয়ে দাঁড়াল। আল্লাহ অস্বীকারকারীদের সঙ্গে সঙ্গে ধ্বংস করেননি। তিনি উত্তর দিলেন, আমি তার কাছে ওয়াহী পাঠালাম: নৌকা বানাও। সা'দী নৌকাটিকে দেখেন উদ্ধারের এক উপায় ও উপকরণ হিসেবে, যা ধ্বংসের কারণগুলো আসার আগেই ঠিক করে রাখা হলো। বিজয়ের আবেদন মঞ্জুর হলো, তবে মঞ্জুর হলো একটা দীর্ঘ কাজ হয়ে, আর সে কাজ চাপল যিনি দোয়া করেছিলেন তাঁরই কাঁধে।"
          },
          {
            "en": "al-Qurtubi glosses the opening words, So We revealed to him, as We sent down messengers to him from the sky carrying the instruction to build. The command itself is bare and practical: make the ship. There is no argument here, no further debate with the eminent men who had mocked him. The season for reasoning had closed with his prayer; now came obedience with tools in hand. A prophet who had preached across a very long lifetime was told to stop speaking and start building, and the surah moves with him from the pulpit to the timber, from the word urged to the work commanded.",
            "bn": "কুরতুবী শুরুর কথাগুলো, আমি তার কাছে ওয়াহী পাঠালাম, ব্যাখ্যা করেন এভাবে: আমি আসমান থেকে তার কাছে দূত পাঠালাম, যারা বানানোর নির্দেশ নিয়ে এলো। নির্দেশটা নিজেই খুব সাদাসিধা আর কাজের কথা: নৌকা বানাও। এখানে কোনো তর্ক নেই, তাঁকে নিয়ে যারা ঠাট্টা করেছিল সেই প্রধানদের সঙ্গে আর কোনো বিতর্ক নেই। যুক্তি দেওয়ার সময়টা তাঁর দোয়ার সঙ্গেই শেষ হয়ে গেছে। এবার এলো হাতে হাতিয়ার নিয়ে আনুগত্য। বহু দীর্ঘ জীবন ধরে যে নবী তাবলিগ করে গেছেন, তাঁকে বলা হলো কথা থামিয়ে কাজ শুরু করতে। সুরাটিও তাঁর সঙ্গে সরে আসে মিম্বার থেকে কাঠের কাছে, তাগিদের বাণী থেকে নির্দেশিত কাজে।"
          }
        ]
      },
      {
        "h": {
          "en": "Beneath His Watching Eyes",
          "bn": "তাঁর দৃষ্টির নিচে"
        },
        "p": [
          {
            "en": "bi-a'yunina, under Our eyes. at-Tabari reads this as under Our sight and in Our view, that the building went forward exactly where God was watching. as-Sa'di joins the watching to protection: by Our command and Our help, and you are in Our safekeeping and Our care, so that We see you and We hear you. al-Muyassar says the same, that Nuh was in God's guarding and shelter. The eye here is the eye of a guardian, not of a distant onlooker. Nuh worked out in the open, exposed to the ridicule of his people, yet screened the whole time by the attention of his Lord.",
            "bn": "বিআ'ইউনিনা, আমার দৃষ্টির সামনে। তাবারী এর অর্থ করেন আমার নজরের নিচে ও আমার দেখার মধ্যে, অর্থাৎ ঠিক যেখানে আল্লাহ দেখছিলেন সেখানেই কাজটা এগিয়ে চলল। সা'দী এই দেখাকে জুড়ে দেন হেফাজতের সঙ্গে: আমার নির্দেশে ও আমার সাহায্যে, আর তুমি আমার নিরাপত্তা ও তত্ত্বাবধানে আছ, এমনভাবে যে আমি তোমাকে দেখি ও তোমার কথা শুনি। মুয়াসসারও একই কথা বলেন, নূহ (আঃ) ছিলেন আল্লাহর পাহারা ও আশ্রয়ে। এখানকার চোখ অভিভাবকের চোখ, দূরের কোনো দর্শকের নয়। নূহ (আঃ) খোলা জায়গায় কাজ করে গেলেন, জাতির ঠাট্টার সামনে উন্মুক্ত হয়ে, তবু গোটা সময়টা রবের দৃষ্টি তাঁকে আড়াল করে রাখল।"
          },
          {
            "en": "The phrase names a divine attribute, and the commentators handle it as one, affirmed in the way that suits God. al-Muyassar notes that the verse establishes the attribute of the eye for God, as befits His majesty, without likening Him to His creation and without asking how. That is as far as the reflection needs to travel. For the servant being addressed, the practical weight is plain enough: whatever the crowd saw, a mocked old man wasting good wood on dry land, God saw a servant obeying, and He saw every single plank set into place. To labour beneath such eyes is to never once build alone.",
            "bn": "এই কথাটি আল্লাহর এক গুণের নাম নেয়, আর তাফসীরকারেরা একে গুণ হিসেবেই ধরেন, আল্লাহর জন্য যেভাবে শোভা পায় সেভাবে সাব্যস্ত করে। মুয়াসসার বলেন, আয়াতটি আল্লাহর জন্য চোখের গুণ প্রমাণ করে, তাঁর শানের উপযোগীভাবে, সৃষ্টির সঙ্গে তুলনা ছাড়া আর কীভাবে তা না জিজ্ঞেস করে। ভাবনাকে এর বেশি দূর নিতে হয় না। যাঁকে সম্বোধন করা হচ্ছে, তাঁর জন্য কাজের দিকটা যথেষ্ট স্পষ্ট। ভিড় যা দেখেছিল, এক ঠাট্টার পাত্র বুড়ো শুকনো জমিতে ভালো কাঠ নষ্ট করছে, আল্লাহ সেখানে দেখলেন এক আজ্ঞাবহ বান্দা, আর দেখলেন বসানো প্রতিটি তক্তা। এমন দৃষ্টির নিচে খাটা মানে একটিবারও একা না বানানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Taught The Very Making",
          "bn": "বানানোর কৌশলও শেখানো"
        },
        "p": [
          {
            "en": "The command adds wa-wahyina, and by Our revelation. at-Tabari explains this clause as and by Our teaching you how to make it. The ship was not left to Nuh's own invention. Its design came down as revelation, plank and measure and shape, the same way the message itself had come down to him. al-Muyassar reads the words as by Our command to you and by Our aid. So the ark was in truth built twice over by revelation: revelation ordered the work into being, and revelation taught the craft that carried it out. The prophet supplied the labouring hands; every scrap of the knowledge was given to him.",
            "bn": "নির্দেশে যোগ হয় ওয়াওয়াহইনা, আমার ওয়াহী অনুযায়ী। তাবারী এই অংশের ব্যাখ্যা করেন এভাবে: আর আমি তোমাকে বানানোর কৌশল শিখিয়ে। নৌকাটি নূহ (আঃ)-এর নিজের বুদ্ধির উপর ছেড়ে দেওয়া হয়নি। এর নকশা নেমে এলো ওয়াহী হয়ে, তক্তা, মাপ আর গড়ন সবই, ঠিক যেভাবে বাণীটাও তাঁর কাছে নেমে এসেছিল। মুয়াসসার কথাগুলোর অর্থ করেন আমার নির্দেশে ও আমার সাহায্যে। তাই নৌকাটি আসলে দুবার গড়া হলো ওয়াহী দিয়ে: ওয়াহী কাজটাকে হুকুম করল, আর ওয়াহীই সেই কৌশল শেখাল যা দিয়ে কাজটা হলো। নবী দিলেন খাটুনির হাত দুটি, আর জ্ঞানের প্রতিটি টুকরো তাঁকে দান করা হলো।"
          },
          {
            "en": "His people had already dismissed him as a man seized by madness, someone to wait out for a while (23:25). Now that same man measures timber to a plan he could never have reasoned his own way to. Obedience of this kind asks a person to act on an instruction whose sense will only appear later. Nuh could not yet see the flood; he could see only the wood in his hands and the command still ringing in his ear. The believer often builds exactly like this, doing the next commanded thing faithfully without yet seeing the water that will one day make full sense of it.",
            "bn": "তাঁর জাতি ততক্ষণে তাঁকে পাগলামিতে পাওয়া লোক বলে উড়িয়ে দিয়েছে, এমন কেউ যাকে কিছুকাল সময় দিয়ে দেখা যায় (২৩:২৫)। এখন সেই একই মানুষ কাঠ মাপছেন এমন এক নকশায়, যা নিজের বুদ্ধিতে তিনি কখনোই বের করতে পারতেন না। এমন আনুগত্য মানুষকে বলে এমন এক নির্দেশে কাজ করতে, যার অর্থ ধরা পড়বে অনেক পরে। নূহ (আঃ) তখনো বন্যা দেখতে পাননি। তিনি দেখছিলেন কেবল হাতের কাঠ আর কানে বেজে চলা হুকুমটা। মুমিন প্রায়ই ঠিক এভাবেই গড়ে তোলে, পরবর্তী আদিষ্ট কাজটা বিশ্বস্তভাবে করে যায়, যে পানি একদিন সবকিছুর মানে খুলে দেবে তা এখনো না দেখেই।"
          }
        ]
      },
      {
        "h": {
          "en": "When The Oven Gushed",
          "bn": "উনুন যখন উথলে উঠল"
        },
        "p": [
          {
            "en": "fa-idha ja'a amruna wa fara al-tannur: and when Our command comes and the oven gushes forth. This was to be the signal. al-Muyassar explains that when water burst upward with force from the tannur, and the deluge began, that very gushing was the sign that the punishment had come. The building had a fixed trigger. Nuh was not to launch when he himself judged the moment ripe, but to wait for a mark he did not control, an ordinary object doing an entirely impossible thing. What that object actually was, the commentators do not settle among themselves.",
            "bn": "ফাইযা জাআ আমরুনা ওয়াফারাত তান্নূর: অতঃপর যখন আমার নির্দেশ আসবে আর উনুন উথলে উঠবে। এটাই হবে নিশানা। মুয়াসসার বলেন, যখন তান্নূর থেকে সজোরে পানি উপরে ফেটে বেরোবে আর প্লাবন শুরু হবে, সেই উথলে ওঠাই হবে শাস্তি এসে পড়ার চিহ্ন। কাজটার সঙ্গে বাঁধা ছিল একটা নির্দিষ্ট সংকেত। নূহ (আঃ) নিজে সময় ঠিক মনে করলেই ভাসাবেন না, বরং অপেক্ষা করবেন এমন এক চিহ্নের, যা তাঁর হাতে নেই, এক সাধারণ জিনিস সম্পূর্ণ অসম্ভব একটা কাজ করছে। সেই জিনিসটা আসলে কী, তাফসীরকারেরা নিজেদের মধ্যে তা মিটিয়ে ফেলতে পারেননি।"
          },
          {
            "en": "Ma'arif al-Qur'an lays the readings out. The word tannur means an oven used for baking flat, round bread, and it is also used for the whole earth. Some held that it was a particular oven in the mosque at Kufah; others placed it somewhere in Syria. The account that boiling water rising from the oven would be the signal, Ma'arif traces to Mazhari. So a plain reading keeps the word strictly literal, a baking oven from which water strangely welled up, while a broader sense stretches it to the surface of the earth itself breaking open from below.",
            "bn": "মাআরিফুল কুরআন পাঠভেদগুলো সাজিয়ে দেয়। তান্নূর শব্দের অর্থ চ্যাপ্টা গোল রুটি সেঁকার উনুন, আবার গোটা জমিন বোঝাতেও এটি ব্যবহৃত হয়। কেউ বলেছেন এটি ছিল কূফার মসজিদের এক নির্দিষ্ট উনুন, আর কেউ একে রেখেছেন সিরিয়ার কোথাও। উনুন থেকে ফুটন্ত পানি ওঠাই হবে সংকেত, এই বর্ণনাটি মাআরিফ টেনে আনে মাযহারী থেকে। তাই এক ধারার পাঠ শব্দটিকে একেবারে আক্ষরিক রাখে, এমন এক উনুন যা থেকে আশ্চর্যভাবে পানি উথলে উঠল, আর আরেক ধারা একে ছড়িয়ে দেয় গোটা জমিনের বুক ফেটে ওঠা পর্যন্ত।"
          },
          {
            "en": "as-Sa'di takes the wider sense: the earth gushed and burst into springs, reaching even the place of fire, which by every habit is the last spot to stand near water. at-Tabari records that the commentators before him already differed over the manner of the oven's gushing, and, rather than repeat the whole debate in this place, he says he has settled the point with its evidence elsewhere. The verse itself leaves the sign undefined. Its force does not rest at all on which oven or which town, but rests entirely on this: God can make the driest thing on earth the first thing to pour.",
            "bn": "সা'দী নেন ব্যাপক অর্থটা: জমিন উথলে উঠল আর ঝর্ণা হয়ে ফেটে বেরোল, এমনকি আগুনের জায়গা পর্যন্ত পৌঁছাল, যা সব অভ্যাসমতে পানির কাছে থাকার সবচেয়ে অসম্ভব জায়গা। তাবারী লিখে রাখেন যে তাঁর আগের তাফসীরকারেরাও উনুন উথলানোর ধরন নিয়ে মতভেদ করেছেন, আর গোটা বিতর্কটা এখানে না তুলে তিনি বলেন, প্রমাণসহ বিষয়টা তিনি অন্যত্র মীমাংসা করে এসেছেন। আয়াতটি নিজে নিশানাটাকে অনির্দিষ্ট রেখে দেয়। এর জোর মোটেও কোন উনুন বা কোন শহর তার উপর নির্ভর করে না, নির্ভর করে পুরোপুরি এর উপর: আল্লাহ জমিনের সবচেয়ে শুকনো জিনিসটাকেই প্রথম উপচে পড়া জিনিস বানিয়ে দিতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Enter Two Of Each",
          "bn": "প্রত্যেকের জোড়া তুলে নাও"
        },
        "p": [
          {
            "en": "fasluk fiha, then put into it. at-Tabari, al-Baghawi and al-Qurtubi all gloss the verb as adkhil, cause to enter, from a root used for making one thing pass into another. Into the ship were to go min kullin zawjayni-thnayn, of every kind a mated pair. Ibn Kathir reads this as a male and a female of every species of animal, and of plants and fruits besides. as-Sa'di draws out the wisdom in it: a breeding stock of every genus was to be preserved, so that the life God had willed for the earth could carry on past the flood and not end with it.",
            "bn": "ফাসলুক ফীহা, অতঃপর ওতে তুলে নাও। তাবারী, বাগাভী আর কুরতুবী সবাই ক্রিয়াটির অর্থ করেন আদখিল, প্রবেশ করাও, এমন এক ধাতু থেকে যা এক জিনিসকে আরেক জিনিসে ঢোকানো বোঝায়। নৌকায় উঠবে মিন কুল্লিন যাওজাইনিসনাইন, প্রত্যেক প্রকারের এক জোড়া। ইবন কাসীর এর অর্থ করেন প্রতিটি প্রাণী-প্রজাতির একটি নর ও একটি মাদি, আর সেই সঙ্গে গাছপালা ও ফলমূলও। সা'দী এর ভেতরের হিকমতটা টেনে বের করেন: প্রতিটি জাতের বংশবীজ রক্ষা করা হবে, যেন আল্লাহ জমিনের জন্য যে জীবন চেয়েছেন তা বন্যা পেরিয়ে চলতে থাকে, ওখানেই শেষ না হয়ে যায়।"
          },
          {
            "en": "al-Qurtubi notes a variant reading right here: Hafs recites min kullin with tanwin, while the others read it as a construct phrase. He also passes on a view from al-Hasan that Nuh carried aboard only creatures that give birth or lay eggs; as for gnats, flies and worms, he took none of them at all, for these later emerged from the mud on their own. Whether one follows that view or not, the picture drawn is of a careful, ordered loading. Even the rescue itself was measured out, not a panicked scramble up the ramp but obedience carefully counted.",
            "bn": "কুরতুবী ঠিক এখানেই একটা পাঠভেদ উল্লেখ করেন: হাফস মিন কুল্লিন পড়েন তানভীন দিয়ে, আর অন্যরা পড়েন ইদাফত হিসেবে। তিনি হাসান থেকে একটা মতও তুলে আনেন যে, নূহ (আঃ) নৌকায় কেবল সেসব প্রাণী তুলেছিলেন যারা বাচ্চা দেয় বা ডিম পাড়ে। আর মশা, মাছি ও পোকার কিছুই তিনি নেননি, কারণ এগুলো পরে কাদা থেকেই বেরিয়ে এসেছিল। ওই মত কেউ মানুক বা না মানুক, যে ছবিটা ফুটে ওঠে তা এক যত্নশীল, সাজানো তোলাতুলি। উদ্ধারটা পর্যন্ত মেপে মেপে হলো, হুড়মুড় করে সিঁড়ি বেয়ে ওঠা নয়, বরং হিসেব করে করা আনুগত্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Except One He Loved",
          "bn": "প্রিয় একজন বাদ পড়ল"
        },
        "p": [
          {
            "en": "And your family, the command goes on, except him against whom the word has already gone forth. Ibn Kathir explains: except the one for whom God's decree of destruction had preceded, meaning the household members who did not believe, such as his son and his wife, and God knows best. al-Muyassar names the same two, the wife and the son who earned the punishment by disbelief. at-Tabari identifies that son as the one who drowned. al-Baghawi keeps the bare sense: the one against whom the ruling of destruction had gone before. Family bond did not carry a person into the ark; faith did.",
            "bn": "আর তোমার পরিবার, নির্দেশ এগিয়ে চলে, তবে তাদের ছাড়া যাদের বিপক্ষে কথা আগেই স্থির হয়ে গেছে। ইবন কাসীর ব্যাখ্যা করেন: সেই একজন ছাড়া যার ব্যাপারে আল্লাহর ধ্বংসের ফয়সালা আগেই হয়ে গেছে, অর্থাৎ তাঁর পরিবারের সেই লোকেরা যারা তাঁর প্রতি ঈমান আনেনি, যেমন তাঁর ছেলে ও তাঁর স্ত্রী, আর আল্লাহই ভালো জানেন। মুয়াসসার সেই দুজনেরই নাম নেন, স্ত্রী আর সেই ছেলে যে কুফরির কারণে শাস্তির যোগ্য হয়েছিল। তাবারী সেই ছেলেকে চিহ্নিত করেন সেই একজন হিসেবে যে ডুবে গিয়েছিল। বাগাভী কথাটা রাখেন নিছক অর্থে: সেই একজন যার বিপক্ষে ধ্বংসের হুকুম আগেই চলে গিয়েছিল। পরিবারের বাঁধন কাউকে নৌকায় তোলেনি, তুলেছিল ঈমান।"
          },
          {
            "en": "Ibn Kathir notes that the fuller account of all this stands in Surah Hud, and there Nuh calls out to that very son and quotes to him the words, Embark with us in the name of God (11:41). The point to hold with real care is this: the verse states plainly that a member of the prophet's own household was among the lost, and it never once lays a fault at the prophet's door for it. A messenger of God preached, warned and grieved; the choice that condemned his son belonged to the son alone. Closeness to a righteous man saves no soul who turns from the truth he carries.",
            "bn": "ইবন কাসীর বলেন, এ সবকিছুর পূর্ণ বিবরণ আছে সুরা হূদে, আর সেখানে নূহ (আঃ) সেই ছেলেকেই ডাক দেন এবং তাকে বলেন, আল্লাহর নামে আমাদের সঙ্গে আরোহণ করো (১১:৪১)। যে কথাটা সত্যিকারের যত্নে ধরে রাখতে হয় তা হলো: আয়াতটি সাফ বলে দেয় যে নবীর নিজের পরিবারেরই একজন ধ্বংসপ্রাপ্তদের মধ্যে ছিল, আর এর জন্য নবীর ঘাড়ে একটিবারও কোনো দোষ চাপায় না। আল্লাহর রাসূল তাবলিগ করেছেন, সতর্ক করেছেন, শোক করেছেন। যে সিদ্ধান্ত তাঁর ছেলেকে ধ্বংসের মুখে ফেলল তা ছিল কেবল ছেলেরই। কোনো নেককার মানুষের নৈকট্য এমন কাউকে বাঁচায় না, যে তাঁর আনা সত্য থেকে মুখ ফিরিয়ে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "No Pleading For Wrongdoers",
          "bn": "জালিমদের জন্য আবেদন নয়"
        },
        "p": [
          {
            "en": "wa la tukhatibni fi alladhina zalamu: and do not address Me concerning those who have wronged; they are to be drowned. Ibn Kathir reads it as a guard on Nuh's own tenderness: when you see the mighty rain fall, let no pity for your people, and no hope of delaying them so they might believe, take hold of you, for I have decreed their drowning upon their disbelief and tyranny. at-Tabari puts it flatly: do not ask Me to save those who denied God. as-Sa'di adds that the decree stood sealed by God's will and measure, and a sealed decree is not to be argued with.",
            "bn": "ওয়ালা তুখাতিবনী ফিল্লাযীনা যালামূ: আর যারা জুলুম করেছে তাদের ব্যাপারে আমাকে কিছু বলো না, তারা ডুবে যাবেই। ইবন কাসীর একে পড়েন নূহ (আঃ)-এর নিজের কোমলতার বিরুদ্ধে বসানো এক পাহারা হিসেবে: যখন প্রবল বৃষ্টি নামতে দেখবে, তখন তোমার জাতির প্রতি কোনো মায়া, আর তাদের কিছু সময় দিলে হয়তো ঈমান আনবে এই আশা যেন তোমাকে না পায়, কারণ তাদের কুফর ও সীমালঙ্ঘনের উপরেই আমি তাদের ডুবিয়ে দেওয়ার ফয়সালা করে ফেলেছি। তাবারী কথাটা সোজাসুজি রাখেন: যারা আল্লাহকে অস্বীকার করেছে তাদের বাঁচানোর জন্য আমাকে বোলো না। সা'দী যোগ করেন, ফয়সালাটা আল্লাহর ইচ্ছা ও নির্ধারণে চূড়ান্ত হয়ে গেছে, আর চূড়ান্ত ফয়সালা নিয়ে তর্ক চলে না।"
          },
          {
            "en": "This is a verse of judgment, and it has to be read as one. It describes what the text describes, God's sentence on a specific people in a specific event scripture narrates, and it licenses nothing against any living person or community today. It hands nobody a warrant to condemn, exclude or harm. What it asks of the reader is inward: to accept that certain matters were settled by God Himself, and that there is a point beyond which continued pleading is no longer mercy but a quiet refusal to submit. Nuh grieved deeply for his people; what he did not do was overrule his Lord.",
            "bn": "এটি বিচারের আয়াত, আর একে সেভাবেই পড়তে হয়। আয়াতটি যা বর্ণনা করে তা-ই বলে, কিতাব যে ঘটনার কথা বলছে সেই নির্দিষ্ট ঘটনায় এক নির্দিষ্ট জাতির উপর আল্লাহর রায়, আর আজকের কোনো জীবিত মানুষ বা কোনো জনগোষ্ঠীর বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। কাউকে দোষী সাব্যস্ত করার, একঘরে করার বা ক্ষতি করার কোনো অধিকারপত্র এটি কারও হাতে তুলে দেয় না। পাঠকের কাছে এটি চায় পুরোপুরি ভেতরের একটা জিনিস: মেনে নেওয়া যে কিছু বিষয় স্বয়ং আল্লাহ ফয়সালা করে দিয়েছেন, আর এমন একটা সীমা আছে যার পরে আবেদন চালিয়ে যাওয়া আর দয়া নয়, বরং চুপচাপ আত্মসমর্পণ না করা। নূহ (আঃ) জাতির জন্য গভীরভাবে শোক করেছেন, কিন্তু রবের ফয়সালা রদ করতে যাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen When Unseen",
          "bn": "যখন কেউ দেখে না"
        },
        "p": [
          {
            "en": "None of the commentaries consulted here attaches a sound, connected hadith directly to this verse, so the honest course is to say so plainly and not to force one into the space. A narration that speaks to the same theme, though not tied to this verse by any of them, stands in Sahih al-Bukhari (660): the Prophet listed those whom God will shade on a Day when there is no shade but His, and among them he named a man who remembers God in private until his eyes overflow with tears. The thread that binds it here is the eye that sees the hidden.",
            "bn": "এখানে দেখা কোনো তাফসীরই এই আয়াতের সঙ্গে সরাসরি কোনো সহীহ, সংযুক্ত হাদীস জোড়েনি, তাই সৎ পথ হলো তা খোলাখুলি বলে দেওয়া আর জোর করে কিছু বসিয়ে না দেওয়া। একই ভাবের সঙ্গে মেলে এমন একটা বর্ণনা, যদিও তাফসীরকারদের কেউ একে এই আয়াতের সঙ্গে বাঁধেননি, আছে সহীহ বুখারীতে (৬৬০): নবী ﷺ তাঁদের কথা বলেছেন যাঁদের আল্লাহ ছায়া দেবেন এমন এক দিনে যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া নেই, আর তাঁদের মধ্যে তিনি নাম নিয়েছেন এমন এক ব্যক্তির যে নির্জনে আল্লাহকে স্মরণ করে যতক্ষণ না তার দুচোখ অশ্রুতে ভরে ওঠে। এখানে সুতোটা যা বাঁধে তা হলো সেই চোখ, যা গোপনকে দেখে।"
          },
          {
            "en": "That is the thread running straight back to Nuh under Our eyes. For years he built a ship for a flood that nobody could yet see, mocked by everyone who could see only him, and the sole witness who mattered was the very Lord who had told him to build. The hadith promises that the God who watches the man weeping alone in the dark is the same God who watched the prophet planing his wood on dry ground. To live as the seen is to keep working long after the crowd has turned its back, because the eye that truly counts is an eye that never once looks away.",
            "bn": "এটাই সেই সুতো, যা সোজা ফিরে যায় আমার দৃষ্টির নিচে থাকা নূহ (আঃ)-এর কাছে। বছরের পর বছর তিনি এমন এক বন্যার জন্য নৌকা বানালেন যা তখনো কেউ দেখতে পায়নি, আর যারা কেবল তাঁকেই দেখতে পাচ্ছিল তারা সবাই তাঁকে নিয়ে হাসল। যে একমাত্র সাক্ষী গুরুত্ব রাখতেন তিনি সেই রব, যিনি তাঁকে বানাতে বলেছিলেন। হাদীস প্রতিশ্রুতি দেয়, অন্ধকারে একা কেঁদে ওঠা মানুষটিকে যে আল্লাহ দেখেন, তিনিই সেই আল্লাহ যিনি শুকনো জমিনে কাঠ ছাঁটতে থাকা নবীকে দেখতেন। দৃষ্ট হয়ে বাঁচা মানে ভিড় পিঠ ফিরিয়ে নেওয়ার অনেক পরেও কাজ চালিয়ে যাওয়া, কারণ যে চোখটা সত্যিই গোনে, সেটা এমন এক চোখ যা একটিবারও চোখ সরায় না।"
          }
        ]
      }
    ]
  },
  "23:32": {
    "sections": [
      {
        "h": {
          "en": "The Same Sentence Again",
          "bn": "আবার সেই একই বাক্য"
        },
        "p": [
          {
            "en": "Nine verses earlier, Nuh (AS) had stood before his people with a single sentence: worship Allah, you have no god but Him; will you not fear Him? Now a whole civilisation has risen and fallen since, and God sends a new messenger to a new people. The first words He gives him are not new words. They are the same sentence, letter for letter: worship Allah, you have no god but Him; will you not fear Him? The Qur'an lets us hear the repetition on purpose.",
            "bn": "মাত্র নয়টি আয়াত আগে নূহ (আঃ) তাঁর জাতির সামনে দাঁড়িয়ে একটিমাত্র বাক্য বলেছিলেন: আল্লাহর ইবাদাত কর, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই; তোমরা কি ভয় করবে না? এরপর একটি গোটা সভ্যতা উঠেছে আবার মিশে গেছে, আর আল্লাহ নতুন এক জাতির কাছে নতুন এক রসূল পাঠান। তাঁকে দেওয়া প্রথম কথাগুলো কিন্তু নতুন নয়। সেই একই বাক্য, অক্ষরে অক্ষরে: আল্লাহর ইবাদাত কর, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই; তোমরা কি ভয় করবে না? কুরআন আমাদের এই পুনরাবৃত্তি ইচ্ছে করেই শোনায়।"
          },
          {
            "en": "This is the quiet architecture of surah al-Mu'minun. It moves through prophet after prophet, and at each stop the opening call is the same. The scenery changes, the century changes, the faces change, but the one demand does not. Before we ask who this later messenger was or what became of his people, the verse wants us to notice what has not moved. The message did not evolve over time. It was complete the first time it was spoken, and after that it only ever needed saying again.",
            "bn": "এটাই সূরা আল-মুমিনূনের নীরব গাঁথুনি। এক নবীর পর আরেক নবী, প্রতিটি থামায় শুরুর ডাকটা একই। দৃশ্য বদলায়, শতাব্দী বদলায়, মুখগুলো বদলায়, কিন্তু দাবিটা বদলায় না। এই পরের রসূল কে ছিলেন কিংবা তাঁর জাতির কী হলো, সে প্রশ্নে যাওয়ার আগে আয়াতটি চায় আমরা লক্ষ করি কোন জিনিসটা একটুও নড়েনি। বার্তাটা কালের সঙ্গে বিবর্তিত হয়নি। প্রথমবার বলা হওয়ার মুহূর্তেই তা পূর্ণ ছিল, এরপর কেবল বারবার আবার বলার দরকার পড়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A New Generation, The Old Errand",
          "bn": "নতুন প্রজন্ম, পুরনো দায়িত্ব"
        },
        "p": [
          {
            "en": "The previous verse sets the stage: then We produced after them a generation of others (23:31). A whole people is gone, and where they once stood another now lives. Ibn Kathir, in the abridged commentary, notes that the Qur'an does not name them here. He reports it was said they were 'Ad, the successors of Nuh's people, and it was said they were Thamud. The naming is deliberately left open, and the account keeps its focus on what happened rather than on a label we could pin down.",
            "bn": "আগের আয়াতটি মঞ্চ সাজিয়ে দেয়: অতঃপর তাদের পর আরেক প্রজন্ম সৃষ্টি করলাম (২৩:৩১)। এক জাতি চলে গেছে, তারা যেখানে দাঁড়িয়ে ছিল সেখানে এখন আরেক জাতি বাস করছে। ইবন কাসীর তাঁর সংক্ষিপ্ত তাফসীরে বলেন, কুরআন এখানে তাদের নাম নেয়নি। তিনি জানান, বলা হয়েছে এরা ‘আদ, নূহের জাতির উত্তরসূরি, আবার বলা হয়েছে এরা সামূদ। নামটা ইচ্ছে করেই খোলা রাখা হয়েছে, আর বিবরণটি নির্দিষ্ট কোনো পরিচয়ের চেয়ে বরং ঘটনার দিকেই মন রাখে।"
          },
          {
            "en": "Then comes the sending: So We sent among them a messenger from themselves (23:32). The verb is God's own — We sent. A prophet does not appoint himself, and he is not chosen by the crowd; he is placed among a people by their Lord. And he is sent fihim, among them, in their midst, living where they live. Before a single point of doctrine is argued, the verse has already shown mercy: God did not abandon the new generation to its idols. He sent them someone.",
            "bn": "তারপর আসে পাঠানোর কথা: অতঃপর তাদের মাঝে তাদেরই একজনকে রসূল করে পাঠালাম (২৩:৩২)। ক্রিয়াটি আল্লাহর নিজের: আমি পাঠালাম। কোনো নবী নিজেকে নিজে নিয়োগ দেন না, জনতাও তাঁকে বেছে নেয় না; রব তাঁকে একটি জাতির ভেতরে বসিয়ে দেন। আর তাঁকে পাঠানো হয় ফীহিম, তাদের মাঝে, তাদের ভিড়ের ভেতরে, তারা যেখানে থাকে সেখানে থেকেই। একটিও আকীদার তর্ক শুরু হওয়ার আগেই আয়াতটি রহমত দেখিয়ে দেয়: আল্লাহ নতুন প্রজন্মকে তার মূর্তিদের হাতে ফেলে রাখেননি। তিনি তাদের কাছে একজনকে পাঠালেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Were These People?",
          "bn": "এরা কারা ছিল?"
        },
        "p": [
          {
            "en": "Here the commentators genuinely differ, and the difference is worth keeping open rather than forcing shut. Al-Qurtubi reads the messenger as Hud, sent to 'Ad, reasoning that no nation arose directly after the people of Nuh except 'Ad. But he records a second view — that they were Thamud and the messenger was Salih — and notes its evidence: the verse later says the Cry (as-sayhah) seized them, and elsewhere the Cry is what took Thamud. He then adds that Shu'ayb's people of Madyan were seized by a Cry too, so certainty is not to be had here; and God knows best.",
            "bn": "এখানে তাফসীরকারেরা সত্যিই মতভেদ করেন, আর এই ভেদটা জোর করে মিটিয়ে না দিয়ে খোলা রাখাই ভালো। কুরতুবী রসূলকে ধরেন হূদ, যাঁকে ‘আদের কাছে পাঠানো হয়েছিল; তাঁর যুক্তি, নূহের জাতির ঠিক পরে ‘আদ ছাড়া আর কোনো জাতি দাঁড়ায়নি। তবে তিনি দ্বিতীয় একটি মতও তুলে ধরেন, যে এরা সামূদ আর রসূল সালিহ। এর প্রমাণ হিসেবে তিনি দেখান, আয়াতটি পরে বলে যে চিৎকার (আস-সাইহা) তাদের পাকড়াও করেছিল, আর অন্যত্র এই চিৎকারই সামূদকে ধরেছিল। এরপর তিনি জুড়ে দেন, শু‘আইবের জাতি মাদইয়ানকেও চিৎকার পাকড়াও করেছিল, তাই এখানে নিশ্চিত হওয়ার উপায় নেই; আল্লাহই ভালো জানেন।"
          },
          {
            "en": "Al-Baghawi lays out the same two readings — Hud and his people, or Salih and his people — and judges the first the more apparent. Al-Muyassar states plainly that the messenger is Hud (AS). At-Tabari, by contrast, names no one at all: he simply glosses the messenger as one calling them to God. And Ibn Kathir, in his Arabic commentary, likewise leaves him unnamed, saying only that God sent among them a messenger from themselves who called them to worship God alone with no partner.",
            "bn": "বাগাভী একই দুই মত সাজান, হূদ ও তাঁর জাতি, নয়তো সালিহ ও তাঁর জাতি, আর প্রথমটিকেই বেশি স্পষ্ট বলে ধরেন। মুয়াসসার সাফ বলে দেয়, রসূল হলেন হূদ (আঃ)। এর উল্টোদিকে তাবারী কারও নাম নেন না; তিনি কেবল রসূলের অর্থ করেন এই বলে যে তিনি তাদের আল্লাহর দিকে ডাকছিলেন। আর ইবন কাসীরও তাঁর আরবি তাফসীরে নাম না নিয়ে শুধু বলেন, আল্লাহ তাদের মাঝে তাদেরই একজন রসূল পাঠালেন, যিনি তাদের ডাকলেন কেবল আল্লাহর ইবাদাতের দিকে, তাঁর কোনো শরিক নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an gathers the threads. It notes that the commentators concluded, from the references and allusions in the passage, that it points to Hud or Salih, sent to 'Ad and Thamud. It flags the very tension al-Qurtubi felt: this account has the people destroyed by a Cry, while other verses tie the Cry specifically to Thamud — which led some scholars to read the new generation as Thamud, while others take the Cry in the general sense of a punishment that could take in 'Ad as well. The verse itself withholds the name, and so will we.",
            "bn": "মাআরিফুল কুরআন সুতোগুলো একত্র করে। এটি বলে, আয়াতের ইঙ্গিত ও ইশারা থেকে তাফসীরকারেরা এই সিদ্ধান্তে এসেছেন যে এখানে ইঙ্গিত হূদ বা সালিহের দিকে, যাঁদের পাঠানো হয়েছিল ‘আদ ও সামূদের কাছে। কুরতুবীর টের পাওয়া টানাপোড়েনটাই এটি ধরিয়ে দেয়: এই বিবরণে জাতিটি চিৎকারে ধ্বংস হয়, অথচ অন্য আয়াত চিৎকারকে সরাসরি সামূদের সঙ্গে বাঁধে। এ কারণেই কিছু আলিম নতুন প্রজন্মকে সামূদ ধরেছেন, আবার কেউ চিৎকারকে ধরেছেন সাধারণ অর্থে শাস্তি হিসেবে, যার মধ্যে ‘আদও ঢুকতে পারে। আয়াতটি নিজেই নামটা চেপে রাখে, আমরাও রাখব।"
          }
        ]
      },
      {
        "h": {
          "en": "A Messenger From Their Own Kind",
          "bn": "তাদেরই একজন রসূল"
        },
        "p": [
          {
            "en": "The one word the verse does insist on is minhum — from themselves. As-Sa'di draws out why it matters: the messenger was from their own kind, so that they knew his lineage, his standing and his honesty. That knowledge, he says, made them quicker to submit and further from the recoil a stranger provokes. A man whose childhood they had watched could not simply be dismissed as an outsider with unknown motives. His whole life among them was already part of the argument he now made to them.",
            "bn": "আয়াতটি যে একটি শব্দের উপর জোর দেয়, তা হলো মিনহুম, তাদেরই মধ্য থেকে। সাদী খুলে বলেন কেন এটা গুরুত্বপূর্ণ: রসূল ছিলেন তাদেরই জাতের, ফলে তারা তাঁর বংশ, তাঁর মর্যাদা আর তাঁর সততা জানত। এই জানাটাই, তিনি বলেন, তাদের আনুগত্যকে দ্রুততর করেছিল আর অপরিচিত কারও প্রতি জাগা বিতৃষ্ণা থেকে তাদের দূরে রেখেছিল। যাঁর শৈশব তারা নিজ চোখে দেখেছে, তাঁকে অজানা মতলবওয়ালা বাইরের লোক বলে উড়িয়ে দেওয়া যেত না। তাদের মাঝে কাটানো তাঁর গোটা জীবনটাই ছিল তাঁর এখনকার দাওয়াতের অংশ।"
          },
          {
            "en": "Al-Qurtubi reads minhum the same way: from their own clan, people who knew where he was born and how he grew up, so that their hearts would settle more readily on his word. There is a mercy hidden inside the grammar. God could have sent an angel, or a stranger from a far tribe with no ties to them. Instead He sent someone the people already trusted with the ordinary business of daily life, and asked them to trust him now with the single largest matter of all.",
            "bn": "কুরতুবীও মিনহুমকে একইভাবে পড়েন: তাদেরই গোত্রের, যারা জানত তিনি কোথায় জন্মেছেন আর কীভাবে বড় হয়েছেন, যাতে তাদের অন্তর তাঁর কথার উপর সহজে স্থির হয়। ব্যাকরণের ভেতরেই একটা রহমত লুকিয়ে আছে। আল্লাহ চাইলে একজন ফেরেশতা পাঠাতে পারতেন, কিংবা দূর কোনো গোত্রের অচেনা কাউকে, যার সঙ্গে তাদের কোনো বাঁধন নেই। তার বদলে তিনি এমন একজনকে পাঠালেন যাকে জাতিটা প্রতিদিনের সাধারণ কাজে আগে থেকেই বিশ্বাস করত, আর এবার তাঁকেই সবচেয়ে বড় বিষয়টায় বিশ্বাস করতে বললেন।"
          },
          {
            "en": "This is worth pausing on for a reader today. The people most able to carry a reminder to us are rarely strangers with impressive credentials. They are often the ones already inside our lives — a sibling, a neighbour, an old friend — whose very ordinariness tempts us to discount them. The verse quietly warns against exactly that reflex. The messenger's nearness was never a weakness in his call; it was the mercy folded into it. Familiarity was meant to open the ear, not to close it.",
            "bn": "আজকের পাঠকের জন্য এখানে একটু থামা দরকার। যাঁরা আমাদের কাছে সবচেয়ে ভালোভাবে স্মরণ পৌঁছাতে পারেন, তাঁরা খুব কমই চোখধাঁধানো পরিচয়ের অচেনা কেউ। তাঁরা প্রায়ই আমাদের জীবনের ভেতরের মানুষ, কোনো ভাই, প্রতিবেশী কিংবা পুরনো বন্ধু, যাঁদের সাধারণত্বই আমাদের তাঁদের কথা হালকা করে নিতে প্ররোচিত করে। আয়াতটি চুপচাপ ঠিক এই স্বভাবটার বিরুদ্ধেই সাবধান করে। রসূলের নৈকট্য তাঁর দাওয়াতের দুর্বলতা ছিল না, ছিল তাতে ভাঁজ করা রহমত। চেনা হওয়াটার কথা ছিল কান খুলে দেওয়া, বন্ধ করে দেওয়া নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The First Word Of Every Prophet",
          "bn": "প্রত্যেক নবীর প্রথম কথা"
        },
        "p": [
          {
            "en": "Now the message itself: worship Allah, you have no god but Him. As-Sa'di observes that this was the call every messenger brought to his people — the very first thing they said to them. It has three parts folded into one line: the command to worship God, the declaration that He alone deserves it, and the denial of every rival object of worship as false and void. This is not one prophet's private emphasis among many. It is the floor beneath the feet of all of them.",
            "bn": "এবার বার্তাটাই: আল্লাহর ইবাদাত কর, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। সাদী লক্ষ করেন, এটাই ছিল সেই ডাক যা প্রত্যেক রসূল তাঁর জাতির কাছে এনেছিলেন, তাদের বলা একেবারে প্রথম কথা। একটি লাইনের ভেতরে তিনটি অংশ ভাঁজ করা আছে: আল্লাহর ইবাদাতের হুকুম, এই ঘোষণা যে কেবল তিনিই তার যোগ্য, আর প্রতিটি প্রতিদ্বন্দ্বী মাবুদকে মিথ্যা ও বাতিল বলে অস্বীকার। এটা বহু নবীর মধ্যে কোনো একজনের নিজস্ব জোর দেওয়া কথা নয়। এটা তাঁদের সবার পায়ের নিচের মেঝে।"
          },
          {
            "en": "At-Tabari fills in the sense clause by clause. Worship Allah, he explains, means obey Him and not the gods and the idols, for worship is fitting for none but Him; you have no god but Him means you have no object of worship that it is right to serve besides Him. This is exactly why the passage can hand a later prophet the same sentence Nuh (AS) had used before him. When the truth is one, its opening statement never needs rewriting.",
            "bn": "তাবারী অর্থটা খণ্ড খণ্ড করে ভরে দেন। আল্লাহর ইবাদাত কর মানে, তিনি বলেন, তাঁরই আনুগত্য কর, ওই দেবতা আর মূর্তিদের নয়, কারণ ইবাদাত তিনি ছাড়া আর কারও শোভা পায় না; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই মানে, তাঁকে বাদ দিয়ে ইবাদাত করার যোগ্য আর কোনো মাবুদ তোমাদের নেই। ঠিক এ কারণেই আয়াতটি পরের এক নবীর হাতে সেই একই বাক্য তুলে দিতে পারে, যা নূহ (আঃ) তাঁর আগে বলেছিলেন। সত্য যখন এক, তার শুরুর কথাটা আর নতুন করে লেখার দরকার পড়ে না।"
          },
          {
            "en": "That is the spine to carry away from the verse. Across the whole sweep of surah al-Mu'minun, the messengers differ in name, in people, and in the century they walked through. Their first sentence is identical. If a reader today half-feels that faith should by now have moved on to something more sophisticated, the verse answers before the question can form: the message was whole from the very start, and every prophet was sent, in turn, simply to say it again.",
            "bn": "এটাই আয়াত থেকে বহন করে নেওয়ার মেরুদণ্ড। সূরা আল-মুমিনূনের গোটা বিস্তারে রসূলেরা আলাদা তাঁদের নামে, তাঁদের জাতিতে, যে শতাব্দীতে তাঁরা হেঁটেছেন তাতে। তাঁদের প্রথম বাক্যটি অভিন্ন। আজকের পাঠকের মনে যদি আধা-আধি মনে হয় যে ঈমানের এতদিনে আরও উন্নত কিছুতে এগিয়ে যাওয়া উচিত ছিল, প্রশ্নটা দানা বাঁধার আগেই আয়াত জবাব দেয়: বার্তাটা একদম শুরু থেকেই পূর্ণ ছিল, আর প্রত্যেক নবীকে পালা করে পাঠানো হয়েছিল কেবল তা আবার বলার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Will You Not Guard Yourselves?",
          "bn": "তোমরা কি সাবধান হবে না?"
        },
        "p": [
          {
            "en": "The call ends not with a threat but with a question: afala tattaqun — will you not fear Him, will you not guard yourselves? As-Sa'di reads it as an appeal to taqwa of your Lord, so that you would shun these idols and images. The point of the closing line is not merely to frighten a people into line; it is to awaken the God-consciousness that naturally turns a person away from false worship. Fear of consequence is folded inside it, but the aim is a heart that keeps watch.",
            "bn": "ডাকটা শেষ হয় কোনো হুমকি দিয়ে নয়, একটা প্রশ্ন দিয়ে: আফালা তাত্তাকূন, তোমরা কি তাঁকে ভয় করবে না, নিজেদের সামলে নেবে না? সাদী একে পড়েন তোমাদের রবের প্রতি তাকওয়ার আহ্বান হিসেবে, যাতে তোমরা এই মূর্তি আর প্রতিমাগুলো ছেড়ে দাও। শেষ লাইনটার উদ্দেশ্য কেবল ভয় দেখিয়ে জাতিকে সারিতে আনা নয়; বরং সেই আল্লাহ-সচেতনতা জাগানো, যা মানুষকে স্বভাবতই মিথ্যা ইবাদাত থেকে ফিরিয়ে আনে। পরিণামের ভয় এর ভেতরে ভাঁজ করা আছে, তবে লক্ষ্য হলো এমন একটা অন্তর যা পাহারায় থাকে।"
          },
          {
            "en": "At-Tabari and al-Muyassar do bring out the note of fear: will you not fear God's punishment for worshipping something besides Him? Both readings sit together without strain. Taqwa is the awareness of God that makes a person careful — careful enough to dread crossing Him, and careful enough to keep only Him in the place of worship. The verse leaves the people, and the reader after them, holding an open question rather than a closed verdict. At this moment it still invites; it does not yet condemn.",
            "bn": "তাবারী আর মুয়াসসার ভয়ের সুরটাও ফুটিয়ে তোলেন: তাঁকে বাদ দিয়ে অন্য কিছুর ইবাদাত করলে আল্লাহর শাস্তিকে কি তোমরা ভয় করবে না? দুই পাঠই কোনো টানাটানি ছাড়া পাশাপাশি বসে। তাকওয়া সেই আল্লাহ-সচেতনতা যা মানুষকে সাবধান করে তোলে, এতটাই সাবধান যে তাঁর নাফরমানি করতে ভয় পায়, আবার এতটাই যে ইবাদাতের জায়গায় কেবল তাঁকেই রাখে। আয়াতটি জাতির হাতে, আর তাদের পরে পাঠকের হাতে, একটা বন্ধ রায় নয়, খোলা প্রশ্ন ধরিয়ে দেয়। এই মুহূর্তে এটি এখনো আহ্বান করছে, শাস্তির রায় দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word On Fearing Allah",
          "bn": "আল্লাহকে ভয় করা প্রসঙ্গে"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a specific hadith to it, and that is worth saying plainly rather than papering over. The taqwa this verse calls for, though, is drawn vividly in the Prophet's own words elsewhere — in a narration that is general guidance on God-consciousness, not something the scholars tie to this particular ayah. In Sahih al-Bukhari, Abu Hurayrah (RA) reports that the Prophet (ﷺ) said:",
            "bn": "এই আয়াতের জন্য আনা কোনো তাফসীরই এর সঙ্গে নির্দিষ্ট কোনো হাদীস জোড়েনি, আর কথাটা চেপে না রেখে সোজাসুজি বলে দেওয়াই ভালো। তবে এই আয়াত যে তাকওয়ার ডাক দেয়, তা অন্যত্র নবী ﷺ-এর নিজের কথায় জীবন্ত হয়ে ফুটেছে। এটি আল্লাহ-সচেতনতা নিয়ে একটি সাধারণ দিকনির্দেশনা, এই বিশেষ আয়াতের সঙ্গে আলিমদের বেঁধে দেওয়া কিছু নয়। সহীহ বুখারীতে আবু হুরায়রা (রাঃ) বর্ণনা করেন যে নবী ﷺ বলেছেন:"
          },
          {
            "en": "'Seven will Allah shade in His shade on the Day when there is no shade but His: a just ruler; a youth who grew up worshipping his Lord; a man whose heart is attached to the mosques; two who love each other for God's sake, meeting upon that and parting upon that; a man whom a woman of rank and beauty calls to sin, and he says, I fear Allah; a man who gives charity so secretly his left hand does not know what his right has spent; and a man who remembers Allah alone, and his eyes overflow.'",
            "bn": "‘৭ জনকে আল্লাহ তাঁর ছায়ায় ছায়া দেবেন সেই দিন, যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না: ন্যায়পরায়ণ শাসক; যে যুবক তার রবের ইবাদাতে বেড়ে উঠেছে; যে ব্যক্তির অন্তর মসজিদের সঙ্গে ঝুলে থাকে; দুজন মানুষ যারা আল্লাহর জন্য একে অপরকে ভালোবাসে, এর উপরেই মেলে আর এর উপরেই ছাড়ে; যে ব্যক্তিকে পদমর্যাদা ও রূপবতী এক নারী পাপের দিকে ডাকে, আর সে বলে, আমি আল্লাহকে ভয় করি; যে ব্যক্তি এমন গোপনে দান করে যে তার বাঁ হাত জানে না ডান হাত কী খরচ করল; আর যে ব্যক্তি একাকী আল্লাহকে স্মরণ করে, আর তার দু-চোখ উপচে পড়ে।’"
          },
          {
            "en": "The fifth of the seven is the taqwa of this verse made flesh. Fearing Allah turns out to be not a passing mood but a hinge on which a real decision turns: at the height of temptation the man's whole answer is I fear Allah, and it holds him where he stands. That is what afala tattaqun asks a people to become — not people who merely tremble at a threat, but people in whom the awareness of God quietly decides things when no one is watching.",
            "bn": "৭ জনের মধ্যে পঞ্চমজন এই আয়াতের তাকওয়াকেই যেন রক্ত-মাংসে দাঁড় করিয়ে দেয়। আল্লাহকে ভয় করা তাহলে কোনো ক্ষণিক মন-মেজাজ নয়, বরং সেই কব্জা যার উপর একটা সত্যিকারের সিদ্ধান্ত ঘোরে: প্রলোভনের চূড়ায় দাঁড়িয়ে লোকটির গোটা জবাব হলো, আমি আল্লাহকে ভয় করি, আর সেটাই তাকে জায়গায় ধরে রাখে। আফালা তাত্তাকূন একটি জাতিকে ঠিক এটাই হতে বলে। হুমকিতে শুধু কেঁপে ওঠা মানুষ নয়, বরং এমন মানুষ যাদের ভেতরে কেউ না দেখলেও আল্লাহ-সচেতনতা চুপচাপ সিদ্ধান্ত নিয়ে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Gifts And One Demand",
          "bn": "দুই উপহার, এক দাবি"
        },
        "p": [
          {
            "en": "One caution belongs here. The people this messenger was sent to were, on every reading, later destroyed for rejecting him. It must be said plainly, in this language and in Bangla both: the verse describes what the text describes — a past people who were called and who refused — and it licenses nothing against any living person or community. A destroyed nation in the Qur'an is a warning aimed at the reader's own heart, never a permit to judge, despise or harm a present-day neighbour who happens to believe differently.",
            "bn": "এখানে একটা সতর্কবার্তা জরুরি। এই রসূলকে যে জাতির কাছে পাঠানো হয়েছিল, প্রতিটি পাঠ অনুসারেই তারা পরে তাঁকে প্রত্যাখ্যানের কারণে ধ্বংস হয়েছিল। কথাটা এই ভাষায় ও বাংলায়, দুই জায়গাতেই সোজাসুজি বলা দরকার: আয়াতটি যা বর্ণনা করে ঠিক তা-ই বর্ণনা করে, ডাক পাওয়া আর তা অস্বীকার করা এক অতীত জাতির কথা, আর এটি জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না। কুরআনের কোনো ধ্বংসপ্রাপ্ত জাতি পাঠকের নিজের অন্তরের দিকে তাক করা এক সতর্কবার্তা, ভিন্ন বিশ্বাসের কোনো প্রতিবেশীকে বিচার করা, ঘৃণা করা বা কষ্ট দেওয়ার ছাড়পত্র কখনোই নয়।"
          },
          {
            "en": "So the verse leaves us with two gifts and one demand. The gifts: that God did not leave a new generation without guidance, and that He sent the guidance through one of their own, a face they already knew. The demand is the sentence itself — worship Allah, you have no god but Him — unchanged from Nuh (AS) to this messenger, and unchanged still by the time it reaches us. The question at its end was never merely rhetorical. It is addressed, across every century, to whoever happens to be reading. Will you not guard yourselves?",
            "bn": "তাই আয়াতটি আমাদের হাতে তুলে দেয় দুটি উপহার আর একটি দাবি। উপহার দুটি: আল্লাহ একটি নতুন প্রজন্মকে হিদায়াত ছাড়া ফেলে রাখেননি, আর সেই হিদায়াত পাঠিয়েছেন তাদেরই একজনের মাধ্যমে, তাদের চেনা এক মুখ দিয়ে। দাবিটা হলো বাক্যটি নিজেই: আল্লাহর ইবাদাত কর, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। নূহ (আঃ) থেকে এই রসূল পর্যন্ত তা বদলায়নি, আমাদের কাছে পৌঁছানো পর্যন্তও বদলায়নি। এর শেষের প্রশ্নটা কখনো নিছক কথার কথা ছিল না। প্রতিটি শতাব্দী পেরিয়ে তা এসে দাঁড়ায় যে-ই পড়ছে তার সামনে। তোমরা কি সাবধান হবে না?"
          }
        ]
      }
    ]
  },
  "23:38": {
    "sections": [
      {
        "h": {
          "en": "The Verdict in a Sentence",
          "bn": "এক বাক্যে রায়"
        },
        "p": [
          {
            "en": "The speaker in this verse is not a passer-by. A few lines earlier the Qur'an named him: the eminent of the people, those who disbelieved, denied the meeting of the Hereafter, and had been given ease in the life of this world (23:33). They have listened to their own messenger, one of themselves, and this ayah is the last word of their answer. He is nothing but a man, they say, who has invented a lie about Allah, and we will never believe him.",
            "bn": "এ আয়াতে যে কথা বলছে, সে পথচলতি কেউ নয়। কয়েক লাইন আগেই কুরআন তাকে চিনিয়ে দিয়েছে: সম্প্রদায়ের প্রধানেরা, যারা কুফরি করেছিল, আখিরাতের সাক্ষাৎকে মিথ্যা বলেছিল, আর দুনিয়ার জীবনে যাদের ভোগের উপকরণ দেওয়া হয়েছিল (২৩:৩৩)। তাদেরই একজনকে রসূল করে পাঠানো হয়েছিল, তারা তাঁর কথা শুনেছে, আর এ আয়াতটি তাদের জবাবের শেষ কথা। তারা বলে, সে নিছক একজন মানুষ, যে আল্লাহ সম্পর্কে মিথ্যা বানিয়ে নিয়েছে, আর আমরা তাকে কক্ষনো বিশ্বাস করব না।"
          },
          {
            "en": "The Arabic frames it as a total dismissal. In huwa illā rajul — he is no more than a man; then two charges hang on that reduction. The first is iftirā': he has fabricated, patched together, a falsehood and pinned it on Allah. The second is their verdict on themselves: wa mā naḥnu lahu bi-mu'minīn, we are not going to believe him. Al-Qurtubi and al-Baghawi both note the plain sense of the opening — huwa, he, means the messenger — so the sentence is aimed squarely at the man who had been sent to them.",
            "bn": "আরবি ভাষায় কথাটা পুরোপুরি উড়িয়ে দেওয়ার ঢঙে বসানো। ইন হুওয়া ইল্লা রাজুল—সে একজন মানুষ ছাড়া কিছু নয়। এই নামিয়ে আনার সঙ্গে ঝোলানো দুটি অভিযোগ। প্রথমটি ইফতিরা: সে আল্লাহর নামে মিথ্যা জোড়াতালি দিয়ে বানিয়ে চাপিয়ে দিয়েছে। দ্বিতীয়টি তাদের নিজেদের সম্পর্কেই রায়: ওয়ামা নাহনু লাহু বিমুমিনীন, আমরা তাকে বিশ্বাস করব না। কুরতুবী ও বাগাভী দুজনেই শুরুর শব্দটির সোজা অর্থ ধরিয়ে দেন: হুওয়া মানে সে, অর্থাৎ রসূল। তাই বাক্যটির নিশানা সরাসরি সেই মানুষটি, যাঁকে তাদের কাছে পাঠানো হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Only a Man",
          "bn": "নিছক একজন মানুষ"
        },
        "p": [
          {
            "en": "The reduction did not start here. Two verses back the same chiefs had said, This is nothing but a man like yourselves; he eats what you eat and drinks what you drink (23:33), and then warned, if you obey a man like yourselves, you will surely be the losers (23:34). Ibn Kathir, gathering the whole passage, puts their reasoning bluntly: they refused to follow him because he was a human being like them, and they would not follow a human messenger. His ordinariness — that he ate, drank, and needed sleep — was treated as disproof of his errand.",
            "bn": "এই নামিয়ে আনা এখানেই শুরু হয়নি। দুই আয়াত আগে এই প্রধানেরাই বলেছিল, সে তো তোমাদেরই মতো একজন মানুষ, তোমরা যা খাও সে তাই খায়, তোমরা যা পান কর সে তাই পান করে (২৩:৩৩)। এরপর হুঁশিয়ারি দিয়েছিল, তোমাদেরই মতো একজন মানুষের আনুগত্য করলে তোমরা নিশ্চিত ক্ষতিগ্রস্ত হবে (২৩:৩৪)। ইবন কাসীর পুরো অংশটা একত্র করে তাদের যুক্তিটা সাফ বলে দেন: তারা তাঁকে মানতে চায়নি কারণ তিনি ছিলেন তাদেরই মতো একজন মানুষ, আর মানুষ-রসূলকে তারা অনুসরণ করতে রাজি ছিল না। তিনি খেতেন, পান করতেন, ঘুমাতেন, এই সাধারণ মানবিকতাকেই তারা তাঁর দায়িত্বের বিরুদ্ধে প্রমাণ বানিয়ে নিল।"
          },
          {
            "en": "This is a recurring reflex in the Qur'an, not a one-off. Nation after nation met its messenger with the same objection: he is a man like us, so why should the word of God come through him and not through us, or through an angel? The demand hides an assumption — that a true messenger would have to be more than human, above hunger and death — when in fact being one of the people is exactly what fits a man to warn them. The Qur'an itself marks it as a pattern: later in this passage it says every time a messenger came to a nation, they denied him (23:44).",
            "bn": "কুরআনে এটা একবারের ঘটনা নয়, বারবার ফিরে আসা এক মনোভাব। জাতির পর জাতি তাদের রসূলকে একই আপত্তিতে মুখ দিয়েছে: সে তো আমাদেরই মতো মানুষ, তাহলে আল্লাহর বাণী তার মাধ্যমে আসবে কেন, আমাদের কারও মাধ্যমে বা কোনো ফেরেশতার মাধ্যমে নয় কেন? এই দাবির ভেতরে লুকানো একটা ধারণা আছে, যেন সত্যিকারের রসূল মানুষের চেয়ে বড় কিছু হবেন, ক্ষুধা ও মৃত্যুর ঊর্ধ্বে। অথচ মানুষের একজন হওয়াই তো তাঁকে মানুষকে সতর্ক করার উপযুক্ত করে তোলে। কুরআন নিজেই একে নিয়ম বলে চিহ্নিত করে: এই অংশের পরে বলা হয়, যখনই কোনো জাতির কাছে তাদের রসূল এসেছে, তারা তাকে মিথ্যা বলেছে (২৩:৪৪)।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose People, Which Prophet",
          "bn": "কোন জাতি, কোন নবী"
        },
        "p": [
          {
            "en": "Who were these chiefs, and who was their messenger? The Qur'an does not name them here; it says only that God raised them up after the people of Nuh (23:31 and 23:32). At-Tabari, reading the verse, supplies a name: he glosses their words as, Salih is nothing but a man who has invented a lie — placing the scene among Thamud, whose prophet was Salih. Ibn Kathir keeps the question open. He reports that this generation was said to be 'Ad, since they came directly after Nuh's people, or else Thamud.",
            "bn": "এই প্রধানেরা কারা ছিল, আর তাদের রসূল কে? এখানে কুরআন তাদের নাম নেয়নি; শুধু বলেছে, নূহের সম্প্রদায়ের পর আল্লাহ তাদের সৃষ্টি করেছিলেন (২৩:৩১ ও ২৩:৩২)। তাবারী আয়াতটি পড়ে একটি নাম জুড়ে দেন: তিনি তাদের কথাটির ব্যাখ্যা করেন এভাবে, সালিহ একজন মানুষ ছাড়া কিছু নয় যে মিথ্যা বানিয়েছে। এতে দৃশ্যটি বসে সামূদের মাঝে, যাদের নবী ছিলেন সালিহ (আঃ)। ইবন কাসীর প্রশ্নটা খোলা রাখেন। তিনি জানান, এই জাতিকে কেউ বলেছেন আদ, কারণ তারা নূহের সম্প্রদায়ের ঠিক পরেই এসেছিল, আবার কেউ বলেছেন সামূদ।"
          },
          {
            "en": "Ibn Kathir leans toward Thamud, and gives his reason from the passage itself: God says the Shriek, the Ṣayḥah, seized them (23:41), and the Ṣayḥah is the punishment associated with Thamud. The commentators are not agreed, and the verse does not settle it, so neither will this reading. What both views share is the point that matters: a real people, given ease and warned by one of their own, answered the warning with this sentence, and were destroyed for it.",
            "bn": "ইবন কাসীর সামূদের দিকে ঝোঁকেন, আর তার কারণ নেন আয়াত থেকেই: আল্লাহ বলেন, এক বিকট আওয়াজ (সাইহা) তাদের ধরে ফেলল (২৩:৪১), আর এই সাইহা সামূদের সঙ্গেই জড়িত শাস্তি। তাফসীরকারেরা একমত নন, আয়াতও বিষয়টি নিষ্পত্তি করে না, তাই এ লেখাও তা করবে না। দুই মতেই যে কথাটা অভিন্ন, সেটাই আসল: বাস্তব একটি জাতি, যাদের ভোগের উপকরণ দেওয়া হয়েছিল আর যাদের সতর্ক করেছিলেন তাদেরই একজন, সেই সতর্কবাণীর জবাব দিল এই বাক্য দিয়ে, আর তার পরিণামে ধ্বংস হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Lie They Named",
          "bn": "যে মিথ্যা তারা বলল"
        },
        "p": [
          {
            "en": "What exactly was the invented lie? The commentators answer from the surrounding speech. At-Tabari points to two things the messenger had said. First, his words no god is yours but Him (23:32) — the call to worship God alone. Second, his promise that after you die and become dust and bones you will be brought forth again (23:35). These two claims, tawḥīd and resurrection, are what the chiefs branded as a fabrication pinned on God.",
            "bn": "‘বানানো মিথ্যা’ বলতে ঠিক কী? তাফসীরকারেরা জবাব নেন আশপাশের কথা থেকে। তাবারী দুটি জিনিসের দিকে ইশারা করেন, যা রসূল বলেছিলেন। প্রথম, তাঁর কথা: তিনি ছাড়া তোমাদের কোনো ইলাহ নেই (২৩:৩২)—একমাত্র আল্লাহর ইবাদতের ডাক। দ্বিতীয়, তাঁর ওয়াদা: তোমরা মরে গিয়ে মাটি ও হাড় হয়ে গেলে আবার তোমাদের বের করে আনা হবে (২৩:৩৫)। এই দুটি কথা, তাওহিদ ও পুনরুত্থান, প্রধানেরা এগুলোকেই আল্লাহর নামে চাপানো বানোয়াট বলে দাগিয়ে দিল।"
          },
          {
            "en": "Ibn Kathir reads it the same way. The lie against Allah, he says, is meant to cover what the messenger brought them of the message, the warning, and the news of the return — the maʿād, the raising after death. Al-Baghawi is narrower still: when the chiefs add we will not believe him, he glosses it as we will not believe in resurrection after death. So the closing clause is not a general shrug; it names the single doctrine they could not stomach.",
            "bn": "ইবন কাসীরও একইভাবে পড়েন। আল্লাহর নামে মিথ্যা বলতে বোঝানো হয়েছে, তিনি বলেন, রসূল যে বার্তা, সতর্কবাণী আর মৃত্যুর পর ফিরে আসার (মাআদ) খবর তাদের কাছে এনেছিলেন, তা-ই। বাগাভী আরও সংকীর্ণ করে ধরেন: প্রধানেরা যখন যোগ করে আমরা তাকে বিশ্বাস করব না, তিনি এর অর্থ করেন, মৃত্যুর পর পুনরুত্থানকে আমরা বিশ্বাস করব না। তাই শেষ বাক্যটা কোনো সাধারণ উপেক্ষা নয়, এটি সেই একটি বিশ্বাসকেই নাম ধরে ডাকে, যা তারা হজম করতে পারেনি।"
          },
          {
            "en": "The Muyassar keeps the plainest form of it: this one who calls you to faith is only a man who invented a lie against God, and we do not believe what he told us. Al-Qurtubi's contribution is the exact weight of the verb — afterā here means ikhtalaqa, he made it up out of nothing. The charge is not that the messenger erred; it is that he manufactured God's speech and passed his own invention off as revelation.",
            "bn": "মুয়াসসার একেবারে সোজা রূপে বলে: এই যে তোমাদের ঈমানের দিকে ডাকছে, সে একজন মানুষ ছাড়া কিছু নয়, যে আল্লাহর নামে মিথ্যা বানিয়েছে, আর সে আমাদের যা বলেছে তা আমরা মানি না। কুরতুবীর অবদান ক্রিয়াটির মাপ ঠিক করে দেওয়া: এখানে ‘আফতারা’ মানে ‘ইখতালাকা’, শূন্য থেকে বানিয়ে তোলা। অভিযোগটা এই নয় যে রসূল ভুল করেছেন; অভিযোগটা এই যে তিনি আল্লাহর কথা নিজে গড়ে নিজের বানানো কথাকেই ওহি বলে চালিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Charge Turned Around",
          "bn": "উল্টে যাওয়া অভিযোগ"
        },
        "p": [
          {
            "en": "There is a sharp reversal hidden in their words, and it is worth pausing on. The one charge they level is iftirā' 'alā Allāh — inventing a lie about God. Yet, as at-Tabari made plain, the 'lie' they had in mind was the messenger's insistence that there is no god but the One. They called the pure truth about God a fabrication, while the whole of their own religion — the deities they set beside Him — was a fabrication about God in the fullest sense.",
            "bn": "তাদের কথার ভেতরে লুকিয়ে আছে এক তীক্ষ্ণ উল্টো টান, যেখানে একটু থামা দরকার। তারা যে একটিমাত্র অভিযোগ তোলে, তা হলো ইফতিরা আলাল্লাহ—আল্লাহর নামে মিথ্যা বানানো। অথচ তাবারী স্পষ্ট করেছেন, তারা যাকে ‘মিথ্যা’ বলছে তা আসলে রসূলের এই জোরালো কথা যে, একমাত্র তিনি ছাড়া কোনো ইলাহ নেই। আল্লাহ সম্পর্কে সবচেয়ে খাঁটি সত্যকেই তারা বলল বানোয়াট, অথচ তাদের নিজেদের গোটা ধর্ম, তারা আল্লাহর পাশে যেসব উপাস্য বসিয়েছিল, সেটাই তো ছিল আল্লাহর নামে সবচেয়ে বড় বানোয়াট।"
          },
          {
            "en": "This is how disbelief often works. It does not merely reject; it inverts, hanging its own fault on the one it rejects. The people who had genuinely invented gods, rites and claims about the unseen accused the man who came to strip all that away of being the inventor. It is easier to keep a comfortable falsehood if you can rename the truth that threatens it as the falsehood. The verse lets their sentence stand and leaves the reader to feel the weight of the inversion.",
            "bn": "কুফর প্রায়ই এভাবেই কাজ করে। সে শুধু প্রত্যাখ্যান করে না, উল্টে দেয়; নিজের দোষটা চাপিয়ে দেয় যাকে সে প্রত্যাখ্যান করছে তার ঘাড়ে। যারা সত্যিকার অর্থে দেবতা, আচার আর গায়েব নিয়ে দাবি বানিয়েছিল, তারাই সেই মানুষটিকে বানোয়াটের অপবাদ দিল, যিনি এসেছিলেন এসব মুছে ফেলতে। আরামদায়ক একটা মিথ্যা ধরে রাখা সহজ হয়, যদি তাকে হুমকি দেওয়া সত্যটাকেই ‘মিথ্যা’ নাম দিয়ে দেওয়া যায়। আয়াত তাদের বাক্যটা তেমনই রেখে দেয়, আর এই উল্টে যাওয়ার ভারটা পাঠকের অনুভব করার জন্য ছেড়ে দেয়।"
          },
          {
            "en": "The reader is meant to test himself against it. Do I ever protect a habit I am unwilling to give up by deciding, in advance, that whoever calls me off it must be exaggerating, self-serving or naive? That move is the chiefs' move in miniature. It renames a claim as a lie, not because the claim was weighed and found false, but because admitting it were true would demand a change I have already refused to make.",
            "bn": "পাঠককে এর সঙ্গে নিজেকে যাচাই করতে বলা হচ্ছে। আমি কি কখনো এমন কোনো অভ্যাস আগলাতে গিয়ে, যা ছাড়তে আমি রাজি নই, আগেভাগেই ঠিক করে ফেলি যে, যে আমাকে ওটা থেকে টানছে সে নিশ্চয়ই বাড়িয়ে বলছে, নয়তো তার স্বার্থ আছে, নয়তো সে সরল? এটাই তো ছোট আকারে প্রধানদের চাল। এতে একটা দাবিকে ‘মিথ্যা’ নাম দেওয়া হয়—যাচাই করে মিথ্যা পাওয়া গেছে বলে নয়, বরং সত্য মেনে নিলে এমন বদল দরকার হতো যা আমি আগেই করব না বলে ঠিক করে রেখেছি।"
          }
        ]
      },
      {
        "h": {
          "en": "Because Nothing Comes After",
          "bn": "কারণ পরে কিছু নেই"
        },
        "p": [
          {
            "en": "Why were they so certain? The answer sits in the verse just before. There is nothing but our life in this world; we die and we live, and we will not be raised again (23:37). That is the engine of the whole denial. If this life is all there is, then a man warning of a judgment to come is not merely wrong; he is peddling a fear that has no object, and the honest response would be to call him a liar. Their No to the messenger grows straight out of their No to the Hereafter.",
            "bn": "তারা এত নিশ্চিত ছিল কেন? জবাবটা আছে ঠিক আগের আয়াতে। আমাদের এই দুনিয়ার জীবন ছাড়া কিছুই নেই, আমরা এখানেই মরি বাঁচি, আমাদের আর কখনো ওঠানো হবে না (২৩:৩৭)। গোটা অস্বীকারের ইঞ্জিন এটাই। জীবন যদি শুধু এইটুকুই হয়, তাহলে সামনের কোনো বিচারের ভয় দেখানো মানুষটি শুধু ভুলই নন; তিনি এমন এক ভয় বিক্রি করছেন যার কোনো বাস্তব নেই, আর সৎ জবাব তখন তাঁকে মিথ্যাবাদী বলা। রসূলকে তাদের ‘না’ সরাসরি গজিয়ে উঠেছে আখিরাতকে তাদের ‘না’ থেকে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads 23:37 as the standing argument of those who deny the Day of Judgment, and then turns it on the reader with unusual candour. Those who deny the Hereafter outright, it says, are plainly disbelievers — but many who profess faith live as if they too had never expected that Day, so heedless of it that the same denial can be read off their conduct. The chiefs said it aloud; a heart can hold the identical assumption in silence and never notice.",
            "bn": "মাআরিফুল কুরআন ২৩:৩৭ আয়াতকে পড়ে বিচারদিবস অস্বীকারকারীদের বাঁধা যুক্তি হিসেবে, তারপর অস্বাভাবিক সততায় কথাটা পাঠকের দিকে ফেরায়। যারা আখিরাতকে খোলাখুলি অস্বীকার করে, সে বলে, তারা তো স্পষ্ট কাফির। কিন্তু ঈমানের দাবিদার অনেকেই এমনভাবে জীবন কাটায় যেন সেই দিনের প্রত্যাশা তাদেরও কখনো ছিল না, এতটাই বেখেয়াল যে তাদের কাজকর্ম থেকেই সেই একই অস্বীকার পড়ে নেওয়া যায়। প্রধানেরা তা মুখে বলেছিল; একটা অন্তর চুপচাপ ঠিক সেই ধরে-নেওয়াটাই বয়ে বেড়াতে পারে, টেরও পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day They Waved Off",
          "bn": "যে দিনটা তারা উড়িয়ে দিল"
        },
        "p": [
          {
            "en": "None of the classical commentaries here attaches a sound narration to 23:38; the verse is explained from its own context, not from a reported saying. So what follows is offered not as a comment tied to this ayah, but as a window onto the very thing the chiefs waved away — the Day on which the reckoning they denied will fall, and on which people will be sorted by what their hearts actually held.",
            "bn": "এখানকার কোনো ধ্রুপদি তাফসীর ২৩:৩৮ আয়াতের সঙ্গে কোনো সহিহ হাদিস জুড়ে দেয়নি; আয়াতটি ব্যাখ্যা হয়েছে তার নিজের প্রসঙ্গ থেকে, কোনো বর্ণিত বাণী থেকে নয়। তাই যা আসছে, তা এই আয়াতের সঙ্গে বাঁধা কোনো টীকা হিসেবে নয়, বরং প্রধানেরা যে জিনিসটা উড়িয়ে দিল তার দিকে একটা জানালা হিসেবে—সেই দিন, যেদিন তাদের অস্বীকার করা হিসাব নেমে আসবে, আর মানুষকে আলাদা করা হবে তাদের অন্তরে আসলে যা ছিল তা দিয়ে।"
          },
          {
            "en": "In Ṣaḥīḥ al-Bukhārī, Abū Hurayrah reported that the Prophet ﷺ said: 'Allah will give shade to seven on the Day when there is no shade but His: a just ruler; a youth who grew up worshipping his Lord; a man whose heart is attached to the mosques; two who love each other for Allah's sake, meeting and parting on that alone; a man called by a woman of rank and beauty who says, I fear Allah; a man who gives charity so secretly that his left hand does not know what his right has spent; and a man who remembers Allah alone, and his eyes overflow.'",
            "bn": "সহিহ বুখারিতে আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: ‘৭ জনকে আল্লাহ সেদিন তাঁর ছায়ায় স্থান দেবেন, যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না: ন্যায়পরায়ণ শাসক; যে যুবক তার রবের ইবাদতে বেড়ে উঠেছে; যার অন্তর মসজিদের সঙ্গে ঝুলে থাকে; দুজন মানুষ যারা কেবল আল্লাহর জন্য একে অপরকে ভালোবাসে, এর উপরই মেলে আর এর উপরই বিদায় নেয়; যাকে রূপ ও মর্যাদার অধিকারিণী নারী ডাকে, আর সে বলে, আমি আল্লাহকে ভয় করি; যে এত গোপনে দান করে যে তার বাঁ হাত জানে না ডান হাত কী দিল; আর যে নির্জনে আল্লাহকে স্মরণ করে, আর তার দুচোখ উপচে পড়ে।’"
          },
          {
            "en": "Nothing here is grand or public. The Day the chiefs of the town called impossible is, in the Prophet's ﷺ words, the one Day when only God's shade will serve — and it is granted for exactly the private, unnoticed faith they were mocking. They wanted a messenger raised above eating and drinking; the shade goes to ordinary people who feared God when no one was watching. What they dismissed as a lie is where the real weighing happens.",
            "bn": "এর কিছুই জাঁকালো বা লোকদেখানো নয়। জনপদের প্রধানেরা যে দিনটাকে অসম্ভব বলেছিল, নবী ﷺ-এর ভাষায় সেটাই সেই একমাত্র দিন যেদিন কেবল আল্লাহর ছায়াই কাজে আসবে। আর তা দেওয়া হয় ঠিক সেই গোপন, চোখে-না-পড়া ঈমানের জন্য, যা নিয়ে তারা ঠাট্টা করছিল। তারা চেয়েছিল খাওয়া-দাওয়ার ঊর্ধ্বে এক রসূল; অথচ ছায়া মেলে সাধারণ মানুষের, যারা কেউ না দেখা অবস্থায় আল্লাহকে ভয় করেছিল। যাকে তারা মিথ্যা বলে উড়িয়ে দিয়েছিল, সেখানেই আসল ওজন হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sentence, Not a Weapon",
          "bn": "জীবিত কারও উপর রায় নয়"
        },
        "p": [
          {
            "en": "One thing must be said plainly, in this language and the next. This verse records what a particular people said and the judgment that then fell on them; it licenses nothing against any living person or community. It is not a label to pin on a neighbour who doubts, a relative who asks hard questions, or a stranger whose faith you cannot see. The chiefs were condemned for a settled, arrogant rejection of a messenger they had every reason to trust, sealed by their boast that there is no life to come — not for having a question.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার, এই ভাষায় আর তার পরের ভাষায়ও। এ আয়াত একটি নির্দিষ্ট জাতি যা বলেছিল আর তার পরিণামে তাদের উপর যে রায় নেমেছিল, তা লিপিবদ্ধ করে; জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। সন্দেহ পোষণ করা প্রতিবেশী, কঠিন প্রশ্ন তোলা আত্মীয়, কিংবা যার ঈমান আপনি দেখতে পান না এমন অচেনা কারও গায়ে সাঁটার মতো কোনো তকমা এটি নয়। প্রধানেরা দোষী হয়েছিল একজন বিশ্বাসযোগ্য রসূলকে অহংকারভরে, গোঁ ধরে প্রত্যাখ্যান করায়, আর পরকাল নেই বলে দম্ভ করায়; কেবল একটা প্রশ্ন থাকার কারণে নয়।"
          },
          {
            "en": "Ibn Kathir ends his reading of the whole passage with the lesson the Qur'an itself draws: let everyone who hears this beware of disbelieving in their messengers. That is where the verse turns back on us. The reflex it shows — shrinking a messenger to 'only a man', renaming his truth a fabrication, and doing both so the reckoning can be ignored — is not locked in the ancient past. Wherever a truth is dodged by belittling the one who carries it, the sentence of these chiefs is being quietly repeated.",
            "bn": "ইবন কাসীর পুরো অংশের আলোচনা শেষ করেন কুরআনের নিজেরই টানা শিক্ষা দিয়ে: যে এ কথা শোনে, সে যেন তাদের রসূলদের অবিশ্বাস করা থেকে সাবধান হয়। ঠিক এখানেই আয়াতটি আমাদের দিকে ফিরে তাকায়। যে মনোভাব এটি দেখায়, তা প্রাচীন অতীতে আটকে নেই: রসূলকে ‘নিছক একজন মানুষে’ নামিয়ে আনা, তাঁর সত্যকে বানোয়াট নাম দেওয়া, আর হিসাবটা এড়াতে দুটোই করা। যেখানেই সত্য বহনকারীকে ছোট করে সত্যটাকে এড়ানো হয়, সেখানেই এই প্রধানদের বাক্য চুপচাপ আবার উচ্চারিত হয়।"
          },
          {
            "en": "So the closing question is not about them but about me. When something true reaches me through a person I would rather not credit, do I answer the truth, or do I go to work on the messenger? The chiefs chose the second, and the choice cost them everything the very next verses record. The verse hands the reader the cheaper moment to choose again — before there is anything left to regret.",
            "bn": "তাই শেষ প্রশ্নটা তাদের নিয়ে নয়, আমাকে নিয়ে। যখন কোনো সত্য এমন কারও মাধ্যমে আমার কাছে আসে যাকে আমি স্বীকৃতি দিতে চাই না, আমি কি সত্যটার জবাব দিই, নাকি বক্তাকে নিয়ে লেগে পড়ি? প্রধানেরা দ্বিতীয়টা বেছেছিল, আর ঠিক পরের আয়াতগুলোই বলে দেয় সেই বাছাই তাদের কী মূল্যে পড়েছিল। আয়াতটি পাঠকের হাতে তুলে দেয় সস্তা মুহূর্তটা: আফসোস করার মতো কিছু ঘটার আগেই আবার বেছে নেওয়ার সুযোগ।"
          }
        ]
      }
    ]
  },
  "23:45": {
    "sections": [
      {
        "h": {
          "en": "The Thread Runs On",
          "bn": "সুতোটা চলতেই থাকে"
        },
        "p": [
          {
            "en": "The verse opens with thumma, then, the same connector that carried the roll-call of vanished nations in the lines just before it. at-Tabari reads it plainly: then We sent, after the messengers whose description came earlier, Musa and his brother Harun. The story does not change its law when it reaches the two most famous prophets of the Exodus; it extends that law to them. The same God who had sent messenger after messenger to people after people now sends once more, to the largest stage of all, and the reader is meant to hear the whole preceding history pressing behind that single opening word.",
            "bn": "আয়াতটি শুরু হয় সুম্মা দিয়ে, অর্থাৎ অতঃপর, ঠিক আগের লাইনগুলোতে ধ্বংস হওয়া জাতিগুলোর তালিকা যে শব্দটি বহন করেছিল সেই একই শব্দ। তাবারী সোজা কথায় পড়েন: এর আগে যে রসূলদের বর্ণনা এসেছে, তাঁদের পর আমি পাঠালাম মূসা ও তাঁর ভাই হারূনকে। কাহিনি যখন মূসার যুগের এই দুই বিখ্যাত নবীর কাছে পৌঁছায়, তখন সে তার নিয়ম বদলায় না, বরং সেই নিয়মকেই তাঁদের উপর টেনে নেয়। যে আল্লাহ জাতির পর জাতির কাছে একের পর এক রসূল পাঠিয়েছেন, তিনিই আবার পাঠান, এবার সবচেয়ে বড় মঞ্চে। পাঠকের কানে যেন গোটা আগের ইতিহাসটা ওই একটি সূচনা-শব্দের পেছনে চাপ দিয়ে দাঁড়িয়ে থাকে।"
          },
          {
            "en": "as-Sa'di pauses on where this sending sits and draws a large point from it. He notes that Allah has just listed nations destroyed in succession, and then tells us He sent Musa and revealed the Torah to him. Ibn Kathir, in the abridged commentary, sets the same sequence out: the messengers came to their peoples, were denied, were dragged to ruin in turn, and then came Musa. Placing this sending straight after that grim procession is itself part of the argument. The law of warning and consequence has not run out; it is about to walk into the court of the man who claimed there was no god above him.",
            "bn": "এই পাঠানো ঠিক কোথায় বসছে, সাদী তার উপর একটু থামেন আর সেখান থেকে বড় একটা কথা টেনে আনেন। তিনি খেয়াল করান, আল্লাহ এইমাত্র একের পর এক ধ্বংস হওয়া জাতিগুলোর কথা বললেন, তারপর জানালেন তিনি মূসাকে পাঠিয়েছেন আর তাঁর উপর তাওরাত নাযিল করেছেন। ইবন কাসীর সংক্ষিপ্ত তাফসীরে একই ধারা সাজান: রসূলরা তাঁদের জাতির কাছে এসেছেন, প্রত্যাখ্যাত হয়েছেন, পালা করে ধ্বংসে টেনে নেওয়া হয়েছে, তারপর এলেন মূসা। ওই ভয়ঙ্কর মিছিলের ঠিক পরেই এই পাঠানোকে বসানো নিজেই যুক্তির একটা অংশ। সতর্কবার্তা আর পরিণতির নিয়ম ফুরিয়ে যায়নি, তা এবার ঢুকতে চলেছে সেই লোকের দরবারে যে দাবি করেছিল তার উপরে কোনো খোদা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent With His Brother",
          "bn": "ভাইকে সঙ্গে নিয়ে"
        },
        "p": [
          {
            "en": "The verse could have said only that We sent Musa. Instead it says Musa and his brother Harun, and that word brother is not filler. as-Sa'di catches the back-story in a single clause: Allah gave him Harun at the moment he had asked his Lord to make his brother a partner in his task, and his request was granted. That plea is preserved in the Qur'an, and make him share my task (20:32), the prayer of a man who did not want to stand before Pharaoh's court on his own strength. The verse quietly records that the prayer was heard.",
            "bn": "আয়াতটি চাইলে কেবল বলতে পারত, আমি মূসাকে পাঠালাম। তার বদলে বলা হলো মূসা ও তাঁর ভাই হারূন, আর ভাই শব্দটা এখানে নিছক পূরণের জন্য নয়। সাদী পেছনের গল্পটা এক বাক্যে ধরে ফেলেন: মূসা যে মুহূর্তে রবের কাছে চেয়েছিলেন তাঁর ভাইকে তাঁর কাজে শরিক করে দিতে, ঠিক সেই সময় আল্লাহ তাঁকে হারূন দিলেন, আর তাঁর আবেদন কবুল হলো। সেই আকুতি কুরআনে রাখা আছে, তাকে আমার কাজে শরিক করে দাও (২০:৩২), এমন একজনের দোয়া যে ফেরাউনের দরবারে একা নিজের জোরে দাঁড়াতে চায়নি। আয়াতটি চুপচাপ লিখে রাখে যে সেই দোয়া শোনা হয়েছিল।"
          },
          {
            "en": "There is mercy in the very grammar of the sending. A prophet is being dispatched to the mightiest tyrant of his age, and God does not send him bare but doubles him, giving him the brother he loved and trusted at his shoulder. In another passage Musa had begged, and my brother Harun is more eloquent than I in speech, so send him with me as a support who will confirm me (28:34). The answer to that fear is written into the present verse. When Allah lays a heavy errand on a servant, He often sends the companion ahead of the task itself.",
            "bn": "এই পাঠানোর একেবারে ব্যাকরণেই রহমত লুকিয়ে আছে। একজন নবীকে পাঠানো হচ্ছে তাঁর যুগের সবচেয়ে বড় স্বৈরাচারীর কাছে, আর আল্লাহ তাঁকে খালি হাতে পাঠান না, বরং দ্বিগুণ করে দেন। ভালোবাসা ও ভরসার ভাইটিকে তাঁর কাঁধের পাশে দিয়ে দেন। আরেক জায়গায় মূসা আকুতি করেছিলেন, আমার ভাই হারূন কথায় আমার চেয়ে স্পষ্টভাষী, তাই তাকে আমার সঙ্গে সহায় করে পাঠাও যে আমাকে সত্যায়ন করবে (২৮:৩৪)। সেই ভয়ের জবাব এই আয়াতের ভেতরেই লেখা। আল্লাহ যখন কোনো বান্দার কাঁধে ভারী দায়িত্ব তুলে দেন, তিনি প্রায়ই কাজটার আগেই সঙ্গীকে পাঠিয়ে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What The Signs Carried",
          "bn": "নিদর্শন যা বহন করেছিল"
        },
        "p": [
          {
            "en": "The two are sent with Our signs, bi-ayatina, and the commentators fill in what those signs were. al-Muyassar names them as the nine signs and lists them in turn: the staff, the hand, the locusts, the lice, the frogs, the blood, the flood, the years of drought, and the failing of the crops. al-Baghawi is briefer, pointing to the clear proof drawn from the hand and the staff, and others besides. Both anchor the word in concrete wonders, things done openly in the world that a watching court could examine and still not explain away.",
            "bn": "এই দুজনকে পাঠানো হয় আমার নিদর্শনসহ, বিআয়াতিনা, আর তাফসীরকারেরা বলে দেন সেই নিদর্শনগুলো কী ছিল। মুয়াসসার তাদের নাম দেন নয়টি নিদর্শন বলে এবং একে একে গুনে দেন: লাঠি, হাত, পঙ্গপাল, উকুন, ব্যাঙ, রক্ত, প্লাবন, দুর্ভিক্ষের বছরগুলো আর ফসলের ক্ষয়। বাগাভী আরও সংক্ষেপে হাত ও লাঠি থেকে নেওয়া স্পষ্ট প্রমাণের দিকে ইঙ্গিত করেন, সঙ্গে আরও কিছু। দুজনেই শব্দটাকে বাস্তব মুজিযায় বেঁধে রাখেন, দুনিয়ায় প্রকাশ্যে ঘটানো এমন সব ঘটনা যা দেখা দরবার খতিয়ে দেখেও উড়িয়ে দিতে পারত না।"
          },
          {
            "en": "at-Tabari reads the same word more broadly. For him with Our signs means with Our proofs, bi-hujajina, the evidences that establish the truth of the two messengers, whatever shape they take. Ibn Kathir, in his Arabic commentary, gathers both senses at once, saying they were sent with the signs and the crushing arguments and the conclusive demonstrations. So the signs are at the same time particular wonders and standing proofs: deeds worked in the world, and reasons that bind the mind. The verse holds the two meanings together and does not force the reader to choose between the miracle seen and the case argued.",
            "bn": "তাবারী একই শব্দকে আরও প্রশস্তভাবে পড়েন। তাঁর কাছে আমার নিদর্শনসহ মানে আমার প্রমাণসহ, বিহুজাজিনা, সেই দলিলগুলো যা দুজন রসূলের সত্যতা প্রতিষ্ঠা করে, তা যে চেহারাতেই আসুক। ইবন কাসীর তাঁর আরবি তাফসীরে দুই অর্থকেই একসঙ্গে জড়ো করেন, বলেন তাঁদের পাঠানো হয়েছে নিদর্শন, চূর্ণকারী দলিল আর চূড়ান্ত প্রমাণসহ। তাই নিদর্শন একই সঙ্গে নির্দিষ্ট মুজিযা এবং স্থায়ী প্রমাণ: দুনিয়ায় ঘটানো কাজ, আবার মনকে বেঁধে ফেলা যুক্তি। আয়াতটি দুই অর্থকে একসাথে ধরে রাখে, পাঠককে দেখা মুজিযা আর পেশ করা যুক্তির মধ্যে একটাকে বেছে নিতে বাধ্য করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Clear Authority",
          "bn": "সুস্পষ্ট এক প্রমাণ"
        },
        "p": [
          {
            "en": "Alongside the signs stands a clear authority, sultan mubin, and here the readings lean in two directions. al-Baghawi and al-Muyassar keep the phrase close to the miracles, treating the authority as the same clear proof carried in the staff, the hand and the rest. as-Sa'di reads sultan as a decisive proof in its own right: a clear evidence so strong, he writes, that it overpowers hearts and takes hold of them, so that the hearts of the believers submit to it while the argument stands unanswered against the obstinate. The difference between the two readings is one of emphasis, not of contradiction, and the verse comfortably bears both.",
            "bn": "নিদর্শনের পাশে দাঁড়িয়ে আছে সুস্পষ্ট এক প্রমাণ, সুলতান মুবীন, আর এখানে পাঠ দুই দিকে হেলে পড়ে। বাগাভী ও মুয়াসসার কথাটাকে মুজিযার কাছাকাছি রাখেন, এই প্রমাণকে লাঠি, হাত আর বাকিগুলোর বহন করা সেই একই স্পষ্ট দলিল ধরেন। সাদী সুলতানকে পড়েন নিজেই এক চূড়ান্ত প্রমাণ হিসেবে: এমন স্পষ্ট দলিল, তিনি লেখেন, যা এত শক্তিশালী যে অন্তরকে পরাভূত করে আর তাকে কব্জা করে নেয়, ফলে মুমিনদের অন্তর তার কাছে নত হয় আর গোঁয়ারদের বিরুদ্ধে যুক্তিটা অখণ্ডিত দাঁড়িয়ে থাকে। দুই পাঠের পার্থক্য জোর দেওয়ার, বিরোধের নয়, আর আয়াতটি স্বচ্ছন্দে দুটোকেই বহন করে।"
          },
          {
            "en": "as-Sa'di ties this authority to another verse, where Allah says, And We had certainly given Musa nine clear signs (17:101). The word sultan, he suggests, is not a gift separate from the signs but their sheer force, the way true evidence presses in on a conscience. Ibn Kathir's Arabic runs the same way, naming them crushing arguments and conclusive demonstrations. What the word clear adds is that nothing about them was murky or open to honest dispute. The proof set before Pharaoh left no reasonable room for doubt, so that refusing it would be a decision made against the light, not a failure to see it.",
            "bn": "সাদী এই প্রমাণকে আরেকটি আয়াতের সঙ্গে বাঁধেন, যেখানে আল্লাহ বলেন, আমি মূসাকে নিশ্চয়ই নয়টি স্পষ্ট নিদর্শন দিয়েছিলাম (১৭:১০১)। সুলতান শব্দটা, তিনি বলেন, নিদর্শন থেকে আলাদা কোনো দান নয়, বরং তারই খাঁটি জোর, সত্য দলিল যেভাবে বিবেকের উপর চাপ দেয় সেই জোর। ইবন কাসীরের আরবিও একই পথে চলে, এগুলোকে চূর্ণকারী দলিল আর চূড়ান্ত প্রমাণ বলে ডাকে। স্পষ্ট শব্দটা যা যোগ করে তা হলো, এদের কোনো কিছুই ঘোলাটে বা সৎভাবে বিতর্কযোগ্য ছিল না। ফেরাউনের সামনে রাখা প্রমাণ সন্দেহের কোনো যুক্তিসংগত জায়গা রাখেনি, তাই তা না-মানা হতো আলোর বিরুদ্ধে নেওয়া সিদ্ধান্ত, না-দেখার ব্যর্থতা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Recognised And Refused",
          "bn": "চিনেও অস্বীকার"
        },
        "p": [
          {
            "en": "A proof this clear changes what refusal even means. as-Sa'di points out that the chief of the obstinate himself came to know the truth and fought it anyway. He reads the sending together with a verse in Sura an-Naml: And they rejected them, while their own souls were convinced of them, out of injustice and haughtiness (27:14). The signs did their work; they reached the mind and settled there. What failed was not understanding but will. This is exactly why the Qur'an calls the authority clear, for the problem in the story was never that the evidence had come out thin or hard to follow.",
            "bn": "এত স্পষ্ট প্রমাণ প্রত্যাখ্যানের মানেটাই পাল্টে দেয়। সাদী দেখান, গোঁয়ারদের সরদার নিজেই সত্যটা জেনেছিল, তবু তার বিরুদ্ধে লড়েছিল। তিনি এই পাঠানোকে সূরা নামলের একটি আয়াতের সঙ্গে মিলিয়ে পড়েন: আর তারা সেগুলো অস্বীকার করল, অথচ তাদের অন্তর সেগুলোয় নিশ্চিত হয়ে গিয়েছিল, জুলুম আর অহংকারবশত (২৭:১৪)। নিদর্শন তার কাজ করেছিল, মনে পৌঁছে সেখানে থিতু হয়েছিল। যা ব্যর্থ হয়েছিল তা বোঝা নয়, ইচ্ছা। ঠিক এ কারণেই কুরআন প্রমাণকে স্পষ্ট বলে, কেননা কাহিনিতে সমস্যা কখনো এই ছিল না যে দলিলটা পাতলা বা বোঝা কঠিন হয়ে এসেছিল।"
          },
          {
            "en": "The same pattern shows in Musa's own answer to Pharaoh, which as-Sa'di quotes: You have already known that none sent these down except the Lord of the heavens and the earth as clear insights (17:102). Knowledge and denial were seated in the one chest at once. The lesson for a reader is a sobering one: to understand a truth is not yet to submit to it, and a heart can look straight at the light and still turn its face from it. A clear authority saves nobody who has quietly decided beforehand that they do not wish to be saved.",
            "bn": "একই ধারা ফুটে ওঠে ফেরাউনের কাছে মূসার নিজের জবাবে, যা সাদী উদ্ধৃত করেন: তুমি তো জেনেই গেছ, আসমান ও জমিনের রব ছাড়া এসব স্পষ্ট অন্তর্দৃষ্টি হিসেবে আর কেউ নাযিল করেননি (১৭:১০২)। জ্ঞান আর অস্বীকার একই বুকের ভেতর একসঙ্গে বসে ছিল। পাঠকের জন্য শিক্ষাটা ভাবিয়ে তোলে: সত্য বোঝা মানেই তার কাছে নত হওয়া নয়, আর অন্তর আলোর দিকে সোজা তাকিয়েও তার থেকে মুখ ফিরিয়ে নিতে পারে। স্পষ্ট প্রমাণ তাকে বাঁচায় না, যে আগেভাগে চুপচাপ ঠিক করে রেখেছে সে বাঁচতে চায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Rank Of Harun",
          "bn": "হারূনের মর্যাদা"
        },
        "p": [
          {
            "en": "No commentary I consulted attaches a specific hadith to this verse; its lesson is carried by the wording itself. But the honour the verse gives Harun, named beside Musa and sent as his support, is echoed in a sound report the Prophet Muhammad ﷺ left about him. When he set out for the expedition to Tabuk, he left ʿAli (may Allah be pleased with him) in charge over Medina, and ʿAli asked whether he was really being left behind among the children and the women while the others marched.",
            "bn": "আমি যেসব তাফসীর দেখেছি তার কোনোটিই এই আয়াতের সঙ্গে সুনির্দিষ্ট কোনো হাদিস জোড়ে না, আয়াতের শিক্ষা তার শব্দের ভেতরেই বহন করা। তবে আয়াতটি হারূনকে যে সম্মান দেয়, মূসার পাশে নাম ধরে আর তাঁর সহায় করে পাঠিয়ে, তার প্রতিধ্বনি শোনা যায় নবী মুহাম্মদ ﷺ তাঁর সম্পর্কে রেখে যাওয়া একটি সহিহ বর্ণনায়। তিনি যখন তাবুকের অভিযানে বের হন, তখন মদিনায় আলী (রাঃ)-কে দায়িত্বে রেখে যান, আর আলী (রাঃ) জিজ্ঞেস করেন, বাকিরা যখন যুদ্ধে যাচ্ছে তখন তাঁকে কি সত্যিই শিশু আর নারীদের মধ্যে ফেলে রাখা হচ্ছে।"
          },
          {
            "en": "The Prophet ﷺ answered, in the wording recorded by al-Bukhari (no. 4416), Will you not be pleased that you are to me as Harun was to Musa, except that there is no prophet after me? Bukhari places the report among those he graded sound. The saying reaches for exactly the bond this verse names: Harun as the trusted deputy who stands in the prophet's place and carries his charge when he cannot. It confirms, from the Prophet's own mouth, how weighty a thing it was that Musa, at the hardest hour of his mission, was not made to go alone.",
            "bn": "নবী ﷺ জবাব দেন, বুখারীর (নং ৪৪১৬) রাখা ভাষায়, তুমি কি এতে খুশি নও যে তুমি আমার কাছে তেমন, হারূন যেমন ছিলেন মূসার কাছে, তবে আমার পরে কোনো নবী নেই? বুখারী এই বর্ণনাটিকে তাঁর সহিহ বলে নির্ধারিত বর্ণনাগুলোর মধ্যে রাখেন। কথাটি ঠিক সেই বন্ধনের দিকেই হাত বাড়ায় যা এই আয়াত নাম ধরে বলে: হারূন সেই বিশ্বস্ত প্রতিনিধি, যিনি নবী না থাকতে পারলে তাঁর জায়গায় দাঁড়ান আর তাঁর দায়িত্ব বহন করেন। এটি নবীর নিজের মুখ থেকে নিশ্চিত করে, কত ভারী একটা ব্যাপার ছিল যে মূসাকে তাঁর মিশনের সবচেয়ে কঠিন সময়ে একা যেতে হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "When Destruction Ceased",
          "bn": "যখন ধ্বংস থামল"
        },
        "p": [
          {
            "en": "Both as-Sa'di and Ibn Kathir draw a striking conclusion from where this sending sits in the record. Ibn Kathir writes that after Allah revealed the Torah to Musa, He no longer wiped out whole nations with a single overwhelming calamity as He had before; instead He commanded the believers to strive against disbelief. as-Sa'di reaches the same reading and grounds it in Sura al-Qasas: And We gave Musa the Scripture, after We had destroyed the former generations, as insights for mankind (28:43). On this understanding, the sending of Musa marks a genuine turn in the way divine judgment falls upon peoples.",
            "bn": "সাদী আর ইবন কাসীর দুজনেই এই পাঠানো বিবরণে কোথায় বসছে তা থেকে একটা চমকপ্রদ সিদ্ধান্তে পৌঁছান। ইবন কাসীর লেখেন, আল্লাহ মূসার উপর তাওরাত নাযিল করার পর আগের মতো আর গোটা জাতিকে এক অভিভূতকারী শাস্তিতে নিশ্চিহ্ন করেননি, বরং মুমিনদের কুফরের বিরুদ্ধে সংগ্রাম করার আদেশ দিলেন। সাদী একই পাঠে পৌঁছান আর তা সূরা কাসাসে ভিত্তি করে দাঁড় করান: আগের প্রজন্মগুলোকে ধ্বংস করার পর আমি মূসাকে কিতাব দিয়েছিলাম মানুষের জন্য অন্তর্দৃষ্টি হিসেবে (২৮:৪৩)। এই বোঝাপড়ায় মূসার পাঠানো জাতিদের উপর আল্লাহর ফয়সালা যেভাবে নেমে আসে তাতে সত্যিকার একটা মোড়কে চিহ্নিত করে।"
          },
          {
            "en": "Two cautions belong here, and both should be said plainly. as-Sa'di notes that Pharaoh's own drowning is no exception to this shift, since it came before the Torah was sent down; the verse describes a change in the pattern, not a denial of what befell him. And the ruin the earlier verses report is exactly that, a report of what Allah did to named peoples long ago. It licenses nothing against any living person or community today. What the verse hands the believer is an errand and a proof to carry, never a warrant to raise a hand against anyone.",
            "bn": "এখানে দুটি সতর্কতা রাখা দরকার, আর দুটোই সোজাসুজি বলা উচিত। সাদী খেয়াল করান, ফেরাউনের নিজের ডুবে মরা এই পরিবর্তনের ব্যতিক্রম নয়, কারণ তা তাওরাত নাযিলের আগেই ঘটেছিল; আয়াতটি ধারার একটা বদল বর্ণনা করে, তার পরিণতি অস্বীকার করে না। আর আগের আয়াতগুলো যে ধ্বংসের কথা বলে তা ঠিক তা-ই, বহু আগে নাম-ধরা কিছু জাতির প্রতি আল্লাহ যা করেছিলেন তার বিবরণ। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। আয়াতটি মুমিনের হাতে যা তুলে দেয় তা এক দায়িত্ব আর বহন করার মতো এক প্রমাণ, কারো গায়ে হাত তোলার সনদ কখনো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent, Still Sending",
          "bn": "পাঠানো, এখনো পাঠানো"
        },
        "p": [
          {
            "en": "Taken by itself, the verse looks almost plain: God sent two brothers to a king, with signs and a clear proof. Read in its place, it opens into a whole way of understanding how God deals with people. He does not tire of sending. He does not send without evidence. And He does not always send the messenger by himself, for sometimes the mercy in the sending is simply the brother standing at his side. The proudest court on earth was offered the fullest proof, and its refusal, when it came, was the refusal of something it had genuinely understood.",
            "bn": "আলাদা করে দেখলে আয়াতটি প্রায় সাদামাটা মনে হয়: আল্লাহ দুই ভাইকে এক রাজার কাছে পাঠালেন, নিদর্শন আর স্পষ্ট প্রমাণসহ। কিন্তু নিজের জায়গায় রেখে পড়লে তা খুলে যায় আল্লাহ মানুষের সঙ্গে কীভাবে আচরণ করেন সেই গোটা একটা বোঝাপড়ায়। তিনি পাঠাতে ক্লান্ত হন না। তিনি প্রমাণ ছাড়া পাঠান না। আর তিনি রসূলকে সবসময় একলা পাঠান না, কারণ কখনো কখনো পাঠানোর ভেতরকার রহমতটাই হলো পাশে দাঁড়ানো ভাইটি। দুনিয়ার সবচেয়ে দাম্ভিক দরবারকে পেশ করা হয়েছিল পূর্ণতম প্রমাণ, আর তার প্রত্যাখ্যান যখন এলো, তা ছিল সত্যিকারভাবে বোঝা এক জিনিসেরই প্রত্যাখ্যান।"
          },
          {
            "en": "That leaves the reader with a quiet question rather than a distant history. The same God still sends people toward hard and frightening tasks, still equips them with what they need in order to see the way, and still places helpers within their reach before they notice. The verse invites me to ask for both before I set out: the clarity to know that I am standing in the right, and the companion who will confirm me and shoulder part of the weight. Musa asked, and Harun was given to him. That asking has never been closed.",
            "bn": "এতে পাঠকের হাতে দূরের কোনো ইতিহাস নয়, বরং একটা চুপচাপ প্রশ্ন থেকে যায়। সেই একই আল্লাহ আজও মানুষকে কঠিন আর ভয়ের কাজের দিকে পাঠান, পথ দেখার জন্য যা দরকার তা দিয়ে সাজিয়ে দেন, আর তারা টের পাওয়ার আগেই সহযোগীদের তাদের নাগালে রেখে দেন। আয়াতটি আমাকে ডাকে বেরিয়ে পড়ার আগে দুটোই চেয়ে নিতে: আমি যে সঠিকের উপর দাঁড়িয়ে আছি তা জানার স্বচ্ছতা, আর সেই সঙ্গী যে আমাকে সত্যায়ন করবে আর বোঝার একটা অংশ কাঁধে নেবে। মূসা চেয়েছিলেন, আর হারূনকে তাঁকে দেওয়া হয়েছিল। সেই চাওয়ার দরজা কখনো বন্ধ হয়নি।"
          }
        ]
      }
    ]
  },
  "23:50": {
    "sections": [
      {
        "h": {
          "en": "After the Denied Prophets",
          "bn": "অস্বীকারকারীদের পরে এক নিদর্শন"
        },
        "p": [
          {
            "en": "This verse lands at the close of a roll-call. In the ayat just before it, God sends His messengers in succession and every nation denies its messenger (23:44); then Musa (AS) and his brother Harun (AS) go to Pharaoh with clear signs (23:45), and the arrogant are counted among the destroyed (23:48). Right after that story of denial and ruin, the Qur'an turns to the son of Maryam and his mother, and instead of another warning it sets down a sign wrapped in mercy. Where the verse sits is the first thing to notice.",
            "bn": "আয়াতটি এসেছে এক লম্বা তালিকার শেষে। ঠিক আগের আয়াতগুলোতে আল্লাহ একের পর এক তাঁর রসূলদের পাঠান, আর প্রতিটি জাতি তার রসূলকে অস্বীকার করে (২৩:৪৪)। এরপর মূসা (আঃ) ও তাঁর ভাই হারূন (আঃ) সুস্পষ্ট নিদর্শন নিয়ে ফেরাউনের কাছে যান (২৩:৪৫), আর অহংকারীরা ধ্বংসপ্রাপ্তদের কাতারে গিয়ে দাঁড়ায় (২৩:৪৮)। অস্বীকার আর ধ্বংসের সেই কাহিনির পরপরই কুরআন ফিরে তাকায় মারইয়ামের ছেলে আর তাঁর মায়ের দিকে। আরেকটা সতর্কবাণীর বদলে এখানে রাখা হয় রহমতে মোড়া এক নিদর্শন। আয়াতটি কোথায় বসেছে, সেটাই প্রথমে লক্ষ করার মতো।"
          },
          {
            "en": "The commentators read this as one link in a long chain of prophethood. Ma'arif al-Qur'an, drawing on Bayan-ul-Qur'an, notes that a tyrant was bent on killing Isa (AS) from his very childhood, and that he and his mother escaped and, by God's grace, found a place on a height where they lived in peace until he reached maturity and was entrusted with prophethood. The verse names the shelter, not the flight; God chose to record the ground where the two of them came to rest.",
            "bn": "তাফসীরকারেরা একে দেখেন নবুওয়াতের এক দীর্ঘ ধারার একটি কড়ি হিসেবে। মাআরিফুল কুরআন, বায়ানুল কুরআনের সূত্রে, জানায় যে এক অত্যাচারী শাসক ছোটবেলা থেকেই ঈসা (আঃ)-কে হত্যা করতে উঠেপড়ে লেগেছিল। তিনি আর তাঁর মা পালিয়ে যান, আর আল্লাহর অনুগ্রহে উঁচু এক জায়গায় আশ্রয় পান, যেখানে শান্তিতে বসবাস করতে থাকেন যতদিন না তিনি পূর্ণবয়সে পৌঁছান আর নবুওয়াত পান। আয়াতটি পালানোর কথা বলে না, আশ্রয়ের কথা বলে। দুজন যেখানে থিতু হয়েছিলেন সেই জমিটাই আল্লাহ লিখে রাখলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "One Sign, Not Two",
          "bn": "দুই নয়, এক নিদর্শন"
        },
        "p": [
          {
            "en": "Read the words closely. God made \"the son of Maryam and his mother a sign\" — a sign, in the singular, though two people are named. at-Tabari records from Qatada that she bore him without a father, and for that reason the verse kept the singular even while it mentioned both Maryam and her son. The child cannot stand as a sign apart from the mother who carried him. The wonder is the two of them together, and the grammar holds them inside a single word.",
            "bn": "শব্দগুলো একটু খেয়াল করে পড়ুন। আল্লাহ করেছেন \"মারইয়ামের ছেলে আর তার মাকে নিদর্শন\" — নিদর্শন, একবচনে, যদিও নাম নেওয়া হয়েছে দুজনের। তাবারী কাতাদা থেকে বর্ণনা করেন, মা তাঁকে জন্ম দিয়েছিলেন পিতা ছাড়া, আর এ কারণেই আয়াত একবচন রেখে দিল যদিও মারইয়াম আর তাঁর ছেলে দুজনের কথাই এল। ছেলেটিকে তাঁর বহনকারী মায়ের থেকে আলাদা করে নিদর্শন হিসেবে দাঁড় করানো যায় না। বিস্ময়টা তাঁরা দুজন মিলে, আর ব্যাকরণ তাঁদের একটিমাত্র শব্দের ভেতরে ধরে রাখল।"
          },
          {
            "en": "al-Baghawi weighs the same point. He asks why the verse did not say \"two signs,\" and reports two readings: that their whole affair is one sign, or that each of them is a sign, as the Qur'an says \"each of the two gardens brought forth its fruit\" (18:33) with a singular verb for a pair. Either way the mother is not a backdrop to her son. She stands inside the sign, named before the shelter, and God gave the refuge to the two of them alike.",
            "bn": "বাগাভী একই বিষয় ওজন করে দেখেন। তিনি প্রশ্ন তোলেন, আয়াত কেন \"দুটি নিদর্শন\" বলল না, আর দুটি পাঠ তুলে ধরেন: হয় তাঁদের গোটা ব্যাপারটাই এক নিদর্শন, নয়তো তাঁদের প্রত্যেকেই এক নিদর্শন, যেমন কুরআন বলে \"দুই বাগানের প্রত্যেকটিই তার ফল দিল\" (১৮:৩৩), জোড়ার জন্য একবচন ক্রিয়া দিয়ে। যেভাবেই হোক, মা তাঁর ছেলের পেছনের পর্দা নন। তিনি নিদর্শনের ভেতরেই দাঁড়িয়ে, আশ্রয়ের আগেই তাঁর নাম, আর আল্লাহ আশ্রয়টি দিয়েছেন দুজনকেই সমানভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Birth Without a Father",
          "bn": "পিতা ছাড়া এক জন্ম"
        },
        "p": [
          {
            "en": "What exactly is the sign? Ibn Kathir answers that Isa (AS) and Maryam are a decisive proof of God's power to do whatever He wills. He lays it out in four steps: God created Adam (AS) with neither father nor mother, created Hawwa from a male without a female, created Isa (AS) from a female without a male, and created the rest of mankind from a male and a female together. The birth without a father completes a set that only God's hand could ever arrange.",
            "bn": "নিদর্শনটা ঠিক কী? ইবন কাসীর জবাব দেন, ঈসা (আঃ) আর মারইয়াম হলেন আল্লাহর সেই শক্তির অকাট্য প্রমাণ যে তিনি যা চান তা-ই করতে পারেন। তিনি বিষয়টি চারটি ধাপে সাজিয়ে দেন: আল্লাহ আদম (আঃ)-কে সৃষ্টি করেছেন পিতা-মাতা কিছু ছাড়াই, হাওয়াকে সৃষ্টি করেছেন নারী ছাড়া কেবল পুরুষ থেকে, ঈসা (আঃ)-কে সৃষ্টি করেছেন পুরুষ ছাড়া কেবল নারী থেকে, আর বাকি মানুষকে সৃষ্টি করেছেন পুরুষ ও নারী মিলে। পিতা ছাড়া এই জন্ম এমন এক সেট পূর্ণ করে, যা কেবল আল্লাহর হাতেই সাজানো সম্ভব।"
          },
          {
            "en": "as-Sa'di adds the rest of the wonder. God favoured Isa (AS), he writes, and made him and his mother among God's astonishing signs: she conceived and bore him without a father, he spoke in the cradle while still an infant, and God ran signs through his hands. The Muyassar keeps to the plain sense — a mark pointing to God's power, since He created him without a father. The sign is aimed at the eye that is willing to read what stands in front of it.",
            "bn": "সা'দী বাকি বিস্ময়টুকু যোগ করেন। তিনি লেখেন, আল্লাহ ঈসা (আঃ)-এর প্রতি অনুগ্রহ করেছেন আর তাঁকে ও তাঁর মাকে আল্লাহর বিস্ময়কর নিদর্শনসমূহের অন্তর্ভুক্ত করেছেন। মা তাঁকে গর্ভে ধরেছেন ও জন্ম দিয়েছেন পিতা ছাড়া, তিনি দোলনায় শিশু অবস্থায় কথা বলেছেন, আর আল্লাহ তাঁর হাত দিয়ে নানা নিদর্শন চালিয়েছেন। মুয়াসসার সাদামাটা অর্থে থামে: আল্লাহর শক্তির দিকে ইশারা করা এক চিহ্ন, কারণ তিনি তাঁকে পিতা ছাড়াই সৃষ্টি করেছেন। নিদর্শনটা তাক করা সেই চোখের দিকে, যে চোখ সামনে যা আছে তা পড়তে রাজি।"
          },
          {
            "en": "This is where care is owed. The Qur'an presents the birth as proof of God's unlimited power, not as a weapon in an argument against anyone, and the verse stays inside that frame, so the reader should stay there too. Isa (AS) and his blessed mother Maryam are honoured here, named with dignity, and the sign is held out to whoever will look at what God is able to do. To turn a verse of mercy into a taunt is to read straight past what it actually says.",
            "bn": "এখানেই সতর্কতা পাওনা। কুরআন এই জন্মকে তুলে ধরে আল্লাহর অসীম শক্তির প্রমাণ হিসেবে, কারও বিরুদ্ধে তর্কের অস্ত্র হিসেবে নয়। আয়াতটি সেই সীমার ভেতরে থাকে, তাই পাঠকেরও সেখানেই থাকা উচিত। ঈসা (আঃ) আর তাঁর বরকতময় মা মারইয়াম এখানে সম্মানিত, মর্যাদার সঙ্গে তাঁদের নাম নেওয়া হয়েছে, আর নিদর্শনটি বাড়িয়ে দেওয়া হয়েছে তার দিকে, যে আল্লাহ কী করতে পারেন তা দেখতে চায়। রহমতের এক আয়াতকে খোঁচা বানানো মানে আয়াত যা বলছে তা পাশ কাটিয়ে যাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Drawn to Higher Ground",
          "bn": "উঁচু জমিতে আশ্রয় দেওয়া"
        },
        "p": [
          {
            "en": "The second half turns from who they are to where they were kept: \"and We sheltered them on a rabwah.\" at-Tabari explains the verb first — awaynahuma means We drew them in and brought them to it, the way a man is said to take shelter in such a place. A rabwah, he adds, is a spot raised above the land around it; the Arabs called a man of standing among his people someone \"in a rabwah,\" meaning height and honour and number. The word carries elevation before it carries any map.",
            "bn": "দ্বিতীয় অংশ তাঁরা কে সেখান থেকে ঘুরে যায় তাঁদের কোথায় রাখা হয়েছিল সেদিকে: \"আর আমি তাঁদের আশ্রয় দিয়েছিলাম এক রাবওয়ায়।\" তাবারী আগে ক্রিয়াটি বুঝিয়ে দেন। আওয়াইনাহুমা মানে আমি তাঁদের টেনে নিলাম আর সেখানে পৌঁছে দিলাম, যেমন বলা হয় অমুক লোক অমুক জায়গায় আশ্রয় নিল। রাবওয়া হলো, তিনি বলেন, চারপাশের জমি থেকে উঁচু এক জায়গা। আরবরা নিজ জাতির ভেতরে মর্যাদাবান লোককে বলত সে \"রাবওয়ায় আছে\", অর্থাৎ উচ্চতা, সম্মান আর সংখ্যায়। শব্দটি মানচিত্রের আগে বহন করে উচ্চতা।"
          },
          {
            "en": "On the meaning the commentators agree. Ibn Kathir cites Ibn Abbas (RA), through ad-Dahhak, that a rabwah is a raised portion of land, the best ground for things to grow, and reports the same from Mujahid, Ikrimah, Sa'id bin Jubayr and Qatada. Mujahid calls it a level hill. al-Qurtubi gives the plain gloss he had settled in an earlier surah: the raised place of the earth. High, and green, and able to be lived on — that is the ground itself, before anyone argues over its name.",
            "bn": "অর্থের ব্যাপারে তাফসীরকারেরা একমত। ইবন কাসীর দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে আনেন যে রাবওয়া হলো জমির উঁচু এক অংশ, গাছপালা জন্মানোর সবচেয়ে ভালো মাটি, আর একই কথা বর্ণনা করেন মুজাহিদ, ইকরিমা, সাঈদ ইবন জুবাইর ও কাতাদা থেকে। মুজাহিদ একে বলেন সমতল এক টিলা। কুরতুবী আগের এক সূরায় ঠিক করে রাখা সাদামাটা অর্থটাই দেন: জমির উঁচু জায়গা। উঁচু, সবুজ আর বসবাসের যোগ্য, নাম নিয়ে তর্ক ওঠার আগে এটাই জমিটার আসল পরিচয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Was the Rabwah",
          "bn": "রাবওয়া ছিল কোথায়"
        },
        "p": [
          {
            "en": "Here the tafsirs genuinely part ways, and none of them should be flattened into the others. at-Tabari, al-Qurtubi, Ibn Kathir and al-Baghawi all gather the same candidates. Some name Ramla in Palestine: Abu Hurayra (RA) told people to hold to that Ramla, for it is the rabwah of which God spoke. Others name Damascus and its Ghuta, on the authority of Sa'id bin al-Musayyab, Abdullah bin Salam (RA) and al-Hasan; Ikrimah, from Ibn Abbas (RA), read it as the rivers of Damascus.",
            "bn": "এখানে তাফসীরগুলো সত্যিকারভাবে ভিন্ন পথে যায়, আর একটিকে আরেকটির সঙ্গে মিলিয়ে চ্যাপ্টা করে দেওয়া ঠিক নয়। তাবারী, কুরতুবী, ইবন কাসীর আর বাগাভী সবাই একই কয়েকটি সম্ভাবনা জড়ো করেন। কেউ নাম নেন ফিলিস্তিনের রামলা: আবু হুরাইরা (রাঃ) মানুষকে বলতেন সেই রামলা আঁকড়ে থাকতে, কারণ ওটাই আল্লাহর বলা রাবওয়া। কেউ নাম নেন দামেস্ক ও তার গুতা, সাঈদ ইবনুল মুসাইয়্যাব, আবদুল্লাহ ইবন সালাম (রাঃ) আর হাসানের সূত্রে। ইকরিমা ইবন আব্বাস (রাঃ) থেকে পড়েন দামেস্কের নদীগুলো।"
          },
          {
            "en": "A third group names Bayt al-Maqdis, Jerusalem, from Qatada and Ka'b — Ka'b saying it is the nearest land to the sky by eighteen miles. A fourth names Egypt, from Ibn Zayd, who reasoned that high grounds are found only there, since when the flood-water is released the villages sit on the rises and would otherwise drown. Ibn Kathir carries a like report from Wahb bin Munabbih but calls it very far-fetched. Four places, four sets of authorities, and this module leaves the question exactly where the commentators left it: open.",
            "bn": "তৃতীয় দল নাম নেয় বাইতুল মাকদিস, জেরুজালেমের, কাতাদা আর কাব থেকে। কাব বলেন, এটি আকাশের সবচেয়ে কাছের জমি, আঠারো মাইল ব্যবধানে। চতুর্থ দল নাম নেয় মিশরের, ইবন যায়দ থেকে, যিনি যুক্তি দেন উঁচু জমি কেবল সেখানেই মেলে, কারণ বন্যার পানি ছাড়া পেলে গ্রামগুলো উঁচু ঢিবির ওপর দাঁড়িয়ে থাকে, নইলে ডুবে যেত। ইবন কাসীর ওয়াহব ইবন মুনাব্বিহ থেকে এমন এক বর্ণনা আনেন, তবে সেটিকে বলেন খুবই দূরের কথা। চারটি জায়গা, চার দল বর্ণনাকারী, আর এই মডিউল প্রশ্নটি ঠিক সেখানেই রেখে দেয় যেখানে তাফসীরকারেরা রেখেছেন: খোলা।"
          },
          {
            "en": "The one narration that ties a place to this verse is weak. Both at-Tabari and Ibn Kathir carry a report, through Murrah al-Bahzi, that the Prophet ﷺ told a man \"you will die at the rabwah,\" and the man died at Ramla. But at-Tabari's own chain has its narrator saying he does not know quite what Murrah related, and Ibn Kathir calls the hadith extremely strange. No sound narration fixes the location, so the article names the readings and claims none of them as the Prophet's own word.",
            "bn": "যে একটিমাত্র বর্ণনা এ আয়াতের সঙ্গে কোনো জায়গা জোড়ে, সেটি দুর্বল। তাবারী আর ইবন কাসীর দুজনেই মুররা আল-বাহযীর সূত্রে এক বর্ণনা আনেন যে নবী ﷺ এক ব্যক্তিকে বলেছিলেন \"তুমি রাবওয়ায় মারা যাবে\", আর লোকটি রামলায় মারা যায়। কিন্তু তাবারীর নিজের সনদেই বর্ণনাকারী বলছেন, মুররা ঠিক কী বলেছিলেন তা তিনি জানেন না, আর ইবন কাসীর হাদীসটিকে বলেন অত্যন্ত বিরল। কোনো সহীহ বর্ণনা জায়গাটি নিশ্চিত করে না, তাই লেখাটি পাঠগুলোর নাম নেয়, তবে কোনোটিকেই নবীর নিজের কথা বলে দাবি করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Level Ground to Settle",
          "bn": "থিতু হওয়ার সমতল জমি"
        },
        "p": [
          {
            "en": "The verse describes the rabwah as dhat qarar — having a settled place. Ibn Kathir reports Ibn Abbas (RA) glossing qarar as fertile ground, and Mujahid and Sa'id bin Jubayr reading it as level, ground on which one can settle down. al-Baghawi widens it: level, spread out and broad, land on which its dwellers can stay put. The core idea across them is stability. Not a bare crag a foot cannot rest on, but a place where an ordinary life can actually be built and kept.",
            "bn": "আয়াত রাবওয়াকে বর্ণনা করে যাতু কারার বলে — থিতু হওয়ার মতো এক জায়গাওয়ালা। ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে আনেন যে কারার মানে উর্বর জমি, আর মুজাহিদ ও সাঈদ ইবন জুবাইর একে পড়েন সমতল, যে জমিতে মানুষ থিতু হতে পারে। বাগাভী একে আরও চওড়া করেন: সমতল, বিস্তৃত আর প্রশস্ত, যে জমিতে তার বাসিন্দারা টিকে থাকতে পারে। সবার কথার ভেতরের মূল ভাবটা স্থিরতা। পা রাখার অযোগ্য খালি চূড়া নয়, বরং এমন জায়গা যেখানে সত্যিই একটা সাধারণ জীবন গড়ে তোলা আর ধরে রাখা যায়।"
          },
          {
            "en": "One reading stands a little apart. al-Qurtubi and at-Tabari both mention Qatada's gloss that qarar means the land had fruits, and that people settle where there is fruit to hold them. at-Tabari notes he cannot see the ground for reading the word that way unless Qatada meant precisely this. The disagreement is small but real, and it is worth seeing that the plain sense — a level, settled place fit to live on — is what most of the authorities are carrying here.",
            "bn": "একটি পাঠ একটু আলাদা দাঁড়ায়। কুরতুবী আর তাবারী দুজনেই কাতাদার একটি ব্যাখ্যা উল্লেখ করেন যে কারার মানে জমিতে ফলমূল ছিল, আর মানুষ সেখানেই থিতু হয় যেখানে ফল তাদের ধরে রাখে। তাবারী বলেন, কাতাদা ঠিক এটাই বোঝাতে না চাইলে শব্দটিকে ওভাবে পড়ার কোনো ভিত্তি তিনি দেখেন না। মতভেদটা ছোট হলেও আসল, আর এটা দেখা দরকার যে সাদামাটা অর্থটাই, অর্থাৎ বসবাসের যোগ্য সমতল থিতু জায়গা, এখানে বেশির ভাগ বর্ণনাকারী বহন করছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Water Seen by the Eye",
          "bn": "চোখে দেখা বয়ে চলা পানি"
        },
        "p": [
          {
            "en": "The last word is ma'in — flowing water. Ibn Abbas (RA), Mujahid and Qatada all read it as running water, visible on the surface of the ground. al-Baghawi defines it as water that flows out in the open, the kind the eyes can actually see. al-Qurtubi discusses the grammar — whether the mim is a root letter or added on — and lands on the same sense: water running from the springs, plain to the sight. Rest above and water below: the two together are what make the place fit to live.",
            "bn": "শেষ শব্দটি মাঈন — বয়ে চলা পানি। ইবন আব্বাস (রাঃ), মুজাহিদ আর কাতাদা সবাই একে পড়েন বহমান পানি, জমির উপরিভাগে দেখা যায় এমন। বাগাভী একে সংজ্ঞায়িত করেন খোলা জায়গায় বয়ে যাওয়া পানি হিসেবে, যা চোখে সত্যিই দেখা যায়। কুরতুবী ব্যাকরণ নিয়ে আলোচনা করেন যে মীম মূল অক্ষর নাকি বাড়তি, আর সেই একই অর্থে এসে থামেন: ঝরনা থেকে বয়ে চলা পানি, দৃষ্টির কাছে স্পষ্ট। উপরে বিশ্রাম, নিচে পানি। এই দুটি মিলেই জায়গাটাকে বসবাসের যোগ্য করে তোলে।"
          },
          {
            "en": "Ibn Kathir and as-Sa'di reach past this verse to another. The ma'in, they say, is the stream of which God told Maryam, \"your Lord has placed a stream beneath you\" (19:24), the water that flowed under her as she gave birth. as-Sa'di ties it to the palm she was told to shake for fresh, ripe dates (19:25); this, he judges, was the very moment of the birth. So the Qur'an explains its own words: the flowing water of the rabwah is the stream of Maryam's own account.",
            "bn": "ইবন কাসীর আর সা'দী এই আয়াত ছাড়িয়ে আরেক আয়াতের কাছে পৌঁছান। মাঈন, তাঁরা বলেন, সেই ঝরনা যার কথা আল্লাহ মারইয়ামকে বলেছিলেন, \"তোমার রব তোমার নিচে এক ঝরনা রেখেছেন\" (১৯:২৪), যে পানি তাঁর জন্মদানের সময় তাঁর নিচে বয়ে যাচ্ছিল। সা'দী একে জুড়ে দেন সেই খেজুরগাছের সঙ্গে যা তাঁকে নাড়াতে বলা হয়েছিল টাটকা পাকা খেজুরের জন্য (১৯:২৫)। এটিই, তাঁর বিচারে, ছিল জন্মেরই মুহূর্ত। এভাবে কুরআন নিজের কথা নিজেই খোলে: রাবওয়ার বয়ে চলা পানি মারইয়ামের নিজের বর্ণনার সেই ঝরনা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shelter Beside the Sign",
          "bn": "নিদর্শনের পাশে রাখা আশ্রয়"
        },
        "p": [
          {
            "en": "Now put the two halves back together. God names Isa (AS) and his mother a single sign, a hard and public thing to carry, and in the same breath He tells where He sheltered them: high ground that is level, settled and watered. The sign did not arrive without a refuge. The One who set the two of them apart also set them down somewhere they could rest their feet and drink. The remarkable and the liveable were handed over in one verse, not weighed against each other.",
            "bn": "এবার দুই অর্ধেক আবার জোড়া দিন। আল্লাহ ঈসা (আঃ) আর তাঁর মাকে করলেন একটিমাত্র নিদর্শন, বয়ে নেওয়ার মতো এক কঠিন আর সবার চোখের সামনের জিনিস। আর একই নিঃশ্বাসে তিনি বলে দিলেন কোথায় তাঁদের আশ্রয় দিলেন: উঁচু জমি, যা সমতল, থিতু আর পানিওয়ালা। নিদর্শন এল আশ্রয় ছাড়া নয়। যিনি দুজনকে আলাদা করে তুললেন, তিনিই তাঁদের এমন জায়গায় নামিয়ে দিলেন যেখানে পা জুড়ানো যায় আর পানি পান করা যায়। বিস্ময়কর আর বসবাসযোগ্য, দুটোই এক আয়াতে হাতে এল, একটাকে আরেকটার বিপরীতে মাপা হলো না।"
          },
          {
            "en": "That is the lesson the verse hands a reader who is not a prophet. When God asks something rare of you, look for the level ground and the water He places beside it, because they are named in the same sentence as the sign. And honour the ones He has joined to your story: Maryam is not the frame around her son, she is half of the sign itself. The wonder God gives and the settled place He gives are meant to be received together.",
            "bn": "এটাই সেই শিক্ষা যা আয়াত তুলে দেয় নবী নন এমন এক পাঠকের হাতে। আল্লাহ যখন আপনার কাছে বিরল কিছু চান, তার পাশে তিনি যে সমতল জমি আর পানি রাখেন তা খুঁজে নিন, কারণ নিদর্শনের সঙ্গে একই বাক্যে তাদের নাম নেওয়া হয়েছে। আর আল্লাহ যাঁদের আপনার গল্পের সঙ্গে জুড়ে দিয়েছেন তাঁদের সম্মান করুন: মারইয়াম তাঁর ছেলের চারপাশের কাঠামো নন, তিনি নিজেই নিদর্শনের অর্ধেক। আল্লাহর দেওয়া বিস্ময় আর তাঁর দেওয়া থিতু জায়গা একসঙ্গেই গ্রহণ করার কথা।"
          }
        ]
      }
    ]
  },
  "23:55": {
    "sections": [
      {
        "h": {
          "en": "A Question With a Hidden Answer",
          "bn": "প্রশ্নের ভেতরে লুকানো জবাব"
        },
        "p": [
          {
            "en": "Ayahsabuna annama numidduhum bihi min malin wa-banin: do they think that what We extend to them of wealth and children. The verse opens as a question and stops before the question is complete. At-Tabari reads the ma of annama as the relative pronoun alladhi, that which; al-Qurtubi reads it the same way and paraphrases the whole as, do they suppose, O Muhammad, that what We give them in this world of wealth and children is a reward for them? The sentence is deliberately left hanging. You are meant to feel the assumption inside it before it is answered.",
            "bn": "আয়াহসাবূনা আন্নামা নুমিদ্দুহুম বিহি মিন মালিন ওয়া-বানীন: তারা কি ভেবে নিয়েছে, যে ধন আর সন্তান আমি তাদের দিয়ে যাচ্ছি। আয়াতটি প্রশ্ন দিয়ে শুরু হয়, আর প্রশ্ন শেষ হওয়ার আগেই থেমে যায়। তাবারী আন্নামা-র মধ্যকার মা-কে পড়েন সম্বন্ধবাচক আল্লাযী অর্থে, অর্থাৎ যা কিছু। কুরতুবীও একইভাবে পড়েন এবং গোটা কথাটির ব্যাখ্যা দেন এভাবে: হে মুহাম্মদ, তারা কি ভাবছে দুনিয়ায় আমি তাদের যে ধন আর সন্তান দিচ্ছি তা তাদের জন্য পুরস্কার? বাক্যটি ইচ্ছা করেই ঝুলিয়ে রাখা হয়েছে। জবাব আসার আগে ভেতরের ধারণাটা যেন আপনি টের পান।"
          },
          {
            "en": "The answer arrives in the next verse and cannot be separated from this one. Nusari'u lahum fi al-khayrat, bal la yash'urun: is it that We are hastening good things to them? Rather, they do not perceive. Read the pair together and the shape is complete: a smug thought is quoted, then flatly denied. Al-Muyassar, which the API groups across both verses, renders it plainly, do these disbelievers imagine that the wealth and children We extend to them in the world are a good hastened to them that they deserve? The claim of the questioners is that prosperity is a receipt. The verse says it is not.",
            "bn": "জবাব আসে পরের আয়াতে, আর তাকে এই আয়াত থেকে আলাদা করা যায় না। নুসারিউ লাহুম ফিল-খাইরাত, বাল লা ইয়াশউরূন: আমি কি তাদের কল্যাণ ত্বরান্বিত করছি? বরং তারা টেরও পায় না। দুটি আয়াত একসঙ্গে পড়লে ছবিটা পূর্ণ হয়। একটা আত্মতৃপ্ত ভাবনা তুলে ধরা হয়, তারপর তা সরাসরি নাকচ করা হয়। মুয়াসসার, যাকে এই দুই আয়াতে একত্রে ধরা হয়েছে, সোজা কথায় বলে: এই কাফিররা কি ভাবছে দুনিয়ায় আমি তাদের যে ধন আর সন্তান দিচ্ছি তা তাদের প্রাপ্য এক ত্বরান্বিত কল্যাণ? প্রশ্নকারীদের দাবি হলো, প্রাচুর্যই যেন এক রসিদ। আয়াত বলছে, তা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Verse Addresses",
          "bn": "কাদের উদ্দেশে এই প্রশ্ন"
        },
        "p": [
          {
            "en": "The pronoun they has an antecedent close by. At-Tabari links it back to the people described just above, the factions who tore their religion into pieces, each party pleased with what it held. He says the question is aimed at those parties: do these people, who split their religion into books, imagine that what We give them in this world of wealth and children is Us racing to bring them good? The wealth is real and present; the reading of it is what the verse targets. It does not describe the poor who envy, but the comfortable who conclude.",
            "bn": "তারা সর্বনামটির একটি পূর্বসূত্র কাছেই আছে। তাবারী একে ফিরিয়ে নেন ঠিক আগের আয়াতে বর্ণিত লোকদের দিকে, যারা নিজেদের দ্বীনকে টুকরো টুকরো করে ফেলেছে, প্রতিটি দল নিজের কাছে যা আছে তা নিয়েই খুশি। তিনি বলেন, প্রশ্নটি সেই দলগুলোর দিকেই ছোড়া: দ্বীনকে বহু কিতাবে ভাগ করা এই লোকেরা কি ভাবছে, দুনিয়ায় আমি তাদের যে ধন আর সন্তান দিচ্ছি তা দিয়ে আমি তাদের কল্যাণ পৌঁছাতে ছুটছি? সম্পদটা বাস্তব ও সামনেই। আয়াত নিশানা করে তার পাঠটাকে। এখানে হিংসুক গরিবের কথা নেই, বরং স্বাচ্ছন্দ্যে থাকা মানুষের কথা, যে এ থেকে সিদ্ধান্ত টেনে বসে।"
          },
          {
            "en": "Ibn Kathir names the inner state directly. He calls them al-maghrurun, the deceived, and frames the question as, do these deceived ones think that what We give them of wealth and children is because of their honour in Our sight and their standing with Us? The word he chooses matters. It is not that they are wealthy; it is that wealth has fooled them. Al-Qurtubi adds that the address in the verse is turned toward the Prophet, so that the correction is spoken over the heads of the deceived to those who will actually hear it.",
            "bn": "ইবন কাসীর ভেতরের অবস্থাটা সরাসরি নাম ধরে বলেন। তিনি তাদের বলেন আল-মাগরূরূন, অর্থাৎ ধোঁকা-খাওয়া লোক, আর প্রশ্নটাকে সাজান এভাবে: এই ধোঁকা-খাওয়া লোকেরা কি ভাবছে, আমি তাদের যে ধন আর সন্তান দিচ্ছি তা কি আমার কাছে তাদের সম্মান আর মর্যাদার কারণে? তাঁর বেছে নেওয়া শব্দটাই আসল কথা। সমস্যা এই নয় যে তারা সম্পদশালী, সমস্যা এই যে সম্পদ তাদের ধোঁকা দিয়েছে। কুরতুবী যোগ করেন, আয়াতের সম্বোধন ফেরানো হয়েছে নবী ﷺ-এর দিকে, যাতে সংশোধনের কথাটা ধোঁকা-খাওয়া লোকদের মাথার উপর দিয়ে তাদের কাছে পৌঁছায়, যারা আসলে তা শুনবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Slow Drawing-On",
          "bn": "ধীরে ধীরে টেনে নেওয়া"
        },
        "p": [
          {
            "en": "The correction the commentators reach for is one word: istidraj. Ibn Kathir writes that the affair is not as the deceived claim; rather We do this to them as istidraj, and as inzar and imla', that is, as a drawing-on stage by stage, a granting of respite, and a lengthening of the rope. At-Tabari says the same in his gloss of they do not perceive: they do not know that Our extending to them of these things is only imla' and istidraj, reprieve and a drawing-on toward reckoning. The gift is not withdrawn; its meaning is corrected.",
            "bn": "তাফসীরকারেরা যে সংশোধনের দিকে হাত বাড়ান, তা এক শব্দে ধরা: ইসতিদরাজ। ইবন কাসীর লেখেন, ব্যাপারটা ধোঁকা-খাওয়া লোকদের দাবির মতো নয়। বরং আমি তাদের সঙ্গে এটা করি ইসতিদরাজ হিসেবে, ইনযার আর ইমলা হিসেবে, অর্থাৎ ধাপে ধাপে টেনে নেওয়া, অবকাশ দেওয়া, আর দড়ি লম্বা করে দেওয়া। তাবারীও বাল লা ইয়াশউরূন-এর ব্যাখ্যায় একই কথা বলেন: তারা জানে না যে এসব দিয়ে আমার তাদের সাহায্য করা কেবল ইমলা আর ইসতিদরাজ, অর্থাৎ অবকাশ আর হিসাবের দিকে ধীরে টেনে নেওয়া। দান তুলে নেওয়া হয় না। তার মানেটা শুধরে দেওয়া হয়।"
          },
          {
            "en": "Al-Qurtubi puts it as a flat denial of the reward-reading: what they receive is not a thawab, a reward, but istidraj and imla'. Al-Muyassar sharpens the intent still further. He says We only hasten the good to them as a fitna, a trial, and as istidraj, but they do not sense it. Set the readings side by side and no scholar treats the wealth as a sign of favour. Trial, respite, a drawing-on: the same event that the questioners read as a green light, the commentators read as a test whose result is not yet in.",
            "bn": "কুরতুবী পুরস্কার-পাঠটাকে সাফ নাকচ করেন: তারা যা পাচ্ছে তা সওয়াব বা পুরস্কার নয়, বরং ইসতিদরাজ আর ইমলা। মুয়াসসার উদ্দেশ্যটা আরও ধারালো করে বলেন। তিনি বলেন, আমি তাদের কল্যাণ ত্বরান্বিত করি কেবল ফিতনা, অর্থাৎ পরীক্ষা হিসেবে, আর ইসতিদরাজ হিসেবে, কিন্তু তারা তা টের পায় না। পাঠগুলো পাশাপাশি রাখুন, একজন আলিমও সম্পদকে অনুগ্রহের চিহ্ন ধরেননি। পরীক্ষা, অবকাশ, ধীরে টেনে নেওয়া। যে ঘটনাকে প্রশ্নকারীরা সবুজ সংকেত ভাবে, তাফসীরকারেরা তাকে পড়েন এমন এক পরীক্ষা বলে, যার ফল এখনো হাতে আসেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Wealth Is Not a Verdict",
          "bn": "সম্পদ কোনো রায় নয়"
        },
        "p": [
          {
            "en": "As-Sa'di states the false inference in full so it can be dismantled. Do they think, he asks, that Our increasing them in wealth and children is a proof that they are among the people of goodness and happiness, and that theirs is the good of this world and the next? This, he says, is only handed to them in advance; the matter is not as they imagine. The error is logical before it is moral. It reads a gift as a grade, and treats the size of a person's estate as a message about the state of his soul.",
            "bn": "সাদী ভুল অনুমানটা পুরোপুরি খুলে বলেন, যাতে তা ভেঙে ফেলা যায়। তিনি জিজ্ঞেস করেন, তারা কি ভাবছে, ধন আর সন্তানে তাদের বাড়িয়ে দেওয়াটা এই প্রমাণ যে তারা কল্যাণ আর সৌভাগ্যের মানুষ, আর দুনিয়া-আখিরাত দুটোরই ভালো তাদের জন্য? তিনি বলেন, এটা কেবল আগাম হাতে দিয়ে রাখা হয়েছে, ব্যাপার তারা যেমন ভাবছে তেমন নয়। ভুলটা নৈতিক হওয়ার আগে যুক্তির ভুল। এতে দানকে পড়া হয় নম্বর বলে, আর কারও সম্পত্তির আকারকে ধরা হয় তার অন্তরের অবস্থার খবর বলে।"
          },
          {
            "en": "Ibn Kathir refuses the same reading and gives its opposite. The wealth is not for their honour or their nearness to Us, he says; theirs is the boast the Qur'an records elsewhere, we are greater in wealth and children, and we will not be punished. He then quotes Qatada, who draws the practical rule: God has schemed against these people through their wealth and children; O son of Adam, do not judge people by their wealth and children, but judge them by faith and righteous deeds. The measure the verse tears down is replaced with a sounder one.",
            "bn": "ইবন কাসীর একই পাঠ প্রত্যাখ্যান করেন আর তার উল্টোটা তুলে ধরেন। সম্পদ তাদের সম্মান বা আমার নৈকট্যের জন্য নয়, তিনি বলেন। বরং কুরআন অন্যত্র তাদের যে দম্ভ লিপিবদ্ধ করেছে সেটাই তাদের কথা: আমরা ধনে-সন্তানে বড়, আর আমাদের শাস্তি হবে না। এরপর তিনি কাতাদার কথা উদ্ধৃত করেন, যিনি ব্যবহারিক নিয়মটা টানেন: আল্লাহ এই লোকদের সঙ্গে তাদের ধন আর সন্তানের ভেতর দিয়েই কৌশল করেছেন। হে আদম-সন্তান, মানুষকে তার ধন আর সন্তান দিয়ে বিচার কোরো না, বিচার কোরো ঈমান আর সৎ আমল দিয়ে। আয়াত যে মাপকাঠি ভেঙে দেয়, তার জায়গায় বসে আরও খাঁটি এক মাপ।"
          },
          {
            "en": "It is worth being plain here. The verse condemns a false belief about prosperity, not prosperity itself, and not the people who hold wealth. It describes what the deceived imagine and corrects it; it licenses nothing against any living person or community who happens to be rich, comfortable or blessed with children. Wealth in a believing hand can be, as Ibn Kathir's cross-verses will show, exactly what brings a servant near. The target is never the gift. It is only the heart that reads the gift as a ruling already handed down in its favour.",
            "bn": "এখানে সোজাসুজি বলা দরকার। আয়াত প্রাচুর্য সম্পর্কে একটা ভুল বিশ্বাসের নিন্দা করে, প্রাচুর্যের নয়, আর যারা সম্পদ রাখে তাদেরও নয়। এটি বর্ণনা করে ধোঁকা-খাওয়া লোকেরা যা ভাবে, তারপর তা শুধরে দেয়। ধনী, স্বাচ্ছন্দ্যে থাকা বা সন্তানে ভরা কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। মুমিনের হাতে সম্পদ, ইবন কাসীরের টানা আয়াতগুলো যেমন দেখাবে, ঠিক সেটাই হতে পারে যা বান্দাকে কাছে আনে। নিশানা কখনো দান নয়। নিশানা কেবল সেই মন, যে দানকে পড়ে তার পক্ষে আগেই দেওয়া এক রায় বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Qur'an Sends Us",
          "bn": "কুরআন যেখানে নিয়ে যায়"
        },
        "p": [
          {
            "en": "Ibn Kathir does not argue the point in the abstract; he lets the Qur'an interpret itself and gathers a string of verses that say the same thing. He begins with the boast in 34:35, we are greater in wealth and children, and we will not be punished, the exact confidence this verse is answering. He then cites 9:55, so let not their wealth or their children impress you; Allah only intends to punish them through these in the life of this world. Read together, the two verses turn admiration into caution and drain the envy out of the scene.",
            "bn": "ইবন কাসীর কথাটা বায়বীয়ভাবে তর্ক করেন না। তিনি কুরআনকে দিয়েই কুরআনের ব্যাখ্যা করান, আর একই কথা বলা কয়েকটি আয়াত একসঙ্গে গাঁথেন। শুরু করেন ৩৪:৩৫ আয়াতের দম্ভ দিয়ে: আমরা ধনে-সন্তানে বড়, আর আমাদের শাস্তি হবে না, ঠিক এই আত্মবিশ্বাসেরই জবাব দিচ্ছে এ আয়াত। এরপর তিনি টানেন ৯:৫৫: তাদের ধন আর সন্তান যেন তোমাকে মুগ্ধ না করে, আল্লাহ তো এসব দিয়ে দুনিয়ার জীবনেই তাদের শাস্তি দিতে চান। একসঙ্গে পড়লে দুটি আয়াত মুগ্ধতাকে সতর্কতায় বদলে দেয়, আর দৃশ্য থেকে হিংসাটুকু নিংড়ে বের করে দেয়।"
          },
          {
            "en": "The chain continues, and each link names the mechanism. Ibn Kathir quotes 3:178, We only grant them respite so that they may increase in sin, and then the sharpest, 68:44 and 68:45, We shall draw them on gradually from where they do not know, and I will grant them respite; My plan is firm. He points at 74:11 through 74:16, the man created alone and given stretched-out wealth and sons as witnesses, who still hopes for more. He closes with 34:37, it is not your wealth or children that bring you near to Us, except whoever believes and acts well. Reprieve and nearness are told apart, verse by verse.",
            "bn": "শিকল এগোতে থাকে, আর প্রতিটি কড়ি কৌশলটার নাম সোজাসুজি বলে। ইবন কাসীর উদ্ধৃত করেন ৩:১৭৮: আমি তো তাদের অবকাশ দিই কেবল এ জন্য যেন তারা গুনাহে বাড়ে। তারপর সবচেয়ে ধারালোটি, ৬৮:৪৪ ও ৬৮:৪৫: আমি তাদের ধীরে ধীরে এমন দিক থেকে টেনে নেব যা তারা জানে না, আর আমি তাদের অবকাশ দেব, নিশ্চয় আমার কৌশল মজবুত। তিনি ইশারা করেন ৭৪:১১ থেকে ৭৪:১৬ আয়াতের দিকেও, সেই লোক যাকে একা সৃষ্টি করে বিছিয়ে দেওয়া সম্পদ আর সাক্ষী-সন্তান দেওয়া হলো, তবু সে আরও চায়। শেষ করেন ৩৪:৩৭ দিয়ে: তোমাদের ধন আর সন্তান তোমাদের আমার কাছে আনে না, কেবল সে ছাড়া যে ঈমান আনে আর সৎ কাজ করে। অবকাশ আর নৈকট্য, আয়াতে আয়াতে দুটোকে আলাদা করে চেনানো হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Reprieve Ends",
          "bn": "অবকাশ যখন ফুরায়"
        },
        "p": [
          {
            "en": "As-Sa'di follows the reprieve to its edge. Explaining they do not perceive, he says they fail to grasp that We grant them respite and delay and heap blessings on them so that they increase in sin, so that their punishment in the Hereafter is made complete, and so that they grow proud of what they were given. Then he lets the next stroke fall in the Qur'an's own words: until, when they rejoiced in what they were given, We seized them suddenly. The pleasure and the seizure are drawn as a single motion, the second hidden inside the first.",
            "bn": "সাদী অবকাশটাকে তার কিনার পর্যন্ত অনুসরণ করেন। বাল লা ইয়াশউরূন-এর ব্যাখ্যায় তিনি বলেন, তারা ধরতে পারে না যে আমি তাদের অবকাশ দিই, ঢিল দিই আর নিয়ামত স্তূপ করে দিই, যাতে তারা গুনাহে বাড়ে, যাতে আখিরাতে তাদের শাস্তি পূর্ণ হয়, আর যাতে তারা যা পেয়েছে তা নিয়ে গর্বে ফুলে ওঠে। এরপর পরের আঘাতটা তিনি নামতে দেন কুরআনের নিজের কথায়: শেষে যখন তারা যা পেয়েছিল তাতে উল্লসিত হলো, তখন আমি তাদের হঠাৎ পাকড়াও করলাম। আনন্দ আর পাকড়াও একটাই গতিতে আঁকা, দ্বিতীয়টা প্রথমটার ভেতরে লুকানো।"
          },
          {
            "en": "This is why the wealth felt like good news to its holders right up to the end. Nothing in the outward run of their lives warned them, because istidraj works precisely by looking like favour. The comfort was real, the sons were real, the years of ease were real; only the meaning was withheld. As-Sa'di's citation lands the point the whole passage has been building toward: a rope allowed to run out is still a rope, and the length of it is no kindness if it ends at a cliff the runner cannot see.",
            "bn": "এ কারণেই সম্পদটাকে তার মালিকদের কাছে একেবারে শেষ পর্যন্ত সুসংবাদ বলেই মনে হয়েছিল। তাদের জীবনের বাইরের চলায় কিছুই সতর্ক করেনি, কারণ ইসতিদরাজ কাজই করে অনুগ্রহের মতো দেখতে হয়ে। স্বাচ্ছন্দ্য সত্যি ছিল, সন্তানরা সত্যি ছিল, স্বস্তির বছরগুলো সত্যি ছিল, শুধু মানেটাই আটকে রাখা হয়েছিল। সাদীর উদ্ধৃতি গোটা অনুচ্ছেদ যেদিকে গড়ে উঠছিল সেই কথাটাই নামিয়ে আনে: ছেড়ে দেওয়া দড়ি তবু দড়িই, আর তার দৈর্ঘ্য কোনো দয়া নয়, যদি তা এমন এক খাদের মুখে গিয়ে শেষ হয় যা দৌড়ানো লোকটি দেখতে পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Given the World, Not Faith",
          "bn": "দুনিয়া দেওয়া হয়, দ্বীন নয়"
        },
        "p": [
          {
            "en": "Under this verse Ibn Kathir cites a narration that turns the whole idea into a single sentence a person can carry. He reports that Imam Ahmad recorded from Ibn Mas'ud (RA) that the Prophet said: Allah gives the things of this world to those whom He loves and those whom He does not love, but He gives religious commitment only to those whom He loves; so whoever Allah gives religious commitment, He has loved him. The wealth, in other words, is handed to the loved and the unloved alike. Only the din is the sign, because only the din is given selectively.",
            "bn": "এই আয়াতের নিচে ইবন কাসীর এমন এক বর্ণনা টানেন, যা গোটা ভাবনাটাকে এক বাক্যে বেঁধে দেয়, যা একজন মানুষ সঙ্গে বয়ে নিতে পারে। তিনি জানান, ইমাম আহমাদ ইবন মাসউদ (রাঃ) থেকে বর্ণনা করেছেন যে নবী ﷺ বলেছেন: আল্লাহ দুনিয়ার জিনিস দেন তাকেও যাকে তিনি ভালোবাসেন, তাকেও যাকে ভালোবাসেন না। কিন্তু দ্বীন তিনি কেবল তাকেই দেন যাকে ভালোবাসেন। তাই আল্লাহ যাকে দ্বীন দিলেন, তাকে তিনি ভালোবাসলেন। অর্থাৎ সম্পদ ভালোবাসার আর না-ভালোবাসার লোককে সমানভাবেই দেওয়া হয়। চিহ্ন কেবল দ্বীন, কারণ দ্বীনই বেছে বেছে দেওয়া হয়।"
          },
          {
            "en": "The narration should be reported as it stands. It comes through the Musnad of Imam Ahmad, and Ibn Kathir cites it here without attaching a grading of his own, so none is claimed for it beyond his citation. Its role is not to add a ruling but to press the verse into the chest. If money reaches the loved and the unloved without distinction, then a full account can never by itself tell a servant where he stands. The single thing that is not handed out indiscriminately, the leaning of the heart toward faith and obedience, is the only thing worth reading as a sign.",
            "bn": "বর্ণনাটি যেভাবে আছে সেভাবেই তুলে ধরা উচিত। এটি এসেছে ইমাম আহমাদের মুসনাদের মধ্য দিয়ে, আর ইবন কাসীর এখানে নিজের কোনো মান না বসিয়েই একে উদ্ধৃত করেন, তাই তাঁর উদ্ধৃতির বাইরে এর জন্য কোনো মান দাবি করা হচ্ছে না। এর কাজ কোনো বিধান যোগ করা নয়, বরং আয়াতটাকে বুকের ভেতর চেপে বসানো। টাকা যদি ভালোবাসার আর না-ভালোবাসার লোকের কাছে বিনা বাছবিচারে পৌঁছায়, তবে ভরা হিসাব নিজে থেকে কখনোই বান্দাকে বলতে পারে না সে কোথায় দাঁড়িয়ে। যেটা বিলিয়ে দেওয়া হয় না বেছে বেছে ছাড়া, অর্থাৎ ঈমান আর আনুগত্যের দিকে অন্তরের ঝোঁক, চিহ্ন বলে পড়ার যোগ্য কেবল সেটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "They Do Not Perceive",
          "bn": "তারা টেরও পায় না"
        },
        "p": [
          {
            "en": "The pair ends not on their wealth but on their blindness: bal la yash'urun, rather, they do not perceive. Al-Muyassar renders the sense as they do not sense it, and at-Tabari as they do not know that the extending is only reprieve and a drawing-on. The failure is not in their eyes or their ledgers, which see the money clearly enough. It is a failure to read the money. They have every figure and miss the only meaning, mistaking the length of the rope for the safety of the road.",
            "bn": "জোড়া আয়াতটি শেষ হয় তাদের সম্পদে নয়, তাদের অন্ধত্বে: বাল লা ইয়াশউরূন, বরং তারা টেরও পায় না। মুয়াসসার অর্থটা দেন এভাবে, তারা তা অনুভব করে না। আর তাবারী দেন, তারা জানে না যে এই দিয়ে যাওয়া কেবল অবকাশ আর ধীরে টেনে নেওয়া। ঘাটতিটা তাদের চোখে বা খাতায় নয়, ওগুলো টাকা তো ঠিকই দেখে। ঘাটতিটা টাকাকে পড়তে না পারায়। তাদের হাতে সব অঙ্ক আছে, অথচ একমাত্র মানেটাই ফসকে যায়। তারা দড়ির দৈর্ঘ্যকে ভেবে বসে রাস্তার নিরাপত্তা।"
          },
          {
            "en": "This is the quiet danger in an easy life, and it does not belong only to the disbelievers the verse first addressed. Any believer can slip into the same arithmetic: the promotion arrived, the family is well, the accounts are healthy, so surely all is right with God. The verse does not tell such a person to distrust every blessing. It tells him to stop reading blessings as verdicts. Gratitude is the right response to a gift; certainty about one's own standing is not, because the same gift reaches the loved and the unloved alike.",
            "bn": "স্বাচ্ছন্দ্যের জীবনে এটাই চুপচাপ বিপদ, আর তা কেবল আয়াতের প্রথমে সম্বোধিত কাফিরদের নয়। যেকোনো মুমিনও একই হিসাবে পিছলে যেতে পারে: পদোন্নতি এসেছে, পরিবার ভালো আছে, হিসাব সুস্থ, তাহলে আল্লাহর সঙ্গে নিশ্চয়ই সব ঠিক আছে। আয়াত এমন লোককে প্রতিটি নিয়ামত সন্দেহ করতে বলে না। বলে নিয়ামতকে রায় হিসেবে পড়া বন্ধ করতে। দানের সঠিক জবাব কৃতজ্ঞতা, নিজের অবস্থান নিয়ে নিশ্চয়তা নয়, কারণ একই দান ভালোবাসার আর না-ভালোবাসার লোকের কাছে সমানভাবেই পৌঁছায়।"
          },
          {
            "en": "So the two verses leave a habit rather than a mood. When something good arrives, the deceived heart reads a receipt and rests; the awake heart takes the gift, gives thanks, and keeps asking what it is being trusted with and how it will answer. As-Sa'di's warning and Ibn Kathir's string of verses point the same way: the settling of the account is never the balance in the hand but the faith and the deeds behind it. Read that way, ease stops being proof of anything and becomes what it always was, a trust still open and a test not yet closed.",
            "bn": "তাই দুটি আয়াত রেখে যায় একটা মেজাজ নয়, একটা অভ্যাস। ভালো কিছু এলে ধোঁকা-খাওয়া অন্তর রসিদ পড়ে নিয়ে বিশ্রাম নেয়। জেগে থাকা অন্তর দানটা নেয়, শোকর করে, আর জিজ্ঞেস করতে থাকে তাকে কী আমানত দেওয়া হচ্ছে আর সে তার কী জবাব দেবে। সাদীর সতর্কতা আর ইবন কাসীরের গাঁথা আয়াতগুলো একই দিকে ইশারা করে: হিসাব মেটে কখনো হাতের জমায় নয়, বরং তার পেছনের ঈমান আর আমলে। এভাবে পড়লে স্বাচ্ছন্দ্য আর কিছুর প্রমাণ থাকে না, বরং তা যা বরাবরই ছিল তাই হয়ে ওঠে, খোলা এক আমানত আর এখনো শেষ না-হওয়া এক পরীক্ষা।"
          }
        ]
      }
    ]
  },
  "23:62": {
    "sections": [
      {
        "h": {
          "en": "An Answer to Fear",
          "bn": "ভয়ের একটা জবাব"
        },
        "p": [
          {
            "en": "Read this line out of place and it sounds like a stray comment on divine law. Read it where it stands and it is an answer. The verses just before it, from 23:57 to 23:61, drew the portrait of the believer who fears his Lord, holds fast to His signs, gives while his heart trembles, and races ahead of others in every good work. A demanding portrait. A tired reader could look at it and quietly despair of ever matching it.",
            "bn": "এ লাইনটা জায়গার বাইরে পড়লে মনে হয় আল্লাহর বিধান নিয়ে এলোমেলো একটা মন্তব্য। কিন্তু নিজ জায়গায় পড়লে এটা একটা জবাব। ঠিক আগের আয়াতগুলো, ২৩:৫৭ থেকে ২৩:৬১, সেই মুমিনের ছবি এঁকেছে যে রবকে ভয় করে, তাঁর নিদর্শন আঁকড়ে ধরে, অন্তর কাঁপতে কাঁপতে দান করে, আর প্রতিটি ভালো কাজে সবার আগে ছুটে যায়। বড় দাবিদার এক ছবি। ক্লান্ত পাঠক এ দেখে চুপচাপ ভেবে বসতে পারে, এর সমান হওয়া কি আমার কোনোদিন হবে?"
          },
          {
            "en": "As-Sa'di reads the verse against exactly that fear. Once the passage had praised their hurrying to good deeds and their outstripping others in them, he writes, a person might imagine that what is asked of him and of everybody else is beyond reach or crushingly hard. So Allah tells us plainly that He burdens no soul except to the measure it can hold. It is mercy and wisdom, as-Sa'di says, easing the road so that travellers can walk it at every hour.",
            "bn": "সা'দী আয়াতটিকে ঠিক এই ভয়ের বিপরীতে পড়েন। আয়াতগুলো যখন কল্যাণকাজে তাদের ছুটে চলা আর অন্যদের ছাড়িয়ে যাওয়ার প্রশংসা করল, তখন কারও মনে হতে পারে তার কাছে আর সবার কাছে যা চাওয়া হচ্ছে তা নাগালের বাইরে, কিংবা পিষে ফেলার মতো কঠিন, সা'দী বলেন। তাই আল্লাহ পরিষ্কার জানিয়ে দেন যে তিনি কোনো প্রাণকে তার ধারণক্ষমতার বাইরে বোঝা দেন না। এটা রহমত আর হিকমত, সা'দী বলেন, পথটাকে সহজ করে দেওয়া যাতে পথিক প্রতি মুহূর্তে হাঁটতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Beyond Its Measure",
          "bn": "সাধ্যের বাইরে কিছু নয়"
        },
        "p": [
          {
            "en": "The heart of the line is one word, wusʿ, a soul's capacity. Ibn Kathir glosses it as what a soul is able to bear and to carry out, and frames the whole verse as a statement of God's justice in the law He gave His servants in this world. At-Tabari says almost the same from another angle: God charges a soul only with what it can accommodate and what suits it in worship. The obligation is fitted to the shoulder, and never the shoulder to the obligation.",
            "bn": "লাইনের প্রাণভোমরা একটি শব্দ, উস', মানে প্রাণের সাধ্য। ইবন কাসীর এর অর্থ করেন, প্রাণ যা বইতে ও করতে পারে তা-ই, আর গোটা আয়াতকে তিনি ধরেন দুনিয়ায় বান্দাদের উপর আল্লাহর দেওয়া বিধানে তাঁর ইনসাফের ঘোষণা হিসেবে। তাবারী প্রায় একই কথা বলেন অন্য দিক থেকে: আল্লাহ প্রাণকে কেবল ততটুকুই দেন যা সে বহন করতে পারে আর ইবাদতে যা তার জন্য মানানসই। বোঝা কাঁধের মাপে বসানো হয়, কখনো কাঁধ বোঝার মাপে নয়।"
          },
          {
            "en": "Al-Muyassar keeps it simple: God charges no servant of His except with what he has room to act upon. As-Sa'di adds a detail the others leave implicit. The task is set below your full strength, he says, so that a surplus of power is always left over. You are not meant to be emptied by obedience. The command stops short of your limit on purpose, which is why the path stays walkable and does not break the traveller who walks it.",
            "bn": "মুয়াসসার সোজা কথায় বলেন: আল্লাহ তাঁর কোনো বান্দাকে ততটুকুই দেন যতটুকু আমল করার জায়গা তার আছে। সা'দী একটা কথা যোগ করেন যা বাকিরা না বলে রেখে দেন। কাজটা রাখা হয় তোমার পুরো শক্তির নিচে, তিনি বলেন, যাতে শক্তির কিছুটা সবসময় উদ্বৃত্ত থেকে যায়। ইবাদত করে তোমাকে নিঃশেষ করে ফেলা এর উদ্দেশ্য নয়। হুকুম ইচ্ছে করেই তোমার সীমার আগে থেমে যায়, তাই পথটা হাঁটার যোগ্য থাকে আর যে হাঁটে তাকে ভেঙে ফেলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer Sitting, the Broken Fast",
          "bn": "বসে নামাজ, ভাঙা রোজা"
        },
        "p": [
          {
            "en": "Al-Baghawi turns the principle into cases you can touch. Capacity here means a soul's power, he writes, and then he gives the rulings that follow from it. Whoever cannot stand in prayer, let him pray seated. Whoever cannot bear the fast, let him break it. The verse is not a comforting abstraction floating above the law; it is the reason the law bends around real bodies. Where strength genuinely fails, the obligation itself changes shape rather than crushing the person who cannot meet it.",
            "bn": "বাগভী নীতিটাকে এমন উদাহরণে নামিয়ে আনেন যা হাতে ছোঁয়া যায়। এখানে সাধ্য মানে প্রাণের শক্তি, তিনি লেখেন, তারপর সেই শক্তি থেকে যে বিধান বেরোয় তা দেন। যে দাঁড়িয়ে নামাজ পড়তে পারে না, সে বসে পড়ুক। যে রোজা রাখতে পারে না, সে ভেঙে ফেলুক। আয়াতটা বিধানের উপরে ভাসতে থাকা কোনো আরামদায়ক ধারণা নয়। এটাই সেই কারণ যার জন্য বিধান বাস্তব শরীরের চারপাশে বাঁকে। যেখানে সত্যিই শক্তি ফুরিয়ে যায়, সেখানে হুকুম নিজেই রূপ বদলায়, যে পারে না তাকে পিষে ফেলে না।"
          },
          {
            "en": "This cuts in two directions at once. It rules out the harshness that would shame the sick, the weak and the overwhelmed for not matching the strong. And it rules out the excuse that dresses up mere reluctance as inability. Between the two stands an honest question nobody else can answer for you: is this truly past what I can bear, or only past what I would rather give? The verse hands you the standard and then leaves you alone in front of it.",
            "bn": "এটা একই সঙ্গে দুই দিকে কাটে। এক দিকে তা সেই কঠোরতা বাতিল করে যা অসুস্থ, দুর্বল আর কাহিল মানুষকে সবলদের সমান না হতে পারার জন্য লজ্জা দিত। অন্য দিকে তা সেই অজুহাত বাতিল করে যা নিছক অনীহাকে অক্ষমতার পোশাক পরায়। দুইয়ের মাঝে দাঁড়িয়ে থাকে সৎ একটা প্রশ্ন, যার জবাব আপনার হয়ে আর কেউ দিতে পারবে না: এটা কি সত্যিই আমার সাধ্যের বাইরে, নাকি শুধু আমি যা দিতে রাজি তার বাইরে? আয়াত আপনার হাতে মাপকাঠি ধরিয়ে দিয়ে আপনাকে একা তার সামনে রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Already Settled in al-Baqarah",
          "bn": "বাকারায় আগেই মীমাংসিত"
        },
        "p": [
          {
            "en": "Al-Qurtubi treats this half of the verse as ground already covered. Its meaning, he notes, has passed in Sūrat al-Baqarah, at 2:286, where the same promise is made: God burdens no soul beyond its capacity. He goes further and calls that earlier verse the abrogator of everything in the sacred law that would have charged people with what they cannot bear. On his reading, the door to impossible obligation was closed once, decisively, and this line in Sūrat al-Muʾminūn simply reaffirms the settlement.",
            "bn": "কুরতুবী আয়াতের এই অর্ধেককে এমন জমি ধরেন যা আগেই মাড়ানো হয়ে গেছে। এর অর্থ, তিনি বলেন, সূরা বাকারায় ২:২৮৬ আয়াতে চলে গেছে, যেখানে একই প্রতিশ্রুতি দেওয়া: আল্লাহ কোনো প্রাণকে তার সাধ্যের বাইরে বোঝা দেন না। তিনি আরও এগিয়ে সেই আগের আয়াতকে বলেন শরিয়তে যা কিছু অসাধ্য বোঝা চাপাত তার সবকিছুর রহিতকারী। তাঁর পাঠে অসম্ভব দায়িত্বের দরজা একবারই চূড়ান্তভাবে বন্ধ হয়ে গিয়েছিল, আর সূরা মুমিনূনের এ লাইন সেই মীমাংসাটাই আবার নিশ্চিত করে।"
          },
          {
            "en": "Whatever a reader makes of the technical claim, the pastoral force is plain. A believer never has to fear that somewhere in the religion a command is waiting that no human being could actually keep. That fear belongs to a false picture of God. The obligations are real and they do ask something of you, but they were measured against human limits before they ever reached you. Difficulty is built in; impossibility is not. What feels unbearable is worth examining before it is believed.",
            "bn": "কারিগরি দাবিটা নিয়ে যে যা-ই ভাবুক, এর সান্ত্বনার জোরটা পরিষ্কার। মুমিনকে কখনো এই ভয় বইতে হয় না যে দ্বীনের কোথাও এমন কোনো হুকুম লুকিয়ে আছে যা আসলে কোনো মানুষ পালন করতে পারবে না। সেই ভয় আল্লাহর এক ভুল ছবির অংশ। দায়িত্বগুলো বাস্তব, তারা আপনার কাছে সত্যিই কিছু চায়, কিন্তু আপনার কাছে পৌঁছানোর আগেই তা মানুষের সীমার মাপে মাপা হয়েছিল। কষ্ট এর ভেতরেই গাঁথা, অসম্ভবতা নয়। যা অসহনীয় মনে হয়, বিশ্বাস করে বসার আগে তা একবার যাচাই করা ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Record That Speaks",
          "bn": "যে খাতা কথা বলে"
        },
        "p": [
          {
            "en": "The verse now turns from the task to its accounting: with Us is a record that speaks with truth. Ibn Kathir identifies it as the book of deeds, the register in which God has written down what His servants do, from which nothing is lost, and to which they will be called on the Day of Rising. At-Tabari calls it the book of the creatures' deeds, of every good and evil they worked, and says it speaks with truth by declaring honestly what was done.",
            "bn": "আয়াত এবার কাজ থেকে তার হিসাবের দিকে ফেরে: আমার কাছে এমন এক কিতাব আছে যা সত্য বলে। ইবন কাসীর একে চিহ্নিত করেন আমলনামা হিসেবে, সেই খাতা যাতে আল্লাহ বান্দাদের কাজ লিখে রেখেছেন, যা থেকে কিছুই হারায় না, আর যার জন্য কিয়ামতের দিন তাদের ডাকা হবে। তাবারী একে বলেন সৃষ্টির আমলের কিতাব, তারা ভালো আর মন্দ যা করেছে তার সব, আর তিনি বলেন এটা সত্য বলে, দুনিয়ায় যা করা হয়েছে তা সততার সঙ্গে জানিয়ে দেয়।"
          },
          {
            "en": "How does a book speak? Al-Qurtubi notes that the word for speech is used loosely of the record; the sense is that it utters and makes plain what is written in it. At-Tabari sharpens the point: it reports what each soul did in the world with no addition and no subtraction. This is not a vague ledger to be haggled over on the Day. It testifies, clause by clause, and its testimony is exact. Nothing on it was invented, and nothing true was left off.",
            "bn": "একটা কিতাব কীভাবে কথা বলে? কুরতুবী বলেন, কথা বলার শব্দটা কিতাবের বেলায় শিথিলভাবে ব্যবহার হয়েছে; মানে হলো, তাতে যা লেখা আছে তা উচ্চারণ করে খোলাসা করে দেয়। তাবারী কথাটাকে আরও ধারালো করেন: প্রতিটি প্রাণ দুনিয়ায় যা করেছে তা এটা জানায়, একটুও যোগ না করে, একটুও বাদ না দিয়ে। এটা কোনো ঝাপসা হিসাব নয় যা নিয়ে কিয়ামতের দিন দরকষাকষি হবে। এটা লাইন ধরে ধরে সাক্ষ্য দেয়, আর তার সাক্ষ্য নিখুঁত। এতে বানানো কিছু নেই, সত্য কিছুও বাদ পড়েনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming the Record",
          "bn": "কোন কিতাব বোঝানো হয়েছে"
        },
        "p": [
          {
            "en": "The commentators do not all read the same book here. Al-Qurtubi lays out three views and ranks them. The clearest, he holds, is the register of deeds that the angels raise up, ascribed to God because they write in it at His command. A second view makes it the Preserved Tablet, al-Lawḥ al-Maḥfūẓ, in which everything is already fixed. A third takes the record to be the Qur'an itself. All are possible, he says, but the first is the most apparent.",
            "bn": "তাফসিরকারেরা এখানে সবাই একই কিতাব পড়েন না। কুরতুবী তিনটি অভিমত সাজিয়ে দেন আর তাদের ক্রম ঠিক করেন। সবচেয়ে স্পষ্ট, তাঁর মতে, আমল গোনার সেই খাতা যা ফেরেশতারা উপরে তুলে ধরেন, আল্লাহর দিকে সম্বন্ধ করা হয়েছে কারণ তারা তা লেখেন তাঁরই হুকুমে। দ্বিতীয় অভিমত একে বানায় লাওহে মাহফুজ, যাতে সবকিছু আগেই লেখা আছে। তৃতীয়টি এই কিতাবকে ধরে খোদ কুরআন। সবই সম্ভব, তিনি বলেন, তবে প্রথমটিই সবচেয়ে স্পষ্ট।"
          },
          {
            "en": "Others lean the other way. As-Sa'di calls it the first Book, which contains all things and matches every event that comes to pass, and is therefore truth. Al-Baghawi names it the Preserved Tablet outright, in which the deed was set down so that the record can now speak it and make it plain, though he also reports the view that it is the scrolls the recording angels keep. So the readings split between the tablet of decree and the ledger of deeds, and the commentators name the split without forcing it shut.",
            "bn": "অন্যরা উল্টো দিকে ঝোঁকেন। সা'দী একে বলেন প্রথম কিতাব, যাতে সব জিনিস আছে আর যা ঘটে যাওয়া প্রতিটি ঘটনার সঙ্গে মিলে যায়, তাই তা সত্য। বাগভী একে সরাসরি লাওহে মাহফুজ নাম দেন, যাতে আমল লিখে রাখা হয়েছে যেন খাতা এখন তা বলতে ও খোলাসা করতে পারে, যদিও তিনি এ মতও আনেন যে এটা হেফাজতকারী ফেরেশতাদের রাখা আমলনামা। তাই পাঠগুলো ভাগ হয়ে যায় তকদিরের ফলক আর আমলের খাতার মাঝে, আর তাফসিরকারেরা সেই ভাগটা নাম দিয়ে দেন, জোর করে বন্ধ করে দেন না।"
          },
          {
            "en": "Al-Muyassar sides with the ledger: the deeds are recorded with God in the book that tallies them, which the angels bear up, and it speaks the truth against those it records. Al-Qurtubi draws out why the image is placed here at all. In it, he writes, there is a threat and a cutting-off of every hope of injustice. A book that speaks the exact truth is bad news for anyone who wanted to escape his record, and it is a guarantee for anyone who feared being cheated of his.",
            "bn": "মুয়াসসার আমলনামার পক্ষেই দাঁড়ান: কাজগুলো আল্লাহর কাছে সেই খাতায় লেখা যা তাদের গোনে, যা ফেরেশতারা বহন করে তোলেন, আর তা তাদের বিরুদ্ধে সত্য বলে। কুরতুবী টেনে বের করেন কেন এ ছবিটা এখানেই বসানো হয়েছে। এতে, তিনি লেখেন, আছে এক হুমকি আর জুলুমের সব আশা কেটে দেওয়া। যে কিতাব হুবহু সত্য বলে, তা তার জন্য দুঃসংবাদ যে নিজের খাতা থেকে পালাতে চেয়েছিল, আর তার জন্য নিশ্চয়তা যে নিজের হক থেকে বঞ্চিত হওয়ার ভয় করত।"
          }
        ]
      },
      {
        "h": {
          "en": "No One Is Wronged",
          "bn": "কারও প্রতি জুলুম নয়"
        },
        "p": [
          {
            "en": "The verse ends with the reason all of this matters: and they will not be wronged. At-Tabari spells out both edges of the injustice that is ruled out. No evildoer will have sins he never committed added to his account, to be punished for a crime that was not his; and no doer of good will have his good diminished, to be shorted on his reward. As-Sa'di states the same balance tightly: nothing is subtracted from their good, and nothing is piled onto their punishment.",
            "bn": "আয়াত শেষ হয় সেই কারণ দিয়ে যার জন্য এ সবকিছু গুরুত্বপূর্ণ: আর তাদের প্রতি জুলুম করা হবে না। তাবারী যে জুলুম বাতিল করা হচ্ছে তার দুই ধারই খুলে বলেন। কোনো অপরাধীর নামে সে করেনি এমন গুনাহ জুড়ে দেওয়া হবে না, যাতে তাকে তার না করা অপরাধের শাস্তি পেতে হয়; আর কোনো সৎকর্মীর নেকি কমিয়ে দেওয়া হবে না, যাতে তার প্রতিদানে কমতি পড়ে। সা'দী একই ভারসাম্য টান টান করে বলেন: তাদের নেকি থেকে কিছু কমানো হয় না, তাদের শাস্তিতে কিছু বাড়ানো হয় না।"
          },
          {
            "en": "Al-Baghawi gives the same two-sided guarantee: no good deed is cut down and no evil deed is added to. To be wronged, in the language of these verses, is precisely to have the account falsified in either direction. The record forbids both. It is worth sitting with how much fear this is meant to lift. The anxious believer sure that his small deeds count for nothing, and the wrongdoer hoping his will somehow be overlooked, are both answered by the same exact ledger.",
            "bn": "বাগভী একই দুই দিকের নিশ্চয়তা দেন: কোনো নেকি কেটে ছোট করা হয় না, কোনো গুনাহ বাড়িয়ে দেওয়া হয় না। এ আয়াতগুলোর ভাষায় জুলুম মানেই ঠিক এটা, দুই দিকের যেকোনোটায় হিসাব মিথ্যা করে দেওয়া। খাতা দুটোই নিষেধ করে। কতটা ভয় এতে তুলে নেওয়ার কথা, সেটা নিয়ে একটু থামা দরকার। যে উদ্বিগ্ন মুমিন নিশ্চিত তার ছোট আমলগুলো কিছুই গোনায় ধরবে না, আর যে অন্যায়কারী আশা করে তারটা কোনোভাবে চোখ এড়িয়ে যাবে, দুজনকেই সেই একই নিখুঁত খাতা জবাব দেয়।"
          },
          {
            "en": "Ibn Kathir adds a turn that keeps the justice from hardening into mere arithmetic. Nothing, he says, will be shaved off the record of a person's good deeds. As for the evil deeds, God forgives and passes over many of them for His believing servants. So the exactness runs in the servant's favour. The good is counted to the last atom, while much of the bad is quietly struck out by mercy. Justice guarantees you will not be cheated; mercy sees you dealt with better than strict justice alone would.",
            "bn": "ইবন কাসীর এমন একটা মোড় যোগ করেন যা ইনসাফকে নিছক অঙ্কে জমে যেতে দেয় না। কারও নেকির খাতা থেকে কিছুই কেটে ফেলা হবে না, তিনি বলেন। আর গুনাহের বেলায়, আল্লাহ তাঁর মুমিন বান্দাদের অনেকগুলো ক্ষমা করে দেন, পাশ কাটিয়ে যান। তাই নিখুঁত হিসাবটা বান্দার পক্ষেই ঝোঁকে। নেকি গোনা হয় শেষ অণু পর্যন্ত, আর মন্দের অনেকটা রহমতে চুপচাপ কেটে দেওয়া হয়। ইনসাফ নিশ্চিত করে আপনি ঠকবেন না; রহমত এনে দেয় খাঁটি ইনসাফ একা যতটা দিত তার চেয়ে ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Card Outweighs the Scrolls",
          "bn": "কার্ড ভারী, খাতা হালকা"
        },
        "p": [
          {
            "en": "No commentator we fetched attaches a particular hadith to this verse, so what follows illustrates its theme rather than explaining its occasion. At-Tirmidhi records, from ʿAbdullāh ibn ʿAmr, that the Prophet ﷺ described a man of this Ummah singled out on the Day of Rising. 99 scrolls of his sins are unrolled, each as far as the eye can see. God asks him: do you deny any of this? Have those who recorded it wronged you? The man answers no.",
            "bn": "আমরা যে তাফসিরকারদের ঘেঁটেছি, তাঁদের কেউ এ আয়াতের সঙ্গে নির্দিষ্ট কোনো হাদিস জুড়ে দেননি, তাই যা আসছে তা আয়াতের শানে নুযুল নয়, তার ভাব বোঝায়। তিরমিযী আবদুল্লাহ ইবন আমর থেকে বর্ণনা করেন যে নবী ﷺ কিয়ামতের দিন এই উম্মতের এক ব্যক্তিকে আলাদা করে ডাকার বর্ণনা দিয়েছেন। তার গুনাহের ৯৯টি খাতা মেলে ধরা হবে, প্রতিটি চোখের নাগাল যতদূর যায় ততদূর। আল্লাহ তাকে জিজ্ঞেস করবেন: এর কিছু কি তুমি অস্বীকার করো? যারা এ লিখে রেখেছে তারা কি তোমার প্রতি জুলুম করেছে? লোকটি বলবে, না।"
          },
          {
            "en": "Then a single card is brought out, bearing the testimony that there is no god but Allah and Muḥammad is His servant and messenger. Set against the scrolls on the scale, the card outweighs them all. Twice in the account the man is told: you will not be wronged, the very words of our verse. At-Tirmidhi graded the report hasan gharīb. The record that speaks the truth, it turns out, is not only a threat to the guilty; it is the ground on which a single sincere word can be given its full, saving weight.",
            "bn": "তারপর বের করা হবে একটিমাত্র কার্ড, যাতে লেখা সেই সাক্ষ্য যে আল্লাহ ছাড়া কোনো ইলাহ নেই আর মুহাম্মদ তাঁর বান্দা ও রাসুল। পাল্লায় খাতাগুলোর বিপরীতে রাখলে কার্ডটাই সব ছাপিয়ে ভারী হয়ে যায়। হিসাবের মধ্যে দুবার লোকটিকে বলা হয়: তোমার প্রতি জুলুম করা হবে না, আমাদের আয়াতের ঠিক সেই কথা। তিরমিযী বর্ণনাটিকে হাসান গারিব বলেছেন। যে কিতাব সত্য বলে, দেখা যাচ্ছে তা কেবল অপরাধীর জন্য হুমকি নয়; এটাই সেই জমি যার উপর একটি আন্তরিক কালিমাকে তার পূর্ণ, মুক্তিদায়ী ওজন দেওয়া হয়।"
          }
        ]
      }
    ]
  },
  "23:66": {
    "sections": [
      {
        "h": {
          "en": "After the Cry for Help",
          "bn": "সাহায্যের আর্তনাদের পর"
        },
        "p": [
          {
            "en": "The verse lands at the close of a grim scene. In the two lines before it, the affluent among the deniers are seized by punishment, and at once they are crying out for help, only to be told: do not cry out today, you will receive no help from Us (23:64 and 23:65). Then comes the sentence that explains the whole ruin: qad kanat ayati tutla alaykum, My verses had already been recited to you. As-Sadi reads the flow as the answer to an unspoken question. What brought these people to such an end? The reply is that guidance had reached them, and they had turned away.",
            "bn": "আয়াতটি আসে এক ভয়ংকর দৃশ্যের একেবারে শেষে। এর ঠিক আগের দুই আয়াতে অস্বীকারকারীদের মধ্যে বিত্তশালীদের শাস্তি দিয়ে পাকড়াও করা হয়, আর সঙ্গে সঙ্গে তারা সাহায্যের জন্য চিৎকার জুড়ে দেয়; জবাব আসে, আজ চিৎকার করো না, আমার কাছ থেকে কোনো সাহায্য পাবে না (২৩:৬৪ ও ২৩:৬৫)। এরপর আসে সেই বাক্য, যা গোটা ধ্বংসের কারণ খুলে দেয়: কাদ কানাত আয়াতী তুতলা আলাইকুম, আমার আয়াত তো তোমাদের কাছে পড়ে শোনানো হত। সা'দী এই ধারাটিকে পড়েন একটি অনুক্ত প্রশ্নের জবাব হিসেবে। কিসে এদের এই পরিণতিতে পৌঁছাল? উত্তর, হিদায়াত তাদের কাছে এসেছিল, আর তারা তা থেকে মুখ ফিরিয়েছিল।"
          },
          {
            "en": "So the charge is not a fresh accusation but a reminder. Before the punishment there had been years of recitation, verses read aloud in their hearing, patiently and over and over. Ibn Kathir calls what follows the greatest of their sins, the fault named first when their record is opened. The screaming and the refusal of help make sense only against this backdrop. These people are not being startled by a verdict out of nowhere. They are meeting the outcome of a choice they had made for themselves every single time the words were read to them.",
            "bn": "তাই এ কোনো নতুন অভিযোগ নয়, বরং একটি স্মরণ করিয়ে দেওয়া। শাস্তির আগে বছরের পর বছর তিলাওয়াত হয়েছে, তাদের কানের কাছে ধৈর্য ধরে বারবার আয়াত পড়া হয়েছে। এর পরের কথাটাকে ইবন কাসীর বলেন তাদের সবচেয়ে বড় গুনাহ, হিসাব খুললে যে দোষের নাম সবার আগে ওঠে। চিৎকার আর সাহায্য না পাওয়ার দৃশ্যটা তখনই বোঝা যায় এই পটভূমিতে। তারা কোনো রায় দেখে আকস্মিক চমকে যাচ্ছে না, তারা মুখোমুখি হচ্ছে সেই সিদ্ধান্তেরই ফলের, যা প্রতিবার আয়াত পড়ে শোনানোর সময় তারা নিজেরাই নিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited, Again and Again",
          "bn": "বারবার পড়ে শোনানো"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi both gloss al-ayat here as the Qur'an, and tutla as tuqra, recited or read aloud. The verb sits in the imperfect: not read once and forgotten, but read to them over and over. Al-Muyassar draws out the purpose behind the reciting, that they might believe in the verses, accept them and act on them. The words were not sent to fill the air. They came with a claim on the listener, and they kept coming, so that nobody could later say the message had somehow passed him by.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই এখানে আল-আয়াত মানে কুরআন ধরেন, আর তুতলা মানে তুকরা, পড়ে শোনানো। ক্রিয়াটি অতীত-অভ্যাসের রূপে, একবার পড়ে শেষ নয়, বরং বারবার তাদের কাছে পড়া হত। মুয়াসসার সেই তিলাওয়াতের উদ্দেশ্যটা টেনে আনে: যাতে তারা আয়াতগুলোয় ঈমান আনে, সেগুলো কবুল করে আর সেই অনুযায়ী আমল করে। কথাগুলো বাতাস ভরাতে আসেনি। শ্রোতার উপর দাবি নিয়ে এসেছিল, আর আসতেই থেকেছিল, যাতে পরে কেউ বলতে না পারে যে বার্তা তার কাছে পৌঁছায়নি।"
          },
          {
            "en": "This is why the verse dwells on hearing rather than on ignorance. These were not sealed scrolls or a foreign speech; the verses were placed in their ears in their own tongue, plainly enough to answer. At-Tabari says they belied the verses and turned away when they heard them, out of sheer dislike of listening to them. The trouble was never access to the message. It was appetite for it. The clearer the words became, the more determined they grew to put distance between themselves and the thing they had just heard.",
            "bn": "এ কারণেই আয়াত অজ্ঞতার নয়, শোনার উপর জোর দেয়। এগুলো সিলমোহর করা কোনো গুটানো পুঁথি ছিল না, বিদেশি কোনো ভাষাও নয়; আয়াত তাদের নিজের ভাষায় তাদের কানে তুলে দেওয়া হত, জবাব দেওয়ার মতো স্পষ্ট করে। তাবারী বলেন, শুনেই তারা আয়াতগুলোকে মিথ্যা বলত আর মুখ ফিরিয়ে নিত, নিছক শোনার প্রতি অনীহা থেকে। সমস্যা কখনো বার্তায় পৌঁছানোর ছিল না। সমস্যা ছিল তার প্রতি রুচির। কথা যত স্পষ্ট হত, সদ্য শোনা জিনিসটা থেকে দূরত্ব বাড়াতে তারা তত মরিয়া হয়ে উঠত।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning on the Heels",
          "bn": "গোড়ালির ভরে পিছু হটা"
        },
        "p": [
          {
            "en": "Now the picture the verb carries. Fa-kuntum ala aqabikum tankisun: you kept turning back on your heels. Al-Baghawi renders tankisun as tarjiun al-qahqara, you retreat backward, drawing back from faith. Al-Muyassar likens them to the man who turns on his heels and withdraws to the rear. The word nukus is not an ordinary about-face. It is to go back the way you came without turning your face to the road, edging backward the whole time, the most graceless form of retreat a person can make.",
            "bn": "এবার ক্রিয়াটির ভেতরের ছবিটা দেখুন। ফাকুনতুম আলা আকাবিকুম তানকিসূন: তোমরা গোড়ালির ভরে পিছু হটতে থাকতে। বাগাভী তানকিসূন-এর অর্থ করেন তারজিউনাল কাহকারা, তোমরা পিছনদিকে ফিরে যাও, ঈমান থেকে পিছিয়ে পড়ো। মুয়াসসার তাদের তুলনা দেয় সেই লোকের সঙ্গে, যে গোড়ালির ভরে ঘুরে পিছনের দিকে সরে যায়। নুকূস মানে সাধারণ মুখ-ঘোরানো নয়। এর মানে মুখ পথের দিকে না রেখে যে পথে এসেছ সেই পথেই পিছিয়ে যাওয়া, সারাক্ষণ গোড়ালির ভরে হটতে থাকা, মানুষের করা সবচেয়ে বেঢপ পিছুটান।"
          },
          {
            "en": "At-Tabari notes that the idiom is general: nakasa fulan ala aqibihi is said of anyone who goes back from where he came. The image rests on the heels, aqab, the plural of aqib, the back of the foot. To move on your heels is to keep your face toward a thing while your body carries you away from it. That is exactly the posture the verse draws: people standing before a light that is already shining, looking straight at it, and stepping backward from it all the while.",
            "bn": "তাবারী মনে করিয়ে দেন, বাগধারাটি সাধারণ: নাকাসা ফুলান আলা আকিবিহি বলা হয় যে কারও বেলায়, যে যেখান থেকে এসেছে সেখানেই ফিরে যায়। ছবিটা দাঁড়িয়ে আছে গোড়ালির উপর, আকাব, আকিব শব্দের বহুবচন, পায়ের পেছনভাগ। গোড়ালির ভরে চলা মানে মুখ কোনো জিনিসের দিকে রেখেই শরীর নিয়ে তার থেকে সরে যাওয়া। আয়াত ঠিক এই ভঙ্গিটাই আঁকে: মানুষ এক আলোর সামনে দাঁড়িয়ে, যে আলো ইতিমধ্যেই জ্বলছে, সেদিকে সোজা তাকিয়ে থেকেও তারা পিছনে পা ফেলে যাচ্ছে।"
          },
          {
            "en": "Al-Qurtubi is explicit that the phrase is used here as a metaphor, an istiara, for turning away from the truth. The heels are not literal; the retreat is of the heart. Ad-Dahhak places the warning in time: this drawing back happened before they were seized and killed, while the door was still standing open. So the verse does not describe cowards fleeing a battlefield. It describes people reversing away from a guidance planted plainly in front of them, with nothing at all chasing them but their own reluctance.",
            "bn": "কুরতুবী স্পষ্ট করে বলেন, এখানে বাক্যটি ব্যবহৃত হয়েছে রূপক অর্থে, ইসতিআরা, হক থেকে মুখ ফেরানোর ছবি হিসেবে। গোড়ালিটা আক্ষরিক নয়; পিছুটানটা অন্তরের। দাহহাক ঘটনাটির সময় ধরিয়ে দেন: এই পিছিয়ে যাওয়া ঘটেছিল তাদের ধরে হত্যা করার শাস্তির আগে, যখন দরজা তখনো খোলা। তাই আয়াত রণক্ষেত্র থেকে পালানো কাপুরুষদের কথা বলছে না। এটি বলছে এমন মানুষের কথা, যারা সামনে স্পষ্ট দাঁড়ানো এক হিদায়াত থেকে উল্টো পিছিয়ে যাচ্ছে, আর তাড়া করার মতো কিছু নেই, আছে কেবল তাদের নিজেদের অনীহা।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Scholars Read It",
          "bn": "আলিমগণ যেভাবে পড়েছেন"
        },
        "p": [
          {
            "en": "The commentators differ on the exact shade of tankisun, and at-Tabari sets their readings side by side rather than choosing between them. Mujahid glosses it as tastakhirun, you hang back and draw yourselves to the rear. Ibn Abbas (RA) is reported to read it as tudbirun, you turn your backs and go. Both keep the sense of backward movement; what shifts is the stress, whether the fault lies chiefly in lagging behind the guidance or in turning the back on it outright. The verse holds both without forcing a single word onto the reader.",
            "bn": "তানকিসূন-এর ঠিক কোন ছায়াটা, তা নিয়ে তাফসীরকারেরা ভিন্ন মত দেন, আর তাবারী তাঁদের পাঠগুলো পাশাপাশি রাখেন, কোনোটাকে বেছে নেন না। মুজাহিদ এর অর্থ করেন তাসতাখিরূন, তোমরা পিছিয়ে থাকো, নিজেদের পেছনের দিকে টেনে রাখো। ইবন আব্বাস (রাঃ) থেকে বর্ণিত পাঠ তুদবিরূন, তোমরা পিঠ ফিরিয়ে চলে যাও। দুটোই পিছনদিকে চলার অর্থ ধরে রাখে; বদলায় শুধু জোরটা, দোষ মূলত হিদায়াতের পেছনে পড়ে থাকায়, নাকি তার দিকে পিঠ ফিরিয়ে দেওয়ায়। আয়াত দুটোকেই ধরে রাখে, পাঠকের উপর একটিমাত্র শব্দ চাপিয়ে দেয় না।"
          },
          {
            "en": "At-Tabari also records, on the authority of Ibn Abbas (RA), that the people addressed here are the people of Mecca, ahl Makka, the deniers among the Prophet's own tribe. Al-Qurtubi preserves a variant reading beside the common one: Ali ibn Abi Talib (RA) is reported to have read ala adbarikum, on your backs, in place of ala aqabikum, on your heels, and tankusun with a damma on the kaf. The variant does not alter the meaning. It only thickens the same picture, a body carried away from the very thing its face is turned toward.",
            "bn": "তাবারী ইবন আব্বাস (রাঃ)-এর সূত্রে এ-ও বর্ণনা করেন যে এখানে যাদের সম্বোধন করা হয়েছে তারা মক্কাবাসী, আহলে মক্কা, নবী ﷺ-এর নিজের গোত্রের অস্বীকারকারীরা। কুরতুবী প্রচলিত পাঠের পাশে একটি ভিন্ন পাঠও রাখেন: আলী ইবন আবী তালিব (রাঃ) থেকে বর্ণিত, তিনি আলা আকাবিকুম, গোড়ালির ভরে, এর বদলে পড়তেন আলা আদবারিকুম, পিঠের ভরে, আর তানকুসূন পড়তেন কাফ-এর উপর পেশ দিয়ে। এই পাঠ অর্থ বদলায় না। কেবল একই ছবিকে আরও গাঢ় করে, মুখ যেদিকে ফেরানো শরীর ঠিক তার থেকেই সরে যাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Forward or Backward",
          "bn": "সামনে না পিছনে"
        },
        "p": [
          {
            "en": "As-Sadi gives the sharpest account of why the heels matter. By following the Qur'an, he says, a person advances; by turning away from it he draws back and sinks, down to the lowest of the low. Reading the verses and turning from them are not two neutral options laid flat beside each other. They are a climb and a fall. The verse assumes there is no standing still in front of revelation: a listener is always moving, and the only real choice is the direction, toward the words or away from them.",
            "bn": "গোড়ালির কথাটা কেন এত গুরুত্বপূর্ণ, তার সবচেয়ে ধারালো ব্যাখ্যা দেন সা'দী। তিনি বলেন, কুরআনের অনুসরণে মানুষ সামনে এগোয়, আর তা থেকে মুখ ফেরালে সে পিছিয়ে পড়ে, নেমে যায় একেবারে নিচু থেকে নিচুতে। আয়াত পড়া আর তা থেকে মুখ ফেরানো পাশাপাশি রাখা দুটি সমান নিরপেক্ষ পথ নয়। একটা চড়াই, অন্যটা পতন। আয়াত ধরেই নেয় যে ওহীর সামনে স্থির দাঁড়িয়ে থাকা বলে কিছু নেই: শ্রোতা সর্বদাই নড়ছে, বাকি থাকে কেবল দিকটা, কথার দিকে নাকি তার থেকে দূরে।"
          },
          {
            "en": "This reframes guidance as motion rather than opinion. Every recitation is a step forward held out to the one who hears it. To decline the step is not to stay where you were; it is to lose the ground you were already standing on. The person who heard the verses and did nothing did not remain in place. He slid backward, because the words were an ascent and refusing them was a descent. On this reading, the heel-turning is simply what non-response looks like, once you grant that in front of revelation no one is ever still.",
            "bn": "এতে হিদায়াত আর মতামতের বিষয় থাকে না, হয়ে ওঠে চলার বিষয়। প্রতিটি তিলাওয়াত শ্রোতার সামনে বাড়িয়ে দেওয়া এক ধাপ সামনে। সেই ধাপ প্রত্যাখ্যান মানে যেখানে ছিলেন সেখানে থেকে যাওয়া নয়; বরং যে জমিতে দাঁড়িয়ে ছিলেন সেটুকুও হারানো। যে আয়াত শুনেও কিছু করল না, সে জায়গায় থেমে থাকল না। সে পিছিয়ে গেল, কারণ কথাগুলো ছিল একটা ওঠা, আর তা প্রত্যাখ্যান ছিল একটা নামা। এই পাঠে গোড়ালির ভরে হটাটা কেবল সেই চেহারা, সাড়া না দেওয়া যেমন দেখায়, একবার মেনে নিলে যে ওহীর সামনে কেউই স্থির নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Worse Than Never Hearing",
          "bn": "না শোনার চেয়েও গুরুতর"
        },
        "p": [
          {
            "en": "Ibn Kathir names this refusal outright as the greatest of their sins, the charge set down first when their account is read. His gloss is blunt: when you were called, you refused; when you were asked, you held back. The weight of the wrong lies in the knowing. To reject a message you never received is a lesser matter; to reject what was recited to you plainly, in your own language, over years, is graver still. The verse is not describing the uninformed. It is describing people who understood and still chose the retreat.",
            "bn": "ইবন কাসীর এই প্রত্যাখ্যানকে সরাসরি বলেন তাদের সবচেয়ে বড় গুনাহ, হিসাব পড়ার সময় যে দোষটা সবার আগে লেখা হয়। তাঁর ব্যাখ্যা সাফ: যখন তোমাদের ডাকা হত, তোমরা অস্বীকার করতে; যখন কিছু চাওয়া হত, তোমরা আটকে যেতে। দোষের ভারটা জানার মধ্যেই। যে বার্তা কখনো পাওইনি তা প্রত্যাখ্যান এক জিনিস; আর যা তোমার নিজের ভাষায়, স্পষ্ট করে, বছরের পর বছর পড়ে শোনানো হয়েছে, তা প্রত্যাখ্যান একেবারে আরেক জিনিস। আয়াত অজ্ঞদের কথা বলছে না। বলছে এমন মানুষের কথা, যারা বুঝেও পিছু হটাটাই বেছে নিয়েছিল।"
          },
          {
            "en": "Ibn Kathir binds the verse to another, in Surah Ghafir (40:12): this is because, when Allah alone was invoked, you disbelieved, but when others were joined with Him, you believed. Read together, the two verses show that the fault was not confusion but a settled preference. They were most at ease precisely when the truth was diluted, and most resistant at the very moment it was made plain and singular. That is why the passage treats this turning-back as the root beneath the punishment, and not as one item among a longer list of separate wrongs.",
            "bn": "ইবন কাসীর আয়াতটিকে জুড়ে দেন আরেকটি আয়াতের সঙ্গে, সূরা গাফিরে (৪০:১২): এ এজন্য যে, যখন এক আল্লাহকে ডাকা হত তোমরা কুফরি করতে, আর তাঁর সঙ্গে শরিক করা হলে তোমরা ঈমান আনতে। দুটি আয়াত একসঙ্গে পড়লে বোঝা যায়, দোষটা বিভ্রান্তির ছিল না, ছিল থিতু হওয়া এক পছন্দের। সত্য যখন পাতলা করে মেশানো হত তখনই তারা সবচেয়ে স্বস্তিতে থাকত, আর যেই তা স্পষ্ট ও একক হয়ে উঠত ঠিক তখনই সবচেয়ে বেঁকে বসত। এ কারণেই আয়াতটি এই পিছু হটাকে শাস্তির নিচের মূল ধরে, আলাদা দোষের লম্বা তালিকার একটি মাত্র নাম নয়।"
          },
          {
            "en": "There is a mercy hidden inside the severity. If turning from guidance you have heard is the gravest wrong, then guidance heard is itself a mercy of the first order, an ascent set within your reach. And the warning falls on whoever has had the verses read to them clearly and often, which is to say, on the reader of this page as much as on Mecca. The danger it names is not that we have never heard. It is a familiarity worn so smooth that the words no longer move the feet at all.",
            "bn": "এই কঠোরতার ভেতরেই লুকিয়ে আছে এক রহমত। শোনা হিদায়াত থেকে মুখ ফেরানোই যদি সবচেয়ে বড় দোষ হয়, তবে শোনা হিদায়াত নিজেই প্রথম সারির এক রহমত, হাতের নাগালে রাখা একটা চড়াই। আর সতর্কবাণীটা গিয়ে পড়ে তার উপর, যার কাছে আয়াত স্পষ্ট করে বারবার পড়া হয়েছে, অর্থাৎ কেবল মক্কার উপর নয়, এই পাতার পাঠকের উপরও। এটি যে বিপদের নাম বলে তা এই নয় যে আমরা কখনো শুনিনি। বিপদ হলো এমন গা-সওয়া হয়ে যাওয়া, যাতে কথাগুলো আর পা-কে একটুও নাড়ায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Pride Around the House",
          "bn": "কা'বাকে ঘিরে অহংকার"
        },
        "p": [
          {
            "en": "The verse that follows says why they backed away. In 23:67 they are described as mustakbirina bihi samiran tahjurun, arrogant regarding it, talking by night, reviling. Ibn Kathir explains the arrogance as the pride of the Quraysh in being, as they saw themselves, the keepers of the Kaba, the House at the centre of their city. Their turning from the recited verses was not the hesitation of honest doubt. It was disdain, the disdain of people who felt the sanctuary in their charge had already placed them beyond the reach of any warning.",
            "bn": "পরের আয়াত বলে দেয় কেন তারা পিছিয়ে যেত। ২৩:৬৭-এ তাদের বর্ণনা করা হয়েছে মুসতাকবিরীনা বিহি সামিরান তাহজুরূন, এ ব্যাপারে অহংকারী, রাত জেগে গল্প করত, বাজে কথা বলত। ইবন কাসীর এই অহংকারকে ব্যাখ্যা করেন কুরাইশের সেই গর্ব হিসেবে, নিজেদের তারা ভাবত কা'বার রক্ষক, তাদের শহরের কেন্দ্রে দাঁড়ানো সেই ঘরের তত্ত্বাবধায়ক। পড়ে শোনানো আয়াত থেকে তাদের মুখ ফেরানো সৎ সন্দেহের দ্বিধা ছিল না। ছিল অবজ্ঞা, সেই মানুষের অবজ্ঞা, যারা ভাবত হাতে থাকা পবিত্র আঙিনাটা তাদের যে-কোনো সতর্কবাণীর নাগালের বাইরে রেখে দিয়েছে।"
          },
          {
            "en": "On this word Ibn Kathir cites a report transmitted by an-Nasai from Ibn Abbas (RA). Talking by night, he says, became disapproved of when this verse came down. They used to boast, We are the people of the House, we stay up in talk around it by night; and so they passed their nights in idle speech around the Kaba, never using it for the purpose it was raised for, until in effect they had abandoned it, which is the force of tahjurun. This is the word of a Companion tied to 23:67, not a saying of the Prophet, and Ibn Kathir attaches no grading to it here.",
            "bn": "এই শব্দটি নিয়ে ইবন কাসীর নাসাঈর সূত্রে ইবন আব্বাস (রাঃ) থেকে একটি বর্ণনা আনেন। তিনি বলেন, রাত জেগে গল্প করা তখনই অপছন্দনীয় হয়ে ওঠে যখন এই আয়াত নাজিল হয়। তারা গর্ব করে বলত, আমরাই তো এই ঘরের লোক, রাতভর এর চারপাশে বসে গল্প করি; আর এভাবেই তারা কা'বার চারপাশে অনর্থক কথায় রাত কাটাত, যে উদ্দেশ্যে ঘরটি তোলা হয়েছিল সেভাবে তাকে কাজে লাগাত না, ফলে কার্যত তারা তা পরিত্যাগই করেছিল, তাহজুরূন শব্দের এটিই মর্ম। এটি একজন সাহাবির কথা, যুক্ত ২৩:৬৭-এর সঙ্গে, নবী ﷺ-এর বাণী নয়, আর ইবন কাসীর এখানে এর কোনো মান দেননি।"
          },
          {
            "en": "It should be said plainly that the commentators fix no marfu, no directly Prophetic, hadith to the wording of 23:66 itself. What the tafsir offers is the report above, and it is enough to show the shape of the sin. The heel-turning of one verse and the night-boasting of the next are a single posture seen from two sides. Pride in a possession, even a sacred one, had become their reason to step back from the very words that the possession was raised to serve.",
            "bn": "সোজা কথায় বলা দরকার, তাফসীরকারেরা ২৩:৬৬-এর শব্দের সঙ্গে কোনো মারফূ, অর্থাৎ সরাসরি নবী ﷺ পর্যন্ত পৌঁছানো, হাদিস যুক্ত করেননি। তাফসীর যা দেয় তা উপরের ওই বর্ণনা, আর গুনাহটার আকৃতি বোঝাতে সেটুকুই যথেষ্ট। এক আয়াতের গোড়ালির ভরে হটা আর পরের আয়াতের রাতভর গর্ব আসলে একই ভঙ্গির দুই দিক। হাতে থাকা কোনো সম্পদ, এমনকি পবিত্র সম্পদ নিয়ে গর্বই তাদের কাছে হয়ে উঠেছিল সেই কারণ, যা দিয়ে তারা ঠিক সেই কথাগুলো থেকে পিছিয়ে যেত যেগুলোর সেবা করাই ছিল সেই সম্পদের কাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Verse Condemns",
          "bn": "আয়াত কাদের নিন্দা করে"
        },
        "p": [
          {
            "en": "The verse describes what the text describes: a specific people, the deniers among the Quraysh of Mecca, who heard the Qur'an recited to them plainly and repeatedly and drew back from it in arrogance. Named this way, it settles a judgment on their conduct in that time and licenses nothing against any living person or community today. It is not a warrant to charge one's neighbours with backsliding, nor a label to hang on anyone who has not yet answered a particular verse. It is, first and last, a mirror held up to the one who reads it.",
            "bn": "আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে: একদল নির্দিষ্ট মানুষ, মক্কার কুরাইশের অস্বীকারকারীরা, যাদের কাছে কুরআন স্পষ্ট করে বারবার পড়ে শোনানো হত আর তারা অহংকারে তা থেকে পিছিয়ে যেত। এভাবে নাম ধরে বলায় এটি সেই কালের তাদের আচরণের উপর একটি রায় থিতু করে, আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। প্রতিবেশীকে দ্বীন থেকে সরে যাওয়ার দোষ দেওয়ার ছাড়পত্র এটি নয়, যে এখনো কোনো নির্দিষ্ট আয়াতে সাড়া দেয়নি তার গায়ে সাঁটার কোনো তকমাও নয়। এটি সবার আগে এবং সবশেষে পাঠকের সামনে ধরা একটি আয়না।"
          },
          {
            "en": "And the mirror is not gentle. A person who owns a copy of the Qur'an, who has heard its verses recited on countless mornings, stands nearer to this warning than to any comfort in it. The question the verse leaves is not whether the words have reached us; they have. It is which way we move when they do. To step toward a verse we already understand is the whole of the response asked here. To keep our face toward it while our heels carry us away is precisely the fault it names, and it can be undone by nothing but turning around.",
            "bn": "আর আয়নাটা কোমল নয়। যার ঘরে কুরআনের একটি কপি আছে, যে অসংখ্য সকালে এর আয়াত তিলাওয়াত শুনেছে, সে এই সতর্কবাণীর কোনো সান্ত্বনার চেয়ে ঢের কাছে দাঁড়িয়ে। আয়াত যে প্রশ্ন রেখে যায় তা এই নয় যে কথা আমাদের কাছে পৌঁছেছে কি না; পৌঁছেছে। প্রশ্নটা হলো, পৌঁছালে আমরা কোন দিকে নড়ি। যে আয়াত আমরা এরই মধ্যে বুঝি সেদিকে এক পা এগোনোই এখানে চাওয়া গোটা সাড়া। মুখ তার দিকে রেখে গোড়ালির ভরে সরে যাওয়াই ঠিক সেই দোষ যার নাম এখানে নেওয়া হয়েছে, আর তা কেবল ঘুরে দাঁড়ানো ছাড়া আর কিছুতেই শোধরানো যায় না।"
          }
        ]
      }
    ]
  },
  "23:75": {
    "sections": [
      {
        "h": {
          "en": "When Relief Changes Nothing",
          "bn": "স্বস্তি যখন কিছুই বদলায় না"
        },
        "p": [
          {
            "en": "The verse makes a claim that stops the reader: wa-law rahimnahum wa-kashafna ma bihim min durrin la-lajju fi tughyanihim yaʿmahun — even if We gave them mercy and removed the affliction that lay upon them, they would still persist in their transgression, wandering blindly. It is phrased as a supposition that God Himself answers. Grant them the very relief they crave, lift the weight they are groaning under, and the outcome does not change. They return to exactly what they were. The verse is not describing a people who lack a reason to believe; it is describing a people who would not believe even after every excuse had been removed.",
            "bn": "আয়াতটি এমন এক দাবি রাখে, যা পড়তে গিয়ে থমকে যেতে হয়: ওয়া লাও রাহিমনাহুম ওয়া কাশাফনা মা বিহিম মিন দুররিন লালাজ্জু ফী তুগইয়ানিহিম ইয়া'মাহূন — আমি যদি তাদের প্রতি দয়া করতাম আর তাদের উপর চেপে থাকা দুঃখ-দুর্দশা তুলে নিতাম, তবুও তারা তাদের অবাধ্যতায় অন্ধের মতো হাতড়ে বেড়াত। কথাটা বলা হয়েছে এক অনুমান হিসেবে, যার জবাব আল্লাহ নিজেই দিচ্ছেন। তারা যে স্বস্তি চায় সেটাই দিন, যে বোঝা তাদের কুঁকড়ে রেখেছে তা সরিয়ে নিন, ফল বদলায় না। তারা ঠিক আগের জায়গাতেই ফিরে যায়। আয়াতটি এমন লোকের কথা বলছে না যাদের বিশ্বাস করার কোনো কারণ নেই। বলছে এমন লোকের কথা, সব অজুহাত সরিয়ে দিলেও যারা বিশ্বাস করত না।"
          },
          {
            "en": "Ibn Kathir reads this as a report of their sheer hardness in disbelief. He writes that even if God relieved their ailments and made them understand the Qur'an, they would not submit to it; they would carry on in their disbelief, their obstinacy and their transgression. Notice the two things he pairs: relief from suffering and a clear grasp of the message. Both are granted inside the supposition, and both come to nothing. The obstacle, on his reading, was never in the circumstances and never in the evidence. It sat somewhere that neither the easing of a hardship nor the plainest argument could reach.",
            "bn": "ইবন কাসীর একে দেখেন তাদের কুফরে জমে যাওয়া কঠিনতার বর্ণনা হিসেবে। তিনি লেখেন, আল্লাহ যদি তাদের রোগব্যাধি সারিয়ে দিতেন আর কুরআন তাদের বুঝিয়েও দিতেন, তবুও তারা এর কাছে মাথা নত করত না। তারা তাদের কুফর, একগুঁয়েমি আর অবাধ্যতায় চলতেই থাকত। খেয়াল করুন তিনি কোন দুটি জিনিস পাশাপাশি রাখছেন: কষ্ট থেকে মুক্তি, আর বার্তাটা পরিষ্কার বুঝে ফেলা। অনুমানের ভেতরে দুটোই দেওয়া হলো, আর দুটোই কোনো কাজে এল না। তাঁর পড়া অনুযায়ী বাধাটা কখনো পরিস্থিতিতে ছিল না, প্রমাণেও ছিল না। সেটা ছিল এমন এক জায়গায়, কষ্ট লাঘব করা বা সবচেয়ে স্পষ্ট যুক্তিও যেখানে পৌঁছায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "After the Excuses Run Out",
          "bn": "অজুহাত ফুরিয়ে গেলে"
        },
        "p": [
          {
            "en": "The line arrives at the end of a long argument. The surah has just said that those who do not believe in the Hereafter are deviating from the straight path (23:74), after asking whether the deniers failed to recognise their own Messenger, whether they call him mad, whether he asks them for a wage (23:69 to 23:73). Each question strips away a possible reason for their refusal. When the reasons are gone, this verse names what is left. It is not ignorance and not a fee they resent; it is a settled turning-away that no favour would reverse.",
            "bn": "কথাটা আসে এক দীর্ঘ যুক্তির শেষে। সূরাটি এইমাত্র বলেছে, যারা আখিরাতে বিশ্বাস করে না তারা সরল পথ থেকে সরে গেছে (২৩:৭৪)। তার আগে প্রশ্ন তোলা হয়েছে, অস্বীকারকারীরা কি তাদের নিজেদের রসূলকে চিনতে পারেনি, তারা কি তাঁকে উন্মাদ বলে, তিনি কি তাদের কাছে কোনো পারিশ্রমিক চান (২৩:৬৯ থেকে ২৩:৭৩)। প্রতিটি প্রশ্ন তাদের অস্বীকারের একেকটা সম্ভাব্য কারণ খুলে সরিয়ে দেয়। কারণগুলো ফুরিয়ে গেলে এ আয়াত বলে দেয় কী পড়ে রইল। সেটা অজ্ঞতা নয়, কোনো ফি নিয়ে ক্ষোভও নয়। সেটা জমে বসে যাওয়া এক মুখ ফেরানো, কোনো অনুগ্রহই যা ফেরাত না।"
          },
          {
            "en": "What follows sharpens the point rather than softening it. In the next lines God says He had already gripped them with suffering, yet they neither yielded to their Lord nor humbled themselves (23:76), and that a door of severe punishment still lay ahead (23:77). So this verse sits between two statements about hardship: the affliction already sent, and the punishment still to come. Its work is to explain why neither the mercy of relief nor the shock of pain moves them. The passage is diagnosing a condition, not merely recording a complaint.",
            "bn": "এরপর যা আসে, তা কথাটাকে নরম না করে বরং আরও ধারালো করে। পরের আয়াতগুলোয় আল্লাহ বলছেন, তিনি তো তাদের শাস্তি দিয়ে পাকড়াও করেছিলেন, তবুও তারা তাদের রবের কাছে নত হয়নি, কাকুতি-মিনতিও করেনি (২৩:৭৬), আর সামনে কঠিন শাস্তির দরজা এখনো খোলা বাকি (২৩:৭৭)। তাই এ আয়াত বসে আছে কষ্ট নিয়ে বলা দুই কথার মাঝখানে: আগে পাঠানো বিপদ, আর সামনে আসতে থাকা শাস্তি। এর কাজ হলো বুঝিয়ে দেওয়া, স্বস্তির দয়া বা যন্ত্রণার ধাক্কা, কোনোটাই কেন তাদের নাড়ায় না। আয়াতগুলো একটা রোগ ধরিয়ে দিচ্ছে, নিছক নালিশ লিখে রাখছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming the Affliction",
          "bn": "দুর্দশাটা কী, তার নাম"
        },
        "p": [
          {
            "en": "The mufassirun who comment on this line are specific about what the affliction (durr) was. At-Tabari glosses it as the drought and dearth, the distress of hunger and emaciation, that had lain upon them. He cites Ibn Jurayj, who reduces it to a single word: hunger. Al-Baghawi says drought and barrenness. Al-Muyassar keeps the same pairing, drought and hunger. On this reading the mercy in the verse is an entirely worldly one — rain after a dry season, food after want — and the point is that filling an empty stomach would never fill the emptiness that actually mattered.",
            "bn": "যে তাফসীরকারেরা এ আয়াতের ব্যাখ্যা করেন, তাঁরা 'দুর্দশা' (দুর্র) বলতে কী বোঝায় সে ব্যাপারে স্পষ্ট। তাবারী এর অর্থ করেন, তাদের উপর চেপে থাকা খরা ও দুর্ভিক্ষ, ক্ষুধা ও দুর্বলতার কষ্ট। তিনি ইবন জুরাইজের উদ্ধৃতি দেন, যিনি একেই এক শব্দে নামান: ক্ষুধা। বাগাভী বলেন খরা ও অনাবৃষ্টি। মুয়াসসারও একই জোড়া রাখে, খরা ও ক্ষুধা। এ পড়া অনুযায়ী আয়াতের দয়া পুরোপুরি দুনিয়ার দয়া — শুকনো মৌসুমের পর বৃষ্টি, অভাবের পর খাবার। আর কথাটা হলো, খালি পেট ভরালেও যে শূন্যতা আসল, তা কখনো ভরত না।"
          },
          {
            "en": "Al-Qurtubi records this same worldly reading, again on the authority of Ibn Jurayj: the mercy is relief in this life from drought and hunger, and to persist is to carry on in transgression, in misguidance, and in the overstepping of every limit. But he opens with a second possibility. On it the supposition is not about the present life at all; it is as if they were returned to the world and not entered into the Fire and tested afresh, and even then they would persist. The two readings differ over what is being supposed, yet they arrive at a single verdict.",
            "bn": "কুরতুবী দুনিয়াবি এ পড়াটাই নথিবদ্ধ করেন, আবার ইবন জুরাইজের সূত্রেই: দয়া মানে এ জীবনে খরা ও ক্ষুধা থেকে মুক্তি, আর 'লেগে থাকা' মানে অবাধ্যতা, পথভ্রষ্টতা আর সীমা ছাড়িয়ে যাওয়ায় চলতে থাকা। কিন্তু তিনি শুরুই করেন আরেকটা সম্ভাবনা দিয়ে। সে পড়ায় অনুমানটা এ জীবন নিয়ে নয়। যেন তাদের দুনিয়ায় ফিরিয়ে আনা হলো, জাহান্নামে না ঢুকিয়ে নতুন করে পরীক্ষা করা হলো, তবুও তারা লেগেই থাকত। দুই পড়া কী অনুমান করা হচ্ছে তা নিয়ে আলাদা, তবু দুটোই এসে থামে এক রায়ে।"
          },
          {
            "en": "It is worth being careful here. In the passages fetched for this verse, these commentators identify the affliction as drought and hunger; they do not, in these lines, tie it to one dated episode or a named year. As-Suddi, quoted by al-Qurtubi, glosses the transgression they persist in simply as their disobedience. The affliction is left broad, and that breadth is deliberate. Whatever the hardship a person is finally relieved of, the verse says the relief by itself would not have turned a heart that had already made up its mind.",
            "bn": "এখানে একটু সতর্ক থাকা ভালো। এ আয়াতের জন্য আনা লেখাগুলোয় এসব ব্যাখ্যাকার দুর্দশাকে চেনান খরা ও ক্ষুধা হিসেবে; এ কথাগুলোয় তাঁরা একে কোনো নির্দিষ্ট সালের বা নাম ধরে বলা ঘটনার সঙ্গে বাঁধেন না। সুদ্দী, কুরতুবীর উদ্ধৃতিতে, যে অবাধ্যতায় তারা লেগে থাকে তাকে সহজভাবে বলেন তাদের নাফরমানি। দুর্দশাকে খোলা রাখা হয়েছে, আর এই খোলা রাখাটা ইচ্ছাকৃত। একজন মানুষ শেষমেশ যে কষ্ট থেকেই মুক্তি পাক, আয়াত বলছে, কেবল সেই মুক্তি আগে থেকে সিদ্ধান্ত নিয়ে বসা মনকে ফেরাত না।"
          }
        ]
      },
      {
        "h": {
          "en": "To Plunge On, To Grope",
          "bn": "লেগে থাকা, হাতড়ে বেড়ানো"
        },
        "p": [
          {
            "en": "Two words carry the weight of the verdict. The first is la-lajju, which the commentators gloss as tamadaw: they went right on, they kept at it without stopping. Al-Baghawi adds a telling clause — and they did not desist from it. This is the sense of lajaj: not a single slip but a stubborn holding to a course, a refusal to let go of it once begun. At-Tabari renders the phrase in their transgression as in their insolence and their boldness against their Lord, so the persistence is not aimless. It is defiance aimed upward, kept up on purpose.",
            "bn": "রায়ের ভার বহন করছে দুটি শব্দ। প্রথমটি 'লালাজ্জু', যাকে ব্যাখ্যাকারেরা অর্থ করেন 'তামাদাও': তারা চলতেই থাকল, না থেমে লেগে রইল। বাগাভী জুড়ে দেন একটা তাৎপর্যপূর্ণ কথা — আর তারা তা থেকে সরে এল না। এটাই লাজাজের অর্থ: একবারের পদস্খলন নয়, বরং একগুঁয়েভাবে একটা পথ আঁকড়ে থাকা, শুরু করার পর আর না ছাড়া। তাবারী 'তাদের অবাধ্যতায়' কথাটাকে অর্থ করেন তাদের ঔদ্ধত্য আর রবের বিরুদ্ধে ধৃষ্টতায়। তাই এই লেগে থাকা উদ্দেশ্যহীন নয়। এটা উপরের দিকে তাক করা অবাধ্যতা, ইচ্ছে করে টিকিয়ে রাখা।"
          },
          {
            "en": "The second word is yaʿmahun, and the commentators reach for near-synonyms to catch it. At-Tabari, and al-Aʿmash after him, gloss it as yataraddadun — they go to and fro. Ibn Jurayj has them waver and stumble about; al-Muyassar, bewildered and floundering. As-Sadi pictures them roaming inside their disbelief, lost and hesitating. Put together, ʿamah is not confident wickedness marching forward. It is a groping in the dark, movement without sight, a person who has lost the way and keeps circling the same ground. Persistence and blindness are named in one breath: they push on, and they cannot see.",
            "bn": "দ্বিতীয় শব্দ 'ইয়া'মাহূন', আর একে ধরতে ব্যাখ্যাকারেরা কাছাকাছি নানা শব্দ টেনে আনেন। তাবারী, আর তাঁর পরে আ'মাশ, অর্থ করেন 'ইয়াতারাদ্দাদূন' — তারা এদিক-ওদিক দোল খায়। ইবন জুরাইজের বর্ণনায় তারা টলমল করে আর হোঁচট খেয়ে ঘোরে; মুয়াসসারে, দিশেহারা আর এলোমেলো। সাদী আঁকেন, তারা নিজেদের কুফরের ভেতরে ঘুরপাক খায়, পথ হারিয়ে, দোনোমনায়। সব মিলিয়ে 'আমাহ' মানে আত্মবিশ্বাসী মন্দের এগিয়ে চলা নয়। এটা অন্ধকারে হাতড়ানো, চোখ ছাড়া নড়াচড়া, এমন একজন যে পথ হারিয়ে একই জায়গায় বারবার চক্কর কাটে। লেগে থাকা আর অন্ধত্ব এক নিঃশ্বাসে নাম পায়: তারা ঠেলে এগোয়, অথচ দেখতে পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Will Already Decided",
          "bn": "যে ইচ্ছা আগেই সিদ্ধান্ত নিয়ে বসেছে"
        },
        "p": [
          {
            "en": "Ibn Kathir places the verse in a precise category. This kind of statement, he says, belongs to God's knowledge of what will not happen, and of how it would happen if it did. God is not reporting an experiment He ran. He is telling us the outcome of a case that never occurs, and He knows it as surely as He knows what does occur. Ibn Kathir seals the point with a saying of Ad-Dahhak from Ibn Abbas: everything that carries the word law — if — is something that will never be. The supposition is real; the event is not.",
            "bn": "ইবন কাসীর আয়াতটিকে রাখেন এক নির্দিষ্ট শ্রেণিতে। তিনি বলেন, এমন কথা আল্লাহর সেই জ্ঞানের অন্তর্ভুক্ত, যা ঘটবে না তা নিয়ে, আর ঘটলে কীভাবে ঘটত তা নিয়ে। আল্লাহ কোনো চালিয়ে দেখা পরীক্ষার খবর দিচ্ছেন না। তিনি এমন এক ঘটনার পরিণতি বলছেন যা কখনো ঘটে না, আর যা ঘটে তা যেমন নিশ্চিত জানেন, এটাও ঠিক তেমনি জানেন। ইবন কাসীর কথাটা পাকা করেন দাহহাকের সূত্রে ইবন আব্বাসের এক উক্তি দিয়ে — যে কথায় 'লাও' অর্থাৎ 'যদি' আছে, তা এমন কিছু যা কখনো হবে না। অনুমানটা সত্যি, ঘটনাটা নয়।"
          },
          {
            "en": "This is where the verse turns from a report about them into a lesson about the human heart. If neither relief nor understanding would have moved them, then the deciding factor was never on the outside. Give the argument its full force: they were not short of mercy, not short of evidence, not short of a Messenger they already knew to be honest. What they were short of was any willingness to yield. The condition the verse diagnoses is a will that has settled on rebellion, and a settled will is not reached by adding more of what it has already refused.",
            "bn": "এখানেই আয়াতটি তাদের নিয়ে বলা এক বিবরণ থেকে মানুষের মন নিয়ে এক শিক্ষায় মোড় নেয়। স্বস্তি বা বোঝা, কোনোটাই যদি তাদের না নাড়াত, তবে নির্ধারক জিনিসটা কখনো বাইরে ছিল না। যুক্তিটাকে পুরো জোরে বলুন: তাদের দয়ার অভাব ছিল না, প্রমাণের অভাব ছিল না, এমন এক রসূলেরও অভাব ছিল না যাঁকে তারা আগে থেকেই সৎ বলে জানত। যে জিনিসের অভাব ছিল তা হলো নত হওয়ার কোনো ইচ্ছা। আয়াত যে রোগ ধরিয়ে দেয় তা হলো নাফরমানিতে বসে যাওয়া এক ইচ্ছা। আর বসে যাওয়া ইচ্ছার কাছে, সে যা আগেই ফিরিয়ে দিয়েছে তারই আরও জুগিয়ে পৌঁছানো যায় না।"
          },
          {
            "en": "It matters that this is stated as God's knowledge and not as a sentence forcing their hand. The mercy would not have worked because of them, not because it was too small. As-Suddi glosses their transgression as plain disobedience, a thing they themselves do. To read the line as though God withheld a cure that would have healed them turns it upside down. The cure was offered inside the supposition itself, and refused inside it too. The lock was on their side of the door.",
            "bn": "এটা খেয়াল রাখা জরুরি যে কথাটা বলা হয়েছে আল্লাহর জ্ঞান হিসেবে, তাদের হাত বেঁধে দেওয়া কোনো ফরমান হিসেবে নয়। দয়া কাজ করত না তাদের কারণে, দয়া ছোট বলে নয়। সুদ্দী তাদের অবাধ্যতাকে অর্থ করেন সোজা নাফরমানি, যা তারা নিজেরাই করে। আয়াতটাকে এমনভাবে পড়া, যেন আল্লাহ এমন এক ওষুধ আটকে রাখলেন যা তাদের সারিয়ে দিত, পুরো ব্যাপারটাকে উল্টে দেয়। ওষুধটা অনুমানের ভেতরেই দেওয়া হয়েছিল, আর অনুমানের ভেতরেই ফিরিয়ে দেওয়া হয়েছিল। ছিটকিনিটা ছিল দরজার তাদের পাশে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prayer That Fades",
          "bn": "মিলিয়ে যাওয়া দোয়া"
        },
        "p": [
          {
            "en": "As-Sadi draws out the psychology the verse assumes. He explains it as a statement of how intense their rebellion and obstinacy are. When affliction strikes such people, he says, they call upon God to lift it so that they may believe, or He tests them with it precisely so that they will return to Him. And then, when He lifts the affliction, they persist — they carry straight on in their transgression, roaming inside their disbelief, bewildered and wavering. The prayer was real while the pain lasted. It simply did not outlast the relief.",
            "bn": "সাদী আয়াতের ধরে নেওয়া মনস্তত্ত্বটা খুলে দেন। তিনি একে ব্যাখ্যা করেন তাদের বিদ্রোহ আর একগুঁয়েমি কতটা তীব্র, তার বিবৃতি হিসেবে। এমন লোকের উপর যখন দুর্দশা নামে, তিনি বলেন, তারা আল্লাহকে ডাকে তা তুলে নিতে, যেন তারা বিশ্বাস আনে; কিংবা আল্লাহ তাদের সেই দুর্দশা দিয়ে পরীক্ষা করেন ঠিক এজন্যই যেন তারা তাঁর দিকে ফেরে। তারপর তিনি যখন দুর্দশা তুলে নেন, তারা লেগেই থাকে। তারা সোজা তাদের অবাধ্যতায় চলে, কুফরের ভেতরে ঘুরপাক খায়, দিশেহারা আর দোনোমনায়। যন্ত্রণা যতক্ষণ ছিল, দোয়াটা ছিল খাঁটি। স্বস্তির পর সেটা আর টিকল না।"
          },
          {
            "en": "As-Sadi anchors this in another Qur'anic scene: the state of such people aboard a ship. In the storm they call on God alone, making their religion sincerely His and forgetting whatever they set beside Him; then, once He brings them safely to land, they go back to wronging the earth with the very things they had dropped. That is the pattern the verse holds up, and it is where the mirror turns. The danger it names is not only theirs. Do I reach for God chiefly when cornered, pray hardest when the news is bad, then let it all loosen once the pressure lifts?",
            "bn": "সাদী এটা বাঁধেন তাঁর উদ্ধৃত আরেকটি কুরআনি দৃশ্যে: নৌকায় ওঠা অবস্থায় এমন লোকের হাল। ঝড়ের মধ্যে তারা কেবল আল্লাহকেই ডাকে, দ্বীনকে একনিষ্ঠভাবে তাঁরই করে, আর যা কিছু তারা তাঁর পাশে বসাত তা ভুলে যায়। তারপর তিনি যখন তাদের নিরাপদে ডাঙায় তোলেন, তারা ঠিক সেই জিনিসগুলো দিয়েই আবার জমিনে অন্যায় করতে ফিরে যায়, যা তারা ছেড়ে দিয়েছিল। আয়াত এই ছবিটাই তুলে ধরে, আর এখানেই আয়নাটা ঘোরে। এটি যে বিপদের নাম দেয় তা কেবল তাদের নয়। আমি কি মূলত কোণঠাসা হলেই আল্লাহকে ধরি, খবর খারাপ হলেই সবচেয়ে বেশি দোয়া করি, তারপর চাপ সরতেই পুরোটা আলগা হতে দিই?"
          }
        ]
      },
      {
        "h": {
          "en": "What the Qur'an Answers With",
          "bn": "কুরআন যা দিয়ে জবাব দেয়"
        },
        "p": [
          {
            "en": "Ibn Kathir does not leave the claim alone; he sets two verses beside it. The first: had God known any good in them He would have made them hear, and even had He made them hear they would have turned away in aversion (8:23). The second: if you could see them halted over the Fire, wishing to be returned so as not to deny their Lord's signs and to be believers — yet if they were returned they would go back to the very thing they were forbidden (6:27 to 6:29). Both verses say the counterfactual out loud: even a second chance would end where the first did.",
            "bn": "ইবন কাসীর দাবিটাকে একা দাঁড়িয়ে থাকতে দেন না; তিনি পাশে রাখেন আরও দুটি আয়াত। প্রথমটি: আল্লাহ যদি তাদের মধ্যে কোনো কল্যাণ জানতেন তবে তিনি তাদের শুনিয়ে দিতেন, আর শুনিয়ে দিলেও তারা মুখ ফিরিয়ে সরে যেত (৮:২৩)। দ্বিতীয়টি: তুমি যদি দেখতে, যখন তাদের আগুনের সামনে দাঁড় করানো হবে, তারা বলবে কতই না ভালো হতো যদি ফিরিয়ে দেওয়া হতো, তবে তারা রবের নিদর্শন অস্বীকার করত না আর মুমিনদের দলে থাকত — অথচ ফিরিয়ে দেওয়া হলে তারা যা থেকে নিষেধ করা হয়েছিল সেখানেই ফিরে যেত (৬:২৭ থেকে ৬:২৯)। দুটি আয়াতই অনুমানের জবাবটা খোলাখুলি বলে দেয়: দ্বিতীয় সুযোগও সেখানেই শেষ হতো, যেখানে প্রথমটা হয়েছিল।"
          },
          {
            "en": "That returning is the same case al-Qurtubi raised earlier, and these parallels tie the two readings together. It is worth being plain about the sources. The commentators fetched for this verse build the point entirely from the Qur'an — this line read against its neighbours and against verses like these. In these passages they attach no prophetic narration to 23:75, and none should be manufactured to fill the slot. The weight the verse carries, it carries on the Qur'an's own testimony, and that is authority enough.",
            "bn": "এই ফিরে যাওয়াই সেই ব্যাপার, কুরতুবী আগে যা তুলেছিলেন, আর এ আয়াতগুলো দুই পড়াকে এক সুতোয় বাঁধে। এখানে সূত্র নিয়ে সোজাসুজি বলা ভালো। এ আয়াতের জন্য আনা ব্যাখ্যাকারেরা পুরো কথাটা গড়ে তোলেন কুরআন থেকেই — এ আয়াতকে তার প্রতিবেশী আয়াতের পাশে আর এমন আয়াতগুলোর পাশে রেখে। এসব লেখায় তাঁরা ২৩:৭৫-এর সঙ্গে কোনো নববী বর্ণনা জোড়েন না, আর ফাঁক ভরাতে বানিয়েও কিছু জোড়া উচিত নয়। আয়াত যে ওজন বহন করে, তা বহন করে কুরআনের নিজের সাক্ষ্যেই, আর সেটাই যথেষ্ট প্রমাণ।"
          }
        ]
      },
      {
        "h": {
          "en": "This Names No One Living",
          "bn": "এটি কোনো জীবিত মানুষের নাম নয়"
        },
        "p": [
          {
            "en": "One thing must be said plainly, in both languages. This verse describes the people the passage describes — a group whose will had set itself against their Lord — and it licenses nothing against any living person or community. It is not a tool for declaring someone beyond hope, not a verdict to hang on a relative who prays only in a crisis, not grounds to write off a neighbour, a people or a faith. The verse names a condition of the heart that God alone sees in full. No reader is given the sight to pin it on another.",
            "bn": "একটা কথা দুই ভাষাতেই সোজাসুজি বলা দরকার। এ আয়াত সেই লোকদের বর্ণনা দেয় যাদের কথা আয়াতটি বলছে, এমন এক দল যাদের ইচ্ছা তাদের রবের বিরুদ্ধে বসে গিয়েছিল। আর এটি কোনো জীবিত ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। এটা কাউকে 'আশাহীন' ঘোষণা করার হাতিয়ার নয়, কেবল বিপদে দোয়া করা কোনো আত্মীয়ের ঘাড়ে চাপানো রায় নয়, কোনো প্রতিবেশী, জাতি বা ধর্মকে উড়িয়ে দেওয়ার ভিত্তিও নয়। আয়াত মনের এমন এক দশার নাম দেয় যা পুরোপুরি কেবল আল্লাহই দেখেন। কোনো পাঠককে সেই দৃষ্টি দেওয়া হয়নি যে সে তা অন্যের গায়ে সেঁটে দেবে।"
          },
          {
            "en": "So the honest use of the verse runs inward. If the deciding thing is the will and not the weather, then the will is what a person guards. Keep the turning to God alive when nothing is forcing it. Let an answered prayer, a lifted worry, a good result become a reason to draw nearer rather than a signal to relax. Make gratitude a form of remembrance, not only distress. And take one quiet comfort: the verse describes those who chose their transgression, and the very fear of finding this pattern in oneself is a sign the heart has not gone blind.",
            "bn": "তাই আয়াতটির খাঁটি ব্যবহার ভেতরের দিকে মুখ করে। নির্ধারক জিনিসটা যদি হয় ইচ্ছা, আবহাওয়া নয়, তবে মানুষ পাহারা দেয় তার ইচ্ছাকেই। কিছুতে বাধ্য না করলেও আল্লাহমুখী থাকাটা জীবিত রাখুন। কবুল হওয়া দোয়া, সরে যাওয়া দুশ্চিন্তা, ভালো ফলাফল যেন হয় আরও কাছে আসার কারণ, ঢিল দেওয়ার সংকেত নয়। কৃতজ্ঞতাকে বানান জিকিরের একটা রূপ, কেবল বিপদকে নয়। আর একটুখানি প্রশান্তিও নিন: আয়াত তাদের কথা বলছে যারা নিজেদের অবাধ্যতা বেছে নিয়েছিল। নিজের ভেতরে এ ধাঁচ খুঁজে পাওয়ার ভয়টুকুই ইশারা দেয় যে মনটা অন্ধ হয়ে যায়নি।"
          }
        ]
      }
    ]
  },
  "23:78": {
    "sections": [
      {
        "h": {
          "en": "The Gift Named Three Times",
          "bn": "তিনবার গোনা নিয়ামত"
        },
        "p": [
          {
            "en": "The verse arrives at a hard moment in the surah. Just before it, a door of severe punishment has been opened and those inside are left in despair (23:77). Then the tone turns completely. Ibn Kathir reads this turn as a deliberate reminder of Allah's blessings and His immense power: after the warning, He mentions what He has given His servants — hearing, sight, and hearts through which they come to know things and draw lessons from the signs around them. The three gifts are set down right where a person might have expected only threat.",
            "bn": "আয়াতটি আসে সূরার এক কঠিন মুহূর্তে। এর ঠিক আগে কঠিন শাস্তির দরজা খুলে দেওয়া হয়েছে, আর ভেতরের লোকেরা পড়ে আছে হতাশায় (২৩:৭৭)। তারপর সুরটা পুরো বদলে যায়। ইবন কাসীর এই মোড়কে দেখেন আল্লাহর নিয়ামত আর তাঁর অসীম কুদরত মনে করিয়ে দেওয়ার এক ইচ্ছাকৃত পদক্ষেপ হিসেবে। সতর্কবাণীর পর তিনি বলেন তিনি তাঁর বান্দাদের কী দিয়েছেন: শোনা, দেখা আর অন্তর, যা দিয়ে তারা জিনিস চেনে আর চারপাশের নিদর্শন থেকে শিক্ষা নেয়। ঠিক যেখানে একজন শুধু হুমকিই আশা করত, সেখানে বসিয়ে দেওয়া হলো তিনটি নিয়ামত।"
          },
          {
            "en": "He produced for you the hearing and the sight and the hearts. As-Sa'di stops on why the gifts are named at all: they are favours that call the one who has them toward gratitude and toward fulfilling the right owed for them. A gift can be received as pleasure and forgotten, or received as a claim. The verse frames these three as a claim. They were not made to sit idle; each was made for a task, and naming them together is a way of asking what the tasks have come to.",
            "bn": "তিনিই তোমাদের জন্য বানিয়েছেন শোনা, দেখা আর অন্তর। সাদী থামেন এই প্রশ্নে যে নিয়ামতগুলোর নাম আদৌ নেওয়া হলো কেন: এগুলো এমন অনুগ্রহ যা এগুলোর মালিককে ডাকে শুকরিয়ার দিকে আর এগুলোর হক আদায়ের দিকে। নিয়ামত নেওয়া যায় নিছক আরাম হিসেবে, তারপর ভুলে যাওয়া যায়। আবার নেওয়া যায় এক দায় হিসেবে। আয়াত এই তিনটিকে দায় হিসেবেই দাঁড় করায়। এগুলো অলস পড়ে থাকার জন্য বানানো হয়নি। প্রতিটির জন্য আছে একটা কাজ, আর একসঙ্গে এদের নাম নেওয়া যেন জিজ্ঞেস করা সেই কাজগুলোর কী দশা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearing Placed First",
          "bn": "কান কেন আগে"
        },
        "p": [
          {
            "en": "The list opens with hearing. Al-Muyassar glosses it simply: the hearing was produced so that you may perceive the things that are heard. As-Sa'di adds where the benefit lands — you grasp with it what serves you in your religion and your worldly life. Of the three, hearing is the faculty by which a person first receives revelation, since the Qur'an reaches most people as recitation before it is anything else. To be given a working ear is, in this surah, to be given the very means of receiving the message.",
            "bn": "তালিকা শুরু হয় শোনা দিয়ে। মুয়াসসার সাদামাটাভাবে অর্থ করেন: শোনার শক্তি বানানো হয়েছে যাতে তোমরা যা শোনা যায় তা বুঝতে পার। সাদী যোগ করেন লাভটা কোথায় গিয়ে ঠেকে — এর দিয়ে তুমি ধরো যা তোমার দ্বীন আর দুনিয়ার কাজে লাগে। তিনটির মধ্যে শোনাই সেই শক্তি যা দিয়ে একজন প্রথম ওহি পায়। কারণ কুরআন বেশির ভাগ মানুষের কাছে আগে পৌঁছায় তিলাওয়াত হিসেবে, তারপর অন্য কিছু হিসেবে। একটা সচল কান পাওয়া মানে, এই সূরায়, বার্তা পাওয়ার আসল মাধ্যমটাই পাওয়া।"
          },
          {
            "en": "That makes an earlier line in the same surah cut sharply. Allah had said to these people, My verses had already been recited to you, but you were turning back on your heels (23:66), in arrogance, speaking evil by night (23:67). The ear was there and working; the recitation reached it; and they turned their backs. So when the verse now reminds them that He is the One who produced their hearing, it is naming the exact instrument they refused to use for its purpose. The gift and the refusal are set against each other.",
            "bn": "এতে এই সূরারই আগের একটা কথা তীক্ষ্ণ হয়ে বাজে। এদের উদ্দেশে আল্লাহ বলেছিলেন, আমার আয়াত তোমাদের কাছে পড়ে শোনানো হত, কিন্তু তোমরা গোড়ালির ভরে পিছনে ঘুরে দাঁড়াতে (২৩:৬৬), অহংকারে, রাতের বেলা আজেবাজে বকতে (২৩:৬৭)। কান ছিল, সচলও ছিল; তিলাওয়াত সেই কানে পৌঁছেছিল; আর এরা পিঠ ফিরিয়েছিল। তাই আয়াত যখন এখন মনে করিয়ে দেয় যে তিনিই এদের শোনার শক্তি বানিয়েছেন, তখন সে ঠিক সেই যন্ত্রটারই নাম নিচ্ছে যা এরা নিজের কাজে লাগাতে অস্বীকার করেছিল। নিয়ামত আর অস্বীকার মুখোমুখি দাঁড় করানো হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Sight and the Seen",
          "bn": "চোখ ও যা দেখা যায়"
        },
        "p": [
          {
            "en": "Sight comes next in the verse, and the commentators keep the same pattern they used for hearing. As-Sa'di: the sight was produced so that you perceive the things seen, and benefit by them in your affairs. Al-Baghawi lists it plainly with the rest — so that you may hear and see and reason. The order itself is worth noticing: the verse names hearing before sight, and it is by hearing that the recited word arrives, while it is by sight that a person reads the standing signs of the world. The two together cover both ways the truth is offered.",
            "bn": "আয়াতে এরপর আসে দেখা, আর তাফসীরকারেরা শোনার বেলায় যে ধারা রেখেছিলেন সেটাই রাখেন। সাদী: দেখার শক্তি বানানো হয়েছে যাতে তোমরা যা দেখা যায় তা বুঝতে পার আর নিজেদের কাজে তা থেকে ফায়দা নিতে পার। বাগাভী বাকিগুলোর সঙ্গে সোজাসুজি সাজিয়ে বলেন — যাতে তোমরা শোনো, দেখো আর বুদ্ধি খাটাও। ক্রমটাও খেয়াল করার মতো: আয়াত শোনার নাম নেয় দেখার আগে, আর শোনা দিয়েই পড়ে শোনানো বাণী কানে আসে, দেখা দিয়ে মানুষ জগতের দাঁড়ানো নিদর্শনগুলো পড়ে। দুটো মিলে সত্য পৌঁছানোর দুই পথকেই ঢেকে দেয়।"
          },
          {
            "en": "Ibn Kathir draws the two senses to their point. Hearing and sight, he says, are means through which people come to know things and take a lesson from them — from the signs in creation that attest to the oneness of Allah and show that He does what He wills and chooses what He wills. On this reading the ear and eye are not there merely to gather sound and colour. They are there to carry a person from the sign to its Maker. A faculty stopped at the surface has been used at a fraction of what it was built for.",
            "bn": "ইবন কাসীর দুই ইন্দ্রিয়কে তাদের আসল কথায় টেনে আনেন। শোনা আর দেখা, তিনি বলেন, এমন মাধ্যম যা দিয়ে মানুষ জিনিস চেনে আর তা থেকে শিক্ষা নেয় — সৃষ্টির সেসব নিদর্শন থেকে যা আল্লাহর একত্বের সাক্ষ্য দেয় আর দেখায় যে তিনিই যা চান তা করেন, যা চান তা বেছে নেন। এই পাঠে কান আর চোখ কেবল শব্দ আর রং জমা করার জন্য নয়। এগুলো আছে মানুষকে নিদর্শন থেকে তার পেছনের সত্তার কাছে নিয়ে যাওয়ার জন্য। যে শক্তি উপরিভাগেই থেমে যায়, তা যা জন্য গড়া তার সামান্য অংশেই খাটানো হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Heart That Understands",
          "bn": "যে অন্তর বোঝে"
        },
        "p": [
          {
            "en": "The third gift is al-afʾidah, which the translation renders as hearts. Here the commentators are strikingly united, and it matters for how the word is read. Ibn Kathir says plainly that the afʾidah are the intellects and understandings by which people grasp things. As-Sa'di says they are the intellects by which you perceive things and are set apart from the beasts. At-Tabari calls them the hearts by which you comprehend. The heart in this verse is not the seat of feeling; it is the organ of reason and discernment, where a person weighs what the ear and eye bring in.",
            "bn": "তৃতীয় নিয়ামত আল-আফইদাহ, অনুবাদে যাকে বলা হয়েছে অন্তর। এখানে তাফসীরকারেরা লক্ষণীয়ভাবে একমত, আর শব্দটা কীভাবে বোঝা হবে তার জন্য এটা জরুরি। ইবন কাসীর সোজাসুজি বলেন, আফইদাহ মানে বুদ্ধি আর বোঝার শক্তি, যা দিয়ে মানুষ জিনিস ধরে। সাদী বলেন, আফইদাহ হলো সেই বুদ্ধি যা দিয়ে তোমরা জিনিস বোঝ আর যা দিয়ে তোমরা পশু থেকে আলাদা হও। তাবারী এগুলোকে বলেন সেই অন্তর যা দিয়ে তোমরা অনুধাবন কর। এই আয়াতে অন্তর অনুভবের জায়গা নয়; এটা বুদ্ধি আর বিচারবোধের অঙ্গ, যেখানে মানুষ কান আর চোখের আনা জিনিস মেপে দেখে।"
          },
          {
            "en": "As-Sa'di presses the point with a stark question. Suppose the hearing, the sight and the intellect were taken away, so that you were left deaf, blind and unable to reason — what then would your condition be, and what of your necessities and your very completeness would be lost? The question is not rhetorical decoration. It shows that these three are not conveniences added to a life; they are close to the whole of what makes a life human. To hold them and not use the heart to reason from what they gather is to keep the instrument that separates a person from the animals and leave it unused.",
            "bn": "সাদী কথাটা চেপে ধরেন এক কঠিন প্রশ্ন দিয়ে। ধরো শোনা, দেখা আর বুদ্ধি কেড়ে নেওয়া হলো, তুমি রয়ে গেলে বধির, অন্ধ আর বুদ্ধিহীন — তখন তোমার দশা কী হতো, আর তোমার প্রয়োজন ও পূর্ণতার কতটা হারিয়ে যেত? এ প্রশ্ন নিছক সাজানো কথা নয়। এটা দেখায়, এই তিনটি জীবনের সঙ্গে যোগ করা কোনো সুবিধা নয়; বরং যা একটা জীবনকে মানুষের জীবন বানায় তার প্রায় পুরোটাই এগুলো। এগুলো ধরে রেখেও যা এরা জোগায় তা থেকে অন্তর দিয়ে বুদ্ধি না খাটানো মানে, যে যন্ত্র মানুষকে পশু থেকে আলাদা করে সেটা হাতে রেখেও কাজে না লাগানো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Proof Inside the Blessing",
          "bn": "নিয়ামতের ভেতরে দলিল"
        },
        "p": [
          {
            "en": "At-Tabari reads the verse as more than a list of favours. He hears it addressed to a particular audience: O you who deny the resurrection after death. It is God who brought into being for you the hearing you hear with, the sight you see with, and the hearts you understand with. And then Tabari draws the conclusion the address was aiming at — so how could it be beyond Him who originated all this to restore it after it has perished and gone? He brings the whole of it into being when He wills and makes it pass away when He wills.",
            "bn": "তাবারী আয়াতটিকে পড়েন নিছক নিয়ামতের তালিকার চেয়ে বেশি কিছু হিসেবে। তিনি শোনেন এটি এক বিশেষ শ্রোতাকে বলা হচ্ছে: হে তোমরা যারা মৃত্যুর পর পুনরুত্থান অস্বীকার কর। আল্লাহই তোমাদের জন্য অস্তিত্বে এনেছেন সেই কান যা দিয়ে তোমরা শোনো, সেই চোখ যা দিয়ে তোমরা দেখো, আর সেই অন্তর যা দিয়ে তোমরা বোঝো। এরপর তাবারী টানেন সেই সিদ্ধান্ত যেদিকে সম্বোধনটা লক্ষ্য রাখছিল — তাহলে যিনি এসব প্রথমবার সৃষ্টি করলেন, মরে-মিলিয়ে যাওয়ার পর তা আবার ফিরিয়ে আনা তাঁর পক্ষে কঠিন হবে কী করে? তিনিই তো এর পুরোটা অস্তিত্বে আনেন যখন চান, আর মিলিয়ে দেন যখন চান।"
          },
          {
            "en": "The verb the verse uses for the gift carries this. He anshaʾa — produced, originated, brought into first existence — the hearing, the sight, the hearts. The passage that follows presses the same nerve: it is He who has multiplied you throughout the earth and to Him you will be gathered (23:79); it is He who gives life and causes death, and His is the alternation of night and day; then will you not reason? (23:80). The faculties are made part of the argument. The very intellect given to a person is the faculty by which he should reason that the God who first shaped him can raise him again.",
            "bn": "নিয়ামতের জন্য আয়াত যে ক্রিয়া বেছেছে তা এই কথাই বহন করে। তিনি আনশাআ করেছেন শোনা, দেখা আর অন্তর, অর্থাৎ বানিয়েছেন, উৎপত্তি ঘটিয়েছেন, প্রথমবার অস্তিত্বে এনেছেন। এরপরের আয়াতগুলো ঠিক একই স্নায়ুতে চাপ দেয়: তিনিই তোমাদের পৃথিবীতে ছড়িয়ে দিয়েছেন আর তাঁর কাছেই তোমাদের একত্র করা হবে (২৩:৭৯), তিনিই জীবন দেন আর মৃত্যু ঘটান, আর দিন-রাতের পালাবদল তাঁরই হাতে; তবুও কি তোমরা বুঝবে না? (২৩:৮০)। ইন্দ্রিয়গুলোকে দলিলের অংশ বানানো হয়েছে। মানুষকে দেওয়া সেই বুদ্ধিই সেই শক্তি যা দিয়ে তার বোঝা উচিত, যিনি তাকে প্রথমবার গড়েছেন তিনিই তাকে আবার তুলতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Thanks Fall Short",
          "bn": "যেখানে শুকরিয়া কম পড়ে"
        },
        "p": [
          {
            "en": "Then the verse closes with a verdict: little do you give thanks. Al-Qurtubi records two ways the phrase has been read. On the first, it means you give thanks only a little. On the second — which he introduces as a reported view — it means you do not give thanks at all, the little standing for none. He does not force a choice between them, and the two readings sit side by side: either the gratitude is real but scant, or the word softens an outright absence. Al-Baghawi takes it in the plainer sense, that they did not thank for these blessings.",
            "bn": "তারপর আয়াত শেষ হয় এক রায়ে: তোমরা কৃতজ্ঞতা অল্পই কর। কুরতুবী এই কথার দুটো পাঠ তুলে ধরেন। প্রথমটিতে অর্থ দাঁড়ায়, তোমরা শুকরিয়া অল্পই কর। দ্বিতীয়টিতে, যাকে তিনি এক বর্ণিত মত হিসেবে আনেন, অর্থ দাঁড়ায়, তোমরা মোটেও শুকরিয়া কর না, এখানে অল্প বলতে বোঝানো হচ্ছে কিছুই না। তিনি এদের মধ্যে একটা বেছে নিতে চাপ দেন না, দুই পাঠ পাশাপাশিই থাকে: হয় শুকরিয়া সত্য কিন্তু নগণ্য, নয়তো শব্দটা একেবারে না-থাকাকেই নরম করে বলছে। বাগাভী নেন আরও সাদা অর্থে, যে এরা এসব নিয়ামতের শুকরিয়া করেনি।"
          },
          {
            "en": "The other commentators keep the sting sharp. At-Tabari: you who deny thank the goodness of Allah for your hearing, sight and hearts only a little. Al-Muyassar: your thanks for these blessings, poured on you without pause, is so little as to be beneath mention. As-Sa'di ends on the same imbalance: your thanks are few while the favours keep arriving one after another. Ibn Kathir ties the scarcity to a wider truth, citing another verse: most of mankind, however eager you are, will not believe (12:103). The verse is not scolding a stray lapse; it is naming a settled human habit of taking the standing gifts for granted.",
            "bn": "বাকি তাফসীরকারেরা খোঁচাটা ধারালোই রাখেন। তাবারী: হে অস্বীকারকারীরা, তোমাদের শোনা, দেখা আর অন্তরের জন্য আল্লাহর দয়ার শুকরিয়া তোমরা অল্পই কর। মুয়াসসার: এত কিছুর পরও, একটানা তোমাদের উপর ঢেলে দেওয়া এসব নিয়ামতের শুকরিয়া তোমাদের এতই কম যে তা উল্লেখের যোগ্যই নয়। সাদী শেষ করেন সেই একই ভারসাম্যহীনতায় — তোমাদের শুকরিয়া অল্প, অথচ অনুগ্রহ আসছেই একের পর এক। ইবন কাসীর এই স্বল্পতাকে জুড়ে দেন এক বড় সত্যের সঙ্গে, আরেক আয়াত টেনে: অধিকাংশ মানুষ, তুমি যতই চাও, বিশ্বাস করবে না (১২:১০৩)। আয়াত কোনো বিক্ষিপ্ত ভুলের জন্য বকছে না; এটা মানুষের এক পাকা স্বভাবের নাম নিচ্ছে, দাঁড়িয়ে থাকা নিয়ামতগুলোকে গা-সওয়া করে নেওয়ার স্বভাব।"
          }
        ]
      },
      {
        "h": {
          "en": "Faculties Rightly Spent",
          "bn": "ইন্দ্রিয় সঠিক কাজে লাগানো"
        },
        "p": [
          {
            "en": "None of the commentaries consulted here attaches a hadith directly to this verse; the tafsir on 23:78 stays with the meaning of the words. But there is a well-known sound narration that paints, from the other side, what it looks like when these faculties are spent on their purpose, and it is worth setting beside the verse for that reason and not as a comment on it. It comes in Sahih al-Bukhari, from Abu Hurayra (RA), who reports the Prophet ﷺ describing seven whom Allah will shade on a day of no shade but His.",
            "bn": "এখানে যে তাফসীরগুলো দেখা হয়েছে তার একটিও এই আয়াতের সঙ্গে সরাসরি কোনো হাদীস জোড়ে না; ২৩:৭৮-এর তাফসীর শব্দের অর্থেই থেমে থাকে। তবে একটি সুপরিচিত সহীহ বর্ণনা আছে, যা উল্টো দিক থেকে এঁকে দেখায় এই শক্তিগুলো নিজের কাজে খরচ হলে দেখতে কেমন হয়; আয়াতের পাশে এটা রাখা যায় সেই কারণেই, আয়াতের ব্যাখ্যা হিসেবে নয়। এটি এসেছে সহীহ বুখারীতে, আবু হুরায়রা (রাঃ) থেকে, যিনি বর্ণনা করেন নবী ﷺ ৭ জন মানুষের কথা বলেছেন যাদের আল্লাহ ছায়া দেবেন সেদিন যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না।"
          },
          {
            "en": "Among the seven he named a just ruler; a youth who grew up in the worship of his Lord; a man whose heart is attached to the mosques; two who love one another for Allah's sake, meeting upon that and parting upon that; a man called by a woman of rank and beauty who answers, I fear Allah; a man who gives charity so secretly that his left hand does not know what his right hand spends; and a man who remembers Allah in private and his eyes overflow with tears. The wording is Bukhari's own, and its place in his Sahih is its grading.",
            "bn": "সেই ৭ জনের মধ্যে তিনি নাম নিয়েছেন এক ন্যায়পরায়ণ শাসকের; এক যুবকের যে তার রবের ইবাদতে বেড়ে উঠেছে; এমন একজনের যার অন্তর মসজিদের সঙ্গে ঝুলে আছে; দুজনের যারা আল্লাহর জন্য একে অপরকে ভালোবাসে, এর উপরই মিলিত হয় আর এর উপরই বিদায় নেয়; এমন একজনের যাকে মর্যাদা ও রূপের অধিকারী কোনো নারী ডাকে আর সে জবাব দেয়, আমি আল্লাহকে ভয় করি; এমন একজনের যে এত গোপনে দান করে যে তার বাঁ হাত জানে না ডান হাত কী খরচ করল; আর এমন একজনের যে নির্জনে আল্লাহকে স্মরণ করে আর তার দুচোখ অশ্রুতে ভরে ওঠে। শব্দগুলো বুখারীর নিজের, আর তাঁর সহীহে এর স্থানই এর মান।"
          },
          {
            "en": "Read next to 23:78, the portrait lines up with the three gifts. The heart attached to the mosque is the fuʾād put to its work; the eyes that overflow in private remembrance are sight turned toward its Giver; the youth raised in worship is a whole set of faculties spent, from the start, on what they were made for. This is what thanks looks like when it is more than a word — not a phrase added after the blessing, but the blessing itself running in the direction it was built to run.",
            "bn": "২৩:৭৮-এর পাশে পড়লে এই ছবিটা তিনটি নিয়ামতের সঙ্গে মিলে যায়। মসজিদের সঙ্গে ঝুলে থাকা অন্তর হলো নিজের কাজে লাগানো অন্তর; নির্জন স্মরণে ভরে ওঠা দুচোখ হলো তার দাতার দিকে ফেরানো দৃষ্টি; ইবাদতে বেড়ে ওঠা যুবক হলো গোড়া থেকেই যা জন্য গড়া সেই কাজে খরচ হওয়া গোটা একগুচ্ছ শক্তি। শুকরিয়া যখন নিছক একটা শব্দের বেশি হয়, তখন দেখতে এমনই লাগে — নিয়ামতের পরে জুড়ে দেওয়া কোনো বুলি নয়, বরং নিয়ামত নিজেই যেদিকে চলার জন্য গড়া সেদিকেই চলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Little Made Much",
          "bn": "অল্প যখন অনেক"
        },
        "p": [
          {
            "en": "As-Sa'di draws the verse to where it was always heading. Will you not, then, give thanks to the One who favoured you with these blessings, so that you stand upon His oneness and His obedience? Gratitude, on this reading, is not the end of the matter but the door to it: to thank rightly is to worship the Giver alone and to obey Him. Al-Qurtubi says the verse acquainted its hearers with the abundance of God's blessings and the perfection of His power. The little that they returned was measured against exactly that abundance, which is why so small a word carries so much weight.",
            "bn": "সাদী আয়াতটিকে সেই জায়গায় টেনে আনেন যেদিকে এটি বরাবরই যাচ্ছিল। তবে কি তোমরা সেই সত্তার শুকরিয়া করবে না যিনি এসব নিয়ামত দিয়ে তোমাদের ধন্য করেছেন, যাতে তোমরা তাঁর একত্ব আর তাঁর আনুগত্যের উপর দাঁড়াও? এই পাঠে শুকরিয়া বিষয়টার শেষ নয়, বরং তার দরজা: ঠিকভাবে শুকরিয়া করা মানে একমাত্র দাতারই ইবাদত করা আর তাঁর আনুগত্য করা। কুরতুবী বলেন, আয়াত তার শ্রোতাদের চিনিয়ে দিয়েছে আল্লাহর নিয়ামতের প্রাচুর্য আর তাঁর কুদরতের পূর্ণতা। এরা যে অল্পটুকু ফিরিয়ে দিল, তা মাপা হলো ঠিক সেই প্রাচুর্যের বিপরীতে, তাই এত ছোট একটা শব্দ এত ভার বহন করে।"
          },
          {
            "en": "For the reader the verse becomes a quiet audit. The same three faculties are working right now, on this page. The question is not whether I possess them but where I am aiming them, and whether the heart is still reasoning from what the ear and eye bring in, or has gone slack. The turning-away of 23:66 was not a defect of the ear; it was a refusal of the will while the ear worked perfectly. So the counting little is fixed not by feeling more grateful but by spending one faculty, today, on the truth it was made to find.",
            "bn": "পাঠকের জন্য আয়াতটি হয়ে ওঠে এক নীরব হিসাব। ঠিক এই মুহূর্তে, এই পাতাতেই সেই তিনটি শক্তি কাজ করছে। প্রশ্ন এই নয় যে এগুলো আমার আছে কি না, বরং আমি এগুলোকে কোন দিকে তাক করছি, আর অন্তর কি এখনো কান-চোখের আনা জিনিস থেকে বুদ্ধি খাটাচ্ছে, নাকি ঢিলে হয়ে গেছে। ২৩:৬৬-এর পিঠ ফেরানো কানের কোনো ত্রুটি ছিল না; কান নিখুঁত কাজ করছিল, ত্রুটি ছিল ইচ্ছার অস্বীকারে। তাই শুকরিয়া অল্প হওয়ার এই দশা সারে বেশি কৃতজ্ঞ অনুভব করে নয়, বরং আজই কোনো একটা শক্তিকে সেই সত্যের কাজে খরচ করে যা খুঁজতে সেটি গড়া হয়েছিল।"
          }
        ]
      }
    ]
  },
  "23:84": {
    "sections": [
      {
        "h": {
          "en": "The Question Turned Back",
          "bn": "প্রশ্নটা ফিরিয়ে দেওয়া"
        },
        "p": [
          {
            "en": "The surah has just laid out gift upon gift: the ears and eyes and hearts made for us (23:78), a people multiplied and scattered across the earth (23:79), the giving of life, the dealing of death, the steady turning of night into day (23:80). To all of it the deniers offered a single reply, that resurrection was nothing but the legends of the ancients (23:83). At this point the response is not a fresh proof stacked upon the others. It is a question put straight back to them, and the Prophet ﷺ is told to ask it aloud: to whom belongs the earth and everyone in it?",
            "bn": "সূরাটি একটু আগেই একের পর এক নিয়ামত সাজিয়ে দিয়েছে: আমাদের জন্য বানানো কান, চোখ আর অন্তর (২৩:৭৮), পৃথিবীজুড়ে ছড়িয়ে দেওয়া অসংখ্য মানুষ (২৩:৭৯), জীবন দেওয়া, মৃত্যু ঘটানো, রাতকে দিনে বদলে দেওয়ার নিরবচ্ছিন্ন পালা (২৩:৮০)। এসবের জবাবে অস্বীকারকারীদের একটাই কথা, পুনরুত্থান তো পুরনো কালের কিসসা ছাড়া কিছু নয় (২৩:৮৩)। এখানে এসে জবাব আর কোনো নতুন প্রমাণ নয়। এবার প্রশ্নটা সরাসরি তাদের দিকেই ফেরানো হলো, আর নবী ﷺ-কে বলা হলো তা উচ্চস্বরে জিজ্ঞেস করতে: এ পৃথিবী আর এর ভেতরে যা কিছু আছে, সব কার?"
          },
          {
            "en": "At-Tabari reads the address with care. God tells His Prophet, he explains, to say to those of his people who denied the Hereafter: to whom belongs the ownership of the earth and whoever is in it of creation, if you truly know its owner? Al-Baghawi names them the people of Makkah and fills in what their knowledge is being measured against — if you know its Creator and its Owner. The single command word, qul, \"say,\" places the question on the Prophet's own tongue, so that it reaches them as a demand for an answer rather than as a musing.",
            "bn": "তাবারী সম্বোধনটা খুব যত্ন করে পড়েন। তিনি বলেন, আল্লাহ তাঁর নবীকে বলছেন তাঁর সেই সম্প্রদায়কে জিজ্ঞেস করতে যারা আখিরাত অস্বীকার করেছিল: এ পৃথিবী আর এর ভেতরে সৃষ্টির যা কিছু আছে, তার মালিকানা কার, যদি সত্যিই তোমরা এর মালিককে জান? বাগভী তাদের চিনিয়ে দেন মক্কার লোক বলে, আর যোগ করেন তাদের জ্ঞান কোন জিনিসের নিরিখে যাচাই হচ্ছে: যদি তোমরা এর স্রষ্টা ও মালিককে জান। ছোট্ট নির্দেশ-শব্দ কুল, অর্থাৎ বল, প্রশ্নটাকে নবীর নিজের মুখে বসিয়ে দেয়, যাতে তা তাদের কাছে পৌঁছায় জবাব চাওয়ার দাবি হয়ে, নিছক ভাবনা হয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Owns the Earth",
          "bn": "পৃথিবীর মালিক কে"
        },
        "p": [
          {
            "en": "The question is about ownership, and the commentators draw out how far it reaches. Al-Muyassar keeps to the plain sense: say to them, to whom does this earth and whoever is in it belong, if you have any knowledge? As-Sa'di widens the lens. Who is the Creator of the earth and all that is upon it, he asks — of animal and plant and lifeless matter, of seas and rivers and mountains; who is the Owner of it, the One who manages and disposes of every part? The verse is asking after the source, the title and the control all at once.",
            "bn": "প্রশ্নটা মালিকানা নিয়ে, আর তাফসীরকারেরা দেখান এর ব্যাপ্তি কতদূর। মুয়াসসার সাদামাটা অর্থেই থাকেন: তাদের বল, এ পৃথিবী আর এর ভেতরে যা আছে, সব কার, যদি তোমাদের কোনো জ্ঞান থাকে? সা'দী পরিধিটা আরও চওড়া করেন। কে এ পৃথিবী আর তার উপরের সব কিছুর স্রষ্টা, তিনি জিজ্ঞেস করেন, জীব উদ্ভিদ ও জড় বস্তুর, সাগর নদী ও পাহাড়ের; কে এর মালিক, যিনি এর প্রতিটি অংশ পরিচালনা করেন ও নিয়ন্ত্রণ করেন? আয়াতটি একই সঙ্গে খোঁজ নিচ্ছে উৎসের, মালিকানার আর নিয়ন্ত্রণের।"
          },
          {
            "en": "As-Sa'di's point is that the question answers itself. Ask these people who created and owns and runs all of this, he says, and they cannot help but reply: Allah, and Allah alone. The verse does not argue them toward the admission; it simply asks, sure of the reply, because the reply is already theirs to give. The earth here stands in for everything a person can see and hold and eventually lose. Its single Owner was never in dispute, not even among the very people the surah has set out to rebuke.",
            "bn": "সা'দীর কথার সার হলো, প্রশ্নটা নিজেই নিজের জবাব দিয়ে দেয়। এই লোকদের যদি জিজ্ঞেস করা হয় এসব কে সৃষ্টি করলেন, কার মালিকানা, কে চালান, তিনি বলেন, তারা বলতে বাধ্য: আল্লাহ, কেবল আল্লাহই। আয়াতটি তর্ক করে তাদের এ স্বীকৃতির দিকে টেনে আনে না। শুধু জিজ্ঞেস করে, জবাব নিয়ে নিশ্চিত হয়ে, কারণ জবাবটা তো তাদেরই কাছে। পৃথিবী এখানে দাঁড়িয়ে আছে এমন সব কিছুর হয়ে, যা মানুষ দেখতে পায়, ছুঁতে পারে, আর একসময় হারায়ও। এর একমাত্র মালিক নিয়ে কোনো বিতর্ক কখনো ছিল না, এমনকি সেই লোকদের মধ্যেও নয় যাদের ধমক দিতে সূরাটি নেমেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "If You Have Knowledge",
          "bn": "যদি তোমরা জান"
        },
        "p": [
          {
            "en": "The clause that closes the question — in kuntum ta'lamun, \"if you should know\" — is easy to hear as doubt, yet it is a challenge aimed at knowledge they already carry. Al-Baghawi supplies its unspoken object: if you know its Creator and its Owner. The wording dares them to speak from what they genuinely hold, not from what they merely profess with the crowd. It is the manner of a questioner who is certain of the answer and wants it spoken plainly, in the open, where the speaker will have to own whatever he has said.",
            "bn": "প্রশ্নের শেষে যে কথাটা বসে আছে, ইন কুনতুম তা'লামূন, অর্থাৎ যদি তোমরা জান, তা সহজেই সন্দেহের সুরে শোনা যায়। অথচ এটি এমন এক জ্ঞানের প্রতি চ্যালেঞ্জ, যা তারা আগে থেকেই বহন করে। বাগভী এর না-বলা অংশটা জুড়ে দেন: যদি তোমরা এর স্রষ্টা ও মালিককে জান। শব্দগুলো তাদের সাহস দেখাতে বলে সেই জায়গা থেকে, যা তারা সত্যিই মানে, দল বেঁধে মুখে যা বলে বেড়ায় সেখান থেকে নয়। এ যেন এমন প্রশ্নকর্তার ঢং, যিনি জবাব সম্পর্কে নিশ্চিত আর চান তা খোলাখুলি বলা হোক, যেখানে বক্তাকে নিজের বলা কথার দায় নিতে হবে।"
          },
          {
            "en": "At-Tabari makes that certainty explicit. Having posed the question, he notes, God then tells His Prophet that they will acknowledge the earth to be Allah's in ownership. The proof of the reading is the next verse itself: sayaqulun lillah, \"they will say, to Allah\" (23:85). So \"if you know\" is no open question with its answer in doubt. They know; the surah knows that they know; and the verse is arranged so that their own tongues will pronounce the answer, and in pronouncing it stand as witnesses against themselves.",
            "bn": "তাবারী এই নিশ্চয়তাটা স্পষ্ট করে দেন। প্রশ্নটা রাখার পর, তিনি বলেন, আল্লাহ তাঁর নবীকে জানিয়ে দেন যে তারা পৃথিবীকে আল্লাহরই মালিকানা বলে স্বীকার করবে। এ পাঠের প্রমাণ পরের আয়াতটাই: সাইয়াকূলূনা লিল্লাহ, তারা বলবে, আল্লাহর (২৩:৮৫)। তাই যদি তোমরা জান কোনো খোলা প্রশ্ন নয় যার জবাব নিয়ে সংশয় আছে। তারা জানে; সূরা জানে যে তারা জানে; আর আয়াতটা এমনভাবে সাজানো যে তাদের নিজেদের জিভই জবাবটা উচ্চারণ করবে, আর উচ্চারণ করেই নিজেদের বিরুদ্ধে সাক্ষী হয়ে দাঁড়াবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Admission They Withheld",
          "bn": "যে স্বীকৃতি তারা আটকাল"
        },
        "p": [
          {
            "en": "Here is the heart of the passage, and Ibn Kathir states it without hedging. God affirms His oneness and His being alone in creating, controlling and owning, he writes, in order to guide people to the truth that there is no god but He and that worship is due to none but Him. Then he describes the very people being addressed: idolaters who worshipped others alongside God while openly acknowledging His Lordship, granting that He had no partner in it. Their belief was genuine as far as it went, and it stopped just short of the place it was leading.",
            "bn": "এখানেই অংশটার প্রাণকেন্দ্র, আর ইবন কাসীর তা রাখঢাক ছাড়াই বলেন। তিনি লেখেন, আল্লাহ তাঁর একত্ব আর সৃষ্টি নিয়ন্ত্রণ ও মালিকানায় তাঁর একক হওয়ার কথা তুলে ধরেন এই সত্যের দিকে পথ দেখাতে যে তিনি ছাড়া কোনো ইলাহ নেই আর ইবাদত তিনি ছাড়া আর কারও প্রাপ্য নয়। এরপর তিনি ঠিক সেই লোকদের বর্ণনা দেন যাদের সম্বোধন করা হচ্ছে: মুশরিক, যারা আল্লাহর সঙ্গে অন্যদেরও ইবাদত করত, অথচ খোলাখুলি তাঁর রবত্ব মেনে নিত, স্বীকার করত এতে তাঁর কোনো শরিক নেই। তাদের বিশ্বাস যতদূর গিয়েছিল ততদূর খাঁটিই ছিল, কিন্তু যেখানে পৌঁছানোর কথা ছিল তার ঠিক আগে থমকে গেল।"
          },
          {
            "en": "Ibn Kathir presses the contradiction home. These same people, he says, conceded that the ones they worshipped create nothing, own nothing and control nothing of their own; they worshipped them only, by their own account, \"that they may bring us nearer to Allah\" (39:3). So they had signed over to God the whole earth and everyone upon it, and then directed their worship to what they themselves called powerless. The question of the verse closes on them like a trap sprung by their own confession: whoever owns all things is alone worth the worship.",
            "bn": "ইবন কাসীর দ্বন্দ্বটা আরও চেপে ধরেন। এই একই লোকেরা, তিনি বলেন, মেনে নিত যে তারা যাদের ইবাদত করে তারা কিছুই সৃষ্টি করে না, কিছুরই মালিক নয়, নিজে থেকে কিছুই নিয়ন্ত্রণ করে না; তারা ওদের ইবাদত করত শুধু, নিজেদের ভাষায়, এজন্য যে ওরা আমাদের আল্লাহর কাছে নিয়ে যাবে (৩৯:৩)। অর্থাৎ গোটা পৃথিবী আর তার উপরের সবাইকে তারা আল্লাহর নামে লিখে দিত, আর তারপর ইবাদতটা দিত এমন কিছুকে যাকে তারা নিজেরাই অক্ষম বলত। আয়াতের প্রশ্নটা তাদের উপর বন্ধ হয়ে আসে নিজেদেরই স্বীকারোক্তির ফাঁদ হয়ে: সব কিছুর মালিক যিনি, ইবাদতের যোগ্য কেবল তিনিই।"
          },
          {
            "en": "As-Sa'di frames the same move as an argument built from what they already grant. God has His Prophet reason with them, he writes, from the oneness of Lordship they affirm toward the oneness of worship they deny. They accept that God alone made and owns the vast creation; they refuse Him alone the worship that ought to follow from it. As-Sa'di calls the godhood of a thing that is itself owned the most false of all falsehoods — for whatever is created and possessed cannot possibly be a lord to anyone else.",
            "bn": "সা'দী একই চালটাকে সাজান তাদের মেনে নেওয়া জিনিস থেকে গড়া যুক্তি হিসেবে। তিনি লেখেন, আল্লাহ তাঁর নবীকে দিয়ে তাদের সঙ্গে যুক্তি করান রবত্বের একত্ব থেকে, যা তারা মানে, ইবাদতের একত্বের দিকে, যা তারা অস্বীকার করে। তারা মানে যে বিশাল সৃষ্টি কেবল আল্লাহই বানিয়েছেন ও তার মালিক; অথচ যে ইবাদত এ থেকে আসার কথা, তা তাঁকে একা দিতে অস্বীকার করে। সা'দী এমন কিছুর ইলাহত্বকে, যে নিজেই কারও মালিকানাধীন, বলেন সবচেয়ে বড় মিথ্যা। কারণ যা সৃষ্ট আর অধীন, তা কখনো অন্য কারও রব হতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ownership That Never Lapses",
          "bn": "যে মালিকানা ফুরায় না"
        },
        "p": [
          {
            "en": "Al-Qurtubi hears the single question as an announcement of four things at once. By asking to whom the earth belongs, he writes, God is declaring His Lordship, His oneness, His dominion that does not pass away, and His power that does not shift or change. The last two carry the weight. Human ownership always lapses in the end; it is inherited, sold off, seized, or simply outlived by the property it held. What the verse claims for God is a dominion that never expires and a control that never slips from His hand.",
            "bn": "কুরতুবী এই একটিমাত্র প্রশ্নকে শোনেন একসঙ্গে চারটি বিষয়ের ঘোষণা হিসেবে। পৃথিবী কার, এ জিজ্ঞেস করে, তিনি লেখেন, আল্লাহ ঘোষণা দিচ্ছেন তাঁর রবত্ব, তাঁর একত্ব, তাঁর সেই কর্তৃত্ব যা কখনো ফুরায় না, আর তাঁর সেই ক্ষমতা যা টলে না, বদলায় না। শেষ দুটি বিষয়ই আসল ভার বহন করে। মানুষের মালিকানা শেষমেশ ফুরিয়ে যায়; তা উত্তরাধিকারে যায়, বিক্রি হয়, ছিনিয়ে নেওয়া হয়, নয়তো যে সম্পত্তি সে ধরে রেখেছিল সেটাই তাকে পার করে টিকে থাকে। আয়াত আল্লাহর জন্য যা দাবি করে তা এমন কর্তৃত্ব যা কখনো শেষ হয় না, আর এমন নিয়ন্ত্রণ যা তাঁর হাত থেকে কখনো ফসকায় না।"
          },
          {
            "en": "That distinction reaches the reader as much as the Makkans. Everything a person calls \"mine,\" the earth included, is held on a lease that runs out. The Owner the deniers are made to name holds a claim that carries no end date, while every rival claim is temporary by its very nature. To pour worship into what will itself be taken away is to trust a title deed that is already expiring in the hand. Al-Qurtubi's four words gather the entire case for turning toward Him whose dominion does not turn.",
            "bn": "এই পার্থক্য মক্কাবাসীদের যতটা ছোঁয়, পাঠককেও ততটাই। মানুষ যা কিছুকে আমার বলে, পৃথিবীসহ, সবই এমন ইজারায় ধরা যার মেয়াদ ফুরিয়ে আসে। অস্বীকারকারীদের মুখে যে মালিকের নাম উঠবে, তাঁর দাবির কোনো শেষ তারিখ নেই, আর বাকি প্রতিটি দাবিই স্বভাবতই ক্ষণস্থায়ী। যা নিজেই একদিন কেড়ে নেওয়া হবে, তাতে ইবাদত ঢেলে দেওয়া মানে এমন এক দলিলে ভরসা করা যার মেয়াদ হাতে থাকতেই শেষ হয়ে আসছে। কুরতুবীর চারটি শব্দ গুটিয়ে আনে সেই গোটা যুক্তি, যা তাঁরই দিকে ফেরার ডাক দেয় যাঁর কর্তৃত্ব ফেরে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Then Will You Remember",
          "bn": "তবুও কি মনে পড়ে না"
        },
        "p": [
          {
            "en": "The answer \"to Allah\" is not left hanging; 23:85 turns it at once into a summons: \"Say, then will you not remember?\" As-Sa'di reads afala tadhakkarun as a call to return to what they already carry — a knowledge settled in their fitra, their inborn nature, which turning away had only veiled for a season. The truth was never absent from them; it had merely been mislaid beneath habit and distraction. A moment of honest reflection, he says, is enough to bring it back up to the surface.",
            "bn": "আল্লাহর এই জবাব ঝুলে থাকে না; ২৩:৮৫ সঙ্গে সঙ্গে তাকে বানিয়ে দেয় এক আহ্বান: বল, তবে কি তোমরা স্মরণ করবে না? সা'দী আফালা তাযাক্কারূনকে পড়েন তাদের ভেতরে থাকা জিনিসের দিকে ফেরার ডাক হিসেবে, ফিতরায় গেঁথে থাকা এক জ্ঞান, তাদের সহজাত স্বভাব, যাকে মুখ ফিরিয়ে নেওয়া কেবল কিছুকালের জন্য ঢেকে রেখেছিল। সত্যটা তাদের কাছ থেকে কখনো হারায়নি; শুধু অভ্যাস আর অন্যমনস্কতার নিচে চাপা পড়ে ছিল। এক মুহূর্তের সৎ চিন্তাই, তিনি বলেন, একে আবার উপরে টেনে তোলার জন্য যথেষ্ট।"
          },
          {
            "en": "And what reflection recovers, as-Sa'di adds, is exactly the link the idolaters had severed: that the Owner of all this is the only one deserving of worship, and that offering worship to something owned is baseless from the start. The surah then puts the same question again, of the seven heavens and the Mighty Throne (23:86), and of the sovereignty of all things (23:88), and each time the answer comes back the same, and each time it is met with the same forgetting. A single concession, made and then refused all over again.",
            "bn": "আর চিন্তা যা ফিরিয়ে আনে, সা'দী যোগ করেন, তা ঠিক সেই যোগসূত্র যা মুশরিকরা কেটে দিয়েছিল: এই সব কিছুর মালিক যিনি, ইবাদতের যোগ্য একমাত্র তিনিই, আর মালিকানাধীন কিছুকে ইবাদত দেওয়া গোড়া থেকেই ভিত্তিহীন। এরপর সূরা একই প্রশ্ন আবার রাখে, সাতটি আসমান আর মহান আরশের কথা তুলে (২৩:৮৬), আর সব কিছুর সার্বভৌমত্বের কথা তুলে (২৩:৮৮), আর প্রতিবারই জবাব একই ফিরে আসে, আর প্রতিবারই তা একই ভুলে-যাওয়ায় গিয়ে ঠেকে। একটাই স্বীকৃতি, দিয়ে আবার তা অস্বীকার করে বসা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Right Over Servants",
          "bn": "প্রত্যেক বান্দার উপর হক"
        },
        "p": [
          {
            "en": "The very claim the verse presses — that the Owner of all is alone owed worship — is what the Prophet ﷺ named as God's right over His servants. Mu'adh ibn Jabal reported that he was riding behind the Prophet ﷺ when the Prophet asked, \"O Mu'adh, do you know what is Allah's right over His servants?\" Mu'adh answered, \"Allah and His Messenger know best.\" He said, \"Allah's right over His servants is that they worship Him and associate nothing with Him.\" (Sahih al-Bukhari 2856)",
            "bn": "আয়াত যে দাবিটা চেপে ধরে, সব কিছুর মালিক যিনি, ইবাদত কেবল তাঁরই প্রাপ্য, সেটাই নবী ﷺ আল্লাহর হক বলে চিনিয়ে দিয়েছেন বান্দাদের উপর। মুআয ইবন জাবাল (রাঃ) বর্ণনা করেন, তিনি একটা গাধার পিঠে নবী ﷺ-এর পেছনে বসা ছিলেন, তখন নবী ﷺ জিজ্ঞেস করলেন, হে মুআয, তুমি কি জান বান্দাদের উপর আল্লাহর হক কী? মুআয বললেন, আল্লাহ ও তাঁর রাসূলই ভালো জানেন। তিনি বললেন, বান্দাদের উপর আল্লাহর হক হলো তারা তাঁর ইবাদত করবে আর তাঁর সঙ্গে কিছুই শরিক করবে না। (সহীহ বুখারী ২৮৫৬)"
          },
          {
            "en": "The hadith stands on the very ground the verse has cleared. The Makkans had already granted the first half — that God alone owns and sustains — and the Prophet ﷺ simply states the conclusion they refused to draw: that this owning God be worshipped, with nothing set beside Him. Mu'adh then asked whether he might carry the good news on to people; the Prophet ﷺ told him not to, lest they lean upon it and grow slack in their deeds. To know the right, the exchange makes plain, is not yet to render it.",
            "bn": "হাদীসটি দাঁড়িয়ে আছে ঠিক সেই জমিনের উপর, যা আয়াত পরিষ্কার করে দিয়েছে। মক্কাবাসীরা প্রথম অর্ধেকটা আগেই মেনে নিয়েছিল, যে আল্লাহই কেবল মালিক আর রিজিকদাতা, আর নবী ﷺ শুধু সেই সিদ্ধান্তটা বলে দেন যা টানতে তারা রাজি ছিল না: এই মালিক আল্লাহরই ইবাদত হোক, তাঁর পাশে আর কিছু না বসিয়ে। এরপর মুআয জিজ্ঞেস করলেন, এই সুসংবাদটা তিনি মানুষের কাছে পৌঁছে দেবেন কি না; নবী ﷺ তাঁকে বারণ করলেন, পাছে তারা এর উপর ভরসা করে আমলে ঢিলে হয়ে যায়। হক জানা, এ কথোপকথন খোলাসা করে দেয়, হক আদায় করা এখনো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer Life Gives",
          "bn": "জীবন যে জবাব দেয়"
        },
        "p": [
          {
            "en": "Read honestly, the verse is less a report on the Makkans than a mirror held up to a fault they merely show in its sharpest form. A person can hold, and hold sincerely, that God owns and runs everything, and still pass a whole week seeking from work, from people, from his own fears exactly what only their Owner can give. That is belief halted just short of its own logic, the same half-step the idolaters took. \"To whom belongs the earth?\" is meant to be answered not once with the tongue but daily with the life.",
            "bn": "সৎভাবে পড়লে আয়াতটি মক্কাবাসীদের নিয়ে প্রতিবেদন কম, বরং এমন এক আয়না যা এক দোষকে তার সবচেয়ে তীব্র চেহারায় দেখায়। কেউ মন থেকে বিশ্বাস করতে পারে যে আল্লাহই সব কিছুর মালিক আর পরিচালক, তবু গোটা একটা সপ্তাহ কাটিয়ে দিতে পারে কাজের কাছে, মানুষের কাছে, নিজের ভয়ের কাছে ঠিক সেটা চেয়ে, যা কেবল তাদের মালিকই দিতে পারেন। এ হলো নিজের যুক্তির ঠিক আগে থমকে যাওয়া বিশ্বাস, মুশরিকরা যে আধা পা ফেলেছিল সেই একই আধা পা। পৃথিবী কার, এ প্রশ্নের জবাব একবার জিভ দিয়ে নয়, প্রতিদিন জীবন দিয়ে দেওয়ার কথা।"
          },
          {
            "en": "One thing must be said plainly, in fairness to the text. The verse describes the inconsistency of a particular people who heard the Prophet ﷺ and withheld worship; it names a sickness of the heart, and it licenses nothing against any living person or community who believes otherwise. Its edge is turned first upon the reader. Before I ask where anyone else concedes God in word and denies Him in deed, the verse asks it of me, and it waits for the answer that my week, and not my tongue, will finally give.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার, আয়াতের প্রতি ইনসাফ রেখে। আয়াতটি এমন এক নির্দিষ্ট সম্প্রদায়ের অসংগতির বর্ণনা দেয় যারা নবী ﷺ-কে শুনেছিল আর ইবাদত আটকে রেখেছিল; এটি হৃদয়ের এক রোগের নাম বলে, আর ভিন্নমত পোষণ করা কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। এর ধারটা আগে ফেরানো পাঠকের দিকেই। অন্য কেউ কোথায় মুখে আল্লাহকে মানে আর কাজে অস্বীকার করে, তা জিজ্ঞেস করার আগে আয়াতটা প্রশ্নটা করে আমাকেই, আর অপেক্ষা করে সেই জবাবের জন্য, যা আমার জিভ নয়, আমার সপ্তাহটাই শেষমেশ দেবে।"
          }
        ]
      }
    ]
  },
  "23:111": {
    "sections": [
      {
        "h": {
          "en": "Today, the Verdict Falls",
          "bn": "আজ, ঘোষিত হলো রায়"
        },
        "p": [
          {
            "en": "The whole verse turns on one word: al-yawma, today. A moment earlier the disbelievers were pleading to be let out of the Fire, and God had answered them with the hardest of sentences, ikhsau fiha wa la tukallimun, remain despised in it and do not speak to Me. Ibn Kathir reads this as an order to abide humiliated and to ask nothing further, since no answer will come. Then, still inside the same scene, God turns away from them and toward the very people they had once mocked.",
            "bn": "গোটা আয়াত ঘোরে একটি শব্দকে ঘিরে, আল-ইয়াওমা, আজ। কিছুক্ষণ আগেই কাফিররা জাহান্নাম থেকে বেরোনোর আকুতি জানাচ্ছিল, আর আল্লাহ তাদের দিয়েছিলেন কঠিনতম জবাব, ইখসাউ ফীহা ওয়ালা তুকাল্লিমূন, ধিকৃত অবস্থায় এখানেই পড়ে থাক, আমার সঙ্গে কথা বল না। ইবন কাসীর এটিকে পড়েন এভাবে: লাঞ্ছিত হয়ে থাক আর কিছু চেয়ো না, কারণ কোনো জবাব আর আসবে না। তারপর, সেই একই দৃশ্যের ভেতরেই, আল্লাহ ওদের থেকে মুখ ফিরিয়ে তাকান সেই লোকদের দিকে, যাদের নিয়ে একদিন হাসাহাসি হয়েছিল।"
          },
          {
            "en": "The verb He uses is jazaytu, I have rewarded, in the past tense, as of something already done and beyond appeal. In the very breath that silences the mockers, the verdict for the mocked is read aloud. At-Tabari frames the address bluntly: I, He says to the idolaters kept forever in the Fire, have rewarded those you took in the world as objects of ridicule from among the people who believed in Me, the ones you used to laugh at. Their reward is announced to the mockers' faces.",
            "bn": "যে ক্রিয়া তিনি বেছে নেন তা হলো জাযাইতু, আমি প্রতিদান দিয়েছি, অতীত কালে, যেন কাজটা আগেই সেরে ফেলা এবং তার আর কোনো আপিল নেই। মশকরাকারীদের থামিয়ে দেওয়ার সেই একই নিঃশ্বাসে মজলুমদের রায় পড়ে শোনানো হয়। তাবারী সম্বোধনটা খোলাখুলি তুলে ধরেন: চিরকাল জাহান্নামে বন্দি হে মুশরিকরা, দুনিয়ায় তোমরা যাদের ঠাট্টার পাত্র বানিয়েছিলে, আমার প্রতি ঈমান আনা সেই মানুষদের, যাদের নিয়ে তোমরা হাসতে, আজ আমি তাদের প্রতিদান দিয়েছি। তাদের এই পুরস্কার শোনানো হয় মশকরাকারীদের মুখের সামনেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Rewarded For the Ridicule",
          "bn": "ঠাট্টার বদলেই পুরস্কার"
        },
        "p": [
          {
            "en": "The grammar carries the point. Bima sabaru: the little word bi- here is the ba of cause, so the verse reads rewarded because they were patient. At-Tabari spells out patient in what: bima sabaru ala ma kanu yalqawn min adha sukhriyatikum wa dahikikum minhum, for their patience over the harm they used to meet from your mockery and your laughing at them. The thing that looked like pure loss, being the room's joke, is named as the very reason the reward is owed.",
            "bn": "কথাটা ব্যাকরণই বহন করে। বিমা সাবারূ: এখানে ছোট্ট শব্দ বি- হলো কারণ বোঝানোর বা, তাই আয়াতের অর্থ দাঁড়ায় প্রতিদান দিলাম কারণ তারা ধৈর্য ধরেছিল। কীসের উপর ধৈর্য, তাবারী তা খুলে বলেন: বিমা সাবারূ আলা মা কানূ ইয়ালকাওন মিন আযা সুখরিয়াতিকুম, তোমাদের ঠাট্টা আর হাসাহাসি থেকে যে কষ্ট তারা পেত, তার উপর ধৈর্যের কারণে। যা দেখতে ছিল নিছক ক্ষতি, মজলিসের হাসির খোরাক হওয়া, তাকেই এখানে পুরস্কার পাওনা হওয়ার কারণ বলা হচ্ছে।"
          },
          {
            "en": "Ibn Kathir, on the same verse, gives the reward its address in one clause: for the harm and mockery that you inflicted on them. Al-Baghawi says the same, that they were patient ala adhakum wa istihzaikum fi d-dunya, over your harm and your ridicule in the world. None of these readers treats the mockery as a side detail. It is the trial that was borne, and bearing it well is the deed the Day pays out for. What the mockers spent their scorn on turns out to have been an investment the mocked were making.",
            "bn": "একই আয়াতে ইবন কাসীর পুরস্কারটা কীসের বিনিময়ে, তা এক বাক্যেই বলে দেন: তোমরা তাদের যে কষ্ট আর মশকরা করেছিলে, তার বদলে। বাগাভীও একই কথা বলেন, তারা ধৈর্য ধরেছিল আলা আযাকুম ওয়াসতিহযাইকুম ফিদ্দুনিয়া, দুনিয়ায় তোমাদের দেওয়া কষ্ট আর ঠাট্টার উপর। এই তাফসীরকারদের কেউই মশকরাটাকে গৌণ বিষয় ধরেন না। এটাই ছিল বয়ে নেওয়া পরীক্ষা, আর তা ভালোভাবে বয়ে নেওয়াই সেই আমল, যার দাম সেই দিন চুকিয়ে দেওয়া হয়। মশকরাকারীরা যার উপর নিজেদের অবজ্ঞা ঢেলেছিল, দেখা গেল মজলুমরা সেখানেই জমা রাখছিল নিজেদের সঞ্চয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience of Two Kinds",
          "bn": "দুই ধারার ধৈর্য"
        },
        "p": [
          {
            "en": "Read more closely, the patience being rewarded has two faces. Al-Qurtubi gives both: sabaru ala adhakum wa sabaru ala taati, they were patient over your harm and patient in keeping to My obedience. The first is the patience of being wronged; the second is the patience of holding a hard course when no one is applauding. The Muyassar joins the same pair, saying the reward comes bi-sababi sabrihim ala l-adha wa taatillah, because of their patience over the harm and in obeying God.",
            "bn": "আরও কাছ থেকে দেখলে, যে ধৈর্যের প্রতিদান দেওয়া হচ্ছে তার দুই চেহারা। কুরতুবী দুটোই তুলে ধরেন: সাবারূ আলা আযাকুম ওয়া সাবারূ আলা তাআতী, তারা ধৈর্য ধরেছিল তোমাদের কষ্টের উপর, আবার ধৈর্য ধরেছিল আমার আনুগত্যে অটল থেকে। প্রথমটা অন্যায় সয়ে যাওয়ার ধৈর্য; দ্বিতীয়টা হলো হাততালি না পেলেও কঠিন পথ ধরে রাখার ধৈর্য। মুয়াসসারও সেই একই জোড়া বাঁধে, বলে প্রতিদান আসে বিসাবাবি সাবরিহিম আলাল আযা ওয়া তাআতিল্লাহ, কষ্টের উপর আর আল্লাহর আনুগত্যে তাদের ধৈর্যের কারণে।"
          },
          {
            "en": "As-Sa'di keeps both and adds a direction to them: they were patient ala taati wa ala adhakum hatta wasalu ilayya, in My obedience and over your harm, until they reached Me. That last clause turns the endurance into a road rather than a mere burden. The harm did not just happen to them; it was the terrain they crossed to arrive where the verse now finds them, at the reward. Patience, on this reading, is not gritting the teeth and waiting. It is the walking itself.",
            "bn": "সা'দী দুটোই রাখেন, সঙ্গে জুড়ে দেন একটা গন্তব্য: তারা ধৈর্য ধরেছিল আলা তাআতী ওয়া আলা আযাকুম হাত্তা ওয়াসালূ ইলাইয়া, আমার আনুগত্যে আর তোমাদের কষ্টের উপর, যতক্ষণ না তারা আমার কাছে পৌঁছল। শেষ কথাটা ধৈর্যকে নিছক বোঝা থেকে বদলে দেয় একটা পথে। কষ্টটা শুধু তাদের উপর ঘটে যায়নি; ওটাই ছিল সেই মাটি, যা পেরিয়ে তারা এসে পৌঁছেছে সেখানে, যেখানে আয়াত এখন তাদের খুঁজে পায়, পুরস্কারের কাছে। এই পাঠে ধৈর্য মানে দাঁতে দাঁত চেপে অপেক্ষা করা নয়। ধৈর্য মানে হেঁটে চলাটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Winners Are",
          "bn": "প্রকৃত বিজয়ী কারা"
        },
        "p": [
          {
            "en": "Then the payout is named: annahum humu l-faizun, that they are the attainers. The pronoun hum, they, sits in the sentence where it is not grammatically needed, and Arabic adds it only to restrict: they, and not the others, are the winners. The scene has just shown two groups. The powerful, who seemed to be winning, are silenced in the Fire. The mocked, who seemed to be losing, are the faizun. The verse quietly corrects the scoreboard everyone in the world had been reading.",
            "bn": "তারপর প্রতিদানটার নাম বলা হয়: আন্নাহুম হুমুল ফাইযূন, তারাই সফলকাম। বাক্যে হুম, অর্থাৎ তারা, শব্দটা এমন জায়গায় বসেছে যেখানে ব্যাকরণগতভাবে তার দরকার ছিল না, আর আরবি একে জোড়ে কেবল সীমা টানতে: তারাই, অন্যরা নয়, বিজয়ী। দৃশ্যটা এইমাত্র দুটি দল দেখাল। ক্ষমতাবানরা, যাদের জেতা মনে হচ্ছিল, জাহান্নামে চুপ। মজলুমরা, যাদের হারা মনে হচ্ছিল, তারাই ফাইযূন। দুনিয়ায় সবাই যে স্কোরবোর্ড পড়ছিল, আয়াত চুপচাপ তা শুধরে দেয়।"
          },
          {
            "en": "What does the winning consist of? Ibn Kathir answers on this verse: jaaltuhum humu l-faizin bi-s-saada wa-s-salama wa-l-janna, an-najina min an-nar, I made them the winners, with felicity and safety and the Garden, saved from the Fire. At-Tabari widens it: they win an-naim ad-daim wa-l-karama al-baqiya abadan, the bliss that does not end and the honour that stays forever. The Muyassar keeps it plain, al-fawz bi-l-janna, the triumph of the Garden. It is not a narrow escape; it is everything, and it does not run out.",
            "bn": "এই জেতাটা কী দিয়ে গড়া? এই আয়াতে ইবন কাসীর জবাব দেন: জাআলতুহুম হুমুল ফাইযীন বিসসাআদা ওয়াসসালামা ওয়াল জান্না, আন্নাজীনা মিনান নার, আমি তাদের বানিয়েছি বিজয়ী, সৌভাগ্য, নিরাপত্তা আর জান্নাত দিয়ে, জাহান্নাম থেকে মুক্ত করে। তাবারী পরিসরটা আরও বাড়ান: তারা পায় আন-নাঈম আদ-দাইম ওয়াল কারামা আল-বাকিয়া আবাদান, যে সুখ ফুরায় না আর যে সম্মান চিরকাল থাকে। মুয়াসসার সাদামাটা রাখেন, আল-ফাওয বিল জান্না, জান্নাতের জয়। এটা কোনোমতে বেঁচে যাওয়া নয়; এটা সবকিছু, আর এ কখনো ফুরায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Praise, or a Prize",
          "bn": "প্রশংসা, না কি পুরস্কার"
        },
        "p": [
          {
            "en": "The reciters read the last clause in two ways, and the difference is worth hearing rather than settling. Al-Qurtubi and al-Baghawi report that Hamza and al-Kisa'i read innahum, with a kasra, as a fresh sentence: God breaks off and begins a new line of praise, Indeed, it is they who are the winners. On this reading the clause stands on its own, a declaration made about the believers for its own sake, not tied by grammar to what came before.",
            "bn": "কারীগণ শেষ বাক্যটি দুই ভাবে পড়েন, আর এই পার্থক্যটা মীমাংসা করার চেয়ে শোনাটাই বেশি দামি। কুরতুবী ও বাগাভী জানান, হামযা আর কিসাঈ পড়েন ইন্নাহুম, কাসরা দিয়ে, নতুন এক বাক্য হিসেবে: আল্লাহ থেমে গিয়ে শুরু করেন প্রশংসার নতুন এক পঙ্‌ক্তি, নিশ্চয় তারাই বিজয়ী। এই পাঠে বাক্যটি দাঁড়ায় নিজের পায়ে, মুমিনদের নিয়ে নিজের খাতিরেই বলা এক ঘোষণা, ব্যাকরণে আগের কথার সঙ্গে বাঁধা নয়।"
          },
          {
            "en": "The others read annahum, with a fatha, and then, as al-Baghawi puts it, the clause sits fi mawdii l-mafuli th-thani, in the place of a second object: I rewarded them, for their patience, with this, that they are the winners. Here the winning is the reward itself, the content of what was given. At-Tabari weighs the two and leans to the kasra reading, since jazaytu already governs the pronoun them and need not also govern anna. He keeps both on the page; the verse gains from being read both as a prize handed over and as a praise pronounced.",
            "bn": "অন্যরা পড়েন আন্নাহুম, ফাতহা দিয়ে, আর তখন, বাগাভীর ভাষায়, বাক্যটি বসে ফী মাওদিইল মাফঊলিছ ছানী, দ্বিতীয় কর্মের জায়গায়: আমি তাদের ধৈর্যের বদলে দিয়েছি এটাই, যে তারাই বিজয়ী। এখানে বিজয়ী হওয়াটাই পুরস্কার, যা দেওয়া হলো তার বিষয়বস্তু। তাবারী দুটো ওজন করে ঝোঁকেন কাসরা পাঠের দিকে, কারণ জাযাইতু ক্রিয়াটি আগেই তাদের সর্বনামকে চালিত করছে, তার উপর আবার আন্না-কেও চালাতে হয় না। তিনি দুটোকেই পাতায় রাখেন; আয়াত সমৃদ্ধ হয় দুই ভাবেই পড়লে, হাতে তুলে দেওয়া পুরস্কার হিসেবে, আবার উচ্চারিত প্রশংসা হিসেবেও।"
          }
        ]
      },
      {
        "h": {
          "en": "The Laughter Reversed",
          "bn": "উল্টে গেল হাসি"
        },
        "p": [
          {
            "en": "Both al-Qurtubi and as-Sa'di hear this verse answering the close of Surah al-Muttaffifin. There God says fa-l-yawma lladhina amanu mina l-kuffari yadhakun, so today it is the believers who laugh at the disbelievers (83:34). The mockery of 23:110, where the powerful used to laugh at the believers, is not merely forgotten on the Day; it is turned around and returned. The same word, laughter, changes hands. Today belongs to the ones who were the joke.",
            "bn": "কুরতুবী ও সা'দী দুজনেই শোনেন, এই আয়াত জবাব দিচ্ছে সূরা মুতাফফিফীনের শেষ অংশকে। সেখানে আল্লাহ বলেন ফাল-ইয়াওমাল্লাযীনা আমানূ মিনাল কুফফারি ইয়াদহাকূন, তাই আজ মুমিনরাই হাসে কাফিরদের নিয়ে (৮৩:৩৪)। ২৩:১১০-এ ক্ষমতাবানরা যে মুমিনদের নিয়ে হাসত, সেই মশকরা সেই দিনে শুধু ভুলে যাওয়া হয় না; তা ঘুরিয়ে ফিরিয়ে দেওয়া হয়। একই শব্দ, হাসি, হাতবদল হয়। আজকের দিনটা তাদের, যারা ছিল হাসির খোরাক।"
          },
          {
            "en": "Ibn Kathir points to the same sura from the other end. In 83:29 and 83:30, He says, the criminals used to laugh at the believers and wink at one another as they passed them by. Set beside our verse, the two passages form the two ends of one arc: the sneer thrown in the world, and the reward read out on the Day. Nothing of the ridicule is lost in between. It is weighed, and it comes back inverted, as honour for the very people it was aimed at.",
            "bn": "ইবন কাসীর একই সূরার দিকে ইঙ্গিত করেন অন্য প্রান্ত থেকে। ৮৩:২৯ ও ৮৩:৩০-এ, তিনি বলেন, অপরাধীরা মুমিনদের নিয়ে হাসত আর তাদের পাশ কাটানোর সময় একে অপরকে চোখ টিপত। আমাদের আয়াতের পাশে রাখলে, দুই অংশ মিলে গড়ে একটি বৃত্তের দুই প্রান্ত: দুনিয়ায় ছুড়ে দেওয়া বিদ্রূপ, আর সেই দিনে পড়ে শোনানো পুরস্কার। মাঝখানে ঠাট্টার কিছুই হারায় না। তা ওজন করা হয়, আর ফিরে আসে উল্টে গিয়ে, যাদের দিকে ছোড়া হয়েছিল তাদেরই সম্মান হয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Shade for the Steadfast",
          "bn": "অবিচলদের জন্য ছায়া"
        },
        "p": [
          {
            "en": "None of the commentators read for this verse attaches a particular hadith to it; the reward here is drawn from the verse itself and its parallel at the close of al-Muttaffifin. But the shape of it, God honouring on the Day those who held to Him quietly and bore what that holding cost, is carried by a sound report of the Prophet. It is worth setting beside the verse for its theme, and not as a comment on the words.",
            "bn": "এই আয়াতের জন্য পড়া তাফসীরকারদের কেউ এখানে নির্দিষ্ট কোনো হাদীস জোড়েন না; পুরস্কারের কথাটা আসে আয়াত থেকেই আর মুতাফফিফীনের শেষে থাকা তার সমান্তরাল অংশ থেকে। তবে এর যে গড়ন, চুপচাপ আল্লাহকে আঁকড়ে থাকা আর তার মূল্য বয়ে নেওয়া মানুষদের সেই দিনে আল্লাহর সম্মানিত করা, তা নবী ﷺ-এর এক সহীহ হাদীসে ধরা আছে। বিষয়ের খাতিরে একে আয়াতের পাশে রাখা যায়, শব্দের ব্যাখ্যা হিসেবে নয়।"
          },
          {
            "en": "The wording, from Sahih al-Bukhari and narrated by Abu Hurayra (RA), lists seven kinds of people whom Allah will shade in His shade on a Day when there is no shade but His: a just ruler; a youth who grew up in the worship of his Lord; a man whose heart is tied to the mosques; two who love each other for Allah's sake, meeting upon that and parting upon that; and a man called by a woman of rank and beauty who answers, I fear Allah.",
            "bn": "বুখারীর সহীহ থেকে নেওয়া, আবু হুরাইরা (রাঃ) বর্ণিত এই বাণীতে সাতটি শ্রেণির মানুষের কথা আসে, যাদের আল্লাহ ছায়া দেবেন তাঁর ছায়ায় সেই দিনে, যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না: ন্যায়পরায়ণ শাসক; রবের ইবাদতে বেড়ে ওঠা যুবক; মসজিদের সঙ্গে হৃদয় বাঁধা মানুষ; আল্লাহর জন্য পরস্পরকে ভালোবাসা দুজন, যারা তাতেই মিলিত হয় আর তাতেই বিদায় নেয়; আর সেই মানুষ, যাকে মর্যাদা ও রূপবতী নারী ডাকে, অথচ সে বলে, আমি আল্লাহকে ভয় করি।"
          },
          {
            "en": "The list closes with a man who gives charity so secretly that his left hand does not know what his right spends, and a man who remembers Allah in private until his eyes overflow. It is a sound report, recorded by al-Bukhari in his Sahih. And it should be marked for exactly what it is: a general narration about reward on the Day, not a hadith the commentators tie to 23:111. What it names is the inner steadfastness that this verse says the Day repays.",
            "bn": "তালিকা শেষ হয় সেই মানুষ দিয়ে, যে এত গোপনে দান করে যে তার বাঁ হাত জানে না ডান হাত কী খরচ করল, আর সেই মানুষ, যে নির্জনে আল্লাহকে স্মরণ করে আর তার দুচোখ বেয়ে পানি ঝরে। এটি সহীহ বর্ণনা, বুখারী তাঁর সহীহতে লিপিবদ্ধ করেছেন। আর একে ঠিক যা, তা-ই বলে চিহ্নিত করা দরকার: সেই দিনের পুরস্কার নিয়ে একটি সাধারণ বর্ণনা, তাফসীরকারদের ২৩:১১১-এর সঙ্গে জোড়া কোনো হাদীস নয়। এ যা তুলে ধরে তা হলো সেই ভেতরকার অবিচলতা, যার দাম এই আয়াত বলছে সেই দিন চুকিয়ে দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom Not to Mock",
          "bn": "কাকে নিয়ে হাসবেন না"
        },
        "p": [
          {
            "en": "Al-Qurtubi draws a warning out of the verse before he leaves it. If patience under mockery is what God rewards, then mockery itself, the ridicule of the weak and the poor, the belittling of them and the busying of oneself with them to no good end, is precisely what puts a person at a distance from God. He reads the verse as a caution to the strong: the laughter you find so cheap is being written down, and it is being written down against you, not against the ones you aim it at.",
            "bn": "আয়াত ছেড়ে যাওয়ার আগে কুরতুবী তা থেকে একটা সতর্কবাণী টেনে আনেন। ঠাট্টার মুখে ধৈর্যই যদি হয় আল্লাহর পুরস্কৃত জিনিস, তবে ঠাট্টাটাই, দুর্বল আর গরিবকে নিয়ে বিদ্রূপ, তাদের তুচ্ছ করা আর অনর্থক তাদের পেছনে লেগে থাকা, ঠিক সেটাই মানুষকে আল্লাহ থেকে দূরে ঠেলে দেয়। তিনি আয়াতটিকে পড়েন ক্ষমতাবানদের প্রতি হুঁশিয়ারি হিসেবে: যে হাসিকে তুমি এত সস্তা ভাবছ, তা লিখে রাখা হচ্ছে, আর লেখা হচ্ছে তোমার বিরুদ্ধে, যাদের দিকে ছুড়ছ তাদের বিরুদ্ধে নয়।"
          },
          {
            "en": "It is worth saying plainly what this verse does and does not license. It describes what the disbelievers did, mocking a band of believers, and it states God's verdict on them; it authorises nothing against any living person or community. Its charge to the reader runs the other way: not to find someone to look down on, but to become the servant who is looked down on and holds fast. When your faith makes you the easy target in the room, this verse is the long reply, and it says, quietly and for good, that the last laugh was never theirs.",
            "bn": "সোজা কথায় বলা দরকার, এই আয়াত কীসের অনুমতি দেয় আর কীসের দেয় না। এটি বর্ণনা করে কাফিররা কী করেছিল, একদল মুমিনকে নিয়ে ঠাট্টা করেছিল, আর জানায় তাদের উপর আল্লাহর রায়; কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ কিছুরই অনুমতি দেয় না। পাঠকের প্রতি এর দায়িত্ব চলে উল্টো পথে: তুচ্ছ করার মতো কাউকে খুঁজে বের করা নয়, বরং সেই বান্দা হয়ে ওঠা, যাকে তুচ্ছ করা হয় অথচ সে অটল থাকে। ঈমান যখন আপনাকে মজলিসের সহজ নিশানা বানিয়ে দেয়, এই আয়াতই তার দীর্ঘ জবাব, আর তা চুপচাপ, চিরকালের মতো বলে দেয়, শেষ হাসিটা কখনো ওদের ছিল না।"
          }
        ]
      }
    ]
  },
  "23:115-116": {
    "sections": [
      {
        "h": {
          "en": "A Question at the End",
          "bn": "শেষে একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "Surah al-Mu'minun opens by declaring that the believers have succeeded in 23:1 and ends in something like a courtroom. In the closing scene the ones being questioned are asked how many years they stayed on the earth, and in 23:113 they answer: a day, or part of a day, ask those who count. 23:114 tells them they stayed only a little, if they had known.",
            "bn": "সূরা আল-মুমিনুন শুরু হয় 23:1 আয়াতে এই ঘোষণা দিয়ে যে মুমিনরা সফলকাম হয়েছে, আর শেষ হয় প্রায় এক আদালত-কক্ষের দৃশ্যে। সমাপ্তির সেই দৃশ্যে জিজ্ঞাসিতদের জিজ্ঞেস করা হয়, তারা যমীনে কত বছর অবস্থান করেছিল; আর 23:113 আয়াতে তারা উত্তর দেয়: একদিন বা দিনের কিছু অংশ, গণনাকারীদের জিজ্ঞেস করুন। 23:114 আয়াত তাদের বলে, তারা অল্পই অবস্থান করেছিল — যদি তারা জানত।"
          },
          {
            "en": "Then the address swings away from them and onto everyone reading. 23:115 asks: did you think that We created you uselessly, and that to Us you would not be returned? The people in the scene have just discovered how short the stay was. The question that follows asks the rest of us what we thought the stay was for.",
            "bn": "তারপর সম্বোধন তাদের থেকে সরে এসে পড়ে পাঠরত সবার উপর। 23:115 আয়াত জিজ্ঞেস করে: তোমরা কি ভেবেছিলে আমি তোমাদের অনর্থকভাবে সৃষ্টি করেছি, আর তোমাদের আমার কাছে ফিরিয়ে আনা হবে না? দৃশ্যের ভেতরের মানুষগুলো সবেমাত্র আবিষ্কার করেছে অবস্থানটি কত সংক্ষিপ্ত ছিল। এরপরের প্রশ্নটি বাকি আমাদের জিজ্ঞেস করে, আমরা ভেবেছিলাম অবস্থানটি কীসের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Abathan",
          "bn": "আবাছান"
        },
        "p": [
          {
            "en": "The word abathan occurs once in the Quran, here. It does not mean cruelty or accident; it means aimless fiddling, an act done to no end at all — play without even the purpose that play has. It is the strongest available word for pointlessness, and the verse puts it in the mouths of the people it is questioning rather than arguing against it.",
            "bn": "'আবাছান' শব্দটি কুরআনে একবারই এসেছে, এখানে। এর অর্থ নিষ্ঠুরতা নয়, দুর্ঘটনাও নয়; এর অর্থ লক্ষ্যহীন খুটখাট, এমন কাজ যার কোনো পরিণতিই নেই — এমনকি খেলার যে উদ্দেশ্য থাকে তাও যাতে নেই। নিরর্থকতা বোঝাতে এটিই সবচেয়ে জোরালো শব্দ, আর আয়াতটি তার বিরুদ্ধে তর্ক না করে শব্দটি বসিয়ে দেয় যাদের জিজ্ঞেস করা হচ্ছে তাদেরই মুখে।"
          },
          {
            "en": "There are two clauses, not one, and they belong together: created uselessly, and not returned. Purpose and destination are treated as a single question, because a life with a destination cannot be pointless and a life without one cannot be anything else. Note also the person: 75:36 asks about man in the third person, at a distance. This verse turns and asks you, plural, to your face.",
            "bn": "এখানে একটি নয়, দুটি বাক্যাংশ, আর দুটি একসঙ্গেই থাকে: অনর্থকভাবে সৃষ্ট, এবং ফিরিয়ে না আনা। উদ্দেশ্য ও গন্তব্যকে একটিমাত্র প্রশ্ন হিসেবে ধরা হয়েছে, কারণ গন্তব্যসম্পন্ন জীবন নিরর্থক হতে পারে না, আর গন্তব্যহীন জীবন অন্য কিছু হতে পারে না। পুরুষটিও লক্ষ করুন: 75:36 আয়াত মানুষ সম্পর্কে জিজ্ঞেস করে প্রথম পুরুষে, দূরত্ব রেখে। এই আয়াত ঘুরে দাঁড়িয়ে তোমাদের — বহুবচনে, মুখোমুখি — জিজ্ঞেস করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Rule Already Covers the Sky",
          "bn": "নিয়মটি আসমানকে আগেই ঢেকেছে"
        },
        "p": [
          {
            "en": "The charge of pointlessness has already been answered at the largest scale. 21:16 and 44:38 both deny that the heavens, the earth and what is between them were made in play, and 44:39 says they were created only in truth. 38:27 adds that the opposite assumption is what those who disbelieve suppose. So the question here is not opening a new subject; it is refusing to let the listener exempt himself from a rule that already covers everything above his head.",
            "bn": "নিরর্থকতার অভিযোগের জবাব সবচেয়ে বড় মাপে আগেই দেওয়া হয়েছে। 21:16 ও 44:38 উভয় আয়াতই অস্বীকার করে যে আসমান, যমীন ও এ দুয়ের মাঝে যা আছে তা খেলাচ্ছলে বানানো হয়েছে, আর 44:39 আয়াত বলে সেগুলো সৃষ্টি করা হয়েছে কেবল সত্য উদ্দেশ্যেই। 38:27 আয়াত যোগ করে যে উল্টো ধারণাটিই কাফিরদের ধারণা। কাজেই এখানকার প্রশ্নটি নতুন কোনো প্রসঙ্গ তুলছে না; তা কেবল শ্রোতাকে সেই নিয়ম থেকে ছাড় নিতে দিচ্ছে না, যে নিয়ম তার মাথার উপরের সবকিছুকে আগেই ঢেকে রেখেছে।"
          },
          {
            "en": "The same surah has also already described how carefully the questioned party was assembled. 23:12 to 23:14 take a human being from an extract of clay through a drop, a clot, a lump, bones and flesh, and end by blessing Allah, the best of creators. A reader who has passed through those verses cannot easily claim that the making looked casual.",
            "bn": "একই সূরা আগেই বর্ণনা করেছে, যাদের জিজ্ঞেস করা হচ্ছে তাদের কত যত্নে গড়া হয়েছিল। 23:12 থেকে 23:14 আয়াত একজন মানুষকে নিয়ে যায় মাটির নির্যাস থেকে শুক্রবিন্দু, জমাট রক্ত, মাংসপিণ্ড, হাড় ও গোশত পর্যন্ত, আর শেষ হয় সর্বোত্তম স্রষ্টা আল্লাহর মহিমা ঘোষণা করে। যে পাঠক সেই আয়াতগুলো পেরিয়ে এসেছেন, তিনি সহজে দাবি করতে পারেন না যে নির্মাণটি এলোমেলো দেখাচ্ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The True King",
          "bn": "প্রকৃত অধিপতি"
        },
        "p": [
          {
            "en": "23:116 answers the question by naming Someone: so exalted is Allah, the Sovereign, the Truth. The pairing al-Malik al-Haqq occurs exactly twice in the Quran, here and in 20:114, and the second name is doing work on the first. Kingship is the most counterfeited claim there is, and al-Haqq marks this one as the real one, against every borrowed authority. Earlier in this same surah, 23:88 had asked in whose hand the realm of all things lies.",
            "bn": "23:116 আয়াত প্রশ্নটির উত্তর দেয় একজনের নাম বলে: সুউচ্চ মহান আল্লাহ, যিনি প্রকৃত মালিক। 'আল-মালিকুল হাক্ক' জোড়াটি কুরআনে ঠিক দু'বার এসেছে — এখানে আর 20:114 আয়াতে — আর দ্বিতীয় নামটি প্রথমটির উপর কাজ করছে। রাজত্বই সবচেয়ে বেশি নকল হওয়া দাবি, আর 'আল-হাক্ক' এটিকে প্রকৃত রাজত্ব বলে চিহ্নিত করে, ধার করা সব কর্তৃত্বের বিপরীতে। এই সূরাতেই আগে 23:88 আয়াত জিজ্ঞেস করেছিল, সব কিছুর একচ্ছত্র কর্তৃত্ব কার হাতে।"
          },
          {
            "en": "The verse continues: there is no deity except Him, Lord of the Noble Throne. That last phrase, rabb al-arsh al-karim, occurs only here. And this is not the end of the surah, which runs to 118 verses. 23:117 warns whoever calls on another deity without proof, and 23:118 closes with a supplication: my Lord, forgive and have mercy, and You are the best of the merciful.",
            "bn": "আয়াতটি চলতে থাকে: তিনি ছাড়া সত্যিকারের কোনো ইলাহ নেই, তিনি সম্মানিত আরশের অধিপতি। শেষ শব্দবন্ধটি — 'রব্বুল আরশিল কারীম' — কেবল এখানেই এসেছে। আর এটি সূরার শেষ নয়; সূরাটি 118 আয়াত পর্যন্ত চলে। 23:117 আয়াত সতর্ক করে তাকে, যে প্রমাণ ছাড়াই অন্য ইলাহকে ডাকে; আর 23:118 আয়াত শেষ হয় এক দু'আ দিয়ে: হে আমার প্রতিপালক, ক্ষমা করো ও রহম করো, তুমিই রহমকারীদের মধ্যে সর্বশ্রেষ্ঠ।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Answer Is a King",
          "bn": "উত্তরটি কেন একজন অধিপতি"
        },
        "p": [
          {
            "en": "It is worth asking why a question about purpose is answered with a title of sovereignty. If we had been made in jest, there would be a player and no ruler, and a game keeps no accounts. Naming Him the true King settles the charge at its root: a real kingdom has real subjects, subjects are answerable, and answerable lives are not futile ones.",
            "bn": "জিজ্ঞেস করার মতো ব্যাপার — উদ্দেশ্য নিয়ে একটি প্রশ্নের উত্তর কেন সার্বভৌমত্বের একটি উপাধি দিয়ে দেওয়া হলো। আমাদের যদি তামাশা হিসেবে বানানো হতো, তবে থাকত একজন খেলোয়াড়, কোনো শাসক নয় — আর খেলা কোনো হিসাব রাখে না। তাঁকে প্রকৃত অধিপতি বলে নাম দেওয়া অভিযোগটিকে গোড়া থেকেই মিটিয়ে দেয়: প্রকৃত রাজ্যে প্রকৃত প্রজা থাকে, প্রজারা জবাবদিহিতে বাঁধা, আর জবাবদিহিতে বাঁধা জীবন নিরর্থক জীবন নয়।"
          },
          {
            "en": "Notice the shape of the whole surah. It claims success for the believers in its first verse and asks for mercy in its last. Between the two sits this question, which is really an invitation to audit the assumption underneath an ordinary week. Someone who genuinely holds that he is returning to a true King spends his hours differently, and the difference usually shows up first in what he stops treating as unimportant.",
            "bn": "গোটা সূরার আকৃতিটি লক্ষ করুন। প্রথম আয়াতে তা মুমিনদের জন্য সাফল্য ঘোষণা করে, আর শেষ আয়াতে রহমত প্রার্থনা করে। দুইয়ের মাঝখানে বসে আছে এই প্রশ্নটি, যা আসলে একটি সাধারণ সপ্তাহের নিচে লুকিয়ে থাকা অনুমানটিকে নিরীক্ষা করার আমন্ত্রণ। যে ব্যক্তি সত্যিই ধরে রাখে যে সে এক প্রকৃত অধিপতির কাছে ফিরে যাচ্ছে, সে তার ঘণ্টাগুলো অন্যভাবে কাটায় — আর পার্থক্যটি সাধারণত প্রথমে ধরা পড়ে সে কোন জিনিসগুলোকে আর গুরুত্বহীন ভাবা বন্ধ করে দেয় তাতে।"
          }
        ]
      }
    ]
  },
  "23:118": {
    "sections": [
      {
        "h": {
          "en": "Six Words at the End",
          "bn": "শেষে ছয়টি শব্দ"
        },
        "p": [
          {
            "en": "Surah al-Mu'minun has 118 verses, so this is its last. In the mushaf it is seven words, and the first of them is a command: wa qul, and say. What follows is six words of prayer — rabbi ighfir warham wa anta khayru ar-rahimin. A surah that has spent its closing pages inside the Judgement does not end on a verdict or a threat. It ends by handing the reader something to say.",
            "bn": "সূরা আল-মুমিনূনে আয়াত আছে ১১৮টি, তাই এটিই তার শেষ আয়াত। মুসহাফে এটি সাতটি শব্দ, আর তার প্রথমটি একটি আদেশ: 'ওয়া কুল' — আর বলো। এরপর আসে ছয় শব্দের প্রার্থনা — রাব্বিগফির ওয়ারহাম ওয়া আনতা খাইরুর রাহিমীন। যে সূরা তার শেষ পৃষ্ঠাগুলো কাটিয়েছে বিচারদিবসের ভেতরে, তা কোনো রায় বা হুমকি দিয়ে শেষ হয় না। এটি শেষ হয় পাঠকের হাতে বলার মতো কিছু তুলে দিয়ে।"
          },
          {
            "en": "The verse before it explains the turn. 23:117 states that whoever calls upon another deity alongside Allah, having no proof for it, has his account with his Lord alone, and that the disbelievers will not succeed. The surah had opened by declaring that the believers have succeeded. Having closed that frame, it does not stop at the verdict; it gives whoever wants the other outcome the exact words with which to ask for it.",
            "bn": "এর আগের আয়াতটি এই মোড়ের কারণ ব্যাখ্যা করে। 23:117 বলে, যে ব্যক্তি আল্লাহর সঙ্গে অন্য কোনো ইলাহকে ডাকে অথচ তার পক্ষে তার কোনো প্রমাণ নেই, তার হিসাব একমাত্র তার প্রতিপালকের কাছেই; আর কাফিররা সফল হবে না। সূরাটি শুরুই হয়েছিল এই ঘোষণা দিয়ে যে মুমিনরা সফল হয়েছে। সেই বৃত্ত বন্ধ করার পর এটি রায়ের জায়গায় থেমে থাকে না; বরং যে অন্য পরিণতিটি চায়, তার হাতে চাওয়ার ঠিক শব্দগুলো তুলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Words Already Spoken Here",
          "bn": "এই সূরাতেই আগে বলা কথা"
        },
        "p": [
          {
            "en": "These are not new words. 23:109 quotes a group of the servants of Allah who used to say: our Lord, we have believed, so forgive us and have mercy upon us, and You are the best of the merciful. That quotation is spoken in the Fire, and 23:110 says the people addressed took them in mockery and used to laugh at them.",
            "bn": "এই শব্দগুলো নতুন নয়। 23:109 উদ্ধৃত করে আল্লাহর বান্দাদের একটি দলকে, যারা বলত: হে আমাদের প্রতিপালক, আমরা ঈমান এনেছি, তাই আমাদের ক্ষমা করুন ও আমাদের প্রতি দয়া করুন, আর আপনিই তো সর্বশ্রেষ্ঠ দয়ালু। এই উদ্ধৃতিটি উচ্চারিত হচ্ছে জাহান্নামে, আর 23:110 বলে, যাদের সম্বোধন করা হচ্ছে তারা তাদের নিয়ে ঠাট্টা করত ও হাসত।"
          },
          {
            "en": "The phrase khayru ar-rahimin, the best of the merciful, occurs in exactly two verses of the Quran, and both are in this surah: 23:109 and 23:118. So the sentence that was laughed at in the middle of the Judgement scene is the sentence the surah closes with, now placed by command in the mouth of the Prophet ﷺ. What the mockery could not reach has been made the last word of the whole surah.",
            "bn": "'খাইরুর রাহিমীন' — সর্বশ্রেষ্ঠ দয়ালু — এই বাক্যাংশটি কুরআনে ঠিক দুটি আয়াতে এসেছে, আর দুটিই এই সূরায়: 23:109 এবং 23:118। অর্থাৎ বিচারদিবসের দৃশ্যের মাঝখানে যে বাক্যটি নিয়ে হাসাহাসি হয়েছিল, সেই বাক্যটি দিয়েই সূরা শেষ হচ্ছে — এবার আদেশক্রমে নবী ﷺ-এর মুখে বসিয়ে দিয়ে। ঠাট্টা যেখানে পৌঁছাতে পারেনি, সেটিকেই গোটা সূরার শেষ কথা বানিয়ে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Imperatives, No Object",
          "bn": "দুটি আদেশ, কোনো কর্ম নেই"
        },
        "p": [
          {
            "en": "The prayer contains two requests, and both are imperatives: ighfir, forgive, and irham, have mercy. What is striking is what the Arabic leaves out. 23:109 had said faghfir lana warhamna — forgive us, have mercy on us — with the object stated. Here the objects are dropped altogether. The verbs stand bare after the address rabbi, my Lord, and the wording restricts neither what is asked for nor whom it is asked for.",
            "bn": "প্রার্থনাটিতে দুটি চাওয়া আছে, আর দুটিই আদেশবাচক: 'ইগফির' — ক্ষমা করুন, এবং 'ইরহাম' — দয়া করুন। বিস্ময়কর হলো আরবি এখানে কী বাদ দিয়েছে। 23:109-এ বলা হয়েছিল 'ফাগফির লানা ওয়ারহামনা' — আমাদের ক্ষমা করুন, আমাদের প্রতি দয়া করুন — যেখানে কর্ম উল্লেখ করা আছে। এখানে কর্মগুলো একেবারেই ফেলে দেওয়া হয়েছে। 'রাব্বি' অর্থাৎ 'হে আমার প্রতিপালক' সম্বোধনের পর ক্রিয়াপদ দুটি দাঁড়িয়ে আছে নগ্ন — শব্দবিন্যাস না কী চাওয়া হচ্ছে তা সীমিত করে, না কার জন্য চাওয়া হচ্ছে তা।"
          },
          {
            "en": "The plain-sense commentaries read the request as pardon for sins and mercy afterwards, and the address rabbi supplies who is asking. Still, the wording sets no limit of its own, and the two verbs cover the two things a person actually needs from Allah: the past dealt with, and the future carried. Forgiveness without mercy would leave a clean slate and no help; mercy without forgiveness would leave help and an unpaid debt.",
            "bn": "সরল-অর্থভিত্তিক তাফসীরগুলো চাওয়াটিকে পড়ে গুনাহের ক্ষমা ও তারপরের দয়া হিসেবে, আর 'রাব্বি' সম্বোধন থেকেই বোঝা যায় কে চাইছে। তবু শব্দবিন্যাস নিজে কোনো সীমা টানে না, আর ক্রিয়াপদ দুটি ঢেকে দেয় আল্লাহর কাছ থেকে মানুষের আসল দুটি প্রয়োজন: অতীতের নিষ্পত্তি, আর ভবিষ্যতের ভার বহন। দয়া ছাড়া কেবল ক্ষমা রেখে যেত পরিষ্কার খাতা কিন্তু কোনো সাহায্য নয়; ক্ষমা ছাড়া কেবল দয়া রেখে যেত সাহায্য আর একটি অপরিশোধিত ঋণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Khayr, Not Arham",
          "bn": "খাইর, আরহাম নয়"
        },
        "p": [
          {
            "en": "The Quran has a second superlative of mercy, arhamu ar-rahimin, the most merciful of the merciful. Musa (AS) uses it in 7:151, Ya'qub (AS) in 12:64, Yusuf (AS) in 12:92 and Ayyub (AS) in 21:83. This surah does not use it. It ends instead on khayru ar-rahimin, the best of those who show mercy, which speaks to the quality of the mercy and not only to its degree.",
            "bn": "কুরআনে দয়ার আরেকটি শ্রেষ্ঠত্ববাচক রূপ আছে — 'আরহামুর রাহিমীন', দয়ালুদের মধ্যে সর্বাধিক দয়ালু। মূসা (আঃ) এটি ব্যবহার করেন 7:151-এ, ইয়াকুব (আঃ) 12:64-এ, ইউসুফ (আঃ) 12:92-এ এবং আইয়ুব (আঃ) 21:83-এ। এই সূরা সেটি ব্যবহার করে না। এটি শেষ হয় 'খাইরুর রাহিমীন' দিয়ে — যারা দয়া করে তাদের মধ্যে সর্বোত্তম; কথাটি দয়ার মাত্রার পাশাপাশি তার ধরন সম্পর্কেও বলে।"
          },
          {
            "en": "The difference is worth a moment. Human mercy is real but partial: it tires, it is selective, it can be withdrawn when it becomes inconvenient, and it often cannot repair what it pities. Naming Allah the best of those who show mercy says that His is the same act done without any of those defects. The petitioner is not asking a stranger for a favour. He is naming the character of the One he is asking.",
            "bn": "পার্থক্যটি নিয়ে একটু থামা দরকার। মানুষের দয়া সত্যি, কিন্তু আংশিক: তা ক্লান্ত হয়, বেছে বেছে হয়, অসুবিধা হলে তুলে নেওয়া যায়, আর যাকে করুণা করে তাকে সারিয়ে তুলতে প্রায়ই পারে না। আল্লাহকে 'যারা দয়া করে তাদের মধ্যে সর্বোত্তম' বলার অর্থ, তাঁর দয়া একই কাজ — কিন্তু এসব ত্রুটির কোনোটি ছাড়াই। প্রার্থনাকারী কোনো অচেনা কারও কাছে অনুগ্রহ চাইছে না। সে যাঁর কাছে চাইছে, তাঁর স্বভাবটিরই নাম নিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why It Comes After Judgement",
          "bn": "বিচারের পরেই কেন"
        },
        "p": [
          {
            "en": "The last pages of the surah are hard. 23:99 has a man at death asking to be sent back so that he might do righteousness in what he left behind, and 23:100 answers that it is only a word he is saying. What that man wanted was more time to act; the surah's last instruction is to use the time by asking. Forgiveness and mercy remain obtainable after the record is written.",
            "bn": "সূরার শেষ পৃষ্ঠাগুলো কঠিন। 23:99-এ মৃত্যুর মুখে দাঁড়ানো একজন মানুষ ফিরিয়ে দেওয়ার আবেদন করে, যাতে সে যা ছেড়ে এসেছে তাতে ভালো কাজ করতে পারে; আর 23:100 জবাব দেয়, এ কেবল একটি কথা যা সে বলছে। সেই মানুষটি যা চেয়েছিল তা হলো কাজ করার জন্য আরও সময়; সূরার শেষ নির্দেশ হলো সেই সময়টি ব্যবহার করা — চেয়ে নেওয়ার মধ্য দিয়ে। খাতা লেখা হয়ে যাওয়ার পরেও ক্ষমা ও দয়া পাওয়া সম্ভব থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Six Words That Fit Anywhere",
          "bn": "ছয়টি শব্দ, সবখানে মানানসই"
        },
        "p": [
          {
            "en": "The practical value of this verse is its length. It fits into a walk, a queue, the pause between two tasks, and the moment after a sin when longer words will not come. It needs no occasion and no preparation, and because it stands in the Quran as a command, saying it is an act of obedience before it is ever an act of asking.",
            "bn": "এই আয়াতের ব্যবহারিক মূল্য তার দৈর্ঘ্যেই। এটি এঁটে যায় হাঁটার মধ্যে, লাইনে দাঁড়ানোর মধ্যে, দুই কাজের মাঝের বিরতিতে, আর গুনাহের পরের সেই মুহূর্তে যখন দীর্ঘ কোনো শব্দ মুখে আসে না। এর জন্য কোনো উপলক্ষ লাগে না, প্রস্তুতিও লাগে না; আর যেহেতু এটি কুরআনে একটি আদেশ হিসেবেই আছে, তাই এটি বলা চাওয়ার কাজ হওয়ার আগেই আনুগত্যের কাজ।"
          },
          {
            "en": "It also trains what a person asks for. Most requests concern arrangements — outcomes, timing, people. This one asks for the two things that sit underneath every arrangement, and asks them of the One whose mercy is described in the same breath. Say it often enough and it begins to sort the rest of the list, because a heart that has named its real needs stops confusing them with its preferences.",
            "bn": "এটি মানুষ কী চায় সেই অভ্যাসটিও গড়ে তোলে। বেশিরভাগ চাওয়া ব্যবস্থাপনা নিয়ে — ফলাফল, সময়, মানুষজন। এই চাওয়াটি সেই দুটি জিনিস চায় যা প্রতিটি ব্যবস্থার নিচে বসে আছে, আর চায় তাঁরই কাছে, একই নিঃশ্বাসে যাঁর দয়ার বর্ণনা দেওয়া হয়েছে। যথেষ্ট বার বললে এটি বাকি তালিকাটিও সাজিয়ে দিতে শুরু করে, কারণ যে হৃদয় তার আসল প্রয়োজনের নাম জেনে ফেলেছে, সে আর সেগুলোকে নিজের পছন্দের সঙ্গে গুলিয়ে ফেলে না।"
          }
        ]
      }
    ]
  }
});
