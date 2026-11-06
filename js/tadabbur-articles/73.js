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
  "73:9": {
    "sections": [
      {
        "h": {
          "en": "A Description Before the Command",
          "bn": "নির্দেশের আগে পরিচয়"
        },
        "p": [
          {
            "en": "Rabbu al-mashriqi wa-l-maghribi, la ilaha illa huwa, fa-ttakhidhhu wakila: Lord of the East and the West; there is no god but He, so take Him as Disposer of your affairs. The verse is nine words in Arabic and moves in three steps: a description of the Lord, a declaration of His oneness, and a command drawn from both with the particle fa, so. The command is in the singular and addressed to the Prophet ﷺ, continuing the instructions that open the surah, which have their own articles and are not retold here.",
            "bn": "রাব্বুল মাশরিকি ওয়াল মাগরিবি, লা ইলাহা ইল্লা হুওয়া, ফাত্তাখিযহু ওয়াকীলা: তিনি পূর্ব ও পশ্চিমের রব, তিনি ছাড়া কোনো ইলাহ নেই, অতএব তাঁকেই আপনার কাজের ভারপ্রাপ্ত হিসেবে গ্রহণ করুন। আরবিতে আয়াতটি নয়টি শব্দের, আর এগোয় তিনটি ধাপে। প্রথমে রবের পরিচয়, তারপর তাঁর একত্বের ঘোষণা, শেষে ফা, অর্থাৎ অতএব, দিয়ে এ দুটো থেকে টেনে আনা নির্দেশ। নির্দেশটি একবচনে, নবী ﷺ-কে সম্বোধন করে। সূরার শুরুর নির্দেশগুলোরই এটি ধারাবাহিকতা। সেগুলোর আলাদা প্রবন্ধ আছে, এখানে আর পুনরাবৃত্তি করা হচ্ছে না।"
          },
          {
            "en": "Ma'arif al-Qur'an counts this as the fifth injunction given to the Prophet ﷺ in the surah. It reports from Imam Ya'qub Karkhi that the verses from the opening up to this verse trace the stations of the spiritual path: solitude at night for worship, preoccupation with the Qur'an, constant remembrance of Allah, severance from everything other than Allah, and total trust in Him. On that reading trust is the last of the five, and before it is commanded, Allah's attribute is stated: He is the Lord of the East and the West.",
            "bn": "মাআরিফুল কুরআনের হিসাবে এ সূরায় নবী ﷺ-কে দেওয়া নির্দেশের মধ্যে এটি পঞ্চম। ইমাম ইয়াকুব কারখী থেকে সেখানে বর্ণিত আছে, সূরার শুরু থেকে এ আয়াত পর্যন্ত আধ্যাত্মিক পথের স্তরগুলোর কথা এসেছে। রাতে নির্জনে ইবাদত, কুরআনে মগ্ন থাকা, সারাক্ষণ আল্লাহর জিকির, আল্লাহ ছাড়া সবকিছু থেকে সম্পর্ক ছিন্ন করা, আর তাঁর উপর পূর্ণ ভরসা। এ পাঠে ভরসা পাঁচ স্তরের শেষটি। আর সে নির্দেশের আগে আয়াত আল্লাহর গুণটি জানিয়ে দেয়: তিনি পূর্ব ও পশ্চিমের রব।"
          }
        ]
      },
      {
        "h": {
          "en": "Rabbu or Rabbi",
          "bn": "রাব্বু, নাকি রাব্বি"
        },
        "p": [
          {
            "en": "The first word is read two ways, and three of the commentators record it. At-Tabari says the readers of Madinah generally read rabbu, in the nominative, as the start of a new sentence, since one complete verse had ended and another begun. The readers of Kufa generally read rabbi, in the genitive, as a description, referring back to the pronoun in ilayhi, to Him, at the end of 73:8. His verdict is that both are known readings, each read by learned reciters, so whoever reads either one is correct.",
            "bn": "প্রথম শব্দটি দুইভাবে পড়া হয়, আর তিনজন তাফসীরকার তা উল্লেখ করেছেন। তাবারী বলেন, মদীনার কারীরা সাধারণত পড়েছেন রাব্বু, পেশ দিয়ে, নতুন বাক্যের শুরু হিসেবে। কারণ একটি পূর্ণ আয়াত শেষ হয়ে আরেকটি শুরু হয়েছে। কূফার কারীরা সাধারণত পড়েছেন রাব্বি, যের দিয়ে, বিশেষণ হিসেবে। তা ফিরে যায় ৭৩:৮ আয়াতের শেষে ইলাইহি, অর্থাৎ তাঁর দিকে, শব্দের সর্বনামের দিকে। তাবারীর রায়: দুটোই পরিচিত কিরাআত, প্রতিটিই বিজ্ঞ কারীরা পড়েছেন। তাই যে-কোনোটি পড়লেই পাঠক সঠিক।"
          },
          {
            "en": "Al-Qurtubi gives fuller lists. Rabbu, in the nominative, was read by the people of the two Holy Cities, Ibn Muhaysin, Mujahid, Abu 'Amr, Ibn Abi Ishaq and Hafs: a subject whose predicate is la ilaha illa huwa, or, as others say, the predicate of an understood huwa, He. The rest read rabbi, as a description of the Lord in 73:8, wa-dhkuri sma rabbika, remember the name of your Lord, Lord of the East. Al-Baghawi gives the same division: the people of the Hijaz, Abu 'Amr and Hafs read rabbu, and the others rabbi.",
            "bn": "কুরতুবী তালিকা দেন আরও বিস্তারিত। পেশ দিয়ে রাব্বু পড়েছেন দুই হারামের লোকেরা, ইবন মুহাইসিন, মুজাহিদ, আবু আমর, ইবন আবী ইসহাক ও হাফস। তাঁদের পাঠে শব্দটি উদ্দেশ্য, আর তার বিধেয় লা ইলাহা ইল্লা হুওয়া। কারও মতে এটি উহ্য হুওয়া, অর্থাৎ তিনি, শব্দের বিধেয়। বাকিরা পড়েছেন রাব্বি, ৭৩:৮ আয়াতের রবের বিশেষণ হিসেবে: ওয়াযকুরিসমা রাব্বিকা, তোমার রবের নাম স্মরণ করো, যিনি পূর্বের রব। বাগাভীও একইভাবে ভাগ করেন। হিজাযের লোকেরা, আবু আমর ও হাফস পড়েছেন রাব্বু, অন্যরা রাব্বি।"
          },
          {
            "en": "The two accounts of the genitive differ in one detail. At-Tabari attaches rabbi to the pronoun in ilayhi; al-Qurtubi and al-Baghawi attach it to rabbika, a few words earlier in that same verse, 73:8. The sense is unchanged either way: the Lord just named is the Lord of the East and the West. The Arabic text printed in this app reads rabbu, the reading of Hafs, and its English supplies the understood subject: [He is] the Lord. In the genitive reading the verse simply runs on from 73:8 without a break.",
            "bn": "যের-পাঠের দুই ব্যাখ্যায় একটা জায়গায় পার্থক্য আছে। তাবারী রাব্বি-কে যুক্ত করেন ইলাইহি-র সর্বনামের সঙ্গে। কুরতুবী ও বাগাভী যুক্ত করেন ৭৩:৮ আয়াতেরই কয়েক শব্দ আগের রাব্বিকা শব্দের সঙ্গে। অর্থ অবশ্য দুই ক্ষেত্রেই এক: এইমাত্র যে রবের নাম এল, তিনিই পূর্ব ও পশ্চিমের রব। এই অ্যাপে ছাপা আরবি পাঠ রাব্বু, হাফসের কিরাআত। তার ইংরেজি অনুবাদ উহ্য উদ্দেশ্যটি যোগ করে নেয়: (তিনি) রব। যের-পাঠে আয়াতটি কোনো বিরতি ছাড়াই ৭৩:৮ থেকে টানা চলে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Horizons and All Between",
          "bn": "দুই দিগন্ত ও মাঝের সবকিছু"
        },
        "p": [
          {
            "en": "What does Lord of the East and the West take in? At-Tabari gives the sense as the Lord of the East and the West and whatever of the world lies between them, close to the words Musa (AS) used before Pharaoh in 26:28. Ibn Kathir, in the Arabic, explains the phrase as the Owner who disposes of affairs in the easts and the wests, moving to the plural in his gloss. The Muyassar, explaining 73:8 and 73:9 together, keeps the singular: He is the Owner of the East and the West.",
            "bn": "পূর্ব ও পশ্চিমের রব, এ কথার পরিধি কতখানি? তাবারী অর্থ করেন: পূর্ব ও পশ্চিম এবং এ দুয়ের মাঝে জগতের যা কিছু আছে, তার রব। ২৬:২৮ আয়াতে ফেরাউনের সামনে মূসা (আঃ) প্রায় এই কথাই বলেছিলেন। ইবন কাসীর আরবি তাফসীরে ব্যাখ্যা করেন, তিনিই সেই মালিক, যিনি পূর্বসমূহ ও পশ্চিমসমূহে সব বিষয় পরিচালনা করেন। লক্ষ করুন, ব্যাখ্যায় তিনি বহুবচনে চলে গেছেন। মুয়াসসার ৭৩:৮ ও ৭৩:৯ একসঙ্গে ব্যাখ্যা করে একবচনই রাখে: তিনি পূর্ব ও পশ্চিমের মালিক।"
          },
          {
            "en": "As-Sa'di reads the singular broadly. The East and the West here, he says, are a generic noun, ism jins, that takes in all the easts and all the wests. He is the Lord of them, of the lights that come to be in them, and of what in the upper and lower worlds they serve; so He is the Lord of everything, its Creator and its Disposer. The horizons, in this gloss, are not two points on a map but every place of rising and setting, the light that appears in each, and all that it serves.",
            "bn": "সা'দী একবচনটিকে পড়েন বিস্তৃত অর্থে। তাঁর কথায়, এখানে পূর্ব ও পশ্চিম ইসমে জিনস, অর্থাৎ জাতিবাচক বিশেষ্য। তা সব পূর্ব আর সব পশ্চিমকে ধারণ করে। তিনি সেগুলোর রব, সেখানে যে আলো দেখা দেয় তার রব, আর ঊর্ধ্বজগৎ ও নিম্নজগতের যা কিছুর কল্যাণ তাতে জড়িত, তারও রব। সুতরাং তিনি সবকিছুর রব, সবকিছুর স্রষ্টা ও পরিচালক। এ ব্যাখ্যায় দিগন্ত মানচিত্রের দুটি বিন্দু নয়। প্রতিটি উদয়স্থল ও অস্তস্থল, সেখানে দেখা দেওয়া আলো, আর সে আলো যা কিছুর কাজে লাগে, সবই এর ভেতরে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "One, Two, Many Horizons",
          "bn": "এক, দুই, বহু দিগন্ত"
        },
        "p": [
          {
            "en": "The Qur'an names the horizons in three numbers, and this is the article's own observation rather than a commentator's. Here, as in 26:28 and 2:115, the East and the West are singular. In 55:17 they are dual: Lord of the two risings and Lord of the two settings. In 70:40 they are plural: I swear by the Lord of the risings and the settings; 37:5 likewise speaks of the Lord of the risings. Each form stands in its own passage, and the article on 70:40 sets out how the commentators there read the plural.",
            "bn": "কুরআন দিগন্তের কথা বলে তিনটি বচনে। এটি কোনো তাফসীরকারের কথা নয়, এ প্রবন্ধের নিজের পর্যবেক্ষণ। এখানে, যেমন ২৬:২৮ ও ২:১১৫ আয়াতে, পূর্ব ও পশ্চিম একবচন। ৫৫:১৭ আয়াতে দ্বিবচন: দুই উদয়স্থলের রব, দুই অস্তস্থলের রব। ৭০:৪০ আয়াতে বহুবচন: আমি শপথ করছি উদয়স্থলসমূহ ও অস্তস্থলসমূহের রবের। ৩৭:৫ আয়াতেও আছে উদয়স্থলসমূহের রবের কথা। প্রতিটি রূপ নিজ নিজ প্রসঙ্গে এসেছে। সেখানকার তাফসীরকারেরা বহুবচনটি কীভাবে পড়েছেন, তা ৭০:৪০ আয়াতের প্রবন্ধে আছে।"
          },
          {
            "en": "Do the commentators on this verse say why al-Muzzammil uses the singular rather than the dual or the plural? Of those consulted, only as-Sa'di addresses the number at all, and what he says is that the singular is generic and covers every east and west. Ibn Kathir and al-Qurtubi gloss it with the plural without comment. None of them explains the choice of form for this surah, and this article does not invent a reason. On as-Sa'di's reading, the singular here already contains what the dual and the plural spell out elsewhere.",
            "bn": "সূরা মুযযাম্মিল দ্বিবচন বা বহুবচন না নিয়ে কেন একবচন নিল, এ আয়াতের তাফসীরকারেরা কি তা বলেন? যাঁদের তাফসীর দেখা হয়েছে, তাঁদের মধ্যে কেবল সা'দী বচনের প্রশ্নে কিছু বলেছেন। তাঁর কথা এটুকুই: একবচনটি জাতিবাচক, সব পূর্ব ও সব পশ্চিমকে ধারণ করে। ইবন কাসীর ও কুরতুবী কোনো মন্তব্য ছাড়াই বহুবচনে ব্যাখ্যা করেছেন। এ সূরায় কেন এই রূপ, তা কেউ ব্যাখ্যা করেননি, আর এ প্রবন্ধও নিজে থেকে কোনো কারণ বানাবে না। সা'দীর পাঠ অনুযায়ী, দ্বিবচন আর বহুবচন অন্যত্র যা খুলে বলে, এখানকার একবচনে তা আগেই ধরা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Trust Follows Oneness",
          "bn": "একত্বের পরেই কেন ভরসা"
        },
        "p": [
          {
            "en": "Ibn Kathir's comment on the verse, already noted in the article on 73:8, makes the link explicit: just as you have singled Him out for worship, single Him out for reliance. He cites 11:123, so worship Him and rely upon Him, and 1:5, You alone we worship and You alone we ask for help, and says that many verses carry this meaning: the command to make worship and obedience exclusively for Allah, and to reserve reliance for Him alone. Ma'arif al-Qur'an repeats the point almost word for word.",
            "bn": "এ আয়াতে ইবন কাসীরের মন্তব্য ৭৩:৮ আয়াতের প্রবন্ধে আগেই এসেছে। সংযোগটা তিনি সরাসরি বলে দেন: ইবাদতে যেমন তাঁকে একক করেছ, ভরসাতেও তাঁকে একক করো। তিনি ১১:১২৩ উদ্ধৃত করেন, অতএব তাঁর ইবাদত করো আর তাঁর উপর ভরসা রাখো। আর ১:৫, আমরা কেবল তোমারই ইবাদত করি, কেবল তোমারই সাহায্য চাই। তাঁর কথায়, এ অর্থের আয়াত অনেক। সেগুলোতে নির্দেশ আছে ইবাদত ও আনুগত্য কেবল আল্লাহর জন্য রাখার, আর ভরসা কেবল তাঁর উপর রাখার। মাআরিফুল কুরআন প্রায় হুবহু একই কথা বলে।"
          },
          {
            "en": "As-Sa'di reaches the same place through the phrase in the middle. La ilaha illa huwa, he says, means there is nothing worshipped but His exalted Face, the One who deserves to be singled out for love and reverence, for honour and veneration. Then he writes wa-li-hadha qala, and for this reason He said: so take Him as wakil. In his reading the command is not a separate instruction set beside the declaration of oneness; it is drawn out of it, which is the work the particle fa, so, does in the verse itself.",
            "bn": "সা'দী একই জায়গায় পৌঁছান আয়াতের মাঝের বাক্যটি ধরে। লা ইলাহা ইল্লা হুওয়া, তাঁর ব্যাখ্যায়, মানে তাঁর সুমহান চেহারা ছাড়া আর কোনো উপাস্য নেই। ভালোবাসা ও সম্মান, মর্যাদা ও শ্রদ্ধায় একমাত্র তিনিই একক হওয়ার যোগ্য। তারপর সা'দী লেখেন: ওয়া লিহাযা কালা, এ কারণেই তিনি বলেছেন, অতএব তাঁকে ওয়াকীল হিসেবে গ্রহণ করো। তাঁর পাঠে নির্দেশটি একত্বের ঘোষণার পাশে রাখা আলাদা কোনো হুকুম নয়, সেখান থেকেই বের হয়ে আসা। আয়াতের ফা, অর্থাৎ অতএব, শব্দটিও ঠিক এ কাজটিই করে।"
          },
          {
            "en": "At-Tabari's gloss of the middle phrase is short: no god ought to be worshipped other than Allah, who is Lord of the East and the West. Al-Qurtubi draws the connection from the opening phrase instead. Whoever knows that He is Lord of the easts and the wests, he writes, cuts himself off to Him, inqata'a, with his deeds and his hopes. The Muyassar uses the same verb for tabattul in 73:8, devotion cut off from all else. For al-Qurtubi, that devotion grows out of knowing whose the horizons are.",
            "bn": "মাঝের বাক্যটির ব্যাখ্যায় তাবারী সংক্ষিপ্ত: পূর্ব ও পশ্চিমের রব আল্লাহ ছাড়া আর কোনো ইলাহের ইবাদত করা সংগত নয়। কুরতুবী সংযোগটা টানেন আয়াতের শুরুর অংশ থেকে। তাঁর কথায়, যে জানে তিনি পূর্বসমূহ ও পশ্চিমসমূহের রব, সে নিজের আমল আর আশা নিয়ে সবকিছু ছেড়ে তাঁর দিকেই চলে যায়। এখানে তাঁর ক্রিয়াপদ ইনকাতাআ। ৭৩:৮ আয়াতের তাবাত্তুল বোঝাতে মুয়াসসারও এই ক্রিয়াই ব্যবহার করে: সবকিছু থেকে ছিন্ন হয়ে তাঁর প্রতি একাগ্র হওয়া। কুরতুবীর কাছে সেই একাগ্রতার জন্ম দিগন্তগুলো কার, তা জানা থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The One Who Takes the Charge",
          "bn": "যিনি ভার নেন"
        },
        "p": [
          {
            "en": "Wakil is the word that carries the command. Ma'arif al-Qur'an notes that lexically it means a person who has been given a task to do, and that to take Allah as wakil means that all matters and affairs are entrusted to Him; technically, it says, this is called tawakkul. The commentators gloss the word with different emphases. Al-Baghawi says qayyiman bi-umurika, He who takes charge of your affairs, so entrust them to Him. As-Sa'di says a guardian, hafiz, and a disposer of all your affairs.",
            "bn": "নির্দেশের ভার বহন করছে ওয়াকীল শব্দটি। মাআরিফুল কুরআন বলে, আভিধানিক অর্থে ওয়াকীল সেই ব্যক্তি, যাকে কোনো কাজের দায়িত্ব দেওয়া হয়েছে। আল্লাহকে ওয়াকীল বানানো মানে সব বিষয় ও সব কাজ তাঁর হাতে সঁপে দেওয়া। পরিভাষায় এরই নাম তাওয়াক্কুল। তাফসীরকারেরা শব্দটির ব্যাখ্যায় ভিন্ন ভিন্ন দিকে জোর দেন। বাগাভী বলেন কাইয়িমান বিউমূরিকা, যিনি তোমার কাজগুলোর দায়িত্ব নেন, তাই সেগুলো তাঁকে সঁপে দাও। সা'দী বলেন, তোমার সব কাজের হেফাজতকারী ও পরিচালক।"
          },
          {
            "en": "At-Tabari's gloss has two parts: take Him as wakil in what He commands you, and entrust your means, asbab, to Him. Al-Qurtubi gives two glosses. The first is qa'iman bi-umurika, upholding your affairs. The second, introduced with qila, it is said, is kafilan bima wa'adaka, a guarantor of what He has promised you. The Muyassar says simply: depend on Him and entrust your affairs to Him. All of them place the affairs in His hands; they differ in whether they stress management, guardianship, or a promise kept.",
            "bn": "তাবারীর ব্যাখ্যার দুটি অংশ। তিনি তোমাকে যা নির্দেশ দেন, তাতে তাঁকে ওয়াকীল বানাও, আর তোমার আসবাব, অর্থাৎ উপায়-উপকরণ, তাঁর হাতে সঁপে দাও। কুরতুবী দুটি ব্যাখ্যা দেন। প্রথমটি কাইমান বিউমূরিকা, যিনি তোমার কাজগুলো সম্পাদন করেন। দ্বিতীয়টি তিনি আনেন কীলা, অর্থাৎ বলা হয়, দিয়ে: কাফীলান বিমা ওয়াআদাকা, তিনি তোমাকে যা প্রতিশ্রুতি দিয়েছেন, তার জামিন। মুয়াসসার সোজা বলে: তাঁর উপর নির্ভর করো, তোমার কাজগুলো তাঁকে সঁপে দাও। সবাই কাজের ভার তাঁর হাতেই রাখেন। পার্থক্য কেবল জোরের জায়গায়: পরিচালনা, হেফাজত, নাকি প্রতিশ্রুতি রক্ষা।"
          }
        ]
      },
      {
        "h": {
          "en": "Means in Hand, Outcome Left",
          "bn": "হাতে উপায়, ফল তাঁর কাছে"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an gives a section to the correct concept of tawakkul. Trust in Allah, it says, does not mean avoiding the apparent means of earning a living, or giving up the normal ways of protecting oneself from affliction. The means Allah has created for a purpose are not to be abandoned. They are to be used to the full, but without blind faith in material causes; once the chosen actions are taken, the result is left with Allah, without whose will no cause brings about any effect.",
            "bn": "তাওয়াক্কুলের সঠিক ধারণা নিয়ে মাআরিফুল কুরআনে আলাদা আলোচনা আছে। সেখানে বলা হয়, আল্লাহর উপর ভরসা মানে জীবিকা উপার্জনের প্রকাশ্য উপায় এড়িয়ে চলা নয়। বিপদ থেকে বাঁচার স্বাভাবিক পথগুলো ছেড়ে দেওয়াও নয়। আল্লাহ যে উদ্দেশ্যে যে উপায় সৃষ্টি করেছেন, তা পরিত্যাগ করা চলবে না। সেগুলো পুরোপুরি কাজে লাগাতে হবে, তবে বস্তুগত কার্যকারণের উপর অন্ধ বিশ্বাস রেখে নয়। নিজের সাধ্যের কাজটুকু করার পর ফলাফল ছেড়ে দিতে হবে আল্লাহর হাতে। তাঁর ইচ্ছা ছাড়া কোনো কারণই কোনো ফল আনতে পারে না।"
          },
          {
            "en": "It cites 65:3, and whoever relies upon Allah, He is sufficient for him, and adds that the heart should not be so absorbed in the search for its needs that its attention rests wholly on causes and means. At-Tabari's phrase from the previous section fits the same pattern: the asbab, the means, are not thrown away but entrusted. For the verse's first addressee this was not abstract. The Prophet ﷺ had been commanded to rise at night and recite, and the very next verse speaks of what his opponents were saying.",
            "bn": "মাআরিফুল কুরআন উদ্ধৃত করে ৬৫:৩, যে আল্লাহর উপর ভরসা করে, তার জন্য তিনিই যথেষ্ট। সঙ্গে যোগ করে, প্রয়োজন মেটানোর খোঁজে মন যেন এতটা ডুবে না যায় যে তার সবটুকু মনোযোগ কার্যকারণ আর উপকরণেই আটকে থাকে। আগের অংশে তাবারীর যে কথা এসেছে, তাও একই ধাঁচের। আসবাব বা উপায়-উপকরণ ফেলে দেওয়া হয় না, তাঁর হাতে সঁপে দেওয়া হয়। আয়াতের প্রথম শ্রোতার কাছে এ কোনো তত্ত্বকথা ছিল না। নবী ﷺ-কে রাতে উঠে কুরআন পড়ার নির্দেশ দেওয়া হয়েছিল, আর ঠিক পরের আয়াতেই আসে বিরোধীদের কথাবার্তার প্রসঙ্গ।"
          },
          {
            "en": "On narrations: none of the commentators consulted attaches a hadith to this verse. Ma'arif al-Qur'an supports its account of tawakkul with two general narrations, one through al-Baghawi's Sharh as-Sunnah and al-Bayhaqi, the other through at-Tirmidhi, and ties neither to the verse. At-Tirmidhi himself calls the second gharib, known only by that one route, and says that one of its narrators, 'Amr ibn Waqid, is munkar al-hadith. Neither is quoted here, and the point rests on the verse and its commentators.",
            "bn": "হাদীসের প্রশ্নে: যাঁদের তাফসীর দেখা হয়েছে, তাঁদের কেউ এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেননি। মাআরিফুল কুরআন তাওয়াক্কুলের আলোচনায় দুটি সাধারণ বর্ণনা আনে। একটি বাগাভীর শারহুস সুন্নাহ ও বায়হাকীর সূত্রে, অন্যটি তিরমিযীর সূত্রে। কোনোটিকেই সে এ আয়াতের সঙ্গে যুক্ত করেনি। দ্বিতীয়টিকে তিরমিযী নিজেই গরীব বলেছেন, অর্থাৎ কেবল ওই একটি সূত্রেই জানা। তিনি এও বলেছেন, এর এক বর্ণনাকারী আমর ইবন ওয়াকিদ মুনকারুল হাদীস। তাই কোনোটিই এখানে উদ্ধৃত হলো না। বক্তব্য দাঁড়িয়ে আছে আয়াত আর তার তাফসীরের উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Settled Before the Insults",
          "bn": "কটুকথার আগেই ভিত"
        },
        "p": [
          {
            "en": "The verse that follows turns from the night to the company of the day: be patient over what they say, and leave them with a gracious leaving. At-Tabari explains it as patience with what the idolaters of the Prophet's people said to him and with the harm they did, and a leaving of them for Allah's sake; he adds that it is said this was abrogated. That verse has its own place. Here it matters only for its order: trust is commanded first, and patience with the opponents comes after it.",
            "bn": "পরের আয়াত রাতের প্রসঙ্গ থেকে সরে আসে দিনের মানুষজনের দিকে: তারা যা বলে তাতে ধৈর্য ধরো, আর সৌজন্যের সঙ্গে তাদের এড়িয়ে চলো। তাবারী ব্যাখ্যা করেন, নবী ﷺ-এর কওমের মুশরিকরা তাঁকে যা বলত আর যে কষ্ট দিত, তাতে ধৈর্য ধরা, আর আল্লাহর জন্য তাদের সৌজন্যের সঙ্গে ত্যাগ করা। তিনি এও যোগ করেন, বলা হয়ে থাকে এ বিধান রহিত হয়েছে। সে আয়াতের আলোচনা তার নিজের জায়গায়। এখানে শুধু ক্রমটুকু লক্ষণীয়: আগে ভরসার নির্দেশ, তারপর বিরোধীদের ব্যাপারে ধৈর্য।"
          },
          {
            "en": "Read in that order, this verse works as a foundation. Before the Prophet ﷺ is told how to bear what is said against him, he is told whose the horizons are, that there is no god but He, and to hand his affairs to Him. The verses describe a command to him in his own setting, and the warnings to the deniers that follow license nothing against any living person or community. What they offer a later reader is the sequence itself: oneness first, then trust, then the patience that trust makes possible.",
            "bn": "এই ক্রমে পড়লে আয়াতটি একটা ভিতের কাজ করে। নিজের বিরুদ্ধে বলা কথা কীভাবে সইবেন, সে নির্দেশ আসার আগেই নবী ﷺ জেনে নেন দিগন্তগুলো কার, জেনে নেন তিনি ছাড়া কোনো ইলাহ নেই, আর নির্দেশ পান নিজের কাজের ভার তাঁকে সঁপে দিতে। আয়াতগুলো তাঁর নিজের প্রেক্ষাপটে তাঁকে দেওয়া নির্দেশের বর্ণনা। পরের আয়াতে অস্বীকারকারীদের যে সতর্কবাণী, তা আজকের কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না। পরের যুগের পাঠকের জন্য এখানে আছে ক্রমটুকু: আগে একত্ব, তারপর ভরসা, তারপর সেই ধৈর্য, যা ভরসাই সম্ভব করে।"
          }
        ]
      }
    ]
  },
  "73:14": {
    "sections": [
      {
        "h": {
          "en": "A Date for the Shackles",
          "bn": "শেকলের দিনক্ষণ"
        },
        "p": [
          {
            "en": "Yawma tarjufu al-ardu wa-l-jibalu: on the Day the earth and the mountains quake. The verse opens on a word of time, and that word looks back. In 73:10 the Prophet ﷺ is told to be patient over what they say and to keep away from them graciously. In 73:11 Allah says: leave Me with the deniers, the people of ease, and give them a little respite. Then 73:12 and 73:13 list what is with Him for them: ankal, jahim, food that chokes, and a painful punishment. Our verse says when.",
            "bn": "ইয়াওমা তারজুফুল আরদু ওয়াল জিবালু: যেদিন জমিন আর পাহাড়গুলো কেঁপে উঠবে। আয়াতটি শুরু হয়েছে সময়ের একটি শব্দ দিয়ে, আর শব্দটি তাকিয়ে আছে পেছনের দিকে। ৭৩:১০ আয়াতে নবী ﷺ-কে বলা হয়েছে, তারা যা বলে তাতে ধৈর্য ধরতে আর ভদ্রভাবে তাদের থেকে সরে থাকতে। ৭৩:১১ আয়াতে আল্লাহ বলেন: অস্বীকারকারী ওই সচ্ছল লোকদের ব্যাপার আমার উপর ছেড়ে দাও, আর তাদের সামান্য অবকাশ দাও। তারপর ৭৩:১২ ও ৭৩:১৩ আয়াত গুনে দেয় তাঁর কাছে তাদের জন্য কী আছে: আনকাল, জাহীম, গলায় আটকে যাওয়া খাবার আর যন্ত্রণাদায়ক শাস্তি। আমাদের আয়াত বলে দেয়, সেটা কবে।"
          },
          {
            "en": "At-Tabari makes the link in his paraphrase. With Us, he has Allah say, are for these idolaters of Quraysh who harm you, O Muhammad, the punishments He described, on the Day the earth and the mountains quake, the Day of Resurrection. The abridged English Ibn Kathir glosses the list: the ankal are fetters, from Ibn Abbas, 'Ikrimah, Tawus and many others; jahim is a blazing fire; and the food that chokes, said Ibn Abbas, sticks in the throat, neither going down nor coming out.",
            "bn": "তাবারী তাঁর ব্যাখ্যায় সংযোগটা খুলে দেখান। তাঁর ভাষ্যে আল্লাহ যেন বলছেন: হে মুহাম্মদ, কুরাইশের যে মুশরিকরা তোমাকে কষ্ট দেয়, তাদের জন্য আমার কাছে আছে বর্ণিত সেসব শাস্তি। তা ঘটবে সেদিন, যেদিন জমিন আর পাহাড় কাঁপবে, অর্থাৎ কিয়ামতের দিন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ তালিকাটির অর্থ দেয়। আনকাল হলো বেড়ি, ইবন আব্বাস (রাঃ), ইকরিমা, তাউস ও আরও অনেকের সূত্রে। জাহীম হলো দাউ দাউ আগুন। আর গলায় আটকে যাওয়া খাবার সম্পর্কে ইবন আব্বাস (রাঃ) বলেছেন: তা গলায় আটকে থাকবে, না নামবে, না বেরিয়ে আসবে।"
          },
          {
            "en": "Ma'arif al-Qur'an, whose note covers 73:14 to 73:19 together, puts the sequence plainly: verse 14 describes that the punishment will take place on the Day when the earth and mountains shake. The mountains in this verse, then, are not a scene by themselves. They mark the hour at which the penalty promised to the deniers of 73:11 arrives.",
            "bn": "মাআরিফুল কুরআন ৭৩:১৪ থেকে ৭৩:১৯ পর্যন্ত একসাথে আলোচনা করে। সেখানে ক্রমটা সোজা কথায় বলা হয়েছে: ১৪ নম্বর আয়াত জানায়, শাস্তি ঘটবে সেদিন, যেদিন জমিন আর পাহাড় কাঁপবে। কাজেই এ আয়াতের পাহাড় আলাদা কোনো দৃশ্য নয়। ৭৩:১১ আয়াতের অস্বীকারকারীদের যে শাস্তির কথা দেওয়া হয়েছে, তা কোন মুহূর্তে আসবে, পাহাড় সেটারই চিহ্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Word Yawma Hangs On",
          "bn": "ইয়াওমা শব্দটি কিসের সাথে বাঁধা"
        },
        "p": [
          {
            "en": "Which word does yawma depend on? Al-Qurtubi sets out three answers. In the first, yawma is an adverb of time and the action it qualifies is understood: they will be made an example of and punished on the Day the earth quakes. In the second, a preposition has dropped out, so the sense is: this punishment is on the Day the earth and the mountains quake. In the third, the governing word is dharni in 73:11: leave Me with the deniers on the Day the earth and the mountains quake.",
            "bn": "ইয়াওমা শব্দটি কোন শব্দের উপর নির্ভর করছে? কুরতুবী তিনটি উত্তর সাজিয়ে দেন। প্রথম মতে, ইয়াওমা সময়বাচক শব্দ, আর যে কাজের সময় বোঝাচ্ছে তা উহ্য: যেদিন জমিন কাঁপবে, সেদিন তাদের দৃষ্টান্তমূলক সাজা দেওয়া হবে, শাস্তি দেওয়া হবে। দ্বিতীয় মতে, মাঝখান থেকে একটি অব্যয় বাদ পড়েছে। অর্থ দাঁড়ায়: এই শাস্তি সেই দিনে, যেদিন জমিন আর পাহাড় কাঁপবে। তৃতীয় মতে, শব্দটিকে নিয়ন্ত্রণ করছে ৭৩:১১ আয়াতের যারনী: যেদিন জমিন আর পাহাড় কাঁপবে, সেদিনের জন্য অস্বীকারকারীদের ব্যাপার আমার উপর ছেড়ে দাও।"
          },
          {
            "en": "Al-Qurtubi gives the adverbial reading in his own voice and introduces the second and third with wa-qila, and it has been said; he does not argue between them. At-Tabari's paraphrase ties the Day to the punishments of 73:12 and 73:13, which sits closest to the first two. The difference is small in sense but real in feel. On the first two readings the verse dates the punishment. On the third it is attached to the command to leave the deniers to Allah, so the handing over and the Day sit in one sentence.",
            "bn": "সময়বাচক মতটি কুরতুবী নিজের কথায় বলেন। দ্বিতীয় ও তৃতীয়টির আগে লেখেন ওয়া কীলা, অর্থাৎ বলা হয়েছে। এগুলোর মধ্যে তিনি কোনো বিতর্কে যান না। তাবারীর ব্যাখ্যা দিনটিকে বেঁধেছে ৭৩:১২ ও ৭৩:১৩ আয়াতের শাস্তির সাথে, যা প্রথম দুই মতের কাছাকাছি। অর্থে পার্থক্যটা ছোট, তবে অনুভবে স্পষ্ট। প্রথম দুই মতে আয়াতটি শাস্তির দিনক্ষণ জানায়। তৃতীয় মতে দিনটি জুড়ে আছে অস্বীকারকারীদের আল্লাহর হাতে ছেড়ে দেওয়ার নির্দেশের সাথে। ফলে ছেড়ে দেওয়া আর সেই দিন একই বাক্যে এসে বসে।"
          },
          {
            "en": "Al-Qurtubi adds a note on tense: wa-kanati al-jibalu, literally and the mountains were, means wa-takunu, and the mountains will be, a past verb used for a Day still to come. The Muyassar's paraphrase also runs in the future: the earth and the mountains will convulse and quake until the mountains become a mound of sand, flowing and scattered, after they had been hard and solid.",
            "bn": "কাল নিয়েও কুরতুবী কথা বলেন। ওয়া কানাতিল জিবালু, শব্দে শব্দে যার মানে আর পাহাড়গুলো ছিল, তার অর্থ ওয়া তাকূনু, আর পাহাড়গুলো হবে। যে দিন এখনো আসেনি, তার জন্য এসেছে অতীতকালের ক্রিয়া। মুয়াসসারের ব্যাখ্যাও ভবিষ্যৎকালে চলে: জমিন আর পাহাড় দুলবে, কাঁপবে। শেষে পাহাড় হয়ে যাবে বালুর ঢিবি, গড়িয়ে পড়া, ছড়িয়ে যাওয়া। অথচ আগে সেগুলো ছিল শক্ত আর অনড়।"
          }
        ]
      },
      {
        "h": {
          "en": "Shaken With Those Upon It",
          "bn": "উপরের মানুষসহ কম্পন"
        },
        "p": [
          {
            "en": "Tarjufu: what kind of shaking? Ibn Kathir's Arabic glosses it with a single verb, tuzalzalu, it will be quaked. Al-Baghawi doubles it: tuzalzalu wa-tataharraku, quaked and set in motion. The Muyassar has tadtaribu wa-tatazalzalu, it will convulse and quake. The verb has two subjects in the verse, the earth and the mountains, and none of these glosses separates them. The ground and the heights standing on it shake together.",
            "bn": "তারজুফু: কেমন কাঁপুনি? ইবন কাসীর আরবি তাফসীরে মাত্র একটি ক্রিয়ায় অর্থ দেন: তুযালযালু, ভূকম্পনে কাঁপানো হবে। বাগাভী দুটি ক্রিয়া জোড়েন: তুযালযালু ওয়া তাতাহাররাকু, কাঁপানো হবে আর নড়ে উঠবে। মুয়াসসারে আছে তাদতারিবু ওয়া তাতাযালযালু, দুলবে আর কাঁপবে। আয়াতে এই ক্রিয়ার কর্তা দুটি, জমিন আর পাহাড়। এসব ব্যাখ্যার কোনোটি দুটিকে আলাদা করে না। মাটি আর তার উপর দাঁড়ানো উঁচু চূড়া, দুটোই একসাথে কাঁপে।"
          },
          {
            "en": "At-Tabari and al-Qurtubi add a phrase that changes the picture. At-Tabari: its rujfan is its convulsing bi-man 'alayhi, with whoever is upon it. Al-Qurtubi: it moves and convulses bi-man 'alayha, with those upon it. The quake is not watched from a distance; the people standing on the ground feel it. As-Sa'di gives a cause rather than a motion: min al-hawl al-'azim, from the immense terror. The related word rajj, used of the earth in 56:4, is treated in that verse's article.",
            "bn": "তাবারী আর কুরতুবী এমন একটি কথা যোগ করেন, যাতে ছবিটা বদলে যায়। তাবারী বলেন: এর রুজফান মানে উপরে যারা আছে তাদের নিয়েই এর দুলে ওঠা। কুরতুবী বলেন: উপরের মানুষদের নিয়েই তা নড়বে আর দুলবে। এই কম্পন দূর থেকে দেখার জিনিস নয়। মাটির উপর দাঁড়ানো মানুষ নিজেরাই তা টের পায়। সা'দী নড়াচড়ার বদলে কারণটা বলেন: মিনাল হাওলিল আযীম, প্রচণ্ড আতঙ্কের কারণে। জমিনের বেলায় ৫৬:৪ আয়াতে এসেছে কাছাকাছি আরেকটি শব্দ, রাজ্জ। সেটির আলোচনা ওই আয়াতের প্রবন্ধে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Kathib, Sand Gathered Up",
          "bn": "কাসীব: জমে ওঠা বালু"
        },
        "p": [
          {
            "en": "Wa-kanati al-jibalu kathiban mahila. The verse names the mountains a second time where a pronoun would have served, and this clause is about them alone. Al-Qurtubi defines al-kathib as al-raml al-mujtami', sand gathered together, and cites a line he attributes to Hassan: I recognised the dwellings of Zaynab by the sand-hill, like the lines of writing on new parchment. In that line the word is simply the ordinary name for a mound of sand.",
            "bn": "ওয়া কানাতিল জিবালু কাসীবাম মাহীলা। সর্বনাম দিয়েই কাজ চলত, তবু আয়াত পাহাড়ের নাম দ্বিতীয়বার নিয়েছে। আর এই বাক্যাংশ শুধু পাহাড় নিয়েই। কুরতুবী আল-কাসীবের অর্থ বলেন আর-রামলুল মুজতামি', এক জায়গায় জমে থাকা বালু। সাক্ষী হিসেবে তিনি একটি পঙক্তি আনেন, যা তিনি হাসসানের বলে উল্লেখ করেন: বালির ঢিবির ধারে আমি যয়নবের ঘরবাড়ি চিনে নিলাম, যেন নতুন কাগজে লেখার রেখা। পঙক্তিতে শব্দটি বালুর স্তূপের সাধারণ নাম মাত্র।"
          },
          {
            "en": "The other commentators describe a change of state. Ibn Kathir: they become like kuthban al-raml, hills of sand, after they had been hijara samma', solid stone. As-Sa'di calls them al-rasiyat al-summ al-silab, the firmly anchored, solid, hard mountains, and says they become like al-raml al-munhal al-muntathir, sand pouring down and scattering. The Muyassar's word is tall, a mound of sand, after they had been sulba jamida, hard and rigid. Ma'arif al-Qur'an sets two pictures side by side: a heap of dust, or shifting dunes.",
            "bn": "অন্য তাফসীরকারেরা অবস্থার বদলটা বর্ণনা করেন। ইবন কাসীর: নিরেট পাথর থাকার পর সেগুলো হবে কুসবানুর রামল, বালুর টিলার মতো। সা'দী পাহাড়গুলোকে বলেন আর-রাসিয়াতুস সুম্মুস সিলাব, শিকড় গেড়ে বসা, নিরেট, কঠিন। তাঁর মতে সেগুলো হবে আর-রামলুল মুনহালুল মুনতাসির, ঝরে পড়া ছড়িয়ে যাওয়া বালুর মতো। মুয়াসসারের শব্দ তাল্ল, বালুর ঢিবি। আগে সেগুলো ছিল সুলবা জামিদা, শক্ত আর অনড়। মাআরিফুল কুরআন দুটি ছবি পাশাপাশি রাখে: ধুলার স্তূপ, অথবা সরে যাওয়া বালিয়াড়ি।"
          }
        ]
      },
      {
        "h": {
          "en": "Moved Below, Pouring From Above",
          "bn": "নিচে নাড়া, উপর থেকে ধস"
        },
        "p": [
          {
            "en": "Mahil is the heart of the phrase, and the commentators define it from the way sand behaves. At-Tabari: it is a passive participle from hiltu al-ramla fa-ana ahiluhu, I set the sand pouring, said when its lower part is moved so that it pours down from its upper part. Al-Baghawi says nearly the same: ahaltu al-ramla, when you have moved its base until it poured from its top. The sand does not fall because it is struck from above. It falls because something shifts underneath.",
            "bn": "বাক্যাংশের প্রাণ মাহীল শব্দটি। তাফসীরকারেরা এর অর্থ বলেন বালুর স্বভাব দেখে। তাবারী বলেন: শব্দটি কর্মবাচক রূপ, এসেছে হিলতুর রামলা ফা আনা আহীলুহু থেকে, আমি বালু ঝরিয়ে দিলাম। কথাটা বলা হয় তখন, যখন বালুর নিচের অংশ নাড়া হয় আর উপরের অংশ ধসে নিচে নামে। বাগাভীও প্রায় একই কথা বলেন: আহালতুর রামলা, যখন বালুর গোড়া নাড়ানো হয় আর মাথা থেকে তা ঝরে পড়ে। উপর থেকে আঘাত লেগে বালু পড়ে না। পড়ে, কারণ নিচে কিছু একটা সরে গেছে।"
          },
          {
            "en": "Two early voices describe the same behaviour from a person's side. Al-Baghawi reports al-Kalbi: it is sand from which, if you take something, what lies behind it follows you. Al-Qurtubi reports ad-Dahhak and al-Kalbi together: when you tread on it, it slips out from under your foot, and when you take hold of its lower part, it pours down. Al-Qurtubi's own gloss is: what passes beneath the feet. Such sand cannot be stood on, and nothing can be taken from it without the rest moving too.",
            "bn": "দুজন প্রাচীন ব্যাখ্যাকার একই স্বভাবের কথা বলেন মানুষের দিক থেকে। বাগাভী কালবীর কথা আনেন: এ এমন বালু, যার থেকে কিছু তুলে নিলে পেছনের বালুও আপনার পিছু পিছু চলে আসে। কুরতুবী দাহহাক আর কালবী দুজনের কথা একসাথে আনেন: এর উপর পা রাখলে পায়ের নিচ থেকে পিছলে সরে যায়, আর গোড়া ধরলে ঝরে পড়ে। কুরতুবীর নিজের ব্যাখ্যা: যা পায়ের নিচ দিয়ে সরে যায়। এমন বালুর উপর দাঁড়ানো যায় না, আর বাকিটা না নড়িয়ে এর থেকে কিছু নেওয়াও যায় না।"
          },
          {
            "en": "A grammarians' note sits alongside. At-Tabari says the Arabs have two forms, mahil and mahyul, just as they say makil and makyul for what is measured. Al-Qurtubi gives the same pairs, adds madin and madyun, and explains how the waw of the original form, mahyul, dropped out. Both quote the same line of verse, ending on such an unshortened passive, as a witness that the fuller form was in use.",
            "bn": "পাশেই আছে ব্যাকরণের একটি টীকা। তাবারী বলেন, আরবরা দুটি রূপই বলে: মাহীল ও মাহয়ূল। যেমন মাপা জিনিসকে বলে মাকীল ও মাকয়ূল। কুরতুবী একই জোড়া দেন, সাথে যোগ করেন মাদীন ও মাদয়ূন। তাঁর মতে মূল রূপ মাহয়ূল, আর তার ওয়াও অক্ষরটি কীভাবে ঝরে গেল, তা-ও তিনি ব্যাখ্যা করেন। পূর্ণ রূপটি যে চালু ছিল, তার সাক্ষী হিসেবে দুজনেই একই কবিতার পঙক্তি আনেন, যার শেষে আছে এমনই এক অসংক্ষিপ্ত কর্মবাচক রূপ।"
          }
        ]
      },
      {
        "h": {
          "en": "Flowing, Running On, Pouring Down",
          "bn": "গড়িয়ে চলা, পিছু নেওয়া, ঝরে পড়া"
        },
        "p": [
          {
            "en": "At-Tabari then names those who said the same, opening the list with the remark that the people of interpretation said the like of what he had said. From Ibn Abbas, through 'Ali ibn Abi Talha: al-raml al-sa'il, flowing sand. From Ibn Abbas again, through a chain that runs down one family, Muhammad ibn Sa'd from his father, his uncle and their forebears: al-kathib al-mahil is the soft sand which, when you touch it, runs on, grain after grain. From Mujahid, through Ibn Abi Najih: yanhalu, it pours down.",
            "bn": "এরপর তাবারী তাঁদের নাম আনেন, যাঁরা একই কথা বলেছেন। তালিকার শুরুতে বলেন, তাফসীরকারেরা তাঁর কথার মতোই বলেছেন। আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ): আর-রামলুস সাইল, গড়িয়ে চলা বালু। আবার ইবন আব্বাস (রাঃ), এবার এক পরিবারের ভেতর দিয়ে নামা সূত্রে, মুহাম্মদ ইবন সা'দ থেকে তাঁর পিতা, চাচা ও পূর্বপুরুষদের মাধ্যমে: আল-কাসীবুল মাহীল হলো সেই নরম বালু, যা ছুঁলেই একটার পর একটা দানা গড়িয়ে চলে। ইবন আবী নাজীহর সূত্রে মুজাহিদ: ইয়ানহালু, ধসে পড়ে।"
          },
          {
            "en": "Al-Qurtubi gives Ibn Abbas's gloss as sand that flows and scatters, then traces the word to hiltu 'alayhi al-turaba, I poured earth over it. At-Tabari's own paraphrase and the Muyassar use the same pair of words, sa'il mutanathir, flowing and scattering. There is no disagreement to record on this word. The reports differ only in which moment they catch: the sand flowing, running on at a touch, or pouring down from its top.",
            "bn": "কুরতুবী ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা আনেন: মাহীলা মানে গড়িয়ে চলা, ছড়িয়ে পড়া বালু। তারপর শব্দটির উৎস দেখান হিলতু আলাইহিত তুরাবা, আমি তার উপর মাটি ঢেলে দিলাম। তাবারীর নিজের ব্যাখ্যা আর মুয়াসসারেও একই জোড়া শব্দ: সাইল মুতানাসির, গড়িয়ে চলা আর ছড়িয়ে পড়া। এ শব্দ নিয়ে লেখার মতো কোনো মতভেদ নেই। বর্ণনাগুলো শুধু আলাদা আলাদা মুহূর্ত ধরেছে: বালু গড়িয়ে চলছে, ছোঁয়া পেয়ে সরে যাচ্ছে, কিংবা মাথা থেকে ধসে পড়ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Measured Grain, Poured Grain",
          "bn": "মাপা শস্য, ঢালা শস্য"
        },
        "p": [
          {
            "en": "Al-Qurtubi brings one narration into his note, for the word and not for the verse. He relays an exchange, set at a time of drought and raised to the Prophet ﷺ, in which the verb hala, to pour without measuring, is set against measuring food, and measuring is tied to blessing. Al-Qurtubi names no collection and no chain. The exchange in his wording was not traced to a collection for this article, so its words are not quoted, and it is reported only as his illustration of the verb.",
            "bn": "কুরতুবী তাঁর আলোচনায় একটি বর্ণনা আনেন, তবে শব্দটির জন্য, আয়াতের অর্থের জন্য নয়। তিনি খরার সময়ের একটি প্রশ্নোত্তর আনেন, যা নবী ﷺ পর্যন্ত পৌঁছানো হয়েছে। তাতে মেপে না নিয়ে ঢেলে দেওয়া বোঝাতে 'হালা' ক্রিয়াটি এসেছে, খাবার মেপে নেওয়ার বিপরীতে, আর মেপে নেওয়াকে বরকতের সঙ্গে যুক্ত করা হয়েছে। কুরতুবী কোনো গ্রন্থের নাম বা সনদ দেননি। তাঁর এই শব্দে প্রশ্নোত্তরটি এ প্রবন্ধের জন্য কোনো হাদীস গ্রন্থে খুঁজে পাওয়া যায়নি। তাই এখানে এটি শুধু ক্রিয়াটির উদাহরণ হিসেবে তাঁর উদ্ধৃতি।"
          },
          {
            "en": "The command at its centre does stand with a full chain in al-Bukhari's Sahih (2128), from al-Miqdam ibn Ma'dikarib, from the Prophet ﷺ: kilu ta'amakum yubarak lakum, measure your foodstuff and you will be blessed. That narration concerns measuring food. It is not about this verse, and no commentary consulted here attaches it to the verse's meaning; none of them attaches any hadith to 73:14. What al-Qurtubi's report shows is the verb hala in daily use, for grain poured out loose instead of measured.",
            "bn": "তবে এর মাঝের নির্দেশটি পূর্ণ সনদে আছে বুখারীর সহীহ গ্রন্থে (২১২৮)। মিকদাম ইবন মা'দীকারিব (রাঃ) নবী ﷺ থেকে বর্ণনা করেন: কীলূ তাআমাকুম ইউবারাক লাকুম, তোমাদের খাদ্যদ্রব্য মেপে নাও, তোমাদের বরকত দেওয়া হবে। বর্ণনাটি খাবার মাপা নিয়ে, এ আয়াত নিয়ে নয়। এখানে দেখা কোনো তাফসীর আয়াতের অর্থের সাথে একে যুক্ত করেনি। ৭৩:১৪ আয়াতের সাথে কোনো হাদীসই তাঁরা যুক্ত করেননি। কুরতুবীর বর্ণনা শুধু দেখায়, রোজকার কথায় হালা ক্রিয়াটি কীভাবে চলত: না মেপে আলগা করে ঢেলে দেওয়া শস্যের বেলায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Stage Between Stone and Dust",
          "bn": "পাথর আর ধুলার মাঝের ধাপ"
        },
        "p": [
          {
            "en": "Two commentators do not let the sand be the end. Ibn Kathir: after they become like hills of sand, tunsafu nasfan, they are blown away utterly, the verb of 20:105, so that nothing of them is left, until the earth becomes qa'an safsafa with no 'iwaj and no amt in it, the words of 20:106 and 20:107. He glosses 'iwaj as a valley and amt as a rise: nothing sinks and nothing rises. As-Sa'di: after being poured sand they tubassu, are crushed, the verb of 56:5, and become like scattered dust.",
            "bn": "দুজন তাফসীরকার বালুতেই শেষ করেন না। ইবন কাসীর বলেন: বালুর টিলার মতো হওয়ার পর তুনসাফু নাসফান, সেগুলোকে পুরোপুরি উড়িয়ে দেওয়া হবে। ক্রিয়াটি ২০:১০৫ আয়াতের। কিছুই বাকি থাকবে না, শেষে জমিন হবে কা'আন সাফসাফা, যাতে কোনো ইওয়াজ নেই, কোনো আমত নেই। এ শব্দগুলো ২০:১০৬ ও ২০:১০৭ আয়াতের। ইওয়াজ মানে তিনি বলেন উপত্যকা, আর আমত মানে টিলা: কিছুই নিচু নয়, কিছুই উঁচু নয়। সা'দী বলেন: ঝরে পড়া বালু হওয়ার পর সেগুলোকে চূর্ণ করা হবে, তুবাসসু, ৫৬:৫ আয়াতের ক্রিয়া। তারপর হবে ছড়ানো ধুলার মতো।"
          },
          {
            "en": "Those sequences are followed step by step in the articles on 20:106, 52:10 and 101:5, and are not retold here. This verse holds one stage still: the moment between stone and dust, when the mountain can still be seen as a heap but can no longer be climbed. The commentaries consulted say nothing about rock or soil beyond the words above, and neither does this article.",
            "bn": "এই ধারাবাহিকতা ধাপে ধাপে আলোচিত হয়েছে ২০:১০৬, ৫২:১০ ও ১০১:৫ আয়াতের প্রবন্ধে, এখানে আর পুনরাবৃত্তি নয়। এ আয়াত থামিয়ে রাখে একটিমাত্র ধাপ: পাথর আর ধুলার মাঝের মুহূর্ত। তখনো পাহাড়কে স্তূপ হিসেবে দেখা যায়, কিন্তু তাতে আর পা রেখে ওঠা যায় না। এখানে দেখা তাফসীরগুলো পাথর বা মাটি নিয়ে উপরের কথাগুলোর বাইরে কিছু বলেনি, এ প্রবন্ধও বলছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ease That Was Never Footing",
          "bn": "যে আরাম পায়ের তলার মাটি নয়"
        },
        "p": [
          {
            "en": "Read in its place, the verse speaks first to the Prophet ﷺ, who has been told to bear their words and leave the people of ease to Allah for a little while. This verse shows what the little while ends in. Ibn Kathir explains the people of ease as the rich deniers: more able to obey than others, he says, and asked to give others their rights, because they have what others lack. They stood on wealth as if on rock. On that Day the rock itself is sand that slips out from under a foot.",
            "bn": "প্রসঙ্গের ভেতরে পড়লে আয়াতটি প্রথমে কথা বলে নবী ﷺ-এর সাথে। তাঁকে বলা হয়েছে তাদের কথা সহ্য করতে, আর সচ্ছল লোকদের অল্প কিছুদিনের জন্য আল্লাহর হাতে ছেড়ে দিতে। এ আয়াত দেখায়, সেই অল্প কিছুদিন শেষে কী আসে। ইবন কাসীর সচ্ছল লোক বলতে বোঝান ধনী অস্বীকারকারীদের। তাঁর মতে আনুগত্যের সামর্থ্য অন্যদের চেয়ে তাদের বেশি, মানুষের হক আদায়ের দাবিও তাদের কাছে, কারণ অন্যদের যা নেই তা তাদের আছে। তারা সম্পদের উপর দাঁড়িয়েছিল, যেন পাথরের উপর। সেদিন খোদ পাথরই হবে এমন বালু, যা পায়ের নিচ থেকে পিছলে সরে যায়।"
          },
          {
            "en": "That needs a plain limit, in both languages. At-Tabari names these deniers as the idolaters of Quraysh who harmed the Prophet ﷺ. The verse describes what the text says awaits them on that Day, and nothing more. It licenses nothing against any living person or community. No reader is given the right to decide who belongs among the deniers, and the passage itself gives the Prophet ﷺ patience and a gracious distance, not a sentence to carry out.",
            "bn": "এখানে একটি সীমা পরিষ্কার করে বলা দরকার। তাবারী এই অস্বীকারকারীদের পরিচয় দেন কুরাইশের সেই মুশরিক হিসেবে, যারা নবী ﷺ-কে কষ্ট দিত। আয়াতটি শুধু এটুকুই বর্ণনা করে যে, সেদিন তাদের জন্য কী অপেক্ষা করছে বলে কুরআন জানায়। এর বাইরে কিছু নয়। বর্তমানের কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুর অনুমতি এ আয়াত দেয় না। কে অস্বীকারকারীদের দলে, সে রায় দেওয়ার অধিকার কোনো পাঠককে দেওয়া হয়নি। এই আয়াতগুলো নবী ﷺ-কে দিয়েছে ধৈর্য আর ভদ্র দূরত্ব, কার্যকর করার মতো কোনো দণ্ড নয়।"
          },
          {
            "en": "What the verse leaves the reader is a question about footing. Its picture is not stone struck from above but sand that runs when its base is touched. The comfort of the deniers looked like ground to stand on, and in the verse's picture the ground is exactly what goes. So the question is what one is standing on now. The passage gives its own answer in 73:19: this is a reminder, so whoever wills may take a way to his Lord.",
            "bn": "আয়াতটি পাঠকের হাতে রেখে যায় পায়ের তলার মাটি নিয়ে একটি প্রশ্ন। এর ছবি উপর থেকে আঘাত খাওয়া পাথরের নয়। ছবিটা এমন বালুর, যার গোড়া ছুঁলেই তা গড়িয়ে পড়ে। অস্বীকারকারীদের আরাম দেখতে দাঁড়ানোর মাটির মতো লাগত। অথচ আয়াতের ছবিতে ঠিক সেই মাটিই সরে যায়। তাই প্রশ্ন হলো, এখন আমি কিসের উপর দাঁড়িয়ে আছি। এ অংশ নিজেই উত্তর দেয় ৭৩:১৯ আয়াতে: এটা উপদেশ, কাজেই যার ইচ্ছা সে তার রবের দিকে পথ ধরুক।"
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
