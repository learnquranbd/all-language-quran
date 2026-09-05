/**
 * Tadabbur long-form articles — surah 47.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "47:15": {
    "sections": [
      {
        "h": {
          "en": "A Comparison Missing Its First Half",
          "bn": "যে তুলনার প্রথম অর্ধেক নেই"
        },
        "p": [
          {
            "en": "Mathal al-jannati allati wu'ida al-muttaqun. Ikrimah glosses mathal here simply as its description. The verse then lays out rivers, fruits and forgiveness before swinging round at the very end to ka-man huwa khalidun fi'n-nar — like one who abides eternally in the Fire. The first term of the comparison is never spoken; Arabic leaves the reader to supply it, which is why translators supply it in brackets.",
            "bn": "মাসালুল জান্নাতিল্লাতী উ'ইদাল মুত্তাকূন। ইকরিমাহ এখানে 'মাসাল'-এর ব্যাখ্যা করেন সহজভাবে: এর বর্ণনা। এরপর আয়াতটি নদী, ফল ও ক্ষমা সাজিয়ে দেয়, আর একেবারে শেষে গিয়ে ঘুরে দাঁড়ায় 'কামান হুওয়া খালিদুন ফিন্‌নার'-এ — সে কি তার মতো, যে চিরকাল আগুনে থাকবে? তুলনার প্রথম পক্ষটি কখনো উচ্চারিতই হয় না; আরবি তা পাঠকের ওপর ছেড়ে দেয়, আর এ কারণেই অনুবাদকরা তা বন্ধনীর ভেতর জুড়ে দেন।"
          },
          {
            "en": "The ellipsis is not a hole in the sense. 47:14 has just asked whether one standing on clear evidence from his Lord is like one whose evil deed has been made beautiful to him. 47:16 goes straight on to those who listen to the Prophet ﷺ and then walk out asking what he said just now. The garden verse sits between two portraits of hearers, and it prices the difference between them.",
            "bn": "এই ঊহ্য অংশটি অর্থের ফাঁক নয়। 47:14 আয়াত ঠিক আগেই জিজ্ঞেস করেছে, যে তার রবের পক্ষ থেকে স্পষ্ট প্রমাণের ওপর দাঁড়িয়ে আছে সে কি তার মতো, যার মন্দ কাজকে তার কাছে সুশোভিত করা হয়েছে? আর 47:16 আয়াত সরাসরি চলে যায় তাদের কথায়, যারা নবী ﷺ-এর কথা শোনে, তারপর বেরিয়ে গিয়ে জিজ্ঞেস করে — তিনি এইমাত্র কী বললেন? জান্নাতের আয়াতটি বসে আছে দুই ধরনের শ্রোতার ছবির মাঝখানে, আর তাদের পার্থক্যের দামটি ধরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Rivers, Four Defects Removed",
          "bn": "চারটি নদী, চারটি ত্রুটি সরানো"
        },
        "p": [
          {
            "en": "Count them in the Arabic and there are four, each introduced by anhar: water, milk, wine, honey. What is striking is that each one is qualified by the removal of the exact thing that spoils its counterpart here. Water goes stale, so this water is ghayr asin — Ibn Abbas, al-Hasan and Qatadah gloss asin as changing, while ad-Dahhak and Ata' al-Khurasani gloss it as turning foul in smell.",
            "bn": "আরবিতে গুনে দেখলে সংখ্যাটি চার, প্রতিটির শুরুতে 'আনহার': পানি, দুধ, মদ ও মধু। লক্ষণীয় হলো, প্রতিটিকেই এমন বিশেষণ দেওয়া হয়েছে যা এখানকার তার সমতুল্য জিনিসটির নষ্ট হওয়ার কারণটিকেই সরিয়ে দেয়। পানি বাসি হয়ে যায়, তাই এই পানি 'গাইরি আসিন' — ইবনে আব্বাস, হাসান ও কাতাদাহ 'আসিন'-এর ব্যাখ্যা করেন 'পরিবর্তিত হওয়া' অর্থে, আর দাহহাক ও আতা আল-খুরাসানী করেন 'গন্ধ নষ্ট হয়ে যাওয়া' অর্থে।"
          },
          {
            "en": "Milk sours, so this milk's taste never changes. Wine harms whoever drinks it, so this is khamr ladhdhatin li'sh-sharibin, a delight to the drinkers, and 37:47 removes the harm by name: no ill effect in it, and no intoxication from it. Honey reaches us mixed with wax and sediment, so this honey is musaffa, clarified. Four familiar pleasures, each with its built-in disappointment taken out.",
            "bn": "দুধ টকে যায়, তাই এই দুধের স্বাদ কখনো বদলায় না। মদ পানকারীর ক্ষতি করে, তাই এখানে তা 'খামরিন লায্‌যাতিন লিশ-শারিবীন' — পানকারীদের জন্য সুস্বাদু; আর 37:47 আয়াত ক্ষতিটিকে নাম ধরে সরিয়ে দেয়: তাতে কোনো অনিষ্ট নেই, আর তা থেকে তারা মাতালও হবে না। মধু আমাদের কাছে আসে মোম ও তলানির সঙ্গে মিশে, তাই এই মধু 'মুসাফ্‌ফা' — পরিশোধিত। চারটি চেনা উপভোগ, প্রতিটির ভেতরে গেঁথে থাকা হতাশাটুকু বের করে নেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Names Are Doing",
          "bn": "নামগুলো যে কাজ করছে"
        },
        "p": [
          {
            "en": "At-Tirmidhi records, from Hakim ibn Mu'awiyah from his father, that the Prophet ﷺ said there is in Paradise a sea of water, a sea of honey, a sea of milk and a sea of wine, and that the rivers gush out of them afterwards; at-Tirmidhi graded that report hasan sahih. Alongside it stands the saying reported from Ibn Abbas, that there is nothing of this world in the Hereafter except the names.",
            "bn": "তিরমিযী বর্ণনা করেন, হাকীম ইবনে মুআবিয়া থেকে, তিনি তাঁর পিতা থেকে, যে নবী ﷺ বলেছেন — জান্নাতে আছে পানির সাগর, মধুর সাগর, দুধের সাগর ও মদের সাগর, আর নদীগুলো পরে সেগুলো থেকেই বেরিয়ে আসে; তিরমিযী বর্ণনাটিকে 'হাসান সহীহ' বলেছেন। এর পাশেই আছে ইবনে আব্বাস থেকে বর্ণিত কথাটি: দুনিয়ার কোনো কিছুই আখিরাতে নেই, নাম ছাড়া।"
          },
          {
            "en": "Both are needed at once. The names are true, or the description would be a deception; and the names are not the things, or the description would be a ceiling. So the four rivers tell you accurately what kind of thing is promised — drink, sweetness, refreshment that does not turn — without letting you conclude that you have already tasted it and found it ordinary.",
            "bn": "দুটিই একসঙ্গে দরকার। নামগুলো সত্য, নইলে বর্ণনাটি হতো প্রতারণা; আবার নামগুলোই সেই বস্তু নয়, নইলে বর্ণনাটি হতো একটি ছাদ। তাই চারটি নদী তোমাকে নির্ভুলভাবে জানায় কী ধরনের জিনিসের প্রতিশ্রুতি দেওয়া হচ্ছে — পানীয়, মিষ্টতা, এমন সতেজতা যা নষ্ট হয় না — অথচ তোমাকে এই সিদ্ধান্তে পৌঁছতে দেয় না যে তুমি তা আগেই চেখে দেখেছ এবং সাধারণ পেয়েছ।"
          }
        ]
      },
      {
        "h": {
          "en": "And Forgiveness From Their Lord",
          "bn": "আর তাদের রবের পক্ষ থেকে ক্ষমা"
        },
        "p": [
          {
            "en": "After the rivers and every kind of fruit, the list closes on something that is not a pleasure at all: wa maghfiratun min rabbihim, and forgiveness from their Lord. The Arabic commentaries read it as the covering and passing over of their sins, and call it greater than everything named before it. Nothing on the list can be enjoyed by someone whose account is still open.",
            "bn": "নদী আর সব রকম ফলের পর তালিকাটি শেষ হয় এমন কিছু দিয়ে যা মোটেই কোনো উপভোগ নয়: 'ওয়া মাগফিরাতুম মির রাব্বিহিম' — আর তাদের রবের পক্ষ থেকে ক্ষমা। আরবি তাফসীরগুলো একে পড়ে তাদের গুনাহ ঢেকে দেওয়া ও মাফ করে দেওয়া অর্থে, আর একে এর আগে উল্লিখিত সবকিছুর চেয়ে বড় বলে। যার হিসাব এখনো খোলা, তালিকার কোনো কিছুই সে উপভোগ করতে পারে না।"
          },
          {
            "en": "The Quran keeps them in that order elsewhere too. 3:133 tells the believers to race towards forgiveness from their Lord and a garden as wide as the heavens and the earth — forgiveness first, then the garden. And 9:72, having listed gardens with rivers beneath them and goodly dwellings, adds that ridwan from Allah, His approval, is greater than all of it. The gardens are real, and they are not the summit.",
            "bn": "কুরআন অন্যত্রও এই ক্রমটিই রাখে। 3:133 আয়াত মুমিনদের বলে ছুটে যেতে তাদের রবের ক্ষমার দিকে এবং সেই জান্নাতের দিকে যার বিস্তৃতি আসমানসমূহ ও যমীনের সমান — আগে ক্ষমা, তারপর জান্নাত। আর 9:72 আয়াত নিচে নদী প্রবাহিত জান্নাত ও উত্তম বাসস্থানের তালিকা দেওয়ার পর যোগ করে, আল্লাহর পক্ষ থেকে 'রিদওয়ান' — তাঁর সন্তুষ্টি — এ সবকিছুর চেয়ে বড়। জান্নাত সত্য, আর জান্নাতই শিখর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The One Drink on the Other Side",
          "bn": "অন্য পাশের একটিমাত্র পানীয়"
        },
        "p": [
          {
            "en": "Against four rivers stands a single drink. Ka-man huwa khalidun fi'n-nar wa suqu ma'an hamiman — and they were given scalding water to drink, fa-qatta'a am'a'ahum, so that it cut their intestines to pieces. Qatta'a is the intensive form of the verb; the cutting is not incidental. And suqu is passive: they are given it. Nobody in that half of the verse chooses what he swallows.",
            "bn": "চারটি নদীর বিপরীতে দাঁড়িয়ে আছে একটিমাত্র পানীয়। 'কামান হুওয়া খালিদুন ফিন্‌নারি ওয়া সুকূ মাআন হামীমা' — আর তাদের পান করানো হয়েছে ফুটন্ত পানি, 'ফাকাত্তাআ আম'আআহুম', যা তাদের নাড়িভুঁড়ি ছিন্নভিন্ন করে দেয়। 'কাত্তাআ' ক্রিয়াপদের নিবিড় রূপ; এই ছিন্ন করা আনুষঙ্গিক কিছু নয়। আর 'সুকূ' কর্মবাচ্য: তাদের পান করানো হয়। আয়াতের ওই অর্ধেকে কেউ নিজে বেছে নেয় না সে কী গিলছে।"
          },
          {
            "en": "The same drink appears elsewhere with the same weight placed on drinking as the image of the whole state. 18:29 says that if they call for relief they are relieved with water like murky oil that scalds the faces. 14:16-17 gives a drink of purulent water, gulped and hardly swallowed. Thirst is the one need that cannot be postponed, and both descriptions concentrate exactly there.",
            "bn": "একই পানীয় অন্যত্রও আসে, আর সেখানেও গোটা অবস্থার প্রতীক হিসেবে পান করার ওপরই ভর দেওয়া হয়। 18:29 আয়াত বলে, তারা যদি ফরিয়াদ করে তবে তাদের ফরিয়াদের জবাবে দেওয়া হবে গলিত ধাতুর মতো পানি, যা মুখমণ্ডল ঝলসে দেয়। 14:16-17 আয়াতে আছে পুঁজের মতো পানীয়, যা ঢোঁক গিলে নেওয়া হয় অথচ প্রায় গলা দিয়ে নামে না। তৃষ্ণাই একমাত্র প্রয়োজন যা পিছিয়ে দেওয়া যায় না, আর দুটি বর্ণনাই ঠিক সেখানেই মনোযোগ কেন্দ্রীভূত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing It Now",
          "bn": "এখনই ওজন করা"
        },
        "p": [
          {
            "en": "The verse works by comparison, so the reflection it asks for is comparative: not pleasure against pain, but what a pleasure here arrives bundled with against what these are promised without. Everything you enjoy today has its own asin built in — the milk that will turn, the taste that dulls, the good day that ends. That is no reason to despise it: the four rivers are named after four things already familiar to us here. It is a reason to spend part of today on the one item that is not a pleasure at all, asking for the forgiveness the verse places last and the commentators call greatest.",
            "bn": "আয়াতটি কাজ করে তুলনার মাধ্যমে, তাই এটি যে চিন্তা দাবি করে তাও তুলনামূলক: আনন্দ বনাম যন্ত্রণা নয়, বরং এখানকার একটি উপভোগের সঙ্গে যা যা বাঁধা থাকে আর ওখানকার প্রতিশ্রুত জিনিসগুলো যা ছাড়া দেওয়া হয়েছে — এই দুইয়ের তুলনা। আজ তুমি যা কিছু উপভোগ করো তার প্রতিটির ভেতরেই নিজস্ব একটি 'আসিন' গাঁথা আছে — যে দুধ টকে যাবে, যে স্বাদ ভোঁতা হয়ে আসে, যে ভালো দিনটি ফুরিয়ে যায়। এটি তাকে তুচ্ছ করার কারণ নয়: চারটি নদীর নামকরণ হয়েছে এখানকার চেনা চারটি জিনিসের নামেই। এটি বরং কারণ এই যে, আজকের কিছুটা সময় ব্যয় করতে হবে সেই একটিমাত্র জিনিসের জন্য যা মোটেই উপভোগ নয় — সেই ক্ষমা চাওয়ার জন্য, যাকে আয়াত রেখেছে সবার শেষে আর মুফাসসিরগণ বলেছেন সবার বড়।"
          }
        ]
      }
    ]
  },
  "47:24": {
    "sections": [
      {
        "h": {
          "en": "Who the Question Is About",
          "bn": "প্রশ্নটি কাদের নিয়ে"
        },
        "p": [
          {
            "en": "The question does not arrive out of nowhere. In 47:20 it is the believers who ask why a surah has not been sent down; but when a decisive surah is revealed and fighting is mentioned in it, you see those in whose hearts is disease looking at the Prophet ﷺ like one overcome by death. 47:22 then puts a question to them directly: would you, if you turned away, cause corruption on the earth and sever your ties of kinship? 47:23 gives the verdict — those are the ones Allah has cursed, so He deafened them and blinded their sight.",
            "bn": "প্রশ্নটি শূন্য থেকে আসে না। 47:20 আয়াতে মুমিনরাই জিজ্ঞেস করে, কেন কোনো সূরা নাযিল হয় না; কিন্তু যখন সুস্পষ্ট এক সূরা নাযিল হয় আর তাতে যুদ্ধের উল্লেখ থাকে, তখন যাদের অন্তরে রোগ আছে তুমি তাদের দেখবে নবী ﷺ-এর দিকে এমনভাবে তাকাতে যেমন মৃত্যুভয়ে জ্ঞান হারানো মানুষ তাকায়। এরপর 47:22 সরাসরি তাদেরই প্রশ্ন করে: তোমরা মুখ ফিরিয়ে নিলে কি যমীনে বিপর্যয় ঘটাবে আর তোমাদের আত্মীয়তার বন্ধন ছিন্ন করবে? 47:23 রায় দেয় — এরাই তারা যাদের আল্লাহ অভিশাপ দিয়েছেন, ফলে তিনি তাদের বধির করেছেন ও তাদের দৃষ্টি অন্ধ করেছেন।"
          },
          {
            "en": "Only then comes the question: then do they not reflect upon the Quran, or are there locks upon hearts? So it does not land on humanity at large; it lands on a group the passage has already described in detail. Deafness and blindness were named a verse earlier; this verse moves further in and names the door itself. And 47:25 continues in the same direction, describing those who turned back after guidance had become clear to them.",
            "bn": "কেবল তখনই আসে প্রশ্নটি: তারা কি কুরআন নিয়ে গভীরভাবে চিন্তা করে না, নাকি অন্তরগুলোর ওপর তালা লাগানো? তাই এটি গোটা মানবজাতির ওপর গিয়ে পড়ে না; এটি গিয়ে পড়ে এমন একটি দলের ওপর, যাদের এই অংশ ইতিমধ্যেই বিস্তারিতভাবে বর্ণনা করেছে। বধিরতা ও অন্ধত্বের নাম এক আয়াত আগেই নেওয়া হয়েছে; এই আয়াত আরও ভেতরে গিয়ে দরজাটিরই নাম নেয়। আর 47:25 একই দিকে এগিয়ে যায়, বর্ণনা করে তাদের কথা যারা হিদায়াত স্পষ্ট হওয়ার পরেও পিছু ফিরে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Same as 4:82",
          "bn": "4:82 আয়াতের মতো এক নয়"
        },
        "p": [
          {
            "en": "Word for word, the opening here is the opening of 4:82 — afala yatadabbaruna al-Quran. The second halves then part company completely. 4:82 turns outward to the Book and offers a test: had it come from other than Allah, they would have found much contradiction in it. This verse turns inward to the listener and offers a diagnosis. One asks what the Quran is; the other asks what you are.",
            "bn": "শব্দে শব্দে এখানকার সূচনা হলো 4:82 আয়াতেরই সূচনা — আফালা ইয়াতাদাব্বারূনাল কুরআন। এরপর দুটির দ্বিতীয়ার্ধ সম্পূর্ণ আলাদা পথে চলে যায়। 4:82 বাইরের দিকে, কিতাবের দিকে ফেরে এবং একটি পরীক্ষা দেয়: এটি আল্লাহ ছাড়া অন্য কারও কাছ থেকে এলে তারা এতে বহু অসঙ্গতি পেত। আর এই আয়াত ভেতরের দিকে, শ্রোতার দিকে ফেরে এবং একটি রোগনির্ণয় দেয়। একটি জিজ্ঞেস করে কুরআন কী; অন্যটি জিজ্ঞেস করে তুমি কী।"
          },
          {
            "en": "That is why the two are not a repetition. Between them they cover the whole failure: a Book that will survive any scrutiny brought to it, and a heart that never brings any. The first claim anyone can verify by reading. The second cannot be verified by reading at all — it is verified by watching what the reading does to you afterwards.",
            "bn": "এ কারণেই দুটি আয়াত পুনরাবৃত্তি নয়। দুটি মিলে পুরো ব্যর্থতাটিকেই ঢেকে ফেলে: এমন এক কিতাব যা তার ওপর আনা যেকোনো যাচাই সহ্য করবে, আর এমন এক অন্তর যা কোনো যাচাই কখনো নিয়েই আসে না। প্রথম দাবিটি যে কেউ পড়ে যাচাই করতে পারে। দ্বিতীয়টি পড়ে যাচাই করাই যায় না — তা যাচাই হয় সেই পড়া পরে আপনার ভেতরে কী করে তা লক্ষ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Locks That Belong to the Heart",
          "bn": "যে তালা অন্তরেরই নিজের"
        },
        "p": [
          {
            "en": "The verse is seven words in Arabic: afala yatadabbaruna al-Qur'ana am ala qulubin aqfaluha. Two details in the second half do a great deal of work. Qulubin is indefinite — upon hearts, some hearts — not upon the hearts of humanity in general. The rebuke is aimed rather than universal, which leaves the door standing open for everyone it does not describe.",
            "bn": "আয়াতটি আরবিতে সাতটি শব্দ: আফালা ইয়াতাদাব্বারূনাল কুরআনা আম আলা কুলূবিন আকফালুহা। দ্বিতীয়ার্ধের দুটি খুঁটিনাটি অনেকখানি কাজ করে। কুলূবিন শব্দটি নাকিরা বা অনির্দিষ্ট — কিছু অন্তরের ওপর — গোটা মানবজাতির অন্তরের ওপর নয়। তিরস্কারটি লক্ষ্যভেদী, সর্বজনীন নয়, ফলে যাদের এটি বর্ণনা করছে না তাদের সবার জন্য দরজা খোলাই থেকে যায়।"
          },
          {
            "en": "The second detail is the pronoun. Aqfaluha is not simply locks; it is their locks, the locks belonging to those hearts. The fastening is not foreign hardware bolted on by somebody else. It is theirs, fitted to them, and matched to the door it closes. That single suffix is the difference between a misfortune and a verdict.",
            "bn": "দ্বিতীয় খুঁটিনাটি হলো সর্বনামটি। আকফালুহা মানে কেবল 'তালা' নয়; এর অর্থ 'তাদের তালা', অর্থাৎ সেই অন্তরগুলোরই তালা। এই বন্ধনী বাইরে থেকে অন্য কারও লাগিয়ে দেওয়া কোনো যন্ত্র নয়। এটি তাদেরই, তাদের মাপেই বানানো, আর যে দরজা বন্ধ করছে তার সাথেই মেলানো। এই একটি প্রত্যয়ই দুর্ভাগ্য আর রায়ের মধ্যেকার পার্থক্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Locks, Seals and Stains",
          "bn": "তালা, মোহর ও কলঙ্ক"
        },
        "p": [
          {
            "en": "The Quran has more than one image for a closed heart, and they are not interchangeable. 2:7 speaks of a seal set upon hearts and hearing. 63:3 says the hearts of a group were sealed over because they believed and then disbelieved. 18:57 places coverings over hearts lest they understand it. 83:14 names a stain that has covered hearts from what they were earning.",
            "bn": "বন্ধ অন্তরের জন্য কুরআনে একাধিক চিত্রকল্প আছে, আর সেগুলো একটির বদলে অন্যটি বসানো যায় না। 2:7 অন্তর ও শ্রবণের ওপর মোহর লাগানোর কথা বলে। 63:3 বলে, একটি দলের অন্তরে মোহর মেরে দেওয়া হয়েছে, কারণ তারা ঈমান এনেছিল তারপর কুফরি করেছে। 18:57 অন্তরের ওপর আবরণ রেখে দেয়, যাতে তারা তা না বোঝে। 83:14 এমন এক কলঙ্কের নাম নেয় যা তাদের উপার্জনের কারণে তাদের অন্তর ঢেকে ফেলেছে।"
          },
          {
            "en": "A lock is the gentlest of these images and the most pointed. Seals and coverings suggest something laid on from outside; a lock is fitted to a door that was built to open, and it is normally fitted by whoever holds the key. 83:14 supplies the mechanism plainly — the covering came from what they were earning. Hearts close by deeds, one deed at a time.",
            "bn": "এই চিত্রকল্পগুলোর মধ্যে তালা সবচেয়ে কোমল, আর সবচেয়ে তীক্ষ্ণও। মোহর ও আবরণ বাইরে থেকে চাপিয়ে দেওয়া কিছুর ইঙ্গিত দেয়; কিন্তু তালা লাগানো হয় এমন এক দরজায় যা খোলার জন্যই বানানো হয়েছিল, আর সাধারণত তা লাগায় সেই ব্যক্তি যার হাতে চাবি। 83:14 কার্যপদ্ধতিটি স্পষ্ট করে দেয় — আবরণটি এসেছে তাদের উপার্জন থেকে। অন্তর বন্ধ হয় আমলের মাধ্যমে, একটি একটি করে।"
          }
        ]
      },
      {
        "h": {
          "en": "How a Heart Closes",
          "bn": "একটি অন্তর কীভাবে বন্ধ হয়"
        },
        "p": [
          {
            "en": "Muslim narrates from Hudhayfah ibn al-Yaman (RA) that trials are presented to hearts as a reed mat is woven, stick by stick. A heart that soaks one up is marked with a black spot; a heart that rejects it is marked with a white one, until hearts end up as two kinds — one white, which no trial harms while the heavens and the earth last, and one black and overturned, recognising no good and rejecting no evil except what its own desire has absorbed.",
            "bn": "মুসলিম হুযাইফা ইবনুল ইয়ামান (রাঃ) থেকে বর্ণনা করেন, ফিতনা অন্তরের সামনে এমনভাবে পেশ করা হয় যেভাবে চাটাই বোনা হয়, একটি একটি কাঠি করে। যে অন্তর তা শুষে নেয় তাতে একটি কালো দাগ পড়ে; আর যে অন্তর তা প্রত্যাখ্যান করে তাতে একটি সাদা দাগ পড়ে — শেষ পর্যন্ত অন্তর দুই রকম হয়ে দাঁড়ায়: একটি সাদা, আসমান ও যমীন যতদিন আছে কোনো ফিতনা যাকে ক্ষতি করবে না; আর একটি কালো ও উল্টানো, যা কোনো ভালোকে চেনে না আর কোনো মন্দকে প্রত্যাখ্যান করে না, কেবল তার নিজের প্রবৃত্তি যা শুষে নিয়েছে তা ছাড়া।"
          },
          {
            "en": "That is this verse described from the inside. Nobody is locked in a single day. The mat is woven stick by stick, and reading that never becomes reflection is one of the sticks — Quran heard so often that it stops being heard at all. as-Sa'di puts it starkly: hearts that opened themselves to denial and heedlessness then shut, and good no longer finds a way in.",
            "bn": "এটিই এই আয়াতের ভেতর থেকে দেখা বর্ণনা। কেউ একদিনে তালাবদ্ধ হয় না। চাটাই বোনা হয় একটি একটি কাঠি করে, আর যে পাঠ কখনো চিন্তায় পরিণত হয় না সেটিও একটি কাঠি — এত বেশি শোনা কুরআন যে তা আর শোনাই হয় না। আস-সা'দী কথাটি নির্দয়ভাবে বলেন: যে অন্তরগুলো নিজেদের অস্বীকার ও উদাসীনতার জন্য খুলে দিয়েছিল, সেগুলোই এরপর বন্ধ হয়ে যায়, আর কল্যাণ আর ভেতরে ঢোকার পথ পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Answering the Question",
          "bn": "প্রশ্নটির জবাব দেওয়া"
        },
        "p": [
          {
            "en": "The verse is a question, and a question is meant to be answered by the one it is put to. It has a usable form: when did I last stop at a verse and stay there? The honest answer is information, not condemnation. Locks come undone from the inside, and 39:23 describes what an open heart does when the Book is recited to it — skins that shiver, then skins and hearts that relax at the remembrance of Allah. That is a test anyone can run tonight.",
            "bn": "আয়াতটি একটি প্রশ্ন, আর প্রশ্নের জবাব দেওয়ার কথা তারই, যাকে তা করা হয়েছে। এর একটি ব্যবহারযোগ্য রূপ আছে: শেষ কবে আমি একটি আয়াতে থেমে সেখানে কিছুক্ষণ ছিলাম? সৎ জবাবটি তথ্য, ভর্ৎসনা নয়। তালা খোলে ভেতর থেকে, আর 39:23 বর্ণনা করে খোলা অন্তর কী করে যখন তার সামনে কিতাব তিলাওয়াত করা হয় — চামড়া শিউরে ওঠে, তারপর চামড়া ও অন্তর আল্লাহর স্মরণে কোমল হয়। এটি এমন এক পরীক্ষা, যা যে কেউ আজ রাতেই চালিয়ে দেখতে পারে।"
          }
        ]
      }
    ]
  }
});
