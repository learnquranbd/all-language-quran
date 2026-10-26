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
          "bn": "দুই ধাপে অভিযোগ"
        },
        "p": [
          {
            "en": "The surah opens by blessing the One who sent down the Furqān, the Criterion, upon His servant as a warning to the worlds (25:1), and it has just exposed the idols that create nothing and own neither harm nor benefit for themselves (25:3). Then comes the reply of those who reject him. Their sentence carries two charges, not one. First: in hādhā illā ifk iftarāh — this is nothing but a lie he invented. Then, as though that were still too thin, a second: wa a'ānahu 'alayhi qawmun ākharūn — and another people helped him with it.",
            "bn": "সূরাটি শুরু হয়েছে সেই মহান সত্তার বরকতের ঘোষণা দিয়ে, যিনি তাঁর বান্দার উপর ফুরকান নাজিল করেছেন, অর্থাৎ সত্য-মিথ্যার পার্থক্যকারী কিতাব, যাতে তিনি বিশ্ববাসীর জন্য সতর্ককারী হন (২৫:১)। একটু আগেই সূরা ফাঁস করে দিয়েছে সেই মূর্তিদের অসারতা, যারা কিছুই সৃষ্টি করে না, নিজেদের ভালো-মন্দেরও মালিক নয় (২৫:৩)। এরপর আসে অস্বীকারকারীদের জবাব। তাদের এক কথাতেই অভিযোগ একটা নয়, দুটো। প্রথমটা: ইন হা-যা ইল্লা ইফক ইফতারা-হু, এটা মিথ্যা ছাড়া কিছু নয়, সে নিজেই বানিয়েছে। তারপর, যেন এটুকুতে কথাটা জমল না, দ্বিতীয়টা: ওয়া আ'আনাহু আলাইহি কাওমুন আ-খারুন, আর অন্য এক জাতি এ কাজে তাকে সাহায্য করেছে।"
          },
          {
            "en": "So the accusation is no longer only that a man is lying. It is that he is lying with help, that the words must have a hidden human workshop behind them. The Qur'an lets the whole charge stand, and then answers it with two words of its own: fa-qad jā'ū ẓulman wa zūrā — they have come with injustice and falsehood. This piece follows both halves of the charge: who the 'others' were said to be, and why the reply to the borrowing claim was already there, waiting inside the Book they were trying to explain away.",
            "bn": "ফলে অভিযোগটা আর শুধু এটুকু থাকে না যে লোকটা মিথ্যা বলছে। এখন দাবি হলো, সে মিথ্যা বলছে অন্যের সাহায্য নিয়ে; এই কথাগুলোর পেছনে নিশ্চয়ই কিছু মানুষের গোপন কারখানা আছে। কুরআন পুরো অভিযোগটা হুবহু তুলে ধরে, তারপর নিজের দুটো শব্দে জবাব দেয়: ফাকাদ জা-ঊ যুলমান ওয়া যূরা, তারা অন্যায় আর মিথ্যা নিয়ে এসেছে। এই লেখায় অভিযোগের দুটো অংশই আমরা খতিয়ে দেখব: সেই 'অন্যেরা' কারা বলে দাবি করা হতো, আর ধার করার অভিযোগের জবাব কেন আগে থেকেই সেই কিতাবের ভেতরে অপেক্ষা করছিল, যাকে তারা উড়িয়ে দিতে চাইছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Were the Others?",
          "bn": "সেই অন্যেরা কারা?"
        },
        "p": [
          {
            "en": "Who was speaking? Al-Qurtubi, on the authority of Ibn 'Abbās, reports that the one who said this among them was an-Naḍr ibn al-Ḥārith, and that wherever the Qur'an mentions 'legends of the ancients' it points to him; Ibn Isḥāq, al-Qurtubi adds, described this man as one who used to injure the Prophet ﷺ. Al-Baghawī names the same figure — an-Naḍr and his circle — as the disbelievers meant here. So the commentators place a particular opponent behind the sentence, not a faceless crowd.",
            "bn": "কথাটা বলছিল কে? কুরতুবী ইবন আব্বাস (রাঃ)-এর সূত্রে বলেন, তাদের মধ্যে যে এ কথা বলত সে ছিল নাদর ইবনুল হারিস। কুরআনে যেখানেই 'পূর্বপুরুষদের কিসসা' কথাটা এসেছে, সেখানেই ইঙ্গিত তার দিকে। কুরতুবী আরও জানান, ইবন ইসহাকের বর্ণনায় এই লোকটি নবী ﷺ-কে কষ্ট দিত। বাগাভীও এখানে অস্বীকারকারী বলতে এই লোককেই বোঝান, নাদর আর তার দলবল। তাই তাফসীরকারেরা এই কথার পেছনে একজন নির্দিষ্ট বিরোধীকে দেখেন, নামহীন কোনো জটলাকে নয়।"
          },
          {
            "en": "And the 'others' who supposedly helped? At-Ṭabarī reports, through Ibn Abī Najīḥ from Mujāhid, that they were the Jews: the Meccans were saying that it was the Jews who taught Muḥammad ﷺ what he brought them, and this, at-Ṭabarī says, is the sense of wa a'ānahu 'alayhi qawmun ākharūn. Al-Baghawī carries the same reading from Mujāhid. Two independent commentaries thus preserve one early identification — that the alleged 'other people' were Jewish informants of the town.",
            "bn": "আর 'অন্যেরা', যারা নাকি সাহায্য করেছিল? তাবারী ইবন আবী নাজীহের মাধ্যমে মুজাহিদ থেকে বর্ণনা করেন, তারা ছিল ইহুদিরা। মক্কাবাসীরা বলত, মুহাম্মাদ ﷺ যা নিয়ে আসছেন তা তাঁকে ইহুদিরাই শেখাচ্ছে। তাবারীর মতে ওয়া আ'আনাহু আলাইহি কাওমুন আ-খারুন কথার এটাই মর্ম। বাগাভীও মুজাহিদ থেকে একই ব্যাখ্যা আনেন। এভাবে দুটি আলাদা তাফসীরে একই পুরোনো ব্যাখ্যা টিকে আছে: কথিত সেই 'অন্য জাতি' মানে শহরের কিছু ইহুদি, যারা নাকি তাঁকে এসব জানিয়ে দিত।"
          },
          {
            "en": "Others named individuals. Al-Qurtubi, again from Ibn 'Abbās, lists three men from the People of the Book — Abū Fukayha the freedman of Banū al-Ḥaḍramī, 'Addās, and Jabr — and notes that they had already been discussed back in Sūrat an-Naḥl. Al-Baghawī gives an overlapping but not identical list — Jabr, Yasār, and 'Addās ibn 'Ubayd, People of the Book living at Makka — and reports from al-Ḥasan a different name again, one 'Ubayd al-Ḥabashī. The lists do not match, and the commentators offer them as reports, not as settled fact.",
            "bn": "কেউ কেউ নির্দিষ্ট নামও বলেছেন। কুরতুবী আবার ইবন আব্বাস (রাঃ) থেকে আহলে কিতাবের তিনজনের নাম দেন: বনু হাদরামীর মুক্ত করা দাস আবু ফুকাইহা, আদ্দাস আর জাবর। তিনি জানান, এদের কথা আগেই সূরা নাহলে এসেছে। বাগাভীর তালিকা এর কাছাকাছি, তবে হুবহু এক নয়: জাবর, ইয়াসার আর আদ্দাস ইবন উবাইদ, মক্কায় থাকা আহলে কিতাবের লোক। হাসান থেকে তিনি আবার আরেকটি নাম আনেন, উবাইদ আল-হাবাশী। তালিকাগুলো মেলে না, আর তাফসীরকারেরা এগুলো বর্ণনা হিসেবেই পেশ করেন, প্রমাণিত সত্য হিসেবে নয়।"
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
            "bn": "কুরতুবী যখন সেই নামগুলোর জন্য পাঠককে সূরা নাহলে ফিরিয়ে নেন, তখন তিনি দেখিয়ে দেন, ধার করার অভিযোগের জবাব আগেই কোথায় দেওয়া হয়ে গেছে। সেখানে, ১৬:১০৩ আয়াতে, কুরআন হুবহু একই অভিযোগ তুলে ধরে: একজন মানুষ তাঁকে শেখাচ্ছে। আর এক বাক্যেই জবাব দেয়: তারা যার দিকে ইঙ্গিত করছে তার ভাষা অনারব, অথচ এটা স্পষ্ট আরবি ভাষা। কথিত সেই শিক্ষকের মুখের ভাষা আরবিই ছিল না, আর কিতাবটি সবচেয়ে উঁচু মানের আরবি। গল্পটা নিজের খুঁটিনাটির ভারেই ভেঙে পড়ে।"
          },
          {
            "en": "That is exactly why al-Muyassar, after stating the charge plainly — that they called the Qur'an a lie invented by Muḥammad ﷺ with the help of other people — closes on one sentence: the Qur'an is not something any human being could fabricate (fa-l-Qur'ānu laysa mimmā yumkinu li-basharin an yakhtaliqah). The point is not that this or that informant cannot be found. It is that the thing itself lies past human manufacture, so the picture of a hidden workshop of helpers never even gets off the ground.",
            "bn": "ঠিক এ কারণেই মুয়াসসার আগে অভিযোগটা খোলাখুলি বলে নেন: তারা কুরআনকে বলেছিল মুহাম্মাদ ﷺ-এর বানানো মিথ্যা, যা বানাতে অন্য লোকেরা তাঁকে সাহায্য করেছে। তারপর শেষ করেন এক বাক্যে: কুরআন এমন জিনিস নয় যা কোনো মানুষ বানাতে পারে। কথা এটা নয় যে অমুক বা তমুক শিক্ষককে খুঁজে পাওয়া যায় না। কথা হলো, জিনিসটাই মানুষের বানানোর সাধ্যের বাইরে। তাই গোপন সাহায্যকারীদের কারখানার গল্পটা দাঁড়ানোর সুযোগই পায় না।"
          },
          {
            "en": "As-Sa'dī presses the same nerve from the side of what they knew. He calls the charge sheer obstinacy (mukābara), a thing no sound mind could hold, because the Meccans of all people knew the Messenger ﷺ best — his truthfulness, his trustworthiness, the fullness of his integrity — and knew that neither he nor the whole of creation could bring a discourse this lofty, and that he had never sat with anyone to be coached in it. What they brought, as-Sa'dī concludes, was ẓulm and zūr — wrong and a lie.",
            "bn": "সা'দী একই জায়গায় আঘাত করেন, তবে মক্কাবাসীরা নিজেরা যা জানত সেই দিক থেকে। তিনি অভিযোগটাকে বলেন নিছক গোঁয়ার্তুমি, যা কোনো সুস্থ মাথায় আসতে পারে না। কারণ রাসূল ﷺ-কে সবচেয়ে ভালো চিনত মক্কাবাসীরাই: তাঁর সত্যবাদিতা, তাঁর আমানতদারি, তাঁর চরিত্রের পূর্ণতা। তারা জানত, এত উঁচু বাণী তিনি তো দূরের কথা, গোটা সৃষ্টি মিলেও আনতে পারবে না। এটাও জানত, তিনি কখনো কারও কাছে বসে এসব তালিম নেননি। সা'দীর উপসংহার: তারা যা এনেছে তা যুলম আর যূর, অন্যায় আর মিথ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Unlettered Man They Knew",
          "bn": "যে নিরক্ষর মানুষটিকে তারা চিনত"
        },
        "p": [
          {
            "en": "Ibn Kathir, commenting here, meets the borrowing charge with a fact the accusers themselves could not deny. It is established by mass-transmitted report, he says, that Muḥammad ﷺ never learned to read or write, at the beginning of his life or at its end. He grew up among them for some forty years before his mission, and in all that time they had called him al-Amīn, the Trustworthy, for the truthfulness and honesty they saw in him. An unlettered man of that settled reputation is a poor candidate for a secret literary partnership with foreign scribes.",
            "bn": "ইবন কাসীর এখানে ধার করার অভিযোগের জবাব দেন এমন এক তথ্য দিয়ে, যা অভিযোগকারীরা নিজেরাও অস্বীকার করতে পারত না। তিনি বলেন, বহু ধারায় বর্ণিত হয়ে এটা প্রতিষ্ঠিত যে মুহাম্মাদ ﷺ জীবনের শুরুতে বা শেষে কখনো পড়তে বা লিখতে শেখেননি। নবুয়তের আগে প্রায় চল্লিশ বছর তিনি তাদের মাঝেই বড় হয়েছেন। পুরো সময়টা তারা তাঁকে আল-আমীন বলে ডাকত, কারণ তাঁর মধ্যে তারা সততা আর বিশ্বস্ততা দেখেছিল। এমন পাকা সুনামের একজন নিরক্ষর মানুষ ভিনদেশি লেখকদের সঙ্গে গোপনে বসে কিতাব রচনা করবেন, এ কথা একেবারেই খাপ খায় না।"
          },
          {
            "en": "That unlettered state is the picture drawn by the report of how revelation began. Al-Bukhārī records from 'Ā'isha (RA) that when the angel first came to him in the cave of Ḥirā' and said 'Read', the Prophet ﷺ answered mā anā bi-qāri' — I am not one who reads — and said it again under the angel's grip, a second and a third time, before the words of Sūrat al-'Alaq were placed on him. This is a narration about the onset of revelation, not an occasion for 25:4; but it shows plainly the man the Meccans imagined as the author of a forgery he had been coached to write.",
            "bn": "সেই নিরক্ষরতার ছবিটাই ফুটে ওঠে ওহি শুরু হওয়ার বর্ণনায়। বুখারী আয়িশা (রাঃ) থেকে বর্ণনা করেন, হেরা গুহায় ফেরেশতা প্রথম এসে যখন বললেন 'পড়ুন', নবী ﷺ জবাব দিলেন, মা আনা বিকারি, আমি পড়তে জানি না। ফেরেশতা তাঁকে চেপে ধরলেন, তিনি আবার একই কথা বললেন, দ্বিতীয়বার, তৃতীয়বার। তারপর তাঁকে দেওয়া হলো সূরা আলাকের শুরুর শব্দগুলো। এটি ওহির সূচনার বর্ণনা, ২৫:৪ আয়াতের কোনো শানে-নুযূল নয়। তবে এ থেকে পরিষ্কার বোঝা যায়, মক্কাবাসীরা যাকে অন্যের শিখিয়ে দেওয়া জালিয়াতির লেখক ভাবছিল, সেই মানুষটি আসলে কেমন ছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verdict Named Twice",
          "bn": "দুই নামে ঘোষিত রায়"
        },
        "p": [
          {
            "en": "Return to the Qur'an's two-word answer. At-Ṭabarī takes the pair apart. Ẓulm, he reminds us, means at root putting a thing where it does not belong; the wrong here was to file God's own speech and revelation under the label of a fabrication invented by Muḥammad ﷺ. Zūr, he says, is at root the dressing-up of falsehood so that it looks like something true. And from Mujāhid he narrates the plain gloss on the whole clause — kadhiban, a lie, pure and simple. The verdict is not abuse thrown back; it is exact.",
            "bn": "ফিরে আসি কুরআনের সেই দুই শব্দের জবাবে। তাবারী শব্দ দুটোকে আলাদা করে দেখেন। তিনি মনে করিয়ে দেন, যুলমের মূল অর্থ কোনো জিনিসকে তার জায়গা ছাড়া অন্য জায়গায় রাখা। এখানে অন্যায়টা হলো আল্লাহর নিজের কালাম আর ওহিকে মুহাম্মাদ ﷺ-এর বানানো জালিয়াতি বলে দাগিয়ে দেওয়া। আর যূরের মূল অর্থ, তাঁর ভাষায়, মিথ্যাকে সাজিয়ে-গুছিয়ে সত্যের মতো দেখানো। মুজাহিদ থেকে তিনি গোটা বাক্যের সোজা ব্যাখ্যাটা আনেন: কিযব, নিছক মিথ্যা। এই রায় পাল্টা গালি নয়, একেবারে মাপা কথা।"
          },
          {
            "en": "Al-Baghawī reads the same pair as shirk and lie at once — associating partners and speaking falsehood — since to call God's word a human invention is both together. Ibn Kathir sharpens the edge: they have produced an unjust wrong and a lie, and they are the liars, knowing within themselves that what they claim is untrue. The charge, then, was not an honest mistake about where the Book came from. It was an accusation its own makers knew to be false, which is why the reply names it twice over: injustice, and a lie.",
            "bn": "বাগাভী শব্দ দুটোতে একসঙ্গে শিরক আর মিথ্যা দেখেন, কারণ আল্লাহর কালামকে মানুষের বানানো বলা মানে দুটোই একসঙ্গে করা। ইবন কাসীর কথাটা আরও ধারালো করেন: তারা অন্যায় আর মিথ্যা নিয়ে এসেছে, আর তারাই মিথ্যাবাদী; মনে মনে তারা জানে, তাদের দাবি সত্য নয়। তাহলে কিতাব কোথা থেকে এল, তা নিয়ে এটা সরল মনের কোনো ভুল ছিল না। যারা অভিযোগটা বানিয়েছিল, তারা নিজেরাই জানত এটা মিথ্যা। এ জন্যই জবাবে দুটো নাম: অন্যায়, আর মিথ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Charge That Keeps Shifting",
          "bn": "যে অভিযোগ বারবার রূপ বদলায়"
        },
        "p": [
          {
            "en": "Watch the charge move even across these few verses. In 25:4 the Qur'an is an invented lie with hidden co-authors. In the next breath, 25:5, it becomes legends of the ancients he has had written down, dictated to him morning and evening. A little later the target slides from the Book to the man: why does this messenger eat food and walk the markets (25:7), and then, you follow only a man bewitched (25:8). Forger, copyist, ordinary mortal, a man under a spell — the accusation cannot settle into a single shape.",
            "bn": "এই কয়েকটি আয়াতের ভেতরেই খেয়াল করুন, অভিযোগটা কীভাবে জায়গা বদলায়। ২৫:৪ আয়াতে কুরআন হলো বানানো মিথ্যা, যার পেছনে গোপন সহলেখক আছে। ঠিক পরের আয়াতে, ২৫:৫-এ, তা হয়ে যায় পূর্বপুরুষদের কিসসা, যা সে লিখিয়ে নিয়েছে, আর সকাল-সন্ধ্যা তাকে পড়ে শোনানো হয়। একটু পরে নিশানা কিতাব থেকে সরে যায় মানুষটার দিকে: এ কেমন রাসূল, যে খাবার খায় আর হাটবাজারে ঘোরে (২৫:৭)! তারপর: তোমরা তো এক যাদুগ্রস্ত লোকেরই অনুসরণ করছ (২৫:৮)। জালিয়াত, নকলনবিশ, সাধারণ মানুষ, যাদুগ্রস্ত লোক: অভিযোগটা কোনো এক চেহারায় থিতু হতে পারে না।"
          },
          {
            "en": "Ibn Kathir names the pattern outright. They were not sure what to accuse him of, he writes: at times a sorcerer, at times a poet, at times mad, at times a liar — and he cites the Qur'an's own summary, see what comparisons they strike for you; they have strayed and cannot find a way (17:48). A charge that keeps changing shape has stopped being an argument about whether a thing is true and become a hunt for any exit from it. The tell is not the content of the objection but its restlessness.",
            "bn": "ইবন কাসীর স্বভাবটার নাম সরাসরি বলে দেন। তিনি লেখেন, তারা ঠিক করতে পারত না তাঁকে কী বলে দোষ দেবে, কখনো যাদুকর, কখনো কবি, কখনো পাগল, কখনো মিথ্যাবাদী। আর তিনি কুরআনের নিজের সারকথাটাও তুলে ধরেন, দেখো তারা তোমার জন্য কেমন উপমা ছোড়ে, তারা পথ হারিয়েছে আর পথ খুঁজে পায় না (১৭:৪৮)। যে অভিযোগ বারবার রূপ বদলায়, সেটা আর কোনো জিনিস সত্য কি না তার তর্ক থাকে না, হয়ে দাঁড়ায় সেটা থেকে যেকোনো পথে পালানোর খোঁজ। আসল লক্ষণ আপত্তির বিষয়বস্তু নয়, তার অস্থিরতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Named Speakers, Not a People",
          "bn": "নির্দিষ্ট বক্তা, গোটা জাতি নয়"
        },
        "p": [
          {
            "en": "One caution must be stated plainly, in the reading and in the living of it. This verse reports what a particular set of Meccan opponents said, and the commentators, in explaining 'another people', report names — an-Naḍr ibn al-Ḥārith among the speakers, and among the alleged informants certain Jews or People of the Book of that town. The verse speaks only of what it names: a false claim made by named individuals in one specific dispute. It licenses nothing against any living person or community.",
            "bn": "একটা সতর্কতার কথা পরিষ্কার বলে রাখা দরকার, পড়ার বেলায়ও, জীবনে মানার বেলায়ও। এই আয়াত জানায়, মক্কার একদল নির্দিষ্ট বিরোধী কী বলেছিল। আর 'অন্য জাতি'-র ব্যাখ্যায় তাফসীরকারেরা কিছু নাম আনেন: বক্তাদের মধ্যে নাদর ইবনুল হারিস, আর কথিত তথ্যদাতাদের মধ্যে সেই শহরের কিছু ইহুদি বা আহলে কিতাব। আয়াতের কথা ঠিক ততটুকুই: একটা নির্দিষ্ট বিবাদে নির্দিষ্ট কয়েকজন লোকের একটা মিথ্যা দাবি। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না।"
          },
          {
            "en": "To take an early report of who was rumoured to be coaching the Prophet ﷺ and turn it into suspicion of Jews, or of the People of the Book, as a class today is to repeat the very sin the verse condemns — putting a thing where it does not belong, which is ẓulm itself. The Qur'an's quarrel here is with a lie about the Book's origin, not with a people. To read it as a warrant to accuse a whole community would be, in the verse's own words, injustice and falsehood.",
            "bn": "নবী ﷺ-কে কে শিখিয়ে দিচ্ছে বলে একসময় গুজব ছিল, সেই পুরোনো বর্ণনা টেনে এনে আজ ইহুদি বা আহলে কিতাবকে গোটা জাত ধরে সন্দেহ করা মানে আয়াত যে গুনাহর নিন্দা করছে, ঠিক সেটাই আবার করা: জিনিসকে তার জায়গার বাইরে বসানো, আর সেটাই তো যুলম। এখানে কুরআনের বিরোধ কিতাবের উৎস নিয়ে বানানো এক মিথ্যার সঙ্গে, কোনো জাতির সঙ্গে নয়। একে গোটা সম্প্রদায়কে দোষ দেওয়ার ছাড়পত্র বানালে, আয়াতেরই ভাষায়, সেটা হবে অন্যায় আর মিথ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Door Left Open",
          "bn": "যে দরজা খোলা রইল"
        },
        "p": [
          {
            "en": "After a charge this ugly, the surah's next move is startling. Say: it was sent down by Him who knows every secret in the heavens and the earth; indeed He is ever Forgiving, Merciful (25:6). Ibn Kathir reads those closing names as an open invitation: after all their lying and stubbornness and what they had said about the Messenger ﷺ and the Book, He still calls them to turn back, for His mercy is vast and His forbearance immense, and whoever repents to Him is received. Al-Ḥasan al-Baṣrī marvels at it — they were killing His friends, and He was calling them to repentance and mercy.",
            "bn": "এমন কুৎসিত অভিযোগের পর সূরার পরের পদক্ষেপটা চমকে দেয়। বলো, তা নাজিল করেছেন সেই সত্তা, আসমান-যমীনের প্রতিটি গোপন কথা যিনি জানেন। নিশ্চয়ই তিনি বড়ই ক্ষমাশীল, পরম দয়ালু (২৫:৬)। ইবন কাসীর শেষের এই নামগুলোকে পড়েন খোলা এক আহ্বান হিসেবে। তাদের এত মিথ্যা, এত গোঁয়ার্তুমি, রাসূল ﷺ আর কিতাব নিয়ে এত কথার পরও তিনি তাদের ফিরে আসতে ডাকেন, কারণ তাঁর রহমত বিশাল আর তাঁর সহনশীলতা অপার, আর যে তাঁর কাছে তওবা করে তাকে তিনি কবুল করেন। হাসান বসরী এতে বিস্মিত হন, তারা তাঁর বন্ধুদের হত্যা করছিল, আর তিনি তাদের ডাকছিলেন তওবা আর রহমতের দিকে।"
          },
          {
            "en": "That leaves the harder question, the one under the whole scene. The Meccans built a story about where the Book came from so they would not have to answer what it said. The same reflex is nearer than we like to admit. When a truth reaches me that would cost me something to accept, do I weigh what was said, or stay busy with the one who said it, assembling a story about how he 'really' came by it? The honest reply to a message is a reply to the message. Everything else is an exit, and this verse has already named it: injustice, and a lie.",
            "bn": "এরপর থাকে আরও কঠিন প্রশ্নটা, যা গোটা দৃশ্যের নিচে চাপা আছে। মক্কাবাসীরা কিতাব কোথা থেকে এল তা নিয়ে একটা গল্প বানিয়েছিল, যাতে কিতাব কী বলছে তার জবাব দিতে না হয়। এই স্বভাবকে আমরা যতটা দূরের ভাবতে চাই, আসলে তা ততটা দূরে নয়। যে সত্য মানতে গেলে আমার কিছু খোয়াতে হবে, তা যখন আমার কাছে আসে, আমি কি কথাটা ওজন করি? নাকি যে বলেছে তাকে নিয়েই ব্যস্ত থাকি, আর গল্প সাজাই, সে 'আসলে' এটা কোথা থেকে পেল? কোনো বার্তার সৎ জবাব হলো বার্তাটারই জবাব। বাকি সবই পালানোর পথ, আর এই আয়াত আগেই তার নাম বলে দিয়েছে: অন্যায়, আর মিথ্যা।"
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
            "bn": "মক্কার অবিশ্বাসীদের মনে একজন রাসূল কেমন হবেন তার একটা মাপকাঠি ছিল, আর এই মানুষটি সে মাপে মিলল না। ২৫:৭ আয়াতে তারা আপত্তি তোলে: এ কেমন রাসূল, যে খাবার খায় আর হাটে-বাজারে হেঁটে বেড়ায়? তাদের ধারণায় আল্লাহর সত্যিকারের দূতের রুটির দরকার হওয়ার কথা নয়, জীবিকার জন্য দরদাম করার কথা নয়। মুয়াসসার তাদের আপত্তি সোজা কথায় তুলে ধরে: সে আমাদের মতোই খায়, আর রিজিকের খোঁজে বাজারে ঘোরে। তাই তারা দাবি করে, তার সঙ্গে একজন ফেরেশতা নেমে আসুক, চোখে দেখা এক সতর্ককারী, যে তার দাবির সাক্ষী হবে।"
          },
          {
            "en": "Then comes 25:8 with two more demands. Or why is a treasure not cast down to him, or a garden given him to eat from? Ibn Kathir sets these beside Pharaoh's taunt in 43:53, why are golden bracelets not thrown on him, or angels sent along with him. The mind is the same across the two scenes: measure the messenger by wealth and spectacle, and if the grandeur is missing, refuse the message. The verse gathers their tests into one list so that we can see the error whole.",
            "bn": "এরপর ২৫:৮ আয়াতে আরও দুটি দাবি: তার কাছে ধন-ভান্ডার ফেলা হয় না কেন, কিংবা তার একটা বাগান হয় না কেন, যা থেকে সে খাবে? ইবন কাসীর এ দাবিগুলোকে রাখেন ৪৩:৫৩ আয়াতে ফেরাউনের টিটকারির পাশে: তার গায়ে সোনার কাঁকন পরানো হলো না কেন, বা তার সঙ্গে ফেরেশতারা এল না কেন? দুই দৃশ্যেই মানসিকতা একই: রাসূলকে মাপো ধন আর জাঁকজমক দিয়ে, আর সেই জাঁক না থাকলে বার্তাটাই নাকচ করো। আয়াতটি তাদের এই সব শর্ত এক তালিকায় সাজিয়ে দেয়, যাতে ভুলটা আমরা পুরোটা একবারে দেখতে পাই।"
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
            "bn": "আগে ধন-ভান্ডারের কথা ধরুন। বাগাভী বলেন, এ হলো আসমান থেকে তার উপর নেমে আসা এক ধন, যা সে খরচ করতে পারবে, ফলে রুজির জন্য তাকে আর ছোটাছুটি করতে হবে না। সাদী কথাটা আরও ধারালো করেন: কোনো পরিশ্রম ছাড়াই জমা হওয়া সম্পদ। তাদের কল্পনার নবী এমন একজন, যিনি সাধারণ অভাবের ঊর্ধ্বে, যাঁর খরচ আসে আসমান থেকে, যাঁকে কখনো বাজারে দরদাম করতে দেখা যায় না। ইবন কাসীরও ধনটাকে একইভাবে বোঝেন: এমন অর্থ, যা থেকে সে খরচ করবে।"
          },
          {
            "en": "The garden is the second half of the wish. At-Tabari glosses jannah simply as a bustan, an orchard, and Ibn Kathir adds a vivid touch: a garden that would travel with him wherever he went, so its fruit was always at hand. As-Sa'di ties it back to 25:7: with such a garden he would be spared walking the markets to seek his food. Both demands share one assumption, that God shows His favour by removing a man from labour and want. The Qur'an will answer that assumption rather than grant it.",
            "bn": "দ্বিতীয় চাওয়া হলো বাগান। তাবারী জান্নাত শব্দটির অর্থ করেন সোজা 'বুসতান', মানে বাগান। ইবন কাসীর এতে জীবন্ত এক ছোঁয়া যোগ করেন: এমন বাগান যা তার সঙ্গে সঙ্গে চলবে, যেখানেই সে যাবে, যাতে ফল সব সময় হাতের কাছে থাকে। সাদী একে ২৫:৭ আয়াতের সঙ্গে বাঁধেন: এমন বাগান থাকলে খাবারের খোঁজে তাকে আর বাজারে হাঁটতে হতো না। দুই দাবিরই মূলে একটি ধারণা, আল্লাহ তাঁর অনুগ্রহ দেখান মানুষকে খাটুনি আর অভাব থেকে সরিয়ে দিয়ে। কুরআন এই ধারণা মেনে না নিয়ে বরং এর জবাব দেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verb, Two Readings",
          "bn": "এক ক্রিয়া, দুই কিরাআত"
        },
        "p": [
          {
            "en": "A small difference of recitation sits inside the words yakulu minha, from which he eats. At-Tabari records that the reciters of Madinah and Basrah, and some of Kufa, read it with ya, yakulu, meaning the messenger eats from the garden. The general reciters of Kufa read it with nun, nakulu, meaning we eat from it. Al-Baghawi names the second reading precisely: Hamzah and al-Kisa'i read nakulu, that is, we too would eat from it.",
            "bn": "'ইয়াকুলু মিনহা', মানে 'যা থেকে সে খায়', এই শব্দগুলোর ভেতরে কিরাআতের ছোট্ট একটা পার্থক্য আছে। তাবারী লেখেন, মদীনা ও বসরার ক্বারীরা আর কূফার কয়েকজন এটা 'ইয়া' দিয়ে পড়েন, 'ইয়াকুলু', অর্থাৎ রাসূল বাগান থেকে খান। কূফার অধিকাংশ ক্বারী পড়েন 'নূন' দিয়ে, 'নাকুলু', অর্থাৎ আমরা তা থেকে খাই। বাগাভী দ্বিতীয় কিরাআতের পাঠকদের নাম বলে দেন: হামযা ও কিসাঈ 'নাকুলু' পড়েন, অর্থাৎ আমরাও তা থেকে খেতাম।"
          },
          {
            "en": "The two readings shift who benefits. On the ya reading the demand is only about the Prophet's own comfort. On the nun reading the objectors imagine sharing in the garden themselves. At-Tabari prefers the ya reading, and gives his reason: the pagans had asked the Prophet to seek these favours for himself, not for them, so it would not fit for them to say seek it that we may eat. He adds that 25:10, blessed is He who could give you better than that, gardens and palaces, addresses the Prophet alone and confirms the point.",
            "bn": "দুই কিরাআতে বদলে যায়, লাভটা কার। 'ইয়া' কিরাআতে দাবিটা কেবল নবীর নিজের আরামের। 'নূন' কিরাআতে আপত্তিকারীরা কল্পনা করে, তারাও সেই বাগানে ভাগ পাবে। তাবারী 'ইয়া' কিরাআতকেই প্রাধান্য দেন, আর কারণও বলেন: মুশরিকরা নবীকে বলেছিল এসব অনুগ্রহ নিজের জন্য চাইতে, তাদের জন্য নয়। তাই তাদের মুখে 'চাও, যাতে আমরা খেতে পারি' কথাটা খাপ খায় না। তিনি আরও বলেন, ২৫:১০ আয়াত, মহাকল্যাণময় তিনি, যিনি চাইলে তোমাকে এর চেয়ে ভালো বাগান ও প্রাসাদ দিতে পারতেন, শুধু নবীকেই সম্বোধন করে, আর তাতে কথাটা আরও পাকা হয়।"
          },
          {
            "en": "Al-Qurtubi reaches the same preference by grammar. Both readings, he says, are good and carry a sound meaning, yet the ya reading is clearer, because the Prophet alone has just been mentioned, so the pronoun returns to him most naturally; he cites this from an-Nahhas. Here two masters of tafsir agree on the stronger reading while keeping the weaker one as a valid recitation, not an error. The disagreement is small, but the habit is the point: name both, weigh both, and do not flatten a real variant into a single line.",
            "bn": "কুরতুবী ব্যাকরণের পথ ধরে একই সিদ্ধান্তে পৌঁছান। তিনি বলেন, দুটো কিরাআতই ভালো, দুটোরই অর্থ সঠিক, তবু 'ইয়া' কিরাআত বেশি স্পষ্ট। কারণ ঠিক আগে শুধু নবীর কথাই এসেছে, তাই সর্বনামটা সবচেয়ে স্বাভাবিকভাবে তাঁর দিকেই ফেরে; এ কথা তিনি নাহহাস থেকে নিয়েছেন। এখানে তাফসীরের দুই ইমাম জোরালো কিরাআতের ব্যাপারে একমত, অথচ দুর্বলটিকে ভুল বলেন না, বৈধ কিরাআত হিসেবেই রেখে দেন। মতভেদটা ছোট, কিন্তু আসল শিক্ষা এই অভ্যাসে: দুটোরই উল্লেখ করা, দুটোই ওজন করা, আর সত্যিকারের একটা ভিন্ন কিরাআতকে মুছে এক লাইনে নামিয়ে না আনা।"
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
            "bn": "আপত্তিকারীরা নবীর যে দিকটা নিয়ে আপত্তি তুলেছিল, ঠিক সেটাই তাঁকে মানুষের নাগালে এনে দেয়। ইবন কাসীর তাদের কথার ব্যাখ্যায় বলেন, তিনি চলাফেরা করতেন, প্রায়ই বাজারে যেতেন ব্যবসা আর রুজির খোঁজে। সাদীও বলেন রিজিকের খোঁজে তাঁর বাজারে যাওয়ার কথা। তিনি এমন মানুষ, যিনি ক্ষুধা চিনতেন, খাটুনি চিনতেন, মানুষের মাঝে কেনাবেচা করতেন; সম্পদের দেয়ালের আড়ালে থাকা দূরের কেউ ছিলেন না। অবিশ্বাসীরা এই কাছে থাকাটাকে দোষ ভেবেছিল। ঠিকভাবে বুঝলে এটাই রহমত।"
          },
          {
            "en": "A messenger who eats and works can be followed, because his life can be copied. Had guidance come through an angel, or through a rich man walled off from need, the ordinary believer could admire it but never imitate it. Because the Prophet lived within the same limits as those he called, every part of his conduct, from how he ate to how he traded, became a pattern within reach. The very humanity the Makkans mocked is what makes him, in the Qur'an's own words, a beautiful example to follow, in 33:21.",
            "bn": "যে রাসূল খাবার খান, পরিশ্রম করেন, তাঁকে অনুসরণ করা যায়, কারণ তাঁর জীবন হুবহু অনুকরণ করা যায়। হিদায়াত যদি আসত কোনো ফেরেশতার মাধ্যমে, কিংবা অভাবের নাগালের বাইরে থাকা কোনো ধনীর মাধ্যমে, সাধারণ মুমিন হয়তো মুগ্ধ হতো, কিন্তু অনুকরণ করতে পারত না। নবী যাদের ডেকেছেন, তিনি তাদেরই মতো একই সীমার ভেতরে জীবন কাটিয়েছেন। তাই খাওয়া থেকে কেনাবেচা পর্যন্ত তাঁর প্রতিটি আচরণ এমন আদর্শ হয়ে উঠেছে, যা সবার নাগালে। মক্কাবাসীরা তাঁর যে মানুষ হওয়াকে বিদ্রূপ করেছিল, সেটাই তাঁকে বানিয়েছে, কুরআনের ভাষায়, অনুসরণের জন্য উত্তম আদর্শ (৩৩:২১)।"
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
            "bn": "আপত্তির শেষটা একটা খোঁচা, তবে সেটা বার্তার দিকে নয়, যারা বার্তা মেনেছে তাদের দিকে: তোমরা তো এক 'মাসহুর', যাদুগ্রস্ত লোকেরই অনুসরণ করছ। মুয়াসসার 'মাসহুর'-এর ব্যাখ্যা করেন এমন লোক, যার উপর যাদু ভর করেছে আর তার বুদ্ধি কাবু করে ফেলেছে। এটাই মূল অর্থ: যাদুতে আচ্ছন্ন এক লোক, যার বুদ্ধি আর তার নিজের বশে নেই। ফলে যে তাকে বিশ্বাস করে, সে যেন একটা ভাঙা যন্ত্রের উপর ভরসা করছে। তার একটা কথারও জবাব না দিয়ে সব কথা উড়িয়ে দেওয়ার এ এক কৌশল।"
          },
          {
            "en": "Other readings sit alongside it. Al-Baghawi glosses mashur first as makhdu', deceived or taken in; then reports a second view, masruf 'ani-l-haqq, one turned away from the truth. Ibn Kathir, listing the charges thrown at the Prophet, gathers them together: they called him a sorcerer, or bewitched, or crazy, or a liar, or a poet. The commentators do not force these into one meaning. They let bewitched, deceived, and turned from the truth stand as the range the word carried, with bewitched foremost.",
            "bn": "এর পাশাপাশি আরও কিছু ব্যাখ্যা আছে। বাগাভী 'মাসহুর'-এর প্রথম অর্থ করেন 'মাখদূ', মানে প্রতারিত, ধোঁকা খাওয়া লোক; এরপর দ্বিতীয় একটি মত আনেন, 'মাসরূফ আনিল হক্ক', মানে সত্য থেকে সরিয়ে দেওয়া লোক। ইবন কাসীর নবীর দিকে ছোড়া অপবাদগুলো একসঙ্গে গোনেন: তারা তাঁকে বলেছে যাদুকর, বা যাদুগ্রস্ত, বা পাগল, বা মিথ্যুক, বা কবি। তাফসীরকারেরা এগুলোকে জোর করে এক অর্থে বাঁধেন না। যাদুগ্রস্ত, প্রতারিত আর সত্য থেকে বিমুখ, এই সবগুলোকেই তাঁরা শব্দটির অর্থের পরিসর হিসেবে রেখে দেন, তবে সবার আগে যাদুগ্রস্ত।"
          },
          {
            "en": "What none of the readings can supply is a reason. As-Sa'di makes the sharpest observation here: they said this while they knew the perfection of his intellect, the excellence of his speech, and his freedom from every fault worth naming. The charge of sorcery was not a diagnosis; it was a way to be rid of a man they could not answer. When an argument cannot be met, it is easier to declare its speaker unwell than to weigh what he actually said.",
            "bn": "কোনো ব্যাখ্যাই যা দিতে পারে না, তা হলো এ কথার পক্ষে কোনো কারণ। সাদী এখানে সবচেয়ে ধারালো কথাটা বলেন: তারা এটা বলেছিল জেনেশুনেই। তারা জানত তাঁর বুদ্ধি কত পূর্ণ, তাঁর কথা কত সুন্দর, আর উল্লেখ করার মতো কোনো দোষই তাঁর নেই। যাদুর অপবাদ কোনো রোগ ধরার ব্যাপার ছিল না; যে মানুষের জবাব তারা দিতে পারছিল না, তাঁর হাত থেকে রেহাই পাওয়ার উপায় ছিল। যুক্তির জবাব দিতে না পারলে বক্তাকে অসুস্থ ঘোষণা করা সহজ, তিনি আসলে কী বললেন তা ওজন করার চেয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Wrongdoing, Not Confusion",
          "bn": "জুলুম, সংশয় নয়"
        },
        "p": [
          {
            "en": "The verse does not call these speakers doubters or the confused; it calls them az-zalimun, the wrongdoers. As-Sa'di draws the line exactly: what drove them to speak was their wrongdoing, not any genuine confusion on their part. At-Tabari identifies them as the polytheists speaking to the believers, telling the faithful that in following Muhammad they follow only a bewitched man. The name the Qur'an gives the speakers already carries its verdict on the speech.",
            "bn": "আয়াত এই বক্তাদের সন্দিহান বা বিভ্রান্ত বলে না; বলে 'আয-যালিমূন', জালিমরা। সাদী রেখাটা ঠিক জায়গায় টানেন: তাদের এ কথা বলতে ঠেলে দিয়েছিল তাদের জুলুম, কোনো সত্যিকারের সংশয় নয়। তাবারীর মতে এরা মুশরিক, আর কথাটা তারা বলছিল মুমিনদের: মুহাম্মাদকে মেনে তোমরা তো কেবল এক যাদুগ্রস্ত লোকের পিছু নিচ্ছ। কুরআন বক্তাদের যে নাম দেয়, তার মধ্যেই তাদের কথার ব্যাপারে রায় লেখা আছে।"
          },
          {
            "en": "This must be said plainly, in what the verse condemns and in what it does not. The verse records the words of a group of deniers in Makkah and names their sin; it speaks only of what it names and licenses nothing against any living person or community. It is no warrant to brand people today as bewitched, deceived, or astray for holding a different view, nor to borrow the wrongdoers' tactic of dismissing a person instead of answering an argument. The lesson faces inward, at how I judge, not outward as a label to hand out.",
            "bn": "কথাটা পরিষ্কার বলা দরকার: আয়াত কী নিন্দা করে, আর কী করে না। আয়াতটি মক্কার একদল অস্বীকারকারীর কথা তুলে ধরে আর তাদের গুনাহের নাম বলে দেয়। এর বেশি কিছু নয়; কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এটি দেয় না। ভিন্ন মত রাখার কারণে আজ কাউকে যাদুগ্রস্ত, প্রতারিত বা পথভ্রষ্ট বলে দাগিয়ে দেওয়ার ছাড়পত্র এ আয়াত নয়। যুক্তির জবাব না দিয়ে মানুষটাকেই উড়িয়ে দেওয়ার সেই জালিমদের কৌশল ধার করার অনুমতিও নয়। শিক্ষাটা নিজের দিকে ফেরানো: আমি কীভাবে বিচার করি। অন্যের গায়ে সেঁটে দেওয়ার মতো কোনো লেবেল এটা নয়।"
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
            "bn": "এখানে যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি। নিচের বর্ণনাটিও তাঁদের কেউ ২৫:৮ আয়াতের সঙ্গে জোড়েননি, তবে জালিমরা যে মাপকাঠি মানতে রাজি হয়নি, এ হাদিস ঠিক সেটারই নাম বলে দেয়। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: নিশ্চয় আল্লাহ তোমাদের চেহারা আর সম্পদের দিকে তাকান না, বরং তিনি তাকান তোমাদের অন্তর আর আমলের দিকে। হাদিসটি সহীহ মুসলিমে আছে, সংকলকের মানদণ্ডে সহীহ।"
          },
          {
            "en": "Set that beside the demand of 25:8 and the answer is complete. The Makkans wanted the messenger measured by faces and wealth, by treasure heaped on him and a garden at his door. The hadith says God weighs neither, and weighs instead the heart and what it does. A man walking to market with nothing in his hands may carry more before God than the man behind gates of gold. The objectors were sorting by the wrong ledger, and the sorting itself was the error.",
            "bn": "এ কথা ২৫:৮ আয়াতের দাবির পাশে রাখুন, জবাব পূর্ণ হয়ে যায়। মক্কাবাসীরা চেয়েছিল রাসূলকে মাপা হোক চেহারা আর সম্পদ দিয়ে, তার উপর স্তূপ করা ধন আর দুয়ারের বাগান দিয়ে। হাদিস বলছে, আল্লাহ এর কোনোটাই ওজন করেন না, বরং ওজন করেন অন্তর আর তার আমল। খালি হাতে বাজারে হাঁটা এক মানুষ আল্লাহর কাছে হয়তো সোনার ফটকের আড়ালের মানুষটির চেয়ে বেশি ভার বহন করে। আপত্তিকারীরা ভুল খাতায় হিসাব কষছিল, আর সেই হিসাব কষাটাই ছিল ভুল।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Chose to Withhold",
          "bn": "যা তিনি ইচ্ছে করেই দেননি"
        },
        "p": [
          {
            "en": "Could God have granted their list? Ibn Kathir answers that all of this, the treasure, the garden, the descending angel, is easy for God, but He had a wisdom in leaving it, and His is the conclusive proof, lahu-l-hujjatu-l-balighah. The withholding was not inability; it was choice. And the very next passage lifts the matter higher: 25:10 declares blessed is He who, if He willed, could give you better than that, gardens beneath which rivers flow, and palaces. The gift they demanded was small beside what He can give and, Ibn Kathir notes from Mujahid, could give even in this world.",
            "bn": "আল্লাহ কি তাদের ফর্দ পূরণ করতে পারতেন? ইবন কাসীরের জবাব: ধন, বাগান, নেমে আসা ফেরেশতা, এসবই আল্লাহর জন্য সহজ। কিন্তু না দেওয়ার মধ্যে তাঁর হিকমত ছিল, আর চূড়ান্ত দলিল তাঁরই। না দেওয়াটা অক্ষমতা ছিল না, ছিল তাঁর নিজের বাছাই। আর ঠিক পরের অংশ বিষয়টাকে আরও উঁচুতে তোলে: ২৫:১০ আয়াত ঘোষণা করে, মহাকল্যাণময় তিনি, যিনি চাইলে তোমাকে এর চেয়ে ভালো দিতে পারতেন, এমন বাগান যার নিচ দিয়ে নদী বয়, আর প্রাসাদ। তিনি যা দিতে পারেন, তার তুলনায় তাদের চাওয়া উপহার সামান্য। ইবন কাসীর মুজাহিদের সূত্রে বলেন, এমনকি এই দুনিয়াতেও তিনি তা দিতে পারতেন।"
          },
          {
            "en": "So the refusal to send treasure was itself an argument. Had a garden and a fortune arrived, faith would have become a transaction, and the message would have been believed for its packaging rather than its truth. God left the messenger plain on purpose, so that whoever followed him followed the truth of what he brought. The question the verse leaves is not whether guidance can afford gold, but whether I will accept the truth when it comes to me with empty hands.",
            "bn": "তাই ধন না পাঠানোটাই ছিল একটা যুক্তি। বাগান আর সম্পদ এসে গেলে ঈমান হয়ে যেত লেনদেন, আর মানুষ বার্তাটা মানত তার মোড়ক দেখে, সত্য দেখে নয়। আল্লাহ ইচ্ছে করেই রাসূলকে সাদামাটা রেখেছেন, যাতে যে তাঁকে অনুসরণ করে, সে অনুসরণ করে তাঁর আনা সত্যকেই। আয়াত যে প্রশ্ন রেখে যায়, তা এই নয় যে হিদায়াতের সঙ্গে সোনা আসতে পারত কি না। প্রশ্নটা হলো: সত্য যখন খালি হাতে আমার কাছে আসে, আমি কি তা কবুল করব?"
          }
        ]
      }
    ]
  },
  "25:15": {
    "sections": [
      {
        "h": {
          "en": "A Question Put to the Deniers",
          "bn": "অস্বীকারকারীদের প্রতি এক প্রশ্ন"
        },
        "p": [
          {
            "en": "By the time this verse arrives, the reader has just watched a terrible scene. Those who denied the Hour are dragged toward a Fire that rages and roars when it sees them from afar (25:12), thrown bound into a narrow place within it (25:13), and told to cry not for a single destruction but for many (25:14). Then the address turns: Say, is that better, or the Garden of Eternity? At-Tabari reads the opening exactly this way, as words to the deniers of the Hour: is this Fire, whose description your Lord has laid out for you, better?",
            "bn": "এই আয়াত আসার আগে পাঠক এক ভয়ংকর দৃশ্য দেখে ফেলেছে। যারা কিয়ামাত অস্বীকার করেছিল, তাদের টেনে নেওয়া হচ্ছে সেই আগুনের দিকে, যা দূর থেকে দেখলেই ক্রুদ্ধ গর্জন করে ওঠে (২৫:১২), তাদের বাঁধা অবস্থায় ছুড়ে দেওয়া হয় তার ভেতরের সংকীর্ণ কোণে (২৫:১৩), আর বলা হয় এক মৃত্যুকে নয়, বহু মৃত্যুকে ডাকতে (২৫:১৪)। এরপর সম্বোধন ঘুরে যায়: বলো, এটা ভালো, না চিরস্থায়ী জান্নাত? তাবারী আয়াতের শুরুটা ঠিক এভাবেই পড়েন, কিয়ামাত অস্বীকারকারীদের উদ্দেশে বলা কথা হিসেবে: এই আগুন, যার বর্ণনা তোমাদের রব তোমাদের দিয়েছেন, সেটা কি ভালো?"
          },
          {
            "en": "Ibn Kathir spells out what this points back to. It is, he says, the state of those wretched ones dragged on their faces to Hell, met with a scowling face, with fury and roaring, thrown into its cramped spaces bound at the shoulders, unable to move, unable to help themselves, unable to escape what they are in. Against all of that stands the alternative. The verse does not add a fresh threat; it takes the threat just given and sets a second picture beside it, so that the two can be seen together and weighed against each other.",
            "bn": "'এটা' বলতে কী বোঝানো হচ্ছে, ইবন কাসীর তা খুলে বলেন। তাঁর মতে, এটা সেই হতভাগাদের অবস্থা, যাদের মুখের উপর উপুড় করে টেনে নেওয়া হয় জাহান্নামের দিকে। সেখানে তাদের স্বাগত জানায় এক বিকৃত, ক্রুদ্ধ চেহারা, ক্রোধ আর গর্জন। তারপর কাঁধ পর্যন্ত বেঁধে ছুড়ে ফেলা হয় তার সরু জায়গাগুলোতে। তারা নড়তে পারে না, নিজেদের সাহায্য করতে পারে না, যে অবস্থায় আছে তা থেকে বেরোতেও পারে না। এই সবকিছুর বিপরীতে দাঁড়িয়ে আছে অন্য পরিণতিটি। আয়াত নতুন কোনো হুমকি যোগ করে না। এইমাত্র দেওয়া হুমকির পাশে আরেকটা ছবি বসিয়ে দেয়, যাতে দুটো একসঙ্গে দেখে একটাকে আরেকটার সঙ্গে ওজন করা যায়।"
          },
          {
            "en": "That pairing is the whole force of the line. A scene of the Fire alone frightens; a scene of the Garden alone comforts. Placed as a question with two named answers, they become a choice, and the choice is not abstract. It is the direction a person walks in this life, made visible by naming where each road ends. The verse hands the deniers, and every later reader, the clarity of seeing both destinations at once and being asked, plainly, which of the two they are living toward.",
            "bn": "এই পাশাপাশি রাখাটাই আয়াতের আসল জোর। শুধু আগুনের দৃশ্য ভয় দেখায়, শুধু জান্নাতের দৃশ্য সান্ত্বনা দেয়। কিন্তু নাম ধরে দুটো উত্তর দিয়ে প্রশ্নের আকারে সামনে রাখলে তা হয়ে যায় একটা বাছাই, আর সে বাছাই কোনো তাত্ত্বিক ব্যাপার নয়। এ হলো এই জীবনে মানুষ কোন দিকে হাঁটছে, সেটাই; প্রতিটি পথ কোথায় গিয়ে শেষ হয়, তা নাম ধরে বলে দেওয়ায় দিকটা চোখের সামনে স্পষ্ট হয়ে ওঠে। আয়াত অস্বীকারকারীদের, আর পরে যারা পড়বে তাদের প্রত্যেককে, দুটো ঠিকানা একসঙ্গে দেখার সুযোগ দেয়। তারপর সোজাসুজি জানতে চায়, দুটোর কোনটার দিকে তারা জীবন কাটাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "How Fire Can Be Weighed",
          "bn": "আগুনকে তুলনায় আনা যায় কীভাবে"
        },
        "p": [
          {
            "en": "A careful reader stops at one word. How can the verse ask whether the Fire is better, when there is no good in the Fire at all? Al-Qurtubi raises exactly this objection and answers it. He reports, on the authority of Sibawayh, that the Arabs would say: is misery more beloved to you, or happiness, though everyone knows happiness is the more beloved. The form of a comparison does not always claim that both sides hold some share of the good; it can simply set two things against each other for the mind to judge.",
            "bn": "মনোযোগী পাঠক একটা শব্দে থমকে যায়। আগুন ভালো কিনা আয়াত এ প্রশ্ন করে কীভাবে, যেখানে আগুনে ভালো বলে তো কিছুই নেই? কুরতুবী ঠিক এই আপত্তিটাই তোলেন, আর তার জবাব দেন। তিনি সীবাওয়াইহের সূত্রে জানান, আরবরা বলত: দুঃখ তোমার কাছে বেশি প্রিয়, না সুখ? অথচ সবাই জানে সুখই বেশি প্রিয়। তুলনার এই গড়ন সবসময় দাবি করে না যে দুই পক্ষেই কিছু না কিছু ভালো আছে, বরং তা শুধু দুটো জিনিসকে মুখোমুখি দাঁড় করায় মন যাচাই করবে বলে।"
          },
          {
            "en": "He offers a second reading through the grammarian an-Nahhas, who calls it a fine explanation: the word better here is not the comparative of true equals, but is used as one might say there is good with him. Al-Qurtubi cites a line of the poet Hassan ibn Thabit built on the same turn. And he notes a further sense: the two, Paradise and the Fire, have both entered the category of dwellings, so the wording weighs the vast distance between the two stations rather than granting the Fire any worth at all.",
            "bn": "কুরতুবী দ্বিতীয় একটা ব্যাখ্যা আনেন নাহহাসের সূত্রে, যাকে তিনি চমৎকার ব্যাখ্যা বলেন: এখানে 'ভালো' শব্দটি সমান দুটি জিনিসের মধ্যে তুলনা নয়, বরং যেমন কেউ বলে 'তার কাছে ভালো কিছু আছে', তেমন। কুরতুবী এই একই ঢঙে গড়া হাসসান ইবন সাবিতের একটি কবিতার চরণও উদ্ধৃত করেন। আর তিনি আরেকটি অর্থ ধরিয়ে দেন: জান্নাত আর আগুন, দুটোই যেহেতু 'বাসস্থানের' খাতায় ঢুকে গেছে, তাই শব্দগুলো দুই অবস্থানের মধ্যকার বিশাল ফারাক মাপে, আগুনকে কোনো মূল্য দেয় না।"
          },
          {
            "en": "Al-Qurtubi keeps one more reading in view, and it cuts deepest. The question, he suggests, may be posed according to your own knowledge and belief, O disbelievers. Because they lived the deeds of the people of the Fire and turned from the Garden, they behaved as though they held the Fire to be the better bargain. The verse then holds their own choice up to them in the shape of a question: you have been living as if this were better; look now at what you have preferred.",
            "bn": "কুরতুবী আরও একটি ব্যাখ্যা সামনে রাখেন, আর সেটাই সবচেয়ে গভীরে গিয়ে বেঁধে। তাঁর মতে, প্রশ্নটা হয়তো করা হয়েছে, হে অবিশ্বাসীরা, তোমাদের নিজেদের জানা আর বিশ্বাস অনুযায়ী। তারা জাহান্নামিদের মতো আমল করত আর জান্নাত থেকে মুখ ফিরিয়ে নিত, তাই তাদের আচরণ ছিল এমন, যেন আগুনটাই লাভের সওদা। আয়াত তখন তাদের নিজেদের বাছাইটাই প্রশ্নের আকারে তাদের সামনে তুলে ধরে: তোমরা তো এমনভাবে জীবন কাটিয়েছ যেন এটাই ভালো; এবার দেখো, কোনটা তোমরা বেছে নিয়েছ।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Word Recalls",
          "bn": "'এটা' শব্দে কী ফিরে আসে"
        },
        "p": [
          {
            "en": "The small word dhalika, that, can point back to more than one thing, and al-Qurtubi lists them. On one reading it points back to the Fire just described, the nearest and most natural sense, shared by Ibn Kathir, al-Baghawi and as-Sa'di alike. On another it reaches back to 25:10, Blessed is He who, if He willed, could have made for you better than that, gardens and palaces. On a third it returns to 25:8, or a treasure is cast to him, or he has a garden to eat from, the very riches the deniers had demanded of the Prophet.",
            "bn": "ছোট্ট শব্দ 'এটা' একাধিক জিনিসের দিকে ফিরতে পারে, আর কুরতুবী সেগুলো একে একে বলেন। এক ব্যাখ্যায় এটা ফিরে যায় এইমাত্র বর্ণিত আগুনের দিকে; এটাই সবচেয়ে কাছের ও স্বাভাবিক অর্থ, যা ইবন কাসীর, বাগাভী আর সাদী সবাই মানেন। আরেক ব্যাখ্যায় এটা পৌঁছে যায় ২৫:১০ আয়াতে: মহাকল্যাণময় তিনি, যিনি ইচ্ছে করলে তোমাকে এর চেয়ে ভালো কিছু দিতে পারতেন, বাগান আর প্রাসাদ। তৃতীয় ব্যাখ্যায় এটা ফেরে ২৫:৮ আয়াতে: তার কাছে ধন-ভান্ডার ফেলা হয় না কেন, বা তার একটা বাগান হয় না কেন? এ সেই সম্পদ, যা অস্বীকারকারীরা নবীর কাছে দাবি করেছিল।"
          },
          {
            "en": "The readings are not rivals so much as layers. Whether that means the Fire of the doomed, or the fleeting comforts God could grant in this world, or the treasure the deniers wished for, the answer the verse presses is the same: none of these is better than the Garden of Eternity. Set the worst end against it and the Garden wins; set the best of this world against it and the Garden still wins. The comparison is built so that every candidate on the other side falls short.",
            "bn": "এই ব্যাখ্যাগুলো একে অপরের প্রতিদ্বন্দ্বী নয়, বরং একটার উপর আরেকটা স্তর। 'এটা' মানে হতভাগাদের আগুন হোক, কিংবা দুনিয়ায় আল্লাহ যে ক্ষণস্থায়ী সুখ দিতে পারেন তা, অথবা অস্বীকারকারীদের চাওয়া ধন, আয়াত একই জবাবের দিকে ঠেলে দেয়: এর কোনোটাই চিরস্থায়ী জান্নাতের চেয়ে ভালো নয়। সবচেয়ে খারাপ পরিণতিকে এর পাশে রাখলে জান্নাত জেতে; দুনিয়ার সেরা জিনিস রাখলেও জান্নাতই জেতে। তুলনাটা এমনভাবে সাজানো যে অপর পাশের প্রতিটি জিনিসই পিছিয়ে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Garden Without an End",
          "bn": "যে জান্নাতের শেষ নেই"
        },
        "p": [
          {
            "en": "The Garden is named not merely as a garden but as the Garden of Eternity, jannat al-khuld. At-Tabari fixes the sense of the word: the garden of eternity whose bliss endures and does not perish. The point is not the beauty of the place alone but its permanence. What ends, however lovely, carries the ache of its ending. This is a good with the ending taken out of it, so that nothing in it is shadowed by the knowledge that it will someday be lost.",
            "bn": "জান্নাতকে শুধু জান্নাত বলা হয়নি, বলা হয়েছে চিরস্থায়ী জান্নাত, জান্নাতুল খুলদ। তাবারী শব্দটির অর্থ স্থির করে দেন: চিরস্থায়িতার সেই বাগান, যার নিয়ামত টিকে থাকে, শেষ হয় না। এখানে মূল কথা শুধু জায়গাটার সৌন্দর্য নয়, তার স্থায়িত্ব। যা শেষ হয়ে যায়, তা যত সুন্দরই হোক, তার ভেতরে শেষ হওয়ার এক ব্যথা লুকিয়ে থাকে। এ এমন এক নিয়ামত যার ভেতর থেকে শেষটাকে তুলে নেওয়া হয়েছে, ফলে এর কোনো কিছুই একদিন হারিয়ে যাওয়ার আশঙ্কায় ম্লান হয় না।"
          },
          {
            "en": "As-Sa'di closes his comment on the verse with the same weight, describing it as a place they return to, settle in, and abide within forever, unendingly. There is no death after it to fear, no expulsion to dread, no clock running down. Set beside the narrow, chained place of 25:13, the contrast is total: one is confinement without release, the other a home without an end. The word eternity is doing the deciding work; it is what makes the two ends genuinely incomparable.",
            "bn": "সাদী আয়াতের আলোচনা শেষ করেন একই ভার দিয়ে। তিনি একে বলেন এমন জায়গা, যেখানে তারা ফিরে আসে, থিতু হয়, আর চিরকাল থেকে যায়, যার কোনো শেষ নেই। এর পরে ভয় পাওয়ার মতো কোনো মৃত্যু নেই, বের করে দেওয়ার কোনো আশঙ্কা নেই, ফুরিয়ে আসা কোনো সময় নেই। ২৫:১৩ আয়াতের সরু, শিকলে বাঁধা জায়গার পাশে রাখলে ফারাকটা আকাশ-পাতাল: একটা মুক্তিহীন বন্দিদশা, অন্যটা শেষহীন এক ঘর। এখানে ফয়সালা করে দিচ্ছে 'চিরস্থায়ী' শব্দটাই; এটাই দুই পরিণতিকে সত্যিকার অর্থে অতুলনীয় করে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Promise Already Given",
          "bn": "আগেই দেওয়া এক ওয়াদা"
        },
        "p": [
          {
            "en": "Notice the verb: the Garden is something that has been promised to the God-conscious. It is not described as a prize that might be won if things go well, but as a pledge already spoken. At-Tabari ties the promise to a life: it is promised to whoever feared his Lord in this world by obeying Him in what He commanded and forbade. As-Sa'di makes the link tighter still, saying that whoever upholds taqwa, God has already promised it to him. The Garden is owed on a word that God has given.",
            "bn": "ক্রিয়াটা খেয়াল করুন: জান্নাতের ওয়াদা মুত্তাকীদের আগেই দেওয়া হয়ে গেছে। এটা এমন পুরস্কার নয়, যা ভাগ্য ভালো হলে হয়তো মিলবে; এটা আগেই দেওয়া এক প্রতিশ্রুতি। তাবারী এই ওয়াদাকে একটা জীবনের সঙ্গে বেঁধে দেন: যে দুনিয়ায় তার রবকে ভয় করেছে, তাঁর আদেশ-নিষেধ মেনে তাঁর আনুগত্য করেছে, তাকেই এর ওয়াদা দেওয়া হয়েছে। সাদী বাঁধনটা আরও শক্ত করেন: যে তাকওয়া ধরে রাখে, আল্লাহ তাকে এর ওয়াদা দিয়ে রেখেছেন। জান্নাত পাওনা হয়েছে আল্লাহর দেওয়া কথার জোরে।"
          },
          {
            "en": "Who exactly is promised it? Al-Muyassar glosses the God-conscious as those who fear the punishment of their Lord, so the door is not narrow. And the certainty grows firmer in the next verse: 25:16 calls it a promise resting upon your Lord, and Ibn Kathir, reporting the older Arabic scholars, glosses the words a promise requested to mean a binding pledge that must inevitably come to pass. So the tone here is not the dread of the Fire scene but its opposite: hope resting on a guarantee. The Fire is a warning; the Garden is a promise kept.",
            "bn": "ঠিক কাকে এর ওয়াদা দেওয়া হয়েছে? মুয়াসসার মুত্তাকীদের ব্যাখ্যা করেন এভাবে, যারা তাদের রবের শাস্তিকে ভয় করে, কাজেই দরজাটা সরু নয়। আর পরের আয়াতে নিশ্চয়তা আরও পোক্ত হয়: ২৫:১৬ একে বলে তোমার রবের উপর বর্তানো এক ওয়াদা, আর ইবন কাসীর প্রাচীন আরবি ভাষাবিদদের সূত্রে 'চাওয়া ওয়াদা' কথাটির অর্থ করেন এক অলঙ্ঘনীয় অঙ্গীকার, যা অবশ্যই ঘটবে। তাই এখানকার সুর আগুনের দৃশ্যের আতঙ্ক নয়, বরং তার উল্টো: এক নিশ্চয়তার উপর দাঁড়ানো আশা। আগুন এক সতর্কবার্তা, আর জান্নাত রক্ষা-করা এক ওয়াদা।"
          }
        ]
      },
      {
        "h": {
          "en": "Earned, and Come Home To",
          "bn": "অর্জিত, আবার ফেরার ঠিকানা"
        },
        "p": [
          {
            "en": "The verse ends by calling the Garden two things at once: for them it is a reward and a destination. The first word, jaza', is recompense earned. At-Tabari reads it as the requital of the God-conscious for their deeds done for God in this world by obeying Him, and the reward of their taqwa. Al-Baghawi glosses the same word simply as thawab, reward. The Garden, on this half of the verse, is wages: it answers to a life of obedience, given back in kind.",
            "bn": "আয়াত শেষ হয় জান্নাতকে একসঙ্গে দুটো নামে ডেকে: তাদের জন্য এটা প্রতিদান, আর ফেরার ঠিকানা। প্রথম শব্দ 'জাযা' মানে অর্জিত বিনিময়। তাবারীর ব্যাখ্যায় এটা মুত্তাকীদের সেই বদলা, যা তারা পাবে দুনিয়ায় আল্লাহর আনুগত্য করে তাঁর জন্য যে আমল করেছে তার বিনিময়ে; এটা তাদের তাকওয়ার পুরস্কার। বাগাভী শব্দটির অর্থ করেন সোজা সওয়াব, প্রতিদান। আয়াতের এই অংশে জান্নাত যেন মজুরি: আনুগত্যে কাটানো জীবনের জবাব, যেমন আমল তেমন ফল।"
          },
          {
            "en": "The second word, masir, turns the same place into a homecoming. At-Tabari explains it as a destination the God-conscious come to in the Hereafter; al-Baghawi renders it a place of return; as-Sa'di calls it a refuge they go back to and settle in. So the Garden is not only what obedience earns but where the traveler finally arrives. A reward can feel like a transaction; a destination speaks of belonging. The verse holds both, so that the end of the road is at once justly given and truly home.",
            "bn": "দ্বিতীয় শব্দ, মাসীর, সেই একই জায়গাকে বানিয়ে দেয় ফেরার ঠিকানা। তাবারী এর ব্যাখ্যা করেন আখিরাতে মুত্তাকীরা যেখানে এসে পৌঁছবে সেই গন্তব্য হিসেবে; বাগাভী বলেন প্রত্যাবর্তনের জায়গা; সাদী বলেন এমন আশ্রয় যেখানে তারা ফিরে গিয়ে থিতু হয়। তাই জান্নাত শুধু আনুগত্যের অর্জন নয়, পথিক শেষে যেখানে এসে পৌঁছয় সেই জায়গাও। প্রতিদানকে মনে হতে পারে এক লেনদেন, কিন্তু ঠিকানা বলে আপন হয়ে ওঠার কথা। আয়াত দুটোই ধরে রাখে, যাতে পথের শেষটা একই সঙ্গে ন্যায্যভাবে দেওয়া আর সত্যিকারের ঘর হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Beyond What Eyes Have Seen",
          "bn": "চোখ যা কখনো দেখেনি"
        },
        "p": [
          {
            "en": "How good is this promised reward? The Prophet, peace be upon him, reported a saying of God that matches the verse closely. In Sahih al-Bukhari, Abu Hurayra relates that God said: I have prepared for My pious slaves what no eye has seen, no ear has heard, and what no human heart has conceived. The wording lands on the same note as the verse: a Garden prepared and promised for the God-conscious, a reward laid up in advance for those who obeyed.",
            "bn": "এই ওয়াদা-করা প্রতিদান কতখানি ভালো? নবী ﷺ আল্লাহর একটি বাণী বর্ণনা করেছেন যা আয়াতের সঙ্গে খুব মেলে। সহীহ বুখারীতে আবু হুরায়রা (রাঃ) বর্ণনা করেন, আল্লাহ বলেছেন: আমি আমার নেক বান্দাদের জন্য এমন জিনিস তৈরি করে রেখেছি যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, আর কোনো মানুষের অন্তরে যার কল্পনাও আসেনি। এ কথার সুর আয়াতের সুরেই বাজে: মুত্তাকীদের জন্য তৈরি করে রাখা আর ওয়াদা করা এক জান্নাত, যারা আনুগত্য করেছে তাদের জন্য আগে থেকে জমিয়ে রাখা এক প্রতিদান।"
          },
          {
            "en": "The same report adds an invitation: if you wish, recite the verse, No soul knows what is kept hidden for it of joy, as a reward for what they used to do (32:17). That closing phrase, a reward for what they used to do, is the very jaza' of our verse, and the hidden joy no heart has imagined is its Garden. Ibn Kathir, commenting on the next verse, gathers exactly this: delights of food, drink, dwelling and more that no eye has seen and no heart has grasped. The promise is real, and it is larger than the mind that reaches for it.",
            "bn": "একই বর্ণনায় একটা আহ্বানও আছে: ইচ্ছে হলে এ আয়াতটি পড়ো, কোনো প্রাণ জানে না তার জন্য চোখ জুড়ানোর কী লুকিয়ে রাখা হয়েছে, তাদের কাজের প্রতিদান হিসেবে (৩২:১৭)। শেষের কথাটা, 'তাদের কাজের প্রতিদান', আমাদের আয়াতের সেই 'জাযা'-ই; আর যে লুকানো আনন্দ কোনো অন্তর কল্পনাও করেনি, সেটাই আমাদের আয়াতের জান্নাত। ইবন কাসীর পরের আয়াতের ব্যাখ্যায় ঠিক এটাই জড়ো করেন: খাবার, পানীয়, বাসস্থান, আরও এমন সব নিয়ামত, যা কোনো চোখ দেখেনি, কোনো অন্তর ধারণা করতে পারেনি। ওয়াদাটা সত্যি, আর যে মন তাকে ছুঁতে চায়, তার চেয়ে ঢের বড়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Choice a Life Makes",
          "bn": "জীবন যে পছন্দটা করে"
        },
        "p": [
          {
            "en": "Why put it as a question at all? As-Sa'di reads the whole line as God making plain the folly of their judgment and their choosing the harmful over the beneficial. A statement could have informed them; a question makes them answer. Standing between a named Fire and a named Garden, the deniers are made to say, if only to themselves, which they are actually choosing. And the honesty of that is the mercy in it: nobody is condemned in the dark, everyone is shown the two ends and asked.",
            "bn": "প্রশ্নের আকারে বলা হলো কেন? সাদীর ব্যাখ্যায়, আল্লাহ এখানে দেখিয়ে দিচ্ছেন তাদের বিচার কত বোকামির, তারা উপকারী ছেড়ে ক্ষতিকরটাই বেছে নিচ্ছে। শুধু ঘোষণা দিলে তারা কেবল জানত; প্রশ্ন তাদের জবাব দিতে বাধ্য করে। নাম ধরে বলা এক আগুন আর নাম ধরে বলা এক জান্নাতের মাঝখানে দাঁড়িয়ে অস্বীকারকারীদের বলতেই হয়, অন্তত মনে মনে, তারা আসলে কোনটা বেছে নিচ্ছে। এই খোলাখুলি ভাবটাই এর ভেতরের রহমত: কাউকে অন্ধকারে রেখে দোষী সাব্যস্ত করা হয় না; সবাইকে দুই পরিণতি দেখিয়ে তারপর জিজ্ঞেস করা হয়।"
          },
          {
            "en": "This is a pattern in the Qur'an, not an isolated case. Ibn Kathir points to Surat as-Saffat, where God describes the joy of the people of the Garden and then asks, Is that better as hospitality, or the tree of Zaqqum? (37:62). The same balance is struck: name the good end, name the bitter end, and let the hearer weigh them. When the two are set side by side and spoken aloud, the choice that a life has been quietly making all along is brought into the open where it can still be changed.",
            "bn": "এটা কুরআনের একটা রীতি, একবারের ঘটনা নয়। ইবন কাসীর সূরা সাফফাতের কথা মনে করিয়ে দেন, যেখানে আল্লাহ জান্নাতবাসীদের আনন্দের বর্ণনা দিয়ে তারপর প্রশ্ন করেন: আপ্যায়ন হিসেবে এটা ভালো, না যাক্কুম গাছ? (৩৭:৬২)। সেখানেও একই ভারসাম্য: ভালো পরিণতির নাম বলা, তিক্ত পরিণতির নাম বলা, তারপর শ্রোতাকে ওজন করতে দেওয়া। দুটো পাশাপাশি রেখে মুখে উচ্চারণ করলে একটা জীবন এতদিন চুপচাপ যা বেছে আসছিল, তা খোলা জায়গায় বেরিয়ে আসে, যেখানে এখনো তা বদলানো যায়।"
          },
          {
            "en": "So the verse leaves its reader with a mirror, not a verdict. It does not say the Garden is out of reach or the Fire already sealed; it draws both, calls one a promise to the God-conscious, and asks which way I am facing. Most of us would never, in words, choose the Fire. The question is quieter and harder: does the direction of my days, the small and steadily repeated choices of them, actually bend toward the homecoming I claim to want? Naming the two ends is how the verse makes that question impossible to avoid.",
            "bn": "তাই আয়াত পাঠকের হাতে তুলে দেয় একটা আয়না, কোনো রায় নয়। আয়াত বলে না যে জান্নাত নাগালের বাইরে, বা আগুন আগেই পাকা হয়ে গেছে। দুটোরই ছবি আঁকে, একটাকে বলে মুত্তাকীদের দেওয়া ওয়াদা, তারপর জিজ্ঞেস করে, আমি কোন দিকে মুখ করে আছি। আমাদের বেশির ভাগই মুখে কখনো আগুন বেছে নেব না। প্রশ্নটা আরও নীরব, আরও কঠিন: আমার দিনগুলো, প্রতিদিনের ছোট ছোট বারবার করা সিদ্ধান্তগুলো, সত্যিই কি সেই ঘরে ফেরার দিকে ঝুঁকে আছে, যা আমি চাই বলে দাবি করি? দুই পরিণতির নাম বলে দিয়ে আয়াত এই প্রশ্ন এড়ানোর আর কোনো পথ রাখে না।"
          }
        ]
      }
    ]
  },
  "25:20": {
    "sections": [
      {
        "h": {
          "en": "Aimed Straight at the Objection",
          "bn": "আপত্তির দিকেই সোজা তাক করা"
        },
        "p": [
          {
            "en": "At-Tabari reads this verse as God's argument on His Prophet's behalf against the pagans who had said, in 25:7, \"What is with this messenger that he eats food and walks in the markets?\" God's reply, in at-Tabari's paraphrase, is to ask what they found to deny: you eat and you walk the markets, and you are God's messenger — and they already know We sent no messenger before you who did not eat food and walk the markets exactly as you do. So the objection carries no argument against you at all.",
            "bn": "তাবারী এ আয়াতকে পড়েন নবীর পক্ষে আল্লাহর দলিল হিসেবে, সেই মুশরিকদের বিরুদ্ধে যারা ২৫:৭ আয়াতে বলেছিল, ‘এই রাসূলের কী হলো, খাবার খায় আর হাটবাজারে ঘোরে?’ তাবারীর ব্যাখ্যায় আল্লাহর জবাব যেন প্রশ্ন করা: তোমরা কী দোষ পেলে? তুমি খাও, বাজারে চলো, আর তুমি আল্লাহর রাসূল। তারা তো জানেই, তোমার আগে যত রাসূল পাঠিয়েছি প্রত্যেকে ঠিক তোমার মতোই খাবার খেতেন, বাজারে চলাফেরা করতেন। তাই এ আপত্তি তোমার বিরুদ্ধে কোনো যুক্তিই দাঁড় করায় না।"
          },
          {
            "en": "Al-Baghawi and al-Qurtubi tie the words to the occasion. On the report of ad-Dahhak from Ibn Abbas, when the pagans taunted the Prophet ﷺ over his poverty and said those very words, this verse came down. Al-Qurtubi adds that the reproach grieved him, and the verse arrived as consolation; he cites a narration that Gabriel brought God's greeting of peace before reciting it. Whatever weight one gives that detail, the placement is plain: the verse is the reply to the complaint that stood two lines earlier.",
            "bn": "বাগাভী ও কুরতুবী কথাগুলোকে বাঁধেন উপলক্ষের সঙ্গে। যাহহাক ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, মুশরিকরা যখন নবী ﷺ-কে তাঁর অভাব নিয়ে খোঁটা দিয়ে ঠিক ওই কথাগুলোই বলল, তখন এ আয়াত নাজিল হয়। কুরতুবী যোগ করেন, এ খোঁটা তাঁকে ব্যথিত করেছিল, আর আয়াতটি এল সান্ত্বনা হয়ে। তিনি একটি বর্ণনা আনেন যে জিবরীল (আঃ) আয়াত পড়ার আগে আল্লাহর সালাম পৌঁছে দেন। এ খুঁটিনাটিকে যে ওজনই দিন, আয়াতের অবস্থান পরিষ্কার: দুই লাইন আগে দাঁড়ানো অভিযোগেরই এটি জবাব।"
          }
        ]
      },
      {
        "h": {
          "en": "They Ate, They Traded, They Led",
          "bn": "খেতেন, ব্যবসা করতেন, পথ দেখাতেন"
        },
        "p": [
          {
            "en": "Ibn Kathir takes the verse as a statement about every earlier messenger: they ate food because their bodies needed the nourishment in it, and they walked the markets to earn and trade. None of this, he insists, lowered their rank or office. God had given them fine traits, noble words, complete deeds, dazzling miracles and clear proofs, so that anyone of sound mind could see what they brought was true. He links the verse to 12:109, that God sent before them only men, and to 21:8, that He made them no bodies that ate no food.",
            "bn": "ইবন কাসীর আয়াতটিকে ধরেন আগের প্রত্যেক রাসূল সম্পর্কে একটি ঘোষণা হিসেবে: তাঁরা খাবার খেতেন, কারণ দেহের সেই খাদ্যের পুষ্টি দরকার ছিল, আর বাজারে চলতেন রুজি ও ব্যবসার জন্য। তিনি জোর দিয়ে বলেন, এর কোনো কিছুই তাঁদের মর্যাদা বা পদ ছোট করেনি। আল্লাহ তাঁদের দিয়েছিলেন সুন্দর গুণ, মহৎ কথা, পূর্ণ আমল, চোখধাঁধানো মুজিযা আর স্পষ্ট প্রমাণ, যাতে সুস্থ বিবেকের যে কেউ বুঝতে পারে তাঁরা যা এনেছেন তা সত্য। তিনি আয়াতকে জোড়েন ১২:১০৯-এর সঙ্গে, আল্লাহ তাঁদের আগে কেবল মানুষই পাঠিয়েছেন, আর ২১:৮-এর সঙ্গে, তিনি তাঁদের এমন দেহ বানাননি যা খাবার খেত না।"
          },
          {
            "en": "As-Sa'di draws the same line into a lesson for the reader. God did not make His messengers bodies that ate nothing, nor did He make them angels; He made them men, and so, as-Sa'di says, in them there is a pattern for you to follow. The complaint had assumed that a true messenger must be something other than human, remote and self-sufficient. The Qur'an answers by making the messenger's humanity not an embarrassment to explain away but the very ground on which an ordinary person can walk behind him.",
            "bn": "সাদী একই কথা থেকে পাঠকের জন্য শিক্ষা বের করে আনেন। আল্লাহ তাঁর রাসূলদের এমন দেহ দেননি যা কিছুই খায় না, তাঁদের ফেরেশতাও বানাননি; বানিয়েছেন মানুষ। তাই, সাদী বলেন, তাঁদের মধ্যে আপনার জন্য রয়েছে অনুসরণের আদর্শ। আপত্তিটা ধরে নিয়েছিল, সত্যিকারের রাসূল মানুষ ছাড়া অন্য কিছু হবেন, দূরের কেউ, কারও মুখাপেক্ষী নন। কুরআনের জবাবে রাসূলের মানুষ হওয়াটা লুকিয়ে রাখার মতো লজ্জার কিছু নয়। বরং সেটাই সেই জমি, যার উপর দিয়ে একজন সাধারণ মানুষ তাঁর পিছু পিছু হাঁটতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Plain Life Was a Choice",
          "bn": "সাদামাটা জীবন ছিল বেছে নেওয়া"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an turns the objection around. There was no difficulty at all in God's providing His messengers with wealth; He could have made them emperors, as He made Dawud (AS) and Sulayman (AS) rulers of vast kingdoms endowed with great riches. But in the interest of ordinary people it was fitting that prophets be kept clear of the world's wealth, and in the Prophet's ﷺ case God preferred to keep him level with the ordinary Muslims, which he preferred for himself as well. The plainness was not a lack God failed to fill; it was chosen.",
            "bn": "মাআরিফুল কুরআন আপত্তিটাকে ঘুরিয়ে দেয়। আল্লাহর পক্ষে তাঁর রাসূলদের সম্পদ দেওয়ায় কোনো অসুবিধাই ছিল না; তিনি তাঁদের সম্রাট বানাতে পারতেন, যেমন দাউদ (আঃ) ও সুলাইমান (আঃ)-কে বানিয়েছিলেন বিশাল রাজ্যের অধিপতি, বিপুল সম্পদে ভূষিত। কিন্তু সাধারণ মানুষের স্বার্থেই মানানসই ছিল যে নবীদের দুনিয়ার সম্পদ থেকে দূরে রাখা হবে, আর নবী ﷺ-এর বেলায় আল্লাহ পছন্দ করলেন তাঁকে সাধারণ মুসলিমদের সমান স্তরে রাখতে, যা তিনি নিজেও নিজের জন্য পছন্দ করতেন। এই সাদামাটা জীবন এমন ঘাটতি নয় যা আল্লাহ পূরণ করতে পারেননি; এ ছিল বেছে নেওয়া।"
          },
          {
            "en": "The reports gathered here say the choice was offered and declined. Ma'arif cites the Musnad of Ahmad and at-Tirmidhi, on the authority of Abu Umamah, that God offered to turn the valley and hills of Makkah into gold for him, and he answered, \"No, my Lord; I would rather be fed a day so that I thank You, and go hungry a day so that I am patient.\" Ibn Kathir reports the like — \"had I willed, God would have moved mountains of gold with me\" — and that, given the choice, he chose to be a servant and messenger rather than a prophet and king.",
            "bn": "এখানে জড়ো করা বর্ণনাগুলো বলে, সুযোগটা তাঁকে দেওয়া হয়েছিল, আর তিনি তা ফিরিয়ে দিয়েছিলেন। মাআরিফ মুসনাদে আহমাদ ও তিরমিযী থেকে আবু উমামা (রাঃ)-এর বর্ণনা আনে: আল্লাহ তাঁর জন্য মক্কার উপত্যকা আর পাহাড়গুলো সোনা বানিয়ে দেওয়ার প্রস্তাব দিলেন। তিনি জবাব দিলেন, ‘না, হে আমার রব; বরং আমি একদিন খাব, যেন আপনার শোকর করি, আরেকদিন না খেয়ে থাকব, যেন সবর করি।’ ইবন কাসীরও এমন বর্ণনা আনেন, ‘আমি চাইলে আল্লাহ আমার সঙ্গে সোনার পাহাড় চালিয়ে দিতেন।’ আর দুটোর মধ্যে বেছে নিতে বলা হলে তিনি নবী-বাদশাহ নয়, বান্দা ও রাসূল হওয়াই বেছে নিয়েছিলেন।"
          },
          {
            "en": "At-Tabari names the wisdom behind the withholding, and here the two halves of the verse meet. God did not give Muhammad ﷺ the world; He made him seek his living in the markets, so as to test people: whether they would obey their Lord and answer His messenger with no worldly prize to hope for from him. Had I put the world with him, at-Tabari writes in God's voice, many would have rushed to follow coveting his wealth. So the plain man is not incidental to the test; the absence of spectacle is the test. Will you follow truth for its own sake?",
            "bn": "না দেওয়ার পেছনের হিকমতটা তাবারী খুলে বলেন, আর এখানেই আয়াতের দুই অংশ এসে মেলে। আল্লাহ মুহাম্মাদ ﷺ-কে দুনিয়া দেননি; তাঁকে বাজারে গিয়ে রুজি খুঁজতে দিয়েছেন, যাতে মানুষকে পরীক্ষা করা যায়: তাঁর কাছ থেকে দুনিয়ার কোনো লাভের আশা না থাকলেও তারা কি রবের আনুগত্য করবে, তাঁর রাসূলের ডাকে সাড়া দেবে? তাবারী আল্লাহর জবানিতে লেখেন, আমি যদি তাঁর সঙ্গে দুনিয়া জুড়ে দিতাম, অনেকেই তাঁর সম্পদের লোভে তাঁর পিছনে ছুটে আসত। তাই সাদামাটা মানুষটি পরীক্ষার বাড়তি কোনো অংশ নয়; জাঁকজমক না থাকাটাই পরীক্ষা। আপনি কি সত্যকে মানবেন শুধু সত্য বলেই?"
          }
        ]
      },
      {
        "h": {
          "en": "Made a Trial for One Another",
          "bn": "একে অপরের জন্য পরীক্ষা"
        },
        "p": [
          {
            "en": "\"And We have made some of you a trial for others.\" As-Sa'di reads the trial as running in every direction at once. The messenger is a trial for the people he is sent to, sorting the obedient from the defiant, and the messengers themselves are tried by the labour of calling others. Wealth is a trial for the poor and poverty a trial for the rich, and so it goes, he says, for every class of creature in this abode — the abode of trial and testing. No station is exempt; each one is a question put to the person standing in it.",
            "bn": "‘আর আমি তোমাদের একজনকে অন্যজনের জন্য করেছি পরীক্ষা।’ সাদীর ব্যাখ্যায় এই পরীক্ষা চলে সব দিকে একসঙ্গে। রাসূল যাদের কাছে প্রেরিত, তাদের জন্য তিনি পরীক্ষা: কে মানে আর কে অবাধ্য হয়, তা আলাদা হয়ে যায়। রাসূলরাও পরীক্ষিত হন মানুষকে দাওয়াত দেওয়ার কষ্টে। ধন গরিবের জন্য পরীক্ষা, দারিদ্র্য ধনীর জন্য পরীক্ষা। তিনি বলেন, এই দুনিয়ায় প্রতিটি শ্রেণির সৃষ্টির বেলায় এমনই, কারণ এটা পরীক্ষা আর যাচাইয়ের ঘর। কোনো অবস্থানই ছাড় পায় না; প্রতিটি অবস্থান সেখানে দাঁড়ানো মানুষটির কাছে একেকটা প্রশ্ন।"
          },
          {
            "en": "Ibn Kathir and the Muyassar spell out the pairs. God tries some of us by means of others, Ibn Kathir writes, to know who obeys and who disobeys; the Muyassar lists guidance and misguidance, wealth and poverty, health and sickness. At-Tabari fills in the inner voice the trial provokes, quoting al-Hasan: this blind man says, had God willed He would have made me seeing like so-and-so; this poor man, rich like so-and-so; this sick man, well like so-and-so. The verse names that murmur exactly, and then asks its one question of it.",
            "bn": "ইবন কাসীর ও মুয়াসসার জোড়াগুলো খুলে বলেন। আল্লাহ আমাদের একজনকে অন্যজন দিয়ে পরীক্ষা করেন, ইবন কাসীর লেখেন, যাতে জানা যায় কে মানে আর কে অমান্য করে; মুয়াসসার তালিকা করে হেদায়েত ও গোমরাহি, ধন ও দারিদ্র্য, সুস্থতা ও অসুস্থতা। তাবারী ভেতরের সেই স্বরটি ধরিয়ে দেন যা পরীক্ষা জাগায়, হাসান (রহ) সূত্রে: এই অন্ধ বলে, আল্লাহ চাইলে আমাকেও অমুকের মতো চোখওয়ালা করতেন; এই গরিব বলে, অমুকের মতো ধনী; এই রোগী বলে, অমুকের মতো সুস্থ। আয়াত সেই বিড়বিড়টিকে হুবহু নাম দেয়, তারপর তার সামনে রাখে নিজের একটি প্রশ্ন।"
          },
          {
            "en": "Al-Qurtubi sets out what each side owes the other, so the trial is not mistaken for a ranking of worth. The rich man is tested by the poor: his duty is to console him and never mock him. The poor man is tested by the rich: his duty is not to envy, to take only what he is given, and for both to be patient upon the truth. Wealth and health are no proof of God's favour, nor poverty and illness of His displeasure; the verse licenses no contempt for the poor, the sick or the low-born, only the labour of holding your own station honestly.",
            "bn": "কুরতুবী দেখিয়ে দেন কে অপরের কাছে কী পাওনা, যাতে এই পরীক্ষাকে মানুষের মূল্যের মাপকাঠি ভেবে ভুল না হয়। ধনী পরীক্ষিত হয় গরিব দিয়ে: তার কর্তব্য তাকে সান্ত্বনা দেওয়া, কখনো তাকে বিদ্রূপ না করা। গরিব পরীক্ষিত হয় ধনী দিয়ে: তার কর্তব্য হিংসা না করা, কেবল যা দেওয়া হয়েছে তা-ই নেওয়া, আর দুজনেরই সত্যের উপর ধৈর্য ধরা। ধন ও স্বাস্থ্য আল্লাহর অনুগ্রহের প্রমাণ নয়, দারিদ্র্য ও রোগও তাঁর অসন্তোষের প্রমাণ নয়; এ আয়াত গরিব, রোগী বা নিচু বংশের মানুষকে তাচ্ছিল্য করার কোনো অনুমতি দেয় না, কেবল নিজের জায়গা সততায় ধরে রাখার শ্রমটুকুর কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Occasions the Reports Name",
          "bn": "বর্ণনায় যেসব উপলক্ষের কথা আছে"
        },
        "p": [
          {
            "en": "Beside the general reading, al-Baghawi and al-Qurtubi preserve narrower occasions, and it is worth keeping both rather than choosing. On Muqatil's account the words came about certain Quraysh chiefs — Abu Jahl, al-As ibn Wa'il, an-Nadr ibn al-Harith and others — who, seeing that Abu Dharr, Ibn Mas'ud, Ammar, Bilal, Suhayb and men like them had believed, said mockingly, \"Are we to accept Islam and become like these?\" On another report, al-Baghawi's al-Kalbi, a nobleman who meant to believe held back once a low-born man believed first, unwilling to come after him.",
            "bn": "সাধারণ ব্যাখ্যার পাশাপাশি বাগাভী ও কুরতুবী আরও নির্দিষ্ট কিছু উপলক্ষের বর্ণনা রেখেছেন; একটিকে বেছে না নিয়ে দুটোই মনে রাখা ভালো। মুকাতিলের বর্ণনায় আয়াতটি এসেছিল কুরাইশের কিছু সরদারকে নিয়ে: আবু জাহল, আস ইবন ওয়ায়িল, নাদর ইবন হারিস ও অন্যরা। তারা যখন দেখল আবু যর, ইবন মাসউদ, আম্মার, বিলাল, সুহাইব (রাঃ) আর তাঁদের মতো মানুষেরা ঈমান এনেছেন, তখন বিদ্রূপ করে বলল, ‘আমরা কি ইসলাম গ্রহণ করে এদের মতো হয়ে যাব?’ বাগাভীর আনা কালবীর আরেক বর্ণনায়, এক অভিজাত লোক ঈমান আনতে চেয়েছিল, কিন্তু নিচু বংশের এক লোক আগে ঈমান আনায় সে থেমে গেল; তার পরে আসতে সে রাজি হলো না।"
          },
          {
            "en": "A third report al-Baghawi carries turns the trial the other way: it came down about the poor believers being tested by the scoffers of Quraysh, who sneered, \"Look at these — the slaves and the lowly among us — who have followed Muhammad.\" To these believers, al-Baghawi says, God addressed the question, \"Will you be patient?\" — that is, patient over this hard state of poverty and abuse. The occasions differ in who is tested by whom, but they converge on the verse's single demand, and none of them makes birth or wealth a measure of a soul.",
            "bn": "বাগাভীর আনা তৃতীয় একটি বর্ণনা পরীক্ষাটাকে উল্টো দিক থেকে দেখায়: আয়াতটি নাজিল হয়েছিল সেই গরিব মুমিনদের নিয়ে, যাদের পরীক্ষা হচ্ছিল কুরাইশের বিদ্রূপকারীদের দিয়ে। তারা টিটকারি দিত, ‘এদের দেখো, আমাদের গোলাম আর নিচু লোকগুলো মুহাম্মাদের পিছু নিয়েছে।’ বাগাভী বলেন, এই মুমিনদেরই আল্লাহ জিজ্ঞেস করলেন, ‘তোমরা কি ধৈর্য ধরবে?’ অর্থাৎ অভাব আর নির্যাতনের এই কঠিন অবস্থায় ধৈর্য ধরবে কি না। কে কার দ্বারা পরীক্ষিত, তাতে উপলক্ষগুলো আলাদা, কিন্তু সবগুলো এসে মেলে আয়াতের একই দাবিতে। আর কোনোটিই বংশ বা সম্পদকে মানুষের মূল্যের মাপকাঠি বানায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Question That Waits for You",
          "bn": "যে প্রশ্ন আপনার জন্য অপেক্ষা করছে"
        },
        "p": [
          {
            "en": "\"Will you be patient?\" The Muyassar and as-Sa'di read it as a question with its answer left hanging: will you carry out what God has laid on you and thank Him, so your Lord rewards you, or fail to endure and deserve the punishment? Al-Qurtubi notes the answer is elided precisely so the hearer must supply it: \"or will you not be patient?\" A minority, he adds, read the word not as a question but as a command, \"be patient,\" the way \"will you not desist?\" means \"desist.\" Either way the verse turns to face the one reading it.",
            "bn": "‘তোমরা কি ধৈর্য ধরবে?’ মুয়াসসার ও সাদী একে পড়েন এমন প্রশ্ন হিসেবে, যার জবাব ঝুলিয়ে রাখা হয়েছে: আল্লাহ তোমার উপর যা চাপিয়েছেন তা কি পালন করবে, তাঁর শোকর করবে, যাতে তোমার রব তোমাকে পুরস্কার দেন? নাকি সইতে না পেরে শাস্তির যোগ্য হবে? কুরতুবী লক্ষ করেন, জবাবটা ইচ্ছে করেই উহ্য রাখা হয়েছে, যাতে শ্রোতা নিজেই তা পূরণ করে: ‘নাকি তোমরা ধৈর্য ধরবে না?’ তিনি আরও জানান, অল্প কয়েকজন শব্দটিকে প্রশ্ন নয়, আদেশ হিসেবে পড়েছেন, ‘ধৈর্য ধরো’, যেমন ‘তোমরা কি থামবে না?’ মানে ‘থামো’। যেভাবেই পড়া হোক, আয়াত শেষে ঘুরে দাঁড়ায় পাঠকের দিকেই।"
          },
          {
            "en": "Al-Qurtubi names the two failures the trial invites and the one patience that answers both. The afflicted may envy the one at ease, and the one at ease may scorn the afflicted; patience is that each restrains himself, this one from insolence, that one from anguish. He recalls al-Muzani, whom poverty had driven out, catching sight of a servant riding in fine style; something stirred in him, and just then he heard a voice reciting \"Will you be patient?\" He answered, \"Yes, our Lord; we will be patient and seek the reward.\" The verse, read aloud in a market, had reached the very man walking through it.",
            "bn": "এই পরীক্ষা দুই রকম ব্যর্থতার দিকে টানে, কুরতুবী তা চিহ্নিত করেন, আর দেখান একটাই ধৈর্য দুটোর জবাব। বিপদে থাকা মানুষ হয়তো সুখে থাকা মানুষকে হিংসা করে, আর সুখে থাকা মানুষ হয়তো বিপদগ্রস্তকে তুচ্ছ ভাবে। ধৈর্য মানে দুজনেই নিজেকে সামলায়: একজন অহংকার থেকে, অন্যজন হাহাকার থেকে। তিনি মুযানীর ঘটনা বলেন। অভাব তাঁকে ঘর থেকে বের করে এনেছিল, পথে দেখলেন এক ভৃত্য জমকালো সাজে সওয়ার হয়ে যাচ্ছে। মনের ভেতর কিছু একটা নড়ে উঠল। ঠিক তখনই শুনলেন কেউ পড়ছে, ‘তোমরা কি ধৈর্য ধরবে?’ তিনি জবাব দিলেন, ‘হ্যাঁ, হে আমাদের রব; আমরা ধৈর্য ধরব, আর সওয়াবের আশা রাখব।’ বাজারে উচ্চস্বরে পড়া আয়াতটি গিয়ে পৌঁছল ঠিক সেই মানুষটির কাছে, যিনি তখন সেই বাজার দিয়েই হাঁটছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Look to the One Below You",
          "bn": "নিচের জনের দিকে তাকান"
        },
        "p": [
          {
            "en": "The Prophet ﷺ gave the trial a plain, workable rule, and Ma'arif and al-Baghawi both cite it here. In the wording recorded in Sahih Muslim (no. 2963), on the authority of Abu Hurayra, he said: \"When one of you looks at someone favoured over him in wealth and bodily form, let him look at one who is below him, among those over whom he himself has been favoured.\" The direction of the glance is the whole discipline: turned upward it breeds the envy the trial is meant to expose, turned downward it turns into thanks for what is already in hand.",
            "bn": "এই পরীক্ষা সামলানোর জন্য নবী ﷺ একটা সহজ, কাজের নিয়ম দিয়ে গেছেন। মাআরিফ ও বাগাভী দুজনেই এখানে সেটি উল্লেখ করেছেন। সহীহ মুসলিমে (নং ২৯৬৩) আবু হুরায়রা (রাঃ) থেকে বর্ণিত শব্দে তিনি বলেছেন: ‘তোমাদের কেউ যখন এমন কাউকে দেখে, যাকে সম্পদে ও দৈহিক গড়নে তার চেয়ে বেশি দেওয়া হয়েছে, তখন সে যেন তার চেয়ে নিচের কারও দিকে তাকায়, যাদের চেয়ে তাকে বেশি দেওয়া হয়েছে।’ পুরো সাধনাটা নির্ভর করে চোখ কোন দিকে যায় তার উপর। উপরে তাকালে জন্ম নেয় সেই হিংসা, যা ধরিয়ে দেওয়ার জন্যই এই পরীক্ষা। নিচে তাকালে সেই দৃষ্টিই হাতে যা আছে তার জন্য শোকর হয়ে ওঠে।"
          },
          {
            "en": "That the messenger himself is a means of testing is stated even more directly in a report Ibn Kathir cites from Sahih Muslim, within a longer address of the Prophet ﷺ on the authority of Iyad ibn Himar: that God said, \"I am testing you and testing others through you.\" It is the fitna clause of this verse put in the first person. The one sent and the ones sent to are set against each other on purpose, so that the sending itself weighs every heart. What the eye reaches for, upward or downward, is the reading God is taking.",
            "bn": "রাসূল নিজেই যে পরীক্ষার মাধ্যম, সে কথা আরও সরাসরি এসেছে ইবন কাসীরের উদ্ধৃত সহীহ মুসলিমের এক বর্ণনায়। ইয়ায ইবন হিমার (রাঃ) থেকে বর্ণিত নবী ﷺ-এর একটি দীর্ঘ ভাষণের ভেতরে আছে, আল্লাহ বলেছেন: ‘আমি তোমাকে পরীক্ষা করছি, আর তোমার মাধ্যমে অন্যদেরও পরীক্ষা করছি।’ এ আয়াতে যে ফিতনার কথা, এখানে আল্লাহ নিজের জবানিতে সেটাই বলছেন। যাঁকে পাঠানো হয়েছে আর যাদের কাছে পাঠানো হয়েছে, তাদের ইচ্ছা করেই মুখোমুখি রাখা হয়েছে, যাতে এই পাঠানোটাই প্রতিটি অন্তরকে মেপে নেয়। চোখ কোন দিকে ছুটে যায়, উপরে না নিচে, আল্লাহ ঠিক সেটাই মেপে দেখছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "And Your Lord Is Ever Seeing",
          "bn": "আর তোমার রব সদা দ্রষ্টা"
        },
        "p": [
          {
            "en": "The verse closes on a single name: \"And your Lord is ever Seeing.\" The Muyassar reads it as sight bent on exactly what the trial produces: He sees who breaks down and who bears up, who is ungrateful and who gives thanks. As-Sa'di widens it: He knows your states, selects for His message the one He knows is fit, and knows your deeds so as to repay them, good for good and evil for evil. Ibn Kathir hears in it the answer to the whole complaint, joining it to 6:124: God knows best where to place His message.",
            "bn": "আয়াত শেষ হয়েছে একটিমাত্র নামে: ‘আর তোমার রব সদা দ্রষ্টা।’ মুয়াসসারের ব্যাখ্যায়, এই দেখা ঠিক সেই জিনিসের উপর, যা পরীক্ষা বের করে আনে: তিনি দেখেন কে ভেঙে পড়ে আর কে সয়ে যায়, কে নাশোকরি করে আর কে শোকর করে। সাদী অর্থটা আরও বিস্তৃত করেন: তিনি বান্দাদের অবস্থা জানেন, তাই তাঁর বার্তার জন্য তাকেই বেছে নেন যাকে তিনি যোগ্য বলে জানেন। আর তিনি তাদের আমলও জানেন, প্রতিদান দেওয়ার জন্য: ভালোর বদলে ভালো, মন্দের বদলে মন্দ। ইবন কাসীর এখানে গোটা অভিযোগের জবাব শুনতে পান। তিনি একে ৬:১২৪-এর সঙ্গে মিলিয়ে পড়েন: আল্লাহই ভালো জানেন তাঁর বার্তা কোথায় রাখবেন।"
          },
          {
            "en": "Both halves of the verse rest on this one word. The people wanted a messenger who could not be missed, draped in treasure, lifted above the market. God gave them a man who ate and earned like them, and set them the harder task of knowing truth without a spectacle. He gave each of us a station that hides its test from onlookers: no one sees the envy swallowed, the scorn refused, the thanks chosen over complaint. But the Seeing does. The patience no eye notices is the patience being watched, and the only kind the last word promises to weigh.",
            "bn": "আয়াতের দুই অংশই দাঁড়িয়ে আছে এই একটি শব্দের উপর। লোকেরা চেয়েছিল এমন রাসূল, যাঁকে চোখ এড়িয়ে যাওয়ার উপায় নেই: ধনভান্ডারে মোড়া, বাজারের অনেক ঊর্ধ্বে। আল্লাহ তাদের দিলেন এমন একজন মানুষ, যিনি তাদের মতোই খেতেন, তাদের মতোই রোজগার করতেন। আর তাদের সামনে রাখলেন কঠিনতর কাজ: চোখধাঁধানো কোনো দৃশ্য ছাড়াই সত্যকে চিনে নেওয়া। আমাদের প্রত্যেককেও তিনি এমন অবস্থায় রেখেছেন, যার পরীক্ষা বাইরের লোকের চোখে পড়ে না। কে হিংসা গিলে ফেলল, কে কাউকে তুচ্ছ করা থেকে নিজেকে সামলাল, কে নালিশের বদলে শোকর বেছে নিল, কেউ দেখে না। কিন্তু যিনি সদা দ্রষ্টা, তিনি দেখেন। যে ধৈর্য কারও চোখে পড়ে না, সেই ধৈর্যের উপরই তাঁর নজর। আয়াতের শেষ শব্দটি কেবল এমন ধৈর্যকেই ওজন করার ওয়াদা দেয়।"
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
            "bn": "এর আগের আয়াত জান্নাতবাসীদের রেখে যায় উত্তম বাসস্থানে, আরামের অবস্থায় (২৫:২৪)। এরপর কোনো বিরতি ছাড়াই কুরআন চোখ ফেরায় একেবারে ভিন্ন কিছুর দিকে: ওয়া ইয়াওমা তাশাক্কাকুস সামাউ বিল গামাম, যেদিন মেঘসহ আকাশ বিদীর্ণ হবে। সাদী গোটা অংশটিকে পড়েন এভাবে: আল্লাহ এখানে কিয়ামতের দিনের ভয়াবহতা এবং তাতে যে কঠিনতা, উৎকণ্ঠা আর হৃদয় কাঁপানো ব্যাপার আছে তা জানাচ্ছেন। দৃশ্যটা এখানে বসানো হয়েছে চোখ মেলে দেখার জন্য, দ্রুত পেরিয়ে যাওয়ার জন্য নয়।"
          },
          {
            "en": "There is a command tucked inside the wording: and the Day. Al-Qurtubi supplies the implied verb, wa-dhkur, remember, or call to mind, the Day the heaven splits open with the clouds. The verse is not filing a fact away for the record; it is handing the listener a scene to hold before the eyes. Everything that follows in this passage, up to the sovereignty that belongs to the Most Merciful, grows out of the sky's tearing open.",
            "bn": "আয়াতের শব্দের ভেতরেই একটা নির্দেশ লুকিয়ে আছে: ‘আর সেই দিন।’ কুরতুবী উহ্য ক্রিয়াটি বসিয়ে দেন, ওয়াদকুর, অর্থাৎ স্মরণ করো, মনে আনো সেই দিনকে, যেদিন মেঘসহ আকাশ বিদীর্ণ হবে। আয়াতটি নথিতে একটা তথ্য তুলে রাখছে না। শ্রোতার হাতে তুলে দিচ্ছে একটা দৃশ্য, যা চোখের সামনে ধরে রাখতে হবে। এই অংশে এরপর যা কিছু আসে, দয়াময়ের রাজত্ব পর্যন্ত, সবই জন্ম নেয় আকাশ ফেটে যাওয়া থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sky Splits Away",
          "bn": "আকাশ ফাটে মেঘ ছেড়ে"
        },
        "p": [
          {
            "en": "Tashaqqaqu s-samaʾu bi-l-ghamam reads, on its surface, the heaven splits with the clouds. At-Tabari, al-Qurtubi and al-Baghawi all take the baʾ here to stand for ʿan, from: the heaven splits open from the clouds, splitting away to lay them bare. Al-Baghawi hands the Arabic ear its everyday parallel. You say I shot from the bow and I shot with the bow and mean the same thing, so the two particles trade places without altering the sense.",
            "bn": "তাশাক্কাকুস সামাউ বিল গামাম কথাটির বাহ্যিক অর্থ: মেঘসহ আকাশ বিদীর্ণ হবে। তাবারী, কুরতুবী ও বাগভী এখানে ‘বা’ অক্ষরটিকে ‘আন’ অর্থে ধরেন, অর্থাৎ ‘থেকে’: আকাশ মেঘ থেকে বিদীর্ণ হবে, সরে গিয়ে মেঘকে উন্মুক্ত করে দেবে। বাগভী আরবি কানের পরিচিত একটা উদাহরণ দেন। আরবিতে বলা হয় ‘ধনুক থেকে তীর ছুড়লাম’, আবার ‘ধনুক দিয়ে তীর ছুড়লাম’, দুটোর অর্থ একই। তাই অব্যয় দুটি জায়গা বদল করলেও অর্থ পাল্টায় না।"
          },
          {
            "en": "There is a small difference in how the word is recited. At-Tabari records that the reciters of the Hijaz read it as tashshaqqaqu, doubling the shin, while the reciters of Kufa read it lighter, as tashaqqaqu. Both readings, he says, are widespread and sound, and whichever a reciter follows he has hit the mark, for the meaning is one and the same: the sky comes apart. The difference lies on the tongue, not in the event the word describes.",
            "bn": "শব্দটি পড়ার ক্ষেত্রে একটুখানি পার্থক্য আছে। তাবারী লিখে রাখেন, হিজাযের ক্বারীরা পড়েন তাশ্শাক্কাকু, শীন অক্ষরকে দ্বিত্ব করে, আর কুফার ক্বারীরা পড়েন হালকা করে, তাশাক্কাকু। তিনি বলেন, দুই পড়াই ব্যাপকভাবে প্রচলিত ও নির্ভরযোগ্য, ক্বারী যেটাই অনুসরণ করুন তিনি সঠিক পথেই আছেন, কারণ অর্থ একই: আকাশ ভেঙে টুকরো হয়ে যায়। পার্থক্যটা জিভের উচ্চারণে, শব্দটি যা বর্ণনা করছে সেই ঘটনায় নয়।"
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
            "bn": "এই গামাম বা মেঘ কী? কুরতুবী ও বাগভী একে বর্ণনা করেন পাতলা সাদা মেঘ বলে, হালকা কুয়াশার মতো মিহি। দুজনেই একটি লক্ষণীয় কথা যোগ করেন: ঠিক এমন মেঘ আগে দেখা গিয়েছিল কেবল বনী ইসরাঈলের বেলায়, যখন তারা প্রান্তরে পথ হারিয়ে ঘুরছিল আর আল্লাহ সেই মেঘ দিয়ে তাদের ছায়া দিয়েছিলেন। কিয়ামতের দিন আকাশ নিজেই ফেটে গিয়ে এমন এক চাঁদোয়া বের করে দেবে। আর এখানকার শব্দ গামাম, আগের সেই ছায়ার কথা বলতেও কুরআন ঠিক এই শব্দটিই ব্যবহার করেছে।"
          },
          {
            "en": "Mujahid, as at-Tabari reports him, ties this cloud straight to another verse: do they await but that God should come to them in canopies of cloud, with the angels (2:210). The ghamam of our verse, he says, is that same ghamam in which God comes on the Day of Resurrection. Ibn Kathir carries the same link, calling the cloud here the canopies of that tremendous light which overwhelms all sight.",
            "bn": "তাবারীর বর্ণনায় মুজাহিদ এই মেঘকে সরাসরি আরেকটি আয়াতের সঙ্গে জুড়ে দেন: তারা কি কেবল এরই অপেক্ষায় আছে যে আল্লাহ মেঘের চাঁদোয়ায় তাদের কাছে আসবেন, সঙ্গে ফেরেশতারাও (২:২১০)? তিনি বলেন, আমাদের আয়াতের গামাম সেই গামামই, যার ভেতরে আল্লাহ কিয়ামতের দিন আসবেন। ইবন কাসীরও একই যোগসূত্র টানেন। তাঁর মতে এখানকার মেঘ হলো সেই বিশাল আলোর চাঁদোয়া, যা সব দৃষ্টিকে আচ্ছন্ন করে দেয়।"
          },
          {
            "en": "Ma'arif al-Qurʾan, drawing on Bayan al-Qurʾan, pictures it as a canopy descending from the sky, bearing God's refulgence and ringed about with angels, and adds a careful qualification: this splitting of the sky is only an opening, not the shattering that comes when the Trumpet is blown to end the heavens and the earth. The commentators do not all press the image the same way, and the verse itself leaves the manner of it open.",
            "bn": "মাআরিফুল কুরআন বয়ানুল কুরআন থেকে নিয়ে দৃশ্যটি এভাবে আঁকে: আকাশ থেকে একটি চাঁদোয়া নেমে আসছে, তাতে আল্লাহর জ্যোতি, চারপাশ ঘিরে আছে ফেরেশতারা। সঙ্গে একটি সতর্ক শর্তও জুড়ে দেয়: আকাশের এই বিদীর্ণ হওয়া কেবল খুলে যাওয়া। এ সেই চূর্ণবিচূর্ণ হওয়া নয়, যা ঘটবে আসমান-জমিন শেষ করে দিতে শিঙায় ফুঁ দেওয়ার সময়। তাফসিরকারেরা সবাই এই ছবিকে একইভাবে খুঁটিয়ে ব্যাখ্যা করেন না, আর আয়াত নিজেও এর ধরন খোলা রেখে দিয়েছে।"
          },
          {
            "en": "Al-Qurtubi records a second way of picturing it. On this reading the cloud lies between the sky and the people below, so that when the cloud is rent the sky is rent along with it; and once the sky splits, its fabric comes undone, is rolled up, and the angels descend to a place made ready in its stead. He sets the two pictures side by side without forcing a choice between them. That is how the classical commentary handles a scene no living eye has ever seen.",
            "bn": "কুরতুবী দৃশ্যটির আরেকটি ছবিও উল্লেখ করেন। এই ব্যাখ্যা অনুযায়ী মেঘটি থাকে আকাশ আর নিচের মানুষের মাঝখানে। ফলে মেঘ যখন ছিঁড়ে যায়, তার সঙ্গে আকাশও ছিঁড়ে যায়। আকাশ একবার ফেটে গেলে তার গাঁথুনি খুলে আসে, তাকে গুটিয়ে নেওয়া হয়, আর ফেরেশতারা নেমে আসে তার জায়গায় তৈরি করে রাখা এক স্থানে। কুরতুবী দুটি ছবি পাশাপাশি রাখেন, কোনো একটিকে বেছে নিতে জোর করেন না। যে দৃশ্য কোনো জীবিত চোখ কখনো দেখেনি, প্রাচীন তাফসির তা এভাবেই সামলায়।"
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
            "bn": "ওয়া নুযযিলাল মালাইকাতু তানযীলা: আর ফেরেশতাদের নামিয়ে আনা হবে, পুরোদস্তুর নামিয়ে আনা। আয়াতের শেষে আছে একটি ক্রিয়াবাচক বিশেষ্য, তানযীলা। এর কাজ একটাই: ক্রিয়াটিকে আরও জোরালো করা, যেন বলা হচ্ছে, নামানো হবে, সত্যিই নামানো হবে। সাদীর ব্যাখ্যায়, প্রতিটি আসমানের ফেরেশতারা নেমে এসে সারির পেছনে সারি বেঁধে দাঁড়াবে। হয় একটিমাত্র সারি গোটা সৃষ্টিকে ঘিরে ফেলবে, নয়তো প্রতিটি আসমানের ফেরেশতারা আলাদা আলাদা সারি বানাবে। যেভাবেই হোক, আকাশ তাদের দিয়ে ভরে যাবে।"
          },
          {
            "en": "The closing verb is itself recited in several ways. Al-Qurtubi notes that Ibn Kathir read wa-nunzilu l-malaʾikata, from anzala, we send down the angels, while most reciters read the passive wa-nuzzila, the angels are sent down. The verbal noun tanzila, he points out, sits with the passive reading, since the other would have called for inzalan. Still other wordings are recorded from the Companions. The sense holds steady across every one of them: the angels are brought down, and their descent is stressed.",
            "bn": "শেষের ক্রিয়াটি নিজেই কয়েকভাবে পড়া হয়। কুরতুবী জানান, ইবন কাসীর পড়েছেন ওয়া নুনযিলুল মালাইকাতা, আনযালা ক্রিয়া থেকে, অর্থাৎ আমি ফেরেশতাদের নামাই, আর অধিকাংশ ক্বারী পড়েছেন কর্মবাচ্যে ওয়া নুযযিলা, অর্থাৎ ফেরেশতাদের নামিয়ে দেওয়া হয়। তিনি ধরিয়ে দেন, ক্রিয়াবাচক বিশেষ্য তানযীলা কর্মবাচ্য পড়ার সঙ্গে খাপ খায়, কারণ অন্য পড়াটি হলে 'ইনযালান' লাগত। সাহাবিদের থেকে আরও কিছু পাঠও বর্ণিত আছে। সবগুলোর ভেতরেই অর্থ একই থাকে: ফেরেশতাদের নামানো হয়, আর তাদের অবতরণকে জোর দেওয়া হয়।"
          },
          {
            "en": "A longer report, traced back to Ibn ʿAbbas, fills in the picture: the lowest heaven splits and its dwellers come down, more in number than all the jinn and men on earth; then the second heaven, its dwellers more still; and so on up through every heaven, until the bearers of the Throne descend last of all. Ibn Kathir preserves this report but is candid about its chain, which turns on ʿAli ibn Zayd, a weak narrator whose accounts, he says, often carry real strangeness. He notes only that something close to it appears in the well-known hadith of the Trumpet.",
            "bn": "ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছানো একটি দীর্ঘ বর্ণনা ছবিটা আরও ভরিয়ে তোলে: সবচেয়ে নিচের আসমান ফেটে যাবে, তার অধিবাসীরা নেমে আসবে, সংখ্যায় তারা জমিনের সব জিন ও মানুষের চেয়ে বেশি। তারপর দ্বিতীয় আসমান, তার অধিবাসীরা আরও বেশি। এভাবে একের পর এক প্রতিটি আসমান, আর সবার শেষে নেমে আসবেন আরশ বহনকারীরা। ইবন কাসীর বর্ণনাটি রেখে দিয়েছেন, তবে এর সনদ নিয়ে খোলাখুলি কথা বলেছেন। সনদটি আলী ইবন যায়দের উপর নির্ভর করে। তিনি দুর্বল রাবী, আর ইবন কাসীরের ভাষায় তাঁর বর্ণনায় প্রায়ই সত্যিকারের অদ্ভুত কথা থাকে। ইবন কাসীর শুধু এটুকু উল্লেখ করেন যে এর কাছাকাছি কিছু কথা শিঙার প্রসিদ্ধ হাদিসে এসেছে।"
          },
          {
            "en": "Why so many, and why in ranks? Al-Qurtubi answers in a phrase: the angels come down from the heavens to the earth for the reckoning of the two weighty kinds, jinn and mankind. As-Sa'di draws the lesson out. These angels, for all their number and strength, descend in full submission to their Lord's command, none of them speaking except by His leave. If that is how the mightiest of creatures stand on that Day, what then of weak man?",
            "bn": "এত সংখ্যা কেন, আর সারি বেঁধেই বা কেন? কুরতুবী এক কথায় জবাব দেন: ফেরেশতারা আসমান থেকে জমিনে নেমে আসে দুই ভারী সৃষ্টির হিসাব নেওয়ার জন্য, অর্থাৎ জিন আর মানুষের। সাদী শিক্ষাটি টেনে বের করেন। এই ফেরেশতারা, এত সংখ্যা আর শক্তি সত্ত্বেও, নেমে আসে তাদের রবের হুকুমের সামনে পূর্ণ নতিস্বীকার করে, তাঁর অনুমতি ছাড়া কেউ মুখ খোলে না। সৃষ্টির সবচেয়ে শক্তিশালীরা যদি সেদিন এভাবে দাঁড়ায়, তবে দুর্বল মানুষের অবস্থা কী হবে?"
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
            "bn": "ফেরেশতাদের অবতরণ সেই ঘটনার পথ খুলে দেয়, যার দিকে গোটা অংশটি এগোচ্ছে। মুয়াসসার সোজা কথায় বলে: বরকতময় ও মহান আল্লাহ বান্দাদের মধ্যে বিচারের ফয়সালা করতে আসবেন, এমনভাবে যা তাঁর মহিমার উপযুক্ত। এ ধরনের আয়াত পড়তে গিয়ে আহলে সুন্নাত যে সতর্কতা মেনে চলেন, কুরতুবী সেটি মনে করিয়ে দেন। এই আগমনকে সৃষ্টির বৈশিষ্ট্য দিয়ে বোঝা যাবে না, অর্থাৎ নড়াচড়া বা এক জায়গা থেকে আরেক জায়গায় সরে যাওয়া দিয়ে নয়। বুঝতে হবে কেবল সেভাবে, যা একমাত্র তাঁরই উপযুক্ত।"
          },
          {
            "en": "So the torn sky, the white canopy and the ranked angels are not the event itself but its approach, the court assembling before the Judge arrives. The Qur'an holds the scene at exactly this point, letting the reader feel its gathering weight before any verdict is spoken. Nothing in the verse invites us to picture God in a bodily way; it invites us to grasp that the whole of creation is being brought to stand before its Lord.",
            "bn": "তাই ফাটা আকাশ, সাদা চাঁদোয়া আর সারিবদ্ধ ফেরেশতা ঘটনাটি নয়, বরং তার আগমনের ইঙ্গিত, বিচারক আসার আগে আদালত জড়ো হচ্ছে। কুরআন দৃশ্যটিকে ঠিক এই জায়গায় ধরে রাখে, কোনো রায় উচ্চারিত হওয়ার আগেই পাঠককে এর জমে ওঠা ভার অনুভব করতে দেয়। আয়াতের কোথাও আল্লাহকে দেহধারী রূপে কল্পনা করার আহ্বান নেই। আহ্বান আছে এটুকু বোঝার, যে গোটা সৃষ্টিকে তার রবের সামনে দাঁড় করানো হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Heavens Folded in a Hand",
          "bn": "মুঠোয় গুটানো আসমান"
        },
        "p": [
          {
            "en": "Ibn Kathir, reaching the sovereignty that on this Day belongs to the Most Merciful, cites a hadith recorded by Muslim. ʿAbdullah ibn ʿUmar reported that the Messenger of God ﷺ said: God will fold up the heavens on the Day of Resurrection, then take them in His right hand and say, I am the Sovereign; where are the tyrants, where are the proud? Then He will fold up the earths in His left hand and say, I am the Sovereign; where are the tyrants, where are the proud?",
            "bn": "আয়াতের যে অংশে বলা হয়েছে সেদিনের কর্তৃত্ব দয়াময়ের, সেখানে পৌঁছে ইবন কাসীর মুসলিমে বর্ণিত একটি হাদিস উল্লেখ করেন। আবদুল্লাহ ইবন উমার (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: আল্লাহ কিয়ামতের দিন আসমানগুলোকে গুটিয়ে নেবেন, তারপর ডান হাতে ধরে বলবেন, আমিই বাদশাহ; কোথায় সেই দাম্ভিকরা, কোথায় সেই অহংকারীরা? তারপর জমিনগুলোকে বাঁ হাতে গুটিয়ে বলবেন, আমিই বাদশাহ; কোথায় সেই দাম্ভিকরা, কোথায় সেই অহংকারীরা?"
          },
          {
            "en": "Muslim placed it in his Sahih, so it carries his own grading of soundness, and its wording lands on the verse that follows this scene, where true sovereignty on that Day is named as belonging to the Most Merciful (25:26). Every crown that ever ruled is folded away with the heavens; the only kingship left standing is the kingship that was always real. That is the answer the whole scene has been building toward.",
            "bn": "মুসলিম হাদিসটি তাঁর সহীহ গ্রন্থে রেখেছেন, তাই এর উপর তাঁর নিজের সহীহ হওয়ার রায় আছে। আর হাদিসের শব্দগুলো গিয়ে মেলে এই দৃশ্যের পরের আয়াতের সঙ্গে, যেখানে বলা হয়েছে সেদিন প্রকৃত কর্তৃত্ব দয়াময়ের (২৫:২৬)। যত মুকুট কখনো রাজত্ব করেছে, সব আসমানের সঙ্গে গুটিয়ে ফেলা হবে। টিকে থাকবে কেবল সেই রাজত্ব, যা বরাবরই আসল ছিল। গোটা দৃশ্য এই জবাবের দিকেই এগোচ্ছিল।"
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
            "bn": "সাদী এই দৃশ্যের মহিমাকে এমন এক প্রশ্নে পরিণত করেন, যার জবাব প্রত্যেককে দিতে হবে। তিনি বলেন, ফেরেশতারাই যদি ভয়ে নত হয়ে দাঁড়ায়, তবে দুর্বল মানুষের কী অবস্থা হবে? বিশেষ করে সেই বান্দার, যে বড় বড় গুনাহ করে নিজের মালিকের সঙ্গে দুঃসাহস দেখিয়েছে, আর তওবা না করা অন্যায়ের বোঝা কাঁধে নিয়ে এই দিনে হাজির হয়েছে? সত্যিকারের বাদশাহ তার বিচার করবেন এমন রায়ে, যাতে তার উপর অণু পরিমাণও জুলুম হবে না। এ কারণেই এই অংশে সেদিনকে বলা হয়েছে কাফিরদের জন্য কঠিন দিন: ভয়াবহতায় কঠিন, আর সেদিন তাদের প্রতিটি ব্যাপারই কঠিন হয়ে উঠবে।"
          },
          {
            "en": "For the believer, as-Sa'di adds, the same Day is light and its load easy. And there is mercy folded into the very naming: the sovereignty of that Day is tied to the name ar-Rahman, the Most Merciful, whose mercy takes in every living thing and outruns His wrath. The Day that terrifies the heedless is ruled by the One whose mercy came first. The verse describes the reckoning as the Qur'an describes it; it hands no reader a verdict to pass on any living person or people.",
            "bn": "সাদী যোগ করেন, মুমিনের জন্য সেই একই দিন হালকা, তার বোঝা সহজ। আর নামটির মধ্যেই রহমত লুকিয়ে আছে: সেদিনের কর্তৃত্ব জুড়ে দেওয়া হয়েছে আর-রহমান নামের সঙ্গে। তিনি সেই দয়াময়, যাঁর রহমত প্রতিটি প্রাণীকে ঘিরে আছে, যাঁর রহমত তাঁর গজবকে ছাড়িয়ে যায়। যে দিন গাফেলদের কাঁপিয়ে দেবে, সেদিনের মালিক তিনিই, যাঁর রহমত সবার আগে। আয়াতটি হিসাবের দিনকে সেভাবেই বর্ণনা করে, যেভাবে কুরআন বর্ণনা করে। কোনো জীবিত মানুষ বা জাতির উপর রায় দেওয়ার অধিকার এটি কোনো পাঠকের হাতে তুলে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Scene Asks",
          "bn": "দৃশ্যটি কী চায়"
        },
        "p": [
          {
            "en": "Set against all this, the verse is doing something to the one who hears it. It is not adding an item to a list of beliefs; it is trying to move a heart from heedlessness to readiness. The sky above us looks fixed and permanent, and that very steadiness is what lulls us. The verse says: that same sky will tear open in its time, and every soul now busy with its distractions will stand in the open, ringed by ranks of angels, before the Judge.",
            "bn": "এসব কিছুর আলোয় দেখলে বোঝা যায়, আয়াতটি শ্রোতার ভেতরে কিছু একটা ঘটাতে চায়। বিশ্বাসের তালিকায় নতুন কোনো দফা যোগ করা এর উদ্দেশ্য নয়। এর চেষ্টা হলো অন্তরকে গাফলতি থেকে প্রস্তুতির দিকে টেনে আনা। মাথার উপরের আকাশ দেখতে স্থির, চিরস্থায়ী, আর এই স্থিরতাই আমাদের ভুলিয়ে রাখে। আয়াত বলছে: সেই একই আকাশ নির্ধারিত সময়ে ফেটে যাবে। আর আজ যে প্রতিটি প্রাণ নানা ব্যস্ততায় ডুবে আছে, সে তখন খোলা ময়দানে দাঁড়াবে, সারি সারি ফেরেশতায় ঘেরা, বিচারকের সামনে।"
          },
          {
            "en": "The honest response is not a fear that freezes but a change that begins today, in the ordinary hours nobody sees. The people who will find that Day light did not meet it unprepared; they had been getting ready inside lives that looked much like ours. To read this verse well is to let its certainty reach past the argument and settle into how the next quiet day is actually spent.",
            "bn": "এর সত্যিকারের জবাব এমন ভয় নয়, যা মানুষকে জমিয়ে দেয়। জবাব হলো এমন বদল, যা আজই শুরু হয়, সাধারণ সময়গুলোতে, যখন কেউ দেখছে না। যারা সেই দিনকে হালকা পাবে, তারা অপ্রস্তুত অবস্থায় তার মুখোমুখি হয়নি। তাদের জীবনও দেখতে আমাদের জীবনের মতোই ছিল, তবু তার ভেতরেই তারা প্রস্তুতি নিচ্ছিল। এই আয়াত ঠিকভাবে পড়া মানে এর নিশ্চয়তাকে কেবল যুক্তির ঘরে আটকে না রাখা, বরং পরের নিরিবিলি দিনটা আসলে কীভাবে কাটছে, তার ভেতরে বসিয়ে দেওয়া।"
          }
        ]
      }
    ]
  },
  "25:35": {
    "sections": [
      {
        "h": {
          "en": "Two Gifts in One Verse",
          "bn": "এক আয়াতে দুই দান"
        },
        "p": [
          {
            "en": "The verse opens with an oath, wa-laqad, 'And We had certainly given.' At-Tabari and Ibn Kathir read the whole passage as Allah addressing the Prophet ﷺ, warning the deniers among his people with the fate of earlier nations and steadying him against their rejection. Before any of that warning arrives, this opening line names two things Allah placed in the hands of Musa (AS): a Book, and a brother. Everything the passage goes on to say about denial and ruin rests on this first picture of a messenger who was fully equipped for what lay ahead.",
            "bn": "আয়াতটি শুরু হয় কসম দিয়ে, ওয়া-লাকাদ, 'আমি অবশ্যই দিয়েছিলাম।' তাবারী ও ইবন কাসীর গোটা অংশটিকে পড়েন এভাবে: আল্লাহ এখানে নবী ﷺ-কে সম্বোধন করছেন, তাঁর জাতির অস্বীকারকারীদের আগের জাতিগুলোর পরিণতি দিয়ে সতর্ক করছেন আর তাদের প্রত্যাখ্যানের মুখে তাঁকে অটল রাখছেন। সেই সতর্কবাণী আসার আগেই এই প্রথম বাক্য জানিয়ে দেয় আল্লাহ মূসা (আঃ)-এর হাতে দুই জিনিস তুলে দিয়েছেন: একটি কিতাব আর একজন ভাই। অস্বীকার আর ধ্বংস নিয়ে অংশটি পরে যা কিছু বলে, তার সবই দাঁড়িয়ে আছে পুরোপুরি প্রস্তুত এক রাসূলের এই ছবির উপর।"
          },
          {
            "en": "The two gifts are not the same kind of thing. One is revelation, the Torah, a text to be carried and recited. The other is a person, Harun (AS), set at the side of Musa (AS). At-Tabari and al-Baghawi both gloss the word for that second gift, wazir, with a pair of terms: muin and zahir, a helper and a backer. So the verse is saying that when God sends a man to a hard task, He gives him truth to hold in his hands and a shoulder to stand at his side. Neither of the two was treated as enough on its own.",
            "bn": "দুটি দান এক জাতের নয়। একটি ওহি, তাওরাত, যা বহন করতে হয়, তিলাওয়াত করতে হয়। অন্যটি একজন মানুষ, হারূন (আঃ), যাঁকে মূসা (আঃ)-এর পাশে রাখা হলো। এই দ্বিতীয় দানের জন্য আয়াতে যে শব্দ, ওযীর, তাবারী ও বাগভী দুজনেই তার অর্থ করেন দুটি শব্দে: মুঈন আর যহীর, অর্থাৎ সাহায্যকারী আর পৃষ্ঠপোষক। তাহলে আয়াত বলছে, আল্লাহ যখন কাউকে কঠিন কাজে পাঠান, তখন তার হাতে দেন ধরে রাখার মতো সত্য, আর পাশে দেন ভরসার একটা কাঁধ। দুটির কোনোটিকেই একা যথেষ্ট ধরা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Book Given to Musa",
          "bn": "মূসাকে দেওয়া কিতাব"
        },
        "p": [
          {
            "en": "'We had certainly given Musa the Book.' At-Tabari and al-Qurtubi both read al-kitab here as the Torah, the scripture sent down to Musa (AS) for his people. At-Tabari draws the parallel out loud: We gave Musa the Book, he says, just as We have given you, Muhammad ﷺ, the Furqan. Without raising its voice, the verse sets the Prophet ﷺ in the same line as Musa (AS), each of them handed a revelation from God and sent with it towards a people who were already prepared to turn it away.",
            "bn": "'আমি অবশ্যই মূসাকে কিতাব দিয়েছিলাম।' তাবারী ও কুরতুবী দুজনেই এখানে আল-কিতাব বলতে তাওরাত বোঝেন, মূসা (আঃ)-এর জাতির জন্য নাজিল হওয়া সেই গ্রন্থ। তাবারী তুলনাটা মুখ ফুটে বলেই দেন: আমি মূসাকে কিতাব দিয়েছি, তেমনি হে মুহাম্মদ ﷺ, তোমাকে দিয়েছি ফুরকান। গলা না চড়িয়েই আয়াত নবী ﷺ-কে মূসা (আঃ)-এর সেই একই ধারায় বসিয়ে দেয়, যেখানে প্রত্যেকের হাতে আল্লাহর পক্ষ থেকে এক ওহি, আর তা নিয়ে পাঠানো এমন এক জাতির দিকে যারা আগে থেকেই তা ফিরিয়ে দিতে প্রস্তুত।"
          },
          {
            "en": "That first gift sets the pattern for everything the messenger does. A prophet is not sent with his own cleverness or his own arguments to win people over; he is sent with a Book from God, and his task is to carry it faithfully and to deliver it whole. When the passage later turns to Fir'awn's refusal and to nation after nation brought to ruin, the contrast is sharpened by this opening. The truth had been given, plainly and from God, and still it was pushed away. The gift itself was never the thing that failed.",
            "bn": "প্রথম এই দানই ঠিক করে দেয় রাসূল বাকি সব কী করবেন। কোনো নবীকে পাঠানো হয় না তাঁর নিজের চাতুর্য বা নিজের যুক্তি দিয়ে মানুষ জয় করতে; তাঁকে পাঠানো হয় আল্লাহর পক্ষ থেকে এক কিতাব দিয়ে, আর তাঁর কাজ সেটিকে বিশ্বস্তভাবে বহন করা আর অবিকৃত অবস্থায় পৌঁছে দেওয়া। অংশটি যখন পরে ফেরাউনের অস্বীকার আর একের পর এক জাতির ধ্বংসের দিকে যায়, তখন এই শুরুটাই বৈপরীত্যকে আরও তীক্ষ্ণ করে। সত্য দেওয়া হয়েছিল স্পষ্ট করে, আল্লাহর পক্ষ থেকেই, তবু তা ঠেলে সরিয়ে দেওয়া হলো। দানটি নিজে কখনো ব্যর্থ হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight of Wazir",
          "bn": "ওযীর শব্দের ভার"
        },
        "p": [
          {
            "en": "What exactly is a wazir? The commentators keep their glosses short and firm. At-Tabari and al-Baghawi both say it means muin wa zahir, a helper and a backer, the zahir being the one who stands at your back to strengthen it. Ibn Kathir stretches the sense across three words, muwazir, muayyid and nasir: one who shares the load, one who confirms and reinforces, and one who comes to your aid. The single Arabic word gathers all of that and hands it to Harun (AS).",
            "bn": "ওযীর আসলে কী? তাফসীরকারদের ব্যাখ্যা এখানে ছোট আর দৃঢ়। তাবারী ও বাগভী দুজনেই বলেন এর অর্থ মুঈন ওয়া যহীর, সাহায্যকারী আর পৃষ্ঠপোষক; যহীর সেই মানুষ যে আপনার পিঠের পেছনে দাঁড়িয়ে তাকে শক্ত করে। ইবন কাসীর অর্থটাকে ছড়িয়ে দেন তিনটি শব্দে, মুওয়াযির, মুআইয়িদ আর নাসির: একজন যে বোঝা ভাগ করে নেয়, একজন যে সমর্থন দিয়ে দৃঢ় করে, আর একজন যে সাহায্যে এগিয়ে আসে। একটিমাত্র আরবি শব্দ এই সবটুকু জড়ো করে হারূন (আঃ)-এর হাতে তুলে দেয়।"
          },
          {
            "en": "Ibn Kathir adds a detail that lifts the gift higher still. Harun (AS), he says, was given as another Prophet who helped and supported him. The helper here is no servant, and no subordinate carrying bags behind his master. He is himself a prophet, and his prophethood is spent standing beside his brother's mission rather than off on some errand of his own. That is the dignity this verse quietly hands to Harun (AS), and with him to everyone whose calling is to strengthen a work that another person leads.",
            "bn": "ইবন কাসীর এমন একটি কথা যোগ করেন, যা এই দানকে আরও উঁচুতে তোলে। তিনি বলেন, হারূন (আঃ)-কে দেওয়া হয়েছিল আরেকজন নবী হিসেবে, যিনি মূসা (আঃ)-কে সাহায্য ও সমর্থন করতেন। এখানে সাহায্যকারী কোনো ভৃত্য নন, মনিবের পেছনে মালপত্র বয়ে চলা কোনো অধীনস্থও নন। তিনি নিজেই একজন নবী। আর তাঁর নবুয়ত কাটে ভাইয়ের মিশনের পাশে দাঁড়িয়ে, নিজের আলাদা কোনো কাজে নয়। এই মর্যাদা আয়াত নিঃশব্দে হারূন (আঃ)-কে দেয়। আর তাঁর সঙ্গে দেয় তাদের সবাইকে, যাদের দায়িত্ব অন্যের নেতৃত্বে চলা কোনো কাজকে শক্তি জোগানো।"
          },
          {
            "en": "Al-Muyassar keeps to the plainest reading of them all: God made Harun (AS) a helper for him, and then sent the two of them to Fir'awn together. The richer words the other commentators reach for never pull against this simple one. Across every account the shape holds steady. Harun's whole place in the verse is defined by his brother's mission, and his greatness is measured by how fully he throws his weight behind it. To be that kind of helper, the verse says, is to be a man named and honoured by God.",
            "bn": "মুয়াসসার সবচেয়ে সাদামাটা ব্যাখ্যাটাই ধরে রাখেন: আল্লাহ হারূন (আঃ)-কে তাঁর সাহায্যকারী বানালেন, তারপর দুজনকে একসাথে ফেরাউনের কাছে পাঠালেন। অন্য তাফসীরকাররা যত সমৃদ্ধ শব্দই বেছে নিন, এই সহজ কথার সঙ্গে তার কোনো বিরোধ নেই। সব বর্ণনাতেই মূল ছবিটা এক। আয়াতে হারূন (আঃ)-এর পুরো অবস্থান ঠিক হয়েছে ভাইয়ের মিশন দিয়ে, আর তাঁর মহত্ত্ব মাপা হয় তিনি সেই মিশনের পেছনে কতটা পুরোপুরি নিজেকে ঢেলে দেন তা দিয়ে। আয়াত বলছে, এমন সাহায্যকারী হওয়া মানে এমন মানুষ হওয়া, যাঁর নাম আল্লাহ নিজে নিয়েছেন, যাঁকে তিনি সম্মান দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Brother Asked For",
          "bn": "চেয়ে নেওয়া ভাই"
        },
        "p": [
          {
            "en": "Al-Qurtubi, commenting on this verse, sends the reader back to Surat Ta Ha, where the appointment was first told. There, he notes, the sequence runs this way: Musa (AS) was commanded, and then, when Musa asked 'and appoint for me a wazir from my family' (20:29), the word came, 'Go, both of you, to Fir'awn.' On al-Qurtubi's reading, the brother placed at the side of Musa (AS) was a brother he had prayed for. The helper, in other words, arrived as an answered supplication.",
            "bn": "এই আয়াতের ব্যাখ্যায় কুরতুবী পাঠককে ফিরিয়ে নিয়ে যান সূরা ত্বা-হায়, যেখানে এই নিয়োগের কথা প্রথম এসেছে। তিনি দেখান, সেখানে ঘটনার ধারা এমন: মূসা (আঃ)-কে আদেশ দেওয়া হলো। তারপর মূসা যখন চাইলেন, 'আর আমার পরিবার থেকে আমার জন্য একজন ওযীর নিযুক্ত করুন' (২০:২৯), তখন হুকুম এল, 'তোমরা দুজন ফেরাউনের কাছে যাও।' কুরতুবীর ব্যাখ্যা অনুযায়ী, মূসা (আঃ)-এর পাশে যে ভাইকে রাখা হলো, তাঁর জন্য মূসা (আঃ) নিজেই দোয়া করেছিলেন। অর্থাৎ সাহায্যকারী এসেছিলেন কবুল হওয়া এক দোয়ার জবাব হয়ে।"
          },
          {
            "en": "That single detail reframes the whole verse. The support God gives His messenger is not only something poured down on him from above; it is also something Musa (AS) reached out and asked for, naming the very person he wanted and giving the reason he needed him. God then answered by making that exact man his wazir. There is a quiet lesson here about how help tends to arrive. Very often it comes because someone had the sense to ask for it, by name, before the hard road had even begun.",
            "bn": "এই একটি তথ্য গোটা আয়াতকে নতুন আলোয় দেখায়। আল্লাহ তাঁর রাসূলকে যে সাহায্য দেন, তা কেবল উপর থেকে ঢেলে দেওয়া কিছু নয়। মূসা (আঃ) নিজেও হাত বাড়িয়ে তা চেয়েছিলেন: যাঁকে চান তাঁর নাম ধরে, আর কেন দরকার তার কারণ জানিয়ে। আল্লাহ জবাব দিলেন ঠিক সেই মানুষটিকেই তাঁর ওযীর বানিয়ে। সাহায্য সাধারণত কীভাবে আসে, তা নিয়ে এখানে একটা নীরব শিক্ষা আছে। অনেক সময় সাহায্য আসে এ কারণে যে, কঠিন পথ শুরু হওয়ার আগেই কেউ বুদ্ধি করে নাম ধরে তা চেয়ে নিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Sent, Two Commanded",
          "bn": "দুজনকে পাঠানো, দুজনকে আদেশ"
        },
        "p": [
          {
            "en": "Al-Qurtubi lingers over a small grammatical knot. The command in the passage, 'Go, both of you,' is addressed to two people, yet elsewhere Allah speaks to Musa (AS) by himself, telling him to go to Fir'awn who had transgressed. How can both be true at once? Some earlier readers, he reports, tried to argue that only Musa was really meant. An-Nahhas rejects that outright, saying such boldness with the Book of God is not to be dared, since the verses plainly address the pair.",
            "bn": "কুরতুবী একটি ছোট ব্যাকরণগত জটের কাছে খানিক থামেন। এই অংশের হুকুম 'তোমরা দুজন যাও' দুজন মানুষকে লক্ষ্য করে বলা। অথচ অন্য জায়গায় আল্লাহ শুধু মূসা (আঃ)-কে ফেরাউনের কাছে যেতে বলছেন, যে সীমা ছাড়িয়ে গিয়েছিল। দুটো একসাথে সত্য হয় কীভাবে? কুরতুবী জানান, আগের কেউ কেউ বলার চেষ্টা করেছিলেন যে আসলে শুধু মূসাকেই বোঝানো হয়েছে। নাহহাস তা সরাসরি নাকচ করে দেন। তিনি বলেন, আল্লাহর কিতাব নিয়ে এমন দুঃসাহস দেখানো চলে না, কারণ আয়াতগুলো স্পষ্টতই দুজনকেই সম্বোধন করছে।"
          },
          {
            "en": "Al-Qushayri settles the matter simply, and al-Qurtubi passes the answer along: when two people are commanded together, each of them is commanded as well, so 'go, both of you' and 'go' do not collide. What survives the grammar is the part that matters for us. The mission to the greatest tyrant of the age was carried by two men under a single command, sent out together and answerable together. Even before Fir'awn, Musa (AS) did not stand as a lone figure but as half of an appointed pair.",
            "bn": "কুশায়রী বিষয়টা সহজেই মীমাংসা করেন, আর কুরতুবী সেই জবাব পৌঁছে দেন: যখন দুজনকে একসাথে আদেশ করা হয়, তখন তাদের প্রত্যেককেই আদেশ করা হয়, তাই 'তোমরা দুজন যাও' আর 'যাও' পরস্পরে ঠোকাঠুকি করে না। ব্যাকরণ পেরিয়ে যা টিকে থাকে, সেটাই আমাদের জন্য আসল কথা। যুগের সবচেয়ে বড় স্বৈরাচারীর কাছে মিশনটা বহন করলেন দুজন মানুষ, এক হুকুমের অধীনে, একসাথে পাঠানো আর একসাথে জবাবদিহি। ফেরাউনের সামনেও মূসা (আঃ) দাঁড়াননি একা কোনো মানুষ হয়ে, দাঁড়িয়েছিলেন নিযুক্ত এক জোড়ার অর্ধেক হয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Bound Together for God",
          "bn": "আল্লাহর জন্য বাঁধা বন্ধন"
        },
        "p": [
          {
            "en": "None of the commentaries we consulted attaches a specific sound hadith to this verse, so nothing should be forced onto it. Yet the bond the verse honours, two people joined in one work for the sake of God, has a clear place in the words of the Prophet ﷺ. In Sahih al-Bukhari he named seven whom Allah will shade on the Day when there is no shade but His, and among them are 'two persons who love each other for Allah's sake, meeting for that and parting for that.'",
            "bn": "আমরা যেসব তাফসীর দেখেছি, তার কোনোটিতেই এই আয়াতের সঙ্গে নির্দিষ্ট কোনো সহীহ হাদিস জুড়ে দেওয়া হয়নি। তাই জোর করে কিছু চাপানো ঠিক হবে না। তবে আয়াত যে বন্ধনকে সম্মান দেয়, আল্লাহর জন্য এক কাজে মিলিত দুই মানুষের বন্ধন, নবী ﷺ-এর কথায় তার স্পষ্ট জায়গা আছে। সহীহ বুখারীতে তিনি ৭ ধরনের মানুষের কথা বলেছেন, যাদের আল্লাহ সেদিন ছায়া দেবেন যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না। তাদের মধ্যে আছে 'এমন দুই ব্যক্তি, যারা আল্লাহর জন্য একে অপরকে ভালোবাসে, এর জন্যই মিলিত হয়, এর জন্যই আলাদা হয়।'"
          },
          {
            "en": "This narration is not a comment on Musa (AS) and Harun (AS); it stands as a general teaching about what such a bond is worth, and it must be read as that rather than as tafsir of the verse. Set beside these words, though, the two brothers become the teaching's highest illustration: two who loved one another and met, laboured and stood before Fir'awn purely for the sake of God. The hadith tells the ordinary believer that a friendship built around obedience is no small thing. It is among the ties God Himself will honour when nothing else casts a shadow.",
            "bn": "এই বর্ণনা মূসা (আঃ) ও হারূন (আঃ)-এর ওপর কোনো মন্তব্য নয়; এটি এমন এক বন্ধন কতটা মূল্যবান তা নিয়ে সাধারণ এক শিক্ষা, আর একে আয়াতের তাফসীর নয়, ওই শিক্ষা হিসেবেই পড়তে হবে। তবু এই কথার পাশে রাখলে দুই ভাই হয়ে ওঠেন সেই শিক্ষার সর্বোচ্চ দৃষ্টান্ত: দুজন যাঁরা একে অপরকে ভালোবাসতেন আর কেবল আল্লাহর সন্তুষ্টির জন্যই মিললেন, খাটলেন আর ফেরাউনের সামনে দাঁড়ালেন। হাদিসটি সাধারণ মুমিনকে বলে, আনুগত্যকে ঘিরে গড়া বন্ধুত্ব ছোট কিছু নয়। তা সেই বন্ধনগুলোর একটি যা স্বয়ং আল্লাহ সম্মান দেবেন যেদিন আর কিছুই ছায়া ফেলবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Sent Are Denied",
          "bn": "প্রেরিতদের যখন অস্বীকার করা হয়"
        },
        "p": [
          {
            "en": "The verse does not stop at the gifts. The next lines send the pair to 'the people who denied Our signs,' and al-Muyassar fills the sequence in: Musa (AS) and Harun (AS) went to them, called them to believe in God and obey Him, were met with denial, and the deniers were then destroyed. Ibn Kathir reads the run that follows, the people of Nuh (AS) drowned, Ad and Thamud and others brought low, as a single sustained warning laid before the Prophet's own deniers. This, it says, is how the story of rejection has always ended.",
            "bn": "আয়াত দানের কথা বলেই থেমে যায় না। পরের অংশ দুই ভাইকে পাঠায় 'সেই জাতির কাছে, যারা আমার নিদর্শন অস্বীকার করেছিল।' মুয়াসসার পুরো ধারাটা খুলে বলেন: মূসা (আঃ) ও হারূন (আঃ) তাদের কাছে গেলেন, আল্লাহর উপর ঈমান আনতে আর তাঁর আনুগত্য করতে ডাকলেন, কিন্তু তারা অস্বীকার করল, তারপর সেই অস্বীকারকারীদের ধ্বংস করা হলো। এরপরের আয়াতগুলোতে আছে নূহ (আঃ)-এর জাতির ডুবে মরা, আদ, সামূদ আর অন্যদের পতন। ইবন কাসীর এসবকে পড়েন নবী ﷺ-এর নিজের অস্বীকারকারীদের সামনে রাখা এক টানা সতর্কবার্তা হিসেবে। এর বার্তা হলো: অস্বীকারের কাহিনি বরাবর এভাবেই শেষ হয়েছে।"
          },
          {
            "en": "A word of care belongs here. These verses report what befell particular peoples who rejected their messengers after the truth had been made plain to them. They speak only of what they name, and they license nothing against any living person or community today. Their purpose, as as-Sadi explains, is to move the ones being addressed towards fear and reflection, never to place a weapon in anyone's hand. What the believer is meant to take from Fir'awn's end is a warning aimed first of all at his own heart.",
            "bn": "এখানে একটা সতর্কতার কথা বলে রাখা দরকার। এই আয়াতগুলো নির্দিষ্ট কিছু জাতির পরিণতির কথা জানায়, যারা সত্য স্পষ্ট হয়ে যাওয়ার পরও নিজেদের রাসূলদের প্রত্যাখ্যান করেছিল। এগুলো কেবল সেই ঘটনাটুকুই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এতে নেই। আস-সাদী যেমন ব্যাখ্যা করেন, এর উদ্দেশ্য হলো যাদের সম্বোধন করা হচ্ছে তাদের ভয় আর ভাবনার দিকে নিয়ে যাওয়া, কারও হাতে অস্ত্র তুলে দেওয়া কখনোই নয়। ফেরাউনের পরিণতি থেকে মুমিন যে সতর্কবার্তা নেবে, তার প্রথম লক্ষ্য তার নিজের অন্তর।"
          }
        ]
      },
      {
        "h": {
          "en": "The Honour of the Helper",
          "bn": "সাহায্যকারীর মর্যাদা"
        },
        "p": [
          {
            "en": "Set the two gifts side by side and a quiet teaching stands clear. God, who needs no help at all, still chose to send His messenger with support rather than alone, and He raised the supporter's worth by making him a prophet in his own right. The world tends to remember the leader and forget the one who held him steady behind the scenes. This verse does the reverse. It names Harun (AS), calls him a wazir, and writes his help into the scripture for good.",
            "bn": "দুটি দান পাশাপাশি রাখলে একটা নীরব শিক্ষা স্পষ্ট হয়ে ওঠে। আল্লাহর কোনো সাহায্যের প্রয়োজন নেই। তবু তিনি তাঁর রাসূলকে একা না পাঠিয়ে সঙ্গে সাহায্যকারী দিয়ে পাঠালেন। আর সেই সাহায্যকারীকে নিজেও নবী বানিয়ে তাঁর মর্যাদা উঁচু করলেন। দুনিয়া সাধারণত নেতাকে মনে রাখে, আর ভুলে যায় তাঁকে, যিনি আড়াল থেকে নেতাকে অটল রেখেছিলেন। এই আয়াত করে ঠিক উল্টোটা। হারূন (আঃ)-এর নাম নেয়, তাঁকে ওযীর বলে, আর তাঁর সাহায্যের কথা চিরদিনের জন্য কিতাবে লিখে রাখে।"
          },
          {
            "en": "For the reader the lesson turns in two directions. When you carry a good and heavy task, do as Musa (AS) did: ask God plainly for the right people to stand beside you, and never mistake needing help for weakness. And when your own role is to be the helper, to strengthen a work that someone else leads, know that this is no lesser calling at all. Scripture gives that place a name of its own, wazir, and it gives that name the face of a prophet.",
            "bn": "পাঠকের জন্য শিক্ষাটা দুই দিকে যায়। আপনি যখন কোনো ভালো অথচ ভারী কাজ কাঁধে নেন, তখন মূসা (আঃ)-এর মতো করুন: পাশে দাঁড়ানোর মতো সঠিক মানুষগুলোর জন্য আল্লাহর কাছে খোলাখুলি চেয়ে নিন। আর সাহায্যের দরকারকে কখনো দুর্বলতা ভাববেন না। আবার আপনার নিজের ভূমিকা যদি হয় সাহায্যকারীর, অন্যের নেতৃত্বে চলা কোনো কাজকে শক্তি জোগানো, তবে জেনে রাখুন, এ মোটেও ছোট কোনো দায়িত্ব নয়। কিতাব এই জায়গাটির আলাদা একটি নাম দিয়েছে, ওযীর, আর সেই নামকে দিয়েছে এক নবীর চেহারা।"
          }
        ]
      }
    ]
  },
  "25:38": {
    "sections": [
      {
        "h": {
          "en": "The Roll-Call of Ruins",
          "bn": "ধ্বংসের নামগুলো একে একে"
        },
        "p": [
          {
            "en": "The verse before this drowned the people of Nuh (AS) and made them a sign for mankind. Now the list does not stop. And Ad, and Thamud, and the companions of the well, and many generations in between. As-Sa'di reads the whole passage as a warning held up to the deniers of Makka: God gestures at these stories so that those who keep rejecting their own messenger will fear what befell the nations before them. These were peoples they knew, whose accounts had spread and become well known among them.",
            "bn": "এর আগের আয়াতে নূহ (আঃ)-এর জাতিকে ডুবিয়ে মানুষের জন্য নিদর্শন বানানো হয়েছে। এবার তালিকা থামে না। ‘আদ, সামূদ, কূপবাসী, আর এদের মাঝখানের বহু বহু প্রজন্ম। সা’দী গোটা অংশটিকে পড়েন মক্কার অস্বীকারকারীদের জন্য এক সতর্কবার্তা হিসেবে। আল্লাহ এই কাহিনিগুলোর দিকে ইশারা করেন, যাতে যারা নিজেদের রাসূলকে বারবার মিথ্যা বলে যাচ্ছে তারা আগের জাতিগুলোর পরিণতিকে ভয় করে। এরা এমন সব জাতি ছিল যাদের কথা তারা জানত, যাদের ঘটনা তাদের মধ্যে ছড়িয়ে ও প্রসিদ্ধ হয়ে গিয়েছিল।"
          },
          {
            "en": "Some of those ruins the Quraysh did not merely hear about; they walked past them. As-Sa'di notes they saw the traces with their own eyes, like the dwellings of Thamud in al-Hijr and the overturned town showered with stones, passed morning and evening on their trading routes. What stopped them taking the lesson, he adds, was not lack of evidence but that they held no hope of being raised again. The roll-call is aimed less at the dead than at the living who ride past their graves.",
            "bn": "এই ধ্বংসস্তূপের কিছু কুরাইশরা শুধু শুনেই জানত না, তার পাশ দিয়ে হেঁটে যেত। সা’দী বলেন, তারা নিজ চোখে এদের চিহ্ন দেখত, যেমন হিজরে সামূদের ঘরবাড়ি আর পাথরের বৃষ্টিতে উল্টে যাওয়া জনপদ, যার পাশ দিয়ে তারা সকালে-সন্ধ্যায় ব্যবসার পথে যাতায়াত করত। তবু তারা শিক্ষা নিত না। সা’দী যোগ করেন, এর কারণ প্রমাণের অভাব ছিল না, বরং তারা পুনরুত্থানের আশাই রাখত না। তাই এই তালিকা মৃতদের চেয়ে বেশি তাক করা সেই জীবিতদের দিকে, যারা এদের কবরের পাশ দিয়ে চলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "ʿAd and Thamud Once More",
          "bn": "আবারও ‘আদ ও সামূদ"
        },
        "p": [
          {
            "en": "Ad and Thamud stand first because their fall was the best remembered. Al-Qurtubi fills in what the bare names carry: Ad denied Hud (AS) and God destroyed them by the barren wind that bore no rain, and Thamud denied Salih (AS) and were seized by the rajfa, the quaking that shook them to stillness. Ibn Kathir declines to retell either story here, noting that both have already been laid out in other places, such as Surat al-Araf, so there is no need to repeat them.",
            "bn": "তালিকায় ‘আদ ও সামূদ সবার আগে, কারণ এদের পতনই সবচেয়ে বেশি মনে ছিল। খালি নাম দুটি যা বহন করে, কুরতুবী তা খুলে বলেন। ‘আদ হূদ (আঃ)-কে মিথ্যা বলেছিল, আর আল্লাহ তাদের ধ্বংস করেন এমন এক বন্ধ্যা ঝড়ে যা কোনো বৃষ্টি বয়ে আনেনি। সামূদ সালিহ (আঃ)-কে মিথ্যা বলেছিল, আর তাদের ধরে ফেলে রাজফা, সেই ভূকম্পন যা তাদের নিথর করে দেয়। ইবন কাসীর এখানে কোনো কাহিনি আবার বলতে চান না। তিনি বলেন, দুটোই সূরা আ‘রাফসহ একাধিক জায়গায় বিস্তারিত এসেছে, তাই পুনরাবৃত্তির দরকার নেই।"
          },
          {
            "en": "The brevity is itself the argument. These are not obscure peoples dug up to frighten anyone; they are the standard warnings of the Arabs, whose ruins and reputations the listeners already carried. By setting Ad and Thamud at the head of the list, the verse tells the deniers of Makka that they stand in a long line. The outcome of denial is not a fresh threat but a settled record, and they are next in that record unless they turn back.",
            "bn": "এই সংক্ষিপ্ততাই আসল যুক্তি। এরা ভয় দেখানোর জন্য খুঁড়ে আনা অচেনা কোনো জাতি নয়। এরা আরবদের চিরচেনা সতর্ক-কাহিনি; এদের ধ্বংসস্তূপ শ্রোতারা চিনত, এদের কথা আগে থেকেই জানত। ‘আদ ও সামূদকে তালিকার শুরুতে বসিয়ে আয়াত মক্কার অস্বীকারকারীদের জানিয়ে দেয়, তারা এক দীর্ঘ সারিতে দাঁড়িয়ে আছে। অস্বীকারের পরিণতি নতুন কোনো হুমকি নয়, এ এক প্রতিষ্ঠিত ইতিহাস। ফিরে না এলে সেই ইতিহাসের পরের পাতায় তাদেরই নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Were the People of Rass",
          "bn": "কূপবাসী আসলে কারা"
        },
        "p": [
          {
            "en": "With the third name the ground turns uncertain. At-Tabari opens by saying the interpreters differed over the companions of ar-Rass, and he sets their views side by side rather than choosing quickly. Some held they were a people of a village of Thamud, a reading he traces through Ibn Jurayj to Ibn Abbas. Others said ar-Rass was a village in al-Yamama called al-Falaj, on the authority of Qatadah. Others again, from Ikrimah, said they were a people who cast their own prophet down into a well.",
            "bn": "তৃতীয় নামে এসে পায়ের নিচের মাটি নড়বড়ে হয়ে যায়। তাবারী শুরুতেই বলেন, কূপবাসীদের নিয়ে ব্যাখ্যাকারেরা মতভেদ করেছেন, আর তিনি তাড়াহুড়ো করে একটা বেছে না নিয়ে মতগুলো পাশাপাশি সাজিয়ে দেন। কেউ বলেছেন, এরা ছিল সামূদের কোনো এক জনপদের লোক। এই মত তিনি ইবন জুরাইজের সূত্রে ইবন আব্বাস পর্যন্ত টানেন। কেউ বলেছেন, রাস ছিল ইয়ামামার আল-ফালজ নামের এক জনপদ, কাতাদার বরাতে। আবার কেউ ইকরিমার সূত্রে বলেছেন, এরা ছিল এমন এক জাতি যারা নিজেদের নবীকে কূপের ভেতর ফেলে দিয়েছিল।"
          },
          {
            "en": "Al-Qurtubi widens the field. From Kab and others he reports they were the people of Ya-Sin, the townsfolk of Antioch, and that ar-Rass was the well there in which they killed Habib the Carpenter, the believer of that surah. From Ali (RA) he carries a view that they worshipped a pine tree, killed the prophet who cursed it, cast him in a well, and were burned by a black cloud. From Wahb ibn Munabbih he reports they were herdsmen at a well to whom Shuayb (AS) was sent, and when they persisted the well caved in upon them.",
            "bn": "কুরতুবী পরিসরটা আরও বাড়ান। কা‘ব ও অন্যদের সূত্রে তিনি বলেন, এরা ছিল ইয়াসীনের লোক, আন্তাকিয়ার অধিবাসী, আর রাস ছিল সেই কূপ যেখানে তারা সূরা ইয়াসীনের মুমিন হাবীব নাজ্জারকে হত্যা করেছিল। আলী (রাঃ)-এর সূত্রে তিনি আনেন এক মত যে এরা এক সনোবর গাছের পূজা করত, গাছটির উপর বদদোয়াকারী নবীকে হত্যা করে কূপে ফেলে দেয়, আর এক কালো মেঘ এসে তাদের পুড়িয়ে দেয়। ওয়াহব ইবন মুনাব্বিহের সূত্রে তিনি বলেন, এরা ছিল কূপের ধারে থাকা পশুপালক, যাদের কাছে শু‘আইব (আঃ)-কে পাঠানো হয়, আর তারা গোঁ ধরে থাকলে কূপ ধসে তাদের গিলে ফেলে।"
          },
          {
            "en": "Al-Baghawi gathers much the same spread and adds another: Said ibn Jubayr's report that their prophet was named Hanzala ibn Safwan, whom they killed. Some, he says, held they were a remnant of Thamud, and that ar-Rass is the abandoned well named in Surat al-Hajj (22:45). The sheer number of accounts is the real finding. When the reports fan out this widely, no single one of them can be leaned on, and the honest reader notices that the disagreement is itself the state of the knowledge.",
            "bn": "বাগাভীও প্রায় একই মতগুলো জড়ো করেন, সঙ্গে আরেকটি যোগ করেন। সা‘ঈদ ইবন জুবাইরের বর্ণনায় তাদের নবীর নাম ছিল হানজালা ইবন সাফওয়ান, যাঁকে তারা হত্যা করেছিল। তিনি আরও বলেন, কারও কারও মতে এরা ছিল সামূদের অবশিষ্টাংশ, আর রাস হলো সূরা হজ্জে (২২:৪৫) উল্লিখিত সেই পরিত্যক্ত কূপ। আসলে বর্ণনার এই সংখ্যাধিক্যই সবচেয়ে বড় কথা। বর্ণনাগুলো যখন এত দিকে ছড়িয়ে যায়, তখন কোনো একটির উপর ভর করা যায় না। সৎ পাঠক বুঝতে পারেন, এই মতভেদটাই এ বিষয়ে জ্ঞানের প্রকৃত অবস্থা।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Word Rass Carries",
          "bn": "রাস শব্দ যা বহন করে"
        },
        "p": [
          {
            "en": "Under the noise of the stories, one thing stays steady: the word itself. At-Tabari, al-Qurtubi and al-Baghawi agree that in the speech of the Arabs ar-Rass is an unlined well, one not built up with stone, and more broadly any dug-out thing, a well, a grave, a mine. Its plural is risas, and the verb rassa means to bury or to sink something down into such a pit. Every rival account, however far apart, keeps this one image at its centre.",
            "bn": "কাহিনির এই কোলাহলের নিচে একটা জিনিস স্থির থাকে, শব্দটা নিজেই। তাবারী, কুরতুবী ও বাগাভী একমত যে আরবদের ভাষায় রাস মানে বাঁধানো নয় এমন কূপ, পাথরে গাঁথা হয়নি এমন কুয়ো, আর আরও ব্যাপক অর্থে যেকোনো খোঁড়া জিনিস, কূপ, কবর কিংবা খনি। এর বহুবচন রিসাস, আর রাসসা ক্রিয়ার মানে এমন গর্তে পুঁতে দেওয়া বা নামিয়ে দেওয়া। প্রতিটি প্রতিদ্বন্দ্বী বর্ণনা যত দূরেই থাকুক, এই একটি ছবিকেই কেন্দ্রে রাখে।"
          },
          {
            "en": "That is why at-Tabari settles, tentatively, on the plainest reading: that they were simply a people who lived by a well. He rests this not on any of the competing tales but on the meaning of the name, which fixes them to a pit and nothing more. The lesson of his method is worth as much as the result. Where the reports cannot be reconciled, he returns to the word and refuses to manufacture a certainty the sources do not give.",
            "bn": "এ কারণেই তাবারী দ্বিধাভরে সবচেয়ে সহজ পাঠে থিতু হন, এরা ছিল কেবল কূপের ধারে বাস করা এক জাতি। এই সিদ্ধান্ত তিনি কোনো প্রতিদ্বন্দ্বী কাহিনির উপর নয়, নামটির অর্থের উপর দাঁড় করান, যা তাদের একটি গর্তের সঙ্গে বেঁধে দেয়, এর বেশি নয়। তাঁর পদ্ধতির শিক্ষা ফলাফলের মতোই দামি। যেখানে বর্ণনাগুলো মেলানো যায় না, সেখানে তিনি শব্দের কাছে ফিরে যান, আর সূত্র যে নিশ্চয়তা দেয় না তা বানিয়ে তুলতে অস্বীকার করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name the Sources Leave Open",
          "bn": "যে পরিচয় সূত্র খোলা রাখে"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an states the limit outright. Neither the Quran nor any sound tradition describes these people in any detail, and whatever is reported about them comes through Israelite narrations that do not agree among themselves. Its own guess is modest, that they were most likely a remnant of Thamud who had settled near a well. As for how they were punished, it says plainly that neither the Quran nor any tradition records it. The text names them and stops.",
            "bn": "মাআরিফুল কুরআন সীমাটা সোজাসুজি বলে দেয়। কুরআন বা কোনো নির্ভরযোগ্য বর্ণনা এই জাতির বিস্তারিত বিবরণ দেয়নি। তাদের নিয়ে যা কিছু বলা হয়, তা এসেছে ইসরাইলি বর্ণনা থেকে, আর সেসব বর্ণনা একটির সঙ্গে আরেকটি মেলে না। মাআরিফের নিজের অনুমানও সংযত: সম্ভবত এরা ছিল সামূদের অবশিষ্টাংশ, যারা কোনো কূপের কাছে বসতি গেড়েছিল। তাদের শাস্তি কীভাবে হয়েছিল, সে ব্যাপারে মাআরিফ স্পষ্ট বলে দেয় যে কুরআন বা কোনো বর্ণনায় তা নেই। কুরআন তাদের নাম নেয়, তারপর থেমে যায়।"
          },
          {
            "en": "At-Tabari, for his part, leaned towards identifying them with the companions of the ditch mentioned in Surat al-Buruj, since he knew of no other people in the Book with a story built around a dug pit. Yet he held even this loosely. Both he and al-Qurtubi rejected the identification drawn from the report of the buried prophet, because the Quran says ar-Rass were destroyed, while in that report the people repented and believed. The responsible course is to leave the name open.",
            "bn": "তাবারী নিজে অবশ্য এদের সূরা বুরূজে উল্লিখিত গর্তের অধিবাসীদের সঙ্গে মিলিয়ে দেখার দিকে ঝোঁকেন, কারণ কুরআনে খোঁড়া গর্ত ঘিরে কাহিনি আছে এমন আর কোনো জাতির কথা তাঁর জানা ছিল না। তবু তিনি এটিও আলগাভাবে ধরেন। তিনি ও কুরতুবী দুজনেই কূপে পুঁতে ফেলা নবীর বর্ণনা থেকে টানা পরিচয় বাতিল করেন, কারণ কুরআন বলে রাসবাসীদের ধ্বংস করা হয়েছিল, অথচ সেই বর্ণনায় জাতিটি তওবা করে ঈমান আনে। দায়িত্বশীল পথ হলো নামটি খোলা রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Generations Only God Numbers",
          "bn": "যুগগুলো শুধু আল্লাহ জানেন"
        },
        "p": [
          {
            "en": "After the named nations comes the phrase that dwarfs them all: and many generations in between. Al-Qurtubi glosses these as nations known to no one but God, ranged between the peoples already listed. Al-Muyassar says the same in a line, that they are past anyone's counting but God's. The verse has just recited the famous ruins, and now it gestures at a far larger crowd of the forgotten, peoples who rose and were undone and left not even a name for the Quran to record.",
            "bn": "নামধারী জাতিগুলোর পর আসে সেই কথাটা যা এদের সবাইকে ছাপিয়ে যায়, আর এদের মাঝখানের বহু প্রজন্ম। কুরতুবী এদের ব্যাখ্যা করেন এমন সব জাতি হিসেবে যাদের আল্লাহ ছাড়া কেউ জানে না, যারা আগে উল্লিখিত জাতিগুলোর মাঝখানে ছিল। মুয়াসসার এক লাইনে একই কথা বলে, এদের সংখ্যা আল্লাহ ছাড়া আর কারও গোনার বাইরে। আয়াত এইমাত্র প্রসিদ্ধ ধ্বংসস্তূপগুলোর নাম নিল, আর এখন ইশারা করছে বিস্মৃতদের আরও বিশাল এক ভিড়ের দিকে, যারা উঠে এসেছিল, নিশ্চিহ্ন হয়েছিল, আর কুরআনের লিপিবদ্ধ করার মতো একটা নামও রেখে যায়নি।"
          },
          {
            "en": "The word for these generations is qurun, the plural of qarn, and the commentators pause on what a qarn is. Ibn Kathir reports that some fixed it at 120 years, others at 100, or 80, or 40; at-Tabari carries a report of 70 and another of 40. Ibn Kathir judges the soundest view to be that a qarn is not a fixed span of years at all, but a body of people who are each other's contemporaries; when they pass and others succeed them, that is the next qarn.",
            "bn": "এই প্রজন্মগুলোর জন্য ব্যবহৃত শব্দ কুরূন, যা কারন-এর বহুবচন, আর ব্যাখ্যাকারেরা থামেন কারন মানে কী তা নিয়ে। ইবন কাসীর জানান, কেউ একে ধরেছেন ১২০ বছর, কেউ ১০০, কেউ ৮০, কেউ ৪০ বছর। তাবারী আনেন ৭০-এর এক বর্ণনা আর ৪০-এর আরেকটি। ইবন কাসীরের মতে সবচেয়ে সহিহ মত হলো, কারন কোনো নির্দিষ্ট বছরের হিসাব নয়, বরং একে অপরের সমসাময়িক একদল মানুষ। এরা চলে গেলে অন্যরা এদের জায়গা নেয়, সেটাই পরের কারন।"
          },
          {
            "en": "For that meaning Ibn Kathir cites a hadith found in the two Sahih collections. In Sahih al-Bukhari the Prophet ﷺ says, The best people are those living in my generation, and then those who will follow them, and then those who will follow the latter. The grading is sound, since al-Bukhari placed it in his Sahih. The report praises the best of the generations while the verse counts the ruined ones, yet the shared word does one job here: it settles that a qarn is a living generation of people, not a bare span of years.",
            "bn": "এই অর্থের পক্ষে ইবন কাসীর দুই সহিহ গ্রন্থে থাকা এক হাদিস উদ্ধৃত করেন। সহিহ বুখারিতে নবী ﷺ বলেন, সর্বোত্তম মানুষ আমার প্রজন্মের লোকেরা, তারপর যারা তাদের পরে আসবে, তারপর যারা তাদের পরে আসবে। এর মান সহিহ, কারণ বুখারি একে তাঁর সহিহ গ্রন্থে রেখেছেন। হাদিসটি সর্বোত্তম প্রজন্মগুলোর প্রশংসা করে, আর আয়াত গোনে ধ্বংস হওয়া প্রজন্মগুলোকে। তবু দুটোতে একই শব্দ থাকায় এখানে একটা কাজ হয়: বোঝা যায়, কারন মানে একই সময়ে বেঁচে থাকা একদল মানুষ, নিছক কতগুলো বছর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Report of the Lone Believer",
          "bn": "একলা ঈমান আনা বান্দার কথা"
        },
        "p": [
          {
            "en": "One long narration hovers over this verse and needs handling with care. At-Tabari, al-Qurtubi and Ibn Kathir all relay a report, sent down through Muhammad ibn Kab al-Qurazi, that the Prophet ﷺ said the first person to enter Paradise on the Day of Rising is a black slave. A prophet was sent to a village and none believed but that slave; the people dug a well, threw the prophet in, and sealed it with a great rock; the slave secretly fed him, until God cast him into sleep for fourteen years, after which the people relented, drew the prophet out, and believed.",
            "bn": "এই আয়াত ঘিরে একটি দীর্ঘ বর্ণনা চালু আছে, যা সাবধানে সামলানো দরকার। তাবারী, কুরতুবী ও ইবন কাসীর সবাই মুহাম্মাদ ইবন কা‘ব আল-কুরাজীর সূত্রে একটি বর্ণনা আনেন যে নবী ﷺ বলেছেন, কিয়ামতের দিন সবার আগে জান্নাতে ঢুকবে এক কালো গোলাম। এক নবীকে এক জনপদে পাঠানো হয়েছিল, সেই গোলাম ছাড়া কেউ ঈমান আনেনি। লোকেরা কূপ খুঁড়ে নবীকে তাতে ফেলে বড় এক পাথর দিয়ে মুখ বন্ধ করে দেয়। গোলামটি লুকিয়ে তাঁকে খাবার দিত। এরপর আল্লাহ তাকে চৌদ্দ বছরের ঘুমে ফেলে দেন, তারপর লোকেরা নরম হয়ে নবীকে বের করে আনে আর ঈমান আনে।"
          },
          {
            "en": "But the report cannot bear much weight. Ibn Kathir marks it as carrying strangeness and rejected material, and says it may hold an interpolation; it is a mursal narration, missing the link to a Companion, and so not a sound hadith attached to the verse. At-Tabari and al-Qurtubi make a further point: these cannot be the companions of ar-Rass at all, because the Quran says ar-Rass were destroyed, while in this story the people repented and were saved. It is a loose narration, not a settled comment on this verse.",
            "bn": "তবে এই বর্ণনার উপর বেশি ভার দেওয়া যায় না। ইবন কাসীর বলেন, এতে গারাবা ও নাকারা, অর্থাৎ অদ্ভুত ও আপত্তিকর কথা আছে, আর হয়তো কোনো বর্ণনাকারীর নিজের কথা এতে ঢুকে পড়েছে (ইদরাজ)। বর্ণনাটি মুরসাল, অর্থাৎ সনদে সাহাবির নাম নেই। তাই এটি আয়াতের সঙ্গে যুক্ত কোনো সহিহ হাদিস নয়। তাবারী ও কুরতুবী আরেকটি কথা বলেন: এরা কোনোভাবেই কূপবাসী হতে পারে না। কারণ কুরআন বলছে রাসবাসীদের ধ্বংস করা হয়েছিল, অথচ এই কাহিনিতে জাতিটি তওবা করে রক্ষা পায়। কাজেই এটি একটি আলগা বর্ণনা, এই আয়াতের প্রতিষ্ঠিত ব্যাখ্যা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ruins as Warning, Not Warrant",
          "bn": "ধ্বংসস্তূপ সতর্কবার্তা, সনদ নয়"
        },
        "p": [
          {
            "en": "One thing must be said plainly, in case the roll-call is misused. The verse describes peoples whom God destroyed for denying His messengers, and it describes exactly that and nothing more. Their ruin was God's own judgement, carried out by His decree upon nations long gone. It hands no living person or community a warrant to raise a hand against anyone, nor a licence to name any present group the heirs of Ad or Thamud. To read a threat against neighbours into it is to abuse it.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার, পাছে এই তালিকার অপব্যবহার হয়। আয়াত এমন জাতিদের কথা বলে, যাদের আল্লাহ তাঁর রাসূলদের মিথ্যা বলার কারণে ধ্বংস করেছেন, আর ঠিক সেটুকুই বলে, এর বেশি কিছু নয়। তাদের ধ্বংস ছিল আল্লাহর নিজের বিচার, বহু আগে চলে যাওয়া জাতিদের উপর তাঁর হুকুমে কার্যকর। কোনো জীবিত মানুষ বা সম্প্রদায়কে আয়াত কারও গায়ে হাত তোলার সনদ দেয় না, আর কোনো বর্তমান দলকে ‘আদ বা সামূদের উত্তরসূরি বলে দাগিয়ে দেওয়ার অনুমতিও দেয় না। এ আয়াত থেকে প্রতিবেশীর বিরুদ্ধে হুমকি বের করা মানে আয়াতের অপব্যবহার করা।"
          },
          {
            "en": "What the verse does license is reflection on oneself. As-Sa'di draws the working lesson: these nations were no worse by nature than the deniers of Makka, and their messengers no lesser than the one now among them. What condemned them was that they met clear signs while holding no expectation of being raised and judged. The ruins are set out so that the one who passes them will fear the same end and turn before it is fixed upon him.",
            "bn": "আয়াত যে কাজের অনুমতি দেয়, তা হলো নিজের দিকে ফিরে তাকানো। সা’দী এখান থেকে কাজের শিক্ষাটা বের করে আনেন: এই জাতিগুলো স্বভাবে মক্কার অস্বীকারকারীদের চেয়ে খারাপ ছিল না, আর তাদের রাসূলরাও এখন এদের মাঝে থাকা রাসূলের চেয়ে ছোট ছিলেন না। তাদের সর্বনাশ ডেকে এনেছিল একটাই জিনিস: স্পষ্ট নিদর্শন সামনে পেয়েও তারা পুনরুত্থান ও হিসাবের কোনো আশা রাখত না। ধ্বংসস্তূপগুলো এজন্যই সাজিয়ে রাখা, যাতে যে এদের পাশ দিয়ে যায় সে একই পরিণতির ভয় পায়, আর সেই পরিণতি তার উপর স্থির হয়ে যাওয়ার আগেই ফিরে আসে।"
          },
          {
            "en": "The generations only God can number carry the sharpest edge. Whole peoples rose, refused, and vanished so completely that the Quran keeps no record of them beyond the crowd. To be forgotten is not rare; it is the ordinary end of those who will not listen. The verse invites me to walk past the wreckage of the deaf as one who might yet hear, treating the ruins as a mirror and not a museum, and to turn while my own name is still unwritten in that list.",
            "bn": "যে প্রজন্মগুলো কেবল আল্লাহ গুনতে পারেন, তাদের ধারটাই সবচেয়ে তীক্ষ্ণ। গোটা জাতি উঠে এসেছে, অস্বীকার করেছে, আর এমন নিঃশেষে মিলিয়ে গেছে যে কুরআন সেই ভিড় ছাড়া তাদের কোনো হিসাব রাখে না। বিস্মৃত হয়ে যাওয়া বিরল কিছু নয়, যারা শুনতে চায় না তাদের এটাই সাধারণ পরিণতি। আয়াত আমাকে ডাকে বধিরদের ধ্বংসাবশেষের পাশ দিয়ে এমন একজন হয়ে হাঁটতে যে হয়তো এখনো শুনতে পারে। ধ্বংসস্তূপকে জাদুঘর নয়, আয়না বলে দেখতে, আর সেই তালিকায় নিজের নাম লেখা হওয়ার আগেই ফিরে আসতে।"
          }
        ]
      }
    ]
  },
  "25:47": {
    "sections": [
      {
        "h": {
          "en": "After the Shadow Is Drawn In",
          "bn": "ছায়া গুটিয়ে নেওয়ার পর"
        },
        "p": [
          {
            "en": "Wa huwa-lladhi ja'ala lakumu-l-layla libasan wa-n-nawma subatan wa ja'ala-n-nahara nushura: and it is He who made the night a garment for you, and sleep a rest, and made the day a rising. The verse sits in a run of signs. Just before it, 25:45 and 25:46 describe the shadow stretched out and then drawn in. Ibn Kathir's abridged commentary reports from Ibn 'Abbas, Mujahid, Qatadah and others that this is the stretch from the first light of dawn until sunrise, and from as-Suddi that the withdrawal is gentle and concealed.",
            "bn": "ওয়া হুওয়াল্লাযী জাআলা লাকুমুল লাইলা লিবাসাঁও ওয়ান নাওমা সুবাতাঁও ওয়া জাআলান নাহারা নুশূরা: তিনিই তোমাদের জন্য রাতকে করেছেন পোশাক, ঘুমকে বিশ্রাম, আর দিনকে করেছেন জেগে ওঠার সময়। আয়াতটি নিদর্শনের একটা ধারার ভেতরে বসানো। ঠিক আগে ২৫:৪৫ ও ২৫:৪৬ আয়াতে ছায়ার কথা: তা ছড়িয়ে দেওয়া হয়, তারপর গুটিয়ে নেওয়া হয়। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ইবন আব্বাস, মুজাহিদ, কাতাদা ও অন্যদের থেকে জানায়, এ হলো ভোরের প্রথম আলো থেকে সূর্য ওঠা পর্যন্ত সময়টুকু। সুদ্দী বলেন, গুটিয়ে নেওয়াটা হয় কোমলভাবে, চোখের আড়ালে।"
          },
          {
            "en": "At-Tabari joins our verse to that scene in his opening sentence: the One who stretched the shadow and made the sun its guide is the One who made the night a garment for you, O people. Ibn Kathir's abridged commentary heads the whole passage as evidence of the Creator and of His power to make pairs of opposites. The same opening, wa huwa-lladhi, returns at 25:48, where the verse itself says He sends the winds as good tidings ahead of His mercy and sends down pure water, and again at 25:53 and 25:54.",
            "bn": "তাবারী প্রথম বাক্যেই আমাদের আয়াতকে ওই দৃশ্যের সঙ্গে জুড়ে দেন। যিনি ছায়া ছড়িয়ে দিয়েছেন আর সূর্যকে তার পথপ্রদর্শক করেছেন, হে মানুষ, তিনিই তোমাদের জন্য রাতকে পোশাক বানিয়েছেন। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ গোটা অংশটির শিরোনাম দেয় স্রষ্টার অস্তিত্বের প্রমাণ, আর পরস্পরবিরোধী জোড়া সৃষ্টিতে তাঁর ক্ষমতা। একই সূচনা, ওয়া হুওয়াল্লাযী, আবার আসে ২৫:৪৮ আয়াতে। সেখানে আয়াত নিজেই বলে, তিনি তাঁর রহমতের আগে আগে সুসংবাদ হিসেবে বাতাস পাঠান আর আকাশ থেকে পবিত্র পানি নামান। এরপর একই সূচনা আসে ২৫:৫৩ ও ২৫:৫৪ আয়াতেও।"
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
            "en": "Libas is the ordinary Arabic word for clothing, and the commentators agree on what it carries here: covering. Ibn Kathir says the night clothes all that exists and wraps over it, and he sets beside it two oaths on the same image: by the night when it covers, 92:1, and by the night when it covers it, 91:4. Al-Baghawi says its darkness envelops everything as a garment envelops the one who wears it. The Muyassar puts it most simply: the night screens you with its darkness as clothing screens you.",
            "bn": "লিবাস আরবিতে পোশাকের সাধারণ শব্দ। এখানে শব্দটি কী বোঝায়, তা নিয়ে মুফাসসিরগণ একমত: ঢেকে রাখা। ইবন কাসীর বলেন, রাত গোটা সৃষ্টিজগৎকে পোশাকের মতো পরিয়ে দেয়, তার ওপর ছেয়ে যায়। পাশে তিনি একই ছবির দুটি শপথ রাখেন: শপথ রাতের, যখন তা ঢেকে ফেলে (৯২:১), আর শপথ রাতের, যখন তা একে ঢেকে দেয় (৯১:৪)। বাগাভী বলেন, রাতের অন্ধকার সবকিছুকে এমনভাবে জড়িয়ে নেয়, যেভাবে পোশাক তার পরিধানকারীকে জড়িয়ে রাখে। মুয়াসসার সবচেয়ে সহজ করে বলে: পোশাক যেমন আপনাকে আড়াল করে, রাতও তেমনি অন্ধকার দিয়ে আপনাকে আড়াল করে।"
          },
          {
            "en": "At-Tabari gives the covering a purpose. Allah made the night a junnah for His creatures, a shelter in which they take cover and settle, so that it became a screen for them just as the clothes they are dressed in screen them. Al-Qurtubi reports him calling the description a comparison, since the night hides things and spreads over them. Ma'arif al-Qur'an pictures a natural sheet laid over everything, the way a dress covers a body. The verb ja'ala lakum, He made for you, frames the darkness as a provision, and as-Sa'di opens by calling it part of Allah's mercy and gentleness towards you.",
            "bn": "তাবারী এই ঢেকে রাখার একটা উদ্দেশ্য দেখান। আল্লাহ রাতকে তাঁর সৃষ্টির জন্য জুন্নাহ, অর্থাৎ আশ্রয় বানিয়েছেন। সেখানে তারা আড়াল নেয়, স্থির হয়। ফলে রাত তাদের জন্য পর্দা হয়ে যায়, ঠিক যেমন গায়ের কাপড় তাদের ঢেকে রাখে। কুরতুবী তাবারীর কথা উদ্ধৃত করে জানান, এটি একটি উপমা: রাত জিনিসপত্র আড়াল করে আর সেগুলোর ওপর ছেয়ে থাকে। মাআরিফুল কুরআন ছবিটা আঁকে প্রকৃতির এক চাদর হিসেবে, যা সবকিছুর ওপর বিছানো, যেভাবে কাপড় শরীর ঢাকে। জাআলা লাকুম, তিনি তোমাদের জন্য বানিয়েছেন, এই ক্রিয়াটিই অন্ধকারকে দান হিসেবে পেশ করে। সা'দীও শুরু করেন এ কথা দিয়ে যে, এটি আপনাদের প্রতি আল্লাহর রহমত ও কোমলতারই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Darkness Does Not Clothe Prayer",
          "bn": "অন্ধকার নামাযের সতর নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi records one practical error that the word libas once invited. Ibn al-'Arabi said that some careless people supposed a man who prays unclothed in the dark has done enough, since the night is a garment. He answers that this would equally allow a man to pray unclothed in his own house once he has shut the door. Covering in prayer, he says, is an act of worship that belongs to the prayer itself, not a precaution against people's eyes, and he adds that the point needs no lengthy argument.",
            "bn": "লিবাস শব্দটি একসময় একটা বাস্তব ভুলের সুযোগ করে দিয়েছিল, কুরতুবী সেটি লিখে রেখেছেন। ইবনুল আরাবী বলেন, কিছু অসতর্ক লোক ভেবেছিল, অন্ধকারে কেউ বস্ত্রহীন অবস্থায় নামায পড়লে তা চলে যাবে, কারণ রাত তো পোশাক। তাঁর জবাব: তাহলে তো ঘরের দরজা বন্ধ করে বস্ত্রহীন হয়ে নামায পড়াও জায়েয হয়ে যায়। তিনি বলেন, নামাযে সতর ঢাকা একটি ইবাদত, যা নামাযেরই অংশ। মানুষের চোখ থেকে বাঁচার জন্য এটি নয়। সঙ্গে যোগ করেন, এ নিয়ে লম্বা আলোচনার কোনো দরকার নেই।"
          },
          {
            "en": "The exchange is a small lesson in how to read a Quranic image. The night is called a garment because it covers, and the commentators draw from that the shelter, stillness and privacy it gives. It does not follow that every rule attached to clothing is met by darkness. The figure tells you what Allah has provided; it does not quietly cancel what He has required. Ibn al-'Arabi's refusal to dwell on the matter says something too: some misreadings answer themselves as soon as they are spoken aloud.",
            "bn": "ঘটনাটি কুরআনের কোনো উপমা কীভাবে পড়তে হয়, তার ছোট্ট একটা শিক্ষা। রাতকে পোশাক বলা হয়েছে কারণ রাত ঢেকে রাখে। মুফাসসিরগণ এখান থেকে আশ্রয়, স্থিরতা আর আড়ালের কথা বের করেন। কিন্তু তাই বলে পোশাকের সঙ্গে জড়ানো প্রতিটি বিধান অন্ধকার দিয়ে পূরণ হয়ে যায় না। উপমাটি জানায় আল্লাহ কী দিয়েছেন। তিনি যা ফরয করেছেন, উপমা চুপিসারে তা বাতিল করে না। ইবনুল আরাবী যে বিষয়টা নিয়ে বেশি কথা বাড়াননি, সেটাও একটা ইঙ্গিত। কিছু ভুল ব্যাখ্যা মুখে উচ্চারণ করলেই নিজের জবাব নিজেই দিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Subat: Sleep as a Cutting Off",
          "bn": "সুবাত: ঘুম যেন এক ছেদ"
        },
        "p": [
          {
            "en": "Subat is the word the translation renders rest, and here the commentators open the root itself. Al-Baghawi says the root sense of sabt is cutting off; a sleeper is called masbut because his work and his movement have been cut off. Ibn Kathir explains subat as a cutting off of movement so that bodies can rest. Ma'arif al-Qur'an follows the same line, deriving subat from sabt, to cut, and saying that sleep cuts a person off from the strain of mind and body, which is why the word is usually translated as rest.",
            "bn": "অনুবাদে সুবাতের অর্থ লেখা হয় বিশ্রাম। মুফাসসিরগণ এখানে শব্দটির মূল ধাতু খুলে দেখান। বাগাভী বলেন, সাবত শব্দের আসল অর্থ কেটে দেওয়া। ঘুমন্ত মানুষকে মাসবূত বলা হয়, কারণ তার কাজ আর নড়াচড়া কেটে গেছে। ইবন কাসীরের ব্যাখ্যায় সুবাত মানে নড়াচড়ায় ছেদ, যাতে শরীর বিশ্রাম পায়। মাআরিফুল কুরআনও একই পথে চলে। সুবাত এসেছে সাবত থেকে, যার অর্থ কাটা। ঘুম মানুষকে মন আর শরীরের চাপ থেকে কেটে আলাদা করে দেয়। এ কারণেই শব্দটির অনুবাদ সাধারণত করা হয় বিশ্রাম।"
          },
          {
            "en": "Al-Qurtubi gives the fullest account, and he does not reduce it to one meaning. He first glosses the phrase as rest for your bodies through your being cut off from your occupations. Then he lists what has been said of the root. One view takes it from stretching out: a woman sabatat her hair when she loosened it and let it fall, a man masbut is long of frame, and sleep comes with lying stretched out, in which there is rest. Another takes it from cutting off, and from it the Sabbath of the Jews, because they cut off work on that day.",
            "bn": "সবচেয়ে বিস্তারিত বিবরণ দেন কুরতুবী, আর তিনি একটিমাত্র অর্থে আটকে থাকেন না। প্রথমে বাক্যাংশটির ব্যাখ্যা দেন এভাবে: কাজকর্ম থেকে বিচ্ছিন্ন হওয়ার ফলে আপনাদের শরীরের বিশ্রাম। তারপর মূল ধাতু নিয়ে যত মত আছে, তা গুনে গুনে বলেন। এক মতে শব্দটি এসেছে টানটান হয়ে ছড়িয়ে পড়া থেকে। আরবরা বলে, মহিলা চুল সাবাতাত করেছে, অর্থাৎ খুলে ছেড়ে দিয়েছে। লম্বা গড়নের লোককে বলে মাসবূত। ঘুম আসে শরীর টানটান করে শুলে, আর তাতেই বিশ্রাম। আরেক মতে শব্দটি এসেছে কেটে দেওয়া থেকে। ইহুদিদের সাবত এখান থেকেই, কারণ সেদিন তারা কাজ থেকে বিচ্ছিন্ন থাকে।"
          },
          {
            "en": "A third view takes sabt as staying put in a place, so that subat is a kind of stillness, sleep being a rest from agitation and movement. Al-Qurtubi then reports al-Khalil saying that subat is heavy sleep: Allah made your sleep deep so that refreshment and rest would be complete. At-Tabari keeps to the effect rather than the root: rest by which your bodies rest and your limbs grow calm. Ibn Kathir adds why it is needed. The limbs tire from constant movement as people spread out by day for their livelihoods, and sleep brings rest to body and soul together.",
            "bn": "তৃতীয় মতে সাবত মানে এক জায়গায় অবস্থান করা। তাহলে সুবাত হলো এক রকম স্থিরতা, আর ঘুম মানে অস্থিরতা ও নড়াচড়া থেকে বিরতি। এরপর কুরতুবী খলীলের মত উল্লেখ করেন: সুবাত হলো গভীর ঘুম। অর্থাৎ আল্লাহ আপনাদের ঘুম গাঢ় করেছেন, যাতে ক্লান্তি পুরোপুরি কাটে, বিশ্রাম পূর্ণ হয়। তাবারী মূল ধাতুতে যান না, ফলাফলের কথা বলেন: এমন বিশ্রাম, যাতে আপনাদের শরীর জিরিয়ে নেয়, অঙ্গপ্রত্যঙ্গ শান্ত হয়। ইবন কাসীর বলেন এর প্রয়োজন কেন। দিনভর জীবিকার খোঁজে ছোটাছুটিতে অঙ্গপ্রত্যঙ্গ ক্লান্ত হয়ে পড়ে। ঘুম তখন শরীর ও রূহ, দুটোকেই একসঙ্গে বিশ্রাম দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Day for Spreading Out",
          "bn": "ছড়িয়ে পড়ার দিন"
        },
        "p": [
          {
            "en": "The third word divides the commentators, and the difference is worth keeping. For several of them nushur names what people do in the day. Ibn Kathir says people spread out in it for their livelihoods, their earnings and their affairs, and he sets beside it 28:73: out of His mercy He made for you the night and the day, that you may rest in it and seek of His bounty. The Muyassar says He made the day so that you spread out in the land and seek your living. Mujahid, in a report at-Tabari carries with its chain, says simply: one spreads out in it.",
            "bn": "তৃতীয় শব্দটি নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে, আর মতভেদটা ধরে রাখার মতো। কয়েকজনের কাছে নুশূর বোঝায় দিনে মানুষ যা করে। ইবন কাসীর বলেন, দিনে মানুষ জীবিকা, উপার্জন আর নানা কাজের জন্য ছড়িয়ে পড়ে। পাশে তিনি রাখেন ২৮:৭৩ আয়াত: তিনি তাঁর রহমতে তোমাদের জন্য রাত ও দিন বানিয়েছেন, যাতে তোমরা রাতে বিশ্রাম নাও আর তাঁর অনুগ্রহ খোঁজো। মুয়াসসার বলে, তিনি দিন বানিয়েছেন যাতে আপনারা জমিনে ছড়িয়ে পড়েন, রুজির খোঁজ করেন। তাবারী সনদসহ মুজাহিদের একটি বর্ণনা আনেন, যেখানে মুজাহিদ ছোট্ট করে বলেন: দিনে মানুষ ছড়িয়ে পড়ে।"
          },
          {
            "en": "As-Sa'di has people spreading out for their trade, their journeys and their work, so that the interests of life are kept standing. Al-Baghawi joins both senses in a single gloss: the day is a waking, and a time in which you spread out to seek provision and go about your occupations. Al-Qurtubi likewise starts from spreading out for a living. On this reading the verse moves from cover, to rest, to work, the plain order of a human day, and it gives the same pairing of rest and seeking bounty that 28:73 gives.",
            "bn": "সা'দীর বর্ণনায় মানুষ ছড়িয়ে পড়ে ব্যবসা, সফর আর নানা কাজে, আর তাতেই জীবনের প্রয়োজনগুলো টিকে থাকে। বাগাভী এক ব্যাখ্যাতেই দুটি অর্থ মিলিয়ে দেন: দিন হলো জাগরণ, আর এমন সময় যখন আপনারা রিযিকের খোঁজে ও নিজের কাজে ছড়িয়ে পড়েন। কুরতুবীও শুরু করেন জীবিকার জন্য ছড়িয়ে পড়ার অর্থ দিয়ে। এভাবে পড়লে আয়াতটি এগোয় আড়াল থেকে বিশ্রামে, বিশ্রাম থেকে কাজে। মানুষের একটা দিনের সাদামাটা ক্রম এটাই। ২৮:৭৩ আয়াত বিশ্রাম আর অনুগ্রহ খোঁজার যে জোড়া দেখায়, এখানেও সেই একই জোড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Waking as a Return to Life",
          "bn": "জেগে ওঠা যেন আবার বেঁচে ওঠা"
        },
        "p": [
          {
            "en": "At-Tabari prefers another sense. Nushur, he says, means that Allah made the day a waking and a life, from the Arabic phrase nashara al-mayyit, the dead man came back to life. He cites the poet al-A'sha, whose line ends with people crying out in wonder at the dead man returning to life, and the Quran's own usage at 25:3, where the false gods own neither death, nor life, nor nushur. The word, on his account, is the word of resurrection, applied to the morning.",
            "bn": "তাবারী অন্য একটি অর্থকে বেশি সঠিক মনে করেন। তাঁর মতে নুশূর মানে, আল্লাহ দিনকে বানিয়েছেন জাগরণ ও জীবনের সময়। শব্দটি এসেছে আরবদের কথা নাশারাল মাইয়িত থেকে, অর্থাৎ মৃত লোকটি আবার জীবিত হলো। প্রমাণ হিসেবে তিনি কবি আ'শার একটি পঙক্তি আনেন, যার শেষে মানুষ মৃতের জীবিত হয়ে ওঠা দেখে বিস্ময়ে চেঁচিয়ে ওঠে। কুরআনের নিজের ব্যবহারও আনেন ২৫:৩ আয়াত থেকে, যেখানে মিথ্যা উপাস্যদের হাতে না আছে মৃত্যু, না জীবন, না নুশূর। তাঁর ব্যাখ্যায় শব্দটি পুনরুত্থানেরই শব্দ, যা এখানে সকালের ওপর বসানো হয়েছে।"
          },
          {
            "en": "He gives his reason. The phrase follows and sleep a rest, which belongs to the night, so describing the day as waking and rising from sleep fits better, since sleep is the brother of death. He does not dismiss Mujahid: that reading, he says, is not far from correct, because Allah has said He made the day a livelihood, the wording of 78:11. But nushur is the verbal noun of nashara, so it sits closer to rising from death and from sleep. Al-Qurtubi likewise says the day's waking is likened to life following death.",
            "bn": "তাবারী কারণও বলেন। বাক্যাংশটি এসেছে 'আর ঘুমকে বিশ্রাম' কথার ঠিক পরে, আর ঘুম তো রাতের ব্যাপার। তাই দিনকে ঘুম থেকে জেগে ওঠা ও উঠে দাঁড়ানোর সময় বলাটাই বেশি মানানসই, কারণ ঘুম মৃত্যুর ভাই। মুজাহিদের মত তিনি উড়িয়ে দেন না। বলেন, সেটিও সঠিকের থেকে দূরে নয়, কারণ আল্লাহ জানিয়েছেন তিনি দিনকে জীবিকার সময় বানিয়েছেন, যা ৭৮:১১ আয়াতের ভাষা। তবে নুশূর হলো নাশারা ক্রিয়ার মূল রূপ, তাই মৃত্যু ও ঘুম থেকে উঠে দাঁড়ানোর অর্থের সঙ্গেই এর মিল বেশি। কুরতুবীও বলেন, দিনের জাগরণকে মৃত্যুর পর জীবনের সঙ্গে তুলনা করা হয়েছে।"
          },
          {
            "en": "Both at-Tabari and al-Qurtubi close the point with the Prophet's words on waking, at-Tabari calling the narration sound. Al-Bukhari records it in his Sahih (6312): \"Narrated Hudhaifa: When the Prophet ﷺ went to bed, he would say: Bismika amutu wa ahya. And when he got up he would say: Al-hamdu lillahi-lladhi ahyana ba'da ma amatana wa ilayhi-n-nushur.\" That is: in Your name I die and I live; and praise be to Allah who gave us life after He caused us to die, and to Him is the rising. The waking words end on the very word of our verse.",
            "bn": "তাবারী ও কুরতুবী দুজনেই কথাটা শেষ করেন ঘুম থেকে জাগার সময় নবী ﷺ যা বলতেন তা দিয়ে। তাবারী বর্ণনাটিকে সহীহ বলেছেন। ইমাম বুখারী তাঁর সহীহ গ্রন্থে (৬৩১২) হুযাইফা (রাঃ) থেকে এটি এনেছেন: \"নবী ﷺ যখন বিছানায় যেতেন, বলতেন: বিসমিকা আমূতু ওয়া আহইয়া। আর যখন উঠতেন, বলতেন: আলহামদু লিল্লাহিল্লাযী আহইয়ানা বা'দা মা আমাতানা ওয়া ইলাইহিন নুশূর।\" অর্থাৎ, তোমার নামেই আমি মরি ও বাঁচি। আর সমস্ত প্রশংসা আল্লাহর, যিনি আমাদের মৃত্যু দেওয়ার পর জীবন দিয়েছেন, আর তাঁরই কাছে উত্থান। জাগরণের এ দোয়া শেষ হয় ঠিক আমাদের আয়াতের শব্দটিতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Night and Day in Measure",
          "bn": "মাপমতো রাত আর দিন"
        },
        "p": [
          {
            "en": "As-Sa'di reads the whole verse as mercy and gentleness, and he argues from its absence. Were there no night, he says, people would never settle and would carry on with their dealings without pause, and that would harm them to the utmost. Were the darkness to continue, their livelihoods and interests would come to a halt. So He made the day a nushur in which they spread out, and by it the interests of life are kept standing. On his account the blessing lies in the alternation, not in either half alone.",
            "bn": "সা'দী গোটা আয়াতটিকে পড়েন রহমত ও কোমলতা হিসেবে, আর যুক্তি দেন এগুলো না থাকলে কী হতো তা দেখিয়ে। তিনি বলেন, রাত না থাকলে মানুষ কখনো স্থির হতে পারত না, বিরামহীনভাবে কাজকারবার চালিয়ে যেত, আর তাতে তাদের চরম ক্ষতি হতো। আবার অন্ধকার যদি থেকেই যেত, তাহলে তাদের রুজি-রোজগার আর দরকারি কাজ সব থেমে যেত। তাই তিনি দিনকে বানিয়েছেন নুশূর, যখন মানুষ ছড়িয়ে পড়ে, আর তাতেই জীবনের প্রয়োজনগুলো দাঁড়িয়ে থাকে। তাঁর ব্যাখ্যায় নিয়ামতটা পালাবদলের মধ্যে, কোনো একটা অর্ধেকে নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an counts the blessings one by one. The night is one, made dark and cool because people sleep best in darkness and wake quickly in daylight; sleep is a second. A third is that people and animals all sleep at night by instinct. If each slept at a different hour, the waking would disturb the sleeping and no one could count on another's help, and no agreement among billions could have fixed a common hour so well. It adds that the urge to be awake and working by day is set in human nature in the same way.",
            "bn": "মাআরিফুল কুরআন নিয়ামতগুলো একটা একটা করে গোনে। রাত একটি নিয়ামত। রাতকে অন্ধকার ও শীতল করা হয়েছে, কারণ মানুষ অন্ধকারেই ভালো ঘুমায়, দিনের আলোয় ঘুম তাড়াতাড়ি ভেঙে যায়। ঘুম দ্বিতীয় নিয়ামত। তৃতীয়টি হলো, মানুষ ও প্রাণী সবাই স্বভাবগতভাবেই রাতে ঘুমায়। প্রত্যেকে ভিন্ন ভিন্ন সময়ে ঘুমালে জেগে থাকা লোকেরা ঘুমন্তদের বিরক্ত করত, আর কেউ কারও সাহায্যের ওপর ভরসা করতে পারত না। শত কোটি মানুষের কোনো চুক্তিও এত ভালোভাবে একটা অভিন্ন সময় ঠিক করে দিতে পারত না। মাআরিফ আরও বলে, দিনে জেগে কাজ করার তাগিদও একইভাবে মানুষের স্বভাবে বসিয়ে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Returned Day",
          "bn": "ফিরে পাওয়া দিনটি"
        },
        "p": [
          {
            "en": "Put together, the sources give a reader three things to notice in an ordinary twenty-four hours. The dark that ends the working day is a garment handed over, not time stolen from him. The sleep that stops every plan is a cutting off that every limb needs, and that Ma'arif al-Qur'an says a person resists only with great effort. The morning carries the word for resurrection, and the Prophet ﷺ greeted it with praise for life given back after death. None of the three is earned, and each arrives on time.",
            "bn": "সব সূত্র একসঙ্গে রাখলে সাধারণ চব্বিশ ঘণ্টার মধ্যে তিনটি জিনিস চোখে পড়ে। যে অন্ধকার কাজের দিন শেষ করে দেয়, তা আপনার হাতে তুলে দেওয়া পোশাক, আপনার কাছ থেকে চুরি করা সময় নয়। যে ঘুম সব পরিকল্পনা থামিয়ে দেয়, তা এমন এক ছেদ যা প্রতিটি অঙ্গের দরকার। মাআরিফুল কুরআন বলে, মানুষ অনেক কষ্ট করেই কেবল তা ঠেকিয়ে রাখতে পারে। আর সকালের গায়ে লেগে আছে পুনরুত্থানের শব্দ। নবী ﷺ সকালকে বরণ করতেন মৃত্যুর পর ফিরে পাওয়া জীবনের জন্য আল্লাহর প্রশংসা দিয়ে। তিনটির কোনোটিই কেউ উপার্জন করে না, অথচ প্রতিটি ঠিক সময়ে এসে হাজির হয়।"
          },
          {
            "en": "That suggests a small practice. Before sleep, say the words of Hudhaifa's report, in Your name I die and I live, and mean the handing over. On waking, say the praise for life returned and to Him is the rising, before the phone or the worry takes hold. Then use the day as the verse frames it and as the commentators describe it: spread out, earn, travel, serve the people who depend on you. A day received as a return to life is harder to spend on nothing.",
            "bn": "এখান থেকে একটা ছোট্ট অভ্যাস গড়ে নেওয়া যায়। ঘুমানোর আগে হুযাইফা (রাঃ)-এর বর্ণনার কথাগুলো বলুন: তোমার নামেই আমি মরি ও বাঁচি। আর মনে মনে নিজেকে সঁপে দিন। জেগে উঠে ফোন বা দুশ্চিন্তা মাথায় চেপে বসার আগেই ফিরে পাওয়া জীবনের জন্য প্রশংসা করুন, আর বলুন: তাঁরই কাছে উত্থান। তারপর দিনটা কাজে লাগান সেভাবে, যেভাবে আয়াত দিনকে সাজিয়েছে আর মুফাসসিরগণ বর্ণনা করেছেন। ছড়িয়ে পড়ুন, উপার্জন করুন, সফর করুন, যারা আপনার ওপর নির্ভর করে তাদের সেবা করুন। যে দিনকে নতুন করে পাওয়া জীবন হিসেবে গ্রহণ করা হয়, তা অনর্থক কাটিয়ে দেওয়া কঠিন।"
          }
        ]
      }
    ]
  },
  "25:48": {
    "sections": [
      {
        "h": {
          "en": "Where This Verse Sits",
          "bn": "নিদর্শনের ধারায় এই আয়াত"
        },
        "p": [
          {
            "en": "The verse opens with a refrain that runs through this whole passage: wa huwa alladhi, and it is He who. A few lines earlier God points to the shadow He stretches across the morning (25:45), then to the night He made a covering, sleep a rest, and the day a rising (25:47). Now come the winds and the rain. As-Sa'di reads the run of signs as a single argument: He alone showed mercy to His servants and poured out their provision. Shadow, sleep and rainfall answer to one Lord, and the passage is building towards the claim that He alone deserves to be worshipped.",
            "bn": "আয়াতটি শুরু হয় এমন এক কথায়, যা গোটা অনুচ্ছেদ জুড়ে ফিরে ফিরে আসে: ওয়া হুওয়াল্লাযী, তিনিই সেই সত্তা। কয়েক আয়াত আগে আল্লাহ দেখিয়েছেন সকালের ছায়া, যা তিনি বিছিয়ে দেন (২৫:৪৫); তারপর রাত, যাকে তিনি আবরণ বানিয়েছেন, ঘুমকে বিশ্রাম আর দিনকে আবার জেগে ওঠার সময় (২৫:৪৭)। এবার আসে বাতাস আর বৃষ্টি। সাদীর চোখে নিদর্শনের এই সারি আসলে একটাই যুক্তি: তিনি একাই তাঁর বান্দাদের প্রতি রহম করেছেন আর তাদের রিজিক ঢেলে দিয়েছেন। ছায়া, ঘুম আর বৃষ্টি একই রবের দিকে ইশারা করে, আর পুরো অনুচ্ছেদ এগিয়ে যায় এই কথার দিকে যে ইবাদতের যোগ্য কেবল তিনিই।"
          },
          {
            "en": "Inside this one verse the grammar itself moves. He sends the winds, arsala, in the third person; then the voice shifts to the first person of majesty, wa-anzalna, and We sent down. Al-Baghawi and al-Muyassar both gloss His mercy in the phrase bayna yaday rahmatihi plainly as the rain: the wind is the herald, the rain is the mercy it announces. So the two halves are not two subjects but one act of giving, told in two moments, the breeze first and the water close behind it.",
            "bn": "এই একটি আয়াতের ভেতরেই কথার ভঙ্গি বদলে যায়। প্রথমে বলা হয় 'তিনি বাতাস পাঠান', আরসালা; তারপর সুর বদলে হয় মহিমাসূচক 'আমি', ওয়া আনযালনা, আর আমি নামিয়ে দিলাম। বাগাভী ও মুয়াসসার দুজনেই 'বাইনা ইয়াদাই রহমাতিহি' কথায় তাঁর রহমতকে সোজাসুজি বৃষ্টি বলে ব্যাখ্যা করেন। বাতাস অগ্রদূত, আর বৃষ্টি সেই রহমত যার সে সুসংবাদ দেয়। তাই দুই অংশ দুটি আলাদা বিষয় নয়, দানের একটিই কাজ দুই ধাপে বলা— আগে বাতাস, পেছনে পানি।"
          }
        ]
      },
      {
        "h": {
          "en": "Winds With Many Tasks",
          "bn": "বাতাসের নানা কাজ"
        },
        "p": [
          {
            "en": "Ibn Kathir pauses on the plural, ar-riyah, the winds, and lists what they do. This too is part of His complete power, he says, and the winds come in many kinds. Some stir up and gather the clouds; some carry them; some drive them along; some go ahead of the clouds as heralds announcing their coming; some sweep the ground before them; and some fertilize the clouds so they release rain. One spell of weather is really a crew of winds, each with a task, and the herald of glad tidings named in the verse is one member of that crew.",
            "bn": "ইবন কাসীর বহুবচন শব্দটায় এসে থামেন: আর-রিয়াহ, বাতাসগুলো। তারপর গুনে দেখান এরা কী কী করে। তিনি বলেন, এটাও তাঁর পরিপূর্ণ কুদরতের অংশ, আর বাতাস নানা রকমের। কোনোটা মেঘ জাগিয়ে জড়ো করে; কোনোটা মেঘ বয়ে নেয়; কোনোটা তাকে হাঁকিয়ে নিয়ে যায়; কোনোটা মেঘের আগে আগে চলে তার আসার সুসংবাদ দেয়; কোনোটা আগেভাগে মাটি ঝেড়ে সাফ করে; আর কোনোটা মেঘকে গর্ভবতী করে, যাতে বৃষ্টি ঝরে। এক পশলা বৃষ্টির পেছনে আসলে কাজ করে বাতাসের একটা পুরো দল, প্রত্যেকের হাতে আলাদা কাজ। আয়াতে যে সুসংবাদবাহী অগ্রদূতের কথা, সে এই দলেরই একজন।"
          },
          {
            "en": "At-Tabari fixes on the same working detail. For him the winds sent here are al-mulaqqihah, the fertilizing winds, the ones that quicken the clouds, and bushra he glosses as life, or as the relief and rain-water God sends down upon His servants. Ibn Kathir's word for the last kind of wind comes from the same root: it yulqih, it pollinates the cloud so it will rain. The picture in both is not idle air but a deliberate arrangement with an outcome in view, water for a thirsty world, set in motion by a Lord who orders each step of it.",
            "bn": "তাবারীও কাজের এই খুঁটিনাটির দিকেই নজর দেন। তাঁর মতে এখানে যে বাতাস পাঠানো হয় তা আল-মুলাক্কিহা, মেঘকে গর্ভবতী করা বাতাস, যা মেঘে প্রাণ জাগায়। আর 'বুশরা' শব্দের অর্থ তিনি বলেন জীবন, কিংবা সেই স্বস্তি ও বৃষ্টির পানি, যা আল্লাহ তাঁর বান্দাদের উপর নামান। শেষ ধরনের বাতাসের জন্য ইবন কাসীর যে শব্দ ব্যবহার করেন, সেটাও একই ধাতু থেকে: ইউলকিহ, সে মেঘকে গর্ভবতী করে, যাতে বৃষ্টি হয়। দুজনের ছবিতেই এ বাতাস অলস হাওয়া নয়। এ এক ভেবেচিন্তে সাজানো আয়োজন, যার সামনে একটা লক্ষ্য আছে: তৃষ্ণার্ত দুনিয়ার জন্য পানি। আর এর প্রতিটি ধাপ সাজিয়ে চালু করেন একজন রব।"
          }
        ]
      },
      {
        "h": {
          "en": "The Herald of Mercy",
          "bn": "রহমতের অগ্রদূত"
        },
        "p": [
          {
            "en": "As-Sa'di draws out why the wind should come first at all. God sends the winds as heralds ahead of His mercy, which is the rain; by them the clouds are stirred and gather and thicken into masses, and He seeds them and makes them pour by His command. The reason he gives is tender: so the servants may take glad tidings of the rain before it falls, and ready themselves for it, rather than being caught all at once by a downpour that arrives with no warning. The herald is a mercy set inside the mercy, a kindness folded into the timing.",
            "bn": "সাদী খুলে বলেন কেন বাতাসকেই আগে আসতে হবে। আল্লাহ বাতাস পাঠান তাঁর রহমতের আগে আগে সুসংবাদদাতা হিসেবে, আর সেই রহমত হলো বৃষ্টি। এই বাতাসেই মেঘ জেগে ওঠে, জড়ো হয়, পুঞ্জ হয়ে ঘন হয়, আর তিনি সেই মেঘকে গর্ভবতী করে নিজের হুকুমে বর্ষণ করান। এর কারণটা তিনি বলেন কোমল ভাষায়: যাতে বান্দারা বৃষ্টি নামার আগেই তার সুসংবাদ পেয়ে যায় আর তার জন্য প্রস্তুত হতে পারে, কোনো সতর্কতা ছাড়া হঠাৎ নেমে আসা বর্ষণ যেন তাদের একবারে বেকায়দায় না ফেলে। এই অগ্রদূত যেন রহমতের ভেতরে রাখা আরেক রহমত; দয়াটা লুকিয়ে আছে সময় বেছে নেওয়ার মধ্যেই।"
          },
          {
            "en": "The phrase bayna yaday rahmatihi is literally between the hands of His mercy, that is, out in front of it, the way a herald walks ahead of the one he announces. Al-Baghawi and al-Muyassar both settle its meaning quietly: the mercy is the rain, and the wind carries its good news. It is worth noticing what gets called mercy here. Not a rescue from disaster, not a pardon after sin, but plain rainfall on ordinary ground. The Qur'an files the weather itself under rahmah, and asks the reader to feel it as exactly that.",
            "bn": "'বাইনা ইয়াদাই রহমাতিহি' কথাটির আক্ষরিক অর্থ তাঁর রহমতের দুই হাতের মাঝে, অর্থাৎ তার একেবারে সামনে, যেভাবে একজন অগ্রদূত যাঁর আগমনের খবর দিচ্ছে তাঁর আগে আগে হাঁটে। বাগাভী ও মুয়াসসার কোনো হইচই ছাড়াই অর্থটার মীমাংসা করে দেন: রহমত মানে বৃষ্টি, আর বাতাস তার সুখবর বয়ে আনে। এখানে কোন জিনিসটাকে রহমত বলা হচ্ছে, সেটা খেয়াল করার মতো। কোনো বিপর্যয় থেকে উদ্ধার নয়, গুনাহের পরে ক্ষমা নয়, বরং সাধারণ জমিনে সাধারণ বৃষ্টি। কুরআন আবহাওয়াকেই রহমতের খাতায় তোলে, আর পাঠককে বলে সেটাকে ঠিক সেভাবেই অনুভব করতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Tahur",
          "bn": "'তহূর' শব্দটি"
        },
        "p": [
          {
            "en": "With the water down, the verse adds one word that generations of jurists have leaned on: tahur, pure. Ibn Kathir's own preferred sense is that it names an instrument, a thing you purify yourself with, on the pattern of sahur, the food eaten before dawn, and waqud, the fuel a fire is lit with. Water is the tahur, the means of purification. He calls this the soundest thing said about the word, and sets aside the grammarians who read it as no more than an intensive of pure, noting that each of those readings runs into trouble in both language and law.",
            "bn": "পানি নেমে আসার পর আয়াত একটা শব্দ যোগ করে, যার উপর যুগের পর যুগ ফকিহরা ভর দিয়েছেন: 'তহূর', বিশুদ্ধ। ইবন কাসীরের নিজের পছন্দের অর্থ হলো, শব্দটি একটি উপকরণের নাম, যা দিয়ে আপনি নিজেকে পবিত্র করেন। যেমন 'সাহূর' মানে সেহরিতে খাওয়া খাবার, আর 'ওয়াকূদ' মানে যা দিয়ে আগুন জ্বালানো হয়। পানিই সেই 'তহূর', পবিত্রতা অর্জনের মাধ্যম। তাঁর মতে শব্দটি নিয়ে যত কথা বলা হয়েছে, এটাই সবচেয়ে সঠিক। যে ব্যাকরণবিদরা শব্দটিকে নিছক 'পবিত্র'-এর জোরালো রূপ ধরেন, তাঁদের মত তিনি সরিয়ে রাখেন, আর বলেন, ওই ব্যাখ্যাগুলোর প্রতিটিই ভাষা ও বিধান দুই দিক থেকেই ঝামেলায় পড়ে।"
          },
          {
            "en": "Al-Qurtubi opens fifteen questions on this single word, and his first sets a rule worth carrying: every tahur is pure, but not everything pure is tahur. The form is an intensification of tahir, pure, and that intensity, he says, makes the water both pure in itself and purifying for what it touches. This is the position of the majority. Ma'arif al-Qur'an sums up the settled result: water is clean by itself and carries the property of cleansing other things, and on this, it says, the ummah is agreed, as the plain sense of Qur'an and Sunnah.",
            "bn": "কুরতুবী এই এক শব্দ নিয়েই পনেরোটি প্রশ্ন তোলেন। প্রথমটিতেই আছে মনে রাখার মতো একটা নিয়ম: প্রতিটি 'তহূর' পবিত্র, কিন্তু প্রতিটি পবিত্র জিনিস 'তহূর' নয়। তিনি বলেন, শব্দটি 'তাহির' (পবিত্র)-এর জোরালো রূপ, আর এই জোরের কারণেই পানি নিজে পবিত্র, আবার যা ছোঁয় তাকেও পবিত্র করে। এটাই জমহুরের মত। মাআরিফুল কুরআন চূড়ান্ত কথাটা এক কথায় বলে দেয়: পানি নিজে পরিষ্কার, আর অন্য জিনিসকে পরিষ্কার করার গুণও তার আছে। কিতাবটি বলছে, এ বিষয়ে উম্মাহ একমত, আর কুরআন-সুন্নাহর সোজা অর্থও এটাই।"
          },
          {
            "en": "Al-Qurtubi then adds a proof from usage. The ummah agreed, in language and in law, that the word tahur is reserved for water and is not extended to other pure liquids. That very restriction, he argues, is the strongest evidence that tahur means the purifier and not merely the pure, since a word kept for water alone must be pointing at what water alone does, which is to lift a state of impurity, not simply to be clean.",
            "bn": "এরপর কুরতুবী শব্দটির ব্যবহার থেকে একটি দলিল যোগ করেন। ভাষায় ও বিধানে উম্মাহ একমত যে 'তহূর' শব্দটি কেবল পানির জন্য, অন্য কোনো পবিত্র তরলকে এ নামে ডাকা হয় না। তাঁর যুক্তি, এই সীমাবদ্ধতাই সবচেয়ে বড় প্রমাণ যে 'তহূর' মানে পবিত্রকারী, নিছক পবিত্র নয়। যে শব্দ শুধু পানির জন্য তোলা থাকে, তা নিশ্চয়ই এমন কিছুর দিকে ইশারা করে যা কেবল পানিই পারে: নাপাকির অবস্থা দূর করা, কেবল নিজে পরিষ্কার থাকা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Disagreement Over One Word",
          "bn": "এক শব্দ নিয়ে মতভেদ"
        },
        "p": [
          {
            "en": "Not everyone read the word the same way, and the article should let the difference stand. Al-Baghawi lays out three readings. The majority, with whom he sides, take tahur as pure-in-itself and purifying-for-others. The people of opinion, whom he names ahl ar-ra'y, the school of Abu Hanifa, read it as simply pure, tahir, and on that basis allowed impurity to be lifted with other clean liquids such as vinegar or rose-water. A third reading, which he attributes to Malik, hears in the form tahur something whose purifying recurs, the way sabur names one who is patient again and again.",
            "bn": "শব্দটি সবাই এক অর্থে নেননি, আর সেই মতভেদ এখানে যেমন আছে তেমনই থাকা উচিত। বাগাভী তিনটি ব্যাখ্যা তুলে ধরেন। জমহুরের মতে, যাঁদের পক্ষে তিনি নিজেও, 'তহূর' মানে যা নিজে পবিত্র এবং অন্যকে পবিত্র করে। যাঁদের তিনি 'আহলুর রায়' বলেন, অর্থাৎ আবু হানিফার মাযহাব, তাঁরা শব্দটিকে নিছক 'তাহির' (পবিত্র) অর্থে নেন। সেই ভিত্তিতে তাঁরা সিরকা বা গোলাপজলের মতো অন্য পরিষ্কার তরল দিয়েও নাপাকি দূর করা জায়েয বলেছেন। তৃতীয় ব্যাখ্যাটি তিনি মালিকের দিকে সম্পৃক্ত করেন: 'তহূর' রূপটি বোঝায় এমন কিছু, যা বারবার পবিত্র করে, যেমন 'সাবূর' মানে যে বারবার সবর করে।"
          },
          {
            "en": "What all three share is that this one word is where the law of purification with water is anchored. As-Sa'di says the water purifies from hadath, the state that breaks wudu, and from khabath, physical filth, and adds that it cleanses the heart too, from deceit and grime. Al-Baghawi backs the purifying sense from another verse, and sends down upon you water from the sky to purify you (8:11). Whichever grammar wins, the practical point holds: water is what Islam gives you to become clean for prayer, and this verse is its root.",
            "bn": "তিনটি পাঠেই মিল এক জায়গায়: পানি দিয়ে পবিত্রতার বিধান এই একটি শব্দেই গাঁথা। সাদী বলেন, এ পানি পবিত্র করে 'হাদাস' থেকে, অর্থাৎ যে অবস্থা অজু ভেঙে দেয়, আর 'খাবাস' থেকে, অর্থাৎ শরীরের ময়লা থেকে; আর যোগ করেন যে তা অন্তরকেও পরিষ্কার করে, ধোঁকা আর মালিন্য থেকে। বাগাভী পবিত্রকারী অর্থটির সমর্থন আনেন আরেক আয়াত থেকে, 'আর তিনি আকাশ থেকে তোমাদের উপর পানি নামান তোমাদের পবিত্র করতে' (৮:১১)। ব্যাকরণে যে পাঠই জিতুক, কাজের কথাটা একই থাকে: নামাজের জন্য পাক হতে ইসলাম আপনাকে যা দেয় তা হলো পানি, আর এই আয়াতই তার মূল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Well of Buda'ah",
          "bn": "বুদাআ কূপের ঘটনা"
        },
        "p": [
          {
            "en": "The clearest sound tradition on the verse fastens onto that same word. In Sunan Abu Dawud, Abu Sa'id al-Khudri reports that the people asked the Messenger of Allah ﷺ whether they could perform ablution from the well of Buda'ah, a well into which menstrual cloths, the flesh of dead dogs and refuse were thrown. He answered: Water is pure and is not defiled by anything. The reply does not inspect the well. It states a principle about water as tahur, that its purity is not undone by every impurity that happens to reach it.",
            "bn": "এই আয়াত নিয়ে সবচেয়ে স্পষ্ট নির্ভরযোগ্য বর্ণনাটি ঠিক এই শব্দটাকেই ধরে। সুনানে আবু দাউদে আবু সাঈদ খুদরি (রাঃ) বর্ণনা করেন, লোকেরা রাসূলুল্লাহ ﷺ-কে জিজ্ঞেস করল, তারা কি বুদাআ কূপের পানি দিয়ে অজু করতে পারে? সেই কূপে হায়েজের কাপড়, মরা কুকুরের গোশত আর আবর্জনা ফেলা হতো। তিনি জবাব দিলেন: পানি পবিত্র, কোনো কিছুই তাকে নাপাক করে না। তিনি কূপটা খুঁটিয়ে দেখতে যাননি। বরং পানি যে 'তহূর', সেই নীতিটাই বলে দিয়েছেন: যে কোনো নাপাকি এসে পড়লেই পানির পবিত্রতা নষ্ট হয়ে যায় না।"
          },
          {
            "en": "On its strength the reports differ, and the difference should be named. At-Tirmidhi graded the hadith hasan, sound enough to act on, and Ibn Kathir notes that Ahmad graded it sahih; it is also carried by an-Nasa'i. Al-Qurtubi, though, records that Ibn al-Arabi and Abu Umar judged its chain weak. What nobody disputes is the ruling that rests on the verse behind it: a body of clean water in quantity is not made impure by something falling into it unless its colour, taste or smell is changed, a point Ma'arif al-Qur'an reports as a general consensus.",
            "bn": "হাদিসটির মান নিয়ে বর্ণনাগুলোতে মতভেদ আছে, আর সেটা খোলাখুলি বলা দরকার। তিরমিযি একে হাসান বলেছেন, অর্থাৎ আমল করার মতো যথেষ্ট মজবুত; ইবন কাসীর জানান, আহমাদ একে সহিহ বলেছেন; নাসাঈও এটি বর্ণনা করেছেন। তবে কুরতুবী উল্লেখ করেন, ইবনুল আরাবি ও আবু উমার এর সনদকে দুর্বল বলেছেন। কিন্তু আয়াতের ওপর দাঁড়ানো বিধানটি নিয়ে কারও দ্বিমত নেই: বেশি পরিমাণ পরিষ্কার পানিতে কিছু পড়লে তা নাপাক হয় না, যতক্ষণ না তার রং, স্বাদ বা গন্ধ বদলে যায়। মাআরিফুল কুরআন একে সাধারণ ইজমা বলে উল্লেখ করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy You Can Trace",
          "bn": "যে রহমতের হদিস মেলে"
        },
        "p": [
          {
            "en": "The verse does not stop at pure water; it leans forward. As-Sa'di notes that this same water carries baraka, blessing, and is sent to bring a dead land to life so its plants and trees come up in their kinds, food for people and cattle, which the next verse spells out, that We may revive a dead land by it (25:49). And the verse after that adds that God distributes the water among them so they might remember (25:50). So the sign is not only that rain is pure; it is that rain is aimed, sent for life and shared out on purpose.",
            "bn": "আয়াত বিশুদ্ধ পানিতে এসেই থেমে যায় না, আরও সামনে এগোয়। সাদী লক্ষ করেন, এই পানিতেই আছে বরকত। আল্লাহ এটা পাঠান মৃত জমিনকে জীবিত করতে, যাতে নানা জাতের গাছপালা মাথা তোলে আর মানুষ ও পশুর খাবার হয়। পরের আয়াতই কথাটা খুলে বলে: 'যাতে আমি তা দিয়ে মৃত ভূমিকে জীবিত করি' (২৫:৪৯)। তার পরের আয়াত যোগ করে, আল্লাহ এই পানি মানুষের মাঝে ভাগ করে দেন, যাতে তারা স্মরণ করে (২৫:৫০)। তাই নিদর্শনটা শুধু এই নয় যে বৃষ্টি পবিত্র। বৃষ্টি লক্ষ্য ঠিক করে পাঠানো: জীবনের জন্য পাঠানো, আর ভেবেচিন্তে ভাগ করে দেওয়া।"
          },
          {
            "en": "As-Sa'di closes his comment with the question the whole passage has been driving at. Is not the One who sent the heralding winds, and set each of them to its own work, and sent down from the sky pure and blessed water holding provision for His servants and their animals, is not He the One who deserves to be worshipped alone, with no partner beside Him? The pure water is not offered as a curiosity of nature. It is offered as evidence, and the verdict it asks for is worship.",
            "bn": "সাদী তাঁর আলোচনা শেষ করেন এমন এক প্রশ্ন দিয়ে, যার দিকেই গোটা অনুচ্ছেদ এগোচ্ছিল। যিনি সুসংবাদদাতা বাতাস পাঠালেন, প্রত্যেকটিকে তার নিজের কাজে লাগালেন, আর আকাশ থেকে নামালেন পবিত্র ও বরকতময় পানি, যাতে আছে বান্দা আর তাদের পশুর রিজিক, তিনিই কি নন সেই সত্তা, একমাত্র যাঁর ইবাদত প্রাপ্য, যাঁর সঙ্গে কাউকে শরিক করা চলে না? এই বিশুদ্ধ পানির কথা প্রকৃতির কোনো মজার তথ্য হিসেবে আসেনি। এসেছে প্রমাণ হিসেবে, আর এ প্রমাণ একটাই রায় চায়: ইবাদত।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Rain as Kindness",
          "bn": "বৃষ্টিকে দয়া হিসেবে পড়া"
        },
        "p": [
          {
            "en": "Set the pieces together and a habit of seeing emerges. The wind that turns cool before a storm, the smell the first drops raise from dry earth, the grey that gathers while there is still time to bring the washing in, the Qur'an has already read these as a herald, glad tidings sent ahead of a mercy on its way. Most of us treat such moments as forecast, a matter of pressure and cloud. The verse asks for something more attentive: to catch, in the ordinary run of weather, a kindness deliberately announced before it arrives.",
            "bn": "টুকরোগুলো জোড়া দিলে দেখার একটা অভ্যাস তৈরি হয়। ঝড়ের আগে বাতাস হঠাৎ ঠান্ডা হয়ে আসে, শুকনো মাটিতে প্রথম ফোঁটা পড়লে একটা গন্ধ ওঠে, আকাশে ধূসর মেঘ জমতে থাকে আর তখনো কাপড় তুলে আনার সময় থাকে। কুরআন এগুলোকে আগেই অগ্রদূত বলে চিনিয়ে দিয়েছে: পথে থাকা এক রহমতের আগাম সুসংবাদ। আমরা বেশির ভাগই এসব মুহূর্তকে নিছক আবহাওয়ার পূর্বাভাস ভাবি, বায়ুচাপ আর মেঘের ব্যাপার। আয়াত চায় আরেকটু মনোযোগ: রোজকার আবহাওয়ার মধ্যেই এমন এক দয়াকে চিনে নেওয়া, যা আসার আগেই ইচ্ছে করে জানিয়ে দেওয়া হয়।"
          },
          {
            "en": "Two things follow. One is gratitude for the plainest gift there is, the water we drink and wash and pray with, which the verse dignifies as pure and God names His mercy. The other is a way of reading God's timing. He rarely lets His mercies land on us without a herald; there is usually a wind before the rain, a sign that good is on its way, if we are watching for it. The believer learns to notice the herald, to make ready, and to be glad of the gift before the first drop has fallen.",
            "bn": "এ থেকে দুটি শিক্ষা আসে। প্রথমটি হলো সবচেয়ে সাদামাটা দানের জন্য শুকরিয়া: যে পানি আমরা পান করি, যা দিয়ে ধুই আর নামাজ পড়ি। আয়াত এ পানিকে বিশুদ্ধ বলে সম্মান দিয়েছে, আর আল্লাহ একে বলেছেন তাঁর রহমত। দ্বিতীয়টি হলো আল্লাহ কখন কী পাঠান, তা বোঝার একটা চোখ। তিনি খুব কমই কোনো অগ্রদূত না পাঠিয়ে তাঁর রহমত আমাদের উপর নামান। বৃষ্টির আগে সাধারণত একটা বাতাস আসে, ভালো কিছু আসছে তার একটা ইশারা থাকে, যদি আমরা খেয়াল রাখি। মুমিন শেখে অগ্রদূতকে চিনে নিতে, প্রস্তুত হতে, আর প্রথম ফোঁটা পড়ার আগেই দানের জন্য খুশি হতে।"
          }
        ]
      }
    ]
  },
  "25:58": {
    "sections": [
      {
        "h": {
          "en": "Three Verses That Draw Limits",
          "bn": "সীমা টেনে দেওয়া তিন আয়াত"
        },
        "p": [
          {
            "en": "Wa tawakkal 'ala-l-hayyi-lladhi la yamut: and rely upon the Ever-Living who does not die. The command closes a short run of verses that draw limits. 25:55 describes people who worship, instead of Allah, what neither benefits nor harms them. 25:56 tells the Prophet ﷺ that he was sent only as a bearer of good tidings and a warner, and 25:57 has him say that he asks no wage for it, only that whoever wills may take a path to his Lord. As-Sa'di links the next step in a single clause: then He commanded him to rely on Him and to seek His help.",
            "bn": "ওয়া তাওয়াক্কাল 'আলাল হাইয়্যিল্লাযী লা ইয়ামূত: আর ভরসা করুন সেই চিরঞ্জীবের উপর, যিনি মরবেন না। এর ঠিক আগের কয়েকটি আয়াত একের পর এক সীমা টেনে দিয়েছে। ২৫:৫৫ আয়াত বলেছে, কিছু মানুষ আল্লাহকে ছেড়ে এমন কিছুর ইবাদত করে যা তাদের উপকারও করতে পারে না, ক্ষতিও না। ২৫:৫৬ আয়াতে নবী ﷺ-কে জানানো হয়েছে, তাঁকে পাঠানো হয়েছে কেবল সুসংবাদদাতা ও সতর্ককারী হিসেবে। ২৫:৫৭ আয়াতে তিনি বলেন, এর জন্য তিনি কোনো পারিশ্রমিক চান না, চান শুধু এটুকু যে যার ইচ্ছা সে তার রবের দিকে পথ ধরুক। সা'দী পরের ধাপটা জুড়ে দেন এক বাক্যে: তারপর আল্লাহ তাঁকে আদেশ দিলেন তাঁরই উপর ভরসা করতে আর তাঁরই সাহায্য চাইতে।"
          },
          {
            "en": "Ibn Kathir reads the command as addressed to the Messenger and as covering every part of his life: fi umurika kulliha, in all your affairs. The sequence gives that command its weight. A messenger who cannot compel anyone, and who is paid by nobody, is told where his weight should rest. The verse then sets three clauses in a row: rely, glorify with His praise, and know that He is enough fully aware of His servants' sins. The sections below take them in that order, with what each commentator fetched for this verse says about them.",
            "bn": "ইবন কাসীর আদেশটিকে পড়েন রাসূল ﷺ-এর প্রতি সম্বোধন হিসেবে, আর তা তাঁর জীবনের সবটা জুড়ে: ফী উমূরিকা কুল্লিহা, আপনার সব কাজে। আগের আয়াতগুলোর ধারাবাহিকতাই আদেশটিকে ভারী করে তোলে। যিনি কাউকে জোর করে ঈমান আনাতে পারেন না, যাঁকে কেউ পারিশ্রমিকও দেয় না, তাঁকেই বলে দেওয়া হলো কোথায় ভর রাখতে হবে। এরপর আয়াতে পরপর তিনটি অংশ: ভরসা করুন, তাঁর প্রশংসাসহ তাসবীহ পড়ুন, আর জেনে রাখুন বান্দাদের গুনাহের খবর রাখতে তিনিই যথেষ্ট। নিচের অংশগুলো এই ক্রমেই এগোবে, এ আয়াতের জন্য সংগ্রহ করা প্রতিটি তাফসীর কী বলে তা সঙ্গে নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Life That Knows No Death",
          "bn": "যে জীবনের সঙ্গে মৃত্যু নেই"
        },
        "p": [
          {
            "en": "The commentators explain al-hayy in close terms. At-Tabari paraphrases: rely, O Muhammad, on Him who has lasting life with which there is no death, al-hayat ad-da'ima allati la mawta ma'aha. As-Sa'di says: He who has complete, absolute life, al-hayat al-kamila al-mutlaqa. The Muyassar says: He who has all the meanings of perfect life, as befits His majesty, who does not die. The glosses are near each other, and each puts its stress on that life being complete and lasting, not merely present for now.",
            "bn": "আল-হাইয়্য শব্দের ব্যাখ্যায় তাফসীরকারেরা কাছাকাছি কথা বলেন। তাবারীর ভাষায়: হে মুহাম্মাদ, ভরসা করুন তাঁর উপর, যাঁর জীবন চিরস্থায়ী, যার সঙ্গে কোনো মৃত্যু নেই: আল-হায়াতুদ দাইমা আল্লাতী লা মাওতা মা'আহা। সা'দী বলেন, তিনি সেই সত্তা যাঁর জীবন পূর্ণ ও নিরঙ্কুশ: আল-হায়াতুল কামিলা আল-মুতলাকা। মুয়াসসার বলে, তিনি পূর্ণ জীবনের সব অর্থের অধিকারী, যেমনটি তাঁর মহিমার উপযুক্ত, আর তিনি মরেন না। তিনটি ব্যাখ্যা প্রায় এক জায়গায় দাঁড়ায়। প্রত্যেকটির জোর এই কথায় যে তাঁর জীবন পূর্ণ ও স্থায়ী, শুধু এই মুহূর্তে বিদ্যমান নয়।"
          },
          {
            "en": "Ibn Kathir widens the frame. In all your affairs, he says, rely on Allah, the Living who never dies, la yamutu abadan, and he joins the verse to 57:3: He is the First and the Last, the Outward and the Inward, and He knows all things. He goes on with a string of descriptions: the Everlasting, the Abiding, the Eternal without beginning or end, al-Hayy al-Qayyum, Lord of everything and its Sovereign. Those are his words, set down as he gives them; this article reports them and adds no description of its own.",
            "bn": "ইবন কাসীর পরিসরটা আরও বড় করেন। তিনি বলেন, আপনার সব কাজে আল্লাহর উপর ভরসাকারী হোন, যিনি চিরঞ্জীব, কখনো মরবেন না: লা ইয়ামূতু আবাদা। এরপর আয়াতটিকে তিনি জুড়ে দেন ৫৭:৩ আয়াতের সঙ্গে: তিনিই প্রথম ও শেষ, প্রকাশ্য ও গোপন, আর তিনি সব বিষয়ে জ্ঞানী। তারপর তিনি একের পর এক গুণ উল্লেখ করেন: চিরস্থায়ী, চিরবিদ্যমান, আদি-অন্তহীন, আল-হাইয়্যুল কাইয়্যূম, সবকিছুর রব ও মালিক। কথাগুলো তাঁর নিজের, যেভাবে তিনি দিয়েছেন সেভাবেই রাখা হলো। এ লেখা নিজের পক্ষ থেকে কোনো গুণ যোগ করছে না।"
          },
          {
            "en": "None of the fetched commentators says, in so many words, that reliance on something mortal ends when that thing ends. The verse's setting points that way all the same. Three verses earlier, 25:55 described objects of worship that neither benefit nor harm. Here He who is to be relied upon is marked by a single negative clause, la yamut. Read in sequence, the passage sets what cannot help beside Him whose life does not end. The arrangement belongs to the verses; drawing the contrast out is this article's reading, not a commentator's.",
            "bn": "সংগ্রহ করা কোনো তাফসীর সরাসরি বলে না যে নশ্বর কিছুর উপর ভরসা সেই জিনিস ফুরোলে নিজেও ফুরিয়ে যায়। তবু আয়াতের অবস্থান সেদিকেই ইঙ্গিত করে। তিনটি আয়াত আগে ২৫:৫৫ এমন উপাস্যের কথা বলেছে, যারা উপকারও করে না, ক্ষতিও না। আর এখানে যাঁর উপর ভরসা করতে বলা হচ্ছে, তাঁর পরিচয় দেওয়া হয়েছে একটিমাত্র নেতিবাচক কথায়: লা ইয়ামূত, তিনি মরেন না। পরপর পড়লে দেখা যায়, যে কিছুই করতে পারে না তার পাশে রাখা হয়েছে তাঁকে, যাঁর জীবনের শেষ নেই। এই বিন্যাস আয়াতগুলোর নিজের। তবে তুলনাটা টেনে বের করা এ লেখার পাঠ, কোনো তাফসীরকারের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Store, Refuge and a Report",
          "bn": "সঞ্চয়, আশ্রয় ও একটি বর্ণনা"
        },
        "p": [
          {
            "en": "Ibn Kathir then says what this reliance should look like for the Prophet ﷺ. Make Him your store and your refuge, ij'alhu dhukhraka wa malja'aka; it is He who is relied upon, and people run to Him in alarm, for He suffices you, helps you, supports you and grants you victory. He sets it beside 5:67, where the Messenger is told to convey what was sent down to him from his Lord, with the promise: and Allah will protect you from the people. The pairing ties reliance to the work of conveying the message.",
            "bn": "এরপর ইবন কাসীর বলেন, নবী ﷺ-এর বেলায় এ ভরসার চেহারা কেমন হবে। তাঁকেই আপনার সঞ্চয় আর আশ্রয় বানিয়ে নিন: ইজ'আলহু যুখরাকা ওয়া মালজাআকা। তিনিই সেই সত্তা, যাঁর উপর ভরসা করা হয়, বিপদে ভয় পেলে মানুষ যাঁর দিকে ছুটে যায়। কারণ তিনিই আপনার জন্য যথেষ্ট, তিনিই সাহায্যকারী, সমর্থনদাতা, বিজয়দাতা। কথাটির পাশে তিনি রাখেন ৫:৬৭ আয়াত, যেখানে রাসূলকে বলা হয়েছে রবের কাছ থেকে নাযিল হওয়া বাণী পৌঁছে দিতে, সঙ্গে এই প্রতিশ্রুতি: আর আল্লাহ আপনাকে মানুষের হাত থেকে রক্ষা করবেন। এ জোড়া ভরসাকে বেঁধে দেয় দাওয়াত পৌঁছানোর কাজের সঙ্গে।"
          },
          {
            "en": "Ibn Kathir next cites, through Ibn Abi Hatim, a report ending with Shahr ibn Hawshab: Salman met the Messenger of Allah ﷺ in one of the streets of Madinah and prostrated to him, and he said: Do not prostrate to me, Salman; prostrate to the Living who does not die. Ibn Kathir grades it himself as mursal hasan, a report whose chain stops short of a Companion, which he still calls good. This article could not confirm it in a hadith collection, so it stands here only as his citation, with his grading, and nothing further is built on it.",
            "bn": "এরপর ইবন কাসীর ইবন আবী হাতিমের সূত্রে একটি বর্ণনা আনেন, যার শেষ বর্ণনাকারী শাহর ইবন হাওশাব। সালমান (রাঃ) মদীনার এক গলিপথে রাসূলুল্লাহ ﷺ-এর দেখা পেয়ে তাঁকে সিজদা করেন। তিনি বললেন: সালমান, আমাকে সিজদা করো না। সিজদা করো সেই চিরঞ্জীবকে, যিনি মরেন না। ইবন কাসীর নিজেই এর মান বলে দেন: মুরসাল হাসান। অর্থাৎ এর সনদ সাহাবী পর্যন্ত পৌঁছায়নি, তবু তিনি একে ভালো বলেছেন। কোনো হাদীসগ্রন্থে এ লেখা বর্ণনাটি মিলিয়ে দেখতে পারেনি। তাই এখানে এটি কেবল তাঁর উদ্ধৃতি, তাঁরই দেওয়া মানসহ। এর উপর আর কিছু দাঁড় করানো হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Heart Leans On",
          "bn": "হৃদয় যাঁর উপর ভর দেয়"
        },
        "p": [
          {
            "en": "At-Tabari spells out what the command asks of the Prophet ﷺ in four verbs: trust Him in the matter of your Lord, hand it over to Him, submit to Him, and be patient with whatever befalls you in it. Fa-thiq bihi fi amri rabbika wa fawwid ilayhi wa-staslim lahu wa-sbir 'ala ma nabaka fihi. In his reading the reliance is tied to amr rabbik, the mission itself, and it includes patience with what that mission costs whoever carries it.",
            "bn": "আদেশটি নবী ﷺ-এর কাছে কী চায়, তাবারী তা খুলে বলেন চারটি ক্রিয়ায়: আপনার রবের কাজে তাঁর উপর আস্থা রাখুন, বিষয়টা তাঁর হাতে সঁপে দিন, তাঁর কাছে আত্মসমর্পণ করুন, আর এ পথে যা কিছু আপনার উপর আসে তাতে সবর করুন। ফাসিক বিহি ফী আমরি রাব্বিকা ওয়া ফাওউইদ ইলাইহি ওয়াসতাসলিম লাহু ওয়াসবির 'আলা মা নাবাকা ফীহি। তাঁর পাঠে এ ভরসা বাঁধা আছে আমরু রাব্বিকের সঙ্গে, অর্থাৎ রিসালাতের দায়িত্বের সঙ্গেই। আর সেই দায়িত্ব বহন করতে গিয়ে যে কষ্ট আসে, তার উপর সবরও এর অংশ।"
          },
          {
            "en": "Al-Qurtubi gives a definition. Tawakkul, he says, is the heart's dependence on Allah in all matters, and the means, al-asbab, are intermediaries that one is commanded to take without depending on them. He adds that the meaning was explained earlier, in his commentary on Al 'Imran and in this surah. On his account, reliance does not cancel the means; the person still acts and still uses what is at hand. What changes is where the heart rests while doing so.",
            "bn": "কুরতুবী একটি সংজ্ঞা দেন। তাঁর ভাষায় তাওয়াক্কুল হলো সব বিষয়ে আল্লাহর উপর হৃদয়ের নির্ভরতা। আর উপায়-উপকরণ, অর্থাৎ আসবাব, হলো মাধ্যম। সেগুলো গ্রহণ করার আদেশ আছে, কিন্তু সেগুলোর উপর নির্ভর করার নয়। তিনি জানিয়ে দেন, এর অর্থ আগেই আলোচিত হয়েছে, সূরা আলে ইমরানের তাফসীরে এবং এই সূরাতেও। তাঁর ব্যাখ্যায় ভরসা উপকরণকে বাতিল করে না। মানুষ কাজ করবে, হাতের কাছে যা আছে তা কাজে লাগাবে। বদলায় শুধু এটুকু যে কাজ করার সময় হৃদয়টা কার উপর ভর দিয়ে আছে।"
          },
          {
            "en": "As-Sa'di names the range of the command: worship Him and rely on Him in the matters that concern you and in the matters that concern creation, al-umur al-muta'alliqa bika wa-l-muta'alliqa bi-l-khalq. For a messenger the second half is the people he calls, whose response is not in his hands. Ibn Kathir's fi umurika kulliha reaches the same breadth in fewer words. Between them the two leave no corner of a life outside the command, whether a person's own affairs or his dealings with others.",
            "bn": "সা'দী আদেশটির পরিধি বলে দেন: তাঁর ইবাদত করুন আর তাঁর উপর ভরসা করুন, যেসব বিষয় আপনার নিজের সঙ্গে জড়িত তাতে, আর যেসব বিষয় সৃষ্টির সঙ্গে জড়িত তাতেও। একজন রাসূলের বেলায় দ্বিতীয় অংশটি হলো সেই মানুষেরা, যাদের তিনি ডাকছেন, অথচ তাদের সাড়া দেওয়া না দেওয়া তাঁর হাতে নেই। ইবন কাসীরের ফী উমূরিকা কুল্লিহা কথাটি অল্প কথায় একই বিস্তার ধরে রাখে। দুজনের কথা মিলিয়ে দেখলে জীবনের কোনো কোণ এ আদেশের বাইরে থাকে না, তা নিজের কাজ হোক কিংবা অন্যের সঙ্গে লেনদেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Tasbih Paired With Hamd",
          "bn": "তাসবীহের সঙ্গে হামদ"
        },
        "p": [
          {
            "en": "Wa sabbih bi-hamdih: and glorify Him with His praise. Ibn Kathir's gloss is brief: join His praise to His glorification, iqrin bayna hamdihi wa tasbihihi. That is why, he says, the Messenger of Allah ﷺ used to say: Subhanaka Allahumma rabbana wa bi-hamdik, glory be to You, O Allah our Lord, and with Your praise. He gives the words without naming a collection, as the plainest example of the two joined in a single breath.",
            "bn": "ওয়া সাব্বিহ বিহামদিহী: আর তাঁর প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করুন। ইবন কাসীরের ব্যাখ্যা সংক্ষিপ্ত: তাঁর হামদ আর তাসবীহকে একসঙ্গে জুড়ে দিন, ইকরিন বাইনা হামদিহী ওয়া তাসবীহিহী। তিনি বলেন, এ কারণেই রাসূলুল্লাহ ﷺ বলতেন: সুবহানাকা আল্লাহুম্মা রাব্বানা ওয়া বিহামদিক, হে আল্লাহ, আমাদের রব, আপনি পবিত্র, আর আপনার প্রশংসাসহ। কোনো হাদীসগ্রন্থের নাম না নিয়েই তিনি বাক্যটি আনেন, এক নিঃশ্বাসে দুটিকে জুড়ে দেওয়ার সবচেয়ে সহজ নমুনা হিসেবে।"
          },
          {
            "en": "Al-Bukhari records the words in his Sahih (794, Dar-us-Salam numbering) from 'A'isha (RA): the Prophet ﷺ used to say in his bowing and his prostrations, Subhanaka-llahumma rabbana wa bi-hamdika, Allahumma-ghfir li: glory be to You, O Allah our Lord, and with Your praise; O Allah, forgive me. Ibn Kathir quotes only the first half; the collection's wording carries the request for forgiveness as well. No fetched tafsir attaches any other hadith to this verse, on tasbih or on reliance.",
            "bn": "বুখারী তাঁর সহীহ গ্রন্থে (দারুস সালাম নম্বর ৭৯৪) 'আয়িশা (রাঃ) থেকে বাক্যটি বর্ণনা করেছেন: নবী ﷺ তাঁর রুকূ ও সিজদায় বলতেন, সুবহানাকাল্লাহুম্মা রাব্বানা ওয়া বিহামদিকা, আল্লাহুম্মাগফির লী: হে আল্লাহ, আমাদের রব, আপনি পবিত্র, আর আপনার প্রশংসাসহ। হে আল্লাহ, আমাকে মাফ করুন। ইবন কাসীর কেবল প্রথম অর্ধেকটা উদ্ধৃত করেছেন। হাদীসগ্রন্থের পূর্ণ বাক্যে ক্ষমা চাওয়ার অংশটিও আছে। তাসবীহ বা ভরসা নিয়ে আর কোনো হাদীস সংগ্রহ করা কোনো তাফসীর এ আয়াতের সঙ্গে জুড়ে দেয়নি।"
          },
          {
            "en": "Ibn Kathir then states the sense of the whole: be sincere to Him in worship and in reliance, akhlis lahu al-'ibadata wa-t-tawakkul. He cites three verses that set the two side by side. 73:9: the Lord of the east and the west, there is no god but He, so take Him as Guardian. 11:123: so worship Him and rely upon Him. 67:29: say, He is the Most Merciful; we believe in Him, and upon Him we rely. In each, worship and reliance are placed together, the same pairing this verse makes.",
            "bn": "এরপর ইবন কাসীর পুরো কথাটির মর্ম বলে দেন: ইবাদতে আর ভরসায় তাঁর জন্য একনিষ্ঠ হোন, আখলিস লাহুল 'ইবাদাতা ওয়াত তাওয়াক্কুল। দুটিকে পাশাপাশি রাখে এমন তিনটি আয়াত তিনি উল্লেখ করেন। ৭৩:৯: তিনি পূর্ব ও পশ্চিমের রব, তিনি ছাড়া কোনো ইলাহ নেই, অতএব তাঁকেই অভিভাবক বানিয়ে নিন। ১১:১২৩: অতএব তাঁর ইবাদত করুন আর তাঁর উপর ভরসা করুন। ৬৭:২৯: বলুন, তিনিই রহমান, আমরা তাঁর উপর ঈমান এনেছি আর তাঁর উপরই ভরসা করেছি। প্রতিটি আয়াতে ইবাদত আর ভরসা একসঙ্গে এসেছে, ঠিক যে জোড়া এ আয়াতও বেঁধেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer, Thanks, or Words",
          "bn": "নামায, শোকর, নাকি মুখের কথা"
        },
        "p": [
          {
            "en": "The commentators differ over what sabbih asks for. At-Tabari: worship Him in gratitude for what He has blessed you with. Al-Baghawi: pray to Him in thanks for His blessings, and then, introduced with it is said, qila: say subhana-llah and al-hamdu li-llah. Al-Qurtubi first takes it as tanzih: declare Allah free of what these disbelievers ascribe to Him by way of partners. Then, also with qila, he gives a second reading: pray to Him, since the prayer is called tasbih.",
            "bn": "সাব্বিহ শব্দটি আসলে কী চায়, তা নিয়ে তাফসীরকারদের মত আলাদা। তাবারী বলেন, তিনি আপনাকে যে নিয়ামত দিয়েছেন তার শোকর হিসেবে তাঁর ইবাদত করুন। বাগাভী বলেন, তাঁর নিয়ামতের শোকরস্বরূপ তাঁর জন্য নামায পড়ুন। তারপর 'বলা হয়' (কীলা) বলে আরেকটি মত আনেন: সুবহানাল্লাহ ও আলহামদু লিল্লাহ বলুন। কুরতুবী প্রথমে একে তানযীহ ধরেন: এই কাফিররা আল্লাহর সঙ্গে যে শরীক জুড়ে দেয়, তা থেকে তাঁকে মুক্ত ঘোষণা করুন। এরপর তিনিও 'কীলা' বলে দ্বিতীয় মত দেন: তাঁর জন্য নামায পড়ুন, কারণ নামাযকেও তাসবীহ বলা হয়।"
          },
          {
            "en": "The Muyassar keeps to tanzih in general terms: declare Him free of every attribute of deficiency. As-Sa'di folds the clause into the command around it: worship Him and rely on Him. So the readings run from worship in general (at-Tabari, as-Sa'di), to the ritual prayer (al-Baghawi's first reading, al-Qurtubi's second), to a declaration against the partners named in this passage (al-Qurtubi's first), to the spoken words themselves (al-Baghawi's second). The article keeps all of them and ranks none.",
            "bn": "মুয়াসসার তানযীহকেই সাধারণভাবে বলে: সব ধরনের ত্রুটির গুণ থেকে তাঁকে পবিত্র ঘোষণা করুন। সা'দী অংশটিকে আশপাশের আদেশের মধ্যেই মিলিয়ে নেন: তাঁর ইবাদত করুন, তাঁর উপর ভরসা করুন। ফলে মতগুলো ছড়িয়ে আছে কয়েক দিকে। কারও মতে সাধারণ ইবাদত (তাবারী, সা'দী)। কারও মতে নামায (বাগাভীর প্রথম মত, কুরতুবীর দ্বিতীয় মত)। কারও মতে এই আলোচনায় যে শরীকদের কথা এসেছে তাদের অস্বীকার করা (কুরতুবীর প্রথম মত)। আবার কারও মতে মুখে উচ্চারিত বাক্য দুটি (বাগাভীর দ্বিতীয় মত)। এ লেখা সবগুলো মত রেখে দিচ্ছে, কোনোটিকে অগ্রাধিকার দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Enough as the One Who Knows",
          "bn": "জানার জন্য তিনিই যথেষ্ট"
        },
        "p": [
          {
            "en": "Wa kafa bihi bi-dhunubi 'ibadihi khabira: and sufficient is He as aware of the sins of His servants. At-Tabari keeps addressing the Prophet ﷺ: sufficient for you, hasbuka, is the Living who does not die as knower of the sins of His creation. None of them is hidden from Him, he says, and He counts each of them against them until He requites them for it on the Day of Resurrection.",
            "bn": "ওয়া কাফা বিহী বিযুনূবি 'ইবাদিহী খাবীরা: আর তাঁর বান্দাদের গুনাহের খবর রাখার জন্য তিনিই যথেষ্ট। তাবারী এখানেও নবী ﷺ-কে সম্বোধন করেই বলেন: হাসবুকা, আপনার জন্য যথেষ্ট সেই চিরঞ্জীব, যিনি মরেন না, তাঁর সৃষ্টির গুনাহ সম্পর্কে অবগত হিসেবে। তিনি বলেন, এর কোনোটিই তাঁর কাছে গোপন নয়। তিনি প্রতিটি গুনাহ গুনে গুনে তাদের নামে লিখে রাখেন, যতক্ষণ না কিয়ামতের দিন সেগুলোর প্রতিফল দেন।"
          },
          {
            "en": "Ibn Kathir grounds the clause in His complete knowledge, from which nothing hidden is concealed and from which not even the weight of a speck of dust escapes, la ya'zubu 'anhu mithqalu dharra. Al-Qurtubi and al-Baghawi gloss khabir as 'alim, knowing, and add that He will requite them for their sins. As-Sa'di: He knows them and requites them. The Muyassar: He will hold them to account and requite them. Of the six Arabic commentaries, all but Ibn Kathir tie His knowing of the sins to their requital.",
            "bn": "ইবন কাসীর অংশটির ভিত্তি রাখেন আল্লাহর পূর্ণ জ্ঞানের উপর। কোনো গোপন বিষয় তাঁর কাছে গোপন থাকে না, এমনকি ধূলিকণা পরিমাণ কিছুও তাঁর জ্ঞানের বাইরে যায় না: লা ইয়া'যুবু 'আনহু মিসকালু যাররা। কুরতুবী ও বাগাভী খাবীর শব্দের অর্থ করেন 'আলীম, অর্থাৎ জ্ঞানী, আর যোগ করেন যে তিনি তাদের গুনাহের প্রতিফল দেবেন। সা'দী বলেন, তিনি সেগুলো জানেন এবং প্রতিফল দেন। মুয়াসসার বলে, তিনি তাদের হিসাব নেবেন এবং প্রতিফল দেবেন। ছয়টি আরবি তাফসীরের মধ্যে ইবন কাসীর ছাড়া বাকি সবাই গুনাহ জানার কথার সঙ্গে প্রতিফলের কথা জুড়ে দেন।"
          },
          {
            "en": "No fetched commentator calls the clause a consolation. Yet at-Tabari's hasbuka, said to him whom 25:56 calls only a bearer of good tidings and a warner, leaves the reckoning of those who turn away where the verse places it: with Him. The messenger's task is to convey; the record of sins is kept by Him who does not die. The word is also 'ibadihi, His servants, which leaves no reader outside it. The clause that lifts the reckoning of others from your hands also names your own sins as known.",
            "bn": "সংগ্রহ করা কোনো তাফসীর এ অংশকে সান্ত্বনা বলে উল্লেখ করেনি। তবু তাবারীর হাসবুকা কথাটি বলা হয়েছে তাঁকে, যাঁকে ২৫:৫৬ আয়াত কেবল সুসংবাদদাতা ও সতর্ককারী বলেছে। ফলে যারা মুখ ফিরিয়ে নেয় তাদের হিসাব থেকে যায় সেখানেই, যেখানে আয়াত তা রেখেছে: আল্লাহর কাছে। রাসূলের কাজ পৌঁছে দেওয়া। গুনাহের খাতা রাখেন তিনি, যিনি মরেন না। শব্দটি আবার 'ইবাদিহী, তাঁর বান্দারা, যার বাইরে কোনো পাঠক নেই। যে কথা অন্যের হিসাব আপনার হাত থেকে সরিয়ে নেয়, সেই কথাই মনে করিয়ে দেয় যে আপনার নিজের গুনাহও তাঁর জানা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Living Named Again",
          "bn": "চিরঞ্জীবের পরিচয় আবার"
        },
        "p": [
          {
            "en": "The next verse, 25:59, continues the description: He who created the heavens and the earth and what is between them in six days, then rose over the Throne; the Most Merciful, so ask about Him whoever is well informed. Ibn Kathir links the two: He is the Ever-Living who never dies, the Creator, Sustainer and Sovereign of all things. On fas'al bihi khabira he says: find out about Him from whoever knows most about Him, and no one knows more about Allah than His Messenger Muhammad ﷺ. From 25:63 the surah turns to the servants of the Most Merciful.",
            "bn": "পরের আয়াত ২৫:৫৯ বর্ণনাটি এগিয়ে নেয়: তিনি আসমান, যমীন ও এ দুয়ের মাঝের সবকিছু ছয়টি দিনে সৃষ্টি করেছেন, তারপর আরশে সমুন্নত হয়েছেন। তিনিই রহমান, তাঁর সম্পর্কে জিজ্ঞেস করুন তাকে, যে ভালোভাবে জানে। ইবন কাসীর দুই আয়াতকে জুড়ে দেন: তিনিই সেই চিরঞ্জীব যিনি কখনো মরবেন না, তিনিই সবকিছুর স্রষ্টা, রিযিকদাতা ও মালিক। ফাসআল বিহী খাবীরা সম্পর্কে তিনি বলেন, তাঁর সম্পর্কে জেনে নিন তাঁর কাছ থেকে, যিনি তাঁকে সবচেয়ে বেশি জানেন। আর আল্লাহকে তাঁর রাসূল মুহাম্মাদ ﷺ-এর চেয়ে বেশি কেউ জানে না। ২৫:৬৩ থেকে সূরাটি রহমানের বান্দাদের কথায় চলে যায়।"
          },
          {
            "en": "The verse leaves three things to carry. Lean on the One who remains, and take the means without leaning on them, as al-Qurtubi puts it. Keep tasbih and hamd together on the tongue, in the words the Prophet ﷺ used in his bowing and prostration. And leave other people's reckoning to the One who knows it, while remembering that one's own sins are known too. An ordinary week tests all three: where the weight goes when a plan fails, what is said when it does, and whose account one is busy keeping.",
            "bn": "আয়াতটি সঙ্গে নেওয়ার মতো তিনটি কথা রেখে যায়। ভরসা রাখুন তাঁর উপর, যিনি থেকে যান। উপকরণ গ্রহণ করুন, কিন্তু সেগুলোর উপর ভর দেবেন না, যেমনটি কুরতুবী বলেছেন। তাসবীহ আর হামদ একসঙ্গে মুখে রাখুন, সেই বাক্যে যা নবী ﷺ রুকূ ও সিজদায় বলতেন। আর অন্যের হিসাব ছেড়ে দিন তাঁর হাতে, যিনি তা জানেন। সঙ্গে মনে রাখুন, আপনার নিজের গুনাহও তাঁর জানা। সাধারণ একটা সপ্তাহই তিনটিকে যাচাই করে নেয়। পরিকল্পনা ভেস্তে গেলে ভর কোথায় যায়, তখন মুখ দিয়ে কী বের হয়, আর আপনি আসলে কার হিসাব রাখতে ব্যস্ত।"
          }
        ]
      }
    ]
  },
  "25:63": {
    "sections": [
      {
        "h": {
          "en": "A Title Bound to Mercy",
          "bn": "রহমানের নামে পরিচয়"
        },
        "p": [
          {
            "en": "Wa-'ibadu r-Rahman: and the servants of the Most Merciful. Al-Qurtubi places the verse: having told of the polytheists' ignorance and their attacks on the Qur'an and on prophethood, the surah now names Allah's believing servants and their qualities. He attaches them to His servanthood as an honour, as in 17:1. Whoever obeys Allah and fills his hearing, sight, tongue and heart with His command deserves the name; whoever does the opposite falls under 7:179, like cattle, rather more astray.",
            "bn": "ওয়া ইবাদুর রহমান: আর রহমানের বান্দারা। কুরতুবী আয়াতটির জায়গা চিনিয়ে দেন। মুশরিকদের মূর্খতা এবং কুরআন ও নবুওয়াতের বিরুদ্ধে তাদের খোঁচার কথা শেষ করে সূরাটি এবার আল্লাহর মুমিন বান্দাদের নাম নেয়, তুলে ধরে তাঁদের গুণাবলি। কুরতুবীর মতে আল্লাহ তাঁদের নিজের বান্দা বলে সম্বোধন করেছেন সম্মান দিতে, যেমন ১৭:১ আয়াতে। যে আল্লাহর আনুগত্য করে, নিজের কান, চোখ, জিহ্বা আর অন্তরকে তাঁর হুকুমে ব্যস্ত রাখে, এই নাম তারই প্রাপ্য। যে এর উল্টো চলে, সে পড়ে ৭:১৭৯ আয়াতের আওতায়: চতুষ্পদ জন্তুর মতো, বরং তার চেয়েও বেশি পথভ্রষ্ট।"
          },
          {
            "en": "As-Sa'di distinguishes two servanthoods. One is to Allah's lordship, shared by all creation, believer and disbeliever, righteous and wicked, and he cites 19:93: none in the heavens and the earth but comes to the Most Merciful as a servant. The other is servanthood of worship and of His mercy, belonging to His prophets and friends, and that is the one meant here. Al-Baghawi agrees in brief: the best of servants, the annexation marking them out, since all creatures are Allah's servants.",
            "bn": "সা'দী বান্দা হওয়াকে দুই ভাগে ভাগ করেন। একটি হলো আল্লাহর রুবুবিয়্যাতের বান্দা হওয়া। এতে গোটা সৃষ্টি শরিক: মুসলিম-কাফির, নেককার-বদকার সবাই। প্রমাণ হিসেবে তিনি আনেন ১৯:৯৩ আয়াত: আসমান ও যমীনে এমন কেউ নেই, যে রহমানের কাছে বান্দা হয়ে আসবে না। অন্যটি ইবাদত আর তাঁর রহমতের বান্দা হওয়া, যা নবী ও আল্লাহর প্রিয়জনদের বৈশিষ্ট্য। এখানে এটাই উদ্দেশ্য। বাগাভী সংক্ষেপে একই কথা বলেন: এরা শ্রেষ্ঠ বান্দা। সব সৃষ্টিই তো আল্লাহর বান্দা, তাই 'রহমানের' সঙ্গে জুড়ে দেওয়া হয়েছে এদের আলাদা করে চেনাতে।"
          },
          {
            "en": "Why ar-Rahman? As-Sa'di says the name signals that they reached this state through His mercy. Ma'arif al-Qur'an offers, with a perhaps, the hint that servants of the All-Merciful should show mercy in their own conduct. On the grammar, al-Qurtubi reports al-Akhfash taking alladhina as the predicate of an implied they are, and az-Zajjaj allowing the predicate to come at the surah's end, in 25:75. On that reading the whole passage to 25:75 is one sentence about one people.",
            "bn": "রহমান নামটিই কেন? সা'দী বলেন, এ নাম ইঙ্গিত দেয় যে তাঁরা এই অবস্থায় পৌঁছেছেন তাঁর রহমতের বদৌলতে। মাআরিফুল কুরআন 'সম্ভবত' বলে একটি ইশারা দেয়: পরম দয়ালুর বান্দারা নিজেদের আচরণেও দয়া ফুটিয়ে তুলবে। ব্যাকরণের প্রশ্নে কুরতুবী দুটি মত জানান। আখফাশের মতে আল্লাযীনা শব্দটি উহ্য 'তারাই' কথাটির বিধেয়। যাজ্জাজ এটাও সম্ভব মনে করেন যে বিধেয় এসেছে সূরার শেষে, ২৫:৭৫ আয়াতে। সে পাঠে ২৫:৭৫ পর্যন্ত গোটা অংশটি একই মানুষদের নিয়ে একটিমাত্র বাক্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking Stands for Living",
          "bn": "হাঁটা মানে গোটা জীবন"
        },
        "p": [
          {
            "en": "Alladhina yamshuna 'ala l-ardi hawnan: who walk upon the earth hawnan. Al-Qurtubi reads yamshuna as an expression for their living, the span of their lives and their dealings. Walking is named because it is the greater part of that, above all since it means moving about the earth, which is to say keeping company with people and mixing with them. The first quality in the portrait, then, is a quality that shows among others.",
            "bn": "আল্লাযীনা ইয়ামশূনা আলাল আরদি হাওনা: যারা যমীনে চলে হাওনভাবে। কুরতুবীর মতে ইয়ামশূনা, অর্থাৎ তারা চলে, কথাটি দিয়ে বোঝানো হয়েছে তাদের জীবনযাপন, আয়ুষ্কাল আর লেনদেন। হাঁটার কথা আলাদা করে এসেছে, কারণ জীবনের বড় অংশ এটাই। তার উপর হাঁটা মানে যমীনে এদিক-ওদিক যাওয়া, আর সেটা মানুষের সঙ্গে ওঠাবসা ও মেলামেশা। ফলে এই ছবির প্রথম গুণটিই এমন, যা ধরা পড়ে অন্যদের মাঝে।"
          },
          {
            "en": "Hawn, al-Qurtubi says, is the verbal noun of hayyin, easy, and belongs to calm and dignity; al-Baghawi gives its sense in the language as gentleness and softness. Ibn Kathir: with calm and dignity, without tyranny or arrogance, and he sets beside it 17:37, do not walk on the earth exultantly. Al-Qurtubi cites the same command as it closes in 31:18: Allah does not love every self-admiring boaster.",
            "bn": "কুরতুবী বলেন, হাওন শব্দটি হাইয়িন, অর্থাৎ সহজ, থেকে আসা ক্রিয়াবাচক বিশেষ্য, আর এর সম্পর্ক প্রশান্তি ও গাম্ভীর্যের সঙ্গে। বাগাভী জানান, ভাষায় এর অর্থ কোমলতা ও নম্রতা। ইবন কাসীরের ব্যাখ্যা: প্রশান্তি ও গাম্ভীর্য নিয়ে, জবরদস্তি বা অহংকার ছাড়া। পাশে তিনি রাখেন ১৭:৩৭ আয়াত: যমীনে দম্ভভরে চলো না। কুরতুবী একই নিষেধ আনেন ৩১:১৮ আয়াত থেকে, যার শেষ কথা: আল্লাহ কোনো দাম্ভিক অহংকারীকে ভালোবাসেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Readings of Hawn",
          "bn": "হাওনের তিন ব্যাখ্যা"
        },
        "p": [
          {
            "en": "At-Tabari gives his own sense first: with forbearance, calm and dignity, not arrogant, not tyrannical, not going about the land in corruption and disobedience to Allah. The interpreters, he says, broadly agreed but differed in emphasis. Some said calm and dignity: he cites this from Mujahid through several chains, from Sa'id and 'Abd ar-Rahman together, from 'Ikrima and from 'Amr al-Mula'i. One chain from Mujahid has forbearance and dignity.",
            "bn": "তাবারী আগে নিজের ব্যাখ্যা দেন: সহনশীলতা, প্রশান্তি ও গাম্ভীর্য নিয়ে চলা। অহংকার নেই, জবরদস্তি নেই, যমীনে ফাসাদ আর আল্লাহর নাফরমানি করে বেড়ানো নেই। তিনি জানান, তাফসীরকারেরা মোটের উপর একমত, তবে জোর দিয়েছেন ভিন্ন জায়গায়। কারও মতে এর অর্থ প্রশান্তি ও গাম্ভীর্য। এ মত তিনি এনেছেন মুজাহিদ থেকে কয়েকটি সূত্রে, সাঈদ ও আবদুর রহমান থেকে একসঙ্গে, ইকরিমা থেকে এবং আমর আল-মুলাঈ থেকে। মুজাহিদের একটি সূত্রে আছে সহনশীলতা ও গাম্ভীর্য।"
          },
          {
            "en": "Others said obedience and humility. Ibn 'Abbas, through 'Ali ibn Abi Talha: with obedience, chastity and humility; through another chain, with obedience. Zayd ibn Aslam said he sought the verse's meaning and found it with no one, until he was told in a dream: those who do not want to cause corruption on earth. Ibn Zayd: they neither lord it over people nor act as tyrants nor corrupt, and he recited 28:83.",
            "bn": "অন্যদের মতে এর অর্থ আনুগত্য ও বিনয়। আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) বলেন: আনুগত্য, পবিত্রতা ও বিনয় নিয়ে। আরেক সূত্রে শুধু আনুগত্যের কথা। যায়দ ইবন আসলাম বলেন, আয়াতটির ব্যাখ্যা তিনি খুঁজেছিলেন, কারও কাছে পাননি। শেষে স্বপ্নে তাঁকে বলা হলো: এরা তারা, যারা যমীনে ফাসাদ ঘটাতে চায় না। ইবন যায়দ বলেন: তারা মানুষের উপর বড়াই করে না, জুলুম করে না, ফাসাদও ছড়ায় না। এ কথা বলে তিনি তিলাওয়াত করেন ২৮:৮৩ আয়াত।"
          },
          {
            "en": "A third group read it as forbearance. Al-Hasan: forbearing, and if treated ignorantly they do not act ignorantly; 'Ikrima: forbearing; al-Hasan again, through Ma'mar: learned and forbearing. Al-Baghawi adds Muhammad ibn al-Hanafiyya: people of dignity and chastity who do not act foolishly, and are forbearing when others do. Al-Qurtubi calls all these meanings close to each other, gathered by knowledge of Allah and fear of Him.",
            "bn": "তৃতীয় দলের মতে এর অর্থ সহনশীলতা। হাসান বসরী বলেন: তারা সহনশীল, কেউ তাদের সঙ্গে মূর্খের মতো আচরণ করলে তারা পাল্টা মূর্খতা করে না। ইকরিমা বলেন: সহনশীল। মা'মারের সূত্রে হাসান বলেন: জ্ঞানী ও সহনশীল। বাগাভী যোগ করেন মুহাম্মাদ ইবনুল হানাফিয়্যার কথা: তারা গাম্ভীর্য ও সংযমের মানুষ, নির্বোধের মতো আচরণ করে না, আর কেউ তা করলে ধৈর্য ধরে। কুরতুবী বলেন, এসব অর্থ একে অপরের কাছাকাছি। সবগুলোকে এক করে আল্লাহকে জানা আর তাঁকে ভয় করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Shuffle of the Sick",
          "bn": "রোগীর মতো ধুঁকে চলা নয়"
        },
        "p": [
          {
            "en": "Ibn Kathir closes off a misreading. The verse does not mean walking like the sick, an affected slowness put on for show, for the master of the children of Adam ﷺ walked as though descending a slope, as though the earth were folded up for him. Some of the early generations, he says, disliked a feeble, affected walk, and it is reported that 'Umar saw a young man walking slowly and asked whether he was ill.",
            "bn": "ইবন কাসীর একটি ভুল বোঝাবুঝির পথ বন্ধ করে দেন। আয়াতের অর্থ রোগীর মতো হাঁটা নয়, লোক দেখানোর জন্য বানানো ধীরগতিও নয়। আদম সন্তানদের সরদার ﷺ হাঁটতেন যেন ঢালু পথ বেয়ে নামছেন, যেন যমীন তাঁর জন্য গুটিয়ে আসছে। ইবন কাসীর জানান, পূর্বসূরিদের কেউ কেউ দুর্বলতার ভান করে কৃত্রিমভাবে হাঁটা অপছন্দ করতেন। বর্ণিত আছে, উমর (রাঃ) এক যুবককে খুব ধীরে হাঁটতে দেখে জিজ্ঞেস করেছিলেন, সে অসুস্থ কি না।"
          },
          {
            "en": "When the youth said no, Ibn Kathir reports, 'Umar took his whip to him and told him to walk with strength. Ma'arif al-Qur'an carries the same report and draws the rule: hawn here means humility, modesty and decorum, not a very slow walk, which goes against the Sunnah when there is no need for it. The elders, it says, counted the put-on gait of a sick man as a sham and disliked it.",
            "bn": "ইবন কাসীরের বর্ণনায়, যুবক 'না' বলার পর উমর (রাঃ) তার দিকে চাবুক তোলেন এবং শক্তি নিয়ে হাঁটতে বলেন। মাআরিফুল কুরআনও ঘটনাটি এনেছে এবং তা থেকে একটি নিয়ম টেনেছে। এখানে হাওন মানে বিনয়, শালীনতা ও ভদ্রতা। অতি ধীরে হাঁটা এর অর্থ নয়, বরং প্রয়োজন ছাড়া তেমন হাঁটা সুন্নাহর পরিপন্থী। মাআরিফ জানায়, পূর্বসূরিরা রোগীর মতো বানানো চালকে ভান বলে গণ্য করতেন এবং অপছন্দ করতেন।"
          },
          {
            "en": "Al-Qurtubi, quoting Ibn 'Atiyya, presses the point. A faction tied hawn to the walk itself; to take it as describing the gait alone is false, Ibn 'Atiyya says, for many a man walks softly and slowly and is a grey wolf. Al-Qurtubi adds a poet's line against pretenders to religion: all of them walk slowly, all of them hunting prey. For Ibn 'Atiyya, the walker's character should be hawn, matching his gait.",
            "bn": "কুরতুবী ইবন আতিয়্যার উদ্ধৃতি দিয়ে কথাটা আরও স্পষ্ট করেন। একটি দল হাওনকে শুধু হাঁটার ধরনের সঙ্গে বেঁধেছিল। ইবন আতিয়্যা বলেন, একে কেবল চলার ভঙ্গি ধরা ভুল। কত মানুষ নরম পায়ে ধীরে হাঁটে, অথচ ভেতরে সে ধূসর নেকড়ে! ধর্মের ভেক ধরা লোকদের নিন্দায় এক কবির পঙক্তিও কুরতুবী আনেন: সবাই হাঁটে ধীরে ধীরে, সবাই খোঁজে শিকার। ইবন আতিয়্যার মতে আসল কথা হলো, পথিকের চরিত্রও হবে হাওন, তার চলার মতোই।"
          },
          {
            "en": "The opposite fault is named too. Al-Qurtubi cites az-Zuhri, that fast walking takes away the radiance of the face, and Ibn 'Atiyya's comment that az-Zuhri meant hard rushing, since it spoils dignity, and that the good lies in the middle. 'Umar himself, al-Qurtubi notes, walked quickly by nature and not by affectation. Calm, on these readings, is a matter of the self before it is a matter of the feet.",
            "bn": "উল্টো দিকের দোষের কথাও আছে। কুরতুবী যুহরীর কথা আনেন: দ্রুত হাঁটা চেহারার উজ্জ্বলতা কেড়ে নেয়। ইবন আতিয়্যা এর ব্যাখ্যায় বলেন, যুহরী বুঝিয়েছেন হুড়মুড় করে ছোটা, কারণ তাতে গাম্ভীর্য নষ্ট হয়। ভালো থাকে মাঝামাঝিতে। কুরতুবী আরও জানান, উমর (রাঃ) নিজে দ্রুত হাঁটতেন স্বভাবগতভাবে, কৃত্রিমভাবে নয়। এসব ব্যাখ্যায় প্রশান্তি আগে মনের ব্যাপার, পায়ের ব্যাপার পরে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Prophet Walked",
          "bn": "নবী ﷺ-এর হাঁটার ধরন"
        },
        "p": [
          {
            "en": "No narration in the fetched tafsirs is attached to this verse as the occasion of its revelation. Both phrases Ibn Kathir uses for the Prophet's ﷺ walk appear in at-Tirmidhi. Abu Hurayrah said (3648): \"I have not seen anything more beautiful than the Messenger of Allah (ﷺ). It was as if the sun flowed upon his face. And I have not seen anyone quicker in his walking than the Messenger of Allah (ﷺ). It was as if the earth was made easy for him. We would be exerting ourselves while he would not be struggling.\" At-Tirmidhi grades it gharib.",
            "bn": "সংগৃহীত তাফসীরগুলোতে এ আয়াতের শানে নুযূল হিসেবে কোনো বর্ণনা যুক্ত নেই। নবী ﷺ-এর হাঁটা বোঝাতে ইবন কাসীর যে দুটি উপমা ব্যবহার করেছেন, দুটিই তিরমিযীতে আছে। আবু হুরায়রা (রাঃ) বলেন (৩৬৪৮): \"আল্লাহর রাসূল ﷺ-এর চেয়ে সুন্দর কিছু আমি দেখিনি। মনে হতো যেন সূর্য তাঁর চেহারায় বয়ে চলেছে। আর আল্লাহর রাসূল ﷺ-এর চেয়ে দ্রুত হাঁটতে আমি কাউকে দেখিনি। মনে হতো যেন যমীন তাঁর জন্য সহজ করে দেওয়া হয়েছে। আমরা প্রাণপণ চেষ্টা করতাম, অথচ তাঁর কোনো কষ্টই হতো না।\" তিরমিযী একে গরীব বলেছেন।"
          },
          {
            "en": "The other phrase comes from 'Ali, inside a longer description of the Prophet's ﷺ appearance that at-Tirmidhi grades hasan sahih (3637): \"whenever he walked, he leaned forward as if he was going down a decline.\" Ibn Kathir then defines hawn itself by a saying on coming to prayer, which al-Bukhari records from Abu Hurayrah (908): \"If the prayer is started do not run for it but just walk for it calmly and pray whatever you get, and complete whatever is missed.\" These are general narrations, not attached to this verse.",
            "bn": "অন্য উপমাটি এসেছে আলী (রাঃ) থেকে, নবী ﷺ-এর চেহারা-গড়নের একটি দীর্ঘ বর্ণনার ভেতরে। তিরমিযী একে হাসান সহীহ বলেছেন (৩৬৩৭): \"তিনি যখন হাঁটতেন, সামনের দিকে ঝুঁকে হাঁটতেন, যেন ঢালু পথ বেয়ে নামছেন।\" এরপর ইবন কাসীর হাওন শব্দটিরই সংজ্ঞা দেন নামাযে আসা নিয়ে একটি হাদীস দিয়ে। বুখারী সেটি এনেছেন আবু হুরায়রা (রাঃ) থেকে (৯০৮): \"নামায শুরু হয়ে গেলে তার জন্য দৌড়ে এসো না, বরং শান্তভাবে হেঁটে এসো। যতটুকু পাও আদায় করো, আর যা ছুটে গেছে তা পূর্ণ করে নাও।\" এগুলো সাধারণ বর্ণনা, এ আয়াতের সঙ্গে যুক্ত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Hasan on the Humbled",
          "bn": "হাসান বসরীর চোখে বিনয়ী"
        },
        "p": [
          {
            "en": "Al-Hasan al-Basri's description, which at-Tabari and Ibn Kathir both carry through Ibn al-Mubarak, is the fullest portrait in the sources. The believers, he said, are a humbled people: by Allah, their hearing, sight and limbs are humbled, until one would think them sick, though they are healthy; in at-Tabari's wording, until the ignorant one thinks them sick, and they are healthy of heart. Fear has entered them as it has entered no one else.",
            "bn": "হাসান বসরীর একটি বর্ণনা তাবারী ও ইবন কাসীর দুজনেই এনেছেন ইবনুল মুবারকের সূত্রে। সূত্রগুলোর মধ্যে এটাই এই মানুষদের সবচেয়ে পূর্ণ ছবি। তিনি বলেন, মুমিনরা বিনয়ে নত এক দল। আল্লাহর কসম, তাদের কান, চোখ আর অঙ্গপ্রত্যঙ্গ নত হয়ে থাকে। দেখে মনে হয় তারা অসুস্থ, অথচ তারা সুস্থ। তাবারীর ভাষ্যে: মূর্খ লোক তাদের রোগী ভাবে, অথচ তাদের অন্তর সুস্থ। আসলে তাদের ভেতরে এমন ভয় ঢুকেছে, যা আর কারও ভেতরে ঢোকেনি।"
          },
          {
            "en": "Their knowledge of the Hereafter held them back from the world, al-Hasan went on, and so they said, in the words of 35:34, praise be to Allah who has removed grief from us. Nothing they did to seek Paradise seemed great to them; fear of the Fire made them weep. At-Tabari files this under the verse's second half, Ibn Kathir under its first. Al-Hasan called this their day, and al-Baghawi has him then reciting 25:64 as their night.",
            "bn": "হাসান আরও বলেন, আখিরাতের জ্ঞান তাদের দুনিয়া থেকে ফিরিয়ে রেখেছে। তাই তারা বলেছে ৩৫:৩৪ আয়াতের ভাষায়: সব প্রশংসা আল্লাহর, যিনি আমাদের থেকে দুঃখ দূর করেছেন। জান্নাত পেতে যা করেছে, তার কিছুই তাদের চোখে বড় মনে হয়নি। জাহান্নামের ভয় তাদের কাঁদিয়েছে। তাবারী কথাটি রেখেছেন আয়াতের দ্বিতীয় অংশের অধীনে, ইবন কাসীর প্রথম অংশের অধীনে। হাসান একে বলেছেন তাদের দিনের বর্ণনা। বাগাভীর বর্ণনায় এরপর তিনি ২৫:৬৪ আয়াত পড়ে বলেন, এ তাদের রাতের বর্ণনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Jahilun Are",
          "bn": "জাহিলুন কারা"
        },
        "p": [
          {
            "en": "Wa idha khatabahumu l-jahiluna: and when the jahilun address them. At-Tabari: those ignorant of Allah, speaking to them in words they dislike. Ibn Kathir: when the ignorant behave foolishly toward them with evil. Al-Baghawi: the foolish, with what they dislike; al-Muyassar: the ignorant and foolish, with harm. As-Sa'di reads it from the grammar as an address of ignorance. Ma'arif al-Qur'an says the word covers anyone who behaves as the ignorant do, even a learned man.",
            "bn": "ওয়া ইযা খাতাবাহুমুল জাহিলূন: আর জাহিলরা যখন তাদের সম্বোধন করে। তাবারীর ব্যাখ্যা: আল্লাহ সম্পর্কে অজ্ঞ লোকেরা, যারা তাদের এমন কথা বলে যা তারা অপছন্দ করে। ইবন কাসীর বলেন: মূর্খরা যখন তাদের সঙ্গে মন্দ কথায় বেয়াদবি করে। বাগাভীর মতে নির্বোধরা, অপ্রিয় কথা দিয়ে; মুয়াসসারের মতে অজ্ঞ ও নির্বোধ লোকেরা, কষ্ট দিয়ে। সা'দী ব্যাকরণ থেকে বলেন, এটা মূর্খতাপূর্ণ সম্বোধন। মাআরিফুল কুরআনের মতে শব্দটি তাকেও বোঝায়, যে মূর্খের মতো আচরণ করে, যদিও সে জ্ঞানী।"
          },
          {
            "en": "The verse describes how a people answer whoever addresses them in ignorance. It licenses nothing against any living person or community: it gives nobody the right to label a neighbour, a sect or a nation as the jahilun and treat them with contempt. On Ma'arif's reading the word names a way of behaving, not a class of people, and the verse's demand falls wholly on whoever answers: what to say, not whom to despise.",
            "bn": "আয়াতটি বর্ণনা দেয়, এক দল মানুষ মূর্খতাপূর্ণ সম্বোধনের জবাব কীভাবে দেয়। আজকের কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। প্রতিবেশী, কোনো দল বা কোনো জাতিকে 'জাহিলুন' তকমা দিয়ে তুচ্ছ করার অধিকার এ আয়াত কাউকে দেয়নি। মাআরিফের পাঠে শব্দটি কোনো শ্রেণির নাম নয়, এক ধরনের আচরণের নাম। আয়াতের দাবি পুরোটাই জবাবদাতার উপর: কী বলতে হবে, সেটা তাকে বলা হয়েছে, কাকে তুচ্ছ করতে হবে তা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Ways to Read Salama",
          "bn": "সালামা শব্দের পাঁচ পাঠ"
        },
        "p": [
          {
            "en": "Qalu salama: they say salaman. Mujahid: right speech, sadad, which al-Qurtubi expands as a word that turns the ignorant away with gentleness; Sa'id ibn Jubayr, in Ibn Kathir: they returned a kind word. At-Tabari joins the two: they answered with what is kind in speech and right in address. A second reading makes it their own safety: Muqatil ibn Hayyan, in al-Baghawi, words in which they stay safe from sin.",
            "bn": "কালূ সালামা: তারা বলে সালাম। মুজাহিদের মতে এর অর্থ সাদাদ, অর্থাৎ সঠিক কথা। কুরতুবী একে খুলে বলেন: এমন কথা, যা দিয়ে মূর্খকে নরমভাবে সরিয়ে দেওয়া যায়। ইবন কাসীরের বর্ণনায় সাঈদ ইবন জুবায়র বলেন: তারা ভালো কথা দিয়ে জবাব দেয়। তাবারী দুটিকে এক করেন: তারা জবাব দেয় সদয় কথায়, সঠিক সম্বোধনে। দ্বিতীয় পাঠে শব্দটি তাদের নিজেদের নিরাপত্তা। বাগাভীর বর্ণনায় মুকাতিল ইবন হাইয়ান বলেন: এমন কথা, যাতে তারা গুনাহ থেকে নিরাপদ থাকে।"
          },
          {
            "en": "As-Sa'di and al-Muyassar say the same: safe from sin, and safe from meeting the ignorant with ignorance. A third reading sets the greeting aside: al-Baghawi gives al-Hasan's gloss, forbearing, with the note that the familiar salam is not meant, and Ma'arif al-Qur'an agrees. Yet al-Baghawi also reports from al-Hasan that it means they greeted them, citing 28:55, peace be upon you. Al-Qurtubi records a group who would say salam in that very word.",
            "bn": "সা'দী ও মুয়াসসারও একই কথা বলেন: গুনাহ থেকে নিরাপদ, আর মূর্খতার জবাব মূর্খতা দিয়ে দেওয়া থেকেও নিরাপদ। তৃতীয় পাঠ পরিচিত সালামকে বাদ রাখে। বাগাভী হাসান বসরীর ব্যাখ্যা আনেন: তারা সহনশীল। সঙ্গে মন্তব্য জুড়ে দেন যে এখানে প্রচলিত সালাম উদ্দেশ্য নয়। মাআরিফুল কুরআনও তা-ই বলে। অথচ বাগাভী হাসান থেকেই আরেকটি বর্ণনা আনেন: অর্থ হলো তারা সালাম দিয়েছে। প্রমাণ ২৮:৫৫ আয়াত: তোমাদের প্রতি সালাম। কুরতুবী জানান, একটি দলের মতে মূর্খকে ঠিক এই শব্দেই সালাম বলা উচিত।"
          },
          {
            "en": "The fifth reading is disengagement. An-Nahhas, in al-Qurtubi, says the word comes not from taslim, greeting, but from tasallum: the Arabs say salaman, meaning I am clear of you. Sibawayh glosses it: no good and no evil between us and you. Al-Qurtubi tells how al-Khalil declined a meal from a desert scholar, who replied salaman; a bystander explained it as a parting with neither good nor evil, and al-Khalil recognised the verse.",
            "bn": "পঞ্চম পাঠ হলো সম্পর্ক ছিন্ন করে সরে আসা। কুরতুবীর উদ্ধৃতিতে নাহহাস বলেন, শব্দটি তাসলীম, অর্থাৎ সালাম দেওয়া, থেকে নয়, এসেছে তাসাল্লুম থেকে। আরবরা সালামান বলে বোঝায়: তোমার থেকে আমি মুক্ত। সীবাওয়াইহের ব্যাখ্যা: আমাদের আর তোমাদের মাঝে ভালো-মন্দ কিছুই নেই। কুরতুবী একটি ঘটনা বলেন। খলীল এক মরুবাসী আলিমের খাবারের দাওয়াত ফিরিয়ে দিলে তিনি বললেন: সালামান। পাশের একজন বুঝিয়ে দিল, এর মানে ভালো-মন্দহীন বিদায়। খলীল তখন আয়াতটি চিনতে পারলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Abrogated or Still Binding",
          "bn": "রহিত, নাকি এখনও বহাল"
        },
        "p": [
          {
            "en": "Was this answer abrogated once fighting was commanded? Al-Baghawi reports al-Kalbi and Abu l-'Aliya: this was before the command to fight, then the verse of fighting abrogated it. Al-Qurtubi states a narrower view: the verse came before the verse of the sword, what concerned the disbelievers was abrogated, and its manners remain among Muslims until the Day of Resurrection. An-Nahhas knows of no other verse where Sibawayh spoke of abrogation.",
            "bn": "লড়াইয়ের হুকুম আসার পর কি এই জবাব রহিত হয়ে গেছে? বাগাভী কালবী ও আবুল আলিয়ার মত জানান: এটা লড়াইয়ের নির্দেশের আগের কথা, পরে লড়াইয়ের আয়াত একে রহিত করেছে। কুরতুবী একটি সীমিত মত তুলে ধরেন: আয়াতটি তরবারির আয়াতের আগের। কাফিরদের সঙ্গে সংশ্লিষ্ট অংশটুকু রহিত, কিন্তু এর আদব মুসলিমদের মাঝে কিয়ামত পর্যন্ত বহাল। নাহহাস বলেন, সীবাওয়াইহ রহিত হওয়ার কথা বলেছেন বলে এই আয়াত ছাড়া আর কোথাও তাঁর জানা নেই।"
          },
          {
            "en": "Sibawayh reasoned that Muslims were never commanded to greet the polytheists, so salam here means safety. Al-Mubarrad said he erred and should have said they were not yet commanded to fight them. Ibn al-'Arabi answered that they were neither commanded nor forbidden to greet them, but told to pardon, and that the Prophet ﷺ would greet them at their gatherings without compromising. Al-Qurtubi finds this closer to the Sunnah and sees no need to claim abrogation. The article takes no side.",
            "bn": "সীবাওয়াইহের যুক্তি ছিল, মুসলিমদের কখনো মুশরিকদের সালাম দিতে বলা হয়নি, তাই এখানে সালাম মানে নিরাপত্তা। মুবাররাদ বলেন, তিনি ভুল করেছেন। তাঁর বলা উচিত ছিল, তখনও তাদের সঙ্গে লড়াইয়ের হুকুম আসেনি। ইবনুল আরাবীর জবাব: তখন সালাম দেওয়ার হুকুমও ছিল না, নিষেধও ছিল না, বরং ক্ষমা করতে বলা হয়েছিল। নবী ﷺ তাদের মজলিসে গিয়ে সালাম দিতেন, তবে আপস করতেন না। কুরতুবীর মতে এ মত সুন্নাহর বেশি কাছাকাছি, তাই রহিত দাবির প্রয়োজন নেই। এ লেখা কোনো পক্ষ নিচ্ছে না।"
          }
        ]
      }
    ]
  },
  "25:64": {
    "sections": [
      {
        "h": {
          "en": "After the Day, the Night",
          "bn": "দিনের পরে রাতের ছবি"
        },
        "p": [
          {
            "en": "Wa-lladhina yabituna li-rabbihim sujjadan wa qiyama: and those who pass the night for their Lord, prostrating and standing. Five words in Arabic, and the second trait in the portrait of 'ibad ar-Rahman, the servants of the Most Merciful, that opens at 25:63. That verse shows them by day, walking on the earth gently and answering the ignorant with words of peace. This verse follows them indoors after dark. Ibn Kathir's abridged commentary marks the turn in a single line: having described their days, Allah says that their nights are the best of nights.",
            "bn": "ওয়াল্লাযীনা ইয়াবীতূনা লিরাব্বিহিম সুজ্জাদাঁও ওয়া কিয়ামা: আর যারা তাদের রবের উদ্দেশে রাত কাটায় সিজদায় ও দাঁড়িয়ে। আরবিতে মাত্র পাঁচটি শব্দ। ২৫:৬৩ আয়াতে ইবাদুর রহমান, অর্থাৎ পরম দয়াময়ের বান্দাদের যে ছবি শুরু হয়েছে, এটি তার দ্বিতীয় বৈশিষ্ট্য। সেই আয়াত তাদের দেখায় দিনের আলোয়: জমিনে তারা নম্রভাবে চলে, অজ্ঞরা কথা বলতে এলে শান্তির কথা বলে জবাব দেয়। এই আয়াত অন্ধকার নামার পর তাদের পিছু পিছু ঘরে ঢোকে। ইবন কাসীরের সংক্ষিপ্ত তাফসীর মোড়টা ধরিয়ে দেয় এক বাক্যে: দিনের বর্ণনা শেষে আল্লাহ জানান, তাদের রাতগুলো সবচেয়ে উত্তম রাত।"
          },
          {
            "en": "Ma'arif al-Qur'an, which counts the traits differently, heads this verse 'The Fourth Characteristic' and reads the day and the night as one life: these servants spend both in submission to Allah, by day teaching and spreading the religion and striving in His way, by night praying before Him. The list runs on to 25:77. Repentance in 25:70, refusing falsehood in 25:72 and the prayer for family in 25:74 each have an article of their own; this one stays with the five words about the night.",
            "bn": "মাআরিফুল কুরআন বৈশিষ্ট্যগুলো গোনে অন্যভাবে, তাই সেখানে এ আয়াতের শিরোনাম 'চতুর্থ বৈশিষ্ট্য'। দিন আর রাতকে সে পড়ে একটি জীবনের দুই অংশ হিসেবে। এই বান্দারা দুটোই কাটায় আল্লাহর আনুগত্যে: দিনে দ্বীন শেখায়, ছড়িয়ে দেয়, আল্লাহর পথে সংগ্রাম করে; রাতে তাঁর সামনে নামাজে দাঁড়ায়। তালিকাটা চলে ২৫:৭৭ পর্যন্ত। ২৫:৭০-এর তওবা, ২৫:৭২-এর মিথ্যা থেকে দূরে থাকা আর ২৫:৭৪-এর পরিবারের জন্য দোয়া, প্রতিটির আলাদা প্রবন্ধ আছে। এখানে কথা কেবল রাত নিয়ে ওই পাঁচটি শব্দের।"
          }
        ]
      },
      {
        "h": {
          "en": "When Night Overtakes a Man",
          "bn": "রাত যখন কাউকে পেয়ে বসে"
        },
        "p": [
          {
            "en": "Everything turns on the verb. Al-Qurtubi quotes the grammarian al-Zajjaj: bata al-rajulu yabitu is said when night overtakes a man, whether he sleeps or does not. Al-Baghawi gives the same definition in nearly the same words and adds an everyday example, bata fulanun qaliqan, so-and-so passed the night restless. The verb, then, does not mean sleeping, and it does not mean staying awake. It names the night as the stretch of time a person is in, and leaves the state to the words that follow it.",
            "bn": "সব কিছু ঘোরে ক্রিয়াটিকে ঘিরে। কুরতুবী ব্যাকরণবিদ যাজ্জাজের কথা উদ্ধৃত করেন: 'বাতার রাজুলু ইয়াবীতু' বলা হয় তখন, যখন রাত কাউকে পেয়ে বসে, সে ঘুমাক বা না ঘুমাক। বাগাভী প্রায় একই ভাষায় একই সংজ্ঞা দেন, সঙ্গে দেন রোজকার কথার একটা নমুনা: 'বাতা ফুলানুন কালিকান', অমুক রাতটা কাটিয়েছে অস্থির হয়ে। তাহলে ক্রিয়াটির মানে ঘুমানোও নয়, জেগে থাকাও নয়। এটুকুই জানায় যে মানুষটা রাতের ভেতরে আছে। কোন অবস্থায় আছে, তা বলে দেয় পরের শব্দগুলো।"
          },
          {
            "en": "Al-Qurtubi's witness for the usage is a line of the poet Zuhayr: fa-bitna qiyaman 'inda ra'si jawadina, so we passed the night standing at the head of our horse, the horse struggling to get free of us and we struggling with it. The words are almost the verse's own, bata with qiyam, yet the scene is a night spent tending an animal, with nothing to do with worship. What turns the same grammar into a picture of devotion is the phrase li-rabbihim and the posture set beside standing.",
            "bn": "এ ব্যবহারের সাক্ষী হিসেবে কুরতুবী আনেন কবি যুহাইরের একটি চরণ: 'ফাবিতনা কিয়ামান ইনদা রা'সি জাওয়াদিনা', আমরা রাত কাটালাম আমাদের ঘোড়ার মাথার কাছে দাঁড়িয়ে; ঘোড়াটা ছুটে যেতে চায়, আমরা তাকে সামলাতে থাকি। শব্দগুলো প্রায় আয়াতেরই, বাতা আর কিয়াম। অথচ দৃশ্যটা একটা পশু সামলে রাত পার করার, ইবাদতের সঙ্গে তার কোনো সম্পর্ক নেই। একই ব্যাকরণকে ইবাদতের ছবিতে বদলে দেয় 'লিরাব্বিহিম' কথাটি, আর দাঁড়ানোর পাশে বসানো সিজদা।"
          },
          {
            "en": "Read with that definition, the verse says something precise. It does not say these servants never sleep, and none of the commentaries fetched for it makes that claim. It says that when night overtakes them, it finds them in two postures and turned in one direction. At-Tabari's paraphrase names the activity outright, yusalluna lillah, they pray to Allah, so the state described by sujjadan wa qiyama is prayer, and not wakefulness for its own sake or the restlessness of al-Baghawi's example.",
            "bn": "এই সংজ্ঞা মাথায় রেখে পড়লে আয়াতের দাবিটা খুব নির্দিষ্ট। আয়াত বলে না যে এই বান্দারা কখনো ঘুমায় না, আর এ আয়াতের জন্য সংগৃহীত কোনো তাফসীরও তা বলে না। আয়াত বলে, রাত যখন তাদের পেয়ে বসে, তখন তাদের পাওয়া যায় দুটি ভঙ্গিতে, একটিমাত্র দিকে মুখ করে। তাবারীর ব্যাখ্যা কাজটার নাম সরাসরি বলে দেয়: 'ইউসাল্লূনা লিল্লাহ', তারা আল্লাহর উদ্দেশে নামাজ পড়ে। তাই সুজ্জাদাঁও ওয়া কিয়ামা যে অবস্থার বর্ণনা, তা নামাজ। নিছক জেগে থাকা নয়, বাগাভীর উদাহরণের অস্থিরতাও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "On Their Faces, On Their Feet",
          "bn": "কখনো মুখ মাটিতে, কখনো পায়ে ভর"
        },
        "p": [
          {
            "en": "At-Tabari's full sentence adds how the prayer moves: they alternate, yurawihuna, between prostration and standing in their prayer. The verb pictures the two postures taking turns through the night rather than one held throughout. He also explains the form of the second word: qiyam is the plural of qa'im, one who stands, just as siyam is the plural of sa'im, one who fasts. Al-Baghawi spells out the bodies behind the words: sujjadan, on their faces; qiyaman, on their feet.",
            "bn": "তাবারীর পুরো বাক্যে আরও আছে নামাজটা কীভাবে এগোয়: তারা নামাজের ভেতরে সিজদা আর দাঁড়ানোর মধ্যে পালা বদল করে, 'ইউরাবিহূনা'। এ ক্রিয়া দেখায়, ভঙ্গি দুটি সারা রাত পালা করে আসে, কোনো একটিকে সারাক্ষণ ধরে রাখা হয় না। দ্বিতীয় শব্দটির গঠনও তিনি বুঝিয়ে দেন: 'কিয়াম' হলো 'কায়িম' অর্থাৎ দাঁড়ানো মানুষের বহুবচন, যেমন 'সিয়াম' হলো 'সায়িম' অর্থাৎ রোজাদারের বহুবচন। শব্দের আড়ালের শরীরটা খুলে দেখান বাগাভী: সুজ্জাদান মানে মুখের উপর, কিয়ামান মানে পায়ের উপর।"
          },
          {
            "en": "Prostration comes first in the verse, though a prayer begins standing. None of the commentaries fetched for this verse stops to explain the order, and this article will not supply a reason they do not give. One observation can be made from the text alone. Ibn Kathir cites 39:9 beside this verse, and there the one devoted through the hours of the night is described as sajidan wa qa'iman, prostrating and standing, in the same order. Whatever the order carries, it is not peculiar to this verse.",
            "bn": "নামাজ শুরু হয় দাঁড়িয়ে, অথচ আয়াতে আগে এসেছে সিজদা। এ আয়াতের জন্য সংগৃহীত তাফসীরগুলোর কোনোটিই এই ক্রমের ব্যাখ্যা দিতে থামে না। তাঁরা যে কারণ বলেননি, এ প্রবন্ধও তা বানিয়ে বলবে না। শুধু আয়াতের পাঠ থেকে একটা কথা বলা যায়। ইবন কাসীর এ আয়াতের পাশে ৩৯:৯ উদ্ধৃত করেন। সেখানে রাতের প্রহরগুলোতে আনুগত্যে মগ্ন মানুষটির বর্ণনা 'সাজিদান ওয়া কায়িমান', সিজদারত ও দাঁড়ানো, ঠিক এই ক্রমেই। ক্রমটির তাৎপর্য যা-ই হোক, তা কেবল এই আয়াতের বৈশিষ্ট্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "An Audience of One",
          "bn": "দর্শক কেবল একজন"
        },
        "p": [
          {
            "en": "Li-rabbihim, for their Lord, is where the Muyassar and as-Sa'di put their weight. Both gloss the verse in almost the same words: they pray much at night, mukhlisina fiha li-rabbihim, sincere in it to their Lord, mutadhallilina lahu, humbling themselves before Him. The Muyassar adds that the humbling is by prostrating and standing, so the postures are themselves the lowering of the self. Ibn 'Abbas's phrase, reported by al-Qurtubi and al-Baghawi, says the same with another preposition: such a person has passed the night lillah, for Allah.",
            "bn": "'লিরাব্বিহিম', তাদের রবের উদ্দেশে, এই কথাটিতেই জোর দেন মুয়াসসার আর সা'দী। দুজনের ব্যাখ্যা প্রায় হুবহু এক: তারা রাতে বেশি বেশি নামাজ পড়ে, তাতে থাকে রবের জন্য ইখলাস, আর থাকে তাঁর সামনে নিজেকে ছোট করে দেওয়া। মুয়াসসার যোগ করে, এই বিনয় প্রকাশ পায় সিজদা আর দাঁড়ানোর ভেতর দিয়েই। অর্থাৎ ভঙ্গি দুটিই নিজেকে নত করার রূপ। কুরতুবী ও বাগাভী ইবন আব্বাস (রাঃ)-এর যে বাক্য এনেছেন, তাতেও একই কথা, শুধু অব্যয়টা আলাদা: এমন মানুষ রাত কাটিয়েছে 'লিল্লাহ', আল্লাহর জন্য।"
          },
          {
            "en": "Ma'arif al-Qur'an asks why worship at night is singled out at all, and gives two reasons. The night is the time of rest, so rising in it takes extra effort; and the night rules out the chance of displaying worship to others. The second reason joins the hour to the phrase for their Lord. A prayer offered while the household sleeps has no spectators to play to, and whatever sincerity it holds is left unmixed by anyone's opinion. The first reason is a reminder that the trait is costly.",
            "bn": "মাআরিফুল কুরআন প্রশ্ন তোলে, রাতের ইবাদতকে আলাদা করে বলা হলো কেন। উত্তরে দুটি কারণ দেয়। রাত বিশ্রামের সময়, তাই তখন উঠে দাঁড়াতে বাড়তি কষ্ট লাগে। আর রাতে নিজের ইবাদত অন্যকে দেখানোর সুযোগই থাকে না। দ্বিতীয় কারণটি সময়টাকে জুড়ে দেয় 'তাদের রবের উদ্দেশে' কথাটির সঙ্গে। ঘরের সবাই যখন ঘুমিয়ে, তখনকার নামাজের কোনো দর্শক নেই; তাতে যতটুকু ইখলাস থাকে, কারও মতামত এসে তা ঘোলা করে না। প্রথম কারণটি মনে করিয়ে দেয়, গুণটা সস্তা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "How Much of the Night",
          "bn": "রাতের কতটুকু চাই"
        },
        "p": [
          {
            "en": "How much of the night does the verse ask for? The fetched commentaries give two kinds of answer, and they are best heard side by side. The Muyassar and as-Sa'di speak of abundance: yukthiruna min salat al-layl, they pray much at night. Ibn Kathir keeps his gloss broad, fi 'ibadatihi wa ta'atihi, in His worship and obedience. At-Tabari describes the prayer without measuring it. None of these names a number of hours, and none names a number of units of prayer.",
            "bn": "আয়াত রাতের কতটা চায়? সংগৃহীত তাফসীরগুলোতে দুই ধরনের উত্তর আছে, আর দুটিকে পাশাপাশি শোনাই ভালো। মুয়াসসার আর সা'দী বলেন প্রাচুর্যের কথা: 'ইউকসিরূনা মিন সালাতিল লাইল', তারা রাতে বেশি বেশি নামাজ পড়ে। ইবন কাসীর তাঁর ব্যাখ্যাটা রাখেন প্রশস্ত: 'ফী ইবাদাতিহি ওয়া তাআতিহি', তাঁর ইবাদত ও আনুগত্যে। তাবারী নামাজের বর্ণনা দেন, পরিমাণ মাপেন না। এঁদের কেউই ঘণ্টার কোনো সংখ্যা বলেন না, রাকআতের সংখ্যাও না।"
          },
          {
            "en": "The other answer comes as a report from Ibn 'Abbas (RA), carried by both al-Qurtubi and al-Baghawi: whoever prays two rak'ahs or more after 'isha has passed the night for Allah prostrating and standing. Ma'arif al-Qur'an gives the same report through al-Mazhari, from al-Bayhaqi, and words it as being covered by the verse. Al-Qurtubi sets beside it a fuller count from al-Kalbi: whoever prays two rak'ahs after maghrib and four after 'isha has passed the night prostrating and standing.",
            "bn": "অন্য উত্তরটি এসেছে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনায়, যা কুরতুবী ও বাগাভী দুজনেই এনেছেন: যে ইশার পর দুই রাকআত বা তার বেশি নামাজ পড়ে, সে আল্লাহর জন্য সিজদায় ও দাঁড়িয়ে রাত কাটাল। মাআরিফুল কুরআন একই বর্ণনা এনেছে মাযহারীর সূত্রে, বায়হাকী থেকে, আর ভাষাটা এমন: সে-ও এই আয়াতের আওতায় পড়ে। কুরতুবী এর পাশে রাখেন কালবীর আরও বিস্তারিত হিসাব: যে মাগরিবের পর দুই রাকআত আর ইশার পর চারটি রাকআত পড়ে, সে সিজদায় ও দাঁড়িয়ে রাত কাটাল।"
          },
          {
            "en": "The commentaries leave the two answers side by side without reconciling them, and so does this article. One shows the trait at its fullest. The other says how little brings a person within the verse's words. A reader can hold both, aiming at the first without looking down on the second. Two rak'ahs after 'isha can be prayed even at the end of an exhausting day, before sleep, and by Ibn 'Abbas's report they already count as a night passed for Allah.",
            "bn": "তাফসীরগুলো দুটি উত্তরকে মেলানোর চেষ্টা না করে পাশাপাশি রেখে দিয়েছে, এ প্রবন্ধও তাই করে। একটি দেখায় গুণটার পূর্ণ রূপ। অন্যটি জানায়, কতটুকু করলে একজন মানুষ আয়াতের শব্দের আওতায় এসে যায়। পাঠক দুটিই ধরে রাখতে পারেন: লক্ষ্য রাখবেন প্রথমটির দিকে, আর দ্বিতীয়টিকে তুচ্ছ ভাববেন না। ক্লান্ত দিনের শেষেও, ঘুমানোর আগে, ইশার পর দুই রাকআত পড়া যায়। ইবন আব্বাস (রাঃ)-এর বর্ণনা অনুযায়ী তাতেই আল্লাহর জন্য রাত কাটানো হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Half a Night in Congregation",
          "bn": "জামাতে অর্ধেক রাত"
        },
        "p": [
          {
            "en": "Al-Baghawi follows the report from Ibn 'Abbas with a hadith given through his own chain, and Ma'arif al-Qur'an cites the same narration from Ahmad and Muslim. Muslim recorded it in his Sahih (656). 'Abd al-Rahman ibn Abi 'Amrah said: 'Uthman ibn 'Affan (RA) entered the mosque after the maghrib prayer and sat by himself, so I sat with him, and he said: O son of my brother, I heard the Messenger of Allah ﷺ say: whoever prays 'isha in congregation, it is as if he stood half the night; and whoever prays the dawn prayer in congregation, it is as if he prayed the whole night.",
            "bn": "ইবন আব্বাস (রাঃ)-এর বর্ণনার পরপরই বাগাভী নিজের সনদে একটি হাদীস আনেন। মাআরিফুল কুরআনও একই হাদীস উদ্ধৃত করে আহমাদ ও মুসলিমের বরাতে। ইমাম মুসলিম তাঁর সহীহ গ্রন্থে (৬৫৬) এটি সংকলন করেছেন। আবদুর রহমান ইবন আবী আমরা বলেন: উসমান ইবন আফফান (রাঃ) মাগরিবের নামাজের পর মসজিদে ঢুকে একা বসলেন। আমি গিয়ে তাঁর কাছে বসলাম। তিনি বললেন: ভাতিজা, আমি আল্লাহর রাসূল ﷺ-কে বলতে শুনেছি: যে ইশার নামাজ জামাতে পড়ে, সে যেন অর্ধেক রাত নামাজে দাঁড়াল। আর যে ফজরের নামাজ জামাতে পড়ে, সে যেন সারা রাত নামাজ পড়ল।"
          },
          {
            "en": "Read it for what it says. The hadith is about two obligatory prayers prayed with others, and it measures them against standing at night; it does not mention this verse. The link is made by the commentators, who place it beside Ibn 'Abbas's report under 25:64. Its grading is its place in Muslim's Sahih, and nothing is added to that. Al-Baghawi's chain runs through Sufyan from 'Uthman ibn Hakim, which matches the second chain Muslim gives for the same words.",
            "bn": "হাদীসটি যা বলে, ঠিক ততটুকুই পড়া দরকার। কথাটা দুটি ফরজ নামাজ জামাতে পড়া নিয়ে, আর সেগুলোকে মাপা হয়েছে রাতের কিয়ামের সঙ্গে। এই আয়াতের উল্লেখ এতে নেই। সংযোগটা করেছেন তাফসীরকারেরা, ২৫:৬৪-এর আলোচনায় ইবন আব্বাস (রাঃ)-এর বর্ণনার পাশে এটি রেখে। এর মান হলো সহীহ মুসলিমে এর স্থান পাওয়া; এর বেশি কিছু যোগ করা হচ্ছে না। বাগাভীর সনদ সুফইয়ান হয়ে উসমান ইবন হাকীম পর্যন্ত গেছে, যা একই কথার জন্য মুসলিমের দেওয়া দ্বিতীয় সনদের সঙ্গে মেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Little Sleep, Beds Forsaken",
          "bn": "অল্প ঘুম, ছেড়ে আসা বিছানা"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse through three others. 51:17 and 51:18: they used to sleep but little of the night, and before dawn they would seek forgiveness. 32:16: their sides forsake their beds as they call on their Lord in fear and hope, and they spend from what We have provided for them. 39:9: the person devoutly obedient through the hours of the night, prostrating and standing, wary of the Hereafter and hoping for the mercy of his Lord. 32:16 and 39:9 each have a shorter article of their own.",
            "bn": "ইবন কাসীর আয়াতটি পড়েন আরও তিনটি আয়াতের আলোয়। ৫১:১৭ ও ৫১:১৮: তারা রাতের অল্প সময়ই ঘুমাত, আর শেষ রাতে ইস্তিগফার করত। ৩২:১৬: তাদের পাঁজর বিছানা থেকে আলাদা থাকে, তারা ভয় ও আশা নিয়ে রবকে ডাকে, আর আমার দেওয়া রিযিক থেকে খরচ করে। ৩৯:৯: যে রাতের প্রহরগুলোতে সিজদায় ও দাঁড়িয়ে আনুগত্যে মগ্ন থাকে, আখিরাতকে ভয় করে আর রবের রহমতের আশা রাখে। ৩২:১৬ ও ৩৯:৯ নিয়ে আলাদা ছোট প্রবন্ধ আছে।"
          },
          {
            "en": "As-Sa'di cites 32:16 too, but carries the quotation one verse further, into 32:17: no soul knows what delight of the eyes has been hidden away for them, as reward for what they used to do. Read beside this verse, the pairing is striking. A worship kept out of people's sight is answered, in the verse he chooses, by a reward kept from every soul's knowledge. The sister verses agree on the picture: little sleep, a bed left behind, a person found prostrating and standing while others rest.",
            "bn": "সা'দীও ৩২:১৬ উদ্ধৃত করেন, তবে উদ্ধৃতিটা টেনে নেন আরও এক আয়াত, ৩২:১৭ পর্যন্ত: তাদের কাজের প্রতিদান হিসেবে তাদের জন্য চোখজুড়ানো কী লুকিয়ে রাখা হয়েছে, কোনো প্রাণই তা জানে না। এ আয়াতের পাশে রেখে পড়লে মিলটা চোখে পড়ে। মানুষের চোখের আড়ালে রাখা ইবাদতের জবাবে, তাঁর বেছে নেওয়া আয়াতে আসে প্রতিটি প্রাণের জ্ঞানের আড়ালে রাখা প্রতিদান। সব কটি আয়াতের ছবি একই: অল্প ঘুম, ছেড়ে আসা বিছানা, আর অন্যরা যখন বিশ্রামে, তখন সিজদায় ও দাঁড়িয়ে থাকা একজন মানুষ।"
          }
        ]
      },
      {
        "h": {
          "en": "From the Night to a Plea",
          "bn": "রাতের নামাজ থেকে মিনতি"
        },
        "p": [
          {
            "en": "After the line from Zuhayr, al-Qurtubi quotes verses that were recited in description of the awliya', the friends of Allah: Allah has a people who were sincere in loving Him, so He was pleased with them and chose them as His servants; a people who, when darkness falls over them, pass the night there prostrating and standing; lean of belly from restraint, knowing no food but the lawful. The poem borrows the verse's own words, sujjadan wa qiyama, and sets beside them the restraint of their eating.",
            "bn": "যুহাইরের চরণের পর কুরতুবী আরও কয়েকটি চরণ আনেন, যেগুলো আল্লাহর ওলিদের বর্ণনায় আবৃত্তি করা হতো: আল্লাহর এমন কিছু বান্দা আছে, যারা তাঁর ভালোবাসায় খাঁটি; তিনি তাদের উপর সন্তুষ্ট হয়ে তাদের বেছে নিয়েছেন নিজের সেবক হিসেবে। তারা এমন মানুষ, আঁধার যখন তাদের ঢেকে ফেলে, তারা সেখানে রাত কাটায় সিজদায় আর দাঁড়িয়ে। সংযমে তাদের পেট খালি, শরীর কৃশ; হালাল ছাড়া কোনো খাবার তারা চেনে না। কবিতাটি আয়াতের নিজের শব্দই ধার নেয়, সুজ্জাদান ওয়া কিয়ামা, আর তার পাশে রাখে তাদের খাওয়ার সংযম।"
          },
          {
            "en": "The next verse, 25:65, gives the words these people say: our Lord, turn away from us the punishment of Hell; its punishment is gharam. In Ibn Kathir's abridged commentary al-Hasan explains the word: whatever strikes a son of Adam and then passes is not gharam; gharam is what lasts as long as the heavens and the earth. Sulayman at-Taymi held the same view. 25:66 adds that it is an evil place to settle and to stay. Those two verses need a reading of their own.",
            "bn": "পরের আয়াত, ২৫:৬৫, জানায় এই মানুষগুলো কী বলে: হে আমাদের রব, জাহান্নামের শাস্তি আমাদের থেকে ফিরিয়ে দিন; তার শাস্তি তো 'গারাম'। ইবন কাসীরের সংক্ষিপ্ত তাফসীরে হাসান শব্দটির ব্যাখ্যা দেন: আদমসন্তানের উপর যে বিপদ আসে আর চলে যায়, তা গারাম নয়; গারাম সেই শাস্তি, যা আসমান-জমিন যতদিন থাকে ততদিন থাকে। সুলাইমান আত-তাইমীর মতও এটাই। ২৫:৬৬ যোগ করে, ঠিকানা আর অবস্থানের জায়গা হিসেবে তা কতই না মন্দ। আয়াত দুটির বিস্তারিত পাঠ আলাদা আলোচনার বিষয়।"
          },
          {
            "en": "What the verse asks of a reader today is plain from its words. The night is passed for someone, li-rabbihim, and the postures are the two that the prayer is made of. The commentaries fetched here leave a range open, from much prayer at night to two rak'ahs after 'isha, and the hadith in Muslim likens 'isha and the dawn prayer in congregation to standing half the night and the whole night. Begin where the range begins, keep it, and let the hour nobody sees become the place where the gentleness of 25:63 is proved true.",
            "bn": "আজকের পাঠকের কাছে আয়াত কী চায়, তা এর শব্দেই স্পষ্ট। রাতটা কাটানো হয় কারও জন্য, 'লিরাব্বিহিম'; আর ভঙ্গি দুটি সেই দুটিই, যা দিয়ে নামাজ গড়া। এখানকার তাফসীরগুলো একটা পরিসর খোলা রেখেছে: রাতে বেশি বেশি নামাজ থেকে শুরু করে ইশার পর দুই রাকআত পর্যন্ত। আর মুসলিমের হাদীস জামাতে ইশা ও ফজর পড়াকে তুলনা করে অর্ধেক রাত ও সারা রাত দাঁড়ানোর সঙ্গে। পরিসরের শুরু থেকেই শুরু করুন, তারপর তা ধরে রাখুন। যে প্রহর কেউ দেখে না, সেটাই হয়ে উঠুক ২৫:৬৩-এর দিনের নম্রতা সত্য প্রমাণের জায়গা।"
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
            "bn": "আয়াতটি একটি ব্যতিক্রমের কথা বলে, আর যে কথা থেকে এই ব্যতিক্রম, সেটা বড় কঠিন। ২৫:৬৩ থেকে সূরাটি পরম করুণাময়ের বান্দাদের বর্ণনা দিচ্ছে। ২৫:৬৮-এ এসে বর্ণনাটা আসে 'না'-এর ভাষায়: তারা আল্লাহর সঙ্গে অন্য কোনো ইলাহকে ডাকে না, আল্লাহ যে প্রাণকে হারাম করেছেন তাকে ন্যায্য কারণ ছাড়া হত্যা করে না, আর যিনা করে না। যে এসব করে, সে শাস্তির মুখোমুখি হবে: কিয়ামতের দিন দ্বিগুণ আযাব, আর চিরস্থায়ী লাঞ্ছনা। তারপরই মোড় ঘোরে: তবে যারা তাওবা করে, ঈমান আনে আর নেক আমল করে, তারা নয়।"
          },
          {
            "en": "For such people, Allah will replace their evil deeds with good deeds, and Allah is ever Forgiving and Merciful. Note which sins stand upstream of this promise: shirk, murder, zina — the three the moral imagination treats as unforgivable. The exception is carved precisely where despair is strongest. If the door stands open after these, the argument runs from the greater to the lesser: it stands open after everything beneath them.",
            "bn": "এমন মানুষদের মন্দ কাজগুলো আল্লাহ নেক কাজ দিয়ে বদলে দেবেন; আর আল্লাহ পরম ক্ষমাশীল, পরম দয়ালু। লক্ষ করুন, এই প্রতিশ্রুতির আগে কোন গুনাহগুলোর কথা এসেছে: শিরক, হত্যা, যিনা। মানুষের নৈতিক বোধ এই তিনটিকেই ক্ষমার অযোগ্য মনে করে। ব্যতিক্রমটা রাখা হয়েছে ঠিক সেখানে, যেখানে নিরাশা সবচেয়ে গভীর। এসবের পরেও যদি দরজা খোলা থাকে, তবে বড় থেকে ছোটর দিকে যুক্তি চলে: এর চেয়ে ছোট সব গুনাহের পরেও দরজা খোলা।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Asked for This Verse",
          "bn": "কারা এই আয়াত চেয়েছিল"
        },
        "p": [
          {
            "en": "The occasion is preserved with a sound chain. Al-Bukhari narrates from Ibn Abbas (RA) that some people of shirk had killed and had done so much, and committed zina and had done so much, then came to Muhammad ﷺ and said: what you say and call to is good, if only you would tell us that there is an expiation for what we have done. Then this passage came down, together with 39:53 — O My servants who have transgressed against yourselves, do not despair of the mercy of Allah.",
            "bn": "আয়াতটি কোন প্রেক্ষাপটে নাজিল হয়েছিল, তা সহিহ সনদে সংরক্ষিত আছে। বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন: মুশরিকদের কিছু লোক অনেক হত্যা করেছিল, অনেক যিনাও করেছিল। তারা মুহাম্মাদ ﷺ-এর কাছে এসে বলল, আপনি যা বলেন আর যেদিকে ডাকেন তা তো ভালো; শুধু যদি আমাদের জানাতেন, আমরা যা করেছি তার কোনো কাফফারা আছে! তখন এই অংশটি নাজিল হয়, সঙ্গে ৩৯:৫৩: হে আমার বান্দারা, যারা নিজেদের ওপর বাড়াবাড়ি করেছ, আল্লাহর রহমত থেকে নিরাশ হয়ো না।"
          },
          {
            "en": "The question behind the revelation deserves attention. These were not people minimizing their past; they named it worse than anyone else would have, and their only obstacle to entering Islam was arithmetic — could such a ledger ever be settled? The verse answered a real pastoral emergency, and it still addresses exactly that person: the one who believes the message and disbelieves in his own eligibility.",
            "bn": "এই নাজিলের পেছনের প্রশ্নটা খেয়াল করার মতো। এরা নিজেদের অতীত হালকা করে দেখানোর লোক ছিল না। অন্য কেউ যতটা কঠিন করে বলত, নিজেরাই তার চেয়ে কঠিন ভাষায় তা স্বীকার করেছিল। ইসলামে আসার পথে তাদের একমাত্র বাধা ছিল হিসাব: এত ভারী খাতার দেনা কি কখনো শোধ হবে? আয়াতটি সত্যিকারের এক দ্বীনি সংকটের জবাব দিয়েছিল, আর আজও ঠিক সেই মানুষটির সঙ্গেই কথা বলে, যে দাওয়াতটা বিশ্বাস করে, কিন্তু বিশ্বাস করতে পারে না যে সে নিজে এর যোগ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "How Sins Become Good Deeds",
          "bn": "গুনাহ যেভাবে নেকি হয়ে যায়"
        },
        "p": [
          {
            "en": "What does yubaddilu, He replaces, mean? Ibn Kathir records two positions among the commentators. On the first, the exchange happens in this world and in the person: ugly qualities are swapped for beautiful ones — the shirk for iman, the violence for restraint, the betrayal for chastity. A person's very habits are rebuilt, so the years ahead produce good where the years behind produced harm. On this reading the verse describes the observable transformation of the sincere convert and the sincere penitent.",
            "bn": "'ইউবাদ্দিলু', তিনি বদলে দেন: এর অর্থ কী? ইবনে কাসীর মুফাসসিরদের দুটি মত উল্লেখ করেন। প্রথম মতে, এই বদল ঘটে দুনিয়াতেই, মানুষটির ভেতরে। খারাপ স্বভাবগুলো ভালো স্বভাবে বদলে যায়: শিরকের জায়গায় ঈমান, হিংস্রতার জায়গায় সংযম, বিশ্বাসঘাতকতার জায়গায় সতীত্ব। মানুষের অভ্যাসগুলোই নতুন করে গড়ে ওঠে। পেছনের বছরগুলো যেখানে ক্ষতি ডেকে এনেছিল, সামনের বছরগুলো সেখানে কল্যাণ বয়ে আনে। এই ব্যাখ্যায় আয়াতটি সেই বদলের কথা বলে, যা আন্তরিক নওমুসলিম আর আন্তরিকভাবে তাওবাকারীর জীবনে চোখে দেখা যায়।"
          },
          {
            "en": "On the second position, the replacement touches the record itself on the Day of Judgement. Its support is the narration of Abu Dharr (RA) in Muslim about the last man to leave the Fire: his major sins are concealed, his minor sins are shown to him, and he is told, for every evil deed you have a good deed. The man, seeing the direction of the exchange, says: my Lord, I did things I do not see here. The Prophet ﷺ laughed when relating it until his back teeth showed.",
            "bn": "দ্বিতীয় মতে, বদলটা ঘটে কিয়ামতের দিন, খোদ আমলনামায়। এর দলিল মুসলিমে বর্ণিত আবু যর (রাঃ)-এর হাদিস, জাহান্নাম থেকে সবার শেষে বের হওয়া মানুষটিকে নিয়ে। তার বড় গুনাহগুলো আড়ালে রাখা হয়, ছোট গুনাহগুলো তাকে দেখানো হয়। তারপর তাকে বলা হয়: তোমার প্রতিটি মন্দ কাজের বদলে একটি করে নেকি। বদল কোন দিকে যাচ্ছে দেখে লোকটি বলে: হে আমার রব, আমি তো আরও অনেক কাজ করেছিলাম, সেগুলো তো এখানে দেখছি না! এ ঘটনা বলতে গিয়ে নবী ﷺ এমন হাসলেন যে তাঁর মাড়ির দাঁত দেখা গেল।"
          },
          {
            "en": "The two readings do not compete so much as cover two moments of the same mercy: character is exchanged here, entries are exchanged there. Both hang on the same three conditions the verse states — tawbah, iman, righteous work — and the verse after it, 25:71, presses the point that whoever repents and acts rightly has turned to Allah with a true turning. Repentance in this passage is not a mood; it is a redirection with deeds attached.",
            "bn": "দুটি ব্যাখ্যা আসলে একে অপরের প্রতিদ্বন্দ্বী নয়; একই রহমতের দুটি মুহূর্তের কথা বলে। দুনিয়ায় বদলায় চরিত্র, আখিরাতে বদলায় আমলনামার লেখা। দুটিই নির্ভর করে আয়াতে বলা একই তিন শর্তের ওপর: তাওবা, ঈমান আর নেক আমল। পরের আয়াত, ২৫:৭১, কথাটায় আরও জোর দেয়: যে তাওবা করে আর নেক আমল করে, সে-ই সত্যিকার অর্থে আল্লাহর দিকে ফিরে আসে। এখানে তাওবা কোনো মনের ভাব নয়; তা হলো জীবনের দিক বদলানো, সঙ্গে আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgiving and Merciful",
          "bn": "ক্ষমাশীল ও দয়ালু"
        },
        "p": [
          {
            "en": "The verse closes with two names: wa kanallahu Ghafuran Rahima, and Allah is ever Forgiving, Merciful. The verb kana gives the names permanence — He has always been so; forgiveness is not a policy adopted for this case. The same pairing seals 4:110, where whoever does evil or wrongs himself and then seeks Allah's forgiveness will find Allah Forgiving and Merciful. The promise of exchange in 25:70 is thus anchored not in the sinner's merit but in the Forgiver's character.",
            "bn": "আয়াত শেষ হয় দুটি নামে: 'ওয়া কানাল্লাহু গাফূরার রাহীমা', আর আল্লাহ চিরকালই ক্ষমাশীল, পরম দয়ালু। 'কানা' ক্রিয়াটি নাম দুটিকে স্থায়ী করে দেয়: তিনি সব সময়ই এমন। ক্ষমা শুধু এই ঘটনার জন্য নেওয়া কোনো নীতি নয়। একই জোড়া নাম দিয়ে শেষ হয় ৪:১১০: যে মন্দ কাজ করে বা নিজের ওপর জুলুম করে, তারপর আল্লাহর কাছে মাফ চায়, সে আল্লাহকে পাবে ক্ষমাশীল, দয়ালু। তাই ২৫:৭০-এর বদলের প্রতিশ্রুতি দাঁড়িয়ে আছে গুনাহগারের যোগ্যতার ওপর নয়, ক্ষমাশীলের স্বভাবের ওপর।"
          }
        ]
      },
      {
        "h": {
          "en": "No One Disqualified",
          "bn": "কেউ অযোগ্য নয়"
        },
        "p": [
          {
            "en": "Lived, the verse dismantles the most effective weapon against repentance: the conviction of being a lost cause. That conviction masquerades as humility while functioning as an excuse, since a person certain of rejection sees no point in changing. Against it stands a verse revealed for people whose records held murder and worse, promising not bare acquittal but conversion of the evidence. After that precedent, no private history can honestly claim to be beyond the schedule of mercy.",
            "bn": "জীবনে আয়াতটি তাওবার বিরুদ্ধে সবচেয়ে কার্যকর অস্ত্রটাকেই ভেঙে দেয়: 'আমার আর কোনো আশা নেই', এই বিশ্বাস। এই বিশ্বাস দেখতে বিনয়ের মতো, কিন্তু কাজ করে অজুহাত হিসেবে। কারণ যে নিশ্চিত যে তাকে ফিরিয়ে দেওয়া হবে, সে বদলানোর কোনো মানে খুঁজে পায় না। এর বিপরীতে আছে এমন এক আয়াত, যা নাজিল হয়েছিল এমন মানুষদের জন্য, যাদের খাতায় হত্যা আর তার চেয়েও খারাপ কিছু ছিল। আর প্রতিশ্রুতিটা শুধু খালাসের নয়; খাতার সাক্ষ্যগুলোই বদলে দেওয়ার। এই নজিরের পর কোনো গোপন অতীতই সততার সঙ্গে দাবি করতে পারে না যে সে রহমতের নাগালের বাইরে।"
          },
          {
            "en": "The conditions keep the promise honest work rather than wishful thinking. Repentance means leaving the sin, regretting it, and resolving against return — restoring rights where rights were taken. Belief means the turn is toward Allah, not merely toward self-improvement. Righteous work means the new direction shows up in deeds that can be pointed to. Whoever is engaged in those three is not waiting to find out whether the exchange applies; by the verse's own terms, it already does.",
            "bn": "শর্তগুলোর কারণেই প্রতিশ্রুতিটা অলীক আশা হয়ে থাকে না, হয়ে ওঠে সৎ চেষ্টার বিষয়। তাওবা মানে গুনাহ ছেড়ে দেওয়া, তার জন্য অনুতপ্ত হওয়া, আর আবার সেদিকে না ফেরার সংকল্প করা; কারও হক নষ্ট করে থাকলে তা ফিরিয়ে দেওয়া। ঈমান মানে এই ফেরা আল্লাহর দিকে, নিছক নিজেকে ভালো মানুষ বানানোর দিকে নয়। নেক আমল মানে নতুন পথটা এমন কাজে দেখা দেওয়া, যা আঙুল দিয়ে দেখানো যায়। যে এই তিনটিতে লেগে আছে, তাকে আর অপেক্ষা করতে হয় না বদলটা তার বেলায় খাটবে কি না। আয়াতের নিজের শর্তেই তা এর মধ্যে খাটছে।"
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
          "bn": "ছবিটির ভেতরে"
        },
        "p": [
          {
            "en": "This verse belongs to the description of the servants of the Most Merciful that opens at 25:63 and runs to 25:76, one verse short of the surah's close. The list moves between worship and character without separating them: gentle walking, nights in prostration, fear of the Fire, balanced spending, no shirk and no bloodshed. This line is the one about speech and about company — what these people will not affirm, and what they will not stand around for. The reward at 25:75 and 25:76 follows their supplication at 25:74 in the passage, so this line belongs among the traits and not among the promises.",
            "bn": "এই আয়াতটি পরম দয়াময়ের বান্দাদের সেই বর্ণনার অংশ, যা শুরু হয় ২৫:৬৩-এ আর চলে ২৫:৭৬ পর্যন্ত, সূরার শেষ আয়াতের ঠিক আগ পর্যন্ত। তালিকাটা ইবাদত আর চরিত্রকে আলাদা না করে একটা থেকে আরেকটায় যায়: নম্রভাবে চলা, সিজদায় কাটানো রাত, জাহান্নামের ভয়, মাঝামাঝি খরচ, শিরক নেই, রক্তপাতও নেই। এই আয়াত কথা আর সঙ্গ নিয়ে: এই মানুষগুলো কোন কথায় সায় দেবে না, আর কোথায় গিয়ে দাঁড়িয়ে থাকবে না। অনুচ্ছেদে ২৫:৭৫ ও ২৫:৭৬-এর পুরস্কার আসে ২৫:৭৪-এর দোয়ার পরে। তাই এই আয়াত প্রতিশ্রুতির মধ্যে নয়, গুণাবলির মধ্যেই পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "They Do Not Witness az-Zur",
          "bn": "তারা যূর-এর সাক্ষী হয় না"
        },
        "p": [
          {
            "en": "La yashhaduna az-zur carries two classical readings, because the Arabic verb shahida means both to testify and to be present. Read the first way, they do not give false testimony — shahadat az-zur, the perjury that destroys a court. Read the second way, they are not present at az-zur, meaning they do not attend gatherings of falsehood; the early authorities glossed zur here as idol festivals, as shirk, and as lying speech generally. The commentators carry both readings, and neither one cancels the other.",
            "bn": "'লা ইয়াশহাদূনায যূর' কথাটির দুটি প্রাচীন ব্যাখ্যা আছে, কারণ আরবি ক্রিয়া 'শাহিদা'-র অর্থ সাক্ষ্য দেওয়াও, আবার উপস্থিত থাকাও। প্রথম অর্থে: তারা মিথ্যা সাক্ষ্য দেয় না। এ হলো শাহাদাতুয যূর, যে মিথ্যা সাক্ষ্য আদালতকে ধ্বংস করে দেয়। দ্বিতীয় অর্থে: তারা যূর-এর জায়গায় হাজির থাকে না, মানে মিথ্যার আসরে যায় না। পূর্বসূরি আলিমরা এখানে 'যূর'-এর ব্যাখ্যা করেছেন মূর্তিপূজার উৎসব, শিরক, আর সাধারণভাবে মিথ্যা কথা বলে। মুফাসসিররা দুটি অর্থই রাখেন, একটি অন্যটিকে বাতিল করে না।"
          },
          {
            "en": "The first reading is not a small matter in the sunnah. Al-Bukhari relates from Abu Bakrah (RA) that the Prophet ﷺ asked whether he should inform them of the greatest of the major sins, named associating partners with Allah and disobedience to parents while reclining, and then sat up to warn against false speech, repeating it until those present wished he would stop. A man who will not lie for himself may still lend his name to someone else's lie, and that is what is being closed off.",
            "bn": "সুন্নাহতে প্রথম অর্থটা মোটেই ছোট ব্যাপার নয়। ইমাম বুখারী আবু বাকরা (রাঃ) থেকে বর্ণনা করেন: নবী ﷺ জিজ্ঞেস করলেন, তিনি কি তাঁদের সবচেয়ে বড় কবীরা গুনাহগুলোর কথা জানাবেন? তারপর হেলান দেওয়া অবস্থায় বললেন: আল্লাহর সাথে শরিক করা আর বাবা-মার অবাধ্য হওয়া। এরপর তিনি উঠে বসলেন আর মিথ্যা কথা থেকে সাবধান করলেন। কথাটা এত বার বললেন যে উপস্থিত সবাই মনে মনে চাইছিলেন, তিনি যেন থামেন। যে মানুষ নিজের স্বার্থে মিথ্যা বলবে না, সে-ও অন্যের মিথ্যায় নিজের নাম জুড়ে দিতে পারে। এখানে সেই পথটাই বন্ধ করা হচ্ছে।"
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
            "bn": "দ্বিতীয় অংশটি ধরেই নেয় যে এই সাক্ষাৎ ঘটবেই: 'ওয়া ইযা মাররূ বিল-লাগভি মাররূ কিরামা' (আর যখন তারা লাগভের পাশ দিয়ে যায়, তারা মর্যাদার সাথে পাশ কেটে যায়)। 'লাগভ' মানে এমন কথা বা কাজ যার ভেতরে কিছু নেই: নিরীহ সময় নষ্ট থেকে শুরু করে অশ্লীল ও নিষ্ঠুর পর্যন্ত। আয়াতটি এমন কোনো জীবন কল্পনা করে না যেখানে এসবের মুখোমুখি কখনো হতে হয় না। এটি বর্ণনা করে, সেসব পেরিয়ে যাওয়ার ধরনটি কেমন হবে।"
          },
          {
            "en": "Kiraman is a state describing them, not the laghw: they are the noble ones as they pass. The commentators explain it as going by without joining in and without answering in the same currency. That is a narrow and demanding target — not a lecture, not a scene, and not laughing along either. 23:3 lists turning away from laghw among the traits of the successful, and in 28:55 those who hear it reply that their deeds are their own and the others' are theirs.",
            "bn": "'কিরামা' শব্দটি তাদেরই অবস্থা বোঝায়, লাগভের নয়: পাশ দিয়ে যাওয়ার সময় মর্যাদাবান তারাই। মুফাসসিররা এর ব্যাখ্যা দেন: তাতে যোগ না দিয়ে, আর একই সুরে জবাব না দিয়ে পাশ কেটে চলে যাওয়া। লক্ষ্যটা সরু আর কঠিন: নসিহত শুরু করা নয়, হইচই বাধানো নয়, আবার সবার সঙ্গে হেসে ওঠাও নয়। ২৩:৩ লাগভ থেকে মুখ ফিরিয়ে নেওয়াকে সফলদের গুণের মধ্যে গুনেছে। আর ২৮:৫৫-এ যারা এমন কথা শোনে, তারা জবাব দেয়, তাদের আমল তাদের, অন্যদের আমল অন্যদের।"
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
            "bn": "প্রথম অংশের দুটি ব্যাখ্যাই শেষে একই জায়গায় পৌঁছায়। গুনাহটা মিথ্যার পক্ষে কসম খাওয়া হোক, কিংবা মিথ্যার আসরে আরাম করে বসে থাকা, দুই ক্ষেত্রেই যা ফিরিয়ে দেওয়া হচ্ছে তা হলো অসত্যের পাশে নিজেকে দাঁড় করানো। উপস্থিত থাকাটাও একরকম সই করা। আপনি আছেন বলে আসরটা আরেকটু ভরা, আর বক্তা আরেকটু সাহসী। এ কারণেই এই গুণটা আদব-কায়দার নিয়মে নয়, ইবাদতের চিহ্নগুলোর মধ্যে এসেছে।"
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
            "bn": "উপস্থিত থাকতে এখন কিছুই খরচ হয় না, অথচ তা রেকর্ড রেখে যায়। একটি শেয়ার, একটি ফরোয়ার্ড, চালাচালি হওয়া একটি স্ক্রিনশট, কিংবা এমন একটি জবাব যা আলোচনাটিকে বাঁচিয়ে রাখে — প্রতিটিই যূর-এর আসরে উপস্থিত থাকার এক-একটি উপায়, নিজে একটি কথাও না বলে। আয়াতটি এই অভ্যাসকে দুটি আলাদা প্রশ্ন করে: আপনি কি অসত্য কিছু সমর্থন করেছেন, আর যখন তা বলা হচ্ছিল আপনি কি সেখানে দাঁড়িয়ে ছিলেন। আমাদের বেশির ভাগই প্রথমটিতে ব্যর্থ হওয়ার অনেক আগেই দ্বিতীয়টিতে ব্যর্থ হই।"
          },
          {
            "en": "The dignity the verse praises is quiet. It does not require the room to know that you disapproved, and it does not require a speech. It requires leaving, closing, or not replying, which is harder than it sounds because it wins nothing visible. What it protects is the description at the head of the passage: these are the servants of the Most Merciful, and this is one of the things by which they are known.",
            "bn": "আয়াত যে মর্যাদার প্রশংসা করে, তা নিঃশব্দ। আপনি যে অসন্তুষ্ট, ঘরের সবাইকে তা জানানোর দরকার নেই, কোনো বক্তৃতারও দরকার নেই। দরকার শুধু উঠে চলে আসা, বন্ধ করে দেওয়া, কিংবা জবাব না দেওয়া। শুনতে যত সহজ, কাজটা তত সহজ নয়, কারণ এতে চোখে পড়ার মতো কোনো জিত নেই। এর মধ্য দিয়ে রক্ষা পায় অনুচ্ছেদের শুরুর সেই পরিচয়: এরাই পরম দয়াময়ের বান্দা, আর এটা সেই লক্ষণগুলোর একটি, যা দিয়ে তাদের চেনা যায়।"
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
          "bn": "ছবির শেষ আঁচড়"
        },
        "p": [
          {
            "en": "From 25:63 to the end of the surah, the Quran paints the ibad ar-Rahman, the servants of the Most Merciful: they walk on the earth with humility, answer the ignorant with peace, spend their nights in prostration, keep their spending between excess and stinginess, and avoid shirk, murder and zina. This verse is the last item of the portrait, and it is a du'a — as if to say the finishing feature of such people is what they ask for.",
            "bn": "২৫:৬৩ থেকে সূরার শেষ পর্যন্ত কুরআন 'ইবাদুর রহমান', অর্থাৎ পরম দয়াময়ের বান্দাদের ছবি আঁকে। তারা যমীনে চলে বিনয়ের সঙ্গে, মূর্খরা কথা বলতে এলে শান্তির কথা বলে জবাব দেয়, রাত কাটায় সিজদায়, খরচে অপচয়ও করে না, কৃপণতাও করে না, আর শিরক, হত্যা ও যিনা থেকে দূরে থাকে। এই আয়াতটি সেই ছবির শেষ আঁচড়, আর সেটি একটি দোয়া। যেন বলা হচ্ছে: এমন মানুষদের শেষ পরিচয় হলো, তারা কী চায়।"
          },
          {
            "en": "The placement teaches by sequence. Only after the portrait has covered a person's own humility, worship and restraint does it turn to the household. The servants of the Most Merciful get their own souls in order and then pray for their families — the du'a of this verse presupposes the eleven verses before it. Asking Allah for a righteous home is the overflow of a person working on himself, not a substitute for it.",
            "bn": "আয়াতটি কোথায় বসেছে, সেখান থেকেই ক্রমের শিক্ষা পাওয়া যায়। মানুষের নিজের বিনয়, ইবাদত ও সংযমের কথা শেষ হওয়ার পরই কেবল ছবিটি ঘরের দিকে ফেরে। পরম দয়াময়ের বান্দারা আগে নিজেকে ঠিক করে, তারপর পরিবারের জন্য দোয়া করে। তাই এই আয়াতের দোয়ার পেছনে আগের এগারোটি আয়াত দাঁড়িয়ে আছে। আল্লাহর কাছে নেককার সংসার চাওয়া আসলে নিজেকে গড়ার চেষ্টা থেকেই উপচে পড়ে; সেই চেষ্টার বদলি নয়।"
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
            "bn": "হে আমাদের রব, আমাদের স্ত্রী ও সন্তানদের মাধ্যমে আমাদের দান করুন 'কুররাতা আইয়ুন', চোখের শীতলতা। আরবি বাগধারায় শীতল চোখ মানে স্থির, খুশিতে ভরা চোখ। কথাটি দিয়ে সবচেয়ে গভীর তৃপ্তিকে বোঝায়: এমন দৃশ্য, যা দেখে আনন্দে হৃদয় থমকে দাঁড়ায়। পরিবারের বেলায় এর মানে এমন জীবনসঙ্গী ও সন্তান চাওয়া, যাদের দিকে তাকালেই মনে শান্তি আসে। আর মুফাসসিরগণ বলেন, ইবাদুর রহমানের মুখে এ দোয়ার অর্থ হলো: নিজের পরিবারকে আল্লাহর আনুগত্যে দেখতে পেলেই তাদের চোখ জুড়ায়।"
          },
          {
            "en": "That reading keeps the prayer from collapsing into mere domestic comfort. Children can cool the eye by achievement, charm or income, and all of that fades or moves away. The coolness this du'a intends survives distance and even death, because it is anchored in where the family stands with Allah. It is the difference between enjoying one's family and being at rest about them.",
            "bn": "এই ব্যাখ্যার কারণেই দোয়াটি নিছক সংসারের আরাম-আয়েশের চাওয়ায় নেমে আসে না। সন্তান চোখ জুড়াতে পারে সাফল্য দিয়ে, মিষ্টি স্বভাব দিয়ে, রোজগার দিয়ে; কিন্তু এসব একসময় ফিকে হয়ে যায়, নয়তো দূরে সরে যায়। এই দোয়া যে শীতলতা চায়, তা দূরত্বেও টেকে, মৃত্যুতেও ফুরায় না। কারণ তার শিকড় এক জায়গায়: আল্লাহর কাছে পরিবারটি কোথায় দাঁড়িয়ে আছে। পরিবারকে উপভোগ করা আর পরিবার নিয়ে নিশ্চিন্ত থাকা, এ দুয়ের পার্থক্য এখানেই।"
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
            "bn": "দোয়ার দ্বিতীয় অংশের উচ্চাশা চমকে দেয়: 'আর আমাদের মুত্তাকীদের ইমাম বানান', অর্থাৎ আল্লাহভীরুদের নেতা ও আদর্শ। এখানে বহুবচন আশা করা যেত, অথচ শব্দটি একবচন 'ইমাম'; মুফাসসিরগণ এখানে থেমে ভেবেছেন। তাঁদের ব্যাখ্যার মধ্যে আছে: নেককাররা নিজেদের পথে সবাই মিলে যেন একজন; অথবা প্রত্যেকেই নিজে আদর্শ হতে চায়। যে ব্যাখ্যাই নিন, এগারো আয়াত আগে যাদের পরিচয় ছিল বিনয়ের সঙ্গে হাঁটা, পরম দয়াময়ের সেই বান্দারাই এখানে সামনের সারিতে থাকতে চাইছে।"
          },
          {
            "en": "The two are not in tension, because the leadership requested is of a specific kind: being followed toward Allah. Ambition for wealth or office breeds rivalry; ambition to be an example in taqwa breeds accountability — a person who has asked Allah to make him a model has volunteered to be watched. The du'a also implies wanting others to be righteous, since one cannot be an imam for the muttaqin unless muttaqin exist to follow.",
            "bn": "দুটির মধ্যে কোনো বিরোধ নেই, কারণ এখানে বিশেষ এক ধরনের নেতৃত্ব চাওয়া হচ্ছে: এমন মানুষ হওয়া, যাকে অনুসরণ করে অন্যরা আল্লাহর দিকে যায়। সম্পদ বা পদের উচ্চাশা থেকে জন্মায় রেষারেষি; তাকওয়ায় আদর্শ হওয়ার উচ্চাশা থেকে জন্মায় জবাবদিহি। যে আল্লাহর কাছে নিজেকে আদর্শ বানানোর দোয়া করেছে, সে নিজে থেকেই সবার চোখের সামনে থাকতে রাজি হয়েছে। এ দোয়ায় অন্যদের নেককার হওয়ার কামনাও আছে, কারণ মুত্তাকী না থাকলে মুত্তাকীদের ইমাম হওয়া যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer That Assumes Work",
          "bn": "যে দোয়ার পেছনে মেহনত থাকে"
        },
        "p": [
          {
            "en": "Like all Quranic du'as, this one is the voiced half of an effort. The Quran commands in 66:6 to protect yourselves and your families from a Fire, and in 20:132 to enjoin prayer upon your family and be steadfast therein. A parent who prays this verse at night and neglects those commands by day is asking Allah to harvest a field no one planted. The du'a directs the work as much as it requests the outcome.",
            "bn": "কুরআনের সব দোয়ার মতো এটিও একটি চেষ্টার মুখে বলা অর্ধেক। কুরআন ৬৬:৬ আয়াতে আদেশ করে: নিজেদের ও নিজেদের পরিবারকে আগুন থেকে বাঁচাও; আর ২০:১৩২ আয়াতে বলে: তোমার পরিবারকে নামাজের আদেশ দাও এবং তাতে অবিচল থাকো। যে বাবা-মা রাতে এই আয়াত পড়ে দোয়া করেন অথচ দিনে ওই আদেশগুলো অবহেলা করেন, তাঁরা আল্লাহর কাছে এমন খেতের ফসল চাইছেন, যেখানে কেউ বীজই বোনেনি। দোয়াটি যেমন ফল চায়, তেমনি কাজের পথও দেখিয়ে দেয়।"
          },
          {
            "en": "There is also mercy in the fact that this is a du'a at all. Righteous children cannot be manufactured by parenting technique; hearts are in Allah's hand, and the prophets themselves show the limits — Nuh (AS) lost a son, as 11:42-46 recounts, while Ibrahim (AS) prayed in 37:100 for a righteous child and was granted one. The verse teaches the posture that fits such uncertainty: full effort, and the outcome asked from its true Owner.",
            "bn": "এটি যে দোয়া হিসেবেই এসেছে, তাতেও রহমত আছে। লালনপালনের কৌশল খাটিয়ে নেককার সন্তান বানানো যায় না; অন্তর আল্লাহর হাতে। নবীরাই (আঃ) এর সীমা দেখিয়ে গেছেন: ১১:৪২-৪৬ জানায়, নূহ (আঃ) এক ছেলেকে হারিয়েছেন; আর ইবরাহীম (আঃ) ৩৭:১০০ আয়াতে নেক সন্তানের জন্য দোয়া করেছেন এবং তা পেয়েছেন। এমন অনিশ্চয়তায় কোন ভঙ্গি মানায়, আয়াতটি তা শেখায়: পুরো চেষ্টা করা, আর ফল চাওয়া তার আসল মালিকের কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reward Named Next",
          "bn": "পরের আয়াতেই পুরস্কার"
        },
        "p": [
          {
            "en": "The passage does not leave the portrait unrewarded. The very next verse, 25:75, says: those will be rewarded with the highest chamber for their patience, and will be met there with greeting and peace. The mention of patience as the price is telling — everything in the portrait, from answering the ignorant gently to raising a family toward Allah, runs on sabr. Building a household that cools the eyes is slow work measured in years, and the Quran files it under patience, not luck.",
            "bn": "ছবিটি পুরস্কার ছাড়া শেষ হয় না। ঠিক পরের আয়াত ২৫:৭৫ বলে: ধৈর্যের প্রতিদানে তাদের দেওয়া হবে সুউচ্চ কক্ষ, আর সেখানে তাদের বরণ করা হবে অভিবাদন ও সালাম দিয়ে। মূল্য হিসেবে ধৈর্যের কথা আসাটা অর্থবহ। মূর্খকে নরম জবাব দেওয়া থেকে শুরু করে পরিবারকে আল্লাহর পথে গড়ে তোলা পর্যন্ত, ছবির সবকিছুই চলে সবরের জোরে। চোখ-জুড়ানো সংসার গড়া ধীর কাজ, তার হিসাব হয় বছরে। কুরআন একে ধৈর্যের খাতায় লেখে, ভাগ্যের খাতায় নয়।"
          },
          {
            "en": "To live the verse, say it — it is one of the Quran's given prayers, ready for daily use — and then be its first answer. The house moves toward what its members model, rarely toward what they merely announce. A parent praying for children who love prayer while the children watch him rush his own has set the du'a against his example; aligning the two is how the servants of the Most Merciful ask.",
            "bn": "আয়াতটি জীবনে আনতে চাইলে এটি পড়ুন। কুরআন নিজেই এ দোয়া শিখিয়ে দিয়েছে, প্রতিদিন পড়ার জন্য একেবারে তৈরি। তারপর নিজেই হয়ে উঠুন এর প্রথম জবাব। ঘরের মানুষেরা যা করে দেখায়, সংসার সেদিকেই এগোয়; শুধু মুখে যা বলে, সেদিকে খুব কমই যায়। যে অভিভাবক নামাজ-ভালোবাসা সন্তানের জন্য দোয়া করেন, অথচ সন্তানরা দেখে তিনি নিজের নামাজ তাড়াহুড়া করে সারেন, তিনি নিজের দোয়াকে নিজের আদর্শের বিরুদ্ধে দাঁড় করিয়েছেন। দুটিকে মিলিয়ে নেওয়াই পরম দয়াময়ের বান্দাদের চাওয়ার ধরন।"
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
            "bn": "সূরা আল-ফুরকানের আয়াত সাতাত্তরটি, তাই এটিই শেষ আয়াত। সূরাটি শুরু হয়েছিল এই ঘোষণা দিয়ে: বরকতময় তিনি, যিনি তাঁর বান্দার ওপর ফুরকান নাজিল করেছেন, যাতে তিনি বিশ্ববাসীর জন্য সতর্ককারী হন। এরপর সূরার বড় একটা অংশ জুড়ে আছে মক্কার অস্বীকারকারীরা সেই বান্দা সম্পর্কে কী কী বলত, তার উদ্ধৃতি। শেষে সূরাটি তাঁকে জানিয়ে দেয় জবাবে কী বলতে হবে; আর যে বাক্যটি তাঁকে দেওয়া হয়, সেটি ওদের মূল্য নিয়েই একটি প্রশ্ন।"
          },
          {
            "en": "The word qul, say, matters for reading the verse correctly. The address is to those who deny — the second half makes that explicit by turning to them and saying they have denied. A believer is not the person being spoken to here. He overhears the standard being applied to someone else, and then has to work out where it leaves him.",
            "bn": "আয়াতটি ঠিকভাবে বুঝতে 'কুল' অর্থাৎ 'বল' শব্দটি গুরুত্বপূর্ণ। কথা বলা হচ্ছে অস্বীকারকারীদের সঙ্গে; আয়াতের দ্বিতীয় অংশ সরাসরি তাদের দিকে ফিরে 'তোমরা মিথ্যা প্রতিপন্ন করেছ' বলে বিষয়টি স্পষ্ট করে দেয়। মুমিনকে এখানে সম্বোধন করা হচ্ছে না। সে পাশ থেকে শোনে, মানদণ্ডটি অন্য কারও ওপর খাটানো হচ্ছে; তারপর তাকে নিজেকেই হিসাব করতে হয়, সেই মানদণ্ডে সে কোথায় দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ma Ya'ba'u Bikum",
          "bn": "মা ইয়া'বা'উ বিকুম"
        },
        "p": [
          {
            "en": "The verb is 'aba'a, and it is stronger than the English word care suggests. To 'aba'a bi-something is to reckon it as having weight, to count it as of any account at all. So the question is not whether Allah feels affection for them; it is whether they register on the scale at all. The app's rendering, what would my Lord care for you if not for your supplication, is asking what you would amount to.",
            "bn": "ক্রিয়াটি হলো 'আবা'আ', আর সাধারণ 'পরোয়া করা' কথাটির চেয়ে এর জোর অনেক বেশি। কোনো কিছু নিয়ে 'আবা'আ' করা মানে সেটিকে ওজনদার মনে করা, আদৌ গোনার মধ্যে ধরা। তাই প্রশ্নটা এই নয় যে আল্লাহ তাদের প্রতি মমতা বোধ করেন কি না; প্রশ্ন হলো, পাল্লায় তাদের আদৌ কোনো ওজন ওঠে কি না। অ্যাপের অনুবাদ, 'তোমাদের ব্যাপারে আমার প্রতিপালকের কী প্রয়োজন পড়েছে তোমরা যদি তাঁকে না ডাকো', আসলে এটাই জানতে চাইছে: তাহলে তোমাদের দাম কতটুকু?"
          }
        ]
      },
      {
        "h": {
          "en": "What Du'a Means Here",
          "bn": "এখানে দোয়া মানে কী"
        },
        "p": [
          {
            "en": "Lawla du'a'ukum, were it not for your du'a. The commentators record more than one direction for the phrase. Taken as your calling upon Him, several of the early authorities gloss it as your faith itself, since calling on Allah is what faith does. Taken the other way round, with the pronoun as the object rather than the doer, it reads as His calling you — the invitation delivered through the Messenger, without which there would have been no case to answer.",
            "bn": "'লাওলা দু'আউকুম', তোমাদের দোয়া না থাকলে। মুফাসসিরগণ এই বাক্যাংশের একাধিক অর্থ উল্লেখ করেছেন। একে যদি 'তোমাদের তাঁকে ডাকা' ধরা হয়, তবে প্রথম যুগের কয়েকজন আলিম এর ব্যাখ্যা করেছেন 'তোমাদের ঈমান', কারণ আল্লাহকে ডাকাই তো ঈমানের কাজ। উল্টো দিক থেকে পড়লে সর্বনামটি কর্তা না হয়ে কর্ম হয়; তখন অর্থ দাঁড়ায় 'তোমাদের প্রতি তাঁর ডাক', অর্থাৎ রাসূলের মাধ্যমে আসা সেই দাওয়াত। সেই ডাক না এলে জবাবদিহির প্রশ্নই উঠত না।"
          },
          {
            "en": "Scholars also distinguish two senses of du'a that both apply. Du'a al-mas'alah is asking: give me, forgive me, protect me. Du'a al-'ibadah is worship itself, since every prayer, fast and act of obedience is a way of saying that He is the one worth turning to. Read with the second sense in view, this verse is not making a case for one devotional habit. It is saying that turning to Allah is the whole of what a human being is for.",
            "bn": "আলিমগণ দোয়ার দুটি অর্থ আলাদা করেন, আর এখানে দুটিই খাটে। 'দোয়া আল-মাসআলাহ' মানে চাওয়া: আমাকে দিন, আমাকে ক্ষমা করুন, আমাকে রক্ষা করুন। 'দোয়া আল-ইবাদাহ' মানে খোদ ইবাদত, কারণ প্রতিটি নামাজ, প্রতিটি রোজা, আনুগত্যের প্রতিটি কাজ দিয়ে বান্দা এ কথাই বলে যে ফেরার মতো একমাত্র তিনিই আছেন। দ্বিতীয় অর্থটি মাথায় রেখে পড়লে বোঝা যায়, আয়াতটি কোনো একটি ইবাদতের অভ্যাসের পক্ষে কথা বলছে না। আয়াত বলছে: আল্লাহর দিকে ফেরাই মানুষের জীবনের পুরো উদ্দেশ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Then the Verse Turns",
          "bn": "এরপর আয়াতটি মোড় নেয়"
        },
        "p": [
          {
            "en": "Faqad kadhdhabtum fasawfa yakunu lizama — you have denied, so it will be lizam. The word comes from luzum, sticking fast, and describes a punishment that attaches and does not let go. Al-Bukhari records in his book of tafsir that Ibn Mas'ud (RA) counted al-lizam among the signs that had already come to pass; the wider reading among the commentators takes it as a consequence that clings to the denier in this world and the next.",
            "bn": "'ফাকাদ কায্‌যাবতুম ফাসাওফা ইয়াকূনু লিযামা': তোমরা মিথ্যা প্রতিপন্ন করেছ, কাজেই তা হবে 'লিযাম'। শব্দটি এসেছে 'লুযূম' থেকে, যার অর্থ শক্ত করে লেগে থাকা। এটি এমন শাস্তি বোঝায়, যা একবার লেগে গেলে আর ছাড়ে না। ইমাম বুখারী তাঁর তাফসীর অধ্যায়ে বর্ণনা করেছেন, ইবনে মাসঊদ (রাঃ) 'আল-লিযাম'-কে সেই নিদর্শনগুলোর মধ্যে গুনেছেন, যেগুলো আগেই ঘটে গেছে। তবে মুফাসসিরগণ সাধারণত একে আরও ব্যাপক অর্থে নেন: এমন পরিণতি, যা দুনিয়ায় ও আখিরাতে অস্বীকারকারীর পিছু ছাড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Read From the Other Side",
          "bn": "উল্টো দিক থেকে পড়া"
        },
        "p": [
          {
            "en": "If a person has no weight with Allah without calling on Him, then calling on Him is where weight comes from. That is the believer's share of this verse, and the Quran states it elsewhere directly. In 40:60 Allah says call upon Me, I will respond to you, and immediately warns that those too proud for His worship will enter Hell contemptible — so du'a is set against arrogance, exactly the posture the deniers of al-Furqan had taken.",
            "bn": "আল্লাহকে না ডাকলে যদি তাঁর কাছে মানুষের কোনো ওজনই না থাকে, তবে ওজন আসে তাঁকে ডাকা থেকেই। এই আয়াতে মুমিনের ভাগ এটিই, আর কুরআন অন্য জায়গায় কথাটি সরাসরি বলেছে। ৪০:৬০ আয়াতে আল্লাহ বলেন, তোমরা আমাকে ডাকো, আমি সাড়া দেব; আর সাথে সাথেই সতর্ক করেন, যারা অহংকার করে তাঁর ইবাদত থেকে মুখ ফিরিয়ে নেয়, তারা লাঞ্ছিত হয়ে জাহান্নামে ঢুকবে। অর্থাৎ কুরআন দোয়াকে দাঁড় করায় অহংকারের ঠিক বিপরীতে; আর আল-ফুরকানের অস্বীকারকারীরা ঠিক এই অহংকারের অবস্থানই নিয়েছিল।"
          },
          {
            "en": "2:186 supplies the other half. There Allah answers a question about Himself by saying He is near, that He responds to the call of the caller when he calls, and then asks for response and belief in return. Between the two verses du'a stops looking like a request form and starts looking like the relationship itself: He is near, He answers, and asking is how a servant admits both.",
            "bn": "বাকি অর্ধেকটা আছে ২:১৮৬ আয়াতে। সেখানে আল্লাহ নিজের সম্পর্কে এক প্রশ্নের জবাবে বলেন, তিনি কাছেই আছেন; কেউ ডাকলে তিনি তার ডাকে সাড়া দেন। তারপর বিনিময়ে চান, বান্দারাও যেন তাঁর ডাকে সাড়া দেয় ও ঈমান আনে। দুটি আয়াত পাশাপাশি রাখলে দোয়াকে আর আবেদনপত্রের মতো মনে হয় না; মনে হয় দোয়াই সেই সম্পর্ক। তিনি কাছে আছেন, তিনি সাড়া দেন, আর চাওয়ার মধ্য দিয়েই বান্দা এ দুটি সত্য মেনে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking About Small Things",
          "bn": "ছোট ছোট বিষয়েও চাওয়া"
        },
        "p": [
          {
            "en": "The practical consequence is a change in threshold rather than in volume. Most people already call on Allah when something large breaks. What this verse suggests is that the small requests matter more than they look, because each one is an admission of need, and need is the only standing a servant has. Ask about the errand, the conversation you are dreading, the thing you could probably manage alone. Managing alone was never the point.",
            "bn": "এর বাস্তব ফল হলো: কতবার চাইছেন সেটা নয়, কত ছোট বিষয়েও চাইছেন, সেটাই বদলায়। বড় কিছু ভেঙে পড়লে বেশির ভাগ মানুষ এমনিতেই আল্লাহকে ডাকে। এই আয়াতের ইঙ্গিত হলো, ছোট চাওয়াগুলো দেখতে যতটা তুচ্ছ, আসলে ততটা নয়। কারণ প্রতিটি চাওয়াই নিজের মুখাপেক্ষিতার স্বীকারোক্তি, আর এই মুখাপেক্ষিতাই আল্লাহর সামনে বান্দার একমাত্র অবস্থান। দৈনন্দিন ছোট কাজটির জন্য চান; যে আলাপটা নিয়ে আপনি ভয়ে আছেন, তার জন্য চান; যেটা হয়তো একাই সামলে নিতে পারতেন, তার জন্যও চান। একা সামলে নেওয়া কখনোই আসল কথা ছিল না।"
          }
        ]
      }
    ]
  }
});
