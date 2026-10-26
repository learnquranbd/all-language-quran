/**
 * Tadabbur long-form articles — surah 62.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "62:1": {
    "sections": [
      {
        "h": {
          "en": "A Verb Still Running",
          "bn": "যে ক্রিয়া এখনো চলছে"
        },
        "p": [
          {
            "en": "Surat al-Jumu'a opens on a verb: yusabbihu lillahi ma fi as-samawati wa ma fi al-ard, exalting Allah is whatever is in the heavens and whatever is on the earth. Ma'arif al-Qur'an places the verse in a family. Surahs that begin with sabbaha or yusabbihu, it says, are called the Musabbihat, and in all of them it is established that everything in the heavens and the earth proclaims the purity of Allah. What deserves attention here is its form.",
            "bn": "সূরা জুমুআ শুরু হয় একটি ক্রিয়া দিয়ে: ইউসাব্বিহু লিল্লাহি মা ফিস-সামাওয়াতি ওয়া মা ফিল-আরদ, আসমানে যা কিছু আছে আর যমীনে যা কিছু আছে, সবই আল্লাহর মহিমা ঘোষণা করছে। মাআরিফুল কুরআন আয়াতটিকে একটি পরিবারের ভেতরে রাখে। যেসব সূরা সাব্বাহা বা ইউসাব্বিহু দিয়ে শুরু, সেগুলোকে বলা হয় মুসাব্বিহাত। এর প্রতিটিতেই প্রতিষ্ঠিত কথা হলো, আসমান ও যমীনের সবকিছু আল্লাহর পবিত্রতা ঘোষণা করে। এখানে নজর দেওয়ার মতো জিনিস হলো এর গড়ন।"
          },
          {
            "en": "Ma'arif observes that most of the Musabbihat open with the past tense, sabbaha, and that only al-Jumu'a and at-Taghabun use the present form yusabbihu; 64:1 indeed begins with the same clause as this verse. It explains the difference by what each tense carries. The past connotes certitude, which is why it is used most often. The present connotes continuity, and it is employed in these two places for that purpose. On this reading the glorification is not reported as something completed. It is going on while the verse is being recited.",
            "bn": "মাআরিফুল কুরআন লক্ষ করে, মুসাব্বিহাতের বেশির ভাগ শুরু হয়েছে অতীত কালের সাব্বাহা দিয়ে। বর্তমান কালের ইউসাব্বিহু আছে শুধু দুই জায়গায়: সূরা জুমুআ আর সূরা তাগাবুন। ৬৪:১ আয়াত সত্যিই এই আয়াতের একই বাক্যাংশ দিয়ে শুরু। পার্থক্যের ব্যাখ্যা মাআরিফ দেয় দুই কালের অর্থ দিয়ে। অতীত কাল নিশ্চয়তা বোঝায়, তাই সেটাই বেশি এসেছে। বর্তমান কাল বোঝায় ধারাবাহিকতা, আর সেই উদ্দেশ্যেই এই দুই জায়গায় তার ব্যবহার। এভাবে পড়লে তাসবীহের খবরটা শেষ হয়ে যাওয়া কোনো ঘটনার খবর নয়। আয়াতটি যখন তিলাওয়াত হচ্ছে, তখনো তা চলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Everything, Speaking or Silent",
          "bn": "সবাক হোক বা নির্বাক"
        },
        "p": [
          {
            "en": "At-Tabari reads the subject as widely as it will go. Every thing in the seven heavens, he says, and every thing in the earths, al-aradin in the plural, of His creation, glorifies Allah and magnifies Him, taw'an wa karhan, willingly and unwillingly. In his gloss, then, the glorification of creation is not confined to those who offer it gladly; it reaches the unwilling as well.",
            "bn": "তাবারী কর্তাটিকে যতদূর সম্ভব প্রশস্ত করে পড়েন। তাঁর ভাষায়, সাতটি আসমানের প্রতিটি জিনিস এবং যমীনসমূহের প্রতিটি জিনিস, আল-আরাদীন শব্দটি এখানে বহুবচনে, তাঁর সৃষ্টির সবকিছু আল্লাহর তাসবীহ করে এবং তাঁর মহত্ত্ব ঘোষণা করে, তাওআন ওয়া কারহান: স্বেচ্ছায় ও অনিচ্ছায়। তাবারীর ব্যাখ্যায় তাই সৃষ্টির তাসবীহ শুধু খুশিমনে যারা করে তাদের মধ্যে সীমিত নয়। অনিচ্ছুকরাও এর আওতায় পড়ে।"
          },
          {
            "en": "Ibn Kathir makes the breadth explicit in another way. Whatever is in the heavens and the earth means, in his words, all created things, natiqiha wa jamidiha, those that speak and those that are inert. He supports it with 17:44: wa in min shay'in illa yusabbihu bi-hamdih, there is not a thing but glorifies His praise. The verse's small word ma, whatever, therefore carries a great deal. On Ibn Kathir's reading it takes in the stone as surely as the speaker, and the opening of al-Jumu'a stands on the same ground as that verse in al-Isra'.",
            "bn": "ইবন কাসীর এই প্রশস্ততা স্পষ্ট করেন অন্যভাবে। তাঁর কথায়, আসমান ও যমীনে যা কিছু আছে মানে সমস্ত সৃষ্টি, নাতিকুহা ওয়া জামিদুহা: যারা কথা বলে তারাও, যারা জড় তারাও। প্রমাণ হিসেবে তিনি আনেন ১৭:৪৪ আয়াত: ওয়া ইন মিন শাইয়িন ইল্লা ইউসাব্বিহু বিহামদিহ, এমন কিছু নেই যা তাঁর প্রশংসাসহ তাসবীহ করে না। আয়াতের ছোট্ট শব্দ মা, অর্থাৎ যা কিছু, তাই অনেক ভার বহন করে। ইবন কাসীরের পাঠে এর ভেতরে কথা-বলা মানুষ যেমন আছে, তেমনি নিশ্চিতভাবে আছে পাথরও। জুমুআর সূচনা আর সূরা ইসরার ওই আয়াত একই ভিত্তির উপর দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Real Praise or Mute Testimony",
          "bn": "সত্যিকারের তাসবীহ, না নীরব সাক্ষ্য"
        },
        "p": [
          {
            "en": "How does a stone glorify? Ma'arif al-Qur'an takes the question head on. It grants first that a symbolic understanding is easy to accept. Anyone can see that every particle Allah created bears testimony to the wisdom and power of the Wise Creator in its circumstantial language, and on that view this testimony is its tasbih. A thing need not speak for its existence and its order to point beyond itself to its Maker, and on this view that pointing is counted as its praise.",
            "bn": "পাথর কীভাবে তাসবীহ করে? মাআরিফুল কুরআন প্রশ্নটার মুখোমুখি হয় সরাসরি। প্রথমে মেনে নেয়, রূপক অর্থে বোঝাটা সহজ। যে কেউ বুঝতে পারে, আল্লাহর সৃষ্টি প্রতিটি কণা তার অবস্থার ভাষায় মহাজ্ঞানী স্রষ্টার প্রজ্ঞা ও ক্ষমতার সাক্ষ্য দেয়। এই মতে সেই সাক্ষ্যই তার তাসবীহ। কোনো জিনিসকে কথা বলতে হয় না। তার অস্তিত্ব আর তার শৃঙ্খলাই নিজেকে ছাড়িয়ে ইশারা করে তার স্রষ্টার দিকে। এ দৃষ্টিতে সেই ইশারাটাই তার প্রশংসা বলে গণ্য।"
          },
          {
            "en": "Ma'arif then states its own position: everything proclaims tasbih in its real sense, in its own way. Allah, it says, has given some sort of sense and perception to every particle of the universe, even to stones and trees, according to their capacity. Since the first demand on any perception is to recognise its Maker and glorify Him, it is not far-fetched that everything really declares His purity in its own language, though human ears cannot hear it. It closes on 17:44 again: wa lakin la tafqahuna tasbihahum, but you do not understand their glorifying.",
            "bn": "এরপর মাআরিফ নিজের অবস্থান জানায়: প্রতিটি জিনিস তাসবীহ করে প্রকৃত অর্থেই, নিজের নিজের ধরনে। তার কথা, আল্লাহ এই বিশ্বের প্রতিটি কণাকে তার সামর্থ্য অনুযায়ী কিছু না কিছু অনুভূতি ও বোধ দিয়েছেন, পাথর আর গাছকেও। যেকোনো বোধের প্রথম দাবি হলো নিজের স্রষ্টাকে চেনা আর তাঁর মহিমা ঘোষণা করা। কাজেই প্রতিটি জিনিস নিজের ভাষায় সত্যিই তাঁর পবিত্রতা ঘোষণা করছে, এ কথা অসম্ভব কিছু নয়, যদিও মানুষের কান তা শোনে না। শেষে মাআরিফ আবার ১৭:৪৪ আয়াত টানে: ওয়া লাকিল লা তাফকাহূনা তাসবীহাহুম, কিন্তু তোমরা তাদের তাসবীহ বোঝো না।"
          },
          {
            "en": "Two other commentaries widen what the verb itself covers. Al-Muyassar renders yusabbihu as yunazzihu: everything in the heavens and the earth declares Allah above whatever does not befit Him. As-Sa'di gathers four verbs into his gloss. Everything in the heavens and the earth yusabbihu, glorifies Him; yanqadu li-amrihi, yields to His command; yata'allahuhu, holds Him as its god; and ya'buduhu, worships Him. In as-Sa'di's account, then, tasbih reaches beyond a word on the tongue to submission and worship, and on his reading the verse describes all creation in obedience to its Lord.",
            "bn": "আরও দুটি তাফসীর ক্রিয়াটির পরিধি বাড়িয়ে দেয়। মুয়াসসার ইউসাব্বিহু-র অর্থ করে ইউনায্যিহু: আসমান ও যমীনের সবকিছু আল্লাহকে এমন সবকিছু থেকে মুক্ত ঘোষণা করে যা তাঁর শানে মানায় না। সা'দী তাঁর ব্যাখ্যায় চারটি ক্রিয়া একসঙ্গে আনেন। আসমান ও যমীনের সবকিছু তাঁর তাসবীহ করে, তাঁর হুকুমের কাছে নত হয়, তাঁকেই ইলাহ বলে মানে, আর তাঁর ইবাদত করে। সা'দীর বর্ণনায় তাসবীহ তাই মুখের একটা শব্দে আটকে থাকে না। তা গিয়ে পৌঁছায় আনুগত্য আর ইবাদতে। তাঁর পাঠে আয়াতটি দেখায় গোটা সৃষ্টিকে, যা তার রবের আনুগত্যে লেগে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Malik Over Both Worlds",
          "bn": "দুই জগতের অধিপতি"
        },
        "p": [
          {
            "en": "Then come four names, and the first is al-Malik. At-Tabari glosses it as He to whom belong the dominion of this world and the next and the authority over both, whose command is carried out in the heavens and the earth and all they contain. Ibn Kathir says He is the owner of the heavens and the earth, who disposes of them by His rule. Al-Muyassar adds a note of exclusiveness: He alone is the owner of everything, disposing of it with no one to contest Him.",
            "bn": "এরপর আসে চারটি নাম, প্রথমটি আল-মালিক। তাবারীর ব্যাখ্যায় তিনি সেই সত্তা, দুনিয়া ও আখিরাতের রাজত্ব আর দুইয়ের উপর কর্তৃত্ব যাঁর, আসমান-যমীন আর তার ভেতরের সবকিছুতে যাঁর হুকুম কার্যকর। ইবন কাসীর বলেন, তিনি আসমান ও যমীনের মালিক, নিজের বিধান অনুযায়ী দুটিকে পরিচালনা করেন। মুয়াসসার এতে যোগ করে একক হওয়ার সুর: সবকিছুর মালিক তিনি একাই, সবকিছু তিনিই পরিচালনা করেন, তাঁর সঙ্গে বিরোধ করার কেউ নেই।"
          },
          {
            "en": "As-Sa'di ties the name to the opening verb with a because. Everything in the heavens and the earth glorifies Allah, he writes, because He is perfect in kingship, the one who holds dominion over the upper world and the lower, so that all of it is His possession and under His management. In this reading the first name is not an ornament attached to the end of the verse. It gives the reason for what the verse began with: creation glorifies its King because it belongs to Him.",
            "bn": "সা'দী নামটিকে শুরুর ক্রিয়ার সঙ্গে জুড়ে দেন একটি 'কারণ' দিয়ে। তিনি লেখেন, আসমান ও যমীনের সবকিছু আল্লাহর তাসবীহ করে, কারণ রাজত্বে তিনি পরিপূর্ণ। ঊর্ধ্বজগৎ ও নিম্নজগৎ দুটোরই রাজত্ব তাঁর। ফলে সবকিছুই তাঁর মালিকানাধীন, সবকিছুই তাঁর পরিচালনার অধীনে। এই পাঠে প্রথম নামটি আয়াতের শেষে জুড়ে দেওয়া অলংকার নয়। আয়াত যা দিয়ে শুরু হয়েছিল, নামটি তারই কারণ জানায়: সৃষ্টি তার মালিকের তাসবীহ করে, কেননা সে তাঁরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Quddus, the Verb Named",
          "bn": "আল-কুদ্দূস: ক্রিয়াটির নাম"
        },
        "p": [
          {
            "en": "The second name is al-Quddus. Ibn Kathir explains it as al-munazzah 'an an-naqa'is, declared free of deficiencies, al-mawsuf bi-sifat al-kamal, described by the attributes of perfection. At-Tabari's gloss faces outward, towards what people say: al-Quddus is at-tahir, the pure, clear of everything the polytheists attach to Him and describe Him with that is not among His blessed attributes. As-Sa'di calls Him al-mu'azzam, the magnified, al-munazzah 'an kulli afatin wa naqs, free of every blemish and every deficiency.",
            "bn": "দ্বিতীয় নাম আল-কুদ্দূস। ইবন কাসীর এর ব্যাখ্যা দেন আল-মুনায্যাহু আনিন-নাকাইস, সব ত্রুটি থেকে মুক্ত, আল-মাওসূফু বিসিফাতিল কামাল, পূর্ণতার গুণে গুণান্বিত। তাবারীর ব্যাখ্যার মুখ বাইরের দিকে, মানুষ যা বলে সেদিকে। তাঁর মতে আল-কুদ্দূস মানে আত-তাহির, পবিত্র। মুশরিকরা তাঁর সঙ্গে যা জুড়ে দেয়, তাঁর বরকতময় গুণের মধ্যে নেই এমন যা দিয়ে তাঁকে বর্ণনা করে, সে সবকিছু থেকে তিনি পবিত্র। সা'দী তাঁকে বলেন আল-মুআযযাম, মহিমান্বিত, আল-মুনায্যাহু আন কুল্লি আফাতিন ওয়া নাকস, সব দোষ আর সব ঘাটতি থেকে মুক্ত।"
          },
          {
            "en": "Set those glosses beside al-Muyassar's and a pattern appears in the commentators' own wording. Al-Muyassar explains the opening verb as yunazzihu, declaring Allah free of what does not befit Him, and explains al-Quddus as al-munazzah 'an kulli naqs, declared free of every deficiency. Ibn Kathir and as-Sa'di use the same word, munazzah, for al-Quddus. In their phrasing the name and the verb meet on one root, n-z-h. The verse reports what all creation is doing, and al-Quddus names Him of whom it is true.",
            "bn": "এই ব্যাখ্যাগুলোকে মুয়াসসারের পাশে রাখলে তাফসীরকারদের নিজেদের শব্দেই একটা মিল চোখে পড়ে। মুয়াসসার শুরুর ক্রিয়াটির অর্থ করে ইউনায্যিহু, অর্থাৎ যা তাঁর শানে মানায় না তা থেকে আল্লাহকে মুক্ত ঘোষণা করা। আর আল-কুদ্দূসের অর্থ করে আল-মুনায্যাহু আন কুল্লি নাকস, সব ঘাটতি থেকে মুক্ত। ইবন কাসীর ও সা'দীও আল-কুদ্দূসের জন্য একই শব্দ মুনায্যাহ ব্যবহার করেন। তাঁদের ভাষায় নাম আর ক্রিয়া মিলেছে একই ধাতুতে, ন-য-হ। আয়াত জানায় গোটা সৃষ্টি কী করছে, আর আল-কুদ্দূস নামটি বলে দেয় কার বেলায় সেই কথা সত্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Might and Wisdom, Glossed",
          "bn": "পরাক্রম ও প্রজ্ঞার ব্যাখ্যা"
        },
        "p": [
          {
            "en": "On al-'Aziz the commentators take different angles. At-Tabari: ash-shadid fi intiqamihi min a'da'ih, severe in His retribution upon His enemies. Al-Muyassar: alladhi la yughalab, He who is never overcome. As-Sa'di: al-qahir lil-ashya'i kulliha, who has mastery over all things. Ibn Kathir offers no fresh gloss here and says only that its explanation has already been given repeatedly. The readings do not contradict each other, but they stress different things: retribution, invincibility, mastery.",
            "bn": "আল-আযীয প্রসঙ্গে তাফসীরকারেরা ভিন্ন ভিন্ন দিক ধরেন। তাবারী: আশ-শাদীদু ফী ইনতিকামিহি মিন আদাইহ, শত্রুদের থেকে প্রতিশোধ নেওয়ায় কঠোর। মুয়াসসার: আল্লাযী লা ইউগালাব, যাঁকে কখনো পরাস্ত করা যায় না। সা'দী: আল-কাহিরু লিল-আশইয়াই কুল্লিহা, যিনি সবকিছুর উপর প্রবল। ইবন কাসীর এখানে নতুন ব্যাখ্যা দেন না, শুধু বলেন এর ব্যাখ্যা আগে একাধিকবার এসেছে। এসব ব্যাখ্যায় পরস্পরবিরোধ নেই, তবে জোর পড়েছে আলাদা জায়গায়: প্রতিশোধ, অপরাজেয়তা, আধিপত্য।"
          },
          {
            "en": "Al-Hakim draws closer agreement. At-Tabari places the wisdom in His management of His creation and in His directing them according to what He knows best of their welfare. Al-Muyassar puts it in His management and His making, as-Sa'di in His creation and His command. The pair returns two verses later: 62:3 closes on wa huwa al-'azizu al-hakim, after the mention of others of them who have not yet joined them. Ibn Kathir, there, says the pair asserts that He is Almighty and All-Wise in His legislation and in the destiny He appoints.",
            "bn": "আল-হাকীম নিয়ে মতের মিল বেশি। তাবারী প্রজ্ঞার জায়গা দেখান সৃষ্টির পরিচালনায়, আর তাদের কল্যাণ তিনিই ভালো জানেন বলে সেই অনুযায়ী তাদের চালনায়। মুয়াসসারের কাছে তা তাঁর পরিচালনা ও নির্মাণে, সা'দীর কাছে তাঁর সৃষ্টি ও তাঁর আদেশে। দুই আয়াত পরে জোড়াটি আবার ফেরে। ৬২:৩ আয়াত শেষ হয় ওয়া হুওয়াল আযীযুল হাকীম দিয়ে, যারা এখনো তাদের সঙ্গে মিলিত হয়নি, তাদেরই আরও কিছু লোকের কথা বলার পর। সেখানে ইবন কাসীর বলেন, জোড়াটি জানিয়ে দেয় যে তাঁর বিধান আর তাঁর নির্ধারিত তাকদীর, দুটোতেই তিনি মহাপরাক্রমশালী ও মহাপ্রজ্ঞাময়।"
          },
          {
            "en": "Al-Qurtubi says the verse has been discussed before and adds a single point about its recitation. Abu al-'Aliya and Nasr ibn 'Asim, he reports, read all four names in the nominative, al-maliku al-quddusu al-'azizu al-hakimu, meaning huwa al-malik, He is the King. In the received text the names end in -i, the same case as Allah in lillahi, so they run straight on from His name. The reading al-Qurtubi reports turns them into a fresh statement about Him; the received text keeps them fastened to the name being glorified.",
            "bn": "কুরতুবী বলেন, আয়াতটির আলোচনা আগেই হয়েছে। তিনি শুধু এর কিরাআত নিয়ে একটি কথা যোগ করেন। তাঁর বর্ণনায় আবুল আলিয়া ও নাসর ইবন আসিম চারটি নামই পড়েছেন পেশ দিয়ে: আল-মালিকু আল-কুদ্দূসু আল-আযীযু আল-হাকীমু, যার অর্থ হুওয়াল মালিক, তিনিই অধিপতি। প্রচলিত পাঠে নামগুলোর শেষে যের, লিল্লাহি শব্দে আল্লাহ নামটির যে অবস্থা, সেই একই অবস্থা। ফলে নামগুলো সোজা তাঁর নামের সঙ্গেই চলতে থাকে। কুরতুবীর বর্ণিত পাঠে নামগুলো হয়ে যায় তাঁর সম্পর্কে নতুন একটি ঘোষণা। প্রচলিত পাঠে সেগুলো যুক্ত থাকে সেই নামের সঙ্গেই, যাঁর তাসবীহ হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited at the Friday Prayer",
          "bn": "জুমার নামাযের তিলাওয়াত"
        },
        "p": [
          {
            "en": "The surah is Madinan. Al-Qurtubi says this is the view of all, fi qawl al-jami', and counts it at eleven verses; Ibn Kathir and al-Baghawi also label it Madinan. Ibn Kathir opens his commentary on it not with a gloss but with a practice. From Ibn Abbas and Abu Hurayrah (RA), he writes, the Messenger of Allah ﷺ used to recite Surat al-Jumu'a and al-Munafiqun in the Friday prayer, and he adds that Muslim narrated it in his Sahih. The hadith attaches to the surah as a whole, and so to its opening verse.",
            "bn": "সূরাটি মাদানী। কুরতুবী বলেন, এ কথা সবার, আর তিনি এর আয়াতসংখ্যা গোনেন ১১টি। ইবন কাসীর ও বাগাভীও একে মাদানী বলেছেন। ইবন কাসীর তাঁর তাফসীর শুরু করেন কোনো শব্দের ব্যাখ্যা দিয়ে নয়, একটি আমল দিয়ে। তিনি লেখেন, ইবন আব্বাস ও আবু হুরায়রা (রাঃ) থেকে বর্ণিত, রাসূলুল্লাহ ﷺ জুমার নামাযে সূরা জুমুআ ও সূরা মুনাফিকূন পড়তেন। সঙ্গে জানান, মুসলিম তাঁর সহীহ গ্রন্থে এটি বর্ণনা করেছেন। হাদীসটি গোটা সূরার সঙ্গে যুক্ত, তাই এর প্রথম আয়াতের সঙ্গেও।"
          },
          {
            "en": "Muslim's wording from Ibn Abbas (RA) reads in full: that the Prophet ﷺ used to recite in the dawn prayer on Friday Alif Lam Mim Tanzil, as-Sajda, and Hal ata 'ala al-insani hinun min ad-dahr, and that the Prophet ﷺ used to recite in the Jumu'a prayer Surat al-Jumu'a and al-Munafiqin (Sahih Muslim 879). Muslim also has it through Abu Hurayrah (RA), who led the Jumu'a in Madina while deputising for Marwan, recited these two surahs, and when asked said he had heard the Messenger of Allah ﷺ recite them on Friday (Sahih Muslim 877).",
            "bn": "ইবন আব্বাস (রাঃ) থেকে মুসলিমের পুরো ভাষ্য এই: নবী ﷺ জুমার দিন ফজরের নামাযে পড়তেন আলিফ লাম মীম তানযীল আস-সাজদা এবং হাল আতা আলাল ইনসানি হীনুম মিনাদ দাহর, আর নবী ﷺ জুমার নামাযে পড়তেন সূরা জুমুআ ও সূরা মুনাফিকূন (সহীহ মুসলিম ৮৭৯)। মুসলিম এটি আবু হুরায়রা (রাঃ)-এর সূত্রেও এনেছেন। মারওয়ানের প্রতিনিধি হিসেবে তিনি মদীনায় জুমার ইমামতি করেন এবং এই দুটি সূরা পড়েন। জিজ্ঞেস করা হলে বলেন, তিনি রাসূলুল্লাহ ﷺ-কে জুমার দিন এ দুটি পড়তে শুনেছেন (সহীহ মুসলিম ৮৭৭)।"
          },
          {
            "en": "Al-Qurtubi places a different narration at the head of the surah, about the day rather than the verse. In Muslim's wording from Abu Hurayrah (RA): The best day on which the sun has risen is Friday; on it Adam (AS) was created, on it he was made to enter the Garden, on it he was brought out of it, and the Hour will not be established except on Friday (Sahih Muslim 854). It is not attached to 62:1 itself. Al-Qurtubi uses it to open the surah with the day whose name it carries.",
            "bn": "কুরতুবী সূরার শুরুতে আরেকটি বর্ণনা রাখেন, যার বিষয় আয়াত নয়, দিনটি। আবু হুরায়রা (রাঃ) থেকে মুসলিমের ভাষ্যে: সূর্য যত দিনে উদিত হয়েছে, তার মধ্যে সেরা দিন জুমার দিন। এ দিনে আদম (আঃ)-কে সৃষ্টি করা হয়, এ দিনে তাঁকে জান্নাতে প্রবেশ করানো হয়, এ দিনেই তাঁকে সেখান থেকে বের করা হয়। আর কিয়ামত জুমার দিন ছাড়া অন্য কোনো দিনে সংঘটিত হবে না (সহীহ মুসলিম ৮৫৪)। বর্ণনাটি ৬২:১ আয়াতের সঙ্গে সরাসরি যুক্ত নয়। যে দিনের নামে সূরার নাম, কুরতুবী এ বর্ণনা দিয়ে সেই দিনের কথা বলেই সূরাটি শুরু করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "From Praise to the Messenger",
          "bn": "তাসবীহ থেকে রাসূলের দিকে"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse says in so many words why the surah of Friday opens with the glorification of all creation. The text itself shows a sequence. 62:2 follows with huwa alladhi, He it is who sent among the unlettered a Messenger from among them, reciting His verses, purifying them and teaching them the Book and wisdom. The abridged Ibn Kathir heads that passage as the favour Allah granted by sending Muhammad ﷺ, and says the unlettered here are the Arabs. 62:4 names this fadl Allah, the bounty of Allah.",
            "bn": "এই আয়াতের জন্য সংগৃহীত কোনো তাফসীরই স্পষ্ট করে বলে না, জুমার সূরা কেন সমগ্র সৃষ্টির তাসবীহ দিয়ে শুরু হলো। পাঠ নিজে যা দেখায় তা হলো ধারাক্রম। ঠিক পরেই ৬২:২ আয়াত বলে হুওয়াল্লাযী: তিনিই নিরক্ষরদের মধ্যে তাদেরই একজনকে রাসূল করে পাঠিয়েছেন, যিনি তাঁর আয়াত পড়ে শোনান, তাদের পবিত্র করেন, তাদের কিতাব ও হিকমত শেখান। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ এ অংশের শিরোনাম দেয় মুহাম্মাদ ﷺ-কে পাঠিয়ে আল্লাহর দেওয়া অনুগ্রহ, আর বলে এখানে নিরক্ষর মানে আরবরা। এরপর ৬২:৪ আয়াত একে বলে ফাদলুল্লাহ, আল্লাহর অনুগ্রহ।"
          },
          {
            "en": "As-Sa'di's closing sentence is the nearest the sources come to a bridge: these great attributes, he writes, are among what calls to the worship of Allah alone, without partner. The surah later makes that call concrete. 62:8 reminds its hearers that the death they flee will meet them, and 62:9 summons the believers, when the call is made on the day of Jumu'a, to hasten to the remembrance of Allah and leave off trade. Those verses have their own articles; here it is enough that the surah begins with worship already under way.",
            "bn": "উৎসগুলোর মধ্যে সেতুর সবচেয়ে কাছাকাছি কথা সা'দীর শেষ বাক্যটি। তিনি লেখেন, এই মহান গুণাবলি সেই সব বিষয়ের অন্তর্ভুক্ত, যা ডাকে শরীকহীন একক আল্লাহর ইবাদতের দিকে। সূরাটি পরে সেই ডাককে বাস্তব রূপ দেয়। ৬২:৮ আয়াত শ্রোতাদের মনে করিয়ে দেয়, যে মৃত্যু থেকে তারা পালায়, তা তাদের সামনে এসে দাঁড়াবেই। আর ৬২:৯ আয়াত মুমিনদের ডাকে, জুমার দিন আযান হলে আল্লাহর জিকিরের দিকে দ্রুত যেতে আর বেচাকেনা ছেড়ে দিতে। ওই আয়াতগুলোর আলাদা প্রবন্ধ আছে। এখানে এটুকু দেখাই যথেষ্ট যে সূরাটি শুরু হয় এমন ইবাদত দিয়ে, যা আগে থেকেই চলছে।"
          },
          {
            "en": "Read on a Friday, the verse changes its weight. By the hadith, the Prophet ﷺ recited these words in the Jumu'a prayer, telling the congregation that the heavens and the earth are glorifying Allah. The worshipper does not begin that praise. He or she steps into it, beside every thing that speaks and every thing that is inert, and says subhan Allah to the Sovereign, the Pure, the Mighty, the Wise.",
            "bn": "জুমার দিনে পড়লে আয়াতটির ভার বদলে যায়। হাদীস অনুযায়ী নবী ﷺ জুমার নামাযে এই কথাগুলো পড়তেন, আর মুসল্লিরা শুনতেন: আসমান ও যমীন আল্লাহর তাসবীহ করছে। মুসল্লি সেই তাসবীহ শুরু করে না। সে তাতে শামিল হয়, কথা-বলা আর জড় সব সৃষ্টির পাশে দাঁড়িয়ে। তারপর সুবহানাল্লাহ বলে সেই অধিপতি, পবিত্র, পরাক্রমশালী, প্রজ্ঞাময় সত্তাকে।"
          }
        ]
      }
    ]
  },
  "62:8": {
    "sections": [
      {
        "h": {
          "en": "After the Wish for Death",
          "bn": "মৃত্যু কামনার আহ্বানের পর"
        },
        "p": [
          {
            "en": "Qul inna-l-mawta-lladhi tafirruna minhu fa-innahu mulaqikum: say, the death from which you flee will surely meet you. The verse is the third step of a short passage. In 62:6 the Prophet ﷺ is told to say to those who are Jews that, if they claim to be the allies of Allah to the exclusion of other people, they should wish for death, if they are truthful. In 62:7 the answer is given before anyone could give it: they will never wish for it, because of what their hands have sent ahead.",
            "bn": "কুল ইন্নাল মাওতাল্লাযী তাফিররূনা মিনহু ফাইন্নাহূ মুলাকীকুম: বলুন, যে মৃত্যু থেকে তোমরা পালাচ্ছ, তা তোমাদের সাথে অবশ্যই সাক্ষাৎ করবে। ছোট একটি অংশের এটি তৃতীয় ধাপ। ৬২:৬ আয়াতে নবী ﷺ-কে বলা হয়েছে ইয়াহুদিদের উদ্দেশে বলতে: অন্য সব মানুষকে বাদ দিয়ে কেবল তোমরাই আল্লাহর বন্ধু, এই যদি তোমাদের দাবি হয়, তবে মৃত্যু কামনা করো, যদি সত্যবাদী হও। ৬২:৭ আয়াতে কেউ জবাব দেওয়ার আগেই জবাব এসে গেছে: তারা কখনো তা কামনা করবে না, নিজেদের হাতে আগে পাঠানো আমলের কারণে।"
          },
          {
            "en": "Ibn Kathir, in the abridged English of his commentary, which treats 62:5 to 62:8 as one passage, reads the challenge in this way: if you claim that you are on the correct guidance and that Muhammad ﷺ and his Companions are astray, then invoke Allah to bring death on whichever of the two groups is misguided. For the refusal in 62:7 he gives the reason as the disbelief, injustice and sins that they committed. At-Tabari, on this verse, keeps the same addressees: say, O Muhammad, to the Jews.",
            "bn": "ইবন কাসীরের তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৬২:৫ থেকে ৬২:৮ পর্যন্ত একসাথে আলোচনা করে। সেখানে চ্যালেঞ্জটির ব্যাখ্যা এরকম: তোমরা যদি দাবি করো যে তোমরাই সঠিক পথে আছ, আর মুহাম্মাদ ﷺ ও তাঁর সাহাবিরা পথভ্রষ্ট, তবে আল্লাহর কাছে দোয়া করো, দুই দলের মধ্যে যে দল পথভ্রষ্ট, তাদের উপর তিনি মৃত্যু পাঠান। ৬২:৭ আয়াতের অস্বীকৃতির কারণ হিসেবে তিনি উল্লেখ করেন তাদের কুফর, জুলুম ও গুনাহ। তাবারীও এ আয়াতে সম্বোধিতদের একই রাখেন: হে মুহাম্মাদ, ইয়াহুদিদের বলুন।"
          },
          {
            "en": "This needs saying plainly. The passage addresses a particular group in the Prophet's ﷺ own time, the group at-Tabari names, and this article reports only what the commentators wrote about it. The verse describes what the text describes, and it licenses nothing against any living person or community. Its second half, moreover, reaches past that group in the commentators' own words. As-Sa'di, explaining the return, says that after death all of creation is returned on the Day of Resurrection, and no reader stands outside that sentence.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। এ অংশ নবী ﷺ-এর নিজের যুগের একটি নির্দিষ্ট দলকে সম্বোধন করেছে, যে দলের নাম তাবারী উল্লেখ করেছেন। এ প্রবন্ধ সেই দল সম্পর্কে তাফসীরকারেরা যা লিখেছেন, শুধু সেটুকুই তুলে ধরে। আয়াতটি যা বর্ণনা করে, কেবল তা-ই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। তা ছাড়া আয়াতের দ্বিতীয় অর্ধেক তাফসীরকারদের নিজেদের কথাতেই সেই দলের সীমা ছাড়িয়ে যায়। সা'দী ফিরে যাওয়ার ব্যাখ্যায় বলেন, মৃত্যুর পর কিয়ামতের দিন গোটা সৃষ্টিকে ফিরিয়ে নেওয়া হবে। কোনো পাঠকই সে কথার বাইরে নন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Challenge, Earlier Rounds",
          "bn": "একই চ্যালেঞ্জ, আগের দফায়"
        },
        "p": [
          {
            "en": "Ibn Kathir points out that the challenge had already been put in Surah al-Baqarah, in 2:94 to 2:96: if the home of the Hereafter with Allah is yours alone, then wish for death, if you are truthful. They will never wish for it, because of what their hands have sent ahead, and you will find them the most eager of people for life; one of them would love to be given a thousand years, yet that long life would not move him away from the punishment. He says he explained there that the challenge was to invoke destruction on the misguided party.",
            "bn": "ইবন কাসীর মনে করিয়ে দেন, এই চ্যালেঞ্জ আগেই সূরা বাকারায় এসেছে, ২:৯৪ থেকে ২:৯৬ আয়াতে: আল্লাহর কাছে আখিরাতের ঘর যদি শুধু তোমাদের জন্যই হয়, তবে মৃত্যু কামনা করো, যদি সত্যবাদী হও। নিজেদের হাতে আগে পাঠানো আমলের কারণে তারা কখনো তা কামনা করবে না। জীবনের প্রতি তাদের দেখবেন সবচেয়ে লোভী। তাদের একজন চায় হাজার বছর আয়ু পেতে, অথচ এত দীর্ঘ আয়ুও তাকে শাস্তি থেকে সরিয়ে দিতে পারবে না। ইবন কাসীর বলেন, সেখানে তিনি ব্যাখ্যা করেছেন যে চ্যালেঞ্জটা ছিল পথভ্রষ্ট পক্ষের ধ্বংসের দোয়া করার।"
          },
          {
            "en": "He then sets two further challenges beside it. To the Christians who disputed about 'Isa (AS) there is 3:61: come, let us call our sons and your sons, our women and your women, ourselves and yourselves, then pray humbly and invoke the curse of Allah upon those who lie. To the idolaters there is 19:75: say, whoever is in error, the Most Merciful will extend for him. In each case a claim is put to a test that the claimant cannot pass without staking himself on it, and in this surah the stake is death.",
            "bn": "এর পাশে তিনি আরও দুটি চ্যালেঞ্জ রাখেন। ঈসা (আঃ)-কে নিয়ে যে খ্রিস্টানরা বিতর্ক করেছিল, তাদের জন্য ৩:৬১: এসো, আমরা ডাকি আমাদের সন্তানদের ও তোমাদের সন্তানদের, আমাদের নারীদের ও তোমাদের নারীদের, আমাদের নিজেদের ও তোমাদের নিজেদের, তারপর বিনীতভাবে দোয়া করি আর মিথ্যাবাদীদের উপর আল্লাহর লানত চাই। মুশরিকদের জন্য ১৯:৭৫: বলুন, যে পথভ্রষ্টতায় আছে, দয়াময় তাকে আরও অবকাশ দেন। প্রতিটি ক্ষেত্রে একটা দাবিকে এমন পরীক্ষার সামনে দাঁড় করানো হয়েছে, যেখানে দাবিদারকে নিজেকেই বাজি রাখতে হয়। এই সূরায় সেই বাজি হলো মৃত্যু।"
          },
          {
            "en": "Ibn Kathir's English text also cites, from Imam Ahmad, a report of Ibn 'Abbas in which the Prophet ﷺ says that had the Jews wished for death they would have died, and he adds that al-Bukhari, at-Tirmidhi and an-Nasa'i recorded it. The wordings checked for this article, al-Bukhari 4958 and at-Tirmidhi 3348, carry only the report's first sentence, about Abu Jahl and the angels, and not the sentence about the Jews. So no confirmed hadith wording on this verse is quoted here.",
            "bn": "ইবন কাসীরের ইংরেজি পাঠে ইমাম আহমাদ থেকে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনাও আছে। তাতে নবী ﷺ বলেন, ইয়াহুদিরা মৃত্যু কামনা করলে তারা মারা যেত। ইবন কাসীর যোগ করেন যে বুখারী, তিরমিযী ও নাসাঈও তা বর্ণনা করেছেন। এ প্রবন্ধের জন্য বুখারী ৪৯৫৮ ও তিরমিযী ৩৩৪৮ মিলিয়ে দেখা হয়েছে। দুটিতেই আছে শুধু বর্ণনাটির প্রথম বাক্য, আবু জাহল ও ফেরেশতাদের কথা। ইয়াহুদিদের সম্পর্কিত বাক্যটি সেখানে নেই। তাই এ আয়াত প্রসঙ্গে নিশ্চিত করা কোনো হাদীসের ভাষ্য এখানে উদ্ধৃত করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Running From a Wish",
          "bn": "একটি কামনা থেকে পালানো"
        },
        "p": [
          {
            "en": "Alladhi tafirruna minhu: the death from which you flee. At-Tabari glosses the fleeing with two verbs, fa-takrahunahu wa ta'bawna an tatamannawhu: you hate it and refuse to wish for it. On his reading the flight named here is first of all the refusal just recorded in 62:7, the wish that was never spoken. Ma'arif al-Qur'an makes the same connection in its own words: running away from longing for death, despite the claim that had been made, is tantamount to running away from death itself.",
            "bn": "আল্লাযী তাফিররূনা মিনহু: যে মৃত্যু থেকে তোমরা পালাচ্ছ। তাবারী এই পালানোর ব্যাখ্যা দেন দুটি ক্রিয়া দিয়ে: ফাতাকরাহূনাহু ওয়া তা'বাওনা আন তাতামান্নাওহু, অর্থাৎ তোমরা তা অপছন্দ করো এবং তা কামনা করতে অস্বীকার করো। তাঁর পাঠে এখানে যে পালানোর কথা, তা সবার আগে ৬২:৭ আয়াতে বলা সেই অস্বীকৃতি, যে কামনা কখনো মুখে আসেনি। মাআরিফুল কুরআনও নিজের ভাষায় একই যোগসূত্র টানে। দাবি করার পরও মৃত্যুর আকাঙ্ক্ষা থেকে পালানো আসলে মৃত্যু থেকেই পালানোর শামিল।"
          },
          {
            "en": "As-Sa'di carries the thought to its end. Even though they do not wish for death, because of what their hands have sent ahead, and flee from it to the utmost of fleeing, that does not save them; death must meet them, the death that Allah has made binding on His servants and written for them. The Muyassar says it in three words, la mafarra minhu: there is no escape from it. Whatever the fleeing was, the refusal of a wish or, as Ma'arif puts it, a flight from death itself, the commentators agree on where it ends.",
            "bn": "সা'দী ভাবনাটাকে শেষ পর্যন্ত নিয়ে যান। নিজেদের হাতে আগে পাঠানো আমলের কারণে তারা মৃত্যু কামনা করে না, বরং যতদূর সম্ভব তা থেকে পালায়। কিন্তু এতে তারা বাঁচবে না। মৃত্যু তাদের সাথে সাক্ষাৎ করবেই, সেই মৃত্যু যা আল্লাহ বান্দাদের উপর অবধারিত করেছেন এবং তাদের জন্য লিখে রেখেছেন। মুয়াসসার কথাটা বলে মাত্র তিনটি শব্দে: লা মাফাররা মিনহু, এ থেকে পালানোর কোনো জায়গা নেই। পালানোটা যা-ই হোক, কামনাকে অস্বীকার করা কিংবা মাআরিফের ভাষায় খোদ মৃত্যু থেকে পালানো, কোথায় গিয়ে তা থামে, সে বিষয়ে তাফসীরকারেরা একমত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Fa Where None Is Expected",
          "bn": "অপ্রত্যাশিত জায়গায় 'ফা'"
        },
        "p": [
          {
            "en": "Al-Qurtubi stops at a small particle. He cites the grammarian az-Zajjaj: one does not say inna Zaydan fa-muntaliqun, with a fa before the predicate, and yet here the verse says fa-innahu mulaqikum. The reason, az-Zajjaj explains, is that alladhi, the relative word, carries the sense of a condition and its consequence, so the meaning is: if you flee from it, it will meet you. That turn, he says, makes the sentence an emphatic indication that fleeing from death is of no use.",
            "bn": "কুরতুবী একটি ছোট অব্যয়ের কাছে থামেন। তিনি ব্যাকরণবিদ যাজ্জাজের কথা উদ্ধৃত করেন: আরবিতে ইন্না যাইদান ফামুনতালিকুন বলা হয় না, অর্থাৎ বিধেয়ের আগে 'ফা' বসানো হয় না। অথচ এখানে আয়াত বলছে ফাইন্নাহূ মুলাকীকুম। যাজ্জাজের ব্যাখ্যা হলো, আল্লাযী শব্দটি শর্ত ও তার ফলের অর্থ বহন করে। তাই কথার মানে দাঁড়ায়: তোমরা যদি এ থেকে পালাও, তবে তা তোমাদের সাথে সাক্ষাৎ করবে। তাঁর মতে এই গঠন জোর দিয়ে বুঝিয়ে দেয় যে মৃত্যু থেকে পালিয়ে কোনো লাভ নেই।"
          },
          {
            "en": "Al-Qurtubi then adds a possibility of his own: the statement may be complete at alladhi tafirruna minhu, with a fresh start at fa-innahu mulaqikum. Read that way, the verse names the death and the running, pauses, and then delivers the verdict as a sentence of its own. He sets beside it a line of the poet Zuhayr: whoever dreads the causes of death, they reach him, even if he seeks the ropes of the sky with a ladder. The grammar and the poetry make the same point by different roads.",
            "bn": "তারপর কুরতুবী নিজের দিক থেকে আরেকটি সম্ভাবনা যোগ করেন: কথাটা আল্লাযী তাফিররূনা মিনহু-তে শেষ হয়ে ফাইন্নাহূ মুলাকীকুম থেকে নতুন করে শুরু হতে পারে। এভাবে পড়লে আয়াত আগে মৃত্যু আর পালানোর কথা বলে, একটু থামে, তারপর রায়টা আলাদা বাক্যে শোনায়। এর পাশে তিনি কবি যুহাইরের একটি পঙক্তি রাখেন: যে মৃত্যুর উপকরণকে ভয় পায়, সেগুলো তার কাছে পৌঁছবেই, সিঁড়ি বেয়ে আকাশের রশি ধরতে চাইলেও। ব্যাকরণ আর কবিতা ভিন্ন পথে একই কথায় পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Death Keeps Its Own Appointment",
          "bn": "মৃত্যু তার নির্ধারিত সময় রক্ষা করে"
        },
        "p": [
          {
            "en": "Fa-innahu mulaqikum: it will surely meet you. At-Tabari glosses mulaqikum as wa nazilun bikum, and it will descend upon you. The Muyassar names the hour: it is coming to you 'inda maji'i ajalikum, when your appointed terms arrive. Ma'arif al-Qur'an adds that if it does not happen at once it will certainly happen sometime later, so that it is impossible for anyone to avoid or avert death in any way. In each gloss it is death that moves, and the timing belongs to the term already set.",
            "bn": "ফাইন্নাহূ মুলাকীকুম: তা অবশ্যই তোমাদের সাথে সাক্ষাৎ করবে। তাবারী মুলাকীকুম-এর ব্যাখ্যা দেন ওয়া নাযিলুন বিকুম দিয়ে, অর্থাৎ তা তোমাদের উপর নেমে আসবে। মুয়াসসার সময়টাও উল্লেখ করে: ইনদা মাজীই আজালিকুম, তোমাদের নির্ধারিত মেয়াদ এলে তা তোমাদের কাছে আসছে। মাআরিফুল কুরআন যোগ করে, এখনই না হলে পরে কোনো এক সময় তা ঘটবেই। কাজেই কোনোভাবে মৃত্যু এড়ানো বা ঠেকানো কারও পক্ষে সম্ভব নয়। প্রতিটি ব্যাখ্যায় এগিয়ে আসে মৃত্যু নিজে, আর সময়টা ঠিক হয়ে আছে আগে থেকে বেঁধে দেওয়া মেয়াদে।"
          },
          {
            "en": "Ibn Kathir, in both the Arabic and the English, pairs the verse with 4:78: wherever you may be, death will overtake you, even if you should be within towers of lofty construction. The Arabic text adds a report from at-Tabarani's Mu'jam, through Samura, likening one who flees from death to a fox pursued by the earth for a debt. Ibn Kathir gives no grading for it, and none could be confirmed for this article, so it is mentioned here only as something he records, not as a hadith.",
            "bn": "ইবন কাসীর আরবি ও ইংরেজি দুই পাঠেই আয়াতটিকে ৪:৭৮-এর সাথে মিলিয়ে পড়েন: তোমরা যেখানেই থাকো, মৃত্যু তোমাদের নাগাল পাবে, সুউচ্চ সুদৃঢ় দুর্গে থাকলেও। আরবি পাঠে তিনি তাবারানীর মু'জাম থেকে সামুরা (রাঃ)-এর সূত্রে একটি বর্ণনাও আনেন। তাতে মৃত্যু থেকে পলায়নকারীকে তুলনা করা হয়েছে এমন এক শিয়ালের সাথে, যার পিছু নিয়েছে মাটি, ঋণ আদায়ের জন্য। ইবন কাসীর এর কোনো মান উল্লেখ করেননি, আর এ প্রবন্ধের জন্যও তা নিশ্চিত করা যায়নি। তাই এখানে এটি শুধু তাঁর উদ্ধৃত একটি বর্ণনা হিসেবে এল, হাদীস হিসেবে নয়।"
          },
          {
            "en": "Al-Qurtubi closes his comment with verses of the poet Tarafa. Death suffices, so know it, as an admonisher for the one on whom death has been decreed. So remember death and be wary of it, for in death there are lessons for the one who has understanding. Everything will one day meet its end, whether at home or on the back of a journey, and death lies in wait all around him; caution does not save him from death. The lines are a poet's, but al-Qurtubi chose them to stand beside this verse.",
            "bn": "কুরতুবী তাঁর আলোচনা শেষ করেন কবি তারাফার কয়েকটি পঙক্তি দিয়ে। জেনে রেখো, যার উপর মৃত্যু নির্ধারিত, তার জন্য উপদেশদাতা হিসেবে মৃত্যুই যথেষ্ট। তাই মৃত্যুকে স্মরণ করো, তা থেকে সাবধান থাকো, কেননা বুদ্ধিমানের জন্য মৃত্যুর মধ্যে আছে শিক্ষা। ঘরে থাকুক বা সফরের পিঠে, প্রতিটি জিনিস একদিন তার পরিণতির মুখোমুখি হবে। মৃত্যু চারপাশে ওত পেতে থাকে, সতর্কতা কাউকে মৃত্যু থেকে বাঁচায় না। পঙক্তিগুলো একজন কবির, তবে এ আয়াতের পাশে কুরতুবী নিজেই সেগুলো বেছে রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Leaning Walls and Open Fires",
          "bn": "হেলে পড়া দেয়াল আর জ্বলন্ত আগুন"
        },
        "p": [
          {
            "en": "Does the verse, then, forbid a person to step out of danger? Ma'arif al-Qur'an takes up the question directly. There are many ordinary causes of death, it says, and both reason and the Shari'ah require a person to avoid them. It mentions, without naming a collection, that the Prophet ﷺ once passed under a leaning wall and went by it quickly, lest it fall on him. Likewise, if a fire breaks out somewhere, reason and the Shari'ah both say that one should get away from it.",
            "bn": "তাহলে কি এ আয়াত বিপদ থেকে সরে দাঁড়াতেও নিষেধ করে? মাআরিফুল কুরআন সরাসরি এ প্রশ্নের জবাব দেয়। মৃত্যুর অনেক স্বাভাবিক কারণ আছে, আর বিবেক ও শরীয়ত দুটোই মানুষকে সেগুলো থেকে দূরে থাকতে বলে। কোনো হাদীসগ্রন্থের নাম না নিয়ে মাআরিফ উল্লেখ করে, নবী ﷺ একবার একটি হেলে পড়া দেয়ালের নিচ দিয়ে যাচ্ছিলেন। দেয়ালটা গায়ে ভেঙে পড়তে পারে ভেবে তিনি দ্রুত জায়গাটা পার হয়ে যান। তেমনি কোথাও আগুন লাগলে বিবেক ও শরীয়ত দুটোরই কথা হলো, সেখান থেকে সরে যাওয়া।"
          },
          {
            "en": "Such escapes, Ma'arif explains, are not the fleeing this verse denounces, provided faith is sound and a person believes that when the appointed time comes it cannot be escaped. Nobody knows whether this fire or that poison is the destined cause, so moving away from it is not running from death. Plague, it says, is a separate issue, treated in the books of jurisprudence and hadith and at length by the author of Ruh al-Ma'ani, and touched on in its own discussion of 2:243 and 2:244, which open with those who left their homes in thousands, fearing death.",
            "bn": "মাআরিফের ব্যাখ্যায়, এভাবে বিপদ এড়ানো আয়াতে নিন্দিত পালানোর মধ্যে পড়ে না, যদি ঈমান ঠিক থাকে আর বিশ্বাস থাকে যে নির্ধারিত সময় এলে তা এড়ানো যাবে না। এই আগুন বা ওই বিষই মৃত্যুর নির্ধারিত কারণ কি না, কেউ জানে না। তাই তা থেকে সরে যাওয়া মৃত্যু থেকে পালানো নয়। মহামারির প্রশ্নটা অবশ্য আলাদা, মাআরিফ বলে। ফিকহ ও হাদীসের গ্রন্থে এবং রূহুল মাআনীর লেখকের বিস্তারিত আলোচনায় তা এসেছে। মাআরিফ নিজেও ২:২৪৩ ও ২:২৪৪ আয়াতের আলোচনায় তা ছুঁয়ে গেছে। সে আয়াতের শুরুতে আছে হাজার হাজার মানুষের কথা, যারা মৃত্যুর ভয়ে ঘর ছেড়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Returned to the One Who Knows",
          "bn": "যিনি সব জানেন, তাঁর কাছে ফেরা"
        },
        "p": [
          {
            "en": "Thumma turadduna ila 'alimi-l-ghaybi wash-shahadah: then you will be returned to the Knower of the unseen and the witnessed. At-Tabari says that your Lord will return you, after your death, to Him who knows the unseen of the heavens and the earth, and the witnessed, which he defines as what was seen and became apparent to the eye, not hidden from the sight of those who look. The Muyassar places the return on the Day of Resurrection, to Allah, who knows what was absent and what was present.",
            "bn": "সুম্মা তুরাদ্দূনা ইলা আলিমিল গাইবি ওয়াশ শাহাদাহ: তারপর তোমাদের ফিরিয়ে নেওয়া হবে অদৃশ্য ও দৃশ্যের জ্ঞানীর কাছে। তাবারী বলেন, মৃত্যুর পর তোমাদের রব তোমাদের ফিরিয়ে নেবেন তাঁর কাছে, যিনি আসমান ও জমিনের অদৃশ্য জানেন, আর জানেন দৃশ্যমানকেও। দৃশ্যমানের সংজ্ঞা তিনি দেন এভাবে: যা দেখা গেছে, চোখের সামনে প্রকাশ পেয়েছে, দর্শকদের দৃষ্টি থেকে আড়ালে থাকেনি। মুয়াসসার এই ফেরার সময় বলে দেয় কিয়ামতের দিন। ফেরা হবে আল্লাহর কাছে, যিনি জানেন যা অনুপস্থিত ছিল আর যা উপস্থিত ছিল।"
          },
          {
            "en": "At-Tabari also records, through Ma'mar, that Qatada recited this clause and said: Allah has humbled the son of Adam by death. The narrator adds that he believed Qatada traced the saying further back, but the chain is not followed here, and the sentence stands as Qatada's. It fits the passage closely. A people had claimed a standing with Allah above all others; the reply was not an argument about rank but the event that no rank exempts, followed by a return that nobody makes on his own terms.",
            "bn": "তাবারী মা'মারের সূত্রে আরও উল্লেখ করেন, কাতাদা এই অংশটি তিলাওয়াত করে বলেছিলেন: আল্লাহ মৃত্যু দিয়ে আদমসন্তানকে অবনত করেছেন। বর্ণনাকারী যোগ করেন, তাঁর ধারণা কাতাদা কথাটা আরও ঊর্ধ্বতন সূত্রে বর্ণনা করেছিলেন। তবে সে সূত্রের খোঁজ এখানে নেওয়া হয়নি, তাই বাক্যটি কাতাদার কথা হিসেবেই থাকল। অংশটির সাথে কথাটা খুব মানানসই। একদল লোক দাবি করেছিল, আল্লাহর কাছে তাদের মর্যাদা সবার উপরে। জবাবে মর্যাদা নিয়ে কোনো তর্ক আসেনি। এসেছে এমন এক ঘটনার কথা, যা থেকে কোনো মর্যাদাই রেহাই দেয় না। তারপর এমন এক ফেরা, যা কেউ নিজের শর্তে করে না।"
          },
          {
            "en": "Fa-yunabbi'ukum bima kuntum ta'malun: and He will inform you of what you used to do. At-Tabari explains that He will tell you then what deeds you did in the world, the bad and the good, because He encompasses them all, and then He will recompense the doer of good for his good and the doer of evil as he deserves. As-Sa'di says the informing covers good and evil, little and much. The Muyassar adds the same last step: He will inform you of your deeds and will recompense you for them.",
            "bn": "ফাইউনাব্বিউকুম বিমা কুনতুম তা'মালূন: তারপর তিনি তোমাদের জানিয়ে দেবেন তোমরা যা করতে। তাবারী ব্যাখ্যা করেন, দুনিয়ায় তোমরা যা কিছু আমল করেছ, মন্দ ও ভালো, সেদিন তিনি তোমাদের তা জানিয়ে দেবেন, কারণ সবকিছুই তাঁর জ্ঞানের আওতায়। তারপর তিনি সৎকর্মশীলকে তার সৎকর্মের প্রতিদান দেবেন, আর অসৎকর্মশীলকে দেবেন সে যার উপযুক্ত। সা'দী বলেন, এই জানানোর মধ্যে আছে ভালো ও মন্দ, অল্প ও বেশি সবকিছু। মুয়াসসারও শেষ ধাপটা যোগ করে: তিনি তোমাদের আমলের খবর দেবেন এবং সেগুলোর প্রতিদান দেবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Challenge, Turned Inward",
          "bn": "চ্যালেঞ্জটা নিজের দিকে"
        },
        "p": [
          {
            "en": "The verse is spoken to others, but its question travels. In 62:6 a group was asked to stake its claim on a wish for death, and 62:7 said the wish would never come, because of what their hands had sent ahead. A reader can put the same test to himself without any claim of rank: if the meeting that at-Tabari calls a descent upon you came tonight, what have my own hands sent ahead of me?",
            "bn": "আয়াতটি বলা হয়েছে অন্যদের উদ্দেশে, কিন্তু এর প্রশ্নটা সবার কাছে পৌঁছায়। ৬২:৬ আয়াতে একটি দলকে বলা হয়েছিল, মৃত্যু কামনা করে নিজেদের দাবির সত্যতা প্রমাণ করো। ৬২:৭ জানিয়ে দিল, নিজেদের হাতে আগে পাঠানো আমলের কারণে সে কামনা কখনো আসবে না। কোনো মর্যাদার দাবি ছাড়াই একজন পাঠক নিজেকে একই পরীক্ষায় ফেলতে পারেন। তাবারী যে সাক্ষাৎকে বলেছেন তোমাদের উপর নেমে আসা, তা যদি আজ রাতেই আসে, তবে আমার নিজের হাত আমার আগে কী পাঠিয়ে রেখেছে?"
          },
          {
            "en": "The verse leaves no room for the hope that the meeting can be put off by not thinking about it; as-Sa'di's word for death is that it is written. What remains open is the record to be read out at the return, and that is still being written, deed by deed. The surah turns next, in 62:9, to the Friday call: leave off trade and hasten to the remembrance of Allah.",
            "bn": "চিন্তা না করলেই সাক্ষাৎটা পিছিয়ে যাবে, এমন আশার কোনো জায়গা আয়াতটি রাখেনি। সা'দীর ভাষায় মৃত্যু লিখে রাখা আছে। যা এখনো খোলা, তা হলো সেই আমলনামা, যা ফেরার দিন পড়ে শোনানো হবে। সেটা এখনো লেখা হচ্ছে, একেকটি আমলে। এরপর ৬২:৯ আয়াতে সূরাটি চলে যায় জুমুআর আহ্বানে: বেচাকেনা ছেড়ে আল্লাহর জিকিরের দিকে দ্রুত চলো।"
          }
        ]
      }
    ]
  },
  "62:9": {
    "sections": [
      {
        "h": {
          "en": "When the Call Sounds",
          "bn": "যখন আযান হয়"
        },
        "p": [
          {
            "en": "The verse legislates a weekly interruption: when the call is made for the prayer on the day of Jumu'ah, proceed to the remembrance of Allah and leave the sale. The surah itself is named for this passage. Two commands, one positive and one negative, hang on one trigger — the adhan — and the example chosen for what must be dropped is not something sinful. It is trade: lawful, productive, praised elsewhere, and precisely therefore the real test.",
            "bn": "আয়াতটি সপ্তাহে একবার একটা বিরতির বিধান দিচ্ছে: জুমার দিন যখন নামাজের জন্য ডাকা হয়, তখন আল্লাহর জিকিরের দিকে চলো, আর বেচাকেনা ছেড়ে দাও। সূরাটির নামও এই অংশ থেকেই। একটি করণীয় আর একটি বর্জনীয়, দুটি আদেশই একটি সংকেতের সঙ্গে বাঁধা: আযান। আর কী ছাড়তে হবে, তার উদাহরণ হিসেবে আল্লাহ কোনো গুনাহের কাজ আনেননি। এনেছেন ব্যবসা, যা হালাল, উপকারী, অন্য জায়গায় প্রশংসিত। ঠিক এ কারণেই এটাই আসল পরীক্ষা।"
          },
          {
            "en": "The verse ends in the vocabulary of commerce it has just suspended: dhalikum khayrun lakum, that is better for you, if you only knew. To merchants it speaks as merchants — compare the two deals. What looks like an hour of lost margin is, on the true ledger, the better bargain. The clause in kuntum ta'lamun, if you only knew, quietly says that this arithmetic is exactly what people fail to know.",
            "bn": "আয়াতটি শেষ হয় সেই ব্যবসার ভাষাতেই, যা সে এইমাত্র থামিয়ে দিল: যালিকুম খাইরুল লাকুম, এটাই তোমাদের জন্য উত্তম, যদি তোমরা জানতে। ব্যবসায়ীদের সঙ্গে আয়াত কথা বলছে ব্যবসায়ীর ভাষায়: দুটো সওদা মিলিয়ে দেখো। যাকে মনে হচ্ছে এক ঘণ্টার মুনাফা হাতছাড়া, আসল হিসাবের খাতায় সেটাই লাভের সওদা। আর ইন কুনতুম তা'লামুন, যদি তোমরা জানতে, কথাটি নীরবে জানিয়ে দেয়: এই হিসাবটাই মানুষ বোঝে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sa'y Is of the Heart",
          "bn": "সা'ঈ অন্তরের ব্যাপার"
        },
        "p": [
          {
            "en": "Fas'aw ila dhikrillah — the verb sa'a means to proceed with earnest purpose, and the commentators are careful about what it does not mean here: sprinting. The Prophet ﷺ, in the hadith agreed upon by al-Bukhari and Muslim, told believers to walk to prayer with tranquility and not to come running. So the hurry this verse commands is a hurry of intention and priority — the heart runs while the feet walk.",
            "bn": "ফাসআও ইলা জিকরিল্লাহ। সা'আ ক্রিয়ার অর্থ দৃঢ় উদ্দেশ্য নিয়ে এগিয়ে যাওয়া। মুফাসসিররা সাবধান করে দিয়েছেন, এখানে এর অর্থ দৌড়ানো নয়। বুখারী ও মুসলিমের সর্বসম্মত (মুত্তাফাকুন আলাইহি) হাদিসে নবী ﷺ মুমিনদের বলেছেন, নামাজে আসতে হবে ধীরস্থিরভাবে হেঁটে, দৌড়ে নয়। তাই এ আয়াত যে তাড়ার হুকুম দেয়, তা নিয়ত আর অগ্রাধিকারের তাড়া: মন দৌড়ায়, পা হাঁটে।"
          },
          {
            "en": "What the hurry displaces is procrastination dressed as busyness: one more customer, one more message, arriving at the sermon's end. Proceeding to the dhikr of Allah — which the commentators read as the khutbah and the prayer together — means arranging the day around the appointment rather than squeezing the appointment into the day. The verse's subject is not speed at the last minute but structure decided in advance.",
            "bn": "এই তাড়া যা হটিয়ে দেয়, তা হলো ব্যস্ততার পোশাক পরা টালবাহানা: আর একজন খদ্দের, আর একটা মেসেজ, তারপর খুতবা শেষ হওয়ার মুখে গিয়ে পৌঁছানো। মুফাসসিররা এখানে আল্লাহর জিকির বলতে খুতবা ও নামাজ দুটোই বোঝেন। সেদিকে যাওয়া মানে এই সাক্ষাৎকে ঘিরে দিন সাজানো; দিনের কোনো ফাঁকে সাক্ষাৎটা গুঁজে দেওয়া নয়। আয়াতের বিষয় শেষ মুহূর্তের দ্রুততা নয়, আগে থেকে ঠিক করে রাখা রুটিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Trade Stopped, Trade Restarted",
          "bn": "ব্যবসা থামে, আবার চলে"
        },
        "p": [
          {
            "en": "The next verse completes the system: when the prayer has ended, 62:10 says, disperse through the land and seek from the bounty of Allah — and remember Allah much, that you may succeed. The same voice that stopped commerce restarts it within a sentence of the prayer's close. Islam is not embarrassed by markets; it ranks them. Trade is bounty from Allah, sought lawfully all week, and set down for one summons.",
            "bn": "পরের আয়াত ব্যবস্থাটি পূর্ণ করে। ৬২:১০ বলছে: নামাজ শেষ হলে যমীনে ছড়িয়ে পড়ো, আল্লাহর অনুগ্রহ তালাশ করো, আর আল্লাহর জিকির বেশি বেশি করো, যাতে তোমরা সফল হও। যে কণ্ঠ ব্যবসা থামিয়েছিল, নামাজ শেষ হতেই এক বাক্যের মধ্যে সেই কণ্ঠই তা আবার চালু করে দেয়। ইসলাম বাজার নিয়ে লজ্জিত নয়; সে বাজারকে তার জায়গা দেখিয়ে দেয়। ব্যবসা আল্লাহরই অনুগ্রহ: সারা সপ্তাহ হালাল পথে তা খোঁজা যায়, আর একটি ডাকে তা নামিয়ে রাখতে হয়।"
          },
          {
            "en": "Notice also what travels back out with the traders: remember Allah much, that you may succeed. The dhikr commanded inside the mosque is carried into the marketplace, so the boundary the adhan drew was never between religion and work but between forgetting and remembering. 24:37 describes the finished product of this training: men whom neither trade nor sale distracts from the remembrance of Allah, the prayer, and the giving of zakat.",
            "bn": "আরও লক্ষ করুন, ব্যবসায়ীদের সঙ্গে কী বাইরে ফিরে যায়: আল্লাহর জিকির বেশি বেশি করো, যাতে তোমরা সফল হও। মসজিদের ভেতরে যে জিকিরের হুকুম, তা সঙ্গে করে বাজারে নিয়ে যাওয়া হয়। তার মানে আযান যে সীমারেখা টেনেছিল, তা কখনো দ্বীন আর কাজের মাঝে ছিল না; ছিল ভুলে থাকা আর মনে রাখার মাঝে। এই তারবিয়াতের পূর্ণ ফল কেমন হয়, ২৪:৩৭ তার ছবি আঁকে: এমন লোক, যাদের ব্যবসা-বাণিজ্য আর বেচাকেনা আল্লাহর জিকির, নামাজ কায়েম ও যাকাত আদায় থেকে গাফেল করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Caravan That Emptied the Mosque",
          "bn": "যে কাফেলা মসজিদ খালি করেছিল"
        },
        "p": [
          {
            "en": "The passage ends with an incident the sahih collections preserve. Jabir (RA) relates that while the Prophet ﷺ was delivering the khutbah on Jumu'ah, a trade caravan arrived; the people slipped out toward it until only twelve remained. Then 62:11 came down: when they saw trade or diversion they broke away to it and left you standing. Say: what is with Allah is better than diversion and trade, and Allah is the best of providers.",
            "bn": "অংশটি শেষ হয় এমন এক ঘটনা দিয়ে, যা সহীহ হাদিসগ্রন্থগুলো সংরক্ষণ করেছে। জাবির (রাঃ) বর্ণনা করেন: নবী ﷺ জুমার খুতবা দিচ্ছিলেন, এমন সময় একটি বাণিজ্য-কাফেলা এসে পৌঁছাল। লোকেরা চুপিসারে সেদিকে বেরিয়ে যেতে থাকল, শেষে মাত্র বারোজন রইলেন। তখন ৬২:১১ নাজিল হলো: তারা যখন ব্যবসা বা খেল-তামাশা দেখল, সেদিকে ছুটে গেল আর আপনাকে দাঁড়ানো অবস্থায় রেখে গেল। বলুন: আল্লাহর কাছে যা আছে, তা খেল-তামাশা ও ব্যবসার চেয়ে উত্তম, আর আল্লাহই শ্রেষ্ঠ রিযিকদাতা।"
          },
          {
            "en": "The verse does not disown the community; it re-teaches it, and the honesty of its preservation is itself instruction — the Quran recorded the early community's stumble so that every later congregation would recognise the pull of the caravan in its own forms. The closing title settles the anxiety underneath the whole passage: Allah is the best of providers. The fear of missing provision was always the argument for leaving; the verse answers that argument at its root.",
            "bn": "আয়াতটি সেই সমাজকে ত্যাগ করে না, বরং নতুন করে শিক্ষা দেয়। আর ঘটনাটি যে সততার সঙ্গে সংরক্ষিত হয়েছে, সেটাও এক শিক্ষা। কুরআন প্রথম যুগের মুসলিম সমাজের এই হোঁচট লিখে রেখেছে, যাতে পরের প্রতিটি জামাত কাফেলার টান যে রূপেই আসুক, চিনে নিতে পারে। শেষের গুণবাচক নামটি পুরো অংশের তলায় চাপা পড়ে থাকা দুশ্চিন্তার মীমাংসা করে দেয়: আল্লাহই শ্রেষ্ঠ রিযিকদাতা। রিযিক হাতছাড়া হওয়ার ভয়ই তো ছিল বেরিয়ে যাওয়ার আসল যুক্তি। আয়াত সেই যুক্তির জবাব দেয় একেবারে গোড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weekly Reset",
          "bn": "প্রতি সপ্তাহের নতুন শুরু"
        },
        "p": [
          {
            "en": "The Prophet ﷺ said, as Muslim relates, that the best day on which the sun rises is the day of Jumu'ah. The verse builds that rank into the week's structure: one hour in which every believer, whatever his trade, stands in the same rows for the same reminder. A community that keeps this appointment re-synchronises weekly — its wealth-seeking interrupted, its priorities re-declared aloud, its equality rehearsed in the standing lines.",
            "bn": "ইমাম মুসলিম বর্ণনা করেছেন, নবী ﷺ বলেছেন: যেসব দিনে সূর্য ওঠে, তার মধ্যে সেরা দিন জুমার দিন। আয়াতটি সেই মর্যাদাকে সপ্তাহের কাঠামোর ভেতরে গেঁথে দেয়। সপ্তাহে একটি ঘণ্টা, যখন প্রত্যেক মুমিন, তার পেশা যা-ই হোক, একই কাতারে দাঁড়ায় একই নসিহত শুনতে। যে সমাজ এই সাক্ষাৎ নিয়মিত রক্ষা করে, তারা প্রতি সপ্তাহে নিজেদের নতুন করে এক সুরে বেঁধে নেয়। সম্পদের পেছনে ছোটায় বিরতি পড়ে, অগ্রাধিকারগুলো আবার উচ্চস্বরে ঘোষণা হয়, আর কাতারে দাঁড়িয়ে সাম্যের অনুশীলন চলে।"
          },
          {
            "en": "The personal practice is to identify one's own caravan. For each person some particular busyness is hardest to put down when the call comes — a meeting, a shop hour, a feed refreshing itself. The verse asks that it be named honestly and set down deliberately, early rather than at the final minute, with the closing clause held in mind as a working belief: that is better for you, if you only knew.",
            "bn": "ব্যক্তিগত আমল হলো নিজের কাফেলাটি চিনে নেওয়া। প্রত্যেকেরই কোনো না কোনো ব্যস্ততা আছে, যা আযান এলে ছেড়ে ওঠা সবচেয়ে কঠিন: একটা মিটিং, দোকানের ব্যস্ত সময়, কিংবা মোবাইলের ফিড, যা নিজে নিজেই নতুন হতে থাকে। আয়াত চায়, সৎভাবে সেটার নাম নিন, আর জেনেবুঝে সেটা নামিয়ে রাখুন, শেষ মিনিটে নয়, আগেভাগেই। আর শেষ বাক্যাংশটি মনে রাখুন এমন বিশ্বাস হিসেবে, যার ওপর ভর করে চলা যায়: এটাই তোমাদের জন্য উত্তম, যদি তোমরা জানতে।"
          }
        ]
      }
    ]
  }
});
