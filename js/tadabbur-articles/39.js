/**
 * Tadabbur long-form articles — surah 39.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "39:9": {
    "sections": [
      {
        "h": {
          "en": "Two Men in the Night",
          "bn": "রাতের দুই মানুষ"
        },
        "p": [
          {
            "en": "The verse opens on a silhouette: is one who is devoutly obedient in the hours of the night, prostrating and standing, wary of the Hereafter and hoping for the mercy of his Lord — like the other? The comparison completes a contrast begun in 39:8, which pictures a man who cries to his Lord in hardship, then forgets Him the moment relief arrives and sets up rivals to Him. Distress-only religion is the foil; against it stands the one whose devotion runs through the safe hours too.",
            "bn": "আয়াতটি খোলে একটি অবয়ব দিয়ে: যে ব্যক্তি রাতের প্রহরগুলোতে সিজদায় ও দাঁড়িয়ে বিনম্র আনুগত্যে মগ্ন, আখিরাত সম্পর্কে সতর্ক আর তার রবের রহমতের প্রত্যাশী — সে কি অন্যজনের মতো? তুলনাটি সম্পূর্ণ করে 39:8 আয়াতে শুরু হওয়া এক বৈপরীত্যকে, যেখানে আঁকা হয়েছে এমন মানুষ, যে কষ্টে পড়ে রবকে ডাকে, আর স্বস্তি আসামাত্র তাঁকে ভুলে গিয়ে তাঁর সমকক্ষ দাঁড় করায়। শুধু-দুর্দিনের ধর্ম এখানে বিপরীত পট; তার মুখোমুখি সেই মানুষ, যার আনুগত্য নিরাপদ প্রহরগুলোর ভেতর দিয়েও বয়ে চলে।"
          },
          {
            "en": "The vocabulary is chosen closely. Qanit denotes devout, humble, continuous obedience; ana' al-layl are the hours or watches of the night, not a hurried moment of it; sajidan wa qa'iman, prostrating and standing, are the two poles of the prayer's movement. Night is specified because night worship carries the surest signature of sincerity: no audience is awake to be impressed. What is done then is done for Allah or not done at all.",
            "bn": "শব্দ বাছাই এখানে নিবিড়। 'কানিত' বোঝায় বিনম্র, একনিষ্ঠ, লেগে থাকা আনুগত্য; 'আনাআল-লাইল' রাতের প্রহরসমূহ — তার কোনো তাড়াহুড়ার মুহূর্ত নয়; 'সাজিদান ওয়া কাইমান' — সিজদারত ও দণ্ডায়মান — নামাযের চলনের দুই মেরু। রাতকে নির্দিষ্ট করা হয়েছে, কারণ রাতের ইবাদত বহন করে ইখলাসের সবচেয়ে নিশ্চিত স্বাক্ষর: মুগ্ধ করার মতো কোনো দর্শক তখন জেগে নেই। তখন যা করা হয় তা আল্লাহর জন্যই করা হয়, নয়তো আদৌ করা হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear and Hope Together",
          "bn": "ভয় ও আশা একসঙ্গে"
        },
        "p": [
          {
            "en": "Two states share the worshipper's heart: yahdharul-akhirah, he is wary of the Hereafter, and yarju rahmata rabbih, he hopes for the mercy of his Lord. The commentators treat the pairing as deliberate spiritual engineering. Fear alone curdles into despair; hope alone slackens into presumption. Together they work like two wings, keeping the servant moving and level — repenting because of what he fears, persisting because of what he hopes.",
            "bn": "ইবাদতকারীর হৃদয়ে দুটি অবস্থা ভাগাভাগি করে থাকে: 'ইয়াহযারুল-আখিরাহ' — সে আখিরাত সম্পর্কে সতর্ক, আর 'ইয়ারজু রাহমাতা রাব্বিহ' — সে তার রবের রহমতের প্রত্যাশী। মুফাসসিরগণ এই জোড়কে দেখেন সুচিন্তিত আত্মিক প্রকৌশল হিসেবে। শুধু ভয় জমাট বেঁধে নৈরাশ্য হয়; শুধু আশা ঢিলে হয়ে দুঃসাহসে গড়ায়। একসঙ্গে তারা দুটি ডানার মতো কাজ করে — বান্দাকে চলমান ও ভারসাম্যে রাখে: যা ভয় করে তার কারণে সে তাওবা করে, যা আশা করে তার কারণে লেগে থাকে।"
          },
          {
            "en": "The same portrait recurs across the Quran. In 32:16 their sides forsake their beds, calling on their Lord in fear and hope. In 51:17-18 they used to sleep little of the night and seek forgiveness in the last hours before dawn. In 3:191 they remember Allah standing, sitting and lying on their sides, and ponder the creation of the heavens and the earth. The night-worshipper is one of the Quran's recurring heroes, drawn each time with the same two-toned heart.",
            "bn": "একই প্রতিকৃতি কুরআনজুড়ে ফিরে আসে। 32:16 আয়াতে তাদের পার্শ্বদেশ বিছানা ছেড়ে দূরে থাকে — তারা তাদের রবকে ডাকে ভয়ে ও আশায়। 51:17-18 আয়াতে তারা রাতের সামান্যই ঘুমাত, আর ভোরের আগের শেষ প্রহরে ক্ষমা চাইত। 3:191 আয়াতে তারা আল্লাহকে স্মরণ করে দাঁড়িয়ে, বসে ও কাত হয়ে শুয়ে, আর আসমান-যমীনের সৃষ্টি নিয়ে গভীর চিন্তা করে। রাতের ইবাদতকারী কুরআনের ফিরে ফিরে আসা নায়কদের একজন — প্রতিবারই আঁকা হয় একই দুই-সুরের হৃদয় নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Are They Equal?",
          "bn": "তারা কি সমান?"
        },
        "p": [
          {
            "en": "Then comes the question the verse is famous for: say, are those who know equal to those who do not know? The Arabic uses hal yastawi, a question of equivalence whose answer is meant to be supplied by the listener, and no honest listener can supply yes. The Quran uses this device elsewhere for the blind and the seeing, darkness and light. Here the inequality asserted is between knowledge and its absence — stated absolutely, with no qualifier restricting it to religious subjects.",
            "bn": "তারপর আসে সেই প্রশ্ন, যার জন্য আয়াতটি বিখ্যাত: বলো, যারা জানে আর যারা জানে না — তারা কি সমান? আরবিতে 'হাল ইয়াসতাউয়ি' — এমন এক সমতা-প্রশ্ন, যার উত্তর শ্রোতার নিজেরই জোগানোর কথা; আর কোনো সৎ শ্রোতা 'হ্যাঁ' জোগাতে পারে না। কুরআন এই ভঙ্গি অন্যত্র ব্যবহার করে অন্ধ ও চক্ষুষ্মান, অন্ধকার ও আলোর জন্য। এখানে যে অসমতা ঘোষিত হলো তা জ্ঞান ও তার অনুপস্থিতির মধ্যে — বলা হয়েছে নিরঙ্কুশভাবে, ধর্মীয় বিষয়ে সীমিত করার কোনো শর্ত ছাড়াই।"
          },
          {
            "en": "Yet the placement defines the knowledge meant. The question is asked immediately after the description of the man praying through the night, and the commentators draw the connection: the knowledge the Quran ranks people by is the kind that produces that man. It is knowledge of Allah that bears fruit in worship, caution and hope. Information that leaves its holder unchanged fails this verse's test however vast it is; a little knowledge that raises its holder at night passes it.",
            "bn": "তবু প্রশ্নটির অবস্থানই বুঝিয়ে দেয় কোন জ্ঞানের কথা হচ্ছে। প্রশ্নটি করা হয়েছে রাতভর নামাযরত মানুষটির বর্ণনার ঠিক পরেই, আর মুফাসসিরগণ সংযোগটি টেনে দেন: কুরআন যে জ্ঞান দিয়ে মানুষের স্তর মাপে, তা সেই জাতের — যা ওই মানুষটিকে তৈরি করে। তা আল্লাহ-সম্পর্কিত জ্ঞান, যা ফল দেয় ইবাদতে, সতর্কতায় ও আশায়। যে তথ্য তার ধারককে অপরিবর্তিত রেখে দেয়, তা যত বিশালই হোক, এই আয়াতের পরীক্ষায় ফেল; আর যে অল্প জ্ঞান তার ধারককে রাতে জাগিয়ে তোলে — সে পাস।"
          }
        ]
      },
      {
        "h": {
          "en": "People of Sound Minds",
          "bn": "বোধসম্পন্ন মানুষেরা"
        },
        "p": [
          {
            "en": "The verse ends: only the possessors of albab take heed. Lubb, the singular, is the kernel of a thing — the mind stripped of husk. The Quran's ulul-albab appear wherever seeing leads to acting: in 3:190-191 they read the alternation of night and day and turn it into remembrance. The closing line thus quietly answers its own famous question. The unequal difference between the knower and the ignorant registers only with people whose minds still take instruction — heedlessness can look at the contrast and see nothing.",
            "bn": "আয়াত শেষ হয়: কেবল 'আলবাব'-এর অধিকারীরাই উপদেশ গ্রহণ করে। একবচনে 'লুব্ব' মানে কোনো জিনিসের শাঁস — খোসা ছাড়ানো বিশুদ্ধ বুদ্ধি। কুরআনের 'উলুল-আলবাব' হাজির হয় সেখানেই, যেখানে দেখা গড়ায় করায়: 3:190-191 আয়াতে তারা রাত-দিনের আবর্তন পড়ে তাকে যিকিরে পরিণত করে। শেষ পঙক্তিটি তাই নিজের বিখ্যাত প্রশ্নের উত্তর নীরবে নিজেই দেয়। জ্ঞানী ও অজ্ঞের অসম পার্থক্য ধরা পড়ে কেবল তাদের কাছে, যাদের মন এখনো শিক্ষা নেয় — গাফিলতি এই বৈপরীত্যের দিকে তাকিয়েও কিছুই দেখতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Measuring Knowledge by Its Fruit",
          "bn": "ফল দিয়ে জ্ঞানের পরিমাপ"
        },
        "p": [
          {
            "en": "The note behind this article distills the verse: real knowledge is measured by whether it moves us to devotion and hope. That yardstick can be applied without ceremony. After a lecture, a book, a course of study, the verse's question is simply: did anything change in the night that followed? Not as guilt, but as calibration — the worshipper of 39:9 is not presented as a scholar, only as someone whose knowledge of his Lord had consequences after dark.",
            "bn": "এই লেখার পেছনের নোটটি আয়াতের নির্যাস তুলে দেয়: প্রকৃত জ্ঞানের মাপ — তা আমাদের ইবাদত ও আশার দিকে নাড়ায় কি না। এই গজকাঠি কোনো আনুষ্ঠানিকতা ছাড়াই প্রয়োগ করা যায়। একটি বক্তৃতা, একটি বই, এক দফা পড়াশোনার পরে আয়াতের প্রশ্নটি সোজা: এর পরের রাতটিতে কি কিছু বদলাল? অপরাধবোধ হিসেবে নয়, মাপ ঠিক করা হিসেবে — 39:9 আয়াতের ইবাদতকারীকে আলিম হিসেবে হাজির করা হয়নি; কেবল এমন একজন হিসেবে, যার রব-বিষয়ক জ্ঞান অন্ধকার নামার পরেও পরিণতি রেখে গেছে।"
          },
          {
            "en": "The doorway the verse names is deliberately modest: hours of the night, not the whole night. Two rak'ahs after 'Isha or before Fajr, prayed while others sleep, already place a person inside the description. Consistency outweighs quantity here as elsewhere in the religion. And the pairing of wariness and hope supplies the inner script for those minutes — one prostration weighed with what you fear, one standing lifted by what you hope from the mercy of your Lord.",
            "bn": "আয়াতটি যে দরজার নাম নেয় তা ইচ্ছাকৃতভাবেই বিনীত: রাতের কিছু প্রহর, গোটা রাত নয়। ইশার পরে বা ফজরের আগে দুই রাকাত — অন্যরা যখন ঘুমায় তখন পড়া — একজন মানুষকে এই বর্ণনার ভেতরে ঢুকিয়ে দেয়। দ্বীনের অন্যত্র যেমন, এখানেও ধারাবাহিকতা পরিমাণকে ছাড়িয়ে যায়। আর সতর্কতা ও আশার জোড়টি সেই মিনিটগুলোর ভেতরের চিত্রনাট্য জুগিয়ে দেয় — একটি সিজদা ভারী হোক যা তুমি ভয় করো তা দিয়ে, একটি দাঁড়ানো উঁচু হোক তোমার রবের রহমত থেকে যা আশা করো তা দিয়ে।"
          }
        ]
      }
    ]
  },
  "39:10": {
    "sections": [
      {
        "h": {
          "en": "A Tender Address",
          "bn": "স্নেহমাখা এক সম্বোধন"
        },
        "p": [
          {
            "en": "The verse opens: qul ya 'ibadi alladhina amanu — say: O My servants who have believed. Before any command arrives, the audience is gathered in with a possessive: My servants. To be owned by Allah, in the Quran's vocabulary, is an honour, and He attaches believers to Himself before asking anything of them. Then the single instruction: ittaqu rabbakum, be mindful of your Lord — and even there the word chosen is rabbakum — your Lord, the Sustainer.",
            "bn": "আয়াতটি শুরু হয়: কুল ইয়া 'ইবাদিল্লাযীনা আমানূ — বলুন: হে আমার মুমিন বান্দারা। কোনো আদেশ আসার আগেই শ্রোতাদের কাছে টেনে নেওয়া হয় একটি সম্বন্ধপদ দিয়ে: আমার বান্দারা। কুরআনের ভাষায় আল্লাহর হওয়া এক সম্মান, আর তিনি কিছু চাওয়ার আগে মুমিনদের নিজের সঙ্গে জুড়ে নেন। তারপর একটিমাত্র নির্দেশ: ইত্তাকূ রাব্বাকুম — তোমাদের রবকে ভয় করো; আর সেখানেও বেছে নেওয়া শব্দটি রাব্বাকুম — তোমাদের রব, প্রতিপালক।"
          },
          {
            "en": "The same surah repeats this manner of address: in 39:53 the call goes out to My servants who have transgressed against themselves, telling them not to despair of Allah's mercy. Read together, the two verses show one Lord speaking to His obedient and His broken with the same opening tenderness. This verse tells the believers what their striving will earn; that verse tells the sinners what their return will find. Nobody addressed as My servant is being written off.",
            "bn": "একই সূরা এই সম্বোধনভঙ্গিই ফিরিয়ে আনে: 39:53 আয়াতে ডাক যায় আমার সেই বান্দাদের প্রতি, যারা নিজেদের ওপর বাড়াবাড়ি করেছে — তাদের বলা হয় আল্লাহর রহমত থেকে নিরাশ না হতে। একসঙ্গে পড়লে দুটি আয়াত দেখায়, এক রব তাঁর অনুগত ও তাঁর ভেঙে পড়া বান্দাদের সঙ্গে কথা বলছেন একই স্নেহমাখা সূচনায়। এই আয়াত মুমিনদের বলে তাদের সাধনা কী অর্জন করবে; ওই আয়াত গুনাহগারদের বলে তাদের প্রত্যাবর্তন কী খুঁজে পাবে। 'আমার বান্দা' বলে সম্বোধিত কাউকেই বাতিলের খাতায় ফেলা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Good for Those Who Do Good",
          "bn": "যারা ভালো করে তাদের জন্য কল্যাণ"
        },
        "p": [
          {
            "en": "The promise follows: lilladhina ahsanu fi hadhihi ad-dunya hasanah — for those who do good in this world there is good. The commentators read the clause in two ways. On one reading, the phrase in this world attaches to the reward: those who do good receive good already in this life — wellbeing, provision and honour before the Hereafter arrives. On the other, it attaches to the deed: for those who do good during this worldly life, there is good waiting ahead.",
            "bn": "এরপর আসে প্রতিশ্রুতি: লিল্লাযীনা আহসানূ ফী হাযিহিদ-দুনইয়া হাসানাহ — যারা এই দুনিয়ায় ভালো করে তাদের জন্য আছে কল্যাণ। মুফাসসিরগণ বাক্যাংশটি দুইভাবে পড়েন। এক পাঠে 'এই দুনিয়ায়' অংশটি যুক্ত হয় প্রতিদানের সঙ্গে: যারা ভালো করে তারা এই জীবনেই কল্যাণ পায় — আখিরাত পৌঁছানোর আগেই সুস্থতা, রিযিক ও সম্মান। অন্য পাঠে তা যুক্ত হয় কাজের সঙ্গে: যারা এই দুনিয়ার জীবনে ভালো করে, তাদের জন্য সামনে কল্যাণ অপেক্ষা করছে।"
          },
          {
            "en": "The readings stack rather than compete. Ihsan is not a wager that pays only after death; the doer of good tastes returns now — a settled heart, people's trust, the sweetness of worship — and the full account is still held over for later. Either way, the verse binds the promise to doing, ahsanu, a verb — the good is attached to good actually done.",
            "bn": "পাঠ দুটি প্রতিদ্বন্দ্বিতা করে না, বরং একে অপরের ওপর জমা হয়। ইহসান এমন বাজি নয় যা কেবল মৃত্যুর পরে শোধ হয়; ভালোর কারিগর এখনই প্রতিদান আস্বাদন করে — স্থির হৃদয়, মানুষের আস্থা, ইবাদতের মিষ্টতা — আর পূর্ণ হিসাব তবু পরের জন্য তোলা থাকে। যেভাবেই পড়া হোক, আয়াতটি প্রতিশ্রুতিকে বাঁধে করার সঙ্গে — আহসানূ, একটি ক্রিয়া — কল্যাণ জুড়ে দেওয়া হয়েছে সত্যিকারের করা ভালোর সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "And His Earth Is Spacious",
          "bn": "আর তাঁর যমীন প্রশস্ত"
        },
        "p": [
          {
            "en": "Then a clause that seems to change the subject: wa ardu Allahi wasi'ah, and Allah's earth is spacious. The commentators explain it against the verse's Makkan setting: believers were being pressed to abandon their religion where they lived. The spacious earth is the answer — if righteousness has become impossible where you stand, move. Worship is not welded to a postcode. The same address appears in 29:56, where My servants who believe are told My earth is spacious, so worship Me alone.",
            "bn": "তারপর এমন একটি বাক্যাংশ যা আপাতদৃষ্টিতে প্রসঙ্গ বদলে দেয়: ওয়া আরদুল্লাহি ওয়াসি'আহ — আর আল্লাহর যমীন প্রশস্ত। মুফাসসিরগণ এটি ব্যাখ্যা করেন আয়াতের মক্কী প্রেক্ষাপটে: মুমিনদের চাপ দেওয়া হচ্ছিল, তারা যেখানে থাকে সেখানে দ্বীন ছেড়ে দিতে। প্রশস্ত যমীনই উত্তর — যেখানে দাঁড়িয়ে আছ সেখানে নেককাজ অসম্ভব হয়ে গেলে সরে যাও। ইবাদত কোনো ঠিকানার সঙ্গে ঝালাই করা নয়। একই সম্বোধন 29:56 আয়াতেও আছে, যেখানে আমার মুমিন বান্দাদের বলা হয়: আমার যমীন প্রশস্ত, সুতরাং আমারই ইবাদত করো।"
          },
          {
            "en": "The Quran also shows the clause's edge. In 4:97 the angels ask those who wronged themselves by staying put: was not Allah's earth spacious enough for you to emigrate in it? The spaciousness is both a comfort and an excuse-removing argument. For most readers today the point generalises past migration: no job, neighbourhood or social circle that demands disobedience is the only option on Allah's wide earth. Feeling cornered is usually a failure of the map, not of the territory.",
            "bn": "কুরআন এই বাক্যাংশের ধারালো দিকটিও দেখায়। 4:97 আয়াতে ফেরেশতারা জিজ্ঞেস করেন তাদের, যারা বসে থেকে নিজেদের ওপর জুলুম করেছিল: আল্লাহর যমীন কি এত প্রশস্ত ছিল না যে তোমরা তাতে হিজরত করতে? অতএব এই প্রশস্ততা একইসঙ্গে সান্ত্বনা এবং অজুহাত-নাশক এক যুক্তি। আজকের অধিকাংশ পাঠকের জন্য কথাটি হিজরত ছাড়িয়ে ব্যাপক হয়: যে চাকরি, পাড়া বা সামাজিক বলয় গুনাহ দাবি করে, আল্লাহর প্রশস্ত যমীনে সেটিই একমাত্র বিকল্প নয়। কোণঠাসা লাগা সাধারণত মানচিত্রের ব্যর্থতা, ভূখণ্ডের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Payment Without Account",
          "bn": "হিসাব ছাড়া প্রতিদান"
        },
        "p": [
          {
            "en": "The verse closes with its heaviest sentence: innama yuwaffa as-sabiruna ajrahum bi-ghayri hisab — only the patient will be paid their reward in full, without account. Yuwaffa is a passive verb from a root meaning to pay in full, to leave nothing owed. Bi-ghayri hisab, without reckoning, removes the very frame in which other rewards are described: elsewhere deeds are weighed and multiplied by known factors, but patience is paid outside the arithmetic altogether.",
            "bn": "আয়াতটি শেষ হয় তার সবচেয়ে ভারী বাক্যে: ইন্নামা ইউওয়াফফাস-সাবিরূনা আজরাহুম বিগাইরি হিসাব — কেবল সবরকারীদেরই তাদের প্রতিদান পূর্ণমাত্রায় দেওয়া হবে, কোনো হিসাব ছাড়া। ইউওয়াফফা একটি কর্মবাচ্যের ক্রিয়া, যার মূল ধাতুর অর্থ পুরোপুরি শোধ করা, কোনো পাওনা বাকি না রাখা। বিগাইরি হিসাব — বিনা হিসাবে — সেই কাঠামোটিই সরিয়ে দেয় যার ভেতরে অন্য প্রতিদানের বর্ণনা আসে: অন্যত্র আমল ওজন করা হয় এবং জানা গুণিতকে বাড়ানো হয়, কিন্তু সবরের প্রতিদান দেওয়া হয় পাটিগণিতের একেবারে বাইরে।"
          },
          {
            "en": "Ibn Kathir quotes al-Awza'i on this clause: it is not weighed for them nor measured out; it is scooped for them in abundance. The scholars connect the exception to the nature of the deed. Most acts have edges — a prayer ends, a fast breaks at sunset — but patience has no closing time; it runs through nights and years without an audience. A deed without limits is met with a reward without reckoning.",
            "bn": "ইবনে কাসীর এই বাক্যাংশে আল-আওযাঈর উক্তি উদ্ধৃত করেন: তাদের জন্য তা ওজনও করা হয় না, মাপাও হয় না; তাদের জন্য তা অঞ্জলি ভরে তুলে দেওয়া হয়। আলিমগণ এই ব্যতিক্রমকে আমলটির প্রকৃতির সঙ্গে যুক্ত করেন। অধিকাংশ আমলের কিনারা আছে — নামায শেষ হয়, রোযা সূর্যাস্তে ভাঙে — কিন্তু সবরের কোনো সমাপ্তি-ঘণ্টা নেই; তা দর্শকবিহীন রাত ও বছরের ভেতর দিয়ে বয়ে চলে। সীমাহীন আমলের দেখা মেলে হিসাবহীন প্রতিদানের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience in Three Directions",
          "bn": "তিন দিকে সবর"
        },
        "p": [
          {
            "en": "The scholars, as-Sa'di among them, classify sabr into three kinds: patience in staying upon Allah's obedience, patience in holding back from what He forbade, and patience under the decrees that hurt. All three live inside this verse. Remaining mindful of your Lord under pressure is the first; refusing the exit that disobedience offers is the second; and bearing the costs of both, including leaving one's homeland, is the third. The reward without account covers the whole family of patiences.",
            "bn": "আলিমগণ — তাঁদের মধ্যে আস-সা'দীও — সবরকে তিন ভাগে ভাগ করেন: আল্লাহর আনুগত্যের ওপর টিকে থাকার সবর, তিনি যা নিষেধ করেছেন তা থেকে নিজেকে আটকে রাখার সবর, আর বেদনাদায়ক তাকদীরের নিচে ধৈর্য ধরার সবর। তিনটিই এই আয়াতের ভেতরে বাস করে। চাপের মধ্যেও নিজের রবের ব্যাপারে সচেতন থাকা প্রথমটি; গুনাহ যে পালাবার পথ দেখায় তা প্রত্যাখ্যান করা দ্বিতীয়টি; আর দুটোরই মূল্য বহন করা — নিজের জন্মভূমি ছেড়ে যাওয়া পর্যন্ত — তৃতীয়টি। হিসাবহীন প্রতিদান সবরের গোটা পরিবারকেই ঢেকে নেয়।"
          },
          {
            "en": "A hadith in Muslim, from Abu Hurayrah (RA), applies the same logic of unmeasured payment to one act of patience. Every deed of the son of Adam is multiplied, a good deed ten times up to seven hundred times — except fasting, Allah says, for it is Mine and I Myself shall reward it. The scholars observe that fasting is patience in its purest, most hidden form, and its wage, like the wage in this verse, is lifted out of the multiplication table into Allah's own hand.",
            "bn": "মুসলিমে আবু হুরাইরা (রাঃ) থেকে বর্ণিত একটি হাদীস মাপা-বিহীন প্রতিদানের এই একই যুক্তি সবরের একটি নির্দিষ্ট কাজে প্রয়োগ করে দেখায়। আদম-সন্তানের প্রতিটি আমল বহুগুণ করা হয় — একটি নেকি দশ গুণ থেকে সাতশো গুণ পর্যন্ত — কিন্তু রোযা ছাড়া; আল্লাহ বলেন, তা আমার, আর আমি নিজেই তার প্রতিদান দেব। আলিমগণ লক্ষ করেন, রোযা হলো সবরের সবচেয়ে বিশুদ্ধ, সবচেয়ে গোপন রূপ; আর এর মজুরি, এই আয়াতের মজুরির মতোই, গুণনের ছক থেকে তুলে নেওয়া হয়েছে আল্লাহর নিজের হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Dead Ends",
          "bn": "কোনো পথই বন্ধ নয়"
        },
        "p": [
          {
            "en": "Put back together, the verse hands a pressured believer three supports in one breath. You are addressed as His servant, so your situation has not lowered your standing. His earth is spacious, so the door you are staring at is not the only door — a move or a different livelihood may itself be an act of taqwa. And whatever cannot be escaped can be endured for a wage no accountant will ever total. No situation this verse addresses is a dead end.",
            "bn": "সব মিলিয়ে দেখলে, আয়াতটি চাপে থাকা এক মুমিনের হাতে এক নিঃশ্বাসে তিনটি অবলম্বন তুলে দেয়। আপনাকে সম্বোধন করা হয়েছে তাঁর বান্দা বলে — অতএব আপনার পরিস্থিতি আপনার মর্যাদা নামিয়ে দেয়নি। তাঁর যমীন প্রশস্ত — অতএব আপনি যে দরজার দিকে তাকিয়ে আছেন সেটিই একমাত্র দরজা নয়; একটি স্থানবদল বা ভিন্ন একটি জীবিকা নিজেই তাকওয়ার আমল হতে পারে। আর যা থেকে পালানো যায় না, তা সহ্য করা যায় এমন মজুরির বিনিময়ে, যার যোগফল কোনো হিসাবরক্ষক কোনোদিন মেলাতে পারবে না। এই আয়াত যত পরিস্থিতির কথা বলে, তার কোনোটিই বন্ধ গলি নয়।"
          },
          {
            "en": "The order of the verse is also its method for a hard season. Begin with who is speaking to you and what He calls you. Then do the good that is still possible today, trusting that good is already accruing on it. Then look honestly at the map for the doors pride or fear has kept shut. And for everything that remains, choose sabr on purpose — not numb waiting forced by circumstance, but the deliberate patience this verse describes — the kind paid without account.",
            "bn": "আয়াতের ক্রমটিই কঠিন মৌসুম পার করার পদ্ধতি। শুরু করুন এটা দিয়ে — কে আপনার সঙ্গে কথা বলছেন এবং তিনি আপনাকে কী নামে ডাকছেন। তারপর আজও যে ভালোটুকু সম্ভব তা করুন — এই ভরসায় যে তার ওপর কল্যাণ জমা হতে শুরু করেছে। তারপর সৎভাবে মানচিত্রে তাকান — অহংকার বা ভয় কোন দরজাগুলো বন্ধ করে রেখেছে। আর যা কিছু বাকি থাকে তার জন্য সজ্ঞানে সবর বেছে নিন — পরিস্থিতি যে অসাড় অপেক্ষা চাপিয়ে দেয় তা নয়, বরং এই আয়াতে বর্ণিত সেই সচেতন ধৈর্য — যে ধৈর্যের প্রতিদান দেওয়া হয় বিনা হিসাবে।"
          }
        ]
      }
    ]
  },
  "39:23": {
    "sections": [
      {
        "h": {
          "en": "The Best of Speech",
          "bn": "সর্বোত্তম বাণী"
        },
        "p": [
          {
            "en": "The verse before this one, 39:22, has just contrasted the man whose breast Allah opened to Islam, walking in a light from his Lord, with those whose hearts have hardened against the remembrance of Allah. 39:23 then answers the obvious question: hardened against what, exactly. Against this. Allah sent down ahsan al-hadith, the best of speech, and the verse goes on to describe what it does to a heart that is not hardened.",
            "bn": "এর আগের আয়াত 39:22 সদ্যই তুলনা করেছে সেই মানুষটির, ইসলামের জন্য আল্লাহ যার বক্ষ উন্মুক্ত করে দিয়েছেন এবং যে তার প্রতিপালকের আলোয় চলছে, আর তাদের, আল্লাহর স্মরণের ব্যাপারে যাদের হৃদয় শক্ত হয়ে গেছে। এরপর 39:23 স্পষ্ট প্রশ্নটির জবাব দেয়: ঠিক কীসের ব্যাপারে শক্ত। এরই ব্যাপারে। আল্লাহ নাযিল করেছেন আহসানাল হাদীস — সর্বোত্তম বাণী — আর আয়াতটি এরপর বলে যে হৃদয় শক্ত হয়ে যায়নি, তার উপর এই বাণী কী করে।"
          },
          {
            "en": "Hadith here simply means speech or discourse, and the same word is used for its opposite in 31:6, of the one who buys lahw al-hadith, diverting speech, to mislead others from the way of Allah. Two kinds of discourse are on offer to every person and both work on the heart. Earlier in this same surah, 39:18 praises those who listen to speech and follow the best of it, so the surah has already trained the reader to be a discriminating listener before naming what the best of it is.",
            "bn": "এখানে হাদীস শব্দের অর্থ কেবল কথা বা বাণী, আর একই শব্দ তার বিপরীত অর্থে ব্যবহৃত হয়েছে 31:6 আয়াতে — সেই ব্যক্তির কথায়, যে লাহওয়াল হাদীস অর্থাৎ চিত্তবিনোদনের কথা ক্রয় করে মানুষকে আল্লাহর পথ থেকে বিভ্রান্ত করার জন্য। প্রত্যেক মানুষের সামনেই দুই ধরনের বাণী হাজির থাকে এবং দুটোই হৃদয়ের উপর কাজ করে। এই একই সূরার আগের অংশে 39:18 তাদের প্রশংসা করে যারা কথা মনোযোগ দিয়ে শোনে এবং তার উত্তমটি অনুসরণ করে — অর্থাৎ উত্তমটি কী তা বলার আগেই সূরাটি পাঠককে বাছাই করে শোনার অভ্যাস করিয়ে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Consistent With Itself",
          "bn": "নিজের সঙ্গে সামঞ্জস্যপূর্ণ"
        },
        "p": [
          {
            "en": "It is then called kitaban mutashabihan, a Book whose parts resemble one another. The root here means to be alike, and the mufassirun read it as self-resemblance: its passages match each other in truth, in beauty and in eloquence, and no part of it contradicts another part. That is a claim about internal consistency across a text revealed piece by piece over twenty-three years, in wildly different circumstances.",
            "bn": "এরপর একে বলা হয়েছে কিতাবান মুতাশাবিহান — এমন কিতাব যার অংশগুলো একে অপরের সদৃশ। এখানকার ধাতুটির অর্থ সদৃশ হওয়া, আর মুফাসসিরগণ এটিকে পড়েন নিজের সঙ্গে নিজের সাদৃশ্য অর্থে: এর অংশগুলো সত্যে, সৌন্দর্যে ও ভাষার প্রাঞ্জলতায় পরস্পরের সঙ্গে মিলে যায়, আর এর কোনো অংশ অন্য অংশের বিরোধিতা করে না। তেইশ বছর ধরে ভিন্ন ভিন্ন পরিস্থিতিতে খণ্ড খণ্ড করে নাযিল হওয়া একটি গ্রন্থ সম্পর্কে এটি অভ্যন্তরীণ সামঞ্জস্যের দাবি।"
          },
          {
            "en": "Keep this sense separate from the mutashabihat of 3:7, where the same root is used in a quite different technical sense, of verses whose meaning is not immediately decisive as against the clear muhkamat. That is not what is meant here. Here the whole Book is called mutashabih, and it is praise, not caution. 4:82 argues the point directly: had it been from other than Allah they would have found in it much contradiction.",
            "bn": "এই অর্থটিকে 3:7 আয়াতের মুতাশাবিহাত থেকে আলাদা রাখুন, যেখানে একই ধাতু সম্পূর্ণ ভিন্ন এক পারিভাষিক অর্থে ব্যবহৃত হয়েছে — সেই আয়াতগুলোর জন্য যেগুলোর অর্থ সুস্পষ্ট মুহকামাতের মতো তৎক্ষণাৎ চূড়ান্ত নয়। এখানে সেটি বোঝানো হয়নি। এখানে গোটা কিতাবকেই মুতাশাবিহ বলা হয়েছে, আর তা প্রশংসা, সতর্কতা নয়। 4:82 কথাটির পক্ষে সরাসরি যুক্তি দেয়: এটি যদি আল্লাহ ছাড়া অন্য কারও কাছ থেকে আসত, তবে তারা এতে বহু অসঙ্গতি পেত।"
          }
        ]
      },
      {
        "h": {
          "en": "Mathani, the Folding",
          "bn": "মাসানী — ভাঁজ করা"
        },
        "p": [
          {
            "en": "The next word is mathani, a plural from a root meaning to fold a thing back on itself, to double it, to repeat. The mufassirun explain it of the Book's manner: its themes come round again and again, promise beside warning, command beside prohibition, the same stories told in different surahs from different angles. The Quran does not lay out a subject once and move on. It returns.",
            "bn": "পরের শব্দটি মাসানী, যা এমন এক ধাতু থেকে আসা বহুবচন যার অর্থ কোনো কিছুকে নিজের উপর ভাঁজ করা, দ্বিগুণ করা, পুনরাবৃত্তি করা। মুফাসসিরগণ একে ব্যাখ্যা করেন কিতাবের ধরন হিসেবে: এর বিষয়গুলো বারবার ফিরে আসে — প্রতিশ্রুতির পাশে সতর্কবাণী, নির্দেশের পাশে নিষেধ, একই ঘটনা ভিন্ন ভিন্ন সূরায় ভিন্ন কোণ থেকে বলা। কুরআন কোনো বিষয় একবার বলে সামনে এগিয়ে যায় না। সে ফিরে আসে।"
          },
          {
            "en": "The same word names al-Fatihah in 15:87, the seven oft-repeated, and it is the surah recited in every rak'ah of every prayer. That is the pattern in miniature. Repetition of this kind is not a weakness of composition to be excused. It is how a text is meant to be lived with over a lifetime rather than read through once, and it is why a passage you have known for years opens differently in a year when you need it differently.",
            "bn": "একই শব্দ 15:87 আয়াতে সূরা আল-ফাতিহার নাম হিসেবে এসেছে — পুনঃপুন আবৃত্ত সাতটি — আর এটিই সেই সূরা যা প্রতিটি নামাযের প্রতিটি রাকআতে পড়া হয়। এটিই ছোট আকারে সেই ধরনটি। এ ধরনের পুনরাবৃত্তি রচনার কোনো দুর্বলতা নয় যার জন্য অজুহাত দিতে হবে। এভাবেই একটি গ্রন্থকে একবার পড়ে ফেলার বদলে সারা জীবন ধরে সঙ্গে নিয়ে চলার কথা, আর এ কারণেই বহু বছর ধরে জানা একটি অংশ এমন এক বছরে অন্যভাবে খুলে যায় যে বছর আপনার প্রয়োজনটি অন্যরকম।"
          }
        ]
      },
      {
        "h": {
          "en": "Skins First, Then Hearts",
          "bn": "আগে চামড়া, তারপর হৃদয়"
        },
        "p": [
          {
            "en": "Then the verse describes an effect, and it describes it physically. Taqsha'irru minhu juludu, the skins of those who fear their Lord shiver from it. The verb is the one used for skin contracting and bristling, the involuntary response a body makes before the mind has decided anything. Revelation is not presented here as information received but as something a person undergoes.",
            "bn": "এরপর আয়াতটি একটি প্রতিক্রিয়ার বর্ণনা দেয়, আর দেয় শারীরিকভাবে। তাকশাইররু মিনহু জুলূদু — যারা তাদের প্রতিপালককে ভয় করে, এতে তাদের চামড়া শিউরে ওঠে। ক্রিয়াপদটি সেই শব্দ যা চামড়া সংকুচিত হওয়া ও রোম দাঁড়িয়ে যাওয়ার জন্য ব্যবহৃত হয় — দেহের সেই অনিচ্ছাকৃত সাড়া, যা মন কিছু ঠিক করার আগেই ঘটে যায়। এখানে ওহীকে প্রাপ্ত তথ্য হিসেবে নয়, বরং মানুষের উপর দিয়ে যা বয়ে যায় সেই অভিজ্ঞতা হিসেবে উপস্থাপন করা হয়েছে।"
          },
          {
            "en": "Then comes thumma, then, and the movement reverses: their skins and their hearts soften at the remembrance of Allah. Notice that the shivering is attributed to the skins alone, while the softening is attributed to the skins and the hearts together. The awe reaches the surface; the ease reaches further in. And notice the direction of travel. The verse ends in softness, not in trembling, so a reading that leaves a person only frightened has stopped halfway through the verse.",
            "bn": "এরপর আসে সুম্মা — তারপর — এবং গতি উল্টে যায়: আল্লাহর স্মরণে তাদের চামড়া ও হৃদয় কোমল হয়ে যায়। লক্ষ করুন, শিউরে ওঠাটি কেবল চামড়ার সঙ্গে যুক্ত, আর কোমল হওয়াটি চামড়া ও হৃদয় — দুটোর সঙ্গেই যুক্ত। ভয় পৌঁছায় উপরিতলে; প্রশান্তি পৌঁছায় আরও ভেতরে। আর গতির দিকটিও লক্ষ করুন। আয়াতটি শেষ হয় কোমলতায়, কম্পনে নয় — তাই যে পাঠ মানুষকে কেবল ভীত করে রেখে দেয়, তা আয়াতের অর্ধেক পথেই থেমে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Guidance Stays in His Hand",
          "bn": "হিদায়াত তাঁরই হাতে"
        },
        "p": [
          {
            "en": "The verse closes by naming what has just been described: that is the guidance of Allah, by which He guides whom He wills; and whoever Allah leaves astray has no guide. So the shivering and the softening are not achievements. They are the guidance itself, arriving. Which is why 1:6 asks for exactly this in every rak'ah, and why a heart that responds to recitation should thank rather than congratulate itself.",
            "bn": "আয়াতটি শেষ হয় সদ্য বর্ণিত জিনিসটির নাম দিয়ে: এই হলো আল্লাহর হিদায়াত, যাকে ইচ্ছা তিনি তা দিয়ে পথ দেখান; আর আল্লাহ যাকে পথহারা করেন তার কোনো পথপ্রদর্শক নেই। অর্থাৎ শিউরে ওঠা আর কোমল হয়ে যাওয়া কোনো অর্জন নয়। এগুলোই হিদায়াত, যা এসে পৌঁছাচ্ছে। এ কারণেই 1:6 প্রতিটি রাকআতে ঠিক এই জিনিসটিই চায়, আর এ কারণেই তিলাওয়াতে সাড়া দেওয়া হৃদয়ের নিজেকে বাহবা দেওয়ার বদলে শোকর করা উচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading So It Reaches You",
          "bn": "এমনভাবে পড়া যাতে তা পৌঁছায়"
        },
        "p": [
          {
            "en": "If nothing moves when you read, the verse locates the problem in the hardened heart of 39:22 rather than in the Book, and hardness has causes that can be worked on. Slow the recitation until the meaning has time to land, and read the translation of what you are reciting. 7:204 asks for attentive listening when the Quran is recited, which is the minimum the verse assumes. And take the closing note seriously: aim at the softening, not at a display of emotion.",
            "bn": "পড়ার সময় যদি ভেতরে কিছুই না নড়ে, আয়াতটি সমস্যার জায়গা দেখায় 39:22 আয়াতের সেই শক্ত হয়ে যাওয়া হৃদয়ে, কিতাবে নয় — আর সেই কাঠিন্যের কারণ আছে, যেগুলো নিয়ে কাজ করা যায়। তিলাওয়াতের গতি কমান যতক্ষণ না অর্থ এসে পৌঁছানোর সময় পায়, আর আপনি যা পড়ছেন তার অনুবাদটিও পড়ুন। 7:204 কুরআন পাঠের সময় মনোযোগী শ্রবণ চায়, যা এই আয়াত অন্তত ধরে নেয়। আর শেষের ইঙ্গিতটি গুরুত্বের সঙ্গে নিন: লক্ষ্য হোক কোমল হয়ে যাওয়া, আবেগের প্রদর্শনী নয়।"
          }
        ]
      }
    ]
  },
  "39:36": {
    "sections": [
      {
        "h": {
          "en": "A Question, Not a Statement",
          "bn": "এটি প্রশ্ন, বিবৃতি নয়"
        },
        "p": [
          {
            "en": "The verse opens alaysa Allahu bikafin abdah: is not Allah sufficient for His servant? It is put as a question, and the Arabic form is one that expects the hearer to answer bala, yes indeed. Al-Muyassar supplies that answer out loud, reading the opening and replying that He will certainly suffice him in the matter of his religion and his world, and will push away from him whoever intends him harm.",
            "bn": "আয়াতটি শুরু হয় 'আলাইসাল্লাহু বিকাফিন আবদাহু' দিয়ে: আল্লাহ কি তাঁর বান্দার জন্য যথেষ্ট নন? এটি প্রশ্ন হিসেবেই রাখা হয়েছে, আর আরবি এই গঠনটি শ্রোতার কাছ থেকে 'বালা' — হ্যাঁ, নিশ্চয়ই — এই উত্তরটিই প্রত্যাশা করে। তাফসীর মুয়াসসার সেই উত্তরটি স্পষ্ট করে দিয়ে বলে, তিনি অবশ্যই তার দ্বীন ও দুনিয়ার ব্যাপারে যথেষ্ট হবেন, আর যে তার ক্ষতি চায় তাকে তার থেকে সরিয়ে দেবেন।"
          },
          {
            "en": "A statement would have closed the matter for the reader. A question makes him produce the answer himself, out of what he already believes, which is why the surah uses the form twice in a row: 39:37 asks again, is not Allah Exalted in Might, Owner of Retribution? Fear is rarely cured by being contradicted from outside. It is more often cured by being made to say aloud the thing it already knows.",
            "bn": "বিবৃতি হলে পাঠকের জন্য বিষয়টি সেখানেই শেষ হয়ে যেত। প্রশ্ন তাকে বাধ্য করে নিজের বিশ্বাস থেকে নিজেই উত্তরটি বের করে আনতে; এ কারণেই সূরাটি পরপর দুবার এই গঠন ব্যবহার করে — 39:37 আবার জিজ্ঞেস করে, আল্লাহ কি মহাপরাক্রমশালী, প্রতিশোধ গ্রহণকারী নন? বাইরে থেকে খণ্ডন করে ভয় খুব কমই সারে। বরং যা সে আগে থেকেই জানে তা মুখে বলিয়ে নিলেই বেশিরভাগ সময় তা সারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sufficient, With an Extra Letter",
          "bn": "যথেষ্ট, একটি বাড়তি অক্ষরসহ"
        },
        "p": [
          {
            "en": "Kafin is the active participle of kafa, to suffice: the one who is enough. It arrives here as bikafin, with a ba prefixed to it, and the grammarians class that ba as an added letter, put in after a negative interrogative purely for force. Nothing in the sense is changed and something in the weight is. The claim is not that Allah helps a servant along; it is that He is, by Himself, the whole of what the servant needs.",
            "bn": "'কাফিন' হলো 'কাফা' অর্থাৎ যথেষ্ট হওয়া — এই ক্রিয়ার কর্তৃবাচক বিশেষণ: যিনি যথেষ্ট। এখানে শব্দটি এসেছে 'বিকাফিন' রূপে, তার আগে একটি 'বা' যুক্ত হয়ে; ব্যাকরণবিদগণ এই 'বা'-কে অতিরিক্ত অক্ষর হিসেবে গণ্য করেন, যা নেতিবাচক প্রশ্নের পর কেবল জোর বাড়াতেই যুক্ত হয়। অর্থে কিছু বদলায় না, ওজনে বদলায়। দাবিটি এই নয় যে আল্লাহ বান্দাকে সাহায্য করেন; দাবিটি হলো, বান্দার যা কিছু দরকার তার পুরোটাই তিনি একাই।"
          },
          {
            "en": "Then abdah, His servant, singular and possessed. Ibn Kathir notes that some read the word in the plural, His servants. The mufassirun divide accordingly over who is meant: the Prophet ﷺ in particular, which is how the app's English glosses it, or any servant of Allah at all. Ibn Kathir keeps both open by defining the servant as the one who worships Him and relies upon Him, which is a description rather than a name.",
            "bn": "এরপর 'আবদাহু' — তাঁর বান্দা, একবচন ও সম্বন্ধযুক্ত। ইবনে কাসীর উল্লেখ করেন, কেউ কেউ শব্দটি বহুবচনে পড়েন — 'ইবাদাহু', তাঁর বান্দারা। সেই অনুযায়ী মুফাসসিরগণ ভাগ হয়ে যান কাকে বোঝানো হয়েছে তা নিয়ে: বিশেষভাবে নবী ﷺ — অ্যাপের ইংরেজি অনুবাদ যেভাবে ব্যাখ্যা করে — নাকি আল্লাহর যেকোনো বান্দা। ইবনে কাসীর দুটোই খোলা রাখেন, বান্দাকে সংজ্ঞায়িত করে এভাবে: যে তাঁর ইবাদত করে ও তাঁর উপর ভরসা করে। এটি নাম নয়, বর্ণনা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fear Being Manufactured",
          "bn": "যে ভয় তৈরি করা হচ্ছিল"
        },
        "p": [
          {
            "en": "The next clause turns and addresses the Prophet ﷺ directly: and they threaten you with those besides Him. The verb is yukhawwifunaka, a form that means to make someone afraid, not merely to be frightening but to work at frightening. Ibn Kathir explains the reference plainly, that the idolaters tried to scare the Messenger of Allah ﷺ with their idols and with the gods they called upon besides Allah.",
            "bn": "পরের অংশটি ঘুরে সরাসরি নবী ﷺ-কে সম্বোধন করে: আর তারা তোমাকে তাঁকে ছাড়া অন্যদের ভয় দেখায়। ক্রিয়াপদটি 'ইউখাউয়িফূনাকা' — এমন এক গঠন যার অর্থ কাউকে ভীত করা; নিছক ভীতিকর হওয়া নয়, বরং ভয় ধরানোর জন্য পরিশ্রম করা। ইবনে কাসীর প্রসঙ্গটি স্পষ্ট করে বলেন, মুশরিকরা আল্লাহর রাসূল ﷺ-কে তাদের মূর্তি এবং আল্লাহ ছাড়া যেসব উপাস্যকে তারা ডাকত সেগুলোর ভয় দেখাতে চাইত।"
          },
          {
            "en": "Read that against the opening question and the two halves lock together. One party is offering a steady supply of fear; the verse asks whether the Supplier of everything is not already enough. Notice also that the sentence never argues that the idols are harmless in the abstract. It reframes the transaction instead: the question of who can hurt you is settled by first settling the question of who is sufficient for you.",
            "bn": "শুরুর প্রশ্নটির পাশে রেখে পড়লে দুই অংশ একসঙ্গে আটকে যায়। এক পক্ষ ভয়ের নিরবচ্ছিন্ন জোগান দিচ্ছে; আয়াতটি জিজ্ঞেস করে, সবকিছুর জোগানদাতা কি ইতিমধ্যেই যথেষ্ট নন? আরও লক্ষ করুন, বাক্যটি কোথাও বিমূর্তভাবে যুক্তি দেয় না যে মূর্তিগুলো ক্ষতি করতে অক্ষম। বরং এটি প্রশ্নের কাঠামোই বদলে দেয়: কে তোমার ক্ষতি করতে পারে সেই প্রশ্নের মীমাংসা হয় আগে এই প্রশ্নের মীমাংসা করে যে কে তোমার জন্য যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Answered Two Verses Later",
          "bn": "দুই আয়াত পরে উত্তর"
        },
        "p": [
          {
            "en": "The surah does not leave the question hanging. 39:38 reports that if these same people were asked who created the heavens and the earth they would say Allah, and the Prophet ﷺ is then told to put the follow-up: if Allah intended me harm, could the things you invoke remove it, or if He intended me mercy, could they withhold it? Their own admission takes apart their own threat.",
            "bn": "সূরাটি প্রশ্নটিকে ঝুলিয়ে রাখে না। 39:38 জানায়, এই লোকদেরই যদি জিজ্ঞেস করা হয় আসমান ও যমীন কে সৃষ্টি করেছেন, তারা বলবে আল্লাহ; এরপর নবী ﷺ-কে বলা হয় পরের প্রশ্নটি রাখতে: আল্লাহ যদি আমার ক্ষতি চান, তোমরা যাদের ডাকো তারা কি তা সরাতে পারবে; আর তিনি যদি আমার প্রতি রহমত চান, তারা কি তা ঠেকাতে পারবে? তাদের নিজেদের স্বীকারোক্তিই তাদের নিজেদের হুমকি ভেঙে দেয়।"
          },
          {
            "en": "Then the answer is given as a command to speak it: qul hasbiya Allah, sufficient for me is Allah, upon Him rely those who rely. The question of 39:36 becomes a sentence on the believer's own tongue two verses later. 65:3 states the same thing as a standing rule rather than a reply, that whoever relies upon Allah, He is sufficient for him. Sufficiency is promised to the reliance, not to the absence of threats.",
            "bn": "এরপর উত্তরটি আসে সেটি উচ্চারণ করার আদেশ হিসেবে: 'কুল হাসবিয়াল্লাহ' — বলো, আমার জন্য আল্লাহই যথেষ্ট; নির্ভরকারীরা তাঁর উপরই নির্ভর করে। 39:36-এর প্রশ্নটি দুই আয়াত পরেই মুমিনের নিজের জিহ্বার একটি বাক্যে পরিণত হয়। 65:3 একই কথা বলে জবাব হিসেবে নয়, স্থায়ী নীতি হিসেবে: যে আল্লাহর উপর ভরসা করে, তিনিই তার জন্য যথেষ্ট। যথেষ্টতার প্রতিশ্রুতি ভরসার সঙ্গে বাঁধা, হুমকির অনুপস্থিতির সঙ্গে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Sufficiency Tied to Servanthood",
          "bn": "যথেষ্টতা বান্দা হওয়ার সঙ্গে বাঁধা"
        },
        "p": [
          {
            "en": "The verse does not say sufficient for a person; it says sufficient for His servant. The sufficiency is stated inside a relation, and the relation is servitude. Ibn Kathir cites under this verse the counsel narrated from Ibn Abbas (RA), in which the Prophet ﷺ said: be mindful of Allah and He will protect you, be mindful of Allah and you will find Him before you. Guarding the relationship is what puts a person inside the promise.",
            "bn": "আয়াতটি বলে না 'একজন মানুষের জন্য যথেষ্ট'; বলে 'তাঁর বান্দার জন্য যথেষ্ট'। যথেষ্টতার কথাটি একটি সম্পর্কের ভেতরে বলা হয়েছে, আর সম্পর্কটি হলো দাসত্ব। ইবনে কাসীর এই আয়াতের নিচে ইবনে আব্বাস (রাঃ) থেকে বর্ণিত সেই উপদেশটি উল্লেখ করেন, যেখানে নবী ﷺ বলেন: আল্লাহকে হেফাযত করো, তিনি তোমাকে হেফাযত করবেন; আল্লাহকে হেফাযত করো, তুমি তাঁকে তোমার সামনে পাবে। সম্পর্কটি রক্ষা করাই মানুষকে প্রতিশ্রুতির ভেতরে ঢোকায়।"
          },
          {
            "en": "The verse closes on its hardest clause, and whoever Allah leaves astray, for him there is no guide, which is word for word how 39:23 ends earlier in the same surah. Lived, the whole thing is small enough to carry. When someone is working on your fear, do not spend the day arguing the threat down; put the verse's own question back to yourself, and then say what 39:38 tells you to say.",
            "bn": "আয়াতটি শেষ হয় তার কঠিনতম বাক্যাংশে — আর আল্লাহ যাকে পথহারা করেন, তার কোনো পথপ্রদর্শক নেই — যা হুবহু সেই শব্দেই একই সূরার আগের অংশে 39:23-এর সমাপ্তি। জীবনে প্রয়োগের দিক থেকে গোটা বিষয়টি বহন করার মতোই ছোট। কেউ যখন আপনার ভয় নিয়ে কাজ করছে, সারাদিন হুমকিটি খণ্ডন করে কাটাবেন না; আয়াতের নিজের প্রশ্নটি নিজেকেই ফিরিয়ে জিজ্ঞেস করুন, তারপর 39:38 যা বলতে বলে তা-ই বলুন।"
          }
        ]
      }
    ]
  },
  "39:53": {
    "sections": [
      {
        "h": {
          "en": "He Still Says My Servants",
          "bn": "তিনি এখনো বলেন 'আমার বান্দারা'"
        },
        "p": [
          {
            "en": "The verse begins with an instruction to announce it: qul, say. Then the address, ya 'ibadiya, O My servants. The people being addressed are then identified as alladhina asrafu 'ala anfusihim, those who have been excessive against themselves. Israf is going past the limit, spending beyond what one has. Yet the relationship word comes first. They are still called His servants before their record is mentioned.",
            "bn": "আয়াতটি শুরু হয় ঘোষণার নির্দেশ দিয়ে: কুল — বলে দিন। এরপর সম্বোধন: ইয়া 'ইবাদিয়া — হে আমার বান্দারা। যাদের সম্বোধন করা হচ্ছে তাদের পরিচয় দেওয়া হয়েছে 'আল্লাযীনা আসরাফূ 'আলা আনফুসিহিম' — যারা নিজেদের ওপর সীমা ছাড়িয়েছে। 'ইসরাফ' মানে সীমা পেরিয়ে যাওয়া, সামর্থ্যের বাইরে ব্যয় করা। তবু সম্পর্কবাচক শব্দটিই আগে আসে। তাদের আমলনামার কথা ওঠার আগেই তাদের বলা হয় তাঁর বান্দা।"
          },
          {
            "en": "The prohibition that follows is qunut, not the ordinary word for sadness. La taqnatu min rahmatillah: do not despair of the mercy of Allah, where qunut is the settled conviction that there is no way back. Then the reason: innallaha yaghfirudh-dhunuba jami'a, Allah forgives sins altogether. The word jami'an leaves no category outside. The verse closes with two names, al-Ghafur and ar-Rahim, forgiveness and mercy stated as attributes rather than as a one-time concession.",
            "bn": "এরপরের নিষেধাজ্ঞায় ব্যবহৃত শব্দ 'কুনূত', দুঃখ বোঝানোর সাধারণ শব্দ নয়। লা তাকনাতূ মিন রাহমাতিল্লাহ — আল্লাহর রহমত থেকে নিরাশ হয়ো না; এখানে 'কুনূত' মানে এই স্থির বিশ্বাস যে ফেরার আর কোনো পথ নেই। এরপর কারণ: ইন্নাল্লাহা ইয়াগফিরুয্‌ যুনূবা জামী'আ — আল্লাহ সব পাপই ক্ষমা করেন। 'জামী'আন' শব্দটি কোনো শ্রেণিকেই বাইরে রাখে না। আয়াত শেষ হয় দুটি নামে — আল-গাফূর ও আর-রাহীম; ক্ষমা ও দয়াকে এককালীন ছাড় হিসেবে নয়, গুণ হিসেবেই ঘোষণা করা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verses That Follow",
          "bn": "পরের আয়াতগুলো"
        },
        "p": [
          {
            "en": "This verse is almost never quoted with its continuation, and the continuation is what keeps it accurate. Verse 39:54 commands: and turn back to your Lord and submit to Him before the punishment comes upon you, after which you will not be helped. Verse 39:55 adds: and follow the best of what was revealed to you from your Lord. The offer of complete forgiveness is followed immediately by the instruction to come back.",
            "bn": "এই আয়াতটি প্রায় কখনোই এর পরবর্তী অংশসহ উদ্ধৃত হয় না, অথচ সেই পরবর্তী অংশই একে যথার্থ রাখে। 39:54 আয়াত আদেশ দেয়: তোমরা তোমাদের রবের দিকে ফিরে এসো এবং তাঁর কাছে আত্মসমর্পণ করো, সেই শাস্তি আসার আগেই — যার পরে তোমাদের সাহায্য করা হবে না। 39:55 যোগ করে: আর অনুসরণ করো তোমাদের রবের পক্ষ থেকে নাযিলকৃত সর্বোত্তম বাণীর। পূর্ণ ক্ষমার প্রস্তাবের পরপরই আসে ফিরে আসার নির্দেশ।"
          },
          {
            "en": "The commentators are near-unanimous that this is how the promise is to be understood: forgiveness of all sins for the one who repents. That reading is required by the rest of the Quran, since 4:48 states that Allah does not forgive that partners be associated with Him while He forgives what is less than that for whom He wills, and shirk is forgiven when a person turns from it. The verse opens a door; it does not remove the need to walk through it.",
            "bn": "মুফাসসিরগণ প্রায় সর্বসম্মতভাবে বলেন, প্রতিশ্রুতিটি এভাবেই বুঝতে হবে: যে তওবা করে তার সব পাপের ক্ষমা। কুরআনের বাকি অংশই এই পাঠকে আবশ্যক করে, কারণ 4:48 বলে যে আল্লাহ তাঁর সঙ্গে শরীক করাকে ক্ষমা করেন না, তবে এর চেয়ে কম যা তা যাকে চান ক্ষমা করেন — আর মানুষ শিরক থেকে ফিরে এলে তা ক্ষমা করা হয়। আয়াতটি দরজা খুলে দেয়; সেই দরজা দিয়ে হেঁটে যাওয়ার প্রয়োজনটুকু তুলে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent Down for the Worst Cases",
          "bn": "সবচেয়ে ভারী মামলার জন্য নাযিল"
        },
        "p": [
          {
            "en": "The commentators relate that this verse came down concerning people whose past was as bad as a past can be. Among the reports transmitted in the tafsir literature is one connected with Wahshi ibn Harb (RA), the man who killed Hamzah (RA) at Uhud, who feared that repentance was closed to someone like him. Reports of this kind vary in their chains, but they agree on the situation the verse addresses.",
            "bn": "মুফাসসিরগণ বর্ণনা করেন, এই আয়াত নাযিল হয়েছিল এমন মানুষদের প্রসঙ্গে যাদের অতীত যতটা খারাপ হওয়া সম্ভব ততটাই খারাপ ছিল। তাফসীর সাহিত্যে বর্ণিত বিবরণগুলোর মধ্যে একটি যুক্ত ওয়াহশী ইবনে হারব (রাঃ)-এর সঙ্গে, যিনি উহুদে হামযা (রাঃ)-কে হত্যা করেছিলেন এবং আশঙ্কা করছিলেন যে তাঁর মতো কারও জন্য তওবার দরজা বন্ধ। এ ধরনের বর্ণনাগুলোর সনদে ভিন্নতা আছে, তবে আয়াতটি কোন পরিস্থিতির জবাব দিচ্ছে সে বিষয়ে সেগুলো একমত।"
          },
          {
            "en": "That setting explains the tone. The verse is not addressed to people with a manageable list of small faults. It is addressed to those who have concluded that they are beyond the reach of forgiveness, and it is phrased so that the conclusion itself is what is forbidden. Despair is treated in this passage as a serious error about Allah rather than as a natural consequence of a bad record.",
            "bn": "এই প্রেক্ষাপটই আয়াতের সুরটি ব্যাখ্যা করে। এটি এমন মানুষদের উদ্দেশে নয়, যাদের ছোটখাটো ত্রুটির তালিকা সামলানোর মতো। এটি তাদের উদ্দেশে, যারা সিদ্ধান্তে পৌঁছে গেছে যে ক্ষমার নাগালের বাইরে চলে গেছে; আর ভাষাটি এমনভাবে সাজানো যে সেই সিদ্ধান্তটিই নিষিদ্ধ করা হচ্ছে। এই অংশে নিরাশাকে খারাপ আমলনামার স্বাভাবিক পরিণতি নয়, বরং আল্লাহ সম্পর্কে একটি গুরুতর ভুল হিসেবে দেখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man Who Killed a Hundred",
          "bn": "একশো জনকে হত্যাকারী"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both record the account of a man from an earlier nation who had killed ninety-nine people and asked whether repentance was possible. A worshipper told him it was not, and the man killed him too, completing a hundred. He then asked a scholar, who told him that nobody stands between him and repentance, and directed him to a land where Allah is worshipped, telling him not to return to his own.",
            "bn": "বুখারী ও মুসলিম উভয়েই পূর্ববর্তী এক জাতির সেই ব্যক্তির ঘটনা বর্ণনা করেন, যে নিরানব্বই জনকে হত্যা করে জিজ্ঞেস করেছিল তার তওবা সম্ভব কি না। এক ইবাদতগুজার তাকে বলে, না; সে তাকেও হত্যা করে সংখ্যাটি একশোতে পূর্ণ করে। এরপর সে এক আলিমকে জিজ্ঞেস করে, যিনি তাকে বলেন যে তার ও তার তওবার মাঝখানে কেউ দাঁড়াতে পারে না, এবং তাকে এমন এক জনপদের দিকে যেতে বলেন যেখানে আল্লাহর ইবাদত হয়, আর নিজের এলাকায় না ফিরতে বলেন।"
          },
          {
            "en": "He died on the road before arriving, and the narration reports that he was judged to belong to the people of mercy because he had set out. Two things in that account are usually missed. The first is that the scholar's answer included a change of place and company, not only a feeling of regret. The second is that the man was still moving when he died, and that was enough.",
            "bn": "পৌঁছানোর আগেই পথে তার মৃত্যু হয়, আর বর্ণনায় এসেছে যে সে রহমতের অধিকারীদের অন্তর্ভুক্ত বলে ফয়সালা হয় — কারণ সে রওনা দিয়েছিল। এই ঘটনার দুটি দিক সাধারণত চোখ এড়িয়ে যায়। প্রথমটি হলো, আলিমের পরামর্শে কেবল অনুশোচনার অনুভূতি ছিল না, ছিল স্থান ও সঙ্গ বদলানোর কথাও। দ্বিতীয়টি হলো, মৃত্যুর সময়ও সে চলার পথেই ছিল — আর সেটুকুই যথেষ্ট হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "What Repentance Requires",
          "bn": "তওবা যা দাবি করে"
        },
        "p": [
          {
            "en": "The classical scholars describe tawbah in plain terms: stopping the act, regretting it, and resolving not to return to it; and where a person's right has been violated, restoring it or seeking their pardon. Nothing in that list is designed to be crushing. It is meant to be doable, which is why it does not include feeling a certain intensity of remorse or being certain that one will never fall again.",
            "bn": "ধ্রুপদী আলিমগণ তওবাকে সহজ ভাষায় বর্ণনা করেন: কাজটি বন্ধ করা, তার জন্য অনুতপ্ত হওয়া, এবং তাতে না ফেরার সংকল্প করা; আর যেখানে কারও অধিকার লঙ্ঘিত হয়েছে, তা ফিরিয়ে দেওয়া বা তার কাছে ক্ষমা চাওয়া। এই তালিকার কোনো কিছুই মানুষকে পিষে ফেলার জন্য নয়। এটি করার মতোই রাখা হয়েছে — সে কারণেই এতে নেই কোনো নির্দিষ্ট মাত্রার অনুশোচনা অনুভব করা, কিংবা আর কখনো পড়ে যাব না এমন নিশ্চয়তা।"
          },
          {
            "en": "At-Tirmidhi reports a hadith qudsi in which Allah says that were a servant's sins to reach the clouds of the sky and he then sought forgiveness, He would forgive him. Alongside this, honesty requires saying that forgiveness of sin is not the same as removal of consequences. A debt still has to be paid, a harm still has to be repaired, and a legal or medical consequence does not disappear. What ends is the standing before Allah.",
            "bn": "তিরমিযী একটি হাদীসে কুদসী বর্ণনা করেন, যেখানে আল্লাহ বলেন — বান্দার পাপ যদি আকাশের মেঘ পর্যন্ত পৌঁছে যায় এবং এরপর সে ক্ষমা চায়, তবে তিনি তাকে ক্ষমা করে দেবেন। এর পাশাপাশি সততার দাবি হলো এ কথাও বলা যে পাপের ক্ষমা আর পরিণতির অবসান এক নয়। ঋণ পরিশোধ করতেই হবে, ক্ষতি মেরামত করতেই হবে, আর আইনি বা শারীরিক পরিণাম আপনাআপনি মিলিয়ে যায় না। যা শেষ হয়ে যায় তা হলো আল্লাহর সামনে জবাবদিহির সেই দায়।"
          }
        ]
      },
      {
        "h": {
          "en": "For Someone Who Cannot Start",
          "bn": "যে শুরু করতে পারছে না"
        },
        "p": [
          {
            "en": "Many people who know this verse still cannot use it, because shame is not argued away by information. The practical route reported from the scholars is usually the same as the one given to the man who killed a hundred: change the surroundings that make the sin easy, find people who are going where you want to go, and begin with the obligations rather than waiting to feel worthy of them.",
            "bn": "যারা এই আয়াতটি জানেন, তাঁদের অনেকেই তবু একে কাজে লাগাতে পারেন না — কারণ লজ্জা তথ্য দিয়ে দূর হয় না। আলিমদের থেকে বর্ণিত ব্যবহারিক পথটি সাধারণত সেই একই, যা একশো জনকে হত্যাকারীকে দেওয়া হয়েছিল: যে পরিবেশ পাপকে সহজ করে তা বদলান, এমন মানুষদের খুঁজুন যারা আপনি যেদিকে যেতে চান সেদিকেই যাচ্ছেন, আর নিজেকে যোগ্য মনে হওয়ার অপেক্ষা না করে ফরযগুলো দিয়েই শুরু করুন।"
          },
          {
            "en": "It is also worth being careful with the promise. This verse does not say that a person will feel forgiven, that the memory will stop returning, or that the past will become weightless. It says that Allah forgives all sins, and that despairing of that is itself forbidden. For a person who has been carrying something for years, the instruction is narrow and doable: stop concluding the case against yourself, and turn back.",
            "bn": "প্রতিশ্রুতিটি নিয়েও সতর্ক থাকা দরকার। এই আয়াত বলেনি যে মানুষ ক্ষমাপ্রাপ্ত বলে অনুভব করবে, কিংবা স্মৃতিটি আর ফিরে আসবে না, কিংবা অতীত ভারহীন হয়ে যাবে। এটি বলে যে আল্লাহ সব পাপ ক্ষমা করেন, আর সে বিষয়ে নিরাশ হওয়াটাই নিষিদ্ধ। বছরের পর বছর কিছু বয়ে বেড়ানো মানুষের জন্য নির্দেশটি সংকীর্ণ ও করার মতো: নিজের বিরুদ্ধে রায় লিখে ফেলা বন্ধ করুন, আর ফিরে আসুন।"
          }
        ]
      }
    ]
  }
});
