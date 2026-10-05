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
  }
});
