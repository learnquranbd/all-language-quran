/**
 * Tadabbur long-form articles — surah 10.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "10:5": {
    "sections": [
      {
        "h": {
          "en": "An Argument, Not an Almanac",
          "bn": "এটি পঞ্জিকা নয়, যুক্তি"
        },
        "p": [
          {
            "en": "Surah Yunus reaches this verse in the middle of a case about accountability. 10:3 states that your Lord is Allah, who created the heavens and the earth in six days and then established Himself above the Throne, arranging the matter, and that no one intercedes except after His permission. 10:4 follows with the return: to Him is your return, all together. Then comes the sun and the moon, and 10:6 adds the alternation of night and day as signs for a people who fear Allah.",
            "bn": "সূরা ইউনুস এই আয়াতে পৌঁছায় জবাবদিহি নিয়ে একটি যুক্তির মাঝখানে। 10:3 আয়াত বলে, তোমাদের প্রতিপালক আল্লাহ, যিনি ছয় দিনে আসমানসমূহ ও যমীন সৃষ্টি করেছেন, তারপর আরশে সমুন্নত হয়েছেন এবং সব বিষয় পরিচালনা করছেন, আর তাঁর অনুমতির পরে ছাড়া কেউ সুপারিশ করে না। 10:4 আয়াত আসে প্রত্যাবর্তনের কথা নিয়ে: তোমাদের সকলের ফেরা তাঁরই কাছে। এরপর আসে সূর্য ও চন্দ্র, আর 10:6 আয়াত যোগ করে রাত ও দিনের পালাবদল — মুত্তাকীদের জন্য নিদর্শন।"
          },
          {
            "en": "So the sky is being entered as evidence in a hearing, not admired for its own sake. The point being argued is that a Lord who arranges the heavens is a Lord who will arrange a reckoning, and that the same precision which lets a farmer know when to plant will let a Day be appointed. Nothing in the passage encourages reading the verse as a piece of astronomy detached from that argument.",
            "bn": "অর্থাৎ আকাশকে এখানে আনা হচ্ছে একটি বিচারে সাক্ষ্য হিসেবে, নিজের সৌন্দর্যের জন্য প্রশংসিত হতে নয়। যে কথাটি প্রমাণ করা হচ্ছে তা হলো: যে প্রভু আসমান পরিচালনা করেন তিনিই হিসাব-নিকাশের ব্যবস্থা করবেন, আর যে নিখুঁত হিসাব একজন কৃষককে বলে দেয় কখন বীজ বুনতে হবে, সেই হিসাবেই একটি দিন নির্ধারিত হতে পারে। পুরো অংশের কোথাও আয়াতটিকে সেই যুক্তি থেকে বিচ্ছিন্ন করে জ্যোতির্বিদ্যার টুকরো হিসেবে পড়ার উৎসাহ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Diya' and Nur",
          "bn": "যিয়া ও নূর"
        },
        "p": [
          {
            "en": "The sun is called diya' and the moon nur, and classical commentators treat the choice as deliberate. They take diya' as the stronger word, light that blazes from the thing itself and comes with burning; nur they take as the milder light by which things are seen. Elsewhere the Quran calls the sun a siraj, a lamp, at 25:61 and again at 71:16, where the same verse calls the moon nur — so the vocabulary is consistent across the Book.",
            "bn": "সূর্যকে বলা হয়েছে যিয়া আর চন্দ্রকে নূর, আর ক্লাসিক্যাল মুফাসসিরগণ এই শব্দচয়নকে উদ্দেশ্যপ্রণোদিত হিসেবেই দেখেন। তাঁরা যিয়াকে নেন শক্তিশালী শব্দ হিসেবে — এমন আলো যা বস্তুটি থেকেই জ্বলে ওঠে এবং দহনসহ আসে; আর নূরকে নেন মৃদু আলো হিসেবে, যার দ্বারা জিনিস দেখা যায়। অন্যত্র কুরআন সূর্যকে সিরাজ অর্থাৎ প্রদীপ বলে — 25:61 আয়াতে, আবার 71:16 আয়াতে, যেখানে একই আয়াত চন্দ্রকে নূর বলে। ফলে গোটা কিতাব জুড়ে শব্দব্যবহার সঙ্গতিপূর্ণ।"
          },
          {
            "en": "It is worth being careful about what this does not establish. The verse distinguishes two kinds of light by name; the Arabic says only nur, and where a translation calls the moon a derived or a reflected light that is the translator's interpretation and not a word in the verse. It makes no statement about the mechanism by which the moon comes to have its light, and a reader who presses it into saying more than that is adding to it rather than reading it.",
            "bn": "কী প্রতিষ্ঠিত হচ্ছে না, সে ব্যাপারে সতর্ক থাকা দরকার। আয়াতটি নাম দিয়ে দুই ধরনের আলোকে আলাদা করে; আরবিতে আছে কেবল 'নূর', আর কোনো অনুবাদ যদি চন্দ্রকে 'আহরিত' বা 'প্রতিফলিত' আলো বলে, তা অনুবাদকের ব্যাখ্যা — আয়াতের শব্দ নয়। চন্দ্র কোন প্রক্রিয়ায় তার আলো পায় সে বিষয়ে আয়াতটি কিছুই বলে না, আর যে পাঠক এর চেয়ে বেশি কথা বলাতে চাপ দেন তিনি আয়াতটি পড়ছেন না, তাতে যোগ করছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Stations Measured Out",
          "bn": "মেপে দেওয়া মানযিল"
        },
        "p": [
          {
            "en": "Wa qaddarahu manazila — and He determined for it stations. The pronoun is singular, and most of the commentators refer it to the moon, the nearer of the two just mentioned, glossing manazil as the stations it passes through in the course of a month. The verb qaddara is from the root of qadar, measuring out. Nothing about the path is casual; it is portioned.",
            "bn": "ওয়া কাদ্দারাহু মানাযিলা — আর তিনি তার জন্য মানযিল নির্ধারণ করেছেন। সর্বনামটি একবচন, আর অধিকাংশ মুফাসসির একে ফিরিয়ে দেন চন্দ্রের দিকে — এইমাত্র উল্লেখ করা দুটির মধ্যে নিকটতরটি — এবং মানাযিলকে ব্যাখ্যা করেন সেই স্তরগুলো হিসেবে যেগুলো সে এক মাসের পথে অতিক্রম করে। কাদ্দারা ক্রিয়াপদটি এসেছে কাদার শব্দের ধাতু থেকে, যার অর্থ মেপে দেওয়া। এই পথের কোনো কিছুই আকস্মিক নয়; সবটাই মাপা।"
          },
          {
            "en": "36:39 gives the same image with a comparison attached: the moon has been measured out in phases until it returns looking like the old dried stalk of a date palm. That is a description anyone can verify by looking up for a month, and it is the reason this particular sign carries weight. It is not reported to us; it is repeated in front of us, on schedule, without an instrument being required.",
            "bn": "36:39 আয়াত একই ছবিকে একটি উপমাসহ দেয়: চন্দ্রের জন্য মানযিল নির্ধারিত হয়েছে, শেষ পর্যন্ত সে খেজুরগাছের পুরনো শুকনো ডাঁটার মতো হয়ে ফিরে আসে। এটি এমন বর্ণনা যা যে কেউ এক মাস আকাশের দিকে তাকিয়ে যাচাই করতে পারে, আর এ কারণেই এই নির্দিষ্ট নিদর্শনটির ওজন আছে। এটি আমাদের কাছে সংবাদ হিসেবে আসেনি; এটি আমাদের সামনে পুনরাবৃত্ত হয়, সময়মতো, কোনো যন্ত্রের প্রয়োজন ছাড়াই।"
          }
        ]
      },
      {
        "h": {
          "en": "That You May Know the Count",
          "bn": "যাতে তোমরা গুনতে পার"
        },
        "p": [
          {
            "en": "The stated purpose is human reckoning: that you may know the number of years and the account. 17:12 uses almost the same phrase of the night and the day, and 6:96 says the sun and the moon are for calculation. When people asked the Prophet ﷺ about the crescent moons, the answer given in 2:189 was of a piece with all of this: they are measurements of time for the people and for hajj.",
            "bn": "ঘোষিত উদ্দেশ্যটি মানুষের হিসাব: যাতে তোমরা বছরের সংখ্যা ও হিসাব জানতে পার। 17:12 আয়াত প্রায় একই কথা বলে রাত ও দিন সম্পর্কে, আর 6:96 আয়াত বলে সূর্য ও চন্দ্র গণনার জন্য। মানুষ যখন নবী ﷺ-কে নতুন চাঁদ সম্পর্কে জিজ্ঞেস করেছিল, 2:189 আয়াতে যে উত্তর দেওয়া হলো তা এই সবকিছুরই সঙ্গে মেলে: সেগুলো মানুষের জন্য ও হজের জন্য সময় নির্ধারক।"
          },
          {
            "en": "There is a quiet mercy in this. The calendar that fixes fasting and hajj hangs on something every human being can see without owning anything. A shepherd and an astronomer look at the same crescent and both know the month has turned. A worship schedule built on the sky is a schedule that no one can be priced out of and no authority can privately hold.",
            "bn": "এর ভেতরে একটি নিঃশব্দ রহমত আছে। যে বর্ষপঞ্জি রোযা ও হজ নির্ধারণ করে, তা ঝুলে আছে এমন কিছুর ওপর যা প্রত্যেক মানুষ কোনো কিছুর মালিক না হয়েই দেখতে পায়। একজন রাখাল আর একজন জ্যোতির্বিদ একই বাঁকা চাঁদ দেখেন, আর দুজনেই বোঝেন মাস ঘুরে গেছে। আকাশের ওপর দাঁড়ানো ইবাদতের সময়সূচি এমন এক সূচি, যা থেকে কাউকে দামের কারণে বাদ দেওয়া যায় না এবং কোনো কর্তৃপক্ষ তা নিজের কব্জায় রাখতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Except in Truth",
          "bn": "সত্য ছাড়া নয়"
        },
        "p": [
          {
            "en": "Allah has not created that except bil-haqq, in truth. The clause rules out two readings at once: that the arrangement is accidental, and that it is decorative. 30:8 says the same of the heavens and the earth and adds a specified term to it. Purpose and expiry are stated together, and since 10:4 raised the question of the return this surah has been arguing for exactly that combination.",
            "bn": "আল্লাহ এসব সৃষ্টি করেননি বিল-হক্ব অর্থাৎ যথাযথভাবে ছাড়া। এই বাক্যাংশটি একসঙ্গে দুটি পাঠ বাতিল করে দেয়: এই বিন্যাস আকস্মিক, কিংবা এটি নিছক সাজসজ্জা। 30:8 আয়াত আসমানসমূহ ও যমীন সম্পর্কে একই কথা বলে এবং তার সঙ্গে একটি নির্দিষ্ট মেয়াদ যোগ করে। উদ্দেশ্য আর মেয়াদ একসঙ্গে বলা হয়েছে, আর 10:4 আয়াত থেকে সূরাটি ঠিক এই সমন্বয়ের পক্ষেই যুক্তি দিয়ে আসছে।"
          },
          {
            "en": "The closing verb is yufassilu, He lays the signs out in detail. The same verb ends 6:97 after the stars are named for guidance, there in the past tense — fassalna, We have detailed — and it returns in this exact form at 13:2, where the detailing is so that you may be certain of the meeting with your Lord. The signs, then, are not withheld and not obscure. They have been set out at length, and the variable the verse leaves open is the reader.",
            "bn": "শেষ ক্রিয়াপদটি ইউফাসসিলু — তিনি নিদর্শনগুলো বিশদভাবে বিন্যস্ত করেন। পথনির্দেশের জন্য নক্ষত্রের কথা বলার পর 6:97 আয়াত একই ধাতুর ক্রিয়া দিয়ে শেষ হয়, তবে সেখানে তা অতীত কালে — 'ফাসসালনা', আমি বিশদভাবে বর্ণনা করেছি — আর ঠিক এই রূপটিই ফিরে আসে 13:2 আয়াতে, যেখানে এই বিশদ বিন্যাস এ জন্য যে তোমরা যেন তোমাদের প্রতিপালকের সাক্ষাৎ সম্পর্কে নিশ্চিত হও। অর্থাৎ নিদর্শনগুলো আটকে রাখা হয়নি, অস্পষ্টও নয়। সেগুলো বিস্তারিতভাবে বিছিয়ে দেওয়া হয়েছে, আর আয়াতটি যে চলকটি খোলা রাখে তা হলো পাঠক।"
          }
        ]
      }
    ]
  },
  "10:11": {
    "sections": [
      {
        "h": {
          "en": "Between Praise and Forgetting",
          "bn": "প্রশংসা আর ভুলে যাওয়ার মাঝখানে"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and this stretch of it is about calling on Allah. 10:10 has just shown the people of the Garden at their call: glorification, peace for a greeting, and praise to the Lord of the worlds last. Our verse turns to a caller who asks for harm and wants it as fast as he expects good. Then 10:12 adds the man who calls while affliction touches him and walks on as if he never called once it lifts.",
            "bn": "সূরা ইউনুস মাক্কী সূরা, আর তার এই অংশটা আল্লাহকে ডাকা নিয়ে। ১০:১০ আয়াতে জান্নাতবাসীদের ডাক সদ্য দেখানো হয়েছে। সেখানে আল্লাহর পবিত্রতার ঘোষণা, অভিবাদন হিসেবে সালাম, আর সবশেষে জগৎসমূহের প্রতিপালকের প্রশংসা। আমাদের আয়াত আনে অন্য রকম এক ডাকনেওয়ালাকে, যে ক্ষতি চায় আর চায় ভালো জিনিসের মতোই তাড়াতাড়ি সেটাও হাতে আসুক। এরপর ১০:১২ আয়াত আনে সেই মানুষকে, কষ্ট লাগলে যে আল্লাহকে ডাকতেই থাকে, আর কষ্ট সরে গেলে এমনভাবে চলে যায় যেন কখনো ডাকেইনি।"
          },
          {
            "en": "Was there an occasion? Al-Baghawi reports that it is said the verse came down about an-Nadr ibn al-Harith, when he said what 8:32 records: O Allah, if this should be the truth from You, rain down upon us stones from the sky. Al-Qurtubi passes the same on as something said, that the verse means the people of Makkah, and closes with and Allah knows best. Neither gives it a chain, so the placement, not the occasion, carries the weight.",
            "bn": "নাযিল হওয়ার কোনো উপলক্ষ আছে কি? বাগাভী বলছেন, বলা হয়ে থাকে যে আয়াতটি নেমেছে নাযর ইবনুল হারিসকে নিয়ে, যখন সে ৮:৩২ আয়াতে ধরা কথাটা বলেছিল, হে আল্লাহ, এটা যদি তোমার কাছ থেকে আসা সত্য হয় তবে আমাদের উপর আসমান থেকে পাথর বর্ষণ কর। কুরতুবীও কথাটা এভাবেই আনেন, বলা হয়ে থাকে যে আয়াতের লক্ষ্য মক্কার লোকেরা, আর শেষে যোগ করেন, আল্লাহই ভালো জানেন। কেউই সনদ দেন না। তাই এখানে উপলক্ষের চেয়ে আয়াতের অবস্থানটাই ভরসার জিনিস।"
          },
          {
            "en": "The surah's own frame supports reading it by position. 10:7 has already named a group who do not expect the meeting with Us, satisfied with the life of this world and secure in it. Our verse picks up that exact description at its close and says what is done with them. So this is not an aside about bad temper. It is the second half of a portrait the surah had already begun.",
            "bn": "অবস্থান ধরে পড়ার পক্ষে সূরার নিজের গড়নটাই কথা বলে। ১০:৭ আয়াতে এমন এক দলের কথা আগেই এসেছে, যারা আমার সাক্ষাতের আশা রাখে না, দুনিয়ার জীবন নিয়েই সন্তুষ্ট আর তাতেই নিশ্চিন্ত। আমাদের আয়াত শেষে গিয়ে হুবহু সেই পরিচয়টাই তুলে নেয়, আর বলে তাদের নিয়ে কী করা হয়। তাহলে এটি নিছক বদমেজাজ নিয়ে ফেলে রাখা কোনো প্রসঙ্গান্তর নয়। সূরা আগেই যে ছবিটা আঁকতে শুরু করেছিল, এটি তার বাকি অর্ধেক।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Words for Hurry",
          "bn": "তাড়াহুড়োর দুটো শব্দ"
        },
        "p": [
          {
            "en": "The condition clause runs to seven Arabic words: wa law yu'ajjilu Allahu li-n-nasi ash-sharra isti'jalahum bi-l-khayr. Two forms of the root 'a-j-l stand inside it. Yu'ajjilu is the second form, to make a thing come early, and Allah is its subject. Isti'jalahum is the tenth form's verbal noun with their pronoun attached, their own demanding that it come early. Al-Qurtubi keeps the scholars' summary in one line: the hastening is from Allah, the hurrying from the servant.",
            "bn": "শর্তের অংশটা সাতটি আরবি শব্দ: ওয়া লাও ইউআজ্জিলুল্লাহু লিন্নাসিশ শাররা ইস্তিজালাহুম বিল খাইর। এক মূল থেকে আসা দুটি রূপ এর ভেতরে পাশাপাশি বসে আছে, মূলটা আইন-জীম-লাম। ইউআজ্জিলু দ্বিতীয় বাবের ক্রিয়া, অর্থ কোনো কিছু আগেই আনিয়ে দেওয়া, আর এর কর্তা আল্লাহ নিজে। ইস্তিজালাহুম দশম বাবের মাসদার, সঙ্গে তাদের সর্বনাম লাগানো, অর্থ তাদের নিজেদের তাড়া দেওয়া যেন জিনিসটা আগেই আসে। কুরতুবী আলিমদের কথাটা একটি লাইনে ধরে রেখেছেন। তাড়াতাড়ি করাটা আল্লাহর দিক থেকে, তাড়া দেওয়াটা বান্দার দিক থেকে।"
          },
          {
            "en": "At-Tabari explains why isti'jalahum sits in the accusative: the verb yu'ajjilu falls upon it, as in qumtu al-yawma qiyamaka, I stood as you stand. He adds a test: it cannot be the verbal noun of yu'ajjilu, since then the kaf of comparison could not have entered it, a point he refers to al-Farra'. Al-Qurtubi leaves it open. Abu Ali held both hastenings to be Allah's with a word elided, which he ascribes to al-Khalil and Sibawayh; al-Akhfash and al-Farra' read ka-isti'jalihim with the kaf dropped.",
            "bn": "ইস্তিজালাহুম কেন নাসবের অবস্থায় বসেছে, তাবারী তা বুঝিয়ে দেন। ইউআজ্জিলু ক্রিয়াটাই তার উপর গিয়ে পড়েছে, যেমন কুমতুল ইয়াওমা কিয়ামাকা, মানে আমি দাঁড়িয়েছি তোমার দাঁড়ানোর মতো। তিনি একটা যাচাইও দেন। এটি ইউআজ্জিলুর মাসদার হতে পারে না, কারণ তা হলে তুলনার কাফ এর ভেতরে ঢুকতে পারত না, আর এই কথার জন্য তিনি ফাররার দিকে ইশারা করেন। কুরতুবী প্রশ্নটা খোলা রাখেন। আবু আলীর মত, দুটো তাড়াই আল্লাহর দিক থেকে আর মাঝে একটি শব্দ উহ্য, আর এটিকে তিনি খলীল ও সীবাওয়াইহির অবস্থান বলেন। আখফাশ ও ফাররা পড়েন কা-ইস্তিজালিহিম, কাফ ফেলে দিয়ে।"
          },
          {
            "en": "The answer clause is three words: la-qudiya ilayhim ajaluhum. At-Tabari glosses the verb as finished off and cast to them, propping the usage on a line of Abu Dhu'ayb about two coats of mail that Dawud finished. Then, plainly: they would have perished, and death, which is the term, would have been brought forward. He renders transgression as defiance and insolence, and wandering blindly as going back and forth, which as-Sa'di and al-Qurtubi both sharpen to being bewildered.",
            "bn": "জবাবের অংশটা তিনটি শব্দ: লাকুদিয়া ইলাইহিম আজালুহুম। তাবারী ক্রিয়াটির অর্থ করেন, তাদের মেয়াদ চুকিয়ে তাদের দিকে ছুঁড়ে দেওয়া হত। ব্যবহারটা দেখাতে তিনি আবু যুআইবের পঙক্তি আনেন, যেখানে দাউদ দুটি বর্ম বানিয়ে শেষ করেছেন। তারপর সোজা কথায়, তারা ধ্বংস হয়ে যেত, আর মৃত্যু, যেটাই মেয়াদ, তাদের জন্য আগিয়ে আনা হত। তুগইয়ানের অর্থ তিনি দেন গোঁয়ার্তুমি আর ঔদ্ধত্য, আর ইয়ামহুনের অর্থ এদিক-ওদিক ঘোরা, যেটাকে সা'দী আর কুরতুবী দুজনেই আরও ধারালো করে বলেন, দিশেহারা হওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Hastened Evil Is",
          "bn": "যে অকল্যাণ দ্রুত দেওয়ার কথা"
        },
        "p": [
          {
            "en": "At-Tabari opens by supplying a word the verse leaves out. If Allah were to hasten the answering of their supplication for evil, meaning whatever harms a person or his property, as He hastens the good when they call for it, they would perish. Mujahid, cited there through four chains, makes it domestic: a man's word when angry at his child or his property, O Allah, do not bless him and curse him. Qatada puts it broadly: a supplication against himself and his wealth with what he would hate answered.",
            "bn": "তাবারী শুরু করেন আয়াতের একটি উহ্য শব্দ যোগ করে। আল্লাহ যদি মানুষের অকল্যাণের দু'আ কবুল করায় তাড়াতাড়ি করতেন, অর্থাৎ যা তার নিজের বা তার সম্পদের ক্ষতি ডেকে আনে, ঠিক যেমন কল্যাণের ডাকে তিনি তাড়াতাড়ি সাড়া দেন, তাহলে তারা ধ্বংস হয়ে যেত। সেখানে চারটি সনদে তিনি মুজাহিদের কথা আনেন, আর ব্যাপারটা একেবারে ঘরের ভেতরের। সন্তানের বা সম্পদের উপর রাগ হলে মানুষ বলে ফেলে, হে আল্লাহ, এতে বরকত দিও না আর একে লানত কর। কাতাদা কথাটা চওড়া করে বলেন, মানুষ নিজের আর নিজের মালের বিরুদ্ধে এমন দু'আ করে, যা কবুল হলে তার নিজেরই অপছন্দ।"
          },
          {
            "en": "Al-Baghawi adds Ibn Abbas: it is what a man says in anger to his household and his child, may Allah curse you and not bless you. As-Sa'di does not limit the verse to supplication. He reads it of sin and consequence. If Allah hastened the evil when they brought about its causes, as He hastens the good when they bring about theirs, the punishment would have wiped them out. His summary is a pair of near-identical verbs: He grants them respite and does not neglect them.",
            "bn": "বাগাভী যোগ করেন ইবনু আব্বাসকে। রাগের মুহূর্তে মানুষ নিজের পরিবার আর সন্তানকে যা বলে ফেলে, আল্লাহ তোমাদের লানত করুন, তোমাদের বরকত না দিন। সা'দী আয়াতটিকে দু'আর মধ্যে আটকে রাখেন না। তিনি পড়েন গুনাহ আর তার পরিণাম হিসেবে। মানুষ যখন অকল্যাণের কারণগুলো নিজেই জোগাড় করে, তখন আল্লাহ যদি তাড়াতাড়ি সেই অকল্যাণ এনে দিতেন, যেমন কল্যাণের কারণ জোগাড় করলে তিনি কল্যাণ তাড়াতাড়ি দেন, তাহলে শাস্তিই তাদের মুছে দিত। সা'দীর সারকথা প্রায় একই রকম দুটি ক্রিয়ায় বাঁধা, তিনি অবকাশ দেন কিন্তু অবহেলা করেন না।"
          },
          {
            "en": "Al-Qurtubi lays the readings side by side instead of choosing. One is that if He hastened the punishment as they hasten the reward they would simply die, since in this world they were created weak, and will not be on the Day of Resurrection, created to last. Another, which he gives to Ibn Ishaq, restricts it to the disbeliever, whose term would be closed early so he reached the punishment of the hereafter sooner. Muqatil names an-Nadr. So the supplication reading and the punishment reading are a real disagreement.",
            "bn": "কুরতুবী কোনো একটা মত বেছে না নিয়ে সবগুলো পাশাপাশি সাজান। একটি মত এই, তিনি যদি শাস্তি ততটাই তাড়াতাড়ি আনতেন যতটা তাড়াতাড়ি তারা পুরস্কার চায়, তবে তারা মরেই যেত। দুনিয়ায় তারা দুর্বল করেই সৃষ্টি, কিয়ামতের দিন তারা দুর্বল থাকবে না, সেদিন তাদের গড়া হবে টিকে থাকার জন্য। আরেক মত তিনি দেন ইবনু ইসহাকের নামে, যা আয়াতটিকে কাফিরের মধ্যে সীমিত করে। তার মেয়াদ আগেই চুকিয়ে দেওয়া হত, যাতে সে আখিরাতের শাস্তিতে তাড়াতাড়ি পৌঁছে যায়। নাযরের নামটা আনেন মুকাতিল। তাহলে দু'আর পড়া আর শাস্তির পড়া সত্যিকারের মতভেদ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reading From Ash-Sham",
          "bn": "শামের ক্বিরাআত"
        },
        "p": [
          {
            "en": "At-Tabari reports the split in the answer clause. The reciters of the Hijaz and Iraq read la-qudiya, passive, with a damma on the qaf and the term in the nominative, naming no agent: their term would have been finished for them. The people of ash-Sham read la-qada, active, with the term in the accusative: He would have decreed their term to them. At-Tabari's verdict is relaxed: the two agree in meaning, either is correct, and he recites the passive only because most reciters do.",
            "bn": "জবাবের অংশটা নিয়ে তাবারী মতভেদটা তুলে ধরেন। হিজাজ আর ইরাকের ক্বারীরা পড়েন লাকুদিয়া, কর্মবাচ্যে, কাফের উপর পেশ আর আজাল রফয়ে। এতে কর্তার নাম আসে না, শুধু বলা হয়, তাদের মেয়াদ তাদের জন্য চুকিয়ে দেওয়া হত। শামের লোকেরা পড়েন লাকাদা, কর্তৃবাচ্যে, আর আজাল আসে নাসবে, অর্থ তিনি তাদের মেয়াদ তাদের দিকে চুকিয়ে দিতেন। তাবারীর রায়টা নরম। দুই ক্বিরাআতের অর্থ একই, যে যেটাই পড়ুক সে ঠিক আছে, আর তিনি নিজে কর্মবাচ্যেই পড়েন শুধু এই কারণে যে অধিকাংশ ক্বারী সেটার উপরেই আছেন।"
          },
          {
            "en": "Al-Qurtubi names Ibn Amir for la-qada and calls it a fine reading, because it joins the opening clause, where Allah is already the subject of the hastening. Al-Baghawi names Ibn Amir and Ya'qub for it and spells out each yield. Passive, their destruction would have been completed and they would all have died. Active, He would have destroyed the one prayed against and put him to death. So one reading veils the agent and spreads the ruin; the other names Allah and narrows it to the person the curse targeted.",
            "bn": "লাকাদা পড়াটার জন্য কুরতুবী নাম করেন ইবনু আমিরের, আর এটিকে সুন্দর ক্বিরাআত বলেন, কারণ এটি শুরুর অংশের সঙ্গে জুড়ে যায়, যেখানে তাড়াতাড়ি করার ক্রিয়ার কর্তা হিসেবে আল্লাহর নাম আগেই এসেছে। বাগাভী এর জন্য ইবনু আমির ও ইয়াকুব দুজনের নাম দেন, আর খুলে বলেন কোন পড়ায় কী অর্থ দাঁড়ায়। কর্মবাচ্যে, তাদের ধ্বংস পুরো হয়ে যেত আর তারা সবাই মরে যেত। কর্তৃবাচ্যে, যার বিরুদ্ধে দু'আ করা হয়েছে তাকে তিনি ধ্বংস করে দিতেন, মেরেই ফেলতেন। তাই এক পড়া কর্তাকে আড়ালে রাখে আর ধ্বংসটা ছড়িয়ে দেয়, অন্যটা আল্লাহর নাম সামনে আনে আর ধ্বংসটা সেই একজনের মধ্যে গুটিয়ে আনে, যার দিকে বদদু'আটা ছোঁড়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Do Not Curse Your Own",
          "bn": "নিজের লোকের বিরুদ্ধে দু'আ নয়"
        },
        "p": [
          {
            "en": "The narration attached here comes from Jabir ibn Abdullah (RA). Ibn Kathir brings it here from the Musnad of Abu Bakr al-Bazzar and notes that Abu Dawud recorded it too. Abu Dawud's wording, at number 1532, runs: Do not invoke curse on yourselves, and do not invoke curse on your children, and do not invoke curse on your servants, and do not invoke curse on your property, lest you happen to do it at a time when Allah is asked for something and grants your request. Abu Dawud adds that the chain is connected: Ubadah ibn al-Walid met Jabir (RA).",
            "bn": "এই আয়াতের সঙ্গে জোড়া হাদীসটি জাবির ইবনু আবদুল্লাহ (রাঃ) থেকে। ইবনু কাসীর এটি এখানে আনেন আবু বকর বাযযারের মুসনাদ থেকে, আর জানিয়ে দেন যে আবু দাউদও এটি সংকলন করেছেন। আবু দাউদের সংকলনে ১৫৩২ নম্বরে শব্দগুলো এই, নিজেদের বিরুদ্ধে বদদু'আ করো না, তোমাদের সন্তানের বিরুদ্ধে বদদু'আ করো না, তোমাদের খাদেমের বিরুদ্ধে বদদু'আ করো না, তোমাদের সম্পদের বিরুদ্ধে বদদু'আ করো না, এমন যেন না হয় যে আল্লাহর কাছে কিছু চাওয়ার আর দেওয়ার সেই সময়টাতেই তা পড়ে যায় আর তোমাদের চাওয়া কবুল হয়ে যায়। আবু দাউদ যোগ করেন, এই হাদীসের সনদ মিলিত, উবাদা ইবনুল ওয়ালীদ জাবির (রাঃ)-এর সাক্ষাৎ পেয়েছেন।"
          },
          {
            "en": "Al-Qurtubi cites the same prohibition from Sahih Muslim, in the expedition of Batn Buwat, where an Ansari's camel balked under him and he said to it, may Allah curse you. The Prophet ﷺ asked who was cursing his camel and told him to dismount and not travel in their company on something cursed. He also passes on, with no collection and no chain, a report that the Prophet ﷺ asked Allah not to answer a lover's supplication against the one he loves. Nothing rests on that.",
            "bn": "একই নিষেধ কুরতুবী আনেন সহীহ মুসলিম থেকে, বাতনে বুওয়াতের অভিযানের ঘটনার ভেতর থেকে। এক আনসারীর উটটি তাঁর নিচে গোঁ ধরে বসে, আর তিনি উটটিকে বলে ফেলেন, আল্লাহ তোকে লানত করুন। নবী ﷺ জিজ্ঞেস করেন, কে নিজের উটকে লানত করল, তারপর তাকে নেমে যেতে বলেন, আর লানতপ্রাপ্ত কিছু নিয়ে তাঁদের সঙ্গে সফর করতে নিষেধ করেন। তিনি আরেকটি বর্ণনাও আনেন, কোনো সংকলনের নাম নেই, সনদও নেই, যেখানে নবী ﷺ আল্লাহর কাছে চেয়ে নিয়েছেন যে ভালোবাসার মানুষের বিরুদ্ধে ভালোবাসার মানুষের দু'আ কবুল না হোক। এই লেখার কিছুই তার উপর দাঁড়িয়ে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Delay Recurs",
          "bn": "যে আয়াতগুলোয় দেরিটা ফিরে আসে"
        },
        "p": [
          {
            "en": "17:11 says man supplicates for evil as he does for good, and adds what our verse withholds, that man is ever hasty. Ibn Kathir sets it beside this verse himself. 13:6 turns the same haste outward, where they urge the Prophet ﷺ to bring on evil before good, and answers that his Lord is full of forgiveness despite their wrongdoing and severe in penalty. 16:61 states the rule our verse implies: were Allah to blame people for their wrongdoing He would leave no creature on the earth, but defers them to a named term. As-Sa'di quotes it here.",
            "bn": "১৭:১১ আয়াত বলছে, মানুষ অকল্যাণ চায় যেভাবে কল্যাণ চাওয়া উচিত, আর সঙ্গে বলে দেয় সেই কথাটা, যা আমাদের আয়াত বলে না, মানুষ বড়ই তাড়াহুড়াকারী। ইবনু কাসীর নিজেই ওই আয়াতটিকে এই আয়াতের পাশে বসান। ১৩:৬ আয়াতে একই তাড়া বাইরের দিকে ঘোরানো, সেখানে তারা কল্যাণের আগেই অকল্যাণ আনার জন্য নবী ﷺ কে তাড়া দেয়, আর জবাব আসে, মানুষ সীমালঙ্ঘন করলেও তাঁর প্রতিপালক ক্ষমাশীল, আর তিনি শাস্তিদানেও কঠোর। ১৬:৬১ আয়াত সেই নিয়মটাই বলে, যা আমাদের আয়াত ইশারায় ধরে। আল্লাহ মানুষকে তাদের সীমালঙ্ঘনের জন্য পাকড়াও করলে যমীনে কোনো প্রাণীই রেহাই পেত না, কিন্তু তিনি নির্দিষ্ট কাল পর্যন্ত সময় দেন। সা'দী এটিই এখানে উদ্ধৃত করেন।"
          },
          {
            "en": "Two more sit close by. 10:19 carries the same passive verb and puts it to another use: were it not for a word that preceded from your Lord, it would have been judged between them over what they differ in. So the Quran twice says that a judgement was ready and a word held it back. The closing clause here is a formula kept for the same condition, as in 7:186. Heard together, the delay stops looking like slowness and starts looking like a decision He made and described.",
            "bn": "আরও দুটি আয়াত কাছেই আছে। ১০:১৯ আয়াত আমাদের আয়াতের সেই কর্মবাচ্য ক্রিয়াটিই বহন করে, তবে অন্য কাজে লাগায়। তোমার প্রতিপালকের পক্ষ থেকে আগেই একটি কথা ঠিক না হয়ে থাকলে তারা যে বিষয়ে মতভেদ করছে তার মীমাংসা করেই দেওয়া হত। তাহলে কুরআন দুবার বলছে, ফয়সালা তৈরি ছিল আর একটি কথা তাকে আটকে রেখেছে। এই আয়াতের শেষ বাক্যটিও একই অবস্থার জন্য কুরআনের বাঁধা ভাষা, যেমন ৭:১৮৬ আয়াতে। সব একসঙ্গে শুনলে দেরিটাকে আর ধীরগতি মনে হয় না, মনে হয় এটি তাঁর নেওয়া আর বলে দেওয়া সিদ্ধান্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarding the Angry Tongue",
          "bn": "রাগের মুখে জিভ সামলানো"
        },
        "p": [
          {
            "en": "The verse has a use in the minute after something breaks. A child ruins something expensive, a spouse says the sentence that cannot be taken back, a partner disappears with money that was not his, and the mouth reaches for a curse before the mind reaches for anything. Mujahid's example is that minute, and the hadith asks a discipline small to describe and hard to do: say nothing then about your child, your household, your property or your own life that you would be ruined by if it were granted.",
            "bn": "আয়াতটির কাজ আছে কিছু ভেঙে যাওয়ার পরের মিনিটটায়। সন্তান দামি কিছু নষ্ট করে ফেলল, স্বামী বা স্ত্রী এমন কথা বলল যা আর ফেরানো যায় না, শরিক অন্যের টাকা নিয়ে উধাও হল। মন কিছু ভাবার আগেই মুখ বদদু'আর দিকে হাত বাড়ায়। মুজাহিদের উদাহরণটা ওই মিনিটটার, আর হাদীস যে অভ্যাসটা চায় তা বলতে ছোট, করতে কঠিন। ওই মিনিটে সন্তান, পরিবার, সম্পদ কিংবা নিজের জীবন নিয়ে এমন কিছু মুখে আনবেন না, যা কবুল হয়ে গেলে আপনার সর্বনাশ হয়ে যায়।"
          },
          {
            "en": "The other half is a gratitude most people never practise. Nearly everyone can name a supplication that went unanswered, and many are quietly aggrieved about it still. Keep a second list beside that one: the prayers refused that should always have been refused. The job you begged for and did not get. The person you swore you could not live without. The ruin you called down on someone now closer to you than family. As-Sa'di's phrase covers the list: He gives respite, and He is not neglecting.",
            "bn": "বাকি অর্ধেকটা হল এমন এক কৃতজ্ঞতা, যার চর্চা বেশিরভাগ মানুষ করেই না। প্রায় সবাই এমন কোনো দু'আর নাম বলতে পারে যা কখনো কবুল হয়নি, আর অনেকেই সেই অভিমান চুপচাপ বয়ে বেড়ায়। ওই তালিকার পাশে আরেকটি তালিকা রাখুন, যেসব চাওয়া ফিরিয়ে দেওয়া হয়েছে আর ফিরিয়ে দেওয়াই উচিত ছিল। যে চাকরিটার জন্য কেঁদেছিলেন আর পাননি। যে মানুষটাকে ছাড়া বাঁচবেন না বলে কসম খেয়েছিলেন। যার সর্বনাশ চেয়েছিলেন, আজ যে আপনার আত্মীয়ের চেয়েও কাছের। সা'দীর একটি কথাই গোটা তালিকাটা ঢেকে দেয়, তিনি অবকাশ দেন, তিনি অবহেলা করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Against My Prayers",
          "bn": "নিজের দু'আর বিরুদ্ধে দু'আ"
        },
        "p": [
          {
            "en": "The verse can be turned into a supplication in its own vocabulary, named as that rather than offered as a Sunnah text. O Allah, You do not hasten evil for us as we hurry You for good. Do not answer me in what I ask against myself, my children and my property. Hold back from me the words I say in anger, and keep me in the respite You give until I have used it for what it was given for.",
            "bn": "আয়াতটিকে তার নিজের ভাষা দিয়েই দু'আ বানিয়ে নেওয়া যায়, তবে সেটিকে দু'আ বলেই চেনানো উচিত, সুন্নাহর কোনো পাঠ বলে নয়। হে আল্লাহ, আমরা যেভাবে আপনাকে কল্যাণের জন্য তাড়া দিই, আপনি সেভাবে আমাদের অকল্যাণে তাড়া করেন না। নিজের বিরুদ্ধে, সন্তানের বিরুদ্ধে আর সম্পদের বিরুদ্ধে যা চেয়ে ফেলি, তাতে আমাকে সাড়া দেবেন না। রাগের মুখে বলা কথাগুলো আমার কাছ থেকে ফিরিয়ে রাখুন। আপনার দেওয়া অবকাশেই আমাকে রাখুন, যতক্ষণ না যে কাজের জন্য তা দেওয়া হয়েছে সেই কাজে তা লাগাতে পারি।"
          },
          {
            "en": "A second move is nearer to hand. The previous verse has supplied the vocabulary of a call that is safe to have answered: glorification, peace, and praise to the Lord of the worlds last. Nothing on that list can harm the one who says it. So when something must come out of the mouth, one of those is available, and it costs the same breath as the curse. Our verse warns about a speed; 10:10 hands over the words.",
            "bn": "আরেকটা পথও আছে, আর তা আরও হাতের কাছে। আগের আয়াতই এমন এক ডাকের ভাষা দিয়ে রেখেছে, যা কবুল হলেও কোনো ভয় নেই। আল্লাহর পবিত্রতার ঘোষণা, সালাম, আর সবশেষে জগৎসমূহের প্রতিপালকের প্রশংসা। এই তালিকার কোনো কথাই বলনেওয়ালার ক্ষতি করতে পারে না। তাই মুখ দিয়ে কিছু একটা বেরোতেই হলে এগুলোর যেকোনোটি হাতের কাছেই আছে, আর বদদু'আর মতোই এক নিঃশ্বাসে তা বলা হয়ে যায়। আমাদের আয়াত একটা গতি নিয়ে সতর্ক করে, আর ১০:১০ আয়াত শব্দগুলো ধরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions For the Next Anger",
          "bn": "পরের রাগটার জন্য প্রশ্ন"
        },
        "p": [
          {
            "en": "What did I ask for the last time I was furious, and what would my life look like if it had been granted the moment I said it? Which refused supplication am I still resentful about, and can I claim to know it was good for me? When I talk about my children or my money in anger, am I willing for Allah to act on those words as I said them? Which sentence do I reach for first when something breaks, the curse or the praise?",
            "bn": "শেষবার যখন প্রচণ্ড রাগ হয়েছিল, আমি কী চেয়েছিলাম, আর যে মুহূর্তে বলেছিলাম সেই মুহূর্তেই তা পেয়ে গেলে আজ আমার জীবনটা কেমন দাঁড়াত? কোন দু'আ ফিরিয়ে দেওয়া হয়েছে বলে আমি এখনো অভিমান পুষে রাখি, আর সত্যিই কি দাবি করতে পারি যে ওটা আমার জন্য ভালো ছিল? সন্তান বা সম্পদ নিয়ে রাগের মাথায় যা বলি, আল্লাহ সেই কথামতো চললে আমি রাজি থাকতাম? আর কিছু ভেঙে গেলে আমার মুখে প্রথমে কোন বাক্যটা আসে, বদদু'আ না প্রশংসা?"
          },
          {
            "en": "The verse ends on people left wandering inside their own excess, describing what the text describes. It passes no sentence on any living community and hands nobody a verdict to carry out. So its question turns inward. If my term had been closed the first time I earned it, which part of my life would be missing, and who else would be missing it with me? Is there anyone I once cursed by name whom I now need to pray for by name?",
            "bn": "আয়াতটি শেষ হয় এমন মানুষদের কথায়, যাদের নিজেদের সীমালঙ্ঘনের ভেতরেই ঘুরতে ছেড়ে দেওয়া হয়েছে। এটি যা বর্ণনা করে, ততটুকুই বর্ণনা করে। জীবিত কোনো জনগোষ্ঠীর উপর এটি কোনো রায় দেয় না, আর কারও হাতে কার্যকর করার মতো কোনো ফয়সালাও তুলে দেয় না। তাই আয়াতের রেখে যাওয়া প্রশ্নটা নিজের দিকেই ফেরে। প্রথমবার শাস্তি পাওয়ার মতো কাজ করার দিনেই মেয়াদ চুকে গেলে আমার জীবনের কোন অংশটা থাকত না, আর আমার সঙ্গে আর কারা সেটা হারাত? আর এমন কেউ আছে কি, যার নাম ধরে একদিন বদদু'আ করেছিলাম, আজ নাম ধরে দু'আ করা দরকার?"
          }
        ]
      }
    ]
  },
  "10:15": {
    "sections": [
      {
        "h": {
          "en": "Bring Another or Change It",
          "bn": "আরেকটা আনো, নয়তো বদলে দাও"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and the verses just before this one set the scene. 10:12 has the man who calls on Allah while affliction touches him and walks on as if he never called once it lifts. 10:13 recalls generations destroyed when they wronged, though their messengers had come with clear proofs. 10:14 then makes this people successors in the land so that it may be seen how they act. Our verse is what they do when the verses are recited.",
            "bn": "সূরা ইউনুস মাক্কী, আর ঠিক আগের আয়াতগুলোই দৃশ্যটা সাজিয়ে দেয়। ১০:১২ আয়াতে সেই মানুষ, যে বিপদ ছোঁয়ার সময় আল্লাহকে ডাকে, আর বিপদ সরে গেলে এমনভাবে চলে যেন কখনো ডাকেইনি। ১০:১৩ আয়াত মনে করিয়ে দেয়, আগের বহু জাতিকে ধ্বংস করা হয়েছে যখন তারা যুলুম করেছিল, অথচ তাদের রসূলরা স্পষ্ট প্রমাণ নিয়েই এসেছিলেন। ১০:১৪ আয়াত এরপর এই লোকদের যমীনে উত্তরাধিকারী বানায়, যাতে দেখা যায় তারা কী করে। আর আমাদের আয়াত দেখায়, আয়াত পড়ে শোনালে তারা কী করে।"
          },
          {
            "en": "Al-Qurtubi glosses tutla plainly as tuqra', is recited, and takes bayyinat as a circumstantial accusative: clear, with nothing confused or difficult in them. So the demand is not raised against something obscure. It is raised against verses whose meaning had already landed. At-Tabari reads those who do not expect Our meeting as those who do not fear Our punishment, are not certain of the return to Us, and do not affirm the raising.",
            "bn": "কুরতুবী তুতলা শব্দের অর্থ করেন সহজভাবেই, তুক্বরা, অর্থাৎ পড়ে শোনানো হয়; আর বাইয়িনাত-কে নেন হাল হিসেবে, মানে স্পষ্ট, যাতে জট নেই, বোঝার অসুবিধাও নেই। তাই দাবিটা অস্পষ্ট কিছুর বিরুদ্ধে ওঠেনি। উঠেছে এমন আয়াতের বিরুদ্ধে, যার মানে তাদের ভেতরে পৌঁছে গিয়েছিল। তাবারী যারা আমাদের সাক্ষাতের আশা রাখে না বলতে বোঝেন, যারা আমাদের শাস্তিকে ভয় করে না, আমাদের কাছে ফেরার ব্যাপারে নিশ্চিত নয়, আর পুনরুত্থান মানে না।"
          },
          {
            "en": "Who asked? Qatada, quoted by both al-Qurtubi and al-Baghawi, says the mushriks of Makkah. Al-Baghawi adds a narrower report from Muqatil, that they were five men, and names them: Abdullah ibn Umayyah al-Makhzumi, al-Walid ibn al-Mughira, Mukriz ibn Hafs, Amr ibn Abdullah ibn Abi Qays al-Amiri, and al-As ibn Amir ibn Hashim. No chain is given for that list. The verse describes the men who said this and passes no verdict on anyone alive now.",
            "bn": "কে চেয়েছিল? কাতাদার কথা কুরতুবী আর বাগাভী দুজনেই আনেন, তিনি বলেন মাক্কার মুশরিকরা। বাগাভী মুকাতিলের আরেকটি সংকীর্ণ বর্ণনা যোগ করেন, তারা ছিল পাঁচজন, আর নামও বলেন, আবদুল্লাহ ইবনু উমাইয়া মাখযূমী, ওয়ালীদ ইবনুল মুগীরা, মুকরিয ইবনু হাফস, আমর ইবনু আবদুল্লাহ ইবনু আবী কায়স আমিরী আর আস ইবনু আমির ইবনু হাশিম। এই তালিকার কোনো সনদ দেওয়া হয়নি। আয়াত যারা এ কথা বলেছিল তাদেরই কথা বলছে, আজ বেঁচে থাকা কারো উপর কোনো রায় দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Thirty-Nine Words, One Root",
          "bn": "উনচল্লিশ শব্দ, একই ধাতু"
        },
        "p": [
          {
            "en": "The verse is thirty-nine words, leaving out the four pause marks printed in the line, and it splits cleanly: sixteen words carry the demand, twenty-three carry the ordered reply. The hinge between them is one root. Their imperative is baddil-hu, change it. The reply takes the very same verb into the first person, an ubaddila-hu, that I should change it, and sets ma yakunu li in front of it.",
            "bn": "আয়াতটির শব্দ উনচল্লিশ, লাইনে ছাপা চারটি ওয়াকফ চিহ্ন বাদ দিয়ে গুনলে; আর ভাগটাও পরিষ্কার, ষোলো শব্দে দাবি, তেইশ শব্দে হুকুম করা জবাব। দুইয়ের মাঝের কবজাটা একটাই ধাতু। তাদের হুকুম বাদ্দিলহু, এটা বদলে দাও। জবাব সেই একই ক্রিয়াকে উত্তম পুরুষে নিয়ে আসে, আন উবাদ্দিলাহু, অর্থাৎ আমি এটা বদলাব; আর তার আগে বসিয়ে দেয় মা ইয়াকূনু লী।"
          },
          {
            "en": "That phrase is the whole verse. It does not say I am unable. As-Sa'di reads it as it is not fitting for me and does not befit me. Then comes min tilqa'i nafsi, which at-Tabari renders min indi, from my own side. The restriction follows with in and illa: I follow nothing except what is revealed to me. And the last eight words give the reason, which is fear of the punishment of a tremendous Day.",
            "bn": "এই কথাটাই গোটা আয়াত। এখানে বলা হয়নি, আমি পারি না। সা'দী এর অর্থ করেন, এটা আমার জন্য উচিত নয়, আমাকে মানায়ও না। এরপর আসে মিন তিলক্বাই নাফসী, যার অর্থ তাবারী করেন মিন ইনদী, অর্থাৎ নিজের কাছ থেকে। এরপর ইন আর ইল্লা দিয়ে সীমা বাঁধা হয়, আমার কাছে যা ওয়াহী করা হয় তা ছাড়া আমি কিছুরই অনুসরণ করি না। আর শেষ আট শব্দে আসে কারণ, ভয়ানক এক দিনের শাস্তির ভয়।"
          },
          {
            "en": "At-Tabari glosses that Day with the words of 22:2: every nursing mother distracted from the child she nursed, every pregnant woman delivering what she carries, and the people seen as though drunk while they are not drunk. So the man asked to edit the Book answers by naming what he fears, and what he fears is not the men standing in front of him.",
            "bn": "সেই দিনটাকে তাবারী বোঝান ২২:২ আয়াতের কথায়, প্রতিটি দুধপানকারিণী তার দুধের শিশুকে ভুলে যাবে, প্রতিটি গর্ভবতী তার গর্ভের বোঝা নামিয়ে দেবে, আর মানুষকে দেখা যাবে মাতালের মতো, অথচ তারা মাতাল নয়। তাই কিতাব বদলে দেওয়ার দাবি যাঁকে করা হয়েছিল, তিনি জবাবে বলে দেন তিনি কাকে ভয় করেন; আর সেই ভয়ের নাম সামনে দাঁড়ানো লোকগুলো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What They Actually Asked",
          "bn": "তারা ঠিক কী চেয়েছিল"
        },
        "p": [
          {
            "en": "Al-Qurtubi separates the two halves of the demand with a distinction worth keeping: changing this Qur'an cannot stand together with it, while bringing another may stand together with it. So two exits were offered, a second book beside this one or this one amended. Then he lists three readings of what the amendment meant, and names the holder of each.",
            "bn": "কুরতুবী দাবির দুই অংশকে আলাদা করেন এমন এক পার্থক্য দিয়ে, যা মনে রাখার মতো। এই কুরআনকে বদলে দেওয়া মানে এটির সঙ্গে সেটির একসঙ্গে টিকে থাকা চলে না; আর আরেকটা আনা মানে এটির সঙ্গে সেটির একসঙ্গে থাকা চলতে পারে। তাই তাঁকে দুটি রাস্তা দেখানো হয়েছিল, এটির পাশে আরেকটি কিতাব, নয়তো এটিকেই কেটে-ছেঁটে নেওয়া। এরপর তিনি সেই কাটাছেঁড়ার তিনটি ব্যাখ্যা সাজান, আর প্রত্যেকটির বক্তার নামও বলেন।"
          },
          {
            "en": "The first he gives to at-Tabari: that a verse of threat be turned into a verse of promise and a promise into a threat, the forbidden made lawful and the lawful forbidden. That reading is indeed in at-Tabari's own text. The second he gives to Ibn Isa: drop from the Qur'an what faults their gods and calls their judgement foolish. The third he gives to az-Zajjaj: drop what it says about the resurrection and the raising of the dead.",
            "bn": "প্রথমটি তিনি তোলেন তাবারীর নামে, ভয়ের আয়াতকে প্রতিশ্রুতির আয়াত বানানো হোক আর প্রতিশ্রুতির আয়াতকে ভয়ের, হারামকে হালাল আর হালালকে হারাম। এই ব্যাখ্যা সত্যিই তাবারীর নিজের লেখাতেই আছে। দ্বিতীয়টি তিনি তোলেন ইবনু ঈসার নামে, কুরআন থেকে তাদের মা'বুদদের দোষ ধরা আর তাদের বুদ্ধিকে বোকা বলার কথাগুলো বাদ দেওয়া হোক। তৃতীয়টি যাজ্জাজের নামে, পুনরুত্থান আর মৃতদের উঠানোর কথাগুলো বাদ দেওয়া হোক।"
          },
          {
            "en": "Al-Baghawi's report from Muqatil is the most concrete of all. They told the Prophet ﷺ that if he wanted them to believe him, he should bring a Qur'an with no abandoning of al-Lat, al-Uzza and Manat in it and no faulting of them, and if Allah had not sent that down, then say it yourself, from yourself. Or change it: put a verse of mercy where a verse of punishment stands. Belief was offered in exchange for an edit.",
            "bn": "মুকাতিল থেকে বাগাভীর বর্ণনাটাই সবচেয়ে খোলাসা। তারা নবী ﷺ-কে বলেছিল, আপনি যদি চান আমরা আপনাকে মানি, তবে এমন কুরআন আনুন যাতে লাত, উযযা আর মানাতের ইবাদত ছাড়ার কথা নেই, তাদের দোষ ধরার কথাও নেই; আর আল্লাহ তা না নামালে আপনি নিজের কাছ থেকেই বলে দিন। কিংবা এটিকেই বদলে দিন, শাস্তির আয়াতের জায়গায় রহমতের আয়াত বসিয়ে দিন। ঈমানের বদলে চাওয়া হয়েছিল কিছু কাটাছেঁড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "A Messenger Under Orders",
          "bn": "হুকুমের অধীন এক রসূল"
        },
        "p": [
          {
            "en": "At-Tabari draws the conclusion in words the commentators share. Allah commanded His Prophet ﷺ to inform them that this is not his to do, that it belongs to One whose ruling is not turned back and whose decree is not reviewed, and that he himself is only a messenger conveying and a commanded man following. Ibn Kathir says it more briefly still: I am but a servant who receives commands, a Messenger conveying from Allah.",
            "bn": "তাবারী সিদ্ধান্তটা টানেন এমন ভাষায়, যা মুফাসসিরদের মধ্যে একরকম। আল্লাহ তাঁর নবী ﷺ-কে হুকুম দিলেন তাদের জানিয়ে দিতে যে কাজটা তাঁর হাতে নেই, তা এমন একজনের হাতে যাঁর হুকুম ফেরানো হয় না, যাঁর ফয়সালা নিয়ে পুনর্বিচার চলে না; আর তিনি নিজে শুধু পৌঁছে দেওয়া রসূল আর হুকুম মেনে চলা একজন। ইবনু কাসীর কথাটা আরও ছোট করে বলেন, আমি তো হুকুমের অধীন এক বান্দা, আল্লাহর পক্ষ থেকে পৌঁছে দেওয়া এক রসূল।"
          },
          {
            "en": "As-Sa'di presses on the manners of it. I am purely a messenger, he has the verse say, I have no say in the matter at all; I am a slave under orders. Then he turns it on the askers. This is the speech of the best of creation and his adab before his Lord's commands and revelation, so what of these men, who joined ignorance to wrongdoing and obstinacy, do they not fear the punishment of a tremendous Day?",
            "bn": "সা'দী জোর দেন এর আদবের দিকে। আয়াতের মুখে তিনি রাখেন, আমি নিছক একজন রসূল, এই বিষয়ে আমার কোনো কর্তৃত্বই নেই; আমি হুকুমের অধীন এক বান্দা। এরপর তিনি কথাটা প্রশ্নকারীদের দিকে ঘুরিয়ে দেন। এ তো সৃষ্টির সেরা মানুষের কথা, নিজের রবের হুকুম আর ওয়াহীর সামনে তাঁর আদব; তাহলে এই লোকদের কী হবে, যারা মূর্খতার সঙ্গে যুলুম আর গোঁয়ার্তুমি মিলিয়েছে, তারা কি ভয়ানক দিনের শাস্তিকে ভয় করে না?"
          }
        ]
      },
      {
        "h": {
          "en": "The Abrogation Argument",
          "bn": "নাসখ নিয়ে যে দলিল"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a use some scholars make of this verse in usul: that the Book cannot be abrogated by the Sunnah, since Allah told him to say that changing it from himself was not his to do. Al-Qurtubi does not accept the inference and calls it far-fetched. His first reason is what the verse was about. The mushriks were asking for a Qur'an like this one in its composition, which was not in the Messenger's power, and they did not ask him to change a ruling while keeping the wording.",
            "bn": "কুরতুবী জানান, কিছু আলিম উসূলে এই আয়াত থেকে একটি কথা বের করেন, সুন্নাহ দিয়ে কিতাবের নাসখ হয় না; কারণ আল্লাহ তাঁকে বলতে বলেছেন, নিজের কাছ থেকে এটি বদলানো তাঁর হাতে নেই। কুরতুবী এই দলিল মানেন না, বলেন এটি দূরের কথা। তাঁর প্রথম কারণ, আয়াতটি কী নিয়ে নেমেছে তা দেখা। মুশরিকরা চাইছিল এই কুরআনের মতো গঠনের আরেকটি কুরআন, যা রসূল ﷺ এর সাধ্যে ছিল না; আর তারা শব্দ রেখে শুধু হুকুম বদলাতে বলেনি।"
          },
          {
            "en": "His second reason goes to what the Prophet ﷺ says: when it is revelation it is not from himself at all but from Allah, so it is not the case of a man amending a text of his own accord. The disagreement is left standing with both sides named, and 2:106 is where the changing is spoken of as Allah's own act, no verse withdrawn or made forgotten except that He brings one better than it or like it.",
            "bn": "তাঁর দ্বিতীয় কারণ নবী ﷺ এর কথার স্বরূপ নিয়ে। সেই কথা যখন ওয়াহী, তখন তা তাঁর নিজের কাছ থেকে নয় বরং আল্লাহর কাছ থেকে; কাজেই এটি নিজের ইচ্ছায় কোনো মানুষের লেখা সংশোধনের মামলা নয়। মতভেদটা দুই পক্ষের নাম নিয়েই রেখে দেওয়া হল, আর ২:১০৬ আয়াতই সেই জায়গা যেখানে বদলানোটা আল্লাহর নিজের কাজ হিসেবে আসে, কোনো আয়াত তিনি রহিত করেন না বা ভুলিয়ে দেন না, যদি না তার চেয়ে উত্তম বা তার সমান কিছু আনেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Eight Words",
          "bn": "হুবহু আট শব্দ"
        },
        "p": [
          {
            "en": "The eight words that close this verse close two others. 6:15 and 39:13 are that sentence with qul in front of it, and the two are word for word the same: say, indeed I fear, if I should disobey my Lord, the punishment of a tremendous Day. 6:15 has its own entry in this module and is not retold here. What the repetition shows is that the answer to a demand for an edited revelation and the answer to pressure to worship otherwise are one answer.",
            "bn": "যে আট শব্দে এই আয়াত শেষ হয়, সেই আট শব্দেই শেষ হয় আরও দুটি আয়াত। ৬:১৫ আর ৩৯:১৩ সেই বাক্যই, সামনে শুধু কুল বসানো, আর দুটি আয়াত অক্ষরে অক্ষরে এক, বল, আমি আমার রবের নাফরমানি করলে ভয়ানক এক দিনের শাস্তির ভয় করি। ৬:১৫ আয়াতের আলোচনা এই মডিউলে আলাদা করেই আছে, তাই এখানে আর বলা হচ্ছে না। বারবার আসা থেকে যা বোঝা যায়, কাটাছেঁড়া করা ওয়াহীর দাবির জবাব আর অন্য কিছুর ইবাদত করার চাপের জবাব একটাই।"
          },
          {
            "en": "Two further verses guard the same door from the other side. 17:73 says they were about to tempt him away from what was revealed to him so that he would invent something else about Allah, and 17:74 says that had He not made him firm he would almost have inclined to them a little. 69:44-46 state what an invention would have cost: We would have seized him by the right hand, then cut from him the aorta. The editing was neither permitted nor survivable.",
            "bn": "আরও দুটি আয়াত একই দরজা অন্য দিক থেকে পাহারা দেয়। ১৭:৭৩ আয়াত বলছে, তারা তো চেয়েছিল তাঁকে ওয়াহীর পথ থেকে সরিয়ে আনতে, যাতে তিনি আল্লাহর নামে অন্য কিছু বানিয়ে বলেন; আর ১৭:৭৪ আয়াত বলছে, তিনি তাঁকে অবিচল না রাখলে তিনি অল্প হলেও তাদের দিকে ঝুঁকে পড়তেন। ৬৯:৪৪-৪৬ আয়াত বলে দেয় বানিয়ে বলার দাম কী হত, আমরা তাঁকে ডান হাত ধরে ধরতাম, তারপর তাঁর ঘাড়ের ধমনি কেটে দিতাম। কাটাছেঁড়ার অনুমতিও ছিল না, সেটি করে বেঁচে থাকার উপায়ও ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Heraclius Was Told",
          "bn": "হিরাক্লিয়াসকে যা বলা হয়েছিল"
        },
        "p": [
          {
            "en": "None of the commentaries fetched attaches a prophetic narration to this verse itself. Ibn Kathir brings one under the verse that follows, where the argument becomes: I stayed among you a lifetime before this, will you not reason? What he brings is Heraclius questioning Abu Sufyan, which stands in Sahih al-Bukhari 7, narrated by Abdullah ibn Abbas (RA) from Abu Sufyan himself.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এই আয়াতের সঙ্গে নবীজি ﷺ এর কোনো হাদীস জোড়ে না। ইবনু কাসীর একটি হাদীস আনেন পরের আয়াতের নিচে, যেখানে দলিলটা দাঁড়ায়, এর আগে তো আমি তোমাদের মধ্যেই জীবন কাটিয়েছি, তবু বুঝবে না? তিনি যা আনেন তা হিরাক্লিয়াসের আবু সুফিয়ানকে করা জিজ্ঞাসাবাদ, আর সেটি আছে সহীহ বুখারীর ৭ নম্বর হাদীসে, আবদুল্লাহ ইবনু আব্বাস (রাঃ) আবু সুফিয়ানের মুখ থেকেই যা বর্ণনা করেছেন।"
          },
          {
            "en": "One exchange in it is the one Ibn Kathir wants. Heraclius asked whether they had ever accused him of lying before he said what he said, and Abu Sufyan answered no. Heraclius then said that he wondered how a man who does not lie about people could lie about Allah. Abu Sufyan adds, in the same hadith, that had he not feared his companions would report him a liar, he would not have told the truth about the Prophet ﷺ. The testimony is the enemy's own.",
            "bn": "এর ভেতরের একটি কথা-চালাচালিই ইবনু কাসীরের দরকার। হিরাক্লিয়াস জিজ্ঞেস করেন, এই দাবি করার আগে তোমরা কখনো তাঁকে মিথ্যা বলার দোষ দিয়েছ কি; আবু সুফিয়ান বলেন, না। তখন হিরাক্লিয়াস বলেন, যে মানুষ মানুষের নামে মিথ্যা বলে না, সে আল্লাহর নামে মিথ্যা বলবে কী করে, তা তিনি ভেবে পান না। একই হাদীসে আবু সুফিয়ান নিজেই বলছেন, সঙ্গীরা তাঁকে মিথ্যাবাদী বলে ফাঁস করে দেবে এই ভয় না থাকলে তিনি নবী ﷺ এর ব্যাপারে সত্যটা বলতেন না। সাক্ষ্যটা শত্রুর নিজের মুখের।"
          }
        ]
      },
      {
        "h": {
          "en": "Editing by Skipping Verses",
          "bn": "আয়াত এড়িয়ে যাওয়াও বদলানো"
        },
        "p": [
          {
            "en": "Nobody today asks for a different Qur'an in those words. The editing happens by selection instead. A verse about wealth is read quickly, a verse about the tongue is heard as advice for other people, and a ruling that would cost something stays an open question for years. Al-Qurtubi's gloss on the fear closes that exit too: I fear, if I disobeyed my Lord, means if I differed by changing and altering it, or by leaving off acting on it.",
            "bn": "আজ কেউ ওই ভাষায় অন্য কুরআন চায় না। কাটাছেঁড়াটা হয় বেছে নেওয়ার মধ্য দিয়ে। সম্পদ নিয়ে আসা আয়াত দ্রুত পড়ে ফেলা হয়, জিভ নিয়ে আসা আয়াত শোনা হয় অন্যদের জন্য উপদেশ হিসেবে, আর যে হুকুম মানতে গেলে কিছু খরচ হয়, সেটি বছরের পর বছর আলোচনার বিষয় হয়ে পড়ে থাকে। ভয়ের ব্যাখ্যায় কুরতুবী এই রাস্তাটাও বন্ধ করে দেন, আমি আমার রবের নাফরমানি করলে ভয় করি, মানে বদলে-পাল্টে দিয়ে বিরোধিতা করলে, কিংবা সেটির উপর আমল ছেড়ে দিয়ে।"
          },
          {
            "en": "So the second half of that gloss is the one to carry away. Changing the text is available to nobody; abandoning the practice is available to everybody, and the verse puts both under one word, disobedience. The man to whom the revelation came said in public that he had no right to soften a single line of it. A reader who edits by skipping is claiming a right the Messenger ﷺ said was not his.",
            "bn": "তাই এই ব্যাখ্যার দ্বিতীয় অংশটাই সঙ্গে নেওয়ার মতো। লেখাটা বদলানোর সুযোগ কারো নেই; আমল ছেড়ে দেওয়ার সুযোগ সবারই আছে, আর আয়াত দুটোকেই এক শব্দের নিচে রাখে, নাফরমানি। যাঁর কাছে ওয়াহী এসেছিল, তিনি সবার সামনে বলেছেন, এর একটি লাইন নরম করার অধিকারও তাঁর নেই। আর যে পাঠক এড়িয়ে গিয়ে কাটাছেঁড়া করে, সে এমন অধিকার দাবি করে, যা রসূল ﷺ বলেছেন তাঁরই ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions From the Demand",
          "bn": "এই দাবির ভেতর থেকে প্রশ্ন"
        },
        "p": [
          {
            "en": "Four to sit with. Which verses do I pass over quickly, and what is it in them that I am getting away from? When the Qur'an says something I do not like, do I look first for a reading that softens it? If the power to remove one command from the Book had been handed to me, is there one I would have reached for? And what have I heard from it plainly and kept treating as an open question?",
            "bn": "চারটি প্রশ্ন নিয়ে বসুন। কোন আয়াতগুলো আমি দ্রুত পার করে দিই, আর সেগুলোর ভেতরে আসলে কী থেকে আমি সরে থাকি? কুরআন এমন কিছু বললে যা আমার পছন্দ নয়, আমি কি আগে এমন ব্যাখ্যা খুঁজি যা কথাটা নরম করে দেয়? কিতাব থেকে কোনো একটি হুকুম তুলে দেওয়ার ক্ষমতা আমার হাতে দেওয়া হলে, এমন কোনো হুকুম আছে যেখানে আমি হাত বাড়াতাম? আর কোন কথাটা আমি একেবারে স্পষ্ট শুনেছি, তবু আজও আলোচনার বিষয় বানিয়ে রেখেছি?"
          },
          {
            "en": "One more, from as-Sa'di's turn in the argument. The best of creation was made to say out loud that changing it was not his to do. If that was his standing before the revelation, what is mine? Ask that the next time a verse asks for something expensive, and answer it before going to look for an interpretation.",
            "bn": "আরও একটি প্রশ্ন, সা'দী যেভাবে কথাটা ঘুরিয়ে দিয়েছেন সেখান থেকে। সৃষ্টির সেরা মানুষকে মুখ ফুটে বলতে বলা হল, এটি বদলানো তাঁর হাতে নেই। ওয়াহীর সামনে তাঁর অবস্থান যদি এই হয়, আমার অবস্থান কী? পরেরবার কোনো আয়াত যখন দামি কিছু চেয়ে বসবে, তখন এই প্রশ্নটা করুন, আর ব্যাখ্যা খুঁজতে যাওয়ার আগেই জবাব দিন।"
          }
        ]
      }
    ]
  },
  "10:24": {
    "sections": [
      {
        "h": {
          "en": "The Sentence It Explains",
          "bn": "যে বাক্যটির ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Surah Yunus has just put its readers on a ship. In 10:22 a good wind turns into a storm, the waves close in from every side, and the passengers call on Allah with sincere religion, promising that they will be among the thankful. 10:23 records what happens after the rescue: at once they transgress on the earth, and they are told that their wrongdoing is only against themselves, being the enjoyment of worldly life. That closing phrase is what this verse takes up and draws.",
            "bn": "সূরা ইউনুস কিছু আগেই তার পাঠককে একটি জাহাজে তুলে দিয়েছে। 10:22-এ অনুকূল বাতাস ঝড়ে বদলে যায়, চারদিক থেকে ঢেউ ঘিরে ধরে, আর আরোহীরা নিষ্ঠার সঙ্গে আল্লাহকে ডাকে এবং প্রতিশ্রুতি দেয় যে তারা কৃতজ্ঞদের অন্তর্ভুক্ত হবে। 10:23 বলে উদ্ধারের পর কী ঘটে: সঙ্গে সঙ্গেই তারা যমীনে সীমালঙ্ঘন শুরু করে, আর তাদের বলা হয় যে তাদের এই বাড়াবাড়ি কেবল নিজেদেরই বিরুদ্ধে, এ তো দুনিয়ার জীবনের সামান্য ভোগমাত্র। শেষের সেই কথাটিকেই এই আয়াত তুলে নিয়ে ছবিতে আঁকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Water, and Who Eats",
          "bn": "পানি, আর কে খায়"
        },
        "p": [
          {
            "en": "The comparison begins where the weight of it lies: not with a thing but with a process. The example of worldly life is like water We sent down from the sky, and the plants of the earth mingled with it — fakhtalata, an intermingling, growth pressing into growth until the ground is covered. Then a detail that is easy to read past: from it eat both the people and the livestock. The world genuinely feeds. The verse does not call it an illusion, and it is careful to say who is being fed.",
            "bn": "উপমাটি শুরু হয় সেখান থেকেই যেখানে এর মূল ভার: কোনো বস্তু নয়, বরং একটি প্রক্রিয়া। দুনিয়ার জীবনের দৃষ্টান্ত সেই পানির মতো যা আমি আকাশ থেকে নামিয়েছি, আর তার সংস্পর্শে যমীনের উদ্ভিদ মিশে গেছে — ফাখতালাতা, অর্থাৎ পরস্পরে জড়িয়ে যাওয়া, গাছের ভেতর গাছ ঠেলে ওঠা, যতক্ষণ না মাটি ঢেকে যায়। এরপর এমন একটি বিবরণ যা সহজেই চোখ এড়িয়ে যায়: তা থেকে খায় মানুষও, গবাদিপশুও। দুনিয়া সত্যিই খাওয়ায়। আয়াত একে মায়া বলে না, বরং যত্ন করে বলে দেয় কারা এতে প্রতিপালিত হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Turn at Hatta Idha",
          "bn": "'হাত্তা ইযা'-তে মোড়"
        },
        "p": [
          {
            "en": "The pivot is the word hatta, until. Until the earth has taken on its zukhruf — the word for gold-work and gilding, and the name of the forty-third surah — and has adorned itself, and its people supposed that they had power over it. Every clause in that run is a peak, not a decline. The commentators fix on the verb zanna: supposition, not knowledge. And qadirun is a participle of capability. What the owners get wrong is not that the field is beautiful but that it is theirs to command.",
            "bn": "মোড় ঘোরে 'হাত্তা' শব্দে — অর্থাৎ 'যতক্ষণ না', 'অবশেষে যখন'। যতক্ষণ না যমীন তার যুখরুফ ধারণ করে — শব্দটির অর্থ স্বর্ণালংকার বা সোনালি কারুকাজ, আর এ নামেই কুরআনের তেতাল্লিশতম সূরা — এবং নিজেকে শোভিত করে, আর তার মালিকেরা ভাবতে থাকে যে ওগুলো তাদের ক্ষমতার আওতায়। এই ধারাবাহিকতার প্রতিটি বাক্যাংশ উন্নতির চূড়া, পতনের নয়। মুফাসসিরগণ 'যান্না' ক্রিয়াপদটিতে থামেন: এটি ধারণা, জ্ঞান নয়। আর 'কাদিরূন' হলো সামর্থ্যের কর্তৃবাচক রূপ। মালিকদের ভুল এই নয় যে ক্ষেত সুন্দর, বরং এই যে ক্ষেত তাদের হুকুমের অধীন।"
          }
        ]
      },
      {
        "h": {
          "en": "By Night or by Day",
          "bn": "রাতে কিংবা দিনে"
        },
        "p": [
          {
            "en": "Then, in one clause, everything: there comes to it Our command by night or by day, and We make it a mown field, as if it had not flourished yesterday. Laylan aw naharan leaves no protected hour. Hasid is the cut crop, the harvest. And the closing four Arabic words say yesterday, not an age ago — the whole prosperous history of that field is denied in a breath, using a verb whose root carries the sense of dwelling in plenty.",
            "bn": "এরপর একটিমাত্র বাক্যাংশে সবকিছু: রাতে কিংবা দিনে তার ওপর আমার নির্দেশ এসে পড়ে, আর আমি তাকে কেটে ফেলা ফসলের মতো করে দিই, যেন গতকাল সেখানে কিছুই ছিল না। 'লাইলান আও নাহারান' কোনো নিরাপদ প্রহর অবশিষ্ট রাখে না। 'হাসীদ' মানে কাটা ফসল। আর শেষের চারটি আরবি শব্দ বলে 'গতকাল' — বহু যুগ আগে নয়; ওই ক্ষেতের গোটা সমৃদ্ধ ইতিহাস এক নিঃশ্বাসে অস্বীকার করা হয়, আর যে ক্রিয়াপদে তা বলা হয় তার মূলে আছে প্রাচুর্যের মধ্যে বসবাসের অর্থ।"
          },
          {
            "en": "Set the Quran's tellings of this parable side by side and the endings differ. 18:45 ends with dry remnants scattered by the winds. 57:20 ends with a crop that yellows and crumbles to chaff, a decline anyone can watch happening. This one ends with a command arriving overnight on a field still at its best. The picture is varied because loss is varied; what does not vary is that the green stage was never the whole of the story.",
            "bn": "কুরআনে এই উপমার বিভিন্ন বর্ণনা পাশাপাশি রাখলে দেখা যায়, শেষগুলো আলাদা। 18:45 শেষ হয় শুকনো খড়কুটোয়, যা বাতাস উড়িয়ে নেয়। 57:20 শেষ হয় হলুদ হয়ে যাওয়া আর গুঁড়ো হয়ে ভেঙে পড়া ফসলে — এমন ক্ষয় যা যে কেউ চোখের সামনে ঘটতে দেখতে পারে। আর এখানে শেষ হয় সবচেয়ে ভালো অবস্থায় থাকা ক্ষেতের ওপর রাতারাতি নেমে আসা এক নির্দেশে। ছবিটি বদলায়, কারণ ক্ষতির ধরনও বদলায়; যা বদলায় না তা হলো — সবুজ পর্যায়টিই কখনো পুরো গল্প ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "For a People Who Think",
          "bn": "চিন্তাশীল সম্প্রদায়ের জন্য"
        },
        "p": [
          {
            "en": "The verse closes by naming its audience: thus do We lay out the signs in detail for a people who reflect, yatafakkarun. Tafakkur is not admiration; it is working something out, taking what stands in front of you and drawing the conclusion from it. And the very next verse refuses to leave the reader standing in a ruined field. 10:25 says that Allah invites to Dar as-Salam, the Home of Peace, and guides whom He wills to a straight path.",
            "bn": "আয়াত শেষ হয় তার শ্রোতার পরিচয় দিয়ে: এভাবেই আমি নিদর্শনগুলো বিশদভাবে বর্ণনা করি সেই সম্প্রদায়ের জন্য যারা চিন্তা করে — 'ইয়াতাফাক্কারূন'। তাফাক্কুর মানে মুগ্ধ হয়ে তাকিয়ে থাকা নয়; এর অর্থ হিসাব মিলিয়ে নেওয়া — সামনে যা আছে তা থেকে সিদ্ধান্তে পৌঁছানো। আর ঠিক পরের আয়াতটি পাঠককে ধ্বংস হওয়া ক্ষেতের মধ্যে ফেলে রাখতে রাজি নয়। 10:25 বলে, আল্লাহ দারুস সালাম তথা শান্তির নিবাসের দিকে আহ্বান করেন, আর যাকে চান সরল পথের দিকে পরিচালিত করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Owning a Field That Turns",
          "bn": "যে ক্ষেত বদলে যায়, তার মালিকানা"
        },
        "p": [
          {
            "en": "The verse does not ask anyone to stop planting or to enjoy less. What it corrects is one sentence inside the owner's head: that he is qadir, in command, over what he holds. The practical form of that correction is to name the real Owner while the field is still green — at the promotion, at the new house, at the clear medical result — and not only after a loss. Gratitude spoken at the peak is precisely the sentence the people in this parable never said.",
            "bn": "আয়াত কাউকে চাষ বন্ধ করতে বা কম উপভোগ করতে বলে না। এটি সংশোধন করে মালিকের মাথার ভেতরের একটি বাক্য: সে ভাবে, তার হাতে যা আছে তার ওপর সে-ই 'কাদির', অর্থাৎ কর্তৃত্বশীল। এই সংশোধনের ব্যবহারিক রূপ হলো, ক্ষেত সবুজ থাকতেই প্রকৃত মালিকের নাম উচ্চারণ করা — পদোন্নতির সময়, নতুন ঘরের সময়, পরীক্ষার ভালো ফল আসার সময় — কেবল ক্ষতির পরে নয়। চূড়ায় দাঁড়িয়ে বলা কৃতজ্ঞতার কথাটিই এই উপমার মানুষগুলো কখনো বলেনি।"
          },
          {
            "en": "The second practice comes from 10:25. If a harvest can be taken overnight, then whatever has been moved out of the field and toward the Home of Peace is the only part of the crop that is secure. Wealth given away, a night prayer, a debt forgiven, a child taught — these are the transfers. The believer is not asked to look at the world with suspicion. He is asked to look at it accurately, and the verse's own closing word for that is thinking.",
            "bn": "দ্বিতীয় অনুশীলনটি আসে 10:25 থেকে। যদি ফসল রাতারাতি তুলে নেওয়া যায়, তবে ক্ষেত থেকে সরিয়ে শান্তির নিবাসের দিকে যা পাঠানো হয়েছে, কেবল সেটুকুই নিরাপদ। দান করা সম্পদ, রাতের নামায, মাফ করে দেওয়া ঋণ, শেখানো একটি সন্তান — এগুলোই সেই স্থানান্তর। মুমিনকে দুনিয়ার দিকে সন্দেহের চোখে তাকাতে বলা হয়নি। তাকে বলা হয়েছে সঠিকভাবে তাকাতে, আর আয়াত নিজেই সেই কাজটির নাম দিয়েছে — চিন্তা করা।"
          }
        ]
      }
    ]
  },
  "10:28": {
    "sections": [
      {
        "h": {
          "en": "When the Intercessors Answer",
          "bn": "সুপারিশকারীরা যখন জবাব দেয়"
        },
        "p": [
          {
            "en": "Surah Yunus is Makkan, and this stretch of it argues with people who worshipped what could neither harm nor benefit them. 10:18 records their claim in their own words: these are our intercessors with Allah. Then 10:25 names the invitation to the Home of Peace, 10:26 gives the doers of good the best reward and something added to it, and 10:27 covers the faces of the others with pieces of the night. Our verse opens the Day itself and calls the claimed intercessors forward to speak for themselves.",
            "bn": "সূরা ইউনুস মাক্কী, আর এর এই অংশটা কথা বলছে সেই লোকদের সঙ্গে যারা এমন কিছুর ইবাদত করত যা তাদের ক্ষতিও করতে পারে না, উপকারও পারে না। ১০:১৮ আয়াতে তাদের নিজের মুখের দাবিটা ধরা আছে, এরাই আল্লাহর কাছে আমাদের সুপারিশকারী। এরপর ১০:২৫ আয়াতে শান্তির নীড়ের দিকে ডাক, ১০:২৬ আয়াতে নেককারদের জন্য উত্তম প্রতিদান আর তার সঙ্গে বাড়তি কিছু, আর ১০:২৭ আয়াতে অন্যদের চেহারা ঢেকে দেওয়া হয় রাতের টুকরো দিয়ে। আমাদের আয়াত সেই দিনটাই খুলে দেয়, আর দাবি করা সুপারিশকারীদের সামনে ডেকে এনে নিজেদের কথা বলতে বলে।"
          },
          {
            "en": "What follows finishes the scene. 10:29 gives the partners' oath that Allah is witness enough between us and you, and that we were unaware of your worship; Ma'arif al-Qur'an fills in the excuse behind it, that they had no senses, no movement and no intelligence to understand such matters. 10:30 then closes the passage: every soul is tested by what it sent ahead, they are returned to Allah their true master, and what they used to invent is lost to them. With 10:31 the cross-examination begins.",
            "bn": "এরপরের আয়াতগুলো দৃশ্যটা শেষ করে। ১০:২৯ আয়াতে শরীকরা কসম খায়, আমাদের আর তোমাদের মাঝে আল্লাহই সাক্ষী হিসেবে যথেষ্ট, তোমাদের ইবাদতের খবর আমরা রাখতাম না। মাআরিফুল কুরআন এর পেছনের অজুহাতটা খুলে বলে, তাদের অনুভূতি ছিল না, চলার শক্তি ছিল না, এসব বোঝার বুদ্ধিও ছিল না। ১০:৩০ আয়াত তারপর পর্বটা বন্ধ করে দেয়, প্রত্যেক প্রাণ তার আগে পাঠানো আমল যাচাই করে দেখবে, তাদের সত্যিকার অভিভাবক আল্লাহর কাছে তাদের ফিরিয়ে আনা হবে, আর তারা যা বানিয়ে নিয়েছিল সব হারিয়ে যাবে। ১০:৩১ আয়াত থেকে শুরু হয় জেরা।"
          },
          {
            "en": "Which Day is it? Ibn Kathir reads the gathering as wide as it will go: all the people of the earth, of men and jinn, the obedient and the rebellious, and he brings 18:47 for it, We shall gather them and leave none of them behind. At-Tabari records a dissent. Al-A'mash heard people report from Mujahid that al-hashr here means death. At-Tabari refuses it and says why: this is a report of what is said to the idolaters and what they answer, and that exchange does not happen in the grave. No established occasion of revelation is reported in the commentaries fetched for this verse.",
            "bn": "কোন দিনের কথা? ইবনু কাসীর একত্র করাটাকে যতদূর নেওয়া যায় নিয়েছেন, যমীনের সব মানুষ আর জিন, নেককার আর নাফরমান সবাই। তিনি এর সঙ্গে ১৮:৪৭ আয়াত আনেন, আমি তাদের একত্র করব, কাউকেও বাদ দেব না। তাবারী এখানে একটা ভিন্নমত রেখে দিয়েছেন। আ'মাশ লোকদের কাছ থেকে শুনেছেন, মুজাহিদ বলতেন এখানে হাশর মানে মৃত্যু। তাবারী তা মানেন না, আর কারণটাও বলেন, এটি তো সেই খবর যা মুশরিকদের বলা হবে আর তারা যা জবাব দেবে, আর কবরের ভেতরে এই কথা চালাচালি হয় না। এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তাতে নাযিলের কোনো প্রতিষ্ঠিত ঘটনা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Stay Where You Are",
          "bn": "নিজ জায়গায় দাঁড়িয়ে থাক"
        },
        "p": [
          {
            "en": "The verse runs to eighteen Arabic words, counting the text and leaving out the two pause marks printed in the line. Makanakum is the odd word in it: a noun of place standing alone as a command. At-Tabari fills in the missing verb, imkuthu makanakum, stay in your place, halt where you stand. Al-Qurtubi supplies ilzamu wa-thbutu, keep to it and hold still, and calls the sentence a threat. Al-Jalalayn says makanakum is accusative because an understood ilzamu governs it. Al-Muyassar adds the purpose the Arabic leaves out, until you see what is done with you.",
            "bn": "আয়াতটির আরবি শব্দ আঠারোটি, লাইনে ছাপা দুটি ওয়াকফ চিহ্ন বাদ দিয়ে গুনলে। এর ভেতরে খাপছাড়া শব্দটি মাকানাকুম, জায়গার শব্দ একা দাঁড়িয়ে আছে হুকুমের জায়গায়। তাবারী বাদ পড়া ক্রিয়াটা বসিয়ে দেন, উমকুসূ মাকানাকুম, নিজের জায়গায় থাক, যেখানে আছ সেখানেই থাম। কুরতুবী বসান ইলযামূ ওয়াসবুতূ, জায়গা আঁকড়ে থাক আর স্থির হয়ে থাক, আর বলেন এটি হুমকি। জালালাইন বলেন, মাকানাকুম নাসব অবস্থায় আছে কারণ ভেতরে লুকানো ইলযামূ তাকে চালাচ্ছে। মুয়াসসার আরবিতে না-বলা উদ্দেশ্যটা যোগ করেন, যতক্ষণ না দেখ তোমাদের সঙ্গে কী করা হয়।"
          },
          {
            "en": "Antum, the detached pronoun you, adds nothing to the sense. Al-Jalalayn explains why it is there: the imperative that has been left out already carries its subject inside it, and antum strengthens that hidden pronoun so that wa shuraka'ukum, and your partners, can be joined onto it. The partners are summoned by the same command as their worshippers. The denial that ends the verse is four words, ma kuntum iyyana ta'budun. Iyyana, the object us, stands in front of its verb, which al-Jalalayn puts down to the rhyme that closes the verses of this surah.",
            "bn": "আনতুম, আলাদা সর্বনাম তোমরা, অর্থে কিছু যোগ করে না। জালালাইন কারণটা বলেন, যে হুকুমের ক্রিয়াটা বাদ পড়েছে তার কর্তা তার ভেতরেই আছে, আর আনতুম সেই লুকানো কর্তাকে শক্ত করে, যাতে ওয়াশুরাকাউকুম অর্থাৎ তোমাদের শরীকরা তার সঙ্গে জোড়া দেওয়া যায়। ফলে শরীকদের ডাকা হচ্ছে ঠিক সেই হুকুমেই, যে হুকুমে তাদের পূজারিদের ডাকা হচ্ছে। আয়াত যে অস্বীকারে শেষ হয়, তা চারটি শব্দ, মা কুনতুম ইয়্যানা তা'বুদূন। ইয়্যানা অর্থাৎ আমাদের, কর্মটি নিজের ক্রিয়ার আগে বসেছে; জালালাইন এর কারণ বলেন এই সূরার আয়াতশেষের ছন্দ।"
          },
          {
            "en": "Fa-zayyalna is the second form of the root z-y-l, to part. At-Tabari derives it from ziltu ash-shay'a aziluhu, I parted a thing and marked it off from what lay beside it, then notices the doubling: He said fa-zayyalna, wanting the act multiplied and repeated, and He did not say fa-zilna baynahum. Both at-Tabari and al-Qurtubi also report a second recitation, fa-zayalna, with an alif where the doubling is. At-Tabari gives it anonymously, as mentioned of some of them, and compares the same alternation at 31:18; al-Qurtubi names al-Farra' as reporting it. Neither text traces it to a named reciter of the seven.",
            "bn": "ফাযায়্যালনা শব্দটি য-ইয়া-ল ধাতুর দ্বিতীয় বাবের, অর্থ আলাদা করা, সরিয়ে দেওয়া। তাবারী এটি বের করেন যিলতুশ শাইআ আযীলুহু থেকে, আমি জিনিসটাকে আলাদা করলাম আর পাশের জিনিস থেকে চিনিয়ে দিলাম। এরপর তিনি দ্বিত্ব অক্ষরটার দিকে নজর দেন, আল্লাহ বলেছেন ফাযায়্যালনা, কাজটা বহুবার ও বারবার হওয়া বোঝাতে, ফাযিলনা বাইনাহুম বলেননি। তাবারী আর কুরতুবী দুজনেই আরেকটি পাঠও উল্লেখ করেন, শাদ্দার জায়গায় আলিফ দিয়ে ফাযায়ালনা। তাবারী নাম না নিয়ে বলেন, কেউ কেউ এভাবে পড়তেন, আর ৩১:১৮ আয়াতে একই রকম বদলের কথা টানেন। ফাররার নাম নেন কুরতুবী। কোনো লেখাই এটি সাত ক্বারীর কারো নামে তোলেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Parting Cuts",
          "bn": "এই বিচ্ছেদ কী ছিঁড়ে দেয়"
        },
        "p": [
          {
            "en": "At-Tabari adds the grammar that makes the two recitations legible. Arabic will sometimes put an alif in place of the doubling when the act belongs to a single agent, he says, and when it belongs to two parties acting on each other it scarcely uses anything else. He draws no conclusion from that, but it is why the doubled reading keeps a single Agent parting them over and over, while the alif reading sounds like a mutual parting. Al-Qurtubi settles the pattern by the verbal noun: you say tazyilan, so the verb is fa''altu; fay'altu would have given zilah.",
            "bn": "তাবারী এমন ব্যাকরণ যোগ করেন যা দুটি পাঠকেই পড়ার মতো করে তোলে। তিনি বলেন, কাজটা যখন একজন কর্তার, আরবি তখন কখনো শাদ্দার বদলে আলিফ বসায়; আর কাজটা যখন দুই পক্ষের, একে অন্যের উপর, তখন আলিফ ছাড়া প্রায় কিছুই ব্যবহার করে না। তিনি নিজে এ থেকে কোনো সিদ্ধান্তে যান না, তবু এ কারণেই শাদ্দাওয়ালা পাঠে একজন কর্তা বারবার তাদের আলাদা করেন, আর আলিফওয়ালা পাঠে শোনায় যেন দুই পক্ষ পরস্পর থেকে সরে যাচ্ছে। কুরতুবী বাবটা ঠিক করেন মাসদার দিয়ে, বলা হয় তাযয়ীলান, কাজেই ক্রিয়াটি ফা'আলতু বাবের; ফাইআলতু হলে মাসদার হত যীলাহ।"
          },
          {
            "en": "Al-Qurtubi's sense of the verse is a severing: We parted them and cut off what had run between them in the world, the going back and forth that had tied them together. Al-Baghawi glosses the verb as distinguished and divided, and dates the moment exactly, when every object of worship besides Allah disowns the one who worshipped it. As-Sa'di makes the distance bodily and of the heart at once. Severe enmity comes up between them, he says, after the worshippers had given these partners their purest love in the world, and that allegiance turns over into hatred.",
            "bn": "কুরতুবীর কাছে আয়াতের মানে সম্পর্ক ছিঁড়ে ফেলা, আমরা তাদের আলাদা করে দিলাম আর দুনিয়ায় তাদের মধ্যে যে যাওয়া-আসা চলত, যা তাদের বেঁধে রেখেছিল, তা কেটে দিলাম। বাগাবী ক্রিয়াটির অর্থ করেন চিনিয়ে দেওয়া আর ভাগ করে দেওয়া, আর সময়টাও ঠিক করে বলেন, আল্লাহ ছাড়া প্রত্যেক মা'বুদ যখন নিজের পূজারিকে অস্বীকার করবে সেই মুহূর্ত। সা'দী দূরত্বটাকে একসঙ্গে শরীরের আর দিলের দূরত্ব বানান। তিনি বলেন, তাদের মধ্যে কড়া শত্রুতা দাঁড়িয়ে যাবে, অথচ দুনিয়ায় পূজারিরা এই শরীকদের খাঁটি ভালোবাসাটাই দিয়েছিল; সেই টান উল্টে গিয়ে ঘৃণা হয়ে যাবে।"
          },
          {
            "en": "Ibn Kathir and al-Jalalayn draw the line somewhere else. For them the idolaters are held at a marked place and set apart from where the believers stand, and Ibn Kathir brings 36:59, 30:14 and 30:43 for it, adding that it happens when the Lord comes for the decisive judgement. Maududi, in Tafhim al-Qur'an, rejects the severing reading outright as opposed to Arabic usage: the word means We will distinguish them from each other, the idolaters and their deities set face to face until each knows the truth about the other. The two readings stand unreconciled.",
            "bn": "ইবনু কাসীর আর জালালাইন দাগটা অন্য জায়গায় টানেন। তাঁদের কাছে মুশরিকদের নির্দিষ্ট এক জায়গায় আটকে রাখা হবে, মু'মিনরা যেখানে দাঁড়াবে তার থেকে আলাদা করে। ইবনু কাসীর এর সঙ্গে ৩৬:৫৯, ৩০:১৪ আর ৩০:৪৩ আয়াত আনেন, আর বলেন এটি ঘটবে যখন রব ফয়সালার জন্য আসবেন। মওদূদী তাফহীমুল কুরআনে সম্পর্ক ছেঁড়ার ব্যাখ্যাটা সোজা বাতিল করেন, বলেন তা আরবি ব্যবহারের বিরুদ্ধে; শব্দের মানে আমরা তাদের একে অন্য থেকে চিনিয়ে দেব, মুশরিক আর তাদের মা'বুদদের মুখোমুখি দাঁড় করানো হবে যতক্ষণ না একজন অন্যজনের আসল রূপ জেনে যায়। দুটি ব্যাখ্যার মিল হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Idol, Devil or Angel",
          "bn": "মূর্তি, শয়তান নাকি ফেরেশতা"
        },
        "p": [
          {
            "en": "Who are the partners that speak? Al-Qurtubi lists three answers and chooses none: the angels, or the devils, or the idols, which Allah makes speak so that this exchange can take place. He explains why the question matters. The idolaters pressed a charge against the devils they had obeyed and the idols they had worshipped, that these had ordered them to do it, saying we did not worship you until you commanded us. Tanwir al-Miqbas puts the same charge in their mouths and has the idols answer that they commanded nothing.",
            "bn": "যে শরীকরা কথা বলছে, তারা কে? কুরতুবী তিনটি জবাব সাজিয়ে রাখেন, কোনোটিকে বেছে নেন না, ফেরেশতা, নয়তো শয়তানরা, নয়তো মূর্তিগুলো, যাদের আল্লাহ কথা বলিয়ে দেবেন যাতে এই কথাবার্তা হতে পারে। প্রশ্নটা কেন জরুরি তাও তিনি বলেন। মুশরিকরা যে শয়তানদের কথা মেনেছিল আর যে মূর্তিগুলোর পূজা করেছিল, তাদের বিরুদ্ধেই অভিযোগ তুলবে, এরাই আমাদের হুকুম দিয়েছিল; তারা বলবে, তোমরা হুকুম না দিলে আমরা তোমাদের পূজা করতাম না। তানবীরুল মিক্‌বাস একই অভিযোগ তাদের মুখে বসায়, আর মূর্তিরা জবাব দেয় যে তারা কোনো হুকুমই দেয়নি।"
          },
          {
            "en": "At-Tabari preserves the exchange itself in two reports. Mujahid describes an hour of severity on that Day in which the gods they used to worship are set up before them and it is said, these are the ones you worshipped besides Allah; the gods answer, by Allah we did not hear, we did not see, we did not understand, and we did not know that you were worshipping us. Ibn Zayd supplies the worshippers' reply, yes indeed, we used to worship you, and then the partners swear the oath of 10:29.",
            "bn": "তাবারী এই কথাবার্তাটাই দুটি রেওয়ায়েতে ধরে রেখেছেন। মুজাহিদ বর্ণনা করেন, সেদিন কঠিন এক সময় আসবে, তারা যাদের ইবাদত করত সেই মা'বুদদের তাদের সামনে দাঁড় করানো হবে, আর বলা হবে, আল্লাহ ছাড়া এদেরই তো তোমরা ইবাদত করতে। মা'বুদরা জবাব দেবে, আল্লাহর কসম, আমরা শুনতাম না, দেখতাম না, বুঝতাম না, আর জানতামও না যে তোমরা আমাদের ইবাদত করছ। ইবনু যায়দ পূজারিদের জবাবটা যোগ করেন, হ্যাঁ, আমরা তো তোমাদেরই ইবাদত করতাম; তারপর শরীকরা ১০:২৯ আয়াতের কসমটা খায়।"
          },
          {
            "en": "Is the denial honest? Al-Baghawi hears it narrower than it looks: you were not worshipping us at our bidding. As-Sa'di gives the partners a motive that clears Allah rather than themselves, for we declare Allah free of having any partner or equal. Al-Qurtubi raises the possibility of a lie: if the partners are the devils, they may speak in sheer bewilderment, or lie and scheme for a way out, and such a thing may still happen on that Day. So the same four words may be simple truth from stone and a last manoeuvre from a devil.",
            "bn": "এই অস্বীকার কি সত্যি? বাগাবী কথাটা দেখতে যতটা চওড়া, তার চেয়ে সংকীর্ণ করে শোনেন, আমাদের বলায় তো তোমরা আমাদের ইবাদত করতে না। সা'দী শরীকদের যে কারণটা দেন, তা নিজেদের নয়, আল্লাহকেই নিষ্কলুষ করে, কারণ আমরা আল্লাহকে শরীক ও সমকক্ষ থেকে পবিত্র মানি। কুরতুবী মিথ্যার সম্ভাবনাটাও তোলেন, শরীকরা যদি শয়তান হয়, তবে তারা হতভম্ব হয়ে কথাটা বলতে পারে, কিংবা বাঁচার ফন্দি করে মিথ্যা বলতে পারে, আর সেদিনও এমনটা ঘটা অসম্ভব নয়। ফলে একই চারটি শব্দ পাথরের মুখে হতে পারে সরল সত্য, আর শয়তানের মুখে শেষ চাল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Denial Elsewhere",
          "bn": "এই অস্বীকার আরও যেখানে"
        },
        "p": [
          {
            "en": "Ibn Kathir gathers the sisters himself. 19:82 says they will deny their worship of them and will be against them opponents. 2:166 has those who were followed disassociate themselves from those who followed, all of them seeing the punishment while the ties between them are cut off. 46:5-6 puts the two ends together: those invoked are unaware of the invocation now, and when the people are gathered they will be enemies to them and deniers of their worship. Three places, one sentence.",
            "bn": "বোনের মতো আয়াতগুলো ইবনু কাসীর নিজেই জড়ো করেছেন। ১৯:৮২ আয়াত বলছে, তারা এদের ইবাদত অস্বীকার করবে আর এদের বিরুদ্ধ পক্ষ হয়ে দাঁড়াবে। ২:১৬৬ আয়াতে যাদের অনুসরণ করা হয়েছিল তারা অনুসরণকারীদের থেকে সম্পর্ক ছেড়ে দেয়, সবাই শাস্তি দেখতে পায়, আর তাদের মধ্যের বাঁধনগুলো কেটে যায়। ৪৬:৫-৬ আয়াত দুই মাথা একসঙ্গে ধরে, যাদের ডাকা হয় তারা এখনই এই ডাকের খবর রাখে না, আর যখন মানুষ একত্র করা হবে তখন তারা এদের শত্রু হয়ে যাবে আর এদের ইবাদত অস্বীকার করবে। তিন জায়গা, কথা একটাই।"
          },
          {
            "en": "Two more sharpen it. In 16:86 the idolaters point at their partners and say, our Lord, these are our partners whom we used to invoke besides You, and the answer thrown back at them is that they are liars. 35:14 states the case before the Day arrives at all: if you invoke them they do not hear, and if they heard they would not respond, and on the Day of Resurrection they will deny your association. The denial is not news. It was published in advance.",
            "bn": "আরও দুটি আয়াত কথাটা আরও ধারালো করে। ১৬:৮৬ আয়াতে মুশরিকরা নিজেদের শরীকদের দেখিয়ে বলে, হে আমাদের রব, এরাই তো আমাদের সেই শরীক যাদের আমরা আপনাকে ছাড়া ডাকতাম; জবাবে তাদের মুখের উপর বলা হয়, তোমরা মিথ্যাবাদী। ৩৫:১৪ আয়াত সেই দিন আসার অনেক আগেই বিষয়টা পরিষ্কার করে দেয়, তাদের ডাকলে তারা শোনে না, শুনলেও জবাব দিত না, আর কিয়ামতের দিন তারা তোমাদের এই শরীক করাটাই অস্বীকার করবে। তাই অস্বীকারটা নতুন খবর নয়। আগেই জানিয়ে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Nation and Its God",
          "bn": "প্রত্যেক জাতি আর তার মা'বুদ"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a prophetic narration to it. Ibn Kathir quotes one line, that on the Day of Resurrection we will be on a mound above the people, without naming a collection, and no number for it could be confirmed here, so nothing is built on it. What is confirmable stands in Sahih al-Bukhari, and it is brought here as a general principle rather than as a narration the commentators tie to this verse.",
            "bn": "এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে নবীজি ﷺ এর কোনো হাদীস জোড়ে না। ইবনু কাসীর একটি বাক্য উদ্ধৃত করেন, কিয়ামতের দিন আমরা থাকব মানুষের উপরে উঁচু এক টিলায়, তবে কোনো কিতাবের নাম তিনি বলেন না, আর এখানে এর কোনো নম্বরও নিশ্চিত করা যায়নি; তাই এর উপর কিছু দাঁড় করানো হয়নি। যেটা নিশ্চিত করা গেছে তা সহীহ বুখারীতে আছে, আর তা এখানে আনা হচ্ছে সাধারণ নীতি হিসেবে, এই আয়াতের সঙ্গে মুফাসসিরদের জোড়া কোনো হাদীস হিসেবে নয়।"
          },
          {
            "en": "Bukhari 4581, from Abu Sa'id al-Khudri (RA): a call-maker will announce, let every nation follow that which they used to worship. Bukhari 806, from Abu Hurayrah (RA), reports the same order and then the answer of this nation, we shall stay in this place until our Lord comes to us. The posture in both is the posture our verse commands. One group is told to stay where it is and loses everything it stood with; the other stays where it is and waits for the One it worshipped.",
            "bn": "বুখারী ৪৫৮১, আবু সাঈদ খুদরী (রাঃ)-এর সূত্রে, এক ঘোষক ঘোষণা দেবে, প্রত্যেক জাতি তার মা'বুদের পিছনে চলুক, দুনিয়ায় যাকে তারা ইবাদত করত। বুখারী ৮০৬, আবু হুরায়রা (রাঃ)-এর সূত্রে, একই হুকুমের কথা বলে, আর তারপর এই উম্মতের জবাবটাও দেয়, আমরা এই জায়গাতেই থাকব যতক্ষণ না আমাদের রব আমাদের কাছে আসেন। দুই হাদীসের ভঙ্গিটাই আমাদের আয়াতের হুকুমের ভঙ্গি। এক দলকে বলা হয় জায়গায় দাঁড়িয়ে থাকতে, আর তারা সঙ্গে নিয়ে দাঁড়ানো সব কিছু হারায়; আরেক দল জায়গাতেই থাকে, আর যাঁর ইবাদত করত তাঁরই অপেক্ষা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Partner I Still Keep",
          "bn": "যে শরীক আজও রেখে দিয়েছি"
        },
        "p": [
          {
            "en": "The verse describes the people the text describes, those who set partners beside Allah and the things they set up. It passes no sentence on any living person or community and hands nobody a verdict to carry out. Its use is inward. 10:18 had already recorded the claim in their own words, these are our intercessors with Allah, and this verse calls those intercessors forward to answer for themselves. Anything leaned on in that way is asked the same question.",
            "bn": "আয়াত যাদের কথা বলছে, তাদেরই কথা বলছে, যারা আল্লাহর পাশে শরীক দাঁড় করিয়েছিল আর যাদের দাঁড় করিয়েছিল। আজকের কোনো মানুষ বা কোনো জনগোষ্ঠীর উপর এটি রায় দেয় না, কারো হাতে কোনো ফয়সালা তুলেও দেয় না। এর কাজ ভেতরের দিকে। ১০:১৮ আয়াতে তাদের নিজের মুখের দাবিটা আগেই লেখা হয়েছে, এরাই আল্লাহর কাছে আমাদের সুপারিশকারী, আর এই আয়াত সেই সুপারিশকারীদেরই সামনে ডেকে নিজেদের জবাব দিতে বলে। এভাবে যার উপর ভর দেওয়া হয়, তাকেই এই প্রশ্নটা করা হয়।"
          },
          {
            "en": "As-Sa'di's sentence is the one to sit with: the purest love was spent on these partners in the world, and on that Day the allegiance turns over into hatred and severe enmity. So the test is not whether a person owns an idol. It is what he actually expects to speak for him when nothing else will, a reputation, a lineage, a teacher's name, money, a movement, and whether he has quietly asked it for what only Allah gives. What cannot answer for me then is not worth leaning on now.",
            "bn": "সা'দীর কথাটাই নিয়ে বসার মতো। দুনিয়ায় এই শরীকদের পিছনে খাঁটি ভালোবাসাটাই খরচ হয়েছিল, আর সেই দিন সেই টান উল্টে গিয়ে ঘৃণা আর কড়া শত্রুতা হয়ে যায়। তাই পরীক্ষাটা এই নয় যে কারো ঘরে মূর্তি আছে কি নেই। পরীক্ষাটা হল, আর কিছু যখন কাজে আসবে না তখন সে আসলে কার মুখের দিকে তাকিয়ে আছে, নিজের নাম, বংশ, কোনো উস্তাদের নাম, টাকা, নাকি কোনো দল; আর চুপচাপ তার কাছে এমন কিছু চেয়ে ফেলেছে কি না, যা কেবল আল্লাহই দেন। সেদিন যে আমার হয়ে কথা বলতে পারবে না, আজ তার উপর ভর দেওয়ার মানে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Before That Day",
          "bn": "সেই দিনের আগে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "Four to sit with. What do I expect to intercede for me, and have I ever checked whether it has any standing to? When I am frightened, whose name reaches my mouth first? If everything I lean on were stood in front of me and asked whether it had ever told me to lean on it, what would it say? And which of my attachments would go cold on that Day, the way as-Sa'di says these did?",
            "bn": "চারটি প্রশ্ন নিয়ে বসুন। আমার হয়ে সুপারিশ করবে বলে কার দিকে তাকিয়ে আছি, আর কখনো যাচাই করেছি কি তার সেই মর্যাদা আছে কি না? ভয় পেলে সবার আগে কার নাম মুখে আসে? আমি যার উপর ভর দিই, তাকে যদি সামনে দাঁড় করিয়ে জিজ্ঞেস করা হয়, সে কখনো আমাকে ভর দিতে বলেছিল কি না, সে কী বলবে? আর সা'দী যেভাবে বলেছেন, আমার কোন টানটা সেই দিন ঠান্ডা হয়ে যাবে?"
          },
          {
            "en": "One more, from the command itself. Makanakum means stay where you are until you see what is done with you, as al-Muyassar fills it in. If that were said to me today, and the place I had to stand in were the place my own choices had built, where exactly would I be standing, and who would be standing beside me?",
            "bn": "আরও একটি প্রশ্ন, হুকুমটার ভেতর থেকেই। মাকানাকুম মানে নিজের জায়গায় দাঁড়িয়ে থাক, যতক্ষণ না দেখ তোমাদের সঙ্গে কী করা হয়, মুয়াসসার এভাবেই কথাটা পূরণ করেন। আজ যদি আমাকে এটা বলা হয়, আর দাঁড়াতে হয় ঠিক সেই জায়গায় যা আমার নিজের পছন্দগুলো বানিয়েছে, তবে আমি কোথায় দাঁড়িয়ে থাকব, আর আমার পাশে কারা দাঁড়াবে?"
          }
        ]
      }
    ]
  },
  "10:44": {
    "sections": [
      {
        "h": {
          "en": "The Question It Answers",
          "bn": "যে প্রশ্নের উত্তর এটি"
        },
        "p": [
          {
            "en": "The verse arrives as an answer to a difficulty the two verses before it create. In 10:42 the Prophet ﷺ is told that among them are those who listen to you, but can you make the deaf hear, even though they will not use reason? 10:43 repeats the shape for sight: among them are those who look at you, but can you guide the blind, even though they will not see? A listener might fairly ask how the deaf and the blind are to be held answerable.",
            "bn": "আয়াতটি আসে তার আগের দুটি আয়াতের তৈরি করা একটি সমস্যার উত্তর হিসেবে। 10:42 আয়াতে নবী ﷺ-কে বলা হয়, তাদের মধ্যে এমন কেউ আছে যে তোমার কথা শোনে — কিন্তু তুমি কি বধিরকে শোনাতে পারবে, তারা না বুঝলেও? 10:43 একই কাঠামো দৃষ্টির ক্ষেত্রে ফিরিয়ে আনে: তাদের মধ্যে এমন কেউ আছে যে তোমার দিকে তাকায় — কিন্তু তুমি কি অন্ধকে পথ দেখাতে পারবে, তারা না দেখলেও? একজন শ্রোতা ন্যায্যভাবেই জিজ্ঞেস করতে পারেন, বধির ও অন্ধকে কীভাবে জবাবদিহির আওতায় আনা যায়।"
          },
          {
            "en": "10:44 answers without softening anything. Allah does not wrong the people at all; rather, the people wrong themselves. The deafness described is not an affliction that arrived from outside, and the two earlier verses had each attached a clause saying so: they will not use reason, they will not see. Faculties in working order are being declined. 10:45 then closes the passage on the Day they are gathered, feeling they had stayed no longer than an hour.",
            "bn": "10:44 কিছুই নরম না করে উত্তর দেয়। আল্লাহ মানুষের প্রতি বিন্দুমাত্র যুলম করেন না; বরং মানুষ নিজেরাই নিজেদের প্রতি যুলম করে। বর্ণিত বধিরতা বাইরে থেকে আসা কোনো বিপদ নয়, আর আগের দুই আয়াতের প্রত্যেকটিতেই সে কথা বলা একটি বাক্যাংশ যুক্ত ছিল: তারা বুদ্ধি খাটাবে না, তারা দেখবে না। সচল ইন্দ্রিয়গুলোকেই প্রত্যাখ্যান করা হচ্ছে। এরপর 10:45 অংশটি শেষ করে সেই দিনের কথা দিয়ে, যেদিন তাদের একত্র করা হবে এবং মনে হবে তারা এক ঘণ্টার বেশি অবস্থান করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Not by the Smallest Amount",
          "bn": "সামান্যতম পরিমাণেও নয়"
        },
        "p": [
          {
            "en": "Shay'an is the word that closes the first half, and it is doing exact work. An indefinite noun placed inside a negation produces total generality in Arabic: not a thing, not in the least, not by any amount however small. So the clause is not the broad assurance that Allah's justice is reliable. It rules out the smallest possible instance. 4:40 states the same guarantee with a different measure, that He does not wrong by the weight of an atom.",
            "bn": "'শাইআন' শব্দটি প্রথম অর্ধেকটি শেষ করে, আর তা নিখুঁত একটি কাজ করছে। আরবিতে নেতিবাচক বাক্যের ভেতরে বসানো অনির্দিষ্ট বিশেষ্য সম্পূর্ণ ব্যাপকতা তৈরি করে: কোনো কিছুই নয়, বিন্দুমাত্র নয়, যত ছোট পরিমাণই হোক তাতেও নয়। কাজেই বাক্যটি এই ঢালাও আশ্বাস নয় যে আল্লাহর ন্যায়বিচার নির্ভরযোগ্য। এটি সম্ভাব্য ক্ষুদ্রতম দৃষ্টান্তটিকেও বাতিল করে দেয়। 4:40 একই নিশ্চয়তা ভিন্ন এক মাপকাঠিতে বলে — তিনি অণু পরিমাণও যুলম করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Turn in the Middle",
          "bn": "মাঝখানের মোড়"
        },
        "p": [
          {
            "en": "Then wa lakinna, which is not simply and. It is the particle of correction, withdrawing the impression the first clause might have left and redirecting it. The sentence also repeats an-nas, the people, on purpose: they are the object of the verb in the first half and its subject in the second. And the closing clause puts anfusahum, themselves, in front of the verb, a fronting Arabic uses for restriction. It is themselves, specifically, that they are wronging.",
            "bn": "এরপর আসে 'ওয়া লাকিন্না', যা নিছক 'এবং' নয়। এটি সংশোধনের অব্যয় — প্রথম বাক্যাংশ যে ধারণা রেখে যেতে পারত তা প্রত্যাহার করে নিয়ে দিক বদলে দেয়। বাক্যটি ইচ্ছাকৃতভাবে 'আন-নাস' অর্থাৎ 'মানুষ' শব্দটিও দুবার আনে: প্রথম অর্ধেকে তারা ক্রিয়ার কর্ম, দ্বিতীয় অর্ধেকে তারাই কর্তা। আর শেষ বাক্যাংশে 'আনফুসাহুম' অর্থাৎ 'নিজেদেরকে' শব্দটি ক্রিয়ার আগে বসানো হয়েছে — আরবিতে এই অগ্রবর্তন সীমাবদ্ধতা বোঝাতে ব্যবহৃত হয়। তারা যুলম করছে নিজেদের প্রতিই, বিশেষভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Zulm Is",
          "bn": "যুলম কী"
        },
        "p": [
          {
            "en": "The lexicographers define zulm as putting a thing somewhere other than its own place. That is why one word covers injustice, oppression and idolatry alike: each is something set down where it does not belong, a right in the wrong hands, a worship given to the wrong object, a life spent on the wrong claim. Muslim relates the hadith qudsi from Abu Dharr (RA) in which Allah says: O My servants, I have forbidden zulm upon Myself and have made it forbidden among you, so do not wrong one another.",
            "bn": "অভিধানবিদগণ যুলমের সংজ্ঞা দেন এভাবে: কোনো জিনিসকে তার নিজের জায়গা ছাড়া অন্য কোথাও রাখা। এ কারণেই একটিমাত্র শব্দ অবিচার, নিপীড়ন ও শিরক — সবই ধারণ করে: প্রতিটিই এমন কিছু যা ভুল জায়গায় রাখা হয়েছে — ভুল হাতে একটি অধিকার, ভুল বস্তুতে দেওয়া ইবাদত, ভুল দাবির পেছনে ব্যয় করা একটি জীবন। মুসলিম আবু যর (রাঃ) থেকে হাদীসে কুদসীটি বর্ণনা করেন, যাতে আল্লাহ বলেন: হে আমার বান্দারা, আমি যুলমকে নিজের ওপর হারাম করেছি এবং তোমাদের মধ্যেও তা হারাম করেছি, কাজেই তোমরা একে অপরের প্রতি যুলম করো না।"
          },
          {
            "en": "The hadith and the verse make two matching statements in the same order. First, that the possibility of injustice from Allah is closed; not merely restrained, but forbidden by Him upon Himself. Second, that the injustice actually in circulation is ours: the verse says people wrong themselves, and the hadith adds that they wrong one another. Nothing in either text denies that people wrong each other. What is denied is that any of it originates above.",
            "bn": "হাদীস ও আয়াত মিলে যাওয়া দুটি কথা একই ক্রমে বলে। প্রথমত, আল্লাহর পক্ষ থেকে অবিচারের সম্ভাবনার দরজা বন্ধ — কেবল সংযত নয়, বরং তিনি নিজেই তা নিজের ওপর হারাম করেছেন। দ্বিতীয়ত, বাস্তবে যে অবিচার চলছে তা আমাদেরই: আয়াত বলে মানুষ নিজেদের প্রতিই যুলম করে, আর হাদীস যোগ করে যে তারা একে অপরের প্রতিও তা করে। কোনো পাঠই এ কথা অস্বীকার করে না যে মানুষ একে অপরের প্রতি অন্যায় করে। যা অস্বীকার করা হয় তা হলো — এর কোনো কিছুরই উৎস ওপর থেকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Refrain Across the Book",
          "bn": "কিতাবজুড়ে একটি ধুয়া"
        },
        "p": [
          {
            "en": "The second half of this verse is close to a refrain. 2:57 says of the Children of Israel, given shade and manna and quails, that they did not wrong Us but were wronging themselves. 9:70 says it of the destroyed nations after listing them by name, 16:33 of people waiting for the angels to come, 29:40 after cataloguing the storm and the blast and the swallowing earth and the drowning, and 30:9 of a people stronger than the Makkans who had built more than they had.",
            "bn": "এই আয়াতের দ্বিতীয় অর্ধেকটি প্রায় একটি ধুয়ার মতো। 2:57 বনী ইসরাঈল সম্পর্কে বলে — যাদের ছায়া, মান্না ও সালওয়া দেওয়া হয়েছিল — তারা আমার প্রতি যুলম করেনি, বরং নিজেদের প্রতিই যুলম করেছিল। 9:70 কথাটি বলে ধ্বংসপ্রাপ্ত জাতিগুলোর নাম ধরে ধরে উল্লেখ করার পর, 16:33 বলে তাদের সম্পর্কে যারা ফেরেশতাদের আসার অপেক্ষায় আছে, 29:40 বলে ঝটিকা, বজ্রধ্বনি, ভূগর্ভে প্রোথিত হওয়া ও ডুবে যাওয়ার তালিকা দেওয়ার পর, আর 30:9 বলে এমন এক জাতি সম্পর্কে যারা মক্কাবাসীদের চেয়ে শক্তিশালী ছিল এবং তাদের চেয়ে বেশি আবাদ করেছিল।"
          },
          {
            "en": "Set together, those verses show what the clause is for. It is attached to verdicts, to the moment a community's account is closed and the reader is tempted to ask whether the punishment was fair. The Quran does not argue the case afresh each time. It repeats one sentence, and the sentence assigns the cause to the party that had the faculties, the messengers and the time.",
            "bn": "একসঙ্গে রাখলে আয়াতগুলো দেখিয়ে দেয় বাক্যাংশটি কী কাজে লাগে। এটি যুক্ত হয় রায়ের সঙ্গে — সেই মুহূর্তে, যখন কোনো জাতির হিসাব চুকে যায় এবং পাঠকের মনে প্রশ্ন জাগতে চায় যে শাস্তিটি ন্যায্য ছিল কি না। কুরআন প্রতিবার নতুন করে যুক্তি সাজায় না। সে একটিমাত্র বাক্য পুনরাবৃত্তি করে, আর সেই বাক্য কারণটি চাপিয়ে দেয় সেই পক্ষের ওপর, যার কাছে ইন্দ্রিয় ছিল, রাসূলগণ এসেছিলেন এবং সময়ও ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Wronging Yourself",
          "bn": "নিজের প্রতি যুলম"
        },
        "p": [
          {
            "en": "The Quran also puts the phrase in the mouths of its best people. In 28:16 Musa (AS), after a blow that killed a man, says: my Lord, indeed I have wronged myself, so forgive me; and He forgave him, in the same verse. Nothing in that sentence blames the Egyptian, the Israelite, the crowd or the hour. Self-wronging named accurately turns out to be the opening move of repentance rather than an act of self-punishment.",
            "bn": "কুরআন কথাটি তার শ্রেষ্ঠ মানুষদের মুখেও বসিয়ে দেয়। 28:16 আয়াতে মূসা (আঃ), যে আঘাতে একজন মানুষ মারা গিয়েছিল তার পর, বলেন: হে আমার প্রতিপালক, আমি নিজের প্রতি যুলম করেছি, কাজেই আমাকে ক্ষমা করুন — আর একই আয়াতেই তিনি তাঁকে ক্ষমা করে দেন। এই বাক্যে মিসরীয়, ইসরাঈলী, ভিড় কিংবা সময় — কারও ওপরই দোষ চাপানো হয়নি। নিজের প্রতি যুলমকে সঠিকভাবে নাম দেওয়াটা দেখা যাচ্ছে আত্মনির্যাতন নয়, বরং তাওবার প্রথম পদক্ষেপ।"
          },
          {
            "en": "Read as a discipline, this verse redirects an instinct. When something goes badly the mind reaches for a cause outside itself: the timing, the people, the decree. 10:44 does not deny that others do wrong, and it is not a rule for assigning blame to victims. It removes exactly one candidate from the list, permanently and entirely, and what is left is a question a believer can act on, because the only conduct in the account that he controls is his own.",
            "bn": "সাধনা হিসেবে পড়লে এই আয়াত একটি সহজাত প্রবণতাকে ঘুরিয়ে দেয়। কিছু খারাপ হলে মন কারণ খোঁজে নিজের বাইরে: সময়, মানুষজন, তাকদীর। 10:44 এ কথা অস্বীকার করে না যে অন্যরা অন্যায় করে, আর এটি ক্ষতিগ্রস্তের ঘাড়ে দোষ চাপানোর নিয়মও নয়। এটি তালিকা থেকে ঠিক একটি সম্ভাবনাকে স্থায়ীভাবে ও সম্পূর্ণভাবে সরিয়ে দেয়; আর যা অবশিষ্ট থাকে তা এমন এক প্রশ্ন যা নিয়ে মুমিন কাজ করতে পারে, কারণ এই হিসাবের ভেতরে একমাত্র যে আচরণটি তার নিয়ন্ত্রণে, সেটি তার নিজেরই।"
          }
        ]
      }
    ]
  },
  "10:57": {
    "sections": [
      {
        "h": {
          "en": "Addressed to All People",
          "bn": "সব মানুষের প্রতি সম্বোধন"
        },
        "p": [
          {
            "en": "Surah Yunus circles one dispute: the people of Makkah demanded a different Quran, or that this one be changed, and the surah answers by describing what the Quran actually is. At this point the address widens beyond the disputers: ya ayyuhan-nas, O mankind. What follows is not an argument but an announcement of goods received — there has come to you an admonition from your Lord, a healing for what is in the breasts, and guidance and mercy for the believers.",
            "bn": "সূরা ইউনুস একটি বিতর্ককে ঘিরে ঘোরে: মক্কার লোকেরা দাবি করেছিল ভিন্ন এক কুরআন, নয়তো এটিকেই বদলে দেওয়া হোক; আর সূরাটি উত্তর দেয় কুরআন আসলে কী তা বর্ণনা করে। এই জায়গায় এসে সম্বোধন বিতর্ককারীদের ছাড়িয়ে প্রশস্ত হয়: 'ইয়া আইয়ুহান-নাস' — হে মানবজাতি। এরপর যা আসে তা কোনো যুক্তি নয়, বরং পৌঁছে যাওয়া নিয়ামতের ঘোষণা — তোমাদের কাছে এসেছে তোমাদের রবের পক্ষ থেকে উপদেশ, বক্ষে যা আছে তার নিরাময়, আর মুমিনদের জন্য হিদায়াত ও রহমত।"
          },
          {
            "en": "The phrase min rabbikum, from your Lord, carries the tone. What has arrived is not a book from a lawgiver to subjects but provision from the One who has been raising and sustaining you all along; rabb is the word of nurture. A summons from a ruler and a parcel from a caretaker are opened with different hands. The verse insists the Quran is the second kind of arrival, whatever its critics were calling it.",
            "bn": "'মিন রাব্বিকুম' — তোমাদের রবের পক্ষ থেকে — বাক্যাংশটিই সুরটা ঠিক করে দেয়। যা এসে পৌঁছেছে তা কোনো বিধানদাতার পক্ষ থেকে প্রজাদের প্রতি পাঠানো বই নয়, বরং তাঁর পাঠানো রসদ, যিনি এতদিন ধরে তোমাদের লালন ও প্রতিপালন করে আসছেন; 'রব' শব্দটিই পরিচর্যার শব্দ। শাসকের তলব আর অভিভাবকের পাঠানো উপহার — দুটি মানুষ খোলে ভিন্ন হাতে। আয়াতটি জোর দিয়ে বলে, কুরআন দ্বিতীয় ধরনের আগমন — সমালোচকেরা একে যা-ই বলুক।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Gifts in Order",
          "bn": "ক্রমানুসারে চারটি দান"
        },
        "p": [
          {
            "en": "The verse names four things: maw'izah, admonition; shifa' lima fis-sudur, healing for what is in the breasts; huda, guidance; rahmah, mercy. Commentators including as-Sa'di read the sequence as a course of treatment. Admonition confronts and warns, the way a physician names the disease. Healing then works on the inner faculties the disease had corrupted. Guidance sets the recovered patient walking on the right road, and mercy is the flourishing at the road's end.",
            "bn": "আয়াতটি চারটি জিনিসের নাম নেয়: 'মাওইযা' — উপদেশ; 'শিফাউল লিমা ফিস-সুদূর' — বক্ষে যা আছে তার নিরাময়; 'হুদা' — হিদায়াত; 'রহমাহ' — রহমত। আস-সা'দীসহ মুফাসসিরগণ এই ক্রমকে পড়েন একটি চিকিৎসা-পদ্ধতি হিসেবে। উপদেশ মুখোমুখি দাঁড় করায় ও সতর্ক করে — যেমন চিকিৎসক রোগের নাম বলেন। নিরাময় এরপর কাজ করে সেই ভেতরের শক্তিগুলোর ওপর, রোগ যেগুলোকে নষ্ট করেছিল। হিদায়াত সুস্থ রোগীকে সঠিক পথে হাঁটতে নামিয়ে দেয়, আর রহমত সেই পথের শেষের সমৃদ্ধি।"
          },
          {
            "en": "The distribution of the gifts is equally deliberate. The admonition is announced to all mankind, but the verse ends lil-mu'minin, for the believers — guidance and mercy reach the ones who accept the treatment. Medicine on the shelf heals nobody. The Quran's benefit, the verse implies, is not automatic in a house where the book is present; it is conditional on the patient actually taking what was sent.",
            "bn": "দানগুলোর বণ্টনও সমান পরিকল্পিত। উপদেশ ঘোষিত হয়েছে গোটা মানবজাতির উদ্দেশে, কিন্তু আয়াত শেষ হয় 'লিল-মুমিনীন' — মুমিনদের জন্য; হিদায়াত ও রহমত তাদের কাছেই পৌঁছায়, যারা চিকিৎসাটি গ্রহণ করে। তাকের ওপর রাখা ওষুধ কাউকে সারায় না। আয়াতের ইঙ্গিত: যে ঘরে কিতাবটি আছে সেখানে এর উপকার আপনাআপনি আসে না; শর্ত হলো — রোগীকে সত্যিই খেতে হবে যা পাঠানো হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Breasts Carry",
          "bn": "বক্ষ যা বহন করে"
        },
        "p": [
          {
            "en": "The healing is located precisely: lima fis-sudur, for what is in the breasts. The mufassirun name the diseases that live there — doubt about the truth, hypocrisy, envy, and the restless attachment to desires. As-Sa'di sums the classes into two: shubuhat, the confusions that sicken conviction, and shahawat, the appetites that sicken the will. The Quran treats the first with clear proofs and the second by making the Hereafter vivid and the world's price honest.",
            "bn": "নিরাময়ের ঠিকানা সুনির্দিষ্ট: 'লিমা ফিস-সুদূর' — বক্ষে যা আছে তার জন্য। মুফাসসিরগণ সেখানে বাস করা ব্যাধিগুলোর নাম নেন — সত্য নিয়ে সন্দেহ, নিফাক, হিংসা, আর কামনার অস্থির আসক্তি। আস-সা'দী শ্রেণিগুলোকে দুই ভাগে গুছিয়ে আনেন: 'শুবুহাত' — যে বিভ্রান্তিগুলো প্রত্যয়কে রোগগ্রস্ত করে, আর 'শাহাওয়াত' — যে প্রবৃত্তিগুলো ইচ্ছাশক্তিকে রোগগ্রস্ত করে। কুরআন প্রথমটির চিকিৎসা করে স্পষ্ট প্রমাণ দিয়ে, আর দ্বিতীয়টির — আখিরাতকে জীবন্ত করে আর দুনিয়ার দাম সততার সঙ্গে জানিয়ে।"
          },
          {
            "en": "The claim recurs in 17:82, We send down of the Quran that which is healing and mercy for the believers, though it increases the wrongdoers only in loss. The same rain grows the garden and floods the ruin; the difference is in the ground. Reading these two verses together guards against a superstition and a despair alike — the Quran is not a charm that works regardless of the heart, nor a text too lofty to reach one.",
            "bn": "দাবিটি আবার আসে 17:82 আয়াতে: আমি কুরআনে এমন কিছু নাযিল করি যা মুমিনদের জন্য নিরাময় ও রহমত, যদিও তা জালিমদের ক্ষতিই কেবল বাড়ায়। একই বৃষ্টি বাগান ফলায় আর ধ্বংসস্তূপ ভাসায়; পার্থক্য মাটিতে। এই দুটি আয়াত মিলিয়ে পড়া একইসঙ্গে একটি কুসংস্কার ও একটি হতাশা থেকে বাঁচায় — কুরআন এমন কোনো কবচ নয় যা হৃদয়ের অবস্থা নির্বিশেষে কাজ করে, আবার এমন উঁচু কোনো গ্রন্থও নয় যা কারও নাগালে পৌঁছায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Better Than What They Amass",
          "bn": "তারা যা জমায় তার চেয়ে উত্তম"
        },
        "p": [
          {
            "en": "The next verse presses the point into economics. In 10:58, say: in the bounty of Allah and in His mercy — in that let them rejoice; it is better than what they gather. Early commentators read the bounty and the mercy here as Islam and the Quran. The verse thus stages a comparison people rarely make out loud: on one side everything a lifetime can accumulate, on the other the revelation lying on the shelf, and it ranks the second higher.",
            "bn": "পরের আয়াতটি কথাটিকে অর্থনীতির ভাষায় চেপে ধরে। 10:58 আয়াতে: বলো, আল্লাহর অনুগ্রহে ও তাঁর রহমতে — এতেই তারা আনন্দিত হোক; তারা যা জমা করে এর চেয়ে এটি উত্তম। প্রাচীন মুফাসসিরগণ এখানকার অনুগ্রহ ও রহমতকে পড়েছেন ইসলাম ও কুরআন অর্থে। আয়াতটি এভাবে এমন এক তুলনা মঞ্চে তোলে, যা মানুষ কমই মুখ ফুটে করে: এক পাশে গোটা জীবনে যা জমানো যায় তার সবটা, অন্য পাশে তাকের ওপর পড়ে থাকা ওহী — এবং দ্বিতীয়টিকে সে উপরে স্থান দেয়।"
          },
          {
            "en": "Rejoicing is commanded, which is worth noticing. Gratitude for the Quran is not meant to stay at solemn respect; it is meant to reach the register of joy that people otherwise reserve for windfalls. A believer who would celebrate an inheritance but has never once felt lucky about owning revelation has, by the measure of 10:58, priced the two backwards.",
            "bn": "আনন্দ করার আদেশ দেওয়া হয়েছে — এটি লক্ষ করার মতো। কুরআনের জন্য কৃতজ্ঞতা কেবল গম্ভীর সম্মানে থেমে থাকার কথা নয়; তার পৌঁছানোর কথা সেই আনন্দের স্তরে, যা মানুষ সাধারণত অপ্রত্যাশিত প্রাপ্তির জন্য তুলে রাখে। যে মুমিন উত্তরাধিকার পেলে উৎসব করত, অথচ ওহীর মালিক হওয়ায় একবারও নিজেকে ভাগ্যবান ভাবেনি — 10:58 আয়াতের মাপকাঠিতে সে দুটির দাম উল্টো করে ধরেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking the Cure",
          "bn": "নিরাময় গ্রহণ করা"
        },
        "p": [
          {
            "en": "The lived form of this verse is a change in how one approaches the book. A person reads differently when reading for a condition: the anxious reader watching for verses on decree and provision, the doubting reader for the arguments, the hardened reader for the passages that describe hearts like his own. The note behind this article says it directly — when we come to it as a cure, we discover it was sent for exactly what ails us.",
            "bn": "এই আয়াতের যাপিত রূপ হলো কিতাবটির কাছে যাওয়ার ভঙ্গিতে একটি পরিবর্তন। নিজের অসুখ সামনে রেখে পড়লে মানুষ অন্যভাবে পড়ে: উদ্বিগ্ন পাঠক খোঁজে তাকদীর ও রিযিকের আয়াত, সন্দেহগ্রস্ত পাঠক খোঁজে যুক্তিগুলো, কঠিন-হৃদয় পাঠক খোঁজে সেই অংশগুলো, যা তার নিজের মতো হৃদয়ের বর্ণনা দেয়। এই লেখার পেছনের নোটটি সরাসরিই বলে — নিরাময় হিসেবে এর কাছে গেলে আমরা আবিষ্কার করি, এটি পাঠানো হয়েছিল ঠিক আমাদের অসুখের জন্যই।"
          },
          {
            "en": "Treatment also implies dosage and regularity. No one expects medicine taken once a year, on an occasion, to hold a chronic condition at bay. A small daily portion read with the question what is this saying to my present state does more of the verse's work than a long recitation performed while the mind is elsewhere. The four gifts are already in the book; the reader's part is to keep the appointment.",
            "bn": "চিকিৎসা মানেই মাত্রা ও নিয়মানুবর্তিতা। বছরে একবার, কোনো উপলক্ষে খাওয়া ওষুধ দীর্ঘস্থায়ী রোগ ঠেকিয়ে রাখবে — এমনটা কেউ আশা করে না। 'এটি আমার বর্তমান অবস্থাকে কী বলছে' — এই প্রশ্ন নিয়ে পড়া ছোট্ট দৈনিক অংশ, মন অন্যত্র রেখে করা দীর্ঘ তিলাওয়াতের চেয়ে আয়াতটির কাজ বেশি করে। চারটি দান কিতাবে আগে থেকেই আছে; পাঠকের কাজ কেবল সাক্ষাতের সময়টা রক্ষা করা।"
          }
        ]
      }
    ]
  },
  "10:62-64": {
    "sections": [
      {
        "h": {
          "en": "Who His Allies Are",
          "bn": "তাঁর বন্ধু কারা"
        },
        "p": [
          {
            "en": "Unquestionably, the awliya of Allah — no fear will be upon them, nor will they grieve. The word wali carries closeness and alliance, and around it whole mythologies have grown: sainthood as a special caste, marked by wonders and reached by secrets. So 10:63 immediately defines the term and closes the mythology: those who believed and used to fear Allah. Faith and taqwa — the definition contains nothing else.",
            "bn": "জেনে রাখো, আল্লাহর আওলিয়া — তাদের কোনো ভয় নেই, তারা দুঃখিতও হবে না। ওয়ালী শব্দটি বহন করে নৈকট্য ও মৈত্রী, আর একে ঘিরে গড়ে উঠেছে আস্ত সব কল্পকথা: বিশেষ এক শ্রেণি হিসেবে বুযুর্গি, যার চিহ্ন অলৌকিকতা আর পথ গোপন রহস্য। তাই 10:63 সঙ্গে সঙ্গেই শব্দটির সংজ্ঞা দিয়ে কল্পকথার দরজা বন্ধ করে: যারা ঈমান এনেছে এবং তাকওয়া অবলম্বন করত। ঈমান ও তাকওয়া — সংজ্ঞায় এছাড়া আর কিছুই নেই।"
          },
          {
            "en": "The definition is the most quoted thing the mufassirun say here, because it makes walaya open. No lineage is named, no order, no initiation, no miracle. Whoever believes and is mindful of Allah has a share of His alliance in exact proportion to those two qualities — and whoever claims the rank without them has only the claim.",
            "bn": "মুফাসসিরগণ এখানে যা বলেন তার মধ্যে এই সংজ্ঞাটিই সবচেয়ে বেশি উদ্ধৃত, কারণ এটি ওয়ালায়াকে সবার জন্য খোলা করে দেয়। কোনো বংশের নাম নেই, কোনো তরিকা নেই, কোনো দীক্ষা নেই, কোনো কারামত নেই। যে ঈমান আনে ও আল্লাহ-সচেতন থাকে, ঠিক সেই দুই গুণের অনুপাতেই তার তাঁর মৈত্রীর অংশ আছে — আর যে গুণ দুটি ছাড়া পদটি দাবি করে, তার আছে কেবল দাবিটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "No Fear, No Grief",
          "bn": "নেই ভয়, নেই দুঃখ"
        },
        "p": [
          {
            "en": "The commentators observe the pair's precision: khawf, fear, faces what may come; huzn, grief, faces what has passed. Between them they cover every direction from which sorrow enters a life. The verse does not promise that Allah's allies feel nothing — the prophets themselves knew fear and sadness — but that neither will settle on them as a final state, and that on the Day it matters most, both are lifted entirely.",
            "bn": "মুফাসসিরগণ জোড়াটির সূক্ষ্মতা লক্ষ করেন: খাওফ — ভয় — মুখ করে থাকে যা আসতে পারে তার দিকে; হুযন — দুঃখ — যা চলে গেছে তার দিকে। দুয়ে মিলে জীবনে বেদনা ঢোকার প্রতিটি দিক ঢেকে ফেলে। আয়াতটি প্রতিশ্রুতি দেয় না যে আল্লাহর বন্ধুরা কিছুই অনুভব করেন না — নবীরাও (আঃ) ভয় ও বিষণ্নতা জেনেছেন — বরং এই যে, কোনোটিই তাদের ওপর চূড়ান্ত অবস্থা হয়ে বসবে না, আর যে দিনটিতে সবচেয়ে বেশি দরকার, সেদিন দুটিই সম্পূর্ণ তুলে নেওয়া হবে।"
          },
          {
            "en": "Their security has an unusual source. It does not come from wealth, walls or numbers, but from the two inward qualities of 10:63, and that is why it cannot be confiscated. Everything the world secures, the world can also seize; what faith and taqwa secure sits beyond reach, which is the whole advantage of being allied to the One whom nothing escapes and nothing defeats.",
            "bn": "তাদের নিরাপত্তার উৎসটি অস্বাভাবিক। তা আসে না সম্পদ, প্রাচীর বা সংখ্যা থেকে — আসে 10:63 আয়াতের দুটি অন্তর্গত গুণ থেকে। সে জন্যই তা বাজেয়াপ্ত করা যায় না। দুনিয়া যা কিছু নিরাপদ করে, দুনিয়া তা কেড়েও নিতে পারে; ঈমান ও তাকওয়া যা নিরাপদ করে তা নাগালের বাইরে — আর এটিই সেই সত্তার মিত্র হওয়ার পুরো সুবিধা, যাঁর থেকে কিছুই পালায় না এবং যাঁকে কিছুই পরাজিত করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Good News in Both Lives",
          "bn": "উভয় জীবনে সুসংবাদ"
        },
        "p": [
          {
            "en": "For them is good news in the life of this world and in the Hereafter. The Prophet ﷺ explained the worldly share: the righteous dream a Muslim sees or that is seen about him — related in the sound collections as what remains of the tidings of prophethood. Muslim also relates that when a man does good and people praise him for it, that is the immediate glad tidings of the believer.",
            "bn": "তাদের জন্য সুসংবাদ দুনিয়ার জীবনে ও আখিরাতে। দুনিয়ার অংশটির ব্যাখ্যা নবী ﷺ নিজে দিয়েছেন: সেই ভালো স্বপ্ন যা একজন মুসলিম দেখে বা তার সম্পর্কে দেখা হয় — বিশুদ্ধ সংকলনগুলোতে বর্ণিত, নবুওয়াতের সুসংবাদসমূহের যা অবশিষ্ট আছে তা হিসেবে। মুসলিম আরও বর্ণনা করেন: মানুষ যখন ভালো কাজ করে এবং লোকে তার জন্য তার প্রশংসা করে, তা মুমিনের আগাম সুসংবাদ।"
          },
          {
            "en": "The commentators add the third and greatest instalment: the tidings the angels bring at death, described in 41:30 — those who said our Lord is Allah and stood firm, upon them the angels descend: do not fear and do not grieve, and receive the good news of the Garden you were promised. The same two words, fear and grief, cancelled at the exact moment humans dread most.",
            "bn": "মুফাসসিরগণ যোগ করেন তৃতীয় ও সর্বশ্রেষ্ঠ কিস্তিটি: মৃত্যুর সময় ফেরেশতাদের আনা সুসংবাদ, যার বর্ণনা 41:30 আয়াতে — যারা বলেছে আমাদের রব আল্লাহ, তারপর অবিচল থেকেছে, তাদের ওপর ফেরেশতারা নেমে আসে: ভয় কোরো না, দুঃখও কোরো না, আর সেই জান্নাতের সুসংবাদ নাও যার প্রতিশ্রুতি তোমাদের দেওয়া হয়েছিল। সেই একই দুটি শব্দ — ভয় ও দুঃখ — বাতিল হয়ে যায় ঠিক সেই মুহূর্তে, মানুষ যাকে সবচেয়ে বেশি ভয় পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Words That Do Not Change",
          "bn": "যে বাণী বদলায় না"
        },
        "p": [
          {
            "en": "Then the guarantee: no change is there in the words of Allah — that is the great attainment. Promises fail for two reasons, deceit or inability, and both are impossible for Him. The verse fixes the promise's reliability to His own nature: His words do not change because He does not change His word, as 50:29 says — the word will not be altered with Me.",
            "bn": "তারপর নিশ্চয়তা: আল্লাহর বাণীসমূহে কোনো পরিবর্তন নেই — এটিই মহাসাফল্য। প্রতিশ্রুতি ভাঙে দুটি কারণে — প্রতারণা অথবা অক্ষমতা — এবং দুটিই তাঁর ক্ষেত্রে অসম্ভব। আয়াতটি প্রতিশ্রুতির নির্ভরযোগ্যতাকে বেঁধে দেয় তাঁর নিজের সত্তার সঙ্গে: তাঁর বাণী বদলায় না, কারণ তিনি নিজের কথা বদলান না — যেমন 50:29 বলে: আমার কাছে কথা রদবদল হয় না।"
          },
          {
            "en": "Al-fawz al-'azim, the great attainment, is the Quran's settled name for the best possible outcome. Attaching it here teaches proportion: the triumph is not the dream, nor the people's praise, but the standing itself — to be someone Allah calls His ally, guarded from fear and grief by a promise that cannot be revised in either world.",
            "bn": "আল-ফাওযুল আযীম — মহাসাফল্য — সর্বোত্তম সম্ভাব্য পরিণতির জন্য কুরআনের নির্ধারিত নাম। এখানে তা যুক্ত করা শেখায় অনুপাতবোধ: বিজয় স্বপ্নটি নয়, লোকের প্রশংসাও নয়, বরং মর্যাদাটিই — এমন কেউ হওয়া যাকে আল্লাহ নিজের মিত্র বলেন, এমন এক প্রতিশ্রুতিতে ভয় ও দুঃখ থেকে সুরক্ষিত, যা দুই জগতের কোনোটিতেই সংশোধিত হতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Road Into Walaya",
          "bn": "ওয়ালায়ার পথ"
        },
        "p": [
          {
            "en": "Al-Bukhari relates the hadith qudsi that maps the road: whoever shows enmity to a wali of Mine, I have declared war upon him; My servant draws near to Me with nothing more beloved to Me than what I have made obligatory upon him, and he keeps drawing near with voluntary acts until I love him. The order is the point — the obligations first, then the extras, and love at the end of a long ordinary road.",
            "bn": "আল-বুখারী সেই হাদীসে কুদসী বর্ণনা করেন যা পথের মানচিত্র এঁকে দেয়: যে আমার কোনো ওয়ালীর সঙ্গে শত্রুতা করে, আমি তার বিরুদ্ধে যুদ্ধ ঘোষণা করলাম; আমার বান্দা আমার নৈকট্য লাভ করে এমন কিছু দিয়ে নয় যা আমার কাছে তার ওপর ফরয করা বিষয়ের চেয়ে প্রিয়তর, আর সে নফল আমল দিয়ে নৈকট্য বাড়াতেই থাকে যতক্ষণ না আমি তাকে ভালোবাসি। ক্রমটিই মূল কথা — আগে ফরযগুলো, তারপর অতিরিক্ত, আর ভালোবাসা এক দীর্ঘ সাদামাটা পথের শেষে।"
          },
          {
            "en": "Nothing in that road is exotic. Prayers on time, honest earnings, dues paid, then the gentle accumulation of voluntary prayer, fasting, charity and remembrance. The hadith continues that when Allah loves the servant, He is the hearing with which he hears and the seeing with which he sees, and if he asks, He gives him — the lived meaning of having Allah as one's wali.",
            "bn": "এই পথের কোনো কিছুই অলৌকিক নয়। সময়মতো নামায, হালাল উপার্জন, প্রাপ্য আদায় — তারপর নফল নামায, রোযা, সদকা ও যিকিরের ধীর সঞ্চয়। হাদীসটি আরও বলে: আল্লাহ যখন বান্দাকে ভালোবাসেন, তিনি হয়ে যান সেই শ্রবণ যা দিয়ে সে শোনে, সেই দৃষ্টি যা দিয়ে সে দেখে, আর সে চাইলে তিনি তাকে দেন — আল্লাহকে নিজের ওয়ালী হিসেবে পাওয়ার জীবন্ত অর্থ এটিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Measuring by the Right Scale",
          "bn": "সঠিক মানদণ্ডে মাপা"
        },
        "p": [
          {
            "en": "These verses re-calibrate two judgments. About others: rank in Allah's sight tracks faith and taqwa, not fame, wealth or titles — so the unnoticed woman of consistent prayer may outrank the celebrated. About ourselves: anxiety about the future and grief over the past are, among much else, signals showing where our security is currently invested, and in what.",
            "bn": "এই আয়াতগুলো দুটি বিচারকে নতুন করে মাপে। অন্যদের সম্পর্কে: আল্লাহর কাছে মর্যাদা চলে ঈমান ও তাকওয়ার পথ ধরে — খ্যাতি, সম্পদ বা উপাধির পথে নয় — তাই নিয়মিত নামাযের সেই অনালোচিত নারী বিখ্যাতজনকে ছাড়িয়ে যেতে পারেন। নিজেদের সম্পর্কে: ভবিষ্যতের দুশ্চিন্তা আর অতীতের দুঃখ, আরও অনেক কিছুর সঙ্গে, সংকেত দেয় আমাদের নিরাপত্তা এই মুহূর্তে কোথায় বিনিয়োগ করা — আর কীসে।"
          },
          {
            "en": "The response the passage invites is to move the investment. Strengthen the two qualifying qualities — belief, examined and fed; taqwa, practiced in small daily refusals — and the promised freedoms follow at their own pace, in this life as tranquillity and in the next completely. That is the trade 10:64 calls the great attainment, offered without change to anyone willing to be His ally on His terms.",
            "bn": "অংশটি যে সাড়ার আমন্ত্রণ জানায় তা হলো বিনিয়োগটাই সরিয়ে নেওয়া। যোগ্যতা নির্ধারণকারী দুই গুণকে মজবুত করুন — ঈমান, যাচাই করা ও পুষ্ট করা; তাকওয়া, ছোট ছোট দৈনিক প্রত্যাখ্যানে চর্চিত — আর প্রতিশ্রুত মুক্তিগুলো আসবে নিজেদের গতিতে: এই জীবনে প্রশান্তি হয়ে, পরের জীবনে সম্পূর্ণরূপে। এই বিনিময়কেই 10:64 বলে মহাসাফল্য — অপরিবর্তিতভাবে দেওয়া প্রত্যেককে, যে তাঁর শর্তে তাঁর মিত্র হতে রাজি।"
          }
        ]
      }
    ]
  }
});
