/**
 * Tadabbur long-form articles — surah 70.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "70:4": {
    "sections": [
      {
        "h": {
          "en": "Up the Ways of Ascent",
          "bn": "আরোহণের পথ বেয়ে"
        },
        "p": [
          {
            "en": "Ta'ruju al-mala'ikatu wa-r-ruhu ilayh: the angels and the Spirit ascend to Him. It grows out of 70:3, which names Allah dhi al-ma'arij, Owner of the ways of ascent. Ibn Kathir reports from Ibn Abbas that the phrase means loftiness and abundance, and from Mujahid that it means the ways of ascension into the heavens. For the verb itself he cites Qatada, through Abd al-Razzaq and Ma'mar: ta'ruju means tas'adu, they rise.",
            "bn": "তা'রুজুল মালাইকাতু ওয়ার রূহু ইলাইহি: ফেরেশতারা ও রূহ তাঁর দিকে আরোহণ করে। আয়াতটি এসেছে ৭০:৩ আয়াতের ধারাবাহিকতায়, যেখানে আল্লাহর পরিচয় যিল মাআরিজ, আরোহণের পথগুলোর মালিক। ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে আনেন, এর অর্থ উচ্চতা ও প্রাচুর্য। আর মুজাহিদ থেকে আনেন, এর মানে আসমানে ওঠার পথগুলো। ক্রিয়াটির অর্থ বোঝাতে তিনি আব্দুর রাযযাক ও মা'মারের সূত্রে কাতাদার কথা উদ্ধৃত করেন: তা'রুজু মানে তাস'আদু, তারা উপরে ওঠে।"
          },
          {
            "en": "Al-Qurtubi joins the two verses: they ascend in the ma'arij that Allah made for them. The Muyassar, which treats 70:1 to 70:4 as one passage, says it plainly: the angels and Jibril rise to Him, exalted is He. The reading differs too. Al-Baghawi reports that al-Kisa'i read the verb with ya', ya'ruju, as Ibn Mas'ud read it, and the others with ta'. At-Tabari holds the ta' reading correct because the authoritative readers agree on it.",
            "bn": "কুরতুবী দুই আয়াতকে জুড়ে দেন: আল্লাহ তাদের জন্য যে মাআরিজ বানিয়েছেন, সেগুলো বেয়েই তারা ওঠে। মুয়াসসার ৭০:১ থেকে ৭০:৪ পর্যন্ত এক অংশ হিসেবে পড়ে, আর সোজা কথায় বলে: ফেরেশতারা ও জিবরীল তাঁর দিকে ওঠেন, তিনি মহান। পাঠেও একটা ভিন্নতা আছে। বাগাভী জানান, কিসাঈ ক্রিয়াটি পড়তেন ইয়া দিয়ে, ইয়া'রুজু, যেভাবে ইবন মাসউদ (রাঃ) পড়তেন। বাকিরা পড়েছেন তা দিয়ে। তাবারী তা দিয়ে পড়াকেই সঠিক বলেন, কারণ নির্ভরযোগ্য কারীগণ এতে একমত।"
          }
        ]
      },
      {
        "h": {
          "en": "Jibril, or the Souls",
          "bn": "জিবরীল, নাকি রূহেরা"
        },
        "p": [
          {
            "en": "Who is ar-Ruh? For at-Tabari it is Jibril, peace be upon him, and al-Baghawi says the same. Al-Qurtubi reports that this is the view of Ibn Abbas and gives as evidence 26:193, the Trustworthy Spirit brought it down. Ma'arif al-Qur'an explains why Jibril is named beside the angels when he is one of them: he is singled out for his special honour. Ibn Kathir calls the pairing a case of joining the specific to the general, and offers it as one possibility.",
            "bn": "আর-রূহ কে? তাবারী এক বাক্যে উত্তর দেন: তিনি জিবরীল (আঃ)। বাগাভীও তা-ই বলেন। কুরতুবী জানান, এটি ইবন আব্বাস (রাঃ)-এর মত, আর প্রমাণ হিসেবে আনেন ২৬:১৯৩ আয়াত: বিশ্বস্ত রূহ তা নিয়ে অবতীর্ণ হয়েছেন। জিবরীল নিজেও তো ফেরেশতা, তবু ফেরেশতাদের পাশে তাঁর নাম আলাদা করে কেন? মাআরিফুল কুরআনের জবাব: তাঁর বিশেষ মর্যাদার কারণে। ইবন কাসীর একে বলেন সাধারণের সঙ্গে বিশেষকে জুড়ে দেওয়া। তবে তিনি এটিকে একটি সম্ভাবনা হিসেবেই পেশ করেন।"
          },
          {
            "en": "Al-Qurtubi also lists another angel of immense form; Abu Salih's view that the Ruh are creatures of Allah shaped like people but not people, which Ibn Kathir also reports; and the view of Qabisa ibn Dhu'ayb that it is the soul of the dead when it is taken. Ibn Kathir adds that the word may name the souls of the children of Adam as a kind, lifted to the heaven at death, as the hadith of al-Bara' indicates. Of that hadith he says some of its narrators were criticised, yet it is well known and has a supporting report.",
            "bn": "কুরতুবী আরও উল্লেখ করেন, রূহ বিশাল আকৃতির আলাদা এক ফেরেশতা। আবু সালিহের মত, রূহ আল্লাহর এক সৃষ্টি, দেখতে মানুষের মতো, কিন্তু মানুষ নয়। ইবন কাসীরও এ মত বর্ণনা করেন। কাবীসা ইবন যুআইবের মতে রূহ হলো মৃত ব্যক্তির আত্মা, যখন তা কবজ করা হয়। ইবন কাসীর যোগ করেন, শব্দটি জাতিবাচক অর্থে আদম সন্তানের রূহগুলোকেও বোঝাতে পারে, মৃত্যুর সময় যেগুলো আসমানে তুলে নেওয়া হয়, যেমনটা বারা (রাঃ)-এর হাদীসে এসেছে। সেই হাদীস সম্পর্কে তিনি বলেন, এর কয়েকজন বর্ণনাকারীকে নিয়ে সমালোচনা আছে, তবু হাদীসটি প্রসিদ্ধ এবং এর সমর্থক বর্ণনাও আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Pronoun Points",
          "bn": "সর্বনামটি কার দিকে"
        },
        "p": [
          {
            "en": "Ilayhi, to Him. At-Tabari states that the pronoun refers back to the name of Allah, and al-Baghawi glosses it as to Allah, Mighty and Glorious. Al-Qurtubi records three other wordings. The first is to the place that is the angels' station, in the heaven, because it is the place of His goodness and honour. The second likens it to the words of Ibrahim (AS) in 37:99, I am going to my Lord, meaning to the place He commanded. The third is to His Throne.",
            "bn": "ইলাইহি, তাঁর দিকে। তাবারী বলেন, সর্বনামটি ফিরে গেছে আল্লাহর নামের দিকে। বাগাভীর ব্যাখ্যা: মহিমান্বিত ও মহান আল্লাহর দিকে। কুরতুবী আরও তিনটি ভাষ্য লিপিবদ্ধ করেন। প্রথমটি হলো, ফেরেশতাদের অবস্থানের জায়গার দিকে, যা আসমানে, কারণ সেটি তাঁর অনুগ্রহ ও সম্মানের স্থান। দ্বিতীয়টি একে তুলনা করে ৩৭:৯৯ আয়াতে ইবরাহীম (আঃ)-এর কথার সঙ্গে: আমি আমার রবের দিকে যাচ্ছি, অর্থাৎ তিনি যে জায়গায় যেতে আদেশ করেছেন সেখানে। তৃতীয়টি: তাঁর আরশের দিকে।"
          },
          {
            "en": "As-Sa'di reads ar-Ruh as a generic noun covering every soul, righteous and wicked, at the moment of death. The souls of the righteous ascend, he writes, and are given leave from heaven to heaven until they reach the heaven in which Allah is; they greet their Lord and are honoured by nearness to Him. The souls of the wicked ascend too, but at the heaven they ask leave, are refused, and are returned to the earth.",
            "bn": "সা'দী আর-রূহকে পড়েন জাতিবাচক বিশেষ্য হিসেবে, যা মৃত্যুর সময় নেককার ও বদকার সব রূহকেই শামিল করে। তিনি লেখেন, নেককারদের রূহ উপরে ওঠে। এক আসমান থেকে আরেক আসমানে তাদের অনুমতি দেওয়া হয়, যতক্ষণ না তারা পৌঁছায় সেই আসমানে যেখানে আল্লাহ আছেন। সেখানে তারা তাদের রবকে সালাম জানায় এবং তাঁর নৈকট্যের সম্মান লাভ করে। বদকারদের রূহও ওঠে, কিন্তু আসমানে পৌঁছে অনুমতি চাইলে অনুমতি মেলে না, তাদের ফিরিয়ে দেওয়া হয় জমিনে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Day Measured as a Journey",
          "bn": "যাত্রার মাপে একটি দিন"
        },
        "p": [
          {
            "en": "Fi yawmin kana miqdaruhu khamsina alfa sanah: in a day whose measure is fifty thousand years. Ibn Kathir counts four views on this clause. At-Tabari's own reading ties the day to the ascent. The measure of their rising, he writes, falls in a day that for other creatures would be fifty thousand years, because they rise from the lowest limit of His command beneath the seventh earth to its highest limit above the seven heavens. He says the people of interpretation held the like, and cites Mujahid through Layth.",
            "bn": "ফী ইয়াওমিন কানা মিকদারুহু খামসীনা আলফা সানাহ: এমন এক দিনে, যার পরিমাণ পঞ্চাশ হাজার বছর। ইবন কাসীর এ অংশের ব্যাপারে চারটি মত গোনেন। তাবারীর নিজের ব্যাখ্যা দিনটিকে আরোহণের সঙ্গেই বাঁধে। তিনি লেখেন, তাদের ওঠার পরিমাণ এমন এক দিনে, যা অন্য সৃষ্টির জন্য হতো পঞ্চাশ হাজার বছর। কারণ তারা ওঠে সপ্তম জমিনের নিচে তাঁর আদেশের শেষ সীমা থেকে সাতটি আসমানের উপরে তাঁর আদেশের শেষ সীমা পর্যন্ত। তাবারী বলেন, তাফসীরবিদেরাও এমনটাই বলেছেন, আর লাইসের সূত্রে মুজাহিদের কথা আনেন।"
          },
          {
            "en": "Al-Baghawi adds a condition: fifty thousand of this world's years if anyone other than an angel made the climb. He reports Muhammad ibn Ishaq: if the children of Adam travelled from this world to the place of the Throne, they would travel fifty thousand years. Al-Qurtubi names Wahb, al-Kalbi and Ibn Ishaq for it. As-Sa'di gives it as one possibility: by ordinary travel the distance is fifty thousand years, yet the angels and souls cover it in a day through the lightness and speed Allah grants them, an ascent in this world, since the opening context points that way.",
            "bn": "বাগাভী এ মতে একটা শর্ত জুড়ে দেন: ফেরেশতা ছাড়া অন্য কেউ এ পথে উঠলে দুনিয়ার হিসাবে লাগত পঞ্চাশ হাজার বছর। তিনি মুহাম্মাদ ইবন ইসহাকের কথা আনেন: আদম সন্তানেরা যদি দুনিয়া থেকে আরশের জায়গা পর্যন্ত সফর করত, তবে পঞ্চাশ হাজার বছর ধরে চলতে হতো। কুরতুবী এ মতের সঙ্গে ওয়াহব, কালবী ও ইবন ইসহাকের নাম জুড়ে দেন। সা'দী একে একটি সম্ভাবনা হিসেবে আনেন। স্বাভাবিক চলায় এ দূরত্ব পঞ্চাশ হাজার বছরের, তবু আল্লাহর দেওয়া হালকা গড়ন ও দ্রুত গতির কারণে ফেরেশতা ও রূহেরা তা এক দিনেই পাড়ি দেয়। তাঁর মতে এ আরোহণ দুনিয়াতেই, কারণ সূরার শুরুর প্রসঙ্গ সেদিকেই ইঙ্গিত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Whole Age of the World",
          "bn": "দুনিয়ার পুরো বয়স"
        },
        "p": [
          {
            "en": "The second view in Ibn Kathir's count takes the day as the whole life of this world, from its creation to the Hour. He reports from Mujahid, through Ibn Jurayj, that the world's age is fifty thousand years. Through Ma'mar he reports Mujahid and Ikrima together: the world from first to last is fifty thousand years, and no one knows how much has passed or how much remains except Allah. Al-Qurtubi records the same from Mujahid, al-Hakam and Ikrima, with the same closing line.",
            "bn": "ইবন কাসীরের গণনায় দ্বিতীয় মত হলো, দিনটি দুনিয়ার পুরো আয়ু, সৃষ্টির শুরু থেকে কিয়ামত পর্যন্ত। ইবন জুরাইজের সূত্রে তিনি মুজাহিদ থেকে আনেন, দুনিয়ার বয়স পঞ্চাশ হাজার বছর। মা'মারের সূত্রে তিনি মুজাহিদ ও ইকরিমা দুজনের কথা একসঙ্গে আনেন: দুনিয়া শুরু থেকে শেষ পর্যন্ত পঞ্চাশ হাজার বছর। কতটা পেরিয়ে গেছে আর কতটা বাকি, আল্লাহ ছাড়া কেউ জানে না। কুরতুবীও মুজাহিদ, হাকাম ও ইকরিমা থেকে একই কথা লিপিবদ্ধ করেন, শেষ বাক্যটিসহ।"
          },
          {
            "en": "The third view, which Ibn Kathir calls very strange, comes from Muhammad ibn Ka'b through Ibn Abi Hatim: it is the day of separation between this world and the next. Al-Qurtubi, for his part, names Muhammad ibn Ka'b among those who took the day as the Day of Resurrection, so the two commentators attach him to different views. Both attributions stand here as each commentator gives them. The fourth view, the Day of Resurrection, gathers the longest list of names.",
            "bn": "তৃতীয় মতটিকে ইবন কাসীর বলেন খুবই অদ্ভুত। মতটি ইবন আবী হাতিমের সূত্রে মুহাম্মাদ ইবন কা'বের: এটি দুনিয়া ও আখিরাতের মাঝখানের পৃথক করার দিন। অথচ কুরতুবী মুহাম্মাদ ইবন কা'বের নাম রাখেন তাঁদের মধ্যে, যাঁরা দিনটিকে কিয়ামতের দিন বলেছেন। অর্থাৎ দুই তাফসীরকার তাঁকে দুই ভিন্ন মতের সঙ্গে যুক্ত করেছেন। প্রতিটি তাফসীরকার যেভাবে দিয়েছেন, এখানে দুটি বর্ণনাই সেভাবেই থাকল। চতুর্থ মত, অর্থাৎ কিয়ামতের দিন, তার পেছনেই নামের তালিকা সবচেয়ে লম্বা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day of the Standing",
          "bn": "হিসাবের জন্য দাঁড়ানোর দিন"
        },
        "p": [
          {
            "en": "Ibn Kathir reports this fourth view from Ikrima from Ibn Abbas through Ibn Abi Hatim and says its chain is sahih; at-Tabari has it from Ikrima, Qatada, ad-Dahhak and Ibn Zayd. Through Ali ibn Abi Talha, Ibn Abbas adds a qualifier: this is the Day of Resurrection, which Allah made the measure of fifty thousand years for the disbelievers. At-Tabari also gives Ikrima's fuller wording, a day in which the judgement between His creation is completed, the length of that day being fifty thousand years.",
            "bn": "চতুর্থ এ মত ইবন কাসীর ইবন আবী হাতিমের সূত্রে ইকরিমা থেকে, তিনি ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, আর বলেন এর সনদ সহীহ। তাবারী মতটি আনেন ইকরিমা, কাতাদা, দাহহাক ও ইবন যায়দ থেকে। আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) একটি শর্ত যোগ করেন: এটি কিয়ামতের দিন, কাফিরদের জন্য আল্লাহ যার পরিমাণ করেছেন পঞ্চাশ হাজার বছর। তাবারী ইকরিমার আরও পূর্ণ ভাষ্যও দেন: এমন এক দিন, যেদিন তাঁর সৃষ্টির মাঝে বিচার শেষ করা হবে, আর সেই দিনের দৈর্ঘ্য পঞ্চাশ হাজার বছর।"
          },
          {
            "en": "The number is explained variously within this view. Al-Hasan, in al-Baghawi and al-Qurtubi, says the Day of Resurrection has no end; the fifty thousand years are their standing for the reckoning, after which the people of the two abodes settle in them. Yaman says it holds fifty stations of a thousand years each. Al-Baghawi gives, as the sense of what Ata reported from Ibn Abbas and of Muqatil, that if anyone but Allah undertook the reckoning it would not be finished in fifty thousand years. In al-Kalbi's wording Allah says: I finish it in an hour of the day.",
            "bn": "এ মতের ভেতরেও সংখ্যাটির ব্যাখ্যা নানা রকম। বাগাভী ও কুরতুবীতে হাসানের কথা আছে: কিয়ামতের দিনের কোনো শেষ নেই। পঞ্চাশ হাজার বছর হলো হিসাবের জন্য তাদের দাঁড়িয়ে থাকার সময়, তারপর দুই ঠিকানার বাসিন্দারা নিজ নিজ ঠিকানায় স্থির হয়ে যাবে। ইয়ামান বলেন, সেদিন পঞ্চাশটি অবস্থানস্থল, প্রতিটি হাজার বছরের। বাগাভী আতার মাধ্যমে ইবন আব্বাস (রাঃ) থেকে এবং মুকাতিল থেকে এর মর্ম আনেন: আল্লাহ ছাড়া অন্য কেউ এ হিসাব নিলে পঞ্চাশ হাজার বছরেও শেষ করতে পারত না। কালবীর ভাষায় আল্লাহ বলেন: আমি দিনের এক ঘণ্টায় তা শেষ করি।"
          },
          {
            "en": "Al-Qurtubi records a further reading, that the number is a likeness conveying how long and hard the standing will feel, since the Arabs describe days of hardship as long and days of joy as short. He then states his own preference: the saying of Ibn Abbas, a day made fifty thousand years for the disbelievers, is in his words the best said about the verse, if Allah wills. As-Sa'di allows this as a second possibility: a day long and severe, which Allah lightens for the believer.",
            "bn": "কুরতুবী আরেকটি ব্যাখ্যা লিপিবদ্ধ করেন: সংখ্যাটি একটি উপমা। এর উদ্দেশ্য বোঝানো যে দাঁড়িয়ে থাকার সময়টা কত দীর্ঘ আর কত কঠিন মনে হবে। কারণ আরবরা কষ্টের দিনকে বলে লম্বা, আর আনন্দের দিনকে ছোট। তারপর তিনি নিজের পছন্দ জানান। ইবন আব্বাস (রাঃ)-এর কথা, অর্থাৎ কাফিরদের জন্য পঞ্চাশ হাজার বছরের দিন, তাঁর ভাষায় আয়াতের ব্যাপারে বলা সবচেয়ে উত্তম কথা, ইনশাআল্লাহ। সা'দী এটিকে দ্বিতীয় সম্ভাবনা হিসেবে মেনে নেন: দীর্ঘ ও কঠিন এক দিন, যা আল্লাহ মুমিনের জন্য হালকা করে দেন।"
          },
          {
            "en": "This view raises a question of grammar: which words does in a day belong to? At-Tabari attaches it to the rising itself. Al-Baghawi and al-Qurtubi each record that the sentence has a fronting and a deferral, so the sense runs: no repeller from Allah, Owner of the ways of ascent, on a day whose measure is fifty thousand years, the angels and the Spirit ascending to Him. Al-Qurtubi says this is the meaning of what he chose. Ma'arif al-Qur'an likewise connects the phrase to an understood verb, will occur, so that the punishment of 70:1 falls on that day.",
            "bn": "এ মত থেকে ব্যাকরণের একটা প্রশ্ন ওঠে: ফী ইয়াওমিন, অর্থাৎ এক দিনে, কথাটি কোন শব্দের সঙ্গে যুক্ত? তাবারী একে যুক্ত করেন আরোহণের সঙ্গেই। বাগাভী ও কুরতুবী দুজনেই লেখেন, বাক্যে আগে-পরে করা হয়েছে। তখন অর্থ দাঁড়ায়: আরোহণের পথগুলোর মালিক আল্লাহর পক্ষ থেকে আসা সে শাস্তি ঠেকানোর কেউ নেই, এমন এক দিনে যার পরিমাণ পঞ্চাশ হাজার বছর, ফেরেশতারা ও রূহ তাঁর দিকে আরোহণ করে। কুরতুবী বলেন, তিনি যে মত বেছে নিয়েছেন এটি তারই অর্থ। মাআরিফুল কুরআনও কথাটিকে একটি উহ্য ক্রিয়ার সঙ্গে যুক্ত করে, অর্থাৎ সংঘটিত হবে। ফলে ৭০:১ আয়াতের শাস্তি নেমে আসবে সেই দিনেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Thousand Years Beside Fifty",
          "bn": "পঞ্চাশের পাশে এক হাজার"
        },
        "p": [
          {
            "en": "The verse has a neighbour in 32:5: He directs the affair from the heaven to the earth, then it ascends to Him in a day whose measure is a thousand years of what you count. At-Tabari, citing Mujahid, separates the two. The fifty thousand years run from the lowest limit of His command to its highest, while the thousand years are the command's descent from heaven to earth and its return in a single day, since between heaven and earth lies a journey of five hundred years. Al-Qurtubi and Ibn Kathir report the same reconciliation.",
            "bn": "এ আয়াতের এক প্রতিবেশী আছে ৩২:৫ আয়াতে: তিনি আসমান থেকে জমিন পর্যন্ত সব বিষয় পরিচালনা করেন, তারপর তা তাঁর দিকে উঠে যায় এমন এক দিনে, তোমাদের গণনায় যার পরিমাণ হাজার বছর। তাবারী মুজাহিদের কথা এনে দুটিকে আলাদা করেন। পঞ্চাশ হাজার বছর হলো তাঁর আদেশের নিচের শেষ সীমা থেকে উপরের শেষ সীমা পর্যন্ত। আর হাজার বছর হলো আদেশের আসমান থেকে জমিনে নামা আর এক দিনেই ফিরে যাওয়া, কারণ আসমান ও জমিনের মাঝে পাঁচশো বছরের পথ। কুরতুবী ও ইবন কাসীরও এই সমন্বয় বর্ণনা করেন।"
          },
          {
            "en": "Ibn Abbas, by at-Tabari's report through Ibn Abi Mulayka, declined to reconcile them. A man asked him about the day of a thousand years; he asked back about the day of fifty thousand, and when pressed answered: they are two days Allah has mentioned, Allah knows best about them, and I dislike saying in the Book of Allah what I do not know. Ma'arif al-Qur'an takes another road: length is relative, and the same Day is felt longer or shorter by different people according to their state.",
            "bn": "তাবারী ইবন আবী মুলাইকার সূত্রে জানান, ইবন আব্বাস (রাঃ) দুটির মধ্যে সমন্বয় করতে রাজি হননি। এক ব্যক্তি তাঁকে হাজার বছরের দিনের কথা জিজ্ঞেস করল। তিনি উল্টো জানতে চাইলেন পঞ্চাশ হাজার বছরের দিন কোনটি। লোকটি পীড়াপীড়ি করলে তিনি বললেন: এ দুই দিনের কথা আল্লাহ উল্লেখ করেছেন, আল্লাহই এ দুটির ব্যাপারে ভালো জানেন। আর আল্লাহর কিতাবে যা জানি না তা বলা আমি অপছন্দ করি। মাআরিফুল কুরআন অন্য পথ ধরে: দৈর্ঘ্য আপেক্ষিক। একই দিন মানুষের অবস্থাভেদে কারও কাছে দীর্ঘ, কারও কাছে ছোট মনে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Lighter Than a Prayer",
          "bn": "এক ওয়াক্ত নামাজের চেয়েও হালকা"
        },
        "p": [
          {
            "en": "At-Tabari, al-Baghawi and Ibn Kathir narrate from Abu Sa'id that the Prophet ﷺ was asked how long such a day would be, and said: by Him in whose hand is my soul, it will be made light for the believer until it is lighter for him than a prescribed prayer he prays in this world. Al-Qurtubi cites it as proof for his preferred view. Ibn Kathir, though, says two of its narrators, Darraj and his teacher, are weak. Al-Qurtubi also reports Ibrahim at-Taymi: for the believer it lasts only as long as the time between zuhr and asr.",
            "bn": "তাবারী, বাগাভী ও ইবন কাসীর আবু সাঈদ (রাঃ) থেকে বর্ণনা করেন: নবী ﷺ-কে জিজ্ঞেস করা হলো, এমন দিন কত দীর্ঘ হবে। তিনি বললেন: যাঁর হাতে আমার প্রাণ তাঁর কসম, মুমিনের জন্য দিনটি এমন হালকা করা হবে যে দুনিয়াতে সে যে ফরজ নামাজ পড়ে, তার চেয়েও হালকা লাগবে। কুরতুবী একে নিজের পছন্দের মতের প্রমাণ হিসেবে আনেন। তবে ইবন কাসীর বলেন, এর দুজন বর্ণনাকারী, দাররাজ ও তাঁর শিক্ষক, দুর্বল। কুরতুবী ইবরাহীম তাইমীর কথাও আনেন: মুমিনের জন্য দিনটি কেবল যোহর থেকে আসর পর্যন্ত সময়ের মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Withheld Right",
          "bn": "আদায় না করা হক"
        },
        "p": [
          {
            "en": "The narration continues in the same vein with the owners of camels and sheep who do not pay Zakat. Muslim gives no separate grading, and its place in his Sahih is his judgement. Al-Qurtubi reports that an-Nahhas used a similar narration through Suhayl to show that the verse's day is the Day of Resurrection. Ibn Kathir says he brings the hadith for its words, until Allah pronounces judgment among His servants. Read beside this hadith, the verse's long day is also the day on which unpaid rights are settled.",
            "bn": "বর্ণনাটি একই সুরে এগিয়ে যায় উট ও বকরির সেই মালিকদের কথায়, যারা যাকাত আদায় করে না। মুসলিম এর আলাদা কোনো মান উল্লেখ করেননি। তাঁর সহীহ গ্রন্থে স্থান পাওয়াটাই তাঁর রায়। কুরতুবী জানান, নাহহাস সুহাইলের সূত্রে এ ধরনের এক বর্ণনা থেকে দলিল দিয়েছেন যে আয়াতের দিনটি কিয়ামতের দিন। ইবন কাসীর বলেন, তিনি এখানে হাদীসটি এনেছেন এর এই কথাটির জন্য: যতক্ষণ না আল্লাহ তাঁর বান্দাদের মাঝে ফয়সালা করেন। এই হাদীসের পাশে রেখে পড়লে আয়াতের দীর্ঘ দিনটি সেই দিনও, যেদিন আদায় না করা হকের হিসাব মেটানো হবে।"
          },
          {
            "en": "The verse that follows, 70:5, tells the Prophet ﷺ to be patient with a beautiful patience, and Ibn Kathir explains it as patience with his people's rejection and their haste for the punishment. The Muyassar has the asker of 70:1 as a polytheist calling the punishment down on himself and his people. The verse describes what the text describes, a particular caller and a day Allah owns, and licenses nothing against any living person or community. What it leaves the reader is a number large enough to make haste look small.",
            "bn": "পরের আয়াত ৭০:৫ নবী ﷺ-কে বলে সুন্দর ধৈর্যে ধৈর্য ধরতে। ইবন কাসীরের ব্যাখ্যায় এ ধৈর্য তাঁর কওমের অস্বীকার আর শাস্তির জন্য তাদের তাড়াহুড়োর উপর। মুয়াসসার ৭০:১ আয়াতের প্রশ্নকারীকে বলে এক মুশরিক, যে নিজের ও নিজের কওমের উপর শাস্তি নামানোর দোয়া করেছিল। আয়াত শুধু তা-ই বর্ণনা করে যা পাঠে আছে: এক নির্দিষ্ট আহ্বানকারী আর আল্লাহর মালিকানাধীন এক দিন। আজ জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। পাঠকের হাতে সে রেখে যায় এমন বড় এক সংখ্যা, যার সামনে তাড়াহুড়োকে খুব ছোট দেখায়।"
          }
        ]
      }
    ]
  },
  "70:8": {
    "sections": [
      {
        "h": {
          "en": "An Answer Shaped as a Day",
          "bn": "জবাব এল দিনের ছবিতে"
        },
        "p": [
          {
            "en": "The surah opens on a questioner who asked for a punishment bound to fall (70:1), a punishment that none can push away (70:2), coming from Allah, owner of the ways of ascent (70:3). Then 70:6 and 70:7: they see it as far, and We see it as near. Ma'arif al-Qur'an, commenting on that pair, says far and near here refer neither to time nor to space but to possibility: the deniers think the Resurrection will never happen, while Allah sees it as a certain reality.",
            "bn": "সূরার শুরুতে এক প্রশ্নকারী, যে এমন শাস্তি চেয়েছিল যা ঘটবেই (৭০:১), যাকে কেউ ঠেকাতে পারবে না (৭০:২), আর যা আসবে আরোহণের পথগুলোর মালিক আল্লাহর কাছ থেকে (৭০:৩)। তারপর ৭০:৬ ও ৭০:৭: তারা একে দূরে দেখে, আর আমি একে কাছে দেখি। মাআরিফুল কুরআন এই দুই আয়াতের আলোচনায় বলে, এখানে দূর আর কাছের মানে সময় বা জায়গার দূরত্ব নয়। কথাটা সম্ভাবনার। অস্বীকারকারীরা মনে করে কিয়ামত কখনো ঘটবে না, আর আল্লাহর কাছে তা নিশ্চিত বাস্তব।"
          },
          {
            "en": "Into that exchange comes the verse, four Arabic words: yawma takunu al-sama'u ka-l-muhl, on the Day the sky will be like al-muhl. Ibn Kathir introduces it by restating the thread: Allah says that the torment will befall the disbelievers, and the verse names when. As-Sa'di reads the Day as the Day of Resurrection, in which these tremendous matters take place. The questioner had asked for something to happen. The reply does not name an hour. It shows him what that Day will look like.",
            "bn": "এই কথোপকথনের মাঝেই আসে আয়াতটি, আরবিতে মাত্র চারটি শব্দ: ইয়াওমা তাকূনুস সামাউ কাল মুহল, যেদিন আকাশ হবে আল-মুহলের মতো। ইবন কাসীর আয়াতটির আগে আলোচনার সুতোটা আবার ধরিয়ে দেন: আল্লাহ বলছেন, শাস্তি কাফিরদের উপর নেমে আসবে, আর আয়াতটি জানায় কখন। সা'দীর মতে দিনটি কিয়ামতের দিন, যেদিন এসব ভয়াবহ ঘটনা ঘটবে। প্রশ্নকারী চেয়েছিল কিছু একটা ঘটুক। জবাবে কোনো সময় বলা হলো না। তাকে দেখানো হলো সেই দিনটা কেমন হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Yawma Hangs Upon",
          "bn": "ইয়াওমা শব্দ কার সঙ্গে বাঁধা"
        },
        "p": [
          {
            "en": "Al-Qurtubi's first remark on the verse is grammatical. The opening word, yawma, on the Day, needs something in the passage to govern it, and he names it: the governing word is waqi', bound to happen, in 70:1. He spells out the sense as: the punishment falls upon them on the Day. On that reading the verse completes the surah's very first sentence. The questioner asked for a punishment that would befall, and the answer, several verses on, tells him the Day on which it befalls.",
            "bn": "এ আয়াতে কুরতুবীর প্রথম কথাটা ব্যাকরণের। শুরুর শব্দ ইয়াওমা, অর্থাৎ যেদিন, এর পেছনে বাক্যের এমন কোনো শব্দ থাকা চাই যার সঙ্গে এটি বাঁধা। কুরতুবী সেটি চিহ্নিত করেন: ৭০:১ আয়াতের ওয়াকি', অর্থাৎ যা ঘটবেই। তাঁর ভাষায় অর্থ দাঁড়ায়: সেদিন তাদের উপর শাস্তি নেমে আসবে। এভাবে পড়লে আয়াতটি সূরার একেবারে প্রথম বাক্যকেই পূর্ণ করে। প্রশ্নকারী চেয়েছিল এমন শাস্তি যা নেমে আসবে। কয়েক আয়াত পরে জবাব তাকে জানিয়ে দেয়, কোন দিনে তা নামবে।"
          },
          {
            "en": "He then reports three other views, each introduced with the words it has been said. The governing word may be narahu in 70:7, so that the sense is We see it near, on the Day the sky is like al-muhl. It may be yubassarunahum in 70:11, they will be made to see each other, on that Day. Or the Day may stand in apposition to qariban, near, in 70:7, so that the thing Allah sees as near is the Day itself, described in the very next words.",
            "bn": "এরপর তিনি আরও তিনটি মত উল্লেখ করেন, প্রতিটির আগে 'বলা হয়েছে' কথাটি জুড়ে। এক মতে ইয়াওমা বাঁধা ৭০:৭ আয়াতের নারাহু শব্দের সঙ্গে। তখন অর্থ হয়: আমি তা কাছে দেখি, যেদিন আকাশ হবে আল-মুহলের মতো। আরেক মতে এটি বাঁধা ৭০:১১ আয়াতের ইউবাসসারূনাহুম শব্দের সঙ্গে: সেদিন তাদেরকে একে অপরকে দেখানো হবে। তৃতীয় মতে দিনটি ৭০:৭ আয়াতের কারীবা, অর্থাৎ কাছে, শব্দের জায়গায় বসে তারই পরিচয় দেয়। তখন আল্লাহ যাকে কাছে দেখেন, তা ওই দিনটিই, যার বর্ণনা ঠিক পরের শব্দগুলোতে।"
          },
          {
            "en": "The choice changes which neighbour the verse leans on. On al-Qurtubi's own reading it answers the request in 70:1. On the others it explains what Allah sees as near, or it sets the scene in which people are shown each other. Al-Qurtubi gives his reading first and lists the rest without refuting them, so the article keeps them as he does. Whichever word governs yawma, the image that follows is the same, and the sources spend most of their words on it.",
            "bn": "কোন শব্দের সঙ্গে বাঁধা ধরা হবে, তার উপর নির্ভর করে আয়াতটি কোন প্রতিবেশী আয়াতে ভর দেবে। কুরতুবীর নিজের পাঠে এটি ৭০:১ আয়াতের চাওয়ার জবাব। অন্য পাঠগুলোতে এটি বোঝায় আল্লাহ কোন জিনিসকে কাছে দেখেন, কিংবা সেই দৃশ্যের পটভূমি আঁকে যেখানে মানুষকে একে অপরকে দেখানো হবে। কুরতুবী নিজের মত আগে বলেন, বাকিগুলো খণ্ডন না করে তালিকায় রাখেন। এই লেখাও সেগুলো সেভাবেই রাখছে। ইয়াওমা যার সঙ্গেই বাঁধা হোক, পরের ছবিটি একই থাকে, আর উৎসগুলো তাদের বেশির ভাগ কথা ব্যয় করেছে সেই ছবির উপরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Melted, Flowing, Split Open",
          "bn": "গলে যাওয়া, গড়িয়ে পড়া, ফেটে যাওয়া"
        },
        "p": [
          {
            "en": "At-Tabari keeps his comment here to a single line of meaning: on the Day the sky will be like the thing that is melted. He adds that he has already explained al-muhl earlier in his commentary, with its supporting evidence, the disagreement of those who differed over it, and what the early generations said, and that this spares him repeating it here. So at this verse he gives only the core, a thing melted, and leaves the detailed glosses where he first discussed the word.",
            "bn": "তাবারী এখানে অর্থটা এক বাক্যে বলেন: সেদিন আকাশ হবে গলানো জিনিসের মতো। সঙ্গে জানান, আল-মুহলের মানে তিনি তাফসীরের আগের এক জায়গায় প্রমাণসহ ব্যাখ্যা করেছেন। কারা এ নিয়ে ভিন্নমত করেছেন, আর পূর্বসূরিরা কী বলেছেন, সেটাও সেখানে এনেছেন। তাই এখানে আর পুনরাবৃত্তির দরকার নেই। ফলে এই আয়াতে তিনি শুধু মূল কথাটা দেন, গলানো কোনো জিনিস। বিস্তারিত ব্যাখ্যাগুলো রেখে দেন সেখানে, যেখানে শব্দটি নিয়ে প্রথম আলোচনা করেছিলেন।"
          },
          {
            "en": "Two other commentators add a detail about the sky's state. The Muyassar, explaining 70:8 and 70:9 together, says the sky will be flowing, sa'ilah, like the dregs of oil. As-Sa'di says the likeness comes from the sky's splitting apart and from the terror reaching its utmost in it. None of the fetched texts describes the sky in any further physical terms, and the article adds none. What the sources give is a sky that has lost its firmness: melted, running, broken open.",
            "bn": "আরও দুজন তাফসীরকার আকাশের অবস্থা নিয়ে একটু যোগ করেন। মুয়াসসার ৭০:৮ ও ৭০:৯ একসঙ্গে ব্যাখ্যা করে বলে, আকাশ হবে বহমান, সাইলা, তেলের তলানির মতো। সা'দী বলেন, এই সাদৃশ্য আসে আকাশ ফেটে যাওয়া থেকে, আর এ থেকে যে ভয়াবহতা তাতে চরম সীমায় পৌঁছে যায়। যে তাফসীরগুলো সামনে আছে, তার কোনোটিই আকাশের আর কোনো বস্তুগত বিবরণ দেয় না। এই লেখাও নিজে থেকে কিছু যোগ করছে না। উৎসগুলো যা দেয় তা হলো এমন এক আকাশ, যার দৃঢ়তা হারিয়ে গেছে: গলে গেছে, গড়িয়ে পড়ছে, ফেটে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Residue of Oil",
          "bn": "তেলের তলানি"
        },
        "p": [
          {
            "en": "The gloss with the longest list of names is oil. Ibn Kathir reports that Ibn 'Abbas, Mujahid, 'Ata, Sa'id ibn Jubayr, 'Ikrimah, as-Suddi and more than one other said: like durdi al-zayt, the residue of oil. His English abridgement keeps the same six names and the same words. No other gloss of al-muhl in the fetched texts carries so many early authorities, and Ibn Kathir offers no second gloss beside it. For him the matter is settled in a single sentence.",
            "bn": "যে ব্যাখ্যার পেছনে সবচেয়ে বেশি নাম, তা হলো তেল। ইবন কাসীর জানান, ইবন আব্বাস (রাঃ), মুজাহিদ, আতা, সাঈদ ইবন জুবাইর, ইকরিমা, সুদ্দী এবং আরও অনেকে বলেছেন: দুরদিয়্যিয যাইতের মতো, অর্থাৎ তেলের তলানি। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণেও সেই ছয়টি নাম, সেই একই কথা। সামনে থাকা তাফসীরগুলোতে আল-মুহলের আর কোনো ব্যাখ্যার পেছনে এত বেশি পূর্বসূরির নাম নেই। ইবন কাসীর এর পাশে দ্বিতীয় কোনো ব্যাখ্যাও আনেন না। তাঁর কাছে বিষয়টি এক বাক্যেই মীমাংসিত।"
          },
          {
            "en": "Al-Qurtubi gives the same gloss with an extra word: al-muhl is durdi al-zayt wa-'akaruhu, the residue of oil and its sediment, in the view of Ibn 'Abbas and others. Al-Baghawi opens his comment with ka-'akari al-zayt, like the sediment of oil, without naming anyone for it. The Muyassar, as already seen, says the sky will flow like huthalat al-zayt, the dregs of oil. Three different Arabic words, durdi, 'akar and huthalah, all point to what settles at the bottom of oil.",
            "bn": "কুরতুবীও একই ব্যাখ্যা দেন, সঙ্গে একটি শব্দ বাড়িয়ে: আল-মুহল হলো দুরদিয়্যিয যাইত ওয়া আকারুহু, তেলের তলানি ও তার গাদ। এটি ইবন আব্বাস (রাঃ) ও অন্যদের মত। বাগাভী তাঁর আলোচনা শুরু করেন কা-আকারিয যাইত দিয়ে, অর্থাৎ তেলের গাদের মতো, এর জন্য কারও নাম উল্লেখ না করে। মুয়াসসারের কথা আগেই এসেছে: আকাশ গড়িয়ে পড়বে হুসালাতুয যাইতের মতো, তেলের তলানির মতো। আরবি তিনটি আলাদা শব্দ, দুরদী, আকার আর হুসালা। তিনটিই ইঙ্গিত করে তেলের নিচে যা জমে থাকে তার দিকে।"
          },
          {
            "en": "So four of the fetched works, Ibn Kathir, al-Qurtubi, al-Baghawi and the Muyassar, give oil as their first gloss. None of them says whether the likeness lies in colour, in thickness or in some other quality, except that the Muyassar pairs it with flowing. The article leaves that open, as they do. The English rendering printed beside the verse, like murky oil, follows this line of interpretation. It is one gloss among several, and the next sections show the others with the names attached to them.",
            "bn": "তাহলে সামনে থাকা চারটি তাফসীর, ইবন কাসীর, কুরতুবী, বাগাভী ও মুয়াসসার, প্রথম ব্যাখ্যা হিসেবে তেলের কথাই বলে। সাদৃশ্যটা রঙে, ঘনত্বে, নাকি অন্য কোনো গুণে, তা তাঁদের কেউ বলেন না। শুধু মুয়াসসার এর সঙ্গে বহমানতার কথা জুড়ে দেয়। এই লেখাও প্রশ্নটা তাঁদের মতোই খোলা রাখছে। আয়াতের পাশে ছাপা ইংরেজি অনুবাদ, ঘোলা তেলের মতো, এই ধারার ব্যাখ্যাই অনুসরণ করে। তবে এটি কয়েকটি ব্যাখ্যার একটি মাত্র। পরের অংশগুলোতে বাকিগুলো আসছে, যাঁরা বলেছেন তাঁদের নামসহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Lead, Copper and Silver",
          "bn": "সীসা, তামা আর রূপা"
        },
        "p": [
          {
            "en": "A second line of glosses reads al-muhl as melted metal. Al-Qurtubi reports that Ibn Mas'ud said: it is whatever is melted of lead, copper and silver. He gives this as Ibn Mas'ud's own saying, and the fetched text carries no chain for it. It is a Companion's explanation of a word, not a saying of the Prophet ﷺ, and it should be read that way. It names three metals rather than one, so it describes a kind of thing, not a single substance.",
            "bn": "ব্যাখ্যার দ্বিতীয় ধারায় আল-মুহল মানে গলানো ধাতু। কুরতুবী জানান, ইবন মাসউদ (রাঃ) বলেছেন: সীসা, তামা ও রূপার যা গলানো হয়, তা-ই আল-মুহল। কুরতুবী এটি এনেছেন ইবন মাসউদের নিজের কথা হিসেবে, আর সামনে থাকা লেখায় এর কোনো সনদ নেই। এটি একজন সাহাবীর শব্দ-ব্যাখ্যা, নবী ﷺ-এর বাণী নয়। একে সেভাবেই পড়া উচিত। এতে একটি নয়, তিনটি ধাতুর নাম আছে। তাই এটি কোনো একক পদার্থ নয়, এক ধরনের জিনিসের বর্ণনা দেয়।"
          },
          {
            "en": "Al-Baghawi, after his opening gloss of oil's sediment, adds: al-Hasan said, like silver when it is melted. As-Sa'di chooses lead, and only lead: al-muhl is al-rasas al-mudhab, molten lead. So the metal reading appears in three forms across the sources. Ibn Mas'ud names three metals, al-Hasan names silver, and as-Sa'di names lead. None of the three is presented as correcting the others, and none of them is said to contradict the reading of oil.",
            "bn": "বাগাভী তেলের গাদের ব্যাখ্যা দিয়ে শুরু করার পর যোগ করেন: হাসান বলেছেন, গলানো রূপার মতো। সা'দী বেছে নেন সীসা, শুধু সীসাই: আল-মুহল হলো আর-রাসাসুল মুযাব, গলানো সীসা। ফলে উৎসগুলোতে ধাতুর ব্যাখ্যা তিন রূপে আসে। ইবন মাসউদ (রাঃ) তিনটি ধাতুর নাম নেন, হাসান নেন রূপার নাম, আর সা'দী সীসার। কাউকেই অন্যের ভুল শুধরে দেওয়া মত হিসেবে আনা হয়নি। তেলের ব্যাখ্যার বিরোধী বলেও কোনোটিকে দেখানো হয়নি।"
          },
          {
            "en": "The translations show how a translator must choose where a commentator need not. The English rendering beside 70:8 says murky oil. The Bengali rendering beside the same verse says molten silver, the gloss al-Baghawi reports from al-Hasan. At 44:45, where the same word occurs, that Bengali rendering says molten copper. Each translator had to commit to one word in each place. The commentators, writing at length, could keep several readings together, and on this verse they did.",
            "bn": "অনুবাদকে যেখানে বেছে নিতেই হয়, তাফসীরকারের সেখানে সে বাধ্যবাধকতা নেই। অনুবাদগুলো তা দেখিয়ে দেয়। ৭০:৮ আয়াতের পাশের ইংরেজি অনুবাদ বলছে ঘোলা তেল। একই আয়াতের পাশের বাংলা অনুবাদ বলছে গলিত রূপা, যা বাগাভী হাসান থেকে বর্ণনা করেছেন। ৪৪:৪৫ আয়াতে একই শব্দ আছে, আর সেখানে ওই বাংলা অনুবাদ বলছে গলিত তামা। প্রতিটি জায়গায় অনুবাদককে একটি শব্দেই স্থির হতে হয়েছে। তাফসীরকারেরা বিস্তারিত লেখেন, তাই কয়েকটি ব্যাখ্যা একসঙ্গে ধরে রাখতে পারেন। এই আয়াতে তাঁরা ঠিক তা-ই করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Mujahid in Two Reports",
          "bn": "মুজাহিদের দুই বর্ণনা"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a third kind of gloss. Mujahid said: ka-l-muhl, like pus of blood and purulence, qayh min dam wa-sadid. This is neither oil nor metal. Yet Ibn Kathir, as seen above, lists Mujahid among those who said the residue of oil. So two of the fetched commentaries report two different glosses from the same name. Neither text gives a chain here, and neither mentions the other report. The article sets both down as each commentary gives them and does not decide between them.",
            "bn": "কুরতুবী তৃতীয় এক ধরনের ব্যাখ্যাও লিখে রাখেন। মুজাহিদ বলেছেন: কাল মুহল মানে রক্ত আর পুঁজের মতো, কাইহুম মিন দামিন ওয়া সাদীদ। এটি তেলও নয়, ধাতুও নয়। অথচ আগেই দেখা গেছে, ইবন কাসীর মুজাহিদকে রেখেছেন তেলের তলানির পক্ষের তালিকায়। অর্থাৎ সামনে থাকা দুটি তাফসীর একই নামে দুটি আলাদা ব্যাখ্যা বর্ণনা করছে। এখানে কোনো লেখাতেই সনদ নেই, আর কেউ অন্য বর্ণনাটির কথা তোলেননি। এই লেখা দুটিকেই রাখছে যেভাবে প্রতিটি তাফসীর দিয়েছে, কোনটি মুজাহিদের আসল মত, সে ফয়সালা করছে না।"
          },
          {
            "en": "Laid side by side, the readings are these: the residue or sediment of oil, from Ibn 'Abbas and those Ibn Kathir names with him; whatever is melted of lead, copper and silver, from Ibn Mas'ud; melted silver, from al-Hasan; molten lead, in as-Sa'di; pus and blood, from Mujahid in al-Qurtubi's report; and at-Tabari's plain 'the thing melted'. At-Tabari says there was a disagreement over the word but does not repeat it here. The article picks none of them.",
            "bn": "পাশাপাশি সাজালে ব্যাখ্যাগুলো দাঁড়ায় এমন: তেলের তলানি বা গাদ, ইবন আব্বাস (রাঃ) ও ইবন কাসীর তাঁর সঙ্গে যাঁদের নাম নিয়েছেন তাঁদের মত। সীসা, তামা ও রূপার যা গলানো হয়, ইবন মাসউদ (রাঃ)-এর মত। গলানো রূপা, হাসানের মত। গলানো সীসা, সা'দীর ব্যাখ্যা। রক্ত ও পুঁজ, কুরতুবীর বর্ণনায় মুজাহিদের মত। আর তাবারীর সাদামাটা কথা, গলানো জিনিস। তাবারী জানান, শব্দটি নিয়ে মতভেদ ছিল, তবে এখানে তা আবার তোলেন না। এই লেখা কোনোটিকেই বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Elsewhere in the Qur'an",
          "bn": "কুরআনের অন্য দুই জায়গায়"
        },
        "p": [
          {
            "en": "Al-Qurtubi closes his comment by noting that the word has already been discussed in Surat ad-Dukhan and Surat al-Kahf. Besides 70:8, the Qur'an uses al-muhl in exactly those two places. In 18:29, those in the Fire who cry for relief are relieved with water like al-muhl that scalds the faces. In 44:45, the food of the tree of zaqqum, named in 44:43 and 44:44, is like al-muhl, boiling in the bellies.",
            "bn": "কুরতুবী তাঁর আলোচনা শেষ করেন এই কথা বলে যে শব্দটি নিয়ে সূরা দুখান ও সূরা কাহফে আগেই আলোচনা হয়েছে। ৭০:৮ ছাড়া কুরআনে আল-মুহল শব্দটি এসেছে ঠিক ওই দুই জায়গাতেই। ১৮:২৯ আয়াতে জাহান্নামের লোকেরা সাহায্যের জন্য ফরিয়াদ করলে তাদের দেওয়া হবে আল-মুহলের মতো পানি, যা মুখ ঝলসে দেয়। ৪৪:৪৫ আয়াতে যাক্কুম গাছের কথা, যার উল্লেখ ৪৪:৪৩ ও ৪৪:৪৪ আয়াতে। সেটি পাপীর খাদ্য, আর তা আল-মুহলের মতো পেটের ভেতর ফুটতে থাকবে।"
          },
          {
            "en": "In those two verses al-muhl describes what the people of the Fire drink and eat. Here it describes the sky. Al-Qurtubi only points to the earlier discussions; the text fetched for this verse does not carry them over, and the article does not import what he says there. At-Tabari likewise refers back to an earlier explanation without naming, in this passage, where it stands. The link the sources draw is the word itself, used of the Fire's drink and food and, here, of the heavens.",
            "bn": "ওই দুই আয়াতে আল-মুহল বোঝায় জাহান্নামবাসীদের পানীয় আর খাবার। এখানে বোঝায় আকাশ। কুরতুবী শুধু আগের আলোচনাগুলোর দিকে ইঙ্গিত করেন। এই আয়াতের জন্য সামনে থাকা লেখায় সেগুলো তুলে আনা হয়নি, আর এই লেখাও সেখানে তিনি যা বলেছেন তা টেনে আনছে না। তাবারীও আগের এক ব্যাখ্যার দিকে ফিরিয়ে দেন, তবে এই অংশে বলেন না সেটি কোথায়। উৎসগুলো যে যোগসূত্র দেখায়, তা শব্দটিই। একই শব্দ এসেছে জাহান্নামের পানীয় ও খাবারের বর্ণনায়, আর এখানে আকাশের বর্ণনায়।"
          },
          {
            "en": "The nearer link is the next verse: and the mountains will be like 'ihn. Ibn Kathir explains it as fluffed wool, reporting this from Mujahid, Qatadah and as-Suddi, and sets beside it 101:5, the mountains like carded wool. The Muyassar, treating 70:8 and 70:9 as one, has the mountains like dyed wool, fluffed and scattered by the wind. In both commentaries the sky that melts and the mountains that come loose belong to a single scene.",
            "bn": "আরও কাছের যোগসূত্র পরের আয়াত: আর পাহাড়গুলো হবে ইহনের মতো। ইবন কাসীর এর ব্যাখ্যা দেন ধুনা পশম বলে, এবং কথাটি বর্ণনা করেন মুজাহিদ, কাতাদা ও সুদ্দী থেকে। পাশে রাখেন ১০১:৫ আয়াত, যেখানে পাহাড় হবে ধুনা পশমের মতো। মুয়াসসার ৭০:৮ ও ৭০:৯ এক সঙ্গে ধরে বলে, পাহাড়গুলো হবে রঙিন পশমের মতো, ধুনে ফেলা, বাতাসে উড়ে যাওয়া। দুই তাফসীরেই গলে যাওয়া আকাশ আর আলগা হয়ে যাওয়া পাহাড় একই দৃশ্যের অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "No Hadith, No Physics",
          "bn": "হাদীস নেই, বিজ্ঞানও নেই"
        },
        "p": [
          {
            "en": "None of the fetched commentaries attaches a hadith of the Prophet ﷺ to this verse. Ibn Mas'ud's gloss, reported by al-Qurtubi, is his own explanation of a word. The sources give no occasion of revelation for the verse either; it is placed within the answer to the questioner of 70:1. They also say nothing about how the sky will come to melt beyond splitting and terror, and the article does not fill that gap with physics or astronomy of its own.",
            "bn": "সামনে থাকা কোনো তাফসীরই এই আয়াতের সঙ্গে নবী ﷺ-এর কোনো হাদীস যুক্ত করেনি। কুরতুবীর বর্ণনায় ইবন মাসউদ (রাঃ)-এর যে ব্যাখ্যা, তা একটি শব্দের ব্যাপারে তাঁর নিজের ব্যাখ্যা। আয়াতটির কোনো শানে নুযূলও উৎসগুলো দেয় না। আয়াতটির জায়গা ৭০:১ আয়াতের প্রশ্নকারীর জবাবের ভেতরে। আকাশ কীভাবে গলবে, সে বিষয়ে ফেটে যাওয়া আর ভয়াবহতার বাইরে তারা কিছু বলে না। এই লেখাও নিজের পক্ষ থেকে পদার্থবিদ্যা বা জ্যোতির্বিদ্যা দিয়ে সেই ফাঁক ভরাচ্ছে না।"
          },
          {
            "en": "What the verse does give is enough. A man asked for the punishment as though it could be summoned at will. The reply puts the sky itself in front of him, the most lasting thing he can see, and says it will be like something melted. For a reader the question shifts from when to how. Ma'arif al-Qur'an reads near as certain. If the Day is certain, the sensible response is not to ask for it but to prepare for it.",
            "bn": "আয়াতটি যা দেয়, তা-ই যথেষ্ট। এক লোক শাস্তি চেয়েছিল, যেন ইচ্ছা করলেই তাকে ডেকে আনা যায়। জবাব তার চোখের সামনে তুলে ধরে আকাশকে, তার দেখা সবচেয়ে টেকসই জিনিস, আর বলে, সেটিও হবে গলে যাওয়া কিছুর মতো। পাঠকের প্রশ্নও তখন বদলে যায়। কবে, তার জায়গায় আসে কীভাবে। মাআরিফুল কুরআন কাছে শব্দটি পড়ে নিশ্চিত অর্থে। দিনটি যদি নিশ্চিতই হয়, তবে বুদ্ধিমানের কাজ তাকে চেয়ে বসা নয়, তার জন্য প্রস্তুত হওয়া।"
          }
        ]
      }
    ]
  },
  "70:22-23": {
    "sections": [
      {
        "h": {
          "en": "The Diagnosis Before the Exception",
          "bn": "ব্যতিক্রমের আগে রোগনির্ণয়"
        },
        "p": [
          {
            "en": "Surah al-Ma'arij describes a human being before it names any cure. In 70:19 man is created halu'an, and the next two verses define the word rather than leave it standing: when evil touches him he is jazu'an, panicky; when good touches him he is manu'an, withholding. It is a portrait of someone unstable in both directions, unable to bear loss and unable to share gain. The Quran states it as how we are made, not as an accusation levelled at a few bad people.",
            "bn": "সূরা আল-মা'আরিজ কোনো প্রতিকারের নাম বলার আগে মানুষটির বর্ণনা দেয়। 70:19 আয়াতে বলা হয়, মানুষকে সৃষ্টি করা হয়েছে 'হালূ'আন' করে; আর পরের দুই আয়াত শব্দটিকে ঝুলিয়ে না রেখে তার সংজ্ঞা দেয়: বিপদ তাকে স্পর্শ করলে সে হয় 'জাযূ'আন', উৎকণ্ঠিত; কল্যাণ তাকে স্পর্শ করলে সে হয় 'মানূ'আন', কৃপণ। এটি এমন একজনের প্রতিকৃতি যে দুই দিকেই অস্থির — ক্ষতি সইতে পারে না, লাভ ভাগ করতেও পারে না। কুরআন একে বলে আমাদের গড়নের কথা হিসেবে, গুটিকয় খারাপ মানুষের বিরুদ্ধে অভিযোগ হিসেবে নয়।"
          },
          {
            "en": "Then comes the exception, and in Arabic it is two words: illa al-musallin — except those who pray. Al-musallin is an active participle, a standing description rather than a report of an act performed once. The exception is not from being human. It is from the condition just described. The Quran does not say that people who pray were made out of some other material; it says that this is what breaks the pattern. Everything the passage adds afterwards explains how.",
            "bn": "এরপর আসে ব্যতিক্রম, আর আরবিতে তা মাত্র দুটি শব্দ: ইল্লাল মুসাল্লীন — নামাযীরা ছাড়া। 'আল-মুসাল্লীন' একটি কর্তৃবাচক বিশেষণ, অর্থাৎ একবার সম্পন্ন কোনো কাজের খবর নয়, বরং একটি স্থায়ী পরিচয়। ব্যতিক্রমটি মানুষ হওয়া থেকে নয়। এটি ঠিক এইমাত্র বর্ণিত অবস্থাটি থেকে। কুরআন বলে না যে নামাযীদের অন্য কোনো উপাদানে গড়া হয়েছে; এটি বলে, এই জিনিসটিই ছকটি ভাঙে। এরপর অনুচ্ছেদটি যা যা যোগ করে, সবই ব্যাখ্যা করে কীভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Constant, Not Merely Present",
          "bn": "কেবল উপস্থিত নয়, অবিচল"
        },
        "p": [
          {
            "en": "The next verse qualifies who is meant: alladhina hum 'ala salatihim da'imun, those who are constant in their prayer. Da'im is continuity, something that does not stop. Two readings are recorded from the early commentators: that it means never abandoning the prayer, and that it means keeping it at its appointed times. The point survives either reading, and 107:4-5 shows the contrast the Quran itself draws, where woe is pronounced on those who pray but are heedless of their prayer. Praying is not the qualification; being constant in it is.",
            "bn": "পরের আয়াতটি নির্দিষ্ট করে দেয় কাদের কথা বলা হচ্ছে: আল্লাযীনা হুম 'আলা সালাতিহিম দাইমূন — যারা তাদের নামাযে অবিচল। 'দাইম' মানে ধারাবাহিকতা, এমন কিছু যা থামে না। প্রাচীন মুফাসসিরদের থেকে দুটি পাঠ বর্ণিত: এর অর্থ নামায কখনো ছেড়ে না দেওয়া, এবং এর অর্থ নির্ধারিত সময়ে তা আদায় করা। যে পাঠই নিন, মূল কথাটি টিকে থাকে; আর 107:4-5 আয়াতে কুরআন নিজেই যে বৈপরীত্য আঁকে তা দেখায়, যেখানে দুর্ভোগ ঘোষণা করা হয় তাদের জন্য যারা নামায পড়ে অথচ নিজেদের নামায সম্পর্কে উদাসীন। নামায পড়াটাই যোগ্যতা নয়; তাতে অবিচল থাকাটাই যোগ্যতা।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Exception Contains",
          "bn": "ব্যতিক্রমটির ভেতরে যা আছে"
        },
        "p": [
          {
            "en": "The list that follows is not only about worship. After prayer come those in whose wealth is a known right for the petitioner and the deprived in 70:24-25, then those who believe in the Day of Recompense in 70:26, those who fear their Lord's punishment in 70:27-28, those who guard their chastity in 70:29-31, those attentive to their trusts and promises in 70:32, and those upright in their testimonies in 70:33, before 70:34 returns to prayer and 70:35 states the reward: they will be in gardens, honoured.",
            "bn": "এরপরের তালিকাটি কেবল ইবাদতের নয়। নামাযের পর আসে তারা, যাদের সম্পদে প্রার্থী ও বঞ্চিতের জন্য একটি সুবিদিত অধিকার আছে — 70:24-25 আয়াতে; তারপর যারা বিচার দিবসে বিশ্বাস করে — 70:26 আয়াতে; যারা তাদের প্রতিপালকের শাস্তিকে ভয় করে — 70:27-28 আয়াতে; যারা নিজেদের লজ্জাস্থান সংরক্ষণ করে — 70:29-31 আয়াতে; যারা আমানত ও ওয়াদার ব্যাপারে যত্নবান — 70:32 আয়াতে; আর যারা সাক্ষ্যদানে সুপ্রতিষ্ঠিত — 70:33 আয়াতে। এরপর 70:34 আয়াতে ফিরে আসে নামাযের কথা, আর 70:35 আয়াতে বলা হয় প্রতিদান: তারাই থাকবে জান্নাতে, সম্মানিত অবস্থায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Opening and Closing on Prayer",
          "bn": "নামায দিয়ে শুরু, নামায দিয়ে শেষ"
        },
        "p": [
          {
            "en": "The two prayer verses are not a repetition, and the Arabic makes the difference audible. 70:23 says they are da'imun over their prayer; 70:34 says they are yuhafizun over it — guarding it, keeping watch on it. Constancy is about not stopping; guarding is about the thing itself, its times and its conditions and the attention paid inside it. Between those two statements the passage places money, belief, fear, chastity, contracts and testimony. Prayer is set as the frame around a whole social life rather than as one item on a list.",
            "bn": "নামায-সংক্রান্ত দুটি আয়াত পুনরাবৃত্তি নয়, আর আরবি পার্থক্যটি কানে ধরিয়ে দেয়। 70:23 আয়াতে বলা হয় তারা তাদের নামাযের ব্যাপারে 'দাইমূন'; 70:34 আয়াতে বলা হয় তারা তার ব্যাপারে 'ইউহাফিযূন' — রক্ষা করে, পাহারা দেয়। অবিচলতা হলো না থামা; আর রক্ষা করা হলো জিনিসটিকে ঘিরে — তার সময়, তার শর্ত এবং তার ভেতরে দেওয়া মনোযোগ। এই দুটি বক্তব্যের মাঝখানে অনুচ্ছেদটি বসিয়ে দেয় অর্থ, বিশ্বাস, ভয়, সতীত্ব, চুক্তি ও সাক্ষ্য। নামায এখানে তালিকার একটি আইটেম নয়, বরং গোটা সামাজিক জীবনের চারপাশে বসানো কাঠামো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Known Right",
          "bn": "সুবিদিত অধিকার"
        },
        "p": [
          {
            "en": "The item placed first inside that frame answers the diagnosis directly. Against manu'an, withholding, the passage sets a haqq ma'lum, a known right, fixed inside a person's wealth for the one who asks and the one who is deprived. Al-Ma'arij is Makkan, and the scholars differ over whether the known right here is the zakat or a claim standing alongside it; the same idea appears in 51:19 without the word known attached to it. Either way, withholding is answered by a right that belongs to somebody else and is not the owner's to feel generous about.",
            "bn": "সেই কাঠামোর ভেতরে প্রথমেই যে জিনিসটি বসানো হয়েছে, তা রোগনির্ণয়ের সরাসরি জবাব। 'মানূ'আন' অর্থাৎ কৃপণতার বিপরীতে অনুচ্ছেদটি বসায় 'হাক্ব মা'লূম' — একটি সুবিদিত অধিকার, যা মানুষের সম্পদের ভেতরেই নির্ধারিত, প্রার্থী ও বঞ্চিতের জন্য। সূরা আল-মা'আরিজ মক্কী, আর আলিমগণ মতভেদ করেছেন যে এখানকার সুবিদিত অধিকার যাকাত, নাকি তার পাশাপাশি দাঁড়ানো আরেকটি দাবি; একই ভাব এসেছে 51:19 আয়াতে, তবে সেখানে 'সুবিদিত' শব্দটি নেই। যেভাবেই দেখা হোক, কৃপণতার জবাব দেওয়া হয়েছে এমন এক অধিকার দিয়ে যা অন্য কারও, আর যা নিয়ে উদারতা অনুভব করার অধিকার মালিকের নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Constancy Over Intensity",
          "bn": "তীব্রতার চেয়ে নিয়মিততা"
        },
        "p": [
          {
            "en": "The practice this verse asks for is unglamorous. Muslim relates from Aisha (RA) that the deeds most beloved to Allah are the most constant of them, even if they are few. Applied here, a small routine that survives travel, illness, a bad week and a good one is closer to what 70:23 describes than a burst of devotion that ends. And the passage argues that this is a remedy and not merely a duty: the panic and the tight-fistedness set out in 70:19-21 are treated by something done five times a day, whether or not the day seemed to deserve it.",
            "bn": "এই আয়াত যে আমল চায় তা চটকহীন। মুসলিম আয়িশা (রাঃ) থেকে বর্ণনা করেন, আল্লাহর কাছে সবচেয়ে প্রিয় আমল সেটিই যা সবচেয়ে নিয়মিত, তা পরিমাণে কম হলেও। এখানে প্রয়োগ করলে দাঁড়ায়: এমন একটি ছোট নিয়ম যা সফর, অসুস্থতা, খারাপ সপ্তাহ ও ভালো সপ্তাহ পেরিয়েও টিকে থাকে, তা 70:23 আয়াতের বর্ণনার অনেক কাছাকাছি — এক ঝলক ইবাদতের চেয়ে যা শেষ হয়ে যায়। আর অনুচ্ছেদটি যুক্তি দেয় যে এটি নিছক দায়িত্ব নয়, প্রতিকার: 70:19-21 আয়াতে বর্ণিত উৎকণ্ঠা ও মুষ্টিবদ্ধ হাত সারানো হয় এমন কিছু দিয়ে যা দিনে পাঁচবার করা হয়, দিনটি তার যোগ্য মনে হোক বা না হোক।"
          }
        ]
      }
    ]
  },
  "70:30": {
    "sections": [
      {
        "h": {
          "en": "Chastity Inside the Ma'arij List",
          "bn": "মাআরিজের তালিকায় সংযম"
        },
        "p": [
          {
            "en": "Surah al-Ma'arij draws a restless, grasping portrait of the human being and then names those who are excepted from it, beginning with those who pray (70:22). The list adds its marks one at a time: a known right in wealth, belief in the Day of Recompense, fear of the Lord's punishment. Then it reaches the body: wa-lladhina hum li-furujihim hafizun, and those who guard their private parts (70:29). The verse studied here follows directly and completes that sentence, so it cannot be read apart from the guarding it qualifies.",
            "bn": "সূরা মাআরিজ প্রথমে মানুষের এক অস্থির, লোভী ছবি আঁকে। তারপর জানায় কারা এর বাইরে, আর শুরু করে নামাযীদের দিয়ে (৭০:২২)। এরপর তালিকা একটার পর একটা চিহ্ন যোগ করে: সম্পদে নির্ধারিত হক, বিচার দিবসে বিশ্বাস, রবের শাস্তির ভয়। তারপর কথা পৌঁছায় শরীরে: ওয়াল্লাযীনা হুম লিফুরূজিহিম হাফিযূন, যারা নিজেদের লজ্জাস্থান হেফাজত করে (৭০:২৯)। আমাদের আয়াতটি ঠিক তার পরেই এসে সেই বাক্য পূর্ণ করে। তাই যে হেফাজতের সীমা সে টানে, তাকে বাদ দিয়ে এ আয়াত পড়া যায় না।"
          },
          {
            "en": "Look at what stands on either side. Just before the guarding come those fearful of their Lord's punishment, with the reminder that it is not a thing from which anyone is safe (70:27, 70:28). Just after it come those attentive to their trusts and promises (70:32), a mark with its own place in the list. Chastity is set between fear of Allah and faithfulness to what has been entrusted. The commentators fetched for this verse say nothing about the order, but the company the clause keeps is part of what a reader sees.",
            "bn": "দুই পাশে কী আছে, একবার দেখুন। হেফাজতের ঠিক আগে আছে তারা, যারা রবের শাস্তির ভয়ে কম্পিত, সঙ্গে এই সতর্কবাণী যে সেই শাস্তি থেকে কেউ নিজেকে নিরাপদ ভাবতে পারে না (৭০:২৭ ও ৭০:২৮)। ঠিক পরে আছে তারা, যারা আমানত ও অঙ্গীকারের খেয়াল রাখে (৭০:৩২)। সেই চিহ্নের আলোচনা তার নিজের জায়গায়। ফলে সংযম বসেছে আল্লাহর ভয় আর আমানতের প্রতি বিশ্বস্ততার মাঝখানে। এ আয়াতের যে তাফসীরগুলো দেখা হয়েছে, সেগুলো এই ক্রম নিয়ে কিছু বলে না। তবু বাক্যাংশটি কাদের সঙ্গে বসেছে, পাঠকের চোখে সেটাও ধরা পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Clause, Three Movements",
          "bn": "এক বাক্যাংশ, তিন ধাপ"
        },
        "p": [
          {
            "en": "The Arabic runs to ten words and moves in three steps. Illa 'ala azwajihim: except with their wives. Aw ma malakat aymanuhum: or what their right hands possess. Fa-innahum ghayru malumin: for they are not to be blamed. The first word turns the sentence, since 70:29 praised the guarding as a whole and illa now marks where it does not apply. The middle names two categories joined by aw, or. The last gives the ground of the exception, opened by fa-, for, so that the verse states its reason in the same breath as its rule.",
            "bn": "আরবীতে আয়াতে আছে দশটি শব্দ, আর তা এগোয় তিনটি ধাপে। ইল্লা আলা আযওয়াজিহিম: তাদের স্ত্রীদের ক্ষেত্রে ছাড়া। আও মা মালাকাত আইমানুহুম: অথবা তাদের ডান হাত যাদের মালিক। ফাইন্নাহুম গাইরু মালূমীন: কেননা তারা তিরস্কৃত নয়। প্রথম শব্দটিই বাক্যের মোড় ঘুরিয়ে দেয়। ৭০:২৯ আয়াত হেফাজতের প্রশংসা করেছিল পুরোপুরি, আর ইল্লা এখন দেখিয়ে দেয় কোথায় তা খাটে না। মাঝের অংশে দুটি শ্রেণি, আও অর্থাৎ অথবা দিয়ে জোড়া। শেষ অংশটি ফা দিয়ে শুরু, যার অর্থ কেননা। এতে ব্যতিক্রমের কারণ জানানো হয়, ফলে বিধান আর তার কারণ আসে একই নিঃশ্বাসে।"
          },
          {
            "en": "The same ten words stand, letter for letter, at 23:6, and the verse after each is the same as well: whoever seeks beyond that, they are the transgressors (70:31, 23:7). This article does not repeat what is said about the clause there; the discussion of 23:6 is the place for it, and al-Qurtubi, as will be seen, sends his own reader to that place. What follows keeps to what the tafsirs fetched for 70:30 say at this verse. They say little, and what their brevity shows is part of the study.",
            "bn": "হুবহু এই দশটি শব্দই আছে ২৩:৬ আয়াতে, আর দুই জায়গায় পরের আয়াতটিও এক: এর বাইরে যে কামনা করে, তারাই সীমালঙ্ঘনকারী (৭০:৩১, ২৩:৭)। সেখানে বাক্যাংশটি নিয়ে যা বলা হয়েছে, এ লেখা তার পুনরাবৃত্তি করবে না। সে আলোচনার জায়গা ২৩:৬। পরে দেখা যাবে, কুরতুবী নিজেও তাঁর পাঠককে সেখানেই পাঠান। এখানে আমরা থাকব ৭০:৩০ আয়াতের যে তাফসীরগুলো আনা হয়েছে, সেগুলো এই আয়াতে যা বলে তার মধ্যে। তারা বলে অল্প। আর সেই অল্প বলাটা কী দেখায়, সেটাও আমাদের আলোচনার অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Blamed for Setting Down",
          "bn": "পাহারা নামিয়ে রাখায় দোষ নেই"
        },
        "p": [
          {
            "en": "At-Tabari glosses the exception through the blame clause: illa, except that they are not blamed fi tarki hifziha, in leaving off its guarding, with their wives or what their right hands possess. The word hifz is the noun of hafizun in 70:29, so his gloss keeps the guarding itself in view. On his wording, the exception is not a second virtue set beside the first, nor a loosening of it. It is the one setting in which not guarding draws no blame. The measure of the clause is the guarding, not the appetite.",
            "bn": "তাবারী ব্যতিক্রমটি ব্যাখ্যা করেন দোষের কথাটির ভেতর দিয়ে। তাঁর ভাষায় অর্থ দাঁড়ায়: তবে ফী তারকি হিফযিহা, অর্থাৎ হেফাজত ছেড়ে দেওয়ায় তারা তিরস্কৃত নয়, তাদের স্ত্রী অথবা ডান হাত যাদের মালিক তাদের ক্ষেত্রে। হিফয মানে হেফাজত, আর ৭০:২৯ আয়াতের হাফিযূন মানে হেফাজতকারী, একই শব্দের দুই রূপ। তাই তাঁর ব্যাখ্যায় হেফাজতের কথাটাই সামনে থাকে। তাঁর কথামতো এ ব্যতিক্রম আগের গুণের পাশে বসানো নতুন কোনো গুণ নয়, আবার সেই গুণকে ঢিলে করে দেওয়াও নয়। এ সেই একটি ক্ষেত্র, যেখানে হেফাজত না করলে দোষ ধরা হয় না। বাক্যাংশটির মাপকাঠি হেফাজত, কামনা নয়।"
          },
          {
            "en": "For the second phrase at-Tabari gives two words: min ima'ihim, from among their bondwomen. He adds nothing further on the category at this verse, and this article does not add for him. It records his gloss as his words, as it records each commentator's below, without turning any of them into a ruling of its own. The reader should hold that frame through every section that follows. What the commentators wrote is reported because it is what they wrote, and nothing in the report is offered as a judgement on any person.",
            "bn": "দ্বিতীয় বাক্যাংশের জন্য তাবারী দেন মাত্র দুটি শব্দ: মিন ইমাইহিম, অর্থাৎ তাদের দাসীদের মধ্য থেকে। এ আয়াতে এই শ্রেণি নিয়ে তিনি আর কিছু যোগ করেন না, আর এ লেখাও তাঁর হয়ে কিছু যোগ করবে না। তাঁর ব্যাখ্যা এখানে তাঁরই কথা হিসেবে উদ্ধৃত, যেমন নিচে উদ্ধৃত হবে প্রত্যেক তাফসীরকারের কথা। কোনোটিকেই এ লেখা নিজের বিধান বানায় না। পরের প্রতিটি অংশ পড়ার সময় এ কথাটা মনে রাখবেন। তাফসীরকারেরা যা লিখেছেন, তা জানানো হচ্ছে কারণ তাঁরা তা-ই লিখেছেন। এই জানানোর কোনো অংশই কোনো মানুষ সম্পর্কে রায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "An Exception Without a Negative",
          "bn": "না-বাচক ছাড়াই ব্যতিক্রম"
        },
        "p": [
          {
            "en": "At-Tabari then reports a point of grammar, introduced with it was said. The verse says li-furujihim hafizun, illa 'ala azwajihim, guarding their private parts except with their wives, and he notes that no jahd, no negation, comes before the illa. An exception of this kind would normally follow a negative statement, yet here it follows a positive one: they are guardians. The reason he gives is the closing phrase. Fa-innahum ghayru malumin, for they are not blamed, shows that the sentence carries the meaning of a negation, even though no word of negation is spoken before the exception.",
            "bn": "এরপর তাবারী একটি ব্যাকরণের কথা আনেন, যার শুরুতে বলা হয়েছে, বলা হয়েছে যে। আয়াত বলছে লিফুরূজিহিম হাফিযূন, ইল্লা আলা আযওয়াজিহিম, অর্থাৎ তারা নিজেদের লজ্জাস্থান হেফাজত করে, স্ত্রীদের ক্ষেত্রে ছাড়া। তিনি লক্ষ করেন, ইল্লার আগে কোনো জাহদ, মানে কোনো না-বাচক শব্দ, আসেনি। এ ধরনের ব্যতিক্রম সাধারণত আসে না-বাচক বাক্যের পরে। এখানে এসেছে হ্যাঁ-বাচক বাক্যের পরে: তারা হেফাজতকারী। তাবারী কারণ দেখান শেষ অংশে। ফাইন্নাহুম গাইরু মালূমীন, কেননা তারা তিরস্কৃত নয়, এই কথাটিই বুঝিয়ে দেয় যে বাক্যের ভেতরে না-বাচক অর্থ আছে, যদিও ব্যতিক্রমের আগে কোনো না-বাচক শব্দ উচ্চারিত হয়নি।"
          },
          {
            "en": "He illustrates it with an everyday sentence. Someone says: do whatever seems good to you, except committing disobedience, for you will be punished for it. The meaning, he explains, is this: do whatever seems good to you, except that you will be punished for committing disobedience. The exception is carried by the consequence clause, not by a negative that came before it. Read that way, the verse settles into: they guard their private parts, except that they are not blamed with their wives or what their right hands possess.",
            "bn": "কথাটা বোঝাতে তিনি সাধারণ কথাবার্তার একটি বাক্য আনেন। কেউ বলল: যা ভালো মনে হয় করো, শুধু নাফরমানি করা ছাড়া, কেননা তার জন্য তোমাকে শাস্তি পেতে হবে। তাবারী বলেন, এর অর্থ আসলে এই: যা ভালো মনে হয় করো, তবে নাফরমানি করলে তোমাকে শাস্তি পেতে হবে। ব্যতিক্রমটা দাঁড়িয়ে আছে পরিণামের কথার উপর, আগে আসা কোনো না-বাচক শব্দের উপর নয়। এভাবে পড়লে আয়াতের অর্থ দাঁড়ায়: তারা নিজেদের লজ্জাস্থান হেফাজত করে, তবে স্ত্রী অথবা ডান হাত যাদের মালিক, তাদের ক্ষেত্রে তারা তিরস্কৃত নয়।"
          },
          {
            "en": "The point is small, but it changes how the clause sits in the ear. On at-Tabari's account the phrase about blame is not a reassurance tacked on at the end. It is what makes the exception hold together at all. The sentence is built around where blame falls and where it does not, and the virtue of 70:29 is drawn by that line. A reader who hears only permission in the verse has missed half of its grammar, and a reader who hears only prohibition has missed the other half.",
            "bn": "কথাটা ছোট, কিন্তু বাক্যাংশটা কানে কীভাবে বাজে, তা বদলে দেয়। তাবারীর ব্যাখ্যায় দোষের কথাটি শেষে জুড়ে দেওয়া কোনো আশ্বাস নয়। ব্যতিক্রমটা টিকে আছে ওই কথার উপরেই। পুরো বাক্য গড়া হয়েছে এই প্রশ্ন ঘিরে: দোষ কোথায় পড়ে, আর কোথায় পড়ে না। ৭০:২৯ আয়াতের গুণটির রেখা টানা হয়েছে সেই সীমা দিয়েই। যে পাঠক আয়াতে কেবল অনুমতি শোনেন, তিনি এর ব্যাকরণের অর্ধেক হারালেন। আর যিনি কেবল নিষেধ শোনেন, তিনি হারালেন বাকি অর্ধেক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Other Commentators, Briefly",
          "bn": "অন্য তাফসীরকারেরা, সংক্ষেপে"
        },
        "p": [
          {
            "en": "The other commentators fetched for this verse are briefer still. Ibn Kathir, in the Arabic, glosses only the second phrase: ay min al-ima', that is, from among the bondwomen, and then recites the close of the verse without a word of his own. As-Sa'di glosses the same phrase as sarariyyatuhum, their concubines. He then gives the last clause a limit in its own words: they are not blamed in intercourse with them in the place that is the place of tillage, fi l-mahalli lladhi huwa mahallu l-harth.",
            "bn": "এ আয়াতের অন্য যে তাফসীরগুলো দেখা হয়েছে, সেগুলো আরও সংক্ষিপ্ত। আরবী ইবন কাসীর কেবল দ্বিতীয় বাক্যাংশের ব্যাখ্যা দেন: আই মিনাল ইমা, অর্থাৎ দাসীদের মধ্য থেকে। তারপর আয়াতের শেষটুকু পড়ে যান, নিজের কোনো কথা যোগ করেন না। সা'দী একই বাক্যাংশের ব্যাখ্যা দেন সারারিয়্যাতুহুম শব্দে, অর্থাৎ তাদের উপপত্নী। তারপর শেষ অংশের সঙ্গে নিজের ভাষায় একটি সীমা জুড়ে দেন: তাদের সঙ্গে সহবাসে তারা তিরস্কৃত নয়, সেই স্থানে যা ফসল ফলানোর স্থান, ফিল মাহাল্লিল্লাযী হুয়া মাহাল্লুল হারস।"
          },
          {
            "en": "Al-Baghawi, at this verse, sets down the words of the verse and nothing more. Al-Qurtubi gives a single sentence: the discussion of it has already come in Surah Qad Aflaha al-Mu'minun, that is, Surah al-Mu'minun, where the same words stand at 23:6. Rather than repeat himself, he points his reader back to that earlier place. Ma'arif al-Qur'an, in the note it groups with this verse, speaks only of the known right in wealth (70:24) and says nothing on the clause itself.",
            "bn": "বাগাভী এ আয়াতে কেবল আয়াতের শব্দগুলো লিখে দেন, আর কিছু নয়। কুরতুবী দেন একটিমাত্র বাক্য: এর আলোচনা আগেই এসেছে সূরা কাদ আফলাহাল মুমিনূনে, অর্থাৎ সূরা মুমিনূনে, যেখানে হুবহু এই শব্দগুলো আছে ২৩:৬ আয়াতে। একই কথা আবার না বলে তিনি পাঠককে সেই আগের জায়গায় ফিরিয়ে দেন। মাআরিফুল কুরআন এ আয়াতের সঙ্গে যে টীকাটি একসঙ্গে রেখেছে, তাতে আলোচনা কেবল সম্পদের নির্ধারিত হক নিয়ে (৭০:২৪)। বাক্যাংশটি নিয়ে সেখানে কোনো কথা নেই।"
          },
          {
            "en": "None of the texts fetched for 70:30 attaches a hadith to it, and none records an occasion of revelation, so this article cites neither. Their brevity is itself worth noticing. At this point in al-Ma'arij, the commentators gloss the terms in a few words and move on, and the one limit stated here, as-Sa'di's, concerns the manner of the act rather than the categories. A reader looking for more will not find it in these pages, and should not expect this article to supply it.",
            "bn": "৭০:৩০ আয়াতের যে তাফসীরগুলো আনা হয়েছে, সেগুলোর কোনোটিই এর সঙ্গে কোনো হাদীস জুড়ে দেয়নি, আর কোনোটিই নাযিলের কোনো প্রেক্ষাপট উল্লেখ করেনি। তাই এ লেখায় দুটোর কোনোটিই নেই। তাদের এই সংক্ষিপ্ততাও খেয়াল করার মতো। সূরা মাআরিজের এই জায়গায় তাফসীরকারেরা অল্প কথায় শব্দগুলোর অর্থ বলে এগিয়ে যান। এখানে বলা একমাত্র সীমা সা'দীর, আর তা কাজের ধরন নিয়ে, শ্রেণি নিয়ে নয়। এর বেশি যিনি খুঁজবেন, তিনি এ পাতাগুলোতে তা পাবেন না, আর এ লেখার কাছেও তা আশা করা ঠিক হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What These Glosses Do Not Permit",
          "bn": "এই ব্যাখ্যাগুলো যার অনুমতি দেয় না"
        },
        "p": [
          {
            "en": "This needs saying plainly, in both languages. The second phrase of the verse, ma malakat aymanuhum, is glossed by the commentators fetched here as bondwomen and as concubines, and this article records their words as theirs. It does not adopt those glosses as a ruling, and it issues no ruling of its own on slavery, on concubinage or on the status of any person. The verse describes what it describes. It licenses nothing against any living person or community, and gives no permission to harm or to own any person.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, দুই ভাষাতেই। আয়াতের দ্বিতীয় বাক্যাংশ মা মালাকাত আইমানুহুম। এখানে যে তাফসীরকারদের লেখা দেখা হয়েছে, তাঁরা একে ব্যাখ্যা করেছেন দাসী ও উপপত্নী বলে। এ লেখা তাঁদের কথা তাঁদেরই কথা হিসেবে উদ্ধৃত করছে। সেই ব্যাখ্যাকে এ লেখা বিধান হিসেবে গ্রহণ করে না। দাসপ্রথা, উপপত্নী রাখা কিংবা কোনো মানুষের অবস্থান নিয়ে নিজের কোনো রায়ও দেয় না। আয়াত যা বর্ণনা করে, কেবল তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে সে কোনো কিছুর অনুমতি দেয় না। কোনো মানুষের ক্ষতি করার বা কাউকে মালিকানায় রাখার অনুমতিও দেয় না।"
          },
          {
            "en": "Nor do the texts fetched for this verse record a dispute at this point: no variant reading, no debate over forms of marriage, no stated difference over the scope of the two categories. Where al-Qurtubi has more to say, he has placed it at 23:6, and a reader who wants it should look there rather than to a summary here. An article that tried to settle what the sources at this verse leave unspoken would be speaking in their name. The honest course is to report the glosses, mark where they stop, and supply nothing they do not contain.",
            "bn": "এ আয়াতের যে লেখাগুলো আনা হয়েছে, সেগুলোতে এখানে কোনো মতভেদের কথাও নেই। কোনো ভিন্ন কিরাআত নেই, বিয়ের ধরন নিয়ে কোনো বিতর্ক নেই, দুই শ্রেণির পরিধি নিয়েও কোনো ভিন্নমত উল্লেখ নেই। কুরতুবীর আরও যা বলার, তা তিনি রেখেছেন ২৩:৬ আয়াতে। যিনি তা জানতে চান, এখানকার কোনো সারসংক্ষেপে নয়, সেখানেই খুঁজবেন। এ আয়াতের উৎসগুলো যা বলেনি, কোনো লেখা যদি তার মীমাংসা করতে যায়, তবে সে তাঁদের নামে কথা বলে। সৎ পথ হলো ব্যাখ্যাগুলো জানানো, কোথায় তারা থেমেছে তা চিহ্নিত করা, আর তাদের ভেতরে যা নেই তা যোগ না করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Blameless, Then a Boundary",
          "bn": "দোষমুক্তি, তারপর সীমারেখা"
        },
        "p": [
          {
            "en": "Fa-innahum ghayru malumin: for they are not to be blamed. Malumin comes from lawm, blame, and the commentators read it from two sides. At-Tabari ties it to the guarding: no blame in leaving off the guarding in these two cases. As-Sa'di ties it to the act and its manner: no blame in intercourse with them in the place of tillage. Ibn Kathir repeats the phrase without a gloss. The article sets the readings side by side. Each stays inside the words of the verse, and neither is offered here as the only way to hear them.",
            "bn": "ফাইন্নাহুম গাইরু মালূমীন: কেননা তারা তিরস্কৃত নয়। মালূমীন শব্দটি এসেছে লাওম থেকে, যার অর্থ দোষারোপ। তাফসীরকারেরা কথাটি পড়েন দুই দিক থেকে। তাবারী একে জোড়েন হেফাজতের সঙ্গে: এই দুই ক্ষেত্রে হেফাজত ছেড়ে দেওয়ায় দোষ নেই। সা'দী একে জোড়েন কাজ আর তার ধরনের সঙ্গে: ফসল ফলানোর স্থানে তাদের সঙ্গে সহবাসে দোষ নেই। ইবন কাসীর কোনো ব্যাখ্যা ছাড়াই কথাটি আবার বলে যান। এ লেখা দুটি ব্যাখ্যা পাশাপাশি রাখে। দুটিই আয়াতের শব্দের ভেতরে থাকে, আর কোনোটিকেই এখানে একমাত্র অর্থ বলে দাবি করা হচ্ছে না।"
          },
          {
            "en": "The next verse then draws the boundary in plain words: fa-mani-btagha wara'a dhalika fa-ula'ika humu l-'adun, but whoever seeks beyond that, then they are the transgressors (70:31). The commentary fetched for 70:30 does not reach into that verse, and its treatment belongs to it. What the order alone shows is a movement in three steps: praise of the guarding, the place where no blame falls, and the naming of those who go beyond. Blame and its absence frame the whole sentence from beginning to end.",
            "bn": "এরপর পরের আয়াত সোজা কথায় সীমারেখা টেনে দেয়: ফামানিবতাগা ওয়ারাআ যালিকা ফাউলাইকা হুমুল আদূন, তবে এর বাইরে যে কামনা করে, তারাই সীমালঙ্ঘনকারী (৭০:৩১)। ৭০:৩০ আয়াতের যে তাফসীর আনা হয়েছে, তা ওই আয়াত পর্যন্ত যায় না। ওই আয়াতের আলোচনা তার নিজের জায়গায়। শুধু ক্রম থেকেই যা চোখে পড়ে, তা তিনটি ধাপে এগোনো এক বাক্য: আগে হেফাজতের প্রশংসা, তারপর সেই জায়গা যেখানে দোষ পড়ে না, শেষে যারা সীমা পেরোয় তাদের নাম। শুরু থেকে শেষ পর্যন্ত পুরো বাক্যকে ঘিরে রেখেছে দোষ আর দোষমুক্তির কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Door Kept, Not a Wall",
          "bn": "দেয়াল নয়, পাহারার দরজা"
        },
        "p": [
          {
            "en": "For the reader the clause turns on ghayru malumin. The Qur'an praises the guarding in 70:29, and in the very next breath it says that what lies inside the lawful bond is no fault. Restraint here is not suspicion of the body or contempt for desire. It is desire given a lawful place and held away from every other. A believer who treats every lawful closeness as something to apologise for has misread the verse, as surely as one who treats its boundary as a suggestion. The two halves sit in the verses' own words: hafizun, guardians, on one side, and ghayru malumin, not blamed, on the other.",
            "bn": "পাঠকের জন্য বাক্যাংশটির কেন্দ্র গাইরু মালূমীন। ৭০:২৯ আয়াতে কুরআন হেফাজতের প্রশংসা করে, আর ঠিক পরের নিঃশ্বাসেই বলে, হালাল বন্ধনের ভেতরে যা আছে তাতে কোনো দোষ নেই। এখানে সংযম মানে শরীরকে সন্দেহ করা নয়, কামনাকে তুচ্ছ করাও নয়। কামনাকে একটা হালাল জায়গা দেওয়া, আর বাকি সব জায়গা থেকে তাকে দূরে রাখা। যে মুমিন প্রতিটি হালাল ঘনিষ্ঠতার জন্য যেন ক্ষমা চেয়ে বেড়ান, তিনি আয়াতটি ভুল পড়েছেন। ঠিক যেমন ভুল পড়েছেন সেই ব্যক্তি, যিনি আয়াতের সীমারেখাকে নিছক একটা পরামর্শ মনে করেন। দুটি দিকই আছে আয়াতগুলোর নিজের শব্দে: এক দিকে হাফিযূন, হেফাজতকারী, অন্য দিকে গাইরু মালূমীন, তিরস্কৃত নয়।"
          },
          {
            "en": "The list around this verse also says where chastity lives. It sits after fear of the Lord's punishment and before the keeping of trusts, and the passage closes with those who maintain their prayer and the promise that they will be in gardens, honoured (70:34, 70:35). The guarding is counted among the marks of those excepted from the restless self, not set apart from faith as a private matter. To ask how I keep it is to ask what kind of person my prayer is making me, in the hours when no one sees.",
            "bn": "এ আয়াতের চারপাশের তালিকা আরও জানায়, সংযমের ঠিকানা কোথায়। এর আগে আছে রবের শাস্তির ভয়, পরে আছে আমানত রক্ষা। আর পুরো অংশটি শেষ হয় তাদের কথায়, যারা নামাযে যত্নবান, সঙ্গে এই প্রতিশ্রুতি যে তারা জান্নাতে থাকবে সম্মানিত হয়ে (৭০:৩৪ ও ৭০:৩৫)। অস্থির স্বভাব থেকে যারা মুক্ত, এই হেফাজত তাদের চিহ্নগুলোর একটি। ঈমান থেকে আলাদা কোনো ব্যক্তিগত ব্যাপার হিসেবে একে সরিয়ে রাখা হয়নি। তাই আমি কীভাবে এটা রক্ষা করি, সে প্রশ্ন আসলে এই প্রশ্ন: যখন কেউ দেখে না, তখন আমার নামায আমাকে কেমন মানুষ বানাচ্ছে?"
          }
        ]
      }
    ]
  },
  "70:32": {
    "sections": [
      {
        "h": {
          "en": "Between Chastity and Testimony",
          "bn": "সতীত্ব আর সাক্ষ্যের মাঝখানে"
        },
        "p": [
          {
            "en": "Wa-lladhina hum li-amanatihim wa 'ahdihim ra'un: and those who are attentive to their trusts and their covenant. Five Arabic words, one line in a list. The list begins after 70:19 to 70:21 describe mankind as created anxious, impatient when evil touches him and withholding when good does, and 70:22 turns with an exception: except the observers of prayer. At-Tabari opens his paraphrase of this verse with wa-illa alladhina, and except those who. In his reading, the people of 70:32 stand inside that same exception.",
            "bn": "ওয়াল্লাযীনা হুম লি-আমানাতিহিম ওয়া আহদিহিম রাউন: আর যারা নিজেদের আমানত ও অঙ্গীকারের দেখভাল করে। আরবিতে মাত্র পাঁচটি শব্দ, একটা তালিকার এক লাইন। তালিকার আগে ৭০:১৯ থেকে ৭০:২১ আয়াতে মানুষের ছবি আঁকা হয়েছে। তাকে সৃষ্টি করা হয়েছে অস্থির করে, বিপদ ছুঁলে সে অধৈর্য, কল্যাণ ছুঁলে কৃপণ। তারপর ৭০:২২ আয়াত ব্যতিক্রম টানে: তবে নামায আদায়কারীরা নয়। তাবারী এ আয়াতের ব্যাখ্যা শুরু করেন ওয়া ইল্লাল্লাযীনা দিয়ে, মানে আর তারা ছাড়া যারা। তাঁর পাঠে ৭০:৩২-এর মানুষগুলোও সেই একই ব্যতিক্রমের ভেতরে।"
          },
          {
            "en": "The verse sits between two neighbours. Before it, 70:29 to 70:31 speak of guarding chastity, and the Muyassar glosses 70:31 as those who seek, beyond wives and those their right hands possess, an outlet for desire, and so overstep the lawful into the unlawful. After it, 70:33 turns to testimony. The same five words stand, letter for letter, at 23:8, in the list that opens Surat al-Mu'minun. Al-Qurtubi gives this verse a single line: the clause, he says, has already been treated. Al-Baghawi quotes the verse and adds nothing.",
            "bn": "আয়াতটির দুই পাশে দুই প্রতিবেশী। আগে ৭০:২৯ থেকে ৭০:৩১ আয়াতে লজ্জাস্থান হেফাজতের কথা। ৭০:৩১ আয়াতের ব্যাখ্যায় মুয়াসসার বলে, যারা স্ত্রী ও অধিকারভুক্ত দাসীর বাইরে কামনা মেটানোর পথ খোঁজে, তারা হালাল পেরিয়ে হারামে ঢুকে পড়ে। পরে ৭০:৩৩ আয়াত যায় সাক্ষ্যের দিকে। হুবহু এই পাঁচটি শব্দ আছে ২৩:৮ আয়াতেও, সূরা আল-মুমিনূনের শুরুর তালিকায়। কুরতুবী এ আয়াতের জন্য রেখেছেন এক লাইন: এ নিয়ে আগেই আলোচনা হয়ে গেছে। বাগাভী আয়াতটি উদ্ধৃত করেন, কিছু যোগ করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Trusts in the Plural",
          "bn": "আমানত, একবচনে নয়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, condensing al-Mazhari, starts from the form of the word. Amanat is the plural of amanah, the same word as in 4:58: indeed, Allah commands you to render trusts to whom they are due. The plural, it says, shows that amanah does not refer only to that which people might deposit with a trustee for safe-keeping. It also refers to all the obligatory rights that are necessary to fulfil. On this reading the verse is not about a cupboard of valuables but about everything a person owes.",
            "bn": "মাআরিফুল কুরআন এখানে মাযহারীর কথা সংক্ষেপে আনে, আর শুরু করে শব্দের রূপ থেকে। আমানাত হলো আমানাহর বহুবচন। ৪:৫৮ আয়াতেও এই শব্দ: নিশ্চয়ই আল্লাহ তোমাদের নির্দেশ দিচ্ছেন, হকদারের হক তার কাছে পৌঁছে দিতে। মাআরিফুলের মতে বহুবচন বুঝিয়ে দেয়, আমানত মানে শুধু সেই জিনিস নয় যা মানুষ হেফাজতের জন্য কারও কাছে জমা রাখে। যত হক আদায় করা বাধ্যতামূলক, সবই এর ভেতরে পড়ে। এভাবে পড়লে আয়াতটি কোনো আলমারিভর্তি দামি জিনিসের কথা বলছে না। বলছে মানুষের ঘাড়ে যত পাওনা আছে, তার সবকিছুর কথা।"
          },
          {
            "en": "At-Tabari divides the trusts into two. There are the trusts of Allah, which He entrusted to them from among His obligations, and the trusts of His servants, with which they were entrusted. The Muyassar keeps the same pair: the trusts of Allah and the trusts of the servants. In both paraphrases, their trusts are theirs because they hold them, not because they own them. What a person keeps is something placed with him, by his Lord or by another person, and it is held until it is returned.",
            "bn": "তাবারী আমানতকে দুই ভাগে ভাগ করেন। এক ভাগ আল্লাহর আমানত, যা তিনি তাঁর ফরজগুলোর মধ্য থেকে তাদের হাতে সঁপেছেন। আরেক ভাগ তাঁর বান্দাদের আমানত, যা তাদের কাছে রাখা হয়েছে। মুয়াসসারও এই জোড়াই রাখে: আল্লাহর আমানত আর বান্দাদের আমানত। দুই ব্যাখ্যাতেই আমানত তাদের, কারণ তারা তা ধরে রেখেছে, মালিক বলে নয়। মানুষ যা রাখে তা আসলে তার কাছে রাখা হয়েছে, রবের পক্ষ থেকে কিংবা অন্য কোনো মানুষের পক্ষ থেকে। ফেরত না দেওয়া পর্যন্ত তা ধরে রাখার জিনিস।"
          },
          {
            "en": "Ma'arif al-Qur'an then names the failure plainly. Breach of trusts and covenants is dishonesty. Their fulfilment is obligatory, and failure to comply with their terms and conditions amounts to breach. The plural thus widens the verse in both directions at once: more things count as trusts, and more ways of neglect count as betrayal. A person who has never pocketed a deposit may still be careless with a dozen other things the word now covers.",
            "bn": "এরপর মাআরিফুল কুরআন ব্যর্থতার নামটাও সোজাসুজি বলে দেয়। আমানত আর অঙ্গীকার ভাঙা মানেই খেয়ানত। এগুলো পূরণ করা বাধ্যতামূলক, আর শর্ত মেনে না চলাই ভঙ্গ। বহুবচন তাই আয়াতটিকে দুই দিকেই প্রশস্ত করে। আমানতের তালিকায় আসে আরও অনেক কিছু, আর অবহেলার আরও অনেক ধরন গোনা হয় খেয়ানত হিসেবে। যে লোক কখনো কারও জমা রাখা টাকায় হাত দেয়নি, সেও হয়তো এমন অনেক কিছুতে গাফেল, যা এই শব্দ এখন নিজের ভেতরে টেনে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Duties Seen by Allah Alone",
          "bn": "যা শুধু আল্লাহ দেখেন"
        },
        "p": [
          {
            "en": "As-Sa'di explains ra'un as observing them, guarding them, striving to discharge them and keep faith with them. Then he says the verse covers all the trusts between the servant and his Lord, and gives an example: the secret obligations, al-takalif al-sirriyyah, which none sees except Allah. A ritual can be watched by others, but much of what it asks cannot. Whether a person washed properly, prayed with attention or kept a fast unbroken in private is often known to none but Him who set the duty.",
            "bn": "সা'দী রাউন শব্দের ব্যাখ্যা দেন এভাবে: সেগুলোর খেয়াল রাখে, হেফাজত করে, আদায় ও পূরণের জন্য প্রাণপণ চেষ্টা করে। তারপর বলেন, বান্দা ও তার রবের মাঝখানের সব আমানত এর ভেতরে পড়ে। উদাহরণও দেন: গোপন দায়িত্বগুলো, আত-তাকালীফ আস-সিররিয়্যাহ, যা আল্লাহ ছাড়া কেউ দেখে না। ইবাদতের বাইরের চেহারা অন্যরা দেখতে পারে, কিন্তু তার অনেকখানিই চোখের আড়ালে। কেউ ঠিকমতো ওযু করল কি না, মন দিয়ে নামায পড়ল কি না, একা থেকে রোযা অটুট রাখল কি না, অনেক সময় তা জানেন কেবল সেই সত্তা, যিনি দায়িত্বটা দিয়েছেন।"
          },
          {
            "en": "The other commentators reach the same ground by different routes. At-Tabari's trusts of Allah are His obligations, fara'iduhu, placed with His servants. Ma'arif al-Qur'an lists them: trust obligations include all Divine rights, such as salah, siyam, hajj and zakah. Read together, the three make worship itself the first deposit. A prayer is not only performed; it is held on Allah's behalf and returned to Him in its proper form. On these readings, neglecting an obligation is a broken trust as well as a missed duty.",
            "bn": "অন্য তাফসীরকারেরা ভিন্ন পথে একই জায়গায় পৌঁছান। তাবারীর কাছে আল্লাহর আমানত হলো তাঁর ফরজসমূহ, যা তিনি বান্দার হাতে রেখেছেন। মাআরিফুল কুরআন তালিকা দেয়: আল্লাহর সব হক, যেমন নামায, রোযা, হজ ও যাকাত, আমানতের দায়ের মধ্যে পড়ে। তিনটি ব্যাখ্যা পাশাপাশি রাখলে ইবাদতই হয়ে দাঁড়ায় প্রথম আমানত। নামায শুধু আদায় করার জিনিস নয়। তা আল্লাহর পক্ষ থেকে হাতে রাখা জিনিস, যা ঠিক রূপে তাঁর কাছেই ফেরত যায়। এই পাঠে কোনো ফরজে অবহেলা শুধু দায়িত্ব ছুটে যাওয়া নয়, আমানত ভাঙাও।"
          }
        ]
      },
      {
        "h": {
          "en": "What Others Leave With Us",
          "bn": "মানুষ যা রেখে যায়"
        },
        "p": [
          {
            "en": "The second kind of trust lies between people. At-Tabari calls it the trusts of His servants with which they were entrusted. As-Sa'di names two fields where it lives: wealth and secrets, al-amwal wa-l-asrar. Wealth is the obvious field, a deposit, a loan, goods held for someone else. Secrets are quieter. On as-Sa'di's wording, a thing told in confidence sits in the same list as money. Passing it on, then, breaks a trust, even though nothing has left anyone's pocket.",
            "bn": "আমানতের দ্বিতীয় ধরন মানুষে মানুষে। তাবারী একে বলেন তাঁর বান্দাদের আমানত, যা তাদের কাছে রাখা হয়েছে। সা'দী দুটি ক্ষেত্রের নাম করেন: সম্পদ আর গোপন কথা, আল-আমওয়াল ওয়াল-আসরার। সম্পদের কথা সহজেই বোঝা যায়: জমা রাখা টাকা, ধার, অন্যের হয়ে রাখা মাল। গোপন কথা তুলনায় নিঃশব্দ। সা'দীর কথায় বিশ্বাস করে বলা কথা আর টাকা একই তালিকায় বসে। তাহলে তা অন্যের কানে তুলে দেওয়াও আমানত ভাঙা, যদিও কারও পকেট থেকে কিছু খোয়া যায়নি।"
          },
          {
            "en": "Ma'arif al-Qur'an adds a third field: the rights that Allah has imposed between human beings, and the binding contracts and covenants that people enter into themselves. The first are owed whether or not anyone signed for them; the second are owed because someone did. A wage, a debt, a share of an inheritance, the terms of a sale, a duty to a parent or a spouse can all be read under this heading. Ma'arif states that fulfilling them is obligatory, and failing their terms is a breach.",
            "bn": "মাআরিফুল কুরআন তৃতীয় একটা ক্ষেত্র যোগ করে। এক হলো সেই হকগুলো, যা আল্লাহ মানুষের পরস্পরের উপর চাপিয়ে দিয়েছেন। আরেক হলো সেই চুক্তি ও অঙ্গীকার, যা মানুষ নিজেরাই একে অপরের সঙ্গে করে। প্রথমটা পাওনা হয়, কেউ সই করুক বা না করুক। দ্বিতীয়টা পাওনা হয়, কারণ কেউ সই করেছে। মজুরি, ঋণ, মীরাসের ভাগ, বেচাকেনার শর্ত, মা-বাবা বা স্বামী-স্ত্রীর হক, সবই এই শিরোনামের নিচে পড়া যায়। মাআরিফুলের কথা, এগুলো পূরণ করা বাধ্যতামূলক, আর শর্ত না মানাই ভঙ্গ।"
          }
        ]
      },
      {
        "h": {
          "en": "One Covenant, Two Directions",
          "bn": "এক অঙ্গীকার, দুই দিক"
        },
        "p": [
          {
            "en": "In the verse itself the two nouns differ in number: amanat is plural, 'ahd is singular. The commentators handle the singular in different ways. At-Tabari and the Muyassar paraphrase it in the plural, 'uhud, covenants. As-Sa'di keeps the singular and makes it general: the covenant, he says, likewise covers the covenant pledged to Allah and the covenant pledged to His creation. Whichever form the explanation takes, all three agree on the two directions. A pledge can be given upward to the Lord, or outward to another human being.",
            "bn": "আয়াতের ভেতরেই দুটো শব্দের বচন আলাদা। আমানাত বহুবচন, আহদ একবচন। একবচনটাকে তাফসীরকারেরা ভিন্ন ভিন্নভাবে ধরেন। তাবারী আর মুয়াসসার ব্যাখ্যায় বহুবচন আনেন, উহূদ, মানে অঙ্গীকারসমূহ। সা'দী একবচনই রাখেন, তবে একে ব্যাপক অর্থে নেন। তাঁর কথায় অঙ্গীকারও তেমনি সবকিছু ধরে: আল্লাহর সঙ্গে করা অঙ্গীকার, আবার তাঁর সৃষ্টির সঙ্গে করা অঙ্গীকার। ব্যাখ্যার রূপ যা-ই হোক, দুই দিকের ব্যাপারে তিনজনই একমত। কথা দেওয়া যায় উপরের দিকে, রবকে। আবার পাশের দিকে, আরেকজন মানুষকে।"
          },
          {
            "en": "At-Tabari fills both directions with content. Allah's covenants are those He took from them to obey Him in what He commanded them and what He forbade them. The covenants with His servants are the ones given on whatever terms a person bound himself to. The Muyassar puts it in one phrase: guardians of their covenants with Allah the Exalted and with the servants. Ibn Kathir frames the covenant as a negative: when they make a pledge, they do not act treacherously, lam yaghdiru. The pledged word is kept, not quietly abandoned when it becomes inconvenient.",
            "bn": "তাবারী দুই দিকেই বিষয়বস্তু ভরে দেন। আল্লাহর অঙ্গীকার হলো সেগুলো, যা তিনি তাদের কাছ থেকে নিয়েছেন: তাঁর আদেশ মানা আর তাঁর নিষেধ থেকে দূরে থাকা। বান্দাদের সঙ্গে অঙ্গীকার হলো মানুষ নিজের উপর যে শর্ত চাপিয়ে কথা দিয়েছে, তা। মুয়াসসার একটি বাক্যেই বলে: আল্লাহ তাআলার সঙ্গে আর বান্দাদের সঙ্গে নিজেদের অঙ্গীকারের হেফাজতকারী। ইবন কাসীর কথাটা বলেন না-বাচক রূপে: তারা অঙ্গীকার করলে বিশ্বাসঘাতকতা করে না, লাম ইয়াগদিরূ। দেওয়া কথা রাখা হয়, অসুবিধা হলেই চুপচাপ ছেড়ে দেওয়া হয় না।"
          },
          {
            "en": "As-Sa'di then explains why the covenant matters so much: the servant will be asked about it. Did he carry it out and fulfil it, or did he refuse it and betray it, and not carry it out? He gives no further reference for the questioning, and none is added here. His point is enough on its own. A promise is not finished when it is spoken. It stays open, as a question waiting for an answer, until it is kept.",
            "bn": "অঙ্গীকারের গুরুত্ব এত বেশি কেন, সা'দী তা-ও বলেন: এ নিয়ে বান্দাকে জিজ্ঞেস করা হবে। সে কি তা পালন করেছে, পূর্ণ করেছে? নাকি অস্বীকার করেছে, খেয়ানত করেছে, পালন করেনি? এই জিজ্ঞাসার পক্ষে তিনি আর কোনো দলিল উল্লেখ করেন না, এখানেও তাই কিছু যোগ করা হলো না। তাঁর কথাটুকুই যথেষ্ট। মুখ থেকে বের হলেই ওয়াদা শেষ হয়ে যায় না। পূরণ না হওয়া পর্যন্ত তা খোলা থাকে, যেন উত্তরের অপেক্ষায় থাকা এক প্রশ্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping Watch Over Them",
          "bn": "চোখে চোখে রাখা"
        },
        "p": [
          {
            "en": "The last word, ra'un, carries the verse. At-Tabari unpacks it as a chain of verbs. They watch over it, yarqubuna dhalik; they guard it, so they do not let it go to waste; rather they discharge it, and keep returning to it, yata'ahadunaha, as Allah has bound them and made its keeping a duty upon them. Each verb adds something. Watching is attention, guarding is protection, discharging is delivery, and the last verb is the habit of coming back to a thing again and again.",
            "bn": "আয়াতের ভার বহন করে শেষ শব্দ, রাউন। তাবারী একে খোলেন কয়েকটা ক্রিয়ার মালায়। তারা এর উপর নজর রাখে, ইয়ারকুবূনা যালিক। একে হেফাজত করে, নষ্ট হতে দেয় না। বরং তা আদায় করে, বারবার ফিরে এসে খোঁজ নেয়, ইয়াতাআহাদূনাহা, ঠিক যেভাবে আল্লাহ তাদের বেঁধে দিয়েছেন আর হেফাজত তাদের উপর ফরজ করেছেন। প্রতিটি ক্রিয়া নতুন কিছু যোগ করে। নজর রাখা মানে মনোযোগ, হেফাজত মানে রক্ষা, আদায় মানে পৌঁছে দেওয়া। আর শেষ ক্রিয়াটা হলো বারবার ফিরে এসে দেখে যাওয়ার অভ্যাস।"
          },
          {
            "en": "As-Sa'di's gloss runs close: observing them, guarding them, striving hard to discharge them and to fulfil them. The Muyassar uses the single word hafizun, guardians. Ibn Kathir, by contrast, defines the keeping through what it refuses: when they are entrusted, they do not betray, and when they pledge, they do not break faith. The commentators thus give the same word two faces side by side. One is active tending, the other firm restraint. A trust can be lost by neglect as surely as by theft, and the glosses between them name both.",
            "bn": "সা'দীর ব্যাখ্যাও কাছাকাছি: খেয়াল রাখে, হেফাজত করে, আদায় ও পূরণে প্রাণপণ চেষ্টা করে। মুয়াসসার একটি শব্দেই বলে: হাফিযূন, হেফাজতকারী। ইবন কাসীর কিন্তু কথাটা বলেন যা তারা করে না তা দিয়ে। আমানত পেলে তারা খেয়ানত করে না, অঙ্গীকার করলে বিশ্বাস ভাঙে না। ফলে একই শব্দের দুটি চেহারা পাশাপাশি দাঁড়ায়। একটা সক্রিয় যত্ন, অন্যটা দৃঢ় সংযম। চুরি করে যেমন আমানত নষ্ট হয়, অবহেলা করেও তেমনি হয়। তাফসীরকারদের ব্যাখ্যা মিলিয়ে দুটোরই নাম পাওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Portrait in Reverse",
          "bn": "উল্টো দিকের ছবি"
        },
        "p": [
          {
            "en": "Ibn Kathir closes his note with a contrast. These are the qualities of the believers, he says, and their opposite are the qualities of the hypocrites, as in the sahih hadith. The wording he gives matches Sahih al-Bukhari 33, from Abu Hurayrah: the Prophet ﷺ said, \"The signs of a hypocrite are three: whenever he speaks, he tells a lie; whenever he promises, he always breaks it; and if you trust him, he proves to be dishonest.\" Two of the three signs are this verse turned inside out.",
            "bn": "ইবন কাসীর তাঁর ব্যাখ্যা শেষ করেন একটা তুলনা দিয়ে। তিনি বলেন, এগুলো মুমিনদের গুণ, আর এর উল্টোটা মুনাফিকদের গুণ, যেমন সহীহ হাদীসে এসেছে। তিনি যে শব্দে হাদীসটি আনেন, তা সহীহ বুখারীর ৩৩ নম্বর হাদীসের সঙ্গে মেলে। আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: \"মুনাফিকের আলামত তিনটি: যখন কথা বলে, মিথ্যা বলে; যখন ওয়াদা করে, তা ভঙ্গ করে; আর যখন তার কাছে আমানত রাখা হয়, খেয়ানত করে।\" তিনটির মধ্যে দুটি আলামত এই আয়াতেরই উল্টো পিঠ।"
          },
          {
            "en": "Ibn Kathir then notes another narration, with the traits of lying, betraying a covenant and behaving wickedly in a quarrel. A fuller form is Sahih al-Bukhari 34, from 'Abdullah ibn 'Amr. It lists four traits: betraying when entrusted, lying when speaking, acting treacherously after making a covenant, and behaving wickedly when quarrelling. Whoever has all four is a pure hypocrite, and whoever has one of them has one trait of hypocrisy until he gives it up. Both narrations are in al-Bukhari's Sahih, and Ibn Kathir calls the first sahih.",
            "bn": "এরপর ইবন কাসীর আরেকটি বর্ণনার কথা বলেন, যেখানে আছে মিথ্যা বলা, অঙ্গীকার ভাঙা আর ঝগড়ায় অশালীন আচরণের কথা। এর পূর্ণতর রূপ সহীহ বুখারীর ৩৪ নম্বর হাদীসে, আবদুল্লাহ ইবন আমর (রাঃ)-এর বর্ণনায়। সেখানে চারটি স্বভাবের তালিকা: আমানত পেলে খেয়ানত, কথা বললে মিথ্যা, অঙ্গীকার করলে বিশ্বাসঘাতকতা, আর ঝগড়া করলে অশালীনতা। যার মধ্যে চারটিই আছে, সে খাঁটি মুনাফিক। আর যার মধ্যে একটি আছে, তা ছেড়ে না দেওয়া পর্যন্ত তার ভেতরে মুনাফিকির একটি স্বভাব থেকে যায়। দুটো বর্ণনাই ইমাম বুখারীর সহীহ গ্রন্থে আছে, আর প্রথমটিকে ইবন কাসীর সহীহ বলেছেন।"
          },
          {
            "en": "That last clause decides how the hadith is to be used. It speaks of a trait that stays until it is given up, which makes it a mirror to hold up to oneself. The verse and the hadith describe what they describe, and license nothing against any living person or community. They give nobody leave to brand a neighbour a hypocrite over a missed appointment. No fetched tafsir attaches an occasion of revelation to this verse, and Ibn Kathir's two narrations are the only hadith any of them brings.",
            "bn": "শেষ কথাটাই ঠিক করে দেয় হাদীসটি কীভাবে কাজে লাগাতে হবে। এখানে এমন এক স্বভাবের কথা, যা ছেড়ে না দেওয়া পর্যন্ত থেকে যায়। তাই এ হাদীস নিজের সামনে ধরার আয়না। আয়াত আর হাদীস যা বর্ণনা করে তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এরা কিছুরই অনুমতি দেয় না। কেউ কথামতো সময়ে আসেনি বলে প্রতিবেশীকে মুনাফিক বলে দাগিয়ে দেওয়ার অধিকার এরা কাউকে দেয় না। যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে শানে নুযূল জোড়ে না। আর তাদের আনা হাদীস বলতে ইবন কাসীরের এই দুটি বর্ণনাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the List Leads",
          "bn": "তালিকা যেখানে গিয়ে থামে"
        },
        "p": [
          {
            "en": "The list does not stop at this verse. The Muyassar carries it on: those who give their testimony truthfully, without altering or concealing it, and those who keep up the prayer without neglecting any of its obligations. Then 70:35 gathers everyone named: they will be in gardens, honoured. The Muyassar explains it as those who bear these lofty qualities settling in the gardens of bliss, honoured there with every kind of honour. The keeper of trusts is not praised alone; he is placed in a company, and the company has a destination.",
            "bn": "তালিকা এ আয়াতে এসে থামে না। মুয়াসসার তা এগিয়ে নেয়: যারা সাক্ষ্য দেয় সত্যের সঙ্গে, কিছু বদলায় না, কিছু লুকায়ও না। আর যারা নামায কায়েম রাখে, তার কোনো ওয়াজিবে ত্রুটি করে না। তারপর ৭০:৩৫ আয়াত সবাইকে এক জায়গায় জড়ো করে: তারাই হবে জান্নাতে সম্মানিত। মুয়াসসারের ব্যাখ্যা, এসব মহৎ গুণে যারা গুণান্বিত, তারা থাকবে নিয়ামতে ভরা জান্নাতে, সেখানে সব রকম সম্মানে সম্মানিত হবে। আমানতদারকে এখানে একা প্রশংসা করা হয়নি। তাকে রাখা হয়েছে একটা দলের ভেতরে, আর সেই দলের একটা গন্তব্য আছে।"
          },
          {
            "en": "The heading Ma'arif al-Qur'an sets over this verse sums up what the commentators found in it: the rights of Allah and the rights of human beings are both included in trust obligations. The verse does not ask for a single grand act. It asks for attention spread across a life: the prayer nobody checks, the deposit nobody counts, the secret nobody would trace, the promise the other person may have forgotten. Each is held, and each is watched, until it is handed back.",
            "bn": "মাআরিফুল কুরআন এ আয়াতের মাথায় যে শিরোনাম বসায়, তাতেই তাফসীরকারদের সব কথার সারাংশ: আল্লাহর হক আর বান্দার হক, দুটোই আমানতের দায়ের মধ্যে পড়ে। আয়াতটি বড় একটিমাত্র কাজ চায় না। চায় গোটা জীবনে ছড়ানো মনোযোগ। যে নামাযের খোঁজ কেউ নেয় না, যে জমা টাকা কেউ গুনে দেখে না, যে গোপন কথার উৎস কেউ খুঁজে পাবে না, যে ওয়াদা অন্যজন হয়তো ভুলেই গেছে, সবই এর ভেতরে। প্রতিটি জিনিস হাতে রাখা, প্রতিটির উপর নজর রাখা, যতক্ষণ না তা ফেরত দেওয়া হয়।"
          }
        ]
      }
    ]
  },
  "70:40": {
    "sections": [
      {
        "h": {
          "en": "The Proof Before the Oath",
          "bn": "শপথের আগে প্রমাণ"
        },
        "p": [
          {
            "en": "Fa-la uqsimu bi-rabbi al-mashariqi wa-l-magharibi inna la-qadirun: so I swear by the Lord of the risings and the settings that We are indeed able. That is seven Arabic words, and the sentence does not end with them, because what We are able to do is completed in 70:41. The verse opens with fa-, so it follows from something. Ibn Kathir, in the English abridgement that treats 70:36 to 70:44 together, reads the passage as a rebuke of the disbelievers who saw the Prophet ﷺ and the guidance he brought, and then broke away from him, group by group.",
            "bn": "ফালা উকসিমু বিরাব্বিল মাশারিকি ওয়াল মাগারিবি ইন্না লাকাদিরুন: আমি শপথ করছি উদয়স্থলসমূহ ও অস্তাচলসমূহের রবের, আমি অবশ্যই সক্ষম। আরবিতে মাত্র সাতটি শব্দ। তবু বাক্যটা এখানে শেষ হয় না, কারণ কী করতে সক্ষম, সে কথা পূর্ণ হয় ৭০:৪১ আয়াতে। আয়াতের শুরুতে আছে ফা, অর্থাৎ এটি আগের কোনো কথার ধারাবাহিকতা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি ভাষ্য ৭০:৩৬ থেকে ৭০:৪৪ একসঙ্গে আলোচনা করে। সেখানে পুরো অংশটাকে তিনি দেখেন কাফিরদের প্রতি ভর্ৎসনা হিসেবে। তারা নবী ﷺ-কে দেখেছিল, তাঁর আনা হিদায়াতও দেখেছিল, তারপর দলে দলে তাঁর কাছ থেকে সরে গিয়েছিল।"
          },
          {
            "en": "Before the oath comes the proof. In 70:38 the question is whether each of them hopes to enter a garden of delight, and 70:39 answers kalla: no, We created them from that which they know. Ibn Kathir explains that which they know as despised fluid, and says Allah mentions the beginning of creation here because doing it again is easier than doing it the first time, which they themselves admit. The oath of 70:40 is the next step in that argument, moving from the small origin of a person to the Lord of every horizon.",
            "bn": "শপথের আগে আসে প্রমাণ। ৭০:৩৮ আয়াতের প্রশ্ন: তাদের প্রত্যেকেই কি নিয়ামতে ভরা জান্নাতে ঢোকার আশা করে? ৭০:৩৯ জবাব দেয় কাল্লা বলে: কখনো না, আমি তাদের সৃষ্টি করেছি এমন জিনিস থেকে, যা তারা জানে। ইবন কাসীর বলেন, যা তারা জানে মানে তুচ্ছ পানি। তাঁর ব্যাখ্যায়, আল্লাহ এখানে প্রথম সৃষ্টির কথা আনেন, কারণ দ্বিতীয়বার বানানো প্রথমবারের চেয়ে সহজ, আর প্রথম সৃষ্টির কথা তারা নিজেরাই মানে। ৭০:৪০ আয়াতের শপথ সেই যুক্তিরই পরের ধাপ। মানুষের ছোট্ট সূচনা থেকে কথা চলে যায় প্রতিটি দিগন্তের রবের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A La Before Swearing",
          "bn": "শপথের মুখে একটি লা"
        },
        "p": [
          {
            "en": "The verse does not say uqsimu, I swear, but fa-la uqsimu, with a la in front that looks like a negation: so no, I swear. The commentators fetched for this verse explain that la in two different ways. Al-Qurtubi's note is brief. Fa-la uqsimu, he says, means aqsimu, I swear, and the la is a sila, a connecting particle. On his reading the sentence is a plain oath, and the la does not turn it into a refusal to swear or add a meaning of its own.",
            "bn": "আয়াতটি শুধু উকসিমু, আমি শপথ করছি, বলে না। বলে ফালা উকসিমু, সামনে একটা লা জুড়ে, যা দেখতে নিষেধের মতো: না, আমি শপথ করছি। এই আয়াতের যেসব তাফসীর সামনে আছে, সেগুলো এই লা-কে দুইভাবে ব্যাখ্যা করে। কুরতুবীর কথা সংক্ষিপ্ত। তাঁর মতে ফালা উকসিমু মানে আকসিমু, আমি শপথ করছি, আর লা এখানে সিলা, অর্থাৎ সংযোগের একটা অব্যয়। এই পাঠে বাক্যটা সোজা একটি শপথ। লা একে শপথ না করার কথায় পরিণত করে না, নিজের আলাদা কোনো অর্থও যোগ করে না।"
          },
          {
            "en": "Ibn Kathir gives the la a task. In his Arabic tafsir he states what the speech amounts to: the matter is not as they claim, that there is no return and no reckoning, no raising and no gathering; rather all of that will happen, without fail. That is why, he says, la comes at the start of the oath, to show that what is sworn to is a negation, namely the rebuttal of their corrupt claim that denies the Day of Resurrection. The English abridgement renders this as an oath sworn by a denial of their claim.",
            "bn": "ইবন কাসীর এই লা-কে একটা কাজ দেন। আরবি তাফসীরে তিনি বাক্যের মর্ম খুলে বলেন: ব্যাপারটা তেমন নয়, যেমন তারা দাবি করে যে কোনো প্রত্যাবর্তন নেই, হিসাব নেই, পুনরুত্থান নেই, সমবেত হওয়া নেই। বরং এর সবই ঘটবে, কোনো ব্যতিক্রম ছাড়া। তিনি বলেন, এ কারণেই শপথের শুরুতে লা এসেছে। এটা দেখায় যে শপথের বিষয়টা একটা নাকচ, অর্থাৎ কিয়ামতকে অস্বীকার করার যে ভ্রান্ত দাবি তারা করে, তার খণ্ডন। ইংরেজি সংক্ষিপ্ত ভাষ্য কথাটাকে বলে তাদের দাবির অস্বীকৃতির উপর করা শপথ।"
          },
          {
            "en": "The two notes are not the same. For al-Qurtubi the la carries no meaning of its own; for Ibn Kathir it points at the claim being denied. Both still read the sentence as an oath, and the difference is whether its first word already answers the deniers. This article keeps both readings and does not choose between them. Either way, the oath's answer comes at the verse's end: inna la-qadirun.",
            "bn": "দুটি ব্যাখ্যা এক নয়। কুরতুবীর কাছে লা-এর নিজস্ব কোনো অর্থ নেই। ইবন কাসীরের কাছে এটা সেই দাবির দিকে ইঙ্গিত করে, যা নাকচ করা হচ্ছে। দুজনেই বাক্যটাকে শপথ হিসেবেই পড়েন। পার্থক্য শুধু এখানে যে প্রথম শব্দটাই অস্বীকারকারীদের জবাব দিচ্ছে কি না। এই লেখা দুটি পাঠই রেখে দেয়, কোনোটিকে বেছে নেয় না। যেভাবেই পড়া হোক, শপথের জবাব আসে আয়াতের শেষে: ইন্না লাকাদিরুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Risings, Many Settings",
          "bn": "অনেক উদয়, অনেক অস্ত"
        },
        "p": [
          {
            "en": "Al-mashariq and al-magharib are both plural: risings and settings, or easts and wests, as the English abridgement of Ibn Kathir has it. The fetched commentators fill in the plural in different ways. At-Tabari's gloss, in the portion fetched, is simply the easts of the earth and its wests. Al-Qurtubi specifies the risings of the sun and its settings, and notes that the subject has been discussed earlier, without repeating it here. Al-Baghawi is more particular still: the rising of every day of the days of the year, and its setting.",
            "bn": "আল-মাশারিক আর আল-মাগারিব দুটোই বহুবচন: উদয়স্থলসমূহ আর অস্তাচলসমূহ। ইবন কাসীরের ইংরেজি সংক্ষিপ্ত ভাষ্য বলে পূর্বসমূহ ও পশ্চিমসমূহ। এই বহুবচনের ভেতরে কী আছে, তাফসীরকারেরা তা ভিন্নভাবে বলেন। তাবারীর যে অংশ সামনে আছে, তাতে ব্যাখ্যাটা সাদামাটা: পৃথিবীর পূর্বগুলো আর পশ্চিমগুলো। কুরতুবী নির্দিষ্ট করে বলেন সূর্যের উদয়স্থল আর অস্তাচল। তিনি জানান, বিষয়টা আগেই আলোচিত হয়েছে, তাই এখানে আর বিস্তারে যান না। বাগাভী আরও সুনির্দিষ্ট: বছরের প্রতিটি দিনের উদয়স্থল আর তার অস্তাচল।"
          },
          {
            "en": "Two of the commentators widen the plural beyond the sun. The Muyassar names the risings and settings of the sun, the moon and the rest of the heavenly bodies, al-kawakib, and as-Sa'di uses almost the same words. Ibn Kathir describes the Lord sworn by as the One who created the heavens and the earth, made an east and a west, and subjected the heavenly bodies, which appear from their risings and vanish in their settings. None of them says more than this, and this article adds no astronomy of its own.",
            "bn": "দুজন তাফসীরকার বহুবচনটাকে সূর্যের বাইরেও ছড়িয়ে দেন। মুয়াসসার বলে সূর্য, চাঁদ আর বাকি সব জ্যোতিষ্কের, অর্থাৎ কাওয়াকিবের উদয়স্থল ও অস্তাচল। সা'দীর শব্দও প্রায় একই। ইবন কাসীর যে রবের নামে শপথ, তাঁর পরিচয় দেন এভাবে: যিনি আসমান ও জমিন সৃষ্টি করেছেন, পূর্ব ও পশ্চিম বানিয়েছেন, আর জ্যোতিষ্কগুলোকে বশ করে রেখেছেন। সেগুলো উদয়স্থল থেকে দেখা দেয়, অস্তাচলে হারিয়ে যায়। তাঁরা কেউ এর বেশি কিছু বলেন না। এই লেখাও নিজের দিক থেকে কোনো জ্যোতির্বিদ্যা যোগ করে না।"
          },
          {
            "en": "Al-Qurtubi also records a variant reading. Abu Haywa, Ibn Muhaysin and Humayd read bi-rabbi al-mashriqi wa-l-maghribi, in the singular: by the Lord of the east and the west. The plural is the reading in the text before us, and it is what the other commentators explain. Their glosses differ in what they count: the easts and wests of the earth, the rising and setting of each day of the year, or every heavenly body that appears and disappears.",
            "bn": "কুরতুবী একটি ভিন্ন কিরাআতও উল্লেখ করেন। আবু হাইওয়া, ইবন মুহাইসিন ও হুমাইদ পড়েছেন বিরাব্বিল মাশরিকি ওয়াল মাগরিবি, একবচনে: পূর্ব ও পশ্চিমের রবের শপথ। আমাদের সামনের পাঠে আছে বহুবচন, অন্য তাফসীরকারেরা সেটারই ব্যাখ্যা দেন। কী গোনা হচ্ছে, সেখানে তাঁদের ব্যাখ্যা আলাদা। কারও কাছে পৃথিবীর পূর্ব-পশ্চিম, কারও কাছে বছরের প্রতিটি দিনের উদয় ও অস্ত, কারও কাছে প্রতিটি জ্যোতিষ্ক, যা দেখা দেয় আবার হারিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Horizons Are Named",
          "bn": "দিগন্তের নাম কেন এল"
        },
        "p": [
          {
            "en": "Why name the risings and settings at this point? Two commentators answer in one phrase. The Muyassar says Allah swore by Himself, He being the Lord of the risings and settings, because of the dazzling signs in them that point to the resurrection. As-Sa'di describes it as an oath by the risings and settings of the sun, the moon and the stars, and gives the same reason: in them are dazzling signs of the raising of the dead. On this reading the horizons are named as evidence for the very thing the deniers of 70:36 to 70:39 refused.",
            "bn": "ঠিক এই জায়গায় উদয়স্থল আর অস্তাচলের কথা কেন? দুজন তাফসীরকার এক কথায় জবাব দেন। মুয়াসসার বলে, আল্লাহ শপথ করেছেন নিজের নামে, কারণ তিনিই উদয়স্থল ও অস্তাচলের রব। আর সেগুলোতে আছে চোখ ধাঁধানো নিদর্শন, যা পুনরুত্থানের দিকে ইশারা করে। সা'দী একে বলেন সূর্য, চাঁদ ও তারার উদয়স্থল ও অস্তাচলের শপথ। কারণও তিনি একই দেন: এগুলোর মধ্যে আছে পুনরুত্থানের পক্ষে উজ্জ্বল নিদর্শন। এই পাঠে দিগন্তের নাম আসে প্রমাণ হিসেবে, ঠিক সেই বিষয়ের প্রমাণ, যা ৭০:৩৬ থেকে ৭০:৩৯ আয়াতের অস্বীকারকারীরা মানতে চায়নি।"
          },
          {
            "en": "Ibn Kathir makes the argument from scale. The deniers, he says, had already witnessed something of Allah's power more telling than raising the dead on the Day of Resurrection: the creation of the heavens and the earth, and the subjection of everything in them, the animals, the inanimate things and every other kind of existing thing. He cites three passages for it. In 40:57 the creation of the heavens and the earth is greater than the creation of people. In 46:33 He who created them, and was not wearied by it, is able to give life to the dead.",
            "bn": "ইবন কাসীর যুক্তিটা সাজান বড়-ছোটর তুলনায়। তিনি বলেন, কিয়ামতের দিন মৃতদের জীবিত করার চেয়েও বড় এক কুদরত অস্বীকারকারীরা আগেই দেখেছে। সেটা হলো আসমান ও জমিনের সৃষ্টি, আর তার ভেতরের সবকিছুকে বশ করে রাখা: প্রাণী, জড় বস্তু, অস্তিত্বশীল আর সব রকমের সৃষ্টি। এর পক্ষে তিনি তিনটি জায়গা উদ্ধৃত করেন। ৪০:৫৭ আয়াত বলে, আসমান ও জমিনের সৃষ্টি মানুষের সৃষ্টির চেয়ে বড়। ৪৬:৩৩ আয়াত বলে, যিনি সেগুলো সৃষ্টি করেছেন এবং তাতে ক্লান্ত হননি, তিনি মৃতকে জীবিত করতে সক্ষম।"
          },
          {
            "en": "His third citation is 36:81 and 36:82: is not the One who created the heavens and the earth able to create the like of them? Yes, and His command, when He intends a thing, is only to say to it Be, and it is. Then, Ibn Kathir writes, He says here: so I swear by the Lord of the risings and the settings that We are able. Set beside those verses, the oath of 70:40 is one more instance of the same reasoning, which moves from the greater creation to the lesser.",
            "bn": "তাঁর তৃতীয় উদ্ধৃতি ৩৬:৮১ ও ৩৬:৮২ আয়াত: যিনি আসমান ও জমিন সৃষ্টি করেছেন, তিনি কি তাদের মতো আবার সৃষ্টি করতে সক্ষম নন? অবশ্যই। তিনি কিছু চাইলে তাঁর আদেশ শুধু এটুকু যে বলেন, হও, আর তা হয়ে যায়। এরপর ইবন কাসীর লেখেন, আর এখানে তিনি বলছেন: আমি শপথ করছি উদয়স্থলসমূহ ও অস্তাচলসমূহের রবের, আমি অবশ্যই সক্ষম। ওই আয়াতগুলোর পাশে রাখলে ৭০:৪০ আয়াতের শপথ একই যুক্তির আরেকটি দৃষ্টান্ত। যুক্তিটা এগোয় বড় সৃষ্টি থেকে ছোট সৃষ্টির দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Able, and to What End",
          "bn": "সক্ষম, কিন্তু কী করতে"
        },
        "p": [
          {
            "en": "Inna la-qadirun: indeed We are able. The Muyassar glosses it as able with a complete ability, qudra tamma. Al-Baghawi quotes the words and adds nothing to them. The ability is named here, but what it is able to do comes in the next verse, and Ibn Kathir reads the two together: We are able to replace them with better than them, and We are not to be outdone. This article mentions 70:41 only as far as the sources tie it to this oath.",
            "bn": "ইন্না লাকাদিরুন: নিশ্চয়ই আমি সক্ষম। মুয়াসসার এর ব্যাখ্যা দেয় পূর্ণ ক্ষমতায় সক্ষম, কুদরাতুন তাম্মাহ। বাগাভী শব্দগুলো উদ্ধৃত করেন, কিছু যোগ করেন না। ক্ষমতার কথা এখানে বলা হলো, কিন্তু কী করতে সক্ষম, তা আসে পরের আয়াতে। ইবন কাসীর দুটি আয়াতকে এক বাক্য হিসেবে পড়েন: আমি তাদের বদলে তাদের চেয়ে উত্তমদের আনতে সক্ষম, আর আমাকে কেউ হার মানাতে পারবে না। তাফসীরগুলো যতটুকু এই শপথের সঙ্গে ৭০:৪১ আয়াতকে জুড়ে দেয়, এই লেখা ততটুকুই তার কথা বলে।"
          },
          {
            "en": "On what replace them with better means, Ibn Kathir records two readings. His own explanation is that on the Day of Judgement Allah will bring them back to life in bodies better than the bodies they have now, since His power is able to do that. He supports it with 75:3 and 75:4, We are able to put together in order the tips of his fingers, and with 56:60 and 56:61, where Allah has decreed death among people, is not outdone, and will change their likenesses and produce them in what they do not know.",
            "bn": "তাদের বদলে উত্তমদের আনা বলতে কী বোঝায়, এ নিয়ে ইবন কাসীর দুটি ব্যাখ্যা উল্লেখ করেন। তাঁর নিজের ব্যাখ্যা হলো, কিয়ামতের দিন আল্লাহ তাদের আবার জীবিত করবেন এখনকার দেহের চেয়ে উত্তম দেহে, কারণ তাঁর কুদরত তা করতে সক্ষম। এর পক্ষে তিনি আনেন ৭৫:৩ ও ৭৫:৪ আয়াত, যেখানে আল্লাহ বলেন, আমি তার আঙুলের ডগা পর্যন্ত ঠিকঠাক জুড়ে দিতে সক্ষম। আরও আনেন ৫৬:৬০ ও ৫৬:৬১ আয়াত। সেখানে আল্লাহ মানুষের মধ্যে মৃত্যু নির্ধারণ করেছেন, কেউ তাঁকে হার মানাতে পারে না, আর তিনি তাদের আকৃতি বদলে এমন রূপে গড়বেন, যা তারা জানে না।"
          },
          {
            "en": "The second reading he reports from Ibn Jarir, that is at-Tabari, who preferred the meaning a nation who will obey Us and not disobey Us, and read it like 47:38: if you turn away, He will replace you with another people, and they will not be like you. Ibn Kathir then gives his own view, that the first meaning is more apparent because other verses support it, and he closes with: Allah knows best. This article reports both readings and Ibn Kathir's stated preference, and takes no side of its own.",
            "bn": "দ্বিতীয় ব্যাখ্যাটি তিনি উল্লেখ করেন ইবন জারীর, অর্থাৎ তাবারীর বরাতে। তাবারী পছন্দ করেছেন এই অর্থ: এমন এক জাতি, যারা আমার আনুগত্য করবে, নাফরমানি করবে না। তিনি একে পড়েছেন ৪৭:৩৮ আয়াতের মতো: তোমরা মুখ ফিরিয়ে নিলে তিনি তোমাদের বদলে অন্য এক কওম আনবেন, আর তারা তোমাদের মতো হবে না। এরপর ইবন কাসীর নিজের মত জানান: প্রথম অর্থটাই বেশি স্পষ্ট, কারণ অন্য আয়াতগুলো তার পক্ষে। শেষে বলেন, আল্লাহই ভালো জানেন। এই লেখা দুটি ব্যাখ্যা আর ইবন কাসীরের ঘোষিত পছন্দ জানিয়ে দেয়, নিজে কোনো পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Licence the Verse Withholds",
          "bn": "এ শপথ কাউকে দাগায় না"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verses around 70:40 describe particular people in the Prophet's ﷺ own time, who gathered around him in groups, turned away, and doubted the return. The verse describes what it describes. It licenses nothing against any living person or community: no labelling of a neighbour as one of those people, no claim that some group today has been or will be replaced, and no sorting of people into the saved and the lost. Neither of the two readings of 70:41 reported above is a judgement anyone may pass on another.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। ৭০:৪০ আয়াতের আশপাশের আয়াতগুলো নবী ﷺ-এর নিজের সময়ের নির্দিষ্ট কিছু মানুষের বর্ণনা দেয়। তারা দলে দলে তাঁর চারপাশে জড়ো হতো, মুখ ফিরিয়ে নিত, আর পুনরুত্থানে সন্দেহ করত। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। প্রতিবেশীকে ওদের একজন বলে দাগানো যাবে না। আজকের কোনো দলকে বদলে ফেলা হয়েছে বা হবে, এমন দাবিও করা যাবে না। মানুষকে নাজাতপ্রাপ্ত আর হারিয়ে যাওয়া, এই দুই ভাগে সাজানোরও সুযোগ নেই। ৭০:৪১ আয়াতের যে দুটি ব্যাখ্যা উপরে এসেছে, তার কোনোটাই অন্যের উপর রায় দেওয়ার হাতিয়ার নয়।"
          },
          {
            "en": "What the commentators draw from the oath is an argument about Allah's power, not a verdict on individuals. The Muyassar and as-Sa'di see in the risings and settings signs that point to the resurrection, and Ibn Kathir sees a creation greater than the raising of the dead. All of that faces the reader. Whoever turns these verses into a weapon has taken an oath about the return and made it a tool for contempt, which the verse never offers. Their right use is to ask what one's own certainty of the return looks like.",
            "bn": "এই শপথ থেকে তাফসীরকারেরা যা বের করেন, তা আল্লাহর কুদরত নিয়ে একটা যুক্তি, কোনো ব্যক্তির উপর রায় নয়। মুয়াসসার আর সা'দী উদয়স্থল ও অস্তাচলে দেখেন পুনরুত্থানের দিকে ইশারা করা নিদর্শন। ইবন কাসীর দেখেন এমন এক সৃষ্টি, যা মৃতকে জীবিত করার চেয়েও বড়। এর সবটাই পাঠকের নিজের দিকে ফেরানো। যে এই আয়াতগুলোকে অস্ত্র বানায়, সে পুনরুত্থান নিয়ে করা এক শপথকে অবজ্ঞার হাতিয়ার করে ফেলে। আয়াতটি এমন কিছু দেয়নি। এর সঠিক ব্যবহার হলো নিজেকে জিজ্ঞেস করা, পুনরুত্থানের উপর আমার নিজের ইয়াকীন দেখতে কেমন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Sources Leave Unsaid",
          "bn": "সূত্র যেখানে থেমে যায়"
        },
        "p": [
          {
            "en": "No fetched tafsir attaches a hadith to 70:40, so this article quotes none. The one narration in Ibn Kathir's grouped passage, through Jabir ibn Samura, explains the word 'izin, in groups, of 70:37, and is not attached to this verse. None of the commentators gives an occasion of revelation for it either, so the verse is read here in its place in the surah, after 70:36 to 70:39. Ma'arif al-Qur'an, in the portion fetched for this group, closes its commentary on the surah at 70:33 and says nothing on the oath.",
            "bn": "সামনে থাকা কোনো তাফসীর ৭০:৪০ আয়াতের সঙ্গে কোনো হাদীস জুড়ে দেয়নি, তাই এই লেখাও কোনো হাদীস উদ্ধৃত করে না। ইবন কাসীরের একত্র আলোচনায় জাবির ইবন সামুরা (রাঃ)-এর সূত্রে একটিমাত্র বর্ণনা আছে। সেটা ৭০:৩৭ আয়াতের ইযীন, অর্থাৎ দলে দলে শব্দটির ব্যাখ্যা দেয়, এই আয়াতের সঙ্গে যুক্ত নয়। কোনো তাফসীরকার এই আয়াতের শানে নুযূলও বলেননি। তাই এখানে আয়াতটিকে পড়া হয়েছে সূরার ভেতরে তার জায়গা থেকে, ৭০:৩৬ থেকে ৭০:৩৯ আয়াতের পরে। এই অংশের জন্য মাআরিফুল কুরআনের যে লেখা পাওয়া গেছে, তা ৭০:৩৩ আয়াতেই সূরার আলোচনা শেষ করে, শপথ নিয়ে কিছু বলে না।"
          },
          {
            "en": "Other things are left aside because no fetched source says them. None of the commentators, on this verse, compares it with other passages that speak of the east and the west, so this article makes no such comparison. Al-Qurtubi points back to an earlier discussion of the risings and settings without repeating it, and whatever he said there would have to be read on its own verse.",
            "bn": "আরও কিছু বিষয় বাদ রাখা হয়েছে, কারণ সামনে থাকা কোনো সূত্র তা বলে না। এই আয়াতের আলোচনায় কোনো তাফসীরকার পূর্ব ও পশ্চিমের কথা আছে এমন অন্য আয়াতের সঙ্গে একে মিলিয়ে দেখেননি। তাই এই লেখাও তেমন তুলনা করে না। কুরতুবী উদয়স্থল ও অস্তাচল নিয়ে আগের এক আলোচনার দিকে ইঙ্গিত করেন, কিন্তু তা এখানে আর বলেন না। সেখানে তিনি কী বলেছেন, তা পড়তে হবে সেই আয়াতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Watching the Horizon Again",
          "bn": "আবার দিগন্তের দিকে চোখ"
        },
        "p": [
          {
            "en": "Each of these readings returns the reader to something ordinary. Al-Baghawi's gloss puts a rising and a setting into every day of the year, and Ibn Kathir's has the heavenly bodies appear and vanish under the Lord who made the east and the west. The verse uses what everyone sees to answer what some refused to believe. A sunrise, on this reading, is more than the start of a working day. It is part of what the Lord named in this oath governs, and the oath is about the return.",
            "bn": "এই সব ব্যাখ্যাই পাঠককে ফিরিয়ে আনে খুব চেনা কিছুর কাছে। বাগাভীর ব্যাখ্যায় বছরের প্রতিটি দিনের আছে একটা উদয় আর একটা অস্ত। ইবন কাসীরের ব্যাখ্যায় জ্যোতিষ্কগুলো দেখা দেয় আর হারিয়ে যায় সেই রবের অধীনে, যিনি পূর্ব ও পশ্চিম বানিয়েছেন। সবাই যা চোখে দেখে, আয়াতটি তা দিয়েই জবাব দেয় সেই কথার, যা কেউ কেউ মানতে চায়নি। এই পাঠে সূর্যোদয় শুধু কাজের দিনের শুরু নয়। এই শপথে যে রবের নাম এসেছে, সূর্যোদয় তাঁরই হুকুমের অংশ। আর শপথটা পুনরুত্থান নিয়ে।"
          },
          {
            "en": "The oath also says something about where doubt comes from. The people of 70:38 hoped for the garden while dismissing the return, and the verses answer them first with their own origin and then with the horizons. A reader can turn the same two proofs inward: the small beginning of 70:39, and the risings and settings of 70:40. Neither is far away. Both say that He who began creation, and who keeps every horizon in its order, is able, and the verse leaves the rest of the sentence to 70:41.",
            "bn": "সন্দেহ কোথা থেকে আসে, সে বিষয়েও শপথটা কিছু বলে। ৭০:৩৮ আয়াতের লোকেরা পুনরুত্থানকে উড়িয়ে দিয়েও জান্নাতের আশা করত। আয়াতগুলো তাদের জবাব দেয় প্রথমে তাদের নিজেদের সূচনা দিয়ে, তারপর দিগন্ত দিয়ে। পাঠক এই দুই প্রমাণ নিজের দিকে ঘুরিয়ে নিতে পারেন: ৭০:৩৯ আয়াতের ছোট্ট সূচনা, আর ৭০:৪০ আয়াতের উদয়স্থল ও অস্তাচল। কোনোটাই দূরে নয়। দুটোই বলে, যিনি সৃষ্টির সূচনা করেছেন আর প্রতিটি দিগন্তকে নিয়মে বেঁধে রেখেছেন, তিনি সক্ষম। বাক্যের বাকিটুকু আয়াতটি ছেড়ে দেয় ৭০:৪১ আয়াতের হাতে।"
          }
        ]
      }
    ]
  }
});
