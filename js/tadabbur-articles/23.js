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
