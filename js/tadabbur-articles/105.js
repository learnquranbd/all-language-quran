/**
 * Tadabbur long-form articles — surah 105.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "105:3": {
    "sections": [
      {
        "h": {
          "en": "Birds Sent Against Them",
          "bn": "তাদের বিরুদ্ধে পাঠানো পাখি"
        },
        "p": [
          {
            "en": "Wa-arsala 'alayhim tayran ababil: and He sent against them birds in flocks. The Arabic has four words. Wa-arsala, and He sent; 'alayhim, against them, or upon them; tayran, birds; ababil, in flocks. It is the third verse of Surat al-Fil. Before it, 105:1 asks, have you not considered how your Lord dealt with the companions of the elephant, and 105:2 asks whether He did not make their plot go astray. After it, 105:4 speaks of stones of sijjil and 105:5 of eaten straw; those are separate verses, left to their own entries.",
            "bn": "ওয়া আরসালা আলাইহিম তাইরান আবাবীল: আর তিনি তাদের বিরুদ্ধে পাঠালেন ঝাঁকে ঝাঁকে পাখি। আরবিতে শব্দ চারটি। ওয়া আরসালা, আর তিনি পাঠালেন। আলাইহিম, তাদের বিরুদ্ধে, বা তাদের উপর। তাইরান, পাখি। আবাবীল, ঝাঁকে ঝাঁকে। সূরা আল-ফীলের এটি তৃতীয় আয়াত। এর আগে ১০৫:১ জিজ্ঞেস করে, তুমি কি দেখোনি তোমার রব হাতিওয়ালাদের সঙ্গে কী করলেন? ১০৫:২ জিজ্ঞেস করে, তিনি কি তাদের চক্রান্ত বিপথে পাঠিয়ে দেননি? পরে ১০৫:৪ আয়াতে আছে সিজ্জীলের পাথরের কথা, আর ১০৫:৫ আয়াতে খাওয়া খড়ের কথা। ও দুটি আলাদা আয়াত, সেগুলোর আলোচনা তাদের নিজস্ব জায়গায়।"
          },
          {
            "en": "Within the surah, the pronoun in 'alayhim has one place to return to: the companions of the elephant named in 105:1, whose plot 105:2 describes. At-Tabari makes the subject explicit when he restates the verse: wa-arsala 'alayhim rabbuka, and your Lord sent against them, carrying the word your Lord over from the first verse. As-Sa'di and Ibn Kathir begin their lines with Allah sent against them. Al-Muyassar uses another verb, ba'atha, He dispatched, and runs this verse and the next into a single sentence.",
            "bn": "সূরার ভেতরে আলাইহিম শব্দের সর্বনামটি ফেরার জায়গা একটাই: ১০৫:১ আয়াতে যাদের নাম এসেছে সেই হাতিওয়ালারা, যাদের চক্রান্তের কথা বলে ১০৫:২। তাবারী আয়াতটি নিজের ভাষায় বলতে গিয়ে কর্তাকে স্পষ্ট করে দেন: ওয়া আরসালা আলাইহিম রাব্বুকা, আর তোমার রব তাদের বিরুদ্ধে পাঠালেন। 'তোমার রব' কথাটা তিনি প্রথম আয়াত থেকে টেনে আনেন। সা'দী আর ইবন কাসীর শুরুই করেন এভাবে: আল্লাহ তাদের বিরুদ্ধে পাঠালেন। মুয়াসসার অন্য একটি ক্রিয়া ব্যবহার করে, বাআসা, তিনি প্রেরণ করলেন। এ আয়াত আর পরের আয়াতকে সে একটিমাত্র বাক্যে গেঁথে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Flocks Following One Another",
          "bn": "একের পেছনে আরেক ঝাঁক"
        },
        "p": [
          {
            "en": "At-Tabari's own gloss of ababil is precise: birds scattered, following one another from various directions. He adds that the word is a plural with no singular, and sets it beside two other Arabic plurals of the same kind, shamatit and 'abadid. Then he says that the people of interpretation said much the same as he did, and lists them by name with their chains. The core of his reading is movement in sequence: not one cloud of birds arriving at once, but group after group coming from different sides.",
            "bn": "আবাবীলের যে অর্থ তাবারী নিজে দেন, তা বেশ নির্দিষ্ট: ছড়ানো ছিটানো পাখি, যারা নানা দিক থেকে একে অন্যের পেছনে পেছনে আসে। তিনি যোগ করেন, শব্দটি এমন এক বহুবচন যার কোনো একবচন নেই। একই ধরনের আরও দুটি আরবি বহুবচন তিনি পাশে রাখেন: শামাতীত আর আবাদীদ। তারপর বলেন, তাফসীরের লোকেরাও প্রায় একই কথা বলেছেন, আর সনদসহ তাঁদের নাম একে একে উল্লেখ করেন। তাঁর ব্যাখ্যার মূল কথা ধারাবাহিক আগমন। সব পাখি এক মেঘ হয়ে একসঙ্গে আসেনি, এসেছে নানা দিক থেকে দলের পর দল।"
          },
          {
            "en": "The shorter commentaries say it in fewer words. As-Sa'di gives a single gloss: mutafarriqah, scattered. Al-Muyassar says in groups following one another. Al-Baghawi combines the two, many, scattered, each following the other, and then adds under the words it is said: herds, like camels gathered into herds. He also quotes Abu 'Ubayda: ababil means groups in dispersion, as one says the horses came ababil, from here and from there. The image in each is of numbers arriving in parts, not of a single kind of bird.",
            "bn": "ছোট তাফসীরগুলো একই কথা বলে কম শব্দে। সা'দী একটি শব্দেই অর্থ দেন: মুতাফাররিকা, বিক্ষিপ্ত। মুয়াসসার বলে, দলে দলে, একের পর এক। বাগাভী দুটি অর্থ মেলান: অনেক, বিক্ষিপ্ত, একটি আরেকটির পেছনে। তারপর 'বলা হয়' বলে যোগ করেন: পাল পাল, যেমন উট পালে পালে জড়ো করা হয়। আবূ উবাইদার কথাও তিনি আনেন: আবাবীল মানে ছড়িয়ে থাকা দল। আরবরা বলে, ঘোড়াগুলো এল আবাবীল হয়ে, এদিক থেকে, ওদিক থেকে। প্রতিটি ব্যাখ্যায় ছবিটা একই: সংখ্যায় অনেক, আসছে ভাগে ভাগে। কোনো এক জাতের পাখির ছবি এখানে নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an, in English, puts the point most directly. Ababil, it says, is plural and is said to have no singular; it means birds in flocks, or swarms of birds, and it is not the name of a particular bird. The verse, in other words, tells how the birds came, not what they were. Whatever the commentators later report about kind, colour or origin is carried by narrations about the birds, and the word ababil itself does not settle any of it.",
            "bn": "মাআরিফুল কুরআন কথাটা সবচেয়ে সরাসরি বলে। তার ভাষ্যে আবাবীল বহুবচন, বলা হয় এর কোনো একবচন নেই। অর্থ ঝাঁকে ঝাঁকে পাখি, বা পাখির দল। এটি কোনো নির্দিষ্ট পাখির নাম নয়। অর্থাৎ আয়াত জানায় পাখিগুলো কীভাবে এসেছিল, তারা কী পাখি ছিল তা নয়। পাখির জাত, রং বা কোথা থেকে এল, এসব নিয়ে তাফসীরকারেরা পরে যা আনেন, তা আসে পাখি সম্পর্কে বিভিন্ন বর্ণনা থেকে। আবাবীল শব্দটি নিজে এর কোনোটিরই মীমাংসা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Early Voices, Named One by One",
          "bn": "পূর্বসূরিদের কথা, নাম ধরে ধরে"
        },
        "p": [
          {
            "en": "At-Tabari's list is worth reading slowly, because each early voice chose a slightly different word. From 'Abd Allah ibn Mas'ud, through Zirr, by two chains that both run through Hammad ibn Salama from 'Asim, he reports firaq, companies or divided groups. From Ibn 'Abbas, by two different chains, he reports: those that follow one another. From ad-Dahhak: successive, one in the track of another. From Mujahid, three words together: diverse, successive, gathered. None of these is graded in the text; at-Tabari simply gives each with its chain.",
            "bn": "তাবারীর তালিকা ধীরে পড়ার মতো, কারণ পূর্বসূরিদের প্রত্যেকে একটু আলাদা শব্দ বেছে নিয়েছেন। আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকে, যির-এর মাধ্যমে, দুটি সনদে তিনি আনেন ফিরাক, অর্থাৎ ভাগ ভাগ দল। দুটি সনদই হাম্মাদ ইবন সালামা হয়ে আসিম থেকে এসেছে। ইবন আব্বাস (রাঃ) থেকে দুটি ভিন্ন সনদে আনেন: যারা একে অন্যের পেছনে আসে। দাহহাক থেকে: পরপর, একটি আরেকটির পদচিহ্ন ধরে। মুজাহিদ থেকে একসঙ্গে তিনটি শব্দ: নানা রকম, পরপর, জড়ো হওয়া। লেখায় এগুলোর কোনোটির মান নির্ণয় নেই। তাবারী প্রতিটি কথা শুধু তার সনদসহ উল্লেখ করেন।"
          },
          {
            "en": "The list goes on. Al-Hasan and Qatada, the latter by two chains, say simply: many. Sa'id ibn 'Abd al-Rahman ibn Abza says scattered. Ibn Sabit and Abu Salama, in one report, say zumar, troops or bands. Ibn Zayd says the ababil are the varied ones, coming from here and coming from there; they came at them from every place. Ishaq ibn 'Abd Allah ibn al-Harith ibn Nawfal reaches for camels: they are herds, like camels gathered into herds. Number, sequence and spread from every side: all three ideas are in the list.",
            "bn": "তালিকা আরও চলে। হাসান বলেন, আর কাতাদাও দুটি সনদে বলেন, শুধু একটি কথা: অনেক। সাঈদ ইবন আবদুর রহমান ইবন আবযা বলেন: বিক্ষিপ্ত। ইবন সাবিত আর আবূ সালামা একটি বর্ণনায় বলেন: যুমার, অর্থাৎ দল বা বাহিনী। ইবন যাইদ বলেন, আবাবীল হলো নানা রকম পাখি, যারা এদিক থেকে আসে, ওদিক থেকে আসে, সব জায়গা থেকে তাদের উপর এসে পড়েছিল। ইসহাক ইবন আবদুল্লাহ ইবন হারিস ইবন নাওফাল উপমা টানেন উট থেকে: এরা পাল পাল, যেমন উট পালে পালে জড়ো হয়। তালিকায় তিনটি ভাবই আছে: সংখ্যা, ধারাবাহিকতা, আর সবদিক থেকে ছড়িয়ে আসা।"
          },
          {
            "en": "Al-Qurtubi sorts the same material differently. He gives 'Ikrima's word as gathered, assigns successive, one after another, to Ibn 'Abbas and Mujahid, and files Ibn Mas'ud with Ibn Zayd and al-Akhfash under varied and scattered, coming from every side, where at-Tabari's line from Ibn Mas'ud reads firaq. He then quotes an-Nahhas: these sayings agree, and the real sense is great groups. An-Nahhas derives the word from ibil, camels, citing the expression that one man is yu'abbalu over another, meaning made great and numerous over him.",
            "bn": "কুরতুবী একই উপাদান সাজান অন্যভাবে। ইকরিমার শব্দ তিনি দেন: জড়ো হওয়া। 'পরপর, একটির পর একটি' কথাটি তিনি ইবন আব্বাস (রাঃ) ও মুজাহিদের নামে রাখেন। আর ইবন মাসউদ (রাঃ)-কে রাখেন ইবন যাইদ ও আখফাশের সঙ্গে, 'নানা রকম, বিক্ষিপ্ত, সবদিক থেকে আসা' অর্থের দলে। তাবারীর বর্ণনায় অবশ্য ইবন মাসউদ (রাঃ)-এর শব্দ ফিরাক। এরপর কুরতুবী নাহহাসের কথা আনেন: এসব মত আসলে একই কথা বলে, প্রকৃত অর্থ বিশাল বিশাল দল। নাহহাস শব্দটিকে ইবিল, অর্থাৎ উট থেকে উৎপন্ন বলেন। প্রমাণ হিসেবে আনেন একটি বাগধারা, যার মানে অমুকের উপর অমুককে বড় আর বেশি করে তোলা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Searching for a Singular",
          "bn": "একবচনের খোঁজে"
        },
        "p": [
          {
            "en": "The grammarians argued over whether ababil has a singular at all. At-Tabari reports that Abu 'Ubayda Ma'mar ibn al-Muthanna had never seen anyone give it a singular, and that al-Farra' said he had heard nothing from the Arabs on its singular. Yet al-Farra' also relates that Abu Ja'far ar-Ru'asi, whom he calls trustworthy, heard that its singular is ibalah. Al-Kisa'i said he heard the grammarians give ibbawl, on the pattern of 'ijjawl; the text then adds that some grammarians gave yet another form. Al-Baghawi repeats much of this in brief.",
            "bn": "আবাবীলের আদৌ কোনো একবচন আছে কি না, তা নিয়ে ব্যাকরণবিদেরা তর্ক করেছেন। তাবারী জানান, আবূ উবাইদা মা'মার ইবনুল মুসান্না কাউকে এর একবচন দিতে দেখেননি। ফাররা বলেন, এর একবচন নিয়ে আরবদের মুখে তিনি কিছুই শোনেননি। তবু ফাররাই জানান, আবূ জা'ফর রুআসী, যাঁকে তিনি নির্ভরযোগ্য বলেন, শুনেছিলেন এর একবচন ইবালাহ। কিসাঈ বলেন, তিনি ব্যাকরণবিদদের মুখে শুনেছেন ইব্বাওল, ইজ্জাওল শব্দের ওজনে। এরপর লেখায় আছে, কিছু ব্যাকরণবিদ আরও একটি রূপের কথা বলেছেন। বাগাভী এসবের অনেকটাই সংক্ষেপে আবার বলেন।"
          },
          {
            "en": "Al-Qurtubi gathers more. Through al-Jawhari he reports al-Akhfash: it is said, your camels came ababil, meaning in divisions, and birds ababil; it carries the sense of great number and is a plural with no singular. Al-Mubarrad gives ibbil, like sikkin. Al-Qurtubi has ar-Ru'asi hearing ibbalah with a doubled b, while al-Farra' relates ibalah without it, and adds that whoever said iybal would be right, as with dinar and dananir. He also quotes lines of Ru'ba ibn al-'Ajjaj, al-A'sha and others using the word. The article chooses no form.",
            "bn": "কুরতুবী আরও বেশি জড়ো করেন। জাওহারীর মাধ্যমে তিনি আখফাশের কথা আনেন: বলা হয়, তোমার উটগুলো এল আবাবীল হয়ে, মানে ভাগে ভাগে। পাখির বেলাতেও বলা হয় তাইরান আবাবীল। শব্দটি আধিক্য বোঝায়, আর এটি এমন বহুবচন যার একবচন নেই। মুবাররাদ বলেন ইব্বীল, সিক্কীন শব্দের মতো। কুরতুবীর বর্ণনায় রুআসী শুনেছিলেন ইব্বালাহ, ব-এ তাশদীদসহ। আর ফাররা আনেন তাশদীদ ছাড়া ইবালাহ। ফাররা আরও বলেন, কেউ ঈবাল বললেও ভুল হতো না, যেমন দীনার থেকে দানানীর। রু'বা ইবনুল আজ্জাজ, আ'শা ও অন্যদের কবিতার চরণও তিনি আনেন, যেখানে শব্দটি এসেছে। কোন রূপটি ঠিক, এ লেখা তা বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sea or Sky?",
          "bn": "সমুদ্র, নাকি আকাশ?"
        },
        "p": [
          {
            "en": "The verse says He sent them; it does not say from where. At-Tabari reports, without naming anyone, that it was mentioned that they were birds brought out of the sea, and that some said they came from the direction of the sea. 'Ikrima, through Hushaym from Husayn, says they came out green, from the sea. 'Ubayd ibn 'Umayr calls them bahriyyah, sea birds. Ibn Kathir's Arabic line has birds from the sea, and al-Baghawi quotes Qatada: birds that came from the direction of the sea, troop upon troop.",
            "bn": "আয়াত বলে, তিনি পাঠালেন। কোথা থেকে, তা বলে না। তাবারী কারও নাম না নিয়ে জানান, উল্লেখ আছে যে পাখিগুলোকে সমুদ্র থেকে বের করে আনা হয়েছিল। কেউ কেউ বলেছেন, সেগুলো এসেছিল সমুদ্রের দিক থেকে। ইকরিমা, হুশাইম হয়ে হুসাইনের সূত্রে, বলেন পাখিগুলো সবুজ রঙে বেরিয়ে এসেছিল সমুদ্র থেকে। উবাইদ ইবন উমাইর এদের বলেন বাহরিয়্যা, সামুদ্রিক পাখি। ইবন কাসীরের আরবি বাক্যেও আছে সমুদ্র থেকে আসা পাখির কথা। আর বাগাভী কাতাদার কথা আনেন: পাখিগুলো এসেছিল সমুদ্রের দিক থেকে, দলের পর দল।"
          },
          {
            "en": "Al-Qurtubi opens differently. His first report is from Sa'id ibn Jubayr: they were birds from the sky, never seen before them, and nothing like them seen after. Ma'arif al-Qur'an, citing Sa'id ibn Jubayr as quoted by al-Qurtubi, adds that the birds were somewhat smaller than a pigeon and had never been seen before; the size is not in the al-Qurtubi text fetched for this verse, so it stands as Ma'arif's. Sea and sky are both carried in the sources. The verse itself names neither, and the article leaves the two side by side.",
            "bn": "কুরতুবী শুরু করেন অন্যভাবে। তাঁর প্রথম বর্ণনা সাঈদ ইবন জুবাইর থেকে: পাখিগুলো এসেছিল আকাশ থেকে, এর আগে এমন পাখি দেখা যায়নি, পরেও তাদের মতো কিছু দেখা যায়নি। মাআরিফুল কুরআন কুরতুবীর উদ্ধৃতি দিয়ে সাঈদ ইবন জুবাইরের নামে বলে, পাখিগুলো কবুতরের চেয়ে কিছুটা ছোট ছিল, আর আগে কখনো দেখা যায়নি। আকারের কথাটি অবশ্য এ আয়াতের জন্য আনা কুরতুবীর লেখায় নেই, তাই সেটি মাআরিফেরই কথা হিসেবে থাকছে। সমুদ্র আর আকাশ, দুটো কথাই সূত্রগুলোতে আছে। আয়াত নিজে কোনোটির নাম নেয় না, আর এ লেখাও দুটি কথাকে পাশাপাশি রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Colours, Beaks and Claws",
          "bn": "রং, ঠোঁট আর নখর"
        },
        "p": [
          {
            "en": "On what the birds looked like, at-Tabari says plainly that they differed: some said white, others black, others green. From Ibn 'Abbas he reports, through Ibn 'Awn from Muhammad ibn Sirin, by more than one route, that they were birds with kharatim like the beaks of birds and palms like the paws of dogs; one of his routes runs from Ibn 'Awn to Ibn 'Abbas with Ibn Sirin left out. 'Ikrima, by the chain already named, adds heads like the heads of beasts of prey. No grading is given for any of them.",
            "bn": "পাখিগুলো দেখতে কেমন ছিল, এ নিয়ে তাবারী সোজাসুজি বলেন, মতভেদ হয়েছে। কেউ বলেছেন সাদা, কেউ কালো, কেউ সবুজ। ইবন আব্বাস (রাঃ) থেকে তিনি আনেন, ইবন আওন হয়ে মুহাম্মাদ ইবন সীরীনের সূত্রে, একাধিক পথে: সেগুলো ছিল পাখি, যাদের খারাতীম ছিল পাখির ঠোঁটের মতো, আর থাবা ছিল কুকুরের থাবার মতো। তাঁর একটি পথে অবশ্য ইবন সীরীনের নাম নেই, ইবন আওন থেকে সরাসরি ইবন আব্বাস (রাঃ)। ইকরিমা, আগে বলা সনদেই, যোগ করেন: মাথা ছিল হিংস্র পশুর মাথার মতো। এর কোনোটিরই মান নির্ণয় লেখায় দেওয়া নেই।"
          },
          {
            "en": "'Ubayd ibn 'Umayr, through al-A'mash from Abu Sufyan, by three routes in at-Tabari, says they were black sea birds carrying stones in their beaks and claws; al-Qurtubi gives the same words in the name of Muhammad ibn Ka'b. Sa'id ibn Jubayr, through 'Ata' ibn as-Sa'ib, says green birds with yellow beaks, coming and going over them. Al-Baghawi adds ar-Rabi': fangs like the fangs of beasts of prey; and Qatada: each bird carried three stones, two in its feet and one in its beak. The stones themselves are the subject of 105:4.",
            "bn": "উবাইদ ইবন উমাইর, আ'মাশ হয়ে আবূ সুফিয়ানের সূত্রে, তাবারীতে তিনটি পথে বলেন: সেগুলো ছিল কালো সামুদ্রিক পাখি, ঠোঁটে আর নখরে পাথর বহন করছিল। কুরতুবী হুবহু একই কথা আনেন মুহাম্মাদ ইবন কা'বের নামে। সাঈদ ইবন জুবাইর, আতা ইবনুস সাইবের সূত্রে, বলেন: সবুজ পাখি, হলুদ ঠোঁট, তাদের উপর দিয়ে আসা-যাওয়া করছিল। বাগাভী যোগ করেন রবী'র কথা: হিংস্র পশুর মতো দাঁত। আর কাতাদার কথা: প্রতিটি পাখি তিনটি পাথর বহন করছিল, দুটি দুই পায়ে, একটি ঠোঁটে। পাথরের প্রসঙ্গ অবশ্য ১০৫:৪ আয়াতের বিষয়।"
          },
          {
            "en": "Al-Qurtubi reports, without a chain, that 'A'isha said they most resembled swallows, al-khatatif. Ibn Kathir's line says birds like khatatif and balasan. Under it is said, al-Qurtubi adds that they were like bats, red and black; that they were white; and even that they were the 'anqa' of the proverbs. Ma'arif al-Qur'an notes that in Urdu ababil usually refers to swallows, and says swallows are not implied in the verse. That is a claim about the word, not a reply to 'A'isha's comparison, and the two are kept apart here.",
            "bn": "কুরতুবী সনদ ছাড়া আয়েশা (রাঃ)-এর কথা আনেন: পাখিগুলো সবচেয়ে বেশি মিলত খাতাতীফ, অর্থাৎ সোয়ালো পাখির সঙ্গে। ইবন কাসীরের বাক্যে আছে, খাতাতীফ আর বালাসানের মতো পাখি। 'বলা হয়' বলে কুরতুবী আরও আনেন: সেগুলো ছিল বাদুড়ের মতো, লাল ও কালো। আবার বলা হয়, সাদা। এমনকি বলা হয়, প্রবাদের সেই আনকা। মাআরিফুল কুরআন জানায়, উর্দুতে আবাবীল বলতে সাধারণত সোয়ালো পাখি বোঝায়, তবে আয়াতে সোয়ালো উদ্দেশ্য নয়। এ কথা শব্দটি নিয়ে, আয়েশা (রাঃ)-এর তুলনার জবাব নয়। তাই এখানে দুটি কথাকে আলাদা রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports, Chains and Limits",
          "bn": "বর্ণনা, সনদ আর সীমারেখা"
        },
        "p": [
          {
            "en": "Everything said above about the birds' kind, colour, shape and origin comes from reports of Companions and Successors: Ibn 'Abbas, 'A'isha, 'Ikrima, 'Ubayd ibn 'Umayr, Sa'id ibn Jubayr, Qatada and others. At-Tabari gives most of them with chains; al-Qurtubi and al-Baghawi give most without. None of the fetched texts grades them. They are reported here as what each person said, with the chain where the source gives a chain, not as words of the Prophet ﷺ and not as a settled description of the birds.",
            "bn": "পাখির জাত, রং, গড়ন আর উৎস নিয়ে ওপরে যা এসেছে, তার সবই সাহাবি ও তাবেঈদের বর্ণনা: ইবন আব্বাস (রাঃ), আয়েশা (রাঃ), ইকরিমা, উবাইদ ইবন উমাইর, সাঈদ ইবন জুবাইর, কাতাদা ও অন্যরা। তাবারী বেশিরভাগই সনদসহ আনেন। কুরতুবী আর বাগাভী বেশিরভাগই আনেন সনদ ছাড়া। যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এগুলোর মান নির্ণয় করেনি। তাই এখানে এগুলো এসেছে প্রত্যেকের নিজের কথা হিসেবে, সূত্রে সনদ থাকলে সনদসহ। এগুলো নবী ﷺ-এর বাণী নয়, পাখিগুলোর চূড়ান্ত বিবরণও নয়।"
          },
          {
            "en": "No fetched tafsir attaches a sound hadith to this verse. Al-Qurtubi carries one report attributed to the Prophet ﷺ about these birds, through Juwaybir from ad-Dahhak from Ibn 'Abbas, without naming a collection or giving a grading; it could not be confirmed in a collection, so it is not quoted here. None of the fetched commentaries gives an occasion of revelation for this verse either. Its context is its place: the third of five verses, after a question about the companions of the elephant and their plot, and before the stones.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি। কুরতুবী এ পাখিদের নিয়ে নবী ﷺ-এর নামে একটি বর্ণনা আনেন, জুওয়াইবির থেকে দাহহাক হয়ে ইবন আব্বাস (রাঃ)-এর সূত্রে। কোন সংকলনে আছে বা মান কী, তা তিনি বলেন না। কোনো সংকলনে এটি নিশ্চিত করা যায়নি, তাই এখানে তা উদ্ধৃত করা হলো না। আয়াতটির কোনো শানে নুযূলও এ তাফসীরগুলো দেয় না। এর প্রেক্ষাপট এর অবস্থান: পাঁচ আয়াতের তৃতীয়টি, হাতিওয়ালা ও তাদের চক্রান্ত নিয়ে প্রশ্নের পরে, আর পাথরের কথার আগে।"
          },
          {
            "en": "Something else needs saying plainly. The verse describes what the text describes: the companions of the elephant, whose plot 105:2 says went astray, and the birds sent against them. It licenses nothing against any living person or community. It names no people of today, and it gives nobody the right to cast a present-day group as the army of the elephant or to cast themselves as the birds. Reading it that way would add to the verse exactly what the careful commentators above refused to add.",
            "bn": "আরেকটি কথা সোজাসুজি বলা দরকার। আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: হাতিওয়ালারা, যাদের চক্রান্ত ১০৫:২ অনুযায়ী বিপথে গিয়েছিল, আর তাদের বিরুদ্ধে পাঠানো পাখি। জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো জাতির নাম এতে নেই। আজকের কোনো দলকে হাতিওয়ালাদের বাহিনী বানানোর, কিংবা নিজেকে সেই পাখি ভাবার অধিকারও এ আয়াত কাউকে দেয় না। এভাবে পড়লে আয়াতে ঠিক সেটাই জুড়ে দেওয়া হয়, যা ওপরের সাবধানী তাফসীরকারেরা জুড়তে রাজি হননি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sender Before the Sent",
          "bn": "প্রেরিতের আগে প্রেরক"
        },
        "p": [
          {
            "en": "Set the sources side by side and a pattern shows. On the four words themselves they hardly differ: the Lord sent, against them, birds, in groups that were many, scattered and following one another. Where they part is everything the verse leaves unsaid: sea or sky, green or black or white, swallows or something never seen before, ibalah or ibbawl or no singular at all. An-Nahhas's remark that the glosses agree, and Ma'arif's that ababil is not the name of a bird, both send the reader back to what the verse actually says.",
            "bn": "সূত্রগুলো পাশাপাশি রাখলে একটা ধরন চোখে পড়ে। চারটি শব্দের অর্থে তাঁদের মধ্যে প্রায় কোনো ফারাক নেই: রব পাঠালেন, তাদের বিরুদ্ধে, পাখি, দলে দলে, সংখ্যায় অনেক, ছড়ানো, একের পর এক। ভিন্নতা সবটুকু সেখানে, যা আয়াত বলেনি: সমুদ্র না আকাশ, সবুজ না কালো না সাদা, সোয়ালো নাকি আগে কখনো না দেখা কিছু, ইবালাহ না ইব্বাওল, নাকি কোনো একবচনই নেই। নাহহাসের মন্তব্য যে সব অর্থ একই কথা বলে, আর মাআরিফের কথা যে আবাবীল কোনো পাখির নাম নয়, দুটোই পাঠককে ফিরিয়ে আনে আয়াতের নিজের কথায়।"
          },
          {
            "en": "That is a discipline worth keeping. The verse puts the weight on the Sender: before it, your Lord in 105:1; within it, the verb arsala, whose subject at-Tabari spells out as your Lord. A plot is named in 105:2, and what answers it is sent. A reader may wonder about colour and shape, but the reports disagree, and none of them is graded in the fetched texts. What can be held firmly is what the four words say. The rest is better carried as the commentators carried it, with names attached.",
            "bn": "এ সংযম ধরে রাখার মতো। আয়াত ভার রাখে প্রেরকের উপর। আগের আয়াত ১০৫:১-এ আছে 'তোমার রব', আর এ আয়াতে ক্রিয়া আরসালা, যার কর্তাকে তাবারী স্পষ্ট করে বলেন 'তোমার রব'। ১০৫:২ আয়াতে একটি চক্রান্তের কথা আছে, আর তার জবাব আসে পাঠানো কিছুর মধ্য দিয়ে। পাঠকের মনে রং আর গড়ন নিয়ে কৌতূহল জাগতেই পারে। কিন্তু বর্ণনাগুলো একে অন্যের সঙ্গে মেলে না, আর দেখা তাফসীরগুলোতে কোনোটিরই মান নির্ণয় নেই। দৃঢ়ভাবে ধরা যায় শুধু চারটি শব্দের কথাটুকু। বাকিটা বহন করা ভালো তাফসীরকারেরা যেভাবে করেছেন সেভাবেই, প্রত্যেক কথার সঙ্গে বক্তার নাম জুড়ে।"
          }
        ]
      }
    ]
  }
});
