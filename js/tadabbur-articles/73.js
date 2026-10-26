/**
 * Tadabbur long-form articles — surah 73.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "73:1-6": {
    "sections": [
      {
        "h": {
          "en": "Wrapped, Then Woken",
          "bn": "চাদরে মোড়া, তারপর জাগানো"
        },
        "p": [
          {
            "en": "Ya ayyuha al-muzzammil: O you wrapped in garments. Al-Baghawi explains the form: the word was originally al-mutazammil, and the t merged into the z, as al-muddaththir comes from al-mutadaththir. Al-Qurtubi records that Ubayy ibn Ka'b (RA) read the uncontracted forms, and gives two roots for the word: zamala, to carry a load, from which a pack animal is called zamilah, and wrapping oneself up.",
            "bn": "ইয়া আইয়্যুহাল মুযযাম্মিল: হে চাদরে আবৃত ব্যক্তি। শব্দটির গড়ন বাগাভী খুলে বলেন। মূল রূপ ছিল আল-মুতাযাম্মিল, পরে ত-বর্ণ য-বর্ণের সঙ্গে মিশে গেছে, যেমন আল-মুদ্দাসসির এসেছে আল-মুতাদাসসির থেকে। কুরতুবী জানান, উবাই ইবন কা'ব (রাঃ) শব্দ দুটি না মিলিয়ে মূল রূপেই পড়তেন। শব্দের মূল নিয়ে তিনি দুটি মত আনেন। একটি হলো যামালা, অর্থাৎ বোঝা বহন করা, যে কারণে মালবাহী পশুকে বলে যামিলা। অন্যটি হলো নিজেকে কাপড়ে জড়িয়ে নেওয়া।"
          },
          {
            "en": "Wrapped in what? At-Tabari glosses the word as the one wrapped in his garments, meaning the Prophet ﷺ, and records a disagreement. Qatada said wrapped in his clothes, ready for prayer; others said wrapped in prophethood and the message, which 'Ikrimah put as: you have been wrapped in this matter, so stand by it. Ibn Kathir adds, from Ibn 'Abbas, ad-Dahhak and as-Suddi, O sleeper. At-Tabari prefers Qatada's view, because stand the night follows at once, which shows the wrapping was in garments at the hour of prayer, the plainer of the two meanings.",
            "bn": "কিসে আবৃত? তাবারী শব্দটির অর্থ করেন: যিনি নিজের কাপড়ে জড়িয়ে আছেন, অর্থাৎ নবী ﷺ। তারপর তিনি একটি মতভেদ তুলে ধরেন। কাতাদার মতে তিনি কাপড়ে জড়ানো ছিলেন, নামাযের জন্য প্রস্তুত অবস্থায়। অন্যদের মতে তিনি জড়িয়ে ছিলেন নবুওয়াত ও রিসালাতে। ইকরিমা কথাটা বলেন এভাবে: এই দায়িত্বে তোমাকে জড়ানো হয়েছে, কাজেই তা নিয়ে দাঁড়াও। ইবন কাসীর আরেকটি অর্থ যোগ করেন, ইবন আব্বাস, যাহহাক ও সুদ্দী থেকে: হে ঘুমন্ত ব্যক্তি। তাবারী কাতাদার মতকেই অগ্রাধিকার দেন। কারণ সম্বোধনের ঠিক পরেই আসে 'রাতে দাঁড়াও', আর এতে বোঝা যায় নামাযের সময়ে কাপড়ে জড়ানোর কথাই বলা হয়েছে। দুই অর্থের মধ্যে এটিই বেশি স্পষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Accounts of the Cloak",
          "bn": "চাদরের পেছনের দুই বর্ণনা"
        },
        "p": [
          {
            "en": "Why was he wrapped? The commentators give more than a single occasion. As-Sa'di ties it to the start of revelation: when Jibril (AS) first came, the Prophet ﷺ saw what he had never seen, went home to his family trembling and said zammiluni, zammiluni, wrap me up, wrap me up. Ma'arif al-Qur'an places the scene after the cave of Hira', and al-Qurtubi gives it as said, its sense reported from Ibn 'Abbas (RA).",
            "bn": "তিনি কেন চাদর জড়িয়েছিলেন? তাফসীরকারেরা একাধিক উপলক্ষের কথা বলেন। সা'দী একে যুক্ত করেন ওহীর সূচনার সঙ্গে। জিবরীল (আঃ) যখন প্রথম এলেন, নবী ﷺ এমন কিছু দেখলেন যা আগে কখনো দেখেননি। কাঁপতে কাঁপতে ঘরে ফিরে বললেন: যাম্মিলূনী, যাম্মিলূনী, আমাকে চাদরে ঢেকে দাও। মাআরিফুল কুরআন দৃশ্যটি রাখে হেরা গুহার ঘটনার পরে। কুরতুবীও এটি 'বলা হয়' বলে আনেন, আর জানান যে এর মর্ম ইবন আব্বাস (রাঃ) থেকে বর্ণিত।"
          },
          {
            "en": "The second account is the taunt. Ibn Kathir opens the surah with a report from al-Bazzar through Jabir (RA): Quraysh met in Dar an-Nadwah to fix a name for the Prophet ﷺ that would turn people from him, tried soothsayer, madman and sorcerer, and rejected each; word of it reached him, he wrapped himself in his clothes, and Jibril came with O you wrapped and O you cloaked. Al-Bazzar himself notes that a narrator in its chain, Mu'alla ibn 'Abd ar-Rahman, transmits reports no one else corroborates. Al-Qurtubi and Ma'arif al-Qur'an mention it too, among other reports.",
            "bn": "দ্বিতীয় বর্ণনাটি কুরাইশের কটূক্তি নিয়ে। ইবন কাসীর সূরার শুরুতেই বাযযারের একটি বর্ণনা আনেন, জাবির (রাঃ) থেকে। কুরাইশরা দারুন নাদওয়ায় জড়ো হলো নবী ﷺ-এর জন্য এমন একটা নাম ঠিক করতে, যা শুনে মানুষ তাঁর কাছ থেকে সরে যাবে। গণক, পাগল, জাদুকর, একে একে সব নামই তারা নিজেরাই বাতিল করল। খবরটা তাঁর কানে পৌঁছাল। তিনি কাপড়ে নিজেকে জড়িয়ে নিলেন, আর জিবরীল (আঃ) এলেন 'হে চাদরে আবৃত' ও 'হে বস্ত্রাবৃত' নিয়ে। বাযযার নিজেই সতর্ক করেন, সনদের এক রাবী মুআল্লা ইবন আব্দুর রহমান এমন সব বর্ণনা করেন যার সমর্থন আর কেউ করে না। কুরতুবী ও মাআরিফুল কুরআনও এই বর্ণনার কথা বলে, তবে কয়েকটি বর্ণনার একটি হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Named for the Moment",
          "bn": "মুহূর্তের নামে ডাকা"
        },
        "p": [
          {
            "en": "Why call him by a garment and not by his office? Al-Qurtubi quotes as-Suhayli: al-muzzammil is not among the Prophet's names ﷺ; it is drawn from his state when the address came. Its first benefit is gentleness. When the Arabs wished to soften towards a man and drop all reproach, they called him by his state, as the Prophet ﷺ woke 'Ali (RA), asleep with dust on his side, with qum ya Aba Turab. Its second is that it reaches every wrapped sleeper.",
            "bn": "পদের নামে না ডেকে কাপড়ের নামে কেন ডাকা হলো? কুরতুবী সুহাইলীর কথা উদ্ধৃত করেন। মুযযাম্মিল নবী ﷺ-এর কোনো নাম নয়। সম্বোধনের মুহূর্তে তিনি যে অবস্থায় ছিলেন, শব্দটি সেখান থেকে নেওয়া। এর প্রথম ফায়দা কোমলতা। আরবরা কারও প্রতি নরম হতে চাইলে, তিরস্কারের রেশ না রাখতে চাইলে, তাকে তার অবস্থার নামে ডাকত। নবী ﷺ যেমন আলী (রাঃ)-কে ঘুম থেকে তুলেছিলেন 'কুম ইয়া আবা তুরাব' বলে, তখন তাঁর পাঁজরে মাটি লেগে ছিল। দ্বিতীয় ফায়দা হলো, ডাকটা পৌঁছে যায় চাদর মুড়ি দিয়ে ঘুমিয়ে থাকা প্রত্যেকের কাছে।"
          },
          {
            "en": "Al-Baghawi reports scholars saying that this form of address belonged to the first days of revelation, before he had begun to convey the message, and that afterwards he was addressed as Prophet and Messenger. As-Sa'di draws the lesson from the same fact: Allah steadied him after that first fear, revelation followed revelation, and he reached a station no messenger reached, so how great is the distance between the start of his prophethood and its end.",
            "bn": "বাগাভী আলেমদের কথা উল্লেখ করেন: এই সম্বোধন ওহীর একেবারে প্রথম দিকের, রিসালাতের প্রচার শুরু হওয়ার আগের। পরে তাঁকে ডাকা হয়েছে নবী ও রাসূল বলে। সা'দী এই তথ্য থেকেই শিক্ষা টানেন। প্রথম সেই ভয়ের পর আল্লাহ তাঁকে দৃঢ়তা দিলেন, ওহীর পর ওহী আসতে থাকল, আর তিনি এমন মর্যাদায় পৌঁছালেন যেখানে আর কোনো রাসূল পৌঁছাননি। নবুওয়াতের শুরু আর শেষের মধ্যে কত বড় ব্যবধান!"
          }
        ]
      },
      {
        "h": {
          "en": "Half, or a Little Either Side",
          "bn": "অর্ধেক, একটু কম বা বেশি"
        },
        "p": [
          {
            "en": "Qumi al-layla illa qalila: stand the night, except a little. Ibn Kathir reads it as a command to leave the wrapping and rise to stand before his Lord, as in 32:16, whose sides forsake their beds. At-Tabari paraphrases: stand the whole night, Muhammad, except a little of it. Al-Qurtubi explains why a little is left out: standing all of it, night after night, is not possible, so a little was excepted for the body's rest. As-Sa'di sees mercy in it: He did not command the whole night.",
            "bn": "কুমিল লাইলা ইল্লা কালীলা: রাতে দাঁড়াও, অল্প কিছু অংশ বাদে। ইবন কাসীরের পাঠে এ হলো চাদর ছেড়ে উঠে রবের সামনে দাঁড়ানোর আদেশ, যেমন ৩২:১৬ আয়াতে আছে: তাদের পাঁজর বিছানা থেকে আলাদা থাকে। তাবারী অর্থ করেন: হে মুহাম্মাদ, গোটা রাত দাঁড়াও, শুধু অল্প একটু বাদে। অল্পটুকু কেন বাদ, কুরতুবী তা বুঝিয়ে দেন। রাতের পর রাত পুরো রাত দাঁড়িয়ে থাকা মানুষের পক্ষে সম্ভব নয়, তাই শরীরের বিশ্রামের জন্য সামান্য অংশ ছাড় দেওয়া হয়েছে। সা'দী এর মধ্যে রহমত দেখেন: তিনি গোটা রাতের আদেশ দেননি।"
          },
          {
            "en": "Then the measure: half of it, or reduce it a little, or add to it. Al-Qurtubi gives az-Zajjaj's grammar, in which half stands in apposition to the night: stand half the night, or less down to a third, or more up to two thirds. At-Tabari says Allah gave him the choice among these stations, to take whichever he wished. Al-Baghawi explains that a man could not tell when a third, a half or two thirds had passed, so he stood until morning for fear of falling short.",
            "bn": "তারপর মাপ: রাতের অর্ধেক, কিংবা তার থেকে একটু কম, কিংবা একটু বেশি। কুরতুবী যাজ্জাজের ব্যাকরণ তুলে ধরেন। তাঁর মতে 'অর্ধেক' শব্দটি 'রাত'-এর বদল। অর্থ দাঁড়ায়: রাতের অর্ধেক দাঁড়াও, কিংবা কমিয়ে এক-তৃতীয়াংশ পর্যন্ত, কিংবা বাড়িয়ে দুই-তৃতীয়াংশ পর্যন্ত। তাবারী বলেন, আল্লাহ এই কয়েকটি স্তরের মধ্যে যেকোনোটি বেছে নেওয়ার স্বাধীনতা তাঁকে দিয়েছিলেন। বাগাভী জানান: রাতের এক-তৃতীয়াংশ, অর্ধেক না দুই-তৃতীয়াংশ পেরোল, মানুষ তা ঠাহর করতে পারত না। তাই কম পড়ে যাওয়ার ভয়ে তারা ভোর পর্যন্ত দাঁড়িয়ে থাকত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Year Before the Easing",
          "bn": "সহজ হওয়ার আগের বছর"
        },
        "p": [
          {
            "en": "Was it binding, and on whom? Al-Qurtubi finds the evidence pointing to an obligation, not an encouragement, and lists three views: binding on the Prophet ﷺ alone, from Sa'id ibn Jubayr; on him and the prophets before him, from Ibn 'Abbas (RA); and on him and his community, from 'A'isha (RA) and Ibn 'Abbas as well, which al-Qurtubi calls correct. Ibn Kathir calls it binding on him alone, quoting 17:79, though he too later brings the report from 'A'isha that al-Qurtubi relies on.",
            "bn": "আদেশটি কি বাধ্যতামূলক ছিল, আর কার উপর? কুরতুবীর মতে প্রমাণগুলো ফরজের দিকেই ইঙ্গিত করে, শুধু উৎসাহের দিকে নয়। তিনি তিনটি মত উল্লেখ করেন। সাঈদ ইবন জুবাইরের মতে ফরজ ছিল কেবল নবী ﷺ-এর উপর। ইবন আব্বাস (রাঃ)-এর মতে তাঁর উপর এবং তাঁর আগের নবীদের উপর। আয়েশা (রাঃ)-এর মতে, এবং ইবন আব্বাসেরও আরেক মতে, তাঁর উপর ও তাঁর উম্মতের উপর। কুরতুবী এই শেষ মতকেই সঠিক বলেন। ইবন কাসীর ১৭:৭৯ আয়াত উদ্ধৃত করে একে কেবল নবী ﷺ-এর উপর ফরজ বলেন। তবে পরে তিনিও আয়েশা (রাঃ)-এর সেই বর্ণনাই আনেন, যার উপর কুরতুবী নির্ভর করেছেন।"
          },
          {
            "en": "Muslim records it in his Sahih, as part of a longer hadith in which Sa'd ibn Hisham asks 'A'isha about the Prophet's night prayer ﷺ. She asked whether he did not recite O you wrapped, then said: \"Allah, Mighty and Majestic, made standing at night obligatory at the beginning of this surah, so the Prophet of Allah ﷺ and his Companions stood for a year, and Allah held back its closing part in the heaven for twelve months, until Allah sent down the lightening at the end of this surah, and standing at night became voluntary after being obligatory\" (Sahih Muslim 746).",
            "bn": "ইমাম মুসলিম তাঁর সহীহ গ্রন্থে এটি বর্ণনা করেছেন, একটি দীর্ঘ হাদীসের অংশ হিসেবে। সেখানে সা'দ ইবন হিশাম আয়েশা (রাঃ)-কে নবী ﷺ-এর রাতের নামায সম্পর্কে জিজ্ঞেস করেন। আয়েশা (রাঃ) পাল্টা জানতে চাইলেন, তিনি কি 'ইয়া আইয়্যুহাল মুযযাম্মিল' পড়েন না? তারপর বললেন: \"মহান আল্লাহ এই সূরার শুরুতে রাতের কিয়াম ফরজ করেছিলেন। তাই আল্লাহর নবী ﷺ ও তাঁর সাহাবীরা এক বছর ধরে দাঁড়িয়েছেন। আর আল্লাহ সূরার শেষাংশ ১২ মাস আসমানে আটকে রেখেছিলেন। অবশেষে আল্লাহ এই সূরার শেষে সহজ করার বিধান নাযিল করলেন, আর রাতের কিয়াম ফরজ থাকার পর নফল হয়ে গেল।\" (সহীহ মুসলিম ৭৪৬)"
          },
          {
            "en": "Muslim's wording does not mention swollen feet; at-Tabari's reports from Qatada and Abu 'Abd ar-Rahman as-Sulami do, as does al-Baghawi's chain of the same report from 'A'isha. On the length, the early authorities differ. At-Tabari reports Ibn 'Abbas saying that close to a year lay between the surah's beginning and its end; Qatada said a year or two; Sa'id ibn Jubayr said ten years. Al-Qurtubi notes a report in ath-Tha'labi giving eight months, against a year in Muslim. How the easing came is the subject of 73:20.",
            "bn": "মুসলিমের বর্ণনায় পা ফুলে যাওয়ার কথা নেই। তাবারী কাতাদা ও আবু আব্দুর রহমান সুলামী থেকে যে বর্ণনা আনেন তাতে আছে, আর আয়েশা (রাঃ)-এর একই বর্ণনা বাগাভী যে সনদে আনেন তাতেও আছে। সময়ের দৈর্ঘ্য নিয়ে পূর্বসূরিদের মধ্যে মতভেদ আছে। তাবারী ইবন আব্বাস (রাঃ)-এর কথা আনেন: সূরার শুরু আর শেষের মাঝে প্রায় এক বছর কেটেছিল। কাতাদা বলেছেন এক বা দুই বছর, সাঈদ ইবন জুবাইর বলেছেন ১০ বছর। কুরতুবী সা'লাবীর এক বর্ণনার কথা জানান যেখানে ৮ মাস বলা হয়েছে, অথচ মুসলিমে আছে এক বছর। সহজ করার বিধান কীভাবে এল, তা ৭৩:২০ আয়াতের আলোচনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Letters Set Like Even Teeth",
          "bn": "সারি বাঁধা দাঁতের মতো হরফ"
        },
        "p": [
          {
            "en": "Wa rattili al-Qur'ana tartila: and recite the Qur'an with tartil. At-Tabari glosses: make the Qur'an clear when you recite it, and go at an easy pace in it. He reports Ibn 'Abbas and Qatada saying bayyinhu bayanan, make it clear; al-Hasan, recite it distinctly; Mujahid, part following part, unhurried. Al-Qurtubi adds ad-Dahhak's letter by letter, and roots the word in arrangement and good order: Arabic calls teeth rattal when they are evenly set. The Muyassar says recite with deliberation, making the letters and the pauses clear.",
            "bn": "ওয়া রাত্তিলিল কুরআনা তারতীলা: আর কুরআন পড়ো তারতীলের সঙ্গে। তাবারী অর্থ করেন: পড়ার সময় কুরআনকে স্পষ্ট করো, ধীরে সুস্থে পড়ো। তিনি বর্ণনা আনেন, ইবন আব্বাস (রাঃ) ও কাতাদা বলেছেন 'বাইয়িনহু বায়ানা', অর্থাৎ স্পষ্ট করে পড়ো। হাসান বলেছেন, পরিষ্কার উচ্চারণে পড়ো। মুজাহিদ বলেছেন, একটির পরে আরেকটি, তাড়াহুড়া ছাড়া। কুরতুবী যাহহাকের কথা যোগ করেন: হরফে হরফে পড়ো। শব্দটির মূল তিনি খোঁজেন বিন্যাস ও সুন্দর শৃঙ্খলার মধ্যে। দাঁত সমান সারিতে বসানো থাকলে আরবরা তাকে বলে রাতাল। মুয়াসসার বলে: ধীরে, থেমে থেমে পড়ো, হরফ আর থামার জায়গাগুলো স্পষ্ট রেখে।"
          },
          {
            "en": "The reason is understanding. Ibn Kathir says recite it slowly, for that helps in understanding the Qur'an and reflecting on it; as-Sa'di says that through tartil come reflection, the stirring of hearts, worship through its verses and full readiness for it. Al-Baghawi and Ibn Kathir report Ibn Mas'ud (RA): do not rush through it as poetry is rushed; stop at its wonders, move the hearts with it, and let none of you make the end of the surah his concern.",
            "bn": "উদ্দেশ্য হলো বোঝা। ইবন কাসীর বলেন, ধীরে পড়ো, কারণ তা কুরআন বোঝা ও তা নিয়ে ভাবায় সাহায্য করে। সা'দীর কথায়, তারতীলের মাধ্যমেই আসে চিন্তা ও তাদাব্বুর, অন্তরে নাড়া, আয়াতের মাধ্যমে ইবাদত, আর কুরআনের জন্য পূর্ণ প্রস্তুতি। বাগাভী ও ইবন কাসীর ইবন মাসঊদ (রাঃ)-এর কথা আনেন: কবিতা যেমন গড়গড় করে আওড়ানো হয়, কুরআন তেমন করে পড়ো না। এর বিস্ময়কর জায়গাগুলোতে থামো, এ দিয়ে অন্তরকে নাড়া দাও। সূরা কখন শেষ হবে, সেটা যেন কারও চিন্তা না হয়।"
          },
          {
            "en": "How did the Prophet ﷺ recite? Al-Bukhari answers, as Ibn Kathir and al-Baghawi report. Qatada said: Anas (RA) was asked how the Prophet's recitation was ﷺ, and he said, \"It was drawn out.\" Then he recited bismillahi ar-rahmani ar-rahim, drawing out bismillah, drawing out ar-rahman, drawing out ar-rahim (Sahih al-Bukhari 5046). Ibn Kathir also cites, from 'Abdullah ibn 'Amr (RA), the saying that the companion of the Qur'an will be told: recite and rise, and recite with tartil as you used to in the world, for your rank is at the last verse you recite. At-Tirmidhi, who records it, grades it hasan sahih (Jami' at-Tirmidhi 2914).",
            "bn": "নবী ﷺ কীভাবে পড়তেন? ইবন কাসীর ও বাগাভী দুজনেই উত্তরটা আনেন বুখারী থেকে। কাতাদা বলেন: আনাস (রাঃ)-কে জিজ্ঞেস করা হলো, নবী ﷺ-এর তিলাওয়াত কেমন ছিল। তিনি বললেন, \"টেনে টেনে।\" তারপর তিনি বিসমিল্লাহির রাহমানির রাহীম পড়লেন, বিসমিল্লাহ টেনে, আর-রাহমান টেনে, আর-রাহীম টেনে (সহীহ বুখারী ৫০৪৬)। ইবন কাসীর আব্দুল্লাহ ইবন আমর (রাঃ) থেকে আরেকটি হাদীসও আনেন: কুরআনের সাথীকে বলা হবে, পড়ো আর উপরে উঠতে থাকো, দুনিয়ায় যেভাবে তারতীলের সঙ্গে পড়তে সেভাবে পড়ো, কারণ তোমার শেষ পড়া আয়াতের কাছেই তোমার মর্যাদা। ইমাম তিরমিযী এটি বর্ণনা করে একে হাসান সহীহ বলেছেন (জামে তিরমিযী ২৯১৪)।"
          }
        ]
      },
      {
        "h": {
          "en": "Heavy in Which Sense?",
          "bn": "কোন অর্থে ভারী?"
        },
        "p": [
          {
            "en": "Inna sanulqi 'alayka qawlan thaqila: We will cast upon you a heavy word. The commentators read the weight in several directions. Heavy to act upon: al-Hasan said a man can race through a surah, but acting on it is heavy, and Qatada said, by Allah, heavy are its obligations and its limits. Heavy in its commands and prohibitions, from Muqatil in al-Baghawi; heavy with promise and threat, the lawful and the unlawful, from Abu al-'Aliyah. Heavy on the hypocrites, from Muhammad ibn Ka'b, while al-Qurtubi records a view that names the disbelievers.",
            "bn": "ইন্না সানুলকী আলাইকা কাওলান সাকীলা: আমি তোমার উপর এক ভারী বাণী অবতীর্ণ করব। এই ভার তাফসীরকারেরা নানা দিক থেকে পড়েন। আমলের দিক থেকে ভারী: হাসান বলেছেন, মানুষ গড়গড় করে একটা সূরা পড়ে ফেলতে পারে, কিন্তু সে অনুযায়ী আমল করা ভারী। কাতাদা বলেছেন, আল্লাহর কসম, এর ফরজ আর সীমারেখাগুলো ভারী। বাগাভীতে মুকাতিলের মত: আদেশ ও নিষেধের ভারে ভারী। আবুল আলিয়ার মত: প্রতিশ্রুতি ও সতর্কবাণী, হালাল ও হারামের ভারে ভারী। মুহাম্মাদ ইবন কা'বের মতে মুনাফিকদের উপর ভারী। আর কুরতুবী এক মত উল্লেখ করেন যেখানে কাফেরদের কথা বলা হয়েছে।"
          },
          {
            "en": "Heavy in its descent: Ibn Kathir, al-Qurtubi and al-Baghawi bring the report from 'A'isha (RA) that al-Harith ibn Hisham asked how revelation came, and the Prophet ﷺ said: \"Sometimes it is like the ringing of a bell, this form of inspiration is the hardest of all, and then this state passes off after I have grasped what is inspired. Sometimes the angel comes in the form of a man and talks to me and I grasp whatever he says.\" 'A'isha added: \"Verily I saw the Prophet being inspired divinely on a very cold day and noticed the sweat dropping from his forehead\" (Sahih al-Bukhari 2).",
            "bn": "অবতরণের মুহূর্তে ভারী: ইবন কাসীর, কুরতুবী ও বাগাভী আয়েশা (রাঃ)-এর বর্ণনা আনেন। হারিস ইবন হিশাম জিজ্ঞেস করেছিলেন, ওহী কীভাবে আসে। নবী ﷺ বললেন: \"কখনো তা আসে ঘণ্টাধ্বনির মতো, আর এটাই আমার উপর সবচেয়ে কঠিন। তারপর এ অবস্থা কেটে যায়, ততক্ষণে যা বলা হয়েছে তা আমি আয়ত্ত করে নিয়েছি। আর কখনো ফেরেশতা মানুষের রূপ ধরে আসেন, আমার সঙ্গে কথা বলেন, আর তিনি যা বলেন তা আমি আয়ত্ত করে নিই।\" আয়েশা (রাঃ) যোগ করেন: \"আমি দেখেছি প্রচণ্ড শীতের দিনে তাঁর উপর ওহী নাযিল হচ্ছে, আর তা শেষ হলে তাঁর কপাল থেকে ঘাম ঝরছে।\" (সহীহ বুখারী ২)"
          },
          {
            "en": "Heavy in the scale: Ibn Zayd said it is heavy and blessed, and as it is heavy in this world it will be heavy in the balance on the Day of Resurrection. Al-Qurtubi opens with a reading tied to the verses before: the night prayer itself is the heavy word, since the night is for sleep and standing most of it takes hard effort against the self. He reports Ibn al-'Arabi preferring the descent, as the literal sense. At-Tabari will not narrow it: Allah called it heavy, so it is heavy to carry and heavy to act upon.",
            "bn": "পাল্লায় ভারী: ইবন যায়েদ বলেছেন, এ বাণী ভারী ও বরকতময়। দুনিয়ায় যেমন ভারী, কিয়ামতের দিন মীযানেও তেমনি ভারী হবে। কুরতুবী শুরু করেন আগের আয়াতগুলোর সঙ্গে যুক্ত এক ব্যাখ্যা দিয়ে: রাতের নামাযই সেই ভারী বাণী। রাত তো ঘুমের জন্য, আর রাতের বেশির ভাগ দাঁড়িয়ে কাটাতে নফসের বিরুদ্ধে কঠিন লড়াই লাগে। তিনি জানান, ইবনুল আরাবী অবতরণের অর্থকেই অগ্রাধিকার দিয়েছেন, কারণ সেটাই শব্দের প্রকৃত অর্থ। তাবারী অর্থটাকে সংকুচিত করেন না: আল্লাহ একে ভারী বলেছেন, কাজেই তা বহন করতেও ভারী, আমল করতেও ভারী।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hours That Rise",
          "bn": "যে প্রহরগুলো জেগে ওঠে"
        },
        "p": [
          {
            "en": "Inna nashi'ata al-layl: the rising of the night. At-Tabari glosses it as the hours of the night, each of which is a nashi'ah, and records the disagreement. Ibn 'Abbas and Ibn az-Zubayr (RA) said the whole night is nashi'ah; Ibn 'Abbas also said that in the speech of Abyssinia, when a man rises at night, they say nasha'a; Mujahid said whatever hour you rise. Abu Mijlaz and Qatada said it is what comes after 'Isha'. Al-Baghawi and al-Qurtubi add 'A'isha's view, rising after sleep, and others: the night's end, or its beginning.",
            "bn": "ইন্না নাশিআতাল লাইল: রাতের জেগে ওঠা। তাবারী এর অর্থ করেন রাতের প্রহরগুলো, যার প্রতিটি প্রহরই নাশিআ। তারপর মতভেদটা তুলে ধরেন। ইবন আব্বাস ও ইবনুয যুবাইর (রাঃ) বলেন, গোটা রাতই নাশিআ। ইবন আব্বাস আরও বলেন, হাবশার ভাষায় কেউ রাতে উঠে দাঁড়ালে বলা হয় নাশাআ। মুজাহিদের মতে, যে প্রহরেই আপনি উঠে দাঁড়ান। আবু মিজলায ও কাতাদার মতে, ইশার পরের সময়টুকু। বাগাভী ও কুরতুবী যোগ করেন আয়েশা (রাঃ)-এর মত: ঘুমের পরে ওঠা। অন্যরা বলেছেন রাতের শেষ ভাগ, কেউ বলেছেন শুরুর ভাগ।"
          },
          {
            "en": "Ashaddu wat'an: here at-Tabari records two readings. Most readers of the cities read wat'an; some read wita'an, from muwata'ah, agreement, and he holds both sound. On wat'an he says firmer, more settled in the heart; on wita'an Mujahid says your hearing, sight and heart agree with each other, and Ibn Kathir speaks of concord between heart and tongue. Al-Baghawi and al-Qurtubi give wat'an a further sense: heavier on the person praying than the hours of the day, because the night is for sleep.",
            "bn": "আশাদ্দু ওয়াত'আন: এখানে তাবারী দুটি কিরাআত উল্লেখ করেন। বিভিন্ন শহরের বেশির ভাগ কারী পড়েছেন ওয়াত'আন, কিছু কারী পড়েছেন উইতাআন, যা এসেছে মুওয়াতাআ থেকে, অর্থাৎ মিলে যাওয়া। তাবারী দুটোকেই সঠিক মনে করেন। ওয়াত'আনের অর্থ তিনি করেন বেশি দৃঢ়, অন্তরে বেশি স্থির। উইতাআন প্রসঙ্গে মুজাহিদ বলেন, তখন আপনার শোনা, দেখা আর অন্তর একে অপরের সঙ্গে মিলে যায়। ইবন কাসীর বলেন অন্তর ও জিহ্বার মিলের কথা। বাগাভী ও কুরতুবী ওয়াত'আনের আরেকটি অর্থও দেন: দিনের প্রহরের চেয়ে নামাযির উপর বেশি ভারী, কারণ রাত তো ঘুমের জন্য।"
          },
          {
            "en": "Wa aqwamu qila: and more upright in speech. At-Tabari says more correct in recitation; Qatada, better for keeping the recitation; Ibn Zayd, more upright because the heart is free of the world; Ibn 'Abbas, nearer to understanding the Qur'an. Ibn Kathir sums it up: the night gathers the mind for reciting and grasping, unlike the day, a time of scattering, raised voices and earning a living. The next verse, 73:7, names that long occupation of the day, and 73:8 turns to remembering the Name of the Lord. The night keeps unhurried words, and a heart and tongue that agree.",
            "bn": "ওয়া আকওয়ামু কীলা: আর কথায় বেশি সঠিক। তাবারীর মতে, তিলাওয়াতে বেশি নির্ভুল। কাতাদার মতে, পড়া মনে রাখার জন্য বেশি উপযোগী। ইবন যায়েদের মতে, বেশি সঠিক কারণ অন্তর তখন দুনিয়া থেকে ফারেগ। ইবন আব্বাসের মতে, কুরআন বোঝার বেশি কাছাকাছি। ইবন কাসীর সারকথা বলেন এভাবে: রাত মনকে এক জায়গায় জড়ো করে পড়া ও বোঝার জন্য, দিন যেমন পারে না। দিন তো ছড়িয়ে পড়ার, হইচইয়ের আর রুজির খোঁজের সময়। পরের আয়াত ৭৩:৭ দিনের সেই দীর্ঘ ব্যস্ততার কথা বলে, আর ৭৩:৮ ফিরে যায় রবের নাম স্মরণের দিকে। রাত তুলে রাখে ধীরে উচ্চারিত কথা, আর এমন অন্তর ও জিহ্বা যা একে অপরের সঙ্গে মেলে।"
          }
        ]
      }
    ]
  },
  "73:8": {
    "sections": [
      {
        "h": {
          "en": "Between Night and Day",
          "bn": "রাত আর দিনের মাঝখানে"
        },
        "p": [
          {
            "en": "The verse sits at a hinge in Surah al-Muzzammil. The surah opens with the command to stand the night in prayer and recite with tartil (73:1 to 73:4), announces the heavy word to come (73:5) and praises the hours of the night (73:6). Then 73:7 turns to the day: inna laka fi n-nahari sabhan tawila. Ibn Kathir reports Ibn 'Abbas, 'Ikrimah and 'Ata' explaining sabh as free time and sleep, and Mujahid, al-Hasan, Qatadah and others as a long stretch of free time. 'Abd ar-Rahman ibn Zayd read it as time for your own needs, so leave the night for your devotion.",
            "bn": "সূরা মুযযাম্মিলের একটা মোড়ে আয়াতটির অবস্থান। সূরার শুরুতে আদেশ এসেছে রাতে নামাযে দাঁড়ানোর আর তারতীলের সঙ্গে কুরআন পড়ার (৭৩:১ থেকে ৭৩:৪)। তারপর আসন্ন ভারী বাণীর ঘোষণা (৭৩:৫), এরপর রাতের প্রহরের প্রশংসা (৭৩:৬)। ৭৩:৭ আয়াতে কথা ঘুরে যায় দিনের দিকে: ইন্না লাকা ফিন নাহারি সাবহান তাওয়ীলা। ইবন কাসীর জানান, ইবন আব্বাস (রাঃ), ইকরিমা ও আতা সাবহ বলতে বুঝিয়েছেন অবসর আর ঘুম। মুজাহিদ, হাসান, কাতাদা প্রমুখের মতে এর অর্থ লম্বা অবসর। আবদুর রহমান ইবন যায়দ বলেন, দিন তোমার নিজের প্রয়োজনের জন্য, তাই রাতটা রাখো ইবাদতের জন্য।"
          },
          {
            "en": "Then comes 73:8: wa-dhkuri sma rabbika wa tabattal ilayhi tabtila, and remember the name of your Lord and devote yourself to Him wholly. Ma'arif al-Qur'an notes that the sentence is joined in grammar to the command of 73:2 to stand the night, while 73:7 had turned the Prophet's ﷺ attention to the day. This verse, it says, enjoins something bound to neither half: remembrance, which can be kept at any hour and in any state. The night has its prayer and the day its work, and this command runs through both.",
            "bn": "এরপর ৭৩:৮: ওয়াযকুরিসমা রব্বিকা ওয়া তাবাত্তাল ইলাইহি তাবতীলা। তোমার রবের নাম স্মরণ করো আর সব ছেড়ে পুরোপুরি তাঁর হয়ে যাও। মাআরিফুল কুরআন বলে, ব্যাকরণের দিক থেকে বাক্যটি জোড়া লেগেছে ৭৩:২ আয়াতের রাত জাগার আদেশের সঙ্গে। মাঝখানে ৭৩:৭ নবী ﷺ-এর মনোযোগ টেনেছিল দিনের দিকে। আর এ আয়াত এমন এক আমলের কথা বলে যা রাত বা দিন কোনোটার সঙ্গেই বাঁধা নয়। সেটা জিকির, যে কোনো প্রহরে, যে কোনো অবস্থায় করা যায়। রাতের আছে নামায, দিনের আছে কাজ, আর এ আদেশ চলে দুটোর ভেতর দিয়েই।"
          }
        ]
      },
      {
        "h": {
          "en": "Calling on Him by the Name",
          "bn": "নাম ধরে তাঁকে ডাকা"
        },
        "p": [
          {
            "en": "Why remember the name, and not simply remember? At-Tabari answers in two words: fa-d'uhu bihi, so call upon Him by it. The Muyassar says the same to the Prophet ﷺ: remember the name of your Lord and call upon Him by it. Al-Baghawi glosses the remembrance as bi-t-tawhid wa-t-ta'zim, by affirming His oneness and magnifying Him. As-Sa'di keeps the command at its widest: it takes in every kind of dhikr. Ibn Kathir hears in it a call to abundance: akthir min dhikrihi, remember Him much.",
            "bn": "শুধু স্মরণ নয়, নামের স্মরণ কেন? তাবারী উত্তর দেন দুই শব্দে: ফাদউহু বিহি, সেই নাম ধরে তাঁকে ডাকো। মুয়াসসারও নবী ﷺ-কে একই কথা বলে: রবের নাম স্মরণ করো, সেই নামে তাঁকে ডাকো। বাগাভীর ব্যাখ্যায় এ স্মরণ হবে তাওহীদ আর তা'যীমের সঙ্গে, অর্থাৎ তাঁর একত্ব মেনে নিয়ে আর তাঁর বড়ত্ব ঘোষণা করে। সা'দী আদেশটিকে রাখেন সবচেয়ে প্রশস্ত অর্থে: সব রকমের জিকির এর ভেতরে পড়ে। ইবন কাসীর এতে শোনেন বেশি বেশি করার ডাক: আকসির মিন যিকরিহি, তাঁকে বেশি করে স্মরণ করো।"
          },
          {
            "en": "Al-Qurtubi gathers more readings than anyone. His first: call on Him by His most beautiful names, so that alongside your prayer you gain a praiseworthy end. Others he introduces with 'it is said': aim with your deeds at the face of your Lord; or remember His name in His promise and His threat, so that you hold to His obedience and turn from disobeying Him. Sahl ties it to the prayer itself: recite bismillah ar-rahman ar-rahim at its opening, and the blessing of that recitation will carry you to your Lord and cut you off from all besides Him.",
            "bn": "সবচেয়ে বেশি ব্যাখ্যা জড়ো করেছেন কুরতুবী। তাঁর প্রথম কথা: তাঁর সুন্দরতম নামগুলো ধরে তাঁকে ডাকো, যাতে নামাযের সঙ্গে সঙ্গে প্রশংসনীয় পরিণামও তোমার হাতে আসে। এরপর 'বলা হয়' দিয়ে আনেন আরও কয়েকটি মত। এক মতে, তোমার আমলের লক্ষ্য হোক রবের সন্তুষ্টি। আরেক মতে, তাঁর নাম স্মরণ করো তাঁর প্রতিশ্রুতি আর সতর্কবাণীর প্রসঙ্গে, যাতে আনুগত্যে লেগে থাকো আর নাফরমানি থেকে ফিরে আসো। সাহল কথাটা বেঁধে দেন নামাযের সঙ্গেই: নামাযের শুরুতে বিসমিল্লাহির রহমানির রহীম পড়ো। এর বরকত তোমাকে রবের কাছে পৌঁছে দেবে আর বাকি সবকিছু থেকে বিচ্ছিন্ন করবে।"
          },
          {
            "en": "Al-Kalbi reads the phrase as prayer: pray to your Lord, meaning by day. Al-Qurtubi calls this good. The surah has spoken of the night, he reasons, so it fittingly speaks of the day, its counterpart, and he recalls 25:62, where Allah made the night and the day follow each other for whoever wishes to remember. On this reading 73:8 answers 73:7 directly: the day is long and busy, and here its share of worship is named. The commentators set these glosses side by side without ranking them, and so does this article.",
            "bn": "কালবী বাক্যটিকে নামায অর্থে নেন: রবের জন্য নামায পড়ো, অর্থাৎ দিনের বেলায়। কুরতুবী এ মতকে ভালো বলেছেন। তাঁর যুক্তি, সূরা রাতের কথা বলেছে, তাই এর জোড়া দিনের কথা বলাই মানানসই। সঙ্গে তিনি স্মরণ করান ২৫:৬২ আয়াত, যেখানে আল্লাহ রাত আর দিনকে একের পর এক আসতে দিয়েছেন তার জন্য, যে স্মরণ করতে চায়। এ ব্যাখ্যায় ৭৩:৮ সরাসরি জবাব দেয় ৭৩:৭-কে। দিন লম্বা আর ব্যস্ত, আর এখানে তার ভাগের ইবাদতের কথা বলা হলো। তাফসীরকারেরা এসব ব্যাখ্যা পাশাপাশি রেখেছেন, কোনোটাকে ওপরে তোলেননি। এ লেখাও তুলছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Remembrance at Every Moment",
          "bn": "প্রতিটি মুহূর্তের জিকির"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an raises a question the others leave aside. It is unthinkable, it says, that the Prophet ﷺ would ever fail to remember Allah, so the command must mean keeping to remembrance without any slackness. That is possible only if remembrance is taken in its widest sense: the name recited on the tongue, remembrance in the heart, and the body kept busy with Allah's commands. It then cites a narration from 'A'ishah (RA), which Muslim includes in his Sahih (373) in these words: 'The Prophet ﷺ used to remember Allah in all his moments.'",
            "bn": "মাআরিফুল কুরআন এমন এক প্রশ্ন তোলে, যা অন্যরা তোলেনি। নবী ﷺ কখনো আল্লাহকে স্মরণ করতেন না, এ কথা কল্পনাও করা যায় না। তাহলে আদেশটির মানে দাঁড়ায় জিকিরে লেগে থাকা, তাতে কোনো ঢিলেমি না আসা। এটা তখনই সম্ভব, যখন জিকিরকে নেওয়া হয় সবচেয়ে প্রশস্ত অর্থে। জিহ্বায় নাম উচ্চারণ, অন্তরে স্মরণ, আর শরীরকে আল্লাহর হুকুম পালনে ব্যস্ত রাখা, সবই এর ভেতরে। এরপর সে আয়েশা (রাঃ)-এর একটি বর্ণনা আনে। ইমাম মুসলিম সেটি তাঁর সহীহ মুসলিমে (৩৭৩) এনেছেন এই ভাষায়: 'নবী ﷺ তাঁর সব মুহূর্তে আল্লাহকে স্মরণ করতেন।'"
          },
          {
            "en": "Ma'arif squares the report with others: the Prophet ﷺ did not make dhikr with his tongue while relieving himself, but remembrance of the heart is possible at every moment. Quoting Shaikh Thanawi, it divides that inward remembrance in two: one carried in words formed in the mind, and one made by reflecting on the attributes of Allah's perfection. It also takes the word 'name' as approving the repetition of the name Allah as dhikr, and records that some scholars call that practice an innovation, a view it rejects. The disagreement is Ma'arif's to report; this article takes no side.",
            "bn": "অন্য বর্ণনাগুলোর সঙ্গে মাআরিফ এর মিল দেখায় এভাবে: প্রাকৃতিক প্রয়োজন সারার সময় নবী ﷺ মুখে জিকির করতেন না, কিন্তু অন্তরের জিকির প্রতিটি মুহূর্তেই সম্ভব। শায়খ থানভীর বরাতে সে এই ভেতরের জিকিরকে দুই ভাগে ভাগ করে। একটি চলে মনে গড়া শব্দের মাধ্যমে, আরেকটি আল্লাহর পূর্ণতার গুণাবলি নিয়ে চিন্তা করে। 'নাম' শব্দটি থেকে মাআরিফ আরও বোঝে যে আল্লাহ, আল্লাহ বলে নাম জপ করাও জিকির। সে জানায়, কিছু আলেম এ চর্চাকে বিদআত বলেন, আর সে মতটি সে মানে না। মতভেদটি মাআরিফের বর্ণনা। এ লেখা কোনো পক্ষ নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word for Severing",
          "bn": "কেটে আলাদা করার শব্দ"
        },
        "p": [
          {
            "en": "The second command turns on the root b-t-l. Al-Qurtubi defines it: battaltu sh-shay', I cut the thing. Hence the Arabs call a final divorce batta batla, and a charity batta batla, meaning it is separated from its owner, his ownership of it cut away entirely. Al-Baghawi gives the same charity example: a sadaqah that is batta is cut off from its owner, who has no further claim on it. He calls the sense of cutting oneself off to Allah in worship the root of the whole matter.",
            "bn": "দ্বিতীয় আদেশটি দাঁড়িয়ে আছে ব-ত-ল ধাতুর ওপর। কুরতুবী এর সংজ্ঞা দেন: বাত্তালতুশ শাই, আমি জিনিসটা কেটে ফেললাম। এ থেকেই আরবরা চূড়ান্ত তালাককে বলে বাত্তা বাতলা। এমন সদকাকেও বলে বাত্তা বাতলা, যা মালিকের কাছ থেকে আলাদা হয়ে গেছে, তার মালিকানা পুরোপুরি কেটে গেছে। বাগাভীও সদকার একই উদাহরণ দেন: বাত্তা সদকা মালিক থেকে বিচ্ছিন্ন, তাতে আর তার কোনো দাবি থাকে না। তাঁর মতে ইবাদতে আল্লাহর দিকে নিজেকে কেটে নেওয়াই এ বিষয়ের মূল অর্থ।"
          },
          {
            "en": "From the same root, at-Tabari and al-Qurtubi both note, Maryam, the mother of 'Isa (AS), was called al-Batul, for her cutting herself off to Allah. At-Tabari adds that a worshipper cut off from the world for Allah's worship is said to have tabattala. Al-Qurtubi notes that a monk is called mutabattil, for his withdrawal from people and his solitude in worship, and quotes a line of verse that likens a light in the evening dark to the lamp of a mutabattil monk. He reports Ibn 'Arafah's view that the original Arab sense is singling oneself out, but judges the sense of cutting the stronger.",
            "bn": "তাবারী ও কুরতুবী দুজনেই বলেন, এই ধাতু থেকেই ঈসা (আঃ)-এর মা মারইয়ামকে বলা হয় আল-বাতূল, কারণ তিনি নিজেকে আল্লাহর জন্য আলাদা করে নিয়েছিলেন। তাবারী যোগ করেন, যে আবেদ দুনিয়া আর তার উপায়-উপকরণ ছেড়ে আল্লাহর ইবাদতে নিজেকে সঁপে দেয়, তার সম্পর্কে বলা হয়: সে তাবাত্তুল করেছে। কুরতুবী জানান, পাদ্রিকে বলা হয় মুতাবাত্তিল, কারণ সে মানুষ থেকে সরে একা ইবাদত করে। সাক্ষী হিসেবে তিনি একটি কবিতার চরণ আনেন, যেখানে সন্ধ্যার অন্ধকারে এক আলোকে তুলনা করা হয়েছে মুতাবাত্তিল পাদ্রির প্রদীপের সঙ্গে। ইবন আরাফার মতে আরবদের কাছে শব্দটির মূল অর্থ একা হয়ে যাওয়া। তবে কুরতুবীর বিচারে কেটে ফেলার অর্থটিই বেশি জোরালো।"
          }
        ]
      },
      {
        "h": {
          "en": "Sincerity, Striving, Free Time",
          "bn": "ইখলাস, সাধনা, অবসর"
        },
        "p": [
          {
            "en": "What, then, is the Prophet ﷺ told to do? The largest group says: make your worship sincere. Ibn Kathir lists Ibn 'Abbas, Mujahid, Abu Salih, 'Atiyyah, ad-Dahhak and as-Suddi for akhlis lahu l-'ibadah. At-Tabari gives the chains, from Ibn 'Abbas by two routes, from Mujahid by several, from Abu Yahya al-Makki and from ad-Dahhak, each saying akhlis lahu ikhlasan, be wholly sincere to Him. In one route from Mujahid the sincerity is made specific: make your asking and your supplication His alone. Qatadah says: make worship and supplication sincere to Him.",
            "bn": "তাহলে নবী ﷺ-কে কী করতে বলা হলো? সবচেয়ে বড় দলটির জবাব: ইবাদতকে খাঁটি করো। ইবন কাসীর এ মতের ধারক হিসেবে নাম দেন ইবন আব্বাস (রাঃ), মুজাহিদ, আবু সালিহ, আতিয়্যা, দাহহাক ও সুদ্দীর: আখলিস লাহুল ইবাদাহ। তাবারী সনদগুলো দেন। ইবন আব্বাস (রাঃ) থেকে দুই সূত্রে, মুজাহিদ থেকে কয়েক সূত্রে, আবু ইয়াহইয়া মাক্কী ও দাহহাক থেকেও। সবার কথা একটাই: আখলিস লাহু ইখলাসা, পুরোপুরি তাঁর জন্য খাঁটি হও। মুজাহিদের এক সূত্রে ইখলাসটা নির্দিষ্ট করে বলা আছে: তোমার চাওয়া আর দোয়া হোক কেবল তাঁরই কাছে। কাতাদা বলেন, ইবাদত আর দোয়া তাঁর জন্য খাঁটি করো।"
          },
          {
            "en": "Others stress effort and time. Al-Hasan says: battil nafsaka wa-jtahid, devote yourself and strive. Ibn Zayd says: give your free time to His worship. In at-Tabari's report he adds, how fine a thing is devotion to Allah, and recites 94:7 and 94:8, so when you are free, labour on, and to your Lord turn in longing, explaining the first as when you are free of jihad. Ibn Kathir builds his own gloss on these verses: when your work and worldly needs are done, give yourself to His worship, so that your mind is at rest.",
            "bn": "অন্যরা জোর দেন পরিশ্রম আর সময়ের ওপর। হাসান বলেন: বাত্তিল নাফসাকা ওয়াজতাহিদ, নিজেকে সঁপে দাও আর সাধনা করো। ইবন যায়দ বলেন, অবসর সময়টা তাঁর ইবাদতে দাও। তাবারীর বর্ণনায় তিনি আরও বলেন, আল্লাহর জন্য তাবাত্তুল কতই না চমৎকার! তারপর পড়েন ৯৪:৭ ও ৯৪:৮: যখন অবসর পাও, পরিশ্রম করো, আর রবের দিকেই আগ্রহ নিয়ে মন দাও। প্রথম অংশের ব্যাখ্যা দেন এভাবে: জিহাদ থেকে অবসর পেলে। ইবন কাসীর এ আয়াত দুটির ওপর নিজের ব্যাখ্যা দাঁড় করান। কাজ আর দুনিয়ার প্রয়োজন মিটে গেলে নিজেকে তাঁর ইবাদতে লাগাও, যাতে মন নির্ভার থাকে।"
          },
          {
            "en": "Al-Baghawi adds two more. Sufyan said: tawakkal 'alayhi tawakkulan, rely on Him completely. Zayd ibn Aslam said: tabattul is rejecting the world and what is in it and seeking what is with Allah; Ma'arif al-Qur'an, citing al-Mazhari, gives the same words from Ibn Zayd. At-Tabari's own gloss joins need and worship: cut yourself off to Him for your needs and your worship, apart from all else. As-Sa'di describes the inner side: it is the heart's parting from created things and its being marked by love of Allah and of all that draws near to Him. These are emphases held by different names, and none is ranked here.",
            "bn": "বাগাভী আরও দুটি মত যোগ করেন। সুফিয়ান বলেছেন: তাওয়াক্কাল আলাইহি তাওয়াক্কুলা, পুরোপুরি তাঁর ওপর ভরসা করো। যায়দ ইবন আসলাম বলেছেন, তাবাত্তুল হলো দুনিয়া ও তার সবকিছু প্রত্যাখ্যান করা আর আল্লাহর কাছে যা আছে তা খোঁজা। মাআরিফুল কুরআন মাযহারীর বরাতে একই কথা আনে ইবন যায়দের নামে। তাবারীর নিজের ব্যাখ্যায় প্রয়োজন আর ইবাদত এক সঙ্গে এসেছে: বাকি সব ছেড়ে নিজের প্রয়োজন আর ইবাদত নিয়ে তাঁর দিকেই একাগ্র হও। সা'দী বলেন ভেতরের দিকটা: সৃষ্টি থেকে অন্তরের বিচ্ছেদ, আর আল্লাহর ভালোবাসায় এবং তাঁর নিকটে নেওয়া সবকিছুর ভালোবাসায় রঙিন হওয়া। এগুলো ভিন্ন ভিন্ন জনের ভিন্ন ভিন্ন জোর। এখানে কোনোটাকে এগিয়ে রাখা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Tabtil Where Tabattul Was Due",
          "bn": "তাবাত্তুলের জায়গায় তাবতীল"
        },
        "p": [
          {
            "en": "The verse closes on a verbal noun that does not match its verb. Al-Qurtubi puts the question a careful listener would ask: how does it say tabtilan and not tabattulan? His answer is that the meaning of tabattal is battala nafsahu, he severed himself, so the noun came according to that meaning, while also keeping faith with the rhyme that closes the surah's verses.",
            "bn": "আয়াতটি শেষ হয়েছে এমন এক ক্রিয়াবিশেষ্যে, যা তার ক্রিয়ার সঙ্গে মেলে না। মনোযোগী শ্রোতার মনে যে প্রশ্ন জাগে, কুরতুবী সেটাই তোলেন: তাবাত্তুলান না বলে তাবতীলান বলা হলো কেন? তাঁর জবাব, তাবাত্তাল শব্দের অর্থই হলো বাত্তালা নাফসাহু, সে নিজেকে কেটে আলাদা করল। তাই বিশেষ্যটি এসেছে সেই অর্থ ধরে। সঙ্গে রক্ষা হয়েছে সূরার আয়াতগুলোর শেষের ছন্দও।"
          },
          {
            "en": "Al-Baghawi explains the form the same way. Tabtil is a taf'il of the root: battaltuhu fa-tabattala, I severed it and it was severed. The meaning, he says, is battil nafsaka ilayhi, sever your own self towards Him, and that is why the verse says tabtila. On both readings the noun folds an active sense into the command: not only be devoted, but take your own self and hand it over.",
            "bn": "বাগাভীও রূপটির একই ব্যাখ্যা দেন। তাবতীল এই ধাতুর তাফঈল রূপ: বাত্তালতুহু ফাতাবাত্তালা, আমি তাকে কেটে আলাদা করলাম, ফলে সে আলাদা হলো। তাঁর মতে অর্থ হলো বাত্তিল নাফসাকা ইলাইহি, নিজেকে কেটে তাঁর দিকে নিয়ে যাও, আর এ কারণেই আয়াতে এসেছে তাবতীলা। দুজনের ব্যাখ্যাতেই বিশেষ্যটি আদেশের ভেতর একটা সক্রিয় অর্থ ঢুকিয়ে দেয়। শুধু নিবেদিত হও না, নিজের সত্তাটাকে নিজ হাতে তুলে দাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Commanded Here, Forbidden There",
          "bn": "এখানে আদেশ, সেখানে নিষেধ"
        },
        "p": [
          {
            "en": "The same word appears in a narration as something the Prophet ﷺ forbade. At-Tabari mentions the report that he forbade tabattul; Ibn Kathir, citing Ibn Jarir, defines that tabattul as cutting off to worship and abandoning marriage; al-Qurtubi, as cutting oneself off from people and congregations. None names a narrator or collection. Al-Bukhari records a report on it from Sa'd ibn Abi Waqqas (RA) in his Sahih (5073), in full: 'The Messenger of Allah ﷺ turned down tabattul for 'Uthman ibn Maz'un, and had he permitted it to him, we would have castrated ourselves.'",
            "bn": "এই শব্দটিই এক বর্ণনায় এসেছে এমন কিছু হিসেবে, যা নবী ﷺ নিষেধ করেছেন। তাবারী উল্লেখ করেন সেই বর্ণনা, তিনি তাবাত্তুল নিষেধ করেছেন। ইবন কাসীর ইবন জারীরের বরাতে ওই তাবাত্তুলের অর্থ বলেন: ইবাদতে ডুবে বিয়ে ছেড়ে দেওয়া। কুরতুবীর মতে, মানুষ আর জামাত থেকে নিজেকে বিচ্ছিন্ন করা। তিনজনের কেউ বর্ণনাকারী বা গ্রন্থের নাম বলেননি। ইমাম বুখারী তাঁর সহীহ বুখারীতে (৫০৭৩) এ বিষয়ে সা'দ ইবন আবী ওয়াক্কাস (রাঃ)-এর একটি বর্ণনা এনেছেন। পুরোটা এই: 'রাসূলুল্লাহ ﷺ উসমান ইবন মাযঊনের তাবাত্তুলের আবেদন ফিরিয়ে দিয়েছিলেন। তিনি অনুমতি দিলে আমরা নিজেদের খাসি করে ফেলতাম।'"
          },
          {
            "en": "How can the Qur'an command what the Sunnah forbids? Al-Qurtubi quotes Ibn al-'Arabi: the object of the command is not the object of the prohibition, so the two do not clash, and the Prophet ﷺ was sent to make plain what was revealed. The tabattul commanded is cutting off to Allah by sincere worship, as in 98:5: they were commanded only to worship Allah, sincere to Him in religion. The tabattul forbidden is following the Christians' path of leaving marriage and living as monks in cells. Al-Qurtubi also points back to 5:87: do not forbid the good things Allah has made lawful.",
            "bn": "কুরআন যা আদেশ করে, সুন্নাহ তা নিষেধ করে কীভাবে? কুরতুবী ইবনুল আরাবীর কথা উদ্ধৃত করেন। আদেশ যে জিনিসের, নিষেধ সে জিনিসের নয়, তাই এ দুইয়ের মধ্যে কোনো বিরোধ নেই। আর নবী ﷺ-কে পাঠানোই হয়েছে নাযিল হওয়া কথা মানুষকে খুলে বলার জন্য। যে তাবাত্তুলের আদেশ এসেছে, তা হলো খাঁটি ইবাদতের মাধ্যমে আল্লাহর দিকে একাগ্র হওয়া, যেমন ৯৮:৫ আয়াতে আছে: তাদের শুধু এ আদেশই দেওয়া হয়েছিল যে তারা দ্বীনকে তাঁর জন্য খাঁটি করে আল্লাহর ইবাদত করবে। আর নিষিদ্ধ তাবাত্তুল হলো খ্রিস্টানদের পথ ধরে বিয়ে ছেড়ে আশ্রমে সন্ন্যাসী হয়ে থাকা। কুরতুবী এখানে ৫:৮৭ আয়াতের আলোচনার দিকেও ইঙ্গিত করেন: আল্লাহ যা হালাল করেছেন, সেই পবিত্র জিনিসগুলো হারাম করো না।"
          },
          {
            "en": "Ma'arif al-Qur'an draws the same line with another verse. The tabattul enjoined here, it says, is wholly different from the monasticism the Qur'an censures in 57:27, which they invented. Monasticism in the Shari'ah's terms means giving up lawful, pure things in the belief that this is worship, or cutting ties so that people's rights are neglected. The tabattul of this verse means that one's ties with people must never overpower one's tie with Allah, and it sits easily with trade, contracts, marriage and family. Ma'arif calls it the mark of all the prophets, which the elders also name ikhlas.",
            "bn": "মাআরিফুল কুরআন একই সীমারেখা টানে আরেকটি আয়াত দিয়ে। এখানে যে তাবাত্তুলের আদেশ, তা ৫৭:২৭ আয়াতে নিন্দিত বৈরাগ্য থেকে সম্পূর্ণ আলাদা, যে বৈরাগ্য তারা নিজেরাই উদ্ভাবন করেছিল। শরীয়তের পরিভাষায় বৈরাগ্য মানে হালাল ও পবিত্র জিনিস ছেড়ে দেওয়া এই বিশ্বাসে যে এটাই ইবাদত। কিংবা এমনভাবে সম্পর্ক ছিন্ন করা যাতে মানুষের হক নষ্ট হয়। এ আয়াতের তাবাত্তুল মানে মানুষের সঙ্গে সম্পর্ক যেন কখনো আল্লাহর সঙ্গে সম্পর্ককে ছাপিয়ে না যায়। ব্যবসা, লেনদেন, বিয়ে, পরিবার, কোনোটার সঙ্গেই এর বিরোধ নেই। মাআরিফ একে বলে সব নবীর বৈশিষ্ট্য, পূর্বসূরিরা যাকে ইখলাস নামেও ডাকেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Then Reliance Follows",
          "bn": "তারপর আসে ভরসা"
        },
        "p": [
          {
            "en": "The next verse, 73:9, completes the thought: Lord of the East and the West, there is no god but He, so take Him as Disposer of your affairs. Ibn Kathir explains that He owns and governs the affairs of east and west, and that just as you single Him out for worship, you should single Him out for reliance. He cites 11:123, so worship Him and rely on Him, and 1:5, You alone we worship and You alone we ask for help. The Muyassar ends its joint gloss of the two verses the same way: depend on Him and entrust your affairs to Him.",
            "bn": "পরের আয়াত ৭৩:৯ কথাটা পূর্ণ করে: তিনি পূর্ব ও পশ্চিমের রব, তিনি ছাড়া কোনো ইলাহ নেই, তাই তাঁকেই কার্যনির্বাহক হিসেবে গ্রহণ করো। ইবন কাসীর ব্যাখ্যা করেন, পূর্ব আর পশ্চিমের সব বিষয়ের মালিক ও পরিচালক তিনিই। ইবাদতে যেমন তাঁকে একক রাখো, ভরসাতেও তাঁকে একক রাখো। প্রমাণ হিসেবে তিনি আনেন ১১:১২৩, তাঁর ইবাদত করো আর তাঁর ওপর ভরসা রাখো, এবং ১:৫, আমরা শুধু তোমারই ইবাদত করি আর শুধু তোমারই সাহায্য চাই। মুয়াসসার দুই আয়াতের যৌথ ব্যাখ্যা শেষ করে একই কথায়: তাঁর ওপর নির্ভর করো আর নিজের সব বিষয় তাঁর হাতে সঁপে দাও।"
          },
          {
            "en": "Read together, the sources leave a shape rather than a single definition. The name is held on the tongue and in the heart; every rival claim is cut away; the worship that remains is sincere; and the next verse adds trust. The surah's last verse, 73:20, later eased the long night vigil itself. What this verse asks is not a cell or a vow, but a self that, through a crowded day, still belongs to one Lord.",
            "bn": "সব সূত্র একসঙ্গে পড়লে একটিমাত্র সংজ্ঞা নয়, একটা পূর্ণ ছবি পাওয়া যায়। নাম থাকে জিহ্বায় আর অন্তরে। প্রতিদ্বন্দ্বী সব দাবি কেটে ফেলা হয়। যে ইবাদত বাকি থাকে, তা খাঁটি। আর পরের আয়াত যোগ করে ভরসা। সূরার শেষ আয়াত ৭৩:২০ পরে রাত জাগার দীর্ঘ দায়িত্বটা হালকা করে দিয়েছে। এ আয়াত কোনো আশ্রম বা শপথ চায় না। চায় এমন এক সত্তা, যা ব্যস্ত দিনের ভেতরেও একজন রবেরই থাকে।"
          }
        ]
      }
    ]
  },
  "73:20": {
    "sections": [
      {
        "h": {
          "en": "The Surah Ends with Knowing",
          "bn": "সূরার শেষ কথা: তিনি জানেন"
        },
        "p": [
          {
            "en": "The last verse of al-Muzzammil runs to 78 Arabic words, far longer than any verse before it in the surah, and it opens on a statement rather than a command: inna rabbaka ya'lamu, your Lord knows. At-Tabari reads it as Allah telling His Prophet ﷺ that He knows he stands in prayer for nearly two thirds of the night, and for half of it and a third. The opening verses had set the measure; this verse reports how the measure was lived.",
            "bn": "সূরা মুযযাম্মিলের শেষ আয়াতে আরবি শব্দ ৭৮টি। সূরার আগের যেকোনো আয়াতের চেয়ে এটি অনেক দীর্ঘ। অথচ শুরু হয় কোনো হুকুম দিয়ে নয়, একটি খবর দিয়ে: ইন্না রাব্বাকা ইয়া'লামু, তোমার রব জানেন। তাবারীর ব্যাখ্যায় আল্লাহ এখানে তাঁর নবী ﷺ-কে জানাচ্ছেন, তিনি জানেন যে নবী রাতের প্রায় দুই-তৃতীয়াংশ নামাজে দাঁড়িয়ে থাকেন, কখনো অর্ধেক, কখনো এক-তৃতীয়াংশ। সূরার শুরুর আয়াতগুলো মাপ বেঁধে দিয়েছিল। এই আয়াত জানায়, সেই মাপ বাস্তবে কীভাবে পালিত হয়েছিল।"
          },
          {
            "en": "Al-Muyassar spells out the variation: less than two thirds at one time, half at another, a third at another, with a group of Companions standing with him. Ibn Kathir says none of it was by design; they simply could not keep the exact command steadily. As-Sa'di links the surah's two ends: the opening commanded the Messenger, his community follows him in rulings, and here Allah records that he and a group of believers obeyed.",
            "bn": "মুয়াসসার এই ওঠানামা খুলে বলে: কখনো দুই-তৃতীয়াংশের কিছু কম, কখনো অর্ধেক, কখনো এক-তৃতীয়াংশ, আর সাহাবীদের একটি দল তাঁর সঙ্গে দাঁড়াতেন। ইবন কাসীরের মতে এর কিছুই ইচ্ছাকৃত ছিল না। আসলে নির্দেশিত মাপ তাঁরা নিয়মিত ধরে রাখতে পারছিলেন না। সা'দী সূরার দুই প্রান্ত জুড়ে দেন। শুরুতে হুকুম ছিল রাসূলের প্রতি, আর বিধানে উম্মত তাঁকেই অনুসরণ করে। এখানে আল্লাহ লিখে রাখছেন, তিনি এবং মুমিনদের একটি দল সে হুকুম মেনেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Half and Third, Two Vowels",
          "bn": "নিসফ আর সুলুস: দুই হরকত"
        },
        "p": [
          {
            "en": "One small vowel changes the picture. At-Tabari reports that most readers of Medina and Basra read wa-nisfihi wa-thuluthihi in the genitive, joined to two thirds: you stand less than two thirds, and less than half and a third. Some readers of Mecca and most readers of Kufa read wa-nisfahu wa-thuluthahu in the accusative: you stand less than two thirds, and you stand half and a third. Al-Baghawi assigns the accusative to the people of Mecca and Kufa and the genitive to the rest. At-Tabari's verdict is that both are well-known readings, sound in meaning, and whoever reads either is right.",
            "bn": "একটিমাত্র হরকত ছবিটা বদলে দেয়। তাবারী জানান, মদীনা ও বসরার অধিকাংশ কারী পড়েছেন ওয়া নিসফিহী ওয়া সুলুসিহী, যের দিয়ে, দুই-তৃতীয়াংশের সঙ্গে জুড়ে। তখন অর্থ দাঁড়ায়: তুমি দুই-তৃতীয়াংশের কম দাঁড়াও, অর্ধেক আর এক-তৃতীয়াংশেরও কম। মক্কার কিছু কারী আর কুফার অধিকাংশ কারী পড়েছেন ওয়া নিসফাহু ওয়া সুলুসাহু, যবর দিয়ে। তখন অর্থ: তুমি দুই-তৃতীয়াংশের কম দাঁড়াও, আবার অর্ধেক ও এক-তৃতীয়াংশও দাঁড়াও। বাগাভী যবরের পাঠ দেন মক্কা ও কুফার লোকদের নামে, যেরের পাঠ বাকিদের নামে। তাবারীর রায়: দুটোই সুপরিচিত পাঠ, অর্থেও শুদ্ধ, যে কোনোটি পড়লেই পাঠক ঠিক।"
          },
          {
            "en": "Al-Qurtubi calls the genitive the reading of the general body of readers, chosen by Abu 'Ubayd and Abu Hatim, who tie it to the next phrase: if they could not keep count, how could they hit exactly half or a third? He names Ibn Kathir, the Meccan reader, and the Kufans for the accusative, and quotes al-Farra' calling it closer to correct, since after less than two thirds the verse names the lesser amounts themselves.",
            "bn": "কুরতুবীর বর্ণনায় যেরের পাঠ সাধারণ কারীদের পাঠ। আবু উবায়দ ও আবু হাতিম এটিকেই বেছে নিয়েছেন, আর যুক্তি টেনেছেন পরের বাক্য থেকে: যারা হিসাবই রাখতে পারে না, তারা ঠিক অর্ধেক বা এক-তৃতীয়াংশ দাঁড়াবে কীভাবে? যবরের পাঠ তিনি দেন মক্কার কারী ইবন কাসীর ও কুফাবাসীদের নামে। ফাররা এটিকে সঠিকের বেশি কাছাকাছি বলেছেন, কারণ দুই-তৃতীয়াংশের কম বলার পর আয়াত কম পরিমাণগুলোরই নাম নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hours Only He Can Count",
          "bn": "যে প্রহর গোনেন শুধু তিনি"
        },
        "p": [
          {
            "en": "Wallahu yuqaddiru al-layla wa-n-nahar: Allah measures the night and the day. Al-Qurtubi explains that He knows their true measures, while people know them only by estimate, where error enters. Then 'alima an lan tuhsuhu. Al-Qurtubi gives two senses: you could not know the true measures and stand by them, or you could not bear night prayer itself. He calls the first sounder, since the whole night was never made obligatory. At-Tabari takes the second, citing al-Hasan, Sa'id and Sufyan.",
            "bn": "ওয়াল্লাহু ইউকাদ্দিরুল লাইলা ওয়ান নাহার: আল্লাহই রাত ও দিনের মাপ ঠিক করেন। কুরতুবী বুঝিয়ে বলেন, প্রকৃত মাপ তিনিই জানেন। মানুষ জানে শুধু আন্দাজে, আর সেখানে ভুল ঢুকে পড়ে। এরপর আলিমা আন লান তুহসূহু। কুরতুবী এর দুটি অর্থ দেন। এক, প্রকৃত মাপ জেনে সেই অনুযায়ী দাঁড়ানো তোমাদের সাধ্যে নেই। দুই, রাতের নামাজই তোমরা বহন করতে পারবে না। প্রথম অর্থকে তিনি বেশি সঠিক বলেন, কারণ পুরো রাত দাঁড়ানো কখনো ফরজ ছিল না। তাবারী নেন দ্বিতীয় অর্থ, আর এর পক্ষে হাসান, সাঈদ ও সুফিয়ানের উদ্ধৃতি দেন।"
          },
          {
            "en": "Muqatil, cited by al-Qurtubi and al-Baghawi, describes the strain behind the phrase. A man could not tell when half the night had passed from a third, so he stood until morning for fear of falling short, until feet swelled. Ma'arif al-Qur'an adds that there were no clocks. As-Sa'di says Allah then eased it and commanded what was easy, whether that came out above the set measure or below it.",
            "bn": "কুরতুবী ও বাগাভী মুকাতিলের যে বর্ণনা আনেন, তাতে এই বাক্যের পেছনের কষ্টটা দেখা যায়। কেউ বুঝতে পারত না কখন রাতের অর্ধেক পেরোল আর কখন এক-তৃতীয়াংশ। কম পড়ে যাওয়ার ভয়ে সে ভোর পর্যন্ত দাঁড়িয়ে থাকত, শেষে পা ফুলে যেত। মাআরিফুল কুরআন যোগ করে, তখন ঘড়ি ছিল না। সা'দী বলেন, এরপর আল্লাহ বোঝা হালকা করলেন এবং যা সহজ তারই হুকুম দিলেন, নির্ধারিত মাপের চেয়ে বেশি হোক বা কম।"
          },
          {
            "en": "Fa-taba 'alaykum: so He turned to you. Al-Qurtubi gives two readings: He came back to them with pardon, which shows that some among them had left part of what was commanded; or He turned to them from the duty of standing once they were unable. The root of tawbah, he adds, is return: from heaviness to lightness, from hardship to ease. Ma'arif al-Qur'an takes it in that plain sense, naming His turning rather than a sin of theirs.",
            "bn": "ফাতাবা আলাইকুম: তাই তিনি তোমাদের দিকে ফিরলেন। কুরতুবী দুটি ব্যাখ্যা দেন। এক, তিনি ক্ষমা নিয়ে তাদের দিকে ফিরলেন। এতে বোঝা যায়, তাদের কেউ কেউ হুকুমের একাংশ ছেড়ে দিয়েছিল। দুই, তারা অক্ষম হয়ে পড়ায় তিনি দাঁড়ানোর ফরজ থেকে তাদের দিকে ফিরলেন। তিনি আরও বলেন, তওবার মূলে আছে ফিরে আসা: ভার থেকে হালকার দিকে, কঠিন থেকে সহজের দিকে। মাআরিফুল কুরআন শব্দটিকে এই সরল অর্থেই নেয়। সেখানে তওবা তাঁর ফিরে তাকানোর নাম, তাদের কোনো গুনাহর নাম নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading, or Praying?",
          "bn": "পাঠ, নাকি নামাজ?"
        },
        "p": [
          {
            "en": "Fa-qra'u ma tayassara min al-Qur'an: so recite what is easy of the Qur'an. Ibn Kathir says recitation stands for prayer, as in 17:110, where your salah means your recitation, so the sense is: stand at night for whatever is easy. Al-Qurtubi sets out two views: the command is recitation itself, within the night prayer; or it means pray what is easy, since prayer is called qur'an, as in qur'an al-fajr in 17:78. Ibn al-'Arabi, whom he quotes, prefers the second.",
            "bn": "ফাকরাউ মা তাইয়াসসারা মিনাল কুরআন: কুরআনের যতটুকু সহজ, পড়ো। ইবন কাসীর বলেন, পাঠ শব্দটি এখানে নামাজের জায়গায় এসেছে, যেমন ১৭:১১০ আয়াতে নামাজ বলতে কিরাআত বোঝানো হয়েছে। তাই অর্থ দাঁড়ায়: রাতে যতটুকু সহজ, নামাজে দাঁড়াও। কুরতুবী দুটি মত সাজিয়ে দেন। একটি মতে হুকুমটা পাঠেরই, রাতের নামাজের ভেতরে। অন্য মতে অর্থ, যতটুকু সহজ নামাজ পড়ো, কারণ নামাজকেও কুরআন বলা হয়, যেমন ১৭:৭৮ আয়াতে কুরআনাল ফাজর মানে ফজরের নামাজ। তিনি ইবনুল আরাবীর উদ্ধৃতি দেন, যিনি দ্বিতীয় মতটিকে প্রাধান্য দেন।"
          },
          {
            "en": "Al-Qurtubi himself prefers the first, taking the words at their plain sense and calling the second a figure of speech. At-Tabari joins both: recite at night, in your prayer, what is easy of the Qur'an, an easing of the duty set in 73:2 and 73:3. On how much is easy, the reports differ. At-Tabari cites al-Suddi for a hundred verses. Al-Qurtubi lists five views, from the whole Qur'an, attributed to al-Dahhak, down to 3 verses, from Abu Khalid al-Kinani.",
            "bn": "কুরতুবী নিজে প্রথম মতটিকে প্রাধান্য দেন। তিনি শব্দকে তার বাহ্যিক অর্থে নেন, আর দ্বিতীয় মতকে বলেন রূপক। তাবারী দুটোকে মিলিয়ে দেন: রাতে তোমাদের নামাজে কুরআনের যতটুকু সহজ, পড়ো। তাঁর মতে এটি ৭৩:২ ও ৭৩:৩ আয়াতে দেওয়া ফরজকে হালকা করা। কতটুকু সহজ, সে নিয়ে বর্ণনা ভিন্ন। তাবারী সুদ্দীর নামে আনেন একশো আয়াতের কথা। কুরতুবী পাঁচটি মত গুনিয়েছেন। সবচেয়ে বেশি পুরো কুরআন, যা দাহহাকের মত। সবচেয়ে কম ৩ আয়াত, যা আবু খালিদ আল-কিনানীর মত।"
          },
          {
            "en": "Al-Hasan al-Basri was asked about a man who knew the whole Qur'an by heart yet never stood with it at night. He answered harshly that such a man makes the Qur'an his pillow. When the verse was put to him, he said yes, even fifty verses in at-Tabari's copy of the report, even five in Ibn Kathir's; the number is left open here. As-Sa'di draws a gentler point: pray while you are lively, and when you flag or grow drowsy, rest, so that you come to the prayer settled.",
            "bn": "হাসান বসরীকে এক লোকের কথা জিজ্ঞেস করা হয়েছিল, যার পুরো কুরআন মুখস্থ, অথচ রাতে তা নিয়ে কখনো দাঁড়ায় না। তিনি কড়া ভাষায় বলেন, সে কুরআনকে বালিশ বানিয়ে নিয়েছে। আয়াতটি তাঁর সামনে তোলা হলে তিনি বলেন, হ্যাঁ, পঞ্চাশ আয়াত হলেও। এটা তাবারীর বর্ণনা। ইবন কাসীরের বর্ণনায় আছে পাঁচ আয়াত হলেও। তাই সংখ্যাটা এখানে খোলা রাখা হলো। সা'দী একটি কোমল শিক্ষা নেন। যতক্ষণ সতেজ থাকেন, নামাজ পড়ুন। ক্লান্তি বা ঝিমুনি এলে বিশ্রাম নিন, যাতে প্রশান্ত মনে নামাজে ফিরতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Phrase the Jurists Weighed",
          "bn": "ফকীহদের পাল্লায় একটি বাক্য"
        },
        "p": [
          {
            "en": "Because the command reads recite what is easy, jurists drew on it for a question of prayer: what is the least recitation that makes a prayer valid? Ibn Kathir reports that the companions of Imam Abu Hanifa argued from it that al-Fatiha is not specifically required, so one verse from anywhere in the Qur'an suffices, and that the majority answered with narrations naming al-Fatiha. Al-Qurtubi gives Malik and al-Shafi'i: al-Fatiha, with no substitute. For Abu Hanifa he gives one verse, with a second report of 3.",
            "bn": "হুকুমটা যেহেতু 'যতটুকু সহজ, পড়ো', তাই ফকীহগণ নামাজের একটি প্রশ্নে এ আয়াত কাজে লাগিয়েছেন: নামাজ শুদ্ধ হতে অন্তত কতটুকু কিরাআত লাগে? ইবন কাসীর জানান, ইমাম আবু হানীফার অনুসারীরা এ আয়াত থেকে যুক্তি দিয়েছেন যে সূরা ফাতিহা নির্দিষ্টভাবে আবশ্যক নয়। কুরআনের যেকোনো জায়গা থেকে এক আয়াতই যথেষ্ট। আর জমহুর আলেম ফাতিহার কথা স্পষ্ট বলা বর্ণনা দিয়ে জবাব দিয়েছেন। কুরতুবী দেন মালিক ও শাফেয়ীর মত: ফাতিহাই লাগবে, এর কোনো বিকল্প নেই। আবু হানীফার নামে তিনি দেন এক আয়াতের মত, আরেক বর্ণনায় ৩ আয়াত।"
          },
          {
            "en": "Al-Qurtubi calls the view of Malik and al-Shafi'i correct. He also records a third approach: that the verse means reciting outside prayer, and quotes al-Mawardi that most scholars then take it as recommended, while others take it as binding. These are the positions as the commentators give them; this article rules on none of them. Whoever needs a ruling for their own prayer should take it from the scholars of their school.",
            "bn": "কুরতুবী মালিক ও শাফেয়ীর মতকেই সঠিক বলেন। তিনি তৃতীয় একটি দৃষ্টিভঙ্গিও লিখে রাখেন: আয়াতের উদ্দেশ্য নামাজের বাইরে কুরআন পড়া। মাওয়ারদীর উদ্ধৃতি দিয়ে তিনি জানান, সে ক্ষেত্রে অধিকাংশ আলেম একে মুস্তাহাব ধরেন, অন্যরা ওয়াজিব বলেন। তাফসীরকারেরা যেভাবে দিয়েছেন, মতগুলো এখানে সেভাবেই রাখা হলো। এ লেখা কোনোটির পক্ষে রায় দিচ্ছে না। নিজের নামাজের জন্য যার মাসআলা দরকার, তিনি নিজের মাযহাবের আলেমদের কাছ থেকে নেবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "From Duty to Free Gift",
          "bn": "ফরজ থেকে নফল"
        },
        "p": [
          {
            "en": "Ibn Kathir names Ibn 'Abbas, 'Ikrima, Mujahid, al-Hasan and Qatada among the early scholars who said this verse abrogated the night prayer first made obligatory, and adds that they differed over the time between. At-Tabari gives Qatada's account: a year of standing, until feet swelled, then the lightening. Ma'arif al-Qur'an gives the gap as a year or eight months. 'A'isha (RA) gives the same account in a long narration in Sahih Muslim (746), answering a question about the night prayer of the Messenger ﷺ.",
            "bn": "ইবন কাসীর প্রথম যুগের কয়েকজন আলেমের নাম দেন: ইবন আব্বাস, ইকরিমা, মুজাহিদ, হাসান ও কাতাদা। তাঁদের মতে শুরুতে ফরজ করা রাতের নামাজের বিধান এ আয়াত রহিত করেছে। তিনি যোগ করেন, মাঝের সময় নিয়ে তাঁদের মতভেদ আছে। তাবারী আনেন কাতাদার বিবরণ: এক বছর দাঁড়ানো, এমনকি পা ফুলে যাওয়া, তারপর হালকা করার আয়াত। মাআরিফুল কুরআনে ব্যবধান এক বছর অথবা ৮ মাস। একই বিবরণ এসেছে আয়েশা (রাঃ) থেকে, সহীহ মুসলিমের (৭৪৬) এক দীর্ঘ বর্ণনায়। সেখানে রাসূল ﷺ-এর রাতের নামাজ নিয়ে প্রশ্নের জবাবে তিনি কথাটি বলেন।"
          },
          {
            "en": "She told Sa'd ibn Hisham: \"Allah, the Exalted and the Glorious, made the observance of the night prayer at the beginning of this Surah obligatory. So the Messenger of Allah (may peace be upon him) and his Companions around him observed this (night prayer) for one year. Allah held back the concluding portion of this Surah for twelve months in the Heaven till (at the end of this period) Allah revealed the concluding verses of this Surah which lightened (the burden of this prayer), and the night prayer became a supererogatory prayer after being an obligatory one.\"",
            "bn": "সা'দ ইবন হিশামকে তিনি বলেছিলেন: \"মহান আল্লাহ এই সূরার শুরুতে রাতের নামাজ ফরজ করেছিলেন। তখন আল্লাহর রাসূল ﷺ ও তাঁর চারপাশের সাহাবীরা ১ বছর ধরে রাতের নামাজ পড়েছেন। আল্লাহ এই সূরার শেষাংশ ১২ মাস আসমানে আটকে রেখেছিলেন। তারপর আল্লাহ এই সূরার শেষ আয়াতগুলো নাজিল করলেন, যা বোঝা হালকা করে দিল, আর রাতের নামাজ ফরজ থাকার পর নফল হয়ে গেল।\""
          },
          {
            "en": "Al-Qurtubi records a different timing: that the obligation lasted until after the Hijra and was lifted in Medina, since the verse mentions those who fight, and fighting was prescribed there. He quotes Ibn 'Abbas that when the Messenger ﷺ arrived, this verse abrogated it. Ibn Kathir reads the same clause the other way: the surah is Meccan, fighting had not yet been prescribed, so its mention of fighters is a sign of prophethood. The sources give a year, a year or eight months, and a Medinan date; all three are kept here.",
            "bn": "কুরতুবী সময় নিয়ে ভিন্ন একটি মতও লিখে রাখেন। সে মতে ফরজটি হিজরতের পর পর্যন্ত বহাল ছিল এবং মদীনায় রহিত হয়। কারণ আয়াতে যুদ্ধরতদের কথা আছে, আর যুদ্ধের বিধান এসেছে মদীনায়। তিনি ইবন আব্বাসের উক্তি আনেন: রাসূল ﷺ যখন এলেন, তখন এ আয়াত ফরজটি রহিত করল। একই বাক্য ইবন কাসীর পড়েন উল্টো দিক থেকে। সূরাটি মক্কী, যুদ্ধের বিধান তখনো আসেনি। তাই যোদ্ধাদের উল্লেখ নবুওয়াতের নিদর্শন। উৎসগুলোতে পাওয়া যায় এক বছর, এক বছর বা ৮ মাস, আর মদীনার সময়। তিনটি মতই এখানে রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Did It Stay Binding on Him?",
          "bn": "তাঁর উপর কি ফরজ রয়ে গেল?"
        },
        "p": [
          {
            "en": "A second question follows: whom did the lifting cover? Al-Qurtubi quotes Abu Nasr al-Qushayri that the well-known view is that abrogation was for the community, while the obligation remained for the Prophet ﷺ. Another view says only the fixed measure went and the basic duty stayed, as what is easy of sacrificial animals in 2:196 still requires an animal; on this, a small duty of night prayer remains, which al-Qurtubi gives as al-Hasan's position.",
            "bn": "এরপর আরেকটি প্রশ্ন: ছাড়টা কাদের জন্য? কুরতুবী আবু নাসর কুশাইরীর উদ্ধৃতি দেন। তাঁর ভাষায় প্রসিদ্ধ মত হলো, রহিত হওয়া উম্মতের ক্ষেত্রে, আর নবী ﷺ-এর ক্ষেত্রে ফরজ রয়ে গেছে। আরেক মতে শুধু নির্দিষ্ট মাপটা রহিত হয়েছে, মূল দায়িত্ব রয়ে গেছে। যেমন ২:১৯৬ আয়াতে 'কুরবানির পশু থেকে যা সহজ' বলার পরও পশু দিতেই হয়। এই মতে রাতের নামাজের অল্প একটি ফরজ এখনো বাকি। কুরতুবী এটিকে হাসানের মত বলে উল্লেখ করেন।"
          },
          {
            "en": "Others held that it was abrogated entirely, and al-Qurtubi gives this as al-Shafi'i's position, quoting his reasoning that the Sunnah shows no prayer obligatory except the five. Some extended this to the Prophet ﷺ too, taking nafilatan lak in 17:79 in its plain sense of voluntary. Ma'arif al-Qur'an reports from Ibn 'Abbas that basic tahajjud stayed obligatory until the five prayers came on the night of the Mi'raj, and says the overwhelming majority hold it lifted for the Prophet ﷺ and the community alike.",
            "bn": "অন্যদের মতে বিধানটি পুরোপুরি রহিত হয়েছে। কুরতুবী এটিকে শাফেয়ীর মত বলেন এবং তাঁর যুক্তি উদ্ধৃত করেন: সুন্নাহ দেখায়, পাঁচ ওয়াক্ত ছাড়া কোনো নামাজ ফরজ নয়। কেউ কেউ নবী ﷺ-এর ক্ষেত্রেও এটা বলেছেন। তাঁরা ১৭:৭৯ আয়াতের নাফিলাতাল লাক কথাটিকে নফলের সরল অর্থে নেন। মাআরিফুল কুরআন ইবন আব্বাস থেকে জানায়, মিরাজের রাতে পাঁচ ওয়াক্ত নামাজ আসা পর্যন্ত মূল তাহাজ্জুদ ফরজ ছিল। তার বক্তব্য, বিপুল সংখ্যাগরিষ্ঠের মতে নবী ﷺ ও উম্মত উভয়ের জন্যই ফরজটি উঠে গেছে।"
          },
          {
            "en": "So the two rankings point opposite ways: al-Qushayri calls the view that it stayed binding on the Prophet ﷺ the well-known one, and Ma'arif al-Qur'an calls its lifting the majority view. Each stays its author's judgement. Ibn Kathir closes the matter with a narration in Sahih al-Bukhari (46) from Talha ibn 'Ubaydullah: in the part he uses, the Prophet ﷺ tells a man of Najd that five prayers are due in the day and night, and nothing more unless he volunteers (described, not quoted). The door of voluntary standing stays open.",
            "bn": "তাহলে দুটি মূল্যায়ন দুই দিকে যায়। কুশাইরী বলেন, নবী ﷺ-এর উপর ফরজ রয়ে যাওয়ার মতটিই প্রসিদ্ধ। মাআরিফুল কুরআন বলে, ফরজ উঠে যাওয়াই সংখ্যাগরিষ্ঠের মত। দুটোই যার যার নিজের মূল্যায়ন হিসেবে রাখা হলো। ইবন কাসীর প্রসঙ্গটা শেষ করেন সহীহ বুখারীর (৪৬) একটি বর্ণনা দিয়ে, যা তালহা ইবন উবায়দুল্লাহ (রাঃ) থেকে এসেছে। নজদের এক লোক ইসলাম সম্পর্কে জানতে চেয়েছিল। ইবন কাসীর যে অংশটি নেন, তাতে নবী ﷺ দিনে ও রাতে পাঁচ ওয়াক্ত নামাজের কথা বলেন। এর বাইরে আর কিছু ফরজ কিনা জিজ্ঞেস করলে তিনি জানান, না, তবে কেউ স্বেচ্ছায় নফল পড়তে পারে। বর্ণনাটি আরও দীর্ঘ; এখানে শুধু এই অংশের বিবরণ দেওয়া হলো, উদ্ধৃতি নয়। নফল দাঁড়ানোর দরজা খোলাই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sick, the Trader, the Fighter",
          "bn": "অসুস্থ, ব্যবসায়ী, যোদ্ধা"
        },
        "p": [
          {
            "en": "The verse then names who the lightening is for: the sick, those travelling the land seeking Allah's bounty, and those fighting in His cause. At-Tabari reads each as someone worn down from night prayer, by illness, by a journey for a living, or by facing the enemy. As-Sa'di sees two lightenings here: one for the healthy resident, who follows his energy without fixing the hour, and one for the sick and the traveller, whose trip, for trade or for worship, earns a lighter load.",
            "bn": "আয়াত এরপর জানায়, ছাড়টা কাদের জন্য: অসুস্থ, আল্লাহর অনুগ্রহের খোঁজে দেশে দেশে সফরকারী, আর তাঁর পথে লড়াইরত মানুষ। তাবারীর ব্যাখ্যায় এরা প্রত্যেকে রাতের নামাজে দুর্বল হয়ে পড়া মানুষ। কাউকে অসুখ কাবু করেছে, কাউকে রুজির সফর, কাউকে শত্রুর মোকাবিলা। সা'দী এখানে দুই রকম ছাড় দেখেন। একটি সুস্থ, ঘরে থাকা মানুষের জন্য, যে সময় মাপার চাপ ছাড়াই নিজের উদ্যম অনুযায়ী নামাজ পড়বে। অন্যটি অসুস্থ আর মুসাফিরের জন্য, সফর ব্যবসার জন্য হোক বা ইবাদতের জন্য, তার বোঝাও হালকা।"
          },
          {
            "en": "Al-Qurtubi notes that the verse places those who earn lawful wealth beside those who fight in Allah's path, and takes this as a sign that earning lawful wealth stands level with jihad. Al-Baghawi and al-Qurtubi both cite Ibn Mas'ud's own words: whoever brings goods to a Muslim town, patient and seeking reward, and sells at the day's price, has the rank of the martyrs with Allah; then he recited this verse. As-Sa'di adds that a sick person for whom even voluntary prayer is hard may leave it.",
            "bn": "কুরতুবী লক্ষ করেন, আয়াতটি হালাল রুজি উপার্জনকারীদের আল্লাহর পথে লড়াইরতদের পাশে রেখেছে। তাঁর মতে এটা প্রমাণ যে হালাল সম্পদ উপার্জনের মর্যাদা জিহাদের সমান। বাগাভী ও কুরতুবী দুজনেই ইবন মাসউদ (রাঃ)-এর নিজের কথা আনেন: যে লোক ধৈর্য ধরে, সওয়াবের আশায় মুসলিমদের কোনো শহরে পণ্য নিয়ে আসে এবং সেদিনের দামে বিক্রি করে, আল্লাহর কাছে তার মর্যাদা শহীদদের মতো। তারপর তিনি এই আয়াত তিলাওয়াত করেন। সা'দী যোগ করেন, অসুস্থ মানুষের কাছে নফল নামাজও কঠিন হলে সে তা ছেড়ে দিতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Kept Whole, Then Forgiven",
          "bn": "যা অটুট থাকে, তারপর ইস্তিগফার"
        },
        "p": [
          {
            "en": "What is lightened is the night vigil; what follows is not. At-Tabari reads establish prayer as the five obligatory prayers and give zakah as the zakah due on wealth, and cites Qatada: two binding obligations, with no concession for anyone. For the goodly loan he cites Ibn Zayd: voluntary giving beyond zakah. Al-Qurtubi adds 'Umar's view: spending in Allah's cause.",
            "bn": "হালকা হয়েছে রাতের দীর্ঘ জাগরণ, পরের হুকুমগুলো নয়। তাবারীর ব্যাখ্যায় নামাজ কায়েম করো মানে পাঁচ ওয়াক্ত ফরজ নামাজ, আর যাকাত দাও মানে সম্পদের ফরজ যাকাত। তিনি কাতাদার কথা আনেন: এ দুটি অবশ্যপালনীয় ফরজ, কারও জন্য এতে কোনো ছাড় নেই। উত্তম ঋণের ব্যাখ্যায় তিনি ইবন যায়দের কথা আনেন: যাকাতের বাইরে নফল দান। কুরতুবী যোগ করেন উমর (রাঃ)-এর মত: আল্লাহর পথে খরচ করা।"
          },
          {
            "en": "The verse ends with seek Allah's forgiveness. As-Sa'di sees great benefit in placing it right after the commands to obey and do good: a servant is never free of falling short in what he is commanded, either leaving it or doing it imperfectly, so he is told to patch that with istighfar. Even the eased measure will be kept imperfectly. The last word of the surah is that Allah is Forgiving, Merciful.",
            "bn": "আয়াত শেষ হয় এই হুকুমে: আল্লাহর কাছে ক্ষমা চাও। সা'দী এর বড় উপকারিতা দেখেন এখানে যে আনুগত্য আর নেক কাজের হুকুমের ঠিক পরেই এটা এসেছে। বান্দা কখনো হুকুম পালনে ঘাটতিমুক্ত থাকে না। হয় সে কাজটা করেই না, নয়তো অসম্পূর্ণভাবে করে। তাই ইস্তিগফার দিয়ে সেই ফাঁক জোড়া লাগাতে বলা হয়েছে। হালকা করে দেওয়া মাপও আমরা নিখুঁতভাবে রাখতে পারব না। সূরার শেষ কথা: আল্লাহ ক্ষমাশীল, পরম দয়ালু।"
          }
        ]
      }
    ]
  }
});
