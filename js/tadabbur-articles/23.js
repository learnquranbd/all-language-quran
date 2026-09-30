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
