/**
 * Tadabbur long-form articles — surah 90.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "90:4": {
    "sections": [
      {
        "h": {
          "en": "The Oath and Its Answer",
          "bn": "শপথ ও তার জবাব"
        },
        "p": [
          {
            "en": "Laqad khalaqna al-insana fi kabad: We have certainly created man in hardship. Five Arabic words carry the weight of the oaths before them. 90:1 swears by this city, 90:2 tells the Prophet ﷺ that he is hill in it, and 90:3 swears by a father and what he begot. The Muyassar names the city as Makkah, the sacred land, and the father as Adam (AS), the father of humankind, with the offspring descended from him.",
            "bn": "লাকাদ খালাকনাল ইনসানা ফী কাবাদ: আমি মানুষকে সৃষ্টি করেছি কষ্টের মধ্যে। আরবিতে মাত্র পাঁচটি শব্দ, অথচ আগের সব শপথের ভার এদের ওপর। ৯০:১ আয়াতে শপথ এই নগরের। ৯০:২ আয়াতে নবী ﷺ-কে বলা হয়েছে, তিনি এই নগরে 'হিল'। ৯০:৩ আয়াতে শপথ জন্মদাতার, আর সে যা জন্ম দিয়েছে তার। মুয়াসসার জানায়, নগরটি মক্কা, সম্মানিত ভূমি। আর জন্মদাতা হলেন মানবজাতির পিতা আদম (আঃ), সঙ্গে তাঁর থেকে আসা বংশধরেরা।"
          },
          {
            "en": "Then laqad arrives, and at-Tabari says plainly that this is the answer to the oath, carrying a line from Qatadah to the same effect: here the oath falls. Al-Qurtubi agrees that the oath ends here and this is its reply, adding that Allah swears by whatever He wills of His creation in order to magnify it. A sacred city and a human lineage are called as witnesses, and what they witness to concerns every human being born: the conditions in which he was made.",
            "bn": "এরপর আসে 'লাকাদ'। তাবারী সোজাসুজি বলেন, এটাই শপথের জবাব। কাতাদা থেকেও তিনি একই কথা আনেন: শপথ এসে পড়েছে এখানেই। কুরতুবীও বলেন, শপথ এখানে শেষ আর এটাই তার জবাব। তিনি যোগ করেন, আল্লাহ তাঁর সৃষ্টির যেটির ইচ্ছা শপথ করেন, তাকে মর্যাদা দিতে। তাহলে সাক্ষী হিসেবে ডাকা হলো একটি পবিত্র নগর আর একটি মানববংশকে। আর তাদের সাক্ষ্য যে কথার ওপর, তা জন্ম নেওয়া প্রত্যেক মানুষের ব্যাপারে: কোন অবস্থার ভেতরে তাকে গড়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Found Only Here",
          "bn": "কুরআনে একবারই আসা শব্দ"
        },
        "p": [
          {
            "en": "Kabad appears in the Qur'an in this verse alone; no other verse uses the word or its verb. Al-Qurtubi says its root sense is severity, and his examples are of thickening. Milk is said to takabbada when it thickens and curdles. The liver, al-kabid, takes its name from the same root, he says, because it is blood that has thickened and set hard. And an Arab says kabadtu hadha al-amr, I grappled with this matter, when he has suffered its harshness. The word is physical before it is moral.",
            "bn": "'কাবাদ' শব্দটি কুরআনে শুধু এই আয়াতেই আছে। অন্য কোনো আয়াতে শব্দটি বা এর ক্রিয়ারূপ আসেনি। কুরতুবী বলেন, এর মূল অর্থ কাঠিন্য, আর তাঁর উদাহরণগুলো সবই ঘন হয়ে যাওয়ার। দুধ জমে গাঢ় হলে আরবরা বলে 'তাকাব্বাদাল লাবান'। কলিজার নাম 'কাবিদ'-ও এই ধাতু থেকে, কারণ তাঁর ভাষায় কলিজা হলো রক্ত, যা ঘন হয়ে শক্ত হয়ে গেছে। কেউ কোনো কাজের কঠোরতা সয়ে গেলে বলে 'কাবাদতু হাযাল আমর', এ কাজের সঙ্গে আমি যুঝেছি। নৈতিক অর্থে যাওয়ার আগে শব্দটি তাই শরীরের ভাষা।"
          },
          {
            "en": "At-Tabari and al-Qurtubi both bring the same line of Labid ibn Rabi'ah as evidence: O eye, why did you not weep for Arbad, when we stood and the disputants stood in kabad. A note in at-Tabari's printed text explains that Labid was mourning his brother Arbad. The picture is of men on their feet in a hard dispute, holding their ground under strain. That sense is the one at-Tabari finally chooses, and Labid's line is his reason: it is what the word is known to mean in the speech of the Arabs.",
            "bn": "তাবারী ও কুরতুবী দুজনেই প্রমাণ হিসেবে আনেন লাবীদ ইবন রাবীআর কবিতার একই চরণ: হে চোখ, আরবাদের জন্য তুমি কাঁদলে না কেন, যখন আমরা দাঁড়িয়েছিলাম আর প্রতিপক্ষরাও দাঁড়িয়েছিল 'কাবাদে'। তাবারীর মুদ্রিত পাঠের এক টীকা জানায়, লাবীদ এখানে ভাই আরবাদের জন্য শোক করছিলেন। ছবিটা কঠিন বিবাদের মুখে পায়ের ওপর দাঁড়িয়ে থাকা মানুষের, চাপের মধ্যেও যারা জায়গা ছাড়ছে না। এই অর্থটাই তাবারী শেষে বেছে নেন। তাঁর যুক্তি এই চরণ: আরবদের ভাষায় শব্দটির পরিচিত অর্থ এটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Toil From the Womb Onward",
          "bn": "মায়ের গর্ভ থেকেই শ্রম"
        },
        "p": [
          {
            "en": "At-Tabari opens the disagreement with the reading most commentators hold: Allah created the son of Adam in hardship, weariness and toil. He gives it from Ibn 'Abbas (RA) as fi nasab, in toil; from al-Hasan and 'Ikrimah as in hardship; and from Qatadah as created in strain, so that you never meet the son of Adam except grappling with the affairs of this world and the next. Al-Baghawi carries the same lines from Ibn 'Abbas, al-Hasan and Qatadah.",
            "bn": "মতভেদের আলোচনা তাবারী শুরু করেন সেই ব্যাখ্যা দিয়ে, যা বেশির ভাগ মুফাসসিরের: আল্লাহ আদমসন্তানকে সৃষ্টি করেছেন কাঠিন্য, ক্লান্তি আর পরিশ্রমের ভেতরে। ইবন আব্বাস (রাঃ) থেকে তিনি আনেন 'ফী নাসাব', মানে পরিশ্রমে। হাসান ও ইকরিমা থেকে আনেন: কাঠিন্যে। আর কাতাদা থেকে: তাকে সৃষ্টি করা হয়েছে কষ্টের মধ্যে, তাই আদমসন্তানকে যখনই দেখবেন, দেখবেন দুনিয়া আর আখিরাতের কাজ নিয়ে যুঝছে। বাগাভীও ইবন আব্বাস (রাঃ), হাসান ও কাতাদা থেকে একই কথাগুলো আনেন।"
          },
          {
            "en": "Others spell out where the hardship lies. Sa'id ibn Jubayr, in Ibn Kathir, says hardship and the search for a living. Ibn 'Abbas, in the report through 'Ata' that al-Baghawi gives, lists the hardship of being carried, born, nursed and weaned, of earning, living and dying; Mujahid in at-Tabari names the pain of teeth coming through. Mujahid in Ibn Kathir goes further back: a drop, a clot, a lump of flesh, labouring in his very formation. He links it to 46:15, where the mother carries him with hardship and delivers him with hardship.",
            "bn": "অন্যরা খুলে বলেন কষ্টটা কোথায় কোথায়। ইবন কাসীরের বর্ণনায় সাঈদ ইবন জুবাইর বলেন: কাঠিন্য আর রুজির খোঁজ। আতার সূত্রে ইবন আব্বাস (রাঃ)-এর যে বর্ণনা বাগাভী আনেন, তাতে তালিকাটা এমন: পেটে বহন হওয়া, জন্ম, দুধ খাওয়া আর দুধ ছাড়ার কষ্ট, তারপর রোজগার, জীবন আর মৃত্যুর কষ্ট। তাবারীর বর্ণনায় মুজাহিদ বলেন দাঁত ওঠার যন্ত্রণার কথা। ইবন কাসীরের বর্ণনায় মুজাহিদ আরও পেছনে যান: শুক্রবিন্দু, জমাট রক্ত, মাংসপিণ্ড; গঠনের ভেতরেই সে কষ্ট সইছে। তিনি একে মেলান ৪৬:১৫ আয়াতের সঙ্গে, যেখানে মা তাকে গর্ভে বহন করে কষ্টে আর প্রসব করে কষ্টে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Lifetime in One List",
          "bn": "এক তালিকায় গোটা জীবন"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives this reading its fullest form in a passage he credits to our scholars. The first thing a person grapples with is the cutting of his cord; then he is swaddled and bound and grapples with the tightness; then with nursing, which if he missed he would perish; then with his teeth coming through and his tongue learning to move; then with weaning, which they call harder than a slap; then with circumcision, aches and sorrows; then with the teacher's severity and the tutor's discipline.",
            "bn": "এই ব্যাখ্যার সবচেয়ে বিস্তারিত রূপ পাওয়া যায় কুরতুবীর এক অনুচ্ছেদে, যা তিনি 'আমাদের আলেমগণ'-এর কথা বলে উল্লেখ করেন। মানুষের প্রথম কষ্ট নাড়ি কাটা। তারপর তাকে কাপড়ে পেঁচিয়ে বাঁধা হয়, আর সে সয় সেই আঁটসাঁট বাঁধন। তারপর দুধ খাওয়ার কষ্ট, যা না পেলে সে বাঁচত না। তারপর দাঁত গজানো আর জিভ নাড়তে শেখা। তারপর দুধ ছাড়ানো, যাকে তাঁরা চড় খাওয়ার চেয়েও কঠিন বলেন। তারপর খতনা, ব্যথা আর দুঃখ। তারপর শিক্ষকের কড়া শাসন আর আদব শেখানো উস্তাদের নিয়মকানুন।"
          },
          {
            "en": "Then come marriage and its haste, children, servants and dependants, houses and their building, then old age, weak knees and feet, headaches, toothache, sore eyes, the gloom of debt, and trials in wealth and person. No day passes without its hardship. Then death after all of it, the questioning of the angel, the squeeze and darkness of the grave, the raising and the presentation before Allah, until he settles in the Garden or the Fire. Al-Qurtubi says these afflictions are too many to count.",
            "bn": "এরপর আসে বিয়ের ব্যস্ততা আর তার তাড়া, সন্তান, চাকর-বাকর আর পোষ্যদের ভার, ঘরবাড়ি বানানোর ঝামেলা। তারপর বার্ধক্য, দুর্বল হাঁটু আর পা, মাথাব্যথা, দাঁতের ব্যথা, চোখের অসুখ, ঋণের দুশ্চিন্তা, আর সম্পদ ও জীবনের নানা পরীক্ষা। এমন কোনো দিন যায় না, যাতে কষ্ট নেই। সবকিছুর পরে মৃত্যু, ফেরেশতার প্রশ্ন, কবরের চাপ ও অন্ধকার। তারপর পুনরুত্থান আর আল্লাহর সামনে হাজির হওয়া, যতক্ষণ না জান্নাত বা জাহান্নামে তার শেষ ঠিকানা হয়। কুরতুবী বলেন, এসব বিপদ গুনে শেষ করা যায় না।"
          },
          {
            "en": "He draws a conclusion: had the matter been left to man, he would never have chosen these hardships, so they show that he has a Creator who arranged his affairs and decreed these conditions, and he should obey His command. Ma'arif al-Qur'an repeats the argument, citing al-Qurtubi. Al-Qurtubi and al-Baghawi both quote Yaman as well: Allah created no creature that grapples with what the son of Adam grapples with, and with that he is the weakest of creation. At-Tabari has a similar line from al-Hasan.",
            "bn": "এ থেকে কুরতুবী একটি সিদ্ধান্ত টানেন। ব্যাপারটা মানুষের হাতে থাকলে সে কখনো এসব কষ্ট বেছে নিত না। কাজেই এগুলো প্রমাণ করে, তার একজন স্রষ্টা আছেন, যিনি তার সব কিছু সাজিয়েছেন আর এই অবস্থাগুলো তার জন্য নির্ধারণ করেছেন। তাই তাঁর হুকুম মেনে চলা উচিত। মাআরিফুল কুরআন কুরতুবীর নাম নিয়ে একই যুক্তি দেয়। কুরতুবী ও বাগাভী দুজনেই ইয়ামানের কথাও আনেন: আদমসন্তান যত কষ্টের সঙ্গে যোঝে, আল্লাহ এমন আর কোনো সৃষ্টি বানাননি, অথচ সে-ই সবচেয়ে দুর্বল সৃষ্টি। তাবারী হাসান থেকে কাছাকাছি একটি কথা আনেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Upright From the Start",
          "bn": "শুরু থেকেই সোজা দেহ"
        },
        "p": [
          {
            "en": "The second reading takes kabad as posture. At-Tabari records it as the view that man was created upright and even in stature. He gives it from Ibn 'Abbas (RA), in a report that says in uprightness and then adds: and it is said, in hardship. He gives it from 'Ikrimah, in uprightness, meaning of stature; from Ibrahim, upright; from 'Abdullah ibn Shaddad, even in stature; from Abu Salih, standing; and from ad-Dahhak, created upright on two legs, no beast created in his form.",
            "bn": "দ্বিতীয় ব্যাখ্যায় 'কাবাদ' মানে দেহের ভঙ্গি। তাবারী মতটি লেখেন এভাবে: মানুষকে সৃষ্টি করা হয়েছে সোজা দাঁড়ানো, সুষম গড়নে। ইবন আব্বাস (রাঃ)-এর একটি বর্ণনায় আছে 'সোজা হয়ে থাকায়', তারপর যোগ করা: আবার বলা হয়, কাঠিন্যে। ইকরিমা বলেন, সোজা হয়ে থাকা, মানে দেহের উচ্চতায়। ইবরাহীম বলেন, সোজা দাঁড়ানো। আবদুল্লাহ ইবন শাদ্দাদ বলেন, সুষম গড়নের। আবু সালিহ বলেন, দাঁড়ানো। আর যাহহাক বলেন, দুই পায়ে সোজা করে সৃষ্টি, কোনো জন্তুকে তার গড়নে বানানো হয়নি।"
          },
          {
            "en": "Ibn Kathir reports the same reading from Ibn Mas'ud (RA), Ibn 'Abbas, 'Ikrimah, Mujahid, Ibrahim an-Nakha'i, Khaythamah and ad-Dahhak, and notes that Ibn 'Abbas, in one report, adds: in his mother's womb. Kabad on this view means evenness and straightness. Ibn Kathir sets the verse beside 82:6 and 82:7, on the Lord who created you, proportioned you and balanced you, and beside 95:4: We have certainly created man in the best of forms. Al-Baghawi adds that every other creature walks bent over.",
            "bn": "ইবন কাসীর একই ব্যাখ্যা আনেন ইবন মাসউদ (রাঃ), ইবন আব্বাস (রাঃ), ইকরিমা, মুজাহিদ, ইবরাহীম নাখঈ, খাইসামা ও যাহহাক থেকে। তিনি জানান, ইবন আব্বাস (রাঃ)-এর এক বর্ণনায় বাড়তি আছে: মায়ের পেটে। এ মতে 'কাবাদ' মানে সমতা আর সোজা থাকা। ইবন কাসীর আয়াতটিকে রাখেন ৮২:৬ ও ৮২:৭ আয়াতের পাশে, যেখানে সেই রবের কথা, যিনি তোমাকে সৃষ্টি করেছেন, ঠিকঠাক করেছেন, সুষম করেছেন। আর রাখেন ৯৫:৪ আয়াতের পাশে: আমি মানুষকে সৃষ্টি করেছি সর্বোত্তম গড়নে। বাগাভী যোগ করেন, অন্য সব সৃষ্টি চলে ঝুঁকে।"
          },
          {
            "en": "Al-Qurtubi calls this reading a favour shown to man in his making. Citing an-Nakha'i, Mujahid and others, he says that Allah made no animal in its mother's womb except lying face down, apart from the son of Adam, who is upright; Ibn Kaysan adds that his head is raised until, when Allah permits his birth, it turns towards his mother's feet. Ibn Kathir records Abu Ja'far al-Baqir asking a man of the Ansar about the verse; he answered, in his standing and his evenness, and al-Baqir did not object.",
            "bn": "কুরতুবী এই ব্যাখ্যাকে বলেন সৃষ্টির ক্ষেত্রে মানুষের প্রতি এক অনুগ্রহ। নাখঈ, মুজাহিদ ও অন্যদের মত হিসেবে তিনি বলেন, আল্লাহ মায়ের পেটে প্রতিটি প্রাণীকে রেখেছেন উপুড় করে, শুধু আদমসন্তান ছাড়া; সে থাকে সোজা হয়ে। ইবন কাইসান যোগ করেন, পেটে তার মাথা থাকে ওপরের দিকে, তারপর আল্লাহ যখন জন্মের অনুমতি দেন, মাথা ঘুরে যায় মায়ের পায়ের দিকে। ইবন কাসীর আরও আনেন, আবু জাফর বাকির এক আনসারিকে আয়াতটির অর্থ জিজ্ঞেস করেছিলেন। তিনি বললেন, তার দাঁড়ানো আর সুষম গড়নে। বাকির আপত্তি করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing the Readings",
          "bn": "ব্যাখ্যাগুলোর মাপজোখ"
        },
        "p": [
          {
            "en": "Lesser readings are recorded. Ibn Zayd, in at-Tabari and Ibn Kathir, takes kabad of the sky: in Ibn Kathir's wording, Adam was created in the sky, and that was called kabad. Muqatil, in al-Baghawi, says in strength. Al-Qurtubi carries from al-Hasan a reading that touches every life: man grapples with gratitude in ease and with patience in hardship, because he is never free of one or the other, a line al-Qurtubi says was also related from Ibn 'Umar (RA).",
            "bn": "আরও কিছু কম প্রচলিত ব্যাখ্যাও লেখা আছে। তাবারী ও ইবন কাসীরের বর্ণনায় ইবন যায়দ 'কাবাদ'-কে আকাশের সঙ্গে যুক্ত করেন। ইবন কাসীরের ভাষায়: আদমকে সৃষ্টি করা হয়েছিল আকাশে, আর সেটাকেই বলা হয়েছে 'কাবাদ'। বাগাভীর বর্ণনায় মুকাতিল বলেন, শক্তিতে। কুরতুবী হাসান থেকে এমন একটি ব্যাখ্যা আনেন, যা প্রতিটি জীবনকে ছুঁয়ে যায়। সুখের দিনে মানুষ যোঝে শোকর নিয়ে, দুঃখের দিনে সবর নিয়ে, কারণ এ দুটির কোনো একটি থেকে সে কখনো খালি থাকে না। কুরতুবী বলেন, কথাটি ইবন উমার (রাঃ) থেকেও বর্ণিত।"
          },
          {
            "en": "At-Tabari weighs the readings and chooses: the most correct is that man was created to grapple with affairs and labour at them, so fi kabad means in hardship, because that is the known meaning of kabad in Arab speech, as Labid's line shows. Ibn Kathir reports that choice from him. Yet at-Tabari records the reading of upright stature in full, and it goes back to some of the same early names, Ibn 'Abbas, 'Ikrimah and Mujahid among them. The two readings stand side by side.",
            "bn": "তাবারী ব্যাখ্যাগুলো মেপে দেখে একটিকে বেছে নেন। তাঁর মতে সবচেয়ে সঠিক কথা হলো, মানুষকে সৃষ্টি করা হয়েছে নানা কাজের সঙ্গে যুঝতে আর খাটতে, তাই 'ফী কাবাদ' মানে কাঠিন্যে। কারণ আরবদের ভাষায় 'কাবাদ'-এর পরিচিত অর্থ এটাই, লাবীদের চরণ তার সাক্ষী। ইবন কাসীর তাঁর এই পছন্দের কথা উল্লেখ করেন। তবু সোজা দেহের ব্যাখ্যাটিও তাবারী পুরোটা লিখে রাখেন, আর সেটিও একই পূর্বসূরিদের কয়েকজনের কাছে ফেরে, যেমন ইবন আব্বাস (রাঃ), ইকরিমা ও মুজাহিদ। দুটি ব্যাখ্যাই তাই পাশাপাশি দাঁড়িয়ে থাকে।"
          },
          {
            "en": "As-Sa'di does not choose. The verse may mean the hardships man grapples with in this world, in the barzakh and on the day the witnesses stand, so that he ought to strive for deeds that relieve him of them and bring him lasting joy, or else he will grapple with severe punishment forever. Or it may mean that We created man in the best stature, able to do strenuous work, yet he did not thank Allah for it, grew insolent in his health, and thought his power would last.",
            "bn": "সা'দী কোনোটিকে বেছে নেন না। তাঁর মতে আয়াতের অর্থ হতে পারে সেই সব কষ্ট, যার সঙ্গে মানুষ যোঝে দুনিয়ায়, বারযাখে আর সাক্ষীরা যেদিন দাঁড়াবে সেদিন। তাই তার উচিত এমন আমলের চেষ্টা করা, যা তাকে এসব থেকে রেহাই দেবে আর স্থায়ী আনন্দ এনে দেবে। নইলে চিরকাল তাকে কঠিন আজাবের সঙ্গে যুঝতে হবে। আবার অর্থ হতে পারে: আমি মানুষকে বানিয়েছি সবচেয়ে সুন্দর গড়নে, কঠিন কাজ করার সামর্থ্য দিয়ে। তবু সে এর জন্য আল্লাহর শোকর করেনি, সুস্থতায় উদ্ধত হয়েছে, আর ভেবেছে তার ক্ষমতা চিরকাল থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Man Proud of His Grip",
          "bn": "নিজের শক্তিতে মুগ্ধ মানুষ"
        },
        "p": [
          {
            "en": "Some commentators carry a report about whom the passage concerns. Al-Qurtubi gives it from al-Kalbi: a man of Banu Jumah called Abu al-Ashaddayn would stand on a hide from 'Ukaz and say that whoever moved him off it could have such and such; ten men would pull until the hide tore, and his feet stayed put. He was an enemy of the Prophet ﷺ, and 90:5 came down about him, meaning his strength. Al-Baghawi gives the report after Muqatil's reading and names him Usayd ibn Kaladah al-Jumahi.",
            "bn": "কিছু তাফসীরে একটি বর্ণনা আছে, এই আয়াতগুলো কাকে নিয়ে। কুরতুবী কালবী থেকে আনেন: বনু জুমাহের আবুল আশাদ্দাইন নামে এক লোক উকাযের চামড়া পায়ের নিচে বিছিয়ে বলত, যে আমাকে এর ওপর থেকে সরাতে পারবে, সে এত এত পাবে। ১০ জন মিলে টানত, চামড়া ছিঁড়ে যেত, কিন্তু তার পা নড়ত না। সে ছিল নবী ﷺ-এর শত্রু, আর তার শক্তি নিয়েই ৯০:৫ আয়াত নাজিল হয়েছে। বাগাভী মুকাতিলের ব্যাখ্যার পরে বর্ণনাটি আনেন এবং লোকটির নাম বলেন উসাইদ ইবন কালাদা আল-জুমাহী।"
          },
          {
            "en": "Al-Qurtubi adds that this is also reported from Ibn 'Abbas, with fi kabad meaning strong of build, for the man was among the strongest of Quraysh. These are reports from al-Kalbi and Muqatil, ungraded in the texts fetched, and al-Qurtubi himself first takes al-insan as the son of Adam in general. Whoever the man was, the verse describes what the text describes, one man's boast and its answer, and licenses nothing against any living person or community. No fetched commentary attaches a hadith of the Prophet ﷺ to this verse.",
            "bn": "কুরতুবী যোগ করেন, কথাটি ইবন আব্বাস (রাঃ) থেকেও বর্ণিত, আর তাতে 'ফী কাবাদ' মানে মজবুত গড়নের, কারণ লোকটি ছিল কুরাইশের সবচেয়ে শক্তিশালীদের একজন। এগুলো কালবী ও মুকাতিলের বর্ণনা, আর সংগৃহীত তাফসীরগুলো এদের মান যাচাই করে দেয়নি। কুরতুবী নিজেও প্রথমে 'আল-ইনসান' বলতে সাধারণভাবে আদমসন্তানকেই বোঝেন। লোকটি যে-ই হোক, আয়াত যা বর্ণনা করে কেবল তা-ই বর্ণনা করে: এক লোকের বড়াই আর তার জবাব। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এতে নেই। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে নবী ﷺ-এর কোনো হাদীস জুড়ে দেয়নি।"
          },
          {
            "en": "What the verses do is turn the question on the reader. Al-Hasan, in Ibn Kathir, explains 90:5 as thinking no one can take his wealth; Qatadah, as thinking he will never be asked how he earned it and how he spent it. 90:6 has him say he spent wealth in abundance, and Mujahid reads 90:7 as: does he think Allah does not see him?",
            "bn": "আয়াতগুলো আসলে প্রশ্নটা ঘুরিয়ে দেয় পাঠকের দিকে। ইবন কাসীরের বর্ণনায় হাসান ৯০:৫ আয়াতের ব্যাখ্যা দেন এভাবে: সে ভাবে, কেউ তার সম্পদ কেড়ে নিতে পারবে না। কাতাদার ব্যাখ্যা: সে ভাবে, কীভাবে কামাল আর কীভাবে খরচ করল, সে প্রশ্ন তাকে কেউ করবে না। ৯০:৬ আয়াতে তার মুখে কথা: আমি প্রচুর সম্পদ উড়িয়েছি। আর মুজাহিদ ৯০:৭ আয়াত পড়েন এভাবে: সে কি ভাবে, আল্লাহ তাকে দেখেন না?"
          }
        ]
      },
      {
        "h": {
          "en": "Two Eyes and a Climb",
          "bn": "দুই চোখ আর এক চড়াই"
        },
        "p": [
          {
            "en": "Then the reply turns from his boast to what he was given. Ibn Kathir reads 90:8 and 90:9 as an inventory of gifts: two eyes to see with; a tongue to speak with and express what is inside him; two lips to help him speak and eat, and to beautify his face. 90:10 adds the two ways he was shown, which Ibn Kathir gives from Ibn Mas'ud (RA) as good and evil, setting it beside 76:2 and 76:3: We created man to test him, made him hearing and seeing, and showed him the way.",
            "bn": "এরপর জবাবটা তার বড়াই ছেড়ে চলে যায় তাকে কী দেওয়া হয়েছে সেদিকে। ইবন কাসীর ৯০:৮ ও ৯০:৯ আয়াতকে পড়েন দানের এক তালিকা হিসেবে। দুটি চোখ, যা দিয়ে সে দেখে। একটি জিভ, যা দিয়ে সে কথা বলে আর মনের ভেতরের কথা প্রকাশ করে। দুটি ঠোঁট, যা কথা বলতে আর খেতে সাহায্য করে, চেহারাকেও সুন্দর করে। ৯০:১০ আয়াতে যোগ হয় দেখানো দুটি পথ। ইবন কাসীর ইবন মাসউদ (রাঃ) থেকে আনেন, পথ দুটি ভালো আর মন্দ, আর একে রাখেন ৭৬:২ ও ৭৬:৩ আয়াতের পাশে: পরীক্ষার জন্য মানুষকে সৃষ্টি করে তাকে শোনার আর দেখার শক্তি দেওয়া হয়েছে, পথও দেখানো হয়েছে।"
          },
          {
            "en": "The steep pass follows. 90:11 says he did not attempt it, and 90:12 to 90:16 name it: freeing a neck in 90:13, then feeding on a day of hunger an orphan near of kin, in 90:15, or a needy person in the dust. 90:17 adds being among those who believe and urge one another to patience and to mercy. Those verses have articles of their own; here it is enough to see that the climb is also kabad, only chosen.",
            "bn": "এরপর আসে দুর্গম গিরিপথের কথা। ৯০:১১ আয়াত বলে, সে সেই পথে পা বাড়ায়নি। ৯০:১২ থেকে ৯০:১৬ আয়াত পথটির পরিচয় দেয়। ৯০:১৩ আয়াতে একটি গর্দান মুক্ত করা। তারপর ক্ষুধার দিনে খাবার দেওয়া, ৯০:১৫ আয়াতে আত্মীয় এতিমকে, অথবা ধুলোয় পড়ে থাকা মিসকিনকে। ৯০:১৭ আয়াত যোগ করে, সঙ্গে হতে হবে তাদের একজন, যারা ঈমান এনেছে আর একে অন্যকে সবর ও দয়ার উপদেশ দেয়। ওই আয়াতগুলো নিয়ে আলাদা লেখা আছে। এখানে এটুকু দেখাই যথেষ্ট যে চড়াইটাও 'কাবাদ', তফাত শুধু এই যে সেটা বেছে নিতে হয়।"
          },
          {
            "en": "Read with all its commentators, the verse closes one question and opens another. Whether toil comes is settled; on the majority reading it starts in the womb and runs past the grave. On the other reading the upright frame is itself a gift that asks for thanks. Either way, as as-Sa'di puts it, the sensible course is to spend the strain on deeds that bring lasting relief. The man of 90:6 spent his on boasting. The verses after him name what the same effort can buy instead.",
            "bn": "সব মুফাসসিরের কথা মিলিয়ে পড়লে আয়াতটি একটি প্রশ্নের মীমাংসা করে আর আরেকটি প্রশ্ন সামনে আনে। কষ্ট আসবে কি না, সে প্রশ্ন মিটে গেছে। বেশির ভাগের ব্যাখ্যায় তা শুরু হয় মায়ের পেটে, আর চলে কবর পেরিয়েও। অন্য ব্যাখ্যায় সোজা দেহটাই এক দান, যা শোকর চায়। যে ব্যাখ্যাই নিন, সা'দীর কথামতো বুদ্ধিমানের কাজ হলো এই খাটুনিকে এমন আমলে খরচ করা, যা স্থায়ী স্বস্তি আনে। ৯০:৬ আয়াতের লোকটি তার খাটুনি খরচ করেছে বড়াইয়ে। তার পরের আয়াতগুলো জানিয়ে দেয়, একই পরিশ্রম দিয়ে এর বদলে কী কেনা যায়।"
          }
        ]
      }
    ]
  },
  "90:13": {
    "sections": [
      {
        "h": {
          "en": "Two Words for a Steep Road",
          "bn": "দুই শব্দে দুর্গম পথের জবাব"
        },
        "p": [
          {
            "en": "Fakku raqabatin: the freeing of a neck. The verse is two Arabic words, and it is an answer. Just before it, 90:11 says of man that he did not break through al-'aqaba, the steep pass, and 90:12 asks: and what can make you know what the steep pass is? This verse begins the reply. Ibn Kathir reports Ibn Zayd's reading of that breaking through: will he not take the road in which there is rescue and good? Then, Ibn Kathir says, Allah explained that road, and he quotes this verse and the next.",
            "bn": "ফাক্কু রাকাবাহ: একটি ঘাড় মুক্ত করা। আরবিতে আয়াতটি মাত্র দুই শব্দের, আর এ দুই শব্দ আসলে একটা উত্তর। ঠিক আগে ৯০:১১ আয়াত মানুষ সম্পর্কে বলে, সে আল-আকাবা, অর্থাৎ দুর্গম গিরিপথ, পেরোনোর চেষ্টা করেনি। তারপর ৯০:১২ প্রশ্ন করে: তুমি কি জানো দুর্গম গিরিপথ কী? এ আয়াত থেকে সেই প্রশ্নের জবাব শুরু। ইবন কাসীর ইবন যায়দের ব্যাখ্যা উদ্ধৃত করেন: সে কি সেই পথ ধরবে না, যে পথে মুক্তি আর কল্যাণ? ইবন কাসীর বলেন, এরপর আল্লাহ সেই পথটা খুলে বলেছেন; তারপর তিনি এ আয়াত ও পরের আয়াতটি উদ্ধৃত করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an explains the word 'aqaba as a hill, a high place or a steep road, and also the low ground between two hills. A man pursued by an enemy saves himself by climbing to the summit or slipping down into the valley. Here, it says, the 'aqaba refers to obedience and devotion: as the pass saves a man from his enemy, righteous deeds save him from the punishment of the Hereafter. This article's subject is the first deed named.",
            "bn": "মাআরিফুল কুরআন আকাবা শব্দের অর্থ বলে টিলা, উঁচু জায়গা বা খাড়া পথ। আবার দুই পাহাড়ের মাঝের নিচু জমিকেও আকাবা বলা হয়। শত্রু তাড়া করলে মানুষ চূড়ায় উঠে কিংবা উপত্যকায় নেমে প্রাণ বাঁচায়। এখানে, মাআরিফের মতে, আকাবা মানে আনুগত্য ও ইবাদত। গিরিপথ যেমন শত্রুর হাত থেকে বাঁচায়, নেক আমল তেমনি আখিরাতের শাস্তি থেকে বাঁচায়। এ লেখার বিষয় কেবল প্রথম যে আমলের নাম এসেছে, সেটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Untying the Fetter",
          "bn": "বাঁধনের গিঁট খোলা"
        },
        "p": [
          {
            "en": "Al-Qurtubi starts from the two words themselves. Fakk, he says, is the untying of a fetter, and slavery is a fetter. The enslaved person is called a raqaba, a neck, because through slavery he is like a captive bound by the neck, and his freeing is called fakk just as a captive is freed from captivity. The image, then, is a knot around a neck that someone loosens. Nothing in the word describes the bond with approval. The praise in the verse falls entirely on the hand that undoes it.",
            "bn": "কুরতুবী শুরু করেন শব্দ দুটি থেকেই। তাঁর ব্যাখ্যায় ফাক্ক মানে শিকল বা বাঁধন খুলে দেওয়া, আর দাসত্ব নিজেই এক বাঁধন। দাসকে রাকাবা, অর্থাৎ ঘাড়, বলা হয়, কারণ দাসত্বের কারণে সে যেন ঘাড়ে দড়ি বাঁধা এক বন্দি। আর বন্দিকে বন্দিদশা থেকে ছাড়ানোর মতোই তার মুক্তিকে বলা হয় ফাক্ক। ছবিটা তাই এমন: কারও গলায় একটা গিঁট, আর কেউ এসে তা আলগা করছে। শব্দটায় বাঁধনের কোনো প্রশংসা নেই। আয়াতের সব প্রশংসা সেই হাতের, যে গিঁটটা খোলে।"
          },
          {
            "en": "The other commentators give the same core. The Muyassar says it is the freeing of a believing neck from the captivity of slavery. At-Tabari says that breaking through the pass and crossing it is the freeing of a neck from slavery and from the captivity of servitude. Al-Baghawi says that by the freeing of a neck Allah meant its manumission and its release. Ma'arif al-Qur'an renders the phrase as freeing the neck of a slave and calls it a great devotional act, because it moulds a man's life.",
            "bn": "অন্য তাফসীরকারেরাও মূল কথায় একমত। মুয়াসসার বলে, এ হলো একজন মুমিনের ঘাড়কে দাসত্বের বন্দিদশা থেকে মুক্ত করা। তাবারীর ভাষায়, গিরিপথ পেরোনো আর অতিক্রম করা মানে দাসত্ব ও গোলামির বন্দিত্ব থেকে একটি ঘাড় ছাড়িয়ে আনা। বাগাভী বলেন, ঘাড় মুক্ত করা বলে আল্লাহ বুঝিয়েছেন তাকে আযাদ করা ও ছেড়ে দেওয়া। মাআরিফুল কুরআন অর্থ করে দাসের ঘাড় মুক্ত করা। মাআরিফের মতে এ এক বড় ইবাদত, কারণ এতে একজন মানুষের গোটা জীবন নতুন করে গড়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Captive, Slave, or Contract",
          "bn": "বন্দি, দাস, না চুক্তি"
        },
        "p": [
          {
            "en": "Whose neck, and freed from what? The glosses are not identical. Al-Qurtubi gives first that its release is from captivity, and then, introduced with it was said, from slavery. As-Sa'di reads it as freeing the neck from slavery in two ways: by manumitting it, or by helping it to pay what its contract of freedom requires. Then he widens it: with greater reason, he says, the ransoming of a Muslim captive held by disbelievers enters into the verse. So three pictures stand side by side: the captive ransomed, the slave freed outright, and the contract helped to its end.",
            "bn": "কার ঘাড়, আর কী থেকে মুক্তি? তাফসীরগুলোর ব্যাখ্যা হুবহু এক নয়। কুরতুবী প্রথমে বলেন, এ হলো বন্দিদশা থেকে মুক্তি। তারপর 'বলা হয়েছে' কথাটি দিয়ে আরেকটি মত আনেন: দাসত্ব থেকে মুক্তি। সা'দী দাসত্ব থেকে মুক্তির দুই রূপ দেখান। এক, সরাসরি আযাদ করে দেওয়া। দুই, মুক্তির চুক্তিতে যে অর্থ শোধ করতে হয়, তা শোধে সাহায্য করা। তারপর পরিসর আরও বাড়ান: কাফিরদের হাতে আটক মুসলিম বন্দিকে মুক্তিপণ দিয়ে ছাড়ানো তো আরও বেশি করে এর মধ্যে পড়ে। ফলে তিনটি ছবি পাশাপাশি দাঁড়ায়: মুক্তিপণে ছাড়ানো বন্দি, সরাসরি আযাদ হওয়া দাস, আর সাহায্যে শেষ হওয়া মুক্তির চুক্তি।"
          },
          {
            "en": "Al-Qurtubi adds, from a hadith of al-Bara', that freeing the neck means helping toward its price. Al-Baghawi and Ibn Kathir both cite the longer narration from al-Bara' ibn 'Azib, in which a Bedouin asks for a deed that will bring him into Paradise, and freeing a soul single-handed is told apart from helping in its freeing. Ibn Kathir gives it through Imam Ahmad. Its wording and grading could not be confirmed on a collection page, so it is reported here only as the commentators' citation, not quoted.",
            "bn": "কুরতুবী বারা (রাঃ)-এর এক হাদিসের বরাতে যোগ করেন, ঘাড় মুক্ত করা মানে তার মূল্য শোধে সাহায্য করা। বাগাভী আর ইবন কাসীর দুজনেই বারা ইবন আযিব (রাঃ) থেকে দীর্ঘ এক বর্ণনা আনেন। সেখানে এক বেদুইন জান্নাতে নিয়ে যাওয়ার মতো আমল জানতে চান, আর একা কাউকে আযাদ করা এবং কারও আযাদিতে সাহায্য করা, এ দুইয়ের পার্থক্য করা হয়। ইবন কাসীর বর্ণনাটি এনেছেন ইমাম আহমাদের সূত্রে। এর শব্দ ও মান কোনো হাদিস সংকলনের পাতায় যাচাই করা যায়নি। তাই এখানে এটি কেবল তাফসীরকারদের উদ্ধৃতি হিসেবে উল্লেখ করা হলো, হুবহু তুলে দেওয়া হয়নি।"
          },
          {
            "en": "Al-Qurtubi notes that he discussed al-Bara's narration earlier, under Surat at-Tawba. In this collection, the reflection on 9:60 follows as-Sa'di through the share for freeing necks named in that verse, from the contract to the captive. Here the same act appears not as an allotted share but as the first step on a climb. The commentators' glosses differ in detail but share one thread: in each, a person held in bondage is set free, and the one who frees them bears a cost.",
            "bn": "কুরতুবী জানান, বারা (রাঃ)-এর বর্ণনাটি নিয়ে তিনি আগেই সূরা তাওবায় আলোচনা করেছেন। এ সংকলনে ৯:৬০ আয়াতের আলোচনায় সা'দীর ব্যাখ্যা ধরে ওই আয়াতের 'ঘাড় মুক্ত করার' খাতটি পুরোটা দেখা হয়েছে, মুক্তির চুক্তি থেকে বন্দি পর্যন্ত। এখানে একই কাজ এসেছে নির্ধারিত কোনো খাত হিসেবে নয়, চড়াই পথের প্রথম ধাপ হিসেবে। তাফসীরকারদের ব্যাখ্যায় খুঁটিনাটির তফাত আছে, কিন্তু একটা সুতো সবগুলোকে জুড়ে রেখেছে। প্রতিটিতেই বন্ধনে আটকে থাকা একজন মানুষ মুক্তি পায়, আর যে মুক্ত করে, তাকে কিছু না কিছু খরচ বইতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Noun or a Verb",
          "bn": "বিশেষ্য, নাকি ক্রিয়া"
        },
        "p": [
          {
            "en": "At-Tabari records that the readers differed over these words. Some readers of Mecca and most of Basra, through Ibn Abi Ishaq, and al-Kisa'i among the Kufans, read fakka raqabatan aw at'ama: he freed a neck or he fed, as two verbs. Most readers of Medina, Kufa and Syria read fakku raqabatin, the noun in construct, with aw it'amun as a verbal noun. Al-Baghawi names Ibn Kathir, Abu 'Amr and al-Kisa'i for the verb reading and the others for the noun.",
            "bn": "তাবারী জানান, এ শব্দগুলোর পাঠে কারীদের মধ্যে মতভেদ আছে। মক্কার কিছু কারী, বসরার অধিকাংশ কারী ইবন আবী ইসহাকের সূত্রে, আর কূফার কারীদের মধ্যে কিসাঈ পড়েছেন ফাক্কা রাকাবাতান আও আতআমা, অর্থাৎ সে ঘাড় মুক্ত করল বা খাওয়াল, দুটিই ক্রিয়া। মদীনা, কূফা ও শামের অধিকাংশ কারী পড়েছেন ফাক্কু রাকাবাতিন, সম্বন্ধপদে বিশেষ্য, আর আও ইতআমুন, ক্রিয়াবাচক বিশেষ্য। বাগাভী ক্রিয়ার পাঠের জন্য নাম করেন ইবন কাসীর, আবু আমর ও কিসাঈর, আর বাকিদের নামে বিশেষ্যের পাঠ।"
          },
          {
            "en": "On the verb reading, at-Tabari spells the passage out: so he did not break through the steep pass; he neither freed a neck nor fed, then he was among those who believed. The question in 90:12 then stands as wonder and magnification. Abu 'Amr ibn al-'Ala', as it reached at-Tabari, argued for it from then he was among those who believed in 90:17, a verb. At-Tabari himself judges this reading better in Arabic, because the Arabs prefer to return nouns to nouns and verbs to verbs, and it'am is a noun while kana is a verb.",
            "bn": "ক্রিয়ার পাঠ ধরলে তাবারী অংশটির অর্থ এভাবে খুলে বলেন: সে দুর্গম গিরিপথ পেরোয়নি। সে কোনো ঘাড় মুক্ত করেনি, কাউকে খাওয়ায়নি, তারপর মুমিনদের দলভুক্ত হয়েছে। তখন ৯০:১২ আয়াতের প্রশ্নটি দাঁড়ায় বিস্ময় ও গুরুত্ব বোঝানোর জন্য। তাবারীর কাছে যে খবর পৌঁছেছে, সে অনুযায়ী আবু আমর ইবনুল আলা এ পাঠের পক্ষে যুক্তি দিতেন ৯০:১৭ আয়াতের 'তারপর সে মুমিনদের দলভুক্ত হলো' কথাটি থেকে, যা একটি ক্রিয়া। তাবারী নিজেও আরবি ভাষার বিচারে এ পাঠকে উত্তম বলেন। কারণ আরবরা বিশেষ্যের সঙ্গে বিশেষ্য আর ক্রিয়ার সঙ্গে ক্রিয়া জোড়া দিতে পছন্দ করে, অথচ ইতআম বিশেষ্য আর কানা ক্রিয়া।"
          },
          {
            "en": "Yet at-Tabari does not rule between them on correctness. Both, he says, are well-known readings, each read by learned reciters, each with an understood meaning, so whoever reads either is right. On the noun reading the verse explains the question: what is the steep pass? It is the freeing of a neck. He compares 101:10 and 101:11, where and what can make you know what that is is answered by a blazing fire. Ibn Kathir records both readings and says their meanings are close.",
            "bn": "তবু শুদ্ধতার প্রশ্নে তাবারী একটিকে অন্যটির ওপর রায় দেন না। তাঁর কথায়, দুটিই সুপরিচিত পাঠ, দুটিই বিজ্ঞ কারীরা পড়েছেন, দুটিরই অর্থ বোধগম্য। তাই যে-কোনোটি পড়লেই পাঠক ঠিক পড়লেন। বিশেষ্যের পাঠে আয়াতটি প্রশ্নের ব্যাখ্যা হয়ে দাঁড়ায়: দুর্গম গিরিপথ কী? তা হলো ঘাড় মুক্ত করা। তিনি তুলনা টানেন ১০১:১০ ও ১০১:১১ আয়াতের সঙ্গে, যেখানে 'তুমি কি জানো তা কী?' প্রশ্নের উত্তর আসে: জ্বলন্ত আগুন। ইবন কাসীর দুটি পাঠই উল্লেখ করেন এবং বলেন, দুটির অর্থ কাছাকাছি।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Release Weighs More",
          "bn": "কোন মুক্তির ওজন বেশি"
        },
        "p": [
          {
            "en": "Some commentators go on to rank the release. At-Tabari brings Qatada on this verse: it was mentioned to us that the Prophet ﷺ was asked which necks carry the greatest reward, and he said, the most costly. He also brings al-Hasan: it was mentioned to us that no Muslim frees a Muslim neck without it becoming his ransom from the Fire. Both are reported with the words it was mentioned to us, and at-Tabari gives no grading for either.",
            "bn": "কোনো কোনো তাফসীরকার মুক্তির মধ্যেও স্তর দেখান। তাবারী এ আয়াতে কাতাদার কথা আনেন: আমাদের জানানো হয়েছে, নবী ﷺ-কে জিজ্ঞেস করা হয়েছিল কোন ঘাড় মুক্ত করায় সওয়াব সবচেয়ে বেশি। তিনি বলেছিলেন, যার দাম সবচেয়ে বেশি। হাসানের কথাও আনেন: আমাদের জানানো হয়েছে, কোনো মুসলিম যদি একজন মুসলিমের ঘাড় মুক্ত করে, তা তার জন্য জাহান্নাম থেকে মুক্তিপণ হয়ে যায়। দুটিই এসেছে 'আমাদের জানানো হয়েছে' কথাটি দিয়ে, আর তাবারী কোনোটির মান উল্লেখ করেননি।"
          },
          {
            "en": "Al-Qurtubi records a sharper dispute. Asbagh held that a costly slave who is not a believer is better to free than a believing one of little price, reasoning from the hadith on which necks are best. Ibn al-'Arabi answers that the hadith means Muslims, pointing to other narrations that speak of freeing a Muslim and freeing a believing neck. He calls Asbagh's view a lapse: Asbagh looked at the loss of wealth, while looking at freeing the person for worship and for tawhid comes first.",
            "bn": "কুরতুবী আরও তীক্ষ্ণ এক মতভেদের কথা লেখেন। আসবাগের মত ছিল, কম দামের মুমিন দাসের চেয়ে বেশি দামের অমুসলিম দাসকে আযাদ করা উত্তম। তিনি যুক্তি নিয়েছিলেন কোন ঘাড় উত্তম, সেই হাদিস থেকে। ইবনুল আরাবী জবাব দেন, হাদিসে মুসলিমদের কথাই বোঝানো হয়েছে। প্রমাণ হিসেবে তিনি দেখান অন্য বর্ণনাগুলো, যেখানে একজন মুসলিমকে আযাদ করার আর একজন মুমিনের ঘাড় মুক্ত করার কথা এসেছে। আসবাগের মতকে তিনি বলেন অসতর্ক বিচার। আসবাগ দেখেছেন সম্পদের ক্ষতির দিক। অথচ মানুষটিকে ইবাদত আর তাওহিদের জন্য মুক্ত করার দিকটাই আগে দেখার কথা।"
          },
          {
            "en": "A second comparison sets freeing beside charity. Al-Qurtubi says both are among the best of deeds. From Abu Hanifa comes the view that freeing is better than charity; his two companions held charity to be better. Al-Qurtubi judges that the verse points more toward Abu Hanifa, because it names freeing before charity. Al-Sha'bi, asked about a man with spare provision who wondered whether to give it to a relative or free a neck, answered that the neck is better. The disagreement is kept here as a disagreement.",
            "bn": "দ্বিতীয় তুলনাটা আযাদ করা আর সদকার মধ্যে। কুরতুবী বলেন, দুটিই শ্রেষ্ঠ আমলের মধ্যে পড়ে। আবু হানিফা থেকে বর্ণিত, আযাদ করা সদকার চেয়ে উত্তম। তাঁর দুই সঙ্গীর মতে সদকাই উত্তম। কুরতুবীর বিচারে আয়াতটি আবু হানিফার মতের দিকে বেশি ইঙ্গিত করে, কারণ সেখানে সদকার আগে আযাদ করার কথা এসেছে। শা'বীকে এক লোকের কথা জিজ্ঞেস করা হয়েছিল, যার হাতে খরচের পর কিছু বাড়তি আছে। সে কি তা কোনো আত্মীয়কে দেবে, নাকি একটা ঘাড় মুক্ত করবে? শা'বী বলেছিলেন, ঘাড় মুক্ত করাই উত্তম। এ মতভেদ এখানে মতভেদ হিসেবেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Neck of One's Own",
          "bn": "নিজের ঘাড়টিও"
        },
        "p": [
          {
            "en": "A second line of reading turns the verse inward. Al-Qurtubi records al-Mawardi: the verse may also mean that a man frees his own neck and saves himself, by avoiding sins and doing acts of obedience; the narration does not rule this out, and the passage as al-Qurtubi gives it calls this nearer to the right. Al-Baghawi records 'Ikrima: the freeing of a neck means freeing it from sins through repentance. Read this way, the person bound is the reader, and the fetter is his own wrongdoing.",
            "bn": "ব্যাখ্যার আরেকটি ধারা আয়াতকে ভেতরের দিকে ঘুরিয়ে দেয়। কুরতুবী মাওয়ারদীর কথা উদ্ধৃত করেন: আয়াতের এ অর্থও হতে পারে যে মানুষ নিজের ঘাড়টিই মুক্ত করবে, গুনাহ এড়িয়ে আর আনুগত্যের কাজ করে নিজেকে বাঁচাবে। বর্ণনাটি এ ব্যাখ্যার পথে বাধা নয়। কুরতুবীর উদ্ধৃত অংশে এ ব্যাখ্যাকেই সঠিকের বেশি কাছের বলা হয়েছে। বাগাভী আনেন ইকরিমার কথা: ঘাড় মুক্ত করা মানে তওবার মাধ্যমে গুনাহ থেকে তাকে মুক্ত করা। এভাবে পড়লে বাঁধা পড়া মানুষটি পাঠক নিজেই, আর বাঁধনটা তার নিজের অন্যায়।"
          },
          {
            "en": "Neither commentator who reports the inward reading drops the outward meaning. Al-Qurtubi gives the release from captivity and slavery first and al-Mawardi's reading after it; al-Baghawi gives manumission as the meaning and 'Ikrima's words at the end. The Muyassar, as-Sa'di, at-Tabari and Ma'arif keep to the release of another person. This article holds both readings as the sources give them and does not choose between them.",
            "bn": "ভেতরের দিকের ব্যাখ্যাটি যে দুজন জানান, তাঁদের কেউই বাইরের অর্থটি বাদ দেন না। কুরতুবী আগে বলেন বন্দিত্ব ও দাসত্ব থেকে মুক্তির কথা, তারপর মাওয়ারদীর ব্যাখ্যা। বাগাভী অর্থ হিসেবে দেন আযাদ করা, আর শেষে আনেন ইকরিমার কথা। মুয়াসসার, সা'দী, তাবারী ও মাআরিফ অন্য মানুষকে মুক্ত করার অর্থেই থাকেন। এ লেখা দুটি ব্যাখ্যাই সূত্রগুলো যেভাবে দিয়েছে সেভাবে রাখছে, কোনোটিকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Limb for Limb",
          "bn": "অঙ্গের বদলে অঙ্গ"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches to this verse the narration of Sa'id ibn Marjana from Abu Hurayra, and notes that al-Bukhari, Muslim, at-Tirmidhi and an-Nasa'i recorded it; al-Baghawi cites it too. In Sahih al-Bukhari (2517) it reads: Narrated Abu Huraira: The Prophet (ﷺ) said, \"Whoever frees a Muslim slave, Allah will save all the parts of his body from the (Hell) Fire as he has freed the body-parts of the slave.\" Sa`id bin Marjana said that he narrated that Hadith to `Ali bin Al-Husain and he freed his slave for whom `Abdullah bin Ja`far had offered him ten thousand Dirhams or one-thousand Dinars.",
            "bn": "ইবন কাসীর এ আয়াতের সঙ্গে সাঈদ ইবন মারজানার সূত্রে আবু হুরাইরা (রাঃ)-এর বর্ণনাটি যুক্ত করেন, আর জানান যে বুখারী, মুসলিম, তিরমিযী ও নাসাঈ এটি বর্ণনা করেছেন। বাগাভীও বর্ণনাটি এনেছেন। সহীহ বুখারীতে (২৫১৭) এর ভাষ্য: আবু হুরাইরা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন, \"যে ব্যক্তি একজন মুসলিম দাসকে আযাদ করে, সে দাসের অঙ্গগুলো যেমন মুক্ত করেছে, আল্লাহ তেমনি তার দেহের সব অঙ্গ জাহান্নামের আগুন থেকে রক্ষা করবেন।\" সাঈদ ইবন মারজানা বলেন, তিনি হাদিসটি আলী ইবন হুসাইনকে শোনান। তখন আলী তাঁর সেই দাসকে আযাদ করে দেন, যার জন্য আবদুল্লাহ ইবন জাফর তাঁকে ১০ হাজার দিরহাম বা এক হাজার দিনার দিতে চেয়েছিলেন।"
          },
          {
            "en": "Ibn Kathir's own account, through Imam Ahmad, keeps the scene in more detail. 'Ali ibn al-Husayn asked Sa'id whether he had really heard this from Abu Hurayra, and Sa'id said yes. 'Ali then called for Mutarrif, whom Ibn Kathir describes as the ablest of his servants, and when he stood before him said: go, you are free for the Face of Allah. Ibn Kathir adds that in Muslim's version he had been offered ten thousand dirhams for that servant. What the scene shows is how short the distance was between hearing and freeing.",
            "bn": "ইমাম আহমাদের সূত্রে ইবন কাসীরের নিজের বর্ণনায় দৃশ্যটা আরও খুঁটিনাটিসহ আছে। আলী ইবন হুসাইন সাঈদকে জিজ্ঞেস করলেন, তিনি কি সত্যিই এ কথা আবু হুরাইরা (রাঃ)-এর কাছে শুনেছেন? সাঈদ বললেন, হ্যাঁ। আলী তখন মুতাররিফকে ডাকলেন। ইবন কাসীরের বর্ণনায় সে ছিল তাঁর সেবকদের মধ্যে সবচেয়ে চৌকস। সে সামনে এসে দাঁড়াতেই আলী বললেন: যাও, আল্লাহর সন্তুষ্টির জন্য তুমি আযাদ। ইবন কাসীর যোগ করেন, মুসলিমের বর্ণনামতে ওই সেবকের জন্য তাঁকে ১০ হাজার দিরহাম দিতে চাওয়া হয়েছিল। দৃশ্যটা দেখায়, শোনা আর মুক্ত করার মাঝে দূরত্ব কত অল্প ছিল।"
          },
          {
            "en": "Ibn Kathir lists further narrations in the same vein, from 'Amr ibn 'Abasa, Wathila ibn al-Asqa' and 'Uqba ibn 'Amir, and he calls the chains of 'Amr ibn 'Abasa's narration good and strong. They are not quoted here, because their wording could not be checked on a collection page. None of the tafsirs consulted for this verse gives an occasion of revelation for it, so none is offered.",
            "bn": "একই ধাঁচের আরও কয়েকটি বর্ণনার উল্লেখ করেন ইবন কাসীর: আমর ইবন আবাসা, ওয়াসিলা ইবনুল আসকা ও উকবা ইবন আমির (রাঃ) থেকে। আমর ইবন আবাসা (রাঃ)-এর বর্ণনার সনদগুলোকে তিনি উত্তম ও মজবুত বলেছেন। তবে এগুলোর শব্দ কোনো হাদিস সংকলনের পাতায় মিলিয়ে দেখা যায়নি, তাই এখানে উদ্ধৃত করা হলো না। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর নাজিলের প্রেক্ষাপট বলে না, তাই এখানে কোনো প্রেক্ষাপট দেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Praises",
          "bn": "আয়াতের প্রশংসা কীসের"
        },
        "p": [
          {
            "en": "Every reading gathered here undoes a bond: from slavery, from captivity, from the debt of a contract, or from a person's own sins. That is how the commentators frame the verse, as the release of people from bondage, and this article reports only what they say it means. It draws from the verse no claim about history and no programme for the present. Of the man in 90:11 who did not climb, the verse speaks only of what it names and licenses nothing against any living person or community.",
            "bn": "এখানে জড়ো করা প্রতিটি ব্যাখ্যাই কোনো না কোনো বাঁধন খোলে: দাসত্ব, বন্দিত্ব, চুক্তির দেনা, কিংবা নিজের গুনাহ। তাফসীরকারেরা আয়াতটিকে এভাবেই দেখেন, মানুষকে বন্ধন থেকে মুক্ত করার কথা হিসেবে। এ লেখা কেবল জানায় তাঁরা এর কী অর্থ করেন। আয়াত থেকে ইতিহাস নিয়ে কোনো দাবি বা আজকের দিনের কোনো কর্মসূচি এখানে টানা হয়নি। ৯০:১১ আয়াতে যে মানুষটি চড়াই পেরোয়নি, তার সম্পর্কে আয়াতটি কেবল ততটুকুই বলে, যতটুকু তার ভাষায় আছে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এতে কোনো কিছুর অনুমতি নেই।"
          },
          {
            "en": "The verses that follow continue the answer. 90:14 adds feeding on a day of severe hunger; 90:15 and 90:16 name an orphan near of kin and a needy person in the dust; 90:17 sets the condition of faith and of counselling one another to patience and compassion. This collection's reflection on 90:4 already traces the steep pass across them. This verse is the first step, and on its cost the commentators agree: someone pays, so that another person is no longer bound.",
            "bn": "পরের আয়াতগুলো উত্তরটা এগিয়ে নেয়। ৯০:১৪ যোগ করে প্রচণ্ড ক্ষুধার দিনে খাবার দেওয়ার কথা। ৯০:১৫ ও ৯০:১৬ নাম করে নিকটাত্মীয় ইয়াতীম আর ধুলোয় পড়ে থাকা অভাবীর। ৯০:১৭ শর্ত জুড়ে দেয় ঈমানের, আর পরস্পরকে ধৈর্য ও দয়ার উপদেশ দেওয়ার। এ সংকলনে ৯০:৪ আয়াতের আলোচনা সেগুলোর ওপর দিয়ে দুর্গম পথটা আগেই এঁকে দেখিয়েছে। এ আয়াত প্রথম ধাপ, আর এর খরচ নিয়ে তাফসীরকারেরা একমত: একজনকে দাম দিতে হয়, যাতে আরেকজন আর বাঁধা না থাকে।"
          }
        ]
      }
    ]
  },
  "90:15": {
    "sections": [
      {
        "h": {
          "en": "Who Sits at the Meal",
          "bn": "খাবারের পাতে কে বসবে"
        },
        "p": [
          {
            "en": "Surah al-Balad builds its central question in steps. Verse 90:11 says the human being has not attempted al-'aqabah, the steep pass; 90:12 asks what will make you know what the pass is; 90:13 answers with the freeing of a neck, and 90:14 adds, or feeding on a day of severe hunger. Verse 90:15 then names whom that feeding reaches: yatiman dha maqrabah, an orphan of near kin. In the Arabic text it is three words, and each of them carries weight.",
            "bn": "সূরা আল-বালাদ তার মূল প্রশ্নটা সাজায় ধাপে ধাপে। ৯০:১১ আয়াত বলে, মানুষ আল-আকাবা, অর্থাৎ দুর্গম গিরিপথে পা বাড়ায়নি। ৯০:১২ আয়াত জিজ্ঞেস করে, তুমি কি জানো সেই গিরিপথ কী? ৯০:১৩ আয়াতে উত্তর আসে: একটি গর্দান মুক্ত করা। ৯০:১৪ আয়াত যোগ করে: অথবা প্রচণ্ড ক্ষুধার দিনে খাবার দেওয়া। এরপর ৯০:১৫ আয়াত বলে দেয়, সেই খাবার কার কাছে পৌঁছাবে: ইয়াতীমান যা মাকরাবাহ, নিকটাত্মীয় ইয়াতীম। আরবীতে মাত্র তিনটি শব্দ, আর প্রতিটির নিজস্ব ভার আছে।"
          },
          {
            "en": "Two notes on the frame come before the words themselves. Verse 90:11 describes a person who did not take the steep road; it speaks only of what it names and licenses nothing against any living person or community. And 90:16, which follows, names a second recipient joined by aw, or. This article mentions it only as the next step in the list and leaves its own phrase to its own reading. The freeing of a neck is likewise left to this collection's reflection on 90:13, and the pass itself to the one on 90:4.",
            "bn": "শব্দগুলোতে যাওয়ার আগে কাঠামো নিয়ে দুটি কথা। ৯০:১১ আয়াত এমন এক মানুষের বর্ণনা দেয়, যে দুর্গম পথ ধরেনি। আয়াত কেবল ততটুকুই বলে, যা তার ভাষায় আছে। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু বলার অনুমতি এতে নেই। আর পরের আয়াত ৯০:১৬ 'আও', অর্থাৎ 'অথবা' দিয়ে দ্বিতীয় আরেকজন গ্রহীতার নাম আনে। এ লেখায় সেটি শুধু তালিকার পরের ধাপ হিসেবে উল্লেখ থাকবে, তার নিজের শব্দবন্ধ রইল তার নিজের আলোচনার জন্য। গর্দান মুক্ত করার প্রসঙ্গ একইভাবে রইল এই সংকলনে ৯০:১৩ আয়াতের আলোচনার জন্য, আর গিরিপথের কথা ৯০:৪ আয়াতের আলোচনায়।"
          },
          {
            "en": "Ma'arif al-Qur'an, which comments on 90:11 to 90:16 as one passage, explains al-'aqabah as obedience and devotion: just as a steep place saves a man from an enemy, righteous deeds save him from the punishment of the Hereafter. It then lists those deeds, and at 90:14 remarks that although feeding any hungry person carries great reward, feeding certain people carries a greater one. Verse 90:15 names the first of those people. The sections below follow the commentators through the three words in turn.",
            "bn": "মাআরিফুল কুরআন ৯০:১১ থেকে ৯০:১৬ পর্যন্ত আয়াতগুলোর ব্যাখ্যা দেয় একটানা এক অংশ হিসেবে। সেখানে আকাবার অর্থ আনুগত্য ও ইবাদত। খাড়া উঁচু জায়গা যেমন মানুষকে শত্রুর হাত থেকে বাঁচায়, নেক আমল তেমনি তাকে আখিরাতের শাস্তি থেকে বাঁচায়। এরপর সে আমলগুলোর তালিকা আসে। ৯০:১৪ আয়াতে মাআরিফ মন্তব্য করে, যেকোনো ক্ষুধার্তকে খাওয়ানোই বড় সওয়াবের কাজ, তবে কিছু বিশেষ মানুষকে খাওয়ানোর সওয়াব আরও বেশি। ৯০:১৫ আয়াত সেই মানুষদের প্রথমজনের পরিচয় দেয়। নিচের অংশগুলোতে আমরা তাফসীরকারদের সঙ্গে তিনটি শব্দ একে একে পড়ব।"
          }
        ]
      },
      {
        "h": {
          "en": "Fed on That Same Day",
          "bn": "সেই ক্ষুধার দিনেই খাবার"
        },
        "p": [
          {
            "en": "The first word, yatiman, does not stand alone. It completes the verbal noun it'am, feeding, at the head of 90:14, and the commentators show this by turning the noun into a verb. Ibn Kathir writes a'tama fi mithli hadha al-yawmi yatiman: he fed, on a day like this, an orphan. At-Tabari does the same with more detail: aw at'ama fi yawmi maja'atin, or he fed on a day of famine, and then names the one fed. The abridged English Ibn Kathir keeps the link: he gives food on a day like this to an orphan.",
            "bn": "প্রথম শব্দ ইয়াতীমান একা দাঁড়িয়ে নেই। ৯০:১৪ আয়াতের শুরুতে যে 'ইত'আম', অর্থাৎ খাওয়ানো, এ শব্দ তারই পূর্ণতা। তাফসীরকারেরা বিষয়টা দেখান বিশেষ্যটাকে ক্রিয়ায় বদলে দিয়ে। ইবন কাসীর লেখেন: আত'আমা ফী মিসলি হাযাল ইয়াওমি ইয়াতীমান, অর্থাৎ এমন দিনে সে একজন ইয়াতীমকে খাওয়াল। তাবারী একই কাজ করেন আরেকটু খুলে: আও আত'আমা ফী ইয়াওমি মাজা'আতিন, অথবা দুর্ভিক্ষের দিনে সে খাওয়াল। তারপর তিনি বলেন কাকে খাওয়াল। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণেও যোগসূত্রটা থাকে: এমন দিনে সে একজন ইয়াতীমকে খাবার দেয়।"
          },
          {
            "en": "Al-Muyassar keeps the noun instead of a verb: aw it'amun fi yawmin dhi maja'atin shadidah, or feeding on a day of severe hunger, and then yatiman min dhawi al-qarabah, an orphan from among the relatives. The Ma'arif says the same in its own words: feeding him in a day when he is hungry. The styles differ, the reading does not. None of the commentators consulted here debates the grammar further or proposes another construction, so none is chosen here: each reads the orphan as the one who is fed, on the day of hunger named in 90:14.",
            "bn": "মুয়াসসার ক্রিয়ায় না গিয়ে বিশেষ্যটাই রেখে দেয়: আও ইত'আমুন ফী ইয়াওমিন যী মাজা'আতিন শাদীদাহ, অথবা প্রচণ্ড ক্ষুধার দিনে খাওয়ানো। তারপর আসে: ইয়াতীমান মিন যাওয়িল কারাবাহ, আত্মীয়দের মধ্য থেকে একজন ইয়াতীমকে। মাআরিফুল কুরআনও নিজের ভাষায় একই কথা বলে: যেদিন সে ক্ষুধার্ত, সেদিন তাকে খাওয়ানো। বলার ধরন আলাদা, পড়াটা এক। ব্যাকরণ নিয়ে এর বেশি তর্ক বা অন্য কোনো গঠনের প্রস্তাব সংগৃহীত কোনো তাফসীরে নেই। তাই এখানে কোনোটাকে বেছে নেওয়ার প্রশ্ন ওঠে না। সবাই ইয়াতীমকে পড়েন খাবার পাওয়া মানুষ হিসেবে, আর দিনটা ৯০:১৪ আয়াতের সেই ক্ষুধার দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Fatherless, Weak, or Bereft",
          "bn": "ইয়াতীম কাকে বলে"
        },
        "p": [
          {
            "en": "At-Tabari's gloss gives the fullest working definition among the texts consulted here: saghiran la aba lahu, a small child who has no father. Two conditions sit in that phrase. The person is small, and the loss is the father's. At-Tabari does not argue for either condition here; he states them as what yatim means in the verse and moves on to the kinship. The abridged English Ibn Kathir and the Ma'arif simply say an orphan, and al-Baghawi and as-Sa'di use the Qur'an's own word without defining it.",
            "bn": "সংগৃহীত লেখাগুলোর মধ্যে সবচেয়ে পূর্ণ সংজ্ঞাটা দেন তাবারী: সাগীরান লা আবা লাহু, এমন ছোট কেউ যার বাবা নেই। এ কথায় দুটি শর্ত আছে। মানুষটি ছোট, আর হারানোটা বাবার। তাবারী এখানে কোনো শর্তের পক্ষে যুক্তি দেন না। আয়াতে ইয়াতীম বলতে কী বোঝায়, সেটুকু বলে তিনি আত্মীয়তার প্রসঙ্গে চলে যান। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ আর মাআরিফ শুধু 'ইয়াতীম' বলেই থামে। বাগাভী ও সা'দী কুরআনের শব্দটাই ব্যবহার করেন, আলাদা করে কোনো সংজ্ঞা দেন না।"
          },
          {
            "en": "Al-Qurtubi turns to the linguists. The people of the language, he reports, say the orphan is so called for his weakness: yatima ar-rajulu yutman is said of a man when he grows weak. They also mention that among people the orphan is the child who has lost the father, while among animals it is the young that has lost the mother. He adds that the subject was covered in full in Surat al-Baqarah; that passage was not consulted for this verse, and nothing here is drawn from it.",
            "bn": "কুরতুবী যান ভাষাবিদদের কাছে। তিনি জানান, ভাষার পণ্ডিতেরা বলেন, ইয়াতীমকে এ নাম দেওয়া হয়েছে তার দুর্বলতার কারণে। কেউ দুর্বল হয়ে পড়লে আরবরা বলে, ইয়াতিমার রাজুলু ইউতমান। তাঁরা আরও বলেন, মানুষের মধ্যে ইয়াতীম সে, যে বাবাকে হারিয়েছে। পশুর মধ্যে ইয়াতীম সে, যে মাকে হারিয়েছে। কুরতুবী যোগ করেন, বিষয়টি সূরা আল-বাকারায় পুরোপুরি আলোচিত হয়েছে। সেই অংশ এ আয়াতের জন্য সংগ্রহ করা হয়নি, তাই এখানে সেখান থেকে কিছু নেওয়া হয়নি।"
          },
          {
            "en": "Then comes a second position, which al-Qurtubi gives without settling the matter: some of the people of the language say the orphan is one whose two parents have died. In support he quotes a line of Qays ibn al-Mulawwah: to God I complain of the loss of Layla, as an orphan complained to God of the loss of both parents. So the texts consulted here hold two lexical readings side by side, the loss of the father and the loss of both. Al-Qurtubi names both, and this article keeps both without choosing.",
            "bn": "এরপর আসে দ্বিতীয় একটি মত, যা কুরতুবী উল্লেখ করেন কোনো মীমাংসা না টেনে। কিছু ভাষাবিদ বলেন, ইয়াতীম সে, যার বাবা-মা দুজনেই মারা গেছেন। এর সমর্থনে তিনি কায়স ইবনুল মুলাওয়াহের একটি পঙক্তি আনেন: লায়লাকে হারানোর কষ্ট আমি আল্লাহর কাছে জানাই, যেমন বাবা-মা দুজনকে হারিয়ে কোনো ইয়াতীম আল্লাহর কাছে ফরিয়াদ করেছিল। ফলে সংগৃহীত লেখায় দুটি আভিধানিক অর্থ পাশাপাশি রয়ে যায়: শুধু বাবাকে হারানো, আর দুজনকেই হারানো। কুরতুবী দুটিরই নাম নেন। এ লেখাও দুটিই রাখে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Maqrabah Means",
          "bn": "মাকরাবাহ শব্দের অর্থ"
        },
        "p": [
          {
            "en": "On dha maqrabah the commentators consulted here speak with one voice. Ibn Kathir glosses it dha qarabatin minhu, related to him, and lists who said so before him: Ibn 'Abbas (RA), 'Ikrimah, al-Hasan, ad-Dahhak and as-Suddi. At-Tabari writes that by dhu al-maqrabah is meant dha al-qarabah, the one of kinship, and gives the same from Ibn Zayd through his own chain: dha qarabah. Al-Baghawi says it in a single line, and al-Qurtubi defines the word with the same single noun, qarabah, kinship.",
            "bn": "যা মাকরাবাহ নিয়ে সংগৃহীত তাফসীরগুলো একই সুরে কথা বলে। ইবন কাসীর এর অর্থ করেন যা কারাবাতিন মিনহু, অর্থাৎ তার আত্মীয়। কারা আগে এ কথা বলেছেন, তাও জানান: ইবন আব্বাস (রাঃ), ইকরিমা, হাসান, দাহহাক ও সুদ্দী। তাবারী লেখেন, যুল মাকরাবাহ বলতে বোঝানো হয়েছে যাল কারাবাহ, অর্থাৎ আত্মীয়তার সম্পর্কওয়ালা। নিজের সনদে ইবন যায়দ থেকেও তিনি একই কথা আনেন: যা কারাবাহ। বাগাভী কথাটা বলেন এক লাইনে, আর কুরতুবীও শব্দটার সংজ্ঞা দেন ওই এক বিশেষ্য দিয়েই: কারাবাহ, আত্মীয়তা।"
          },
          {
            "en": "Two of them add a small turn of phrase. Al-Baghawi spells out the relation from the reader's side: yatiman baynaka wa baynahu qarabah, an orphan between whom and you there is kinship. Al-Qurtubi gives the idiom the word belongs to: one says fulan dhu qarabati and fulan dhu maqrabati, so-and-so is my relative, the two forms used alike. Maqrabah, in their hands, is a way of saying qarabah, not a separate idea. The kinship is between the giver and the orphan, and al-Baghawi's you puts the reader in the giver's place.",
            "bn": "দুজন এর সঙ্গে ছোট্ট একটা কথা জোড়েন। বাগাভী সম্পর্কটা বুঝিয়ে দেন পাঠকের দিক থেকে: ইয়াতীমান বাইনাকা ওয়া বাইনাহু কারাবাহ, এমন ইয়াতীম যার সঙ্গে আপনার আত্মীয়তা আছে। কুরতুবী জানান শব্দটা কোন বাগধারার: আরবরা বলে, ফুলানুন যূ কারাবাতী, আবার বলে ফুলানুন যূ মাকরাবাতী, দুটোরই মানে অমুক আমার আত্মীয়। অর্থাৎ তাঁদের কাছে মাকরাবাহ আলাদা কোনো ধারণা নয়, কারাবাহরই আরেক রূপ। আত্মীয়তাটা দাতা আর ইয়াতীমের মধ্যে। বাগাভীর ওই 'আপনার' শব্দটা পাঠককে বসিয়ে দেয় দাতার জায়গায়।"
          },
          {
            "en": "Does near here mean near by blood, or near in some other sense, as a neighbour or a friend is near? None of the texts consulted here raises that question. All of them gloss the word as qarabah, kinship, and al-Muyassar names the bond that is kept as silat ar-rahim, the tie of the womb, which is a family tie. No commentator consulted here extends maqrabah to living nearby or to friendship, so this article does not extend it either, and leaves the question where the sources leave it.",
            "bn": "এখানে 'নিকট' মানে কি রক্তের সম্পর্কে নিকট, নাকি অন্য কোনোভাবে, যেমন প্রতিবেশী বা বন্ধু কাছের হয়? সংগৃহীত কোনো লেখায় এ প্রশ্ন ওঠেইনি। সবাই শব্দটার অর্থ করেছেন কারাবাহ, আত্মীয়তা। মুয়াসসার যে বন্ধন রক্ষার কথা বলে, তার নাম দেয় সিলাতুর রাহিম, রেহেমের বন্ধন, অর্থাৎ পারিবারিক সম্পর্ক। কোনো তাফসীরকার মাকরাবাহকে পাশাপাশি বাস করা বা বন্ধুত্ব পর্যন্ত টেনে নেননি। তাই এ লেখাও টেনে নেয় না। প্রশ্নটা যেখানে সূত্রগুলো রেখেছে, সেখানেই থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Rewards at One Meal",
          "bn": "এক বেলার খাবারে দুই নেকি"
        },
        "p": [
          {
            "en": "Why name a relative at all, when 90:14 already praises feeding the hungry? Al-Muyassar answers inside its gloss: the related orphan is one in whom yajtami'u fihi fadlu as-sadaqati wa silatu ar-rahim, the merit of charity and the keeping of the womb-tie come together. Ma'arif al-Qur'an says the same in English: if an orphaned family member is given food to eat, its reward is twofold, for satisfying the hunger of a hungry person and for maintaining family ties and fulfilling his rights.",
            "bn": "৯০:১৪ আয়াত তো ক্ষুধার্তকে খাওয়ানোর প্রশংসা আগেই করেছে, তাহলে আবার আত্মীয়ের নাম কেন? মুয়াসসার উত্তরটা দেয় তার ব্যাখ্যার ভেতরেই। আত্মীয় ইয়াতীমের মধ্যে ইয়াজতামি'উ ফীহি ফাদলুস সাদাকাতি ওয়া সিলাতুর রাহিম, অর্থাৎ সদকার ফযীলত আর আত্মীয়তার বন্ধন রক্ষা, দুটো একসঙ্গে মেলে। মাআরিফুল কুরআন ইংরেজিতে একই কথা বলে। পরিবারের কোনো ইয়াতীম সদস্যকে খাওয়ালে সওয়াব হয় দ্বিগুণ। এক সওয়াব ক্ষুধার্তের ক্ষুধা মেটানোর, আরেক সওয়াব পারিবারিক বন্ধন রক্ষা আর তার হক আদায়ের।"
          },
          {
            "en": "As-Sa'di reads three things into the phrase rather than two. His gloss is jami'an bayna kawnihi yatiman, faqiran, dha qarabah: combining in himself being an orphan, being poor, and being of kin. The verse itself does not use the word faqir, poor; it is as-Sa'di's addition, and the text consulted here gives no reason for it beyond the gloss. What his line does make plain is that he sees the claims meeting in one person, so that a single meal answers more than one of them at once.",
            "bn": "সা'দী এ শব্দবন্ধে দুটির বদলে তিনটি দিক দেখেন। তাঁর ব্যাখ্যা: জামি'আন বাইনা কাওনিহী ইয়াতীমান, ফাকীরান, যা কারাবাহ। অর্থাৎ একই মানুষের মধ্যে তিনটি জিনিস একসঙ্গে: সে ইয়াতীম, সে গরীব, আর সে আত্মীয়। আয়াতে 'ফকীর' বা গরীব শব্দটা নেই। এটা সা'দীর সংযোজন, আর সংগৃহীত লেখায় এর পক্ষে আলাদা কোনো কারণ তিনি দেননি। তবে তাঁর এক লাইন থেকে এটুকু পরিষ্কার: তিনি দাবিগুলোকে দেখেন একজন মানুষের মধ্যে মিলিত অবস্থায়। ফলে এক বেলার খাবার একসঙ্গে একাধিক দাবির জবাব দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "An Order of Merit",
          "bn": "নেকির তারতম্য"
        },
        "p": [
          {
            "en": "Al-Qurtubi draws a comparison from the phrase. The verse, he says, teaches you that charity given to kin is better than charity given to those who are not kin, just as charity given to an orphan who has no guardian, la kafila lahu, is better than charity given to an orphan who finds someone to support him. Both halves of his sentence weigh the same thing from two sides: a family claim on the one hand, and on the other the absence of anyone who carries the orphan's needs.",
            "bn": "এ শব্দবন্ধ থেকে কুরতুবী একটা তুলনা টানেন। তিনি বলেন, আয়াত আপনাকে শেখায়: অনাত্মীয়কে দেওয়া সদকার চেয়ে আত্মীয়কে দেওয়া সদকা উত্তম। ঠিক যেমন, যে ইয়াতীমের দেখাশোনার কেউ নেই, লা কাফিলা লাহু, তাকে দেওয়া সদকা উত্তম সেই ইয়াতীমকে দেওয়া সদকার চেয়ে, যার ভরণপোষণের কেউ আছে। তাঁর বাক্যের দুই অংশ একই জিনিস মাপে দুই দিক থেকে। একদিকে পরিবারের দাবি। অন্যদিকে এমন কারও না থাকা, যে ইয়াতীমের প্রয়োজনের ভার বইবে।"
          },
          {
            "en": "Ma'arif al-Qur'an adds a third measure, which belongs to the day rather than the person: feeding him in a day when he is hungry, it says, will attract more reward. It then moves to the next verse, 90:16, with the remark that the poorer the person is, the greater the reward for the spender. These are rankings of merit within a good deed. None of the texts consulted here says that an unrelated orphan, or a relative who is not an orphan, falls outside the steep pass; they speak of where the reward is greater.",
            "bn": "মাআরিফুল কুরআন তৃতীয় একটি মাপকাঠি যোগ করে, যা মানুষের নয়, দিনের। মাআরিফের ভাষায়, যেদিন সে ক্ষুধার্ত সেদিন তাকে খাওয়ালে সওয়াব বেশি হবে। এরপর মাআরিফ চলে যায় পরের আয়াত ৯০:১৬-এ। সেখানে মন্তব্য করে, মানুষটি যত গরীব, দাতার সওয়াবও তত বেশি। এগুলো একটি নেক আমলের ভেতরে নেকির তারতম্য। অনাত্মীয় ইয়াতীম, কিংবা ইয়াতীম নয় এমন আত্মীয়, দুর্গম গিরিপথের বাইরে পড়ে যায়, এমন কথা সংগৃহীত কোনো লেখায় নেই। তাঁরা কথা বলেন কোথায় সওয়াব বেশি, তা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gift That Counts Twice",
          "bn": "যে দান দুবার গোনা হয়"
        },
        "p": [
          {
            "en": "Ibn Kathir supports the kinship gloss with a hadith, introducing it with kama ja'a fi al-hadith, as has come in the hadith, which marks it as a parallel rather than a report of why the verse was revealed. He gives Imam Ahmad's chain from Salman ibn 'Amir (RA), who heard the Messenger of Allah ﷺ, then adds that at-Tirmidhi and an-Nasa'i recorded it, and says of the chain he cited, hadha isnadun sahih, this chain is sound. That is Ibn Kathir's own judgment of Ahmad's chain.",
            "bn": "আত্মীয়তার এই ব্যাখ্যার পক্ষে ইবন কাসীর একটি হাদিস আনেন। শুরু করেন 'কামা জা'আ ফিল হাদিস', অর্থাৎ 'যেমন হাদিসে এসেছে' বলে। এতে বোঝা যায়, এটা একটা সমান্তরাল বর্ণনা, আয়াত নাজিলের কারণের বিবরণ নয়। তিনি ইমাম আহমাদের সনদ দেন সালমান ইবন আমির (রাঃ) থেকে, যিনি রাসূলুল্লাহ ﷺ-কে বলতে শুনেছেন। তারপর জানান, তিরমিযী ও নাসাঈও এটি বর্ণনা করেছেন। নিজের উদ্ধৃত সনদ সম্পর্কে বলেন, হাযা ইসনাদুন সহীহ, এ সনদ সহীহ। এটা আহমাদের সনদ নিয়ে ইবন কাসীরের নিজের মূল্যায়ন।"
          },
          {
            "en": "An-Nasa'i's wording, as the quranx.com page gives it in English (Sunan an-Nasa'i 2582): \"It was narrated from Salman bin 'Amir that the Prophet said: 'Giving charity to a poor person is charity, and (giving) to a relative is two things, charity and upholding the ties of kinship.'\" The page shows no grading from an-Nasa'i, and none is supplied here. The narration speaks of charity to any relative. It is not about orphans in particular, and its link to this verse is the one Ibn Kathir draws.",
            "bn": "নাসাঈর বর্ণনা, quranx.com পাতায় যেমন ইংরেজিতে আছে (সুনান আন-নাসাঈ ২৫৮২), তার বাংলা: \"সালমান ইবন আমির (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: 'গরীবকে দান করা একটি সদকা, আর আত্মীয়কে দান করা দুটি জিনিস: সদকা, এবং আত্মীয়তার বন্ধন রক্ষা।'\" পাতায় নাসাঈর দেওয়া কোনো মান উল্লেখ নেই, এখানেও কোনো মান জুড়ে দেওয়া হয়নি। বর্ণনাটি যেকোনো আত্মীয়কে দানের কথা বলে। বিশেষ করে ইয়াতীমের কথা এতে নেই। এ আয়াতের সঙ্গে এর যোগসূত্র ইবন কাসীরের টানা।"
          },
          {
            "en": "At-Tirmidhi records the same saying as hadith 658, inside a longer narration from Salman ibn 'Amir (RA) that first tells the one breaking his fast to do so with dried dates, or else with water. On that page at-Tirmidhi gives his own grading in Arabic: hadithu Salmana ibni 'Amirin hadithun hasan, the hadith of Salman ibn 'Amir is hasan. So two judgments are on record here, and they are of different kinds: Ibn Kathir calls Ahmad's chain sound, and at-Tirmidhi calls his own narration hasan. Neither is raised above what its author said.",
            "bn": "তিরমিযী একই বাণী এনেছেন ৬৫৮ নম্বর হাদিসে, সালমান ইবন আমির (রাঃ)-এর একটি দীর্ঘ বর্ণনার ভেতরে। সে বর্ণনার শুরুতে বলা হয়েছে, ইফতার করলে শুকনো খেজুর দিয়ে করবে, খেজুর না পেলে পানি দিয়ে। ওই পাতায় তিরমিযী আরবীতে নিজের মান দিয়েছেন: হাদিসু সালমানাবনি আমিরিন হাদিসুন হাসান, সালমান ইবন আমিরের হাদিসটি হাসান। তাহলে এখানে দুটি মূল্যায়ন আছে, আর দুটি দুই ধরনের। ইবন কাসীর আহমাদের সনদকে সহীহ বলেন, তিরমিযী নিজের বর্ণনাকে বলেন হাসান। কারও কথাকেই তাঁর বলা মানের উপরে তোলা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Relative Easy to Miss",
          "bn": "যে আত্মীয় সহজেই চোখ এড়ায়"
        },
        "p": [
          {
            "en": "Read together, the texts consulted here make a modest and concrete point. The verse does not ask for a grand gesture. It asks for food, on a hard day, for a young child who has lost a father, or both parents on the second reading al-Qurtubi reports, and who is tied to the giver by family. Every commentator who explains maqrabah says the same thing, and two of them, al-Muyassar and the Ma'arif, say the gift is counted twice because it keeps a family tie while it feeds.",
            "bn": "সংগৃহীত লেখাগুলো একসঙ্গে পড়লে কথাটা দাঁড়ায় সাদামাটা আর বাস্তব। আয়াত বড় কোনো আয়োজন চায় না। চায় কঠিন দিনে খাবার, এমন ছোট কারও জন্য যে বাবাকে হারিয়েছে, কুরতুবীর জানানো দ্বিতীয় মতে বাবা-মা দুজনকেই, আর যে দাতার সঙ্গে পারিবারিক বন্ধনে বাঁধা। মাকরাবাহর ব্যাখ্যা যিনিই দিয়েছেন, একই কথা বলেছেন। আর মুয়াসসার ও মাআরিফ বলে, দানটা দুবার গোনা হয়, কারণ খাওয়ানোর সঙ্গে সঙ্গে তা একটি পারিবারিক বন্ধনও রক্ষা করে।"
          },
          {
            "en": "Perhaps that is why the relative needs naming. A related orphan is close enough to be overlooked: the need is familiar, and the duty seems to belong to the whole family and so to nobody in particular. The steep pass of 90:11 is not only climbed in some distant place; on this verse's showing it can begin at a relative's door. The surah goes on in 90:16 and after, and those steps are left for their own reading. This verse asks that the nearest hungry orphan not be forgotten.",
            "bn": "হয়তো এ কারণেই আত্মীয়ের কথা আলাদা করে বলা দরকার ছিল। আত্মীয় ইয়াতীম এতটাই কাছের যে সহজেই চোখ এড়িয়ে যায়। অভাবটা চেনা, আর দায়টা মনে হয় গোটা পরিবারের, ফলে আসলে কারও নয়। ৯০:১১ আয়াতের দুর্গম গিরিপথ শুধু দূরের কোনো জায়গায় পাড়ি দেওয়ার জিনিস নয়। এ আয়াতের আলোয় তা শুরু হতে পারে কোনো আত্মীয়ের দরজায়। সূরা এগিয়ে যায় ৯০:১৬ ও তার পরের আয়াতগুলোতে, সেগুলো তাদের নিজেদের আলোচনার জন্য রইল। এ আয়াত শুধু এটুকু চায়: সবচেয়ে কাছের যে ইয়াতীম ক্ষুধার্ত, তাকে যেন কেউ ভুলে না যায়।"
          }
        ]
      }
    ]
  }
});
