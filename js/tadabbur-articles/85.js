/**
 * Tadabbur long-form articles — surah 85.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "85:1": {
    "sections": [
      {
        "h": {
          "en": "Three Words Before the Story",
          "bn": "কাহিনির আগে তিনটি শব্দ"
        },
        "p": [
          {
            "en": "Wa-s-sama'i dhati al-buruj: and by the sky, the possessor of the buruj. Surah al-Buruj takes its name from this verse of three Arabic words. At-Tabari begins his comment by naming what it is: Allah, exalted be His praise, swore by the sky with the buruj. Al-Qurtubi notes that the surah is Makkan by agreement, with 22 verses, and calls this first line an oath that Allah swore. Al-Baghawi, on this verse, records only that the surah is Makkan and repeats its words.",
            "bn": "ওয়াস সামা-ই যাতিল বুরূজ: শপথ বুরূজওয়ালা আকাশের। সূরা আল-বুরূজের নাম এসেছে এই আয়াত থেকে, আরবিতে যা মাত্র তিনটি শব্দ। তাবারী তাঁর আলোচনা শুরুই করেন আয়াতটি কী, তা বলে: মহিমাময় আল্লাহ বুরূজওয়ালা আকাশের শপথ করেছেন। কুরতুবী জানান, সূরাটি সর্বসম্মতভাবে মাক্কী, আয়াত ২২টি, আর প্রথম লাইনটিকে তিনি আল্লাহর করা এক শপথ বলেন। বাগাভী এ আয়াতে শুধু এটুকু লেখেন যে সূরাটি মাক্কী, তারপর আয়াতের শব্দগুলো উদ্ধৃত করেন।"
          },
          {
            "en": "Two more oaths follow at once, in 85:2 and 85:3, two words each: the promised day, and the witness and the witnessed. They belong to their own entries and are only named here; al-Muyassar runs all three together in a single sentence. The word buruj also stands at 15:16, whose own entry already works through its readings and root. This article adds what is particular to 85:1: how its own commentators gloss the word, and where its oath comes to rest.",
            "bn": "এরপরই আসে আরও দুটি শপথ, ৮৫:২ ও ৮৫:৩ আয়াতে, প্রতিটি দুই শব্দের: প্রতিশ্রুত দিন, আর সাক্ষী ও যার সাক্ষ্য দেওয়া হয়। সেগুলোর আলোচনা তাদের নিজ নিজ জায়গায়, এখানে শুধু নাম নেওয়া হলো। মুয়াসসার তিনটি শপথ এক বাক্যেই বলে। বুরূজ শব্দটি ১৫:১৬ আয়াতেও আছে, আর সে আয়াতের আলোচনায় এর নানা অর্থ ও মূল ধাতু নিয়ে আলোচনা হয়ে গেছে। এই লেখা যোগ করে শুধু ৮৫:১-এর নিজস্ব কথা: এ আয়াতের তাফসীরকারেরা শব্দটির কী অর্থ করেছেন, আর এর শপথ কোথায় গিয়ে থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "Palaces, Stars, Sand and Water",
          "bn": "প্রাসাদ, তারা, বালু আর পানি"
        },
        "p": [
          {
            "en": "At-Tabari opens the question by saying that the people of interpretation differed over what the buruj mean in this place, and he sets out three answers with their chains. The first is palaces: the sky with palaces. He reports from Ibn 'Abbas, through the chain of Muhammad ibn Sa'd from his forebears, that they are palaces in the sky, and in the same report someone else says they are rather the stars. From ad-Dahhak he reports: they claim they are palaces in the sky, and it is also said they are the stars.",
            "bn": "তাবারী প্রশ্নটা শুরু করেন এই বলে যে, এখানে বুরূজের অর্থ নিয়ে তাফসীরবিদদের মধ্যে মতভেদ আছে। তারপর সনদসহ তিনটি জবাব সাজিয়ে দেন। প্রথম জবাব প্রাসাদ, অর্থাৎ প্রাসাদওয়ালা আকাশ। মুহাম্মাদ ইবন সা'দ তাঁর পূর্বপুরুষদের সূত্রে ইবন আব্বাস (রাঃ) থেকে যে বর্ণনা দেন, তাবারী তা উদ্ধৃত করেন: এগুলো আকাশের প্রাসাদ। একই বর্ণনায় আরেকজন বলেন, না, এগুলো তারা। দাহহাক থেকে তাবারী আনেন: লোকে বলে এগুলো আকাশের প্রাসাদ, আবার এ-ও বলা হয় যে এগুলো তারা।"
          },
          {
            "en": "The second answer is the stars. At-Tabari reports from Mujahid, through Ibn Abi Najih and by several chains, that the buruj are the stars, and from Qatada that the sky's buruj are its stars. The third answer is the most unexpected. From Sufyan ibn Husayn he reports that the sky with the buruj means the sky with sand and water. At-Tabari records it without comment, then states his own preference, which is neither palaces nor stars.",
            "bn": "দ্বিতীয় জবাব তারা। ইবন আবী নাজীহের মাধ্যমে একাধিক সনদে তাবারী মুজাহিদ থেকে বর্ণনা করেন, বুরূজ মানে তারা। কাতাদা থেকে আনেন, আকাশের বুরূজ হলো তার তারাগুলো। তৃতীয় জবাবটি সবচেয়ে অপ্রত্যাশিত। সুফিয়ান ইবন হুসাইন থেকে তাবারী বর্ণনা করেন, বুরূজওয়ালা আকাশ মানে বালু আর পানিওয়ালা আকাশ। তাবারী মতটি কোনো মন্তব্য ছাড়াই লিখে রাখেন। তারপর নিজের পছন্দের মত জানান, যা প্রাসাদও নয়, তারাও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Reported Saying What",
          "bn": "কার নামে কোন মত"
        },
        "p": [
          {
            "en": "Ibn Kathir's list overlaps with at-Tabari's but does not match it. He says Allah swears by the sky and its buruj, which are the great stars, and sets the verse beside 25:61: blessed is He who placed buruj in the sky and placed in it a lamp and a shining moon. He names Ibn 'Abbas, Mujahid, ad-Dahhak, al-Hasan, Qatada and as-Suddi as saying the buruj are the stars. He adds three single voices: Mujahid again, that the buruj are those in which the guards are; Yahya ibn Rafi', palaces in the sky; and al-Minhal ibn 'Amr, the beautiful creation.",
            "bn": "ইবন কাসীরের তালিকা তাবারীর তালিকার সঙ্গে কিছুটা মেলে, পুরোটা নয়। তিনি বলেন, আল্লাহ আকাশ ও তার বুরূজের শপথ করছেন, আর বুরূজ হলো বড় বড় তারা। আয়াতটিকে তিনি রাখেন ২৫:৬১-এর পাশে: বরকতময় তিনি, যিনি আকাশে বুরূজ বানিয়েছেন, আর তাতে রেখেছেন এক প্রদীপ ও আলো ছড়ানো চাঁদ। বুরূজ মানে তারা, এ মতে তিনি ইবন আব্বাস (রাঃ), মুজাহিদ, দাহহাক, হাসান, কাতাদা ও সুদ্দীর নাম নেন। এরপর আলাদা তিনটি কণ্ঠ যোগ করেন। মুজাহিদ আবার বলেন, বুরূজ সেগুলো যেখানে প্রহরীরা থাকে। ইয়াহইয়া ইবন রাফি' বলেন, আকাশের প্রাসাদ। আর মিনহাল ইবন আমর বলেন, এর অর্থ সুন্দর সৃষ্টি।"
          },
          {
            "en": "Al-Qurtubi counts four views: stars, from al-Hasan, Qatada, Mujahid and ad-Dahhak; palaces, from Ibn 'Abbas, 'Ikrima and Mujahid also; the beautiful creation, from al-Minhal; and stations, from Abu 'Ubayda and Yahya ibn Sallam. Ma'arif al-Qur'an gives giant stars as the majority view, Ibn 'Abbas among them, and notes others who took the buruj as mansions kept in the sky for the guardian angels. So at-Tabari and al-Qurtubi report palaces from Ibn 'Abbas, while Ibn Kathir and Ma'arif list him for stars. The difference is recorded here, not resolved.",
            "bn": "কুরতুবী চারটি মত গোনেন। এক, তারা: হাসান, কাতাদা, মুজাহিদ ও দাহহাকের মত। দুই, প্রাসাদ: ইবন আব্বাস (রাঃ), ইকরিমা এবং মুজাহিদেরও মত। তিন, সুন্দর সৃষ্টি: মিনহালের মত। চার, মনযিল: আবু উবাইদা ও ইয়াহইয়া ইবন সাল্লামের মত। মাআরিফুল কুরআন বলে, অধিকাংশের মতে বুরূজ বড় বড় তারা, আর তাঁদের মধ্যে ইবন আব্বাস (রাঃ)-এর নামও নেয়। অন্যদের মত হিসেবে জানায়, এগুলো আকাশে প্রহরী ফেরেশতাদের জন্য রাখা প্রাসাদ। ফলে তাবারী ও কুরতুবী ইবন আব্বাস (রাঃ) থেকে প্রাসাদের মত আনেন, আর ইবন কাসীর ও মাআরিফ তাঁকে রাখেন তারার মতে। এই অমিলটা এখানে লিখে রাখা হলো, মীমাংসা করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Raised High Above the Earth",
          "bn": "মাটি থেকে অনেক উঁচুতে"
        },
        "p": [
          {
            "en": "At-Tabari's own preference is that the sky with the buruj means the sky with the stations of the sun and the moon. His reason is the word itself. Buruj is the plural of burj, and buruj are dwellings built high and raised above the ground. He finds the same sense in 4:78, wa-law kuntum fi burujin mushayyadatin, even if you were in lofty towers. So here the buruj are stations raised high in the sky. Ibn Kathir, in Arabic and in the English abridgment, reports this as the view Ibn Jarir, that is at-Tabari, chose.",
            "bn": "তাবারীর নিজের পছন্দের মত হলো, বুরূজওয়ালা আকাশ মানে সূর্য ও চাঁদের মনযিলওয়ালা আকাশ। তাঁর যুক্তি শব্দটির ভেতরেই। বুরূজ হলো বুরজের বহুবচন, আর বুরজ এমন বাসস্থান যা মাটি থেকে অনেক উঁচুতে তুলে বানানো হয়। একই অর্থ তিনি খুঁজে পান ৪:৭৮ আয়াতে: ওয়া লাও কুনতুম ফী বুরূজিম মুশাইয়াদাহ, যদি তোমরা সুউচ্চ মজবুত দুর্গেও থাকো। তাই এখানে বুরূজ হলো আকাশে উঁচুতে তোলা মনযিল। ইবন কাসীর আরবি তাফসীরে এবং তার ইংরেজি সংক্ষেপেও জানান যে ইবন জারীর, অর্থাৎ তাবারী, এই মতই বেছে নিয়েছিলেন।"
          },
          {
            "en": "At-Tabari then gives a count. The stations are twelve. The moon travels through each of them in two days and a third, which makes 28 stations, and then it is hidden for two nights; the sun travels through each in a month. Ibn Kathir repeats the same figures when he reports at-Tabari's choice. Al-Qurtubi gives them under the view of Abu 'Ubayda and Yahya ibn Sallam, and calls the twelve the stations of the stars, the sun and the moon. He adds that in the speech of the Arabs buruj means palaces, citing the same 4:78.",
            "bn": "এরপর তাবারী একটা হিসাব দেন। মনযিল বারোটি। প্রতিটি পার হতে চাঁদের লাগে দুই দিন আর এক দিনের তিন ভাগের এক ভাগ। এভাবে মনযিল দাঁড়ায় ২৮টিতে, তারপর দুই রাত চাঁদ লুকিয়ে থাকে। আর সূর্য প্রতিটি পার হয় এক মাসে। ইবন কাসীর তাবারীর পছন্দের কথা বলতে গিয়ে একই সংখ্যাগুলো দেন। কুরতুবী সংখ্যাগুলো আনেন আবু উবাইদা ও ইয়াহইয়া ইবন সাল্লামের মতের অধীনে, আর বারোটিকে বলেন তারা, সূর্য ও চাঁদের মনযিল। তিনি যোগ করেন, আরবদের ভাষায় বুরূজ মানে প্রাসাদ, এবং প্রমাণ হিসেবে সেই ৪:৭৮ আয়াতই আনেন।"
          },
          {
            "en": "Two of the shorter commentaries keep to the stations and say what they point to. Al-Muyassar explains the verse as an oath by the sky with the stations through which the sun and the moon pass. As-Sa'di reads the buruj as stations that include those of the sun and the moon, and the stars set in order in their courses, in the most perfect arrangement and order. That order, he says, points to the perfection of Allah's power and His mercy, and to the breadth of His knowledge and His wisdom.",
            "bn": "ছোট দুটি তাফসীর মনযিলের অর্থই ধরে রাখে, আর বলে দেয় এগুলো কীসের দিকে ইশারা করে। মুয়াসসার আয়াতটির ব্যাখ্যা দেয় এভাবে: সেই আকাশের শপথ, যার মনযিলগুলো দিয়ে সূর্য ও চাঁদ চলাচল করে। সা'দী বুরূজের অর্থ করেন মনযিল, যার মধ্যে আছে সূর্য ও চাঁদের মনযিলও, আর আছে নিজ নিজ কক্ষপথে নিয়ম মেনে সাজানো তারাগুলো, সবচেয়ে নিখুঁত বিন্যাস ও শৃঙ্খলায়। তাঁর মতে এই শৃঙ্খলা আল্লাহর কুদরত ও রহমতের পূর্ণতার দিকে ইশারা করে, ইশারা করে তাঁর ইলম ও হিকমতের বিশালতার দিকেও।"
          }
        ]
      },
      {
        "h": {
          "en": "Twelve Names, No Fortunes",
          "bn": "বারোটি নাম, ভাগ্যগণনা নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi goes further than the others and lists the twelve by name, beginning with al-Hamal and ending with al-Hut. That list is his gloss for the word, under the view that the buruj are stations, and nothing more is built on it here. None of the texts consulted on this verse treats the buruj as a source of knowledge about people's fortunes or as an influence on what happens to them, and this article derives no knowledge of fortune and no influence from them.",
            "bn": "কুরতুবী অন্যদের চেয়ে আরও এগিয়ে বারোটির নাম ধরে ধরে তালিকা দেন, শুরু আল-হামাল দিয়ে, শেষ আল-হূত দিয়ে। বুরূজ মানে মনযিল, এই মতের অধীনে শব্দটির ব্যাখ্যা হিসেবেই তিনি তালিকাটি দেন। এর উপর এখানে আর কিছু দাঁড় করানো হয়নি। এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই বুরূজকে মানুষের ভাগ্য জানার উৎস বলে না, মানুষের জীবনে এর কোনো প্রভাবের কথাও বলে না। এই লেখাও এগুলো থেকে ভাগ্য সম্পর্কে কোনো জ্ঞান বা কোনো প্রভাব বের করে না।"
          },
          {
            "en": "Ma'arif al-Qur'an takes up the twelve divisions more critically. It reports that some later commentators chose the astronomical view, in which the sky is divided into twelve parts, each called a burj, and that the ancient philosophers held the fixed stars to be set in these divisions. It calls that view absolutely incorrect. Citing al-Mazhari, it says the Qur'an does not describe the stars and planets as fixed in the skies, and points to 36:40, wa-kullun fi falakin yasbahun, each floats in an orbit, taking falak there to mean the orbit and not the sky.",
            "bn": "মাআরিফুল কুরআন বারো ভাগের প্রসঙ্গটা আরও সমালোচনার চোখে দেখে। জানায়, পরের যুগের কিছু তাফসীরকার জ্যোতির্বিদ্যার একটি মত নিয়েছিলেন, যেখানে আকাশকে বারোটি ভাগে ভাগ করা হয়, আর প্রতিটি ভাগের নাম বুরজ। প্রাচীন দার্শনিকেরা মনে করতেন, স্থির তারাগুলো এই ভাগগুলোতে গেঁথে আছে। মাআরিফ এ মতকে সম্পূর্ণ ভুল বলে। মাযহারীর বরাতে বলে, কুরআন তারা ও গ্রহগুলোকে আকাশে গেঁথে রাখা বলে বর্ণনা করে না। প্রমাণ হিসেবে আনে ৩৬:৪০: ওয়া কুল্লুন ফী ফালাকিই ইয়াসবাহূন, প্রত্যেকে নিজ কক্ষপথে ভেসে চলে। সেখানে ফালাক মানে আকাশ নয়, কক্ষপথ।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Oath Comes to Rest",
          "bn": "শপথ কোথায় গিয়ে থামে"
        },
        "p": [
          {
            "en": "Where is the jawab, the answer this oath is sworn upon? At-Tabari sets out the disagreement in his commentary filed under 85:4. Qatada said the oath falls on 85:12, inna batsha rabbika la-shadid, indeed the seizing of your Lord is severe. A Basran grammarian placed it on qutila ashabu al-ukhdud in 85:4, with the lam of the answer understood, as in 91:1 and 91:9, or else read the order as reversed. A Kufan grammarian noted that in tafsir the answer is said to be qutila, just as qad aflaha answers the oath of 91:1.",
            "bn": "যে কথার উপর এই শপথ, সেই জাওয়াব বা জবাব কোথায়? তাবারী এ নিয়ে মতভেদটা তুলে ধরেন ৮৫:৪-এর অধীনে রাখা তাঁর আলোচনায়। কাতাদা বলেন, শপথ গিয়ে পড়েছে ৮৫:১২-এ: ইন্না বাতশা রব্বিকা লাশাদীদ, নিশ্চয়ই আপনার রবের পাকড়াও বড় কঠিন। বসরার এক ব্যাকরণবিদ জবাব ধরেছেন ৮৫:৪-এর কুতিলা আসহাবুল উখদূদকে। তাঁর মতে জবাবের লাম এখানে উহ্য, যেমন ৯১:১ ও ৯১:৯-এ। অথবা বাক্যের ক্রম উল্টে পড়তে হবে। কুফার এক ব্যাকরণবিদ জানান, তাফসীরে বলা হয় জবাব হলো কুতিলা, ঠিক যেমন ৯১:১-এর শপথের জবাব কাদ আফলাহা।"
          },
          {
            "en": "The same Kufan grammarian then raised a difficulty: the Arabs, he said, were not found to leave an oath without a lam, or la, or inna, or ma introducing its answer, so this looks like a case where the answer is left out and the statement begins afresh. At-Tabari makes that his own preference. The answer is left unstated, he says, and what follows is a new statement, because the Arabs do not drop the sign of the answer when they do answer an oath. On this reading qutila, in 85:4, opens a new sentence rather than completing the oath.",
            "bn": "কুফার সেই ব্যাকরণবিদ এরপর একটা খটকা তোলেন। তাঁর কথায়, শপথের জবাবের শুরুতে লাম, লা, ইন্না বা মা না রেখে আরবরা শপথ ছেড়ে দেয়, এমন দেখা যায় না। তাই মনে হয়, এখানে জবাবটা উহ্য রাখা হয়েছে, আর কথা নতুন করে শুরু হয়েছে। তাবারী এ মতকেই নিজের পছন্দ হিসেবে নেন। তাঁর কথায়, জবাব এখানে উহ্য, পরের কথা নতুন বক্তব্য। কারণ আরবরা যখন শপথের জবাব দেয়, তখন জবাবের চিহ্ন বাদ দেয় না। এই পাঠে ৮৫:৪-এর কুতিলা শপথটি পূর্ণ করে না, বরং নতুন বাক্য শুরু করে।"
          },
          {
            "en": "Al-Qurtubi, also under 85:4, gives a longer list. Al-Farra' held that qutila is the answer with the lam understood, as with qad aflaha in 91:9. Abu Hatim as-Sijistani read the order as reversed, and Ibn al-Anbari called that a mistake. Some made the answer 85:12, which al-Qurtubi calls unsightly because so much speech stands between the two. Some made it 85:10, inna alladhina fatanu. And some said the answer is omitted, meaning: by the sky with the buruj, you will surely be raised. That was Ibn al-Anbari's choice.",
            "bn": "কুরতুবীও ৮৫:৪-এর অধীনে আরও লম্বা তালিকা দেন। ফাররার মতে কুতিলাই জবাব, লাম উহ্য, যেমন ৯১:৯-এর কাদ আফলাহা। আবু হাতিম সিজিস্তানী বাক্যের ক্রম উল্টে পড়েছেন, আর ইবনুল আনবারী একে ভুল বলেছেন। কেউ কেউ জবাব ধরেছেন ৮৫:১২-কে। কুরতুবী এ মতকে বলেন দৃষ্টিকটু, কারণ দুইয়ের মাঝে অনেক কথা এসে গেছে। কেউ জবাব ধরেছেন ৮৫:১০-এর ইন্নাল্লাযীনা ফাতানূকে। আবার কেউ বলেছেন, জবাব উহ্য রাখা হয়েছে, অর্থাৎ বুরূজওয়ালা আকাশের শপথ, তোমাদের অবশ্যই আবার ওঠানো হবে। ইবনুল আনবারী এই মতটিই বেছে নিয়েছিলেন।"
          },
          {
            "en": "As-Sa'di, in the words that open his comment on 85:4, gives a different kind of answer. What is sworn upon, he says, is what the oath itself contains of Allah's dazzling signs, His evident wisdom and His vast mercy. It is also said, he adds, that the thing sworn upon is qutila ashabu al-ukhdud, which he reads as a prayer against them for destruction. These views are kept side by side here, and none is chosen. The entry on 91:9 discusses an oath whose answer is plainly stated; here the answer is debated.",
            "bn": "সা'দী ৮৫:৪-এর আলোচনার শুরুতে ভিন্ন ধরনের এক জবাব দেন। তাঁর মতে, যে কথার উপর শপথ, তা শপথটির ভেতরেই আছে: আল্লাহর চোখ-ধাঁধানো নিদর্শন, তাঁর প্রকাশ্য হিকমত আর তাঁর বিশাল রহমত। তিনি এ-ও জানান, কারও কারও মতে শপথের বিষয় হলো কুতিলা আসহাবুল উখদূদ। সা'দীর কাছে এ বাক্য তাদের বিরুদ্ধে ধ্বংসের বদদোয়া। এখানে মতগুলো পাশাপাশি রাখা হলো, কোনোটিকে বেছে নেওয়া হলো না। ৯১:৯ আয়াতের আলোচনায় এমন এক শপথের কথা আছে, যার জবাব স্পষ্ট করে বলা। এখানে জবাবটাই মতভেদের বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "An Oath That Is His Alone",
          "bn": "এ শপথ কেবল তাঁরই"
        },
        "p": [
          {
            "en": "Al-Muyassar, explaining these opening oaths, adds a rule. Allah, glorified is He, swears by whatever He wills of His creatures; as for the creature, it is not permitted for him to swear by other than Allah, for swearing by other than Allah is shirk. The sky with its buruj is therefore something Allah swears by and the believer does not. The oath turns the listener's eyes to the sky as a sign of its Maker, while the believer's own oaths remain by Allah alone.",
            "bn": "মুয়াসসার শুরুর এই শপথগুলোর ব্যাখ্যায় একটি বিধান যোগ করে। পবিত্র আল্লাহ তাঁর সৃষ্টির যার ইচ্ছা তার শপথ করেন। কিন্তু সৃষ্টির জন্য আল্লাহ ছাড়া অন্য কিছুর কসম খাওয়া জায়েজ নয়, কারণ আল্লাহ ছাড়া অন্য কিছুর কসম খাওয়া শিরক। তাই বুরূজওয়ালা আকাশের শপথ আল্লাহ করেন, মু'মিন করে না। শপথটি শ্রোতার চোখ আকাশের দিকে ফেরায়, তার স্রষ্টার নিদর্শন হিসেবে। আর মু'মিনের নিজের কসম থাকে কেবল আল্লাহর নামে।"
          },
          {
            "en": "No tafsir consulted here attaches a hadith of the Prophet ﷺ to the meaning of 85:1. Something else needs saying plainly. 85:4, named above only as a candidate answer to the oath, describes what its own text describes, and it licenses nothing against any living person or community. The readings in this article are each source's own and are reported as such, with no choice made between them.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই ৮৫:১-এর অর্থের সঙ্গে নবী ﷺ-এর কোনো হাদিস জুড়ে দেয়নি। আরেকটি কথা সোজাসুজি বলা দরকার। ৮৫:৪ আয়াতের নাম এখানে এসেছে শুধু শপথের সম্ভাব্য জবাব হিসেবে। আয়াতটি তার নিজের ভাষায় যা বলে, শুধু তা-ই বলে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। এ লেখায় যত অর্থ এসেছে, প্রতিটি তার নিজ সূত্রের, আর সেভাবেই জানানো হয়েছে। কোনোটিকে বেছে নেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Up Before Reading On",
          "bn": "পড়ার আগে চোখ তুলে দেখা"
        },
        "p": [
          {
            "en": "Something stands out when the readings are laid side by side, though none of the commentators consulted draws it out in these words. Nearly every gloss looks up at something raised, ordered or guarded: palaces in the sky, posts for the guards, stations counted out in days and months, great stars, a beautiful creation. The surah sets all of this before its listener first, and only afterwards speaks of what people did below. Whatever its answer is taken to be, the sky is the first thing named.",
            "bn": "অর্থগুলো পাশাপাশি রাখলে একটা জিনিস চোখে পড়ে, যদিও যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই ঠিক এ ভাষায় কথাটা বলেনি। প্রায় প্রতিটি ব্যাখ্যা চোখ তোলে উঁচু, সুবিন্যস্ত বা পাহারা দেওয়া কিছুর দিকে। আকাশের প্রাসাদ, প্রহরীদের চৌকি, দিন আর মাসে গোনা মনযিল, বড় বড় তারা, সুন্দর সৃষ্টি। সূরাটি এসব আগে শ্রোতার সামনে রাখে, তারপর বলে নিচে মানুষ কী করেছিল। শপথের জবাব যেটাই ধরা হোক, প্রথম নামটি আকাশের।"
          },
          {
            "en": "For the reader, this makes the first verse of al-Buruj an invitation to look before reading on. As-Sa'di's reading gives the reason: the order of the courses points to Allah's power and mercy, His knowledge and His wisdom. A person can see the sky many times a day without seeing any of that. To read 85:1 well is to stop for a moment, notice the regular passage of the sun and the moon, and let that order say who keeps them in their places, before the surah turns to anything else.",
            "bn": "তাই পাঠকের জন্য আল-বুরূজের প্রথম আয়াত এক আমন্ত্রণ: সামনে পড়ার আগে একবার চোখ তুলে তাকান। কেন, তা সা'দীর ব্যাখ্যায় আছে। কক্ষপথে চলার এই শৃঙ্খলা আল্লাহর কুদরত ও রহমত, তাঁর ইলম ও হিকমতের দিকে ইশারা করে। দিনে বহুবার আকাশ দেখেও মানুষের চোখে এর কিছুই না পড়তে পারে। ৮৫:১ ঠিকভাবে পড়া মানে, সূরা অন্য কথায় যাওয়ার আগেই এক মুহূর্ত থামা। সূর্য আর চাঁদের নিয়মিত আসা-যাওয়া খেয়াল করা। তারপর সেই শৃঙ্খলাকেই বলতে দেওয়া, কে এদের নিজ নিজ জায়গায় ধরে রেখেছেন।"
          },
          {
            "en": "It also guards against two misreadings. The first treats the sky as a puzzle and goes looking for fortunes in it; the commentators here count stations and do not read fates. The second passes over the oath as decoration before the story, yet at-Tabari and al-Qurtubi argue at length over where it lands. The disagreement over the answer stays open here. What does not depend on it is the sky itself, named first, as a witness the listener could see every night.",
            "bn": "এ আয়াত দুটি ভুল পাঠ থেকেও সাবধান করে। প্রথম ভুল আকাশকে ধাঁধা বানিয়ে তাতে ভাগ্য খোঁজা। এখানকার তাফসীরকারেরা মনযিল গোনেন, কারও ভাগ্য পড়েন না। দ্বিতীয় ভুল শপথটিকে কাহিনির আগের সাজসজ্জা ভেবে পাশ কাটিয়ে যাওয়া। অথচ শপথ কোথায় গিয়ে পড়ে, তা নিয়ে তাবারী ও কুরতুবী অনেক কথা বলেছেন। জবাব নিয়ে মতভেদ এখানে খোলাই থাকল। কিন্তু আকাশ নিজে এ মতভেদের উপর নির্ভর করে না। সবার আগে তারই নাম, এমন এক সাক্ষী হিসেবে, যাকে শ্রোতা প্রতি রাতে দেখতে পায়।"
          }
        ]
      }
    ]
  },
  "85:10": {
    "sections": [
      {
        "h": {
          "en": "Eight Words, Then Six",
          "bn": "আট শব্দ, তারপর ছয়"
        },
        "p": [
          {
            "en": "Inna alladhina fatanu al-mu'minina wa-l-mu'minati thumma lam yatubu fa-lahum 'adhabu jahannama wa-lahum 'adhabu al-hariq: indeed, those who put the believing men and believing women to fitnah, then did not repent, for them is the punishment of Hell, and for them is the punishment of burning. The verse is fourteen Arabic words. The first eight name a deed and a condition. The last six give the outcome in two matching halves of three words each, lahum 'adhab and lahum 'adhab, so that two punishments stand side by side.",
            "bn": "ইন্নাল্লাযীনা ফাতানুল মু'মিনীনা ওয়াল মু'মিনাতি সুম্মা লাম ইয়াতূবূ ফালাহুম 'আযাবু জাহান্নামা ওয়ালাহুম 'আযাবুল হারীক: যারা মুমিন পুরুষ ও মুমিন নারীদের ফিতনায় ফেলেছে, তারপর তওবা করেনি, তাদের জন্য আছে জাহান্নামের শাস্তি, আর তাদের জন্য আছে দগ্ধ হওয়ার শাস্তি। আয়াতটি চৌদ্দটি আরবি শব্দের। প্রথম আটটি শব্দে একটি কাজ আর একটি শর্ত। শেষ ছয়টি শব্দে পরিণাম, দুটি জোড়া অংশে, প্রতিটিতে তিনটি করে শব্দ: লাহুম 'আযাব, আবার লাহুম 'আযাব। ফলে দুটি শাস্তি পাশাপাশি দাঁড়িয়ে যায়।"
          },
          {
            "en": "The verse comes straight after the passage on the Companions of the Ditch, 85:4 to 85:9, which this entry does not retell. Those verses describe the fire, the ones who sat beside it as witnesses to what they were doing, and the single grievance they held against the believers: that they believed in Allah, the Mighty, the Praiseworthy. Verse 85:10 turns from that scene to a ruling. The sections below set out what the commentators say about its three parts: the deed, the condition, and the two punishments.",
            "bn": "আয়াতটি এসেছে আসহাবুল উখদূদ বা গর্তওয়ালাদের প্রসঙ্গের ঠিক পরে, ৮৫:৪ থেকে ৮৫:৯ আয়াতে। সেই কাহিনি এখানে আবার বলা হবে না। ওই আয়াতগুলোতে আছে আগুনের কথা, আগুনের পাশে বসে থাকা লোকদের কথা, যারা নিজেদের কাজের সাক্ষী ছিল। আর আছে মুমিনদের বিরুদ্ধে তাদের একমাত্র আপত্তির কথা: তাঁরা মহাপরাক্রমশালী, প্রশংসিত আল্লাহর উপর ঈমান এনেছিলেন। ৮৫:১০ আয়াত সেই দৃশ্য থেকে সরে এসে একটি বিধান শোনায়। নিচের অংশগুলোতে আয়াতের তিনটি ভাগ নিয়ে তাফসীরকারদের কথা তুলে ধরা হলো: কাজটি, শর্তটি, আর দুটি শাস্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Burned, Tormented, Put to Trial",
          "bn": "পুড়িয়েছে, নির্যাতন করেছে, পরীক্ষায় ফেলেছে"
        },
        "p": [
          {
            "en": "At-Tabari explains fatanu as ibtalaw: they put the believing men and women to trial over their faith in Allah by tormenting them and burning them with fire. He adds that the people of interpretation said much the same, and gives their words with chains. From Ibn 'Abbas: they burned the believing men and believing women. From Qatadah: they burned them with fire. From ad-Dahhak and from Ibn Abza: they burned them. From Mujahid the word is different: 'adhdhabu, they tormented. At-Tabari's own wording keeps both, torment and burning, side by side.",
            "bn": "তাবারী ফাতানূর ব্যাখ্যা দেন ইবতালাও দিয়ে: আল্লাহর উপর ঈমানের কারণে তারা মুমিন পুরুষ ও নারীদের পরীক্ষায় ফেলেছে, তাঁদের নির্যাতন করে আর আগুনে পুড়িয়ে। তিনি জানান, ব্যাখ্যাকারেরা প্রায় এ কথাই বলেছেন, আর সনদসহ তাঁদের কথা তুলে দেন। ইবন আব্বাস থেকে: তারা মুমিন পুরুষ ও মুমিন নারীদের পুড়িয়েছে। কাতাদাহ থেকে: তাঁদের আগুনে পুড়িয়েছে। দাহহাক আর ইবন আবযা থেকে: তাঁদের পুড়িয়েছে। মুজাহিদ থেকে আসা শব্দটি আলাদা: 'আযযাবূ, তারা নির্যাতন করেছে। তাবারীর নিজের ব্যাখ্যায় দুটোই পাশাপাশি আছে, নির্যাতন আর পোড়ানো।"
          },
          {
            "en": "Ibn Kathir gives a single gloss, harraqu, they burned, and names those who said it: Ibn 'Abbas, Mujahid, Qatadah, ad-Dahhak and Ibn Abza. So Mujahid appears in Ibn Kathir's list for burning, while at-Tabari's chain from Mujahid reports tormenting. The two do not clash, but they are not the same word. Al-Baghawi joins them: 'adhdhabu wa-ahraqu, they tormented and burned. The Muyassar says they burned them with fire to turn them away from Allah's religion. Ma'arif al-Qur'an translates fatanu as persecuted, a broader English word that leaves the means unstated, though its commentary goes on to speak of the fire pit.",
            "bn": "ইবন কাসীর একটিই অর্থ দেন, হাররাকূ, তারা পুড়িয়েছে। কারা এ কথা বলেছেন, তাও জানান: ইবন আব্বাস, মুজাহিদ, কাতাদাহ, দাহহাক ও ইবন আবযা। অর্থাৎ ইবন কাসীরের তালিকায় মুজাহিদের নাম পোড়ানোর পক্ষে, অথচ তাবারীর সনদে মুজাহিদের কথা নির্যাতন। দুটি কথার মধ্যে বিরোধ নেই, তবে শব্দ এক নয়। বাগাভী দুটোকে একসঙ্গে বলেন: 'আযযাবূ ওয়া আহরাকূ, নির্যাতন করেছে আর পুড়িয়েছে। মুয়াসসার বলে, আল্লাহর দ্বীন থেকে ফেরাতে তারা তাঁদের আগুনে পুড়িয়েছে। মাআরিফুল কুরআন ফাতানূর ইংরেজি করেছে persecuted, অর্থাৎ নিপীড়ন করেছে। ইংরেজি শব্দটির পরিসর বড়, উপায়ের কথা তাতে নেই, যদিও তার ব্যাখ্যা পরে আগুনের গর্তের কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Coin in the Furnace",
          "bn": "চুল্লিতে ফেলা দিনার"
        },
        "p": [
          {
            "en": "Al-Qurtubi also reads fatanu as they burned them with fire, and then shows where that sense sits in Arabic usage. The Arabs say fatana so-and-so the dirham or the dinar when he puts it into the furnace to see how good it is, and such a coin is called maftun. The goldsmith is called al-fattan, and so is Shaytan. Wariq fatin means burnt silver. A harra, a tract of black stone, is also called fatin, as though its stones had been burned by fire, because of their blackness.",
            "bn": "কুরতুবীও ফাতানূর অর্থ করেন, তাঁদের আগুনে পুড়িয়েছে। তারপর দেখান, আরবদের ভাষায় এই অর্থের শিকড় কোথায়। কেউ দিরহাম বা দিনার কতটা খাঁটি তা দেখতে চুল্লিতে ঢোকালে আরবরা বলে, ফাতানা ফুলানুন। এমন মুদ্রাকে বলে মাফতূন। স্বর্ণকারকে বলা হয় আল-ফাত্তান, শয়তানকেও তাই বলা হয়। ওয়ারিক ফাতীন মানে পোড়া রুপা। কালো পাথরে ঢাকা এলাকা, যাকে হাররা বলে, সেটাকেও ফাতীন বলা হয়। পাথরগুলো এত কালো যে মনে হয় আগুনে পোড়ানো।"
          },
          {
            "en": "Al-Baghawi makes the same link more briefly: one says fatantu al-shay' when one has burned the thing. As a parallel he cites 51:13, yawma hum 'ala al-nari yuftanun, where the same verb is used of people over the Fire. With al-Qurtubi's coin and furnace in mind, the verb in 85:10 holds testing and burning together: a metal is tried by fire, and in this passage people were tried over their faith by fire. The commentators keep both senses in view and do not drop either.",
            "bn": "বাগাভী একই সম্পর্ক দেখান আরও ছোট করে: কোনো জিনিস পুড়িয়ে ফেললে বলা হয় ফাতানতুশ শাই'। এর নজির হিসেবে তিনি আনেন ৫১:১৩ আয়াত, ইয়াওমা হুম 'আলান নারি ইউফতানূন। সেখানে একই ক্রিয়া এসেছে আগুনের উপর থাকা মানুষদের প্রসঙ্গে। কুরতুবীর মুদ্রা আর চুল্লির ছবি মাথায় রাখলে ৮৫:১০ আয়াতের ক্রিয়ায় পরীক্ষা আর পোড়ানো একসঙ্গে ধরা দেয়। ধাতুকে যাচাই করা হয় আগুনে। আর এই প্রসঙ্গে মানুষকে তাদের ঈমানের জন্য পরীক্ষা করা হয়েছিল আগুন দিয়েই। তাফসীরকারেরা দুটি অর্থই সামনে রাখেন, কোনোটি বাদ দেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Read Within Its Setting",
          "bn": "প্রসঙ্গের ভেতরে পড়া"
        },
        "p": [
          {
            "en": "The verse names both al-mu'minin and al-mu'minat, believing men and believing women. Several commentators read it directly against the scene before it. Al-Qurtubi says the persecutors did not repent despite the signs and clear proofs Allah had shown the tyrant king and his people at the hands of the boy, whose story belongs to 85:4 onward. Al-Baghawi's second report ties the burning to the ditch itself. Ma'arif says the verse describes the torment of the wrongdoers who burned the Muslims in the fire pit only on account of their faith.",
            "bn": "আয়াতটি আল-মু'মিনীন ও আল-মু'মিনাত, মুমিন পুরুষ ও মুমিন নারী, দুই দলের নামই নিয়েছে। কয়েকজন তাফসীরকার আয়াতটি পড়েন ঠিক আগের দৃশ্যের সঙ্গে মিলিয়ে। কুরতুবী বলেন, জালিম রাজা আর তার লোকদের আল্লাহ সেই বালকের হাতে অনেক নিদর্শন ও স্পষ্ট প্রমাণ দেখিয়েছিলেন, তবু তারা তওবা করেনি। বালকের কাহিনি ৮৫:৪ আয়াত থেকে শুরু হওয়া অংশের বিষয়। বাগাভীর দ্বিতীয় বর্ণনা পোড়ানোর শাস্তিকে সরাসরি গর্তের সঙ্গে জোড়ে। মাআরিফুল কুরআন বলে, যারা শুধু ঈমানের কারণে মুসলিমদের আগুনের গর্তে পুড়িয়েছিল, আয়াতটি সেই জালিমদের শাস্তির বর্ণনা।"
          },
          {
            "en": "At-Tabari, as-Sa'di and the Muyassar comment on the verse without naming the ditch, and none of the texts consulted here carries the verse over to any other persecutors by name. The one wider point drawn comes from Ma'arif, and it concerns the condition rather than the deed: the clause then did not repent, it says, invites people to repent. So the verse is read in its setting, and what is opened outward is its offer of repentance. The next two sections take that condition, and the remark it drew, in turn.",
            "bn": "তাবারী, সা'দী ও মুয়াসসার এ আয়াতের ব্যাখ্যায় গর্তের নাম নেননি। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই আয়াতটিকে নাম ধরে অন্য কোনো নির্যাতনকারীর উপর টেনে নেয়নি। আয়াত থেকে বড় পরিসরের একটিমাত্র কথা টেনেছে মাআরিফুল কুরআন, আর সেটাও কাজ নিয়ে নয়, শর্ত নিয়ে। তার মতে 'তারপর তওবা করেনি' কথাটি মানুষকে তওবার দিকে ডাকে। তাই আয়াতটি পড়া হয় তার প্রসঙ্গের ভেতরেই। সবার জন্য খোলা থাকে কেবল তওবার ডাকটুকু। পরের দুটি অংশে সেই শর্ত, আর তা নিয়ে করা একটি মন্তব্যের কথা আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Then They Did Not Repent",
          "bn": "তারপর তারা তওবা করেনি"
        },
        "p": [
          {
            "en": "Thumma lam yatubu stands between the deed and the outcome. Ibn Kathir explains it as two things left undone: they did not desist from what they did, and they did not regret what they had done before. At-Tabari names what the repentance would have been from: their disbelief, and what they did to the believing men and women because of their faith in Allah. Al-Qurtubi calls it repentance from their ugly deed, which they withheld despite the signs they had been shown. Ibn Kathir's pair, stopping and regret, sets out what repentance would have asked of them.",
            "bn": "সুম্মা লাম ইয়াতূবূ কথাটির জায়গা কাজ আর পরিণামের মাঝখানে। ইবন কাসীর এর ব্যাখ্যায় দুটি না-করা কাজের কথা বলেন: যা করছিল তা থেকে তারা থামেনি, আর আগে যা করেছে তার জন্য অনুতপ্ত হয়নি। তাবারী বলে দেন কিসের থেকে তওবা করার কথা ছিল। এক, তাদের কুফর। দুই, আল্লাহর উপর ঈমান আনার কারণে মুমিন পুরুষ ও নারীদের সঙ্গে তারা যা করেছে। কুরতুবীর ভাষায় এটি তাদের জঘন্য কাজ থেকে তওবা। এত নিদর্শন দেখানোর পরও তারা সেই তওবা করেনি। ইবন কাসীরের জোড়া কথা, থামা আর অনুতাপ, দেখিয়ে দেয় তওবা তাদের কাছে কী চাইত।"
          },
          {
            "en": "As-Sa'di frames the whole verse before he quotes it: then He promised them, threatened them, and offered them repentance. His verb, 'arada, is to lay something before someone, for them to take up or refuse. In his reading the verse does not only pronounce; it proposes. Ma'arif al-Qur'an calls thumma lam yatubu a restrictive phrase attached to both punishments, so that the torment is for those who did not repent of their deed and did not make tawbah. On both readings the threat is tied to a condition, and the condition is the one part of the verse that the persecutors themselves could still change.",
            "bn": "সা'দী আয়াতটি উদ্ধৃত করার আগেই পুরোটার একটা কাঠামো দিয়ে দেন: তারপর আল্লাহ তাদের ওয়াদা দিলেন, সতর্ক করলেন, আর তাদের সামনে তওবা পেশ করলেন। তাঁর ক্রিয়াটি 'আরাদা, মানে কারও সামনে কিছু পেশ করা, যাতে সে তা নিতে বা ফিরিয়ে দিতে পারে। তাঁর পাঠে আয়াতটি শুধু রায় শোনায় না, প্রস্তাবও দেয়। মাআরিফুল কুরআন সুম্মা লাম ইয়াতূবূকে বলে সীমা টেনে দেওয়া একটি অংশ, যা দুটি শাস্তির সঙ্গেই জুড়ে আছে। অর্থাৎ শাস্তি তাদের জন্য, যারা নিজেদের কাজ থেকে তওবা করেনি। দুই পাঠেই হুমকিটা একটা শর্তে বাঁধা। আর আয়াতের এই শর্তটুকুই নির্যাতনকারীরা নিজেরা তখনো বদলাতে পারত।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Hasan Sees Generosity",
          "bn": "হাসান বসরীর চোখে দানশীলতা"
        },
        "p": [
          {
            "en": "Three of the commentaries consulted here quote one sentence from al-Hasan on this condition. In Ibn Kathir's Arabic it is al-Hasan al-Basri: look at this generosity and munificence, al-karam wa-l-jud; they killed His awliya', His close friends, and He calls them to repentance and forgiveness. As-Sa'di gives it with a fuller description of those killed and a shorter ending: they killed His friends and the people of obedience to Him, and He calls them to repentance. Neither adds a comment of his own to the remark.",
            "bn": "সংগ্রহ করা তিনটি তাফসীর এই শর্ত নিয়ে হাসানের একটি কথা উদ্ধৃত করেছে। ইবন কাসীরের আরবি তাফসীরে কথাটি হাসান বসরীর: এই দয়া আর দানশীলতার দিকে তাকিয়ে দেখুন, আল-কারাম ওয়াল জূদ। তারা তাঁর আউলিয়া, তাঁর প্রিয় বান্দাদের হত্যা করেছে, আর তিনি তাদের ডাকছেন তওবা ও মাগফিরাতের দিকে। সা'দী কথাটি আনেন নিহতদের আরও পূর্ণ পরিচয় দিয়ে, তবে শেষটা ছোট করে: তারা তাঁর প্রিয় বান্দাদের আর তাঁর আনুগত্যকারীদের হত্যা করেছে, আর তিনি তাদের তওবার দিকে ডাকছেন। দুজনের কেউ এর সঙ্গে নিজের মন্তব্য যোগ করেননি।"
          },
          {
            "en": "Ma'arif al-Qur'an cites the remark from Ibn Kathir, attributing it to Hasan, in these words: they burned Allah's friends alive, yet He invites them towards repentance and forgiveness. The versions differ in small ways, killed in two and burned in the third, with forgiveness named in two and not in the third, and each is reported here as its source gives it. All three keep the point al-Hasan drew: the people who did this are still the people the verse calls back. The variants are small, but anyone quoting the remark should know which wording comes from where.",
            "bn": "মাআরিফুল কুরআন কথাটি ইবন কাসীর থেকে উদ্ধৃত করেছে, হাসানের নামে, এই ভাষায়: তারা আল্লাহর প্রিয় বান্দাদের জীবন্ত পুড়িয়েছে, তবু তিনি তাদের তওবা ও মাগফিরাতের দিকে ডাকছেন। তিন ভাষ্যে ছোটখাটো পার্থক্য আছে। দুটিতে হত্যা, তৃতীয়টিতে পোড়ানো। দুটিতে মাগফিরাতের উল্লেখ আছে, তৃতীয়টিতে নেই। এখানে প্রতিটি ভাষ্য তার উৎসে যেমন আছে তেমনই তুলে দেওয়া হলো। তিনটিতেই হাসানের মূল কথাটি অটুট: যারা এই কাজ করেছে, আয়াত এখনো তাদেরকেই ফিরে আসতে ডাকছে। পার্থক্যগুলো ছোট, তবু কথাটি উদ্ধৃত করতে চাইলে কোন ভাষ্য কোথা থেকে এসেছে, তা জানা থাকা ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "Hell, and the Burning",
          "bn": "জাহান্নাম আর দহন"
        },
        "p": [
          {
            "en": "Why name two punishments? At-Tabari answers by time: the punishment of Jahannam is in the hereafter, and the punishment of al-hariq is in this world, and he reports the same from al-Rabi'. On his reading, then, the two halves of the verse point to two different times. Al-Qurtubi's first view is close: Hell for their disbelief, and the burning in this world for their burning the believers with fire, which he says was reported earlier from Ibn 'Abbas. Al-Baghawi first gives Hell for their disbelief and the burning for what they burned of the believers.",
            "bn": "দুটি শাস্তির কথা আলাদা করে কেন? তাবারী উত্তর দেন সময় দিয়ে: জাহান্নামের শাস্তি আখিরাতে, আর হারীক বা দহনের শাস্তি দুনিয়াতে। রাবী থেকেও তিনি একই কথা বর্ণনা করেন। তাঁর পাঠে তাহলে আয়াতের দুই অংশ দুই ভিন্ন সময়ের দিকে ইঙ্গিত করে। কুরতুবীর প্রথম মত এর কাছাকাছি: জাহান্নাম তাদের কুফরের জন্য, আর দুনিয়ার দহন মুমিনদের আগুনে পোড়ানোর জন্য। তিনি জানান, এ কথা ইবন আব্বাস থেকে আগেই বর্ণিত হয়েছে। বাগাভীও প্রথমে বলেন, জাহান্নাম তাদের কুফরের কারণে, আর দহন মুমিনদের পোড়ানোর কারণে।"
          },
          {
            "en": "Al-Baghawi then adds a report from al-Rabi' ibn Anas and al-Kalbi: in this world Allah burned them with the very fire they had used on the believers, which rose up to them out of the ditch. Ma'arif al-Qur'an also mentions a worldly reading, as narrated in some reports, and relays from Tafsir Mazhari that the fire spread through the city and burned those who had been watching. Its first reading, though, treats the second sentence as explaining and emphasising the first: eternal torment of fire in Hell.",
            "bn": "এরপর বাগাভী রাবী ইবন আনাস ও কালবীর একটি বর্ণনা আনেন: যে আগুনে তারা মুমিনদের পুড়িয়েছিল, দুনিয়াতেই আল্লাহ সেই আগুন দিয়ে তাদের পুড়িয়েছেন। আগুন গর্ত থেকে উঠে তাদের কাছে পৌঁছে গিয়েছিল। মাআরিফুল কুরআনও কিছু বর্ণনার বরাতে দুনিয়ার শাস্তির একটি পাঠ উল্লেখ করে। তাফসীরে মাযহারী থেকে সে জানায়, আগুন শহরজুড়ে ছড়িয়ে পড়ে আর যারা দাঁড়িয়ে দেখছিল তাদের পুড়িয়ে দেয়। তবে তার প্রথম পাঠে দ্বিতীয় বাক্যটি প্রথমটিরই ব্যাখ্যা ও জোর: জাহান্নামের আগুনে চিরস্থায়ী শাস্তি।"
          },
          {
            "en": "Al-Qurtubi records more views under it was said. In one, the burning is in the hereafter too, a punishment added to the one for disbelief, because they burned the believers. In another, al-Hariq is one of the names of Jahannam, like al-Sa'ir; the Fire has levels and kinds, and several names. He adds that it is as though they are punished in Jahannam with zamharir, its bitter cold, and then with the burning: the first by its cold, the second by its heat. Ibn Kathir gives no timing but states a principle: the recompense is of the same kind as the deed.",
            "bn": "কুরতুবী 'বলা হয়েছে' বলে আরও কয়েকটি মত আনেন। একটি মতে দহনও আখিরাতে, কুফরের শাস্তির উপর বাড়তি শাস্তি, কারণ তারা মুমিনদের পুড়িয়েছিল। আরেক মতে আল-হারীক জাহান্নামেরই একটি নাম, যেমন আস-সা'ঈর। আগুনের নানা স্তর আর নানা ধরন আছে, তার নামও অনেক। তিনি আরও বলেন, যেন জাহান্নামে তাদের প্রথমে যামহারীর, অর্থাৎ তীব্র ঠান্ডা দিয়ে শাস্তি দেওয়া হবে, তারপর দহন দিয়ে। প্রথমটি তার শীতলতার শাস্তি, দ্বিতীয়টি তার উত্তাপের। ইবন কাসীর সময়ের কথা বলেন না, বলেন একটি নীতির কথা: প্রতিদান হয় কাজের ধরন অনুযায়ী।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ruling, Not a Map",
          "bn": "বিধান, কোনো মানচিত্র নয়"
        },
        "p": [
          {
            "en": "As-Sa'di and the Muyassar gloss al-hariq as the severe, scorching punishment, and the Muyassar places Hell in the hereafter. Between them the commentators give several answers on one fire or two, and this article chooses none. One thing must be said plainly. The verse speaks only of what it names: a condemned group that persecuted believing men and women, and the punishment named for them if they did not repent. It licenses nothing against any living person or community, and gives no warrant for assigning anyone's fate today.",
            "bn": "সা'দী ও মুয়াসসার আল-হারীকের অর্থ করেন কঠিন, দগ্ধ করা শাস্তি। মুয়াসসার জাহান্নামকে রাখে আখিরাতে। আগুন একটি না দুটি, এ নিয়ে তাফসীরকারেরা মিলে কয়েক রকম উত্তর দিয়েছেন। এই লেখা কোনোটিকেই বেছে নিচ্ছে না। একটি কথা অবশ্য সোজাসুজি বলা দরকার। আয়াতটি শুধু ততটুকুই বর্ণনা করে, যতটুকু তার ভাষায় আছে: একটি নিন্দিত দল, যারা মুমিন পুরুষ ও নারীদের উপর নির্যাতন চালিয়েছিল, আর তওবা না করলে তাদের জন্য নির্ধারিত শাস্তি। জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে আয়াতটি কোনো কিছুরই অনুমতি দেয় না। আজকের কারও পরিণাম ঠিক করে দেওয়ার অধিকারও কাউকে দেয় না।"
          },
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith to it. The long narration of the boy and the king that Ibn Kathir brings belongs with 85:4, where his commentary on the story begins, and it is left there. It is not repeated here even in summary, so that this entry stays with the ruling rather than the story. Nor does any of them apply the verse to a later conflict or to a people of a later age. The verse that follows, 85:11, has its own entry, and nothing of it is drawn forward here.",
            "bn": "এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীর আয়াতটির সঙ্গে কোনো হাদিস জোড়েনি। বালক ও রাজার যে দীর্ঘ বর্ণনা ইবন কাসীর এনেছেন, তা ৮৫:৪ আয়াতের আলোচনার অংশ, কারণ কাহিনির ব্যাখ্যা তিনি সেখান থেকেই শুরু করেন। তাই বর্ণনাটি সেখানেই থাকল। সংক্ষেপেও তা এখানে আনা হয়নি, যাতে এই আলোচনা কাহিনির বদলে বিধানের উপরই থাকে। কোনো তাফসীর আয়াতটিকে পরবর্তী কোনো সংঘাত বা পরের যুগের কোনো জাতির উপর প্রয়োগও করেনি। পরের আয়াত ৮৫:১১-এর আলোচনা তার নিজের জায়গায়, এখানে সেখান থেকে কিছু টেনে আনা হয়নি।"
          },
          {
            "en": "What the verse asks of a reader is narrower and harder than finding the persecutors in the world. Between the gravest deed in this passage and its punishment stand three words, thumma lam yatubu, and al-Hasan saw generosity in them. A reader can ask whether any harm they have done to another person's faith, by pressure or mockery, large or small, has been met with what Ibn Kathir names: stopping, and regret for what has passed. That question belongs to the reader alone.",
            "bn": "দুনিয়ায় নির্যাতনকারী খুঁজে বের করার চেয়ে আয়াতটি পাঠকের কাছে যা চায়, তার পরিসর ছোট, কিন্তু কাজটা কঠিন। এই অংশের সবচেয়ে বড় অন্যায় আর তার শাস্তির মাঝে দাঁড়িয়ে আছে তিনটি শব্দ, সুম্মা লাম ইয়াতূবূ। হাসান এর মধ্যেই দানশীলতা দেখেছিলেন। পাঠক নিজেকে জিজ্ঞেস করতে পারেন: চাপ দিয়ে বা ঠাট্টা করে, বড় হোক বা ছোট, অন্য কারও ঈমানের যে ক্ষতি আমি করেছি, তার বেলায় কি ইবন কাসীরের বলা দুটি কাজ করেছি? থেমেছি, আর যা হয়ে গেছে তার জন্য অনুতপ্ত হয়েছি? এ প্রশ্ন শুধু পাঠকের নিজের।"
          }
        ]
      }
    ]
  },
  "85:14": {
    "sections": [
      {
        "h": {
          "en": "Two Names, Three Words",
          "bn": "তিন শব্দে দুই নাম"
        },
        "p": [
          {
            "en": "Wa huwa-l-Ghafuru-l-Wadud: and He is the Forgiving, the Loving. Three Arabic words, and two of them are names of Allah set side by side. The verse opens with wa huwa, and He, the pronoun already carried by 85:13: it is He who originates and repeats. So the subject never changes across this run of verses. The Lord whose grip is severe, who begins creation and brings it back, is now named al-Ghafur and al-Wadud. The commentators on this verse spend most of their words on the second name.",
            "bn": "ওয়া হুওয়াল গাফূরুল ওয়াদূদ: আর তিনিই ক্ষমাশীল, প্রেমময়। আরবিতে মাত্র তিনটি শব্দ, তার দুটিই আল্লাহর নাম, পাশাপাশি বসানো। আয়াত শুরু হয় ওয়া হুওয়া দিয়ে, মানে আর তিনি। এই সর্বনাম আগেই এসেছে ৮৫:১৩ আয়াতে: তিনিই প্রথমবার সৃষ্টি করেন, আবার ফিরিয়ে আনেন। তাই এই কয়েকটি আয়াত জুড়ে কর্তা একবারও বদলায় না। যাঁর পাকড়াও কঠিন, যিনি সৃষ্টির সূচনা করেন আর তা আবার ফিরিয়ে আনেন, তাঁকেই এখন ডাকা হচ্ছে আল-গাফূর ও আল-ওয়াদূদ নামে। তাফসীরকারেরা এখানে বেশির ভাগ কথা বলেছেন দ্বিতীয় নামটি নিয়ে।"
          },
          {
            "en": "Al-Wadud is rare in the Qur'an. A search of the Arabic text finds wadud in one other verse only, 11:90, where Shu'ayb (AS) tells his people to ask their Lord's forgiveness and then repent to Him, for my Lord is Merciful and Loving. The commentators explain the name from wudd and mawadda, affection, and as-Sa'di defines mawadda here as pure love, al-mahabba as-safiya. Who loves whom in this name, and in what sense, is a question they answer in more than one way, and the sections below keep their answers apart.",
            "bn": "কুরআনে আল-ওয়াদূদ শব্দটি বিরল। আরবি পাঠে খুঁজলে ওয়াদূদ পাওয়া যায় আর মাত্র একটি আয়াতে, ১১:৯০। সেখানে শুআইব (আঃ) তাঁর কওমকে বলছেন, তোমাদের রবের কাছে ক্ষমা চাও, তারপর তাঁর দিকে তওবা করো, নিশ্চয়ই আমার রব পরম দয়ালু, প্রেমময়। তাফসীরকারেরা নামটি বোঝান উদ্দ ও মাওয়াদ্দাহ, অর্থাৎ ভালোবাসা ও অনুরাগ দিয়ে। সা'দী এখানে মাওয়াদ্দাহর সংজ্ঞা দেন খাঁটি ভালোবাসা, আল-মাহাব্বাতুস সাফিয়াহ। এই নামে কে কাকে ভালোবাসেন, আর কোন অর্থে, তার উত্তর তাঁরা দেন একাধিকভাবে। নিচের অংশগুলো সেই উত্তরগুলো আলাদা আলাদা রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Grip, Then the Pardon",
          "bn": "কঠিন পাকড়াও, তারপর ক্ষমা"
        },
        "p": [
          {
            "en": "The verse stands inside five short verses about Allah, 85:12 to 85:16, which the Muyassar paraphrases as a single unit. In its words: the vengeance of your Lord on His enemies, and His punishment of them, is great and severe; He begins creation and then returns it; He is the Forgiving for whoever repents, abundant in affection and love for His awliya', His friends; Owner of the Throne, the Glorious, who has reached the utmost in bounty and generosity; doer of what He wills, and nothing He wills is withheld from Him.",
            "bn": "আয়াতটি আল্লাহ সম্পর্কে পাঁচটি ছোট আয়াতের মাঝখানে, ৮৫:১২ থেকে ৮৫:১৬। মুয়াসসার এই পাঁচটিকে এক টানে ব্যাখ্যা করে। তার ভাষায়: শত্রুদের উপর তোমার রবের প্রতিশোধ আর তাদের দেওয়া শাস্তি অতি বড়, অতি কঠিন। তিনি সৃষ্টির সূচনা করেন, তারপর তা ফিরিয়ে আনেন। যে তওবা করে তার জন্য তিনি ক্ষমাশীল, আর তাঁর আউলিয়া, অর্থাৎ বন্ধুদের প্রতি তাঁর অনুরাগ ও ভালোবাসা অফুরান। তিনি আরশের মালিক, মহিমান্বিত, দয়া ও মহানুভবতায় যিনি চূড়ান্ত সীমায় পৌঁছেছেন। যা চান তা-ই করেন, তাঁর চাওয়া কোনো কিছুই তাঁকে এড়াতে পারে না।"
          },
          {
            "en": "Ibn Kathir, in the abridged English, reads the same sequence. The severe seizing of 85:12 is His punishment and vengeance upon His enemies who rejected His messengers and opposed His command. 85:13 shows His perfect strength: He begins creation and repeats it just as He began it, without opposition or resistance. Then, at this verse, He forgives the sin of whoever repents to Him and humbles himself before Him. Neither commentator thins out the severity to make room for the forgiveness. Each states both, and each says whom it is for.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও ধারাটি একইভাবে পড়ে। ৮৫:১২ আয়াতের কঠিন পাকড়াও হলো তাঁর সেই শত্রুদের উপর শাস্তি ও প্রতিশোধ, যারা তাঁর রাসূলদের অস্বীকার করেছে আর তাঁর আদেশের বিরোধিতা করেছে। ৮৫:১৩ আয়াত দেখায় তাঁর পূর্ণ শক্তি: তিনি সৃষ্টির সূচনা করেন, তারপর যেমন শুরু করেছিলেন তেমনি আবার তা ফিরিয়ে আনেন, কেউ বাধা দিতে পারে না। তারপর এই আয়াতে: যে তাঁর দিকে তওবা করে আর তাঁর সামনে বিনীত হয়, তিনি তার গুনাহ মাফ করেন। দুজনের কেউই ক্ষমার জায়গা করতে কঠোরতাকে হালকা করেননি। দুটোই বলেছেন, আর কোনটা কার জন্য তা-ও বলেছেন।"
          },
          {
            "en": "On the verses after it, Ibn Kathir explains Owner of the Throne as Owner of the mighty Throne that is above all of creation. He notes that al-Majid in 85:15 is recited in two ways: with a dhamma, as a description of the Lord, or with a kasra, as a description of the Throne, and he says both meanings are correct. On 85:16 he writes that whatever He wants He does, and there is no one who can counter His ruling. The two names of 85:14 are spoken from inside that majesty, not apart from it.",
            "bn": "পরের আয়াতগুলোর ব্যাখ্যায় ইবন কাসীর বলেন, আরশের মালিক মানে সেই বিশাল আরশের মালিক, যা সমস্ত সৃষ্টির উপরে। তিনি জানান, ৮৫:১৫ আয়াতের আল-মাজীদ শব্দটি দুইভাবে পড়া হয়েছে। শেষ অক্ষরে পেশ দিয়ে পড়লে এটি রবের গুণ, যের দিয়ে পড়লে আরশের গুণ। তাঁর মতে দুটি অর্থই সঠিক। ৮৫:১৬ আয়াতে তিনি লেখেন, তিনি যা চান তা-ই করেন, তাঁর ফয়সালা উল্টে দেওয়ার কেউ নেই। ৮৫:১৪ আয়াতের নাম দুটি তাই এই মহিমার ভেতর থেকেই উচ্চারিত, তার বাইরে থেকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Forgiveness Reaches",
          "bn": "ক্ষমা কার কাছে পৌঁছায়"
        },
        "p": [
          {
            "en": "On al-Ghafur, most of the commentators tie the name to repentance. At-Tabari: He is the possessor of forgiveness for whoever repents to Him of his sins, and he adds that the people of interpretation said the same. Ibn Kathir: He forgives the sin of whoever repents to Him and humbles himself before Him, whatever that sin may be. As-Sa'di: He forgives all sins for whoever repents, and pardons evil deeds for whoever asks His forgiveness and turns back. The Muyassar, briefly: the Forgiving for whoever repents.",
            "bn": "আল-গাফূর নামের ব্যাখ্যায় বেশির ভাগ তাফসীরকার নামটিকে তওবার সঙ্গে বাঁধেন। তাবারী বলেন, যে তার গুনাহ থেকে তাঁর দিকে তওবা করে, তার জন্য তিনি মাগফিরাতের মালিক। সঙ্গে জানান, তাফসীরের আলেমরাও এমনটাই বলেছেন। ইবন কাসীর বলেন, যে তাঁর দিকে তওবা করে আর তাঁর সামনে নত হয়, তার গুনাহ যেমনই হোক, তিনি মাফ করেন। সা'দীর ভাষায়, যে তওবা করে তার সব গুনাহ তিনি মাফ করেন, আর যে ইস্তিগফার করে ফিরে আসে তার মন্দ কাজগুলো ক্ষমা করে দেন। মুয়াসসার সংক্ষেপে বলে: যে তওবা করে তার জন্য ক্ষমাশীল।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi frame the name by its people rather than by the act. Al-Qurtubi glosses al-Ghafur as as-Sattur, He who covers the sins of His believing servants and does not disgrace them by those sins. Al-Baghawi has simply: forgiving of the sins of the believers. Neither contradicts the first group, but the picture shifts. In the first reading, forgiveness answers the servant's turning back; in al-Qurtubi's, it is also a covering, a sin kept out of sight so that the believer is not shamed by it.",
            "bn": "কুরতুবী ও বাগাভী নামটি ব্যাখ্যা করেন কাজ দিয়ে নয়, মানুষ দিয়ে। কুরতুবী আল-গাফূরের অর্থ করেন আস-সাত্তূর: যিনি তাঁর মুমিন বান্দাদের গুনাহ ঢেকে রাখেন, সেই গুনাহ দিয়ে তাদের লজ্জিত করেন না। বাগাভী শুধু বলেন: মুমিনদের গুনাহ ক্ষমাকারী। প্রথম দলের সঙ্গে এর কোনো বিরোধ নেই, তবে ছবিটা একটু বদলে যায়। এক ব্যাখ্যায় ক্ষমা হলো বান্দার ফিরে আসার জবাব। কুরতুবীর ব্যাখ্যায় তা আড়ালও বটে: গুনাহটা চোখের আড়ালে রাখা হয়, যাতে মুমিনকে তার জন্য অপমানিত হতে না হয়।"
          },
          {
            "en": "At-Tabari's sentence goes one step further and binds the two names to one person. He is the possessor of forgiveness for whoever repents to Him of his sins, he writes, wa dhu-l-mahabbati lah, and the possessor of love for him. The pronoun points back to the same repenting servant. In at-Tabari's reading, then, the one who turns back does not receive pardon from al-Ghafur and something lesser from al-Wadud. The forgiveness and the love are given to the same man.",
            "bn": "তাবারীর বাক্য আরও এক ধাপ এগিয়ে নাম দুটিকে একই মানুষের সঙ্গে জুড়ে দেয়। তিনি লেখেন, যে তার গুনাহ থেকে তাঁর দিকে তওবা করে, তার জন্য তিনি মাগফিরাতের মালিক, ওয়া যুল মাহাব্বাতি লাহু, আর তার প্রতি ভালোবাসারও মালিক। লাহু, অর্থাৎ তার প্রতি, ফিরে যায় সেই তওবাকারী বান্দার দিকেই। তাবারীর পাঠে তাই যে ফিরে আসে, সে আল-গাফূরের কাছ থেকে ক্ষমা পায় আর আল-ওয়াদূদের কাছ থেকে কম কিছু পায়, এমন নয়। ক্ষমা আর ভালোবাসা দুটোই পায় সে একাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Loving, or Loved",
          "bn": "যিনি ভালোবাসেন, যাঁকে ভালোবাসা হয়"
        },
        "p": [
          {
            "en": "The first reading makes al-Wadud the One who loves. At-Tabari gives it from Ibn Abbas (RA), through Ali ibn Abi Talha: al-Wadud means al-Habib. Ibn Kathir reports the same from Ibn Abbas and others, and the abridged English renders it the Loving. Al-Qurtubi: al-Muhibb li-awliya'ih, the One who loves His friends. Al-Baghawi: al-Muhibb lahum, the One who loves them, meaning the believers just named. The Muyassar, as already quoted, makes Him abundant in affection and love for His awliya'.",
            "bn": "প্রথম পাঠে আল-ওয়াদূদ তিনি, যিনি ভালোবাসেন। তাবারী আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) থেকে আনেন: আল-ওয়াদূদ মানে আল-হাবীব। ইবন কাসীরও ইবন আব্বাস (রাঃ) ও অন্যদের থেকে একই কথা জানান, আর তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণ এর অনুবাদ করে the Loving, অর্থাৎ যিনি ভালোবাসেন। কুরতুবী বলেন আল-মুহিব্বু লি-আউলিয়াইহি: যিনি তাঁর বন্ধুদের ভালোবাসেন। বাগাভী বলেন আল-মুহিব্বু লাহুম: যিনি তাদের, মানে সদ্য উল্লেখিত মুমিনদের ভালোবাসেন। মুয়াসসার, আগেই যেমন এসেছে, বলে তাঁর আউলিয়ার প্রতি তাঁর অনুরাগ ও ভালোবাসা অফুরান।"
          },
          {
            "en": "Al-Qurtubi records from Mujahid that al-Wadud is al-Wadd li-awliya'ih, the One who holds His friends dear, and labels the form fa'ul in the sense of fa'il: the pattern carries the meaning of the doer. Then, under the words it is said, he gives the other direction: wadud in the sense of mawdud, loved, like rakub and halub, a mount that is ridden and a beast that is milked. On that reading His righteous servants love Him. Al-Baghawi gives the same reading, also as it is said, with the same two examples.",
            "bn": "কুরতুবী মুজাহিদ থেকে আনেন: আল-ওয়াদূদ হলেন আল-ওয়াদ্দু লি-আউলিয়াইহি, যিনি তাঁর বন্ধুদের প্রিয় জ্ঞান করেন। শব্দগঠন নিয়ে তিনি বলেন, এটি ফাঊল ছাঁচ, কিন্তু অর্থ ফাঈলের, অর্থাৎ কর্তার। এরপর 'বলা হয়' বলে তিনি উল্টো দিকটি আনেন। ওয়াদূদ মানে মাওদূদ, যাঁকে ভালোবাসা হয়। যেমন রাকূব মানে যে বাহনে চড়া হয়, আর হালূব মানে যে পশুর দুধ দোয়ানো হয়। এই পাঠে তাঁর নেক বান্দারা তাঁকে ভালোবাসে। বাগাভীও এ পাঠ আনেন 'বলা হয়' বলে, একই দুই দৃষ্টান্ত দিয়ে।"
          },
          {
            "en": "As-Sa'di holds both directions in one passage. He opens with al-Wadud as the One whom His beloved ones love, with a love that nothing resembles. A few lines later he says that He, exalted, is al-Wadud, al-Wadd to His beloved ones, and quotes 5:54: He loves them and they love Him. Two readings are reported by name, and as-Sa'di gathers both under the one word. Al-Qurtubi and al-Baghawi set the loving reading first and the loved one under it is said; the article keeps that order and chooses neither.",
            "bn": "সা'দী এক অনুচ্ছেদেই দুই দিক ধরে রাখেন। শুরুতে বলেন, আল-ওয়াদূদ তিনি, যাঁকে তাঁর প্রিয়জনেরা এমন ভালোবাসায় ভালোবাসে, যার তুলনা কিছুতে নেই। কয়েক লাইন পরে বলেন, মহান আল্লাহ আল-ওয়াদূদ, তাঁর প্রিয়জনদের প্রতি আল-ওয়াদ্দ। প্রমাণ হিসেবে আনেন ৫:৫৪: তিনি তাদের ভালোবাসেন, তারাও তাঁকে ভালোবাসে। দুটি পাঠ নাম ধরে বর্ণিত, আর সা'দী একটি শব্দের নিচেই দুটিকে জড়ো করেছেন। কুরতুবী ও বাগাভী ভালোবাসেন অর্থটি আগে রাখেন, আর ভালোবাসা হয় অর্থটি আনেন 'বলা হয়' বলে। এই লেখা সেই ক্রম রাখে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Other Early Glosses",
          "bn": "আরও কয়েকটি প্রাচীন ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Ibn Zayd glossed al-Wadud with a single word: ar-Rahim, the Merciful. At-Tabari reports it through Yunus and Ibn Wahb, and al-Qurtubi repeats it. Al-Qurtubi also brings, by ad-Dahhak from Ibn Abbas, a comparison drawn from ordinary life: al-Wadud loves as one of you loves his brother, with good news and affection. Here the name is explained by the warmth people already know between brothers, the kind that shows itself by bringing welcome news.",
            "bn": "ইবন যায়দ আল-ওয়াদূদের ব্যাখ্যা করেছেন এক শব্দে: আর-রাহীম, পরম দয়ালু। তাবারী এটি আনেন ইউনুস ও ইবন ওয়াহবের সূত্রে, কুরতুবীও তা উল্লেখ করেন। কুরতুবী দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে রোজকার জীবনের একটি তুলনাও আনেন: তোমাদের কেউ যেমন সুসংবাদ দিয়ে আর ভালোবাসা দিয়ে তার ভাইকে ভালোবাসে। এখানে নামটি বোঝানো হয়েছে ভাইয়ে ভাইয়ে চেনা সেই টান দিয়ে, যা প্রকাশ পায় খুশির খবর পৌঁছে দেওয়ার মধ্যে।"
          },
          {
            "en": "Two further glosses tie al-Wadud straight back to al-Ghafur. Al-Qurtubi reports from Ibn Abbas as well: al-Mutawaddid ila awliya'ih bi-l-maghfira, the One who shows His friends affection by forgiving them. Al-Baghawi gives the same wording under it is said, and adds another: He forgives, and loves to forgive. On these readings the second name is not a separate attribute set beside the first. The affection is expressed in the forgiving itself.",
            "bn": "আরও দুটি ব্যাখ্যা আল-ওয়াদূদকে সরাসরি আল-গাফূরের সঙ্গে বেঁধে দেয়। কুরতুবী ইবন আব্বাস (রাঃ) থেকেই আরেকটি কথা আনেন: আল-মুতাওয়াদ্দিদু ইলা আউলিয়াইহি বিল-মাগফিরাহ, যিনি ক্ষমা করার মধ্য দিয়ে তাঁর বন্ধুদের প্রতি ভালোবাসা দেখান। বাগাভী একই কথা আনেন 'বলা হয়' বলে, আর যোগ করেন আরেকটি: তিনি ক্ষমা করেন, আর ক্ষমা করতে ভালোবাসেন। এই পাঠে দ্বিতীয় নামটি প্রথমটির পাশে বসানো আলাদা কোনো গুণ নয়। ভালোবাসাটা প্রকাশ পায় ক্ষমার ভেতর দিয়েই।"
          },
          {
            "en": "Al-Qurtubi also records an unusual reading. Al-Mubarrad reported from the judge Isma'il ibn Ishaq that al-wadud is one who has no child, citing a line of poetry about a she-camel called wadud because she had no young to yearn for. The verse would then mean that He forgives His servants and has no son for whose sake He forgives them, so that His forgiveness is pure bounty, given with no recompense. Al-Qurtubi reports this with the poem and passes on without ranking it.",
            "bn": "কুরতুবী একটি ব্যতিক্রমী ব্যাখ্যাও লিখে রাখেন। মুবাররাদ কাজী ইসমাঈল ইবন ইসহাক থেকে বর্ণনা করেন যে ওয়াদূদ হলো সে, যার কোনো সন্তান নেই। প্রমাণ হিসেবে তিনি একটি কবিতার চরণ আনেন, যেখানে এক উটনীকে ওয়াদূদ বলা হয়েছে, কারণ তার এমন কোনো বাচ্চা নেই যার জন্য তার মন টানে। এই পাঠে আয়াতের অর্থ দাঁড়ায়: তিনি তাঁর বান্দাদের ক্ষমা করেন, অথচ তাঁর কোনো পুত্র নেই যার খাতিরে তিনি তাদের ক্ষমা করবেন। ফলে তাঁর ক্ষমা নিছক অনুগ্রহ, কোনো প্রতিদানের বিনিময়ে নয়। কুরতুবী কবিতাসহ কথাটি জানিয়ে এগিয়ে যান, কোনো মান নির্ধারণ করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Pardon That Restores Love",
          "bn": "যে ক্ষমা ভালোবাসা ফিরিয়ে দেয়"
        },
        "p": [
          {
            "en": "As-Sa'di dwells on the love that servants hold for Allah. As nothing resembles Him in the attributes of majesty and beauty, in meanings and in acts, he writes, so love of Him in the hearts of the elect of His creation resembles no other kind of love. For that reason it is the root of 'ubudiyya, servanthood: the love that comes before every other love and prevails over them. And any other love that does not follow it becomes, in his words, a torment for those who hold it.",
            "bn": "বান্দার অন্তরে আল্লাহর প্রতি যে ভালোবাসা, সা'দী তা নিয়ে থামেন। তিনি লেখেন, মহিমা ও সৌন্দর্যের গুণে, অর্থে ও কাজে যেমন কোনো কিছু তাঁর মতো নয়, তেমনি তাঁর বিশেষ বান্দাদের অন্তরে তাঁর প্রতি ভালোবাসাও অন্য কোনো ভালোবাসার মতো নয়। এ কারণেই এই ভালোবাসা উবূদিয়্যাত, অর্থাৎ বন্দেগির মূল। এটি সব ভালোবাসার আগে আসে, আর সবগুলোকে ছাপিয়ে যায়। তাঁর ভাষায়, অন্য কোনো ভালোবাসা যদি এর অনুগামী না হয়, তবে তা ধারণকারীর জন্য আজাব হয়ে দাঁড়ায়।"
          },
          {
            "en": "Then he names what he calls a subtle secret: al-Wadud is joined to al-Ghafur to show that when people of sin repent to Allah and turn back, He forgives their sins and loves them. He names the view he rejects, without naming who held it: it should not be said that their sins are forgiven but affection does not return to them, as some who erred have said. The disagreement is as-Sa'di's, reported in his words, and the verse is his evidence for his side of it.",
            "bn": "তারপর তিনি একটি সূক্ষ্ম রহস্যের কথা বলেন। আল-ওয়াদূদকে আল-গাফূরের সঙ্গে জোড়া হয়েছে এটা দেখাতে যে গুনাহগাররা যখন আল্লাহর দিকে তওবা করে ফিরে আসে, তিনি তাদের গুনাহ মাফ করেন এবং তাদের ভালোবাসেন। যে মত তিনি নাকচ করেন, তার কথাও বলেন, তবে কার মত তা বলেন না: এমন বলা চলে না যে তাদের গুনাহ মাফ হয় ঠিকই, কিন্তু ভালোবাসা আর ফেরে না, যেমনটা কিছু ভ্রান্ত লোক বলেছে। বিতর্কটি সা'দীর তোলা, এখানে তাঁর ভাষায় বর্ণিত। নিজের পক্ষে তিনি দলিল হিসেবে আনেন এই আয়াতকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Rider Who Found His Camel",
          "bn": "হারানো উট ফিরে পেল যে"
        },
        "p": [
          {
            "en": "As-Sa'di backs his point with a narration he does not source: Allah is more joyful at His servant's repentance than a man whose mount, bearing his food and drink, strayed in a deadly waterless land, who lay down in a tree's shade to await death and found it standing at his head. That, he says, is the greatest joy one can measure. The wording matches a report that Muslim includes in his Sahih from Anas ibn Malik (RA). It does not mention 85:14; joining it to the verse is as-Sa'di's step.",
            "bn": "সা'দী নিজের কথার সমর্থনে একটি বর্ণনা আনেন, তবে সূত্র উল্লেখ করেন না। আল্লাহ তাঁর বান্দার তওবায় সেই লোকের চেয়েও বেশি খুশি হন, যার খাবার ও পানীয়ভরা বাহন এক প্রাণঘাতী পানিহীন প্রান্তরে হারিয়ে গিয়েছিল। মরার অপেক্ষায় সে গাছের ছায়ায় শুয়ে পড়েছিল, তারপর দেখল বাহনটি তার মাথার কাছে দাঁড়িয়ে। সা'দী বলেন, মাপা যায় এমন খুশির মধ্যে এটিই সবচেয়ে বড়। এই ভাষ্যের সঙ্গে মিলে যায় আনাস ইবন মালিক (রাঃ) থেকে বর্ণিত একটি হাদীস, যা ইমাম মুসলিম তাঁর সহীহ গ্রন্থে এনেছেন। হাদীসটিতে ৮৫:১৪ আয়াতের উল্লেখ নেই। আয়াতের সঙ্গে একে জুড়েছেন সা'দী নিজে।"
          },
          {
            "en": "In Sahih Muslim 2747: Allah is more intensely joyful at the repentance of His servant, when he repents to Him, than one of you who was on his mount in a waterless land, and it broke loose from him, carrying his food and drink. He despaired of it, came to a tree and lay down in its shade, having given up on his mount. While he was like that, there it was, standing beside him. He took hold of its halter and said, from the intensity of his joy: O Allah, You are my servant and I am Your lord. He erred from the intensity of joy.",
            "bn": "সহীহ মুসলিম ২৭৪৭-এ হাদীসটির ভাষা এই: বান্দা যখন আল্লাহর দিকে তওবা করে, তার তওবায় আল্লাহ তোমাদের সেই লোকের চেয়েও বেশি খুশি হন, যে পানিহীন প্রান্তরে তার বাহনের পিঠে ছিল। বাহনটি তার হাত ফসকে পালিয়ে গেল, আর তার পিঠেই ছিল তার খাবার ও পানীয়। সে হাল ছেড়ে দিল। একটি গাছের কাছে এসে তার ছায়ায় শুয়ে পড়ল, বাহন ফিরে পাওয়ার আশা তখন আর নেই। এ অবস্থায় হঠাৎ দেখল, বাহনটি তার পাশে দাঁড়িয়ে। সে তার লাগাম ধরল, তারপর খুশির আতিশয্যে বলে উঠল: হে আল্লাহ, তুমি আমার বান্দা, আর আমি তোমার রব। খুশির আতিশয্যে সে ভুল বলে ফেলেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Named Beside the Burning Ditch",
          "bn": "জ্বলন্ত খাদের পাশে উচ্চারিত"
        },
        "p": [
          {
            "en": "Four verses earlier, 85:10 promised Hell and the burning to those who persecuted the believing men and women, then did not repent. Ma'arif al-Qur'an, commenting on that verse in the group it files with this one, says the condition invites people to repent, and quotes al-Hasan through Ibn Kathir: look at Allah's compassion and benevolence; they burned His friends alive, yet He invites them towards repentance and forgiveness. The People of the Ditch in 85:4 to 85:10 are a condemned group of the past: the verses describe what the text describes, and license nothing against any living person or community.",
            "bn": "চারটি আয়াত আগে ৮৫:১০ বলেছে, যারা মুমিন নারী-পুরুষদের উপর নির্যাতন চালিয়েছে, তারপর তওবা করেনি, তাদের জন্য জাহান্নাম আর দহনের শাস্তি। মাআরিফুল কুরআন এই আয়াতের সঙ্গে একই দলে রাখা সেই আয়াতের আলোচনায় বলে, শর্তটা আসলে তওবার দাওয়াত। সেখানে ইবন কাসীরের সূত্রে হাসানের কথা আনা হয়েছে: আল্লাহর দয়া আর অনুগ্রহ দেখো। তারা তাঁর বন্ধুদের জীবন্ত পুড়িয়েছে, তবু তিনি তাদের তওবা ও ক্ষমার দিকে ডাকছেন। ৮৫:৪ থেকে ৮৫:১০ আয়াতের খাদওয়ালারা অতীতের এক অভিশপ্ত দল। আয়াতগুলো কেবল তা-ই বর্ণনা করে যা পাঠে আছে। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুর অনুমতি এগুলো দেয় না।"
          },
          {
            "en": "The surah opened at 85:1 with an oath by the sky of the buruj, and after the names it asks at 85:17 whether the story of the hosts has reached you, which Ibn Kathir reads as the affirmation of 85:12. Between the severe grip and the hosts it names stand three words. For a reader carrying an old wrong, the commentators' glosses leave a plain path: repent, and the One whose grip is severe is, in at-Tabari's words, the possessor of forgiveness for whoever repents, and the possessor of love for him.",
            "bn": "সূরাটি ৮৫:১ আয়াতে শুরু হয়েছিল বুরূজওয়ালা আকাশের শপথ দিয়ে। নাম দুটির পরে ৮৫:১৭ আয়াত প্রশ্ন করে, সৈন্যবাহিনীর খবর কি তোমার কাছে পৌঁছেছে? ইবন কাসীর একে ৮৫:১২ আয়াতের কথারই সমর্থন হিসেবে পড়েন। কঠিন পাকড়াও আর সেই বাহিনীর মাঝখানে দাঁড়িয়ে আছে এই তিনটি শব্দ। পুরোনো কোনো অন্যায়ের বোঝা যিনি বয়ে বেড়াচ্ছেন, তাঁর জন্য তাফসীরকারদের ব্যাখ্যা একটি সোজা পথ খুলে রাখে: তওবা করুন। যাঁর পাকড়াও কঠিন, তাবারীর ভাষায় তিনিই তওবাকারীর জন্য মাগফিরাতের মালিক, আর তার প্রতি ভালোবাসারও মালিক।"
          }
        ]
      }
    ]
  },
  "85:17": {
    "sections": [
      {
        "h": {
          "en": "Four Words After the Names",
          "bn": "নামগুলোর পরে চার শব্দ"
        },
        "p": [
          {
            "en": "Hal ataka hadithu al-junud: has the story of the hosts reached you? In the Arabic the verse is four words. Hal is the particle that opens a question. Ataka is one word, the verb came with the pronoun you joined to it. Hadithu is the story or report, and al-junud is the hosts. Nothing in the verse itself says who those hosts were. The verse that follows, 85:18, gives two names, Fir'awn and Thamud, and that verse has its own place in this collection.",
            "bn": "হাল আতাকা হাদিসুল জুনূদ: সৈন্যবাহিনীর খবর কি তোমার কাছে পৌঁছেছে? আরবিতে আয়াতটিতে মাত্র চারটি শব্দ। হাল প্রশ্নের সূচনা করে। আতাকা একটাই শব্দ, ক্রিয়াপদ 'এসেছে'-র সঙ্গে 'তোমার' সর্বনাম জোড়া লাগানো। হাদিস মানে কাহিনি বা খবর, আর আল-জুনূদ মানে বাহিনীগুলো। বাহিনীগুলো কারা, আয়াত নিজে তা বলে না। পরের আয়াত ৮৫:১৮ দুটি নাম দেয়, ফেরাউন ও সামূদ। সে আয়াতের আলোচনা এ সংকলনে আলাদা জায়গায় আসবে।"
          },
          {
            "en": "The question arrives at a turn. 85:12 declared that the seizing of your Lord is severe, and 85:13 to 85:16 named Him the One who originates and repeats, the Forgiving, the Affectionate, the Owner of the Throne, the doer of whatever He intends; 85:14, on the two names, has its own entry. Before that the surah told of believers thrown into a fire for nothing but their faith. Now, having described the Lord, it asks whether a report has arrived, and the report concerns those who opposed Him.",
            "bn": "প্রশ্নটা আসে একটা মোড়ে। ৮৫:১২ আয়াত ঘোষণা করেছে, তোমার রবের পাকড়াও বড় কঠিন। তারপর ৮৫:১৩ থেকে ৮৫:১৬ পর্যন্ত তাঁর পরিচয়: তিনি প্রথমবার সৃষ্টি করেন ও আবার সৃষ্টি করেন, তিনি ক্ষমাশীল, প্রেমময়, আরশের অধিপতি, যা চান তাই করেন। দুটি নাম নিয়ে ৮৫:১৪ আয়াতের আলাদা আলোচনা আছে। এর আগে সূরাটি বলেছে সেই মুমিনদের কথা, শুধু ঈমানের কারণে যাদের আগুনে ফেলা হয়েছিল। রবের পরিচয় দেওয়ার পর এবার সূরা জানতে চায়, একটা খবর কি পৌঁছেছে? খবরটা তাদের, যারা তাঁর বিরোধিতা করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked, or Already Known",
          "bn": "প্রশ্ন, নাকি জানা কথা"
        },
        "p": [
          {
            "en": "At-Tabari hears the question as one already answered. Allah, he writes, is saying to His Prophet Muhammad ﷺ: has the story of the hosts come to you, O Muhammad? Then he gives the sense in his own words: qad ataka dhalika wa 'alimtahu, it has come to you and you know it. On his reading the interrogative does not ask for information. It points to something the Prophet ﷺ already holds, and, as his next words show, it calls that knowledge to mind for a purpose.",
            "bn": "তাবারীর কাছে প্রশ্নটার উত্তর আগেই দেওয়া হয়ে গেছে। তিনি লেখেন, আল্লাহ তাঁর নবী মুহাম্মাদ ﷺ-কে বলছেন: হে মুহাম্মাদ, বাহিনীগুলোর খবর কি তোমার কাছে এসেছে? এরপর নিজের ভাষায় অর্থটা খুলে বলেন: কাদ আতাকা যালিকা ওয়া আলিমতাহু, তা তোমার কাছে এসেছে এবং তুমি তা জানো। তাঁর ব্যাখ্যায় এ প্রশ্ন নতুন কিছু জানতে চায় না। নবী ﷺ যা আগে থেকেই জানেন, সেদিকে ইশারা করে। আর তাবারীর পরের কথাগুলো দেখায়, সে জ্ঞান মনে করিয়ে দেওয়ার পেছনে একটা উদ্দেশ্য আছে।"
          },
          {
            "en": "Al-Qurtubi opens the same way: ay qad ataka ya Muhammad, that is, it has come to you, O Muhammad, the report of the disbelieving multitudes who denied their prophets. Al-Baghawi's gloss, the shortest of the texts consulted here, also begins qad ataka, it has come to you, and goes on to the report of the disbelieving multitudes. For these three, at-Tabari, al-Qurtubi and al-Baghawi, the hal of the verse is answered by qad, the particle that marks something as having truly happened, and the question becomes a reminder of what is known.",
            "bn": "কুরতুবীও শুরু করেন একইভাবে: আই কাদ আতাকা ইয়া মুহাম্মাদ, অর্থাৎ হে মুহাম্মাদ, তোমার কাছে এসে গেছে সেই কাফির দলগুলোর খবর, যারা নিজেদের নবীদের মিথ্যাবাদী বলেছিল। সংগৃহীত লেখাগুলোর মধ্যে সবচেয়ে ছোট ব্যাখ্যা বাগাভীর। তিনিও শুরু করেন কাদ আতাকা দিয়ে, তোমার কাছে এসে গেছে, তারপর কাফির দলগুলোর খবরের কথা বলেন। তাবারী, কুরতুবী ও বাগাভী, এ তিনজন মুফাসসিরের কাছে আয়াতের 'হাল'-এর জবাব হলো 'কাদ'। কাদ এমন অব্যয়, যা বোঝায় ঘটনাটা সত্যিই ঘটে গেছে। তাই প্রশ্নটা হয়ে দাঁড়ায় জানা কথার স্মরণ।"
          },
          {
            "en": "Ibn Kathir and the Muyassar keep the question as a question. Ibn Kathir paraphrases with hal balaghaka, has it reached you, and continues with what Allah brought down upon the hosts. The Muyassar also writes hal balaghaka, and names the one addressed: ayyuha ar-rasul, O Messenger. Neither turns the question into a statement. The texts consulted here therefore give two ways of hearing hal ataka here, as an affirmation already answered and as a question put to the Messenger ﷺ, and both are kept here without a choice between them.",
            "bn": "ইবন কাসীর আর মুয়াসসার প্রশ্নটাকে প্রশ্ন হিসেবেই রাখেন। ইবন কাসীর অর্থ করেন হাল বালাগাকা দিয়ে, তোমার কাছে কি পৌঁছেছে, তারপর বলেন বাহিনীগুলোর উপর আল্লাহ কী নামিয়েছিলেন। মুয়াসসারও লেখে হাল বালাগাকা, আর যাঁকে সম্বোধন করা হচ্ছে তাঁর নাম নেয়: আইয়ুহার রাসূল, হে রাসূল। দুজনের কেউই প্রশ্নকে বিবৃতিতে বদলাননি। ফলে সংগৃহীত লেখায় হাল আতাকা শোনার দুটি পথ পাওয়া যায়। একটি হলো আগেই উত্তর দেওয়া এক নিশ্চিত কথা, অন্যটি রাসূল ﷺ-এর কাছে রাখা এক প্রশ্ন। এখানে দুটোই রাখা হলো, কোনোটিকে বেছে নেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Massed Against",
          "bn": "যারা দল বেঁধে দাঁড়িয়েছিল"
        },
        "p": [
          {
            "en": "Who are al-junud? At-Tabari's answer is a description before it is a list: al-junud alladhina tajannadu 'ala Allah wa rasulihi bi-adhahum wa makruhihim, the hosts who massed themselves against Allah and His Messenger with their harm and their hostility. The verb he chooses, tajannadu, is built from the same letters as the noun, so that in his gloss the hosts are not simply armies in a field. They are people who made themselves into an army against Allah and the one He sent.",
            "bn": "আল-জুনূদ কারা? তাবারীর উত্তর তালিকা দেওয়ার আগে একটা বর্ণনা: আল-জুনূদুল্লাযীনা তাজান্নাদূ আলাল্লাহি ওয়া রাসূলিহী বিআযাহুম ওয়া মাকরূহিহিম। অর্থাৎ সেই বাহিনী, যারা কষ্ট দিয়ে আর শত্রুতা করে আল্লাহ ও তাঁর রাসূলের বিরুদ্ধে দল বেঁধেছিল। তিনি যে ক্রিয়াপদ বেছে নেন, তাজান্নাদূ, তা গড়া হয়েছে বিশেষ্যটির একই অক্ষরগুলো দিয়ে। তাই তাঁর ব্যাখ্যায় বাহিনী মানে শুধু ময়দানের সৈন্যদল নয়। তারা এমন মানুষ, যারা আল্লাহ ও তাঁর প্রেরিত রাসূলের বিরুদ্ধে নিজেদেরই এক বাহিনী বানিয়ে নিয়েছিল।"
          },
          {
            "en": "Al-Baghawi uses the same verb with a different object: the disbelieving multitudes alladhina tajannadu 'ala al-anbiya', who massed against the prophets. Al-Qurtubi and the Muyassar gloss al-junud with almost the same words, al-jumu' al-kafira al-mukadhdhiba, the disbelieving multitudes who denied their prophets. The word is given two shades. For at-Tabari and al-Baghawi the hosts are those who ranged themselves against the Messenger or the prophets; for al-Qurtubi and the Muyassar they are those who called their own prophets liars.",
            "bn": "বাগাভী একই ক্রিয়াপদ ব্যবহার করেন, তবে লক্ষ্য বদলে দেন: আল-জুমূউল কাফিরা আল্লাযীনা তাজান্নাদূ আলাল আম্বিয়া, সেই কাফির দলগুলো, যারা নবীদের বিরুদ্ধে দল বেঁধেছিল। কুরতুবী আর মুয়াসসার আল-জুনূদের অর্থ দেন প্রায় একই শব্দে: আল-জুমূউল কাফিরাতুল মুকাযযিবা, সেই কাফির দলগুলো, যারা তাদের নবীদের মিথ্যা বলেছিল। এভাবে শব্দটি দুটি রং পায়। তাবারী ও বাগাভীর কাছে বাহিনী তারা, যারা রাসূল বা নবীদের বিরুদ্ধে কাতার বেঁধেছিল। কুরতুবী ও মুয়াসসারের কাছে তারা, যারা নিজেদের নবীদের মিথ্যাবাদী বলেছিল।"
          },
          {
            "en": "As-Sa'di quotes 85:17 and 85:18 as one sentence and describes the hosts by their end: how they denied the messengers, so Allah made them among the destroyed. At-Tabari closes his comment on this verse with a line that points forward: then He made clear who the hosts were. That naming comes in 85:18, Fir'awn and Thamud, the verse that follows. What those two peoples did and what befell them belongs to that verse, and it is not taken up here.",
            "bn": "সা'দী ৮৫:১৭ ও ৮৫:১৮ আয়াতকে একটি বাক্য হিসেবে উদ্ধৃত করেন, আর বাহিনীগুলোর পরিচয় দেন তাদের পরিণতি দিয়ে: কীভাবে তারা রাসূলদের মিথ্যাবাদী বলেছিল, ফলে আল্লাহ তাদের ধ্বংসপ্রাপ্তদের দলে শামিল করলেন। তাবারী এ আয়াতের আলোচনা শেষ করেন সামনের দিকে ইশারা করে: তারপর তিনি স্পষ্ট করলেন বাহিনীগুলো কারা। সে নাম আসে পরের আয়াত ৮৫:১৮-এ, ফেরাউন ও সামূদ। ওই দুই জাতি কী করেছিল আর তাদের কী পরিণতি হয়েছিল, সে আলোচনা সেই আয়াতের। এখানে তা তোলা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "News of What Befell Them",
          "bn": "তাদের উপর যা নেমেছিল"
        },
        "p": [
          {
            "en": "The commentators do not leave the word hadith standing alone. Al-Qurtubi, al-Baghawi and the Muyassar all gloss it with khabar, a report or piece of news. At-Tabari keeps the verse's own word, hadith al-junud, and moves straight to what the hosts did. Ibn Kathir, instead of naming the report, names its content: has it reached you ma ahalla Allahu bihim min al-ba's wa anzala 'alayhim min an-naqma, what Allah brought down upon them of His might, and the retribution He sent down upon them.",
            "bn": "হাদিস শব্দটিকে মুফাসসিররা ব্যাখ্যা ছাড়া ছেড়ে দেননি। কুরতুবী, বাগাভী ও মুয়াসসার তিনজনই এর অর্থ করেন খবর দিয়ে, অর্থাৎ সংবাদ বা বিবরণ। তাবারী আয়াতের নিজের শব্দটাই রাখেন, হাদিসুল জুনূদ, তারপর সোজা চলে যান বাহিনীগুলো কী করেছিল সেই কথায়। ইবন কাসীর খবরটার নাম না নিয়ে তার ভেতরের কথাটা বলে দেন: মা আহাল্লাল্লাহু বিহিম মিনাল বা'স ওয়া আনযালা আলাইহিম মিনান নিকমা। অর্থাৎ তোমার কাছে কি পৌঁছেছে, আল্লাহ তাদের উপর কী কঠোরতা নামিয়েছিলেন, আর কী শাস্তি পাঠিয়েছিলেন?"
          },
          {
            "en": "Ibn Kathir adds a clause about that retribution: allati lam yaruddaha 'anhum ahad, which nobody turned back from them. The Muyassar's version of the report is close in content: the news of the disbelieving multitudes, wa ma halla bihim min al-'adhab wa an-nakal, and what befell them of punishment and exemplary penalty. In both, the story the verse asks about is not a chronicle of the hosts' strength. It is the account of how that strength ended, with nobody able to turn the outcome aside.",
            "bn": "সেই শাস্তি সম্পর্কে ইবন কাসীর আরেকটি কথা যোগ করেন: আল্লাতী লাম ইয়ারুদ্দাহা আনহুম আহাদ, যা তাদের উপর থেকে কেউ ফেরাতে পারেনি। মুয়াসসারের বিবরণও কাছাকাছি: কাফির দলগুলোর খবর, ওয়া মা হাল্লা বিহিম মিনাল আযাবি ওয়ান নাকাল, আর তাদের উপর যে আযাব ও দৃষ্টান্তমূলক সাজা নেমেছিল। দুই জায়গাতেই আয়াত যে কাহিনির কথা জিজ্ঞেস করে, তা বাহিনীগুলোর শক্তির ইতিহাস নয়। সে শক্তি কীভাবে শেষ হয়েছিল, কাহিনিটা তারই। পরিণতি ঠেকানোর মতো কেউ সেখানে ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Company for a Troubled Heart",
          "bn": "ভারাক্রান্ত মনের সঙ্গী"
        },
        "p": [
          {
            "en": "Al-Qurtubi names the purpose of the question in a short clause: yu'nisuhu bi-dhalika wa yusallihi, by it He keeps him company and consoles him. The him is the Prophet ﷺ, whom al-Qurtubi has just addressed in his gloss as ya Muhammad. The report of past hosts is given to the Messenger as companionship and comfort. Al-Qurtubi does not say more than that, but the two verbs carry a good deal: the first is about not being alone, the second about grief eased.",
            "bn": "প্রশ্নটার উদ্দেশ্য কুরতুবী বলে দেন ছোট্ট এক বাক্যে: ইউ'নিসুহু বিযালিকা ওয়া ইউসাল্লীহি, এর মাধ্যমে আল্লাহ তাঁকে সঙ্গ দেন আর সান্ত্বনা দেন। এখানে 'তাঁকে' মানে নবী ﷺ, যাঁকে কুরতুবী একটু আগেই ইয়া মুহাম্মাদ বলে সম্বোধন করেছেন। অতীতের বাহিনীগুলোর খবর রাসূলকে দেওয়া হচ্ছে সঙ্গ আর সান্ত্বনা হিসেবে। কুরতুবী এর বেশি বলেননি। তবে ক্রিয়াপদ দুটির ভার কম নয়। প্রথমটির কথা একা না থাকা, দ্বিতীয়টির কথা দুঃখ হালকা হওয়া।"
          },
          {
            "en": "At-Tabari spells the consolation out as an instruction. Having said it has come to you and you know it, he continues: so be patient with the harm your people do you, and the hostility they have shown you, as My messengers were patient, those against whom these hosts massed; and let it not turn you from conveying My message to them, as it did not turn those who were sent to these hosts. The words are given as Allah's own address to His Prophet ﷺ, in at-Tabari's paraphrase.",
            "bn": "তাবারী সান্ত্বনাটাকে খুলে বলেন একটা নির্দেশ হিসেবে। তা তোমার কাছে এসেছে এবং তুমি তা জানো, এ কথার পর তিনি লেখেন: তাই তোমার কওম তোমাকে যে কষ্ট দেয়, যে শত্রুতা দেখায়, তাতে সবর করো, যেমন সবর করেছিল আমার সেই রাসূলরা, যাদের বিরুদ্ধে এ বাহিনীগুলো দল বেঁধেছিল। আর তা যেন তোমাকে তাদের কাছে আমার বার্তা পৌঁছানো থেকে ফিরিয়ে না রাখে, যেমন ফিরিয়ে রাখতে পারেনি সেই রাসূলদের, যাদের পাঠানো হয়েছিল এ বাহিনীগুলোর কাছে। তাবারীর ভাষ্যে কথাগুলো এসেছে নবী ﷺ-এর প্রতি আল্লাহর নিজের সম্বোধন হিসেবে।"
          },
          {
            "en": "He ends with the outcome: the end of those among them who do not believe you and have faith in you is ruin and destruction, like what befell these hosts. Read through at-Tabari, the verse sets the Prophet ﷺ in a line of messengers who were opposed and held firm. The two things he draws out are both the Prophet's own tasks, patience and continuing to convey the message. The outcome he names comes after them, as the end of the story rather than its instruction.",
            "bn": "শেষে তিনি পরিণতির কথা বলেন: তাদের মধ্যে যারা তোমাকে সত্য বলে মানবে না, তোমার প্রতি ঈমান আনবে না, তাদের শেষ গিয়ে দাঁড়াবে বিনাশ আর ধ্বংসে, এ বাহিনীগুলোর যা হয়েছিল তেমনই। তাবারীর ব্যাখ্যা ধরে পড়লে আয়াতটি নবী ﷺ-কে দাঁড় করায় সেই রাসূলদের সারিতে, যাঁদের বিরোধিতা করা হয়েছিল আর যাঁরা অটল ছিলেন। তিনি যে দুটি কথা বের করে আনেন, দুটোই নবীর নিজের দায়িত্ব: সবর, আর বার্তা পৌঁছে দেওয়া চালিয়ে যাওয়া। পরিণতির কথা আসে এর পরে, কাহিনির শেষ হিসেবে, নির্দেশ হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Case for the Warning",
          "bn": "সতর্কবাণীর পক্ষে নজির"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse against an earlier one. Wa hadha taqrir li-qawlihi ta'ala inna batsha rabbika la-shadid: this is a confirmation of His saying, indeed the seizing of your Lord is severe, in 85:12. He explains that line in turn: when He seizes the wrongdoer, He seizes him with a painful and severe seizing, the seizing of One Mighty and Able. On this reading the question in 85:17 is the evidence for the statement five verses earlier. The surah stated a principle; here it points to a case.",
            "bn": "ইবন কাসীর আয়াতটি পড়েন আগের এক আয়াতের সঙ্গে মিলিয়ে: ওয়া হাযা তাকরীরুন লিকাওলিহী তাআলা ইন্না বাতশা রাব্বিকা লাশাদীদ। অর্থাৎ এ আয়াত আল্লাহর এই বাণীর সমর্থন: তোমার রবের পাকড়াও অবশ্যই কঠিন, যা এসেছে ৮৫:১২ আয়াতে। সে কথারও ব্যাখ্যা তিনি দেন: তিনি যখন জালিমকে পাকড়াও করেন, তখন কঠিন ও যন্ত্রণাদায়ক পাকড়াও করেন, মহাপরাক্রমশালী ও সর্বশক্তিমানের পাকড়াও। এ পাঠে ৮৫:১৭ আয়াতের প্রশ্নটা পাঁচ আয়াত আগের ঘোষণার প্রমাণ। সূরা আগে একটা নীতি বলেছে, এখানে দেখাচ্ছে তার নজির।"
          },
          {
            "en": "As-Sa'di sets the verse in a different frame. He introduces 85:17 and 85:18 with the words: then He mentioned some of His acts that point to the truth of what His messengers brought. For as-Sa'di the hosts' story is evidence of truthfulness more than of severity: the messengers were denied, and the deniers were made among the destroyed. Ibn Kathir's reading looks back to the warning of 85:12; as-Sa'di's looks to the messengers' truth; al-Qurtubi's and at-Tabari's look to the Prophet's heart. The texts consulted here hold all three.",
            "bn": "সা'দী আয়াতটিকে রাখেন অন্য এক কাঠামোয়। ৮৫:১৭ ও ৮৫:১৮ আয়াতের আগে তিনি লেখেন: তারপর আল্লাহ তাঁর এমন কিছু কাজের কথা বললেন, যা প্রমাণ করে তাঁর রাসূলরা যা নিয়ে এসেছিলেন তা সত্য। সা'দীর কাছে বাহিনীগুলোর কাহিনি কঠোরতার চেয়ে বেশি সত্যতার সাক্ষ্য। রাসূলদের মিথ্যাবাদী বলা হয়েছিল, আর মিথ্যাবাদীরা হয়েছিল ধ্বংসপ্রাপ্তদের দলভুক্ত। ইবন কাসীরের পাঠ ফিরে তাকায় ৮৫:১২ আয়াতের সতর্কবাণীর দিকে। সা'দীর পাঠ তাকায় রাসূলদের সত্যতার দিকে। কুরতুবী আর তাবারীর পাঠ তাকায় নবীর অন্তরের দিকে। সংগৃহীত লেখায় তিনটিই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Limits Around a Hard Story",
          "bn": "কঠিন কাহিনির সীমারেখা"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse asks about hosts that the text itself describes, and the next verse names them as two peoples of the past. The verse speaks only of what it names and licenses nothing against any living person or community. No group alive today is named in it, and none of the commentaries consulted here applies it to any such group. In at-Tabari, al-Qurtubi and the Muyassar the question is addressed to the Messenger ﷺ, as a reminder and a comfort, not as a warrant for anyone to act against anyone.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত যে বাহিনীগুলোর কথা জিজ্ঞেস করে, তাদের বর্ণনা কুরআন নিজেই দিয়েছে, আর পরের আয়াত তাদের পরিচয় দেয় অতীতের দুই জাতি হিসেবে। কুরআনের ভাষ্য যা বর্ণনা করে, আয়াতটি কেবল তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি এটি দেয় না। আজকের কোনো দলের নাম এতে নেই, আর সংগৃহীত কোনো তাফসীরও একে কোনো দলের উপর চাপায়নি। তাবারী, কুরতুবী ও মুয়াসসারের ব্যাখ্যায় প্রশ্নটা রাসূল ﷺ-এর প্রতি, স্মরণ ও সান্ত্বনা হিসেবে। কারও বিরুদ্ধে কিছু করার সনদ হিসেবে নয়।"
          },
          {
            "en": "No commentary consulted here attaches to this verse a hadith from the six well-known collections. Ibn Kathir carries one report through the chain of Ibn Abi Hatim and does not grade it; it is left aside. Ma'arif al-Qur'an's commentary on the surah, as consulted, ends with 85:10 and says nothing on this verse. What is written here therefore rests on the six Arabic commentaries quoted above, at-Tabari, al-Qurtubi, al-Baghawi, Ibn Kathir, as-Sa'di and the Muyassar, on this verse alone.",
            "bn": "সংগৃহীত কোনো তাফসীরই এ আয়াতের সঙ্গে প্রসিদ্ধ ছয় হাদিসগ্রন্থের কোনো হাদিস জুড়ে দেয়নি। ইবন কাসীর ইবন আবী হাতিমের সনদে একটি বর্ণনা আনেন, কিন্তু তার মান নির্ধারণ করেননি। তাই সেটি এখানে রাখা হলো না। সংগৃহীত মাআরিফুল কুরআনে এ সূরার আলোচনা ৮৫:১০ আয়াতে গিয়েই শেষ, এ আয়াত নিয়ে সেখানে কিছু নেই। তাই এখানে যা লেখা হয়েছে, তার ভিত্তি উপরে উদ্ধৃত ছয়টি আরবি তাফসীর: তাবারী, কুরতুবী, বাগাভী, ইবন কাসীর, সা'দী ও মুয়াসসার, শুধু এ আয়াতের উপর তাদের ব্যাখ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Report Reaches You",
          "bn": "খবর যখন আপনার কাছে পৌঁছায়"
        },
        "p": [
          {
            "en": "The question was first asked of one man, but it is recited to everyone who reads the surah. A reader who is mocked for praying, pressed to give up a conviction, or worn down by people who will not listen meets the same four words. The commentators found two things in them for the Prophet ﷺ: the reminder that the hosts' end has already been told, and, in at-Tabari's words, a call to patience like the patience of the messengers before him.",
            "bn": "প্রশ্নটা প্রথমে করা হয়েছিল একজন মানুষকে। কিন্তু সূরাটি যে-ই তেলাওয়াত করে, প্রশ্নটা তার কাছেও এসে পৌঁছায়। নামাজের জন্য যাকে বিদ্রূপ সইতে হয়, যাকে বিশ্বাস ছেড়ে দিতে চাপ দেওয়া হয়, কিংবা না-শোনা মানুষের ভিড়ে যে ক্লান্ত, সে-ও এই একই চারটি শব্দের মুখোমুখি হয়। মুফাসসিররা এতে নবী ﷺ-এর জন্য দুটি জিনিস পেয়েছেন। একটি হলো এই স্মরণ যে বাহিনীগুলোর পরিণতির কথা আগেই বলা হয়ে গেছে। অন্যটি, তাবারীর ভাষায়, আগের রাসূলদের মতো সবর করার ডাক।"
          },
          {
            "en": "Two misreadings sit close by. One is despair, as if the hosts of one's own day must be stronger than any that came before; the verse answers that by pointing to a story already finished. The other is to sit in judgement, scanning the people around us for hosts of our own. The verse asks only whether the report has reached us. The work it leaves the reader is to receive the report, keep patient, and go on saying what is true.",
            "bn": "কাছাকাছিই দুটি ভুল পাঠের ঝুঁকি আছে। একটি হতাশা, যেন নিজের সময়ের বাহিনী আগের সব বাহিনীর চেয়ে শক্তিশালী। আয়াত এর জবাব দেয় এমন এক কাহিনির দিকে ইশারা করে, যা আগেই শেষ হয়ে গেছে। অন্যটি বিচারকের আসনে বসা, চারপাশের মানুষের মধ্যে নিজের মতো করে বাহিনী খুঁজে বেড়ানো। আয়াত শুধু জানতে চায়, খবরটা আমাদের কাছে পৌঁছেছে কি না। পাঠকের কাজ খবরটা গ্রহণ করা, সবর ধরে রাখা, আর সত্য কথা বলে যাওয়া।"
          },
          {
            "en": "Then the surah moves on to name the hosts, and that verse has its own entry. For now the question stands by itself, after the names in 85:14 to 85:16 that describe the Lord who brought the earlier stories to their end. Has the story reached you? For the reader who can answer yes, al-Qurtubi's two verbs say what it is for: it keeps the believer company when the way is lonely, and it consoles when the harm is near.",
            "bn": "এরপর সূরা বাহিনীগুলোর নাম বলে, আর সে আয়াতের আলোচনা আলাদা। আপাতত প্রশ্নটা একাই দাঁড়িয়ে থাকে। তার আগে ৮৫:১৪ থেকে ৮৫:১৬ পর্যন্ত এসেছে সেই নামগুলো, যেগুলো সেই রবের পরিচয় দেয়, যিনি আগের কাহিনিগুলোকে তাদের শেষে পৌঁছে দিয়েছেন। খবরটা কি আপনার কাছে পৌঁছেছে? যে পাঠক হ্যাঁ বলতে পারেন, তাঁর জন্য কুরতুবীর দুটি ক্রিয়াপদই বলে দেয় খবরটা কীসের জন্য। পথ যখন নিঃসঙ্গ, তখন এটি মুমিনের সঙ্গী। আর কষ্ট যখন কাছে, তখন সান্ত্বনা।"
          }
        ]
      }
    ]
  }
});
