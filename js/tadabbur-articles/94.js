/**
 * Tadabbur long-form articles — surah 94.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "94:1": {
    "sections": [
      {
        "h": {
          "en": "A Question That Already Answers",
          "bn": "যে প্রশ্নে উত্তর আগেই দেওয়া"
        },
        "p": [
          {
            "en": "Alam nashrah laka sadrak: did We not expand for you your chest? So opens ash-Sharh, which al-Qurtubi calls Makkan by everyone's account. Ma'arif al-Qur'an notes that it keeps the style of ad-Duha before it: that surah asked, did He not find you; this asks, did We not expand. Neither question seeks information. Both address the Prophet ﷺ and point at something Allah has already done for him.",
            "bn": "আলাম নাশরাহ লাকা সাদরাক: আমি কি তোমার জন্য তোমার বক্ষ প্রশস্ত করে দিইনি? এভাবেই শুরু হয় সূরা আশ-শারহ, যাকে কুরতুবী সবার মতে মক্কী বলেন। মাআরিফুল কুরআন লক্ষ করে, এটি আগের সূরা আদ-দুহার ভঙ্গি বহাল রাখে: সে সূরা জিজ্ঞেস করেছিল, তিনি কি তোমাকে পাননি; এ সূরা জিজ্ঞেস করে, আমি কি প্রশস্ত করিনি। কোনো প্রশ্নই তথ্য জানতে চায় না। দুটিরই সম্বোধন নবী ﷺ-এর প্রতি, আর দুটিই ইশারা করে এমন কিছুর দিকে যা আল্লাহ আগেই তাঁর জন্য করে দিয়েছেন।"
          },
          {
            "en": "Al-Qurtubi makes the grammar plain. Alam nashrah means qad sharahna: We have indeed expanded. His proof is the next verse, wa-wada'na, a past tense joined to the first verse's meaning rather than its wording; otherwise it would read wa-nada'. A negative inside a question turns back into an affirmation, he says, as in 95:8, is Allah not the most just of judges, and in Jarir's praise of a caliph: are you not the best of riders? That is: you are.",
            "bn": "কুরতুবী ব্যাকরণটা পরিষ্কার করে দেন। আলাম নাশরাহ মানে কাদ শারাহনা: আমি অবশ্যই প্রশস্ত করেছি। তাঁর প্রমাণ পরের আয়াত, ওয়া ওয়াদা'না, যা অতীত কালের ক্রিয়া এবং প্রথম আয়াতের শব্দের সাথে নয়, অর্থের সাথে যুক্ত; নইলে বলা হতো ওয়া নাদা'। তিনি বলেন, প্রশ্নের ভেতরের না-বাচক কথা হ্যাঁ-বাচক নিশ্চয়তায় ফিরে আসে, যেমন ৯৫:৮ আয়াতে: আল্লাহ কি শ্রেষ্ঠ বিচারক নন? কিংবা এক খলিফার প্রশংসায় জারীরের পঙ্‌ক্তি: তোমরা কি সওয়ারিদের সেরা নও? অর্থাৎ, তোমরাই সেরা।"
          },
          {
            "en": "Why a question at all? At-Tabari answers at the start of his comment. Allah addresses His Prophet reminding him of His favours and kindness, urging him to give thanks for them, so that by thanking he would earn still more. The question opens a ledger of gifts, not a list of demands, and 94:2 to 94:4 continue the same ledger before the surah turns to its promise.",
            "bn": "প্রশ্নের ভঙ্গি কেন? তাবারী তাঁর ব্যাখ্যার শুরুতেই উত্তর দেন। আল্লাহ তাঁর নবীকে সম্বোধন করছেন নিজের নিয়ামত ও অনুগ্রহের কথা মনে করিয়ে দিতে, যাতে তিনি এগুলোর জন্য শুকরিয়া আদায়ে উদ্বুদ্ধ হন, আর শুকরিয়ার মাধ্যমে আরও বেশি পাওয়ার যোগ্য হন। তাই প্রশ্নটি দাবির তালিকা নয়, দানের হিসাবের খাতা খোলে। প্রতিশ্রুতির দিকে যাওয়ার আগে ৯৪:২ থেকে ৯৪:৪ পর্যন্ত আয়াত একই খাতা চালিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Room Made for Guidance",
          "bn": "হেদায়েতের জন্য জায়গা"
        },
        "p": [
          {
            "en": "Sharh as-sadr is literally the opening of the chest. Al-Qurtubi defines sharh as fath, opening: did We not open your chest to Islam. Through Abu Salih he reports Ibn Abbas: did We not soften your heart for you. From al-Hasan: it was filled with judgement and knowledge. Al-Baghawi gathers the verbs together: did We not open, widen and soften your heart with faith, prophethood, knowledge and wisdom.",
            "bn": "শারহুস সাদর শব্দগতভাবে বক্ষ খুলে দেওয়া। কুরতুবী শারহের সংজ্ঞা দেন ফাতহ, অর্থাৎ খোলা: আমি কি তোমার বক্ষ ইসলামের জন্য খুলে দিইনি? আবু সালিহের সূত্রে তিনি ইবন আব্বাসের কথা আনেন: আমি কি তোমার জন্য তোমার হৃদয় কোমল করে দিইনি? হাসান থেকে: তা প্রজ্ঞাপূর্ণ বিচারবোধ আর জ্ঞানে ভরে দেওয়া হয়েছে। বাগাভী ক্রিয়াগুলো একসাথে জড়ো করেন: আমি কি তোমার হৃদয় খুলে, প্রশস্ত করে, কোমল করে দিইনি, ঈমান, নবুওয়াত, জ্ঞান আর হিকমত দিয়ে?"
          },
          {
            "en": "At-Tabari names what the widening was for: guidance, faith in Allah and knowledge of the truth. Then he says what it did: We make your heart gentle for you and make it a vessel for wisdom. Ibn Kathir speaks of light and space: We illuminated it and made it roomy, broad and wide. Ma'arif al-Qur'an adds wisdom, divine light and calm, and room for the finest morals.",
            "bn": "তাবারী বলে দেন প্রশস্ত করা হয়েছিল কিসের জন্য: হেদায়েত, আল্লাহর প্রতি ঈমান আর সত্যকে চেনার জন্য। এরপর বলেন এর ফল কী: আমি তোমার জন্য তোমার হৃদয় নরম করে দিই, আর একে হিকমতের পাত্র বানাই। ইবন কাসীর আলো আর বিস্তারের ভাষায় বলেন: আমি একে আলোকিত করেছি, একে করেছি উদার, বিস্তৃত ও প্রশস্ত। মাআরিফুল কুরআন যোগ করে হিকমত, ঐশী আলো ও প্রশান্তি, আর উত্তম চরিত্রের জন্য জায়গা।"
          },
          {
            "en": "As-Sa'di and al-Muyassar describe the widening by what it made room for: the laws of the religion, calling people to Allah, and noble character; as-Sa'di adds turning to the Hereafter and ease in doing good. Then he describes the opposite, which makes the gift visible: a chest narrow and constricted, that scarcely yields to anything good and is scarcely ever found at ease.",
            "bn": "সা'দী ও মুয়াসসার এই প্রশস্ততাকে বর্ণনা করেন এটা কিসের জন্য জায়গা করে দিয়েছে তা দিয়ে: দ্বীনের বিধান, মানুষকে আল্লাহর দিকে ডাকা, আর মহৎ চরিত্র। সা'দী যোগ করেন আখিরাতের দিকে মুখ ফেরানো আর ভালো কাজ সহজ হয়ে যাওয়া। এরপর তিনি বিপরীতটা বর্ণনা করেন, যাতে দানটা চোখে পড়ে: এমন বক্ষ যা সংকীর্ণ ও রুদ্ধ, যা কোনো ভালোর কাছে সহজে নত হয় না, আর যাকে কখনো স্বচ্ছন্দ পাওয়া যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Wide Messenger, Wide Law",
          "bn": "প্রশস্ত রাসূল, প্রশস্ত শরীআত"
        },
        "p": [
          {
            "en": "The phrase has a family in the Qur'an. Ibn Kathir and Ma'arif al-Qur'an set beside it 6:125: whomever Allah wills to guide, He opens his chest to Islam. Al-Qurtubi points back to his comment on 39:22: is the person whose chest Allah has opened to Islam, so that he is upon a light from his Lord, like the person who is not? In both verses Allah does the opening, and the opened chest is guidance granted.",
            "bn": "কুরআনে এই বাক্যাংশের একটি পরিবার আছে। ইবন কাসীর ও মাআরিফুল কুরআন এর পাশে রাখে ৬:১২৫ আয়াত: আল্লাহ যাকে হেদায়েত দিতে চান, ইসলামের জন্য তার বক্ষ খুলে দেন। কুরতুবী ফিরিয়ে নিয়ে যান ৩৯:২২ আয়াতে তাঁর ব্যাখ্যার দিকে: আল্লাহ যার বক্ষ ইসলামের জন্য খুলে দিয়েছেন, ফলে সে তার রবের দেওয়া আলোর উপর আছে, সে কি তার মতো যে এমন নয়? দুই আয়াতেই খোলেন আল্লাহ, আর খুলে দেওয়া বক্ষ মানেই প্রদত্ত হেদায়েত।"
          },
          {
            "en": "Ibn Kathir then draws a line from the man to the message. Just as Allah widened his chest, He made his Law broad, tolerant and easy, with no hardship, crushing burden or narrowness in it. Ma'arif al-Qur'an notes a quieter effect of the same gift: because his chest was opened, his attention to people never disturbed his attention to and concentration on Allah. The width held both at once.",
            "bn": "এরপর ইবন কাসীর মানুষটি থেকে বার্তার দিকে একটি রেখা টানেন। আল্লাহ যেমন তাঁর বক্ষ প্রশস্ত করেছেন, তেমনি তাঁর শরীআতকেও করেছেন উদার, সহনশীল ও সহজ, যাতে কোনো সংকট, ভারী বোঝা বা সংকীর্ণতা নেই। মাআরিফুল কুরআন একই দানের আরেকটি নীরব ফলের কথা বলে: বক্ষ খুলে দেওয়া হয়েছিল বলে মানুষের প্রতি তাঁর মনোযোগ কখনো আল্লাহর প্রতি তাঁর মনোযোগ ও একাগ্রতায় বিঘ্ন ঘটায়নি। এই প্রশস্ততায় দুটোই একসাথে জায়গা পেত।"
          }
        ]
      },
      {
        "h": {
          "en": "Opened Beside the Ka'bah",
          "bn": "কা'বার পাশে খোলা বক্ষ"
        },
        "p": [
          {
            "en": "Beside the inner meaning stand reports of a physical opening of the Prophet's chest ﷺ, and Ibn Kathir notes that at-Tirmidhi placed one of them under this surah. In Jami' at-Tirmidhi 3346, Anas reports from Malik ibn Sa'sa'ah that the Prophet ﷺ said: \"While I was at the House, between sleeping and being awake, I heard someone saying: 'The one in the middle of the three.' I was brought a vessel of gold containing Zamzam water, so my chest was split, to here.\"",
            "bn": "অন্তরের অর্থের পাশাপাশি নবী ﷺ-এর বক্ষ শারীরিকভাবে খোলার বর্ণনাও আছে। ইবন কাসীর উল্লেখ করেন, তিরমিযী এর একটি বর্ণনা এই সূরার অধীনে এনেছেন। জামি' তিরমিযী ৩৩৪৬-এ আনাস, মালিক ইবন সা'সাআর সূত্রে বর্ণনা করেন যে নবী ﷺ বলেছেন: \"আমি কা'বাঘরের কাছে ঘুম ও জাগরণের মাঝামাঝি অবস্থায় ছিলাম। তখন শুনলাম কেউ একজন বলছে: 'তিনজনের মাঝের জন।' আমার কাছে সোনার একটি পাত্র আনা হলো, যাতে যমযমের পানি ছিল। তারপর আমার বক্ষ এখান পর্যন্ত চিরে খোলা হলো।\""
          },
          {
            "en": "The report continues. Qatadah said: \"I said to Anas: 'What does that mean?' He said: 'To the lowest part of his stomach.'\" The Prophet ﷺ went on: \"So my heart was removed, and washed with Zamzam water, then returned to its place. Then I was filled with faith and wisdom.\" At-Tirmidhi adds that there is a long story with the hadith, and grades it hasan sahih. In the Arabic, the verb for the opening is the verse's own: fa-sharaha sadri, so my chest was opened.",
            "bn": "বর্ণনাটি আরও এগোয়। কাতাদা বলেন: \"আমি আনাসকে জিজ্ঞেস করলাম: 'এর মানে কী?' তিনি বললেন: 'তাঁর পেটের নিচের অংশ পর্যন্ত।'\" নবী ﷺ বলে চললেন: \"এরপর আমার হৃদপিণ্ড বের করে যমযমের পানিতে ধোয়া হলো, তারপর আগের জায়গায় ফিরিয়ে দেওয়া হলো। এরপর আমাকে ঈমান ও হিকমতে পূর্ণ করে দেওয়া হলো।\" তিরমিযী যোগ করেন, এই হাদীসের সাথে একটি দীর্ঘ কাহিনি আছে, আর তিনি একে হাসান সহীহ বলেন। আরবিতে খোলার ক্রিয়াটি আয়াতেরই ক্রিয়া: ফাশারাহা সাদরী, অর্থাৎ আমার বক্ষ খোলা হলো।"
          },
          {
            "en": "Sahih Muslim 162 records an earlier opening, from Anas: Jibril came to the Messenger of Allah ﷺ while he was a boy playing with other children, opened his chest, took a clot from his heart, washed it in a golden basin with Zamzam water and restored it. Anas adds that he used to see the trace of the stitching on his chest. Sahih al-Bukhari 3207 carries Malik ibn Sa'sa'ah's report of the opening on the night of the Journey.",
            "bn": "সহীহ মুসলিম ১৬২-তে আনাস থেকে এর আগের একটি ঘটনা আছে: রাসূলুল্লাহ ﷺ যখন বালক বয়সে অন্য শিশুদের সাথে খেলছিলেন, জিবরীল এসে তাঁর বক্ষ খোলেন, হৃদপিণ্ড থেকে একটি জমাট রক্তপিণ্ড বের করেন, সোনার পাত্রে যমযমের পানি দিয়ে তা ধুয়ে যথাস্থানে বসিয়ে দেন। আনাস যোগ করেন, তিনি তাঁর বুকে সেলাইয়ের দাগ দেখতেন। সহীহ বুখারী ৩২০৭-এ আছে মালিক ইবন সা'সাআর বর্ণনা, ইসরার রাতে বক্ষ খোলার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Opening the Verse Means",
          "bn": "আয়াতে কোন খোলার কথা"
        },
        "p": [
          {
            "en": "Do the reports explain the verse? Ibn Kathir records a view that the verse means the opening on the night of the Journey, as in Malik ibn Sa'sa'ah's report. He accepts that the event happened and sees no conflict: what was done to his chest that night is part of the opening of his chest, and so is the inner opening that grew from it. Al-Qurtubi defines the word as opening to Islam, then cites the sound report beside it. Ma'arif al-Qur'an says some commentators take the verse to mean that miracle.",
            "bn": "বর্ণনাগুলো কি আয়াতের ব্যাখ্যা? ইবন কাসীর একটি মত উল্লেখ করেন যে আয়াতের অর্থ ইসরার রাতের সেই বক্ষ খোলা, যেমনটি মালিক ইবন সা'সাআর বর্ণনায় আছে। ঘটনাটি যে ঘটেছে তা তিনি মেনে নেন, আর কোনো বিরোধ দেখেন না: সে রাতে তাঁর বক্ষে যা করা হয়েছিল তা বক্ষ খোলারই অংশ, আর তা থেকে যে অন্তরের প্রশস্ততা জন্মেছে সেটাও। কুরতুবী শব্দটির সংজ্ঞা দেন ইসলামের জন্য খুলে দেওয়া, তারপর সহীহ বর্ণনাটি পাশে উল্লেখ করেন। মাআরিফুল কুরআন বলে, কিছু মুফাসসির আয়াতটিকে সেই মু'জিযা অর্থে নিয়েছেন।"
          },
          {
            "en": "At-Tabari, as-Sa'di, al-Baghawi and al-Muyassar explain the verse only as the inner widening and do not bring the physical reports into it. None of them denies the event; they differ on whether this verse names it. The careful reading keeps both: the physical opening as an event that sound reports describe, and the widening of heart for guidance and wisdom, which every one of these commentators places in the verse.",
            "bn": "তাবারী, সা'দী, বাগাভী ও মুয়াসসার আয়াতটিকে কেবল অন্তরের প্রশস্ততা হিসেবে ব্যাখ্যা করেন, শারীরিক বর্ণনাগুলো এখানে আনেন না। তাঁদের কেউই ঘটনাটি অস্বীকার করেন না; মতভেদ শুধু এ নিয়ে যে এই আয়াত সেটির কথা বলছে কি না। সতর্ক পাঠ দুটোকেই ধরে রাখে: সহীহ বর্ণনায় বর্ণিত একটি ঘটনা হিসেবে শারীরিক বক্ষ খোলা, আর হেদায়েত ও হিকমতের জন্য হৃদয়ের প্রশস্ততা, যা এখানে উল্লিখিত প্রত্যেক মুফাসসিরই আয়াতের অর্থে রাখেন।"
          },
          {
            "en": "Other reports in these commentaries are only mentioned here: Ibn Kathir's narration from Ubayy ibn Ka'b, through Abdullah son of Imam Ahmad, about an opening in the desert in childhood; al-Qurtubi's unsourced accounts of angels opening the chest; and his report through ad-Dahhak from Ibn Abbas on the sign of a widened chest. None is in a collection checked here or graded in these texts, so nothing is built on them.",
            "bn": "এসব তাফসীরের আরও কিছু বর্ণনা এখানে শুধু উল্লেখ করা হলো: ইমাম আহমাদের পুত্র আবদুল্লাহর সূত্রে উবাই ইবন কা'ব থেকে ইবন কাসীরের আনা বর্ণনা, যার বিষয় শৈশবে মরুভূমিতে বক্ষ খোলা; ফেরেশতাদের বক্ষ খোলা নিয়ে কুরতুবীর সূত্রবিহীন বিবরণ; আর দাহহাকের সূত্রে ইবন আব্বাস থেকে প্রশস্ত বক্ষের নিদর্শন নিয়ে তাঁর আনা বর্ণনা। এগুলোর কোনোটি এখানে যাচাই করা কোনো সংকলনে নেই, এসব তাফসীরে মানও নির্ধারিত হয়নি, তাই এগুলোর উপর কিছু দাঁড় করানো হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Load That Creaked",
          "bn": "যে বোঝায় পিঠ কঁকিয়ে উঠেছিল"
        },
        "p": [
          {
            "en": "The next favour: wa-wada'na 'anka wizrak, alladhi anqada zahrak, and We removed from you your burden, which had weighed upon your back. Al-Qurtubi gives wizr its root sense, a heavy load. Of anqada, Ibn Kathir says the inqad is a sound, and al-Qurtubi cites the linguists: a load is said to do this to a camel's back when you hear it creak under the weight.",
            "bn": "পরের অনুগ্রহ: ওয়া ওয়াদা'না আনকা উইযরাক, আল্লাযী আনকাদা যাহরাক, আর আমি তোমার উপর থেকে তোমার বোঝা নামিয়ে দিয়েছি, যা তোমার পিঠ ভারী করে রেখেছিল। কুরতুবী উইযরের মূল অর্থ দেন: ভারী বোঝা। আনকাদা সম্পর্কে ইবন কাসীর বলেন, ইনকাদ মানে একটি শব্দ। আর কুরতুবী ভাষাবিদদের কথা আনেন: উটের পিঠে বোঝা এত ভারী হলে, যখন ভারের চাপে তার কঁকানির শব্দ শোনা যায়, তখন এ কথা বলা হয়।"
          },
          {
            "en": "At-Tabari reaches for another camel: one back from a long journey, worn down and thin, is called niqd safar. Ibn Zayd, in at-Tabari, says the load wore him down as a heavy burden wears a fat camel thin. At-Tabari and al-Qurtubi relay a reading attributed to Ibn Mas'ud, wa-halalna 'anka wiqrak, and We untied your load. Al-Muyassar ties this favour to the first: by widening your chest, We lifted your load from you.",
            "bn": "তাবারী আরেকটি উটের ছবি আনেন: দীর্ঘ সফর থেকে ফেরা যে উট ক্লান্ত ও শীর্ণ, তাকে বলা হয় নিকদু সাফার। তাবারীর বর্ণনায় ইবন যায়দ বলেন, এ বোঝা তাঁকে ক্লান্ত করেছিল, যেমন ভারী বোঝা মোটাতাজা উটকেও শুকিয়ে ফেলে। তাবারী ও কুরতুবী ইবন মাসউদের নামে প্রচলিত একটি কিরাআত উল্লেখ করেন: ওয়া হালালনা আনকা উইকরাক, আর আমি তোমার বোঝার বাঁধন খুলে দিয়েছি। মুয়াসসার এই অনুগ্রহকে প্রথমটির সাথে জুড়ে দেয়: তোমার বক্ষ প্রশস্ত করার মাধ্যমে আমি তোমার বোঝা নামিয়ে দিয়েছি।"
          },
          {
            "en": "What was the load? The commentators did not agree. Mujahid, in at-Tabari, answers with the word dhanb, a fault, and Ibn Kathir and as-Sa'di read it in the light of 48:2: that Allah may forgive you what preceded of your dhanb and what followed. At-Tabari pairs that forgiveness with lifting the weight of the days of ignorance he had lived among. Ibn Zayd places it before prophethood, and al-Qurtubi, reporting that view, adds that he never worshipped an idol.",
            "bn": "বোঝাটা কী ছিল? এ নিয়ে মুফাসসিরগণ একমত নন। তাবারীর বর্ণনায় মুজাহিদ একটি শব্দে উত্তর দেন: যানব, অর্থাৎ ত্রুটি। ইবন কাসীর ও সা'দী একে পড়েন ৪৮:২ আয়াতের আলোয়: যাতে আল্লাহ তোমার আগের ও পরের যানব ক্ষমা করেন। তাবারী এই ক্ষমার সাথে জুড়ে দেন জাহিলিয়্যাতের যে দিনগুলোর মাঝে তিনি ছিলেন, সেগুলোর ভার নামিয়ে দেওয়ার কথা। ইবন যায়দ একে নবুওয়াতের আগের সময়ের সাথে যুক্ত করেন, আর কুরতুবী সে মত উল্লেখ করে যোগ করেন যে তিনি কখনো কোনো মূর্তির উপাসনা করেননি।"
          },
          {
            "en": "Abd al-Aziz ibn Yahya and Abu Ubaydah, in al-Qurtubi and al-Baghawi, read it as the burdens of prophethood and of carrying it out, lightened so they would not weigh on him. Both commentators also report that it meant the faults of his community, laid on him because his heart was busy with them. A last view in al-Qurtubi: We guarded you from bearing such a load, and kept you clean through the forty years before revelation.",
            "bn": "কুরতুবী ও বাগাভীর বর্ণনায় আবদুল আযীয ইবন ইয়াহইয়া ও আবু উবাইদা একে পড়েন নবুওয়াতের ভার ও তা পালনের দায়িত্ব হিসেবে, যা হালকা করা হয়েছে যাতে তা তাঁর উপর ভারী না হয়। এই দুই মুফাসসির আরেকটি মতও আনেন: এটি তাঁর উম্মাতের ত্রুটি, যা তাঁর সাথে যুক্ত করা হয়েছে কারণ তাঁর হৃদয় তাদের নিয়েই ব্যস্ত থাকত। কুরতুবীতে শেষ একটি মত: আমি তোমাকে এমন বোঝা বহন করা থেকেই রক্ষা করেছি, আর ওহী নাযিলের আগের চল্লিশ বছর তোমাকে পবিত্র রেখেছি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Raised Beside His",
          "bn": "তাঁর নামের পাশে উঁচু নাম"
        },
        "p": [
          {
            "en": "The fourth favour is wa-rafa'na laka dhikrak: and We raised high for you your mention. At-Tabari explains that Allah is not mentioned without the Prophet ﷺ being mentioned with Him, in la ilaha illa Allah, Muhammad rasul Allah, and relays Mujahid tying it to the testimony of faith. Qatadah, in at-Tabari, Ibn Kathir and al-Baghawi, says Allah raised his mention in this world and the next: every preacher, every worshipper reciting the tashahhud and every person at prayer calls out with it.",
            "bn": "চতুর্থ অনুগ্রহ: ওয়া রাফা'না লাকা যিকরাক, আর আমি তোমার জন্য তোমার স্মরণকে উঁচু করেছি। তাবারী ব্যাখ্যা করেন, আল্লাহর নাম যেখানে নেওয়া হয় সেখানে তাঁর সাথে নবী ﷺ-এর নামও নেওয়া হয়, এই বাক্যে: লা ইলাহা ইল্লাল্লাহ, মুহাম্মাদুর রাসূলুল্লাহ। তিনি মুজাহিদের কথা আনেন, যিনি একে কালিমা শাহাদাতের সাথে যুক্ত করেন। তাবারী, ইবন কাসীর ও বাগাভীর বর্ণনায় কাতাদা বলেন, আল্লাহ দুনিয়া ও আখিরাতে তাঁর স্মরণ উঁচু করেছেন: প্রত্যেক খতীব, তাশাহহুদ পাঠকারী প্রত্যেক মুসল্লি আর নামাযে দাঁড়ানো প্রত্যেক মানুষ এই সাক্ষ্য উচ্চারণ করে।"
          },
          {
            "en": "Mujahid, in al-Qurtubi and al-Baghawi, names the call to prayer, and both quote Hassan ibn Thabit: God joined the Prophet's name to His own when the caller says ashhadu in the five prayers. Al-Qurtubi relays from Ibn Abbas, through ad-Dahhak, a longer list, from the Friday pulpit to Arafah and the marriage sermon. He also reports views adding the books of earlier prophets, told to give news of him, and the praised station in the Hereafter. As-Sa'di turns to the heart: his community holds for him a love and reverence given to nobody else after Allah.",
            "bn": "কুরতুবী ও বাগাভীর বর্ণনায় মুজাহিদ আযানের কথা বলেন, আর দুজনেই হাসসান ইবন সাবিতের কবিতা উদ্ধৃত করেন: পাঁচ ওয়াক্তে মুআযযিন যখন 'আশহাদু' বলে, তখন আল্লাহ নবীর নাম নিজের নামের সাথে জুড়ে দিয়েছেন। কুরতুবী দাহহাকের সূত্রে ইবন আব্বাস থেকে আরও দীর্ঘ একটি তালিকা আনেন, জুমুআর মিম্বার থেকে আরাফা আর বিয়ের খুতবা পর্যন্ত। তিনি এমন মতও উল্লেখ করেন, যাতে যুক্ত হয় পূর্ববর্তী নবীদের কিতাবের কথা, যেখানে তাঁদের তাঁর সুসংবাদ দিতে বলা হয়েছিল, আর আখিরাতে মাকামে মাহমূদের কথা। সা'দী হৃদয়ের দিকে ফেরেন: তাঁর উম্মাতের অন্তরে তাঁর জন্য এমন ভালোবাসা ও শ্রদ্ধা আছে, যা আল্লাহর পরে আর কারও জন্য নেই।"
          },
          {
            "en": "At-Tabari, Ibn Kathir and al-Baghawi each relay a report through Darraj from Abu al-Haytham from Abu Sa'id al-Khudri, raised to the Prophet ﷺ, about Jibril and the raising of his mention; Ibn Kathir adds that Ibn Abi Hatim and Abu Ya'la carry it. None of them grades it and it is not in a collection checked here, so it is only mentioned. No commentary fetched here attaches a sound hadith to 94:4.",
            "bn": "তাবারী, ইবন কাসীর ও বাগাভী প্রত্যেকে দাররাজ থেকে, আবুল হাইসামের সূত্রে, আবু সাঈদ খুদরী থেকে নবী ﷺ পর্যন্ত পৌঁছানো একটি বর্ণনা আনেন, যার বিষয় জিবরীল ও তাঁর স্মরণ উঁচু করা। ইবন কাসীর যোগ করেন, ইবন আবী হাতিম ও আবু ইয়া'লাও এটি বর্ণনা করেছেন। তাঁদের কেউ এর মান নির্ধারণ করেননি, আর এখানে যাচাই করা কোনো সংকলনে এটি নেই, তাই শুধু উল্লেখ করা হলো। এখানে দেখা কোনো তাফসীর ৯৪:৪ আয়াতের সাথে কোনো সহীহ হাদীস যুক্ত করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for a Wider Chest",
          "bn": "প্রশস্ত বক্ষের প্রার্থনা"
        },
        "p": [
          {
            "en": "These favours belong to the Prophet ﷺ; no reader shares in his prophethood or in a name joined to the testimony of faith. Yet the language of 94:1 is not closed to us. In 6:125 an opened chest marks anyone Allah wills to guide, and in 20:25 Musa (AS), sent to Pharaoh, asks for it: rabbi-shrah li sadri, my Lord, expand for me my chest. What Musa (AS) asked for, this verse names as already given to the last Prophet ﷺ. And every verb in 94:1 to 94:4 has Allah as its subject.",
            "bn": "এই অনুগ্রহগুলো নবী ﷺ-এর; তাঁর নবুওয়াতে, কিংবা কালিমা শাহাদাতে যুক্ত তাঁর নামে কোনো পাঠকের অংশ নেই। তবু ৯৪:১ আয়াতের ভাষা আমাদের জন্য বন্ধ নয়। ৬:১২৫ আয়াতে খুলে দেওয়া বক্ষ আল্লাহ যাকে হেদায়েত দিতে চান তারই নিদর্শন, আর ২০:২৫ আয়াতে ফেরআউনের কাছে প্রেরিত মূসা (আঃ) এটাই চেয়েছিলেন: রাব্বিশরাহ লী সাদরী, হে আমার রব, আমার বক্ষ প্রশস্ত করে দিন। মূসা (আঃ) যা চেয়ে নিয়েছিলেন, এই আয়াত তা শেষ নবী ﷺ-কে আগেই দেওয়া হয়েছে বলে জানায়। আর ৯৪:১ থেকে ৯৪:৪ পর্যন্ত প্রতিটি ক্রিয়ার কর্তা আল্লাহ।"
          },
          {
            "en": "So a narrow chest is not widened by willpower alone; it is asked for. As-Sa'di's description doubles as a test: is my chest open to the laws of the religion, to good character, to doing good without strain, or does it scarcely yield to anything good? At-Tabari's reading supplies the response the question seeks: gratitude, which earns more. The surah counts favours before it speaks of hardship. A reader in a tight place can keep that order: name what has been given, ask for room for what comes next, then read on into 94:5.",
            "bn": "তাই সংকীর্ণ বক্ষ শুধু মনের জোরে প্রশস্ত হয় না; তা চেয়ে নিতে হয়। সা'দীর বর্ণনা একই সাথে একটি পরীক্ষাও: আমার বক্ষ কি দ্বীনের বিধান, উত্তম চরিত্র আর অনায়াসে ভালো কাজের জন্য খোলা, নাকি তা কোনো ভালোর কাছে সহজে নত হয় না? তাবারীর পাঠ বলে দেয় প্রশ্নটি কোন সাড়া চায়: শুকরিয়া, যা আরও বেশি পাওয়ার যোগ্য করে। সূরাটি কষ্টের কথা বলার আগে অনুগ্রহগুলো গুনে নেয়। সংকটে থাকা পাঠকও এই ক্রম মেনে চলতে পারেন: যা পেয়েছেন তার নাম বলুন, সামনে যা আসছে তার জন্য জায়গা চেয়ে নিন, তারপর ৯৪:৫ আয়াতের দিকে এগিয়ে যান।"
          }
        ]
      }
    ]
  },
  "94:5-6": {
    "sections": [
      {
        "h": {
          "en": "Four Favours, Then a Promise",
          "bn": "চারটি অনুগ্রহ, তারপর প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Fa-inna ma'a al-'usri yusra, inna ma'a al-'usri yusra: so indeed, with hardship is ease; indeed, with hardship is ease. The two verses stand at the centre of ash-Sharh, a short surah revealed in Makkah and addressed to the Prophet ﷺ. Before them come four lines of favour already given. Ibn Kathir's abridged commentary explains the opened breast of 94:1 as a heart illuminated and made spacious, and sets beside it 6:125, where Allah opens the breast of whoever He wills to guide. On 94:3 he reports several of the early generation saying its weight lay heavy upon him.",
            "bn": "ফাইন্না মাআল উসরি ইউসরা, ইন্না মাআল উসরি ইউসরা: নিশ্চয়ই কষ্টের সাথে আছে স্বস্তি; নিশ্চয়ই কষ্টের সাথে আছে স্বস্তি। মক্কায় নাযিল হওয়া ছোট্ট সূরা আশ-শারহের ঠিক মাঝখানে এ দুটি আয়াত, আর পুরো সূরার সম্বোধন নবী ﷺ-এর প্রতি। এর আগে আছে চারটি আয়াত, যেখানে আগেই দেওয়া অনুগ্রহের কথা গোনা হয়েছে। ইবন কাসীরের সংক্ষিপ্ত তাফসীর বলে, ৯৪:১ আয়াতে বক্ষ খুলে দেওয়ার মানে হৃদয়কে আলোকিত ও প্রশস্ত করা। পাশে তিনি রাখেন ৬:১২৫, যেখানে আল্লাহ যাকে হিদায়াত দিতে চান তার বক্ষ খুলে দেন। ৯৪:৩ আয়াত প্রসঙ্গে তিনি পূর্বসূরিদের একাধিকজনের কথা আনেন: সেই বোঝার ভার তাঁর উপর ভারী হয়ে চেপে ছিল।"
          },
          {
            "en": "On 94:4 he cites Mujahid: Allah is not mentioned without the Prophet ﷺ being mentioned with Him, in the testimony of faith; Qatadah adds the sermon and the prayer. Then the fa of 94:5, so, ties the promise to what came before. Al-Muyassar draws the link as a charge: let the harm of your enemies not turn you from spreading the message, for with constriction comes relief. Al-Baghawi and al-Qurtubi report al-Jurjani's reading that Allah counted His favours upon him in this surah to console him, and then gave the promise.",
            "bn": "৯৪:৪ আয়াতে ইবন কাসীর মুজাহিদের কথা আনেন: কালিমা শাহাদাতে আল্লাহর নাম যেখানেই আসে, তাঁর সাথে নবী ﷺ-এর নামও আসে। কাতাদা এর সাথে যোগ করেন খুতবা আর নামাযের কথা। এরপর ৯৪:৫ আয়াতের শুরুর 'ফা', অর্থাৎ 'সুতরাং', প্রতিশ্রুতিটিকে আগের কথাগুলোর সাথে বেঁধে দেয়। মুয়াসসার এই বাঁধনকে একটি নির্দেশ হিসেবে পড়ে: শত্রুদের দেওয়া কষ্ট যেন তাঁকে রিসালাত পৌঁছানো থেকে ফিরিয়ে না রাখে, কেননা সংকীর্ণতার সাথেই আছে মুক্তি। বাগাভী ও কুরতুবী জুরজানীর ব্যাখ্যা উদ্ধৃত করেন: তাঁকে সান্ত্বনা দিতে আল্লাহ এ সূরায় তাঁর প্রতি নিজের অনুগ্রহগুলো গুনিয়েছেন, তারপর দিয়েছেন এই প্রতিশ্রুতি।"
          }
        ]
      },
      {
        "h": {
          "en": "Beside It or Close Behind",
          "bn": "পাশে, নাকি ঠিক পেছনে"
        },
        "p": [
          {
            "en": "The preposition is ma'a, with. As-Sa'di reads it at full strength: a great glad tiding that whenever hardship and difficulty are found, ease is joined to it and keeps it company, so that if hardship went into a lizard's burrow, ease would go in after it and bring it out. He cites as a parallel 65:7, where Allah says He will bring about ease after hardship, with the word ba'da, after. Ibn Kathir puts the verse in a single line: Allah informs us that with hardship there is ease.",
            "bn": "অব্যয়টি 'মাআ', অর্থাৎ সাথে। সা'দী শব্দটিকে পুরো জোর দিয়ে পড়েন। তাঁর মতে এটি এক বিরাট সুসংবাদ: যখনই কষ্ট ও কাঠিন্য দেখা দেয়, স্বস্তি তার সঙ্গে জুড়ে থাকে, তার সঙ্গী হয়ে থাকে। কষ্ট যদি গুইসাপের গর্তেও ঢুকে পড়ে, স্বস্তিও পিছু পিছু ঢুকে তাকে বের করে আনবে। সমার্থক আয়াত হিসেবে তিনি আনেন ৬৫:৭, যেখানে আল্লাহ বলেন, তিনি কষ্টের পরে স্বস্তি দেবেন। সেখানে শব্দটি 'বা'দা', অর্থাৎ পরে। ইবন কাসীর পুরো আয়াতটি এক বাক্যে বলে দেন: আল্লাহ জানাচ্ছেন, কষ্টের সাথেই স্বস্তি থাকে।"
          },
          {
            "en": "Not every early gloss presses the word so hard. At-Tabari records Mujahid on 94:6 saying simply that ease follows hardship. Ma'arif al-Qur'an speaks of the many kinds of ease assured in the wake of the one hardship, and of relief after every instance of it. 'Umar's letter, quoted below, says Allah makes relief after whatever hardship comes down. So the fetched commentaries carry two pictures, ease beside the hardship and ease close upon its heels, and none of them sets one against the other. The verse's own word remains with.",
            "bn": "প্রাচীন সব ব্যাখ্যা অবশ্য শব্দটির উপর এতটা জোর দেয় না। তাবারী ৯৪:৬ আয়াতে মুজাহিদের সংক্ষিপ্ত কথা উদ্ধৃত করেন: স্বস্তি কষ্টের পিছু পিছু আসে। মাআরিফুল কুরআন বলে, একটি কষ্টের পরে পরেই নানা ধরনের স্বস্তির নিশ্চয়তা আছে, আর প্রতিটি কষ্টের পরেই আসে মুক্তি। সামনে উমর (রাঃ)-এর যে চিঠির কথা আসছে, তাতেও আছে: যে কষ্টই নামুক, আল্লাহ তার পরে মুক্তি দেন। তাহলে সংগৃহীত তাফসীরগুলোতে দুটি ছবিই আছে। এক ছবিতে স্বস্তি কষ্টের পাশে, অন্যটিতে ঠিক তার পেছনে। কেউই একটিকে অন্যটির বিপরীতে দাঁড় করান না। তবে আয়াতের নিজের শব্দটি 'সাথে'।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Say It Twice",
          "bn": "একই কথা দুবার কেন"
        },
        "p": [
          {
            "en": "Then the sentence comes again, and the commentators divide over why. Al-Qurtubi reports a group taking the repetition as emphasis, the way people say throw, throw, or hurry, hurry, and as in 102:3 and 102:4: no, you will come to know; then no, you will come to know. He names al-Farra' for this reading, calling it fullness and intensification. Ibn Kathir reads it the same way: Allah gave the news, then confirmed it. Al-Baghawi says it was repeated to confirm the promise and to magnify hope.",
            "bn": "এরপর বাক্যটি আবার আসে, আর কেন আসে তা নিয়ে তাফসীরকারদের মত দুই ভাগ। কুরতুবী একদলের কথা বলেন, যাঁরা পুনরাবৃত্তিকে জোর দেওয়া হিসেবে দেখেন। যেমন লোকে বলে, ছোড়ো ছোড়ো, তাড়াতাড়ি তাড়াতাড়ি। যেমন ১০২:৩ ও ১০২:৪ আয়াতে: কখনো নয়, শীঘ্রই তোমরা জানবে; আবার, কখনো নয়, শীঘ্রই তোমরা জানবে। এ মতের জন্য তিনি ফাররার নাম নেন, যিনি একে বলেন বিস্তার ও অতিশয়তা। ইবন কাসীরও তা-ই পড়েন: আল্লাহ খবরটি দিলেন, তারপর তা পাকা করলেন। বাগাভী বলেন, প্রতিশ্রুতিকে দৃঢ় করতে আর আশাকে বড় করতেই কথাটি দুবার এসেছে।"
          },
          {
            "en": "Another group, al-Qurtubi continues, builds on a habit of Arabic: a definite noun repeated is the same thing, and an indefinite noun repeated is another. He names Tha'lab for it, adding that the two are meant to strengthen hope and rouse patience. Al-'usr carries the article both times; yusr carries none. So the hardship is one and the eases are two. Al-Baghawi gives this as the explanation of the commentators, with a coin to show it: when you earn a dirham, you spend a dirham, and the second is another; earn a dirham, then spend the dirham, and it is the same one.",
            "bn": "কুরতুবী আরেক দলের কথা বলেন, যাঁদের ভিত্তি আরবি ভাষার একটি রীতি। নির্দিষ্ট বিশেষ্য দ্বিতীয়বার এলে সেটি একই জিনিস। অনির্দিষ্ট বিশেষ্য দ্বিতীয়বার এলে সেটি অন্য জিনিস। এ মতের জন্য তিনি সা'লাবের নাম নেন এবং বলেন, স্বস্তি দুটি হওয়ায় আশা আরও মজবুত হয়, ধৈর্যেও প্রেরণা জাগে। 'আল-উসর' দুবারই নির্দিষ্টবাচক 'আল' নিয়ে এসেছে, 'ইউসর' দুবারই এসেছে তা ছাড়া। তাই কষ্ট একটি, স্বস্তি দুটি। বাগাভী একে তাফসীরকারদের ব্যাখ্যা হিসেবে আনেন, আর বোঝান একটি মুদ্রা দিয়ে। কেউ যদি বলে, একটি দিরহাম কামালে একটি দিরহাম খরচ করি, তবে দ্বিতীয়টি আলাদা। আর যদি বলে, একটি দিরহাম কামালে সেই দিরহামটি খরচ করো, তবে দুটি একই।"
          }
        ]
      },
      {
        "h": {
          "en": "One Hardship, Two Eases",
          "bn": "এক কষ্ট, দুই স্বস্তি"
        },
        "p": [
          {
            "en": "The inference travels with a saying: lan yaghliba 'usrun yusrayn, one hardship will never overcome two eases. At-Tabari gives it from al-Hasan as the words of the Prophet ﷺ when the verse came down: rejoice, ease has come to you; one hardship will never overcome two eases. In another of his chains, through Ma'mar, al-Hasan says the Prophet ﷺ came out one day glad and laughing, repeating it and reciting the two verses. Ibn Kathir quotes these and says plainly that they come from al-Hasan in mursal form, without the Companion who heard it.",
            "bn": "এই সিদ্ধান্তের সাথে একটি বাণী জড়িয়ে আছে: লান ইয়াগলিবা উসরুন ইউসরাইন, একটি কষ্ট কখনো দুটি স্বস্তিকে হারাতে পারবে না। তাবারী হাসান বসরী থেকে এটি নবী ﷺ-এর কথা হিসেবে আনেন, আয়াতটি নাযিল হলে তিনি বলেছিলেন: সুসংবাদ নাও, তোমাদের কাছে স্বস্তি এসে গেছে; একটি কষ্ট কখনো দুটি স্বস্তিকে হারাতে পারবে না। মা'মারের মাধ্যমে আসা তাঁর আরেকটি সনদে হাসান বলেন, নবী ﷺ একদিন খুশিমনে হাসতে হাসতে বেরিয়ে এলেন, কথাটি বারবার বলছিলেন আর আয়াত দুটি তিলাওয়াত করছিলেন। ইবন কাসীর এগুলো উদ্ধৃত করে স্পষ্ট বলে দেন, এগুলো হাসান থেকে মুরসাল আকারে এসেছে, অর্থাৎ যে সাহাবী শুনেছিলেন তাঁর নাম সনদে নেই।"
          },
          {
            "en": "Qatadah's version, in both at-Tabari and Ibn Kathir, opens with the words it was mentioned to us that the Messenger of Allah ﷺ gave his Companions this verse as good news. Ibn Kathir also reports al-Hasan saying: they used to say, one hardship does not overcome two eases. These are reports, and their chains are what the commentators show them to be; this article does not raise them above that. Ma'arif al-Qur'an retells the al-Hasan narration and adds that two eases does not mean twice as much ease. It means manifold ease.",
            "bn": "কাতাদার বর্ণনা তাবারী ও ইবন কাসীর দুজনের কাছেই আছে, আর তা শুরু হয় এভাবে: আমাদের কাছে উল্লেখ করা হয়েছে যে রাসূলুল্লাহ ﷺ এ আয়াত দিয়ে সাহাবীদের সুসংবাদ দিয়েছিলেন। ইবন কাসীর হাসানের আরেকটি কথাও আনেন: তাঁরা বলতেন, একটি কষ্ট দুটি স্বস্তিকে হারাতে পারে না। এগুলো বর্ণনা, আর তাফসীরকারেরা এদের সনদ যেমন দেখিয়েছেন, এগুলোর মান ততটুকুই। এ লেখা তার চেয়ে বেশি দাবি করে না। মাআরিফুল কুরআন হাসানের বর্ণনাটি আবার বলে এবং যোগ করে, দুই স্বস্তি মানে দ্বিগুণ স্বস্তি নয়, বরং বহুগুণ স্বস্তি।"
          },
          {
            "en": "The same words come down as sayings of Companions. Al-Qurtubi reports, with no chain, Ibn 'Abbas giving them as Allah's speech: I created a single hardship and I created two eases, and a hardship will never overcome two eases. He also reports that Abu 'Ubaydah ibn al-Jarrah wrote to 'Umar ibn al-Khattab about the gathering armies of the Romans and his fear of them. 'Umar wrote back that whatever hardship comes down on a believing servant, Allah makes relief after it, that a hardship will never overcome two eases, and he quoted 3:200: be patient, outlast in patience, stand firm, and fear Allah.",
            "bn": "একই কথা সাহাবীদের বাণী হিসেবেও এসেছে। কুরতুবী কোনো সনদ ছাড়া ইবন আব্বাস (রাঃ)-এর কথা আনেন, যেখানে তিনি এটিকে আল্লাহর বাণী হিসেবে বলেন: আমি একটিমাত্র কষ্ট সৃষ্টি করেছি আর দুটি স্বস্তি সৃষ্টি করেছি, কষ্ট কখনো দুই স্বস্তিকে হারাতে পারবে না। কুরতুবী আরও বর্ণনা করেন, আবু উবাইদা ইবনুল জাররাহ (রাঃ) রোমানদের জমায়েত হওয়া বাহিনী আর তাদের নিয়ে নিজের আশঙ্কার কথা জানিয়ে উমর ইবনুল খাত্তাব (রাঃ)-কে চিঠি লেখেন। জবাবে উমর (রাঃ) লেখেন, মুমিন বান্দার উপর যে কষ্টই নামুক, আল্লাহ তার পরে মুক্তি দেন, আর কষ্ট কখনো দুই স্বস্তিকে হারাতে পারবে না। সাথে তিনি উদ্ধৃত করেন ৩:২০০: ধৈর্য ধরো, ধৈর্যে অটল থাকো, পাহারায় থাকো আর আল্লাহকে ভয় করো।"
          }
        ]
      },
      {
        "h": {
          "en": "If Hardship Entered a Hole",
          "bn": "কষ্ট যদি গর্তে ঢোকে"
        },
        "p": [
          {
            "en": "Ibn Mas'ud's saying carries the most memorable picture. At-Tabari gives it through Mu'awiyah ibn Qurrah, from a man left unnamed, from 'Abd Allah ibn Mas'ud: if hardship entered a hole, ease would come until it entered upon it, because Allah says, so indeed, with hardship is ease. Al-Qurtubi reports it with an oath, by Him in whose hand is my soul, and al-Baghawi without the oath; both have ease seeking hardship out until it enters, and both close the saying with the words: a hardship will never overcome two eases.",
            "bn": "ইবন মাসউদ (রাঃ)-এর কথায় ছবিটা সবচেয়ে মনে রাখার মতো। তাবারী এটি আনেন মুআবিয়া ইবন কুররা থেকে, তিনি এক অনামা ব্যক্তি থেকে, তিনি আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকে: কষ্ট যদি কোনো গর্তে ঢুকে পড়ে, স্বস্তি এসে তার কাছে ঢুকে পড়বে, কেননা আল্লাহ বলেন, নিশ্চয়ই কষ্টের সাথে আছে স্বস্তি। কুরতুবী কথাটি এনেছেন শপথসহ: সেই সত্তার কসম যাঁর হাতে আমার প্রাণ। বাগাভী এনেছেন শপথ ছাড়া। দুজনের বর্ণনাতেই স্বস্তি কষ্টকে খুঁজে খুঁজে তার কাছে ঢুকে পড়ে, আর দুজনেই কথাটি শেষ করেন এভাবে: কষ্ট কখনো দুই স্বস্তিকে হারাতে পারবে না।"
          },
          {
            "en": "Ibn Kathir also records the image as the Prophet's own words ﷺ, from Anas, with the verses said to have been revealed after it, through Ibn Abi Hatim and al-Bazzar. He weighs it himself. Al-Bazzar knew it from Anas only through 'A'idh ibn Shurayh, of whom Abu Hatim ar-Razi said there is weakness in his hadith; Shu'bah, Ibn Kathir adds, narrated it as Ibn Mas'ud's own saying. This article therefore gives no occasion of revelation for these verses, and it keeps the hole as a Companion's word.",
            "bn": "ইবন কাসীর ছবিটি আনাস (রাঃ) থেকে নবী ﷺ-এর নিজের কথা হিসেবেও উল্লেখ করেন, ইবন আবী হাতিম ও বাযযারের সূত্রে, সাথে এ দাবিও যে এরপরই আয়াত দুটি নাযিল হয়। তবে তিনি নিজেই বর্ণনাটি যাচাই করেন। বাযযার আনাস (রাঃ) থেকে এটি কেবল আইয ইবন শুরাইহের মাধ্যমে জানতেন, আর আবু হাতিম রাযী তাঁর সম্পর্কে বলেছেন, তাঁর হাদীসে দুর্বলতা আছে। ইবন কাসীর আরও জানান, শু'বা এটি বর্ণনা করেছেন ইবন মাসউদ (রাঃ)-এর নিজের কথা হিসেবে। তাই এ লেখা এ আয়াত দুটির কোনো শানে নুযূল দিচ্ছে না, আর গর্তের ছবিটিকে রাখছে একজন সাহাবীর কথা হিসেবেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Horseman and the Sword",
          "bn": "অশ্বারোহী আর তরবারি"
        },
        "p": [
          {
            "en": "Not everyone accepted the rule. Al-Baghawi reports Abu 'Ali al-Hasan ibn Yahya al-Jurjani, author of an-Nazm, saying that people had talked about the saying and produced nothing but the definite and indefinite argument, which he calls a flawed argument. If a man says, with the horseman is a sword, with the horseman is a sword, that does not make the horseman single and the swords two. Al-Qurtubi reports the same objection from a group, al-Jurjani among them.",
            "bn": "সবাই এই নিয়ম মেনে নেননি। বাগাভী 'আন-নাযম' গ্রন্থের লেখক আবু আলী হাসান ইবন ইয়াহইয়া জুরজানীর কথা আনেন। তিনি বলেন, লোকে এ বাণী নিয়ে অনেক কথা বলেছে, কিন্তু নির্দিষ্ট আর অনির্দিষ্ট বিশেষ্যের যুক্তি ছাড়া কিছুই দাঁড় করাতে পারেনি। তাঁর মতে এ যুক্তি ত্রুটিপূর্ণ। কেউ যদি বলে, অশ্বারোহীর সাথে আছে তরবারি, অশ্বারোহীর সাথে আছে তরবারি, তাতে এটা প্রমাণ হয় না যে অশ্বারোহী একজন আর তরবারি দুটি। কুরতুবীও একই আপত্তি একদল আলিমের নামে বর্ণনা করেন, যাঁদের মধ্যে জুরজানীও আছেন।"
          },
          {
            "en": "Al-Jurjani then explains the saying another way. The Prophet ﷺ was sent with little means, and Quraysh taunted him for it, offering to gather wealth for him until he was among the richest in Makkah. He grieved, thinking his people denied him because of his poverty. So Allah counted His favours and promised him wealth: the first verse means, let what they say not grieve you, for with hardship is ease in this world, soon. Allah fulfilled it; al-Baghawi says He opened the Arab towns to him, al-Qurtubi names the Hijaz and Yemen, until he would give away hundreds of camels.",
            "bn": "এরপর জুরজানী বাণীটির অন্য ব্যাখ্যা দেন। নবী ﷺ প্রেরিত হয়েছিলেন অল্প সম্বল নিয়ে, আর কুরাইশ এ নিয়ে তাঁকে খোঁটা দিত। তারা এমনও বলেছিল, তাঁর জন্য সম্পদ জোগাড় করে দেবে, যাতে তিনি মক্কার সবচেয়ে ধনীদের একজন হন। এতে তিনি দুঃখ পান। তাঁর মনে হয়েছিল, দারিদ্র্যের কারণেই তাঁর কওম তাঁকে মিথ্যাবাদী বলছে। তখন আল্লাহ নিজের অনুগ্রহগুলো গুনিয়ে তাঁকে সচ্ছলতার প্রতিশ্রুতি দিলেন। প্রথম আয়াতের মানে: তাদের কথায় দুঃখ পেয়ো না, কষ্টের সাথে আছে এই দুনিয়াতেই অচিরে আসা স্বস্তি। আল্লাহ সে কথা রেখেছেন। বাগাভী বলেন, আরবের জনপদগুলো তাঁর জন্য খুলে দেওয়া হয়। কুরতুবী নাম নেন হিজায ও ইয়েমেনের। একসময় তিনি শত শত উট দান করতেন।"
          },
          {
            "en": "The second verse, he argues, begins afresh, since no fa or wa joins it to the first: it is a promise to all believers, hardship in this world and ease in the Hereafter, and sometimes the two eases meet. One hardship will never overcome two eases then means it may overcome the worldly ease, but never the ease of the Hereafter, which lasts. Al-Qurtubi adds another pairing, introduced with or it may be said: the hardship of the Makkans driving the Prophet ﷺ out, and the ease of his entry on the day of the conquest with ten thousand men.",
            "bn": "জুরজানীর যুক্তি, দ্বিতীয় আয়াতটি নতুন করে শুরু হয়েছে, কারণ 'ফা' বা 'ওয়া' কিছুই একে প্রথমটির সাথে জোড়েনি। এটি সব মুমিনের জন্য প্রতিশ্রুতি: দুনিয়ায় কষ্ট, আখিরাতে স্বস্তি। আর কখনো কখনো দুই স্বস্তি একসাথেও মেলে। তখন 'একটি কষ্ট কখনো দুটি স্বস্তিকে হারাতে পারবে না' কথার মানে দাঁড়ায়: কষ্ট দুনিয়ার স্বস্তিকে হয়তো হারাতে পারে, কিন্তু আখিরাতের স্বস্তিকে কখনো নয়, কারণ তা স্থায়ী। কুরতুবী 'অথবা বলা যায়' বলে আরেকটি জোড়ার কথা আনেন। কষ্ট হলো মক্কাবাসীদের হাতে নবী ﷺ-এর বহিষ্কার, আর স্বস্তি হলো বিজয়ের দিন ১০ হাজার মানুষ সাথে নিয়ে তাঁর মক্কায় প্রবেশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Hardship, Every Hardship",
          "bn": "কার কষ্ট, নাকি সব কষ্ট"
        },
        "p": [
          {
            "en": "At-Tabari reads the promise as spoken to the Prophet ﷺ in his own trial: with the hardship you are in, of struggle against these idolaters, there is hope and relief, that Allah will give you victory over them until they yield to the truth you brought them. Al-Baghawi, on 94:6, glosses it in almost the same words. Al-Muyassar keeps the setting just as close, with the harm of enemies and relief after constriction. Al-Qurtubi, for his part, glosses the ease of the first verse as plenty and wealth.",
            "bn": "তাবারী প্রতিশ্রুতিটিকে পড়েন নবী ﷺ-এর নিজের পরীক্ষার প্রেক্ষাপটে। আল্লাহ তাঁকে বলছেন: এই মুশরিকদের সাথে সংগ্রামের যে কঠিন অবস্থায় তুমি আছ, তার সাথেই আছে আশা ও মুক্তি। আল্লাহ তোমাকে তাদের উপর বিজয় দেবেন, যতক্ষণ না তারা তোমার আনা সত্যের কাছে নত হয়। বাগাভী ৯৪:৬ আয়াতে প্রায় একই ভাষায় ব্যাখ্যা দেন। মুয়াসসারও প্রেক্ষাপটকে একই রকম কাছাকাছি রাখে: শত্রুদের দেওয়া কষ্ট, আর সংকীর্ণতার পরে মুক্তি। কুরতুবী আবার প্রথম আয়াতের স্বস্তির অর্থ করেন প্রাচুর্য ও সচ্ছলতা।"
          },
          {
            "en": "The article al- in al-'usr is then read two ways. As-Sa'di takes it as the article of all-inclusiveness: every hardship, however far its difficulty reaches, has ease bound to it at its end. Ma'arif al-Qur'an takes it as the article of prior knowledge, pointing to the known hardship of the Prophet ﷺ and his Companions, and says Allah kept His promise to them so that the world saw manifold ease follow each of their hardships. Both are readings of the fetched texts, and this article keeps them side by side without choosing.",
            "bn": "'আল-উসর' শব্দের 'আল' নিয়েও দুই রকম পাঠ আছে। সা'দীর মতে এটি সর্বব্যাপকতার 'আল'। অর্থাৎ যেকোনো কষ্ট, তার কাঠিন্য যত দূরই গড়াক, শেষে স্বস্তি তার সাথে বাঁধা থাকে। মাআরিফুল কুরআনের মতে এটি পূর্বপরিচিতির 'আল', যা ইঙ্গিত করে নবী ﷺ ও তাঁর সাহাবীদের সেই জানা কষ্টের দিকে। সেখানে আরও বলা হয়েছে, আল্লাহ তাঁদের সাথে এমনভাবে প্রতিশ্রুতি রক্ষা করেছেন যে দুনিয়া দেখেছে, তাঁদের প্রতিটি কষ্টের পরে কীভাবে বহুগুণ স্বস্তি এসেছে। দুটিই সংগৃহীত তাফসীরের পাঠ। এ লেখা কোনোটিকে বেছে না নিয়ে দুটিকেই পাশাপাশি রাখে।"
          },
          {
            "en": "Ma'arif then turns to the reader whose ease has not come. That does not contradict the verse, it says; the principle still holds, and a person should meet hardship with fortitude, rely on Allah with a pure heart, hold high hopes of His grace, and not despair of His mercy if success is delayed. As-Sa'di also cites a saying of the Prophet ﷺ that pairs relief with distress and ease with hardship. This article could not confirm that wording in a collection it was able to check, so it records his citation and quotes no more of it.",
            "bn": "এরপর মাআরিফুল কুরআন সেই পাঠকের দিকে ফেরে, যার স্বস্তি এখনো আসেনি। সেখানে বলা হয়েছে, এতে আয়াতের সাথে কোনো বিরোধ নেই, আল্লাহর নিয়ম এখনো বহাল। মানুষের কাজ হলো কষ্টের মুখে অবিচল থাকা, খাঁটি মনে আল্লাহর উপর ভরসা রাখা, তাঁর অনুগ্রহের বড় আশা রাখা, আর সাফল্য দেরিতে এলে তাঁর রহমত থেকে নিরাশ না হওয়া। সা'দী নবী ﷺ-এর একটি বাণীও উল্লেখ করেন, যাতে মুক্তিকে জোড়া হয়েছে বিপদের সাথে, আর স্বস্তিকে কষ্টের সাথে। যাচাই করা সম্ভব হয়েছে এমন কোনো হাদীস সংকলনে এ শব্দগুলো নিশ্চিত করা যায়নি। তাই এখানে কেবল তাঁর উল্লেখের কথাই রাখা হলো, এর বেশি উদ্ধৃত করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Then Stand, Then Long",
          "bn": "তারপর দাঁড়াও, তারপর আকাঙ্ক্ষা করো"
        },
        "p": [
          {
            "en": "The surah closes with 94:7 and 94:8: fa-idha faraghta fa-nsab, wa-ila rabbika fa-rghab. Ibn Kathir's abridged commentary explains the first: when you have finished your worldly affairs and broken away from their routine, rise for worship and stand in it with zeal and full devotion. The second he explains as making your intention and your desire pure for your Lord. He cites Mujahid as well: when you are free of worldly affairs and have stood to pray, then stand for your Lord.",
            "bn": "সূরাটি শেষ হয় ৯৪:৭ ও ৯৪:৮ আয়াতে: ফাইযা ফারাগতা ফানসাব, ওয়া ইলা রাব্বিকা ফারগাব। ইবন কাসীরের সংক্ষিপ্ত তাফসীর প্রথম অংশের ব্যাখ্যা দেয় এভাবে: দুনিয়ার কাজকর্ম শেষ করে তার রুটিন থেকে বেরিয়ে এলে ইবাদতের জন্য উঠে দাঁড়াও, পূর্ণ আগ্রহ আর একাগ্রতা নিয়ে তাতে লেগে থাকো। দ্বিতীয় অংশের অর্থ তাঁর মতে, নিয়ত আর আকাঙ্ক্ষাকে রবের জন্য খাঁটি করে নেওয়া। তিনি মুজাহিদের কথাও আনেন: দুনিয়ার কাজ থেকে অবসর পেয়ে নামাযে দাঁড়ালে তোমার রবের জন্য দাঁড়াও।"
          },
          {
            "en": "Read in order, the surah moves from favours already given, to a promise said twice, to worship and longing turned towards the Lord. Whichever reading of the repetition a reader follows, emphasis with al-Farra' or two eases with Tha'lab, the reports at-Tabari and Ibn Kathir carry present the verse as good news given to the Companions, and as-Sa'di calls it a great glad tiding. What it asks of the listener, on Ma'arif's account, is fortitude, reliance and hope; the closing verse gives that hope its direction.",
            "bn": "ক্রম ধরে পড়লে দেখা যায়, সূরাটি এগোয় আগেই দেওয়া অনুগ্রহ থেকে দুবার বলা প্রতিশ্রুতির দিকে, তারপর রবের দিকে ফেরানো ইবাদত ও আকাঙ্ক্ষার দিকে। পুনরাবৃত্তির যে পাঠই নেওয়া হোক, ফাররার মতো জোর দেওয়া হিসেবে কিংবা সা'লাবের মতো দুই স্বস্তি হিসেবে, তাবারী ও ইবন কাসীরের আনা বর্ণনাগুলোতে আয়াতটি সাহাবীদের দেওয়া সুসংবাদ। সা'দী একে বলেন এক বিরাট সুসংবাদ। মাআরিফুল কুরআনের ভাষায়, শ্রোতার কাছে এর দাবি অবিচলতা, ভরসা আর আশা। আর শেষ আয়াতটি সেই আশাকে ঠিক দিকে ফিরিয়ে দেয়।"
          }
        ]
      }
    ]
  }
});
