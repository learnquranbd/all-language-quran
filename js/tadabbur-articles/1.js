/**
 * Tadabbur long-form articles — surah 1.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "1:1-5": {
    "sections": [
      {
        "h": {
          "en": "The Surah Prayer Is Built On",
          "bn": "যে সূরার ওপর নামায দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "Al-Fatihah, the Opening, carries more names in the tradition than any other surah: Umm al-Kitab, the Mother of the Book, and as-Sab' al-Mathani, the seven oft-repeated, the title 15:87 gives it. Al-Bukhari relates that the Prophet ﷺ called it the greatest surah in the Quran. And its place is unlike any other: al-Bukhari and Muslim relate that there is no prayer for the one who does not recite the Opening of the Book.",
            "bn": "আল-ফাতিহা — সূচনা — ঐতিহ্যে অন্য যেকোনো সূরার চেয়ে বেশি নাম বহন করে: উম্মুল কিতাব, কিতাবের জননী, এবং আস-সাবউল মাসানী, বারবার পঠিত সাতটি — যে উপাধি 15:87 এটিকে দেয়। আল-বুখারী বর্ণনা করেন, নবী ﷺ একে কুরআনের সর্বশ্রেষ্ঠ সূরা বলেছেন। আর এর অবস্থানও অনন্য: আল-বুখারী ও মুসলিম বর্ণনা করেন, যে ব্যক্তি কিতাবের সূচনা তিলাওয়াত করে না তার কোনো নামায নেই।"
          },
          {
            "en": "A Muslim who prays the five daily prayers recites it at least seventeen times a day. Repetition on that scale is a teacher's device: whatever else is forgotten, this must not be. The first five verses, the portion before the request for guidance in 1:6-7, do one thing — they establish who Allah is and where we stand before we ask Him for anything.",
            "bn": "যে মুসলিম পাঁচ ওয়াক্ত নামায পড়েন, তিনি দিনে অন্তত সতেরো বার এটি তিলাওয়াত করেন। এই মাত্রার পুনরাবৃত্তি একজন শিক্ষকের কৌশল: আর সব ভুলে গেলেও এটি ভোলা চলবে না। প্রথম পাঁচটি আয়াত — হিদায়াতের আবেদন 1:6-7 শুরুর আগের অংশটুকু — একটিই কাজ করে: কিছু চাওয়ার আগে প্রতিষ্ঠিত করে আল্লাহ কে, আর আমরা কোথায় দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Beginning in His Name",
          "bn": "তাঁর নামে শুরু"
        },
        "p": [
          {
            "en": "Bismillah ar-Rahman ar-Rahim places every beginning under His name. The scholars genuinely differ over whether the basmalah is the first verse of al-Fatihah or a separate verse of blessing placed before it, and both positions are held by great authorities; the difference shows in whether an imam recites it aloud. What no one disputes is what it does: an act begun in His name is claimed for Him.",
            "bn": "বিসমিল্লাহির রাহমানির রাহীম প্রতিটি সূচনাকে তাঁর নামের অধীনে রাখে। বাসমালা আল-ফাতিহার প্রথম আয়াত, নাকি এর আগে স্থাপিত বরকতের পৃথক একটি আয়াত — এ নিয়ে আলিমগণের মধ্যে প্রকৃত মতভেদ আছে, এবং উভয় অবস্থানই বড় ইমামদের গ্রহণ করা; পার্থক্যটি দেখা যায় ইমাম এটি সরবে পড়বেন কি না তাতে। যা নিয়ে কারও দ্বিমত নেই তা হলো এর কাজ: তাঁর নামে শুরু করা কাজ তাঁরই জন্য দাবি করা হয়।"
          },
          {
            "en": "Ar-Rahman and ar-Rahim both come from the root of rahmah, mercy. The commentators distinguish them: ar-Rahman describes mercy as His very nature, vast and reaching everything, while ar-Rahim describes mercy in action, bestowed especially on the believers. Before the surah says one word about obligation or judgment, His mercy has already been named twice — and it will be named twice more.",
            "bn": "আর-রাহমান ও আর-রাহীম উভয়ই রহমত ধাতু থেকে। মুফাসসিরগণ পার্থক্য করেন: আর-রাহমান বর্ণনা করে রহমতকে তাঁর স্বভাব হিসেবে — বিশাল, সবকিছুতে পৌঁছানো; আর আর-রাহীম বর্ণনা করে কর্মে প্রকাশিত রহমত, বিশেষভাবে মুমিনদের প্রতি প্রদত্ত। সূরাটি দায়িত্ব বা বিচার নিয়ে একটি শব্দ বলার আগেই তাঁর রহমতের নাম দুবার নেওয়া হয়ে গেছে — এবং আরও দুবার নেওয়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Lord of All Worlds",
          "bn": "সকল জগতের রব"
        },
        "p": [
          {
            "en": "Al-hamdu lillah. Hamd is wider than thanks: thanks answers a favour received, while hamd praises the one praised for what he is, favour or no favour. The definite article makes it total — all praise, whoever utters it and whatever prompts it, belongs in truth to Allah. The verse does not command us to praise; it states that praise is His, and the reciter simply joins a fact already in place.",
            "bn": "আলহামদু লিল্লাহ। হামদ ধন্যবাদের চেয়ে ব্যাপক: ধন্যবাদ পাওয়া অনুগ্রহের জবাব, আর হামদ প্রশংসিত সত্তার প্রশংসা করে তিনি যা, তার জন্যই — অনুগ্রহ থাকুক বা না থাকুক। নির্দিষ্টতাসূচক আল শব্দটি একে সর্বব্যাপী করে — সব প্রশংসা, যে-ই উচ্চারণ করুক আর যে কারণেই করুক, প্রকৃতপক্ষে আল্লাহরই। আয়াতটি আমাদের প্রশংসা করতে আদেশ করে না; এটি ঘোষণা করে প্রশংসা তাঁরই — পাঠক কেবল আগে থেকে প্রতিষ্ঠিত একটি সত্যে যোগ দেয়।"
          },
          {
            "en": "Rabb, Lord, gathers meanings no single English word holds: owner, master, sustainer, and the one who raises something stage by stage toward its completion. Al-'alamin, the worlds, is every order of created being — mankind, jinn, angels, and whatever we have no name for. To call Him Rabb al-'alamin is to say that everything, everywhere, is being owned, fed and carried toward its purpose by Him alone.",
            "bn": "রব শব্দটি এমন সব অর্থ একত্র করে যা অন্য কোনো একক শব্দে ধরে না: মালিক, কর্তা, প্রতিপালক, এবং যিনি কোনো কিছুকে ধাপে ধাপে তার পূর্ণতার দিকে গড়ে তোলেন। আল-আলামীন — জগতসমূহ — সৃষ্টির প্রতিটি স্তর: মানুষ, জিন, ফেরেশতা, আর যার নাম আমরা জানি না তাও। তাঁকে রাব্বুল আলামীন বলা মানে বলা: সবকিছু, সর্বত্র, একমাত্র তাঁরই মালিকানায়, তাঁরই প্রতিপালনে, তাঁরই হাতে নিজ উদ্দেশ্যের দিকে বাহিত হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy Beside the Day of Recompense",
          "bn": "রহমতের পাশে প্রতিদান দিবস"
        },
        "p": [
          {
            "en": "Between Lord of the worlds and Master of the Day of Recompense, the surah repeats ar-Rahman ar-Rahim. The order matters. Sovereignty could terrify; so mercy is set before judgment, and judgment is read through it. The canonical readings recite the next word both as Maalik, owner, and Malik, king, of the Day of Recompense — both transmitted, both true of Him: on that Day He owns everything and rules everything, and no one else owns or rules anything at all.",
            "bn": "জগতসমূহের রব এবং প্রতিদান দিবসের অধিপতির মাঝখানে সূরাটি আবার বলে আর-রাহমান আর-রাহীম। এই ক্রমটি গুরুত্বপূর্ণ। সার্বভৌমত্ব ভীতিকর হতে পারত; তাই রহমতকে বিচারের আগে বসানো হয়েছে, আর বিচারকে পড়া হয় রহমতের ভেতর দিয়ে। স্বীকৃত কিরাআতসমূহে পরের শব্দটি দুইভাবে পঠিত — মা-লিক (দীর্ঘ স্বরে) অর্থাৎ অধিকারী, এবং মালিক অর্থাৎ বাদশাহ, প্রতিদান দিবসের — দুটিই বর্ণিত, দুটিই তাঁর ক্ষেত্রে সত্য: সেদিন সবকিছুর মালিক তিনি, সবকিছুর শাসকও তিনি, আর অন্য কেউ কিছুরই মালিক বা শাসক নয়।"
          },
          {
            "en": "Yawm ad-din, the Day of Recompense, is named by outcome: the day deeds are paid. Placing it in the surah recited in every prayer keeps accountability daily rather than distant. But it stands surrounded by mercy — mercy named twice before it — so the believer approaches that Day with the balance the surah itself teaches: real hope, real accountability, neither one allowed to erase the other.",
            "bn": "ইয়াওমুদ্দীন — প্রতিদান দিবস — নামকরণ হয়েছে পরিণতি দিয়ে: যেদিন আমলের প্রতিদান দেওয়া হয়। প্রতিটি নামাযে পঠিত সূরায় একে স্থাপন করা জবাবদিহিতাকে দূরের বিষয় না রেখে প্রতিদিনের বিষয় রাখে। কিন্তু এটি দাঁড়িয়ে আছে রহমতে ঘেরা হয়ে — এর আগে দুবার রহমতের নাম এসেছে — তাই মুমিন সেই দিনের দিকে এগোয় সূরাটিরই শেখানো ভারসাম্য নিয়ে: সত্যিকারের আশা, সত্যিকারের জবাবদিহিতা, কোনোটিকেই অন্যটিকে মুছে ফেলতে দেওয়া হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Conversation, Not a Recitation",
          "bn": "আবৃত্তি নয়, কথোপকথন"
        },
        "p": [
          {
            "en": "Muslim relates the hadith qudsi: Allah says, I have divided the prayer between Myself and My servant in two halves, and My servant shall have what he asks. When the servant says al-hamdu lillahi rabbil-'alamin, Allah says: My servant has praised Me. Verse by verse the answers continue — My servant has extolled Me, My servant has glorified Me — until the dividing line: this is between Me and My servant.",
            "bn": "মুসলিম হাদীসে কুদসী বর্ণনা করেন: আল্লাহ বলেন, আমি নামাযকে আমার ও আমার বান্দার মধ্যে দুই ভাগে ভাগ করেছি, আর আমার বান্দা যা চায় তা তারই। বান্দা যখন বলে আলহামদু লিল্লাহি রাব্বিল আলামীন, আল্লাহ বলেন: আমার বান্দা আমার প্রশংসা করেছে। আয়াতে আয়াতে জবাব চলতে থাকে — আমার বান্দা আমার গুণগান করেছে, আমার বান্দা আমার মহিমা ঘোষণা করেছে — যতক্ষণ না আসে বিভাজনরেখা: এটি আমার ও আমার বান্দার মধ্যকার।"
          },
          {
            "en": "The dividing line is 1:5, and exactly there the grammar turns. The first verses speak about Allah in the third person — He, His. At iyyaka na'budu the surah turns and speaks to Him: You alone we worship. The commentators note the shift: praise brings the servant, step by step, from talking about Allah into standing before Him. Al-Fatihah does not merely describe an audience with the Lord; it stages one.",
            "bn": "সেই বিভাজনরেখা 1:5। আর ঠিক সেখানেই ব্যাকরণ মোড় নেয়। প্রথম আয়াতগুলো আল্লাহ সম্পর্কে বলে তৃতীয় পুরুষে — তিনি, তাঁর। ইয়্যাকা নাবুদুতে এসে সূরা ঘুরে দাঁড়িয়ে তাঁকে সম্বোধন করে: আমরা একমাত্র তোমারই ইবাদত করি। মুফাসসিরগণ এই মোড়টি লক্ষ করেন: প্রশংসা বান্দাকে ধাপে ধাপে আল্লাহ সম্পর্কে কথা বলা থেকে তাঁর সামনে দাঁড়ানোয় নিয়ে আসে। আল-ফাতিহা রবের দরবারে হাজিরার কেবল বর্ণনা দেয় না; সে হাজিরা ঘটিয়েই দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship and Help in One Breath",
          "bn": "এক নিঃশ্বাসে ইবাদত ও সাহায্য"
        },
        "p": [
          {
            "en": "Iyyaka na'budu wa iyyaka nasta'in. Arabic normally puts the verb first; here the object You is moved ahead, and the fronting means only: You alone we worship, You alone we ask for help. Worship comes before asking — we do not approach Him as customers — yet asking follows immediately, because worship itself cannot be performed without His help. Each half of the sentence leans on the other.",
            "bn": "ইয়্যাকা নাবুদু ওয়া ইয়্যাকা নাসতাঈন। আরবিতে সাধারণত ক্রিয়া আগে বসে; এখানে কর্ম তোমাকে সামনে আনা হয়েছে, আর এই এগিয়ে আনার অর্থ: একমাত্র — একমাত্র তোমারই ইবাদত করি, একমাত্র তোমার কাছেই সাহায্য চাই। ইবাদত চাওয়ার আগে আসে — আমরা তাঁর কাছে ক্রেতার মতো যাই না — অথচ চাওয়া আসে সঙ্গে সঙ্গেই, কারণ ইবাদত নিজেই তাঁর সাহায্য ছাড়া সম্পন্ন হয় না। বাক্যের দুই অর্ধেক পরস্পরের ওপর ভর করে।"
          },
          {
            "en": "Notice also the plural. Not I worship, but we — the single worshipper prays as part of a community stretching across the world and back through the centuries. This is the posture the opening five verses build: know Him, praise Him, remember His mercy and His Day, then bind worship and dependence together, and only then, in 1:6-7, open your mouth to ask. That order is itself the lesson.",
            "bn": "বহুবচনটিও লক্ষ করুন। আমি ইবাদত করি নয়, আমরা — একক মুসল্লি নামায পড়ে এমন এক উম্মাহর অংশ হয়ে যা পৃথিবীজুড়ে বিস্তৃত ও শতাব্দীর পর শতাব্দী পেছনে প্রসারিত। প্রথম পাঁচ আয়াত এই ভঙ্গিটিই গড়ে: তাঁকে জানুন, তাঁর প্রশংসা করুন, তাঁর রহমত ও তাঁর দিবস স্মরণ করুন, তারপর ইবাদত ও নির্ভরতাকে একসঙ্গে বাঁধুন, আর কেবল তখনই, 1:6-7 পৌঁছে, চাওয়ার জন্য মুখ খুলুন। এই ক্রমটিই শিক্ষা।"
          }
        ]
      }
    ]
  },
  "1:6": {
    "sections": [
      {
        "h": {
          "en": "The Turn in the Surah",
          "bn": "সূরার ভেতরের মোড়"
        },
        "p": [
          {
            "en": "Al-Fatihah does not begin by asking for anything. Its opening verses name Allah, praise Him as Lord of the worlds, and describe His mercy and His ownership of the Day of Recompense. Then 1:5 turns the whole surah around: it is You we worship and You we ask for help. Speech about Allah becomes speech to Allah. Only after that pledge is anything requested, and 1:6 is the request that the pledge was leading to.",
            "bn": "সূরা আল-ফাতিহা কোনো চাওয়া দিয়ে শুরু হয় না। এর শুরুর আয়াতগুলো আল্লাহর নাম নেয়, তাঁকে জগৎসমূহের প্রতিপালক বলে প্রশংসা করে, আর তাঁর রহমত ও বিচার দিবসের মালিকানার কথা বলে। এরপর 1:5 এসে গোটা সূরার মুখ ঘুরিয়ে দেয়: আমরা কেবল তোমারই ইবাদত করি এবং কেবল তোমারই সাহায্য চাই। আল্লাহ সম্পর্কে বলা কথা হয়ে যায় আল্লাহকে বলা কথা। সেই অঙ্গীকারের পরেই কেবল কিছু চাওয়া হয়, আর 1:6 হলো সেই চাওয়া যার দিকে অঙ্গীকারটি এগোচ্ছিল।"
          },
          {
            "en": "Of everything a human being could ask for, this is what is asked. Not wealth, not health, not safety, not victory over enemies. Guide us to the straight path. The surah is seven verses long; this request takes one of them and the verse after it, 1:7, is spent describing the path rather than moving on to a second request. The proportions of the surah are themselves an argument about what matters most.",
            "bn": "মানুষ যা কিছু চাইতে পারে, তার সবকিছুর মধ্য থেকে চাওয়া হয়েছে এইটুকুই। সম্পদ নয়, সুস্থতা নয়, নিরাপত্তা নয়, শত্রুর বিরুদ্ধে বিজয়ও নয়। আমাদেরকে সরল পথ দেখাও। সূরাটি সাত আয়াতের; এই একটি চাওয়া তার একটি আয়াত নেয়, আর পরের আয়াত 1:7 দ্বিতীয় কোনো চাওয়ার দিকে না গিয়ে সেই পথেরই বর্ণনায় ব্যয় হয়। সূরার এই অনুপাতটুকুই বলে দেয় কোন জিনিসটি সবচেয়ে জরুরি।"
          }
        ]
      },
      {
        "h": {
          "en": "Ihdina, Not Merely Show Us",
          "bn": "ইহদিনা — শুধু দেখানো নয়"
        },
        "p": [
          {
            "en": "The verb is ihdi, an imperative from hidayah. Arabic can distinguish between pointing someone toward a road and taking them along it, and the mufassirun read the hidayah asked for here as covering both. As-Sa'di explains it as knowledge of the truth together with being granted the ability to act on it. So the request is not for information. A person can know the right course exactly and still not walk it, and this verse asks for the walking too.",
            "bn": "ক্রিয়াপদটি ইহদি, যা হিদায়াত থেকে আসা একটি আদেশসূচক রূপ। আরবিতে কাউকে রাস্তা দেখিয়ে দেওয়া আর তাকে সেই রাস্তায় নিয়ে চলা — এ দুটি আলাদা করা যায়, আর মুফাসসিরগণ এখানে চাওয়া হিদায়াতকে দুটোকেই ধরে বলে পড়েন। আস-সাদী এটিকে ব্যাখ্যা করেন সত্য জানা এবং সেই অনুযায়ী কাজ করার তাওফিক পাওয়া — এই দুইয়ের সমন্বয় হিসেবে। তাই চাওয়াটি নিছক তথ্যের জন্য নয়। মানুষ সঠিক পথ ঠিকঠাক জেনেও তাতে না চলতে পারে, আর এই আয়াত সেই চলাটুকুও চায়।"
          },
          {
            "en": "The pronoun is worth noticing as well. It is ihdina, guide us, not guide me. Nothing in al-Fatihah is asked in the singular: na'budu, we worship; nasta'in, we ask for help; ihdina, guide us. A man praying alone at night in an empty room still says it in the plural. The surah will not let a worshipper stand before Allah as a private individual with a private file, detached from everyone else asking the same thing.",
            "bn": "সর্বনামটির দিকেও তাকানো দরকার। এটি ইহদিনা — আমাদেরকে পথ দেখাও, আমাকে নয়। সূরা আল-ফাতিহায় কোনো চাওয়াই একবচনে নয়: নাবুদু — আমরা ইবাদত করি; নাসতাঈন — আমরা সাহায্য চাই; ইহদিনা — আমাদেরকে পথ দেখাও। রাতের বেলা খালি ঘরে একা নামায পড়া মানুষটিও কথাটি বহুবচনেই বলে। সূরাটি কোনো মুসল্লিকে আল্লাহর সামনে নিছক একজন ব্যক্তিগত মানুষ হিসেবে, একই জিনিস চাওয়া বাকি সবার থেকে বিচ্ছিন্ন করে দাঁড়াতে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Road, Not a Track",
          "bn": "একটি রাজপথ, পায়ে চলা পথ নয়"
        },
        "p": [
          {
            "en": "Sirat in Arabic usage is a broad, clear, made road, not a narrow footpath, and it is wide enough for everyone who takes it. Mustaqim means straight, with no bend and no detour. The word carries the definite article: the straight road, not a straight road. And it is singular throughout, while the alternatives to it are always spoken of in the plural.",
            "bn": "আরবি ব্যবহারে সিরাত হলো প্রশস্ত, স্পষ্ট, বাঁধানো রাজপথ — সরু পায়ে চলা পথ নয় — আর যারা তাতে ওঠে সবার জন্যই তা যথেষ্ট চওড়া। মুস্তাকীম মানে সোজা, যাতে কোনো বাঁক নেই, ঘুরপথ নেই। শব্দটির সঙ্গে নির্দিষ্টতাবাচক উপসর্গ আছে: সেই সরল পথ, কোনো একটি সরল পথ নয়। আর এটি সর্বত্র একবচন, অথচ এর বিকল্পগুলোর কথা সবসময় বহুবচনেই বলা হয়।"
          },
          {
            "en": "6:153 says exactly that: this is My path, straight, so follow it, and do not follow the other ways, for they will separate you from His way. One road, many byways. Then 1:7 identifies the road not by a map but by its travellers, the path of those upon whom You have bestowed favour. 4:69 names that company as the prophets, the steadfast affirmers of truth, the martyrs and the righteous. Guidance is described as company kept.",
            "bn": "6:153 ঠিক এ কথাই বলে: এটাই আমার সরল পথ, কাজেই এর অনুসরণ কর, আর নানা পথের অনুসরণ করো না, কারণ সেগুলো তোমাদেরকে তাঁর পথ থেকে বিচ্ছিন্ন করে ফেলবে। একটি রাজপথ, বহু উপপথ। এরপর 1:7 পথটিকে চেনায় কোনো মানচিত্র দিয়ে নয়, তার পথিকদের দিয়ে — সেই পথ, যাদের প্রতি তুমি অনুগ্রহ করেছ। 4:69 সেই সঙ্গীদলের নাম বলে দেয়: নবীগণ, সিদ্দীকগণ, শহীদগণ ও নেককার লোকেরা। হিদায়াতকে এখানে বর্ণনা করা হয়েছে কার সঙ্গ ধরা হলো তা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Ask For What You Have",
          "bn": "যা আছে তা চাওয়া কেন"
        },
        "p": [
          {
            "en": "The obvious objection is that a Muslim reciting this has already been given the path. Ibn Kathir meets it directly: the request is for being kept on it, for increase in it, for firmness upon it, and for guidance in each particular matter as it arises. Guidance is not one gate you pass through once. It is a long road with a great many turnings, and the traveller needs direction at every one of them.",
            "bn": "সহজ আপত্তিটি হলো, যে মুসলিম এটি পড়ছে সে তো ইতিমধ্যেই পথটি পেয়েছে। ইবনে কাসীর সরাসরি এর জবাব দেন: চাওয়াটি হলো সেই পথে টিকে থাকার, তাতে বৃদ্ধির, তার উপর অবিচলতার, আর সামনে আসা প্রতিটি নির্দিষ্ট বিষয়ে দিশা পাওয়ার। হিদায়াত এমন একটি ফটক নয় যা একবার পেরোলেই শেষ। এটি বহু মোড়ওয়ালা এক দীর্ঘ পথ, আর পথিকের প্রতিটি মোড়েই দিশা দরকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Seventeen Times a Day",
          "bn": "দিনে সতেরোবার"
        },
        "p": [
          {
            "en": "Muslim narrates from Abu Hurayrah (RA) that Allah said He has divided the prayer between Himself and His servant in two halves, and His servant shall have what he asks for. The report then walks through al-Fatihah line by line with Allah's answer to each. When the servant reaches guide us to the straight path and what follows, Allah says: this is for My servant, and My servant shall have what he asked for.",
            "bn": "ইমাম মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে আল্লাহ বলেছেন, তিনি নামাযকে নিজের ও তাঁর বান্দার মধ্যে দুই ভাগে ভাগ করে দিয়েছেন, আর তাঁর বান্দা যা চাইবে তা সে পাবে। এরপর বর্ণনাটি সূরা আল-ফাতিহার প্রতিটি বাক্যের পাশে আল্লাহর জবাব রেখে এগোয়। বান্দা যখন পৌঁছায় 'আমাদেরকে সরল পথ দেখাও' এবং তার পরের অংশে, আল্লাহ বলেন: এটি আমার বান্দার জন্য, আর আমার বান্দা যা চেয়েছে তা সে পাবে।"
          },
          {
            "en": "Now count the rak'ahs of the five obligatory prayers: two at Fajr, four at Zuhr, four at Asr, three at Maghrib and four at Isha, which is seventeen. Al-Fatihah is recited in every one of them, so at the very least this request is placed before Allah seventeen times in a day, before any sunnah or voluntary prayer is added. Nothing else a Muslim says is repeated at anything like that rate.",
            "bn": "এবার পাঁচ ওয়াক্ত ফরয নামাযের রাকআত গুনুন: ফজরে দুই, যোহরে চার, আসরে চার, মাগরিবে তিন আর ইশায় চার — মোট সতেরো। প্রতিটি রাকআতেই সূরা আল-ফাতিহা পড়া হয়, তাই কোনো সুন্নত বা নফল যোগ করার আগেই এই চাওয়াটি দিনে অন্তত সতেরোবার আল্লাহর সামনে রাখা হয়। একজন মুসলিম আর যা কিছু বলে, তার কোনোটিই এই হারে পুনরাবৃত্ত হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Making the Words Mean It",
          "bn": "শব্দগুলোকে সত্যি করা"
        },
        "p": [
          {
            "en": "Frequency is exactly what puts the sentence at risk. Words said seventeen times a day can slide past without the heart moving. The repair is small: slow down at this line and put the actual decision you are carrying inside it, the argument you have not resolved, the offer you have not answered. Ask for guidance in that. Then the surah stops being a recitation you complete and becomes the request it was written as.",
            "bn": "এই বারবার হওয়াটাই বাক্যটির সবচেয়ে বড় ঝুঁকি। দিনে সতেরোবার বলা কথা হৃদয় না নেড়েই পাশ কাটিয়ে যেতে পারে। সমাধানটি ছোট: এই লাইনে এসে গতি কমান এবং আপনি যে বাস্তব সিদ্ধান্তটি বয়ে বেড়াচ্ছেন তা এর ভেতরে রাখুন — যে ঝগড়াটি মেটেনি, যে প্রস্তাবের জবাব দেননি। সেটির ব্যাপারেই হিদায়াত চান। তখন সূরাটি আর শেষ করার মতো একটি তিলাওয়াত থাকে না, বরং যে চাওয়া হিসেবে এটি লেখা হয়েছিল সেই চাওয়াই হয়ে ওঠে।"
          }
        ]
      }
    ]
  }
});
