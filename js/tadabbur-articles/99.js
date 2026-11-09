/**
 * Tadabbur long-form articles — surah 99.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "99:1": {
    "sections": [
      {
        "h": {
          "en": "One Scene, Six Verses",
          "bn": "ছয় আয়াতে একটি দৃশ্য"
        },
        "p": [
          {
            "en": "Idha zulzilat al-ardu zilzalaha: when the earth is shaken with its shaking. The surah opens with a condition and makes the listener wait for its outcome. Al-Qurtubi notes that yawma'idhin, on that Day, at the head of 99:4 takes its place from this opening idha, and mentions a view tying it to tuhaddithu instead. Either way, the first six verses form one scene: the earth is shaken, it casts out its burdens, a human voice asks what has happened to it, the earth reports its news by its Lord's command, and people go out in scattered groups.",
            "bn": "ইযা যুলযিলাতিল আরদু যিলযালাহা: যখন পৃথিবীকে তার কম্পনে কাঁপিয়ে দেওয়া হবে। সূরাটি শুরু হয় একটা শর্ত দিয়ে, আর ফল শোনার জন্য শ্রোতাকে অপেক্ষায় রাখে। কুরতুবী বলেন, ৯৯:৪ আয়াতের শুরুতে যে ইয়াওমাইযিন, অর্থাৎ সেদিন, তার ব্যাকরণগত সম্পর্ক এই প্রথম ইযা-র সঙ্গে। আরেকটি মতও তিনি উল্লেখ করেন, যাতে শব্দটি যুক্ত তুহাদ্দিসু ক্রিয়ার সঙ্গে। যেভাবেই ধরা হোক, প্রথম ৬টি আয়াত মিলে একটিই দৃশ্য। পৃথিবী কেঁপে ওঠে, ভেতরের বোঝা বের করে দেয়, মানুষ জিজ্ঞেস করে এর কী হলো, রবের আদেশে পৃথিবী তার খবর বলে, আর মানুষ দলে দলে বেরিয়ে আসে।"
          },
          {
            "en": "Where the surah came down is itself a disagreement. Al-Qurtubi reports that it is Madinan in the view of Ibn 'Abbas and Qatada, and Makkan in the view of Ibn Mas'ud, 'Ata' and Jabir. Al-Baghawi calls it Makkan without comment, and so does the Arabic text of Ibn Kathir. Al-Qurtubi counts nine verses and says the scholars hold its merit to be great. Nothing below depends on settling the place, since the scene it describes belongs to no single city.",
            "bn": "সূরাটি কোথায় নাযিল হয়েছে, তা নিয়েও মতভেদ আছে। কুরতুবী জানান, ইবন আব্বাস (রাঃ) ও কাতাদার মতে এটি মাদানী, আর ইবন মাসউদ (রাঃ), আতা ও জাবিরের মতে মাক্কী। বাগাভী কোনো মন্তব্য ছাড়াই একে মাক্কী বলেন, ইবন কাসীরের আরবি পাঠেও তাই আছে। কুরতুবী আয়াত গুনেছেন নয়টি, আর বলেছেন, আলিমদের মতে এ সূরার ফযিলত অনেক। নিচের আলোচনার কিছুই জায়গা নির্ধারণের উপর নির্ভর করে না। সূরাটি যে দৃশ্যের কথা বলে, তা কোনো একটি শহরের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Shaking That Is Its Own",
          "bn": "পৃথিবীর নিজস্ব কম্পন"
        },
        "p": [
          {
            "en": "Zulzilat is passive: the earth is shaken; it does not set itself moving. Then comes zilzalaha, its shaking, a verbal noun joined to the earth. At-Tabari explains the joining with an Arab idiom, la-ukrimannaka karamataka, I will honour you with your honouring, which simply means an honouring; the possessive attaches to the earth what is really its description. He adds that the form also suits the endings of the verses that follow. Al-Qurtubi gives a parallel one, la-u'tiyannaka 'atiyyataka, and says the verbal noun is there for emphasis.",
            "bn": "যুলযিলাত ক্রিয়াটি কর্মবাচ্য। পৃথিবী নিজে নড়ে ওঠে না, তাকে নাড়ানো হয়। তারপর আসে যিলযালাহা, তার কম্পন। এটি ক্রিয়াবাচক বিশেষ্য, জুড়ে দেওয়া হয়েছে পৃথিবীর সঙ্গে। তাবারী এই জোড়ার ব্যাখ্যা দেন আরবদের একটি বাকরীতি দিয়ে: লা উকরিমান্নাকা কারামাতাকা, আমি তোমাকে তোমার সম্মানে সম্মানিত করব। এর মানে নিছক সম্মান করা। অর্থাৎ যে জিনিস আসলে পৃথিবীর বিশেষণ, সম্বন্ধপদ সেটাকে পৃথিবীর সঙ্গে বেঁধে দিয়েছে। তিনি আরও বলেন, পরের আয়াতগুলোর শেষ ধ্বনির সঙ্গেও এ রূপটি মেলে। কুরতুবী একই ধাঁচের উদাহরণ দেন, লা উতিয়ান্নাকা আতিয়্যাতাকা, আর বলেন, ক্রিয়াবাচক বিশেষ্যটি এসেছে জোর দেওয়ার জন্য।"
          },
          {
            "en": "At-Tabari ties the shaking to one moment: the earth is shaken for the rising of the Hour, convulsed with a convulsion. Al-Baghawi says it is moved with a violent motion, again for the Hour. Ibn Kathir reports Ibn 'Abbas as saying it moves from beneath; al-Qurtubi, through 'Ikrima from Ibn 'Abbas, has it moved from its very root. As-Sa'di draws the result: it quakes until every building and landmark on it falls, its mountains crumble, its hills are levelled, and it becomes a bare plain with no crookedness and no rise, words that echo 20:106 and 20:107.",
            "bn": "তাবারী কম্পনটিকে একটি মুহূর্তের সঙ্গে বেঁধে দেন: কিয়ামত কায়েমের জন্য পৃথিবীকে প্রবলভাবে ঝাঁকানো হবে। বাগাভীও বলেন, কিয়ামতের জন্যই তাকে প্রচণ্ড জোরে নাড়ানো হবে। ইবন কাসীর ইবন আব্বাস (রাঃ)-এর কথা আনেন: পৃথিবী নিচ থেকে নড়ে উঠবে। কুরতুবী ইকরিমার সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: তাকে নাড়ানো হবে একেবারে মূল থেকে। সা'দী এর পরিণতি দেখান। এমনভাবে কাঁপবে যে উপরের সব দালান আর চিহ্ন ভেঙে পড়বে, পাহাড় চূর্ণ হবে, টিলা সমান হয়ে যাবে। পৃথিবী হবে এক খোলা সমতল, যাতে কোনো বাঁক নেই, কোনো উঁচু-নিচু নেই। তাঁর এ কথায় ২০:১০৬ ও ২০:১০৭ আয়াতের প্রতিধ্বনি শোনা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The First Blast or the Second",
          "bn": "প্রথম ফুঁ, নাকি দ্বিতীয়?"
        },
        "p": [
          {
            "en": "Which quake is meant? Al-Qurtubi, through 'Ikrima, reports Ibn 'Abbas as saying that at the first blowing of the Trumpet He shakes it, and Mujahid said the same; the proof given is 79:6 and 79:7: on the Day the quaking one quakes, followed by the one that follows. Then, al-Qurtubi continues, the earth is shaken a second time and brings out its dead, which are its burdens. On this account the shaking of 99:1 comes with the first blast, and the casting out in 99:2 follows a second shaking.",
            "bn": "কোন কম্পনের কথা বলা হচ্ছে? কুরতুবী ইকরিমার সূত্রে ইবন আব্বাস (রাঃ)-এর বক্তব্য আনেন: শিঙায় প্রথম ফুঁ দেওয়ার সময় তিনি পৃথিবীকে কাঁপাবেন। মুজাহিদও একই কথা বলেছেন। দলিল হিসেবে আনা হয়েছে ৭৯:৬ ও ৭৯:৭ আয়াত: যেদিন প্রকম্পিতকারী প্রকম্পিত করবে, তার পেছনে আসবে পরবর্তীটি। কুরতুবী আরও বলেন, তারপর পৃথিবীকে দ্বিতীয়বার কাঁপানো হবে, আর সে তার মৃতদের বের করে দেবে। এরাই তার বোঝা। এই হিসাবে ৯৯:১ আয়াতের কম্পন প্রথম ফুঁয়ের সঙ্গে, আর ৯৯:২ আয়াতে বের করে দেওয়ার ঘটনা দ্বিতীয় কম্পনের পরে।"
          },
          {
            "en": "Ma'arif al-Qur'an, drawing on Mazhari, says plainly that it is not clear whether this is the convulsion before the first blowing, among the portents of the Hour, or the quake after the second, when the dead are raised. Reports and commentators differ, it notes; there may be several quakes. It leans towards the second because the surah moves on to reckoning and recompense, and closes with: Allah knows best.",
            "bn": "মাআরিফুল কুরআন মাযহারীর বরাতে সোজাসুজি বলে, বিষয়টি পরিষ্কার নয়। এ কি প্রথম ফুঁয়ের আগের সেই ঝাঁকুনি, যা কিয়ামতের আলামতের মধ্যে গণ্য, নাকি দ্বিতীয় ফুঁয়ের পরের কম্পন, যখন মৃতদের ওঠানো হবে? বর্ণনা আর তাফসীরকারদের মত এখানে ভিন্ন। কম্পন একাধিকও হতে পারে। তবু মাআরিফুল কুরআন দ্বিতীয়টির দিকে ঝোঁকে, কারণ সূরাটি এরপর হিসাব আর প্রতিদানের কথায় যায়। শেষে বলে: আল্লাহই ভালো জানেন।"
          },
          {
            "en": "Al-Qurtubi traces the difference into the next verses. Those who take al-insan in 99:3 as every person who sees it, believer and disbeliever, place the quake in this world as a sign of the Hour; those who take it as the disbeliever alone place it at the Resurrection, since the believer affirms that Day and would not ask. Through al-Mawardi he does the same with 99:4: news of deeds fits the Resurrection view, and news of the burdens cast out, Yahya ibn Sallam's reading, fits the sign-of-the-Hour view.",
            "bn": "কুরতুবী এই মতভেদকে পরের আয়াত পর্যন্ত টেনে নেন। ৯৯:৩ আয়াতের আল-ইনসান বলতে যাঁরা বোঝেন যে-ই তা দেখবে সে-ই, মুমিন হোক বা কাফির, তাঁরা কম্পনটিকে রাখেন দুনিয়ায়, কিয়ামতের আলামত হিসেবে। আর যাঁরা বোঝেন শুধু কাফির, তাঁরা রাখেন পুনরুত্থানের দিনে। কারণ মুমিন সেদিনকে মানে, তাই সে প্রশ্ন করবে না। মাওয়ারদীর বরাতে ৯৯:৪ আয়াতেও তিনি একই কাজ করেন। পৃথিবী আমলের খবর দেবে, এ ব্যাখ্যা পুনরুত্থানের মতের সঙ্গে যায়। আর পৃথিবী তার বের করে দেওয়া বোঝার খবর দেবে, ইয়াহইয়া ইবন সাল্লামের এ ব্যাখ্যা যায় আলামতের মতের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight the Ground Holds",
          "bn": "মাটির ভেতরের ভার"
        },
        "p": [
          {
            "en": "Wa akhrajat al-ardu athqalaha: and the earth brings out its burdens. At-Tabari says it brings out the dead inside it, alive, and explains the word: a dead person inside the earth is a weight for it, and a living person on its back is a weight upon it. Al-Qurtubi gives the same distinction from Abu 'Ubayda and al-Akhfash, and adds that this is why jinn and humans are called ath-thaqalan. At-Tabari reports Ibn 'Abbas and Mujahid saying the burdens are the dead, those in the graves;",
            "bn": "ওয়া আখরাজাতিল আরদু আসকালাহা: আর পৃথিবী তার বোঝা বের করে দেবে। তাবারী বলেন, ভেতরে থাকা মৃতদের সে জীবিত অবস্থায় বের করে দেবে। শব্দটির ব্যাখ্যাও তিনি দেন। মাটির ভেতরে যে মৃত, সে মাটির ভেতরের ভার। আর মাটির পিঠে যে জীবিত, সে মাটির উপরের ভার। কুরতুবী আবু উবাইদা ও আখফাশ থেকে একই পার্থক্য আনেন, আর বলেন, এ কারণেই জিন ও মানুষকে বলা হয় আস-সাকালান। তাবারী ইবন আব্বাস (রাঃ) ও মুজাহিদের কথা আনেন: বোঝা মানে মৃতরা, কবরে যারা আছে।"
          },
          {
            "en": "A second reading widens the word: al-Qurtubi gives, as another view, that the burdens are the earth's treasures. As-Sa'di, al-Baghawi and the Muyassar join both, the dead and the treasures in its belly, and al-Baghawi adds that the earth throws them onto its surface. Ibn Kathir sets two verses beside this one: 22:1, where the quaking of the Hour is a tremendous thing, and 84:3 and 84:4, where the earth is spread out, casts out what is in it and becomes empty.",
            "bn": "দ্বিতীয় আরেকটি ব্যাখ্যা শব্দটির পরিধি বাড়ায়। কুরতুবী ভিন্ন একটি মত হিসেবে বলেন, বোঝা মানে পৃথিবীর গুপ্তধন। সা'দী, বাগাভী আর মুয়াসসার দুটোকেই একসঙ্গে ধরেন: পেটের ভেতরের মৃত আর গুপ্তধন। বাগাভী যোগ করেন, পৃথিবী এগুলো ছুড়ে ফেলবে নিজের উপরিভাগে। ইবন কাসীর এ আয়াতের পাশে আরও দুটি আয়াত রাখেন। ২২:১ আয়াতে কিয়ামতের কম্পনকে বলা হয়েছে ভয়ংকর এক ব্যাপার। আর ৮৪:৩ ও ৮৪:৪ আয়াতে পৃথিবীকে বিস্তৃত করা হয়, সে ভেতরের সব কিছু বাইরে ফেলে দিয়ে খালি হয়ে যায়।"
          },
          {
            "en": "Ibn Kathir and al-Baghawi set here a hadith that does not itself name this verse. In Muslim's wording (1013), from Abu Hurayra, the Messenger of Allah ﷺ said: The earth will vomit long pieces of its liver like columns of gold and silver, and the murderer will come and say: It was for this that I committed murder. The breaker of family ties will come and say: It was for this that I broke the family ties; and the thief will come and say: It is for this that my hands were cut off. They will then leave it and will not take anything out of it.",
            "bn": "ইবন কাসীর ও বাগাভী এখানে একটি হাদীস আনেন, যাতে এ আয়াতের নাম নেই। মুসলিমের (১০১৩) বর্ণনায় আবু হুরায়রা (রাঃ) থেকে, রাসূলুল্লাহ ﷺ বলেছেন: পৃথিবী তার কলিজার টুকরোগুলো বমি করে বের করে দেবে, সোনা-রুপার স্তম্ভের মতো। তখন খুনি এসে বলবে, এর জন্যই আমি খুন করেছিলাম। আত্মীয়তার সম্পর্ক ছিন্নকারী এসে বলবে, এর জন্যই আমি সম্পর্ক ছিন্ন করেছিলাম। চোর এসে বলবে, এর জন্যই আমার হাত কাটা গিয়েছিল। তারপর তারা সেগুলো ফেলে রেখে চলে যাবে, কিছুই নেবে না।"
          },
          {
            "en": "Al-Qurtubi cites it under the treasures reading, and it needs little comment. The things people killed for, cut off their families for and lost a hand for lie in the open at last, stacked like columns, and nobody wants them. What the earth held, whether bodies or gold, was never gone; it was only kept. When the keeping ends, its worth ends; what remains is what was done for it.",
            "bn": "কুরতুবী একে এনেছেন গুপ্তধনের ব্যাখ্যার পক্ষে। বর্ণনাটির উপর বেশি কথা বলার দরকার নেই। যে জিনিসের জন্য মানুষ খুন করেছে, আত্মীয়ের সঙ্গে সম্পর্ক কেটেছে, হাত হারিয়েছে, শেষে তা স্তম্ভের মতো খোলা জায়গায় পড়ে আছে, অথচ কেউ চায় না। মাটি যা ধরে রেখেছিল, লাশ হোক বা সোনা, তা হারিয়ে যায়নি, শুধু জমা ছিল। জমা রাখার পালা শেষ হলে তার দামও শেষ। থেকে যায় শুধু তার জন্য যা করা হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports on Its Merit",
          "bn": "ফযিলতের বর্ণনাগুলো"
        },
        "p": [
          {
            "en": "The reports on this surah's merit call for care. At-Tirmidhi records one from Anas and another from Ibn 'Abbas that measure the surah against a share of the Qur'an. On both he gives his own verdict, gharib, adding that he knows the first only through al-Hasan ibn Salm and the second only through Yaman ibn al-Mughira. Ibn Kathir and al-Qurtubi relay those verdicts; Ma'arif al-Qur'an cites the content without them. They are mentioned here, and nothing is built on them.",
            "bn": "এ সূরার ফযিলত নিয়ে যেসব বর্ণনা আছে, সেগুলোর বেলায় সতর্ক থাকা দরকার। তিরমিযী আনাস (রাঃ) থেকে একটি আর ইবন আব্বাস (রাঃ) থেকে আরেকটি বর্ণনা এনেছেন, যাতে সূরাটিকে কুরআনের একটি অংশের সমান ধরা হয়েছে। দুটির ব্যাপারেই তাঁর নিজের রায়: গরীব। সঙ্গে বলেছেন, প্রথমটি তিনি শুধু হাসান ইবন সালমের সূত্রে জানেন, দ্বিতীয়টি শুধু ইয়ামান ইবনুল মুগীরার সূত্রে। ইবন কাসীর ও কুরতুবী তাঁর এই রায় উল্লেখ করেছেন। মাআরিফুল কুরআন রায়টি ছাড়াই বিষয়বস্তু এনেছে। এখানে বর্ণনা দুটির শুধু উল্লেখ থাকল, এর উপর কিছু দাঁড় করানো হলো না।"
          },
          {
            "en": "A third report in the same place, which at-Tirmidhi grades hasan (2895), is about a Companion who said he had nothing to marry with. The Prophet ﷺ asked him about several short surahs he knew; of Idha zulzilat he said: a quarter of the Qur'an, and he ended: marry, marry. Ibn Kathir also relays a report from Imam Ahmad about a man taught this surah; it was not checked on a collection page here, so it is only mentioned.",
            "bn": "একই জায়গায় তৃতীয় একটি বর্ণনা আছে, যাকে তিরমিযী হাসান বলেছেন (২৮৯৫)। এক সাহাবী বলেছিলেন, বিয়ে করার মতো কিছুই তাঁর কাছে নেই। নবী ﷺ তাঁর জানা কয়েকটি ছোট সূরার কথা জিজ্ঞেস করলেন। ইযা যুলযিলাত সম্পর্কে বললেন: কুরআনের এক-চতুর্থাংশ। শেষে বললেন: বিয়ে করো, বিয়ে করো। ইবন কাসীর ইমাম আহমাদ থেকেও একটি বর্ণনা আনেন, যাতে এক ব্যক্তিকে এ সূরাটি শেখানো হয়। এখানে তা কোনো হাদীসগ্রন্থের পাতায় যাচাই করা হয়নি, তাই শুধু উল্লেখ থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Bewildered Question",
          "bn": "হতভম্ব মানুষের প্রশ্ন"
        },
        "p": [
          {
            "en": "Wa qala al-insanu ma laha: and man says, what is the matter with it? At-Tabari reads it as people asking, when the earth is shaken for the Hour, what has happened to it and what its story is. Ibn Kathir describes the shock: man finds its state strange after it had been settled, still and firm while he lived settled on its back; now it heaves, struck by the quake Allah prepared for it, which it cannot escape. As-Sa'di hears a person overwhelmed by what he sees.",
            "bn": "ওয়া কালাল ইনসানু মা লাহা: আর মানুষ বলবে, এর কী হলো? তাবারীর ব্যাখ্যায়, কিয়ামতের জন্য পৃথিবী যখন কেঁপে উঠবে, মানুষ তখন জিজ্ঞেস করবে, পৃথিবীর কী হলো, এর ঘটনাটা কী। ইবন কাসীর সেই ধাক্কাটা তুলে ধরেন। এতদিন পৃথিবী ছিল স্থির, শান্ত, অটল, আর মানুষ নিশ্চিন্তে তার পিঠে বাস করত। এখন সেই পৃথিবী দুলছে। আল্লাহ তার জন্য যে কম্পন ঠিক করে রেখেছিলেন, তা এসে পড়েছে, তা থেকে তার রেহাই নেই। তাই তার অবস্থা মানুষের কাছে অচেনা ঠেকে। সা'দী এ প্রশ্নে শোনেন এমন একজনের কণ্ঠ, যে চোখের সামনের দৃশ্যের বিশালতায় দিশেহারা।"
          },
          {
            "en": "At-Tabari keeps a small scene, with his chain and no grading: Sa'id said the earth shook in the time of 'Abdullah, and 'Abdullah said to it: what is the matter with you? Were it to speak, the Hour would come. A real tremor met a question and a thought of the Hour. The verse describes the earth's last quake and licenses no reading of any earthquake today as a verdict on the people it strikes.",
            "bn": "তাবারী নিজের সনদে, কোনো মান নির্ধারণ ছাড়াই, ছোট্ট একটি ঘটনা রেখেছেন। সাঈদ বলেন, আবদুল্লাহর যুগে একবার মাটি কেঁপে উঠেছিল। আবদুল্লাহ মাটিকে বললেন: তোমার কী হলো? এ যদি কথা বলত, তবে কিয়ামত কায়েম হয়ে যেত। সত্যিকারের এক কম্পনের জবাব ছিল একটি প্রশ্ন আর কিয়ামতের ভাবনা। আয়াতটি বলে পৃথিবীর শেষ কম্পনের কথা। আজকের কোনো ভূমিকম্পকে আক্রান্ত মানুষদের উপর রায় হিসেবে পড়ার অনুমতি এ আয়াত দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "News the Ground Will Tell",
          "bn": "মাটি যে খবর দেবে"
        },
        "p": [
          {
            "en": "Yawma'idhin tuhaddithu akhbaraha: that Day it reports its news. What news? At-Tabari first explains it on the view he cited from 'Abdullah ibn Mas'ud: the earth will speak and say, Allah commanded me to this, revealed it to me and permitted me. Sa'id ibn Jubayr, he reports, once recited tunabbi'u, it informs, and once tuhaddithu, and for Sa'id the informing seems to have been the earth bringing its burdens from its belly to its back. At-Tabari calls that meaning sound: the earth makes its news plain by the shaking and by casting out the dead, at Allah's revelation and permission.",
            "bn": "ইয়াওমাইযিন তুহাদ্দিসু আখবারাহা: সেদিন পৃথিবী তার খবর বলবে। কোন খবর? তাবারী প্রথমে ব্যাখ্যা দেন আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকে আগে আনা মত অনুযায়ী। পৃথিবী কথা বলবে, আর বলবে, আল্লাহ আমাকে এর আদেশ দিয়েছেন, আমার কাছে ওহী পাঠিয়েছেন, আমাকে অনুমতি দিয়েছেন। তিনি আরও জানান, সাঈদ ইবন জুবাইর একবার পড়েছিলেন তুনাব্বিউ, অর্থাৎ জানাবে, আরেকবার তুহাদ্দিসু। মনে হয়, সাঈদের কাছে জানানো মানে ছিল পৃথিবী তার পেটের বোঝা পিঠে তুলে আনা। তাবারী এ অর্থকে সঠিক বলেন। আল্লাহর ওহী আর অনুমতিতে পৃথিবী কম্পন দিয়ে আর মৃতদের বের করে দিয়েই তার খবর স্পষ্ট করে দেবে।"
          },
          {
            "en": "Others took the news to be the deeds done on it. At-Tabari reports Sufyan: what was done on it of good or evil; Ibn Zayd: the servants' deeds on its back; and Mujahid: it tells people what they did on it. Ibn Kathir puts it in one line, and as-Sa'di gives the reason: the earth testifies against those who acted on it, because it is among the witnesses against the servants.",
            "bn": "অন্যরা খবর বলতে বুঝেছেন পৃথিবীর উপর করা আমল। তাবারী সুফিয়ানের কথা আনেন: তার উপর যত ভালো-মন্দ করা হয়েছে। ইবন যায়দের কথা: তার পিঠে বান্দাদের আমল। আর মুজাহিদের কথা: মানুষ তার উপর কী করেছে, তা সে তাদের জানিয়ে দেবে। ইবন কাসীর এক লাইনে একই কথা বলেন। সা'দী কারণটাও বলেন: যারা পৃথিবীর উপর আমল করেছে, পৃথিবী তাদের বিরুদ্ধে সাক্ষ্য দেবে, কারণ বান্দাদের বিরুদ্ধে যারা সাক্ষ্য দেবে, সে তাদেরই একজন।"
          },
          {
            "en": "One hadith speaks to the verse directly. At-Tirmidhi (3353) records from Abu Hurayra: The Messenger of Allah recited this Ayah: ‘That Day it will declare its information.’ He said: ‘Do you know what its information is?’ They said: ‘Allah and His Messenger know better.’ He said: ‘That it testifies about what every male or female slave (of Allah) did upon its surface. It says: He did this and that on this day. This is its information.’",
            "bn": "একটি হাদীস সরাসরি এ আয়াত নিয়ে কথা বলে। তিরমিযী (৩৩৫৩) আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন: রাসূলুল্লাহ ﷺ এই আয়াত তিলাওয়াত করলেন: সেদিন পৃথিবী তার খবর বলবে। তারপর বললেন: তোমরা কি জানো তার খবর কী? সাহাবীরা বললেন: আল্লাহ ও তাঁর রাসূলই ভালো জানেন। তিনি বললেন: তার খবর হলো, প্রত্যেক বান্দা ও বান্দী তার পিঠের উপর যা করেছে, সে তার সাক্ষ্য দেবে। সে বলবে: অমুক দিন সে এই এই করেছে। এটাই তার খবর।"
          },
          {
            "en": "The grading is not reported one way. On the page fetched for this article, at-Tirmidhi calls it hasan sahih at 3353, while at 2429, through the same chain, the page shows hasan gharib. Ibn Kathir quotes him as saying hasan sahih gharib, and al-Qurtubi as hasan sahih. These are set down as they were found, and none is raised above the others.",
            "bn": "এর মান নিয়ে বর্ণনা এক রকম নয়। এ লেখার জন্য যে পাতা দেখা হয়েছে, তাতে ৩৩৫৩ নম্বরে তিরমিযী একে বলেছেন হাসান সহীহ। আবার ২৪২৯ নম্বরে, একই সনদে, পাতায় আছে হাসান গরীব। ইবন কাসীর তাঁর কথা উদ্ধৃত করেছেন হাসান সহীহ গরীব হিসেবে, আর কুরতুবী হাসান সহীহ হিসেবে। যেমন পাওয়া গেছে, তেমনই এখানে রাখা হলো। কোনোটিকে অন্যটির উপরে তোলা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Inspired by Its Lord",
          "bn": "রবের ইশারায় মুখ খোলা"
        },
        "p": [
          {
            "en": "Bi-anna rabbaka awha laha: because your Lord inspired it. The verb takes la, to it, where ila might be expected. Al-Bukhari, as Ibn Kathir quotes him, says awha laha, awha ilayha, waha laha and waha ilayha are one. Al-Qurtubi says the Arabs put this la in place of ila, and cites the poet al-'Ajjaj describing the earth: He inspired it to stay still, and it settled. Ibn Kathir adds that the apparent sense carries a meaning of permission: the earth speaks because it has been allowed to.",
            "bn": "বিআন্না রাব্বাকা আওহা লাহা: কারণ তোমার রব তার প্রতি ওহী পাঠিয়েছেন। ক্রিয়াটির সঙ্গে এসেছে লা, তাকে, যেখানে ইলা আশা করা যেত। ইবন কাসীর বুখারীর কথা উদ্ধৃত করেন: আওহা লাহা, আওহা ইলাইহা, ওয়াহা লাহা আর ওয়াহা ইলাইহা, সবই এক। কুরতুবী বলেন, আরবরা ইলা-র জায়গায় এই লা ব্যবহার করে। প্রমাণ হিসেবে আনেন কবি আজ্জাজের একটি পঙক্তি, যেখানে তিনি পৃথিবীর বর্ণনা দিচ্ছেন: তিনি তাকে স্থির থাকার ইশারা দিলেন, আর সে স্থির হয়ে গেল। ইবন কাসীর যোগ করেন, বাহ্যিক অর্থে এতে অনুমতির ভাবও আছে। পৃথিবী কথা বলবে, কারণ তাকে বলার অনুমতি দেওয়া হয়েছে।"
          },
          {
            "en": "What was it told? Ibn Kathir relays from Ibn 'Abbas, through 'Ikrima: its Lord says to it, speak, and it speaks. Mujahid, in at-Tabari and Ibn Kathir, says: He commanded it. Al-Qurazi, in Ibn Kathir, says: He commanded it to split open from them. As-Sa'di ends the verse with a clause worth keeping: He commanded it to tell what was done on it, and it does not disobey His command. The ground that stayed silent under every step was obeying then as well; on that Day it obeys again.",
            "bn": "তাকে কী বলা হয়েছিল? ইবন কাসীর ইকরিমার সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: তার রব তাকে বলবেন, বলো, আর সে বলবে। তাবারী ও ইবন কাসীর মুজাহিদের কথা আনেন: তিনি তাকে আদেশ করেছেন। ইবন কাসীর কুরাযীর কথা আনেন: তিনি তাকে আদেশ করেছেন তাদের থেকে ফেটে আলাদা হয়ে যেতে। সা'দী আয়াতটি শেষ করেন মনে রাখার মতো একটি কথায়। তিনি তাকে আদেশ করেছেন তার উপর যা করা হয়েছে তা জানাতে, আর সে তাঁর আদেশ অমান্য করে না। যে মাটি প্রতিটি পদক্ষেপের নিচে চুপ ছিল, সে তখনও আদেশই মানছিল। সেদিনও সে আদেশই মানবে।"
          }
        ]
      }
    ]
  },
  "99:7-8": {
    "sections": [
      {
        "h": {
          "en": "The Last Two Lines",
          "bn": "শেষ দুই পংক্তি"
        },
        "p": [
          {
            "en": "Surah az-Zalzalah spends its opening verses on the earth itself. It is shaken with its final quake, throws out its burdens, and reports its news because its Lord has inspired it. Then 99:6 turns to people: on that Day they come out in scattered groups, li-yuraw a'malahum, to be shown their deeds. Ibn Kathir explains ashtat as separate kinds, the wretched and the happy, those sent to Paradise and those sent to the Fire, and the showing as recompense for the good and evil they did.",
            "bn": "সূরা আয-যালযালাহ শুরুর আয়াতগুলো খরচ করে পৃথিবীকে নিয়ে। সে শেষ কম্পনে কেঁপে ওঠে, ভেতরের বোঝা বের করে দেয়, আর রবের আদেশ পেয়ে নিজের বৃত্তান্ত বলে। তারপর ৯৯:৬ আয়াত ফেরে মানুষের দিকে: সেদিন তারা ভিন্ন ভিন্ন দলে বেরিয়ে আসবে, লিইউরাও আ'মালাহুম, যাতে তাদের আমল তাদের দেখানো হয়। ইবন কাসীর আশতাত শব্দের ব্যাখ্যা দেন আলাদা আলাদা শ্রেণি হিসেবে: হতভাগা আর সৌভাগ্যবান, জান্নাতের দিকে পাঠানো আর জাহান্নামের দিকে পাঠানো। আর দেখানো মানে, তাঁর ভাষায়, ভালো-মন্দ যা করেছে তার প্রতিদান পাওয়া।"
          },
          {
            "en": "Ibn Kathir then says: therefore Allah goes on to say, fa-man ya'mal. The fa ties the last two verses to the showing. At-Tabari notices something in the tense. The verb ya'mal looks forward, whoever does, yet on that Day the deeds are already past. He explains that the meaning is whoever did, as 99:6 makes clear, and the future form was kept because it urges the people of this world to work in obedience to Allah and holds them back from disobeying Him.",
            "bn": "এরপর ইবন কাসীর বলেন, এ কারণেই আল্লাহ বলে চলেন: ফামাই ইয়া'মাল। ফা অক্ষরটি শেষ দুই আয়াতকে সেই দেখানোর সঙ্গে বেঁধে দেয়। তাবারী ক্রিয়ার কালের দিকে নজর দেন। ইয়া'মাল শব্দটা সামনের দিকে তাকায়, অর্থাৎ যে করবে। অথচ সেদিন সব আমল তো অতীত হয়ে গেছে। তাঁর ব্যাখ্যা: অর্থ আসলে যে করেছে, ৯৯:৬ আয়াতই তা পরিষ্কার করে দেয়। ভবিষ্যৎ কালের রূপটা রাখা হয়েছে, কারণ এতে দুনিয়ার মানুষকে আল্লাহর আনুগত্যে আমল করার তাগিদ আছে, আর তাঁর নাফরমানি থেকে বিরত রাখার ধমকও আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight of a Dharrah",
          "bn": "এক যাররার ওজন"
        },
        "p": [
          {
            "en": "Mithqal is a weight, and the word that carries the verse is dharrah. The commentators gloss it with the smallest things they could name. Al-Muyassar says the weight of a small ant. Al-Baghawi sharpens it: a small ant, the smallest there is of ants. Sa'id ibn Jubayr, in a report Ibn Kathir carries, says the weight of the smallest ant. At-Tabari gives Ibn Abbas (RA), through 'Ikrimah, as saying a red ant, or in another narrator's wording a red dharrah.",
            "bn": "মিসকাল মানে ওজন, আর আয়াতের ভার বহন করছে যাররাহ শব্দটি। তাফসীরকারেরা এর ব্যাখ্যায় এমন সব জিনিসের নাম নেন, যার চেয়ে ছোট কিছু তাঁরা ভাবতে পারেননি। মুয়াসসার বলে, ছোট একটি পিঁপড়ার ওজন। বাগাভী আরও নির্দিষ্ট করেন: ছোট পিঁপড়া, পিঁপড়াদের মধ্যে যত ছোট হতে পারে। ইবন কাসীরের আনা এক বর্ণনায় সাঈদ ইবন জুবাইর বলেন, সবচেয়ে ছোট পিঁপড়ার ওজন। তাবারী ইকরিমার সূত্রে ইবন আব্বাস (রাঃ)-এর কথা আনেন: লাল পিঁপড়া। আরেক বর্ণনাকারীর ভাষায়, লাল যাররাহ।"
          },
          {
            "en": "Other glosses push the thing below the scale altogether. At-Tabari records that it is said the dharrah is a small red worm with no weight, and that Yazid ibn Harun remarked that people claimed it weighs nothing. Al-Qurtubi cites a report that the dharrah has no weight, and calls the phrase a parable: Allah overlooks nothing a human being does, small or great, as in 4:40, where He wrongs no one by a dharrah's weight. He adds a lexical gloss, which he also reports from Ibn Abbas (RA): each grain of dust that clings to a hand struck on the ground.",
            "bn": "কিছু ব্যাখ্যা জিনিসটাকে দাঁড়িপাল্লার নিচেই নামিয়ে দেয়। তাবারী লেখেন, বলা হয় যাররাহ হলো ছোট্ট এক লাল পোকা, যার কোনো ওজন নেই। ইয়াযীদ ইবন হারূন বলেছেন, লোকেরা মনে করত এর কোনো ওজনই নেই। কুরতুবী একটি বর্ণনা আনেন যে যাররার কোনো ওজন নেই। তাঁর মতে কথাটা এক উপমা: আদমসন্তানের ছোট-বড় কোনো আমলই আল্লাহ উপেক্ষা করেন না। যেমন ৪:৪০ আয়াতে তিনি বলেন, কারও প্রতি এক যাররাহ পরিমাণও জুলুম করেন না। ভাষাবিদদের একটি ব্যাখ্যাও কুরতুবী দেন, যা তিনি ইবন আব্বাস (রাঃ) থেকেও উল্লেখ করেন: মাটিতে হাত চাপড়ে তুললে যে ধুলো লেগে থাকে, তার প্রতিটি কণা একেকটি যাররাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verse Without Exceptions",
          "bn": "ব্যতিক্রমহীন এক আয়াত"
        },
        "p": [
          {
            "en": "As-Sa'di calls the pair inclusive and general, covering all good and all evil. If a person sees the dharrah, the most insignificant of things, and is recompensed for it, then whatever lies above it is all the more certain. The two verses match word for word except khayran and sharran, good and evil, so the same weight and the same certainty apply on both sides. He finds in them the utmost encouragement to do good, however little, and the utmost warning against evil, however slight.",
            "bn": "সা'দী এই আয়াত দুটিকে বলেন ব্যাপক ও সাধারণ, সব ভালো আর সব মন্দ এর আওতায়। যাররাহ সবচেয়ে নগণ্য জিনিস। মানুষ যদি তা-ও দেখতে পায় এবং তার প্রতিদান পায়, তাহলে এর চেয়ে বড় যা কিছু, তা তো আরও নিশ্চিতভাবে দেখবে। দুই আয়াত হুবহু এক, শুধু খাইরান আর শাররান আলাদা, মানে ভালো আর মন্দ। তাই দুই দিকেই একই ওজন, একই নিশ্চয়তা। সা'দী এখানে দেখেন ভালো কাজের প্রতি চূড়ান্ত উৎসাহ, তা যত অল্পই হোক। আর মন্দ কাজ থেকে চূড়ান্ত সতর্কবাণী, তা যত তুচ্ছই হোক।"
          },
          {
            "en": "Al-Qurtubi reports Ibn Mas'ud (RA) calling this the most decisive verse in the Qur'an, and adds his own verdict: he spoke the truth. The scholars, he says, agree that the verse is general, both those who hold that general wording is taken as general and those who do not. At-Tabari records a quieter reaction. Al-Harith ibn Suwayd recited the surah through to its last verse and said: this is a severe reckoning.",
            "bn": "কুরতুবী ইবন মাসউদ (রাঃ)-এর কথা আনেন: কুরআনের সবচেয়ে সুদৃঢ় আয়াত এটি। তারপর নিজের মন্তব্য জুড়ে দেন: তিনি সত্য বলেছেন। তাঁর ভাষ্যে, আলিমরা একমত যে এ আয়াত সাধারণ অর্থে প্রযোজ্য। যাঁরা সাধারণ শব্দকে সাধারণ অর্থে নেন, আর যাঁরা নেন না, দুই দলই এখানে এক কথা বলেন। তাবারী আরও নীরব এক প্রতিক্রিয়ার কথা লিখেছেন। হারিস ইবন সুওয়াইদ সূরাটি শেষ আয়াত পর্যন্ত পড়লেন, তারপর বললেন: এ তো কঠিন হিসাব।"
          }
        ]
      },
      {
        "h": {
          "en": "What Exactly Is Seen",
          "bn": "ঠিক কী দেখা যাবে"
        },
        "p": [
          {
            "en": "Yarah: he will see it. But a deed has already passed. Al-Qurtubi records the reasoning: it is said that he sees its recompense, because what he did has gone and ceased to exist. At-Tabari reads it the same way: whoever did a dharrah's weight of good in this world sees its reward there, and whoever did a dharrah's weight of evil sees its recompense there. Al-Muyassar says plainly: he sees its reward, or its punishment, in the Hereafter.",
            "bn": "ইয়ারাহ: সে তা দেখবে। কিন্তু আমল তো ঘটে গিয়ে শেষ হয়ে গেছে। কুরতুবী একটি যুক্তি উল্লেখ করেন: বলা হয়, সে দেখবে তার প্রতিদান, কারণ যা সে করেছিল তা অতীত হয়ে বিলীন হয়ে গেছে। তাবারীর পাঠও একই রকম। দুনিয়াতে যে এক যাররাহ পরিমাণ ভালো করেছে, সে সেখানে তার সওয়াব দেখবে। আর যে এক যাররাহ পরিমাণ মন্দ করেছে, সে সেখানে তার প্রতিফল দেখবে। মুয়াসসার সহজ ভাষায় বলে: আখিরাতে সে তার সওয়াব দেখবে, কিংবা তার শাস্তি।"
          },
          {
            "en": "Sa'id ibn Jubayr, in the report Ibn Kathir carries, gives a second picture: he sees it in his book, and it pleases him. As-Sa'di sets beside the verse 3:30, the Day every soul finds the good it did brought before it, and the evil it did, wishing a long distance lay between it and that, and the words of 18:49, they found what they had done present. Both pictures stand in the commentaries, the record and the recompense.",
            "bn": "ইবন কাসীরের আনা বর্ণনায় সাঈদ ইবন জুবাইর আরেকটি ছবি দেন: সে তা দেখবে তার আমলনামায়, আর তাতে সে খুশি হবে। সা'দী আয়াতের পাশে রাখেন ৩:৩০ আয়াত: সেদিন প্রত্যেকে নিজের করা ভালো কাজ সামনে হাজির পাবে, আর মন্দ কাজও। তখন সে চাইবে, তার আর ওই মন্দের মাঝে যদি অনেক দূরত্ব থাকত! সঙ্গে রাখেন ১৮:৪৯ আয়াতের কথা: তারা যা করেছিল, তা সামনে উপস্থিত পেল। তাফসীরে দুটি ছবিই পাশাপাশি আছে, আমলনামা আর প্রতিদান।"
          },
          {
            "en": "There is also a variant reading. Al-Qurtubi notes that the general reading is yarahu, he sees it, in both verses. Al-Jahdari, as-Sulami, 'Isa ibn 'Umar, and Aban reporting from 'Asim read yurahu, he is shown it, meaning Allah shows it to him. Al-Qurtubi prefers the first and gives 3:30 as his reason. The two readings meet in 99:6, where people come out li-yuraw a'malahum, to be shown their deeds.",
            "bn": "এখানে একটি ভিন্ন কিরাআতও আছে। কুরতুবী জানান, অধিকাংশের কিরাআত দুই আয়াতেই ইয়ারাহু, অর্থাৎ সে দেখবে। জাহদারী, সুলামী, ঈসা ইবন উমর, আর আসিম থেকে আবান পড়েছেন ইউরাহু, অর্থাৎ তাকে দেখানো হবে, আল্লাহ তাকে তা দেখাবেন। কুরতুবী প্রথমটিকে অগ্রাধিকার দেন, আর কারণ হিসেবে আনেন ৩:৩০ আয়াত। দুই কিরাআত এসে মেলে ৯৯:৬ আয়াতে, যেখানে মানুষ বেরিয়ে আসে লিইউরাও আ'মালাহুম, যাতে তাদের আমল তাদের দেখানো হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When and Where It Is Seen",
          "bn": "কখন, কোথায় দেখা"
        },
        "p": [
          {
            "en": "The real disagreement is over two cases: the believer's small evil and the disbeliever's small good. At-Tabari begins with a saying of Ibn Abbas (RA). No believer and no disbeliever does good or evil in this world without Allah bringing it to him. The believer is shown his good deeds and his bad deeds, and Allah forgives him the bad. The disbeliever's good deeds are turned back, and he is punished for his bad ones. Al-Baghawi gives the same saying, adding that the believer is rewarded for his good.",
            "bn": "আসল মতভেদ দুটি ক্ষেত্রে: মুমিনের ছোট মন্দ আর কাফিরের ছোট ভালো। তাবারী শুরু করেন ইবন আব্বাস (রাঃ)-এর একটি কথা দিয়ে। দুনিয়াতে কোনো মুমিন বা কাফির ভালো-মন্দ যা-ই করুক, আল্লাহ তা তার সামনে এনে দেবেন। মুমিনকে তার নেকি আর গুনাহ দুটোই দেখানো হবে, তারপর আল্লাহ তার গুনাহ মাফ করে দেবেন। কাফিরের নেকিগুলো ফিরিয়ে দেওয়া হবে, আর তার গুনাহের জন্য তাকে শাস্তি দেওয়া হবে। বাগাভীও একই কথা আনেন, সঙ্গে যোগ করেন যে মুমিনকে তার নেকির প্রতিদানও দেওয়া হবে।"
          },
          {
            "en": "Muhammad ibn Ka'b al-Qurazi reads it otherwise, and at-Tabari, al-Qurtubi and al-Baghawi all carry his words. A disbeliever who does a dharrah's weight of good sees its reward in this world, in himself, his family, his wealth and his children, until he leaves the world with no good left for him with Allah. A believer who does a dharrah's weight of evil sees its punishment in this world in the same ways, until he leaves it with no evil left. Al-Qurtubi gives a saying of Ibn Abbas (RA) close to this.",
            "bn": "মুহাম্মাদ ইবন কা'ব আল-কুরাযী ভিন্নভাবে পড়েন, আর তাবারী, কুরতুবী, বাগাভী তিনজনই তাঁর কথা এনেছেন। কাফির এক যাররাহ পরিমাণ ভালো করলে তার প্রতিদান দেখে নেয় দুনিয়াতেই: নিজের জীবনে, পরিবারে, সম্পদে, সন্তানে। শেষে সে দুনিয়া ছেড়ে যায় এমন অবস্থায় যে আল্লাহর কাছে তার জন্য কোনো ভালো জমা নেই। মুমিন এক যাররাহ পরিমাণ মন্দ করলে তার শাস্তিও দুনিয়াতেই দেখে নেয়, একইভাবে। শেষে দুনিয়া ছেড়ে যায় কোনো মন্দ সঙ্গে না নিয়ে। কুরতুবী ইবন আব্বাস (রাঃ)-এর এমন একটি কথাও আনেন, যা এর কাছাকাছি।"
          },
          {
            "en": "So the companion's name stands on both sides, through different reports. At-Tabari then cites narrations he says point to the second view, among them one through Anas (RA): Abu Bakr (RA) was eating with the Prophet ﷺ when these verses came down, and he lifted his hand. The Prophet ﷺ said: whatever you see in this world that you dislike is the dharrah-weights of evil, and Allah stores up for you the dharrah-weights of good until you are given them in full on the Day of Resurrection. At-Tabari attaches no grading to it.",
            "bn": "অর্থাৎ ভিন্ন ভিন্ন বর্ণনার সূত্রে একই সাহাবীর নাম দুই দিকেই আছে। এরপর তাবারী কিছু বর্ণনা আনেন, যা তাঁর মতে দ্বিতীয় মতের দিকে ইঙ্গিত করে। এর একটি আনাস (রাঃ)-এর সূত্রে: আবু বকর (রাঃ) নবী ﷺ-এর সঙ্গে খাচ্ছিলেন, এমন সময় এ আয়াত দুটি নাজিল হয়। তিনি খাবার থেকে হাত তুলে নিলেন। নবী ﷺ বললেন: দুনিয়াতে অপছন্দের যা কিছু তুমি দেখো, তা মন্দের যাররাহ পরিমাণ ওজনগুলো। আর ভালোর যাররাহ পরিমাণ ওজনগুলো আল্লাহ তোমার জন্য জমা রাখেন, কিয়ামতের দিন পুরোপুরি দিয়ে দেওয়া পর্যন্ত। তাবারী এর মান সম্পর্কে কিছু বলেননি।"
          },
          {
            "en": "Ma'arif al-Qur'an holds that a good deed counts in the Hereafter only when done with faith, and that the evil meant is evil not repented of. At-Tabari also carries 'A'ishah's (RA) question about Ibn Jud'an, which Muslim (214) records thus: Ibn Jud'an kept ties of kinship and fed the poor in the Jahiliyyah; would that benefit him? He said: it will not benefit him; he never once said, my Lord, forgive me my sin on the Day of Judgement. These verses describe the reckoning on that Day; they license nothing against any living person or community.",
            "bn": "মাআরিফুল কুরআনের মতে, ভালো কাজ আখিরাতে গণ্য হয় কেবল ঈমানের সঙ্গে করা হলে। আর এখানে মন্দ বলতে বোঝানো হয়েছে সেই মন্দ, যার জন্য তওবা করা হয়নি। তাবারী ইবন জুদআন সম্পর্কে আয়িশা (রাঃ)-এর প্রশ্নটিও এনেছেন। মুসলিম (২১৪) তা এভাবে বর্ণনা করেছেন: ইবন জুদআন জাহিলি যুগে আত্মীয়তার বন্ধন রক্ষা করত, মিসকীনকে খাওয়াত, এতে কি তার কোনো উপকার হবে? নবী ﷺ বললেন: উপকার হবে না, কারণ সে কোনো দিন বলেনি, হে আমার রব, বিচারের দিন আমার গুনাহ মাফ করে দিয়ো। এ দুই আয়াত সেদিনের হিসাবের বর্ণনা দেয়। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Too Small to Count",
          "bn": "গোনার মতো নয় ভেবে"
        },
        "p": [
          {
            "en": "Ibn Kathir carries, from Ibn Abi Hatim, a report from Sa'id ibn Jubayr on the setting of these verses. When 76:8 came down, praising those who give food out of love for it, some Muslims thought they would earn no reward for the little they gave. A poor man would come to their doors and they thought a date, a crust or a walnut too little, and turned him away, saying: this is nothing; we are rewarded only for what we give while we love it.",
            "bn": "ইবন কাসীর ইবন আবী হাতিম থেকে সাঈদ ইবন জুবাইরের একটি বর্ণনা আনেন, এ আয়াত দুটির প্রেক্ষাপট নিয়ে। ৭৬:৮ আয়াত নাজিল হলো, যেখানে প্রশংসা আছে তাদের, যারা নিজের প্রিয় খাবার অন্যকে খাওয়ায়। তখন কিছু মুসলমান ভাবলেন, অল্প কিছু দিলে তার সওয়াব মিলবে না। কোনো মিসকীন দরজায় এলে একটা খেজুর, এক টুকরো রুটি বা একটা আখরোট দেওয়াকে তাঁরা খুব কম মনে করতেন। তাকে ফিরিয়ে দিয়ে বলতেন: এ তো কিছুই না। সওয়াব তো কেবল সেই জিনিস দিলে, যা আমাদের নিজেদের প্রিয়।"
          },
          {
            "en": "Others thought they would not be blamed for a slight sin: a lie, a glance, backbiting, since Allah promised the Fire only for the major sins. So, in the report, these verses came down to make them want the little good, because it soon grows, and to warn them off the slight evil, because it too soon grows. Al-Qurtubi and al-Baghawi give the same account from Muqatil, as concerning two men, and add that on that Day the small sin will look greater than mountains to its doer. It is a reported setting, given on these men's word, not a settled one.",
            "bn": "আরেক দল ভাবত, ছোটখাটো গুনাহে কোনো দোষ ধরা হবে না: একটা মিথ্যা, একবার তাকানো, একটু গীবত। তাদের যুক্তি, আল্লাহ জাহান্নামের হুমকি দিয়েছেন কেবল কবীরা গুনাহের জন্য। বর্ণনা অনুযায়ী তখন এ আয়াত দুটি নাজিল হয়। উদ্দেশ্য, অল্প ভালো কাজে তাদের আগ্রহী করা, কারণ তা দেখতে দেখতে বেড়ে যায়। আর অল্প মন্দ থেকে সাবধান করা, কারণ সেটাও দেখতে দেখতে বেড়ে যায়। কুরতুবী আর বাগাভী একই ঘটনা মুকাতিল থেকে আনেন, দুজন মানুষকে ঘিরে। তাঁরা যোগ করেন, সেদিন ছোট গুনাহটাও তার কর্তার চোখে পাহাড়ের চেয়ে বড় দেখাবে। এটি বর্ণিত প্রেক্ষাপট, এই বর্ণনাকারীদের কথার ওপর দাঁড়ানো, প্রতিষ্ঠিত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Unique, Comprehensive Verse",
          "bn": "একক ও সর্বব্যাপী আয়াত"
        },
        "p": [
          {
            "en": "Ibn Kathir places here a hadith of Abu Hurayrah (RA) from al-Bukhari, which Muslim also records. Most of it concerns horses, a reward for one man, a shield for another, a burden for a third. Al-Bukhari (2371) gives its closing part in these words: The Messenger of Allah ﷺ was asked about donkeys, and he said: nothing has been sent down to me about them except this comprehensive, unique verse, whoever does a dharrah's weight of good will see it, and whoever does a dharrah's weight of evil will see it.",
            "bn": "ইবন কাসীর এখানে আবু হুরাইরা (রাঃ)-এর একটি হাদীস আনেন বুখারী থেকে, মুসলিমও যা বর্ণনা করেছেন। হাদীসের বেশির ভাগ ঘোড়া নিয়ে: কারও জন্য তা সওয়াব, কারও জন্য আড়াল, আবার কারও জন্য বোঝা। বুখারী (২৩৭১) এর শেষ অংশটি এভাবে বর্ণনা করেছেন: রাসূলুল্লাহ ﷺ-কে গাধা সম্পর্কে জিজ্ঞেস করা হলো। তিনি বললেন, এ বিষয়ে আমার ওপর কিছুই নাজিল হয়নি, এই সর্বব্যাপী ও একক আয়াতটি ছাড়া: যে এক যাররাহ পরিমাণ ভালো করবে, সে তা দেখবে, আর যে এক যাররাহ পরিমাণ মন্দ করবে, সে-ও তা দেখবে।"
          },
          {
            "en": "Al-Baghawi says the question was about zakat on donkeys. Al-Qurtubi reports Ibn al-'Arabi's explanation of the answer: the Prophet ﷺ had described the lasting reward in horses, so the questioner asked about donkeys, and was answered by the general sweep of the verse, for in a donkey there are many dharrah-weights. A narrow question about one kind of property received a principle that covers every act of every person.",
            "bn": "বাগাভী বলেন, প্রশ্নটা ছিল গাধার যাকাত নিয়ে। কুরতুবী জবাবটির একটি ব্যাখ্যা আনেন ইবনুল আরাবী থেকে। নবী ﷺ ঘোড়ার মধ্যে স্থায়ী সওয়াবের কথা বলেছিলেন, তাই প্রশ্নকারী গাধার কথা জানতে চাইলেন। জবাব এল আয়াতের ব্যাপকতা দিয়ে, কারণ একটি গাধার মধ্যেও যাররাহ পরিমাণ ওজন আছে অনেক। এক ধরনের সম্পদ নিয়ে ছোট্ট একটি প্রশ্ন, আর জবাবে এল এমন এক নীতি, যা প্রত্যেক মানুষের প্রতিটি কাজকে ঘিরে ফেলে।"
          },
          {
            "en": "Ibn Kathir and Ma'arif al-Qur'an both attach a warning given to 'A'ishah (RA). Ibn Majah (4243) records it in these words: O 'A'ishah, beware of deeds regarded as insignificant, for they have a pursuer from Allah. Ibn Majah gives no grading of his own. Ibn Kathir cites it from Ahmad, whose wording speaks of insignificant sins, and notes that an-Nasa'i and Ibn Majah recorded it. What a person dismisses as too small to matter is not dismissed; something is still coming after it.",
            "bn": "ইবন কাসীর আর মাআরিফুল কুরআন দুটিতেই আয়িশা (রাঃ)-কে দেওয়া একটি সতর্কবাণী আছে। ইবন মাজাহ (৪২৪৩) তা এভাবে বর্ণনা করেছেন: হে আয়িশা, তুচ্ছ মনে হওয়া আমল থেকে সাবধান থেকো, কারণ আল্লাহর পক্ষ থেকে সেগুলোর পেছনে একজন তলবকারী আছে। ইবন মাজাহ নিজে এর কোনো মান উল্লেখ করেননি। ইবন কাসীর হাদীসটি এনেছেন আহমাদ থেকে, যাঁর বর্ণনায় শব্দটা তুচ্ছ গুনাহ। তিনি জানান, নাসাঈ আর ইবন মাজাহও এটি বর্ণনা করেছেন। মানুষ যাকে তুচ্ছ বলে ঝেড়ে ফেলে, তা আসলে ঝরে যায় না। কিছু একটা তখনও তার পিছু নিয়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Single Grape",
          "bn": "একটিমাত্র আঙুর"
        },
        "p": [
          {
            "en": "Some took the verses literally in their giving. Al-Qurtubi cites the Muwatta: a poor man asked 'A'ishah (RA) for food while grapes lay before her. She told someone to take one grape and give it to him, and when the man looked at it in surprise she said: are you surprised? How many dharrah-weights do you see in this grape? Al-Baghawi says that 'Umar ibn al-Khattab and 'A'ishah each gave a grape in charity and said there are many weights in it.",
            "bn": "কেউ কেউ দান করতে গিয়ে আয়াতটিকে আক্ষরিক অর্থেই নিয়েছিলেন। কুরতুবী মুয়াত্তা থেকে আনেন: এক মিসকীন আয়িশা (রাঃ)-এর কাছে খাবার চাইল, তখন তাঁর সামনে আঙুর রাখা। তিনি একজনকে বললেন, একটা দানা নিয়ে তাকে দাও। লোকটা দানাটার দিকে অবাক হয়ে তাকিয়ে রইল। আয়িশা (রাঃ) বললেন: অবাক হচ্ছ? এই একটা দানায় কত যাররাহ পরিমাণ ওজন আছে, দেখতে পাচ্ছ? বাগাভী বলেন, উমর ইবনুল খাত্তাব আর আয়িশা দুজনেই একটি করে আঙুর দান করেছিলেন, আর বলেছিলেন, এর মধ্যে বহু ওজন আছে।"
          },
          {
            "en": "Ibn Kathir sets here a saying the Prophet ﷺ gave in general, not about this verse, and it is told whole in al-Bukhari (1417) from 'Adi ibn Hatim: guard yourselves against the Fire, even with half a date. Ibn Kathir's wording adds even with a good word. Al-Qurtubi adds that Sa'd ibn Abi Waqqas, giving two dates, said they hold many dharrah-weights. Half a date, one grape: the verse made the small gift worth giving.",
            "bn": "ইবন কাসীর এখানে নবী ﷺ-এর একটি সাধারণ বাণী আনেন। এটি এই আয়াত নিয়ে বলা নয়। বুখারী (১৪১৭) আদী ইবন হাতিম থেকে তা পুরোটা বর্ণনা করেছেন: আধখানা খেজুর দিয়ে হলেও জাহান্নাম থেকে বাঁচো। ইবন কাসীরের বর্ণনায় এর সঙ্গে আছে, একটি ভালো কথা দিয়ে হলেও। কুরতুবী জানান, সা'দ ইবন আবী ওয়াক্কাস দুটি খেজুর দান করে বলেছিলেন, এতে বহু যাররাহ পরিমাণ ওজন আছে। আধখানা খেজুর, একটি আঙুর: আয়াতটি ছোট দানকেও দেওয়ার যোগ্য করে তুলেছে।"
          },
          {
            "en": "Al-Baghawi closes with a scene from ar-Rabi' ibn Khuthaym: a man passed al-Hasan while he was reciting this surah, and when he reached its end he said: enough for me; the admonition is complete. The report leaves unclear who was reciting and who spoke. The practical charge is simple all the same. Stop grading your deeds by how large they look, give the date you were about to keep, and leave alone the small wrong you were about to excuse.",
            "bn": "বাগাভী শেষ করেন রাবী ইবন খুসাইমের বর্ণিত একটি দৃশ্য দিয়ে: এক ব্যক্তি হাসানের পাশ দিয়ে যাচ্ছিল, আর তখন এই সূরা পড়া চলছিল। সূরার শেষে পৌঁছে বলা হলো: আমার জন্য এটুকুই যথেষ্ট, উপদেশ পূর্ণ হয়ে গেছে। বর্ণনায় কে পড়ছিলেন আর কে বললেন, তা স্পষ্ট নয়। করণীয়টা তবু সহজ। নিজের আমলকে বড়-ছোট দেখে বিচার করা বন্ধ করুন। যে খেজুরটা রেখে দিতে যাচ্ছিলেন, সেটা দিয়ে দিন। আর যে ছোট অন্যায়টাকে মাফ করে দিতে যাচ্ছিলেন নিজের মনে, সেটা থেকে দূরে থাকুন।"
          }
        ]
      }
    ]
  }
});
