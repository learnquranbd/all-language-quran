/**
 * Tadabbur long-form articles — surah 25.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "25:4": {
    "sections": [
      {
        "h": {
          "en": "The Charge in Two Moves",
          "bn": "অভিযোগের দুই চাল"
        },
        "p": [
          {
            "en": "The surah opens by blessing the One who sent down the Furqān, the Criterion, upon His servant as a warning to the worlds (25:1), and it has just exposed the idols that create nothing and own neither harm nor benefit for themselves (25:3). Then comes the reply of those who reject him. Their sentence carries two charges, not one. First: in hādhā illā ifk iftarāh — this is nothing but a lie he invented. Then, as though that were still too thin, a second: wa a'ānahu 'alayhi qawmun ākharūn — and another people helped him with it.",
            "bn": "সূরাটি শুরু হয় সেই সত্তার প্রশংসা দিয়ে যিনি তাঁর বান্দার উপর ফুরকান, অর্থাৎ সত্য-মিথ্যার পার্থক্যকারী কিতাব নাযিল করেছেন বিশ্বজগতের জন্য সতর্ককারী হিসেবে (২৫:১)। একটু আগেই আয়াত ধরিয়ে দিয়েছে সেই মূর্তিদের অসারতা, যারা কিছুই সৃষ্টি করে না আর নিজেদের ক্ষতি বা উপকারেরও মালিক নয় (২৫:৩)। এরপর আসে অস্বীকারকারীদের জবাব। তাদের কথায় একটা নয়, দুটি অভিযোগ। প্রথমটি: ইন হা-যা ইল্লা ইফক ইফতারা-হু, এটা মিথ্যা ছাড়া কিছু নয়, সে নিজে বানিয়েছে। তারপর, যেন এতেও কথাটা হালকা থেকে যায়, দ্বিতীয়টি: ওয়া আ'আনাহু আলাইহি কাওমুন আ-খারুন, আর ভিন্ন এক জাতি এ ব্যাপারে তাকে সাহায্য করেছে।"
          },
          {
            "en": "So the accusation is no longer only that a man is lying. It is that he is lying with help, that the words must have a hidden human workshop behind them. The Qur'an lets the whole charge stand, and then answers it with two words of its own: fa-qad jā'ū ẓulman wa zūrā — they have come with injustice and falsehood. This piece follows both halves of the charge. Who were the 'others' said to be, and why the reply to the borrowing claim was already there, waiting inside the Book they were trying to explain away.",
            "bn": "তাই অভিযোগটা আর শুধু এই নয় যে একজন লোক মিথ্যা বলছে। এখন কথাটা হলো, সে মিথ্যা বলছে সাহায্য নিয়ে, এই কথাগুলোর পেছনে নিশ্চয়ই কোনো লুকোনো মানুষের কারখানা আছে। কুরআন গোটা অভিযোগটাকে দাঁড়াতে দেয়, তারপর নিজের দুটো শব্দে তার জবাব দেয়: ফাকাদ জা-ঊ যুলমান ওয়া যূরা, তারা অন্যায় ও মিথ্যা নিয়ে এসেছে। এই লেখা অভিযোগের দুই দিকই অনুসরণ করবে। এই 'অন্যেরা' কারা বলে দাবি করা হতো, আর ধার নেওয়ার অভিযোগের জবাবটা কেন আগে থেকেই সেই কিতাবের ভেতরেই অপেক্ষা করছিল, যাকে তারা উড়িয়ে দিতে চাইছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Were the Others?",
          "bn": "সেই অন্যেরা কারা"
        },
        "p": [
          {
            "en": "Who was speaking? Al-Qurtubi, on the authority of Ibn 'Abbās, reports that the one who said this among them was an-Naḍr ibn al-Ḥārith, and that wherever the Qur'an mentions 'legends of the ancients' it points to him; Ibn Isḥāq, al-Qurtubi adds, described this man as one who used to injure the Prophet ﷺ. Al-Baghawī names the same figure — an-Naḍr and his circle — as the disbelievers meant here. So the commentators place a particular opponent behind the sentence, not a faceless crowd.",
            "bn": "কথাটা বলছিল কে? কুরতুবী ইবন আব্বাস (রাঃ)-এর সূত্রে বলেন, তাদের মধ্যে যে এ কথা বলত সে ছিল নাদর ইবনুল হারিস। কুরআনে যেখানেই 'পূর্বপুরুষদের কিসসা' বলার উল্লেখ আছে, তার দিকেই ইঙ্গিত। কুরতুবী আরও জানান, ইবন ইসহাকের বর্ণনায় এই লোকটি নবী ﷺ-কে কষ্ট দিত। বাগাভীও একই লোকের নাম নেন, নাদর আর তার সঙ্গীদের, এখানে অস্বীকারকারী বলতে যাদের বোঝানো হয়েছে। তাই তাফসীরকারেরা এই কথার পেছনে একজন নির্দিষ্ট বিরোধীকে বসান, নামহীন কোনো জটলাকে নয়।"
          },
          {
            "en": "And the 'others' who supposedly helped? At-Ṭabarī reports, through Ibn Abī Najīḥ from Mujāhid, that they were the Jews: the Meccans were saying that it was the Jews who taught Muḥammad ﷺ what he brought them, and this, at-Ṭabarī says, is the sense of wa a'ānahu 'alayhi qawmun ākharūn. Al-Baghawī carries the same reading from Mujāhid. Two independent commentaries thus preserve one early identification — that the alleged 'other people' were Jewish informants of the town.",
            "bn": "আর 'অন্যেরা', যারা নাকি সাহায্য করেছিল? তাবারী ইবন আবী নাজীহের মাধ্যমে মুজাহিদ থেকে বর্ণনা করেন, তারা ছিল ইহুদিরা। মক্কাবাসীরা বলত, মুহাম্মাদ ﷺ যা নিয়ে আসছেন তা তাঁকে ইহুদিরাই শেখাচ্ছে। তাবারীর মতে ওয়া আ'আনাহু আলাইহি কাওমুন আ-খারুন কথার এটাই মর্ম। বাগাভীও মুজাহিদ থেকে একই পাঠ আনেন। এভাবে দুটি আলাদা তাফসীর একটি পুরোনো শনাক্তকরণ ধরে রাখে, নাকি-সাহায্যকারী 'অন্য জাতি' বলতে শহরের ইহুদি তথ্যদাতাদের বোঝানো হতো।"
          },
          {
            "en": "Others named individuals. Al-Qurtubi, again from Ibn 'Abbās, lists three men from the People of the Book — Abū Fukayha the freedman of Banū al-Ḥaḍramī, 'Addās, and Jabr — and notes that they had already been discussed back in Sūrat an-Naḥl. Al-Baghawī gives an overlapping but not identical list — Jabr, Yasār, and 'Addās ibn 'Ubayd, People of the Book living at Makka — and reports from al-Ḥasan a different name again, one 'Ubayd al-Ḥabashī. The lists do not match, and the commentators offer them as reports, not as settled fact.",
            "bn": "কেউ কেউ নির্দিষ্ট নাম বলেছেন। কুরতুবী আবার ইবন আব্বাস (রাঃ) থেকে আহলে কিতাবের তিনজনের নাম দেন, বনু হাদরামীর মুক্ত করা দাস আবু ফুকাইহা, আদ্দাস আর জাবর। তিনি জানান, এদের কথা আগেই সূরা নাহলে এসেছে। বাগাভী কাছাকাছি কিন্তু হুবহু এক নয় এমন একটি তালিকা দেন, জাবর, ইয়াসার আর আদ্দাস ইবন উবাইদ, মক্কায় বসবাসকারী আহলে কিতাবের লোক। হাসান থেকে তিনি আবার আরেকটি নাম আনেন, উবাইদ আল-হাবাশী। তালিকাগুলো মেলে না, আর তাফসীরকারেরা এগুলো বর্ণনা হিসেবে পেশ করেন, চূড়ান্ত সত্য হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Foreign Tongue, an Arabic Book",
          "bn": "ভিনদেশি জবান, আরবি কিতাব"
        },
        "p": [
          {
            "en": "When al-Qurtubi sends the reader back to Sūrat an-Naḥl for those names, he is pointing at where the borrowing charge had already been met. There, in 16:103, the Qur'an quotes the very same accusation — that a human being is teaching him — and answers it in one clause: the tongue of the one they allude to is foreign, while this is a clear Arabic tongue. The supposed informant spoke a non-Arabic speech; the Book is Arabic of the highest order. The story does not survive its own detail.",
            "bn": "কুরতুবী যখন সেই নামগুলোর জন্য পাঠককে সূরা নাহলে ফিরিয়ে নেন, তখন তিনি দেখিয়ে দেন কোথায় ধার নেওয়ার অভিযোগের জবাব আগেই দেওয়া হয়ে গেছে। সেখানে, ১৬:১০৩ আয়াতে, কুরআন হুবহু একই অভিযোগ তুলে ধরে, যে একজন মানুষ তাঁকে শেখাচ্ছে। আর এক বাক্যেই তার জবাব দেয়: তারা যার দিকে ইঙ্গিত করছে তার জবান বিদেশি, অথচ এটা স্পষ্ট আরবি জবান। কথিত সেই শিক্ষক কথা বলত আরবি নয় এমন ভাষায়, আর কিতাবটি সর্বোচ্চ মানের আরবি। গল্পটা নিজের খুঁটিনাটির ভারেই ভেঙে পড়ে।"
          },
          {
            "en": "That is exactly why al-Muyassar, after stating the charge plainly — that they called the Qur'an a lie invented by Muḥammad ﷺ with the help of other people — closes on one sentence: the Qur'an is not something any human being could fabricate (fa-l-Qur'ānu laysa mimmā yumkinu li-basharin an yakhtaliqah). The point is not that this or that informant cannot be found. It is that the thing itself lies past human manufacture, so the picture of a hidden workshop of helpers never even gets off the ground.",
            "bn": "ঠিক এ কারণেই মুয়াসসার অভিযোগটা সাফ বলে দেওয়ার পর, অর্থাৎ তারা কুরআনকে বলেছে মুহাম্মাদ ﷺ-এর বানানো এক মিথ্যা যাতে অন্য লোকেরা সাহায্য করেছে, শেষ করেন একটি বাক্যে: কুরআন এমন কিছু নয় যা কোনো মানুষের পক্ষে বানানো সম্ভব। কথাটা এই নয় যে অমুক তমুক তথ্যদাতাকে খুঁজে পাওয়া যায় না। কথাটা হলো, জিনিসটাই মানুষের গড়ার সাধ্যের বাইরে। তাই লুকোনো সাহায্যকারীদের কারখানার ছবিটা দাঁড়ানোরই সুযোগ পায় না।"
          },
          {
            "en": "As-Sa'dī presses the same nerve from the side of what they knew. He calls the charge sheer obstinacy (mukābara), a thing no sound mind could hold, because the Meccans of all people knew the Messenger ﷺ best — his truthfulness, his trustworthiness, the fullness of his integrity — and knew that neither he nor the whole of creation could bring a discourse this lofty, and that he had never sat with anyone to be coached in it. What they brought, as-Sa'dī concludes, was ẓulm and zūr — wrong and a lie.",
            "bn": "সা'দী একই জায়গায় চাপ দেন, তবে তারা যা জানত সেই দিক থেকে। তিনি অভিযোগটাকে বলেন নিছক গোঁয়ার্তুমি, যা কোনো সুস্থ বুদ্ধি ধারণ করতে পারে না। কারণ মক্কাবাসীরাই তো রসূল ﷺ-কে সবচেয়ে ভালো চিনত, তাঁর সততা, তাঁর আমানতদারি, তাঁর পূর্ণ নিষ্ঠা। তারা জানত, তিনি বা গোটা সৃষ্টিও এমন উঁচু মানের বাণী আনতে পারে না, আর জানত যে তিনি কারও কাছে বসে এ ব্যাপারে তালিম নেননি। সা'দীর সিদ্ধান্ত, তারা যা এনেছে তা যুলম আর যূর, অন্যায় আর মিথ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Unlettered Man They Knew",
          "bn": "যাকে তারা নিরক্ষর জানত"
        },
        "p": [
          {
            "en": "Ibn Kathir, commenting here, meets the borrowing charge with a fact the accusers themselves could not deny. It is established by mass-transmitted report, he says, that Muḥammad ﷺ never learned to read or write, at the beginning of his life or at its end. He grew up among them for some forty years before his mission, and in all that time they had called him al-Amīn, the Trustworthy, for the truthfulness and honesty they saw in him. An unlettered man of that settled reputation is a poor candidate for a secret literary partnership with foreign scribes.",
            "bn": "ইবন কাসীর এখানে ধার নেওয়ার অভিযোগের মুখে এমন একটি বাস্তবতা রাখেন যা অভিযোগকারীরা নিজেরাই অস্বীকার করতে পারত না। তিনি বলেন, বহুধারায় বর্ণিত ও সর্বজনবিদিত যে মুহাম্মাদ ﷺ জীবনের শুরুতে বা শেষে কখনো পড়তে বা লিখতে শেখেননি। নবুয়তের আগে প্রায় চল্লিশ বছর তিনি তাদের মাঝেই বড় হয়েছেন, আর এই পুরোটা সময় তারা তাঁকে ডাকত আল-আমীন বলে, তাঁর মধ্যে যে সততা আর বিশ্বস্ততা দেখেছিল সেজন্য। এমন মজবুত সুনামের একজন নিরক্ষর মানুষ ভিনদেশি লেখকদের সঙ্গে গোপন সাহিত্যচুক্তির জন্য বড়ই বেমানান।"
          },
          {
            "en": "That unlettered state is the picture drawn by the report of how revelation began. Al-Bukhārī records from 'Ā'isha (RA) that when the angel first came to him in the cave of Ḥirā' and said 'Read', the Prophet ﷺ answered mā anā bi-qāri' — I am not one who reads — and said it again under the angel's grip, a second and a third time, before the words of Sūrat al-'Alaq were placed on him. This is a narration about the onset of revelation, not an occasion for 25:4; but it shows plainly the man the Meccans imagined as the author of a forgery he had been coached to write.",
            "bn": "সেই নিরক্ষরতার ছবিটাই ফুটে ওঠে ওহি শুরু হওয়ার বর্ণনায়। বুখারী আয়িশা (রাঃ) থেকে বর্ণনা করেন, হেরা গুহায় ফেরেশতা প্রথম এসে যখন বললেন 'পড়ুন', নবী ﷺ জবাব দিলেন, মা আনা বিকারি, আমি পড়তে জানি না। ফেরেশতার চাপে পড়ে তিনি একই কথা আবার বললেন, দ্বিতীয়বার আর তৃতীয়বার, তারপর সূরা আলাকের শুরুর শব্দগুলো তাঁর উপর রাখা হলো। এটি ওহির সূচনার বর্ণনা, ২৫:৪ আয়াতের কোনো শানে-নুযূল নয়। তবে এ থেকে সাফ বোঝা যায়, মক্কাবাসীরা যাকে শিখিয়ে-পড়িয়ে লেখানো এক জালিয়াতির নীরব রচয়িতা ভাবছিল, সে মানুষটি আসলে কেমন ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verdict Named Twice",
          "bn": "দুই নামে ঘোষিত রায়"
        },
        "p": [
          {
            "en": "Return to the Qur'an's two-word answer. At-Ṭabarī takes the pair apart. Ẓulm, he reminds us, means at root putting a thing where it does not belong; the wrong here was to file God's own speech and revelation under the label of a fabrication invented by Muḥammad ﷺ. Zūr, he says, is at root the dressing-up of falsehood so that it looks like something true. And from Mujāhid he narrates the plain gloss on the whole clause — kadhiban, a lie, pure and simple. The verdict is not abuse thrown back; it is exact.",
            "bn": "কুরআনের সেই দুই শব্দের জবাবে ফিরে আসি। তাবারী শব্দ দুটোকে আলাদা করে দেখেন। যুলম, তিনি মনে করিয়ে দেন, মূলে মানে কোনো জিনিসকে তার জায়গা ছাড়া অন্য জায়গায় বসানো। এখানে অন্যায়টা হলো আল্লাহর নিজের কালাম আর ওহিকে মুহাম্মাদ ﷺ-এর বানানো এক জালিয়াতি বলে দাগিয়ে দেওয়া। আর যূর, তিনি বলেন, মূলে মানে মিথ্যাকে সত্যের মতো সাজিয়ে তোলা। মুজাহিদ থেকে তিনি গোটা বাক্যের সোজা ব্যাখ্যাটা আনেন, কিযব, নিছক মিথ্যা। এই রায় পাল্টা গালি নয়, নিখুঁত মাপা কথা।"
          },
          {
            "en": "Al-Baghawī reads the same pair as shirk and lie at once — associating partners and speaking falsehood — since to call God's word a human invention is both together. Ibn Kathir sharpens the edge: they have produced an unjust wrong and a lie, and they are the liars, knowing within themselves that what they claim is untrue. The charge, then, was not an honest mistake about where the Book came from. It was an accusation its own makers knew to be false, which is why the reply names it twice over: injustice, and a lie.",
            "bn": "বাগাভী একই জোড়াকে পড়েন শিরক আর মিথ্যা একসঙ্গে, কারণ আল্লাহর কালামকে মানুষের বানানো বলা এ দুটোই একত্রে। ইবন কাসীর ধারটা আরও তীক্ষ্ণ করেন: তারা এনেছে অন্যায় আর মিথ্যা, আর তারাই মিথ্যাবাদী, নিজেদের ভেতরে জেনেও যে তাদের দাবি সত্য নয়। তাহলে এই অভিযোগ কিতাব কোথা থেকে এল তা নিয়ে সৎ কোনো ভুল ছিল না। এটা এমন এক অভিযোগ যাকে যারা বানাল তারাই মিথ্যা জানত। এ জন্যই জবাব তাকে দুবার নাম ধরে ডাকে, অন্যায়, আর মিথ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Charge That Keeps Shifting",
          "bn": "যে অভিযোগ থামে না"
        },
        "p": [
          {
            "en": "Watch the charge move even across these few verses. In 25:4 the Qur'an is an invented lie with hidden co-authors. In the next breath, 25:5, it becomes legends of the ancients he has had written down, dictated to him morning and evening. A little later the target slides from the Book to the man: why does this messenger eat food and walk the markets (25:7), and then, you follow only a man bewitched (25:8). Forger, copyist, ordinary mortal, a man under a spell — the accusation cannot settle into a single shape.",
            "bn": "এই কয়টি আয়াতের মধ্যেই অভিযোগটার নড়াচড়া লক্ষ্য করুন। ২৫:৪ আয়াতে কুরআন হলো লুকোনো সহলেখকসহ বানানো এক মিথ্যা। পরের নিঃশ্বাসেই, ২৫:৫ আয়াতে, তা হয়ে যায় পূর্বপুরুষদের কিসসা, যা সে লিখিয়ে নিয়েছে আর সকাল-সন্ধ্যা তাকে পড়ে শোনানো হয়। একটু পরে নিশানা কিতাব থেকে সরে যায় মানুষটার দিকে, এ কেমন রসূল যে খাবার খায় আর হাটবাজারে চলে (২৫:৭), তারপর, তোমরা তো এক যাদুগ্রস্ত লোকেরই অনুসরণ করছ (২৫:৮)। জালিয়াত, নকলনবিশ, সাধারণ মানুষ, যাদুগ্রস্ত কেউ, অভিযোগটা কোনো এক রূপে থিতু হতে পারে না।"
          },
          {
            "en": "Ibn Kathir names the pattern outright. They were not sure what to accuse him of, he writes: at times a sorcerer, at times a poet, at times mad, at times a liar — and he cites the Qur'an's own summary, see what comparisons they strike for you; they have strayed and cannot find a way (17:48). A charge that keeps changing shape has stopped being an argument about whether a thing is true and become a hunt for any exit from it. The tell is not the content of the objection but its restlessness.",
            "bn": "ইবন কাসীর স্বভাবটার নাম সরাসরি বলে দেন। তিনি লেখেন, তারা ঠিক করতে পারত না তাঁকে কী বলে দোষ দেবে, কখনো যাদুকর, কখনো কবি, কখনো পাগল, কখনো মিথ্যাবাদী। আর তিনি কুরআনের নিজের সারকথাটাও তুলে ধরেন, দেখো তারা তোমার জন্য কেমন উপমা ছোড়ে, তারা পথ হারিয়েছে আর পথ খুঁজে পায় না (১৭:৪৮)। যে অভিযোগ বারবার রূপ বদলায়, সেটা আর কোনো জিনিস সত্য কি না তার তর্ক থাকে না, হয়ে দাঁড়ায় সেটা থেকে যেকোনো পথে পালানোর খোঁজ। আসল লক্ষণ আপত্তির বিষয়বস্তু নয়, তার অস্থিরতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Named Speakers, Not a People",
          "bn": "নির্দিষ্ট বক্তা, গোটা জাতি নয়"
        },
        "p": [
          {
            "en": "One caution must be stated plainly, in the reading and in the living of it. This verse reports what a particular set of Meccan opponents said, and the commentators, in explaining 'another people', report names — an-Naḍr ibn al-Ḥārith among the speakers, and among the alleged informants certain Jews or People of the Book of that town. The verse describes what the text describes: a false claim made by named individuals in one specific dispute. It licenses nothing against any living person or community.",
            "bn": "একটা সতর্কবার্তা সাফ বলে দেওয়া দরকার, পড়ার বেলায়ও, আর জীবনে মানার বেলায়ও। এই আয়াত জানায় মক্কার একদল নির্দিষ্ট বিরোধী কী বলেছিল। আর তাফসীরকারেরা 'অন্য জাতি' বোঝাতে গিয়ে কিছু নাম আনেন, বক্তাদের মধ্যে নাদর ইবনুল হারিস, আর কথিত তথ্যদাতাদের মধ্যে সেই শহরের কিছু ইহুদি বা আহলে কিতাব। আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে, একটি নির্দিষ্ট বিবাদে নির্দিষ্ট কয়েকজনের করা একটি মিথ্যা দাবি। জীবিত কোনো ব্যক্তি বা কোনো জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "To take an early report of who was rumoured to be coaching the Prophet ﷺ and turn it into suspicion of Jews, or of the People of the Book, as a class today is to repeat the very sin the verse condemns — putting a thing where it does not belong, which is ẓulm itself. The Qur'an's quarrel here is with a lie about the Book's origin, not with a people. To read it as a warrant to accuse a whole community would be, in the verse's own words, injustice and falsehood.",
            "bn": "নবী ﷺ-কে কে শিখিয়ে দিচ্ছিল বলে গুজব ছিল, সেই পুরোনো বর্ণনাকে টেনে এনে আজ ইহুদি বা আহলে কিতাবকে গোটা জাত হিসেবে সন্দেহ করা মানে ঠিক সেই গুনাহই আবার করা, যাকে আয়াত নিন্দা করছে, অর্থাৎ জিনিসকে তার জায়গা ছাড়া বসানো, যা নিজেই যুলম। এখানে কুরআনের ঝগড়া কিতাবের উৎস নিয়ে একটি মিথ্যার সঙ্গে, কোনো জনগোষ্ঠীর সঙ্গে নয়। একে গোটা এক সম্প্রদায়কে দোষারোপের ছাড়পত্র হিসেবে পড়া আয়াতেরই ভাষায় হবে অন্যায় আর মিথ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Door Left Open",
          "bn": "খোলা রাখা দরজা"
        },
        "p": [
          {
            "en": "After a charge this ugly, the surah's next move is startling. Say: it was sent down by Him who knows every secret in the heavens and the earth; indeed He is ever Forgiving, Merciful (25:6). Ibn Kathir reads those closing names as an open invitation: after all their lying and stubbornness and what they had said about the Messenger ﷺ and the Book, He still calls them to turn back, for His mercy is vast and His forbearance immense, and whoever repents to Him is received. Al-Ḥasan al-Baṣrī marvels at it — they were killing His friends, and He was calling them to repentance and mercy.",
            "bn": "এমন কুৎসিত অভিযোগের পর সূরার পরের পদক্ষেপটা চমকে দেয়। বলো, তা নাযিল করেছেন সেই সত্তা, আসমান-যমীনের প্রতিটি গোপন কথা যিনি জানেন। নিশ্চয়ই তিনি বড়ই ক্ষমাশীল, পরম দয়ালু (২৫:৬)। ইবন কাসীর শেষের এই নামগুলোকে পড়েন খোলা এক আহ্বান হিসেবে। তাদের এত মিথ্যা, এত গোঁয়ার্তুমি, রসূল ﷺ আর কিতাব নিয়ে এত কথার পরও তিনি তাদের ফিরে আসতে ডাকেন, কারণ তাঁর রহমত বিশাল আর তাঁর সহনশীলতা অপার, আর যে তাঁর কাছে তওবা করে তাকে তিনি কবুল করেন। হাসান বসরী এতে বিস্মিত হন, তারা তাঁর বন্ধুদের হত্যা করছিল, আর তিনি তাদের ডাকছিলেন তওবা আর রহমতের দিকে।"
          },
          {
            "en": "That leaves the harder question, the one under the whole scene. The Meccans built a story about where the Book came from so they would not have to answer what it said. The same reflex is nearer than we like to admit. When a truth reaches me that would cost me something to accept, do I weigh what was said, or stay busy with the one who said it, assembling a story about how he 'really' came by it? The honest reply to a message is a reply to the message. Everything else is an exit, and this verse has already named it: injustice, and a lie.",
            "bn": "এতে শ্রোতার সামনে থেকে যায় আরও কঠিন প্রশ্নটা, যেটা গোটা দৃশ্যের নিচে লুকিয়ে আছে। মক্কাবাসীরা কিতাব কোথা থেকে এল তা নিয়ে একটা গল্প বানিয়েছিল, যাতে কিতাব যা বলে তার জবাব দিতে না হয়। এই স্বভাব আমরা যতটা মানি তার চেয়ে কাছেই আছে। যে সত্য মানতে গেলে আমার কিছু খোয়াতে হয়, আমি কি সেই কথাটা ওজন করি, নাকি যে বলেছে তাকে নিয়ে ব্যস্ত থেকে চুপচাপ একটা গল্প বানাই যে সে 'আসলে' কোথা থেকে পেল? কোনো কথার সৎ জবাব হলো সেই কথার জবাব। বাকি সবই পালানোর পথ, আর এই আয়াত তার নাম আগেই বলে দিয়েছে, অন্যায়, আর মিথ্যা।"
          }
        ]
      }
    ]
  },
  "25:8": {
    "sections": [
      {
        "h": {
          "en": "The Test They Set",
          "bn": "যে মাপকাঠি তারা বসাল"
        },
        "p": [
          {
            "en": "The disbelievers of Makkah had a standard for what a messenger should look like, and this man failed it. In 25:7 they complain: what is this messenger that eats food and walks in the markets? A true envoy of God, to their minds, should not need bread and should not haggle for a living. Al-Muyassar renders the objection plainly: he eats as we eat and walks the markets seeking his livelihood. So they asked that an angel be sent down with him, a visible warner to vouch for his claim.",
            "bn": "মক্কার অবিশ্বাসীদের মনে একজন রসূল কেমন হবেন তার একটা মাপকাঠি ছিল, আর এই মানুষটি সে মাপে মিলল না। ২৫:৭ আয়াতে তারা আপত্তি তোলে: এ কেমন রসূল, যে খাবার খায় আর হাটে-বাজারে হেঁটে বেড়ায়? তাদের ধারণায় আল্লাহর সত্যিকারের দূতের রুটির দরকার হওয়ার কথা নয়, জীবিকার জন্য দরদাম করার কথা নয়। মুয়াসসার তাদের আপত্তি সোজা কথায় তুলে ধরে: সে আমাদের মতোই খায়, আর রিজিকের খোঁজে বাজারে ঘোরে। তাই তারা দাবি করে, তার সঙ্গে একজন ফেরেশতা নেমে আসুক, চোখে দেখা এক সতর্ককারী, যে তার দাবির সাক্ষী হবে।"
          },
          {
            "en": "Then comes 25:8 with two more demands. Or why is a treasure not cast down to him, or a garden given him to eat from? Ibn Kathir sets these beside Pharaoh's taunt in 43:53, why are golden bracelets not thrown on him, or angels sent along with him. The mind is the same across the two scenes: measure the messenger by wealth and spectacle, and if the grandeur is missing, refuse the message. The verse gathers their tests into one list so that we can see the error whole.",
            "bn": "এরপর ২৫:৮ আয়াতে আরও দুটি দাবি। তার কাছে ধন-ভান্ডার ফেলা হয় না কেন, কিংবা তার একটা বাগান হয় না কেন যা থেকে সে খেতে পারে? ইবন কাসীর এ দাবিগুলোকে ৪৩:৫৩ আয়াতে ফিরআউনের টিটকারির পাশে রাখেন, তার গায়ে সোনার কাঁকন পরানো হলো না কেন, বা তার সঙ্গে ফেরেশতারা এল না কেন। দুই দৃশ্যেই মন একই: রসূলকে মাপো ধন আর জাঁকজমক দিয়ে, আর সেই জাঁক না থাকলে বার্তাটাই নাকচ করো। আয়াতটি তাদের এই পরীক্ষাগুলোকে একসঙ্গে সাজিয়ে দেয়, যাতে ভুলটা আমরা গোটা দেখতে পাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Treasure Out of the Sky",
          "bn": "আসমান থেকে ধন-ভান্ডার"
        },
        "p": [
          {
            "en": "Take the treasure first. Al-Baghawi explains it as a treasure sent down on him from the sky, one he could spend, so that he would not have to go back and forth working for his keep. As-Sa'di sharpens it to wealth gathered without effort, mal majmu' min ghayri ta'ab. Their picture of a prophet is a man lifted above ordinary need, funded from heaven, never seen bargaining in a market. Ibn Kathir reads the treasure the same way, as money he could spend from.",
            "bn": "আগে ধন-ভান্ডারের কথা ধরুন। বাগাভী বলেন, এ আসমান থেকে তার উপর নেমে আসা এক ধন, যা সে খরচ করতে পারবে, ফলে জীবিকার জন্য আর তাকে ছোটাছুটি করতে হবে না। সাদী কথাটা আরও ধারালো করেন: কোনো পরিশ্রম ছাড়াই জমা হওয়া সম্পদ। নবী কেমন হবেন, তাদের সেই ছবিটা এমন এক মানুষের, যাকে সাধারণ অভাবের উপরে তুলে রাখা হয়েছে, যার খরচ আসে আসমান থেকে, যাকে কখনো বাজারে দরদাম করতে দেখা যায় না। ইবন কাসীরও ধনটাকে একইভাবে পড়েন, এমন অর্থ যা থেকে সে খরচ করবে।"
          },
          {
            "en": "The garden is the second half of the wish. At-Tabari glosses jannah simply as a bustan, an orchard, and Ibn Kathir adds a vivid touch: a garden that would travel with him wherever he went, so its fruit was always at hand. As-Sa'di ties it back to 25:7: with such a garden he would be spared walking the markets to seek his food. Both demands share one assumption, that God shows His favour by removing a man from labour and want. The Qur'an will answer that assumption rather than grant it.",
            "bn": "দ্বিতীয় চাওয়া হলো বাগান। তাবারী জান্নাত শব্দটির অর্থ করেন সোজা 'বুসতান', মানে বাগান। ইবন কাসীর এতে জীবন্ত এক ছোঁয়া যোগ করেন: এমন বাগান যা তার সঙ্গে সঙ্গে চলবে, যেখানেই সে যাবে, যাতে ফল সব সময় হাতের কাছে থাকে। সাদী একে ২৫:৭ আয়াতের সঙ্গে বাঁধেন: এমন বাগান থাকলে খাবারের খোঁজে তাকে আর বাজারে হাঁটতে হতো না। দুই দাবিরই মূলে একটি ধারণা, আল্লাহ তাঁর অনুগ্রহ দেখান মানুষকে খাটুনি আর অভাব থেকে সরিয়ে দিয়ে। কুরআন এই ধারণা মেনে না নিয়ে বরং এর জবাব দেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verb, Two Readings",
          "bn": "এক ক্রিয়া, দুই পড়া"
        },
        "p": [
          {
            "en": "A small difference of recitation sits inside the words yakulu minha, from which he eats. At-Tabari records that the reciters of Madinah and Basrah, and some of Kufa, read it with ya, yakulu, meaning the messenger eats from the garden. The general reciters of Kufa read it with nun, nakulu, meaning we eat from it. Al-Baghawi names the second reading precisely: Hamzah and al-Kisa'i read nakulu, that is, we too would eat from it.",
            "bn": "'ইয়াকুলু মিনহা' অর্থাৎ 'যা থেকে সে খায়'— এই শব্দগুলোর ভেতরে ছোট্ট একটা কিরাআতের পার্থক্য লুকিয়ে আছে। তাবারী লেখেন, মদীনা ও বসরার এবং কূফার কিছু ক্বারী এটি 'ইয়া' দিয়ে পড়েন, 'ইয়াকুলু', মানে রসূল বাগান থেকে খান। কূফার সাধারণ ক্বারীরা পড়েন 'নূন' দিয়ে, 'নাকুলু', মানে আমরা তা থেকে খাই। বাগাভী দ্বিতীয় পড়াটি নির্দিষ্ট করে বলেন: হামযা ও কিসাঈ 'নাকুলু' পড়েন, অর্থাৎ আমরাও তা থেকে খেতাম।"
          },
          {
            "en": "The two readings shift who benefits. On the ya reading the demand is only about the Prophet's own comfort. On the nun reading the objectors imagine sharing in the garden themselves. At-Tabari prefers the ya reading, and gives his reason: the pagans had asked the Prophet to seek these favours for himself, not for them, so it would not fit for them to say seek it that we may eat. He adds that 25:10, blessed is He who could give you better than that, gardens and palaces, addresses the Prophet alone and confirms the point.",
            "bn": "দুই পড়ায় লাভবান কে, তা বদলে যায়। 'ইয়া' পড়ায় দাবিটা কেবল নবীর নিজের আরাম নিয়ে। 'নূন' পড়ায় আপত্তিকারীরা নিজেরাও সেই বাগানে ভাগ বসানোর কথা ভাবে। তাবারী 'ইয়া' পড়াকেই অগ্রাধিকার দেন, আর কারণ দেন: মুশরিকরা নবীকে বলেছিল এসব অনুগ্রহ নিজের জন্য চাইতে, তাদের জন্য নয়। তাই তাদের মুখে এমন কথা মানানসই নয় যে, তা চাও যেন আমরা খেতে পারি। তিনি যোগ করেন, ২৫:১০ আয়াতে বলা হয়েছে, মহাকল্যাণময় তিনি যিনি চাইলে তোমাকে এর চেয়ে ভালো বাগান ও প্রাসাদ দিতে পারতেন; আর সে সম্বোধন কেবল নবীকেই, যা এ কথাই নিশ্চিত করে।"
          },
          {
            "en": "Al-Qurtubi reaches the same preference by grammar. Both readings, he says, are good and carry a sound meaning, yet the ya reading is clearer, because the Prophet alone has just been mentioned, so the pronoun returns to him most naturally; he cites this from an-Nahhas. Here two masters of tafsir agree on the stronger reading while keeping the weaker one as a valid recitation, not an error. The disagreement is small, but the habit is the point: name both, weigh both, and do not flatten a real variant into a single line.",
            "bn": "কুরতুবী একই অগ্রাধিকারে পৌঁছান ব্যাকরণের পথে। তিনি বলেন, দুটি পড়াই ভালো এবং সঠিক অর্থ বহন করে, তবু 'ইয়া' পড়া বেশি স্পষ্ট, কারণ ঠিক আগেই কেবল নবীর কথা এসেছে, তাই সর্বনামটি স্বাভাবিকভাবেই তাঁর দিকেই ফেরে; এ কথা তিনি নাহহাস থেকে উদ্ধৃত করেন। এখানে তাফসীরের দুই পণ্ডিত শক্তিশালী পড়াটির ব্যাপারে একমত, অথচ দুর্বল পড়াটিকেও ভুল নয়, বরং বৈধ কিরাআত হিসেবেই রাখেন। পার্থক্যটা ছোট, কিন্তু অভ্যাসটাই আসল কথা: দুটোরই নাম নাও, দুটোই ওজন করো, আর একটা সত্যিকারের ভিন্ন পড়াকে এক লাইনে চেপে দিয়ো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prophet Who Ate Bread",
          "bn": "যে নবী রুটি খেতেন"
        },
        "p": [
          {
            "en": "What the objectors held against the Prophet is exactly what makes him reachable. Ibn Kathir, explaining their words, says he walked about and went often to the markets, seeking to trade and earn a living. As-Sa'di too speaks of his walking the markets in search of provision. This is a man who knew hunger and work, who bought and sold among people, who was not a distant figure sealed behind wealth. The disbelievers read that nearness as a defect. Read rightly, it is a mercy.",
            "bn": "আপত্তিকারীরা নবীর বিরুদ্ধে যা ধরেছিল, ঠিক সেটাই তাঁকে নাগালের মধ্যে আনে। ইবন কাসীর তাদের কথা ব্যাখ্যা করতে গিয়ে বলেন, তিনি ঘুরে বেড়াতেন আর প্রায়ই বাজারে যেতেন ব্যবসা করতে ও জীবিকা অর্জন করতে। সাদীও বলেন রিজিকের খোঁজে তাঁর বাজারে হাঁটার কথা। এ এমন এক মানুষ, যিনি ক্ষুধা ও খাটুনি চিনতেন, মানুষের মাঝে কেনাবেচা করতেন, ধনের আড়ালে বন্ধ কোনো দূরের ছবি ছিলেন না। অবিশ্বাসীরা এই কাছে থাকাটাকে ত্রুটি হিসেবে পড়ল। ঠিকভাবে পড়লে এটাই রহমত।"
          },
          {
            "en": "A messenger who eats and works can be followed, because his life can be copied. Had guidance come through an angel, or through a rich man walled off from need, the ordinary believer could admire it but never imitate it. Because the Prophet lived within the same limits as those he called, every part of his conduct, from how he ate to how he traded, became a pattern within reach. The very humanity the Makkans mocked is what makes him, in the Qur'an's own words, a beautiful example to follow, in 33:21.",
            "bn": "যে রসূল খান আর খাটেন, তাঁকে অনুসরণ করা যায়, কারণ তাঁর জীবন নকল করা যায়। ফেরেশতা কিংবা অভাব থেকে দেয়ালে ঘেরা কোনো ধনীর মাধ্যমে যদি হিদায়াত আসত, সাধারণ মুমিন তার প্রশংসা করতে পারত, কিন্তু অনুকরণ করতে পারত না। নবী যাদের ডেকেছেন তাদের মতোই একই সীমার ভেতরে জীবন কাটিয়েছেন বলে তাঁর আচরণের প্রতিটি অংশ, খাওয়া থেকে কেনাবেচা পর্যন্ত, নাগালের মধ্যে থাকা এক আদর্শ হয়ে উঠেছে। মক্কাবাসীরা যে মানবিকতাকে বিদ্রূপ করেছিল, সেটাই তাঁকে কুরআনের ভাষায় ৩৩:২১ আয়াতে এক সুন্দর আদর্শ বানায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Charge of Sorcery",
          "bn": "যাদুর অপবাদ"
        },
        "p": [
          {
            "en": "The objection ends with an insult aimed not at the message but at those who followed it: you follow none but a man mashur, bewitched. Al-Muyassar reads mashur as a man in whom magic has taken hold and overcome his mind. This is the primary sense: a man under a spell, his reason no longer his own, so that whoever trusts him is trusting a broken instrument. It is a way of dismissing every word he says without answering a single one of them.",
            "bn": "আপত্তিটা শেষ হয় এক কটাক্ষ দিয়ে, যা নবীর বার্তার দিকে নয়, তাক করা হয় তাঁর অনুসারীদের দিকে: তোমরা তো এক 'মাসহুর', যাদুগ্রস্ত লোকেরই অনুসরণ করছ। মুয়াসসার 'মাসহুর' পড়েন এমন লোক, যার উপর যাদু ভর করেছে ও তার বুদ্ধিকে কাবু করে ফেলেছে। এটাই প্রধান অর্থ: এক লোক যাদুর প্রভাবে, যার বিবেক আর তার নিজের নেই, ফলে যে তাকে বিশ্বাস করে সে বিশ্বাস করছে এক ভাঙা যন্ত্রকে। তার একটি কথারও জবাব না দিয়েই সব কথা উড়িয়ে দেওয়ার এ এক কৌশল।"
          },
          {
            "en": "Other readings sit alongside it. Al-Baghawi glosses mashur first as makhdu', deceived or taken in; then reports a second view, masruf 'ani-l-haqq, one turned away from the truth. Ibn Kathir, listing the charges thrown at the Prophet, gathers them together: they called him a sorcerer, or bewitched, or crazy, or a liar, or a poet. The commentators do not force these into one meaning. They let bewitched, deceived, and turned from the truth stand as the range the word carried, with bewitched foremost.",
            "bn": "এর পাশে আরও কিছু পড়া আছে। বাগাভী 'মাসহুর'-এর প্রথম অর্থ করেন 'মাখদূ', মানে প্রতারিত, ধোঁকা খাওয়া লোক; এরপর দ্বিতীয় মত আনেন, 'মাসরূফ আনিল হক্ক', মানে সত্য থেকে সরিয়ে দেওয়া একজন। ইবন কাসীর নবীর দিকে ছোড়া অপবাদগুলো একসঙ্গে গোনেন: তারা তাঁকে বলেছে যাদুকর, বা যাদুগ্রস্ত, বা পাগল, বা মিথ্যুক, বা কবি। তাফসীরকারেরা এগুলোকে এক অর্থে চেপে দেন না। তাঁরা যাদুগ্রস্ত, প্রতারিত ও সত্য থেকে বিমুখ— এই তিন অর্থকেই শব্দটির পরিসর হিসেবে দাঁড়াতে দেন, যার আগে থাকে যাদুগ্রস্ত।"
          },
          {
            "en": "What none of the readings can supply is a reason. As-Sa'di makes the sharpest observation here: they said this while they knew the perfection of his intellect, the excellence of his speech, and his freedom from every fault worth naming. The charge of sorcery was not a diagnosis; it was a way to be rid of a man they could not answer. When an argument cannot be met, it is easier to declare its speaker unwell than to weigh what he actually said.",
            "bn": "কোনো পড়াই যা জোগাতে পারে না, তা হলো একটা কারণ। সাদী এখানে সবচেয়ে তীক্ষ্ণ কথাটা বলেন: তারা এ কথা বলেছিল যখন তারা জানত তাঁর বুদ্ধির পূর্ণতা, তাঁর কথার সৌন্দর্য, আর নিন্দার যোগ্য প্রতিটি দোষ থেকে তাঁর মুক্তি। যাদুর অপবাদ কোনো রোগের রায় ছিল না; ছিল যে মানুষটির জবাব তারা দিতে পারছিল না, তার হাত থেকে রেহাই পাওয়ার পথ। যুক্তির জবাব যখন দেওয়া যায় না, তখন বক্তাকে অসুস্থ ঘোষণা করা তার কথা ওজন করার চেয়ে সহজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Wrongdoing, Not Confusion",
          "bn": "জুলুম, সংশয় নয়"
        },
        "p": [
          {
            "en": "The verse does not call these speakers doubters or the confused; it calls them az-zalimun, the wrongdoers. As-Sa'di draws the line exactly: what drove them to speak was their wrongdoing, not any genuine confusion on their part. At-Tabari identifies them as the polytheists speaking to the believers, telling the faithful that in following Muhammad they follow only a bewitched man. The name the Qur'an gives the speakers already carries its verdict on the speech.",
            "bn": "আয়াত এই বক্তাদের সন্দিহান বা বিভ্রান্ত বলে না; বলে 'আয-যালিমূন', যালিমরা। সাদী রেখাটা ঠিক টেনে দেন: তাদের এ কথা বলতে ঠেলে দিয়েছিল তাদের জুলুম, তাদের কোনো সত্যিকারের সংশয় নয়। তাবারী এদের চিহ্নিত করেন মুমিনদের উদ্দেশে কথা বলা মুশরিক হিসেবে, যারা মুমিনদের বলছে, মুহাম্মাদকে অনুসরণ করে তোমরা কেবল এক যাদুগ্রস্ত লোকেরই পিছু নিচ্ছ। কুরআন বক্তাদের যে নাম দেয়, তার মধ্যেই সেই কথার ব্যাপারে রায় লেখা আছে।"
          },
          {
            "en": "This must be said plainly, in what the verse condemns and in what it does not. The verse records the words of a group of deniers in Makkah and names their sin; it describes what the text describes and licenses nothing against any living person or community. It is no warrant to brand people today as bewitched, deceived, or astray for holding a different view, nor to borrow the wrongdoers' tactic of dismissing a person instead of answering an argument. The lesson faces inward, at how I judge, not outward as a label to hand out.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, আয়াত যা নিন্দা করে আর যা করে না, দুই দিকেই। আয়াতটি মক্কার একদল অস্বীকারকারীর কথা লিপিবদ্ধ করে আর তাদের গুনাহের নাম দেয়; আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে, আর কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। ভিন্ন মত রাখার জন্য আজ কাউকে যাদুগ্রস্ত, প্রতারিত বা পথভ্রষ্ট বলে দাগিয়ে দেওয়ার এটি কোনো ছাড়পত্র নয়, যুক্তির জবাব না দিয়ে মানুষকে উড়িয়ে দেওয়ার সেই যালিমি কৌশল ধার করারও নয়। শিক্ষাটা ভেতরের দিকে মুখ করা, আমি কীভাবে বিচার করি সেদিকে, বাইরের দিকে ছুড়ে দেওয়া কোনো লেবেল নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Faces and Wealth, or Hearts",
          "bn": "চেহারা-সম্পদ, নাকি অন্তর"
        },
        "p": [
          {
            "en": "The tafsir consulted here attach no hadith to this verse; the narration below is not tied to 25:8 by any of them, but it names the very scale the wrongdoers refused. Muslim records from Abu Hurayrah (RA) that the Messenger of God (peace be upon him) said: Verily Allah does not look to your faces and your wealth, but He looks to your hearts and your deeds. This is in the Sahih of Muslim, sound by its collector's standard.",
            "bn": "এখানে যে তাফসীরগুলো দেখা হয়েছে, তারা কেউ এ আয়াতের সঙ্গে কোনো হাদীস জোড়েনি; নিচের বর্ণনাটিও তাদের কারও মতে ২৫:৮ আয়াতের সঙ্গে যুক্ত নয়, তবে যালিমরা যে মাপকাঠি অস্বীকার করেছিল, তা এতে ঠিক নাম ধরে আসে। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে, আল্লাহর রসূল ﷺ বলেছেন: নিশ্চয় আল্লাহ তোমাদের চেহারা আর তোমাদের সম্পদের দিকে তাকান না, বরং তিনি তাকান তোমাদের অন্তর আর আমলের দিকে। এটি সহীহ মুসলিমের হাদীস, সংকলকের মানদণ্ডে সহীহ।"
          },
          {
            "en": "Set that beside the demand of 25:8 and the answer is complete. The Makkans wanted the messenger measured by faces and wealth, by treasure heaped on him and a garden at his door. The hadith says God weighs neither, and weighs instead the heart and what it does. A man walking to market with nothing in his hands may carry more before God than the man behind gates of gold. The objectors were sorting by the wrong ledger, and the sorting itself was the error.",
            "bn": "এ কথা ২৫:৮ আয়াতের দাবির পাশে রাখুন, জবাব পূর্ণ হয়ে যায়। মক্কাবাসীরা চেয়েছিল রসূলকে মাপা হোক চেহারা আর সম্পদ দিয়ে, তার উপর স্তূপ করা ধন আর দুয়ারের বাগান দিয়ে। হাদীস বলছে, আল্লাহ এর কোনোটাই ওজন করেন না, বরং ওজন করেন অন্তর আর তার আমল। খালি হাতে বাজারে হাঁটা এক মানুষ আল্লাহর কাছে হয়তো সোনার ফটকের আড়ালের মানুষটির চেয়ে বেশি ভার বহন করে। আপত্তিকারীরা ভুল খাতায় হিসাব কষছিল, আর সেই হিসাব কষাটাই ছিল ভুল।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Chose to Withhold",
          "bn": "যা তিনি রেখে দিলেন"
        },
        "p": [
          {
            "en": "Could God have granted their list? Ibn Kathir answers that all of this, the treasure, the garden, the descending angel, is easy for God, but He had a wisdom in leaving it, and His is the conclusive proof, lahu-l-hujjatu-l-balighah. The withholding was not inability; it was choice. And the very next passage lifts the matter higher: 25:10 declares blessed is He who, if He willed, could give you better than that, gardens beneath which rivers flow, and palaces. The gift they demanded was small beside what He can give and, Ibn Kathir notes from Mujahid, could give even in this world.",
            "bn": "আল্লাহ কি তাদের ফর্দ পূরণ করতে পারতেন? ইবন কাসীর জবাব দেন, এসব কিছুই আল্লাহর জন্য সহজ, ধন হোক, বাগান হোক, বা নেমে আসা ফেরেশতা, কিন্তু তা রেখে দেওয়ার মধ্যে তাঁর হিকমত ছিল, আর তাঁরই আছে চূড়ান্ত দলিল। রেখে দেওয়াটা অক্ষমতা ছিল না; ছিল পছন্দ। আর ঠিক পরের আয়াত বিষয়টাকে আরও উঁচুতে তোলে: ২৫:১০ আয়াত ঘোষণা করে, মহাকল্যাণময় তিনি, যিনি চাইলে তোমাকে এর চেয়ে ভালো দিতে পারতেন, এমন বাগান যার নিচ দিয়ে নদী বয়, আর প্রাসাদ। তারা যে উপহার চেয়েছিল, তিনি যা দিতে পারেন তার পাশে তা সামান্য, আর ইবন কাসীর মুজাহিদের সূত্রে বলেন, তা এই দুনিয়াতেও দিতে পারতেন।"
          },
          {
            "en": "So the refusal to send treasure was itself an argument. Had a garden and a fortune arrived, faith would have become a transaction, and the message would have been believed for its packaging rather than its truth. God left the messenger plain on purpose, so that whoever followed him followed the truth of what he brought. The question the verse leaves is not whether guidance can afford gold, but whether I will accept the truth when it comes to me with empty hands.",
            "bn": "তাই ধন না পাঠানোর সিদ্ধান্তটাই ছিল একটা যুক্তি। বাগান আর সম্পদ এসে গেলে ঈমান হয়ে যেত এক লেনদেন, আর বার্তাটা বিশ্বাস করা হতো তার মোড়কের জন্য, সত্যের জন্য নয়। আল্লাহ ইচ্ছে করেই রসূলকে সাদামাটা রাখলেন, যাতে যে তাঁকে অনুসরণ করে সে অনুসরণ করে তাঁর আনা সত্যকেই। আয়াত যে প্রশ্ন রেখে যায় তা এই নয় যে হিদায়াত সোনার খরচ চালাতে পারে কিনা, বরং এই— সত্য যখন খালি হাতে আমার কাছে আসে, আমি কি তা কবুল করব?"
          }
        ]
      }
    ]
  },
  "25:25": {
    "sections": [
      {
        "h": {
          "en": "Set Right After Paradise",
          "bn": "জান্নাতের ঠিক পরেই"
        },
        "p": [
          {
            "en": "The verse just before this leaves the companions of Paradise in the best of settlements, at their ease (25:24). Then, without a pause, the Qur'an turns the eye to something else entirely: wa-yawma tashaqqaqu s-samaʾu bi-l-ghamam, the Day the heaven splits open with the clouds. As-Sa'di reads the whole passage as God telling of the greatness of the Day of Resurrection and what it holds of hardship and distress and things that shake the hearts. The scene is placed here to be looked at, not skimmed past.",
            "bn": "এর আগের আয়াত জান্নাতবাসীদের রেখে যায় উত্তম বাসস্থানে, আরামের অবস্থায় (২৫:২৪)। এরপর কোনো বিরতি ছাড়াই কুরআন চোখ ফেরায় একেবারে ভিন্ন কিছুর দিকে: ওয়া ইয়াওমা তাশাক্কাকুস সামাউ বিল গামাম, যেদিন মেঘসহ আকাশ বিদীর্ণ হবে। সাদী গোটা অংশটিকে পড়েন এভাবে: আল্লাহ এখানে কিয়ামতের দিনের ভয়াবহতা এবং তাতে যে কঠিনতা, উৎকণ্ঠা আর হৃদয় কাঁপানো ব্যাপার আছে তা জানাচ্ছেন। দৃশ্যটা এখানে বসানো হয়েছে চোখ মেলে দেখার জন্য, দ্রুত পেরিয়ে যাওয়ার জন্য নয়।"
          },
          {
            "en": "There is a command tucked inside the wording: and the Day. Al-Qurtubi supplies the implied verb, wa-dhkur, remember, or call to mind, the Day the heaven splits open with the clouds. The verse is not filing a fact away for the record; it is handing the listener a scene to hold before the eyes. Everything that follows in this passage, up to the sovereignty that belongs to the Most Merciful, grows out of the sky's tearing open.",
            "bn": "শব্দের ভেতরে লুকিয়ে আছে একটি নির্দেশ: আর সেই দিন। কুরতুবী উহ্য ক্রিয়াটি জুড়ে দেন, ওয়াদকুর, অর্থাৎ স্মরণ করো সেই দিনকে যেদিন মেঘসহ আকাশ বিদীর্ণ হবে। আয়াতটি নথিভুক্ত করার মতো করে কোনো তথ্য জমা রাখছে না। এটি শ্রোতাকে হাতে তুলে দিচ্ছে চোখের সামনে ধরে রাখার মতো একটি দৃশ্য। এই অংশে এরপর যা কিছু আসে, দয়াময়ের কর্তৃত্ব পর্যন্ত সবই জন্ম নেয় আকাশ ফেটে যাওয়া থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sky Splits Away",
          "bn": "আকাশ ফাটে মেঘ ছেড়ে"
        },
        "p": [
          {
            "en": "Tashaqqaqu s-samaʾu bi-l-ghamam reads, on its surface, the heaven splits with the clouds. At-Tabari, al-Qurtubi and al-Baghawi all take the baʾ here to stand for ʿan, from: the heaven splits open from the clouds, splitting away to lay them bare. Al-Baghawi hands the Arabic ear its everyday parallel. You say I shot from the bow and I shot with the bow and mean the same thing, so the two particles trade places without altering the sense.",
            "bn": "তাশাক্কাকুস সামাউ বিল গামাম কথাটির উপরিতলের অর্থ: মেঘসহ আকাশ বিদীর্ণ হবে। তাবারী, কুরতুবী ও বাগভী এখানে বা অক্ষরটিকে ধরেন আন অর্থে, অর্থাৎ থেকে: আকাশ মেঘ থেকে বিদীর্ণ হবে, সরে গিয়ে মেঘকে উন্মুক্ত করবে। বাগভী আরবি কানের পরিচিত উদাহরণটি ধরিয়ে দেন। আপনি বলেন ধনুক থেকে তীর ছুড়লাম, আবার বলেন ধনুক দিয়ে তীর ছুড়লাম, দুটিতেই একই কথা। তাই দুটি অব্যয় জায়গা বদল করে, কিন্তু অর্থ পাল্টায় না।"
          },
          {
            "en": "There is a small difference in how the word is recited. At-Tabari records that the reciters of the Hijaz read it as tashshaqqaqu, doubling the shin, while the reciters of Kufa read it lighter, as tashaqqaqu. Both readings, he says, are widespread and sound, and whichever a reciter follows he has hit the mark, for the meaning is one and the same: the sky comes apart. The difference lies on the tongue, not in the event the word describes.",
            "bn": "শব্দটি পড়ার ক্ষেত্রে একটুখানি পার্থক্য আছে। তাবারী লিখে রাখেন, হিজাযের ক্বারীরা পড়েন তাশ্শাক্কাকু, শীন অক্ষরকে দ্বিত্ব করে, আর কুফার ক্বারীরা পড়েন হালকা করে, তাশাক্কাকু। তিনি বলেন, দুই পড়াই ব্যাপকভাবে প্রচলিত ও নির্ভরযোগ্য, ক্বারী যেটাই অনুসরণ করুন তিনি সঠিক পথেই আছেন, কারণ অর্থ একই: আকাশ ভেঙে টুকরো হয়ে যায়। পার্থক্যটা জিভের উচ্চারণে, শব্দটি যা বর্ণনা করছে সেই ঘটনায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Cloud Is",
          "bn": "সেই মেঘ কী"
        },
        "p": [
          {
            "en": "What is this ghamam? Al-Qurtubi and al-Baghawi describe it as a thin white cloud, fine as a light mist, and both add a striking note: a cloud of just this kind had appeared before only for the children of Israel, during their wandering in the wilderness, when God shaded them with it. On the Day of Resurrection the sky itself parts to reveal such a canopy. The word used here, ghamam, is the very word the Qur'an keeps for that earlier shade.",
            "bn": "এই গামাম বা মেঘ কী? কুরতুবী ও বাগভী একে বর্ণনা করেন পাতলা সাদা মেঘ হিসেবে, হালকা কুয়াশার মতো মিহি। দুজনেই একটি লক্ষণীয় কথা যোগ করেন: ঠিক এমন মেঘ আগে দেখা গিয়েছিল কেবল বনী ইসরাঈলের বেলায়, তাদের প্রান্তরে পথ হারিয়ে ঘোরার কালে, যখন আল্লাহ তা দিয়ে তাদের ছায়া দিয়েছিলেন। কিয়ামতের দিন আকাশ নিজেই ফেটে গিয়ে এমন এক চাঁদোয়া উন্মোচন করবে। এখানে ব্যবহৃত শব্দ গামাম সেই আগের ছায়ার জন্যও কুরআন যে শব্দ রাখে, ঠিক সেটাই।"
          },
          {
            "en": "Mujahid, as at-Tabari reports him, ties this cloud straight to another verse: do they await but that God should come to them in canopies of cloud, with the angels (2:210). The ghamam of our verse, he says, is that same ghamam in which God comes on the Day of Resurrection. Ibn Kathir carries the same link, calling the cloud here the canopies of that tremendous light which overwhelms all sight.",
            "bn": "তাবারী যেভাবে মুজাহিদের বরাত দেন, মুজাহিদ এই মেঘকে সরাসরি জুড়ে দেন আরেকটি আয়াতের সঙ্গে: তারা কি কেবল এরই অপেক্ষায় যে আল্লাহ মেঘের চাঁদোয়ায় তাদের কাছে আসবেন, সঙ্গে ফেরেশতারা (২:২১০)। তিনি বলেন, আমাদের আয়াতের গামাম সেই গামামই, যার ভেতরে আল্লাহ কিয়ামতের দিন আসবেন। ইবন কাসীর একই যোগসূত্র টানেন, এখানকার মেঘকে বলেন সেই বিশাল আলোর চাঁদোয়া যা দৃষ্টিকে অভিভূত করে দেয়।"
          },
          {
            "en": "Ma'arif al-Qurʾan, drawing on Bayan al-Qurʾan, pictures it as a canopy descending from the sky, bearing God's refulgence and ringed about with angels, and adds a careful qualification: this splitting of the sky is only an opening, not the shattering that comes when the Trumpet is blown to end the heavens and the earth. The commentators do not all press the image the same way, and the verse itself leaves the manner of it open.",
            "bn": "মাআরিফুল কুরআন, বয়ানুল কুরআনের উপর ভর করে, একে আঁকে আকাশ থেকে নেমে আসা এক চাঁদোয়া হিসেবে, যা বহন করছে আল্লাহর জ্যোতি আর যার চারপাশ ঘিরে আছে ফেরেশতারা। সঙ্গে যোগ করে একটি সতর্ক শর্ত: আকাশের এই বিদীর্ণ হওয়া কেবল একটি উন্মোচন, সেই চূর্ণবিচূর্ণ হওয়া নয় যা ঘটবে যখন আসমান-জমিন শেষ করতে শিঙায় ফুঁ দেওয়া হবে। তাফসিরকারেরা সবাই ছবিটিকে একইভাবে চাপ দেন না, আর আয়াত নিজেই এর ধরনটা খোলা রেখে দেয়।"
          },
          {
            "en": "Al-Qurtubi records a second way of picturing it. On this reading the cloud lies between the sky and the people below, so that when the cloud is rent the sky is rent along with it; and once the sky splits, its fabric comes undone, is rolled up, and the angels descend to a place made ready in its stead. He sets the two pictures side by side without forcing a choice between them. That is how the classical commentary handles a scene no living eye has ever seen.",
            "bn": "কুরতুবী ছবিটি আঁকার দ্বিতীয় একটি ধরনও লিখে রাখেন। এই পড়া অনুযায়ী মেঘটি থাকে আকাশ আর নিচের মানুষের মাঝখানে, ফলে মেঘ যখন ছিঁড়ে যায় তার সঙ্গে আকাশও ছিঁড়ে যায়; আর আকাশ একবার ফেটে গেলে তার গাঁথুনি খুলে আসে, গুটিয়ে নেওয়া হয়, আর ফেরেশতারা নেমে আসে তার বদলে তৈরি করা এক জায়গায়। তিনি দুটি ছবি পাশাপাশি রাখেন, কোনোটিকে বেছে নিতে জোর করেন না। যে দৃশ্য কোনো জীবিত চোখ কখনো দেখেনি, ধ্রুপদী তাফসির তার সঙ্গে এভাবেই আচরণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent Down in Ranks",
          "bn": "সারি বেঁধে অবতরণ"
        },
        "p": [
          {
            "en": "Wa-nuzzila l-malaʾikatu tanzila: and the angels are sent down in a descent. The verse closes on a verbal noun, tanzila, that does nothing but drive the verb home, sent down in a sending-down. As-Sa'di reads it as the angels of every heaven coming down and standing rank behind rank, whether in one rank that encircles the whole of creation or with each heaven forming a rank of its own. Either way, the sky fills with them.",
            "bn": "ওয়া নুযযিলাল মালাইকাতু তানযীলা: আর ফেরেশতাদের নামিয়ে দেওয়া হবে এক অবতরণে। আয়াতটি শেষ হয় একটি ক্রিয়াবাচক বিশেষ্যে, তানযীলা, যা কেবল ক্রিয়াটিকেই জোর দিয়ে গেঁথে দেয়, নামিয়ে দেওয়া হবে নামানোর ভঙ্গিতে। সাদী একে পড়েন এভাবে: প্রতিটি আসমানের ফেরেশতারা নেমে আসে সারি বেঁধে দাঁড়ায়, হয় একটিমাত্র সারিতে যা গোটা সৃষ্টিকে ঘিরে ফেলে, নয়তো প্রতিটি আসমান আলাদা এক সারি হয়ে। যেভাবেই হোক, আকাশ তাদের দিয়ে ভরে যায়।"
          },
          {
            "en": "The closing verb is itself recited in several ways. Al-Qurtubi notes that Ibn Kathir read wa-nunazzilu l-malaʾikata, we send down the angels, while most reciters read the passive wa-nuzzila, the angels are sent down. The verbal noun tanzila, he points out, sits with the passive reading, since the other would have called for a different form. Still other wordings are recorded from the Companions. The sense holds steady across every one of them: the angels are brought down, and their descent is stressed.",
            "bn": "শেষের ক্রিয়াটি নিজেই কয়েকভাবে পড়া হয়। কুরতুবী জানান, ইবন কাসীর পড়েছেন ওয়া নুনাযযিলুল মালাইকাতা, অর্থাৎ আমি ফেরেশতাদের নামাই, আর অধিকাংশ ক্বারী পড়েছেন কর্মবাচ্যে ওয়া নুযযিলা, অর্থাৎ ফেরেশতাদের নামিয়ে দেওয়া হয়। তিনি ধরিয়ে দেন, ক্রিয়াবাচক বিশেষ্য তানযীলা কর্মবাচ্য পড়ার সঙ্গে খাপ খায়, কারণ অন্য পড়াটি হলে ভিন্ন একটি রূপ লাগত। সাহাবিদের থেকে আরও কিছু পাঠও বর্ণিত আছে। সবগুলোর ভেতরেই অর্থ একই থাকে: ফেরেশতাদের নামানো হয়, আর তাদের অবতরণকে জোর দেওয়া হয়।"
          },
          {
            "en": "A longer report, traced back to Ibn ʿAbbas, fills in the picture: the lowest heaven splits and its dwellers come down, more in number than all the jinn and men on earth; then the second heaven, its dwellers more still; and so on up through every heaven, until the bearers of the Throne descend last of all. Ibn Kathir preserves this report but is candid about its chain, which turns on ʿAli ibn Zayd, a weak narrator whose accounts, he says, often carry real strangeness. He notes only that something close to it appears in the well-known hadith of the Trumpet.",
            "bn": "একটি দীর্ঘতর বর্ণনা, যার সূত্র পৌঁছায় ইবন আব্বাস (রাঃ) পর্যন্ত, ছবিটি পূর্ণ করে: সবচেয়ে নিচের আসমান ফেটে যায়, তার অধিবাসীরা নেমে আসে, সংখ্যায় তারা জমিনের সব জিন ও মানুষের চেয়ে বেশি। এরপর দ্বিতীয় আসমান, তার অধিবাসীরা আরও বেশি। এভাবে চলতে থাকে সাত আসমান পর্যন্ত, শেষে নেমে আসেন আরশ বহনকারীরা। ইবন কাসীর এই বর্ণনা রেখে দেন, তবে এর সনদ নিয়ে খোলাখুলি বলেন। এটি নির্ভর করে আলী ইবন যায়দের উপর, যিনি একজন দুর্বল রাবী, যাঁর বর্ণনায় প্রায়ই সত্যিকারের অসংগতি থাকে বলে তিনি জানান। তিনি কেবল উল্লেখ করেন, এর কাছাকাছি কিছু আছে শিঙা ফুঁকের সুপরিচিত হাদিসে।"
          },
          {
            "en": "Why so many, and why in ranks? Al-Qurtubi answers in a phrase: the angels come down from the heavens to the earth for the reckoning of the two weighty kinds, jinn and mankind. As-Sa'di draws the lesson out. These angels, for all their number and strength, descend in full submission to their Lord's command, none of them speaking except by His leave. If that is how the mightiest of creatures stand on that Day, what then of weak man?",
            "bn": "এত সংখ্যা কেন, আর সারি বেঁধেই বা কেন? কুরতুবী এক কথায় জবাব দেন: ফেরেশতারা আসমান থেকে জমিনে নেমে আসে দুই ভারী সৃষ্টির হিসাব নেওয়ার জন্য, অর্থাৎ জিন আর মানুষের। সাদী শিক্ষাটি টেনে বের করেন। এই ফেরেশতারা, এত সংখ্যা আর শক্তি সত্ত্বেও, নেমে আসে তাদের রবের হুকুমের সামনে পূর্ণ নতিস্বীকার করে, তাঁর অনুমতি ছাড়া কেউ মুখ খোলে না। সৃষ্টির সবচেয়ে শক্তিশালীরা যদি সেদিন এভাবে দাঁড়ায়, তবে দুর্বল মানুষের অবস্থা কী হবে?"
          }
        ]
      },
      {
        "h": {
          "en": "The Coming for Judgment",
          "bn": "বিচারের জন্য আগমন"
        },
        "p": [
          {
            "en": "The descent of the angels clears the way for what the passage is moving toward. Al-Muyassar states it plainly: God, blessed and exalted, comes to settle the judgment among His servants, in a coming that befits His majesty. Al-Qurtubi adds the guard that Sunni readers keep on verses like this. This coming is not to be grasped by what belongs to created things, their movement and their shifting from place to place, but only in the way that suits Him alone.",
            "bn": "ফেরেশতাদের অবতরণ পথ খুলে দেয় সেই দিকে, যার দিকে গোটা অংশ এগোচ্ছে। মুয়াসসার সোজা কথায় বলে: আল্লাহ, বরকতময় ও মহান, বান্দাদের মধ্যে বিচার মীমাংসা করতে আসেন, এমন এক আগমনে যা তাঁর মহিমার সঙ্গে মানানসই। কুরতুবী এমন আয়াতের উপর আহলে সুন্নাত যে সতর্কতা রাখেন তা যোগ করেন। এই আগমনকে সৃষ্টির বৈশিষ্ট্য দিয়ে বোঝা যাবে না, তাদের নড়াচড়া বা এক জায়গা থেকে আরেক জায়গায় সরে যাওয়া দিয়ে নয়, কেবল সেভাবেই যা একমাত্র তাঁরই সঙ্গে খাপ খায়।"
          },
          {
            "en": "So the torn sky, the white canopy and the ranked angels are not the event itself but its approach, the court assembling before the Judge arrives. The Qur'an holds the scene at exactly this point, letting the reader feel its gathering weight before any verdict is spoken. Nothing in the verse invites us to picture God in a bodily way; it invites us to grasp that the whole of creation is being brought to stand before its Lord.",
            "bn": "তাই ফাটা আকাশ, সাদা চাঁদোয়া আর সারিবদ্ধ ফেরেশতা ঘটনাটি নয়, বরং তার আগমনের ইঙ্গিত, বিচারক আসার আগে আদালত জড়ো হচ্ছে। কুরআন দৃশ্যটিকে ঠিক এই জায়গায় ধরে রাখে, কোনো রায় উচ্চারিত হওয়ার আগেই পাঠককে এর জমে ওঠা ভার অনুভব করতে দেয়। আয়াতের কোথাও আল্লাহকে দেহধারী রূপে কল্পনা করার আহ্বান নেই। আহ্বান আছে এটুকু বোঝার, যে গোটা সৃষ্টিকে তার রবের সামনে দাঁড় করানো হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Heavens Folded in a Hand",
          "bn": "মুঠোয় গুটানো আসমান"
        },
        "p": [
          {
            "en": "Ibn Kathir, reaching the sovereignty that on this Day belongs to the Most Merciful, cites a hadith recorded by Muslim. ʿAbdullah ibn ʿUmar reported that the Messenger of God ﷺ said: God will fold up the heavens on the Day of Resurrection, then take them in His right hand and say, I am the Sovereign; where are the tyrants, where are the proud? Then He will fold up the earths in His left hand and say, I am the Sovereign; where are the tyrants, where are the proud?",
            "bn": "ইবন কাসীর এই দিনে যে কর্তৃত্ব দয়াময়ের, সেখানে পৌঁছে মুসলিমে বর্ণিত একটি হাদিস উল্লেখ করেন। আবদুল্লাহ ইবন উমার (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: আল্লাহ কিয়ামতের দিন আসমানগুলোকে গুটিয়ে নেবেন, তারপর ডান হাতে ধরে বলবেন, আমিই বাদশাহ; কোথায় সেই দাম্ভিকরা, কোথায় সেই অহংকারীরা? তারপর জমিনগুলোকে বাঁ হাতে গুটিয়ে বলবেন, আমিই বাদশাহ; কোথায় সেই দাম্ভিকরা, কোথায় সেই অহংকারীরা?"
          },
          {
            "en": "Muslim placed it in his Sahih, so it carries his own grading of soundness, and its wording lands on the verse that follows this scene, where true sovereignty on that Day is named as belonging to the Most Merciful (25:26). Every crown that ever ruled is folded away with the heavens; the only kingship left standing is the kingship that was always real. That is the answer the whole scene has been building toward.",
            "bn": "মুসলিম একে রেখেছেন তাঁর সহীহ গ্রন্থে, তাই এটি তাঁর নিজের দেওয়া সহীহ মর্যাদা বহন করে। আর এর শব্দগুলো গিয়ে পড়ে এই দৃশ্যের পরের আয়াতের উপর, যেখানে সেদিনের প্রকৃত কর্তৃত্বকে বলা হয়েছে দয়াময়ের (২৫:২৬)। যত মুকুট কখনো রাজত্ব করেছে সব আসমানের সঙ্গে গুটিয়ে ফেলা হয়; টিকে থাকে কেবল সেই রাজত্ব যা বরাবরই আসল ছিল। গোটা দৃশ্য এই জবাবটির দিকেই এগিয়ে আসছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Hard for Some, Light for Others",
          "bn": "কারও কঠিন, কারও সহজ"
        },
        "p": [
          {
            "en": "As-Sa'di turns the majesty of the scene into a question each soul must answer. If the angels stand in awe, he asks, what of a weak human being, above all a servant who braved his Master with grave sins and came to this Day carrying wrongs he never repented of? The True King will judge him with a ruling that does not wrong him by the weight of an atom. That is why the passage calls it a Day hard upon the disbelievers: hard by its sheer severity, its every matter turned difficult for them.",
            "bn": "সাদী দৃশ্যের এই মহিমাকে বদলে দেন এমন এক প্রশ্নে, যার জবাব প্রতিটি প্রাণকে দিতে হবে। তিনি জিজ্ঞেস করেন, ফেরেশতারা যদি ভয়ে নত হয়ে দাঁড়ায়, তবে দুর্বল মানুষের কী হবে, বিশেষত সেই মানুষের যে বড় বড় গুনাহ নিয়ে নিজের মালিকের মুখোমুখি হয়েছে আর যে অন্যায়ের তওবা কখনো করেনি তা কাঁধে নিয়ে এই দিনে এসেছে? সত্যিকারের বাদশাহ তার বিচার করবেন এমন রায়ে, যা তাকে অণু পরিমাণও অন্যায় করবে না। এ কারণেই অংশটি একে বলে কাফিরদের জন্য কঠিন দিন: কঠিন তার তীব্রতায়, তাদের প্রতিটি ব্যাপার সেদিন কঠিন হয়ে ওঠে।"
          },
          {
            "en": "For the believer, as-Sa'di adds, the same Day is light and its load easy. And there is mercy folded into the very naming: the sovereignty of that Day is tied to the name ar-Rahman, the Most Merciful, whose mercy takes in every living thing and outruns His wrath. The Day that terrifies the heedless is ruled by the One whose mercy came first. The verse describes the reckoning as the Qur'an describes it; it hands no reader a verdict to pass on any living person or people.",
            "bn": "সাদী যোগ করেন, মুমিনের জন্য সেই একই দিন হালকা, তার বোঝা সহজ। আর নামকরণের ভেতরেই ভাঁজ করা আছে রহমত: সেদিনের কর্তৃত্ব বাঁধা হয়েছে আর-রহমান নামের সঙ্গে, যাঁর রহমত ঘিরে রাখে প্রতিটি জীবিত সত্তাকে আর যাঁর রহমত তাঁর গজবকে ছাড়িয়ে যায়। যে দিন গাফেলদের কাঁপিয়ে দেয়, সে দিনের মালিক তিনিই যাঁর রহমত সবার আগে। আয়াত হিসাবকে বর্ণনা করে ঠিক যেভাবে কুরআন তা বর্ণনা করে; এটি কোনো পাঠকের হাতে কোনো জীবিত মানুষ বা জাতির উপর চাপানোর মতো রায় তুলে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Scene Asks",
          "bn": "দৃশ্যটি কী চায়"
        },
        "p": [
          {
            "en": "Set against all this, the verse is doing something to the one who hears it. It is not adding an item to a list of beliefs; it is trying to move a heart from heedlessness to readiness. The sky above us looks fixed and permanent, and that very steadiness is what lulls us. The verse says: that same sky will tear open in its time, and every soul now busy with its distractions will stand in the open, ringed by ranks of angels, before the Judge.",
            "bn": "এই সবকিছুর মুখোমুখি রাখলে দেখা যায়, আয়াতটি শ্রোতার ভেতরে কিছু একটা করছে। এটি বিশ্বাসের তালিকায় নতুন কোনো ঘর যোগ করছে না; এটি চাইছে হৃদয়কে গাফলতি থেকে প্রস্তুতির দিকে সরাতে। মাথার উপরের আকাশ দেখতে স্থির আর চিরস্থায়ী, আর এই স্থিরতাই আমাদের আচ্ছন্ন করে রাখে। আয়াত বলছে: সেই একই আকাশ তার নির্ধারিত সময়ে ফেটে যাবে, আর নিজের নানা ব্যস্ততায় ডুবে থাকা প্রতিটি প্রাণ তখন খোলা ময়দানে দাঁড়াবে, সারি সারি ফেরেশতায় ঘেরা, বিচারকের সামনে।"
          },
          {
            "en": "The honest response is not a fear that freezes but a change that begins today, in the ordinary hours nobody sees. The people who will find that Day light did not meet it unprepared; they had been getting ready inside lives that looked much like ours. To read this verse well is to let its certainty reach past the argument and settle into how the next quiet day is actually spent.",
            "bn": "সৎ জবাব হলো এমন ভয় নয় যা জমিয়ে দেয়, বরং এমন বদল যা শুরু হয় আজ থেকে, কেউ দেখে না এমন সাধারণ সময়ের ভেতরে। যারা সেই দিনটিকে হালকা পাবে তারা অপ্রস্তুত অবস্থায় এর মুখোমুখি হয়নি; তারা প্রস্তুত হয়ে উঠছিল আমাদের মতোই দেখতে জীবনের ভেতরে। এই আয়াত ভালোভাবে পড়া মানে এর নিশ্চয়তাকে যুক্তির সীমা ছাড়িয়ে পৌঁছাতে দেওয়া, আর তা বসিয়ে দেওয়া পরের নিরিবিলি দিনটা আসলে কীভাবে কাটে তার ভেতরে।"
          }
        ]
      }
    ]
  },
  "25:47": {
    "sections": [
      {
        "h": {
          "en": "The First of a Chain",
          "bn": "একটি ধারাবাহিকতার প্রথমটি"
        },
        "p": [
          {
            "en": "Surah al-Furqan turns from argument to evidence at 25:45, where the reader is asked to consider how his Lord extends the shadow, and at 25:46, where He draws it back to Himself in an easy grasp. Our verse follows, and it opens a chain: wa huwa alladhi, and it is He who. The same opening recurs at 25:48 for the winds, at 25:53 for the two seas, and at 25:54 for the making of a human being from water. Every item on that chain is ordinary; the surah is not producing rarities but taking the most repeated facts of a day and asking who arranged them.",
            "bn": "সূরা আল-ফুরকান 25:45-এ যুক্তি থেকে প্রমাণের দিকে মোড় নেয়, যেখানে পাঠককে বলা হয় ভেবে দেখতে — তাঁর প্রতিপালক কীভাবে ছায়াকে দীর্ঘ করেন; আর 25:46-এ তিনি তা ধীরে ধীরে নিজের দিকে গুটিয়ে নেন। এরপরই আমাদের আয়াতটি আসে, আর এটি একটি ধারাবাহিকতা শুরু করে: ওয়া হুয়াল্লাযী — আর তিনিই সেই সত্তা যিনি। একই সূচনা ফিরে আসে 25:48-এ বাতাস নিয়ে, 25:53-এ দুই সমুদ্র নিয়ে, আর 25:54-এ পানি থেকে মানুষ সৃষ্টি নিয়ে। এই ধারাবাহিকতার প্রতিটি বিষয়ই একেবারে সাধারণ; সূরাটি বিরল কিছু হাজির করছে না, বরং একটি দিনের সবচেয়ে বারবার ঘটা ঘটনাগুলো তুলে ধরে জিজ্ঞেস করছে, এগুলো কে সাজিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Libas: The Night as Clothing",
          "bn": "লিবাস: রাত যেন পোশাক"
        },
        "p": [
          {
            "en": "The first of the three words is libas, and it is not a poetic invention. Libas is the ordinary Arabic for a garment, the very word used in 2:187 where spouses are called a clothing for one another. A garment covers what should not be exposed, fits the body it was made for, and is put on and taken off at set times. All three are true of the night, and 78:10 uses this same word of it.",
            "bn": "তিনটি শব্দের প্রথমটি হলো লিবাস, আর এটি কোনো কাব্যিক কল্পনা নয়। লিবাস আরবিতে পোশাকের সাধারণ শব্দ — ঠিক এই শব্দটিই 2:187-এ ব্যবহৃত হয়েছে, যেখানে স্বামী-স্ত্রীকে পরস্পরের জন্য পোশাক বলা হয়েছে। পোশাক যা ঢাকা থাকা উচিত তা ঢেকে রাখে, যে শরীরের জন্য তৈরি তার মাপে বসে, আর নির্দিষ্ট সময়ে পরা ও খোলা হয়। তিনটি কথাই রাতের ক্ষেত্রে সত্য, এবং 78:10-এ রাতের জন্য এই একই শব্দ ব্যবহার করা হয়েছে।"
          },
          {
            "en": "The commentators draw out the covering first. Darkness hides a person from being watched, quiets the traffic of the day, and makes rest possible by removing what would otherwise demand attention. It is worth noticing what is being called a mercy here: not the light but its withdrawal. Someone who resents the dark for shortening his working hours is arguing with something the Quran has just described as clothing handed to him.",
            "bn": "মুফাসসিরগণ প্রথমে ঢেকে রাখার দিকটিই তুলে ধরেন। অন্ধকার মানুষকে অন্যের দৃষ্টি থেকে আড়াল করে, দিনের ব্যস্ততাকে থামিয়ে দেয়, আর যা মনোযোগ দাবি করত তা সরিয়ে দিয়ে বিশ্রামকে সম্ভব করে। এখানে কোন জিনিসটিকে রহমত বলা হচ্ছে তা লক্ষ করার মতো: আলো নয়, বরং আলোর সরে যাওয়া। যে ব্যক্তি কর্মঘণ্টা ছোট করে দেওয়ার জন্য অন্ধকারের ওপর বিরক্ত, সে এমন এক জিনিস নিয়ে তর্ক করছে যাকে কুরআন এইমাত্র তার হাতে দেওয়া পোশাক বলল।"
          }
        ]
      },
      {
        "h": {
          "en": "Subat: Sleep as a Cutting Off",
          "bn": "সুবাত: ঘুম যেন কেটে যাওয়া"
        },
        "p": [
          {
            "en": "The second word is subat, and the translation you will read renders it rest. The root carries the sense of cutting off and ceasing; it is the root behind as-Sabt, the day of ceasing. Read that way, sleep is not merely comfort but a nightly suspension: movement stops, effort stops, and the person who was managing his affairs an hour ago manages nothing at all. 78:9 uses the same word of sleep in the same construction.",
            "bn": "দ্বিতীয় শব্দটি হলো সুবাত, আর অনুবাদে আপনি পাবেন 'বিশ্রাম'। মূল ধাতুটি কেটে যাওয়া ও থেমে যাওয়ার অর্থ বহন করে; আস-সাবত, অর্থাৎ থেমে যাওয়ার দিন, এই ধাতু থেকেই। এভাবে পড়লে ঘুম কেবল আরাম নয়, বরং প্রতি রাতের এক স্থগিতাদেশ: নড়াচড়া থামে, চেষ্টা থামে, আর এক ঘণ্টা আগে যে মানুষটি নিজের কাজকর্ম সামলাচ্ছিল সে আর কিছুই সামলায় না। 78:9-এ ঘুমের জন্য একই গঠনে এই একই শব্দ ব্যবহৃত হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nushur: The Word for Rising",
          "bn": "নুশূর: উত্থানের শব্দ"
        },
        "p": [
          {
            "en": "The third word is the one that changes the verse. The day is called nushur. The root means to spread out or scatter, and nushur is the Quran's own term for the resurrection — 67:15 ends with wa ilayhi an-nushur, and to Him is the rising. Something the reader does every morning has been given the name of the event he doubts. That is the argument of this verse, made in a single word rather than in a sentence.",
            "bn": "তৃতীয় শব্দটিই আয়াতটিকে বদলে দেয়। দিনকে বলা হয়েছে নুশূর। মূল ধাতুর অর্থ ছড়িয়ে দেওয়া বা বিস্তৃত করা, আর নুশূর কুরআনেরই ব্যবহৃত পুনরুত্থানের পরিভাষা — 67:15 শেষ হয় 'ওয়া ইলাইহিন-নুশূর' দিয়ে, অর্থাৎ তাঁর দিকেই উত্থান। পাঠক প্রতিদিন সকালে যা করে, তাকেই সেই ঘটনার নাম দেওয়া হয়েছে যা নিয়ে সে সন্দেহ করে। এটাই এই আয়াতের যুক্তি — একটি বাক্যে নয়, একটি শব্দে বলা।"
          },
          {
            "en": "The choice becomes clearer beside 78:11, which describes the same daylight as ma'ash, livelihood. Both are true; the day is when we earn. Surah an-Naba named the use, and Surah al-Furqan named the resemblance. In a surah whose surrounding verses answer people who deny being raised, the second name is the one doing the work — and 25:49, two verses after ours, presses it again by describing rain that brings a dead land back to life.",
            "bn": "78:11-এর পাশে রাখলে এই শব্দচয়ন আরও স্পষ্ট হয়, কারণ সেখানে এই একই দিনের আলোকে বলা হয়েছে মাআশ, অর্থাৎ জীবিকা। দুটোই সত্য; দিনেই আমরা উপার্জন করি। সূরা আন-নাবা কাজের দিকটির নাম দিল, আর সূরা আল-ফুরকান সাদৃশ্যের নাম দিল। যে সূরার আশপাশের আয়াতগুলো পুনরুত্থান অস্বীকারকারীদের জবাব দিচ্ছে, সেখানে দ্বিতীয় নামটিই কাজ করছে — আর আমাদের আয়াতের দুই আয়াত পরে 25:49 আবার সেই কথাই জোর দিয়ে বলে, বৃষ্টির বর্ণনা দিয়ে যা মৃত ভূমিকে জীবিত করে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Soul Taken and Returned",
          "bn": "প্রাণ নেওয়া ও ফিরিয়ে দেওয়া"
        },
        "p": [
          {
            "en": "The Quran states the connection elsewhere without any metaphor. 39:42 says that Allah takes the souls at the time of their death, and those that have not died He takes during their sleep; He keeps the ones for which He has decreed death and releases the others until an appointed term. 6:60 puts it in the daily frame: He takes your souls by night, knows what you have done by day, and revives you in it until a specified term is fulfilled.",
            "bn": "কুরআন অন্যত্র এই সম্পর্কটি কোনো রূপক ছাড়াই বলে দেয়। 39:42 বলে, আল্লাহ প্রাণ নিয়ে নেন তাদের মৃত্যুর সময়, আর যারা মরেনি তাদের প্রাণ নেন ঘুমের মধ্যে; যাদের জন্য মৃত্যুর ফয়সালা হয়েছে তাদের রেখে দেন এবং বাকিদের নির্ধারিত সময় পর্যন্ত ছেড়ে দেন। 6:60 বিষয়টিকে দৈনন্দিন কাঠামোয় রাখে: তিনিই রাতে তোমাদের প্রাণ নিয়ে নেন, দিনে তোমরা যা করেছ তা জানেন, আর নির্ধারিত মেয়াদ পূর্ণ হওয়া পর্যন্ত দিনেই তোমাদের আবার জাগিয়ে তোলেন।"
          },
          {
            "en": "So the nightly transaction is real and not merely a comparison. Every sleeper is handed over, every waking is a release granted, and one night the release will not be granted. Classical commentators read this verse as the daily lesson folded into that fact. What is being taught is not a fear of the bed but the correct reading of something that visits every one of us, every night, without a single exception.",
            "bn": "তাই রাতের এই লেনদেন সত্যিকারের, কেবল একটি তুলনা নয়। প্রত্যেক ঘুমন্ত মানুষকে সমর্পণ করা হয়, প্রতিটি জাগরণ এক অনুমোদিত মুক্তি, আর কোনো এক রাতে সেই মুক্তি দেওয়া হবে না। প্রাচীন মুফাসসিরগণ এই আয়াতকে সেই বাস্তবতার ভেতরে ভাঁজ করা প্রতিদিনের পাঠ হিসেবে পড়েন। এখানে বিছানার ভয় শেখানো হচ্ছে না; শেখানো হচ্ছে এমন এক ঘটনার সঠিক পাঠ, যা আমাদের প্রত্যেকের কাছে প্রতি রাতেই আসে, একটিও ব্যতিক্রম ছাড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Said at Both Ends",
          "bn": "দুই প্রান্তে যা বলা হয়"
        },
        "p": [
          {
            "en": "Al-Bukhari narrates from Hudhayfah ibn al-Yaman (RA) that when the Prophet ﷺ went to his bed he would say: in Your name, O Allah, I die and I live. And when he woke he would say: praise be to Allah who gave us life after He caused us to die, and to Him is the nushur. The waking words end on the very word of this verse, so the Sunnah has the reader say aloud what 25:47 states.",
            "bn": "ইমাম বুখারী হুযাইফা ইবনুল ইয়ামান (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ যখন বিছানায় যেতেন তখন বলতেন: হে আল্লাহ, আপনার নামেই আমি মরি ও বাঁচি। আর যখন জাগতেন তখন বলতেন: সমস্ত প্রশংসা আল্লাহর, যিনি আমাদের মৃত্যু দেওয়ার পর জীবন দিলেন, আর তাঁর দিকেই নুশূর। জাগরণের বাক্যটি এই আয়াতের সেই শব্দটিতেই শেষ হয়, অর্থাৎ সুন্নাহ পাঠককে মুখে বলিয়ে নেয় 25:47 যা বলছে।"
          },
          {
            "en": "That leaves the day itself. If the night was a garment and the sleep a cutting off, then the morning is a portion of life returned to a person who did not earn it back. Later in this same surah, 25:64 describes the servants of ar-Rahman as those who spend part of the night before their Lord prostrating and standing. The clothing is not wasted on them, and neither is the rising that follows it.",
            "bn": "তাহলে বাকি থাকে দিনটি নিজেই। রাত যদি হয় পোশাক আর ঘুম যদি হয় কেটে যাওয়া, তবে সকাল হলো এমন এক মানুষকে ফিরিয়ে দেওয়া জীবনের একটি অংশ, যে তা অর্জন করে ফিরে পায়নি। এই সূরারই পরের দিকে 25:64 রহমানের বান্দাদের বর্ণনা দেয় এভাবে — যারা রাতের একাংশ তাদের প্রতিপালকের সামনে সিজদায় ও দাঁড়িয়ে কাটায়। তাদের ক্ষেত্রে সেই পোশাকটিও বৃথা যায় না, তারপরের উত্থানটিও নয়।"
          }
        ]
      }
    ]
  },
  "25:58": {
    "sections": [
      {
        "h": {
          "en": "A Command After a Refusal",
          "bn": "প্রত্যাখ্যানের পরে এক নির্দেশ"
        },
        "p": [
          {
            "en": "Surah al-Furqan spends its middle stretch answering people who would not be answered. Three verses before this one, 25:55 describes them worshipping, instead of Allah, what can neither benefit them nor harm them. Then 25:56 limits the Prophet's ﷺ own role — a bringer of good tidings and a warner, nothing more — and in 25:57 he is told to say that he asks no payment for it. Only after the assignment has been stripped of both power and wages does this verse say where to lean.",
            "bn": "সূরা আল-ফুরকান তার মধ্যভাগ ব্যয় করে এমন লোকদের জবাব দিতে, যারা জবাব শুনতে রাজি নয়। এই আয়াতের তিন আয়াত আগে 25:55 তাদের বর্ণনা দেয় — তারা আল্লাহকে বাদ দিয়ে এমন কিছুর ইবাদত করে যা তাদের উপকারও করতে পারে না, ক্ষতিও করতে পারে না। এরপর 25:56 নবী ﷺ-এর নিজের ভূমিকাকে সীমিত করে দেয় — কেবল সুসংবাদদাতা ও সতর্ককারী, এর বেশি কিছু নয় — আর 25:57 আয়াতে তাঁকে বলতে বলা হয় যে এর জন্য তিনি কোনো প্রতিদান চান না। দায়িত্বটি থেকে ক্ষমতা ও পারিশ্রমিক দুটোই সরিয়ে নেওয়ার পরেই এই আয়াত বলে দেয়, ভর কোথায় রাখতে হবে।"
          },
          {
            "en": "The order matters. A man told that he cannot compel belief, cannot punish rejection and will not be paid for his trouble is a man who needs somewhere to put his weight. The verse gives him one, and the grammar is an imperative addressed to him alone: rely. as-Sa'di reads the command as covering every undertaking, not as a mood to be summoned at a crisis — the standing posture of the work rather than an emergency measure.",
            "bn": "ক্রমটি গুরুত্বপূর্ণ। যাকে বলা হয়েছে সে ঈমান চাপিয়ে দিতে পারবে না, প্রত্যাখ্যানের শাস্তি দিতে পারবে না, আর পরিশ্রমের বিনিময়ও পাবে না — তার নিজের ভার রাখার একটা জায়গা দরকার। আয়াতটি সেই জায়গা দেয়, আর ব্যাকরণে এটি কেবল তাঁকে উদ্দেশ করা এক আদেশ: ভরসা কর। আস-সা'দী এই আদেশকে পড়েন প্রতিটি কাজের ওপর বিস্তৃত হিসেবে, কোনো সংকটের মুহূর্তে ডেকে আনার মতো মেজাজ হিসেবে নয় — এটি কাজের স্থায়ী ভঙ্গি, জরুরি অবস্থার ব্যবস্থা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Hayy Who Does Not Die",
          "bn": "আল-হাইয়্য, যিনি মরেন না"
        },
        "p": [
          {
            "en": "The name al-Hayy also stands at the head of 2:255, right after the declaration of tawhid, and the article on that verse treats the name itself. What this verse adds is a relative clause that Ayat al-Kursi does not carry: alladhi la yamut, who does not die. It sounds redundant — the Living does not die — and it is not. Every other living support a person leans on is alive now and will not always be. The clause names the single feature that disqualifies all of them.",
            "bn": "আল-হাইয়্য নামটি 2:255 আয়াতেও তাওহীদের ঘোষণার ঠিক পরেই আসে, আর সেই আয়াতের প্রবন্ধে নামটি নিয়েই আলোচনা আছে। এই আয়াত যা যোগ করে তা হলো এমন একটি বিশেষণ-বাক্য, যা আয়াতুল কুরসীতে নেই: আল্লাযী লা ইয়ামূত — যিনি মরেন না। শুনতে বাহুল্য মনে হয় — চিরঞ্জীব তো মরেনই না — কিন্তু তা নয়। মানুষ যত জীবিত অবলম্বনের ওপর ভর দেয়, তার প্রতিটি এখন জীবিত এবং চিরকাল থাকবে না। এই বাক্যাংশটি সেই একটিমাত্র বৈশিষ্ট্যের নাম নেয়, যা তাদের সবাইকে অযোগ্য করে দেয়।"
          },
          {
            "en": "55:26-27 puts it as plainly as language allows: everyone upon the earth will perish, and there will remain the Face of your Lord, Owner of Majesty and Honour. 28:88 says the same. Set beside 25:55, the contrast is complete — on one side objects that were never alive, on the other a patron who cannot die. Trust misplaced is not merely disappointed later; it was aimed at something perishable from the start.",
            "bn": "55:26-27 কথাটি ভাষার সাধ্যমতো সরাসরি বলে: পৃথিবীর ওপর যারা আছে সবাই ধ্বংস হবে, আর অবশিষ্ট থাকবে তোমার রবের চেহারা, যিনি মহিমা ও সম্মানের অধিকারী। 28:88 একই কথা বলে। 25:55 আয়াতের পাশে রাখলে বৈসাদৃশ্যটি পূর্ণ হয় — একদিকে এমন বস্তু যা কখনো জীবিতই ছিল না, অন্যদিকে এমন অভিভাবক যিনি মরতে পারেন না। ভুল জায়গায় রাখা আস্থা কেবল পরে হতাশ করে তা নয়; সেটি শুরু থেকেই এমন কিছুর দিকে তাক করা ছিল যা ধ্বংসশীল।"
          }
        ]
      },
      {
        "h": {
          "en": "And Glorify with His Praise",
          "bn": "আর তাঁর প্রশংসাসহ পবিত্রতা ঘোষণা কর"
        },
        "p": [
          {
            "en": "The second command arrives without a pause: wa sabbih bihamdih. Tasbih declares Him free of every defect; hamd praises Him for every perfection. Joined, they empty and fill in one breath — no flaw in Him, every good from Him. Placed directly after the command to rely, praise is what reliance sounds like out loud. 17:44 states that the whole of creation is already doing this, in a manner we do not understand.",
            "bn": "দ্বিতীয় আদেশটি কোনো বিরতি ছাড়াই আসে: ওয়া সাব্বিহ বিহামদিহ। তাসবীহ তাঁকে প্রতিটি ত্রুটি থেকে মুক্ত ঘোষণা করে; হামদ তাঁকে প্রতিটি পূর্ণতার জন্য প্রশংসা করে। একসাথে তারা এক নিঃশ্বাসে খালি করে ও ভরে দেয় — তাঁর মধ্যে কোনো ত্রুটি নেই, আর সব কল্যাণ তাঁর কাছ থেকে। ভরসার আদেশের ঠিক পরে বসিয়ে দেওয়ায় প্রশংসাই হয়ে ওঠে সেই ভরসার উচ্চারিত রূপ। 17:44 বলে, গোটা সৃষ্টি ইতিমধ্যেই তা করছে, এমন এক পদ্ধতিতে যা আমরা বুঝি না।"
          },
          {
            "en": "al-Bukhari narrates from Abu Hurayrah (RA) that whoever says subhan Allahi wa bihamdih a hundred times in a day has his sins wiped away even if they were like the foam of the sea. The phrase in that hadith is the phrase in this verse. A command that could have remained abstract was given a form short enough to carry through an ordinary working day, and repeatable enough that it does not depend on a mood.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, যে ব্যক্তি দিনে একশ বার সুবহানাল্লাহি ওয়া বিহামদিহ বলে, তার গুনাহ মুছে দেওয়া হয় — যদিও তা সমুদ্রের ফেনার মতো হয়। সেই হাদীসের বাক্যটিই এই আয়াতের বাক্য। যে আদেশ বিমূর্ত থেকে যেতে পারত, তাকে এমন একটি রূপ দেওয়া হয়েছে যা সাধারণ কর্মদিবসের ভেতর বয়ে নেওয়ার মতো ছোট, আর এত সহজে পুনরাবৃত্তিযোগ্য যে তা মেজাজের ওপর নির্ভর করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sufficient as Aware of Sins",
          "bn": "গুনাহ সম্পর্কে অবগত হিসেবে যথেষ্ট"
        },
        "p": [
          {
            "en": "The closing clause is unexpected: and sufficient is He, with the sins of His servants, as Aware. Khabir is knowledge of what is inward and hidden, not merely of what shows. as-Sa'di draws the consolation out of it. The wrongdoers will not slip past justice, and the one carrying the message is not required to keep their file. He cannot put faith into a heart, and he is not the registrar of his opponents' offences. Both of those belong to Allah.",
            "bn": "শেষ বাক্যাংশটি অপ্রত্যাশিত: তিনি তাঁর বান্দাদের গুনাহ সম্পর্কে অবগত হিসেবে যথেষ্ট। খাবীর মানে ভেতরের ও গোপন বিষয়ের জ্ঞান, কেবল যা প্রকাশ পায় তার নয়। আস-সা'দী এখান থেকেই সান্ত্বনাটি বের করে আনেন। জালিমরা ন্যায়বিচার এড়িয়ে যেতে পারবে না, আর যিনি বার্তা বহন করছেন তাঁর ওপর তাদের হিসাব রাখার দায়িত্ব নেই। তিনি কারও অন্তরে ঈমান ঢুকিয়ে দিতে পারেন না, আর তিনি তাঁর বিরোধীদের অপরাধের হিসাবরক্ষকও নন। এ দুটোই আল্লাহর।"
          },
          {
            "en": "The same clause turns on the reader as it turns off the ledger. The sins named are those of His servants — a phrase that excludes nobody who is reading it. So the verse takes the accounting of other people out of your hands and refuses to take your own out with it. That is why it steadies and unsettles in a single line: you are relieved of judging them, and reminded that nothing of yours is unseen.",
            "bn": "যে বাক্যাংশটি অন্যের খাতা বন্ধ করে দেয়, সেটিই পাঠকের দিকে ফেরে। যাদের গুনাহের কথা বলা হয়েছে তারা 'তাঁর বান্দা' — এই শব্দবন্ধ পাঠকদের কাউকেই বাদ দেয় না। ফলে আয়াতটি অন্য মানুষের হিসাব আপনার হাত থেকে নিয়ে নেয়, কিন্তু আপনার নিজের হিসাবটি তার সাথে নিতে অস্বীকার করে। এ কারণেই এক পঙক্তিতেই এটি স্থির করে এবং অস্বস্তিতেও ফেলে: তাদের বিচার করার ভার থেকে আপনি মুক্ত, আর আপনার নিজের কিছুই যে অদেখা নয় তা স্মরণ করিয়ে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "How Reliance Is Practised",
          "bn": "নির্ভরতার চর্চা কেমন"
        },
        "p": [
          {
            "en": "Tawakkul is not the abandonment of means. 3:159 places the command after the decision — consult them in the matter, and when you have decided, then rely upon Allah. The consulting, the deciding and the doing all stand; what changes is where the outcome is lodged. 11:123 and 33:3 repeat the instruction in the same shape, and 65:2-3 sets it beside a promise of a way out and provision from where one does not expect, telling the one who relies that Allah is sufficient for him.",
            "bn": "তাওয়াক্কুল মানে উপকরণ ছেড়ে দেওয়া নয়। 3:159 আদেশটি রাখে সিদ্ধান্তের পরে — বিষয়টি নিয়ে তাদের সাথে পরামর্শ কর, আর যখন সিদ্ধান্ত নিয়ে ফেল তখন আল্লাহর ওপর ভরসা কর। পরামর্শ, সিদ্ধান্ত ও কাজ — সবই বহাল থাকে; যা বদলায় তা হলো ফলাফলটি কোথায় জমা রাখা হচ্ছে। 11:123 ও 33:3 একই আকারে নির্দেশটি পুনরাবৃত্তি করে, আর 65:2-3 আয়াতদুটি এই নির্দেশের পাশেই রাখে বেরিয়ে আসার পথ ও অকল্পনীয় জায়গা থেকে রিযিকের প্রতিশ্রুতি — আর যে ভরসা করে তার জন্য বলে: আল্লাহই তার জন্য যথেষ্ট।"
          },
          {
            "en": "In practice the verse puts two questions to an ordinary week. What am I actually leaning on — a salary, a contact, a reputation, a body that still works? And what comes out of my mouth when it wobbles? This verse answers both in one line: move the weight onto the One who will still be there, and keep His praise on your tongue while you do it.",
            "bn": "বাস্তবে আয়াতটি একটি সাধারণ সপ্তাহের সামনে দুটি প্রশ্ন রাখে। আমি আসলে কীসের ওপর ভর দিয়ে আছি — বেতন, পরিচিতি, সুনাম, নাকি এখনো সচল একটি শরীর? আর সেটি যখন টলে ওঠে তখন আমার মুখ থেকে কী বের হয়? এই আয়াত এক পঙক্তিতেই দুটোরই জবাব দেয়: ভারটি সরিয়ে তাঁর ওপর রাখো, যিনি তখনো থাকবেন, আর সেই কাজ করতে করতে তাঁর প্রশংসা জিহ্বায় ধরে রাখো।"
          }
        ]
      }
    ]
  },
  "25:63": {
    "sections": [
      {
        "h": {
          "en": "Servants of the Most Merciful",
          "bn": "রহমানের বান্দারা"
        },
        "p": [
          {
            "en": "The verse opens a portrait that runs to the end of the surah, and the title it gives is deliberate: 'ibad ar-Rahman, the servants of the Most Merciful. Of all the divine names available, ar-Rahman is chosen, so the people about to be described are identified by their relation to mercy. Everything listed after this belongs under that heading, which is why the first item is about how they treat other people.",
            "bn": "এই আয়াত দিয়ে শুরু হওয়া বর্ণনা সূরার শেষ পর্যন্ত চলে, আর এতে দেওয়া উপাধিটি উদ্দেশ্যপ্রণোদিত: 'ইবাদুর রহমান — পরম করুণাময়ের বান্দারা। আল্লাহর যত নাম ছিল, তার মধ্য থেকে বেছে নেওয়া হয়েছে 'আর-রহমান'; ফলে যাদের বর্ণনা এখন শুরু হচ্ছে, তাদের পরিচয় নির্ধারিত হচ্ছে রহমতের সঙ্গে তাদের সম্পর্ক দিয়ে। এর পরে তালিকাভুক্ত সবকিছুই এই শিরোনামের অধীন — আর সে কারণেই প্রথম বিষয়টি হলো তারা অন্য মানুষের সঙ্গে কেমন আচরণ করে।"
          },
          {
            "en": "The first mark is physical: alladhina yamshuna 'alal-ardi hawnan, who walk upon the earth in hawn. The word means gentleness and ease, an unhurried and undemanding way of moving. The commentators are clear that it does not mean an affected slowness or a deliberately humble shuffle; several of the early scholars criticised putting on a show of humility in one's gait. What is described is the absence of swagger, not the performance of piety.",
            "bn": "প্রথম চিহ্নটি শারীরিক: আল্লাযীনা ইয়ামশূনা 'আলাল আরদি হাওনা — যারা পৃথিবীতে চলে 'হাওন'-এর সঙ্গে। শব্দটির অর্থ কোমলতা ও স্বাচ্ছন্দ্য — তাড়াহুড়াহীন, দাবিহীন এক চলার ধরন। মুফাসসিরগণ স্পষ্ট করে বলেন, এর অর্থ কৃত্রিম মন্থরতা বা ইচ্ছাকৃত বিনয়ী পদক্ষেপ নয়; পূর্ববর্তী কয়েকজন আলিম চলার ভঙ্গিতে বিনয়ের প্রদর্শনীকে সমালোচনা করেছেন। এখানে বর্ণিত হচ্ছে দম্ভের অনুপস্থিতি, ধার্মিকতার অভিনয় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Jahil",
          "bn": "'জাহিল' শব্দটি"
        },
        "p": [
          {
            "en": "The second half addresses provocation: wa idha khatabahumul-jahiluna qalu salama. When the jahilun address them, they say salam. Jahl in Quranic usage is not primarily a lack of information. It is the recklessness, arrogance and hot temper that the pre-Islamic period was named for. The jahil here is not someone who does not know a fact; he is someone behaving badly on purpose.",
            "bn": "দ্বিতীয় অংশটি উসকানির প্রসঙ্গে: ওয়া ইযা খাতাবাহুমুল জাহিলূনা কালূ সালামা। জাহিলরা যখন তাদের সম্বোধন করে, তারা বলে 'সালাম'। কুরআনি ব্যবহারে 'জাহল' মূলত তথ্যের অভাব বোঝায় না। এটি বোঝায় সেই বেপরোয়া মনোভাব, অহংকার ও উগ্র মেজাজ, যার নামেই জাহিলিয়াতের যুগের নামকরণ। এখানে 'জাহিল' সেই ব্যক্তি নয় যে কোনো তথ্য জানে না; বরং সে-ই, যে জেনেবুঝে খারাপ আচরণ করছে।"
          },
          {
            "en": "The response, qalu salama, is read by the commentators in more than one way, and the readings agree in substance. Some take it as the greeting of peace; the majority explain it as words free of harm and sin, a reply that closes the exchange without returning the insult. It is not surrender and not agreement. It is a refusal to hand over control of one's own speech to whoever happens to be shouting.",
            "bn": "'কালূ সালামা' — এই জবাবটিকে মুফাসসিরগণ একাধিকভাবে পড়েন, আর পাঠগুলো মূল অর্থে একমত। কেউ একে নেন শান্তির অভিবাদন হিসেবে; অধিকাংশ ব্যাখ্যা করেন ক্ষতি ও পাপমুক্ত কথা হিসেবে — এমন উত্তর, যা অপমান ফিরিয়ে না দিয়েই কথোপকথনটি শেষ করে দেয়। এটি আত্মসমর্পণও নয়, সম্মতিও নয়। এটি হলো নিজের কথার নিয়ন্ত্রণ যে-কেউ চিৎকার করছে তার হাতে তুলে দিতে অস্বীকার করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Answering Years of Mockery",
          "bn": "বছরের পর বছর বিদ্রূপের জবাব"
        },
        "p": [
          {
            "en": "Surah al-Furqan is Makkan, and much of it records the taunting the Prophet ﷺ endured. In 25:41-42 the deniers are quoted asking whether this is the one Allah sent as a messenger, and claiming he almost turned them away from their gods. That is the atmosphere in which this description of the servants of the Most Merciful arrives, near the end of the surah, as the answer to everything the mockers have been saying.",
            "bn": "সূরা আল-ফুরকান মক্কী, আর এর বড় অংশজুড়ে লিপিবদ্ধ আছে নবী ﷺ যে বিদ্রূপ সহ্য করেছেন তার বিবরণ। 25:41-42-এ অস্বীকারকারীদের কথা উদ্ধৃত হয়েছে — এ-ই কি সে, যাকে আল্লাহ রাসূল করে পাঠিয়েছেন? আর তারা দাবি করে, সে প্রায় তাদের দেবতাদের থেকে সরিয়েই দিচ্ছিল। এই আবহেই সূরার শেষভাগে এসে পৌঁছায় রহমানের বান্দাদের এই বর্ণনা — বিদ্রূপকারীরা এতদিন যা বলে আসছিল, তার জবাব হিসেবে।"
          },
          {
            "en": "The list that follows interleaves character and worship rather than separating them. After this verse come those who pass the night in prostration and standing, those who fear the Fire, those who spend without extravagance or miserliness, and those who keep clear of shirk, murder and unlawful intimacy. The passage closes at 25:74 with their supplication for righteous families, and then with the reward promised for their patience.",
            "bn": "এর পরের তালিকা চরিত্র ও ইবাদতকে আলাদা না করে পরস্পরের সঙ্গে গেঁথে দেয়। এই আয়াতের পরে আসে তাদের কথা, যারা রাত কাটায় সিজদায় ও দাঁড়িয়ে; যারা জাহান্নামকে ভয় করে; যারা অপচয় বা কৃপণতা ছাড়াই ব্যয় করে; আর যারা শিরক, হত্যা ও অবৈধ সম্পর্ক থেকে দূরে থাকে। অংশটি 25:74-এ শেষ হয় সৎ পরিবারের জন্য তাদের দোয়া দিয়ে, আর তারপর আসে তাদের ধৈর্যের প্রতিশ্রুত প্রতিদান।"
          }
        ]
      },
      {
        "h": {
          "en": "Strength Under Control",
          "bn": "নিয়ন্ত্রিত শক্তি"
        },
        "p": [
          {
            "en": "The Prophet ﷺ embodied this before it was described. Anas ibn Malik (RA) reported, as recorded in al-Bukhari and Muslim, that he served him for years and was never rebuked with even a word of complaint about what he did or failed to do. Aishah (RA) is reported in the same collections to have said that he never struck anything with his hand, nor a woman, nor a servant, except when fighting in the path of Allah.",
            "bn": "নবী ﷺ এই গুণটি বর্ণিত হওয়ার আগেই তা জীবনে ধারণ করেছিলেন। আনাস ইবনে মালিক (রাঃ) থেকে বুখারী ও মুসলিমে বর্ণিত আছে যে তিনি বছরের পর বছর তাঁর খিদমত করেছেন, অথচ তিনি যা করেছেন বা করেননি তার জন্য কখনো একটি অনুযোগের কথাও শোনেননি। আয়িশা (রাঃ) থেকে একই সংকলনে বর্ণিত আছে, তিনি আল্লাহর পথে যুদ্ধ ছাড়া কখনো নিজ হাতে কোনো কিছুতে আঘাত করেননি — কোনো নারীকে নয়, কোনো খাদিমকেও নয়।"
          },
          {
            "en": "The restraint this verse praises is defined in the sunnah as power, not passivity. Al-Bukhari and Muslim record the Prophet ﷺ saying that the strong man is not the one who overcomes others in wrestling, but the one who controls himself when angry. Read alongside 25:63, that hadith settles the question of whether answering with peace is weakness: it names it as the harder feat of the two.",
            "bn": "এই আয়াত যে সংযমের প্রশংসা করে, সুন্নাহতে তাকে নিষ্ক্রিয়তা নয়, শক্তি হিসেবেই সংজ্ঞায়িত করা হয়েছে। বুখারী ও মুসলিমে বর্ণিত আছে, নবী ﷺ বলেছেন — শক্তিশালী সে নয় যে কুস্তিতে অন্যকে হারায়, বরং সে-ই, যে রাগের সময় নিজেকে নিয়ন্ত্রণ করে। 25:63-এর পাশে রেখে পড়লে এই হাদীস মীমাংসা করে দেয় যে শান্তির কথা দিয়ে উত্তর দেওয়া দুর্বলতা কি না: এটি একে দুইয়ের মধ্যে কঠিনতর কীর্তি বলেই চিহ্নিত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Same as Silence",
          "bn": "নীরবতার সঙ্গে এক নয়"
        },
        "p": [
          {
            "en": "It is worth being precise about the limits. Answering with salam is about personal insult and pointless quarrel, not about staying quiet when someone is being wronged. The Quran commands standing up for justice even against oneself in 4:135, and the same servants described here are not passive people; the verses after this one show them praying at night and spending their wealth. Gentleness is a manner, not a policy of withdrawal.",
            "bn": "সীমারেখা নিয়ে নির্ভুল হওয়া দরকার। 'সালাম' বলে উত্তর দেওয়ার কথাটি ব্যক্তিগত অপমান ও অর্থহীন ঝগড়া সম্পর্কে; কারও প্রতি অন্যায় হলে চুপ করে থাকা সম্পর্কে নয়। কুরআন 4:135-এ নিজের বিরুদ্ধে হলেও ন্যায়ের পক্ষে দাঁড়ানোর আদেশ দেয়; আর এখানে বর্ণিত বান্দারাও নিষ্ক্রিয় মানুষ নন — পরের আয়াতগুলো দেখায় তাঁরা রাতে নামায পড়েন ও সম্পদ ব্যয় করেন। কোমলতা একটি আচরণের ধরন, পিছিয়ে থাকার নীতি নয়।"
          },
          {
            "en": "There is also a difference between a soft answer and a silent grudge. The verse describes something said, salaman, which means the exchange is closed out loud and then left. Carrying the argument internally for days while presenting a calm face is not what is being praised, and the servants described here are elsewhere in the surah shown asking Allah directly for what troubles them rather than storing it.",
            "bn": "নরম উত্তর আর নীরব বিদ্বেষের মধ্যেও পার্থক্য আছে। আয়াতটি বর্ণনা করে এমন কিছু, যা বলা হয় — 'সালামা'; অর্থাৎ কথোপকথনটি প্রকাশ্যে শেষ করে দিয়ে সেখানেই ছেড়ে দেওয়া হয়। বাইরে শান্ত মুখ রেখে দিনের পর দিন ভেতরে তর্কটি বয়ে বেড়ানো এখানে প্রশংসিত হচ্ছে না; আর এখানে বর্ণিত বান্দাদের সূরার অন্যত্র দেখা যায় নিজেদের কষ্টের কথা জমিয়ে না রেখে সরাসরি আল্লাহর কাছেই বলতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Is Tested Now",
          "bn": "এখন এর পরীক্ষা কোথায়"
        },
        "p": [
          {
            "en": "The modern equivalent of being addressed by the jahilun is mostly typed. A reply box invites the exact response the verse rules out, and it does so at a moment when nobody is watching to hold you steady. The practical form of salaman online is often no reply at all, or one sentence that ends the thread. Both are harder than they look and both leave the day intact.",
            "bn": "আজকের দিনে 'জাহিলদের' সম্বোধনের সমতুল্য ঘটনা বেশিরভাগই টাইপ করা। একটি রিপ্লাই বক্স ঠিক সেই উত্তরটিই আহ্বান করে যা আয়াত নিষেধ করে, আর তা করে এমন এক মুহূর্তে যখন আপনাকে স্থির রাখার মতো কেউ তাকিয়ে নেই। অনলাইনে 'সালামা'-র ব্যবহারিক রূপ প্রায়ই কোনো উত্তর না দেওয়া, কিংবা এমন একটি বাক্য যা আলোচনাটি শেষ করে দেয়। দুটোই দেখতে যতটা সহজ ততটা নয়, আর দুটোই দিনটিকে অক্ষত রাখে।"
          },
          {
            "en": "The first half of the verse is tested elsewhere: in traffic, in queues, in how a person speaks to staff who cannot answer back, in whether a title or salary changes the tone of voice. Walking gently on the earth is a small daily discipline with no audience. Taken together the two halves describe someone whose behaviour does not depend on who is in front of them, which is close to the whole of good character.",
            "bn": "আয়াতের প্রথম অংশটির পরীক্ষা হয় অন্যত্র: রাস্তার যানজটে, লাইনে দাঁড়িয়ে, যেসব কর্মীর পাল্টা জবাব দেওয়ার সুযোগ নেই তাদের সঙ্গে কথা বলার ধরনে, আর পদমর্যাদা বা বেতন কণ্ঠস্বর বদলে দেয় কি না তাতে। মাটিতে নম্রভাবে চলা এমন এক ছোট দৈনন্দিন শৃঙ্খলা, যার কোনো দর্শক নেই। দুই অংশ একসঙ্গে এমন একজনকে বর্ণনা করে, যার আচরণ সামনে কে আছে তার ওপর নির্ভর করে না — আর এটিই প্রায় গোটা উত্তম চরিত্র।"
          }
        ]
      }
    ]
  },
  "25:64": {
    "sections": [
      {
        "h": {
          "en": "The Half No One Sees",
          "bn": "যে অর্ধেকটা কেউ দেখে না"
        },
        "p": [
          {
            "en": "The portrait of the servants of the Most Merciful begins at 25:63 with how they behave where they can be observed: they walk upon the earth with humility, and when the ignorant address them they answer with peace. This verse turns the camera around. The very next thing said about them is what they do at night, indoors, with no audience at all. The order is itself the argument. Public gentleness is claimed by a great many people; the Quran immediately asks what such a person is like when nobody is watching.",
            "bn": "পরম দয়াময়ের বান্দাদের প্রতিকৃতি শুরু হয় 25:63 আয়াতে — তারা যেখানে দৃশ্যমান, সেখানে কেমন আচরণ করে তা দিয়ে: তারা যমীনে নম্রভাবে চলে, আর অজ্ঞ লোকেরা তাদের সম্বোধন করলে তারা 'শান্তি' বলে উত্তর দেয়। আলোচ্য আয়াতটি ক্যামেরা ঘুরিয়ে দেয়। তাদের সম্পর্কে ঠিক পরের কথাটিই হলো তারা রাতে, ঘরের ভেতরে, কোনো দর্শক ছাড়া কী করে। এই ক্রমটিই যুক্তি। প্রকাশ্য নম্রতার দাবি বহু মানুষই করে; কুরআন সঙ্গে সঙ্গেই জিজ্ঞেস করে — কেউ যখন দেখছে না, তখন সেই মানুষটি কেমন?"
          },
          {
            "en": "The verse is five words in Arabic — wa'lladhina yabituna li-rabbihim sujjadan wa qiyaman — and it does not describe a feeling. It describes a time, a direction and two postures. Both postures are given in the plural, so the picture is of a group scattered across a sleeping town rather than of one solitary ascetic. Nothing in it is impressive to look at, which is precisely the point: it belongs to a list of marks by which a community is recognised, and this particular mark is invisible to the community itself.",
            "bn": "আয়াতটি আরবিতে পাঁচটি শব্দের — ওয়াল্লাযীনা ইয়াবীতূনা লিরাব্বিহিম সুজ্জাদাঁও ওয়া ক্বিয়ামা — আর এটি কোনো অনুভূতির বর্ণনা দেয় না। এটি বর্ণনা করে একটি সময়, একটি লক্ষ্য এবং দুটি ভঙ্গি। দুটি ভঙ্গিই বহুবচনে এসেছে, তাই ছবিটি একজন নিঃসঙ্গ সাধকের নয়, বরং ঘুমন্ত এক জনপদে ছড়িয়ে থাকা একটি দলের। এর কোনো কিছুই দেখতে চমকপ্রদ নয়, আর সেটাই মূল কথা: এটি এমন এক তালিকার অংশ যা দিয়ে একটি সমাজকে চেনা যায়, অথচ এই বিশেষ চিহ্নটি খোদ সেই সমাজের চোখেই অদৃশ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb Yabituna",
          "bn": "ইয়াবীতূনা ক্রিয়াটি"
        },
        "p": [
          {
            "en": "The verb is bata, which in Arabic means to pass the night, and it carries the sense of spending the night in some state rather than merely being asleep through it. The two words that follow, sujjadan wa qiyaman, are accusatives describing that state. Read precisely, the verse does not say they stand for the whole night; it says the night is where they are found in these postures. The commentators are careful here, because the Quran itself, in 73:20, explicitly relieves the community of standing for most of the night.",
            "bn": "ক্রিয়াটি হলো 'বাতা', যার আরবিতে অর্থ রাত কাটানো, আর তা বোঝায় কোনো একটি অবস্থার মধ্যে রাত কাটানো — নিছক রাতভর ঘুমিয়ে থাকা নয়। এরপরের দুটি শব্দ, সুজ্জাদাঁও ওয়া ক্বিয়ামা, সেই অবস্থাটিই বর্ণনা করে। নিখুঁতভাবে পড়লে আয়াতটি বলে না যে তারা সারা রাত দাঁড়িয়ে থাকে; এটি বলে, এই ভঙ্গিগুলোতে তাদের পাওয়া যায় রাতেই। মুফাসসিরগণ এখানে সতর্ক থাকেন, কারণ খোদ কুরআনই 73:20 আয়াতে উম্মাহকে রাতের বেশিরভাগ সময় দাঁড়ানোর দায় থেকে স্পষ্টভাবে হালকা করে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prostration Named First",
          "bn": "আগে সিজদার উল্লেখ"
        },
        "p": [
          {
            "en": "In prayer a person stands and then prostrates, yet the verse says prostrating and standing, in that order. Part of the reason is audible: the verses around it close on the same long open sound — hawnan and salaman in 25:63, qiyaman here, gharaman in 25:65 — and the order that fits the rhyme is the order the verse takes. Part of it is emphasis. Muslim relates from Abu Hurayrah (RA) that the closest a servant is to his Lord is while he is prostrating, so he should make much supplication there.",
            "bn": "নামাযে মানুষ আগে দাঁড়ায়, তারপর সিজদা করে; অথচ আয়াতটি বলে সিজদাবনত ও দণ্ডায়মান — এই ক্রমে। এর একটি কারণ কানে ধরা পড়ে: আশপাশের আয়াতগুলো একই দীর্ঘ খোলা ধ্বনিতে শেষ হয় — 25:63 আয়াতে হাওনা ও সালামা, এখানে ক্বিয়ামা, আর 25:65 আয়াতে গারামা — এবং ছন্দের সঙ্গে যে ক্রমটি মেলে আয়াত সেই ক্রমটিই নেয়। আরেকটি কারণ গুরুত্ব দেওয়া। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, বান্দা তার প্রতিপালকের সবচেয়ে নিকটবর্তী হয় সিজদারত অবস্থায়, তাই সেখানে বেশি বেশি দু'আ করা উচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "For Their Lord",
          "bn": "তাদের প্রতিপালকের উদ্দেশে"
        },
        "p": [
          {
            "en": "The phrase li-rabbihim, for their Lord, sits before both postures rather than after them, so the night is dedicated before it is described. That small preposition is what separates this verse from a description of insomnia or of self-discipline. Night worship also happens to be structurally protected from display: there is no congregation to notice it, nobody to tell, and by morning the only witness is the One it was done for. Sincerity here is not a virtue the worshipper has to manufacture; the hour supplies it.",
            "bn": "'লিরাব্বিহিম' — তাদের প্রতিপালকের উদ্দেশে — কথাটি দুটি ভঙ্গির পরে নয়, আগে বসেছে; ফলে রাতটিকে বর্ণনা করার আগেই তা উৎসর্গ করা হয়ে যায়। এই ছোট্ট অব্যয়টিই এই আয়াতকে অনিদ্রা বা আত্মশৃঙ্খলার বর্ণনা থেকে আলাদা করে। আর রাতের ইবাদত গঠনগতভাবেই লোকদেখানো থেকে সুরক্ষিত: দেখার মতো কোনো জামাত নেই, বলার মতো কেউ নেই, আর ভোর হলে একমাত্র সাক্ষী থাকেন তিনিই, যাঁর জন্য এটি করা হয়েছে। এখানে ইখলাস এমন কোনো গুণ নয় যা ইবাদতকারীকে বানিয়ে নিতে হয়; সময়টিই তা জোগায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same People Elsewhere",
          "bn": "অন্যত্র সেই একই মানুষগুলো"
        },
        "p": [
          {
            "en": "The Quran describes this group more than once, and always in similar terms. 32:16 says their sides part from their beds, that they call upon their Lord in fear and aspiration, and that they spend from what He has provided them. 51:17-18 says they used to sleep but little of the night and would seek forgiveness in the hours before dawn, and 3:17 names those who seek forgiveness before dawn among the qualities of the righteous. To the Prophet ﷺ himself the instruction came in 17:79 with a promise of a praised station attached to it.",
            "bn": "কুরআন এই দলটির বর্ণনা একাধিকবার দিয়েছে, আর প্রতিবারই কাছাকাছি ভাষায়। 32:16 আয়াতে বলা হয়, তাদের পাঁজর বিছানা থেকে আলাদা হয়ে যায়, তারা ভয় ও আশা নিয়ে তাদের প্রতিপালককে ডাকে, আর তিনি যা দিয়েছেন তা থেকে ব্যয় করে। 51:17-18 আয়াতে বলা হয়, তারা রাতের সামান্য অংশই ঘুমাত এবং শেষ রাতে ক্ষমা প্রার্থনা করত; আর 3:17 আয়াতে শেষ রাতে ক্ষমাপ্রার্থীদের নাম আসে নেককারদের গুণাবলির মধ্যে। খোদ নবী ﷺ-কে এই নির্দেশ দেওয়া হয় 17:79 আয়াতে, সঙ্গে যুক্ত ছিল প্রশংসিত মাকামের প্রতিশ্রুতি।"
          }
        ]
      },
      {
        "h": {
          "en": "Part of a Night",
          "bn": "রাতের একটি অংশ"
        },
        "p": [
          {
            "en": "Practically, the verse asks for something smaller than it sounds. The Quran's own concession in 73:20 sets the standard low enough to be kept; what this verse asks is that some part of the night be given rather than none of it. Muslim relates from Aisha (RA) that the deeds most beloved to Allah are the most constant of them, even if they are few. Two units before dawn, kept for a year, do more of what this verse describes than one long night that is never repeated.",
            "bn": "ব্যবহারিকভাবে আয়াতটি শুনতে যতটা বড় মনে হয়, চায় তার চেয়ে ছোট কিছু। 73:20 আয়াতে কুরআনের নিজের দেওয়া ছাড় মানটিকে এতটাই নাগালের মধ্যে নামিয়ে আনে যে তা ধরে রাখা যায়; এই আয়াত যা চায় তা হলো রাতের কোনো একটি অংশ দেওয়া হোক — একেবারে কিছুই না দেওয়ার বদলে। মুসলিম আয়িশা (রাঃ) থেকে বর্ণনা করেন, আল্লাহর কাছে সবচেয়ে প্রিয় আমল সেটিই যা সবচেয়ে নিয়মিত, তা পরিমাণে কম হলেও। ফজরের আগে দুই রাকআত, এক বছর ধরে ধরে রাখা — এই আয়াত যা বর্ণনা করে তার বেশি ঘটে সেখানেই, একটি দীর্ঘ রাতের চেয়ে যা আর কখনো ফিরে আসে না।"
          }
        ]
      }
    ]
  },
  "25:70": {
    "sections": [
      {
        "h": {
          "en": "The Exception That Saves",
          "bn": "যে ব্যতিক্রম রক্ষা করে"
        },
        "p": [
          {
            "en": "The verse is an exception clause, and the sentence it excepts from is severe. From 25:63 the surah describes the servants of the Most Merciful, and at 25:68 the portrait turns negative: they do not invoke another god with Allah, do not kill the soul Allah has made inviolable except by right, and do not commit zina. Whoever does these meets a penalty, doubled punishment on the Day of Resurrection and abiding disgrace. Then comes the turn: except those who repent, believe and do righteous work.",
            "bn": "আয়াতটি একটি ব্যতিক্রম-বাক্য, আর যে রায় থেকে এটি ব্যতিক্রম টানে তা কঠোর। 25:63 থেকে সূরাটি পরম করুণাময়ের বান্দাদের বর্ণনা দেয়, আর 25:68 আয়াতে ছবিটি নেতিবাচকে মোড় নেয়: তারা আল্লাহর সঙ্গে অন্য কোনো ইলাহকে ডাকে না, আল্লাহ যে প্রাণ হারাম করেছেন তা অন্যায়ভাবে হত্যা করে না, আর যিনা করে না। যে এসব করে সে শাস্তির মুখোমুখি হয় — কিয়ামতের দিন দ্বিগুণ আযাব আর স্থায়ী লাঞ্ছনা। তারপর আসে মোড়টি: তবে যারা তাওবা করে, ঈমান আনে ও সৎকর্ম করে — তারা ছাড়া।"
          },
          {
            "en": "For such people, Allah will replace their evil deeds with good deeds, and Allah is ever Forgiving and Merciful. Note which sins stand upstream of this promise: shirk, murder, zina — the three the moral imagination treats as unforgivable. The exception is carved precisely where despair is strongest. If the door stands open after these, the argument runs from the greater to the lesser: it stands open after everything beneath them.",
            "bn": "এমন মানুষদের জন্য আল্লাহ তাদের মন্দ কাজগুলো ভালো কাজ দিয়ে বদলে দেবেন, আর আল্লাহ পরম ক্ষমাশীল, পরম দয়ালু। লক্ষ করুন, এই প্রতিশ্রুতির উজানে কোন পাপগুলো দাঁড়িয়ে: শিরক, হত্যা, যিনা — নৈতিক কল্পনা যে তিনটিকে ক্ষমার অযোগ্য গণ্য করে। ব্যতিক্রমটি খোদাই করা হয়েছে ঠিক সেখানে, যেখানে নৈরাশ্য সবচেয়ে প্রবল। এসবের পরেও যদি দরজা খোলা থাকে, তবে যুক্তি বড় থেকে ছোটর দিকে নামে: এর নিচের সবকিছুর পরেও তা খোলা।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Asked for This Verse",
          "bn": "কারা এই আয়াত চেয়েছিল"
        },
        "p": [
          {
            "en": "The occasion is preserved with a sound chain. Al-Bukhari narrates from Ibn Abbas (RA) that some people of shirk had killed and had done so much, and committed zina and had done so much, then came to Muhammad ﷺ and said: what you say and call to is good, if only you would tell us that there is an expiation for what we have done. Then this passage came down, together with 39:53 — O My servants who have transgressed against yourselves, do not despair of the mercy of Allah.",
            "bn": "আয়াতের প্রেক্ষাপট সহীহ সনদে সংরক্ষিত। বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন: শিরকের কিছু মানুষ, যারা হত্যা করেছিল — অনেক করেছিল, আর যিনা করেছিল — তাও অনেক, মুহাম্মাদ ﷺ-এর কাছে এসে বলল: আপনি যা বলেন ও যার দিকে ডাকেন তা উত্তম — যদি শুধু আমাদের জানাতেন যে আমরা যা করেছি তার কোনো কাফফারা আছে। তখন এই অংশটি নাযিল হয়, সঙ্গে 39:53 — হে আমার বান্দারা, যারা নিজেদের ওপর বাড়াবাড়ি করেছ, আল্লাহর রহমত থেকে নিরাশ হয়ো না।"
          },
          {
            "en": "The question behind the revelation deserves attention. These were not people minimizing their past; they named it worse than anyone else would have, and their only obstacle to entering Islam was arithmetic — could such a ledger ever be settled? The verse answered a real pastoral emergency, and it still addresses exactly that person: the one who believes the message and disbelieves in his own eligibility.",
            "bn": "নাযিলের পেছনের প্রশ্নটি মনোযোগ দাবি করে। এরা নিজেদের অতীতকে হালকা করে দেখানো লোক ছিল না; অন্য যে-কেউ যতটা বলত, তার চেয়েও কঠোর ভাষায় তারা নিজেরাই তা স্বীকার করেছিল। ইসলামে প্রবেশে তাদের একমাত্র বাধা ছিল পাটিগণিত — এমন খাতা কি কখনো মেটানো সম্ভব? আয়াতটি এক বাস্তব আত্মিক জরুরি অবস্থার উত্তর দিয়েছিল, আর আজও ঠিক সেই মানুষটিকেই সম্বোধন করে: যে বার্তাটি বিশ্বাস করে, কিন্তু নিজের যোগ্যতায় অবিশ্বাস করে।"
          }
        ]
      },
      {
        "h": {
          "en": "How Sins Become Good Deeds",
          "bn": "পাপ যেভাবে নেকী হয়ে যায়"
        },
        "p": [
          {
            "en": "What does yubaddilu, He replaces, mean? Ibn Kathir records two positions among the commentators. On the first, the exchange happens in this world and in the person: ugly qualities are swapped for beautiful ones — the shirk for iman, the violence for restraint, the betrayal for chastity. A person's very habits are rebuilt, so the years ahead produce good where the years behind produced harm. On this reading the verse describes the observable transformation of the sincere convert and the sincere penitent.",
            "bn": "'ইউবাদ্দিলু' — তিনি বদলে দেন — এর অর্থ কী? ইবনে কাসীর মুফাসসিরদের দুটি অবস্থান লিপিবদ্ধ করেন। প্রথম মতে, বিনিময়টি ঘটে এই দুনিয়ায়, মানুষটির ভেতরে: কুৎসিত গুণগুলো সুন্দর গুণে বদলে যায় — শিরকের জায়গায় ঈমান, সহিংসতার জায়গায় সংযম, বিশ্বাসঘাতকতার জায়গায় সতীত্ব। মানুষের অভ্যাসগুলোই নতুন করে গড়া হয়, ফলে সামনের বছরগুলো কল্যাণ ফলায় — যেখানে পেছনের বছরগুলো ফলিয়েছিল ক্ষতি। এই পাঠে আয়াতটি বর্ণনা করে আন্তরিক নওমুসলিম ও আন্তরিক তাওবাকারীর চোখে-দেখা রূপান্তর।"
          },
          {
            "en": "On the second position, the replacement touches the record itself on the Day of Judgement. Its support is the narration of Abu Dharr (RA) in Muslim about the last man to leave the Fire: his major sins are concealed, his minor sins are shown to him, and he is told, for every evil deed you have a good deed. The man, seeing the direction of the exchange, says: my Lord, I did things I do not see here. The Prophet ﷺ laughed when relating it until his back teeth showed.",
            "bn": "দ্বিতীয় অবস্থানে, বদলটি স্পর্শ করে খোদ আমলনামাকে — কিয়ামতের দিন। এর দলিল মুসলিমে আবু যর (রাঃ)-এর বর্ণনা, জাহান্নাম থেকে সর্বশেষ মুক্তি পাওয়া মানুষটি সম্পর্কে: তার বড় গুনাহগুলো আড়াল করা হয়, ছোট গুনাহগুলো তাকে দেখানো হয়, আর বলা হয় — তোমার প্রতিটি মন্দ কাজের বদলে একটি করে নেকী। লেনদেনের গতিমুখ দেখে লোকটি বলে: হে আমার রব, আমি তো এমন সব কাজও করেছি যা এখানে দেখছি না। ঘটনাটি বলতে গিয়ে নবী ﷺ হেসেছিলেন — এমনকি তাঁর মাড়ির দাঁত দেখা গিয়েছিল।"
          },
          {
            "en": "The two readings do not compete so much as cover two moments of the same mercy: character is exchanged here, entries are exchanged there. Both hang on the same three conditions the verse states — tawbah, iman, righteous work — and the verse after it, 25:71, presses the point that whoever repents and acts rightly has turned to Allah with a true turning. Repentance in this passage is not a mood; it is a redirection with deeds attached.",
            "bn": "পাঠ দুটি পরস্পরের প্রতিদ্বন্দ্বী নয়; বরং একই রহমতের দুটি মুহূর্তকে ঢেকে দেয়: চরিত্র বদলায় এখানে, খাতার এন্ট্রি বদলায় সেখানে। দুটিই ঝুলে আছে আয়াতের বলা একই তিন শর্তে — তাওবা, ঈমান, সৎকর্ম; আর এর পরের আয়াত 25:71 কথাটি চেপে ধরে: যে তাওবা করে ও সৎকাজ করে, সে-ই প্রকৃত প্রত্যাবর্তনে আল্লাহর দিকে ফিরেছে। এই অংশে তাওবা কোনো মনের ভাব নয়; এটি আমল-জোড়া এক অভিমুখ বদল।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgiving and Merciful",
          "bn": "ক্ষমাশীল ও দয়ালু"
        },
        "p": [
          {
            "en": "The verse closes with two names: wa kanallahu Ghafuran Rahima, and Allah is ever Forgiving, Merciful. The verb kana gives the names permanence — He has always been so; forgiveness is not a policy adopted for this case. The same pairing seals 4:110, where whoever does evil or wrongs himself and then seeks Allah's forgiveness will find Allah Forgiving and Merciful. The promise of exchange in 25:70 is thus anchored not in the sinner's merit but in the Forgiver's character.",
            "bn": "আয়াত শেষ হয় দুটি নামে: 'ওয়া কানাল্লাহু গাফূরার রাহীমা' — আর আল্লাহ চিরকালই ক্ষমাশীল, পরম দয়ালু। 'কানা' ক্রিয়াটি নাম দুটিকে স্থায়িত্ব দেয় — তিনি বরাবরই এমন; ক্ষমা এই মামলার জন্য নেওয়া কোনো নীতি নয়। একই জোড় সিলমোহর দেয় 4:110 আয়াতে: যে মন্দ করে বা নিজের ওপর জুলুম করে, তারপর আল্লাহর কাছে ক্ষমা চায়, সে আল্লাহকে পাবে ক্ষমাশীল, দয়ালু। 25:70 আয়াতের বিনিময়ের প্রতিশ্রুতি তাই নোঙর করা পাপীর যোগ্যতায় নয় — ক্ষমাকারীর চরিত্রে।"
          }
        ]
      },
      {
        "h": {
          "en": "No One Disqualified",
          "bn": "কেউ অযোগ্য নয়"
        },
        "p": [
          {
            "en": "Lived, the verse dismantles the most effective weapon against repentance: the conviction of being a lost cause. That conviction masquerades as humility while functioning as an excuse, since a person certain of rejection sees no point in changing. Against it stands a verse revealed for people whose records held murder and worse, promising not bare acquittal but conversion of the evidence. After that precedent, no private history can honestly claim to be beyond the schedule of mercy.",
            "bn": "যাপনের স্তরে আয়াতটি তাওবার বিরুদ্ধে সবচেয়ে কার্যকর অস্ত্রটি ভেঙে দেয়: নিজেকে শেষ হয়ে যাওয়া মানুষ ভাবার প্রত্যয়। সেই প্রত্যয় বিনয়ের ছদ্মবেশ ধরে, অথচ কাজ করে অজুহাত হয়ে — কারণ প্রত্যাখ্যান সম্পর্কে নিশ্চিত মানুষ বদলানোর কোনো মানে দেখে না। তার বিপরীতে দাঁড়িয়ে এমন এক আয়াত, যা নাযিল হয়েছিল হত্যা ও তারও বেশি কিছু খাতায় থাকা মানুষদের জন্য — প্রতিশ্রুতি দিয়ে শুধু খালাসের নয়, সাক্ষ্যপ্রমাণেরই রূপান্তরের। এই নজিরের পরে কোনো গোপন অতীত সততার সঙ্গে দাবি করতে পারে না যে সে রহমতের তালিকার বাইরে।"
          },
          {
            "en": "The conditions keep the promise honest work rather than wishful thinking. Repentance means leaving the sin, regretting it, and resolving against return — restoring rights where rights were taken. Belief means the turn is toward Allah, not merely toward self-improvement. Righteous work means the new direction shows up in deeds that can be pointed to. Whoever is engaged in those three is not waiting to find out whether the exchange applies; by the verse's own terms, it already does.",
            "bn": "শর্তগুলোই প্রতিশ্রুতিটিকে অলীক কল্পনা নয়, সৎ পরিশ্রম করে রাখে। তাওবা মানে পাপ ছেড়ে দেওয়া, তার জন্য অনুতপ্ত হওয়া, আর ফিরে না যাওয়ার সংকল্প — যেখানে কারও হক নেওয়া হয়েছিল, তা ফিরিয়ে দেওয়া। ঈমান মানে ফেরাটা আল্লাহর দিকে, নিছক আত্মোন্নয়নের দিকে নয়। সৎকর্ম মানে নতুন অভিমুখটি এমন কাজে ফুটে ওঠা, যা আঙুল দিয়ে দেখানো যায়। যে এই তিনটিতে লেগে আছে, সে বিনিময়টি তার বেলায় খাটবে কি না তা জানার অপেক্ষায় নেই; আয়াতের নিজের শর্তেই — তা ইতিমধ্যে খাটছে।"
          }
        ]
      }
    ]
  },
  "25:72": {
    "sections": [
      {
        "h": {
          "en": "Inside the Portrait",
          "bn": "প্রতিকৃতির ভেতরে"
        },
        "p": [
          {
            "en": "This verse belongs to the description of the servants of the Most Merciful that opens at 25:63 and runs to 25:76, one verse short of the surah's close. The list moves between worship and character without separating them: gentle walking, nights in prostration, fear of the Fire, balanced spending, no shirk and no bloodshed. This line is the one about speech and about company — what these people will not affirm, and what they will not stand around for. The reward at 25:75 and 25:76 follows their supplication at 25:74 in the passage, so this line belongs among the traits and not among the promises.",
            "bn": "এই আয়াতটি পরম দয়াময়ের বান্দাদের সেই বর্ণনার অংশ, যা শুরু হয় 25:63 আয়াতে এবং চলে 25:76 আয়াত পর্যন্ত, সূরার শেষ আয়াতের ঠিক আগে পর্যন্ত। তালিকাটি ইবাদত ও চরিত্রের মধ্যে যাতায়াত করে, দুটিকে আলাদা না করেই: নম্র চলাফেরা, সিজদায় কাটানো রাত, জাহান্নামের ভয়, ভারসাম্যপূর্ণ ব্যয়, শিরক নেই ও রক্তপাত নেই। এই লাইনটি কথা ও সঙ্গ সম্পর্কে — এই মানুষগুলো কী সমর্থন করবে না, আর কীসের পাশে দাঁড়িয়ে থাকবে না। অনুচ্ছেদে 25:75 ও 25:76 আয়াতের পুরস্কার আসে 25:74 আয়াতের দোয়ার পরে, ফলে এই লাইনটি প্রতিশ্রুতির দলে নয়, বৈশিষ্ট্যের দলেই পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "They Do Not Witness az-Zur",
          "bn": "তারা যূর-এর সাক্ষী হয় না"
        },
        "p": [
          {
            "en": "La yashhaduna az-zur carries two classical readings, because the Arabic verb shahida means both to testify and to be present. Read the first way, they do not give false testimony — shahadat az-zur, the perjury that destroys a court. Read the second way, they are not present at az-zur, meaning they do not attend gatherings of falsehood; the early authorities glossed zur here as idol festivals, as shirk, and as lying speech generally. The commentators carry both readings, and neither one cancels the other.",
            "bn": "'লা ইয়াশহাদূনায যূর' বাক্যাংশটি দুটি ধ্রুপদী পাঠ বহন করে, কারণ আরবি ক্রিয়া 'শাহিদা'-র অর্থ একই সাথে সাক্ষ্য দেওয়া এবং উপস্থিত থাকা। প্রথমভাবে পড়লে: তারা মিথ্যা সাক্ষ্য দেয় না — শাহাদাতুয যূর, যে মিথ্যা সাক্ষ্য আদালতকে ধ্বংস করে। দ্বিতীয়ভাবে পড়লে: তারা যূর-এর মজলিসে উপস্থিত থাকে না, অর্থাৎ মিথ্যার আসরে যায় না; পূর্ববর্তী মনীষীগণ এখানে 'যূর'-এর ব্যাখ্যা করেছেন মূর্তিপূজার উৎসব, শিরক এবং সাধারণভাবে মিথ্যা কথা হিসেবে। মুফাসসিরগণ দুটি পাঠই বহন করেন, আর একটি অন্যটিকে বাতিল করে দেয় না।"
          },
          {
            "en": "The first reading is not a small matter in the sunnah. Al-Bukhari relates from Abu Bakrah (RA) that the Prophet ﷺ asked whether he should inform them of the greatest of the major sins, named associating partners with Allah and disobedience to parents while reclining, and then sat up to warn against false speech, repeating it until those present wished he would stop. A man who will not lie for himself may still lend his name to someone else's lie, and that is what is being closed off.",
            "bn": "প্রথম পাঠটি সুন্নাহতে মোটেও হালকা বিষয় নয়। ইমাম বুখারী আবু বাকরা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ জিজ্ঞেস করলেন, তিনি কি তাঁদের সবচেয়ে বড় কবীরা গুনাহগুলোর কথা জানাবেন; হেলান দেওয়া অবস্থায় তিনি বললেন আল্লাহর সাথে শরিক করা ও পিতামাতার অবাধ্যতা, তারপর উঠে বসে মিথ্যা কথার ব্যাপারে সতর্ক করতে থাকলেন এবং তা এত বার পুনরাবৃত্তি করলেন যে উপস্থিত সবাই চাইছিলেন তিনি থামুন। যে মানুষ নিজের জন্য মিথ্যা বলবে না, সে-ও অন্যের মিথ্যায় নিজের নাম ধার দিয়ে ফেলতে পারে, আর সেই পথটিই এখানে বন্ধ করা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Passing By With Dignity",
          "bn": "মর্যাদার সাথে পাশ কাটানো"
        },
        "p": [
          {
            "en": "The second half assumes the encounter will happen: wa idha marru bi'l-laghwi marru kiraman — and when they pass by laghw, they pass by nobly. Laghw is speech or activity with nothing in it, from harmless waste of time up to the coarse and the cruel. The verse does not imagine a life in which none of this is ever met. It describes the manner of getting past it.",
            "bn": "দ্বিতীয় অংশটি ধরেই নেয় যে এই সাক্ষাৎ ঘটবেই: 'ওয়া ইযা মাররূ বিল-লাগভি মাররূ কিরামা' — আর যখন তারা লাগভের পাশ দিয়ে যায়, তারা মর্যাদার সাথে পাশ কেটে যায়। 'লাগভ' মানে এমন কথা বা কাজ যার ভেতরে কিছু নেই — নিরীহ সময় নষ্ট থেকে শুরু করে অশ্লীল ও নিষ্ঠুর পর্যন্ত। আয়াতটি এমন কোনো জীবন কল্পনা করে না যেখানে এসবের মুখোমুখি কখনো হতে হয় না। এটি বর্ণনা করে, সেসব পেরিয়ে যাওয়ার ধরনটি কেমন হবে।"
          },
          {
            "en": "Kiraman is a state describing them, not the laghw: they are the noble ones as they pass. The commentators explain it as going by without joining in and without answering in the same currency. That is a narrow and demanding target — not a lecture, not a scene, and not laughing along either. 23:3 lists turning away from laghw among the traits of the successful, and in 28:55 those who hear it reply that their deeds are their own and the others' are theirs.",
            "bn": "'কিরামা' শব্দটি তাদেরই অবস্থার বর্ণনা, লাগভের নয়: পাশ কাটানোর সময় তারাই মর্যাদাবান। মুফাসসিরগণ এর ব্যাখ্যা করেন — তাতে শরিক না হয়ে এবং একই ভাষায় জবাব না দিয়ে পাশ কেটে যাওয়া। লক্ষ্যটি সংকীর্ণ ও কঠিন — কোনো বক্তৃতা নয়, কোনো দৃশ্য তৈরি নয়, আবার সাথে হেসে ওঠাও নয়। 23:3 আয়াতে লাগভ থেকে মুখ ফিরিয়ে নেওয়াকে সফলদের বৈশিষ্ট্যের মধ্যে গণনা করা হয়েছে, আর 28:55 আয়াতে যারা তা শোনে তারা জবাব দেয় যে তাদের আমল তাদের, আর অন্যদের আমল অন্যদের।"
          }
        ]
      },
      {
        "h": {
          "en": "What Presence Endorses",
          "bn": "উপস্থিতি যা সমর্থন করে"
        },
        "p": [
          {
            "en": "Both readings of the first half land in the same place. Whether the sin is swearing to a falsehood or sitting comfortably inside one, what is being refused is the lending of yourself to something untrue. Attendance is a signature of sorts; the room is fuller because you are in it, and the speaker is bolder. That is why this trait is listed among the marks of worship rather than among the rules of etiquette.",
            "bn": "প্রথম অংশের দুটি পাঠই একই জায়গায় এসে পৌঁছায়। পাপটি মিথ্যার পক্ষে শপথ করা হোক বা মিথ্যার ভেতরে আরাম করে বসে থাকা হোক, যা প্রত্যাখ্যান করা হচ্ছে তা হলো অসত্য কোনো কিছুতে নিজেকে ধার দেওয়া। উপস্থিতিও একরকম স্বাক্ষর; আপনি আছেন বলে ঘরটি আরও ভরা, আর বক্তা আরও সাহসী। এ কারণেই এই বৈশিষ্ট্যটিকে শিষ্টাচারের নিয়মের মধ্যে না রেখে ইবাদতের নিদর্শনগুলোর মধ্যে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Modern Form of Attending",
          "bn": "উপস্থিত থাকার আধুনিক রূপ"
        },
        "p": [
          {
            "en": "Attending now costs nothing and leaves a record. A share, a forward, a screenshot passed on, a reply that keeps a thread alive — each is a way of being present at az-zur without saying a word of it yourself. The verse asks two separate questions of that habit: did you affirm something untrue, and did you stand there while it was said. Most of us fail the second long before the first.",
            "bn": "উপস্থিত থাকতে এখন কিছুই খরচ হয় না, অথচ তা রেকর্ড রেখে যায়। একটি শেয়ার, একটি ফরোয়ার্ড, চালাচালি হওয়া একটি স্ক্রিনশট, কিংবা এমন একটি জবাব যা আলোচনাটিকে বাঁচিয়ে রাখে — প্রতিটিই যূর-এর আসরে উপস্থিত থাকার এক-একটি উপায়, নিজে একটি কথাও না বলে। আয়াতটি এই অভ্যাসকে দুটি আলাদা প্রশ্ন করে: আপনি কি অসত্য কিছু সমর্থন করেছেন, আর যখন তা বলা হচ্ছিল আপনি কি সেখানে দাঁড়িয়ে ছিলেন। আমাদের বেশির ভাগই প্রথমটিতে ব্যর্থ হওয়ার অনেক আগেই দ্বিতীয়টিতে ব্যর্থ হই।"
          },
          {
            "en": "The dignity the verse praises is quiet. It does not require the room to know that you disapproved, and it does not require a speech. It requires leaving, closing, or not replying, which is harder than it sounds because it wins nothing visible. What it protects is the description at the head of the passage: these are the servants of the Most Merciful, and this is one of the things by which they are known.",
            "bn": "আয়াতটি যে মর্যাদার প্রশংসা করে তা নিঃশব্দ। এর জন্য ঘরসুদ্ধ লোকের জানার দরকার নেই যে আপনি অসম্মতি জানিয়েছেন, আর কোনো বক্তৃতারও দরকার নেই। দরকার কেবল উঠে আসা, বন্ধ করে দেওয়া, বা জবাব না দেওয়া — যা শুনতে যত সহজ ততটা নয়, কারণ এতে দৃশ্যমান কিছুই জেতা যায় না। এটি যা রক্ষা করে তা হলো অনুচ্ছেদের শুরুর সেই পরিচয়টি: এরাই পরম দয়াময়ের বান্দা, আর এটিই সেই লক্ষণগুলোর একটি যা দিয়ে তাদের চেনা যায়।"
          }
        ]
      }
    ]
  },
  "25:74": {
    "sections": [
      {
        "h": {
          "en": "The Close of a Portrait",
          "bn": "একটি প্রতিকৃতির সমাপ্তি"
        },
        "p": [
          {
            "en": "From 25:63 to the end of the surah, the Quran paints the ibad ar-Rahman, the servants of the Most Merciful: they walk on the earth with humility, answer the ignorant with peace, spend their nights in prostration, keep their spending between excess and stinginess, and avoid shirk, murder and zina. This verse is the last item of the portrait, and it is a du'a — as if to say the finishing feature of such people is what they ask for.",
            "bn": "25:63 থেকে সূরার শেষ পর্যন্ত কুরআন আঁকে 'ইবাদুর রহমান'-দের — পরম দয়াময়ের বান্দাদের — প্রতিকৃতি: তারা যমীনে চলে বিনয়ের সঙ্গে, মূর্খদের জবাব দেয় শান্তির কথায়, রাত কাটায় সিজদায়, খরচ রাখে অপচয় ও কৃপণতার মাঝখানে, আর দূরে থাকে শিরক, হত্যা ও যিনা থেকে। এই আয়াতটি প্রতিকৃতির শেষ উপাদান, এবং এটি একটি দোয়া — যেন বলা হচ্ছে, এমন মানুষদের সমাপনী বৈশিষ্ট্য হলো তারা কী চায়, সেটিই।"
          },
          {
            "en": "The placement teaches by sequence. Only after the portrait has covered a person's own humility, worship and restraint does it turn to the household. The servants of the Most Merciful get their own souls in order and then pray for their families — the du'a of this verse presupposes the eleven verses before it. Asking Allah for a righteous home is the overflow of a person working on himself, not a substitute for it.",
            "bn": "এই অবস্থানটি ক্রম দিয়ে শেখায়। প্রতিকৃতিটি মানুষের নিজের বিনয়, ইবাদত ও সংযম সেরে নেওয়ার পরেই কেবল ঘরের দিকে ফেরে। পরম দয়াময়ের বান্দারা আগে নিজেদের আত্মা গুছিয়ে নেয়, তারপর পরিবারের জন্য দোয়া করে — এই আয়াতের দোয়াটি তার আগের এগারোটি আয়াতকে পূর্বশর্ত ধরে নেয়। নেককার সংসারের জন্য আল্লাহর কাছে চাওয়া হলো নিজেকে গড়ার কাজের উপচে পড়া অংশ — তার বিকল্প নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Coolness of the Eyes",
          "bn": "চোখের শীতলতা"
        },
        "p": [
          {
            "en": "Our Lord, grant us from our spouses and our offspring qurrata a'yun — coolness of eyes. In Arabic idiom the cool eye is the settled, delighted eye; the expression names the deepest kind of contentment, the sight that makes the heart stand still with joy. Applied to family, it asks for spouses and children who are a source of rest when seen — and in the mouths of the ibad ar-Rahman, the commentators note, what cools the eye is seeing one's family upon obedience to Allah.",
            "bn": "হে আমাদের রব, আমাদের স্ত্রীদের ও সন্তানদের থেকে আমাদের দিন 'কুররাতা আইয়ুন' — চোখের শীতলতা। আরবি বাগধারায় শীতল চোখ মানে স্থির, তৃপ্ত চোখ; অভিব্যক্তিটি গভীরতম পরিতৃপ্তির নাম — সেই দৃশ্য, যা দেখে হৃদয় আনন্দে থেমে যায়। পরিবারের ক্ষেত্রে এর অর্থ: এমন জীবনসঙ্গী ও সন্তান চাওয়া, যাদের দেখলেই প্রশান্তি আসে — আর ইবাদুর রহমানদের মুখে, মুফাসসিরগণ লক্ষ করেন, চোখ জুড়ায় নিজের পরিবারকে আল্লাহর আনুগত্যের ওপর দেখে।"
          },
          {
            "en": "That reading keeps the prayer from collapsing into mere domestic comfort. Children can cool the eye by achievement, charm or income, and all of that fades or moves away. The coolness this du'a intends survives distance and even death, because it is anchored in where the family stands with Allah. It is the difference between enjoying one's family and being at rest about them.",
            "bn": "এই পাঠটিই দোয়াটিকে নিছক সাংসারিক আরামে নেমে যাওয়া থেকে বাঁচায়। সন্তান চোখ জুড়াতে পারে কৃতিত্বে, লাবণ্যে বা উপার্জনে — আর এসবই ম্লান হয় বা দূরে সরে যায়। এই দোয়া যে শীতলতা চায় তা দূরত্ব, এমনকি মৃত্যুকেও পার হয়ে টেকে, কারণ তার নোঙর পরিবারটি আল্লাহর কাছে কোথায় দাঁড়িয়ে, সেখানে। পরিবারকে উপভোগ করা আর পরিবার নিয়ে নিশ্চিন্ত থাকা — এ দুয়ের পার্থক্যই এটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Make Us an Imam",
          "bn": "আমাদের ইমাম বানান"
        },
        "p": [
          {
            "en": "The second half startles with its ambition: and make us an imam for the muttaqin — a leader, a pattern, for the God-fearing. The commentators pause at the singular imam where a plural might be expected; among the explanations they offer is that the righteous are as one in their way, or that each asks to be an exemplar in his own right. Either way, the servants of the Most Merciful, described eleven verses earlier as walking humbly, here ask to be at the front.",
            "bn": "দ্বিতীয় অংশটি তার উচ্চাশা দিয়ে চমকে দেয়: আর আমাদের বানান মুত্তাকীদের জন্য 'ইমাম' — আল্লাহভীরুদের নেতা, আদর্শ। যেখানে বহুবচন প্রত্যাশিত সেখানে একবচন 'ইমাম' নিয়ে মুফাসসিরগণ থামেন; তাঁদের দেওয়া ব্যাখ্যার মধ্যে আছে — নেককাররা তাদের পথে যেন একজনই, অথবা প্রত্যেকে নিজ নিজ জায়গায় আদর্শ হতে চায়। যেভাবেই হোক, এগারো আয়াত আগে যাদের পরিচয় ছিল বিনয়ে হাঁটা, সেই পরম দয়াময়ের বান্দারাই এখানে সামনের সারিতে দাঁড়াতে চাইছে।"
          },
          {
            "en": "The two are not in tension, because the leadership requested is of a specific kind: being followed toward Allah. Ambition for wealth or office breeds rivalry; ambition to be an example in taqwa breeds accountability — a person who has asked Allah to make him a model has volunteered to be watched. The du'a also implies wanting others to be righteous, since one cannot be an imam for the muttaqin unless muttaqin exist to follow.",
            "bn": "দুটির মধ্যে বিরোধ নেই, কারণ যে নেতৃত্ব চাওয়া হচ্ছে তা এক বিশেষ ধরনের: আল্লাহর দিকে অনুসৃত হওয়া। সম্পদ বা পদের উচ্চাশা জন্ম দেয় রেষারেষি; তাকওয়ায় আদর্শ হওয়ার উচ্চাশা জন্ম দেয় জবাবদিহি — যে ব্যক্তি আল্লাহর কাছে নিজেকে আদর্শ বানানোর দোয়া করেছে, সে স্বেচ্ছায় নজরদারিতে থাকতে রাজি হয়েছে। দোয়াটিতে অন্যদের নেককার হওয়ার কামনাও নিহিত, কারণ মুত্তাকী না থাকলে মুত্তাকীদের ইমাম হওয়া যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer That Assumes Work",
          "bn": "যে দোয়া শ্রম ধরে নেয়"
        },
        "p": [
          {
            "en": "Like all Quranic du'as, this one is the voiced half of an effort. The Quran commands in 66:6 to protect yourselves and your families from a Fire, and in 20:132 to enjoin prayer upon your family and be steadfast therein. A parent who prays this verse at night and neglects those commands by day is asking Allah to harvest a field no one planted. The du'a directs the work as much as it requests the outcome.",
            "bn": "কুরআনের সব দোয়ার মতো এটিও একটি প্রচেষ্টার উচ্চারিত অর্ধেক। কুরআন 66:6 আয়াতে আদেশ করে — নিজেদের ও নিজেদের পরিবারকে আগুন থেকে বাঁচাও; আর 20:132 আয়াতে — তোমার পরিবারকে নামাযের আদেশ দাও এবং তাতে অবিচল থাকো। যে অভিভাবক রাতে এই আয়াত পড়ে দোয়া করে অথচ দিনে ওই আদেশগুলো অবহেলা করে, সে আল্লাহর কাছে এমন খেতের ফসল চাইছে যেখানে কেউ বীজই বোনেনি। দোয়াটি ফল যেমন চায়, তেমনি কাজের দিকও দেখিয়ে দেয়।"
          },
          {
            "en": "There is also mercy in the fact that this is a du'a at all. Righteous children cannot be manufactured by parenting technique; hearts are in Allah's hand, and the prophets themselves show the limits — Nuh (AS) lost a son, as 11:42-46 recounts, while Ibrahim (AS) prayed in 37:100 for a righteous child and was granted one. The verse teaches the posture that fits such uncertainty: full effort, and the outcome asked from its true Owner.",
            "bn": "এটি যে আদৌ একটি দোয়া, তার মধ্যেও রহমত আছে। নেককার সন্তান লালনপালনের কৌশলে বানানো যায় না; হৃদয় আল্লাহর হাতে, আর নবীরাই (আঃ) সীমাটা দেখিয়ে গেছেন — নূহ (আঃ) এক পুত্রকে হারিয়েছেন, যেমন 11:42-46 বর্ণনা করে; আর ইবরাহীম (আঃ) 37:100 আয়াতে নেক সন্তানের দোয়া করেছেন এবং পেয়েছেন। আয়াতটি শেখায় এমন অনিশ্চয়তার উপযুক্ত ভঙ্গিটি: পূর্ণ চেষ্টা, আর ফলাফল চাওয়া তার প্রকৃত মালিকের কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reward Named Next",
          "bn": "পরেই যে পুরস্কারের নাম"
        },
        "p": [
          {
            "en": "The passage does not leave the portrait unrewarded. The very next verse, 25:75, says: those will be rewarded with the highest chamber for their patience, and will be met there with greeting and peace. The mention of patience as the price is telling — everything in the portrait, from answering the ignorant gently to raising a family toward Allah, runs on sabr. Building a household that cools the eyes is slow work measured in years, and the Quran files it under patience, not luck.",
            "bn": "অনুচ্ছেদটি প্রতিকৃতিকে পুরস্কারহীন রাখে না। ঠিক পরের আয়াত, 25:75, বলে: তাদের ধৈর্যের প্রতিদানে তাদের দেওয়া হবে সুউচ্চ কক্ষ, আর সেখানে তাদের বরণ করা হবে অভিবাদন ও সালামে। মূল্য হিসেবে ধৈর্যের উল্লেখটি অর্থবহ — প্রতিকৃতির সবকিছুই, মূর্খকে নম্র জবাব দেওয়া থেকে পরিবারকে আল্লাহর দিকে গড়ে তোলা পর্যন্ত, চলে সবরের ওপর। চোখ-জুড়ানো সংসার গড়া বছরের হিসাবে মাপা ধীর কাজ; কুরআন একে রাখে ধৈর্যের খাতায় — ভাগ্যের খাতায় নয়।"
          },
          {
            "en": "To live the verse, say it — it is one of the Quran's given prayers, ready for daily use — and then be its first answer. The house moves toward what its members model, rarely toward what they merely announce. A parent praying for children who love prayer while the children watch him rush his own has set the du'a against his example; aligning the two is how the servants of the Most Merciful ask.",
            "bn": "আয়াতটি যাপন করতে হলে এটি পড়ুন — এটি কুরআনের দেওয়া দোয়াগুলোর একটি, প্রতিদিন ব্যবহারের জন্য প্রস্তুত — তারপর নিজেই এর প্রথম উত্তর হয়ে উঠুন। সংসার এগোয় তার সদস্যরা যা করে দেখায় সেদিকে; যা কেবল মুখে ঘোষণা করে, সেদিকে কদাচিৎ। যে অভিভাবক নামায-ভালোবাসা সন্তানের জন্য দোয়া করে অথচ সন্তানরা দেখে সে নিজের নামায তাড়াহুড়ায় সারে, সে দোয়াটিকে নিজের দৃষ্টান্তের বিপক্ষে দাঁড় করিয়েছে; দুটিকে এক রেখায় আনাই পরম দয়াময়ের বান্দাদের চাওয়ার ধরন।"
          }
        ]
      }
    ]
  },
  "25:77": {
    "sections": [
      {
        "h": {
          "en": "The Last Word of al-Furqan",
          "bn": "আল-ফুরকানের শেষ কথা"
        },
        "p": [
          {
            "en": "Surah al-Furqan has seventy-seven verses, so this is the last of them. The surah opened by blessing the One who sent down the Criterion upon His servant to be a warner to the worlds, and it spent much of its length quoting what the deniers of Makkah said about that servant. It ends by telling him what to say back, and the sentence he is given is a question about their worth.",
            "bn": "সূরা আল-ফুরকানে আয়াত সংখ্যা সাতাত্তর, তাই এটিই তার শেষ আয়াত। সূরাটি শুরু হয়েছিল তাঁর প্রশংসা দিয়ে যিনি তাঁর বান্দার ওপর ফুরকান নাযিল করেছেন, যেন তিনি বিশ্ববাসীর জন্য সতর্ককারী হন; আর সূরাটির বড় একটি অংশ জুড়ে মক্কার অস্বীকারকারীরা সেই বান্দা সম্পর্কে যা বলত তা উদ্ধৃত হয়েছে। সূরাটি শেষ হয় তাঁকে জবাবে কী বলতে হবে তা জানিয়ে, আর তাঁকে যে বাক্যটি দেওয়া হয় তা তাদের মূল্য নিয়ে একটি প্রশ্ন।"
          },
          {
            "en": "The word qul, say, matters for reading the verse correctly. The address is to those who deny — the second half makes that explicit by turning to them and saying they have denied. A believer is not the person being spoken to here. He overhears the standard being applied to someone else, and then has to work out where it leaves him.",
            "bn": "'কুল' অর্থাৎ 'বল' শব্দটি আয়াতটি ঠিকভাবে পড়ার জন্য গুরুত্বপূর্ণ। সম্বোধন করা হচ্ছে অস্বীকারকারীদের — দ্বিতীয় অংশ তা স্পষ্ট করে দেয়, তাদের দিকে ফিরে বলে যে তারা মিথ্যা প্রতিপন্ন করেছে। এখানে যাদের সাথে কথা বলা হচ্ছে মুমিন তাদের একজন নয়। সে শুনতে পায় যে মানদণ্ডটি অন্য কারও ওপর প্রয়োগ করা হচ্ছে, আর তারপর তাকেই হিসাব করতে হয় সেই মানদণ্ডে সে কোথায় দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ma Ya'ba'u Bikum",
          "bn": "মা ইয়া'বা'উ বিকুম"
        },
        "p": [
          {
            "en": "The verb is 'aba'a, and it is stronger than the English word care suggests. To 'aba'a bi-something is to reckon it as having weight, to count it as of any account at all. So the question is not whether Allah feels affection for them; it is whether they register on the scale at all. The app's rendering, what would my Lord care for you if not for your supplication, is asking what you would amount to.",
            "bn": "ক্রিয়াপদটি হলো 'আবা'আ', আর ইংরেজি 'care' শব্দটি যা বোঝায় এটি তার চেয়ে জোরালো। কোনো কিছুর ব্যাপারে 'আবা'আ' করা মানে তাকে ওজনসম্পন্ন গণ্য করা, তাকে আদৌ ধর্তব্যের মধ্যে ধরা। তাই প্রশ্নটি এই নয় যে আল্লাহ তাদের প্রতি স্নেহ বোধ করেন কি না; প্রশ্ন হলো তারা আদৌ পাল্লায় ধরা পড়ে কি না। অ্যাপের অনুবাদে 'তোমাদের ব্যাপারে আমার প্রতিপালকের কী প্রয়োজন পড়েছে তোমরা যদি তাঁকে না ডাকো' — এই প্রশ্নটিই জিজ্ঞেস করছে, তোমাদের মূল্য তবে কত।"
          }
        ]
      },
      {
        "h": {
          "en": "What Du'a Means Here",
          "bn": "এখানে দোয়া মানে কী"
        },
        "p": [
          {
            "en": "Lawla du'a'ukum, were it not for your du'a. The commentators record more than one direction for the phrase. Taken as your calling upon Him, several of the early authorities gloss it as your faith itself, since calling on Allah is what faith does. Taken the other way round, with the pronoun as the object rather than the doer, it reads as His calling you — the invitation delivered through the Messenger, without which there would have been no case to answer.",
            "bn": "'লাওলা দু'আউকুম' — তোমাদের দোয়া না থাকলে। মুফাসসিরগণ এই বাক্যাংশটির একাধিক দিক বর্ণনা করেন। যদি এর অর্থ হয় 'তোমাদের তাঁকে ডাকা', তবে পূর্ববর্তী মনীষীদের কয়েকজন এর ব্যাখ্যা করেছেন 'তোমাদের ঈমান' হিসেবে, কারণ আল্লাহকে ডাকাই তো ঈমানের কাজ। উল্টো দিক থেকে পড়লে, যেখানে সর্বনামটি কর্তা নয় বরং কর্ম, তখন অর্থ দাঁড়ায় 'তাঁর তোমাদের ডাকা' — রাসূলের মাধ্যমে পৌঁছানো সেই আহ্বান, যা না থাকলে জবাবদিহির প্রশ্নই উঠত না।"
          },
          {
            "en": "Scholars also distinguish two senses of du'a that both apply. Du'a al-mas'alah is asking: give me, forgive me, protect me. Du'a al-'ibadah is worship itself, since every prayer, fast and act of obedience is a way of saying that He is the one worth turning to. Read with the second sense in view, this verse is not making a case for one devotional habit. It is saying that turning to Allah is the whole of what a human being is for.",
            "bn": "আলিমগণ দোয়ার দুটি অর্থও আলাদা করেন, আর দুটিই এখানে খাটে। 'দোয়া আল-মাসআলাহ' মানে চাওয়া: আমাকে দাও, আমাকে ক্ষমা করো, আমাকে রক্ষা করো। 'দোয়া আল-ইবাদাহ' মানে ইবাদত নিজেই, কারণ প্রতিটি নামায, প্রতিটি রোযা ও প্রতিটি আনুগত্য এই কথাই বলার একটি উপায় যে ফেরার মতো একমাত্র সত্তা তিনিই। দ্বিতীয় অর্থটি সামনে রেখে পড়লে এই আয়াতটি কোনো একটি ইবাদতের অভ্যাসের পক্ষে যুক্তি দিচ্ছে না। এটি বলছে, আল্লাহর দিকে ফেরাই মানুষের অস্তিত্বের পুরো উদ্দেশ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Then the Verse Turns",
          "bn": "এরপর আয়াতটি মোড় নেয়"
        },
        "p": [
          {
            "en": "Faqad kadhdhabtum fasawfa yakunu lizama — you have denied, so it will be lizam. The word comes from luzum, sticking fast, and describes a punishment that attaches and does not let go. Al-Bukhari records in his book of tafsir that Ibn Mas'ud (RA) counted al-lizam among the signs that had already come to pass; the wider reading among the commentators takes it as a consequence that clings to the denier in this world and the next.",
            "bn": "'ফাকাদ কায্‌যাবতুম ফাসাওফা ইয়াকূনু লিযামা' — তোমরা মিথ্যা প্রতিপন্ন করেছ, কাজেই তা হবে লিযাম। শব্দটি এসেছে 'লুযূম' থেকে, যার অর্থ আঁকড়ে ধরা, আর এটি এমন শাস্তির বর্ণনা যা লেগে থাকে এবং ছাড়ে না। ইমাম বুখারী তাঁর তাফসীরের কিতাবে উল্লেখ করেন যে ইবনে মাসঊদ (রাঃ) 'আল-লিযাম'-কে সেই নিদর্শনগুলোর মধ্যে গণনা করেছেন যেগুলো ইতিমধ্যে ঘটে গেছে; মুফাসসিরগণের ব্যাপকতর পাঠ একে এমন পরিণতি হিসেবে নেয় যা দুনিয়া ও আখিরাতে অস্বীকারকারীকে আঁকড়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Read From the Other Side",
          "bn": "উল্টো দিক থেকে পড়া"
        },
        "p": [
          {
            "en": "If a person has no weight with Allah without calling on Him, then calling on Him is where weight comes from. That is the believer's share of this verse, and the Quran states it elsewhere directly. In 40:60 Allah says call upon Me, I will respond to you, and immediately warns that those too proud for His worship will enter Hell contemptible — so du'a is set against arrogance, exactly the posture the deniers of al-Furqan had taken.",
            "bn": "কেউ যদি আল্লাহকে না ডাকলে তাঁর কাছে কোনো ওজনই না রাখে, তবে ওজন আসে ডাকা থেকেই। এটিই এই আয়াতে মুমিনের অংশ, আর কুরআন অন্যত্র কথাটি সরাসরিই বলে। 40:60 আয়াতে আল্লাহ বলেন, তোমরা আমাকে ডাকো, আমি সাড়া দেব; আর সাথে সাথেই সতর্ক করেন যে যারা অহংকারবশত তাঁর ইবাদত থেকে বিমুখ, তারা লাঞ্ছিত হয়ে জাহান্নামে প্রবেশ করবে — অর্থাৎ দোয়াকে অহংকারের বিপরীতে দাঁড় করানো হয়েছে, আর সেই অহংকারই ছিল আল-ফুরকানের অস্বীকারকারীদের ভঙ্গি।"
          },
          {
            "en": "2:186 supplies the other half. There Allah answers a question about Himself by saying He is near, that He responds to the call of the caller when he calls, and then asks for response and belief in return. Between the two verses du'a stops looking like a request form and starts looking like the relationship itself: He is near, He answers, and asking is how a servant admits both.",
            "bn": "2:186 আয়াত বাকি অর্ধেকটা জোগায়। সেখানে আল্লাহ নিজের সম্পর্কে করা এক প্রশ্নের জবাবে বলেন যে তিনি নিকটেই, আহ্বানকারী ডাকলে তিনি তার ডাকে সাড়া দেন, আর তারপর বিনিময়ে চান সাড়া দেওয়া ও ঈমান। দুটি আয়াত মিলিয়ে পড়লে দোয়া আর আবেদনপত্রের মতো দেখায় না, বরং সম্পর্কটিই হয়ে ওঠে: তিনি নিকটে, তিনি সাড়া দেন, আর চাওয়াই হলো বান্দার এই দুটিকে স্বীকার করে নেওয়ার উপায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking About Small Things",
          "bn": "ছোট জিনিস নিয়ে চাওয়া"
        },
        "p": [
          {
            "en": "The practical consequence is a change in threshold rather than in volume. Most people already call on Allah when something large breaks. What this verse suggests is that the small requests matter more than they look, because each one is an admission of need, and need is the only standing a servant has. Ask about the errand, the conversation you are dreading, the thing you could probably manage alone. Managing alone was never the point.",
            "bn": "এর ব্যবহারিক ফল হলো পরিমাণ নয়, বরং সীমারেখা বদলে যাওয়া। বড় কিছু ভেঙে পড়লে বেশির ভাগ মানুষ এমনিতেই আল্লাহকে ডাকে। এই আয়াত যা ইঙ্গিত করে তা হলো, ছোট চাওয়াগুলো দেখতে যতটা তুচ্ছ ততটা নয়, কারণ প্রতিটি চাওয়াই মুখাপেক্ষিতার স্বীকারোক্তি, আর মুখাপেক্ষিতাই বান্দার একমাত্র মর্যাদা। কাজটির জন্য চান, যে কথোপকথনটি নিয়ে আপনি শঙ্কিত তার জন্য চান, যেটি হয়তো একাই সামলে নিতে পারতেন তার জন্যও চান। একা সামলে নেওয়া কখনোই উদ্দেশ্য ছিল না।"
          }
        ]
      }
    ]
  }
});
